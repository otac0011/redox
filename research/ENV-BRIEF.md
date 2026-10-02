# Research brief: environmental chemicals and hazards

You are expanding Redox Compass's coverage of **environmental hazards** (one domain per agent).
Read, in order, and follow exactly:

1. `research/BRIEF.md`: evidence rules, PubMed verification, retraction checks, debate, rate
   limits, and the **patch format** for new factors.
2. `research/SCHEMA.md`: Factor and Reference shapes.
3. `research/TIMING-BRIEF.md`: the TimingRecord shape (for the new factors you add).
4. `research/AUDIT-BRIEF.md`: the AuditRecord shape (for the existing factors in your domain).
5. `research/deep-environment.md`: what the site already says (microplastics, PFAS,
   phthalates/BPA, lubricants, pesticides). Build on it; don't repeat it.

**Do not edit any existing file in the repo.** You write four outputs:

| File | Format |
|---|---|
| `<scratchpad>\patch-env-<name>.json` | Patch (BRIEF.md): new factors in `lifestyle` (general), `sperm` (ids ending `-sperm`) and `egg` (ids ending `-egg`), plus `references` |
| `<scratchpad>\timing-env-<name>.json` | `{"references": [...], "windows": [], "timing": [...]}`: one TimingRecord per **new** factor id (half-lives, how fast levels fall when exposure stops, lag windows for sperm/egg) |
| `<scratchpad>\audit-env-<name>.json` | `{"references": [...], "audit": [...]}`: one AuditRecord per **existing** factor id assigned to you |
| `C:\GIT\redox\research\deep-env-<name>.md` | Deep dive |

All three JSON files use your one reference-id prefix; a reference may appear in more than one
file (copy the object).

## What each new factor must cover

- **Sources and exposure routes**, with numbers where measured (biomonitoring: NHANES, HBM4EU,
  CDC; which products/foods dominate).
- **Oxidative stress evidence:** human biomarker studies (8-OHdG, F2-isoprostanes, MDA) and
  mechanisms; grade honestly (`mechanistic` if only cell/animal).
- **Sperm and egg/IVF outcomes**, and pregnancy/child outcomes where the oxidative or
  fertility angle is relevant.
- **Confounding and measurement problems**, which are severe in this field: single spot urine
  for chemicals with hour-long half-lives (misclassification; intraclass correlation),
  co-exposures (chemical mixtures), reverse causation, socioeconomic confounding, multiple
  testing, publication bias, industry-funded vs independent studies, regulatory disagreements
  (EFSA vs FDA on BPA's tolerable intake, etc.). Put these in `caveats` and `debate`.
- **Regulation and replacements:** what replaced the chemical (regrettable substitution, e.g.
  BPS/BPF, DINCH/DEHTP), and what the evidence says about the replacements.
- **What lowers exposure, with intervention-study evidence** (including failed interventions)
  and practical, concrete steps in `dose` (e.g. "avoid heating food in plastic", "wet-mop and
  HEPA-vacuum dust"). For harmful factors use `dose.effective` for what reduces exposure and
  `dose.too_much` for the levels at which harm was seen or guidance values.

Grade impact by **real-world effect size × evidence**, not by how alarming the chemical sounds.
Most associations here are small and observational; say so.

## Before you finish

The checks in BRIEF.md, TIMING-BRIEF.md and AUDIT-BRIEF.md all apply. Report back briefly:
reference count, new factor ids, audited ids with verdicts, the 5 most important findings,
the main debates, and every `site_change` you proposed.
