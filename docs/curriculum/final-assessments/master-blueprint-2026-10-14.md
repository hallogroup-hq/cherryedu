# CherryEdu — Ujian Akhir (Six-Path Final Exams)
Updated: 2026-10-14
Implementation: `feat/final-assessments-qa` / draft PR #14
Product scope: six distinct path assessments, **10–20 questions per path** as last directed by owner.

## Goal
Every curated learning path has its own final exam that measures transferable concepts, practical reasoning and operating decisions. Exams must contain new questions, correct keys with rationales, student-friendly delivery and no internal status notes. Browser-only performance is **theory assessment**, not a substitute for practical competency or external accreditation.

## Authoring inventory — committed
| Path | Questions | Mapped modules | Contextual case items |
| --- | ---: | ---: | ---: |
| Memahami Kopi dari Hulu ke Hilir (Foundation) | 12 | 7 / 7 | 2 |
| Barista Specialization | 12 | 12 / 12 | 2 |
| Home Brewer Specialization | 12 | 10 / 10 | 2 |
| Roaster Specialization | 12 | 10 / 10 | 2 |
| Q Grader & Sensory Specialist | 12 | 10 / 10 | 2 |
| Business Roastery | 20 | 21 / 21 | 4 |
| **Total** | **80** | **70 / 70** | **14** |

Business Roastery combines B05 and B06 in one integrative question to retain the 20-question maximum. The previous authoring target of 189+10 is superseded, not a hidden backlog. All current item types are scenario-based single-choice with four answer options; no auto-graded free text is presented as objective proof of competence.

## Code/ownership map
- Item banks (includes canonical answers and rationales): `lib/server/final-exams/*.json`.
- Public metadata only: `lib/finalExamPaths.ts`.
- Server grading, public payload projection: `lib/server/finalExamCatalog.ts`.
- API GET/POST: `app/api/final-exams/[path]/route.ts`.
- Student catalog: `app/ujian-akhir/page.tsx`.
- Student question page and UI: `app/ujian-akhir/[path]/page.tsx`, `components/final-exams/FinalExamRunner.tsx`.
- Reader/course integration: `components/curated/CuratedCourseOverview.tsx` and five specialty overview routes.
- Validator and automated browser QA: `scripts/validate-final-exams.cjs`, `tests/final-exams/final-exams.spec.ts`.
- Workflow: `.github/workflows/final-exams-quality-gate.yml`.

## Scoring policy (preview only)
12 questions require at least 10 correct. 20 questions require at least 16 correct. Every answer is checked by the server only after a complete form is submitted. Feedback/rationales unlock after submission. The score is not saved to an account and does not create a certificate or modify production progress.

## Mandatory release protection
- Explicit server-only flag `CHERRYEDU_FINAL_EXAMS_REVIEW=enabled`. All exam pages and API routes return 404 without it.
- No merge into `main`, no production deployment, and no certificate creation from a preview exam.
- Current repository is public: placing active answer keys inside versioned source code is **not suitable for a high-stakes live exam**. Before release migrate canonical answers to an access-controlled private item bank, rotate items exposed during authoring, use authenticated and immutable attempt records and server-side eligibility/gating.
- No official SCA/CQI/BNSP/Q Grader professional credential may be claimed from online MCQ results.
- Business Roastery reader and its pedagogical approval still belong to draft PR #13 and must remain isolated.
- Source questions derive from current course blueprints; accuracy of science, food safety, accounting, export/permission statements and student suitability still requires final owner/SME verification.

## Release gates
1. G0 Inventory and mapping: target 80 with 70/70 module coverage, no duplicate IDs or stems.
2. G1 Editorial assessment QA: varied scenarios, no obvious answer-length or answer-position hints; meaning matches lesson coverage.
3. G2 Numerics and key QA: independently calculate each numerical answer; every distractor must be strictly incorrect under stem assumptions.
4. G3 Student-facing experience QA: keyboard navigation, mobile, no internal notices or placeholder copy.
5. G4 Build/tests: validator, TypeScript, Next build, API and Playwright 6-path/browser checks PASS on exact current head.
6. G5 Production-grade security: keys private, signed attempt snapshots, authenticated persistence, RLS/authorization, rate limiting, retakes and certificate policy.
7. G6 Human review: owner and qualified SMEs validate all content and credential wording; pilot learner comprehension and accessibility.
8. G7 Explicit approval for branch merge, staging validation, then separate production rollout.

**STOP rule**: all automated checks on a prior commit do not establish PASS for a newer head. G5–G7 remain HOLD until implemented and explicitly approved. This branch is a review candidate, not a production certificate engine.
