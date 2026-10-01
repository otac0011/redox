# Ketosis deep dive

Area: ketogenic and low-carbohydrate diets, endogenous ketone bodies, and exogenous ketones. The structured data are in the patch file `patch-ketosis.json` (factors `ketogenic-diet`, `low-carb-diet`, `exogenous-ketones`, `ketogenic-diet-egg`, `ketogenic-diet-sperm`; all reference ids start with `ket-`). Fasting protocols and fasting duration are covered in a separate review. This one covers ketone levels in general, whatever their source.

Every reference below was checked against its PubMed record (title, PMID, DOI) on 2026-10-01, and the PubMed publication types were screened for retractions. Where an abstract was not enough, the PMC full text was read. One paper central to the "lean mass hyper-responder" debate was retracted in 2026; it is cited only through its retraction notice [ket-sotomota2026]. Evidence tags used throughout: **human RCT**, **human non-randomised**, **animal**, **cell**.

---

## Key takeaways

1. **Ketosis is a range, not a switch.**
   - Fed people have about 0.1 mmol/L beta-hydroxybutyrate (BHB) [ket-anderson2021, ket-puchalska2017].
   - A well-kept ketogenic diet usually sits around 0.5-1.5 mmol/L, sometimes up to ~3 [ket-volek2015, ket-urbain2016, ket-phillips2021, ket-needham2023].
   - Diabetic ketoacidosis means BHB of at least 3.0 mmol/L plus acidosis, and can reach ~20 mmol/L [ket-umpierrez2024, ket-puchalska2017].
   - Healthy people on diet alone rarely approach ketoacidosis. SGLT2-inhibitor users can, even when blood glucose looks normal [ket-umpierrez2024, ket-peters2015, ket-needham2023].
2. **The antioxidant story is mostly animal and cell biology.**
   - BHB has been shown to:
     - inhibit HDACs, raising FOXO3A, MnSOD and catalase in mouse kidney [ket-shimazu2013];
     - block the NLRP3 inflammasome [ket-youm2015];
     - signal through HCAR2 [ket-taggart2005].
   - Ketogenic feeding in rats triggers a hormetic Nrf2 and glutathione response [ket-milder2010, ket-jarrett2008].
   - Some of this has not held up. One group found no HDAC inhibition by BHB at all [ket-chriett2019]. In humans, raising BHB with a drink increased inflammasome activation acutely [ket-neudorf2019], though 14 days of dosing decreased it [ket-walsh2021a].
3. **Human oxidative-stress data are thin.**
   - Nobody has run a well-powered RCT with F2-isoprostanes as the outcome.
   - The small studies (2-3 weeks, 18-20 people) show no rise in oxidative damage and slightly higher antioxidant capacity [ket-nazarewicz2007, ket-rhyu2014].
   - Children on the diet have higher brain glutathione, but that study was cross-sectional [ket-napolitano2020].
   - Inflammation markers improve more consistently: CRP fell 0.62 mg/dL in a meta-analysis of 7 RCTs [ket-rondanelli2024], with similar results across 174 RCTs of carbohydrate restriction [ket-feng2025]. These changes come with weight loss and lower glucose.
4. **The strongest clinical indication is drug-resistant epilepsy.** In a 145-child RCT, 38% of children on the diet had their seizures more than halved, against 6% of controls [ket-neal2008, ket-martinmcgill2020].
5. **For type 2 diabetes it works in the short term.**
   - Remission at 6 months was 57% vs 31% in pooled RCTs of diets under 130 g/day carbohydrate, but much of the gap closed by 12 months [ket-goldenberg2021].
   - The best-known long-term programme (Virta) reports large benefits, but it is non-randomised [ket-hallberg2018, ket-bhanpuri2018].
   - DiRECT is a low-calorie formula diet, not a ketogenic diet [ket-lean2018].
6. **For weight loss there is no metabolic magic.**
   - In a metabolic ward, an isocaloric keto diet did not speed fat loss [ket-hall2016].
   - Eating freely, people ate about 690 kcal/day more on animal-based keto than on a plant-based low-fat diet [ket-hall2021].
   - Long-term, keto beats low-fat by about 1 kg [ket-bueno2013, ket-gardner2018].
7. **LDL is the main lipid concern.**
   - LDL rises 41 mg/dL on average in trials of lean people and falls in people with BMI of 35 or more [ket-sotomota2024].
   - Short controlled feeding studies in young normal-weight adults raised LDL by 44% or more and raised apoB [ket-retterstol2018, ket-buren2021].
8. **Performance.** Keto raises fat oxidation but worsens exercise economy at race intensities [ket-burke2017, ket-burke2021]. Ketone drinks do not improve performance [ket-valenzuela2020].
9. **Fertility.**
   - In overweight women with PCOS, ketogenic diets cut weight, LH and insulin resistance [ket-arsenaki2026, ket-cannarella2025].
   - In mice, ketone levels typical of the diet slow embryo development, and a gestational ketogenic diet harms offspring [ket-whatley2022, ket-whatley2024, ket-sussman2013b, ket-zala2025].
   - In humans, a periconceptional low-carbohydrate diet is linked to less folate and more neural tube defects [ket-desrosiers2018].
   - Use it to lose weight before conception, not during conception or pregnancy.

---

## 1. Definitions, ketone levels, and how to measure them

The liver makes ketone bodies (acetoacetate, BHB and a little acetone) from fatty acids when insulin is low. It can produce up to roughly 300 g a day [ket-puchalska2017]. During prolonged starvation, BHB is what keeps the brain running [ket-cahill2006].

### Ketone-level table

| State | Typical blood BHB (mmol/L) | Notes | Refs |
|---|---|---|---|
| Fed, mixed diet | ~0.1 (total ketones 0.1-0.25) | Breath acetone ~1 ppm | [ket-puchalska2017, ket-anderson2021] |
| Overnight to 24-h fast, or prolonged exercise | ~1 | | [ket-puchalska2017] |
| 2-day fast | 1-2 | Fasting depth and duration are covered in the fasting review | [ket-newman2014] |
| Nutritional ketosis (diet) | ~0.5-3 (trial means usually 0.3-1.3) | ">0.5 mmol/L" is the common threshold. BHB varies over the day: 0.33 at 10:00 vs 0.70 at 03:00 in one study | [ket-volek2015, ket-urbain2016, ket-phillips2021, ket-needham2023] |
| Strict near-zero-carb diet | >2 | | [ket-newman2014] |
| Ketone monoester drink (~12-27 g BHB) | peak 2.8-4, back to baseline in 3-4 h | A meal cuts the peak by ~1/3 | [ket-stubbs2017, ket-sotomota2019, ket-clarke2012] |
| Ketone salts (~12-24 g BHB) | peak ~1 | Half is the L-isomer | [ket-stubbs2017] |
| C8 MCT oil (2 x 20 mL) | +0.3 day-long | Coconut oil gives ~25% of C8's peak | [ket-vandenberghe2017] |
| Diabetic ketoacidosis | >=3.0 with venous pH <7.35 and bicarbonate <18; can reach ~20 | ~10% of DKA is euglycaemic | [ket-umpierrez2024, ket-puchalska2017] |

### How much carbohydrate restriction it takes

- **Trials:** ketogenic trials typically use under 20-50 g/day of carbohydrate. Examples:
  - under 50 g/day in race walkers and in the long-term weight-loss meta-analysis [ket-burke2017, ket-bueno2013];
  - under 20 g/day in a lipid trial [ket-retterstol2018];
  - under 30 g/day in a depression RCT [ket-gao2026].
- **Epilepsy:** the classic diet is 4:1 fat to protein plus carbohydrate, about 90% of energy from fat. The modified Atkins diet starts at 10-15 g/day of carbohydrate and rises to about 20 g [ket-kossoff2018].
- **Low-carbohydrate vs very-low-carbohydrate:** the BMJ diabetes meta-analysis defines a low-carbohydrate diet as under 130 g/day (under 26% of energy). Below 10% of energy counts as very-low-carbohydrate, which is the ketogenic range [ket-goldenberg2021].

### Time to keto-adaptation

- **Ketone rise:** blood ketones rise within a day or two of fasting [ket-puchalska2017, ket-newman2014].
- **Muscle adaptation:** in elite walkers, fat oxidation during exercise reached chronic-adaptation levels after just 5-6 days of a ketogenic diet [ket-burke2021].
- **Longer view:** the "keto-adaptation" literature describes several weeks of adjustment [ket-volek2015]. One RCT confirmed stable ketosis at about week 4 [ket-drabinskafois2026].

### Measurement

- **Blood (reference):** capillary BHB meters are the reference method [ket-umpierrez2024].
- **Breath:** breath acetone tracks plasma BHB about as well as urine strips (R² 0.54 for both) and tracks acetoacetate best [ket-musaveloso2002].
- **Urine:**
  - Strips measure only acetoacetate.
  - Readings vary through the day; they are most reliable in early-morning and post-dinner urine [ket-urbain2016].
  - Strips are a check on compliance, not a dose meter.

---

## 2. Mechanisms relevant to oxidative stress

### Mechanism table

| Mechanism | What was shown | Evidence level | Refs |
|---|---|---|---|
| Class I HDAC inhibition leading to FOXO3A, MnSOD, catalase and MT2 | BHB infusion in mice (blood ~1.2 mmol/L) raised kidney FOXO3A, MnSOD and catalase and halved paraquat-induced protein carbonyls and lipid peroxides. In vitro IC50 is 2-5 mmol/L | Cell + animal | [ket-shimazu2013, ket-newman2014] |
| Counterpoint: HDAC | No detectable HDAC inhibition by R-BHB in several cell types or in vivo. Butyrate was the strong inhibitor, and BHB was slightly pro-inflammatory in endothelial cells | Cell + animal | [ket-chriett2019] |
| NLRP3 inflammasome blockade | BHB blocked NLRP3 by preventing K+ efflux in mouse cells and in human monocytes in vitro; BHB or keto reduced IL-1beta in mouse disease models | Cell + animal | [ket-youm2015] |
| NLRP3 in humans | Acute ketone salts or ester raised monocyte caspase-1 activation [ket-neudorf2019]. Pre-meal ester for 14 days lowered it, with no change in plasma cytokines [ket-walsh2021a] | Human RCT (small, conflicting) | [ket-neudorf2019, ket-walsh2021a] |
| HCAR2 (GPR109A) signalling | BHB activates HCAR2 at fasting levels (EC50 ~0.77 mmol/L) and suppresses lipolysis | Cell + animal | [ket-taggart2005, ket-puchalska2017] |
| Mitochondrial redox span and efficiency (Veech) | In rat heart, ketones raised hydraulic efficiency 25% by reducing the NAD couple and oxidising coenzyme Q. Veech argues this could limit free-radical damage, and notes that the high free fatty acids of keto diets may offset it | Animal (ex vivo) + review | [ket-sato1995, ket-veech2004] |
| Nrf2 activation via mild early oxidative stress (hormesis) | In rats, keto first raised hippocampal H2O2 and 4-HNE, then activated Nrf2 and NQO1 in brain and liver by 3 weeks. Liver glutathione was chronically depleted | Animal | [ket-milder2010] |
| Glutathione | Hippocampal mitochondrial GSH doubled in rats [ket-jarrett2008]. Brain GSH was higher in children with epilepsy on keto (2.5 vs 2.0 mmol/L), cross-sectionally [ket-napolitano2020] | Animal; human cross-sectional | [ket-jarrett2008, ket-napolitano2020] |
| Muscle mitochondrial efficiency | 12 weeks of keto plus exercise raised ATP production and the ATP/H2O2 ratio by 36% with fat substrate (groups self-selected) | Human non-randomised | [ket-miller2020] |
| Counterpoint: fatty-acid oxidation produces ROS | High fat intake raised muscle mitochondrial H2O2 emission and shifted redox toward oxidation in rodents and humans | Animal + human feeding | [ket-anderson2009] |
| Counterpoint: acetoacetate chemistry | Acetoacetate (not BHB) generated superoxide, which Fe2+ potentiated, and raised lipid peroxidation in human endothelial cells | Cell | [ket-jain1998] |
| Microbiome | Keto depleted bifidobacteria (ketones inhibit their growth) and lowered intestinal Th17 cells | Human inpatient + animal | [ket-ang2020] |

### How to read this

- The cell and mouse work makes a coherent story: ketones as signals that switch on stress-resistance genes and damp innate inflammation [ket-shimazu2013, ket-youm2015, ket-milder2010].
- Two cautions:
  1. The best-known mechanism, HDAC inhibition, failed to replicate in one careful study [ket-chriett2019].
  2. The only direct human test of the inflammasome idea went the "wrong" way acutely [ket-neudorf2019].
- The Nrf2 result looks like hormesis: an early oxidant burst followed by adaptation [ket-milder2010]. That makes keto conceptually more like exercise than like an antioxidant pill.
- "More ketones = more protection" is not supported. Ketoacidosis-level ketones are pro-oxidant in vitro [ket-jain1998], and supplying high levels of fatty acid raises mitochondrial H2O2 output [ket-anderson2009].

---

## 3. Human trial evidence by outcome

### Trial-evidence-by-outcome table

| Outcome | Best evidence | Effect size | Grade | Refs |
|---|---|---|---|---|
| Oxidative-damage markers (MDA, SOD, TAS) | 2 small studies, 2-3 weeks | TAS and thiols up; MDA unchanged (healthy women), or no rise vs a rise on the control diet (athletes) | Limited | [ket-nazarewicz2007, ket-rhyu2014] |
| Brain glutathione | Cross-sectional MRS | +25% vs controls | Limited | [ket-napolitano2020] |
| CRP / IL-6 | Meta-analysis of 7 RCTs (n=218) | CRP -0.62 mg/dL; IL-6 -1.31 pg/mL (NS) | Moderate | [ket-rondanelli2024] |
| Inflammatory cytokines vs low-fat diet | RCT, 12 weeks | Greater falls in TNF-alpha, IL-6, IL-8 and MCP-1 | Limited | [ket-forsythe2008] |
| Carbohydrate restriction overall | 174 RCTs, n=11,481 | TG -15 mg/dL, SBP -2 mmHg, CRP and TNF-alpha down, HDL up, LDL +4.8 mg/dL | Moderate-strong | [ket-feng2025] |
| HbA1c / T2D remission | Meta-analysis of 23 RCTs | Remission 57% vs 31% at 6 months; benefit largely gone at 12 months | Moderate | [ket-goldenberg2021] |
| T2D, long programme | Virta, non-randomised (n=349) | HbA1c 7.6% to 6.3%, weight -13.8 kg, hsCRP -39%, LDL +10%, apoB unchanged at 1 year | Limited (non-randomised) | [ket-hallberg2018, ket-bhanpuri2018] |
| Keto vs Mediterranean in prediabetes/T2D | Crossover RCT, 12 weeks each | Same HbA1c. Keto: TG -16% vs -5%, LDL +10% vs -5%, less fibre | Moderate | [ket-gardner2022] |
| Weight, isocaloric | Metabolic ward | Energy expenditure +57-151 kcal/day, but fat loss slowed | Moderate | [ket-hall2016] |
| Weight, ad libitum | Inpatient crossover | 689 kcal/day more intake on animal-based keto vs plant-based low-fat | Moderate | [ket-hall2021] |
| Energy expenditure in weight maintenance | RCT, n=164 | +209 kcal/day at 20% vs 60% carbohydrate | Moderate (contested) | [ket-ebbeling2018] |
| Long-term weight | Meta-analysis, >=12 months; DIETFITS | -0.91 kg vs low-fat; -6.0 vs -5.3 kg | Strong (small effect) | [ket-bueno2013, ket-gardner2018] |
| LDL-C and apoB | Meta-regression (41 RCTs); feeding RCTs | +41 mg/dL if BMI <25; -7 mg/dL if BMI >=35; LDL +44% in lean young adults; apoB up | Moderate | [ket-sotomota2024, ket-retterstol2018, ket-buren2021] |
| Mortality (observational) | NHANES cohort | Unhealthy low-carb HR 1.07, healthy low-carb HR 0.91 per 20 percentiles | Limited (observational) | [ket-shan2020] |
| Epilepsy (children) | RCT + Cochrane | >50% seizure reduction in 38% vs 6%; RR 5.8 | Strong for efficacy (low-certainty GRADE due to no blinding) | [ket-neal2008, ket-martinmcgill2020] |
| Alzheimer disease | Crossover RCT, n=26 | Daily function +3.1, QoL +3.4, cognition NS | Limited | [ket-phillips2021] |
| Treatment-resistant depression | RCT, n=88 | PHQ-9 -2.2 vs control at 6 weeks (P=.05); none at 12 weeks | Limited | [ket-gao2026] |
| Depression in obesity, keto vs Mediterranean | Pilot RCT | Mediterranean better | Limited | [ket-mela2026] |
| Psoriatic disease, keto vs Mediterranean | Crossover RCT, n=26 | Keto lowered disease activity and IL-6, IL-17, IL-23 | Limited | [ket-lambadiari2024] |
| Endurance performance | Controlled diet trials in elite walkers | Economy worse; 10-km time -1.6% vs +6.6% with high carbohydrate | Moderate (harm) | [ket-burke2017, ket-burke2021] |
| Muscle / strength | Meta-analysis | Fat-free mass gain similar to control | Limited | [ket-vargasmolina2022] |
| Bone turnover (athletes) | Controlled 3.5-week trial | CTX up, P1NP and osteocalcin down | Limited (harm signal) | [ket-heikura2019] |

### Oxidative stress and inflammation

- **Direct oxidative-damage markers.** Two weeks of a calorie-restricted, 13%-carbohydrate diet in 20 healthy women gave these results [ket-nazarewicz2007]:
  - plasma total antioxidant status, uric acid and red-cell thiols rose;
  - red-cell MDA, SOD and catalase did not change.
  - Uric acid rose along with total antioxidant status, so the TAS rise may partly reflect uric acid rather than a real benefit.
- **Athletes cutting weight.** In 18 adolescent athletes, MDA rose in the non-keto group but not the keto group; ROS and SOD did not differ [ket-rhyu2014].
- **What is missing:** no ketogenic RCT has used mass-spectrometry F2-isoprostanes or 8-OHdG as a primary outcome.
- **Inflammation.** Here the human signal is consistent but modest. CRP fell in a meta-analysis of keto RCTs [ket-rondanelli2024] and across carbohydrate restriction in general [ket-feng2025].
- **Keto vs equal-calorie standard diet.** In a Mediterranean-style keto RCT at equal calories (1750 kcal), both diets lowered inflammatory markers, and keto gave more fat loss. The differences had vanished a year later [ket-drabinskafois2026].
- **Bottom line:** keto probably lowers systemic oxidative stress about as much as the weight loss and glucose control it produces. There is no human evidence for an extra, ketone-specific antioxidant effect. Compare [weight-loss] and [glycemic-control].

### Glycaemic control and type 2 diabetes

- **Pooled RCTs.** Under 130 g/day of carbohydrate raised 6-month remission (HbA1c below 6.5%) from 31% to 57%. By 12 months, remission data were sparse and LDL and quality of life trended worse [ket-goldenberg2021].
- **Virta.** The remotely coached Virta programme reported these 1-year results [ket-hallberg2018, ket-bhanpuri2018]:
  - HbA1c fell from 7.6% to 6.3% and weight by 13.8 kg;
  - insulin was cut or stopped in 94% of insulin users;
  - hsCRP fell 39%;
  - LDL-C rose 10%, apoB was unchanged, and small LDL particles fell 21%.
  - This was not randomised, and Virta funded it.
- **DiRECT is often miscited as keto.** It used an 825-853 kcal/day total-diet-replacement formula with medication withdrawal and achieved 46% remission at 12 months. Remission tracked weight lost [ket-lean2018]. It shows that weight loss, not ketosis per se, drives remission.
- **Keto-Med.** A ketogenic diet and a Mediterranean diet that both cut added sugar and refined grain gave the same HbA1c. The Mediterranean version kept LDL down and was more sustainable [ket-gardner2022].

### Weight loss: the isocaloric question

- **Metabolic ward (Hall 2016).** Under tight control, switching 17 men to an isocaloric ketogenic diet raised energy expenditure only slightly. Fat loss did not accelerate; it slowed while fat-free-mass loss increased [ket-hall2016].
- **Inpatient crossover (Hall 2021).** Eating ad libitum, people ate 689 kcal/day less on a minimally processed plant-based low-fat diet than on a minimally processed animal-based ketogenic diet [ket-hall2021].
- **Counter-finding (Ebbeling).** One large feeding trial found higher energy expenditure on low-carbohydrate diets during weight-loss maintenance [ket-ebbeling2018]. Methods for measuring expenditure in this setting are disputed.
- **Long-term trials.** Keto beats low-fat by about 0.9 kg at 12 months or more [ket-bueno2013]. In DIETFITS, healthy low-carb and healthy low-fat diets gave the same 12-month result [ket-gardner2018].

### Lipids, lean mass hyper-responders, apoB

- **Pooled trials.** Pooled RCTs show LDL rises modestly on low-carbohydrate diets [ket-bueno2013, ket-feng2025].
- **BMI drives the response.**
  - LDL rose 41 mg/dL in trials with mean BMI under 25.
  - It did not change at BMI 25-35.
  - It fell 7 mg/dL at BMI 35 and above.
  - Baseline BMI, not saturated-fat intake, explained the variation [ket-sotomota2024].
- **Lean young adults.** Controlled feeding confirms this. LDL rose 44% (individual range +5% to +107%) in normal-weight young adults on under 20 g/day [ket-retterstol2018]. It rose in every one of 17 young women, by 1.82 mmol/L, along with apoB and small dense LDL [ket-buren2021].
- **"Lean mass hyper-responders."** These are lean, metabolically healthy people with LDL around 200 to more than 500 mg/dL on keto.
  - A cross-sectional CT study found no more coronary plaque than in matched controls with lower LDL [ket-budoff2024]. That study was cross-sectional and self-selected.
  - The 2025 longitudinal follow-up claimed plaque progression was unrelated to apoB. It received an expression of concern and was then **retracted in 2026** for methodological errors [ket-sotomota2026].
- **What guidance says.** The National Lipid Association statement describes mixed LDL effects and almost no safety data beyond 2 years [ket-kirkpatrick2019].
- **Practical stance:** this review did not re-examine the general LDL/apoB causality literature. Until outcome data exist for diet-induced elevations, the prudent course is to treat a large apoB rise as a risk, not explain it away.

### Epilepsy, neurology and psychiatry

- **Epilepsy.** This remains the indication with RCT-grade efficacy. In children with drug-resistant epilepsy, seizures fell to 62% of baseline on the diet versus 137% in controls, and 38% vs 6% had a better-than-50% reduction [ket-neal2008]. Cochrane pooled RR for 50% or greater reduction is 5.8 in children [ket-martinmcgill2020]. GRADE certainty is low only because diet trials cannot be blinded.
- **Alzheimer disease.** A 12-week modified keto diet (BHB ~0.95 mmol/L) improved daily function and quality of life but not cognition [ket-phillips2021].
- **Treatment-resistant depression.** In the best-controlled RCT (n=88), keto beat a carefully matched healthy diet by 2.2 PHQ-9 points at 6 weeks, borderline significant. The difference was gone by 12 weeks [ket-gao2026].
- **Bipolar disorder.** A pilot was feasible. Its one serious adverse event was euglycaemic ketoacidosis in a participant on an SGLT2 inhibitor [ket-needham2023].
- **Depression in obesity.** A Mediterranean diet improved depression scores more than keto [ket-mela2026].

### Athletic performance and muscle

- **Elite race walkers (Burke 2017).** Three weeks of under 50 g/day raised fat oxidation and VO2peak but worsened economy. Race time did not improve (-1.6%), while high-carbohydrate groups improved by 5-7% [ket-burke2017].
- **Rapid adaptation (Burke 2021).** Just 5-6 days of keto raised oxygen cost 5-8%, and 24 h of carbohydrate restoration did not rescue race performance [ket-burke2021].
- **Lower intensity.** At lower intensities, endurance is preserved [ket-volek2015].
- **Bone.** Bone-turnover markers worsened in elite walkers after 3.5 weeks [ket-heikura2019].
- **Muscle.** Resistance-trained people gain similar fat-free mass on keto as on control diets when energy intake is adequate [ket-vargasmolina2022].

---

## 4. Exogenous ketones

### What blood levels they reach

| Product | Dose | Peak BHB | Refs |
|---|---|---|---|
| (R)-3-hydroxybutyl (R)-3-hydroxybutyrate (monoester) | 714 mg/kg | ~3.3 mmol/L at 1-2 h; half-life 0.8-3.1 h | [ket-clarke2012] |
| Monoester | ~12-24 g BHB | 2.8 mmol/L fasted; ~1/3 lower after a meal | [ket-stubbs2017] |
| Monoester, sustained | 26.8 g three times daily for 28 days | ~4.1 mmol/L after each drink | [ket-sotomota2019] |
| Ketone salts (Na/K BHB) | ~12-24 g BHB | ~1.0 mmol/L (50% L-isomer); urine pH 5.7 to 8.5 | [ket-stubbs2017] |
| C8 MCT (tricaprylin) | 2 x 20 mL | +~0.3 mmol/L day-long | [ket-vandenberghe2017] |

### Human trial results

- **Glucose:** consistently lower, by about 0.5 mmol/L acutely across 43 trials, with monoesters stronger than salts [ket-falkenhain2022].
  - A pre-load drink cut OGTT glucose AUC 11% without raising insulin [ket-myettecote2019].
  - 14 days of pre-meal ester lowered 24-h glucose 7.8% and raised flow-mediated dilation from 6.2% to 8.9% [ket-walsh2021a].
- **Cognition:** a small pooled benefit (SMD 0.29) [ket-bonnechere2026]. A 6-month MCT drink trial in MCI improved several tests [ket-fortier2021].
- **Performance:**
  - No effect overall (g = -0.05) [ket-valenzuela2020].
  - A pre-race ketone diester made professional cyclists 2% slower, with gut discomfort [ket-leckey2017].
  - The positive signal is post-exercise ester during heavy overload training, which blunted overreaching [ket-poffe2019]. Esters also shift muscle fuel use toward fat and away from glycolysis [ket-cox2016].
- **Inflammation and oxidative stress:** contradictory and very limited. Acute dosing raised monocyte NLRP3 activation [ket-neudorf2019]; 14 days lowered it [ket-walsh2021a]. No exogenous-ketone RCT has measured oxidative-damage endpoints.
- **Safety, GI effects and cost:**
  - Monoester for 28 days left weight, glucose, lipids, electrolytes and kidney function unchanged, with nausea after 6 of 2016 drinks [ket-sotomota2019].
  - GI effects appear at high doses [ket-clarke2012] and in race settings [ket-leckey2017].
  - Salts carry a large mineral load and the L-isomer [ket-stubbs2017].
  - Ketone esters retail at several US dollars per serving. That is a market observation, not a literature value.
- **Note:** exogenous BHB *suppresses* fat release through HCAR2 [ket-taggart2005]. Ketone drinks do not "burn fat"; they add a fuel.

---

## 5. Risks

- **LDL and apoB elevation,** greatest in lean, active people [ket-sotomota2024, ket-retterstol2018, ket-buren2021]. Check apoB before starting and at 6-12 weeks. Shifting fat sources toward olive oil, nuts and fish is reasonable. This is an inference from general lipid science; it has not been tested in lean hyper-responders.
- **Kidney stones:** 5.9% pooled incidence (adults 7.9%), about half uric acid [ket-acharya2021]. The paediatric guideline uses oral citrate, which cut stones from 6.7% to 0.9% [ket-kossoff2018].
- **Micronutrients and fibre:**
  - Carbohydrate-restricted diets lowered intakes of thiamine, folate, magnesium, calcium, iron and iodine by 10-70% [ket-churuangsuk2019].
  - In Keto-Med, fibre and 3 nutrients were lower than on the Mediterranean diet [ket-gardner2022].
  - The epilepsy guideline mandates a multivitamin, calcium and vitamin D [ket-kossoff2018].
- **Gut microbiome:** bifidobacteria are depleted [ket-ang2020]. Lower fibre works against [dietary-fiber-microbiome]. In one pilot, stool from keto dieters transferred anxiety-like behaviour to mice [ket-mela2026].
- **Euglycaemic ketoacidosis:**
  - SGLT2 inhibitors plus very-low-carbohydrate diets are a recognised DKA risk combination, and glucose can be under 200 mg/dL [ket-umpierrez2024, ket-peters2015].
  - It happened in a psychiatric keto pilot [ket-needham2023].
  - Breastfeeding women restricting carbohydrate show up repeatedly in case reports of lactation ketoacidosis [ket-deamorim2024].
- **Bone:** resorption markers rose in athletes [ket-heikura2019].
- **Mortality associations:** an animal-heavy low-carbohydrate pattern is associated with higher mortality, and a plant-based one with lower [ket-shan2020].
- **Adherence:**
  - In diabetes trials, very-low-carbohydrate diets lost their edge when adherence was poor [ket-goldenberg2021].
  - In the 12-week crossover, the Mediterranean-plus diet was more sustainable [ket-gardner2022].
  - At one year, an energy-matched keto RCT showed no lasting difference [ket-drabinskafois2026].
- **Pregnancy:** see section 6. Animal data are cautionary, and there is a human association with neural tube defects [ket-sussman2013b, ket-zala2025, ket-desrosiers2018].
- **Contraindications:** fatty-acid oxidation disorders, pyruvate carboxylase deficiency and porphyria [ket-kossoff2018].

---

## 6. Fertility

### Women with PCOS (egg scope)

- **Meta-analyses agree on weight, insulin resistance and LH; they disagree on androgens.**
  - Arsenaki 2026 [ket-arsenaki2026]:
    - 15 studies, mostly BMI over 25.
    - Pre-post: weight fell 10.8 kg, LH and insulin resistance fell, and cycle length shortened.
    - Against other diets, keto gave 5.0 kg more weight loss, lower LH and lower HOMA-IR.
    - Heterogeneity was high.
  - Cannarella 2025 [ket-cannarella2025]: 10 studies, only 3 RCTs. Two RCTs found no weight advantage over a matched low-calorie diet, but LH was lower.
  - Zhang 2019, on moderate low-carbohydrate diets (under 45% of energy) [ket-zhang2019]: diets lasting more than 4 weeks raised SHBG and FSH and lowered testosterone.
  - Shang 2021 [ket-shang2021]: across 20 PCOS diet RCTs, diet improved ovulation, menstrual regularity and clinical pregnancy and lowered miscarriage. Low-carbohydrate diets were the best subgroup.
- **Pregnancy data are anecdotal.** Two women conceived in an 11-woman pilot of under 20 g/day [ket-mavropoulos2005].
- **Observational support for carbohydrate quantity and quality.** Women in the top quintile of carbohydrate intake or glycaemic load had about 1.9 times the risk of ovulatory infertility [ket-chavarro2009].
- **Animal data.** In PCOS mice, keto improved ovarian function in some animals and reduced ovarian inflammation and apoptosis, but impaired glucose tolerance [ket-liu2023].
- **Grade: limited, beneficial for overweight PCOS.** The effect is hard to separate from weight loss ([egg-weight-loss], [pcos]).

### Oocyte and embryo (animal only)

- **Embryo culture.** BHB at 2 mmol/L, the level reached on a ketogenic diet, slowed mouse embryo development, disturbed glycolysis and reduced post-transfer fetal viability in a sex-specific manner [ket-whatley2022].
- **Maternal diet.** A periconceptional ketogenic diet in mice raised BHB in oviduct fluid, delayed blastocyst development and reduced trophectoderm histone acetylation [ket-whatley2024].
- **What is missing:** no study has measured human oocyte quality on keto.

### Pregnancy

- **Mice:**
  - A gestational ketogenic diet reduced litter size and caused fatal maternal ketoacidosis in lactation, and offspring grew slowly with altered brain structure [ket-sussman2013b].
  - A keto diet in only the second half of pregnancy shortened male offspring lifespan [ket-zala2025].
- **Humans:**
  - Women with very low periconceptional carbohydrate intake had half the dietary folic acid and 30% higher odds of a neural-tube-defect pregnancy [ket-desrosiers2018].
  - Two epilepsy pregnancies managed on keto therapy went reasonably well; one infant had ear deformities of unknown significance [ket-vanderlouw2017].
- **Grade: mechanistic and observational, but consistent enough for caution.** Use keto to lose weight before trying to conceive. Switch to a folate-adequate, lower-glycaemic diet plus folic acid ([egg-folic-acid]) once trying.

### Men (sperm scope)

- **Testosterone.** Ketogenic diets raised total testosterone by about 6.75 nmol/L with very-low-calorie protocols and about 1 nmol/L with normocaloric ones, in proportion to weight loss and age [ket-furini2023]. This is mostly a weight-loss effect ([weight-loss-sperm]).
- **Fat intake.** Separately, low-fat diets lower testosterone modestly (SMD -0.38) [ket-whittaker2021].
- **Semen.** No human semen data on keto exist. In obese mice, an MCT ketogenic diet lowered testicular lipid peroxidation and restored semen quality compared with continuing an obesogenic diet [ket-liu2022].
- **Grade: limited.**

---

## 7. Interactions

- **Keto vs Mediterranean for oxidative stress:**
  - No head-to-head trial has measured oxidative-damage markers.
  - On clinical markers, the two match for HbA1c, but keto raises LDL and cuts fibre [ket-gardner2022].
  - Mediterranean beat keto for depression in obesity [ket-mela2026], while keto beat Mediterranean on psoriatic-disease activity and IL-17 [ket-lambadiari2024].
  - [mediterranean-diet] has the hard-outcome evidence. Keto does not.
  - A Mediterranean-style keto (olive oil, fish, vegetables) is a reasonable compromise and was the form used in the energy-matched RCT [ket-drabinskafois2026].
- **Keto plus exercise:**
  - Muscle-mitochondrial ATP/H2O2 improved with keto plus training, in a non-randomised study [ket-miller2020].
  - High-intensity economy suffers [ket-burke2017, ket-burke2021].
  - Moderate training ([aerobic-exercise-moderate]) and resistance training are compatible [ket-vargasmolina2022].
  - Both exercise and keto appear to work partly through hormetic signalling [ket-milder2010]. Whether they add up or overlap has not been tested.
- **Keto and fasting:**
  - Both raise BHB. A 24-48-h fast reaches the same 1-2 mmol/L range as a strict diet [ket-puchalska2017, ket-newman2014].
  - Most proposed ketone mechanisms are shared with [diet-calorie-restriction] and [diet-intermittent-fasting]. Details belong in the fasting review.
- **Overlap with sulforaphane (inference only):**
  - Sulforaphane from [broccoli-sprouts] inhibits HDAC in human blood cells after a single 68 g serving of sprouts [ket-myzak2007] and is a classic Nrf2 activator.
  - BHB's HDAC effect is contested [ket-shimazu2013, ket-chriett2019], and its Nrf2 effect is animal-only and indirect, via an oxidant burst [ket-milder2010].
  - The two act on overlapping pathways, so redundancy is plausible, but there are no human data on combining them.
  - Given the modest size of both effects, there is no reason to avoid broccoli on keto. Broccoli is low in carbohydrate and adds fibre.
- **Keto and glucose spikes:** removing [refined-sugar-high-glycemic] foods probably accounts for a large share of the benefit, as the shared elements of the Keto-Med diets suggest [ket-gardner2022].

---

## 8. Practical guide

### Who might benefit

- **Children (and some adults) with drug-resistant epilepsy:** under specialist care [ket-neal2008, ket-kossoff2018].
- **Adults with type 2 diabetes or prediabetes** who prefer this style. Medication must be adjusted first: insulin and sulfonylureas need reducing, and SGLT2 inhibitors are a red flag [ket-hallberg2018, ket-umpierrez2024].
- **Overweight women with PCOS,** as a time-limited weight-loss tool [ket-arsenaki2026].
- **Men with obesity-related low testosterone,** through weight loss [ket-furini2023].
- **People who find it easier to control appetite this way.** Equal-calorie trials show no fat-loss advantage [ket-hall2016], so pick it only if it is easier to stick to.

### Who should avoid it or need supervision

- **Medical conditions:**
  - SGLT2-inhibitor users and people with type 1 diabetes, because of euglycaemic DKA [ket-umpierrez2024, ket-needham2023];
  - fatty-acid oxidation defects, pyruvate carboxylase deficiency and porphyria [ket-kossoff2018];
  - kidney-stone history [ket-acharya2021];
  - eating disorders.
- **Fertility and pregnancy:**
  - pregnancy, attempts at conception and breastfeeding [ket-zala2025, ket-desrosiers2018, ket-deamorim2024].
- **Lipids and sport:**
  - lean people who already have high LDL or apoB, or familial hypercholesterolaemia [ket-sotomota2024];
  - competitive endurance athletes in race season [ket-burke2017].

### How to do it more safely

1. **Target:** under ~20-50 g/day of carbohydrate (or 50-130 g for a non-ketogenic low-carb diet, see `low-carb-diet`). Aim for BHB 0.5-1.5 mmol/L; there is no evidence that higher is better [ket-volek2015, ket-phillips2021].
2. **Food choices:** build meals on non-starchy vegetables, olive oil, nuts, seeds, avocado, fish and eggs, and limit processed meat [ket-shan2020, ket-gardner2022].
3. **Monitor:**
   - Measure apoB and LDL at baseline and at 6-12 weeks [ket-sotomota2024, ket-retterstol2018].
   - Check kidney function and uric acid if you are at risk.
   - Use a blood meter for ketones; urine strips are only rough [ket-urbain2016].
4. **Supplements and fluids:** take a multivitamin with thiamine, folate and magnesium, and keep calcium and vitamin D adequate [ket-churuangsuk2019, ket-kossoff2018]. Drink plenty of fluid; citrate prevents stones in children [ket-kossoff2018].
5. **Give it a time limit and review it.** Diabetes benefits fade by 12 months as adherence falls [ket-goldenberg2021], and in epilepsy efficacy is judged at about 3 months [ket-kossoff2018].
6. **Before trying to conceive,** move to a lower-glycaemic, folate-rich diet plus folic acid [ket-desrosiers2018].
7. **Exogenous ketones:** treat them as experimental. Their one reliable effect is a modest, short-lived glucose drop [ket-falkenhain2022]. They do not boost performance [ket-valenzuela2020].

---

## 9. What we don't know

- **Oxidative damage:** whether keto lowers validated oxidative-damage markers (urinary F2-isoprostanes by mass spectrometry, 8-OHdG) beyond what matched weight loss does. No adequately powered RCT exists [ket-nazarewicz2007, ket-rondanelli2024].
- **HDAC and NLRP3 in people:** whether BHB inhibits HDACs or NLRP3 in humans at nutritional concentrations of 0.5-1.5 mmol/L [ket-chriett2019, ket-neudorf2019, ket-walsh2021a].
- **LMHR outcomes:** the long-term cardiovascular outcome of diet-induced LDL and apoB elevation in lean hyper-responders. The key longitudinal paper was retracted [ket-sotomota2026, ket-budoff2024].
- **Durability:** diabetes remission beyond 2 years in randomised settings [ket-goldenberg2021].
- **Women's fertility:** human oocyte and embryo quality and live-birth rates in PCOS on keto. Whether mouse embryo effects at ~2 mmol/L BHB translate to humans [ket-whatley2022, ket-arsenaki2026].
- **Men's fertility:** human semen parameters on keto [ket-furini2023].
- **Exogenous ketones:** effects of chronic use on inflammation, oxidative stress or hard outcomes [ket-bonnechere2026].
- **Gut health:** long-term microbiome consequences of bifidobacteria depletion [ket-ang2020].

---

## References (all verified against PubMed on 2026-10-01)

- [ket-acharya2021] Acharya P, et al. Incidence and Characteristics of Kidney Stones in Patients on Ketogenic Diet: A Systematic Review and Meta-Analysis. Diseases 2021. PMID 34070285.
- [ket-anderson2009] Anderson EJ, et al. Mitochondrial H2O2 emission and cellular redox state link excess fat intake to insulin resistance in both rodents and humans. J Clin Invest 2009. PMID 19188683.
- [ket-anderson2021] Anderson JC, et al. Measuring ketone bodies for the monitoring of pathologic and therapeutic ketosis. Obes Sci Pract 2021. PMID 34631141.
- [ket-ang2020] Ang QY, et al. Ketogenic Diets Alter the Gut Microbiome Resulting in Decreased Intestinal Th17 Cells. Cell 2020. PMID 32437658.
- [ket-arsenaki2026] Arsenaki E, et al. The effects of ketogenic diet on polycystic ovary syndrome: A systematic review and meta-analysis. Clin Nutr 2026. PMID 41483483.
- [ket-bhanpuri2018] Bhanpuri NH, et al. Cardiovascular disease risk factor responses to a type 2 diabetes care model including nutritional ketosis... at 1 year. Cardiovasc Diabetol 2018. PMID 29712560.
- [ket-bonnechere2026] Bonnechère B, et al. The effect of exogenous ketone bodies on cognition across health and disease: a systematic review and meta-analysis. Front Nutr 2026. PMID 42063954.
- [ket-budoff2024] Budoff M, et al. Carbohydrate Restriction-Induced Elevations in LDL-Cholesterol and Atherosclerosis: The KETO Trial. JACC Adv 2024. PMID 39372369.
- [ket-bueno2013] Bueno NB, et al. Very-low-carbohydrate ketogenic diet v. low-fat diet for long-term weight loss: a meta-analysis of randomised controlled trials. Br J Nutr 2013. PMID 23651522.
- [ket-buren2021] Burén J, et al. A Ketogenic Low-Carbohydrate High-Fat Diet Increases LDL Cholesterol in Healthy, Young, Normal-Weight Women: A Randomized Controlled Feeding Trial. Nutrients 2021. PMID 33801247.
- [ket-burke2017] Burke LM, et al. Low carbohydrate, high fat diet impairs exercise economy and negates the performance benefit from intensified training in elite race walkers. J Physiol 2017. PMID 28012184.
- [ket-burke2021] Burke LM, et al. Adaptation to a low carbohydrate high fat diet is rapid but impairs endurance exercise metabolism and performance despite enhanced glycogen availability. J Physiol 2021. PMID 32697366.
- [ket-cahill2006] Cahill GF Jr. Fuel metabolism in starvation. Annu Rev Nutr 2006. PMID 16848698.
- [ket-cannarella2025] Cannarella R, et al. Effects of ketogenic diets on polycystic ovary syndrome: a systematic review and meta-analysis. Reprod Biol Endocrinol 2025. PMID 40394635.
- [ket-chavarro2009] Chavarro JE, et al. A prospective study of dietary carbohydrate quantity and quality in relation to risk of ovulatory infertility. Eur J Clin Nutr 2009. PMID 17882137.
- [ket-chriett2019] Chriett S, et al. Prominent action of butyrate over β-hydroxybutyrate as histone deacetylase inhibitor, transcriptional modulator and anti-inflammatory molecule. Sci Rep 2019. PMID 30679586.
- [ket-churuangsuk2019] Churuangsuk C, et al. Impacts of carbohydrate-restricted diets on micronutrient intakes and status: A systematic review. Obes Rev 2019. PMID 31006978.
- [ket-clarke2012] Clarke K, et al. Kinetics, safety and tolerability of (R)-3-hydroxybutyl (R)-3-hydroxybutyrate in healthy adult subjects. Regul Toxicol Pharmacol 2012. PMID 22561291.
- [ket-cox2016] Cox PJ, et al. Nutritional Ketosis Alters Fuel Preference and Thereby Endurance Performance in Athletes. Cell Metab 2016. PMID 27475046.
- [ket-deamorim2024] de Amorim ALB, et al. Carbohydrate restriction during lactation: A systematic review. Nutr Res 2024. PMID 38565002.
- [ket-desrosiers2018] Desrosiers TA, et al. Low carbohydrate diets may increase risk of neural tube defects. Birth Defects Res 2018. PMID 29368448.
- [ket-drabinskafois2026] Drabińska-Fois N, et al. Immune-modulating effects of energy-restricted ketogenic diet in women with overweight and obesity: KETO-MINOX study. Eur J Nutr 2026. PMID 41793518.
- [ket-ebbeling2018] Ebbeling CB, et al. Effects of a low carbohydrate diet on energy expenditure during weight loss maintenance: randomized trial. BMJ 2018. PMID 30429127.
- [ket-falkenhain2022] Falkenhain K, et al. Effects of Exogenous Ketone Supplementation on Blood Glucose: A Systematic Review and Meta-analysis. Adv Nutr 2022. PMID 35380602.
- [ket-feng2025] Feng S, et al. Effects of carbohydrate-restricted diets and macronutrient replacements on cardiovascular health and body composition in adults: a meta-analysis of randomized trials. Am J Clin Nutr 2025. PMID 40935153.
- [ket-forsythe2008] Forsythe CE, et al. Comparison of low fat and low carbohydrate diets on circulating fatty acid composition and markers of inflammation. Lipids 2008. PMID 18046594.
- [ket-fortier2021] Fortier M, et al. A ketogenic drink improves cognition in mild cognitive impairment: Results of a 6-month RCT. Alzheimers Dement 2021. PMID 33103819.
- [ket-furini2023] Furini C, et al. Ketogenic state improves testosterone serum levels: results from a systematic review and meta-analysis. Endocrine 2023. PMID 36149528.
- [ket-gao2026] Gao M, et al. A Ketogenic Diet for Treatment-Resistant Depression: A Randomized Clinical Trial. JAMA Psychiatry 2026. PMID 41637092.
- [ket-gardner2018] Gardner CD, et al. Effect of Low-Fat vs Low-Carbohydrate Diet on 12-Month Weight Loss in Overweight Adults... The DIETFITS Randomized Clinical Trial. JAMA 2018. PMID 29466592.
- [ket-gardner2022] Gardner CD, et al. Effect of a ketogenic diet versus Mediterranean diet on glycated hemoglobin in individuals with prediabetes and type 2 diabetes mellitus: The interventional Keto-Med randomized crossover trial. Am J Clin Nutr 2022. PMID 35641199.
- [ket-goldenberg2021] Goldenberg JZ, et al. Efficacy and safety of low and very low carbohydrate diets for type 2 diabetes remission: systematic review and meta-analysis. BMJ 2021. PMID 33441384.
- [ket-hall2016] Hall KD, et al. Energy expenditure and body composition changes after an isocaloric ketogenic diet in overweight and obese men. Am J Clin Nutr 2016. PMID 27385608.
- [ket-hall2021] Hall KD, et al. Effect of a plant-based, low-fat diet versus an animal-based, ketogenic diet on ad libitum energy intake. Nat Med 2021. PMID 33479499.
- [ket-hallberg2018] Hallberg SJ, et al. Effectiveness and Safety of a Novel Care Model for the Management of Type 2 Diabetes at 1 Year: An Open-Label, Non-Randomized, Controlled Study. Diabetes Ther 2018. PMID 29417495.
- [ket-heikura2019] Heikura IA, et al. A Short-Term Ketogenic Diet Impairs Markers of Bone Health in Response to Exercise. Front Endocrinol 2019. PMID 32038477.
- [ket-jain1998] Jain SK, et al. Ketosis (acetoacetate) can generate oxygen radicals and cause increased lipid peroxidation and growth inhibition in human endothelial cells. Free Radic Biol Med 1998. PMID 9870562.
- [ket-jarrett2008] Jarrett SG, et al. The ketogenic diet increases mitochondrial glutathione levels. J Neurochem 2008. PMID 18466343.
- [ket-kirkpatrick2019] Kirkpatrick CF, et al. Review of current evidence and clinical recommendations on the effects of low-carbohydrate and very-low-carbohydrate (including ketogenic) diets... National Lipid Association. J Clin Lipidol 2019. PMID 31611148.
- [ket-kossoff2018] Kossoff EH, et al. Optimal clinical management of children receiving dietary therapies for epilepsy: Updated recommendations of the International Ketogenic Diet Study Group. Epilepsia Open 2018. PMID 29881797.
- [ket-lambadiari2024] Lambadiari V, et al. The Effect of a Ketogenic Diet versus Mediterranean Diet on Clinical and Biochemical Markers of Inflammation in Patients with Obesity and Psoriatic Arthritis: A Randomized Crossover Trial. Int J Mol Sci 2024. PMID 38473723.
- [ket-lean2018] Lean ME, et al. Primary care-led weight management for remission of type 2 diabetes (DiRECT): an open-label, cluster-randomised trial. Lancet 2018. PMID 29221645.
- [ket-leckey2017] Leckey JJ, et al. Ketone Diester Ingestion Impairs Time-Trial Performance in Professional Cyclists. Front Physiol 2017. PMID 29109686.
- [ket-liu2022] Liu CY, et al. Is a Ketogenic Diet Superior to a High-Fat, High-Cholesterol Diet Regarding Testicular Function and Spermatogenesis? Front Nutr 2022. PMID 35223950.
- [ket-liu2023] Liu S, et al. Effects of a ketogenic diet on reproductive and metabolic phenotypes in mice with polycystic ovary syndrome. Biol Reprod 2023. PMID 36688496.
- [ket-martinmcgill2020] Martin-McGill KJ, et al. Ketogenic diets for drug-resistant epilepsy. Cochrane Database Syst Rev 2020. PMID 32588435.
- [ket-mavropoulos2005] Mavropoulos JC, et al. The effects of a low-carbohydrate, ketogenic diet on the polycystic ovary syndrome: a pilot study. Nutr Metab (Lond) 2005. PMID 16359551.
- [ket-mela2026] Mela V, et al. Ketogenic diet is less effective in ameliorating depression and anxiety in obesity than Mediterranean diet: A pilot study for exploring the GUT-brain axis. Brain Behav Immun 2026. PMID 41197688.
- [ket-milder2010] Milder JB, et al. Acute oxidative stress and systemic Nrf2 activation by the ketogenic diet. Neurobiol Dis 2010. PMID 20594978.
- [ket-miller2020] Miller VJ, et al. A ketogenic diet combined with exercise alters mitochondrial function in human skeletal muscle while improving metabolic health. Am J Physiol Endocrinol Metab 2020. PMID 32985255.
- [ket-musaveloso2002] Musa-Veloso K, et al. Breath acetone is a reliable indicator of ketosis in adults consuming ketogenic meals. Am J Clin Nutr 2002. PMID 12081817.
- [ket-myettecote2019] Myette-Côté É, et al. A ketone monoester drink reduces the glycemic response to an oral glucose challenge in individuals with obesity: a randomized trial. Am J Clin Nutr 2019. PMID 31599919.
- [ket-myzak2007] Myzak MC, et al. Sulforaphane retards the growth of human PC-3 xenografts and inhibits HDAC activity in human subjects. Exp Biol Med 2007. PMID 17259330.
- [ket-napolitano2020] Napolitano A, et al. The Ketogenic Diet Increases In Vivo Glutathione Levels in Patients with Epilepsy. Metabolites 2020. PMID 33321705.
- [ket-nazarewicz2007] Nazarewicz RR, et al. Effect of short-term ketogenic diet on redox status of human blood. Rejuvenation Res 2007. PMID 17663642.
- [ket-neal2008] Neal EG, et al. The ketogenic diet for the treatment of childhood epilepsy: a randomised controlled trial. Lancet Neurol 2008. PMID 18456557.
- [ket-needham2023] Needham N, et al. Pilot study of a ketogenic diet in bipolar disorder. BJPsych Open 2023. PMID 37814952.
- [ket-neudorf2019] Neudorf H, et al. Oral Ketone Supplementation Acutely Increases Markers of NLRP3 Inflammasome Activation in Human Monocytes. Mol Nutr Food Res 2019. PMID 30912285.
- [ket-newman2014] Newman JC, Verdin E. β-hydroxybutyrate: much more than a metabolite. Diabetes Res Clin Pract 2014. PMID 25193333.
- [ket-peters2015] Peters AL, et al. Euglycemic Diabetic Ketoacidosis: A Potential Complication of Treatment With Sodium-Glucose Cotransporter 2 Inhibition. Diabetes Care 2015. PMID 26078479.
- [ket-phillips2021] Phillips MCL, et al. Randomized crossover trial of a modified ketogenic diet in Alzheimer's disease. Alzheimers Res Ther 2021. PMID 33622392.
- [ket-poffe2019] Poffé C, et al. Ketone ester supplementation blunts overreaching symptoms during endurance training overload. J Physiol 2019. PMID 31039280.
- [ket-puchalska2017] Puchalska P, Crawford PA. Multi-dimensional Roles of Ketone Bodies in Fuel Metabolism, Signaling, and Therapeutics. Cell Metab 2017. PMID 28178565.
- [ket-retterstol2018] Retterstøl K, et al. Effect of low carbohydrate high fat diet on LDL cholesterol and gene expression in normal-weight, young adults: A randomized controlled study. Atherosclerosis 2018. PMID 30408717.
- [ket-rhyu2014] Rhyu HS, et al. The effects of ketogenic diet on oxidative stress and antioxidative capacity markers of Taekwondo athletes. J Exerc Rehabil 2014. PMID 25610820.
- [ket-rondanelli2024] Rondanelli M, et al. Does the Ketogenic Diet Mediate Inflammation Markers in Obese and Overweight Adults? A Systematic Review and Meta-Analysis of Randomized Clinical Trials. Nutrients 2024. PMID 39683396.
- [ket-sato1995] Sato K, et al. Insulin, ketone bodies, and mitochondrial energy transduction. FASEB J 1995. PMID 7768357.
- [ket-shan2020] Shan Z, et al. Association of Low-Carbohydrate and Low-Fat Diets With Mortality Among US Adults. JAMA Intern Med 2020. PMID 31961383.
- [ket-shang2021] Shang Y, et al. Dietary Modification for Reproductive Health in Women With Polycystic Ovary Syndrome: A Systematic Review and Meta-Analysis. Front Endocrinol 2021. PMID 34790167.
- [ket-shimazu2013] Shimazu T, et al. Suppression of oxidative stress by β-hydroxybutyrate, an endogenous histone deacetylase inhibitor. Science 2013. PMID 23223453.
- [ket-sotomota2019] Soto-Mota A, et al. Safety and tolerability of sustained exogenous ketosis using ketone monoester drinks for 28 days in healthy adults. Regul Toxicol Pharmacol 2019. PMID 31655093.
- [ket-sotomota2024] Soto-Mota A, et al. Increased low-density lipoprotein cholesterol on a low-carbohydrate diet in adults with normal but not high body weight: A meta-analysis. Am J Clin Nutr 2024. PMID 38237807.
- [ket-sotomota2026] Retraction notice: Longitudinal Data from the KETO-CTA Study: Plaque Predicts Plaque, ApoB Does Not (JACC Adv 2025;4(7):101686). JACC Adv 2026. PMID 42206798 (retracts PMID 40192608).
- [ket-stubbs2017] Stubbs BJ, et al. On the Metabolism of Exogenous Ketones in Humans. Front Physiol 2017. PMID 29163194.
- [ket-sussman2013b] Sussman D, et al. A gestational ketogenic diet alters maternal metabolic status as well as offspring physiological growth and brain structure in the neonatal mouse. BMC Pregnancy Childbirth 2013. PMID 24168053.
- [ket-taggart2005] Taggart AK, et al. (D)-beta-Hydroxybutyrate inhibits adipocyte lipolysis via the nicotinic acid receptor PUMA-G. J Biol Chem 2005. PMID 15929991.
- [ket-umpierrez2024] Umpierrez GE, et al. Hyperglycemic Crises in Adults With Diabetes: A Consensus Report. Diabetes Care 2024. PMID 39052901.
- [ket-urbain2016] Urbain P, Bertz H. Monitoring for compliance with a ketogenic diet: what is the best time of day to test for urinary ketosis? Nutr Metab (Lond) 2016. PMID 27822291.
- [ket-valenzuela2020] Valenzuela PL, et al. Acute Ketone Supplementation and Exercise Performance: A Systematic Review and Meta-Analysis of Randomized Controlled Trials. Int J Sports Physiol Perform 2020. PMID 32045881.
- [ket-vandenberghe2017] Vandenberghe C, et al. Tricaprylin Alone Increases Plasma Ketone Response More Than Coconut Oil or Other Medium-Chain Triglycerides. Curr Dev Nutr 2017. PMID 29955698.
- [ket-vanderlouw2017] van der Louw EJ, et al. Ketogenic diet therapy for epilepsy during pregnancy: A case series. Seizure 2017. PMID 28110175.
- [ket-vargasmolina2022] Vargas-Molina S, et al. Effects of the Ketogenic Diet on Muscle Hypertrophy in Resistance-Trained Men and Women: A Systematic Review and Meta-Analysis. Int J Environ Res Public Health 2022. PMID 36231929.
- [ket-veech2004] Veech RL. The therapeutic implications of ketone bodies... ketosis, ketogenic diet, redox states, insulin resistance, and mitochondrial metabolism. Prostaglandins Leukot Essent Fatty Acids 2004. PMID 14769489.
- [ket-volek2015] Volek JS, et al. Rethinking fat as a fuel for endurance exercise. Eur J Sport Sci 2015. PMID 25275931.
- [ket-walsh2021a] Walsh JJ, et al. 14-Day Ketone Supplementation Lowers Glucose and Improves Vascular Function in Obesity: A Randomized Crossover Trial. J Clin Endocrinol Metab 2021. PMID 33367782.
- [ket-whatley2022] Whatley EG, et al. β-hydroxybutyrate reduces blastocyst viability via trophectoderm-mediated metabolic aberrations in mice. Hum Reprod 2022. PMID 35856159.
- [ket-whatley2024] Whatley EG, et al. A maternal ketogenic diet alters oviduct fluid nutrients and embryo histone acetylation in mice. Reproduction 2024. PMID 38593828.
- [ket-whittaker2021] Whittaker J, Wu K. Low-fat diets and testosterone in men: Systematic review and meta-analysis of intervention studies. J Steroid Biochem Mol Biol 2021. PMID 33741447.
- [ket-youm2015] Youm YH, et al. The ketone metabolite β-hydroxybutyrate blocks NLRP3 inflammasome-mediated inflammatory disease. Nat Med 2015. PMID 25686106.
- [ket-zala2025] Zala SM, et al. Sex-dependent effects of a gestational ketogenic diet on offspring birth and lifespan. PLoS One 2025. PMID 40674330.
- [ket-zhang2019] Zhang X, et al. The Effect of Low Carbohydrate Diet on Polycystic Ovary Syndrome: A Meta-Analysis of Randomized Controlled Trials. Int J Endocrinol 2019. PMID 31885557.
