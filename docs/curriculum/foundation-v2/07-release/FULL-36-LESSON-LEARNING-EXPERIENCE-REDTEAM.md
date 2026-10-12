# CherryEdu Foundation V2 — Complete Learning Experience Red-Team Audit

**Audit date:** 2026-10-12  
**Source reviewed:** All **36** `03-lessons/M01…M07` canonical lesson manuscripts, `components/MarkdownRenderer.tsx`, `components/CoffeeDiagram.tsx`, Foundation V2 typed activity registry and production-path preview integration, on `release/foundation-v2-rc`.  
**Scope:** Novice comprehension, sequencing, activity authenticity, concrete examples, transfer, visuals, realism, cognitive load, assessment disclosure and accessibility. This **is a document/code desk audit, NOT a study with learners or third-party subject matter experts**. Scientific content concerns are marked for domain validation rather than silently rewritten.
**Decision:** **FAIL full-course pedagogical/visual gate.** Previous 36 lesson completion and 8 typed activity integrations establish *content coverage + pilot capability*, not production-grade experience.

## Executive diagnosis

**The central defect is a missing explanation-to-application bridge.** The prose is better at detecting an unjustified claim than helping someone build a mental model of the positive underlying phenomenon. Learners meet caveats, specialized taxonomy, formal standards and governance before they reliably know what the object looks like, why people use it, or how it behaves.

Observed patterns:
1. **Conceptual jumping:** M02.L02 devotes an entire discussion to Excelsa taxonomic revision, but Liberica is introduced in **one generic sentence** without what it is, what it looks like, where it is used and why relevant to a coffee drinker. Some other chapters similarly introduce an advanced correction before a simple physical explanation.
2. **Answer leakage:** Numerous lesson activities have the correct answer immediately beneath the question (or an answer table inside the supposed task). The module-exit 76-item bank is separate; the *in-lesson* knowledge checks are not consistently attempt-first.
3. **Phantom media:** M02.L01 originally said *imagine three diagrams*; V1 had a coffee cherry diagram, which V2 initially omitted. M04.L05 promises a **screenshot roast log** without providing one. M06.L01 describes **ten cards** as a completed answer table. Some other 'cards' are rows.
4. **Caution over-teaching:** A legitimate warning such as “tidak otomatis” becomes the answer pattern in many sections. The learner may memorize an epistemic disclaimer without understanding coffee anatomy, fermentation, extraction or worker economics.
5. **Fragmented scenarios:** Every lesson introduces a new generic fictional `Lot X`, `A/B`, `Kebun Contoh`. Few real, rights-cleared Indonesian photographs, traceable objects, voices or enduring narrative identities connect tree → processing → roast → cup → people and money.
6. **Premature abstraction:** M05.L03 discusses named water-ion models before stabilizing novices' sense of concentration and extraction; M06.L05 spends effort on SCA standard numbers before everyday use of physical/descriptive/affective/extrinsic evidence.
7. **Limited accessible multimodality:** Existing visual component library is not automatically matched to V2 competencies. Current V2 adds **8 purpose-built pilots in 8 lessons**, leaving **28 lessons without those typed blocks**; this does **not** mean every remaining lesson needs a widget.
8. **Assessment and practice gap:** Current reviewer experience is correctly read-only; nothing there demonstrates sustained practice, artifact collection, delayed recall, transfer or remediation for actual students. The final 350–500-word memo is a sudden jump if structured writing opportunities haven't been accumulated.

### Why this matters

The learner should be able to answer **“What is it? What does it physically look like? Why does it matter? What can I observe? What decision can I now make?”** *before* being tested on niche exceptions, disputed labels, uncertainty or legal standards. Preserve precision; restructure how it is encountered.

## 36/36 lesson-by-lesson disposition

**Legend:** P0 = materially blocks novice understanding/task integrity; P1 = weak learning support requiring fix before public launch; P2 = editorial improvement. `READ` means a well-written short explanation may suffice; `VIS` verified/rights-cleared visual or original illustration; `ACT` genuine attempt-first interaction; `WORK` constructive worksheet; `ADV` progressive disclosure for deeper science; `CASE` specific human/industry scenario. Recommendations are not a requirement to gamify each section.

| Lesson | Core learner-experience gap found | Proposed concrete repair | Priority |
|---|---|---|---|
| **M01.L01** Taste/aroma split reasonably grounded, but terms orthonasal, retronasal, aroma-associated sweetness arrive early; second paper-based task duplicates card classification | **VIS** 4-sense annotated cangkir; retain the new classification **ACT**; stage two terms into optional “lebih dalam” | P1 |
| **M01.L02** Five influences are a table; several cases give Q and answer inline, no cause-map learner builds; comparisons largely abstract | **VIS** tree→cup interactive causal map with controlled-variable highlighting; **ACT** choose next test and get explanation after submission | P1 |
| **M01.L03** Promises first experiment; note form is a placeholder Markdown table, response cannot be entered/saved; many model answers are exposed | **WORK** A/B observation form with two routes (real tasting or simulated-data interpretation), staged examples, downloadable result for private use | **P0** |
| **M02.L01** Six anatomical labels on text table were hard to locate spatially; original V1 visual lost; new anatomical schematic is a good start but processing transitions still ask learner to “imagine diagrams” | **VIS** original six-layer interactive anatomy already integrated; add a physical ‘which layer is retained/removed’ visual for washed, natural, honey; no false SCA badge | P1 |
| **M02.L02** **Liberica effectively unexplained** before a long Excelsa taxonomy dispute; no real organism/fruit/beans visual; cultivar vs market label not scaffolded | **P0 rewrite**: first compare Coffea plants, explain Liberica concretely and use-cases, then add Excelsa as an **advanced naming note**. Pair taxonomy tree with photographs/drawings. New sorting widget alone cannot fix missing explanation | **P0** |
| **M02.L03** G×E×management important, but “same variety, two kebun” data presented as static table and cause relationship not pictured | **VIS** environment/genetic/management influence map; **CASE** one recurring Indonesian farm across two conditions; ask which additional data matter | P1 |
| **M02.L04** Ripeness shown with prose and Brix numbers; readers need to *see* yellow-ripe versus unripe and damaged cherry; avoid invented numeric cutoff | **VIS** verified cherry-stage photo plate with cultivar label; **ACT** choose inspection questions; Brix in ADV | **P0** |
| **M02.L05** Abstract fictional agronomy case and example 30-day plan are exposed before learner creates anything; beginner lacks agronomy vocabulary | **CASE** grounded farm interview/photographic walkthrough (consent), **WORK** 3-priority decision form with feedback, safety guardrails | P1 |
| **M03.L01** Green coffee journey described as paragraphs/table with fake card sorting; physical forms ceri/parchment/green not actually pictured | **VIS** central product-state flow with original/rights-cleared images showing what physically changes; **ACT** order custody/provenance | **P0** |
| **M03.L02** Washed/natural/honey explanations okay but no side-by-side image of what remains on fruit at drying; new decision widget tests QC before grounded physical visualization | **VIS** common-base comparison diagram + photo sequence; keep new **ACT**, but teach physically first | **P0** |
| **M03.L03** What is distinct about wet-hulling intellectually sound but learners cannot see why timing of parchment removal matters | **VIS** two parallel timelines with coffee moisture-stage illustration, photos with permission; avoid unsafe numeric targets | P1 |
| **M03.L04** Microorganisms, fermentation, anaerobic, inoculation, carbonic maceration introduced in quick succession; before actual food/process model stabilizes | **VIS** “fruit–microbes–environment–time” annotated animation/diagram; **ADV** carbonic/co-fermentation after basics; **ACT** trace observation vs evidence, not recipe simulator | **P0** |
| **M03.L05** Moisture vs water activity is central but relies on analogy and prose; reader has no concrete graph or measurement example | **VIS** two measurement channels and safe storage/rewetting sequence, with clear “not an OTA test”; optional glossary | P1 |
| **M03.L06** Dry mill operations and grading standards rely on words/standards codes; no original photo examples of parchment removal, sorting or green defects | **VIS** annotated dry-mill photo/sequence and clearly illustrative defect examples, rights and taxonomy reviewed; standards-status in ADV | **P0** |
| **M03.L07** Learner must issue multi-lot QC memo, but recommended answers and rubric are immediately visible; product lacks answer workspace | **WORK** staged P-21/P-22 evidence dossier, decision form, feedback and rubric *after submission*, with optional export; food-safety caution intact | **P0** |
| **M04.L01** Correct physical changes but no stage snapshots or roast timeline; new reordering widget is not the actual visual roast curve | **VIS** annotated sequence green/yellow/brown/first-crack; already working **ACT** for ordering; photos/diagram optional | P1 |
| **M04.L02** Maillard/pyrolysis/caramelization mostly textbook prose; little causal “before/after” representation; RoR/DTR terminology high density | **VIS** precursors→many reactions→aroma families, intentionally non-deterministic; **ADV** DTR details and study limitations | P1 |
| **M04.L03** Light/medium/dark needs side-by-side meaningful images with same lighting; otherwise defect vs style distinctions stay abstract | **VIS** standardized photo series + sample look-and-describe before discussion; avoid diagnosing roast defect from color alone | **P0** |
| **M04.L04** Degassing, staling, valve and resting can be confused; no gas/packaging physical diagram | **VIS** packaging gas exit vs oxidative changes; **CASE** compare roast dates and usage requirements, no universal resting days | P1 |
| **M04.L05** “Screenshot simulasi roast log” requested but no actual screenshot/curve; DTR/RoR log is theoretical; no observed diagnosis task | **P0 missing asset**: supply synthetic **clearly labeled** original roast curve with axes and timestamps; **ACT** identify supported vs unsupported conclusions; preserve occupational safety warning | **P0** |
| **M05.L01** Strength/EY foundational but still defined abstractly; no simple dilution vs extraction animation; common confusion persists | **VIS** two glasses same solute/different water plus same strength/different extraction; compare with concrete mass values | **P0** |
| **M05.L02** Brew parameters taught as table then immediately nuance; learner needs physical connection grind→flow→contact rather than a list | **VIS** grind/bed/flow simple model and one-variable comparison; **WORK** novice brewing diagnosis | P1 |
| **M05.L03** EC/TDS/hardness/pH/alkalinity/Hendon 2014 and a September 2026 paper in one beginner lesson: scientific overload | **P0 restructure** into practical core: what water contributes, differences between concentration/buffering, why machine safety separate. Chemical model and papers in ADV; simple comparative diagram | **P0** |
| **M05.L04** French press vs V60 are described without photos of apparatus or filtration physics | **VIS** annotated cross-section water flow for immersion vs percolation + grounds/filter comparison; **ACT** categorize scenarios *without immediate arrows to answers* | **P0** |
| **M05.L05** Good worked example and newer EY calculator, but TDS/EY may falsely feel a score unless joined to actual diagnosis | Keep calculator; add **worked example → fill one missing value → parameter sandbox → interpret one uncertainty**; avoid impression of lab-grade measurements | P1 |
| **M05.L06** Real/simulated pathways are excellent but data and model report immediately visible; long prose memo without form | **WORK** step-by-step Brew Investigation Note, one-variable control checklist and after-submission example; transfer case | P1 |
| **M06.L01** **Duplicative with M01.L01** taste/aroma/mouthfeel/retronasal; ten supposed “cards” actually answered table | Differentiate: M01 sensory *orientation*, M06 **calibration / interpret new samples**. Remove repeated primer and turn ten cards into real **ACT** | **P0** |
| **M06.L02** WCR Lexicon context reasonable; no learner-usable original sensory map, no cultural/local imagery; current confidence choice only one of several tasks | **VIS** original unlicensed-free broad attribute map, local sensory anchors; mini reference activity (not copied WCR wheel) | P1 |
| **M06.L03** Published research details (180 São Paulo consumers, one microlot etc.) precede understanding of expectations and blind tasting | **CASE/ACT** compare unlabeled versus labeled descriptions first; **ADV** study methods, citations stay editorial | P1 |
| **M06.L04** Students learn *about* cupping, but no obvious physical walk-through of tables/cups/spoons/timing or a usable comparison workspace | **VIS** beginner-appropriate comparison layout and procedure boundary; **WORK** dual route real sensory vs written evidence, never pretend simulation=actual tasting | **P0** |
| **M06.L05** CVA standard IDs and 80+ debates compete with four simple kinds of evidence. Four-lens matching already prints correct answers | **VIS** four-lens evidence board + real grouping **ACT**; move versioned standards and former numeric systems to ADV | **P0** |
| **M07.L01** Substantive colonial history retained (correct); more than 2,000 words of relatively text-only genealogy/history with no map/timeline | **VIS** original map/timeline Ethiopia–Yemen–Jawa/Priangan, human labor/power account without romanticism; no historical facts invented for atmosphere | P1 |
| **M07.L02** Strong actor/value explanation, but flows are table prose and generic P-17 notes; decision widget covers only one claim | **VIS** three parallel lanes: physical goods, information and money; **CASE** same named lot across M02–M07 | P1 |
| **M07.L03** Producer income crucial but economics heavy; examples answered inline; novice needs “100kg ceri→? earnings” illustrated bookkeeping | **ACT/WORK** simple income/cost ledger sandbox with controlled assumptions; **VIS** farm-gate/FOB/retail not equivalent | **P0** |
| **M07.L04** Good critical approach but voluminous rules (including product-code-specific 2026 EUDR deadline) swamp Foundation goal | **P0 restructure**: first 3 everyday labels and what records could verify, **VIS** claim→document→scope; EUDR specifics in ADV date-stamped/maintained reference (not default reading) | **P0** |
| **M07.L05** Final capstone starts with 6 evidence sets then reveals model answers before 350–500 word memo; synthetic scenario never accumulates in earlier lessons | **WORK** dossier assembled progressively across modules, one decision at a time, student response before rationale/rubric; allow voice/short-form equivalent, **retain history reflection** | **P0** |

## Structural redesign: fewer jumps, more “I understand it now”

### Course-level learner journey
1. **Hook grounded in a real object or decision.** A cup, photograph of cherry, green beans, roaster, filter, money ledger; never begin with nomenclature disputes.
2. **Concrete model:** one plain-language, illustrated mental model and named example. “This is Liberica; this is what plant/fruit/bean looks like; here is where it appears in coffee trade.”
3. **Explain the mechanism and constraints:** why something changes, with a single supported contrast.
4. **Worked example:** show one model answer with reasoning while learner is still gaining familiarity.
5. **Practice independently:** a genuinely new, brief attempt-first problem with no answer visible.
6. **Feedback/remediation:** explain what made a choice sensible; let user retry and offer a short prerequisite refresher.
7. **Transfer and continuity:** show how this fact changes what learner does next in recurring case.
8. **Deeper/advanced reading:** taxonomy exception, regulatory date, specific measurement caveat, and research methodology are unlocked/expendable, not removed from scientific source of truth.

Not every lesson needs all eight as separate screens; select minimum appropriate experience. Avoid “AI template” headings repeated mechanically.

### One continuous, honest case
Introduce a clearly fictional, consistently identified coffee lot (e.g. **Lot P-17, fictional training case**) from a small mixed-cultivar group in Java/Indonesia. Keep its internal facts **consistent across all module appearances** and explicitly label any alternate data set. Learners meet the same lot at harvest, processing, roast, brewing, sensory, pricing and final label audit. Distinguish *fictional teachable dataset* from **rights-cleared true field story**, which must be fact-checked and permissioned. A recurring scenario is not a substitute for diverse regional examples.

### Meaningful multimodal asset plan (no decorative demand)
- Mandatory original diagrams/rights-cleared photography at high-spatial-reasoning points: M02 anatomy/taxon/harvest, M03 changing physical product states, M04 roast stages/curve, M05 brew mechanisms, M06 sensory comparison and CVA board, M07 historical map/value-chain.
- Independent text alternatives and accessible captions, legible on mobile, interactive keyboard alternatives; clarify schematic versus photograph versus simulation.
- Inventory existing V1 diagrams/photographs first, screen for scientific claims and reproduction permissions. Do NOT attach SCA/WCR/CQI “approved” metadata unless independently documented.
- Prefer demonstrative photos of anatomy/specimens where available with verified permissions; drawn schema must be anatomically cautious and **not to scale** where appropriate.

### Actual progressive assessment
- **Worked example ≠ independent retrieval.** Do not expose the complete answer immediately below the first user question. Show explanations after attempt, with optional “lihat pembahasan” and keyboard-accessible interaction.
- **From easy to hard:** recognize object → group correctly → explain one cause with limits → choose evidence for an unfamiliar case.
- Variety and retrieval spacing: no repeated reliance on answer option that says “tidak otomatis”; include both *what is true* and *what is not supported*.
- Provide workable learner product: comparison note, simple sketch, photo annotation, number record, short explanation, memo. Avoid mandatory long essay for all.
- V2 review mode presently intentionally **read-only**; actual progress/migrations must not be activated until security and persistence P0 work is approved.

## Priority execution backlog / gates

**P0-A — Fix conceptual prerequisites (release blocker):**
1. Rewrite M02.L02 (**Liberica basics first; Excelsa second**).
2. Resolve M06.L01 duplicate vs M01.L01; make advanced sensory skills clearly build on M01.
3. Re-scope M05.L03 and M07.L04 for novice/advanced separation.
4. Rework M06.L05 into four practical lenses before codes.

**P0-B — Replace phantom or answer-revealing tasks (release blocker):**
1. Missing M04.L05 roast-log visual.
2. M06.L01 ten faux cards + M06.L05 four-lens answers; M03.L01 faux sorting; M03.L07 & M07.L05 answers before attempts.
3. Learner observation/worksheet capture for M01.L03, M05.L06, M06.L04, and capstone.

**P0-C — Learning-required original media (release blocker):**
1. M02.L04 ripeness images, M03.L01/L02 physical processing comparison, M03.L06 dry-mill/defect sample.
2. M04.L03 standardized roast image sequence, M05.L01 dilution/concentration diagram, M05.L04 brewing-flow view.
3. Human-readable alt text, copyright register, scientific domain sign-off.

**P1 — Other 36-lesson refinement:** fill gaps listed in matrix, smooth chapter transitions, realistic Indonesian context, scaffold formulas/vocabulary, rework overly long literary sections. Preserve all seven modules and history.

### Quality gate to declare each lesson ready
- [ ] A total beginner can explain **what the object is** in ordinary words *before* advanced exception.
- [ ] Exactly one main outcome per reading segment and no dangling prerequisite.
- [ ] Meaningful visual is present whenever spatial/physical mechanism requires one—or a documented equally effective alternative.
- [ ] If the text promises cards, diagram, screenshot, task or experiment, that **thing actually exists and works**.
- [ ] Learner must make at least one independent decision or expression for practice credit; **answers not leaked**.
- [ ] Correct feedback explains *why*, wrong feedback addresses plausible misconceptions, the learner can retry.
- [ ] Simulation versus actual field evidence and professional competency are clearly distinguished.
- [ ] Mobile, keyboard, alt-text, screen-reader paths checked.
- [ ] All scientific/industry-specific facts sourced and reviewed where safety/impact matters.
- [ ] Path edition and historical progress protected, no preview XP or certificates.
- [ ] At least one novice pilot observation of misunderstanding recorded, with action and re-test.

**Current rating is an informed desk judgment, not a measured learner pass rate.** Even perfect engineering checks cannot replace observation of actual new students.

## Liberica repair exemplar — what should change in M02.L02

**Current failure:** Section 4 uses roughly one generic sentence on *Coffea liberica* before diving into Kew 2026 *Coffea dewevrei* classification. It expects a novice to know Liberica, Excelsa and the idea of taxonomic synonym already.

**Proposed sequence within the section (not yet overwritten into live lesson):**

> **Kenalan dulu dengan Liberika.** Liberika adalah kopi dari tanaman *Coffea liberica*. Ini bukan varietas Arabika dan bukan jenis metode seduh. Tanaman ini dapat berbentuk pohon besar, dan pada banyak varietas/aksesi yang dibudidayakan mempunyai daun, buah, serta biji relatif besar dibanding bentuk Arabika yang sering ditemui. Seperti spesies lain, bentuk dan karakter tanamannya tetap bervariasi; ukuran tidak membuktikan identitas botani sebuah lot.
>
> **Di mana kita menjumpainya?** Liberika berasal dari wilayah Afrika tropis bagian barat dan tengah, kemudian ditanam di bagian Asia, termasuk Indonesia. Sebuah paket yang tertulis "Liberika" memberimu petunjuk mengenai **jenis tanaman**, bukan jaminan aroma ataupun mutu. Kamu masih perlu tahu kebun, penanganan buah, roasting dan penyeduhannya.
>
> **Bandingkan sebelum lanjut:** Arabika dan Liberika adalah nama jenis tanaman yang berbeda; Bourbon adalah kelompok varietas Arabika; Gayo menunjukkan asal wilayah. Semua dapat muncul di kemasan kopi, tetapi kategorinya tidak sama.
>
> **Baru sekarang: mengapa ada nama Excelsa?** Di perdagangan, Excelsa masih dikenal sebagai nama tersendiri. Catatan botani juga memiliki sejarah mengelompokkannya bersama Liberika. Dalam klasifikasi Kew POWO yang dicek Oktober 2026, *Coffea dewevrei* diterima sebagai spesies dan *Coffea excelsa* dicatat sebagai sinonim; ini masalah penamaan ilmiah, bukan berarti pembeli harus menghafal seluruh sejarah taksonomi. Bila laporan memerlukan kepastian identitas, verifikasi catatan botani dan sumber tanaman. **[Advanced note: riwayat perubahan klasifikasi]**.

Sources for edit/future audit: Kew POWO `Coffea liberica`: https://powo.science.kew.org/taxon/urn%3Alsid%3Aipni.org%3Anames%3A747169-1 ; `Coffea dewevrei`: https://powo.science.kew.org/taxon/urn%3Alsid%3Aipni.org%3Anames%3A747092-1 ; `Coffea excelsa`: https://powo.science.kew.org/taxon/747110-1 . Review taxonomy date and specimen images before publication.

**Suggested interaction:** display three rights-cleared or original specimens (Arabika, Liberika, Excelsa/dewevrei where confidently attributed) with clickable **plant / fruit / seed / label**, then ask learner to classify a previously unseen label. The current taxonomy five-card activity remains valuable **after** the foundational explanation; it cannot substitute for it.

## External learning-design references

- CAST UDL Guidelines 3.0: multiple modes of representation, language/symbol clarification, building on prior knowledge, multiple methods for action and expression: https://udlguidelines.cast.org/
- Official WCR and SCA materials already cited in existing manuscript; use versioned source review and legally cleared assets rather than reproducing protected wheels or professional forms.

## Implementation decision

**No source manuscripts, published lessons, learner histories or production services changed by this audit document.** Do not call eight pilot interactive widgets evidence of fully redesigned 36-lesson pedagogy. The next valid implementation batch is **M02.L02 Liberica rewrite + visuals, M06.L01 de-duplication, then M02/M03 physical representations**, with per-lesson usability review prior to scaling.
