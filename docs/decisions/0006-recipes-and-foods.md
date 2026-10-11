# 0006: Recipes and single-food ratings

Date: 2026-10-11

The owner asked for:

1. About 30 recipes with a complexity filter, plus a 1–10 bar graph per category for oxidative stress and fertility at the top of each, then the ingredients, then the steps. Each recipe was to be borrowed from a well-rated online recipe (not invented) and double-checked for both its rating and its quality.
2. A very long list of single foods (chickpeas, sweet potatoes and so on) rated in the same categories.
3. More dinners rich in polyphenols and plant hormetic compounds.

## What was built

- **`#/recipes` and `#/recipe/<id>`** (`data/recipes.json`):
  - Each recipe page puts the bar graph first; tapping a bar shows its arithmetic. Ingredients and steps follow, then "Make it score higher" boosts, watch-outs, estimated nutrients, the source credit and a second-check note.
  - The list page has filters for complexity, meal and diet, and can be sorted by any category or by polyphenols plus hormetic compounds combined.
  - Factor pages list the recipes that feature them.
- **`#/foods` and `#/food/<id>`** (`data/foods.json`):
  - The list page is a heat table of about 220 foods in 12 groups, searchable and sortable by any column.
  - Each food page shows the bar graph and its reasoning, the best way to eat the food, watch-outs, our recipes that use it, nutrients and sources.
- **Scoring rules:** in `research/RECIPE-RUBRIC.md` and `research/FOOD-RUBRIC.md`. Agent briefs are in `research/RECIPE-BRIEF.md` and `research/FOOD-BRIEF.md`.
- **Build checks:** `tools/build.py` checks that scores are integers from 1 to 10 (or null for foods where a category doesn't apply), that every category is present, that each `[factor-id]` in the reasoning text exists, and that every recipe has a source URL.

## Decisions

- **Scores measure content, not outcomes.** Each point is tied to a factor on the site, such as EPA+DHA thresholds, crucifer preparation, fibre bands or folate bands. The page says plainly that no dish was tested in a trial.
- **Score the recipe as written.** Improvements go into "boosts", never into the recipe, because the owner asked us to evaluate real recipes, not invent new ones.
- **Rewritten steps, credited source.** Ingredient lists are facts. Steps were rewritten in plain words, and checkers rewrote any step that copied a run of about 10 or more words.
- **Two agents per item.** A finder sourced and scored each item. An independent checker re-fetched the source, re-derived the nutrients, re-scored from scratch and recorded the changes, and each recipe and food shows the checker's summary. Preliminary items were published with a "check pending" marker at the owner's request.
- **Rules settled during the run**, applied to every item and written into the rubric's "Scoring conventions":
  - halved points round down, and thresholds are strict
  - only raw crucifers, or crucifers steamed for 4 minutes or less, count as "myrosinase intact"
  - softening aromatics first doesn't lower a dish's cooking score
  - legumes count as at most one produce serving
  - natural folate only, ignoring fortification
  - "serves 4 to 6" is scored at 4
  - corn tortillas count as whole grain
  - produce alone is only one profertility component
- **Food-rubric edge cases.**
  - The fat score is null only when a food has under 3 g fat *and* under 100 mg EPA+DHA, so lean fish rich in omega-3 are scored.
  - Blood sugar is null for foods whose only carbohydrate is lactose or glycogen (dairy, shellfish, liver), because a low score there would mislead.
  - FDA "choices to avoid" fish lose 3 points under sperm, as well as under egg.
- **The "Nrf2" category was renamed "Hormetic compounds (Nrf2)"** to match the owner's wording. Its id stays `nrf2`.
- **Data access.**
  - Recipe sites and NIH ODS often block scripted fetches. Agents read ratings from each page's JSON-LD (via curl with browser headers, or the built-in browser), and the FDC data came from its keyless portal search (`fdc_portal.py` in the session scratchpad).
  - First-pass vegetable nutrients written from memory were all replaced with FDC values by the checker. Kale was badly off; most others were within 10%.
  - Polyphenols use Phenol-Explorer chromatography totals, not Folin, which inflates legumes and vitamin-C-rich fruit. Where proanthocyanidins or lignans are missing from the chromatography sum, the USDA proanthocyanidin database and published HPLC studies fill the gap; each case is noted in the reasoning.
- **Accepted weaker sources.**
  - Two recipes were replaced because they missed the rating bar (sardine pasta and mussels, now from NYT Cooking; their pages note that the site may need a subscription).
  - The replacement mussel recipe scores far lower for fertility than the one it replaced. We kept it anyway, because the rating bar comes first.

## Rejected alternatives

- **Inventing or "optimising" recipes:** the owner asked for existing recipes.
- **Applying one rubric to both dishes and single foods:** cooking method belongs to a dish, and per-dish produce counting doesn't fit a single ingredient. Foods instead use a polyphenol-content scale and an anchored Nrf2 table.
- **A composite health score for foods:** the separate bars are more honest, because a low score in one category only means the food contributes little there.
