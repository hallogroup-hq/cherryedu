# CherryEdu — Foundation Curriculum V2

**Work branch:** `curriculum/foundation-v2`  
**Baseline:** `main` @ `e21db3d6fdb863d5fedc73741042bdbdb447b95b`  
**Updated:** 2026-10-12  
**Status:** Modules 01–03 authored (3+5+7 lessons), mandatory M07 history lesson drafted; all production learning content unchanged.

## Documents

1. [01 — Stage 01 Research & 32-Lesson Audit](./01-research-audit.md) — 32/32 editorial issue matrix, eight P0 issues, 21 quiz issues, reference registry. The longer Stage 01 report was also delivered as a Markdown attachment in the associated conversation.
2. [02 — Stage 02 Curriculum Master Blueprint](./02-curriculum-master-blueprint.md) — 7 module contracts, 33 specified lesson slots (history kept as mandatory M07.L01; Module 03 expanded to seven with green coffee physical assessment), outcomes, misconceptions, activity/assessment contracts, pilot capstone and scientific release gates.
3. **Stage 03 — Mandatory history lesson (preserved, not removed)**
   - [M07.L01 — Dari Ethiopia dan Yaman ke Jawa](./03-lessons/M07-L01-sejarah-kopi-dunia-indonesia.md): full historical draft covering legend vs evidence, colonial coffee trade, forced labor systems in Priangan and connections to present-day coffee value.
4. **Stage 03 — Module 01: full instructional draft**
   - [M01.L01 — Apa yang sebenarnya kita rasakan?](./03-lessons/M01-L01-apa-yang-kita-rasakan.md)
   - [M01.L02 — Mengapa dua cangkir kopi bisa berbeda?](./03-lessons/M01-L02-mengapa-dua-cangkir-berbeda.md)
   - [M01.L03 — Eksperimen rasa pertama](./03-lessons/M01-L03-eksperimen-rasa-pertama.md)
5. [04 — Module 01 assessment pack](./04-assessments/M01-module-exit.md) — 8 questions with correct answers, rationale, wrong-option feedback, target misconceptions and a scored practical reasoning rubric.
6. [06 — Module 01 QA and scientific claim ledger](./06-qa/M01-content-qa.md) — source/evidence mapping and honest gate status, including **blocked** scientific sign-off and learner testing.

7. **Stage 03 — Module 02: full five-lesson instructional draft**
   - [M02.L01 — Di dalam buah kopi ada apa saja?](./03-lessons/M02-L01-di-dalam-buah-kopi.md)
   - [M02.L02 — Arabika, Robusta, Liberika, Excelsa](./03-lessons/M02-L02-spesies-varietas-nama-dagang.md)
   - [M02.L03 — Mengapa varietas dan lokasi saling berinteraksi?](./03-lessons/M02-L03-varietas-lokasi-pengelolaan.md)
   - [M02.L04 — Kapan buah kopi siap dipanen?](./03-lessons/M02-L04-kematangan-panen-brix.md)
   - [M02.L05 — Kasus kebun Indonesia](./03-lessons/M02-L05-kasus-kebun-indonesia.md)
8. [04 — Module 02 assessment pack](./04-assessments/M02-module-exit.md): 8 explained MCQs and scored farm-decision memo rubric.
9. [06 — Module 02 QA and claim ledger](./06-qa/M02-content-qa.md): source/evidence map and blocked subject-matter/learner-testing gates.

10. **Stage 03 — Module 03: all 7 lessons, from cherry to green coffee**
   - [M03.L01 — Dari buah panen menjadi green coffee](./03-lessons/M03-L01-perjalanan-ceri-ke-green-bean.md)
   - [M03.L02 — Washed, natural dan honey](./03-lessons/M03-L02-washed-natural-honey.md)
   - [M03.L03 — Giling basah dan konteks Indonesia](./03-lessons/M03-L03-giling-basah-indonesia.md)
   - [M03.L04 — Fermentasi dan mikroorganisme](./03-lessons/M03-L04-mikroorganisme-fermentasi.md)
   - [M03.L05 — Pengeringan dan penyimpanan](./03-lessons/M03-L05-pengeringan-penyimpanan-risiko.md)
   - [M03.L06 — Dry mill dan penilaian fisik green coffee](./03-lessons/M03-L06-dry-mill-penilaian-fisik-green.md) — **new competency for seven-lesson module**
   - [M03.L07 — Keputusan lot wet-mill ke dry-mill](./03-lessons/M03-L07-keputusan-lot-studi-kasus.md)
11. [04 — Module 03 assessment pack](./04-assessments/M03-module-exit.md) — 10 explained items, one safety-critical misconception and integrated memo with rubric.
12. [06 — Module 03 QA and claim ledger](./06-qa/M03-content-qa.md) — source/evidence, ISO 4149:2025 and SCA-110 development status, Indonesian USK field data, and blocked release gates.

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
| 03 — Lesson authoring | **M01 3/3 + M02 5/5 + M03 7/7 + M07.L01 history**; remaining M04–M07 slots not drafted | Scientific review and learner pilots still required |
| 04 — Assessment writing | **M01 8/8 + M02 8/8 + M03 10/10 module exit items drafted** | Item calibration, variants and platform integration |
| 05 — Scientific/learning QA | **M01 + M02 + M03 desk QA documented** | **BLOCKED: experts + learners not tested** |
| 06 — Implementation | Not started | Legacy ID/progress migration plan + CI/preview approvals |

## Current work snapshot

- Foundation architecture is **7 modules / 33 slots**; coffee history is a protected mandatory core lesson.
- **16 full lesson drafts** currently authored: M01 (3), M02 (5), M03 (7), M07.L01 history (1).
- **26 module-exit MCQs** authored (8 for M01, 8 for M02, 10 for M03), plus applied reasoning rubrics.
- **3 internal desk QA files** present; neither substitutes for botanical/agronomic/sensory/historical SME review.
- All production, migrations, certificates and actual learning assessment integrations are untouched.

## Module 01 snapshot

- **3** full lesson texts, **8** module exit MCQs, plus formative tasks, answer explanations and an applied reasoning rubric.
- The lesson text includes substantive beginner-friendly explanations, worked examples, synthetic-case practice and references.
- Every learning simulation is labeled; the courses do not imply the learner actually tasted coffee via a screen.
- **Status: internal review candidate**, not content approved for live release.

**Production and `main` remain unchanged by this documentation branch.**
