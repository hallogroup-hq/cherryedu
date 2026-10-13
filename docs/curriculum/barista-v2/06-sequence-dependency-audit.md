# Barista V2 — Module Sequence & Prerequisite Audit

**Audit date:** 2026-10-13 (Indonesia). **Decision:** change 11 proposed modules to **12 modules / 68 learner lessons (planned)**. This is **curriculum structure only**, not publication or verified learning outcome. No main-branch, live learning path, purchase, or student progress has been changed.

## Why the 11-module plan needed revision

1. **Safety and basic service were too loosely coupled to the first lessons.** An aspiring barista must understand a safe station, cleanliness, allergens, responsibilities and guest intent **before touching a machine**, rather than waiting for late hospitality or maintenance modules. Deep preventive care may come later, but cleaning and hazard boundaries are foundational.
2. **Espresso was introduced before a simple extraction mental model.** New students could memorize 1:2 and a shot-time range without knowing what dose, yield, dilution, concentration and extraction mean. A safe, cheap data/filter lab provides *concrete-to-abstract* scaffolding; the point is to prepare espresso understanding, not make baristas into home brewers first.
3. **Experimental curiosity was not attached to early motor skill lessons.** A late Signature R&D studio cannot repair a course that trains recipe obedience in M02–M09. Predictions, controlled comparisons and honest observations must be repeated with increasing complexity.
4. **Maintenance and costing need distinct achievement criteria.** Consolidating safety, equipment fault escalation, FIFO/FEFO, waste, costing and procurement into one catch-all block would create excessive cognitive load and conceal critical safety assessment.
5. **Customer adaptability was too late or too isolated.** Short customer-intent practice starts in M01 and returns at increasing complexity in M06/M08/M11/M12. The later hospitality module teaches ambiguity, complaint and queue conflicts after sufficient product knowledge.
6. **The signature course goal remains independent creation.** Recipe experimentation builds from M02 onward, trial menus start in M06, explicit costing in M10 and signature validation in M11, then holistic unannounced conditions in M12.

## What external competency benchmarks tell us (not a copied syllabus)

- Specialty Coffee Association Barista Skills Foundation includes basic espresso, cleaning routines, brewing and service: https://sca.coffee/education/courses/
- SCA CSP Course Catalog explicitly couples espresso/grinder, milk, safety and customer service: https://education.sca.coffee/s/SCA-CSP-Course-Catalog.pdf
- Indonesian Ministry of Industry SI-DIA *Skema Sertifikasi Okupasi Barista Rumah Minum/Kafe* includes managing area/equipment, customers, machine and manual coffee making, **developing coffee beverage products**, inventory, emergencies, OHS and business records (scheme listed as 33 units on accessed catalogue): https://sidia.kemenperin.go.id/competency/scheme/index/0/0/14/424
- WHO Five Keys to Safer Food underpin early cleanliness, separated handling, safe materials and temperatures: https://www.who.int/activities/promoting-safe-food-handling/five-key-to-safer-food/
- CDC restaurant food-allergy guidance emphasizes trained service staff, safe preparation areas/tools and reliable menu ingredient information: https://www.cdc.gov/restaurant-food-safety/php/practices/food-allergy-reactions.html
- SCA brewing science explicitly distinguishes brew ratio (input water/coffee) from beverage ratio (output beverage/coffee): https://sca.coffee/sca-news/25/issue-9/english/water-and-coffee-acidity-how-to-adapt-your-water-for-different-extraction-methods-25-magazine-issue-9-pxjby

**Caution:** These are external *coverage references*. They do not determine CherryEdu's exact order or give permission to market a SCA/BNSP certificate.

## Dependency map and new outcome gate

| New stage | Needs first | Critical mastery before continuing | If absent, next module fails because... |
|---|---|---|---|
| M01 — Safe bar and guest intent | Orientation only | Recognize hazards, differentiate preference from allergy, ask clarifying question, safe order flow | All live work becomes unsafe or guest-agnostic |
| M02 — Extraction & experiments | M01 safety | Model dose/water/strength/extraction, make hypothesis and bounded test | Espresso becomes ratio memorization |
| M03 — Espresso entry | M01–M02 | Recognize grinder, portafilter, shot measures and authorized handling | Dial-in becomes blind knob turning |
| M04 — Espresso QC | M03 | Interpret changing outcomes, distinguish multiple causes, select one measured next test | Service consistency is guesswork |
| M05 — Milk | M01, M03 | Safe wand and ingredient handling, recognize texture stages & allergens | Milk recipes/latte art compromise safety |
| M06 — Drinks & latte art | M03, M05 | Build basic menu drinks and explain adjustments | Drink creation lacks components |
| M07 — Filter and batch service | M02, M04, M06 | Transfer extraction principles to different brewers and queue constraints | Improvisation risks unpredictable throughput |
| M08 — Adaptive hospitality | M01, M06–M07 | Clarify unusual requests and compare defensible service alternatives | Signature briefs have no real guest insight |
| M09 — Preventive care | M01 plus machine familiarity | Separate safe routine cleaning from technician-only repair; escalate | Quality/equipment risks unrecognized |
| M10 — Inventory & costing | M01 plus menu operation | Stock freshness, unit-cost math, waste and allergens | Signature menu is not commercially viable |
| M11 — Signature R&D | M02–M10 | Original coffee-led brief, prototype, actual/synthetic evidence distinction, costing, safe handoff | Final creative portfolio is just copied recipes |
| M12 — Capstone | M01–M11 | Novel customer/machine/service problem + signature evidence + safe decisions | Online completion should not assert job-ready practical competence |

## Spiral learning, not 12 isolated units

**Safety** appears first and in every physical lesson; M09 adds deeper equipment care, not first contact with cleaning. **Service/customer thinking** appears M01, M06, M08, M11 and M12. **Experimentation** occurs in every module with question → hypothesis → prediction → controlled trial → observation → interpretation; M02 teaches method, M11 uses it for original product R&D. **Costs and stock constraints** are lightly introduced during early bar service; M10 teaches quantitative decisions.

## Acceptance of proposed order

**Internal structure-review decision: ADJUSTED.** Core prerequisites now follow sensible dependency order; do not misrepresent this as a validated optimal sequence. **Still pending:** novice cognitive walkthrough, barista trainer review, licensed food safety review, inclusive learning trials, clear practical delivery route, and real-media availability. Counts (12/68) are *planning units*, not release quality metrics. The first authoring batch is M01 and then M02, with the learner-facing text isolated from editorial QA and references.

## Release and migration isolation

Keep legacy `path-barista` and its 10 `mod-b*` IDs, 30 `les-b*`, 10 quiz IDs, purchases, attempts, completions and certificates unchanged until an explicit version migration decision. New draft lesson files are **not** imported into the old seed by these documentation commits. Official SCA or BNSP credentials cannot be claimed by an online-only course.
