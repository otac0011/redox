# Generates data/load/foods.json: Oxidant load (`load`) scores for every food in data/foods.json,
# following research/LOAD-RUBRIC.md (1 + C + B + P + H + O + F + A + M - X, floor 1, cap 10; lower is better).
# Fat per serving comes from the food's existing fats-category text (FDC-derived) or, where that text
# gives no total, from FDC SR Legacy total lipid per 100 g x serving grams (FDC_FAT below).
# Run: python data/load/foods_load_gen.py   (writes data/load/foods.json, then self-checks)
import json, re, pathlib

ROOT = pathlib.Path(__file__).resolve().parents[2]
FOODS = json.loads((ROOT / "data" / "foods.json").read_text(encoding="utf-8"))["foods"]
OUT = ROOT / "data" / "load" / "foods.json"

# FDC total lipid g/100 g and serving grams, for foods whose fats text has no total fat.
FDC_FAT = {
    "salmon-atlantic-farmed": (12.4, 85), "salmon-sockeye-wild": (5.57, 85), "salmon-pink-canned": (4.21, 85),
    "sardines-canned": (11.4, 85), "mackerel-atlantic": (17.8, 85), "mackerel-king": (2.56, 85),
    "herring-atlantic": (11.6, 85), "anchovies-canned": (9.71, 28), "trout-rainbow": (7.38, 85),
    "tuna-canned-light": (0.96, 85), "tuna-albacore": (2.97, 85), "cod-atlantic": (0.86, 85),
    "tilapia": (2.65, 85), "shrimp": (0.28, 85), "mussels": (4.48, 85), "oysters": (2.65, 85),
    "clams": (1.95, 85), "scallops": (0.84, 85), "crab-blue": (0.74, 85), "swordfish": (7.93, 85),
    "eggs": (10.6, 100), "chicken-breast": (3.57, 85), "chicken-thigh": (8.15, 85),
    "beef-sirloin": (6.72, 85), "ground-beef-85": (15.4, 85), "lamb": (20.9, 85), "pork-loin": (7.29, 85),
    "bacon": (35.1, 24), "deli-ham": (8.8, 56), "chicken-liver": (6.51, 85), "beef-liver": (4.68, 85),
    "greek-yogurt-2pct": (1.92, 170), "milk-2pct": (1.98, 244), "cheddar": (33.3, 28), "parmesan": (25.0, 28),
    "tofu-firm": (8.72, 126), "tempeh": (11.4, 85), "soy-milk-unsweetened": (1.65, 243),
    "extra-virgin-olive-oil": (100, 13.5), "olive-oil-refined": (100, 13.5), "canola-oil": (100, 14),
    "avocado-oil": (100, 14), "sunflower-oil-refined": (100, 13.6), "soybean-oil": (100, 13.6),
    "flaxseed-oil": (100, 13.6), "butter": (81.1, 14.2), "ghee": (99.5, 12.8), "coconut-oil": (99.1, 13.6),
}
NO_FAT = {"green-tea", "matcha", "black-tea", "coffee-brewed", "espresso", "hibiscus-tea", "red-wine",
          "sugar-sweetened-soda", "apple-cider-vinegar", "honey", "maple-syrup", "white-sugar", "iodized-salt"}

def fat_of(food):
    fid = food["id"]
    if fid in NO_FAT:
        return 0.0
    if fid in FDC_FAT:
        p, g = FDC_FAT[fid]
        return p * g / 100
    w = (food["scores"].get("fats") or {}).get("why", "")
    for pat in (r"Fat ≈?\s?([\d.]+) g", r"of ([\d.]+) g fat", r"≈ ([\d.]+) g fat", r"\(([\d.]+) g\)"):
        m = re.search(pat, w)
        if m:
            return float(m.group(1))
    raise SystemExit(f"no fat value for {fid}")

def fat_txt(fat):
    if fat == 0:
        return "no fat (F 0)"
    s = f"{fat:.1f}".rstrip("0").rstrip(".") if fat >= 0.05 else "under 0.1"
    return f"fat {s} g per serving, under 30 g (F 0)"

# --- shared wording ------------------------------------------------------------------------------
RAWVEG = "Raw plant food: no cooking by-products, browned starch, heme, oxidised fat, alcohol or high-mercury fish (C, B, H, O, A, M 0)"
COOKVEG = "Vegetable cooked by moist heat; boiling, steaming and simmering form almost no acrylamide (under 5 µg/kg) (B 0)"
FRUIT = "Fresh fruit: nothing in the rubric applies (B 0)"
LEGUME = "Plain cooked legumes are not an AGE-dense browned product and moist heat forms almost no acrylamide (B 0)"
GRAIN = "Boiled grain: boiled and steamed grains are not flagged and carry almost no acrylamide (B 0)"
SPICE = "Herb or spice at a typical serving: nothing scores (C, B, O 0); cooked into or onto meat or a fatty dish it earns the −1 mitigation in recipes, and spice lead is a watch-out, not points"
RAWNUT = "Raw (unroasted) nuts or seeds per the FDC record; raw or blanched nuts are not flagged (B 0)"
ROASTNUT = "FDC record is the {kind}, an AGE-dense roasted product"
BAKEDFISH = "Fish \"3 oz cooked\" assumed baked without a browned surface (C 0); fresh fish and its omega-3s score 0 for oxidised fat (O 0)"
CANFISH = "Canned fish, heat-sterilised in the can with no browned surface (C 0); canned fish is not a dried, dried-salted or reheated product (O 0)"
SHELL = "Shellfish cooked by moist heat or steaming (C 0); no heme points for shellfish (H 0)"
NOMERC = "not an FDA/EPA \"choices to avoid\" species (M 0)"
FISHFAT = "fish fat is not counted"

def S(text, code=None, pts=None):
    return (text, code, pts)

SPEC = {}
def add(ids, parts, factors=(), note=""):
    for i in ids.split():
        SPEC[i] = (parts, list(factors), note)

# Vegetables
add("broccoli-sprouts green-cabbage red-cabbage cauliflower arugula watercress radish daikon mustard-greens "
    "kohlrabi romaine-lettuce carrots tomato-raw red-bell-pepper zucchini yellow-onion red-onion garlic celery "
    "cucumber fennel radicchio", [S(RAWVEG)])
add("broccoli", [S("Raw or lightly steamed plant food: no cooking by-products, browned starch, heme, oxidised fat, alcohol or high-mercury fish (C, B, H, O, A, M 0)")])
add("white-button-mushrooms oyster-mushrooms", [S("Mushrooms, eaten raw or cooked; plant foods never score cooking points and mushrooms are not a browned starch (C 0, B 0)")])
add("kale bok-choy collard-greens turnip-greens spinach swiss-chard beet-greens beetroot parsnip asparagus "
    "artichoke eggplant okra green-beans green-peas sweet-corn shiitake leeks", [S(COOKVEG)], ["acrylamide"])
add("tomato-sauce", [S("Cooked tomato sauce: simmered, so almost no acrylamide (B 0)")], ["acrylamide"])
add("white-potato", [S("Boiled in its skin; boiled potatoes carry under 5 µg/kg acrylamide (B 0), unlike fries or crisps")], ["acrylamide"])
add("sweet-potato", [S("Baked whole in its skin; the moist flesh is not a low-moisture browned product and stays well under 10 µg acrylamide per 114 g (B 0); sweet-potato fries would differ")], ["acrylamide"])
add("butternut-squash", [S("Baked squash cubes; roasted or baked vegetables score nothing, since B covers only browned starch and nut products (B 0)")], ["acrylamide"])
add("brussels-sprouts", [S("Steamed or roasted; roasted vegetables score nothing, since B covers only browned starch and nut products (B 0)")], ["acrylamide"])
add("nori kombu", [S("Dried seaweed, not a browned starch or nut product (B 0); iodine is a watch-out, not oxidant points")])

# Fruit
add("blueberries wild-blueberries blackberries raspberries strawberries cranberries-fresh black-currants aronia "
    "tart-cherries sweet-cherries red-grapes pomegranate-arils orange grapefruit lemon kiwi apple pear plums "
    "peaches mango papaya pineapple banana watermelon guava figs-fresh cantaloupe acai-pulp", [S(FRUIT)])
add("pomegranate-juice orange-juice", [S("Fruit juice: nothing in the rubric applies (B 0); sugar is scored in the glycemic category, not here")])
add("avocado", [S("Fresh fruit (B 0); its high ELISA AGE value is not used")], ["dietary-ages"])
add("prunes", [S("Dried plums carry some acrylamide, but typical levels (about 50-200 µg/kg) give roughly 2-9 µg per 44 g, under 10 µg, and dried fruit is not on the AGE-dense list (B 0)")], ["acrylamide"])
add("dried-apricots dates raisins goji-berries dried-cranberries-sweetened", [S("Dried fruit: low acrylamide (well under 10 µg per serving) and not on the AGE-dense list (B 0)")], ["acrylamide"])
add("olives", [S("Canned California ripe olives are lye-oxidised and heat-sterilised, which forms acrylamide: about 10-39 µg per 44 g", "B", 1)], ["acrylamide"],
    "Brine-cured Greek or Kalamata-style olives form little acrylamide and would score 1.")

# Legumes
add("chickpeas-cooked lentils-brown-green lentils-red black-beans kidney-beans pinto-beans navy-beans edamame split-peas fava-beans", [S(LEGUME)])
add("chickpeas-canned", [S("Canned chickpeas, cooked in the can by moist heat; plain cooked legumes are not flagged and carry almost no acrylamide (B 0)")])
add("peanuts", [S(ROASTNUT.format(kind="dry-roasted peanut"), "B", 1)], ["dietary-ages"], "Raw peanuts would score 1.")
add("peanut-butter-natural", [S("Peanut butter is ground from roasted peanuts, an AGE-dense roasted-nut spread", "B", 1)], ["dietary-ages"])

# Grains
add("pearl-barley quinoa brown-rice white-rice bulgur farro millet whole-wheat-pasta white-pasta", [S(GRAIN)], ["acrylamide"])
add("buckwheat", [S("Boiled buckwheat groats; boiled grains are not flagged, and even pre-toasted kasha is eaten boiled and moist (B 0)")], ["acrylamide"])
add("rolled-oats steel-cut-oats", [S("Oats, cooked as porridge; oats are explicitly not flagged (B 0)")])
add("whole-wheat-bread white-bread rye-bread-wholegrain", [S("Soft bread is not flagged; at the EU bread benchmark of 50 µg/kg a slice holds under 2 µg acrylamide (B 0)")], ["acrylamide"],
    "Toasting it dark adds acrylamide but usually stays under 10 µg per slice.")
add("popcorn-air-popped", [S("Popcorn is explicitly not flagged, and air-popped corn is not fried in oil; acrylamide stays under 10 µg per 3 cups (B 0)")], ["acrylamide"])
add("corn-tortillas", [S("Soft corn tortillas, not a crisp low-moisture product; acrylamide stays well under 10 µg per 2 tortillas (B 0)")], ["acrylamide"],
    "Fried tortilla chips or tostadas would score higher.")

# Nuts and seeds
add("walnuts almonds pecans hazelnuts macadamia", [S(RAWNUT)], ["dietary-ages"], "Roasted versions would get B +1.")
add("brazil-nut", [S("Raw dried, unblanched Brazil nut per the FDC record; raw nuts are not flagged (B 0)")], ["dietary-ages"])
add("pistachios", [S(ROASTNUT.format(kind="dry-roasted pistachio"), "B", 1)], ["dietary-ages"], "Raw pistachios would score 1.")
add("cashews", [S(ROASTNUT.format(kind="dry-roasted cashew"), "B", 1)], ["dietary-ages"], "Raw cashews would score 1.")
add("pumpkin-seeds", [S(ROASTNUT.format(kind="roasted pumpkin seed kernel"), "B", 1)], ["dietary-ages"], "Raw pepitas would score 1.")
add("sunflower-seeds", [S(ROASTNUT.format(kind="dry-roasted sunflower kernel"), "B", 1)], ["dietary-ages"], "Raw kernels would score 1.")
add("tahini", [S("Tahini made from roasted and toasted sesame kernels (FDC's most common type), an AGE-dense roasted-seed spread", "B", 1)], ["dietary-ages"],
    "Raw-sesame tahini would score 1.")
add("chia-seeds hemp-seeds", [S("Raw seeds; raw seeds are not flagged (B 0) and their omega-3 fat is not an oxidised-fat hot spot (O 0)")], ["dietary-ages"])
add("flaxseed-ground", [S("Raw ground seed, not roasted (B 0) and not an oxidised-fat hot spot (O 0); keep it cold and sealed, since ground flax oxidises in storage")], ["dietary-ages"])

# Seafood
for i in "salmon-atlantic-farmed salmon-sockeye-wild mackerel-atlantic herring-atlantic trout-rainbow cod-atlantic tilapia".split():
    add(i, [S(BAKEDFISH), S(NOMERC)], ["high-temperature-cooking", "mercury-fish"])
add("mackerel-king", [S(BAKEDFISH), S("king mackerel is an FDA/EPA \"choices to avoid\" high-mercury species", "M", 1)], ["high-temperature-cooking", "mercury-fish"],
    "Mercury points can't be offset by mitigation.")
add("swordfish", [S(BAKEDFISH), S("swordfish is an FDA/EPA \"choices to avoid\" high-mercury species", "M", 1)], ["high-temperature-cooking", "mercury-fish"],
    "Grilled or seared with browning it would add C +1 (score 3).")
add("salmon-pink-canned sardines-canned", [S(CANFISH), S(NOMERC)], ["mercury-fish"])
add("anchovies-canned", [S("Salt-cured anchovies canned in oil, scored as canned fish rather than dried-salted fish: heat-sterilised with no browned surface (C 0, O 0)"), S(NOMERC)], ["mercury-fish"])
add("tuna-canned-light", [S(CANFISH), S("light (mostly skipjack) tuna is " + NOMERC)], ["mercury-fish"])
add("tuna-albacore", [S(CANFISH), S("albacore carries more mercury than light tuna but is " + NOMERC)], ["mercury-fish"],
    "Mercury in albacore is a frequency watch-out rather than points.")
for i in "shrimp mussels clams scallops crab-blue oysters".split():
    add(i, [S(SHELL), S(NOMERC)], ["mercury-fish"])

# Meat and eggs
add("eggs", [S("Hard-boiled eggs: boiled, no browning (C 0); egg heme doesn't count (H 0) and whole boiled eggs are not an oxysterol hot spot (O 0)")], ["heme-iron"])
add("chicken-breast", [S("Assumed roasted uncovered at about 200-220 °C (typical home oven), above 180 °C with browning", "C", 1),
    S("poultry heme doesn't count (H 0)")], ["high-temperature-cooking", "heme-iron"], "Poached or roasted at 180 °C or below it would score 1.")
add("chicken-thigh", [S("Assumed roasted uncovered at about 200-220 °C (typical home oven), above 180 °C with browning", "C", 1),
    S("poultry heme doesn't count (H 0)")], ["high-temperature-cooking", "heme-iron"], "Braised or roasted at 180 °C or below it would score 1.")
add("turkey-breast", [S("Roasted at 163 °C (325 °F, the USDA FSIS roasting chart), within the 180 °C-or-below band (C 0)"),
    S("poultry heme doesn't count (H 0)")], ["high-temperature-cooking", "heme-iron"])
add("beef-sirloin", [S("Beef steak heme about 0.8-1.3 mg per 85 g", "H", 2), S("broiled, scored in the red-meat broiled-to-well-done band", "C", 2)],
    ["heme-iron", "unprocessed-red-meat", "high-temperature-cooking"],
    "A herb, spice or acid marinade of 30 min or more would take 1 off C.")
add("ground-beef-85", [S("Ground beef heme about 0.9-1.7 mg per 85 g", "H", 2), S("patty broiled (FDC record), cooked through as ground beef should be, so the broiled-to-well-done band", "C", 2)],
    ["heme-iron", "unprocessed-red-meat", "high-temperature-cooking"],
    "Microwaving the patty 1-3 min first and pouring off the juice, or a spice marinade, would take 1 off C.")
add("lamb", [S("Lamb heme about 0.7-1.3 mg per 85 g", "H", 2), S("method unstated, so assumed oven-roasted at 180 °C or below, the common home method for these roasted retail cuts", "C", 1)],
    ["heme-iron", "unprocessed-red-meat", "high-temperature-cooking"],
    "Grilled lamb chops cooked well done would get C +2 (score 5).")
add("pork-loin", [S("Pork loin heme 0.3-0.6 mg per 85 g (rubric default; measured well-done loin 0.29-0.33 mg, at the band edge)", "H", 1),
    S("broiled and, as pork usually is, cooked through, so the broiled-to-well-done band", "C", 2)],
    ["heme-iron", "unprocessed-red-meat", "high-temperature-cooking"])
add("bacon", [S("Cured, nitrite-preserved pork, 24 g in the 20-49 g band", "P", 2), S("pan-fried processed meat", "C", 3),
    S("its heme counts through P, not H")], ["processed-meat", "processed-red-meat", "high-temperature-cooking"])
add("deli-ham", [S("Cured ham 56 g, at least 50 g", "P", 3), S("eaten cold, so no cooking by-products (C 0)"), S("its heme counts through P, not H")],
    ["processed-meat", "processed-red-meat"], "Fried or grilled ham would add C +3 (score 7).")
add("beef-liver", [S("Organ meat; heme about 0.7 mg per 85 g (only about 14% of liver iron is heme)", "H", 2),
    S("briefly pan-fried, not taken to well done, so the brief medium-high-heat band", "C", 1)], ["heme-iron", "high-temperature-cooking"])
add("chicken-liver", [S("Organ meat of any species counts for heme; chicken liver about 1.0-1.6 mg per 85 g (uncertain)", "H", 2),
    S("simmered (C 0)")], ["heme-iron", "high-temperature-cooking"])

# Dairy and soy
add("greek-yogurt-2pct milk-2pct cottage-cheese-2pct", [S("Plain dairy, not browned, cured or powdered: nothing scores (C, B, O 0)")])
add("kefir", [S("Fermented milk; kefir carries only trace alcohol, well under 2 g per cup", "A", 0)], ["alcohol"])
add("cheddar", [S("A 1 oz piece of cheese; the oxysterol hot spot covers only 20 g or more of grated aged hard cheese (O 0)")], ["dietary-lipid-oxidation-products"])
add("parmesan", [S("Scored as a 1 oz piece of hard cheese, not grated", "O", 0)], ["dietary-lipid-oxidation-products"],
    "28 g of grated Parmesan would be an oxysterol hot spot, earning O +1 for a score of 2; a 10 g grating stays under the 20 g threshold.")
add("tofu-firm soy-milk-unsweetened", [S("Soy food, not browned, fried or cured: nothing scores (C, B, O 0)")])
add("tempeh", [S("Tempeh, cooked; plant foods never score meat-cooking points and tempeh is not a browned starch (C 0, B 0)")], ["cooking-oil-choice"],
    "Pan-frying it in a PUFA-rich seed oil would add O +1 in a recipe.")

# Herbs and spices
add("turmeric ginger cinnamon cloves oregano-dried rosemary thyme-dried parsley cilantro basil mint cumin black-pepper "
    "paprika-chili-powder brown-mustard-seed horseradish wasabi-real", [S(SPICE)], ["herbs-spices"])

# Oils and fats
OILNOTE = "Oils get no AGE points (the ELISA value is not used) and 1 tbsp adds no oxidised-fat point by itself (B 0, O 0)"
add("extra-virgin-olive-oil olive-oil-refined avocado-oil", [S(OILNOTE)], ["cooking-oil-choice", "oxidized-frying-oils", "dietary-ages"],
    "For frying: a stable, mostly monounsaturated oil; home deep-frying in fresh oil like this counts O +1 in a recipe, and reused oil O +2.")
add("canola-oil", [S(OILNOTE)], ["cooking-oil-choice", "oxidized-frying-oils", "dietary-ages"],
    "For frying: canola counts as a stable oil; home deep-frying in fresh canola is O +1 in a recipe, reused oil O +2.")
add("sunflower-oil-refined soybean-oil", [S(OILNOTE)], ["cooking-oil-choice", "oxidized-frying-oils", "dietary-ages"],
    "For frying: a PUFA-rich seed oil, so pan-frying or roasting in it at high heat adds O +1 in a recipe and deep-frying O +2; use it cold or swap in olive or high-oleic oil for heat.")
add("flaxseed-oil", [S(OILNOTE)], ["cooking-oil-choice", "oxidized-frying-oils", "dietary-ages"],
    "For frying: don't; flaxseed oil is the most oxidation-prone oil here, so use it cold and keep it refrigerated.")
add("coconut-oil", [S(OILNOTE)], ["cooking-oil-choice", "oxidized-frying-oils", "dietary-ages"],
    "For frying: mostly saturated and heat-stable, so it oxidises little; its saturated fat is the fats category's concern.")
add("butter", [S("Butter gets no AGE points (the ELISA value is not used) and 1 tbsp is not an oxysterol hot spot (B 0, O 0)")], ["cooking-oil-choice", "dietary-ages"],
    "For frying: whole butter browns and burns at moderate heat, so keep the heat medium or finish dishes with it.")
add("ghee", [S("Ghee is an oxysterol hot spot: clarifying butterfat by heating, and storing it, oxidises its cholesterol", "O", 1)],
    ["dietary-lipid-oxidation-products", "cooking-oil-choice"],
    "For frying: ghee tolerates heat, but as the main cooking fat it keeps this O +1 in a recipe.")

# Drinks
add("green-tea black-tea hibiscus-tea", [S("Brewed tea: nothing scores (B 0, A 0)")])
add("matcha", [S("Matcha whisked in water: nothing scores (B 0, A 0)")])
add("coffee-brewed", [S("Brewed coffee holds at most about 4 µg acrylamide per cup (400 µg/kg roast benchmark x about 10 g grounds), under 10 µg", "B", 0)], ["acrylamide"])
add("espresso", [S("A single shot uses about 7 g of grounds, so at most about 3 µg acrylamide", "B", 0)], ["acrylamide"])
add("hot-cocoa-unsweetened", [S("Cocoa 5.4 g adds well under 1 µg acrylamide", "B", 0), S("heated fresh milk is not an oxysterol hot spot (O 0)")], ["acrylamide"])
add("red-wine", [S("FDC red wine has about 10.6 g alcohol per 100 g, so about 16 g per 150 mL glass, above one 14 g standard drink", "A", 4)], ["alcohol"],
    "The wine's polyphenols don't cancel the alcohol, and mitigation can't offset alcohol points.")
add("sugar-sweetened-soda", [S("Soda: nothing scores here (B 0, A 0); its sugar load belongs to the glycemic category")])

# Other
add("dark-chocolate-85", [S("Chocolate from roasted cocoa carries little acrylamide (typically under 100 µg/kg, about 3 µg or less per 28 g) and is not on the AGE-dense list", "B", 0)], ["acrylamide", "dietary-ages"],
    "Cocoa cadmium and lead are watch-outs, not points.")
add("cocoa-powder", [S("Natural cocoa powder at 5.4 g adds only about 1-2 µg acrylamide even at a few hundred µg/kg", "B", 0)], ["acrylamide"],
    "Cocoa cadmium and lead are watch-outs, not points.")
add("apple-cider-vinegar", [S("Cider vinegar holds only trace alcohol, well under 2 g", "A", 0)], ["alcohol"])
add("miso", [S("Fermented paste, not a browned low-moisture product (B 0) and essentially no alcohol (A 0)")])
add("kimchi sauerkraut", [S("Raw fermented vegetables: nothing scores (B 0, A 0)")])
add("nutritional-yeast-fortified", [S("Dried yeast flakes, not a browned starch or nut product (B 0)")])
add("honey maple-syrup white-sugar", [S("Sweetener: nothing scores here (B 0); sugar belongs to the glycemic category")])
add("iodized-salt", [S("Salt: nothing in the rubric applies")])

# --- build ---------------------------------------------------------------------------------------
def build(food):
    parts, factors, note = SPEC[food["id"]]
    frags, pts = [], []
    for text, code, p in parts:
        if code is None:
            frags.append(text)
        else:
            sign = "+" if p > 0 else ""
            frags.append(f"{text} ({code} {sign}{p})" if p else f"{text} ({code} 0)")
            if p:
                pts.append(p)
    fat = fat_of(food)
    ff = fat_txt(fat)
    seafood = food["group"] == "seafood"
    if seafood and fat:
        ff = f"seafood fat {fat:.1f} g is not counted (F 0)"
    frags.append(ff)
    body = "; ".join(frags)
    body = body[0].upper() + body[1:]
    total = max(1, min(10, 1 + sum(pts)))
    arith = " = " + " + ".join(["1"] + [str(p) for p in pts]) + (f" = {total}" if pts else "")
    why = body + arith + "."
    if note:
        why += " " + note
    if factors:
        why += " " + " ".join(f"[{f}]" for f in factors)
    return {"score": total, "why": why}

def main():
    ids = [f["id"] for f in FOODS]
    missing = [i for i in ids if i not in SPEC]
    extra = [i for i in SPEC if i not in ids]
    if missing or extra:
        raise SystemExit(f"missing specs {missing}; unknown ids {extra}")
    load = {f["id"]: build(f) for f in FOODS}
    OUT.write_text(json.dumps({"load": load}, indent=1) + "\n", encoding="utf-8")
    print(f"wrote {len(load)} foods -> {OUT}")

if __name__ == "__main__":
    main()
