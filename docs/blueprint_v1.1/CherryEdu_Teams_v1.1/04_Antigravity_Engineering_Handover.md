# Cherry Edu Teams — Instruksi Kerja untuk Antigravity / Codex / Claude Code

**Ini engineering handover**, bukan izin modifikasi production. Baca **empat dokumen** berikut seluruhnya, urut:

1. `01_UX_Service_Blueprint.md`
2. `02_PRD.md`
3. `03_ERD_Technical_Architecture.md`
4. `05_UI_Visual_Direction_Guardrails.md`

## Project context

Bangun aplikasi baru **Cherry Edu Teams**, sebuah B2B training operations & competency management platform untuk pelanggan coffee shop Cherry Edu. Ini bukan pengganti platform utama `edu.cherrycoffeeroastery.com`. Produk utamanya menggabungkan Foundation/Barista learning content Cherry Edu, tambahan SOP/konten klien, program training offline, rubrik praktik, dan progress reporting owner.

**High-level choice:** repo dan deployment terpisah; usulan domain `teams.cherrycoffeeroastery.com`; Supabase project Cherry Edu yang sama dengan private schema `b2b` sebagai target setelah security gate, **bukan** database per tenant. Jangan implementasi cross-domain SSO naif: satu Auth project tidak otomatis berarti satu browser session antar-origin.

## Instructions to development agent

1. **Do not assume the documentation is implemented**. Audit actual repo, deployed app behavior, public/exposed schema, access grants and canonical learning progress.
2. **Do not modify production, push directly to `main`, deploy, or change Supabase live without separate explicit approval.** Prepare PRs on dedicated branches and staging migrations.
3. Treat security of existing Supabase as **blocking**. Existing live `public.profiles`/`transactions` were found with RLS policies `USING (true)` and broadly granted anon/authenticated SELECT/INSERT/UPDATE. Verify current situation before proposing exact mitigation. Don't run blunt REVOKE/drop policies blindly without mapping flows and a rollback.
4. Existing B2C `lib/store.tsx` uses browser localStorage for `enrollments`, `userProgress` and `quizAttempts`. Do not claim cross-device persistence until proven. Build server-authoritative progress with safe migration; never trust imported local quiz marks as formal assessment evidence.
5. Production must not expose hardcoded demo/admin identity or credentials. Audit `lib/auth.tsx` and callback paths; close vulnerabilities and prove tests.
6. **Protect user data:** no force reset, no destructive migration, no cross-tenant leak, no overwriting user progress, no silent data loss, no user-facing engineering status labels.
7. Use modular roles and permission checks (membership, outlet, cohort assignment), not one global role field or user-editable metadata.
8. Keep canonical lesson/quiz definitions and progress in Cherry Edu Learning; Teams stores program assignments, practical training and competency evidence.
9. Separate `learning_complete`, `awaiting_practice`, `competent`, `needs_practice`; never equate attendance/quiz score alone with skill readiness.
10. Mobile-first for barista/trainer; owner mobile needs actionable dashboard; admin responsive but desktop optimized.
11. Every feature includes loading, empty, partial, error, offline, auth-expired and access-denied states.
12. Prevent `draft`, `preview`, `TODO`, seeded/demo references and generic development placeholder language in student/owner production UI. Admin editor may have an internal draft state, explicitly scoped.
13. Use actual QA evidence for every release gate (test log, affected routes, screenshots/viewports, RLS negative tests), not "should pass" claims.
14. Never implement unverified facts as business defaults (class duration, threshold, price, curriculum count, staff headcount). Those must come from program configuration.
15. Avoid visually generic AI dashboard tropes (decorative gradients, excessive pill badges, wall of KPIs, generic text). Follow UX blueprint and Cherry Edu's tone.
16. **Owner-approved UI guardrails (release blocking):** NO neon/lime green, NO green glow/colored glowing shadows, NO bright random reds, NO saturated decorative accents and NO meaningless pill badges. Follow the verified Cherry Edu brand color tokens; **never invent official HEX**. Red is reserved for real dangerous/error states; use calm colors and explicit status labels. Do not treat the previous generated multi-screen mockup as approved UI.
17. Every role must undergo mobile screenshot QA; each pill/badge needs a genuine reason to exist, every status must work without color, and reviewed screenshots must match `05_UI_Visual_Direction_Guardrails.md`.
18. UI approval is a required gate before broad frontend implementation; visual polish must not override straightforward usability.

## Required work sequence

### Phase 0 — Architecture/security discovery (READ ONLY)

- Confirm Supabase project and live schema inventory; list grants/RLS policies, security advisor findings, user table alignment, auth paths and tenant feasibility.
- Confirm repo source of truth for lessons, quiz definitions, progress and certificates; distinguish checked-in SQL proposal from deployed DB reality.
- Inspect current prod auth demo/test code and SSR session/callback design.
- Produce risk register with severity, evidence, remediation options, blast radius, rollback and tests.
- **Deliver:** `phase0_security_and_persistence_audit.md` + tests plan. Do not patch without approval.

### Phase 1 — Remediate existing core (approval required)

- Branch with security fixes, RLS/grants migration (staging first), frontend demo lockdown, auth session verification.
- Add server-authoritative learning progress and quiz attempt APIs, canonical content IDs/versioning, safe browser-to-server migration.
- Negative tests for unauthorized profile/transaction read and writes; test login, subscription and payments still work.
- Cross-device progress tests, migration conflict handling, restoration.
- **Deliver:** PR, migration, CI artifacts and rollout plan; wait for release approval.

### Phase 2 — Teams product architecture (staging)

- New repo, Next.js app, design tokens, auth/permission middleware and API server.
- Schema from `03_ERD_Technical_Architecture.md` developed with migrations and tenant FK constraints.
- Provisioning, invite, membership, program versions, cohorts, trainer assignments, learning entitlements, event receipts.
- Assert full tenant isolation on APIs, downloads and audit.
- **Deliver:** staging demo with seeded test organizations A/B and all negative authorization tests.

### Phase 3 — UX implementation (staging)

- Implement BAR-01..06, OWN-01..05, TRN-01..05, ADM-01..06/08 from UX blueprint.
- Wire learning deep links, quiz checkpoints, practical rubric, attendance, remediation, skill matrix.
- Handle offline local draft with explicit unsynced state; official signoff online only.
- Cover minimum 320/360/390/430 px and desktop, Android Chrome + iPhone Safari, accessibility keyboard + screen reader smoke tests.
- **Deliver:** real screenshots/recordings, task-flow QA, performance results, E2E tests.

### Phase 4 — Pilot/release gate

- Onboard limited pilot clients, trainers and baristas.
- Validate baseline → online → offline → remedial → report; examine evidence, not only click-through.
- Fix usability/assessment/data integrity issues before production.
- Release with feature flag, backup/rollback, monitoring, owner signoff; no partial rollout disguised as completed.

## Test set (minimum)

- Auth: existing B2C user invited, same identity, no duplicate user.
- Two orgs A/B: cross-tenant read/write/update/export/file access all denied.
- Existing user with 2 memberships: org selector and scope correct.
- Client owner can only access assigned organization/outlets.
- Trainer assigned A can assess cohort A but not B.
- CSV duplicate invite creates one membership; expired invite blocked.
- Program publish rejects dependency cycles, preserves immutable version.
- B2C lesson completion reflected in Teams after trusted server event and idempotent retry.
- Offline rubric pending state never counts as signed-off.
- Attendance alone never passes competency gate.
- No answer key included in quiz API responses to learner.
- Disconnected device, retry, conflict, reassignment, resign, revocation all handled safely.
- Browser refresh/new device retains verified learning progress.
- No internal/dev/demo text appears in user-facing production build.

## Working agreements

- Prefer explicit architectural tradeoffs, readable types and schema constraints over cleverness.
- Security-sensitive code must be reviewed independently; use least-privileged APIs and short-lived credentials.
- Default to server-side authorization and traceable decisions.
- Keep entire implementation portable to a separate Supabase project in the future through API boundaries and stable identifiers.
- For every phase report: changed files, migrations, tests executed, passed/failed, known limitations, current deployed state, and whether any production data changed.

## Don't start with

- Building a beautifully styled dashboard that uses fabricated progress.
- Cloning entire B2C code and carrying browser-local storage forward.
- Altering production schemas or policies without a staging rollout.
- Per-client deployments or per-client databases.
- AI grading of skills or scoring of individual employee performance.

## First response expected from agent

A short, evidence-based plan and Phase 0 read-only findings focused on the existing Cherry Edu code and live database. Do **not** jump to implementation of Teams before approving the Gate 0 fixes and data persistence design.
