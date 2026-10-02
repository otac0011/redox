"""Apply reviewed site_change proposals from an audit file to the area data files.

    python tools/apply_site_changes.py data/audit/<group>.json [--only id,id] [--skip id,id] [--dry-run]

Applies only the structured fields (impact, evidence, headline) of each record's site_change,
to the entry that owns the scope: general -> foundations/diet/lifestyle, sperm -> sperm,
egg -> egg (scope taken from the impact keys, else `"scope"` in site_change, else the id's -egg/-sperm
suffix, else the first of general/egg/sperm the factor has an entry for).
References cited as [id] in a new headline are copied into that area file and the entry's refs.
Free-text `note` proposals are printed for manual handling; they are never applied.
"""
import json
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
OWNERS = {"general": ["foundations", "diet", "lifestyle"], "sperm": ["sperm"], "egg": ["egg"]}


def arg_set(flag):
    return set(sys.argv[sys.argv.index(flag) + 1].split(",")) if flag in sys.argv else None


def main():
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    doc = json.loads(pathlib.Path(sys.argv[1]).read_text(encoding="utf-8"))
    only, skip, dry = arg_set("--only"), arg_set("--skip") or set(), "--dry-run" in sys.argv
    aliases = json.loads((ROOT / "data" / "aliases.json").read_text(encoding="utf-8")).get("factors", {})
    areas = {a: json.loads((ROOT / "data" / f"{a}.json").read_text(encoding="utf-8")) for a in ("foundations", "diet", "lifestyle", "sperm", "egg")}
    prefs = {r["id"]: r for r in doc.get("references", [])}
    touched = set()
    for rec in doc.get("audit", []):
        sc = rec.get("site_change") or {}
        fid = rec["factor"]
        if (only and fid not in only) or fid in skip:
            continue
        if sc.get("note"):
            print(f"NOTE {fid}: {sc['note']}")
        if not any(sc.get(k) for k in ("impact", "evidence", "headline")):
            continue
        scopes = list((sc.get("impact") or {}).keys()) or ([sc["scope"]] if sc.get("scope") else None)
        if not scopes:  # the scope the factor actually has an entry for: its own suffix, else general, egg, sperm
            have = [sc_ for sc_ in ("general", "egg", "sperm") if any(aliases.get(f["id"], f["id"]) == fid for a in OWNERS[sc_] for f in areas[a]["factors"])]
            pref = "egg" if fid.endswith("-egg") else "sperm" if fid.endswith("-sperm") else None
            scopes = [pref if pref in have else (have or ["general"])[0]]
        for scope in scopes:
            hit = None
            for area in OWNERS[scope]:
                for f in areas[area]["factors"]:
                    if aliases.get(f["id"], f["id"]) == fid:
                        hit = (area, f)
                        break
                if hit:
                    break
            if not hit:
                print(f"SKIP {fid}: no {scope} entry")
                continue
            area, f = hit
            changes = []
            if sc.get("impact", {}).get(scope) is not None:
                changes.append(f"impact.{scope} {f['impact'].get(scope)} -> {sc['impact'][scope]}")
                f["impact"][scope] = sc["impact"][scope]
            if sc.get("evidence") and sc["evidence"] != f.get("evidence"):
                changes.append(f"evidence {f.get('evidence')} -> {sc['evidence']}")
                f["evidence"] = sc["evidence"]
            if sc.get("headline"):
                changes.append("headline")
                f["headline"] = sc["headline"]
                have = {r["id"] for r in areas[area]["references"]}
                for g in re.findall(r"\[([^\]]+)\]", sc["headline"]):
                    for i in (x.strip() for x in re.split(r"[,;]", g)):
                        if i in prefs:
                            if i not in have:
                                areas[area]["references"].append(prefs[i])
                                have.add(i)
                            if i not in f["refs"]:
                                f["refs"].append(i)
            print(f"APPLY {area}/{f['id']}: {'; '.join(changes)}")
            touched.add(area)
    if not dry:
        for a in touched:
            (ROOT / "data" / f"{a}.json").write_text(json.dumps(areas[a], ensure_ascii=False, indent=1), encoding="utf-8", newline="\n")


if __name__ == "__main__":
    main()
