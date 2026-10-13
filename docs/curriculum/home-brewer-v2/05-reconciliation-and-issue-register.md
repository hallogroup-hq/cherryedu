# Home Brewer V2 — Candidate Reconciliation & Issue Register

**Recorded:** 2026-10-13 (Asia/Jakarta).  
**Status:** engineering/editorial working record, **not** academic approval or release authorization.  
**Repository:** `hallogroup-hq/cherryedu`.  
**Editorial baseline (provisional):** [Draft PR #6](https://github.com/hallogroup-hq/cherryedu/pull/6), `feat/home-brewer-v2-learning-path`.  
**Alternative candidate:** [Draft PR #7](https://github.com/hallogroup-hq/cherryedu/pull/7), `feat/home-brewer-v2-curriculum`.  
**Owner policy:** no videos required in the current edition; academic validation is performed by the project owner. **Neither PR may be published or merged solely on the basis of this audit.**

## 1. Evidence snapshots: don't confuse historical checks with the current HEAD

| Evidence | Commit under inspection | Observed test/report | What it does **not** prove |
| --- | --- | --- | --- |
| PR #6 baseline before this reconciliation | `40f2aa6fe6f6fcb44793600b7f8535c677afd461` | Home Brewer 42/42 Playwright pass; content/typecheck/build success; Foundation regression success | Quality of all 40 manuscripts, novice comprehension, account persistence, owner approval |
| PR #7 alternative | `41ecea72e1f8b1ad30ee87e446d0d85358b1bb63` | Home Brewer 28/28 Playwright pass; content/typecheck/build success; Foundation regression success | Equivalence with PR #6, learner outcomes, release suitability |
| PR #7 content validator on that commit | above | 49 of 50 lessons below its 370-word *review threshold*; mean 318 words; min 285; **0 blocking errors** | A word threshold alone does not grade educational quality |
| PR #6 content validator on baseline | above | 27 of 40 lessons recommended for depth review | A warning is not automatic factual error |

**Evidence references:** [PR #6 runs](https://github.com/hallogroup-hq/cherryedu/actions/runs/38316881759), [PR #7 runs](https://github.com/hallogroup-hq/cherryedu/actions/runs/38317655011), [PR #7 Foundation regression](https://github.com/hallogroup-hq/cherryedu/actions/runs/38317654990). Re-query runs for the **exact new HEAD** after every change; historic green checks must never be copied forward as current status.

## 2. Decision record — ADR-HBV2-001 (provisional; not a release choice)

**Decision for editorial work:** use PR #6 as the main review branch while comparing candidate #7 for useful missing competencies. Keep #7 unchanged during reconciliation. This minimizes rewriting and preserves the richer visual coverage and newer M02/M03 corrections already tested in #6. **Do not merge #7 into #6 mechanically.**

**Reasons backed by sources:**

- Both candidates use `/home-brewer-v2` and competing compiler outputs/components under the same paths. They cannot be treated as two independent editions merely because their lesson IDs differ.
- PR #6: 10×4 (40) lessons, 20 SVG sources (M02 placement corrected), 10 topic-specific labs, 20 evidence-change cases, 20 diagnostics.
- PR #7: 10×5 (50) lessons, 6 SVGs, 10 lab placements, 30 evidence-change cases, 20 diagnostics. Its content depth warnings are substantially more numerous.
- PR #7 places its TDS/EY calculator on HB02-L01 (intro measurement) and its ratio calculator on HB10-L01 (capstone opening). Both widgets may work, but their placement is not the strongest scaffold for the concept being taught.
- PR #7 validator loops `['## ', '## ']` to check sections: repeated identical string does **not** ensure two distinct conceptual sections. A green validator does not establish the claimed depth.
- PR #6 reader had a hidden M02-L01 deep visual and a poorly placed grinder concept visual. Fixed before this ADR, then checked with exact visual-title E2E tests (baseline above).

**Trade-off:** #6 still has shallow/repetitive manuscripts and only two adaptive cases per module; #7 adds useful coverage and three cases per module, but importing all fifty short lessons would reintroduce material-quality risk. Source comparisons must precede selective additions.

**Reconsider this ADR if:** the owner prefers #7 sequence after reading comparable samples, PR #7 pedagogical quality is materially improved and verified, or a planned edition architecture supports a different choice. This ADR is **not** an owner approval.

## 3. Competency crosswalk — where candidate #7 might add genuine value

| #7 scope | #6 coverage | Reconciliation action | Editorial status |
| --- | --- | --- | --- |
| HB01 labels, species/process, freshness, preferences | M01 + M02 | Check that species/process explanations are accessible without recreating redundant chapters | Pending source-level assessment |
| HB02 dose/water/output, EY and journal | M01 + M03 | Keep #6's expanded TDS/EY explanation; test more edge cases | M03-L02 expanded; owner review pending |
| HB03 grind, heat, agitation, filter, repeatability | M02, M04, M06, M08 | Consider an explicit repeatability/noise example, not just more vocabulary | Pending |
| HB04 pour-over and calibration | M04 | Keep mechanistic drawdown diagnosis and controlled comparisons | M04-L03 expanded; owner review pending |
| HB05 immersion/French Press/AeroPress | M05 | Compare safety and method-transfer coverage | Pending |
| HB06 troubleshooting scenarios | M08 + M07 | Assess whether a third evolving-evidence case adds genuinely new reasoning | Pending |
| HB07 sensory and triangulation | M07 | Triangulation and chance-baseline may be a useful carefully explained extension, **not a novice prerequisite** | Pending |
| HB08 water, care, waste, budget | M06 + M02 | Consider focused cleaning/budget examples, but don't treat unreviewed advice as safety certification | M06-L02 expanded; owner review pending |
| HB09 iced drink, allergens, recipe iteration | M09 | Compare food-safety wording and independent drink design | Pending |
| HB10 experiments, reproducibility, capstone | M10 | Check explicit evidence/replication and real-world transfer | Pending |

**Rule:** every imported concept receives one designated lesson owner, lesson-specific explanation, assessment and, where useful, visual. Never copy all sections simply to inflate chapter count.

## 4. Open-issue register (status and evidence must remain explicit)

Severity: **P0** blocks candidate selection/production; **P1** blocks academic sign-off until resolved or explicitly accepted by owner; **P2** engineering enhancement/triage; **OOS** intentionally out of this edition. Status: `OPEN`, `FIXED-PENDING-OWNER`, `VERIFIED-ENGINEERING`, `DECISION-REQUIRED`, `OOS`.

| ID | Priority | Affected | Observation / risk | Required evidence or action | Status |
| --- | --- | --- | --- | --- | --- |
| HBV2-001 | P0 | #6 + #7 | Two incompatible candidates write same route/compiler/component paths; student IDs differ | Select **one** source of truth and freeze an exact commit; don't combine Git histories or publish both | DECISION-REQUIRED |
| HBV2-002 | P1 | #6 | 27/40 lessons at the original baseline were below the editorial 370-word review threshold; subsequent substantive rewrites reduce that count, with the current count to be confirmed from same-SHA CI | Re-check warning inventory on latest SHA, then novice-read and revise by outcome, not word count | OPEN |
| HBV2-003 | P1 | #7 | 49/50 lessons below its own review threshold; 318-word mean | Review depth with evidence; do not call QA green academic readiness | OPEN |
| HBV2-004 | P1 | #7 | Section-count validator checks the same `'## '` twice | Replace with genuine structural/instructional quality checks if #7 is retained | OPEN |
| HBV2-005 | P1 | #7 | EY/ratio lab placement not aligned to their best instructional chapters | Remap by concept and test exact lab on exact lesson, if #7 retained | OPEN |
| HBV2-006 | P1 | #6 + #7 | Course responses and practice attempts remain page-local; no authorized learner progress integration | Version-safe enrollment/completion/quiz strategy; verify old V1 records in staging | OPEN |
| HBV2-007 | P1 | #6 + #7 | Real novice comprehension, 375px keyboard/screen-reader manual UX and safety have no owner sign-off | Owner review rubric and real novice observation, record module-by-module verdict | OPEN |
| HBV2-008 | P0 | repo / release security | `npm ci` reported 11 vulnerabilities (3 moderate, 7 high, 1 critical); lockfile pins Next.js 14.2.35, a 14.x release line affected by 2026 Next.js advisories | Inventory each advisory with `npm audit --json`; assess Vercel/App Router reachability; migrate framework in separately tested compatibility branch to a currently patched supported line, then run full regressions. **No blind `npm audit fix --force`** | OPEN |
| HBV2-009 | P1 | #6 + #7 | Repetitive experiment boilerplate reduces teaching specificity | Replace repeated paragraphs with mechanistic steps and context-specific transfer tasks as manuscripts are revised | OPEN |
| HBV2-010 | P0 | course release | Owner has **not** approved either candidate | Record owner `approved/revise/blocked` per module; don't infer approval from “gas” | OPEN |
| HBV2-011 | P0 | production/legacy | Foundation production commit and `main` were observed out of sync; V1 course data must be preserved | Fresh Vercel + GitHub verification before rollout; stage/version and rollback test with real legacy data snapshot | OPEN |
| HBV2-012 | P1 | #6 visual | M02 label diagram did not render and grinder diagram was attached to wrong lesson | Exact-title E2E + corresponding M02 reader; verified at `40f2aa6` | VERIFIED-ENGINEERING |
| HBV2-013 | P1 | #6 core teaching | M02-L01 label and M03-L02 TDS/EY explanations lacked novice-first depth | Rewritten and browser/content QA green at `40f2aa6`; owner must assess comprehension | FIXED-PENDING-OWNER |
| HBV2-014 | P1 | #6 core teaching | M04-L03 drawdown and M06-L02 water concepts were overly compressed | Expanded in commits `a68c737` and `d2e7e2f`; Home Brewer 42/42 and Foundation 28/28 passed at `b70d0df`; owner review remains required | FIXED-PENDING-OWNER |
| HBV2-015 | OOS | current V2 | Video demonstrations postponed by explicit owner instruction | Do not add to release blockers | OOS |
| HBV2-016 | P1 | #6 adaptive cases | Learner could edit the initial answer after seeing new evidence, undermining pre-evidence response integrity | Lock initial answer read-only when evidence is shown; verified with 42/42 Playwright at `b70d0df`. Commits `c5bd9bc` + `5de2ecf` | VERIFIED-ENGINEERING |
| HBV2-017 | P1 | #6 M07-L04, M08-L02, M10-L02, M10-L04 | Novice explanations of sensory preference, bitterness/astringency, failed hypotheses and capstone were too compressed and relied on repeated instructions | Four mechanism-first rewrites: `bb3e2dd`, `76cd53f`, `91a4309`, `616e7ec`; exact page assertions added in `cd625f3`; awaiting same-SHA QA and owner assessment | FIXED-PENDING-QA |
| HBV2-018 | P1 | #6 M09-L02 cold brew | Safety discussion did not give enough guidance on unknown storage conditions vs taste, and could be misread as universal shelf-life reasoning | Expanded scenario, log, reject/hold decisions and contextual safety caveats in `9a654a7`; see research references below; await same-SHA QA and owner's food-safety review | FIXED-PENDING-QA |
| HBV2-019 | P0 | #6 M03 RatioLab | UI accepted 15 g coffee + 185 g beverage + 10% TDS and displayed EY 123.33% as an unqualified estimate, violating mass-balance consistency; blank TDS was coerced to zero | Separate missing TDS from measured values, reject EY >100%, disable explanation on inconsistent data, and add boundary tests. Commits `03a6d0c` + `b04fb23`; verify same-SHA CI before closing | FIXED-PENDING-QA |
| HBV2-020 | P0 | platform / transactional email | `app/api/email/subscription/route.ts` accepts client-supplied `toEmail`, `transactionId`, amount and plan, then calls `sendSubscriptionEmail` without server-side payment verification shown in the handler; resulting HTML says payment verified and subscription activated | Isolate real checkout/email callers; require trusted payment confirmation, authenticated intended recipient, server-side priced plan/expiration, idempotency and rate limits. Never send arbitrary success receipts from direct client data. **Do not disable production receipts without migration/testing** | OPEN |
| HBV2-021 | P1 | platform / credential claims | `lib/emailService.ts` contains claims of an official signed certification and access rights; this audit cannot verify external accreditation or that the claims match product entitlements | Owner must verify credential claims and actual offers; remove unsupported marketing/credential assertions before release and add copy regression | OPEN |
| HBV2-022 | P1 | global WhatsNewModal / editorial preview | At head `4ac04a0` a second run of 46 Home Brewer tests failed 1/46 because the global v1.2 announcement modal appeared after 700ms and intercepted interaction with the M02 label lab; the first run passed, exposing a race | Suppress the unrelated marketing modal on `/home-brewer-v2` and `/barista-v2` review routes; add real interaction regression after its prior delay. Commits `7448a56`, `38e90c4`; await final same-SHA CI | FIXED-PENDING-QA |
| HBV2-023 | P1 | #6 lesson depth audit | 21 remaining manuscripts were flagged below editorial 370-word review threshold and contained duplicated generic experiment paragraphs | Individual topic-specific rewrites for all 21; recorded in ledger below. Validate 40/40 lessons, maintain concept→evidence→test→transfer, rerun browser tests. Word count alone is not approval | FIXED-PENDING-QA |

**Important:** `FIXED-PENDING-OWNER` means the source changed, **not** that the final academic content passed. `VERIFIED-ENGINEERING` means automated behavior was observed on a specific commit, **not** universal absence of bugs.

## 5. Owner review ledger (no approvals inferred)

| Module #6 | Reading | Mechanism/science | Action/lab | Transfer & cases | Safety | Owner verdict |
| --- | --- | --- | --- | --- | --- | --- |
| M01 | Pending | Pending | Pending | Pending | Pending | NOT REVIEWED |
| M02 | Pending | Pending | Pending | Pending | Pending | NOT REVIEWED |
| M03 | Pending | Pending | Pending | Pending | Pending | NOT REVIEWED |
| M04 | Pending | Pending | Pending | Pending | Pending | NOT REVIEWED |
| M05 | Pending | Pending | Pending | Pending | Pending | NOT REVIEWED |
| M06 | Pending | Pending | Pending | Pending | Pending | NOT REVIEWED |
| M07 | Pending | Pending | Pending | Pending | Pending | NOT REVIEWED |
| M08 | Pending | Pending | Pending | Pending | Pending | NOT REVIEWED |
| M09 | Pending | Pending | Pending | Pending | Pending | NOT REVIEWED |
| M10 | Pending | Pending | Pending | Pending | Pending | NOT REVIEWED |

For each owner review: record lesson ID(s), actual change request, why a beginner might be confused, resolution commit, evidence of re-test, and owner verdict. No synthetic sign-off.

## 6. Definition of done and change-control rules

1. **Source inventory:** ten modules, exact manifest of lesson IDs, title/route, diagnostics, cases, labs and SVG placements; no missing/generated-only orphan IDs.
2. **No hidden test weakening:** E2E checks lesson-specific figures and interactions; validators should detect real mismatches rather than accept a random `figure` or a repeated heading.
3. **Scientific/safety QA:** every important explanation distinguishes data, prediction, illustration and actual taste; no universal ratio/flow or unsupported cold-brew shelf-life.
4. **Pedagogical QA:** novice-first definitions, mechanism → example → counterexample → experiment → transfer. Remove repetitive boilerplate when it fails to teach.
5. **Record keeping:** every change has stable issue ID, source file path, source commit/PR, reason, reviewer/owner verdict and *same-SHA* test evidence; classify `OPEN` vs `FIXED` honestly.
6. **Platform and persistence:** no loss of old `path-home-brewer` IDs, progress, quiz attempts, enrollment or badges; introduce versioning/rollback after owner approves integration.
7. **Publication:** only after explicit academic + technical permission; never deploy a flag-gated, unauthenticated review route as a real enrolled course.
8. **Videos:** explicitly deferred, **not** a gate. No professional qualification is asserted by completing online reading.

## 7. Immediate next edits

- Read and improve #6 warning lessons **individually**. Prioritize M07-L04 (preference), M08-L02 (pahit/sepat), M10-L02 (failed hypothesis), M09-L02 (cold brew safety), then remaining warnings.
- Re-run #6 Home Brewer no-deploy content/typecheck/build and 42+ browser tests plus Foundation regression on the **new HEAD**.
- Only then decide which extra competencies from #7 merit adding to #6. Keep a single course ID/version mapping and avoid merging the two branches as-is.
- Prepare owner screenshots or authorized preview without fake visuals. Owner review and integration remain pending.

**Do not close an issue merely because CI is green.** A clean test run is evidence for exactly the assertions that test suite checks.


## 8. Current editorial change log — second audit batch

| Lesson / verification | Prior words | Revised words | Commit | Academic verdict |
| --- | ---: | ---: | --- | --- |
| M07-L04 separating descriptive sensory vs preferences | 318 | 659 | `bb3e2dd` | Owner review pending |
| M08-L02 bitterness, astringency, strength, bypass vs extraction | 324 | 698 | `76cd53f` | Owner review pending |
| M10-L02 V0/V1/V2 controlled experiments and predictions | 322 | 705 | `91a4309` | Owner review pending |
| M09-L02 cold brew food-safety reasoning | 373 | 686 | `9a654a7` | Owner review pending |
| M10-L04 practical capstone brief, evidence and rubric | 368 | 828 | `616e7ec` | Owner review pending |
| Four Playwright content/figure verification cases | n/a | n/a | `cd625f3` | Same-SHA browser QA pending at time of writing |

The editorial word threshold was reduced by **four** warnings through the revised lessons M07-L04, M08-L02, M10-L02 and M10-L04; M09-L02 was already above 370 words but required a substantive safety rewrite. Expected count on untouched validator: **21** warnings, subject to confirmation on the current SHA. **A word count is not evidence of understanding or owner sign-off.**

**Evidence register for this batch (external research, not claiming CherryEdu endorsement/certification):**

- Specialty Coffee Association [Coffee Value Assessment](https://sca.coffee/value-assessment): descriptive and affective/preference approaches should be handled separately; used as conceptual support for M07-L04.
- [World Coffee Research sensory lexicon](https://worldcoffeeresearch.org/read-more/news/174-world-coffee-research-sensory-lexicon): vocabulary for sensory attributes, including bitter and astringent, informs M08-L02. Do not pretend a consumer tasting log is a trained panel.
- National Coffee Association [Cold Brew Challenge Study](https://www.ncausa.org/Industry-Resources/Cold-Brew-Resources/Cold-Brew-White-Paper): conditional results for studied black cold brew, **not universal proof of shelf-life** for each household batch or beverages with added ingredients.
- US FDA [Food Code](https://www.fda.gov/food/retail-food-protection/fda-food-code): food service risk-control framework, **not automatically binding Indonesian regulation** and not a CherryEdu operating SOP. Always verify local requirements separately.
- [Cold brew HPP research abstract](https://pubmed.ncbi.nlm.nih.gov/38231670/): context that microbial risk and storage conditions matter; research on specific processing conditions must not be generalized to homemade batches.

The sources above inform wording and uncertainty, but **do not substitute for the owner's scientific, pedagogic and food-safety validation**. No user-facing video production is required.


## 9. Scientific calculator integrity regression

**Discovery:** Home Brewer M03 interactive ratio calculator previously allowed the illustrative default 15 g dose and 185 g beverage with an entered 10% TDS, then displayed an estimated **123.33% EY**. This would imply 18.5 g estimated dissolved solids from only 15 g coffee and is **impossible in the simplified mass-balance model**.

**Fix:** distinguish an empty unknown TDS from an actual entered measurement; provide a specific alert when measured TDS and beverage mass imply dissolved solids above initial dose; withhold EY and formative submission on inconsistent data. Zero/invalid dose also remains disabled. Tested in `tests/home-brewer/home-brewer-v2.spec.ts` with values 1.5%, 10%, blank, and zero dose.

**Boundary:** This is a consistency filter, **not** an endorsement of any preferred EY, coffee ratio, TDS target, taste, or validity of an uncalibrated refractometer. A value below 100% is not automatically a trustworthy measurement or good-tasting coffee. Owner scientific review remains outstanding.

**Verification:** CI for the updated exact head must pass before issue becomes `VERIFIED-ENGINEERING`.


## 10. Release-critical dependency risk (independent of curriculum correctness)

**Observed in version-controlled data:** `package-lock.json` on this candidate pins `next@14.2.35`; the app uses Next.js App Router. Install jobs have reported **11 npm advisory findings: 1 critical, 7 high, 3 moderate**. These counts are an npm install summary, **not a per-vulnerability reachability or exploitability assessment**.

**Independent vendor confirmation:**

- Vercel's [May 2026 security release](https://vercel.com/changelog/next-js-may-2026-security-release) explicitly lists Next.js 13.x/14.x among affected versions and recommends migrating to patched supported branches. The patch versions on that page were current for **May 2026** and must **not** be presumed latest as of October 2026.
- [Next.js security advisories](https://github.com/vercel/next.js/security/advisories) include subsequent 2026 advisories. Platform-specific variants (e.g. Windows-hosted server) must be differentiated from issues that may apply to a Vercel-hosted App Router deployment.
- The repository's own `npm ci` warning counts do not identify which advisory maps to which package without `npm audit --json`.

**Required security track before any production approval:** inventory the full dependency advisory report; map severity, affected version, exact patched alternative, production/dev scope and architecture-specific reachability; migrate to a currently supported/patched Next.js line on a dedicated branch; review changes to Next.js request APIs, middleware, routes, auth, and deployment; rerun end-to-end authentication, legacy progress, Foundation, Barista/Home Brewer and production-adjacent smoke tests. Do **not** weaken the CI suite or call vulnerabilities remediated based only on successful build.

**Owner boundary:** No framework upgrade or deployment was carried out by this content audit; the issue remains **P0 OPEN**. An audit finding does not itself mean the production app was exploited.


## 11. Cross-cutting payment/email security observation — no production change

**Read-only code inspection:** `app/api/email/subscription/route.ts` accepts recipient, plan, amount, transaction ID and expiry from JSON. The handler checks origin and an in-memory per-IP rate limit, but **does not call the payment-status verifier, check an authenticated subscriber or derive subscription facts from a trusted server-side record** before invoking `sendSubscriptionEmail`. The email service can send via Resend when `RESEND_API_KEY` is configured; without a key it reports a simulation. The HTML states the payment has been verified and subscription activated. It also interpolates user-controlled strings into HTML without an explicit HTML-escaping boundary.

**What is known:** there is a credible path for unauthorized or false-positive transactional email if this endpoint is publicly reachable and a mail key is configured. This does **not** prove that production was exploited, that keys are configured, or that account entitlements are being granted. The exposed response could be misleading even if no entitlements change.

**Why origin/rate checks are insufficient:** `lib/rateLimit.ts` allows requests without an Origin/Referer unless marked cross-site, accepts any `*.vercel.app` hostname as allowed and stores limits in process-local memory. These checks are not authentication or transaction authorization.

**Safe follow-up:** inspect exact caller flows and payment webhook/verification, add a server-side authorization and payment state record, sign/idempotently process trusted payment success, generate recipient and subscription details only from verified server data, escape strings embedded into HTML, and run refund/duplicate-event/failed-payment/legitimate-renewal scenarios. Do not directly modify live payment or email delivery as a side effect of Home Brewer content QA. Verify all credential and access claims independently with the owner.

This code risk is separated from the Home Brewer candidate curriculum and remains a release/security gate, not an assertion of an observed attack.

## 12. Third audit batch — 21 targeted lesson reviews and modal regression

**Baseline:** PR #6 at `4ac04a0` had 21 of 40 manuscripts below its 370-word editorial review threshold. They were not automatically incorrect scientifically, but the short repeated checklist often lacked concept-specific experimental detail. **Each of the 21 was re-opened and edited.**

| Lesson | Original words | Edited words | Source commit | Improvement |
| --- | ---: | ---: | --- | --- |
| M02-L02 | 361 | 493 | `197d9b7` | Explain oxygen/degassing, daily use vs portions, condensation/novel storage case |
| M02-L03 | 368 | 511 | `96e788d` | Distribution/fines analogy, grinder retention, specific comparative test |
| M02-L04 | 353 | 490 | `f953012` | Separate testing a grinder vs comparing coffee lots; low-waste plan |
| M03-L03 | 353 | 491 | `71fa0fa` | Interacting variables, time as process output, competing hypotheses |
| M03-L04 | 352 | 502 | `1be8775` | Calculate input ratios without falsely deriving EY; two-layer journal |
| M04-L01 | 359 | 523 | `5369c89` | Wetting/bloom observation vs universal bubble claims |
| M04-L02 | 360 | 514 | `bd5be46` | Pulse vs continuous pouring, output flow vs pour-rate distinction |
| M04-L04 | 362 | 530 | `9e99ef0` | Recipe cumulative vs additional gram clarity, paper walkthrough |
| M05-L02 | 342 | 465 | `3ea5876` | Immersion continues through separation, sediment preference and plunger safety |
| M05-L04 | 340 | 486 | `e4f22b4` | Different buyer needs, comparative method decision without gear shaming |
| M06-L01 | 361 | 527 | `b5ab90a` | Drinking safety vs brewing water quality; limits of conductivity TDS |
| M06-L03 | 342 | 488 | `9df9f0a` | Measured kettle vs bed temperature, serving temp vs extraction temp |
| M06-L04 | 337 | 488 | `7814d79` | Filter porosity/material, mouthfeel vs health, cleaning safety |
| M07-L01 | 350 | 494 | `4b31a76` | Beginner three-layer aroma/taste/mouthfeel practice |
| M07-L02 | 342 | 482 | `7157681` | Blind A/B bias, temperature/sequence confounders, replication |
| M07-L03 | 339 | 487 | `55dfe3e` | A one-screen, four-part sensory log and transfer to new beans |
| M08-L01 | 347 | 495 | `3f53da7` | Two hypotheses for sourness: preference vs extraction conditions |
| M08-L03 | 335 | 476 | `8f65a21` | Explicit variable/confounder/outcome contrast and falsifiable predictions |
| M08-L04 | 339 | 498 | `1c9b3b1` | Appropriate tests by actual equipment, no fabricated precision |
| M10-L01 | 351 | 505 | `faa75b0` | Specific, testable capstone brief and stop conditions |
| M10-L03 | 338 | 498 | `e22ce2c` | SOP paper walkthrough and transfer across grinders/filters |

**Expected result:** zero *word-count-based* depth warnings for the rewritten batch at the latest source, subject to the same-commit validator output. **That does not prove zero pedagogical defects or owner validation.** Every edited text needs owner check of actual beginner comprehension and science.

**Flaky UI evidence:** at commit `4ac04a0`, Home Brewer QA [run 38348616288](https://github.com/hallogroup-hq/cherryedu/actions/runs/38348616288) passed 46/46; parallel [run 38348621201](https://github.com/hallogroup-hq/cherryedu/actions/runs/38348621201) failed 1/46 when the global v1.2 announcement dialog blocked a button after its delayed appearance. **Do not conceal the failure because another run passed.** An isolated preview-specific suppression and time-based regression were committed.

**Latest validation status:** pending fresh content/typecheck/build, 47+ Playwright tests, and Foundation regression at the final HEAD. The 40 lesson IDs and separate V1 progress remain intact. No new videos and no release permission.


## 13. Cross-inventory anti-boilerplate audit and test protection

**Why this extra pass exists:** the earlier editorial depth list was generated using a 370-word review threshold. That did not detect reusable generic experiment paragraphs in lessons already above 370 words. This pass checked those previously unflagged manuscripts and replaced repeated copy where found, rather than calling the entire course finished after the short-lesson list was cleared.

**Additional source-specific rewrites (10 lessons not in the 21-warning list):**

| Lesson | Source commit | Replacement focus |
| --- | --- | --- |
| M01-L01 | `969dd61` | Clarifying personal taste rather than copying an internet recipe |
| M01-L02 | `02fed10` | Dry-run home station safety before handling hot water |
| M01-L03 | `ce7c3d3` | Measured data vs sensory report vs interpretation |
| M01-L04 | `ea736a0` | Brewing-water ratio vs output mass vs bypass dilution |
| M03-L01 | `9c01e6b` | Water-in, beverage-out and why retained water is not extraction yield |
| M05-L01 | `b5fa980` | Physical contact paths in immersion, percolation and hybrid |
| M05-L03 | `a6e4ee8` | Model-dependent safe AeroPress, not inverted imitation |
| M09-L01 | `4e6fe91` | Input hot water, ice initial, beverage yield and unknown ice melt |
| M09-L03 | `109c481` | Milk/syrup function and individual allergen risk |
| M09-L04 | `29e4185` | Authentic drink brief, controlled changes and personal preference |

**Also removed:** exact recurring end-of-lesson generic summaries such as “Jurnal pribadi”, “Apa yang kamu pelajari?”, and “Penutup pelajaran” where a topic-specific transfer task had already been written. These changes preserve the existing numbered modules, learning questions, case banks, visual resources, and legacy V1 course IDs.

**Engineering regression added:** the content validator `scripts/validate-home-brewer-v2.cjs` now **fails** on the exact long duplicated learner checklists and closings that were removed, in addition to inventory/scaffolding checks. It must pass on the resulting source **at a matching commit SHA**, not merely because an older CI run was green.

**Release interpretation:** passing the validator and browser tests establishes source hygiene, rendering and checked interactions, **not** that every beginner will understand every lesson. Formal scientific/pedagogic sign-off is still owner-owned; real novice testing is pending. The competing independent PR #7 remains a separate draft and must not be mechanically merged. Videos remain deferred by owner's explicit decision.

**Close criteria for HBV2-023:** 0 content-validator errors; 0 under-370 editorial word warnings; 40 lesson IDs; 10 module labs, 20 adapting-evidence cases and 20 diagnostics; browser QA includes new delayed-modal regression and pass on the exact head; no changed existing V1 records. Until those are checked, issue stays `FIXED-PENDING-QA`.

## 14. Post-audit QA finding — false-negative transfer wording

A read-only recheck of the exact candidate `d0272e9` found an important failure that was **not visible while the last handover was written**:

- [Home Brewer QA run 38352617691](https://github.com/hallogroup-hq/cherryedu/actions/runs/38352617691) and [38352613585](https://github.com/hallogroup-hq/cherryedu/actions/runs/38352613585): all **47 browser interaction tests passed** on both runs, but the **content validation gate failed**, so neither overall run passed.
- Content inventory reported **40 lessons, 20 cases, 20 diagnostics, 10 concept labs, zero word-depth warnings**, but 4 explicit **mechanism/transfer terminology** errors in: `M03-L01`, `M04-L02`, `M09-L01`, `M10-L03`. The narrowed term check `/berubah|hipotesis|informasi|kesimpulan|dugaan/i` could not find those words even though the topical learning tasks existed.
- Instead of weakening the guardrail, each lesson was enriched with an explicit falsifiable **hipotesis** and grounded competing explanations or paper-walkthrough method. Commits: M03-L01 `ccfe5ed`, M04-L02 `b37e093`, M09-L01 `f987536`, M10-L03 `55b9eae`.
- **Status:** FIXED-PENDING-QA until the content inventory/typecheck/build and full Home Brewer browser suite pass on matching new head; Foundation regression and owner sign-off are independent requirements. Do not cite 47/47 browser passing to mask the content job failure.

No V1 IDs, enrollment records, certificates, progress or deployed production assets were modified. No new video gate was added.

