# CherryEdu — Foundation Curriculum V2

**Work branch:** `curriculum/foundation-v2`  
**Baseline:** `main` @ `e21db3d6fdb863d5fedc73741042bdbdb447b95b`  
**Updated:** 2026-10-12  
**Status:** Research/audit + architecture **drafts**; no learner-facing code changes.

## Documents

1. [01 — Stage 01 Research & 32-Lesson Audit](./01-research-audit.md) — 32/32 editorial issue matrix, eight P0 issues, 21 quiz issues, scientific reference registry. The longer original Stage 01 report was also delivered as an attachment in the associated ChatGPT conversation.
2. [02 — Stage 02 Curriculum Master Blueprint](./02-curriculum-master-blueprint.md) — 7 modules, 31 fully specified lesson slots, learning outcomes, misconceptions, activity/assessment contracts, sample capstone, source anchors and publication gates.

## Workflow and release safeguards

- Treat these files as the **source of truth for drafting**, not as currently verified scientific teaching material.
- **Do not modify** `lib/data/seedData.ts`, curriculum lesson code, question banks, progress state, certificates or deployed production during Stages 01–02.
- Author later lessons on this branch only after claim-by-claim evidence and lesson acceptance are prepared. Do not pretend simulation can prove real sensory or professional competence.
- A replacement of current Foundation must have migration plan for lesson IDs, stored progress, quiz attempts, certificates, rollback, tests and review.
- Any GitHub PR should be **draft** until scientific review, SME input, learner testing and publisher approval are evidenced.
- CherryEdu is not an official SCA/CQI/Q Grader certifying program.

## Stage progression

| Stage | Status | Blocker |
|---|---|---|
| 01 — Audit | Completed as a desk audit | Scientific expert validation remains outstanding |
| 02 — Architecture | Drafted, structurally checked | Expert/learner validation outstanding |
| 03 — Lesson authoring | Not started | Module-level source & claim register required |
| 04 — Assessment writing | Not started | Need aligned item bank and calibration |
| 05 — QA | Not started | Technical/safety source sign-off and learner tests |
| 06 — Implementation | Not started | Migration + approval + CI and preview acceptance |

**Production and main are unchanged by this documentation branch.**
