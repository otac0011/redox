# Exercise, lifestyle and environment

Area id: `lifestyle`. Structured data: `data/lifestyle.json` (31 factors, 96 references, every one checked against its PubMed record during this research pass).

Citations are given as `[id]` and match the `references` array in the JSON. Most human studies here use **urinary or plasma F2-isoprostanes** (8-iso-PGF2α and its metabolites), the best-validated marker of lipid peroxidation in living people. Cruder markers (malondialdehyde/TBARS, "total antioxidant capacity", "total oxidant status") show up often in small trials and are weaker evidence. Urinary 8-OHdG reflects oxidative DNA damage *and* repair, so it can move in confusing directions.

---

## Biggest levers

Ranked by real-world effect on systemic oxidative stress multiplied by how sure we are of it. This is a judgement call, but every step is grounded below.

1. **Not smoking (quitting if you do).** Smokers have roughly double the circulating F2-isoprostanes of non-smokers, and the rise tracks dose: heavy smokers excrete about 3.3 times and moderate smokers about 1.7 times the non-smoker level [morrow1995][reilly1996]. Quitting lowers isoprostanes within days, by about 20-40% at 2-3 weeks, reaching a new baseline at around 4 weeks [morrow1995][reilly1996][pilz2000], and the drop holds at one year despite the weight gain [king2017]. Cutting down is not enough: going from about 27 to 18 cigarettes a day changed no harm marker except carbon monoxide [joseph2008]. Nothing else on this list has an effect this large, this fast, and this well replicated. Secondhand smoke belongs here too: brief exposures produce vascular effects averaging 80-90% of active smoking [barnoya2005][otsuka2001].

2. **Losing excess body fat, especially visceral fat, if overweight.** BMI is an independent correlate of urinary isoprostanes in a 2,828-person community cohort [keaney2003], and visceral fat is the stronger link [pou2007]. A 12-month RCT in 439 overweight women found a calorie-restricted diet cut F2-isoprostanes by about 23% versus 3% in controls, with bigger reductions at greater weight loss [duggan2016]. Even in non-obese people, two years of 25% calorie restriction lowered isoprostanes 13-17% [ilyasova2018]. Bariatric surgery in severe obesity brings markers down over a year [monzobeltran2017].

3. **Regular exercise that actually improves fitness.** Each session raises ROS briefly; repeated sessions train the body's own antioxidant enzymes (hormesis, Nrf2, PGC-1α) [radak2008][powers2016][done2016]. In a 12-month RCT, women whose aerobic fitness rose more than 15% lowered F2-isoprostanes by 14% [campbell2010]. Vigorous training improved redox markers more than gentle training in a meta-analysis of RCTs [torresrojo2025]. Exercise also feeds levers 2 and 4.

4. **Keeping blood sugar in range.** People with type 2 diabetes excreted about 75% more 8-iso-PGF2α than controls, and the excess tracked glucose swings (r = 0.86) more than average glucose [monnier2006]. Diabetes and glucose are independent correlates of isoprostanes at population level [keaney2003]. Mechanistically, high glucose overloads mitochondria with superoxide [brownlee2001].

5. **Limiting alcohol.** Four drinks a day of red wine for four weeks raised urinary 8-iso-PGF2α compared with the same wine without alcohol [schrieks2013]; alcohol raises isoprostanes in healthy volunteers [meagher1999] and induces the ROS-leaking enzyme CYP2E1 [lu2008]. All-cause mortality rises above about 100 g of alcohol a week [wood2018].

6. **Cleaner air.** Fine particles raise oxidative markers within days [li2020][kelly2017]. HEPA purifiers halved indoor PM2.5 and lowered 8-isoprostane and inflammatory markers in sham-controlled trials [chen2015][wang2021]. The per-person effect is moderate, but it applies to everyone in polluted places.

7. **Enough sleep, and treating sleep apnea.** Six weeks of 1.5 h less sleep raised endothelial oxidative stress in a randomized crossover trial [shah2023]; CPAP raises antioxidant capacity in sleep apnea [hosseini2023].

8. **Not undoing your training with megadose antioxidants.** Gram-level vitamin C plus vitamin E blunted several training adaptations in RCTs [ristow2009][paulsen2014][bjornsen2016], though a meta-analysis finds no clear loss of fitness or strength [clifford2020]. No upside, possible downside.

9. **Smaller levers:** sun protection for skin [hughes2013], treating gum disease [liu2014][dasilva2018], reducing heavy-metal exposure (mainly by not smoking) [urbano2022], managing chronic stress and depression [black2015].

10. **Little or no measurable effect:** sauna and cold plunges (for oxidative stress specifically; sauna harms sperm), meditation (small benefit at most), plastics avoidance (unproven), hydrogen water, grounding, ozone therapy and IV glutathione.

---

## 1. Exercise

### The paradox: exercise makes ROS, and that is the point

Working muscle produces superoxide and hydrogen peroxide from mitochondria, NADPH oxidases and xanthine oxidase [powers2016]. Thirty years of studies show that a hard session raises oxidative markers for hours [radak2008]. Those ROS are signals: they oxidize KEAP1 and release Nrf2, which turns on the genes for glutathione synthesis, SOD, catalase and HO-1 [done2016], and they activate PGC-1α-driven mitochondrial biogenesis [gomezcabrera2008]. Repeated small doses leave the body better defended, a textbook case of hormesis with a bell-shaped dose-response [radak2008].

### Dose-response

- **Moderate aerobic training.** WHO recommends 150-300 min a week of moderate activity or 75-150 min of vigorous activity, plus muscle strengthening on at least 2 days [bull2020]. The best oxidative-stress RCT used at least 45 min a day, 5 days a week, at 60-75% of maximum heart rate for a year in sedentary overweight women: F2-isoprostanes fell 6% overall (not significant), but 14% in women who gained more than 15% in VO2max [campbell2010]. In a larger trial, exercise alone lowered isoprostanes 14.5%, not significant after correction for multiple comparisons, while exercisers who gained fitness had significant drops [duggan2016]. **What counts is getting fitter, not logging minutes.**
- **Vigorous and interval training.** A 2025 meta-analysis of 7 RCTs (267 healthy adults) found training raised antioxidant capacity and lowered oxidant markers overall, with the effect carried by vigorous protocols [torresrojo2025]. A 2022 meta-analysis found the oxidative burden depends on intensity *times* volume; moderate continuous exercise and low-volume HIIT carried the lowest risk of large oxidative stress in unhealthy adults [zhou2022]. A typical evidence-based HIIT session is 4-6 intervals of 4-6 minutes above 90% of maximum heart rate [paulsen2014].
- **Resistance training.** In older adults, strength training raised glutathione peroxidase but did not change catalase or total antioxidant activity, and slightly lowered SOD [cordeiro2025]. Its main value is muscle and metabolism, not "antioxidant" effects.
- **Trained vs untrained.** Effects on resting markers are largest in sedentary, overweight or unwell people [campbell2010][zhou2022]; in already-fit healthy people, resting markers move little.

### Too much

A 50 km ultramarathon (about 6.5 hours) raised plasma F2-isoprostanes from 75 to 131 pg/ml, with recovery by 24 hours [mastaloudis2001]. An overreaching resistance-training block raised urinary isoprostanes 7-fold and lowered glutathione by 31%, and the markers tracked the performance drop [margonis2007]. When training load was ramped up over four weeks, the hardest week caused a sharp fall in mitochondrial function and worse glucose tolerance [flockhart2021]. Occasional long events in trained people are not a problem; chronic under-recovery is.

### Antioxidant supplements and training: the key finding and the nuance

- **Ristow 2009:** 1000 mg vitamin C plus 400 IU vitamin E daily during 4 weeks of training abolished the training-induced rise in insulin sensitivity and in ROS-responsive gene expression [ristow2009].
- **Gomez-Cabrera 2008:** vitamin C hampered endurance gains and mitochondrial-biogenesis signalling in rats; the human arm was tiny [gomezcabrera2008].
- **Paulsen 2014:** 1000 mg vitamin C plus 235 mg vitamin E for 11 weeks did not change VO2max gains (8% in both groups) but blunted increases in muscle mitochondrial markers [paulsen2014].
- **Bjørnsen 2016:** in men aged 60-81, 500 mg vitamin C plus 117.5 mg vitamin E around strength sessions cut lean-mass gain to 1.4% from 3.9% [bjornsen2016].
- **Against:** 500 mg vitamin C plus 400 IU vitamin E for 12 weeks did not change insulin-sensitivity gains [yfanti2011], and a meta-analysis of 18 small RCTs found no significant loss of VO2max, endurance, lean mass or strength [clifford2020].

**Bottom line:** megadoses blunt some molecular adaptations, with inconsistent effects on performance. Since they also bring no benefit, the sensible advice is to skip routine gram-level vitamin C and E during training and get antioxidants from food [mason2020].

### Sedentary time

Bed rest cut insulin sensitivity 42% in days, but did not raise muscle mitochondrial H2O2 or oxidative markers [dirks2020]. The harm from sitting runs through lost fitness, fat gain and worse glucose control rather than a direct oxidative effect. WHO advises limiting sedentary time and replacing it with any activity [bull2020].

---

## 2. Sleep and circadian rhythm

**Human evidence.** One night without sleep lowered plasma glutathione, cysteine and ATP [trivedi2017]. Six weeks of sleeping 1.5 h less than usual raised endothelial-cell oxidative stress without the expected Nrf2 antioxidant response (randomized crossover, 35 women) [shah2023]. Women sleeping 6 h or less had about 12% higher urinary 8-isoprostane than those sleeping more than 8 h [nagata2017]. Adults should sleep at least 7 h a night [watson2015].

**The Vaccaro 2020 Cell study** showed that in flies and mice, extreme sleep deprivation causes ROS to build up in the gut and that antioxidants prevented the resulting early death [vaccaro2020]. It is striking work but it is in animals under extreme conditions. It does not show that antioxidant pills can replace sleep in people.

**Shift work.** During night work, with melatonin suppressed, workers excreted only 20% as much 8-OH-dG as during night sleep, which the authors read as reduced DNA repair [bhatti2017]. A 4-week melatonin RCT in 40 night workers gave a borderline 1.8-fold increase, suggesting repair improved [zanif2025]. This is promising, not settled.

**Sleep apnea.** Repeated drops in oxygen act like ischemia-reperfusion injury; CPAP raised total antioxidant capacity in a meta-analysis (SMD 0.50) [hosseini2023].

---

## 3. Smoking, vaping and secondhand smoke

Smoking is the clearest case of a lifestyle factor causing oxidative damage in humans. Smoke carries radicals in both gas and tar phases, and tar from secondhand smoke generates hydrogen peroxide and breaks DNA in cells [bermudez1994]. In a key 1995 NEJM study, smokers had about double the plasma F2-isoprostanes of matched non-smokers, and levels fell after 2 weeks of abstinence [morrow1995]. Urinary 8-epi-PGF2α rises with dose (heavy 177, moderate 93, non-smokers 54 pmol/mmol creatinine) and falls within 2-3 weeks of quitting; switching to nicotine patches did not stop the fall [reilly1996]. In 47 adults, isoprostanes dropped within days and reached a steady state about 4 weeks after quitting [pilz2000]. In 1,652 smokers, quitters had lower urinary F2-isoprostanes at one year despite gaining about 4 pounds [king2017]. Smoking is an independent correlate of isoprostanes in the Framingham cohort [keaney2003].

**How fast you recover.** Oxidative markers: days to about 4 weeks [pilz2000]. Cardiovascular risk: about 39% lower within 5 years than for continuing smokers, but heavy smokers' risk stays above never-smokers for 10-15 years or more [duncan2019].

**Cutting down does not do the job.** A randomized trial got smokers with heart disease down from 27 to 18 cigarettes a day; F2-isoprostanes and inflammatory markers did not change [joseph2008].

**Vaping.** A single e-cigarette raised 8-iso-PGF2α and NOX2 activation and impaired artery dilation, though less than a tobacco cigarette [carnevale2016]. In the PATH study, former smokers who only vape had F2-isoprostanes similar to former smokers who use nothing, while dual users were 9% higher than cigarette-only smokers [christensen2021]. Vaping is less harmful than smoking but not harmless, and dual use is the worst option.

**Secondhand smoke.** It raises coronary heart disease risk by about 30%, and short exposures cause platelet, endothelial and oxidative effects averaging 80-90% of active smoking [barnoya2005]. Half an hour of passive smoking cut coronary flow reserve in healthy non-smokers [otsuka2001]. However, a study of women with modest exposure (at least 15 min on 2 days a week) found no difference in 8-isoprostane [sitihajar2018], so low-level exposure may not show up on systemic markers.

**Fertility cross-link:** smoking lowers sperm count, motility and morphology [sharma2016]; it also matters for egg health (see the fertility areas).

---

## 4. Alcohol

Ethanol is broken down by alcohol dehydrogenase and, in regular drinkers, by CYP2E1, an enzyme that leaks superoxide and hydrogen peroxide and drives lipid peroxidation in the liver [lu2008]. The breakdown product acetaldehyde forms adducts and uses up glutathione [lu2008]. Alcohol raised urinary isoprostanes in healthy volunteers, and levels were highest in alcoholic cirrhosis [meagher1999]. The "red wine is antioxidant" idea fails a direct test: 450 ml of red wine a day (about 4 drinks, 41 g alcohol) for four weeks raised urinary 8-iso-PGF2α compared with the same wine dealcoholized [schrieks2013]. Across 599,912 drinkers, mortality was lowest at or below about 100 g a week (about 7 US standard drinks) and rose above it [wood2018]. Less is better; binges are worst.

---

## 5. Obesity and weight loss

Fat tissue is an active ROS source. In obese mice, adipose NADPH oxidase produces ROS that disturb fat-cell hormones, and fat accumulation correlates with systemic oxidative stress in people [furukawa2004]. In Framingham, BMI predicted urinary isoprostanes independently of other risk factors [keaney2003], and visceral fat more so than fat under the skin [pou2007].

Weight-loss trials show the effect is reversible: a 12-month diet arm lowered F2-isoprostanes by 22.7% and diet plus exercise by 23.5%, versus 3% in controls [duggan2016]. Two years of calorie restriction in non-obese adults lowered isoprostanes 13-17% [ilyasova2018]. After sleeve gastrectomy, isoprostanes and 8-oxo-dG fell steadily and antioxidant enzymes recovered over one year [monzobeltran2017].

One caveat: in the IRAS cohort, higher isoprostanes were linked to obesity at baseline but some forms predicted *less* weight gain later, a reminder that the marker partly reflects metabolic rate [ilyasova2012].

**Fertility cross-link:** obesity raises the odds of low or absent sperm count (OR 1.28; 2.04 in morbid obesity) [sermondade2013].

---

## 6. Air pollution, occupational and indoor air

Particles carry metals and quinones that cycle electrons, activate NADPH oxidase and set off inflammation; oxidative stress is considered central to pollution's cardiovascular effects [kelly2017]. Each 10 µg/m³ rise in short-term PM2.5 is associated with about 1.6% more malondialdehyde [li2020]. WHO's 2021 guidelines set annual PM2.5 at 5 µg/m³ and peak-season 8-hour ozone at 60 µg/m³ [hoffmann2021].

**HEPA filters work in randomized trials.** In Shanghai dormitories, 48 hours of real versus sham purification cut indoor PM2.5 from 96 to 41 µg/m³ and lowered myeloperoxidase by 33% and blood pressure [chen2015]. In Beijing, a week of HEPA filtration lowered 8-isoprostane and exhaled NO and improved lung function [wang2021]. These were short trials in healthy young people in heavily polluted cities.

**Wood smoke and gas stoves.** Four hours at 240-280 µg/m³ wood smoke raised exhaled-breath malondialdehyde [barregard2008], but three hours at up to 354 µg/m³ had no effect on DNA oxidation or systemic markers in another trial [forchhammer2012]. A 2013 meta-analysis linked gas cooking to childhood asthma (OR 1.32) [lin2013]; a 2023 systematic review judged that literature too heterogeneous and low-quality to prove causation [li2023]. Venting cooking fumes outdoors is cheap insurance.

---

## 7. UV and sun vs vitamin D

UV drives skin aging through direct DNA damage and through ROS that oxidize lipids, proteins and DNA [kammeyer2015]. In the Nambour RCT, daily sunscreen for 4.5 years gave 24% less skin aging than discretionary use, while beta-carotene pills did nothing [hughes2013]. Lab work shows organic filters that soak into the skin can increase UV-induced ROS after about an hour, which argues for reapplying [hanson2006]. Vitamin D can be kept adequate without tanning; vitamin D3 at 2000 IU a day did not prevent cancer or heart disease in a 25,871-person trial [manson2019]. The evidence here is about skin; normal sun exposure's effect on whole-body oxidative markers is not well documented.

---

## 8. Psychological stress and mind-body practices

In 58 women, higher perceived stress went with higher oxidative stress, lower telomerase and telomeres shorter by about a decade's worth of aging [epel2004]. Depression is associated with higher 8-OHdG (effect size 0.31) and F2-isoprostanes (0.48) [black2015]. Both findings are associations; stressed people also sleep, eat, drink and smoke differently.

Yoga-based practices lower cortisol, blood pressure and heart rate compared with active controls [pascoe2017], and mind-body practices are associated with lower NF-κB inflammatory gene expression [buric2017]. Direct oxidative evidence is thin: a 29-person yoga trial lowered malondialdehyde versus a wait-list but did not change antioxidants [hegde2013]. **Grade: limited.** Worth doing for mood and blood pressure; do not expect measurable antioxidant effects.

---

## 9. Heat and cold

**Sauna.** In 2,315 Finnish men followed for about 20 years, 4-7 sessions a week (versus one) was associated with 63% lower sudden cardiac death and lower cardiovascular and all-cause mortality, and sessions over 19 minutes were also linked to lower risk [laukkanen2015]. Frequent sauna use was linked to lower CRP and white-cell counts, but **not** to GGT, the oxidative-stress proxy measured [kunutsor2018]. Eight weeks of hot-water immersion (40.5 °C, 60 min, 4-5 times a week) doubled flow-mediated dilation in sedentary adults [brunt2016]. The mechanisms proposed are vascular and autonomic [laukkanen2018]; oxidative benefits are mostly assumed.

**Sauna and sperm (cross-link to sperm area).** Two 15-minute sessions a week at 80-90 °C for three months cut sperm count and motility and damaged chromatin and sperm mitochondria; everything recovered six months after stopping [garolla2013]. Men trying to conceive should skip it.

**Cold-water immersion.** Winter swimmers have higher baseline glutathione, SOD and catalase, consistent with hormesis [siems1999]. Reviews find the human literature small and heterogeneous, with some signals for insulin sensitivity and fat but no firm conclusions [esperland2022], and note real hazards from cold shock and cardiac events [tipton2017]. A 10-minute cold plunge after each strength session for 12 weeks blunted strength and muscle gains [roberts2015].

---

## 10. Environmental chemicals

Redox-active metals (iron, copper) make hydroxyl radicals through Fenton chemistry, while cadmium, lead and arsenic bind thiols and deplete glutathione [jomova2011]. In non-smoking Italian adults, urinary and dietary cadmium tracked oxidative DNA damage linearly [urbano2022]. Phthalate metabolites were associated with higher urinary 8-OHdG and 8-isoprostane in pregnant women [ferguson2015]. A large meta-analysis found associations of PFAS, PCBs, organochlorine pesticides and flame retardants with oxidative markers to be mostly inconsistent [chen2023]. Spot-urine studies are easily confounded: in one, the strongest metal associations with oxidative markers were for essential selenium and copper [kim2019]. **Grade: moderate for metals, limited for plastics and persistent pollutants.** The biggest personal cadmium source is tobacco.

---

## 11. Glycemic control, gum disease, other conditions

**Blood sugar.** See lever 4: glucose swings tracked 8-iso-PGF2α in type 2 diabetes [monnier2006], and hyperglycemia-driven mitochondrial superoxide is the proposed common trigger of diabetic damage pathways [brownlee2001].

**Periodontitis.** Chronic gum disease is associated with lower serum antioxidant capacity and higher malondialdehyde [liu2014], and periodontal treatment lowers oxidative markers in saliva, gum fluid and often serum [dasilva2018].

**Medications.** Statins and metformin have antioxidant-like effects in some studies, but the human oxidative-marker evidence was not strong enough to include them as lifestyle factors here. Their use should follow standard medical indications.

---

## 12. Popular claims

| Claim | Verdict | Evidence |
|---|---|---|
| Drink more water to fight oxidative stress | Only matters if dehydrated | 24 h of fluid restriction raised muscle H2O2 after resistance exercise [luk2025]; no evidence extra water beyond thirst helps |
| Hydrogen-rich water | Mechanistically interesting, clinically unproven | H2 selectively neutralizes hydroxyl radical and peroxynitrite in cells and rats [ohsawa2007]; a 40-person pilot reported small marker changes [zanini2021]; 7 small trials show modest lipid effects [todorovic2023] |
| Grounding / earthing | No credible mechanism | Review by advocates summarizing small, mostly unblinded studies [chevalier2012] |
| Ozone therapy | Not recommended | Ozone is a regulated pollutant [hoffmann2021]; Cochrane could draw no conclusions even for diabetic foot ulcers [liu2015] |
| IV glutathione | Not recommended | IV glutathione has a plasma half-life of about 14 minutes [aebi1991]; oral glutathione raised blood stores 17-35% but no health outcome was tested, and levels reverted within a month [richie2015] |

---

## What the evidence does not show

- That any single lifestyle change cuts a person's "oxidative stress" by a fixed amount. Most effects are 5-25% on isoprostanes, except smoking, which is larger.
- That antioxidant pills can stand in for any of the levers above. In smokers, short-term vitamin C lowered isoprostanes [reilly1996], but that is a marker change, not proof of protection.
- That acute rises in oxidative markers after exercise, heat or cold are harmful. They are often the signal that drives adaptation [radak2008][powers2016].
