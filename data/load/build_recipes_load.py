# Builds data/load/recipes.json (oxidant load per recipe) from hand-scored components.
# Each entry: list of parts. A part is (text, letter, points); letter None = context note (0 points).
import json, os, sys

R = {}

def rec(rid, parts, tags):
    R[rid] = (parts, tags)

N = None  # note marker

# ---------------- Plant, egg and dairy recipes ----------------
rec("overnight-oats-berries", [
    ("No-cook; no meat, browned starch, oxidised fat or alcohol", N, 0),
    ("fat ≈15 g (F 0)", N, 0)], [])
rec("shakshuka", [
    ("Eggs poached in a simmered tomato sauce, no meat (C 0)", N, 0),
    ("fat ≈17 g per serving: oil 7 g, eggs 7.5 g, feta 2 g (F 0)", N, 0)], [])
rec("spinach-frittata", [
    ("Baked at 165 °C, no meat (C 0)", N, 0),
    ("Parmesan 50 g ÷ 4 ≈12.5 g per serving, under 20 g (O 0)", N, 0),
    ("fat ≈34 g per serving: eggs 9.5, cream 7, Cheddar 7, oil 7, Parmesan 3.5 (F +1)", "F", 1),
    ("fresh basil 1 tbsp per serving cooked into the egg mix (X −1)", "X", -1),
    ("produce ≈65 g per serving, under 80 g, adds nothing", N, 0)],
    ["postprandial-fat-load", "herbs-spices"])
rec("green-berry-smoothie", [
    ("Raw blend; peanut butter 20 g is under the ≈30 g browned-product threshold (B 0)", N, 0),
    ("fat ≈16 g (F 0)", N, 0)], ["dietary-ages"])
rec("classic-hummus", [
    ("No-cook; tahini ≈10 g per serving, well under 30 g (B 0)", N, 0),
    ("fat ≈12 g per serving (F 0)", N, 0)], [])
rec("roasted-broccoli-lemon-parmesan", [
    ("Roast vegetables score nothing", N, 0),
    ("Parmesan 10 g ÷ 4 ≈2.5 g, under 20 g (O 0)", N, 0),
    ("fat ≈9 g per serving (F 0)", N, 0)], ["dietary-lipid-oxidation-products"])
rec("sauteed-kale", [
    ("Kale steamed and braised under a lid, no meat or starch", N, 0),
    ("olive oil ≈10 g fat per serving (F 0)", N, 0)], [])
rec("chocolate-chia-pudding", [
    ("No-cook", N, 0),
    ("fat ≈11 g per serving: chia 6 g, milk 4 g (F 0)", N, 0)], [])
rec("walnut-cocoa-energy-bites", [
    ("No-cook; raw walnuts are not a browned nut product (B 0)", N, 0),
    ("fat ≈26 g per 3-bite portion (walnuts 20, almond butter 4, hemp 2; optional coconut oil not counted) (F 0)", N, 0)],
    ["postprandial-fat-load"])
rec("guacamole", [
    ("Raw", N, 0),
    ("avocado fat ≈15 g per serving (F 0)", N, 0)], [])
rec("lentil-vegetable-soup", [
    ("Vegetables softened at medium heat, then simmered", N, 0),
    ("fat ≈7 g per serving (F 0)", N, 0)], [])
rec("minestrone-soup", [
    ("Vegetables softened, then simmered; pasta boiled", N, 0),
    ("fat ≈7 g per serving (F 0)", N, 0)], [])
rec("masoor-dal-tadka", [
    ("Lentils boiled (no meat)", N, 0),
    ("ghee is the cooking fat of the tadka (O +1)", "O", 1),
    ("fat ≈7–13 g per serving (F 0)", N, 0),
    ("tadka spices (cumin, chili, turmeric, garam masala, kasuri methi ≈1 tsp per serving) cooked in the ghee plus 1 tbsp fresh coriander per serving (X −1, the most allowed: the floor is 1)", "X", -1)],
    ["dietary-lipid-oxidation-products", "herbs-spices"])
rec("chickpea-spinach-curry", [
    ("Brief medium-heat sauté of garlic and paste, then a gentle simmer; rice boiled", N, 0),
    ("fat ≈26 g per serving, mostly coconut milk (F 0)", N, 0)], ["postprandial-fat-load"])
rec("vegetarian-bean-chili", [
    ("Vegetables softened, then simmered 30 min", N, 0),
    ("fat ≈7 g per serving (F 0)", N, 0)], [])
rec("kale-salad-carrot-ginger", [
    ("Chickpeas roasted at 220 °C until golden and crisp, ≈35–40 g per serving, a meaningful browned component (B +1)", "B", 1),
    ("kale raw", N, 0),
    ("fat ≈27 g per serving: oil ≈16, pepitas 4, avocado 5.5, chickpeas 1.5 (F 0)", N, 0),
    ("no meat, fat or oxidised-fat points, so no mitigation applies", N, 0)],
    ["acrylamide", "dietary-ages"])
rec("raw-broccoli-salad", [
    ("Broccoli raw; almonds and seeds baked golden at 175 °C are ≈22 g per serving, under the ≈30 g threshold (B 0)", N, 0),
    ("fat ≈23 g per serving: nuts and seeds 11, oil 7, mayo 5 (F 0)", N, 0)], ["dietary-ages"])
rec("tabbouleh", [
    ("Raw salad; bulgur soaked", N, 0),
    ("fat ≈12 g per serving (F 0)", N, 0)], [])
rec("sesame-tofu-broccoli", [
    ("Tofu pan-fried golden at medium heat in unspecified neutral oil (no seed-oil point, O 0)", N, 0),
    ("cornstarch coating ≈10 g per serving is not a meaningful browned starch (B 0)", N, 0),
    ("fat ≈27 g per serving: oil 9, tofu 10, sesame oil 4.5, seeds 3 (F 0)", N, 0)],
    ["cooking-oil-choice", "postprandial-fat-load"])
rec("asian-peanut-slaw", [
    ("No-cook; salted peanuts ≈12 g per serving, under 30 g (B 0)", N, 0),
    ("vegetable oil unheated (O 0)", N, 0),
    ("fat ≈19 g per serving (F 0)", N, 0)], [])
rec("roasted-cauliflower-chickpea-tahini-bowl", [
    ("Vegetables roasted at 200 °C score nothing", N, 0),
    ("chickpeas only warmed 5 min at medium heat until a little crisp, plain cooked legumes (B 0)", N, 0),
    ("olive oil, not a seed oil (O 0)", N, 0),
    ("fat ≈23 g per serving: tahini 11, oil 10, chickpeas 1.5 (F 0)", N, 0)], [])
rec("ratatouille", [
    ("Vegetables cooked at medium heat, then stewed", N, 0),
    ("EVOO ≈21 g fat per serving (F 0)", N, 0)], [])
rec("ribollita-tuscan-kale-bean-soup", [
    ("Soup simmered; ciabatta toasted only lightly golden and softened into the soup, acrylamide well under 10 µg per serving (B 0)", N, 0),
    ("1 cup wine simmered ≥20 min, cooked off (A 0)", N, 0),
    ("fat ≈13 g per serving (F 0)", N, 0)], ["acrylamide"])
rec("cabbage-soup-turmeric-ginger", [
    ("Aromatics and cabbage softened, then simmered", N, 0),
    ("fat ≈5 g per serving (F 0)", N, 0)], [])
rec("orecchiette-broccoli-sauce", [
    ("Broccoli steamed and simmered, pasta boiled", N, 0),
    ("pecorino 25 g ÷ 4 ≈6 g, under 20 g (O 0); 1 tsp anchovy paste is cured fish, no oxidised-fat point", N, 0),
    ("fat ≈12 g per serving (F 0)", N, 0)], [])
rec("sweet-potato-black-bean-tacos", [
    ("Sweet potato cubes ≈225 g per serving roasted at 220 °C until browned, ≈14–40 µg acrylamide (B +1)", "B", 1),
    ("fat ≈31 g per serving: avocado 11, oil 10, pepitas 8, beans and tortillas 2 (F +1)", "F", 1),
    ("roasted sweet potato and avocado in the same taco (X −1, limited by the floor of 1 + B = 2)", "X", -1)],
    ["acrylamide", "postprandial-fat-load", "meal-polyphenol-pairing"])
rec("greek-eggplant-chickpea-stew", [
    ("Vegetables softened, boiled briefly, then braised covered", N, 0),
    ("fat ≈11 g per serving (F 0)", N, 0)], [])
rec("palak-paneer", [
    ("No meat; onions softened, then simmered", N, 0),
    ("fat ≈33 g per serving: paneer 16, oil and butter 12, cashews 3.5, more with the optional cream (F +1)", "F", 1),
    ("spinach ≈110 g, onion 45 g and tomato cooked into the gravy with the paneer (X −1)", "X", -1)],
    ["postprandial-fat-load", "meal-polyphenol-pairing"])
rec("cauliflower-chickpea-masala", [
    ("Aromatics softened, then simmered", N, 0),
    ("fat ≈15 g per serving: oil 7, cream 7 (F 0)", N, 0)], [])
rec("mujadara", [
    ("Rice and lentils simmered; onions fried deep brown in EVOO, a stable oil and not a starch (O 0, B 0)", N, 0),
    ("fat ≈18 g per serving (F 0)", N, 0)], ["cooking-oil-choice"])

# ---------------- Fish, poultry and meat recipes ----------------
rec("sheet-pan-salmon-garlicky-kale", [
    ("Salmon roasted uncovered at 205 °C (C +1)", "C", 1),
    ("salt-free spice rub ≈1 tsp per serving baked onto the fish (X −1)", "X", -1),
    ("added oil ≈17 g per serving, salmon fat not counted (F 0)", N, 0),
    ("kale 57 g per serving, under 80 g", N, 0)],
    ["high-temperature-cooking", "herbs-spices"])
rec("sardine-pasta-breadcrumbs-capers", [
    ("Canned sardines only warmed 2 min (C 0; canned fish, no oxidised-fat point)", N, 0),
    ("toasted crumbs ≈10 g per serving, a garnish (B 0)", N, 0),
    ("oil ≈13 g per serving, sardine fat not counted (F 0)", N, 0)], [])
rec("baked-fish-tacos-purple-cabbage", [
    ("Tilapia baked uncovered at 190 °C (C +1; optional broil not counted)", "C", 1),
    ("fat ≈32 g per serving from mayo, avocado, cotija, sour cream, butter, oil and tortillas, fish fat not counted (F +1)", "F", 1),
    ("cabbage ≈58 g, avocado, tomato and onion in the taco, ≈90 g+ produce (X −1)", "X", -1)],
    ["high-temperature-cooking", "postprandial-fat-load", "meal-polyphenol-pairing"])
rec("pasta-mussels-tomato-sauce", [
    ("Mussels steamed (C 0)", N, 0),
    ("½ cup wine heated well under 15 min, so not cooked off: ≈11 g alcohol ÷ 4 ≈2.8 g per serving (A +2)", "A", 2),
    ("oil ≈7 g fat per serving, shellfish fat not counted (F 0)", N, 0),
    ("mitigation can't offset alcohol", N, 0)],
    ["alcohol"])
rec("cioppino-seafood-stew", [
    ("Fish pieces baked uncovered at 205 °C ≈10 min (C +1); clams and shrimp simmered", "C", 1),
    ("1 cup wine reduced, then simmered ≥35 min, cooked off (A 0)", N, 0),
    ("oil and butter ≈29 g fat per serving, seafood fat not counted (F 0)", N, 0),
    ("crushed tomatoes ≈200 g per serving in the stew ladled over the fish (X −1)", "X", -1)],
    ["high-temperature-cooking", "meal-polyphenol-pairing"])
rec("baked-mackerel-saba-shioyaki", [
    ("Mackerel baked at 218 °C until golden (C +1)", "C", 1),
    ("sake rubbed on and discarded (A 0); Atlantic or Pacific mackerel, not king mackerel (M 0)", N, 0),
    ("no added fat, fish fat not counted (F 0)", N, 0),
    ("daikon ≈37 g per serving, under 80 g", N, 0)],
    ["high-temperature-cooking"])
rec("avgolemono-chicken-rice-soup", [
    ("Chicken poached in broth, soup simmered (C 0)", N, 0),
    ("fat ≈18 g per serving: cream 10.5, eggs 5, chicken 2.5 (F 0)", N, 0)], [])
rec("tandoori-chicken-yogurt-marinade", [
    ("Chicken roasted at 240 °C, then broiled to a few charred spots, well done (C +2)", "C", 2),
    ("≥6 h yogurt-spice-lemon marinade (−1 in C)", "C", -1),
    ("unspecified neutral or mustard oil (O 0); fat ≈18 g per serving (F 0)", N, 0)],
    ["high-temperature-cooking", "marinating-meat"])
rec("beef-broccoli-stir-fry", [
    ("Beef 120 g raw ≈90 g cooked per serving ≈0.9 mg heme (H +2)", "H", 2),
    ("brief high-heat stir-fry, just cooked through (C +1)", "C", 1),
    ("Shaoxing wine 15 mL ÷ 3 ≈0.6 g alcohol (A 0); fat ≈19 g (F 0)", N, 0),
    ("broccoli ≈110 g per serving in the dish (X −1)", "X", -1)],
    ["heme-iron", "unprocessed-red-meat", "high-temperature-cooking", "meal-polyphenol-pairing"])
rec("moroccan-chicken-chickpea-couscous", [
    ("Chicken seared 2–3 min a side as the first step of an hour-long covered oven braise, scored as the braise (C 0); even counted as a sear, the ≈1 tsp per serving spice blend rubbed on would cancel it", N, 0),
    ("fat ≈6 g per serving (F 0)", N, 0)], ["high-temperature-cooking"])
rec("turmeric-ginger-chicken-soup-kale", [
    ("Chicken browned as the first step, then simmered 30–40 min (C 0); kale, sweet potato and aromatics ≈135 g per serving would cancel a sear point anyway", N, 0),
    ("fat ≈17 g per serving: coconut milk 9, butter 4, chicken 4 (F 0)", N, 0)], ["high-temperature-cooking"])
rec("wild-salmon-sauce-verte-green-beans", [
    ("Salmon baked at 175 °C, ≤180 °C (C 0); potatoes and beans boiled", N, 0),
    ("olive oil ≈30 g plus egg ≈2.5 g fat per serving if all the sauce is eaten, salmon fat not counted (F +1)", "F", 1),
    ("green beans ≈113 g per serving dressed with the sauce, plus 2 tbsp fresh herbs per serving in it (X −1)", "X", -1)],
    ["postprandial-fat-load", "meal-polyphenol-pairing"])
rec("roasted-broccoli-shrimp", [
    ("Shrimp roasted uncovered at 220 °C ≈10 min (C +1)", "C", 1),
    ("broccoli ≈225 g per serving roasted with them (X −1)", "X", -1),
    ("EVOO ≈13.5 g fat per serving, shrimp fat not counted (F 0)", N, 0)],
    ["high-temperature-cooking", "meal-polyphenol-pairing"])
rec("greek-chicken-cucumber-feta-salad", [
    ("Chicken thighs pan-fried 5–7 min a side until well browned (C +2); the yogurt coat sits under 30 min, no marinade credit", "C", 2),
    ("fat ≈31 g per serving: chicken 13.5, oil 7, feta 6, olives 2.5, yogurt 2 (F +1)", "F", 1),
    ("cucumber and tomato salad ≈280 g per serving (X −1)", "X", -1)],
    ["high-temperature-cooking", "postprandial-fat-load", "meal-polyphenol-pairing"])
rec("chicken-cacciatore-mushrooms-peppers", [
    ("Thighs browned 8 min as the first step of a 30-min covered braise (C 0)", N, 0),
    ("1 cup red wine reduced, then braised ≥35 min, cooked off (A 0)", N, 0),
    ("fat ≈20 g per serving (F 0)", N, 0)], ["high-temperature-cooking", "alcohol"])
rec("puttanesca-poached-white-fish", [
    ("Fish poached covered in the sauce (C 0)", N, 0),
    ("½ cup wine simmered ≈20 min, cooked off (A 0)", N, 0),
    ("anchovies ≈4 g per serving, cured fish, no oxidised-fat point", N, 0),
    ("fat ≈11 g per serving (F 0)", N, 0)], [])
rec("herb-walnut-pomegranate-stuffed-fish", [
    ("Whole fish roasted uncovered at 245 °C (C +1)", "C", 1),
    ("≈1¾ cups fresh herbs (≈7 tbsp per serving) cooked into the stuffing inside the fish (X −1)", "X", -1),
    ("oil and walnuts ≈23 g fat per serving, fish fat not counted (F 0)", N, 0)],
    ["high-temperature-cooking", "herbs-spices"])
rec("tuna-kimchi-tofu-stew", [
    ("Simmered covered ≈30 min (C 0); canned light tuna, not a high-mercury species (M 0), no oxidised-fat point", N, 0),
    ("fat ≈5 g per serving (F 0)", N, 0)], ["mercury-fish"])
rec("likama-salmon-cabbage-salad", [
    ("Salmon roasted at 175 °C, ≤180 °C (C 0); salad raw", N, 0),
    ("olive oil ≈12 g fat per serving, salmon fat not counted (F 0)", N, 0)], [])
rec("kuku-sabzi-herb-frittata", [
    ("Eggs and herbs cooked covered at medium heat in canola, a stable oil, then broiled 1–4 min (C 0, O 0)", N, 0),
    ("fat ≈13 g per serving (F 0)", N, 0)], ["cooking-oil-choice"])

FACTORS = {"alcohol", "processed-red-meat", "processed-meat", "heme-iron", "unprocessed-red-meat",
           "high-temperature-cooking", "marinating-meat", "acrylamide", "dietary-ages", "oxidized-frying-oils",
           "dietary-lipid-oxidation-products", "cooking-oil-choice", "postprandial-fat-load", "mercury-fish",
           "meal-polyphenol-pairing", "herbs-spices"}

def fmt(n):
    return f"− {-n}" if n < 0 else f"+ {n}"

out = {}
for rid, (parts, tags) in R.items():
    pts = [p for _, l, p in parts if l is not None]
    letters = {}
    for _, l, p in parts:
        if l is not None:
            letters[l] = letters.get(l, 0) + p
    score = 1 + sum(pts)
    floor = 1 + letters.get("B", 0) + letters.get("A", 0) + letters.get("M", 0)
    pos = sum(v for k, v in letters.items() if k in "CHOPF")
    if letters.get("X"):
        assert pos > 0, rid
        assert score >= floor, rid
    assert 1 <= score <= 10, rid
    for t in tags:
        assert t in FACTORS, (rid, t)
    body = "; ".join(t for t, _, _ in parts)
    if pts:
        arith = "1 " + " ".join(fmt(p) for p in pts) + f" = {score}"
    else:
        arith = "nothing scores = 1"
    why = f"{body} = {arith}" if pts else f"{body}; {arith}"
    if tags:
        why += " " + " ".join(f"[{t}]" for t in tags)
    out[rid] = {"score": score, "why": why}

dst = sys.argv[1]
os.makedirs(os.path.dirname(dst), exist_ok=True)
with open(dst, "w", encoding="utf-8", newline="\n") as f:
    json.dump({"load": out}, f, ensure_ascii=False, indent=1)
    f.write("\n")
print(len(out), "recipes written")
