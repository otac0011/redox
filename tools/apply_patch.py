"""Merge a research patch into the area data files.

    python tools/apply_patch.py path/to/patch-x.json --doc deep-x [--dry-run]

--doc names the research/<doc>.md deep dive whose citations use this patch's refs;
the full reference list is saved to data/notes/<doc>.json so the Read view can link them.

Patch shape: {"references": [...], "<area>": [Factor, ...], ...}
- Factors replace an existing factor with the same id in that area, or are appended.
- References are appended to every area file that receives factors from this patch
  (only the ones that area's factors actually cite; ids must be unique).
- Fails loudly on unknown ref ids or areas, so nothing half-applied lands.
"""
import json
import pathlib
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
AREAS = {"foundations", "diet", "lifestyle", "sperm", "egg"}


def cited(factor):
    ids = set(factor.get("refs", []))
    for k in factor.get("key_numbers") or []:
        if k.get("source"):
            ids.add(k["source"])
    return ids


def main():
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    patch = json.loads(pathlib.Path(sys.argv[1]).read_text(encoding="utf-8"))
    dry = "--dry-run" in sys.argv
    prefs = {r["id"]: r for r in patch.get("references", [])}
    unknown_areas = set(patch) - AREAS - {"references"}
    if unknown_areas:
        sys.exit(f"unknown areas in patch: {unknown_areas}")
    if "--doc" in sys.argv:
        doc_id = sys.argv[sys.argv.index("--doc") + 1]
        out = ROOT / "data" / "notes" / f"{doc_id}.json"
        print(f"notes: {len(prefs)} refs -> {out.relative_to(ROOT)}")
        if not dry:
            out.parent.mkdir(exist_ok=True)
            out.write_text(json.dumps({"doc": doc_id, "references": list(prefs.values())}, ensure_ascii=False, indent=1), encoding="utf-8", newline="\n")

    for area in sorted(AREAS & set(patch)):
        factors = patch[area]
        if not factors:
            continue
        path = ROOT / "data" / f"{area}.json"
        doc = json.loads(path.read_text(encoding="utf-8"))
        have_refs = {r["id"] for r in doc["references"]}
        need = set().union(*(cited(f) for f in factors))
        missing = need - set(prefs) - have_refs
        if missing:
            sys.exit(f"{area}: patch factors cite unknown refs {sorted(missing)}")
        added_refs = [prefs[i] for i in sorted(need & set(prefs)) if i not in have_refs]
        index = {f["id"]: i for i, f in enumerate(doc["factors"])}
        replaced, added = [], []
        for f in factors:
            if f["id"] in index:
                doc["factors"][index[f["id"]]] = f
                replaced.append(f["id"])
            else:
                doc["factors"].append(f)
                added.append(f["id"])
        doc["references"].extend(added_refs)
        print(f"{area}: replaced {len(replaced)} {replaced}; added {len(added)} {added}; +{len(added_refs)} refs")
        if not dry:
            path.write_text(json.dumps(doc, ensure_ascii=False, indent=1), encoding="utf-8", newline="\n")


if __name__ == "__main__":
    main()
