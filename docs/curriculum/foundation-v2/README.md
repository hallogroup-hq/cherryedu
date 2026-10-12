# CherryEdu — Foundation Curriculum V2

**Work branch:** `curriculum/foundation-v2`  
**Baseline:** `main` @ `e21db3d6fdb863d5fedc73741042bdbdb447b95b`  
**Updated:** 2026-10-12  
**Status:** Modules 01 authored for internal review; all production learning content is unchanged.

## Documents

1. [01 — Stage 01 Research & 32-Lesson Audit](./01-research-audit.md) — 32/32 editorial issue matrix, eight P0 issues, 21 quiz issues, reference registry. The longer Stage 01 report was also delivered as a Markdown attachment in the associated conversation.
2. [02 — Stage 02 Curriculum Master Blueprint](./02-curriculum-master-blueprint.md) — 7 module contracts, 31 specified lesson slots, outcomes, misconceptions, activity/assessment contracts, pilot capstone and scientific release gates.
3. **Stage 03 — Module 01: full instructional draft**
   - [M01.L01 — Apa yang sebenarnya kita rasakan?](./03-lessons/M01-L01-apa-yang-kita-rasakan.md)
   - [M01.L02 — Mengapa dua cangkir kopi bisa berbeda?](./03-lessons/M01-L02-mengapa-dua-cangkir-berbeda.md)
   - [M01.L03 — Eksperimen rasa pertama](./03-lessons/M01-L03-eksperimen-rasa-pertama.md)
4. [04 — Module 01 assessment pack](./04-assessments/M01-module-exit.md) — 8 questions with correct answers, rationale, wrong-option feedback, target misconceptions and a scored practical reasoning rubric.
5. [06 — Module 01 QA and scientific claim ledger](./06-qa/M01-content-qa.md) — source/evidence mapping and honest gate status, including **blocked** scientific sign-off and learner testing.

## Workflow and safeguards

- These are **internal drafting files**, not live course material and not validated credentials.
- Avoid confusing **source-linked** with scientifically signed-off: every material claim in a released lesson needs appropriate current evidence and a domain expert where required.
- **Do not edit** `lib/data/seedData.ts`, existing lessons, quiz engine, local storage/progress logic, certificates or deployed production as part of this document-writing stage.
- **No-equipment path:** Reading case records trains critical interpretation but **does not certify actual taste/smell acuity**.
- Writing later lessons requires its own research and science QA; do not lazily copy M01 concepts into every module.
- Deployment requires versioned migration plan for lesson IDs, stored progress, quizzes, certificates, rollback, CI and real user approval.
- Any future PR should remain a draft until review/QA passes and is approved for production.
- CherryEdu is not an official SCA/CQI/Q Grader certifying program.

## Stage progression

| Stage | Status | Remaining gate |
|---|---|---|
| 01 — Source audit | Complete as desk audit | External scientific validation not claimed |
| 02 — Curriculum architecture | Authored 31-spec blueprint; internally checked | Expert/learner review still open |
| 03 — Lesson authoring | **M01 3/3 drafted**; remaining modules not begun | M01 subject-matter and beginner pilot required |
| 04 — Assessment writing | **M01 8/8 module exit items drafted** | Item calibration, variants and platform integration |
| 05 — Scientific/learning QA | **M01 desk QA complete** | **BLOCKED: experts + learners not tested** |
| 06 — Implementation | Not started | Legacy ID/progress migration plan + CI/preview approvals |

## Module 01 snapshot

- **3** full lesson texts, **8** module exit MCQs, plus formative tasks, answer explanations and an applied reasoning rubric.
- The lesson text includes substantive beginner-friendly explanations, worked examples, synthetic-case practice and references.
- Every learning simulation is labeled; the courses do not imply the learner actually tasted coffee via a screen.
- **Status: internal review candidate**, not content approved for live release.

**Production and `main` remain unchanged by this documentation branch.**
