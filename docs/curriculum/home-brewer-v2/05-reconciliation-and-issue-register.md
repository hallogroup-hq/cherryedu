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
| HBV2-002 | P1 | #6 | 27/40 lessons previously below editorial 370-word review threshold; 2 have been substantively expanded in this reconciliation | Re-check warning inventory on latest SHA, then novice-read and revise by outcome, not word count | OPEN |
| HBV2-003 | P1 | #7 | 49/50 lessons below its own review threshold; 318-word mean | Review depth with evidence; do not call QA green academic readiness | OPEN |
| HBV2-004 | P1 | #7 | Section-count validator checks the same `'## '` twice | Replace with genuine structural/instructional quality checks if #7 is retained | OPEN |
| HBV2-005 | P1 | #7 | EY/ratio lab placement not aligned to their best instructional chapters | Remap by concept and test exact lab on exact lesson, if #7 retained | OPEN |
| HBV2-006 | P1 | #6 + #7 | Course responses and practice attempts remain page-local; no authorized learner progress integration | Version-safe enrollment/completion/quiz strategy; verify old V1 records in staging | OPEN |
| HBV2-007 | P1 | #6 + #7 | Real novice comprehension, 375px keyboard/screen-reader manual UX and safety have no owner sign-off | Owner review rubric and real novice observation, record module-by-module verdict | OPEN |
| HBV2-008 | P2 | repo | `npm ci` previously reported 11 vulnerabilities (3 moderate, 7 high, 1 critical) | Triage package, reachability, fix path and regression. **No blind `npm audit fix --force`** | OPEN |
| HBV2-009 | P1 | #6 + #7 | Repetitive experiment boilerplate reduces teaching specificity | Replace repeated paragraphs with mechanistic steps and context-specific transfer tasks as manuscripts are revised | OPEN |
| HBV2-010 | P0 | course release | Owner has **not** approved either candidate | Record owner `approved/revise/blocked` per module; don't infer approval from “gas” | OPEN |
| HBV2-011 | P0 | production/legacy | Foundation production commit and `main` were observed out of sync; V1 course data must be preserved | Fresh Vercel + GitHub verification before rollout; stage/version and rollback test with real legacy data snapshot | OPEN |
| HBV2-012 | P1 | #6 visual | M02 label diagram did not render and grinder diagram was attached to wrong lesson | Exact-title E2E + corresponding M02 reader; verified at `40f2aa6` | VERIFIED-ENGINEERING |
| HBV2-013 | P1 | #6 core teaching | M02-L01 label and M03-L02 TDS/EY explanations lacked novice-first depth | Rewritten and browser/content QA green at `40f2aa6`; owner must assess comprehension | FIXED-PENDING-OWNER |
| HBV2-014 | P1 | #6 core teaching | M04-L03 drawdown and M06-L02 water concepts were overly compressed | Expanded in commits `a68c737` and `d2e7e2f`; **recheck CI at final HEAD and request owner review** | FIXED-PENDING-OWNER |
| HBV2-015 | OOS | current V2 | Video demonstrations postponed by explicit owner instruction | Do not add to release blockers | OOS |
| HBV2-016 | P1 | #6 adaptive cases | Learner could edit the initial answer after seeing new evidence, undermining pre-evidence response integrity | Lock initial answer read-only when evidence is shown; verify via Playwright. Commits `c5bd9bc` + `5de2ecf` | FIXED-PENDING-QA |

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
