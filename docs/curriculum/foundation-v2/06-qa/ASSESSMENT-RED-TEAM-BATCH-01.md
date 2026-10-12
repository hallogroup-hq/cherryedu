# CherryEdu Foundation V2 — Assessment Red-Team, Batch 01

**Date:** 2026-10-12  
**Source:** The seven authored `04-assessments/M01–M07-module-exit.md` packs on `curriculum/foundation-v2`.  
**Audit validity:** Programmatic *editorial heuristic* on four single-line answer options and keyed correct option. No human participant outcomes. **Not** a psychometric discrimination index.

## 1 — Critical finding: the longest option nearly reveals every answer

Each `Mxx-Qyy` section was parsed to extract the four A–D options, the keyed answer, and character lengths. `correct is longest` includes any tie.

**Before revisions**:

| Module | Number of items | Correct option longest | Rate |
|---|---:|---:|---:|
| M01 | 8 | 8 | 100% |
| M02 | 8 | 7 | 87.5% |
| M03 | 10 | 9 | 90% |
| M04 | 10 | 10 | 100% |
| M05 | 12 | 12 | 100% |
| M06 | 12 | 11 | 91.7% |
| M07 | 16 | 15 | 93.8% |
| **TOTAL** | **76** | **72** | **94.7%** |

**This is a serious test security and validity defect.** A learner can select the longest option across most items without understanding coffee science. The effect is aggravated when wrong options contain implausible absolutist claims (e.g., “all bitterness proves defect”), while correct options are detailed and appropriately cautious. A balanced A/B/C/D answer *position* cannot fix this cue.

### Other qualitative patterns needing review

1. Some wrong options are deliberately implausible and do not distinguish weak understanding from obvious guessing.
2. Many correct options include three distinct caveats; a novice can identify the “safest sounding” one without knowing the mechanism.
3. Several questions ask near-identical *claims are not automatically proof* across modules, risking superficial learning.
4. One-pass MCQs cannot attest physical sensory, machine operation, fermentation food safety or professional CVA skills; existing rubrics correctly note this, but product UI must enforce the distinction.
5. Some original learning outcomes involve productive performance (construct evidence map, control variables), yet MCQ-only assessment could give false mastery if the applied memo is optional or ungraded.

## 2 — Remediation actually performed in Batch 01

**M01:** Rewrote all **8** stems/options and explanatory rationales around realistic beginner errors; retained existing stable IDs and keyed A/B/C/D mapping. Correct-answer longest rate moved **8/8 → 2/8**. The correct choice is **not shortest in any item** in the reviewed draft.

**M02:** Rewrote all **8** prompts/options/rationales (including anatomy, cultivars, Brix, agronomy, altitude, Excelsa taxonomy, environmental claims); retained IDs and key mapping. Correct-answer longest rate moved **7/8 → 1/8**. The correct choice is **not shortest in any item** in the reviewed draft.

These revisions reduce answer-length cueing and replace nonsensical distractors. **They are not yet proof of calibrated quality**; a human teacher and actual novice learners must test comprehension and ambiguity.

### After the two module rewrites

| Module | Items | Correct longest (current) | State |
|---|---:|---:|---|
| M01 | 8 | **2** | Revised — still requires item/learner review |
| M02 | 8 | **1** | Revised — still requires item/learner review |
| M03 | 10 | **9** | **BLOCKED — rewrite needed** |
| M04 | 10 | **10** | **BLOCKED — rewrite needed** |
| M05 | 12 | **12** | **BLOCKED — rewrite needed** |
| M06 | 12 | **11** | **BLOCKED — rewrite needed** |
| M07 | 16 | **15** | **BLOCKED — rewrite needed** |
| **TOTAL** | **76** | **60** | **FAIL entire-bank answer-cue gate** |

The goal is **not** to make the correct option always short or to force each item to have identical character counts. That merely creates another predictable cue. Aim for diverse positions relative to other options and genuine conceptual discrimination.

## 3 — Remediation standard to apply to M03–M07

For every item, require:

1. **One observable misconception/mechanism** from the lesson; no generic trivial recall if the target was decision-making.
2. Exactly one defensible best answer *given the question's explicit evidence and scope*. Plausible distractors must reflect realistic alternative interpretations, not absurdity or deliberate misinformation.
3. **Distractors similar in length, grammatical pattern, and specificity** to the correct answer; avoid obvious safe-sounding or longest-only keys. Quantify option-length distribution module-wide as a leak heuristic, not pass certificate.
4. Explanation **after the learner attempts**: why the key is best, why each distractor fails, and what evidence would change the conclusion.
5. Scenario diversity and **holdout transfer examples** beyond a repeated teaching table.
6. Expert validates current taxonomy, SCA, water chemistry, safety, agriculture and trade-specific statements.
7. Pilot item performance: difficulty, discrimination, error patterns and item ambiguity with real participants. Thresholds such as 7/8, 10/12 or 13/16 remain provisional.
8. Avoid ethical misrepresentation: digital case reasoning ≠ actual cupping, Q Grader, brewing technique or food-safety practical certification.

**Proposed internal numeric heuristic only:** Across a module, if correct is longest on >50% of items, flag for editorial rewrite; **not** proof that <=50% makes a test good. A stronger check should also flag systematic shortest answers, repeated “always/never” in distractors, answer-only context clues and unbalanced text complexity.

## 4 — Implementation blocker

**Release Gate ASSESSMENT-CUE-01: FAIL** until all seven modules pass editorial adversarial review and human pilot tests. Previously authored 76 items remain *draft*, even though all have keys and rubrics. Do not import into production, auto-assign course credit, or enable certificates from this uncalibrated set.

## 5 — Next work

- Redesign **M03** first (food safety and processing misconceptions; avoid dangerous options).
- Then M04 roasting, M05 brewing/water math, M06 sensory, and M07 final economic decisions.
- Add a script/test checking option lengths, key integrity, missing options/duplicate IDs, and actual equation answers.
- Re-score the **whole bank** after rewriting; then begin learner pilot and obtain discipline-specific subject matter review.

**No live test or production learner state was altered by this audit.**
