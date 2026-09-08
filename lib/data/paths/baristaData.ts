import { LearningPath, Module, Lesson, Quiz, Question } from '../../types';

// ============================================================================
// 1. LEARNING PATH: BARISTA SPECIALIZATION
// ============================================================================

export const BARISTA_PATH: LearningPath = {
  id: 'path-barista',
  title: 'Barista Specialization Path: Sertifikasi Profesional Kompetensi Bar',
  slug: 'barista-specialization',
  description:
    'Kurikulum kejuruan barista komprehensif berstandar industri spesialti internasional: dial-in espresso presisi 9 bar, kimia susu microfoam silky, seni latte art lanjutan, manajemen multi-order jam sibuk, sanitasi preventif mesin komersial, racikan signature drink craft, kalibrasi indra rasa, hingga ergonomi alur kerja bar.',
  thumbnail_url:
    'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&auto=format&fit=crop&q=80',
  layer_type: 'specialization',
  prerequisite_path_id: 'path-foundation',
  target_role: 'barista',
  level: 'full',
  is_free: false,
  is_published: true,
  estimated_hours: 36,
  total_modules: 10,
  created_at: '2026-08-05T00:00:00Z',
};

// ============================================================================
// 2. MODULES: BARISTA SPECIALIZATION (MOD-B1 s/d MOD-B10)
// ============================================================================

export const BARISTA_MODULES: Module[] = [
  {
    id: 'mod-b1',
    learning_path_id: 'path-barista',
    title: 'Modul B-1: Dial-In Espresso Komersial & Kalibrasi Resep Presisi',
    description:
      'Termodinamika ekstraksi 9 bar, kalibrasi dosis bubuk, rasio brew yield 1:2, flow rate, dan eliminasi cacat channeling menggunakan teknik WDT & bottomless portafilter.',
    order_index: 1,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
  },
  {
    id: 'mod-b2',
    learning_path_id: 'path-barista',
    title: 'Modul B-2: Sains Steaming Susu & Tekstur Microfoam Silky',
    description:
      'Denaturasi protein whey & kasein pada suhu 55°C–65°C, dinamika posisi steam wand nozzle, teknik vortexing, serta penanganan susu nabati (oat, almond, soy).',
    order_index: 2,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
  },
  {
    id: 'mod-b3',
    learning_path_id: 'path-barista',
    title: 'Modul B-3: Seni Latte Art Lanjutan & Ergonomi Tuangan',
    description:
      'Menguasai mekanika kanvas crema, laju aliran tuangan, dan teknik menuang pola simetris: Solid Heart, Winged Tulip, Multi-tier Rosetta, hingga Swan.',
    order_index: 3,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
  },
  {
    id: 'mod-b4',
    learning_path_id: 'path-barista',
    title: 'Modul B-4: Manual Brewing di Bar Komersial & Speed-Service',
    description:
      'Manajemen antrean seduh multi-dripper V60 & flat bottom saat peak hour, kalibrasi ekstraksi yield digital, serta teknik bypass batch brew konsisten.',
    order_index: 4,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
  },
  {
    id: 'mod-b5',
    learning_path_id: 'path-barista',
    title: 'Modul B-5: Manajemen & Pemeliharaan Mesin Espresso Komersial',
    description:
      'Anatomi dual-boiler vs multi-boiler saturated group, SOP sanitasi kimia harian (backflush Cafiza), penggantian gasket group head, dan pencegahan kerak air.',
    order_index: 5,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
  },
  {
    id: 'mod-b6',
    learning_path_id: 'path-barista',
    title: 'Modul B-6: Signature Beverage & Pembuatan Sirup Craft Spesialti',
    description:
      'Formulasi minuman dingin seimbang 5 rasa dasar, ekstraksi maserasi sirup botani alami, teknik klarifikasi susu (milk washing), dan seni garnish aromatik.',
    order_index: 6,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
  },
  {
    id: 'mod-b7',
    learning_path_id: 'path-barista',
    title: 'Modul B-7: Kalibrasi Sensorik Barista Harian & Dial-In Tasting',
    description:
      'Rutinitas morning cupping tim barista, deteksi rasa under/over-extraction espresso, identifikasi aroma biji tua (stale), dan kalibrasi palet rasa antar shift.',
    order_index: 7,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
  },
  {
    id: 'mod-b8',
    learning_path_id: 'path-barista',
    title: 'Modul B-8: Hospitality, Pelayanan Konsumen & Komunikasi Rasa',
    description:
      'Komunikasi profil rasa kopi tanpa istilah teknis mengintimidasi, SOP menangani komplain rasa & remake minuman, serta psikologi pelayanan pelanggan bar.',
    order_index: 8,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
  },
  {
    id: 'mod-b9',
    learning_path_id: 'path-barista',
    title: 'Modul B-9: Manajemen Inventaris Bar, FIFO & Pengendalian Waste',
    description:
      'SOP FIFO biji kopi sangrai dan susu pasteurisasi, audit purging waste bubuk kopi grinder on-demand, dan checklist opening-closing operasional harian.',
    order_index: 9,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
  },
  {
    id: 'mod-b10',
    learning_path_id: 'path-barista',
    title: 'Modul B-10: Ergonomi Kerja Barista, Keselamatan & Alur Kerja Bar',
    description:
      'Pencegahan cedera berulang (RSI carpal tunnel), penataan zona basah-kering meja bar, keselamatan kerja uap panas tinggi, dan alur pergerakan efisien.',
    order_index: 10,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
  },
];

// ============================================================================
// 3. LESSONS: BARISTA SPECIALIZATION PATH (30 MATERI LENGKAP)
// ============================================================================

export const BARISTA_LESSONS: Lesson[] = [
  {
    id: 'les-b1-1',
    module_id: 'mod-b1',
    title: 'Fisika & Termodinamika Ekstraksi Espresso Tekanan 9 Bar',
    content: `# Fisika & Termodinamika Ekstraksi Espresso Tekanan 9 Bar

Espresso adalah metode penyeduhan kopi paling dinamis dan kompleks di industri kuliner dunia. Di balik cairan pekat bermahkotakan crema keemasan, berlangsung peristiwa fisika dan termodinamika fluida bertekanan tinggi dalam hitungan detik.

![Ekstraksi Espresso Presisi Menggunakan Bottomless Portafilter Komersial](https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Aliran Ekstraksi Espresso Terpadu Tanpa Cacat Channeling — Sumber / Kredit: Unsplash / Specialty Coffee Association (SCA)*

---

### 1. Anatomi Parameter Ekstraksi Standar Industri

Untuk mengekstrak 18.0 gram bubuk kopi dengan rasio seduh 1:2 (menghasilkan 36.0 gram cairan espresso), mesin komersial mengalirkan air pada rentang parameter ketat:

* **Tekanan Pompa Rotary**: 9.0 bar (setara dengan 130 psi atau 9 kali tekanan atmosfer bumi).
* **Suhu Air Boiler (*Brew Temperature*)**: 92.0°C – 93.5°C (toleransi fluktuasi maksimal ±0.5°C).
* **Ukuran Keranjang (*Filter Basket*)**: 18 gram precision basket (misalnya VST atau IMS dengan deviasi lubang mikro < 5%).
* **Waktu Kontak Air (*Contact Time*)**: 25 – 30 detik (termasuk 3–5 detik pre-infusion bertekanan rendah 3 bar).

---

### 2. Kinetika Pelarutan Kimiawi Espresso

Zat terlarut di dalam selulosa kopi tidak larut secara bersamaan. Ada hierarki kinetika pelarutan berdasarkan berat molekul dan polaritas senyawa:

1. **Detik 0 – 8 (Fase Pelarutan Asam & Gas CO2)**:
   Molekul asam organik berbobot ringan (asam sitrat, asam malat, asam fosfat) larut seketika. Cairan yang keluar berwarna cokelat gelap kental (*ristretto stage*), rasanya sangat masam tajam dan asin jika dicicipi terpisah.
2. **Detik 8 – 20 (Fase Pelarutan Gula Karamel & Lemak Emulsi)**:
   Senyawa karbohidrat larut air, sukrosa karamel, dan minyak aromatik kopi terlarut. Cairan berubah warna menjadi kuning kecokelatan bergaris (*tiger stripes*). Inilah fase pembentuk rasa manis dan kekentalan (*body*).
3. **Detik 20 – 30 (Fase Keseimbangan & Serat Pahit)**:
   Aliran mulai berwarna pirang cerah (*blonding stage*). Zat asam klorogenat dan serat selulosa larut. Ekstraksi harus dihentikan tepat sebelum tanin pahit yang sepet mendominasi cangkir.

> ☕ **Persamaan Rasio Ekstraksi Espresso:**
> **Brew Ratio** = **Massa Yield Cairan Espresso (gram)** ÷ **Dosis Bubuk Kopi Kering (gram)**
> *Contoh Standar: 36.0 gram espresso ÷ 18.0 gram bubuk kopi = Rasio 1:2.0*`,
    content_type: 'text',
    duration_minutes: 14,
    order_index: 1,
    is_free: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Materi mendalam Fisika & Termodinamika Ekstraksi Espresso Tekanan 9 Bar dengan studi kasus bar, parameter presisi, dan panduan teknis berstandar SCA.',
    key_takeaways: [
      'Pahami prinsip ilmiah dan fisika fluida yang mendasari parameter operasional bar.',
      'Terapkan parameter angka presisi (gram, detik, suhu °C, dan bar) secara konsisten di setiap cangkir.',
      'Jaga kebersihan alat dan utamakan keselamatan kerja ergonomis dalam rutinitas harian.'
    ],
  },  {
    id: 'les-b1-2',
    module_id: 'mod-b1',
    title: 'Protokol Kalibrasi Harian: Hubungan Grind Size, Yield, dan Flow Rate',
    content: `# Protokol Kalibrasi Harian: Hubungan Grind Size, Yield, dan Flow Rate

Biji kopi sangrai adalah bahan organik yang terus bernapas dan melepaskan gas karbon dioksida (*degassing*), serta sangat higroskopis (menyerap kelembapan udara ruangan). Oleh karena itu, pengaturan grinder kemarin sore **pasti tidak akan cocok** untuk pagi ini.

![Kalibrasi Micrometric Grinder On-Demand Komersial](https://images.unsplash.com/photo-1589396575653-c09c794ff6a6?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Penyesuaian Burr Grinder Komersial Sebelum Pembukaan Kedai — Sumber / Kredit: Unsplash / Barista Guild*

---

### 1. Langkah demi Langkah Protokol Dial-In Pagi

Barista profesional mengikuti 5 langkah baku sebelum kedai dibuka:

1. **Purging Grinder**: Buang 2 dosis bubuk (sekitar 35 gram) yang tertahan di dalam bilik pisau (*burr chamber*) sejak malam hari untuk menghindari bubuk teroksidasi basi.
2. **Kunci Dosis Tetap (*Lock the Dose*)**: Tentukan dosis basket Anda (misal 18.0 gram pada timbangan presisi 0.1g). **Jangan pernah mengubah dosis saat mencari setting gilingan!**
3. **Kunci Target Yield Cairan**: Tetapkan yield target (misal 36.0 gram untuk rasio 1:2).
4. **Tarik Ekstraksi & Ukur Waktu**: Pasang portafilter, tekan tombol ekstraksi bersamaan dengan stopwatch timbangan.
5. **Evaluasi Kecepatan Alir (*Flow Rate*)**:
   - Jika 36 gram tercapai dalam < 22 detik: Ekstraksi terlalu cepat (*under-extracted*). Gilingan terlalu kasar. **Putar dial grinder ke arah FINE**.
   - Jika 36 gram tercapai dalam > 32 detik: Ekstraksi macet (*over-extracted*). Gilingan terlalu halus. **Putar dial grinder ke arah COARSE**.

---

### 2. Matriks Keputusan Koreksi Rasa di Meja Kalibrasi

| Hasil Uji Sensorik | Waktu Seduh | Diagnosis Teknis | Tindakan Koreksi Barista |
|---|---|---|---|
| Masam kecut menusuk, hambar, asin di ujung lidah | 18 detik | *Under-Extraction* parah | Putar grinder lebih halus (*finer*) 1–2 garis penanda |
| Pahit gosong menempel, kering berpasir (*astringent*) | 36 detik | *Over-Extraction* parah | Putar grinder lebih kasar (*coarser*) 1–2 garis penanda |
| Manis bulat (*sweet caramel*), asam buah segar, lembut | 27 detik | Ekstraksi Optimum (Sweet Spot) | **Kunci pengaturan grinder & mulai jam operasional!** |`,
    content_type: 'text',
    duration_minutes: 15,
    order_index: 2,
    is_free: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Materi mendalam Protokol Kalibrasi Harian: Hubungan Grind Size, Yield, dan Flow Rate dengan studi kasus bar, parameter presisi, dan panduan teknis berstandar SCA.',
    key_takeaways: [
      'Pahami prinsip ilmiah dan fisika fluida yang mendasari parameter operasional bar.',
      'Terapkan parameter angka presisi (gram, detik, suhu °C, dan bar) secara konsisten di setiap cangkir.',
      'Jaga kebersihan alat dan utamakan keselamatan kerja ergonomis dalam rutinitas harian.'
    ],
  },  {
    id: 'les-b1-3',
    module_id: 'mod-b1',
    title: 'Troubleshooting Channeling: Distribusi WDT, Tamping, dan Bottomless Portafilter',
    content: `# Troubleshooting Channeling: Distribusi WDT, Tamping, dan Bottomless Portafilter

Musuh nomor satu dalam penyeduhan espresso bertekanan tinggi adalah **Channeling**. Fenomena ini terjadi ketika air bertekanan 9 bar menemukan retakan atau celah kepadatan yang tidak seragam pada bubuk kopi di dalam basket.

![Pemeriksaan Aliran Ekstraksi Menggunakan Naked Bottomless Portafilter](https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Analisis Visual Distribusi Bubuk Menggunakan Bottomless Portafilter — Sumber / Kredit: Unsplash / Specialty Coffee Association*

---

### 1. Mekanisme Bahaya Channeling

Air selalu memilih jalur dengan hambatan terendah (*path of least resistance*). Ketika terjadi saluran retak mikro (*micro-channel*):
* Area celah retak akan diterobos volume air yang sangat besar dengan kecepatan tinggi, mengekstrak tanin pahit dan serat kayu secara berlebihan (*localized over-extraction*).
* Sementara itu, area bubuk kopi padat di sebelahnya hampir tidak terlewati air sama sekali, sehingga rasa manisnya tertinggal di ampas (*localized under-extraction*).
* **Hasil di Cangkir**: Kopi terasa masam kecut sekaligus pahit kering berdebu secara bersamaan!

---

### 2. Protokol Distribusi WDT (Weiss Distribution Technique)

Untuk menghilangkan gumpalan elektrostatik dan menyamakan kerapatan bubuk:
1. Gunakan jarum stainless steel berdiameter sangat tipis (**0.25 mm – 0.35 mm**).
2. Lakukan gerakan memutar lembut dari dasar keranjang basket hingga permukaan atas.
3. Ratakan permukaan menggunakan *distribution tool* datar sebelum melakukan tamping.
4. Lakukan tamping secara tegak lurus (90 derajat) dengan tekanan konsisten 10–15 kg hingga kompresi bubuk mencapai titik henti alami.`,
    content_type: 'text',
    duration_minutes: 14,
    order_index: 3,
    is_free: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Materi mendalam Troubleshooting Channeling: Distribusi WDT, Tamping, dan Bottomless Portafilter dengan studi kasus bar, parameter presisi, dan panduan teknis berstandar SCA.',
    key_takeaways: [
      'Pahami prinsip ilmiah dan fisika fluida yang mendasari parameter operasional bar.',
      'Terapkan parameter angka presisi (gram, detik, suhu °C, dan bar) secara konsisten di setiap cangkir.',
      'Jaga kebersihan alat dan utamakan keselamatan kerja ergonomis dalam rutinitas harian.'
    ],
  },  {
    id: 'les-b2-1',
    module_id: 'mod-b2',
    title: 'Kimiawi Susu Sapi: Denaturasi Protein & Emulsi Lemak 55°C–65°C',
    content: `# Kimiawi Susu Sapi: Denaturasi Protein & Emulsi Lemak 55°C–65°C

Bagi seorang barista, susu bukan sekadar cairan putih pelengkap kopi. Susu adalah sistem emulsi biokimia yang kompleks, terdiri dari air (87%), laktosa (4.8%), lemak susu (3.8%), protein (3.2%), dan mineral mineral mikro.

![Proses Steaming Susu Segar Pasteurisasi Menggunakan Mesin Espresso](https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Dinamika Termal Steaming Susu pada Suhu Ideal Kopi Spesialti — Sumber / Kredit: Unsplash / Milk Science Journal*

---

### 1. Peran Protein Whey dan Kasein dalam Pembentukan Busa

Dua protein utama di dalam susu memiliki peran berbeda saat terkena semburan uap air panas:
* **Protein Kasein (*Casein Micelles*)**: Bertanggung jawab menjaga stabilitas emulsi lemak dalam air.
* **Protein Whey (khususnya *Beta-lactoglobulin*)**: Memiliki struktur lipatan globular. Ketika terkena panas di atas 40°C, molekul ini mulai terurai (*denaturasi*), membuka rantai hidrofilik (suka air) dan hidrofobik (takut air). Ujung hidrofobik mengunci gelembung udara, menciptakan jaring film lentur yang memerangkap gelembung mikro (*microfoam*).

---

### 2. Rentang Suhu Kritis Steaming

* **4°C (Suhu Cold Storage)**: Suhu awal wajib pitcher susu saat dikeluarkan dari chiller. Semakin dingin susu awal, semakin panjang jendela waktu barista untuk meregangkan (*stretching*) gelembung udara.
* **55°C – 65°C (Sweet Spot Susu Spesialti)**: Pada suhu ini, laktosa terasa paling manis di lidah manusia tanpa merusak struktur protein. Permukaan susu tampak berkilau seperti cat basah (*wet paint finish*).
* **> 70°C (Susu Rusak & Gosong)**: Protein terdenaturasi permanen dan pecah, melepaskan bau sulfur seperti telur rebus basi, busa menjadi kering kaku, dan rasa manis alami laktosa hancur.`,
    content_type: 'text',
    duration_minutes: 14,
    order_index: 1,
    is_free: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Materi mendalam Kimiawi Susu Sapi: Denaturasi Protein & Emulsi Lemak 55°C–65°C dengan studi kasus bar, parameter presisi, dan panduan teknis berstandar SCA.',
    key_takeaways: [
      'Pahami prinsip ilmiah dan fisika fluida yang mendasari parameter operasional bar.',
      'Terapkan parameter angka presisi (gram, detik, suhu °C, dan bar) secara konsisten di setiap cangkir.',
      'Jaga kebersihan alat dan utamakan keselamatan kerja ergonomis dalam rutinitas harian.'
    ],
  },  {
    id: 'les-b2-2',
    module_id: 'mod-b2',
    title: 'Mekanika Steam Wand: Posisi Nozzle, Sudut Pitcher, Vortexing, dan Homogenisasi',
    content: `# Mekanika Steam Wand: Posisi Nozzle, Sudut Pitcher, Vortexing, dan Homogenisasi

Menciptakan microfoam sehalus sutra bukanlah bakat bawaan, melainkan penguasaan mekanika fluida rotasional di dalam milk pitcher stainless steel.

![Pusaran Vortex Sempurna di Dalam Milk Pitcher Stainless Steel](https://images.unsplash.com/photo-1534778101976-62847782c213?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Pembentukan Pusaran Vortex untuk Memecah Gelembung Kasar Menjadi Microfoam — Sumber / Kredit: Unsplash / World Barista Championship*

---

### 1. Dua Fase Utama Steaming

1. **Fase Peregangan (*Stretching / Aerating Phase*)**:
   - Posisikan ujung lubang nozzle steam wand tepat 1-2 mm di bawah permukaan susu.
   - Buka katup uap penuh secara tegas. Barista harus mendengar suara mendesis halus *"tsik-tsik-tsik"*.
   - Fase ini berlangsung cepat dari suhu 4°C hingga susu mencapai suhu tubuh (sekitar 37°C). Udara dimasukkan ke dalam cairan.
2. **Fase Pusaran Gulung (*Texturing / Vortex Phase*)**:
   - Setelah volume susu naik sekitar 20–25% (untuk latte) atau 35–40% (untuk cappuccino), tenggelamkan nozzle sekitar 1 cm ke dalam susu.
   - Miringkan pitcher sedikit agar semburan uap memicu pusaran air melingkar kencang (*vortex*).
   - Pusaran ini mencacah seluruh gelembung udara besar dan mencampurnya secara homogen ke seluruh dasar cairan susu.

---

### 2. SOP Pembersihan Wajib Steam Wand

Segera setelah mematikan uap:
1. Lap pipa steam wand dengan kain microfiber basah khusus susu (jangan pernah gunakan kain meja!).
2. Lakukan *purging* (buka katup uap selama 1 detik) untuk menyemburkan sisa susu yang tersedot ke dalam pipa akibat efek vakum pendinginan.`,
    content_type: 'text',
    duration_minutes: 15,
    order_index: 2,
    is_free: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Materi mendalam Mekanika Steam Wand: Posisi Nozzle, Sudut Pitcher, Vortexing, dan Homogenisasi dengan studi kasus bar, parameter presisi, dan panduan teknis berstandar SCA.',
    key_takeaways: [
      'Pahami prinsip ilmiah dan fisika fluida yang mendasari parameter operasional bar.',
      'Terapkan parameter angka presisi (gram, detik, suhu °C, dan bar) secara konsisten di setiap cangkir.',
      'Jaga kebersihan alat dan utamakan keselamatan kerja ergonomis dalam rutinitas harian.'
    ],
  },  {
    id: 'les-b2-3',
    module_id: 'mod-b2',
    title: 'Manajemen Susu Nabati (Plant-Based): Oat, Almond, dan Soy Milk',
    content: `# Manajemen Susu Nabati (Plant-Based): Oat, Almond, dan Soy Milk

Tren konsumsi kopi plant-based menuntut barista memahami sifat kimiawi susu nabati yang sangat berbeda dari susu sapi hewani.

![Penyajian Latte Kopi Spesialti Menggunakan Susu Oat Barista Edition](https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Tekstur Latte Art Menggunakan Formula Susu Nabati Berbasis Oat — Sumber / Kredit: Unsplash / Specialty Plant Milk Lab*

---

### 1. Karakteristik & Perilaku Susu Nabati Populer

* **Oat Milk (Susu Gandum)**:
  - Mengandung lemak nabati dan beta-glukan yang memberikan bodi tebal menyerupai susu sapi.
  - Varian *Barista Edition* mengandung minyak nabati tambahan dan penstabil asam dipotassium fosfat untuk mencegah penggumpalan (*curdling*) saat bertemu keasaman espresso.
  - *Batas Suhu Maksimum*: **60°C**. Di atas 62°C, pati oat akan mengental seperti bubur gandum!
* **Almond Milk (Susu Badam)**:
  - Memiliki kandungan protein lebih rendah sehingga busa cenderung tipis dan mudah pecah.
  - Membutuhkan teknik stretching yang lebih agresif di detik-detik awal.
* **Soy Milk (Susu Kedelai)**:
  - Sangat sensitif terhadap asam. Jika dituangkan langsung ke espresso panas dengan keasaman tinggi, protein kedelai akan menggumpal seperti tahu hancur (*thermal-acid coagulation*).
  - *Tips Barista*: Dinginkan sedikit espresso sebelum menuang susu kedelai atau aduk rata terlebih dahulu.`,
    content_type: 'text',
    duration_minutes: 14,
    order_index: 3,
    is_free: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Materi mendalam Manajemen Susu Nabati (Plant-Based): Oat, Almond, dan Soy Milk dengan studi kasus bar, parameter presisi, dan panduan teknis berstandar SCA.',
    key_takeaways: [
      'Pahami prinsip ilmiah dan fisika fluida yang mendasari parameter operasional bar.',
      'Terapkan parameter angka presisi (gram, detik, suhu °C, dan bar) secara konsisten di setiap cangkir.',
      'Jaga kebersihan alat dan utamakan keselamatan kerja ergonomis dalam rutinitas harian.'
    ],
  },  {
    id: 'les-b3-1',
    module_id: 'mod-b3',
    title: 'Mekanika Dasar: Tinggi Kanvas, Laju Alir (Flow Rate), dan Pusat Gravitasi',
    content: `# Mekanika Dasar: Tinggi Kanvas, Laju Alir (Flow Rate), dan Pusat Gravitasi

Latte art bukanlah trik sulap tangan, melainkan fisika hidrodinamika antara dua fluida dengan massa jenis berbeda: espresso yang kental berlemak (*dense base*) dan microfoam susu yang aerasi (*light foam*).

![Sudut Tuangan Pitcher dan Kemiringan Cangkir Keramik Latte](https://images.unsplash.com/photo-1534778101976-62847782c213?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Mengatur Tinggi Jatuh Aliran Susu untuk Menciptakan Kanvas Dasar Cokelat Bersih — Sumber / Kredit: Unsplash / Latte Art Championship*

---

### 1. Dua Ketinggian Kritis Tuangan

1. **Tuangan Tinggi (5 – 7 cm di atas cangkir) = Kanvas / Pencampuran**:
   Aliran susu yang dijatuhkan dari ketinggian memiliki momentum gravitasi tinggi. Susu akan menembus lapisan crema dan menyelam ke dasar cangkir tanpa meninggalkan jejak putih di permukaan.
2. **Tuangan Rendah (< 1 cm, moncong pitcher menyentuh bibir cangkir) = Menggambar Pola**:
   Momentum jatuhnya hilang. Microfoam yang mengapung akan meluncur lembut di atas crema dan merekah membentuk kontras putih terang di atas kanvas cokelat keemasan.

---

### 2. Aturan Kemiringan Cangkir (*Cup Tilt Control*)

Miringkan cangkir keramik sekitar 45 derajat di awal untuk memperbesar kedalaman cairan. Saat cangkir mulai terisi dan moncong pitcher diturunkan untuk menggambar, tegakkan cangkir secara bertahap dan sinkron agar cairan tidak meluap ke luar tepi cangkir.`,
    content_type: 'text',
    duration_minutes: 14,
    order_index: 1,
    is_free: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Materi mendalam Mekanika Dasar: Tinggi Kanvas, Laju Alir (Flow Rate), dan Pusat Gravitasi dengan studi kasus bar, parameter presisi, dan panduan teknis berstandar SCA.',
    key_takeaways: [
      'Pahami prinsip ilmiah dan fisika fluida yang mendasari parameter operasional bar.',
      'Terapkan parameter angka presisi (gram, detik, suhu °C, dan bar) secara konsisten di setiap cangkir.',
      'Jaga kebersihan alat dan utamakan keselamatan kerja ergonomis dalam rutinitas harian.'
    ],
  },  {
    id: 'les-b3-2',
    module_id: 'mod-b3',
    title: 'Mastering Pola Simetris Dasar: Solid Heart, Winged Heart, dan Multi-Tier Tulip',
    content: `# Mastering Pola Simetris Dasar: Solid Heart, Winged Heart, dan Multi-Tier Tulip

Pola dasar adalah pondasi penilaian juri dalam kejuaraan World Latte Art Championship (WLAC). Pola yang sempurna dinilai dari kontras warna, simetri garis tengah, dan posisi pola di tengah cangkir.

![Pola Latte Art Tulip 4 Tingkat Simetris pada Cangkir 220ml](https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Kontras Tajam Warna Crema dan Busa Putih pada Pola Tulip Berlapis — Sumber / Kredit: Unsplash / Coffee Fest Art*

---

### 1. Teknik Solid Heart (Hati Klasik)

1. Buat kanvas dasar hingga cangkir terisi 50%.
2. Dekatkan moncong pitcher ke tengah cangkir, buka laju alir tuangan. Busa putih akan merekah membentuk lingkaran penuh.
3. Pertahankan posisi pitcher tetap di tengah hingga cangkir terisi 90%.
4. Angkat pitcher setinggi 5 cm (memperkecil aliran susu) dan potong lurus ke depan (*cut through*) untuk menarik lekukan hati yang tajam.

---

### 2. Teknik Multi-Tier Tulip (Tulip Berlapis 3-5 Tingkat)

Kunci membuat tulip bertingkat adalah **kontrol jeda aliran tuangan**:
* Layer 1: Tuang di bagian belakang cangkir hingga merekah setengah bulan, lalu stop sejenak.
* Layer 2: Dorong moncong pitcher sedikit ke tengah, tuang kembali hingga lingkaran kedua membungkus bagian dalam layer pertama, lalu stop.
* Layer 3 & 4: Ulangi dorongan ke arah depan dengan volume lebih kecil.
* Cut Through: Angkat pitcher tinggi dan belah tengah lurus dengan aliran tipis.`,
    content_type: 'text',
    duration_minutes: 15,
    order_index: 2,
    is_free: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Materi mendalam Mastering Pola Simetris Dasar: Solid Heart, Winged Heart, dan Multi-Tier Tulip dengan studi kasus bar, parameter presisi, dan panduan teknis berstandar SCA.',
    key_takeaways: [
      'Pahami prinsip ilmiah dan fisika fluida yang mendasari parameter operasional bar.',
      'Terapkan parameter angka presisi (gram, detik, suhu °C, dan bar) secara konsisten di setiap cangkir.',
      'Jaga kebersihan alat dan utamakan keselamatan kerja ergonomis dalam rutinitas harian.'
    ],
  },  {
    id: 'les-b3-3',
    module_id: 'mod-b3',
    title: 'Teknik Tingkat Lanjut: Rosetta Daun Halus, Inverted Tulip, dan Pola Angsa (Swan)',
    content: `# Teknik Tingkat Lanjut: Rosetta Daun Halus, Inverted Tulip, dan Pola Angsa (Swan)

Setelah menguasai tuangan statis (tulip), barista melangkah ke teknik osilasi dinamis (*wiggling*) untuk menciptakan tekstur daun rosetta dan kombinasi figuratif seperti angsa (*swan*).

![Pola Latte Art Swan Elegan dengan Dasar Rosetta Melengkung](https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Komposisi Gambar Angsa Anggun dengan Sayap Bersayap Halus — Sumber / Kredit: Unsplash / World Latte Art*

---

### 1. Dinamika Osilasi Pergelangan Tangan (Rosetta)

* Goyangan pitcher bukan berasal dari siku atau lengan atas, melainkan murni dari kelenturan pergelangan tangan (*wrist movement*).
* Gerakan ke kiri dan kanan harus memiliki amplitudo yang seragam (misal 5 mm ke kiri dan 5 mm ke kanan secara ritmis).
* Sembari menggoyangkan moncong pitcher, gerakkan tangan mundur perlahan ke arah belakang cangkir, lalu potong lurus ke depan.

---

### 2. Anatomi Pola Angsa (*Swan*)

1. **Sayap & Badan**: Mulai dengan membuat sayap dasar menggunakan rosetta miring atau inverted tulip di sisi kiri cangkir.
2. **Leher Angsa**: Tarik aliran susu tipis melengkung ke atas di sisi kanan sayap menuju bagian atas cangkir.
3. **Kepala & Paruh**: Buat hati kecil di ujung leher, lalu tarik moncong pitcher ke bawah tajam untuk membentuk paruh angsa yang runcing.`,
    content_type: 'text',
    duration_minutes: 15,
    order_index: 3,
    is_free: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Materi mendalam Teknik Tingkat Lanjut: Rosetta Daun Halus, Inverted Tulip, dan Pola Angsa (Swan) dengan studi kasus bar, parameter presisi, dan panduan teknis berstandar SCA.',
    key_takeaways: [
      'Pahami prinsip ilmiah dan fisika fluida yang mendasari parameter operasional bar.',
      'Terapkan parameter angka presisi (gram, detik, suhu °C, dan bar) secara konsisten di setiap cangkir.',
      'Jaga kebersihan alat dan utamakan keselamatan kerja ergonomis dalam rutinitas harian.'
    ],
  },  {
    id: 'les-b4-1',
    module_id: 'mod-b4',
    title: 'Manajemen Multi-Order V60 & Flat-Bottom di Bawah Jam Sibuk (Rush Hour)',
    content: `# Manajemen Multi-Order V60 & Flat-Bottom di Bawah Jam Sibuk (Rush Hour)

Di coffee shop specialty yang ramai, pesanan filter coffee manual brew (V60, Kalita, Origami) sering kali datang bertubi-tubi bersamaan dengan antrean minuman espresso base. Barista yang tidak memiliki strategi alur kerja akan mengalami kemacetan total (*bottleneck*).

![Stasiun Seduh Manual Multi-Dripper di Specialty Coffee Bar](https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Manajemen Stasiun Seduh Manual 3 Dripper Simultan — Sumber / Kredit: Unsplash / Brewers Cup*

---

### 1. Teknik Staggered Pouring (Tuangan Berselang)

Jangan menyeduh dua dripper secara acak bersamaan! Gunakan sistem selisih waktu 45 detik:
* **00:00**: Tuang fase blooming pada Dripper 1 (misal 50g air).
* **00:45**: Tuang fase blooming pada Dripper 2. Di saat yang sama, lakukan tuangan kedua pada Dripper 1.
* **01:30**: Lakukan tuangan kedua pada Dripper 2, lalu lakukan tuangan akhir pada Dripper 1.
* Dengan metode berselang ini, satu barista dapat menangani 3 cangkir manual brew berkualitas tinggi secara konsisten tanpa kehilangan fokus pada laju alir ketel (*kettle flow rate*).`,
    content_type: 'text',
    duration_minutes: 15,
    order_index: 1,
    is_free: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Materi mendalam Manajemen Multi-Order V60 & Flat-Bottom di Bawah Jam Sibuk (Rush Hour) dengan studi kasus bar, parameter presisi, dan panduan teknis berstandar SCA.',
    key_takeaways: [
      'Pahami prinsip ilmiah dan fisika fluida yang mendasari parameter operasional bar.',
      'Terapkan parameter angka presisi (gram, detik, suhu °C, dan bar) secara konsisten di setiap cangkir.',
      'Jaga kebersihan alat dan utamakan keselamatan kerja ergonomis dalam rutinitas harian.'
    ],
  },  {
    id: 'les-b4-2',
    module_id: 'mod-b4',
    title: 'Kalibrasi TDS & Extraction Yield Cepat Menggunakan Refraktometer Kopi Digital',
    content: `# Kalibrasi TDS & Extraction Yield Cepat Menggunakan Refraktometer Kopi Digital

Intuisi lidah barista adalah instrumen utama rasa, namun sains refraktometri memberikan angka objektif yang dapat diverifikasi dan diaudit setiap hari.

![Pengujian Indeks Bias Cahaya Cairan Kopi dengan Refraktometer Digital](https://images.unsplash.com/photo-1541167760496-1628856ab772?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Pengukuran Total Dissolved Solids (TDS) Menggunakan Refraktometer Kopi — Sumber / Kredit: Unsplash / Coffee Science Foundation*

---

### 1. Definisi TDS dan Extraction Yield

* **Total Dissolved Solids (TDS %)**: Persentase massa zat padat terlarut kopi di dalam secangkir cairan seduhan. Standar filter coffee ideal berada di rentang **1.15% – 1.45%**.
* **Extraction Yield (EY %)**: Persentase berat zat yang berhasil dilarutkan air dari total massa bubuk kopi kering. Standar SCA menetapkan rentang ekstraksi optimal di **18.0% – 22.0%**.

> ☕ **Formula Extraction Yield (EY %):**
> **EY (%)** = **(Cairan Kopi yang Dihasilkan [g] × TDS [%])** ÷ **Dosis Bubuk Kopi Kering [g]**
> *Contoh: (220 gram kopi seduh × 1.35% TDS) ÷ 15.0 gram bubuk = 19.8% Extraction Yield (Ideal Sweet Spot!)*`,
    content_type: 'text',
    duration_minutes: 14,
    order_index: 2,
    is_free: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Materi mendalam Kalibrasi TDS & Extraction Yield Cepat Menggunakan Refraktometer Kopi Digital dengan studi kasus bar, parameter presisi, dan panduan teknis berstandar SCA.',
    key_takeaways: [
      'Pahami prinsip ilmiah dan fisika fluida yang mendasari parameter operasional bar.',
      'Terapkan parameter angka presisi (gram, detik, suhu °C, dan bar) secara konsisten di setiap cangkir.',
      'Jaga kebersihan alat dan utamakan keselamatan kerja ergonomis dalam rutinitas harian.'
    ],
  },  {
    id: 'les-b4-3',
    module_id: 'mod-b4',
    title: 'Teknik Bypass & Konsentrat Batch Brew: Menjaga Kecepatan Layanan Tanpa Kompromi Mutu',
    content: `# Teknik Bypass & Konsentrat Batch Brew: Menjaga Kecepatan Layanan

Untuk kedai kopi perkantoran dengan jam sibuk pagi hari (07.30 – 09.30), membuat seduhan satu per satu (*single-cup pour over*) sering kali membuat pelanggan terlambat bekerja. Solusi modern kedai specialty kelas dunia adalah **Batch Brew Presisi**.

![Penyajian Kopi Batch Brew Komersial Menggunakan Thermal Airpot](https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Mesin Batch Brewer Otomatis dengan Kontrol Shower Head Presisi — Sumber / Kredit: Unsplash / Specialty Coffee Equipment*

---

### 1. Teknik Bypass Water

Bypass adalah teknik menambahkan air panas bersih langsung ke cairan kopi hasil seduhan terkonsentrasi:
* Barista mengekstrak kopi dengan rasio lebih padat (misal 1:12) untuk mengekstrak hanya komponen asam buah dan gula karamel yang manis.
* Kemudian, ditambahkan 20–25% air bypass untuk menurunkan konsentrasi TDS ke tingkat yang nyaman diminum (1.30%).
* Hasilnya: Cangkir terasa sangat bersih (*clean cup*), manis, dan bebas dari serat pahit yang biasanya keluar di akhir seduhan panjang.`,
    content_type: 'text',
    duration_minutes: 14,
    order_index: 3,
    is_free: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Materi mendalam Teknik Bypass & Konsentrat Batch Brew: Menjaga Kecepatan Layanan Tanpa Kompromi Mutu dengan studi kasus bar, parameter presisi, dan panduan teknis berstandar SCA.',
    key_takeaways: [
      'Pahami prinsip ilmiah dan fisika fluida yang mendasari parameter operasional bar.',
      'Terapkan parameter angka presisi (gram, detik, suhu °C, dan bar) secara konsisten di setiap cangkir.',
      'Jaga kebersihan alat dan utamakan keselamatan kerja ergonomis dalam rutinitas harian.'
    ],
  },  {
    id: 'les-b5-1',
    module_id: 'mod-b5',
    title: 'Anatomi Mesin Espresso: Heat Exchanger, Dual Boiler, dan Saturated Group',
    content: `# Anatomi Mesin Espresso: Heat Exchanger, Dual Boiler, dan Saturated Group

Memahami jeroan mesin espresso komersial adalah syarat mutlak bagi seorang Head Barista. Kestabilan suhu ekstraksi adalah penentu konsistensi rasa dari cangkir pertama hingga cangkir ke-500 setiap harinya.

![Komponen Internal Mesin Espresso Komersial Dual Boiler Multi-Group](https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Arsitektur Ketel Ganda (Dual Boiler) dengan Kontrol Termal PID Elektronik — Sumber / Kredit: Unsplash / Commercial Espresso Engineering*

---

### 1. Perbedaan Sistem Boiler Komersial

1. **Heat Exchanger (HX)**:
   - Menggunakan satu boiler uap besar bersuhu tinggi (120°C). Pipa air seduh melintas di tengah boiler uap tersebut.
   - Kelemahan: Jika mesin didiamkan lama, air di dalam pipa akan menjadi terlalu panas (*overheating*), sehingga membutuhkan *cooling flush* sebelum menyeduh.
2. **Dual Boiler**:
   - Memisahkan boiler air seduh kopi (kapasitas 2–4 Liter, suhu 93°C) dengan boiler steam wand uap susu (kapasitas 7–12 Liter, suhu 125°C).
   - Memberikan stabilitas suhu ekstraksi yang jauh lebih presisi tanpa terpengaruh aktivitas steaming susu.
3. **Saturated Group Head**:
   - Ruang group head terendam langsung ke dalam boiler seduh (*open neck design* seperti La Marzocco), menjamin suhu di ujung shower screen sama persis dengan suhu di dalam boiler.`,
    content_type: 'text',
    duration_minutes: 15,
    order_index: 1,
    is_free: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Materi mendalam Anatomi Mesin Espresso: Heat Exchanger, Dual Boiler, dan Saturated Group dengan studi kasus bar, parameter presisi, dan panduan teknis berstandar SCA.',
    key_takeaways: [
      'Pahami prinsip ilmiah dan fisika fluida yang mendasari parameter operasional bar.',
      'Terapkan parameter angka presisi (gram, detik, suhu °C, dan bar) secara konsisten di setiap cangkir.',
      'Jaga kebersihan alat dan utamakan keselamatan kerja ergonomis dalam rutinitas harian.'
    ],
  },  {
    id: 'les-b5-2',
    module_id: 'mod-b5',
    title: 'SOP Sanitasi Harian: Backflushing Kimia, Shower Screen, dan Sanitasi Steam Wand',
    content: `# SOP Sanitasi Harian: Backflushing Kimia, Shower Screen, dan Sanitasi Steam Wand

Minyak kopi yang terpapar panas konstan di group head akan mengalami oksidasi dan tengik (*rancid oil*) dalam waktu kurang dari 24 jam. Kopi termahal sekalipun akan terasa pahit busuk jika diseduh melalui group head yang kotor!

![Proses Backflush Kimia Menggunakan Blind Basket Portafilter](https://images.unsplash.com/photo-1497636577773-f1231844b336?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Siklus Pembersihan Kimia Harian untuk Menghilangkan Kerak Minyak Kopi — Sumber / Kredit: Unsplash / Specialty Coffee Hygiene*

---

### 1. SOP Closing Shift Harian (Wajib Setiap Malam)

1. **Sikat Group Head**: Gunakan sikat nilon bersudut untuk membersihkan sisa bubuk kopi yang menempel di sela-sela gasket karet.
2. **Backflush Blind Filter**:
   - Pasang keranjang buntu (*blind basket*) tanpa lubang ke portafilter.
   - Masukkan 3 gram bubuk pembersih detergen khusus mesin espresso (misal Cafiza / Puly Caff).
   - Pasang portafilter ke group head, nyalakan pompa selama 10 detik, matikan 5 detik. Ulangi siklus ini 5 kali.
   - Lepas portafilter, buang busa kimia, lalu bilas backflush dengan air murni sebanyak 5 kali hingga air buangan benar-benar bening.
3. **Rendam Portafilter & Basket**: Rendam ujung portafilter stainless steel dan keranjang basket ke dalam air hangat berlarutan detergen. **PENTING**: Jangan pernah merendam gagang plastik portafilter!`,
    content_type: 'text',
    duration_minutes: 14,
    order_index: 2,
    is_free: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Materi mendalam SOP Sanitasi Harian: Backflushing Kimia, Shower Screen, dan Sanitasi Steam Wand dengan studi kasus bar, parameter presisi, dan panduan teknis berstandar SCA.',
    key_takeaways: [
      'Pahami prinsip ilmiah dan fisika fluida yang mendasari parameter operasional bar.',
      'Terapkan parameter angka presisi (gram, detik, suhu °C, dan bar) secara konsisten di setiap cangkir.',
      'Jaga kebersihan alat dan utamakan keselamatan kerja ergonomis dalam rutinitas harian.'
    ],
  },  {
    id: 'les-b5-3',
    module_id: 'mod-b5',
    title: 'Troubleshooting Tekanan & Kebocoran: Gasket, Solenoid Valve, dan Pompa Rotary',
    content: `# Troubleshooting Tekanan & Kebocoran: Gasket, Solenoid Valve, dan Pompa Rotary

Seorang barista tangguh tidak panik ketika mesin mengalami kendala teknis kecil di tengah jam sibuk.

![Perawatan Rutin Gasket Group Head dan Shower Dispersion Screen](https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Penggantian Karet Gasket dan Pemeriksaan Katup Solenoid Tiga Arah — Sumber / Kredit: Unsplash / Coffee Tech Maintenance*

---

### 1. Tiga Masalah Mekanis Paling Sering Terjadi

* **Bocoran Air Menetes dari Tepi Portafilter saat Ekstraksi**:
  - *Penyebab*: Karet gasket group head telah mengeras, pecah-pecah akibat panas, atau kehilangan elastisitasnya.
  - *Solusi*: Ganti gasket karet (atau beralih ke gasket silikon yang lebih awet tahan panas) setiap 4–6 bulan sekali.
* **Ampas Kopi Becek Berair (*Soggy Puck*)**:
  - *Penyebab*: Katup tiga arah (*3-way solenoid valve*) tersumbat kotoran sehingga tidak mampu membuang sisa tekanan air secara instan saat tombol stop ditekan.
  - *Solusi*: Lakukan chemical backflush mendalam atau bongkar inti solenoid untuk dibersihkan dari kerak.
* **Jarum Tekanan Manometer Bergetar atau Turun di Bawah 8 Bar**:
  - *Penyebab*: Pasokan air dari sistem pompa galon eksternal (*Flojet*) kehabisan debit, filter air tersumbat, atau baut bypass pompa rotary aus.`,
    content_type: 'text',
    duration_minutes: 14,
    order_index: 3,
    is_free: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Materi mendalam Troubleshooting Tekanan & Kebocoran: Gasket, Solenoid Valve, dan Pompa Rotary dengan studi kasus bar, parameter presisi, dan panduan teknis berstandar SCA.',
    key_takeaways: [
      'Pahami prinsip ilmiah dan fisika fluida yang mendasari parameter operasional bar.',
      'Terapkan parameter angka presisi (gram, detik, suhu °C, dan bar) secara konsisten di setiap cangkir.',
      'Jaga kebersihan alat dan utamakan keselamatan kerja ergonomis dalam rutinitas harian.'
    ],
  },  {
    id: 'les-b6-1',
    module_id: 'mod-b6',
    title: 'Teori Formulasi Minuman: Keseimbangan 5 Rasa Dasar pada Kopi Dingin',
    content: `# Teori Formulasi Minuman: Keseimbangan 5 Rasa Dasar pada Kopi Dingin

Dalam kompetisi World Barista Championship (WBC), babak *Signature Drink* adalah panggung di mana barista mendemonstrasikan keahlian rasa layaknya seorang chef bintang lima.

![Kreasi Minuman Kopi Signature Cold Beverage Berlapis Buah Segar](https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Harmonisasi Rasa Espresso dengan Infusi Bahan Botani Alami — Sumber / Kredit: Unsplash / World Barista Championship*

---

### 1. Prinsip Sinergi Rasa (Flavor Synergy)

Tujuan membuat minuman signature bukanlah menutupi rasa kopi, melainkan **menonjolkan (*elevate*)** atribut rasa bawaan kopi tersebut:
* Jika menggunakan biji kopi Ethiopia yang kaya aroma melati dan jeruk bergamot, padukan dengan reduksi sirup bunga elderflower dan sari jeruk sitrun segar.
* Jika menggunakan biji Sumatra fermentasi bodi tebal, padukan dengan sari rempah jahe bakar atau santan kelapa panggang (*toasted coconut*).

---

### 2. Efek Penurunan Suhu terhadap Pengecapan

Suhu dingin menumpulkan kepekaan papila lidah manusia terhadap rasa manis sebesar 20–30%, namun justru mempertegas rasa pahit dan keasaman. Oleh karena itu, formulasi minuman kopi dingin (*iced beverage*) memerlukan penyesuaian brix kemanisan yang sedikit lebih tinggi daripada minuman hangat.`,
    content_type: 'text',
    duration_minutes: 14,
    order_index: 1,
    is_free: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Materi mendalam Teori Formulasi Minuman: Keseimbangan 5 Rasa Dasar pada Kopi Dingin dengan studi kasus bar, parameter presisi, dan panduan teknis berstandar SCA.',
    key_takeaways: [
      'Pahami prinsip ilmiah dan fisika fluida yang mendasari parameter operasional bar.',
      'Terapkan parameter angka presisi (gram, detik, suhu °C, dan bar) secara konsisten di setiap cangkir.',
      'Jaga kebersihan alat dan utamakan keselamatan kerja ergonomis dalam rutinitas harian.'
    ],
  },  {
    id: 'les-b6-2',
    module_id: 'mod-b6',
    title: 'Pembuatan Sirup Botani & Reduksi Rempah: Rasio Gula-Air, Maserasi Dingin, dan Pengawetan Alami',
    content: `# Pembuatan Sirup Botani & Reduksi Rempah: Rasio Gula-Air, Maserasi Dingin, dan Pengawetan Alami

Kunci diferensiasi kedai kopi modern dari jaringan kedai franchise massal adalah pembuatan sirup sendiri (*in-house craft syrup*) tanpa pewarna atau perisa sintetis pabrikan.

![Pembuatan Sirup Rempah dan Ekstraksi Botani Alami Homemade](https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Proses Ekstraksi Maserasi Dingin Bahan Herbal dan Buah Segar — Sumber / Kredit: Unsplash / Beverage Craft Lab*

---

### 1. Perbandingan Rasio Simple Syrup vs Rich Syrup

* **Simple Syrup (1:1)**: 1 bagian gula pasir ke 1 bagian air hangat. Konsentrasi sekitar 50° Brix. Sangat encer dan mudah larut pada minuman dingin, namun memiliki umur simpan pendek (sekitar 2 minggu di kulkas).
* **Rich Simple Syrup (2:1)**: 2 bagian gula pasir ke 1 bagian air. Konsentrasi mencapai 65° Brix. Pada konsentrasi ini, tekanan osmotik sangat tinggi sehingga mikroorganisme bakteri pembusuk tidak dapat bertahan hidup tanpa pengawet kimiawi (tahan hingga 2-3 bulan di kulkas).

---

### 2. Resep Craft Sirup Gula Aren Organik Spesialti

- **Bahan**: 1.000g Gula Aren Murni Organik (Lebak/Curup) + 500g Air Bersih + 3 lembar Daun Pandan Segar + 2 batang Kayu Manis + 1g Garam Laut Halus (*Sea Salt*).
- **Metode**: Larutkan gula aren pada suhu api kecil (maksimum 85°C, jangan sampai mendidih bergolak agar aroma karamel alami tidak gosong). Saring kotoran menggunakan kain saring kopi. Simpan dalam botol kaca steril.`,
    content_type: 'text',
    duration_minutes: 15,
    order_index: 2,
    is_free: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Materi mendalam Pembuatan Sirup Botani & Reduksi Rempah: Rasio Gula-Air, Maserasi Dingin, dan Pengawetan Alami dengan studi kasus bar, parameter presisi, dan panduan teknis berstandar SCA.',
    key_takeaways: [
      'Pahami prinsip ilmiah dan fisika fluida yang mendasari parameter operasional bar.',
      'Terapkan parameter angka presisi (gram, detik, suhu °C, dan bar) secara konsisten di setiap cangkir.',
      'Jaga kebersihan alat dan utamakan keselamatan kerja ergonomis dalam rutinitas harian.'
    ],
  },  {
    id: 'les-b6-3',
    module_id: 'mod-b6',
    title: 'Teknik Karbonasi, Klarifikasi Susu (Milk Washing), dan Seni Garnish Aromatik',
    content: `# Teknik Karbonasi, Klarifikasi Susu (Milk Washing), dan Seni Garnish Aromatik

Dua teknik molekuler mutakhir yang kini menjadi tren wajib di coffee bar modern:

![Penyajian Mocktail Kopi Bening Hasil Klarifikasi Milk Washing](https://images.unsplash.com/photo-1498804103079-a6351b050096?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Kopi Cold Brew Bening Berkarbonasi Ringan dengan Garnish Kulit Jeruk — Sumber / Kredit: Unsplash / Modern Mixology Lab*

---

### 1. Sains Klarifikasi Susu (*Milk Washing*)

* Milk washing adalah teknik kuno abad ke-18 yang dihidupkan kembali oleh barista spesialti modern.
* Ketika espresso yang asam dituangkan ke dalam susu sapi hangat, asam kopi memicu penggumpalan protein kasein (*curd*).
* Gumpalan kasein ini bertindak sebagai perangkap mikro yang menyerap partikel keruh, zat tanin astringent yang kasar, dan warna pekat kopi.
* Saat disaring melalui kertas saring halus, cairan yang keluar menjadi **bening keemasan jernih seperti teh**, namun memiliki rasa kopi susu yang sangat gurih, lembut (*velvety*), dan bebas dari rasa pahit!`,
    content_type: 'text',
    duration_minutes: 14,
    order_index: 3,
    is_free: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Materi mendalam Teknik Karbonasi, Klarifikasi Susu (Milk Washing), dan Seni Garnish Aromatik dengan studi kasus bar, parameter presisi, dan panduan teknis berstandar SCA.',
    key_takeaways: [
      'Pahami prinsip ilmiah dan fisika fluida yang mendasari parameter operasional bar.',
      'Terapkan parameter angka presisi (gram, detik, suhu °C, dan bar) secara konsisten di setiap cangkir.',
      'Jaga kebersihan alat dan utamakan keselamatan kerja ergonomis dalam rutinitas harian.'
    ],
  },  {
    id: 'les-b7-1',
    module_id: 'mod-b7',
    title: 'Rutinitas Morning Cupping Tim Barista: Menjaga Kalibrasi Antar Shift Kerja',
    content: `# Rutinitas Morning Cupping Tim Barista: Menjaga Kalibrasi Antar Shift Kerja

Salah satu keluhan terbesar konsumen kopi adalah inkonsistensi: *"Kemarin waktu diseduh barista A rasanya enak manis, kok hari ini waktu diseduh barista B rasanya masam sepet?"*.

![Sesi Kalibrasi Cupping Harian Tim Barista Sebelum Operasional](https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Sesi Cupping Cepat Pagi Hari untuk Menyelaraskan Persepsi Rasa Tim Bar — Sumber / Kredit: Unsplash / Specialty Coffee Association*

---

### 1. SOP Morning Cupping 15 Menit

Setiap pagi 30 menit sebelum pintu kedai dibuka:
1. Seduh 3 cangkir sampel menggunakan resep cupping standar (biji espresso blend hari ini, single origin filter 1, single origin filter 2).
2. Seluruh barista yang bertugas di shift pagi wajib mencicipi bersama menggunakan sendok cupping.
3. Sepakati deskripsi profil rasa hari ini: apa karakter asam buah yang dominan (jeruk, apel, atau nanas?), bagaimana rasa manisnya, dan seberapa lama aftertaste-nya.
4. Jika profil rasa melenceng dari standar roastery, lakukan investigasi sebelum pelanggan pertama tiba.`,
    content_type: 'text',
    duration_minutes: 14,
    order_index: 1,
    is_free: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Materi mendalam Rutinitas Morning Cupping Tim Barista: Menjaga Kalibrasi Antar Shift Kerja dengan studi kasus bar, parameter presisi, dan panduan teknis berstandar SCA.',
    key_takeaways: [
      'Pahami prinsip ilmiah dan fisika fluida yang mendasari parameter operasional bar.',
      'Terapkan parameter angka presisi (gram, detik, suhu °C, dan bar) secara konsisten di setiap cangkir.',
      'Jaga kebersihan alat dan utamakan keselamatan kerja ergonomis dalam rutinitas harian.'
    ],
  },  {
    id: 'les-b7-2',
    module_id: 'mod-b7',
    title: 'Deteksi Cacat Rasa Espresso: Mengidentifikasi Biji Stale, Under-Extraction, dan Over-Extraction',
    content: `# Deteksi Cacat Rasa Espresso: Mengidentifikasi Biji Stale, Under-Extraction, dan Over-Extraction

Barista profesional wajib mampu "membaca" espresso shot murni tanpa gula atau susu:

![Sensory Kalibrasi Pengecapan Espresso Shot Tunggal](https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Evaluasi Sensorik Crema dan Karakter Asam-Manis Espresso Tunggal — Sumber / Kredit: Unsplash / Sensory Summit*

---

### 1. Tiga Profil Rasa Cacat yang Harus Dihindari

1. **Under-Extraction (Kurang Ekstraksi)**:
   - *Rasa di Lidah*: Asam kecut menusuk seperti lemon mentah, asin di ujung lidah samping, rasa cepat hilang dan hambar di tengah, air terasa encer.
   - *Tanda Fisik Crema*: Crema tipis pucat kekuningan dan cepat pecah hilang dalam waktu 1 menit.
2. **Over-Extraction (Kelebihan Ekstraksi)**:
   - *Rasa di Lidah*: Pahit gosong menempel di langit-langit mulut, rasa abu rokok, tenggorokan terasa sepet kering berpasir (*astringent*).
   - *Tanda Fisik Crema*: Crema berwarna cokelat tua kehitaman dengan lingkaran hitam gosong di tepi cangkir.
3. **Stale Beans (Biji Tua Teroksidasi)**:
   - *Rasa di Lidah*: Rasa kertas kardus basah, apek (*flat*), ketiadaan aroma floral/buah sama sekali.
   - *Tanda Fisik*: Tidak menghasilkan crema tebal karena gas CO2 dalam biji telah hilang total.`,
    content_type: 'text',
    duration_minutes: 15,
    order_index: 2,
    is_free: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Materi mendalam Deteksi Cacat Rasa Espresso: Mengidentifikasi Biji Stale, Under-Extraction, dan Over-Extraction dengan studi kasus bar, parameter presisi, dan panduan teknis berstandar SCA.',
    key_takeaways: [
      'Pahami prinsip ilmiah dan fisika fluida yang mendasari parameter operasional bar.',
      'Terapkan parameter angka presisi (gram, detik, suhu °C, dan bar) secara konsisten di setiap cangkir.',
      'Jaga kebersihan alat dan utamakan keselamatan kerja ergonomis dalam rutinitas harian.'
    ],
  },  {
    id: 'les-b7-3',
    module_id: 'mod-b7',
    title: 'Sensory Triangulasi Harian: Melatih Kepekaan Barista Membedakan Profil Asam dan Aftertaste',
    content: `# Sensory Triangulasi Harian: Melatih Kepekaan Barista

Kepekaan sensorik adalah otot biologis: ia akan tumpul jika tidak dilatih, dan akan semakin tajam jika diasah secara disiplin.

![Latihan Blind Sensory Triangulation Menggunakan 3 Cangkir](https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Uji Buta Triangulasi 3 Cangkir untuk Menemukan 1 Sampel Berbeda — Sumber / Kredit: Unsplash / CQI Sensory Training*

---

### 1. Metode Latihan Triangulasi Cepat di Bar

1. Siapkan 3 cangkir tertutup di atas meja (2 cangkir diisi seduhan kopi A, 1 cangkir diisi kopi B yang memiliki kemiripan origin).
2. Barista mencicipi secara buta (*blind taste*) hanya dengan menyeruput menggunakan sendok cupping.
3. Barista harus mampu mengidentifikasi mana satu cangkir yang berbeda dalam waktu kurang dari 60 detik hanya berdasarkan keasaman (*acidity*), rasa manis, atau ketebalan bodi (*mouthfeel*).`,
    content_type: 'text',
    duration_minutes: 14,
    order_index: 3,
    is_free: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Materi mendalam Sensory Triangulasi Harian: Melatih Kepekaan Barista Membedakan Profil Asam dan Aftertaste dengan studi kasus bar, parameter presisi, dan panduan teknis berstandar SCA.',
    key_takeaways: [
      'Pahami prinsip ilmiah dan fisika fluida yang mendasari parameter operasional bar.',
      'Terapkan parameter angka presisi (gram, detik, suhu °C, dan bar) secara konsisten di setiap cangkir.',
      'Jaga kebersihan alat dan utamakan keselamatan kerja ergonomis dalam rutinitas harian.'
    ],
  },  {
    id: 'les-b8-1',
    module_id: 'mod-b8',
    title: 'Seni Menceritakan Profil Rasa Kopi Tanpa Istilah Teknis yang Mengintimidasi',
    content: `# Seni Menceritakan Profil Rasa Kopi Tanpa Istilah Teknis yang Mengintimidasi

Keahlian teknis menyeduh kopi bernilai nol jika barista bersikap arogan (*coffee snob*) dan membuat pelanggan merasa bodoh atau terintimidasi di depan kasir.

![Interaksi Hangat Barista dengan Pelanggan di Counter Bar Kopi](https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Hospitality Ramah dan Komunikasi Edukatif yang Menghubungkan Konsumen — Sumber / Kredit: Unsplash / Specialty Coffee Hospitality*

---

### 1. Hindari Bahasa Teknis ("Jargonitis")

* **SALAH (Mengintimidasi)**: *"Kopi ini varietas Typica anaerobic thermal shock dengan titratable acidity tinggi dan profil enzymatic bergamot jasminoid."*
* **BENAR (Menghubungkan & Nyata)**: *"Kopi ini memiliki karakter yang sangat segar dan ringan seperti teh melati, dengan sedikit sentuhan rasa manis asam seperti buah jeruk mandarin. Sangat cocok jika Anda menyukai kopi hitam yang menyegarkan!"*

---

### 2. Tiga Pertanyaan Kunci Mengarahkan Pilihan Tamu

1. *"Biasanya lebih suka kopi hitam atau kopi yang dicampur susu gurih?"*
2. *"Untuk kopi hitamnya, lebih menyukai karakter yang segar cerah buah-buahan atau yang beraroma cokelat rempah tebal?"*
3. *"Mau disajikan panas untuk menikmati aromanya atau dingin segar untuk diminum santai?"*`,
    content_type: 'text',
    duration_minutes: 14,
    order_index: 1,
    is_free: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Materi mendalam Seni Menceritakan Profil Rasa Kopi Tanpa Istilah Teknis yang Mengintimidasi dengan studi kasus bar, parameter presisi, dan panduan teknis berstandar SCA.',
    key_takeaways: [
      'Pahami prinsip ilmiah dan fisika fluida yang mendasari parameter operasional bar.',
      'Terapkan parameter angka presisi (gram, detik, suhu °C, dan bar) secara konsisten di setiap cangkir.',
      'Jaga kebersihan alat dan utamakan keselamatan kerja ergonomis dalam rutinitas harian.'
    ],
  },  {
    id: 'les-b8-2',
    module_id: 'mod-b8',
    title: 'Protokol Menangani Keluhan Rasa (Customer Complaints) dan Remake Tanpa Debat',
    content: `# Protokol Menangani Keluhan Rasa (Customer Complaints) dan Remake Tanpa Debat

Ketika pelanggan datang ke bar dan berkata: *"Mas, kopinya kok rasanya aneh ya, asam banget kayak basi?"*, bagaimana respon pertama Anda menentukan reputasi seluruh kedai kopi Anda.

![Penyelesaian Keluhan Pelanggan dengan Standar Remake Profesional](https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Menjaga Kepercayaan Konsumen Melalui Empati dan Solusi Cepat — Sumber / Kredit: Unsplash / Customer Service Guild*

---

### 1. Prinsip E.A.R (Empathy, Action, Respect)

1. **Empathy (Dengarkan Tanpa Membantah)**: Jangan pernah mendebat pelanggan dengan mengatakan *"Kopi spesialti memang asam kok, masnya belum biasa ya!"*. Kalimat ini adalah pembunuh bisnis kedai kopi nomor satu.
2. **Action (Tawarkan Pembuatan Ulang Segera)**: *"Mohon maaf jika minumannya kurang berkenan di lidah Kakak. Boleh saya buatkan kembali cangkir yang baru, atau Kakak ingin mencoba profil biji yang lebih beraroma cokelat manis?"*
3. **Respect & Investigation**: Ambil cangkir yang dikeluhkan ke belakang bar untuk dicicipi oleh tim (*quality check*). Sering kali keluhan konsumen justru menyelamatkan kedai dari mesin yang sedang bermasalah!`,
    content_type: 'text',
    duration_minutes: 14,
    order_index: 2,
    is_free: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Materi mendalam Protokol Menangani Keluhan Rasa (Customer Complaints) dan Remake Tanpa Debat dengan studi kasus bar, parameter presisi, dan panduan teknis berstandar SCA.',
    key_takeaways: [
      'Pahami prinsip ilmiah dan fisika fluida yang mendasari parameter operasional bar.',
      'Terapkan parameter angka presisi (gram, detik, suhu °C, dan bar) secara konsisten di setiap cangkir.',
      'Jaga kebersihan alat dan utamakan keselamatan kerja ergonomis dalam rutinitas harian.'
    ],
  },  {
    id: 'les-b8-3',
    module_id: 'mod-b8',
    title: 'Membaca Tipe Karakter Pelanggan: Dari Pemula Penikmat Kopi Manis hingga Purist',
    content: `# Membaca Tipe Karakter Pelanggan: Dari Pemula Penikmat Kopi Manis hingga Purist

Barista hebat adalah psikolog rasa yang mampu menyesuaikan gaya layanannya dengan profil kepribadian setiap pengunjung.

![Penyajian Kopi Sesuai Preferensi Personal Tamu](https://images.unsplash.com/photo-1524350876685-274059332603?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Menghadirkan Pengalaman Menyenangkan bagi Semua Kalangan Penikmat — Sumber / Kredit: Unsplash / Cafe Experience*

---

### 1. Segmentasi Pengunjung Kedai Kopi

* **The Sweet Seeker (Penikmat Kopi Susu Manis)**: Mencari rasa nyaman (*comfort drink*). Berikan senyuman tulus, rekomendasikan Signature Es Kopi Susu Aren Spesialti dengan susu oat atau krim kental tanpa menghakimi selera mereka.
* **The High-Speed Worker (Pekerja Sibuk)**: Menghargai kecepatan layanan di atas segalanya. Pastikan pesanan americano atau flat white mereka disajikan dalam waktu < 2 menit.
* **The Specialty Purist (Pencinta Seduh Manual Teliti)**: Sangat tertarik pada origin, proses pasca panen, dan altitude kebun. Berikan waktu untuk berdialog hangat, ceritakan nama prosesor petani di kebun, dan sajikan dengan kartu catatan rasa (*flavor card*).`,
    content_type: 'text',
    duration_minutes: 14,
    order_index: 3,
    is_free: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Materi mendalam Membaca Tipe Karakter Pelanggan: Dari Pemula Penikmat Kopi Manis hingga Purist dengan studi kasus bar, parameter presisi, dan panduan teknis berstandar SCA.',
    key_takeaways: [
      'Pahami prinsip ilmiah dan fisika fluida yang mendasari parameter operasional bar.',
      'Terapkan parameter angka presisi (gram, detik, suhu °C, dan bar) secara konsisten di setiap cangkir.',
      'Jaga kebersihan alat dan utamakan keselamatan kerja ergonomis dalam rutinitas harian.'
    ],
  },  {
    id: 'les-b9-1',
    module_id: 'mod-b9',
    title: 'Penerapan Sistem FIFO pada Biji Sangrai dan Susu Segar Pasteurisasi',
    content: `# Penerapan Sistem FIFO pada Biji Sangrai dan Susu Segar Pasteurisasi

Sistem manajemen inventaris **FIFO (First In, First Out)** adalah hukum besi operasional bar: bahan baku yang pertama kali masuk ke gudang harus menjadi yang pertama kali digunakan.

![Penyimpanan Biji Kopi Sangrai di Rak Hermetik Berlabel Tanggal Sangrai](https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Penataan Bahan Baku Bar Sesuai Tanggal Kedatangan dan Tanggal Roasting — Sumber / Kredit: Unsplash / Roastery Storage*

---

### 1. Rotasi Umur Biji Kopi Sangrai (*Degassing Window*)

* Biji kopi yang baru disangrai kemarin (*day 1*) mengandung terlalu banyak gas karbon dioksida (CO2) terperangkap, sehingga membuat espresso meletup-letup berbusa kasar (*gassy crema*).
* Waktu ideal penyeduhan espresso: **Hari ke-7 hingga Hari ke-30** setelah tanggal sangrai (*roast date*).
* Barista wajib menata kantong biji di rak penyimpanan dari kiri ke kanan berdasarkan tanggal sangrai terlama.

---

### 2. Manajemen Rantai Dingin (*Cold Chain*) Susu Segar

Susu pasteurisasi (*fresh milk*) tidak boleh berada di luar suhu kulkas (4°C) lebih dari 15 menit. Setiap kenaikan suhu 5°C akan melipatgandakan laju pertumbuhan bakteri asam laktat, mempercepat kebusukan susu hingga 3 kali lebih cepat!`,
    content_type: 'text',
    duration_minutes: 14,
    order_index: 1,
    is_free: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Materi mendalam Penerapan Sistem FIFO pada Biji Sangrai dan Susu Segar Pasteurisasi dengan studi kasus bar, parameter presisi, dan panduan teknis berstandar SCA.',
    key_takeaways: [
      'Pahami prinsip ilmiah dan fisika fluida yang mendasari parameter operasional bar.',
      'Terapkan parameter angka presisi (gram, detik, suhu °C, dan bar) secara konsisten di setiap cangkir.',
      'Jaga kebersihan alat dan utamakan keselamatan kerja ergonomis dalam rutinitas harian.'
    ],
  },  {
    id: 'les-b9-2',
    module_id: 'mod-b9',
    title: 'Audit dan Pengendalian Waste Bubuk Kopi Grinder On-Demand serta Efisiensi HPP',
    content: `# Audit dan Pengendalian Waste Bubuk Kopi Grinder On-Demand serta Efisiensi HPP

Di banyak kedai kopi yang merugi, kebocoran finansial terbesar sering kali bukan berasal dari pencurian, melainkan dari **pemborosan bubuk kopi (*waste*)** akibat teknik kalibrasi yang ceroboh.

![Penimbangan Presisi Dosis Bubuk Kopi untuk Mengurangi Limbah Purging](https://images.unsplash.com/photo-1587734195503-904fca47e0e9?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Menekan Kebocoran Bubuk Kopi Terbuang Melalui Catatan Waste Log Harian — Sumber / Kredit: Unsplash / Barista Waste Control*

---

### 1. Kalkulasi Matematika Waste Bubuk Kopi

Jika seorang barista membuang (*purging*) 10 gram bubuk setiap kali memutar dial grinder, dan melakukan kalibrasi 5 kali sehari:
* Waste per hari = 50 gram bubuk kopi.
* Dalam 1 bulan (30 hari) = 1.500 gram (1.5 kg) biji kopi terbuang sia-sia ke bak sampah!
* Jika harga biji espresso blend adalah Rp 280.000 per kg, maka kedai merugi **Rp 420.000 per bulan** hanya dari bubuk yang terbuang percuma di satu grinder saja!

---

### 2. SOP Minimal Waste Purging

Setelah memutar knob ukuran gilingan:
- Cukup lakukan purging selama 1.5 detik (setara 3–4 gram bubuk lama di chute) sebelum menampung dosis baru ke basket.
- Jangan menggiling 18 gram penuh lalu membuang semuanya hanya untuk membersihkan chute.`,
    content_type: 'text',
    duration_minutes: 15,
    order_index: 2,
    is_free: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Materi mendalam Audit dan Pengendalian Waste Bubuk Kopi Grinder On-Demand serta Efisiensi HPP dengan studi kasus bar, parameter presisi, dan panduan teknis berstandar SCA.',
    key_takeaways: [
      'Pahami prinsip ilmiah dan fisika fluida yang mendasari parameter operasional bar.',
      'Terapkan parameter angka presisi (gram, detik, suhu °C, dan bar) secara konsisten di setiap cangkir.',
      'Jaga kebersihan alat dan utamakan keselamatan kerja ergonomis dalam rutinitas harian.'
    ],
  },  {
    id: 'les-b9-3',
    module_id: 'mod-b9',
    title: 'SOP Pembukaan (Opening) dan Penutupan (Closing) Bar: Checklist Kebersihan dan Keamanan',
    content: `# SOP Pembukaan (Opening) dan Penutupan (Closing) Bar: Checklist Kebersihan dan Keamanan

Operasional bar yang unggul dibangun di atas kedisiplinan daftar periksa (*checklist*) yang ketat:

![Checklist Inspeksi Kebersihan dan Penutupan Shift Stasiun Bar Kopi](https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Dokumentasi Checklist Operasional Sebelum Serah Terima Shift Barista — Sumber / Kredit: Unsplash / Cafe Operations*

---

### 1. Checklist Opening Bar (Pukul 06.30 – 07.00)

* [ ] Nyalakan mesin espresso dan periksa tekanan boiler stabil di 1.1 – 1.3 bar.
* [ ] Cek pasokan air gallon / water filtration system (TDS dan tekanan pompa masuk).
* [ ] Pasang grinder hopper, periksa level biji sangrai, dan lakukan purging 2 dosis.
* [ ] Lakukan dial-in espresso harian hingga mendapatkan rasio 1:2 dalam 25–28 detik dengan rasa seimbang.
* [ ] Siapkan sanitasi kain microfiber warna-warni (Kuning: Steam wand, Biru: Meja bar, Merah: Bak cuci piring).

---

### 2. Checklist Closing Bar (Pukul 22.00 – 22.30)

* [ ] Chemical backflushing seluruh group head menggunakan blind filter dan bubuk Cafiza.
* [ ] Lepas shower screen dan bersihkan dispersi group head dengan sikat nilon.
* [ ] Kuras dan bersihkan milk pitcher rinser (*spray rinser*).
* [ ] Matikan mesin kopi (atau set ke mode eco-sleep), kosongkan sisa biji kopi dari hopper grinder ke wadah hermetik gelap.
* [ ] Catat sisa stok susu, sirup, dan catat total waste pada formulir inventaris harian.`,
    content_type: 'text',
    duration_minutes: 14,
    order_index: 3,
    is_free: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Materi mendalam SOP Pembukaan (Opening) dan Penutupan (Closing) Bar: Checklist Kebersihan dan Keamanan dengan studi kasus bar, parameter presisi, dan panduan teknis berstandar SCA.',
    key_takeaways: [
      'Pahami prinsip ilmiah dan fisika fluida yang mendasari parameter operasional bar.',
      'Terapkan parameter angka presisi (gram, detik, suhu °C, dan bar) secara konsisten di setiap cangkir.',
      'Jaga kebersihan alat dan utamakan keselamatan kerja ergonomis dalam rutinitas harian.'
    ],
  },  {
    id: 'les-b10-1',
    module_id: 'mod-b10',
    title: 'Pencegahan Cedera Berulang (RSI / Carpal Tunnel) pada Tangan dan Punggung Barista',
    content: `# Pencegahan Cedera Berulang (RSI / Carpal Tunnel) pada Tangan dan Punggung Barista

Profesi barista adalah pekerjaan fisik yang menuntut ribuan gerakan berulang setiap minggu: menekan tamper, memutar portafilter ke group head, mengangkat galon air, dan berdiri selama 8 jam shift.

![Postur Tubuh Ergonomis Barista saat Menekan Tamper Kopi](https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Postur Garis Lurus Lengan Bawah untuk Mencegah Cedera Sindrom Carpal Tunnel — Sumber / Kredit: Unsplash / Occupational Health for Baristas*

---

### 1. Mekanika Tamping Ergonomis

* **KESALAHAN FATAL**: Menekan tamper dengan pergelangan tangan bengkok ditekuk (*flexed wrist*) dan mengandalkan tenaga telapak tangan. Gerakan ini memberikan tekanan berlebih pada saraf medianus, memicu cedera *Carpal Tunnel Syndrome* dan radang sendi (*tendonitis*).
* **POSTUR ERGONOMIS BENAR**:
  - Lengan bawah, pergelangan tangan, dan gagang tamper harus membentuk satu garis lurus vertikal 90 derajat terhadap permukaan meja tamping.
  - Tenaga dorongan bukan berasal dari pergelangan tangan, melainkan dari berat badan bahu dan tubuh bagian atas yang ditekan ke bawah secara alami.

---

### 2. Penggunaan Matras Anti-Fatigue

Berdiri di atas lantai keramik keras selama berjam-jam menyebabkan nyeri punggung bawah (*lower back pain*) dan varises pada kaki. Meletakkan matras busa karet empuk (*anti-fatigue floor mat*) di sepanjang area stasiun seduh menyerap beban kejut pada sendi lutut dan tulang belakang barista.`,
    content_type: 'text',
    duration_minutes: 14,
    order_index: 1,
    is_free: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Materi mendalam Pencegahan Cedera Berulang (RSI / Carpal Tunnel) pada Tangan dan Punggung Barista dengan studi kasus bar, parameter presisi, dan panduan teknis berstandar SCA.',
    key_takeaways: [
      'Pahami prinsip ilmiah dan fisika fluida yang mendasari parameter operasional bar.',
      'Terapkan parameter angka presisi (gram, detik, suhu °C, dan bar) secara konsisten di setiap cangkir.',
      'Jaga kebersihan alat dan utamakan keselamatan kerja ergonomis dalam rutinitas harian.'
    ],
  },  {
    id: 'les-b10-2',
    module_id: 'mod-b10',
    title: 'Tata Letak Berdasarkan Frekuensi Gerak: Meminimalkan Langkah Kaki di Stasiun Seduh',
    content: `# Tata Letak Berdasarkan Frekuensi Gerak: Meminimalkan Langkah Kaki di Stasiun Seduh

Konsep tata letak bar modern mengadopsi prinsip kokpit pesawat terbang: seluruh instrumen dengan frekuensi penggunaan tertinggi harus berada dalam jangkauan satu rentangan lengan tanpa perlu melangkahkan kaki!

![Layout Stasiun Bar Kopi Ergonomis Berbasis Segitiga Kokpit](https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Desain Bar Ergonomis yang Menghilangkan Langkah Gerak Sia-Sia — Sumber / Kredit: Unsplash / Bar Architecture & Design*

---

### 1. Segitiga Kerja Barista (The Golden Triangle)

Tiga titik tersibuk di bar harus saling berdekatan:
1. **Grinder Espresso On-Demand**: Titik awal penimbangan dan dosing bubuk.
2. **Mesin Espresso & Group Head**: Titik penyeduhan dan steaming susu.
3. **Knockbox & Pitcher Rinser**: Titik pembuangan ampas dan pencucian pitcher instan.
* Barista idealnya hanya perlu memutar pinggul dan melangkah maksimal 1 langkah untuk menyelesaikan siklus satu cangkir kopi susu latte!`,
    content_type: 'text',
    duration_minutes: 14,
    order_index: 2,
    is_free: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Materi mendalam Tata Letak Berdasarkan Frekuensi Gerak: Meminimalkan Langkah Kaki di Stasiun Seduh dengan studi kasus bar, parameter presisi, dan panduan teknis berstandar SCA.',
    key_takeaways: [
      'Pahami prinsip ilmiah dan fisika fluida yang mendasari parameter operasional bar.',
      'Terapkan parameter angka presisi (gram, detik, suhu °C, dan bar) secara konsisten di setiap cangkir.',
      'Jaga kebersihan alat dan utamakan keselamatan kerja ergonomis dalam rutinitas harian.'
    ],
  },  {
    id: 'les-b10-3',
    module_id: 'mod-b10',
    title: 'Keselamatan Kerja di Area Panas: Air Mendidih, Uap Tekanan Tinggi, dan Bahaya Kelistrikan',
    content: `# Keselamatan Kerja di Area Panas: Air Mendidih, Uap Tekanan Tinggi, dan Bahaya Kelistrikan

Bar kopi adalah perpaduan antara air bertekanan tinggi, uap bertemperatur 125°C, dan arus listrik daya besar (3.000 – 6.000 Watt). Mengabaikan SOP keselamatan kerja berisiko memicu kecelakaan fatal di tempat kerja.

![Penerapan Standar Keselamatan Kerja dan Sanitasi Peralatan Bar Kopi](https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Protokol Sanitasi Aman dan Penanganan Uap Panas Mesin Komersial — Sumber / Kredit: Unsplash / Coffee Workplace Safety*

---

### 1. Tiga Protokol Keselamatan Kerja Wajib

1. **Arah Semburan Steam Wand**: Jangan pernah mengarahkan ujung nozzle steam wand ke arah tubuh barista lain atau tangan sendiri saat melakukan purging uap! Selalu arahkan ke dasar driptray.
2. **Alas Kaki Bersertifikasi Anti-Slip**: Barista dilarang keras mengenakan sepatu kasual bersol licin. Wajib menggunakan sepatu kerja bersol karet anti-slip dan tertutup rapat untuk melindungi kaki dari tumpahan air mendidih.
3. **Pemisahan Listrik dan Air**: Pastikan stopkontak dan kabel mesin espresso terletak di atas lantai dan terlindung dari risiko kebocoran pipa drainase pembuangan air.`,
    content_type: 'text',
    duration_minutes: 14,
    order_index: 3,
    is_free: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Materi mendalam Keselamatan Kerja di Area Panas: Air Mendidih, Uap Tekanan Tinggi, dan Bahaya Kelistrikan dengan studi kasus bar, parameter presisi, dan panduan teknis berstandar SCA.',
    key_takeaways: [
      'Pahami prinsip ilmiah dan fisika fluida yang mendasari parameter operasional bar.',
      'Terapkan parameter angka presisi (gram, detik, suhu °C, dan bar) secara konsisten di setiap cangkir.',
      'Jaga kebersihan alat dan utamakan keselamatan kerja ergonomis dalam rutinitas harian.'
    ],
  },
];

// ============================================================================
// 4. QUIZZES: BARISTA SPECIALIZATION PATH
// ============================================================================

export const BARISTA_QUIZZES: Quiz[] = [
  {
    id: 'quiz-b1',
    module_id: 'mod-b1',
    learning_path_id: null,
    quiz_scope: 'module',
    title: 'Kuis Evaluasi Modul B-1: Dial-In Espresso Komersial & Kalibrasi Resep Presisi',
    passing_score: 75,
    time_limit_minutes: 10,
    max_attempts: 3,
    created_at: '2026-08-05T00:00:00Z',
  },  {
    id: 'quiz-b2',
    module_id: 'mod-b2',
    learning_path_id: null,
    quiz_scope: 'module',
    title: 'Kuis Evaluasi Modul B-2: Sains Steaming Susu & Tekstur Microfoam Silky',
    passing_score: 75,
    time_limit_minutes: 10,
    max_attempts: 3,
    created_at: '2026-08-05T00:00:00Z',
  },  {
    id: 'quiz-b3',
    module_id: 'mod-b3',
    learning_path_id: null,
    quiz_scope: 'module',
    title: 'Kuis Evaluasi Modul B-3: Seni Latte Art Lanjutan & Ergonomi Tuangan',
    passing_score: 75,
    time_limit_minutes: 10,
    max_attempts: 3,
    created_at: '2026-08-05T00:00:00Z',
  },  {
    id: 'quiz-b4',
    module_id: 'mod-b4',
    learning_path_id: null,
    quiz_scope: 'module',
    title: 'Kuis Evaluasi Modul B-4: Manual Brewing di Bar Komersial & Speed-Service',
    passing_score: 75,
    time_limit_minutes: 10,
    max_attempts: 3,
    created_at: '2026-08-05T00:00:00Z',
  },  {
    id: 'quiz-b5',
    module_id: 'mod-b5',
    learning_path_id: null,
    quiz_scope: 'module',
    title: 'Kuis Evaluasi Modul B-5: Manajemen & Pemeliharaan Mesin Espresso Komersial',
    passing_score: 75,
    time_limit_minutes: 10,
    max_attempts: 3,
    created_at: '2026-08-05T00:00:00Z',
  },  {
    id: 'quiz-b6',
    module_id: 'mod-b6',
    learning_path_id: null,
    quiz_scope: 'module',
    title: 'Kuis Evaluasi Modul B-6: Signature Beverage & Pembuatan Sirup Craft Spesialti',
    passing_score: 75,
    time_limit_minutes: 10,
    max_attempts: 3,
    created_at: '2026-08-05T00:00:00Z',
  },  {
    id: 'quiz-b7',
    module_id: 'mod-b7',
    learning_path_id: null,
    quiz_scope: 'module',
    title: 'Kuis Evaluasi Modul B-7: Kalibrasi Sensorik Barista Harian & Dial-In Tasting',
    passing_score: 75,
    time_limit_minutes: 10,
    max_attempts: 3,
    created_at: '2026-08-05T00:00:00Z',
  },  {
    id: 'quiz-b8',
    module_id: 'mod-b8',
    learning_path_id: null,
    quiz_scope: 'module',
    title: 'Kuis Evaluasi Modul B-8: Hospitality, Pelayanan Konsumen & Komunikasi Rasa',
    passing_score: 75,
    time_limit_minutes: 10,
    max_attempts: 3,
    created_at: '2026-08-05T00:00:00Z',
  },  {
    id: 'quiz-b9',
    module_id: 'mod-b9',
    learning_path_id: null,
    quiz_scope: 'module',
    title: 'Kuis Evaluasi Modul B-9: Manajemen Inventaris Bar, FIFO & Pengendalian Waste',
    passing_score: 75,
    time_limit_minutes: 10,
    max_attempts: 3,
    created_at: '2026-08-05T00:00:00Z',
  },  {
    id: 'quiz-b10',
    module_id: 'mod-b10',
    learning_path_id: null,
    quiz_scope: 'module',
    title: 'Kuis Evaluasi Modul B-10: Ergonomi Kerja Barista, Keselamatan & Alur Kerja Bar',
    passing_score: 75,
    time_limit_minutes: 10,
    max_attempts: 3,
    created_at: '2026-08-05T00:00:00Z',
  },  {
    id: 'quiz-final-barista',
    module_id: null,
    learning_path_id: 'path-barista',
    quiz_scope: 'final_exam',
    title: 'Ujian Akhir Profesional Barista: Sertifikasi Kompetensi Bar CherryEdu',
    passing_score: 80,
    time_limit_minutes: 25,
    max_attempts: 3,
    created_at: '2026-08-05T00:00:00Z',
  },
];

// ============================================================================
// 5. QUESTIONS: BARISTA SPECIALIZATION PATH
// ============================================================================

export const BARISTA_QUESTIONS: Question[] = [
  {
    id: 'q-b1-1',
    quiz_id: 'quiz-b1',
    question_text: 'Apa parameter teknis kunci yang wajib dijaga oleh barista dalam topik Dial-In Espresso Komersial & Kalibrasi Resep Presisi?',
    question_type: 'multiple_choice',
    order_index: 1,
    explanation: 'Dalam standar barista profesional, konsistensi parameter angka riil dan pemahaman fisika fluida/sensorik adalah pondasi utama menjaga mutu cangkir.',
    answers: [
      { id: 'ans-b1-1a', question_id: 'q-b1-1', answer_text: 'Pengendalian parameter presisi berbasis data dan evaluasi sensorik teratur', is_correct: true, order_index: 1 },
      { id: 'ans-b1-1b', question_id: 'q-b1-1', answer_text: 'Mengira-ngira takaran secara visual tanpa bantuan timbangan digital', is_correct: false, order_index: 2 },
      { id: 'ans-b1-1c', question_id: 'q-b1-1', answer_text: 'Mengabaikan pembersihan mesin untuk menghemat waktu operasional', is_correct: false, order_index: 3 },
      { id: 'ans-b1-1d', question_id: 'q-b1-1', answer_text: 'Menggunakan suhu air semaksimal mungkin hingga mendidih bergolak', is_correct: false, order_index: 4 },
    ],
  },  {
    id: 'q-b1-2',
    quiz_id: 'quiz-b1',
    question_text: 'Tindakan korektif apa yang paling tepat jika terjadi ketidaksesuaian hasil cangkir pada modul Dial-In Espresso Komersial & Kalibrasi Resep Presisi?',
    question_type: 'multiple_choice',
    order_index: 2,
    explanation: 'Troubleshooting yang benar selalu mengisolasi satu variabel pada satu waktu (misalnya hanya mengubah ukuran gilingan) tanpa mengubah variabel lain.',
    answers: [
      { id: 'ans-b1-2a', question_id: 'q-b1-2', answer_text: 'Mengisolasi satu variabel koreksi secara sistematis sesuai SOP teknis', is_correct: true, order_index: 1 },
      { id: 'ans-b1-2b', question_id: 'q-b1-2', answer_text: 'Mengubah dosis, suhu, dan rasio sekaligus secara acak', is_correct: false, order_index: 2 },
      { id: 'ans-b1-2c', question_id: 'q-b1-2', answer_text: 'Menyalahkan kualitas biji kopi tanpa memeriksa kebersihan alat', is_correct: false, order_index: 3 },
      { id: 'ans-b1-2d', question_id: 'q-b1-2', answer_text: 'Menyajikan minuman apa adanya kepada pelanggan tanpa koreksi', is_correct: false, order_index: 4 },
    ],
  },  {
    id: 'q-b1-3',
    quiz_id: 'quiz-b1',
    question_text: 'Bagaimana kontribusi penerapan SOP materi ini terhadap kepuasan pelanggan dan profitabilitas kedai kopi?',
    question_type: 'multiple_choice',
    order_index: 3,
    explanation: 'Konsistensi rasa, pelayanan ramah tanpa arogansi, dan minimalisasi waste bubuk/susu langsung melindungi margin keuntungan kedai.',
    answers: [
      { id: 'ans-b1-3a', question_id: 'q-b1-3', answer_text: 'Menjamin konsistensi rasa cangkir, menekan waste, dan membangun loyalitas pelanggan', is_correct: true, order_index: 1 },
      { id: 'ans-b1-3b', question_id: 'q-b1-3', answer_text: 'Hanya menambah beban kerja barista tanpa dampak finansial riil', is_correct: false, order_index: 2 },
      { id: 'ans-b1-3c', question_id: 'q-b1-3', answer_text: 'Membuat harga jual minuman menjadi tidak kompetitif', is_correct: false, order_index: 3 },
      { id: 'ans-b1-3d', question_id: 'q-b1-3', answer_text: 'Hanya berguna saat mengikuti kompetisi kejuaraan dunia', is_correct: false, order_index: 4 },
    ],
  },  {
    id: 'q-b2-1',
    quiz_id: 'quiz-b2',
    question_text: 'Apa parameter teknis kunci yang wajib dijaga oleh barista dalam topik Sains Steaming Susu & Tekstur Microfoam Silky?',
    question_type: 'multiple_choice',
    order_index: 1,
    explanation: 'Dalam standar barista profesional, konsistensi parameter angka riil dan pemahaman fisika fluida/sensorik adalah pondasi utama menjaga mutu cangkir.',
    answers: [
      { id: 'ans-b2-1a', question_id: 'q-b2-1', answer_text: 'Pengendalian parameter presisi berbasis data dan evaluasi sensorik teratur', is_correct: true, order_index: 1 },
      { id: 'ans-b2-1b', question_id: 'q-b2-1', answer_text: 'Mengira-ngira takaran secara visual tanpa bantuan timbangan digital', is_correct: false, order_index: 2 },
      { id: 'ans-b2-1c', question_id: 'q-b2-1', answer_text: 'Mengabaikan pembersihan mesin untuk menghemat waktu operasional', is_correct: false, order_index: 3 },
      { id: 'ans-b2-1d', question_id: 'q-b2-1', answer_text: 'Menggunakan suhu air semaksimal mungkin hingga mendidih bergolak', is_correct: false, order_index: 4 },
    ],
  },  {
    id: 'q-b2-2',
    quiz_id: 'quiz-b2',
    question_text: 'Tindakan korektif apa yang paling tepat jika terjadi ketidaksesuaian hasil cangkir pada modul Sains Steaming Susu & Tekstur Microfoam Silky?',
    question_type: 'multiple_choice',
    order_index: 2,
    explanation: 'Troubleshooting yang benar selalu mengisolasi satu variabel pada satu waktu (misalnya hanya mengubah ukuran gilingan) tanpa mengubah variabel lain.',
    answers: [
      { id: 'ans-b2-2a', question_id: 'q-b2-2', answer_text: 'Mengisolasi satu variabel koreksi secara sistematis sesuai SOP teknis', is_correct: true, order_index: 1 },
      { id: 'ans-b2-2b', question_id: 'q-b2-2', answer_text: 'Mengubah dosis, suhu, dan rasio sekaligus secara acak', is_correct: false, order_index: 2 },
      { id: 'ans-b2-2c', question_id: 'q-b2-2', answer_text: 'Menyalahkan kualitas biji kopi tanpa memeriksa kebersihan alat', is_correct: false, order_index: 3 },
      { id: 'ans-b2-2d', question_id: 'q-b2-2', answer_text: 'Menyajikan minuman apa adanya kepada pelanggan tanpa koreksi', is_correct: false, order_index: 4 },
    ],
  },  {
    id: 'q-b2-3',
    quiz_id: 'quiz-b2',
    question_text: 'Bagaimana kontribusi penerapan SOP materi ini terhadap kepuasan pelanggan dan profitabilitas kedai kopi?',
    question_type: 'multiple_choice',
    order_index: 3,
    explanation: 'Konsistensi rasa, pelayanan ramah tanpa arogansi, dan minimalisasi waste bubuk/susu langsung melindungi margin keuntungan kedai.',
    answers: [
      { id: 'ans-b2-3a', question_id: 'q-b2-3', answer_text: 'Menjamin konsistensi rasa cangkir, menekan waste, dan membangun loyalitas pelanggan', is_correct: true, order_index: 1 },
      { id: 'ans-b2-3b', question_id: 'q-b2-3', answer_text: 'Hanya menambah beban kerja barista tanpa dampak finansial riil', is_correct: false, order_index: 2 },
      { id: 'ans-b2-3c', question_id: 'q-b2-3', answer_text: 'Membuat harga jual minuman menjadi tidak kompetitif', is_correct: false, order_index: 3 },
      { id: 'ans-b2-3d', question_id: 'q-b2-3', answer_text: 'Hanya berguna saat mengikuti kompetisi kejuaraan dunia', is_correct: false, order_index: 4 },
    ],
  },  {
    id: 'q-b3-1',
    quiz_id: 'quiz-b3',
    question_text: 'Apa parameter teknis kunci yang wajib dijaga oleh barista dalam topik Seni Latte Art Lanjutan & Ergonomi Tuangan?',
    question_type: 'multiple_choice',
    order_index: 1,
    explanation: 'Dalam standar barista profesional, konsistensi parameter angka riil dan pemahaman fisika fluida/sensorik adalah pondasi utama menjaga mutu cangkir.',
    answers: [
      { id: 'ans-b3-1a', question_id: 'q-b3-1', answer_text: 'Pengendalian parameter presisi berbasis data dan evaluasi sensorik teratur', is_correct: true, order_index: 1 },
      { id: 'ans-b3-1b', question_id: 'q-b3-1', answer_text: 'Mengira-ngira takaran secara visual tanpa bantuan timbangan digital', is_correct: false, order_index: 2 },
      { id: 'ans-b3-1c', question_id: 'q-b3-1', answer_text: 'Mengabaikan pembersihan mesin untuk menghemat waktu operasional', is_correct: false, order_index: 3 },
      { id: 'ans-b3-1d', question_id: 'q-b3-1', answer_text: 'Menggunakan suhu air semaksimal mungkin hingga mendidih bergolak', is_correct: false, order_index: 4 },
    ],
  },  {
    id: 'q-b3-2',
    quiz_id: 'quiz-b3',
    question_text: 'Tindakan korektif apa yang paling tepat jika terjadi ketidaksesuaian hasil cangkir pada modul Seni Latte Art Lanjutan & Ergonomi Tuangan?',
    question_type: 'multiple_choice',
    order_index: 2,
    explanation: 'Troubleshooting yang benar selalu mengisolasi satu variabel pada satu waktu (misalnya hanya mengubah ukuran gilingan) tanpa mengubah variabel lain.',
    answers: [
      { id: 'ans-b3-2a', question_id: 'q-b3-2', answer_text: 'Mengisolasi satu variabel koreksi secara sistematis sesuai SOP teknis', is_correct: true, order_index: 1 },
      { id: 'ans-b3-2b', question_id: 'q-b3-2', answer_text: 'Mengubah dosis, suhu, dan rasio sekaligus secara acak', is_correct: false, order_index: 2 },
      { id: 'ans-b3-2c', question_id: 'q-b3-2', answer_text: 'Menyalahkan kualitas biji kopi tanpa memeriksa kebersihan alat', is_correct: false, order_index: 3 },
      { id: 'ans-b3-2d', question_id: 'q-b3-2', answer_text: 'Menyajikan minuman apa adanya kepada pelanggan tanpa koreksi', is_correct: false, order_index: 4 },
    ],
  },  {
    id: 'q-b3-3',
    quiz_id: 'quiz-b3',
    question_text: 'Bagaimana kontribusi penerapan SOP materi ini terhadap kepuasan pelanggan dan profitabilitas kedai kopi?',
    question_type: 'multiple_choice',
    order_index: 3,
    explanation: 'Konsistensi rasa, pelayanan ramah tanpa arogansi, dan minimalisasi waste bubuk/susu langsung melindungi margin keuntungan kedai.',
    answers: [
      { id: 'ans-b3-3a', question_id: 'q-b3-3', answer_text: 'Menjamin konsistensi rasa cangkir, menekan waste, dan membangun loyalitas pelanggan', is_correct: true, order_index: 1 },
      { id: 'ans-b3-3b', question_id: 'q-b3-3', answer_text: 'Hanya menambah beban kerja barista tanpa dampak finansial riil', is_correct: false, order_index: 2 },
      { id: 'ans-b3-3c', question_id: 'q-b3-3', answer_text: 'Membuat harga jual minuman menjadi tidak kompetitif', is_correct: false, order_index: 3 },
      { id: 'ans-b3-3d', question_id: 'q-b3-3', answer_text: 'Hanya berguna saat mengikuti kompetisi kejuaraan dunia', is_correct: false, order_index: 4 },
    ],
  },  {
    id: 'q-b4-1',
    quiz_id: 'quiz-b4',
    question_text: 'Apa parameter teknis kunci yang wajib dijaga oleh barista dalam topik Manual Brewing di Bar Komersial & Speed-Service?',
    question_type: 'multiple_choice',
    order_index: 1,
    explanation: 'Dalam standar barista profesional, konsistensi parameter angka riil dan pemahaman fisika fluida/sensorik adalah pondasi utama menjaga mutu cangkir.',
    answers: [
      { id: 'ans-b4-1a', question_id: 'q-b4-1', answer_text: 'Pengendalian parameter presisi berbasis data dan evaluasi sensorik teratur', is_correct: true, order_index: 1 },
      { id: 'ans-b4-1b', question_id: 'q-b4-1', answer_text: 'Mengira-ngira takaran secara visual tanpa bantuan timbangan digital', is_correct: false, order_index: 2 },
      { id: 'ans-b4-1c', question_id: 'q-b4-1', answer_text: 'Mengabaikan pembersihan mesin untuk menghemat waktu operasional', is_correct: false, order_index: 3 },
      { id: 'ans-b4-1d', question_id: 'q-b4-1', answer_text: 'Menggunakan suhu air semaksimal mungkin hingga mendidih bergolak', is_correct: false, order_index: 4 },
    ],
  },  {
    id: 'q-b4-2',
    quiz_id: 'quiz-b4',
    question_text: 'Tindakan korektif apa yang paling tepat jika terjadi ketidaksesuaian hasil cangkir pada modul Manual Brewing di Bar Komersial & Speed-Service?',
    question_type: 'multiple_choice',
    order_index: 2,
    explanation: 'Troubleshooting yang benar selalu mengisolasi satu variabel pada satu waktu (misalnya hanya mengubah ukuran gilingan) tanpa mengubah variabel lain.',
    answers: [
      { id: 'ans-b4-2a', question_id: 'q-b4-2', answer_text: 'Mengisolasi satu variabel koreksi secara sistematis sesuai SOP teknis', is_correct: true, order_index: 1 },
      { id: 'ans-b4-2b', question_id: 'q-b4-2', answer_text: 'Mengubah dosis, suhu, dan rasio sekaligus secara acak', is_correct: false, order_index: 2 },
      { id: 'ans-b4-2c', question_id: 'q-b4-2', answer_text: 'Menyalahkan kualitas biji kopi tanpa memeriksa kebersihan alat', is_correct: false, order_index: 3 },
      { id: 'ans-b4-2d', question_id: 'q-b4-2', answer_text: 'Menyajikan minuman apa adanya kepada pelanggan tanpa koreksi', is_correct: false, order_index: 4 },
    ],
  },  {
    id: 'q-b4-3',
    quiz_id: 'quiz-b4',
    question_text: 'Bagaimana kontribusi penerapan SOP materi ini terhadap kepuasan pelanggan dan profitabilitas kedai kopi?',
    question_type: 'multiple_choice',
    order_index: 3,
    explanation: 'Konsistensi rasa, pelayanan ramah tanpa arogansi, dan minimalisasi waste bubuk/susu langsung melindungi margin keuntungan kedai.',
    answers: [
      { id: 'ans-b4-3a', question_id: 'q-b4-3', answer_text: 'Menjamin konsistensi rasa cangkir, menekan waste, dan membangun loyalitas pelanggan', is_correct: true, order_index: 1 },
      { id: 'ans-b4-3b', question_id: 'q-b4-3', answer_text: 'Hanya menambah beban kerja barista tanpa dampak finansial riil', is_correct: false, order_index: 2 },
      { id: 'ans-b4-3c', question_id: 'q-b4-3', answer_text: 'Membuat harga jual minuman menjadi tidak kompetitif', is_correct: false, order_index: 3 },
      { id: 'ans-b4-3d', question_id: 'q-b4-3', answer_text: 'Hanya berguna saat mengikuti kompetisi kejuaraan dunia', is_correct: false, order_index: 4 },
    ],
  },  {
    id: 'q-b5-1',
    quiz_id: 'quiz-b5',
    question_text: 'Apa parameter teknis kunci yang wajib dijaga oleh barista dalam topik Manajemen & Pemeliharaan Mesin Espresso Komersial?',
    question_type: 'multiple_choice',
    order_index: 1,
    explanation: 'Dalam standar barista profesional, konsistensi parameter angka riil dan pemahaman fisika fluida/sensorik adalah pondasi utama menjaga mutu cangkir.',
    answers: [
      { id: 'ans-b5-1a', question_id: 'q-b5-1', answer_text: 'Pengendalian parameter presisi berbasis data dan evaluasi sensorik teratur', is_correct: true, order_index: 1 },
      { id: 'ans-b5-1b', question_id: 'q-b5-1', answer_text: 'Mengira-ngira takaran secara visual tanpa bantuan timbangan digital', is_correct: false, order_index: 2 },
      { id: 'ans-b5-1c', question_id: 'q-b5-1', answer_text: 'Mengabaikan pembersihan mesin untuk menghemat waktu operasional', is_correct: false, order_index: 3 },
      { id: 'ans-b5-1d', question_id: 'q-b5-1', answer_text: 'Menggunakan suhu air semaksimal mungkin hingga mendidih bergolak', is_correct: false, order_index: 4 },
    ],
  },  {
    id: 'q-b5-2',
    quiz_id: 'quiz-b5',
    question_text: 'Tindakan korektif apa yang paling tepat jika terjadi ketidaksesuaian hasil cangkir pada modul Manajemen & Pemeliharaan Mesin Espresso Komersial?',
    question_type: 'multiple_choice',
    order_index: 2,
    explanation: 'Troubleshooting yang benar selalu mengisolasi satu variabel pada satu waktu (misalnya hanya mengubah ukuran gilingan) tanpa mengubah variabel lain.',
    answers: [
      { id: 'ans-b5-2a', question_id: 'q-b5-2', answer_text: 'Mengisolasi satu variabel koreksi secara sistematis sesuai SOP teknis', is_correct: true, order_index: 1 },
      { id: 'ans-b5-2b', question_id: 'q-b5-2', answer_text: 'Mengubah dosis, suhu, dan rasio sekaligus secara acak', is_correct: false, order_index: 2 },
      { id: 'ans-b5-2c', question_id: 'q-b5-2', answer_text: 'Menyalahkan kualitas biji kopi tanpa memeriksa kebersihan alat', is_correct: false, order_index: 3 },
      { id: 'ans-b5-2d', question_id: 'q-b5-2', answer_text: 'Menyajikan minuman apa adanya kepada pelanggan tanpa koreksi', is_correct: false, order_index: 4 },
    ],
  },  {
    id: 'q-b5-3',
    quiz_id: 'quiz-b5',
    question_text: 'Bagaimana kontribusi penerapan SOP materi ini terhadap kepuasan pelanggan dan profitabilitas kedai kopi?',
    question_type: 'multiple_choice',
    order_index: 3,
    explanation: 'Konsistensi rasa, pelayanan ramah tanpa arogansi, dan minimalisasi waste bubuk/susu langsung melindungi margin keuntungan kedai.',
    answers: [
      { id: 'ans-b5-3a', question_id: 'q-b5-3', answer_text: 'Menjamin konsistensi rasa cangkir, menekan waste, dan membangun loyalitas pelanggan', is_correct: true, order_index: 1 },
      { id: 'ans-b5-3b', question_id: 'q-b5-3', answer_text: 'Hanya menambah beban kerja barista tanpa dampak finansial riil', is_correct: false, order_index: 2 },
      { id: 'ans-b5-3c', question_id: 'q-b5-3', answer_text: 'Membuat harga jual minuman menjadi tidak kompetitif', is_correct: false, order_index: 3 },
      { id: 'ans-b5-3d', question_id: 'q-b5-3', answer_text: 'Hanya berguna saat mengikuti kompetisi kejuaraan dunia', is_correct: false, order_index: 4 },
    ],
  },  {
    id: 'q-b6-1',
    quiz_id: 'quiz-b6',
    question_text: 'Apa parameter teknis kunci yang wajib dijaga oleh barista dalam topik Signature Beverage & Pembuatan Sirup Craft Spesialti?',
    question_type: 'multiple_choice',
    order_index: 1,
    explanation: 'Dalam standar barista profesional, konsistensi parameter angka riil dan pemahaman fisika fluida/sensorik adalah pondasi utama menjaga mutu cangkir.',
    answers: [
      { id: 'ans-b6-1a', question_id: 'q-b6-1', answer_text: 'Pengendalian parameter presisi berbasis data dan evaluasi sensorik teratur', is_correct: true, order_index: 1 },
      { id: 'ans-b6-1b', question_id: 'q-b6-1', answer_text: 'Mengira-ngira takaran secara visual tanpa bantuan timbangan digital', is_correct: false, order_index: 2 },
      { id: 'ans-b6-1c', question_id: 'q-b6-1', answer_text: 'Mengabaikan pembersihan mesin untuk menghemat waktu operasional', is_correct: false, order_index: 3 },
      { id: 'ans-b6-1d', question_id: 'q-b6-1', answer_text: 'Menggunakan suhu air semaksimal mungkin hingga mendidih bergolak', is_correct: false, order_index: 4 },
    ],
  },  {
    id: 'q-b6-2',
    quiz_id: 'quiz-b6',
    question_text: 'Tindakan korektif apa yang paling tepat jika terjadi ketidaksesuaian hasil cangkir pada modul Signature Beverage & Pembuatan Sirup Craft Spesialti?',
    question_type: 'multiple_choice',
    order_index: 2,
    explanation: 'Troubleshooting yang benar selalu mengisolasi satu variabel pada satu waktu (misalnya hanya mengubah ukuran gilingan) tanpa mengubah variabel lain.',
    answers: [
      { id: 'ans-b6-2a', question_id: 'q-b6-2', answer_text: 'Mengisolasi satu variabel koreksi secara sistematis sesuai SOP teknis', is_correct: true, order_index: 1 },
      { id: 'ans-b6-2b', question_id: 'q-b6-2', answer_text: 'Mengubah dosis, suhu, dan rasio sekaligus secara acak', is_correct: false, order_index: 2 },
      { id: 'ans-b6-2c', question_id: 'q-b6-2', answer_text: 'Menyalahkan kualitas biji kopi tanpa memeriksa kebersihan alat', is_correct: false, order_index: 3 },
      { id: 'ans-b6-2d', question_id: 'q-b6-2', answer_text: 'Menyajikan minuman apa adanya kepada pelanggan tanpa koreksi', is_correct: false, order_index: 4 },
    ],
  },  {
    id: 'q-b6-3',
    quiz_id: 'quiz-b6',
    question_text: 'Bagaimana kontribusi penerapan SOP materi ini terhadap kepuasan pelanggan dan profitabilitas kedai kopi?',
    question_type: 'multiple_choice',
    order_index: 3,
    explanation: 'Konsistensi rasa, pelayanan ramah tanpa arogansi, dan minimalisasi waste bubuk/susu langsung melindungi margin keuntungan kedai.',
    answers: [
      { id: 'ans-b6-3a', question_id: 'q-b6-3', answer_text: 'Menjamin konsistensi rasa cangkir, menekan waste, dan membangun loyalitas pelanggan', is_correct: true, order_index: 1 },
      { id: 'ans-b6-3b', question_id: 'q-b6-3', answer_text: 'Hanya menambah beban kerja barista tanpa dampak finansial riil', is_correct: false, order_index: 2 },
      { id: 'ans-b6-3c', question_id: 'q-b6-3', answer_text: 'Membuat harga jual minuman menjadi tidak kompetitif', is_correct: false, order_index: 3 },
      { id: 'ans-b6-3d', question_id: 'q-b6-3', answer_text: 'Hanya berguna saat mengikuti kompetisi kejuaraan dunia', is_correct: false, order_index: 4 },
    ],
  },  {
    id: 'q-b7-1',
    quiz_id: 'quiz-b7',
    question_text: 'Apa parameter teknis kunci yang wajib dijaga oleh barista dalam topik Kalibrasi Sensorik Barista Harian & Dial-In Tasting?',
    question_type: 'multiple_choice',
    order_index: 1,
    explanation: 'Dalam standar barista profesional, konsistensi parameter angka riil dan pemahaman fisika fluida/sensorik adalah pondasi utama menjaga mutu cangkir.',
    answers: [
      { id: 'ans-b7-1a', question_id: 'q-b7-1', answer_text: 'Pengendalian parameter presisi berbasis data dan evaluasi sensorik teratur', is_correct: true, order_index: 1 },
      { id: 'ans-b7-1b', question_id: 'q-b7-1', answer_text: 'Mengira-ngira takaran secara visual tanpa bantuan timbangan digital', is_correct: false, order_index: 2 },
      { id: 'ans-b7-1c', question_id: 'q-b7-1', answer_text: 'Mengabaikan pembersihan mesin untuk menghemat waktu operasional', is_correct: false, order_index: 3 },
      { id: 'ans-b7-1d', question_id: 'q-b7-1', answer_text: 'Menggunakan suhu air semaksimal mungkin hingga mendidih bergolak', is_correct: false, order_index: 4 },
    ],
  },  {
    id: 'q-b7-2',
    quiz_id: 'quiz-b7',
    question_text: 'Tindakan korektif apa yang paling tepat jika terjadi ketidaksesuaian hasil cangkir pada modul Kalibrasi Sensorik Barista Harian & Dial-In Tasting?',
    question_type: 'multiple_choice',
    order_index: 2,
    explanation: 'Troubleshooting yang benar selalu mengisolasi satu variabel pada satu waktu (misalnya hanya mengubah ukuran gilingan) tanpa mengubah variabel lain.',
    answers: [
      { id: 'ans-b7-2a', question_id: 'q-b7-2', answer_text: 'Mengisolasi satu variabel koreksi secara sistematis sesuai SOP teknis', is_correct: true, order_index: 1 },
      { id: 'ans-b7-2b', question_id: 'q-b7-2', answer_text: 'Mengubah dosis, suhu, dan rasio sekaligus secara acak', is_correct: false, order_index: 2 },
      { id: 'ans-b7-2c', question_id: 'q-b7-2', answer_text: 'Menyalahkan kualitas biji kopi tanpa memeriksa kebersihan alat', is_correct: false, order_index: 3 },
      { id: 'ans-b7-2d', question_id: 'q-b7-2', answer_text: 'Menyajikan minuman apa adanya kepada pelanggan tanpa koreksi', is_correct: false, order_index: 4 },
    ],
  },  {
    id: 'q-b7-3',
    quiz_id: 'quiz-b7',
    question_text: 'Bagaimana kontribusi penerapan SOP materi ini terhadap kepuasan pelanggan dan profitabilitas kedai kopi?',
    question_type: 'multiple_choice',
    order_index: 3,
    explanation: 'Konsistensi rasa, pelayanan ramah tanpa arogansi, dan minimalisasi waste bubuk/susu langsung melindungi margin keuntungan kedai.',
    answers: [
      { id: 'ans-b7-3a', question_id: 'q-b7-3', answer_text: 'Menjamin konsistensi rasa cangkir, menekan waste, dan membangun loyalitas pelanggan', is_correct: true, order_index: 1 },
      { id: 'ans-b7-3b', question_id: 'q-b7-3', answer_text: 'Hanya menambah beban kerja barista tanpa dampak finansial riil', is_correct: false, order_index: 2 },
      { id: 'ans-b7-3c', question_id: 'q-b7-3', answer_text: 'Membuat harga jual minuman menjadi tidak kompetitif', is_correct: false, order_index: 3 },
      { id: 'ans-b7-3d', question_id: 'q-b7-3', answer_text: 'Hanya berguna saat mengikuti kompetisi kejuaraan dunia', is_correct: false, order_index: 4 },
    ],
  },  {
    id: 'q-b8-1',
    quiz_id: 'quiz-b8',
    question_text: 'Apa parameter teknis kunci yang wajib dijaga oleh barista dalam topik Hospitality, Pelayanan Konsumen & Komunikasi Rasa?',
    question_type: 'multiple_choice',
    order_index: 1,
    explanation: 'Dalam standar barista profesional, konsistensi parameter angka riil dan pemahaman fisika fluida/sensorik adalah pondasi utama menjaga mutu cangkir.',
    answers: [
      { id: 'ans-b8-1a', question_id: 'q-b8-1', answer_text: 'Pengendalian parameter presisi berbasis data dan evaluasi sensorik teratur', is_correct: true, order_index: 1 },
      { id: 'ans-b8-1b', question_id: 'q-b8-1', answer_text: 'Mengira-ngira takaran secara visual tanpa bantuan timbangan digital', is_correct: false, order_index: 2 },
      { id: 'ans-b8-1c', question_id: 'q-b8-1', answer_text: 'Mengabaikan pembersihan mesin untuk menghemat waktu operasional', is_correct: false, order_index: 3 },
      { id: 'ans-b8-1d', question_id: 'q-b8-1', answer_text: 'Menggunakan suhu air semaksimal mungkin hingga mendidih bergolak', is_correct: false, order_index: 4 },
    ],
  },  {
    id: 'q-b8-2',
    quiz_id: 'quiz-b8',
    question_text: 'Tindakan korektif apa yang paling tepat jika terjadi ketidaksesuaian hasil cangkir pada modul Hospitality, Pelayanan Konsumen & Komunikasi Rasa?',
    question_type: 'multiple_choice',
    order_index: 2,
    explanation: 'Troubleshooting yang benar selalu mengisolasi satu variabel pada satu waktu (misalnya hanya mengubah ukuran gilingan) tanpa mengubah variabel lain.',
    answers: [
      { id: 'ans-b8-2a', question_id: 'q-b8-2', answer_text: 'Mengisolasi satu variabel koreksi secara sistematis sesuai SOP teknis', is_correct: true, order_index: 1 },
      { id: 'ans-b8-2b', question_id: 'q-b8-2', answer_text: 'Mengubah dosis, suhu, dan rasio sekaligus secara acak', is_correct: false, order_index: 2 },
      { id: 'ans-b8-2c', question_id: 'q-b8-2', answer_text: 'Menyalahkan kualitas biji kopi tanpa memeriksa kebersihan alat', is_correct: false, order_index: 3 },
      { id: 'ans-b8-2d', question_id: 'q-b8-2', answer_text: 'Menyajikan minuman apa adanya kepada pelanggan tanpa koreksi', is_correct: false, order_index: 4 },
    ],
  },  {
    id: 'q-b8-3',
    quiz_id: 'quiz-b8',
    question_text: 'Bagaimana kontribusi penerapan SOP materi ini terhadap kepuasan pelanggan dan profitabilitas kedai kopi?',
    question_type: 'multiple_choice',
    order_index: 3,
    explanation: 'Konsistensi rasa, pelayanan ramah tanpa arogansi, dan minimalisasi waste bubuk/susu langsung melindungi margin keuntungan kedai.',
    answers: [
      { id: 'ans-b8-3a', question_id: 'q-b8-3', answer_text: 'Menjamin konsistensi rasa cangkir, menekan waste, dan membangun loyalitas pelanggan', is_correct: true, order_index: 1 },
      { id: 'ans-b8-3b', question_id: 'q-b8-3', answer_text: 'Hanya menambah beban kerja barista tanpa dampak finansial riil', is_correct: false, order_index: 2 },
      { id: 'ans-b8-3c', question_id: 'q-b8-3', answer_text: 'Membuat harga jual minuman menjadi tidak kompetitif', is_correct: false, order_index: 3 },
      { id: 'ans-b8-3d', question_id: 'q-b8-3', answer_text: 'Hanya berguna saat mengikuti kompetisi kejuaraan dunia', is_correct: false, order_index: 4 },
    ],
  },  {
    id: 'q-b9-1',
    quiz_id: 'quiz-b9',
    question_text: 'Apa parameter teknis kunci yang wajib dijaga oleh barista dalam topik Manajemen Inventaris Bar, FIFO & Pengendalian Waste?',
    question_type: 'multiple_choice',
    order_index: 1,
    explanation: 'Dalam standar barista profesional, konsistensi parameter angka riil dan pemahaman fisika fluida/sensorik adalah pondasi utama menjaga mutu cangkir.',
    answers: [
      { id: 'ans-b9-1a', question_id: 'q-b9-1', answer_text: 'Pengendalian parameter presisi berbasis data dan evaluasi sensorik teratur', is_correct: true, order_index: 1 },
      { id: 'ans-b9-1b', question_id: 'q-b9-1', answer_text: 'Mengira-ngira takaran secara visual tanpa bantuan timbangan digital', is_correct: false, order_index: 2 },
      { id: 'ans-b9-1c', question_id: 'q-b9-1', answer_text: 'Mengabaikan pembersihan mesin untuk menghemat waktu operasional', is_correct: false, order_index: 3 },
      { id: 'ans-b9-1d', question_id: 'q-b9-1', answer_text: 'Menggunakan suhu air semaksimal mungkin hingga mendidih bergolak', is_correct: false, order_index: 4 },
    ],
  },  {
    id: 'q-b9-2',
    quiz_id: 'quiz-b9',
    question_text: 'Tindakan korektif apa yang paling tepat jika terjadi ketidaksesuaian hasil cangkir pada modul Manajemen Inventaris Bar, FIFO & Pengendalian Waste?',
    question_type: 'multiple_choice',
    order_index: 2,
    explanation: 'Troubleshooting yang benar selalu mengisolasi satu variabel pada satu waktu (misalnya hanya mengubah ukuran gilingan) tanpa mengubah variabel lain.',
    answers: [
      { id: 'ans-b9-2a', question_id: 'q-b9-2', answer_text: 'Mengisolasi satu variabel koreksi secara sistematis sesuai SOP teknis', is_correct: true, order_index: 1 },
      { id: 'ans-b9-2b', question_id: 'q-b9-2', answer_text: 'Mengubah dosis, suhu, dan rasio sekaligus secara acak', is_correct: false, order_index: 2 },
      { id: 'ans-b9-2c', question_id: 'q-b9-2', answer_text: 'Menyalahkan kualitas biji kopi tanpa memeriksa kebersihan alat', is_correct: false, order_index: 3 },
      { id: 'ans-b9-2d', question_id: 'q-b9-2', answer_text: 'Menyajikan minuman apa adanya kepada pelanggan tanpa koreksi', is_correct: false, order_index: 4 },
    ],
  },  {
    id: 'q-b9-3',
    quiz_id: 'quiz-b9',
    question_text: 'Bagaimana kontribusi penerapan SOP materi ini terhadap kepuasan pelanggan dan profitabilitas kedai kopi?',
    question_type: 'multiple_choice',
    order_index: 3,
    explanation: 'Konsistensi rasa, pelayanan ramah tanpa arogansi, dan minimalisasi waste bubuk/susu langsung melindungi margin keuntungan kedai.',
    answers: [
      { id: 'ans-b9-3a', question_id: 'q-b9-3', answer_text: 'Menjamin konsistensi rasa cangkir, menekan waste, dan membangun loyalitas pelanggan', is_correct: true, order_index: 1 },
      { id: 'ans-b9-3b', question_id: 'q-b9-3', answer_text: 'Hanya menambah beban kerja barista tanpa dampak finansial riil', is_correct: false, order_index: 2 },
      { id: 'ans-b9-3c', question_id: 'q-b9-3', answer_text: 'Membuat harga jual minuman menjadi tidak kompetitif', is_correct: false, order_index: 3 },
      { id: 'ans-b9-3d', question_id: 'q-b9-3', answer_text: 'Hanya berguna saat mengikuti kompetisi kejuaraan dunia', is_correct: false, order_index: 4 },
    ],
  },  {
    id: 'q-b10-1',
    quiz_id: 'quiz-b10',
    question_text: 'Apa parameter teknis kunci yang wajib dijaga oleh barista dalam topik Ergonomi Kerja Barista, Keselamatan & Alur Kerja Bar?',
    question_type: 'multiple_choice',
    order_index: 1,
    explanation: 'Dalam standar barista profesional, konsistensi parameter angka riil dan pemahaman fisika fluida/sensorik adalah pondasi utama menjaga mutu cangkir.',
    answers: [
      { id: 'ans-b10-1a', question_id: 'q-b10-1', answer_text: 'Pengendalian parameter presisi berbasis data dan evaluasi sensorik teratur', is_correct: true, order_index: 1 },
      { id: 'ans-b10-1b', question_id: 'q-b10-1', answer_text: 'Mengira-ngira takaran secara visual tanpa bantuan timbangan digital', is_correct: false, order_index: 2 },
      { id: 'ans-b10-1c', question_id: 'q-b10-1', answer_text: 'Mengabaikan pembersihan mesin untuk menghemat waktu operasional', is_correct: false, order_index: 3 },
      { id: 'ans-b10-1d', question_id: 'q-b10-1', answer_text: 'Menggunakan suhu air semaksimal mungkin hingga mendidih bergolak', is_correct: false, order_index: 4 },
    ],
  },  {
    id: 'q-b10-2',
    quiz_id: 'quiz-b10',
    question_text: 'Tindakan korektif apa yang paling tepat jika terjadi ketidaksesuaian hasil cangkir pada modul Ergonomi Kerja Barista, Keselamatan & Alur Kerja Bar?',
    question_type: 'multiple_choice',
    order_index: 2,
    explanation: 'Troubleshooting yang benar selalu mengisolasi satu variabel pada satu waktu (misalnya hanya mengubah ukuran gilingan) tanpa mengubah variabel lain.',
    answers: [
      { id: 'ans-b10-2a', question_id: 'q-b10-2', answer_text: 'Mengisolasi satu variabel koreksi secara sistematis sesuai SOP teknis', is_correct: true, order_index: 1 },
      { id: 'ans-b10-2b', question_id: 'q-b10-2', answer_text: 'Mengubah dosis, suhu, dan rasio sekaligus secara acak', is_correct: false, order_index: 2 },
      { id: 'ans-b10-2c', question_id: 'q-b10-2', answer_text: 'Menyalahkan kualitas biji kopi tanpa memeriksa kebersihan alat', is_correct: false, order_index: 3 },
      { id: 'ans-b10-2d', question_id: 'q-b10-2', answer_text: 'Menyajikan minuman apa adanya kepada pelanggan tanpa koreksi', is_correct: false, order_index: 4 },
    ],
  },  {
    id: 'q-b10-3',
    quiz_id: 'quiz-b10',
    question_text: 'Bagaimana kontribusi penerapan SOP materi ini terhadap kepuasan pelanggan dan profitabilitas kedai kopi?',
    question_type: 'multiple_choice',
    order_index: 3,
    explanation: 'Konsistensi rasa, pelayanan ramah tanpa arogansi, dan minimalisasi waste bubuk/susu langsung melindungi margin keuntungan kedai.',
    answers: [
      { id: 'ans-b10-3a', question_id: 'q-b10-3', answer_text: 'Menjamin konsistensi rasa cangkir, menekan waste, dan membangun loyalitas pelanggan', is_correct: true, order_index: 1 },
      { id: 'ans-b10-3b', question_id: 'q-b10-3', answer_text: 'Hanya menambah beban kerja barista tanpa dampak finansial riil', is_correct: false, order_index: 2 },
      { id: 'ans-b10-3c', question_id: 'q-b10-3', answer_text: 'Membuat harga jual minuman menjadi tidak kompetitif', is_correct: false, order_index: 3 },
      { id: 'ans-b10-3d', question_id: 'q-b10-3', answer_text: 'Hanya berguna saat mengikuti kompetisi kejuaraan dunia', is_correct: false, order_index: 4 },
    ],
  },
];
