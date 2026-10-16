# Green Coffee & Post-Harvest Specialist V3 — Academic and Product Audit

**Branch:** feat/green-coffee-postharvest-depth-v3 (isolated from pending Coffee Shop V3 PR #16). **Production:** no change authorised. **Status:** drafting, strict QA gates.

## Starting point
- Eight modules, 32 lessons (four per module) at nominal 13 minutes each; baseline lesson text ~347–423 words (excluding markdown), often insufficient to actually train receiving, mass balance, process choice, sampling and release decisions.
- Eight module decision activities, one inter-island green-bean landed-cost calculator, 16-question final exam, one conceptual visual per module. Approved `CuratedCourseOverview`/`CuratedLessonFrame`/`CuratedScenarioLab` and existing other specialty routes must stay visually unchanged.
- Current educational anchors heavily recycle SCA/WCR/CQI homepage links. **Missing** specific verifiable Indonesian grading standard, C. canephora clone management from WCR Indonesia, ICO moisture/export distinction, locally realistic rainfall/wet hulling and transport examples with openly labelled assumptions.
- Pre-existing repeated top-level section labels make 32 lessons feel templated. Retain course reader/navigation, but add teaching with concrete mechanisms, decision tables, worked checks, and *learner-made outputs* rather than repeating cases.
- Q Processor path already offers in-depth bioprocess; Green Coffee V3 should cover practical end-to-end competence to handle product, process risk, drying, grading, storage, contracts, and logistics, NOT pretend Q Processor accreditation.

## Desired learner outcome
Able to inspect, identify, price, document, hold/reprocess/release green coffee lots produced under Indonesian conditions, identify processing risks, and communicate buyer requirements using defensible measurements and reproducible calculations. Does **not** certify professional Q graders or lab technicians.

## Course architecture — preserve eight modules
Expand from 4 to **5 lessons per module, 40 total** and raise depths of 32 existing lessons. Keep old 32 IDs and first four positions, add `gc-mXX-l05` and move one module decision exercise from lesson 4 to lesson 5. Keep final exam link after `gc-m08-l05`, ensure all 9-path navigation gates unchanged. Review exam adequacy and improve to 24 items if necessary, not by adding trivia.

| Module | New fifth lesson | Practical output |
| --- | --- | --- |
| GC01 Green quality | Buyer intake, representative sampling and grading standards | Physical + cup + source-value intake sheet, traceable source |
| GC02 Farm & climate | Indonesian planting material and robustness under local conditions | Planting record plus uncertainty / disease risk plan |
| GC03 Cherry reception | Peak-delivery timing and receiving bottlenecks | Receiving log, mass balance, batch gate |
| GC04 Main processing | Choosing processing methods by equipment, water, climate & buyer | Risk/throughput/effluent matrix |
| GC05 Fermentation | Experimental design and stopping controls | Control and test fermentation design, safety escalation |
| GC06 Drying & moisture | Representative measurement, sensor checks and release | Moisture-aw sampling plan and release decision |
| GC07 Milling & grade | SNI 2907 and CVA distinction in actual buyer contracts | Traceable physical grade record with method/denominator |
| GC08 Logistics | Domestic delivery damage, claim and buyer acceptance | Conditional lot acceptance, cost/risk transfer record |

## Research checkpoints — primary anchors
- **BSN SNI 2907:2008**, status **Berlaku**, with **Konfirmasi 2026** listed in BSN official catalog; do not invent exact grading threshold not supported by accessible paid full standard: https://pesta.bsn.go.id/produk/detail/7404-sni29072008
- **SCA CVA** separates physical, descriptive, affective, extrinsic. Its physical assessment based on 2004 SCA green coffee grading; not a substitute for Indonesian SNI or arbitrary universal cutoff: https://sca.coffee/value-assessment/
- **SCA & SCAI cooperation** from May 2025 supports local CVA uptake for Indonesia. Does **not** grant certification to platform participants: https://sca.coffee/sca-news/sca-and-scai-collaboration-arfrn
- **ICO resolution 407/02**: exportable green coffee not <8% or >12.5% by ISO 6673 with specialty exceptions. This is **export quality program**, not a direct universal drying target or a guarantee of safety: https://ico.org/documents/iccres407e.pdf
- **ICO processing handling**: avoid rewetting, rain/dew, contaminated sacks and wet trucks; historical good-practice reference, not 2026 market pricing: https://www.ico.org/documents/ed1763r1e.pdf
- **WCR Indonesia**: canephora clone quality efforts and public grafting/nursery materials with SCOPI/ICCRI: https://worldcoffeeresearch.org/countries/indonesia ; clone descriptions: https://varieties.worldcoffeeresearch.org/robusta/varieties
- **CQI**: practical post-harvest processing education emphasises science, quality, food-safety and SOP. This course is not CQI Q Processing certification: https://www.coffeeinstitute.org/education/processing

## Risk and learning guardrails
1. Never present hypothetical freight, green price, labour, cherry price, machine quote or process yield as current field tariffs. Get dated written quotations / measured batch data for any real offer claim.
2. Sample method and moisture equipment must be named; do not derive final grade from a photograph or single sack. Explain detection limits and replicate measurements.
3. Keep distinctions: cherry, wet parchment, dry parchment, milled green, saleable green, mass loss; ratios require named basis and starting/ending moisture.
4. Avoid "ideal universal water activity/moisture/temperature" in the absence of method, buyer standard and safety assessment; ICO 8–12.5% export rule is not a recommended process setpoint.
5. Never suggest entering sealed fermenters with CO2, overriding guards, unsafe water disposal, and unverified microbiology claims.
6. For Indonesia contextualisation, distinguish Sumatra wet-hulled, rainy West Java raised beds, controlled washed/natural/honey, and inter-island shipping **without** claiming any geography determines taste.
7. Exercises must involve documents/artifacts (sample plan, lot ID, mass log, QC result, cost/release decision), with alternate scenarios.
8. No video for this release. Approved layout/reader untouched, diagrams only in existing native visual slot.
9. Recheck lesson IDs, module count, eight scenarios at module end, terminal final exam, safe exam JSON metadata/answer security, nine-path regression, source links, numerical units, viewport snapshots and no draft/placeholder labels.
10. Every claim sourced to clearly described authority; scientific/agronomic guidance may require instructor/lab validation before release. Technical CI PASS alone is insufficient for user review.

## Release gates
G0 inventory / pedagogy / source ledger; G1 new lessons; G2 enrich 32 old lessons, depth and duplication audit; G3 numerical and source review; G4 exam and scenario transfer tests; G5 mobile, old reader, nine-path regression; G6 human SME/owner sign-off. FAIL blocks promotion.
