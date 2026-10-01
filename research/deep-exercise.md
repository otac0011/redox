# Exercise deep dive: dose, type, and oxidative stress

Exercise is the clearest example of the "antioxidant paradox": every hard session raises reactive oxygen species (ROS), yet people who exercise regularly end up with stronger antioxidant defences, better metabolic health and lower mortality. This page goes deeper than the general lifestyle notes ([aerobic-exercise-moderate] and friends in `research/lifestyle.md`). It covers how exercise ROS work, how much exercise is enough (and whether there is such a thing as too much), which types matter, whether antioxidant pills interfere, what sitting does, and what exercise means for sperm and eggs.

A note on markers. The best-validated marker of whole-body lipid peroxidation is F2-isoprostanes. Many exercise studies instead use malondialdehyde (MDA/TBARS) or "total antioxidant capacity", which are cruder, and a methods paper has urged the field to drop outdated assays and use several validated biomarkers [exr-cobley2017]. Keep this in mind when a small trial claims exercise "reduced oxidative stress by 40%".

---

## At a glance

| Question | Short answer | Confidence |
|---|---|---|
| Do exercise ROS matter? | Yes, as signals. Most cytosolic ROS in working muscle come from NADPH oxidase 2 (NOX2), not mitochondrial "leak" | Moderate (much is from animals) |
| How much activity? | Most mortality benefit by 150-300 min/week, or about 7,000-8,000 steps/day; the curve flattens at 3-5x the guideline | Strong association, causality debated |
| Is more harmful? | No excess mortality even at 10x the guideline; lifelong extreme endurance volumes go with more coronary calcium and atrial fibrillation (AF) | Moderate |
| Best single target? | Cardiorespiratory fitness (VO2max): each +1 MET goes with 11-17% lower mortality | Strong association, causal share debated |
| Zone 2 or HIIT? | Both work; intervals are more time-efficient, total volume still matters | Moderate |
| Strength training? | 10-27% lower mortality in cohorts, best at about 30-60 min/week, plus proven muscle and function gains | Moderate |
| Antioxidant pills with training? | Megadoses of vitamin C/E and resveratrol blunt some adaptations; meta-analyses show no clear performance loss. No upside | Moderate |
| Sitting and post-meal walks? | Walking breaks and post-meal walks cut glucose spikes; direct oxidative effects unproven | Moderate (glucose), limited (oxidative) |
| Sperm and eggs? | Moderate activity is neutral to helpful; very high endurance loads can lower testosterone and semen quality in men and suppress ovulation in lean women | Limited to moderate |

---

## 1. How exercise makes ROS, and why that is the point

**Sources.** Contracting muscle produces superoxide and hydrogen peroxide. The old view blamed mitochondria, since working muscle's oxygen use rises enormously. The modern view is that low, physiological ROS are needed for normal force while high levels cause fatigue [exr-powers2008], and that extramitochondrial enzymes such as NADPH oxidase and xanthine oxidase are major sources [exr-gomezcabrera2015]. Using biosensors in humans and mice, Henríquez-Olguín and colleagues showed NOX2 is the main source of cytosolic ROS during moderate exercise, and mice without working NOX2 had much lower exercise-stimulated glucose uptake [exr-henriquezolguin2019] and blunted HIIT adaptations [exr-henriquezolguin2019b]. Mitochondria still contribute, and Jackson argues that low H2O2 concentrations are relayed into signalling by peroxiredoxins [exr-jackson2024].

**Signalling.** These ROS pulses oxidize KEAP1 and release Nrf2, which switches on glutathione synthesis, superoxide dismutase, catalase and heme oxygenase-1 [exr-done2016]. In human muscle, acute and short-term interval exercise raised Nrf2 and its targets in step with markers of mitochondrial biogenesis [exr-islam2020]. ROS also feed PGC-1alpha (mitochondrial biogenesis), MAPKs (p38, JNK, ERK) and NF-kB; blocking ROS with intravenous N-acetylcysteine blunted JNK activation and some adaptive gene responses [exr-petersen2012]. This is classic hormesis, with a bell-shaped dose-response [exr-radak2008], and the specific version where mitochondria emit the stress signal is called mitohormesis [exr-ristow2014, exr-merry2016a]. The field's view shifted from "ROS cause damage" in the 1980s to "ROS are signals" from the 1990s on [exr-powers2016, exr-powers2024].

**Timelines.** Molecular signals peak within hours of a session. Antioxidant enzymes and mitochondrial proteins rise over 2-6 weeks of training. Resting whole-body markers move slowly: in a 12-month RCT in 173 sedentary postmenopausal women, aerobic training lowered F2-isoprostanes by 6% overall (not significant) but by 14% in women whose VO2max rose more than 15% [exr-campbell2010]. In a 439-woman trial, exercise alone lowered isoprostanes 14.5% (not significant after correction), less than diet-induced weight loss did [exr-duggan2016]. A 2026 meta-analysis found activity lowered MDA (SMD -1.02) and raised antioxidant status, but heterogeneity was huge (I² about 95%) [exr-wahib2026].

**Are exercise ROS necessary for adaptation?** This is genuinely debated (see the contested section). The strongest human evidence without any supplement comes from Margaritelis and colleagues, who sorted people by how much oxidative stress a session caused: the low-responders gained least in VO2max and performance after 6 weeks [exr-margaritelis2018]. Reviews conclude the ROS signal is important but not the only one, since redundant pathways can compensate [exr-merry2016b, exr-powers2024].

---

## 2. How much: the dose-response

### Steps

| Study | Comparison | Mortality |
|---|---|---|
| Paluch 2022, 15 cohorts, 47,471 adults [exr-paluch2022] | ~5,800 / ~7,800 / ~10,900 vs ~3,550 steps/day | HR 0.60 / 0.55 / 0.47; plateau at 6,000-8,000 (age 60+) and 8,000-10,000 (under 60) |
| Ding 2025, 57 studies [exr-ding2025] | 7,000 vs 2,000 steps/day | HR 0.53; lower CVD, dementia, depression, falls; curves flatten around 5,000-7,000 |
| Banach 2023, 17 cohorts [exr-banach2023] | each +1,000 steps/day | 15% lower; benefit from about 3,900 steps/day |
| Saint-Maurice 2020, NHANES [exr-saintmaurice2020] | 8,000 and 12,000 vs 4,000 steps/day | HR 0.49 and 0.35 |
| Lee 2019, older women [exr-lee2019] | ~4,400 vs ~2,700 steps/day | HR 0.59; levelled off about 7,500 |

Step speed (cadence) added little once total steps were counted [exr-paluch2022, exr-saintmaurice2020, exr-lee2019]. The famous 10,000 has no special status; it is a fine target for active people, while 7,000-8,000 captures most of the benefit.

### Minutes of moderate-to-vigorous activity

In a pooled analysis of 661,137 adults, compared with no leisure activity [exr-arem2015]:

| Dose (multiples of 150 min/week moderate or 75 min vigorous) | Mortality HR |
|---|---|
| Less than 1x | 0.80 |
| 1-2x | 0.69 |
| 2-3x | 0.63 |
| 3-5x (plateau) | 0.61 |
| 10x or more | 0.69 (no harm) |

The steepest drop is from nothing to something. WHO's 2020 guidelines (150-300 min moderate or 75-150 min vigorous, plus 2 days of strength work, and "some is better than none") match this curve [exr-bull2020]. Accelerometer data show even steeper gradients: the most active quarter had about a quarter of the mortality of the least active (HR 0.27), and light activity also counted (HR 0.38) [exr-ekelund2019].

### Weekend warriors and exercise snacks

Packing activity into 1-2 sessions a week seems to work about as well as spreading it out: in British surveys, weekend warriors had mortality HR 0.70 versus 0.65 for regularly active people [exr-odonovan2017]; in 350,978 Americans, for the same total activity the pattern made no difference (HR 1.08, 95% CI 0.97-1.20) [exr-dossantos2022]; accelerometer-defined weekend warriors had similar reductions in AF, heart attack, heart failure and stroke [exr-khurshid2023]; and a 2025 meta-analysis agreed [exr-kim2025].

At the other extreme, "exercise snacks" are bursts of a minute or less spread through the day [exr-islam2022]. In UK Biobank non-exercisers, three 1-2 minute bursts of vigorous incidental activity a day (stairs, hurried walking, carrying loads; "VILPA") were associated with 38-40% lower all-cause and cancer mortality and 48-49% lower cardiovascular mortality [exr-stamatakis2022], lower cancer incidence [exr-stamatakis2023] and, in women, 45% fewer major cardiovascular events at 3.4 min/day [exr-stamatakis2025]. Bouts of 1-3 minutes did better than shorter ones [exr-ahmadi2023]. A US replication found a similar 44% lower mortality at about 5 bouts/day, but the association weakened when people with heart disease or cancer were excluded [exr-koemel2026]. Small RCTs show 3 daily stair climbs of 60 steps [exr-jenkins2019] or 3 daily 20-second sprints (+4% VO2peak) [exr-little2019] improve fitness, and six 1-minute hard walks before meals cut 24-hour glucose [exr-francois2014]. These are observational associations that may be inflated by healthier people being able to move vigorously; see the contested section. *(Factor: [exercise-snacks].)*

---

## 3. Too much? The J-curve debate

**Acute oxidative overload is real.** A 50 km ultramarathon (about 6.5 h) raised plasma F2-isoprostanes from 75 to 131 pg/mL, back to baseline in 24 h [exr-mastaloudis2001]. An overreaching resistance block raised urinary isoprostanes 7-fold and cut glutathione 31%, tracking the performance drop [exr-margonis2007]. Ramping interval training to near-daily hard sessions for 4 weeks impaired mitochondrial respiration and glucose tolerance [exr-flockhart2021]. A meta-analysis found oxidative damage depends on intensity times volume, with HIIT and moderate exercise least likely to cause large damage [exr-zhou2022].

**Coronary calcium.** Lifelong high-volume athletes have more coronary artery calcium (CAC) and plaque. Men above 2000 MET-min/week had 3.2-fold odds of CAC, although their plaques were more often calcified-only (thought to be more stable) [exr-aengevaeren2017]. In low-risk masters athletes, most had normal CAC, but men more often had CAC above 300 or plaques [exr-merghani2017]; marathon runners over 50 had more CAC than risk scores predicted [exr-mohlenkamp2008]. The 2023 Master@Heart study, however, found lifelong endurance athletes had more plaques, including non-calcified ones, and no more benign composition [exr-debosscher2023]. Outcomes are reassuring so far: in 21,758 men, high activity with high CAC did not raise mortality (HR 0.77, not significant) [exr-defina2019], and over 20 years the most active had similar coronary-event risk but the lowest mortality (HR 0.71) [exr-berry2025].

**Atrial fibrillation.** Athletes have about 2.5 times the odds of AF (OR 2.46) [exr-newman2021], and Swedish skiers completing 5+ Vasaloppet races had 29% higher AF risk [exr-andersen2013]. In the general population the picture is a J-shape: moderate activity lowers AF [exr-mozaffarian2008, exr-mishima2021], benefit becomes uncertain above about 2000 MET-min/week [exr-mishima2021], and the most active had no protection in Tromsø [exr-morseth2016]. A sex split is emerging: the most active men had 20% higher AF risk while women had 9% lower [exr-kunutsor2021], and UK Biobank found clearer benefit in women [exr-elliott2020]. Proposed mechanisms include atrial stretch and high vagal tone [exr-morseth2018].

**Mortality.** One Copenhagen cohort reported strenuous joggers did no better than sedentary people (HR 1.97) [exr-schnohr2015], but with a 95% CI of 0.48-8.14 that estimate is close to meaningless. Larger data found benefit across all running doses down to 5-10 min/day [exr-lee2014], no harm at 10x the guideline [exr-arem2015], no upper limit for fitness [exr-mandsager2018, exr-kokkinos2022], and 41% lower mortality in Tour de France riders than in the general population [exr-marijon2013]. The hypothesis that extreme endurance remodels the heart harmfully [exr-okeefe2012] remains plausible for AF, unproven for death. *(Factor: [overtraining-ultraendurance].)*

---

## 4. Cardiorespiratory fitness as the target

Fitness, measured as peak METs or VO2max on a treadmill, is one of the strongest single predictors of survival:

| Study | Finding |
|---|---|
| Kodama 2009, 33 studies [exr-kodama2009] | Each +1 MET: 13% lower mortality; risk climbs below 7.9 METs |
| Han 2022, 34 cohorts [exr-han2022] | Per MET: RR 0.88 all-cause, 0.87 CVD, 0.93 cancer; highest vs lowest RR 0.47 |
| Lang 2024, overview of 199 cohorts [exr-lang2024] | High vs low HR 0.47; each MET 11-17% lower; certainty very low to moderate |
| Mandsager 2018, 122,007 patients [exr-mandsager2018] | Elite vs low HR 0.20, no upper limit |
| Kokkinos 2022, 750,302 veterans [exr-kokkinos2022] | Lowest risk at about 14 METs (HR 0.24); least fit 4x the risk of the most fit, across age, sex and race |

The AHA has proposed fitness as a clinical vital sign [exr-ross2016], and gaining fitness over time tracks lower mortality (about 11% per 1 mL/kg/min gained) [exr-imboden2019]. In 70-77-year-olds, moving from unfit to moderately fit captured most of the benefit [exr-tari2025].

**The causality problem.** Fitness partly reflects genes, body fat and hidden illness. A 2025 Mendelian randomization study found activity, lean mass and lower body fat causally raise VO2max, but genetically predicted VO2max was not associated with longevity [exr-kjaergaard2025]. Another found strength drives fitness, not the reverse [exr-norris2024]. And the 5-year Generation 100 RCT found no significant mortality reduction from supervised training in older adults, though intervals trended better (HR 0.63 vs controls) [exr-stensvold2020]. A critical review of RCTs concluded exercise has not been proven to reduce mortality in older or chronically ill adults [exr-ballin2021]. On the other side, a twin study found the activity-mortality link held within twin pairs [exr-kujala1998], and analyses that use repeated measures with lag time still show a robust dose-response [exr-lee2021], while another twin analysis suggested much of the link is familial and reverse causation [exr-kankaanpaa2025].

**Trainability.** "Non-responders" are mostly under-dosed: non-response vanished when weekly training rose [exr-montero2017] or intensity rose from 50% to 75% of VO2peak [exr-ross2015]. *(Factor: [cardiorespiratory-fitness].)*

---

## 5. Zone 2 versus HIIT

"Zone 2" (steady exercise just below the first lactate threshold) became a popular prescription for mitochondria. The evidence:

- **Mitochondrial content.** A 353-study meta-regression found similar gains after adjustment: continuous endurance 23%, HIIT 27%, sprint intervals 27%; per hour of training, sprint and HIIT were 1.7-3.9 times more efficient than continuous training, and more sessions per week meant more gain [exr-molmen2025]. When work is matched within the same person, intervals beat continuous exercise for citrate synthase and respiration [exr-macinnis2017a].
- **The CrossTalk debate.** MacInnis, Skelly and Gibala argue intensity matters more [exr-macinnis2019, exr-macinnis2017b]; Bishop, Botella and Granata argue volume matters more for content, intensity more for respiratory function [exr-bishop2019, exr-granata2018]. A 2025 review concluded there is no evidence that Zone 2 is the optimal intensity for the general public, and that higher intensities matter more when time is limited [exr-storoschuk2025].
- **VO2max.** HIIT beats continuous training by a small 1.2 mL/kg/min in healthy adults [exr-milanovic2015] and by 3.0 mL/kg/min (about 9%) in cardiometabolic patients [exr-weston2014]. Fat loss is similar [exr-wewege2017].
- **Oxidative markers.** Vigorous training raised antioxidant capacity and lowered oxidants where non-vigorous training did not, in a 7-RCT meta-analysis [exr-torresrojo2025]; HIIT and moderate exercise carried the lowest risk of large oxidative damage [exr-zhou2022].

Bottom line: Zone 2 is not magic, intensity is not everything. Total volume plus some hard work is the evidence-based mix. *(Factor: [hiit-vigorous-exercise].)*

---

## 6. Resistance training

**Mortality.** Muscle-strengthening is associated with 10-17% lower all-cause, cardiovascular and cancer mortality, with J-shaped curves peaking at about 30-60 min/week [exr-momma2022]; another meta-analysis found 15% lower mortality for any resistance training and up to 27% at about 60 min/week [exr-shailendra2022]. In older women the curve also looked J-shaped, with wide confidence intervals at high volumes [exr-kamada2017]. The biggest cohort (216,339 older adults) found any weight training helped (HR 0.94) with no clear upturn, and no benefit in people doing no aerobic exercise [exr-shailendra2024]. Combining aerobic guidelines with weightlifting 1-2 times a week went with 41% lower mortality, versus 32% for aerobic alone [exr-gorzelitz2022]. An umbrella review rated the evidence "suggestive" [exr-rahmati2025].

**Older adults and sarcopenia.** Here the RCT evidence is solid: resistance training raises strength by about 24-33% in adults over 50, more with heavier loads [exr-peterson2010], and in sarcopenia improves grip strength (+2.95 kg), gait speed and muscle mass [exr-li2026]. The NSCA recommends 2-3 sessions a week for older adults, including the frail [exr-fragala2019]. Lower grip strength predicts death (16% higher per 5 kg lower) [exr-leong2015], and Mendelian randomization suggests strength protects against coronary disease and AF [exr-tikkanen2018].

**Oxidative markers.** Modest: glutathione peroxidase rises in older adults, catalase does not change and SOD slightly falls [exr-cordeiro2025]; a 2026 review found only 6 trials on redox balance in older adults [exr-chenhuichen2026]. Strength training's value is muscle and metabolism, not "antioxidant" effects. *(Factor: [resistance-training].)*

---

## 7. Antioxidant supplements and training adaptation

### Vitamin C and E

| Trial | Dose | Result |
|---|---|---|
| Ristow 2009, 39 men [exr-ristow2009] | 1000 mg C + 400 IU E, 4 weeks | Abolished insulin-sensitivity gain and ROS-defence gene induction |
| Gomez-Cabrera 2008, rats + 14 men [exr-gomezcabrera2008] | 1 g C | Hampered endurance gains and mitochondrial-biogenesis signals (mainly rats) |
| Paulsen 2014, 54 adults [exr-paulsen2014a] | 1000 mg C + 235 mg E, 11 weeks | Same VO2max gain (8%) but blocked rises in COX4 and PGC-1alpha |
| Paulsen 2014, 32 lifters [exr-paulsen2014b] | same | Blunted hypertrophy signalling and some strength gains, not muscle growth |
| Bjørnsen 2016, men 60-81 [exr-bjornsen2016] | 500 mg C + 117.5 mg E around sessions | Lean-mass gain 1.4% vs 3.9% |
| Stunes 2017, men 60-81 [exr-stunes2017] | 1000 mg C + 235 mg E | Blunted bone-density gains |
| Yfanti 2010/2011, 21 men [exr-yfanti2010, exr-yfanti2011] | 500 mg C + 400 IU E, 12 weeks | No effect on VO2max, power or insulin sensitivity |
| Morrison 2015, 11 men [exr-morrison2015] | 1000 mg C + 400 IU E | VO2peak and mitochondrial gains intact; some cellular adaptations blocked |

Meta-analyses: across 18 RCTs, vitamin C and/or E did not significantly blunt VO2max (SMD -0.14), endurance, lean mass or strength [exr-clifford2020]; a strength-focused review found no effect on strength and a possible attenuation of hypertrophy [exr-dutra2020]. Reviews converge: no benefit, possible harm, so skip chronic megadoses during training [exr-mason2020, exr-higgins2020, exr-nikolaidis2012, exr-merry2016b].

### Polyphenols, quercetin and NAC

- **Resveratrol.** In 27 men aged about 65, 250 mg/day during 8 weeks of HIIT cut the VO2max gain by 45% and erased the blood-pressure and lipid benefits [exr-gliemann2013]; it also blunted the training-induced fall in muscle protein carbonyls and TNF-alpha [exr-olesen2014]. In young men, 150 mg/day blunted gains in peak power and PGC-1alpha/SOD2 expression [exr-scribbans2014]. Critics wrote that the data do not show "mainly negative" effects [exr-smoliga2013]. A 22-trial polyphenol meta-analysis found resveratrol's negative effect non-significant (SMD -0.54) and isoflavones possibly helpful for lean mass [exr-martineznegrin2022].
- **Quercetin.** About 1000 mg/day gives only trivial endurance gains (about 1-2%) [exr-kressler2011, exr-pelletier2013].
- **NAC.** IV NAC blunted adaptive signalling [exr-petersen2012]; oral NAC did not improve performance overall (+0.29%) and side effects rose with dose [exr-rhodes2017]. But in people with low baseline glutathione, NAC 1200 mg twice daily improved performance and lowered isoprostanes, while it did nothing or worse in others [exr-paschalis2018], supporting a "treat deficiency, not everyone" approach [exr-margaritelis2018b]. See [n-acetylcysteine].

### Timing

No trial has directly compared antioxidants taken around workouts with the same dose taken far from them. Blunting occurred with daily dosing [exr-ristow2009, exr-paulsen2014a] and with doses taken just before and after sessions [exr-bjornsen2016]. Acute use before a single competition (e.g. NAC in the days before an endurance event) is a separate question from chronic use during training [exr-mason2020]. *(Factor: [antioxidant-megadoses-during-training].)*

---

## 8. Sitting, breaks and post-meal walks

**Sitting.** In accelerometer studies, the most sedentary quarter had 2.6 times the mortality of the least sedentary [exr-ekelund2019]. In a harmonised analysis of a million adults, 60-75 min/day of moderate activity eliminated the extra risk of sitting 8+ h/day, but not of heavy TV viewing [exr-ekelund2016]. Mechanistically, short-term disuse hits glucose control fast: bed rest cut insulin sensitivity 42% without raising muscle mitochondrial H2O2 or oxidative markers [exr-dirks2020], and a week at about 1,200 steps/day lowered mitochondrial enzyme activity [exr-edwards2021]. The only sitting-oxidative crossover trial, using a crude marker, showed post-meal oxidative trends after a sitting day but not after standing or exercise days [exr-takahashi2015].

**Breaks.** Two-minute walks every 20 minutes cut post-drink glucose area by about 25-30% and insulin by about 23% in overweight adults [exr-dunstan2012]. Across 37 trials, activity breaks lowered glucose (SMD -0.54), insulin (-0.56) and triglycerides (-0.26), more in people with higher BMI [exr-loh2020]. Light walking beat standing [exr-buffey2022]. *(Factor: [sedentary-time].)*

**Post-meal walks.** In 41 adults with type 2 diabetes, 10 minutes of walking after each meal lowered post-meal glucose 12% more than one daily 30-minute walk, and 22% more after dinner [exr-reynolds2016]. Three 15-minute post-meal walks matched a 45-minute morning walk for 24-hour glucose in older adults [exr-dipietro2013]. A 31-study meta-analysis found a consistent glucose reduction (g -0.32), larger with bouts over 30 minutes [exr-kang2023]. Because glucose spikes drive mitochondrial superoxide and AGE formation ([glycemic-control]), flattening them is plausibly antioxidant, but this has not been shown directly. *(Factor: [post-meal-walking].)*

---

## 9. Exercise and fertility

### Men

**Moderate activity.** Young men doing 15+ h/week of moderate-to-vigorous activity had 73% higher sperm concentration than those under 5 h/week, and heavy TV watchers 44% lower [exr-gaskins2015]. In Chinese students, low activity went with 23% lower total sperm count [exr-zou2018], and active men had better motility, morphology and testosterone than sedentary men [exr-vaamonde2012]. But in 215 healthy Spanish men activity was unrelated to semen quality [exr-minguezalarcon2014], regular exercise was not associated with semen quality in 2,261 IVF-clinic men (except cycling 5+ h/week, OR 1.92 for low concentration; see [cycling]) [exr-wise2011], and in 4,921 men planning pregnancy, male activity was not consistently related to how fast couples conceived [exr-wise2025]. A meta-analysis summarised: mostly no major effect, possible benefit from recreational activity, possible harm from elite levels [exr-ibanezperez2019]. The one large RCT (280 men; moderate continuous training beat high-intensity for seminal oxidative markers and sperm DNA) comes from a group with related retracted papers [exr-hajizadehmaleki2017]. Covered by [aerobic-exercise-moderate].

**Very high endurance loads.** Men with years of heavy endurance training can develop the "exercise-hypogonadal male condition": persistently low free and total testosterone without a rise in LH [exr-lane2019, exr-hackney2008]. High-mileage runners (~108 km/week) had testosterone of 15.3 vs 21.4 nmol/L in moderate-mileage runners, with lower sperm motility and density [exr-desouza1994]; elite triathletes had sperm DNA fragmentation averaging 20.4% [exr-vaamonde2018]; the hardest-training men had lower libido [exr-hackney2017]. Low energy availability (REDs) is a key driver [exr-mountjoy2023, exr-cupka2023]. But some of this may be adaptive [exr-hackney2020], and a systematic review of 280 endurance athletes found semen changes rarely clinically relevant [exr-aerts2024]. *(Factor: [endurance-hypogonadism-sperm].)*

### Women

For women the energy-availability story dominates. In 3,628 Danish women, 5+ h/week of vigorous activity was associated with lower fecundability (FR 0.68) in lean women, while moderate activity was linked to slightly higher fecundability (FR 1.18) and any activity helped overweight women [exr-wise2012]. Norwegian women active on most days had 3.2-fold, and those exercising to exhaustion 2.3-fold, odds of fertility problems [exr-gudmundsdottir2009]. The IOC REDs consensus frames this as low energy availability suppressing reproductive hormones [exr-mountjoy2023]. See [vigorous-exercise-low-energy] and [aerobic-exercise-moderate]. Oxidative stress is not the main mechanism here; energy balance is.

---

## Where the evidence is contested

1. **Are exercise ROS necessary for adaptation?** For: antioxidant megadoses blunted insulin sensitivity [exr-ristow2009], mitochondrial proteins [exr-paulsen2014a] and lean mass [exr-bjornsen2016]; NOX2-deficient mice adapt less [exr-henriquezolguin2019b]; low oxidative responders adapt less [exr-margaritelis2018]. Against: several RCTs found no blunting [exr-yfanti2010, exr-yfanti2011, exr-morrison2015], and the 18-RCT meta-analysis found no significant loss of fitness or strength [exr-clifford2020]. Middle ground: ROS are one of several redundant signals [exr-merry2016b, exr-powers2024].
2. **Mitochondria or NOX2?** Classic mitohormesis puts mitochondria at the centre [exr-ristow2014, exr-merry2016a]; newer work points to NOX2 and xanthine oxidase [exr-henriquezolguin2019, exr-gomezcabrera2015].
3. **Is activity causal for longevity?** Observational effects are large and robust to lagging [exr-lee2021] and to twin comparisons in one cohort [exr-kujala1998], but not in another [exr-kankaanpaa2025]; long-term RCTs in older adults have not shown a significant mortality reduction [exr-stensvold2020, exr-ballin2021].
4. **Is fitness causal?** Huge cohorts [exr-mandsager2018, exr-kokkinos2022, exr-lang2024] versus Mendelian randomization finding no causal link between VO2max and longevity [exr-kjaergaard2025].
5. **Extreme exercise.** U-shaped jogging data [exr-schnohr2015] and the coronary/AF hypothesis [exr-okeefe2012] versus no excess mortality at very high doses [exr-arem2015, exr-berry2025, exr-defina2019]. Whether athletes' plaques are benign is disputed [exr-aengevaeren2017, exr-debosscher2023]. AF risk seems higher in very active men and lower in women [exr-kunutsor2021].
6. **Zone 2 versus intensity** [exr-storoschuk2025, exr-macinnis2019, exr-bishop2019, exr-molmen2025].
7. **Strength-training J-curve** [exr-momma2022, exr-shailendra2022] versus no upturn in the largest cohort [exr-shailendra2024].
8. **Exercise snacks** may be inflated by reverse causation [exr-koemel2026].
9. **Resveratrol harm** [exr-gliemann2013] versus critics [exr-smoliga2013] and a non-significant pooled effect [exr-martineznegrin2022].
10. **Male fertility**: positive associations [exr-gaskins2015] versus null [exr-minguezalarcon2014, exr-wise2025]; hypogonadism as dysfunction or adaptation [exr-lane2019, exr-hackney2020].

---

## Practical bottom line

- **Get to 150-300 min/week of moderate activity, or about 7,000-10,000 steps a day.** The first 30 minutes a day give the biggest return. Concentrating it on weekends is acceptable.
- **Include some intensity.** One or two interval sessions a week (e.g. 4 x 4 min hard) raise fitness efficiently; if you do no formal exercise, start with stair or hill "snacks".
- **Lift twice a week (about 30-60 min/week total)**, especially after 50.
- **Treat VO2max as a vital sign.** Getting out of the least-fit fifth for your age matters most.
- **Break up sitting and walk 10-15 minutes after meals**, especially dinner and especially with diabetes or prediabetes.
- **Do not take gram-level vitamin C/E or resveratrol to "protect" against exercise.** Eat fruit and vegetables instead. Correct real deficiencies only.
- **Very high volumes are fine for most people if you recover**, but lifelong endurance athletes with palpitations should get checked for AF, and anyone with low energy intake, missed periods (women) or low libido/testosterone (men) should scale back and eat more, especially when trying to conceive.

---

## What we don't know

- Whether the observational mortality benefit of activity and fitness is mostly causal, and how big the causal part is.
- Whether resting oxidative-stress markers in healthy, fit people change meaningfully with any exercise prescription, using validated markers like F2-isoprostanes.
- Whether blunting of molecular adaptations by antioxidants matters for long-term health outcomes, and whether timing doses away from workouts avoids it.
- The clinical meaning of extra calcified coronary plaque in lifelong athletes.
- Whether exercise snacks change hard outcomes in RCTs.
- Whether moderate exercise improves sperm DNA fragmentation or IVF outcomes in RCTs from independent groups.

---

## Factors in this patch

Replaced (lifestyle): [aerobic-exercise-moderate], [hiit-vigorous-exercise], [resistance-training], [overtraining-ultraendurance], [sedentary-time], [antioxidant-megadoses-during-training]. New (lifestyle): [cardiorespiratory-fitness], [post-meal-walking], [exercise-snacks]. New (sperm): [endurance-hypogonadism-sperm].

---

## References

All PMIDs were verified against PubMed (esummary and abstract) during this research pass; none is flagged as retracted. Listed in order of first citation.

- [exr-cobley2017] Cobley JN, Close GL, Bailey DM, et al. Exercise redox biochemistry: Conceptual, methodological and technical recommendations. *Redox Biol* 2017. PMID 28371751, doi:10.1016/j.redox.2017.03.022
- [exr-powers2008] Powers SK, Jackson MJ Exercise-induced oxidative stress: cellular mechanisms and impact on muscle force production. *Physiol Rev* 2008. PMID 18923182, doi:10.1152/physrev.00031.2007
- [exr-gomezcabrera2015] Gomez-Cabrera MC, Salvador-Pascual A, Cabo H, et al. Redox modulation of mitochondriogenesis in exercise. Does antioxidant supplementation blunt the benefits of exercise training? *Free Radic Biol Med* 2015. PMID 25889822, doi:10.1016/j.freeradbiomed.2015.04.006
- [exr-henriquezolguin2019] Henríquez-Olguin C, Knudsen JR, Raun SH, et al. Cytosolic ROS production by NADPH oxidase 2 regulates muscle glucose uptake during exercise. *Nat Commun* 2019. PMID 31604916, doi:10.1038/s41467-019-12523-9
- [exr-henriquezolguin2019b] Henríquez-Olguín C, Renani LB, Arab-Ceschia L, et al. Adaptations to high-intensity interval training in skeletal muscle require NADPH oxidase 2. *Redox Biol* 2019. PMID 30959461, doi:10.1016/j.redox.2019.101188
- [exr-jackson2024] Jackson MJ Exercise-induced adaptations to homeostasis of reactive oxygen species in skeletal muscle. *Free Radic Biol Med* 2024. PMID 39427746, doi:10.1016/j.freeradbiomed.2024.10.270
- [exr-done2016] Done AJ, Traustadóttir T Nrf2 mediates redox adaptations to exercise. *Redox Biol* 2016. PMID 27770706, doi:10.1016/j.redox.2016.10.003
- [exr-islam2020] Islam H, Bonafiglia JT, Turnbull PC, et al. The impact of acute and chronic exercise on Nrf2 expression in relation to markers of mitochondrial biogenesis in human skeletal muscle. *Eur J Appl Physiol* 2020. PMID 31707475, doi:10.1007/s00421-019-04259-7
- [exr-petersen2012] Petersen AC, McKenna MJ, Medved I, et al. Infusion with the antioxidant N-acetylcysteine attenuates early adaptive responses to exercise in human skeletal muscle. *Acta Physiol (Oxf)* 2012. PMID 21827635, doi:10.1111/j.1748-1716.2011.02344.x
- [exr-radak2008] Radak Z, Chung HY, Koltai E, et al. Exercise, oxidative stress and hormesis. *Ageing Res Rev* 2008. PMID 17869589, doi:10.1016/j.arr.2007.04.004
- [exr-ristow2014] Ristow M Unraveling the truth about antioxidants: mitohormesis explains ROS-induced health benefits. *Nat Med* 2014. PMID 24999941, doi:10.1038/nm.3624
- [exr-merry2016a] Merry TL, Ristow M Mitohormesis in exercise training. *Free Radic Biol Med* 2016. PMID 26654757, doi:10.1016/j.freeradbiomed.2015.11.032
- [exr-powers2016] Powers SK, Radak Z, Ji LL Exercise-induced oxidative stress: past, present and future. *J Physiol* 2016. PMID 26893258, doi:10.1113/JP270646
- [exr-powers2024] Powers SK, Radak Z, Ji LL, et al. Reactive oxygen species promote endurance exercise-induced adaptations in skeletal muscles. *J Sport Health Sci* 2024. PMID 38719184, doi:10.1016/j.jshs.2024.05.001
- [exr-campbell2010] Campbell PT, Gross MD, Potter JD, et al. Effect of exercise on oxidative stress: a 12-month randomized, controlled trial. *Med Sci Sports Exerc* 2010. PMID 20139793, doi:10.1249/MSS.0b013e3181cfc908
- [exr-duggan2016] Duggan C, Tapsoba JD, Wang CY, et al. Dietary Weight Loss, Exercise, and Oxidative Stress in Postmenopausal Women: A Randomized Controlled Trial. *Cancer Prev Res (Phila)* 2016. PMID 27803047, doi:10.1158/1940-6207.CAPR-16-0163
- [exr-wahib2026] Wahib HR, Afroundeh R, Farzizadeh R, et al. Physical activity and oxidative stress biomarkers in humans: a systematic review and quantitative meta-analysis. *BMC Sports Sci Med Rehabil* 2026. PMID 42760575, doi:10.1186/s13102-026-02059-z
- [exr-margaritelis2018] Margaritelis NV, Theodorou AA, Paschalis V, et al. Adaptations to endurance training depend on exercise-induced oxidative stress: exploiting redox interindividual variability. *Acta Physiol (Oxf)* 2018. PMID 28544643, doi:10.1111/apha.12898
- [exr-merry2016b] Merry TL, Ristow M Do antioxidant supplements interfere with skeletal muscle adaptation to exercise training? *J Physiol* 2016. PMID 26638792, doi:10.1113/JP270654
- [exr-paluch2022] Paluch AE, Bajpai S, Bassett DR, et al. Daily steps and all-cause mortality: a meta-analysis of 15 international cohorts. *Lancet Public Health* 2022. PMID 35247352, doi:10.1016/S2468-2667(21)00302-9
- [exr-ding2025] Ding D, Nguyen B, Nau T, et al. Daily steps and health outcomes in adults: a systematic review and dose-response meta-analysis. *Lancet Public Health* 2025. PMID 40713949, doi:10.1016/S2468-2667(25)00164-1
- [exr-banach2023] Banach M, Lewek J, Surma S, et al. The association between daily step count and all-cause and cardiovascular mortality: a meta-analysis. *Eur J Prev Cardiol* 2023. PMID 37555441, doi:10.1093/eurjpc/zwad229
- [exr-saintmaurice2020] Saint-Maurice PF, Troiano RP, Bassett DR Jr, et al. Association of Daily Step Count and Step Intensity With Mortality Among US Adults. *JAMA* 2020. PMID 32207799, doi:10.1001/jama.2020.1382
- [exr-lee2019] Lee IM, Shiroma EJ, Kamada M, et al. Association of Step Volume and Intensity With All-Cause Mortality in Older Women. *JAMA Intern Med* 2019. PMID 31141585, doi:10.1001/jamainternmed.2019.0899
- [exr-arem2015] Arem H, Moore SC, Patel A, et al. Leisure time physical activity and mortality: a detailed pooled analysis of the dose-response relationship. *JAMA Intern Med* 2015. PMID 25844730, doi:10.1001/jamainternmed.2015.0533
- [exr-bull2020] Bull FC, Al-Ansari SS, Biddle S, et al. World Health Organization 2020 guidelines on physical activity and sedentary behaviour. *Br J Sports Med* 2020. PMID 33239350, doi:10.1136/bjsports-2020-102955
- [exr-ekelund2019] Ekelund U, Tarp J, Steene-Johannessen J, et al. Dose-response associations between accelerometry measured physical activity and sedentary time and all cause mortality: systematic review and harmonised meta-analysis. *BMJ* 2019. PMID 31434697, doi:10.1136/bmj.l4570
- [exr-odonovan2017] O'Donovan G, Lee IM, Hamer M, et al. Association of "Weekend Warrior" and Other Leisure Time Physical Activity Patterns With Risks for All-Cause, Cardiovascular Disease, and Cancer Mortality. *JAMA Intern Med* 2017. PMID 28097313, doi:10.1001/jamainternmed.2016.8014
- [exr-dossantos2022] Dos Santos M, Ferrari G, Lee DH, et al. Association of the "Weekend Warrior" and Other Leisure-time Physical Activity Patterns With All-Cause and Cause-Specific Mortality: A Nationwide Cohort Study. *JAMA Intern Med* 2022. PMID 35788615, doi:10.1001/jamainternmed.2022.2488
- [exr-khurshid2023] Khurshid S, Al-Alusi MA, Churchill TW, et al. Accelerometer-Derived "Weekend Warrior" Physical Activity and Incident Cardiovascular Disease. *JAMA* 2023. PMID 37462704, doi:10.1001/jama.2023.10875
- [exr-kim2025] Kim YS, Shin YH, Oh M, et al. Association of weekend warrior physical activity pattern with health outcomes: A systematic review and meta-analysis. *Public Health* 2025. PMID 41067094, doi:10.1016/j.puhe.2025.105977
- [exr-islam2022] Islam H, Gibala MJ, Little JP Exercise Snacks: A Novel Strategy to Improve Cardiometabolic Health. *Exerc Sport Sci Rev* 2022. PMID 34669625, doi:10.1249/JES.0000000000000275
- [exr-stamatakis2022] Stamatakis E, Ahmadi MN, Gill JMR, et al. Association of wearable device-measured vigorous intermittent lifestyle physical activity with mortality. *Nat Med* 2022. PMID 36482104, doi:10.1038/s41591-022-02100-x
- [exr-stamatakis2023] Stamatakis E, Ahmadi MN, Friedenreich CM, et al. Vigorous Intermittent Lifestyle Physical Activity and Cancer Incidence Among Nonexercising Adults: The UK Biobank Accelerometry Study. *JAMA Oncol* 2023. PMID 37498576, doi:10.1001/jamaoncol.2023.1830
- [exr-stamatakis2025] Stamatakis E, Ahmadi M, Biswas RK, et al. Device-measured vigorous intermittent lifestyle physical activity (VILPA) and major adverse cardiovascular events: evidence of sex differences. *Br J Sports Med* 2025. PMID 39467622, doi:10.1136/bjsports-2024-108484
- [exr-ahmadi2023] Ahmadi MN, Hamer M, Gill JMR, et al. Brief bouts of device-measured intermittent lifestyle physical activity and its association with major adverse cardiovascular events and mortality in people who do not exercise: a prospective cohort study. *Lancet Public Health* 2023. PMID 37777289, doi:10.1016/S2468-2667(23)00183-4
- [exr-koemel2026] Koemel NA, Ahmadi MN, Biswas RK, et al. Vigorous intermittent lifestyle physical activity (VILPA) and mortality risk among US adults: a wearables-based national cohort study. *Int J Behav Nutr Phys Act* 2026. PMID 41612409, doi:10.1186/s12966-026-01876-2
- [exr-jenkins2019] Jenkins EM, Nairn LN, Skelly LE, et al. Do stair climbing exercise "snacks" improve cardiorespiratory fitness? *Appl Physiol Nutr Metab* 2019. PMID 30649897, doi:10.1139/apnm-2018-0675
- [exr-little2019] Little JP, Langley J, Lee M, et al. Sprint exercise snacks: a novel approach to increase aerobic fitness. *Eur J Appl Physiol* 2019. PMID 30847639, doi:10.1007/s00421-019-04110-z
- [exr-francois2014] Francois ME, Baldi JC, Manning PJ, et al. 'Exercise snacks' before meals: a novel strategy to improve glycaemic control in individuals with insulin resistance. *Diabetologia* 2014. PMID 24817675, doi:10.1007/s00125-014-3244-6
- [exr-mastaloudis2001] Mastaloudis A, Leonard SW, Traber MG Oxidative stress in athletes during extreme endurance exercise. *Free Radic Biol Med* 2001. PMID 11585710, doi:10.1016/s0891-5849(01)00667-0
- [exr-margonis2007] Margonis K, Fatouros IG, Jamurtas AZ, et al. Oxidative stress biomarkers responses to physical overtraining: implications for diagnosis. *Free Radic Biol Med* 2007. PMID 17697935, doi:10.1016/j.freeradbiomed.2007.05.022
- [exr-flockhart2021] Flockhart M, Nilsson LC, Tais S, et al. Excessive exercise training causes mitochondrial functional impairment and decreases glucose tolerance in healthy volunteers. *Cell Metab* 2021. PMID 33740420, doi:10.1016/j.cmet.2021.02.017
- [exr-zhou2022] Zhou Z, Chen C, Teo EC, et al. Intracellular Oxidative Stress Induced by Physical Exercise in Adults: Systematic Review and Meta-Analysis. *Antioxidants (Basel)* 2022. PMID 36139825, doi:10.3390/antiox11091751
- [exr-aengevaeren2017] Aengevaeren VL, Mosterd A, Braber TL, et al. Relationship Between Lifelong Exercise Volume and Coronary Atherosclerosis in Athletes. *Circulation* 2017. PMID 28450347, doi:10.1161/CIRCULATIONAHA.117.027834
- [exr-merghani2017] Merghani A, Maestrini V, Rosmini S, et al. Prevalence of Subclinical Coronary Artery Disease in Masters Endurance Athletes With a Low Atherosclerotic Risk Profile. *Circulation* 2017. PMID 28465287, doi:10.1161/CIRCULATIONAHA.116.026964
- [exr-mohlenkamp2008] Möhlenkamp S, Lehmann N, Breuckmann F, et al. Running: the risk of coronary events : Prevalence and prognostic relevance of coronary atherosclerosis in marathon runners. *Eur Heart J* 2008. PMID 18426850, doi:10.1093/eurheartj/ehn163
- [exr-debosscher2023] De Bosscher R, Dausin C, Claus P, et al. Lifelong endurance exercise and its relation with coronary atherosclerosis. *Eur Heart J* 2023. PMID 36881712, doi:10.1093/eurheartj/ehad152
- [exr-defina2019] DeFina LF, Radford NB, Barlow CE, et al. Association of All-Cause and Cardiovascular Mortality With High Levels of Physical Activity and Concurrent Coronary Artery Calcification. *JAMA Cardiol* 2019. PMID 30698608, doi:10.1001/jamacardio.2018.4628
- [exr-berry2025] Berry JD, Zabad N, Kyrouac D, et al. High-Volume Physical Activity and Clinical Coronary Artery Disease Outcomes: Findings From the Cooper Center Longitudinal Study. *Circulation* 2025. PMID 40255152, doi:10.1161/CIRCULATIONAHA.124.070335
- [exr-newman2021] Newman W, Parry-Williams G, Wiles J, et al. Risk of atrial fibrillation in athletes: a systematic review and meta-analysis. *Br J Sports Med* 2021. PMID 34253538, doi:10.1136/bjsports-2021-103994
- [exr-andersen2013] Andersen K, Farahmand B, Ahlbom A, et al. Risk of arrhythmias in 52 755 long-distance cross-country skiers: a cohort study. *Eur Heart J* 2013. PMID 23756332, doi:10.1093/eurheartj/eht188
- [exr-mozaffarian2008] Mozaffarian D, Furberg CD, Psaty BM, et al. Physical activity and incidence of atrial fibrillation in older adults: the cardiovascular health study. *Circulation* 2008. PMID 18678768, doi:10.1161/CIRCULATIONAHA.108.785626
- [exr-mishima2021] Mishima RS, Verdicchio CV, Noubiap JJ, et al. Self-reported physical activity and atrial fibrillation risk: A systematic review and meta-analysis. *Heart Rhythm* 2021. PMID 33348059, doi:10.1016/j.hrthm.2020.12.017
- [exr-morseth2016] Morseth B, Graff-Iversen S, Jacobsen BK, et al. Physical activity, resting heart rate, and atrial fibrillation: the Tromsø Study. *Eur Heart J* 2016. PMID 26966149, doi:10.1093/eurheartj/ehw059
- [exr-kunutsor2021] Kunutsor SK, Seidu S, Mäkikallio TH, et al. Physical activity and risk of atrial fibrillation in the general population: meta-analysis of 23 cohort studies involving about 2 million participants. *Eur J Epidemiol* 2021. PMID 33492548, doi:10.1007/s10654-020-00714-4
- [exr-elliott2020] Elliott AD, Linz D, Mishima R, et al. Association between physical activity and risk of incident arrhythmias in 402 406 individuals: evidence from the UK Biobank cohort. *Eur Heart J* 2020. PMID 31951255, doi:10.1093/eurheartj/ehz897
- [exr-morseth2018] Morseth B, Løchen ML, Ariansen I, et al. The ambiguity of physical activity, exercise and atrial fibrillation. *Eur J Prev Cardiol* 2018. PMID 29411631, doi:10.1177/2047487318754930
- [exr-schnohr2015] Schnohr P, O'Keefe JH, Marott JL, et al. Dose of jogging and long-term mortality: the Copenhagen City Heart Study. *J Am Coll Cardiol* 2015. PMID 25660917, doi:10.1016/j.jacc.2014.11.023
- [exr-lee2014] Lee DC, Pate RR, Lavie CJ, et al. Leisure-time running reduces all-cause and cardiovascular mortality risk. *J Am Coll Cardiol* 2014. PMID 25082581, doi:10.1016/j.jacc.2014.04.058
- [exr-mandsager2018] Mandsager K, Harb S, Cremer P, et al. Association of Cardiorespiratory Fitness With Long-term Mortality Among Adults Undergoing Exercise Treadmill Testing. *JAMA Netw Open* 2018. PMID 30646252, doi:10.1001/jamanetworkopen.2018.3605
- [exr-kokkinos2022] Kokkinos P, Faselis C, Samuel IBH, et al. Cardiorespiratory Fitness and Mortality Risk Across the Spectra of Age, Race, and Sex. *J Am Coll Cardiol* 2022. PMID 35926933, doi:10.1016/j.jacc.2022.05.031
- [exr-marijon2013] Marijon E, Tafflet M, Antero-Jacquemin J, et al. Mortality of French participants in the Tour de France (1947-2012). *Eur Heart J* 2013. PMID 24001718, doi:10.1093/eurheartj/eht347
- [exr-okeefe2012] O'Keefe JH, Patil HR, Lavie CJ, et al. Potential adverse cardiovascular effects from excessive endurance exercise. *Mayo Clin Proc* 2012. PMID 22677079, doi:10.1016/j.mayocp.2012.04.005
- [exr-kodama2009] Kodama S, Saito K, Tanaka S, et al. Cardiorespiratory fitness as a quantitative predictor of all-cause mortality and cardiovascular events in healthy men and women: a meta-analysis. *JAMA* 2009. PMID 19454641, doi:10.1001/jama.2009.681
- [exr-han2022] Han M, Qie R, Shi X, et al. Cardiorespiratory fitness and mortality from all causes, cardiovascular disease and cancer: dose-response meta-analysis of cohort studies. *Br J Sports Med* 2022. PMID 35022163, doi:10.1136/bjsports-2021-104876
- [exr-lang2024] Lang JJ, Prince SA, Merucci K, et al. Cardiorespiratory fitness is a strong and consistent predictor of morbidity and mortality among adults: an overview of meta-analyses representing over 20.9 million observations from 199 unique cohort studies. *Br J Sports Med* 2024. PMID 38599681, doi:10.1136/bjsports-2023-107849
- [exr-ross2016] Ross R, Blair SN, Arena R, et al. Importance of Assessing Cardiorespiratory Fitness in Clinical Practice: A Case for Fitness as a Clinical Vital Sign: A Scientific Statement From the American Heart Association. *Circulation* 2016. PMID 27881567, doi:10.1161/CIR.0000000000000461
- [exr-imboden2019] Imboden MT, Harber MP, Whaley MH, et al. The Association between the Change in Directly Measured Cardiorespiratory Fitness across Time and Mortality Risk. *Prog Cardiovasc Dis* 2019. PMID 30543812, doi:10.1016/j.pcad.2018.12.003
- [exr-tari2025] Tari AR, Brissach DE, Ingeström EML, et al. Survival of the fittest? Peak oxygen uptake and all-cause mortality among older adults in Norway. *Prog Cardiovasc Dis* 2025. PMID 39638222, doi:10.1016/j.pcad.2024.11.004
- [exr-kjaergaard2025] Kjaergaard AD, Ellervik C, Jessen N, et al. Cardiorespiratory Fitness, Body Composition, Diabetes, and Longevity: A 2-Sample Mendelian Randomization Study. *J Clin Endocrinol Metab* 2025. PMID 38864459, doi:10.1210/clinem/dgae393
- [exr-norris2024] Norris T, Cooper R, Garfield V, et al. Unpicking Causal Relationships Between Grip Strength and Cardiorespiratory Fitness: A Bidirectional Mendelian Randomization Study. *Scand J Med Sci Sports* 2024. PMID 39641749, doi:10.1111/sms.14775
- [exr-stensvold2020] Stensvold D, Viken H, Steinshamn SL, et al. Effect of exercise training for five years on all cause mortality in older adults-the Generation 100 study: randomised controlled trial. *BMJ* 2020. PMID 33028588, doi:10.1136/bmj.m3485
- [exr-ballin2021] Ballin M, Nordström P Does exercise prevent major non-communicable diseases and premature mortality? A critical review based on results from randomized controlled trials. *J Intern Med* 2021. PMID 34242442, doi:10.1111/joim.13353
- [exr-kujala1998] Kujala UM, Kaprio J, Sarna S, et al. Relationship of leisure-time physical activity and mortality: the Finnish twin cohort. *JAMA* 1998. PMID 9466636, doi:10.1001/jama.279.6.440
- [exr-lee2021] Lee DH, Rezende LFM, Ferrari G, et al. Physical activity and all-cause and cause-specific mortality: assessing the impact of reverse causation and measurement error in two large prospective cohorts. *Eur J Epidemiol* 2021. PMID 33428024, doi:10.1007/s10654-020-00707-3
- [exr-kankaanpaa2025] Kankaanpää A, Tolvanen A, Joensuu L, et al. The associations of long-term physical activity in adulthood with later biological ageing and all-cause mortality - a prospective twin study. *Eur J Epidemiol* 2025. PMID 39821867, doi:10.1007/s10654-024-01200-x
- [exr-montero2017] Montero D, Lundby C Refuting the myth of non-response to exercise training: 'non-responders' do respond to higher dose of training. *J Physiol* 2017. PMID 28133739, doi:10.1113/JP273480
- [exr-ross2015] Ross R, de Lannoy L, Stotz PJ Separate Effects of Intensity and Amount of Exercise on Interindividual Cardiorespiratory Fitness Response. *Mayo Clin Proc* 2015. PMID 26455890, doi:10.1016/j.mayocp.2015.07.024
- [exr-molmen2025] Mølmen KS, Almquist NW, Skattebo Ø Effects of Exercise Training on Mitochondrial and Capillary Growth in Human Skeletal Muscle: A Systematic Review and Meta-Regression. *Sports Med* 2025. PMID 39390310, doi:10.1007/s40279-024-02120-2
- [exr-macinnis2017a] MacInnis MJ, Zacharewicz E, Martin BJ, et al. Superior mitochondrial adaptations in human skeletal muscle after interval compared to continuous single-leg cycling matched for total work. *J Physiol* 2017. PMID 27396440, doi:10.1113/JP272570
- [exr-macinnis2019] MacInnis MJ, Skelly LE, Gibala MJ CrossTalk proposal: Exercise training intensity is more important than volume to promote increases in human skeletal muscle mitochondrial content. *J Physiol* 2019. PMID 31309577, doi:10.1113/JP277633
- [exr-macinnis2017b] MacInnis MJ, Gibala MJ Physiological adaptations to interval training and the role of exercise intensity. *J Physiol* 2017. PMID 27748956, doi:10.1113/JP273196
- [exr-bishop2019] Bishop DJ, Botella J, Granata C CrossTalk opposing view: Exercise training volume is more important than training intensity to promote increases in mitochondrial content. *J Physiol* 2019. PMID 31309570, doi:10.1113/JP277634
- [exr-granata2018] Granata C, Jamnick NA, Bishop DJ Training-Induced Changes in Mitochondrial Content and Respiratory Function in Human Skeletal Muscle. *Sports Med* 2018. PMID 29934848, doi:10.1007/s40279-018-0936-y
- [exr-storoschuk2025] Storoschuk KL, Moran-MacDonald A, Gibala MJ, et al. Much Ado About Zone 2: A Narrative Review Assessing the Efficacy of Zone 2 Training for Improving Mitochondrial Capacity and Cardiorespiratory Fitness in the General Population. *Sports Med* 2025. PMID 40560504, doi:10.1007/s40279-025-02261-y
- [exr-milanovic2015] Milanović Z, Sporiš G, Weston M Effectiveness of High-Intensity Interval Training (HIT) and Continuous Endurance Training for VO2max Improvements: A Systematic Review and Meta-Analysis of Controlled Trials. *Sports Med* 2015. PMID 26243014, doi:10.1007/s40279-015-0365-0
- [exr-weston2014] Weston KS, Wisløff U, Coombes JS High-intensity interval training in patients with lifestyle-induced cardiometabolic disease: a systematic review and meta-analysis. *Br J Sports Med* 2014. PMID 24144531, doi:10.1136/bjsports-2013-092576
- [exr-wewege2017] Wewege M, van den Berg R, Ward RE, et al. The effects of high-intensity interval training vs. moderate-intensity continuous training on body composition in overweight and obese adults: a systematic review and meta-analysis. *Obes Rev* 2017. PMID 28401638, doi:10.1111/obr.12532
- [exr-torresrojo2025] Torres-Rojo FI, Enríquez-Del Castillo LA, González-Chávez SA, et al. Effect of exercise intensity on redox biomarkers in healthy adults: A systematic review and meta-analysis of randomized clinical trials. *PLoS One* 2025. PMID 40834031, doi:10.1371/journal.pone.0330185
- [exr-momma2022] Momma H, Kawakami R, Honda T, et al. Muscle-strengthening activities are associated with lower risk and mortality in major non-communicable diseases: a systematic review and meta-analysis of cohort studies. *Br J Sports Med* 2022. PMID 35228201, doi:10.1136/bjsports-2021-105061
- [exr-shailendra2022] Shailendra P, Baldock KL, Li LSK, et al. Resistance Training and Mortality Risk: A Systematic Review and Meta-Analysis. *Am J Prev Med* 2022. PMID 35599175, doi:10.1016/j.amepre.2022.03.020
- [exr-kamada2017] Kamada M, Shiroma EJ, Buring JE, et al. Strength Training and All-Cause, Cardiovascular Disease, and Cancer Mortality in Older Women: A Cohort Study. *J Am Heart Assoc* 2017. PMID 29089346, doi:10.1161/JAHA.117.007677
- [exr-shailendra2024] Shailendra P, Baldock KL, Li LSK, et al. Weight training and risk of all-cause, cardiovascular disease and cancer mortality among older adults. *Int J Epidemiol* 2024. PMID 38831478, doi:10.1093/ije/dyae074
- [exr-gorzelitz2022] Gorzelitz J, Trabert B, Katki HA, et al. Independent and joint associations of weightlifting and aerobic activity with all-cause, cardiovascular disease and cancer mortality in the Prostate, Lung, Colorectal and Ovarian Cancer Screening Trial. *Br J Sports Med* 2022. PMID 36167669, doi:10.1136/bjsports-2021-105315
- [exr-rahmati2025] Rahmati M, Lee H, Lee H, et al. Associations Between Exercise Training, Physical Activity, Sedentary Behaviour and Mortality: An Umbrella Review of Meta-Analyses. *J Cachexia Sarcopenia Muscle* 2025. PMID 40042073, doi:10.1002/jcsm.13772
- [exr-peterson2010] Peterson MD, Rhea MR, Sen A, et al. Resistance exercise for muscular strength in older adults: a meta-analysis. *Ageing Res Rev* 2010. PMID 20385254, doi:10.1016/j.arr.2010.03.004
- [exr-li2026] Li GQ, Tang SY, Luo J, et al. The intervention effects of resistance exercise on sarcopenia in older adults: a systematic review and meta-analysis. *BMC Geriatr* 2026. PMID 42304276, doi:10.1186/s12877-026-07808-w
- [exr-fragala2019] Fragala MS, Cadore EL, Dorgo S, et al. Resistance Training for Older Adults: Position Statement From the National Strength and Conditioning Association. *J Strength Cond Res* 2019. PMID 31343601, doi:10.1519/JSC.0000000000003230
- [exr-leong2015] Leong DP, Teo KK, Rangarajan S, et al. Prognostic value of grip strength: findings from the Prospective Urban Rural Epidemiology (PURE) study. *Lancet* 2015. PMID 25982160, doi:10.1016/S0140-6736(14)62000-6
- [exr-tikkanen2018] Tikkanen E, Gustafsson S, Amar D, et al. Biological Insights Into Muscular Strength: Genetic Findings in the UK Biobank. *Sci Rep* 2018. PMID 29691431, doi:10.1038/s41598-018-24735-y
- [exr-cordeiro2025] Cordeiro LS, Linhares DG, Castro JBP, et al. Impacts of Resistance Training on Endogenous Antioxidants in Older Individuals: A Systematic Review and Meta-Analysis of Randomized Controlled Trials. *J Phys Act Health* 2025. PMID 39914379, doi:10.1123/jpah.2024-0281
- [exr-chenhuichen2026] Chenhuichen C, Ezzatvar Y, Zambom-Ferraresi F, et al. Impact of supervised physical exercise on inflammatory and oxidative stress biomarkers in older adults: a systematic review and meta-analysis of randomized controlled trials. *Gerontologist* 2026. PMID 42786581, doi:10.1093/geront/gnag228
- [exr-ristow2009] Ristow M, Zarse K, Oberbach A, et al. Antioxidants prevent health-promoting effects of physical exercise in humans. *Proc Natl Acad Sci U S A* 2009. PMID 19433800, doi:10.1073/pnas.0903485106
- [exr-gomezcabrera2008] Gomez-Cabrera MC, Domenech E, Romagnoli M, et al. Oral administration of vitamin C decreases muscle mitochondrial biogenesis and hampers training-induced adaptations in endurance performance. *Am J Clin Nutr* 2008. PMID 18175748, doi:10.1093/ajcn/87.1.142
- [exr-paulsen2014a] Paulsen G, Cumming KT, Holden G, et al. Vitamin C and E supplementation hampers cellular adaptation to endurance training in humans: a double-blind, randomised, controlled trial. *J Physiol* 2014. PMID 24492839, doi:10.1113/jphysiol.2013.267419
- [exr-paulsen2014b] Paulsen G, Hamarsland H, Cumming KT, et al. Vitamin C and E supplementation alters protein signalling after a strength training session, but not muscle growth during 10 weeks of training. *J Physiol* 2014. PMID 25384788, doi:10.1113/jphysiol.2014.279950
- [exr-bjornsen2016] Bjørnsen T, Salvesen S, Berntsen S, et al. Vitamin C and E supplementation blunts increases in total lean body mass in elderly men after strength training. *Scand J Med Sci Sports* 2016. PMID 26129928, doi:10.1111/sms.12506
- [exr-stunes2017] Stunes AK, Syversen U, Berntsen S, et al. High doses of vitamin C plus E reduce strength training-induced improvements in areal bone mineral density in elderly men. *Eur J Appl Physiol* 2017. PMID 28382551, doi:10.1007/s00421-017-3588-y
- [exr-yfanti2010] Yfanti C, Akerström T, Nielsen S, et al. Antioxidant supplementation does not alter endurance training adaptation. *Med Sci Sports Exerc* 2010. PMID 20019626, doi:10.1249/MSS.0b013e3181cd76be
- [exr-yfanti2011] Yfanti C, Nielsen AR, Akerström T, et al. Effect of antioxidant supplementation on insulin sensitivity in response to endurance exercise training. *Am J Physiol Endocrinol Metab* 2011. PMID 21325105, doi:10.1152/ajpendo.00207.2010
- [exr-morrison2015] Morrison D, Hughes J, Della Gatta PA, et al. Vitamin C and E supplementation prevents some of the cellular adaptations to endurance-training in humans. *Free Radic Biol Med* 2015. PMID 26482865, doi:10.1016/j.freeradbiomed.2015.10.412
- [exr-clifford2020] Clifford T, Jeffries O, Stevenson EJ, et al. The effects of vitamin C and E on exercise-induced physiological adaptations: a systematic review and Meta-analysis of randomized controlled trials. *Crit Rev Food Sci Nutr* 2020. PMID 31851538, doi:10.1080/10408398.2019.1703642
- [exr-dutra2020] Dutra MT, Martins WR, Ribeiro ALA, et al. The Effects of Strength Training Combined with Vitamin C and E Supplementation on Skeletal Muscle Mass and Strength: A Systematic Review and Meta-Analysis. *J Sports Med (Hindawi Publ Corp)* 2020. PMID 31970196, doi:10.1155/2020/3505209
- [exr-mason2020] Mason SA, Trewin AJ, Parker L, et al. Antioxidant supplements and endurance exercise: Current evidence and mechanistic insights. *Redox Biol* 2020. PMID 32127289, doi:10.1016/j.redox.2020.101471
- [exr-higgins2020] Higgins MR, Izadi A, Kaviani M Antioxidants and Exercise Performance: With a Focus on Vitamin E and C Supplementation. *Int J Environ Res Public Health* 2020. PMID 33203106, doi:10.3390/ijerph17228452
- [exr-nikolaidis2012] Nikolaidis MG, Kerksick CM, Lamprecht M, et al. Does vitamin C and E supplementation impair the favorable adaptations of regular exercise? *Oxid Med Cell Longev* 2012. PMID 22928084, doi:10.1155/2012/707941
- [exr-gliemann2013] Gliemann L, Schmidt JF, Olesen J, et al. Resveratrol blunts the positive effects of exercise training on cardiovascular health in aged men. *J Physiol* 2013. PMID 23878368, doi:10.1113/jphysiol.2013.258061
- [exr-olesen2014] Olesen J, Gliemann L, Biensø R, et al. Exercise training, but not resveratrol, improves metabolic and inflammatory status in skeletal muscle of aged men. *J Physiol* 2014. PMID 24514907, doi:10.1113/jphysiol.2013.270256
- [exr-scribbans2014] Scribbans TD, Ma JK, Edgett BA, et al. Resveratrol supplementation does not augment performance adaptations or fibre-type-specific responses to high-intensity interval training in humans. *Appl Physiol Nutr Metab* 2014. PMID 25211703, doi:10.1139/apnm-2014-0070
- [exr-smoliga2013] Smoliga JM, Blanchard OL Recent data do not provide evidence that resveratrol causes 'mainly negative' or 'adverse' effects on exercise training in humans. *J Physiol* 2013. PMID 24130323, doi:10.1113/jphysiol.2013.262956
- [exr-martineznegrin2022] Martinez-Negrin G, Acton JP, Cocksedge SP, et al. The effect of dietary (poly)phenols on exercise-induced physiological adaptations: A systematic review and meta-analysis of human intervention trials. *Crit Rev Food Sci Nutr* 2022. PMID 33356471, doi:10.1080/10408398.2020.1860898
- [exr-kressler2011] Kressler J, Millard-Stafford M, Warren GL Quercetin and endurance exercise capacity: a systematic review and meta-analysis. *Med Sci Sports Exerc* 2011. PMID 21606866, doi:10.1249/MSS.0b013e31822495a7
- [exr-pelletier2013] Pelletier DM, Lacerte G, Goulet ED Effects of quercetin supplementation on endurance performance and maximal oxygen consumption: a meta-analysis. *Int J Sport Nutr Exerc Metab* 2013. PMID 22805526, doi:10.1123/ijsnem.23.1.73
- [exr-rhodes2017] Rhodes K, Braakhuis A Performance and Side Effects of Supplementation with N-Acetylcysteine: A Systematic Review and Meta-Analysis. *Sports Med* 2017. PMID 28102488, doi:10.1007/s40279-017-0677-3
- [exr-paschalis2018] Paschalis V, Theodorou AA, Margaritelis NV, et al. N-acetylcysteine supplementation increases exercise performance and reduces oxidative stress only in individuals with low levels of glutathione. *Free Radic Biol Med* 2018. PMID 29233792, doi:10.1016/j.freeradbiomed.2017.12.007
- [exr-margaritelis2018b] Margaritelis NV, Paschalis V, Theodorou AA, et al. Antioxidants in Personalized Nutrition and Exercise. *Adv Nutr* 2018. PMID 30256898, doi:10.1093/advances/nmy052
- [exr-ekelund2016] Ekelund U, Steene-Johannessen J, Brown WJ, et al. Does physical activity attenuate, or even eliminate, the detrimental association of sitting time with mortality? A harmonised meta-analysis of data from more than 1 million men and women. *Lancet* 2016. PMID 27475271, doi:10.1016/S0140-6736(16)30370-1
- [exr-dirks2020] Dirks ML, Miotto PM, Goossens GH, et al. Short-term bed rest-induced insulin resistance cannot be explained by increased mitochondrial H(2) O(2) emission. *J Physiol* 2020. PMID 31721213, doi:10.1113/JP278920
- [exr-edwards2021] Edwards SJ, Shad BJ, Marshall RN, et al. Short-term step reduction reduces citrate synthase activity without altering skeletal muscle markers of oxidative metabolism or insulin-mediated signaling in young males. *J Appl Physiol (1985)* 2021. PMID 34734783, doi:10.1152/japplphysiol.00650.2021
- [exr-takahashi2015] Takahashi M, Miyashita M, Park JH, et al. Effects of Breaking Sitting by Standing and Acute Exercise on Postprandial Oxidative Stress. *Asian J Sports Med* 2015. PMID 26448856, doi:10.5812/asjsm.24902
- [exr-dunstan2012] Dunstan DW, Kingwell BA, Larsen R, et al. Breaking up prolonged sitting reduces postprandial glucose and insulin responses. *Diabetes Care* 2012. PMID 22374636, doi:10.2337/dc11-1931
- [exr-loh2020] Loh R, Stamatakis E, Folkerts D, et al. Effects of Interrupting Prolonged Sitting with Physical Activity Breaks on Blood Glucose, Insulin and Triacylglycerol Measures: A Systematic Review and Meta-analysis. *Sports Med* 2020. PMID 31552570, doi:10.1007/s40279-019-01183-w
- [exr-buffey2022] Buffey AJ, Herring MP, Langley CK, et al. The Acute Effects of Interrupting Prolonged Sitting Time in Adults with Standing and Light-Intensity Walking on Biomarkers of Cardiometabolic Health in Adults: A Systematic Review and Meta-analysis. *Sports Med* 2022. PMID 35147898, doi:10.1007/s40279-022-01649-4
- [exr-reynolds2016] Reynolds AN, Mann JI, Williams S, et al. Advice to walk after meals is more effective for lowering postprandial glycaemia in type 2 diabetes mellitus than advice that does not specify timing: a randomised crossover study. *Diabetologia* 2016. PMID 27747394, doi:10.1007/s00125-016-4085-2
- [exr-dipietro2013] DiPietro L, Gribok A, Stevens MS, et al. Three 15-min bouts of moderate postmeal walking significantly improves 24-h glycemic control in older people at risk for impaired glucose tolerance. *Diabetes Care* 2013. PMID 23761134, doi:10.2337/dc13-0084
- [exr-kang2023] Kang J, Fardman BM, Ratamess NA, et al. Efficacy of Postprandial Exercise in Mitigating Glycemic Responses in Overweight Individuals and Individuals with Obesity and Type 2 Diabetes-A Systematic Review and Meta-Analysis. *Nutrients* 2023. PMID 37892564, doi:10.3390/nu15204489
- [exr-gaskins2015] Gaskins AJ, Mendiola J, Afeiche M, et al. Physical activity and television watching in relation to semen quality in young men. *Br J Sports Med* 2015. PMID 23380634, doi:10.1136/bjsports-2012-091644
- [exr-zou2018] Zou P, Wang X, Sun L, et al. Semen Quality in Chinese College Students: Associations With Depression and Physical Activity in a Cross-Sectional Study. *Psychosom Med* 2018. PMID 29794946, doi:10.1097/PSY.0000000000000595
- [exr-vaamonde2012] Vaamonde D, Da Silva-Grigoletto ME, García-Manso JM, et al. Physically active men show better semen parameters and hormone values than sedentary men. *Eur J Appl Physiol* 2012. PMID 22234399, doi:10.1007/s00421-011-2304-6
- [exr-minguezalarcon2014] Mínguez-Alarcón L, Chavarro JE, Mendiola J, et al. Physical activity is not related to semen quality in young healthy men. *Fertil Steril* 2014. PMID 25064411, doi:10.1016/j.fertnstert.2014.06.032
- [exr-wise2011] Wise LA, Cramer DW, Hornstein MD, et al. Physical activity and semen quality among men attending an infertility clinic. *Fertil Steril* 2011. PMID 21122845, doi:10.1016/j.fertnstert.2010.11.006
- [exr-wise2025] Wise LA, Wang TR, Ulrichsen SP, et al. A prospective study of male physical activity and fecundability. *Hum Reprod* 2025. PMID 39680487, doi:10.1093/humrep/deae275
- [exr-ibanezperez2019] Ibañez-Perez J, Santos-Zorrozua B, Lopez-Lopez E, et al. An update on the implication of physical activity on semen quality: a systematic review and meta-analysis. *Arch Gynecol Obstet* 2019. PMID 30671700, doi:10.1007/s00404-019-05045-8
- [exr-hajizadehmaleki2017] Hajizadeh Maleki B, Tartibian B, Chehrazi M The effects of three different exercise modalities on markers of male reproduction in healthy subjects: a randomized controlled trial. *Reproduction* 2017. PMID 27920258, doi:10.1530/REP-16-0318
- [exr-lane2019] Lane AR, Magallanes CA, Hackney AC Reproductive Dysfunction from Exercise Training: The "Exercise-Hypogonadal Male Condition". *Arch Med Deporte* 2019. PMID 32724267
- [exr-hackney2008] Hackney AC Effects of endurance exercise on the reproductive system of men: the "exercise-hypogonadal male condition". *J Endocrinol Invest* 2008. PMID 19092301, doi:10.1007/BF03346444
- [exr-desouza1994] De Souza MJ, Arce JC, Pescatello LS, et al. Gonadal hormones and semen quality in male runners. A volume threshold effect of endurance training. *Int J Sports Med* 1994. PMID 8002116, doi:10.1055/s-2007-1021075
- [exr-vaamonde2018] Vaamonde D, Algar-Santacruz C, Abbasi A, et al. Sperm DNA fragmentation as a result of ultra-endurance exercise training in male athletes. *Andrologia* 2018. PMID 28295487, doi:10.1111/and.12793
- [exr-hackney2017] Hackney AC, Lane AR, Register-Mihalik J, et al. Endurance Exercise Training and Male Sexual Libido. *Med Sci Sports Exerc* 2017. PMID 28195945, doi:10.1249/MSS.0000000000001235
- [exr-mountjoy2023] Mountjoy M, Ackerman KE, Bailey DM, et al. 2023 International Olympic Committee's (IOC) consensus statement on Relative Energy Deficiency in Sport (REDs). *Br J Sports Med* 2023. PMID 37752011, doi:10.1136/bjsports-2023-106994
- [exr-cupka2023] Cupka M, Sedliak M Hungry runners - low energy availability in male endurance athletes and its impact on performance and testosterone: mini-review. *Eur J Transl Myol* 2023. PMID 37052052, doi:10.4081/ejtm.2023.11104
- [exr-hackney2020] Hackney AC Hypogonadism in Exercising Males: Dysfunction or Adaptive-Regulatory Adjustment? *Front Endocrinol (Lausanne)* 2020. PMID 32082255, doi:10.3389/fendo.2020.00011
- [exr-aerts2024] Aerts A, Temmerman A, Vanhie A, et al. The Effect of Endurance Exercise on Semen Quality in Male Athletes: A Systematic Review. *Sports Med Open* 2024. PMID 38861008, doi:10.1186/s40798-024-00739-z
- [exr-wise2012] Wise LA, Rothman KJ, Mikkelsen EM, et al. A prospective cohort study of physical activity and time to pregnancy. *Fertil Steril* 2012. PMID 22425198, doi:10.1016/j.fertnstert.2012.02.025
- [exr-gudmundsdottir2009] Gudmundsdottir SL, Flanders WD, Augestad LB Physical activity and fertility in women: the North-Trøndelag Health Study. *Hum Reprod* 2009. PMID 19801570, doi:10.1093/humrep/dep337
