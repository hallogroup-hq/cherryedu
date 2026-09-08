import re

print("Starting append_qgrader_extra.py...")

qgrader_extra_lessons = [
    {
        "id": "les-q1-3",
        "module_id": "mod-q1",
        "title": "Faktor Pengganggu Sensorik: Reseptor Trigeminal, Ageusia, Anosmia, dan Sensory Fatigue",
        "duration": 15,
        "content": """# Faktor Pengganggu Sensorik: Reseptor Trigeminal, Ageusia, dan Anosmia

Seorang Q Grader bersertifikasi memperlakukan indra penciuman dan pengecapnya seperti atlet elit merawat fisiknya. Pemahaman mengenai batas biologis persepsi adalah kunci menjaga objektivitas penilaian.

![Sesi Latihan Kalibrasi Sensorik Cupping Bersertifikasi CQI](https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Uji Kepekaan Pengecapan dan Penghidu Retronasal Bersertifikasi Standar CQI — Sumber / Kredit: Unsplash / Specialty Coffee Association (SCA)*

---

### 1. Peran Saraf Kranial Kelima (Trigeminal Nerve)

Saraf trigeminal tidak mendeteksi molekul rasa manis atau asam, melainkan merespon rangsangan taktil, termal, dan iritasi kimiawi di dalam rongga mulut:
* **Astringency (Sepet Mengeringkan Mulut)**: Disebabkan oleh polifenol dan tanin yang berikatan dengan protein saliva (lendir air liur), membuat permukaan lidah terasa kasar seperti amplas.
* **Pungency (Sensasi Pedas / Tajam)**: Respon reseptor TRPV1 terhadap bahan kimiawi tajam.
* **Suhu Ekstrem**: Cairan kopi di atas 65°C mematikan sinyal papila lidah dan hanya mengirimkan sinyal rasa sakit (*pain sensation*) ke otak. Itulah mengapa cupping SCA baru dinilai saat suhu cairan turun ke **55°C – 60°C**.

---

### 2. Mengatasi Kelelahan Sensorik (*Sensory Fatigue*)

Dalam ujian sertifikasi Q Grader, seorang peserta harus mencicipi puluhan hingga ratusan cangkir kopi dalam sehari:
* **Olfactory Fatigue**: Reseptor hidung menjadi jenuh dan kebas setelah mengendus aroma intens secara terus-menerus. *Solusi*: Hirup aroma kulit lengan sendiri (*neutral skin odor*) atau serat wol alami untuk me-reset epitel olfaktori. Jangan menghirup biji kopi sangrai utuh untuk me-reset hidung karena kopi memiliki senyawa volatil yang sama!
* **Palate Cleansing**: Berkumurlah dengan air putih murni bersuhu ruangan di antara penilaian sampel untuk membersihkan sisa lipid dan asam dari papila lidah.
"""
    },
    {
        "id": "les-q2-3",
        "module_id": "mod-q2",
        "title": "Etika dan Sanitasi Meja Cupping: Protokol Cupping Sendok Higienis dan Bebas Kontaminasi Silang",
        "duration": 14,
        "content": """# Etika dan Sanitasi Meja Cupping: Protokol Bebas Kontaminasi Silang

Meja cupping adalah tempat ibadah objektivitas kopi. Protokol sanitasi ketat diberlakukan untuk melindungi integritas rasa setiap cangkir serta mencegah penularan patogen antar evaluator.

![Tata Letak Meja Laboratorium Cupping Kopi Standar SCA 2024](https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Standar Penataan Gelas Cupping dan Gelas Bilas Air Panas — Sumber / Kredit: Unsplash / Specialty Coffee Association (SCA)*

---

### 1. Protokol Sendok Cupping Higienis (SCA Modified Protocol)

Tradisi lama mencelupkan sendok yang baru saja diseruput dari mulut langsung ke cangkir cupping berikutnya kini **dilarang keras** di seluruh laboratorium resmi dunia:
1. **Gelas Bilas Air Panas (*Rinse Cup*)**: Setiap evaluator memiliki satu gelas air mendidih pribadi di samping meja cupping.
2. **Siklus Cupping Bersih**:
   - Ambil sampel kopi menggunakan sendok cupping perak/stainless steel.
   - Seruput cairan kopi dari sendok (atau tuang dari sendok ke gelas slurp kecil pribadi).
   - Celupkan dan goyangkan sendok ke dalam gelas air bilas panas pribadi.
   - Keringkan sendok pada kain microfiber bersih sebelum mengambil sampel cangkir berikutnya.

---

### 2. Etika Perilaku di Ruang Cupping

* **Ketiadaan Parfum & Deodoran Wangi**: Dilarang keras mengenakan parfum, lotion berpewangi, atau pomade rambut di dalam ruang cupping. Bau artifisial akan mencemari udara ruangan dan mengaburkan identifikasi aroma bunga atau buah kopi yang halus.
* **Keheningan Mutlak (*Total Silence*)**: Selama proses penilaian berlangsung, evaluator dilarang berbicara, menunjukkan ekspresi wajah jijik atau kagum, atau bergumam. Diskusi kalibrasi hanya boleh dilakukan setelah seluruh lembar skor dikumpulkan kepada pemimpin meja (*cupping leader*).
"""
    },
    {
        "id": "les-q3-3",
        "module_id": "mod-q3",
        "title": "Kelompok Dry Distillation & Cacat Aromatik (Taints): Rempah, Tembakau, Cedar, Tanah, dan Kulit",
        "duration": 15,
        "content": """# Dry Distillation & Cacat Aromatik: Menguasai 36 Aroma Le Nez du Café

Kelompok aroma ketiga dalam kit olfaktori resmi *Le Nez du Café* adalah kelompok **Dry Distillation** (Hasil Distilasi Kering), yang terbentuk akibat degradasi termal serat selulosa kayu dan senyawa lignin pada tingkat sangrai medium-dark hingga dark.

![Kit Olfaktori 36 Botol Aroma Kopi Le Nez du Café](https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Koleksi Botol Aroma Standar Internasional Le Nez du Café untuk Ujian Sensori Q Grader — Sumber / Kredit: Unsplash / Coffee Quality Institute (CQI)*

---

### 1. Karakteristik Aroma Dry Distillation Positif

* **Rempah (Spices)**: Cengkeh (*clove*), lada hitam (*black pepper*), kapulaga, dan ketumbar. Sangat lazim ditemukan pada kopi-kopi vulkanik Nusantara seperti Sumatera Gayo dan Flores Bajawa.
* **Kayu & Damar (Resinous / Wood)**: Kayu cedar dan cendana.
* **Tembakau Cerutu (*Pipe Tobacco*) & Kulit Hewani Lembut (*Leather*)**: Memberikan kompleksitas maskulin dan aftertaste hangat yang elegan jika tidak berlebihan.

---

### 2. Cacat Aromatik Bawaan (*Aromatic Taints & Faults*)

* **Earthy / Tanah Basah**: Aroma tanah becek atau lumpur yang disebabkan oleh kontak green bean dengan tanah perkebunan yang lembap saat penjemuran di lantai tanah terbuka.
* **Baggy / Karung Goni Basi**: Aroma serat rami karung goni tua akibat penyimpanan green bean di gudang lembap selama lebih dari 1 tahun.
* **Medicinal / Fenol / Iodin**: Bau karbol rumah sakit atau obat merah yang disebabkan oleh infeksi jamur pada ceri yang rusak di pohon.
"""
    },
    {
        "id": "les-q4-3",
        "module_id": "mod-q4",
        "title": "Asam Kuinat & Asam Asetat: Pembentukan Senyawa Pahit Segar vs Keasaman Cuka Akibat Fermentasi",
        "duration": 15,
        "content": """# Asam Kuinat & Asam Asetat: Garis Tipis Antara Kompleksitas dan Kerusakan

Keasaman (*acidity*) adalah tulang punggung kualitas kopi spesialti, namun tidak semua asam organik berdampak positif bagi cangkir Anda.

![Pengujian Spektrofotometri Senyawa Asam Organik Kopi](https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Analisis Kimiawi Spektrum Asam Organik Hasil Fermentasi Kopi — Sumber / Kredit: Unsplash / Specialty Coffee Chemistry*

---

### 1. Asam Kuinat (*Quinic Acid*): Asal Muasal Pahit Bersih

* Asam kuinat terbentuk selama proses penyangraian melalui degradasi termal asam klorogenat (*Chlorogenic Acids / CGA*).
* Pada kadar moderat, asam kuinat memberikan sensasi keasaman yang berpadu dengan kepahitan bersih khas kopi (*tonic-like bitterness*) yang menyegarkan.
* Pada kopi yang dihangatkan berulang kali di atas kompor pemanas (*hot plate*), asam kuinat akan terakumulasi secara masif, menghasilkan rasa asam pahit gosong yang membuat perut begah.

---

### 2. Asam Asetat (*Acetic Acid*): Cuka Fermentasi

* Asam asetat adalah produk metabolisme bakteri asam asetat (*Acetobacter*) selama proses fermentasi pasca panen.
* **Kadar Rendah (< 0.5 g/L)**: Memberikan nuansa rasa buah anggur fermentasi manis, winey, dan kompleksitas buah apel cider.
* **Kadar Berlebih (> 1.2 g/L)**: Aroma cuka menyengat, menusuk hidung, dan meninggalkan sensasi terbakar asam di tenggorokan. Dalam formulasi SCA, asam asetat berlebih resmi dikategorikan sebagai cacat fermentasi (*over-fermented taint*).
"""
    },
    {
        "id": "les-q5-3",
        "module_id": "mod-q5",
        "title": "Psikologi & Bias Kognitif Sensorik: Mengatasi Halo Effect, Contrast Effect, dan Expectation Bias",
        "duration": 14,
        "content": """# Psikologi & Bias Kognitif Sensorik: Seni Menilai Secara Murni Objektif

Otak manusia bukanlah timbangan digital yang pasif. Otak adalah mesin pembuat makna yang rentan terdistorsi oleh bias kognitif dan sugesti lingkungan.

![Uji Sensorik Buta Laboratorium Tanpa Identitas Label Sampel](https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Protokol Blind Tasting dengan Pengkodean Acak Tiga Angka untuk Mencegah Bias Kognitif — Sumber / Kredit: Unsplash / CQI Sensory Evaluation*

---

### 1. Tiga Bias Paling Berbahaya di Meja Cupping

1. **Expectation Bias (Bias Ekspektasi)**:
   - Terjadi jika evaluator mengetahui asal muasal biji sebelum mencicipi (misal: label tertulis *"Geisha Panama Hacienda La Esmeralda Rp 3 Juta per kg"*). Otak secara otomatis akan mencari-cari aroma melati dan memberi skor 90+, meskipun sampel tersebut sudah apek!
   - *Mitigasi*: Wajib menggunakan sistem pengkodean angka acak 3 digit (misal: Sampel 482, Sampel 719).
2. **Halo Effect**:
   - Jika sebuah sampel memiliki aroma kering (*fragrance*) yang luar biasa harum, evaluator cenderung mengasumsikan aftertaste dan acidity-nya juga pasti sempurna tanpa mengevaluasinya secara kritis.
3. **Contrast Effect**:
   - Sampel kopi biasa (skor 81) yang disajikan tepat setelah sampel kopi cacat busuk (skor 72) akan tampak jauh lebih luar biasa daripada kualitas sebenarnya karena efek kontras dramatis.
"""
    },
    {
        "id": "les-q6-3",
        "module_id": "mod-q6",
        "title": "Interpretasi Total Skor SCA: Ambang 80 Poin, Kategori Outstanding (85+), dan Super Specialty (90+)",
        "duration": 15,
        "content": """# Interpretasi Total Skor SCA: Ambang 80 Poin hingga Elit Dunia 90+

Total skor cupping pada lembar formulir SCA (skala 0 – 100 poin) adalah mata uang nilai mutu perdagangan kopi spesialti global. Selisih 1 poin skor cupping dapat melipatgandakan harga jual green bean di lelang internasional!

![Lembar Skor Cupping Resmi SCA dan Penghitungan Atribut Poin](https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Kalkulasi 10 Atribut Sensorik dan Penentuan Kategori Mutu Kopi — Sumber / Kredit: Unsplash / Specialty Coffee Association (SCA)*

---

### 1. Hierarki Klasifikasi Mutu Kopi Dunia

* **Skor < 80.00 (Commercial / Non-Specialty)**: Kopi komoditas massal yang tidak memenuhi standar kelulusan specialty. Memiliki cacat primer atau ketidakseragaman cangkir.
* **Skor 80.00 – 84.99 (Specialty Coffee Standar)**:
  - *Kategori*: Very Good.
  - Cangkir bersih, manis seimbang, memiliki karakter origin yang jelas, dan bebas dari cacat taint/fault. Merupakan tulang punggung house blend dan filter kopi kedai lokal.
* **Skor 85.00 – 89.99 (Exemplary / Outstanding Specialty)**:
  - *Kategori*: Excellent.
  - Memiliki keasaman buah kompleks yang memikat, aroma floral mekar, tekstur bodi lembut laksana sutra, dan aftertaste sangat panjang. Merupakan kopi kompetisi barista nasional.
* **Skor 90.00 – 100.00 (Rare & Extraordinary / Super Specialty)**:
  - *Kategori*: Outstanding / Presidential Award.
  - Mewakili kurang dari 0.1% kopi di muka bumi (seperti pemenang lelang *Cup of Excellence / Best of Panama*). Memberikan pengalaman rasa emosional yang melampaui imajinasi penikmat kopi.
"""
    }
]

with open('lib/data/paths/qGraderData.ts', 'r') as f:
    qcontent = f.read()

q_extra_str = []
for les in qgrader_extra_lessons:
    item = f'''  {{
    id: '{les["id"]}',
    module_id: '{les["module_id"]}',
    title: '{les["title"]}',
    content: `{les["content"].strip()}`,
    content_type: 'text',
    duration_minutes: {les["duration"]},
    order_index: 3,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Materi mendalam {les["title"]} dengan standar resmi evaluasi sensorik SCA/CQI.',
    key_takeaways: [
      'Kuasai fisiologi pengecapan dan hilangkan bias kognitif untuk evaluasi sensorik objektif.',
      'Terapkan protokol meja cupping higienis bebas kontaminasi silang.',
      'Pahami interpretasi skor cupping SCA dari batas 80 poin hingga kopi elit 90+.'
    ],
  }},'''
    q_extra_str.append(item)

split_marker = 'export const Q_GRADER_QUIZZES'
if split_marker in qcontent:
    parts = qcontent.split(split_marker)
    last_bracket = parts[0].rfind('];')
    new_first_part = parts[0][:last_bracket] + '\n' + '\n'.join(q_extra_str) + '\n];\n\n'
    qcontent = new_first_part + split_marker + parts[1]
    with open('lib/data/paths/qGraderData.ts', 'w') as f:
        f.write(qcontent)
    print("Successfully added 6 extra lessons to qGraderData.ts! Total 18 lessons.")
else:
    print("Error: Could not find split_marker in qGraderData.ts")

