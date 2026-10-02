# Research brief: timing (when, how fast, how long, how often)

You are adding **time-based evidence** to Redox Compass for one group of existing factors. Read
`research/BRIEF.md` (evidence rules, PubMed verification, debate, rate limits) and
`research/SCHEMA.md` (Reference shape) first; everything there applies. **Do not edit any
existing file in the repo.** You write exactly two files, named in your task.

The owner's questions, which your work must answer for your group:

1. **Windows.** Is an intervention more important a month before sperm or egg development
   finishes than two weeks before? Which stage of sperm or egg development is sensitive to what,
   and what can still be changed late?
2. **Kinetics.** Which effects are fast (hours to days), which build and plateau (weeks), and
   which keep growing slowly over months or years (fitness, weight loss)?
3. **Persistence.** Which effects outlast the exposure, for how long, and why (protein or tissue
   turnover, body stores, half-lives, structural change)? Harms count too (smoking, heat, PFAS).
4. **Frequency.** Does it need to be daily? E.g. sulforaphane: plasma half-life is a couple of
   hours, but Nrf2 target enzymes may stay raised for longer; is every other day as good? Look
   for trials that compared dosing schedules, and for tolerance or attenuation with daily use.

Prefer **measured time courses in humans** (repeated measures in trials, washout periods,
cessation cohorts, pharmacokinetic studies, turnover/tracer studies). When you can only
extrapolate (e.g. from the length of spermatogenesis, a half-life, or tissue turnover), say so
with `"basis": "extrapolated"`. Never invent numbers: if no paper gives a time course, set the
`days` field to `null`, say "not measured", and mark `"basis": "unknown"`.

## Output 1: `<scratchpad>/timing/timing-<group>.json`

```json
{
  "references": [ /* every reference cited in your md or records; ids start with "t<group>-" */ ],
  "windows": [ /* only the sperm and egg agents write these */ ],
  "timing": [ /* one TimingRecord per factor id in your list, unless skipped */ ]
}
```

You may reuse papers already in `data/*.json`, but copy the full reference object into your
file with your own prefixed id, after re-verifying it on PubMed.

### TimingRecord

```json
{
  "factor": "broccoli-sprouts",
  "shape": "acute | build | slow-build | lasting | window | none",
  "summary": "Two plain sentences: the time story of this factor.",
  "onset":          { "text": "First measurable effect, on what outcome.", "days": [0.1, 2] },
  "full":           { "text": "When the effect plateaus (or 'keeps growing').", "days": [14, 84] },
  "after_stopping": { "text": "How long the effect (benefit or harm) persists after stopping.", "days": [1, 3] },
  "frequency": {
    "advice": "daily | most-days | few-per-week | weekly | occasional | one-off | avoid | n/a",
    "text": "What the evidence says about schedule: daily vs intermittent, bolus vs split, tolerance."
  },
  "conception": {
    "sperm": { "start_by_days": 90, "late_start": "What starting 2-4 weeks before still achieves, if anything.", "text": "Which stage it acts on and why that sets the lead time." },
    "egg":   { "start_by_days": 100, "late_start": "...", "text": "..." }
  },
  "basis": "measured | extrapolated | unknown",
  "debate": "Where papers disagree about timing, both sides cited [ref-id]; or 'No substantive published debate on timing found'.",
  "refs": ["t<group>-..."]
}
```

- `days` is always a `[low, high]` pair of positive numbers of days (0.04 = 1 hour), or `null`.
  `onset`/`full` count from starting; `after_stopping` counts from stopping. For harms,
  `onset` = how soon harm appears after exposure starts, `after_stopping` = recovery time.
- `shape`: `acute` = on within days, gone within days of stopping; `build` = plateaus over weeks,
  fades over weeks; `slow-build` = keeps growing over months to years (fitness); `lasting` =
  outlives the exposure by months to years (stores, structural change, long half-life); `window`
  = matters mainly at a developmental stage; `none` = no meaningful time dimension.
- `conception` only for factors that matter for sperm and/or egg (omit the key otherwise, or
  omit the scope that does not apply). `start_by_days` = days before conception (or before egg
  retrieval/insemination for IVF) by which to start or stop to get the full benefit for that
  cycle. For harms it is how long before to *stop*.
- `text` fields: plain English, 1-3 sentences, cite `[ref-id]` inline where a number comes from.
- Skip factors where timing is meaningless (e.g. a lab procedure on the day, a genotype): list
  their ids in your report instead of writing a record. Do not write records for ids outside
  your list.

### Window (sperm and egg agents only)

```json
{
  "id": "spermiogenesis",
  "scope": "sperm | egg",
  "name": "Spermiogenesis (round spermatid to sperm)",
  "start_days": 37, "end_days": 12,
  "what": "What happens to the cell in this stage.",
  "sensitive_to": "What can damage or improve it here, with [ref-id].",
  "refs": ["..."]
}
```

`start_days`/`end_days` are days **before ejaculation** (sperm) or **before ovulation/egg
retrieval** (egg), so `start_days > end_days`. Cover the whole development path that can still be
influenced (for the egg, at least the final ~4 months of follicle growth plus the periovulatory
days; also the early embryo/periconception period after conception if your evidence supports it,
using negative numbers for days after).

## Output 2: `C:\GIT\redox\research\deep-timing-<group>.md`

A deep dive starting with `# Title`, for a smart lay reader: the timing biology for your group,
a table of factors with onset / full effect / after stopping / frequency, answers to the four
questions above, `## Where the evidence is contested`, a practical bottom line (what to start
first, what can wait, what needs to be daily), what we don't know, and a reference list. Cite
as `[refid]` using ids in your timing file.

## Before you finish

- `python -c "import json;json.load(open(r'<file>',encoding='utf-8'))"` passes.
- Every `[refid]` and every `refs` id exists in your file's `references`.
- Every `factor` is in your list; every `days` is `null` or two numbers with low ≤ high.
- Use the Write tool for big files (Bash commands over about 8 KB are silently truncated).
  Don't use PowerShell Get-Content/Set-Content (it corrupts UTF-8). Name helper scripts with
  your group prefix.
- Report back briefly: number of references and records, skipped ids, the 5 most important
  timing findings, and the main timing debates.
