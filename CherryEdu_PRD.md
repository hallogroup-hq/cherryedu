# CherryEdu — Product Requirements Document (PRD)

**Versi Dokumen:** 2.0 (Comprehensive Platform & Implementation Audit)  
**Tanggal Rilis Dokumen:** September 2026  
**Status Produk:** Production Live (`https://cherryedu.vercel.app`)  
**Penanggung Jawab:** Cherry Coffee Roastery & Fahrul M.W  
**Domain Produksi:** [https://cherryedu.vercel.app](https://cherryedu.vercel.app)  
**Repository GitHub:** `https://github.com/hallogroup-hq/cherryedu.git`

---

## 1. Executive Summary & Visi Produk

### 1.1 Latar Belakang Industri
Indonesia merupakan produsen kopi terbesar ke-4 di dunia dengan kekayaan varietas geografis (Gayo, Toraja, Flores, Bali Kintamani, Java Ijen, Mandheling, Kerinci, Wamena). Kendati demikian, ekosistem edukasi kopi di tanah air mengalami tantangan struktural:
1. **Hambatan Finansial**: Biaya sertifikasi formal internasional (SCA / CQI) berkisar antara Rp 8.000.000 – Rp 35.000.000 per modul, sehingga tidak dapat diakses oleh mayoritas pemuda, barista pemula, dan petani lokal.
2. **Ketiadaan Standar Terstruktur**: Konten gratis di internet terpecah-pecah, tidak memiliki kurasi ilmiah, dan sering kali bertentangan antara satu kreator dengan lainnya.
3. **Pemisahan Hulu dan Hilir (The Silo Problem)**: Barista perkotaan kerap tidak memahami botani dan proses fermentasi pasca panen di kebun, sementara petani dan prosesor di hulu jarang memiliki akses untuk memahami sains ekstraksi espresso dan sensory cupping internasional.

### 1.2 Visi & Misi CherryEdu
* **Visi**: Menjadi platform edukasi dan ekosistem talenta kopi terdepan di Asia Tenggara yang menjembatani sains hulu (*agronomi, fermentasi, pasca panen*) hingga hilir (*roasting, brewing, sensory, bisnis kafe*) secara inklusif dan terstandarisasi.
* **Misi**:
  1. Demokratisasi kurikulum spesialisasi kopi berstandar SCA (*Specialty Coffee Association*) dan CQI (*Coffee Quality Institute*) dalam Bahasa Indonesia.
  2. Menyediakan alat bantu visual ilmiah (*interactive scientific diagrams & professional tools*) yang memudahkan pemahaman sains ekstraksi dan termodinamika sangrai.
  3. Membangun jembatan karier terpercaya antara pemilik usaha (*coffee shop owner/roastery*) dan talenta tersertifikasi melalui ekosistem digital terintegrasi.

---

## 2. Status Platform & Arsitektur yang Telah Terimplementasi

Platform CherryEdu saat ini telah mencapai status **Production Ready (Vercel Live)** dengan cakupan fitur yang melampaui fase MVP awal:

```
┌───────────────────────────────────────────────────────────────────────────┐
│                           CHERRYEDU PLATFORM                               │
│                         https://cherryedu.vercel.app                      │
└───────────────────────────────────────────────────────────────────────────┘
                                      │
         ┌────────────────────────────┼────────────────────────────┐
         ▼                            ▼                            ▼
┌──────────────────┐        ┌──────────────────┐        ┌──────────────────┐
│  LEARNING CORE   │        │ COFFEE TOOLSUITE │        │   CMS & ADMIN    │
├──────────────────┤        ├──────────────────┤        ├──────────────────┤
│• 7 Learning Paths│        │• SCA Cupping Form│        │• Analytics KPI   │
│• 51 Modul Silabus│        │• Flavor Wheel    │        │• Lesson Editor   │
│• 160 Full Lesson │        │• Brew Calculator │        │• Quiz Builder    │
│• 26 Modul Kuis   │        │• Dial-In Tool    │        │• Page Builder    │
│• 137 Soal Ujian  │        │• Water Calculator│        │• Collaborator Mgmt│
│• 8 SVG Diagrams  │        │• Compendium      │        │• Certificate Mgmt│
└──────────────────┘        └──────────────────┘        └──────────────────┘
         │                            │                            │
         └────────────────────────────┼────────────────────────────┘
                                      ▼
┌───────────────────────────────────────────────────────────────────────────┐
│                      ECOSYSTEM & TALENT SERVICES                          │
├───────────────────────────────────────────────────────────────────────────┤
│• Onboarding Quiz (Path Recommender)   • Verified Certificate by Fahrul MW│
│• Coffee Job Board (Hire & Apply)      • Public Verification (/verify/:id) │
│• Komunitas Diskusi & Forum Interaktif • Gamifikasi (XP, Badge, Streak)    │
└───────────────────────────────────────────────────────────────────────────┘
```

### 2.1 Metrik Implementasi Aktual (Audit Codebase)
* **Learning Paths Aktif**: 7 Jalur Spesialisasi Lengkap.
* **Total Modul Kurikulum**: 51 Modul.
* **Total Materi Pembelajaran (Lessons)**: 160 Materi Lengkap.
* **Visual Media Coverage**: 100% (160 dari 160 materi memiliki foto edukatif resolusi tinggi + takarir ilmiah).
* **Alat Bantu Ajar Vektor Ilmiah (Interactive SVG)**: 8 Modul Diagram Kustom terintegrasi.
* **Total Bank Kuis**: 26 Kuis dengan 137 Butir Soal Teruji dan pembahasan kunci jawaban.
* **Tools Profesional Kopi**: 6 Tool Interaktif Mandiri.
* **Otentikasi & Akun**: Supabase Auth (Email Password & Google OAuth) + User Role Switcher.
* **Pengesahan Sertifikat**: Digital Signature oleh Fahrul M.W (Master Roaster & Q-Grader Instructor).
* **Teknologi State**: Hybrid LocalStorage Engine (`cherryedu_state_v5`) dengan auto-sync data resmi.

---

## 3. Struktur Kurikulum Lengkap (7 Learning Paths — 160 Materi)

Filosofi kurikulum CherryEdu mewajibkan fondasi menyeluruh (*Farm-to-Cup*) sebelum percabangan spesialisasi:

### 3.1 Path 1: Foundation — Kopi dari Hulu ke Hilir
* **Target Audience**: Seluruh praktisi kopi (Wajib lulus sebelum mengambil sertifikat spesialisasi).
* **Level**: Beginner to Intermediate | **32 Materi** | **7 Modul** | **7 Kuis**
* **Struktur Modul**:
  1. **Modul F-1: Ekosistem & Peta Industri Kopi Global & Indonesia** (4 Materi)
     - Sejarah migrasi kopi dari Ethiopia, Yaman, Batavia (1696), hingga perkebunan modern.
     - Rantai pasok kopi: Petani, Kolektor, Processor, Eksportir, Roaster, Barista, Konsumen.
     - Specialty Coffee vs Commercial Coffee (Definisi SCA, skor 80+, defect triage).
     - Mengapa pemahaman holistik Farm-to-Cup menciptakan nilai tambah industri.
  2. **Modul F-2: Agronomi, Botani & Ekologi Tanaman Kopi** (5 Materi)
     - Anatomi pohon kopi: perakaran, tajuk, daun, pembungaan, dan pembuahan.
     - Anatomi buah ceri kopi (Eksokarp, Mesokarp, Endokarp, Spermoderm, Endosperma).
     - Kondisi agroklimat ideal: elevasi (masl), curah hujan, suhu mikro, dan naungan (*shade-grown*).
     - Sebaran geografis terroir kopi Indonesia (Sumatra, Jawa, Bali, Flores, Sulawesi, Papua).
     - Protokol pemetikan ceri: Selective picking (Brix meter 18–24°) vs Strip picking.
  3. **Modul F-3: Varietas, Spesies & Genetika Kopi** (5 Materi)
     - Perbandingan taksonomi: Arabika (*C. arabica*), Robusta (*C. canephora*), Liberika (*C. liberica*).
     - Pohon silsilah Arabika dunia: Typica, Bourbon, Caturra, Catuai, SL28, Pacamara, Geisha.
     - Varietas legendaris Indonesia: Tim-Tim (Hibrido de Timor), Ateng Super (Catimor), Sigarar Utang, Andungsari, Kartika.
     - Hubungan genetika kultivar terhadap densitas seluler dan potensi asam organik.
     - Membaca dan menganalisis label spesifikasi green bean specialty secara presisi.
  4. **Modul F-4: Sains Pemrosesan Pasca Panen (Processing Methods)** (5 Materi)
     - Natural / Dry Process: fermentasi intra-buah, kinetika pengeringan, profil fruity.
     - Fully Washed Process: depulping, degradasi pektin enzimatis, kejernihan rasa (*clean cup*).
     - Honey / Pulped Natural: varian Yellow, Red, dan Black Honey berbasis persentase musilase.
     - Giling Basah (Wet-Hulling) khas Sumatra: proses kupas labu kadar air 35–40%, profil body tebal.
     - Fermentasi Terkendali: Anaerobik, Carbonic Maceration, Co-fermentasi ragi dan buah.
  5. **Modul F-5: Sains Penyangraian (Roasting Science Fundamentals)** (5 Materi)
     - Termodinamika sangrai: Konduksi, Konveksi, Radiasi dalam tabung roaster.
     - Fase penyangraian: Drying Phase, Maillard Reaction, Caramelization, First Crack, Development Phase.
     - Mengontrol laju kenaikan suhu (Rate of Rise / RoR) dan Development Time Ratio (DTR).
     - Spektrum sangrai (Light, Medium, Dark) dan pengaruhnya terhadap pirazin, lipid, dan asam klorogenat.
     - Proses degassing, stabilisasi senyawa volatil, dan resting time biji sangrai.
  6. **Modul F-6: Kimia Air untuk Seduh Kopi (Water Science)** (4 Materi)
     - Air sebagai 98.5% komponen seduhan: peranan mineral terlarut (TDS, Total Hardness, Alkalinitas).
     - Ion Kalsium (Ca²⁺) dan Magnesium (Mg²⁺) sebagai agen ekstraktor molekul rasa polar.
     - Sistem penyangga bikarbonat (HCO₃⁻) dan dampaknya terhadap persepsi keasaman (acidity).
     - Standar air seduh SCA: TDS 75–250 ppm, pH 6.5–7.5, GH 50–175 ppm, KH 40–75 ppm.
  7. **Modul F-7: Evaluasi Sensori & Protokol Cupping** (4 Materi)
     - Fisiologi pengecapan manusia: Lidah (gustatori), Hidung (olfaktori retro-nasal), Trigeminal (mouthfeel).
     - Format SCA Flavor Wheel: klasifikasi atribut rasa positif dan cacat rasa (*taint/fault*).
     - Protokol uji cita rasa resmi SCA: rasio 8.25g / 150ml, suhu 93°C, evaluasi 5 mangkok.
     - Latihan kalibrasi sensory blind tasting dan deskripsi tasting notes objektif.

---

### 3.2 Path 2: Barista Specialization Path
* **Target Audience**: Barista profesional, head barista, manajer bar kafe.
* **Level**: Comprehensive Professional | **30 Materi** | **10 Modul** | **5 Kuis**
* **Struktur Kurikulum**:
  - **B-1: Peran & Profesionalisme Barista**: Etika kerja, alur kerja bar (*speed of service*), kebersihan higienis (*food safety*), mise en place.
  - **B-2: Anatomi Mesin Espresso & Grinder**: Komponen boiler ganda vs heat exchanger, pompa rotary, PID, burr flat vs conical.
  - **B-3: Fundamental Ekstraksi Espresso**: Dosing presisi, distribusi WDT, tamping horizontal rata, channeling prevention.
  - **B-4: Espresso Dial-In Mastery**: Segitiga parameter espresso (Dose, Yield, Extraction Time), diagnosis under vs over extraction, penyesuaian mikrometrik grind size.
  - **B-5: Kimia Susu & Teknik Microfoam**: Denaturasi protein whey dan kasein pada suhu 60–65°C, teknik vortex steaming, tekstur glossy sutra.
  - **B-6: Seni Latte Art**: Fisika penuangan (surface tension), pola dasar Heart, Tulip bertingkat, Rosetta simetris, Swans.
  - **B-7: Manual Brewing di Bar Komersial**: Pour over efisien, multi-dripper management (V60, Kalita, Aeropress), konsistensi flow rate.
  - **B-8: Kreasi Minuman Signature & Mocktail Kopi**: Formulasi sirup racikan (*cordial, oleo saccharum*), keseimbangan manis-asam-pahit, teknik clarified coffee.
  - **B-9: Manajemen Operasional & Pemeliharaan Bar**: Perawatan harian espresso machine (backflush chemical, shower screen cleaning), kalibrasi grinder, pengelolaan stok susu dan beans.
  - **B-10: Layanan Pelanggan & Hospitality**: Seni bercerita (*coffee storytelling*), membaca ekspektasi tamu, penanganan komplain, standar hospitality kelas dunia.

---

### 3.3 Path 3: Home Brewer Specialization Path
* **Target Audience**: Penikmat kopi rumahan, artisan manual brewer, kolektor alat seduh.
* **Level**: Beginner to Advanced Enthusiast | **24 Materi** | **7 Modul** | **4 Kuis**
* **Struktur Kurikulum**:
  - **H-1: Menata Coffee Corner Rumahan**: Memilih grinder manual presisi (burr stainless steel), timbangan digital responsif 0.1g, kettle gooseneck ber-PID.
  - **H-2: Memahami Biji Kopi Specialty Rumahan**: Cara membaca roaster label, menentukan waktu resting optimal beans, penyimpanan wadah kedap vakum.
  - **H-3: Resep Dasar & Variabel Ekstraksi**: Rasio seduh (1:15, 1:16, 1:17), suhu air seduh (88–96°C), fase blooming dan degassing CO₂.
  - **H-4: V60 & Perkolasi Lanjutan**: Kontrol agitasi, multi-pour (4:6 method Tetsu Kasuya, Lance Hedrick technique), manajemen bed kopi rata.
  - **H-5: Imersi & Metode Hibrida**: Aeropress (Inverted vs Standard), French Press tanpa ampas (Hoffmann technique), Clever Dripper, Switch.
  - **H-6: Manipulasi Air Seduh Rumah**: Meracik air seduh mineral mandiri (resep Barista Hustle, garam Epsom MgSO₄, baking soda NaHCO₃, aquadest).
  - **H-7: Jurnal Seduh & Troubleshooting Mandiri**: Menyusun brew log harian, mengidentifikasi astringency, kepahitan akibat fines, eksplorasi cold brew dan iced drip.

---

### 3.4 Path 4: Roaster Specialization Path
* **Target Audience**: Operator mesin sangrai, roaster komersial, head roaster, konsultan roastery.
* **Level**: Advanced Scientific | **18 Materi** | **6 Modul** | **3 Kuis**
* **Struktur Kurikulum**:
  - **R-1: Fisika & Termodinamika Mesin Sangrai**: Drum roaster langsung (*direct-fire*), semi-hot blast, fluid-bed air roaster, pengelolaan airflow dan tekanan static gas.
  - **R-2: Analisis Green Bean Sebelum Sangrai**: Pengukuran kadar air (*moisture meter* 10–12%), water activity ($a_w < 0.70$), densitas biji (*bulk density*), sortasi ukuran screen.
  - **R-3: Pembacaan Telemetri Software (Cropster/Artisan)**: Mengatur kurva Bean Temperature (BT), Environmental Temperature (ET), dan Rate of Rise (RoR) yang menurun stabil (*ever-decreasing RoR*).
  - **R-4: Reaksi Kimiawi Sangrai**: Reaksi pencokelatan non-enzimatis Maillard, degradasi asam klorogenat menjadi asam kuinat dan kafeat, karamelisasi sukrosa, sintesis lipid volatil.
  - **R-5: Profiling untuk Berbagai Metode Seduh**: Merancang kurva sangrai Light Roast (Filter Single Origin) vs Medium/Medium-Dark Roast (Espresso Blend berdensitas crema tebal).
  - **R-6: Quality Control, Batch Consistency & Pemeliharaan Roastery**: Protokol cupping QC harian, Agtron color spectrophotometer, pembersihan chaff collector, pencegahan resiko kebakaran pipa cerobong (*chimney fire*).

---

### 3.5 Path 5: Q Grader & Sensory Specialist Path
* **Target Audience**: Calon Q Grader berlisensi CQI, juri kompetisi kopi, green coffee buyer.
* **Level**: Master Sensory | **18 Materi** | **6 Modul** | **3 Kuis**
* **Struktur Kurikulum**:
  - **Q-1: Fisiologi & Kalibrasi Sensorik Standar CQI**: Triangulasi sensorik, ambang batas deteksi rasa dasar (*sweet, sour, salty, bitter, umami*), pengujian anosmia parsial.
  - **Q-2: Protokol Cupping Resmi SCA/CQI 100 Poin**: Evaluasi 10 atribut spesifik (Fragrance/Aroma, Flavor, Aftertaste, Acidity, Body, Balance, Uniformity, Clean Cup, Sweetness, Overall).
  - **Q-3: Identifikasi Cacat Green Bean (Defect Grading)**: Standar SCA Green Coffee Defect Guide; Primary Defects (Full Black, Sour, Fungus, Dried Pod) vs Secondary Defects (Broken, Insect damage, Immature).
  - **Q-4: Roast Defect & Pengaruhnya pada Skor Cup**: Mengenali Baked, Scorched, Tipped, Underdeveloped, dan Overdeveloped dalam sesi cupping.
  - **Q-5: Uji Triangulasi (Triangulation Cupping)**: Mengasah kemampuan membedakan 1 mangkok berbeda dari 3 set mangkok berkode acak dengan presisi kecepatan dan akurasi tinggi.
  - **Q-6: Simulasi Ujian Sertifikasi Q-Grader**: Strategi menghadapi 19 segmen ujian CQI Arabica/Robusta, kalibrasi skor kelompok, etika profesional Q-Grader bersertifikat.

---

### 3.6 Path 6: Green Coffee & Post-Harvest Processing Specialist
* **Target Audience**: Petani kopi, prosesor mikro, pemilik stasiun cuci (*washing station*), agronomis.
* **Level**: Master Hulu & Pasca Panen | **18 Materi** | **6 Modul** | **2 Kuis**
* **Struktur Kurikulum**:
  - **P-1: Manajemen Kebun & Pemanenan Presisi**: Pengukuran nutrisi tanah N-P-K, pemangkasan berkala (*pruning*), pencegahan karat daun (*Hemileia vastatrix*) dan penggerek buah bubuk (PBKo).
  - **P-2: Pengolahan Basah (Washing Station Architecture)**: Desain bak penampung gravitasi (*siphon tank*), pulper pulper disc/drum, fermentasi basah aerob vs anaerob, pencucian saluran air.
  - **P-3: Pengolahan Natural & Honey Tingkat Lanjut**: Pengaturan ketebalan hamparan di African Raised Beds, rotasi pembalikan ceri per jam, perlindungan terhadap kelembaban malam hari (*tarpaulin cover*).
  - **P-4: Mikrobiologi & Biokimia Fermentasi Kopi**: Peranan ragi liar (*Saccharomyces cerevisiae*), bakteri asam laktat (BAL / *Leuconostoc mesenteroides*), pengontrolan pH fermentasi (target pH 4.0–4.2).
  - **P-5: Kinetika Pengeringan & Manajemen Kadar Air**: Fase pengeringan kritis (dari 55% ke target 10.5–11.5%), pencegahan case hardening, periode istirahat resting (*hulling condition*).
  - **P-6: Dry Milling, Packaging & Ekspor**: Hulling, grading densitas gravitasi meja (*gravity table*), sortir warna optik (*color sorter*), kemasan pelindung GrainPro / Ecotact hermetis.

---

### 3.7 Path 7: Coffee Business & Shop Management Specialist
* **Target Audience**: Pemilik coffee shop, manajer kafe, konsultan F&B, wirausahawan kopi.
* **Level**: Strategic Management | **18 Materi** | **6 Modul** | **2 Kuis**
* **Struktur Kurikulum**:
  - **C-1: Perencanaan Konsep & Studi Kelayakan Finansial**: Menentukan target pasar (third-wave artisanal vs grab-and-go volume), proyeksi CAPEX dan OPEX, kalkulasi titik impas (*Break-Even Point*).
  - **C-2: Desain Tata Letak & Workflow Bar Kafe**: Ergonomi gerakan barista (*bar golden triangle*), kapasitas daya listrik, integrasi sistem pemipaan air dan water filter komersial.
  - **C-3: Rekayasa Menu & Kalkulasi HPP / COGS**: Perhitungan cost per cup presisi (biji kopi, susu, cup/lid/sedotan, sirup), strategi pricing margin kotor (target 68–75%), analisis varians sisa bahan.
  - **C-4: Rekrutmen, Standar Pelatihan & SOP**: Menyusun job description barista, kurikulum on-boarding 14 hari, standar operasional prosedur pembukaan (*opening*), operasional, dan penutupan (*closing*).
  - **C-5: Pemasaran Digital, Komunitas & Retensi Pelanggan**: Membangun personalitas brand kafe di media sosial, program loyalitas pelanggan, aktivasi sesi cupping publik dan workshop komunitas.
  - **C-6: Ekspansi Bisnis, Multi-Store & Lisensi**: Manajemen supply chain terpusat (*central kitchen/roastery*), audit kualitas cabang, evaluasi model franchise vs kepemilikan modal sendiri (*equity*).

---

## 4. Alat Bantu Ajar Vektor Ilmiah (Interactive SVG Components)

Untuk memastikan pengalaman belajar bersifat teknis, interaktif, dan tidak bergantung pada sekadar foto dekoratif, CherryEdu mengintegrasikan 8 modul diagram visual buatan sendiri (`components/CoffeeDiagram.tsx`):

1. **`cherry-anatomy` (Diagram Anatomi Buah Kopi Vektor)**
   - Menampilkan penampang melintang buah ceri kopi dengan 5 lapisan terpisah berpresisi mikron: Eksokarp (kulit luar), Mesokarp (daging lendir manis Brix 18–24°), Endokarp (parchment/kulit tanduk), Spermoderm (kulit ari/silver skin), dan Endosperma (biji kopi hijau kembar).
   - Dilengkapi kartu komparasi lapisan yang dikupas pada metode Washed, Honey, dan Natural.
2. **`roast-curve` (Kurva Termodinamika Roasting Standar SCA)**
   - Grafik telemetri suhu (°C) terhadap waktu (menit) berstandar software profil *Cropster*.
   - Kurva ganda: Bean Temperature (BT - warna tembaga) dan Rate of Rise (RoR - garis putus merah menurun stabil).
   - Titik acuan kritis: Charge Temp (200°C), Turning Point (1:15 @ 92°C), Yellowing (150°C), First Crack (196°C), Drop Temp (208°C).
3. **`brewing-control-chart` (SCA Brewing Control Chart Matriks Ekstraksi)**
   - Matriks grafis 2D: Sumbu X (Extraction Yield 14% – 26%) vs Sumbu Y (Total Dissolved Solids / TDS 0.8% – 1.8%).
   - Area "Ideal Target Zone" (Yield 18–22%, TDS 1.15–1.45%) ditandai jelas bersama zona Under-extracted dan Over-extracted.
4. **`espresso-phases` (Dinamika Ekstraksi Espresso 3 Fase)**
   - Visualisasi penuangan shot espresso: Fase 1 (Ristretto/Kuningan pekat - pelarutan asam & minyak volatil), Fase 2 (Normale/Karamel madu - pelarutan gula & body), Fase 3 (Lungo/Kuning pucat blonde - komponen pahit & kafein).
5. **`milk-vortex` (Fisika Turbulensi & Vortex Microfoam Susu)**
   - Panduan grafis posisi ujung steam wand: kedalaman 1-2 cm dari permukaan, sudut 15°, dan pusaran rotasi cairan untuk memecah gelembung makro menjadi mikro-emulsi sutra pada suhu ideal 60–65°C.
6. **`water-chemistry` (Afinitas Ionik Kimia Air Seduh)**
   - Diagram ikatan molekuler yang memvisualisasikan bagaimana ion divalen Mg²⁺ dan Ca²⁺ mengikat senyawa aroma polar (asam sitrat, asam malat, lipid), serta efek penyangga ion Bikarbonat (HCO₃⁻).
7. **`phylogeny-tree` (Pohon Silsilah Genetika Kopi Arabika)**
   - Bagan filogeni yang merunut percabangan jalur Typica Murni (Batavia 1696, Maragogype, Geisha) vs Jalur Bourbon (Caturra, Pacas, SL28) serta persilangan alami bersejarah Tim-Tim (Hibrido de Timor) yang menurunkan varietas unggul Indonesia: Sigarar Utang dan Catimor.
8. **`processing-comparison` (Matriks Komparasi 5 Metode Olah Pasca Panen)**
   - Tabel komparasi teknis interaktif: Fully Washed, Honey, Dry Natural, Wet-Hulled (Giling Basah Sumatra), dan Fermentasi Anaerobik Terkontrol.

---

## 5. Fitur Platform & Rincian Modul yang Telah Dibangun

### 5.1 Learning Core & Gamifikasi
* **Sistem Pembelajaran Responsif**: Navigasi materi berbasis sidebar hirarkis (Path → Modul → Materi), breadcrumb interaktif, tombol penyelesaian otomatis, dan estimasi waktu baca.
* **Block-Based Markdown Engine (`components/MarkdownRenderer.tsx`)**: Rendering teks berformat editorial majalah kopi, box kutipan ilmiah, tipografi formula parameter, tabel teknis, dan visual aset.
* **Sistem Kuis Interaktif**: Kuis pilihan ganda dan true/false di setiap modul, kalkulasi skor kelulusan instan (passing grade 80%), indikator jawaban benar/salah secara real-time, dan pembahasan edukatif.
* **Gamifikasi Terintegrasi**:
  - Poin Pengalaman (XP) untuk setiap materi yang diselesaikan (+25 XP) dan kuis yang lulus (+100 XP).
  - Penghitung Streak harian aktif.
  - Koleksi Badge pencapaian (First Brew, Master Extractor, Coffee Scholar).
  - Papan Peringkat (Leaderboard) bulanan talenta.

### 5.2 Coffee Professional Tools Suite
Aplikasi menyediakan suite kalkulator dan simulator mandiri di rute `/tools`:
1. **Digital SCA Cupping Form (`components/SCACuppingForm.tsx`)**: Lembar penilaian resmi 100 poin berstandar SCA untuk Fragrance, Flavor, Aftertaste, Acidity, Body, Balance, Uniformity, Clean Cup, Sweetness, dan Overall Score, lengkap dengan kalkulasi defect penalty.
2. **Interactive SCA Flavor Wheel (`components/FlavorWheel.tsx`)**: Roda rasa interaktif yang dapat diklik dari kategori umum (*Fruity, Floral, Sweet, Roasty*) hingga deskriptor spesifik (*Blackberry, Jasmine, Brown Sugar*).
3. **Smart Coffee Brew Calculator (`components/BrewCalculator.tsx`)**: Kalkulator rasio gram kopi dan air seduh dengan preset V60, Aeropress, French Press, Chemex, dan Iced Drip, dilengkapi panduan timer penuangan (*pour timer*).
4. **Espresso Dial-In Assistant (`components/EspressoDialIn.tsx`)**: Simulator troubleshooting shot espresso berbasis rasa (*sour, bitter, astringent, watery*) dengan rekomendasi perbaikan dose/grind size yang terarah.
5. **Water Chemistry Calculator (`components/WaterCalculator.tsx`)**: Panduan racik air mineral mandiri berbasis target ppm General Hardness dan Alkalinity.
6. **Coffee Variety Compendium (`components/VarietyCompendium.tsx`)**: Ensiklopedia varietas kopi lengkap dengan informasi elevasi optimal, profil rasa khas, ketahanan penyakit, dan negara asal.

### 5.3 Sistem Sertifikasi & Verifikasi Publik
* **Penerbitan Sertifikat Otomatis**: Pengguna yang menuntaskan seluruh modul dan lulus kuis pada suatu learning path secara otomatis memperoleh sertifikat kelulusan digital.
* **Penandatangan Resmi**: Seluruh sertifikat diterbitkan atas nama **Fahrul M.W** (*Lead Educator & Head of Curriculum, Cherry Coffee Roastery*).
* **Verifikasi Publik `/verify/[token]`**: Setiap sertifikat memiliki kode identifikasi unik dan URL verifikasi publik yang dapat diakses oleh pihak ketiga (calon pemberi kerja/HRD) untuk mengonfirmasi keaslian ijazah.
* **Modal Berbagi Sosial (`components/ShareModal.tsx`)**: Fitur ekspor grafis sertifikat untuk diunggah langsung ke Instagram Story, LinkedIn, Twitter/X, atau disalin dalam format tautan portfolio.

### 5.4 Ekosistem Komunitas & Job Board
* **Forum Diskusi (`/forum`)**: Kategori diskusi terstruktur (Agronomi & Pasca Panen, Barista & Espresso, Roasting Lab, Bisnis & Karier). Fitur pembuatan topik baru, thread komentar, upvote, dan penandaan solusi terverifikasi.
* **Coffee Job Board (`/jobs`)**: Portal lowongan kerja spesifik industri kopi (Barista Full-Time/Part-Time, Roaster, Head Barista, QA Cupper, Shop Manager). Fitur filter kota (Jakarta, Bandung, Surabaya, Bali, Yogyakarta), kisaran gaji transparan, dan formulir pengajuan lamaran instan terhubung dengan profil sertifikat.

### 5.5 Admin Dashboard & Content Management System (`/admin`)
Panel admin menyeluruh yang terisolasi dengan akses otentikasi role:
1. **Overview & Real-Time KPI (`/admin`)**: Kartu metrik jumlah pengguna aktif, total sertifikat terbit, tingkat penyelesaian kursus (*completion rate*), dan jumlah pelamar kerja.
2. **Analytics Center (`/admin/analytics`)**: Visualisasi grafik interaktif Recharts untuk tren pendaftaran pengguna bulanan, distribusi role pengguna, dan statistik kelulusan path.
3. **Curriculum CMS (`/admin/curriculum`)**: Manajemen CRUD Learning Paths, pengorganisasian modul, editor materi pelajaran (Lesson Editor dengan pratinjau langsung), dan Quiz Builder (tambah/edit soal, opsi jawaban, penjelasan).
4. **Visual Page Builder (`/admin/pages`)**: Sistem pengelola tata letak landing page berbasis section library (Hero, Stats, Path Showcase, Testimonials, Community CTA) yang mendukung penambahan seksi, perubahan urutan (*reorder*), duplikasi, dan edit konten langsung.
5. **Collaborator Management (`/admin/collaborators`)**: Pengelolaan profil mitra instruktur dan roastery, yang otomatis menghasilkan halaman publik di `/collaborators/[slug]`.
6. **User Management (`/admin/users`)**: Pengelolaan basis pengguna, filter per peran (*Learner, Barista, Roaster, Admin*), inspeksi perolehan XP, dan pengubahan hak akses.
7. **Certificate Management (`/admin/certificates`)**: Log riwayat penerbitan sertifikat, filter status keaslian, dan tombol pencabutan (*revoke*) sertifikat jika ditemukan pelanggaran akademik.
8. **Moderasi Konten (`/admin/jobs` & `/admin/forum`)**: Persetujuan dan penghapusan listing lowongan kerja serta moderasi kiriman forum.
9. **Platform Settings (`/admin/settings`)**: Konfigurasi identitas platform, nama dan titel penandatangan sertifikat, pengaturan SEO, dan link sosial media resmi.

---

## 6. Arsitektur Teknis & Database

### 6.1 Tech Stack Spesifikasi
| Lapisan | Teknologi Terpasang | Peranan & Justifikasi |
|---|---|---|
| **Framework** | Next.js 14 (App Router) | Server-side rendering, routing modular, performa SEO maksimal |
| **Bahasa** | TypeScript 5.0+ | Type-safety mutlak pada seluruh model kurikulum, state, dan props |
| **Styling** | Tailwind CSS 3.4 | Utilitas styling responsif, custom coffee color tokens (`#6F1D1B`, `#451A03`) |
| **Database & Auth** | Supabase (PostgreSQL 15) | Relational database, Row Level Security (RLS), JWT Auth (Email & OAuth) |
| **Visualisasi Data** | Recharts 2.x | Rendering grafik performa di Admin Analytics |
| **Ikonografi** | Lucide React | Ikon modern, seragam, dan ringan tanpa dependensi font eksternal |
| **State Engine** | React Context + LocalStorage | Smart-merge engine (`cherryedu_state_v5`) untuk kecepatan respon instan |
| **Infrastruktur Deploy** | Vercel Serverless Edge | Continuous Deployment dari branch `main` GitHub |

### 6.2 Relasi Entitas Database (ERD v2.0 Summary)
Sistem database relational PostgreSQL diatur melalui skema inti:
* `users` (id, email, full_name, role, coffee_role, xp_points, streak_count, avatar_url, bio, created_at)
* `learning_paths` (id, title, slug, description, layer_type, prerequisite_path_id, level, duration_hours, is_free, is_published)
* `modules` (id, learning_path_id, title, description, order_index, is_published)
* `lessons` (id, module_id, title, content, content_type, video_url, duration_minutes, order_index, is_free, is_published)
* `quizzes` (id, module_id, learning_path_id, title, passing_score, time_limit_minutes, quiz_scope)
* `questions` (id, quiz_id, question_text, options, correct_index, explanation)
* `enrollments` (id, user_id, learning_path_id, status, progress_percent, enrolled_at, completed_at)
* `lesson_progress` (id, user_id, lesson_id, is_completed, completed_at)
* `certificates` (id, user_id, learning_path_id, certificate_number, verification_token, issued_at, is_revoked)
* `forum_topics` & `forum_posts` (id, author_id, category, title, body, upvotes, created_at)
* `job_listings` & `job_applications` (id, company_name, title, location, salary_range, applicant_id, resume_url)

---

## 7. Model Bisnis & Rencana Monetisasi

### 7.1 Struktur Tingkatan Layanan (Tiering System)
| Layanan | Free Tier (Akses Terbuka) | Pro Membership (Rp 49.000 / bln) | Enterprise / B2B (Custom) |
|---|---|---|---|
| **Foundation Path** | Akses Penuh (32 Materi) | Akses Penuh | Akses Penuh untuk Karyawan |
| **Specialization Paths** | 1 Modul Pertama per Path | Akses Penuh Seluruh 6 Path Spesialisasi | Akses Penuh Seluruh 6 Path Spesialisasi |
| **Kuis & Latihan** | Terbuka | Terbuka | Terbuka + Custom Assessment Test |
| **Sertifikat Digital** | Sertifikat Foundation | Sertifikat Spesialisasi Terverifikasi | Co-Branded Certificate Kafe/Roastery |
| **Coffee Toolsuite** | Akses Standar | Akses Standar & Fitur Cloud Simpan Data | Multi-user Team Log & Sync |
| **Job Board** | Menjelajah Lowongan | Apply Lowongan Prioritas + Verifikasi Profil | Posting Lowongan Tanpa Batas & Filter Kandidat |
| **Admin Dashboard** | Tidak Ada | Tidak Ada | Company LMS Dashboard & Progress Monitoring |

### 7.2 Aliran Pendapatan Utama (Revenue Streams)
1. **Langganan Pengguna B2C (Pro Membership)**: Ditargetkan untuk calon barista, home brewer antusias, dan praktisi roaster.
2. **Paket Pelatihan B2B Karyawan Kafe**: Berlangganan multi-seat untuk rantai kedai kopi guna menstandarisasi SOP barista mereka dengan biaya jauh lebih murah daripada mendatangkan trainer eksternal.
3. **Employer Job Board Fee**: Biaya berbayar bagi coffee shop untuk memasang iklan lowongan kerja dengan label "Featured Job" dan pencarian resume talenta tersaring.
4. **Sponsorship & Kolaborasi Brand Industri**: Penempatan peralatan kopi resmi (mesin sangrai, grinder komersial, filter water) dalam studi kasus kurikulum.

---

## 8. Target Metrik Keberhasilan (KPIs)

### 8.1 Metrik 3 Bulan Pertama Pasca Peluncuran
* **Akuisisi Pengguna**: 2.500+ pengguna terdaftar di platform.
* **Penyelesaian Pembelajaran**: 500+ sertifikat Foundation resmi diterbitkan.
* **Keterlibatan Kuis**: 10.000+ pengerjaan kuis dengan tingkat kelulusan rata-rata >= 78%.
* **Adopsi Job Board**: 30+ lowongan kerja aktif dari kafe mitra di Jabodetabek, Bandung, dan Surabaya.
* **Performa Web (Lighthouse)**: Performance >= 90, Accessibility >= 95, Best Practices >= 95, SEO >= 98.

### 8.2 Metrik 12 Bulan (Skalabilitas & Ekosistem)
* **Basis Pengguna**: 25.000+ pengguna aktif bulanan (MAU).
* **Kemitraan Usaha**: 50+ kedai kopi dan roastery mengadopsi CherryEdu sebagai standar seleksi awal rekrutmen barista mereka.
* **Pendapatan Berulang (MRR)**: Rp 75.000.000+ dari kombinasi B2C Pro dan B2B Enterprise.

---

## 9. Roadmap Pengembangan Fase Selanjutnya (Fase 3 & 4)

```
FASE 2 (SELESAI - SAAT INI)
├── 7 Learning Paths Lengkap (160 Materi SCA/CQI)
├── 8 SVG Diagram Teknis Ilmiah Interaktif
├── Suite 6 Tools Profesional Kopi
├── Admin Dashboard & Visual Page Builder
├── Sistem Sertifikat Verifikasi Publik (Fahrul MW)
└── Live Production Deploy di Vercel

FASE 3 (Q4 2026 — AKSELERASI EKOSISTEM)
├── Integrasi Payment Gateway Nasional (Midtrans/Xendit) untuk Pro Tier
├── Mobile App Experience (PWA Offline Mode untuk akses di perkebunan hulu)
├── Peluncuran B2B Employer Portal untuk verifikasi instan pelamar barista
├── Live Video Interactive Masterclass bersama Guest Instructors
└── Ekosistem Sample Green Bean Box untuk praktik cupping serempak dari rumah

FASE 4 (2027 — EKSPANSI REGIONAL & STANDARISASI)
├── Aliansi Sertifikasi dengan SCAI (Specialty Coffee Association of Indonesia)
├── Lokalisasi Multi-Bahasa (English & Thai) untuk ekspansi talenta Asia Tenggara
├── AI Coffee Mentor Assistant terintegrasi dalam Lesson Reader
└── Kompetisi Brewers & Cuppers Virtual CherryEdu tahunan
```

---

## 10. Kesimpulan & Penutup

CherryEdu telah berevolusi dari sekadar purwarupa edukasi digital menjadi sebuah platform pembelajaran kopi paling terstruktur, mendalam, dan komprehensif di Indonesia. Melalui integrasi kurikulum hulu-ke-hilir 160 materi, 8 diagram teknis kustom, rangkaian tools operasional, serta sistem sertifikasi yang dapat diverifikasi secara publik, CherryEdu siap menjadi tulang punggung peningkatan kualitas sumber daya manusia di industri kopi nasional.

---
*Dokumen resmi spesifikasi produk ini dipelihara secara berkala oleh Cherry Coffee Roastery.*
