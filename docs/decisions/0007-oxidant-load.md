# 0007: Oxidant load: oxidative stress from the food itself

Date: 2026-11-23

The owner asked that the analysis include how much oxidative stress comes from the food itself, as well as the things that help prevent it.

## What was built

- **Deep dive:** `research/deep-food-oxidants.md` (117 PubMed-verified references). It covers dietary AGEs (the ELISA and LC-MS/MS databases disagree), dietary lipid oxidation products and oxysterols, heme iron, processed meat and nitrosamines, HCA/PAH/acrylamide, post-meal fat load, alcohol, metals, and same-meal mitigation by polyphenols.
- **New diet factors:**
  - `dietary-ages`
  - `dietary-lipid-oxidation-products`
  - `heme-iron`
  - `postprandial-fat-load`
  - `meal-polyphenol-pairing`
  - a general-health entry for `unprocessed-red-meat`
- **Scoring rules:** `research/LOAD-RUBRIC.md`, an additive 1–10 score per serving (higher is worse):
  - alcohol not cooked off: up to +4
  - processed meat: +3
  - meat cooking method: +3
  - heme from mammalian or organ meat: +2
  - browned starch or roasted nut products: +2
  - oxidised fats and oxysterol hot spots: +2
  - fat per serving: +2
  - high-mercury fish: +1
  - herbs, spices or produce with the meat or fatty component: up to −2, never offsetting alcohol or mercury
- **Scores:** every food and recipe has a `load` score in `data/load/foods.json` and `data/load/recipes.json`. `tools/build.py` merges them at build time.
- **Display:**
  - The site shows load as a red bar labelled "lower is better", above the protective categories, and leaves it out of the protective average.
  - Sorting by load lists the lowest first, with ties broken by the protective average.
  - On recipes it replaces the old "Low-oxidant cooking" category, which `RECIPE-RUBRIC.md` keeps for the record.

## Decisions

- **Weight by human evidence.**
  - Alcohol and processed meat carry the most points.
  - Dietary AGEs get no points of their own, because the best double-blind trial and the large cohorts are null and the two databases rank foods differently. They count only through the browning and cooking points.
  - Rice arsenic, cocoa metals and lead in spices stay as watch-outs, not points.
- **Heme scores only for mammalian and organ meat.** White meat did not raise faecal N-nitroso compounds.
- **Fish fat is not counted under fat load.** Cooked fish and fish oil did not raise F2-isoprostanes.
- **Alcohol keeps its full weight.** A glass of wine (5) can score the same as broiled steak (5).
- **The score is shown as is, not inverted.** It answers the owner's question directly.
- **When a worked example contradicts the rule text, the rule text wins.** Two examples were corrected: sheet-pan salmon to 1, and Parmesan, which scores 2 only when grated.

## Results

| | Score 1 | Score 2 | Score 3 | Score 4 | Score 5 | Score 6 |
|---|---|---|---|---|---|---|
| Foods | 199 | 13 | 1 | 4 | 3 | 1 |
| Recipes | 42 | 5 | 3 | | | |

- **Foods:**
  - 2: roasted nuts and seeds, peanut butter, tahini, canned ripe olives, roast chicken, ghee, king mackerel, swordfish
  - 3: chicken liver
  - 4: lamb, pork loin, deli ham, beef liver
  - 5: broiled sirloin, ground beef, red wine
  - 6: bacon
- **Recipes:**
  - 2: sweet potato and black bean tacos, kale salad with roasted chickpeas, fish tacos, mackerel, tandoori
  - 3: beef and broccoli, mussel linguine (wine boiled only briefly), Greek chicken thighs

## Process note

The first scoring run (scorer plus independent checker per batch) was finished but lost: the session scratchpad was cleared before its results were merged. It was redone with every checker ruling applied. This time the outputs and generator scripts are saved in `data/load/`, inside the repo. Future agent outputs must be written to the repo, not to temp folders.
