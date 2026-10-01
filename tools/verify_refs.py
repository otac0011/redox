"""Independently verify every reference in data/*.json against PubMed / Crossref.

    python tools/verify_refs.py            # report
    python tools/verify_refs.py --json out.json

For each reference with a PMID, fetches the PubMed summary (NCBI E-utilities) and
compares title similarity and year. References with only a DOI are checked against
Crossref. Anything with a low title match, wrong year, or that does not resolve is
reported so it can be fixed or removed. Results are cached in tools/.refcache.json.
"""
import difflib
import json
import pathlib
import re
import sys
import time
import urllib.parse
import urllib.request

ROOT = pathlib.Path(__file__).resolve().parent.parent
CACHE = ROOT / "tools" / ".refcache.json"
UA = {"User-Agent": "redox-compass-refcheck/1.0 (research tool)"}


def get(url):
    for attempt in range(4):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=30) as r:
                return json.loads(r.read().decode("utf-8"))
        except Exception as e:  # noqa: BLE001
            if attempt == 3:
                return {"_error": str(e)}
            time.sleep(1.5 * (attempt + 1))


def norm(t):
    t = re.sub(r"<[^>]+>", "", t or "").lower()
    return re.sub(r"[^a-z0-9 ]+", " ", t).split()


def sim(a, b):
    a, b = " ".join(norm(a)), " ".join(norm(b))
    if not a or not b:
        return 0.0
    if a in b or b in a:
        return 1.0
    return difflib.SequenceMatcher(None, a, b).ratio()


def main():
    cache = json.loads(CACHE.read_text(encoding="utf-8")) if CACHE.exists() else {}
    refs = []
    for p in sorted((ROOT / "data").rglob("*.json")):
        doc = json.loads(p.read_text(encoding="utf-8"))
        for r in doc.get("references", []) if isinstance(doc, dict) else []:
            refs.append((p.stem, r))

    pmids = sorted({str(r["pmid"]).strip() for _, r in refs if r.get("pmid") and str(r["pmid"]).strip().isdigit()}
                   - {k for k, v in cache.items() if "pubtype" in v or "error" in v})
    for i in range(0, len(pmids), 150):
        batch = pmids[i:i + 150]
        res = get("https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&retmode=json&id=" + ",".join(batch))
        result = res.get("result", {})
        for pm in batch:
            d = result.get(pm)
            if d and not d.get("error"):
                cache[pm] = {"title": d.get("title") or d.get("booktitle", ""), "year": (d.get("pubdate") or "")[:4], "journal": d.get("source", ""),
                             "doi": next((a["value"] for a in d.get("articleids", []) if a.get("idtype") == "doi"), ""),
                             "pubtype": d.get("pubtype", [])}
            else:
                cache[pm] = {"error": (d or {}).get("error", res.get("_error", "not found"))}
        time.sleep(0.4)

    for _, r in refs:
        doi = str(r.get("doi") or "").strip()
        if (not r.get("pmid")) and doi and ("doi:" + doi.lower()) not in cache:
            res = get("https://api.crossref.org/works/" + urllib.parse.quote(doi))
            m = res.get("message") or {}
            if m:
                yr = ((m.get("issued") or {}).get("date-parts") or [[None]])[0][0]
                cache["doi:" + doi.lower()] = {"title": (m.get("title") or [""])[0], "year": str(yr or ""), "journal": (m.get("container-title") or [""])[0]}
            else:
                cache["doi:" + doi.lower()] = {"error": res.get("_error", "not found")}
            time.sleep(0.2)
    CACHE.write_text(json.dumps(cache, indent=0, ensure_ascii=False), encoding="utf-8")

    problems, ok = [], 0
    for area, r in refs:
        pm = str(r.get("pmid") or "").strip()
        doi = str(r.get("doi") or "").strip().lower()
        key = pm if pm.isdigit() else ("doi:" + doi if doi else None)
        if not key and r.get("type") in ("database", "guideline") and r.get("url"):
            ok += 1
            continue
        if not key:
            problems.append((area, r["id"], "NO-ID", "no PMID or DOI", r.get("title", "")))
            continue
        c = cache.get(key, {"error": "not fetched"})
        if c.get("error"):
            problems.append((area, r["id"], "UNRESOLVED", f"{key}: {c['error']}", r.get("title", "")))
            continue
        s = sim(r.get("title", ""), c["title"])
        yr_ok = not r.get("year") or not c["year"] or abs(int(r["year"]) - int(c["year"])) <= 1
        doi_ok = not (pm.isdigit() and doi and c.get("doi")) or c["doi"].lower() == doi
        if s < 0.75 or not yr_ok:
            problems.append((area, r["id"], "MISMATCH", f"{key} sim={s:.2f} year {r.get('year')} vs {c['year']}: PubMed title = {c['title']}", r.get("title", "")))
        elif not doi_ok:
            problems.append((area, r["id"], "DOI", f"{key}: data doi {doi} vs PubMed {c['doi']}", r.get("title", "")))
        else:
            ok += 1
        if "Retracted Publication" in c.get("pubtype", []) and "retract" not in (str(r.get("title", "")) + str(r.get("finding", ""))).lower():
            problems.append((area, r["id"], "RETRACTED", f"{key} is retracted but not flagged in title/finding", r.get("title", "")))

    print(f"{ok}/{len(refs)} references verified")
    for area, rid, kind, msg, title in problems:
        print(f"[{kind}] {area}:{rid}  {msg}\n        data title = {title}")
    if "--json" in sys.argv:
        pathlib.Path(sys.argv[sys.argv.index("--json") + 1]).write_text(json.dumps(
            [dict(area=a, id=i, kind=k, msg=m, title=t) for a, i, k, m, t in problems], indent=1, ensure_ascii=False), encoding="utf-8")
    return 1 if problems else 0


if __name__ == "__main__":
    sys.exit(main())
