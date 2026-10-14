# CherryEdu — Three New Specialization Paths
Date: 2026-10-14
Status: DESIGN / AUTHORING — DO NOT RELEASE
Branch: feat/next-specializations-curriculum-qa
Source branch: feat/final-assessments-qa at a4945458; target PR against that branch to avoid mixing release scope.

## Business objective
Move three legacy specialty courses into the learner-approved CherryEdu learning platform design. Restore conceptual depth, evidence-driven decisions and Indonesia localization; preserve strong existing educational content when substantiated. Do not treat historical legacy lesson text as verified.

## Learner outcomes and scope boundaries
### A. Green Coffee & Post-Harvest Processing Specialist
Audience: producer, co-op receiver, green trader, mill quality controller, buyer; upstream practitioner.
Outcome: sample and classify lots, assess agronomy and cherry, select washed/natural/honey/wet-hulled workflows, diagnose fermentation/drying risk, carry through hulling/physical QA/storage/traceability and document actions.
**Distinct from Q Processor:** covers broad green supply chain, farm-to-green commercial handoff, contracts and grade interpretation; not advanced scientific bioprocess accreditation.

### B. Coffee Business & Shop Management Specialist
Audience: owner/operator of coffee shop, café manager, future entrepreneur.
Outcome: test demand, build financially coherent menu and capacity plans, calculate COGS/channel net/CM/BEP/working capital, set up team/health safety/equipment inventory and make data-driven store operating decisions.
**Distinct from Business Roastery:** consumer-facing coffee shop unit economics, service delivery and store operations; not a production roastery factory/business plan.

### C. Q Processor Specialization: Standar Bioproses & Pasca-Panen Spesialti Dunia
Audience: working post-harvest processor, wet-mill technician/manager, QA lead.
Outcome: design and evaluate fermentative and drying controls, document real lot observations, choose corrective actions, confirm quality and risks with sampling, train staff and produce auditable processing SOP.
**Distinct from CQI certification:** online CherryEdu course is *not* CQI's Q Processing Professional or Expert certification. CQI's professional processing course explicitly requires field instruction and theory+practical tests.

## Existing legacy inventory (QA input, NOT a release assertion)
| Path | Legacy modules | Legacy lessons | Legacy entry |
| Green Coffee & Post-Harvest | 6 | 18 | /paths/post-harvest-specialist |
| Coffee Business & Shop Management | 6 | 18 | /paths/coffee-business-management |
| Q Processor | 8 | 24 | /paths/q-processor-specialization |

## Known correction gates
- Never assert Brix or altitude thresholds universally identify mature cherry or quality. Use variety, climate, lot distributions, sampling, visual/physical state and measurement context.
- No blanket claim that Arabica genetics determines superiority or that a process guarantees flavor. Separate genotype, environment, microbiology, harvest and roast.
- For anaerobic vs carbonic maceration vs yeast inoculation, distinguish oxygen dynamics, gas use and safety; do not casually recommend sealed pressurized vessels or CO2 use without qualified risk controls.
- Moisture content and water activity answer different questions. Check instruments and sampling uncertainty; reject universal storage-duration guarantees.
- Treat SCA CVA physical evaluation as distinct from one sensory score; do not confuse a historical defect count with all physical quality criteria.
- Business finance: separate markup/gross margin/contribution and variable vs fixed expenses, VAT/tax and commission settlement, timing of receivables/payables, working capital, setup CapEx and operating expenses.
- No claimed universal financial percentages, market prices, customer conversion rates or shipping charges without a dated, applicable source. Worked examples must explicitly identify assumptions and units.
- Indonesia compliance: check current 2025 KBLI via OSS by type of activity; sale/processing/café may have different KBLI and supporting requirements. Regulatory statements must state when professional/local verification is necessary.
- No internal notes such as draft, QA, reviewer, TODO in student-facing pages. Clean and readable content, not generic case-study-only walls of text.

## Sources for authoring and review
- SCA Coffee Value Assessment (physical, descriptive, affective, extrinsic): https://sca.coffee/value-assessment
- SCA education and practical skill boundaries: https://sca.coffee/education/how-to-prepare
- CQI Post-Harvest Processing: https://www.coffeeinstitute.org/education/processing
- CQI processing course progression: https://coffeeinstitute.org/education/course-progression
- World Coffee Research varieties: https://varieties.worldcoffeeresearch.org/
- Indonesian OSS KBLI 2025 (activity-specific): https://oss.go.id/id/kbli/detail/37180921-3574-5cf1-b936-ac54bed78d52
- BPOM 2026 KBLI 2025 registration implementation: https://registrasipangan.pom.go.id/berita/pengumuman-implementasi-kbli-2025-pada-registrasi-pangan-olahan

## UI and learning contract
- Reuse `CuratedCourseOverview` and `CuratedLessonFrame` without changing their layout; maintain syllabus accordion and sticky sidebar, audio, internal learner progression.
- First teach a model/concept -> causal mechanism -> realistic Indonesian operations -> worked example -> practice -> reflective decision; context cases complement instructional content.
- Exercises rendered as real interactive cards, not two columns masquerading as cards.
- From last lesson, the primary next action must be the path's **own** final exam. Exam also appears after the last syllabus module.
- Each final exam: 10–20 independent, reviewable, clear 4-choice items with verified explanations; server-side grading only, never ship keys before submit, no faux certificate.
- Compatibility with existing Foundation, Barista, Home Brewer, Roaster, Sensory and Business Roastery is compulsory. Do not override production or public path registry until verification.

## Gates (sequential; stop on first FAIL or UNVERIFIED)
G0 **Audited inventory and overlap:** verify legacy 6/18, 6/18, 8/24 plus all reuse and live route conflicts.
G1 **Path learning architecture:** outcomes/module order/lesson map/evidence+skill practice, approved pedagogic progression.
G2 **Source accuracy:** scientific taxonomy, fermentation, risk controls, mathematical worked examples; references captured and conservative claims.
G3 **Lesson completeness:** no outline-only/placeholder/draft, enough worked walkthroughs and mechanism explanations, interactive practice in each module.
G4 **Exam validity:** map all competencies; arithmetic independently checked; no ambiguity, dupes or answer-position cues.
G5 **UI/UX & route QA:** same Foundation layout; mobile; original course still available where intentional; last lesson to exam; no misleading accreditation copy.
G6 **Security & automation:** ensure no answer keys in GET responses; prod gating and compatibility, full TypeScript/build/Playwright.
G7 **Human SME & owner sign-off:** academic review and direct visual acceptance, separate from passing CI.
G8 **Preview deployment** after G0–G6 PASS with explicit user or standing preview authorization; production always held.

## Execution order
1. Green Coffee & Post-Harvest: rebuild/validate entire path and final exam.
2. Coffee Business & Shop Management: rebuild/validate, stress-test finance scenarios and boundaries vs Business Roastery.
3. Q Processor: rebuild/validate, strengthen practical decision-making, process safety and CQI scope.
Only mark one as completed when all technical and content gates pass, and preserve evidence.
