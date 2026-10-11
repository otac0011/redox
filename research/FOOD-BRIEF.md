# Brief for food-rating agents

**Redox Compass** (`C:\GIT\redox`) is getting a Foods page that rates single ingredients. **Do not edit any existing repo file.** Write only the output file named in your task.

## Read first
- `research/FOOD-RUBRIC.md`. Follow it exactly.
- Factor ids that you cite in `why` or `notes` as `[factor-id]` must exist in `assets/data.json` (`factors[].id`). The rubric ids all exist.

## Data rules
- **Nutrients come from USDA FoodData Central.** NIH ODS fact-sheet tables are FDC values per serving and are easy to fetch:
  - `https://ods.od.nih.gov/factsheets/Folate-HealthProfessional/`, and the same pattern for Choline, Zinc, Selenium, Iron, VitaminB12, Iodine, VitaminC and Omega3FattyAcids.
- **Polyphenols come from Phenol-Explorer.** Use `http://phenol-explorer.eu/contents/total?food_classification_id=...`, or search the site for the food's "Polyphenols, total" page. Use chromatography totals where available and say which value you used.
- **Fish mercury categories come from the FDA/EPA fish advice chart:** https://www.fda.gov/food/consumers/advice-about-eating-fish
- **Fetching:**
  - WebFetch is often blocked. Fall back to `curl -sL -A "Mozilla/5.0"` via Bash, and pause about 0.5 s between requests.
  - The FDC API is allowed with `api_key=DEMO_KEY`, but it is limited to roughly 30 requests an hour, so use it sparingly. Example: `https://api.nal.usda.gov/fdc/v1/foods/search?query=chickpeas%20cooked&dataType=Foundation,SR%20Legacy&pageSize=3&api_key=DEMO_KEY`
  - Don't download bulk dataset files.
- **When you can't fetch a value,** use a careful estimate from standard FDC values that you know. Mark it in `why` with "≈", and don't invent precision. Every food lists the `sources` it actually used (label + URL).
- No health blogs or vendor pages.

## Output
Write `{"foods": [Food, ...]}` to the path in your task, where each Food is:

```json
{
  "id": "chickpeas",
  "name": "Chickpeas (garbanzo beans)",
  "group": "legumes",
  "serving": "1 cup cooked from dry (164 g)",
  "highlight": "One plain sentence: what it's best for and the main caveat.",
  "nutrients": {"kcal": 269, "fiber_g": 12.5, "carb_g": 45, "sat_fat_g": 0.4, "epa_dha_mg": 0, "ala_g": 0.1,
                "folate_ug_dfe": 282, "choline_mg": 70, "iron_mg": 4.7, "zinc_mg": 2.5, "selenium_ug": 6,
                "b12_ug": 0, "vit_c_mg": 2, "iodine_ug": null, "polyphenols_mg": 20, "lycopene_mg": 0, "gl": 13},
  "scores": {
    "plants":   {"score": 3, "why": "..."},
    "nrf2":     {"score": 1, "why": "..."},
    "fats":     {"score": null, "why": "Under 3 g fat per serving."},
    "glycemic": {"score": 10, "why": "..."},
    "sperm":    {"score": 3, "why": "..."},
    "egg":      {"score": 6, "why": "..."}
  },
  "best_prep": "How to eat it to get the most (cooking, pairing, e.g. add lemon for iron; mustard powder for cooked crucifers [mustard-seed-myrosinase]).",
  "watch_outs": ["..."],
  "tags": ["vegan", "budget", "high-fibre"],
  "sources": [{"label": "NIH ODS Folate fact sheet (FDC values)", "url": "https://ods.od.nih.gov/factsheets/Folate-HealthProfessional/"}]
}
```

- `group` must be one of: `vegetables`, `fruit`, `legumes`, `grains`, `nuts-seeds`, `seafood`, `meat-eggs`, `dairy-soy`, `herbs-spices`, `oils-fats`, `drinks`, `other`.
- `null` is allowed for nutrients that are unknown or irrelevant. Scores are integers 1–10, or `null` where the rubric allows it.
- Include foods that score badly (bacon, swordfish, white bread, sugar) when your list names them. Low scores are useful comparisons.

## Before you finish
- Validate the JSON: `python -c "import json;json.load(open(r'<file>',encoding='utf-8'))"`.
- Check by script that each `why` total equals its score.
- Use the Write tool for big files, because Bash commands over about 8 KB are silently truncated. Don't use PowerShell Get-Content or Set-Content.
- Report back briefly: number of foods, any values you had to estimate, and anything surprising.

## Checking foods (checker agents)
For **every** food in the file you're given:

1. Re-derive its key nutrients from FDC or ODS, its polyphenols from Phenol-Explorer, and its mercury category from the FDA chart. Fix any wrong numbers.
2. Re-score each category under the rubric from scratch, then compare with the existing score, keep the correct one, and make sure the `why` arithmetic shows the final score.
3. Check the serving size, `best_prep` (accurate and practical), watch-outs (pregnancy, contaminants, interactions, allergens), tags, and that the sources are real.
4. Add `"check": {"date": "2026-10-11", "summary": "what you verified and changed"}`.

Write the corrected file to the output path, plus a short markdown report listing each change as from→to with the reason.

## Shared tools (added during the run)
The scratchpad folder is `C:\Users\junkc\AppData\Local\Temp\claude\C--GIT\75460c61-ed8d-40d5-8646-8e783f8519d6\scratchpad`.

- **`fdc_portal.py`:** keyless USDA FoodData Central lookup, using the same portal search the FDC website uses.
  - Put one query per line in a text file. Prefix a line with `F:` to search Foundation foods instead of SR Legacy.
  - Run `python -I fdc_portal.py queries.txt`.
  - It prints per-100 g values (kcal, fat, carb, fibre, SFA, EPA, DHA, ALA, folate DFE, choline, Fe, Zn, Se, B12, vitamin C, vitamin A RAE, iodine) and writes `queries.txt.json`.
  - Keep a pause between queries; the script already sleeps 0.6 s.
  - Cite each food's FDC page as `https://fdc.nal.usda.gov/food-details/<fdcId>/nutrients`.
- **`ods\*.html`:** saved NIH ODS fact sheets with their per-serving food tables (Folate, Choline, Zinc, Selenium, Iron, B12, Iodine, Vitamin C, Omega-3, Vitamin A), plus the FDA fish-advice page (`fda.html`). Parse them locally instead of re-fetching; the live site returns 403 to curl.
