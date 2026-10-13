# Roaster Specialization V2 — Owner Review and Release Handover

Date: 2026-10-13 (Asia/Jakarta)
Repo: `hallogroup-hq/cherryedu`
Branch: `feat/roaster-specialization-v2-curriculum`
Default-branch baseline: main `9cdfd5e`.
Scope: New isolated `/roaster-v2` route. **Existing `path-roaster` stays published and unchanged**. Student enrolments, paid access, quiz attempts, progress and certificates remain untouched.

## Completed source deliverables

- Forensic critique and research sources: `01-audit-and-curriculum-blueprint.md`.
- 10 coherently sequenced modules with **40 distinct Indonesian lesson manuscripts** under `lib/data/roaster-v2/m*.ts`. Each has five substantive explanatory subsections, concrete examples, uncertainty and at least one practical inquiry. Contents explicitly distinguish actual observation from simulated data. Lessons are *real learner copy*, not “draft” or editorial instructions.
- Dedicated read-only course assembly and catalog: `lib/data/roasterV2Course.ts`, `app/roaster-v2/`.
- 10 concept labs, spanning goal brief creation, machine reasoning, traceability and calibrated calculations: `RoasterV2Lab.tsx`.
- Ten original accessible concept figures, one per module, including heat transfer, moisture-vs-aw, experiment controls, CVA lenses, mass balance, problem triage and production traceability: `RoasterConceptVisual.tsx` and `RoasterConceptVisualExtra.tsx`.
- 10 additional research-informed, topic-specific field investigations embedded at the points where technical concepts need deeper worked examples.
- 20 two-stage cases with new information revealed only after the learner writes an initial decision. 20 four-option misconception diagnostics with each-choice rationale: `lib/data/roasterV2Practice.ts` and `RoasterV2Practice.tsx`.
- Deterministic authoring gate `scripts/validate-roaster-v2.cjs`; Playwright checks `tests/roaster/roaster-v2.spec.ts`, custom `playwright.roaster.config.ts` and isolated GitHub Actions workflow `roaster-v2-authoring-qa.yml`.

## What was inspected already

- Read original legacy Roaster path (`lib/data/paths/roasterData.ts`) and compared against available academic and technical sources. Identified unsupported universal prescriptions for DTR, charge temp, processing method and food-safety measurement.
- Live GitHub branch-source inspection after code writes: 10 modules, 40 lessons, 40 unique IDs, each with five conceptual subsections; additionally ten targeted deep-dive manuscripts (~196–231 words) mounted on high-concept lessons.
- Technical verification through [Roaster V2 CI Run 38375244126](https://github.com/hallogroup-hq/cherryedu/actions/runs/38375244126): `npm ci`, content-validator (10 modules, 40 lessons, 10 field investigations, 20 cases, 20 diagnostics, 10 diagrams; zero content issues/warnings), `npm run typecheck`, `npm run build`, and **nine Playwright browser tests passed** including mobile horizontal overflow, 10 diagram placements, every module practice route, one-click reveal safeguards, Celsius/Fahrenheit conversions and learner editorial-copy hygiene. Follow-up docs-only CI may run again; verify latest commit before signoff.
- Issues found and **corrected** during iterative preflight: one too-short diagnostic stem (`rvq-08`), one missing learner-action cue (`m05-l02`), a leaked example of an unsupported certification claim, a JSON validator-escape bug, Celsius/Fahrenheit lab values that previously only relabeled the unit, and one overly broad browser role selector. Passing regression run above confirms the repaired code.
- In all three new learner routes, server checks `CHERRYEDU_ROASTER_V2_REVIEW === 'enabled'` and otherwise responds with `notFound()`. No writes to legacy progress, enrolment, payment or credentials. The environment variable is a **private deployment setting**, not a learner-facing status label.
- Synthetic numerical examples are explicitly marked as such. Sources cited in internal audit; not SCA endorsement.

## Gates still outstanding; don't confuse authoring completeness with production release

1. **Completed for reviewed code snapshot:** `node scripts/validate-roaster-v2.cjs`, `npm run typecheck` and `npm run build` passed in GitHub Actions. Recheck latest PR head immediately before release.
2. **Automated checks passed:** 9 Playwright tests including responsive mobile lesson overflow and accessibility-oriented diagram semantics. Manual screen-reader/keyboard testing and real learner UX observation still required before a public release.
3. **Still outstanding:** Independent scientific copy edit with roaster subject matter expert, especially food safety and material science; owner academic validation is authoritative, including lesson depth (current lessons ~250–370 words plus independent lab/case material).
4. **Still outstanding:** Student pilot: one new roaster, one experienced operator; ask them to explain why a fixed DTR rule is invalid, calculate mass loss, interpret RoR delta and respond to a safety incident. Record misunderstandings.
5. **Still outstanding:** Integration design before publication: learning-path IDs, permissions/paywall, completion criteria, quiz gradebook, credentials and migration from legacy `path-roaster`, avoiding duplicate public courses or loss of old progress. No automatic production deploy.
6. **Practical safety boundary:** Equipment competence is not assessed by remote lessons. **Videos remain explicitly deferred** and are not a gate for this version. An operational license requires direct training/supervision where applicable.

## Commands for review environments

```bash
git checkout feat/roaster-specialization-v2-curriculum
npm ci
node scripts/validate-roaster-v2.cjs
npm run typecheck
CHERRYEDU_ROASTER_V2_REVIEW=enabled npm run build
npx playwright install --with-deps chromium
npx playwright test --config=playwright.roaster.config.ts
```

Run `CHERRYEDU_ROASTER_V2_REVIEW=enabled npm run dev` locally to access `/roaster-v2`. Without that server setting, the course is inaccessible.

## Nonnegotiable acceptance rules

- Student surfaces must not display “DRAFT”, “PREVIEW”, “BETA”, “TBD”, “COMING SOON”, or owner/editor validation markers.
- No universal roasting temperatures, numerical DTR targets, simplistic process categories, or automatic mold safety guarantees; no implied SCA accreditation.
- No educational videos required now; no fabricated practical assessment.
- No duplicate active student course or shadow replacement of historical progress or paid entitlements.
- Release only after explicit owner approval and verified CI/UX gates. CI pass alone does not authorize a merge.
