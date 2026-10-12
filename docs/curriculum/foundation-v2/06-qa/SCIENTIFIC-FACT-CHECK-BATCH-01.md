# CherryEdu Foundation V2 — Scientific Red-Team / Fact-Check Batch 01

**Date (Asia/Jakarta):** 2026-10-12  
**Branch:** `curriculum/foundation-v2`  
**Scope:** Targeted **high-risk claims** across M02 taxonomy, M03 fermentation/OTA, M05 water science, M06 sensory bias/CVA and M07 pricing/EUDR. This is **not** a 36-lesson independent line-by-line peer review.  
**Method:** Compare language in versioned manuscript with official taxonomy/regulatory/industry documents and peer-reviewed original articles available by audit date; assess study design and applicability. Apply inline revisions to concrete shortcomings. Track unresolved issues fail-closed.

## 1 — What has ACTUALLY been verified

| ID | Claim and source(s) reviewed | Evidence scope | Audit decision |
|---|---|---|---|
| FC01 | SCA published standards: SCA-102 *Sample Preparation and Tasting Mechanics*, SCA-103 *Descriptive*, SCA-104 *Affective*, SCA-105 *Extrinsic*; SCA-110 green grading and SCA-131 roast level still in development — [official SCA list](https://sca.coffee/research/coffee-standards) | Current official listing, **not full text of member/restricted standards** | **PASS, time-scoped**: M03.L06 and M06.L05 correctly distinguish status and function. Do not imply CherryEdu certification |
| FC02 | SCA CVA four assessment types: Physical, Descriptive, Affective, Extrinsic — [official SCA framework](https://sca.coffee/value-assessment) | Current official public framework, not a license to reuse forms | **PASS, time-scoped**; single aggregate “90 CVA” not created |
| FC03 | Kew Plants of the World Online: *Coffea dewevrei* accepted, *C. excelsa* synonym; note authority has changed over time — [accepted species](https://powo.science.kew.org/taxon/urn%3Alsid%3Aipni.org%3Anames%3A747092-1), [synonym](https://powo.science.kew.org/taxon/747110-1) | Taxonomic snapshot; market naming may differ | **PASS** M02.L02; keep citation date; avoid falsely labeling all Excelsa commerce as confirmed genetic identity |
| FC04 | Rune et al., *J Food Sci* **16 Sep 2026**, Colombian Kachalu single coffee, duo–trio and descriptive panels, varying Ca/Mg/bicarbonate — [original article](https://pmc.ncbi.nlm.nih.gov/articles/PMC13579507/), [publisher](https://ift.onlinelibrary.wiley.com/doi/10.1111/1750-3841.71434) | Hardness alone had little consistent sensory impact; bicarbonate greater impact under studied conditions, including high experimental extremes. Roast color/profile not quantitatively documented | **REVISED** M05.L03 to state actual material, design, boundary and not universal mineral recipe |
| FC05 | Carvalho et al., *Foods* **9 Apr 2026**, 180 **amateur specialty consumers** recruited via São Paulo cafe social media, one Brazilian Arabica experimental sample presented with 3 label conditions, within-subject — [full original paper](https://www.mdpi.com/2304-8158/15/8/1287) | Expectations and sensory/liking affected by processing-information label in THAT design; not evidence everyone is deceived | **REVISED** M06.L03 with participant recruitment, one-sample method and boundaries |
| FC06 | *Coffee fermentation* systematic review/meta-analysis, 22 included studies and 236 treatment-control comparisons; outcomes vary by time/oxygen/system — [Soares et al. 2025](https://www.sciencedirect.com/science/article/pii/S0924224425002870) | Pooled historic score improvements on particular included protocols, with heterogeneity/risk of bias. Not food safety validation | **PASS limited claim** M03.L04; still specialist safety review needed |
| FC07 | Codex **CXC 69-2009** *Code of Practice for the Prevention and Reduction of Ochratoxin A Contamination in Coffee* — [FAO/WHO Codex official codes index](https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/) | Product category-specific authoritative hygiene/risk prevention guidance; not laboratory proof of safety for any lot | **REVISED** M03.L05 to cite official Codex and distinguish prevention/traceability from OTA test or blanket pass/fail |
| FC08 | Fairtrade Living Income Reference Price set at **farm gate**; Fairtrade Minimum Price specified at **FOB** point of export — [Fairtrade official FAQ](https://reference-prices.fairtrade.net/faq) | Payment points and cost inclusions, not universal cash pass-through or farmer household outcome | **PASS** M07.L03 and related questions; no “FOB price = farmer revenue” claim |
| FC09 | EUDR application dates and special new-product scope — [European Commission overview](https://environment.ec.europa.eu/topics/forests/deforestation/regulation-deforestation-free-products_en), [EU Green Forum operator guidance](https://green-forum.ec.europa.eu/nature-and-biodiversity/deforestation-regulation-implementation/roles-and-responsibilities_en), [EU Delegated Regulation 2026/2102 Annex I](https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX%3A32026R2102) | Existing product categories: large/medium 30 Dec 2026, most micro/small 30 Jun 2027; EUTR-exception 30 Dec 2026. Newly added coffee extracts/essences/concentrates, code 2101 11 00, **30 Dec 2027** | **REVISED** M07.L04 to distinguish product scope from operator sizes, with table + official 2026 legal source. Must recheck at publication |
| FC10 | WCR Lexicon 2.0 **October 2017**, 110 sensory descriptors/references — [official WCR](https://worldcoffeeresearch.org/read-more/news/174-world-coffee-research-sensory-lexicon) | Descriptive science tool, NOT certification. WCR downloadable material is available for **personal-use copies**; commercial derivative/reproductions require rights review | **PASS** M06.L02 framing; keep artwork and full lexicon excluded from platform until rights clearance |

### Source hygiene clarification

1. `citation present` is not a correctness gate by itself; each material claim needs support that matches its **scope**, not just topical similarity.
2. Source publication dates differ from some web crawlers' displayed dates. Prefer **publisher/official publication metadata** in the actual study/regulation.
3. Normative standard vs academic article vs guidance vs commercial label are different classes of evidence. Do not elevate a manufacturer's recommendation to a legal standard.
4. A result that is null or not statistically significant in **one experiment** does not prove the mechanism never matters. Avoid “never”/“always” language from one sampled coffee.

## 2 — Actual manuscript fixes made in this batch

1. [M07.L04 — EU EUDR](../03-lessons/M07-L04-traceability-sustainability-klaim.md): product-code-specific application date **30 Dec 2027** for newly covered soluble coffee extracts (2101 11 00), plus large/medium vs small exceptions, reference to EU Reg 2026/2102.
2. [M05.L03 — Water chemistry](../03-lessons/M05-L03-air-mineral-dan-alkalinitas.md): identify test bean Colombian Kachalu, sensory methods, experimental extremes, uncharacterized roast details, restrict generalization.
3. [M06.L03 — Label expectations](../03-lessons/M06-L03-kalibrasi-bias-dan-ekspektasi.md): research participants were Brazilian amateur specialty buyers in São Paulo; one coffee under three labels, no population-wide claim.
4. [M03.L05 — Green coffee OTA](../03-lessons/M03-L05-pengeringan-penyimpanan-risiko.md): add FAO/WHO Codex CXC 69-2009; reinforce no single moisture percentage or smell confirms lot safety.

**Other checks did not warrant forced cosmetic rewrites**: taxonomy and SCA standards drafts already accorded with contemporary official sources. Do not inflate changed-file counts for appearance.

## 3 — Open risks from this factual pass

| Priority | Item | Why it is still OPEN | Minimum exit evidence |
|---|---|---|---|
| P0 | M03 microbiology, wet process, packaging, drying and actual OTA safety | Codex citation does not mean equipment SOP or food safety results are approved | Qualified food-safety/process expert line-by-line review + risk management sign-off |
| P0 | M07 current EUDR compliance statements | Product category, origin, operator status, consolidated EU law and later changes materially alter duties | Qualified EU trade/legal owner validates before live content and ongoing regulation watch |
| P0 | Producer income, worker rights, historical VOC/Preangerstelsel interpretation | Fairtrade/ICO/ILO general evidence does not substitute actual Indonesian actor and historian views | Farmer/cooperative/worker consultation and qualified historian review |
| P1 | M05 mineral/hardness, immersion yield estimates, meter/units and boiler risk | One-water paper, EC conversions, cup-based EY assumption cannot certify machinery safety or full extraction | Water chemist and brewing scientist review of methods/assumptions |
| P1 | M06 formal CVA, Q Grader scope, sensory exercises and images | Summary standards are not full licensed standard text, nor proof professional competency | Licensed current CVA trainer review + design/IP permissions |
| P1 | Novice learning effectiveness | No participant data; 36 lessons may still be overwhelming despite clear text | 5–8 initial cognitive interviews + distinct transfer questions; revise before larger usability evaluation |
| P1 | Assessment item validity | 76 authored questions can overreward caution slogans or cue-based guessing | Distractor review, difficulty/pilot, new holdout scenarios, evidence-based grading criteria |
| P1 | Media/reference reuse | Some linked PDFs/charts might have noncommercial or no-derivatives conditions | Explicit per-asset rights register and accessible original illustrations |

## 4 — Next batch targets (gates, not promises)

- **Batch 02:** Inspect history chronology and producer context alongside coffee quality standards; find hard factual contradictions and misattributed sources. More importantly, review whether 76 items measure mechanisms/transfer, not just choosing the answer with “tidak otomatis.”
- **Batch 03:** Detailed numeric audit of processing yield, water TDS/EY, economics and physical/roast data; cross-file citation validity and all relative links.
- **Human stage:** obtain domain sign-off and beginner pilot. No AI-generated desk review can impersonate these participants.

## 5 — Release decision

**Fact-check Batch 01: Completed a targeted, source-backed pass and made four substantive revisions.**   
**Full 36-lesson scientific sign-off: NOT ACHIEVED.**  
**External expert review: NOT PERFORMED.**  
**Production deploy: BLOCKED.**

This document must not be called `scientific validation complete`, `publish-ready` or `SCA-aligned certified course`.
