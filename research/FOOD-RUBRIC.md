# Single-food scoring rubric

The Foods page rates individual ingredients per **typical serving**, using six of the recipe categories (see `RECIPE-RUBRIC.md`). Cooking method belongs to a dish, not an ingredient, so each food gets a "best way to eat it" note instead of a cooking score.

A score is how much of each evidence-backed component one serving delivers. It does not claim that the food was tested in a trial. When a category doesn't apply (fat quality for spinach, blood sugar for salmon), the score is `null` and the page shows a dash. Null means "not a meaningful source", not "bad".

## Serving sizes
Use the FDA reference amount or a common household measure, and state it with grams:

| Food group | Typical serving |
|---|---|
| Vegetables | 1 cup raw leafy (≈30–70 g) or ½–1 cup cooked or chopped (≈80–150 g) |
| Fruit | 1 medium piece or ¾–1 cup (≈80–150 g) |
| Dried fruit | ¼ cup (≈40 g) |
| Legumes and grains | ½–1 cup cooked (≈90–180 g); bread 1 slice; oats ½ cup dry (40 g) |
| Nuts and seeds | 1 oz (28 g); flax and chia 1–2 tbsp; Brazil nut 1 nut (5 g) |
| Fish, meat and poultry | 3 oz cooked (85 g) |
| Eggs | 2 large |
| Dairy | 1 cup milk or yogurt; 1 oz (28 g) cheese |
| Herbs and spices | 1 tsp dried or 1 tbsp fresh |
| Oils | 1 tbsp |
| Drinks | 1 cup (240 mL) |

## Data sources (in order)
1. **USDA FoodData Central** (fdc.nal.usda.gov): nutrients. NIH Office of Dietary Supplements fact sheets (ods.od.nih.gov) give per-serving tables for folate, choline, zinc, selenium, iron, B12, iodine, vitamin C and omega-3, drawn from FDC. These are the easiest to fetch.
2. **Phenol-Explorer** (phenol-explorer.eu; Neveu et al. 2010, Database 2010:bap024): total polyphenols, chromatography values preferred over Folin. Folin overstates legumes and other foods because the assay reacts with non-phenolic reducing compounds.
3. **Glucosinolate and isothiocyanate contents** (crucifers, condiments): peer-reviewed papers or the site's Nrf2 deep dive, `research/deep-sulforaphane.md`.
4. **Mercury:** FDA/EPA "Advice about Eating Fish" categories (Best choices / Good choices / Choices to avoid).

## 1. Plant polyphenols and pigments (`plants`)
Factors: [high-fruit-vegetable-intake] [blueberries] [berries-other] [cocoa-flavanols] [herbs-spices] [extra-virgin-olive-oil] [leafy-greens] [tomatoes-lycopene] [green-tea] [coffee] [eggplant] [carrots-carotenoids] [pomegranate] [citrus-hesperidin]

Start from total polyphenols per serving (Phenol-Explorer, chromatography where possible):

| Polyphenols per serving | Points |
|---|---|
| ≥ 300 mg | 9 |
| 150–299 mg | 7 |
| 75–149 mg | 5 |
| 25–74 mg | 3 |
| 5–24 mg | 2 |
| < 5 mg | 1 |

Then add:

- **+1 for pigments or nitrate,** any of:
  - lycopene ≥ 5 mg
  - β-carotene ≥ 3 mg (≈ 5000 µg)
  - lutein + zeaxanthin ≥ 5 mg
  - a dark leafy green rich in nitrate (spinach, rocket/arugula, chard, beet greens, beetroot)
- **+1 for a counted fruit or vegetable serving:** a whole fruit or vegetable serving ≥ 80 g. This doesn't apply to juice, potatoes or legumes.

**Animal foods, refined oils and sugars** score 1. Exception: EVOO (≈ 5 mg hydroxytyrosol and derivatives per 20 g in high-phenolic oil) scores by its phenolic content.

Floor 1, cap 10. If no Phenol-Explorer value exists, estimate from a close relative and say so in `why`.

## 2. Nrf2 and sulfur compounds (`nrf2`)
Factors: [broccoli-sprouts] [broccoli-mature] [cruciferous-other] [mustard-seed-myrosinase] [watercress-peitc] [wasabi-horseradish-itc] [garlic-alliums] [turmeric-curcumin] [indole-3-carbinol-dim]

This is an anchored scale per serving, eaten in the best way, with the preparation stated in `best_prep`.

| Score | Foods |
|---|---|
| 10 | Broccoli sprouts (10–100× the glucoraphanin of mature broccoli) |
| 9 | Watercress (PEITC); real wasabi, horseradish, brown or black mustard seed or powder (as a myrosinase source and isothiocyanate) |
| 8 | Raw or lightly steamed broccoli; mustard greens; rocket/arugula; garden cress |
| 7 | Brussels sprouts, kale, collards, red and green cabbage, radish, daikon, turnip greens (raw or lightly cooked) |
| 6 | Cauliflower, bok choy, kohlrabi, turnip, rutabaga |
| 5 | Garlic (crushed, rested 10 min) |
| 4 | Onion, shallot, leek, chives; turmeric, scored modestly because curcumin is poorly absorbed (see [curcumin-supplements]) |
| 2–3 | Other foods with documented Nrf2-active compounds at food doses: coffee, green tea, ginger, rosemary, cocoa, EVOO. Use 3 only where human data exist. |
| 1 | Everything else |

If a crucifer is usually eaten fully cooked (for example boiled cabbage), keep its anchor and explain in `best_prep` how to keep myrosinase active: raw, steamed ≤ 4 min, or mustard powder added after cooking.

## 3. Fat quality (`fats`)
Factors: [omega3-fish] [extra-virgin-olive-oil] [walnuts-nuts] [flaxseed-lignans] [seed-oils-linoleic-acid] [cooking-oil-choice] [trans-fats] [processed-red-meat] [fish-oil-oxidation]

- **`null`** when the serving has < 3 g fat, < 100 mg EPA+DHA and no penalty applies. Lean fish rich in omega-3 (albacore, anchovies) are scored.
- **Base:** 3.
- **EPA + DHA per serving:**

  | Per serving | Points |
  |---|---|
  | ≥ 1500 mg | +7 |
  | 1000–1499 mg | +6 |
  | 500–999 mg | +5 |
  | 250–499 mg | +3 |
  | 100–249 mg | +1 |

- **Plant fats** (score the food's main fat):
  - ALA ≥ 1.5 g (walnuts, flax, chia, hemp): +4
  - mostly monounsaturated (EVOO, avocado, almonds, hazelnuts, macadamia, pecans, olives): +3; EVOO +4 for its phenolics
  - mixed nut or seed oil profile (peanuts, cashews, pumpkin, sunflower, sesame, pistachio): +2
  - refined PUFA seed oil (sunflower, corn, soybean, grapeseed): +1, with a [cooking-oil-choice] note that it is fine cold or for gentle cooking and poor for repeated high-heat frying; canola +2
- **Penalties:**
  - saturated fat ≥ 5 g per serving: −2 (butter, coconut oil, fatty red meat, full-fat cheese)
  - processed meat: −3
  - trans fat ≥ 0.5 g per serving (shortening, some margarines): −4

Floor 1, cap 10.

## 4. Blood sugar and fibre (`glycemic`)
Factors: [dietary-fiber-microbiome] [legumes] [whole-grains] [refined-sugar-high-glycemic] [glycemic-control]

- **`null`** when the serving has < 3 g carbohydrate, or when its only carbohydrate is lactose or glycogen: meat, fish, shellfish, liver, eggs, oils, plain unsweetened dairy, most herbs and spices. These foods don't drive post-meal glucose spikes, so a low score would mislead.
- **Base:** 0.
- **Fibre per serving:**

  | Per serving | Points |
  |---|---|
  | ≥ 8 g | +5 |
  | 5–7.9 g | +4 |
  | 3–4.9 g | +3 |
  | 1.5–2.9 g | +2 |
  | 0.5–1.4 g | +1 |

- **Carbohydrate type:**
  - legume, intact or whole grain, non-starchy vegetable, nut or seed: +3
  - whole fruit, starchy vegetable, wholemeal flour product: +2
  - refined grain: 0
  - dried fruit: −1
  - juice, sugar, syrup or honey: −3
- **Glycemic load per serving:** GL ≤ 10 = +2; 11–19 = +1; ≥ 20 = 0. Use the International GI Tables (Atkinson et al. 2008/2021) where possible.

Floor 1, cap 10.

## 5. Sperm support (`sperm`)
Factors: [walnuts-nuts] [omega3-fish] [tomatoes-lycopene] [zinc-status] [selenium-supplement] [high-fruit-vegetable-intake] [processed-meat] [refined-sugar-high-glycemic] [alcohol] [coq10] [l-carnitine]

- **Base:** 1.
- **Omega-3 and nuts:**
  - EPA + DHA ≥ 500 mg = +3; 250–499 mg = +2
  - walnuts or mixed tree nuts at 1 oz = +2 (the nut RCTs used 60–75 g/day)
- **Lycopene:** ≥ 10 mg = +3; 4–9.9 mg = +2; 1–3.9 mg = +1.
- **Zinc:** ≥ 5.5 mg = +3; 3–5.4 mg = +2; 1.5–2.9 mg = +1.
- **Selenium:** ≥ 50 µg = +2; 20–49 µg = +1. Brazil nuts top out here; see the [selenium-supplement] U-curve and add a watch-out against eating many daily.
- **Folate:** ≥ 100 µg DFE = +1.
- **Vitamin C:** ≥ 50 mg = +1.
- **Penalties:**
  - FDA "choices to avoid" fish (methylmercury; see [mercury-fish] [heavy-metals]): −3
  - processed meat: −4
  - sugar-sweetened drink or ≥ 25 g added sugar: −2
  - alcohol: −3

Floor 1, cap 10.

## 6. Egg and pregnancy support (`egg`)
Factors: [folic-acid] [vitamin-b12-folate-status] [iron-egg] [iron-deficiency] [iodine-status] [omega3-fish] [mercury-fish] [profertility-diet] [soy] [alcohol] [caffeine-fertility]

- **Base:** 1.
- **Folate (natural food folate; ignore fortification):** ≥ 200 µg DFE = +3; 100–199 µg = +2; 50–99 µg = +1.
- **DHA from a low-mercury fish:** EPA + DHA ≥ 500 mg = +2; 250–499 mg = +1.
- **Iron:** ≥ 3 mg = +1 (heme iron or plant iron).
- **Choline:** ≥ 150 mg = +2; 75–149 mg = +1.
- **Iodine:** ≥ 50 µg = +1 (seaweed, cod, dairy, eggs, shrimp). Seaweed with > 1100 µg per serving gets a watch-out instead, because that is above the tolerable upper intake level.
- **B12:** ≥ 1 µg = +1.
- **Profertility food type** (whole grain, soy food, seafood, low-fat dairy): +1.
- **Penalties:**
  - FDA "choices to avoid" fish: −4
  - FDA "good choices" (eat once a week): −1
  - alcohol: −4
  - liver (vitamin A above the tolerable upper intake level per serving): −2
  - caffeine > 100 mg per serving: −1

Floor 1, cap 10.

## Watch-outs (not scored)
Flag these:
- pregnancy food safety (raw sprouts, unpasteurised dairy, high-mercury fish, liver, raw shellfish, caffeine, alcohol)
- known contaminant issues covered on the site: [arsenic-rice] [lead-spices] [cocoa-heavy-metals] [mercury-fish] [aflatoxin-mycotoxins]
- drug interactions: grapefruit with many medicines; vitamin K greens with warfarin
- oxalate for kidney-stone formers
- common allergens

## Conventions
- **Strict thresholds:** 0.97 doesn't meet a threshold of 1.
- **Raw vs cooked:** use the form most people eat, say which one in `serving`, and put any better form in `best_prep`.
- Every `why` shows the arithmetic: "Polyphenols ≈ 180 mg/serving (7); lycopene 0 (0); counted veg serving (+1) = 8".
