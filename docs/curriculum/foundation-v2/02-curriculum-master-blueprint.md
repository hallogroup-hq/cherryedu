# CherryEdu Foundation 2.0 — Stage 02: Curriculum Architecture & Lesson Specifications

**Version:** v0.9 REVIEW CANDIDATE  
**Date:** 2026-10-12  
**Base:** Stage 01 audit of 32 existing Foundation lessons in `lib/data/seedData.ts` at `e21db3d6fdb863d5fedc73741042bdbdb447b95b`  
**Target:** `/paths/kopi-dari-hulu-ke-hilir`  
**Role:** Contract for writing and evaluating course content, NOT published learning content. No code/seed data, route, quizzes or production deployments modified.

> **Critical release note:** This is an internal CherryEdu program. It does not create an official SCA, Q Grader or CQI credential. Scientific, safety-relevant, and professional protocol content must be reviewed against current primary standards and appropriate subject-matter expertise before release.

## 1 — Intent and non-goals

**Learning promise:** Help a beginner understand how coffee travels from plant to cup, why coffees differ, how to evaluate claims, and how to make a defensible explanation grounded in observations rather than memorized stereotypes. The course is an on-ramp into specialist paths, not a professional license.

**Audience:** Indonesian-speaking beginner (consumer, aspiring barista, student, farmer-family member or hobbyist). No equipment, paid coffee kits, math fluency, or prior specialty coffee knowledge required. A **no-equipment equivalent** is mandatory for activities involving coffee tasting, scales, refractometers, lab records or brewing. Hands-on capability cannot be certified via simulations.

**Mandatory history policy:** Coffee history is a **core assessed lesson**, not an optional supplement. M07.L01 preserves origins in Ethiopia/Yemen, trade and arrival to Java, Priangan colonial labor systems, and connections to contemporary culture and value. Legends must not be presented as archival fact. The coffee-waves framework may enrich cultural interpretation but must not displace history or be asserted as universally official.

**Out of scope (move to relevant specialty):** Commercial RO design, boiler engineering, professional cupping accreditation, industrial fermentation recipes, pesticide management/dosing, proprietary green grading threshold tables without standards version, pro roasting profiles and detailed DTR optimization, industrial food safety SOPs, market price promises.

**Editorial voice:** Clear conversational Bahasa Indonesia; technical term introduced after why it matters; avoid marketing hype, AI-slop microcopy, fake exactitude, overused hero analogies and prescriptive flavor claims. Distinguish facts, inference, probability, preference and claims.

**Time:** Do NOT promise a fixed course duration based only on word count. Calibrate using pilots; track reading time, media/interaction time, and optional hands-on time separately. SCA's own Introduction to Coffee is 4–6h, but CherryEdu's extended digital path must not imply official equivalence.

## 2 — Measurable course learning outcomes (CLOs)

| ID | Demonstrable behavior after completion | Modules |
|---|---|---|
| CLO-1 | Describe and differentiate coffee sensory observations (taste, aroma, texture, preference), with uncertainty. | M01,M06 |
| CLO-2 | Explain farm-to-cup material flow, actors and information/quality handoffs. | M02,M03,M04,M05,M07 |
| CLO-3 | Compare species/cultivars, environment, harvest and processing without deterministic shortcuts. | M02,M03 |
| CLO-4 | Explain roasting and brewing mechanisms; design a one-variable experiment and interpret limitations. | M04,M05 |
| CLO-5 | Recognize processing, drying, storage and water/equipment risks; know when to defer to practitioners. | M03,M04,M05 |
| CLO-6 | Use CVA's physical/descriptive/affective/extrinsic perspectives appropriately and distinguish legacy 80-point framing. | M06,M07 |
| CLO-7 | Evaluate marketing, traceability and economic claims with explicit evidence and unknowns. | M07 |
| CLO-8 | Make a justified integrated coffee decision across stages using observation, evidence and limits. | M07 |

**Evidence rule:** Every CLO must be linked to at least one scored item and one transfer task; every lesson outcome must have formative evidence. Avoid verbs such as 'understand' without observable behavior at the lesson level.

## 3 — Learning topology

`M01 → M02 → M03 → M04 → M05 → M06 → M07` is the suggested first-time path. M06 revisits M01 sensory concepts with new vocabulary after M05 extraction; M07 links all modules. Optional enrichment nodes (extended coffee-waves debate, detailed genetics, certification comparison, industrial process operations) must not block progress.

**No overwhelm:** Learner first sees current module and next meaningful action, not 31 cards or an alphabet soup of industry terminology. Overview of the journey can be accessible on demand. Practice-feedback precedes graded evaluation. Learners may revisit any prior completed lesson and inspect sources/limitations.

## 4 — Module contracts

| Module | Core question | Outcome | Required exit artifact | Dependencies |
|---|---|---|---|---|
| M01: Mulai dari Cangkir | Mengapa dua cangkir sama-sama disebut kopi tetapi bisa terasa berbeda? | Mendeskripsikan perbedaan sensori yang dapat diamati; mengusulkan dan membatasi dugaan penyebab. | Catatan observasi dua sampel; minimal dua deskripsi sensorik dan dua penjelasan alternatif yang tidak diklaim pasti. | Tidak perlu tahu asal kopi atau punya grinder. |
| M02: Dari Pohon ke Buah Kopi | Apa yang sudah terbentuk sebelum ceri kopi dipetik? | Membedakan spesies, varietas, lingkungan, praktik kebun dan kematangan panen, serta batas inferensinya. | Peta faktor agronomi dengan setidaknya tiga faktor pengganggu serta satu klaim salah yang berhasil dikoreksi. | M01 |
| M03: Apa yang Terjadi Setelah Panen? | Mengapa lot dari kebun sama dapat berubah mutu dan karakter selama pengolahan? | Membedakan empat jalur processing, membaca catatan pengeringan/fermentasi sederhana, mengenali red flags. | Analisis risiko, alur proses dan kebutuhan data tambahan; tanpa memberikan SOP industri yang tidak tervalidasi. | M02 |
| M04: Bagaimana Panas Mengubah Kopi? | Mengapa green coffee berbeda dari roasted coffee, dan apa kompromi keputusan roasting? | Mendeskripsikan perubahan fisik/kimia roasting tanpa menggeneralisasi suhu/profil dan menjaga kesegaran. | Bukti perbandingan warna/hasil seduh dan interpretasi kontekstual. | M03 |
| M05: Mengekstraksi Rasa ke Cangkir | Mengapa air, gilingan dan metode seduh mengubah hasil walau kopinya sama? | Membedakan kekuatan dan ekstraksi; memilih eksperimen satu variabel dan membaca parameter air dengan tepat. | Rancangan eksperimen dan catatan perbandingan; mode simulator untuk peserta tanpa perlengkapan. | M04 |
| M06: Belajar Mengenali & Menilai Rasa | Bagaimana berbicara tentang rasa tanpa mencampuradukkan deskripsi, kesukaan dan penilaian mutu? | Memisahkan taste/aroma/texture, memberi deskriptor terukur, memahami tujuan cupping dan empat perspektif CVA. | Dua catatan sensory yang dapat dibandingkan, dan pilihan kerangka evaluasi yang sesuai. | M01,M05 |
| M07: Memahami Nilai di Balik Kopi | Bagaimana sejarah, pelaku dan bukti membentuk nilai kopi hingga hari ini? | Menjelaskan hubungan pelaku rantai nilai, membaca label kritis, memisahkan klaim dan bukti, menyelesaikan kasus integratif. | Argumentasi dari data, identifikasi keterbatasan bukti, dan keputusan yang bisa dipertanggungjawabkan. | M02,M03,M04,M05,M06 |

### Module entry/exit and remediation rules

#### M01 — Mulai dari Cangkir
- **Entry:** Tidak perlu tahu asal kopi atau punya grinder..
- **Essential question:** Mengapa dua cangkir sama-sama disebut kopi tetapi bisa terasa berbeda?
- **Required evidence:** Catatan observasi dua sampel; minimal dua deskripsi sensorik dan dua penjelasan alternatif yang tidak diklaim pasti.
- **Core case:** Blind-ish A/B berbasis tasting note atau simulasi bila peserta tidak punya kopi.
- **Source anchors:** WCR-L; SCA-CSP
- **Remediation:** If a student cannot demonstrate the concept, send them to the relevant explanatory example and a new variant of the case. Do not recycle identical answer order as a pass condition.

#### M02 — Dari Pohon ke Buah Kopi
- **Entry:** M01.
- **Essential question:** Apa yang sudah terbentuk sebelum ceri kopi dipetik?
- **Required evidence:** Peta faktor agronomi dengan setidaknya tiga faktor pengganggu serta satu klaim salah yang berhasil dikoreksi.
- **Core case:** Pilih informasi yang dibutuhkan untuk membandingkan dua lot dari elevasi berbeda.
- **Source anchors:** WCR-V; Kew; AGRONOMY
- **Remediation:** If a student cannot demonstrate the concept, send them to the relevant explanatory example and a new variant of the case. Do not recycle identical answer order as a pass condition.

#### M03 — Apa yang Terjadi Setelah Panen?
- **Entry:** M02.
- **Essential question:** Mengapa lot dari kebun sama dapat berubah mutu dan karakter selama pengolahan?
- **Required evidence:** Analisis risiko, alur proses dan kebutuhan data tambahan; tanpa memberikan SOP industri yang tidak tervalidasi.
- **Core case:** Rencana pengolahan pada kondisi hujan dan fasilitas pengeringan terbatas.
- **Source anchors:** PROCESSING; SCA-CSP
- **Remediation:** If a student cannot demonstrate the concept, send them to the relevant explanatory example and a new variant of the case. Do not recycle identical answer order as a pass condition.

#### M04 — Bagaimana Panas Mengubah Kopi?
- **Entry:** M03.
- **Essential question:** Mengapa green coffee berbeda dari roasted coffee, dan apa kompromi keputusan roasting?
- **Required evidence:** Bukti perbandingan warna/hasil seduh dan interpretasi kontekstual.
- **Core case:** Menganalisis tiga batch dengan deskripsi warna/profil dan menolak inferensi yang tidak didukung.
- **Source anchors:** SCA-CSP; ROASTING
- **Remediation:** If a student cannot demonstrate the concept, send them to the relevant explanatory example and a new variant of the case. Do not recycle identical answer order as a pass condition.

#### M05 — Mengekstraksi Rasa ke Cangkir
- **Entry:** M04.
- **Essential question:** Mengapa air, gilingan dan metode seduh mengubah hasil walau kopinya sama?
- **Required evidence:** Rancangan eksperimen dan catatan perbandingan; mode simulator untuk peserta tanpa perlengkapan.
- **Core case:** Dua seduhan dengan perubahan gilingan dan alkalinitas; identifikasi apakah kesimpulannya sah.
- **Source anchors:** WATER; SCA-CSP
- **Remediation:** If a student cannot demonstrate the concept, send them to the relevant explanatory example and a new variant of the case. Do not recycle identical answer order as a pass condition.

#### M06 — Belajar Mengenali & Menilai Rasa
- **Entry:** M01,M05.
- **Essential question:** Bagaimana berbicara tentang rasa tanpa mencampuradukkan deskripsi, kesukaan dan penilaian mutu?
- **Required evidence:** Dua catatan sensory yang dapat dibandingkan, dan pilihan kerangka evaluasi yang sesuai.
- **Core case:** Dua panelis menilai kopi sama secara berbeda; pisahkan deskripsi dari preferensi.
- **Source anchors:** WCR-L; SCA-CVA; SCA-STD
- **Remediation:** If a student cannot demonstrate the concept, send them to the relevant explanatory example and a new variant of the case. Do not recycle identical answer order as a pass condition.

#### M07 — Memahami Nilai di Balik Kopi
- **Core history rule:** M07.L01 is required and assessed (not optional). Historic VOC/Priangan systems must be narrated with indigenous labor perspectives, distinguish legend from source, and avoid conflating Preangerstelsel with Cultuurstelsel.
- **Entry:** M02,M03,M04,M05,M06.
- **Essential question:** Bagaimana satu kopi memperoleh nilai, dan apa yang benar-benar bisa dibuktikan dari ceritanya?
- **Required evidence:** Argumentasi dari data, identifikasi keterbatasan bukti, dan keputusan yang bisa dipertanggungjawabkan.
- **Core case:** Coffee Journey capstone: origin, processing, roast, brew, sensory, ekonomi & traceability.
- **Source anchors:** SCA-SPEC; SCA-CVA; WCR-V; SOCIOECON
- **Remediation:** If a student cannot demonstrate the concept, send them to the relevant explanatory example and a new variant of the case. Do not recycle identical answer order as a pass condition.


## 5 — Lesson specifications (34 / 34)

**Format note:** Legacy IDs show content provenance only. Create stable new IDs during implementation after migration mapping is approved. A blank/NEW source means the lesson was absent as a standalone article. Outcome, required ideas, exercise and evidence below are mandatory authoring acceptance criteria, not the finished lesson text.

### M01 — Mulai dari Cangkir

#### M01.L01 — Apa yang sebenarnya kita rasakan?
- **Observable outcome:** Membedakan taste, aroma, texture dan preferensi pribadi dari sebuah deskripsi sederhana.
- **Concept boundaries:** Flavor multiindra; rasa dasar; aroma; mouthfeel; beda apa dirasa vs disukai.
- **Preferred learning treatment:** Peta sensasi pada dua contoh deskripsi; cocokkan bukti dengan atribut.
- **Check for understanding / evidence:** Sortir 8 klaim menjadi observasi/taste/preferensi.
- **Mandatory misconceptions/guardrails:** Jangan mengajarkan flavor hanya berasal dari lidah; tidak perlu nama molekul.
- **Legacy source:** F7-1
- **Reference anchor(s):** WCR-L

#### M01.L02 — Mengapa dua cangkir bisa berbeda?
- **Observable outcome:** Membuat minimal tiga hipotesis yang masuk akal untuk dua kopi berbeda tanpa menganggap satu faktor pasti penyebabnya.
- **Concept boundaries:** Varietas, panen, processing, roasting, grinding, water, environment, perception; confounder.
- **Preferred learning treatment:** Kartu sebab-akibat terbuka dengan lebih dari satu jawaban benar.
- **Check for understanding / evidence:** Jelaskan apa yang bisa/tidak bisa disimpulkan dari pasangan sampel.
- **Mandatory misconceptions/guardrails:** Jangan jadikan satu tasting note bukti proses tertentu.
- **Legacy source:** F1-2,F4-2,F5-3
- **Reference anchor(s):** SCA-CSP

#### M01.L03 — Eksperimen rasa pertamaku
- **Observable outcome:** Mendeskripsikan dua sampel secara konsisten dan menuliskan satu keterbatasan pengamatan.
- **Concept boundaries:** Observasi terarah; urutan dan suhu tasting; bias label; self-calibration.
- **Preferred learning treatment:** Side-by-side tasting rumahan OR simulasi rekaman tasting dengan data.
- **Check for understanding / evidence:** Lembar observasi 2 sampel dan 1 ketidakpastian.
- **Mandatory misconceptions/guardrails:** Jangan mensyaratkan pembelian biji/alat; jangan mengklaim virtual tasting = real skill.
- **Legacy source:** F7-1,F7-3
- **Reference anchor(s):** WCR-L

### M02 — Dari Pohon ke Buah Kopi

#### M02.L01 — Di dalam buah kopi ada apa saja?
- **Observable outcome:** Menandai lapisan buah serta menjelaskan perubahan tiap lapisan pada tiga jalur processing.
- **Concept boundaries:** Exocarp; pulp; mucilage; endocarp/parchment; seed; silverskin; embryo.
- **Preferred learning treatment:** Anatomi berlabel interaktif + drag proses.
- **Check for understanding / evidence:** Label 6 komponen dan satu fungsi proses per komponen.
- **Mandatory misconceptions/guardrails:** Komposisi persen jangan dipukul rata; sugar migration not established.
- **Legacy source:** F2-1
- **Reference anchor(s):** WCR-V; PROCESSING

#### M02.L02 — Arabika, Robusta, Liberika dan nama-nama yang membingungkan
- **Observable outcome:** Membedakan spesies, varietas/kultivar, nama lokal/komersial dan klasifikasi yang masih berubah.
- **Concept boundaries:** Coffea arabica, C. canephora; Liberica/Excelsa naming status; biodiversity.
- **Preferred learning treatment:** Sortir kartu taksonomi dengan catatan status waktu.
- **Check for understanding / evidence:** Tandai 4 nama sesuai tingkat taksonomi; beri alasan kasus Excelsa.
- **Mandatory misconceptions/guardrails:** Taksonomi Kew bertanggal; jangan menyamakan species dengan rasa/quality tier.
- **Legacy source:** F3-1,F3-4
- **Reference anchor(s):** WCR-V; KEW

#### M02.L03 — Mengapa varietas dan lokasi saling berinteraksi?
- **Observable outcome:** Menjelaskan minimal tiga interaksi varietas, iklim, tanah, naungan dan pengelolaan.
- **Concept boundaries:** Genotype×environment×management; altitude proxy; adaptasi; rust resistance.
- **Preferred learning treatment:** Comparison matrix 2 lokasi × 2 varietas (data sintetis).
- **Check for understanding / evidence:** Pilih tiga confounders dan bantah 'mdpl menentukan rasa'.
- **Mandatory misconceptions/guardrails:** Jangan berikan roasting/brewing recipe berdasar mdpl.
- **Legacy source:** F2-2,F2-3,F3-2
- **Reference anchor(s):** WCR-V; AGRONOMY

#### M02.L04 — Kapan buah kopi siap dipanen?
- **Observable outcome:** Membedakan indikator kematangan dan merancang penilaian panen yang tidak memakai cutoff universal.
- **Concept boundaries:** Warna tergantung cultivar; firmness; Brix sample; defect; sorting.
- **Preferred learning treatment:** Foto 8 ceri multiwarna + data Brix semu untuk dibaca.
- **Check for understanding / evidence:** Identifikasi ceri ambigu dan informasi tambahan yang dibutuhkan.
- **Mandatory misconceptions/guardrails:** Tidak semua ceri matang merah; 18–24 Brix bukan hukum.
- **Legacy source:** F2-4
- **Reference anchor(s):** AGRONOMY

#### M02.L05 — Kasus kebun Indonesia: produktivitas, mutu dan risiko
- **Observable outcome:** Menilai keputusan kebun dari data terbatas sambil mengidentifikasi risiko iklim/hama.
- **Concept boundaries:** WCR variety traits; agroforestry tradeoffs; rust; berry borer; adaptasi.
- **Preferred learning treatment:** Decision tree kasus kebun lokal dengan tiga rencana budidaya.
- **Check for understanding / evidence:** Pilih strategi defensible dan sebut dua data yang belum tersedia.
- **Mandatory misconceptions/guardrails:** Jangan rekomendasikan pestisida/dosis atau varietas sebagai solusi tunggal.
- **Legacy source:** F2-3,F2-5,F3-3
- **Reference anchor(s):** WCR-V; AGRONOMY

### M03 — Apa yang Terjadi Setelah Panen?

#### M03.L01 — Dari ceri menjadi green coffee
- **Observable outcome:** Mengurutkan tahapan pascapanen dan membedakan produk keluarannya.
- **Concept boundaries:** Receiving; sorting; depulping; mucilage; drying; hulling; grading; storage.
- **Preferred learning treatment:** Build-your-flow diagram dengan cabang jalur proses.
- **Check for understanding / evidence:** Susun alur washed/natural dan identifikasi perubahan lapisan.
- **Mandatory misconceptions/guardrails:** Jangan klaim semua proses menggunakan water flotation.
- **Legacy source:** F4-1,F4-2,F4-3
- **Reference anchor(s):** PROCESSING

#### M03.L02 — Washed, Natural dan Honey: apa bedanya sebenarnya?
- **Observable outcome:** Membandingkan tiga metode berdasarkan urutan pelepasan buah dan pengeringan serta menghindari flavor determinism.
- **Concept boundaries:** Washed mucilage removal; natural whole cherry; honey pulped + mucilage; drying differences.
- **Preferred learning treatment:** Compare-three-process interactive cutaway dan mini-case.
- **Check for understanding / evidence:** Empat pernyataan: pilih yang pasti vs hanya mungkin.
- **Mandatory misconceptions/guardrails:** Nama metode bukan jaminan clean/fruity/sweet.
- **Legacy source:** F4-1,F4-2,F4-3
- **Reference anchor(s):** PROCESSING

#### M03.L03 — Giling Basah dan konteks Indonesia
- **Observable outcome:** Menggambarkan karakteristik wet-hulling serta potensi konsekuensi saat parchment dilepas lebih dini.
- **Concept boundaries:** Wet-hulled; moisture; local trading; physical risk; drying management.
- **Preferred learning treatment:** Diagram cabang + kasus sampel moisture log.
- **Check for understanding / evidence:** Identifikasi dua risiko dan konteks dagang lokal.
- **Mandatory misconceptions/guardrails:** Jangan klaim seluruh wet-hulled earthy/herbal; angka speed tanpa studi.
- **Legacy source:** F4-4
- **Reference anchor(s):** PROCESSING

#### M03.L04 — Fermentasi: mikroorganisme bekerja dalam kondisi apa?
- **Observable outcome:** Membedakan substrat, kondisi proses, hasil terukur dan hasil rasa yang hanya kemungkinan.
- **Concept boundaries:** Yeast/bacteria; time/temp/pH/oxygen; metabolites; starter; inoculation vs spontaneous.
- **Preferred learning treatment:** Kasus pembacaan log fermentasi ilustratif, tanpa resep teknis.
- **Check for understanding / evidence:** Pilih parameter yang perlu dimonitor dan risiko red flags.
- **Mandatory misconceptions/guardrails:** Jangan ajarkan SOP pangan/pressure tanpa safety and expert review.
- **Legacy source:** F4-5
- **Reference anchor(s):** PROCESSING

#### M03.L05 — Pengeringan dan penyimpanan: kapan mutu mulai berisiko?
- **Observable outcome:** Mengidentifikasi risiko drying tidak merata, kelembapan, kontaminasi dan cara membedakan observasi dari inferensi.
- **Concept boundaries:** Moisture vs water activity; mold risk; airflow; drying variability; storage.
- **Preferred learning treatment:** Triage kartu kejadian wet mill dan ukuran pengamatan.
- **Check for understanding / evidence:** Tandai status aman/tidak cukup data/perlu eskalasi.
- **Mandatory misconceptions/guardrails:** Tidak ada hari pengeringan universal; jangan mengasumsikan bau = identifikasi toksin.
- **Legacy source:** F4-2,F4-4,F2-1
- **Reference anchor(s):** PROCESSING

#### M03.L06 — Dry mill, sortasi dan penilaian fisik green coffee
- **Observable outcome:** Menjelaskan urutan hulling, sorting, physical defect checks, moisture and sample identity; membedakan temuan fisik dari deskripsi sensori maupun harga.
- **Concept boundaries:** Dry mill and wet mill not interchangeable; hulling timing differs by process; screen size, density, optical sorting; physical defects and representative samples; current CVA physical assessment based on 2004 green grading; ISO 4149:2025; SCA-110 still in development at source check.
- **Preferred learning treatment:** Sample handoff case, flow diagram and defect/lot identity table without copied licensed defect chart.
- **Check for understanding / evidence:** Diagnose three red flags on an invented green-bean inspection sheet and list follow-up checks.
- **Mandatory misconceptions/guardrails:** Don't claim zero defects means safe from toxins or guarantees excellent cup; don't treat SCA-110 as published; do not publish a universal binding numerical contract specification.
- **Legacy source:** F1-2,F1-3,F4-4 (new explicit quality-control competency)
- **Reference anchor(s):** SCA-CVA; SCA-STD; ISO-4149; FAO-OTA

#### M03.L07 — Dari wet mill ke dry mill: keputusan lot (simulasi)
- **Observable outcome:** Memilih tindakan konservatif saat kapasitas drying terbatas dan menindaklanjuti pemeriksaan fisik green coffee sebelum menjual lot.
- **Concept boundaries:** Production constraints; drying risks; green grading and sampling; document traceability; hold/release/escalation decision.
- **Preferred learning treatment:** Branching case: musim hujan, kapasitas drying, nomor lot, defect notes dan data yang hilang.
- **Check for understanding / evidence:** Memo keputusan 150–250 kata dengan verdict HOLD / REQUEST EVIDENCE / PROCEED FOR REVIEW dan alasan; tidak boleh otomatis menyatakan layak jual.
- **Mandatory misconceptions/guardrails:** Bukan pengganti operator QC; jangan menyatakan lot aman atau layak ekspor dari simulasi.
- **Legacy source:** F4-1..F4-5
- **Reference anchor(s):** PROCESSING

### M04 — Bagaimana Panas Mengubah Kopi?

#### M04.L01 — Apa yang berubah saat green coffee dipanaskan?
- **Observable outcome:** Menyebut perubahan fisik biji yang terlihat saat roasting serta kaitan fungsi panas.
- **Concept boundaries:** Water loss; expansion; color; gases; heat transfer basics.
- **Preferred learning treatment:** Annotated roasted bean time-lapse (foto seri bila lisensi aman).
- **Check for understanding / evidence:** Urutkan peristiwa fisik dan jelaskan satu efek.
- **Mandatory misconceptions/guardrails:** Heat transfer proportion machine-specific.
- **Legacy source:** F5-1
- **Reference anchor(s):** ROASTING

#### M04.L02 — Dari panas menjadi aroma: reaksi kimia roasting
- **Observable outcome:** Membedakan Maillard, degradasi termal, pembentukan volatil, dan first crack sebagai proses yang tumpang tindih.
- **Concept boundaries:** Chemical precursors; Maillard; other thermal pathways; probes; first crack.
- **Preferred learning treatment:** Layered timeline with overlap, not fixed phase cutoffs.
- **Check for understanding / evidence:** Kenali empat inferensi yang terlalu pasti pada roast curve.
- **Mandatory misconceptions/guardrails:** Bukan temperature recipe; bukan DTR tunggal.
- **Legacy source:** F5-2
- **Reference anchor(s):** ROASTING

#### M04.L03 — Light, medium, dark: apa yang berubah?
- **Observable outcome:** Membandingkan perkembangan roast berdasarkan warna dan karakter sensori tanpa menjamin note tertentu.
- **Concept boundaries:** Roast degree; roast development; measurement; defect vs style.
- **Preferred learning treatment:** Comparison tiga kopi satu lot, or simulated data.
- **Check for understanding / evidence:** Pilih dua trade-offs dan faktor perancu pengujian.
- **Mandatory misconceptions/guardrails:** Dark tidak otomatis defect; light tidak otomatis sour.
- **Legacy source:** F5-3
- **Reference anchor(s):** ROASTING

#### M04.L04 — Sesudah roasting: gas, oksigen dan kesegaran
- **Observable outcome:** Menguraikan hubungan degassing, packaging, grinding, time dan storage terhadap perubahan seduhan.
- **Concept boundaries:** CO2; oxidation; freshness; storage conditions; first use.
- **Preferred learning treatment:** Timeline 3 kemasan berbeda + hasil brewing fictional.
- **Check for understanding / evidence:** Usulkan kapan coba seduh dan cara mengevaluasi, tanpa tanggal optimum mutlak.
- **Mandatory misconceptions/guardrails:** Valve bukan oxygen barrier 100%; rest depends context.
- **Legacy source:** F5-4
- **Reference anchor(s):** ROASTING

#### M04.L05 — Membaca roast log, mengenali masalah dan menjaga keselamatan
- **Observable outcome:** Menafsirkan catatan roast batch sederhana, mengidentifikasi minimal tiga data yang perlu dibandingkan, membedakan dugaan defect dari bukti sensorik, dan menandai risiko kebakaran/ventilasi untuk eskalasi.
- **Concept boundaries:** Batch ID, roast curve/probe limits, first crack marker, RoR and smoothing, color/weight loss as imperfect descriptors, underdevelopment/scorching/baking as context-dependent diagnoses, fire/chaff/ventilation/airborne chemicals and safe work boundaries.
- **Preferred learning treatment:** Compare two fictional roast logs of the same lot with different endpoints; identify missing data, possible faults and safety red flags. No roasting required.
- **Check for understanding / evidence:** Produce an evidence-limited batch QC memo and a safety stop/escalate response; no sensory score without cupping data.
- **Mandatory misconceptions/guardrails:** Equal DTR ≠ equal flavor; smooth RoR ≠ guaranteed quality; nominal bean temperature ≠ true identical bean thermal history across probes; roast color ≠ sole defect test; no equipment-operation recipe, pressure, gas burner/firefighting or exposure advice without certified professional.
- **Legacy source:** F5-1,F5-2,F5-3,F5-4 (new explicit QA + workplace safety competency)
- **Reference anchor(s):** ROASTING; ROAST-ACIDITY-2024; ROAST-DEFECTS-2018; CDC-NIOSH; SCA-CSP

### M05 — Mengekstraksi Rasa ke Cangkir

#### M05.L01 — Ekstraksi dan kekuatan: dua hal berbeda
- **Observable outcome:** Membedakan extraction yield dari beverage strength secara konseptual.
- **Concept boundaries:** Coffee-soluble solids; extraction vs concentration; brew ratio.
- **Preferred learning treatment:** Animasi dua minuman sama TDS/volume berbeda; pertanyaan sebab-akibat.
- **Check for understanding / evidence:** Jelaskan mengapa 'kuat' tidak otomatis 'overextracted'.
- **Mandatory misconceptions/guardrails:** Jangan menganggap angka extraction yield pasti rasa ideal.
- **Legacy source:** F6-1
- **Reference anchor(s):** SCA-CSP; WATER

#### M05.L02 — Mengapa gilingan, dosis, rasio, suhu dan waktu penting?
- **Observable outcome:** Merancang perubahan satu variabel dan menyebutkan pengaruh saling terkait.
- **Concept boundaries:** Particle size; contact time; ratio; temperature; agitation; flow.
- **Preferred learning treatment:** Controlled brew scenario slider, with explicit illustrative values.
- **Check for understanding / evidence:** Pilih confounder dan variabel kontrol untuk A/B test.
- **Mandatory misconceptions/guardrails:** Tidak ada resep satu-untuk-semua; temperature not derived from altitude.
- **Legacy source:** F3-5,F5-3
- **Reference anchor(s):** SCA-CSP

#### M05.L03 — Air: memahami mineral tanpa mitos
- **Observable outcome:** Membedakan TDS, EC, hardness, alkalinity, pH dan menjelaskan batas inferensi tentang rasa.
- **Concept boundaries:** EC-based TDS approximations; Ca/Mg; bicarbonate buffer; equipment risk.
- **Preferred learning treatment:** Compare two anonymized water reports with units.
- **Check for understanding / evidence:** Identifikasi mengapa total TDS saja tidak cukup.
- **Mandatory misconceptions/guardrails:** Mg≠guaranteed floral, Ca≠guaranteed cocoa, high TDS not solvent-full.
- **Legacy source:** F6-1,F6-2,F6-3,F6-4
- **Reference anchor(s):** WATER

#### M05.L04 — Immersion dan percolation: beda jalur ekstraksi
- **Observable outcome:** Mengidentifikasi perbedaan metode dan konsekuensi praktis pada workflow.
- **Concept boundaries:** Immersion; percolation; bypass; filtration; flow/contact.
- **Preferred learning treatment:** Process animation French press/V60 using the same lot.
- **Check for understanding / evidence:** Pilih method sesuai constraint dan nyatakan trade-off.
- **Mandatory misconceptions/guardrails:** Jangan sebut salah satu metode selalu lebih baik.
- **Legacy source:** F6-1,F3-5
- **Reference anchor(s):** SCA-CSP

#### M05.L05 — Eksperimen seduh: satu variabel, satu pertanyaan
- **Observable outcome:** Menyusun percobaan sederhana, menafsirkan hasil dan mengakui keterbatasannya.
- **Concept boundaries:** Independent/control variables; repeat; blind A/B; tasting log.
- **Preferred learning treatment:** Practice DIY or guided simulation with dataset.
- **Check for understanding / evidence:** Recipe table, controlled-variable log, interpretation with uncertainty.
- **Mandatory misconceptions/guardrails:** No gear purchase requirement; simulated results never passed off as measured.
- **Legacy source:** F6-1,F7-1
- **Reference anchor(s):** SCA-CSP; LEARNING

### M06 — Belajar Mengenali & Menilai Rasa

#### M06.L01 — Lidah, hidung dan tekstur bekerja bersama
- **Observable outcome:** Mengklasifikasikan descriptor sebagai basic taste, aroma, texture, trigeminal atau hedonic reaction.
- **Concept boundaries:** Multisensory flavor; ortho/retronasal; mouthfeel; astringency.
- **Preferred learning treatment:** Sensory word cards with feedback and alternate plausible readings.
- **Check for understanding / evidence:** Sort 10 terms and distinguish 'fruity' from sweetness perception.
- **Mandatory misconceptions/guardrails:** No universal tongue zones; avoid medical claims.
- **Legacy source:** F7-1
- **Reference anchor(s):** WCR-L

#### M06.L02 — Menggunakan bahasa rasa dengan lebih akurat
- **Observable outcome:** Membedakan keluarga deskriptor dan kata spesifik; menghindari klaim kimia tanpa analisis.
- **Concept boundaries:** WCR lexicon; wheel hierarchy; calibrated reference; cultural examples.
- **Preferred learning treatment:** Guided descriptors using local analogies with caution labels.
- **Check for understanding / evidence:** From broad category to specific note + confidence note.
- **Mandatory misconceptions/guardrails:** Flavor note not chemical identification; wheel asset licensing.
- **Legacy source:** F7-3
- **Reference anchor(s):** WCR-L

#### M06.L03 — Dasar comparative cupping
- **Observable outcome:** Menjalankan/menafsirkan perbandingan sampel sederhana; mengenali perbedaan from full professional protocol.
- **Concept boundaries:** Controlled cupping rationale; protocol version; hygiene; temperature; blinding.
- **Preferred learning treatment:** Guided cupping at home OR provided synthetic dataset with two panelists.
- **Check for understanding / evidence:** Two structured observations + one possible confounder.
- **Mandatory misconceptions/guardrails:** Do not label informal home tasting SCA-certified cupping.
- **Legacy source:** F7-2
- **Reference anchor(s):** SCA-STD; SCA-CVA

#### M06.L04 — Mengapa CVA tidak berhenti di satu angka?
- **Observable outcome:** Membedakan physical, descriptive, affective, extrinsic assessments dan kapan masing-masing relevan.
- **Concept boundaries:** CVA framework; specialty definition; legacy 80+ vs modern context; qualitative value.
- **Preferred learning treatment:** Four-lens cards: classify different measurements and claims.
- **Check for understanding / evidence:** Apply each of four lenses to one sample profile and note unknowns.
- **Mandatory misconceptions/guardrails:** Not a Q Grader qualification; do not mix scoring instruments.
- **Legacy source:** F1-3,F7-4
- **Reference anchor(s):** SCA-CVA; SCA-SPEC

### M07 — Memahami Nilai di Balik Kopi

#### M07.L01 — Dari Ethiopia dan Yaman ke Jawa: sejarah yang membentuk kopi dunia
- **Observable outcome:** Menempatkan minimal enam peristiwa/konteks sejarah dalam urutan yang dapat dipertanggungjawabkan; membedakan satu legenda populer dengan bukti sejarah; menjelaskan dua akibat sistem kopi kolonial bagi masyarakat Priangan.
- **Concept boundaries:** Ethiopia origins; Yemen documented cultivation/culture; Red Sea/Indian Ocean networks; VOC Java and early trade; Preangerstelsel and differences from 1830 Cultuurstelsel; coffeehouse culture; postcolonial producer agency; coffee waves as optional contested lens rather than categorical official taxonomy.
- **Preferred learning treatment:** Story-driven chronological map with an evidence ladder (legend / archival-historical scholarship / later interpretation); Indonesia/Priangan case and competing actor viewpoints. Text-only timeline equivalent.
- **Check for understanding / evidence:** Chronological timeline of 6 events, evidence-grade notes for 3 claims, and a short reflection on who gained and who bore costs in forced coffee production.
- **Mandatory misconceptions/guardrails:** Kaldi is legend, not verifiable historical witness; avoid stating 1696 as proven first successful cultivation; distinguish Preangerstelsel and Cultuurstelsel; the term 'Java' in European markets reflects supply chains and power, not merely a natural regional tasting note; don't describe colonial coerced labor as idyllic.
- **Legacy source:** F1-1,F1-4 (history retained; waves moved to optional historical note).
- **Reference anchor(s):** HISTORY-OXFORD; HISTORY-BREMAN; HISTORY-CAMBRIDGE; HISTORY-INDONESIA

#### M07.L02 — Siapa melakukan apa dalam perjalanan kopi?
- **Observable outcome:** Memetakan alur produk, keputusan, data, risiko dan arus pembayaran dari farm ke cup.
- **Concept boundaries:** Farmer; processor; trader; dry mill; roaster; barista; consumer.
- **Preferred learning treatment:** Value chain interactive node map using Indonesia case.
- **Check for understanding / evidence:** Map five handoffs and one risk at each.
- **Mandatory misconceptions/guardrails:** Skor sensory tidak transferable mathematically across supply chain.
- **Legacy source:** F1-2,F1-1
- **Reference anchor(s):** SCA-CSP

#### M07.L03 — Kualitas, harga, dan nilai: apakah selalu sejalan?
- **Observable outcome:** Membedakan sensori, harga, biaya, preferensi konsumen, sertifikasi serta income petani.
- **Concept boundaries:** Specialty/commodity contextual; price vs profit; value lens; evidence.
- **Preferred learning treatment:** Compare two coffee value propositions and economics simplified.
- **Check for understanding / evidence:** Find three unsupported economic conclusions.
- **Mandatory misconceptions/guardrails:** Certification and premium do not guarantee farmer profit.
- **Legacy source:** F1-3,F1-5
- **Reference anchor(s):** SCA-SPEC; SOCIOECON

#### M07.L04 — Membaca label: fakta, klaim dan yang belum diketahui
- **Observable outcome:** Mengelompokkan traceability evidence, labels, processing notes, sensory language dan sustainability claim.
- **Concept boundaries:** Origin metadata; producer info; grade; timestamp; documentation; misleading marketing.
- **Preferred learning treatment:** Label detective exercise three fictitious retail bags.
- **Check for understanding / evidence:** Audit 6 claims and request appropriate evidence.
- **Mandatory misconceptions/guardrails:** Named producer not proof of direct trade; labels not guarantees.
- **Legacy source:** F3-5,F1-5
- **Reference anchor(s):** SCA-CVA; WCR-V

#### M07.L05 — Final Case — Satu kopi dari kebun hingga cangkir
- **Observable outcome:** Mengintegrasikan semua CLO dalam analisis lintas tahap dengan penjelasan keterbatasan.
- **Concept boundaries:** Origin→processing→roast→water→sensory→value; claim-evidence-uncertainty.
- **Preferred learning treatment:** Capstone dossier dataset sintetis, branching decision and justification.
- **Check for understanding / evidence:** Four-part memo, evidence log, scoring rubric, remediation.
- **Mandatory misconceptions/guardrails:** Simulation ≠ sensory practical credential; all simulated data clearly labeled.
- **Legacy source:** F1-2..F7-4
- **Reference anchor(s):** ALL


## 6 — Assessment blueprint

### 6.1 Diagnostic entry (ungraded)

- 8 brief questions, one per CLO. Purposes: calibrate examples and unlock optional skip-to-explanation, **never** bar beginners.
- Distractors should reveal concrete misconceptions (e.g., high altitude guarantees acidity; TDS meter reports exact GH; tasting note equals added flavoring; consumer price = farmer profit).
- Diagnostic feedback: why the claim is plausible, why inference is limited, how to revisit.

### 6.2 During every lesson

- At least **one consequential retrieval/check item** per lesson tied to its outcome, with specific rationale and retry variant.
- At least **one transfer or applied exercise** per lesson (interactive, dataset, diagram, or short reflection), not necessarily graded.
- Require no special tools. If the first-party interaction cannot support an honest exercise, provide a static case or downloadable worksheet; never fake a real tasting lab.
- Do not score subjective sensory preference as true/false. Score whether observations are expressed appropriately.

### 6.3 Module exit assessments

**Provisional design** (to validate through pilot, not an SCA requirement): 8 structured items per module, including **2 targeted retrieval, 3 application, 2 evidence interpretation, 1 critique of an unsupported claim**. This suggests 56 module-exit items total, not counting formative variants; balance difficulty by cognitive demand, not by arbitrary count.

- All selected responses have a single defensibly keyed answer OR clearly signal multi-select; rationale explains why alternative distractors fail.
- Where more than one policy/choice could work, use graded criteria or choose 'best with these constraints' rather than invent a universal right answer.
- **Provisional mastery threshold:** ≥80% module exit performance **and no missed safety-critical flag** (a safety flag must be remediated regardless of aggregate score). This is a PRODUCT threshold proposal, not an externally validated educational/industry standard.
- Unlimited or reasonable controlled retakes with equivalent question variants and feedback; track actual attempt_number and route back to weak outcomes.

### 6.4 Capstone — Coffee Journey Dossier

**Simulation only; all business/technical values below must be visibly marked synthetic.** Give a single origin dossier with farm facts, varietal uncertainty, a washed or natural processing log, roaster notes, brewer data, descriptive observations from two tasters, a packaging label, and a simplified payment trail. Avoid real farm or person name unless permission and verified data are available.

**Four evidence products:**
1. **Timeline map:** order the six farm→cup handoffs and point to one material/quality/data risk at each.
2. **Evidence evaluation:** sort six statements into measured, reasonable inference, unverified marketing, and missing information; explain at least two uncertainties.
3. **Decision exercise:** propose a change in brewing or processing plan, state one variable to control, and explain safety/feasibility limitations.
4. **Value and sensory statement:** distinguish descriptive vs affective observations; distinguish retail price, farmer price, producer costs and sustainability evidence.

**Rubric (0–3 each, total 12):**

| Dimension | 0 — Missing/wrong | 1 — Partial | 2 — Competent | 3 — Strong |
|---|---|---|---|---|
| Process reasoning | Major incorrect chain | Several missing actors/stages | Correct core pathway | Correct pathway + viable alternatives |
| Evidence quality | Unsupported confident claims | Some observations but leaps | Data-backed + uncertainty | Contradictory evidence addressed |
| Practical decision | Uncontrolled/unsafe proposal | Partial constraints | One controlled defensible choice | Trade-offs + fallback + safe escalation |
| Value/sensory literacy | Preferences treated as facts | Some distinction | Distinguishes 4 CVA lenses and economics | Context-sensitive judgment, clear uncertainty |

**Provisional pilot acceptance:** 9/12 overall, no rubric dimension below 2, and no critical safety misconception. Needs validation with novices and experts before being a paid-completion criterion. Short text can be self-evaluated using published rubric or human-assessed; DO NOT claim machine grading valid for open reasoning without calibration.

### 6.5 Retention and spaced checks

- Revisit M01 distinctions after M03, M05 and M07 using new examples, rather than simply redisplaying the same MCQs.
- Optional follow-up sessions after completion to assess durable retrieval; do not make a hard gate before platform notifications/follow-up exists.
- Track wrong-answer taxonomy, time-on-task and successful second-attempt transfer, while avoiding vanity completion-rate-only metrics.

## 7 — Instructional structure and media policy

An author may vary presentation style to fit topic but must answer in the lesson: **Why should the learner care? What actually happens? What evidence supports this? In what conditions does it not apply? How can the learner test or use this insight? What do they need next?**

Recommended patterns:

- **Narrative + interactive timeline:** history, value chain, farm-to-cup transitions.
- **Annotated real-world photograph or clean diagram:** cherry anatomy, wet-hulled layers, roasted bean changes. Labels verified against subject matter, don't use fabricated photorealistic technical cross sections.
- **Contrasting case:** processing, agronomy, sustainability, roast level; conflicting outcomes are educationally useful.
- **Graph/data table:** water parameters, drying logs, roasting behavior; include units, provenance, sample size (when known), uncertainties and interpretation.
- **Sensory practice:** descriptor sorting or real optional A/B; simulation explicitly not actual smelling/tasting.

**Anti-slop policy:** no decorative stock photo just to pad lessons; no arbitrary exact numbers, exaggerated claims, irrelevant long scientific vocabulary, pseudo-academic terms, invented quotes, or claims that a taste/technique is 'always' superior. When a figure requires a photo/diagram, it must carry an explicit teaching purpose and alt text.

## 8 — Scientific evidence system

Every substantive technical assertion in the finished lesson must be auditable by **claim ID → proposition → source → evidence type → contextual limitation → editorial resolution**. Source link to a homepage alone does not count as proof of a narrow mechanistic claim.

**Evidence types:** A=published primary standard/official taxonomy (include version/date); B=peer-reviewed experimental result (design/sample/context); C=systematic/scoping review; D=validated industry operational material or expert practice (label as practice, not law); E=illustrative simulation (never cite as empirical fact).

**Version controls:** store `source_checked_at`, `standard_version`, `claim_id`, `expert_review_status`. Examples: SCA CVA, accepted botanical naming, proprietary protocol, SCA water requirements, industry certification rules. Mismatches cause editorial review, not silent rewriting of all descriptions.

**Mandatory red flags:**
- Specialty definition limited to ≥80; CVA system confused with legacy scoring.
- Species/variety determined solely by trade label or flavor note.
- Water treated as a container with 'no remaining space' at elevated TDS.
- Mg/Ca chemical binding extrapolated into fixed cup-note outcomes.
- Anaerobic/CO2 fermentation recipes with promised results and no safety constraints.
- 'Terroir' as unproven flavor molecule transfer from citrus trees nearby.
- Bean altitude automatically dictates water or roasting temperature.
- Universal roasting DTR/rest time/sweet-spot.
- Certificate described as SCA/CQI qualification without external recognition.

## 9 — Inclusive UX and accessibility

- Text-first lessons work on basic phones and variable connectivity; diagrams have meaningful alt text and downloadable transcripts/data.
- No color-only status, no audio-only question, no required paid tasting kit, no timed quiz unless timing is integral to assessed ability.
- Short segments and progressive disclosure avoid overwhelming first-timers; don't fragment coherent explanations into 100 microcards.
- Glossary terms can be tapped but course content remains legible without special interactions.
- Cases must indicate fictional datasets and where the learner needs real practice with a mentor/equipment.

## 10 — Dependency + traceability table

| New module | Primary predecessor | Stage 01 problems explicitly resolved | CLO focus |
|---|---|---|---|
| M01 | None | F7-1 beginner overload, missing observation discipline | 1,8 |
| M02 | M01 | F2-2 altitude; F2-4 Brix; F3-1 taxonomy; F2-3 agroforestry | 2,3 |
| M03 | M02 | F4-2 osmosis; F4-5 fermentation risk; F4-3 honey labeling; drying/storage; NEW green coffee grading | 2,3,5 |
| M04 | M03 | F5-2 fixed reaction temps; F5-3 drop temps; F5-4 resting; NEW reading roast logs, defects and workplace safety | 4,5 |
| M05 | M04 | F6-1 'hungry water'; F6-2 full solvent; F6-3 Mg flavor | 4,5 |
| M06 | M01,M05 | F7-2 old protocol; F7-4 legacy scoring; F7-3 tongue zone | 1,6 |
| M07 | All | F1-1 preserved history; F1-4 as optional interpretive wave lens; F1-2 score metaphor; F1-3 specialty; F1-5 fair trade; F3-5 label claims | 2,6,7,8 |

## 11 — Gates (fail closed)

| Gate | Acceptance rule | What blocks progress |
|---|---|---|
| G02-A Curriculum integrity | 34 unique new lesson slots; each belongs to one module; full CLO mapping; prerequisites acyclic | Missing slot, duplicate, orphan outcome |
| G02-B Scientific guardrail | Each P0 Stage01 issue assigned specific lesson + explicit disallowed claim | P0 unmapped or current standards called obsolete incorrectly |
| G02-C Assessment alignment | Every lesson has evidence + module exit; every CLO has graded evidence and transfer | Pure trivia only; unscorable skill claims |
| G02-D Accessibility | All required activities have no-equipment alternative and nonvisual text equivalent | Buying equipment required; audio-only evaluation |
| G02-E Editorial feasibility | Sources named, claims flagged for validation, no fake confidence, license plan | Uncited numeric SOP, safety recipe, asset rights unclear |
| G03 Authoring readiness | Module map reviewed; pilot first module after source-by-claim check | Expert/safety reviewer needed but absent for technical prescriptive content |

**Stage 02 status on 2026-10-12 (rev. 4: history core protected, processing QC + roasting safety explicit):** Blueprint drafted and self-consistency checks complete; **not yet expert approved or learner validated**. Gate G02-A and structural elements of G02-B–E are document-check candidates, not empirical passes. Stage 03 authoring may start as internal draft, but MUST NOT replace production before research/source/expert/learner gates.

## 12 — Reference registry (starting points, not citations for all specific claims)

**Added Module 04 roasting/occupational source anchors:**
- **ROAST-ACIDITY-2024:** [Roast profile effects on titratable acidity (2024)](https://pmc.ncbi.nlm.nih.gov/articles/PMC11002029/). Maillard chemistry continues after first crack; profile and acidity changes are context-dependent.
- **ROAST-DEFECTS-2018:** [Giacalone et al., common roasting defects with sensory and consumer testing (2018)](https://www.sciencedirect.com/science/article/pii/S0950329318302015). Do not transfer its defect settings to other machines as universal SOP.
- **CDC-NIOSH:** [Coffee workers' exposure to diacetyl and 2,3-pentanedione](https://www.cdc.gov/niosh/bulletin/2016/coffee-workers.html). Workplace exposure risks; do not conflate all roasting settings with identical exposures.
- **SCA-CSP:** [Coffee Skills Program — Roasting module](https://education.sca.coffee/coffee-skills-program). Official specialist scope includes basic equipment safety; CherryEdu is not SCA-certified.


**New processing-quality anchors:**
- **ISO-4149:** https://www.iso.org/standard/87699.html — ISO 4149:2025, green coffee visual/olfactory examination and foreign matter/defect methods (paid full text, do not reproduce).
- **FAO-OTA:** https://www.fao.org/4/x6939e/X6939e04.htm — OTA risk from processing and storage; older guidance, corroborate current requirements.
- **SCA-STD:** https://sca.coffee/research/coffee-standards — SCA-110 is **in development**, not published as of checked date 2026-10-12.


**History sources used for M07.L01:**
- **HISTORY-OXFORD:** Michel Tuchscherer (2024), *The Ethiopian and Yemeni Roots of Coffee*, Oxford Research Encyclopedia, https://academic.oup.com/edited-volume/61795/chapter-abstract/546047404 — historic uncertainty, origin, Kaldi as myth.
- **HISTORY-BREMAN:** Jan Breman (2015), *Mobilizing Labour for the Global Coffee Market: Profits from an Unfree Work Regime in Colonial Java*, Amsterdam University Press, https://www.jstor.org/stable/j.ctt197055k — coercion and economics of Priangan coffee.
- **HISTORY-CAMBRIDGE:** *The Demographic Effects of Colonialism: Forced Labor and Mortality in Java, 1834–1879*, Journal of Economic History (2022), https://www.cambridge.org/core/journals/journal-of-economic-history/article/demographic-effects-of-colonialism-forced-labor-and-mortality-in-java-18341879/8263BFDEC1A77EA9B92BBCABC278F4F9 — broader Java forced cultivation; distinguish periods.
- **HISTORY-INDONESIA:** Mumuh Muhsin Zakaria, *Coffee Priangan in the Nineteenth Century*, Universitas Padjadjaran, https://vm36.upi.edu/index.php/historia/article/view/12227 — regional case/context; competing periodizations to verify at drafting stage.


| Code | Source | Link | Role / caveat |
|---|---|---|---|
| SCA-CSP | SCA Coffee Skills Program | https://education.sca.coffee/coffee-skills-program | Scope reference, not an endorsement or reproduction of SCA official curriculum |
| SCA-SPEC | SCA What is Specialty Coffee | https://sca.coffee/what-is-specialty-coffee | Current definition; check changes before publishing |
| SCA-CVA | SCA Coffee Value Assessment | https://sca.coffee/value-assessment/ | Four assessment perspectives |
| SCA-STD | SCA Coffee Standards | https://sca.coffee/research/coffee-standards | Versioned standards SCA-102/103/104; verify actual document terms |
| WCR-V | World Coffee Research Variety Catalog | https://varieties.worldcoffeeresearch.org/ | Species/variety agronomy with context |
| WCR-L | World Coffee Research Sensory Lexicon | https://worldcoffeeresearch.org/read-more/news/174-world-coffee-research-sensory-lexicon | 110 attributes; reproduction/access licensing applies |
| KEW | Kew Plants of the World Online — Coffea | https://powo.science.kew.org/ | Check accepted name and retrieval date |
| PROCESSING | Coffee processing research registry | https://pubmed.ncbi.nlm.nih.gov/?term=coffee+fermentation+review | Collection pointer, replace with individual peer-reviewed specific studies per lesson |
| AGRONOMY | Coffee agronomy research registry | https://worldcoffeeresearch.org/resources | Collection pointer, cite experiments & local extension evidence per claim |
| ROASTING | SCA roasting topic + literature | https://education.sca.coffee/coffee-skills-program | Course anchor only; technical claims need peer-reviewed/validated citations |
| WATER | Hendon et al. 2014 | https://pubmed.ncbi.nlm.nih.gov/24802110/ | Limited mechanistic inference, not universal taste outcome |
| SOCIOECON | Coffee livelihoods research registry | https://worldcoffeeresearch.org/resources | Must add producer-region-specific economic data when drafting |
| LEARNING | Dunlosky et al. 2013 | https://doi.org/10.1177/1529100612453266 | Retrieval/distributed practice evidence |

## 13 — Implementation contract (deferred)

**Do not edit `seedData.ts` yet.** When implementation is approved, author a migration plan that maps 32 legacy IDs to the 31 new slots (many-to-many), protects existing user progress, checks certificate/quiz semantics, and preserves rollback. Lesson ID changes cannot be introduced casually when learner state is stored by lesson ID.

Proposed files for subsequent stages: `03-lessons/M01-L01.md` onward; `04-assessments/blueprint.md`; `05-evidence/claims.csv`; `06-qa/module-scores.md`; `07-migration/plan.md`. Only create these after the relevant stage has substance—no fake green reports or empty decorative folders.

## 14 — Blueprint acceptance checklist

- [x] 7 module contracts defined.
- [x] 34 lesson IDs specified without duplicate new slot (legacy sources may repeat intentionally).
- [x] Every lesson has explicit observable outcome, boundaries, preferred teaching treatment and evidence.
- [x] P0 issues routed to relevant lessons with disallowed misconceptions.
- [x] Module exit and capstone scoring frameworks drafted.
- [x] Accessibility and no-equipment equivalence rules stated.
- [ ] Scientific claims in final authored content individually source-verified.
- [ ] Subject-matter experts signed off the high-risk claims and practical protocols.
- [ ] Assessment items written, calibrated and piloted.
- [ ] Real beginner learner test run.
- [ ] Implementation migration plan written and tested.
