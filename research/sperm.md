# Sperm health, oxidative stress and DNA fragmentation

Research notes for the redox site, area id `sperm`. Structured data: `data/sperm.json`.

Citations are given as `[id]`; the full list with PMIDs and DOIs is at the bottom. Every reference was checked against PubMed during research (title, PMID, DOI, and that it is not retracted). Numbers come from the papers' abstracts.

## The short version

- Sperm are unusually easy to damage by oxidation, and they cannot repair their own DNA. The egg has to finish the repair after fertilisation, and older eggs do this less well [aitken2014] [newman2022] [setti2021].
- High sperm DNA fragmentation (SDF) goes with slower natural conception, about double the miscarriage risk, and lower IVF/ICSI success [evenson1999] [robinson2012] [simon2017].
- The things that raise SDF the most are a clinical varicocele (+10-14 points), being 50 or older (+12.6), impaired glucose tolerance (+13.8), air pollution (+9.7) and smoking (+9.2) [szabo2023]. Heat (saunas, hot tubs, fever) and infection also raise it, reversibly [garolla2013] [rao2016] [sergerie2007] [gallegos2008].
- The things that lower it, in order of evidence: repairing a clinical varicocele (about -7 points) [liraneto2021], stopping smoking, removing heat, ejaculating every 1-2 days (fast and free) [logiudice2024] [dahan2021], treating a proven infection, losing weight if obese [santi2025], and a Mediterranean-style diet with nuts [salashuetos2018nuts].
- "Male fertility" antioxidant pills are mostly a disappointment. Cochrane finds a possible benefit only in small, biased trials [deligny2022]. The two best-run trials, MOXI and FAZST, were null for semen, DNA fragmentation and live birth [steiner2020] [schisterman2020]. Megadoses may even loosen sperm chromatin ("reductive stress") [menezo2007] [moazamian2025].
- Exogenous testosterone and anabolic steroids are in a class of their own: they can shut sperm production down completely for months to over a year [liu2006] [rajmil2024].
- Sperm made today reach the ejaculate after about 2-2.5 months, so any change needs about 3 months to show fully [misell2006].

## 1. Biology: why sperm are so vulnerable

### Built for speed, not defence

A mature sperm cell is a stripped-down DNA delivery vehicle. Three features make it fragile:

1. **Oxidisable membranes.** Sperm membranes are packed with polyunsaturated fatty acids, especially DHA. These give the membrane the fluidity needed for swimming and fusion with the egg, but their double bonds are the easiest targets for lipid peroxidation [aitken2016].
2. **Almost no cytoplasm.** During the last stage of development (spermiogenesis), sperm shed nearly all of their cytoplasm. That removes room for antioxidant enzymes such as superoxide dismutase, catalase and glutathione peroxidase. Sperm depend on seminal plasma for protection [aitken2016].
3. **Almost no DNA repair.** Sperm are transcriptionally silent. They carry only the first enzyme of the base excision repair pathway, OGG1. OGG1 cuts out the oxidised base 8-oxo-guanine (measured as 8-OHdG), but leaves an abasic site that the sperm cannot fill, because it lacks the downstream enzymes APE1 and XRCC1. The abasic sites are fragile and become strand breaks [aitken2014] [aitken2016].

Sperm also make their own ROS on purpose: a controlled oxidative burst drives capacitation (the changes that let sperm fertilise). When sperm are stressed or defective, this tips over into an apoptosis-like cascade in which the mitochondria leak electrons at complex I. The resulting superoxide and hydrogen peroxide peroxidise the midpiece membrane and kill motility [koppers2008]. Lipid peroxidation products then damage the mitochondria further, so the process feeds itself. In mature sperm, it is hydrogen peroxide from the midpiece, not nucleases, that gets into the nucleus and breaks DNA [aitken2023a].

### Chromatin packing and the two-step hypothesis

During spermiogenesis most histones are replaced by protamines, small arginine-rich proteins that pack DNA far more tightly than histones do. Protamines are cross-linked by disulphide bridges, which form oxidatively as sperm pass through the epididymis. Well-packed chromatin is physically protected from oxidants.

Aitken's **two-step hypothesis** explains most sperm DNA damage [aitken2010]:

- **Step 1:** defective spermiogenesis produces sperm with poor protamination, leftover cytoplasm and loose chromatin.
- **Step 2:** oxidative stress attacks these vulnerable sperm. The ROS can come from the sperm's own mitochondria, from white blood cells in semen, or from external stresses like heat, smoking and toxicants.

The evidence: in human sperm, poor protamination was tightly correlated with 8-OHdG, and 8-OHdG was tightly correlated with DNA fragmentation (all P<0.001) [deiuliis2009]. So "DNA fragmentation" is largely oxidative damage landing on sperm that were badly packed in the first place.

### Leukocytospermia

White blood cells (mainly neutrophils) in semen produce superoxide via NADPH oxidase at rates far higher than sperm. Even "low-level" leukocytospermia, below the WHO cut-off of 1 million/mL, was associated with more ROS and more SDF (26.5% vs 19.9%) [agarwal2014leuko]. AUA/ASRM advise that when round cells exceed 1 million/mL, clinicians should find out whether they are white cells or immature germ cells before treating [schlegel2021a].

### The egg has to finish the repair

Because sperm cannot complete base excision repair, the oocyte must do it after fertilisation, before the embryo first copies its DNA. If the egg makes a mistake, the result is a mutation in every cell of the child [aitken2014]. A systematic review concluded that oocytes and early embryos can repair paternal DNA damage, but the capacity is limited and probably falls with maternal age [newman2022]. Two lines of evidence support this:

- In 540 ICSI cycles, SDF of 30% or more made no difference for women 40 or younger, but for women over 40 pregnancy fell from 20.0% to 7.7% and miscarriage rose sharply [setti2021].
- In donor-egg cycles where the same donor's eggs were split between two couples, sperm DNA oxidation still predicted poorer embryo development and blastocyst formation [meseguer2008]. Even young, high-quality eggs cannot fully cancel the damage.

### Clinical consequences

- **Natural conception.** In 215 Danish couples trying for their first pregnancy, the chance of conceiving per cycle fell as the share of SCSA-abnormal sperm rose, becoming small above 40% [spano2000]. In another cohort no couple conceived naturally when the man's SCSA DNA fragmentation was 30% or more [evenson1999].
- **Miscarriage.** Across 16 cohort studies (2969 couples), high sperm DNA damage roughly doubled miscarriage risk (RR 2.16, 95% CI 1.54-3.03), with the strongest link for TUNEL (RR 3.94) [robinson2012].
- **Recurrent pregnancy loss.** Male partners of women with recurrent loss had SDF 11.9 points higher than partners of fertile women [mcqueen2019]. A high double-strand-break profile (neutral Comet) was found in 85% of men from couples with unexplained recurrent miscarriage vs 33% of fertile donors [ribasmaynou2012].
- **IVF/ICSI.** Across 8068 cycles, sperm DNA damage was associated with lower clinical pregnancy (OR 1.68; IVF 1.65, ICSI 1.31) [simon2017]. Live birth was modestly higher with low SDF (RR 1.17), but the ICSI effect was not robust [osman2015]. With DFI above 30%, IUI success fell, and ICSI did better than conventional IVF [bungum2007].
- **Offspring health.** Oxidative sperm DNA damage and paternal age are linked to more new mutations, dominant genetic conditions (achondroplasia, Apert syndrome) and some neuropsychiatric conditions in children [aitken2014] [aitken2023b]. The absolute risk to any one child remains low, and causal links from SDF itself to child health are not established.

### Timeline: how long changes take

The textbook figure of about 74 days for human spermatogenesis comes from 1960s labelling studies [heller1964]. A direct measurement with heavy-water labelling found newly made sperm first appearing in the ejaculate after 64 +/- 8 days (range 42-76), a figure that already includes epididymal transit [misell2006]. In practice: a change you make today starts to show in about 2 months and is fully reflected after about 3 months. Heat studies match this: sauna damage cleared 6 months after stopping [garolla2013], and scrotal-bath damage by about 16 weeks [rao2016].

## 2. Tests

### SDF assays

| Assay | What it measures | Typical cut-off | Notes |
|---|---|---|---|
| SCSA (DFI) | Susceptibility of DNA to acid denaturation, read by flow cytometry | 25-30% (classic); expert guidelines about 20% | Best standardised; DFI >=30% linked to near-zero natural conception and poorer IUI [evenson1999] [bungum2007] |
| TUNEL | Labels the free ends of single- and double-strand breaks | 16.8% (flow cytometry, one lab); ~20% in guidelines | Specific (91.6%) but insensitive (32.6%) [sharma2016tunel] |
| SCD / Halo | Size of the DNA halo after proteins are removed | ~20-30% | Cheap, microscope-based; used in many abstinence and ICSI studies [setti2021] [gosalvez2011] |
| Comet (alkaline / neutral) | DNA migration in a gel; alkaline shows single + double breaks, neutral mainly double | ~26% (alkaline) | Neutral Comet double-strand breaks associated with recurrent miscarriage [ribasmaynou2012] |

The Agarwal and Esteves expert guidelines use thresholds around 20% for TUNEL, SCD and SCSA and about 26% for alkaline Comet, and treat values above 20-30% as raising the risk of poor outcomes [agarwal2022]. Results from different assays are not interchangeable, and lab-to-lab variation is large [aitken2023a].

### What guidelines say

- **ASRM (2013):** SDF tests do not reliably predict treatment outcomes and cannot be recommended routinely [asrm2013].
- **AUA/ASRM (2020, amended 2024):** Do not order SDF in the initial evaluation of an infertile couple (moderate recommendation, grade C). Do evaluate SDF (with karyotype) in the male partner of couples with recurrent pregnancy loss. Clinicians may consider testicular sperm for nonazoospermic men with elevated DFI (2024 addition) [schlegel2021a] [brannigan2024].
- **EAU:** SDF is a useful biomarker; the current guideline recommends SDF testing for couples with recurrent pregnancy loss after natural conception or ART failure and for men with unexplained infertility (strong). Testicular sperm for ICSI in men with high ejaculated SDF is considered experimental (weak). It advises against routine reactive oxygen species testing (weak) [minhas2021] [tharakan2022].
- **Expert/society guidelines (Society for Translational Medicine; Esteves/Agarwal):** test SDF in clinical varicocele with borderline semen, recurrent pregnancy loss, IVF/ICSI failure, unexplained infertility, and men with modifiable lifestyle risks (to motivate and monitor change) [agarwal2017stm] [cho2017] [agarwal2022].

**Practical reading:** SDF testing is reasonable after recurrent miscarriage, after failed IVF/ICSI, with unexplained infertility, and when deciding about varicocele repair. It is not a routine screening test. A single high result should be repeated, ideally after addressing fever, heat and abstinence, because SDF fluctuates.

### MiOXSYS / oxidation-reduction potential (ORP)

MiOXSYS measures the overall balance of oxidants and reductants in semen in a few minutes [agarwal2016miox]. In 2092 men from nine countries, ORP normalised to sperm concentration separated normal from abnormal semen with 98.1% sensitivity but only 40.6% specificity [agarwal2019miox]. Because the value is divided by sperm concentration, a low count alone pushes ORP up, so it partly re-measures something the semen analysis already shows. Proponents use it to define "Male Oxidative Stress Infertility" [agarwal2019mosi], but no trial shows that ORP-guided treatment improves live birth. The EAU advises against routine ROS testing [minhas2021].

## 3. Factors that raise oxidative SDF

The single best overview is a 2023 meta-analysis of 190 studies [szabo2023]. Mean SDF increases (percentage points, exposed vs unexposed):

| Factor | Mean SDF increase |
|---|---|
| Impaired glucose tolerance | +13.8 |
| Varicocele | +13.6 |
| Age 50 or over | +12.6 |
| Testicular tumour | up to +11.3 |
| Air pollution | +9.7 |
| Smoking | +9.2 |
| Abstinence period, Chlamydia, HPV | no significant effect |

### Varicocele

Enlarged veins in the scrotum are present in about 40% of infertile men. Men with varicocele have 9.8-13.6 points more SDF [wang2012] [szabo2023]. The varicocele warms the testis, causes hypoxia and venous reflux, and drives mitochondrial and leukocyte ROS. Repair is covered under section 6.

### Smoking

Smokers average 9.2 points higher SDF [szabo2023]. A meta-analysis of 20 studies (5865 men) found lower count (-9.7 million/mL), motility (-3.5 points) and morphology, with bigger effects in moderate-to-heavy smokers [sharma2016smoking]. After quitting, semen improved at 3 months and again at 6 months; progressive motility rose from 20.7% to 35.3% to 42.3% [ragheb2025]. In an older series, infertile men who did not improve after stopping hot-tub use were mostly smokers [shefi2007].

**Dose:** No safe level. Harm is greater with more cigarettes per day. Quit completely, at least 3 months (ideally 6) before trying.

### Obesity and metabolic health

Obese men are 1.66 times as likely to be infertile, and their partners have lower live birth per ART cycle (OR 0.65) [campbell2015]. Risk of very low counts is J-shaped, with an odds ratio of 2.04 for morbid obesity [sermondade2013]. The BMI-SDF link is weaker than many websites claim: in a dedicated meta-analysis, only class I obesity (BMI 30-35) showed a small, borderline increase [sepidarkish2020]. Impaired glucose tolerance, on the other hand, was among the largest SDF risk factors (+13.8) [szabo2023].

**Dose:** Aim for BMI below 30, ideally 18.5-25.

### Heat

Testes work best a few degrees below core temperature.

- **Sauna:** 10 normal men used a Finnish sauna at 80-90 C for 15 minutes twice a week for 3 months. Count and motility dropped sharply; protamination, chromatin condensation and mitochondrial function worsened. Everything returned to baseline 6 months after stopping [garolla2013].
- **Hot water:** In a randomised study, warming the scrotum in a 43 C bath for 30 minutes, 10 times, damaged chromatin (SCSA), increased apoptosis and harmed mitochondria. Daily exposure was worse than every third day. Recovery took about 16 weeks [rao2016].
- **Hot tubs in real life:** Of 11 infertile men who stopped hot tubs or hot baths, 5 responded with a 491% rise in total motile count (motility from 12% to 34%) [shefi2007].
- **Laptops and sitting:** A working laptop on closed thighs raised scrotal temperature 2.6-2.8 C in an hour [sheynkin2005]. A 1 C rise occurred within 11-28 minutes, a lap pad did not help, and sitting with legs apart reduced the rise [sheynkin2011].
- **Underwear:** Men who mainly wore boxers had 25% higher concentration and 17% higher total count [minguezalarcon2018]. This is cross-sectional and SDF was not measured.
- **Occupational heat:** Jobs with heat exposure (bakers, welders, furnace workers, professional drivers) are a recognised risk for poorer morphology and slower conception [thonneau1998].
- **Fever:** After a 2-day fever of 39-40 C, DFI rose substantially at days 15-37 and returned toward baseline by day 79; sperm count took about 79 days to recover [sergerie2007].

**Dose and recovery:** Avoid saunas, hot tubs and hot baths (above about 40 C for 30 minutes) for at least 3 months before trying. Expect 3-6 months for full recovery after regular exposure. After a high fever, expect 2-3 months of worse results.

### Paternal age

SDF rises steadily with age with no threshold [wyrobek2006]; a meta-analysis of 90 studies (93,839 men) confirmed age-related declines in the share of unfragmented sperm [johnson2015]. The jump is largest from age 50 (+12.6 points) [szabo2023]. Ageing also raises the number of new mutations passed to children [aitken2023b].

### Alcohol

Fifteen studies (16,395 men) found alcohol lowers semen volume and morphology, mainly in daily drinkers; occasional drinking was not clearly harmful [ricci2017alc]. In 1221 young Danish men, harm appeared above about 5 units a week and was strongest above 25 units; above 40 units a week concentration was 33% lower [jensen2014]. SDF-specific data are thin.

**Dose:** At most about 5 units a week (one UK unit is about 8 g of alcohol) while trying; no daily drinking.

### Cannabis

In 54 infertile men, regular cannabis users had more DNA fragmentation and chromosome abnormalities in sperm [verhaeghe2020]. Small, retrospective, and likely confounded by tobacco, but it points in one direction. Stop at least 3 months before trying.

### Anabolic steroids and testosterone

Any outside testosterone suppresses the brain's LH and FSH signals to the testis. After androgen-based contraception regimens, the median time to recover to 20 million/mL was 3.4 months, and longer after longer use [liu2006]. After anabolic steroid abuse, recovery can take more than a year and sometimes needs medication (hCG, clomiphene, aromatase inhibitors) [rajmil2024]. AUA/ASRM: do not prescribe testosterone to men who want current or future fertility [schlegel2021b]. This mainly lowers sperm number (often to zero) rather than SDF, but it is the biggest avoidable cause of severe male-factor infertility in young men.

### Air pollution

Young men in the Czech city of Teplice had more SCSA DNA fragmentation after high-pollution periods, even though their other semen measures did not change [rubes2005]. Across studies pollution was associated with +9.7 points [szabo2023]. Individuals have limited control; practical steps are avoiding exercise next to heavy traffic, indoor HEPA filtration and closing car windows in traffic.

### Endocrine disruptors and pesticides

- **Phthalates:** In 379 clinic patients, urinary phthalate metabolites (MEP, MEHP) were associated with more Comet DNA damage, about 14-18% per interquartile rise in MEHP [hauser2007].
- **BPA:** In 190 men, an interquartile rise in urinary BPA was linked to 10% more Comet tail DNA [meeker2010].
- **Pesticides:** Farm workers exposed to organophosphate and carbamate pesticides had higher DFI [mirandacontreras2013]. Among young men, high fruit and vegetable intake was linked to much higher counts only when the produce was low in pesticide residues [chiu2016].

All of this is observational, and no study shows that cutting exposure lowers SDF. Sensible, cheap steps: do not heat food in plastic, eat fewer ultra-processed and canned foods, wear protection when spraying pesticides, wash produce.

### Genital infection

In men with Chlamydia or Mycoplasma infection, SDF averaged 35% vs 11% in fertile controls; after about 4 months of antibiotics it fell from 37.7% to 24.2%. Couples who tried after finishing treatment had much higher pregnancy rates than those who tried during it [gallegos2008]. However, the big meta-analysis found the overall effect of Chlamydia and HPV on SDF to be negligible [szabo2023], so this matters mainly for confirmed, active infection.

### Sleep

In a North American preconception cohort, sleeping under 6 hours or 9 hours or more, or poor sleep quality, was associated with roughly 15-20% lower counts, with wide confidence intervals [coleman2026]. No SDF data. Grade: weak.

### Mobile phones

In a dish, phone radiation raised ROS and lowered motility of semen, but did not increase DNA damage [agarwal2009phone]. A meta-analysis found no significant effect in human studies [liu2014phone]; a later one found associations but no dose-response with hours of use [kim2021phone], which argues against a strong causal effect. Grade: weak and uncertain. Keeping the phone out of the front trouser pocket costs nothing, but this is far down the list.

### Long abstinence

Sperm stored in the epididymis keep accumulating oxidative damage. In a meta-analysis of randomised trials, abstinence over 2 days was associated with SDF 3.5 points higher, and each extra day added about 0.65 points [logiudice2024]. Details under section 4.

### Cycling

Among 2261 men at IVF clinics, exercise overall was unrelated to semen quality, but cycling 5 or more hours a week was linked to low concentration (OR 1.92) [wise2011]. In 24 amateur road cyclists, 16 weeks of intensive training raised seminal inflammatory cytokines and worsened semen, with some changes lasting more than 30 days [hajizadehmaleki2015]. Moderate cycling is fine.

## 4. Factors that lower SDF

### Short abstinence: the fastest, cheapest lever

- In a meta-analysis of RCTs (13 studies, 2315 men), longer abstinence (over 2 days) meant higher SDF (+3.5 points) and lower progressive motility, but higher concentration and volume [logiudice2024].
- A dose-response meta-analysis of 85 studies found short abstinence lowered DFI by about 2.4 points in healthy men [du2024].
- A second ejaculate collected within 4 hours of the first had lower SDF in men with abnormal semen [barbagallo2022].
- In 112 men, SDF fell from 34.6% after 3 days of abstinence to 23.7% in a sample collected 3 hours after the first; 55% of men with SDF above 35% moved into the normal range [dahan2021].
- Daily ejaculation for several days, and especially a sample 3 hours after the previous one, lowered SDF in normozoospermic men [gosalvez2011].

Honest caveat: the large risk-factor meta-analysis found no significant effect of abstinence length [szabo2023], and in healthy men the absolute change is small (2-3 points). The biggest gains are in men whose SDF is high.

**Dose:** Ejaculate every 1-2 days, including outside the fertile window. For IUI/IVF/ICSI with high SDF, ask the clinic about a sample after 1 day of abstinence, or a second sample 1-4 hours after a first ejaculation. For diagnostic tests, follow the lab's instructions (usually 2-7 days).

### Stopping smoking

See above: semen improves within 3-6 months of quitting [ragheb2025]. Given smoking's +9.2-point association with SDF [szabo2023], this is one of the largest controllable effects.

### Weight loss

A meta-analysis of 12 studies (345 men, mean starting BMI 45) found weight loss raised concentration and motility and lowered DFI (effect size -0.69) [santi2025]. A 2026 Human Reproduction Update review of 32 studies found lifestyle programmes (diet plus exercise) improved motility (+10.6 points) and morphology, whereas bariatric surgery produced no clinically significant semen or DNA damage change, possibly because rapid weight loss itself is stressful [peel2026]. All low-certainty.

**Dose:** Lose 5-15% of body weight over 3-6 months through diet and exercise. If bariatric surgery is planned, do not count on it to fix semen quickly.

### Exercise

- In 189 young men, those doing 15 or more hours a week of moderate-to-vigorous activity had 73% higher concentration, and those watching more than 20 hours of TV a week had 44% lower concentration [gaskins2015].
- In an RCT of 280 healthy men, moderate continuous training (3 sessions a week for 24 weeks) improved seminal oxidative and inflammatory markers, semen quality and sperm DNA integrity, more than high-intensity continuous or interval training; benefits faded within about a month of stopping [hajizadehmaleki2017].

**Important caveat:** the exercise RCTs on sperm come almost entirely from one group (Hajizadeh Maleki and Tartibian, Iran). Its moderate-exercise trial in infertile men (Cytokine 2017) was retracted in 2024 (retraction notice PMID 38030527, doi:10.1016/j.cyto.2023.156453), as were its combined-exercise trial (J Strength Cond Res 2019; PMID 30913204) and its HIIT trial (Cytokine 2020; PMID 31569012). The 2017 Reproduction trial cited here is not retracted, but should be read with caution. Exercise is clearly good for general and metabolic health, so the recommendation stands on that basis; the sperm-specific size of benefit is uncertain.

**Dose:** 30-45 minutes of moderate aerobic exercise, 3-5 days a week, plus less sitting. Avoid very high training loads, and keep cycling under about 5 hours a week.

### Dietary pattern

- A 2025 meta-analysis (11 studies, 2558 men) found Mediterranean diet adherence associated with higher sperm count (+24 million), total motility (+8.8 points), progressive motility (+7.5 points) and morphology, but there are no data showing better fertility outcomes [agarwalr2025].
- Men in the lowest Mediterranean-diet tertile had about 2.6 times the odds of abnormal concentration, count and motility [karayiannis2017].
- Young men eating a "prudent" diet (fish, chicken, fruit, vegetables, legumes, whole grains) had 11.3 points higher progressive motility [gaskins2012].
- A systematic review of observational studies found the same pattern: fish, fruit, vegetables, whole grains and low-fat dairy good; processed meat, sugary drinks, alcohol, full-fat dairy and (in some studies) soy bad [salashuetos2017].

### Walnuts and nuts (two RCTs)

- **Robbins 2012:** 117 healthy young men eating a Western diet were randomised to add 75 g/day of walnuts or avoid tree nuts for 12 weeks. The walnut group improved vitality, motility and morphology; blood omega-3 rose, and higher sperm ALA was linked to less aneuploidy. SDF was not measured [robbins2012].
- **FERTINUTS 2018:** 119 healthy men added 60 g/day of mixed nuts (walnuts, almonds, hazelnuts) or avoided nuts for 14 weeks. Nuts improved count, vitality, motility and morphology and **significantly reduced SDF** [salashuetos2018nuts].

These are the best dietary RCTs in this field, but they are in healthy men, not infertile couples, and have no pregnancy outcomes. **Dose:** 60-75 g/day (about two small handfuls), swapped for other snacks to avoid weight gain.

### Lycopene and tomatoes

In a 12-week placebo-controlled trial in 60 healthy men, 14 mg/day lactolycopene improved fast progressive motility and morphology, but the primary outcome just missed significance (p=0.058) [williams2020]. No SDF data. **Dose:** about 14 mg/day, roughly half a cup of tomato sauce or passata, cooked with a little oil.

### Fish and omega-3

- Men in the top quartile of fish intake had total counts of 168 million vs 102 million in the bottom quartile, and more normal forms; the benefit was strongest when fish replaced processed meat [afeiche2014].
- Young Danish men using fish oil on 60 or more days had 0.64 mL more semen volume, larger testes and lower FSH and LH [jensen2020].
- An RCT of 1.5 g/day DHA for 10 weeks improved seminal antioxidant status and lowered SDF, without changing standard semen parameters [martinezsoto2016].
- A systematic review found 14 of 16 studies reported improvement in at least one semen marker with omega-3 [falsig2019].

**Dose:** oily fish 2-3 times a week; if supplementing, about 1-1.5 g/day EPA+DHA.

### Processed meat and sugary drinks (negatives)

- The highest processed-meat quartile had 1.7 points fewer normal sperm [afeiche2014].
- Young men drinking 1.3 or more sugar-sweetened beverages a day had 9.8 points lower progressive motility [chiu2014].

Both are cross-sectional or single-cohort findings with small effects. Swap rather than obsess.

### Fruit and vegetables

Total fruit and vegetable intake was not linked to semen in one cohort, but 2.8 or more servings a day of low-to-moderate-pesticide produce was linked to 169% higher total count [chiu2016]. Fruit and vegetables supply antioxidants at food-level doses, without the reductive-stress risk of pills.

### Coffee (neutral) and soy (neutral)

- **Coffee:** a review of 28 studies (nearly 20,000 men) found caffeine from coffee, tea and cocoa mostly unrelated to semen quality; caffeinated soft drinks looked worse; DNA findings were inconsistent [ricci2017coffee]. Up to 2-3 cups a day looks fine.
- **Soy:** 41 clinical studies show soy and isoflavones do not change male testosterone or estrogen [reed2021], and male soy intake was unrelated to IVF success [minguezalarcon2015]. One small study linked the very highest soy intake to 41 million/mL lower concentration [chavarro2008]. Normal amounts are fine.

## 5. Supplements: the "male antioxidant" literature

### The headline trials

| Study | Design | What was given | Result |
|---|---|---|---|
| Cochrane 2019 [smits2019] | 61 RCTs, 6264 men | 18 different antioxidants | Live birth OR 1.79 (low quality); not significant once high-risk-of-bias trials removed (OR 1.38, 0.89-2.16) |
| Cochrane 2022 [deligny2022] | 90 RCTs, 10,303 men | 20 antioxidants | Live birth OR 1.43 (very low certainty); not significant in low-risk-of-bias trials (OR 1.22, 0.85-1.75); more mild GI upset (OR 2.70) |
| MOXI 2020 [steiner2020] | RCT, 171 couples, NIH Reproductive Medicine Network | Vitamin C 500 mg, vitamin E 400 mg, selenium 0.2 mg, L-carnitine 1 g, zinc 20 mg, folic acid 1 mg, lycopene 10 mg daily, 3-6 months | No improvement in semen or DNA fragmentation (in high-SDF men: 29.5% vs 28.0%); live birth 15% vs 24% placebo |
| FAZST 2020 [schisterman2020] | RCT, 2370 couples | Folic acid 5 mg + zinc 30 mg daily, 6 months | No effect on semen or live birth (34% vs 35%); DNA fragmentation slightly higher (29.7% vs 27.2%) |
| Stenqvist 2018 [stenqvist2018] | RCT, 77 men with DFI >=25% | Combined antioxidants, 6 months | No change in DFI |

The pattern is classic for antioxidant research: small, poorly reported trials with positive results, and larger, better-run trials that are null. Cochrane's own conclusion is that the evidence is inconclusive [deligny2022]. The AUA/ASRM guideline tells clinicians to counsel that supplements are "of questionable clinical utility" (grade B) [schlegel2021b], and the EAU finds insufficient evidence for widespread empirical use [minhas2021]. In practice, 85.6% of surveyed reproductive specialists prescribe them anyway [agarwal2021survey].

### Individual ingredients

- **CoQ10:** 200 mg/day for 6 months raised motility in idiopathic asthenozoospermia [balercia2009]; a meta-analysis of 3 trials found better concentration and motility but no evidence of more pregnancies [lafuente2013].
- **L-carnitine:** improves motility and morphology across 8 RCTs, with no demonstrable effect on pregnancy [khaw2020]. A 6-month L-carnitine multi-micronutrient raised the share of normal semen analyses (69% vs 22%) and spontaneous pregnancies in 83 men [kopets2020]. In healthy mice, high doses badly damaged sperm DNA and cut pregnancy rates [moazamian2025].
- **Vitamins C + E:** 1 g of each daily for 2 months after a failed ICSI lowered SDF in 76% of men, and the next ICSI had 48.2% vs 6.9% pregnancy [greco2005]. But this was a before-after comparison without a control group, which overstates effects, and MOXI used both (at lower doses) and was null [steiner2020].
- **Pre-ICSI antioxidants:** a 60-couple RCT of Menevit for 3 months reported 38.5% vs 16% viable pregnancy per transferred embryo, with no change in embryo quality [tremellen2007]. Small, unreplicated.
- **Zinc and folate:** null in FAZST, with slightly more SDF [schisterman2020].
- **Selenium:** improved motility only in Scottish men with low selenium status; 11% vs 0% paternity in a 69-man trial [scott1998].
- **NAC:** 600 mg/day for 3 months lowered SDF and protamine deficiency in an uncontrolled study of 50 men [jannatifar2019]. Some better-known NAC/selenium RCTs are by an author several of whose other papers have been retracted, so they are not relied on here.
- **Astaxanthin:** 16 mg/day for 3 months lowered seminal ROS; the pregnancy difference came from 11 vs 19 analysed men [comhaire2005].
- **Omega-3/DHA:** see section 4; 1.5 g/day DHA lowered SDF in one small RCT [martinezsoto2016].
- **Vitamin D:** high-dose vitamin D plus calcium for 150 days did not improve semen in 330 vitamin-D-insufficient infertile men [blombergjensen2018].
- A meta-analysis of RCTs found modest gains in sperm parameters from selenium, zinc, omega-3, CoQ10 and carnitines, but did not assess fertility outcomes [salashuetos2018].

### Reductive stress: when more antioxidant is worse

Sperm need some oxidation. Protamine disulphide bridges form oxidatively in the epididymis to lock the chromatin, and capacitation needs a controlled ROS burst. Menezo and colleagues gave men antioxidant vitamins with zinc and selenium for 90 days: DFI fell 19.1%, but sperm decondensation (loose chromatin) rose 22.8%, probably because vitamin C reduced the disulphide bridges [menezo2007]. In a 2025 mouse dose-escalation study, high doses of vitamin C, zinc, folate and carnitine disturbed redox balance and damaged sperm DNA in healthy mice, and high carnitine reduced pregnancy rates, while the same carnitine dose helped oxidatively stressed mice [moazamian2025]. FAZST's small SDF increase on high-dose folate and zinc fits the same idea [schisterman2020].

### Bottom line on supplements

1. Supplements are the **lowest-yield** item on the list. Fix the source of the oxidative stress first (smoking, varicocele, heat, infection, obesity).
2. The best evidence (MOXI, FAZST, Cochrane low-risk-of-bias analyses) does not show more live births.
3. If a man still wants to try one, a single modest-dose product for 3 months is reasonable, especially with high SDF before ART, a poor diet or a documented deficiency. Do not stack products or take megadoses.
4. Food beats pills: nuts, fish, tomatoes, fruit and vegetables deliver the same nutrients at doses that have not raised reductive-stress concerns.

## 6. Medical options

### Varicocele repair

Across 19 studies (1070 men), varicocelectomy lowered SDF by 7.2 points (95% CI 5.6-8.9), more in men with high starting SDF, and consistently across SCSA, TUNEL and SCD [liraneto2021]. An older meta-analysis found a 3.4-point drop [wang2012]. Cochrane (48 studies, 5384 men) found treatment may improve pregnancy rates (RR 1.55, low certainty), but the effect on live birth is uncertain [persad2021]. AUA/ASRM: consider varicocelectomy in men trying to conceive who have a palpable varicocele, infertility and abnormal semen (not azoospermia) [schlegel2021b]. EAU: treat infertile men with a clinical varicocele, abnormal semen and otherwise unexplained infertility when the female partner has good ovarian reserve [minhas2021]. A review concluded that varicocele repair is the best-evidenced intervention for lowering SDF [esteves2020].

### Treating infection

Treat confirmed genital infection; SDF fell by about a third after antibiotics in one series, and pregnancy rates were better when couples waited until treatment was finished [gallegos2008]. Distinguish white cells from germ cells before treating raised round cells [schlegel2021a].

### Testicular sperm for ICSI

Much oxidative damage happens after sperm leave the testis, during epididymal storage. A meta-analysis found testicular sperm had 24.6 points less SDF than ejaculated sperm, and ICSI with testicular sperm gave higher pregnancy and live-birth rates and fewer miscarriages in men with high SDF [esteves2017]. AUA/ASRM (2024) says clinicians may consider it in nonazoospermic men with elevated DFI [brannigan2024]; EAU considers it experimental [tharakan2022] [minhas2021]. Try reversible causes and short-abstinence samples first.

### Antioxidants before ICSI

See section 5: uncontrolled and small randomised studies are positive [greco2005] [tremellen2007], larger and better-controlled trials are null [steiner2020] [stenqvist2018].

### Stopping testosterone

If a man is on testosterone or steroids, stopping (with a urologist's help to restart production) is the most important single step [liu2006] [rajmil2024] [schlegel2021b].

## What moves the needle most for sperm DNA fragmentation

Ranked by (size of SDF effect) x (strength of evidence) x (how many men it applies to). Testosterone/steroids are listed separately because they mainly stop sperm production rather than raise SDF.

**Absolute priority, if it applies:** stop exogenous testosterone or anabolic steroids, with medical help. Without this, nothing else matters [liu2006] [rajmil2024].

1. **Treat a clinical varicocele (if you have one).** Varicocele is associated with +10-14 points SDF, and repair lowers SDF by about 7 points on average, more when SDF is high [szabo2023] [liraneto2021]. Uncertainty: the pregnancy benefit is low-certainty, and benefit takes 3-6 months, so with an older partner ART may come first.
2. **Stop smoking (and cannabis).** Smoking is associated with +9 points SDF and worse semen; semen improves within 3-6 months of quitting [szabo2023] [sharma2016smoking] [ragheb2025]. Uncertainty: no RCT of quitting with SDF as the outcome, but the evidence is consistent and the health benefit is huge.
3. **Ejaculate every 1-2 days, and use short-abstinence samples for ART.** Each extra day of abstinence adds about 0.65 points; a second sample 3 hours later can cut SDF by about a third in men with high SDF [logiudice2024] [dahan2021]. Works immediately and costs nothing. Uncertainty: small effect in men with normal SDF.
4. **Remove testicular heat: no saunas, hot tubs or hot baths; laptops off the lap; avoid prolonged sitting.** Interventional studies show heat damages chromatin packaging and that it reverses in 3-6 months [garolla2013] [rao2016] [shefi2007]. Uncertainty: studies are small, and everyday heat (underwear, laptops) has only indirect data.
5. **Treat confirmed genital infection or leukocytospermia.** SDF fell from 38% to 24% after antibiotics in one series [gallegos2008]. Uncertainty: small studies, and broad Chlamydia/HPV data show little effect [szabo2023].
6. **Lose weight if BMI is over 30, and fix blood sugar.** Weight loss lowered DFI (effect size about -0.7) and impaired glucose tolerance carries +13.8 points SDF [santi2025] [szabo2023]. Uncertainty: mostly uncontrolled studies; bariatric surgery did not help semen [peel2026].
7. **Mediterranean-style diet with 60-75 g/day nuts, oily fish 2-3 times a week, tomatoes, fruit and vegetables; cut processed meat and sugary drinks.** The nut RCT lowered SDF [salashuetos2018nuts]; diet pattern associations are consistent [agarwalr2025]. Uncertainty: modest effects, healthy-volunteer trials, no live-birth data.
8. **Limit alcohol to about 5 units a week; sleep 7-9 hours; reduce traffic pollution and plastics exposure.** Consistent but observational associations [jensen2014] [coleman2026] [rubes2005] [meeker2010].
9. **Moderate exercise (30-45 minutes, 3-5 days a week), not extreme cycling volumes.** Good for metabolic health; sperm-specific trial evidence is compromised by retractions [gaskins2015] [hajizadehmaleki2017] [wise2011].
10. **Antioxidant supplements, last.** Best trials are null for SDF and live birth [steiner2020] [schisterman2020] [deligny2022]. If used, one modest-dose product, no megadoses [menezo2007].

**For couples doing IVF/ICSI with persistently high SDF:** short-abstinence samples first, then discuss testicular sperm ICSI [dahan2021] [esteves2017]. The female partner's age matters: high SDF does most harm when eggs are older [setti2021].

**Not worth worrying about much:** mobile phones (weak, inconsistent evidence) [liu2014phone] [kim2021phone], moderate coffee [ricci2017coffee], normal soy intake [reed2021].

## Timeline: what to do in the 3 months before trying to conceive

Sperm take about 64-74 days to make and reach the ejaculate [misell2006] [heller1964], so start at least 3 months ahead. If heat or smoking exposure was heavy, 6 months is better [garolla2013] [ragheb2025].

**Month -3 (start now)**

- Stop smoking, vaping nicotine if possible, and cannabis. Get help (nicotine replacement, medication) if needed.
- If you use testosterone, anabolic steroids or similar products, see a urologist now. Recovery can take more than a year [rajmil2024].
- Stop saunas, hot tubs and hot baths. Laptop on a desk, looser underwear, stand up every 30-60 minutes. If you work in heat, plan breaks and cooling.
- Book a semen analysis. Ask about SDF testing if there has been recurrent miscarriage, failed IVF/ICSI, unexplained infertility, or you have a varicocele or lifestyle risks [schlegel2021a] [agarwal2017stm].
- Ask for a scrotal exam if anything feels or looks abnormal, or if the semen test is abnormal. A palpable varicocele with abnormal semen or high SDF is worth discussing for repair now, because benefits take months [liraneto2021].
- Get any urinary or genital symptoms checked and treat confirmed infection [gallegos2008].
- Change the diet: add 60-75 g/day of nuts, oily fish 2-3 times a week, tomato-based dishes, 3+ servings of fruit and vegetables daily; cut processed meat, sweets and sugary drinks [salashuetos2018nuts] [robbins2012] [afeiche2014] [chiu2014].
- Alcohol down to about 5 units a week or less [jensen2014].
- Start moderate exercise: 30-45 minutes, 3-5 days a week [gaskins2015].
- If BMI is over 30, aim to lose 5-10% over the next 3-6 months through diet and exercise [santi2025].

**Month -2**

- Keep going. Sperm made from now on are the ones you will use.
- Aim for 7-9 hours of sleep [coleman2026].
- Reduce plastics and pollution exposure: no microwaving in plastic, fewer canned and ultra-processed foods, avoid exercising next to heavy traffic [meeker2010] [rubes2005].
- Supplements: optional and low priority. If you choose one, a single modest-dose antioxidant for 3 months; do not stack products or take megadoses [steiner2020] [menezo2007].

**Month -1**

- Keep ejaculating regularly (every 1-2 days) so stored sperm do not age in the epididymis [logiudice2024].
- If a fever of about 39 C or higher occurs, expect a 2-3 month dip; it is temporary [sergerie2007].
- Repeat semen analysis/SDF if the first was abnormal, at least 3 months after the changes began (and at least 3 months after any high fever).

**Trying to conceive**

- Intercourse every 1-2 days, especially around ovulation. Short abstinence lowers SDF and does not harm natural conception chances [logiudice2024] [du2024].
- For IUI/IVF/ICSI with high SDF: ask the clinic about collecting after 1 day of abstinence or a second sample 1-4 hours after a first [dahan2021] [barbagallo2022].
- If SDF stays high after all reversible causes are addressed and IVF/ICSI has failed or miscarriages recur, discuss testicular sperm ICSI with a reproductive urologist [esteves2017] [brannigan2024].
- Keep up the changes: benefits fade when old habits return [garolla2013] [hajizadehmaleki2017].

## Controversies and open questions

- **Does lowering SDF raise live birth?** For varicocele repair and lifestyle change, SDF clearly falls, but randomised live-birth data are scarce [persad2021] [esteves2020].
- **Are SDF tests worth doing?** US guidelines are cautious [asrm2013] [schlegel2021a]; European and expert guidelines are more enthusiastic [minhas2021] [agarwal2017stm]. Assay variability and the lack of a single agreed threshold are real problems [agarwal2022] [aitken2023a].
- **Antioxidants:** the "antioxidant paradox" is on full display. Mechanistic logic is strong, small trials are positive, and the large well-run trials are null. A subgroup of men with real oxidative stress may benefit, but there is no validated test to find them [agarwal2019mosi] [deligny2022].
- **Exercise evidence:** the core RCT literature comes from a group with multiple retractions, so effect sizes for sperm are uncertain even though the direction is plausible.
- **Offspring health:** links between paternal oxidative DNA damage and child disease are biologically plausible and supported by paternal-age data, but not proven for SDF as measured clinically [aitken2014] [aitken2023b].

## References

- **[afeiche2014]** Afeiche MC, Gaskins AJ, Williams PL, et al. (2014). Processed meat intake is unfavorably and fish intake favorably associated with semen quality indicators among men attending a fertility clinic. *J Nutr*. PMID [24850626](https://pubmed.ncbi.nlm.nih.gov/24850626/). doi:10.3945/jn.113.190173. cohort; n = 155 men. Highest processed-meat quartile had 1.7 points fewer normal forms; total count rose from 102 to 168 million across fish-intake quartiles.
- **[agarwal2009phone]** Agarwal A, Desai NR, Makker K, et al. (2009). Effects of radiofrequency electromagnetic waves (RF-EMW) from cellular phones on human ejaculated semen: an in vitro pilot study. *Fertil Steril*. PMID [18804757](https://pubmed.ncbi.nlm.nih.gov/18804757/). doi:10.1016/j.fertnstert.2008.08.022. mechanistic. In vitro, phone RF exposure raised ROS and reduced motility and viability of neat semen, but did not change DNA damage.
- **[agarwal2014leuko]** Agarwal A, Mulgund A, Alshahrani S, et al. (2014). Reactive oxygen species and sperm DNA damage in infertile men presenting with low level leukocytospermia. *Reprod Biol Endocrinol*. PMID [25527074](https://pubmed.ncbi.nlm.nih.gov/25527074/). doi:10.1186/1477-7827-12-126. cross-sectional. Even low-level leukocytospermia (below 1 million WBC/mL) was associated with higher ROS and SDF (26.5% vs 19.9%).
- **[agarwal2016miox]** Agarwal A, Sharma R, Roychoudhury S, et al. (2016). MiOXSYS: a novel method of measuring oxidation reduction potential in semen and seminal plasma. *Fertil Steril*. PMID [27260688](https://pubmed.ncbi.nlm.nih.gov/27260688/). doi:10.1016/j.fertnstert.2016.05.013. cross-sectional; n = 26 controls, 33 infertile men. Introduced MiOXSYS oxidation-reduction potential (ORP) in semen; proposed a cut-off of 1.48 mV/10^6 sperm/mL.
- **[agarwal2017stm]** Agarwal A, Cho CL, Majzoub A, et al. (2017). The Society for Translational Medicine: clinical practice guidelines for sperm DNA fragmentation testing in male infertility. *Transl Androl Urol*. PMID [29082206](https://pubmed.ncbi.nlm.nih.gov/29082206/). doi:10.21037/tau.2017.08.06. guideline. Society for Translational Medicine guideline: test SDF in clinical varicocele with borderline semen, recurrent pregnancy loss, ART failure, unexplained infertility and men with lifestyle risk factors.
- **[agarwal2019miox]** Agarwal A, Panner Selvam MK, Arafa M, et al. (2019). Multi-center evaluation of oxidation-reduction potential by the MiOXSYS in males with abnormal semen. *Asian J Androl*. PMID [31006711](https://pubmed.ncbi.nlm.nih.gov/31006711/). doi:10.4103/aja.aja_5_19. cross-sectional; n = 2092 men, 9 countries. ORP normalised to sperm concentration flagged abnormal semen with 98.1% sensitivity but only 40.6% specificity (AUC 0.765).
- **[agarwal2019mosi]** Agarwal A, Parekh N, Panner Selvam MK, et al. (2019). Male Oxidative Stress Infertility (MOSI): Proposed Terminology and Clinical Practice Guidelines for Management of Idiopathic Male Infertility. *World J Mens Health*. PMID [31081299](https://pubmed.ncbi.nlm.nih.gov/31081299/). doi:10.5534/wjmh.190055. review. Proposes the term 'Male Oxidative Stress Infertility'; 30-80% of infertile men have high seminal ROS; current antioxidant use is not evidence-based.
- **[agarwal2021survey]** Agarwal A, Finelli R, Selvam MKP, et al. (2021). A Global Survey of Reproductive Specialists to Determine the Clinical Utility of Oxidative Stress Testing and Antioxidant Use in Male Infertility. *World J Mens Health*. PMID [33831977](https://pubmed.ncbi.nlm.nih.gov/33831977/). doi:10.5534/wjmh.210025. cross-sectional; n = 1327 specialists. Global survey: 85.6% of reproductive specialists prescribe antioxidants, mostly for 3-6 months, while most do not test for oxidative stress and rate the supporting evidence as modest.
- **[agarwal2022]** Agarwal A, Farkouh A, Parekh N, et al. (2022). Sperm DNA Fragmentation: A Critical Assessment of Clinical Practice Guidelines. *World J Mens Health*. PMID [33988000](https://pubmed.ncbi.nlm.nih.gov/33988000/). doi:10.5534/wjmh.210056. review. Compares the Agarwal and Esteves SDF guidelines; both use thresholds around 20% for TUNEL/SCD/SCSA (about 26% for alkaline Comet) and link values above 20-30% to worse outcomes.
- **[agarwalr2025]** Agarwal R, Salas-Salvadó J, Davila-Cordova E, et al. (2025). Mediterranean Diet, Semen Quality, and Medically Assisted Reproductive Outcomes in the Male Population: A Systematic Review and Meta-Analysis. *Adv Nutr*. PMID [40419219](https://pubmed.ncbi.nlm.nih.gov/40419219/). doi:10.1016/j.advnut.2025.100454. meta-analysis; n = 11 studies, 2558 men. Mediterranean diet adherence was associated with higher sperm count (+24 million), motility (+8.8 points) and morphology; no data showing better fertility outcomes.
- **[aitken2010]** Aitken RJ, De Iuliis GN (2010). On the possible origins of DNA damage in human spermatozoa. *Mol Hum Reprod*. PMID [19648152](https://pubmed.ncbi.nlm.nih.gov/19648152/). doi:10.1093/molehr/gap059. review. Proposes the two-step hypothesis: defective chromatin remodelling (poor protamination) during spermiogenesis leaves sperm vulnerable, and oxidative stress then breaks the DNA.
- **[aitken2014]** Aitken RJ, Smith TB, Jobling MS, et al. (2014). Oxidative stress and male reproductive health. *Asian J Androl*. PMID [24369131](https://pubmed.ncbi.nlm.nih.gov/24369131/). doi:10.4103/1008-682X.122203. review. Sperm carry only OGG1, the first enzyme of base excision repair; the oocyte must finish repairing oxidised bases before the first S-phase, and errors become mutations in every cell of the embryo.
- **[aitken2016]** Aitken RJ, Gibb Z, Baker MA, et al. (2016). Causes and consequences of oxidative stress in spermatozoa. *Reprod Fertil Dev*. PMID [27062870](https://pubmed.ncbi.nlm.nih.gov/27062870/). doi:10.1071/RD15325. review. Sperm are vulnerable because their membranes are rich in polyunsaturated fatty acids and they have almost no cytoplasm for antioxidant enzymes; stressed sperm default to an apoptotic pathway with mitochondrial ROS and oxidative DNA damage.
- **[aitken2023a]** Aitken RJ, Lewis SEM (2023). DNA damage in testicular germ cells and spermatozoa. When and how is it induced? How should we measure it? What does it mean?. *Andrology*. PMID [36604857](https://pubmed.ncbi.nlm.nih.gov/36604857/). doi:10.1111/andr.13375. review. In mature sperm, hydrogen peroxide released from the midpiece (not nucleases) penetrates the nucleus and drives DNA damage; reviews what each SDF assay actually measures.
- **[aitken2023b]** Aitken RJ (2023). Male reproductive ageing: a radical road to ruin. *Hum Reprod*. PMID [37568254](https://pubmed.ncbi.nlm.nih.gov/37568254/). doi:10.1093/humrep/dead157. review. Paternal ageing brings more sperm DNA damage, epigenetic change in the germ line and a higher mutational load in offspring.
- **[asrm2013]** Practice Committee of the American Society for Reproductive Medicine (2013). The clinical utility of sperm DNA integrity testing: a guideline. *Fertil Steril*. PMID [23391408](https://pubmed.ncbi.nlm.nih.gov/23391408/). doi:10.1016/j.fertnstert.2012.12.049. guideline. ASRM 2013: sperm DNA integrity tests do not reliably predict treatment outcomes and cannot be recommended routinely.
- **[balercia2009]** Balercia G, Buldreghini E, Vignini A, et al. (2009). Coenzyme Q10 treatment in infertile men with idiopathic asthenozoospermia: a placebo-controlled, double-blind randomized trial. *Fertil Steril*. PMID [18395716](https://pubmed.ncbi.nlm.nih.gov/18395716/). doi:10.1016/j.fertnstert.2008.02.119. rct; n = 60 men. CoQ10 200 mg/day for 6 months increased seminal CoQ10 and motility in idiopathic asthenozoospermia.
- **[barbagallo2022]** Barbagallo F, Cannarella R, Crafa A, et al. (2022). The Impact of a Very Short Abstinence Period on Conventional Sperm Parameters and Sperm DNA Fragmentation: A Systematic Review and Meta-Analysis. *J Clin Med*. PMID [36555920](https://pubmed.ncbi.nlm.nih.gov/36555920/). doi:10.3390/jcm11247303. meta-analysis; n = 19 studies. A second ejaculate within 4 hours had lower SDF in men with abnormal semen.
- **[blombergjensen2018]** Blomberg Jensen M, Lawaetz JG, Petersen JH, et al. (2018). Effects of Vitamin D Supplementation on Semen Quality, Reproductive Hormones, and Live Birth Rate: A Randomized Clinical Trial. *J Clin Endocrinol Metab*. PMID [29126319](https://pubmed.ncbi.nlm.nih.gov/29126319/). doi:10.1210/jc.2017-01656. rct; n = 330 men. Vitamin D (300,000 IU then 1400 IU/day) plus calcium for 150 days did not improve semen quality in vitamin-D-insufficient infertile men.
- **[brannigan2024]** Brannigan RE, Hermanson L, Kaczmarek J, et al. (2024). Updates to Male Infertility: AUA/ASRM Guideline (2024). *J Urol*. PMID [39145501](https://pubmed.ncbi.nlm.nih.gov/39145501/). doi:10.1097/JU.0000000000004180. guideline. 2024 AUA/ASRM amendment, including the statement that clinicians may consider testicular sperm in nonazoospermic men with elevated DNA fragmentation.
- **[bungum2007]** Bungum M, Humaidan P, Axmon A, et al. (2007). Sperm DNA integrity assessment in prediction of assisted reproduction technology outcome. *Hum Reprod*. PMID [16921163](https://pubmed.ncbi.nlm.nih.gov/16921163/). doi:10.1093/humrep/del326. cohort; n = 998 cycles, 637 couples. DFI >30% predicted lower pregnancy and delivery after IUI; with DFI >30%, ICSI did better than conventional IVF.
- **[campbell2015]** Campbell JM, Lane M, Owens JA, et al. (2015). Paternal obesity negatively affects male fertility and assisted reproduction outcomes: a systematic review and meta-analysis. *Reprod Biomed Online*. PMID [26380863](https://pubmed.ncbi.nlm.nih.gov/26380863/). doi:10.1016/j.rbmo.2015.07.012. meta-analysis; n = 30 studies, 115158 men. Obese men had more infertility (OR 1.66), lower live birth per ART cycle (OR 0.65) and more sperm DNA fragmentation.
- **[chavarro2008]** Chavarro JE, Toth TL, Sadio SM, et al. (2008). Soy food and isoflavone intake in relation to semen quality parameters among men from an infertility clinic. *Hum Reprod*. PMID [18650557](https://pubmed.ncbi.nlm.nih.gov/18650557/). doi:10.1093/humrep/den243. cross-sectional; n = 99 men. Men in the highest soy-food category had 41 million/mL lower sperm concentration; no link to motility or morphology.
- **[chiu2014]** Chiu YH, Afeiche MC, Gaskins AJ, et al. (2014). Sugar-sweetened beverage intake in relation to semen quality and reproductive hormone levels in young men. *Hum Reprod*. PMID [24812311](https://pubmed.ncbi.nlm.nih.gov/24812311/). doi:10.1093/humrep/deu102. cross-sectional. Young men drinking >=1.3 sugar-sweetened beverages/day had 9.8 points lower progressive motility than those drinking <0.2/day.
- **[chiu2016]** Chiu YH, Gaskins AJ, Williams PL, et al. (2016). Intake of Fruits and Vegetables with Low-to-Moderate Pesticide Residues Is Positively Associated with Semen-Quality Parameters among Young Healthy Men. *J Nutr*. PMID [27075904](https://pubmed.ncbi.nlm.nih.gov/27075904/). doi:10.3945/jn.115.226563. cross-sectional. Eating >=2.8 servings/day of low-to-moderate-pesticide fruit and vegetables was linked to 169% higher total sperm count; high-pesticide produce was not.
- **[cho2017]** Cho CL, Agarwal A, Majzoub A, et al. (2017). Clinical utility of sperm DNA fragmentation testing: concise practice recommendations. *Transl Androl Urol*. PMID [29082146](https://pubmed.ncbi.nlm.nih.gov/29082146/). doi:10.21037/tau.2017.07.28. guideline. Concise expert practice recommendations on the clinical scenarios where SDF testing changes management.
- **[coleman2026]** Coleman CM, Wesselink AK, Yland JJ, et al. (2026). A North American preconception study of sleep health and semen quality. *Hum Reprod*. PMID [41330355](https://pubmed.ncbi.nlm.nih.gov/41330355/). doi:10.1093/humrep/deaf228. cohort. Short (<6 h) or long (>=9 h) sleep and poor sleep quality were associated with roughly 15-20% lower sperm counts, with wide confidence intervals.
- **[comhaire2005]** Comhaire FH, El Garem Y, Mahmoud A, et al. (2005). Combined conventional/antioxidant "Astaxanthin" treatment for male infertility: a double blind, randomized trial. *Asian J Androl*. PMID [16110353](https://pubmed.ncbi.nlm.nih.gov/16110353/). doi:10.1111/j.1745-7262.2005.00047.x. rct; n = 30 men. Astaxanthin 16 mg/day for 3 months lowered seminal ROS; pregnancy 54.5% vs 10.5% in a very small trial.
- **[dahan2021]** Dahan MH, Mills G, Khoudja R, et al. (2021). Three hour abstinence as a treatment for high sperm DNA fragmentation: a prospective cohort study. *J Assist Reprod Genet*. PMID [33179134](https://pubmed.ncbi.nlm.nih.gov/33179134/). doi:10.1007/s10815-020-01999-w. cohort; n = 112 men. SDF fell from 34.6% after 3 days of abstinence to 23.7% in a second sample 3 hours later; 55% of men with SDF >35% moved into the normal range.
- **[deiuliis2009]** De Iuliis GN, Thomson LK, Mitchell LA, et al. (2009). DNA damage in human spermatozoa is highly correlated with the efficiency of chromatin remodeling and the formation of 8-hydroxy-2'-deoxyguanosine, a marker of oxidative stress. *Biol Reprod*. PMID [19494251](https://pubmed.ncbi.nlm.nih.gov/19494251/). doi:10.1095/biolreprod.109.076836. mechanistic. In human sperm, poor protamination correlated strongly with 8-OHdG formation and with DNA fragmentation (P<0.001), supporting the two-step hypothesis.
- **[deligny2022]** de Ligny W, Smits RM, Mackenzie-Proctor R, et al. (2022). Antioxidants for male subfertility. *Cochrane Database Syst Rev*. PMID [35506389](https://pubmed.ncbi.nlm.nih.gov/35506389/). doi:10.1002/14651858.CD007411.pub5. meta-analysis; n = 90 RCTs, 10303 men. Cochrane 2022: live birth OR 1.43 (very low certainty); after removing high-risk-of-bias trials, no significant benefit (OR 1.22, 0.85-1.75).
- **[du2024]** Du C, Li Y, Yin C, et al. (2024). Association of abstinence time with semen quality and fertility outcomes: a systematic review and dose-response meta-analysis. *Andrology*. PMID [38197853](https://pubmed.ncbi.nlm.nih.gov/38197853/). doi:10.1111/andr.13583. meta-analysis; n = 85 studies. Short versus long abstinence lowered DNA fragmentation index by about 2.4 points in healthy men, at the cost of lower volume and count.
- **[esteves2017]** Esteves SC, Roque M, Bradley CK, et al. (2017). Reproductive outcomes of testicular versus ejaculated sperm for intracytoplasmic sperm injection among men with high levels of DNA fragmentation in semen: systematic review and meta-analysis. *Fertil Steril*. PMID [28865546](https://pubmed.ncbi.nlm.nih.gov/28865546/). doi:10.1016/j.fertnstert.2017.06.018. meta-analysis; n = 5 studies (SDF), 507 cycles. Testicular sperm had 24.6 points lower SDF than ejaculated sperm; ICSI with testicular sperm gave higher pregnancy and live birth and fewer miscarriages in high-SDF men.
- **[esteves2020]** Esteves SC, Santi D, Simoni M (2020). An update on clinical and surgical interventions to reduce sperm DNA fragmentation in infertile men. *Andrology*. PMID [31692293](https://pubmed.ncbi.nlm.nih.gov/31692293/). doi:10.1111/andr.12724. review. Best evidence for lowering SDF is varicocele repair; antioxidants and lifestyle change may lower SDF but their effect on pregnancy is unclear.
- **[evenson1999]** Evenson DP, Jost LK, Marshall D, et al. (1999). Utility of the sperm chromatin structure assay as a diagnostic and prognostic tool in the human fertility clinic. *Hum Reprod*. PMID [10221239](https://pubmed.ncbi.nlm.nih.gov/10221239/). doi:10.1093/humrep/14.4.1039. cohort; n = 165 couples + 115 patients. No couple conceived naturally when the man's SCSA DNA fragmentation was >=30%; 84% of men whose partners conceived in months 1-3 were below 15%.
- **[falsig2019]** Falsig AL, Gleerup CS, Knudsen UB (2019). The influence of omega-3 fatty acids on semen quality markers: a systematic PRISMA review. *Andrology*. PMID [31116515](https://pubmed.ncbi.nlm.nih.gov/31116515/). doi:10.1111/andr.12649. review; n = 16 studies. 14 of 16 studies found omega-3 intake or supplements associated with improvement in at least one semen marker; studies too heterogeneous to pool.
- **[gallegos2008]** Gallegos G, Ramos B, Santiso R, et al. (2008). Sperm DNA fragmentation in infertile men with genitourinary infection by Chlamydia trachomatis and Mycoplasma. *Fertil Steril*. PMID [17953955](https://pubmed.ncbi.nlm.nih.gov/17953955/). doi:10.1016/j.fertnstert.2007.06.035. cohort. Chlamydia/Mycoplasma infection: SDF 35% vs 11% in fertile controls; after about 4 months of antibiotics SDF fell from 37.7% to 24.2%.
- **[garolla2013]** Garolla A, Torino M, Sartini B, et al. (2013). Seminal and molecular evidence that sauna exposure affects human spermatogenesis. *Hum Reprod*. PMID [23411620](https://pubmed.ncbi.nlm.nih.gov/23411620/). doi:10.1093/humrep/det020. cohort; n = 10 men. Finnish sauna (80-90 C, 15 min, twice weekly, 3 months) impaired count, motility, protamination and mitochondrial function; all effects reversed 6 months after stopping.
- **[gaskins2012]** Gaskins AJ, Colaci DS, Mendiola J, et al. (2012). Dietary patterns and semen quality in young men. *Hum Reprod*. PMID [22888168](https://pubmed.ncbi.nlm.nih.gov/22888168/). doi:10.1093/humrep/des298. cross-sectional. Young men in the top quartile of a 'prudent' diet (fish, chicken, fruit, vegetables, legumes, whole grains) had 11.3 points higher progressive motility.
- **[gaskins2015]** Gaskins AJ, Mendiola J, Afeiche M, et al. (2015). Physical activity and television watching in relation to semen quality in young men. *Br J Sports Med*. PMID [23380634](https://pubmed.ncbi.nlm.nih.gov/23380634/). doi:10.1136/bjsports-2012-091644. cross-sectional; n = 189 men aged 18-22. Men with >=15 h/week moderate-vigorous activity had 73% higher sperm concentration; >20 h/week TV was linked to 44% lower concentration.
- **[gosalvez2011]** Gosálvez J, González-Martínez M, López-Fernández C, et al. (2011). Shorter abstinence decreases sperm deoxyribonucleic acid fragmentation in ejaculate. *Fertil Steril*. PMID [21924714](https://pubmed.ncbi.nlm.nih.gov/21924714/). doi:10.1016/j.fertnstert.2011.08.027. cohort; n = 33 men. SDF was lower after 24-hour, and especially 3-hour, abstinence than after the standard abstinence period.
- **[greco2005]** Greco E, Romano S, Iacobelli M, et al. (2005). ICSI in cases of sperm DNA damage: beneficial effect of oral antioxidant treatment. *Hum Reprod*. PMID [15932912](https://pubmed.ncbi.nlm.nih.gov/15932912/). doi:10.1093/humrep/dei091. cohort; n = 38 men. 1 g vitamin C + 1 g vitamin E daily for 2 months lowered SDF in 76% of men; the next ICSI had 48.2% vs 6.9% pregnancy (uncontrolled before-after).
- **[hajizadehmaleki2015]** Hajizadeh Maleki B, Tartibian B (2015). Long-term Low-to-Intensive Cycling Training: Impact on Semen Parameters and Seminal Cytokines. *Clin J Sport Med*. PMID [24977955](https://pubmed.ncbi.nlm.nih.gov/24977955/). doi:10.1097/JSM.0000000000000122. cohort; n = 24 cyclists. 16 weeks of intensive road-cycling training raised seminal cytokines and worsened semen; some changes persisted 30 days after training.
- **[hajizadehmaleki2017]** Hajizadeh Maleki B, Tartibian B, Chehrazi M (2017). The effects of three different exercise modalities on markers of male reproduction in healthy subjects: a randomized controlled trial. *Reproduction*. PMID [27920258](https://pubmed.ncbi.nlm.nih.gov/27920258/). doi:10.1530/REP-16-0318. rct; n = 280 men. 24 weeks of moderate continuous training improved seminal oxidative and inflammatory markers and sperm DNA integrity more than high-intensity training (same group has several retracted trials).
- **[hauser2007]** Hauser R, Meeker JD, Singh NP, et al. (2007). DNA damage in human sperm is related to urinary levels of phthalate monoester and oxidative metabolites. *Hum Reprod*. PMID [17090632](https://pubmed.ncbi.nlm.nih.gov/17090632/). doi:10.1093/humrep/del428. cross-sectional; n = 379 men. Urinary phthalate metabolites MEP and MEHP were associated with more neutral-Comet sperm DNA damage (about 14-18% per IQR rise in MEHP).
- **[heller1964]** HELLER CH, CLERMONT Y (1964). KINETICS OF THE GERMINAL EPITHELIUM IN MAN. *Recent Prog Horm Res*. PMID [14285045](https://pubmed.ncbi.nlm.nih.gov/14285045/). mechanistic. Classic radiolabelling study of the kinetics of the human germinal epithelium, the source of the widely quoted ~74-day duration of spermatogenesis.
- **[jannatifar2019]** Jannatifar R, Parivar K, Roodbari NH, et al. (2019). Effects of N-acetyl-cysteine supplementation on sperm quality, chromatin integrity and level of oxidative stress in infertile men. *Reprod Biol Endocrinol*. PMID [30771790](https://pubmed.ncbi.nlm.nih.gov/30771790/). doi:10.1186/s12958-019-0468-9. cohort; n = 50 men. NAC 600 mg/day for 3 months lowered SDF and protamine deficiency and improved count and motility (uncontrolled before-after).
- **[jensen2014]** Jensen TK, Gottschau M, Madsen JO, et al. (2014). Habitual alcohol consumption associated with reduced semen quality and changes in reproductive hormones; a cross-sectional study among 1221 young Danish men. *BMJ Open*. PMID [25277121](https://pubmed.ncbi.nlm.nih.gov/25277121/). doi:10.1136/bmjopen-2014-005462. cross-sectional; n = 1221 men. Habitual intake above 5 units/week was linked to poorer semen; above 40 units/week, sperm concentration was 33% lower than at 1-5 units.
- **[jensen2020]** Jensen TK, Priskorn L, Holmboe SA, et al. (2020). Associations of Fish Oil Supplement Use With Testicular Function in Young Men. *JAMA Netw Open*. PMID [31951274](https://pubmed.ncbi.nlm.nih.gov/31951274/). doi:10.1001/jamanetworkopen.2019.19462. cross-sectional; n = 1679 men. Young men using fish oil supplements on >=60 days had 0.64 mL more semen volume, larger testes and lower FSH and LH.
- **[johnson2015]** Johnson SL, Dunleavy J, Gemmell NJ, et al. (2015). Consistent age-dependent declines in human semen quality: a systematic review and meta-analysis. *Ageing Res Rev*. PMID [25462195](https://pubmed.ncbi.nlm.nih.gov/25462195/). doi:10.1016/j.arr.2014.10.007. meta-analysis; n = 90 studies, 93839 men. Age was associated with declines in volume, motility, morphology and the share of unfragmented sperm.
- **[karayiannis2017]** Karayiannis D, Kontogianni MD, Mendorou C, et al. (2017). Association between adherence to the Mediterranean diet and semen quality parameters in male partners of couples attempting fertility. *Hum Reprod*. PMID [27994040](https://pubmed.ncbi.nlm.nih.gov/27994040/). doi:10.1093/humrep/dew288. cross-sectional. Men in the lowest Mediterranean-diet tertile had about 2.6 times the odds of abnormal concentration, count and motility.
- **[khaw2020]** Khaw SC, Wong ZZ, Anderson R, et al. (2020). l-carnitine and l-acetylcarnitine supplementation for idiopathic male infertility. *Reprod Fertil*. PMID [35128424](https://pubmed.ncbi.nlm.nih.gov/35128424/). doi:10.1530/RAF-20-0037. meta-analysis; n = 8 RCTs. Carnitines improved total and progressive motility and morphology, with no demonstrable effect on clinical pregnancy.
- **[kim2021phone]** Kim S, Han D, Ryu J, et al. (2021). Effects of mobile phone usage on sperm quality - No time-dependent relationship on usage: A systematic review and updated meta-analysis. *Environ Res*. PMID [34333014](https://pubmed.ncbi.nlm.nih.gov/34333014/). doi:10.1016/j.envres.2021.111784. meta-analysis; n = 18 studies, 4280 samples. Phone exposure was associated with lower motility, viability and concentration, but with no dose-response by hours of use.
- **[kopets2020]** Kopets R, Kuibida I, Chernyavska I, et al. (2020). Dietary supplementation with a novel l-carnitine multi-micronutrient in idiopathic male subfertility involving oligo-, astheno-, teratozoospermia: A randomized clinical study. *Andrology*. PMID [32330373](https://pubmed.ncbi.nlm.nih.gov/32330373/). doi:10.1111/andr.12805. rct; n = 83 men. An L-carnitine multi-micronutrient for 6 months raised the share of normal semen analyses (69% vs 22%) and spontaneous pregnancies.
- **[koppers2008]** Koppers AJ, De Iuliis GN, Finnie JM, et al. (2008). Significance of mitochondrial reactive oxygen species in the generation of oxidative stress in spermatozoa. *J Clin Endocrinol Metab*. PMID [18492763](https://pubmed.ncbi.nlm.nih.gov/18492763/). doi:10.1210/jc.2007-2616. mechanistic. Electron leak from mitochondrial complex I in human sperm causes midpiece lipid peroxidation and loss of motility, preventable by alpha-tocopherol in vitro.
- **[lafuente2013]** Lafuente R, González-Comadrán M, Solà I, et al. (2013). Coenzyme Q10 and male infertility: a meta-analysis. *J Assist Reprod Genet*. PMID [23912751](https://pubmed.ncbi.nlm.nih.gov/23912751/). doi:10.1007/s10815-013-0047-5. meta-analysis; n = 3 RCTs, 296 men. CoQ10 raised sperm concentration and motility, but there was no evidence for higher pregnancy or live birth.
- **[liraneto2021]** Lira Neto FT, Roque M, Esteves SC (2021). Effect of varicocelectomy on sperm deoxyribonucleic acid fragmentation rates in infertile men with clinical varicocele: a systematic review and meta-analysis. *Fertil Steril*. PMID [33985792](https://pubmed.ncbi.nlm.nih.gov/33985792/). doi:10.1016/j.fertnstert.2021.04.003. meta-analysis; n = 19 studies, 1070 men. Varicocelectomy lowered SDF by 7.2 points (95% CI 5.6-8.9), more in men with high pre-operative SDF.
- **[liu2006]** Liu PY, Swerdloff RS, Christenson PD, et al. (2006). Rate, extent, and modifiers of spermatogenic recovery after hormonal male contraception: an integrated analysis. *Lancet*. PMID [16650651](https://pubmed.ncbi.nlm.nih.gov/16650651/). doi:10.1016/S0140-6736(06)68614-5. meta-analysis; n = 1549 men, 30 studies. After androgen-based suppression, median time for sperm to recover to 20 million/mL was 3.4 months; longer with longer treatment.
- **[liu2014phone]** Liu K, Li Y, Zhang G, et al. (2014). Association between mobile phone use and semen quality: a systemic review and meta-analysis. *Andrology*. PMID [24700791](https://pubmed.ncbi.nlm.nih.gov/24700791/). doi:10.1111/j.2047-2927.2014.00205.x. meta-analysis; n = 18 studies. In human studies, mobile phone use had no significant effect on semen parameters; in vitro RF exposure reduced motility and viability.
- **[logiudice2024]** Lo Giudice A, Asmundo MG, Cimino S, et al. (2024). Effects of long and short ejaculatory abstinence on sperm parameters: a meta-analysis of randomized-controlled trials. *Front Endocrinol (Lausanne)*. PMID [38828413](https://pubmed.ncbi.nlm.nih.gov/38828413/). doi:10.3389/fendo.2024.1373426. meta-analysis; n = 13 studies, 2315 men. Abstinence longer than 2 days was associated with SDF 3.5 points higher; each extra day added about 0.65 points.
- **[martinezsoto2016]** Martínez-Soto JC, Domingo JC, Cordobilla B, et al. (2016). Dietary supplementation with docosahexaenoic acid (DHA) improves seminal antioxidant status and decreases sperm DNA fragmentation. *Syst Biol Reprod Med*. PMID [27792396](https://pubmed.ncbi.nlm.nih.gov/27792396/). doi:10.1080/19396368.2016.1246623. rct; n = 74 men (57 analysed). 1.5 g/day DHA for 10 weeks improved seminal antioxidant status and lowered sperm DNA fragmentation, without changing standard parameters.
- **[mcqueen2019]** McQueen DB, Zhang J, Robins JC (2019). Sperm DNA fragmentation and recurrent pregnancy loss: a systematic review and meta-analysis. *Fertil Steril*. PMID [31056315](https://pubmed.ncbi.nlm.nih.gov/31056315/). doi:10.1016/j.fertnstert.2019.03.003. meta-analysis; n = 579 cases, 434 controls. Male partners of women with recurrent pregnancy loss had sperm DNA fragmentation 11.9 points higher than partners of fertile women.
- **[meeker2010]** Meeker JD, Ehrlich S, Toth TL, et al. (2010). Semen quality and sperm DNA damage in relation to urinary bisphenol A among men from an infertility clinic. *Reprod Toxicol*. PMID [20656017](https://pubmed.ncbi.nlm.nih.gov/20656017/). doi:10.1016/j.reprotox.2010.07.005. cross-sectional; n = 190 men. An IQR rise in urinary BPA was linked to 10% more Comet tail DNA and lower concentration and morphology.
- **[menezo2007]** Ménézo YJ, Hazout A, Panteix G, et al. (2007). Antioxidants to reduce sperm DNA fragmentation: an unexpected adverse effect. *Reprod Biomed Online*. PMID [17425820](https://pubmed.ncbi.nlm.nih.gov/17425820/). doi:10.1016/s1472-6483(10)60887-5. cohort. 90 days of antioxidant vitamins with zinc and selenium lowered DFI by 19% but raised sperm decondensation by 23%.
- **[meseguer2008]** Meseguer M, Martínez-Conejero JA, O'Connor JE, et al. (2008). The significance of sperm DNA oxidation in embryo development and reproductive outcome in an oocyte donation program: a new model to study a male infertility prognostic factor. *Fertil Steril*. PMID [17681311](https://pubmed.ncbi.nlm.nih.gov/17681311/). doi:10.1016/j.fertnstert.2007.05.005. cohort; n = 38 men (shared donor oocytes). With the same donor's eggs split between couples, higher sperm DNA oxidation was linked to poorer embryo development and blastocyst formation.
- **[minguezalarcon2015]** Mínguez-Alarcón L, Afeiche MC, Chiu YH, et al. (2015). Male soy food intake was not associated with in vitro fertilization outcomes among couples attending a fertility center. *Andrology*. PMID [26097060](https://pubmed.ncbi.nlm.nih.gov/26097060/). doi:10.1111/andr.12046. cohort. Male partners' soy intake was unrelated to fertilization, embryo quality or live birth in IVF.
- **[minguezalarcon2018]** Mínguez-Alarcón L, Gaskins AJ, Chiu YH, et al. (2018). Type of underwear worn and markers of testicular function among men attending a fertility center. *Hum Reprod*. PMID [30102388](https://pubmed.ncbi.nlm.nih.gov/30102388/). doi:10.1093/humrep/dey259. cross-sectional; n = about 650 men. Men who mainly wore boxers had 25% higher sperm concentration and 17% higher total count than men who did not.
- **[minhas2021]** Minhas S, Bettocchi C, Boeri L, et al. (2021). European Association of Urology Guidelines on Male Sexual and Reproductive Health: 2021 Update on Male Infertility. *Eur Urol*. PMID [34511305](https://pubmed.ncbi.nlm.nih.gov/34511305/). doi:10.1016/j.eururo.2021.08.014. guideline. EAU 2021: SDF is a useful biomarker for ART outcomes; insufficient evidence for widespread empirical antioxidants or surgical sperm retrieval in men without azoospermia.
- **[mirandacontreras2013]** Miranda-Contreras L, Gómez-Pérez R, Rojas G, et al. (2013). Occupational exposure to organophosphate and carbamate pesticides affects sperm chromatin integrity and reproductive hormone levels among Venezuelan farm workers. *J Occup Health*. PMID [23445617](https://pubmed.ncbi.nlm.nih.gov/23445617/). doi:10.1539/joh.12-0144-fs. cross-sectional. Farm workers exposed to organophosphate and carbamate pesticides had higher sperm DNA fragmentation index.
- **[misell2006]** Misell LM, Holochwost D, Boban D, et al. (2006). A stable isotope-mass spectrometric method for measuring human spermatogenesis kinetics in vivo. *J Urol*. PMID [16406920](https://pubmed.ncbi.nlm.nih.gov/16406920/). doi:10.1016/S0022-5347(05)00053-4. cohort; n = 11 men. Deuterium labelling: newly made sperm first appeared in the ejaculate after 64 +/- 8 days (range 42-76).
- **[moazamian2025]** Moazamian A, Hug E, Villeneuve P, et al. (2025). The dual nature of micronutrients on fertility: too much of a good thing?. *F S Sci*. PMID [40015627](https://pubmed.ncbi.nlm.nih.gov/40015627/). doi:10.1016/j.xfss.2025.02.004. mechanistic. In healthy mice, high doses of vitamin C, zinc, folate or carnitine disturbed redox balance and damaged sperm DNA; high carnitine cut pregnancy rates, but helped oxidatively stressed mice.
- **[newman2022]** Newman H, Catt S, Vining B, et al. (2022). DNA repair and response to sperm DNA damage in oocytes and embryos, and the potential consequences in ART: a systematic review. *Mol Hum Reprod*. PMID [34954800](https://pubmed.ncbi.nlm.nih.gov/34954800/). doi:10.1093/molehr/gaab071. review. Systematic review: oocytes and early embryos can repair paternal DNA damage, but the capacity is limited and likely declines with maternal age.
- **[osman2015]** Osman A, Alsomait H, Seshadri S, et al. (2015). The effect of sperm DNA fragmentation on live birth rate after IVF or ICSI: a systematic review and meta-analysis. *Reprod Biomed Online*. PMID [25530036](https://pubmed.ncbi.nlm.nih.gov/25530036/). doi:10.1016/j.rbmo.2014.10.018. meta-analysis; n = 6 studies. Low sperm DNA fragmentation was associated with higher live birth after IVF/ICSI (RR 1.17); the ICSI effect was small and not robust in sensitivity analysis.
- **[peel2026]** Peel A, Lyons H, Tully CA, et al. (2026). The effect of obesity interventions on male fertility: a systematic review and meta-analysis. *Hum Reprod Update*. PMID [41065428](https://pubmed.ncbi.nlm.nih.gov/41065428/). doi:10.1093/humupd/dmaf025. meta-analysis; n = 32 studies. Lifestyle weight-loss programmes improved motility and morphology; bariatric surgery produced no clinically significant semen or DNA damage change; low certainty overall.
- **[persad2021]** Persad E, O'Loughlin CA, Kaur S, et al. (2021). Surgical or radiological treatment for varicoceles in subfertile men. *Cochrane Database Syst Rev*. PMID [33890288](https://pubmed.ncbi.nlm.nih.gov/33890288/). doi:10.1002/14651858.CD000479.pub6. meta-analysis; n = 48 studies, 5384 men. Cochrane: varicocele treatment may raise pregnancy rates (RR 1.55, low certainty); effect on live birth is uncertain.
- **[ragheb2025]** Ragheb A, Abdelbary A, Massoud A, et al. (2025). Evaluating the effect of smoking and its cessation on semen parameters. *Reprod Fertil*. PMID [41051027](https://pubmed.ncbi.nlm.nih.gov/41051027/). doi:10.1530/RAF-24-0135. cohort; n = 60 men. After quitting smoking, semen improved at 3 and again at 6 months (progressive motility 20.7% -> 35.3% -> 42.3%).
- **[rajmil2024]** Rajmil O, Moreno-Sepulveda J (2024). Recovery of spermatogenesis after androgenic anabolic steroids abuse in men. A systematic review of the literature. *Actas Urol Esp (Engl Ed)*. PMID [37567343](https://pubmed.ncbi.nlm.nih.gov/37567343/). doi:10.1016/j.acuroe.2023.07.007. review. Systematic review: anabolic steroid infertility is often reversible, but sperm production may take over a year to normalise.
- **[rao2016]** Rao M, Xia W, Yang J, et al. (2016). Transient scrotal hyperthermia affects human sperm DNA integrity, sperm apoptosis, and sperm protein expression. *Andrology*. PMID [27410176](https://pubmed.ncbi.nlm.nih.gov/27410176/). doi:10.1111/andr.12228. rct; n = 20 men. Scrotal warming in a 43 C bath for 30 min x 10 sessions reversibly increased SCSA chromatin abnormality, apoptosis and mitochondrial damage; recovery by about 16 weeks.
- **[reed2021]** Reed KE, Camargo J, Hamilton-Reeves J, et al. (2021). Neither soy nor isoflavone intake affects male reproductive hormones: An expanded and updated meta-analysis of clinical studies. *Reprod Toxicol*. PMID [33383165](https://pubmed.ncbi.nlm.nih.gov/33383165/). doi:10.1016/j.reprotox.2020.12.019. meta-analysis; n = 41 studies. Soy protein and isoflavones did not change testosterone, free testosterone, estrogens or SHBG in men.
- **[ribasmaynou2012]** Ribas-Maynou J, García-Peiró A, Fernandez-Encinas A, et al. (2012). Double stranded sperm DNA breaks, measured by Comet assay, are associated with unexplained recurrent miscarriage in couples without a female factor. *PLoS One*. PMID [23028579](https://pubmed.ncbi.nlm.nih.gov/23028579/). doi:10.1371/journal.pone.0044679. case-control; n = 150 men. A high double-strand break profile (neutral Comet) was found in 85% of men from couples with unexplained recurrent miscarriage vs 33% of fertile donors.
- **[ricci2017alc]** Ricci E, Al Beitawi S, Cipriani S, et al. (2017). Semen quality and alcohol intake: a systematic review and meta-analysis. *Reprod Biomed Online*. PMID [28029592](https://pubmed.ncbi.nlm.nih.gov/28029592/). doi:10.1016/j.rbmo.2016.09.012. meta-analysis; n = 15 studies, 16395 men. Alcohol lowered semen volume and normal morphology, mainly in daily drinkers; occasional drinking did not clearly harm semen.
- **[ricci2017coffee]** Ricci E, Viganò P, Cipriani S, et al. (2017). Coffee and caffeine intake and male infertility: a systematic review. *Nutr J*. PMID [28646871](https://pubmed.ncbi.nlm.nih.gov/28646871/). doi:10.1186/s12937-017-0257-2. review; n = 28 studies, 19967 men. Caffeine from coffee and tea was mostly unrelated to semen parameters; caffeinated soft drinks looked harmful; DNA-damage findings inconsistent.
- **[robbins2012]** Robbins WA, Xun L, FitzGerald LZ, et al. (2012). Walnuts improve semen quality in men consuming a Western-style diet: randomized control dietary intervention trial. *Biol Reprod*. PMID [22895856](https://pubmed.ncbi.nlm.nih.gov/22895856/). doi:10.1095/biolreprod.112.101634. rct; n = 117 men. Adding 75 g/day walnuts for 12 weeks improved sperm vitality, motility and morphology (DNA fragmentation not measured).
- **[robinson2012]** Robinson L, Gallos ID, Conner SJ, et al. (2012). The effect of sperm DNA fragmentation on miscarriage rates: a systematic review and meta-analysis. *Hum Reprod*. PMID [22791753](https://pubmed.ncbi.nlm.nih.gov/22791753/). doi:10.1093/humrep/des261. meta-analysis; n = 16 cohorts, 2969 couples. High sperm DNA damage doubled the risk of miscarriage (RR 2.16, 95% CI 1.54-3.03); strongest with TUNEL (RR 3.94).
- **[rubes2005]** Rubes J, Selevan SG, Evenson DP, et al. (2005). Episodic air pollution is associated with increased DNA fragmentation in human sperm without other changes in semen quality. *Hum Reprod*. PMID [15980006](https://pubmed.ncbi.nlm.nih.gov/15980006/). doi:10.1093/humrep/dei122. cohort. Young men in Teplice had more SCSA sperm DNA fragmentation after high-pollution periods, without other semen changes.
- **[salashuetos2017]** Salas-Huetos A, Bulló M, Salas-Salvadó J (2017). Dietary patterns, foods and nutrients in male fertility parameters and fecundability: a systematic review of observational studies. *Hum Reprod Update*. PMID [28333357](https://pubmed.ncbi.nlm.nih.gov/28333357/). doi:10.1093/humupd/dmx006. review. Systematic review of observational studies: diets rich in fish, fruit, vegetables and whole grains go with better semen; processed meat, sugary drinks, alcohol and soy with worse semen in some studies.
- **[salashuetos2018]** Salas-Huetos A, Rosique-Esteban N, Becerra-Tomás N, et al. (2018). The Effect of Nutrients and Dietary Supplements on Sperm Quality Parameters: A Systematic Review and Meta-Analysis of Randomized Clinical Trials. *Adv Nutr*. PMID [30462179](https://pubmed.ncbi.nlm.nih.gov/30462179/). doi:10.1093/advances/nmy057. meta-analysis; n = 28 RCTs. Selenium, zinc, omega-3, CoQ10 and carnitines produced modest improvements in sperm parameters; fertility outcomes not assessed.
- **[salashuetos2018nuts]** Salas-Huetos A, Moraleda R, Giardina S, et al. (2018). Effect of nut consumption on semen quality and functionality in healthy men consuming a Western-style diet: a randomized controlled trial. *Am J Clin Nutr*. PMID [30475967](https://pubmed.ncbi.nlm.nih.gov/30475967/). doi:10.1093/ajcn/nqy181. rct; n = 119 men. Adding 60 g/day mixed nuts for 14 weeks improved count, vitality, motility and morphology and reduced sperm DNA fragmentation.
- **[santi2025]** Santi D, Greco C, Barbonetti A, et al. (2025). Weight Loss as Therapeutic Option to Restore Fertility in Obese Men: A Meta-Analytic Study. *World J Mens Health*. PMID [39344112](https://pubmed.ncbi.nlm.nih.gov/39344112/). doi:10.5534/wjmh.240091. meta-analysis; n = 12 studies, 345 men. Weight loss in obese men (mean baseline BMI 45) raised concentration and motility and lowered DNA fragmentation index (effect size -0.69).
- **[schisterman2020]** Schisterman EF, Sjaarda LA, Clemons T, et al. (2020). Effect of Folic Acid and Zinc Supplementation in Men on Semen Quality and Live Birth Among Couples Undergoing Infertility Treatment: A Randomized Clinical Trial. *JAMA*. PMID [31910279](https://pubmed.ncbi.nlm.nih.gov/31910279/). doi:10.1001/jama.2019.18714. rct; n = 2370 couples. FAZST: 5 mg folic acid + 30 mg zinc for 6 months did not improve semen or live birth (34% vs 35%); DNA fragmentation slightly higher (29.7% vs 27.2%).
- **[schlegel2021a]** Schlegel PN, Sigman M, Collura B, et al. (2021). Diagnosis and treatment of infertility in men: AUA/ASRM guideline part I. *Fertil Steril*. PMID [33309062](https://pubmed.ncbi.nlm.nih.gov/33309062/). doi:10.1016/j.fertnstert.2020.11.015. guideline. AUA/ASRM guideline part I (evaluation): do not order SDF in the initial work-up; do evaluate SDF (and karyotype) in the male partner of couples with recurrent pregnancy loss.
- **[schlegel2021b]** Schlegel PN, Sigman M, Collura B, et al. (2021). Diagnosis and treatment of infertility in men: AUA/ASRM guideline part II. *Fertil Steril*. PMID [33309061](https://pubmed.ncbi.nlm.nih.gov/33309061/). doi:10.1016/j.fertnstert.2020.11.016. guideline. AUA/ASRM guideline part II (treatment): counsel that supplements are of questionable clinical utility; consider varicocelectomy for palpable varicocele with abnormal semen; do not prescribe testosterone to men wanting fertility.
- **[scott1998]** Scott R, MacPherson A, Yates RW, et al. (1998). The effect of oral selenium supplementation on human sperm motility. *Br J Urol*. PMID [9698665](https://pubmed.ncbi.nlm.nih.gov/9698665/). doi:10.1046/j.1464-410x.1998.00683.x. rct; n = 69 men. Selenium (with or without vitamins A, C, E) for 3 months raised motility in subfertile Scottish men with low selenium; 11% paternity vs 0%.
- **[sepidarkish2020]** Sepidarkish M, Maleki-Hajiagha A, Maroufizadeh S, et al. (2020). The effect of body mass index on sperm DNA fragmentation: a systematic review and meta-analysis. *Int J Obes (Lond)*. PMID [31949297](https://pubmed.ncbi.nlm.nih.gov/31949297/). doi:10.1038/s41366-020-0524-8. meta-analysis; n = 14 studies, 8255 men. Only class I obesity (BMI 30-35) showed a small SDF increase (SMD 0.23); data insufficient for a firm BMI-SDF link.
- **[sergerie2007]** Sergerie M, Mieusset R, Croute F, et al. (2007). High risk of temporary alteration of semen parameters after recent acute febrile illness. *Fertil Steril*. PMID [17434502](https://pubmed.ncbi.nlm.nih.gov/17434502/). doi:10.1016/j.fertnstert.2006.12.045. cross-sectional; n = 1 man (case report). After a 2-day fever of 39-40 C, DNA fragmentation index rose by 24-36% at days 15-37 and returned toward baseline by day 79.
- **[sermondade2013]** Sermondade N, Faure C, Fezeu L, et al. (2013). BMI in relation to sperm count: an updated systematic review and collaborative meta-analysis. *Hum Reprod Update*. PMID [23242914](https://pubmed.ncbi.nlm.nih.gov/23242914/). doi:10.1093/humupd/dms050. meta-analysis; n = 21 studies, 13077 men. J-shaped curve: odds of oligo/azoospermia 1.11 overweight, 1.28 obese, 2.04 morbidly obese vs normal weight.
- **[setti2021]** Setti AS, Braga DPAF, Provenza RR, et al. (2021). Oocyte ability to repair sperm DNA fragmentation: the impact of maternal age on intracytoplasmic sperm injection outcomes. *Fertil Steril*. PMID [33589137](https://pubmed.ncbi.nlm.nih.gov/33589137/). doi:10.1016/j.fertnstert.2020.10.045. cohort; n = 540 ICSI cycles. Sperm DNA fragmentation >=30% (SCD) harmed ICSI outcomes only when the woman was over 40 (pregnancy 7.7% vs 20.0%); no effect at 40 or younger.
- **[sharma2016smoking]** Sharma R, Harlev A, Agarwal A, et al. (2016). Cigarette Smoking and Semen Quality: A New Meta-analysis Examining the Effect of the 2010 World Health Organization Laboratory Methods for the Examination of Human Semen. *Eur Urol*. PMID [27113031](https://pubmed.ncbi.nlm.nih.gov/27113031/). doi:10.1016/j.eururo.2016.04.010. meta-analysis; n = 20 studies, 5865 men. Smoking lowered sperm count (-9.7 million/mL), motility (-3.5 points) and morphology; effects larger in moderate/heavy smokers and infertile men.
- **[sharma2016tunel]** Sharma R, Ahmad G, Esteves SC, et al. (2016). Terminal deoxynucleotidyl transferase dUTP nick end labeling (TUNEL) assay using bench top flow cytometer for evaluation of sperm DNA fragmentation in fertility laboratories: protocol, reference values, and quality control. *J Assist Reprod Genet*. PMID [26780327](https://pubmed.ncbi.nlm.nih.gov/26780327/). doi:10.1007/s10815-015-0635-7. cross-sectional; n = 95 controls, 261 infertile men. Flow-cytometric TUNEL reference cut-off of 16.8% had 91.6% specificity but only 32.6% sensitivity.
- **[shefi2007]** Shefi S, Tarapore PE, Walsh TJ, et al. (2007). Wet heat exposure: a potentially reversible cause of low semen quality in infertile men. *Int Braz J Urol*. PMID [17335598](https://pubmed.ncbi.nlm.nih.gov/17335598/). doi:10.1590/s1677-55382007000100008. cohort; n = 11 men. After infertile men stopped hot tubs/hot baths, 5 of 11 responded with a 491% rise in total motile sperm count (motility 12% -> 34%).
- **[sheynkin2005]** Sheynkin Y, Jung M, Yoo P, et al. (2005). Increase in scrotal temperature in laptop computer users. *Hum Reprod*. PMID [15591087](https://pubmed.ncbi.nlm.nih.gov/15591087/). doi:10.1093/humrep/deh616. cross-sectional; n = 29 men. A working laptop on the lap raised scrotal temperature 2.6-2.8 C in 60 minutes (2.1 C from the closed-thigh posture alone).
- **[sheynkin2011]** Sheynkin Y, Welliver R, Winer A, et al. (2011). Protection from scrotal hyperthermia in laptop computer users. *Fertil Steril*. PMID [21055743](https://pubmed.ncbi.nlm.nih.gov/21055743/). doi:10.1016/j.fertnstert.2010.10.013. cross-sectional. Scrotal temperature rose 1 C within 11-28 minutes of laptop use; a lap pad did not prevent it; sitting with legs apart reduced it.
- **[simon2017]** Simon L, Zini A, Dyachenko A, et al. (2017). A systematic review and meta-analysis to determine the effect of sperm DNA damage on in vitro fertilization and intracytoplasmic sperm injection outcome. *Asian J Androl*. PMID [27345006](https://pubmed.ncbi.nlm.nih.gov/27345006/). doi:10.4103/1008-682X.182822. meta-analysis; n = 56 studies, 8068 cycles. Sperm DNA damage was associated with lower clinical pregnancy after IVF and/or ICSI (combined OR 1.68).
- **[smits2019]** Smits RM, Mackenzie-Proctor R, Yazdani A, et al. (2019). Antioxidants for male subfertility. *Cochrane Database Syst Rev*. PMID [30866036](https://pubmed.ncbi.nlm.nih.gov/30866036/). doi:10.1002/14651858.CD007411.pub4. meta-analysis; n = 61 RCTs, 6264 men. Cochrane 2019: live birth OR 1.79 (7 RCTs, 750 men, low-quality evidence); no significant benefit once high-risk-of-bias trials were removed (Peto OR 1.38, 0.89-2.16).
- **[spano2000]** Spanò M, Bonde JP, Hjøllund HI, et al. (2000). Sperm chromatin damage impairs human fertility. The Danish First Pregnancy Planner Study Team. *Fertil Steril*. PMID [10632410](https://pubmed.ncbi.nlm.nih.gov/10632410/). doi:10.1016/s0015-0282(99)00462-8. cohort; n = 215 couples. In first-pregnancy planners, the chance of conceiving per cycle fell as SCSA-abnormal sperm rose and became small above 40%.
- **[steiner2020]** Steiner AZ, Hansen KR, Barnhart KT, et al. (2020). The effect of antioxidants on male factor infertility: the Males, Antioxidants, and Infertility (MOXI) randomized clinical trial. *Fertil Steril*. PMID [32111479](https://pubmed.ncbi.nlm.nih.gov/32111479/). doi:10.1016/j.fertnstert.2019.11.008. rct; n = 171 couples. MOXI: a 7-ingredient antioxidant for 3-6 months did not improve semen parameters or DNA fragmentation; live birth 15% vs 24% placebo.
- **[stenqvist2018]** Stenqvist A, Oleszczuk K, Leijonhufvud I, et al. (2018). Impact of antioxidant treatment on DNA fragmentation index: a double-blind placebo-controlled randomized trial. *Andrology*. PMID [30298673](https://pubmed.ncbi.nlm.nih.gov/30298673/). doi:10.1111/andr.12547. rct; n = 77 men. Six months of combined antioxidants did not lower DNA fragmentation index in men with DFI >=25%.
- **[szabo2023]** Szabó A, Váncsa S, Hegyi P, et al. (2023). Lifestyle-, environmental-, and additional health factors associated with an increased sperm DNA fragmentation: a systematic review and meta-analysis. *Reprod Biol Endocrinol*. PMID [36653793](https://pubmed.ncbi.nlm.nih.gov/36653793/). doi:10.1186/s12958-023-01054-0. meta-analysis; n = 190 studies. Mean SDF increase: varicocele +13.6, impaired glucose tolerance +13.8, age >=50 +12.6, air pollution +9.7, smoking +9.2 percentage points; abstinence length and chlamydia/HPV showed no clear effect.
- **[tharakan2022]** Tharakan T, Bettocchi C, Carvalho J, et al. (2022). European Association of Urology Guidelines Panel on Male Sexual and Reproductive Health: A Clinical Consultation Guide on the Indications for Performing Sperm DNA Fragmentation Testing in Men with Infertility and Testicular Sperm Extraction in Nonazoospermic Men. *Eur Urol Focus*. PMID [33422457](https://pubmed.ncbi.nlm.nih.gov/33422457/). doi:10.1016/j.euf.2020.12.017. guideline. EAU consultation guide on when to test SDF and on the still-experimental use of testicular sperm for ICSI in nonazoospermic men.
- **[thonneau1998]** Thonneau P, Bujan L, Multigner L, et al. (1998). Occupational heat exposure and male fertility: a review. *Hum Reprod*. PMID [9756281](https://pubmed.ncbi.nlm.nih.gov/9756281/). doi:10.1093/humrep/13.8.2122. review. Occupational heat exposure is a significant risk factor for male infertility, worsening morphology and delaying conception.
- **[tremellen2007]** Tremellen K, Miari G, Froiland D, et al. (2007). A randomised control trial examining the effect of an antioxidant (Menevit) on pregnancy outcome during IVF-ICSI treatment. *Aust N Z J Obstet Gynaecol*. PMID [17550489](https://pubmed.ncbi.nlm.nih.gov/17550489/). doi:10.1111/j.1479-828X.2007.00723.x. rct; n = 60 couples. Menevit for 3 months before IVF-ICSI: viable pregnancy 38.5% vs 16% per transferred embryo; embryo quality unchanged.
- **[verhaeghe2020]** Verhaeghe F, Di Pizio P, Bichara C, et al. (2020). Cannabis consumption might exert deleterious effects on sperm nuclear quality in infertile men. *Reprod Biomed Online*. PMID [32001159](https://pubmed.ncbi.nlm.nih.gov/32001159/). doi:10.1016/j.rbmo.2019.11.002. cross-sectional; n = 54 infertile men. Regular cannabis users had more sperm DNA fragmentation and aneuploidy than non-users (exploratory).
- **[wang2012]** Wang YJ, Zhang RQ, Lin YJ, et al. (2012). Relationship between varicocele and sperm DNA damage and the effect of varicocele repair: a meta-analysis. *Reprod Biomed Online*. PMID [22809864](https://pubmed.ncbi.nlm.nih.gov/22809864/). doi:10.1016/j.rbmo.2012.05.002. meta-analysis; n = 12 studies. Men with varicocele had 9.8 points more sperm DNA damage than controls; varicocelectomy lowered it by 3.4 points.
- **[williams2020]** Williams EA, Parker M, Robinson A, et al. (2020). A randomized placebo-controlled trial to investigate the effect of lactolycopene on semen quality in healthy males. *Eur J Nutr*. PMID [31591650](https://pubmed.ncbi.nlm.nih.gov/31591650/). doi:10.1007/s00394-019-02091-5. rct; n = 60 men. 14 mg/day lactolycopene for 12 weeks improved fast progressive motility and morphology; the primary endpoint was not significant.
- **[wise2011]** Wise LA, Cramer DW, Hornstein MD, et al. (2011). Physical activity and semen quality among men attending an infertility clinic. *Fertil Steril*. PMID [21122845](https://pubmed.ncbi.nlm.nih.gov/21122845/). doi:10.1016/j.fertnstert.2010.11.006. cohort; n = 2261 men. Regular exercise overall was unrelated to semen quality, but cycling >=5 h/week was linked to low concentration (OR 1.92) and low total motile count.
- **[wyrobek2006]** Wyrobek AJ, Eskenazi B, Young S, et al. (2006). Advancing age has differential effects on DNA damage, chromatin integrity, gene mutations, and aneuploidies in sperm. *Proc Natl Acad Sci U S A*. PMID [16766665](https://pubmed.ncbi.nlm.nih.gov/16766665/). doi:10.1073/pnas.0506468103. cross-sectional; n = 97 men aged 22-80. In healthy non-smokers, sperm DNA fragmentation index rose steadily with age, with no threshold.

Retraction notice cited in the text (not a source of evidence): Cytokine 2024;173:156453, PMID [38030527](https://pubmed.ncbi.nlm.nih.gov/38030527/), doi:10.1016/j.cyto.2023.156453.
