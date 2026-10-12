# CherryEdu Foundation v2 — Module 01 Content QA and Claim Ledger

**Created:** 2026-10-12  
**Status:** Internal desk review — NOT professional certification / NO expert sign-off / NOT learner-tested  
**Scope:** 3 written lessons, 8 module exit questions, applied assignment and rubric.  
**Baseline:** Stage 02 Curriculum Master Blueprint; branch `curriculum/foundation-v2`.

## 1. What was inspected

| File | Approx. words (all text, including frontmatter and editorial refs) | Format | Status |
|---|---:|---|---|
| [M01.L01](../03-lessons/M01-L01-apa-yang-kita-rasakan.md) | 1,663 | Full Markdown lesson | Draft verified present |
| [M01.L02](../03-lessons/M01-L02-mengapa-dua-cangkir-berbeda.md) | 2,013 | Full Markdown lesson | Draft verified present |
| [M01.L03](../03-lessons/M01-L03-eksperimen-rasa-pertama.md) | 2,075 | Full Markdown lesson | Draft verified present |
| [M01 module exit](../04-assessments/M01-module-exit.md) | 1,640 | 8 MCQ briefs + exercise rubric | Draft verified present |

**Desk inspection date:** 2026-10-12. Word counts include metadata, examples, answers and editorial references: use separate learner-time measurement before displaying reading estimates.

## 2. Curriculum traceability

| Outcome from Stage 02 | Where taught | Where demonstrated | Integrity concern |
|---|---|---|---|
| M01.L01: taste/aroma/mouthfeel/description/preference | L01 §§1–5 | L01 §6 questions; M01-Q01–Q03 | Without actual coffee it tests vocabulary & reasoning, not true odor identification |
| M01.L02: ≥3 causes across stages, confounders, missing evidence | L02 §§1–7 | L02 §8 tasks; Q04/Q06/Q08 | Causal inference exercises are simulated, not scientific experiments |
| M01.L03: structured two-sample notes, difference between observation/liking, uncertainty | L03 §§2–8 | L03 §§5–8; Q05/Q07; module performance task | Path A voluntary sensory experience; path B analysis of fictional record only |
| Module outcome: defensible reasoning from basic sensory comparison | Across L01–L03 | Eight-module-exit items + a rubric | No novice calibration; propose thresholds, do not claim validity |

## 3. Scientific claim ledger (desk-checked reference anchors)

| Claim | Location | Reference | Evidence kind | Limits to teach | Status |
|---|---|---|---|---|---|
| Flavor is a multisensory experience; taste, aroma and oral tactile factors should be differentiated | L01 §§1–2 | [SCA Coffee Decoded](https://sca.coffee/sca-news/coffee-decoded-5-flavor-chemistry), [SCA Mouthfeel](https://sca.coffee/sca-news/coffee-decoded-17-mouthfeel) | Official expert explainer | Terminology evolves; flavor often colloquial | DESK VERIFIED / SME PENDING |
| Retronasal olfaction contributes to food flavor perception | L01 §2 | [Goldberg et al. review](https://pubmed.ncbi.nlm.nih.gov/27646486/) | Peer-reviewed review | Individual and sensory-context differences | DESK VERIFIED / SME PENDING |
| Bitter taste can modify retronasal coffee aroma perception in a studied setting | L01 §2 | [Paravisini et al. 2019](https://pubmed.ncbi.nlm.nih.gov/31581213/) | Peer-reviewed experimental study | Particular compounds and experimental design; no general flavor law | DESK VERIFIED / SME PENDING |
| Descriptive sensory recording and liking/affective assessment are distinct purposes | L01 §4; L03 §4; Q02 | [SCA CVA](https://sca.coffee/value-assessment/), [SCA Affective](https://sca.coffee/sca-news/cva-in-action-affective-9mt5m) | Current standard documentation / explanation | Simplified Foundation concept, not formal CVA test | DESK VERIFIED / SME PENDING |
| Coffee lexicon organizes 110 attributes with references | L01 §5 | [WCR Sensory Lexicon](https://worldcoffeeresearch.org/read-more/news/174-world-coffee-research-sensory-lexicon), [Chambers et al.](https://doi.org/10.1111/joss.12237) | Official research resource / peer-reviewed study | Does not confer calibrated sensory expertise | DESK VERIFIED / RIGHTS CHECK PENDING |
| Coffee temperature affects sensory description in tested brewed coffee samples | L02 §3; L03 practice / Q04 | [Chapko & Seo](https://pubmed.ncbi.nlm.nih.gov/31108788/); [Adhikari et al.](https://pubmed.ncbi.nlm.nih.gov/30599987/) | Peer-reviewed experiments | Panel/sample temperatures limited; cannot prescribe universal trend | DESK VERIFIED / SME PENDING |
| Origin information/stories can influence some sensory evaluations | L02 §4 | [Artêncio et al.](https://doi.org/10.1111/joss.12827) | Peer-reviewed study | One fine robusta and particular tasters/cues; not general global rule | DESK VERIFIED / SME PENDING |
| A sensory note does not chemically demonstrate a specific ingredient, region, altitude or roast recipe | L01 §§3–4; L02 §§1–2; Q03/Q08 | [WCR Lexicon](https://worldcoffeeresearch.org/read-more/news/174-world-coffee-research-sensory-lexicon); [SCA Specialty Definition](https://sca.coffee/what-is-specialty-coffee) | Methodological inference / official descriptor context | Label/ingredient claims require independent verification | REASONED INFERENCE / SME PENDING |
| Retrieval practice and distributed review can aid learning | Module sequence/assessment design | [Dunlosky et al. 2013](https://doi.org/10.1177/1529100612453266) | Evidence review in educational psychology | Transfer to this CherryEdu implementation is untested | DESK VERIFIED / LEARNER PILOT PENDING |

**Policy:** Source-linked = not yet claim-by-claim externally signed off. Do not put a “fully scientifically validated” label on content based on this table alone. We have not run experiments or independently audited every sentence; scenario values and invented examples are explicitly marked as simulations.

## 4. Assessment validity audit

- 8/8 exit questions present; 2 retrieval, 3 application, 2 evidence interpretation, 1 claim critique.
- Correct answer-key distribution is A=2, B=2, C=2, D=2. Balance helps reduce pattern issues but **is not psychometric validation**.
- Each question includes single best answer, rationale, distractor analysis, remediation destination and misconception tag.
- Three lessons contain low-stakes checks, plus the optional real-sample or no-equipment simulated practice.
- **RISK:** Self-assessed written responses and multiple-choice items are inadequate to attest sensory acuity or professional cupping.
- **RISK:** 8 questions alone yield coarse score steps of 12.5 percentage points; '≥80%' means at least 7 correct. Proposed capstone-style assignment minimum 9/12 is NOT evidence-based until calibrated.
- **RISK:** Existing application quiz engine may not handle performance task rubrics/variant generation; technical validation deferred, since no code was changed.

## 5. Wording and beginner UX review

**Positive:** Begins with familiar question about 'jeruk' and avoids specialty jargon until concrete context exists; introduces sensory categories through simple examples; keeps causal inference separated from observation. Learner can use zero equipment. Avoids fake tasting visualization.

**Needs pilot feedback:**
1. Whether 'aroma-associated sweetness', 'retronasal', 'mouthfeel' still overwhelm true first-time learners; consider expandable glossary.
2. Whether 1,663–2,075 words per lesson is more than ideal on mobile; do not automatically split into microcards. Use pilot reading/quiz behavior first.
3. Whether learners can accurately distinguish 'pahit' as taste from 'panggang' as aroma/flavor in the simulated panel notes.
4. Whether local examples cover participants with different sensory vocabularies without creating new stereotypes.

**Need production design later:** Semantic tables, mobile responsive layouts, accessible illustration/alt text where a diagram adds genuine learning value. Text should make sense without any image. Not designing UI in this docs stage.

## 6. Editorial gates

| Gate | Finding | Status |
|---|---|---|
| G03-A Full text for three lessons | 3/3 present with sections, activities, answers and references | PASS — structural |
| G03-B Mapped to Stage 02 | Three matched lesson slots, source IDs, target outcomes and evidence | PASS — desk check |
| G03-C Scientific source presence | Primary official and peer-reviewed anchors present; 9-topic claim register | PASS — reference presence only |
| G03-D No confident pseudoscience | Critical historical issues (taste zones, deterministic altitude/notes, simulation as reality) explicitly blocked | PROVISIONAL desk pass; SME pending |
| G03-E No-equipment access | Path B is genuinely doable from fictional text; limitations clearly stated | PASS — desk check |
| G03-F Assessment design | 8 items, rationale and rubric created | PASS — drafting; not psychometric |
| G03-G Human scientific sign-off | No independently commissioned sensory/education reviewer | **BLOCKED** |
| G03-H Learner comprehension pilot | No real beginner testing | **BLOCKED** |
| G03-I Deployment readiness | No app or schema migration work, no UI QA | **NOT STARTED** |

**Net decision: APPROVED FOR INTERNAL ITERATION ONLY. NOT APPROVED FOR PRODUCTION.**

## 7. Next action (Stage 03 iteration / Stage 04 preparation)

- Conduct two-pass editorial review with coffee sensory SME and learning-design reviewer.
- Pilot with at least **5–8 true beginners as an initial formative usability sample**, not a statistical validation. Observe confusion, time spent and evidence from Q04/Q06/Q08.
- Edit lessons based on test results; log change reasons.
- Once module 01 clears the gates, reuse standards for M02, with its own scientific research.
- Content publishing requires separate decision and progress-ID/quiz migration planning; current legacy seed data is untouched.

No teacher, Q Grader, sensory scientist, real student or expert has been contacted by this document; expert/learner checks remain open.
