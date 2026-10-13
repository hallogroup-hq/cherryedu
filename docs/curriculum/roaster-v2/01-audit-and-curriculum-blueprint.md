# Roaster Specialization V2 — Scientific and Learning-Experience Audit

**Working branch:** `feat/roaster-specialization-v2-curriculum` (isolated; never replace `path-roaster` silently).
**Approval:** CherryEdu owner validates the final academic content. No demonstration videos are required for the current version. The web course is not a practical-operation licence or an SCA certificate. No deployment, merge, progress migration, or existing entitlement changes without separate approval.

## Why the existing path is not safe to copy

Audit performed on `lib/data/paths/roasterData.ts` on main at `9cdfd5e`. Its six-module organization starts with relatively advanced jargon before a beginner has a real roasting mental model. Key corrections required:

| Legacy teaching | Audit problem | New learner rule |
| --- | --- | --- |
| RoR/DTR `12–18%` as precise target | DTR is a descriptive time fraction, not proof of development or a portable optimum. | Read crack, color, weight-loss, sensory, device context and trajectory together; never prescribe a fixed DTR. |
| High-density beans always require higher charge temp | Charge temp depends on machine, batch, probe, initial state, and risk. | Density is one of several hypotheses to test; do not automatically increase power. |
| Natural process implies exterior sugar deposits and `−10–15°C` | Oversimplifies bean structure and processing effects; unverified numeric universal instruction. | Characterize actual lot, batch context and small repeatable trials. |
| Water activity `0.50–0.60` = SCA absolute specialty safety rule | Moisture and aw indicate different water properties; mold risk cannot be determined by a single number out of context. | Record both where measured; require condition, method, storage, supplier and health protocols. |
| Specific first-crack temperature across machines | Probe placement, response time, thermal mass and sensor settings differ. | Log the first audible crack and conditions on this machine; compare like to like. |
| Smooth RoR alone = successful roast | RoR is derived and smoothing settings affect it; an appealing curve can still taste bad. | Use independent physical, sensory and process evidence. |
| Underdevelopment always means sour, dark always means quality failure | Sensory traits overlap with origin, grind, brewing and evaluation bias. | Blind compare matched preparations, test competing explanations, avoid diagnosing by one descriptor. |
| `Baking` is a single visible roast defect | Empirical work assesses time-temperature profiles and sensory responses; wording can become over-certain. | Teach what was observed, what is hypothesized, and what test can distinguish them. |

## Learner, empathy and graduate behavior

Target learner: Indonesian novice/intermediate roaster, including operators who have learned recipes from a head roaster and may know a few dashboard numbers but struggle to explain why. Many have no personal machine, no commercial color meter or water activity meter. **Do not exclude them:** include tabletop data cases using explicitly simulated numbers; practical decisions must remain supervised and follow an exact machine's manual.

By completion, a learner should be able to (1) write a sensory/product roast brief, (2) screen a green-coffee lot without guessing its potential, (3) explain heating and sensor limitations, (4) read and log a baseline roast, (5) propose a single justified manipulation and its risks, (6) run a controlled roast comparison, (7) interpret cupping and color/weight-loss together, (8) respond to abnormal production data safely, (9) draft an auditable QC release decision, (10) defend an unfamiliar scenario and revise after new evidence. A learner cannot demonstrate real machine competence solely by completing web tasks.

## Sequencing and dependency: 10 modules × 4 lessons

1. **Tujuan Roasting dan Keselamatan**: roast brief → roasting as controlled transformation → safe workspace/stop-work → observation notebook.
2. **Mengenal Lot Green Coffee**: lot identity/defects → moisture vs aw → size/density/processing without stereotypes → storage and acceptance.
3. **Mesin dan Perpindahan Panas**: how heat enters → thermal inertia and batch size → gas/airflow/drum/cooling controls → startup/shutdown/maintenance boundaries.
4. **Membaca Profil tanpa Tertipu Angka**: event log & milestones → BT/ET/probe limitations → RoR, smoothing & noise → first crack & DTR as context.
5. **Perubahan Fisik dan Kimia**: water and volume → browning/Maillard/Strecker → cracks and development decisions → flavor trade-offs vs roast degree.
6. **Eksperimen Profil secara Terkontrol**: safe baseline and preheat → controlled A/B design → responsive batch changes → interpreting contradictory data.
7. **Sensori dan QC Produk**: roast color/measurement → SCA-informed standardized cupping → blind descriptive vs preference → distinguish roasting vs brewing.
8. **Diagnosis Masalah**: surface scorch/tip and color variation → slow/baked/underdevelopment evidence → RoR crashes/flicks/sensor artefacts → emergency hold and root cause.
9. **Produksi yang Bisa Diulang**: handoff & logs → batch-to-batch variability → storage/degas/packaging → release, segregation and traceability.
10. **Karya Roaster dan Keputusan Bisnis**: blend/pre-post experiments → yield & waste and price implications → communication/ethics → capstone decision under surprises.

**Required lesson progression:** observe a concrete situation → explain mechanism carefully → compare at least two possible causes → predict consequences → choose an ethical/safe experiment or simulated comparison → interpret results → revise and transfer. Each module has two adaptive case questions that present NEW information only after the learner commits to an initial response; two diagnostic questions with rationale; one meaningful computation or observation lab; one original explanatory diagram where it improves conceptual clarity. The same generic checklist should never be pasted into every lesson.

### Field boundaries

- No global charge/turning point/drop temp, gas percentage, total roast time, airflow or color target; all are machine/process/brief dependent.
- No absolute moisture/aw cutoff taught as automatically proving food safety; any sample handling must follow supplier, applicable local safety rules and equipment procedure.
- RoR = derivative over a chosen time window (unit °C/min or °F/min); display smoothing and probe lag can alter what is seen.
- DTR = (drop time − first crack start) / total roast time × 100%, when FC exists and is logged reliably. This is a fraction, not a quality score.
- Weight loss = (green mass − roasted mass) / green mass × 100%. Loss includes moisture and other volatile losses; cannot infer flavor solely from percentage.
- Color is a useful roast-degree indicator with defined measurement method; never a sensory guarantee.
- Descriptive assessment and hedonic preference must be separated. Use SCA CVA *as a reference framework*, not as accreditation.
- A roast comparison is not a meaningful profile experiment when coffee lot, batch mass, machine preheat, color, grind, sample age or brew preparation have all changed at once.
- Never tell novices to fight a chaff or roaster fire, defeat interlocks, service gas systems, open hot collectors, or work without training. Follow manufacturer emergency protocol, evacuate/call appropriate assistance, and stop operation.

## Evidence standard and reference ledger

1. SCA Coffee Skills Program — roasting foundation/intermediate/professional competencies and machine safety: https://education.sca.coffee/coffee-skills-program
2. SCA CVA framework (physical / descriptive / affective / extrinsic): https://sca.coffee/value-assessment
3. SCA standards registry; SCA-110 and SCA-131 **in development**, not adopted numeric rules: https://sca.coffee/research/coffee-standards
4. SCA Q-grader prep for roast problems and matched cupping samples: https://sca.coffee/education/how-to-prepare
5. Alstrup et al. (2020), roast development and sensory/chemical outcomes, one bounded experimental design: https://www.mdpi.com/2306-5710/6/4/70
6. Giacalone et al. (2019), researched roast fault sensory distinctions: https://www.sciencedirect.com/science/article/pii/S0950329318302015
7. Münchow et al., cross-study influence of color vs roast time: https://researchprofiles.ku.dk/en/publications/roasting-conditions-and-coffee-flavor-a-multi-study-empirical-inv
8. Anokye-Bempah et al. (2025), roast color research, 5-kg drum-roaster experiments: https://pmc.ncbi.nlm.nih.gov/articles/PMC12234775/
9. Artisan official curve and RoR delta span documentation: https://artisan-scope.org/docs/curves/
10. Cropster official RoR definition: https://help.cropster.com/en_US/using-roasting-intelligence/about-rate-of-rise-ror
11. Rao, first-hand correction of interpretation of DTR: https://www.scottrao.com/blog/2020/3/29/coffee-roasting-fundamentals
12. Giesen W6A manual: cleaning and fire prevention are equipment-specific: https://www.webstaurantstore.com/documents/pdf/w6a_installation_and_operation_manual_v1.0_-_en.pdf

These sources inform specific claims, not borrowed copy. Device manuals have priority for procedures. Publish date, model and method matter.

## Quality and release gates

- R0 audit old claims and risk register.
- R1 verify skill dependency and different prior learner knowledge.
- R2 40 distinct substantive lessons, specific examples + transfer problems. No generic filler.
- R3 meaningful no-video visuals, robust keyboard/mobile interactions and accessible formulas.
- R4 cases, misconception checks and test-specific explanation.
- R5 scientific claim pass; do not imply SCA credential.
- R6 code typecheck/build/e2e and content-leak test; regression check old student enrollment, badges, quizzes, payments and progress remain unchanged.
- R7 owner academic sign-off and real novice/roaster comprehension test before merge or public publication.

**Source/QA terminology stays in this internal document only; no “Draft”, “Preview”, “Beta”, “TBD”, reviewer instructions or approval notes in student content.**
