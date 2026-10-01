# Research data schema

Each research area writes two files:

- `research/<area>.md`: narrative notes, mechanisms, controversies, and what the evidence does and does not show. Written for a smart lay reader, but grounded in papers. Every claim gets a citation.
- `data/<area>.json`: structured factors the website renders. Must be valid JSON (UTF-8, no comments, no trailing commas).

## `data/<area>.json`

```json
{
  "area": "fertility-male",
  "title": "Sperm health & DNA fragmentation",
  "summary": "2-4 sentence overview of the area.",
  "factors": [ /* Factor objects */ ],
  "mechanisms": [ /* Mechanism objects (optional, shared pathways) */ ],
  "references": [ /* Reference objects */ ]
}
```

### Factor

```json
{
  "id": "broccoli-sprouts",                 // kebab-case, globally unique, prefix not needed
  "name": "Broccoli sprouts / seed powder",
  "kind": "food | exercise | lifestyle | supplement | environment | medical",
  "scopes": ["general", "sperm", "egg"],    // which categories this factor matters for
  "direction": "beneficial | harmful | mixed | neutral",
  "impact": {                                // 0-5 per scope; your honest estimate of real-world effect size x evidence
    "general": 4,
    "sperm": 1,
    "egg": 0
  },
  "evidence": "strong | moderate | limited | mechanistic",
  // strong = multiple RCTs/meta-analyses on clinical or validated biomarker outcomes
  // moderate = some RCTs or consistent large cohorts
  // limited = small trials, inconsistent findings
  // mechanistic = cell/animal/in-vitro only, human outcome data lacking
  "headline": "One sentence: what it does and how big the effect is.",
  "dose": {
    "effective": "Concrete amount/frequency shown in human studies, e.g. '~40-60 mg sulforaphane-equivalent (≈ 1/2 cup fresh sprouts) daily'",
    "studied_range": "Range used in trials",
    "too_much": "Upper limits / harm thresholds, if any (null if none known)",
    "timeframe": "How long until effect, e.g. 'one spermatogenic cycle ~74 days'",
    "notes": "Preparation, bioavailability, timing caveats"
  },
  "mechanism": "How it works biochemically (pathway names: Nrf2/KEAP1, NADPH oxidase, mitochondrial ETC leak, Fenton chemistry, lipid peroxidation, etc.).",
  "pathways": ["nrf2", "direct-scavenging", "mitochondrial", "inflammation-nfkb", "glycation-ages", "iron-fenton", "nox", "hormesis", "endocrine", "thermal", "dna-repair"],
  "interactions": "Saturation/redundancy/synergy/antagonism with other factors (e.g. multiple Nrf2 activators; antioxidant supplements blunting exercise adaptation). Use factor ids in [brackets] where relevant.",
  "caveats": "Bro-science to debunk, conflicting results, populations where it differs, risks.",
  "key_numbers": [                           // optional, quantitative comparison data for charts
    { "label": "Total polyphenols", "value": 260, "unit": "mg/100g", "source": "ref-id" }
  ],
  "refs": ["ref-id-1", "ref-id-2"]
}
```

### Mechanism (optional)

```json
{ "id": "nrf2", "name": "Nrf2 / KEAP1 pathway", "description": "...", "refs": ["..."] }
```

### Reference

```json
{
  "id": "egner2014",                        // firstauthorYEAR, add a/b if needed; unique within your file
  "authors": "Egner PA, Chen JG, Zarth AT, et al.",
  "year": 2014,
  "title": "Rapid and sustainable detoxication of airborne pollutants by broccoli sprout beverage...",
  "journal": "Cancer Prev Res (Phila)",
  "pmid": "24913818",
  "doi": "10.1158/1940-6207.CAPR-14-0103",
  "type": "meta-analysis | rct | cohort | case-control | cross-sectional | review | mechanistic | guideline | database",
  "n": "291 adults",                         // sample size if a human study, else null
  "finding": "One-sentence summary of what this paper actually found."
}
```

## Rules

1. **Only cite papers you have verified exist** by fetching their PubMed (pubmed.ncbi.nlm.nih.gov), PMC, DOI, or publisher page during this session. The PMID/DOI must match the title. Never cite from memory unverified. If you can't verify, leave it out.
2. Prefer: systematic reviews/meta-analyses (Cochrane especially), RCTs, large prospective cohorts, authoritative databases (Phenol-Explorer, USDA FoodData Central), mechanistic reviews in good journals. Avoid health websites, blogs, supplement vendor pages, and press releases.
3. Be honest about null results and the "antioxidant paradox". A factor with a big mechanistic story but null RCTs should be graded accordingly.
4. Doses must be concrete and practical (grams, servings, minutes, frequency) where the literature supports it.
5. In-vitro antioxidant capacity (ORAC, FRAP, TEAC) does not predict in-vivo effect; USDA withdrew its ORAC database in 2012. You may report polyphenol content (Phenol-Explorer) but must not imply that more mg = more benefit.
