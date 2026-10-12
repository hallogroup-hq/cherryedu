# Home Brewer Specialization V2 — Owner Review Pack & Handover

**Edition:** V2; 2026-10-13.  
**Repository:** `hallogroup-hq/cherryedu`.  
**Branch:** `feat/home-brewer-v2-learning-path`.  
**Pull request:** #6 (draft, **do not merge/publish without owner approval**).  
**Approval:** The CherryEdu project owner explicitly requested to perform the **academic validation personally**.  
**Media decision:** **No video is required for this edition**; videos can be added much later. Failure to produce videos **cannot block this release**. Ensure safety is not overstated and online theory is not presented as certified hands-on competence.

## What is implemented

- 10 modules × 4 original lessons = **40 learner manuscript files** in `03-lessons`.
- 10 first-lesson **interactive concept laboratories**, each specific to its subject; these are real inputs, calculations and feedback, not decorative two-column tables.
- 10 original module concept SVG visuals plus **10 lesson-specific diagrams** placed immediately after the learner's hook in relevant chapters, with captions, accessible labels and mobile horizontal scrolling for legibility. **These are schematics, not real measurements, equipment photos or videos.**
- 20 new evidence/revision essay cases (two per module); first answer must be written before surprise evidence; student must revise before exemplar.
- 20 four-choice diagnostic questions (two per module) with **per-option explanations**; equal A/B/C/D key distribution, and longest-choice leakage checked. These are formative practice, not a standardized external exam.
- Gated course index `/home-brewer-v2`, 40 reader routes `/home-brewer-v2/hbv2-mNN-lNN`, 10 practice routes `/home-brewer-v2/practice/mNN`, isolated via server-only `CHERRYEDU_HOME_BREWER_V2_REVIEW=enabled` flag. This is review-only and does not write legacy learning progress, enrolments, purchases or badge events.
- Deterministic content compiler `scripts/generate-home-brewer-v2.cjs`; source integrity and reasoning gate `scripts/validate-home-brewer-v2.cjs`; browser suite `tests/home-brewer/home-brewer-v2.spec.ts`; GitHub Actions no-deploy workflow.

## Module-by-module owner verification

| Module | Core learner outcome | Owner must personally check |
|---|---|---|
| M01 Brew untuk Dirimu | Describes a preferred cup, safe home workspace, measured vs tasted observations | Clear for beginners without expensive gear; safety before aesthetics |
| M02 Kopi dan Gilingan | Interprets labels and grinder/freshness without predicting a flavor as certain | Correct coffee terminology, local Indonesia process context, relative grinder settings |
| M03 Memahami Ekstraksi | Distinguishes water-in, beverage-out, TDS/EY, and measured evidence | 15:225 vs 15:185; 40g×10%/20g example; no equation presented as universal taste |
| M04 Pour-over dari Pertanyaan | Designs an adaptable V60 process and diagnoses multiple drawdown hypotheses | Avoid fixed pour-rate/time/ratio dogma, safe hot-water guidance |
| M05 Immersion & Hybrid | Compares French press, percolation and manufacturer-supported AeroPress | AeroPress inverted is **discouraged**; no high-pressure improvisation |
| M06 Air, Suhu & Material | Separates TDS, hardness, alkalinity, heat transfer and filter media | No universal 120 ppm ideal; no unsafe homemade chemical/water recipe |
| M07 Mengenali Rasa | Separates sensory descriptor, preference, temperature and blind comparison | No invented tasting, no customer shaming, no flavor-note guarantee |
| M08 Troubleshooting & Eksperimen | Chooses a falsifiable hypothesis, measures limited conditions, avoids confounding | Evidence-first correction and honest uncertainty |
| M09 Cold & Personal Drinks | Calculates iced input and safely evaluates cold brew and extra ingredients | No invented safe shelf-life, respects allergen/food handling |
| M10 Your Home Brew Lab | Defines user-selected objective, V0–V2 experiment, simple SOP and new condition | Evaluation rewards reasoning and honesty, not one target ratio |

## Practical owner sign-off: five gates

1. **Read the lesson as a novice.** Can the reader follow the 'why' of a ratio or tool before advanced terminology? Can you state what the diagram explains and what it doesn't prove?
2. **Attempt the lab without hints.** Change at least one variable; check units, error states, feedback, and handling on 375px screens. Does each interaction meaningfully test what the text taught?
3. **Try a novel condition.** For each module, choose one of the two surprise-evidence cases. Is the new clue genuinely informative and can more than one reasoned safe answer be defended?
4. **Check scientific/safety claims.** No instruction to make AeroPress inverted, consume questionable stored coffee, use unsafe electrical/hot-water equipment, or equate water TDS and microbiological safety. Confirm terminology against actual references.
5. **Approve learner-facing tone.** No internal review jargon, no generic 'AI slop' style, no fake card claiming interactivity, no forced ratio, no unsupported SCA/BNSP or professional accreditation claim.

An internal owner checklist can be annotated with **approved / revise / blocked** by module, with clear issue IDs. We cannot record the owner's real approval without their decision.

## Reference register

Official/authoritative starting points:
- SCA Brewing course learning objectives: https://sca.coffee/education/courses
- SCA discussion of limitations of a universal Brewing Control Chart ideal: https://sca.coffee/sca-news/25/issue-13/towards-a-new-brewing-chart-xpj8t
- AeroPress official inverted-method warning: https://help.aeropress.com/en-US/i-have-heard-of-people-using-an-%22inverted-method%22-why-do-they-use-it-123217
- Manufacturer instructions for the exact grinder, kettle, filter, press, glass container, and food-safe accessories remain authoritative for operation/cleaning.
- Cold-brew safety and allergen claims must be evaluated against applicable local food-handling policies; this edition avoids prescribing unvalidated shelf lives.

This course references these concepts for educational synthesis and **is not an SCA certification program**.

## Scope exclusions explicitly agreed
- **Videos deferred** (not required for this version).
- No manufactured or misrepresented photo of "real test" results.
- Online completion does not attest that somebody can safely handle boiling water, pressure equipment, electrical faults or chemical/water mixing without in-person practice.
- No automatic badge, user progress, enrolment, payment or professional credential change in the isolated review route.

## Rollout and backwards compatibility

Existing public Home Brewer V1 is **published, free and associated with path ID** `path-home-brewer`, route `/paths/home-brewer-specialization`, module IDs `mod-h1...` and old lesson/quiz attempt keys. Preserve all old progress and badges. A production rollout is a **separate opt-in change** after owner approval.

1. Make a snapshot of old path IDs and real enrolment/lesson completion status.
2. Assign **new versioned** IDs (already `hbv2-m01-l01` etc) to any new persistent content. Do not silently map completed V1 lesson IDs to different V2 outcomes.
3. Decide publication UX: replace catalog path while offering a version-preserving read-only legacy archive, or explicitly label editions in enrolled user's dashboard. Never let users lose purchased or completed records, even though Home Brewer legacy edition is free.
4. Build and review persistent completion + quiz outcome semantics; note present tools are **session only** and do not produce grades.
5. Test unregistered, enrolled V1, returning user with progress, mobile and authenticated contexts. Confirm no surprise legacy certificate/badge award.
6. Only then perform merge/deploy and verify actual hosting; deployment should never be inferred from GitHub success.

## Release status

**Authoring and review-only UX:** implemented.  
**Automated QA:** see exact workflow run at current SHA; green build/browser does not assert owner acceptance.  
**Owner content validation:** pending **explicit owner decision**.  
**Videos:** deferred by instruction, **not blocked**.  
**Production integration/release:** pending a separate approved migration; no live path changed.
