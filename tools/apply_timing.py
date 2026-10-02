"""Validate a timing research file and copy it to data/timing/<group>.json.

    python tools/apply_timing.py path/to/timing-<group>.json [--dry-run]

Shape and field meanings: research/TIMING-BRIEF.md. The deep dive research/deep-timing-<group>.md
cites the same reference ids. Fails loudly (nothing copied) on unknown factor ids, missing
references, or malformed day ranges; prints warnings for softer problems.
"""
import json
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
SHAPES = {"acute", "build", "slow-build", "lasting", "window", "none"}
FREQ = {"daily", "most-days", "few-per-week", "weekly", "occasional", "one-off", "avoid", "n/a"}
BASIS = {"measured", "extrapolated", "unknown"}


def main():
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    src = pathlib.Path(sys.argv[1])
    group = re.sub(r"^timing-", "", src.stem)
    doc = json.loads(src.read_text(encoding="utf-8"))
    errors, warnings = [], []

    aliases = json.loads((ROOT / "data" / "aliases.json").read_text(encoding="utf-8")).get("factors", {})
    factor_ids = set()
    for area in ("foundations", "diet", "lifestyle", "sperm", "egg"):
        for f in json.loads((ROOT / "data" / f"{area}.json").read_text(encoding="utf-8"))["factors"]:
            factor_ids.add(aliases.get(f["id"], f["id"]))

    refs = {r["id"] for r in doc.get("references", [])}
    if len(refs) != len(doc.get("references", [])):
        errors.append("duplicate reference ids")
    for r in doc.get("references", []):
        if not (r.get("pmid") or r.get("doi") or r.get("url")):
            errors.append(f"reference {r['id']} has no pmid, doi or url")

    def cites(text):
        out = set()
        for group_ in re.findall(r"\[([^\]]+)\]", text or ""):
            out |= {i.strip() for i in re.split(r"[,;]", group_) if i.strip()}
        return out

    def check_cites(text, where):
        for i in cites(text):
            if i not in refs and aliases.get(i, i) not in factor_ids:
                errors.append(f"{where}: [{i}] is neither a reference in this file nor a factor id")

    seen = set()
    for t in doc.get("timing", []):
        fid = aliases.get(t.get("factor"), t.get("factor"))
        where = f"timing {fid}"
        if fid not in factor_ids:
            errors.append(f"{where}: unknown factor id")
        if fid in seen:
            errors.append(f"{where}: duplicate record")
        seen.add(fid)
        if t.get("shape") not in SHAPES:
            errors.append(f"{where}: shape '{t.get('shape')}'")
        if t.get("basis") not in BASIS:
            errors.append(f"{where}: basis '{t.get('basis')}'")
        if (t.get("frequency") or {}).get("advice") not in FREQ | {None}:
            errors.append(f"{where}: frequency.advice '{t['frequency'].get('advice')}'")
        for fld in ("onset", "full", "after_stopping"):
            part = t.get(fld)
            if part is None:
                continue
            days = part.get("days")
            if days is not None and not (isinstance(days, list) and len(days) == 2 and all(isinstance(x, (int, float)) for x in days) and 0 <= days[0] <= days[1]):
                errors.append(f"{where}.{fld}.days: {days}")
            check_cites(part.get("text"), f"{where}.{fld}")
        for scope, c in (t.get("conception") or {}).items():
            if scope not in ("sperm", "egg"):
                errors.append(f"{where}: conception scope '{scope}'")
            sb = c.get("start_by_days")
            if sb is not None and not (isinstance(sb, (int, float)) and sb >= 0):
                errors.append(f"{where}: conception.{scope}.start_by_days {sb}")
            check_cites(c.get("text"), f"{where}.conception.{scope}")
            check_cites(c.get("late_start"), f"{where}.conception.{scope}.late_start")
        for fld in ("summary", "debate"):
            check_cites(t.get(fld), f"{where}.{fld}")
        check_cites((t.get("frequency") or {}).get("text"), f"{where}.frequency")
        for i in t.get("refs", []):
            if i not in refs:
                errors.append(f"{where}: refs has unknown '{i}'")
        if not t.get("refs") and t.get("basis") != "unknown":
            warnings.append(f"{where}: no refs")

    for w in doc.get("windows", []):
        where = f"window {w.get('id')}"
        if w.get("scope") not in ("sperm", "egg"):
            errors.append(f"{where}: scope '{w.get('scope')}'")
        if not w.get("start_days", 0) > w.get("end_days", 0):
            errors.append(f"{where}: start_days must exceed end_days")
        for fld in ("what", "sensitive_to"):
            check_cites(w.get(fld), f"{where}.{fld}")
        for i in w.get("refs", []):
            if i not in refs:
                errors.append(f"{where}: refs has unknown '{i}'")

    md = ROOT / "research" / f"deep-timing-{group}.md"
    if md.exists():
        for i in cites(md.read_text(encoding="utf-8")):
            if re.fullmatch(r"t[a-z]+-[\w-]+", i) and i not in refs:
                errors.append(f"{md.name}: [{i}] not in references")
    else:
        warnings.append(f"research/{md.name} is missing")

    for w in warnings:
        print("WARN", w)
    if errors:
        for e in errors:
            print("ERROR", e)
        sys.exit(f"{len(errors)} errors: nothing copied")
    out = ROOT / "data" / "timing" / f"{group}.json"
    print(f"{group}: {len(doc.get('timing', []))} records, {len(doc.get('windows', []))} windows, {len(refs)} refs -> {out.relative_to(ROOT)}")
    if "--dry-run" not in sys.argv:
        out.parent.mkdir(exist_ok=True)
        out.write_text(json.dumps(doc, ensure_ascii=False, indent=1), encoding="utf-8", newline="\n")


if __name__ == "__main__":
    main()
