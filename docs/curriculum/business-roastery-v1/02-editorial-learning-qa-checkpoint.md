# Business Roastery — Editorial Learning QA checkpoint

**Audit date:** 2026-10-13  
**Branch:** `feat/business-roastery-v1-curriculum` / PR #10 (unmerged)  
**Purpose:** Internal quality record. Never display this document or its status terms in learner UI.

## Audit findings and remediation

Initial inspection identified substantial copying: all 84 lessons contained an identical approximately 139-word A/B/C model description and an identical approximately 49-word diagnostic checkpoint. Those duplicates were pedagogically ineffective despite 84 lesson titles, 21 unique field guides, and 21 evolving cases. Previous passing automated tests covered structure and browser behavior, **not** the understanding a novice gains from the content.

**Remediation complete in the authoring branch:**
- **84/84** lessons have been rewritten where the boilerplate A/B/C model description once appeared: every lesson now connects the three possible roastery operating models to its actual topic, trade-offs, and consequences.
- **84/84** lesson checkpoints now have topic-specific diagnostic questions rather than the copied 49-word template.
- Every one of the 84 revised sections includes an operational worked illustration or decision case, usually quantitative; examples use explicitly hypothetical numbers unless a published, directional carrier reference is named and qualified.
- Independent parse/inspection on 2026-10-13 found **84 distinct A/B/C teaching blocks**, **84 distinct checkpoints**, **minimum 261 substantive words after filler removal** among lessons, and **zero** learner-facing matches for DRAFT/PREVIEW/BETA/TBD/COMING SOON/LOREM IPSUM after final removal of editorial language.
- The topic-centered introductory paragraph, evidence-provenance policy and one unique field guide per module remain. A follow-up audit detected identical three-column evidence instructions and generic pitfall warnings in 84/84 lessons; those paragraphs have now been removed. Each lesson retains its unique applied task and pitfall. Less padding is preferable to an arbitrary 300-word minimum. Teaching comprehension and page design still require human review; **unique copy alone is not proof of learning**.

## Covered modules

| Area | Modules | Lessons remediated |
|---|---|---:|
| Industry, scenarios, research, product, business planning | B01–B05 | 20 |
| Legal, suppliers, freight, facility safety and machinery | B06–B10 | 20 |
| Production QC, packaging, HPP, channel pricing and forecasting | B11–B15 | 20 |
| Working capital, B2B, D2C/private label, team and KPIs | B16–B20 | 20 |
| Export introduction and end-to-end business-plan capstone | B21 | 4 |
| **Total** | **B01–B21** | **84** |

## Quantitative model and UI fixes

1. A/B/C comparator suppresses deceptively precise unit economics when output is above actual saleable capacity. Checks full expected demand and 60% downside, and keeps initial CAPEX separately visible.
2. Cash ledger allows relative day 1–7 within each of 13 weeks and shows intraweek cash deficit even when week-end balance becomes positive; same-day outflows precede inflows conservatively absent timestamps.
3. Flat-quote freight no longer displays a misleading weight-based freight bill.
4. JSX text emphasis is rendered as proper tags rather than raw Markdown asterisks.
5. Finance model defines absorbed full HPP for gross margin, variable manufacturing and channel costs for contribution, and fixed factory plus nonproduction overhead once for BEP.
6. Sixteen Playwright checks are now authored, including tests for capacity, intraweek cash and flat freight. **Read current CI run status before claiming they pass.**

## Still required for academic release

- Verify carrier tariffs for the *actual direction and destination* with live written RFQs, including green-coffee acceptance, pickup, minimum, volumetric conventions, last-mile Sukabumi if appropriate, exclusions and taxes. Published sample lanes are estimates, not delivery offers.
- Obtain real green-bean and equipment supplier quotations for realistic Indonesia case studies. Hypothetical exercises must remain plainly marked.
- Indonesian specialist review of current coffee/food manufacturing licensing, halal status, BSN product standards and current tax classification; these change and differ by activity/product/entity.
- Have a practicing roastery operator and Indonesian SME accountant validate teaching correctness and assumptions.
- Run novice comprehension pilot: Can a student justify three-model selection, trace yields, calculate full HPP/gross/contribution/BEP, identify cash shortfall, and respond to new QC/supplier evidence without memorizing a recipe?
- Owner academic signoff before publication. No demonstration videos in this release. No student progress writes in authoring path. No merge or deploy under this checkpoint.

## Evidence-source verification update

- The four referenced directional Mandala Cargo and IndoExpress public listing prices were independently checked on October 13, 2026. **A material evidence error was corrected:** An earlier change to a 10 kg minimum for IndoExpress Jakarta → Medan was not supported by consistent primary sources. Two publicly accessible IndoExpress pages instead show **minimum 100 kg**, at Rp7.900/kg. The earlier 10 kg claim and test have been reverted, and the published source page and model were reconciled. These are listed *starting estimates*; neither provider has issued a commodity- and address-specific binding quotation for the learner case.
- The official DJP policy explanation and PP 20/2026 regulation record are preferred over the JDIH `/summary` narrative, which labels itself AI-generated and says to check the original legal document. Specialist compliance and tax review remains mandatory.
- The teaching validator now rejects repeated generic evidence checklist and identical caution paragraphs, while checking actual unique operational tasks and pitfalls in all 84 lessons.

## Evidence boundaries

- [Mandala Cargo](https://mandalacargo.id/jasa-pengiriman-cargo-makassar-ke-jabodetabek/), Makassar **to** Jabodetabek, advertised starting Rp3,500/kg, minimum 50 kg; **not** Makassar-to-Sukabumi delivery.
- [IndoExpress](https://www.indoexpress.co.id/tarif/cargo-jakarta-ke-makassar.html), Jakarta **to** Makassar, published Rp6,100/kg, minimum 100 kg, exclusions; **cannot** reverse rate direction.
- Localized prices for beans, labor, energy, packaging, machine and channel are learner-entered quote inputs or marked educational assumptions. Currency, origin, quality, weight, timing and liability must be normalized before comparison.

**Follow-up independent check (2026-10-13):** 84/84 lessons retain unique applied teaching/checkpoints; repeated task/checklist scaffolding and copied caution paragraphs were removed. Validator now rejects that filler, checks each unique task/pitfall and requires a minimum of 250 words of core instruction. Review evidence capture and comprehension through a novice pilot; lesson content is intentionally tighter.

**Status:** Distinct subject-matter teaching pass COMPLETE 84/84. Automated tests must be confirmed on latest HEAD; human academic, financial, food compliance, real carrier quotations, user pilot and final release approval remain OPEN.
