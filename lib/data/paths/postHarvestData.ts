import { LearningPath, Module, Lesson, Quiz, Question } from '../../types';

// ============================================================================
// 1. LEARNING PATH DEFINITION: POST-HARVEST & GREEN COFFEE PATH
// ============================================================================

export const POST_HARVEST_PATH: LearningPath = {
  id: 'path-post-harvest',
  title: 'Green Coffee & Post-Harvest Processing Specialist Path',
  slug: 'post-harvest-specialist',
  description:
    'Kuasai sains hulu kopi spesialti: taksonomi genetik varietas nusantara, agronomi tanah andosol vulkanik, manajemen petik merah 20°+ Brix, bioproses Giling Basah hingga Anaerobik & Inokulasi Ragi, serta standar defect grading SCA.',
  thumbnail_url:
    'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=800&auto=format&fit=crop&q=80',
  layer_type: 'specialization',
  prerequisite_path_id: 'path-foundation',
  target_role: 'farmer',
  level: 'full',
  is_free: false,
  is_published: true,
  estimated_hours: 25,
  total_modules: 6,
  created_at: '2026-08-10T00:00:00Z',
};

// ============================================================================
// 2. MODULES: POST-HARVEST PATH (MOD-P1 s/d MOD-P6)
// ============================================================================

export const POST_HARVEST_MODULES: Module[] = [
  {
    id: 'mod-p1',
    learning_path_id: 'path-post-harvest',
    title: 'Modul P-1: Taksonomi & Botani Kopi Spesialti Nusantara',
    description:
      'Genetika tanaman Coffea arabica (alotetraploid 44 kromosom) vs canephora & liberika, silsilah Typica, Bourbon, Tim-Tim, Sigarar Utang, dan Ateng Super.',
    order_index: 1,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
  },
  {
    id: 'mod-p2',
    learning_path_id: 'path-post-harvest',
    title: 'Modul P-2: Agronomi, Mikroklimat & Pengaruh Ketinggian (MDPL)',
    description:
      'Pengaruh elevasi 1.200 - 1.800 mdpl terhadap respirasi malam dan kepadatan selulosa, pohon naungan (agroforestri), serta kimiawi tanah andosol vulkanik.',
    order_index: 2,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
  },
  {
    id: 'mod-p3',
    learning_path_id: 'path-post-harvest',
    title: 'Modul P-3: Manajemen Panen Selektif & Refraktometer Brix',
    description:
      'Anatomi buah ceri (eksokarp, mesokarp, endokarp), penentuan tingkat kematangan panen menggunakan refraktometer optik 18-24° Brix, dan sortasi densitas perambangan (flotation).',
    order_index: 3,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
  },
  {
    id: 'mod-p4',
    learning_path_id: 'path-post-harvest',
    title: 'Modul P-4: Pasca Panen Klasik Nusantara: Giling Basah, Washed, Honey & Natural',
    description:
      'Sains dan mekanisme proses Giling Basah (Wet Hulled) khas Sumatra, Fully Washed (fermentasi pektin basah), Natural (pengeringan ceri utuh), dan variasi Yellow/Red/Black Honey.',
    order_index: 4,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
  },
  {
    id: 'mod-p5',
    learning_path_id: 'path-post-harvest',
    title: 'Modul P-5: Bioproses Eksperimental Modern: Anaerobik, Karbonik & Inokulasi Ragi',
    description:
      'Teknologi fermentasi anaerobik bioreaktor kedap udara, flushing gas CO2 murni (Carbonic Maceration), inokulasi Saccharomyces cerevisiae / Koji, dan teknik kejutan termal (thermal shock).',
    order_index: 5,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
  },
  {
    id: 'mod-p6',
    learning_path_id: 'path-post-harvest',
    title: 'Modul P-6: Protokol Pengeringan Presisi, Grading Fisik & Proteksi Hermetik',
    description:
      'Manajemen solar dryer & raised beds, kurva pengeringan bertahap 10-12% moisture, kalkulasi cacat fisik primer & sekunder SCA green coffee standard, serta pengemasan hermetik GrainPro.',
    order_index: 6,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
  },
];

// ============================================================================
// 3. LESSONS: POST-HARVEST PATH
// ============================================================================

export const POST_HARVEST_LESSONS: Lesson[] = [
  // --- Modul P-1: Taksonomi & Botani Kopi ---
  {
    id: 'les-p1-1',
    module_id: 'mod-p1',
    title: 'Taksonomi Kopi: Genetika Alotetraploid Arabika vs Diploid Canephora & Liberika',
    content: `
# Taksonomi & Botani Kopi: Memahami Fondasi Genetik Hulu

[DIAGRAM:cherry-anatomy]

Dalam genus *Coffea* (famili *Rubiaceae*), terdapat lebih dari 120 spesies tanaman kopi di dunia. Namun, dunia industri kopi komersial dan spesialti berpusat pada tiga spesies utama: **Coffea arabica**, **Coffea canephora** (Robusta), dan **Coffea liberica**.

---

### 1. Perbedaan Genetik & Sitologi Sel:

| Parameter Biologis | *Coffea arabica* (Arabika) | *Coffea canephora* (Robusta) | *Coffea liberica* (Liberika) |
|---|---|---|---|
| **Jumlah Kromosom** | **44 Kromosom (Alotetraploid, $2n = 4x = 44$)** | **22 Kromosom (Diploid, $2n = 2x = 22$)** | **22 Kromosom (Diploid, $2n = 2x = 22$)** |
| **Sistem Penyerbukan** | *Self-pollinating* (Penyerbukan mandiri / Autogam, ~95%) | *Cross-pollinating* (Penyerbukan silang / Allogam wajib) | *Cross-pollinating* (Penyerbukan silang oleh serangga) |
| **Kadar Kafein** | Rendah (**1.1% – 1.5%**) | Tinggi (**2.2% – 2.8%**) | Moderat (**1.2% – 1.5%**) |
| **Kadar Sukrosa (Gula)**| Tinggi (**6.0% – 9.0%**) | Rendah (**3.0% – 5.0%**) | Sedang (**5.0% – 7.0%**) |
| **Kadar Lipid (Minyak)**| Tinggi (**15.0% – 17.0%**) | Rendah (**10.0% – 11.5%**) | Sangat kaya lipid aromatik |
| **Ketahanan Hama Karat**| Sangat rentan jamur *Hemileia vastatrix* | Sangat tahan karat daun (*Leaf Rust*) | Tahan karat daun, toleran tanah gambut |

---

### 2. Sains di Balik Alotetraploid Arabika:
Mengapa Arabika memiliki cita rasa yang jauh lebih kompleks, manis, dan kaya asam buah daripada Robusta?
* Arabika adalah hasil hibridisasi alami purba antara dua spesies diploid: *Coffea canephora* dan *Coffea eugenioides* yang terjadi puluhan ribu tahun lalu di dataran tinggi Ethiopia.
* Sifat **alotetraploid (44 kromosom)** menggandakan materi genetik dan jalur sintesis enzimatik, memungkinkan Arabika memproduksi metabolit sekunder (seperti asam sitrat, asam malat, prekursor lipid, dan sukrosa) dalam konsentrasi yang jauh lebih tinggi.
* Sifat penyerbukan mandiri (*self-pollinating*) membuat kemurnian genetik varietas Arabika relatif stabil di kebun selama tidak terjadi kawin silang buatan.
    `,
    content_type: 'text',
    duration_minutes: 18,
    order_index: 1,
    is_free: true,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Analisis sitologi genetik tanaman kopi: alasan alotetraploid 44 kromosom Arabika menghasilkan sukrosa dan lipid lebih tinggi dibanding diploid Canephora.',
    key_takeaways: [
      'Coffea arabica bersifat alotetraploid (44 kromosom) dan melakukan penyerbukan mandiri (self-pollinating).',
      'Kandungan sukrosa Arabika (6-9%) hampir dua kali lipat lebih tinggi dari Robusta (3-5%), mendasari kompleksitas rasa manisnya.',
      'Robusta bersifat diploid (22 kromosom) dan kaya kafein serta asam klorogenat yang berfungsi sebagai pestisida alami tanaman.',
    ],
  },
  {
    id: 'les-p1-2',
    module_id: 'mod-p1',
    title: 'Varietas Unggul Nusantara: Typica, Tim-Tim, Sigarar Utang, dan Kartika',
    content: `
# Silsilah Varietas Kopi Nusantara: Dari Kolonial Belanda ke Laboratorium Pemuliaan

[DIAGRAM:varieties-tree]

Indonesia memiliki keanekaragaman varietas Arabika yang sangat unik akibat percampuran galur kuno warisan VOC dan inovasi pemuliaan Pusat Penelitian Kopi dan Kakao (Puslitkoka) Jember.

---

### 1. Typica (Galur Kuno Nusantara / Bergendal)
* **Sejarah**: Benih kopi pertama yang dibawa VOC dari Malabar (India) ke Batavia tahun 1696/1699. Sempat punah di dataran rendah akibat wabah Karat Daun (*Hemileia vastatrix*) pada tahun 1876, namun bertahan hidup di lereng-lereng gunung tinggi terpencil.
* **Karakter Agronomi**: Pohon berpostur ramping tinggi, percabangan renggang, daun muda berwarna perunggu kemerahan (*bronzy tips*), biji memanjang besar (*oval/elongated*). Produktivitas rendah.
* **Profil Cangkir**: Sangat bersih (*exceptional clean cup*), keasaman manis seperti teh melati, lemon segar, dan rasa manis madu tebu yang sangat elegan.
* **Sebaran Lokal**: Bergendal (Gayo), Juria (Flores Manggarai), Yellow Caturra (Bajawa).

---

### 2. Tim-Tim (*Hybrido de Timor* - HdT)
* **Asal-Usul**: Ditemukan secara spontan di Pulau Timor sekitar tahun 1927 sebagai hasil perkawinan alami antara *Coffea arabica* dan *Coffea canephora* (Robusta).
* **Keunggulan Biologis**: Membawa gen ketahanan karat daun (*SH3 gene*) dari Robusta sembari mempertahankan morfologi dan kualitas rasa Arabika. Menjadi induk genetik dari seluruh kelompok varietas *Catimor* di seluruh dunia.
* **Profil Cangkir**: Bodi tebal, sensasi herbal hangat, rempah manis, dan cokelat gelap. Sangat populer di dataran tinggi Gayo Aceh.

---

### 3. Sigarar Utang (Varietas Legendaris Sumatra Utara)
* **Arti Nama**: Berarti "Pelunas Hutang" dalam bahasa Batak Toba, karena pohonnya yang cepat berbuah dan menghasilkan panen lebat sepanjang tahun.
* **Asal**: Seleksi alam dari kelompok Catimor di kawasan Lintong Nihuta dan Danau Toba. Dilepas resmi oleh Kementan pada tahun 2005.
* **Karakter Agronomi**: Tipe kerdil (*semi-dwarf*), tajuk rimbun, ruas cabang sangat rapat, buah matang serempak dan berukuran besar.
* **Profil Cangkir**: Bodi sangat pekat (*syrupy body*), aroma rempah kayu manis, gula kelapa bakar, dan keasaman manis menyerupai jeruk keprok matang saat diolah dengan tepat.

---

### 4. Kartika & Andungsari
* **Andungsari 1 (AS 1)**: Varietas introduksi dari CIFC Portugal (galur Catimor 88) yang diuji dan dirilis oleh Puslitkoka Jember. Tahan karat daun pada elevasi >1.200 mdpl.
* **Kartika**: Merupakan singkatan dari *Kopi Arabika Tipe Kerdil Hasil Seleksi*. Memiliki potensi hasil tinggi (1.5–2.0 ton biji kering per hektar), sangat responsif terhadap pemupukan organik, dan menghasilkan profil asam buah sitrat yang sangat cerah.
    `,
    content_type: 'text',
    duration_minutes: 18,
    order_index: 2,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Eksplorasi silsilah varietas unggul kopi Indonesia: Typica Bergendal, hibrida alami Tim-Tim HdT, fenomena Sigarar Utang pelunas hutang, dan seleksi Puslitkoka.',
    key_takeaways: [
      'Typica adalah varietas tertua di Indonesia dengan daun muda perunggu dan profil rasa sangat floral dan bersih.',
      'Tim-Tim adalah hibrida alami Arabika x Robusta dari Pulau Timor yang menjadi nenek moyang ketahanan karat daun dunia.',
      'Sigarar Utang adalah varietas semi-dwarf produktif asal Danau Toba yang terkenal berkarakter bodi kental sirup dan manis gula kelapa.',
    ],
  },

  // --- Modul P-2: Agronomi & Elevasi MDPL ---
  {
    id: 'les-p2-1',
    module_id: 'mod-p2',
    title: 'Elevasi (MDPL), Suhu Malam Dingin, dan Kepadatan Selulosa Biji',
    content: `
# Sains Ketinggian: Mengapa MDPL Menentukan Kualitas Biji Kopi

Di kemasan kopi spesialti, parameter **ketinggian kebun (MDPL - Meter Di atas Permukaan Laut)** selalu dicantumkan dengan bangga (misal: *1.400 – 1.700 mdpl*). Secara fisiologi tumbuhan, ada alasan termodinamika dan metabolisme biokimia yang sangat nyata di balik angka tersebut.

---

### 1. Dinamika Laju Fotosintesis vs Respirasi Malam Hari
Tanaman kopi mengumpulkan energi melalui fotosintesis di siang hari dan membakar energi tersebut melalui proses respirasi di malam hari:

* **Di Dataran Rendah (< 900 mdpl)**:
  * Suhu siang panas dan suhu malam tetap hangat (22–26°C).
  * Pada malam hari, pohon kopi terus bernapas dengan cepat (*rapid cellular respiration*), membakar habis gula sukrosa yang baru diproduksi di siang hari.
  * Akibatnya: Buah matang terlalu cepat (hanya 6–7 bulan), menghasilkan biji berkepadatan rendah (*soft bean*) dengan rasa manis tipis dan dominan aroma tanah/kayu.

* **Di Dataran Tinggi (> 1.200 – 1.800 mdpl)**:
  * Suhu siang hangat sejuk (20–24°C), tetapi suhu malam hari anjlok drastis (**10–14°C**).
  * Udara malam yang dingin memperlambat respirasi tanaman hingga mendekati titik dorman parsial. Pohon **tidak membakar habis gula**, melainkan mengalirkannya masuk ke dalam endosperma buah ceri.
  * Buah membutuhkan waktu pematangan jauh lebih lambat (**8 hingga 10 bulan** di dahan).
  * Akumulasi lambat ini menghasilkan struktur dinding selulosa yang sangat padat (*Strictly Hard Bean* / SHB), keasaman organik kompleks (asam malat & fosfat), dan simpanan sukrosa yang melimpah.

---

### Korelasi Elevasi dengan Pembentukan Asam Organik:

| Ketinggian Elevasi | Suhu Rata-rata Tahunan | Laju Pematangan Buah | Kepadatan Biji (*Hardness*) | Profil Sensorik Cangkir |
|---|---|---|---|---|
| **> 1.600 mdpl** | 13°C – 18°C | Sangat Lambat (9–10 bulan) | *Strictly Hard Bean* (SHB) | Keasaman sitrat/malat cerah, floral anggun, teh melati, manis karamel tinggi |
| **1.200 – 1.500 mdpl**| 17°C – 21°C | Optimal (8–9 bulan) | *Hard Bean* (HB) | Bodi sedang-penuh, manis gula aren, cokelat, buah tropis seimbang |
| **800 – 1.100 mdpl** | 22°C – 25°C | Cepat (6–7 bulan) | *Semi-Hard Bean* | Keasaman rendah, bodi berat, nuansa kacang tanah, biskuit |
| **< 700 mdpl** | > 26°C | Sangat Cepat (< 6 bulan) | *Soft Bean* | Datar, rentan cacat biji hampa, aroma kayu |
    `,
    content_type: 'text',
    duration_minutes: 16,
    order_index: 1,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Kajian fisiologi tanaman: mekanisme suhu malam dingin memperlambat respirasi sel, memperpanjang masa pematangan buah ceri, dan menghasilkan biji SHB kaya sukrosa.',
    key_takeaways: [
      'Elevasi tinggi dengan suhu malam dingin (10-14°C) menekan laju respirasi tanaman sehingga gula sukrosa tersimpan utuh di dalam biji.',
      'Masa pematangan lambat (8-10 bulan) menghasilkan struktur sel padat (Strictly Hard Bean / SHB) yang kaya prekursor asam organik.',
      'Dataran rendah memicu respirasi malam cepat yang menghabiskan gula sukrosa, menghasilkan biji berkepadatan rendah yang hambar.',
    ],
  },
  {
    id: 'les-p2-2',
    module_id: 'mod-p2',
    title: 'Pohon Naungan (Agroforestri) & Kesuburan Tanah Andosol Vulkanik Nusantara',
    content: `
# Agroforestri & Tanah Vulkanik: Terroir Alami Kopi Indonesia

Keistimewaan tak tertandingi perkebunan kopi nusantara (dari Gayo, Mandheling, Sunda Hejo, Kintamani, hingga Flores Bajawa) berakar pada dua faktor lingkungan: sistem wanatani naungan (*shade-grown agroforestry*) dan lapisan tanah **Andosol vulkanik** dari cincin api (*Ring of Fire*).

---

### 1. Fungsi Fisiologis Pohon Naungan (*Shade Trees*)
Pohon naungan seperti Lamtoro (*Leucaena leucocephala*), Sengon (*Albizia*), Dadap (*Erythrina*), atau tanaman buah komersial (Alpukat, Pisang, Jeruk):
* **Penyaring Radiasi Matahari**: Daun kopi mengalami kejenuhan fotosintesis pada pencahayaan langsung yang terlalu terik. Naungan 30%–40% menjaga daun pada kapasitas fotosintesis optimal tanpa stres panas (*thermal stress*).
* **Fiksasi Nitrogen Alami**: Pohon legum (Lamtoro/Dadap) memiliki bintil akar bersimbiosis dengan bakteri *Rhizobium* yang mampu memfiksasi gas nitrogen ($N_2$) dari udara dan menyuplai nitrogen organik ke perakaran kopi tanpa ketergantungan pupuk sintetis urea.
* **Serasah Humus**: Daun naungan yang gugur membentuk lapisan mulsa organik tebal di lantai kebun, menjaga kelembapan mikro tanah dan mencegah erosi lereng terjal.

---

### 2. Karakteristik Kimiawi Tanah Andosol Vulkanik
Tanah Andosol terbentuk dari pelapukan abu dan batuan piroklastik letusan gunung berapi aktif:
* **Kandungan Mineral Alami**: Kaya akan unsur hara makro dan mikro esensial: Kalium ($K$), Fosfor ($P$), Magnesium ($Mg$), dan Kalsium ($Ca$).
* **Kapasitas Pengikatan Air**: Memiliki struktur remah berpori yang sangat gembur dengan retensi kelembapan tinggi namun drainase air berlebih yang luar biasa baik.
* **Derajat Keasaman (pH)**: Berada di rentang ideal untuk serapan hara tanaman kopi, yaitu **pH 5.5 hingga 6.5**.
* Mineral fosfat vulkanik yang melimpah diserap oleh sistem perakaran dan diintegrasikan menjadi asam fosfat organik, memberikan sensasi rasa *sparkling finish* yang menjadi ciri khas kopi-kopi vulkanik Indonesia.
    `,
    content_type: 'text',
    duration_minutes: 15,
    order_index: 2,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Manfaat sistem agroforestri naungan legum pemfiksasi nitrogen serta peran tanah Andosol vulkanik kaya mineral fosfor bagi mutu kopi Indonesia.',
    key_takeaways: [
      'Pohon naungan legum (Lamtoro/Dadap) menyuplai nitrogen alami melalui simbiosis bakteri bintil akar dan mencegah stres panas daun kopi.',
      'Tanah Andosol vulkanik kaya unsur kalium, magnesium, dan fosfat dengan retensi air optimal pada rentang pH 5.5 - 6.5.',
      'Kombinasi naungan dan tanah vulkanik memperkaya biosintesis asam organik dan rasa manis alami terroir lokal.',
    ],
  },

  // --- Modul P-3: Panen Selektif & Refraktometer Brix ---
  {
    id: 'les-p3-1',
    module_id: 'mod-p3',
    title: 'Anatomi Buah Kopi & Protokol Panen Petik Merah Sempurna (Selective Picking)',
    content: `
# Manajemen Petik Merah: Mengapa Kualitas Dimulai dari Petikan Ceri

[DIAGRAM:cherry-anatomy]

Biji kopi yang berada di cangkir Anda adalah **biji pelindung (endosperma)** di dalam buah ceri kopi. Segala bentuk pemrosesan pasca panen tercanggih di dunia tidak akan pernah mampu menambahkan rasa manis atau aroma jika buah ceri dipetik dalam kondisi belum matang (*unripe*).

---

### 1. Anatomi Lapisan Buah Ceri Kopi:

> **Urutan Lapisan Buah Ceri (Luar ke Dalam):**  
> Eksokarp (Kulit Luar) ➔ Mesokarp (Musilase) ➔ Endokarp (Kulit Tanduk) ➔ Silverskin (Kulit Ari) ➔ Endosperma (Biji Hijau)

1. **Eksokarp (*Skin / Pulp*)**: Lapisan kulit luar terluar yang berubah warna dari hijau $\\rightarrow$ kuning $\\rightarrow$ merah merona saat matang, mengandung antosianin dan senyawa aromatik.
2. **Mesokarp (*Mucilage / Lendir Buah*)**: Lapisan daging lendir transparan yang sangat kaya akan air, pektin, dan gula sederhana (*glukosa, fruktosa, sukrosa*). Inilah bahan bakar utama seluruh proses fermentasi pasca panen.
3. **Endokarp (*Parchment / Kulit Tanduk*)**: Lapisan pelindung keras berstruktur selulosa tebal yang membungkus biji kopi selama masa pengeringan.
4. **Spermoderm (*Silverskin / Kulit Ari*)**: Selaput tipis keperakan yang menempel langsung pada permukaan biji kopi.
5. **Endosperma (*Green Bean*)**: Biji kopi sejati yang kaya simpanan nutrisi, lipid, protein, dan asam klorogenat.

---

### 2. Bahaya Memetik Buah Hijau / Setengah Matang (*Under-ripe Picking*):
Petani komersial sering melakukan petik rambang (*strip picking*) di mana seluruh dahan disapu bersih tanpa memilah warna buah. Bagi kopi spesialti, ini adalah malapetaka:
* **Buah Hijau Mentah**: Mengandung kadar tannin dan asam klorogenat bebas yang sangat tinggi dengan kandungan sukrosa mendekati nol.
* Saat disangrai, buah hijau menjadi biji cacat **Quaker** (biji pucat yang tidak bisa mencokelat).
* Quaker menghasilkan seduhan beraroma jerami gosong, rasa asin getir berdebu, dan merusak rasa manis cangkir secara permanen.
* **Protokol Spesialti**: Toleransi buah hijau pada bak penerimaan pabrik pengolahan adalah **0% (Nol Persen)**.
    `,
    content_type: 'text',
    duration_minutes: 17,
    order_index: 1,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Anatomi detail 5 lapisan buah ceri kopi (eksokarp hingga endosperma) dan dampak destruktif biji quaker akibat panen buah hijau/setengah matang.',
    key_takeaways: [
      'Lapisan musilase (mesokarp) kaya gula sederhana glukosa/sukrosa yang menjadi bahan bakar bioproses fermentasi.',
      'Buah hijau mentah menghasilkan biji cacat Quaker yang tidak bisa terkaramelisasi dan beraroma jerami basi.',
      'Panen selektif petik merah 100% adalah prasyarat mutlak untuk menghasilkan kopi dengan skor di atas 80 poin.',
    ],
  },
  {
    id: 'les-p3-2',
    module_id: 'mod-p3',
    title: 'Pengujian Derajat Kemanisan Brix (18–24° Brix) & Pemisahan Densitas Rambang (Flotation)',
    content: `
# Sains Pengukuran Brix & Sortasi Flotasi Air

Bagaimana stasiun pengolahan (*wet mill*) memastikan objektivitas kematangan ceri yang disetor ratusan petani mitra? Jawabannya adalah dengan menggunakan alat **Refraktometer Optik Skala Brix** dan bak sortir **Flotation Separation**.

---

### 1. Refraktometer Brix (°Brix)
Skala Brix mengukur persentase konsentrasi sukrosa murni yang terlarut di dalam cairan getah buah ceri:
> ☕ **Persamaan Parameter:**
> **1^\circ\\text{ Brix} = 1\\text{ gram sukrosa per } 100\\text{ gram larutan}**

#### Protokol Pengujian Brix di Kebun:
1. Ambil sampel acak 20 butir ceri merah dari karung panen.
2. Peras tetesan getah lendir (*mucilage*) ceri langsung ke atas prisma kaca refraktometer optik atau digital.
3. Tutup pelat prisma dan arahkan ke sumber cahaya untuk membaca garis batas refraksi.

| Nilai Skala Brix | Status Kematangan Ceri | Potensi Kualitas Cangkir |
|---|---|---|
| **< 16° Brix** | Belum Matang / Kurang Optimal | Bodi tipis, rasa manis rendah, asam mentah tajam |
| **16° – 18° Brix** | Matang Standar | Kualitas komersial baik |
| **19° – 22° Brix** | **Matang Sempurna (*Sweet Spot*)** | Sangat ideal untuk Specialty Fully Washed & Honey |
| **23° – 25° Brix** | **Lewat Matang (*Overripe / Winey*)** | Sangat kaya gula, bahan baku terbaik Natural & Anaerobik |

---

### 2. Sortasi Densitas Bak Perambangan (*Flotation Sorting*)
Begitu ceri tiba di stasiun basah, langkah pertama sebelum dikupas adalah memasukkan seluruh ceri ke dalam kolam/bak air besar (*flotation tank*):

* **Floater (Ceri Mengapung)**:
  * Ceri yang mengapung di permukaan air memiliki massa jenis lebih rendah daripada air ($< 1.0\\ g/cm^3$).
  * Menandakan buah menderita cacat internal: biji hampa (*empty/pea bean*), terserang hama penggerek buah kopi (PBKo / *Hypothenemus hampei*), atau buah kering di dahan.
  * Ceri floater segera disaring keluar dan dipisahkan ke lot komersial kelas rendah.
* **Sinker (Ceri Tenggelam)**:
  * Ceri yang tenggelam kokoh di dasar bak memiliki densitas tinggi dengan perkembangan endosperma sempurna dan kandungan air/gula seimbang.
  * Ceri sinker inilah yang dialirkan menuju mesin pulper untuk diproses menjadi specialty coffee kelas dunia.
    `,
    content_type: 'text',
    duration_minutes: 16,
    order_index: 2,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Metode kuantitatif pengujian refraktometer brix (target 19-24° Brix) dan prinsip fisika pemisahan densitas ceri mengapung (floater) vs tenggelam (sinker).',
    key_takeaways: [
      'Ceri kopi specialty matang sempurna memiliki kadar gula lendir di rentang 19° hingga 24° Brix.',
      'Flotation sorting memisahkan ceri berdensitas rendah (floater akibat hama/hampa) dari ceri padat unggul (sinker).',
      'Membuang floater di bak air mencegah cacat bodi tipis dan kepahitan astringent pada seduhan akhir.',
    ],
  },

  // --- Modul P-4: Pasca Panen Klasik Nusantara ---
  {
    id: 'les-p4-1',
    module_id: 'mod-p4',
    title: 'Sains Proses Giling Basah (Wet Hulled) Sumatra: Porositas, Warna Giok, dan Karakter Herbal',
    content: `
# Sains Giling Basah (Wet Hulled / Asalan Sumatra)

[DIAGRAM:processing-comparison]

**Giling Basah** (dikenal di pasar internasional sebagai *Wet Hulled*) adalah metode pengolahan pasca panen asli Indonesia yang hampir secara eksklusif hanya dapat ditemukan di Sumatra (Aceh Gayo, Lintong, Mandheling, Kerinci) dan sebagian kecil Sulawesi Selatan (Toraja).

---

### Mengapa Lahir Tradisi Giling Basah di Sumatra?
Sumatra berada di wilayah iklim tropis khatulistiwa dengan curah hujan sangat tinggi (2.000–3.000 mm/tahun) dan kelembapan udara konstan (>85%). Pengeringan biji berkulit tanduk (*dry parchment*) hingga kadar air 11% membutuhkan waktu 2–3 minggu yang sering kali gagal akibat hujan lebat berkepanjangan. Giling Basah diciptakan oleh petani lokal untuk mempercepat perputaran uang modal secara drastis.

---

### Tahapan Kronologis Proses Giling Basah:

| Tahap | Aktivitas Pengolahan | Kadar Air Biji |
|---|---|---|
| **1. Pengupasan Kulit Ceri** | Ceri merah dikupas menggunakan depulper manual di kebun | ~55% – 60% |
| **2. Fermentasi Semalam** | Biji berlendir difermentasi dalam karung goni selama 12–18 jam untuk melunakkan lendir | ~50% |
| **3. Pencucian Sederhana** | Biji dibilas air di ember/sungai untuk merontokkan sebagian musilase | ~45% – 50% |
| **4. Pengeringan Awal (Pre-drying)**| Dijemur tipis di terpal halaman selama 1–2 hari hingga kulit tanduk mengeras | **~30% – 35% (Masih Lunak)** |
| **5. Pengupasan Basah (*Wet Hulling*)**| **Kulit tanduk dikupas paksa oleh mesin huller saat biji masih basah kenyal!** | **30% – 35%** |
| **6. Penjemuran Green Bean Telanjang**| Biji hijau tanpa kulit pelindung dijemur langsung di bawah terik matahari hingga kering | **11% – 12%** |

---

### Transformasi Biokimia & Karakteristik Unik Giling Basah:
1. **Warna Hijau Giok (*Deep Jade Green*)**: Pengupasan kulit tanduk saat biji masih basah merusak membran selulosa luar dan memicu oksidasi klorofil instan, memberikan rona warna hijau kebiruan gelap menyerupai batu giok.
2. **Porositas Sel Tinggi**: Tanpa proteksi kulit tanduk, biji menyerap panas dan kelembapan lingkungan secara cepat.
3. **Profil Sensori Khas**:
   * *Bodi Ekstrem Tebal (*Heavy Syrupy Body*)*: Akibat degradasi dinding sel dan pelepasan polisakarida larut air.
   * *Keasaman Rendah (*Muted Acidity*)*: Asam sitrat dan malat banyak yang terurai selama penjemuran terbuka tanpa cangkang.
   * *Nuansa Rasa*: Rempah hangat (*warm spices*), cedar wood, tembakau manis (*sweet pipe tobacco*), cokelat hitam pekat, dan aksen herbal segar (*earthy herbal notes*).
    `,
    content_type: 'text',
    duration_minutes: 20,
    order_index: 1,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Bedah ilmiah metode Giling Basah Sumatra: pengupasan kulit tanduk pada kadar air 30-35%, oksidasi klorofil hijau giok, serta pembentukan bodi tebal dan herbal.',
    key_takeaways: [
      'Giling Basah mengupas kulit tanduk saat biji masih berkadar air tinggi (30-35%), berbeda dari washed/natural dunia.',
      'Metode ini menghasilkan warna biji hijau kebiruan gelap (jade green) akibat oksidasi klorofil terbuka.',
      'Secara sensori, kopi Giling Basah menghasilkan bodi sangat tebal, keasaman lembut, dan aksen rempah tembakau herbal.',
    ],
  },
  {
    id: 'les-p4-2',
    module_id: 'mod-p4',
    title: 'Komparasi Fully Washed, Natural, dan Spektrum Honey (Yellow, Red, Black Honey)',
    content: `
# Spektrum Pengolahan Klasik: Washed, Natural, dan Honey

Di luar kekhasan Giling Basah, terdapat tiga metode pengolahan klasik internasional yang diaplikasikan untuk menghasilkan spektrum cita rasa yang berbeda:

---

### 1. Fully Washed (Wet Process / Kering Cangkang)
* **Metode**: Ceri dikupas (*depulped*), lalu direndam dalam bak air selama 24–36 jam agar enzim alami bakteri memecah seluruh lapisan lendir pektin (*mucilage*) hingga bersih kesat. Setelah itu, biji berkulit tanduk (*parchment*) dijemur hingga kadar air 11%.
* **Karakter Cangkir**: Menonjolkan rasa genetik murni varietas dan mineral terroir kebun. Memiliki kejernihan luar biasa (*clean cup*), keasaman sitrat/malat cerah (*vibrant acidity*), dan aroma bunga yang anggun.

---

### 2. Natural / Dry Process (Proses Kering Asli)
* **Metode**: Buah ceri kopi yang dipetik merah tidak dikupas sama sekali. Ceri utuh langsung dihamparkan di atas para-para jemur (*raised beds*) selama 15–25 hari sampai kulit luar menghitam kering seperti kismis dengan kadar air 11%.
* **Karakter Cangkir**: Gula buah di kulit dan lendir diserap ke dalam biji selama penjemuran lambat. Menghasilkan bodi tebal berminyak, keasaman anggur (*winey*), serta aroma buah matang eksotis (nangka, stroberi matang, mangga, dan selai bluberi).

---

### 3. Spektrum Proses Honey (Pulped Natural)
Pada proses Honey, kulit ceri luar dikupas, tetapi **sebagian atau seluruh lapisan lendir manis (*mucilage*) dibiarkan menempel pada biji** selama penjemuran:

| Kategori Honey | Persentase Mucilage Tersisa | Penanganan Penjemuran | Karakteristik Sensori |
|---|---|---|---|
| **Yellow Honey** | **~25% – 50% lendir** (Dibilas sebagian) | Dijemur di bawah sinar matahari penuh; sering dibolak-balik | Keasaman cerah bersih, manis madu ringan, bodi sedang |
| **Red Honey** | **~50% – 75% lendir** | Dijemur di area semi-teduh; durasi jemur lebih lambat | Manis karamel pekat, nuansa buah ceri merah dan plum |
| **Black Honey** | **100% lendir utuh** (Tanpa dibilas) | Dijemur di bawah naungan jaring penahan; proses jemur paling lambat | Bodi sangat kental menyerupai sirup kental, kaya gula aren, aftertaste cokelat panjang |
    `,
    content_type: 'text',
    duration_minutes: 18,
    order_index: 2,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Komparasi komprehensif Fully Washed (kejernihan terroir), Natural (aroma buah eksotis), dan spektrum Yellow, Red, hingga Black Honey.',
    key_takeaways: [
      'Fully Washed menghilangkan seluruh lendir sebelum jemur untuk menghasilkan profil rasa paling bersih dan keasaman cerah.',
      'Natural menjemur ceri utuh bersama kulitnya, menghasilkan bodi tebal dan aroma buah tropis fermentasi manis.',
      'Black Honey mempertahankan 100% lapisan lendir musilase, menghasilkan kemanisan ekstrem seperti sirup gula aren.',
    ],
  },

  // --- Modul P-5: Bioproses Eksperimental Modern ---
  {
    id: 'les-p5-1',
    module_id: 'mod-p5',
    title: 'Fermentasi Anaerobik & Carbonic Maceration: Kontrol Suhu 16–20°C, Tekanan, dan Kurva pH',
    content: `
# Bioproses Modern: Fermentasi Anaerobik Presisi Tinggi

Revolusi kopi spesialti kontemporer didorong oleh adopsi ilmu mikrobiologi dan teknologi fermentasi anggur (*winemaking*). Dua metode paling bergengsi di kompetisi barista dunia adalah **Anaerobic Fermentation** dan **Carbonic Maceration**.

---

### 1. Fermentasi Anaerobik (*Sealed Bioreactor*)
Fermentasi tradisional berlangsung di bak terbuka dengan paparan oksigen bebas, di mana bakteri pembusuk liar dapat masuk tak terkendali. 
* Pada fermentasi anaerobik, ceri kopi (atau biji pulped) dimasukkan ke dalam tong kedap udara (*food-grade sealed tanks*) yang dilengkapi dengan katup pelepas gas satu arah (*one-way airlock valve*).
* **Ketiadaan Oksigen**: Menekan pertumbuhan ragi liar pembusuk dan jamur kapang aerobik (*molds*).
* Bakteri asam laktat (*Lactobacillus*) mendominasi lingkungan, mengubah glukosa menjadi **asam laktat murni**, menghasilkan sensasi *creamy mouthfeel* menyerupai yogurt, susu kental manis, atau mentega buah.

---

### 2. Carbonic Maceration (CM)
Dipopulerkan di industri kopi oleh Sasa Sestic (World Barista Champion 2015):
* Tangki baja tahan karat (*stainless steel tank*) yang telah diisi buah ceri utuh di-flushing dengan **gas karbon dioksida murni ($CO_2$)** hingga seluruh udara beroksigen terdorong keluar 100%.
* Di bawah atmosfer bertekanan $CO_2$, terjadi proses maserasi intraseluler di mana fermentasi berlangsung di dalam daging sel ceri dari dalam ke luar (*enzymatic breakdown inside the grape/cherry skin*).
* Menghasilkan molekul volatil ester yang luar biasa harum dengan aroma bunga mawar pekat, permen karet buah (*bubblegum*), raspberi, dan pisang manis.

---

### 3. Tiga Variabel Kunci Pengendalian Bioreaktor:

| Parameter | Target Pengendalian | Dampak Deviasi Jika Lalai |
|---|---|---|
| **Suhu Lingkungan Bioreaktor** | **16°C – 20°C (Suhu Terkendali)** | Jika $>28°C$, laju fermentasi tak terkendali memicu aroma cuka aseton busuk |
| **Derajat Keasaman (pH)** | Monitor penurunan dari **pH 5.5 $\\rightarrow$ pH 3.8 – 4.0** | Hentikan fermentasi jika $\\text{pH} < 3.7$ untuk mencegah asam cuka berlebih |
| **Tekanan Tangki (*Pressure*)** | **0.5 – 1.0 bar** di atas tekanan atmosfer | Tekanan terkontrol membantu difusi molekul rasa manis masuk ke inti endosperma |
    `,
    content_type: 'text',
    duration_minutes: 20,
    order_index: 1,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Sains fermentasi anaerobik presisi: dominasi bakteri asam laktat, teknologi Carbonic Maceration gas CO2, dan monitoring ketat pH 3.8-4.0 pada suhu 16-20°C.',
    key_takeaways: [
      'Fermentasi anaerobik dalam bioreaktor kedap udara menekan mikroba aerobik dan mengoptimalkan produksi asam laktat lembut creamy.',
      'Carbonic Maceration menggunakan gas CO2 murni untuk memicu maserasi enzimatik intraseluler penghasil aroma floral buah permen.',
      'Fermentasi wajib dipantau menggunakan pH meter; proses dihentikan saat keasaman mencapai pH 3.8 - 4.0.',
    ],
  },
  {
    id: 'les-p5-2',
    module_id: 'mod-p5',
    title: 'Inokulasi Ragi Terseleksi (Yeast Inoculation) dan Teknologi Thermal Shock Processing',
    content: `
# Inokulasi Ragi & Thermal Shock: Merancang Profil Rasa Kopi Masa Depan

Batas akhir rekayasa cita rasa kopi di tingkat prosesor pasca panen melibatkan penggunaan galur ragi terisolasi dan manipulasi suhu kejut (*thermal shock*).

---

### 1. Inokulasi Ragi Terseleksi (*Targeted Yeast Inoculation*)
Daripada membiarkan mikrobioma liar bekerja secara acak, prosesor profesional menginokulasi galur mikroorganisme kultur murni:
* **Saccharomyces cerevisiae (Kultur Ragi Anggur/Bir)**: Mengonsumsi gula lendir dengan sangat efisien dan menghasilkan senyawa volatil ester bunga (*phenylethyl alcohol*) dan aroma buah pir/apel.
* **Koji (*Aspergillus oryzae*)**: Jamur filamentosa yang memproduksi enzim protease dan amilase masif, memecah pati kompleks menjadi gula sederhana manis dan asam amino bebas pembentuk sensasi rasa gurih manis umami yang mendalam.

---

### 2. Teknologi Kejutan Termal (*Thermal Shock Processing*)
Dipelopori oleh prosesor inovatif seperti Diego Bermudez (Finca El Paraiso, Kolombia):
1. **Fase Panas (Thermal Shock)**: Ceri atau biji kopi yang baru dikupas dipapar air panas bersuhu **45°C – 50°C** selama beberapa menit. Suhu panas ini membuka pori-pori selulosa biji dan menonaktifkan mikroorganisme liar di permukaan.
2. **Fase Dingin (Cold Shock)**: Segera bilas dan rendam biji dalam air es bersuhu **12°C – 15°C**.
3. **Mekanisme Fisik**: Penurunan suhu mendadak membekukan dan mengunci (*lock-in*) senyawa aroma volatil hasil fermentasi ke dalam pori-pori mikroskopis biji sebelum sempat menguap ke udara.
4. **Hasil Sensori**: Kopi hasil thermal shock memiliki intensitas aroma yang luar biasa meledak (*aromatic bomb*), dengan nuansa buah persik, sirup leci, dan vanili yang bertahan stabil hingga berbulan-bulan.
    `,
    content_type: 'text',
    duration_minutes: 17,
    order_index: 2,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Teknologi inokulasi ragi murni Saccharomyces cerevisiae/Koji dan protokol thermal shock (kejut panas 45-50°C dilanjutkan air es 12-15°C) untuk mengunci senyawa aroma volatil.',
    key_takeaways: [
      'Inokulasi ragi terseleksi (Saccharomyces cerevisiae) menjamin konsistensi sintesis ester aroma bunga dan buah tropis.',
      'Thermal shock menggunakan air panas 45-50°C untuk membuka pori selulosa lalu air dingin 12-15°C untuk mengunci aroma volatil ke dalam biji.',
      'Metode ini menghasilkan stabilitas dan intensitas aroma spektakuler yang sangat dicari di ajang kompetisi dunia.',
    ],
  },

  // --- Modul P-6: Pengeringan Presisi, Grading & GrainPro ---
  {
    id: 'les-p6-1',
    module_id: 'mod-p6',
    title: 'Protokol Pengeringan Presisi di Raised Beds: Mencegah Case Hardening',
    content: `
# Pengeringan Presisi: Menjaga Struktur Seluler Biji Menuju Kadar Air 11%

Banyak petani kopi gagal menyadari bahwa **pengeringan (*drying*) adalah tahap paling kritis dari seluruh rantai pasca panen**. Biji kopi dengan potensi skor 88 poin bisa hancur menjadi 78 poin jika dikeringkan secara terburu-buru atau mengalami fenomena pengerasan cangkang luar (*case hardening*).

---

### 1. Keunggulan Para-Para Jemur Bertingkat (*Raised Drying Beds*)
Menjemur kopi langsung di atas lantai semen atau aspal jalan adalah praktik terburuk yang harus ditinggalkan:
* Aspal panas mentransfer panas konduksi liar (>50°C) yang mematikan embrio biji.
* **Raised Beds dengan Jaring Kasa Plastik**: Memungkinkan sirkulasi udara konveksi alami mengalir dari bawah tumpukan biji, menguapkan air secara seragam di kedua sisi tanpa kontak tanah kotor.
* Penggunaan atap plastik UV transparan (*Greenhouse Solar Dryer*) melindungi tumpukan kopi dari air hujan mendadak dan embun malam basah.

---

### 2. Bahaya Case Hardening (Kulit Luar Keras, Inti Dalam Basah)
* **Penyebab**: Menjemur biji kopi di bawah terik matahari ekstrem tanpa naungan di hari-hari pertama. Lapisan permukaan luar biji mengering terlalu cepat dan mengeras menjadi cangkang kedap air.
* **Dampak**: Air di inti dalam biji terperangkap dan tidak bisa keluar lagi.
* Saat diukur dengan alat ukur kadar air biasa, biji tampak sudah kering di angka 11%. Namun, beberapa minggu kemudian di dalam karung, air internal merembes keluar memicu kebusukan kapang dan rasa apak basi.

#### Protokol Pengeringan Bertahap Ideal:
* **Hari 1 – 4**: Jemur di bawah paranet peneduh (reduksi sinar matahari 50%) agar pelepasan air awal berlangsung perlahan dan merata.
* **Hari 5 – 14**: Buka paranet untuk penjemuran optimal, bolak-balik tumpukan biji kopi secara konsisten setiap **2 jam sekali**.
* **Target Akhir**: Hentikan penjemuran saat kadar air mencapai **10.5% – 11.5%** dan water activity ($a_w$) berada di bawah **0.60**.
    `,
    content_type: 'text',
    duration_minutes: 17,
    order_index: 1,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Protokol pengeringan bertahap di raised beds: pencegahan case hardening via naungan awal paranet, pembalikan biji 2 jam sekali, dan stabilisasi kadar air 10.5-11.5%.',
    key_takeaways: [
      'Raised beds dengan sirkulasi udara bawah mencegah pembusukan dan memastikan penguapan air seragam.',
      'Case hardening terjadi jika biji dipapar panas terik mendadak sehingga permukaan luar mengeras saat inti masih basah.',
      'Biji kopi wajib dibolak-balik secara berkala setiap 2 jam untuk mencegah pembentukan jamur di lapisan dasar jemuran.',
    ],
  },
  {
    id: 'les-p6-2',
    module_id: 'mod-p6',
    title: 'Standar Grading Cacat Fisik SCA (Green Coffee Defect Standard) & Pengemasan Hermetik GrainPro',
    content: `
# Standar Cacat Biji Mentah SCA & Proteksi Kantong Hermetik

Sebelum sebuah lot green bean diekspor ke pembeli internasional atau roastery specialty, sampel seberat **350 gram** wajib disortir secara manual di atas meja grading untuk menghitung nilai cacat fisik berdasarkan standar **SCA Green Coffee Defect Guide**.

---

### 1. Klasifikasi Cacat Primer vs Cacat Sekunder (Sampel 350g):

#### A. Cacat Primer (*Primary Defects* / Cacat Mutlak):
Untuk masuk kategori **Specialty Grade (Grade 1)**, dalam sampel 350 gram **TIDAK BOLEH ADA SATU PUN CACAT PRIMER (0 Primary Defect)**!
1. **Full Black (Biji Hitam Total)**: 1 biji = 1 nilai cacat penuh. Disebabkan oleh fermentasi berlebih atau buah mati di pohon.
2. **Full Sour (Biji Asam Cuka Total)**: 1 biji = 1 nilai cacat penuh. Disebabkan oleh bakteri fermentasi busuk.
3. **Dried Cherry / Pod**: 1 buah utuh = 1 nilai cacat. Ceri utuh yang lolos dari mesin pulper.
4. **Fungus Damage (Biji Berjamur)**: 1 biji = 1 nilai cacat. Infeksi spora jamur aktif pembawa racun mikotoksin.
5. **Foreign Matter (Benda Asing)**: 1 batu besar atau tongkat kayu = 1 nilai cacat.
6. **Severe Insect Damage (Lubang Hama Parah)**: 5 biji berlubang = 1 nilai cacat.

#### B. Cacat Sekunder (*Secondary Defects* / Cacat Ringan):
Spesialti Grade 1 memperbolehkan **maksimal 5 nilai cacat sekunder**:
1. **Partial Black**: 3 biji = 1 nilai cacat.
2. **Partial Sour**: 3 biji = 1 nilai cacat.
3. **Floater (Biji Putih Pucat)**: 5 biji = 1 nilai cacat.
4. **Broken / Chipped (Biji Pecah Terbelah)**: 5 biji = 1 nilai cacat (akibat mesin depulper/huller tidak terkalibrasi).
5. **Slight Insect Damage**: 10 biji = 1 nilai cacat.

---

### 2. Perlindungan Kemasan Hermetik (*GrainPro / Ecotact*)
Karung goni tradisional berbahan serat rami memiliki pori-pori terbuka yang membuat green bean rentan menyerap kelembapan udara tropis, bau busuk gudang, dan serangga kutu beras.
* **Plastik Hermetik Khusus (*Ultra-High Barrier Multilayer Plastic*)**:
  * Menahan laju transmisi oksigen ($OTR$) dan uap air ($WVTR$) mendekati nol.
  * Karbon dioksida alami respirasi biji terperangkap di dalam kantong, menciptakan atmosfer vakum mini yang mematikan telur serangga dan jamur secara anaerobik alami.
  * Menjaga kesegaran lipid dan stabilitas kadar air 11% hingga **12 hingga 18 bulan** penyimpanan.
    `,
    content_type: 'text',
    duration_minutes: 18,
    order_index: 2,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Katalog cacat fisik green bean standar SCA sampel 350g (maks 0 primer dan 5 sekunder untuk Grade 1) serta sains pelindung kantong hermetik GrainPro.',
    key_takeaways: [
      'Specialty Grade 1 mewajibkan 0 cacat primer dan maksimal 5 cacat sekunder dalam sampel 350 gram green bean.',
      'Cacat primer meliputi Full Black, Full Sour, Jamur aktif, dan Benda Asing yang merusak rasa secangkir kopi total.',
      'Kemasan hermetik GrainPro menjaga kelembapan 11% dan mengunci kesegaran green bean hingga 18 bulan penyimpanan.',
    ],
  },

  {
    id: 'les-p1-3',
    module_id: 'mod-p1',
    title: 'Klon Hibrida Lokal: Tim-Tim, Sigarar Utang, Ateng Super, dan Ketahanan Karat Daun (CLR)',
    content: `# Klon Hibrida Lokal: Tim-Tim, Sigarar Utang, dan Ketahanan Karat Daun

Sejarah perkebunan kopi Indonesia diwarnai oleh perjuangan melawan jamur karat daun (*Coffee Leaf Rust / Hemileia vastatrix*) yang memusnahkan perkebunan Typica Nusantara pada akhir abad ke-19. Dari krisis tersebut, lahirlah varietas hibrida lokal yang kini menjadi identitas kebanggaan Indonesia.

---

### 1. Hibrido de Timor (HdT) & Varietas Tim-Tim

* Pada tahun 1917 di Pulau Timor, ditemukan tanaman mutasi alami persilangan spontan antara *Coffea arabica* (44 kromosom) dan *Coffea canephora / Robusta* (22 kromosom). Tanaman ini mewarisi ketahanan genetik Robusta terhadap karat daun, namun tetap mempertahankan rasa halus Arabika.
* Di dataran tinggi Aceh Gayo, keturunan HdT dibudidayakan secara luas dengan nama **Tim-Tim**. Karakter rasanya tebal, kaya rempah (*herbal/earthy*), dan memiliki bodi mantap.

---

### 2. Sigarar Utang (Varietas "Pembayar Utang")

* Dilepas resmi oleh Kementerian Pertanian dari Sumatera Utara (Lintong Ni Huta). Dinamakan *Sigarar Utang* dalam bahasa Batak karena sifatnya yang berbuah cepat dan sangat lebat sehingga petani dapat melunasi utang modal kebun dalam waktu singkat.
* Pohonnya bertipe kerdil (*semi-dwarf*) sehingga memudahkan pemetikan, dengan buah ceri besar dan kandungan gula lendir mucilage yang manis pekat.`,
    content_type: 'text',
    duration_minutes: 15,
    order_index: 3,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Materi mendalam Klon Hibrida Lokal: Tim-Tim, Sigarar Utang, Ateng Super, dan Ketahanan Karat Daun (CLR) dengan sains agronomi pasca panen dan pengolahan biji kopi modern.',
    key_takeaways: [
      'Pahami pengaruh genetik varietas lokal dan kesuburan tanah vulkanik terhadap kualitas biji.',
      'Kuasai metode fermentasi terkendali (inokulasi ragi, thermal shock) untuk diversifikasi rasa.',
      'Gunakan teknologi pengemasan hermetik GrainPro untuk melindungi kadar air dan stabilitas rasa green bean.'
    ],
  },
  {
    id: 'les-p2-3',
    module_id: 'mod-p2',
    title: 'Kimia Tanah Vulkanik: Unsur Hara Makro/Mikro (Nitrogen, Kalium, Fosfor) dan Prekursor Gula',
    content: `# Kimia Tanah Vulkanik: Mengapa Kopi Kepulauan Indonesia Begitu Kaya Rasa?

Indonesia berada tepat di jalur Cincin Api Pasifik (*Ring of Fire*). Abu vulkanik dari ratusan gunung berapi aktif memberikan berkah kesuburan mineral tanah yang tak tertandingi di dunia pertanian kopi.

---

### 1. Peran Mineral Tanah Andosol Vulkanik

Tanah vulkanik (Andosol) memiliki struktur remah berpori yang mampu menyimpan cadangan air hujan sekaligus memiliki drainase yang sangat baik:
* **Kalium (K)**: Mineral kunci pembentuk glukosa dan sukrosa selama fotosintesis. Kalium yang melimpah pada abu vulkanik menghasilkan ceri kopi dengan nilai Brix kemanisan alami tinggi (20°–24° Brix).
* **Fosfor (P)**: Berperan dalam transfer energi sel (ATP) dan pembentukan asam fosfat organik. Inilah yang menciptakan sensasi kilau keasaman yang mewah (*sparkling effervescence*) pada kopi-kopi seperti Kintamani Bali dan Kerinci.
* **Bahan Organik Humus**: Lapisan daun pohon pelindung yang membusuk secara alami menyediakan nitrogen organik pelepasan lambat (*slow release*) tanpa pupuk sintetis kimiawi.`,
    content_type: 'text',
    duration_minutes: 15,
    order_index: 3,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Materi mendalam Kimia Tanah Vulkanik: Unsur Hara Makro/Mikro (Nitrogen, Kalium, Fosfor) dan Prekursor Gula dengan sains agronomi pasca panen dan pengolahan biji kopi modern.',
    key_takeaways: [
      'Pahami pengaruh genetik varietas lokal dan kesuburan tanah vulkanik terhadap kualitas biji.',
      'Kuasai metode fermentasi terkendali (inokulasi ragi, thermal shock) untuk diversifikasi rasa.',
      'Gunakan teknologi pengemasan hermetik GrainPro untuk melindungi kadar air dan stabilitas rasa green bean.'
    ],
  },
  {
    id: 'les-p3-3',
    module_id: 'mod-p3',
    title: 'Protokol Pemisahan Rambang (Floatation Sorting) & Pemilahan Buah Rusak di Kebun',
    content: `# Protokol Pemisahan Rambang (Floatation Sorting) di Stasiun Basah

Setelah pemetikan ceri merah selektif di kebun selesai, tahap pemrosesan pertama yang paling krusial di stasiun basah (*wet mill*) adalah **Uji Rambang Air (Floatation Tank)**.

---

### 1. Prinsip Hidrostatis Uji Rambang

Ceri kopi segar yang baru dipanen dimasukkan ke dalam bak air besar:
* **Ceri Tenggelam (*Sinkers / Ceri Bernas*)**: Ceri yang matang sempurna memiliki massa jenis lebih besar dari air (> 1.0 g/cm³). Embrio biji di dalamnya padat berisi nutrisi dan gula. Hanya ceri tenggelam inilah yang diproses menjadi grade Specialty Coffee!
* **Ceri Mengapung (*Floaters / Ceri Rambang*)**: Ceri yang mengambang di permukaan air memiliki rongga udara di dalamnya. Penyebabnya adalah serangan hama penggerek buah kopi (PBKo / *Hypothenemus hampei*), buah layu kering di dahan, atau biji kopong. Ceri floaters harus segera diserok dan dipisahkan menjadi grade komersial biasa.`,
    content_type: 'text',
    duration_minutes: 14,
    order_index: 3,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Materi mendalam Protokol Pemisahan Rambang (Floatation Sorting) & Pemilahan Buah Rusak di Kebun dengan sains agronomi pasca panen dan pengolahan biji kopi modern.',
    key_takeaways: [
      'Pahami pengaruh genetik varietas lokal dan kesuburan tanah vulkanik terhadap kualitas biji.',
      'Kuasai metode fermentasi terkendali (inokulasi ragi, thermal shock) untuk diversifikasi rasa.',
      'Gunakan teknologi pengemasan hermetik GrainPro untuk melindungi kadar air dan stabilitas rasa green bean.'
    ],
  },
  {
    id: 'les-p4-3',
    module_id: 'mod-p4',
    title: 'Proses Natural & Honey: Yellow, Red, Black Honey dan Dinamika Ketebalan Mucilage',
    content: `# Proses Natural & Honey: Seni Memanfaatkan Lapisan Manis Mucilage

Pada metode pengolahan kering (*Dry Process*) dan semi-kering (*Honey Process*), lapisan lendir berdaging manis (*mucilage*) dibiarkan menempel pada kulit tanduk selama proses penjemuran di bawah sinar matahari.

---

### 1. Perbedaan Spektrum Kopi Honey

Nama "Honey" sama sekali tidak melibatkan madu lebah asli, melainkan merujuk pada tekstur lengket mucilage manis seperti madu:
* **Yellow Honey (25% Mucilage)**: Sebagian besar lendir dikupas mesin demucilager. Dijemur di bawah sinar matahari langsung selama 8–10 hari. Menghasilkan rasa asam buah cerah segar dengan sedikit sentuhan manis bunga.
* **Red Honey (50% Mucilage)**: Setengah lendir disisakan. Dijemur di area sedikit teduh selama 12–15 hari. Karakter rasa buah merah manis seperti stroberi dan apel merah.
* **Black Honey (100% Mucilage Utuh)**: Seluruh lendir disisakan tanpa dicuci. Dijemur di bawah naungan jaring peneduh (*paranet*) selama 20–25 hari. Gula mengalami karamelisasi lambat di atas kulit tanduk, menghasilkan cangkir kopi yang sangat manis kental layaknya selai buah plum hitam dan cokelat karamel.`,
    content_type: 'text',
    duration_minutes: 15,
    order_index: 3,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Materi mendalam Proses Natural & Honey: Yellow, Red, Black Honey dan Dinamika Ketebalan Mucilage dengan sains agronomi pasca panen dan pengolahan biji kopi modern.',
    key_takeaways: [
      'Pahami pengaruh genetik varietas lokal dan kesuburan tanah vulkanik terhadap kualitas biji.',
      'Kuasai metode fermentasi terkendali (inokulasi ragi, thermal shock) untuk diversifikasi rasa.',
      'Gunakan teknologi pengemasan hermetik GrainPro untuk melindungi kadar air dan stabilitas rasa green bean.'
    ],
  },
  {
    id: 'les-p5-3',
    module_id: 'mod-p5',
    title: 'Inokulasi Ragi Terpilih (Saccharomyces cerevisiae) & Teknik Thermal Shock',
    content: `# Fermentasi Terkendali Modern: Ragi Terpilih dan Thermal Shock

Revolusi mikrobiologi telah mengubah stasiun pasca panen dari tempat penjemuran tradisional menjadi laboratorium bioteknologi presisi tinggi.

---

### 1. Inokulasi Strain Ragi Spesifik (Yeast Inoculation)

Alih-alih mengandalkan ragi liar dari udara sekitar yang tidak terduga, prosesor modern menyuntikkan kultur ragi terisolasi murni:
* **Saccharomyces cerevisiae (Wine Yeast)**: Menghasilkan ester buah (*fruit esters*) berbobot aromatik seperti buah persik (*peach*), markisa, dan bunga mawar.
* **Koji Fermentation (*Aspergillus oryzae*)**: Jamur koji jepang menguraikan makromolekul pati biji kopi menjadi asam amino asam glutamat, menghasilkan sensasi gurih manis (*umami*) dan bodi bulat luar biasa.

---

### 2. Sains di Balik Thermal Shock

Setelah fermentasi hangat (35°C – 40°C) selesai, ceri kopi disiram air es bersuhu 4°C – 8°C secara tiba-tiba (*thermal shock*):
* Perubahan suhu ekstrem secara instan membunuh sel mikroorganisme fermentasi, menghentikan pembusukan asam cuka secara presisi.
* Poros sel kulit tanduk menyusut seketika (*cell contraction*), mengunci senyawa ester dan asam aromatik volatil di dalam inti biji kopi selamanya!`,
    content_type: 'text',
    duration_minutes: 15,
    order_index: 3,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Materi mendalam Inokulasi Ragi Terpilih (Saccharomyces cerevisiae) & Teknik Thermal Shock dengan sains agronomi pasca panen dan pengolahan biji kopi modern.',
    key_takeaways: [
      'Pahami pengaruh genetik varietas lokal dan kesuburan tanah vulkanik terhadap kualitas biji.',
      'Kuasai metode fermentasi terkendali (inokulasi ragi, thermal shock) untuk diversifikasi rasa.',
      'Gunakan teknologi pengemasan hermetik GrainPro untuk melindungi kadar air dan stabilitas rasa green bean.'
    ],
  },
  {
    id: 'les-p6-3',
    module_id: 'mod-p6',
    title: 'Pengemasan Hermetik GrainPro vs Karung Goni: Mencegah Oksidasi dan Menjaga Kadar Air 10–12%',
    content: `# Pengemasan Hermetik GrainPro vs Karung Goni Tradisional

Perjalanan green bean dari kebun di pelosok Nusantara menuju roastery di kota besar atau pasar ekspor di Eropa memakan waktu berbulan-bulan melintasi samudera lembap dengan suhu kontainer kapal yang berfluktuasi liar.

---

### 1. Bahaya Karung Goni Porous Konvensional

Karung goni berbahan serat rami (*jute bag*) memiliki pori-pori besar yang sangat permeabel terhadap udara:
* Saat kapal melintasi garis khatulistiwa dengan kelembapan udara laut 90%, green bean di dalam karung goni akan menyerap uap air laut (*re-wetting*), memicu bau apek dan penurunan skor cupping hingga 3–5 poin!
* Selain itu, serat minyak bumi yang digunakan dalam pengolahan karung goni sering kali mencemari aroma kopi dengan bau karung (*baggy taint*).

---

### 2. Teknologi Lapisan Hermetik Berpenghalang Gas (*Hermetic Barrier*)

Kantong hermetik modern (seperti *GrainPro* atau *Ecotact*) terbuat dari polietilen multilayer dengan lapisan penghalang gas khusus:
* Menjaga kadar air green bean stabil di 10.5% – 11.5% selama 12 hingga 18 bulan pengiriman.
* Menurunkan konsentrasi oksigen internal hingga di bawah 1% melalui respirasi alami biji, sehingga serangga kumbang bubuk kopi (*coffee borer*) dan jamur mati lemas tanpa pestisida kimiawi!`,
    content_type: 'text',
    duration_minutes: 14,
    order_index: 3,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Materi mendalam Pengemasan Hermetik GrainPro vs Karung Goni: Mencegah Oksidasi dan Menjaga Kadar Air 10–12% dengan sains agronomi pasca panen dan pengolahan biji kopi modern.',
    key_takeaways: [
      'Pahami pengaruh genetik varietas lokal dan kesuburan tanah vulkanik terhadap kualitas biji.',
      'Kuasai metode fermentasi terkendali (inokulasi ragi, thermal shock) untuk diversifikasi rasa.',
      'Gunakan teknologi pengemasan hermetik GrainPro untuk melindungi kadar air dan stabilitas rasa green bean.'
    ],
  },
];

export const POST_HARVEST_QUIZZES: Quiz[] = [
  {
    id: 'quiz-p-final',
    module_id: 'mod-p6',
    learning_path_id: 'path-post-harvest',
    quiz_scope: 'final_exam',
    title: 'Ujian Akhir Sertifikasi Post-Harvest & Green Coffee Specialist',
    description:
      'Ujian evaluasi komprehensif 15 soal mencakup botani varietas kopi, agronomi ketinggian MDPL, panen refraktometer Brix, sains Giling Basah vs Fermentasi Anaerobik, dan grading cacat SCA.',
    passing_score: 80,
    time_limit_minutes: 30,
    max_attempts: 3,
    created_at: '2026-08-10T00:00:00Z',
  },
];

export const POST_HARVEST_QUESTIONS: Question[] = [
  {
    id: 'q-ph-1',
    quiz_id: 'quiz-p-final',
    question_text: 'Berapakah jumlah kromosom biologis dan karakteristik ploidi dari tanaman Coffea arabica?',
    question_type: 'multiple_choice',
    points: 7,
    order_index: 1,
    explanation: 'Coffea arabica bersifat alotetraploid dengan 44 kromosom (2n = 4x = 44) dan melakukan penyerbukan mandiri (self-pollinating), berbeda dari Robusta yang diploid 22 kromosom.',
    answers: [
      { id: 'a-ph-1-1', answer_text: '44 Kromosom (Alotetraploid, 2n = 4x = 44)', is_correct: true },
      { id: 'a-ph-1-2', answer_text: '22 Kromosom (Diploid, 2n = 2x = 22)', is_correct: false },
      { id: 'a-ph-1-3', answer_text: '88 Kromosom (Oktoploid)', is_correct: false },
      { id: 'a-ph-1-4', answer_text: '12 Kromosom (Haploid)', is_correct: false },
    ],
  },
  {
    id: 'q-ph-2',
    quiz_id: 'quiz-p-final',
    question_text: 'Varietas kopi legendaris asal Danau Toba yang bertipe kerdil (semi-dwarf) dengan bodi kental sirup dan manis gula aren adalah?',
    question_type: 'multiple_choice',
    points: 7,
    order_index: 2,
    explanation: 'Sigarar Utang adalah varietas semi-dwarf produktif asal Sumatra Utara (kawasan Lintong/Danau Toba) yang dilepas resmi oleh Kementan pada tahun 2005.',
    answers: [
      { id: 'a-ph-2-1', answer_text: 'Sigarar Utang', is_correct: true },
      { id: 'a-ph-2-2', answer_text: 'Maragogipe', is_correct: false },
      { id: 'a-ph-2-3', answer_text: 'Geisha Panama', is_correct: false },
      { id: 'a-ph-2-4', answer_text: 'Catuai Kuning', is_correct: false },
    ],
  },
  {
    id: 'q-ph-3',
    quiz_id: 'quiz-p-final',
    question_text: 'Mengapa perkebunan kopi di elevasi tinggi (>1.400 mdpl) dengan suhu malam dingin (10-14°C) menghasilkan biji kopi berkepadatan tinggi (SHB) yang lebih manis?',
    question_type: 'multiple_choice',
    points: 7,
    order_index: 3,
    explanation: 'Suhu malam dingin memperlambat respirasi tanaman sehingga pohon tidak membakar habis sukrosa, melainkan mengalirkannya ke dalam buah ceri yang matang perlahan selama 8-10 bulan.',
    answers: [
      { id: 'a-ph-3-1', answer_text: 'Suhu malam dingin memperlambat laju respirasi tanaman sehingga akumulasi sukrosa di dalam biji terjaga maksimal', is_correct: true },
      { id: 'a-ph-3-2', answer_text: 'Karena pohon kopi tidak membutuhkan air di dataran tinggi', is_correct: false },
      { id: 'a-ph-3-3', answer_text: 'Karena kadar oksigen yang sangat tinggi di puncak gunung', is_correct: false },
      { id: 'a-ph-3-4', answer_text: 'Karena serangga tidak bisa terbang di atas 1.000 mdpl', is_correct: false },
    ],
  },
  {
    id: 'q-ph-4',
    quiz_id: 'quiz-p-final',
    question_text: 'Rentang nilai derajat kemanisan gula pada skala Brix yang menandakan ceri kopi telah matang optimal (sweet spot) untuk proses specialty adalah?',
    question_type: 'multiple_choice',
    points: 7,
    order_index: 4,
    explanation: 'Kadar gula lendir ceri matang optimal specialty berada di rentang 19° hingga 22° Brix (hingga 24° Brix untuk proses natural/anaerobik).',
    answers: [
      { id: 'a-ph-4-1', answer_text: '19° hingga 22° Brix (bahkan hingga 24° Brix)', is_correct: true },
      { id: 'a-ph-4-2', answer_text: '5° hingga 8° Brix', is_correct: false },
      { id: 'a-ph-4-3', answer_text: '10° hingga 12° Brix', is_correct: false },
      { id: 'a-ph-4-4', answer_text: 'Di atas 40° Brix', is_correct: false },
    ],
  },
  {
    id: 'q-ph-5',
    quiz_id: 'quiz-p-final',
    question_text: 'Apakah yang terjadi pada buah ceri yang mengapung (floater) saat dimasukkan ke dalam bak air perambangan (flotation tank)?',
    question_type: 'multiple_choice',
    points: 7,
    order_index: 5,
    explanation: 'Ceri floater mengapung karena massa jenisnya rendah akibat biji hampa, terserang hama penggerek buah (PBKo), atau kering prematur, sehingga wajib dipisahkan.',
    answers: [
      { id: 'a-ph-5-1', answer_text: 'Memiliki densitas rendah akibat biji hampa atau terserang hama dan wajib dipisahkan dari lot spesialti', is_correct: true },
      { id: 'a-ph-5-2', answer_text: 'Merupakan ceri paling manis berkualitas terbaik di dunia', is_correct: false },
      { id: 'a-ph-5-3', answer_text: 'Memiliki kandungan kafein paling tinggi', is_correct: false },
      { id: 'a-ph-5-4', answer_text: 'Wajib langsung disangrai tanpa dikeringkan', is_correct: false },
    ],
  },
  {
    id: 'q-ph-6',
    quiz_id: 'quiz-p-final',
    question_text: 'Pada kadar air berapakah kulit tanduk (parchment) dikupas paksa dari biji pada metode proses Giling Basah (Wet Hulled) khas Sumatra?',
    question_type: 'multiple_choice',
    points: 7,
    order_index: 6,
    explanation: 'Ciri khas Giling Basah adalah mengupas kulit tanduk saat biji masih basah kenyal pada kadar air sekitar 30% hingga 35%.',
    answers: [
      { id: 'a-ph-6-1', answer_text: '30% hingga 35% kadar air', is_correct: true },
      { id: 'a-ph-6-2', answer_text: '10% hingga 12% kadar air', is_correct: false },
      { id: 'a-ph-6-3', answer_text: '5% kadar air', is_correct: false },
      { id: 'a-ph-6-4', answer_text: '50% hingga 60% kadar air', is_correct: false },
    ],
  },
  {
    id: 'q-ph-7',
    quiz_id: 'quiz-p-final',
    question_text: 'Warna hijau kebiruan gelap menyerupai batu giok (jade green) pada green bean Giling Basah Sumatra disebabkan oleh peristiwa apa?',
    question_type: 'multiple_choice',
    points: 7,
    order_index: 7,
    explanation: 'Pengupasan kulit tanduk saat biji masih basah (30-35% moisture) memicu oksidasi klorofil langsung saat terkena sinar matahari dan udara terbuka.',
    answers: [
      { id: 'a-ph-7-1', answer_text: 'Oksidasi klorofil langsung pada biji basah yang dijemur tanpa perlindungan kulit tanduk', is_correct: true },
      { id: 'a-ph-7-2', answer_text: 'Pewarnaan buatan dari getah daun pisang', is_correct: false },
      { id: 'a-ph-7-3', answer_text: 'Tingginya kadar kafein yang membeku', is_correct: false },
      { id: 'a-ph-7-4', answer_text: 'Pengaruh abu vulkanik yang menempel di permukaan biji', is_correct: false },
    ],
  },
  {
    id: 'q-ph-8',
    quiz_id: 'quiz-p-final',
    question_text: 'Berapakah persentase lapisan lendir musilase yang dibiarkan menempel pada biji kopi pada proses Black Honey?',
    question_type: 'multiple_choice',
    points: 7,
    order_index: 8,
    explanation: 'Black Honey mempertahankan 100% lapisan lendir musilase utuh tanpa pembilasan, lalu dijemur lambat di bawah naungan.',
    answers: [
      { id: 'a-ph-8-1', answer_text: '100% lapisan lendir musilase utuh tanpa dibilas', is_correct: true },
      { id: 'a-ph-8-2', answer_text: 'Kurang dari 25% lendir', is_correct: false },
      { id: 'a-ph-8-3', answer_text: '50% lendir', is_correct: false },
      { id: 'a-ph-8-4', answer_text: '0% (dibersihkan total seperti washed)', is_correct: false },
    ],
  },
  {
    id: 'q-ph-9',
    quiz_id: 'quiz-p-final',
    question_text: 'Bakteri apakah yang mendominasi bioreaktor fermentasi anaerobik tertutup dan menghasilkan profil sensori bodi creamy menyerupai yogurt?',
    question_type: 'multiple_choice',
    points: 7,
    order_index: 9,
    explanation: 'Bakteri Asam Laktat (Lactic Acid Bacteria seperti Lactobacillus) mendominasi kondisi anaerobik dan menghasilkan asam laktat yang bertekstur lembut creamy.',
    answers: [
      { id: 'a-ph-9-1', answer_text: 'Bakteri Asam Laktat (Lactobacillus)', is_correct: true },
      { id: 'a-ph-9-2', answer_text: 'Bakteri Asam Asetat (Acetobacter)', is_correct: false },
      { id: 'a-ph-9-3', answer_text: 'Bakteri Escherichia coli', is_correct: false },
      { id: 'a-ph-9-4', answer_text: 'Bakteri Clostridium botulinum', is_correct: false },
    ],
  },
  {
    id: 'q-ph-10',
    quiz_id: 'quiz-p-final',
    question_text: 'Gas apakah yang disuntikkan secara khusus ke dalam tangki kedap udara pada proses Carbonic Maceration (CM)?',
    question_type: 'multiple_choice',
    points: 7,
    order_index: 10,
    explanation: 'Proses Carbonic Maceration menggunakan gas karbon dioksida murni (CO2) untuk mendorong keluar seluruh oksigen dan memicu maserasi intraseluler.',
    answers: [
      { id: 'a-ph-10-1', answer_text: 'Gas Karbon Dioksida (CO2)', is_correct: true },
      { id: 'a-ph-10-2', answer_text: 'Gas Nitrogen murni (N2)', is_correct: false },
      { id: 'a-ph-10-3', answer_text: 'Gas Oksigen murni (O2)', is_correct: false },
      { id: 'a-ph-10-4', answer_text: 'Gas Helium (He)', is_correct: false },
    ],
  },
  {
    id: 'q-ph-11',
    quiz_id: 'quiz-p-final',
    question_text: 'Pada titik batas derajat keasaman (pH) berapakah fermentasi kopi anaerobik wajib segera dihentikan untuk mencegah cacat rasa asam cuka (over-fermented)?',
    question_type: 'multiple_choice',
    points: 6,
    order_index: 11,
    explanation: 'Fermentasi kopi wajib dihentikan saat pH mencapai rentang 3.8 hingga 4.0. Jika dibiarkan turun di bawah 3.7, rasa kopi akan rusak oleh asam asetat berlebih.',
    answers: [
      { id: 'a-ph-11-1', answer_text: 'pH 3.8 hingga 4.0', is_correct: true },
      { id: 'a-ph-11-2', answer_text: 'pH 7.0 (netral)', is_correct: false },
      { id: 'a-ph-11-3', answer_text: 'pH 2.0 (sangat asam)', is_correct: false },
      { id: 'a-ph-11-4', answer_text: 'pH 8.5 (basa)', is_correct: false },
    ],
  },
  {
    id: 'q-ph-12',
    quiz_id: 'quiz-p-final',
    question_text: 'Apakah tujuan utama perlakuan kejut dingin (Cold Shock 12-15°C) setelah fase panas pada teknologi pemrosesan Thermal Shock?',
    question_type: 'multiple_choice',
    points: 6,
    order_index: 12,
    explanation: 'Perlakuan dingin mendadak menutup pori-pori mikroskopis biji dan mengunci (lock-in) senyawa aroma volatil hasil fermentasi ke dalam inti biji.',
    answers: [
      { id: 'a-ph-12-1', answer_text: 'Mengunci (lock-in) senyawa aroma volatil hasil fermentasi ke dalam pori-pori selulosa biji', is_correct: true },
      { id: 'a-ph-12-2', answer_text: 'Membuat biji kopi membeku menjadi es batu', is_correct: false },
      { id: 'a-ph-12-3', answer_text: 'Menghilangkan seluruh kandungan kafein kopi', is_correct: false },
      { id: 'a-ph-12-4', answer_text: 'Mempercepat pengelupasan kulit tanduk secara kimiawi', is_correct: false },
    ],
  },
  {
    id: 'q-ph-13',
    quiz_id: 'quiz-p-final',
    question_text: 'Apakah penyebab utama terjadinya cacat pengeringan "Case Hardening" pada tumpukan biji kopi?',
    question_type: 'multiple_choice',
    points: 6,
    order_index: 13,
    explanation: 'Case hardening terjadi saat biji dipapar sinar matahari terik ekstrem tanpa naungan di awal penjemuran, sehingga kulit luar mengeras dan mengunci air di inti dalam.',
    answers: [
      { id: 'a-ph-13-1', answer_text: 'Paparan panas matahari terik ekstrem di awal jemuran yang membuat kulit luar mengeras saat inti dalam masih basah', is_correct: true },
      { id: 'a-ph-13-2', answer_text: 'Biji kopi terkena air hujan semalaman', is_correct: false },
      { id: 'a-ph-13-3', answer_text: 'Pengeringan dilakukan di ruangan ber-AC', is_correct: false },
      { id: 'a-ph-13-4', answer_text: 'Biji kopi disimpan di dalam karung goni basah', is_correct: false },
    ],
  },
  {
    id: 'q-ph-14',
    quiz_id: 'quiz-p-final',
    question_text: 'Berapakah jumlah maksimal Cacat Primer (Primary Defects) yang diizinkan dalam sampel 350 gram green bean untuk menyandang predikat Specialty Grade 1 menurut SCA?',
    question_type: 'multiple_choice',
    points: 6,
    order_index: 14,
    explanation: 'Standar SCA Green Coffee Defect Guide mewajibkan 0 (Nol) Cacat Primer dalam 350 gram sampel untuk menyandang predikat Specialty Grade 1.',
    answers: [
      { id: 'a-ph-14-1', answer_text: '0 Cacat Primer (Nol Mutlak)', is_correct: true },
      { id: 'a-ph-14-2', answer_text: 'Maksimal 3 Cacat Primer', is_correct: false },
      { id: 'a-ph-14-3', answer_text: 'Maksimal 5 Cacat Primer', is_correct: false },
      { id: 'a-ph-14-4', answer_text: 'Maksimal 10 Cacat Primer', is_correct: false },
    ],
  },
  {
    id: 'q-ph-15',
    quiz_id: 'quiz-p-final',
    question_text: 'Keunggulan utama penggunaan kantong plastik hermetik khusus (GrainPro / Ecotact) dibandingkan karung goni tradisional adalah?',
    question_type: 'multiple_choice',
    points: 6,
    order_index: 15,
    explanation: 'Plastik hermetik memiliki penghalang oksigen dan uap air yang tinggi, menjaga kelembapan 10-12% dan menciptakan lingkungan anaerobik yang mencegah jamur dan hama hingga 18 bulan.',
    answers: [
      { id: 'a-ph-15-1', answer_text: 'Menghalangi transmisi oksigen dan uap air sehingga menjaga kadar air stabil dan membunuh hama secara alami', is_correct: true },
      { id: 'a-ph-15-2', answer_text: 'Membuat biji kopi sangrai langsung matang di dalam karung', is_correct: false },
      { id: 'a-ph-15-3', answer_text: 'Menurunkan berat karung hingga 50%', is_correct: false },
      { id: 'a-ph-15-4', answer_text: 'Mengubah biji kopi Robusta menjadi Arabika', is_correct: false },
    ],
  },
];
