"""Validate an audit research file and copy it to data/audit/<group>.json.

    python tools/apply_audit.py path/to/audit-<group>.json [--dry-run]

Shape: research/AUDIT-BRIEF.md. research/deep-audit-<group>.md cites the same reference ids.
Prints each record's proposed site_change so the maintainer can decide what to apply to the
area files; site_change itself is never applied automatically (build.py drops it).
Fails loudly (nothing copied) on unknown factor ids, bad verdicts or missing references.
"""
import json
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
VERDICTS = {"holds", "strengthened", "weakened", "overturned", "unclear"}


def cites(text):
    out = set()
    for g in re.findall(r"\[([^\]]+)\]", text or ""):
        out |= {i.strip() for i in re.split(r"[,;]", g) if i.strip()}
    return out


def main():
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    src = pathlib.Path(sys.argv[1])
    group = re.sub(r"^audit-", "", src.stem)
    doc = json.loads(src.read_text(encoding="utf-8"))
    aliases = json.loads((ROOT / "data" / "aliases.json").read_text(encoding="utf-8")).get("factors", {})
    factor_ids = set()
    for area in ("foundations", "diet", "lifestyle", "sperm", "egg"):
        for f in json.loads((ROOT / "data" / f"{area}.json").read_text(encoding="utf-8"))["factors"]:
            factor_ids.add(aliases.get(f["id"], f["id"]))
    extra = set(sys.argv[sys.argv.index("--new-ids") + 1].split(",")) if "--new-ids" in sys.argv else set()
    refs = {r["id"] for r in doc.get("references", [])}
    errors = []
    if len(refs) != len(doc.get("references", [])):
        errors.append("duplicate reference ids")
    seen = set()
    for a in doc.get("audit", []):
        fid = aliases.get(a.get("factor"), a.get("factor"))
        where = f"audit {fid}"
        if fid not in factor_ids | extra:
            errors.append(f"{where}: unknown factor id")
        if fid in seen:
            errors.append(f"{where}: duplicate record")
        seen.add(fid)
        if a.get("verdict") not in VERDICTS:
            errors.append(f"{where}: verdict '{a.get('verdict')}'")
        for fld in ("claim", "biases", "newer_evidence", "bottom_line"):
            for i in cites(a.get(fld)):
                if i not in refs and aliases.get(i, i) not in factor_ids | extra:
                    errors.append(f"{where}.{fld}: [{i}] is neither a reference nor a factor id")
        for i in a.get("refs", []):
            if i not in refs:
                errors.append(f"{where}: refs has unknown '{i}'")
    md = ROOT / "research" / f"deep-audit-{group}.md"
    if md.exists():
        prefix = next(iter(refs), "x-").split("-")[0] + "-"
        for i in cites(md.read_text(encoding="utf-8")):
            if i.startswith(prefix) and i not in refs:
                errors.append(f"{md.name}: [{i}] not in references")
    for a in doc.get("audit", []):
        sc = a.get("site_change") or {}
        if any(v for v in sc.values()):
            print(f"CHANGE {a['factor']} ({a['verdict']}): {json.dumps(sc, ensure_ascii=False)}")
    if errors:
        for e in errors:
            print("ERROR", e)
        sys.exit(f"{len(errors)} errors: nothing copied")
    counts = {v: sum(1 for a in doc["audit"] if a["verdict"] == v) for v in sorted(VERDICTS)}
    out = ROOT / "data" / "audit" / f"{group}.json"
    print(f"{group}: {len(doc['audit'])} audits {counts}, {len(refs)} refs -> {out.relative_to(ROOT)}")
    if "--dry-run" not in sys.argv:
        out.parent.mkdir(exist_ok=True)
        out.write_text(json.dumps(doc, ensure_ascii=False, indent=1), encoding="utf-8", newline="\n")


if __name__ == "__main__":
    main()
