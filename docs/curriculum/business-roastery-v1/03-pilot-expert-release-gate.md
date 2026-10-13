# Business Roastery — Human Comprehension, Expert Review & Release Gate
**Authoring checkpoint:** 2026-10-13  
**Environment:** PR #10 authoring branch only, behind `CHERRYEDU_BUSINESS_ROASTERY_REVIEW=enabled`; not on production or the public student catalog.

## What the green CI actually proves
- Correct module inventory and renderer structure, absence of repeated canned text, reference shape, available routes, selected calculations and test interactions.
- It **does not** prove teaching comprehension, machine/facility safety, commercial viability, current legal classification, supplier price authenticity or handphone usability for real people.
- A student entering any 15 words can reveal the case explanation; this is **not semantic grading**. Capstone's section counter also only measures completed fields, **not proficiency**.
- No video demonstrations in this version; operational demonstrations must be supervised by qualified human instructors when appropriate.

## Proposed 6–8 participant formative pilot
Recruit learners with deliberately mixed prior knowledge: new coffee enthusiast (2), barista with no business responsibilities (2), junior supervisor or microbusiness beginner (2), and up to two small roasting/operations learners. Don't present fictional participants or model-generated personas as observed test results.

**Facilitator:** an observer not involved in writing the lesson. **Owner:** CherryEdu curriculum lead decides academic signoff. **Device:** primarily participant-owned phones (360–430 CSS px), varied Android/iOS when possible; include slow network and interrupted session checks on a safe, approved preview. No use of a production student database.

### Study tasks in sequence (do not coach during first attempt)

| Step | Task shown to participant | Observable evidence of understanding | Critical misconception to detect |
|---|---|---|---|
| 1 | Pick an asset-light, small-roaster or commercial model for a first 80 kg/month of *paid* orders and explain why | Names key fixed-vs-variable trade-off, evidence for PO, capacity and cash | 'Owning a machine is always cheaper' |
| 2 | Purchase 35 kg green from Makassar for a Sukabumi warehouse; use published Makassar→Jabodetabek rate Rp3,500/kg, minimum 50 kg | Computes Rp175,000 **base indicator only**; asks for first-mile, last-mile, commodity/tax/insurance/packing, actual RFQ | Treating Rp175,000 as guaranteed door-to-door cost or reversing directions |
| 3 | 60 kg invoiced/received; 2% reject; 15% roast loss; 0.5 kg post-roast QC; acquisition+inbound hypothetically Rp7.2m | Computes usable 58.8 kg, roasted 49.98 kg, saleable **49.48 kg**, raw/inbound ≈Rp145,513/kg | Dividing by 60 kg purchased or labeling green purchase price as finished HPP |
| 4 | Evaluate gross margin vs contribution when full absorbed HPP=Rp180k, net sale=Rp250k, channel variable=Rp32k | Can compute gross 28% and after-absorbed-HPP/channel difference Rp38k **without misnaming it contribution**; requests variable manufacturing cost for true contribution | Subtracting fixed absorbed factory overhead twice in BEP |
| 5 | Plan same-day supplier cash-out Rp1.5m and buyer cash-in Rp2m from opening cash Rp1m | Identifies temporary **−Rp500k** trough even when week closes positive | 'Closing week positive means no funding gap' |
| 6 | One roasted lot fails sensory while 20 packs already prepared for dispatch | Holds suspect batch, traces green→roast→packs, separates QA release from sales urgency | Shipping first and investigating later |
| 7 | Compare a direct roasted-bean producer vs contract manufacturer on OSS KBLI 10761, product permit, labels, halal and tax | Defines *questions* for the correct regulator and entity; avoids universal 'NIB is enough' or 'every CV has PPh 0.5%' | Teaching outdated tax/halal generalizations |
| 8 | A foreign buyer requests 100 kg roasted beans but quote is only to a seaport | Requests country classification, actual forwarder quotation, Incoterm, shipping/packing documents, payment safety and destination import rules | Presenting port quote as delivered-to-warehouse or promising export readiness |

The listed numbers are **educational examples**, except the clearly qualified public carrier estimate. The task on tax/halal is a decision about where to verify, not a licensing or legal exam.

## Observation protocol
For each step capture: device model / browser / viewport; whether the participant understands the task without explanation; whether the first numerical result is correct; any backtracking, mistaps, horizontal clipping or reading confusion; supporting quote/evidence cited; time only as contextual field; verbatim misunderstanding (with consent); response after a neutral prompt; correction opportunity; and a severity label.

### Suggested human rubric (0–3 per dimension)
1. **Model comprehension:** 0 memorized/incorrect, 1 partially correct, 2 correct with prompt, 3 independently explains causal logic.
2. **Calculation and units:** 0 wrong denominator/rate, 1 partial with critical mistake, 2 correct with prompt, 3 independently accurate and reproducible.
3. **Evidence discipline:** 0 invented rate or fake certainty, 1 source incomplete, 2 acknowledges unknowns with prompt, 3 distinguishes actual quote, published estimate and assumption independently.
4. **Decision revision:** 0 refuses to adapt, 1 identifies change but no correction, 2 reasonably revises with hint, 3 updates decision based on changed evidence and risk unassisted.
5. **Mobile usability:** 0 blocked, 1 completes only with facilitation, 2 usable with noticeable friction, 3 independently completes and can save/copy outputs.

Do **not** average these into a misleading 'certification score'; report them with task-level examples. To propose an academic pass, no participant should leave with an uncorrected critical safety/compliance misconception, and repeated task failure across 2+ learners must trigger a targeted content/UI revision and retest. This is a release policy recommendation for owner approval, not an observed result.

## Practitioner review queues (not performed yet)

| Reviewer | What must be checked | Evidence requested |
|---|---|---|
| Practicing Indonesian roastery operator | roast-to-saleable yields, capacity/throughput, equipment commissioning assumptions, incoming QC and lot traceability | Redlined case notes, one counterexample per questionable claim, dated signoff |
| Indonesian SME/management accountant | landed acquisition cost, fixed-vs-variable classifications, COGS vs cash, manufacturing overhead allocation, channel contribution, BEP and AR/cash cycles | Workbook recalculation on 2–3 independent invoice scenarios, issue log |
| Qualified food-safety/operations assessor | production zoning, contamination prevention, packing defects, batch hold and release, recall boundaries, safe treatment of hazards | Facility-dependent checklist, limitations and escalation points |
| Indonesian licensing/halal/tax professional | current KBLI/OSS obligations, BPOM vs SPP-IRT classification, labeling and halal stage, PP 20/2026 entity eligibility | Link to enacted rules/official guidance and signed exception decisions |
| Freight provider + actual green supplier | exact commodity and origin/destination, packaging, rates, chargeable kg, minimum, insurance, taxes, delivery scope, claims | Date-stamped written RFQ/quote; no booking required |

### Blockers before academic owner release approval
1. External written carrier/supplier RFQs for representative lanes and quantities; invented quote data prohibited.
2. Specialist/qualified practitioner feedback incorporated and independently rechecked.
3. Mobile pilot conducted with actual participants, severe issues remediated and repeat failures retested.
4. Owner approves the academic wording, scenarios, examples and all legally sensitive text.
5. Only after explicit owner authorization: plan the integration into the public CherryEdu curriculum, student account/progress and a controlled deployment. This is not permission to merge or deploy.

## Report sheet
For each participant record an anonymized ID and consent; for each task record first-attempt correctness, misconception, navigation friction, reading clarity, calculation audit, support needed, resulting decision revision, severity, fix, retest result, and reviewer/date. Avoid storing participant personally identifying data in this repo.
