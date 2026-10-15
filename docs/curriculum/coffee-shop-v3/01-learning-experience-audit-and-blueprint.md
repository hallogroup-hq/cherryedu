# Coffee Business & Shop Management Specialist — Audit & Kurikulum V3

Status: IN PROGRESS / no production promotion authorized from this branch.
Based on production SHA `6f310f82822cb31bd7800ff633a92ad2e4afb2f0`. Branch: `feat/coffee-shop-specialist-depth-v3`.

## Product outcome
A learner should be able to make evidence-based decisions as an independent **owner and operator** of a small Indonesian coffee shop, before opening and through the first 90 days, even when actual demand, input prices, capacity or customers differ from an example. Completion is not proof of real-world food safety, tax or management certification.

The target is NOT 40 long articles. The learner needs: concept and mechanism → inspection and primary data → worked financial/operational model → trial decision → answer feedback → repeat on new conditions → capstone proof.

## Baseline audit (rechecked from source)
- Eight modules, three lessons each, 24 lessons, 9 minutes each, 216 minutes nominal. Each lesson around 322–375 words, so the 9-minute estimate is not matched to reading length or task work.
- Eight interactive judgment scenarios with three alternatives each, one simple channel/BEP calculator, a 16-question final exam (two per module).
- Strengths: demand vs interest, channel costs, simple HPP/margin/BEP, liquidity, throughput, allergens, licence check, week-to-week KPI.
- Critical gaps: actual customer journey and service recovery; lease diligence; competitor/price tests; recipe waste/yield and menu engineering; three-vendor CAPEX; opening readiness; rolling 13-week cash; POS-to-bank settlement; preventive maintenance; shift roster/employment cost and BPJS; receiving/supplier scoring; launch experiments; 90-day capstone.
- Root instructional issue: 24 lessons use identical macro-headings and short scenarios with no continuing learner work product. Only eight concept visuals and one calculator. User-friendly Indonesian explanation cannot depend on students already knowing terms like settlement, CAPEX or contribution.
- Legal/source risk: avoid presenting a single nationwide PBJT restaurant rate, minimum wage, labour formula or blanket NIB-only conclusion; classify by actual activity, district, scale, location, date, and existing licence records. OSS lists 2025 KBLI 56303 (Rumah Minum/Kafe) and 56304 (Kedai Minuman); mandatory food-hygiene compliance may be additional to NIB. Kemenkes Permenkes 11/2025 establishes hygiene-sanitation requirements for relevant food-handling businesses.

## Target architecture — preserve eight modules and all existing lesson IDs
Expand each module 3 → 5 lessons; total **40 lessons**. Keep existing first three lessons and their order, insert new lessons 04 and 05, preserve `CuratedCourseOverview`, `CuratedLessonFrame`, `CuratedScenarioLab`, all existing calculator maths and exam architecture. The ninth-path exam currently has 16 questions, two per module; examine adequacy and quality separately rather than silently treating the item count as certification.

| Module | Current 1–3 | New lesson 4 | New lesson 5 | Output students make |
| --- | --- | --- | --- | --- |
| CS01 Concept and offer | Customer job; service format; minimum menu | Legal/activity map before irreversible commitments | Customer journey and service standards | One-page concept + target occasion and safety/legal checklist |
| CS02 Location and demand | Observation; forecast; repeat | Competitors and willingness-to-pay experiments | Lease/occupancy diligence and walk-away triggers | Site scorecard + downside forecast + rent constraint |
| CS03 Unit economics | Recipe HPP; markup vs margin; delivery settlement | Recipe card, unit conversions, portion and yield loss | Menu engineering using sales-mix and contribution | Cost sheet for three SKUs + comparison by channel |
| CS04 Investments and capacity | CAPEX vs OPEX; throughput; BEP | Three quotes, installation, maintenance & decision rule | Pre-opening rehearsal and launch readiness | Capex matrix + observed queue test + go/no-go |
| CS05 Cash and controls | Accounting vs cash; stock tie-up; runway | 13-week rolling cash forecast and payment timing | POS/cash/reconciliation, variances and controls | Cash ledger and reconciliation report |
| CS06 Layout, equipment, water | Work station; equipment sizing; water safety | Preventive maintenance and downtime playbook | Service recovery and peak order handling | Layout risk map and incident playbook |
| CS07 Staff and stock safety | SOP; allergens; FEFO and waste | Recruiting, scheduling and real labour cost | Supplier due diligence, receiving QC and claims | Roster, onboarding checklist, supplier scorecard |
| CS08 Growth, law, dashboard | Local marketing; OSS; owner KPI | Local marketing measurement and referral economics | 90-day integrated owner capstone | One portfolio: concept, site, menu, supplier, staffing, cash, quality, growth |

## Pedagogical & editorial nonnegotiables
1. Each new lesson has its own concept-based structure and unique deep-dive heading (no replicated all-lesson text), with at least one worked case, calculation/check, alternative decision, practical student artifact, supporting named primary source and cautious assumption label.
2. Expose *what is known* and *what must be obtained via direct quotes/field observation*. Price, wage, rent, fees and lead times are dated/local and must not be invented or described as today's market offers.
3. Explain abbreviations at first encounter: HPP, SKU, CAPEX/OPEX, BEP, contribution, FEFO, POS, settlement, KBLI, NIB, SLHS.
4. Show mechanisms beyond case studies. Exercises need clear input, procedure, check of expected evidence, misconception and next decision.
5. Link one integrated example shop across CS01–CS08, marking all examples hypothetical and not real price references. Change demand to 60%, vary channel fee and supplier lead time for transfer tests; check arithmetic.
6. No video for this release, no replacement/reworking approved UI shells; only relevant diagrams/cards and existing renderer.
7. Finish course via last lesson continuation → /ujian-akhir/coffee-shop, also accessible on path overview; keep all other eight paths unchanged.
8. All internal QA and author notes restricted to repository docs, not student content.
9. Quality gate checks course inventory, per-module order, depth, source links, scenario alignment, academic coherence, exact calculator math, mobile/desktop progression, nine-path regression, exam key accuracy, source-date validity, and forbidden jargon.
10. Academic expertise and actual visual approval still required before production; staging preview only without explicit owner authorization to promote.

## Verified anchor references
- OSS KBLI 2025: https://oss.go.id/id/kbli/detail/40d3bd9d-538b-5f7b-8fcf-f9dadd8867f3
- Kemenkes Permenkes 11/2025 active: https://jdih.kemkes.go.id/documents/peraturan-menteri-kesehatan-nomor-11-tahun-2025
- WHO Five Keys: https://www.who.int/activities/promoting-safe-food-handling/five-key-to-safer-food/
- BPJS Ketenagakerjaan employer requirements: https://www.bpjsketenagakerjaan.go.id/search.html
- PMK 70/PMK.03/2022 distinguishes qualifying restaurant meals from PPN objects: https://pajak.go.id/id/peraturan/kriteria-danatau-rincian-makanan-dan-minuman-jasa-kesenian-dan-hiburan-jasa-perhotelan
- 2026 UMKM PPh Final changes may depend on taxpayer form: https://pajak.go.id/id/siaran-pers/pph-final-umkm-tetap-05-persen-djp-perkuat-ketepatan-sasaran
- Check local Perda for PBJT (not a universally safe fixed tax rate).

## Implementation gates
G0 audit & outline → G1 pedagogy/manuscript → G2 primary sources/numerical models → G3 interaction/application → G4 final assessment & progression → G5 UI snapshots and 9-path regression → G6 human SME/owner signoff. Each gate FAIL blocks production. Existing green CI from prior branch does not sign off V3.
