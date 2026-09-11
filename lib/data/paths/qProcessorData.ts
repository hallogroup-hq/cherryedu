import { LearningPath, Module, Lesson, Quiz, Question } from '../../types';

export const Q_PROCESSOR_PATH: LearningPath = {
  id: 'path-q-processor',
  title: 'Q Processor Specialization Path: Standar Bioproses & Pasca-Panen Spesialti Dunia',
  slug: 'q-processor-specialization',
  description:
    'Kurikulum pasca-panen profesional berstandar Coffee Quality Institute (CQI) Q Processing Level 1 & 2: biokimia mesokarp ceri 20°+ Brix, kinetika mikrobiologi ragi & bakteri asam laktat, dinamika kurva pH & suhu fermentasi, protokol Washed, Honey, Natural, rekayasa Giling Basah terkontrol tanpa aroma apek, bioproses anaerobik, carbonic maceration, inokulasi kultur starter, thermal shock, termodinamika pengeringan & Water Activity (aw ≤ 0.60), reposo hermetik, serta diagnostik cacat cupping & SOP Processing Logbook.',
  thumbnail_url:
    'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80',
  layer_type: 'specialization',
  prerequisite_path_id: 'path-foundation',
  target_role: 'q_processor',
  level: 'advanced',
  is_free: false,
  is_published: true,
  estimated_hours: 36,
  total_modules: 8,
  created_at: '2026-08-15T00:00:00Z',
};

export const Q_PROCESSOR_MODULES: Module[] = [
  {
    id: 'mod-qp1',
    learning_path_id: 'path-q-processor',
    title: 'Modul QP-1: Prinsip CQI Q Processing, Fisiologi Buah & Sortasi Panen',
    description:
      'Filosofi CQI Q Processing (mengawetkan vs merekayasa kualitas), biokimia eksokarp dan mesokarp, pengukuran refraktometer 20°+ Brix, pemisahan hidrolik flotation, serta mitigasi lag time pasca-petik.',
    order_index: 1,
    is_published: true,
    created_at: '2026-08-15T00:00:00Z',
  },
  {
    id: 'mod-qp2',
    learning_path_id: 'path-q-processor',
    title: 'Modul QP-2: Mikrobiologi & Biokimia Fermentasi Kopi Terkendali',
    description:
      'Ekologi mikroorganisme ragi vs bakteri (LAB & AAB), degradasi pektin enzimatik, sintesis prekursor ester aromatik, serta matriks pemantauan kurva pH, suhu, dan oksigen terlarut.',
    order_index: 2,
    is_published: true,
    created_at: '2026-08-15T00:00:00Z',
  },
  {
    id: 'mod-qp3',
    learning_path_id: 'path-q-processor',
    title: 'Modul QP-3: Protokol Olah Basah (Washed), Demucilation & Soaking Presisi',
    description:
      'Demucilasi enzimatik alami vs mekanis (eco-pulper), kalibrasi celah silinder, saluran gravitasi pemisah densitas (washing channels), dan perendaman air dingin 24 jam (Kenyan soaking).',
    order_index: 3,
    is_published: true,
    created_at: '2026-08-15T00:00:00Z',
  },
  {
    id: 'mod-qp4',
    learning_path_id: 'path-q-processor',
    title: 'Modul QP-4: Protokol Natural, Honey & Inovasi Giling Basah Nusantara',
    description:
      'Respirasi sel buah utuh natural, spektrum White hingga Black Honey, dan standardisasi Giling Basah (Wet-Hulled) kadar air 30-35% dengan profil clean spice tanpa cacat apek.',
    order_index: 4,
    is_published: true,
    created_at: '2026-08-15T00:00:00Z',
  },
  {
    id: 'mod-qp5',
    learning_path_id: 'path-q-processor',
    title: 'Modul QP-5: Bioproses Eksperimental: Anaerobik, Karbonik, Inokulasi & Co-Fermentasi',
    description:
      'Bioreaktor anaerobik katup satu arah, Carbonic Maceration (CM) gas CO2 murni, inokulasi kultur ragi terseleksi, thermal shock air hangat-dingin, serta etika & regulasi kompetisi SCA untuk co-fermentasi.',
    order_index: 5,
    is_published: true,
    created_at: '2026-08-15T00:00:00Z',
  },
  {
    id: 'mod-qp6',
    learning_path_id: 'path-q-processor',
    title: 'Modul QP-6: Termodinamika Pengeringan & Manajemen Aktivitas Air (aw)',
    description:
      'Fisika desorpsi air bebas vs terikat, batas kritis Moisture Content 10.0-12.0% & Water Activity (aw ≤ 0.60), pencegahan toksin Ochratoxin A, solar dome raised beds, dan mekanisasi Guardiola.',
    order_index: 6,
    is_published: true,
    created_at: '2026-08-15T00:00:00Z',
  },
  {
    id: 'mod-qp7',
    learning_path_id: 'path-q-processor',
    title: 'Modul QP-7: Stabilisasi (Reposo), Dry Milling & Sortasi Mutu Ekspor',
    description:
      'Fase istirahat gabah (reposo) 30-60 hari dalam kantong hermetik, kalibrasi mesin huller suhu rendah (<35°C), sortasi ayakan screen sieve, meja gravitasi densitas, dan optical color sorting.',
    order_index: 7,
    is_published: true,
    created_at: '2026-08-15T00:00:00Z',
  },
  {
    id: 'mod-qp8',
    learning_path_id: 'path-q-processor',
    title: 'Modul QP-8: Diagnostik Cacat Sensorik, SOP Logbook CQI & Kelestarian Wet Mill',
    description:
      'Deteksi cacat cupping (stinker, sour vinegar, butyric, rio), format lembar kerja CQI Batch Processing Card, bioremediasi air limbah wet mill kolam anaerobik, dan produksi cascara higienis.',
    order_index: 8,
    is_published: true,
    created_at: '2026-08-15T00:00:00Z',
  },
];

export const Q_PROCESSOR_LESSONS: Lesson[] = [
  {
    id: 'les-qp1-1',
    module_id: 'mod-qp1',
    title: 'Filosofi CQI Q Processing: Mengawetkan Kualitas Intrinsik vs Rekayasa Profil Bebas Cacat',
    content: `# Filosofi CQI Q Processing: Mengawetkan Mutu Intrinsik vs Rekayasa Profil

[DIAGRAM:cherry-anatomy]

Program sertifikasi **Q Processing** yang diinisiasi oleh **Coffee Quality Institute (CQI)** didirikan atas satu prinsip fundamental: **Kualitas maksimal secangkir kopi ditentukan di pohon saat ceri dipetik**. Pemrosesan pasca-panen tidak dapat menambahkan materi genetik baru ke dalam embrio biji; perannya adalah mengeluarkan dan mengawetkan potensi rasa bawaan (*terroir & variety*) atau mengarahkan bioproses secara presisi tanpa menciptakan cacat (*defects*).

---

### 1. Dua Paradigma Pemrosesan Kopi Spesialti

Dalam filosofi CQI, praktisi pengolahan kopi harus memahami batas antara dua pendekatan:

| Parameter | Pendekatan Klasik (Preservationist) | Pendekatan Rekayasa Bioproses (Modulator) |
|---|---|---|
| **Tujuan Utama** | Mengawetkan karakter murni varietas & terroir tanpa interferensi rasa fermentasi | Menciptakan kompleksitas aroma baru melalui metabolit mikroba sekunder |
| **Metode Khas** | Traditional Washed & Clean Dry Fermentation | Anaerobic Maceration, Inokulasi Ragi, Thermal Shock, Co-fermentation |
| **Tolak Ukur Sukses** | *Cup clarity* tinggi, asam sitrat/malat cerah, zero-defect | Skor sensorik rasa buah eksotis, body tebal, keasaman laktat/suksinat |
| **Resiko Kritis** | Hilangnya profil jika pengeringan terlalu lama | Cacat *over-fermented*, cuka (*acetic*), atau rasa kimia sintetis |

> 📌 **Prinsip Utama CQI**: *"A great processor is first a guardian of quality, and second an architect of flavor."* Pemroses kopi kelas dunia tidak pernah mengizinkan eksperimen fermentasi menutupi cacat bahan baku yang tidak matang.

---

### 2. Standar Kompetensi Profesi Q Processor

Seorang Q Processor profesional memegang tanggung jawab teknis pada 5 gerbang kendali mutu (*quality gates*):
1. **Penerimaan Bahan Mentah (Raw Material Intake)**: Mengaudit kematangan visual, densitas hidrolik, dan kadar gula terlarut (°Brix).
2. **Kinetika Fermentasi (Bioprocess Control)**: Mengatur populasi mikroba, penurunan pH, dinamika suhu tangki, dan waktu kontak.
3. **Pengeringan Presisi (Thermodynamic Drying)**: Menghindari syok termal dan mengunci *Water Activity* ($a_w$) di bawah 0.60.
4. **Kondisioning & Penggudangan (Curing/Reposo)**: Menstabilkan struktur membran seluler biji sebelum pengupasan (*hulling*).
5. **Evaluasi Laboratorium (Sensory & Physical QC)**: Menghubungkan keputusan proses di kebun dengan skor cupping meja cupping berstandar SCA.`,
    content_type: 'text',
    duration_minutes: 25,
    order_index: 1,
    is_free: true,
    is_published: true,
    created_at: '2026-08-15T00:00:00Z',
    summary: 'Membedah filosofi inti CQI Q Processing: batasan mengawetkan potensi genetik biji kopi vs rekayasa rasa, serta 5 gerbang kendali mutu wajib di stasiun basah.',
    key_takeaways: [
      'Pemrosesan pasca-panen tidak dapat memperbaiki mutu buah ceri yang mentah atau cacat genetik.',
      'CQI membagi fokus pengolahan menjadi pengawetan kualitas intrinsik (terroir) dan modulasi rasa terkontrol.',
      'Lima gerbang kendali mutu Q Processor mencakup intake ceri, fermentasi, pengeringan, reposo, dan sensory QC.',
    ],
  },
  {
    id: 'les-qp1-2',
    module_id: 'mod-qp1',
    title: 'Fisiologi & Biokimia Ceri Kopi: Mesokarp, Pektin & Prekursor Rasa',
    content: `# Fisiologi & Biokimia Buah Ceri: Anatomi Mesokarp & Bahan Bakar Fermentasi

[DIAGRAM:cherry-anatomy]

Kopi bukanlah biji semata, melainkan biji dari buah berbiji dua (*drupe*). Memahami anatomi dan komposisi kimia setiap lapisan buah sangat krusial karena lendir (*mucilage*) adalah substrat energi bagi seluruh reaksi biokimia fermentasi.

---

### 1. Anatomi Lapis Buah Ceri Kopi

Buah ceri kopi terdiri atas lapisan-lapisan konsentris dari luar ke dalam:
* **Eksokarp (Kulit Luar / Flavedo)**: Lapisan lilin epidermis berpigmen antosianin dan karotenoid. Berfungsi melindungi biji dari radiasi UV dan serangan patogen luar.
* **Mesokarp (Daging Buah & Lendir / Mucilage)**: Jaringan parenkim kaya air (84%), senyawa gula bebas (glukosa, fruktosa, sukrosa 10–12%), zat pektin (1–2%), dan asam organik (asam malat, sitrat, quinat). Lendir ini melekat kuat pada kulit tanduk.
* **Endokarp (Kulit Tanduk / Parchment / Pergamino)**: Lapisan selulosa dan lignin berkayu keras yang membungkus biji. Berperan melindungi embrio hidup dari gesekan mekanis dan fluktuasi kelembaban mendadak.
* **Spermoderm (Kulit Ari / Silverskin)**: Selaput tipis kaya antioksidan dan serat selulosa yang membungkus keping biji (*endosperm*).
* **Endosperm & Embrio**: Cadangan makanan (protein, lipid, asam klorogenat, sukrosa, trigonelin, kafein) dan embrio tanaman hidup yang memiliki aktivitas metabolik respirasi.

---

### 2. Komposisi Kimia Lendir (Mucilage): Pektin dan Gula

Lendir kopi memiliki sifat koloid kental yang sukar larut dalam air netral dingin karena mengandung senyawa pektin kompleks:
1. **Protopektin**: Rantai panjang asam poligalakturonat tak larut air yang membentuk kerangka struktural lentur antar dinding sel buah.
2. **Pektin Metil Ester**: Rantai pektin yang teresterifikasi oleh gugus metil (derajat metilasi 60–80%). Membutuhkan enzim *pectin methylesterase (PME)* untuk de-esterifikasi menjadi asam pektat.
3. **Gula Bebas**: Fruktosa dan glukosa mendominasi saat ceri matang optimal, disusul sukrosa. Gula ini adalah nutrisi utama bagi ragi dan bakteri saat fermentasi dimulai.

| Komponen Mesokarp | Persentase Berat Basah | Peran dalam Pemrosesan |
|---|---|---|
| **Air** | 80.0% – 85.0% | Medium pelarut reaksi enzim dan pergerakan mikroba |
| **Gula Terlarut (Brix)** | 12.0% – 22.0% | Bahan bakar glikolisis ragi menghasilkan alkohol & ester |
| **Zat Pektin** | 1.5% – 3.5% | Membentuk viskositas lendir; harus dipecah agar lolos proses cuci |
| **Asam Organik** | 0.8% – 1.5% | Menentukan pH alami awal ceri (pH 5.4 – 5.8) |
| **Senyawa Nitrogen & Protein** | 0.5% – 1.2% | Nutrisi esensial sintesis biomassa mikroorganisme |`,
    content_type: 'text',
    duration_minutes: 20,
    order_index: 2,
    is_free: false,
    is_published: true,
    created_at: '2026-08-15T00:00:00Z',
    summary: 'Analisis mendalam struktur seluler buah ceri, komposisi biokimia lendir (mucilage), jenis ikatan pektin, dan ketersediaan gula untuk bahan bakar bioproses.',
    key_takeaways: [
      'Lendir kopi (mucilage) terdiri atas 84% air, polimer pektin, gula monosakarida (glukosa, fruktosa), dan asam organik.',
      'Sifat kental lendir disebabkan oleh protopektin berikatan ionik yang hanya bisa dipecah oleh enzim pektinase spesifik atau gesekan mekanis.',
      'Biji kopi di dalam parchment adalah organisme hidup (embrio) yang terus bernapas dan sensitif terhadap suhu panas.',
    ],
  },
  {
    id: 'les-qp1-3',
    module_id: 'mod-qp1',
    title: 'Protokol Panen Selektif, Pengukuran Brix & Flotation Sorting',
    content: `# Protokol Panen Selektif, Pengukuran Derajat Brix & Sortasi Flotation

Kualitas secangkir kopi bernilai 85+ dimulai dari ketatnya disiplin panen di kebun dan protokol penerimaan stasiun basah. Buah ceri yang dipetik pada kematangan fisiologis sempurna mengandung rasio gula terhadap asam (*sugar-to-acid ratio*) tertinggi yang melindungi biji dari cacat rasa pahit getir (*astringent*).

---

### 1. Penentuan Indeks Kematangan dengan Refraktometer Brix

Warna visual kulit ceri sering kali menipu karena faktor paparan sinar matahari langsung atau variasi varietas (misal: Yellow Caturra atau Orange Bourbon). Q Processor menggunakan **refraktometer optik/digital brix**:

* **Standar Minimum Spesialti**: Cairan lendir perasan ceri harus mencapai minimal **20.0° – 24.0° Brix**.
* **Ceri Kurang Matang (*Semi-ripe/Green*)**: 12.0° – 16.0° Brix (kaya asam malat mentah, rendah gula, menghasilkan seduhan grassy/sepet).
* **Ceri Kematangan Puncak (*Tree-ripe*)**: 21.0° – 24.0° Brix (keseimbangan asam fosfat, sitrat, dan sukrosa maksimal).
* **Ceri Terlewat Matang (*Overripe/Raisin*)**: >25.0° Brix (sel mulai mengalami pembusukan internal, resiko inokulasi spora jamur liar tinggi).

---

### 2. Protokol Sortasi Perambangan Hidrolik (Flotation Tank)

Segera setelah ceri tiba di stasiun basah, ceri wajib dimasukkan ke dalam bak air perambangan (*flotation tank*):

1. **Fraksi Mengapung (*Floaters / Biji Rambang*)**:
   * Memiliki berat jenis lebih rendah dari air (< 1.0 g/cm³).
   * Penyebab: Buah terserang hama penggerek buah kopi (*Hypothenemus hampei / PBKo*), biji hampa (*empty locule / peaberry defektif*), atau ceri kering di pohon yang busuk.
   * **Tindakan**: Wajib dipisahkan 100% menggunakan saringan permukaan dan diproses sebagai lot komersial kelas rendah.
2. **Fraksi Tenggelam (*Sinkers / Ceri Padat*)**:
   * Memiliki berat jenis tinggi (> 1.05 g/cm³). Menandakan endosperm padat dengan cadangan nutrisi dan kadar gula lendir sempurna.
   * **Tindakan**: Dialirkan menuju pulper atau tangki fermentasi lot spesialti.

---

### 3. Bahaya *Harvest Delay* (Lag Time): Mengapa Jam Berharga?

Jeda waktu antara pemetikan di pohon dan dimulainya pemrosesan disebut **Lag Time**:
* **Batas Maksimal Lag Time**: **8 hingga 12 jam**.
* Jika ceri ditumpuk dalam karung goni/plastik di bawah terik matahari lebih dari 12 jam, respirasi ceri memicu kenaikan suhu internal hingga >45°C.
* Akibatnya: Pembusukan anaerobik liar spontan (*self-heating fermentation*), degradasi enzim embrio, dan timbulnya rasa fermentasi busuk (*stinker beans*).`,
    content_type: 'text',
    duration_minutes: 20,
    order_index: 3,
    is_free: false,
    is_published: true,
    created_at: '2026-08-15T00:00:00Z',
    summary: 'Prosedur operasional standar pemanenan buah ceri kopi, kalibrasi refraktometer brix >20°, teknik pemisahan densitas flotation, dan manajemen lag-time untuk mencegah fermentasi liar.',
    key_takeaways: [
      'Standar kematangan ceri untuk kopi spesialti adalah kadar gula lendir 20°–24° Brix.',
      'Flotation sorting memisahkan floaters (cacat berdensitas rendah) dari sinkers (ceri padat bermutu tinggi) secara hidrolik murni.',
      'Lag-time tumpukan ceri tidak boleh melebihi 12 jam guna mencegah pemanasan spontan (self-heating) yang merusak embrio biji.',
    ],
  },

  {
    id: 'les-qp2-1',
    module_id: 'mod-qp2',
    title: 'Ekologi Mikroorganisme Kopi: Ragi, Bakteri Asam Laktat & Bakteri Asam Asetat',
    content: `# Ekologi Mikroorganisme Kopi: Interaksi Ragi, LAB, dan AAB

Fermentasi kopi bukanlah peristiwa steril, melainkan suksesi ekologis dinamis yang melibatkan ratusan spesies mikroorganisme epifit (yang hidup alami pada kulit buah ceri). Q Processor mengendalikan populasi ini agar dominasi mikroba yang menguntungkan mengungguli mikroba pembusuk.

---

### 1. Tiga Kelompok Mikroorganisme Utama

\`\`\`
                     [SUKSESI MIKROBA FERMENTASI KOPI]
    Jam 0-12                      Jam 12-36                    Jam 36+ (Kritis)
   +-----------------------+    +-----------------------+    +-----------------------+
   | RAGI (Yeasts)         | -> | BAKTERI LAKTAT (LAB)  | -> | BAKTERI ASETAT (AAB)  |
   | Gula -> Etanol + CO2  |    | Asam Laktat + Ester   |    | Etanol + O2 -> Asam   |
   | pH: 5.5 turun ke 4.6  |    | pH: 4.5 turun ke 3.9  |    | Asetat (Cuka)         |
   +-----------------------+    +-----------------------+    +-----------------------+
\`\`\`

#### A. Ragi (*Yeasts* / Fungi Uniseluler)
* **Spesies Dominan**: *Saccharomyces cerevisiae*, *Pichia kudriavzevii*, *Hanseniaspora uvarum*, *Kluyveromyces marxianus*, *Torulaspora delbrueckii*.
* **Aktivitas**: Mengonsumsi sukrosa, glukosa, dan fruktosa melalui jalur glikolisis menjadi etanol, gas $CO_2$, serta memproduksi enzim pektinase ekstraseluler.
* **Kontribusi Rasa**: Mensintesis prekursor aroma volatil tingkat tinggi berupa ester buah (*ethyl acetate, isoamyl acetate* yang beraroma pisang, pir, dan bunga).

#### B. Bakteri Asam Laktat (*Lactic Acid Bacteria / LAB*)
* **Spesies Dominan**: *Leuconostoc mesenteroides*, *Lactobacillus plantarum*, *Weissella cibaria*.
* **Aktivitas**: Memfermentasi monosakarida menjadi asam laktat (pada jalur homofermentatif) atau campuran asam laktat, asam asetat, dan karbon dioksida (heterofermentatif).
* **Kontribusi Rasa**: Memberikan keasaman lembut bulat seperti yoghurt (*creamy acidity*), mempertebal sensasi *body / mouthfeel*, dan menekan pertumbuhan bakteri patogen pembusuk.

#### C. Bakteri Asam Asetat (*Acetic Acid Bacteria / AAB*)
* **Spesies Dominan**: *Acetobacter aceti*, *Gluconobacter oxydans*.
* **Aktivitas**: Mengoksidasi etanol menjadi asam asetat (cuka) dengan keberadaan oksigen bebas.
* **Resiko**: Jika populasi AAB tidak dikendalikan (terutama pada fermentasi terbuka yang hangat), konsentrasi asam asetat melonjak drastis dan menyebabkan cacat *vinegar sour* yang merusak penilaian rasa.

---

### 2. Mikroba Perusak & Kontaminan Terlarang
* **Bakteri Asam Butirat (*Clostridium butyricum*)**: Bakteri anaerobik pembusuk yang menghasilkan asam butirat beraroma keju busuk atau muntahan tengik. Tumbuh jika tumpukan basah terlalu kotor dan kekurangan sirkulasi.
* **Kapang Ochratoxin (*Aspergillus ochraceus / Penicillium*)**: Menghasilkan racun mikotoksin karsinogenik jika proses pengeringan terhenti di fase lembab.`,
    content_type: 'text',
    duration_minutes: 25,
    order_index: 1,
    is_free: false,
    is_published: true,
    created_at: '2026-08-15T00:00:00Z',
    summary: 'Mempelajari suksesi ekologi mikroorganisme dalam fermentasi kopi: peran ragi penghasil ester aromatik, bakteri asam laktat (LAB) pembentuk body, serta bahaya bakteri asam asetat (AAB) dan Clostridium.',
    key_takeaways: [
      'Fermentasi kopi didorong oleh suksesi alami ragi (yeast), bakteri asam laktat (LAB), dan bakteri asam asetat (AAB).',
      'Ragi menghasilkan etanol dan ester aroma buah floral, sedangkan LAB menghasilkan asam laktat yang melembutkan keasaman cangkir.',
      'Bakteri asam asetat membutuhkan oksigen untuk mengubah alkohol menjadi cuka; kontrol oksigen sangat krusial.',
    ],
  },
  {
    id: 'les-qp2-2',
    module_id: 'mod-qp2',
    title: 'Kinetika Enzimatik Pektinase & Sintesis Prekursor Aroma Kopi',
    content: `# Kinetika Enzimatik Pektinase & Mekanisme Degradasi Lendir Kopi

Lendir kopi tidak rontok semata-mata karena dicerna mikroba; mikroba bertindak sebagai pabrik biologis yang mensekresikan enzim hidrolitik spesifik untuk memutuskan rantai polimer pektin mesokarp.

---

### 1. Rangkaian Enzim Pengurai Pektin (Pectinases Cascade)

Pektin dalam dinding sel kopi merupakan polisakarida kompleks bermuatan negatif. Tiga kelompok enzim bekerja secara berantai:

1. **Pektin Metilesterase (PME / Pectinesterase)**:
   * Menghidrolisis gugus metil ester dari rantai poligalakturonat, mengubah protopektin menjadi asam pektat dan metanol bebas dalam jumlah mikroskopis yang aman.
2. **Poligalakturonase (PG / Endopolygalacturonase & Exopolygalacturonase)**:
   * Memotong ikatan $α$-(1,4)-glikosidik pada rantai utama asam poligalakturonat. Memecah polimer besar menjadi oligomer kecil asam galakturonat yang mudah larut dalam air bilasan.
3. **Pektin Liase (PL / Pectate Lyase)**:
   * Memotong rantai polimer melalui mekanisme eliminasi trans-eliminatif tanpa menambahkan molekul air.

---

### 2. Sintesis Prekursor Aroma Senyawa Volatil

Selama fermentasi berlangsung, membran selulosa endokarp (kulit tanduk) menjadi semi-permeabel akibat asam organik. Molekul-molekul prekursor aroma berbobot ringan mampu berdifusi masuk ke dalam cairan keping biji mentah (*endosperm*):

* **Esterifikasi Enzimatik**: Alkohol yang diproduksi oleh ragi bereaksi dengan asam-asam organik membentuk senyawa ester:
  *Etanol + Asam Asetat --(Enzim Esterase)--> Etil Asetat (aroma buah manis)*
  *Isoamil Alkohol + Asam Asetat ----> Isoamil Asetat (aroma pisang)*
* **Akumulasi Asam Suksinat & Laktat**: Menghasilkan profil rasa manis asam buah batu (*stone fruit*) dan kestabilan rasa saat diseduh.
* **Prekursor Reaksi Maillard**: Asam amino bebas (seperti glisin, prolin, triptofan) hasil proteolisis enzimatik masuk ke dalam keping biji dan akan bertindak sebagai reaktan krusial saat biji disangrai di mesin roaster.`,
    content_type: 'text',
    duration_minutes: 20,
    order_index: 2,
    is_free: false,
    is_published: true,
    created_at: '2026-08-15T00:00:00Z',
    summary: 'Membedah cara kerja enzim pektinase (PME, PG, PL) dalam memecah lendir serta mekanisme difusi prekursor aroma ester volatil menembus kulit tanduk ke dalam biji kopi.',
    key_takeaways: [
      'Enzim pektinase (PME dan poligalakturonase) memotong rantai panjang asam pektat sehingga lendir larut air.',
      'Senyawa ester aromatik terbentuk dari reaksi antara alkohol ragi dan asam organik yang larut.',
      'Molekul prekursor berdifusi menembus membran perikarp ke dalam endosperm selama fermentasi terkontrol berlangsung.',
    ],
  },
  {
    id: 'les-qp2-3',
    module_id: 'mod-qp2',
    title: 'Matriks Pemantauan Fermentasi: Kurva pH, Suhu & Batas Kritis',
    content: `# Matriks Pemantauan Fermentasi: pH Meter, Dinamika Suhu & Batas Kritis

Fermentasi profesional berstandar CQI tidak boleh mengandalkan perkiraan waktu atau perabaan tangan semata ("feel"). Kunci konsistensi dari batch ke batch adalah pencatatan instrumen analitik harian.

---

### 1. Kurva Penurunan pH (pH Drop Curve)

pH lendir ceri kopi segar saat baru digiling berada pada rentang **5.4 – 5.8**:

| Rentang pH | Status Fermentasi | Aksi Lapangan Q Processor |
|---|---|---|
| **5.8 – 5.0** | Fase Inisiasi (Lag Phase) | Ragi mulai aktif membelah diri; suhu tangki perlahan naik |
| **5.0 – 4.4** | Fase Logaritmik (Puncak Enzim) | Degradasi pektin berlangsung cepat; lendir mulai mencair |
| **4.3 – 3.9** | **Zona Target Kelulusan Washed** | Lendir lepas sempurna dari parchment; profil rasa buah bersih (*clean*) |
| **3.8 – 3.6** | Zona Waspada Asam Laktat Lanjutan | Keasaman semakin tajam; aroma buah matang pekat; segera bilas |
| **< 3.6** | **Zona Bahaya Cacat Cuka (Vinegar Hazard)** | **STOP TOTAL!** Terjadi overfermentasi asam asetat; resiko skor cupping anjlok |

---

### 2. Dinamika Suhu Massa Fermentasi (Tank Temperature)

Fermentasi adalah reaksi eksotermik (menghasilkan panas metabolisme):
* **Rentang Suhu Optimal**: **16°C – 22°C**.
* **Dampak Suhu Dingin (< 14°C)**: Metabolisme ragi melambat; waktu fermentasi bisa memanjang hingga 48–72 jam tanpa merusak kualitas (fermentasi dingin sering menghasilkan keasaman malat yang sangat jernih).
* **Dampak Suhu Terlalu Panas (> 28°C)**: Ragi mengalami stres termal dan mati, sementara bakteri perusak berkembang biak liar. Kerusakan membran sel embrio biji terjadi jika suhu mencapai 35°C.

---

### 3. Uji Cuci Tangan Sederhana (The Friction Hand Test)

Sebagai pendamping pH meter, uji fisik manual dilakukan:
1. Ambil segenggam gabah basah dari tengah tangki fermentasi.
2. Remas dan gosok gabah di antara kedua telapak tangan di dekat telinga.
3. **Indikator Tuntas**: Jika terdengar suara derit gesekan kesat batu kerikil kerikil (*gravel friction sound*) dan gabah tidak lagi licin meluncur, pektin telah terhidrolisis 100%.`,
    content_type: 'text',
    duration_minutes: 20,
    order_index: 3,
    is_free: false,
    is_published: true,
    created_at: '2026-08-15T00:00:00Z',
    summary: 'Panduan kuantitatif pemantauan fermentasi: pemakaian pH meter dengan batas aman 3.8-4.2, manajemen suhu tangki eksotermik 16-22°C, dan uji gesekan kerikil gabah.',
    key_takeaways: [
      'Batas henti aman untuk fermentasi washed adalah saat pH mencapai 3.9–4.2; pH di bawah 3.6 memicu cacat cuka.',
      'Suhu massa tangki fermentasi harus dijaga di rentang 16°C–22°C guna mencegah kematian ragi.',
      'Uji gesekan fisik (gravel squeak) menjadi konfirmasi lapangan bahwa ikatan lendir telah lepas sempurna.',
    ],
  },

  {
    id: 'les-qp3-1',
    module_id: 'mod-qp3',
    title: 'Demucilasi Enzimatik Alami vs Mekanis (Eco-Pulper)',
    content: `# Demucilasi Enzimatik Alami vs Mekanis (Eco-Pulper): Integritas Kulit Tanduk

[DIAGRAM:processing-comparison]

Dalam metode olah basah (*Washed Process*), pelepasan lendir dapat dicapai melalui dua jalur teknologi yang memiliki kelebihan dan konsekuensi biokimiawi berbeda.

---

### 1. Demucilasi Enzimatik Alami (Wet / Dry Fermentation)

Metode tradisional di mana ceri yang sudah dikupas (*pulped coffee*) ditampung dalam tangki semen atau *food-grade plastic*:
* **Dry Fermentation**: Gabah ditumpuk tanpa tambahan air. Konsentrasi enzim dan gula lendir sangat pekat sehingga fermentasi berjalan cepat (12–24 jam).
* **Wet / Underwater Fermentation**: Gabah direndam seluruhnya di bawah air bersih. Suhu lebih stabil, kontak oksigen minimal (menekan bakteri asetat), tetapi fermentasi lebih lambat (24–40 jam) dan membutuhkan debit air tinggi.
* **Keunggulan Sensorik**: Kompleksitas rasa lebih berkembang; keasaman lebih bernuansa buah segar (*complex citric & malic acidity*).

---

### 2. Demucilasi Mekanis (Eco-Pulper / Mechanical Demucilator)

Mesin demucilator modern (seperti merk Pinhalense atau Penagos) menggunakan rotor silinder berkecepatan tinggi yang dilengkapi sikat baja dan injeksi air bertekanan:
* **Mekanisme**: Gaya gesek mekanis (*friction shear forces*) mengupas lendir pektin seketika (hitungan detik) tanpa menunggu kerja mikroba.
* **Tingkat Pengupasan Lendir (Stripping Rate)**: Dapat disetel dari 50% (menghasilkan semi-washed/honey) hingga 95% lendir terlepas.

| Parameter Evaluasi | Demucilasi Enzimatik Alami | Demucilasi Mekanis Eco-Pulper |
|---|---|---|
| **Konsumsi Air Bersih** | 5 – 15 Liter per kg gabah kering | 0.5 – 1.5 Liter per kg gabah kering (Sangat Hemat) |
| **Resiko Cacat Biji Pecah** | Nyaris 0% (Hanya gesekan pulper awal) | Sedang hingga Tinggi jika rotor aus atau setelan celah terlalu sempit |
| **Lama Proses** | 18 – 36 Jam di tangki | < 1 Menit langsung ke lantai jemur |
| **Karakter Cangkir** | Kompleksitas tinggi, asam cerah | Sangat bersih (*ultra-clean*), rasa murni varietas, body cenderung ringan |

> ⚠️ **Peringatan Q Processor**: Jika menggunakan mesin demucilator mekanis, periksa sampel gabah di bawah kaca pembesar. Jika ditemukan retakan pada parchment atau lecet pada embrio (*nibbed beans*), kurangi kecepatan putaran rotor (*RPM*) segera guna mencegah oksidasi dini saat penyimpanan.`,
    content_type: 'text',
    duration_minutes: 20,
    order_index: 1,
    is_free: false,
    is_published: true,
    created_at: '2026-08-15T00:00:00Z',
    summary: 'Perbandingan komprehensif antara fermentasi enzimatik tangki vs pengupasan mekanis eco-pulper dari sudut pandang efisiensi air, keutuhan parchment, dan profil sensorik.',
    key_takeaways: [
      'Fermentasi enzimatik alami menghasilkan keasaman yang lebih kompleks tetapi membutuhkan waktu dan manajemen pH ketat.',
      'Eco-pulper mekanis menghemat hingga 90% penggunaan air, namun beresiko memecahkan biji jika kalibrasi rotor salah.',
      'Keutuhan kulit tanduk (parchment) sangat vital untuk melindungi embrio selama masa penjemuran matahari.',
    ],
  },
  {
    id: 'les-qp3-2',
    module_id: 'mod-qp3',
    title: 'Washing Channels & Fraksinasi Gravitasi Gabah Basah',
    content: `# Washing Channels: Pemisahan Fraksi Densitas Hidrolik Gabah Basah

Setelah lendir terfermentasi sempurna, gabah kopi dialirkan ke dalam saluran pencucian panjang berkelok yang disebut **Washing Channels** (panjang 20–50 meter dengan kemiringan lantai 0.5%–1.0%).

---

### 1. Prinsip Kerja Fraksinasi Gravitasi

Air bersih dialirkan berlawanan arah atau searah dengan pergerakan operator yang mendorong gabah menggunakan papan kayu (*wooden paddle*):
* **Fraksi Grade 1 (Densitas Tertinggi / Paling Berat)**:
  Biji kopi dengan endosperm paling padat dan padat nutrisi akan mengendap di dasar saluran paling hulu (zona awal). Fraksi ini menghasilkan skor cupping tertinggi.
* **Fraksi Grade 2 (Densitas Sedang)**:
  Biji yang sedikit lebih ringan terbawa aliran air hingga tertahan di sekat (*weir board*) bagian tengah saluran.
* **Fraksi Grade 3 & Floaters (Densitas Ringan / Biji Rusak)**:
  Biji berlubang, rusak hama, atau perkembangan keping tak sempurna melayang di permukaan dan hanyut hingga ke ujung saluran.

---

### 2. Parameter Kualitas Air Bilasan Terakhir

Air yang digunakan dalam saluran pencucian akhir harus memenuhi standar air minum higienis:
* Suhu air dingin pegunungan (12°C – 18°C) membantu mengeraskan struktur sel gabah.
* Bebas dari kontaminasi bakteri koliform atau sisa air fermentasi asam sebelumnya.
* Bilasan dinyatakan tuntas jika air buangan saluran jernih (kekeruhan turbiditas mendekati nol dan tidak berbusa lagi).`,
    content_type: 'text',
    duration_minutes: 20,
    order_index: 2,
    is_free: false,
    is_published: true,
    created_at: '2026-08-15T00:00:00Z',
    summary: 'Desain dan operasional washing channels untuk memisahkan gabah basah ke dalam fraksi densitas Grade 1, Grade 2, dan Grade 3 menggunakan hidrodinamika air.',
    key_takeaways: [
      'Washing channels memisahkan biji kopi berdasarkan densitas keping kental gabah menggunakan aliran hidrolik.',
      'Gabah Grade 1 mengendap di zona paling hulu dan memiliki konsentrasi sukrosa serta asam organik paling padat.',
      'Air pencucian akhir wajib bersih dan dingin untuk mendinginkan massa gabah sebelum dipindahkan ke pengeringan.',
    ],
  },
  {
    id: 'les-qp3-3',
    module_id: 'mod-qp3',
    title: 'Protokol Perendaman Air Dingin 24 Jam (Kenyan Style Soaking)',
    content: `# Protokol Perendaman Air Dingin 24 Jam (Kenyan Style Double-Washed)

Metode perendaman air dingin (*cold water soaking*) adalah rahasia mutu legendaris kopi Kenya yang terkenal dengan atribut *cup cleanliness*, kejernihan rasa (*transparency*), dan stabilitas masa simpan hijau (*shelf-life*) hingga bertahun-tahun.

---

### 1. Prosedur Operasional Standar Perendaman

Setelah gabah dicuci bersih di washing channels, gabah tidak langsung dijemur di terik matahari, melainkan:
1. Gabah dipindahkan ke dalam tangki perendaman sekunder.
2. Tangki diisi air bersih dingin pegunungan hingga gabah terendam sedalam 15–20 cm di bawah permukaan air.
3. Massa gabah didiamkan terendam selama **16 hingga 24 jam**.

---

### 2. Mekanisme Ilmiah di Balik Perendaman Dingin

Mengapa perendaman air dingin menghasilkan perbedaan dramatis di meja cupping?

1. **Desorpsi Asam Residual & Senyawa Pahit**:
   Air bersih memicu gradien osmosis yang menarik sisa-sisa asam asetat berlebih dan tanin astringen keluar dari celah mikroskopis parchment.
2. **Katalisis Enzimatik Metabolisme Embrio**:
   Dalam kondisi terendam air dingin kaya oksigen, enzim fitase dan glikosidase aktif. Embrio biji kopi memulai fase pra-perkecambahan awal (*incipient germination*), memecah cadangan pati menjadi gula sederhana glukosa bebas.
3. **Penyetaraan Kadar Air Antar Biji**:
   Setiap butir gabah mencapai kejenuhan kadar air seragam (~45–50% kadar air basah), sehingga laju pengeringan di meja jemur nantinya berlangsung serentak tanpa belang-belang.

> 🏆 **Hasil Sensorik Meja Cupping**: Kopi yang melalui perendaman 24 jam Kenya style menunjukkan keasaman fosfat dan sitrat yang sangat tajam berkilau (*sparkling phosphoric acidity*), bebas sepenuhnya dari kesan rasa sepet (*chalky dryness*).`,
    content_type: 'text',
    duration_minutes: 20,
    order_index: 3,
    is_free: false,
    is_published: true,
    created_at: '2026-08-15T00:00:00Z',
    summary: 'Metode perendaman air bersih 24 jam ala Kenya: mekanisme desorpsi asam residual, pra-perkecambahan embrio biji, dan pencapaian keasaman fosfat yang jernih.',
    key_takeaways: [
      'Kenyan soaking dilakukan selama 16–24 jam di bawah air bersih dingin setelah proses pencucian selesai.',
      'Perendaman mengeluarkan residu tanin pahit dan senyawa asam berlebih melalui tekanan osmotik.',
      'Menghasilkan atribut cup cleanliness maksimal dan keasaman sparkling berkelas dunia.',
    ],
  },

  {
    id: 'les-qp4-1',
    module_id: 'mod-qp4',
    title: 'Biologi Natural Process: Kinetika Respirasi Buah Utuh & Difusi Rasa',
    content: `# Biologi Natural Process: Respirasi Buah Utuh & Dinamika Osmosis

[DIAGRAM:processing-comparison]

Olah kering (*Natural / Dry Process*) adalah metode pengolahan kopi tertua di dunia. Kendati tampak sederhana—menjemur ceri utuh di bawah terik matahari—secara biologis proses ini merupakan salah satu fenomena pasca-panen paling dinamis dan sarat resiko kerusakan.

---

### 1. Dua Fase Biologis Natural Process

Keringnya buah ceri kopi utuh di atas meja jemur terbagi dalam dua etape fisiologis:

\`\`\`
[FASE 1: RESPIRASI AKTIF (Hari 1 - 4)]          [FASE 2: KEMATIAN SEL (Hari 5 - 20)]
- Sel buah ceri masih hidup bernapas             - Membran sel pecah (senescence)
- Menghasilkan CO2, uap air & panas internal     - Gula lendir mengering & menyusut
- Kulit ceri tetap kenyal dan lembab             - Biji mengeras, warna ceri menghitam
\`\`\`

#### A. Fase 1: Respirasi Sel Ceri Hidup (Hari 1 hingga Hari 4)
* Buah ceri utuh yang baru dipetik bukanlah benda mati. Sel-sel parenkim eksokarp dan mesokarp masih melakukan respirasi aerobik, mengonsumsi glukosa dan oksigen serta membuang karbon dioksida dan air.
* **Tantangan Kritis**: Respirasi menghasilkan panas. Jika ceri ditumpuk tebal (>4 cm) pada hari-hari pertama, suhu internal tumpukan ceri dapat melonjak di atas 40°C, memicu fermentasi ragi liar yang tak terkontrol dan menimbulkan cacat busuk bau anggur asam (*stinker / overferment*).

#### B. Fase 2: Kematian Sel & Difusi Pasif (Hari 5 ke atas)
* Ketika kadar air daging buah turun di bawah batas ketahanan sel, membran plasma kehilangan selektivitas permeabilitasnya (*cell senescence*).
* Gula-gula cair, polifenol, dan asam organik pada mesokarp mengalami pemekatan konsentrasi akibat penguapan air. Terjadi transfer difusi pasif molekul rasa melintasi endokarp masuk ke dalam lapisan luar endosperm biji.

---

### 2. Standar Protokol Jemur Natural Berstandar Q Processing
* **Ketebalan Lapisan Ceri**: Hari 1–3 maksimal tebal 1 lapisan buah (*single layer cherry*). Jangan pernah menumpuk bertingkat.
* **Frekuensi Pembalikan**: Setiap 60–90 menit di siang hari untuk memastikan semua sisi buah terpapar sirkulasi udara merata dan mencegah timbulnya bercak kapang di bagian bawah buah.
* **Pelindung Hujan & Malam**: Wajib ditutup terpal berventilasi saat malam tiba untuk melindungi ceri dari embun dingin dini hari (*rehydration hazard*).`,
    content_type: 'text',
    duration_minutes: 25,
    order_index: 1,
    is_free: false,
    is_published: true,
    created_at: '2026-08-15T00:00:00Z',
    summary: 'Mekanisme biologis di balik olah kering (Natural): transisi dari respirasi sel hidup ke kematian seluler (senescence) dan SOP penjemuran single layer untuk mencegah cacat fermentasi liar.',
    key_takeaways: [
      'Selama 3–4 hari pertama natural process, ceri utuh masih hidup dan aktif bernapas melepaskan panas.',
      'Ketebalan ceri di awal penjemuran wajib satu lapis (single layer) guna menghindari pemanasan internal berlebih.',
      'Difusi molekul rasa mesokarp ke dalam biji terjadi secara pasif setelah dinding sel buah mengalami kematian seluler.',
    ],
  },
  {
    id: 'les-qp4-2',
    module_id: 'mod-qp4',
    title: 'Spektrum Honey Process Modern: White, Yellow, Red, hingga Black Honey',
    content: `# Spektrum Honey Process: Manajemen Mucilage, Naungan & Oksidasi

[DIAGRAM:processing-comparison]

Honey Process (dikenal sebagai *Pulped Natural* di Brasil) adalah metode di mana kulit luar buah (eksokarp) dikupas, namun sebagian atau seluruh lapisan lendir (*mucilage*) dibiarkan melekat pada kulit tanduk selama proses penjemuran.

---

### 1. Klasifikasi Warna Spektrum Honey Process

Warna akhir gabah honey bukanlah akibat pewarna tambahan, melainkan hasil interaksi antara **persentase lendir yang tersisa**, **kecepatan pengeringan**, dan **derajat oksidasi enzim polifenol oksidase**:

| Kategori Honey | % Lendir Tertinggal | Paparan Sinar Matahari | Durasi Jemur | Karakteristik Sensorik |
|---|---|---|---|---|
| **White Honey** | 10% – 20% (Eco-pulper stripping) | Terik langsung penuh (Full Sun) | 8 – 10 Hari | Sangat bersih, keasaman sitrat cerah, body ringan (*resembles washed*) |
| **Yellow Honey** | 25% – 50% lendir tersisa | Terik matahari langsung | 10 – 12 Hari | Rasa buah pir, apel manis, keasaman lembut bulat, body medium |
| **Red Honey** | 50% – 75% lendir tersisa | Naungan parsial (50% Shade net) | 14 – 18 Hari | Manis madu kental, asam malat buah beri merah, body bulat tebal |
| **Black Honey** | 100% (Semua lendir utuh) | Naungan tertutup + sirkulasi dingin | 20 – 30 Hari | Rasa manis selai kismis, anggur hitam, sirup kental, body sangat berat |

---

### 2. Biokimia Pencokelatan Enzimatik (Enzymatic Browning) pada Black Honey

Pada Black Honey, warna gelap pekat seperti tar gula tercipta karena:
1. Lendir yang kaya senyawa fenolik terpapar udara secara perlahan di bawah suhu teduh dingin.
2. Enzim **Polifenol Oksidase (PPO)** mengoksidasi senyawa asam klorogenat bebas menjadi orto-kuinon, yang kemudian berpolimerisasi menjadi pigmen melanin alami cokelat gelap.
3. Pengeringan yang lambat memungkinkan bakteri laktat dan ragi terus memproduksi asam laktat serta ester buah di permukaan parchment tanpa memicu kebusukan.`,
    content_type: 'text',
    duration_minutes: 20,
    order_index: 2,
    is_free: false,
    is_published: true,
    created_at: '2026-08-15T00:00:00Z',
    summary: 'Klasifikasi ilmiah spektrum honey process: White, Yellow, Red, dan Black Honey berdasarkan ketebalan lendir, paparan naungan, reaksi enzim polifenol oksidase, dan profil cangkir.',
    key_takeaways: [
      'Perbedaan varian honey ditentukan oleh persentase lendir yang tersisa dan kecepatan laju pengeringan.',
      'Black Honey mengering paling lambat di bawah naungan intensif, memicu pencokelatan enzimatik polifenol oksidase.',
      'Semakin gelap spektrum honey (Red/Black), profil rasa semakin bergeser ke arah manis sirup dengan body tebal.',
    ],
  },
  {
    id: 'les-qp4-3',
    module_id: 'mod-qp4',
    title: 'Sains Giling Basah (Wet-Hulled) Standar Spesialti: Menghilangkan Cacat Apek',
    content: `# Sains Giling Basah (Wet-Hulled / Asahan) Standar Spesialti Nusantara

Giling Basah (*Wet-Hulled*) adalah warisan teknologi pemrosesan khas Indonesia (terutama di Sumatra, Aceh Gayo, Mandheling, dan Toraja). Diciptakan secara turun-temurun untuk mengatasi tantangan iklim tropis bercurah hujan tinggi di mana pengeringan konvensional memakan waktu terlalu lama.

---

### 1. Perbedaan Mendasar Giling Basah vs Washed Tradisional

Pada kopi Washed standar internasional, gabah dijemur hingga kering tuntas (kadar air 10.5–12.0%) masih terbungkus rapat di dalam kulit tanduk (*parchment*), baru kemudian dikupas (*hulled*).

Sebaliknya, pada **Giling Basah**:
1. Ceri dikupas, difermentasi semalam, lalu dicuci.
2. Gabah dijemur singkat (1–2 hari) hanya sampai **Kadar Air 30% – 35%** (kondisi gabah masih kenyal lembek seperti karet penghapus / *soft spongy stage*).
3. Gabah basah ini langsung dimasukkan ke dalam mesin pengupas khusus bertenaga gesek tinggi (**Mesin Labu / Wet Huller**) untuk merobek kulit tanduk basah secara paksa.
4. Biji kopi mentah berwarna hijau kebiruan pekat (*green-blue bean*) keluar dalam keadaan telanjang tanpa perlindungan parchment, lalu dijemur kembali di lantai jemur hingga kadar air 12%.

---

### 2. Mengapa Giling Basah Komersial Sering Berbau Apek (Earthy/Musty)?

Cacat *earthy, muddy, apek, musty* yang sering melekat pada kopi Giling Basah kelas rendah **bukanlah karakter bawaan varietas**, melainkan cacat sanitasi:
* Saat biji ditelanjangi pada kadar air 35%, membran sel biji kopi yang terluka langsung bersentuhan dengan lantai tanah, debu, atau terpal berlumut.
* Senyawa **Geosmin** (diproduksi oleh bakteri tanah *Streptomyces*) dan **2-metilisoborneol** menyerap ke dalam minyak biji kopi, menciptakan bau tanah basah busuk.

---

### 3. Protokol "Specialty Grade Controlled Wet-Hulling"

Q Processor modern di Indonesia mampu memproduksi kopi Giling Basah dengan skor cupping 86+ (karakter rempah bersih cedar, tembakau manis, grapefruit, dan body tebal bertekstur sirup) melalui SOP ketat:

1. **Sortasi Ceri Awal Ketat**: Hanya ceri merah 21°+ Brix yang digunakan.
2. **Sanitasi Mesin Huller**: Mesin labu dibersihkan dari kerak lendir basi setiap hari; celah silinder dikalibrasi presisi agar tidak meremukkan ujung keping biji (*no crushed beans*).
3. **Penjemuran di Atas Raised Beds Bertingkat**: Biji hijau basah pasca-hulling dijemur di atas meja kasa gantung berventilasi tinggi (bukan di atas terpal di tanah!).
4. **Proteksi UV & Penjemuran Cepat**: Menjaga sirkulasi angin kencang agar fase 35% menuju 12% tercapai dalam waktu maksimal 4 hari tanpa pembentukan kapang geosmin.`,
    content_type: 'text',
    duration_minutes: 25,
    order_index: 3,
    is_free: false,
    is_published: true,
    created_at: '2026-08-15T00:00:00Z',
    summary: 'Membongkar sains proses Giling Basah (Wet-Hulled) Indonesia: tahapan pengupasan kadar air 30-35%, asal-usul cacat apek geosmin, dan SOP pengolahan raised beds untuk menghasilkan cup clean spice 86+ poin.',
    key_takeaways: [
      'Giling Basah mengupas kulit tanduk secara paksa pada kadar air tinggi 30%–35% sebelum biji dikeringkan tuntas.',
      'Cacat earthy/apek berasal dari kontaminasi bakteri tanah geosmin dan pengeringan lambat di atas tanah kotor, bukan karakter genetik kopi.',
      'Dengan raised beds bersih dan sanitasi mesin huller, Giling Basah menghasilkan kopi specialty bernilai tinggi dengan body tebal dan rempah bersih.',
    ],
  },

  {
    id: 'les-qp5-1',
    module_id: 'mod-qp5',
    title: 'Fermentasi Anaerobik Bioreaktor: Kontrol Tangki & Katup Satu Arah',
    content: `# Fermentasi Anaerobik Bioreaktor: Rekayasa Lingkungan Tanpa Oksigen

Fermentasi anaerobik modern adalah penerapan rekayasa proses industri anggur (*winemaking*) ke dalam dunia kopi. Tujuannya adalah menciptakan lingkungan tertutup tanpa oksigen bebas guna menghentikan pertumbuhan mikroba aerobik (seperti jamur kapang dan bakteri asam asetat) dan mendorong metabolisme ragi serta bakteri asam laktat homofermentatif.

---

### 1. Komponen Kritis Bioreaktor Anaerobik

Tangki fermentasi anaerobik spesifikasi Q Processing harus memiliki fitur teknis berikut:
* **Material Food Grade**: Plastik HDPE berkepadatan tinggi atau baja nirkarat (*stainless steel 304/316*). Tidak berpori dan mudah disterilkan.
* **Tutup Segel Kedap Udara (*Hermetic Gasket Seal*)**: Dilengkapi cincin silikon untuk mencegah kebocoran gas sekecil apa pun.
* **Katup Pelepasan Satu Arah (*One-way Airlock Valve*)**:
  Memungkinkan gas $CO_2$ hasil metabolisme mikroba keluar saat tekanan tangki meningkat, tetapi mencegah oksigen ($O_2$) dari atmosfer luar menyelinap masuk kembali.
* **Thermowell & Sampling Port**: Lubang sensor termokopel digital untuk memantau suhu pusat massa ceri tanpa membuka tutup tangki.

---

### 2. Kinetika Atmosfer di Dalam Tangki Tertutup

1. **Jam 0 – 6 (Konsumsi Oksigen Residu)**:
   Mikroorganisme dan sel ceri yang terperangkap mengonsumsi sisa oksigen di ruang kosong (*headspace*).
2. **Jam 6 – 24 (Akumulasi Tekanan CO2 Alami)**:
   Ragi memproduksi gas karbon dioksida secara masif. Karena $CO_2$ lebih berat dari udara (densitas 1.98 g/L vs udara 1.2 g/L), terbentuk selimut gas pelindung (*inert blanket*) yang menenggelamkan massa kopi.
3. **Tekanan Positif Internal**:
   Tekanan gas internal mencapai 0.5 – 1.5 bar (jika menggunakan tangki bertekanan terkontrol). Tekanan ini membantu mendorong senyawa aromatik volatil masuk kembali ke dalam matriks keping biji (*infusion effect*).

> ⚠️ **Protokol Keselamatan**: Jangan pernah menggunakan drum tertutup tanpa katup pelepas tekanan (*airlock*). Akumulasi gas $CO_2$ yang tidak terkontrol dapat memicu ledakan tangki berbahaya di stasiun pengolahan.`,
    content_type: 'text',
    duration_minutes: 25,
    order_index: 1,
    is_free: false,
    is_published: true,
    created_at: '2026-08-15T00:00:00Z',
    summary: 'Desain teknis tangki bioreaktor fermentasi anaerobik: prinsip one-way airlock valve, selimut gas karbon dioksida alami, dan keselamatan tekanan tangki.',
    key_takeaways: [
      'Fermentasi anaerobik memblokir oksigen untuk menekan bakteri asam asetat dan kapang pembusuk.',
      'One-way airlock memungkinkan pelepasan gas CO2 berlebih tanpa membiarkan oksigen atmosfer masuk kembali.',
      'Tekanan positif gas CO2 di dalam tangki membantu difusi senyawa aroma ester ke dalam embrio biji.',
    ],
  },
  {
    id: 'les-qp5-2',
    module_id: 'mod-qp5',
    title: 'Carbonic Maceration (CM): Injeksi Gas CO2 Murni & Macerasi Intraseluler',
    content: `# Carbonic Maceration (CM): Injeksi CO2 Murni & Fermentasi Intraseluler

Dipopulerkan di industri specialty coffee oleh Juara World Barista Championship (WBC) 2015 Sasa Sestic, teknik **Carbonic Maceration (CM)** mengadaptasi teknik pembuatan wine Beaujolais Prancis ke dalam pemrosesan buah ceri kopi utuh.

---

### 1. Mekanisme Carbonic Maceration

Perbedaan utama antara Anaerobik murni dan Carbonic Maceration terletak pada **injeksi gas eksternal**:

1. **Pengisian Ceri Utuh**: Ceri matang merah pilihan dimasukkan utuh tanpa dikupas ke dalam tangki baja nirkarat kedap udara.
2. **Flushing Gas Karbon Dioksida ($CO_2$) Murni**:
   Gas $CO_2$ murni kelas pangan (*food-grade*) diinjeksikan melalui katup bawah tangki. Gas $CO_2$ mendorong seluruh udara dan oksigen keluar melalui katup atas hingga atmosfer tangki menjadi 100% $CO_2$.
3. **Maserasi Intraseluler (Intracellular Fermentation)**:
   Di bawah atmosfer jenuh $CO_2$, sel-sel di dalam buah ceri yang utuh beralih ke respirasi anaerobik internal. Enzim-enzim di dalam sel buah mulai mencerna asam malat dan gula menjadi alkohol tanpa intervensi mikroba luar.

---

### 2. Pengendalian Suhu: Hot vs Cold Maceration

Q Processor mengontrol suhu lingkungan tangki untuk menentukan profil rasa yang ditargetkan:

* **Cold Maceration (Macération à Froid)**:
  * Suhu tangki dijaga pada **8°C – 14°C** (menggunakan ruangan berpendingin atau jaket air es).
  * Fermentasi berjalan lambat (hingga 7–14 hari).
  * **Karakter Cangkir**: Sangat elegan, keasaman malat buah persik, aprikot, melati, dan rasa yang bersih berkilau.
* **Warm Maceration**:
  * Suhu dijaga pada **22°C – 26°C**.
  * Fermentasi berlangsung 48–72 jam.
  * **Karakter Cangkir**: Aroma buah merah pekat, ceri hitam, winey, permen karet (*bubblegum*), dan body sangat tebal.`,
    content_type: 'text',
    duration_minutes: 25,
    order_index: 2,
    is_free: false,
    is_published: true,
    created_at: '2026-08-15T00:00:00Z',
    summary: 'Prinsip sains Carbonic Maceration (CM): injeksi gas CO2 murni, reaksi maserasi intraseluler dalam buah ceri utuh, serta perbedaan profil sensorik antara cold vs warm maceration.',
    key_takeaways: [
      'Carbonic Maceration melibatkan pengisian tangki dengan 100% gas CO2 murni untuk mengusir seluruh sisa oksigen.',
      'Fermentasi intraseluler memecah asam malat dari dalam dinding sel buah ceri utuh sebelum mikroba eksternal bekerja.',
      'Cold Maceration (8–14°C) menghasilkan profil floral dan keasaman bersih, sedangkan Warm Maceration (22–26°C) menghasilkan profil winey berbuah lebat.',
    ],
  },
  {
    id: 'les-qp5-3',
    module_id: 'mod-qp5',
    title: 'Inokulasi Kultur Starter, Thermal Shock & Etika Co-Fermentation SCA',
    content: `# Inokulasi Kultur Murni, Shock Termal & Kajian Etika Co-Fermentation

Evolusi bioproses kopi telah mencapai tingkat presisi bioteknologi modern melalui penggunaan inokulasi mikroba terseleksi, manipulasi suhu kejut termal (*thermal shock*), dan tren mutakhir fermentasi bersama bahan tambahan (*co-fermentation*).

---

### 1. Inokulasi Kultur Starter Terpilih (Selected Starter Cultures)

Alih-alih mengandalkan mikroba liar yang tidak menentu, Q Processor menginokulasikan galur ragi kering aktif murni yang telah diteliti secara ilmiah (misalnya ragi komersial *LalCafé Oro*, *LalCafé Intenso*, atau ragi anggur *Saccharomyces cerevisiae var. bayanus*):

* **Keunggulan**: Memastikan dominasi populasi mikroba unggul sejak jam pertama (mencapai konsentrasi $10^7 \text{ CFU/mL}$), menekan mikroba pembusuk, dan menjamin konsistensi rasa yang identik pada ratusan batch pengolahan berturut-turut.
* **Prosedur Rehidrasi**: Ragi kering direhidrasi dalam air hangat bersuhu 35°C–38°C selama 15–20 menit bersama sedikit cairan lendir ceri sebelum dicampurkan merata ke dalam tangki.

---

### 2. Rekayasa Shock Termal (Thermal Shock Processing)

Teknik kejut suhu termal digunakan untuk membuka pori-pori kulit buah secara instan dan mengunci senyawa aroma:
1. **Kejut Panas**: Ceri kopi direndam dalam air panas bersuhu **50°C – 60°C** selama 2–5 menit. Panas ini mematikan mikroba patogen permukaan, mendegradasi lapisan lilin eksokarp, dan meningkatkan permeabilitas sel mesokarp.
2. **Kejut Dingin**: Ceri segera ditransfer ke dalam air es bersuhu **10°C – 12°C**. Penurunan suhu mendadak membekukan struktur sel dan memerangkap molekul prekursor aromatik volatil agar tidak menguap.

---

### 3. Co-Fermentation & Infused Coffee: Posisi Resmi SCA & Transparansi Industri

Tren penambahan buah (persik, nanas, markisa), rempah (kayu manis), atau ragi beraroma ke dalam tangki fermentasi memicu debat terbesar di panggung kompetisi kopi dunia (World Coffee Events):

* **Co-Fermentation (Fermentasi Bersama Alami)**:
  Bahan baku alami utuh (misalnya potongan buah asli atau herba) difermentasikan bersama ceri kopi di dalam bioreaktor.
* **Infused / Artificially Flavored Coffee**:
  Penggunaan minyak esensial konsentrat sintetis atau perisa buatan (*artificial flavoring agents*) yang disuntikkan saat pemrosesan atau sangrai.

\`\`\`
                    [STANDAR TRANSPARANSI PRODUK KOPI]
+------------------------------------+------------------------------------+
|  BOLEH & DIAPRESIASI (TRANSPARAN)   |  PELANGGARAN ETIKA BERAT (CURANG)  |
+------------------------------------+------------------------------------+
| - Mencantumkan label pada kemasan: | - Menjual kopi co-fermentasi       |
|   "Anaerobic Co-fermented with     |   sebagai "100% Single Origin      |
|   Passion Fruit & Wine Yeast"      |   Natural Murni" tanpa keterangan  |
| - Jujur kepada buyer dan roaster   | - Memakai perisa sintetis kimia    |
| - Mematuhi regulasi kompetisi WBC  | - Menipu juri kompetisi cupping    |
+------------------------------------+------------------------------------+
\`\`\`

> 📜 **Ketentuan SCA & WCE**: Kopi yang diproses dengan penambahan bahan luar wajib memiliki **deklarasi transparansi 100%**. Manipulasi bahan tanpa pemberitahuan dianggap sebagai penipuan mutu (*misrepresentation*) yang mendiskualifikasi produk dari rantai pasok specialty.`,
    content_type: 'text',
    duration_minutes: 25,
    order_index: 3,
    is_free: false,
    is_published: true,
    created_at: '2026-08-15T00:00:00Z',
    summary: 'Aplikasi ragi murni terseleksi, mekanisme thermal shock kejut suhu panas-dingin, serta regulasi transparansi industri specialty coffee mengenai tren co-fermentasi dan kopi infusi.',
    key_takeaways: [
      'Inokulasi starter culture (ragi komersial murni) menjamin konsistensi profil rasa dan menekan bakteri pembusuk liar.',
      'Thermal shock menggunakan air panas 50–60°C disusul air es 10–12°C untuk mengunci senyawa prekursor aroma.',
      'SCA mewajibkan transparansi penuh pada kemasan bagi kopi yang diproses secara co-fermentasi; penyembunyian informasi adalah pelanggaran etika berat.',
    ],
  },

  {
    id: 'les-qp6-1',
    module_id: 'mod-qp6',
    title: 'Fisika Desorpsi Air: Kehilangan Air Bebas vs Difusi Air Terikat Seluler',
    content: `# Fisika Desorpsi Air: Perjalanan Air Bebas Menuju Air Terikat Seluler

Banyak petani kopi mengira pengeringan hanyalah soal "menunggu air menguap di bawah terik matahari". Bagi Q Processor, pengeringan adalah proses termodinamika perpindahan massa dan panas fluida yang menentukan apakah embrio biji kopi tetap hidup atau mati membusuk.

---

### 1. Dua Jenis Air di Dalam Biji Kopi

Kadar air awal gabah basah setelah dicuci adalah sekitar **45% – 55%**:

1. **Air Bebas (Free / Capillary Water)**:
   * Mengisi ruang antar-sel dan kapiler kulit tanduk.
   * Terikat sangat lemah oleh tegangan permukaan.
   * Mudah menguap pada fase awal pengeringan (dari 50% turun menuju ~25%).
2. **Air Terikat (Bound / Constitutional Water)**:
   * Berikatan hidrogen kuat dengan makromolekul selulosa, protein, dan polisakarida di dalam protoplasma keping biji.
   * Membutuhkan energi termal dan waktu difusi bertahap untuk berpindah dari inti terdalam embrio menuju permukaan luar (*interstitial diffusion*).

---

### 2. Kurva Laju Pengeringan (Drying Rate Curve)

Pengeringan kopi mengikuti tiga fase kinetika:

\`\`\`
[FASE 1: PENURUNAN CEPAT (50% -> 30%)]   -> Kehilangan air bebas permukaan (Hari 1-3)
[FASE 2: LAJU MENURUN (30% -> 18%)]     -> Kecepatan dibatasi difusi internal sel (Hari 4-10)
[FASE 3: TITIK KRITIS (18% -> 11%)]     -> Menstabilkan struktur kristal air terikat (Hari 11-18)
\`\`\`

* **Bahaya Pengeringan Terlalu Cepat (Case Hardening)**:
  Jika gabah dipanggang di terik matahari ekstrem (>42°C) di awal penjemuran, permukaan luar kulit tanduk mengeras dan menutup pori-pori kapiler. Akibatnya, air terikat di bagian inti biji terjebak tidak bisa keluar. Biji terlihat kering di luar tetapi basah di dalam, memicu penjamuran saat disimpan di karung!
* **Bahaya Pengeringan Terlalu Lambat**:
  Jika penurunan kadar air memakan waktu lebih dari 25 hari akibat cuaca hujan berkabut terus-menerus, spora kapang akan tumbuh menembus parchment.`,
    content_type: 'text',
    duration_minutes: 25,
    order_index: 1,
    is_free: false,
    is_published: true,
    created_at: '2026-08-15T00:00:00Z',
    summary: 'Analisis termodinamika desorpsi air pada biji kopi: perbedaan kinetika air bebas vs air terikat, kurva laju pengeringan, dan bahaya pengerasan permukaan (case hardening).',
    key_takeaways: [
      'Air bebas pada kapiler luar mudah menguap, sedangkan air terikat membutuhkan difusi bertahap dari inti sel biji.',
      'Suhu penjemuran di atas 42°C menyebabkan case hardening (permukaan mengeras sementara inti tetap basah).',
      'Laju pengeringan ideal berkisar antara 12 hingga 20 hari untuk mencapai stabilitas seluler optimal.',
    ],
  },
  {
    id: 'les-qp6-2',
    module_id: 'mod-qp6',
    title: 'Kadar Air (10.0%–12.0%) vs Water Activity (aw ≤ 0.60) & Toksin OTA',
    content: `# Kadar Air (Moisture Content) vs Water Activity (aw): Perlindungan Mutlak Mutu

Di masa lalu, industri kopi hanya mengukur persentase **Kadar Air (Moisture Content / MC)**. Namun sains pasca-panen modern membuktikan bahwa dua lot kopi dengan kadar air yang persis sama (misal 11.5%) dapat memiliki ketahanan simpan yang bertolak belakang jika nilai **Aktivitas Air (*Water Activity / aw*)** berbeda.

---

### 1. Definisi & Perbedaan Mendasar

* **Kadar Air (Moisture Content / MC)**:
  * Mengukur **kuantitas total air** di dalam sampel kopi (dinyatakan dalam % berat basah).
  * Standar ekspor resmi internasional (SCA & ICO): **10.0% – 12.0%**.
  * Alat ukur: Moisture tester kapasitif (seperti Sinar, Dole, atau Wile Coffee).
* **Water Activity ($a_w$)**:
  * Mengukur **energi bebas / ketersediaan molekul air** yang dapat digunakan oleh mikroorganisme (bakteri, jamur) untuk bertumbuh dan melangsungkan reaksi enzimatik degradasi.
  * Standar aman CQI Q Processing: **$a_w le 0.60$** (Rentang ideal: **0.53 – 0.58 $a_w$** pada suhu 25°C).
  * Alat ukur: *Water Activity Meter* berbasis cermin titik embun (*chilled mirror dew point*).

---

### 2. Ambang Batas Pertumbuhan Mikroorganisme Berdasarkan Nilai $a_w$

\`\`\`
   Nilai aw        Resiko Biologis & Kimiawi
   +---------+
   |  > 0.85 | -> Pertumbuhan bakteri patogen dan pembusuk aktif
   |  > 0.80 | -> Ragi osmofilik dan kapang umum berkembang biak masif
   |  > 0.65 | -> TITIK BAHAYA: Kapang Aspergillus ochraceus memproduksi Ochratoxin A!
   +---------+  -------------------------------------------------------------
   | <= 0.60 | -> ZONA AMAN CQI: Tidak ada mikroba yang mampu berkembang biak!
   |  < 0.50 | -> Biji kopi terlalu kering; embrio mati, aroma sangrai rapuh
   +---------+
\`\`\`

---

### 3. Ancaman Toksin Ochratoxin A (OTA)

* **Ochratoxin A (OTA)** adalah racun mikotoksin yang diproduksi oleh kapang *Aspergillus ochraceus* dan *Penicillium verrucosum*.
* Toksin ini bersifat karsinogenik (penyebab kanker ginjal) dan **tidak rusak oleh suhu tinggi mesin sangrai (roasting)**!
* Uni Eropa (EU) memberlakukan batas legal ketat: kontaminasi OTA pada green coffee maksimal **5.0 mikrogram/kg (ppb)**. Kopi yang memiliki $a_w > 0.65$ di gudang beresiko ditolak dan dimusnahkan di pelabuhan tujuan ekspor.`,
    content_type: 'text',
    duration_minutes: 20,
    order_index: 2,
    is_free: false,
    is_published: true,
    created_at: '2026-08-15T00:00:00Z',
    summary: 'Membedah korelasi kritis antara Moisture Content (10.0-12.0%) dan Water Activity (aw ≤ 0.60), ambang batas mikrobiologis, serta pencegahan racun karsinogenik Ochratoxin A.',
    key_takeaways: [
      'Moisture content mengukur jumlah total air, sedangkan water activity (aw) mengukur ketersediaan air untuk aktivitas mikroba.',
      'Standar emas pasca-panen adalah kadar air 10.0–12.0% dengan nilai water activity (aw) di bawah 0.60.',
      'Nilai aw di atas 0.65 memicu tumbuhnya jamur penghasil racun ginjal Ochratoxin A yang tahan panas roasting.',
    ],
  },
  {
    id: 'les-qp6-3',
    module_id: 'mod-qp6',
    title: 'Manajemen Fasilitas Pengeringan: Solar Dome, Raised Beds & Mesin Guardiola',
    content: `# Manajemen Fasilitas Pengeringan: Solar Dome, Raised Beds & Mesin Guardiola

Pengeringan kopi spesialti membutuhkan pengendalian iklim mikro yang presisi guna melindungi keping biji dari paparan panas ekstrem dan kelembaban udara malam hari.

---

### 1. Meja Jemur Gantung Afrika (Raised African Beds)

* **Konstruksi**: Meja berketinggian 80–100 cm dari tanah menggunakan rangka bambu/baja dan alas jaring kasa nilon tahan UV (*UV-stabilized mesh*).
* **Prinsip Termodinamika**: Angin dapat bertiup bebas melintasi bagian atas dan bawah hamparan gabah, menghilangkan lapisan batas uap air jenuh (*saturated boundary layer*).
* **Kelebihan**: Mengeliminasi kontak dengan kelembaban tanah dan mempercepat pengeringan seragam hingga 30% dibanding lantai semen konvensional.

---

### 2. Rumah Pengering Tenaga Surya (Solar Dome / Greenhouse)

Di wilayah pegunungan basah tropis Indonesia (seperti dataran tinggi Gayo atau Flores), penjemuran terbuka sering terganggu hujan siang hari.
* **Fitur Solar Dome Modern**:
  * Atap plastik polikarbonat berfilter UV untuk meredakan sengatan panas langsung.
  * Turbin ventilator bertenaga angin atau kipas exhaust bertenaga surya untuk membuang udara panas lembab keluar.
  * Jaring naungan hitam (*black shade net 50%*) yang dapat ditarik untuk mengatur suhu ruangan agar tidak melebihi **38°C**.

---

### 3. Mesin Pengering Mekanis Terkendali (Guardiola Dryers)

Ketika kapasitas panen harian di kebun mencapai puluhan ton, pengeringan matahari murni tidak lagi mencukupi:
* **Mekanisme Mesin Guardiola**: Drum silinder horizontal berlubang yang berputar lambat sembari dihembusi udara hangat bersih dari tungku biomassa atau penukar panas (*heat exchanger*).
* **Protokol Suhu Ketat Q Processor**:
  * Suhu hembusan udara (*air inlet temperature*) maksimal **45°C**.
  * Suhu internal massa biji kopi (*bean core temperature*) **TIDAK BOLEH MELEBIHI 40°C**.
  * Penurunan kadar air maksimal 1.0% – 1.5% per hari pada fase kritis untuk menjaga viabilitas embrio.`,
    content_type: 'text',
    duration_minutes: 20,
    order_index: 3,
    is_free: false,
    is_published: true,
    created_at: '2026-08-15T00:00:00Z',
    summary: 'Desain rekayasa fasilitas pengeringan: dinamika sirkulasi udara raised beds, manajemen ventilasi solar dome greenhouse, dan protokol suhu aman mesin mekanis Guardiola.',
    key_takeaways: [
      'Raised beds memungkinkan sirkulasi angin dua arah (atas dan bawah) guna mencegah penumpukan uap jenuh.',
      'Suhu di dalam solar dome harus dikontrol dengan ventilasi aktif agar tidak melampaui 38°C.',
      'Pada pengering mekanis Guardiola, suhu massa biji kopi mutlak tidak boleh melampaui 40°C demi menjaga embrio hidup.',
    ],
  },

  {
    id: 'les-qp7-1',
    module_id: 'mod-qp7',
    title: 'Fase Reposo (Resting Gabah) & Pengemasan Hermetik GrainPro',
    content: `# Fase Reposo (Resting Gabah): Penyetaraan Gradien Kelembaban & Proteksi Hermetik

Kopi yang baru saja diangkat dari meja jemur belum siap untuk dikupas atau disangrai. Biji kopi berada dalam kondisi stres termal dan mengalami ketidakseimbangan gradien kelembaban internal. Inilah mengapa fase **Reposo** (berasal dari bahasa Spanyol yang berarti *istirahat*) menjadi tahapan wajib dalam protokol CQI Q Processing.

---

### 1. Apa yang Terjadi Selama Fase Reposo (30–60 Hari)?

1. **Penyetaraan Kelembaban Antar-Sel (Moisture Equilibrium)**:
   Molekul air bebas dan air terikat menyebar kembali secara homogen dari bagian dalam inti embrio menuju keping luar selulosa.
2. **Kompensasi Tekanan Osmotik**:
   Struktur lipid (minyak kopi) dan asam klorogenat mengalami stabilisasi fase amorf.
3. **Penyatuan Warna Klorofil**:
   Biji yang tadinya belang-belang memudar menjadi warna hijau kebiruan segar (*uniform bluish-green color*).

---

### 2. Standar Ruang Penyimpanan Reposo (Dry Parchment Warehouse)

Gabah kopi disimpan tetap terbungkus di dalam kulit tanduk (*in parchment*):
* **Suhu Gudang**: Dijaga sejuk stabil antara **18°C – 22°C**.
* **Kelembaban Relatif Udara (Relative Humidity / %RH)**: Dijaga ketat pada rentang **55% – 65% RH**.
* **Penyangga Palet Kayu**: Karung kopi wajib diletakkan di atas palet kayu berketinggian minimal 15 cm dari lantai semen dan berjarak 50 cm dari dinding gudang.

---

### 3. Teknologi Kemasan Hermetik (GrainPro / Ecotact)

Karung goni tradisional (*jute bags*) bersifat higroskopis berpori besar yang membiarkan kelembaban udara luar keluar masuk bebas:
* **Kantong Hermetik Multi-layer**: Kantong plastik polietilen khusus berkepadatan tinggi dengan lapisan penghalang gas (*gas barrier EVOH*).
* **Mekanisme**: Menjaga atmosfer internal biji kopi tetap konstan, mencegah penyerapan kelembaban udara luar, dan mematikan serangga hama gudang (*coffee bean weevil*) melalui penipisan oksigen alami (*modified atmosphere storage*).`,
    content_type: 'text',
    duration_minutes: 25,
    order_index: 1,
    is_free: false,
    is_published: true,
    created_at: '2026-08-15T00:00:00Z',
    summary: 'Pentingnya fase reposo (istirahat gabah 30-60 hari): homogenisasi molekul air internal, standar suhu gudang 18-22°C, dan proteksi kemasan hermetik multi-layer GrainPro.',
    key_takeaways: [
      'Gabah kopi wajib diistirahatkan (reposo) selama 30 hingga 60 hari sebelum dilakukan pengupasan (hulling).',
      'Reposo menyeimbangkan gradien kelembaban antara inti biji dan keping luar, mencegah rasa woody saat disangrai.',
      'Kemasan hermetik (GrainPro/Ecotact) melindungi green coffee dari oksidasi dan fluktuasi kelembaban udara sekitar.',
    ],
  },
  {
    id: 'les-qp7-2',
    module_id: 'mod-qp7',
    title: 'Operasional Hulling Presisi: Kalibrasi Friksi & Kontrol Suhu Biji',
    content: `# Operasional Dry Mill Presisi: Kalibrasi Mesin Huller & Pengendalian Friksi

Pengupasan kulit tanduk kering (*dry hulling*) adalah proses mekanis berkecepatan tinggi di mana gabah kering diubah menjadi biji beras mentah (*green coffee beans*). Kesalahan kalibrasi pada tahap ini dapat merusak seluruh kerja keras pemrosesan berminggu-minggu sebelumnya.

---

### 1. Jenis-Jenis Mesin Huller Komersial

1. **Huller Silinder Gesek (Cross-beater / Engelberg Huller)**:
   * Menggunakan silinder berulir pisau tumpul yang berputar di dalam saringan baja berlubang.
   * Mengandalkan gesekan antar butir gabah untuk merontokkan kulit tanduk.
   * **Resiko**: Menghasilkan panas gesekan tinggi. Jika beban motor terlalu padat, suhu biji dapat melonjak di atas 45°C!
2. **Huller Pisau Pemotong Modern (Closed-circuit Knife Huller)**:
   * Menggunakan pisau berpresisi tinggi yang memotong kulit tanduk tanpa menekan massa biji.
   * Dilengkapi blower hisap kuat untuk langsung menyedot serpihan kulit tanduk keluar.

---

### 2. Standar Pengoperasian Q Processor di Pabrik Penggilingan (Dry Mill)

* **Ukur Kadar Air Sebelum Hulling**: Gabah kopi harus berada pada kadar air **10.5% – 11.5%**. Jika gabah masih terlalu lembek (>13%), biji akan gepeng tertekan; jika terlalu kering (<9.5%), biji akan pecah menjadi remah-remah.
* **Batas Suhu Kritis Biji Mentah**:
  Suhu biji kopi hijau yang keluar dari corong mesin huller **TIDAK BOLEH MELEBIHI 35°C**.
  * Panas gesekan berlebih mencairkan senyawa lemak kopi dan memicu degradasi aroma volatil seketika.
* **Pembersihan Kulit Perak (*Polishing*)**:
  Penggunaan mesin polisher sikat lembut untuk membersihkan sisa lapisan silverskin tanpa merusak embrio.`,
    content_type: 'text',
    duration_minutes: 20,
    order_index: 2,
    is_free: false,
    is_published: true,
    created_at: '2026-08-15T00:00:00Z',
    summary: 'Panduan operasional mesin huller penggilingan kering: kalibrasi celah gesekan, pencegahan cacat biji pecah, dan batas suhu pengupasan maksimal 35°C.',
    key_takeaways: [
      'Pengupasan gabah kering hanya boleh dilakukan jika kadar air berada pada rentang aman 10.5%–11.5%.',
      'Suhu biji kopi yang keluar dari mesin huller mutlak tidak boleh melampaui 35°C guna mencegah oksidasi minyak kopi.',
      'Sistem blower hisap pneumatik sangat krusial untuk memisahkan debu parchment panas dari keping biji hijau.',
    ],
  },
  {
    id: 'les-qp7-3',
    module_id: 'mod-qp7',
    title: 'Grading Fisik Standar CQI/SCA: Sieve, Meja Gravitasi & Optical Sorter',
    content: `# Grading Fisik Standar CQI/SCA: Ayakan Sieve, Meja Gravitasi & Optical Sorter

Sebelum sebuah lot kopi spesialti dapat dikemas dan diekspor, biji kopi hijau harus melewati tiga tahap pemisahan fisik berstandar internasional guna memenuhi kualifikasi **Grade 1 Specialty**.

---

### 1. Pemisahan Ukuran Ukur Biji (Screen Sizing / Sieve Shaker)

Biji kopi disortir menggunakan susunan pelat ayakan logam berlubang bundar dengan satuan ukuran 1/64 inci:

| Ukuran Ayakan (Screen) | Diameter Lubang (Inci) | Kategori Perdagangan |
|---|---|---|
| **Screen 19 – 20** | 19/64" – 20/64" (7.5 – 8.0 mm) | Very Large / Jumbo (Maragogipe/Pacamara) |
| **Screen 17 – 18** | 17/64" – 18/64" (6.75 – 7.1 mm) | AA Grade / Supremo / Large (Standar Utama) |
| **Screen 15 – 16** | 15/64" – 16/64" (6.0 – 6.35 mm) | AB Grade / Excelso / Medium |
| **Screen 14 ke bawah** | < 14/64" (< 5.5 mm) | Small Beans / Biji Kecil |
| **Screen Khusus Slot** | Lubang Lonjong (Slotted) | Pemisah biji Peaberry (biji tunggal bulat) |

---

### 2. Pemisahan Berat Jenis: Meja Gravitasi (Gravity Table Separator)

Ukuran biji yang seragam belum tentu menjamin kepadatan yang sama. Meja gravitasi menggunakan dek bergetar dengan kemiringan dua dimensi yang dialiri hembusan udara dari bawah:
* Biji yang sangat padat (*heavy dense beans*) melompat ke sisi atas dek (High Density Lot).
* Biji berongga, keropos, atau rusak serangga yang berbobot ringan melayang ke sisi bawah dek (Low Density Rejects).

---

### 3. Pemisahan Warna Otomatis (Optical Color Sorter)

Mesin penyortir warna modern menggunakan kamera CCD atau sensor inframerah berkecepatan tinggi:
* Biji kopi dijatuhkan meluncur dalam aliran tipis di depan sensor optik.
* Jika terdeteksi anomali warna (misal: hitam pekat, kekuningan busuk/sour bean, atau bercak putih jamur), katup solenoid pneumatik menembakkan semburan udara bertekanan tinggi (*air ejector pulse*) dalam hitungan milidetik untuk menendang biji cacat keluar dari jalur.`,
    content_type: 'text',
    duration_minutes: 20,
    order_index: 3,
    is_free: false,
    is_published: true,
    created_at: '2026-08-15T00:00:00Z',
    summary: 'Tiga pilar sortasi fisik ekspor specialty: standardisasi ayakan screen sieve ukuran lubang 1/64 inci, pemisahan densitas meja gravitasi, dan eliminasi cacat dengan optical color sorter.',
    key_takeaways: [
      'Ukuran screen sieve diukur dalam pecahan 1/64 inci; screen 17–18 adalah ukuran standar kopi arabika specialty premium.',
      'Meja gravitasi memisahkan biji padat bermutu tinggi dari biji keropos ringan menggunakan getaran dan hembusan udara.',
      'Optical color sorter menembakkan semburan udara berkecepatan tinggi untuk menyingkirkan biji cacat warna secara otomatis.',
    ],
  },

  {
    id: 'les-qp8-1',
    module_id: 'mod-qp8',
    title: 'Diagnostik Cacat Sensorik Cupping: Melacak Kesalahan Lapangan di Meja Uji Rasa',
    content: `# Diagnostik Cacat Sensorik Cupping: Menghubungkan Rasa Buruk dengan Kelalaian Lapangan

Kemampuan paling berharga dari seorang Q Processor adalah mampu menjadi "detektif forensik rasa". Ketika mencicipi secangkir kopi di meja cupping yang memiliki rasa cacat (*taint* atau *fault*), seorang Q Processor dapat langsung menunjuk mesin, tangki, atau fase mana yang gagal dikontrol di lapangan.

---

### 1. Matriks Diagnostik Cacat Proses Pasca-Panen

| Karakter Cacat di Meja Cupping | Penyebab Kimiawi & Mikrobiologis | Titik Kelalaian Operasional Lapangan |
|---|---|---|
| **Sour / Vinegar (Cuka Menyengat)** | Akumulasi asam asetat berlebih dari bakteri *Acetobacter* | Fermentasi terbuka terlalu lama; kebocoran oksigen pada tangki anaerobik; pH anjlok < 3.6 |
| **Overfermented / Stinker / Busuk Busuk** | Pembusukan bahan organik; pembentukan asam butirat & etil ester busuk | *Harvest delay* tumpukan ceri > 12 jam; ceri menginap di dasar tangki yang tidak dicuci |
| **Oniony / Propionic (Bau Bawang Busuk)** | Bakteri asam propionat berkembang biak di air tergenang | Penggunaan air fermentasi berulang kali (*recycled dirty water*); tangki cuci berlumpur |
| **Phenolic / Rioy (Bau Antiseptik/Obat Batuk)** | Jamur menembus jaringan selulosa sebelum dipetik | Membiarkan ceri kering hitam di pohon (*raisin*) tercampur ke dalam lot olah basah |
| **Earthy / Muddy / Musty (Bau Tanah Lembab)** | Senyawa Geosmin dari bakteri tanah *Streptomyces* | Menjemur gabah/biji langsung di atas tanah; terpal jemur berlumut; wet hulling terlalu becek |
| **Baggy / Woody / Past Crop (Bau Karung Kertas)** | Oksidasi lipid & hilangnya klorofil keping biji | Disimpan di karung goni di gudang lembab berkadar air > 12.5% atau $a_w > 0.65$ |

---

### 2. Protokol Tindakan Korektif (Corrective Action Protocol)

Jika sebuah batch terdeteksi memiliki aroma *stinker* atau *vinegar*:
1. **Karantina Lot**: Pisahkan seluruh karung dari lot tersebut agar tidak mencemari lot ekspor lainnya.
2. **Audit Sanitasi Tangki**: Cuci seluruh tangki bioreaktor menggunakan larutan pembersih *peracetic acid* berkonsentrasi rendah atau kalsium hipoklorit, bilas dengan air bersih mengalir hingga pH netral 7.0.
3. **Kalibrasi Ulang Sensor pH**: Cek elektroda pH meter menggunakan cairan kalibrasi buffer standar pH 4.01 dan 7.00.`,
    content_type: 'text',
    duration_minutes: 25,
    order_index: 1,
    is_free: false,
    is_published: true,
    created_at: '2026-08-15T00:00:00Z',
    summary: 'Matriks komprehensif forensik cacat sensoris cupping: mengidentifikasi penyebab mikrobiologis rasa vinegar, stinker, oniony, phenolic, dan earthy beserta SOP tindakan korektif wet mill.',
    key_takeaways: [
      'Cacat sour vinegar disebabkan oleh oksidasi bakteri asetat saat pH fermentasi turun di bawah ambang batas aman 3.6.',
      'Aroma oniony propionat bersumber dari penggunaan air sirkulasi yang kotor dan tergenang di dasar tangki.',
      'Cacat earthy bukan karakter tanah terroir, melainkan kontaminasi bakteri geosmin akibat penjemuran kontak tanah.',
    ],
  },
  {
    id: 'les-qp8-2',
    module_id: 'mod-qp8',
    title: 'SOP Processing Logbook CQI & Sistem Traceability Batch Kopi',
    content: `# SOP Processing Logbook CQI & Sistem Keterlacakan (Traceability) Batch

Di era kopi spesialti modern, data adalah mata uang penjamin mutu. Pembeli green coffee internasional (*importers & roasters*) bersedia membayar premi harga tinggi untuk kopi yang memiliki transparansi rekam jejak bioproses lengkap per lot.

---

### 1. Anatomi Lembar Kerja Batch (CQI Processing Log Sheet)

Setiap karung atau tangki yang masuk ke stasiun basah wajib memiliki kartu identitas (*Batch Identification Tag*) yang terhubung ke lembar logbook digital/fisik:

\`\`\`
================================================================================
CHERRYEDU CQI PROCESSING LOGBOOK (BATCH CARD)
================================================================================
LOT ID            : CE-2026-GY-AN04         TANGGAL PANEN     : 14 September 2026
VARIETAS          : Ateng Super & Tim-Tim   ELEVASI KEBUN     : 1.650 mdpl
BLOK LAHAN        : Desa Belok Sidan        BERAT CERI AWAL   : 1.200 kg
BRIX AWAL CERI    : 22.4° Brix              PERSENTASE FLOAT  : 2.1% (Dibuang)
--------------------------------------------------------------------------------
METODE PROSES     : Anaerobic Natural (Inokulasi Ragi LalCafé Oro)
TANGKI BIREAKTOR  : Tank B-02 (Kapasitas 1.500 L - Stainless Steel 304)
DOSIS RAGI        : 1.0 gram / 10 kg ceri (Rehidrasi 35°C selama 20 menit)
--------------------------------------------------------------------------------
LOG MONITORING FERMENTASI:
Jam Ke | Tanggal & Jam | pH Lendir | Suhu Inti (°C) | Tekanan (Bar) | Operator
-------+---------------+-----------+----------------+---------------+-----------
0      | 14/09 18:00   | 5.62      | 18.5           | 0.00 (Flush)  | Budi
12     | 15/09 06:00   | 4.95      | 19.2           | 0.35          | Slamet
24     | 15/09 18:00   | 4.41      | 20.8           | 0.85          | Budi
36     | 16/09 06:00   | 4.08      | 21.0           | 1.10          | Slamet
48     | 16/09 18:00   | 3.92 (STOP| 20.5           | 1.15          | Budi
--------------------------------------------------------------------------------
LOG PENGERINGAN (RAISED BEDS - SOLAR DOME C):
Hari Ke| Tanggal       | MC (%)    | Aw (Aktivitas) | Max Temp (°C) | Cuaca
-------+---------------+-----------+----------------+---------------+-----------
1      | 17/09/2026    | 52.0%     | > 0.90         | 34.2          | Terik
5      | 21/09/2026    | 32.5%     | 0.82           | 33.0          | Berawan
10     | 26/09/2026    | 18.2%     | 0.71           | 35.5          | Terik
16     | 02/10/2026    | 11.2%     | 0.56 (LULUS)   | 31.0          | Terik
--------------------------------------------------------------------------------
STATUS REPOSO     : Gudang Hermetik GrainPro (Palet 04) - Tanggal Hulling: 15 Nov
================================================================================
\`\`\`

---

### 2. Standar Penomoran Kode Lot (Lot Numbering Standard)

Kode lot harus disusun secara sistematis agar dapat dilacak hingga ke tanggal pemetikan dan blok petani:
**[KODE PRODUSEN] - [TAHUN] - [LOKASI] - [METODE PROSES] - [NOMOR URUT BATCH]**
*Contoh*: **CE-2026-GY-AN04** = CherryEdu - Tahun 2026 - Gayo - Anaerobic Natural - Batch ke-4.`,
    content_type: 'text',
    duration_minutes: 20,
    order_index: 2,
    is_free: false,
    is_published: true,
    created_at: '2026-08-15T00:00:00Z',
    summary: 'Template resmi SOP lembar kerja pemrosesan kopi (CQI Processing Logbook): pencatatan jam-jamanan nilai pH, suhu, tekanan tangki, kelembaban penjemuran, dan standardisasi penomoran lot traceability.',
    key_takeaways: [
      'Logbook pemrosesan adalah bukti ilmiah konsistensi kendali mutu yang meningkatkan nilai jual green coffee.',
      'Pencatatan kurva pH dan suhu tangki secara berkala memastikan fermentasi dihentikan tepat pada titik optimal.',
      'Sistem penomoran lot sistematis memungkinkan traceability penuh dari cangkir cupping kembali ke tanggal panen kebun.',
    ],
  },
  {
    id: 'les-qp8-3',
    module_id: 'mod-qp8',
    title: 'Pengolahan Air Limbah Wet Mill & Pemanfaatan Biomassa Ceri',
    content: `# Pengolahan Air Limbah Wet Mill & Pemanfaatan Biomassa Ceri Higienis

Stasiun basah (*wet mill*) yang memproduksi kopi bernilai tinggi tidak boleh merusak lingkungan sekitar. Air sisa pencucian kopi mengandung beban organik sangat tinggi yang jika dibuang langsung ke sungai dapat mematikan ekosistem perairan.

---

### 1. Karakteristik Beban Pencemar Air Limbah Kopi (*Coffee Wastewater*)

Air buangan dari tangki fermentasi dan saluran pencucian memiliki karakteristik:
* **pH Sangat Asam**: pH 3.8 – 4.5 (akibat kandungan asam laktat, asetat, dan pektat terlarut).
* **BOD (Biological Oxygen Demand)**: 2.500 – 15.000 mg/L (kebutuhan oksigen biologis sangat tinggi).
* **COD (Chemical Oxygen Demand)**: 5.000 – 35.000 mg/L.
Sebagai perbandingan, limbah cair rumah tangga biasa hanya memiliki BOD ~250 mg/L!

---

### 2. Sistem Pengolahan Limbah Biologis Bertingkat (Eco-Lagoon System)

Q Processor merancang sistem pengolahan limbah ramah lingkungan berbiaya efisien:

\`\`\`
[AIR LIMBAH ASAM] 
       |
       v
1. BAK PENETRALAN & SEDIMENTASI ---> Ditambahkan kapur pertanian (CaCO3) untuk menaikkan pH ke 6.5 - 7.0
       |
       v
2. KOLAM ANAEROBIK (Deep Lagoon)  ---> Bakteri metanogen mengurai pektin & gula pekat tanpa oksigen
       |
       v
3. KOLAM AEROBIK (Aeration Pond)  ---> Sirkulasi kincir air memasok oksigen untuk mengurai sisa bahan organik
       |
       v
4. LAHAN BASAH BUATAN (Wetlands)  ---> Tanaman Rumput Vetiver (*Chrysopogon zizanioides*) & Enceng Gondok
       |                               menyerap sisa nitrogen & fosfat
       v
[AIR AMAN DIKEMBALIKAN KE SUNGAI] (BOD < 50 mg/L, pH 6.5 - 8.5)
\`\`\`

---

### 3. Pemanfaatan Biomassa: Cascara Higienis & Kompos Bokashi

Limbah padat kulit ceri (*pulp*) mencapai 40–50% dari total berat panen segar:
* **Produksi Cascara Specialty Higienis**:
  * Kulit ceri dari pemrosesan Washed/Honey yang menggunakan ceri matang 22°+ Brix dikumpulkan segera.
  * Dikeringkan di atas raised beds terlindung matahari langsung hingga kadar air < 11.0% dalam waktu maksimal 7 hari untuk mencegah pertumbuhan kapang mikotoksin.
  * Menjadi produk seduhan teh kulit kopi bernilai ekonomis tinggi.
* **Kompos Organik Bokashi**:
  * Sisa kulit ceri difermentasikan bersama kotoran ternak, abu sekam, dan mikroba dekomposer (*Trichoderma* & EM4).
  * Menghasilkan pupuk organik kaya kalium (K) alami yang dikembalikan ke kebun untuk menyuburkan tanah vulkanik.`,
    content_type: 'text',
    duration_minutes: 20,
    order_index: 3,
    is_free: false,
    is_published: true,
    created_at: '2026-08-15T00:00:00Z',
    summary: 'Tata kelola ekologi stasiun basah: bioremediasi air limbah kopi asam ber-COD tinggi melalui kolam sedimentasi kapur, kolam anaerobik-aerobik rumput vetiver, dan produksi cascara higienis.',
    key_takeaways: [
      'Air limbah pencucian kopi memiliki pH sangat asam (3.8–4.5) dan beban BOD/COD sangat tinggi yang berbahaya bagi sungai.',
      'Sistem laguna bertahap menggunakan netralisasi kapur pertanian dan filtrasi fitoremediasi rumput vetiver.',
      'Kulit ceri kopi dapat dimanfaatkan sebagai cascara higienis berdaya jual tinggi atau diolah menjadi kompos pupuk organik bokashi.',
    ],
  },
];

export const Q_PROCESSOR_QUIZZES: Quiz[] = [
  {
    id: 'quiz-qp1',
    module_id: 'mod-qp1',
    learning_path_id: 'path-q-processor',
    quiz_scope: 'module',
    title: 'Kuis Evaluasi Modul QP-1: Prinsip CQI, Fisiologi Buah & Sortasi Panen',
    description: 'Uji pemahaman prinsip dasar CQI Q Processing, anatomi mesokarp, pengukuran refraktometer brix, dan teknik sortasi perambangan flotation.',
    passing_score: 80,
    time_limit_minutes: 15,
    max_attempts: 3,
    created_at: '2026-08-15T00:00:00Z',
  },
  {
    id: 'quiz-qp2',
    module_id: 'mod-qp2',
    learning_path_id: 'path-q-processor',
    quiz_scope: 'module',
    title: 'Kuis Evaluasi Modul QP-2: Mikrobiologi & Kinetika Fermentasi',
    description: 'Uji penguasaan ekologi ragi dan bakteri, kerja enzim pektinase, batas kritis kurva pH, dan pengendalian suhu eksotermik.',
    passing_score: 80,
    time_limit_minutes: 15,
    max_attempts: 3,
    created_at: '2026-08-15T00:00:00Z',
  },
  {
    id: 'quiz-qp3',
    module_id: 'mod-qp3',
    learning_path_id: 'path-q-processor',
    quiz_scope: 'module',
    title: 'Kuis Evaluasi Modul QP-3: Protokol Washed & Soaking Presisi',
    description: 'Uji pemahaman perbandingan demucilasi mekanis vs enzimatik, saluran washing channels, dan perendaman air dingin 24 jam ala Kenya.',
    passing_score: 80,
    time_limit_minutes: 15,
    max_attempts: 3,
    created_at: '2026-08-15T00:00:00Z',
  },
  {
    id: 'quiz-qp4',
    module_id: 'mod-qp4',
    learning_path_id: 'path-q-processor',
    quiz_scope: 'module',
    title: 'Kuis Evaluasi Modul QP-4: Natural, Honey & Sains Giling Basah Nusantara',
    description: 'Uji pengetahuan biologi natural ceri utuh, klasifikasi honey process, dan SOP Specialty Giling Basah bebas cacat geosmin.',
    passing_score: 80,
    time_limit_minutes: 15,
    max_attempts: 3,
    created_at: '2026-08-15T00:00:00Z',
  },
  {
    id: 'quiz-qp5',
    module_id: 'mod-qp5',
    learning_path_id: 'path-q-processor',
    quiz_scope: 'module',
    title: 'Kuis Evaluasi Modul QP-5: Bioproses Eksperimental & Regulasi SCA',
    description: 'Uji kompetensi bioreaktor anaerobik, carbonic maceration gas CO2, inokulasi kultur murni, thermal shock, dan etika transparansi co-fermentation.',
    passing_score: 80,
    time_limit_minutes: 15,
    max_attempts: 3,
    created_at: '2026-08-15T00:00:00Z',
  },
  {
    id: 'quiz-qp6',
    module_id: 'mod-qp6',
    learning_path_id: 'path-q-processor',
    quiz_scope: 'module',
    title: 'Kuis Evaluasi Modul QP-6: Termodinamika Pengeringan & Water Activity (aw)',
    description: 'Uji parameter kinetika desorpsi air, standar kritis aw ≤ 0.60, pencegahan Ochratoxin A, dan manajemen suhu pengeringan.',
    passing_score: 80,
    time_limit_minutes: 15,
    max_attempts: 3,
    created_at: '2026-08-15T00:00:00Z',
  },
  {
    id: 'quiz-qp7',
    module_id: 'mod-qp7',
    learning_path_id: 'path-q-processor',
    quiz_scope: 'module',
    title: 'Kuis Evaluasi Modul QP-7: Reposo, Hulling & Sortasi Standar Ekspor',
    description: 'Uji prosedur reposo 30-60 hari, perlindungan hermetik GrainPro, kalibrasi suhu hulling <35°C, dan pemisahan meja gravitasi.',
    passing_score: 80,
    time_limit_minutes: 15,
    max_attempts: 3,
    created_at: '2026-08-15T00:00:00Z',
  },
  {
    id: 'quiz-qp8',
    module_id: 'mod-qp8',
    learning_path_id: 'path-q-processor',
    quiz_scope: 'module',
    title: 'Kuis Evaluasi Modul QP-8: Forensik Cacat Cupping, Logbook CQI & Ekologi',
    description: 'Uji kemampuan melacak penyebab cacat cupping (stinker, cuka, onion, apek), format logbook batch, dan pengolahan limbah air basah.',
    passing_score: 80,
    time_limit_minutes: 15,
    max_attempts: 3,
    created_at: '2026-08-15T00:00:00Z',
  },
  {
    id: 'quiz-qp-final',
    module_id: null,
    learning_path_id: 'path-q-processor',
    quiz_scope: 'final_exam',
    title: 'Ujian Sertifikasi Akhir: Certified Q Processing Specialist',
    description:
      'Ujian kelulusan komprehensif tingkat profesional untuk meraih kredensial Certified Q Processing Specialist CherryEdu. Menguji seluruh mata rantai pasca-panen dari biokimia buah, bioproses, pengeringan, hingga evaluasi cacat cupping.',
    passing_score: 85,
    time_limit_minutes: 40,
    max_attempts: 2,
    created_at: '2026-08-15T00:00:00Z',
  },
];

export const Q_PROCESSOR_QUESTIONS: Question[] = [
  {
    id: 'q-qp1-1',
    quiz_id: 'quiz-qp1',
    question_text: 'Berapakah standar kadar gula terlarut minimum pada cairan lendir ceri kopi yang diukur menggunakan refraktometer brix untuk lot specialty?',
    question_type: 'multiple_choice',
    points: 25,
    order_index: 1,
    explanation: 'Standar kematangan optimal untuk pengolahan kopi spesialti adalah minimal 20.0° hingga 24.0° Brix.',
    answers: [
      { id: 'a-qp1-1-1', answer_text: '20.0° – 24.0° Brix', is_correct: true },
      { id: 'a-qp1-1-2', answer_text: '12.0° – 15.0° Brix', is_correct: false },
      { id: 'a-qp1-1-3', answer_text: '8.0° – 10.0° Brix', is_correct: false },
      { id: 'a-qp1-1-4', answer_text: '30.0° – 35.0° Brix', is_correct: false },
    ],
  },
  {
    id: 'q-qp1-2',
    quiz_id: 'quiz-qp1',
    question_text: 'Mengapa buah ceri kopi yang mengapung (floaters) pada bak perambangan flotation harus dipisahkan 100% dari lot specialty?',
    question_type: 'multiple_choice',
    points: 25,
    order_index: 2,
    explanation: 'Ceri mengapung karena berat jenisnya rendah akibat biji hampa, terserang hama PBKo, atau busuk kering di pohon yang akan merusak keseragaman seduhan.',
    answers: [
      { id: 'a-qp1-2-1', answer_text: 'Karena memiliki densitas rendah akibat biji hampa atau rusak hama yang merusak cup quality', is_correct: true },
      { id: 'a-qp1-2-2', answer_text: 'Karena ceri tersebut terlalu manis sehingga mempercepat fermentasi', is_correct: false },
      { id: 'a-qp1-2-3', answer_text: 'Karena kulitnya terlalu tebal dan tidak bisa dikupas oleh mesin pulper', is_correct: false },
      { id: 'a-qp1-2-4', answer_text: 'Karena mengandung kadar kafein dua kali lipat lebih tinggi', is_correct: false },
    ],
  },
  {
    id: 'q-qp1-3',
    quiz_id: 'quiz-qp1',
    question_text: 'Apakah batas maksimal jeda waktu (lag time) antara pemetikan buah di pohon hingga dimulainya pemrosesan basah?',
    question_type: 'multiple_choice',
    points: 25,
    order_index: 3,
    explanation: 'Lag time tumpukan ceri maksimal adalah 8 hingga 12 jam. Melewati batas ini memicu pemanasan sendiri (self-heating) dan fermentasi liar berbau busuk.',
    answers: [
      { id: 'a-qp1-3-1', answer_text: '8 hingga 12 Jam', is_correct: true },
      { id: 'a-qp1-3-2', answer_text: '24 hingga 48 Jam', is_correct: false },
      { id: 'a-qp1-3-3', answer_text: '3 hingga 5 Hari', is_correct: false },
      { id: 'a-qp1-3-4', answer_text: '1 hingga 2 Jam saja', is_correct: false },
    ],
  },
  {
    id: 'q-qp1-4',
    quiz_id: 'quiz-qp1',
    question_text: 'Lapisan buah manakah yang kaya akan protopektin dan gula sederhana yang bertindak sebagai substrat makanan mikroorganisme saat fermentasi?',
    question_type: 'multiple_choice',
    points: 25,
    order_index: 4,
    explanation: 'Mesokarp (daging buah dan lendir/mucilage) adalah jaringan parenkim kaya air, gula bebas (glukosa, fruktosa), dan pektin.',
    answers: [
      { id: 'a-qp1-4-1', answer_text: 'Mesokarp (Lendir / Mucilage)', is_correct: true },
      { id: 'a-qp1-4-2', answer_text: 'Endokarp (Kulit Tanduk / Parchment)', is_correct: false },
      { id: 'a-qp1-4-3', answer_text: 'Spermoderm (Kulit Ari / Silverskin)', is_correct: false },
      { id: 'a-qp1-4-4', answer_text: 'Eksokarp (Epidermis Lilin)', is_correct: false },
    ],
  },

  {
    id: 'q-qp2-1',
    quiz_id: 'quiz-qp2',
    question_text: 'Pada titik pH berapakah fermentasi olah basah (washed) wajib segera dihentikan guna mencegah bahaya pembentukan cacat cuka (vinegar)?',
    question_type: 'multiple_choice',
    points: 35,
    order_index: 1,
    explanation: 'Batas akhir ideal fermentasi washed adalah pH 3.8–4.2. Jika pH dibiarkan anjlok di bawah 3.6, aktivitas bakteri asam asetat akan merusak profil rasa menjadi asam cuka menyengat.',
    answers: [
      { id: 'a-qp2-1-1', answer_text: 'Saat pH menyentuh 3.8 – 4.2 (tidak boleh di bawah 3.6)', is_correct: true },
      { id: 'a-qp2-1-2', answer_text: 'Saat pH menyentuh 2.0 – 2.5', is_correct: false },
      { id: 'a-qp2-1-3', answer_text: 'Saat pH masih di angka netral 7.0', is_correct: false },
      { id: 'a-qp2-1-4', answer_text: 'Saat pH naik kembali ke 6.5', is_correct: false },
    ],
  },
  {
    id: 'q-qp2-2',
    quiz_id: 'quiz-qp2',
    question_text: 'Kelompok mikroorganisme manakah yang berperan utama menghasilkan senyawa ester aromatik beraroma buah manis dan bunga selama fermentasi?',
    question_type: 'multiple_choice',
    points: 35,
    order_index: 2,
    explanation: 'Ragi (Yeasts seperti Saccharomyces dan Pichia) menghasilkan alkohol dan mereaksikannya dengan asam organik menjadi senyawa ester buah volatil.',
    answers: [
      { id: 'a-qp2-2-1', answer_text: 'Ragi (Yeasts)', is_correct: true },
      { id: 'a-qp2-2-2', answer_text: 'Bakteri Asam Asetat (Acetobacter)', is_correct: false },
      { id: 'a-qp2-2-3', answer_text: 'Bakteri Pembusuk Clostridium', is_correct: false },
      { id: 'a-qp2-2-4', answer_text: 'Jamur Kapang Aspergillus', is_correct: false },
    ],
  },
  {
    id: 'q-qp2-3',
    quiz_id: 'quiz-qp2',
    question_text: 'Enzim spesifik apakah yang bertugas memotong ikatan alfa-(1,4)-glikosidik pada rantai asam poligalakturonat pektin sehingga lendir kopi mencair larut air?',
    question_type: 'multiple_choice',
    points: 30,
    order_index: 3,
    explanation: 'Poligalakturonase (Polygalacturonase) adalah enzim hidrolitik utama pemotong rantai utama polimer asam poligalakturonat pektin.',
    answers: [
      { id: 'a-qp2-3-1', answer_text: 'Poligalakturonase (Polygalacturonase)', is_correct: true },
      { id: 'a-qp2-3-2', answer_text: 'Lipase Asam Lemak', is_correct: false },
      { id: 'a-qp2-3-3', answer_text: 'Amilase Pemecah Karbohidrat', is_correct: false },
      { id: 'a-qp2-3-4', answer_text: 'Polifenol Oksidase', is_correct: false },
    ],
  },

  {
    id: 'q-qp3-1',
    quiz_id: 'quiz-qp3',
    question_text: 'Berapakah estimasi penghematan penggunaan air bersih pada mesin demucilator mekanis (eco-pulper) dibandingkan fermentasi enzimatik tangki tradisional?',
    question_type: 'multiple_choice',
    points: 50,
    order_index: 1,
    explanation: 'Eco-pulper hanya mengonsumsi 0.5–1.5 Liter air/kg gabah, menghemat hingga 80–90% konsumsi air dibanding metode tradisional (5–15 L/kg).',
    answers: [
      { id: 'a-qp3-1-1', answer_text: 'Penghematan mencapai 80% – 90% konsumsi air bersih', is_correct: true },
      { id: 'a-qp3-1-2', answer_text: 'Hanya menghemat 10%', is_correct: false },
      { id: 'a-qp3-1-3', answer_text: 'Sama sekali tidak menghemat air', is_correct: false },
      { id: 'a-qp3-1-4', answer_text: 'Eco-pulper justru memakai air 3 kali lebih boros', is_correct: false },
    ],
  },
  {
    id: 'q-qp3-2',
    quiz_id: 'quiz-qp3',
    question_text: 'Apakah dampak sensorik paling nyata dari perendaman gabah air dingin 24 jam ala Kenya (Kenyan style soaking)?',
    question_type: 'multiple_choice',
    points: 50,
    order_index: 2,
    explanation: 'Perendaman dingin mendesorpsi asam residual dan tanin, menghasilkan kejernihan rasa (cup clarity) maksimal dan keasaman fosfat yang sparkling.',
    answers: [
      { id: 'a-qp3-2-1', answer_text: 'Peningkatan drastis kejernihan rasa (cup clarity) dan keasaman fosfat yang berkilau', is_correct: true },
      { id: 'a-qp3-2-2', answer_text: 'Membuat kopi berasa tanah dan apek', is_correct: false },
      { id: 'a-qp3-2-3', answer_text: 'Menghilangkan seluruh keasaman kopi menjadi tawar', is_correct: false },
      { id: 'a-qp3-2-4', answer_text: 'Membuat biji kopi berubah warna menjadi cokelat gelap', is_correct: false },
    ],
  },

  {
    id: 'q-qp4-1',
    quiz_id: 'quiz-qp4',
    question_text: 'Pada rentang kadar air berapakah gabah kopi dikupas secara paksa pada proses Giling Basah (Wet-Hulled) khas Indonesia?',
    question_type: 'multiple_choice',
    points: 50,
    order_index: 1,
    explanation: 'Giling Basah mengupas kulit tanduk pada saat gabah masih basah berkadar air 30% – 35% (kondisi gabah masih kenyal lembek).',
    answers: [
      { id: 'a-qp4-1-1', answer_text: '30% – 35% Kadar Air', is_correct: true },
      { id: 'a-qp4-1-2', answer_text: '10% – 12% Kadar Air', is_correct: false },
      { id: 'a-qp4-1-3', answer_text: '50% – 55% Kadar Air', is_correct: false },
      { id: 'a-qp4-1-4', answer_text: '5% – 7% Kadar Air', is_correct: false },
    ],
  },
  {
    id: 'q-qp4-2',
    quiz_id: 'quiz-qp4',
    question_text: 'Senyawa kimia apakah yang diproduksi oleh bakteri tanah Streptomyces yang bertanggung jawab atas cacat bau apek/tanah (earthy/musty) pada Giling Basah kelas rendah?',
    question_type: 'multiple_choice',
    points: 50,
    order_index: 2,
    explanation: 'Geosmin adalah senyawa volatil berbau tanah basah busuk yang diserap biji kopi jika dijemur bersentuhan langsung dengan tanah kotor.',
    answers: [
      { id: 'a-qp4-2-1', answer_text: 'Geosmin dan 2-metilisoborneol', is_correct: true },
      { id: 'a-qp4-2-2', answer_text: 'Kafein monohidrat', is_correct: false },
      { id: 'a-qp4-2-3', answer_text: 'Asam klorogenat bebas', is_correct: false },
      { id: 'a-qp4-2-4', answer_text: 'Sukrosa karamel', is_correct: false },
    ],
  },

  {
    id: 'q-qp5-1',
    quiz_id: 'quiz-qp5',
    question_text: 'Apakah fungsi utama dari katup pelepasan satu arah (one-way airlock valve) pada tangki bioreaktor fermentasi anaerobik?',
    question_type: 'multiple_choice',
    points: 50,
    order_index: 1,
    explanation: 'Katup satu arah membuang akumulasi gas CO2 berlebih agar tangki tidak meledak, sekaligus memblokir oksigen luar agar tidak masuk mencemari fermentasi.',
    answers: [
      { id: 'a-qp5-1-1', answer_text: 'Melepaskan akumulasi gas CO2 keluar sambil memblokir oksigen atmosfer masuk kembali', is_correct: true },
      { id: 'a-qp5-1-2', answer_text: 'Menyedot udara segar masuk ke dalam tangki', is_correct: false },
      { id: 'a-qp5-1-3', answer_text: 'Menyaring air sisa lendir keluar dari tangki secara otomatis', is_correct: false },
      { id: 'a-qp5-1-4', answer_text: 'Mengukur kadar brix gula di dalam cairan ceri', is_correct: false },
    ],
  },
  {
    id: 'q-qp5-2',
    quiz_id: 'quiz-qp5',
    question_text: 'Bagaimanakah sikap resmi regulasi Specialty Coffee Association (SCA) terhadap kopi yang diproses secara co-fermentasi menggunakan bahan tambahan eksternal?',
    question_type: 'multiple_choice',
    points: 50,
    order_index: 2,
    explanation: 'SCA dan World Coffee Events mewajibkan deklarasi transparansi 100% pada kemasan produk; menyembunyikan bahan tambahan dianggap sebagai penipuan mutu.',
    answers: [
      { id: 'a-qp5-2-1', answer_text: 'Wajib mencantumkan deklarasi transparansi 100% pada label kemasan produk', is_correct: true },
      { id: 'a-qp5-2-2', answer_text: 'Dilarang keras diproduksi di seluruh dunia', is_correct: false },
      { id: 'a-qp5-2-3', answer_text: 'Boleh dijual sebagai 100% natural murni tanpa memberitahu pembeli', is_correct: false },
      { id: 'a-qp5-2-4', answer_text: 'Hanya boleh disajikan dalam bentuk minuman dingin kalengan', is_correct: false },
    ],
  },

  {
    id: 'q-qp6-1',
    quiz_id: 'quiz-qp6',
    question_text: 'Berapakah batas aman maksimum Water Activity (aw) berstandar CQI untuk menjamin green coffee terlindung mutlak dari kapang Ochratoxin A?',
    question_type: 'multiple_choice',
    points: 50,
    order_index: 1,
    explanation: 'Standar aman CQI adalah aw ≤ 0.60. Jika aw melampaui 0.65, jamur Aspergillus ochraceus dapat memproduksi racun mikotoksin Ochratoxin A.',
    answers: [
      { id: 'a-qp6-1-1', answer_text: 'aw ≤ 0.60 (Ideal 0.53 – 0.58)', is_correct: true },
      { id: 'a-qp6-1-2', answer_text: 'aw ≤ 0.85', is_correct: false },
      { id: 'a-qp6-1-3', answer_text: 'aw ≤ 0.20', is_correct: false },
      { id: 'a-qp6-1-4', answer_text: 'aw = 1.00', is_correct: false },
    ],
  },
  {
    id: 'q-qp6-2',
    quiz_id: 'quiz-qp6',
    question_text: 'Berapakah batas suhu maksimum massa keping biji kopi (bean core temperature) yang tidak boleh dilampaui saat pengeringan mekanis Guardiola berlangsung?',
    question_type: 'multiple_choice',
    points: 50,
    order_index: 2,
    explanation: 'Suhu biji kopi di dalam drum mekanis tidak boleh melampaui 40°C guna mencegah kematian embrio hidup dan kerusakan membran sel.',
    answers: [
      { id: 'a-qp6-2-1', answer_text: 'Maksimal 40°C', is_correct: true },
      { id: 'a-qp6-2-2', answer_text: 'Maksimal 65°C', is_correct: false },
      { id: 'a-qp6-2-3', answer_text: 'Maksimal 20°C', is_correct: false },
      { id: 'a-qp6-2-4', answer_text: 'Maksimal 80°C', is_correct: false },
    ],
  },

  {
    id: 'q-qp7-1',
    quiz_id: 'quiz-qp7',
    question_text: 'Berapa lamakah durasi fase istirahat gabah (reposo) yang direkomendasikan sebelum gabah kering dikupas oleh mesin huller?',
    question_type: 'multiple_choice',
    points: 50,
    order_index: 1,
    explanation: 'Gabah kopi wajib diistirahatkan selama 30 hingga 60 hari dalam kondisi sejuk agar terjadi homogenisasi kelembaban internal.',
    answers: [
      { id: 'a-qp7-1-1', answer_text: '30 hingga 60 Hari', is_correct: true },
      { id: 'a-qp7-1-2', answer_text: '1 hingga 2 Hari saja', is_correct: false },
      { id: 'a-qp7-1-3', answer_text: 'Minimal 1 Tahun', is_correct: false },
      { id: 'a-qp7-1-4', answer_text: 'Tidak perlu istirahat, langsung dikupas', is_correct: false },
    ],
  },
  {
    id: 'q-qp7-2',
    quiz_id: 'quiz-qp7',
    question_text: 'Peralatan sortasi fisik apakah yang menggunakan getaran dek miring dan hembusan udara bawah untuk memisahkan biji kopi berdensitas padat dari biji keropos?',
    question_type: 'multiple_choice',
    points: 50,
    order_index: 2,
    explanation: 'Meja gravitasi (Gravity Table Separator) memisahkan fraksi berat jenis biji kopi secara akurat.',
    answers: [
      { id: 'a-qp7-2-1', answer_text: 'Meja Gravitasi (Gravity Table Separator)', is_correct: true },
      { id: 'a-qp7-2-2', answer_text: 'Ayakan Sieve Shaker', is_correct: false },
      { id: 'a-qp7-2-3', answer_text: 'Mesin Polisher Silverskin', is_correct: false },
      { id: 'a-qp7-2-4', answer_text: 'Drum Roaster Sampel', is_correct: false },
    ],
  },

  {
    id: 'q-qp8-1',
    quiz_id: 'quiz-qp8',
    question_text: 'Cacat rasa apakah yang ditandai dengan aroma busuk tengik atau bau anggur busuk menyengat akibat penumpukan ceri melebihi 12 jam sebelum diproses?',
    question_type: 'multiple_choice',
    points: 50,
    order_index: 1,
    explanation: 'Over-fermented / Stinker bean terjadi akibat harvest delay atau tumpukan buah ceri yang mengalami fermentasi liar mandiri.',
    answers: [
      { id: 'a-qp8-1-1', answer_text: 'Over-fermented / Stinker Bean', is_correct: true },
      { id: 'a-qp8-1-2', answer_text: 'Quaker Bean (biji mentah)', is_correct: false },
      { id: 'a-qp8-1-3', answer_text: 'Chalky Astringency', is_correct: false },
      { id: 'a-qp8-1-4', answer_text: 'Grassy Green', is_correct: false },
    ],
  },
  {
    id: 'q-qp8-2',
    quiz_id: 'quiz-qp8',
    question_text: 'Mengapa air limbah bekas pencucian stasiun basah kopi (wet mill) berbahaya jika dibuang langsung ke aliran sungai desa?',
    question_type: 'multiple_choice',
    points: 50,
    order_index: 2,
    explanation: 'Air limbah kopi memiliki pH sangat asam (3.8–4.5) dan beban BOD/COD sangat tinggi yang menyedot habis oksigen terlarut perairan.',
    answers: [
      { id: 'a-qp8-2-1', answer_text: 'Memiliki pH sangat asam dan beban BOD/COD sangat tinggi yang menghabiskan oksigen sungai', is_correct: true },
      { id: 'a-qp8-2-2', answer_text: 'Karena mengandung kadar garam laut yang sangat asin', is_correct: false },
      { id: 'a-qp8-2-3', answer_text: 'Karena suhu airnya mendidih di atas 100°C', is_correct: false },
      { id: 'a-qp8-2-4', answer_text: 'Karena air limbah kopi mengandung pestisida buatan pabrik', is_correct: false },
    ],
  },

  {
    id: 'q-qpf-1',
    quiz_id: 'quiz-qp-final',
    question_text: 'Apa peran biologis utama dari enzim Pektin Metilesterase (PME) dalam tahapan awal degradasi lendir mesokarp kopi?',
    question_type: 'multiple_choice',
    points: 7,
    order_index: 1,
    explanation: 'PME bertugas mende-esterifikasi gugus metil ester dari rantai protopektin, mempersiapkan rantai tersebut untuk dipotong oleh enzim poligalakturonase.',
    answers: [
      { id: 'a-qpf-1-1', answer_text: 'Menghidrolisis gugus metil ester dari rantai protopektin menjadi asam pektat', is_correct: true },
      { id: 'a-qpf-1-2', answer_text: 'Mengubah glukosa langsung menjadi gas karbon dioksida', is_correct: false },
      { id: 'a-qpf-1-3', answer_text: 'Membunuh seluruh bakteri asam asetat di dalam tangki', is_correct: false },
      { id: 'a-qpf-1-4', answer_text: 'Mengoksidasi klorofil biji menjadi warna kebiruan', is_correct: false },
    ],
  },
  {
    id: 'q-qpf-2',
    quiz_id: 'quiz-qp-final',
    question_text: 'Dalam evaluasi fisik green coffee standar SCA/CQI, berapakah batas toleransi cacat primer (Primary Defects) yang diizinkan untuk lot berpredikat Grade 1 Specialty?',
    question_type: 'multiple_choice',
    points: 7,
    order_index: 2,
    explanation: 'Standar SCA/CQI Grade 1 Specialty mengizinkan tepat 0 cacat primer (Zero Primary Defects) dalam sampel 350 gram green coffee.',
    answers: [
      { id: 'a-qpf-2-1', answer_text: '0 Cacat Primer (Nol / Zero Primary Defects)', is_correct: true },
      { id: 'a-qpf-2-2', answer_text: 'Maksimal 3 Cacat Primer', is_correct: false },
      { id: 'a-qpf-2-3', answer_text: 'Maksimal 5 Cacat Primer', is_correct: false },
      { id: 'a-qpf-2-4', answer_text: 'Toleransi hingga 10 Cacat Primer', is_correct: false },
    ],
  },
  {
    id: 'q-qpf-3',
    quiz_id: 'quiz-qp-final',
    question_text: 'Fenomena kerusakan fisik apakah yang terjadi jika gabah kopi yang basah langsung dipanggang di terik matahari ekstrem (>42°C), menyebabkan permukaan parchment mengeras tetapi inti embrio tetap basah?',
    question_type: 'multiple_choice',
    points: 7,
    order_index: 3,
    explanation: 'Case hardening (pengerasan permukaan luar) menjebak molekul air di dalam inti biji dan merusak struktur seluler.',
    answers: [
      { id: 'a-qpf-3-1', answer_text: 'Case Hardening', is_correct: true },
      { id: 'a-qpf-3-2', answer_text: 'Thermal Shock Reaction', is_correct: false },
      { id: 'a-qpf-3-3', answer_text: 'Osmotic Collapse', is_correct: false },
      { id: 'a-qpf-3-4', answer_text: 'Enzymatic Quenching', is_correct: false },
    ],
  },
  {
    id: 'q-qpf-4',
    quiz_id: 'quiz-qp-final',
    question_text: 'Pada spektrum Honey Process, varian honey manakah yang mempertahankan 100% lendir utuh dan dikeringkan di bawah naungan intensif selama 20–30 hari?',
    question_type: 'multiple_choice',
    points: 7,
    order_index: 4,
    explanation: 'Black Honey mempertahankan seluruh lendir mesokarp dan dikeringkan paling lambat di bawah naungan dingin, memicu pencokelatan enzimatik gelap.',
    answers: [
      { id: 'a-qpf-4-1', answer_text: 'Black Honey', is_correct: true },
      { id: 'a-qpf-4-2', answer_text: 'White Honey', is_correct: false },
      { id: 'a-qpf-4-3', answer_text: 'Yellow Honey', is_correct: false },
      { id: 'a-qpf-4-4', answer_text: 'Pulped Washed', is_correct: false },
    ],
  },
  {
    id: 'q-qpf-5',
    quiz_id: 'quiz-qp-final',
    question_text: 'Senyawa racun mikotoksin berbahaya apakah yang diproduksi oleh kapang Aspergillus ochraceus jika nilai aktivitas air (aw) green coffee melampaui 0.65 di gudang penyimpanan?',
    question_type: 'multiple_choice',
    points: 7,
    order_index: 5,
    explanation: 'Ochratoxin A (OTA) adalah mikotoksin karsinogenik tahan panas sangrai yang diatur ketat dengan batas maksimal 5 ppb oleh Uni Eropa.',
    answers: [
      { id: 'a-qpf-5-1', answer_text: 'Ochratoxin A (OTA)', is_correct: true },
      { id: 'a-qpf-5-2', answer_text: 'Aflatoksin B1', is_correct: false },
      { id: 'a-qpf-5-3', answer_text: 'Patulin', is_correct: false },
      { id: 'a-qpf-5-4', answer_text: 'Asam Sianida', is_correct: false },
    ],
  },
  {
    id: 'q-qpf-6',
    quiz_id: 'quiz-qp-final',
    question_text: 'Teknik pasca-panen manakah yang melibatkan pencelupan ceri ke air panas 50°C–60°C selama beberapa menit sebelum dimasukkan ke air es 10°C–12°C untuk mengunci aroma?',
    question_type: 'multiple_choice',
    points: 7,
    order_index: 6,
    explanation: 'Thermal Shock (kejut termal) menggunakan perbedaan suhu ekstrem untuk meningkatkan permeabilitas sel dan mengunci senyawa volatil.',
    answers: [
      { id: 'a-qpf-6-1', answer_text: 'Thermal Shock Processing', is_correct: true },
      { id: 'a-qpf-6-2', answer_text: 'Carbonic Maceration', is_correct: false },
      { id: 'a-qpf-6-3', answer_text: 'Kenyan Soaking', is_correct: false },
      { id: 'a-qpf-6-4', answer_text: 'Wet Hulling Labu', is_correct: false },
    ],
  },
  {
    id: 'q-qpf-7',
    quiz_id: 'quiz-qp-final',
    question_text: 'Apakah indikasi fisik manual paling akurat bahwa lendir pektin pada gabah kopi telah terfermentasi sempurna di dalam tangki olah basah?',
    question_type: 'multiple_choice',
    points: 7,
    order_index: 7,
    explanation: 'Uji gesekan fisik (gravel squeak test): saat diremas di telapak tangan, terdengar suara derit gesekan kerikil kesat dan tidak lagi licin meluncur.',
    answers: [
      { id: 'a-qpf-7-1', answer_text: 'Terdengar bunyi gesekan kesat seperti batu kerikil (gravel friction squeak) dan tidak licin', is_correct: true },
      { id: 'a-qpf-7-2', answer_text: 'Gabah mengeluarkan busa sabun tebal berwarna putih', is_correct: false },
      { id: 'a-qpf-7-3', answer_text: 'Kulit tanduk parchment terlepas dengan sendirinya', is_correct: false },
      { id: 'a-qpf-7-4', answer_text: 'Air tangki berubah warna menjadi hitam pekat', is_correct: false },
    ],
  },
  {
    id: 'q-qpf-8',
    quiz_id: 'quiz-qp-final',
    question_text: 'Berapakah suhu maksimum biji kopi hijau yang diizinkan keluar dari corong mesin pengupas gabah (dry huller) agar senyawa minyak aromatik tidak rusak?',
    question_type: 'multiple_choice',
    points: 7,
    order_index: 8,
    explanation: 'Suhu biji kopi hijau yang keluar dari mesin huller mutlak tidak boleh melampaui 35°C guna menghindari oksidasi senyawa aromatik.',
    answers: [
      { id: 'a-qpf-8-1', answer_text: 'Maksimal 35°C', is_correct: true },
      { id: 'a-qpf-8-2', answer_text: 'Maksimal 55°C', is_correct: false },
      { id: 'a-qpf-8-3', answer_text: 'Maksimal 75°C', is_correct: false },
      { id: 'a-qpf-8-4', answer_text: 'Bebas, tidak ada batasan suhu', is_correct: false },
    ],
  },
  {
    id: 'q-qpf-9',
    quiz_id: 'quiz-qp-final',
    question_text: 'Dalam rantai penanganan limbah basah wet mill, bahan apakah yang ditambahkan ke bak sedimentasi awal untuk menetralkan pH air limbah dari 4.0 menjadi netral 6.5–7.0?',
    question_type: 'multiple_choice',
    points: 6,
    order_index: 9,
    explanation: 'Kapur pertanian (Kalsium Karbonat / CaCO3 atau Kalsium Hidroksida) digunakan secara luas untuk menetralkan keasaman air limbah kopi.',
    answers: [
      { id: 'a-qpf-9-1', answer_text: 'Kapur Pertanian (Kalsium Karbonat / CaCO3)', is_correct: true },
      { id: 'a-qpf-9-2', answer_text: 'Garam Dapur (NaCl pekat)', is_correct: false },
      { id: 'a-qpf-9-3', answer_text: 'Asam Klorida (HCl pekat)', is_correct: false },
      { id: 'a-qpf-9-4', answer_text: 'Urea murni', is_correct: false },
    ],
  },
  {
    id: 'q-qpf-10',
    quiz_id: 'quiz-qp-final',
    question_text: 'Gas apakah yang diinjeksikan secara murni ke dalam tangki tertutup pada metode Carbonic Maceration untuk mengusir 100% oksigen dan memicu maserasi intraseluler?',
    question_type: 'multiple_choice',
    points: 6,
    order_index: 10,
    explanation: 'Gas Karbon Dioksida (CO2) murni kelas pangan diinjeksikan untuk menciptakan atmosfer anaerobik penuh.',
    answers: [
      { id: 'a-qpf-10-1', answer_text: 'Karbon Dioksida (CO2)', is_correct: true },
      { id: 'a-qpf-10-2', answer_text: 'Nitrogen Oksida (N2O)', is_correct: false },
      { id: 'a-qpf-10-3', answer_text: 'Oksigen Murni (O2)', is_correct: false },
      { id: 'a-qpf-10-4', answer_text: 'Gas Metana (CH4)', is_correct: false },
    ],
  },
  {
    id: 'q-qpf-11',
    quiz_id: 'quiz-qp-final',
    question_text: 'Manakah di bawah ini yang merupakan tindakan operasional yang benar untuk mengendalikan proses Giling Basah (Wet-Hulled) Indonesia agar menghasilkan skor cupping 86+?',
    question_type: 'multiple_choice',
    points: 6,
    order_index: 11,
    explanation: 'Menggunakan ceri merah brix tinggi, mencuci bersih mesin huller, dan menjemur biji hijau di atas raised beds gantung berventilasi (bukan terpal tanah).',
    answers: [
      { id: 'a-qpf-11-1', answer_text: 'Menjemur biji hijau pasca-hulling di atas raised beds gantung berventilasi (bukan di tanah) dan menjaga sanitasi huller', is_correct: true },
      { id: 'a-qpf-11-2', answer_text: 'Menjemur biji langsung di atas tanah berlumpur agar aroma khas tanah terserap', is_correct: false },
      { id: 'a-qpf-11-3', answer_text: 'Membiarkan gabah menginap di dalam karung basah selama dua minggu', is_correct: false },
      { id: 'a-qpf-11-4', answer_text: 'Mengupas gabah saat kadar air sudah kering tuntas 8%', is_correct: false },
    ],
  },
  {
    id: 'q-qpf-12',
    quiz_id: 'quiz-qp-final',
    question_text: 'Berapakah ukuran screen sieve ayakan standar internasional yang paling umum mewakili kategori biji besar (AA / Supremo) pada kopi arabika specialty?',
    question_type: 'multiple_choice',
    points: 6,
    order_index: 12,
    explanation: 'Screen 17 – 18 (berdiameter lubang 17/64 hingga 18/64 inci) adalah ukuran standar biji besar premium arabika.',
    answers: [
      { id: 'a-qpf-12-1', answer_text: 'Screen 17 – 18', is_correct: true },
      { id: 'a-qpf-12-2', answer_text: 'Screen 10 – 12', is_correct: false },
      { id: 'a-qpf-12-3', answer_text: 'Screen 24 – 26', is_correct: false },
      { id: 'a-qpf-12-4', answer_text: 'Screen 8 – 9', is_correct: false },
    ],
  },
  {
    id: 'q-qpf-13',
    quiz_id: 'quiz-qp-final',
    question_text: 'Cacat rasa oniony (bawang busuk) pada meja cupping kopi basah umumnya disebabkan oleh kontaminasi bakteri asam propionat yang bersumber dari:',
    question_type: 'multiple_choice',
    points: 6,
    order_index: 13,
    explanation: 'Bakteri asam propionat berkembang biak pesat jika stasiun basah mendaur ulang air cucian yang kotor atau membiarkan air tergenang di saluran cuci.',
    answers: [
      { id: 'a-qpf-13-1', answer_text: 'Penggunaan air sirkulasi pencucian yang kotor dan tergenang berulang kali di saluran basah', is_correct: true },
      { id: 'a-qpf-13-2', answer_text: 'Pohon kopi yang ditanam berdampingan dengan kebun bawang merah', is_correct: false },
      { id: 'a-qpf-13-3', answer_text: 'Penggunaan karung GrainPro baru yang belum dicuci', is_correct: false },
      { id: 'a-qpf-13-4', answer_text: 'Suhu ruang sangrai laboratorium cupping yang terlalu dingin', is_correct: false },
    ],
  },
  {
    id: 'q-qpf-14',
    quiz_id: 'quiz-qp-final',
    question_text: 'Mengapa kantong penyimpanan hermetik (seperti GrainPro atau Ecotact) jauh lebih unggul dibandingkan karung goni tradisional untuk menyimpan green coffee specialty?',
    question_type: 'multiple_choice',
    points: 6,
    order_index: 14,
    explanation: 'Kemasan hermetik memiliki lapisan penghalang gas (gas barrier) yang menstabilkan kelembaban internal dan mematikan serangga hama melalui penipisan oksigen.',
    answers: [
      { id: 'a-qpf-14-1', answer_text: 'Memiliki lapisan penghalang gas (gas barrier) yang mencegah fluktuasi kelembaban udara dan mematikan hama serangga', is_correct: true },
      { id: 'a-qpf-14-2', answer_text: 'Membuat biji kopi tetap mengalami fermentasi aktif di dalam karung', is_correct: false },
      { id: 'a-qpf-14-3', answer_text: 'Karena harganya sepuluh kali lipat lebih murah daripada goni', is_correct: false },
      { id: 'a-qpf-14-4', answer_text: 'Dapat memanaskan biji kopi sehingga menghemat waktu resting', is_correct: false },
    ],
  },
  {
    id: 'q-qpf-15',
    quiz_id: 'quiz-qp-final',
    question_text: 'Apakah tujuan utama dari pencatatan harian kurva pH, suhu massa ceri, derajat brix, dan kelembaban udara pada lembar Processing Logbook berstandar CQI?',
    question_type: 'multiple_choice',
    points: 8,
    order_index: 15,
    explanation: 'Menjamin keterlacakan (traceability) penuh, konsistensi mutu antar batch, dan memberikan bukti ilmiah parameter proses kepada pembeli green coffee internasional.',
    answers: [
      { id: 'a-qp-15-1', answer_text: 'Menjamin keterlacakan (traceability) penuh, konsistensi mutu antar batch, dan bukti ilmiah bagi pembeli specialty', is_correct: true },
      { id: 'a-qp-15-2', answer_text: 'Hanya sebagai formalitas administrasi tanpa kegunaan teknis nyata', is_correct: false },
      { id: 'a-qp-15-3', answer_text: 'Untuk memenuhi kewajiban pajak ekspor pemerintah daerah', is_correct: false },
      { id: 'a-qp-15-4', answer_text: 'Untuk menghitung perkiraan berat karung saat di pelabuhan', is_correct: false },
    ],
  },
];
