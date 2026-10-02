# 0004: Timing layer and the Timeline page

Date: 2026-10-01

The owner asked for time-based evidence: does an intervention matter more a month before sperm or egg development finishes than two weeks before; which effects are slow and grow (fitness); which outlast the exposure; and whether something like sulforaphane needs to be daily.

## What was built

- **Data:** `data/timing/<group>.json`, one file per research group (sperm, egg, nutrients, food, body, legacy). Each holds per-factor *timing records* (shape, onset, full effect, after stopping, frequency, sperm/egg lead time, what a late start still achieves, basis, debate, references) and, for sperm and egg, the *development windows*. The format is in `research/TIMING-BRIEF.md`.
- **Deep dives:** `research/deep-timing-<group>.md`, which cite the same reference ids. `tools/build.py` registers them as notes, so citations link.
- **Factor pages:** a Timing card with a log-time strip (first effect, full effect, how long it lasts after stopping) and the lead time before conception.
- **Timeline page:** a slider for days until conception or egg retrieval. It shows which development stage the sperm or egg is in now, and sorts factors into "still in time", "too late for the full effect (what you still get)" and "no lead time". It also groups factors by how often they're needed and by their time shape.
- **Tools:** `tools/apply_timing.py` validates a research file before it lands in `data/timing/`. The validation checks factor ids, reference ids, day ranges, and citations in the deep dive.

## Decisions

- **Timing lives beside the factor files, not inside them.** Factors already had a free-text `dose.timeframe` (266 of 291 entries). Rewriting 230 factors across five area files to add structure risked clobbering reviewed text. A separate file keyed by canonical factor id keeps the research reviewable and the merge one-way. Rejected: putting timing fields into each area entry, because a factor merged from several areas would then carry several conflicting timelines.
- **One record per factor, one owner.** Factors were assigned to exactly one research group by script, so two agents never wrote timelines for the same factor. Where a factor needed both sides (smoking, alcohol, SSRIs, chemo/radiation: the sperm agent owned them), the egg agent wrote the egg lead times separately, and they were merged into the sperm group's records with their references.
- **Numbers as ranges with a basis.** `days` is `[low, high]` or null, never a single invented point. `basis` says whether a time course was measured in people, extrapolated (from cycle length, half-life or turnover), or unknown. Unknown stays visible ("not measured") instead of being filled in.
- **Log time axis.** Effects run from hours (BPA, sulforaphane) to decades (cadmium, bone lead), and a linear axis would flatten all but one end.
- **Lead time means "for the full effect".** `start_by_days` comes from development biology plus trial durations. The late-start text says what is still achievable. No trial compared lead times directly, and the pages say so.
- **Umbrella windows.** The periconception period (about 14 weeks before to 8 weeks after conception) contains the other egg windows. When the page says which stage the egg is in now, it leaves the umbrella out.

## Checks on agent output

- Every reference was re-fetched by `tools/verify_refs.py` (4,708 reference entries across all files; all passed, with no unflagged retractions).
- The food agent called two existing figures unverified: green tea extract liver-injury latency (~6 months vs ~6 weeks) and the cocoa FMD plateau at ~2 weeks. Both were checked against their source abstracts (Mazzanti 2015; Sansone 2015) and are correct, so they were kept.
- A sperm-timing citation (Hajizadeh Maleki 2014, PMID 24389625) is not retracted but comes from a group with several retracted exercise-and-semen trials. It is labelled, and its timings are marked provisional, as with the group's other papers (see 0001).
- The body agent flagged two papers from the same group that the exercise data already cites. They were already labelled under 0001's policy and were left as they are.

## Open

- No human trial compares daily with intermittent sulforaphane. "Most days" rests on enzyme persistence and washout data.
- Many `after_stopping` values are unmeasured (cannabis, SSRIs, vaping, NR/NMN, MitoQ, urolithin A, microplastics).
- "My plan" doesn't use timing yet. A natural next step is to order a plan by lead time when the user gives a conception date.
