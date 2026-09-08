import { LearningPath, Module, Lesson, Quiz, Question } from '../../types';

// ============================================================================
// 1. LEARNING PATH DEFINITION: COFFEE BUSINESS PATH
// ============================================================================

export const COFFEE_BUSINESS_PATH: LearningPath = {
  id: 'path-coffee-business',
  title: 'Coffee Business & Shop Management Specialist Path',
  slug: 'coffee-business-management',
  description:
    'Kuasai manajemen bisnis kedai kopi modern: pemodelan kelayakan finansial CAPEX/OPEX, kalkulasi presisi HPP & komisi platform online, desain kokpit bar ergonomis, kurasi mesin komersial & RO air, SOP operasional barista, hingga growth hacking retensi pelanggan lokal.',
  thumbnail_url:
    'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&auto=format&fit=crop&q=80',
  layer_type: 'specialization',
  prerequisite_path_id: 'path-foundation',
  target_role: 'business',
  level: 'full',
  is_free: false,
  is_published: true,
  estimated_hours: 28,
  total_modules: 6,
  created_at: '2026-08-10T00:00:00Z',
};

// ============================================================================
// 2. MODULES: COFFEE BUSINESS PATH (MOD-BIZ1 s/d MOD-BIZ6)
// ============================================================================

export const COFFEE_BUSINESS_MODULES: Module[] = [
  {
    id: 'mod-biz1',
    learning_path_id: 'path-coffee-business',
    title: 'Modul BIZ-1: Studi Kelayakan Finansial, CAPEX, OPEX & BEP Kedai Kopi',
    description:
      'Struktur alokasi modal awal (CAPEX), proyeksi biaya operasional bulanan (OPEX), formula Break-Even Point (BEP) volume cangkir harian, dan manajemen runway arus kas.',
    order_index: 1,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
  },
  {
    id: 'mod-biz2',
    learning_path_id: 'path-coffee-business',
    title: 'Modul BIZ-2: Kalkulasi Presisi HPP (COGS), Margin & Strategi Menu Pricing',
    description:
      'Bedah formula HPP minuman kopi (espresso, susu, sirup aren kawung, kemasan takeaway), batas aman gross margin 65-75%, dan mitigasi potongan komisi aplikasi online (20%+).',
    order_index: 2,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
  },
  {
    id: 'mod-biz3',
    learning_path_id: 'path-coffee-business',
    title: 'Modul BIZ-3: Bar Ergonomics, Desain Kokpit Kerja & Efisiensi Alur Servis',
    description:
      'Segitiga emas alur kerja barista (Grinder ➔ Espresso ➔ Knockbox/Sink), eliminasi gerak sia-sia, ketinggian meja ideal, penataan undercounter chiller, dan stasiun kasir POS.',
    order_index: 3,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
  },
  {
    id: 'mod-biz4',
    learning_path_id: 'path-coffee-business',
    title: 'Modul BIZ-4: Kurasi Mesin Komersial, Grinder & Rekayasa Sistem Reverse Osmosis',
    description:
      'Spesifikasi teknis Single Boiler vs Heat Exchanger vs Multi-Boiler Saturated Group, grinder on-demand flat vs conical burr, serta instalasi sistem Reverse Osmosis (RO) remineralisasi bypass.',
    order_index: 4,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
  },
  {
    id: 'mod-biz5',
    learning_path_id: 'path-coffee-business',
    title: 'Modul BIZ-5: Standard Operating Procedure (SOP), Barista Hospitality & Team Shift',
    description:
      'SOP morning dial-in kalibrasi espresso harian, jadwal sanitasi chemical cleaning cycle (Cafiza backflush), hospitality pelayanan prima, dan pembagian shift kerja tim.',
    order_index: 5,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
  },
  {
    id: 'mod-biz6',
    learning_path_id: 'path-coffee-business',
    title: 'Modul BIZ-6: Manajemen Persediaan FIFO, Pengendalian Waste & Growth Hacking Kedai Kopi',
    description:
      'Sistem stok FIFO dan pencatatan spillage waste harian, optimalisasi Local SEO Google Maps, program loyalitas pelanggan setia, dan strategi growth hack menu kolaborasi.',
    order_index: 6,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
  },
];

// ============================================================================
// 3. LESSONS: COFFEE BUSINESS PATH
// ============================================================================

export const COFFEE_BUSINESS_LESSONS: Lesson[] = [
  // --- Modul BIZ-1: Kelayakan Finansial & BEP ---
  {
    id: 'les-biz1-1',
    module_id: 'mod-biz1',
    title: 'Pemodelan Finansial Kedai Kopi: Alokasi Modal CAPEX vs Biaya Rutin OPEX',
    content: `
# Pemodelan Finansial Kedai Kopi: Fondasi Anggaran Sebelum Membuka Pintu

![Pemodelan Finansial Kedai Kopi: Alokasi Modal CAPEX vs Biaya Rutin OPEX](https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Pemodelan Finansial, Manajemen Arus Kas, dan Kalkulasi HPP Kafe — Sumber / Kredit: Specialty Coffee Association Business Guild*

Banyak pengusaha pemula mendirikan kedai kopi hanya bermodalkan antusiasme estetika interior dan kecintaan pada kopi. Kenyataannya, lebih dari 60% kedai kopi independen gulung tikar dalam 18 bulan pertama akibat salah mengalokasikan modal awal (**CAPEX**) dan meremehkan beban biaya operasional berjalan (**OPEX**).

---

### 1. Belanja Modal Awal (*Capital Expenditure* - CAPEX)
CAPEX adalah investasi satu kali di awal untuk mendirikan dan melengkapi infrastruktur kedai kopi sebelum hari pertama buka (*Day 1*):

| Komponen CAPEX | Persentase Ideal | Contoh Rincian Belanja |
|---|---|---|
| **Peralatan Bar Kopi Inti** | **35% – 45%** | Mesin espresso komersial 2-group, espresso grinder on-demand, filter grinder, water filtration system (RO), pitcher rinser, blender, undercounter chiller |
| **Renovasi, Interior & Mepel** | **30% – 35%** | Pekerjaan sipil, meja bar semen/kayu, tata cahaya (lighting), AC komersial, meja-kursi pelanggan, partisi akustik |
| **Instalasi Utilitas Khusus** | **10% – 15%** | Penambahan daya listrik PLN (minimal 11.000–16.500 VA), instalasi pipa tembaga air bersih, grease trap limbah lemak |
| **Sistem POS, Legalitas & Lisensi** | **5% – 8%** | Mesin kasir tablet, printer thermal, laci uang, pendaftaran NIB, izin edar dinas kesehatan |
| **Stok Awal Bahan Baku & Kemasan** | **5% – 8%** | Biji kopi pembuka (50 kg), susu pembuka, sirup, cup plastik custom sablon, sedotan PLA |

---

### 2. Biaya Operasional Berjalan (*Operational Expenditure* - OPEX)
OPEX adalah darah segar yang harus dibayarkan setiap bulan tanpa kompromi, terlepas dari apakah kedai ramai atau sepi:

1. **Biaya Tetap (*Fixed Costs*)**:
   * **Sewa Lokasi (*Rent*)**: Standar industri sehat menetapkan beban sewa maksimal **10% – 15% dari proyeksi omzet kotor bulanan**.
   * **Gaji Karyawan Tetap (*Payroll*)**: Gaji pokok tim barista, supervisor, dan staf kebersihan. Maksimal **20% – 25% dari omzet**.
   * **Utilitas & Wi-Fi**: Tagihan listrik PLN komersial (AC & mesin espresso menyedot daya besar), tagihan air PAM, dan internet fiber optic cepat.
2. **Biaya Variabel (*Variable Costs*)**:
   * Biji kopi sangrai, susu segar, sirup perasa, es batu kristal higienis, dan cup kemasan takeaway yang berbanding lurus dengan jumlah cup yang terjual.

> [!WARNING]
> **Aturan Emas Cadangan Kas (*Cash Runway*)**:
> Jangan habiskan 100% modal Anda untuk CAPEX! Selalu simpan dana cadangan darurat (*working capital reserve*) setara **minimal 4 hingga 6 bulan total OPEX tetap** di rekening bank. Hal ini menjaga kedai tetap bernapas selama masa perintisan (*ramping-up period*) saat jumlah pelanggan belum mencapai kestabilan.
    `,
    content_type: 'text',
    duration_minutes: 20,
    order_index: 1,
    is_free: true,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Studi komprehensif alokasi modal CAPEX (mesin, renovasi, kelistrikan) vs OPEX (sewa, gaji, bahan baku) dan aturan cadangan runway kas 4-6 bulan.',
    key_takeaways: [
      'Peralatan bar kopi inti dan renovasi menyerap 70-80% dari total alokasi anggaran modal awal (CAPEX).',
      'Beban sewa lokasi tidak boleh melampaui 10-15% dari proyeksi omzet kotor bulanan agar kedai tetap sehat.',
      'Wajib menyimpan dana cadangan darurat tunai minimal setara 4-6 bulan total OPEX sebelum resmi membuka kedai.',
    ],
  },
  {
    id: 'les-biz1-2',
    module_id: 'mod-biz1',
    title: 'Kalkulasi Titik Impas (Break-Even Point / BEP) Volume Cangkir Harian',
    content: `
# Kalkulasi Break-Even Point: Berapa Cup yang Wajib Terjual Setiap Hari?

![Kalkulasi Titik Impas (Break-Even Point / BEP) Volume Cangkir Harian](https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Pemodelan Finansial, Manajemen Arus Kas, dan Kalkulasi HPP Kafe — Sumber / Kredit: Specialty Coffee Association Business Guild*

Mengetahui angka **Break-Even Point (BEP)** adalah kompas penunjuk arah bagi pemilik kedai. Angka ini memberi tahu Anda target penjualan harian minimum agar kedai tidak merugi satu rupiah pun.

---

### 1. Formula Matematis BEP Unit:

> ☕ **Persamaan Parameter:**
> **\\text{BEP (Unit Cup Bulanan)} = \\frac{\\text{Total Biaya Tetap Bulanan (Fixed Costs)}}{\\text{Harga Jual Rata-rata per Cup} - \\text{Biaya Variabel per Cup (HPP)}}**

Di mana:
* $(\\text{Harga Jual} - \\text{HPP})$ disebut sebagai **Margin Kontribusi per Cup (*Contribution Margin*)**.
* Untuk mencari target cup harian:
  > ☕ **Persamaan Parameter:**
> **\\text{BEP Harian} = \\frac{\\text{BEP Bulanan}}{30\\text{ hari}}**

---

### 2. Simulasi Studi Kasus Kedai Kopi Nyata di Indonesia:
Mari kita buat simulasi kedai kopi skala medium (*footprint* 50–70 $m^2$) di area suburban/kota:

#### A. Data Keuangan Bulanan:
* Sewa tempat: Rp 8.000.000 / bulan
* Gaji 3 orang Barista: Rp 10.500.000 / bulan
* Listrik PLN & Air PAM: Rp 3.500.000 / bulan
* Wi-Fi, Kasir POS & Kebersihan: Rp 1.000.000 / bulan
* **Total Biaya Tetap (Fixed Costs)** = **Rp 23.000.000 / bulan**

#### B. Data Penjualan per Cup (Rata-rata Menu):
* Rata-rata Harga Jual per Cup: **Rp 24.000**
* Rata-rata HPP Variabel per Cup (Kopi + Susu + Cup): **Rp 8.000**
* Margin Kontribusi per Cup = $Rp\\ 24.000 - Rp\\ 8.000 = \\mathbf{Rp\\ 16.000}$

#### C. Kalkulasi BEP:
> ☕ **Persamaan Parameter:**
> **\\text{BEP Bulanan} = \\frac{Rp\\ 23.000.000}{Rp\\ 16.000} = 1.437.5 \\approx \\mathbf{1.438\\text{ cup / bulan}}**

> ☕ **Persamaan Parameter:**
> **\\text{BEP Harian} = \\frac{1.438}{30} = \\mathbf{47.9} \\approx \\mathbf{48\\text{ cup / hari}}**

> [!IMPORTANT]
> **Interpretasi Bisnis**:
> * **Di bawah 48 cup/hari**: Kedai Anda sedang mengalami pendarahan arus kas (*burning cash*).
> * **Tepat 48 cup/hari**: Kedai Anda berada di titik impas (tidak rugi, tidak untung).
> * **Di atas 48 cup/hari**: Cup ke-49 dan seterusnya adalah **keuntungan bersih murni (*pure profit*)** yang masuk ke kas pemilik bisnis.
    `,
    content_type: 'text',
    duration_minutes: 18,
    order_index: 2,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Formula matematis kalkulasi Break-Even Point (BEP) unit bulanan dan harian berdasarkan fixed costs dan margin kontribusi menu.',
    key_takeaways: [
      'BEP dihitung dengan membagi total biaya tetap bulanan dengan margin kontribusi per cup (Harga Jual - HPP).',
      'Mengetahui BEP cup harian memberikan target operasional konkret bagi tim barista di lapangan.',
      'Seluruh penjualan di atas angka batas BEP harian menghasilkan laba bersih langsung bagi perusahaan.',
    ],
  },

  // --- Modul BIZ-2: Kalkulasi HPP & Menu Pricing ---
  {
    id: 'les-biz2-1',
    module_id: 'mod-biz2',
    title: 'Bedah Formula HPP Minuman Kopi: Es Kopi Susu Gula Aren Spesialti',
    content: `
# Formula Presisi HPP: Menghitung Biaya Hingga ke Satuan Mililiter

![Bedah Formula HPP Minuman Kopi: Es Kopi Susu Gula Aren Spesialti](https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Seduhan Ekstraksi Dingin (Cold Brew) dan Konsentrat Minuman — Sumber / Kredit: Specialty Cold Beverage Innovation Lab*

**Harga Pokok Penjualan (HPP)** atau *Cost of Goods Sold (COGS)* adalah fondasi profitabilitas. Kesalahan umum pemilik kedai pemula adalah hanya menghitung harga kopi dan susu, sambil mengabaikan biaya cup, tutup, sedotan, dan getah aren, sehingga margin yang didapat ternyata jauh lebih tipis dari perkiraan.

---

### Rincian Biaya Riil 1 Cup Es Kopi Susu Gula Aren (Ukuran 12 oz / 360 ml):

| Komponen Bahan Baku | Spesifikasi Bahan & Harga Grosir | Dosis per Cup | Biaya Nyata per Cup |
|---|---|---|---|
| **Espresso Double Shot** | House Blend Arabika-Robusta (Rp 220.000 / kg) | 18 gram kopi bubuk | Rp 3.960 |
| **Susu Segar (Fresh Milk / UHT)** | Susu Pasteurisasi Komersial (Rp 22.000 / liter) | 120 ml | Rp 2.640 |
| **Sirup Gula Aren Alami** | Gula Aren Kawung Asli Banten (Rp 35.000 / liter) | 25 ml | Rp 875 |
| **Krimer Nabati Cair / Evaporasi**| Krimer Masak Kental (Rp 20.000 / liter) | 15 ml | Rp 300 |
| **Es Batu Kristal Higienis** | Es Tube Kristal (Rp 15.000 per karung 20 kg) | 120 gram | Rp 90 |
| **Cup Plastik PP / PET 12 oz** | Cup Custom Sablon Logo 1 Warna (Rp 650 / pcs) | 1 pcs | Rp 650 |
| **Tutup Cup (*Lid / Sealer*)** | Lid Strawless Injection Dome (Rp 250 / pcs) | 1 pcs | Rp 250 |
| **Sedotan & Tas Plastik Takeaway**| Sedotan Ramah Lingkungan PLA + Kantong Singkong | 1 set | Rp 250 |
| **Toleransi Waste & Tumpah (5%)**| Buffer antisipasi kalibrasi & tetesan tercecer | 5% subtotal | Rp 450 |
| **TOTAL HPP RIIL PER CUP** | — | — | **Rp 9.465** |

---

### 2. Standar Target Margin Industri F&B:
* **HPP Ideal**: Berada di rentang **28% – 35% dari Harga Jual**.
* **Gross Profit Margin Ideal**: Berada di rentang **65% – 72%**.

#### Penentuan Harga Jual (*Menu Pricing*):
Jika total HPP riil Anda adalah **Rp 9.500** dan Anda menargetkan HPP berada di angka **35%**:
> ☕ **Persamaan Parameter:**
> **\\text{Harga Jual Ideal} = \\frac{\\text{HPP}}{0.35} = \\frac{Rp\\ 9.500}{0.35} = Rp\\ 27.142 \\approx \\mathbf{Rp\\ 28.000}**

Dengan menjual di harga **Rp 28.000**, kedai Anda mengantongi laba kotor sebesar **Rp 18.500 per cup (margin 66%)**, memberi ruang yang sangat sehat untuk menutup biaya sewa, gaji karyawan, dan promosi.
    `,
    content_type: 'text',
    duration_minutes: 20,
    order_index: 1,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Bedah komprehensif HPP 1 cup Es Kopi Susu Aren (kopi, susu, aren, packaging, waste 5%) dan kalkulasi target gross profit margin 65-72%.',
    key_takeaways: [
      'Kalkulasi HPP wajib mencakup packaging (cup, lid, sedotan, kantong) dan buffer waste tumpah 5%.',
      'Standar persentase HPP industri kedai kopi sehat adalah 28% - 35% dari harga jual produk.',
      'Margin kotor yang sehat (65-72%) krusial untuk menopang beban biaya sewa lokasi dan gaji tim barista.',
    ],
  },
  {
    id: 'les-biz2-2',
    module_id: 'mod-biz2',
    title: 'Margin Pricing & Simulasi Potongan Komisi Aplikasi Pesan Antar Online (20%+)',
    content: `
# Mengamankan Margin dari Jeratan Komisi Platform Online

![Margin Pricing & Simulasi Potongan Komisi Aplikasi Pesan Antar Online (20%+)](https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Pemodelan Finansial, Manajemen Arus Kas, dan Kalkulasi HPP Kafe — Sumber / Kredit: Specialty Coffee Association Business Guild*

Aplikasi pesan antar makanan online (GrabFood, GoFood, ShopeeFood) adalah saluran penjualan raksasa untuk meningkatkan volume, tetapi juga bisa menjadi kuburan finansial jika Anda menetapkan harga yang sama dengan harga di kasir (*dine-in / walk-in*).

---

### 1. Struktur Biaya Komisi Platform Agregator:
* **Potongan Komisi Merchant**: Rata-rata berkisar **20% + PPN (Total ~22.2%)**.
* **Biaya Tambahan Pesanan**: Sebagian platform mengenakan biaya administrasi tetap per transaksi (misal Rp 1.000 per tiket pesanan).
* **Partisipasi Promo Diskon**: Promo *flash sale* atau kupon diskon 30% sering kali mewajibkan merchant menanggung sebagian atau seluruh diskon tersebut.

---

### 2. Simulasi Bahaya Menyamakan Harga Kasir dan Harga Online:
Bayangkan Anda menjual Es Kopi Susu seharga **Rp 20.000** di kasir dengan HPP **Rp 9.500**:
* **Penjualan Kasir (Dine-in)**:
  * Laba Kotor = $Rp\\ 20.000 - Rp\\ 9.500 = \\mathbf{Rp\\ 10.500}$ (Margin 52.5%).
* **Penjualan Online (Jika Harga Tetap Rp 20.000)**:
  * Potongan Komisi 20% = $Rp\\ 4.000$.
  * Uang yang cair ke rekening kedai = $Rp\\ 16.000$.
  * Dikurangi HPP = $Rp\\ 16.000 - Rp\\ 9.500 = \\mathbf{Rp\\ 6.500}$!
  * Margin kotor anjlok menjadi hanya **32.5%**! Setelah dipotong biaya sewa dan gaji karyawan, Anda praktis berjualan tanpa profit atau bahkan nombok.

---

### 3. Rumus Penyesuaian Harga Menu Online (*Mark-up Formula*):
Untuk mempertahankan perolehan uang bersih yang sama dengan harga kasir di tengah komisi merchant ($C = 20\\%$):

> ☕ **Persamaan Parameter:**
> **\\text{Harga Menu Online} = \\frac{\\text{Harga Kasir Target}}{1 - C}**

#### Contoh Kasus:
Jika Anda ingin menerima bersih **Rp 24.000** dari platform online:
> ☕ **Persamaan Parameter:**
> **\\text{Harga Menu Online} = \\frac{Rp\\ 24.000}{1 - 0.20} = \\frac{Rp\\ 24.000}{0.80} = \\mathbf{Rp\\ 30.000}**

* Pelanggan membayar Rp 30.000 di aplikasi.
* Platform memotong komisi 20% ($Rp\\ 6.000$).
* Kedai Anda menerima bersih **Rp 24.000**, menjaga margin profitabilitas tetap kokoh.
    `,
    content_type: 'text',
    duration_minutes: 17,
    order_index: 2,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Analisis dampak komisi aplikasi online (20%+) terhadap margin kedai dan formula matematis penyesuaian harga menu online (mark-up pricing).',
    key_takeaways: [
      'Menyamakan harga jual kasir dengan harga online dapat menggerus margin kotor kedai hingga 50%.',
      'Formula penyesuaian harga online = Harga Kasir / (1 - Persentase Komisi).',
      'Strategi bundling paket kombo di aplikasi online terbukti efektif meningkatkan nilai keranjang belanja (basket size).',
    ],
  },

  // --- Modul BIZ-3: Bar Ergonomics & Desain Kokpit ---
  {
    id: 'les-biz3-1',
    module_id: 'mod-biz3',
    title: 'Prinsip Desain Kokpit Bar Kopi: Segitiga Emas Barista & Menghilangkan Gerak Sia-sia',
    content: `
# Bar Ergonomics: Membangun Kokpit Bar Kecepatan Tinggi

![Prinsip Desain Kokpit Bar Kopi: Segitiga Emas Barista & Menghilangkan Gerak Sia-sia](https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Layout Stasiun Bar Ergonomis dan Alur Kerja Barista Efisien — Sumber / Kredit: Coffee Bar Architecture & Workflow Design*

Dalam operasional kedai kopi yang sibuk, **setiap langkah kaki ekstra dan setiap detik gerakan sia-sia adalah biaya**. Ergonomi bar yang buruk menyebabkan antrean menumpuk lambat saat jam sibuk (*rush hour*), kelelahan fisik barista, cidera pergelangan tangan (*Carpal Tunnel Syndrome*), dan minuman tumpah berantakan.

---

### 1. Teori Segitiga Emas Barista (*The Golden Triangle*)
Mirip dengan konsep segitiga kerja dapur (*Kitchen Work Triangle*), stasiun espresso harus dirancang dalam radius putaran tubuh **tanpa barista perlu melangkah lebih dari 1–2 langkah kaki**:

> **Segitiga Alur Kerja Espresso:**  
> Stasiun Grinder (Dosing & Tamping) ➔ Mesin Espresso (Extraction) ➔ Knockbox & Stasiun Susu/Sink (Disposal & Texturing)

1. **Posisi Grinder**: Diletakkan tepat di samping kanan (atau kiri) mesin espresso sejajar dengan lengan dominan.
2. **Posisi Tamping Station**: Bersebelahan langsung dengan grinder sehingga bubuk tidak tercecer ke lantai saat dipindahkan.
3. **Posisi Knockbox**: Tertanam di permukaan meja bar (*in-counter knock chute*) tepat di bawah grinder atau di antara grinder dan mesin, sehingga barista dapat membuang ampas (*puck*) dengan satu ketukan instan.

---

### 2. Standar Dimensi Meja Bar Ergonomis:
* **Tinggi Meja Bar Barista**: **88 cm – 92 cm** dari lantai (disesuaikan dengan tinggi rata-rata siku barista Indonesia untuk mencegah sakit pinggang saat tamping).
* **Tinggi Meja Depan Pelanggan (*Customer Counter*)**: **105 cm – 115 cm** (memberikan privasi estetika bar sembari menyembunyikan kabel dan peralatan teknis di bawah meja).
* **Lebar Kedalaman Meja (*Depth*)**: **70 cm – 80 cm** (cukup untuk menampung mesin espresso komersial tanpa membuat barista harus membungkuk jauh menjangkau cangkir).
* **Jarak Lorong Bar (*Aisle Width*)**: **90 cm – 110 cm**. Terlalu sempit (<80 cm) membuat dua barista saling bertubrukan saat berpapasan; terlalu lebar (>130 cm) memaksa barista melangkah terlalu jauh bolak-balik.
    `,
    content_type: 'text',
    duration_minutes: 18,
    order_index: 1,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Desain ergonomis kokpit bar: segitiga emas (Grinder - Mesin - Knockbox), dimensi tinggi meja 88-92cm, dan lebar lorong 90-110cm untuk efisiensi kecepatan servis.',
    key_takeaways: [
      'Segitiga emas memposisikan grinder, mesin, dan knockbox dalam radius putaran tubuh tanpa langkah kaki berlebih.',
      'Tinggi meja bar 88-92 cm mencegah cedera fisik barista saat melakukan tamping ribuan kali.',
      'Lebar lorong ideal 90-110 cm memungkinkan dua barista bergerak leluasa tanpa saling bertubrukan saat jam sibuk.',
    ],
  },
  {
    id: 'les-biz3-2',
    module_id: 'mod-biz3',
    title: 'Penataan Stasiun Susu (Pitcher Rinser, Chiller) dan Alur Tiket Pesanan Kasir POS',
    content: `
# Stasiun Susu & Manajemen Alur Tiket POS

![Penataan Stasiun Susu (Pitcher Rinser, Chiller) dan Alur Tiket Pesanan Kasir POS](https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Ekstraksi Presisi Seduh Manual Pour-Over dengan Dripper V60 — Sumber / Kredit: World Brewers Cup Championship Archive*

Setelah stasiun ekstraksi kopi tertata rapi, titik kemacetan (*bottleneck*) berikutnya di bar kedai kopi sering kali berada di stasiun penuangan susu (*milk station*) dan koordinasi tiket pesanan kasir POS.

---

### 1. Anatomi Stasiun Susu Berkecepatan Tinggi:
* **Pitcher Rinser Bertenaga Tekan (*Pressurized Rinser*)**: Wajib terpasang persis di samping nampan tetesan (*drip tray*) mesin espresso. Barista dapat membilas sisa susu di milk jug hanya dalam waktu 2 detik dengan satu tekanan tangan, menghilangkan kebutuhan bolak-balik ke wastafel cuci piring.
* **Undercounter Milk Chiller**: Kulkas pendingin berpintu kaca yang diletakkan tepat di bawah meja bar, persis di bawah steam wand mesin kopi. Barista cukup menunduk sedikit untuk mengambil karton susu segar bersuhu 4°C tanpa perlu berjalan ke ruang belakang.
* **Tempat Sampah Pedal / Drop Chute**: Lubang pembuangan sampah karton susu kosong yang terintegrasi di meja kerja.

---

### 2. Alur Tiket Pesanan POS & Manajemen Antrean:
* **Prinsip Alur Linear Satu Arah (*One-Way Linear Flow*)**:
  > Antrean Masuk ➔ Kasir POS ➔ Stasiun Ekstraksi ➔ Stasiun Pemanis/Susu ➔ Pick-up Point ➔ Area Duduk / Pintu Keluar
* Pelanggan yang telah memesan tidak boleh berdiri menghalangi antrean orang yang baru masuk.
* **Sistem Printer Dapur / KDS (*Kitchen Display Screen*)**:
  * Tiket pesanan otomatis tercetak di meja barista begitu kasir menekan tombol pembayaran.
  * Setiap tiket mencantumkan nomor antrean, nama pelanggan, modifikasi khusus (*less sugar, oat milk, extra shot*), dan cap waktu menit pemesanan (*timestamp*).
  * **Target Waktu Servis**: Maksimal **2.5 hingga 3 menit** per pesanan cup di jam sibuk untuk mencegah antrean pelanggan membatalkan pesanan.
    `,
    content_type: 'text',
    duration_minutes: 16,
    order_index: 2,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Integrasi pitcher rinser, undercounter milk chiller, alur satu arah (linear flow) kasir ke pick-up, dan target kecepatan waktu servis 3 menit.',
    key_takeaways: [
      'Pitcher rinser di meja bar memangkas waktu pembersihan milk jug dari 20 detik menjadi hanya 2 detik.',
      'Undercounter chiller menjaga suhu susu stabil 4°C tepat di bawah jangkauan tangan barista.',
      'Alur kasir satu arah (linear flow) mencegah penumpukan pelanggan di depan area pengambilan minuman.',
    ],
  },

  // --- Modul BIZ-4: Kurasi Mesin & Reverse Osmosis ---
  {
    id: 'les-biz4-1',
    module_id: 'mod-biz4',
    title: 'Memilih Mesin Espresso Komersial: Single Boiler, Heat Exchanger (HX), vs Multi-Boiler Saturated Group',
    content: `
# Kurasi Mesin Espresso Komersial: Menyesuaikan Teknologi dengan Volume Penjualan

![Memilih Mesin Espresso Komersial: Single Boiler, Heat Exchanger (HX), vs Multi-Boiler Saturated Group](https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Sistem Reverse Osmosis dan Remineralisasi Air Bar Kopi — Sumber / Kredit: Specialty Coffee Technology Guild*

Mesin espresso adalah investasi modal terbesar dalam pembukaan kedai kopi (berkisar antara Rp 35 juta hingga Rp 250 juta+). Memilih arsitektur boiler yang salah bisa berujung pada suhu ekstraksi yang anjlok saat kedai ramai atau pembengkakan biaya listrik yang tidak masuk akal.

---

### 1. Tiga Arsitektur Boiler Mesin Espresso Komersial:

| Tipe Mesin | Mekanisme Termal | Kelebihan | Keterbatasan Utama | Volume Cup Ideal |
|---|---|---|---|---|
| **Heat Exchanger (HX)** | Satu boiler uap besar dengan pipa tembaga penukar panas yang melintas di dalamnya | Harga terjangkau, daya listrik moderat (2.500–3.500W), tenaga uap kuat | Suhu air seduh mudah melonjak (*overheat*) jika mesin didiamkan; memerlukan *cooling flush* sebelum ekstraksi | **50 – 150 cup / hari** (Kedai Kopi Kecil/Menengah) |
| **Dual Boiler Independen** | Boiler khusus seduh (0.5–1.5L) terpisah total dari boiler uap steam (3–7L) dengan PID Controller | Stabilitas suhu seduh sangat presisi (±0.5°C), kontrol PID digital mandiri | Harga lebih mahal; kapasitas boiler seduh terbatas untuk rush hour ekstrem | **150 – 300 cup / hari** (Spesialti Menengah-Atas) |
| **Multi-Boiler Saturated Group** | Setiap group head memiliki boiler mandiri yang menyatu dengan leher logam group (terendam air panas sirkulasi) | Kestabilan suhu absolut tak tergoyahkan bahkan saat mengekstraksi 10 cup berturut-turut; profil tekanan variabel | Investasi sangat mahal (Rp 150jt - 300jt+); daya listrik sangat besar (5.000–8.000W) | **> 300 cup / hari** (Kedai Sibuk, Flagship & High-Volume Mall) |

---

### 2. Pertimbangan Teknis Sebelum Membeli Mesin:
1. **Kapasitas Daya Listrik Tempat**: Mesin komersial 2-group membutuhkan daya listrik minimal **3.500 hingga 5.500 Watt 1-phase atau 3-phase**. Pastikan gardu listrik ruko Anda mampu menampung beban tanpa korsleting.
2. **Ketersediaan Sparepart & Teknisi Lokal**: Jangan membeli mesin impor langka hanya karena desain eksteriornya keren jika agen tunggal pemegang merek (ATPM) lokal tidak memiliki stok elemen pemanas (*heating element*), solenoid valve, dan gasket karet pengganti.
    `,
    content_type: 'text',
    duration_minutes: 20,
    order_index: 1,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Komparasi teknis mesin espresso Heat Exchanger (HX), Dual Boiler PID, dan Multi-Boiler Saturated Group serta kalkulasi kapasitas volume cup harian.',
    key_takeaways: [
      'Mesin HX membutuhkan cooling flush untuk menstabilkan suhu tetapi sangat ekonomis untuk kedai skala awal.',
      'Dual boiler dengan kontrol PID memberikan akurasi suhu seduh presisi tanpa terpengaruh penggunaan steam wand.',
      'Multi-boiler saturated group adalah standar emas kedai high-volume untuk menjamin suhu ekstraksi konsisten di atas 300 cup/hari.',
    ],
  },
  {
    id: 'les-biz4-2',
    module_id: 'mod-biz4',
    title: 'Rekayasa Sistem Filtrasi Air Komersial: Reverse Osmosis (RO) dengan Remineralization Bypass',
    content: `
# Rekayasa Air Kedai Kopi: Reverse Osmosis dengan Remineralisasi Bypass

![Rekayasa Sistem Filtrasi Air Komersial: Reverse Osmosis (RO) dengan Remineralization Bypass](https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Sistem Reverse Osmosis dan Remineralisasi Air Bar Kopi — Sumber / Kredit: Specialty Coffee Technology Guild*

Tahukah Anda bahwa **penyebab nomor satu kerusakan mesin espresso komersial di Indonesia adalah kerak kalsium (limescale)**? Air tanah atau PAM di banyak kota di Indonesia memiliki kesadahan sangat tinggi atau mengandung klorin dan lumpur halus yang dapat menyumbat pipa kapiler boiler dalam hitungan bulan.

---

### 1. Bahaya Air Tanpa Filtrasi Terhadap Mesin Kopi:
* **Kerak Kalsium Karbonat ($CaCO_3$)**: Mengendap pada dinding tembaga boiler dan membungkus elemen pemanas. Menyebabkan konsumsi listrik membengkak 30%, sensor suhu membaca salah, dan boiler akhirnya jebol.
* **Klorin Bebas (*Chlorine*)**: Memicu korosi lubang jarum (*pitting corrosion*) pada logam kuningan dan baja tahan karat.
* **Dampak Rasa**: Air sadah mematikan keasaman buah alami kopi dan menghasilkan rasa seduhan yang pahit berdebu.

---

### 2. Solusi Industri: Sistem Reverse Osmosis (RO) dengan Remineralisasi Bypass
Sistem filtrasi katrid karbon biasa tidak mampu menyaring mineral terlarut kalsium dan magnesium. Satu-satunya solusi andal untuk kedai komersial adalah **Sistem Reverse Osmosis Komersial**:

> **Alur Sistem Filtrasi RO Kedai Kopi:**  
> Air Baku PAM/Tanah ➔ Sedimen 5 Mikron ➔ Karbon Aktif GAC ➔ Membran RO (TDS turun ke <15 ppm) ➔ Valve Bypass Remineralisasi (TDS diatur ke 100-130 ppm) ➔ Tangki Tekan ➔ Mesin Espresso

#### Mengapa Perlu Remineralization Bypass Valve?
Air murni hasil membran RO memiliki TDS mendekati $0 - 15\\text{ ppm}$ dengan sifat sedikit asam (agresif):
* Air dengan TDS terlalu rendah tidak memiliki mineral kalsium/magnesium untuk mengikat senyawa rasa kopi, sehingga espresso terasa asam hambar tanpa manis.
* Selain itu, sensor level air di boiler mesin kopi mengandalkan konduktivitas listrik air; jika air terlalu murni, probe sensor tidak dapat membaca air dan boiler akan mengisi air secara berlebihan (*flooding*).
* **Katup Remineralisasi Bypass**: Mencampurkan kembali sebagian air terfiltrasi bersih untuk mencapai **target TDS ideal SCA: 100 – 130 ppm** dengan total kesadahan kalsium aman (50–60 ppm).
    `,
    content_type: 'text',
    duration_minutes: 18,
    order_index: 2,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Sains proteksi boiler mesin kopi dari kerak kalsium melalui instalasi komersial Reverse Osmosis (RO) yang dilengkapi katup bypass remineralisasi target 100-130 ppm.',
    key_takeaways: [
      'Kerak kalsium karbonat adalah biang keladi kerusakan elemen boiler mesin espresso komersial.',
      'Membran RO menyaring 98% kontaminan terlarut hingga air bebas mineral murni.',
      'Katup bypass remineralisasi wajib diatur ke 100-130 ppm TDS untuk menghasilkan ekstraksi rasa manis optimal dan melindungi sensor boiler.',
    ],
  },

  // --- Modul BIZ-5: SOP Operasional & Barista Hospitality ---
  {
    id: 'les-biz5-1',
    module_id: 'mod-biz5',
    title: 'SOP Kalibrasi Pagi (Morning Dial-In) Espresso & Chemical Cleaning Cycle (Cafiza Backflush)',
    content: `
# Standard Operating Procedure: Kalibrasi Pagi & Sanitasi Harian

![SOP Kalibrasi Pagi (Morning Dial-In) Espresso & Chemical Cleaning Cycle (Cafiza Backflush)](https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Ekstraksi Espresso Presisi Menggunakan Mesin Komersial Multi-Boiler — Sumber / Kredit: World Barista Championship Standards*

Cita rasa espresso yang luar biasa pada hari pembukaan tidak ada artinya jika rasanya berubah menjadi encer dan pahit seminggu kemudian. Kunci konsistensi kedai kopi ternama adalah penerapan **SOP Kalibrasi Pagi (*Morning Dial-In*)** dan **Protokol Pembersihan Kimiawi (*Chemical Cleaning Cycle*)** tanpa kompromi.

---

### 1. SOP Kalibrasi Pagi Barista (*Morning Dial-In Checklist*):
Dilakukan setiap pagi **30–45 menit sebelum pintu kedai dibuka untuk umum**:

1. **Pemanasan Mesin**: Nyalakan mesin minimal 20 menit sebelum kalibrasi agar suhu group head dan portafilter stabil di angka 93°C.
2. **Purge Grinder**: Buang 15–20 gram bubuk kopi lama yang mengendap di dalam ruang burr grinder semalaman (*stale retention retention*).
3. **Standar Target Kalibrasi (Double Shot)**:
   * **Dosis Kering (*Dose*)**: $18.0\\text{ gram}\\ (\\pm 0.2\\text{g})$
   * **Hasil Cairan (*Yield*)**: $36.0\\text{ gram}\\ (\\pm 1.0\\text{g})$ — Rasio Ekstraksi $1:2$
   * **Waktu Ekstraksi (*Contact Time*)**: **26 hingga 30 detik**
4. **Sensory Test Wajib**: Barista wajib mencicipi espresso hasil kalibrasi. Nilai apakah terdapat rasa asam menyengat (*under-extracted*) atau pahit kering (*over-extracted*). Lakukan penyesuaian klik mikro grinder hingga profil rasa seimbang, manis, dan beraroma karamel.
5. **Catat Log Book**: Tulis angka setelan gilingan, suhu ruangan, dan waktu ekstraksi di papan log book harian bar.

---

### 2. SOP Pembersihan Akhir Shift (Closing Cleaning Cycle):
Minyak kopi (*coffee oils*) yang terbakar dan menempel di shower screen mesin espresso akan teroksidasi menjadi tengik (*rancid*) dalam kurun 12 jam jika tidak dibersihkan dengan detergen khusus:

1. **Backflush dengan Blind Basket & Bubuk Detergen Khusus (Cafiza / Puly Caff)**:
   * Masukkan keranjang buntu (*blind filter basket*) ke portafilter.
   * Masukkan 1 sendok teh bubuk detergen pembersih espresso (berbahan dasar natrium karbonat peroksida).
   * Pasang ke group head, aktifkan pompa ekstraksi selama 10 detik, matikan 10 detik. Ulangi siklus ini sebanyak **5 kali berturut-turut**. Detergen akan berbusa dan melepaskan minyak kerak yang menempel di katup 3-way solenoid.
2. **Backflush Pembilasan Air Murni**: Ulangi siklus 5 kali dengan air murni tanpa sabun hingga air bilasan keluar jernih.
3. **Pembersihan Steam Wand**: Rendam pipa uap dalam larutan pembersih susu (*milk line cleaner*) dan semprotkan uap panas untuk merontokkan kerak kasein susu yang menempel di lubang nozzle. Lap hingga bersih dan steril.
    `,
    content_type: 'text',
    duration_minutes: 18,
    order_index: 1,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Checklist SOP kalibrasi pagi (dosis 18g, yield 36g, 26-30 detik) serta protokol sanitasi backflush detergen Cafiza harian untuk mencegah minyak kopi tengik.',
    key_takeaways: [
      'Morning dial-in wajib dilakukan setiap hari sebelum buka dengan mencicipi espresso dan mencatat parameter di log book.',
      'Purge grinder 15-20 gram bubuk sisa semalam wajib dilakukan sebelum memulai ekstraksi hari baru.',
      'Backflush kimiawi malam hari menggunakan blind basket dan detergen pembersih khusus mencegah minyak kopi berubah menjadi rasa tengik basi.',
    ],
  },
  {
    id: 'les-biz5-2',
    module_id: 'mod-biz5',
    title: 'Hospitality Pelayanan Prima, Manajemen Antrean Jam Sibuk, dan Penjadwalan Shift',
    content: `
# Barista Hospitality: Mengubah Pelanggan Pertama Menjadi Pelanggan Tetap

![Hospitality Pelayanan Prima, Manajemen Antrean Jam Sibuk, dan Penjadwalan Shift](https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Pelayanan Ramah dan Manajemen Pengalaman Tamu di Kedai Kopi — Sumber / Kredit: Specialty Coffee Hospitality Principles*

Dalam industri kopi modern di mana kualitas kopi di berbagai kedai semakin kompetitif, **Hospitality dan Kehangatan Pelayanan adalah faktor nomor satu yang menentukan apakah pelanggan akan kembali lagi besok pagi**.

---

### 1. Prinsip Hospitality Kedai Kopi Spesialti:
* **The 5-Second Greeting Rule**: Setiap pelanggan yang melangkah melewati pintu kedai wajib disapa dengan senyuman hangat dalam kurun waktu **maksimal 5 detik**, meskipun barista sedang sibuk steaming susu.
* **Edukasi Tanpa Kesombongan (*Snobbery-Free Education*)**: 
  * Jangan pernah membuat pelanggan merasa bodoh saat mereka memesan *"Americano dingin tapi manis"* atau menanyakan perbedaan Latte dan Cappuccino.
  * Barista harus menjadi jembatan ramah yang membimbing preferensi rasa pelanggan dengan antusias dan tulus.
* **Mengingat Nama & Pesanan Favorit**: Pelanggan yang disapa dengan namanya dan diingat preferensi kopinya (*"Double shot oat latte seperti biasa ya, Kak Rama?"*) memiliki tingkat retensi loyalitas hingga 300% lebih tinggi.

---

### 2. Manajemen Antrean Jam Sibuk (*Rush Hour Triage*):
Pada jam sibuk pagi (08:00–10:00) atau makan siang (12:00–14:00), tim bar harus membagi peran secara tegas (*role assignment*):

| Peran Barista | Tugas Spesifik | Pantangan |
|---|---|---|
| **Barista 1: Extraction Specialist** | Fokus 100% pada dosing, tamping, dan mengoperasikan mesin espresso | Dilarang meninggalkan area group head |
| **Barista 2: Milk & Assembly Specialist** | Steaming susu, menuang sirup/gula aren, merakit cup es, dan capping lid | Dilarang mengobrol santai |
| **Barista 3: Order, POS & Floating** | Mengetik pesanan kasir, melayani pembayaran QRIS, menyajikan pesanan, dan refill stok susu | Dilarang membiarkan antrean kasir menunggu |

---

### 3. Penjadwalan Shift yang Adil & Efisien:
* **Maksimal 8 Jam Kerja Efektif**: Menyeduh ratusan cangkir menuntut konsentrasi fisik tinggi. Barista yang dipaksa bekerja >10 jam sehari akan mengalami penurunan fokus tajam yang memicu salah pesanan dan minuman tumpah.
* **Waktu Tumpang Tindih (*Overlap Period*)**: Sediakan waktu overlap 30 menit antar shift pagi dan sore untuk proses serah terima kas kasir (*cash count*), pembersihan stasiun bar, dan pengisian ulang stok bahan baku (*restocking*).
    `,
    content_type: 'text',
    duration_minutes: 16,
    order_index: 2,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Prinsip pelayanan hospitality tanpa kesombongan, strategi pembagian peran barista di jam sibuk (rush hour triage), dan manajemen shift kerja tim.',
    key_takeaways: [
      'Aturan 5 detik menyapa pelanggan saat membuka pintu menciptakan koneksi emosional instan.',
      'Triage jam sibuk membagi peran spesifik: Ekstraksi, Steaming/Assembling, dan Kasir POS.',
      'Sediakan waktu overlap 30 menit antar pergantian shift untuk serah terima operasional dan restock bahan baku.',
    ],
  },

  // --- Modul BIZ-6: Manajemen Stok FIFO & Growth Hacking ---
  {
    id: 'les-biz6-1',
    module_id: 'mod-biz6',
    title: 'Manajemen Persediaan FIFO (First-In, First-Out) & Pengendalian Waste Harian',
    content: `
# Manajemen Persediaan & Pengendalian Waste: Menghentikan Kebocoran Laba

![Manajemen Persediaan FIFO (First-In, First-Out) & Pengendalian Waste Harian](https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Ekstraksi Presisi Seduh Manual Pour-Over dengan Dripper V60 — Sumber / Kredit: World Brewers Cup Championship Archive*

Setiap liter susu yang kadaluarsa di dalam kulkas dan setiap shot espresso yang dibuang percuma akibat kelalaian barista adalah **kebocoran laba langsung dari kas kedai kopi Anda**.

---

### 1. Prinsip FIFO (*First-In, First-Out*)
Prinsip FIFO memastikan bahwa stok bahan baku yang pertama kali masuk ke gudang/kulkas harus menjadi stok yang pertama kali dipakai dalam produksi:

* **Pemberian Label Tanggal (*Date Tagging*)**: Setiap karton susu, botol sirup, dan karung biji kopi yang diterima dari pemasok wajib diberi stiker tanggal kedatangan (*Date In*) dan tanggal kadaluarsa (*Exp Date*).
* **Tata Letak Kulkas Susu**: Karton susu yang baru datang diletakkan di barisan belakang; karton susu yang lebih lama digeser maju ke barisan paling depan untuk diambil lebih dulu.
* **Rotasi Biji Kopi Sangrai**: Mengatur penggunaan biji kopi sesuai masa resting optimal (gunakan lot yang telah resting 10–14 hari terlebih dahulu).

---

### 2. Pencatatan Lembar Pemborosan (*Daily Waste Log Sheet*):
Kedai kopi profesional mewajibkan tim bar mencatat setiap gram bahan yang terbuang setiap hari:

| Waktu | Komponen yang Terbuang | Jumlah | Alasan Pemborosan | Tindakan Pencegahan |
|---|---|---|---|---|
| **07:30** | Biji Kopi House Blend | 40 gram | Kalibrasi pagi dial-in | Wajar (sesuai SOP) |
| **11:15** | Susu Fresh Milk | 200 ml | Sisa susu berlebih di pitcher | Latih barista menakar susu sesuai ukuran cup |
| **14:00** | 1 Cup Iced Latte | 1 cup utuh | Barista salah dengar pesanan (minta Oat Milk) | Pastikan kasir mengulang pesanan ke pelanggan |
| **21:30** | Sirup Gula Aren | 100 ml | Tumpah saat proses penuangan botol squeeze | Gunakan corong tuang plastik food-grade |

> [!TIP]
> Evaluasi lembar waste log ini setiap minggu bersama seluruh tim. Jika pemborosan susu mencapai >5% dari total volume pembelian mingguan, lakukan pelatihan ulang teknik penakaran volume susu di milk pitcher (*milk volume dosing*).
    `,
    content_type: 'text',
    duration_minutes: 17,
    order_index: 1,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Penerapan sistem persediaan FIFO, stiker tanggal penerimaan, serta SOP pencatatan lembar pemborosan (waste log sheet) untuk mencegah kebocoran profit.',
    key_takeaways: [
      'Sistem FIFO mewajibkan bahan baku yang masuk lebih dulu dipakai terlebih dahulu melalui rotasi rak yang disiplin.',
      'Pencatatan harian waste log mengidentifikasi sumber pemborosan susu dan kesalahan resep barista.',
      'Toleransi waste operasional yang sehat berada di bawah 3-5% dari total volume belanja bahan baku mingguan.',
    ],
  },
  {
    id: 'les-biz6-2',
    module_id: 'mod-biz6',
    title: 'Growth Hacking Kedai Kopi: Local SEO Google Maps, Program Loyalitas, dan Menu Kolaborasi',
    content: `
# Growth Hacking Kedai Kopi: Strategi Akusisi & Retensi Pelanggan Lokal

![Growth Hacking Kedai Kopi: Local SEO Google Maps, Program Loyalitas, dan Menu Kolaborasi](https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Sistem Reverse Osmosis dan Remineralisasi Air Bar Kopi — Sumber / Kredit: Specialty Coffee Technology Guild*

Membuka kedai kopi di lokasi strategis tidak lagi menjamin keramaian tanpa strategi pemasaran digital hiper-lokal (*hyper-local digital marketing*). Anda tidak memerlukan anggaran iklan miliaran rupiah; gunakan taktik **Growth Hacking** berbasis komunitas.

---

### 1. Dominasi Local SEO Google Maps & Google Business Profile:
Lebih dari 70% pelanggan baru menemukan kedai kopi melalui pencarian di ponsel cerdas (*"coffee shop near me"* atau *"kedai kopi terdekat"*):
* **Optimasi Profil Bisnis**: Lengkapi nama kedai, alamat presisi pin point, jam operasional akurat, nomor WhatsApp, dan menu lengkap beserta foto berkualitas tinggi.
* **Strategi Review Bintang 5 Organik**: Buat program interaktif di kasir: *"Dapatkan gratis ekstra shot espresso atau diskon 10% untuk kunjungan berikutnya dengan memberikan ulasan jujur dan foto di Google Maps kami."*
* Algoritma Google Maps memprioritaskan kedai kopi yang memiliki foto aktif yang diunggah pengguna (*user-generated photos*) dan ulasan baru yang konsisten setiap minggunya.

---

### 2. Program Loyalitas Pelanggan Sederhana tapi Mematikan (*Stamp Loyalty Cards*):
Mengakuisisi pelanggan baru berbiaya **5 kali lebih mahal** daripada mempertahankan pelanggan lama yang sudah pernah datang:
* **Kartu Stempel Digital / Fisik**: Skema *Beli 9 Cup Gratis 1 Cup ke-10*.
* **Trik Psikologi Efek Kemajuan Ilusi (*Endowed Progress Effect*)**:
  * Berikan kartu loyalitas dengan total 10 lingkaran, tetapi **langsung beri 2 stempel gratis pertama di saat pendaftaran!**
  * Riset perilaku konsumen membuktikan bahwa pelanggan yang merasa "sudah menyelesaikan 20% dari target" akan menyelesaikan 8 stempel sisanya dua kali lebih cepat dibandingkan kartu yang dimulai dari angka nol.

---

### 3. Kolaborasi Menu Spesial & Pertukaran Audiens (*Cross-Pollination Marketing*):
* Bekerja samalah dengan tokoh komunitas lokal, barista pemenang kejuaraan nasional (seperti Bima Sena / Fahrul M.W), atau jenama kuliner lokal independen (bakery roti sourdough, pembuat sirup artisan, ilustrator lokal).
* Luncurkan **Signature Drink Kolaborasi Musiman (Edisi Terbatas / Limited Time Offer)** selama kurun waktu 3–4 minggu.
* Taktik ini menciptakan efek kelangkaan (*FOMO - Fear of Missing Out*), mendorong publisitas organik di media sosial Instagram/TikTok, dan menarik basis pengikut (*followers*) rekan kolaborator untuk datang langsung ke kedai kopi Anda.
    `,
    content_type: 'text',
    duration_minutes: 18,
    order_index: 2,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Taktik growth hacking kedai kopi lokal: dominasi Google Maps SEO bintang 5, kartu loyalitas psikologis endowed progress effect, dan menu signature kolaboratif musiman.',
    key_takeaways: [
      'Optimasi Google Business Profile adalah sumber akuisisi pelanggan baru berbiaya paling murah dan paling efektif.',
      'Program loyalitas dengan 2 stempel awal gratis (endowed progress effect) melipatgandakan retensi kunjungan ulang pelanggan.',
      'Menu kolaborasi edisi terbatas (LTO) bersama juara barista menciptakan efek FOMO dan memicu publisitas viral organik.',
    ],
  },

  {
    id: 'les-biz1-3',
    module_id: 'mod-biz1',
    title: 'Kalkulasi Biaya Operasional (OPEX) & Break-Even Point Harian: Menghitung Target Minimum Cup',
    content: `# Kalkulasi Biaya Operasional (OPEX) & Break-Even Point Harian

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

*Artinya, cup ke-1 hingga cup ke-50 setiap hari hanya bekerja untuk membayar sewa ruko dan gaji karyawan. Keuntungan murni pemilik kedai baru mulai tercipta pada **cup ke-51 dan seterusnya**!*`,
    content_type: 'text',
    duration_minutes: 15,
    order_index: 3,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Materi mendalam Kalkulasi Biaya Operasional (OPEX) & Break-Even Point Harian: Menghitung Target Minimum Cup dengan kalkulasi finansial bisnis kedai kopi, SOP bar, dan strategi retensi.',
    key_takeaways: [
      'Kuasai struktur OPEX dan kalkulasi BEP harian untuk menjamin kelangsungan finansial kedai.',
      'Terapkan formula markup yang benar pada aplikasi delivery online untuk melindungi margin laba kotor.',
      'Bangun komunitas lokal yang solid melalui edukasi publik dan tingkatkan nilai belanja rata-rata.'
    ],
  },
  {
    id: 'les-biz2-3',
    module_id: 'mod-biz2',
    title: 'Kalkulasi Penyesuaian Harga Menu Delivery Online: Markup Komisi 20% Tanpa Mengikis Margin',
    content: `# Kalkulasi Penyesuaian Harga Menu Delivery Online

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
* *Pemeriksaan*: Rp 25.000 dipotong 20% komisi (Rp 5.000) = Uang bersih masuk ke kedai tepat **Rp 20.000 (100% aman!)**.`,
    content_type: 'text',
    duration_minutes: 14,
    order_index: 3,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Materi mendalam Kalkulasi Penyesuaian Harga Menu Delivery Online: Markup Komisi 20% Tanpa Mengikis Margin dengan kalkulasi finansial bisnis kedai kopi, SOP bar, dan strategi retensi.',
    key_takeaways: [
      'Kuasai struktur OPEX dan kalkulasi BEP harian untuk menjamin kelangsungan finansial kedai.',
      'Terapkan formula markup yang benar pada aplikasi delivery online untuk melindungi margin laba kotor.',
      'Bangun komunitas lokal yang solid melalui edukasi publik dan tingkatkan nilai belanja rata-rata.'
    ],
  },
  {
    id: 'les-biz3-3',
    module_id: 'mod-biz3',
    title: 'Infrastruktur Vital Bar: Kelistrikan Tegangan Stabil, Pemipaan Air Masuk, dan Drainase Pembuangan',
    content: `# Infrastruktur Vital Bar: Listrik Stabil, Pemipaan Air, dan Drainase Anti-Mampet

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
* Hindari lekukan pipa berbentuk U horisontal di lantai yang akan mengendapkan ampas kopi padat hingga mengeras seperti batu semen dalam waktu 3 bulan!`,
    content_type: 'text',
    duration_minutes: 15,
    order_index: 3,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Materi mendalam Infrastruktur Vital Bar: Kelistrikan Tegangan Stabil, Pemipaan Air Masuk, dan Drainase Pembuangan dengan kalkulasi finansial bisnis kedai kopi, SOP bar, dan strategi retensi.',
    key_takeaways: [
      'Kuasai struktur OPEX dan kalkulasi BEP harian untuk menjamin kelangsungan finansial kedai.',
      'Terapkan formula markup yang benar pada aplikasi delivery online untuk melindungi margin laba kotor.',
      'Bangun komunitas lokal yang solid melalui edukasi publik dan tingkatkan nilai belanja rata-rata.'
    ],
  },
  {
    id: 'les-biz4-3',
    module_id: 'mod-biz4',
    title: 'Perancangan Sistem Pengolahan Air (Reverse Osmosis / RO System & Remineralisasi)',
    content: `# Perancangan Sistem Pengolahan Air: Reverse Osmosis (RO) & Remineralisasi

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
3. **Remineralization Cartridge / Blending Valve**: Mencampurkan kembali mineral kalsium dan magnesium seimbang hingga air seduh mencapai standar SCA ideal: **TDS 100 – 130 ppm, pH 7.0, dan Kesadahan 60 – 80 ppm**.`,
    content_type: 'text',
    duration_minutes: 15,
    order_index: 3,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Materi mendalam Perancangan Sistem Pengolahan Air (Reverse Osmosis / RO System & Remineralisasi) dengan kalkulasi finansial bisnis kedai kopi, SOP bar, dan strategi retensi.',
    key_takeaways: [
      'Kuasai struktur OPEX dan kalkulasi BEP harian untuk menjamin kelangsungan finansial kedai.',
      'Terapkan formula markup yang benar pada aplikasi delivery online untuk melindungi margin laba kotor.',
      'Bangun komunitas lokal yang solid melalui edukasi publik dan tingkatkan nilai belanja rata-rata.'
    ],
  },
  {
    id: 'les-biz5-3',
    module_id: 'mod-biz5',
    title: 'Kultur Komunikasi & Pelatihan Internal: Mengadakan Kalibrasi Rutin Mingguan Tim Barista',
    content: `# Kultur Komunikasi & Pelatihan Internal: Kalibrasi Rasa Mingguan Tim Barista

Aset termahal di kedai kopi Anda bukanlah mesin espresso buatan Italia seharga ratusan juta rupiah, melainkan **manusia di balik bar**.

![Sesi Pelatihan dan Kalibrasi Internal Tim Barista Mingguan](https://images.unsplash.com/photo-1497636577773-f1231844b336?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Sesi Pelatihan Internal Bersama Head Barista dan Roastery Trainer — Sumber / Kredit: Unsplash / Barista Training Academy*

---

### 1. Agenda Sesi Kalibrasi Mingguan 90 Menit

Setiap hari Senin pagi atau saat kedai libur:
1. **Blind Tasting Espresso**: Seluruh barista menarik 1 shot espresso menggunakan gilingan masing-masing tanpa melihat timbangan rekan kerja. Cicipi bersama secara buta dan evaluasi deviasi rasanya.
2. **Review Waste Log Mingguan**: Diskusikan berapa gram bubuk kopi dan liter susu yang terbuang sia-sia selama minggu lalu. Identifikasi penyebabnya secara solutif tanpa mencari kambing hitam.
3. **Roleplay Pelayanan Pelanggan**: Latih skenario penanganan komplain tamu (misal: tamu mengeluhkan kopi dingin atau susu pecah) agar respons staf selalu seragam dan penuh empati.`,
    content_type: 'text',
    duration_minutes: 14,
    order_index: 3,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Materi mendalam Kultur Komunikasi & Pelatihan Internal: Mengadakan Kalibrasi Rutin Mingguan Tim Barista dengan kalkulasi finansial bisnis kedai kopi, SOP bar, dan strategi retensi.',
    key_takeaways: [
      'Kuasai struktur OPEX dan kalkulasi BEP harian untuk menjamin kelangsungan finansial kedai.',
      'Terapkan formula markup yang benar pada aplikasi delivery online untuk melindungi margin laba kotor.',
      'Bangun komunitas lokal yang solid melalui edukasi publik dan tingkatkan nilai belanja rata-rata.'
    ],
  },
  {
    id: 'les-biz6-3',
    module_id: 'mod-biz6',
    title: 'Strategi Retensi Komunitas Lokal: Program Loyalitas, Public Cupping, dan Menaikkan AOV',
    content: `# Strategi Retensi Komunitas Lokal: Mengubah Pengunjung Biasa Menjadi Penggemar Setia

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
* **Penjualan Biji Kopi Sangrai Rumah (Retail Beans 200g)**: Sediakan kemasan kopi untuk dibawa pulang beserta opsi digilingkan langsung di kasir sesuai alat seduh pelanggan di rumah.`,
    content_type: 'text',
    duration_minutes: 15,
    order_index: 3,
    is_free: false,
    is_published: true,
    created_at: '2026-08-10T00:00:00Z',
    summary: 'Materi mendalam Strategi Retensi Komunitas Lokal: Program Loyalitas, Public Cupping, dan Menaikkan AOV dengan kalkulasi finansial bisnis kedai kopi, SOP bar, dan strategi retensi.',
    key_takeaways: [
      'Kuasai struktur OPEX dan kalkulasi BEP harian untuk menjamin kelangsungan finansial kedai.',
      'Terapkan formula markup yang benar pada aplikasi delivery online untuk melindungi margin laba kotor.',
      'Bangun komunitas lokal yang solid melalui edukasi publik dan tingkatkan nilai belanja rata-rata.'
    ],
  },
];

export const COFFEE_BUSINESS_QUIZZES: Quiz[] = [
  {
    id: 'quiz-biz-final',
    module_id: 'mod-biz6',
    learning_path_id: 'path-coffee-business',
    quiz_scope: 'final_exam',
    title: 'Ujian Akhir Sertifikasi Coffee Business & Shop Management',
    description:
      'Ujian evaluasi komprehensif 15 soal mencakup manajemen CAPEX/OPEX, formula BEP, kalkulasi presisi HPP & komisi platform online, ergonomi bar, kurasi mesin & sistem RO, SOP dial-in & sanitasi, serta strategi growth hacking lokal.',
    passing_score: 80,
    time_limit_minutes: 30,
    max_attempts: 3,
    created_at: '2026-08-10T00:00:00Z',
  },
];

export const COFFEE_BUSINESS_QUESTIONS: Question[] = [
  {
    id: 'q-cb-1',
    quiz_id: 'quiz-biz-final',
    question_text: 'Berapakah batas aman persentase beban biaya sewa lokasi (rent) terhadap proyeksi omzet kotor bulanan agar keuangan kedai kopi tetap sehat?',
    question_type: 'multiple_choice',
    points: 7,
    order_index: 1,
    explanation: 'Standar finansial kedai kopi yang sehat menetapkan beban sewa maksimal di rentang 10% hingga 15% dari total omzet kotor bulanan.',
    answers: [
      { id: 'a-cb-1-1', answer_text: 'Maksimal 10% hingga 15% dari omzet kotor bulanan', is_correct: true },
      { id: 'a-cb-1-2', answer_text: 'Maksimal 40% hingga 50% dari omzet kotor bulanan', is_correct: false },
      { id: 'a-cb-1-3', answer_text: 'Bebas tanpa batas selama lokasi ramai', is_correct: false },
      { id: 'a-cb-1-4', answer_text: 'Tepat 1% dari omzet kotor bulanan', is_correct: false },
    ],
  },
  {
    id: 'q-cb-2',
    quiz_id: 'quiz-biz-final',
    question_text: 'Berapakah cadangan kas operasional darurat (cash runway) yang wajib disiapkan di rekening bank sebelum hari pertama pembukaan kedai kopi?',
    question_type: 'multiple_choice',
    points: 7,
    order_index: 2,
    explanation: 'Pemilik bisnis wajib menyiapkan cadangan kas setara minimal 4 hingga 6 bulan total OPEX tetap untuk mengantisipasi masa perintisan kedai.',
    answers: [
      { id: 'a-cb-2-1', answer_text: 'Minimal 4 hingga 6 bulan total biaya operasional (OPEX) tetap', is_correct: true },
      { id: 'a-cb-2-2', answer_text: 'Cukup untuk 3 hari operasional saja', is_correct: false },
      { id: 'a-cb-2-3', answer_text: 'Tidak perlu cadangan kas karena omzet langsung cair harian', is_correct: false },
      { id: 'a-cb-2-4', answer_text: 'Minimal setara 5 tahun biaya operasional', is_correct: false },
    ],
  },
  {
    id: 'q-cb-3',
    quiz_id: 'quiz-biz-final',
    question_text: 'Jika sebuah kedai kopi memiliki biaya tetap Rp 20.000.000/bulan, harga jual rata-rata Rp 25.000/cup, dan HPP Rp 9.000/cup, berapakah BEP unit bulanan kedai tersebut?',
    question_type: 'multiple_choice',
    points: 7,
    order_index: 3,
    explanation: 'Margin kontribusi = 25.000 - 9.000 = Rp 16.000. BEP bulanan = 20.000.000 / 16.000 = 1.250 cup/bulan.',
    answers: [
      { id: 'a-cb-3-1', answer_text: '1.250 cup per bulan (sekitar 42 cup per hari)', is_correct: true },
      { id: 'a-cb-3-2', answer_text: '500 cup per bulan (sekitar 17 cup per hari)', is_correct: false },
      { id: 'a-cb-3-3', answer_text: '3.000 cup per bulan (sekitar 100 cup per hari)', is_correct: false },
      { id: 'a-cb-3-4', answer_text: '800 cup per bulan (sekitar 27 cup per hari)', is_correct: false },
    ],
  },
  {
    id: 'q-cb-4',
    quiz_id: 'quiz-biz-final',
    question_text: 'Berapakah rentang persentase HPP (Cost of Goods Sold) ideal terhadap harga jual menu minuman kopi pada industri kedai kopi spesialti?',
    question_type: 'multiple_choice',
    points: 7,
    order_index: 4,
    explanation: 'Rentang HPP yang sehat adalah 28% hingga 35% dari harga jual produk, menghasilkan laba kotor 65% hingga 72%.',
    answers: [
      { id: 'a-cb-4-1', answer_text: '28% hingga 35% dari harga jual', is_correct: true },
      { id: 'a-cb-4-2', answer_text: '60% hingga 75% dari harga jual', is_correct: false },
      { id: 'a-cb-4-3', answer_text: '5% hingga 10% dari harga jual', is_correct: false },
      { id: 'a-cb-4-4', answer_text: 'Tepat 50% dari harga jual', is_correct: false },
    ],
  },
  {
    id: 'q-cb-5',
    quiz_id: 'quiz-biz-final',
    question_text: 'Jika komisi aplikasi pesan antar online adalah 20% dan Anda ingin menerima bersih Rp 20.000 per cup, berapakah harga menu yang harus Anda pasang di aplikasi?',
    question_type: 'multiple_choice',
    points: 7,
    order_index: 5,
    explanation: 'Harga menu online = 20.000 / (1 - 0.20) = 20.000 / 0.80 = Rp 25.000.',
    answers: [
      { id: 'a-cb-5-1', answer_text: 'Rp 25.000', is_correct: true },
      { id: 'a-cb-5-2', answer_text: 'Rp 22.000', is_correct: false },
      { id: 'a-cb-5-3', answer_text: 'Rp 24.000', is_correct: false },
      { id: 'a-cb-5-4', answer_text: 'Rp 30.000', is_correct: false },
    ],
  },
  {
    id: 'q-cb-6',
    quiz_id: 'quiz-biz-final',
    question_text: 'Dalam prinsip ergonomi kokpit bar (The Golden Triangle), tiga titik kerja krusial manakah yang harus berada dalam radius putaran tubuh barista?',
    question_type: 'multiple_choice',
    points: 7,
    order_index: 6,
    explanation: 'Segitiga emas stasiun barista espresso terdiri dari Grinder (Dosing/Tamping), Mesin Espresso (Extraction), dan Knockbox/Wastafel susu (Disposal/Texturing).',
    answers: [
      { id: 'a-cb-6-1', answer_text: 'Grinder Espresso, Mesin Espresso, dan Knockbox / Stasiun Susu', is_correct: true },
      { id: 'a-cb-6-2', answer_text: 'Pintu masuk, Meja kasir, dan Toilet', is_correct: false },
      { id: 'a-cb-6-3', answer_text: 'Gudang belakang, Kulkas es, dan Meja barista', is_correct: false },
      { id: 'a-cb-6-4', answer_text: 'Mesin kopi, Meja makan pelanggan, dan Area parkir', is_correct: false },
    ],
  },
  {
    id: 'q-cb-7',
    quiz_id: 'quiz-biz-final',
    question_text: 'Berapakah tinggi standar meja bar barista (working counter) yang paling ergonomis untuk mencegah nyeri pinggang saat tamping?',
    question_type: 'multiple_choice',
    points: 7,
    order_index: 7,
    explanation: 'Tinggi meja kerja barista ideal adalah 88 cm hingga 92 cm dari lantai, sejajar dengan posisi rileks siku tangan.',
    answers: [
      { id: 'a-cb-7-1', answer_text: '88 cm hingga 92 cm dari lantai', is_correct: true },
      { id: 'a-cb-7-2', answer_text: '60 cm hingga 70 cm dari lantai', is_correct: false },
      { id: 'a-cb-7-3', answer_text: '120 cm hingga 130 cm dari lantai', is_correct: false },
      { id: 'a-cb-7-4', answer_text: 'Bebas berapapun tingginya', is_correct: false },
    ],
  },
  {
    id: 'q-cb-8',
    quiz_id: 'quiz-biz-final',
    question_text: 'Mengapa mesin espresso komersial tipe Multi-Boiler Saturated Group menjadi standar emas untuk kedai kopi bervolume tinggi (>300 cup/hari)?',
    question_type: 'multiple_choice',
    points: 7,
    order_index: 8,
    explanation: 'Group head yang terendam sirkulasi air panas dengan boiler independen menjamin suhu ekstraksi tidak anjlok bahkan saat mengekstraksi puluhan cup berturut-turut.',
    answers: [
      { id: 'a-cb-8-1', answer_text: 'Menjamin kestabilan suhu seduh absolut tanpa drop termal bahkan saat ekstraksi puluhan cup berurutan di jam sibuk', is_correct: true },
      { id: 'a-cb-8-2', answer_text: 'Karena mengonsumsi listrik paling hemat di bawah 500 Watt', is_correct: false },
      { id: 'a-cb-8-3', answer_text: 'Karena tidak membutuhkan air bersih untuk menyeduh', is_correct: false },
      { id: 'a-cb-8-4', answer_text: 'Karena otomatis menggiling kopi tanpa bantuan grinder', is_correct: false },
    ],
  },
  {
    id: 'q-cb-9',
    quiz_id: 'quiz-biz-final',
    question_text: 'Apakah fungsi utama katup bypass remineralisasi pada instalasi Reverse Osmosis (RO) komersial di kedai kopi?',
    question_type: 'multiple_choice',
    points: 7,
    order_index: 9,
    explanation: 'Katup bypass mencampurkan kembali mineral terkontrol untuk mencapai target TDS ideal 100-130 ppm demi ekstraksi rasa optimal dan fungsi sensor boiler.',
    answers: [
      { id: 'a-cb-9-1', answer_text: 'Mengatur kembali kadar mineral air ke target 100-130 ppm TDS untuk ekstraksi rasa optimal dan pengenalan sensor boiler', is_correct: true },
      { id: 'a-cb-9-2', answer_text: 'Membuat air seduh menjadi berbusa seperti sabun', is_correct: false },
      { id: 'a-cb-9-3', answer_text: 'Membuang 100% air keluar ke saluran pembuangan', is_correct: false },
      { id: 'a-cb-9-4', answer_text: 'Menurunkan suhu air mendidih menjadi beku', is_correct: false },
    ],
  },
  {
    id: 'q-cb-10',
    quiz_id: 'quiz-biz-final',
    question_text: 'Dalam SOP kalibrasi pagi (morning dial-in), berapakah parameter standar ekstraksi double shot espresso rasio 1:2?',
    question_type: 'multiple_choice',
    points: 7,
    order_index: 10,
    explanation: 'Parameter standar: Dosis bubuk kering 18 gram menghasilkan 36 gram cairan espresso dalam waktu 26 hingga 30 detik.',
    answers: [
      { id: 'a-cb-10-1', answer_text: 'Dosis 18 gram bubuk menghasilkan 36 gram cairan espresso dalam waktu 26-30 detik', is_correct: true },
      { id: 'a-cb-10-2', answer_text: 'Dosis 30 gram bubuk menghasilkan 15 gram cairan dalam waktu 10 detik', is_correct: false },
      { id: 'a-cb-10-3', answer_text: 'Dosis 10 gram bubuk menghasilkan 100 gram cairan dalam waktu 60 detik', is_correct: false },
      { id: 'a-cb-10-4', answer_text: 'Dosis 18 gram bubuk menghasilkan 360 gram cairan dalam waktu 3 menit', is_correct: false },
    ],
  },
  {
    id: 'q-cb-11',
    quiz_id: 'quiz-biz-final',
    question_text: 'Mengapa prosedur backflush dengan blind basket dan detergen pembersih khusus (seperti Cafiza) wajib dilakukan setiap malam di akhir shift?',
    question_type: 'multiple_choice',
    points: 6,
    order_index: 11,
    explanation: 'Minyak kopi yang menempel di shower screen dan katup 3-way solenoid akan teroksidasi menjadi tengik dan merusak cita rasa espresso jika tidak dilarutkan detergen.',
    answers: [
      { id: 'a-cb-11-1', answer_text: 'Merontokkan sisa minyak kopi yang teroksidasi agar tidak menjadi kerak tengik yang merusak rasa seduhan esok hari', is_correct: true },
      { id: 'a-cb-11-2', answer_text: 'Agar tekanan pompa mesin naik menjadi 20 bar', is_correct: false },
      { id: 'a-cb-11-3', answer_text: 'Untuk mendinginkan boiler mesin yang kepanasan', is_correct: false },
      { id: 'a-cb-11-4', answer_text: 'Karena diwajibkan oleh dinas perpajakan', is_correct: false },
    ],
  },
  {
    id: 'q-cb-12',
    quiz_id: 'quiz-biz-final',
    question_text: 'Aturan keramahan "The 5-Second Greeting Rule" mewajibkan barista melakukan apa ketika pelanggan melangkah masuk melewati pintu kedai?',
    question_type: 'multiple_choice',
    points: 6,
    order_index: 12,
    explanation: 'Setiap pelanggan yang masuk wajib disapa dengan senyuman hangat dalam kurun waktu maksimal 5 detik untuk menciptakan rasa diterima dan dihargai.',
    answers: [
      { id: 'a-cb-12-1', answer_text: 'Menyapa pelanggan dengan senyuman ramah dalam waktu maksimal 5 detik', is_correct: true },
      { id: 'a-cb-12-2', answer_text: 'Langsung menagih pembayaran tunai', is_correct: false },
      { id: 'a-cb-12-3', answer_text: 'Menyuruh pelanggan menunggu di luar selama 5 detik', is_correct: false },
      { id: 'a-cb-12-4', answer_text: 'Mematikan musik di dalam kedai', is_correct: false },
    ],
  },
  {
    id: 'q-cb-13',
    quiz_id: 'quiz-biz-final',
    question_text: 'Bagaimanakah penerapan prinsip rotasi stok FIFO (First-In, First-Out) yang benar pada penyimpanan susu di chiller bar kedai?',
    question_type: 'multiple_choice',
    points: 6,
    order_index: 13,
    explanation: 'Karton susu yang baru datang diletakkan di barisan belakang; susu yang lebih lama digeser ke depan agar diambil lebih dulu sebelum kadaluarsa.',
    answers: [
      { id: 'a-cb-13-1', answer_text: 'Karton susu yang datang lebih awal diletakkan di barisan depan untuk digunakan terlebih dahulu', is_correct: true },
      { id: 'a-cb-13-2', answer_text: 'Susu yang baru datang langsung dibuka dan susu lama disimpan di gudang', is_correct: false },
      { id: 'a-cb-13-3', answer_text: 'Seluruh susu dicampur dalam satu ember besar', is_correct: false },
      { id: 'a-cb-13-4', answer_text: 'Menunggu susu basi baru digunakan untuk membuat minuman', is_correct: false },
    ],
  },
  {
    id: 'q-cb-14',
    quiz_id: 'quiz-biz-final',
    question_text: 'Apakah trik psikologi konsumen "Endowed Progress Effect" yang terbukti melipatgandakan retensi program loyalitas kartu stempel?',
    question_type: 'multiple_choice',
    points: 6,
    order_index: 14,
    explanation: 'Memberikan kartu dengan 10 lingkaran yang sudah terstempel 2 lingkaran gratis di awal membuat pelanggan merasa sudah separuh jalan sehingga termotivasi menyelesaikan sisanya.',
    answers: [
      { id: 'a-cb-14-1', answer_text: 'Memberikan stempel bonus gratis di awal saat pendaftaran sehingga pelanggan merasa telah memulai progres pencapaian hadiah', is_correct: true },
      { id: 'a-cb-14-2', answer_text: 'Mewajibkan pelanggan mengumpulkan 1.000 stempel tanpa batas waktu', is_correct: false },
      { id: 'a-cb-14-3', answer_text: 'Menyembunyikan kartu stempel agar tidak diminta pelanggan', is_correct: false },
      { id: 'a-cb-14-4', answer_text: 'Mengenakan biaya langganan bulanan untuk memiliki kartu stempel', is_correct: false },
    ],
  },
  {
    id: 'q-cb-15',
    quiz_id: 'quiz-biz-final',
    question_text: 'Mengapa peluncuran menu kolaborasi musiman (Limited Time Offer) bersama tokoh barista nasional sangat efektif sebagai taktik growth hacking?',
    question_type: 'multiple_choice',
    points: 6,
    order_index: 15,
    explanation: 'Menu kolaborasi menciptakan rasa urgensi (FOMO), memperluas eksposur audiens silang dari pengikut sang kolaborator, dan memicu publisitas organik.',
    answers: [
      { id: 'a-cb-15-1', answer_text: 'Menciptakan urgensi FOMO, publisitas viral media sosial, dan menarik basis audiens baru dari sang kolaborator ke kedai', is_correct: true },
      { id: 'a-cb-15-2', answer_text: 'Karena harga bahan bakunya selalu gratis dari sponsor', is_correct: false },
      { id: 'a-cb-15-3', answer_text: 'Agar barista tidak perlu bekerja menyeduh kopi biasa', is_correct: false },
      { id: 'a-cb-15-4', answer_text: 'Karena dilarang menjual menu kopi standar', is_correct: false },
    ],
  },
];
