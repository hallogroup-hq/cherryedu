# CherryEdu — Final Assessment Master Blueprint
Status: AUTHORING / REVIEW ONLY
Updated: 2026-10-14
Branch: feat/final-assessments-qa
Source scope: six learning paths already in CherryEdu; exact IDs and module inventories must be checked against the active path registry before question import.

## Product goal
Every published path must have an assessment titled **Ujian Akhir Sertifikasi [Nama Path]** in the student experience. The title is a product label only: do not claim BNSP/LSP/state-accredited professional certification. Distinguish completion recognition, online assessment outcome, partner-assessed practical competency, and formal third-party certification.

## Preserved authoring target from previous checkpoint
- 6 paths total.
- 189 new questions, plus 10 decision cases across paths, as an authoring inventory target; this is not a claim of delivered, validated, or imported items.
- Foundation: previously reported 21 items + 1 case with initial QA; re-audit required for exact sources, answer keys and uniqueness.
- Other 5 paths: not signed off. Business Roastery content review is unresolved and its final exam must remain unreleased.
- No requirement to produce demonstration videos for current release.

## Core principles (mandatory)
1. The exam must assess concepts taught in the actual published path; map each question to path, module, lesson and explicit learning objective. No invented course coverage.
2. All final items must be NEW compared to lesson exercises, diagnostic MCQs and interactive practice: detect lexical duplicates and semantically equivalent stems/answers, not merely IDs.
3. A little more difficult than formative questions. Test transfer to a changed condition, reasoning, troubleshooting, experimental choices and trade-offs; avoid memorization-only traps.
4. Use more than MCQ. Include evidence-based diagnosis, calculations with units and tolerance, sequenced decisions, and open response / scenario scoring where reliable grading exists. Do not make an automated open response a pass/fail high-stakes decision without validated rubrics and human review or tested scoring.
5. The correct answer must be determined by premises stated in the stem or appropriately cited reference; do not teach universal coffee ratios, one-size-fits-all sensory claims or context-free business rates.
6. Practical skills cannot be certified from a browser-only test. Clearly distinguish theory-based online assessment from physical competency evaluation.
7. No misleading certificate issuance: passing an online exam alone is not a sufficient criterion. Enforce lesson completion, practice evidence, assessment mastery and any defined integrity gates server-side.
8. Explain failed concepts to students after final attempt/review, but do not expose the full active answer key to client bundles or APIs prior to submission.
9. Support retake policy, accessibility, mobile layout, autosave and reconnection. Confirm exact thresholds and attempt rules before publishing; no arbitrary silent default.
10. Do not alter production or merge until subject-matter review, technical QA, security review and owner approval are recorded.

## Required item schema
- item_id, path_id, module_id, lesson_ids, objective_id, curriculum_version, item_version
- item_type: single_choice | multi_select | numerical | ordering | evidence_case | rubric_response
- difficulty, cognitive_process, estimated_minutes, stimulus, prompt, options (where applicable)
- canonical_answer stored server-side, rationales for right/wrong, scoring_model, numerical_units, tolerance, required_assumptions
- source_refs, editorial_review, SME_review, key_verification, accessibility_review, duplicate_review, publish_status
- case_id and case_evidence_version when applicable

## Coverage matrix gate
Generate an authoritative path/module/lesson listing from the repository. An assessment cannot pass if any assessed objective has no lesson, or a critical objective is absent from the exam. Keep target item totals reconciled to 189; do not fill quotas with weak repetitive items. Track coverage per objective and skill domain and avoid overrepresenting easy first modules.

## Case design
Each decision case should present an operational scenario, data/evidence, a decision, a changed condition, and a revised decision with justification. Staged data must be realistic and internally consistent; provenance and hypothetical-vs-live status must be explicit. Never imply illustrative prices or freight quotes are current.

## Scoring design
- Define item-specific key and rationale with separate internal reviewer verification.
- Numerical problems: recompute independently, check signs, bases, rounding and units; refuse ambiguous multiple correct answers.
- Multiple choice: distractors must be plausible, non-overlapping, and not systematically shorter than correct responses.
- Require content experts to verify mechanisms, safety, Indonesian legal references and financial calculations.
- Establish a documented pass score, any required critical-domain minimum, attempts, remediation and appeal policy prior to activation.
- Protect integrity: server-side grading, versioned forms, deterministic attempt snapshots, audit log, no answer keys shipped pre-submit, and idempotent grading.
- Track validity and fairness using real pilot results; passing deterministic tests is not psychometric validation.

## Acceptance gates — sequential, all must PASS
G0 INVENTORY: identify all six active paths and their lesson versions; reconcile 189 + 10 inventory, note any gap.
G1 BLUEPRINT: objectives, outcomes, type mix, coverage, weights, time estimates, pass/retake policy drafted and approved.
G2 AUTHORING: every new item drafted with canonical answer, rationale, references, scoring rule.
G3 SUBJECT MATTER: two independent reviews for numerical/key-heavy items; expert review for sensory/process/safety/legal context; correct ambiguous claims.
G4 RED TEAM: check duplicate items vs formative bank, longest-answer bias, position bias, pattern recognition, leaked hints, stem ambiguity, discrimination and case evidence consistency.
G5 TECHNICAL: typecheck, build, unit, browser and cross-path regression; controlled and accessible desktop/mobile UI; no internal notes on student-facing pages.
G6 SECURITY: authorization, server-side answers, attempt snapshotting, rate limits, retakes, identity/role permissions and progress gating.
G7 PILOT: learner comprehension, time, feedback and item quality reviewed; fix false negatives and confusing wording.
G8 OWNER SIGNOFF: explicit owner approval for content and certificate wording, then separate approval for rollout.

**STOP rule:** Any FAIL or UNVERIFIED in an earlier gate blocks activation and subsequent release steps. Existing Business Roastery PR #13 remains separate, draft and unmerged. Do not copy its unapproved content into production assessments.

## Immediate work queue
1. Export current path/module/lesson/question registry from preview branch and locate prior Foundation 21+1 package.
2. Reconcile authoring totals against 189+10; build an objective-level coverage ledger.
3. Audit Foundation keys and explanations before touching further exams.
4. Author the remaining five path banks module by module, with independent checks.
5. Build test-only grading and candidate UI after content contracts pass; remain preview only.
