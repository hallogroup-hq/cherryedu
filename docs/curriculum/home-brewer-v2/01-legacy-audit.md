# Home Brewer V2 — Legacy Course Audit
Date: 2026-10-13. Source: `lib/data/paths/homeBrewerData.ts` on main `9cdfd5e`.
**Internal QA only; no production changes.**

The old path's source includes `HOME_BREWER_EXPANDED_LESSONS`, `HOME_BREWER_QUIZZES`, and `HOME_BREWER_QUESTIONS`. The module/path metadata and other legacy lessons may also be composed elsewhere; do not infer live enrollment or precise lesson count only from expanded lesson array. Legacy IDs and commerce/progress models must remain untouched.

## Verified P0/P1 issues
1. The channeling lesson describes simultaneous uneven extraction as nearly always the singular cause of a particular flavor, suggests a universal kettle flow rate 4–6 g/s and attributes precise chemicals/harsh astringency to microscopic flow paths without measurements. Instead teach multiple competing hypotheses and observational boundaries.
2. A DIY water lesson prescribes sodium bicarbonate + magnesium sulfate concentrate and promises an SCA 120 ppm TDS result and a “perfect” brew taste. GH/alkalinity, conductivity TDS readout and resulting taste cannot be equated this way. Not appropriate to instruct beginners to mix specialty brewing chemicals at home; use potable water, validated commercial ingredients and label/measurement interpretation.
3. The AeroPress inverted technique appears as an aspirational recipe without clearly stating the **manufacturer warns against it due to instability/scald risk**. V2 defaults to upright per manual, no inverted hot-water exercise.
4. The source uses claims like 1:15, “golden extraction”, pressure and specific recipes as near-universal rules. A brewer must learn how input-water ratio differs from output beverage, and why a target can change.
5. Roast date/resting, elevation/density, processing and sensory descriptors are sometimes presented as deterministic. These are contextual influences, not guarantees.
6. Text is heavy with long multi-concept passages, generic all-purpose quizzes and nonfunctional placeholders (e.g. `[DIAGRAM:brewing-control-chart]`), rather than authentic diagrams or controlled experiments.
7. Some specialty topics (portable espresso/pressurized nitro, water remineralization) displace high-priority home skills: proper brewing notes, safe setup, measurement literacy, repeatable comparisons and how to answer “why did my cup change?”.
8. Quiz explanations often repeat one categorical statement without separating fact, hypothesis and unknown inputs.

## Decisions
- New independent curriculum V2, do not mutate legacy `path-home-brewer` IDs or lessons.
- Zero required video assets in the current release; real videos may be added later.
- Final editorial validity belongs to the product owner, not inferred from green CI.
- Functional simulations must explicitly label fictions and not predict taste or safety from one variable.
- Hot-water handling, food-safe equipment, AeroPress safe orientation and chemical boundaries are independent critical checks.
- No professional brewing certification claim from online quiz.
- Source references: SCA Brewing Control Chart (2019), AeroPress manufacturer inverted-method safety FAQ (2026), Liu et al. (2025) on water–coffee pairing. These contextual references are not recipe prescriptions.

## Public sources
- SCA chart https://static1.squarespace.com/static/587af1d4db29d69a1a226b95/t/60aece65e4f2134d99f6e646/1622068839009/SCA%2BBrewing%2BChart%2B-%2BRevised%2BMarch%2B2019-US-Letter.pdf
- AeroPress safety https://help.aeropress.com/en-US/i-have-heard-of-people-using-an-%22inverted-method%22-why-do-they-use-it-123217
- Coffee-water pairing research https://www.sciencedirect.com/science/article/pii/S0889157525008026