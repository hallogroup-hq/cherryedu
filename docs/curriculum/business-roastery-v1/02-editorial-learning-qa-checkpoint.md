# Business Roastery — Editorial Learning QA checkpoint
**Date:** 2026-10-13  
**Branch:** `feat/business-roastery-v1-curriculum` / PR #10  
**Release policy:** No merge, no public deployment, no owner academic signoff. This document is internal editorial QA, not learner-facing.

## Why automated coverage is not academic completeness

The original course contained 21 modules and 84 uniquely titled 300+ word lessons, one distinctive field guide per module and one evolving decision case per module. However an independent inspection found:
- **84/84 original lessons reused exactly the same ~139-word three-model comparison** instead of applying A, B, C to their specific subjects.
- **84/84 original lessons reused exactly the same ~49-word checkpoint** even though learning objectives differed.
- Counting words and checking that markdown headings exist did not detect this failure.
- The 21 original field guides are useful original applications, but their presence in lesson three of each module does not substitute for a genuinely taught concept in all four lessons.

Consequently **previous CI success must not be labeled academic readiness**.

## Rewriting progress

### Substantive replacements completed on this branch (16/84)
- **B02, 4 lessons:** contract roasting responsibility, realistic saleable throughput, scaling procurement/roles, capacity-aware make-or-buy with 60% downside.
- **B08, 4 lessons:** literal direction of published freight lanes; provider minimum and volumetric rules; cost bridge from invoice through received/rejected/roasted/sample; full lead-time/reorder-point calculations.
- **B13, 4 lessons:** landed material vs variable conversion vs full manufacturing HPP; fixed vs variable labor; variance/yield sensitivity; inventory-to-COGS reconciliation.
- **B16, 4 lessons:** why a valid PO may precede cash; CCC with supplier DP; AR aging and term exposure; 13-week cash runway and spending priorities.
- All replacement market-like prices other than clearly referenced carrier listings are explicitly **hypothetical learning assumptions**; never claim live supplier rates.
- Both common blocks were replaced with *lesson-specific* A/B/C decisions, calculations or operational demonstrations and diagnostic questions for these 16 lessons.

### Still requiring substantive editorial rewrite (68/84)
- **B01** industry and economic actors (4).
- **B03–B07** demand, product, feasibility, legal and sourcing (20).
- **B09–B12** facility safety, machine selection, roasting QA, packaging and fulfillment (16).
- **B14–B15** pricing, channel economics, forecast, BEP and budget (8).
- **B17–B21** B2B, D2C, people, KPI/contingency, export introduction and capstone (20).

Until these are rewritten and reviewed, treat the entire path as **editorially not ready** even if compilation, validator and all automated browser suites pass.

## Pedagogical acceptance criteria for each remaining lesson

1. Explain one specific mental model in accessible Indonesian *before* introducing jargon, exceptions or three scenario variants.
2. Show causality: input/measurement → decision → operational consequence; do not just give an instruction to fill a table.
3. A/B/C implications must be specific to the lesson, not a reusable paragraph describing business models. Each variant needs at least one trade-off.
4. Include concrete worked evidence or a quantified example when appropriate. State whether amount is carrier-published, a learner-entered quote or an educational assumption. Never reverse freight directions or invent provider rates.
5. End with a diagnostic question requiring demonstration/justification, not a universal template reused 84 times.
6. Ensure legal/food-safety/tax guidance uses the applicable regulator and conditional business/product classification. Reverify the October 2026 sources near release.
7. Preserve 21 evolving decisions, real financial tools, no demonstration videos for this version, no student progress writes, and no student-facing internal draft/review labels.
8. Run independent expert/owner academic review and a novice learner comprehension pilot, then integrate into student catalog only under explicit release approval.

## Engineering corrections in the same review pass

- A/B/C comparator suppresses apparently precise target-volume unit costs when monthly available capacity is below demand; also checks the 60% downside.
- Cash planning now allows relative day 1–7 within each week and conservatively orders same-day outgoing payments before incoming receipts for liquidity-trough detection.
- Flat freight prices do not render meaningless chargeable kilograms.
- Raw Markdown bold markers inside ordinary JSX text were changed to real emphasis elements.
- Finance model definitions updated: contribution margin excludes fixed absorbed manufacturing overhead; fixed plant plus fixed nonproduction costs are included once in the BEP numerator.
- New Playwright tests cover these regressions; **the latest commit's results must be checked** separately from previous passing builds.

## Evidence policy

Public cargo listings are directional *starting estimates*, not carrier quotations for a particular green-coffee commodity, pickup, dropoff or address:
- [Mandala Cargo Makassar → Jabodetabek](https://mandalacargo.id/jasa-pengiriman-cargo-makassar-ke-jabodetabek/) from Rp3,500/kg minimum 50 kg (published reference).
- [IndoExpress Jakarta → Makassar](https://www.indoexpress.co.id/tarif/cargo-jakarta-ke-makassar.html) sea Rp6,100/kg minimum 100 kg (published reference, not reverse direction).
Sukabumi delivery, pickup details, add-on charges, tax, insurance, packing, exclusions, ETA, quality and supplier prices all still need transaction-specific written quotations.

## Next gate

Do not publish or call this path finished. Rewrite and academically QA the remaining 68 lessons, inspect visual/interaction comprehension rather than merely counting interactive elements, verify latest CI, and obtain external compliance/carrier verification and the owner's final curriculum signoff.
