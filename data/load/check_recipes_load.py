# Independent check of data/load/recipes.json: ids, JSON shape, why arithmetic, factor ids.
import json, re, collections

recipes = json.load(open("data/recipes.json", encoding="utf-8"))["recipes"]
load = json.load(open("data/load/recipes.json", encoding="utf-8"))["load"]
ids = [r["id"] for r in recipes]
FACTORS = set(re.findall(r"\[([a-z0-9-]+)\]",
    open("research/LOAD-RUBRIC.md", encoding="utf-8").read().split("## Design principles")[0]))

errors = []
missing = [i for i in ids if i not in load]
extra = [i for i in load if i not in ids]
if missing: errors.append(f"missing ids: {missing}")
if extra: errors.append(f"extra ids: {extra}")

for rid, v in load.items():
    s, why = v["score"], v["why"]
    if not (isinstance(s, int) and 1 <= s <= 10):
        errors.append(f"{rid}: bad score {s}")
    tags = re.findall(r"\[([^\]]+)\]", why)
    for t in tags:
        if t not in FACTORS:
            errors.append(f"{rid}: unknown factor {t}")
    text = re.sub(r"(\s*\[[^\]]+\])+\s*$", "", why)
    m = re.search(r"=\s*(1(?:\s*[+−]\s*\d+)*)\s*=\s*(\d+)$", text)
    if m:
        expr, total = m.group(1), int(m.group(2))
        val = eval(expr.replace("−", "-"))
        if val != total: errors.append(f"{rid}: {expr} = {val}, written {total}")
        # component tokens like (H +2), (X −1), (−1 in C) must match the arithmetic terms
        toks = re.findall(r"\((?:[A-Z] ([+−]\d+)|([+−]\d+) in [A-Z])", text)
        comp = [int((a or b).replace("−", "-")) for a, b in toks]
        terms = [int(t.replace(" ", "").replace("−", "-")) for t in re.findall(r"[+−]\s*\d+", expr)]
        if sorted(comp) != sorted(terms):
            errors.append(f"{rid}: component tokens {comp} != arithmetic terms {terms}")
    else:
        m2 = re.search(r"nothing scores = (\d+)$", text)
        if not m2: errors.append(f"{rid}: no total found"); continue
        total = int(m2.group(1))
        if re.search(r"\([A-Z] [+−]\d+\)", text):
            errors.append(f"{rid}: 'nothing scores' but has nonzero components")
    if total != s:
        errors.append(f"{rid}: why total {total} != score {s}")

print("factor ids in rubric:", len(FACTORS))
print("recipes:", len(ids), "scored:", len(load))
print("distribution:", dict(sorted(collections.Counter(v["score"] for v in load.values()).items())))
print("errors:", errors or "none")
