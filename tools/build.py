"""Merge data/<area>.json files into assets/data.json for the site.

    python tools/build.py

- The same factor can appear in several areas (e.g. smoking in lifestyle, sperm, egg).
  Entries are grouped by id (after applying data/aliases.json) and each area's text is kept.
- References are de-duplicated across areas by PMID, then DOI.
- Prints warnings for dangling refs, unknown [factor-id] links, pathways without a
  mechanism page, and likely duplicate factors that need an alias.
"""
import datetime
import difflib
import json
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
DATA = ROOT / "data"
AREAS = ["foundations", "diet", "lifestyle", "sperm", "egg"]
SCOPE_OWNERS = {"general": ["foundations", "diet", "lifestyle"], "sperm": ["sperm"], "egg": ["egg"]}
EV_RANK = {"strong": 0, "moderate": 1, "limited": 2, "mechanistic": 3}
EV_WEIGHT = {"strong": 1, "moderate": 0.8, "limited": 0.55, "mechanistic": 0.3}
warnings = []


def warn(msg):
    warnings.append(msg)


def load(name, default=None):
    p = DATA / name
    if not p.exists():
        return default
    return json.loads(p.read_text(encoding="utf-8"))


def ref_key(r, area):
    pmid = str(r.get("pmid") or "").strip()
    if pmid and pmid.lower() not in ("null", "none"):
        return "pmid:" + pmid
    doi = str(r.get("doi") or "").strip().lower()
    if doi and doi not in ("null", "none"):
        return "doi:" + doi
    return f"{area}:{r['id']}"


def main():
    aliases = load("aliases.json", {})
    factor_alias = aliases.get("factors", {})
    mech_alias = aliases.get("mechanisms", {})
    names = aliases.get("names", {})

    areas, references, groups, mechs, ref_index = [], {}, {}, {}, {}
    for area in AREAS:
        doc = load(f"{area}.json")
        if doc is None:
            warn(f"missing data/{area}.json")
            continue
        areas.append({"id": area, "title": doc.get("title", area), "summary": doc.get("summary", "")})
        local = {}
        for r in doc.get("references", []):
            k = ref_key(r, area)
            local[r["id"]] = k
            if k in references:
                for fld, v in r.items():
                    if v and not references[k].get(fld):
                        references[k][fld] = v
            else:
                references[k] = {fld: v for fld, v in r.items() if fld != "id"}
        ref_index[area] = local
        mapref = lambda ids, where: [local[i] for i in ids if i in local or warn(f"{area}: {where} cites unknown ref '{i}'")]

        for m in doc.get("mechanisms", []):
            mid = mech_alias.get(m["id"], m["id"])
            refs = mapref(m.get("refs", []), f"mechanism {m['id']}")
            if mid in mechs:
                old = mechs[mid]
                if area == "foundations" or len(m.get("description", "")) > len(old["description"]) * 1.5:
                    old["description"], old["name"] = m.get("description", ""), m.get("name", old["name"])
                old["refs"] += [r for r in refs if r not in old["refs"]]
            else:
                mechs[mid] = {"id": mid, "name": m.get("name", mid), "description": m.get("description", ""), "refs": refs}

        seen = set()
        for f in doc.get("factors", []):
            if f["id"] in seen:
                warn(f"{area}: duplicate factor id '{f['id']}'")
            seen.add(f["id"])
            fid = factor_alias.get(f["id"], f["id"])
            entry = {k: f.get(k) for k in ("direction", "evidence", "headline", "dose", "mechanism", "interactions", "caveats", "key_numbers")}
            entry["area"] = area
            entry["impact"] = f.get("impact") or {}
            entry["pathways"] = [mech_alias.get(p, p) for p in f.get("pathways", [])]
            entry["refs"] = mapref(f.get("refs", []), f"factor {f['id']}")
            for fld in ("headline", "mechanism", "interactions", "caveats"):
                if entry.get(fld):
                    entry[fld] = re.sub(r"\[([a-z0-9-]+)\]", lambda m: "[" + factor_alias.get(m.group(1), m.group(1)) + "]", entry[fld])
            if isinstance(entry.get("dose"), dict):
                entry["dose"] = {k: (re.sub(r"\[([a-z0-9-]+)\]", lambda m: "[" + factor_alias.get(m.group(1), m.group(1)) + "]", v) if isinstance(v, str) else v) for k, v in entry["dose"].items()}
            entry["title"] = f.get("name", fid)
            entry["_name"], entry["_kind"], entry["_scopes"], entry["_orig_id"] = f.get("name", fid), f.get("kind"), f.get("scopes", []), f["id"]
            groups.setdefault(fid, []).append(entry)

    notes = []
    for npath in sorted((DATA / "notes").glob("*.json")):
        ndoc = json.loads(npath.read_text(encoding="utf-8"))
        doc_id = ndoc["doc"]
        local = {}
        for r in ndoc.get("references", []):
            k = ref_key(r, doc_id)
            local[r["id"]] = k
            references.setdefault(k, {fld: v for fld, v in r.items() if fld != "id"})
        ref_index[doc_id] = local
        md = ROOT / "research" / f"{doc_id}.md"
        if not md.exists():
            warn(f"notes {doc_id}: research/{doc_id}.md missing")
            continue
        first = next((ln for ln in md.read_text(encoding="utf-8").splitlines() if ln.startswith("# ")), "# " + doc_id)
        notes.append({"id": doc_id, "title": first[2:].strip()})

    factors = []
    for fid, entries in groups.items():
        entries.sort(key=lambda e: AREAS.index(e["area"]))
        impact, dir_by, ev_by = {}, {}, {}
        for scope, owners in SCOPE_OWNERS.items():
            own = [e for e in entries if e["area"] in owners and (e["impact"].get(scope) or 0) > 0]
            # fertility areas don't get to set the general score; general areas may fill sperm/egg gaps
            fallback = [] if scope == "general" else [e for e in entries if e["area"] in SCOPE_OWNERS["general"] and (e["impact"].get(scope) or 0) > 0]
            pool = own or fallback
            if not pool:
                continue
            top = max(e["impact"].get(scope) or 0 for e in pool)
            best = next(e for e in pool if (e["impact"].get(scope) or 0) == top)
            impact[scope] = int(best["impact"].get(scope) or 0)
            dir_by[scope] = best.get("direction") or "neutral"
            ev_by[scope] = best.get("evidence") or "limited"
        top_scope = max(impact, key=lambda s: impact[s] * EV_WEIGHT.get(ev_by[s], 0.5), default=None)
        lead = entries[0]
        pathways = []
        for e in entries:
            pathways += [p for p in e["pathways"] if p not in pathways]
        factors.append({
            "id": fid,
            "name": names.get(fid, lead["_name"]),
            "kind": aliases.get("kinds", {}).get(fid) or lead["_kind"] or "lifestyle",
            "aliases": sorted({e["_orig_id"] for e in entries if e["_orig_id"] != fid} | {e["_name"] for e in entries if e["_name"] != lead["_name"]}),
            "impact": impact,
            "direction": dir_by.get(top_scope) or lead.get("direction") or "neutral",
            "direction_by_scope": dir_by,
            "evidence": ev_by.get(top_scope) or min((e.get("evidence") or "limited" for e in entries), key=lambda x: EV_RANK.get(x, 9)),
            "evidence_by_scope": ev_by,
            "pathways": pathways,
            "entries": [{k: v for k, v in e.items() if not k.startswith("_")} for e in entries],
        })

    # group comparable key numbers so the compare chart can line them up across foods
    groups_re = [(r"^Total polyphenols, Folin", "Total polyphenols (Folin assay)"),
                 (r"^Total polyphenols, chromatography", "Total polyphenols (chromatography, sum of compounds)"),
                 (r"^Anthocyanins", "Anthocyanins")]
    for f in factors:
        for e in f["entries"]:
            for k in e.get("key_numbers") or []:
                for rx, g in groups_re:
                    if re.match(rx, k.get("label", ""), re.I):
                        k["group"] = g
                        break

    # checks
    ids = {f["id"] for f in factors}
    for f in factors:
        for e in f["entries"]:
            for fld in ("headline", "mechanism", "interactions", "caveats"):
                for m in re.findall(r"\[([a-z0-9-]+)\]", e.get(fld) or ""):
                    if m not in ids:
                        warn(f"{e['area']}/{f['id']}: [{m}] in {fld} is not a factor id")
            if not e.get("refs"):
                warn(f"{e['area']}/{f['id']}: no references")
        for p in f["pathways"]:
            if p not in mechs:
                warn(f"pathway '{p}' (used by {f['id']}) has no mechanism entry")
        if f["kind"] not in ("food", "exercise", "lifestyle", "supplement", "environment", "medical"):
            warn(f"{f['id']}: unknown kind '{f['kind']}'")
    by_area = {}
    for f in factors:
        for e in f["entries"]:
            by_area.setdefault(e["area"], []).append(f)
    names_list = [(f["id"], f["name"].lower()) for f in factors]
    for i, (a, an) in enumerate(names_list):
        for b, bn in names_list[i + 1:]:
            r = difflib.SequenceMatcher(None, an, bn).ratio()
            ta, tb = set(re.split(r"[^a-z0-9]+", a)), set(re.split(r"[^a-z0-9]+", b))
            if r > 0.72 or (len(ta & tb) and (ta <= tb or tb <= ta)):
                warn(f"possible duplicate: {a} ~ {b}")

    used = {r for f in factors for e in f["entries"] for r in e["refs"]} | {r for m in mechs.values() for r in m["refs"]} | {k for loc in ref_index.values() for k in loc.values()}
    references = {k: v for k, v in references.items() if k in used}

    out = {
        "built": datetime.datetime.now().strftime("%Y-%m-%d %H:%M"),
        "areas": areas,
        "notes": notes,
        "factors": sorted(factors, key=lambda f: f["name"].lower()),
        "mechanisms": sorted(mechs.values(), key=lambda m: m["name"].lower()),
        "references": references,
        "ref_index": ref_index,
        "guide": load("guide.json"),
        "compare_presets": (load("compare.json", {}) or {}).get("presets", []),
        "compare_defaults": (load("compare.json", {}) or {}).get("defaults", []),
    }
    (ROOT / "assets").mkdir(exist_ok=True)
    (ROOT / "assets" / "data.json").write_text(json.dumps(out, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")

    guide = out["guide"] or {}
    for q in guide.get("questions", []):
        for o in q.get("options", []):
            for fid in list(o.get("boost", {})) + o.get("hide", []):
                if fid not in ids:
                    warn(f"guide {q['id']}={o['value']}: unknown factor '{fid}'")
    for p in out["compare_presets"]:
        for fid in p["ids"]:
            if fid not in ids:
                warn(f"compare preset '{p['label']}': unknown factor '{fid}'")

    print(f"{len(factors)} factors, {len(mechs)} mechanisms, {len(references)} references -> assets/data.json")
    for w in warnings:
        print("WARN", w)
    return 0


if __name__ == "__main__":
    sys.exit(main())
