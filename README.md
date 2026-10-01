# Redox Compass

An evidence-graded guide to oxidative stress: which diet, exercise, and lifestyle levers actually change it in humans, how much you need, and how they work. It has a dedicated view for **sperm DNA fragmentation** and **egg (oocyte) quality**.

Private beta on GitHub Pages behind a simple passphrase. This is obscurity only: the data in this repo is public.

## What's in it

- **Overview:** the biggest helpful and harmful levers for each goal (overall / sperm / egg), ranked by impact × evidence quality.
- **Factor pages:** a "How much?" box (effective dose, studied range, upper limits, time to effect), mechanism, interactions and redundancy, caveats, key numbers, and the papers, with PubMed links.
- **Compare:** foods, habits, or supplements side by side (e.g. blackberries vs eggplant skin vs coffee vs broccoli sprouts).
- **Mechanisms:** factors grouped by pathway (Nrf2, mitochondrial ROS, NOX, iron/Fenton, glycation, …), which is the right frame for "if I already do X, does Y still add anything?"
- **My plan:** a short questionnaire that produces a prioritized, personalized list. Answers stay in the browser.
- **Read:** long-form research notes for each area.

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
research/<area>.md              long-form notes; research/SCHEMA.md defines the data format
tools/build.py                  data/*.json -> assets/data.json (+ consistency warnings)
tools/verify_refs.py            re-verify every citation against PubMed / Crossref
tools/set_passphrase.py         change the passphrase
```

## Working on it

```bash
python tools/build.py          # after editing anything in data/
python tools/verify_refs.py    # after adding references
python -m http.server 8765     # then open http://localhost:8765
python tools/set_passphrase.py newphrase
```

Not medical advice. It's an educational summary of published research.
