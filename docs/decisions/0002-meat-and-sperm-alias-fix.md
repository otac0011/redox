# 0002: Don't merge factors that differ in exposure definition (meat and sperm)

Date: 2026-10-01

## What went wrong
`data/aliases.json` mapped the sperm area's `processed-meat-sperm` onto the diet area's `processed-red-meat` ("Processed & red meat"). The sperm evidence is only about **processed** meat, so after the merge the site implied unprocessed red meat was rated harmful for sperm. A beta tester asked whether red meat actually helps sperm production, which exposed it.

## What the evidence says
- Afeiche 2014, *Epidemiology* (PMID 24681577; 189 men aged 18–22): processed red meat was inversely related to total sperm count. Unprocessed red meat, poultry, and fish were not related to any semen parameter.
- Afeiche 2014, *J Nutr* (PMID 24850626; 155 fertility-clinic men): processed meat was associated with fewer morphologically normal sperm.
- Liu 2022, *Nutrients* (PMID 35565922; 552 cases / 585 controls): unprocessed meat OR 0.61 for asthenozoospermia; processed meat OR 1.44; stir-frying OR 1.58.
- No trial shows red meat improves spermatogenesis or spermiogenesis in men who aren't deficient. Red meat supplies zinc, B12, iron, and carnitine, but adding 30 mg/day zinc to an adequate diet did nothing in FAZST (PMID 31910279).

## Change
- `processed-meat-sperm` now maps to its own factor, `processed-meat`.
- New sperm factor `unprocessed-red-meat`: direction neutral, evidence limited, impact 1. It records the null/possibly favorable findings and the nutrient-adequacy caveat.
- The diet factor is renamed "Processed & red meat (gut, cancer)", and its caveat points to the sperm distinction.
- The research notes (`research/sperm.md`) gain an "Unprocessed red meat (not a negative)" section.

## Rule going forward
Only alias two factors when they describe the **same exposure**. "Processed meat" ≠ "processed and red meat"; "high caffeine" vs "coffee" and "sleep + circadian" vs "short sleep" are borderline merges that should be re-checked the same way.
