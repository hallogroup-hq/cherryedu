# CherryEdu — Barista Specialization V2 Release Readiness & Handover

**Last editorial checkpoint:** 2026-10-13.  
**Branch:** `feat/barista-specialization-v2-audit` (Draft PR #5, **not** merged).  
**Production:** NO Barista V2 release; legacy Barista course and accounts remain unchanged.  
**Audience:** internal curriculum, engineering, safety and independent reviewers. **Never render this file as learner copy.**

## Product intent — immutable instructional requirements

The aim is NOT to teach a barista to mechanically repeat headbar recipes. The student must be able to explain extraction and ingredients; adjust safely for varying beans, equipment, customer goals and demand; invent and falsify hypotheses; and develop a genuinely coffee-led signature drink that has undergone sensory, safety, costing and reproducibility checks.

We explicitly reject rigid recipe universalism (for example treating 1:15 filter or 1:2 espresso as mandatory for every scenario), invented tasting results, empty quiz theatrics, visual diagrams presented as real technique demonstrations, and technical jargon/leaked editorial release copy on student pages.

## Implementation inventory

| Capability | Status and evidence |
|---|---|
| Module structure | 12 dependency-ordered modules; `02-curriculum-master-blueprint.md` |
| Learner manuscripts | 68/68 `.md` files in `03-lessons/`; content deepen pass completed across M03–M12, with contextual worked examples, changed-condition cases, variables and limits; **not SME-approved** |
| Minimum text depth | `scripts/validate-barista-v2-drafts.cjs` now enforces 450-word baseline; this is a structural filter, not proof of learning |
| Review-only curriculum compiler | `scripts/generate-barista-v2.cjs` -> `lib/data/baristaV2.generated.ts`; enforces 12×module inventory = 68 |
| Gated reader | `app/barista-v2`; visible only if `CHERRYEDU_BARISTA_V2_REVIEW=enabled`; does not write legacy progress, payments or certificate |
| Concept laboratories | 12 first-module concept tools built in `components/barista-v2/BaristaConceptLab.tsx`; 7 reviewed-as-*schematic* diagrams via `LearningMechanismVisual.tsx` |
| Open-response end-module work | 12 checkpoints via `ModuleCheckpoint.tsx` |
| Changed-evidence case bank | 36 cases, 3 per module. Learner records a first decision before surprise evidence and must revise it, using `BaristaTransferCases.tsx` |
| Formative diagnostics | 24 questions, 2 per module, 4 options each, all option-specific misconception rationales; `BaristaDiagnosticQuiz.tsx`, `baristaV2Diagnostics.ts` |
| Filter notebook | Specific M02/M07 filter-related lessons only, avoiding irrelevant forced notebook elsewhere |
| Browser automation | 68 lesson routes, 12 scenario routes, 36 transfer cases, diagnostic gate + keyboard/mobile checks in `tests/barista/` |
| No credential authority | BNSP/LSP, SCA AST and any official competency recognition: **not authorized or demonstrated** |

### Important boundary: implemented does not equal complete

- Some lessons have static teaching exercises but no bespoke interactive implementation in that lesson. Module-level diagnostics/cases don't automatically replace a well-designed visual/interaction for every chapter.
- Learner attempts, notes, and local quiz responses are **not stored in production accounts**. There is no learner-scored examination or account-grade transition.
- Seven diagrams explain causal concepts only. **25 actual filming/photography requirements remain outstanding**, with source rights and safety gate in `08-media-production-and-practical-checklist.md`.
- Scientific claim audit, food hygiene/allergen review, operator skills video sign-off, real novice testing, accessibility/media validation and real instructor practical rubric are **not passed**. See `09-competency-assessment-and-pilot.md`.
- No claim of "professional certificate ready" should be made on customer-facing pages. Existing title wording in legacy products is not evidence of official authorization.

## What still blocks release (P0/P1)

1. **P0 safety:** food-allergen, storage, electricity/steam and cleaning claims/steps verified by qualified trainers and food safety SMEs on the relevant equipment. No hazardous trial or misleading promise of allergen-free.
2. **P0 legal/credential:** explicit wording reviewed so students are not led to believe this course automatically awards an LSP/BNSP/SCA credential.
3. **P1 media:** produce and license real demonstrative footage/photos for the technique steps identified in `08`; review model-specific equipment accuracy, captioning, transcripts and alt text.
4. **P1 novice understanding:** observational usability pilot with new learners; changed-condition transfer tests; retest revised lessons; check whether any concept is skipped or introduced prematurely.
5. **P1 theory assessment:** independent review of 24 formative diagnostics and 36 case answers for validity, ambiguity, varied distractors, bias, and unintended answer leakage. Actual graded examination design still unapproved.
6. **P1 practical skill verification:** practical rubric piloted with real staff, equipment and authorized assessor; no remote text-only "competent" assertion.
7. **P1 product:** production-grade persistence, enrollment/permissions, learner progress, content editing workflow, migration preservation, and editorial publishing gate are not implemented for this isolated V2 route.
8. **P1 UX:** full mobile/keyboard/screen-reader audits with real media; visual comprehension and responsive illustration legibility.

## Current CI standard

`Barista V2 Authoring QA (No Deploy)`: structural validation, code typecheck, app build, actual browser E2E.  
`Foundation V2 Release Gates`: concurrent regression to protect existing Foundation content.

**CI success proves that the app builds and scripted interactions render; it does NOT qualify the path for an academic or professional credential release.**

Each PR update should show the exact commit SHA and actual run URLs. A cancelled older job is not evidence that the latest commit passed. Keep PR #5 **draft** until independent academic/safety/UX evidence exists.

## Immediate next editorial actions

- Retest novices on the 68 lesson reading order. Use **new scenarios** rather than text copied from their lesson.
- Replace generic text-only activities where they require visual/physical demonstration with real pedagogically grounded media + stateful task.
- Grade representative open answers **with two trained reviewers**, then adjust vague or trivial prompts.
- Run source claim verification and ensure all graphics are factually honest. Original diagrams may be used as explanatory schematics but not actual equipment proof.
- Resolve real CMS/content-editing and learner progress separately from safe review route.
