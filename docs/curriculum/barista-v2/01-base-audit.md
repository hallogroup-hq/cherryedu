# CherryEdu — Barista Specialization V2: Forensic Baseline Audit

**Audit date:** 2026-10-13 (Indonesia)  
**Branch:** `feat/barista-specialization-v2-audit`  
**Status:** BASELINE AUDIT — EXISTING PRODUCTION NOT APPROVED AS A VERIFIED COMPETENCY PROGRAM  
**Existing implementation:** `lib/data/paths/baristaData.ts` + `app/assessment/barista/page.tsx`  
**Scope of this record:** Evidence-based static inspection of the committed content and existing assessment surface. A browser study, certified trainer review, live-device QA, and practical bar observation have **NOT** been conducted. Numbers are specific to the current committed data, not a population estimate.

## 1. Current inventory (verified from code)

- Existing public path: `path-barista`, route `/paths/barista-specialization`.
- Current customer-facing title: **"Barista Specialization Path: Sertifikasi Profesional Kompetensi Bar"**.
- `is_published: true`; `is_free: false`; `prerequisite_path_id: 'path-foundation'` (this is legacy Foundation V1, **not** the public, untracked V2 edition).
- 10 modules (`mod-b1` … `mod-b10`) and 30 learner lessons (`les-b1-1` … `les-b10-3`).
- 10 module quizzes (`quiz-b1` … `quiz-b10`) with 30 questions total, three questions per module, **not** enough evidence for safe bar competence.
- Lesson bodies roughly 97–602 whitespace-delimited words; median around 262; 19/30 under 300 words and 12/30 under 200 (including headings and Markdown syntax). This is an indicator of **insufficient instructional coverage**, not a universal required word count.
- **0/30** bodies contain an embedded instructional image (Markdown image marker) or a typed `[VISUAL:...]`/`[ACTIVITY:...]` learning component. No source URLs embedded in these 30 lesson Markdown bodies. Sourcing may exist elsewhere; the on-page learner content remains largely text-only.
- Of the 30 four-option quiz questions, **30/30 correct answers are tied for or are the longest option** under a simple character-length heuristic. Keys are position-balanced (A=7, B=8, C=8, D=7), which **does not solve the length cue**. Distractor plausibility is variable; some are absurd. Do not treat the current tests as valid professional assessment.
- A separate `/assessment/barista` pre-employment scenario assessment exists with its own scoring/verdict logic. It **must not** be conflated with course grading, hands-on skill demonstration, or official certification.

## 2. P0 / P1 / P2 defects and required response

| Severity | Finding | Evidence | Required action |
|---|---|---|---|
| **P0 — credential / customer trust** | “Sertifikasi Profesional Kompetensi Bar” makes a formal-sounding competency claim without verifying issuing authority, practical assessment, or accreditation | BARISTA_PATH.title, published flag | Replace with neutral learner-focused title before the next safe deploy; official BNSP/SCA credit may only be claimed with real authorization and exam process |
| **P0 — recipe dependence / poor transfer** | Current modules teach fixed reference ratios, 9-bar framing and ready-made responses without demanding explanation of variable relationships or context-specific diagnosis | B1/B4/B7 fixed recipe focus, mostly short expository lessons and 3 MCQ per module | Enforce **adaptive decision-making standard** on all 11 proposed modules: goal → observe → safety/SOP → competing hypotheses → controlled test → measured feedback, including unusual guest requests; see `04-adaptive-barista-reasoning-standard.md` |
| **P0 — assessment validity** | 30/30 answer keys coincide with longest answer; only 3 items/module | BARISTA_QUESTIONS | Re-author test blueprint, plausible similar-length distractors, expert check, novel scenario bank and retake variants; use anti-cue gate |
| **P0 — hands-on competency** | No assessed videos, real equipment demonstrations, hygiene observation or bar performance verification | 30 short text lessons; standalone MCQ | Separately design supervised hands-on rubrics and evidence verification, plus safe no-equipment online alternatives that are **not** a substitute for physical verification |
| **P0 — safety** | Food hygiene, allergens, hot steam, chemicals and machine fault escalation are not sufficiently operationalized for a novice to act safely | B2/B5/B6/B10 outline | Require context-specific safety procedures, equipment manufacturer instructions, allergen controls, no internal repairs by unqualified operators, and independent SME sign-off |
| **P1 — learning architecture** | Course begins at “physics of 9 bar extraction”, not orientation to bar workstation, equipment and safe workflow | B1 order / lesson intro | Teach visible equipment, actions, and expected outcomes before formulas and terms |
| **P1 — inaccurate universality** | Some marketing/copy frames 9 bar, 1:2 ratio, exact temperatures, WDT, single recipes as universal best practice | B1/B2 metadata and prose | Present as examples or starting recipes; teach measurement, sensory checking, model-specific limitations and diagnostic reasoning |
| **P1 — progression** | Advanced swan art, carbonation, milk clarification introduced as if routine professional essentials, while foundational operations remain thin | B3/B6 | Move advanced techniques to clearly optional/elective or post-proficiency stage |
| **P0 — industry relevance / independent creation** | Existing B6 teaches predefined syrup/technique snippets but does not require a barista to invent, test, cost, document and hand off their own original signature drink | B6 lesson content and previous blueprint's elective placement; 2026 SCA Barista Skills Professional includes custom drink recipes; Indonesian menus include Barista Signature / Barista Secret | Make signature beverage R&D a **required, assessed and revisitable studio**, with prototype evidence, customer feedback, safety controls, operational recipe and venue-specific commercial feasibility; see `02-curriculum-master-blueprint.md` BV2.M10 |
| **P1 — real representation** | No coffee puck anatomy, grinder burr, portafilter, espresso flow, steam wand position, microfoam texture, hand path, or cleanup visual | 30 lesson bodies | Visual-first designs for spatial motor skills; sourced photography/video or rigorously reviewed real-world diagrams with rights/alt-text |
| **P1 — no genuine learner activity** | Expository text and simple tables are doing the work of guided skills labs | 30 lesson bodies | Real diagnosis forms, interactive workflow sequencing, service simulations, constrained calculations, feedback-after-attempt, and physical skill checklists |
| **P1 — credential/prerequisite mismatch** | Barista gated behind legacy Foundation V1 while public Foundation V2 is deliberately untracked | path prereq relation | Preserve V1 records for now; design explicit curriculum mapping and migration only after data-preservation gate; do not pretend V2 reading satisfies legacy completion |
| **P1 — publication quality** | Course title and module names are jargon-heavy and overpromise advanced/pro skills before teaching core actions | BARISTA_PATH / BARISTA_MODULES | Learner-facing naming pass, concise course description, plain language and transparent outcomes; internal release terminology never visible to students |
| **P2 — modality and accessibility** | Practical tasks not adapted to phone, no machine, no milk or sensory limitation | current content architecture | Separate text/diagram scenario route from optional real practice; keyboard access; captions; accessible image descriptions and pressure/temperature safety |

## 3. Current 10-module audit ledger

| Code | Old module | Specific issues to correct |
|---|---|---|
| B1 | Dial-in espresso | Starts with 9-bar thermodynamics; lacks equipment primer, dose/yield/time interpretation and iterative tasting workflow |
| B2 | Steaming milk | Mostly abstract chemistry; lacks verified demo positioning, temperature safety, steam wand hygiene and allergen segregation |
| B3 | Latte art | Leaps to swan and advanced art before repeatable milk integration; visual absence is a critical failure |
| B4 | Commercial manual brew | Multi-order/bypass before customer workflow and basic consistent recipe; refractometer not essential for every bar |
| B5 | Machine maintenance | Boiler anatomy/solenoid repair may imply unsafe hands-on procedures; distinguish user-cleanable vs technician-only |
| B6 | Signature drinks | Advanced gastronomy and “natural preservation” need food safety, cold chain, allergens and scientific support |
| B7 | Sensory QC | Tasting calibration lacks recorded examples, blinded repeatability and realistic quality-control log |
| B8 | Hospitality | Read customer needs via questions, not stereotyping/“psychology”; complaints and accessibility need practical scripts |
| B9 | Inventory | FIFO alone is not enough: expiry-led FEFO, cold chain, labeling, batch tracking, invoice and waste measurement |
| B10 | Ergonomics/K3 | Danger scenarios too thin; work design and emergency escalation must be practiced and assessed |

## 4. Credential boundary: NON-NEGOTIABLE

- The official SCA Coffee Skills Program describes Barista Skills **Foundation (7h), Intermediate (14h), Professional (21h)** and progressive, assessed outcomes. SCA certification requires its authorized trainer/course and assessment rules; CherryEdu's self-study material is **not** inherently SCA-certified.
- Indonesia's BNSP system certifies occupational competencies through licensed LSPs and applicable competency schemes. Example: the BNSP listing **Barista Rumah Minum/Kafe** includes 19 occupational units across service, K3, coffee equipment, machine/manual coffee preparation, transactions and team operations. This is reference for **coverage mapping**, not a claim of direct equivalence.
- Until a documented partnership/authorization, supervised assessment and identity verification exist, CherryEdu may issue only an accurately named **proof of participation/learning completion**, and only if actually tracked. Do not print “BNSP”, “SCA-accredited”, “licensed professional”, “certified barista competency” or mimic their marks as credential claims.
- A high MCQ score cannot prove milk steaming technique, food hygiene, service ergonomics or customer interaction competence.

## 5. Independent primary sources (snapshot)

1. SCA Barista Skills course tiers and outcomes: https://sca.coffee/education/courses
2. SCA course assessment and certificate route: https://education.sca.coffee/learners-how-it-works
3. BNSP listing of licensed LSP: https://bnsp.go.id/lsp
4. BNSP `Barista Rumah Minum/Kafe` 19-unit example, 2026: https://bnsp.go.id/index.php/jadwal-sertifikasi/a27207e7-c8ac-4bee-b301-bc6e56dc1771
5. SCA detailed course catalog (provider-owned PDF, check current edition for interpretation): https://education.sca.coffee/s/SCA-CSP-Course-Catalog.pdf

These are references to **synthesize** an original CherryEdu training program. Do not reproduce protected SCA examinations, course manuals or trademarks. Verify source version before teaching a time-sensitive claim.

## 6. Release state

**Gate B0 = AUDIT DOCUMENTED; GATE B1+ = BLOCKED.**
**Added binding requirement:** Every future Barista V2 lesson and assessment must test transfer beyond a headbar-provided recipe. A correctly repeated 1:15 filter ratio is **not** evidence of understanding without mechanism, alternatives, tradeoffs, and safe testing. Current production was not changed by this audit. The Barista replacement must remain in isolated branch until:
- all lesson objectives and safety claims are reviewed;
- every motor/spatial learning target has real instructional media or appropriate simulation;
- independent assessments and distractor analysis pass;
- learner-facing copy is reviewed with an actual page render;
- course completion is separated from certified workplace competence;
- practical verification requirements and evidence are transparent;
- existing learner enrollment, quizzes, purchased access and credentials are not deleted or silently reset.

The next artifact is `02-curriculum-master-blueprint.md`. This audit is not itself proof the defects are fixed.
