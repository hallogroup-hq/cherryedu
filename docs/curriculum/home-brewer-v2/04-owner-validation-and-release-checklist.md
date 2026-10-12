# Home Brewer V2 — Owner Validation & Release Checklist

**Status:** candidate content and functional review UI.  
**Owner-approved policy (2026-10-13):** **no video demonstrations required for this release**; videos are future enhancements. The program owner performs content validation. A green test suite is **not** owner approval.  
**Branch:** `feat/home-brewer-v2-curriculum`; **Draft PR #7**.  
**No merge, migration or deployment has been authorized.**

## Scope delivered
- **10 modules / 50 authored standalone lessons** in `03-lessons/`. Lesson compiler generates typed data deterministically. The content is not linked to legacy `path-home-brewer`.
- **Six custom mechanism-specific diagrams** (ratio/retention, TDS/EY, channeling hypothesis, percolation vs immersion, ice/brew-through and iterative A/B).
- **Ten concept-lab placements**, including live measurement calculators and decision practice. Interactive coverage varies by lesson: not all 50 need their own calculator, but no topic should use a forced off-topic widget.
- **Thirty dynamic evidence cases** (three per module) requiring a first answer, then additional information, then a revised answer.
- **Twenty MCQs** (two per module) with tailored rationale for each choice; answer positions A/B/C/D each occur five times. Audit rejects excessive longest-correct-option leakage.
- **Separate browser-only course reader** in `app/home-brewer-v2` gated by `CHERRYEDU_HOME_BREWER_V2_REVIEW=enabled`. The flag is an editorial preview switch, **not an authentication or purchase entitlement control**. Do not enable on a public production deployment before integrating appropriate access checks.

## Non-negotiable pedagogical criteria to approve

1. **Beginner comprehension:** a person with no brewing knowledge can explain what “dose”, “brew water”, “beverage output”, “TDS” and “EY” mean after relevant lesson, without watching external videos.
2. **No recipe universalism:** “1:15” is an example of coffee:brewing-water input ratio, not the only acceptable ratio. Changing parameters must be tied to target sensory and process.
3. **Counterexample present:** students see why slow flow ≠ automatically bitter and bubbles in bloom ≠ universal freshness/quality score.
4. **Water chemistry honest:** potability first; conductivity-proxy TDS ≠ GH/alkalinity; avoid kitchen DIY recipes with unjustified claims of 'ideal' mineral targets.
5. **AeroPress safety:** no required inverted method, no hot-water handling that conflicts with manufacturer warnings; upright instruction remains model-specific.
6. **No fake science:** simulated arithmetic, taste, extraction or mineral readings are explicitly labeled, never presented as real lab data.
7. **Sensory humility:** perceived acidity/body/aroma and individual preference are not conflated with objective chemical measurements or official certifications.
8. **R&D/experimentation:** hypotheses are falsifiable; one meaningful change can be isolated; learner can revise when new evidence appears and reproduce a recipe in principle.
9. **No “fake interactive cards”:** buttons enable actual numeric recomputation or reveal previously hidden evidence/feedback after a response; textual exercises are labeled exercises, not impersonated interactive software.
10. **Owner validation evidence:** owner explicitly reviews each module's understanding, science, transfer challenge, visual, safety and fit before a learner-facing release.

## Owner review protocol by module

| Module | Critical owner question | Pass evidence |
|---|---|---|
| HB01 Coffee selection | Could a novice explain Arabica/Canephora/Liberica and processing without deterministic sensory stereotypes? | Explain a previously unseen label and identify unknowns |
| HB02 Measurement | Can learner distinguish brew-water input, beverage output, strength and EY? | Correctly solve 15/225/184 case and compare equal-EY/unequal-TDS |
| HB03 Variables | Is there no “one temperature / click / stirring rule”? | Propose a controlled test when filter and grind change |
| HB04 Pour-over | Are bloom/flow/channeling explanations grounded, not certainty from a photograph? | Diagnose one new setup without declaring one universal cause |
| HB05 Alternate methods | Is French Press/AeroPress upright physically safe and logically taught without requiring video? | Explain contact path and AeroPress manual safety |
| HB06 Troubleshooting | Are taste descriptors handled with competing hypotheses and sensory context? | Correctly revise diagnosis after conflicting new data |
| HB07 Sensory | Does preference remain personal while observations and blind comparison are honest? | Set up triangle test and state chance/caveats |
| HB08 Water & care | Are drinking-water safety and hardness/alkalinity/TDS distinct, cleaning model-specific? | Correctly reject unsafe or unidentified chemicals |
| HB09 Iced/home drinks | Does dilution/ice math avoid invented output and do allergen/storage precautions survive creativity? | Separate 150 g brew-through, 75 g ice and unmeasured output |
| HB10 R&D capstone | Can learner design a falsifiable original recipe and write an operator-readable recipe card? | Show V0→V1→V2 with one purposeful change and honest results |

Owner should classify each as **Pass / Revise / Critical Block**, with an optional case ID and correction note. An unresolved *Critical Block* prevents release even if browser tests pass.

## Release engineering steps after owner validation

1. Approve exact lesson version SHA and lock source; distinguish learner-facing copy from internal QA comments.
2. Decide paid/free access, enrollment and existing Home Brewer purchase grandfathering. **Do not publish the unprotected flag route.**
3. Integrate actual account progress and persisted notes only after permissions and privacy review; current lab responses are intentionally session-only.
4. Validate user-facing route slug and production URL, not only localhost E2E; preserve legacy URLs, course purchase and completed lesson credit.
5. Confirm mobile/keyboard/screenshots and that custom diagrams remain readable without horizontal page overflow.
6. Verify current course claim/credential copy. This program makes no BNSP/SCA official endorsement claims.
7. Only after explicit owner approval: merge the reviewed PR through normal controls and deploy when hosting quota allows, then perform production smoke tests.
8. Schedule a later independent video enrichment phase **without blocking this initial content release**.

## Known gaps, explicitly not disguised as completed

- No owner validation has yet been recorded.
- A written/diagram-based course cannot by itself certify actual kettle handling or practical mastery; no such credential is awarded here.
- The module case/quiz bank is formative (30 open scenarios + 20 MCQs); **not psychometrically validated** as a high-stakes exam.
- Most manuscripts are moderately sized (~300 words); some beginners may need more examples. Owner should mark conceptual depth/novice-testing concerns and request revisions before approving those specific lessons.
- No persisted student/account progress; original paid course is unchanged.
- No required videos for v2; this is a design decision, not a missing gate.
