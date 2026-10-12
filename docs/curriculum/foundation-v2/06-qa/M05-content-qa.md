# CherryEdu Foundation V2 — Module 05 Research, Measurement QA & Release Gates

**Authoring snapshot:** 2026-10-12.  
**Status:** Six lesson drafts + 12 exit-item briefs and transfer rubric created. **Internal editorial and reference QA, not independent scientific validation.**

## 1. Why the module is six lessons

The former five-lesson topology put **measurement and troubleshooting** inside the same undifferentiated final brew experiment. These are distinct competencies:
- Interpreting water input mass, beverage output mass, beverage TDS and estimated extraction yield, including numerical and instrumental limitations.
- Designing a fair comparative brew, with one intentionally changed variable, repeat observations and transparent evidence.

Therefore **M05.L05** is a new lesson on TDS/EY measurement, the historical Control Chart and diagnosis; the experimental unit becomes **M05.L06**. Foundation now has **35 unique lesson slots** across 7 modules: M01=3, M02=5, M03=7, M04=5, M05=6, M06=4, M07=5. **M07.L01 coffee history is mandatory** and untouched.

## 2. Manuscript/assessment evidence

| Unit | Full source file | Observable learner evidence | Common false claim prevented |
|---|---|---|---|
| M05.L01 | [Ekstraksi vs kekuatan](../03-lessons/M05-L01-ekstraksi-vs-kekuatan.md) | Explain two synthetic drinks with same EY, different concentration | Strong coffee ≠ necessarily high extraction |
| M05.L02 | [Grind/ratio/temp/time](../03-lessons/M05-L02-variabel-gilingan-rasio-suhu.md) | Identify controlled variable/confounds and explain ratio convention | “1:16” means identical thing in espresso and filter |
| M05.L03 | [Air mineral dan alkalinitas](../03-lessons/M05-L03-air-mineral-dan-alkalinitas.md) | Distinguish water EC/TDS vs hardness, alkalinity and pH; interpret two reports | Solvent-full myth and Mg→fruity, Ca→chocolate stereotypes |
| M05.L04 | [Immersion vs percolation](../03-lessons/M05-L04-immersion-vs-percolation.md) | Describe flow/contact/filter/bypass using two fictional methods | One device guarantees best flavor; grind irrelevant in immersion always |
| M05.L05 | [Membaca TDS dan EY](../03-lessons/M05-L05-membaca-tds-ey-diagnosis.md) | Compute one estimated EY using correct mass and TDS units | Input water mass = beverage output mass; chart-zone score = flavor |
| M05.L06 | [Eksperimen satu variabel](../03-lessons/M05-L06-eksperimen-seduh-satu-variabel.md) | Experiment plan, data log, alternative cause and safe next test | Synthetic tastes presented as real, or one A/B proves global causal law |
| Assessment | [M05 12-item exit](../04-assessments/M05-module-exit.md) | 2 retrieval, 4 application, 4 evidence, 2 critique + transfer rubric | Cannot pass by only memorizing recipes |

## 3. Scientific and authoritative source ledger

| Claim | Primary source | Precise support | Limits/release check |
|---|---|---|---|
| Strength/TDS and extraction are distinct quantitative constructs | [SCA chart critique](https://sca.coffee/sca-news/25/issue-13/towards-a-new-brewing-chart-xpj8t), [UC Davis publications](https://coffeecenter.ucdavis.edu/faculty-research/publications) | Separate axes represent solubles concentration and extraction yield | Source-backed; not claim chart values are compulsory |
| 1950s/legacy chart “ideal” zone does not cover consumer variability and full range of sensory notes | [SCA Towards a New Brewing Chart](https://sca.coffee/sca-news/25/issue-13/towards-a-new-brewing-chart-xpj8t), [Guinard et al., 2023](https://pubmed.ncbi.nlm.nih.gov/36988107/), [UC Davis chart 2025](https://coffeecenter.ucdavis.edu/news/uc-davis-coffee-center-contributes-research-new-brewing-control-chart) | Historical calibration and new data with sensory and consumer segmentation | Do not present new chart as universal predictive truth; not reproducing copyrighted chart |
| At fixed TDS/EY, within 87–93°C studied drip brews, temperature difference had little sensory impact | [Batali et al., Scientific Reports (2021)](https://pubmed.ncbi.nlm.nih.gov/33020560/) | Experimental results in constrained batch/temperature range | Does NOT mean temperature irrelevant to extraction dynamics or other methods |
| Immersion at effective equilibrium has distinct extraction/ratio behavior; retained coffee liquid affects yield estimates | [UC Davis immersion model (2021)](https://pmc.ncbi.nlm.nih.gov/articles/PMC7994670/) | Tested full immersion range and gravimetric/equilibrium analysis | Simplified cup EY is only an estimate; cannot universalize immersion E≈21% |
| Grind and dose affect extraction/flow depending equipment geometry | [Wang et al. 2016 capsule brewing](https://pubmed.ncbi.nlm.nih.gov/28460981/), [UC Davis basket studies](https://coffeecenter.ucdavis.edu/faculty-research/publications) | Contextual experimental mechanics | Capsule results not universal for pour-over; don't prescribe grinder setting |
| Magnesium/calcium interaction with coffee compounds | [Hendon et al., 2014](https://pubmed.ncbi.nlm.nih.gov/24802110/) | Computational binding-energy model of selected compounds | Not direct proof Mg-floral or Ca-chocolate |
| Hardness vs alkalinity sensory impacts in recent 2026 study | [Rune et al., J Food Sci Sept 2026](https://pubmed.ncbi.nlm.nih.gov/42746805/), [Wiley full article](https://ift.onlinelibrary.wiley.com/doi/10.1111/1750-3841.71434) | Bicarbonate influenced perception in one Colombian Kachalu coffee; hardness-only comparisons showed limited effects | One coffee/roast and study design; not a universal equation of taste |
| Water hardness, alkalinity, pH and EC are distinct parameters | General analytical chemistry; [recent 2026 water paper](https://pubmed.ncbi.nlm.nih.gov/42746805/) | Study explicitly manipulates Ca/Mg/bicarbonate & sensory; confirms importance of separating dimensions | Water chemist must check basis CaCO3, conversions and instrument discussion |
| No clearly listed *new current published SCA normative water mineral specification* on standards registry as of 2026-10-12 | [SCA published standards register](https://sca.coffee/research/coffee-standards) | Current list comprises CVA, certifications and development standards, no numeric water standard listed | Do not claim this disproves old SCAA guidance, the Water Quality Handbook, or machine manufacturer specifications; registry can change |
| Retrieval/self-explanation supports learning practice | [Dunlosky et al. (2013)](https://doi.org/10.1177/1529100612453266) | Evidence-based learning techniques in general | Not proof CherryEdu learners have attained competency |

## 4. Numeric and evidence audit

**Percentage formula in L05**: estimated EY (%) = beverage mass (g) × measured beverage TDS (%) / dry coffee mass (g), where “1.30%” is entered as 1.30; if using TDS fraction 0.0130, multiply by 100.

Numerically tested examples (synthetic):
- 15 g dose, 225 g beverage, 1.30% coffee TDS → 225×1.30/15 = **19.50%**.
- Using wrong *water input* 250 g → 250×1.30/15 = **21.67%**, clear example of measurement error.
- 18 g, 270 g, 1.20% → **18.00%**; 18 g, 300 g, 1.20% → **20.00%**.
- 20 g, 300 g, 1.35% → **20.25%**.
- M05.L06 sample A: 15 g, 215 g, 1.25% → **17.9167%**; B: 15 g, 210 g, 1.30% → **18.20%**, a difference of ~0.283 percentage points.

These examples **calculate dissolved coffee mass inferred from the collected beverage**. For immersion, the mass of soluble coffee remaining in retained liquid complicates total E; **don't interpret the simplified result as lab-validated total extraction**. Refractometry is assumed; no measurement physically made. Avoid using synthetic results for empirical claims or learner sensory calibration.

**Input water vs output drink:** Brew ratio convention explicitly distinguishes 1:16 filter example based on water-in from espresso 1:2 convention based on beverage-out. Don't mix them in exercises.

**Water units:** hardness/alkalinity examples in L03 report mg/L **as CaCO₃ equivalent**; these are not direct masses of bicarbonate or calcium ions. pH and alkalinity must not be treated as equivalent; EC-derived ppm does not identify ionic composition.

## 5. Assessment validity and boundaries

- Twelve single-best-answer stems contain answers, rationales and remediation targets.
- Item structure: 2 retrieval + 4 application + 4 interpretation + 2 critiques.
- Key distribution: B-D-A-C-A-D-B-C-D-A-C-B (A=3, B=3, C=3, D=3). Deliberate key balance is a cosmetic quality check, NOT a psychometric claim.
- Numeric items based on consistent percent conventions; distractors target specific mass/sampling errors.
- Short-response *Brew Investigation Note* assesses reasoning, not real-world skill in brew equipment usage, sensory calibration or chemistry.
- Proposed 10/12 module test and 9/12 transfer rubric thresholds **remain unvalidated proposals**, not official SCA.
- Any learner choosing an unvalidated mineral-concentrate recipe or self-repair of a commercial machine should be sent to qualified guidance; Foundation offers no chemical/equipment SOP.

## 6. UX and equity check

**No equipment requirement:** L01–L05 permit learning from scenarios; L06 has real A/B as optional and a clearly identified fictional case. No purchase of grinder, V60, refractometer, TDS meter, or special water required.

**Teaching media needs (future):**
- Illustrative mass-flow diagram showing dose, water input, retained liquid and beverage output, with precise labels.
- Tiny interactive *strength vs EY* explainer using synthetic numbers; must not depict “ideal flavor” from a single number.
- Water dashboard with four independently labeled values and unit conversion warnings, not fake “TDS flavor meter”.
- Side-by-side immersion/percolation process illustration, demonstrating contact and flow with text alternative.
- Data table that can be read by screen reader on mobile.

**Copy:** Human, clear Indonesian; introduce jargon after concrete examples. Dense L03 water definitions need testing for beginner cognitive burden.

## 7. Fail-closed QA matrix

| Gate | Assessment | Status |
|---|---|---|
| G05-A Six full authored lesson drafts | M05.L01–L06 present | **PASS structural** |
| G05-B Blueprint integrity | 35 unique slots, M05=6, M07.L01 history mandatory | **PASS structural** |
| G05-C Scenario evidence and numerical coherence | Examples calculated with consistent units; synthetic flags explicit | **PASS desk; no instrument testing** |
| G05-D Current research presence | SCA, UC Davis and 2026 peer-reviewed water study cited | **PASS source presence** |
| G05-E Major misinformation guardrails | TDS myth, Mg/Ca flavor, water standard recency, chart universal claims blocked | **PROVISIONAL desk pass** |
| G05-F Assessment quality | 12-item briefs + transfer rubric | **PASS drafting only** |
| G05-G Water chemist and brewing scientist independent review | Neither reviewer contacted or consulted | **BLOCKED** |
| G05-H Learner pilot comprehension and item validation | Not performed | **BLOCKED** |
| G05-I Licensed chart/image use and accessible UI | Future production task | **NOT STARTED** |
| G05-J Runtime code/progress/quiz migration | Production seed/quiz state untouched | **NOT STARTED** |

**Release decision: INTERNAL DRAFT ONLY. DO NOT DEPLOY.**

## 8. Follow-up reviewer requirements

1. Water chemist independently checks the 2026 study's scope and all EC/TDS/CaCO3 discussions; verify SCA source naming and historic handbook status.
2. Brewing lab expert reviews EY formulas, immersion retained-liquid caveat, and sample handling methods.
3. Experienced instructor validates the practical examples and whether “one intervention / observed side effects” is accessible to beginners.
4. Beginner pilot: at least 5–8 qualitative learners to identify confusion, not statistical evidence. Test whether Q03, Q07 and Q08 are solvable with arithmetic guidance.
5. Content designer develops diagrams only for actual conceptual benefit, with accessible text-only equivalent and correct copyrights.
6. Versioned lesson ID/progress migration remains prerequisite for eventual content integration. **No production deployment should occur from this docs branch alone.**
