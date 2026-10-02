# Research brief: confounding and newer evidence (audit)

You are auditing existing Redox Compass factors for **outdated claims and confounding**. Read
`research/BRIEF.md` (evidence rules, PubMed verification, retraction checks, rate limits) and
`research/SCHEMA.md` (Reference shape) first; everything there applies. **Do not edit any
existing file in the repo.** You write the files named in your task.

The owner asked for two things:

1. Studies that **call into question the confounding variables of established studies**: where a
   headline finding on the site rests on observational data (or small/old trials), has newer work
   tested whether it is causal? Look for:
   - Mendelian randomization (including critiques of MR itself, e.g. the retracted/corrected
     non-linear MR papers on vitamin D and BMI, pleiotropy, weak instruments);
   - sibling/within-family comparisons, twin studies, negative-control exposures or outcomes,
     target-trial emulation, natural experiments;
   - known biases: healthy-user and healthy-adherer effects, reverse causation (sick quitters,
     prodromal disease), residual confounding by socioeconomic status, smoking or overall
     diet, measurement error (food-frequency questionnaires, single spot urine for short
     half-life chemicals), immortal-time bias, collider bias, selection into IVF clinics;
   - randomized trials that overturned cohort findings, and reanalyses of influential trials;
   - publication bias, p-hacking critiques, industry funding, and **research integrity**
     (retractions, expressions of concern, "zombie trials", data-integrity investigations such
     as Mol/Bordewijk's work on fertility RCTs).
2. **More recent understanding vs outdated information:** newer meta-analyses, large trials,
   guideline updates (ESHRE, ASRM, ACOG, AUA/EAU, WHO, USPSTF, EFSA, HFEA traffic lights) that
   change what the site should say. Prefer the most recent high-quality synthesis; note the
   year of each source so readers can see what is new.

For each factor in your list, read its current text in `assets/data.json` (all `entries`:
headline, dose, caveats, debate, refs) and judge the **site's actual claim**. Factors where
there is nothing to audit (a genotype, a procedure with no contested claim) can be skipped;
list them in your report.

## Output: `<scratchpad>\audit-<group>.json`

```json
{
  "references": [ /* every reference cited; ids start with your prefix */ ],
  "audit": [ /* one AuditRecord per audited factor */ ]
}
```

### AuditRecord

```json
{
  "factor": "alcohol",
  "verdict": "holds | strengthened | weakened | overturned | unclear",
  "claim": "The specific claim on the site that you audited, paraphrased in one sentence.",
  "biases": "Which biases threaten it and how (named: reverse causation, healthy-user, residual confounding by X, measurement error...), with [ref-id].",
  "newer_evidence": "What newer or better-designed studies found, with years and [ref-id]; include studies on both sides.",
  "bottom_line": "One or two plain sentences: what a reader should now believe.",
  "site_change": {
    "impact": { "general": 2 },
    "evidence": "limited",
    "headline": "Suggested replacement headline, or null",
    "note": "Any other concrete correction (a wrong number, a retracted citation the site still uses), or null"
  },
  "as_of": 2026,
  "refs": ["..."]
}
```

- `verdict`: `holds` = the claim survives newer, better-designed tests; `strengthened` =
  newer causal evidence supports it more than the site says; `weakened` = likely partly
  confounded or smaller than stated; `overturned` = the best current evidence contradicts it;
  `unclear` = credible evidence on both sides.
- `site_change`: only the fields you would change; omit the object (or use `{}`) if none. Impact
  is the site's 0-5 scale for that scope; evidence is strong/moderate/limited/mechanistic.
- Cite as `[ref-id]` inline. Every claim needs a citation you verified this session.
- Be fair: an audit is not a hunt for negatives. If an RCT or MR study *confirms* a finding,
  say so (`holds` or `strengthened`).

## Output: `C:\GIT\redox\research\deep-audit-<group>.md`

A deep dive starting with `# Title` for a smart lay reader: how confounding works in this area
(with the classic examples), a table of factors with verdicts, the most important reversals
and confirmations with dates, `## Where the evidence is contested`, what changed recently,
a practical bottom line, and a reference list. Cite as `[refid]`.

## Before you finish

- The JSON parses; every `[refid]` and every `refs` id is in `references`; every `factor` is in
  your list.
- Use the Write tool for big files (Bash commands over about 8 KB are silently truncated).
  Don't use PowerShell Get-Content/Set-Content (it corrupts UTF-8). Prefix helper scripts with
  your group name.
- Report back briefly: counts by verdict, skipped ids, the 5 most important reversals or
  confirmations, and every `site_change` you proposed (factor: change, one line each).
