# Q Processor Specialization V3 — Learning Architecture and Source Audit

**Checkpoint:** 16 October 2026 (Asia/Jakarta). **Scope:** Q Processor specialty in CherryEdu. **Branch:** `feat/q-processor-specialist-depth-v3` stacked on Green Coffee V3 PR #17, itself stacked on Coffee Shop V3 PR #16. **Release:** REVIEW ONLY. `main`, student payments, completion, historic enrollments and production remain unchanged.

## Why this path is distinct
Green Coffee & Post-Harvest prepares a generalist to inspect input, choose basic post-harvest routes, run physical sampling, and buy or sell green lots. Q Processor trains a process-specialization mindset: form hypotheses, control confounders, interpret microbial/chemical data conservatively, design safe observational comparisons, understand wet-mill bottlenecks, assess mechanisms and food/worker safety, maintain audit-ready batch records, and defend release decisions. It is **not** a CQI/SCA-accredited course, license, or a claim that a student completed a field practicum.

CQI's officially named Processing Professional program requires a field-based six-day course in a producing country during harvest and both theory and practical evaluations. An online theory assessment from CherryEdu cannot substitute for the supervised hands-on requirements. Naming and learner-facing messaging must never imply CQI endorsement.

## Baseline audit
Existing eight modules QP01–QP08, 24 original lessons at ~306–356 words and 10 minutes each, eight scenario labs at lesson three, a yield calculator on QP07 lesson three, and sixteen final-exam questions. UI is the approved `CuratedCourseOverview`, `CuratedLessonFrame`, `CuratedScenarioLab`, and `CuratedPracticeFrame`. All 24 original manuscripts repeat six macro-headings and spend too little time on causality, field evidence, Indonesian cases and limitations. The previous 16-item exam had only two questions per module.

## V3 outcome and order
Maintain the same eight modules, all 24 existing lesson IDs and the same approved visual/reader components. Add two applied lessons per module, making **40 lessons** (five per module), ~936 instructional minutes (roughly 16 hours).

| Module | Lessons and focus |
| --- | --- |
| QP01: System design | Existing three, plus lot-level mass balance and rainy-season capacity/risk planning |
| QP02: Microbiology | Existing three, plus interpreting series of pH/temperature and controlled-experiment design |
| QP03: Washed wet mill | Existing three, plus process checkpoint audit and water/wastewater traceability |
| QP04: Natural, honey, wet-hulled | Existing three, plus choosing by actual facilities and rainy-weather deviation response |
| QP05: Innovation and danger | Existing three, plus auditing extraordinary process claims and professional no-go gate |
| QP06: Drying and aw | Existing three, plus distributed sampling and dryer-to-warehouse handoff |
| QP07: QC and economics | Existing three, plus saleable yield/cost sensitivity and national/market standards crosswalk |
| QP08: Audits and ethics | Existing three, plus CAPA investigation and end-to-end processor capstone |

Instructional cases are situated in Indonesia without asserting unverified current market prices, vendor freight, proprietary costs or nationwide uniform processing yield. All numerical values in lessons are labelled simulation/illustration unless referenced as official facts. Examples include West Java rainy beds and receiving, Sumatra wet-hulling, Lampung buyer documentation, domestic inter-island handoff, mixed-origin contracts, and small-scale rural wastewater controls. No unstated wet-hulling or fermentation setpoints may be passed off as universal best practice.

Each module ends with a practice/decision lab on its fifth lesson, and QP08 lesson five continues to **the Q Processor final exam**. Preserve the existing QP07 lesson-three yield calculator with no change in placement. New exam bank has 24 application questions, three per module, balanced A/B/C/D keys, graded server-side. Exact keyed versions and route metadata must match.

## Source provenance and limitations
1. [Coffee Quality Institute — official processing education](https://www.coffeeinstitute.org/education/processing): course progression, purpose, and the *field practicum and theory+practical exam requirements*. Product boundary, not permission to use a CQI qualification.
2. [Kementan / Directorate General of Plantations — Pedoman Teknis Penanganan Pascapanen Kopi, 2012](https://repository.pertanian.go.id/handle/123456789/20333): historical Indonesian field guidance. **Do not present its 2012 publication as a verified current legal requirement.** Check current obligations through the appropriate agencies and location.
3. [Ferreira et al., Food Research International 169 (2023) 112793](https://doi.org/10.1016/j.foodres.2023.112793): peer-reviewed review on multivariable coffee fermentation, starter effects, oxygen and protocol reproducibility. There is no universal sensory outcome or one-size-fits-all fermentation recipe established by the review.
4. [Hurtado Cortés et al., Journal of Food Science and Technology (2024)](https://link.springer.com/article/10.1007/s13197-024-06054-5): equipment and fermentation technology review, not an Indonesian safety certification or precise operational setpoint.
5. [SCA Coffee Value Assessment](https://sca.coffee/value-assessment/): physical, descriptive, affective and extrinsic assessments are distinct. A cupping result does not substitute for physical QC or buyer contract acceptance.
6. [BSN SNI 2907:2008 — official public catalog](https://pesta.bsn.go.id/produk/detail/7404-sni29072008): catalog lists the standard as **Berlaku**, with a 2026 confirmation listing. The paid normative standard text was **not obtained/reviewed as a licensed source**; no defect thresholds or methods are invented and attributed to it.
7. [FAO / Codex Code of Practice collection](https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/): CXC 69-2009 for prevention/reduction of ochratoxin A in coffee. Never imply all safety risk disappears after re-drying or averaging batch moisture.
8. [FAO Ochratoxin in Coffee guide](https://www.fao.org/4/x6939e/X6939e04.htm): historical risk context for drying, warehouse and rewetting, not a current Indonesian moisture requirement for all contracts.
9. [Wet coffee-processing effluent study, Ecohydrology & Hydrobiology (2018)](https://www.sciencedirect.com/science/article/pii/S1642359317300848): evidence wastewater organic load can be a hazard. The measured limits from another country's case cannot be declared Indonesian legal discharge thresholds.

## Quality gates and stop rules
- **G0 — Inventory:** complete eight-module curriculum baseline, existing ID/route/visual dependencies and source ledger.
- **G1 — Teaching depth:** 40 coherent lessons, each at least 450 words, topic-specific heading structure, conceptual mechanism before examples, worked calculations with named material bases, explicit misconceptions, applied learner work, source links; no artificial padding.
- **G2 — Scientific and safety:** do not give improvisable pressure, gas or unsafe culture instructions; treat monitoring and lab claims conservatively. No invented numerical legal or national coffee thresholds.
- **G3 — Exams:** 24 questions, three per module, numerical values independently checked, answers plausible and distribution balanced, no leaked answer keys to public endpoint, examination directly after last lesson.
- **G4 — Learning experience:** preserve existing reader, instructional visuals, interactive scenario cards, yield calculator and mobile navigation; do not redesign or insert student-facing internal labels.
- **G5 — Technical:** independent validator, cross-specialty regression, TypeScript, production build, full nine-path browser progressions/exams, closed-specialty gate, mobile screenshots, exact-SHA GitHub Actions proof.
- **G6 — Release:** specialist academic review, owner visual learning-experience review, safety and legal verification for site-specific requirements, final production approval. **CI success alone never authorizes promotion to main or production.**

## Outstanding before release
Field-lab calibrations with qualified Indonesian processing practitioners and laboratory equipment, actual local facility parameters for wet mills and wastewater, currently effective local environmental/food rules, buyer contract samples, and owner sign-off on desktop/mobile screenshots are **not asserted as completed**. There is no mandatory demonstration video in this online version. When any gate fails, work stops at the failing gate; retain the PR as a draft.
