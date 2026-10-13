# Q Grader & Sensory Specialist V2 — learning-experience correction and recheck

Date: 2026-10-13. Scope: candidate course only in `feat/qgrader-sensory-v2-curriculum`, with NO Vercel deployment, merge or learner-record mutation.

## Problems seen before correction

1. 40 lesson core texts average ~180 words; many terms were introduced too quickly for learners who passed Foundation but have never been through professional sensory training. Existing 40 case supplements and 10 investigations helped, but the first encounter with a topic often remained abstract.
2. 10 older SVGs are high-level flow diagrams: they have clear labels but don't adequately explain physiology, cupping stage transitions, physical defect appearances, or triangle-test mechanics.
3. M01, M02, M04, M05, M06, M07, M09, M10 lesson-2 'labs' were mainly three-choice comprehension prompts. Those aren't sufficient stand-ins for authentic sensory tasks.
4. Real practice was described at scattered lesson points but not packaged as a coherent safe progression with equipment, steps, recording method and limits.
5. The four CVA perspectives were taught as theory but students had no coherent working document to practice them as separated types of evidence.

## Actions implemented

- 10 substantial **novice concept bridges** (`SENSORY_V2_BRIDGES`), shown at the opening lesson of each module before specialized explanation. They connect definitions to intuitive analogies, common misinterpretations, and evidence-based decisions.
- Eight staged **self-directed sensory practice protocols**: (1) separate taste, aroma and texture; (2) classify aroma families using safe everyday references; (3) controlled A/B cupping; (4) blind duplicate; (5) triangle discrimination; (6) detect potential roasting problems without overdiagnosing; (7) basic green bean defect observation and sampling; (8) draft a four-lens CVA report. Each specifies safe materials, steps, written observations and limits. If learners have no equipment, they can study and document the test plan without faking results.
- A real **CVA study notebook** accessible from catalog: structured inputs for physical, descriptive, affective, extrinsic, then decision and future evidence. Keeps input in page memory only, has a realistic fictitious worked case, and offers copyable consolidated notes. It never auto-scores subjective answers or claims to replicate SCA forms.
- Four additional **explanatory SVG figures**: taste/aroma/mouthfeel pathways (M02), sensory reading stages (M04), schematic physical differences (M06), AAB triangle discrimination (M08). Semantic text, SVG title+description, and mobile-responsive widths.
- Direct links from relevant lessons to exercises and notebooks; do not hide practice in unrelated sections.
- New dedicated authoring test cases for user interaction and narrow mobile widths; robust content validator checks content inventories and source-level boundaries.

## Boundary of actual learning validation

- **Completed:** source content/inventory integrity and browser QA are automated; improvements make the scaffolding explicit.
- **Still necessary for actual effectiveness:** owner reads content; pilot at least one learner with Foundation-only skills and one practitioner with cupping experience. Ask each to explain flavor vs taste without jargon, blind duplicate variability, four-lens separation and why one score doesn't prove safety. Observe confusion rather than simply polling liking.
- **Photos/materials:** schematic green defects are not genuine calibrated reference images. A final professional physical grading practicum needs real reference beans or appropriately licensed, verified reference photos. Do not describe the schematic as a defect diagnostic tool.
- **CVA fidelity:** the educational notebook is not an official reproduced SCA form and does not issue CVA grades; use official current forms on https://sca.coffee/value-assessment for true professional assessment.
- **Licensure:** SCA Q license requires formal training and all examinations as defined by the current SCA program. These self-directed exercises do not prove sensory competence or grant a license.
- **Safety:** no tasting moldy/suspect coffee, food-grade references only, no dangerous concentration DIY chemistry, no operating roasting equipment as part of this unsupervised version.
- **No video** for the current release as requested by owner.

## Authoritative references

- SCA CVA framework, official forms, SCA-102/103/104/105: https://sca.coffee/value-assessment
- SCA Q Grader program, prerequisites, licensure and assessment schedule: https://sca.coffee/education/q-grader
- SCA preparation guidance: https://sca.coffee/education/how-to-prepare
- World Coffee Research Sensory Lexicon, 110 defined terms and references: https://worldcoffeeresearch.org/read-more/news/174-world-coffee-research-sensory-lexicon

Only update existing student course and lesson records after explicit owner approval and a migration plan that preserves access/progress. The new authoring course stays behind `CHERRYEDU_SENSORY_V2_REVIEW=enabled`.
