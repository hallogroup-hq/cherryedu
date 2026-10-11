import { LearningPath, Module, Lesson, Quiz, Question } from '../../types';

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

### 2. Batch Brew Komersial: Manajemen Termal Dispenser & Hold Time

Batch brew menggunakan mesin otomatis (seperti Moccamaster, Fetco, atau Marco Bru) adalah pilar kecepatan bar di jam sibuk:
* **Brew Basket & Rasio**: Gunakan dosis 60 gram bubuk per 1 Liter air (rasio 1:16.6) dengan gilingan medium-coarse seragam.
* **Thermal Server Berinsulasi**: Simpan seduhan dalam urn stainless steel vakum tanpa pemanas pelat dasar (*hot plate*), karena pelat pemanas langsung membakar sisa gula kopi dan merusak rasa dalam 15 menit.
* **Batas Waktu Simpan (*Hold Time*)**: Sajikan seduhan dalam jendela waktu maksimal 90–120 menit pada suhu stabil 80°C–85°C sebelum oksidasi dan hidrolisis asam klorogenat menimbulkan rasa asam basi (*stale sourness*).`,
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

### 2. Pengendali Suhu PID & Pompa Tekanan Rotary Komersial

* **PID Controller (Proportional-Integral-Derivative)**:
  Sirkuit elektronik mikroprosesor yang menghitung laju kehilangan panas secara terus-menerus dan memanaskan boiler dengan presisi fluktuasi ±0.2°C, mengeliminasi variasi suhu ekstraksi antar shot.
* **Pompa Rotary Komersial vs Pompa Vibrasi Rumahan**:
  Mesin komersial menggunakan pompa rotary bermesin besar berpendingin udara yang mampu menjaga tekanan stabil 9.0 bar secara konsisten meskipun 3 group head mengekstrak bersamaan.
* **Pre-Infusion Chamber & Gicleur Flow Restrictor**:
  Nozzle gicleur (ukuran lubang 0.6mm–0.8mm) membatasi laju aliran awal air untuk membasahi coffee puck secara lembut pada 2–3 bar sebelum pompa mencapai tekanan penuh 9 bar.`,
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

### 2. Sanitasi Steam Wand & Pembersihan Kerak Protein Susu

Pipa uap (*steam wand*) yang tidak disanitasi adalah sarang bakteri pembusuk dari residu susu hangat:
1. **Purging & Wiping Pasca Steaming**:
   - Wajib melakukan purge uap 1–2 detik dan mengelap pipa dengan microfiber basah khusus susu segera setelah selesai memanaskan pitcher. Jangan pernah gunakan lap susu untuk mengelap meja atau portafilter!
2. **Pembersihan Rendam Kimia Enzimatik Mingguan**:
   - Rendam steam wand dalam cairan pembersih enzimatik khusus susu (misal Rinza) selama 15–20 menit untuk melarutkan kerak lemak susu di lubang nozzle (*steam tip holes*).
3. **Pemeriksaan Shower Screen & Baut Diffuser**:
   - Buka baut shower screen seminggu sekali, bersihkan minyak kopi yang mengeras di balik plat dispersi, dan ganti gasket karet yang sudah mengeras atau getas.`,
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

### 2. Pencegahan Kerak Air & Pengawasan Filtrasi (Water Hardness Control)

Kerak kalsium dan magnesium adalah faktor perusak nomor satu mesin espresso komersial:
1. **Inspeksi Cartridge Filter Air**:
   - Periksa pembacaan TDS dan hardness air setiap awal bulan. Air dengan total hardness di atas 85 ppm akan mengendapkan kerak kalsium karbonat pada elemen pemanas dalam 3–6 bulan.
2. **Gejala Kerak di Solenoid Valve**:
   - Jika air terus menetes dari group head saat pompa mati, atau jika pressure gauge uap tidak naik stabil, kristal kerak kapur telah mengganjal plunger solenoid 3 arah (*three-way valve*).
3. **Bahaya Descaling Mandiri Tanpa Teknisi**:
   - Jangan pernah menuangkan asam sitrat descaling pekat langsung ke tangki boiler komersial tanpa pengawasan teknisi berlisensi, karena rontokan kerak masif dapat menyumbat lubang gicleur mikro (0.6mm) dan merusak probe sensor level air boiler.`,
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
    summary: 'Teori formulasi minuman kopi signature, prinsip sinergi rasa (flavor synergy), kompensasi suhu dingin terhadap persepsi rasa, dan struktur anatomi mocktail seimbang.',
    key_takeaways: [
      'Kopi harus tetap menjadi bintang utama; bahan tambahan berfungsi memperkuat atribut rasa alami kopi, bukan menutupinya.',
      'Suhu dingin menumpulkan sensitivitas rasa manis papila lidah 20–30%, sehingga minuman kopi dingin membutuhkan penyesuaian brix kemanisan terukur.',
      'Kombinasikan 4 pilar anatomi signature drink: Base Kopi, Sweetener, Acidifier, dan Texturizer secara proporsional.'
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

### 3. Membangun Analogi Rasa Sehari-Hari & Koneksi Emosional

Pelanggan awam tidak mengenali istilah seperti "titratable acidity", "bergamot", atau "stone fruit". Gunakan jembatan analogi rasa yang akrab di lidah masyarakat Indonesia:
* **Asam Malat (*Malic Acid*)**: Terangkan sebagai *"sensasi asam segar garing layaknya menggigit apel fuji hijau atau buah pir manis"*.
* **Asam Sitrat (*Citric Acid*)**: Terangkan sebagai *"kesegaran asam berair manis seperti buah jeruk keprok segar"*.
* **Catatan Floral & Jasmine**: Jelaskan sebagai *"aroma wangi lembut menenangkan mirip seduhan teh melati hangat Nusantara"*.
* **Sweetness & Molasses**: Jelaskan sebagai *"rasa manis gurih legit yang tertinggal di lidah mirip gula kelapa atau karamel mentega"*.`,
    content_type: 'text',
    duration_minutes: 14,
    order_index: 1,
    is_free: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Seni mengomunikasikan profil rasa specialty coffee kepada pelanggan tanpa bahasa teknis intimidatif, analogi rasa lokal, dan 3 pertanyaan panduan di meja kasir.',
    key_takeaways: [
      'Gantikan jargon kimiawi rumit dengan analogi buah dan makanan yang akrab di lidah konsumen sehari-hari.',
      'Gunakan 3 pertanyaan panduan untuk mengidentifikasi preferensi rasa tamu dalam waktu kurang dari 30 detik.',
      'Utamakan keramahan dan keterhubungan emosional daripada pembuktian superioritas teknis di meja bar.'
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

export const BARISTA_QUIZZES: Quiz[] = [
  {
    id: 'quiz-b1',
    module_id: 'mod-b1',
    learning_path_id: 'path-barista',
    quiz_scope: 'module',
    title: 'Kuis Evaluasi Modul B-1: Dial-In Espresso Komersial & Kalibrasi Resep Presisi',
    passing_score: 80,
    time_limit_minutes: 10,
    max_attempts: 3,
    created_at: '2026-08-01T00:00:00Z',
  },
  {
    id: 'quiz-b2',
    module_id: 'mod-b2',
    learning_path_id: 'path-barista',
    quiz_scope: 'module',
    title: 'Kuis Evaluasi Modul B-2: Sains Steaming Susu & Tekstur Microfoam Silky',
    passing_score: 80,
    time_limit_minutes: 10,
    max_attempts: 3,
    created_at: '2026-08-01T00:00:00Z',
  },
  {
    id: 'quiz-b3',
    module_id: 'mod-b3',
    learning_path_id: 'path-barista',
    quiz_scope: 'module',
    title: 'Kuis Evaluasi Modul B-3: Seni Latte Art Lanjutan & Ergonomi Tuangan',
    passing_score: 80,
    time_limit_minutes: 10,
    max_attempts: 3,
    created_at: '2026-08-01T00:00:00Z',
  },
  {
    id: 'quiz-b4',
    module_id: 'mod-b4',
    learning_path_id: 'path-barista',
    quiz_scope: 'module',
    title: 'Kuis Evaluasi Modul B-4: Manual Brewing di Bar Komersial & Speed-Service',
    passing_score: 80,
    time_limit_minutes: 10,
    max_attempts: 3,
    created_at: '2026-08-01T00:00:00Z',
  },
  {
    id: 'quiz-b5',
    module_id: 'mod-b5',
    learning_path_id: 'path-barista',
    quiz_scope: 'module',
    title: 'Kuis Evaluasi Modul B-5: Manajemen & Pemeliharaan Mesin Espresso Komersial',
    passing_score: 80,
    time_limit_minutes: 10,
    max_attempts: 3,
    created_at: '2026-08-01T00:00:00Z',
  },
  {
    id: 'quiz-b6',
    module_id: 'mod-b6',
    learning_path_id: 'path-barista',
    quiz_scope: 'module',
    title: 'Kuis Evaluasi Modul B-6: Signature Beverage & Pembuatan Sirup Craft Spesialti',
    passing_score: 80,
    time_limit_minutes: 10,
    max_attempts: 3,
    created_at: '2026-08-01T00:00:00Z',
  },
  {
    id: 'quiz-b7',
    module_id: 'mod-b7',
    learning_path_id: 'path-barista',
    quiz_scope: 'module',
    title: 'Kuis Evaluasi Modul B-7: Kalibrasi Sensorik Barista Harian & Dial-In Tasting',
    passing_score: 80,
    time_limit_minutes: 10,
    max_attempts: 3,
    created_at: '2026-08-01T00:00:00Z',
  },
  {
    id: 'quiz-b8',
    module_id: 'mod-b8',
    learning_path_id: 'path-barista',
    quiz_scope: 'module',
    title: 'Kuis Evaluasi Modul B-8: Hospitality, Pelayanan Konsumen & Komunikasi Rasa',
    passing_score: 80,
    time_limit_minutes: 10,
    max_attempts: 3,
    created_at: '2026-08-01T00:00:00Z',
  },
  {
    id: 'quiz-b9',
    module_id: 'mod-b9',
    learning_path_id: 'path-barista',
    quiz_scope: 'module',
    title: 'Kuis Evaluasi Modul B-9: Manajemen Inventaris Bar, FIFO & Pengendalian Waste',
    passing_score: 80,
    time_limit_minutes: 10,
    max_attempts: 3,
    created_at: '2026-08-01T00:00:00Z',
  },
  {
    id: 'quiz-b10',
    module_id: 'mod-b10',
    learning_path_id: 'path-barista',
    quiz_scope: 'module',
    title: 'Kuis Evaluasi Modul B-10: Ergonomi Kerja Barista, Keselamatan & Alur Kerja Bar',
    passing_score: 80,
    time_limit_minutes: 10,
    max_attempts: 3,
    created_at: '2026-08-01T00:00:00Z',
  },
  {
    id: 'quiz-final-barista',
    module_id: null,
    learning_path_id: 'path-barista',
    quiz_scope: 'final_exam',
    title: 'Ujian Akhir Profesional Barista: Sertifikasi Kompetensi Bar',
    description: 'Evaluasi komprehensif 8 modul kompetensi standar industri kafe spesialti.',
    passing_score: 80,
    time_limit_minutes: 25,
    max_attempts: 3,
    created_at: '2026-08-05T00:00:00Z',
  },
];

export const BARISTA_QUESTIONS: Question[] = [
  {
    id: 'q-b1-1',
    quiz_id: 'quiz-b1',
    question_text: 'Jika espresso terasa asam tajam menyengat, bodi encer, dan waktu ekstraksi hanya 18 detik untuk rasio 1:2, penyesuaian utama apa yang wajib dilakukan?',
    question_type: 'multiple_choice',
    order_index: 1,
    explanation: 'Waktu ekstraksi yang terlalu cepat (18 detik) dan rasa asam menusuk mengindikasikan under-extraction. Solusi utamanya adalah memperhalus gilingan agar tahanan puck meningkat dan waktu kontak bertambah.',
    answers: [
      { id: 'ans-q-b1-1-a', question_id: 'q-b1-1', answer_text: 'Memperpanjang pre-infusi tanpa mengubah setelan grinder', is_correct: false, order_index: 1 },
      { id: 'ans-q-b1-1-b', question_id: 'q-b1-1', answer_text: 'Memperhalus ukuran gilingan (grind size finer) guna memperlambat laju alir fluida dan menaikkan ekstraksi', is_correct: true, order_index: 2 },
      { id: 'ans-q-b1-1-c', question_id: 'q-b1-1', answer_text: 'Menurunkan dosis bubuk kopi di portafilter sebesar 2 gram', is_correct: false, order_index: 3 },
      { id: 'ans-q-b1-1-d', question_id: 'q-b1-1', answer_text: 'Menaikkan suhu boiler mesin hingga 98°C', is_correct: false, order_index: 4 },
    ],
  },
  {
    id: 'q-b1-2',
    quiz_id: 'quiz-b1',
    question_text: 'Apa fungsi utama teknik WDT (Weiss Distribution Technique) dengan jarum mikro saat puck preparation sebelum tamping?',
    question_type: 'multiple_choice',
    order_index: 2,
    explanation: 'WDT menggunakan jarum berdiameter tipis (0.3-0.4mm) untuk mendistribusikan partikel kopi secara homogen, meniadakan rongga udara dan gumpalan yang menjadi pemicu channeling.',
    answers: [
      { id: 'ans-q-b1-2-a', question_id: 'q-b1-2', answer_text: 'Memadat bubuk kopi agar tidak tumpah keluar dari basket portafilter', is_correct: false, order_index: 1 },
      { id: 'ans-q-b1-2-b', question_id: 'q-b1-2', answer_text: 'Mengeringkan kelembapan bubuk kopi segar setelah keluar dari grinder', is_correct: false, order_index: 2 },
      { id: 'ans-q-b1-2-c', question_id: 'q-b1-2', answer_text: 'Memecah aglomerasi gumpalan bubuk mikro dan meratakan densitas partikel di seluruh basket untuk mencegah kanalisasi (channeling)', is_correct: true, order_index: 3 },
      { id: 'ans-q-b1-2-d', question_id: 'q-b1-2', answer_text: 'Menambahkan partikel fines ke bagian dasar basket portafilter', is_correct: false, order_index: 4 },
    ],
  },
  {
    id: 'q-b1-3',
    quiz_id: 'quiz-b1',
    question_text: 'Berapakah rentang persentase Extraction Yield (EY) standar emas espresso specialty menurut sains SCA?',
    question_type: 'multiple_choice',
    order_index: 3,
    explanation: 'Extraction Yield ideal berada di kisaran 18% - 22%. Di bawah 18% kopi cenderung under-extracted (sour/salty), sedangkan di atas 22% berisiko over-extracted (astringent/bitter).',
    answers: [
      { id: 'ans-q-b1-3-a', question_id: 'q-b1-3', answer_text: '18.0% hingga 22.0%', is_correct: true, order_index: 1 },
      { id: 'ans-q-b1-3-b', question_id: 'q-b1-3', answer_text: '10.0% hingga 14.0%', is_correct: false, order_index: 2 },
      { id: 'ans-q-b1-3-c', question_id: 'q-b1-3', answer_text: '25.0% hingga 29.0%', is_correct: false, order_index: 3 },
      { id: 'ans-q-b1-3-d', question_id: 'q-b1-3', answer_text: '32.0% hingga 36.0%', is_correct: false, order_index: 4 },
    ],
  },
  {
    id: 'q-b2-1',
    quiz_id: 'quiz-b2',
    question_text: 'Pada rentang suhu berapakah proses peregangan (aerasi / stretching) susu harus dihentikan dan dialihkan sepenuhnya ke fase swirling/vortexing?',
    question_type: 'multiple_choice',
    order_index: 1,
    explanation: 'Pemasukan udara (stretching) harus diselesaikan sebelum 40°C karena di atas suhu tersebut lemak susu mulai mencair dan tidak dapat mengintegrasikan gelembung mikro baru dengan stabil.',
    answers: [
      { id: 'ans-q-b2-1-a', question_id: 'q-b2-1', answer_text: 'Segera setelah uap steam pertama kali keluar dari tip', is_correct: false, order_index: 1 },
      { id: 'ans-q-b2-1-b', question_id: 'q-b2-1', answer_text: 'Saat susu mendidih mencapai suhu 75°C', is_correct: false, order_index: 2 },
      { id: 'ans-q-b2-1-c', question_id: 'q-b2-1', answer_text: 'Tepat ketika gelembung besar muncul di permukaan', is_correct: false, order_index: 3 },
      { id: 'ans-q-b2-1-d', question_id: 'q-b2-1', answer_text: 'Saat susu mencapai suhu tubuh sekitar 37°C hingga 40°C', is_correct: true, order_index: 4 },
    ],
  },
  {
    id: 'q-b2-2',
    quiz_id: 'quiz-b2',
    question_text: 'Apa dampak fisik dan kimiawi jika susu sapi di-steaming melampaui suhu 70°C di bar komersial?',
    question_type: 'multiple_choice',
    order_index: 2,
    explanation: 'Di atas 70°C, protein susu rusak dan melepaskan aroma belerang (cooked/burnt flavor), rasa manis laktosa memudar, dan tekstur microfoam pecah.',
    answers: [
      { id: 'ans-q-b2-2-a', question_id: 'q-b2-2', answer_text: 'Susu akan mengkristal dan menyumbat lubang nozzle steam wand', is_correct: false, order_index: 1 },
      { id: 'ans-q-b2-2-b', question_id: 'q-b2-2', answer_text: 'Kandungan kalsium dalam susu lenyap menguap bersama uap air', is_correct: false, order_index: 2 },
      { id: 'ans-q-b2-2-c', question_id: 'q-b2-2', answer_text: 'Protein whey terdenaturasi total, kemanisan alami laktosa rusak, dan busa menjadi kaku terpisah seperti spons', is_correct: true, order_index: 3 },
      { id: 'ans-q-b2-2-d', question_id: 'q-b2-2', answer_text: 'Warna susu berubah menjadi transparan bening', is_correct: false, order_index: 4 },
    ],
  },
  {
    id: 'q-b2-3',
    quiz_id: 'quiz-b2',
    question_text: 'Di mana letak posisi steam wand tip yang tepat di dalam milk pitcher untuk menciptakan pusaran vortex yang memecah gelembung mikro?',
    question_type: 'multiple_choice',
    order_index: 3,
    explanation: 'Posisi off-center sekitar 1 cm di bawah permukaan menghasilkan gaya sentrifugal vortex yang menarik gelembung permukaan ke dasar dan memecahnya menjadi busa mikro sutra.',
    answers: [
      { id: 'ans-q-b2-3-a', question_id: 'q-b2-3', answer_text: 'Sekitar 1 cm di bawah permukaan susu dan diposisikan sedikit di luar titik tengah (off-center) miring', is_correct: true, order_index: 1 },
      { id: 'ans-q-b2-3-b', question_id: 'q-b2-3', answer_text: 'Menempel di dasar pitcher untuk mencegah timbulnya gelembung udara', is_correct: false, order_index: 2 },
      { id: 'ans-q-b2-3-c', question_id: 'q-b2-3', answer_text: 'Mengapung di udara 2 cm di atas permukaan cairan susu', is_correct: false, order_index: 3 },
      { id: 'ans-q-b2-3-d', question_id: 'q-b2-3', answer_text: 'Tepat di dinding luar pitcher menyentuh pegangan', is_correct: false, order_index: 4 },
    ],
  },
  {
    id: 'q-b3-1',
    quiz_id: 'quiz-b3',
    question_text: 'Faktor hidrodinamika apa yang paling menentukan terciptanya kontras visual tajam antara crema cokelat dan pola putih latte art?',
    question_type: 'multiple_choice',
    order_index: 1,
    explanation: 'Pencampuran kanvas awal menjaga integritas crema, kemudian menurunkan spout sangat dekat ke permukaan memungkinkan busa putih mengapung di atas densitas cairan kopi.',
    answers: [
      { id: 'ans-q-b3-1-a', question_id: 'q-b3-1', answer_text: 'Menaburkan bubuk kakao pekat di atas espresso sebelum menuangkan susu', is_correct: false, order_index: 1 },
      { id: 'ans-q-b3-1-b', question_id: 'q-b3-1', answer_text: 'Pencampuran kanvas awal (incorporation) yang tenang tanpa turbulensi kasar, diikuti penuangan dekat permukaan dengan laju alir stabil', is_correct: true, order_index: 2 },
      { id: 'ans-q-b3-1-c', question_id: 'q-b3-1', answer_text: 'Menuangkan seluruh susu dari ketinggian 25 cm secepat mungkin', is_correct: false, order_index: 3 },
      { id: 'ans-q-b3-1-d', question_id: 'q-b3-1', answer_text: 'Mengocok cangkir secara agresif bolak-balik selama penuangan', is_correct: false, order_index: 4 },
    ],
  },
  {
    id: 'q-b3-2',
    quiz_id: 'quiz-b3',
    question_text: 'Saat membentuk layer daun pada pola Rosetta atau kelopak Tulip, bagaimana posisi spout pitcher terhadap permukaan cangkir?',
    question_type: 'multiple_choice',
    order_index: 2,
    explanation: 'Spout harus berada sedekat mungkin dengan cairan agar gaya apung microfoam bekerja dan busa putih mengembang di atas kanvas crema.',
    answers: [
      { id: 'ans-q-b3-2-a', question_id: 'q-b3-2', answer_text: 'Berjarak minimal 15 cm di atas cangkir agar susu menembus ke dasar', is_correct: false, order_index: 1 },
      { id: 'ans-q-b3-2-b', question_id: 'q-b3-2', answer_text: 'Berada di luar bibir cangkir', is_correct: false, order_index: 2 },
      { id: 'ans-q-b3-2-c', question_id: 'q-b3-2', answer_text: 'Tegak lurus 90 derajat dari ketinggian', is_correct: false, order_index: 3 },
      { id: 'ans-q-b3-2-d', question_id: 'q-b3-2', answer_text: 'Sangat dekat (hampir menyentuh permukaan crema) dengan sudut penuangan rendah', is_correct: true, order_index: 4 },
    ],
  },
  {
    id: 'q-b3-3',
    quiz_id: 'quiz-b3',
    question_text: 'Mengapa gerakan memotong pola (cut-through) di akhir latte art harus dilakukan dengan mengangkat pitcher tinggi dan mengecilkan aliran susu?',
    question_type: 'multiple_choice',
    order_index: 3,
    explanation: 'Menaikkan pitcher menciptakan aliran tipis bertekanan gravitasi yang membelah hati/daun menjadi simetris sempurna tanpa menyeret gumpalan putih di permukaan.',
    answers: [
      { id: 'ans-q-b3-3-a', question_id: 'q-b3-3', answer_text: 'Agar aliran tipis membelah simetri tanpa menyeret pola putih dan tidak menenggelamkan bentuk motif', is_correct: true, order_index: 1 },
      { id: 'ans-q-b3-3-b', question_id: 'q-b3-3', answer_text: 'Agar suhu susu yang panas tidak memercik ke meja bar', is_correct: false, order_index: 2 },
      { id: 'ans-q-b3-3-c', question_id: 'q-b3-3', answer_text: 'Untuk mendinginkan cangkir kopi sebelum disajikan ke meja tamu', is_correct: false, order_index: 3 },
      { id: 'ans-q-b3-3-d', question_id: 'q-b3-3', answer_text: 'Agar sisa susu di dalam pitcher tidak tumpah ke lantai', is_correct: false, order_index: 4 },
    ],
  },
  {
    id: 'q-b4-1',
    quiz_id: 'quiz-b4',
    question_text: 'Berapakah batas waktu simpan maksimal (holding time) kopi batch brew di dalam thermal dispenser komersial sebelum rasa mengalami degradasi oksidatif?',
    question_type: 'multiple_choice',
    order_index: 1,
    explanation: 'Setelah 60-90 menit, asam klorogenat dalam kopi seduh terdegradasi menjadi asam kuinat yang pahit dan senyawa aromatik volatil menguap habis.',
    answers: [
      { id: 'ans-q-b4-1-a', question_id: 'q-b4-1', answer_text: '8 hingga 12 jam sejak penyeduhan selesai', is_correct: false, order_index: 1 },
      { id: 'ans-q-b4-1-b', question_id: 'q-b4-1', answer_text: '10 hingga 15 menit saja', is_correct: false, order_index: 2 },
      { id: 'ans-q-b4-1-c', question_id: 'q-b4-1', answer_text: '60 hingga 90 menit pada suhu termal 80°C - 85°C', is_correct: true, order_index: 3 },
      { id: 'ans-q-b4-1-d', question_id: 'q-b4-1', answer_text: '24 jam asalkan tutup dispenser tidak dibuka', is_correct: false, order_index: 4 },
    ],
  },
  {
    id: 'q-b4-2',
    quiz_id: 'quiz-b4',
    question_text: 'Apa keunggulan geometri keranjang datar (flat bottom basket) pada batch brewer komersial dibanding keranjang kerucut saat rush hour?',
    question_type: 'multiple_choice',
    order_index: 2,
    explanation: 'Flat bottom mendistribusikan air secara merata ke seluruh penampang ampas kopi tanpa titik konsentrasi di ujung kerucut, ideal untuk ekstraksi skala 2-4 liter.',
    answers: [
      { id: 'ans-q-b4-2-a', question_id: 'q-b4-2', answer_text: 'Mencegah air panas mendidih di dalam tabung boiler', is_correct: false, order_index: 1 },
      { id: 'ans-q-b4-2-b', question_id: 'q-b4-2', answer_text: 'Menghasilkan kedalaman bed ampas yang seragam sehingga meminimalkan bypass air dan ekstraksi lebih konsisten pada volume besar', is_correct: true, order_index: 2 },
      { id: 'ans-q-b4-2-c', question_id: 'q-b4-2', answer_text: 'Memungkinkan penyeduhan tanpa membutuhkan kertas saring', is_correct: false, order_index: 3 },
      { id: 'ans-q-b4-2-d', question_id: 'q-b4-2', answer_text: 'Mempercepat waktu ekstraksi menjadi di bawah 30 detik', is_correct: false, order_index: 4 },
    ],
  },
  {
    id: 'q-b4-3',
    quiz_id: 'quiz-b4',
    question_text: 'Jika air meluap dari keranjang filter (basket overflow) pada mesin batch brewer komersial, akar penyebab teknis yang paling sering adalah?',
    question_type: 'multiple_choice',
    order_index: 3,
    explanation: 'Fines yang berlebih atau grind size yang terlalu halus menciptakan hambatan hidrolik tinggi di pori kertas saring sehingga air masuk lebih cepat daripada air keluar.',
    answers: [
      { id: 'ans-q-b4-3-a', question_id: 'q-b4-3', answer_text: 'Tekanan listrik PLN mengalami penurunan voltase', is_correct: false, order_index: 1 },
      { id: 'ans-q-b4-3-b', question_id: 'q-b4-3', answer_text: 'Suhu air seduh di boiler terlalu rendah di bawah 70°C', is_correct: false, order_index: 2 },
      { id: 'ans-q-b4-3-c', question_id: 'q-b4-3', answer_text: 'Dispenser penampung di bawah keranjang sudah penuh', is_correct: false, order_index: 3 },
      { id: 'ans-q-b4-3-d', question_id: 'q-b4-3', answer_text: 'Ukuran gilingan terlalu halus atau persentase partikel fines menyumbat pori-pori kertas saring', is_correct: true, order_index: 4 },
    ],
  },
  {
    id: 'q-b5-1',
    quiz_id: 'quiz-b5',
    question_text: 'Mengapa prosedur backflush menggunakan chemical pembersih khusus (seperti Cafiza) dan blind filter wajib dilakukan setiap penutupan bar?',
    question_type: 'multiple_choice',
    order_index: 1,
    explanation: 'Katup solenoid 3-arah mengalirkan sisa tekanan setelah ekstraksi, membawa serta minyak kopi yang akan menjadi tengik dan menyumbat saluran jika tidak dibersihkan dengan deterjen pelarut lemak.',
    answers: [
      { id: 'ans-q-b5-1-a', question_id: 'q-b5-1', answer_text: 'Menurunkan tekanan pompa rotary boiler mesin menjadi 0 bar', is_correct: false, order_index: 1 },
      { id: 'ans-q-b5-1-b', question_id: 'q-b5-1', answer_text: 'Mencegah pertumbuhan kerak kapur di dalam tangki air boiler uap', is_correct: false, order_index: 2 },
      { id: 'ans-q-b5-1-c', question_id: 'q-b5-1', answer_text: 'Melarutkan tumpukan minyak kopi teroksidasi dan kerak karbon pada saluran solenoid valve 3-way dan shower screen', is_correct: true, order_index: 3 },
      { id: 'ans-q-b5-1-d', question_id: 'q-b5-1', answer_text: 'Menjaga agar pegangan portafilter tetap harum', is_correct: false, order_index: 4 },
    ],
  },
  {
    id: 'q-b5-2',
    quiz_id: 'quiz-b5',
    question_text: 'Berapakah tekanan statis standar yang dialirkan oleh rotary vane pump komersial saat mengekstraksi espresso di group head?',
    question_type: 'multiple_choice',
    order_index: 2,
    explanation: 'Standar industri komersial adalah 9 bar tekanan hidrolik konstan yang dihasilkan oleh rotary vane pump bermotor induksi.',
    answers: [
      { id: 'ans-q-b5-2-a', question_id: 'q-b5-2', answer_text: '9 bar (rentang toleransi standar 8.5 hingga 9.5 bar)', is_correct: true, order_index: 1 },
      { id: 'ans-q-b5-2-b', question_id: 'q-b5-2', answer_text: '3 hingga 5 bar', is_correct: false, order_index: 2 },
      { id: 'ans-q-b5-2-c', question_id: 'q-b5-2', answer_text: '15 hingga 18 bar', is_correct: false, order_index: 3 },
      { id: 'ans-q-b5-2-d', question_id: 'q-b5-2', answer_text: '22 hingga 25 bar', is_correct: false, order_index: 4 },
    ],
  },
  {
    id: 'q-b5-3',
    quiz_id: 'quiz-b5',
    question_text: 'Ion mineral apakah dalam air suplai yang bereaksi saat dipanaskan membentuk kerak kapur (limescale CaCO3) di dalam boiler tembaga mesin espresso?',
    question_type: 'multiple_choice',
    order_index: 3,
    explanation: 'Reaksi termal memecah kalsium bikarbonat terlarut menjadi kalsium karbonat padat (kerak kapur), air, dan gas CO2: Ca(HCO3)2 -> CaCO3 + H2O + CO2.',
    answers: [
      { id: 'ans-q-b5-3-a', question_id: 'q-b5-3', answer_text: 'Natrium (Na+) dan Klorida (Cl-)', is_correct: false, order_index: 1 },
      { id: 'ans-q-b5-3-b', question_id: 'q-b5-3', answer_text: 'Besi (Fe2+) dan Mangan (Mn2+)', is_correct: false, order_index: 2 },
      { id: 'ans-q-b5-3-c', question_id: 'q-b5-3', answer_text: 'Kalium (K+) dan Sulfat (SO4 2-)', is_correct: false, order_index: 3 },
      { id: 'ans-q-b5-3-d', question_id: 'q-b5-3', answer_text: 'Kalsium (Ca2+) dan anion Bikarbonat (HCO3-)', is_correct: true, order_index: 4 },
    ],
  },
  {
    id: 'q-b6-1',
    quiz_id: 'quiz-b6',
    question_text: 'Berapakah kadar gula terlarut (°Brix) untuk Simple Syrup (rasio 1:1) dan Rich Syrup (rasio 2:1) yang digunakan dalam resep signature drink kopi?',
    question_type: 'multiple_choice',
    order_index: 1,
    explanation: 'Gula 1:1 memiliki konsentrasi 50% b/b (~50° Brix), sedangkan 2:1 memiliki konsentrasi 66.7% b/b (~66° Brix) yang memberikan mouthfeel lebih kental dan masa simpan stabil tanpa fermentasi.',
    answers: [
      { id: 'ans-q-b6-1-a', question_id: 'q-b6-1', answer_text: 'Simple Syrup ~20° Brix dan Rich Syrup ~35° Brix', is_correct: false, order_index: 1 },
      { id: 'ans-q-b6-1-b', question_id: 'q-b6-1', answer_text: 'Simple Syrup ~50° Brix dan Rich Syrup ~65° hingga 66° Brix', is_correct: true, order_index: 2 },
      { id: 'ans-q-b6-1-c', question_id: 'q-b6-1', answer_text: 'Simple Syrup ~75° Brix dan Rich Syrup ~90° Brix', is_correct: false, order_index: 3 },
      { id: 'ans-q-b6-1-d', question_id: 'q-b6-1', answer_text: 'Keduanya selalu memiliki nilai mutlak 100° Brix', is_correct: false, order_index: 4 },
    ],
  },
  {
    id: 'q-b6-2',
    quiz_id: 'quiz-b6',
    question_text: 'Dalam teknik Clarified Coffee Milk Punch, apa mekanisme sains yang membuat minuman menjadi bening transparan?',
    question_type: 'multiple_choice',
    order_index: 2,
    explanation: 'Koagulasi kasein oleh asam membentuk anyaman filter alami yang menjebak partikel mikroskopis penyebab kekeruhan dan astringency, meninggalkan cairan jernih bertekstur beludru.',
    answers: [
      { id: 'ans-q-b6-2-a', question_id: 'q-b6-2', answer_text: 'Asam mengentalkan protein kasein susu membentuk gumpalan dadih yang menyaring partikel keruh, polifenol, dan tanin', is_correct: true, order_index: 1 },
      { id: 'ans-q-b6-2-b', question_id: 'q-b6-2', answer_text: 'Gula laktosa mengendap ke dasar botol mengikat warna hitam espresso', is_correct: false, order_index: 2 },
      { id: 'ans-q-b6-2-c', question_id: 'q-b6-2', answer_text: 'Kandungan lemak susu menguap habis saat terkena suhu ruangan', is_correct: false, order_index: 3 },
      { id: 'ans-q-b6-2-d', question_id: 'q-b6-2', answer_text: 'Asam sitrat menghancurkan seluruh molekul kafein dalam kopi', is_correct: false, order_index: 4 },
    ],
  },
  {
    id: 'q-b6-3',
    quiz_id: 'quiz-b6',
    question_text: 'Mengapa penambahan 2-3 tetes larutan saline (garam dapur konsentrasi 10-20%) efektif meningkatkan profil rasa mocktail kopi dingin?',
    question_type: 'multiple_choice',
    order_index: 3,
    explanation: 'Secara fisiologi neurosensorik, ion Na+ memblokir sebagian reseptor pahit (TAS2R) di lidah, yang secara persepsi langsung meningkatkan kontras kemanisan dan keasaman buah.',
    answers: [
      { id: 'ans-q-b6-3-a', question_id: 'q-b6-3', answer_text: 'Membuat minuman kopi memiliki rasa gurih asin seperti kuah sup', is_correct: false, order_index: 1 },
      { id: 'ans-q-b6-3-b', question_id: 'q-b6-3', answer_text: 'Mencegah es batu mencair selama 2 jam penyajian', is_correct: false, order_index: 2 },
      { id: 'ans-q-b6-3-c', question_id: 'q-b6-3', answer_text: 'Ion natrium menekan persepsi rasa pahit di papila lidah dan secara simultan mengangkat persepsi rasa manis buah alami', is_correct: true, order_index: 3 },
      { id: 'ans-q-b6-3-d', question_id: 'q-b6-3', answer_text: 'Membunuh bakteri patogen di dalam sirup craft buah', is_correct: false, order_index: 4 },
    ],
  },
  {
    id: 'q-b7-1',
    quiz_id: 'quiz-b7',
    question_text: 'Kapan waktu paling krusial bagi tim barista untuk melakukan kalibrasi sensorik dial-in espresso harian?',
    question_type: 'multiple_choice',
    order_index: 1,
    explanation: 'Suhu ruangan, kelembapan udara (RH), dan keausan hopper berubah setiap hari. Kalibrasi pagi dan pergantian shift menjamin setiap cangkir yang disajikan sesuai standar SOP.',
    answers: [
      { id: 'ans-q-b7-1-a', question_id: 'q-b7-1', answer_text: 'Hanya di akhir shift malam sebelum mesin dimatikan', is_correct: false, order_index: 1 },
      { id: 'ans-q-b7-1-b', question_id: 'q-b7-1', answer_text: 'Cukup satu kali seminggu saat audit stok manajer', is_correct: false, order_index: 2 },
      { id: 'ans-q-b7-1-c', question_id: 'q-b7-1', answer_text: 'Hanya jika ada komplain langsung dari pelanggan di bar', is_correct: false, order_index: 3 },
      { id: 'ans-q-b7-1-d', question_id: 'q-b7-1', answer_text: 'Sebelum bar dibuka pagi hari, serta dicek ulang saat pergantian shift atau pembukaan kemasan bag kopi baru', is_correct: true, order_index: 4 },
    ],
  },
  {
    id: 'q-b7-2',
    quiz_id: 'quiz-b7',
    question_text: 'Jika espresso menghasilkan sensasi kering, berdebu, dan kesat menempel di lidah (astringent), fenomena ekstraksi apakah yang sedang terjadi?',
    question_type: 'multiple_choice',
    order_index: 2,
    explanation: 'Astringency adalah indikator klasik ekstraksi senyawa polifenol berbobot molekul tinggi yang larut saat jalur aliran air terfokus di satu retakan (channeling) sempit.',
    answers: [
      { id: 'ans-q-b7-2-a', question_id: 'q-b7-2', answer_text: 'Under-extraction akibat ukuran gilingan terlalu kasar', is_correct: false, order_index: 1 },
      { id: 'ans-q-b7-2-b', question_id: 'q-b7-2', answer_text: 'Kanalisasi (channeling) lokal yang memicu over-extraction parah pada jalur air tertentu di dalam puck', is_correct: true, order_index: 2 },
      { id: 'ans-q-b7-2-c', question_id: 'q-b7-2', answer_text: 'Biji kopi belum resting selama 30 menit', is_correct: false, order_index: 3 },
      { id: 'ans-q-b7-2-d', question_id: 'q-b7-2', answer_text: 'Suhu cangkir keramik yang digunakan terlalu dingin', is_correct: false, order_index: 4 },
    ],
  },
  {
    id: 'q-b7-3',
    quiz_id: 'quiz-b7',
    question_text: 'Bagaimana protokol terbaik barista untuk mengatasi kelelahan sensorik (palate fatigue) saat sesi kalibrasi mencicipi puluhan shot espresso?',
    question_type: 'multiple_choice',
    order_index: 3,
    explanation: 'Air putih bersuhu ruang dan biskuit netral (unsalted crackers) membersihkan sisa lipid dan asam dari papila lidah tanpa memicu stimulasi aroma baru.',
    answers: [
      { id: 'ans-q-b7-3-a', question_id: 'q-b7-3', answer_text: 'Menghisap rokok atau mengunyah permen mentol pedas', is_correct: false, order_index: 1 },
      { id: 'ans-q-b7-3-b', question_id: 'q-b7-3', answer_text: 'Meminum susu kental manis kental untuk melapisi lidah', is_correct: false, order_index: 2 },
      { id: 'ans-q-b7-3-c', question_id: 'q-b7-3', answer_text: 'Berkumur dengan air bersuhu ruang, meminum air netral, dan mengistirahatkan lidah dengan biskuit tawar netral', is_correct: true, order_index: 3 },
      { id: 'ans-q-b7-3-d', question_id: 'q-b7-3', answer_text: 'Menghirup bubuk kopi kering langsung dari hopper', is_correct: false, order_index: 4 },
    ],
  },
  {
    id: 'q-b8-1',
    quiz_id: 'quiz-b8',
    question_text: 'Jika pelanggan mengeluh bahwa pour over kopi specialty yang dipesannya terasa \'terlalu masam\', respons hospitality barista yang paling profesional adalah?',
    question_type: 'multiple_choice',
    order_index: 1,
    explanation: 'Hospitality berfokus pada pengalaman tamu. Barista profesional memvalidasi persepsi tamu, mengedukasi dengan bahasa membumi, dan memastikan tamu pulang dengan kepuasan.',
    answers: [
      { id: 'ans-q-b8-1-a', question_id: 'q-b8-1', answer_text: 'Mendengarkan dengan empati, menjelaskan profil fruity alami origin tersebut dengan analogi ramah, dan menawarkan opsi cangkir penyesuaian', is_correct: true, order_index: 1 },
      { id: 'ans-q-b8-1-b', question_id: 'q-b8-1', answer_text: 'Membantah pelanggan dan menyatakan bahwa lidah tamu belum terbiasa dengan specialty coffee', is_correct: false, order_index: 2 },
      { id: 'ans-q-b8-1-c', question_id: 'q-b8-1', answer_text: 'Menambahkan gula cair diam-diam ke dalam cangkir tamu', is_correct: false, order_index: 3 },
      { id: 'ans-q-b8-1-d', question_id: 'q-b8-1', answer_text: 'Menjelaskan rumus kimia asam malat secara arogan tanpa memberikan solusi', is_correct: false, order_index: 4 },
    ],
  },
  {
    id: 'q-b8-2',
    quiz_id: 'quiz-b8',
    question_text: 'Dalam komunikasi rasa ke pelanggan awam, mengapa analogi sensorik pengalaman lebih efektif dibanding deskriptor formal kaku?',
    question_type: 'multiple_choice',
    order_index: 2,
    explanation: 'Bahasa sensorik yang ramah menjembatani kesenjangan pengetahuan antara industri kopi spesialti dan konsumen umum, menumbuhkan apresiasi tanpa membuat tamu merasa dihakimi.',
    answers: [
      { id: 'ans-q-b8-2-a', question_id: 'q-b8-2', answer_text: 'Karena deskriptor resmi SCA dilarang secara hukum digunakan di luar ruangan kompetisi', is_correct: false, order_index: 1 },
      { id: 'ans-q-b8-2-b', question_id: 'q-b8-2', answer_text: 'Pelanggan tidak memiliki kemampuan membedakan rasa buah sama sekali', is_correct: false, order_index: 2 },
      { id: 'ans-q-b8-2-c', question_id: 'q-b8-2', answer_text: 'Agar barista tidak perlu mempelajari aroma wheel resmi', is_correct: false, order_index: 3 },
      { id: 'ans-q-b8-2-d', question_id: 'q-b8-2', answer_text: 'Analogi pengalaman (seperti \'segar jeruk manis madu\') menghubungkan memori rasa familiar yang mudah dipahami tanpa intimidasi', is_correct: true, order_index: 4 },
    ],
  },
  {
    id: 'q-b8-3',
    quiz_id: 'quiz-b8',
    question_text: 'Mengapa pelayanan (hospitality) di bar specialty dianggap memiliki bobot yang sama tingginya dengan presisi teknis penyeduhan?',
    question_type: 'multiple_choice',
    order_index: 3,
    explanation: 'Kopi terbaik di dunia akan terasa hambar jika disajikan dengan arogansi. Hospitality mengubah transaksi pembelian kopi menjadi pengalaman hubungan manusia yang berkesan.',
    answers: [
      { id: 'ans-q-b8-3-a', question_id: 'q-b8-3', answer_text: 'Semata-mata agar barista mendapatkan uang tip tunai lebih banyak', is_correct: false, order_index: 1 },
      { id: 'ans-q-b8-3-b', question_id: 'q-b8-3', answer_text: 'Kenyamanan dan interaksi personal yang hangat menentukan retensi pelanggan, persepsi nilai produk, dan loyalitas kedai', is_correct: true, order_index: 2 },
      { id: 'ans-q-b8-3-c', question_id: 'q-b8-3', answer_text: 'Hanya untuk menutupi kesalahan jika rasa kopi yang diseduh gagal', is_correct: false, order_index: 3 },
      { id: 'ans-q-b8-3-d', question_id: 'q-b8-3', answer_text: 'Agar pelanggan tidak memperhatikan waktu penyajian yang terlambat', is_correct: false, order_index: 4 },
    ],
  },
  {
    id: 'q-b9-1',
    quiz_id: 'quiz-b9',
    question_text: 'Berapakah masa resting (degassing CO2) ideal untuk biji kopi espresso sangrai medium sebelum dibuka segelnya untuk operasional komersial?',
    question_type: 'multiple_choice',
    order_index: 1,
    explanation: 'Biji kopi yang terlalu segar (< 7 hari) mengandung gas CO2 tinggi yang menyebabkan crema berbuih kasar dan turbulensi gas menghambat ekstraksi. Rentang 7-21 hari adalah puncak keseimbangan rasa espresso.',
    answers: [
      { id: 'ans-q-b9-1-a', question_id: 'q-b9-1', answer_text: '0 hingga 2 hari setelah keluar dari mesin sangrai', is_correct: false, order_index: 1 },
      { id: 'ans-q-b9-1-b', question_id: 'q-b9-1', answer_text: '60 hingga 90 hari setelah sangrai', is_correct: false, order_index: 2 },
      { id: 'ans-q-b9-1-c', question_id: 'q-b9-1', answer_text: '7 hingga 21 hari sejak tanggal sangrai (roast date)', is_correct: true, order_index: 3 },
      { id: 'ans-q-b9-1-d', question_id: 'q-b9-1', answer_text: 'Tepat 6 bulan di dalam gudang', is_correct: false, order_index: 4 },
    ],
  },
  {
    id: 'q-b9-2',
    quiz_id: 'quiz-b9',
    question_text: 'Penerapan prinsip FIFO (First-In, First-Out) dalam pengelolaan persediaan susu segar di chiller bar bertujuan untuk?',
    question_type: 'multiple_choice',
    order_index: 2,
    explanation: 'FIFO memastikan rotasi stok bahan baku segar berjalan tertib, mencegah susu basi terbuang, dan melindungi margin profitabilitas kedai dari waste.',
    answers: [
      { id: 'ans-q-b9-2-a', question_id: 'q-b9-2', answer_text: 'Memastikan stok susu dengan tanggal kedaluwarsa terdekat atau tiba lebih awal digunakan terlebih dahulu', is_correct: true, order_index: 1 },
      { id: 'ans-q-b9-2-b', question_id: 'q-b9-2', answer_text: 'Mencegah susu di kulkas membeku menjadi es batu', is_correct: false, order_index: 2 },
      { id: 'ans-q-b9-2-c', question_id: 'q-b9-2', answer_text: 'Mengocok emulsi lemak susu secara otomatis di rak', is_correct: false, order_index: 3 },
      { id: 'ans-q-b9-2-d', question_id: 'q-b9-2', answer_text: 'Memisahkan susu oat dengan susu almond di chiller', is_correct: false, order_index: 4 },
    ],
  },
  {
    id: 'q-b9-3',
    quiz_id: 'quiz-b9',
    question_text: 'Langkah operasional barista manakah yang paling efektif menekan pemborosan susu (milk waste) di bar dengan volume penjualan tinggi?',
    question_type: 'multiple_choice',
    order_index: 3,
    explanation: 'Menakar susu sesuai porsi pesanan mencegah kelebihan susu sisa di pitcher yang tidak boleh di-steam ulang demi standar kebersihan dan kualitas microfoam.',
    answers: [
      { id: 'ans-q-b9-3-a', question_id: 'q-b9-3', answer_text: 'Mengumpulkan sisa susu bekas steam dari pitcher ke pitcher sepanjang hari', is_correct: false, order_index: 1 },
      { id: 'ans-q-b9-3-b', question_id: 'q-b9-3', answer_text: 'Menggunakan pitcher dengan ukuran tepat porsi menu dan menakar volume susu dingin menggunakan skala mililiter sebelum di-steam', is_correct: true, order_index: 2 },
      { id: 'ans-q-b9-3-c', question_id: 'q-b9-3', answer_text: 'Mengganti seluruh susu segar dengan krimer bubuk instan', is_correct: false, order_index: 3 },
      { id: 'ans-q-b9-3-d', question_id: 'q-b9-3', answer_text: 'Mematikan chiller kulkas saat jam sepi untuk menghemat listrik', is_correct: false, order_index: 4 },
    ],
  },
  {
    id: 'q-b10-1',
    quiz_id: 'quiz-b10',
    question_text: 'Posisi tubuh barista yang benar saat melakukan tamping guna mencegah cedera muskuloskeletal (RSI dan Carpal Tunnel Syndrome) adalah?',
    question_type: 'multiple_choice',
    order_index: 1,
    explanation: 'Menjaga pergelangan tangan tetap netral lurus dengan lengan bawah 90 derajat mendistribusikan beban ke otot bahu dan punggung, mencegah tekanan kompresi pada saraf medianus pergelangan.',
    answers: [
      { id: 'ans-q-b10-1-a', question_id: 'q-b10-1', answer_text: 'Membengkokkan pergelangan tangan ke samping dengan tekanan penuh sendi jemari', is_correct: false, order_index: 1 },
      { id: 'ans-q-b10-1-b', question_id: 'q-b10-1', answer_text: 'Menekan portafilter sambil melompat bertumpu pada pinggul', is_correct: false, order_index: 2 },
      { id: 'ans-q-b10-1-c', question_id: 'q-b10-1', answer_text: 'Menggunakan telapak tangan kiri dan kanan secara bergantian', is_correct: false, order_index: 3 },
      { id: 'ans-q-b10-1-d', question_id: 'q-b10-1', answer_text: 'Lengan membentuk sudut siku vertikal 90° lurus dengan pergelangan tangan netral, memanfaatkan beban tubuh bagian atas', is_correct: true, order_index: 4 },
    ],
  },
  {
    id: 'q-b10-2',
    quiz_id: 'quiz-b10',
    question_text: 'Dalam prinsip tata letak \'Cockpit Bar Design\', bagaimana posisi grinder espresso, knock box, dan mesin espresso disusun?',
    question_type: 'multiple_choice',
    order_index: 2,
    explanation: 'Desain kokpit meminimalkan pergerakan langkah yang tidak perlu (footsteps waste), mempercepat speed-of-service, dan mengurangi kelelahan fisik barista selama shift sibuk.',
    answers: [
      { id: 'ans-q-b10-2-a', question_id: 'q-b10-2', answer_text: 'Ditempatkan di ujung ruangan terpisah agar meja bar depan terlihat luas', is_correct: false, order_index: 1 },
      { id: 'ans-q-b10-2-b', question_id: 'q-b10-2', answer_text: 'Ditaruh di bawah kolong meja kasir', is_correct: false, order_index: 2 },
      { id: 'ans-q-b10-2-c', question_id: 'q-b10-2', answer_text: 'Disusun dalam segitiga kerja ergonomis atau garis linear terpadu sehingga barista dapat berpindah hanya dalam 1-2 langkah kaki', is_correct: true, order_index: 3 },
      { id: 'ans-q-b10-2-d', question_id: 'q-b10-2', answer_text: 'Diletakkan menghadap pintu keluar kafe', is_correct: false, order_index: 4 },
    ],
  },
  {
    id: 'q-b10-3',
    quiz_id: 'quiz-b10',
    question_text: 'Tindakan mitigasi bahaya kerja yang wajib segera dilakukan saat terjadi tumpahan air panas boiler atau susu mendidih di lantai bar adalah?',
    question_type: 'multiple_choice',
    order_index: 3,
    explanation: 'Lantai basah di bar komersial adalah penyebab utama kecelakaan kerja tergelincir (slip and fall). Respons cepat melindungi seluruh staf dari bahaya luka bakar dan cedera fisik.',
    answers: [
      { id: 'ans-q-b10-3-a', question_id: 'q-b10-3', answer_text: 'Menunggu hingga lantai kering sendiri karena suhu ruangan bar hangat', is_correct: false, order_index: 1 },
      { id: 'ans-q-b10-3-b', question_id: 'q-b10-3', answer_text: 'Memberi peringatan verbal ke rekan tim di stasiun, memasang tanda lantai basah, dan segera membersihkan area dengan mop kering', is_correct: true, order_index: 2 },
      { id: 'ans-q-b10-3-c', question_id: 'q-b10-3', answer_text: 'Menaburkan ampas kopi basah di atas genangan air mendidih', is_correct: false, order_index: 3 },
      { id: 'ans-q-b10-3-d', question_id: 'q-b10-3', answer_text: 'Mematikan sekring listrik utama seluruh kafe', is_correct: false, order_index: 4 },
    ],
  },
];
