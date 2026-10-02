# Redox Compass

An evidence-graded guide to oxidative stress: which diet, exercise, and lifestyle levers actually change it in humans, how much you need, and how they work. It has a dedicated view for **sperm DNA fragmentation** and **egg (oocyte) quality**.

Private beta on GitHub Pages behind a simple passphrase. This is obscurity only: the data in this repo is public.

## What's in it

- **Overview:** the biggest helpful and harmful levers for each goal (overall / sperm / egg), ranked by impact × evidence quality.
- **Factor pages:** a "How much?" box (effective dose, studied range, upper limits, time to effect), mechanism, interactions and redundancy, caveats, key numbers, and the papers, with PubMed links.
- **Compare:** foods, habits, or supplements side by side (e.g. blackberries vs eggplant skin vs coffee vs broccoli sprouts).
- **Mechanisms:** factors grouped by pathway (Nrf2, mitochondrial ROS, NOX, iron/Fenton, glycation, …), which is the right frame for "if I already do X, does Y still add anything?"
- **Timeline:** set the days until conception or egg retrieval to see which stage of development the sperm or egg is in, which changes are still in time for their full effect, and what a late start still achieves. Factor pages show when an effect starts, when it peaks, how long it lasts after stopping, and how often it's needed.
- **Updates:** every factor's main claim re-checked against newer and better-designed research (Mendelian randomization, sibling and twin studies, trials that tested cohort findings, retractions, guideline changes), with a verdict: holds, strengthened, weakened or contested. Factor pages carry a "Newer evidence & confounding" card.
- **My plan:** a short questionnaire that produces a prioritized, personalized list. Answers stay in the browser.
- **Stack check:** list supplements and medications and get flags for evidence of harm, overlapping mechanisms, and conflicts with training, conception, pregnancy, smoking, blood thinners, cancer treatment, or G6PD deficiency (rules in `data/stack.json`).
- **Tests:** which lab and genetic tests actually guide decisions, how to read them, and which to skip.
- **Read:** long-form research notes for each area, plus 14 deep dives (sulforaphane, curcumin, isothiocyanates & polyphenols, fasting, ketosis, exercise, longevity supplements & aging theory, iron & micronutrients, medications, testing, microplastics & PFAS, IVF add-ons, skin & brain, cooking & circadian timing), plus six timing deep dives (sperm, egg, nutrients, foods & Nrf2, exercise/fasting/sleep, and what lasts), four audit deep dives (diet, supplements, body & medicines, fertility), and three environmental-chemical deep dives (phthalates & bisphenols, personal care, indoor air).
- **Where the evidence is contested:** factor pages and deep dives cite published disagreement on both sides.

## Evidence policy

Sources are systematic reviews and meta-analyses, RCTs, large cohorts, guidelines (ASRM, AUA/EAU, ESHRE, EFSA, USPSTF), and mechanistic reviews. There are no health websites or vendor material, and no ORAC scores. Every reference is checked against PubMed/Crossref by `tools/verify_refs.py`, which also flags retracted papers. See [docs/decisions](docs/decisions/) for the reasoning.

## Layout

```
index.html, app.js, style.css   the site (no build step)
assets/data.json                merged data the site loads (generated)
data/<area>.json                structured research per area (foundations, diet, lifestyle, sperm, egg)
data/aliases.json               merges the same factor across areas
data/guide.json                 "My plan" questions
data/compare.json               compare presets
data/stack.json                 stack-checker contexts and rules
data/tests.json                 lab/genetic test guidance
data/notes/<deep-dive>.json     full reference lists for research/deep-*.md
data/timing/<group>.json        timing records, sperm/egg windows and refs (research/TIMING-BRIEF.md)
data/audit/<group>.json         confounding / newer-evidence audits per factor (research/AUDIT-BRIEF.md)
research/<area>.md              long-form notes; research/SCHEMA.md defines the data format
tools/build.py                  data/*.json -> assets/data.json (+ consistency warnings)
tools/verify_refs.py            re-verify every citation against PubMed / Crossref
tools/apply_patch.py            merge a research patch (factors, refs, mechanisms, tests, notes)
tools/apply_timing.py           validate and add a timing research file
tools/apply_audit.py            validate and add an audit file (prints proposed grade changes)
tools/apply_site_changes.py     apply reviewed impact/evidence/headline changes from an audit
tools/set_passphrase.py         change the passphrase
research/BRIEF.md               instructions given to research agents
research/TIMING-BRIEF.md        instructions for the timing research
research/AUDIT-BRIEF.md         instructions for the confounding / newer-evidence audit
research/ENV-BRIEF.md           instructions for the environmental-chemical research
```

## Working on it

```bash
python tools/build.py          # after editing anything in data/
python tools/verify_refs.py    # after adding references
python -m http.server 8765     # then open http://localhost:8765
python tools/set_passphrase.py newphrase
```

Not medical advice. It's an educational summary of published research.
