# CherryEdu Foundation V2 — Beginner Pilot & Expert Acceptance Pack

**Date prepared:** 2026-10-12  
**Status:** PREPARED FOR EXECUTION — NOT CONDUCTED / NOT APPROVED  
**Preview branch:** `release/foundation-v2-rc` · draft PR #2, no production release  
**Primary documents:** `PRODUCTION-READINESS-GATES.md`, `LEARNING-EXPERIENCE-AUDIT.md`, `FULL-36-LESSON-LEARNING-EXPERIENCE-REDTEAM.md`.

This is an **actual execution checklist**, not a claim that human learning outcomes or expert reviews have passed. Recording "PASS" requires attached evidence. Never use demo accounts, real paid data or production learner profiles for this trial.

## A. Lock what is being reviewed

Before each study session, record the **exact Git commit SHA**, preview URL/build ID, UTC/local session date, device/browser, participant consent, researcher ID, and screen size. Test the published preview build, not a screenshot or local manuscript only. If the SHA changes during review, mark affected observations **STALE** and retest.

- [ ] Latest SHA has content/assessment validation, TypeScript/build and all-course browser test success, with run URL
- [ ] Preview mode has no production payment, login, completion, credential, enrollment, XP or personal progress write
- [ ] Participants know this is an unfinished educational review, **not** an SCA/CQI certification
- [ ] Any accidental production-data connection, misleading professional claim, or security defect immediately stops the session

## B. Participant and session plan

Recruit an initial **5–8 varied beginner coffee learners**, including at least **two people without brewing equipment**. Vary reading familiarity, digital comfort, browser and phone/desktop where feasible. Do not cherry-pick only baristas or coffee enthusiasts. For this qualitative first round, don't turn a small participant count into a population success rate.

- Obtain voluntary informed consent, permission for any recordings, and ability to leave without penalty.
- Use pseudonymous **P01–P08** IDs, not real names in public Git. Do not capture passwords, paid transactions, identifying audio, faces, location or personal financial data in repository issues.
- Explain the preview's **worksheet answers are not saved to accounts**; allow participants to copy their text if they wish.
- Split lengthy full-course testing into two sessions or stagger module assignments to avoid fatigue; every critical task below needs multiple observations, but no learner is forced to read all 36 lessons in one sitting.
- Use two teaching routes: actual safe observation/tasting **when equipment is available**, and equivalent **data/diagram-based** questions for people without gear. Never suggest that reading simulated data equals actually tasting.

### Moderator protocol (consistent for every task)

1. **Before reading:** ask for a simple baseline explanation. Record words verbatim, without hints.
2. **During lesson:** allow scrolling/clicking naturally. Record navigation friction, confusing terms, misleading imagery, unresponsive controls and attempts to access the answer prematurely.
3. **Immediately after:** close or hide the lesson and ask for a concept explanation **in the participant's own words** plus a new example.
4. **Transfer:** supply a different but equivalent scenario, not an identical question copied from the lesson.
5. **After feedback:** ask what changed in their understanding; distinguish real revision from repetition of "tergantung", "tidak otomatis", or "butuh bukti" without a model of the underlying process.
6. Keep moderator prompts neutral: use "Apa yang membuatmu berpikir begitu?", not "Bukankah Liberika itu spesies?"

## C. Core beginner transfer tasks (must not skip)

| Target lesson | Unprompted learner task | Minimum evidence of understanding | Failure signal |
|---|---|---|---|
| **M01.L01–03** | Explain the difference between aroma, basic taste, mouthfeel and preference using two fictional cups | Can classify observation vs preference and record an uncertain observation without inventing tasting | Memorizes sensory labels, claims to have tasted fictional sample |
| **M02.L01–02** | **Explain Liberika to a friend who has never heard of it, before mentioning Excelsa**; place Coffea / Liberika / Bourbon / Jambi / Excelsa in the correct conceptual buckets | Describes Liberika as a coffee-producing plant species, its fruit/bean journey and why commercial names differ from botanical categories; only then introduces changing Excelsa nomenclature | Explains only Kew taxonomy, still cannot describe Liberika as an organism |
| **M02.L04 + M03.L01–03** | Identify stages cherry→parchment/green and distinguish washed, natural, honey, wet-hull in a new diagram | Can point to material physically retained/removed and distinguish drying from hulling | Selects process solely from expected flavors or swaps parchment vs green |
| **M03.L04–07** | Review a **fictional** lot record with missing drying/traceability notes | Can identify what is actually measured, what must be held for QC, and which claims cannot be made without evidence | Treats pH or a single moisture value as proof of safety |
| **M04.L01–05** | Interpret a simple synthetic roast-curve/phase picture, identify one supported and one unsupported conclusion | Knows heat changes physical/color/chemical properties and distinguishes a measurement from a guessed defect | Diagnoses a real machine fault from one fictional curve, or claims universal roast temperature |
| **M05.L01–06** | Compare two brewing scenarios and calculate simple estimated EY with supplied dose, beverage mass and TDS | Distinguishes strength from extraction, explains estimated solubles and an input/output boundary; catches physically impossible EY | Treats EY as flavor/quality score or accepts EY greater than 100% |
| **M06.L01–05** | Compare subjective liking vs sensory description and name the four CVA evidence types | Describes what physical, descriptive, affective, extrinsic each measure and does **not** claim professional qualification | Converts an opinion into an objective score or presents unofficial form as certified CVA |
| **M07.L01–05** | Trace one fictional P-17 lot through coffee value chain and calculate revenue minus documented costs | Can name actors, payment evidence and historical labor context, while separating farm income from customer price | Claims price premium proves farmer living income, ignores affected workers or erases colonial context |

### Special anti-fake-interactivity audit

For every learning block tested, the observer must answer:
- Was there an **actual observable learner input** (click, select, reorder, calculate, write), or only text saying "coba"?
- Did the activity **withhold the model answer** before independent effort?
- Could the learner explain what they were deciding and **why the feedback applied**?
- Was a true image/diagram displayed when spatial/physical comprehension required it? A promise of a "card" or photo is **not evidence**.
- Was the component keyboard-operable and understandable on a narrow phone?
- Did the activity reduce confusion, or add cognitive load without changing the mental model?

A working button alone is not a learning PASS.

## D. Recording format

Create **one private observation record per participant/task**, with these fields:

| Field | Required value |
|---|---|
| Participant / session | Pseudonym; date; consent yes/no; review SHA/build |
| Prior familiarity / equipment | Broad levels only; avoid unnecessary sensitive profile data |
| Task and route | Lesson ID + real-safe-observation or synthetic-data route |
| Baseline understanding | Verbatim summary, no moderator hint |
| Activity behavior | Tried/not tried, unexpected action, answer prematurely exposed yes/no |
| Transfer explanation | Verbatim explanation to a *new* case |
| Outcome | 0 = cannot explain; 1 = repeats labels; 2 = coherent basic model; 3 = applies accurately to new case |
| Severity | P0 false or unsafe mental model; P1 high confusion/blocking accessibility; P2 editorial friction |
| Evidence | Anonymized note or consented screenshot/video location stored outside public Git |
| Proposed remedy | One concrete change, responsible owner, retest ID |

The 0–3 scale is **diagnostic**, not a certification score. Do not invent a blanket pass rate, time limit or cut score without real calibration. Explicitly distinguish **not tested** from **failed** and **passed**.

## E. Expert sign-off matrix (all currently NOT REVIEWED)

| Scope | Required qualified reviewer | Evidence required |
|---|---|---|
| M02 taxonomy, varieties, maturity | Agronomist / plant taxonomist with Indonesian cultivar expertise | Claim + figure IDs, dated source interpretation, local name verification |
| M03 processing / fermentation / food safety | Postharvest scientist and food-safety professional | Hazard boundaries, water activity, OTA/Codex, process figure review |
| M04 roast mechanisms / workplace safety | Roaster plus relevant machine/occupational safety reviewer | Curve legend, gas/ventilation caution and safety wording |
| M05 brew science / water | Extraction and water-chemistry practitioner/scientist | EY mass-balance, hardness/alkalinity, tool validity, equipment statements |
| M06 sensory / CVA | Current CVA-qualified instructor / relevant standards expert | Versioned SCA method and credential boundary, diagram and item check |
| M07 history / producer economics | Historian, Indonesian producer/economic/worker representative | Ethiopia–Yemen–Priangan chronology, economic units, worker impact |
| M07 legal / sustainability | Relevant trade/environmental reviewer | Time-sensitive EUDR and unsubstantiated sustainability claims |
| Cross-course imagery / licensing | Asset and accessibility reviewer | Rights-cleared reference, photographer/source and allowed uses, alt text |
| Cross-course learning | Pedagogy/assessment reviewer | All 76 MCQs, distractor plausibility, learner evidence, retake variants |

Sign-off must include **reviewer competence, SHA, lessons/claims reviewed, date, issue list, what was actually corrected, remaining risks, and an explicit decision**. Do not manufacture names, signatures or completion dates. No AI-only decision substitutes for expert approval.

## F. Accessibility/device and non-destructive data gates

- [ ] All 36 pages opened on representative phones and desktops; no text clipping or obstructed controls
- [ ] All input, sort controls, disclosure and figure descriptions operated by keyboard
- [ ] Screen-reader landmark/label/status review and reduced-motion/zoom/low-bandwidth inspection
- [ ] Original V1 progress, quiz attempts, certificates and signed verification remain intact
- [ ] Server-authorized profile and payment checks, RLS and role isolation validated in staging (not real data)
- [ ] Cross-device edition-scoped progress migration dry-run with backup/restore and rollback, including guest/localStorage edge cases
- [ ] Rights/license decisions recorded for real instructional photos and protected SCA/WCR material

## G. Release decision rule

**Remain HOLD** until the specific code SHA has: fresh CI evidence; addressed/verified P0 novice findings; qualified expert approvals; calibrated assessments; cleared teaching imagery; accessibility evidence; staging security fixes; no-loss migration; rehearsed rollback; and explicit release-owner authorization. An empty study log is NOT a PASS. Do not merge PR #2 into `main`, activate V2 certificates, or change production data on the strength of this document.
