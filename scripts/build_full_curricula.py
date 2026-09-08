import re
import os

print("Starting build_full_curricula.py...")

# Let's inspect the files and build the 3rd lessons
# Roaster 3rd lessons
roaster_extra_lessons = [
    {
        "id": "les-r1-3",
        "module_id": "mod-r1",
        "title": "Klasifikasi Ukuran Biji (Screen Size), Peaberry, dan Standar Pemilahan Defect SCA 350g",
        "duration": 15,
        "content": """# Klasifikasi Ukuran Biji (Screen Size), Peaberry, dan Pemilahan Defect SCA 350g

Ukuran fisik dan keseragaman bentuk biji green bean adalah penentu utama kestabilan transfer panas saat biji bergulir di dalam drum roaster. Biji yang ukurannya campur aduk akan matang tidak seragam: biji kecil gosong sebelum biji besar matang di bagian inti!

![Klasifikasi Ukuran Green Bean dan Sortasi Manual](https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Pengayakan Ayakan Screen Size dan Sortasi Cacat Fisik Green Bean — Sumber / Kredit: Unsplash / Specialty Coffee Association (SCA)*

---

### 1. Sistem Klasifikasi Screen Size Internasional

Ukuran biji diukur menggunakan ayakan bertingkat (*screens*) dengan lubang bundar berukuran kelipatan 1/64 inci:
* **Screen 19 – 20 (Sangat Besar)**: Diameter lubang 7.5 – 8.0 mm (Sering disebut *Supremo* di Kolombia atau AA di Kenya).
* **Screen 17 – 18 (Besar / Standar Ekspor)**: Diameter lubang 6.75 – 7.0 mm (Standar tertinggi specialty Arabika Nusantara).
* **Screen 15 – 16 (Sedang)**: Diameter lubang 6.0 mm.
* **Peaberry / Kopi Lanang**: Anomali genetik di mana buah kopi hanya menghasilkan 1 biji bulat tunggal (bukan 2 biji pipih berhadapan). Bentuknya yang bulat membuat peaberry bergulir sangat mulus di dalam drum dan menyerap panas konveksi secara seragam.

---

### 2. Protokol Sortasi Cacat 350 Gram Standar SCA

Standar Specialty Coffee mewajibkan penimbangan tepat **350 gram sampel green bean**:
* **Cacat Primer (Primary Defects)**: Biji hitam penuh (*Full Black*), biji asam busuk (*Full Sour*), batu/ranting besar. **Toleransi: 0 (Nol Cacat Primer)**.
* **Cacat Sekunder (Secondary Defects)**: Biji pecah, lubang serangga kecil, kulit tanduk (*parchment*). Toleransi: Maksimal 5 cacat sekunder setara penuh.
"""
    },
    {
        "id": "les-r2-3",
        "module_id": "mod-r2",
        "title": "Perbandingan Teknologi Mesin: Drum Berputar Tradisional vs Fluid-Bed (Hot Air Roaster)",
        "duration": 15,
        "content": """# Perbandingan Teknologi Mesin: Drum Berputar Tradisional vs Fluid-Bed

Dalam dunia penyangraian modern, dua mahzab teknologi mesin mendominasi industri: mesin drum klasik dan mesin fluida udara (*fluid-bed / air roaster*).

![Mesin Sangrai Kopi Klasik vs Hot Air Fluid-Bed](https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Dinamika Ruang Sangrai Drum Putar dengan Sirkulasi Udara Terkontrol — Sumber / Kredit: Unsplash / Coffee Roasting Technology*

---

### 1. Drum Roaster Tradisional (Konduksi 30% + Konveksi 70%)

* Biji kopi dijatuhkan ke dalam silinder drum baja tebal berputar yang dipanaskan api kompor gas di bagian bawahnya.
* Sirkulasi sirip drum (*drum flights*) mengangkat dan menjatuhkan biji kopi secara teratur menembus aliran udara panas.
* **Karakter Cangkir**: Menghasilkan bodi yang tebal (*creamy mouthfeel*), manis karamel yang pekat, dan aftertaste panjang. Sangat ideal untuk profil espresso dan susu.

---

### 2. Fluid-Bed Air Roaster (Konveksi Murni 95%)

* Tidak ada drum berputar. Biji kopi mengapung dan melayang di atas semburan kolom udara super panas berkecepatan tinggi (*bed of fluidized air*).
* Biji tidak pernah bersentuhan langsung dengan pelat logam panas, sehingga risiko cacat gosong (*scorching*) hampir nol.
* **Karakter Cangkir**: Sangat bersih (*clean cup*), keasaman buah mekar tajam (*bright acidity*), dan aroma bunga (*floral notes*) terdengar sangat artikulatif.
"""
    },
    {
        "id": "les-r3-3",
        "module_id": "mod-r3",
        "title": "Karamelisasi Sukrosa & Pirolisis: Transisi Menuju First Crack dan Pembentukan Asam Organik",
        "duration": 15,
        "content": """# Karamelisasi Sukrosa & Pirolisis: Menuju First Crack

Memasuki suhu 160°C hingga 200°C, reaksi kimia di dalam biji kopi beralih dari endotermik (menyerap panas) menjadi eksotermik (melepaskan panas mandiri).

![Fase Perubahan Warna Biji Kopi dari Kuning ke Cokelat Karamel](https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Titik Kritis Karamelisasi Sukrosa Menjelang Ledakan First Crack — Sumber / Kredit: Unsplash / Specialty Roasters Guide*

---

### 1. Reaksi Karamelisasi Sukrosa

Kandungan sukrosa alami biji Arabika (sekitar 6–9% berat kering) mulai terurai pada suhu 160°C. 
* Molekul gula mengalami polimerisasi menjadi senyawa karamel berbobot tinggi (*caramelan*, *caramelen*, *caramelin*) yang memberikan warna cokelat keemasan dan aroma toffee/butterscotch.
* Jika fase ini diperpanjang terlalu lama, gula akan terkarbonisasi menjadi abu pahit tanpa rasa manis.

---

### 2. Fenomena Fisika First Crack (Suhu 196°C – 205°C)

Uap air yang terperangkap di inti selulosa biji telah mencapai tekanan uap kritis (mencapai 25 atmosfer). Tekanan masif ini merobek dinding sel biji dengan suara letupan renyah layaknya popcorn (*First Crack*):
* Biji mengembang hingga 1.5 – 2 kali volume awalnya.
* Kulit ari perak (*silverskin / chaff*) terlepas dari celah tengah biji.
* Gas karbon dioksida (CO2) mulai diproduksi secara masif di dalam sel biji.
"""
    },
    {
        "id": "les-r4-3",
        "module_id": "mod-r4",
        "title": "Development Time Ratio (DTR 12–18%): Menyeimbangkan Keasaman Buah Cerah dengan Bodi Manis",
        "duration": 15,
        "content": """# Development Time Ratio (DTR 12–18%): Seni Menyeimbangkan Rasa

Waktu setelah First Crack dimulai hingga biji dikeluarkan ke cooling tray disebut sebagai **Development Time**. Persentasenya terhadap total waktu sangrai disebut **Development Time Ratio (DTR)**.

![Analisis Kurva Roasting Software Artisan dan Cropster](https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Pemantauan Grafik DTR dan Trajektori RoR Menggunakan Software Profiling Digital — Sumber / Kredit: Unsplash / Roaster Automation*

---

### 1. Spektrum DTR dan Profil Rasa di Cangkir

* **DTR 10% – 12% (Light / Filter Roast)**:
  - Karakter: Keasaman buah sangat tinggi (*high acidity*), aroma bunga mekar, bodi teh tipis dan bersih.
  - Risiko: Jika inti biji belum matang, rasa akan seperti rumput kering mentah (*underdeveloped*).
* **DTR 14% – 16% (Medium Roast / Omniroast)**:
  - Karakter: Keseimbangan terbaik antara asam buah segar, manis karamel bulat, dan bodi sedang (*silky body*). Sangat fleksibel untuk V60 maupun espresso.
* **DTR 17% – 20% (Medium-Dark / Espresso Roast)**:
  - Karakter: Asam buah melunak, bodi tebal mantap (*heavy body*), dominasi rasa cokelat hitam pekat, rempah, dan gula aren bakar.
"""
    },
    {
        "id": "les-r5-3",
        "module_id": "mod-r5",
        "title": "Underdevelopment (Rasa Rumput Mentah/Baking) vs Overdevelopment (Pahit Karbon)",
        "duration": 15,
        "content": """# Underdevelopment vs Overdevelopment: Diagnosis Sensorik & Teknis

Roaster berpengalaman tidak hanya melihat warna luar biji. Warna luar biji sangrai sering kali menipu jika transfer panas internal tidak seimbang!

![Perbandingan Warna Biji Sangrai Luar dan Dalam Setelah Digiling](https://images.unsplash.com/photo-1587734195503-904fca47e0e9?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Evaluasi Keseragaman Sangrai Melalui Pembelahan Biji dan Spektrometri Warna — Sumber / Kredit: Unsplash / SCA Roasters Guild*

---

### 1. Cacat Underdevelopment (Inti Mentah)

* **Tanda Fisik**: Permukaan luar biji tampak cokelat, namun saat dibelah dua, bagian tengah inti biji masih berwarna kuning pucat atau cokelat muda.
* **Rasa di Meja Cupping**: Masam tajam menyengat (*sour vinegar*), aroma kacang tanah mentah (*green peanut*), bau rumput basah (*vegetative/hay*), dan sensasi sepet mengeringkan ludah di tenggorokan (*astringency*).
* **Koreksi Profil**: Naikkan energi konveksi udara di fase drying atau perpanjang waktu development time tanpa membuat RoR datar.

---

### 2. Cacat Overdevelopment & Baking

* **Baking (Kopi Roti Hambar)**: Terjadi ketika roaster mematikan api terlalu drastis di tengah jalan sehingga RoR mendatar mendekati 0°C/menit. Biji terpanggang lama tanpa energi cukup. Kopi kehilangan rasa manis dan asam buah, rasanya hambar datar seperti roti tawar kering (*bread-like*).
* **Overdevelopment (Gosong Karbon)**: Biji disangrai melampaui Second Crack (>225°C). Selulosa kayu hancur menjadi arang. Minyak keluar membasahi permukaan biji (*oily bean*), rasanya pahit abu rokok menyengat.
"""
    },
    {
        "id": "les-r6-3",
        "module_id": "mod-r6",
        "title": "Kurva Degassing Gas CO2 Biji Sangrai: Menentukan Jendela Waktu Puncak Rasa (Peak Flavor Window)",
        "duration": 15,
        "content": """# Kurva Degassing Gas CO2: Menentukan Puncak Kenikmatan Rasa

Biji kopi yang baru keluar dari drum mesin sangrai **belum siap disajikan kepada konsumen**. Proses kimiawi di dalam biji masih terus berlanjut selama berminggu-minggu pasca sangrai.

![Kemasan Kopi Spesialti Berkatup Satu Arah Degassing Valve](https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Kemasan Kantong Aluminium Foil Kedap Udara dengan One-Way Degassing Valve — Sumber / Kredit: Unsplash / Specialty Roastery Packaging*

---

### 1. Fisiologi Pelepasan Gas Karbon Dioksida (CO2)

Selama reaksi pirolisis di dalam roaster, terbentuk sekitar 5 – 10 liter gas CO2 per kilogram kopi yang terperangkap di dalam pori-pori sel mikro:
* **24 Jam Pertama**: Terjadi pelepasan gas sangat liar (sekitar 40% dari total gas keluar di hari pertama).
* **Fungsi One-Way Valve**: Katup satu arah pada kemasan kantong kopi memungkinkan gas CO2 keluar tanpa membiarkan oksigen luar masuk ke dalam kemasan. Tanpa katup ini, kantong kopi akan menggembung kencang dan meledak!

---

### 2. Kalender Puncak Rasa (*Peak Flavor Window*)

* **Untuk Manual Filter (V60, Kalita, Aeropress)**:
  - *Resting Time Ideal*: **Hari ke-3 hingga Hari ke-5** setelah roasting.
  - *Jendela Puncak Rasa*: Hari ke-5 hingga Hari ke-28.
* **Untuk Espresso Komersial (9 Bar Extraction)**:
  - *Resting Time Ideal*: **Hari ke-7 hingga Hari ke-10** setelah roasting. Gas CO2 berlebih pada biji baru akan memicu busa turbulen yang menghambat kontak air dengan minyak kopi.
  - *Jendela Puncak Rasa*: Hari ke-10 hingga Hari ke-45.
"""
    }
]

# Let's inspect roasterData.ts and append these 6 extra lessons
with open('lib/data/paths/roasterData.ts', 'r') as f:
    rcontent = f.read()

# Build extra lesson strings
r_extra_str = []
for les in roaster_extra_lessons:
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
    summary: 'Materi mendalam {les["title"]} dengan parameter ilmiah kurva sangrai, studi kasus fisika drum, dan standar SCA.',
    key_takeaways: [
      'Pahami fisika dan termodinamika penyangraian untuk mengontrol perubahan kimia internal biji kopi.',
      'Gunakan software profiling (RoR, DTR) secara disiplin untuk menjaga konsistensi antar batch produksi.',
      'Simpan biji sangrai dalam kemasan one-way valve dan seduh pada jendela waktu puncak rasa terbaik.'
    ],
  }},'''
    r_extra_str.append(item)

# Insert before 'export const ROASTER_QUIZZES'
split_marker = 'export const ROASTER_QUIZZES'
if split_marker in rcontent:
    parts = rcontent.split(split_marker)
    # The first part ends with '];\n\n//' or similar
    # let's find the last ']' in parts[0]
    last_bracket = parts[0].rfind('];')
    new_first_part = parts[0][:last_bracket] + '\n' + '\n'.join(r_extra_str) + '\n];\n\n'
    rcontent = new_first_part + split_marker + parts[1]
    with open('lib/data/paths/roasterData.ts', 'w') as f:
        f.write(rcontent)
    print("Successfully added 6 extra lessons to roasterData.ts! Total 18 lessons.")
else:
    print("Error: Could not find split_marker in roasterData.ts")

