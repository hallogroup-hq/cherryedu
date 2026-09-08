import re

print("Starting append_coffeebusiness_extra.py...")

business_extra_lessons = [
    {
        "id": "les-biz1-3",
        "module_id": "mod-biz1",
        "title": "Kalkulasi Biaya Operasional (OPEX) & Break-Even Point Harian: Menghitung Target Minimum Cup",
        "duration": 15,
        "content": """# Kalkulasi Biaya Operasional (OPEX) & Break-Even Point Harian

Banyak pemilik kedai kopi pemula bangga melihat antrean ramai di kedainya, namun terkejut mendapati rekening bank kosong di akhir bulan. Memahami matematika **Biaya Tetap (*Fixed Costs*)** dan **Biaya Variabel (*Variable Costs*)** adalah garis pemisah antara bisnis yang bertahan atau bangkrut dalam 6 bulan.

![Laporan Analisis Finansial dan Titik Impas Kedai Kopi](https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Perencanaan Anggaran Operasional dan Analisis Titik Impas Kedai Kopi — Sumber / Kredit: Unsplash / Coffee Business Academy*

---

### 1. Struktur Biaya Operasional Bulanan (OPEX)

* **Biaya Tetap (*Fixed Costs*)**: Beban biaya yang besarnya sama setiap bulan tidak peduli kedai menjual 10 cup atau 10.000 cup (Sewa ruko, gaji pokok staf barista, listrik dasar & internet, biaya langganan software POS).
* **Biaya Variabel (*Variable Costs / HPP*)**: Biaya yang keluar hanya ketika satu cup kopi terjual (Biji kopi, susu cair, cup kemasan plastik/kertas, sedotan, es batu, dan gula aren).

---

### 2. Studi Kasus Perhitungan BEP Harian

Misalkan kedai kopi "Kopi Rukun" memiliki data keuangan:
* Total Biaya Tetap Bulanan = **Rp 24.000.000**.
* Harga Jual Rata-rata per Cup = **Rp 25.000**.
* Rata-rata HPP Variabel per Cup = **Rp 9.000**.
* Margin Kontribusi per Cup = Rp 25.000 − Rp 9.000 = **Rp 16.000**.

> ☕ **Kalkulasi Titik Impas (BEP):**
> **Target BEP Bulanan** = Rp 24.000.000 ÷ Rp 16.000 = **1.500 cup per bulan**
> **Target BEP Harian** = 1.500 cup ÷ 30 hari = **50 cup per hari!**

*Artinya, cup ke-1 hingga cup ke-50 setiap hari hanya bekerja untuk membayar sewa ruko dan gaji karyawan. Keuntungan murni pemilik kedai baru mulai tercipta pada **cup ke-51 dan seterusnya**!*
"""
    },
    {
        "id": "les-biz2-3",
        "module_id": "mod-biz2",
        "title": "Kalkulasi Penyesuaian Harga Menu Delivery Online: Markup Komisi 20% Tanpa Mengikis Margin",
        "duration": 14,
        "content": """# Kalkulasi Penyesuaian Harga Menu Delivery Online

Aplikasi pesan antar makanan online (GrabFood, GoFood, ShopeeFood) adalah mesin penjualan luar biasa untuk menjangkau konsumen di rumah dan kantor. Namun, skema komisi bagi hasil platform (berkisar antara **20% hingga 25%**) sering kali menjebak pemilik kedai kopi yang salah menghitung persentase matematika!

![Penyajian dan Pengemasan Pesanan Kopi Delivery Online](https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Pengemasan Kopi Botolan dan Cup Sealer untuk Pengiriman Ojek Online — Sumber / Kredit: Unsplash / Coffee Delivery Operations*

---

### 1. Jebakan Matematika Markup Persentase

Banyak pemilik kedai berpikir: *"Kalau komisi platform 20%, dan harga di kasir Rp 20.000, tinggal saya tambahkan 20% (Rp 4.000) menjadi Rp 24.000 di aplikasi!"*.
**INI ADALAH KESALAHAN FATAL!**
* Saat harga menu di aplikasi Rp 24.000, potongan komisi platform 20% dihitung dari Rp 24.000, yaitu **Rp 4.800**.
* Uang bersih yang masuk ke rekening kedai adalah: Rp 24.000 − Rp 4.800 = **Rp 19.200**.
* Kedai Anda justru nombok rugi Rp 800 per cup dari harga kasir normal!

---

### 2. Formula Markup yang Benar

Gunakan rumus pembagi desimal komisi:
> ☕ **Formula Harga Menu Online:**
> **Harga Menu Online** = **Harga Jual Kasir Target ÷ (1 − Persentase Komisi Platform C)**
> *Contoh: Target Kasir Rp 20.000 ÷ (1 − 0.20) = Rp 20.000 ÷ 0.80 = **Rp 25.000**.*
* *Pemeriksaan*: Rp 25.000 dipotong 20% komisi (Rp 5.000) = Uang bersih masuk ke kedai tepat **Rp 20.000 (100% aman!)**.
"""
    },
    {
        "id": "les-biz3-3",
        "module_id": "mod-biz3",
        "title": "Infrastruktur Vital Bar: Kelistrikan Tegangan Stabil, Pemipaan Air Masuk, dan Drainase Pembuangan",
        "duration": 15,
        "content": """# Infrastruktur Vital Bar: Listrik Stabil, Pemipaan Air, dan Drainase Anti-Mampet

Keindahan interior kafe bergaya estetik di Instagram tidak ada artinya jika mesin espresso mati mendadak karena korsleting listrik atau lantai bar banjir akibat pipa drainase mampet di tengah jam sibuk.

![Instalasi Pemipaan dan Kelistrikan Mesin Kopi di Bawah Meja Bar](https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Jalur Plumbing Air Masuk dan Pembuangan Terlindung di Bawah Meja Bar — Sumber / Kredit: Unsplash / Commercial Coffee Plumbing*

---

### 1. Standar Kelistrikan Mesin Espresso

Mesin espresso komersial 2-group membutuhkan daya listrik kontinu 3.500 hingga 5.000 Watt:
* **Jalur Khusus (*Dedicated Circuit Breaker*)**: Mesin kopi wajib memiliki MCB (*Miniature Circuit Breaker*) terpisah sendiri. Jangan pernah menggabungkan satu jalur listrik mesin kopi dengan kulkas chiller, blender, atau microwave!
* **Stabilizer Tegangan (*Voltage Regulator*)**: Di banyak wilayah Indonesia, tegangan listrik PLN berfluktuasi antara 180V hingga 240V. Fluktuasi tegangan ini merusak motherboard komputer mesin kopi dan membakar elemen pemanas boiler. Wajib gunakan stabilizer motor servo berkualitas.

---

### 2. Kemiringan Pipa Drainase Pembuangan (*Drain Slope*)

* Pipa pembuangan driptray mesin kopi membawa ampas kopi, sisa susu asam, dan minyak kopi pekat.
* Pipa drainase wajib memiliki kemiringan sudut gravitasi minimal **1:10 (turun 1 cm untuk setiap panjang 10 cm pipa)** menuju bak kontrol pembuangan.
* Hindari lekukan pipa berbentuk U horisontal di lantai yang akan mengendapkan ampas kopi padat hingga mengeras seperti batu semen dalam waktu 3 bulan!
"""
    },
    {
        "id": "les-biz4-3",
        "module_id": "mod-biz4",
        "title": "Perancangan Sistem Pengolahan Air (Reverse Osmosis / RO System & Remineralisasi)",
        "duration": 15,
        "content": """# Perancangan Sistem Pengolahan Air: Reverse Osmosis (RO) & Remineralisasi

Air adalah 98% komponen di dalam secangkir filter coffee dan 90% komponen di dalam espresso. Jika kualitas air seduh Anda buruk, kopi terenak di dunia pun akan terasa hambar atau masam berdebu.

![Unit Filtrasi Air Reverse Osmosis Komersial untuk Mesin Kopi](https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Unit Filtrasi Membran Reverse Osmosis dengan Kartrid Remineralisasi Kalsium-Magnesium — Sumber / Kredit: Unsplash / Water Filtration Science*

---

### 1. Bahaya Air Baku Tanpa Sistem Filtrasi

* **Air Sadah Berlebih (TDS > 200 ppm, Total Hardness Tinggi)**:
  Ion kalsium ($Ca^{2+}$) dan bikarbonat bereaksi saat terkena panas boiler membentuk kerak padat kalsium karbonat (*limescale*). Kerak ini menyumbat pipa kapiler tembaga, merusak flowmeter, dan membuat mesin jebol.
* **Air Murni Kosong (TDS < 30 ppm / RO Murni Tanpa Remineralisasi)**:
  Air yang terlalu kosong tidak memiliki ion magnesium untuk mengikat senyawa rasa kopi, sehingga hasil seduhan terasa sangat tipis, masam kecut menusuk, dan air bersifat korosif terhadap dinding boiler tembaga.

---

### 2. Standar Desain Sistem RO Remineralisasi Kedai

1. **Sediment & Carbon Pre-Filter**: Menyaring partikel karat, lumpur, dan menyerap klorin racun dari air PAM.
2. **Reverse Osmosis (RO) Membrane**: Memurnikan air hingga TDS turun ke 5–15 ppm.
3. **Remineralization Cartridge / Blending Valve**: Mencampurkan kembali mineral kalsium dan magnesium seimbang hingga air seduh mencapai standar SCA ideal: **TDS 100 – 130 ppm, pH 7.0, dan Kesadahan 60 – 80 ppm**.
"""
    },
    {
        "id": "les-biz5-3",
        "module_id": "mod-biz5",
        "title": "Kultur Komunikasi & Pelatihan Internal: Mengadakan Kalibrasi Rutin Mingguan Tim Barista",
        "duration": 14,
        "content": """# Kultur Komunikasi & Pelatihan Internal: Kalibrasi Rasa Mingguan Tim Barista

Aset termahal di kedai kopi Anda bukanlah mesin espresso buatan Italia seharga ratusan juta rupiah, melainkan **manusia di balik bar**.

![Sesi Pelatihan dan Kalibrasi Internal Tim Barista Mingguan](https://images.unsplash.com/photo-1497636577773-f1231844b336?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Sesi Pelatihan Internal Bersama Head Barista dan Roastery Trainer — Sumber / Kredit: Unsplash / Barista Training Academy*

---

### 1. Agenda Sesi Kalibrasi Mingguan 90 Menit

Setiap hari Senin pagi atau saat kedai libur:
1. **Blind Tasting Espresso**: Seluruh barista menarik 1 shot espresso menggunakan gilingan masing-masing tanpa melihat timbangan rekan kerja. Cicipi bersama secara buta dan evaluasi deviasi rasanya.
2. **Review Waste Log Mingguan**: Diskusikan berapa gram bubuk kopi dan liter susu yang terbuang sia-sia selama minggu lalu. Identifikasi penyebabnya secara solutif tanpa mencari kambing hitam.
3. **Roleplay Pelayanan Pelanggan**: Latih skenario penanganan komplain tamu (misal: tamu mengeluhkan kopi dingin atau susu pecah) agar respons staf selalu seragam dan penuh empati.
"""
    },
    {
        "id": "les-biz6-3",
        "module_id": "mod-biz6",
        "title": "Strategi Retensi Komunitas Lokal: Program Loyalitas, Public Cupping, dan Menaikkan AOV",
        "duration": 15,
        "content": """# Strategi Retensi Komunitas Lokal: Mengubah Pengunjung Biasa Menjadi Penggemar Setia

Biaya mendatangkan pelanggan baru (*Customer Acquisition Cost / CAC*) adalah 5 kali lipat lebih mahal daripada biaya mempertahankan pelanggan lama yang sudah ada (*Customer Retention*). Kedai kopi yang sukses jangka panjang adalah kedai yang berakar kuat di komunitas lingkungannya.

![Acara Public Cupping Kopi Spesialti Bersama Komunitas Pelanggan](https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Edukasi Rasa Kopi Melalui Program Komunitas Public Cupping di Kedai — Sumber / Kredit: Unsplash / Specialty Coffee Community*

---

### 1. Program Public Cupping Komunitas Bulanan

Setiap bulan sekali di akhir pekan:
* Ajak pelanggan setia untuk mencicipi aneka ragam origin biji kopi nusantara yang baru datang dari sangrai.
* Ajarkan cara menyeruput dan mengisi lembar penilaian sederhana. Ketika konsumen diedukasi, mereka akan beralih dari sekadar pembeli kopi murah menjadi penikmat setia yang mengapresiasi kualitas kopi Anda!

---

### 2. Strategi Menaikkan Nilai Belanja Rata-Rata (*Average Order Value / AOV*)

Jangan hanya puas menjual 1 cup kopi seharga Rp 25.000:
* **Bundling Pastry & Cookies**: Tawarkan *"Tambah Rp 12.000 untuk Banana Bread panggang hangat"* di kasir. Peluang konsumen mengambil penawaran ini saat lapar pagi hari mencapai 35%!
* **Penjualan Biji Kopi Sangrai Rumah (Retail Beans 200g)**: Sediakan kemasan kopi untuk dibawa pulang beserta opsi digilingkan langsung di kasir sesuai alat seduh pelanggan di rumah.
"""
    }
]

with open('lib/data/paths/coffeeBusinessData.ts', 'r') as f:
    bcontent = f.read()

b_extra_str = []
for les in business_extra_lessons:
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
    summary: 'Materi mendalam {les["title"]} dengan kalkulasi finansial bisnis kedai kopi, SOP bar, dan strategi retensi.',
    key_takeaways: [
      'Kuasai struktur OPEX dan kalkulasi BEP harian untuk menjamin kelangsungan finansial kedai.',
      'Terapkan formula markup yang benar pada aplikasi delivery online untuk melindungi margin laba kotor.',
      'Bangun komunitas lokal yang solid melalui edukasi publik dan tingkatkan nilai belanja rata-rata.'
    ],
  }},'''
    b_extra_str.append(item)

split_marker = 'export const COFFEE_BUSINESS_QUIZZES'
if split_marker in bcontent:
    parts = bcontent.split(split_marker)
    last_bracket = parts[0].rfind('];')
    new_first_part = parts[0][:last_bracket] + '\n' + '\n'.join(b_extra_str) + '\n];\n\n'
    bcontent = new_first_part + split_marker + parts[1]
    with open('lib/data/paths/coffeeBusinessData.ts', 'w') as f:
        f.write(bcontent)
    print("Successfully added 6 extra lessons to coffeeBusinessData.ts! Total 18 lessons.")
else:
    print("Error: Could not find split_marker in coffeeBusinessData.ts")

