# Green Coffee & Post-Harvest Processing Specialist V3 — Independent Audit & Learning Blueprint
**Date:** 2026-10-16. **Branch:** `feat/green-coffee-specialist-depth-v3`. **Status:** G0 learning audit, IN PROGRESS. Not released; production untouched. Inherited from Coffee Shop V3 technical QA PASS `99c015a1d30414fa02ea01af482bdb44249a4342`.

## Goal
By completion, a learner (collector, processor, green-buyer, QC or roastery purchasing manager) can identify coffee types, understand farm/harvest-to-saleable-green transformations, plan and audit postharvest process decisions, prevent safety and contamination errors, calculate yield and delivered cost without mixing mass bases, and defend lot acceptance/hold/reprocess/reject decisions to Indonesian producers and buyers. **Do not** imply certification from SCA, SCAI, CQI, Q Grader or official regulatory bodies.

## G0 finding — source and curriculum inventory
- Existing GC01–GC08 sequence is coherent. Keep the eight modules, their order, current lesson IDs and approved `CuratedCourseOverview`, `CuratedLessonFrame`, `CuratedScenarioLab` and native MarkdownRenderer.
- Existing 32 lessons (four per module) are all only ~347–423 words, each allocated 13 minutes. Their repetitive macro-sections (what/why/SOP/Indonesia/example/decision/reading) are not sufficient to teach the underlying mechanisms independently.
- Only seven distinct reference URLs across entire path; not a single named Indonesian national standard, Kementan field manual or verified context-specific drying/transport reference in learner links. The user wants deep Indonesian localization and field-validatable data.
- Eight decision labs and 16 final-exam items (two per module); one green landed-cost calculator currently lives on GC07 lesson 4 and must continue to work.
- Need differentiate **agronomy and green/postharvest literacy** from the future more advanced **Q Processor** path. Green teaches reliable operations, mechanistic understanding, physical QA and use-of-evidence; Q Processor focuses mastery of specialized fermentation workflows, protocol design and processing specializations. Do not teach unsafe gas/pressure vessel procedures.
- Current lessons mention logistics and costs but do not supply a grounded quotation method, documented actual Indonesia shipment offer, or sample-to-consignment reference process. All non-verifiable illustrative amounts must be labelled as teaching examples; no invented vendor price.

## V3 teaching architecture: 8 modules × 5 = 40 lessons
Keep existing four lessons each, deepen where mechanisms thin; add fifth applied lesson per module. The fifth includes a deliberate field/audit artifact and a distinct transfer scenario. Move each existing module decision lab to its new final (5th) lesson, preserve access to module practice pages, keep last lesson ↦ final exam.

| Module | Existing four | Proposed lesson five | Learner artifact |
| --- | --- | --- | --- |
| GC01 | Physical/sensory/extrinsic, species/variety, contracts, roaster specification | Lot identity and chain-of-custody for Indonesian producer → collector → mill → buyer | One-page identity and sample handover record |
| GC02 | Elevation, soil, shade/water, seasonal weather | Harvest-risk calendar and farm observation, handling Arabica/Canephora/Liberica differences without fixed flavor stereotypes | A field observation protocol and harvest risk matrix |
| GC03 | Cherry ripeness, weighing, floating, SOP | Receipt, sorting, yield ledger and capacity overload at receiving | Weighbridge/lot ledger and clear accept/hold/reject criteria |
| GC04 | Washed, natural, honey, wet-hulled | Process selection matrix with wastewater, environmental and cost/risk sensitivities | Process flow and evidence-based selection |
| GC05 | Fermentation mechanisms, microbes, CO2 safety, experimental design | Batch log with control/control sample and explicit stop/safety boundaries | Safe observational QA experiment, no pressurized sealed-vessel instruction |
| GC06 | Moisture vs aw, drying curves, rewetting, warehouse handover | Sampling heterogeneity and instrument measurement uncertainty in tropical rainy weather | Drying log, sample plan, hold/recheck decision |
| GC07 | Hulling, CVA Physical, sampling, saleable cost | Crosswalk between **SNI 2907:2008 (confirmed 2026)**, SCA physical/CVA and written buyer specs | Physical assessment results separated by standard and contract |
| GC08 | Storage, island shipping, buyer spec, capstone | Inter-island delivery and claims: storage/transport guidance, incoterms context, weight change, claims documentation | Recorded buyer handover, freight quotation, incident/claim protocol |

**Future item bank:** consider 24 items (three per module) with defensible distractors, application and calculator parity; do not change count until bank, public metadata and security/reader UI are updated together. Need audit each answer key, no 'correct answer longest' signal. No unsupported certification implication.

## Primary sources, classifications and limits (verify before copying numbers)
1. **SCA CVA Framework**: four assessments physical, descriptive, affective, extrinsic; not equivalent to one cupping grade. https://sca.coffee/value-assessment/
2. **SCA–SCAI collaboration 2025:** CVA cooperation for Indonesian coffee assessment/education. This does NOT make CherryEdu an SCA accredited certification. https://sca.coffee/sca-news/sca-and-scai-collaboration-arfrn
3. **BSN product catalog SNI 2907:2008**, 'Biji kopi' standard listed as **Berlaku** with confirmation 2026. Be explicit: full normative table is sold and has NOT been read as licensed source; do not invent defect counts or numeric limits attributed to SNI. https://pesta.bsn.go.id/produk/detail/7404-sni29072008
4. **BSN SNI ISO 8455:2011 adoption 2025**, 'Biji kopi mentah — Pedoman untuk penyimpanan dan transportasi'; official catalog provides its title/status, NOT full normative methods free. https://pesta.bsn.go.id/produk/detail/845520112025-sniiso8455%3A2011ditetapkanolehbsntahun2025
5. **Kementan Dirjen Perkebunan**, Pedoman Teknis Penanganan Pascapanen Kopi (2012), field manual, date labels required because older. https://repository.pertanian.go.id/handle/123456789/20333
6. **Kementan**, Panen dan Pengolahan Kopi (2018), older but national field context. https://repository.pertanian.go.id/handle/123456789/6232
7. **World Coffee Research varieties** and technical guides; geographic/species coverage must be checked before extrapolating to Indonesian Liberica or local landraces. https://worldcoffeeresearch.org/resources/technical-guides-and-manuals
8. **Peer-reviewed 2026 West Java processing study** (Bogor, Garut, Bandung), mass-balance based on farmer/processor **interviews**, NOT physical measurement across all of Indonesia. Useful to teach how to critically evaluate yield evidence; absolutely no universal percentages from it. https://link.springer.com/article/10.1007/s43621-026-03495-0
9. **FAO storage and green transport**: general risk of rewetting, condensation, mold and storage; technical older guidance, not replacement for SNI or a destination buyer specification. https://www.fao.org/4/x6939e/X6939e05.htm
10. **ICO statistics** and customs/trade government sources for macro context, separately from lot-specific real vendor or freight rates. https://ico.org/what-we-do/world-coffee-statistics-database/

## Required localization cases (not generic 'coffee origin story')
- Gayo/West Sumatra natural wet weather vs drying control (no claim that regions share one taste profile);
- Lampung robusta/canephora smallholder grading and cherries at mixed ripeness;
- West Java/Priangan raised bed and moisture heterogeneity during wet season (avoid claiming every smallholder has a lab);
- Sumatra wet-hulled workflow contrasted against fully dried parchment handling;
- Arabica/Canephora/Liberica/Excelsa nomenclature, correct species taxonomic caveats, labeling and contract meaning;
- Storage and inter-island cargo from producer area to Jakarta or East Java without invented current freight; require signed quotation with assumptions, packing, route, payment and insurance;
- Broken seal, damaged sack, wet cargo, underweight delivery: hold/test/notify according to contract instead of concealing defect;
- Indonesian SNI vs SCA assessment vs a specific buyer's contract: never collapse three standards into one pass/fail claim.

## Strict gates
G0 outline, baseline and sourced direction → G1 manuscript depth/field SOP (at least 450 words per lesson, practical worked example and misconception handling; no copy-paste formula headings) → G2 source-to-claim math, species and safety validation → G3 exercises/calculators plus visual aids relevant to instruction → G4 balanced case-based final exam + progression → G5 nine-path/browser/mobile/QA regression → G6 SME/owner academic & visual approval. Failure halts production promotion. Feature flags remain separate. No preview test or CI claims for the new path until actually rerun on exact commit.

## QA checkpoint — independent continuation, 16 October 2026

**Scope:** integrated candidate PR #17, stacked on Coffee Shop V3 PR #16. PR #18 is a parallel Green Coffee V3 candidate branched from the earlier three-specialty base; **do not merge both variants** without an explicit reconciled content/assessment diff. This checkpoint is not a production release approval.

- Inventory checked independently: eight sequential modules with five lessons each (40 total); lesson identifiers and existing reader components preserved.
- Original 32 lessons had the exact same six high-level section headings, producing an obviously templated reading experience. Remediated five explanatory/action headings in all 32 original lessons (**160 editorial headings**) to topic-specific copy; functional bibliography/task section names are allowed to repeat.
- Independent depth sampling: each of the 40 lessons remains at least 450 whitespace-delimited words; the eight new applied lessons retain quantitative or field-decision exercises. Depth by word count alone is **not** expert validation.
- Green final exam: 24 items, three per module; answer-key indices A/B/C/D balanced 6/6/6/6. Answer with greatest character length in 5/24 questions (not a systematic longest-option giveaway). These checks do not replace item-by-item subject expert answer validation.
- Reproduced failed prior CI on Green PR #17: nine-path Playwright expected 16 Green exam questions but the actual V3 bank had 24. Corrected the stale expected count. A new exact-commit end-to-end run is required before marking the technical gate PASS.
- Official source spot-check: BSN public catalog lists SNI 2907:2008 as Berlaku, with the 2026 confirmation listing, and SCA's current CVA has four distinct assessments (physical, descriptive, affective, extrinsic). This metadata is not a licence to invent limits from paid standards. No new numerical limits were introduced by the editorial correction.
- No learner UI redesign, component swap, new video dependency, authorization/entitlement change, main merge or production deployment was performed.

**Still blocked before production:** completed GitHub Actions at final branch SHA; visual inspection of desktop and mobile learner readers (including last lesson to exam); independent specialist review of the full manuscript, quantitative keys and field practices; local supplier/shipping evidence where real rates are claimed; owner academic and product approval. Preserve stop-on-failure policy.
