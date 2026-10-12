# CherryEdu Foundation V2 — How to Edit the Public Beta Safely

**Release mode:** Public, read-only learning edition. This document describes **source-based manual edits**. It does **not** claim that the legacy in-app curriculum dashboard publishes edits globally.

## What is live
- A **separate Foundation V2 public reading course**, 7 modules / 36 lessons.
- **Original Foundation V1** and its existing IDs, learning progress, enrollment, quiz records, payments and certificates stay untouched.
- V2 activities are real practice elements but are **not graded, account-synced or certificate-eligible**.
- Learners can read V2 without signing in. Their typed practice answers are not saved after navigation/reload.
- Public text is still a beta requiring independent scientific/learner and accessibility validation.

## Manual edits (works globally after redeployment)
1. Open [Foundation V2 source lessons](https://github.com/hallogroup-hq/cherryedu/tree/main/docs/curriculum/foundation-v2/03-lessons) on the **main** branch.
2. Open the corresponding `Mxx-Lyy-....md` file. Use GitHub's **Edit this file** pencil (requires appropriate repository write permission).
3. Change the **learner-facing explanation** before the final editorial appendix, preserving the source file frontmatter. Keep the exact `[ACTIVITY:name]` and `[VISUAL:name]` references if a lesson relies on them.
4. Preserve the terminal **internal sources/QA appendix**; do not paste the scientific citations/QA markers into the learner-facing text.
5. Save via a pull request or commit to a review branch. Run the **Foundation V2 Release Gates** checks and preview the actual page.
6. Merge to `main` only after checks pass. Vercel automatically rebuilds; verify `/paths/foundation-v2-preview/lessons/lesson-fv2-mxx-lyy` on the custom domain.
7. If a correction fails validation, revert the specific commit. Do **not** reset the production database, remove localStorage, or reinitialize user accounts.

**Important:** The generated `lib/data/foundationV2Preview.generated.ts` is built automatically from the Markdown files. Do not edit it directly. The current dashboard at `/admin/curriculum/lessons` uses browser-side store state and is **not a global CMS for V2**. Its V2 view now includes a warning. Editing a compiled read-only V2 lesson there does not publish updates.

## Production feature flag
Vercel production environment should set `NEXT_PUBLIC_CHERRYEDU_FOUNDATION_V2_PREVIEW=public-readonly`. This **enables only the separate V2 reading edition**, not the account/login/payment lockouts used by the RC's `review-only` mode. Preview branch `release/foundation-v2-rc` must continue to use the branch-scoped `review-only` value. Keep the two environment values distinct.

To immediately hide the V2 beta without rolling back legacy production features, remove/change the public flag and redeploy the current `main` commit. This is a build-time flag. The existing Foundation V1 remains published.

## Known limitations (deliberate, not completed)
- Admin dashboard cannot globally publish V2 Markdown edits yet.
- No secure central per-user V2 lesson/assessment progress persistence or non-destructive V1→V2 migration exists.
- No V2 module-exit examinations or completion certificates are issued from the beta.
- Expert scientific signoff, licensed real-world specimen/process photographs, novice comprehension pilot, and full accessibility/security release assessment remain pending.
- Public beta must not be marketed as SCA/CQI certification or professional competence training.

## Minimum smoke after any edit
- Foundation V1 path still works and uses original IDs.
- Public V2 course lists exactly 7 modules and 36 readable lessons.
- M02.L02 explains Liberika before Excelsa nomenclature and holds feedback until attempt.
- M02.L01 anatomy visual, M03 process flow, M04 roast curve, M05 EY calculator and M07 farm economics display.
- Unsigned users may read but cannot gain XP, credit, certificate or access paid content via V2.
- Existing sign-in, QRIS/payment flow, profile, certificate verification and paid specialization routes remain unaffected.
- V2 lesson source updated across browsers after the new Vercel production deployment, not merely in the editor's browser.
