# Brief for recipe agents

**Redox Compass** (`C:\GIT\redox`) is an evidence-graded site about oxidative stress, sperm DNA fragmentation and egg quality. It is getting a Recipes page. **Don't edit any existing repo file.** Write only the output file named in your task.

## Read first
- `research/RECIPE-RUBRIC.md` — the scoring system. Follow it exactly.
- Bracketed factor ids in the rubric are pages on the site. In `why` text you may cite factors as `[factor-id]`, using only ids that appear in the rubric (or in `assets/data.json` → `factors[].id`).

## Finding recipes (finder agents)
- **Don't invent recipes.** Find an existing, well-rated recipe online for each dish in your list, and evaluate it as written.
- **Good sources**, roughly in order:
  - recipes with a visible rating of **≥ 4.5 stars from ≥ 100 ratings**, e.g. Allrecipes, BBC Good Food, EatingWell, Simply Recipes, RecipeTin Eats, Cookie and Kate, Minimalist Baker, The Mediterranean Dish, Love and Lemons, Budget Bytes, Downshiftology, Once Upon a Chef, Food Network, Taste of Home, NYT Cooking
  - when a dish has no well-rated version, a test-kitchen recipe (Serious Eats, America's Test Kitchen, Bon Appétit, Food52), noted as such
- **Confirm the rating and the count on the page itself** with WebFetch. Many sites embed them in JSON-LD (`aggregateRating`). If a site blocks fetching, try another well-rated version of the same dish. Never guess a rating.
- **Keep the original's ingredients and amounts.** You may:
  - convert units (add grams or mL in parentheses)
  - drop pure garnish
  - write "optional" where the original does
- **Rewrite the steps in your own plain words** (copyright): short, imperative, numbered, usually 4–8 steps. Each step is one sentence or two. Don't copy sentences, headnotes or tips verbatim. Ingredient lists are facts and may match.
- Keep temperatures (°F and °C), times and doneness cues: chicken 165 °F / 74 °C, fish 145 °F / 63 °C or flakes easily, ground meat 160 °F / 71 °C.
- **Add a boost** wherever a small change would raise a score, as a separate suggestion (with the factor id); never edit it into the recipe. Examples:
  - "stir ½ tsp mustard powder into the broccoli after roasting [mustard-seed-myrosinase]"
  - "use whole-wheat pasta"
  - "marinate the steak 1 h first [marinating-meat]"

## Scoring (all agents)
1. List each ingredient's amount per serving.
2. Estimate the per-serving nutrients in `nutrients` from USDA FoodData Central values. Common references:
   - salmon (Atlantic, farmed) ~2.2 g EPA+DHA per 100 g cooked
   - sardines (canned, in oil) ~1.0 g
   - mackerel (Atlantic) ~1.2 g
   - rainbow trout ~1.0 g
   - mussels ~0.8 g
   - cod ~0.2 g
   - shrimp ~0.3 g
   - canned light tuna ~0.25 g
   - egg: ~147 mg choline, ~0.5 µg B12, 15 µg Se, 22 µg folate
   - cooked lentils (1 cup / 198 g): ~358 µg folate (181 µg per 100 g), 6.6 mg iron, 15.6 g fibre, 2.5 mg zinc
   - cooked-from-dry chickpeas (1 cup / 164 g): ~280 µg folate; canned, drained: ~105 µg per cup (check FDC), 4.7 mg iron, 12.5 g fibre, 2.5 mg zinc
   - cooked spinach (½ cup): ~130 µg folate
   - raw broccoli (1 cup / 91 g): ~57 µg folate, 81 mg vitamin C, 2.4 g fibre
   - walnuts (30 g): ~2.6 g ALA (not EPA/DHA), 2 g fibre
   - beef sirloin (100 g cooked): ~6 mg zinc, ~2.5 µg B12, ~30 µg Se
   - oysters (100 g): ~40–90 mg zinc
   - Brazil nut (one): ~70–90 µg Se
3. Apply each rubric rule and record the points in `why`. Example: "≈2.5 veg servings (+3); EVOO 1 tbsp/serving (+1); herbs (+1) = 5 [extra-virgin-olive-oil]". Show the arithmetic so a checker can redo it.
4. Scores are integers 1–10.
5. Complexity follows the rubric table.
6. Add pregnancy watch-outs from the rubric list, plus common allergens (nuts, fish, shellfish, dairy, egg, gluten, soy, sesame).

## Output shape
One JSON file (the path is in your task): `{"recipes": [Recipe, ...]}` where Recipe is:

```json
{
  "id": "kebab-case-id",
  "title": "Short dish name",
  "summary": "One plain sentence: what it is and why it scores where it does.",
  "source": {"title": "Original recipe title", "author": "Name or site test kitchen", "site": "Site name",
             "url": "https://...", "rating": 4.8, "rating_count": 2345, "checked": "2026-10-11",
             "note": "optional, e.g. 'test-kitchen recipe, site has no ratings'"},
  "changes": "What differs from the original (unit conversions, garnish dropped, steps condensed), or 'None besides rewording.'",
  "complexity": "easy | medium | involved",
  "active_min": 15, "total_min": 40, "servings": 4,
  "meal": "breakfast | lunch | dinner | side | snack | dessert",
  "tags": ["vegetarian", "vegan", "pescatarian", "gluten-free", "dairy-free", "make-ahead", "budget"],
  "nutrients": {"kcal": 0, "fiber_g": 0, "added_sugar_g": 0, "sat_fat_g": 0, "epa_dha_mg": 0, "folate_ug_dfe": 0,
                "choline_mg": 0, "iron_mg": 0, "zinc_mg": 0, "selenium_ug": 0, "b12_ug": 0, "vit_c_mg": 0,
                "fruit_veg_servings": 0},
  "scores": {
    "plants":   {"score": 0, "why": "..."},
    "nrf2":     {"score": 0, "why": "..."},
    "fats":     {"score": 0, "why": "..."},
    "glycemic": {"score": 0, "why": "..."},
    "cooking":  {"score": 0, "why": "..."},
    "sperm":    {"score": 0, "why": "..."},
    "egg":      {"score": 0, "why": "..."}
  },
  "ingredients": [{"group": null, "items": ["1 cup (90 g) rolled oats", "..."]},
                  {"group": "Dressing", "items": ["..."]}],
  "steps": ["Heat the oven to 425 °F (220 °C).", "..."],
  "boosts": ["... [factor-id]"],
  "watch_outs": ["Pregnancy: ...", "Allergens: fish, dairy"]
}
```

## Before you finish
- Validate the file: `python -c "import json;json.load(open(r'<file>',encoding='utf-8'))"`.
- Re-read each recipe once, as a cook and as a checker:
  - do the amounts make sense for the servings?
  - are times and temperatures right?
  - does each `why` add up to the score?
  - do `nutrients` match the ingredients?
- Use the Write tool for big files: Bash commands over about 8 KB are silently truncated. Don't use PowerShell Get-Content/Set-Content, which corrupts UTF-8.
- Report back briefly: recipes found (title, site, rating/count), any dish you swapped and why, and anything you were unsure of.

## Checking recipes (checker agents)
You are an independent second pair of eyes. For **every** recipe in the file you're given:

1. **Source.** WebFetch the `source.url`. Confirm:
   - the recipe exists at that address, with the title and author shown
   - the rating and rating count match the page (JSON-LD `aggregateRating` is usually there); correct them if not
   - the ingredient amounts match the original; list any differences and fix them back to the original unless they are unit conversions
   - the method, temperatures and times match the original
   If the page can't be reached, try once more later. If it still fails, say so; don't invent details.
2. **Originality.** The steps must be our own wording. Rewrite any step that copies a run of about 10 or more words from the original.
3. **Cook check.** Read it as someone cooking it:
   - quantities fit the serving count
   - nothing is missing between ingredients and steps (every ingredient is used, and every step's ingredient is listed)
   - temperatures and times are realistic
   - safe internal temperatures are stated for meat, poultry, fish and eggs
   - the steps are short and clear
   Fix anything wrong.
4. **Re-score from scratch.**
   - Estimate the per-serving nutrients yourself from USDA FoodData Central, *before* looking at the finder's `nutrients` and `scores`.
   - Apply every rubric rule to get your own seven scores, then compare.
   - Where you differ, decide which is right under the rubric and keep that. Rewrite `why` so the arithmetic shows the final score.
   - Fix `nutrients` too.
5. **Complexity, tags and watch-outs.**
   - check complexity against the rubric table
   - check diet tags (vegan means no honey, dairy or egg; gluten-free means no wheat, barley or rye, and oats only if labelled)
   - check pregnancy and allergen watch-outs
6. Add `"check": {"date": "2026-10-11", "summary": "One or two sentences on what you verified and changed (e.g. 'Rating confirmed 4.8/1,203. Fats 7→6: EVOO is 2 tsp/serving, not 1 tbsp.')"}` to each recipe.

Write the corrected file to the output path in your task, in the same shape plus `check`. Also write a short markdown report next to it: one line per recipe covering source OK, rating and count, score changes as from→to with the reason, and other fixes. Report back the main corrections you made.
