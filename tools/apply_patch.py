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
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
AREAS = {"foundations", "diet", "lifestyle", "sperm", "egg"}


TEXT_FIELDS = ("headline", "mechanism", "interactions", "caveats", "debate", "description")


def cited(obj, known=()):
    """Reference ids an object depends on: refs, key-number sources, and [ids] in its text."""
    ids = set(obj.get("refs", []))
    for k in obj.get("key_numbers") or []:
        if k.get("source"):
            ids.add(k["source"])
    for fld in TEXT_FIELDS:
        for group in re.findall(r"\[([^\]]+)\]", obj.get(fld) or ""):
            ids |= {i.strip() for i in re.split(r"[,;]", group) if i.strip() in known}
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

    if patch.get("mechanisms"):
        patch.setdefault("foundations", [])
    if "--tests" in sys.argv:
        tpath = pathlib.Path(sys.argv[sys.argv.index("--tests") + 1])
        tdoc = json.loads(tpath.read_text(encoding="utf-8"))
        out = ROOT / "data" / "tests.json"
        cur = json.loads(out.read_text(encoding="utf-8")) if out.exists() else {"tests": [], "references": []}
        byid = {t["id"]: i for i, t in enumerate(cur["tests"])}
        for t in tdoc["tests"]:
            if t["id"] in byid:
                cur["tests"][byid[t["id"]]] = t
            else:
                cur["tests"].append(t)
        need = set().union(*(set(t.get("refs", [])) | cited(t, prefs) for t in tdoc["tests"]))
        missing = need - set(prefs) - {r["id"] for r in cur["references"]}
        if missing:
            sys.exit(f"tests cite unknown refs {sorted(missing)}")
        have = {r["id"] for r in cur["references"]}
        cur["references"] += [prefs[i] for i in sorted(need) if i in prefs and i not in have]
        print(f"tests: {len(tdoc['tests'])} tests -> data/tests.json")
        if not dry:
            out.write_text(json.dumps(cur, ensure_ascii=False, indent=1), encoding="utf-8", newline="\n")

    for area in sorted(AREAS & set(patch)):
        factors = patch[area]
        mechs = patch.get("mechanisms", []) if area == "foundations" else []
        if not factors and not mechs:
            continue
        path = ROOT / "data" / f"{area}.json"
        doc = json.loads(path.read_text(encoding="utf-8"))
        have_refs = {r["id"] for r in doc["references"]}
        need = set().union(set(), *(cited(f, prefs) for f in factors + mechs))
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
        mindex = {m["id"]: i for i, m in enumerate(doc.get("mechanisms", []))}
        for m in mechs:
            if m["id"] in mindex:
                doc["mechanisms"][mindex[m["id"]]] = m
            else:
                doc.setdefault("mechanisms", []).append(m)
        if mechs:
            print(f"{area}: {len(mechs)} mechanisms {[m['id'] for m in mechs]}")
        doc["references"].extend(added_refs)
        print(f"{area}: replaced {len(replaced)} {replaced}; added {len(added)} {added}; +{len(added_refs)} refs")
        if not dry:
            path.write_text(json.dumps(doc, ensure_ascii=False, indent=1), encoding="utf-8", newline="\n")


if __name__ == "__main__":
    main()
