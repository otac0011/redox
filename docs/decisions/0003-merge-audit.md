# 0003: Audit of cross-area factor merges

Date: 2026-10-01

Following 0002 (the meat merge), every factor built from more than one source entry was re-checked against the rule *only merge entries that describe the same exposure*. Of 28 merged factors, 24 passed. Four changed:

| Factor | Problem | Change |
|---|---|---|
| `coffee` | Merged diet "paper-filtered coffee" (beneficial, 3-4 cups/day) with egg "high caffeine intake" (any source, mainly miscarriage risk above ~200 mg/day). One page gave contradictory "how much" advice. | Egg and sperm caffeine entries moved to new `caffeine-fertility` ("Caffeine (all sources) & fertility"). `coffee` is general-only, with a caveat linking to it. |
| `overtraining-ultraendurance` | Merged acute oxidative damage after ultra-endurance events with egg "5+ h/week vigorous exercise in lean women / low energy availability (RED-S)". Different exposure and mechanism (energy deficit, hypothalamic suppression). | Egg entry moved to new `vigorous-exercise-low-energy`. The plan boosts it for BMI < 18.5 and endurance athletes. |
| `excess-adiposity` | Included diet "overfeeding", an acute calorie surplus that raises F2-isoprostanes within days, before fat gain. | Split to new `overfeeding`, paired with `weight-loss` in the plan to avoid duplicate advice. |
| `short-sleep` | Egg entry covers sleep quality plus shift work. | Kept merged (the main finding is trouble sleeping) but renamed "Short or poor-quality sleep", with a cross-link to `shift-work-circadian`. |

Passed (same exposure, different populations or outcomes): alcohol, CoQ10, fruit & vegetables, heavy metals, glycemic control, high-dose antioxidant cocktails, L-carnitine, weight loss, Mediterranean diet, moderate aerobic exercise, NAC, oily fish/omega-3, outdoor air pollution, plastics chemicals, polyphenol/resveratrol capsules, psychological stress, refined sugar/sugary drinks, sauna/hot tubs, selenium, tobacco smoking (incl. egg "stopping smoking"), tomatoes, vitamin C+E, vitamin D, nuts.

Plan logic fix found during the audit: an answer boost could pull in a factor that wasn't rated for any selected goal (e.g. the women's RED-S item for a sperm-only plan). Factors now appear only when they have impact for a chosen goal; boosts only reorder them.

## Addendum: scope discipline for the expansion research (same day)

- Fertility entries for curcumin, sulforaphane, ketogenic diet, astaxanthin, soy, spermidine, resveratrol and SSRIs were aliased onto one page per exposure, following the same-exposure rule.
- IVF add-ons and other clinic procedures are in the guide's `exclude` list, so they appear in My plan only when an answer brings them in. The IVF answers link to the add-on summary instead.
- `aspirin-preeclampsia-egg` was lowered from 4 to 1 on the egg scale. It acts in pregnancy, not on egg quality, and would otherwise lead the egg-quality overview.
- Claims the research agents couldn't check against an abstract or full text were removed or reworded: the Axelsson 2017 effect size, the Lancet Commission's per-factor percentages, and the ACR 2020 attribution on paternal methotrexate.
