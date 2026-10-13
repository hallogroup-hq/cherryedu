# Q Grader & Sensory Specialist V2 — audit and curriculum architecture

Date: 2026-10-13. Repository: `hallogroup-hq/cherryedu`.
Branch: `feat/qgrader-sensory-v2-curriculum` stacked on `feat/roaster-specialization-v2-curriculum`.
Identity: keep legacy `path-qgrader` and `q-grader-path` intact; new isolated `/sensory-v2` is not a separate published course or student enrolment. No payments/progress/certificates are changed.

## Observed legacy problems (not hypothetical)

`lib/data/paths/qGraderData.ts` is ~85 KB. Its course description and module narrative repeatedly frame a Q Grader license around **the legacy CQI exam**, a compulsory 36-vial Le Nez kit, old ten-attribute cupping scoring, blanket 80+ arithmetic, and defect penalty tables. Examples include:
- Q-5 wording calls triangle test the “protokol resmi ujian triangulasi CQI” and requires red lighting as a universal method.
- Q-6 treats the old 2004 numerical cupping total as the organizing professional assessment system, with 80+ threshold and defect deductions described as present-day core.
- Q-2 describes historical cupping values as universal “rasio emas” and gives an internally inconsistent water TDS target (the module synopsis cites a 75–150 ppm range whereas the lesson table uses 75–250 ppm tolerance).
- Sensory fatigue content asserts an unverified 'reset' method of smelling arm skin and describes adaptation mechanisms with undue certainty.
- There are other overspecific physiological and chemistry explanations, including flavor percentages and acid identification claims that cannot be established by taste alone.

These passages require author-side replacement/retirement before integrating V2. **Do not quietly rewrite historical course IDs or mutate progress.**

## Current sources and material interpretation

1. [SCA Coffee Value Assessment](https://sca.coffee/value-assessment): four independent assessment types: physical, descriptive (SCA-103), affective (SCA-104), extrinsic (SCA-105); sample prep follows SCA-102. Do not collapse four lenses into one fabricated CVA score.
2. [SCA Q Grader Course](https://sca.coffee/education/q-grader): modern SCA-issued license, professional practical assessments, six-day course, nine evaluations (eight practical, one written), three-year license period; **no CherryEdu course claims certification**. Course structure may evolve; always check the official source.
3. [SCA Q Grader Program transition announcement](https://sca.coffee/sca-news/2025/10/1/q-grader-courses-now-available-across-various-regions-and-languages-zakzc): updated program launched under SCA on 2025-10-01, transitioning management from CQI and aligning assessment with CVA.
4. [SCA Q Grader preparation](https://sca.coffee/education/how-to-prepare): practical preparation domains include cupping mechanics, physical evaluation, roasting issues, descriptive, affective, olfactory categories, triangulation, main tastes and written theory. These motivate conceptual learning, but cannot be certified by digital quizzes.
5. [SCA published coffee standards](https://sca.coffee/research/coffee-standards?d=cupping-standards&page=resources): SCA-102, 103, 104, 105 and SCA-710 competency standard.
6. [World Coffee Research Sensory Lexicon](https://worldcoffeeresearch.org/read-more/news/174-world-coffee-research-sensory-lexicon): 110 defined attributes with references; an instrument for shared language, **not** a rigid list to memorize.
7. [SCA-SCAI collaboration (May 16, 2025)](https://sca.coffee/sca-news/sca-and-scai-collaboration-arfrn): CVA adopted in cooperation for the Indonesian coffee evaluation ecosystem, hence relevant to Indonesian coffee sourcing and quality communication.

Links and standards are attributed for further reading; CherryEdu did not reproduce SCA's assessment forms, license exams, paid manuals, or the licensed aroma references. Digital activities are original educational simulations rather than official mock certification exams.

## New pedagogical sequence

| Module | Why now? | Competence built |
|---|---|---|
| M01 Evaluator and Coffee Value | Before instruments, choose the right question | Separate physical, descriptive, affective, extrinsic, and claim boundary |
| M02 Senses and Language | Prevent myths and semantic confusion | Gustation, olfaction, somatosensory, reference vocabulary and adaptation |
| M03 Controlled Cupping | Measurements need stable conditions | Blind codes, replication, SOP, confounders and audit trail |
| M04 Descriptive | Learn to record what exists | Families of aroma, stage/time, acidity vs chemistry, mouthfeel |
| M05 Affective | Only then consider quality preferences | Different markets, panel calibration, score-era integrity |
| M06 Physical | Broaden from cup to green lot | Sampling, observable defects, moisture/aw, safety boundary |
| M07 Extrinsic | Read verifiable information | Source documentation, process claims, sustainability evidence and privacy |
| M08 Experiments | Challenge apparent certainty | Triangle test, binomial probability, threshold and independent controls |
| M09 Calibration/QC | Translate measurements into safe action | Median/mean, drift, sublot holds and explainable decisions |
| M10 Integration | Combine without erasing distinctions | Four-lens reports, evidence revision, competency plan and sourcing capstone |

Exactly 4 original lessons per module, 40 distinct learner IDs `sv2-mNN-lNN`. Each lesson uses a specific situational opening, mechanism, evidence limit, learner action, and conditional revision prompt. Target reader is an engaged Indonesian coffee professional—not necessarily an already-licensed Q Grader.

## Actual learner-experience components

- 10 conceptual SVG diagrams: one per module, separate from paragraphs and accessible using an explicit image label.
- 10 responsive learning labs: seven branching interpretation prompts, plus dose/volume proportional calculation in M03, binomial triangle-test probability in M08, panel median/mean in M09. Models explain assumptions and avoid claiming they are SCA forms.
- 20 two-stage case exercises: initial decision entry → **new evidence only after initial response** → revised decision entry → reasoned comparison. Two unique cases per module.
- 20 misconception checks with 4 choices, rationale and user-triggered feedback (two per module).
- Ten targeted field investigations (often 175–215 words each) appended at the hardest moments: four lenses, smell/taste, SOP, organic-acid inference, legacy score migration, water activity, extrinsic claim verification, probability, panel variation and capstone.

No videos are promised or needed in current scope; hands-on aroma sensitivity, cupping reliability and green defect recognition must ultimately be validated with real samples and trained assessors.

## The cross-course label defect

Previously `app/paths/page.tsx` used a ternary that displayed 'Spesialisasi Home Brewer' for **every** target role other than `all` or `barista`. It affects at least `q_grader`, `roaster`, `q_processor`, `business` and `farmer`. The new candidate changes this to explicit role-to-title mapping; it retains the genuine Home Brewer label only for `home_brewer`. This is a catalog fix, not a reason to change course IDs or enrolments.

## Do not auto-publish

Source branch inherits `vercel.json` disabling Git auto-deployment. Vercel project-level preview auto deployment is also disabled in order to preserve Hobby limits. This is a **stacked branch**: to merge this PR eventually, integrate its base and review both PRs separately. Never deploy production, merge main, or alter production configuration without the owner's separate authorization. A CI green build is not final pedagogical signoff.

## Authoring acceptance criteria

1. 10 coherent modules/40 full lessons; no empty editorial placeholders.
2. Clean claims about licensure, water/coffee safety and sensory chemistry.
3. 20 cases, 20 diagnostics, 10 functional labs, 10 figures, 10 investigations.
4. No learner-visible DRAFT, PREVIEW, BETA, TBD, COMING SOON labels.
5. All feature routes gated by `CHERRYEDU_SENSORY_V2_REVIEW=enabled` and return 404 otherwise.
6. Zero writes to student progress, enrollment, paid access, quiz history, certificates or analytics.
7. Passing TypeScript, Next build, deterministic content audit and Playwright mobile/browser checks.
8. Outstanding until human verification: owner academic review, sensory expert scientific review, keyboard/screen-reader observation, and student pilot with working evaluator. This version **does not claim official Q license readiness**.
