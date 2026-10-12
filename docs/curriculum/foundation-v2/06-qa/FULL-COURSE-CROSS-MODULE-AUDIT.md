# CherryEdu Foundation V2 — Whole-Course Cross-Module Editorial Gate (Stage 05 Preliminary)

**Audit snapshot:** 2026-10-12, branch `curriculum/foundation-v2`.  
**Basis:** Stage 01 32-lesson legacy audit, Stage 02 36-slot blueprint, 36 full lesson manuscripts, seven assessment packs, seven module-level QA reports.  
**Scope limitations:** This is **an internal manuscript/structural/data audit**, not independent expert verification, peer review of all claims, real learner testing, or a production UI audit. All new content remains outside live website/seed data.

## 1. Inventory and completion evidence

| Artifact | Expected | Found/read | Conclusion |
|---|---:|---:|---|
| Blueprint lesson specifications | 36 unique stable planning IDs | 36 | **PASS structural**: M01=3, M02=5, M03=7, M04=5, M05=6, M06=5, M07=5 |
| Full manuscript files | 36 | 36 | **PASS existence/desk**: all with outcome, sources, practice and explanation; history retained as M07.L01 |
| Module exit sets | 7 | 7 | **PASS drafting**: total **76 items** (8+8+10+10+12+12+16) with answers and rationales |
| Module QA files | 7 | 7 | **PASS presence**: source/claim limits and blocked human gates documented |
| Cross-module final dossier | 1 | M07.L05 | **PASS authoring**: 6 evidence packets, multi-step math, safety hold, history reflection and 16-point rubric |
| Professional scientific validation | Needed | **Not performed** | **BLOCKED — release** |
| No-equipment comprehension pilot | Needed | **Not performed** | **BLOCKED — release** |
| Accessibility, visual-rights, mobile UI audit | Needed | **Not implemented** | **BLOCKED — production** |
| Progress/quiz/certificate migration | Needed | **Not implemented** | **BLOCKED — production** |

### Specific verifications actually performed

- GitHub branch comparison shows only `docs/curriculum/foundation-v2/` changed from the baseline `e21db3d6fdb863d5fedc73741042bdbdb447b95b`. No application code, original seed, progress or production config edited.
- All **36 manuscripts** were opened through the repository connector in this audit pass, confirming manuscript text, draft status, learning outcome, some reference URLs and learner activities/answers. This verifies source **presence**, NOT citation quality for each sentence.
- All **7 assessment packs** were inspected for stems/answers/rubrics. One consistency defect was discovered and repaired: M02's eight `### Q01–Q08` headers were renamed `### M02-Q01–M02-Q08` to provide stable and consistent IDs with other modules.
- M07 capstone initially reused M07.L03's economics numbers; repaired to require fresh transfer reasoning: **90 kg premium accepted out of 100 harvested**, with the fate of **10 kg unsold unknown**. This prevents rote copying.
- M07 numerical checks: baseline Rp300.000 residual vs premium Rp220.000 on **different sold quantities**; cost difference +Rp230.000, revenue +Rp150.000, residual delta −Rp80.000. Beverage 15g dose, 210g output, 1.35% beverage TDS => estimated cup EY **18.9%**, not from 240g water input.

**Audit confidence boundaries:** Link presence and basic structural checks do not establish that **all** linked articles have been read in full, that all cross-citations are perfectly mapped, or that every technical sentence is factually validated.

## 2. Pedagogical vertical spine (7 steps)

| Module | Learner mental model | Transfer skill | Key misconception guardrail |
|---|---|---|---|
| **M01 — Cup first** | Describe an experience without assuming its cause | Separate observation, explanation, preference | Fruity note ≠ proof of fruit ingredients |
| **M02 — Farm and biology** | Bean is part of fruit, shaped by genotype, ecology and farming | Evaluate maturity and farm decisions under uncertainty | Altitude/maturity color ≠ universal flavor/grade |
| **M03 — Postharvest** | Product form and microbial/drying/physical QC transform stage by stage | Reason about lot condition, hulling, green grading and holding risk | Fermentation time/pH/moisture ≠ safety certificate |
| **M04 — Heat and roast** | Thermal and chemical processes overlap | Read simple roast-log evidence, distinguish sensor from cup result | DTR/first crack/color ≠ guaranteed best cup |
| **M05 — Brew physics/water** | Strength, EY, mineral composition and methods have distinct roles | Use consistent units, analyze output mass, design controlled A/B | “High TDS water is full”; Mg=fruity universal |
| **M06 — Sensory and CVA** | Taste/aroma/texture differ from liking, bias and extrinsic data | Use uncertainty and four evidence lenses | Classic 80+ and one cue ≠ universal specialty status |
| **M07 — History and value** | Every cup is shaped by people, power, transactions and narratives | Cross-check documentary/technical/economic/social claims | Retail premium ≠ farmer income; marketing ≠ traceability |

**History placement:** Mandatory M07.L01 after technical modules is a deliberate narrative flashback linking coffee movement from Ethiopia/Yemen to Java and the political economy of Priangan. It is **not optional**, and its historical judgment is also tested in M07 exit and final reflection.

### Intentional overlap vs accidental repetition

**Acceptable spiral:** M01 taste-vs-liking (basic), M06 physiology/lexicon/calibration (advanced beginner), M07 four-lens practical application. M03 initial green QC and M07 decisions likewise recur in a harder context.

**Editorial risk:** Multiple lessons end with similar “jangan simpulkan pasti” formulations. At page-design stage this can feel formulaic and cognitively exhausting. **Do not remove scientific caveats**, but vary teaching modalities: physical flow visualization for M02/M03, annotated curves M04, interactive mass-balance M05, sensory evidence cards M06, documentary dossier M07.

**Candidate compression:** Condense repetitive disclaimers into consistent inline source/claim notes and glossary where legally/technically appropriate; keep vital contextual safety statements on the actual page where needed. Do not reduce nuanced mechanism to generic one-paragraph flashcards.

## 3. Stage 01 P0 claim coverage — drafting only, NOT closed scientific sign-off

| Legacy high-risk issue | Current prevention in V2 | Provisional disposition |
|---|---|---|
| Specialty = SCA 80+ as only current universal rule | M06.L05 and M07.L05: current SCA attributes/CVA, legacy historical context | **DRAFT RESOLVED; review needed** |
| Altitude → universal acidity/floral | M02.L03 and case data | **DRAFT RESOLVED; local agronomy review needed** |
| Natural flavor guaranteed by sugar osmosis | M02.L01 / M03.L02 | **DRAFT RESOLVED; processing chemistry review needed** |
| Universal anaerobic fermentation recipe/pH safety | M03.L04, safety-critical M03 assessment | **DRAFT RESOLVED; food safety expert gate** |
| Water TDS = solvent full, invented ideal mineral/pH cutoff | M05.L03 | **DRAFT RESOLVED; water chemist gate** |
| Mg fruity, Ca chocolate deterministic | M05.L03, updated 2026 sensory water paper | **DRAFT RESOLVED; water chemist/source design gate** |
| Outdated SCA cupping form as current mandatory procedure | M06.L04–L05 SCA-102–105 status | **DRAFT RESOLVED; CVA trainer gate** |
| Historic 80+ / score defects as entire quality metric | M03.L06 / M06.L05 | **DRAFT RESOLVED; green grading/CVA expert gate** |

**Rule:** “DRAFT RESOLVED” means the revised text no longer intentionally teaches that misconception. It does **not** mean the complete material is externally proven accurate.

## 4. Highest-priority unresolved risks, ranked

| Priority | Risk | Why it matters | Acceptance condition |
|---|---|---|---|
| **P0 — science** | M03 microbiology, pressure/CO₂, drying, food-safety/sampling language may be mistaken for factory SOP | Physical risks and unsupported safety clearance | Food-safety + producer specialist line-edit sign-off; clear no-operations policy |
| **P0 — claims** | M07 farmer welfare, sustainability and EUDR interpretation sensitive to geography, transaction and future legal changes | Misleading claims or costly noncompliance | Independent agribusiness/ILO informed, environmental + legal dated review before publish |
| **P0 — scientific currency** | SCA/CVA nomenclature and Excelsa taxonomy can change; source ranges not universal | Foundational inaccuracies damage trust | Recheck official versioned registries at release, record source review date |
| **P0 — progress integrity** | New ID topology differs from legacy 32 Foundation lessons; old learner IDs/quizzes/certificates may be in use | Data loss, false completion/certificate states | Explicit old→new mapping, migration/rollback strategy, tests, preview validation |
| **P1 — measurement** | M05 simplified cup EY can be misrepresented as total extraction in immersion; water units confusing | Technically wrong or overly confident learner conclusions | Brewing science/water chemist review with unit tests and qualified wording |
| **P1 — agronomy** | Indonesia cultivar nomenclature, shade and Brix indicators vary | Unrealistic field practice or bad advice | Local agronomist/botanist field review |
| **P1 — roasting** | DTR, RoR, first-crack, color measurement and worker exposure need context | Overconfidence in sensor and worker safety inference | Qualified roasting SME + occupational safety review |
| **P1 — sensory/IP** | Copyrighted WCR/SCA wheel/forms and professional credential wording | Licensing/brand and learner trust risk | Media/legal review; no copied art; SCA credential boundaries explicit |
| **P1 — pedagogy** | 36 long-form lessons can overwhelm a beginner on mobile | Noncompletion, poor transfer, superficial MCQ success | 5–8-person first-pass qualitative pilot, cognitive interviews, followed by larger quantitative study |
| **P1 — assessment validity** | 76 MCQs + rubric thresholds are authored, not calibrated | Memorization, confusing distractors, unfair passing conditions | SME item analysis, learner pilot, second unseen transfer variant, review score data |
| **P2 — art direction** | Same headings/tables repeated in every lesson | Monotonous UI and heavy scrolling | Purposeful differentiated interaction while keeping text equivalents |

## 5. Required next gates (no short circuit to deploy)

**Gate A — Source and expert line-by-line review**
- Assign module-specific reviewer, source/standards edition and line-level claims; capture any corrections and disagreement transparently.
- Obtain local Indonesian producer/worker input for M07, not just press releases or industry brochures.
- For all safety-relevant claims, verify data can inform theory safely without operating instructions.
- Recheck SCA CVA and SCA-110 development state, EUDR operator timelines and taxonomic names just before publication.

**Gate B — Learning validation**
- Recruit beginner learners with varied prior exposure and equipment access.
- Test whether they can answer a genuinely new scenario, not only memorized answers.
- Assess whether historical context and farmer economics improve informed decisions, not merely feelings.
- Calibrate and revise provisional pass cutoffs. Do not claim formal mastery based solely on quiz scores.

**Gate C — Course interaction & accessibility**
- Design diverse learning activities, interactive where justified: branching farm decisions, editable evidence ledger, numerical brew mass-balance, sensory classification, value-chain flow map, final dossier.
- Provide mobile-first accessible text alternatives and no-equipment routes. No forced purchase.
- Verify any image/photo/chart licensing and avoid inaccurate AI-generated technical diagrams.

**Gate D — Implementation and risk control**
- Design data model and migration from **32 legacy** to **36 new** lessons without overwriting existing user progress.
- Preserve old quiz/certificate records and transcript semantics; develop explicit lesson-level equivalence/credit policy.
- Preview on separate branch/environment with CI gates, a rollback plan, course copy review and production owner approval.
- No writes to production data or deployed environment prior to passing reviews.

## 6. Evidence-based verdict

- **Manuscript completeness:** **PASS (36/36)**.
- **Assessment authoring:** **PASS (76/76 MCQ drafts across 7 modules + transfer rubrics)**.
- **Historical material preserved and assessed:** **PASS**.
- **Technical/source desk QA:** **PARTIAL / PROVISIONAL**; several sources only reviewed at reference/abstract level and some claims await stronger primary data.
- **External expertise:** **BLOCKED**.
- **Novice comprehension and validity:** **BLOCKED**.
- **Software, accessibility and production:** **NOT STARTED**.

**DO NOT MERGE OR DEPLOY.** The only safe statement is **Stage 03 complete as internal authoring** and **Stage 05 preliminary desk QA initiated**. “Top notch” remains an acceptance target, not a label earned by having long manuscripts.

## 7. Post-audit addendum — 2026-10-12 scientific and assessment red-team

Two focused audits now supersede some of the preliminary desk conclusions:

- [Scientific Fact-Check Batch 01](./SCIENTIFIC-FACT-CHECK-BATCH-01.md): independently checked official SCA/CVA standards, Kew taxonomy, 2026 water chemistry and label studies, FAO/WHO Codex, Fairtrade and the 2026 EU regulation amendment; **four substantive manuscript clarifications** made, not a 36-lesson line-by-line expert sign-off.
- [Assessment Red-Team Batch 01](./ASSESSMENT-RED-TEAM-BATCH-01.md): an objective MCQ leak found **72/76 longest-answer keys** in the original question drafts. M01 and M02 were rewritten, reducing their combined longest-key count from 15/16 to 3/16; the **current total 60/76** is still unacceptable for release.

**New high-priority gate:** All remaining M03–M07 item banks must be edited and tested for cueing, distractor plausibility, transfer and ambiguity. Prior “PASS assessment authoring” means *a file exists*, **not** that the questions are instructionally valid.

**M07/EUDR:** Application is not solely size-based; new product categories (coffee extracts/essences/concentrates, CN 2101 11 00) were brought into scope by Commission Delegated Regulation 2026/2102 with **30 December 2027** application. Existing in-scope coffee products still have 2026/2027 operator-stage dates. This nuance has been added to M07.L04.

**Release remains BLOCKED.** No SME external sign-off, learner pilot, code or production environment changes followed.
