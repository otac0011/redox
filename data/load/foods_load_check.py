# Checks data/load/foods.json against data/foods.json and research/LOAD-RUBRIC.md:
# every food id present, scores 1-10, each why's arithmetic equals its score, component tags add up,
# and every [factor-id] cited is in the rubric's factor list.
import json, re, pathlib, collections

ROOT = pathlib.Path(__file__).resolve().parents[2]
foods = json.loads((ROOT / "data" / "foods.json").read_text(encoding="utf-8"))["foods"]
load = json.loads((ROOT / "data" / "load" / "foods.json").read_text(encoding="utf-8"))["load"]
rubric = (ROOT / "research" / "LOAD-RUBRIC.md").read_text(encoding="utf-8")
factor_line = next(l for l in rubric.splitlines() if l.startswith("Evidence:"))
allowed = set(re.findall(r"\[([a-z0-9-]+)\]", factor_line.split("Factors:")[1]))

errors = []
ids = [f["id"] for f in foods]
for i in ids:
    if i not in load:
        errors.append(f"missing {i}")
for i in load:
    if i not in ids:
        errors.append(f"unknown id {i}")
for i, v in load.items():
    s, w = v["score"], v["why"]
    if not isinstance(s, int) or not 1 <= s <= 10:
        errors.append(f"{i}: bad score {s}")
    m = re.search(r" = (1(?: \+ \d+)*)(?: = (\d+))?\.", w)
    if not m:
        errors.append(f"{i}: no arithmetic"); continue
    terms = [int(t) for t in m.group(1).split(" + ")]
    stated = int(m.group(2)) if m.group(2) else 1
    if len(terms) > 1 and m.group(2) is None:
        errors.append(f"{i}: sum without total")
    if max(1, min(10, sum(terms))) != stated or stated != s:
        errors.append(f"{i}: arithmetic {m.group(0)} vs score {s}")
    tags = [int(x.replace("−", "-")) for x in re.findall(r"\((?:C|B|P|H|O|F|A|M|X) ([+−-]?\d+)\)", w)]
    if 1 + sum(tags) != sum(terms):
        errors.append(f"{i}: component tags {tags} don't match arithmetic {terms}")
    for f in re.findall(r"\[([a-z0-9-]+)\]", w):
        if f not in allowed:
            errors.append(f"{i}: factor [{f}] not in rubric list")
print(f"{len(load)} entries, {len(ids)} foods, {len(errors)} errors")
for e in errors:
    print(" ", e)
print("distribution:", dict(sorted(collections.Counter(v["score"] for v in load.values()).items())))
