# Oxidant load rubric (`load`)

A 1-10 score per serving for **how much oxidative stress the food itself brings**: 1 = negligible, 10 = heavy. Higher is worse, which is the opposite of the site's other categories. The site shows this score as a red bar labelled "lower is better" and leaves it out of the protective average. It applies to both the Foods page and the Recipes page, and on recipes it replaces the old "Low-oxidant cooking" category.

Evidence: `research/deep-food-oxidants.md`. Data for scoring: the oxidant data table (`food-oxidant-data.json` in the agents' scratchpad, compiled from the deep dive's sources) (AGE values, heme per serving, oxysterol, MDA, HCA, PAH and acrylamide ranges, and per-food hints in section `e_site_food_hints`). Factors: [alcohol] [processed-red-meat] [processed-meat] [heme-iron] [unprocessed-red-meat] [high-temperature-cooking] [marinating-meat] [acrylamide] [dietary-ages] [oxidized-frying-oils] [dietary-lipid-oxidation-products] [cooking-oil-choice] [postprandial-fat-load] [mercury-fish] [meal-polyphenol-pairing] [herbs-spices]

## Design principles

1. **Weight by human evidence, not mechanism.** Alcohol (RCTs showing isoprostane rises) and processed meat (IARC Group 1, faecal N-nitroso trials) carry the largest weights. Heme and high-heat meat cooking are medium. Oxidised-fat hot spots, browned starches, fat load and high-mercury fish are small. Dietary AGEs get no standalone points; they are folded into the browning points, because the trials conflict, the cohorts are null and the two databases disagree.
2. **No double counting.**
   - Sugar spikes stay in the glycemic category. Nothing here scores carbohydrate amount or glycemic load.
   - This score **replaces** the recipe cooking category, so cooking by-products (HCAs, PAHs, acrylamide, AGEs, frying oil) are scored only here.
   - Each item of food is scored once per component. Processed meat gets its heme through P, not H.
   - A marinade or spice rub earns credit once: either in the cooking component or in mitigation, not both.
3. **Mitigation can cancel meat, fat and cooking points but not alcohol or mercury.**
4. **Score as written.** Single foods are scored in their stated serving form ("3 oz broiled"). Recipes are scored per stated serving, including method and ingredients. If the method is unstated, assume the most common home method and say so in `why`.

## Formula

**Oxidant load = 1 + C + B + P + H + O + F + A + M − X**, then floor 1 and cap 10.

| Code | Component | Max | Human evidence |
|---|---|---|---|
| C | Meat, poultry and fish cooking by-products (HCAs, PAHs, meat AGEs) | 3 | Limited to moderate |
| B | Browned starch and nut products (acrylamide plus Maillard AGEs) | 2 | Limited; AGE part contested |
| P | Processed (cured, smoked, nitrite) meat | 3 | Moderate to strong |
| H | Heme iron from unprocessed red meat and organ meat | 2 | Moderate (gut markers) |
| O | Oxidised fats: frying oil and oxysterol hot spots | 2 | Limited |
| F | Fat load per serving | 2 | Moderate (acute) |
| A | Alcohol remaining in the serving | 4 | Moderate (RCTs) |
| M | High-mercury fish | 1 | Limited at food level |
| X | Same-meal mitigation (deduction) | −2 | Limited (single-meal trials) |

The theoretical maximum is 1 + 19 = 20, so the cap of 10 matters only for extreme dishes (charred processed meat in a deep-fried, fat-laden, alcohol-rich serving).

### C — Meat, poultry and fish cooking (0-3)

Score the animal component's method. Plant foods never score here.

| Method | Points |
|---|---|
| Raw, cured-and-not-heated (smoked salmon), poached, steamed, boiled, stewed, braised, slow-cooked, microwaved, baked covered or at ≤ 180 °C / 350 °F | 0 |
| Fish or poultry seared, roasted, broiled or baked uncovered at > 180 °C with browning; red meat roasted ≤ 180 °C; meat stir-fried briefly at medium-high heat | +1 |
| Red meat or poultry grilled, broiled or pan-fried to well done; any meat barbecued over charcoal or open flame; deep-fried meat or fish | +2 |
| Charred or blackened meat; processed meat fried, grilled or broiled (bacon, sausages, hot dogs) | +3 |

- **Marinade adjustment:** a herb, spice or acid marinade of at least 30 minutes, or a spice rub of at least 1 tsp dried per serving, before a +2 or +3 method: −1 here (minimum 0). Sugary glazes on long grilling don't count, because sugar raised MeIQx in one study.
- **Microwave pre-cooking** of patties for 1-3 minutes before frying, with the juice poured off: −1 here.
- Typical exposures behind the bands: well-done grilled or pan-fried chicken breast 12-480 ng/g PhIP; well-done steak 2-30 ng/g PhIP; roast or stewed meat and chicken have none; very well done grilled meat up to about 4 ng/g benzo[a]pyrene.
- The data table's Uribarri rows let you check within-food contrasts. For example, chicken breast is about 1,100 kU/100 g poached versus 5,800 broiled and 9,700 deep-fried breaded.

### B — Browned starch and nut products (0-2)

Take the **higher** of the two rules below. Don't add them together.

1. **Acrylamide estimate per serving** (concentration × grams; see data table section d):

   | Estimated acrylamide | Points |
   |---|---|
   | < 10 µg | 0 |
   | 10-39 µg | +1 |
   | ≥ 40 µg | +2 |

   Defaults: brewed coffee ≤ 4 µg per cup (0); 28 g crisps ≈ 12 µg (+1); 117 g fries ≈ 23-58 µg (+1, or +2 if dark or a large portion); dark toast and crispbread usually < 10 µg per slice.
2. **AGE-dense browned product flag (+1):** an industrially browned, baked, roasted or extruded low-moisture product is the main component of the serving. Examples: flaked or puffed breakfast cereals, biscuits, crackers, crispbread, pretzels, dark toast, peanut butter and other roasted-nut spreads, dry-roasted or honey-roasted nuts and seeds, crisp roast potatoes or hash browns. In LC-MS data these are the highest-AGE foods (MG-H1 roughly 100-450 mg/kg).

   Not flagged: raw or blanched nuts, soft bread, boiled or steamed grains, oats, popcorn, plain cooked legumes, butter and oils. Butter and oils are high only in the disputed ELISA database.

### P — Processed meat (0-3)

Processed meat means cured, salted, smoked or nitrite-preserved meat: bacon, ham, deli meats, salami, pepperoni, chorizo, hot dogs, cured or smoked sausages, corned beef and jerky. Products labelled "uncured" or "no nitrite added" count the same. Fresh unseasoned sausage meat counts as unprocessed meat.

| Processed meat per serving | Points |
|---|---|
| ≥ 50 g | +3 |
| 20-49 g | +2 |
| 5-19 g (garnish or flavouring) | +1 |

The anchor is IARC's estimate of colorectal cancer risk rising about 18% per 50 g/day.

### H — Heme iron from unprocessed red meat and organ meat (0-2)

This applies only to **mammalian meat** (beef, lamb, pork, veal, goat, game) and **organ meat of any species**. Poultry, fish, shellfish, eggs and plants score 0: white meat did not raise faecal N-nitroso compounds, and the cancer associations are with red meat.

| Heme iron per serving | Points |
|---|---|
| < 0.3 mg | 0 |
| 0.3-0.69 mg | +1 |
| ≥ 0.7 mg | +2 |

Defaults per 85 g cooked serving (data table section b):

| Meat | Heme, mg | Points |
|---|---|---|
| Beef steak or roast | 0.8-1.3 | +2 |
| Ground beef | 0.9-1.7 | +2 |
| Lamb | 0.7-1.3 | +2 |
| Pork loin | 0.3-0.6 | +1 |
| Beef liver | ≈ 0.7 | +2 |
| Chicken liver | ≈ 1.0-1.6 (uncertain) | +2 |

For recipes, scale to grams of meat per serving: about 1 mg heme per 100 g cooked beef or lamb, and 0.4-0.7 mg per 100 g pork.

### O — Oxidised fats (0-2)

Add the applicable items, capped at 2:

- **Frying oil:**
  - Deep-fried in restaurant or reused oil, or in a PUFA-rich seed oil (sunflower, corn, soybean, grapeseed): +2
  - Deep-fried at home in fresh, stable oil (olive, high-oleic, canola): +1
  - Pan-fried or roasted at high heat in a PUFA-rich seed oil: +1
- **Oxysterol hot spot in the serving: +1** for any of:
  - ghee as the main cooking fat
  - ≥ 20 g grated aged hard cheese (Parmesan, Romano, pecorino)
  - egg or milk powder as a main ingredient
  - cooked meat or fish that is stored and reheated (meal-prep leftovers, pre-fried products)
  - dried or dried-salted fish
  - a cured-and-aged meat already scored under P, if it is also cooked again (salami on a baked pizza)

Fresh fish and its omega-3s score 0 here. Fish oil and fish meals did not raise systemic F2-isoprostanes.

### F — Fat load per serving (0-2)

| Total fat per serving | Points |
|---|---|
| < 30 g | 0 |
| 30-49.9 g | +1 |
| ≥ 50 g | +2 |

The anchors come from acute meal studies: about 50 g of fat transiently impaired endothelial function, and 66 g raised plasma MDA and H2O2 where 33 g did not. Single-food servings almost never qualify (a 1 oz nut serving is 14-21 g). Fat type is the fats category's job; this component only measures amount.

**Don't count fat from fish and seafood.** In the one direct comparison, a 50 g-fat salmon meal did not significantly impair dilation while an olive-oil meal did, and fish meals and fish oil lowered or didn't change F2-isoprostanes. Otherwise this component would penalise the oily-fish dishes the site recommends. It is a judgement call on small studies.

### A — Alcohol remaining in the serving (0-4)

| Alcohol per serving, not cooked off | Points |
|---|---|
| ≥ 14 g (one US standard drink, e.g. 150 mL wine, 355 mL beer) | +4 |
| 7-13.9 g | +3 |
| 2-6.9 g | +2 |
| < 2 g, or simmered ≥ 15 min | 0 |

The "cooked off" convention follows the recipe rubric: raw or simmered under 15 minutes counts as not cooked off.

### M — High-mercury fish (0-1)

+1 for FDA/EPA "choices to avoid" species: king mackerel, marlin, orange roughy, shark, swordfish, Gulf tilefish and bigeye tuna.

Rice arsenic, cocoa cadmium and lead, and spice lead stay as **watch-outs, not points**. Their per-serving oxidative effect is unproven.

### X — Same-meal mitigation (0 to −2)

This applies only if C + H + O + P + F > 0, and it can't reduce the total below 1 + B + A + M.

- **−1, herbs and spices with the meat or fatty component:** ≥ 1 tsp dried (or 1 tbsp fresh) herbs or spices per serving cooked into or onto it, such as oregano, rosemary, thyme, sage, cloves, cinnamon, turmeric with ginger, or a curry or berbere blend. Skip this if the same rub or marinade already earned the −1 in C.
- **−1, polyphenol-rich produce or drink in the same dish or meal component:** at least 80 g of vegetables or fruit, or ≥ ½ cup cooked tomato product, or ≥ ¾ cup berries, eaten with the meat, fatty or fried component. Coffee or tea counts only if it is an ingredient or explicitly part of the served dish. Wine never counts.

## Single foods (Foods page)

Score each food in its stated serving and preparation. Most plant foods, dairy, eggs and fresh fish come out at 1, which is the correct message: the food itself carries negligible oxidant load. Give the main contributors in `why`, for example "Heme 0.8-1.3 mg (H +2); broiled red meat (C +2) = 5".

**Calibration examples (single foods):**

| Food (site serving) | Components | Score |
|---|---|---|
| Broccoli, raw | none | 1 |
| White potato, boiled | none | 1 |
| Whole-wheat bread, 1 slice | none (soft bread) | 1 |
| Coffee, brewed, 1 cup | acrylamide ≤ 4 µg (B 0) | 1 |
| Butter, 1 tbsp | none (ELISA AGE value not used) | 1 |
| Eggs, 2 hard-boiled | none | 1 |
| Salmon, 3 oz baked | none (omega-3 not penalised) | 1 |
| Chicken breast, 3 oz roasted | C +1 | 2 |
| Peanuts dry-roasted / peanut butter | B +1 (AGE-dense roasted product) | 2 |
| Parmesan, 1 oz grated | O +1 (grated aged cheese ≥ 20 g); a 1 oz piece of hard cheese scores O 0 | 2 |
| Ghee, 1 tbsp | O +1 | 2 |
| Swordfish, 3 oz cooked | M +1 (+ C by method) | 2-3 |
| Pork loin, 3 oz broiled | H +1, C +2 | 4 |
| Deli ham, 2 oz (cold) | P +3 | 4 |
| Beef liver, 3 oz pan-fried | H +2, C +1 | 4 |
| Lamb, 3 oz roasted | H +2, C +1 | 4 |
| Beef sirloin, 3 oz broiled | H +2, C +2 | 5 |
| Ground beef patty, 3 oz pan-fried well done | H +2, C +2 | 5 |
| Red wine, 150 mL | A +4 | 5 |
| Bacon, 3 slices pan-fried (24 g) | P +2, C +3 | 6 |

Spread: plant foods, dairy, eggs and fresh fish at 1-2; poultry 2-3; red meat 3-5; processed meat 4-7; alcoholic drinks 5. That matches the order of human evidence.

## Recipes (Recipes page)

1. Identify every animal component, its grams per serving and its cooking method; every starchy or nut component that is browned; the frying medium; the total fat per serving; alcohol not cooked off; and any high-mercury fish.
2. Score C on the harshest meat, poultry or fish method in the dish. If a separate component is harsher (seared steak on a stew), use that component. Gently softening onions or garlic in oil as a first step adds nothing.
3. Score B on the browned starch or nut component if it is a meaningful part of the serving (at least about 30 g of the browned product, or a crust or topping that covers the dish). A sprinkle of toasted breadcrumbs or a few roasted nuts as garnish scores 0.
4. Score H from grams of red or organ meat per serving; score P from grams of processed meat; never both for the same meat.
5. Score O, F, A, M, then subtract X.
6. Write `why` with the arithmetic: "Beef 113 g ≈ 1.1 mg heme (H +2); stir-fried (C +1); broccoli 90 g in dish (X −1) = 1 + 2 + 1 − 1 = 3".

**Calibration examples (site recipes, per serving as written):**

| Recipe | Components | Score |
|---|---|---|
| Lentil soup with kale; minestrone; dal; chickpea curry | none | 1 |
| Shakshuka (eggs poached in tomato) | none | 1 |
| Sheet-pan salmon with garlicky kale (roasted 205 °C; salt-free spice rub ≈1 tsp per serving baked onto the fish; kale 57 g per serving, below the 80 g produce threshold; fish fat not counted) | C +1, X −1 (spice rub) | 1 |
| Puttanesca poached fish | none | 1 |
| Tandoori chicken (≥ 6 h yogurt-spice-lemon marinade; roasted 240 °C, broiled to a few charred spots) | C +2, −1 for marinade | 2 |
| Beef and broccoli stir-fry (120 g raw beef ≈ 90 g cooked per serving; broccoli ≈ 110 g; 15 mL Shaoxing wine shared by 3 servings ≈ 0.6 g alcohol) | H +2, C +1, X −1 (broccoli) | 3 |
| Roasted broccoli with garlic, lemon and Parmesan (10 g Parmesan shared by 4 servings) | Parmesan below 20 g (O 0); roast vegetables score nothing | 1 |
| Sardine pasta with breadcrumbs (30-50 g crumbs toasted golden, shared by 4) | crumbs as garnish (B 0); oil ≈ 13 g, sardine fat not counted (F 0) | 1 |
| Kimchi stew with tuna and tofu | none (light tuna is not a high-mercury species) | 1 |
| Puttanesca poached fish (120 mL white wine simmered about 20 min) | alcohol cooked off (A 0); C 0 (poached) | 1 |
| Hypothetical: grilled ribeye (150 g cooked, about 35 g fat) served with a glass of red wine as part of the recipe | H +2, C +2, F +1, A +4 | 10 |

Under the old cooking category, healthy braised and stewed dishes scored 10/10 (best). They now score 1/10 (lowest load), so the ordering is preserved.

## How this maps onto the retired cooking category

| Old cooking score | Typical new C + B + O points |
|---|---|
| 10 (raw, steam, poach, braise, bake ≤ 180 °C) | 0 |
| 8 (sauté or stir-fry; roast veg ≤ 220 °C; bake fish 200-220 °C) | 0-1 |
| 6 (sear or roast fish or poultry with browning; grill vegetables) | 1 |
| 4 (grill, broil or pan-fry red meat or poultry well done) | 2, or 1 with a marinade |
| 3 (deep-fry in fresh oil) | C 2 or B 1-2, plus O 1 |
| 2 (charred meat; processed meat at high heat; starch toasted dark) | 3 (C) or B 1-2 (dark starch) |
| −1 adjustments (browned starch; PUFA oil at high heat) | B +1; O +1 |

## Components given deliberately small weight, and why

- **Dietary AGEs.** No standalone points; they count only through the B flag and the C cooking bands. The best double-blind trial and the largest cohorts are null, a formal food-safety review found no convincing evidence of harm, and the ELISA database would wrongly penalise butter, oils and avocado.
- **Acrylamide.** Human cancer cohorts are mostly null. It gets at most 2 points and only via measured or estimated µg per serving.
- **Oxidised fats.** The evidence is single-meal biomarker studies with an artefact-prone marker, and a null endothelial trial with used frying oil. It is capped at 2 and limited to clear hot spots.
- **Metals.** Per-serving oxidative effects at dietary levels are not shown. There is 1 point only for "avoid" high-mercury fish; everything else is a watch-out.
- **Mitigation.** Benefits come from single meals in 10-24 people, so the deduction is capped at −2 and can't cancel alcohol or mercury.

## Decisions (owner's request, 2026-10-11)

0. **When a worked example and the rule text disagree, the rule text wins.** The sheet-pan salmon example was corrected from 2 to 1, because its spice rub qualifies for mitigation.


1. **Heme scores only for mammalian and organ meat.** Poultry and fish heme don't score, following the gut-marker and cancer data.
2. **Alcohol keeps its full weight** (up to +4), because it has the strongest per-serving human evidence. A glass of wine can therefore score as high as broiled steak.
3. **The score is shown as is (lower is better).** The owner asked to see how much oxidative stress the food itself brings, so it isn't inverted.
