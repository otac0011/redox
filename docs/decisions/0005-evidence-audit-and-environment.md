# 0005: Evidence audit (confounding, newer evidence) and environmental chemicals

Date: 2026-10-02

The owner asked for (1) studies that question the confounding behind established findings, and more recent understanding in place of outdated information, and (2) more on environmental hazards such as phthalates.

## What was built

- **Audit layer:** `data/audit/<group>.json` holds one record per factor: the claim checked, the biases that threaten it, newer or better-designed evidence, a verdict (holds / strengthened / weakened / overturned / contested), and a plain bottom line, with references. The format is in `research/AUDIT-BRIEF.md`. The deep dives are `research/deep-audit-<group>.md` (diet, nutrients, body, fertility).
  - Factor pages show a "Newer evidence & confounding" card.
  - The new **Updates** page lists every verdict, worst first.
  - Explore cards show a chip when a claim was weakened or contested.
- **Environmental chemicals:** 54 new factor pages across four domains (`research/ENV-BRIEF.md`):
  - plastics: phthalates and bisphenols, split out of the old combined `plastics-chemicals`;
  - personal care: parabens, triclosan, UV filters, fragrance, hair dyes and relaxers, nail products, menstrual products, PFAS in cosmetics, "clean beauty";
  - indoor air: flame retardants, gas stoves, VOCs and formaldehyde, cleaning products, dust, solvents, damp and mould, radon, ventilation;
  - food and water: glyphosate, organophosphates, pyrethroids, neonicotinoids, nitrate, chlorination by-products, arsenic, lead, fluoride and uranium in water, washing produce, arsenic in rice, metals in cocoa, lead in spices, mercury in fish, aflatoxin, cookware.
- **Tools:**
  - `tools/apply_audit.py` validates an audit file and prints the proposed grade changes.
  - `tools/apply_site_changes.py` applies only reviewed impact, evidence and headline changes to the entry that owns the scope.

## Decisions

- **Proposals are reviewed, not auto-applied.** Each audit could propose `site_change` edits, and build.py drops that field. Every applied change was read first, and the key numbers behind the largest changes were checked against their abstracts (DASH pooled −3.2/−2.5 mmHg; the Danish coffee Mendelian randomization study). Free-text notes were applied by hand only where they corrected a wrong number (leafy greens, fruit and vegetables, vitamin D's IVF framing).
- **"No benefit in trials" means neutral, not invisible.** Several audits proposed impact 0 for factors that RCTs found don't work: male antioxidant combinations (MOXI, FAZST, SUMMER), vitamin D for IVF, and astaxanthin for sperm. Impact 0 would hide them from the fertility views, which is exactly where people need the null result. They are instead marked neutral ("no clear effect") with impact 1. The Timeline countdown leaves neutral factors out, because there is nothing to start.
- **One page per exposure.** New `-sperm`/`-egg` entries for the same chemical are aliased onto the general page, for example `parabens-sperm` to `parabens`. Their timing lead times were folded into the canonical timing record (rule from 0002/0003).
- **Retiring `plastics-chemicals`.** Its entries were removed after the plastics agent carried their content into the new pages. The old ids (`plastics-chemicals`, `phthalates-bpa`, `egg-phthalates`, `egg-bpa`) now alias to `phthalates` or `bisphenols`, so old links and `[plastics-chemicals]` mentions resolve. The compare preset now lists both new factors.
- **Reader-facing wording.** Audit agents sometimes wrote to the maintainer ("the site already says this"). Those bottom lines and sentences were rewritten for readers. Cited sentences were rephrased, never dropped.
- **References with only a URL.** Some agents put guideline URLs in the journal field. These were moved to `url`, so the pages link them and the validators accept them.

## What the audit found (186 factors reviewed)

141 hold up, 14 strengthened, 23 weakened, 8 contested, none overturned outright. The largest changes:

- **Male antioxidants:** three large RCTs found no live-birth benefit, so they are now neutral.
- **Vitamin D for IVF:** two RCTs in deficient women were null, so it is now neutral and no longer framed as treatment.
- **Coffee and mortality:** Mendelian randomization doesn't confirm the cohort benefit (general impact lowered from 3 to 2).
- **Exercise and mortality:** twin, Mendelian randomization and trial data suggest the cohort gap is partly genes and illness (impact 5 to 4). The trial benefits on fitness, blood pressure and glucose stand.
- **Processed meat and olive oil:** evidence lowered from strong to moderate.
- **DASH:** pooled −3.2/−2.5 mmHg, not one trial's −8.
- **Intrauterine hCG:** the benefit came only from trials that failed integrity checks.
- **Caffeine and miscarriage:** probably confounded by pregnancy nausea.
- **Alcohol:** the J-curve is abstainer bias. Inflammation was strengthened as a cause of events (CANTOS, LoDoCo2).

Newly found retractions among trials the site's topics rest on:
- Papaleo 2009 (myo-inositol; a second retraction for that topic);
- two DHEA trials (Kotb 2016, Elprince 2020);
- two endometrial-scratch trials (Maged 2018, Helmy 2017);
- seven retracted trials inside the Cochrane female-antioxidant review.

## Incomplete

The food-and-water agent was stopped by a safety classifier while it wrote timing records. The pesticide records are where it stopped. Its factor patch had finished and was merged after review: it is consumer exposure-reduction content. The domain's timing records, audit of the existing factors (pesticides, PFAS, metals, water filtration, cooking chemistry) and its deep dive were not produced, and were deliberately not regenerated. Those existing factors therefore have no audit card yet.

## Checks

`tools/verify_refs.py`: 6,583/6,583 reference entries verified against PubMed/Crossref, with no unflagged retractions.
