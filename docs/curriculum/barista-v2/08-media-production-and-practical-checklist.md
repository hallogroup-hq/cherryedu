# Barista V2 — Instructional Media Production & Practical Evidence Specification

**Status:** Production-ready **requirements**, not produced footage, licensed media, independent barista sign-off, or a certification authorization. No production platform changes.

## Why this is a release gate

The 68 Markdown lesson drafts cannot teach physical positioning, safe steam operation, coffee flow diagnosis, milk texturing, and cleaning through text alone. The seven original, explicitly **schematic** SVG diagrams embedded in the flag-gated preview explain concept relationships, but they **must not be described as filmed evidence**. The learner needs to observe reliable physical demonstration, understand important variables, make a prediction before seeing an outcome, and then evaluate the result.

**Production policy:** film real equipment with an experienced barista educator; stage operations in a safe venue; verify every technique and label before publishing. AI-generated photo/video cannot be passed off as real technique demonstration. For externally sourced footage, record license and written permission for commercial educational reuse; YouTube embedding availability alone does not establish reuse rights.

## Priority filming and photography shot list

| ID | Lessons / learning target | Required visual content | Observation the learner must perform | Critical reviewer |
|---|---|---|---|---|
| B01 | M01 workstation | High-resolution real full-bar overhead + 45° wide shot, photographed from actual venue | Identify clean/dirty/pickup, grinder, group, wand, electrical/wet and handoff areas | Operating bar trainer + workplace safety |
| B02 | M01 guest-to-cup | Original editorial flow graphic with hold/escalate branches | Separate preference, order requirements and critical allergen constraints | Hospitality trainer |
| B03 | M01 allergen cross-contact | Real separate tools/labels, verified diagram of what *could* cross-contact | Recognize what cannot be guaranteed by changing milk alone | Food hygiene/allergen SME |
| B04 | M02 coffee bed science | Cutaway concept animation distinguishing input water, bed, retained water and beverage output | Identify which masses are measured, which values are only examples | Coffee science reviewer |
| B05 | M02 EY vs TDS | Animated **data-only** visual of estimated mass balance and missing measurements | Calculate estimates without inventing taste | Coffee science reviewer |
| B06 | M03 grinder | Actual static burr photo when powered off safely + external adjustment video per model manual | Recognize burr, hopper, retention and model-dependent numbers; no unsafe internal repairs | Grinder manufacturer manual + trainer |
| B07 | M03 basket & puck preparation | Three real close-up footage angles: dosing/distribution, level basket, tamp ergonomics | Distinguish dosed mass, bed prep, hand safety and likely inconsistency | Experienced espresso trainer |
| B08 | M03 shot anatomy | Split-screen of 2–3 real shots on same equipment with actual weighed yield + standardized timer start | Describe observable flow and uncertainty, not diagnose flavor by color | Trainer and sensory reviewer |
| B09 | M04 calibration | Measured shot logs tied to real tasting (participant consent; notes) | Identify one controlled change and limitations of sensory attribution | Calibration trainer |
| B10 | M04 diagnosis | Real observational shot footage for different plausible causes; do **not** claim single visual symptom proves root cause | Form competing hypotheses and request missing data | Espresso trainer |
| B11 | M05 steam safety | Real safe steam-wand/pitcher setup per model, including correct safe handling, PPE if required, cleanup | Identify steam burn zones and steps to stop safely | Trainer + machine manual + safety reviewer |
| B12 | M05 microfoam | Filmed aeration/texturing with overhead and pitcher-side views, actual product and temperature context | Compare bubble size, circulation, separations and material behavior | Milk/alternative trainer |
| B13 | M06 pour | Real continuous heart then tulip pour from setup to finish, not a still photo montage | Map height/flow/pitcher angle and stages without pretending shape guarantees drink quality | Latte-art trainer |
| B14 | M06 iced recipes | Real measured espresso/milk/ice assembly + time-lapse of dilution only if actual conditions documented | Predict ice melt vs measured result and avoid phantom caffeine calculation | Bar trainer |
| B15 | M07 filter / immersion / batch | Three real brewing methods with clear input/output mass log, filters and brew timeline | Distinguish water-through-bed vs immersion and service constraints | Filter instructor |
| B16 | M07 bypass | Filmed real bypass with weighed output + before/after concentration **only if actual TDS measured** | Explain dilution vs further extraction | Extraction reviewer |
| B17 | M08 hospitality | Two real/consented scripted service roleplays, including a “strong” clarification and a respectful allergy hold | Distinguish ambiguous desires and critical safety | Hospitality + allergen reviewer |
| B18 | M09 cleaning | Manufacturer-consistent cleaning (disassembled user-removable items only when authorized) with label and rinse evidence | Distinguish clean vs sanitized and barista vs technician boundary | Manual + safety reviewer |
| B19 | M09 machine fault | **Staged/simulated** fault description with safe shutdown/equipment escalation; never deliberately cause electrical fault or steam leak | Choose correct stop/escalate, not attempted internal repair | Qualified technician |
| B20 | M10 inventory | Realistic labeled stock (fictional customer data), FEFO vs FIFO and waste log | Rotate viable stock and spot hold condition | Food operations reviewer |
| B21 | M10 HPP | Clear labeled unit-cost graphic with actual inputs and verified arithmetic | Distinguish purchase price, usable yield, HPP, contribution and net profit | F&B controller |
| B22 | M11 ingredient evaluation | Real sourced ingredients, comparison of aroma/body/texture, verified allergen labels | Justify ingredients by role, not aesthetics | Bar trainer + food safety |
| B23 | M11 recipe iteration | Filmed V0, V1 and V2 with ONE intentional variable change each where feasible; distinct version cards | Predict, compare, record actual tasting and disagree constructively | Instructor + sensory panel |
| B24 | M11 operator handoff | Second barista follows **written** SOP without creator intervening; real weights/time and observable deviations | Assess repeatability and clarity of instructions | Bar trainer |
| B25 | M12 capstone | Observed realistic shift with safe staged disruptions and permitted remediation | Prioritize safety, guest requests, diagnosis, costing and handoff | Trainer panel + food safety |

**Footage is shot only in a supervised training venue**. No film may imply a physically dangerous procedure was safely executed when it was not. Do not demonstrate allergen cross-contact with real customer products.

## Media asset rights registry

Before an asset can be used, record:
- `asset_id`, `lesson_ids[]`, source and creator, capture date, location/venue permission, people/voice consent, commercial education license, release version, approved equipment model, captions and transcript.
- Full source file and backup; source-of-truth version; alt text; description of what the clip demonstrates **and cannot prove**.
- Claim review by named editor/trainer and expiry review date if equipment/ingredient guidance changes.
- No unauthorized SCA/WBC logo assets, protected exam slides, commercial photos, or misleading AI photo reproductions.

## UX specification

- Video player: controls accessible on keyboard, captions and clear playback speed; no autoplay audio; support pause/frame inspection.
- Instructional photo: zoomable areas with accurate callouts, not tiny low contrast text on a single photo.
- Chart: axis and units present; examples marked fictitious when so; narrated alternative and accessible table.
- The learner should **predict or identify something from media**, not merely tap next. Feedback follows attempt; missed steps can be replayed.
- New learner at phone width 360–390px must understand where to look, without horizontal overflow or a carousel that hides the next action.

## Practical evaluation and credential scope

**Digital understanding** can be assessed via the 36 changing-condition cases and 12 current formative checkpoints; these are **not high-stakes, calibrated exams**. Hands-on skill needs supervised observation.

Minimum trainer-observed rubrics should separately record:
1. Workstation sanitation and allergen management with independently blocking critical failures.
2. Grinder/espresso dosing, consistent process and measured output over repeated attempts.
3. Actual milk texturing and steam-wand safety on the relevant equipment.
4. Correct recipe assembly, label/ticket verification, service and safe handoff.
5. Source-backed equipment cleaning vs appropriate stop-work escalation.
6. One original coffee-based signature drink with actual sensory testing, precise recipe, costing and a second-person reproduction.
7. Recovery from an unfamiliar scenario; explanation of changed variables and a controlled next experiment.

**Credential claim:** practical observation by a bar trainer is still not automatically a BNSP/SCA certificate. Authorized LSP/AST arrangements and applicable assessment protocols must be documented separately.

## Release gate (current: BLOCKED)

- [x] Seven original **conceptual** SVG diagrams integrated on selected lessons.
- [x] 36 case-based formative exercises with new evidence after initial learner response.
- [ ] Real, rights-cleared/consented media assets from the relevant list above produced and loaded at appropriate lesson locations.
- [ ] Safety reviewer approves physical demonstrative steps; no unsafe action gets served to students.
- [ ] Actual novices can interpret media and perform a novel transfer task.
- [ ] Captions, alt text, keyboard controls and smartphone readability verified.
- [ ] Practical instructor rubrics created, reviewed and piloted with real equipment.
- [ ] Credential marketing independently cleared.

**Bottom line:** no publication of a purported professional barista training path based on seven diagrams and brief text chapters alone.