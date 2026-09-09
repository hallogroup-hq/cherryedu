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
> *Contoh Standar: 36.0 gram espresso ÷ 18.0 gram bubuk kopi = Rasio 1:2.0*

---
### Standar Profesionalisme Barista Specialty
Profesi barista dalam ekosistem specialty coffee melampaui peran sekadar operator mesin penyeduh. Barista adalah duta (*ambassador*) yang memegang kendali kualitas di mata rantai terakhir: mengubah seluruh kerja keras 9 bulan petani, prosesor, dan roaster menjadi secangkir kopi terbaik di hadapan pelanggan.

#### 4 Pilar Disiplin Kerja Barista:
1. **Sensory Calibration (Kalibrasi Harian)**: Barista wajib mengecap dan mengkalibrasi setiap batch seduhan espresso di pagi hari sebelum pintu kedai dibuka untuk umum.
2. **Hygiene & Food Safety (Sanitasi Bar)**: Portafilter harus selalu bersih dari ampas minyak lama (*rancid oil*), steam wand wajib di-purge dan di-wipe segera setelah dipakai, dan kain lap kain basah harus dipisahkan berdasarkan warna peruntukannya (lap susu tidak boleh dipakai untuk baki mesin).
3. **Ergonomi & Alur Kecepatan (Speed of Service)**: Menjaga postur tamping dengan sudut siku tegak lurus 90° guna mencegah cedera muskuloskeletal berulang (*Repetitive Strain Injury* / RSI) dan memastikan tata letak bar mengikuti segitiga emas (*grinder - machine - knockbox*).
4. **Hospitality & Storytelling Edukatif**: Kemampuan menerjemahkan variabel teknis yang kompleks (misal: proses Anaerobik Slow Dry dari Desa Belok Sidan Bali) menjadi cerita yang menyenangkan dan mudah dipahami oleh tamu awam tanpa kesan menggurui.

| Aspek | Standar Minimum Barista | Pelanggaran Fatal |
|---|---|---|
| **Pembersihan Steam Wand** | Purge uap 2 detik + wipe lap khusus basah segera | Membiarkan kerak susu mengering pada ujung wand |
| **Portafilter Cleanliness** | Dikeringkan dengan handuk mikro sebelum dosing | Mendosis bubuk kopi ke dalam basket yang basah |
| **Penyimpanan Biji** | Hopper diisi secukupnya sesuai kebutuhan per 2 jam | Membiarkan biji menginap di hopper semalaman |
| **Ketepatan Dosing** | Deviasi maksimal ±0.2 gram menggunakan timbangan | Dosing kira-kira berdasarkan volume mata |`,
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
| Manis bulat (*sweet caramel*), asam buah segar, lembut | 27 detik | Ekstraksi Optimum (Sweet Spot) | **Kunci pengaturan grinder & mulai jam operasional!** |

---
### Anatomi Mekanis Mesin Espresso Komersial
Memahami komponen internal mesin espresso komersial adalah kunci mendiagnosis fluktuasi rasa saat jam operasional sibuk (*rush hour*).

#### 1. Arsitektur Sistem Pemanas (Boiler)
* **Heat Exchanger (HX)**: Satu boiler besar menghasilkan uap panas, dengan pipa tembaga kecil melintas di dalamnya untuk air seduh. Kekurangan: rentan overheat jika mesin menganggur lama (membutuhkan cooling flush 3-5 detik).
* **Dual Boiler (Multi-Boiler)**: Boiler uap (steam) dan boiler seduh (brew) terpisah total. Boiler seduh dikontrol secara mandiri oleh sensor PID digital dengan presisi suhu ±0.2°C, memastikan stabilitas ekstraksi 100 cangkir berturut-turut.

#### 2. Dinamika Tekanan Pompa (Rotary vs Vibratory)
Mesin komersial menggunakan **Pompa Putar (Rotary Vane Pump)** yang digerakkan motor induksi langsung. Berbeda dengan pompa vibrasi rumahan, pompa rotary menyuplai tekanan konstan 9 bar seketika tanpa jeda kenaikan tekanan lambat, dan memiliki ketahanan kerja nonstop ribuan jam.

#### 3. Group Head & Sistem Pre-Infusi
Group head (seperti tipe legendaris E61 atau saturated group La Marzocco) menjaga kesetimbangan termal melalui sirkulasi air panas konstan (*thermosyphon*). Fitur pre-infusi membasahi bubuk kopi pada tekanan rendah (2–3 bar) selama 3–6 detik sebelum pompa penuh bekerja, mendekompresi pori-pori bubuk kopi agar tahan terhadap lonjakan tekanan 9 bar dan mencegah *channeling*.`,
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

[DIAGRAM:espresso-phases]

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
4. Lakukan tamping secara tegak lurus (90 derajat) dengan tekanan konsisten 10–15 kg hingga kompresi bubuk mencapai titik henti alami.

---
### Sains Ekstraksi Espresso 3 Fase
Ekstraksi espresso adalah proses ekstraksi bertekanan tinggi (9 bar) yang melarutkan senyawa kimia kopi berdasarkan perbedaan polaritas dan massa molekulnya secara bertahap sepanjang 25–30 detik.

#### Tahapan Pelarutan Kimiawi Espresso:
1. **Fase 1: Asam & Garam Terlarut Cepat (Detik 0–10)**
   - Senyawa pertama yang keluar adalah asam organik polar berbobot molekul rendah (asam sitrat, asam malat, asam fosfat) serta kafein bebas.
   - Karakter visual: Aliran cairan sangat kental, berwarna cokelat gelap kemerahan pekat (*tiger stripes*).
   - Rasa: Sangat masam, tajam, sedikit asin, dengan body minyak kental.
2. **Fase 2: Gula & Karamelisasi (Detik 11–20)**
   - Saat air terus menembus matriks sel kopi, gula pereduksi hasil karamelisasi, sukrosa, dan asam klorogenat mulai terlarut.
   - Karakter visual: Warna cairan berubah menjadi cokelat keemasan madu (*golden crema*).
   - Rasa: Manis karamel, keasaman mulai seimbang dan melembut, mouthfeel mulai terbentuk bulat (*round body*).
3. **Fase 3: Lipid, Komponen Berat & Kepahitan (Detik 21–30)**
   - Senyawa polifenol berbobot molekul besar, serat selulosa mikro, pirazin, dan senyawa pahit mulai tertarik keluar.
   - Karakter visual: Aliran cairan menipis (*blonding*), warna berubah menjadi kuning pucat berair.
   - Rasa: Kepahitan tajam, sedikit astringent (sepat mengeringkan lidah), encer jika diteruskan berlebihan.

> ☕ **Prinsip Barista**: Kunci secangkir espresso seimbang adalah memotong aliran (*yield cut*) tepat saat perbandingan asam, gula, dan body berada di titik manis optimal sebelum kepahitan fase blonde mendominasi.`,
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

---

### 1. Peran Protein Whey dan Kasein dalam Pembentukan Busa

Dua protein utama di dalam susu memiliki peran berbeda saat terkena semburan uap air panas:
* **Protein Kasein (*Casein Micelles*)**: Bertanggung jawab menjaga stabilitas emulsi lemak dalam air.
* **Protein Whey (khususnya *Beta-lactoglobulin*)**: Memiliki struktur lipatan globular. Ketika terkena panas di atas 40°C, molekul ini mulai terurai (*denaturasi*), membuka rantai hidrofilik (suka air) dan hidrofobik (takut air). Ujung hidrofobik mengunci gelembung udara, menciptakan jaring film lentur yang memerangkap gelembung mikro (*microfoam*).

---

### 2. Rentang Suhu Kritis Steaming

* **4°C (Suhu Cold Storage)**: Suhu awal wajib pitcher susu saat dikeluarkan dari chiller. Semakin dingin susu awal, semakin panjang jendela waktu barista untuk meregangkan (*stretching*) gelembung udara.
* **55°C – 65°C (Sweet Spot Susu Spesialti)**: Pada suhu ini, laktosa terasa paling manis di lidah manusia tanpa merusak struktur protein. Permukaan susu tampak berkilau seperti cat basah (*wet paint finish*).
* **> 70°C (Susu Rusak & Gosong)**: Protein terdenaturasi permanen dan pecah, melepaskan bau sulfur seperti telur rebus basi, busa menjadi kering kaku, dan rasa manis alami laktosa hancur.

---
### Parameter Kalibrasi Mikrometrik Grinder Espresso
Grinder adalah instrumen terpenting di bar espresso—bahkan lebih krusial dibanding mesin itu sendiri. Pemahaman mekanika *burr* menentukan konsistensi ekstraksi harian.

#### Perbandingan Geometri Mata Pisau (Burr):
* **Flat Burr (Mata Pisau Datar)**:
  - Distribusi partikel gilingan bersifat *unimodal* (sangat seragam dengan ukuran partikel yang rapat).
  - Karakter cup: Kejernihan rasa (*flavor clarity*) tinggi, pemisahan tasting notes buah sangat kontras, body sedang.
  - Cocok untuk: Kopi single origin sangrai ringan (*light-to-medium roast*).
* **Conical Burr (Mata Pisau Kerucut)**:
  - Distribusi partikel bersifat *bimodal* (menghasilkan partikel utama dan partikel debu halus/*fines* terkontrol).
  - Karakter cup: Body tebal, mouthfeel kental, rasa cokelat dan kacang manis yang dominan.
  - Cocok untuk: Kopi blend susu komersial.

#### Pengaruh Kelembaban Udara (Humidity) terhadap Dial-In:
Biji kopi bersifat higroskopis (menyerap uap air dari udara). Saat hujan atau kelembaban ruangan naik:
- Biji kopi di dalam hopper menyerap air dan mengembang.
- Serat biji menjadi lebih elastis sehingga saat digiling, bubuk kopi memadat dan memperlambat laju aliran espresso (*flow rate choke*).
- **Koreksi Barista**: Putar grinder 1-2 notch ke arah lebih kasar (*coarser*). Sebaliknya, pada siang hari saat AC menyala kering, putar grinder sedikit lebih halus (*finer*).`,
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

[DIAGRAM:milk-steaming-vortex]

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
2. Lakukan *purging* (buka katup uap selama 1 detik) untuk menyemburkan sisa susu yang tersedot ke dalam pipa akibat efek vakum pendinginan.

---
### Teknik Dosing Presisi & Distribusi WDT
Kegagalan ekstraksi espresso 90% bersumber pada persiapan bubuk kopi di dalam keranjang portafilter (*puck preparation*).

#### Prosedur Distribusi WDT Standar:
1. **Dosing dengan Timbangan Presisi 0.1g**: Pastikan bobot bubuk tidak menyimpang lebih dari ±0.1 gram dari target resep (misal 18.0 gram pada basket VST 18g).
2. **Pemasangan Dosing Funnel**: Pasang corong pelindung pada portafilter untuk mencegah bubuk tumpah dan menjaga kebersihan meja bar.
3. **Pengadukan Jarum WDT (Weiss Distribution Technique)**:
   - Gunakan jarum berdiameter tipis (0.25 mm – 0.35 mm). Jarum tebal (> 0.5 mm) justru akan menciptakan celah retakan baru.
   - Lakukan gerakan memutar melingkar mulai dari dasar basket menuju permukaan secara perlahan selama 5–8 detik.
   - Pastikan gumpalan mikro akibat listrik statis (*clumps*) terurai sempurna dan permukaan bubuk menjadi homogen seperti bedak halus.
4. **Ketukan Vertikal Ringan (Tapping)**: Ketuk pegangan portafilter secara vertikal ke atas alas karet sebanyak satu kali untuk merapatkan rongga udara internal sebelum tamping.

#### Kesalahan Fatal Puck Preparation:
* Mengikis bubuk menggunakan jari tangan (kontaminasi minyak kulit dan kepadatan tidak merata).
* Mengetuk dinding samping portafilter dengan tamping tool setelah di-tamp (merusak segel samping puck dan memicu *side-channeling*).`,
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
  - *Tips Barista*: Dinginkan sedikit espresso sebelum menuang susu kedelai atau aduk rata terlebih dahulu.

---
### Fisika Tamping & Pencegahan Channeling
Tamping bukan tentang seberapa kuat tenaga otot yang Anda kerahkan, melainkan tentang **kerataan horizontal sempurna (levelness)** dan eliminasi seluruh rongga udara di antara partikel kopi.

#### Sains Tamping Modern:
Partikel bubuk kopi memiliki batas kompresi mekanis (*maximum puck compression*). Ketika Anda menekan dengan beban sekitar 10–15 kg, seluruh rongga udara antar partikel telah terpadatkan secara maksimal. Menekan dengan tenaga 30 kg tidak akan membuat puck menjadi lebih padat, melainkan hanya memicu ketegangan otot pergelangan tangan barista.

#### Standar SOP Tamping:
1. Posisikan siku lengan tegak lurus 90° dengan meja kerja.
2. Pegang tamper seperti memegang gagang pintu bulat dengan jari telunjuk dan ibu jari merasakan bibir rim basket untuk memastikan posisi datar.
3. Tekan lurus ke bawah secara mantap hingga terasa dasar hambatan solid.
4. Angkat tamper tegak lurus tanpa memutar (*polishing* berlebihan) agar tidak menciptakan retakan vakum di tepi puck.

> ⚠️ **Diagnosis Rasa Channeling**: Jika espresso terasa sangat tajam asam di bagian depan lidah namun meninggalkan rasa pahit gosong menyengat di pangkal tenggorokan secara bersamaan, puck Anda dipastikan mengalami channeling parah!`,
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

---

### 1. Dua Ketinggian Kritis Tuangan

1. **Tuangan Tinggi (5 – 7 cm di atas cangkir) = Kanvas / Pencampuran**:
   Aliran susu yang dijatuhkan dari ketinggian memiliki momentum gravitasi tinggi. Susu akan menembus lapisan crema dan menyelam ke dasar cangkir tanpa meninggalkan jejak putih di permukaan.
2. **Tuangan Rendah (< 1 cm, moncong pitcher menyentuh bibir cangkir) = Menggambar Pola**:
   Momentum jatuhnya hilang. Microfoam yang mengapung akan meluncur lembut di atas crema dan merekah membentuk kontras putih terang di atas kanvas cokelat keemasan.

---

### 2. Aturan Kemiringan Cangkir (*Cup Tilt Control*)

Miringkan cangkir keramik sekitar 45 derajat di awal untuk memperbesar kedalaman cairan. Saat cangkir mulai terisi dan moncong pitcher diturunkan untuk menggambar, tegakkan cangkir secara bertahap dan sinkron agar cairan tidak meluap ke luar tepi cangkir.

---
### Segitiga Parameter Dial-In Espresso
Dial-in adalah proses sistematis menemukan titik ekstraksi terbaik dari suatu profil biji sangrai. Tiga variabel utama yang dikendalikan barista adalah **Dose, Yield, dan Time**.

#### Formula Matematis Rasio Seduh Espresso (Brew Ratio):

> ☕ **Formula:** Brew Ratio = (Dosis Bubuk (gram) ÷ Hasil Espresso Cair (gram))


* **Ristretto (1:1 hingga 1:1.5)**: 18g bubuk menghasilkan 18g–27g espresso. Karakter: konsentrasi sangat pekat, keasaman buah dan minyak tebal, body bulat padat.
* **Normale (1:2 hingga 1:2.2)**: 18g bubuk menghasilkan 36g–40g espresso. Karakter: rasio standar emas paling seimbang untuk specialty coffee single origin.
* **Lungo (1:2.5 hingga 1:3)**: 18g bubuk menghasilkan 45g–54g espresso. Karakter: clarity tinggi, rasa manis larut maksimal, namun rentan over-extraction jika biji disangrai gelap.

#### Matriks Panduan Troubleshooting Cepat:
| Kondisi Sensorik | Diagnosa Ekstraksi | Tindakan Barista |
|---|---|---|
| Terlalu asam, asin, hambar, waktu < 22 detik | **Under-extracted** | Perhalus ukuran gilingan (*finer*) atau naikkan yield cairan |
| Terlalu pahit menusuk, kering sepat, waktu > 34 detik | **Over-extracted** | Perkasar ukuran gilingan (*coarser*) atau kurangi yield cairan |
| Manis seimbang, asam cerah buah, aftertaste panjang | **Balanced (Sweet Spot)** | Pertahankan parameter dan catat ke dalam brew log |`,
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
* Cut Through: Angkat pitcher tinggi dan belah tengah lurus dengan aliran tipis.

---
### Menangani Berbagai Tingkat Sangrai & Origin Kopi
Karakteristik seluler biji kopi berubah drastis tergantung pada asal wilayah agroklimat dan tingkat sangrai (*roast level*). Barista harus mengadaptasi variabel mesin sesuai bahan baku.

#### 1. Kopi Sangrai Ringan (Light Roast Single Origin)
* **Karakter Biji**: Struktur sel sangat padat, kadar air tersisa rendah, asam organik tinggi, dan laju kelarutan (*solubility*) rendah.
* **Strategi Dial-In Barista**:
  - Naikkan suhu boiler ke 93°C – 95°C untuk meningkatkan energi kinetik pelarutan.
  - Gunakan rasio seduh lebih panjang (1:2.2 hingga 1:2.5, misal 18g in -> 42g out).
  - Terapkan pre-infusi panjang (5–7 detik) untuk melembutkan kepadatan sel biji sebelum ekstraksi penuh 9 bar.

#### 2. Kopi Sangrai Sedang-Gelap (Medium-Dark Roast Blend)
* **Karakter Biji**: Struktur sel berpori rapuh, dinding sel telah terkaramelisasi lanjut, minyak kopi mulai bermigrasi ke permukaan, laju kelarutan sangat tinggi.
* **Strategi Dial-In Barista**:
  - Turunkan suhu boiler ke 89°C – 91°C untuk mencegah ekstraksi komponen pahit dan abu arang.
  - Gunakan rasio seduh lebih pendek (1:1.75 hingga 1:2.0, misal 18g in -> 34g out).
  - Waktu ekstraksi dipersingkat (24–27 detik) untuk mempertahankan sweetness karamel cokelat.`,
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

---

### 1. Teknik Staggered Pouring (Tuangan Berselang)

Jangan menyeduh dua dripper secara acak bersamaan! Gunakan sistem selisih waktu 45 detik:
* **00:00**: Tuang fase blooming pada Dripper 1 (misal 50g air).
* **00:45**: Tuang fase blooming pada Dripper 2. Di saat yang sama, lakukan tuangan kedua pada Dripper 1.
* **01:30**: Lakukan tuangan kedua pada Dripper 2, lalu lakukan tuangan akhir pada Dripper 1.
* Dengan metode berselang ini, satu barista dapat menangani 3 cangkir manual brew berkualitas tinggi secara konsisten tanpa kehilangan fokus pada laju alir ketel (*kettle flow rate*).

---
### Biokimia Susu & Dinamika Pemanasan
Susu sapi segar pasteurisasi (*fresh milk*) terdiri dari sekitar 87% air, 3.8% lemak mentega, 3.2% protein (kasein & whey), dan 4.8% laktosa (gula susu). Memahami kimiawi komponen ini krusial untuk menghasilkan minuman kopi susu berkualitas tinggi.

#### Peranan Masing-Masing Komponen:
1. **Laktosa (Gula Alami)**: Laktosa memiliki tingkat kemanisan rendah pada suhu dingin. Saat dipanaskan hingga 60°C–65°C, energi kinetik molekul meningkatkan sensitivitas reseptor rasa manis di lidah manusia hingga dua kali lipat secara alami tanpa perlu penambahan gula.
2. **Protein Whey & Kasein (Pembentuk Busa)**: Molekul protein memiliki dua kutub: hidrofobik (menolak air) dan hidrofilik (mengikat air). Saat uap steam wand menginjeksi udara, protein akan meregang (*unfolding*) dan membentuk selaput elastis yang memerangkap gelembung udara mikro.
3. **Lemak Mentega (Butterfat - Pembawa Rasa)**: Lemak susu meleleh pada suhu 35°C–40°C memberikan sensasi creamy mouthfeel yang membungkus lidah dan melunakkan kepahitan espresso.

> 🌡️ **Ambang Batas Suhu Kritis**:
> * **Di bawah 55°C**: Busa susu belum stabil dan cepat pecah menjadi cairan terpisah.
> * **60°C – 65°C**: Titik kesempurnaan tekstur sutra berkilau (*glossy*) dan rasa manis alami puncak.
> * **Di atas 70°C**: Protein kasein rusak permanen, menghasilkan bau belerang terbakar (*cooked milk flavor*), dan busa menjadi kaku seperti busa sabun.`,
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

[DIAGRAM:brewing-control-chart]

---

### 1. Definisi TDS dan Extraction Yield

* **Total Dissolved Solids (TDS %)**: Persentase massa zat padat terlarut kopi di dalam secangkir cairan seduhan. Standar filter coffee ideal berada di rentang **1.15% – 1.45%**.
* **Extraction Yield (EY %)**: Persentase berat zat yang berhasil dilarutkan air dari total massa bubuk kopi kering. Standar SCA menetapkan rentang ekstraksi optimal di **18.0% – 22.0%**.

> ☕ **Formula Extraction Yield (EY %):**
> **EY (%)** = **(Cairan Kopi yang Dihasilkan [g] × TDS [%])** ÷ **Dosis Bubuk Kopi Kering [g]**
> *Contoh: (220 gram kopi seduh × 1.35% TDS) ÷ 15.0 gram bubuk = 19.8% Extraction Yield (Ideal Sweet Spot!)*

---
### Fisika Vortex Steaming & Tekstur Microfoam
Menciptakan microfoam sempurna bukan masalah keberuntungan, melainkan penerapan prinsip dinamika fluida dan penempatan steam wand yang presisi.

#### Dua Fase Wajib Steaming Susu:
1. **Fase 1: Peregangan / Injeksi Udara (Aerating / Stretching)**
   - Masukkan susu dingin (4°C) ke dalam pitcher stainless steel hingga tepat di bawah pangkal moncong.
   - Posisikan ujung tip steam wand terbenam sekitar 0.5 – 1.0 cm di bawah permukaan susu, dengan sudut kemiringan sekitar 15°.
   - Buka keran uap penuh seketika. Dengarkan bunyi mendesis halus (*tsik-tsik-tsik*).
   - Biarkan volume susu mengembang sekitar 25%–30% untuk latte, atau 40%–50% untuk cappuccino. Selesaikan fase ini sebelum suhu mencapai 37°C (suhu tubuh manusia).
2. **Fase 2: Pusaran Turbulen / Penggulungan (Rolling / Vortex)**
   - Benamkan tip sedikit lebih dalam (sekitar 1–2 cm) untuk menghentikan injeksi udara luar.
   - Biarkan semburan uap memutar cairan susu menjadi pusaran tornado (*vortex*) berkecepatan tinggi.
   - Pusaran rotasi ini bertugas menghancurkan gelembung udara besar menjadi gelembung mikro mikroskopis hingga seluruh cairan berubah tekstur menjadi emulsi putih homogen mengkilap menyerupai cat basah.
   - Tutup keran uap tepat saat dasar pitcher terasa hangat-panas di telapak tangan (~60°C).`,
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

---

### 1. Teknik Bypass Water

Bypass adalah teknik menambahkan air panas bersih langsung ke cairan kopi hasil seduhan terkonsentrasi:
* Barista mengekstrak kopi dengan rasio lebih padat (misal 1:12) untuk mengekstrak hanya komponen asam buah dan gula karamel yang manis.
* Kemudian, ditambahkan 20–25% air bypass untuk menurunkan konsentrasi TDS ke tingkat yang nyaman diminum (1.30%).
* Hasilnya: Cangkir terasa sangat bersih (*clean cup*), manis, dan bebas dari serat pahit yang biasanya keluar di akhir seduhan panjang.

---
### Teknik Penuangan Latte Art: Dari Heart ke Rosetta
Latte art adalah indikator visual langsung dari keberhasilan barista dalam mengekstraksi espresso kaya crema dan mengolah microfoam bertekstur elastis sempurna.

#### 3 Faktor Fisika Penuangan:
1. **Tinggi Penuangan (Pouring Height)**:
   - Menuang dari ketinggian 5–7 cm dengan aliran tipis akan menembus lapisan crema dan mencampur susu ke dasar cangkir tanpa meninggalkan tanda putih di permukaan (*canvas setting*).
   - Menurunkan moncong pitcher hingga menempel bibir cangkir (jarak 0.5 cm) akan mengurangi momentum vertikal dan membuat microfoam mengapung di atas crema membentuk pola putih.
2. **Laju Aliran (Flow Rate)**: Aliran terlalu lambat membuat pola tidak melebar; aliran terlalu deras membuat crema pecah berantakan.
3. **Gerakan Pergelangan Tangan (Wiggle)**: Gerakan goyangan simetris pergelangan tangan dari sisi ke sisi menciptakan riak daun rosetta yang beraturan.

#### Panduan Pola Dasar Bertahap:
* **The Heart (Hati)**: Fondasi dasar kontrol kanvas. Mulai tuang tinggi hingga cangkir terisi 50%, turunkan pitcher ke tengah cangkir, dorong sedikit busa putih mengembang, lalu angkat pitcher dan potong garis lurus ke depan.
* **The Tulip (Bunga Bertingkat)**: Penguasaan teknik *stop-and-drop*. Tumpuk 3 hingga 5 bulatan busa secara bertahap sebelum dipotong lurus.
* **The Rosetta (Daun Simetris)**: Mengombinasikan gerakan goyangan pergelangan tangan konstan sambil memundurkan pitcher secara stabil, diakhiri dengan garis potong ramping ke depan.`,
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

---

### 1. Perbedaan Sistem Boiler Komersial

1. **Heat Exchanger (HX)**:
   - Menggunakan satu boiler uap besar bersuhu tinggi (120°C). Pipa air seduh melintas di tengah boiler uap tersebut.
   - Kelemahan: Jika mesin didiamkan lama, air di dalam pipa akan menjadi terlalu panas (*overheating*), sehingga membutuhkan *cooling flush* sebelum menyeduh.
2. **Dual Boiler**:
   - Memisahkan boiler air seduh kopi (kapasitas 2–4 Liter, suhu 93°C) dengan boiler steam wand uap susu (kapasitas 7–12 Liter, suhu 125°C).
   - Memberikan stabilitas suhu ekstraksi yang jauh lebih presisi tanpa terpengaruh aktivitas steaming susu.
3. **Saturated Group Head**:
   - Ruang group head terendam langsung ke dalam boiler seduh (*open neck design* seperti La Marzocco), menjamin suhu di ujung shower screen sama persis dengan suhu di dalam boiler.

---
### Protokol Multi-Dripper di Bar Komersial
Menyeduh manual brew saat bar sedang sibuk (*peak hours*) menuntut efisiensi gerakan dan konsistensi flow rate tanpa mengorbankan kualitas rasa cangkir.

#### Perbandingan Karakteristik Dripper Komersial:
* **Hario V60 (Conical 60°)**:
  - Pola alur spiral besar dengan lubang tunggal di dasar. Laju aliran sepenuhnya dikendalikan oleh teknik penuangan barista.
  - Karakter rasa: Keasaman cerah (*bright acidity*), pemisahan rasa buah jelas (*high clarity*), body ramping.
  - Target Grind: Medium-fine (serupa garam meja kasar). Waktu ekstraksi: 2:30 – 3:00 menit.
* **Kalita Wave (Flat-Bottomed)**:
  - Tiga lubang kecil di dasar dengan kertas bergelombang (*wave filters*) yang meminimalkan kontak langsung dengan dinding dripper.
  - Karakter rasa: Ekstraksi lebih merata, body lebih tebal, sweetness karamel dominan, toleransi kesalahan teknik lebih tinggi.
  - Target Grind: Sedikit lebih kasar dibanding V60. Waktu ekstraksi: 3:00 – 3:30 menit.

#### SOP Kerja Multi-Station Barista:
1. Basahi filter (*rinse*) dengan air panas 50ml untuk menghilangkan rasa kertas dan menghangatkan server kaca. Buang air bilasan.
2. Timbang 15.0g bubuk kopi per dripper, ratakan bed kopi secara horizontal.
3. Lakukan blooming serentak (45g air tuang dalam 10 detik, biarkan degas 30-45 detik).
4. Gunakan pola penuangan terpusat (*center pour*) melingkar kecil untuk menjaga suhu termal bed kopi tetap stabil di 88°C–92°C.`,
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

---

### 1. SOP Closing Shift Harian (Wajib Setiap Malam)

1. **Sikat Group Head**: Gunakan sikat nilon bersudut untuk membersihkan sisa bubuk kopi yang menempel di sela-sela gasket karet.
2. **Backflush Blind Filter**:
   - Pasang keranjang buntu (*blind basket*) tanpa lubang ke portafilter.
   - Masukkan 3 gram bubuk pembersih detergen khusus mesin espresso (misal Cafiza / Puly Caff).
   - Pasang portafilter ke group head, nyalakan pompa selama 10 detik, matikan 5 detik. Ulangi siklus ini 5 kali.
   - Lepas portafilter, buang busa kimia, lalu bilas backflush dengan air murni sebanyak 5 kali hingga air buangan benar-benar bening.
3. **Rendam Portafilter & Basket**: Rendam ujung portafilter stainless steel dan keranjang basket ke dalam air hangat berlarutan detergen. **PENTING**: Jangan pernah merendam gagang plastik portafilter!

---
### Eksplorasi Aeropress & Metode Imersi di Bar
Aeropress adalah instrumen seduh paling fleksibel yang memadukan ekstraksi imersi penuh dengan tekanan mekanis pendorong (*piston plunger*).

#### Dua Aliran Teknik Aeropress:
1. **Metode Inverted (Terbalik)**:
   - Posisikan plunger di bagian bawah dan tabung berdiri terbalik. Bubuk kopi dan air terendam total tanpa setetes pun cairan bocor sebelum waktu yang ditentukan.
   - Keuntungan: Kontrol waktu kontak air-kopi 100% presisi. Sangat ideal untuk profil biji berkepadatan seluler tinggi (Natural proses, Geisha, kopi Afrika).
   - Resep Barista: 16g kopi, 200g air suhu 90°C. Aduk 3 kali bolak-balik. Pasang cap berfilter kertas bilas pada menit 1:30, balikkan ke server, lalu tekan pelan selama 30 detik.
2. **Metode Standard (Lurus)**:
   - Cap dipasang di bawah, diletakkan di atas cangkir. Memungkinkan sebagian kecil cairan menetes sebelum tekanan piston diberikan.
   - Menghasilkan rasa seduhan yang lebih bersih (*clean*) dan berkeasaman cerah.

> 💡 **Troubleshooting Tekanan**: Jika piston terasa sangat berat ditekan hingga membutuhkan beban tubuh penuh, ukuran gilingan Anda terlalu halus (*too fine*) atau menghasilkan terlalu banyak debu halus (*fines*). Jangan dipaksakan karena berisiko meretakkan server kaca penampung.`,
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

---

### 1. Tiga Masalah Mekanis Paling Sering Terjadi

* **Bocoran Air Menetes dari Tepi Portafilter saat Ekstraksi**:
  - *Penyebab*: Karet gasket group head telah mengeras, pecah-pecah akibat panas, atau kehilangan elastisitasnya.
  - *Solusi*: Ganti gasket karet (atau beralih ke gasket silikon yang lebih awet tahan panas) setiap 4–6 bulan sekali.
* **Ampas Kopi Becek Berair (*Soggy Puck*)**:
  - *Penyebab*: Katup tiga arah (*3-way solenoid valve*) tersumbat kotoran sehingga tidak mampu membuang sisa tekanan air secara instan saat tombol stop ditekan.
  - *Solusi*: Lakukan chemical backflush mendalam atau bongkar inti solenoid untuk dibersihkan dari kerak.
* **Jarum Tekanan Manometer Bergetar atau Turun di Bawah 8 Bar**:
  - *Penyebab*: Pasokan air dari sistem pompa galon eksternal (*Flojet*) kehabisan debit, filter air tersumbat, atau baut bypass pompa rotary aus.

---
### Teknik Cold Brew Konsentrat & Iced Filter
Minuman kopi dingin specialty membutuhkan penanganan ekstraksi yang berbeda secara fundamental karena ketiadaan energi termal panas untuk melarutkan komponen kimiawi biji.

#### Parameter Cold Drip vs Cold Immersion:
* **Cold Immersion (Perendaman Dingin)**:
  - Bubuk kopi kasar direndam dalam air dingin bersuhu 4°C–10°C di dalam tangki kedap udara selama 16–20 jam.
  - Rasio konsentrat: 1:8 (100g bubuk per 800ml air). Diencerkan dengan air/es saat disajikan menjadi rasio 1:16.
  - Profil rasa: Sangat manis, tingkat keasaman rendah (karena asam klorogenat tidak terhidrolisis tanpa panas), body cokelat tebal.
* **Japanese Iced Pour-Over (Flash Brew)**:
  - Menyeduh kopi panas menggunakan dripper V60 langsung ke atas bongkahan es batu di dalam server.
  - Pembagian Rasio: 60% air panas seduh (misal 150g) + 40% es batu di server (misal 100g) untuk 16g bubuk kopi.
  - Reaksi *Thermal Shock*: Es batu yang langsung mendinginkan cairan espresso/filter mengunci senyawa volatil aroma buah dan bunga agar tidak menguap ke udara, menghasilkan es kopi yang luar biasa aromatik dan berkeasaman segar.`,
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

---

### 1. Prinsip Sinergi Rasa (Flavor Synergy)

Tujuan membuat minuman signature bukanlah menutupi rasa kopi, melainkan **menonjolkan (*elevate*)** atribut rasa bawaan kopi tersebut:
* Jika menggunakan biji kopi Ethiopia yang kaya aroma melati dan jeruk bergamot, padukan dengan reduksi sirup bunga elderflower dan sari jeruk sitrun segar.
* Jika menggunakan biji Sumatra fermentasi bodi tebal, padukan dengan sari rempah jahe bakar atau santan kelapa panggang (*toasted coconut*).

---

### 2. Efek Penurunan Suhu terhadap Pengecapan

Suhu dingin menumpulkan kepekaan papila lidah manusia terhadap rasa manis sebesar 20–30%, namun justru mempertegas rasa pahit dan keasaman. Oleh karena itu, formulasi minuman kopi dingin (*iced beverage*) memerlukan penyesuaian brix kemanisan yang sedikit lebih tinggi daripada minuman hangat.

---
### Formulasi Minuman Kopi Signature & Mocktail
Dalam industri kafe modern, minuman signature (*signature beverage*) adalah pembeda terkuat yang menciptakan loyalitas pelanggan dan menaikkan rata-rata nilai transaksi (*ticket size*).

#### Struktur Anatomi Minuman Signature Seimbang:
1. **Base (Fondasi Kopi)**: Espresso shot (ristretto untuk body pekat, lungo untuk clarity aromatik), atau Cold Brew konsentrat.
2. **Modifier Rasa Manis (Sweetener)**: Sirup racikan mandiri (*in-house crafted cordial*), sirup gula aren kelapa organik, madu hutan terfermentasi, atau *oleo saccharum* (ekstraksi minyak kulit jeruk dengan gula pasir).
3. **Acidifier (Penyeimbang Asam)**: Jus jeruk yuzu, asam laktat cair pangan, reduksi jus apel malat, atau kombucha lokal.
4. **Texturizer / Mouthfeel (Tekstur Sensori)**: Busa nitro, clarified milk punch (protein susu yang diendapkan dengan asam sitrat lalu disaring bening), atau tonic water bersoda halus.

> 🍸 **Golden Rule Formula Kopi Mocktail**:  
> Rasa kopi harus tetap menjadi **bintang utama**. Jika tamu meminum kreasi mocktail Anda dan tidak lagi merasakan karakter dasar kopi, minuman tersebut gagal sebagai kopi signature dan hanya menjadi jus manis biasa.`,
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

---

### 1. SOP Morning Cupping 15 Menit

Setiap pagi 30 menit sebelum pintu kedai dibuka:
1. Seduh 3 cangkir sampel menggunakan resep cupping standar (biji espresso blend hari ini, single origin filter 1, single origin filter 2).
2. Seluruh barista yang bertugas di shift pagi wajib mencicipi bersama menggunakan sendok cupping.
3. Sepakati deskripsi profil rasa hari ini: apa karakter asam buah yang dominan (jeruk, apel, atau nanas?), bagaimana rasa manisnya, dan seberapa lama aftertaste-nya.
4. Jika profil rasa melenceng dari standar roastery, lakukan investigasi sebelum pelanggan pertama tiba.

---
### Kalibrasi Sensorik & Bahasa Komunikasi dengan Roaster
Barista adalah mata dan telinga dari departemen roasting di sebuah kedai kopi. Kemampuan mendeskripsikan profil rasa secara objektif memungkinkan roaster melakukan koreksi batch penyangraian secara presisi.

#### Matriks Evaluasi Masalah Roasting di Meja Bar:
| Persepsi Rasa pada Espresso | Kemungkinan Defek Roasting | Komunikasi ke Roaster |
|---|---|---|
| Rasa rumput kering, kacang mentah, astringent sepat | **Underdeveloped Roasting** | Biji kurang matang di inti dalam, butuh kenaikan DTR % atau perpanjangan waktu development |
| Rasa roti tawar hambar, tidak ada aroma buah, datar | **Baked Profile (RoR Crash)** | Suhu roaster mengalami stagnasi/crash sebelum First Crack |
| Rasa abu arang, pahit ban terbakar, minyak keluar | **Overdeveloped / Scorched** | Suhu charge terlalu tinggi atau dipanggang terlalu gelap melebihi target profile |
| Sweetness karamel tinggi, acidity seimbang, bersih | **Ideal Profile** | Profil roasting optimal, pertahankan parameter batch tersebut |`,
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

---

### 1. Hindari Bahasa Teknis ("Jargonitis")

* **SALAH (Mengintimidasi)**: *"Kopi ini varietas Typica anaerobic thermal shock dengan titratable acidity tinggi dan profil enzymatic bergamot jasminoid."*
* **BENAR (Menghubungkan & Nyata)**: *"Kopi ini memiliki karakter yang sangat segar dan ringan seperti teh melati, dengan sedikit sentuhan rasa manis asam seperti buah jeruk mandarin. Sangat cocok jika Anda menyukai kopi hitam yang menyegarkan!"*

---

### 2. Tiga Pertanyaan Kunci Mengarahkan Pilihan Tamu

1. *"Biasanya lebih suka kopi hitam atau kopi yang dicampur susu gurih?"*
2. *"Untuk kopi hitamnya, lebih menyukai karakter yang segar cerah buah-buahan atau yang beraroma cokelat rempah tebal?"*
3. *"Mau disajikan panas untuk menikmati aromanya atau dingin segar untuk diminum santai?"*

---
### Manajemen Pemeliharaan & Higienitas Bar Komersial
Peralatan kopi bernilai ratusan juta rupiah akan rusak dan menghasilkan kopi berkualitas buruk jika tidak dirawat dengan standar operasional prosedur harian yang ketat.

#### Checklist Pemeliharaan Harian Barista (Daily Closing SOP):
1. **Backflush Mesin Espresso**:
   - Gunakan blind basket (keranjang buta tanpa lubang).
   - Masukkan 3–5 gram detergen pembersih mesin kopi khusus (misal Cafiza/Puly Caff).
   - Nyalakan pompa 10 detik, matikan 10 detik. Ulangi 5 kali untuk melarutkan sisa kerak minyak kopi di selenoid valve.
   - Bilas bersih dengan air mengalir hingga tidak ada sisa busa detergen kimia.
2. **Pembersihan Shower Screen & Gasket**: Buka baut shower screen seminggu sekali, rendam dalam air panas detergen, dan sikat gasket karet dari sisa bubuk kopi yang memadat.
3. **Pembersihan Burr Grinder**: Bersihkan ruang chamber mata pisau grinder dari retensi bubuk lama menggunakan kuas halus dan vacuum khusus. Jangan pernah mencuci mata pisau baja dengan air karena memicu karat instan!
4. **Water Filter Maintenance**: Periksa tekanan indikator cartridge filter air sedimentasi dan carbon block, pastikan pembacaan TDS air masuk tidak melebihi 250 ppm.`,
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
