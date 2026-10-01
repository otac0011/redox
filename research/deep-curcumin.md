# Curcumin deep dive

*Turmeric and curcumin supplements: what the papers show, what they don't, and how to use them sensibly. Literature checked 2026-10-01. Every PMID was pulled from PubMed and checked for retraction status. Cross-references to other factors appear as factor ids in square brackets.*

## Summary

- **Turmeric the spice and curcumin the supplement are different levers.** A teaspoon of ground turmeric contains roughly 60-100 mg of curcumin (about 3% by weight) [cur-tayyem2006]. Eating it gives nanomolar curcumin conjugates in blood and almost no free curcumin [cur-mahale2018]. Supplements deliver 10-100 times more curcuminoids, in formulations built to be absorbed [cur-schiborr2014, cur-flory2021]. See [turmeric-curcumin] and [curcumin-supplements].
- **The test-tube story is weaker than its fame suggests.** Curcumin is unstable, reactive and a known pan-assay interference compound (PAINS). Medicinal chemists have argued that much of its in-vitro activity is artefact [cur-nelson2017, cur-schneider2015]. One of the field's most prolific labs has dozens of retracted papers [cur-pubmed-retractions].
- **Yet some human signals survive.** Meta-analyses of randomized trials find small falls in CRP (about 0.6 mg/L) and MDA [cur-dehzad2023, cur-qin2018]. Knee-osteoarthritis pain relief is comparable to an NSAID in short trials [cur-wang2021, cur-kuptniratsaikul2014]. Glucose and HOMA-IR improve modestly in prediabetes and type 2 diabetes [cur-bahari2026]. All of this comes with low-quality evidence, very high heterogeneity, and a long list of null trials.
- **Safety:** culinary use is safe, apart from the risk of lead-adulterated turmeric [cur-forsyth2024]. High-bioavailability supplements cause rare but sometimes severe liver injury, strongly linked to HLA-B\*35:01 [cur-halegoua2023, cur-lombardi2021]. The EFSA acceptable daily intake is 3 mg/kg/day [cur-efsa2010].
- **Fertility:** one small RCT in infertile men [cur-alizadeh2018]. Several small PCOS trials show modest glycaemic benefit, with no effect on androgens and no pregnancy outcomes [cur-abdelazeem2022, cur-mohammadi2025]. Egg-quality data are conflicting animal studies.

---

## 1. The integrity and PAINS problem

Any honest account of curcumin has to start here, because it changes how much weight the rest of the literature can bear.

### 1.1 The medicinal-chemistry critique

In 2017 Nelson, Dahlin, Bisson and colleagues published "The Essential Medicinal Chemistry of Curcumin" in the *Journal of Medicinal Chemistry*. They argued that curcumin is both a **PAINS** compound (pan-assay interference: it gives false positives across many unrelated assays) and an **IMPS** compound ("invalid metabolic panacea"). It is chemically unstable, reactive and not bioavailable, and so is "a highly improbable lead". They also noted that, at the time, no double-blind placebo-controlled curcumin trial had been successful [cur-nelson2017]. Their follow-up reply to critics held the same position [cur-nelson2017b].

The chemistry behind this is not controversial:

- **Instability.** In buffer and cell-culture media, curcumin autoxidizes within minutes to hours into a family of degradation products, including bicyclopentadiones and vanillin-type fragments. An effect seen in a dish may therefore belong to a breakdown product, not to curcumin [cur-schneider2015].
- **Reactivity.** Curcumin is a Michael acceptor (it reacts covalently with protein thiols). It also chelates metals, absorbs and fluoresces light, and aggregates. Each of these can produce an apparent "hit" in a screening assay without any specific drug-target interaction [cur-heger2014, cur-nelson2017].
- **Metabolism.** What actually circulates after an oral dose is mostly curcumin glucuronide and sulfate. When chemists synthesized these conjugates and tested them, the glucuronides had no antiproliferative activity at all in cancer cell lines that curcumin killed at 1-10 µM [cur-pal2014].

### 1.2 Retractions

Bharat Aggarwal's laboratory published prolifically on curcumin as a broad NF-kB inhibitor and bioavailability problem-solver [cur-anand2007]. A PubMed query run for this review on 2026-10-01 returned **27 retracted publications with BB Aggarwal as author** and **162 retracted publications mentioning curcumin** in total [cur-pubmed-retractions]. Examples relevant to this page are a paper claiming PLGA-nanoparticle curcumin had superior bioactivity and bioavailability [cur-anand2010-retracted] and a paper claiming cyclodextrin-complexed curcumin was more anti-inflammatory [cur-yadav2010-retracted]. Both are now retracted, and we cite them only to flag them. The problem has spread beyond cell biology: a 2019 meta-analysis of curcumin on glycaemic control and lipids in prediabetes and type 2 diabetes was also retracted [cur-poolsup2019-retracted]. We do not use its numbers.

Not everything from that lab is retracted. The widely cited bioavailability review [cur-anand2007] and the phase II pancreatic-cancer trial [cur-dhillon2008] are not flagged in PubMed. Even so, their framing of curcumin as a broad NF-kB inhibitor relied heavily on the lab's own cell work.

### 1.3 What this means for the clinical literature

The PAINS problem mainly undermines **mechanistic** claims. Randomized trials with clinical endpoints are less exposed to assay artefacts, but they have their own problems:

- **Small trials and small-study bias.** In knee osteoarthritis, most trials enrolled fewer than 100 people and overall study quality was low [cur-bannuru2018]. An overview of the seven systematic reviews on curcumin for knee osteoarthritis rated their methodological quality "extremely low", and 37 of 48 outcomes were rated very-low-quality evidence [cur-chen2025]. Small trials tend to overstate effects, and the meta-analyses built on them inherit that bias.
- **Heterogeneity.** Pooled analyses routinely report I² of 85-95% [cur-wang2021, cur-musazadeh2026, cur-ebrahimzadeh2024]. With heterogeneity that high, the pooled number means little.
- **Concentration and sponsorship.** Many trials come from a few research networks. Several are run by product developers: the Theracurmin osteoarthritis trial [cur-nakagawa2014], the Australian *Curcuma longa* trial, partly funded by the manufacturer [cur-wang2020], and the Meriva registries from one Italian group [cur-belcaro2010, cur-hu2018].
- **Product quality.** Meta-analysts themselves flag that included trials rarely checked supplements for adulteration with drugs or other herbs [cur-ebrahimzadeh2024]. GRADE certainty for lipid effects was rated low to very low [cur-dehzad2023b].

The working stance on this page: **treat in-vitro mechanism as hypothesis-generating at best.** Trust only effects that replicate across reasonably sized, blinded RCTs, and give extra weight to well-run null trials.

---

## 2. How curcumin supposedly works, and the plasma reality check

### 2.1 Nrf2 activation (Michael acceptor)

Curcumin's α,β-unsaturated carbonyl groups can covalently modify cysteine sensors on KEAP1. In mouse epidermal cells, curcumin bound **KEAP1 Cys151**, stabilized Nrf2 and induced haem oxygenase-1 (HO-1). Tetrahydrocurcumin, which lacks the Michael-acceptor double bonds, did none of this [cur-shin2020]. Earlier work in kidney cells showed the same Nrf2/ARE-dependent HO-1 induction [cur-balogun2003]. This puts curcumin in the class of "indirect antioxidants": compounds that work catalytically by switching on the cell's own defence enzymes, rather than being used up as direct scavengers [cur-dinkovakostova2008].

The human data are thin. In 12 healthy volunteers given a single 4 g dose, parent curcumin was below detection in plasma. Curcumin glucuronide appeared, and changes in leukocyte NRF2, HO-1 and NQO1 mRNA were modelled as a response, but there was no placebo arm [cur-cheng2019]. In a small dialysis RCT, a turmeric juice (2.5 g turmeric three times a week) lowered NF-kB mRNA and hs-CRP but **did not change Nrf2 mRNA** [cur-alvarenga2020]. Reviews comparing dietary Nrf2 activators rank curcumin well below sulforaphane, because sulforaphane is both more potent and far more bioavailable [cur-houghton2016].

### 2.2 NF-kB inhibition

The NF-kB story comes largely from cell assays at micromolar concentrations, and a substantial part of it from the lab discussed above [cur-anand2007, cur-yadav2010-retracted]. Clinically, two trials measured something NF-kB-related. In dialysis patients, PBMC NF-kB mRNA fell [cur-alvarenga2020]. In the Meriva NASH trial, inhibition of hepatic NF-kB activation predicted who achieved NASH resolution [cur-musso2025]. These are interesting, but they are biomarkers in small trials.

### 2.3 Direct scavenging

In a test tube, curcumin is a good radical scavenger. In the body this almost certainly does not matter. Phase I studies found curcumin and its conjugates at around **10 nmol/L** in plasma after 0.45-3.6 g/day [cur-sharma2004]. Free curcumin was undetectable in most people even after 10-12 g [cur-vareed2008, cur-lao2006]. Endogenous antioxidants such as urate, ascorbate and glutathione circulate at concentrations many orders of magnitude higher. A sacrificial scavenger at nanomolar levels cannot compete with them, the same "antioxidant paradox" logic that applies to other polyphenols [cur-dinkovakostova2008].

### 2.4 Where curcumin does reach high concentrations: the gut

The one compartment where gram doses reach pharmacological levels is the bowel wall. Colorectal-cancer patients taking 3.6 g/day for a week had **8-13 nmol/g** curcumin in colorectal tissue, and oxidative DNA adducts (M1G) in tumour tissue fell from 4.8 to 2.0 per 10⁷ nucleotides [cur-garcea2005]. Liver was different: with the same doses, no curcumin was found in liver tissue, portal-blood levels were low nanomolar, and liver DNA adducts did not fall [cur-garcea2004]. This is consistent with the effects that do appear in trials (gut-adjacent, inflammatory, metabolic) acting locally or through minor metabolites, but that remains a hypothesis.

### 2.5 Reality-check table

| Claimed mechanism | Concentration where it works in cells | What reaches human plasma | Verdict |
|---|---|---|---|
| Nrf2 via KEAP1 Cys151 | low µM [cur-shin2020, cur-balogun2003] | Free curcumin low-nM or undetectable; conjugates nM [cur-vareed2008, cur-flory2021] | Real chemistry, weak systemic signal; sulforaphane does it better [cur-houghton2016] |
| NF-kB inhibition | µM, much of it from a lab with retractions [cur-anand2007, cur-pubmed-retractions] | as above | Unproven systemically; some biomarker hints [cur-alvarenga2020, cur-musso2025] |
| Direct radical scavenging | µM (test tube) | ~10 nM [cur-sharma2004] | Negligible in vivo |
| Iron chelation | demonstrated in mice on low-iron diets [cur-jiao2009] | unknown in humans | Possible safety issue more than benefit |
| Gut-local effects | tissue 8-13 nmol/g at 3.6 g/day [cur-garcea2005] | n/a | The most plausible site of action |

---

## 3. Bioavailability and formulations

### 3.1 Native curcumin

Native curcumin is barely absorbed. In a dose-escalation study, **no curcumin was detected in serum** after single doses of 0.5-8 g, and only low levels appeared in two people at 10-12 g [cur-lao2006]. Taiwanese phase I patients reached peak serum levels of 0.51, 0.63 and 1.77 µM at 4, 6 and 8 g/day. Doses above 8 g/day were too bulky for patients to swallow [cur-cheng2001]. These older HPLC numbers usually reflect total curcumin, not free curcumin (see 3.3).

### 3.2 Piperine (Shoba 1998)

The famous "2000%" figure comes from a small crossover study. In it, 2 g curcumin alone gave undetectable or very low serum levels, and adding 20 mg piperine raised the area under the curve (AUC) twenty-fold [cur-shoba1998]. Piperine works by inhibiting glucuronidation and drug-metabolising enzymes. That is also why it raises blood levels of drugs such as phenytoin [cur-pattanaik2006]. In the best head-to-head comparison of formulations, a piperine-containing "adjuvant" product **did not significantly raise** curcumin exposure at a 207 mg dose [cur-flory2021]. Twenty-fold over almost nothing is still very little.

### 3.3 Free curcumin versus conjugates: the measurement trap

Most pharmacokinetic studies treat plasma with β-glucuronidase/sulfatase before analysis, then report the result as "curcumin". That number is really **total** (free plus conjugated) curcumin. It overstates the free compound, which is the form thought to be active [cur-stohs2019]. Worse, β-glucuronidase only partly cleaves complex sulfate conjugates. Totals therefore differ by method and are hard to compare across studies [cur-luis2020]. When one group compared eight formulations head-to-head without hydrolysis, **no free curcumin was detected in any subject with any formulation** at 207 mg [cur-flory2021].

### 3.4 Formulation comparison

| Formulation (example brand) | Approach | Relative exposure vs native | Free curcumin? | Key reference |
|---|---|---|---|---|
| Native powder / C3 Complex | none | 1x; often undetectable up to 8 g | No | [cur-lao2006, cur-vareed2008] |
| + piperine (20 mg) | blocks glucuronidation | ~20x (AUC, 1998 assay); not significant in 2021 head-to-head | No | [cur-shoba1998, cur-flory2021] |
| Turmeric essential oils (BCM-95 type) | oil matrix | 1.3x (Jäger); not significant (Flory) | No | [cur-jager2014, cur-flory2021] |
| Phospholipid / phytosome (Meriva) | lecithin complex | 7.9x [cur-jager2014] to 29x [cur-cuomo2011]; mainly demethoxycurcumin | Only conjugates detected | [cur-cuomo2011] |
| Hydrophilic carrier + cellulose (CHC, CurcuWIN) | dispersion | 45.9x total curcuminoids | Not reported separately | [cur-jager2014] |
| γ-Cyclodextrin (Cavacurmin) | inclusion complex | 39x [cur-purpura2018]; 30x [cur-flory2021] | No (Flory) | [cur-purpura2018, cur-flory2021] |
| Colloidal submicron particles (Theracurmin) | nanoparticle dispersion | Cmax 189-275 ng/mL at 150-210 mg; ~27x claimed by developers | Not reported separately | [cur-kanai2012, cur-nakagawa2014] |
| Solid lipid particles (Longvida) | lipid particle | Not in independent head-to-head trials found | n/a | [cur-cox2015] |
| Liquid micelles (NovaSol type) | polysorbate micelles | 185x [cur-schiborr2014]; 57x [cur-flory2021] | No (Flory) | [cur-schiborr2014, cur-flory2021] |

Three takeaways:

1. **Micelles and γ-cyclodextrin are the only approaches that beat native curcumin in the independent head-to-head trial.** Strategies aimed at absorption itself (solubility) worked better than strategies aimed at blocking metabolism [cur-flory2021].
2. **Fold-increases are relative to a near-zero baseline.** Even with micelles, fasting plasma curcuminoids reached about 49 nmol/L after 3 weeks of 98 mg three times daily. That level was safe, but it **did not lower CRP or lipids** in mildly hypercholesterolaemic adults [cur-kocher2016].
3. **Brand marketing comparisons are unreliable.** Different doses, assays and hydrolysis methods make cross-study numbers incomparable [cur-stohs2019, cur-luis2020]. Women absorbed micellar curcumin better than men [cur-schiborr2014].

### 3.5 Does culinary turmeric matter?

A standardized turmeric meal at amounts typical of South Asian diets produced detectable curcumin glucuronide (peak about 48 nM) in all volunteers. Free curcumin (3.2 nM) appeared in only one person [cur-mahale2018]. So culinary turmeric is not nothing systemically, but it delivers roughly one-thousandth of the concentrations at which curcumin acts in cells. In a Singapore cohort, people who ate curry occasionally or often had better MMSE scores. That is an association that cannot separate turmeric from everything else about diet and lifestyle [cur-ng2006]. One small dialysis trial using a 2.5 g turmeric juice found lower hs-CRP [cur-alvarenga2020], which at least hints that food-range doses can do something in a highly inflamed population. Food turmeric is best thought of as one of many [herbs-spices] in a [mediterranean-diet]-style pattern, not as a drug.

---

## 4. Human trial evidence by outcome

The general pattern: positive pooled estimates in meta-analyses dominated by small trials, and **null results in several of the largest, most rigorous trials**.

### 4.1 Oxidative stress markers (MDA, SOD, TAC)

| Analysis | Trials | Result | Notes |
|---|---|---|---|
| Qin 2018 [cur-qin2018] | 8 RCTs, 626 people, ≥4 weeks | MDA SMD −0.77; SOD SMD +1.08; RBC GPx no change | MDA effect at ≥600 mg/day curcuminoids; larger with piperine |
| Jakubczyk 2020 [cur-jakubczyk2020] | 4 RCTs, 308 people | TAC SMD +2.70 (p = 0.045); MDA SMD −1.58 (p = 0.086, n.s.) | Only four trials; mean 645 mg/day for ~67 days |
| Dehzad 2023 [cur-dehzad2023] | 66 RCTs | TAC +0.21 mmol/L; MDA −0.33 µmol/L; SOD +20.5 U/L | GRADE-assessed; high heterogeneity |
| Kavyani 2024 umbrella [cur-kavyani2024] | 21 meta-analyses | MDA ES −0.81; SOD, GPx, catalase up; **TAC not significant** | Meta-analysis of overlapping meta-analyses |
| Lee 2024 review [cur-lee2024] | 54 meta-analyses | MDA lower in 5 of 6 meta-analyses | Counts, not new pooling |

A representative positive trial is Panahi 2015. In 117 people with metabolic syndrome, 1 g curcuminoids plus 10 mg piperine for 8 weeks raised SOD and lowered MDA and CRP [cur-panahi2015].

**Interpretation.** A modest, fairly consistent shift in MDA and antioxidant-enzyme activity appears across trials. MDA (usually measured by the TBARS assay) and "TAC" are crude, assay-dependent markers. Standardized mean differences of −0.8 built mostly from small trials should be read as "probably some effect, size uncertain". None of these trials tie the biomarker change to a hard outcome.

### 4.2 Inflammation (CRP, IL-6, TNF-α)

- **Dehzad 2023 (66 RCTs):** CRP −0.58 mg/L, IL-6 −1.31 pg/mL, TNF-α −3.48 pg/mL; IL-1β unchanged [cur-dehzad2023].
- **Ferguson 2021 (32 RCTs, 2,038 people):** CRP −1.55 mg/L, IL-6 −1.69 pg/mL, TNF-α −3.13 pg/mL, IL-10 up. The authors stress that dose, duration and formulation remain unresolved [cur-ferguson2021].
- **Kavyani 2024 umbrella:** CRP −0.87 mg/L, plus a +1.64% improvement in flow-mediated dilation [cur-kavyani2024].
- **Counterpoint:** a well-designed German crossover RCT of highly bioavailable micellar curcumin (294 mg/day for 6 weeks, n = 42) found **no effect on CRP or other inflammation markers** in people selected for mildly raised CRP and cholesterol [cur-kocher2016].

**Interpretation.** A CRP reduction of about 0.5-1 mg/L is plausible in people with raised baseline inflammation. It is smaller or absent in healthier people.

### 4.3 Osteoarthritis pain (the strongest clinical area)

| Study | Design | Dose / form | Result |
|---|---|---|---|
| Kuptniratsaikul 2014 [cur-kuptniratsaikul2014] | RCT, 367 knee OA, 4 weeks | 1500 mg/day *C. domestica* extract vs ibuprofen 1200 mg/day | Non-inferior on WOMAC total, pain, function; fewer abdominal complaints |
| Wang 2020, *Ann Intern Med* [cur-wang2020] | RCT, 70, 12 weeks | *C. longa* extract, 2 capsules/day | VAS pain −9.1 mm vs placebo; **no effect on effusion-synovitis or cartilage**; manufacturer co-funded |
| Nakagawa 2014 [cur-nakagawa2014] | RCT, 50, 8 weeks | Theracurmin, 180 mg/day curcumin | Lower pain VAS (except in mild cases), less celecoxib use; developer-run |
| Belcaro 2010 [cur-belcaro2010] | Non-randomised controlled, 100, 8 months | Meriva | Better WOMAC and inflammatory markers; open design |
| Wang 2021 meta-analysis [cur-wang2021] | 16 RCTs, 1,810 | various extracts | Pain SMD −0.82, function SMD −0.75 vs placebo; similar to NSAIDs; I² ~86-90%; less benefit at higher BMI |
| Bannuru 2018 [cur-bannuru2018] | 11 RCTs, 1,009 | curcuminoids | Beat placebo; matched NSAIDs with fewer GI events; low quality |
| Liu 2018, *BJSM* [cur-liu2018] | 69 RCTs, 20 supplements | | *C. longa* extract and curcumin had large short-term effects, but **no supplement gave clinically important long-term relief** |
| Chen 2025 overview [cur-chen2025] | 7 systematic reviews | | Reviews of extremely low quality; mostly very-low-certainty evidence |

**Interpretation.** This is the area where curcumin looks most like a real treatment: an effect on pain similar to an NSAID over 4-12 weeks, with fewer GI side effects. It does not appear to modify structure (effusion, cartilage) [cur-wang2020], and long-term data are missing [cur-liu2018]. Effect sizes around −0.8 SMD from small, heterogeneous trials are probably inflated. A realistic expectation is a modest analgesic.

### 4.4 Metabolic syndrome, NAFLD/MASLD, glucose and lipids

- **NASH histology:** the most striking single trial. Meriva 2 g/day for 72 weeks in 52 patients with biopsy-proven NASH achieved NASH resolution in **62% versus 12%** on placebo, and fibrosis improvement in 50% versus 8% [cur-musso2025]. It is one modest-sized trial. It needs replication before anyone treats NASH with curcumin.
- **NAFLD enzymes:** 15 RCTs (905 people): ALT −4.1 U/L, AST −3.3 U/L. Curcumin plus piperine had no significant effect on ALT [cur-vajdi2025]. Another 21-RCT analysis found lower fasting glucose, HOMA-IR, TG, TC, LDL and weight (−0.8 kg), with no change in CRP or HbA1c. Its authors flag bias and possible product adulteration [cur-ebrahimzadeh2024].
- **Glucose:** in prediabetes and type 2 diabetes, 34 RCTs found fasting glucose −10.2 mg/dL, HbA1c −0.32% and HOMA-IR −0.46, with larger effects at ≥1 g/day [cur-bahari2026]. An earlier analysis in uncomplicated type 2 diabetes found HbA1c, HOMA and LDL lower but fasting glucose not significantly changed [cur-altobelli2021]. Across 15 meta-analyses, 14 reported lower fasting glucose [cur-lee2024]. Note that one glycaemic meta-analysis was retracted [cur-poolsup2019-retracted].
- **Diabetes prevention:** a Thai RCT in 240 people with prediabetes reported **0% versus 16.4%** progression to type 2 diabetes over 9 months [cur-chuengsamarn2012]. That is a remarkably large effect for a single unreplicated trial. In contrast, Theracurmin 180 mg/day for 6 months did not change HbA1c, its primary endpoint, in impaired glucose tolerance or type 2 diabetes [cur-funamoto2019].
- **Lipids:** a 64-RCT meta-analysis found TC −4.0, TG −6.7 and LDL −4.9 mg/dL, and HDL +1.8 mg/dL, all small, with no change in ApoA/ApoB and GRADE certainty low to very low [cur-dehzad2023b]. The first meta-analysis (5 RCTs) found nothing [cur-sahebkar2014], and micellar curcumin did not lower lipids [cur-kocher2016]. In a 4-week crossover study, supplemental turmeric did not change glucose or lipids [cur-tang2008].

**Interpretation.** Small, consistent-looking improvements in glycaemia, plus a single dramatic NASH trial. The glucose effects (HbA1c about −0.3%) are real-world relevant but smaller than those of first-line drugs. Curcumin is not a substitute for weight loss, exercise or metformin ([glycemic-control]).

### 4.5 Depression

- Ng 2017: 6 trials, 377 patients, Hamilton scale SMD −0.34 [cur-ng2017].
- Musazadeh 2026: 19 RCTs, depression SMD −0.76 and depressive symptoms SMD −0.53, but I² above 85% and "fragile" in sensitivity analysis [cur-musazadeh2026].
- A 192-trial network meta-analysis found curcumin **added to antidepressants** improved symptoms (SMD 1.03). Curcumin monotherapy compared with antidepressants did not reach significance [cur-cheng2025].

**Interpretation.** A plausible adjunct signal from small trials. Not a replacement for treatment.

### 4.6 Cognition

- **Small 2018 (Theracurmin):** 40 non-demented adults aged 51-84 took 90 mg curcumin twice daily for 18 months. Verbal memory (effect size 0.63 within-group, between-group p = 0.05), visual memory and attention improved, and FDDNP-PET signal fell in the amygdala and hypothalamus [cur-small2018]. Small sample, with multiple outcomes and a ligand that does not separate amyloid from tau.
- **Ringman 2012:** in mild-to-moderate Alzheimer's disease, 2 or 4 g/day C3 Complex for 24 weeks showed **no clinical or biomarker benefit**. Plasma native curcumin was low (7.3 ng/mL), and 3 people withdrew for GI symptoms [cur-ringman2012].
- **Rainey-Smith 2016:** in 96 older adults, 1500 mg/day Biocurcumax for 12 months produced no difference on most measures. One MoCA interaction was driven by decline in the placebo group [cur-raineysmith2016].
- **Cox 2015 (Longvida 400 mg):** improved attention and working memory acutely and after 4 weeks in 60 healthy older adults [cur-cox2015].
- **Meta-analysis:** 9 RCTs (501 people) found global cognition SMD 0.82. The effect was significant only for trials of ≥24 weeks, participants aged ≥60, or Asian populations [cur-wang2025].

**Interpretation.** Enhanced formulations have produced a few small positive trials. The one trial in established Alzheimer's disease was null. Not established.

### 4.7 Exercise recovery and muscle soreness

- Fang 2021: CK −48.5 IU/L, soreness WMD −0.48 [cur-fang2021].
- Liu 2024: 14 studies, 349 participants: soreness MD −0.61, CK MD −137, IL-6 slightly lower, range of motion better [cur-liu2024].
- Bańkowski 2022: 2 g/day for 6 weeks in amateur runners changed neither VO2max nor antioxidant, oxidative-stress or muscle-damage markers [cur-bankowski2022].

**Interpretation.** Small, short trials suggest less soreness after damaging exercise. No performance benefit is shown. See section 6 on adaptation.

### 4.8 Cancer

Cancer is where curcumin's preclinical fame was largest. Rigorous trials have been mostly null:

- **FAP adenomas:** pure curcumin 3 g/day for 12 months gave **no reduction** in polyp number or size (44 patients, double-blind) [cur-cruzcorrea2018].
- **Radiation dermatitis:** 6 g/day in 686 breast-cancer patients had **no effect** versus placebo [cur-ryanwolf2018].
- **Prostate cancer on intermittent ADT:** 1440 mg/day for 6 months did **not** lengthen the off-treatment interval (97 men) [cur-choi2019].
- **Aberrant crypt foci:** 4 g/day (but not 2 g) for 30 days reduced crypt foci by 40% in an open, non-randomised study, with no change in the prostaglandin or proliferation endpoints it targeted [cur-carroll2011].
- **Metastatic colorectal cancer:** adding 2 g/day to FOLFOX was safe in an open-label phase IIa trial (28 patients). An exploratory overall-survival hazard ratio of 0.34 is too fragile to act on [cur-howells2019].
- **Pancreatic cancer:** 8 g/day in a single-arm phase II study. Circulating levels were low, and 2 of 21 patients showed biological activity [cur-dhillon2008].
- **Phase I chemoprevention:** histological improvement in a few people with premalignant lesions, and progression to cancer in others, with no controls [cur-cheng2001].

**Interpretation.** No convincing anticancer benefit. Curcumin can interact with chemotherapy drugs (section 7), so anyone with cancer should discuss it with their oncologist.

### 4.9 Evidence summary by outcome

| Outcome | Best estimate | Evidence grade (our call) | Typical positive-trial dose |
|---|---|---|---|
| Knee OA pain | SMD about −0.8 vs placebo; ≈ NSAID short-term | Moderate (low quality, consistent direction) | 1500 mg/day extract; 180 mg/day Theracurmin |
| CRP / IL-6 | CRP −0.6 to −1.5 mg/L | Moderate-limited (heterogeneous; micellar null) | 500-1500 mg/day ± piperine |
| MDA / SOD / TAC | SMD about −0.8 (MDA) | Limited (crude markers) | ≥600 mg/day curcuminoids |
| Glucose / HbA1c | HbA1c −0.3%; fasting glucose −10 mg/dL | Limited-moderate | ≥1 g/day |
| NAFLD / NASH | ALT −4 U/L; one positive histology RCT | Limited | Meriva 2 g/day |
| Lipids | LDL −5 mg/dL | Limited (GRADE low) | various |
| Depression (adjunct) | SMD −0.3 to −0.8 | Limited | 500-1000 mg/day |
| Cognition | Mixed; null in Alzheimer's disease | Limited | 180 mg/day Theracurmin |
| Muscle soreness | Small reduction | Limited | 150 mg-2 g/day |
| Cancer | Null in rigorous RCTs | Not supported | n/a |

---

## 5. Fertility

### 5.1 Sperm

- **Human RCT:** a single double-blind trial in 60 infertile men (56 completed) with asthenoteratozoospermia. 80 mg/day curcumin nanomicelle for 10 weeks raised total sperm count, concentration and motility versus placebo, and improved plasma TAC, MDA, CRP and TNF-α [cur-alizadeh2018]. There were no DNA-fragmentation, pregnancy or live-birth outcomes, and the trial has not been replicated.
- **DNA fragmentation:** human data exist only for **adding** curcumin (20 µM) to sperm-freezing medium, which reduced post-thaw ROS and DNA fragmentation [cur-santonastaso2021]. That is a lab-handling result, not evidence for oral use.
- **Varicocele:** only rat data. Curcumin and nano-curcumin improved sperm concentration, motility, lipid peroxidation and DNA damage in varicocelized rats [cur-sadraei2022]. Grade: **mechanistic**.
- **A caution:** curcumin added directly to human and mouse sperm causes a concentration-dependent loss of forward motility, capacitation and fertilizing ability. It has been proposed as a vaginal contraceptive [cur-naz2011]. Oral doses do not reach such concentrations in semen (see section 2), but this argues against "more is better".

**Grade:** limited (one small RCT); sperm impact 1/5. See the curcumin-sperm factor.

### 5.2 Eggs, ovary and PCOS

- **PCOS metabolic outcomes (several small RCTs, four meta-analyses):**
  - Abdelazeem 2022 (5 RCTs, 296 women): fasting glucose −3.7 mg/dL, insulin −1.9 µIU/mL, HOMA-IR −0.55, total cholesterol −15.6 mg/dL; no effect on LDL, HDL, sex hormones, weight or CRP [cur-abdelazeem2022].
  - Chien 2021 (3 RCTs, with trial sequential analysis): glucose, insulin, HOMA-IR, HDL and TC improved; LDL and TG did not [cur-chien2021].
  - Simental-Mendía 2022 (5 RCTs): glucose −3.7 mg/dL, insulin −1.7 µIU/mL, HOMA-IR −0.94 (I² 90%); **no lipid changes** [cur-simentalmendia2022].
  - Mohammadi 2025 (8 RCTs, dose-response): small improvements in glucose, insulin, HOMA-IR (SMD −0.36) and TC; **no effect on BMI, testosterone, DHEA, LH or FSH** [cur-mohammadi2025].
- **Individual PCOS trials:** in a 200-woman 2×2 factorial trial, nanocurcumin 80 mg three times daily plus metformin beat either alone on lipids, glucose, weight and testosterone [cur-feghhi2024]. A triple-blind Iranian trial of 1000 mg/day lowered fasting glucose and reduced amenorrhoea/oligomenorrhoea (13% vs 22%), but did not change insulin, lipids, SHBG, testosterone or hirsutism [cur-ghanbarzadeh2023].
- **Endometriosis and ART:** in 50 women with stage III/IV endometriosis undergoing ART, nanomicelle curcumin 120 mg/day for 10 weeks lowered follicular-fluid MDA, IL-8 and TNF-α. It also reported more oocytes retrieved, more mature oocytes and more good-quality embryos [cur-jannatifar2025]. That is a small single-centre trial. A separate 68-woman RCT found **no effect on endometriosis pain** [cur-gudarzi2024].
- **Oocyte quality in animals is conflicting:** curcumin in drinking water (40 µM) **impaired** mouse oocyte maturation, fertilization and embryo development through apoptosis [cur-chen2012], while intraperitoneal curcumin preserved follicle numbers and AMH in ageing mice [cur-azami2020]. Grade: **mechanistic**, direction unclear.
- **Reproductive toxicology:** the EFSA ADI itself is based on reduced F2 body-weight gain in a multigeneration reproductive-toxicity study [cur-efsa2010]. There are no human pregnancy safety data for supplement doses.

**Grade:** limited for PCOS metabolic markers; no data on ovulation, pregnancy or live birth; egg impact 1/5. For PCOS, [myo-inositol] has a larger evidence base, and the foundation remains [pcos] management and [glycemic-control]. See the curcumin-egg factor.

---

## 6. Interactions: sulforaphane, other Nrf2 activators, and exercise

### 6.1 Curcumin plus sulforaphane

**Established:**
- Both are electrophilic Nrf2 inducers acting through KEAP1 cysteine sensors [cur-shin2020, cur-dinkovakostova2008].
- Sulforaphane is a more potent Nrf2 inducer and is far better absorbed than curcumin [cur-houghton2016].
- The only combination data are from cell culture, where curcumin plus sulforaphane suppressed inflammatory mediators synergistically and induced HO-1 and NQO1 more than either alone [cur-cheung2009].
- **There are no human studies of combining them.** Our PubMed searches found none.

**Inference (not tested):**
- For systemic Nrf2 activation, adding curcumin to [sulforaphane-supplements], [broccoli-sprouts] or [broccoli-seed-powder] probably adds little. Curcumin's systemic exposure is so low that its Nrf2 contribution would be small next to sulforaphane's. Nrf2 induction also saturates: once the pathway is switched on, piling on more inducers yields diminishing returns.
- Curcumin's plausible **distinct** contributions are in the gut lumen, where it reaches high concentrations [cur-garcea2005], and in symptomatic osteoarthritis pain [cur-wang2021]. If someone takes sulforaphane for general redox reasons, curcumin is justified only for a separate indication like joint pain, not as a "second Nrf2 activator".
- The same reasoning applies to [coffee] and [green-tea], which add weak electrophilic and polyphenolic signals of their own.

### 6.2 Does curcumin blunt exercise adaptation?

**Established:**
- High-dose vitamins C and E can blunt training adaptations. Vitamin C 1000 mg plus vitamin E 400 IU/day blocked exercise-induced improvements in insulin sensitivity and endogenous antioxidant gene expression [cur-ristow2009], and 1 g/day vitamin C reduced mitochondrial biogenesis and endurance adaptations [cur-gomezcabrera2008]. See [antioxidant-megadoses-during-training].
- **No human study has tested whether curcumin blunts training adaptations.** The closest is a 6-week trial in runners in which 2 g/day did not change VO2max or redox markers, but it was not designed to compare training gains against placebo [cur-bankowski2022].
- In rats, injected curcumin **enhanced** exercise-induced mitochondrial biogenesis markers [cur-rayhamidie2015]. That is the opposite of the vitamin C result, but it is an animal study with intraperitoneal dosing.

**Inference:**
- Blunting by direct scavenging is unlikely, because free curcumin barely reaches the circulation (section 2.3). As an Nrf2 activator, curcumin is closer to a mild hormetic signal than to a sacrificial antioxidant.
- A different theoretical concern is anti-inflammatory dampening of post-exercise signalling, similar to worries about NSAIDs and hypertrophy. This is untested for curcumin.
- A cautious approach for someone training for adaptation ([aerobic-exercise-moderate]): use curcumin for recovery around competitions or unusually damaging sessions rather than continuously, until data exist.

---

## 7. Safety

### 7.1 Liver injury

- **Italy 2019:** a cluster of 28 spontaneous reports of acute hepatitis (mostly cholestatic) linked to turmeric supplements in the first half of 2019. Products were tested for drugs, heavy metals, aflatoxins, pesticides, synthetic dyes and pyrrolizidine alkaloids, and regulators intervened [cur-menniti2020]. In Tuscany, all 7 cases involved **high-bioavailability, high-dose** curcumin products, and most improved on stopping. A systematic review of 23 further published cases found most patients were also taking other medicines [cur-lombardi2021].
- **US DILIN case series:** 10 turmeric-associated liver-injury cases, all enrolled since 2011 and 6 since 2017. Injury was mostly hepatocellular, latency was 1-4 months, 5 patients were hospitalized and **one died** of acute liver failure. Turmeric was confirmed in all 7 tested products, and 3 also contained piperine. **7 of 10 patients carried HLA-B\*35:01** (allele frequency 0.45 versus 0.06-0.07 in population controls) [cur-halegoua2023].
- **Interpretation:** this is idiosyncratic, immune-mediated injury. It is rare, unpredictable and not dose-proportional in the usual sense. The shift towards high-bioavailability and piperine-boosted products plausibly raises liver exposure (inference). Anyone taking curcumin supplements who develops jaundice, dark urine, itching, right-upper-quadrant pain or unusual fatigue should stop and get liver tests.

### 7.2 Acceptable daily intake

EFSA set an ADI of **3 mg/kg body weight/day** (about 210 mg/day for a 70 kg adult). It derives from a NOAEL of 250-320 mg/kg/day in a reproductive-toxicity study with a 100-fold uncertainty factor. EFSA found curcumin not carcinogenic or genotoxic [cur-efsa2010]. Many supplements exceed this ADI. Clinical trials used up to 8 g/day short-term without dose-limiting toxicity [cur-cheng2001, cur-sharma2004], but trials are too small and short to detect rare liver injury.

### 7.3 Drug interactions

- **Transporters and enzymes:** curcumin inhibits CYP isoenzymes and P-glycoprotein in vitro and in animals, but human data are sparse [cur-bahramsoltani2017]. One clear human example: 2 g curcumin inhibited intestinal BCRP and raised sulfasalazine exposure **2-3.2-fold** [cur-kusuhara2012]. Other drugs that depend on BCRP for clearance could be affected the same way (inference from mechanism).
- **Piperine:** a single 20 mg dose significantly raised phenytoin levels in people with epilepsy [cur-pattanaik2006]. Piperine-containing products carry interaction risk independent of curcumin.
- **Anticoagulants and antiplatelets:** in rats, curcumin raised warfarin and clopidogrel exposure about 1.5-1.8-fold without changing clotting or platelet function [cur-liu2013]. A short, uncontrolled human study of Meriva found no change in INR on warfarin or dabigatran, or in bleeding time on aspirin, clopidogrel or ticlopidine. It ran only 10 days and came from the product's research group [cur-hu2018]. Prudent practice: avoid high-dose supplements with anticoagulants, or check INR closely when starting or stopping, and stop 1-2 weeks before surgery (precautionary inference).
- **Chemotherapy:** the FOLFOX combination was safe in a small trial [cur-howells2019], but interaction potential with other regimens is largely uncharacterized.

### 7.4 Iron

- In young women, 0.5 g turmeric in a meal **did not reduce iron absorption** (stable-isotope study), whereas chili cut it by 38% [cur-tuntipopipat2006].
- At supplement doses, curcumin acts as an iron chelator in mice. In animals on marginal iron diets it lowered hepcidin and caused iron-deficiency anaemia [cur-jiao2009].
- Practical: culinary turmeric is fine. People with low iron stores, heavy menstrual losses or anaemia should be cautious with high-dose supplements (extrapolated from animal data).

### 7.5 Gallbladder and kidney stones

- Curcumin is cholekinetic. Single doses of 20, 40 and 80 mg contracted the gallbladder by 34%, 51% and 72% within 2 hours [cur-rasyid2002]. Avoid supplements with known gallstones or bile-duct obstruction.
- Supplemental turmeric raised urinary oxalate excretion, because 91% of its oxalate is water-soluble [cur-tang2008]. This is relevant for people with calcium-oxalate stones.

### 7.6 Adulteration: lead chromate

- In Bangladesh, lead chromate pigment (2-10% lead by weight) has been added to turmeric during polishing for decades to brighten its colour, documented in 7 of 9 major producing districts [cur-forsyth2019].
- Across India, Pakistan, Sri Lanka and Nepal, 14% of 356 turmeric samples had detectable lead. Some exceeded 1000 µg/g, with lead:chromium ratios indicating lead chromate [cur-forsyth2024].
- In the US, childhood lead-poisoning cases have been traced to spices. All 32 turmeric samples bought in Boston contained lead, and half exceeded the FDA candy limit of 0.1 ppm [cur-cowell2017].
- Practical: buy turmeric from brands that test for heavy metals. Be wary of unusually bright, cheap loose turmeric, especially when brought back from regions with documented adulteration. This is a bigger real-world risk for children than any curcumin effect.

### 7.7 Other

GI upset is the most common side effect at gram doses. It caused withdrawals in the Alzheimer's trial [cur-ringman2012], and one person had diarrhoea at 150 mg Theracurmin [cur-kanai2012]. There are no adequate pregnancy safety data for supplements.

---

## 8. Practical guide

### 8.1 Culinary turmeric ([turmeric-curcumin])

- **What it can do:** add flavour and colour, and contribute a small gut-local and dietary-pattern effect. It is safe at normal amounts.
- **What it can't do:** reproduce supplement-trial doses. Half a teaspoon to 2 teaspoons (about 1.5-6 g turmeric, 50-190 mg curcumin) is typical cooking use. Trials used 500-1500 mg of curcuminoids, often in enhanced forms. Black pepper and fat are traditional and harmless, but they will not turn food turmeric into a drug [cur-flory2021, cur-mahale2018].
- **Do:** buy tested brands, because of lead risk [cur-forsyth2024].

### 8.2 Supplements ([curcumin-supplements]): when they might be worth it

| Goal | Form and dose used in positive trials | Duration | Notes |
|---|---|---|---|
| Knee OA pain | *C. domestica* extract 1500 mg/day (≈ ibuprofen) [cur-kuptniratsaikul2014]; Theracurmin 180 mg/day curcumin [cur-nakagawa2014]; *C. longa* extract 2 capsules/day [cur-wang2020] | 4-12 weeks | The best-supported use; analgesic, not structure-modifying |
| Raised CRP / metabolic syndrome | 1 g curcuminoids + 10 mg piperine [cur-panahi2015] | 8 weeks | Micellar 294 mg/day was null in milder cases [cur-kocher2016] |
| NAFLD / NASH (with a doctor) | Meriva 2 g/day [cur-musso2025] | 72 weeks | One positive histology trial |
| Prediabetes / type 2 diabetes (adjunct) | ≥1 g/day [cur-bahari2026] | 3-9 months | Smaller than drug effects |
| PCOS (adjunct) | 500-1500 mg/day or nanocurcumin 80 mg two to three times daily [cur-abdelazeem2022, cur-feghhi2024] | 8-12 weeks | Glycaemic only |
| Muscle soreness | 150 mg-2 g/day around damaging exercise [cur-fang2021] | days | Avoid continuous use during adaptation blocks (precaution) |

**Choosing a form:**
- The independent head-to-head data favour micellar and γ-cyclodextrin formulations for absorption [cur-flory2021, cur-purpura2018].
- Phytosome (Meriva) and colloidal (Theracurmin) forms have the most clinical trials behind them [cur-musso2025, cur-small2018, cur-nakagawa2014].
- Higher absorption may also mean higher liver exposure for susceptible people (inference from the case series) [cur-lombardi2021, cur-halegoua2023].

**Don't take curcumin supplements if you:**
- are on anticoagulants or sulfasalazine, or on narrow-therapeutic-index drugs (for example phenytoin with piperine products, or chemotherapy) without medical advice [cur-kusuhara2012, cur-pattanaik2006, cur-bahramsoltani2017]
- have gallstones [cur-rasyid2002]
- have a history of calcium-oxalate stones (caution) [cur-tang2008]
- have low iron stores [cur-jiao2009]
- have liver disease other than in a supervised trial, or a past drug-induced liver injury [cur-halegoua2023]
- are pregnant or trying to conceive with high-dose products (precautionary) [cur-efsa2010, cur-chen2012]

**Monitoring:** if you take a high-bioavailability product for months, a baseline and 1-3-month liver-enzyme check is reasonable, given the 1-4-month latency of reported injury [cur-halegoua2023].

---

## 9. Bottom line

1. **Mechanism:** curcumin is real chemistry (a Michael acceptor that activates Nrf2 in cells) wrapped in a literature with serious integrity and assay-artefact problems [cur-nelson2017, cur-pubmed-retractions]. Free curcumin barely reaches human blood, so direct scavenging is irrelevant and systemic Nrf2/NF-kB effects are at best modest [cur-flory2021, cur-vareed2008, cur-houghton2016].
2. **Culinary turmeric:** safe and pleasant, with no demonstrated systemic antioxidant effect. Watch out for lead-adulterated product [cur-mahale2018, cur-forsyth2024].
3. **Supplements:** the most credible benefit is short-term knee-osteoarthritis pain relief comparable to an NSAID [cur-wang2021, cur-kuptniratsaikul2014]. Smaller, lower-certainty benefits appear for CRP, MDA, glycaemia and NAFLD [cur-dehzad2023, cur-bahari2026, cur-vajdi2025], plus one striking NASH trial that needs replication [cur-musso2025]. Rigorous cancer and Alzheimer's trials were null [cur-cruzcorrea2018, cur-ryanwolf2018, cur-ringman2012].
4. **Fertility:** too thin to recommend. There is one small sperm RCT [cur-alizadeh2018], and PCOS data cover only metabolic markers [cur-mohammadi2025]. Animal oocyte data point both ways [cur-chen2012, cur-azami2020].
5. **With sulforaphane:** likely redundant for Nrf2. Use curcumin only for a separate indication such as joint pain [cur-houghton2016, cur-cheung2009].
6. **Safety:** rare HLA-linked liver injury, BCRP/CYP and piperine drug interactions, gallbladder contraction, oxalate, and possible iron effects at high doses [cur-halegoua2023, cur-kusuhara2012, cur-rasyid2002]. Stay mindful of the EFSA ADI of 3 mg/kg/day [cur-efsa2010].

---

## References

- **[cur-abdelazeem2022]** Abdelazeem B, Abbas KS, Shehata J, et al. (2022). The effects of curcumin as dietary supplement for patients with polycystic ovary syndrome: An updated systematic review and meta-analysis of randomized clinical trials. *Phytother Res*. PMID 34517426; doi:10.1002/ptr.7274. Meta-analysis, n = 5 RCTs, 296 women with PCOS. Curcumin improved fasting glucose (-3.7 mg/dL), insulin, HOMA-IR (-0.55) and total cholesterol, with no effect on LDL, HDL, sex hormones, weight or CRP.
- **[cur-alizadeh2018]** Alizadeh F, Javadi M, Karami AA, et al. (2018). Curcumin nanomicelle improves semen parameters, oxidative stress, inflammatory biomarkers, and reproductive hormones in infertile men: A randomized clinical trial. *Phytother Res*. PMID 29193350; doi:10.1002/ptr.5998. Rct, n = 60 infertile men (56 completed). 80 mg/day curcumin nanomicelle for 10 weeks raised sperm count, concentration and motility and improved TAC, MDA, CRP and TNF-a versus placebo; single small Iranian trial, no pregnancy or DNA-fragmentation outcomes.
- **[cur-altobelli2021]** Altobelli E, Angeletti PM, Marziliano C, et al. (2021). Potential Therapeutic Effects of Curcumin on Glycemic and Lipid Profile in Uncomplicated Type 2 Diabetes-A Meta-Analysis of Randomized Controlled Trial. *Nutrients*. PMID 33514002; doi:10.3390/nu13020404. Meta-analysis, n = RCTs in uncomplicated type 2 diabetes. Curcumin did not significantly lower fasting glucose but did reduce HbA1c, HOMA and LDL in uncomplicated type 2 diabetes.
- **[cur-alvarenga2020]** Alvarenga L, Salarolli R, Cardozo LFMF, et al. (2020). Impact of curcumin supplementation on expression of inflammatory transcription factors in hemodialysis patients: A pilot randomized, double-blind, controlled study. *Clin Nutr*. PMID 32204978; doi:10.1016/j.clnu.2020.03.007. Rct, n = 31 haemodialysis patients (28 completed). A juice containing 2.5 g turmeric three times weekly for 3 months lowered PBMC NF-kB mRNA and hs-CRP (3.8 to 2.0 mg/L) but did not change Nrf2 mRNA.
- **[cur-anand2007]** Anand P, Kunnumakkara AB, Newman RA, et al. (2007). Bioavailability of curcumin: problems and promises. *Mol Pharm*. PMID 17999464; doi:10.1021/mp700113r. Review. Curcumin is tolerated up to 12 g/day but poorly bioavailable because of poor absorption, rapid metabolism and elimination (Aggarwal-lab review; not retracted).
- **[cur-anand2010-retracted]** Anand P, Nair HB, Sung B, et al. (2010). Design of curcumin-loaded PLGA nanoparticles formulation with enhanced cellular uptake, and increased bioactivity in vitro and superior bioavailability in vivo. *Biochem Pharmacol*. PMID 19735646; doi:10.1016/j.bcp.2009.09.003. Mechanistic. RETRACTED. Aggarwal-lab paper claiming PLGA-nanoparticle curcumin had superior bioactivity and bioavailability; cited here only as an example of the lab's retracted curcumin work.
- **[cur-azami2020]** Azami SH, Nazarian H, Abdollahifar MA, et al. (2020). The antioxidant curcumin postpones ovarian aging in young and middle-aged mice. *Reprod Fertil Dev*. PMID 31656219; doi:10.1071/RD18472. Mechanistic. In mice, intraperitoneal curcumin (100 mg/kg/day) preserved follicle numbers, AMH and oocyte quality with age.
- **[cur-bahari2026]** Bahari H, Jazinaki MS, Asadi Z, et al. (2026). Curcumin/Turmeric Supplementation on Glycemic Control in Adults With Prediabetes and Type 2 Diabetes: A Systematic Review and Dose-Response Meta-Analysis. *Food Sci Nutr*. PMID 42005325; doi:10.1002/fsn3.71748. Meta-analysis, n = 34 RCTs. In prediabetes/type 2 diabetes, curcumin/turmeric lowered fasting glucose (-10.2 mg/dL), HbA1c (-0.32%) and HOMA-IR, with larger effects at >=1 g/day; heterogeneity was substantial.
- **[cur-bahramsoltani2017]** Bahramsoltani R, Rahimi R, Farzaei MH (2017). Pharmacokinetic interactions of curcuminoids with conventional drugs: A review. *J Ethnopharmacol*. PMID 28734960; doi:10.1016/j.jep.2017.07.022. Review. Curcumin inhibits CYP isoenzymes and P-glycoprotein and alters drug pharmacokinetics in vitro and in animals; human interaction data are sparse.
- **[cur-balogun2003]** Balogun E, Hoque M, Gong P, et al. (2003). Curcumin activates the haem oxygenase-1 gene via regulation of Nrf2 and the antioxidant-responsive element. *Biochem J*. PMID 12570874; doi:10.1042/BJ20021619. Mechanistic. In renal epithelial cells curcumin activates Nrf2 and induces haem oxygenase-1 through the antioxidant response element.
- **[cur-bankowski2022]** Bańkowski S, Petr M, Rozpara M, et al. (2022). Effect of 6-week curcumin supplementation on aerobic capacity, antioxidant status and sirtuin 3 level in middle-aged amateur long-distance runners. *Redox Rep*. PMID 36125053; doi:10.1080/13510002.2022.2123882. Rct, n = 30 amateur long-distance runners. 2 g/day curcumin for 6 weeks did not change VO2max, antioxidant enzymes, oxidative-stress or muscle-damage markers; resting SIRT3 rose.
- **[cur-bannuru2018]** Bannuru RR, Osani MC, Al-Eid F, et al. (2018). Efficacy of curcumin and Boswellia for knee osteoarthritis: Systematic review and meta-analysis. *Semin Arthritis Rheum*. PMID 29622343; doi:10.1016/j.semarthrit.2018.03.001. Meta-analysis, n = 11 RCTs, 1009 participants. Curcuminoids beat placebo for knee OA pain and function and matched NSAIDs with fewer GI adverse events, but study quality was low and most trials had <100 participants.
- **[cur-belcaro2010]** Belcaro G, Cesarone MR, Dugall M, et al. (2010). Efficacy and safety of Meriva®, a curcumin-phosphatidylcholine complex, during extended administration in osteoarthritis patients. *Altern Med Rev*. PMID 21194249. Cohort, n = 100 adults with OA (non-randomised controlled). Meriva for 8 months improved WOMAC scores and inflammatory markers versus a control group; open, non-randomised design.
- **[cur-carroll2011]** Carroll RE, Benya RV, Turgeon DK, et al. (2011). Phase IIa clinical trial of curcumin for the prevention of colorectal neoplasia. *Cancer Prev Res (Phila)*. PMID 21372035; doi:10.1158/1940-6207.CAPR-10-0098. Cohort, n = 44 smokers with aberrant crypt foci (open-label). Curcumin 4 g/day (not 2 g) for 30 days cut aberrant crypt foci by 40%, but did not change PGE2, 5-HETE or Ki-67; non-randomised.
- **[cur-chen2012]** Chen CC, Chan WH (2012). Injurious effects of curcumin on maturation of mouse oocytes, fertilization and fetal development via apoptosis. *Int J Mol Sci*. PMID 22606002; doi:10.3390/ijms13044655. Mechanistic. In mice, curcumin (in vitro and 40 uM in drinking water) impaired oocyte maturation, fertilisation and early embryo development via apoptosis.
- **[cur-chen2025]** Chen J, Zhou Q, Yu W, et al. (2025). A critical review of systematic reviews and meta-analyses of curcumin for knee osteoarthritis. *Front Pharmacol*. PMID 41560742; doi:10.3389/fphar.2025.1664319. Review, n = 7 systematic reviews. Overview of curcumin-for-knee-OA reviews: methodological quality extremely low, heavy overlap, and 37 of 48 outcomes rated extremely low-quality evidence.
- **[cur-cheng2001]** Cheng AL, Hsu CH, Lin JK, et al. (2001). Phase I clinical trial of curcumin, a chemopreventive agent, in patients with high-risk or pre-malignant lesions. *Anticancer Res*. PMID 11712783. Mechanistic, n = 25 patients with premalignant lesions. Phase I dose escalation from 0.5 to 12 g/day for 3 months found no toxicity up to 8 g/day for 3 months (higher doses were too bulky to take); mean peak serum curcumin was 0.51, 0.63 and 1.77 uM after 4, 6 and 8 g.
- **[cur-cheng2019]** Cheng D, Li W, Wang L, et al. (2019). Pharmacokinetics, Pharmacodynamics, and PKPD Modeling of Curcumin in Regulating Antioxidant and Epigenetic Gene Expression in Healthy Human Volunteers. *Mol Pharm*. PMID 30860383; doi:10.1021/acs.molpharmaceut.8b01246. Mechanistic, n = 12 healthy volunteers (no placebo). After a single 4 g dose, parent curcumin was undetectable in plasma; curcumin glucuronide appeared and leukocyte NRF2/HO-1/NQO1 and HDAC mRNA changes were modelled as responses.
- **[cur-cheng2025]** Cheng YC, Huang WL, Chen WY, et al. (2025). Comparative efficacy and tolerability of nutraceuticals for depressive disorder: A systematic review and network meta-analysis. *Psychol Med*. PMID 40314175; doi:10.1017/S0033291725000996. Meta-analysis, n = 192 trials, 44 nutraceuticals. Network meta-analysis: curcumin added to antidepressants improved symptoms (SMD 1.03), while curcumin monotherapy versus antidepressants was not significant (CI crossed zero).
- **[cur-cheung2009]** Cheung KL, Khor TO, Kong AN (2009). Synergistic effect of combination of phenethyl isothiocyanate and sulforaphane or curcumin and sulforaphane in the inhibition of inflammation. *Pharm Res*. PMID 18841446; doi:10.1007/s11095-008-9734-9. Mechanistic. In cell culture, curcumin plus sulforaphane suppressed inflammatory markers (NO, PGE2, TNF, IL-1) synergistically, with synergistic HO-1 and NQO1 induction; no human data.
- **[cur-chien2021]** Chien YJ, Chang CY, Wu MY, et al. (2021). Effects of Curcumin on Glycemic Control and Lipid Profile in Polycystic Ovary Syndrome: Systematic Review with Meta-Analysis and Trial Sequential Analysis. *Nutrients*. PMID 33669954; doi:10.3390/nu13020684. Meta-analysis, n = 3 RCTs in PCOS. Curcumin improved fasting glucose, insulin, HOMA-IR (-0.32), HDL and total cholesterol but not LDL or triglycerides.
- **[cur-choi2019]** Choi YH, Han DH, Kim SW, et al. (2019). A randomized, double-blind, placebo-controlled trial to evaluate the role of curcumin in prostate cancer patients with intermittent androgen deprivation. *Prostate*. PMID 30671976; doi:10.1002/pros.23766. Rct, n = 97 men with prostate cancer on intermittent ADT. Curcumin 1440 mg/day for 6 months did not lengthen the off-treatment interval versus placebo.
- **[cur-chuengsamarn2012]** Chuengsamarn S, Rattanamongkolgul S, Luechapudiporn R, et al. (2012). Curcumin extract for prevention of type 2 diabetes. *Diabetes Care*. PMID 22773702; doi:10.2337/dc12-0116. Rct, n = 240 adults with prediabetes. 9 months of curcumin extract: 0% vs 16.4% progressed to type 2 diabetes, with better HOMA-beta and HOMA-IR; an unusually large single-trial effect not yet replicated.
- **[cur-cowell2017]** Cowell W, Ireland T, Vorhees D, et al. (2017). Ground Turmeric as a Source of Lead Exposure in the United States. *Public Health Rep*. PMID 28358991; doi:10.1177/0033354917700109. Cross-sectional, n = 32 turmeric samples. Describes US childhood lead-poisoning cases traced to spices; all 32 turmeric samples bought in Boston contained lead (0.03-99.5 ppm), half above the FDA candy limit of 0.1 ppm.
- **[cur-cox2015]** Cox KH, Pipingas A, Scholey AB (2015). Investigation of the effects of solid lipid curcumin on cognition and mood in a healthy older population. *J Psychopharmacol*. PMID 25277322; doi:10.1177/0269881114552744. Rct, n = 60 healthy adults aged 60-85. Longvida solid-lipid curcumin 400 mg improved attention and working memory acutely and after 4 weeks, and lowered total and LDL cholesterol.
- **[cur-cruzcorrea2018]** Cruz-Correa M, Hylind LM, Marrero JH, et al. (2018). Efficacy and Safety of Curcumin in Treatment of Intestinal Adenomas in Patients With Familial Adenomatous Polyposis. *Gastroenterology*. PMID 29802852; doi:10.1053/j.gastro.2018.05.031. Rct, n = 44 patients with familial adenomatous polyposis. Pure curcumin 3 g/day for 12 months did not reduce the number or size of intestinal adenomas versus placebo.
- **[cur-cuomo2011]** Cuomo J, Appendino G, Dern AS, et al. (2011). Comparative absorption of a standardized curcuminoid mixture and its lecithin formulation. *J Nat Prod*. PMID 21413691; doi:10.1021/np1007262. Rct, n = healthy volunteers (crossover). Phospholipid curcumin (Meriva) raised total curcuminoid absorption about 29-fold, but only phase-2 conjugates were detected and levels stayed below those needed for most anti-inflammatory targets.
- **[cur-dehzad2023]** Dehzad MJ, Ghalandari H, Nouri M, et al. (2023). Antioxidant and anti-inflammatory effects of curcumin/turmeric supplementation in adults: A GRADE-assessed systematic review and dose-response meta-analysis of randomized controlled trials. *Cytokine*. PMID 36804260; doi:10.1016/j.cyto.2023.156144. Meta-analysis, n = 66 RCTs. Turmeric/curcumin lowered CRP (-0.58 mg/L), TNF-a and IL-6 (-1.31 pg/mL), raised TAC (+0.21 mmol/L) and SOD, and lowered MDA (-0.33 umol/L); IL-1b unchanged.
- **[cur-dehzad2023b]** Dehzad MJ, Ghalandari H, Amini MR, et al. (2023). Effects of curcumin/turmeric supplementation on lipid profile: A GRADE-assessed systematic review and dose-response meta-analysis of randomized controlled trials. *Complement Ther Med*. PMID 37230418; doi:10.1016/j.ctim.2023.102955. Meta-analysis, n = 64 RCTs. Turmeric/curcumin lowered TC (-4.0 mg/dL), TG (-6.7), LDL (-4.9) and raised HDL (+1.8) but did not change ApoA or ApoB; GRADE certainty low to very low.
- **[cur-dhillon2008]** Dhillon N, Aggarwal BB, Newman RA, et al. (2008). Phase II trial of curcumin in patients with advanced pancreatic cancer. *Clin Cancer Res*. PMID 18628464; doi:10.1158/1078-0432.CCR-08-0024. Cohort, n = 25 patients with advanced pancreatic cancer (single-arm). 8 g/day curcumin: low circulating conjugates, 2 of 21 evaluable patients showed biological activity; uncontrolled phase II.
- **[cur-dinkovakostova2008]** Dinkova-Kostova AT, Talalay P (2008). Direct and indirect antioxidant properties of inducers of cytoprotective proteins. *Mol Nutr Food Res*. PMID 18327872; doi:10.1002/mnfr.200700195. Review. Indirect antioxidants (Nrf2 inducers) act catalytically and durably through induced enzymes, unlike sacrificial direct antioxidants.
- **[cur-ebrahimzadeh2024]** Ebrahimzadeh A, Mohseni S, Safargar M, et al. (2024). Curcumin effects on glycaemic indices, lipid profile, blood pressure, inflammatory markers and anthropometric measurements of non-alcoholic fatty liver disease patients: A systematic review and meta-analysis of randomized clinical trials. *Complement Ther Med*. PMID 38232906; doi:10.1016/j.ctim.2024.103025. Meta-analysis, n = 21 RCTs, 1191 participants. In NAFLD, curcumin 50-3000 mg/day lowered fasting glucose, HOMA-IR, TG, TC, LDL and weight but not HbA1c, CRP, TNF-a or blood pressure; authors flag bias and possible adulteration.
- **[cur-efsa2010]** EFSA Panel on Food Additives and Nutrient Sources added to Food (ANS) (2010). Scientific Opinion on the re-evaluation of curcumin (E 100) as a food additive. *EFSA J*. doi:10.2903/j.efsa.2010.1679. Guideline. Set an ADI of 3 mg/kg bw/day for curcumin, from a NOAEL of 250-320 mg/kg bw/day (lower F2 body-weight gain in a reproductive toxicity study) with a 100-fold uncertainty factor; not carcinogenic or genotoxic.
- **[cur-fang2021]** Fang W, Nasir Y (2021). The effect of curcumin supplementation on recovery following exercise-induced muscle damage and delayed-onset muscle soreness: A systematic review and meta-analysis of randomized controlled trials. *Phytother Res*. PMID 33174301; doi:10.1002/ptr.6912. Meta-analysis, n = RCTs on exercise-induced muscle damage. Curcumin lowered creatine kinase (-48.5 IU/L) and muscle-soreness scores (WMD -0.48) after damaging exercise.
- **[cur-feghhi2024]** Feghhi F, Ghaznavi H, Sheervalilou R, et al. (2024). Effects of metformin and curcumin in women with polycystic ovary syndrome: A factorial clinical trial. *Phytomedicine*. PMID 39461199; doi:10.1016/j.phymed.2024.156160. Rct, n = 200 women with PCOS (factorial). Nanocurcumin 80 mg three times daily plus metformin improved lipids, glucose markers, weight and testosterone more than either agent alone or placebo over 12 weeks.
- **[cur-ferguson2021]** Ferguson JJA, Abbott KA, Garg ML (2021). Anti-inflammatory effects of oral supplementation with curcumin: a systematic review and meta-analysis of randomized controlled trials. *Nutr Rev*. PMID 34378053; doi:10.1093/nutrit/nuaa114. Meta-analysis, n = 32 RCTs, 2038 participants. Curcumin lowered CRP (-1.55 mg/L), IL-6 (-1.69 pg/mL) and TNF-a; authors note dose, duration and formulation remain unresolved.
- **[cur-flory2021]** Flory S, Sus N, Haas K, et al. (2021). Increasing Post-Digestive Solubility of Curcumin Is the Most Successful Strategy to Improve its Oral Bioavailability: A Randomized Cross-Over Trial in Healthy Adults and In Vitro Bioaccessibility Experiments. *Mol Nutr Food Res*. PMID 34665507; doi:10.1002/mnfr.202100613. Rct, n = 12 healthy adults (crossover). Head-to-head test of 8 formulations at 207 mg curcumin: no free curcumin was detected in anyone; only micelles (57-fold) and gamma-cyclodextrin (30-fold) significantly raised conjugate AUC; piperine-type adjuvants did not.
- **[cur-forsyth2019]** Forsyth JE, Nurunnahar S, Islam SS, et al. (2019). Turmeric means "yellow" in Bengali: Lead chromate pigments added to turmeric threaten public health across Bangladesh. *Environ Res*. PMID 31550596; doi:10.1016/j.envres.2019.108722. Cross-sectional. Lead chromate pigment (2-10% lead by weight) is added to turmeric during polishing in 7 of 9 major producing districts of Bangladesh to meet demand for bright yellow colour.
- **[cur-forsyth2024]** Forsyth JE, Mistree D, Nash E, et al. (2024). Evidence of turmeric adulteration with lead chromate across South Asia. *Sci Total Environ*. PMID 39053552; doi:10.1016/j.scitotenv.2024.175003. Cross-sectional, n = 356 turmeric samples, 23 cities. 14% of turmeric samples from India, Pakistan, Sri Lanka and Nepal had detectable lead (>2 ug/g); some exceeded 1000 ug/g with 1:1 lead:chromium ratios indicating lead chromate.
- **[cur-funamoto2019]** Funamoto M, Shimizu K, Sunagawa Y, et al. (2019). Effects of Highly Absorbable Curcumin in Patients with Impaired Glucose Tolerance and Non-Insulin-Dependent Diabetes Mellitus. *J Diabetes Res*. PMID 31871950; doi:10.1155/2019/8208237. Rct, n = 33 adults with IGT/type 2 diabetes. Theracurmin 180 mg/day for 6 months did not change HbA1c (primary endpoint); oxidised LDL rose in the placebo group but not with curcumin.
- **[cur-garcea2004]** Garcea G, Jones DJ, Singh R, et al. (2004). Detection of curcumin and its metabolites in hepatic tissue and portal blood of patients following oral administration. *Br J Cancer*. PMID 14997198; doi:10.1038/sj.bjc.6601623. Mechanistic, n = 12 patients with liver metastases. 0.45-3.6 g/day curcumin for 1 week gave only low nanomolar parent and conjugates in portal and peripheral blood and no curcumin in liver tissue; oxidative DNA adducts in liver were not reduced.
- **[cur-garcea2005]** Garcea G, Berry DP, Jones DJ, et al. (2005). Consumption of the putative chemopreventive agent curcumin by cancer patients: assessment of curcumin levels in the colorectum and their pharmacodynamic consequences. *Cancer Epidemiol Biomarkers Prev*. PMID 15668484. Mechanistic, n = 12 colorectal cancer patients. 3.6 g/day curcumin for 7 days gave colorectal tissue curcumin of ~8-13 nmol/g and lowered M1G DNA adducts in tissue: the gut wall is the one site where gram doses reach meaningful levels.
- **[cur-ghanbarzadeh2023]** Ghanbarzadeh-Ghashti N, Ghanbari-Homaie S, Shaseb E, et al. (2023). The effect of Curcumin on metabolic parameters and androgen level in women with polycystic ovary syndrome: a randomized controlled trial. *BMC Endocr Disord*. PMID 36788534; doi:10.1186/s12902-023-01295-5. Rct, n = women with PCOS (Iran). 1000 mg/day curcumin for 12 weeks lowered fasting glucose and reduced amenorrhoea/oligomenorrhoea (13% vs 22%) versus placebo, but did not change lipids, insulin, SHBG, testosterone or hirsutism.
- **[cur-gomezcabrera2008]** Gomez-Cabrera MC, Domenech E, Romagnoli M, et al. (2008). Oral administration of vitamin C decreases muscle mitochondrial biogenesis and hampers training-induced adaptations in endurance performance. *Am J Clin Nutr*. PMID 18175748; doi:10.1093/ajcn/87.1.142. Rct, n = 14 men (plus rats). 1 g/day vitamin C reduced training-induced mitochondrial biogenesis and endurance adaptations.
- **[cur-gudarzi2024]** Gudarzi R, Shabani F, Mohammad-Alizadeh-Charandabi S, et al. (2024). Effect of curcumin on painful symptoms of endometriosis: A triple-blind randomized controlled trial. *Phytother Res*. PMID 37818734; doi:10.1002/ptr.8030. Rct, n = 68 women with endometriosis. Curcumin 1000 mg/day for 8 weeks did not improve endometriosis pain or quality of life versus placebo.
- **[cur-halegoua2023]** Halegoua-DeMarzio D, Navarro V, Ahmad J, et al. (2023). Liver Injury Associated with Turmeric-A Growing Problem: Ten Cases from the Drug-Induced Liver Injury Network [DILIN]. *Am J Med*. PMID 36252717; doi:10.1016/j.amjmed.2022.09.026. Review, n = 10 DILIN cases. US DILIN turmeric liver-injury cases rose since 2011; typically hepatocellular after 1-4 months, one death, 3 of 7 tested products contained piperine, and 7 of 10 patients carried HLA-B*35:01.
- **[cur-heger2014]** Heger M, van Golen RF, Broekgaarden M, et al. (2014). The molecular basis for the pharmacokinetics and pharmacodynamics of curcumin and its metabolites in relation to cancer. *Pharmacol Rev*. PMID 24368738; doi:10.1124/pr.110.004044. Review. Detailed review of curcumin's chemistry (Michael acceptor, metal binding, photochemical instability), poor pharmacokinetics and metabolites in relation to cancer.
- **[cur-houghton2016]** Houghton CA, Fassett RG, Coombes JS (2016). Sulforaphane and Other Nutrigenomic Nrf2 Activators: Can the Clinician's Expectation Be Matched by the Reality?. *Oxid Med Cell Longev*. PMID 26881038; doi:10.1155/2016/7857186. Review. Sulforaphane activates Nrf2 more potently and is far more bioavailable than curcumin, silymarin or resveratrol.
- **[cur-howells2019]** Howells LM, Iwuji COO, Irving GRB, et al. (2019). Curcumin Combined with FOLFOX Chemotherapy Is Safe and Tolerable in Patients with Metastatic Colorectal Cancer in a Randomized Phase IIa Trial. *J Nutr*. PMID 31132111; doi:10.1093/jn/nxz029. Rct, n = 28 patients with metastatic colorectal cancer. Adding 2 g/day curcumin to FOLFOX was safe; exploratory overall-survival HR 0.34 in an open-label phase IIa trial too small for efficacy conclusions.
- **[cur-hu2018]** Hu S, Belcaro G, Dugall M, et al. (2018). Interaction study between antiplatelet agents, anticoagulants, thyroid replacement therapy and a bioavailable formulation of curcumin (Meriva®). *Eur Rev Med Pharmacol Sci*. PMID 30070343; doi:10.26355/eurrev_201808_15647. Cohort, n = patients on antiplatelets, anticoagulants, levothyroxine or metformin. 10-15 days of Meriva did not change bleeding time on aspirin/clopidogrel/ticlopidine, INR on warfarin or dabigatran, thyroid tests or glycaemia; short, uncontrolled, sponsor-linked.
- **[cur-jager2014]** Jäger R, Lowery RP, Calvanese AV, et al. (2014). Comparative absorption of curcumin formulations. *Nutr J*. PMID 24461029; doi:10.1186/1475-2891-13-11. Rct, n = healthy volunteers (crossover). Relative to standard curcumin, total curcuminoid exposure was 1.3-fold higher with turmeric-oil formulation, 7.9-fold with phytosome and 45.9-fold with a hydrophilic-carrier formulation (CHC).
- **[cur-jakubczyk2020]** Jakubczyk K, Drużga A, Katarzyna J, et al. (2020). Antioxidant Potential of Curcumin-A Meta-Analysis of Randomized Clinical Trials. *Antioxidants (Basel)*. PMID 33172016; doi:10.3390/antiox9111092. Meta-analysis, n = 4 RCTs, 308 participants. Curcumin (mean 645 mg/day, ~67 days) raised total antioxidant capacity (SMD 2.70) and non-significantly lowered MDA (SMD -1.58, p=0.086); only four trials qualified.
- **[cur-jannatifar2025]** Jannatifar R, Asa E, Cheraghi E, et al. (2025). Nanomicelle curcumin improves oxidative stress, inflammatory markers, and assisted reproductive techniques outcomes in endometriosis cases: a randomized clinical trial. *Naunyn Schmiedebergs Arch Pharmacol*. PMID 40088332; doi:10.1007/s00210-025-03958-7. Rct, n = 50 women with stage III/IV endometriosis undergoing ART. Nanomicelle curcumin 120 mg/day for 10 weeks improved serum and follicular-fluid oxidative-stress markers and reported more oocytes, mature oocytes and good embryos; small single-centre trial.
- **[cur-jiao2009]** Jiao Y, Wilkinson J 4th, Di X, et al. (2009). Curcumin, a cancer chemopreventive and chemotherapeutic agent, is a biologically active iron chelator. *Blood*. PMID 18815282; doi:10.1182/blood-2008-05-155952. Mechanistic. In mice with marginal iron intake, dietary curcumin acted as an iron chelator, lowered hepcidin and caused iron-deficiency anaemia.
- **[cur-kanai2012]** Kanai M, Imaizumi A, Otsuka Y, et al. (2012). Dose-escalation and pharmacokinetic study of nanoparticle curcumin, a potential anticancer agent with improved bioavailability, in healthy human volunteers. *Cancer Chemother Pharmacol*. PMID 21603867; doi:10.1007/s00280-011-1673-1. Mechanistic, n = 6 healthy volunteers. Theracurmin nanoparticle curcumin at 150 and 210 mg gave mean plasma Cmax of 189 and 275 ng/mL, without saturating absorption.
- **[cur-kavyani2024]** Kavyani Z, Najafi K, Naghsh N, et al. (2024). The effects of curcumin supplementation on biomarkers of inflammation, oxidative stress, and endothelial function: A meta-analysis of meta-analyses. *Prostaglandins Other Lipid Mediat*. PMID 38945354; doi:10.1016/j.prostaglandins.2024.106867. Meta-analysis, n = 21 meta-analyses. Umbrella analysis: curcumin lowered CRP (-0.87 mg/L), IL-6, TNF-a and MDA, raised SOD, GPx, catalase and FMD (+1.64%), but did not significantly change TAC.
- **[cur-kocher2016]** Kocher A, Bohnert L, Schiborr C, et al. (2016). Highly bioavailable micellar curcuminoids accumulate in blood, are safe and do not reduce blood lipids and inflammation markers in moderately hyperlipidemic individuals. *Mol Nutr Food Res*. PMID 26909743; doi:10.1002/mnfr.201501034. Rct, n = 42 adults with raised cholesterol/CRP (crossover). 294 mg/day micellar curcuminoids for 6 weeks reached fasting plasma ~49 nmol/L but did not change lipids, CRP or other inflammation markers versus placebo.
- **[cur-kuptniratsaikul2014]** Kuptniratsaikul V, Dajpratham P, Taechaarpornkul W, et al. (2014). Efficacy and safety of Curcuma domestica extracts compared with ibuprofen in patients with knee osteoarthritis: a multicenter study. *Clin Interv Aging*. PMID 24672232; doi:10.2147/CIA.S58535. Rct, n = 367 adults with knee OA. Curcuma domestica extract 1500 mg/day was non-inferior to ibuprofen 1200 mg/day over 4 weeks on WOMAC, with fewer abdominal complaints.
- **[cur-kusuhara2012]** Kusuhara H, Furuie H, Inano A, et al. (2012). Pharmacokinetic interaction study of sulphasalazine in healthy subjects and the impact of curcumin as an in vivo inhibitor of BCRP. *Br J Pharmacol*. PMID 22300367; doi:10.1111/j.1476-5381.2012.01887.x. Mechanistic, n = 8 healthy volunteers. 2 g curcumin inhibited intestinal BCRP and raised sulfasalazine exposure 2.0-3.2-fold in humans.
- **[cur-lao2006]** Lao CD, Ruffin MT 4th, Normolle D, et al. (2006). Dose escalation of a curcuminoid formulation. *BMC Complement Altern Med*. PMID 16545122; doi:10.1186/1472-6882-6-10. Mechanistic, n = 24 healthy volunteers. Single doses of 0.5-12 g curcumin were well tolerated; no curcumin was detected in serum at 0.5-8 g and only low levels in two subjects at 10-12 g.
- **[cur-lee2024]** Lee YM, Kim Y (2024). Is Curcumin Intake Really Effective for Chronic Inflammatory Metabolic Disease? A Review of Meta-Analyses of Randomized Controlled Trials. *Nutrients*. PMID 38892660; doi:10.3390/nu16111728. Review, n = 54 meta-analyses. Review of meta-analyses: CRP fell in 7 of 10, IL-6 in 5 of 8, MDA in 5 of 6, fasting glucose in 14 of 15 and HOMA-IR in 12 of 12 meta-analyses of curcumin RCTs.
- **[cur-liu2013]** Liu AC, Zhao LX, Lou HX (2013). Curcumin alters the pharmacokinetics of warfarin and clopidogrel in Wistar rats but has no effect on anticoagulation or antiplatelet aggregation. *Planta Med*. PMID 23807811; doi:10.1055/s-0032-1328652. Mechanistic. In rats, 100 mg/kg curcumin raised warfarin and clopidogrel exposure (~1.5-1.8-fold) without changing prothrombin time or platelet aggregation.
- **[cur-liu2018]** Liu X, Machado GC, Eyles JP, et al. (2018). Dietary supplements for treating osteoarthritis: a systematic review and meta-analysis. *Br J Sports Med*. PMID 29018060; doi:10.1136/bjsports-2016-097333. Meta-analysis, n = 69 RCTs (20 supplements). Curcuma longa extract and curcumin were among 7 supplements with large short-term effects on OA pain, but no supplement showed clinically important long-term pain relief.
- **[cur-liu2024]** Liu X, Lin L, Hu G (2024). Meta-analysis of the effect of curcumin supplementation on skeletal muscle damage status. *PLoS One*. PMID 39008500; doi:10.1371/journal.pone.0299135. Meta-analysis, n = 14 studies, 349 participants. Curcumin reduced muscle soreness (MD -0.61), CK (MD -137) and IL-6 and improved range of motion after exercise.
- **[cur-lombardi2021]** Lombardi N, Crescioli G, Maggini V, et al. (2021). Acute liver injury following turmeric use in Tuscany: An analysis of the Italian Phytovigilance database and systematic review of case reports. *Br J Clin Pharmacol*. PMID 32656820; doi:10.1111/bcp.14460. Review, n = 7 Tuscan cases + 23 published cases. Italian phytovigilance cases of acute (mostly cholestatic) hepatitis were all linked to high-bioavailability, high-dose curcumin products; positive dechallenge in most.
- **[cur-luis2020]** Luis PB, Kunihiro AG, Funk JL, et al. (2020). Incomplete Hydrolysis of Curcumin Conjugates by β-Glucuronidase: Detection of Complex Conjugates in Plasma. *Mol Nutr Food Res*. PMID 31962379; doi:10.1002/mnfr.201901037. Mechanistic. Beta-glucuronidase only partly hydrolyses curcumin conjugates in plasma (complex sulfate conjugates remain), so 'total curcumin' assays differ by method and are hard to compare.
- **[cur-mahale2018]** Mahale J, Singh R, Howells LM, et al. (2018). Detection of Plasma Curcuminoids from Dietary Intake of Turmeric-Containing Food in Human Volunteers. *Mol Nutr Food Res*. PMID 29943914; doi:10.1002/mnfr.201800267. Mechanistic, n = healthy volunteers (pilot). After a turmeric-containing meal at South Asian culinary levels, curcumin glucuronide peaked at ~48 nM and free curcumin was detectable (3.2 nM) in only one volunteer.
- **[cur-menniti2020]** Menniti-Ippolito F, Ippoliti I, Pastorelli AA, et al. (2020). Turmeric (Curcuma longa L.) food supplements and hepatotoxicity: an integrated evaluation approach. *Ann Ist Super Sanita*. PMID 33346172; doi:10.4415/ANN_20_04_08. Review, n = 28 spontaneous reports. A 2019 Italian cluster of 28 acute hepatitis reports linked to turmeric supplements; product testing looked for drugs, metals, aflatoxins, dyes and pyrrolizidine alkaloids, and regulators intervened.
- **[cur-mohammadi2025]** Mohammadi S, Ziaei S, Morvaridi M, et al. (2025). Impacts of Curcumin Supplementation on Cardiometabolic Risk Factors in Patients With Polycystic Ovary Syndrome: A Systematic Review and Dose-Response Meta-Analysis. *Health Sci Rep*. PMID 40041784; doi:10.1002/hsr2.70525. Meta-analysis, n = 8 RCTs in PCOS. Curcumin modestly lowered fasting glucose, insulin, HOMA-IR (SMD -0.36) and TC, but did not change BMI, testosterone, DHEA, LH or FSH.
- **[cur-musazadeh2026]** Musazadeh V, Faghfouri AH, Falahatzadeh M, et al. (2026). Efficacy of curcumin in depression: A grade-assessed systematic review and meta-analysis of randomized controlled trials. *Ann Gen Psychiatry*. PMID 42472817; doi:10.1186/s12991-026-00676-z. Meta-analysis, n = 19 RCTs. Curcumin improved depression (SMD -0.76) and depressive symptoms (SMD -0.53) but heterogeneity was very high (I2 >85%) and the effect was fragile in sensitivity analysis.
- **[cur-musso2025]** Musso G, Pinach S, Mariano F, et al. (2025). Effect of phospholipid curcumin Meriva on liver histology and kidney disease in nonalcoholic steatohepatitis: A randomized, double-blind, placebo-controlled trial. *Hepatology*. PMID 38809154; doi:10.1097/HEP.0000000000000937. Rct, n = 52 adults with biopsy-proven NASH. Meriva 2 g/day for 72 weeks: NASH resolution in 62% vs 12% on placebo and fibrosis improvement in 50% vs 8%; single trial, needs replication.
- **[cur-nakagawa2014]** Nakagawa Y, Mukai S, Yamada S, et al. (2014). Short-term effects of highly-bioavailable curcumin for treating knee osteoarthritis: a randomized, double-blind, placebo-controlled prospective study. *J Orthop Sci*. PMID 25308211; doi:10.1007/s00776-014-0633-0. Rct, n = 50 adults with knee OA. Theracurmin (180 mg/day curcumin) for 8 weeks lowered knee-pain VAS versus placebo (except in mild cases) and reduced celecoxib use; developer-affiliated study.
- **[cur-naz2011]** Naz RK (2011). Can curcumin provide an ideal contraceptive?. *Mol Reprod Dev*. PMID 21337449; doi:10.1002/mrd.21276. Mechanistic. Curcumin added to human and mouse sperm caused concentration-dependent loss of forward motility, capacitation and fertilisation in vitro, and intravaginal curcumin reduced fertility in mice.
- **[cur-nelson2017]** Nelson KM, Dahlin JL, Bisson J, et al. (2017). The Essential Medicinal Chemistry of Curcumin. *J Med Chem*. PMID 28074653; doi:10.1021/acs.jmedchem.6b00975. Review. Argues curcumin is a PAINS/IMPS compound that is chemically unstable, reactive and not bioavailable; states that no double-blind placebo-controlled curcumin trial had been successful as of 2017.
- **[cur-nelson2017b]** Nelson KM, Dahlin JL, Bisson J, et al. (2017). Curcumin May (Not) Defy Science. *ACS Med Chem Lett*. PMID 28523093; doi:10.1021/acsmedchemlett.7b00139. Review. The authors' follow-up reply to critics of their 2017 review, maintaining that curcumin is an improbable drug lead.
- **[cur-ng2006]** Ng TP, Chiam PC, Lee T, et al. (2006). Curry consumption and cognitive function in the elderly. *Am J Epidemiol*. PMID 16870699; doi:10.1093/aje/kwj267. Cohort, n = 1010 older Singaporean adults. Occasional or frequent curry eaters had better MMSE scores than never/rare eaters (cross-sectional association, confounding possible).
- **[cur-ng2017]** Ng QX, Koh SSH, Chan HW, et al. (2017). Clinical Use of Curcumin in Depression: A Meta-Analysis. *J Am Med Dir Assoc*. PMID 28236605; doi:10.1016/j.jamda.2016.12.071. Meta-analysis, n = 6 trials, 377 patients. Curcumin improved Hamilton depression scores versus placebo (SMD -0.34); few, small trials.
- **[cur-pal2014]** Pal A, Sung B, Bhanu Prasad BA, et al. (2014). Curcumin glucuronides: assessing the proliferative activity against human cell lines. *Bioorg Med Chem*. PMID 24280069; doi:10.1016/j.bmc.2013.11.006. Mechanistic. Curcumin killed cancer cell lines at 1-10 uM, but its mono- and di-glucuronides (the main circulating forms) showed no antiproliferative activity.
- **[cur-panahi2015]** Panahi Y, Hosseini MS, Khalili N, et al. (2015). Antioxidant and anti-inflammatory effects of curcuminoid-piperine combination in subjects with metabolic syndrome: A randomized controlled trial and an updated meta-analysis. *Clin Nutr*. PMID 25618800; doi:10.1016/j.clnu.2014.12.019. Rct, n = 117 adults with metabolic syndrome. 1 g/day curcuminoids plus 10 mg piperine for 8 weeks raised SOD and lowered MDA and CRP versus placebo (Iranian trial, with an accompanying CRP meta-analysis).
- **[cur-pattanaik2006]** Pattanaik S, Hota D, Prabhakar S, et al. (2006). Effect of piperine on the steady-state pharmacokinetics of phenytoin in patients with epilepsy. *Phytother Res*. PMID 16767797; doi:10.1002/ptr.1937. Mechanistic, n = 20 patients with epilepsy. A single 20 mg piperine dose significantly raised phenytoin AUC and Cmax at steady state.
- **[cur-poolsup2019-retracted]** Poolsup N, Suksomboon N, Kurnianta PDM, et al. (2019). Effects of curcumin on glycemic control and lipid profile in prediabetes and type 2 diabetes mellitus: A systematic review and meta-analysis. *PLoS One*. PMID 31013312; doi:10.1371/journal.pone.0215840. Meta-analysis. RETRACTED. A meta-analysis of curcumin on glycaemic control and lipids in prediabetes/type 2 diabetes; cited only to flag that it was withdrawn and should not be used.
- **[cur-pubmed-retractions]** US National Library of Medicine (2026). PubMed searches 'Aggarwal BB[au] AND retracted publication[pt]' and 'curcumin AND retracted publication[pt]', run 2026-10-01 via NCBI E-utilities. *PubMed*. https://pubmed.ncbi.nlm.nih.gov/?term=curcumin+AND+retracted+publication%5Bpt%5D. Database. Returned 27 retracted publications with BB Aggarwal as author and 162 retracted publications mentioning curcumin.
- **[cur-purpura2018]** Purpura M, Lowery RP, Wilson JM, et al. (2018). Analysis of different innovative formulations of curcumin for improved relative oral bioavailability in human subjects. *Eur J Nutr*. PMID 28204880; doi:10.1007/s00394-016-1376-9. Rct, n = 12 healthy adults (crossover). A gamma-cyclodextrin curcumin complex gave 39-fold higher total curcuminoid AUC than unformulated extract, exceeding a phytosome and a turmeric-oil formulation.
- **[cur-qin2018]** Qin S, Huang L, Gong J, et al. (2018). Meta-analysis of randomized controlled trials of 4 weeks or longer suggest that curcumin may afford some protection against oxidative stress. *Nutr Res*. PMID 30527253; doi:10.1016/j.nutres.2018.08.003. Meta-analysis, n = 8 RCTs, 626 participants. Curcumin >=4 weeks lowered MDA (SMD -0.77) and raised SOD (SMD 1.08) with no change in RBC GPx; the MDA effect appeared at >=600 mg/day curcuminoids.
- **[cur-raineysmith2016]** Rainey-Smith SR, Brown BM, Sohrabi HR, et al. (2016). Curcumin and cognition: a randomised, placebo-controlled, double-blind study of community-dwelling older adults. *Br J Nutr*. PMID 27102361; doi:10.1017/S0007114516001203. Rct, n = 96 community-dwelling older adults. Biocurcumax 1500 mg/day for 12 months: no difference on most cognitive measures; one MoCA interaction driven by decline in the placebo group at 6 months.
- **[cur-rasyid2002]** Rasyid A, Rahman AR, Jaalam K, et al. (2002). Effect of different curcumin dosages on human gall bladder. *Asia Pac J Clin Nutr*. PMID 12495265; doi:10.1046/j.1440-6047.2002.00296.x. Rct, n = 12 healthy volunteers (crossover). Curcumin 20, 40 and 80 mg contracted the gallbladder by 34%, 51% and 72% within 2 h.
- **[cur-rayhamidie2015]** Ray Hamidie RD, Yamada T, Ishizawa R, et al. (2015). Curcumin treatment enhances the effect of exercise on mitochondrial biogenesis in skeletal muscle by increasing cAMP levels. *Metabolism*. PMID 26278015; doi:10.1016/j.metabol.2015.07.010. Mechanistic. In rats, injected curcumin plus endurance training increased muscle mitochondrial biogenesis markers more than training alone (via cAMP/PKA, AMPK/PGC-1a).
- **[cur-ringman2012]** Ringman JM, Frautschy SA, Teng E, et al. (2012). Oral curcumin for Alzheimer's disease: tolerability and efficacy in a 24-week randomized, double blind, placebo-controlled study. *Alzheimers Res Ther*. PMID 23107780; doi:10.1186/alzrt146. Rct, n = 36 adults with mild-moderate Alzheimer's. Curcumin C3 Complex 2 or 4 g/day for 24 weeks showed no clinical or biomarker benefit; native plasma curcumin was low (7.3 ng/mL) and 3 withdrew for GI symptoms.
- **[cur-ristow2009]** Ristow M, Zarse K, Oberbach A, et al. (2009). Antioxidants prevent health-promoting effects of physical exercise in humans. *Proc Natl Acad Sci U S A*. PMID 19433800; doi:10.1073/pnas.0903485106. Rct, n = 40 young men. Vitamin C 1000 mg plus vitamin E 400 IU/day blocked exercise-induced gains in insulin sensitivity and induction of endogenous antioxidant defences.
- **[cur-ryanwolf2018]** Ryan Wolf J, Heckler CE, Guido JJ, et al. (2018). Oral curcumin for radiation dermatitis: a URCC NCORP study of 686 breast cancer patients. *Support Care Cancer*. PMID 29192329; doi:10.1007/s00520-017-3957-4. Rct, n = 686 breast cancer patients. Oral curcumin 6 g/day during radiotherapy did not reduce radiation dermatitis severity versus placebo.
- **[cur-sadraei2022]** Sadraei MR, Tavalaee M, Forouzanfar M, et al. (2022). Effect of curcumin, and nano-curcumin on sperm function in varicocele rat model. *Andrologia*. PMID 34755901; doi:10.1111/and.14282. Mechanistic. In varicocele rats, oral curcumin and nano-curcumin improved sperm concentration, motility, lipid peroxidation and DNA damage.
- **[cur-sahebkar2014]** Sahebkar A (2014). A systematic review and meta-analysis of randomized controlled trials investigating the effects of curcumin on blood lipid levels. *Clin Nutr*. PMID 24139527; doi:10.1016/j.clnu.2013.09.012. Meta-analysis, n = 5 RCTs, 223 participants. Early meta-analysis found no significant effect of curcumin on any blood lipid.
- **[cur-santonastaso2021]** Santonastaso M, Mottola F, Iovine C, et al. (2021). Protective Effects of Curcumin on the Outcome of Cryopreservation in Human Sperm. *Reprod Sci*. PMID 33861392; doi:10.1007/s43032-021-00572-9. Mechanistic. Adding 20 uM curcumin to freezing medium improved post-thaw motility and lowered ROS and DNA fragmentation in human sperm (in vitro, cryopreservation only).
- **[cur-schiborr2014]** Schiborr C, Kocher A, Behnam D, et al. (2014). The oral bioavailability of curcumin from micronized powder and liquid micelles is significantly increased in healthy humans and differs between sexes. *Mol Nutr Food Res*. PMID 24402825; doi:10.1002/mnfr.201300724. Rct, n = 23 healthy adults (crossover). Single 500 mg dose: micronized curcumin was 9-fold and liquid micellar curcumin 185-fold more bioavailable (AUC) than native powder; women absorbed more than men.
- **[cur-schneider2015]** Schneider C, Gordon ON, Edwards RL, et al. (2015). Degradation of Curcumin: From Mechanism to Biological Implications. *J Agric Food Chem*. PMID 25817068; doi:10.1021/acs.jafc.5b00244. Review. Curcumin rapidly autoxidizes in vitro into many degradation products, which complicates interpretation of cell and animal data.
- **[cur-sharma2004]** Sharma RA, Euden SA, Platton SL, et al. (2004). Phase I clinical trial of oral curcumin: biomarkers of systemic activity and compliance. *Clin Cancer Res*. PMID 15501961; doi:10.1158/1078-0432.CCR-04-0744. Mechanistic, n = 15 colorectal cancer patients. Phase I, 0.45-3.6 g/day for up to 4 months: no dose-limiting toxicity; curcumin and conjugates in plasma only in the ~10 nmol/L range; 3.6 g lowered ex vivo inducible PGE2 in leukocytes.
- **[cur-shin2020]** Shin JW, Chun KS, Kim DH, et al. (2020). Curcumin induces stabilization of Nrf2 protein through Keap1 cysteine modification. *Biochem Pharmacol*. PMID 31972171; doi:10.1016/j.bcp.2020.113820. Mechanistic. In mouse skin and epidermal cells, curcumin binds KEAP1 Cys151 and stabilises Nrf2 to induce HO-1; tetrahydrocurcumin, which lacks the Michael-acceptor group, does not.
- **[cur-shoba1998]** Shoba G, Joy D, Joseph T, et al. (1998). Influence of piperine on the pharmacokinetics of curcumin in animals and human volunteers. *Planta Med*. PMID 9619120; doi:10.1055/s-2006-957450. Mechanistic, n = healthy volunteers (crossover). 2 g curcumin alone gave undetectable or very low serum levels; with 20 mg piperine bioavailability (AUC) rose about 2000%.
- **[cur-simentalmendia2022]** Simental-Mendía LE, Shah N, Sathyapalan T, et al. (2022). Effect of Curcumin on Glycaemic and Lipid Parameters in Polycystic Ovary Syndrome: A Systematic Review and Meta-Analysis of Randomized Controlled Trials. *Reprod Sci*. PMID 34655047; doi:10.1007/s43032-021-00761-6. Meta-analysis, n = 5 RCTs in PCOS. Curcumin lowered fasting glucose (-3.7 mg/dL), insulin and HOMA-IR (-0.94, I2 90%) but did not change any lipid index.
- **[cur-small2018]** Small GW, Siddarth P, Li Z, et al. (2018). Memory and Brain Amyloid and Tau Effects of a Bioavailable Form of Curcumin in Non-Demented Adults: A Double-Blind, Placebo-Controlled 18-Month Trial. *Am J Geriatr Psychiatry*. PMID 29246725; doi:10.1016/j.jagp.2017.10.010. Rct, n = 40 non-demented adults aged 51-84. Theracurmin 90 mg curcumin twice daily for 18 months improved verbal and visual memory and attention versus placebo and lowered FDDNP-PET signal in amygdala/hypothalamus; very small trial.
- **[cur-stohs2019]** Stohs SJ, Chen CYO, Preuss HG, et al. (2019). The fallacy of enzymatic hydrolysis for the determination of bioactive curcumin in plasma samples as an indication of bioavailability: a comparative study. *BMC Complement Altern Med*. PMID 31684927; doi:10.1186/s12906-019-2699-x. Mechanistic, n = 8 healthy adults. Most curcumin PK studies hydrolyse plasma before analysis and so report total (free plus conjugated) curcumin, which overstates the bioactive free fraction.
- **[cur-tang2008]** Tang M, Larson-Meyer DE, Liebman M (2008). Effect of cinnamon and turmeric on urinary oxalate excretion, plasma lipids, and plasma glucose in healthy subjects. *Am J Clin Nutr*. PMID 18469248; doi:10.1093/ajcn/87.5.1262. Rct, n = 11 healthy adults (crossover). Supplemental turmeric raised urinary oxalate excretion (91% of its oxalate is soluble) and did not change glucose or lipids over 4 weeks.
- **[cur-tayyem2006]** Tayyem RF, Heath DD, Al-Delaimy WK, et al. (2006). Curcumin content of turmeric and curry powders. *Nutr Cancer*. PMID 17044766; doi:10.1207/s15327914nc5502_2. Database. HPLC of 28 spice products: pure turmeric powder averaged 3.14% curcumin by weight; most curry powders contained little and variable curcumin.
- **[cur-tuntipopipat2006]** Tuntipopipat S, Judprasong K, Zeder C, et al. (2006). Chili, but not turmeric, inhibits iron absorption in young women from an iron-fortified composite meal. *J Nutr*. PMID 17116705; doi:10.1093/jn/136.12.2970. Rct, n = 10 young women (crossover). 0.5 g turmeric in a meal did not inhibit iron absorption (stable isotopes), whereas chili cut it by 38%.
- **[cur-vajdi2025]** Vajdi M, Hassanizadeh S, Hassanizadeh R, et al. (2025). Curcumin supplementation effect on liver enzymes in patients with nonalcoholic fatty liver disease: a GRADE-assessed systematic review and dose-response meta-analysis of randomized controlled trials. *Nutr Rev*. PMID 38213188; doi:10.1093/nutrit/nuad166. Meta-analysis, n = 15 RCTs, 905 participants. In NAFLD, curcumin lowered ALT (-4.1 U/L) and AST (-3.3 U/L) but not ALP; curcumin plus piperine had no significant effect on ALT.
- **[cur-vareed2008]** Vareed SK, Kakarala M, Ruffin MT, et al. (2008). Pharmacokinetics of curcumin conjugate metabolites in healthy human subjects. *Cancer Epidemiol Biomarkers Prev*. PMID 18559556; doi:10.1158/1055-9965.EPI-07-2693. Mechanistic, n = 12 healthy volunteers. After 10 or 12 g curcumin, free curcumin was detectable in only one subject; glucuronide and sulfate conjugates were found in all (Cmax ~1.7-2.3 ug/mL).
- **[cur-wang2020]** Wang Z, Jones G, Winzenberg T, et al. (2020). Effectiveness of Curcuma longa Extract for the Treatment of Symptoms and Effusion-Synovitis of Knee Osteoarthritis : A Randomized Trial. *Ann Intern Med*. PMID 32926799; doi:10.7326/M20-0990. Rct, n = 70 adults with knee OA and effusion-synovitis. Curcuma longa extract (2 capsules/day, 12 weeks) cut VAS knee pain by 9.1 mm versus placebo but did not change effusion-synovitis volume or cartilage; funded partly by the manufacturer.
- **[cur-wang2021]** Wang Z, Singh A, Jones G, et al. (2021). Efficacy and Safety of Turmeric Extracts for the Treatment of Knee Osteoarthritis: a Systematic Review and Meta-analysis of Randomised Controlled Trials. *Curr Rheumatol Rep*. PMID 33511486; doi:10.1007/s11926-020-00975-8. Meta-analysis, n = 16 RCTs, 1810 adults. Turmeric extracts reduced knee OA pain (SMD -0.82) and improved function versus placebo, similar to NSAIDs; very high heterogeneity, moderate risk of bias, less benefit with higher BMI.
- **[cur-wang2025]** Wang W, Zhao R, Liu B, et al. (2025). The effect of curcumin supplementation on cognitive function: an updated systematic review and meta-analysis. *Front Nutr*. PMID 40308636; doi:10.3389/fnut.2025.1549509. Meta-analysis, n = 9 RCTs, 501 participants. Curcumin improved global cognition (SMD 0.82) only in trials >=24 weeks, in people >=60 or in Asian populations; small evidence base.
- **[cur-yadav2010-retracted]** Yadav VR, Prasad S, Kannappan R, et al. (2010). Cyclodextrin-complexed curcumin exhibits anti-inflammatory and antiproliferative activities superior to those of curcumin through higher cellular uptake. *Biochem Pharmacol*. PMID 20599780; doi:10.1016/j.bcp.2010.06.022. Mechanistic. RETRACTED. Aggarwal-lab paper claiming cyclodextrin-complexed curcumin had superior anti-inflammatory activity in cell assays; cited only to flag the retraction.
