# Home Brewer Specialization V2 — Baseline Audit and Curriculum Contract

Status: internal; isolated from legacy published Home Brewer course. Owner for final academic/content approval: CherryEdu project owner. No new videos required for v2 launch. Video may be added in a later independent enhancement; this is **not** a release gate.

## Audit of existing site data (main @ 9cdfd5e)
- Existing path `path-home-brewer`, `home-brewer-specialization`, published/free, ten modules and legacy enrolments/progress. **Never replace IDs or change a user's existing lesson completion, quizzes or badges in a silent code swap.**
- Legacy homeBrewerData.ts includes unsupported absolute claims: 1:15 “golden” recipe, fixed pour rate, “overextraction creates tannins” causal certainty, allegedly universal 120–150 ppm water target, and water DIY mixing recipe framed as guaranteed optimal.
- AeroPress inverted technique is highlighted as a home brewing skill, although AeroPress's own manufacturer expressly discourages inverted brewing due to instability and scald hazard: https://help.aeropress.com/en-US/i-have-heard-of-people-using-an-%22inverted-method%22-why-do-they-use-it-123217 .
- Legacy examples sometimes equate flavor notes with objectively guaranteed taste, and fixed brewing outcomes with particular ratios or pouring styles; these require conditional language and measurement distinctions.
- Legacy course has rich-looking Markdown but much of the experience is text-only. Interactive work must create **real user input + feedback**, not merely a table or “card” label.

## Scientific and educational references (benchmark, not accreditation)
- SCA Brewing courses: https://sca.coffee/education/courses — basic brewing methods, recipe adjustment, strength/extraction measurement, water chemistry, custom recipes.
- SCA discussion of coffee control chart and limits of universal preferences: https://sca.coffee/sca-news/25/issue-13/towards-a-new-brewing-chart-xpj8t .
- Manufacturer safety: https://help.aeropress.com/en-US/i-have-heard-of-people-using-an-%22inverted-method%22-why-do-they-use-it-123217 .
- Equipment instructions are **model-dependent**. For ceramic/glass, electric grinder, kettles and pressure brewers, manufacturer guidance and user safety have priority over an internet recipe.
- CherryEdu **does not claim SCA-certified accreditation** merely by referencing SCA learning objectives.

## Pedagogical architecture
Always progress: observe → understand mechanism → compare two plausible explanations → predict → choose safe experiment → interpret actual vs fictional data → revise → transfer to unfamiliar scenario.

10 modules × 4 lessons = 40 targeted learner lessons:
1. **Brew untuk Dirimu** — home setup, observation, safety, coffee selection.
2. **Kopi dan Gilingan** — beans/roast/freshness, grinder, particle variation, home inventory.
3. **Memahami Ekstraksi** — input/output ratios, concentration/EY, variables/causal traps, measurements.
4. **Pour-over dari Pertanyaan** — V60 and paper/wetting, bloom and pouring, flow diagnosis, adaptive pour lab.
5. **Immersion & Hybrid** — French press/clever, safe standard AeroPress, filter choices, method comparisons.
6. **Air, Suhu & Material** — water quality, hardness/alkalinity, heat/temperature, paper/metal effects.
7. **Mengenali dan Membandingkan Rasa** — tasting, blind comparison, log, sensory calibration.
8. **Troubleshooting dan Eksperimen** — sour/bitter ambiguity, single-variable A/B, flaws and confounders, missing-equipment alternatives.
9. **Cold & Personal Drinks** — iced brew, safe cold brew, milk/additions/allergens, home recipe iteration.
10. **Your Home Brew Lab** — self-authored brew brief, controlled trials, budget/replicability, final transfer capstone.

The unit “ratio” must always specify water-in vs beverage-out; bypass differs from water through bed; perceived acidity/bitter/astringency cannot conclusively diagnose grind/extraction alone. Refractometer numerical EY is optional. In home contexts, recipes are starting hypotheses, not fixed verdicts.

## Learning media without videos
- Seven+ original accessible **interactive SVG diagrams** or concept figures across representative topics; they must explain mechanisms honestly, never pretend to depict real coffee data.
- Meaningful typed interactions: ratio mass/bypass model; water parameter distinction; experiment builder; case response + new evidence; sensory note organizer; cost and waste estimator; personal recipe designer.
- For inherently motor skills (hot water handling, AeroPress plunger) teach safety principles and manufacturer-supported method; avoid making unverified claims of hands-on skill qualification.
- Every nontrivial activity needs a clear learner prompt, user-controlled state, informative feedback, conditional limits, and accessible mobile UI. Not every lesson needs a decorative card.
- No reliance on professional equipment, video, paid accessories, or a particular brand; notebook can be filled with **real results** or clearly-labeled **simulated data**.

## Gates
H0 forensic audit; H1 final sequence; H2 40 manuscripts substantive; H3 non-video conceptual media; H4 meaningful interactions; H5 scenario and diagnostics; H6 browser and content QA; H7 **owner content approval**. User has explicitly chosen no video for this version. No learner-facing “beta”, “review”, “draft”, or internal gate metadata.

Publish and legacy migration are separate gated operations: **do not automatically merge into published path**, and do not grant badges/certificates through isolated tools.