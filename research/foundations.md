# Foundations: the biology of oxidative stress and what antioxidant supplements actually do

Area id: `foundations`. Companion data file: `data/foundations.json`.

Every reference below was checked against its PubMed record during this research session (PMIDs are listed at the end). Citations appear as `[id]`.

---

## Key takeaways

1. **Oxidants are not simply "bad".** Hydrogen peroxide at low nanomolar levels is a normal signalling molecule. Sies calls this "oxidative eustress", as opposed to "oxidative distress" at higher levels [sies2017, sies2020]. Removing oxidants indiscriminately can block useful signals, including the training response to exercise [ristow2009, gomezcabrera2008, merry2016].
2. **Your own enzymes do almost all of the antioxidant work.** Peroxiredoxins, glutathione peroxidases, catalase and SOD remove peroxides catalytically. Dietary small molecules mostly cannot compete on reaction speed, so mopping up radicals directly in the body is a minor mechanism [sies2015, forman2014, winterbourn2008, halliwell2024].
3. **High-dose antioxidant supplements have failed in large trials, and some cause harm.** Beta-carotene raised lung cancer in smokers by 18-28% [atbc1994, omenn1996]. Vitamin E raised prostate cancer by 17% [klein2011] and hemorrhagic stroke by 22% [schurks2010]. Pooled low-bias trials show a small rise in mortality with antioxidant supplements (RR 1.04) [bjelakovic2012]. The USPSTF advises against beta-carotene and vitamin E for prevention [uspstf2022].
4. **Food antioxidants probably help through signalling, not scavenging.** Most polyphenols reach only about 0-4 µmol/L in plasma [manach2005]. The likely routes are mild "electrophilic" activation of Nrf2 (sometimes called para-hormesis), effects on inflammatory signalling, and effects in the gut [forman2014, halliwell2008, delrio2013]. ORAC and "total antioxidant capacity" numbers do not predict any of this. USDA withdrew its ORAC database in 2012 [cunningham2013, lotito2006, sies2007].
5. **The broccoli question.** Human data do not show Nrf2 being "used up" by sulforaphane. In one trial, half of an effective dose did nothing measurable, while the full dose (urinary output about 25 µmol sulforaphane metabolites per day) worked. The effect held for 12 weeks without fading [chen2019, egner2014]. So at food doses we are usually below a ceiling, not at one. The ceiling does exist, though. Nrf2 responses are modest and capped by design [calabrese2021, kobayashi2004], and permanent full activation is harmful [wakabayashi2003, dezeeuw2013]. Practical answer: seed powder plus broccoli is unlikely to be wasteful at normal food doses, and broccoli brings many non-Nrf2 benefits anyway. Megadosing Nrf2 activators is not a good idea. See the section `nrf2_saturation`.

---

## 1. What ROS and RNS are, and where they come from

"Reactive oxygen species" (ROS) is an umbrella term for oxygen derivatives that are more reactive than O2 itself. The main ones are superoxide (O2•−), hydrogen peroxide (H2O2), the hydroxyl radical (•OH), and lipid peroxyl radicals. "Reactive nitrogen species" (RNS) include nitric oxide (•NO) and peroxynitrite (ONOO−), which forms when •NO meets superoxide [sies2020, pacher2007]. These species are very different from one another. H2O2 is fairly stable and selective, and it reacts mainly with particular cysteine thiols. The hydroxyl radical reacts with whatever is next to it, within nanometres [winterbourn2008]. Lumping them together as "free radicals" is a major source of confusion.

**Main sources in the body:**

- **Mitochondrial electron transport chain (ETC).** Electrons leak, mainly at complex I and also at complex III, and form superoxide. The leak is highest when mitochondria are *not* making ATP (high protonmotive force, reduced CoQ pool) or when NADH/NAD+ is high, as in nutrient excess. It is much lower in mitochondria that are actively making ATP. Murphy warns that the old "1-2% of oxygen becomes superoxide" figures came from isolated mitochondria and cannot be carried over to living tissue [murphy2009].
- **NADPH oxidases (NOX1-5, DUOX1/2).** These are the only enzymes whose *main job* is to make ROS. Examples include the immune burst of phagocytes (NOX2), signalling in blood vessels and other tissues, and thyroid hormone synthesis (DUOX) [bedard2007]. More than 40 enzymes make superoxide or H2O2 under the control of growth factors and cytokines [sies2020].
- **Xanthine oxidase.** This enzyme converts hypoxanthine to xanthine and then to uric acid, producing superoxide and H2O2. It matters in ischemia-reperfusion injury and is the target of allopurinol [pacher2006].
- **Iron and copper (Fenton chemistry).** Free ferrous iron reacts with H2O2 to make the hydroxyl radical or reactive iron-oxo species [winterbourn1995]. That is why the body binds iron so tightly. Iron-catalysed lipid peroxidation drives a regulated form of cell death called ferroptosis [dixon2012, dixon2014].
- **Inflammation.** Activated neutrophils and macrophages release large amounts of superoxide, H2O2 and hypochlorous acid at sites of inflammation. This damages the endothelium and nearby tissue [mittal2014].
- **Uncoupled nitric oxide synthase and peroxynitrite.** These link vascular oxidative stress to reduced •NO availability [pacher2007].

## 2. Why some ROS are needed: oxidative eustress versus distress

Sies' current framework splits oxidative stress into "eustress" and "distress" [sies2015, sies2017, sies2020]:

- At about **1-10 nM intracellular H2O2**, peroxide acts as a second messenger. It reversibly oxidises specific cysteine residues on phosphatases, kinases and transcription factors (**eustress**) [sies2017, holmstrom2014].
- Higher levels switch on adaptive programmes through "master switches" such as **Nrf2/KEAP1 and NF-κB**.
- Above roughly **100 nM**, damage to biomolecules becomes significant (**distress**) [sies2017].

Peroxiredoxins are central here. They are extremely abundant peroxidases, and they also act as *sensors*. They can be switched off locally to let H2O2 build up and carry a signal, and they can pass the oxidation on to target proteins [rhee2012]. This explains why "more antioxidant" is not automatically better: the system is a set of controlled signalling loops, not a tank that needs to be kept empty. Harman's original 1956 free-radical theory of aging [harman1956] has not held up well. In an exhaustive mouse programme, only 1 of 18 genetic manipulations of antioxidant enzymes (deleting Sod1) changed lifespan [perez2009].

## 3. Which damage matters

- **Lipid peroxidation.** Radicals attack polyunsaturated fatty acids in a chain reaction. This produces lipid hydroperoxides, F2-isoprostanes (from arachidonic acid), and reactive aldehydes such as malondialdehyde (MDA) and 4-hydroxynonenal (4-HNE). The aldehydes form adducts with proteins and DNA and also act as signals [ayala2014]. Membrane lipid peroxidation catalysed by iron is the executioner step in ferroptosis [dixon2012]. Oxidised phospholipids on LDL are linked to coronary disease [tsimikas2005].
- **Protein carbonylation.** This is irreversible oxidation of amino-acid side chains to carbonyls. It is relatively stable and is the most widely used marker of protein oxidation [dalledonne2003].
- **Oxidative DNA damage.** The best-known lesion is 8-oxo-7,8-dihydroguanine (8-oxoGua; as the nucleoside, 8-oxo-dG or 8-OHdG). It can mispair and cause G→T mutations and is repaired by base-excision repair. Measuring it is notoriously prone to artefacts (section 8) [cooke2003, collins2004].

## 4. Endogenous defences, and why they dominate

The body's main antioxidant system is enzymatic and catalytic:

- **Superoxide dismutases** (SOD1 in the cytosol, SOD2 in mitochondria, SOD3 outside cells) convert superoxide to H2O2.
- **Catalase, the glutathione peroxidases (GPx, selenium-dependent) and the peroxiredoxins (Prx1-6)** convert H2O2 and lipid hydroperoxides to water and alcohols [rhee2012].
- **Glutathione (GSH)** is the most abundant non-protein thiol, at millimolar levels inside cells. It is made from cysteine, glutamate and glycine, and the rate-limiting enzyme is glutamate-cysteine ligase (GCL). Cysteine supply is usually the limiting substrate [lu2013].
- **Thioredoxin/thioredoxin reductase and glutathione reductase** regenerate Prx and GSSG using NADPH.

**Why diet cannot compete quantitatively.** In the body, antioxidant action is mostly a matter of *kinetics*. Peroxiredoxins and GPx react with H2O2 so much faster than vitamin C or polyphenols that the small molecules cannot capture a meaningful share of peroxide inside cells [winterbourn2008]. Forman, Davies and Ursini conclude that these kinetic limits make radical scavenging in vivo "ineffective". Enzymatic two-electron reduction of hydroperoxides is the real defence [forman2014]. Sies states it plainly: "the major role in antioxidant defense is fulfilled by antioxidant enzymes, not by small-molecule antioxidant compounds" [sies2015]. Vitamin E (the chain-breaking antioxidant in membranes) and vitamin C are real exceptions. Both are essential, but once you are no longer deficient, their effect plateaus [halliwell2013, halliwell2024].

## 5. The Nrf2/KEAP1 pathway

**How it works.** Nrf2 (gene *NFE2L2*) is a transcription factor that controls a large battery of "cytoprotective" genes. They include NQO1, HO-1, the GCL subunits (glutathione synthesis), GSTs, thioredoxin reductase, and the enzymes that supply NADPH [yamamoto2018, kensler2007]. Under resting conditions KEAP1 binds Nrf2 and acts as an adaptor for a Cul3 E3 ubiquitin ligase. This keeps Nrf2's half-life **under 20 minutes** [kobayashi2004]. KEAP1 carries reactive cysteines that act as sensors. When electrophiles or oxidants modify those cysteines, Nrf2 is no longer degraded, builds up in the nucleus, and binds antioxidant response elements (AREs) [yamamoto2018]. Activation therefore works by *de-repression*, so it is fast and reversible.

**Activators.** These include isothiocyanates (sulforaphane from broccoli was identified as the main inducer in 1992 [zhang1992]), Michael acceptors such as curcumin, oxidised lipids, and H2O2 itself [dinkovakostova2008]. Physiological stresses activate it too, including exercise and caloric restriction [calabrese2021]. Dinkova-Kostova and Talalay call these "indirect antioxidants". They act catalytically through long-lived enzymes, are not used up, and are unlikely to act as pro-oxidants. "Direct" antioxidants, by contrast, are sacrificed when they work [dinkovakostova2008].

**Evidence that it matters.** Nrf2-knockout mice are much more sensitive to toxicants, inflammatory stress, cigarette smoke and carcinogens [kensler2007]. In humans, a common promoter SNP (−617 C/A) lowers *NRF2* expression and was linked to a higher risk of acute lung injury after trauma (OR 6.4 in a small nested case-control study) [marzec2007]. Drug proof of concept: one NRF2 activator has clinical approval and others are in development [cuadrado2019]. The approved one, dimethyl fumarate (BG-12), cut the annualised multiple sclerosis relapse rate by about 50% in its phase 3 trial [gold2012].

**Dose-response in humans.** In an airway study, sulforaphane from broccoli sprout homogenate raised nasal GSTM1, GSTP1, NQO1 and HO-1 mRNA in a dose-dependent way. The largest effect came at the top dose, equivalent to 200 g of sprouts [riedl2009]. Benzene detoxification in Qidong showed a threshold: the full dose worked and half or one-fifth did not [chen2019]. See section 6.

**The dark side: chronic hyperactivation.**
- *Keap1*-null mice, which have Nrf2 permanently on, die after birth from hyperkeratosis of the oesophagus and forestomach. Deleting Nrf2 as well rescues them [wakabayashi2003].
- Cancers hijack the pathway. Somatic *NRF2* mutations that block KEAP1 binding occur especially in smokers and in squamous cell carcinomas, and they predict poor prognosis [shibata2008]. Oncogenic KRAS, BRAF and MYC raise Nrf2 transcription to lower ROS and support tumour growth [denicola2011]. High Nrf2 makes cancer cells resistant to cisplatin, doxorubicin and etoposide [wang2008]. The usual summary is that Nrf2 is protective *before* cancer forms and can help cancer *after* it forms [cuadrado2019].
- A strong drug activator, bardoxolone methyl, was stopped in a phase 3 trial in diabetic stage 4 kidney disease. Heart-failure hospitalisation or death was 83% higher (HR 1.83) [dezeeuw2013]. Pharmacological Nrf2 activation is not automatically safe.

**Hormesis and xenohormesis.** Hormesis means a low dose of a stressor triggers a protective response, while a high dose harms [gems2008]. "Mitohormesis" is the idea that a small rise in mitochondrial ROS (for example during exercise) produces lasting adaptive defences, and that antioxidants can block it [ristow2014]. "Xenohormesis" proposes that animals sense plant stress molecules (polyphenols, isothiocyanates) as cues to prepare for adversity [howitz2008]. Calabrese argues that Nrf2 is a general mediator of hormetic responses, and that it is "quantitatively constrained": maximal responses are modest stimulations, not open-ended increases [calabrese2021]. Sulforaphane shows a biphasic pattern in cell culture. At 1-5 µM it *increased* proliferation and migration of several cell lines, including cancer cells, to 120-143% of control. At 10-40 µM it inhibited them [bao2014]. Cell concentrations do not translate directly to the body, but this shows that "more Nrf2 activation" is not a straight line to more benefit.

---

## 6. `nrf2_saturation`: "If Nrf2 is already activated by ground broccoli seeds, is the benefit of eating broccoli reduced?"

### Established facts (from human or well-controlled studies)

1. **Food doses are usually below the effective threshold, not above a ceiling.** In a randomised placebo-controlled dose trial (n = 170, 10 days), the full-strength broccoli sprout beverage produced a median urinary output of 24.6 µmol/day of sulforaphane metabolites. It raised benzene detoxification (urinary S-phenylmercapturic acid) by 63%. The half dose (10.3 µmol/day output) gave +11%, not significant, and the one-fifth dose (4.3 µmol/day) gave −6% [chen2019]. The response curve in this range is *threshold-like*, and the effective dose sits at its upper end. Adding more sulforaphane-yielding food to a moderate dose would push people *above* the threshold, not past a ceiling.
2. **Daily activation does not fade over weeks.** Over 12 weeks of daily sprout beverage (600 µmol glucoraphanin + 40 µmol sulforaphane), benzene conjugate excretion stayed 61% higher than placebo, and sulforaphane bioavailability did not decline [egner2014]. No published human study shows tachyphylaxis (loss of response with repeated dosing) for dietary Nrf2 activators.
3. **Nrf2 activation is transient after each dose.** Nrf2 protein turns over in under 20 minutes once the activator is gone [kobayashi2004]. Pure sulforaphane gives a bolus: high bioavailability (about 70%) that is excreted quickly. Glucoraphanin that needs gut-microbe conversion gives a low (about 5%) but slower, steadier exposure [egner2011]. Each meal therefore produces its own pulse. Two separate meals are two pulses, not one saturated signal.
4. **Delivery adds up.** Eating fresh sprouts (active myrosinase) together with a glucoraphanin powder recovered 65% of the dose as urinary sulforaphane metabolites, compared with 60% for sprouts alone and 24% for the powder alone. The combination also gave sulforaphane earlier [cramer2012]. Active plant myrosinase makes glucoraphanin 3-4 times more bioavailable [fahey2015].
5. **Biomarker dose-response is not always clean.** At 200 µmol sulforaphane per day, splitting the dose did not change HO-1, HDAC activity or p21 in blood cells [atwell2015]. The reasons could be a plateau, poor sensitivity of blood-cell markers, or both. The nasal-cell study did show dose-dependence up to 200 g of sprouts [riedl2009].
6. **People differ enormously.** Conversion of glucoraphanin to sulforaphane by gut bacteria ranged from about 1% to over 40% of the dose between individuals, though it was consistent within the same person [fahey2012]. In a 2-week trial, 400 µmol of glucoraphanin had no overall effect on aflatoxin-DNA adducts. Within the treated group, people who excreted more sulforaphane metabolites had fewer adducts [kensler2005].
7. **GST genotype changes how isothiocyanates are handled, though not always as expected.** GSTM1-null people had slightly higher plasma sulforaphane and faster urinary excretion [gasper2005]. In a 114-person feeding study, more GSTM1-null people were high excreters (62% versus 39%) [steck2007]. In a prospective Shanghai cohort, urinary isothiocyanates were linked to lower lung cancer risk overall (RR 0.65). The association was strongest in GSTM1-null (RR 0.36) and GSTM1/GSTT1 double-null men (RR 0.28) [london2000]. GST-null status may therefore *extend* exposure rather than weaken benefit, but results conflict across studies.
8. **Broccoli is more than sulforaphane.** Mature broccoli has far less glucoraphanin per gram than 3-day sprouts (10-100 times less) [fahey1997]. It also contains indole glucosinolates (which yield indole-3-carbinol and DIM), fibre and micronutrients. In cell culture, I3C or DIM combined with isothiocyanates induced ARE-driven genes additively or *synergistically* at low concentrations [saw2011]. Fahey et al. note that indole products may enhance tumour formation in some models [fahey1997], so "more crucifer compounds" is not automatically good either.

### Ceiling and harm boundaries (established)

- The Nrf2 response is built to be modest and self-limiting. KEAP1 resumes degrading Nrf2 within minutes [kobayashi2004], and hormetic maxima are small [calabrese2021].
- Permanent maximal activation is harmful (*Keap1*-null mice, *NRF2*-mutant tumours, bardoxolone heart failure) [wakabayashi2003, shibata2008, dezeeuw2013].

### Inference (reasonable, not directly tested)

- **No trial has tested broccoli sprout powder versus powder plus whole broccoli on any outcome.** A review of more than 50 sulforaphane clinical trials stresses that dose-to-effect relationships and validated pharmacodynamic biomarkers in humans are still poorly defined [yagishita2019]. The answer below is extrapolated from the facts above.
- Because effects at food doses rise with dose up to at least about 25 µmol/day of excreted sulforaphane [chen2019], a person who eats a modest amount of seed powder (a few mg of sulforaphane equivalent) and also eats broccoli is probably still on the rising part of the curve. The broccoli is unlikely to be wasted.
- If someone already takes a *large* sulforaphane dose (for example 100-200 µmol/day, as in some trials [atwell2015, riedl2009]), the *extra Nrf2* gain from a side of cooked broccoli is probably small. Cooked broccoli has inactive myrosinase and relies on 1-40% microbial conversion [fahey2012]. But the fibre, vitamins and non-Nrf2 phytochemicals still count.
- Spreading intake (for example sprouts or powder at one meal and broccoli at another) gives repeated transient pulses, which matches how the pathway works naturally [kobayashi2004, egner2011]. There is no evidence that continuous maximal activation is better. The hormesis literature and the bardoxolone result argue against chasing it [calabrese2021, dezeeuw2013].
- People with an active or past cancer should be aware that Nrf2 activation can protect established tumour cells [denicola2011, wang2008]. Food-level crucifer intake has not been shown to cause this in humans, so this is a caution about high-dose supplements, not about vegetables.

**Bottom line for the website:** "Stacking" sulforaphane sources at food doses is likely additive up to a point, not redundant, and broccoli brings benefits beyond Nrf2. There is no evidence of tolerance building up over 12 weeks of daily use. There is a real biological ceiling, and chronic *maximal* activation is undesirable, so high-dose concentrates offer diminishing and possibly negative returns.

---

## 7. Biomarkers: what can actually be measured in humans

The NIH-funded **Biomarkers of Oxidative Stress Study (BOSS)** exposed animals to a known oxidant (CCl4) and compared many candidate markers. Plasma and urinary **F2-isoprostanes** (by GC-MS or LC-MS/MS) and plasma MDA by GC-MS rose consistently. Urinary 8-OHdG and urinary MDA rose in most conditions. **TBARS, lipid hydroperoxides, protein carbonyls, DNA strand breaks and the other products did not change or changed inconsistently** [kadiiska2005]. A later BOSS report found that plasma antioxidants failed as biomarkers. Ascorbate, tocopherols, GSH/GSSG, cysteine/cystine and **total antioxidant capacity** did not reliably drop during endotoxin-induced oxidative stress [kadiiska2015].

| Marker | Status | Notes |
|---|---|---|
| F2-isoprostanes (plasma or urine, mass spectrometry) | **Best validated** for lipid peroxidation in vivo | Higher in smokers and falls after 2 weeks of quitting [morrow1995]. Tracks BMI, glucose, diabetes and smoking in 2,828 Framingham participants [keaney2003]. Considered extremely accurate when measured by MS [milne2005]. Immunoassays are less specific [tsikas2017]. |
| 8-oxo-dG / 8-OHdG | Useful in urine with chemical methods. DNA measurements are artefact-prone. | Background in healthy adults is about 3.9 ng/mg creatinine (chemical methods). Higher in smokers [graille2020]. The ESCODD effort found large inter-lab disagreement caused by oxidation during sample work-up. True background is about 0.3-4.2 lesions per 10⁶ guanines [collins2004]. |
| Protein carbonyls | Widely used. Fairly stable. | DNPH-based assays. Disease links are uncertain [dalledonne2003]. Did not respond in BOSS [kadiiska2005]. |
| MDA by TBARS | **Poor** | Non-specific (TBA reacts with many aldehydes). Pre-analytical artefacts [tsikas2017, kadiiska2005]. |
| Oxidised LDL / oxidised phospholipids | Associated with coronary disease | OxPL/apoB is linked to angiographic CAD, especially at age 60 or younger [tsimikas2005]. Measures one compartment only. |
| GSH/GSSG ratio | Informative if handled correctly | GSH oxidises during sample acidification, which greatly overestimates GSSG unless it is trapped with N-ethylmaleimide first [giustarini2013]. Not responsive in BOSS VI [kadiiska2015]. |
| Plasma "total antioxidant capacity" (ORAC, FRAP, TEAC) | **Poor proxy** | The rise after eating flavonoid-rich food is mostly explained by higher **uric acid**, not by flavonoids [lotito2006]. It is a chemically incoherent sum [sies2007]. |
| Food ORAC values | **Do not use** | USDA withdrew its ORAC database in 2012. Its reasons were that values had "no relevance" to in-vivo effects of bioactive compounds and were routinely misused in marketing [cunningham2013]. |

Practical upshot: when a product or study claims to "reduce oxidative stress", ask which marker and which assay. A TBARS or plasma TAC result alone is weak evidence. MS-measured F2-isoprostanes are the reference standard.

---

## 8. The antioxidant-supplement paradox: what the big trials found

| Trial | Population | Intervention | Main result |
|---|---|---|---|
| **ATBC** [atbc1994] | 29,133 male Finnish smokers | β-carotene 20 mg/d and/or α-tocopherol 50 mg/d, 5-8 y | β-carotene: **lung cancer +18%** (95% CI 3-36%), **total mortality +8%**. Vitamin E: no lung cancer benefit, more hemorrhagic-stroke deaths |
| **CARET** [omenn1996] | 18,314 smokers and asbestos workers | β-carotene 30 mg + retinol 25,000 IU | **Lung cancer RR 1.28**, all-cause death RR 1.17. Stopped 21 months early |
| **SELECT** [lippman2009, klein2011] | 35,533 men | Se 200 µg (selenomethionine), vitamin E 400 IU, both, or placebo | Vitamin E: **prostate cancer HR 1.17** (extended follow-up). Selenium: no benefit, non-significant diabetes signal |
| SELECT case-cohort [kristal2014] | 1,739 cases + 3,117-man random subcohort | as above | Selenium **+91% high-grade prostate cancer** in men with higher baseline selenium. Vitamin E +63% prostate cancer in low-selenium men |
| **HOPE** [hope2000] | 9,541 high-risk patients | Vitamin E 400 IU/d, 4.5 y | No effect on CV events (RR 1.05) |
| **HOPE-TOO** [lonn2005] | HOPE extension | Vitamin E 400 IU/d, ~7 y | No cancer or CV benefit. **Heart failure RR 1.13** |
| **Physicians' Health Study II** [sesso2008, gaziano2009] | 14,641 male doctors | Vitamin E 400 IU every other day, vitamin C 500 mg/d, 8 y | No effect on CVD, cancer or mortality. Vitamin E: **hemorrhagic stroke HR 1.74** |
| **Heart Protection Study** [hps2002] | 20,536 high-risk UK adults | E 600 mg + C 250 mg + β-carotene 20 mg, 5 y | Blood levels rose substantially. **Zero effect** on any vascular, cancer or mortality outcome |
| **Women's Health Study** [lee2005] | 39,876 women | Vitamin E 600 IU every other day, 10 y | No overall benefit. CV death −24% (secondary outcome) |
| **SU.VI.MAX** [hercberg2004] | 13,017 French adults | *Nutritional-dose* mix (C 120 mg, E 30 mg, β-carotene 6 mg, Se 100 µg, Zn 20 mg) | Overall null. Cancer RR 0.69 in men, null in women (men had lower baseline status) |
| **PHS II multivitamin** [gaziano2012, sesso2012] | 14,641 men | Standard daily multivitamin, 11 y | **Total cancer HR 0.92**. No CVD effect |

**Meta-analyses and guidelines:**
- Cochrane (Bjelakovic 2012): 78 RCTs, 296,707 people. In the 56 low-bias trials, antioxidant supplements **increased mortality (RR 1.04, 1.01-1.07)**. β-carotene RR 1.05 and vitamin E RR 1.03 were significant. Vitamin A (dose-related harm), vitamin C (RR 1.02) and selenium (RR 0.97) were not [bjelakovic2012].
- High-dose vitamin E (400 IU/d or more): **+39 deaths per 10,000** people, with risk rising above about 150 IU/d [miller2005].
- Vitamin E and stroke: **hemorrhagic +22%**, ischemic −10%. About 1 extra hemorrhagic stroke per 1,250 users [schurks2010].
- β-carotene at 20-30 mg/d raises lung cancer (RR 1.16) and stomach cancer (RR 1.34), with lung cancer risk higher in smokers and asbestos workers [druesnepecollo2010].
- USPSTF 2022: **recommends against β-carotene and vitamin E** for preventing CVD or cancer (grade D). Evidence is insufficient for multivitamins and other single nutrients [uspstf2022]. The evidence review found a small reduction in any cancer with multivitamins (OR 0.93) [oconnor2022].

### Why the paradox? Leading hypotheses

Antioxidants work in many preclinical models but clinical trials have mostly disappointed. Reviews attribute this to where and when oxidants actually cause harm, and to how the body's own defences respond [forman2021, halliwell2013].

1. **ROS signalling is needed.** Antioxidants can blunt adaptive signals. Vitamin C 1 g plus vitamin E 400 IU abolished the gain in insulin sensitivity from 4 weeks of exercise [ristow2009]. Vitamin C 1 g/d reduced training-induced mitochondrial biogenesis and endurance gains [gomezcabrera2008]. NAC blunted muscle repair signalling after eccentric exercise [michailidis2013]. A review concluded that no good evidence shows antioxidants *improve* training adaptation [merry2016].
2. **Antioxidants protect cancer cells too.** NAC and vitamin E accelerated lung tumour growth in mice by disrupting the ROS-p53 axis [sayin2014]. NAC and Trolox increased melanoma metastasis by raising glutathione in tumour cells [legal2015]. This is consistent with ATBC/CARET/SELECT and with Nrf2-high tumours [denicola2011].
3. **Dose and form.** In smoke-exposed ferrets, a pharmacological dose of β-carotene (equivalent to 30 mg/d in humans) lowered lung retinoic acid and caused squamous metaplasia. A physiological dose (about 6 mg/d) did not [liu2000]. The nutritional-dose SU.VI.MAX mix did not show harm [hercberg2004].
4. **The doses used may not even reduce oxidative damage.** In healthy people, 200-2000 IU vitamin E for 8 weeks did not change urinary isoprostanes [meagher2001]. In people with high cholesterol, F2-isoprostanes fell only at **1600 IU (−35%) and 3200 IU (−49%)**, with full effect taking 16 weeks [roberts2007]. The trials used 400 IU, probably too little to change oxidative status, yet still enough to cause bleeding effects.
5. **Wrong compartment, wrong species, and homeostasis.** Endogenous defences are tightly regulated and largely unresponsive to dietary antioxidants once someone is replete. Oxidative damage in key compartments rarely changes [halliwell2013]. A molecule in plasma cannot reach peroxide inside mitochondria. That is the rationale for mitochondria-targeted compounds such as MitoQ [rossman2018].
6. **Supplementation helps only when there is a deficit.** Benefits appear in people who start low: men with low baseline status in SU.VI.MAX [hercberg2004], low-glutathione individuals given NAC [paschalis2018], and the selenium U-curve [rayman2012]. People who are already replete get nothing or are harmed [kristal2014, stranges2007].

---

## 9. Polyphenol bioavailability: why "antioxidant" is the wrong frame

- After a single 50 mg (aglycone-equivalent) dose, total polyphenol metabolites in plasma reach **0-4 µmol/L**. Urinary recovery ranges from 0.3% to 43% of the dose. Gallic acid and isoflavones are absorbed best. Proanthocyanidins, galloylated tea catechins and anthocyanins are absorbed worst [manach2005].
- What circulates is mostly *metabolites*, not the compounds in the food. These include glucuronides, sulfates and methyl conjugates from phase II metabolism in the gut wall and liver. Large amounts reach the colon, where microbes break them down into small phenolic acids that are then absorbed [delrio2013, manach2004].
- Polyphenols are therefore a tiny fraction of plasma reducing capacity. Increases in plasma TAC after flavonoid-rich foods are explained by **uric acid**, not by the flavonoids [lotito2006].
- Halliwell: neither antioxidant nor pro-oxidant effects of polyphenols have been clearly shown in humans, and they are unlikely at achievable levels. Many cell-culture "antioxidant" results are artefacts of polyphenols oxidising in culture media and generating H2O2 [halliwell2008, halliwell2007].
- In intervention studies, polyphenol effects in vivo are real but "more limited" than in vitro. Reasons include the lack of validated biomarkers and of long-term studies, and in-vitro work that ignores bioavailability [williamson2005].
- Plausible mechanisms are mild electrophilic **Nrf2 activation** (para-hormesis) [forman2014], modulation of signalling including NF-κB and endothelial function [sies2005, morgan2011], and **local effects in the gut lumen**, where concentrations are much higher [halliwell2024, delrio2013].

Implication for the website: food polyphenol content (for example from Phenol-Explorer) can be shown, but more mg does not mean more benefit, and ORAC-style rankings should not be shown.

---

## 10. Cross-cutting factors that raise systemic oxidative stress

Kept brief. Another research area covers foods, exercise and lifestyle in depth.

- **Excess adiposity.** Fat mass correlated with systemic oxidative stress in humans and mice. Adipose tissue in obese mice produced more ROS through upregulated NADPH oxidase and had lower antioxidant enzyme levels. This disrupted adipokines (lower adiponectin, higher IL-6, MCP-1 and PAI-1). A NOX inhibitor improved diabetes and fatty liver in these mice [furukawa2004]. In Framingham, BMI was among the strongest correlates of urinary 8-epi-PGF2α [keaney2003].
- **Hyperglycemia and glucose swings.** Hyperglycemia makes mitochondria overproduce superoxide. This was proposed as the single process behind the four main pathways of diabetic vascular damage (polyol, AGE formation, PKC activation, hexosamine) [brownlee2001]. In type 2 diabetes, urinary 8-iso-PGF2α correlated with glycaemic variability (MAGE, r = 0.86) and with the postprandial glucose area, but not with HbA1c [monnier2006]. "Postprandial oxidative stress" from high-glucose and high-fat meals is a recognised entity [sies2005]. Heat-processed food adds preformed AGEs. Dry heat raises AGE content 10- to 100-fold over the uncooked state [uribarri2010].
- **Smoking.** Each puff delivers a large oxidant load. Smokers' plasma free F2-isoprostanes were more than twice those of non-smokers, and fell substantially after just 2 weeks of abstinence [morrow1995]. Smoking raises urinary 8-OHdG [graille2020] and is where β-carotene supplements turned harmful [atbc1994, omenn1996].
- **Chronic inflammation.** Neutrophil and macrophage NOX2 and myeloperoxidase produce oxidants that damage tissue [mittal2014]. ROS and NF-κB regulate each other in both directions [morgan2011].
- **Aging.** In older adults, red-cell glutathione was about half that of young adults, glutathione synthesis was lower, and F2-isoprostanes were higher. Glycine plus cysteine (as NAC) restored these values [sekhar2011]. Even so, broad manipulation of antioxidant enzymes rarely changes lifespan in mice [perez2009].

---

## 11. Supplement-by-supplement summary

- **Vitamin C.** Plasma saturates at about 1,000 mg/day orally, and cells saturate at about 100 mg/day. The steep part of the curve is 30-100 mg [levine1996]. Oral dosing is tightly controlled: 1.25 g orally peaked at about 135 µmol/L versus about 885 µmol/L intravenously [padayatty2004]. No CVD, cancer or mortality benefit [sesso2008, gaziano2009, bjelakovic2012]. Regular use (200 mg/day or more) shortens colds by about 8% in adults and does not reduce how often colds occur in the general population. Exception: people under extreme physical stress, where risk was halved [hemila2013]. About 1 g/day doubled kidney-stone risk in Swedish men (RR 1.95) [thomas2013]. It may blunt training adaptations [gomezcabrera2008].
- **Vitamin E.** No benefit for CVD or cancer in large trials. It raises prostate cancer, hemorrhagic stroke and heart failure, and slightly raises mortality at high doses [klein2011, schurks2010, lonn2005, miller2005]. It reduces F2-isoprostanes only at 1,600 IU or more [roberts2007]. USPSTF grade D [uspstf2022].
- **β-carotene.** Harmful in smokers and asbestos-exposed people at 20-30 mg/day [atbc1994, omenn1996, druesnepecollo2010]. USPSTF grade D [uspstf2022]. Food carotenoids are a different matter.
- **Selenium.** U-shaped. Benefit is likely only if status is low. In replete people it may raise type 2 diabetes risk (HR 1.55 in the NPC trial, 2.70 in the top baseline tertile) and high-grade prostate cancer [stranges2007, kristal2014, rayman2012]. No cancer prevention effect (Cochrane RR 1.01) [vinceti2018].
- **Multivitamin/mineral at nutritional doses.** Small reduction in total cancer in men (HR 0.92), no CVD effect [gaziano2012, sesso2012]. Insufficient evidence according to USPSTF [uspstf2022, oconnor2022]. This is a micronutrient-adequacy product, not an "antioxidant".
- **High-dose antioxidant cocktails.** Null to harmful [hps2002, bjelakovic2012]. They can blunt exercise benefits [ristow2009].
- **N-acetylcysteine (NAC).** Raises cysteine for glutathione synthesis. 1,200 mg/day for 30 days improved performance and oxidative markers *only* in people with low baseline glutathione [paschalis2018]. It blunts recovery signalling in muscle [michailidis2013] and promoted tumour progression and metastasis in mice [sayin2014, legal2015].
- **GlyNAC (glycine + NAC).** Corrected glutathione deficiency and lowered F2-isoprostanes in older adults [sekhar2011]. A 16-week placebo-controlled RCT in 24 older adults reported improvements in oxidative stress, mitochondrial function, insulin resistance and physical function [kumar2023]. Doses were large: glycine 1.33 mmol/kg/day plus cysteine 0.81 mmol/kg/day as NAC, roughly 7 g glycine and 9 g NAC per day for a 70 kg person [kumar2021]. Evidence comes from small trials, mostly from one group.
- **MitoQ (mitochondria-targeted ubiquinone).** 20 mg/day for 6 weeks improved flow-mediated dilation by 42% in 20 older adults [rossman2018]. Small, short-term study.
- **Isolated polyphenol capsules** (quercetin, resveratrol and similar). Poor bioavailability and no validated outcome benefit. Any benefit is probably signalling rather than scavenging [manach2005, williamson2005, halliwell2008].

---

## 12. What the evidence does and does not show

**Shows:**
- Oxidative damage is real and measurable (F2-isoprostanes) and rises with smoking, adiposity, hyperglycemia and inflammation [keaney2003, morrow1995, monnier2006].
- Large RCTs consistently show high-dose antioxidant vitamins do not prevent CVD or cancer, and some cause harm [bjelakovic2012, uspstf2022].
- Nrf2 activators from food can raise human detoxification capacity in a dose-dependent way without fading over 12 weeks [chen2019, egner2014].

**Does not show:**
- That lowering a blood oxidative-stress marker with any supplement improves hard outcomes.
- That combining several Nrf2 activators is synergistic *in humans*. Synergy has been shown only in cell culture [saw2011].
- That food-level Nrf2 activation promotes established cancers in humans. This is a mechanistic concern taken from tumour genetics and mouse studies [denicola2011, sayin2014].
- Which people are "deficient" enough to benefit from antioxidant supplements. Tailoring to measured status (for example glutathione or selenium) is promising but not validated [paschalis2018, rayman2012].

---

## References (all verified against PubMed in this session)

Each entry: id, citation, PMID.

- sies2020: Sies H, Jones DP. Nat Rev Mol Cell Biol 2020. PMID 32231263
- sies2017: Sies H. Redox Biol 2017. PMID 28110218
- sies2015: Sies H. Redox Biol 2015. PMID 25588755
- murphy2009: Murphy MP. Biochem J 2009. PMID 19061483
- holmstrom2014: Holmström KM, Finkel T. Nat Rev Mol Cell Biol 2014. PMID 24854789
- winterbourn2008: Winterbourn CC. Nat Chem Biol 2008. PMID 18421291
- rhee2012: Rhee SG et al. J Biol Chem 2012. PMID 22147704
- bedard2007: Bedard K, Krause KH. Physiol Rev 2007. PMID 17237347
- pacher2006: Pacher P et al. Pharmacol Rev 2006. PMID 16507884
- pacher2007: Pacher P, Beckman JS, Liaudet L. Physiol Rev 2007. PMID 17237348
- winterbourn1995: Winterbourn CC. Toxicol Lett 1995. PMID 8597169
- dixon2014: Dixon SJ, Stockwell BR. Nat Chem Biol 2014. PMID 24346035
- dixon2012: Dixon SJ et al. Cell 2012. PMID 22632970
- ayala2014: Ayala A et al. Oxid Med Cell Longev 2014. PMID 24999379
- cooke2003: Cooke MS et al. FASEB J 2003. PMID 12832285
- lu2013: Lu SC. Biochim Biophys Acta 2013. PMID 22995213
- halliwell2024: Halliwell B. Nat Rev Mol Cell Biol 2024. PMID 37714962
- forman2021: Forman HJ, Zhang H. Nat Rev Drug Discov 2021. PMID 34194012
- harman1956: Harman D. J Gerontol 1956. PMID 13332224
- perez2009: Pérez VI et al. Biochim Biophys Acta 2009. PMID 19524016
- kensler2007: Kensler TW et al. Annu Rev Pharmacol Toxicol 2007. PMID 16968214
- yamamoto2018: Yamamoto M et al. Physiol Rev 2018. PMID 29717933
- cuadrado2019: Cuadrado A et al. Nat Rev Drug Discov 2019. PMID 30610225
- kobayashi2004: Kobayashi A et al. Mol Cell Biol 2004. PMID 15282312
- dinkovakostova2008: Dinkova-Kostova AT, Talalay P. Mol Nutr Food Res 2008. PMID 18327872
- forman2014: Forman HJ, Davies KJ, Ursini F. Free Radic Biol Med 2014. PMID 23747930
- wakabayashi2003: Wakabayashi N et al. Nat Genet 2003. PMID 14517554
- shibata2008: Shibata T et al. PNAS 2008. PMID 18757741
- denicola2011: DeNicola GM et al. Nature 2011. PMID 21734707
- wang2008: Wang XJ et al. Carcinogenesis 2008. PMID 18413364
- dezeeuw2013: de Zeeuw D et al. N Engl J Med 2013. PMID 24206459
- gold2012: Gold R et al. N Engl J Med 2012. PMID 22992073
- marzec2007: Marzec JM et al. FASEB J 2007. PMID 17384144
- calabrese2021: Calabrese EJ, Kozumbo WJ. Pharmacol Res 2021. PMID 33667690
- bao2014: Bao Y et al. PLoS One 2014. PMID 25532034
- saw2011: Saw CL et al. Biopharm Drug Dispos 2011. PMID 21656528
- zhang1992: Zhang Y et al. PNAS 1992. PMID 1549603
- fahey1997: Fahey JW, Zhang Y, Talalay P. PNAS 1997. PMID 9294217
- egner2011: Egner PA et al. Cancer Prev Res 2011. PMID 21372038
- egner2014: Egner PA et al. Cancer Prev Res 2014. PMID 24913818
- chen2019: Chen JG et al. Am J Clin Nutr 2019. PMID 31268126
- kensler2005: Kensler TW et al. Cancer Epidemiol Biomarkers Prev 2005. PMID 16284385
- riedl2009: Riedl MA et al. Clin Immunol 2009. PMID 19028145
- atwell2015: Atwell LL et al. Mol Nutr Food Res 2015. PMID 25522265
- fahey2012: Fahey JW et al. Cancer Prev Res 2012. PMID 22318753
- fahey2015: Fahey JW et al. PLoS One 2015. PMID 26524341
- cramer2012: Cramer JM et al. Br J Nutr 2012. PMID 21910945
- gasper2005: Gasper AV et al. Am J Clin Nutr 2005. PMID 16332662
- london2000: London SJ et al. Lancet 2000. PMID 11085692
- steck2007: Steck SE et al. J Nutr 2007. PMID 17374652
- yagishita2019: Yagishita Y et al. Molecules 2019. PMID 31590459
- gems2008: Gems D, Partridge L. Cell Metab 2008. PMID 18316025
- howitz2008: Howitz KT, Sinclair DA. Cell 2008. PMID 18455976
- ristow2014: Ristow M. Nat Med 2014. PMID 24999941
- ristow2009: Ristow M et al. PNAS 2009. PMID 19433800
- gomezcabrera2008: Gomez-Cabrera MC et al. Am J Clin Nutr 2008. PMID 18175748
- merry2016: Merry TL, Ristow M. J Physiol 2016. PMID 26638792
- michailidis2013: Michailidis Y et al. Am J Clin Nutr 2013. PMID 23719546
- kadiiska2005: Kadiiska MB et al. Free Radic Biol Med 2005. PMID 15721980
- kadiiska2015: Kadiiska MB et al. Free Radic Biol Med 2015. PMID 25614459
- milne2005: Milne GL, Musiek ES, Morrow JD. Biomarkers 2005. PMID 16298907
- tsikas2017: Tsikas D. Anal Biochem 2017. PMID 27789233
- dalledonne2003: Dalle-Donne I et al. Clin Chim Acta 2003. PMID 12589963
- collins2004: Collins AR et al. Arch Biochem Biophys 2004. PMID 14989265
- graille2020: Graille M et al. Int J Mol Sci 2020. PMID 32466448
- giustarini2013: Giustarini D et al. Nat Protoc 2013. PMID 23928499
- tsimikas2005: Tsimikas S et al. N Engl J Med 2005. PMID 16000355
- sies2007: Sies H. J Nutr 2007. PMID 17513413
- lotito2006: Lotito SB, Frei B. Free Radic Biol Med 2006. PMID 17157175
- cunningham2013: Cunningham E. J Acad Nutr Diet 2013. PMID 23601894
- morrow1995: Morrow JD et al. N Engl J Med 1995. PMID 7700313
- keaney2003: Keaney JF Jr et al. Arterioscler Thromb Vasc Biol 2003. PMID 12615693
- atbc1994: ATBC Cancer Prevention Study Group. N Engl J Med 1994. PMID 8127329
- omenn1996: Omenn GS et al. N Engl J Med 1996. PMID 8602180
- lippman2009: Lippman SM et al. JAMA 2009. PMID 19066370
- klein2011: Klein EA et al. JAMA 2011. PMID 21990298
- kristal2014: Kristal AR et al. J Natl Cancer Inst 2014. PMID 24563519
- hope2000: HOPE Study Investigators. N Engl J Med 2000. PMID 10639540
- lonn2005: Lonn E et al. JAMA 2005. PMID 15769967
- sesso2008: Sesso HD et al. JAMA 2008. PMID 18997197
- gaziano2009: Gaziano JM et al. JAMA 2009. PMID 19066368
- hps2002: Heart Protection Study Collaborative Group. Lancet 2002. PMID 12114037
- lee2005: Lee IM et al. JAMA 2005. PMID 15998891
- bjelakovic2012: Bjelakovic G et al. Cochrane Database Syst Rev 2012. PMID 22419320
- miller2005: Miller ER 3rd et al. Ann Intern Med 2005. PMID 15537682
- schurks2010: Schürks M et al. BMJ 2010. PMID 21051774
- druesnepecollo2010: Druesne-Pecollo N et al. Int J Cancer 2010. PMID 19876916
- liu2000: Liu C et al. Carcinogenesis 2000. PMID 11133814
- sayin2014: Sayin VI et al. Sci Transl Med 2014. PMID 24477002
- legal2015: Le Gal K et al. Sci Transl Med 2015. PMID 26446958
- roberts2007: Roberts LJ 2nd et al. Free Radic Biol Med 2007. PMID 17936185
- meagher2001: Meagher EA et al. JAMA 2001. PMID 11231747
- uspstf2022: US Preventive Services Task Force. JAMA 2022. PMID 35727271
- oconnor2022: O'Connor EA et al. JAMA 2022. PMID 35727272
- hercberg2004: Hercberg S et al. Arch Intern Med 2004. PMID 15557412
- sesso2012: Sesso HD et al. JAMA 2012. PMID 23117775
- gaziano2012: Gaziano JM et al. JAMA 2012. PMID 23162860
- levine1996: Levine M et al. PNAS 1996. PMID 8623000
- padayatty2004: Padayatty SJ et al. Ann Intern Med 2004. PMID 15068981
- hemila2013: Hemilä H, Chalker E. Cochrane Database Syst Rev 2013. PMID 23440782
- thomas2013: Thomas LD et al. JAMA Intern Med 2013. PMID 23381591
- rayman2012: Rayman MP. Lancet 2012. PMID 22381456
- stranges2007: Stranges S et al. Ann Intern Med 2007. PMID 17620655
- vinceti2018: Vinceti M et al. Cochrane Database Syst Rev 2018. PMID 29376219
- paschalis2018: Paschalis V et al. Free Radic Biol Med 2018. PMID 29233792
- sekhar2011: Sekhar RV et al. Am J Clin Nutr 2011. PMID 21795440
- kumar2021: Kumar P et al. Clin Transl Med 2021. PMID 33783984
- kumar2023: Kumar P et al. J Gerontol A Biol Sci Med Sci 2023. PMID 35975308
- rossman2018: Rossman MJ et al. Hypertension 2018. PMID 29661838
- manach2004: Manach C et al. Am J Clin Nutr 2004. PMID 15113710
- manach2005: Manach C et al. Am J Clin Nutr 2005. PMID 15640486
- williamson2005: Williamson G, Manach C. Am J Clin Nutr 2005. PMID 15640487
- halliwell2007: Halliwell B. Cardiovasc Res 2007. PMID 17141749
- halliwell2008: Halliwell B. Arch Biochem Biophys 2008. PMID 18284912
- delrio2013: Del Rio D et al. Antioxid Redox Signal 2013. PMID 22794138
- halliwell2013: Halliwell B. Br J Clin Pharmacol 2013. PMID 22420826
- furukawa2004: Furukawa S et al. J Clin Invest 2004. PMID 15599400
- monnier2006: Monnier L et al. JAMA 2006. PMID 16609090
- brownlee2001: Brownlee M. Nature 2001. PMID 11742414
- sies2005: Sies H, Stahl W, Sevanian A. J Nutr 2005. PMID 15867266
- uribarri2010: Uribarri J et al. J Am Diet Assoc 2010. PMID 20497781
- morgan2011: Morgan MJ, Liu ZG. Cell Res 2011. PMID 21187859
- mittal2014: Mittal M et al. Antioxid Redox Signal 2014. PMID 23991888
