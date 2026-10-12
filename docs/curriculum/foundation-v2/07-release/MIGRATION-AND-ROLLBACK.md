# Foundation V2 — Non-Destructive Data Migration & Rollback Contract

**Status:** PRE-RELEASE DESIGN ONLY · 2026-10-12  
**Applies to:** CherryEdu Foundation V1 (`path-foundation`) and Foundation V2 (`curriculum/foundation-v2`).  
**Critical policy:** NEVER rewrite existing learner progress, quiz attempts, enrollment status or issued certificates based solely on matching lesson titles or lesson order.

## 1. Confirmed repository reality

The current application uses:
- `lib/store.tsx` as a client-side React store with persistent `localStorage['cherryedu_state_v8']`.
- `SEED_PATHS/SEED_MODULES/SEED_LESSONS/SEED_QUIZZES/SEED_QUESTIONS` as baseline curriculum data; when loading a saved state the app merges official seed IDs and retains custom objects.
- `UserProgress` records scoped by `user_id` and **legacy lesson ID**; `getPathProgress` calculates a fraction using currently mounted module/lesson IDs.
- `QuizAttempt` records keyed by quiz ID and answer snapshot. A passed final exam can mint a **Certificate** and mark an Enrollment completed.
- `lib/dbSync.ts` visibly synchronizes **profiles and transactions** only. This **does not prove all learners' progress lives in the cloud**.
- `supabase/schema.sql` defines several UUID foreign-key tables but seed IDs are strings such as `path-foundation` and `mod-f1`. Real deployed Supabase schema needs independent inspection; NEVER assume this static file describes all live tables or run it wholesale on production.

**P0:** Preserve real learners' browser-held progress before changing official seed structure. For anonymous, guest or unsynced records, cloud migration **cannot be promised** without a consented export/backup path and reconciliation strategy.

## 2. Current release-candidate isolation

| Concept | Legacy (live) | V2 review branch |
|---|---|---|
| Path ID | `path-foundation` | `path-foundation-v2-preview` |
| Path URL | `/paths/kopi-dari-hulu-ke-hilir` | `/paths/foundation-v2-preview` |
| Module IDs | `mod-f1` … `mod-f7` | `mod-fv2-m01` … `mod-fv2-m07` |
| Lesson IDs | Existing `les-f...` stable identifiers | `lesson-fv2-m01-l01` … `lesson-fv2-m07-l05` |
| Lesson count | 32 original lesson objects | 36 versioned authored lessons |
| Questions | Existing published items | Draft 76 item pack; **not registered for credit** |
| Final exam/certification | Existing legacy path behavior | **None enabled in preview** |
| Feature flag | Unchanged | `NEXT_PUBLIC_CHERRYEDU_FOUNDATION_V2_PREVIEW=review-only` |
| Production default | Legacy only | Feature OFF |

The RC imports the Markdown manuscripts through `scripts/generate-foundation-v2-preview.cjs` into the existing lesson player. This is **a reviewing feature**, not a switch that upgrades everyone to V2.

**Any environment where the preview flag is enabled must be intentionally labelled and kept separate from public production.** The flag is **not an authorization mechanism** or a password—preview builds with a public URL can still be read by people who know the URL. Use deployment-level access control if the drafts must remain private.

## 3. A safe migration is a new product decision, not an overwrite

Prior to promoting V2:
1. **Inventory actual data stores** using read-only credentials: database schema, client storage behavior, authenticated/guest IDs, current progress, attempts and certificate verification semantics. Reconcile UUID schema vs string IDs.
2. **Backup snapshot** of persistent database, schema, policies and all credential relationships. Provide explicit learner backup/export for locally held unsynced progress; test on two browsers and mobile.
3. **Freeze legacy IDs and content-version semantics.** Historical quiz attempts must reference answer keys as they existed at the time, not mutable latest question definitions.
4. Introduce explicit `curriculum_version` on a versioned path and edition-specific progress. New lesson IDs do not inherit old credit automatically.
5. Develop an **expert-approved competency equivalence table** from each legacy `les-f*` ID to one or more new V2 objectives. Distinguish 1:1 equivalence, partial credit, no equivalence and manual reassessment. **Do not infer equivalence from titles.**
6. Give existing learners clear choices: **finish the edition started**, opt into V2 with transparent assessment of what counts, or retain completed V1 and optionally study V2. Enrollments should record which choice was made with idempotent migration logic.
7. Preserve previously issued certificate numbers/tokens, issue dates, validation pages and grade text. Do not retroactively call a historical course "SCA certified"; show actual edition/completion language, with accurate credential metadata.
8. Recalculate progress against **the specific course edition** each enrollment belongs to, not all modules attached to an unversioned logical path.
9. Model quiz attempts/version snapshots and assess server-side correctness where meaningful, keeping retakes and attempt numbers stable.
10. Test restore/rollback after partial migrations, interrupted page load, duplicate attempts, device switching and certificate verification.

**Hard P0:** The code today computes progress against the current in-memory lesson list, and all-at-once seed replacement would instantly change denominators. Do not do that.

## 4. Suggested versioned persistence schema (design, not an executed migration)

A **separate, additive** schema/version should be planned after live-state discovery:

- `curriculum_editions`: edition ID (immutable), logical path, syllabus version, status, published_at.
- `edition_modules`, `edition_lessons`, `edition_quizzes`: stable entity IDs, version, ordinal, provenance and content hash.
- `learner_edition_enrollments`: user, edition, status, selected transition policy, timestamps.
- `learner_edition_progress`: user, edition_lesson_id, state, timestamp, provenance (`direct`, `verified_equivalence`, `manual_override`).
- `edition_quiz_attempts`: immutable question/answer snapshot and scoring version; never reference only mutable current keys.
- `certificate_edition_ledger`: link existing/new certificates to their specific edition and issuer; preserve old tokens.
- `edition_migration_events`: idempotency key, old/new identifiers, policy ID, actor, dry-run result, applied_at, rollback reference.

**Do not apply these illustrative SQL entities as-is.** Production database role, RLS, provider/auth integration, tenancy, GDPR/Indonesian PDP compliance and seed ID types have to be reconciled first. Do not conflate client-side usernames with authenticated UUIDs.

## 5. Dry-run and staged release matrix

| Stage | Acceptance | Stop/rollback trigger |
|---|---|---|
| Isolated RC preview | Readable 36 lessons, 7 modules, legacy preserved; no professional badge | Missing manuscript, impossible route, incorrect ID, data mutation |
| Expert source & rights review | Signed claim ledger; reviewed references and licensable media | Any P0 safety/science or licensing issue |
| Beginner usability/sensory-equity pilot | New transfer-task evidence and content corrections | Learners guess without understanding, equipment exclusion or substantial confusion |
| Staging migration | Representative scrubbed/restored data; no orphan attempts/progress/certificates; idempotent repeat | Any data loss, double credit, or grade changes |
| Canary/limited opt-in | Legacy cohorts see prior content and stable progress; V2 remains optional | Any legacy completion% drop or certificate regression |
| Production release | Written owner sign-off, all CI green, backup and tested rollback | A failed safety/integrity check, unexpected P0 issue |

**Rollback requirements:** Disable V2 feature first (restore V1 path routing without deleting any V2 record), stop creating new V2 attempts, retain immutable old/new snapshots, restore database from verified backup only with approved operational playbook. Do not rely on resetting browser localStorage; that would **destroy learner progress**.

## 6. Critical regression tests to add before public rollout

- Learner at 0%, 25%, 75%, 100% V1 sees identical completion on V1 after RC deploy.
- V1 completed learner can verify preexisting certificate and still enter specialized paths.
- Saved `cherryedu_state_v8` with 32 IDs is reloaded; no delete or re-credit from 36 new preview IDs.
- Preview disabled after it was enabled: custom path/lesson state cannot leak into production. RC filters preview IDs out of custom seed merges when flag OFF.
- Offline or storage-limited learner gets recoverable, explicit status; never silently lose progress.
- Multiple devices/guest vs auth merge requires user-visible confirmation and conflict strategy.
- V2 quiz attempts, once approved, do not confer SCA/Q Grader credential, and cannot mint certificate before final transfer standards are met.
- Restore from backup and rollback are actually rehearsed by a human operator in staging.

**Decision today:** V1 unchanged. V2 documents and review-only path available on isolated RC branch, but **migration implementation and public release remain BLOCKED pending data discovery, expert review, pilot, and authorization**.
