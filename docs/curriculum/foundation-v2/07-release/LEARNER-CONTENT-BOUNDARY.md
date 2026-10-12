# Foundation V2 — Learner Content Boundary (release acceptance)

**Applies to all 36 Foundation V2 lessons.** This is an internal publishing contract. It must **never** appear in the learner reader.

## Decision

The source Markdown lesson manuscripts are authoring/research artifacts, **not** direct student-facing page content. Each source contains a **terminal editorial-only appendix** used for citation provenance, licensing and SME/learner validation status. Those appendices must remain available to the CherryEdu curriculum/editorial team but be **excluded in their entirety** from the student lesson body.

Student-facing:
- Core concepts and explanations in approachable Indonesian, examples, activities, scenarios, honest simulation labels, answers/feedback, and relevant practical safety limits.
- Scientific names of concepts such as SCA Coffee Value Assessment when they are genuinely part of the topic; not raw researcher/QA workflow labels.
- Meaningful learning outcomes and competence limitations when they directly affect how a student should understand the activity.

Editorial-only (must never appear on student pages, including at the end):
- Editorial and bibliographic sections such as "Catatan editorial dan referensi", "Sources & QA", "Catatan pengajar — sumber dan batasan", "Sumber dan status".
- Source IDs like `[S01]`, `[R1,R2]`, `[CLAIM-04]`; pasted journal URLs and the reference register.
- License notes, pending expert review, independent learner test status, unpublished quality-gate notes and comments about how the manuscript was audited.
- Generic draft metadata mistaken for content summaries, such as "Foundation V2 · draft untuk peninjauan".

## Enforced architecture

- **Canonical source:** `docs/curriculum/foundation-v2/03-lessons/*.md`, including original bibliography. NEVER delete source register just to clean presentation.
- **Strict presentation transformer:** `scripts/foundation-v2-presentation.cjs`, with a known terminal appendix heading for each of the 36 lesson IDs. One missing/unrecognized/moved appendix causes the build to **fail**, not leak.
- **Content generator:** `scripts/generate-foundation-v2-preview.cjs` imports the transformer; generated `Lesson.content` contains only learner-facing Markdown. Internal provenance remains in independent source files and release QA reports.
- **CI:** `scripts/validate-foundation-v2.cjs` exercises the transformer for **all 36** and fails for citations/editorial leakage. Browser regression checks representative M01, M03, M07 lesson pages.
- **Source continuity:** Source citations/claim register remain part of authoring QA; learner-facing explanation retains scientifically necessary uncertainty and simulation notices.
- **No implicit return of appendix:** Future editors adding lesson sections must explicitly separate reviewer comments from teaching copy and update the known appendix heading manifest when revising document structure.

## QA decisions

| Test | Expected |
|---|---|
| Reader contains learning body and actual educational explanations | Required |
| Reader shows article heading "Catatan editorial dan referensi" | **FAIL** |
| Reader displays bibliography URLs or opaque source IDs | **FAIL** |
| Reader displays "SME review pending" or "Human learner test pending" | **FAIL** |
| Reader shows essential "DATA SIMULASI" / appropriate safety cautions | **KEEP** |
| Research and citations still available to internal editor via original source documents | **Required** |
| Appendix source headings differ or cannot be located | **BLOCK PUBLISH** |

**Release approval:** Clean learner presentation is necessary but never substitutes for science, pedagogy, accessibility, storage, privacy, safety or payment review.
