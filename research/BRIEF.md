# Research brief for deep-dive agents

You are adding a topic to **Redox Compass**, an evidence-graded website about oxidative stress, with dedicated views for sperm DNA fragmentation and egg (oocyte) quality. The repo is `C:\GIT\redox`. **Do not edit any existing file in the repo.** You write exactly two outputs (plus a third for the testing agent), named in your task.

## Read first
1. `research/SCHEMA.md`: the Factor and Reference JSON shapes and citation rules. Follow them exactly, including the `debate` field.
2. Skim the factor ids and headlines in `data/*.json` and `data/aliases.json` (aliases map old ids to canonical ones), so you don't duplicate existing coverage. Only replace an existing factor if your task explicitly allows that id.

## Evidence rules (non-negotiable)
- Sources are peer-reviewed papers (PubMed-indexed journals, Cochrane), clinical guidelines from recognized bodies (ACOG, ASRM, ESHRE, AUA/EAU, HFEA, EFSA, NIH ODS fact sheets that cite papers, WHO, USPSTF), and authoritative databases. No health websites, blogs, podcasts, vendor pages, or press releases as sources.
- **Verify every reference** by fetching its PubMed record during this session: `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=PMID&retmode=json` (title, year, DOI, pubtype) and `efetch.fcgi?db=pubmed&id=PMID&rettype=abstract&retmode=text` (abstract). Title and year must match. Guidelines without a PMID need a DOI or an official URL, plus `"type": "guideline"`.
- **Check retraction status** (pubtype "Retracted Publication") and never cite retracted work except to flag it.
- **Look for debate.** For each factor and each major claim, actively search for papers that disagree: opposing meta-analyses, critical commentaries, letters to the editor, re-analyses, failed replications, and funding or conflict-of-interest concerns. Fill each factor's `debate` field with both sides cited. The markdown must have a section `## Where the evidence is contested`.
- Grade honestly. Mechanistic or animal-only findings get `"evidence": "mechanistic"` and low impact. Null trials beat positive mechanisms.
- PubMed rate limit: about 3 requests per second shared across many agents. Batch ids (esummary accepts comma-separated lists), pause about 0.4 s between calls, and retry with backoff on HTTP 429.

## Patch output format
Write your patch to `C:\Users\junkc\AppData\Local\Temp\claude\C--GIT\75460c61-ed8d-40d5-8646-8e783f8519d6\scratchpad\patch-<name>.json`:

```json
{
  "references": [ /* every reference cited anywhere in your md or factors; ids MUST start with your prefix */ ],
  "mechanisms": [ /* optional Mechanism objects, added to the foundations area */ ],
  "foundations": [], "diet": [], "lifestyle": [], "sperm": [], "egg": []
}
```

- Put each factor in the area that fits: foods and diet patterns → `diet`; exercise, sleep, environment, habits, medications → `lifestyle`; supplements and biology → `foundations`; sperm-specific entries → `sperm` (ids ending `-sperm`); egg-specific entries → `egg` (ids ending `-egg`).
- A factor that exists across areas (e.g. melatonin is already an egg factor whose canonical id is `melatonin`) can get a general-health entry by using **the same canonical id** in another area. The build merges entries with the same id onto one page. Only do this when the exposure is identical.
- `pathways` ids must come from: nrf2, direct-scavenging, mitochondrial, inflammation-nfkb, glycation-ages, iron-fenton, nox, hormesis, endocrine, thermal, dna-repair, microbiome, endothelial, glutathione, lipid-peroxidation, redox-signaling.
- Cross-reference other factors in text as `[factor-id]`, using only canonical ids that exist in `data/*.json` (after aliases) or that you define.
- `dose` must be concrete where the literature allows (mg, IU, minutes, frequency, thresholds, lab cut-offs).

## Markdown output
`C:\GIT\redox\research\deep-<name>.md`, starting with a `# Title` line. Write for a smart lay reader in plain, direct English. Cite as `[refid]` or `[refid1, refid2]` using ids that exist in your patch's references. Include: the core science; evidence by question or outcome (tables welcome); sperm and egg relevance where it exists; `## Where the evidence is contested`; a practical bottom line; what we don't know; and a reference list.

## Before you finish
- `python -c "import json;json.load(open(r'<patch>',encoding='utf-8'))"` must pass.
- Every `[refid]` in your md and every `refs`/`source` id in your factors must exist in your patch's references.
- Use the Write tool for big files (Bash commands over about 8 KB are silently truncated). Don't use PowerShell Get-Content/Set-Content (it corrupts UTF-8). Name scratchpad helper scripts with your prefix.
- Report back briefly: reference count, factor ids added or replaced, the key findings, and the main debates you found.
