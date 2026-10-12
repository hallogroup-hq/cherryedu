# Foundation V2 — Learning Experience & Visual Aid Audit

**Date:** 12 Oct 2026 • **Branch:** `release/foundation-v2-rc` • **Status:** PILOT IMPLEMENTED, **NOT** 36/36 UX COMPLETE.

## Why the current lesson experience failed

Content was drafted in Markdown and passed straight to a prose renderer. Several activities said "cards", "choose", "simulate" or "sort", yet were static tables or question/answer paragraphs. Some answer keys appeared before any attempt. The reader mistakenly interpreted an instruction to *imagine* interaction as an interaction itself.

Foundation V1 had inline visual diagram markers (for example `[DIAGRAM:cherry-anatomy]`) handled by `CoffeeDiagram`. Those markers were not transferred into the V2 manuscript, causing real learning aids to disappear. The old anatomical diagram also contained claims of direct SCA/WCR curation and over-specific Brix/sugar assertions; it should **not** simply be copied into V2 unchanged.

These are **information architecture and implementation defects**, not reasons to remove science, history or meaningful exercises.

## Repair architecture — separate teaching content from interactive implementation

- Source Markdown remains canonical for claims, written explanation and source QA.
- A typed, explicit `[ACTIVITY:semantic-id]` directive mounts an interactive component in `MarkdownRenderer`. It is never interpreted as an empty decorative card.
- `lib/data/foundationV2Interactions.ts` stores classification, decision, sequence, calculator and visual configurations with contextual feedback and boundaries.
- `components/FoundationLearningActivity.tsx` handles learner attempts, reveal-after-answer, retry, keyboard/phone operation, and feedback. It does not persist credit, mark lessons complete or mint qualifications.
- `components/CoffeeFruitAnatomy.tsx` is a new original, schematic SVG. Clickable/tappable layer labels change highlighted layers and explanations, with a descriptive text alternative. It does not claim to be a licensed SCA/WCR diagram or a geometrically accurate specimen.
- Don't attach a graphic to every paragraph or make every lesson a game. Design from learning objective: image for spatial anatomy, ordering for stages, categorized cards for classification, parameter tool for calculation, documentary evidence case for claims.
- Editorial sources remain in hidden authoring appendix, not shown to learners.

## Implemented pilot scope — 8 lessons across all 7 modules

| Lesson | Before | After | Gate |
|---|---|---|---|
| **M01.L01** | Descriptive questions with visible answers | Sense-map classification cards, reveal after attempt | Automated/browser review |
| **M02.L01** | Anatomy table and paragraph, lost earlier image | Original cross-section diagram with six selectable layers **plus** accurate textual table | Automated/browser review |
| **M02.L02** | Claimed five "cards", actually a two-column table revealing answers | Five distinct cards, choose among genus/species/cultivar/region/trade, feedback after each | Automated/browser review |
| **M03.L02** | Pure paragraph about processing decisions | Evidence-based processing choice with plausible distractors | Automated review |
| **M04.L01** | A→B→C→D solution shown immediately | Reorder stages with accessible up/down buttons and non-revealing retry hints | Automated/browser review |
| **M05.L05** | Fixed example plus computed answer in same paragraph | Editable dose/beverage mass/TDS calculator showing solubles and *estimated* EY | Automated/browser review |
| **M06.L02** | Fixed sensory descriptor answer | Choose justified descriptor confidence from alternatives | Automated review |
| **M07.L02** | Immediate explanation of a direct-trade claim | Examine payment/evidence claim, then reason through feedback | Automated/browser review |

**Not implemented:** Remaining **28 lessons** still contain various static written practices and/or tables. Some are appropriate as reading aids; others will need purpose-built visual/interaction conversion. Do not label Foundation V2 "fully interactive" on the basis of this pilot.

## Next whole-course review — by teaching need, not template coverage

| Module | Candidate visual/interactive needs | Risks to avoid |
|---|---|---|
| M01 (other 2 lessons) | A/B comparison workspace, note-taking observation sheet | Claiming simulated data is actual tasting |
| M02 (remaining 3 lessons) | cultivar/environment diagram, annotated maturity photo (rights-cleared), decision matrix for farm context | Contrived "red = ripe" universal or invented Indonesian field documentation |
| M03 (remaining 6 lessons) | physical product-stage pictures, washed/honey/natural flow, wet-hull process flow, lot/QC decisions | Fake fermentation safety simulation; universal drying/moisture targets |
| M04 (remaining 4 lessons) | mechanistic roast timeline, CO₂ packaging illustration, cautious roast-curve annotation | Universal DTR, first-crack temperature or roast defect diagnosis |
| M05 (remaining 5 lessons) | concentration vs extraction visual, parameter A/B experiments, mineral/alkalinity concept graphic, immersion vs percolation flow | pH=TDS, Mg=fruity universal, estimated EY as total true yield |
| M06 (remaining 4 lessons) | sensory dimension comparison, descriptor confidence slider, blind comparison, CVA evidence-layer explorer | Copying protected SCA/WCR wheel/forms; claiming formal credential |
| M07 (remaining 4 lessons) | historical timeline with colonial labor context, value-chain actors/transaction flow, sustainability claim verifier, multi-record capstone dossier | Claiming every label is false, equating consumer price and farmer living income |

### One interaction is not automatically better than a short explanation

Choose **no interaction** when the reader only needs to understand a straightforward fact. Choose a **visual** if location, structure or spatial relationship matters. Choose **classification** for category distinctions, **sequence** for meaningful step order, **scenario** for contextual decisions, and a **numerical sandbox** for measurable relationships. Require an observable learner action, contextual feedback, full keyboard usability and an equivalent plain-language explanation. Otherwise the original text might be better.

## Acceptance gates before 36/36 UX approval

- [x] Real five-card taxonomic activity replacing the exposed-answer table.
- [x] Coffee fruit anatomy visual restored without unverified "official" branding.
- [x] Reusable typed interactions beyond a single lesson.
- [x] Core renderer typographic cleanup: bold is emphasis, not repeated boxed-label decoration; media have no invented SCA/CQI credit.
- [x] All seven modules have at least one deliberately chosen activity pilot.
- [ ] Content experts validate any new botanical/process diagram and activity distractors.
- [ ] Audit every remaining activity in 28 lessons for "says card but renders table", answer exposure, false realism, and missing visual needs.
- [ ] Mobile, tablet, desktop, keyboard, screen-reader and reduced-motion review with real people.
- [ ] Editorial visual-rights register for all photographic assets and any figures adapted from third parties.
- [ ] Qualitative beginner testing and revisions; no assumed engagement benefit solely from clicking.
- [ ] Confirm interactions never leak into official grades/progress or preview-only persistence.

**Release decision:** The first UX pilot is implemented; Foundation V2's *complete pedagogical/visual production experience* remains **BLOCKED until all 36 have been evaluated**.
