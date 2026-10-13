# Business Roastery Path — Indonesian curriculum blueprint and evidence policy
**Authoring date:** 2026-10-13. **Status:** unmerged authoring candidate on a separate stacked feature branch. Not part of `path-coffee-business` (which is a pre-existing, published cafe/coffee shop management program). **No deploy or automatic preview.**

## Goal
Learners can research, plan, assess economic feasibility, legally prepare, source green coffee, simulate landed costs, run QC and production, price across B2B and D2C, control credit and cash, lead a team, and make a defensible go/no-go investment decision for an Indonesian roasting business. An introduction to roasted coffee exports is included; not a substitute for a dedicated beans export specialization or professional legal advice.

## Scope and three anchored scenarios
- **A — Asset-light:** own brand; outsource roasting; learn contractual responsibility, QC, fees, MOQ and brand economics.
- **B — Small in-house roastery:** buy equipment only after demand test; learn facility permissions, utilities, maintenance, production, yield, local distribution.
- **C — Commercial growing roastery:** multi-SKU, multiple customer segments, quality controls, working capital, longer logistics chain, commercial contracts and organization design.

There are **21 modules × 4 unique topic-centered lessons = 84 lessons**, 21 multi-stage decision cases, one audit-ready business-plan worksheet, and four independent decision tools (landed-cost/HPP/pricing/BEP, introductory cash timing, three-model cost comparison, and a 13-week cash ledger).

## Boundary conditions for all numbers
**Three categories only.**
1. **Verified published reference:** visibly tagged with publisher, directional lane or product, inspection date, provider's posted indicative amount, exclusion and minimum charge. The site **does not claim real-time reservation-like freight availability** and is not a firm logistics quotation.
2. **Learner-entered quotation:** actual supplier invoice, price list, courier/carrier offer and date. Must capture origin/destination, weight/dimensions, tax inclusions, handling, payment and goods owner.
3. **Educational assumption:** explicitly labeled and editable, never presented as current market rate. The calculator starts with **empty price inputs**, so learners cannot confuse an arbitrary hard-coded green bean, machine or distribution price with a documented quote.

Rates checked on October 13, 2026. A supplier's *starting price* is not a guaranteed quotation for green coffee and the final street address must be confirmed.
| Provider | Direction | Mode | Published starting/indicative rate | Minimum | Exceptions |
|---|---|---|---:|---:|---|
| Mandala Cargo | **Makassar → Jakarta/Jabodetabek** | sea cargo | **starting** Rp3,500/kg | 50 kg | Check pickup, destination, exclusions and additional freight to roastery outside Jabodetabek |
| IndoExpress | Jakarta → Makassar | sea cargo | Rp6,100/kg | 100 kg | Excludes PPN, insurance, packing |
| IndoExpress | Jakarta → Medan (via Belawan) | sea cargo | Rp7,900/kg | **100 kg** (confirmed on two IndoExpress pages) | Excludes PPN, insurance, packing |
| IndoExpress | Jakarta → Ende | sea cargo | Rp14,500/kg | 50 kg | Excludes PPN, insurance, packing |

**Evidence reconciliation 2026-10-13:** A previous 10 kg claim was not substantiated. IndoExpress's Jakarta → Medan public tariff page and independent IndoExpress Medan forwarding page both list **Rp7,900/kg with a minimum of 100 kg** for sea cargo. The calculator and tests use 100 kg. The displayed figure remains indicative and requires a current written carrier quotation before commercial use.\n\nSupplier URLs are embedded in `lib/data/businessRoasteryReferences.ts`. **NEVER reverse the lane.** The public listings describe possible estimates, not exact street-to-street offers or a guaranteed window. Their stated transit estimates do not necessarily include supplier preparation, first-mile pickup, waiting for departures, customs/inter-island handover, receiving and QC. Enter a new quote for **Aceh → Sukabumi, Gayo → Jakarta, Toraja → Bandung** or any other lane not covered by published facts. The buyer may want measurements in sacks, cubic metres and chargeable kg, depending on freight provider.

### Landed cost & loss formula with provenance
- Chargeable kg for an applicable kg-based quotation = max(actual kg, volumetric kg **if** carrier uses it, minimum billed kg), for the tariff structure *actually specified*. FTL is a separate flat quote and must not be forced into kg logic.
- Invoice green = ordered kg × invoice price per kg.
- Total inbound acquisition costs = invoice green + carrier freight + pickup, packing and handling that are **not already included** + other appropriately capitalizable, nonrecoverable purchase costs.
- Usable green kg = physically received kg × (1 − inspected rejection/loss percentage). The form requires received kg independently of invoiced/ordered kg; it does **not** assume they are equal. Discrepancies must be reconciled with supplier credits, rejection records or claims.
- Landed cost/usable kg = above total / usable green.
- Saleable roasted kg = usable green × (1 − roasting loss fraction). The same applies only when other downstream losses are zero; otherwise extend the model with packing reject and QC sample loss.
- Raw bean cost/saleable roasted kg = total inbound acquisition costs / saleable roasted kg.
- HPP finished roast = raw bean cost per saleable kg + documented transformation cost + packaging and relevant manufacturing overhead.
- Contribution/kg = net selling price (consistent VAT basis) − **variable manufacturing cost/kg** − **variable selling/fulfillment cost/kg**. Fixed factory overhead belongs in absorbed full manufacturing HPP for gross margin, but must NOT be subtracted again from contribution. Avoid double counting inbound/outbound freight, overhead and VAT.
- BEP/month kg = (**monthly fixed factory overhead + monthly fixed nonproduction cost**) / contribution/kg, **only when contribution > 0** and on a consistent period/output basis. Neither fixed component is deducted in contribution/kg.
- For accounting and decisions distinguish cost of inventory, cost of goods sold, noncash depreciation, cash payments, income taxes, VAT, and debt financing.

## Regulatory notes verified October 13, 2026
- OSS 2025 **KBLI 10761 Pengolahan Kopi** covers roasting and other coffee processing. Correct license and operating details require separate risk/scale/facility and product analysis: https://oss.go.id/id/kbli/detail/37180921-3574-5cf1-b936-ac54bed78d52
- Food safety, product permit (BPOM MD or SPP-IRT if applicable) and labels **must be checked per product/process/facility** with the appropriate competent authority, not asserted universally from one KBLI.
- BPJPH says **October 18, 2026** halal obligations will begin with some transitional/exception details under review; do not teach blanket exemptions. https://bpjph.halal.go.id/read/wajib-halal-berlaku-18-oktober-2026-bpjph-siapkan-aturan-yang-memudahkan-pelaku-usaha
- BSN has **SNI 8964:2021** for roasted/ground coffee, but the existence of a valid standard does **not** by itself imply that each product must be mandatorily certified. https://pesta.bsn.go.id/produk/detail/13201-sni89642021
- Tax: **PP 20/2026** changes categories eligible for final UMKM tax; not all CV/PT or entities automatically pay 0.5% of gross income. Consult current DJP classification/tax advisor. Use the official [DJP policy explanation](https://pajak.go.id/id/siaran-pers/pph-final-umkm-tetap-05-persen-djp-perkuat-ketepatan-sasaran) alongside the [legal regulation record](https://jdih.kemenkeu.go.id/dok/pp-20-tahun-2026). The JDIH `/summary` text itself is marked AI-generated and is **not** an authoritative substitute for the enacted legal text.
- Introduction to exporting: invoice/packing list, PEB, shipping documents, NPE and destination-country requirements. Check HS and customs restrictions per exact roasted product. https://www.beacukai.go.id/mandatory-upload-dokap-peb

## Pedagogy and quality
- Each lesson asks learners to distinguish **fact, assumption, and verification** and follows three operational models. Each module ends in a case with mandatory initial decision, unseen evidence, second decision, and a model reasoning rubric.
- Unlike a traditional simple quiz, the course requires decisions under supplier delays, credit terms and inconsistent demand.
- No demonstration video in the current release.
- No hidden student progress writes: authoring route behind `CHERRYEDU_BUSINESS_ROASTERY_REVIEW=enabled`; published `path-coffee-business` and other route IDs preserved.
- Quantitative calculations are illustrative models, not financial forecasts or actual carrier bookings.
- **Owner academic approval, subject matter reviews by Indonesian roastery owner/accountant/food safety assessor, and learner pilot are required before any release.** Do not claim that green tests validate actual business feasibility. Every fast-changing law or rate needs revalidation before go-live.

## Exit criteria
1. Distinguish true landed cost from green bean purchase price; correctly apportion inlet costs and non-saleable roast yield.
2. Produce three scenario business plans and choose one based on demand and cash, not equipment status.
3. Produce real directional freight quotes; identify missing charges and lead time beyond posted journey length.
4. Explain margin vs markup and model positive contribution but negative cash flow.
5. Correctly map OSS, BPOM/food permits, halal, SNI, tax with **conditional** statements rather than blanket claims.
6. Deliver inbound/outbound SOPs, buyer proposal, QC release log, 13-week cash forecast, go/no-go memo.
7. Know the boundary between an export introduction and full export competency.

### Release checklist
- [x] Curriculum authoring candidate staged behind isolated review flag.
- [x] Financial labs and source-policy design written.
- [x] Previous automated checkpoint passed at commit `2f703e9` (11 browser checks and three Foundation compatibility gates). **Retest after any newer edits; do not inherit prior pass status.**
- [ ] Live carrier and supplier RFQs for target city/route; currently only published directional estimates.
- [ ] Indonesian industry expert review; user academic approval and learner pilot.
- [ ] Explicit owner-authorized integration/migration and production release.

## Academic QA follow-up 2026-10-13

We identified repeated evidence across all 21 staged exercises and added **21 distinct evolving cases** with industry-specific factual changes. We also authored **21 topic-specific applied field guides** (one in the third lesson of every module). These are supporting worked cases, not a substitute for original lesson depth or external subject-matter validation.

**Accounting correction:** full absorbed manufacturing HPP equals variable manufacturing cost plus allocated fixed factory overhead per unit. Gross margin uses absorbed HPP, whereas contribution/kg for unit BEP uses variable manufacturing cost and variable selling/channel costs. BEP numerator includes fixed factory overhead **once**, plus other fixed operating expenses. This avoids double counting factory fixed cost in both numerator and denominator. A received-quantity field and explicit post-roast QC/packing losses now prevent treating shipped kg as automatically saleable.

**Directional inbound cargo**: Mandala Cargo published Makassar → Jabodetabek from Rp3,500/kg minimum 50kg (indicative carrier listing; https://mandalacargo.id/jasa-pengiriman-cargo-makassar-ke-jabodetabek/). The route is **not** Makassar → Sukabumi and commodity restrictions, all taxes and last-mile must be confirmed by written RFQ. The three pre-existing IndoExpress outbound references remain useful only for their literal direction.

All prices in worked field guides other than explicitly referenced carrier postings are **hypothetical exercises**. Do not present them as supplier/machine market prices.

## Additional 13-week planning and three-model comparison — 2026-10-13

The authoring interface also includes two interactive, non-persistent labs available from the learner catalog and linked from modules B02/B16:

- **Three-model make-or-buy:** user-defined saleable kg/month, variable conversion cost, fixed monthly conversion, capacity and machine CAPEX, compared across outsourced, owner-operated small, and commercial facility. A 60% downside tests sensitivity; **capacity-infeasible output is not shown as a financially deliverable quotation**, and the model identifies shortfalls at both volumes. Machine CAPEX is shown as investment cash rather than silently included in operating cost per kg. This tool compares **conversion cost**, not all-in HPP, and cannot replace the complete landed-cost calculator or financing analysis.
- **13-week cash ledger:** user-defined initial cash and an editable set of individual cash receipts/payments by week **and relative day (1–7)**, with ending-balance schedule and a negative-cash warning even when an intraweek dip disappears in the week-end net balance. For entries sharing a day, the calculation conservatively books outflows before inflows; actual bank timestamps must still be confirmed. Blank weeks are unentered obligations, not an affirmative zero. No learner account state is written.

Academic owner signoff and verified carrier quotes remain necessary. Browser validation tests are separate from claims that these numbers constitute a real commercial quotation.
