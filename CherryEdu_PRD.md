# CherryEdu — Product Requirements Document (PRD)

**Versi:** 1.0  
**Tanggal:** September 2026  
**Status:** Draft  
**Dibuat oleh:** Cherry Coffee Roastery

---

## 1. Overview

### 1.1 Latar Belakang

Industri kopi Indonesia adalah salah satu yang terbesar di dunia — dari petani Gayo hingga barista di Jakarta, dari home brewer di Bandung hingga Q Grader bersertifikat internasional. Namun, ekosistem edukasi kopi di Indonesia masih sangat terfragmentasi:

- Kursus resmi seperti SCA (Specialty Coffee Association) mahal dan tidak aksesibel
- Konten di internet tersebar, tidak terstruktur, dan sering tidak relevan dengan konteks lokal
- Tidak ada platform yang memandu perjalanan belajar dari **hulu (farm) ke hilir (cangkir)** secara komprehensif

CherryEdu hadir untuk mengisi gap ini.

### 1.2 Visi

> *Menjadi platform edukasi kopi terlengkap di Indonesia — yang memberdayakan siapa pun, dari orang awam hingga profesional, untuk memahami dan mencintai kopi lebih dalam.*

### 1.3 Misi

Menyediakan kurikulum kopi yang terstruktur, aksesibel, berbasis konteks lokal Indonesia, dengan biaya yang jauh lebih terjangkau dibanding kursus konvensional.

---

## 2. Problem Statement

| Siapa | Problem |
|---|---|
| Calon barista | Tidak tahu cara belajar kopi secara terstruktur sebelum melamar kerja |
| Barista aktif | Stuck di skill tertentu, tidak tahu jalur upgrade ke Q Grader atau Roaster |
| Home brewer | Banyak tahu tapi tidak sistematis, sulit explore lebih dalam |
| Roaster | Tidak punya akses ke edukasi processing atau agronomi secara terstruktur |
| Coffee shop owner | Sulit menemukan calon karyawan dengan pengetahuan kopi yang memadai |

---

## 3. Target Pengguna

### Primer (MVP)
- **Calon Barista** — Orang yang ingin terjun ke industri kopi sebagai barista, belum punya pengalaman formal
- **Home Brewer** — Coffee enthusiast yang sudah familiar dengan dasar kopi, ingin explore lebih dalam

### Sekunder (Post-MVP)
- Barista aktif yang ingin naik level
- Roaster yang ingin memahami sisi agronomi dan processing
- Q Grader aspirant
- Coffee shop owner yang ingin merekrut

### Personas

#### 🧑‍🍳 Budi — Calon Barista (22 tahun, Surabaya)
- Fresh graduate, ingin kerja di coffee shop
- Tidak punya pengalaman barista, hanya sering beli kopi
- **Kebutuhan:** Panduan step-by-step dari nol sampai siap kerja
- **Pain point:** Tidak tahu harus mulai dari mana, kursus mahal

#### ☕ Sari — Home Brewer (28 tahun, Bandung)
- Sudah punya V60, Aeropress, dan grinder
- Sering ikut komunitas kopi di Instagram
- **Kebutuhan:** Pemahaman lebih dalam soal varietas, processing, dan teknik brewing
- **Pain point:** Konten di internet tidak terstruktur dan sering bertentangan

---

## 4. Filosofi Kurikulum

> [!IMPORTANT]
> **Prinsip utama CherryEdu:** Semua role wajib memahami kopi dari **hulu (farm) ke hilir (cup)**. Perbedaannya hanya pada kedalaman spesialisasi — bukan pada apa yang boleh atau tidak boleh dipelajari.
>
> Seorang barista wajib tahu varietas, processing, agronomi. Seorang farmer wajib tahu cara brewing dan cupping. Ini yang membedakan CherryEdu dari platform lain.

Kurikulum terdiri dari **dua lapis**:
1. **Foundation Layer** — wajib ditempuh semua role, membangun pemahaman menyeluruh dari farm ke cup
2. **Specialization Layer** — deep dive ke peran masing-masing setelah fondasi kuat

```
SEMUA ROLE
    │
    ▼
┌─────────────────────────────┐
│     FOUNDATION LAYER         │  ← wajib semua role
│  (Farm to Cup Understanding) │
└─────────────────────────────┘
    │
    ▼
┌──────┬───────────┬─────────┬────────────┬──────────┬────────┐
│Barista│Home Brewer│ Roaster │ Processor  │ Q Grader │ Farmer │
│ Path  │   Path    │  Path   │   Path     │   Path   │  Path  │
└──────┴───────────┴─────────┴────────────┴──────────┴────────┘
         SPECIALIZATION LAYER (per role)
```

---

## 5. Learning Path Structure

### 5.1 Foundation Layer — Wajib Semua Role

> Ini adalah "bahasa bersama" seluruh pelaku industri kopi. Tidak ada yang boleh skip bagian ini, apapun rolenya.

```
FOUNDATION: Kopi dari Hulu ke Hilir

├── Modul F-1: Ekosistem Industri Kopi
│   ├── Sejarah kopi: dari Ethiopia ke Indonesia
│   ├── Peta industri: siapa saja yang terlibat & peran masing-masing
│   ├── Specialty vs commercial coffee
│   └── Mengapa memahami seluruh rantai itu penting

├── Modul F-2: Agronomi & Pertanian Kopi
│   ├── Anatomi tanaman kopi (akar, batang, daun, bunga, buah)
│   ├── Siklus hidup tanaman kopi
│   ├── Kondisi tumbuh ideal: altitude, suhu, curah hujan, tanah
│   ├── Kopi Indonesia: Gayo, Toraja, Flores, Java, Bajawa, dll
│   ├── Panen: selective picking vs strip picking
│   └── Dari cherry merah ke green bean

├── Modul F-3: Varietas & Genetika Kopi
│   ├── Spesies: Arabika, Robusta, Liberika — perbedaan karakter & rasa
│   ├── Varietas Arabika populer: Typica, Bourbon, Caturra, Gesha/Geisha
│   ├── Varietas lokal Indonesia: Ateng Super, Tim-Tim, Andungsari, Sigarar Utang
│   ├── Bagaimana varietas mempengaruhi rasa akhir di cangkir
│   ├── Kadar air (moisture content) green bean yang ideal
│   └── Membaca label kopi: origin, varietas, processing, altitude

├── Modul F-4: Processing Methods
│   ├── Natural / Dry Process
│   ├── Washed / Wet Process
│   ├── Honey Process (Yellow, Red, Black Honey)
│   ├── Anaerobic & Wet Anaerobic
│   ├── Co-fermentation (kopi + buah)
│   ├── Bagaimana processing mempengaruhi profil rasa
│   └── Membaca kode processing di label kopi

├── Modul F-5: Roasting Science
│   ├── Apa yang terjadi di dalam biji saat roasting (Maillard, first crack, second crack)
│   ├── Light, Medium, Dark roast — karakter & perbedaan
│   ├── Bagaimana roast level mempengaruhi rasa & keasaman
│   ├── Membaca roasting date & degassing
│   └── Kenapa roast profile itu penting bagi semua role

├── Modul F-6: Water Science
│   ├── Air sebagai 98% dari kopi yang kamu minum
│   ├── TDS (Total Dissolved Solids) & pengaruhnya
│   ├── pH air ideal untuk ekstraksi kopi
│   ├── Mineral: magnesium, kalsium, bikarbonat
│   └── Air keran, air mineral, air RO — mana yang terbaik?

└── Modul F-7: Sensory & Cupping
    ├── Ilmu di balik rasa: aroma, rasa, aftertaste, acidity, body, balance
    ├── SCA Flavor Wheel — cara membacanya
    ├── Cupping protocol standar
    ├── Melatih indra: latihan blind tasting
    └── Menulis tasting notes yang deskriptif
```

---

### 5.2 Specialization Layer

#### 🧑‍🍳 Barista Path

```
[BEGINNER — Fondasi Bar]
├── Modul B-1: Pengenalan Dunia Bar
│   ├── Peran barista dalam rantai industri kopi
│   ├── Etika & profesionalisme barista
│   └── Mengenal peralatan di bar (espresso machine, grinder, dll)
├── Modul B-2: Espresso Fundamentals
│   ├── Komponen espresso machine
│   ├── Grind size & hubungannya dengan ekstraksi
│   ├── Tamping yang benar & konsisten
│   └── Membaca espresso shot: warna, texture, timing
└── Modul B-3: Manual Brew Dasar
    ├── French Press, Moka Pot, Pour Over — teknik dasar
    └── Brew ratio & recipe standar

[INTERMEDIATE — Mastery]
├── Modul B-4: Espresso Mastery & Dial In
│   ├── Variabel espresso: dose, yield, time (the triangle)
│   ├── Troubleshooting: under vs over extraction
│   ├── Dial in dari berbagai origin & processing
│   └── Pengaruh varietas & roast level terhadap dial in
├── Modul B-5: Milk & Latte Art
│   ├── Komposisi susu & pengaruhnya ke rasa
│   ├── Steaming technique & micro-foam
│   ├── Latte art: heart, rosetta, tulip
│   └── Alternatif non-dairy: oat, almond, soy
├── Modul B-6: Manual Brew Lanjutan
│   ├── V60: teknik pouring, bloom, agitasi
│   ├── Aeropress: eksplorasi resep
│   ├── Cold brew & Japanese iced coffee
│   └── Syphon & Chemex
└── Modul B-7: Menu & Kreasi
    ├── Signature drink creation
    ├── Seasonal & non-coffee menu
    └── Food pairing dengan kopi

[ADVANCED — Expert Barista]
├── Modul B-8: Sensory Lanjutan untuk Barista
│   ├── Cupping untuk barista: evaluasi green bean & roasted bean
│   ├── Komparasi blind tasting antar processing
│   └── Memberikan feedback ke roaster (bahasa yang sama)
├── Modul B-9: Bar Management
│   ├── Inventory & cost control
│   ├── SOP bar yang efisien
│   └── Training junior barista
└── Modul B-10: Karier & Sertifikasi
    ├── Membuat portfolio barista
    ├── Kompetisi barista (latte art, brewers cup, dll)
    └── Jalur menuju Q Grader / Roaster
```

#### ☕ Home Brewer Path

```
[BEGINNER — First Brew]
├── Modul H-1: Mulai dari Mana?
│   ├── Memilih kopi pertama: single origin vs blend
│   ├── Membaca kemasan kopi specialty
│   └── Peralatan wajib untuk mulai
├── Modul H-2: Peralatan & Setup
│   ├── Grinder: burr vs blade, kenapa burr lebih baik
│   ├── Timbangan & timer — pentingnya konsistensi
│   └── French Press & Pour Over untuk pemula
└── Modul H-3: Brew Pertamamu
    ├── Recipe dasar: rasio, suhu, waktu
    ├── Cara evaluasi hasil brew sendiri
    └── Troubleshooting rasa: terlalu pahit, asam, atau hambar

[INTERMEDIATE — Going Deeper]
├── Modul H-4: Memahami Biji yang Kamu Brew
│   ├── Membaca karakter varietas dari rasa (Gesha vs Ateng Super)
│   ├── Bagaimana processing mengubah cup profile
│   ├── Pengaruh altitude & origin terhadap rasa
│   └── Memilih beans berdasarkan preferensi rasa
├── Modul H-5: Teknik Brewing Lanjutan
│   ├── V60: teknik pouring, bloom, agitasi
│   ├── Aeropress: eksplorasi dari teknik konvensional ke inverted
│   ├── Chemex & Kalita Wave
│   └── Cold brew: concentrate, ratio, steeping time
├── Modul H-6: Water Deep Dive
│   ├── Membuat air brewing ideal di rumah
│   ├── Third Wave Water & mineral drops
│   └── Eksperimen air vs hasil brew
└── Modul H-7: Sensory untuk Home Brewer
    ├── Melatih indra rasa secara mandiri
    ├── Cupping di rumah dengan peralatan minimal
    └── Menulis jurnal brew & tasting notes

[ADVANCED — Experimentalist]
├── Modul H-8: Eksperimentasi Tanpa Batas
│   ├── Co-fermentation: kopi + buah (proses & ekspektasi rasa)
│   ├── Mencoba berbagai variabel & mendokumentasikan hasilnya
│   └── Iterasi resep berbasis data
├── Modul H-9: Kreasi Menu
│   ├── Membuat signature drink di rumah
│   ├── Kopi + makanan: pairing guide
│   └── Non-coffee menu berbasis teknik kopi
└── Modul H-10: Next Level
    ├── Komunitas & kompetisi home brewer
    ├── Membangun home coffee bar yang serius
    └── Jalur menuju barista profesional atau roaster
```

#### 🔥 Roaster Path *(Post-MVP)*

```
Foundation Layer → lalu:
├── Green bean sourcing & evaluasi
├── Roasting profiles & curves
├── Drum vs air roaster
├── Development time ratio (DTR)
├── Blending untuk konsistensi
├── Cupping untuk quality control
└── Manajemen roastery
```

#### 🫧 Processor Path *(Post-MVP)*

```
Foundation Layer → lalu:
├── Fermentasi: ilmu & kontrol
├── Wet milling & dry milling
├── Grading & sortasi
├── Moisture content & water activity
├── Penyimpanan green bean
└── Traceability & sertifikasi origin
```

#### 🎓 Q Grader Path *(Post-MVP)*

```
Foundation Layer → lalu:
├── SCA cupping protokol mendalam
├── Sensory training intensif
├── Scoring: aroma, flavor, aftertaste, acidity, body, balance, uniformity, clean cup, sweetness, overall
├── Green coffee & roasted coffee grading
└── Persiapan ujian Q Grader (Arabika & Robusta)
```

#### 🌱 Farmer Path *(Post-MVP)*

```
Foundation Layer → lalu:
├── Soil science & nutrisi tanaman kopi
├── Pest & disease management (CBB, leaf rust, dll)
├── Timing panen yang optimal
├── Post-harvest handling di tingkat farm
├── Hubungan farm ke prosessor ke buyer
└── Sertifikasi: Rainforest Alliance, UTZ, Organic
```

---

## 5. Feature Requirements

### 5.1 MVP Features (Fase 1)

#### 🎓 Learning System
| ID | Feature | Prioritas | Deskripsi |
|---|---|---|---|
| F-01 | Learning Path | P0 | Dua jalur: Barista & Home Brewer |
| F-02 | Module & Lesson | P0 | Konten dalam bentuk teks + infografik + video singkat |
| F-03 | Progress Tracking | P0 | Pengguna bisa lihat berapa % sudah diselesaikan |
| F-04 | Quiz per Modul | P0 | Multiple choice & true/false di akhir setiap modul |
| F-05 | Sertifikat Internal | P0 | Certificate of Completion otomatis setelah jalur selesai |
| F-06 | Gamification | P1 | Badge, XP points, streak harian |
| F-07 | Bookmarking | P1 | Simpan lesson untuk dibaca ulang |

#### 👤 User Management
| ID | Feature | Prioritas | Deskripsi |
|---|---|---|---|
| F-08 | Registrasi & Login | P0 | Email/password + Google OAuth |
| F-09 | User Profile | P0 | Foto, bio, role kopi, progress ringkasan |
| F-10 | Onboarding Quiz | P1 | Quiz awal untuk rekomendasikan learning path |

#### 🤝 Community
| ID | Feature | Prioritas | Deskripsi |
|---|---|---|---|
| F-11 | Forum Diskusi | P1 | Post, reply, like per topik |
| F-12 | Expert Highlight | P2 | Tandai jawaban dari verified expert |

#### 📱 Social & Sharing
| ID | Feature | Prioritas | Deskripsi |
|---|---|---|---|
| F-13 | Share Progress | P1 | Generate gambar share-able untuk IG/TikTok |
| F-14 | Share Sertifikat | P1 | Sertifikat bisa di-share & punya unique URL |
| F-15 | Leaderboard | P2 | Ranking XP per bulan |

#### 💼 Job Board
| ID | Feature | Prioritas | Deskripsi |
|---|---|---|---|
| F-16 | Listing Lowongan | P1 | Coffee shop posting lowongan barista |
| F-17 | Apply Lamaran | P1 | Pengguna apply langsung dari platform |
| F-18 | Filter & Search | P1 | Filter by kota, role, pengalaman |
| F-19 | Profil Pelamar | P2 | Tampilkan sertifikat CherryEdu di profil lamaran |

### 5.2 Post-MVP Features (Fase 2+)

- Live session / webinar dengan expert kopi
- Integrasi sertifikasi SCA/SCAI
- Mobile app (iOS & Android)
- Jalur learning path tambahan: Roaster, Prosessor, Q Grader, Farmer
- Marketplace: beli sample bean untuk cupping di rumah
- AI coffee assistant (tanya jawab seputar kopi)
- Multi-bahasa (English untuk ekspansi regional)

---

## 6. Business Model

### 6.1 Fase Awal — Freemium
| Tier | Harga | Akses |
|---|---|---|
| **Free** | Gratis | Modul Beginner semua jalur, komunitas, job board (view only) |
| **Premium** | ~Rp 49.000–99.000/bulan | Semua modul, sertifikat resmi, apply lowongan, share progress |

### 6.2 Revenue Streams Potensial
- **Sponsorship brand kopi** (roastery, equipment brand, importir)
- **Job board (employer)** — coffee shop bayar untuk post lowongan
- **B2B** — coffee shop beli akses untuk semua karyawan mereka (paket bisnis)
- **Merchandise & sample bean** (jangka panjang)

### 6.3 Differentiator vs Alternatif

| | CherryEdu | YouTube/Google | Kursus SCA |
|---|---|---|---|
| **Terstruktur** | ✅ | ❌ | ✅ |
| **Konteks Lokal ID** | ✅ | ❌ | ❌ |
| **Aksesibel (HP)** | ✅ | ✅ | ❌ |
| **Murah** | ✅ | ✅ | ❌ |
| **Sertifikat** | ✅ | ❌ | ✅ |
| **Komunitas** | ✅ | ❌ | ❌ |
| **Job Board** | ✅ | ❌ | ❌ |

---

## 7. Tech Stack (Rekomendasi)

| Layer | Teknologi | Alasan |
|---|---|---|
| **Frontend** | Next.js (React) | SEO-friendly, cepat, cocok untuk vibe coding |
| **Styling** | Tailwind CSS | Rapid UI development |
| **Backend** | Supabase | Database + Auth + Storage dalam satu platform, free tier tersedia |
| **Database** | PostgreSQL (via Supabase) | Relational, cocok untuk struktur learning platform |
| **Storage** | Supabase Storage | Simpan gambar, PDF, video |
| **Hosting** | Vercel | Deploy dalam menit, gratis untuk MVP |
| **Auth** | Supabase Auth | Email + Google OAuth sudah built-in |

> [!TIP]
> Stack ini sangat cocok untuk vibe coding — semua well-documented, punya AI support yang kuat, dan bisa deploy online dalam hitungan jam.

---

## 8. Non-Functional Requirements

| Aspek | Target |
|---|---|
| **Performance** | Halaman load < 3 detik di mobile 4G |
| **Responsif** | Optimal di mobile (320px) hingga desktop (1440px) |
| **Bahasa** | Bahasa Indonesia sebagai bahasa utama |
| **Aksesibilitas** | Teks bisa dibaca di kondisi outdoor (kontras tinggi) |
| **Uptime** | > 99% untuk MVP |

---

## 9. Success Metrics

### Fase 1 (0–3 bulan setelah launch)
- [ ] 500+ pengguna terdaftar
- [ ] 100+ modul diselesaikan
- [ ] 50+ sertifikat diterbitkan
- [ ] 10+ lowongan kerja ter-posting
- [ ] NPS > 7/10

### Fase 2 (3–6 bulan)
- [ ] 2.000+ pengguna aktif bulanan (MAU)
- [ ] 1 brand sponsorship pertama
- [ ] Jalur learning path ke-3 (Roaster atau Q Grader)
- [ ] Mobile app (PWA)

---

## 10. Risks & Mitigations

| Risk | Probabilitas | Dampak | Mitigasi |
|---|---|---|---|
| Akurasi konten kopi | Sedang | Tinggi | Validasi dengan coffee shop owner + barista/roaster teman |
| Low user acquisition | Sedang | Tinggi | Manfaatkan audiens Cherry Coffee Roastery sebagai early adopters |
| Monetisasi lambat | Tinggi | Sedang | Mulai gratis, bangun user base dulu, monetisasi di fase 2 |
| Konten tidak terupdate | Rendah | Sedang | Buat content calendar & libatkan komunitas untuk feedback |

---

## 11. Open Questions

> [!IMPORTANT]
> Pertanyaan berikut perlu dijawab sebelum atau selama development Fase 1:

1. **Nama domain** — `cherryedu.id` atau `cherryedu.co` atau lainnya?
2. **Content reviewer** — Kapan bisa jadwalkan review konten dengan teman coffee shop owner & barista/roaster?
3. **Brand guideline** — Apakah ada panduan visual dari Cherry Coffee Roastery yang bisa diadopsi?
4. **Model bisnis final** — Free dulu atau langsung freemium dari hari pertama?

---

*Dokumen ini adalah living document — akan diperbarui seiring perkembangan produk.*
