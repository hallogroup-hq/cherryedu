# CherryEdu Foundation V2 — Production Readiness Gatebook

**Snapshot:** 2026-10-12 • **Candidate:** `release/foundation-v2-rc`  
**Owner-facing status:** **TECHNICAL PREVIEW IS WORKING; PUBLIC V2 RELEASE IS NOT APPROVED.**  
**No writes to production database, branch `main`, existing certificates, or live learner progress have been performed.**

## Verified technical evidence

| Gate | What was actually checked | Status |
|---|---|---|
| Course corpus | 36 unique lesson source files and blueprint slots, seven modules | **PASS structural** |
| Draft exam bank | 76 unique item IDs, 4 choices, single key, referenced feedback | **PASS structural**; not psychometric validation |
| Answer-cue red team | Reworked all 60 M03–M07 items (plus 16 M01–M02 previously) so the longest option is not a predictable key; corrected shortest-cue regressions | **PASS editorial heuristic**; human validity open |
| Content references | Multiple targeted scientific fact-check batches, Codex OTA, SCA CVA, Kew taxonomy, 2026 water/bias, Fairtrade and EUDR | **PARTIAL**, expert signoffs open |
| Deterministic content import | `scripts/generate-foundation-v2-preview.cjs` compiles original Markdown into typed `lib/data/foundationV2Preview.generated.ts` before dev/build/typecheck | **PASS automated build** |
| Feature isolation | Preview has separate `path-foundation-v2-preview`, `mod-fv2-*`, `lesson-fv2-*`; existing path and IDs preserved | **PASS review implementation**; migration not attempted |
| Draft credentials | No V2 quiz objects/final exam seeded, thus no V2 certificate issued from preview | **PASS by design** |
| GitHub release CI | Corpus/option/link validation, typecheck, Next production build and browser smoke against localhost preview | **PASS on latest verified run**; re-run when committing |
| Vercel Git integration | New commits to RC automatically create **preview** deployments; scoped `NEXT_PUBLIC_CHERRYEDU_FOUNDATION_V2_PREVIEW=review-only` is restricted to RC's preview environment | **CONFIGURED**; review newest preview URL/state separately |
| No production modifications | All new application changes reside on RC; published `main` untouched | **PASS** |

## Connected environment: actual read-only observations

On 12 October 2026, connected Supabase project **cherryedu** (region Asia Southeast) showed **two public tables: `profiles`, `transactions`**, both with row-level security enabled. **No public progress, quiz-attempt, enrollment or certificate table was present in that read-only inventory.** This confirms a mismatch between source `supabase/schema.sql` (a larger aspirational UUID schema) and the deployed public database tables. This observation does not prove other schemas or external systems never hold data.

The current client stores `userProgress`, `quizAttempts`, `enrollments`, `certificates` and seed data in `cherryedu_state_v8` localStorage. Do not change the live denominator from 32 to 36 or presume all users have cloud backups. See [Migration & Rollback](./MIGRATION-AND-ROLLBACK.md).

## PUBLIC RELEASE P0 — Mandatory BLOCKERS (all must pass)

### P0-01 — Expert science and safety validation
- **Food safety/postharvest specialist:** fermentation, water activity, drying, contamination hazard, Codex interpretation and operational boundaries (M03).
- **Agronomist/taxonomist:** species, cultivars, altitude, maturity/Brix claims and local farming feasibility (M02).
- **Roaster + workplace-safety reviewer:** roasting mechanics, roast log and ventilation hazard messaging (M04).
- **Brewing scientist + water chemist:** extraction measurement scope, immersion mass balance and minerals (M05).
- **Trained current CVA sensory instructor:** SCA standards version, professional competency boundaries and contextual sensory claims (M06).
- **Historian plus Indonesian producer/worker/economic reviewers:** Ethiopia/Yemen/Java chronology, Priangan exploitation, farm-gate/FOB and living income/informal labour (M07).
- **Trade counsel/environment reviewer:** time-scoped EUDR, environmental marketing claims and traceability (M07).
- **Evidence required:** each reviewer records identity/competence, content revision hash, precise sections reviewed, issues corrected or justified, approval date and unresolved limitations. AI-only review does **not** substitute.

### P0-02 — Protect existing users' data and credential history
- Perform read-only census of actual data stores, guest/auth IDs and RLS authorization behavior.
- Demonstrate export/restore for local-only histories; obtain necessary consent and protect personal information.
- Implement edition-scoped enrollment/progress/attempt history in staging, with identity reconciliation; never blindly run repo `schema.sql` on live Supabase.
- Migration dry-run + idempotency tests (32 legacy IDs/36 V2) + verified backup.
- Grandfather all V1 certificates; keep public verification links and historical scores unchanged.
- Do not mark previous learners' lessons complete by fuzzy title match, or deduct legacy completion% without explicit edition selection.

### P0-03 — Human learner evidence and assessment integrity
- Run an initial qualitative novice study (suggest 5–8 varied beginners, including people without gear) using entire staged V2, followed by broader measurable validation where appropriate.
- Add holdout/retake question variants rather than repeating exact draft options.
- Expert-vet all 76 stems, answer keys, distractors and explanations; check that learners cannot pass mainly by selecting the “cautious” phrase.
- Evaluate transfer evidence for sensory, brewing calculations, green-QC decision, and farmer economics; calibrate thresholds based on real outcomes, **not** arbitrary 7/8, 10/12 or 13/16.
- No “SCA Standard certified”, “Q Grader qualification” or machine/food safety competency implied by completing digital-only tasks.

### P0-04 — Human approval and rollback rehearsal
- Clear rights for ALL official images/assets (especially SCA/WCR Flavor Wheel, proprietary forms, copyrighted excerpts), and independent visual accessibility review.
- Verify preview UI on mobile, desktop, keyboard, assistive technologies and realistically slow network.
- Run production-like staging rehearsal using representative scrubbed data, including preexisting certificates and paid subscription edge cases.
- Establish feature toggle, live incident contact, observability/analytics, full database backup and tested rollback.
- Approve deployment as a specific SHA with owners and signed change log.

## P1 improvements after P0
- Break some long manuscripts into meaningful short interactive steps instead of walls of text; **do not** turn them into shallow repetitive templates.
- Consistent glossary, accessible diagrams/mass flows, concise feedback and progressive disclosure of advanced jargon.
- Make retake variants and adaptive remediation based on actual misconception tags.
- Inspect any duplicate IDs and outdated Q Grader professional materials in the other specialization paths in a **separate audit**; they are out of scope of this Foundation migration.
- Cross-device sync design needs performance, security and privacy review.

## Evidence and rollback checklist

- [x] Versioned, preview-only integration behind explicit branch-scoped env flag.
- [x] Deterministic source-to-preview codegen (no manual copy).
- [x] Unique source IDs, quizzes and README references mechanically verified.
- [x] CI: typecheck, build, browser smoke against localhost, legacy route.
- [x] Read-only connected Supabase table inventory confirms public persistence gap.
- [ ] All current preview visuals reviewed for 36 full lessons on mobile and desktop.
- [ ] External expert sign-offs.
- [ ] Learner pilot and assessment calibration.
- [ ] Secure server-side persistence design, implementation, RLS test and data migration.
- [ ] Verified old learners' history/credential backup and restore.
- [ ] Licensed visual assets and legal review.
- [ ] Production canary, observability and rollback rehearsal.
- [ ] Named final release owner approval.

**Release decision:** **BLOCKED — DO NOT MERGE INTO MAIN OR PROMOTE TO PRODUCTION.**  
**Reviewer link:** Vercel preview associated with branch `release/foundation-v2-rc`, inspect latest `READY` build; flag is preview-only.  
**Future authorization:** After resolving ALL P0s, request explicit approval for final merge and deployment. Do not infer this from a successful build.
