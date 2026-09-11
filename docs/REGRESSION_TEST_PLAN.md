# Dokumen Rencana & Matriks Uji Regresi (Regression Test Plan)
## Platform CherryEdu — Indonesian Specialty Coffee Academy
**Target URL:** [https://cherryedu.vercel.app](https://cherryedu.vercel.app)  
**Versi:** 2.0  
**Tanggal Rilis Dokumen:** 11 September 2026  
**Status Platform:** Production Live  
**Framework Otomasi:** Playwright E2E (TypeScript)  

---

## 1. Pendahuluan & Tujuan Pengujian

Dokumen ini merupakan acuan resmi untuk pelaksanaan **Regression Testing** pada platform CherryEdu. Tujuan pengujian regresi adalah memastikan bahwa pembaruan kode, perbaikan bug, penambahan fitur, ataupun deployment baru tidak merusak fungsi-fungsi inti (*core features*), integritas data pengguna, kalkulator sains kopi, alur sertifikasi, dan performa visual antarmuka di [https://cherryedu.vercel.app](https://cherryedu.vercel.app).

### 1.1 Sasaran Pengujian
1. **Fungsionalitas Hulu-ke-Hilir**: Memastikan 7 Learning Paths (160 Materi) dapat diakses, dibaca, dan dicatat progresnya dengan benar.
2. **Akurasi Alat Sains Kopi**: Memverifikasi formula kalkulasi rasio ekstraksi, SCA Cupping score, mineral air seduh, dan dial-in espresso.
3. **Integritas Alur Sertifikasi & Kuis**: Menjamin pengerjaan kuis, asesmen barista, skor kelulusan, dan verifikasi sertifikat publik (`/verify/:token`) berjalan tanpa kendala.
4. **Keamanan & Peran Pengguna**: Memvalidasi hak akses otentikasi (Guest, Learner, Barista, Roaster, Q Grader, Admin CMS).
5. **Ketersediaan Komunitas & Talenta**: Memastikan Job Board, Forum diskusi interaktif, dan Kamus Kopi berfungsi normal.

---

## 2. Lingkup & Klasifikasi Prioritas Pengujian

Pengujian dikategorikan ke dalam 3 tingkat prioritas pengujian:
* **P0 (Blocker / Critical)**: Alur utama pengguna yang jika gagal menyebabkan pengguna tidak dapat belajar, mendaftar, atau menggunakan fitur esensial. Wajib 100% lulus sebelum rilis.
* **P1 (High)**: Fitur penting pendukung seperti kalkulator lab, kuis materi, submit lamaran kerja, posting forum, dan pergantian peran demo.
* **P2 (Medium / Low)**: Tampilan visual sekunder, animasi, filter pencarian sekunder, mode cetak sertifikat, dan responsiveness pada perangkat non-standar.

---

## 3. Matriks Keterlacakan (Traceability Matrix)

| ID Suite | Nama Area Pengujian | Cakupan Rute / Fitur | Prioritas Dominan |
| :--- | :--- | :--- | :--- |
| **TS-01** | Navigasi Inti & Landing Page | `/`, Navbar, Mobile Drawer, Footer | P0 |
| **TS-02** | Kurikulum & Learning Paths | `/paths`, `/paths/[slug]`, Lesson Reader, SVG | P0 |
| **TS-03** | Interactive Coffee Tools | `/tools`, Brew Calc, Cupping Form, Water Calc | P1 |
| **TS-04** | Kuis & Evaluasi Belajar | Modul Kuis, `/assessment/barista`, XP & Streak | P0 |
| **TS-05** | Otentikasi & Manajemen Akun | `/login`, `/register`, Demo 1-Click, `/profile` | P0 |
| **TS-06** | Talent Services & Job Board | `/jobs`, Filter Lokasi/Role, Modal Lamaran | P1 |
| **TS-07** | Komunitas & Forum Diskusi | `/forum`, Kategori, Buat Diskusi, Komentar | P1 |
| **TS-08** | Sertifikasi & Verifikasi Publik | `/certificates`, `/verify/[token]` | P0 |
| **TS-09** | CMS & Admin Panel | `/admin`, `/admin/curriculum`, Route Guards | P1 |
| **TS-10** | Repositori Pengetahuan & Open Data | `/lexicon`, `/flashcards`, `/pustaka`, `/open-data` | P2 |

---

## 4. Rincian Skenario & Kasus Uji Regresi (Test Cases)

### Suite TS-01: Navigasi Inti & Landing Page

#### TC-01-01: Verifikasi Loading Homepage & Komponen Hero (P0)
* **Precondition**: Browser membuka `https://cherryedu.vercel.app`.
* **Langkah Uji**:
  1. Buka URL root `/`.
  2. Periksa title halaman: `"CherryEdu — Indonesian Specialty Coffee Academy"`.
  3. Periksa logo Cherry Coffee Roastery termuat tanpa broken image.
  4. Periksa headline hero utama: `"Memahami Kopi dari Hulu ke Hilir"`.
  5. Klik tombol CTA `"Mulai Foundation Layer (Gratis)"`.
* **Hasil yang Diharapkan**: Halaman ter-render dalam < 2 detik tanpa hydration error; navigasi mengarah ke `/paths/kopi-dari-hulu-ke-hilir`.

#### TC-01-02: Verifikasi Widget Brew Calculator di Homepage (P1)
* **Langkah Uji**:
  1. Scroll ke bagian `[ APPARATUS LAB // RATIO ENGINE ]` di homepage.
  2. Klik tab instrumen `"Aeropress"` atau `"Hario V60"`.
  3. Geser slider dosis kopi menjadi `18g`.
  4. Pilih rasio `1:16`.
* **Hasil yang Diharapkan**:
  - Total air otomatis terkalkulasi menjadi `288 ml/g` (18 × 16).
  - Jadwal tuangan / spesifikasi standar menyesuaikan dengan instrumen terpilih.

#### TC-01-03: Navigasi Menu Desktop & Mobile Responsive Drawer (P0)
* **Langkah Uji**:
  1. Pada resolusi desktop (≥ 1024px), periksa tautan menu: *Kurikulum*, *Alat & Riset*, *Komunitas*, *Tentang Kami*, *Masuk*, *Daftar Akun*.
  2. Pada resolusi mobile (375px × 667px), klik icon burger menu (`aria-label="Menu"`).
* **Hasil yang Diharapkan**: Mobile drawer membuka menu navigasi lengkap dan dapat ditutup kembali dengan lancar.

---

### Suite TS-02: Kurikulum & Learning Paths

#### TC-02-01: Eksplorasi Katalog 7 Learning Paths (P0)
* **Precondition**: Akses `https://cherryedu.vercel.app/paths`.
* **Langkah Uji**:
  1. Verifikasi seluruh 7 jalur pembelajaran tampil:
     - *Foundation: Kopi dari Hulu ke Hilir*
     - *Barista Specialization Path*
     - *Home Brewer Specialization Path*
     - *Roaster Specialization Path*
     - *Q Grader & Sensory Specialist Path*
     - *Green Coffee & Post-Harvest Processing Specialist Path*
     - *Coffee Business & Shop Management Specialist Path*
  2. Periksa badge status, jumlah jam, dan jumlah modul pada masing-masing card.
* **Hasil yang Diharapkan**: Seluruh card path aktif dan memiliki tautan ke detail path masing-masing.

#### TC-02-02: Akses Detail Silabus & Pembaca Materi (Lesson Viewer) (P0)
* **Langkah Uji**:
  1. Buka `/paths/kopi-dari-hulu-ke-hilir`.
  2. Periksa daftar modul F-01 sampai F-07.
  3. Klik salah satu materi (misal: *Modul F-01 Materi 1*).
  4. Periksa komponen materi: foto resolusi tinggi, takarir ilmiah, konten markdown terformat rapi.
  5. Periksa diagram ilmiah interaktif (SVG) termuat tanpa glitch.
* **Hasil yang Diharapkan**: Materi dapat dibaca tanpa error, diagram interaktif merespons interaksi hover/klik.

#### TC-02-03: Progres Belajar & Tandai Selesai (P0)
* **Langkah Uji**:
  1. Pada halaman materi, klik tombol `"Tandai Selesai"` / `"Mark as Complete"`.
  2. Periksa penambahan XP points pada header/indikator pengguna.
  3. Kembali ke silabus path.
* **Hasil yang Diharapkan**: Icon checkmark hijau muncul pada materi yang telah selesai, persentase progres jalur bertambah.

---

### Suite TS-03: Interactive Coffee Tools

#### TC-03-01: Halaman Alat Profesional (/tools Hub) (P1)
* **Langkah Uji**:
  1. Buka `https://cherryedu.vercel.app/tools`.
  2. Verifikasi ketersediaan tools: *Kalkulator Rasio Seduh*, *SCA Cupping Form*, *Interactive Flavor Wheel*, *Water Chemistry Calculator*, *Espresso Dial-In Assistant*.
* **Hasil yang Diharapkan**: Seluruh tab alat dapat dibuka dan dapat dioperasikan secara mandiri.

#### TC-03-02: Form SCA Cupping & Kalkulasi Skor 80+ (P1)
* **Langkah Uji**:
  1. Buka tab SCA Cupping Form.
  2. Masukkan sampel nama: `"Gayo Anaerobic Natural"`.
  3. Berikan nilai pada atribut: Fragrance (8.25), Flavor (8.5), Aftertaste (8.0), Acidity (8.25), Body (8.0), Balance (8.25), Clean Cup (10), Sweetness (10), Uniformity (10), Overall (8.25).
  4. Periksa kalkulasi Total Score.
* **Hasil yang Diharapkan**:
  - Total score terakumulasi dengan akurat (87.50).
  - Klasifikasi status otomatis muncul sebagai *"Specialty Coffee (85.00 - 89.99: Excellent)"*.

#### TC-03-03: Water Chemistry Calculator (P1)
* **Langkah Uji**:
  1. Buka tab Kalkulator Kimia Air Seduh.
  2. Pilih preset air: *"SCA Standard Water"* atau *"Hendon & Colonna-Dashwood Recipe"*.
  3. Periksa parameter: Target TDS, General Hardness (GH), Carbonate Hardness (KH/Alkalinity).
* **Hasil yang Diharapkan**: Resep takaran tetes konsentrat Magnesium/Kalsium dan Baking Soda terhitung otomatis.

---

### Suite TS-04: Kuis & Evaluasi Belajar

#### TC-04-01: Pengerjaan Kuis Modul & Kalkulasi Nilai (P0)
* **Langkah Uji**:
  1. Buka modul kuis pada jalur Foundation.
  2. Pilih jawaban pada setiap butir soal pilihan ganda.
  3. Klik tombol `"Kirim Jawaban Kuis"`.
* **Hasil yang Diharapkan**:
  - Sistem menampilkan skor persentase (0-100%).
  - Jika nilai ≥ 70%, status dinyatakan Lulus (*Passed*), XP ditambahkan, dan animasi kelulusan/badge muncul.
  - Setiap soal menampilkan pembahasan kunci jawaban ilmiah.

#### TC-04-02: Asesmen Kompetensi Barista (/assessment/barista) (P0)
* **Langkah Uji**:
  1. Buka `https://cherryedu.vercel.app/assessment/barista`.
  2. Jawab rangkaian pertanyaan asesmen diagnostik.
  3. Selesaikan seluruh sesi asesmen.
* **Hasil yang Diharapkan**: Sistem menampilkan radar evaluasi kompetensi, rekomendasi materi lanjutan, dan opsi klaim sertifikat jika memenuhi syarat.

---

### Suite TS-05: Otentikasi & Akun Pengguna

#### TC-05-01: Halaman Masuk (/login) & Validasi Formulir (P0)
* **Langkah Uji**:
  1. Buka `/login`.
  2. Masukkan email format tidak valid (misal: `abcde`).
  3. Klik tombol Masuk.
* **Hasil yang Diharapkan**: Pesan validasi muncul dalam Bahasa Indonesia: *"Format alamat email tidak valid"*.

#### TC-05-02: Fitur 1-Click Demo Login (P0)
* **Langkah Uji**:
  1. Pada halaman `/login`, gunakan tombol Demo Login:
     - Klik `"Masuk sebagai Barista (Budi Santoso)"` atau `"Masuk sebagai Admin"`.
  2. Verifikasi state otentikasi di navbar: Avatar dan nama pengguna tampil menggantikan tombol Masuk.
* **Hasil yang Diharapkan**: Pengguna langsung terautentikasi tanpa harus menunggu verifikasi email; data sesi tersimpan di client storage.

#### TC-05-03: Halaman Profil Pengguna (/profile) (P1)
* **Langkah Uji**:
  1. Setelah login, navigasi ke `/profile`.
  2. Verifikasi tampilan: Nama pengguna, Coffee Role, Kota, Total XP, Streak belajar harian, dan daftar sertifikat yang dimiliki.
* **Hasil yang Diharapkan**: Seluruh metrik gamifikasi ter-render dengan akurat.

---

### Suite TS-06: Talent Services & Job Board

#### TC-06-01: Eksplorasi Lowongan Kerja Kopi (/jobs) (P1)
* **Langkah Uji**:
  1. Buka `https://cherryedu.vercel.app/jobs`.
  2. Periksa daftar lowongan aktif (Head Roaster, Senior Barista, QC Specialist, dll.).
  3. Gunakan filter pencarian berdasarkan Role atau Kota (misal: Jakarta, Bandung, Bali).
* **Hasil yang Diharapkan**: Daftar lowongan terfilter secara reaktif sesuai kriteria pencarian.

#### TC-06-02: Modal Pengajuan Lamaran Kerja (P1)
* **Langkah Uji**:
  1. Klik tombol `"Lamar Sekarang"` pada salah satu lowongan.
  2. Periksa modal form lamaran (Nama, Portofolio/CV link, Surat Pengantar singkat).
  3. Klik submit.
* **Hasil yang Diharapkan**: Notifikasi toast sukses muncul (*"Lamaran berhasil dikirim"*), status lamaran tercatat.

---

### Suite TS-07: Komunitas & Forum Diskusi

#### TC-07-01: Halaman Forum Diskusi (/forum) (P1)
* **Langkah Uji**:
  1. Buka `https://cherryedu.vercel.app/forum`.
  2. Filter berdasarkan kategori: *Sains Ekstraksi*, *Roasting Lab*, *Green Coffee & Farm*, *Bisnis Kedai Kopi*.
  3. Buka salah satu thread diskusi.
* **Hasil yang Diharapkan**: Thread memuat konten diskusi, nama pembuat, tanggal, dan daftar komentar.

#### TC-07-02: Interaksi Forum (Upvote & Komentar) (P1)
* **Langkah Uji**:
  1. Dalam thread diskusi, klik tombol like / upvote.
  2. Ketik komentar baru pada form respon dan klik kirim.
* **Hasil yang Diharapkan**: Jumlah like bertambah secara real-time; komentar baru muncul pada daftar tanggapan.

---

### Suite TS-08: Sertifikasi & Verifikasi Publik

#### TC-08-01: Verifikasi Sertifikat Publik (/verify/[token]) (P0)
* **Langkah Uji**:
  1. Buka halaman verifikasi dengan token sertifikat valid:
     `https://cherryedu.vercel.app/verify/CERT-FND-2026-001`.
  2. Periksa komponen sertifikat:
     - Nama penerima
     - Jalur sertifikasi: *Foundation: Kopi dari Hulu ke Hilir*
     - Tanggal terbit & Status: *"Valid & Terverifikasi"*
     - Tanda tangan digital resmi Fahrul M.W (Master Roaster & Q-Grader).
* **Hasil yang Diharapkan**: Status sertifikat valid ditampilkan lengkap dengan QR code verifikasi.

---

### Suite TS-09: CMS & Admin Panel

#### TC-09-01: Proteksi Akses Route Guard Admin (/admin) (P0)
* **Langkah Uji**:
  1. Akses `/admin` dalam kondisi Tamu (Guest) atau role bukan admin.
* **Hasil yang Diharapkan**: Akses ditolak atau pengguna diarahkan ke `/login` atau dialihkan dengan peringatan hak akses.

#### TC-09-02: Dashboard Admin & Ringkasan KPI (/admin) (P1)
* **Precondition**: Login sebagai Admin (`admin@cherryedu.id`).
* **Langkah Uji**:
  1. Navigasi ke `/admin`.
  2. Periksa kartu KPI analitik: Total Peserta Belajar, Total Modul Selesai, Sertifikat Diterbitkan, Lowongan Aktif.
  3. Buka sub-menu `/admin/curriculum`.
* **Hasil yang Diharapkan**: Seluruh data agregat CMS tampil dengan benar, editor kurikulum dapat diakses.

---

### Suite TS-10: Repositori Pengetahuan & Open Data

#### TC-10-01: Kamus Istilah Kopi (/lexicon) (P2)
* **Langkah Uji**:
  1. Buka `/lexicon`.
  2. Ketik kata kunci pada kolom pencarian: *"Maillard"*, *"Chaff"*, atau *"TDS"*.
* **Hasil yang Diharapkan**: Daftar istilah tersaring secara instan dengan definisi ilmiah dan konteks penggunaan.

#### TC-10-02: Flashcards Kopi Interaktif (/flashcards) (P2)
* **Langkah Uji**:
  1. Buka `/flashcards`.
  2. Klik kartu untuk membalik (*flip to reveal answer*).
  3. Klik tombol *"Kartu Berikutnya"*.
* **Hasil yang Diharapkan**: Animasi rotasi 3D kartu berjalan halus dan kartu berikutnya muncul.

#### TC-10-03: Katalog Pustaka & Unduhan Materi (/pustaka) (P2)
* **Langkah Uji**:
  1. Buka `/pustaka`.
  2. Verifikasi daftar referensi buku, jurnal ilmiah, dan dokumen standar resmi SCA/CQI.
* **Hasil yang Diharapkan**: Seluruh daftar pustaka dapat diakses dengan tautan rujukan aktif.

---

## 5. Pedoman Klasifikasi & Pelaporan Cacat (Defect Classification)

Jika ditemukan anomali selama eksekusi regresi, catat laporan menggunakan format berikut:

```markdown
### [DEFECT-ID] Judul Singkat Masalah
* **Severity**: Blocker / Critical / Major / Minor
* **Suite / Test Case**: TS-XX / TC-XX-YY
* **URL**: https://cherryedu.vercel.app/...
* **Langkah Reproduksi**:
  1. ...
  2. ...
* **Hasil Aktual**: Apa yang terjadi (error, unresponsive, salah hitung).
* **Hasil yang Diharapkan**: Sesuai kriteria PRD.
* **Log / Screenshot**: Console logs atau tangkapan layar.
```

---

## 6. Kriteria Kelulusan Regresi (Sign-Off Criteria)

Platform dinyatakan siap (*Deployment Ready*) apabila:
1. **100% Test Case Prioritas P0 LULUS (Passed)** tanpa pengecualian.
2. **≥ 95% Test Case Prioritas P1 LULUS**, dan tidak ada cacat yang menghentikan alur utama.
3. Seluruh kalkulator sains kopi (Brewing, Cupping, Water) terbukti akurat secara matematis.
4. Tidak ada error fatal runtime (500 Internal Server Error atau unhandled JS exceptions) pada console browser.
