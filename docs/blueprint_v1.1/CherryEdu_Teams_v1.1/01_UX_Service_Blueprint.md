# Cherry Edu Teams — UX & Service Blueprint v1.1

**Tanggal:** 13 Oktober 2026  
**Status:** Product design baseline untuk validasi, bukan bukti usability test  
**Bahasa UI:** Indonesia (default); i18n-ready  
**Sasaran:** barista, pemilik coffee shop, trainer Cherry Edu, admin Cherry Edu  
**Platform:** responsive web/PWA; mobile-first untuk barista, owner, trainer  
**Hubungan produk:** Cherry Edu Learning (B2C) ↔ Cherry Edu Teams (B2B)

## 0. Ringkasan keputusan

Cherry Edu Teams adalah tempat *menjalankan* layanan peningkatan kemampuan tim coffee shop. Materi bisa berasal dari Foundation Path, Barista Path, serta SOP dan tugas buatan Cherry Edu/klien. Platform belajar utama tetap berfungsi sebagai penyedia konten; B2B mengelola assignment, kehadiran, praktik, penilaian kompetensi dan pelaporan.

**Janji UX per persona:**
- Barista: "Apa yang harus aku pelajari/latih berikutnya?"
- Owner: "Siapa yang sudah siap dan siapa yang perlu dibantu?"
- Trainer: "Apa yang harus aku nilai sekarang, dengan bukti apa?"
- Admin: "Bagaimana membuat dan menjalankan program klien tanpa pekerjaan berulang?"

**Jangan lakukan:** satu dashboard generik untuk semua role; persen tunggal untuk kesiapan kerja; nilai kompetensi otomatis hanya dari kuis; leaderboard performa karyawan; UI yang penuh label internal, placeholder, "draft", "coming soon", atau teks teknis.

## 1. Service blueprint end-to-end

| Fase | Customer-facing | Backstage Cherry Edu | Sistem/data | Recovery penting |
|---|---|---|---|---|
| Discovery | Owner membahas masalah dan tujuan tim | Sales/trainer memetakan kebutuhan | Intake + kebutuhan kompetensi | Kebutuhan belum pasti → program belum diaktivasi |
| Kontrak/aktivasi | Owner menerima informasi layanan | Admin memverifikasi ruang lingkup | Status tenant: setup → active | Kontrak tertunda → akun owner boleh masuk ke halaman informasi terbatas |
| Setup | Owner menerima invite | Admin membuat organisasi, outlet, program dari template | Provisioning idempotent, domain/slug unik | Invite salah → batalkan/kirim ulang |
| Asesmen awal | Barista menyelesaikan diagnosis teori dan praktik | Trainer mengobservasi baseline | Baseline per kompetensi & rubric version | Absen → reschedule, bukan gagal |
| Learning plan | Barista melihat kegiatan pribadi | Admin/trainer menyetujui penempatan | Enrollment + exemptions sesuai bukti | Perubahan program → versi baru, progres lama aman |
| Online learning | Barista membaca dan mengerjakan kuis | Cherry Edu mengelola konten | Canonical learning events → B2B projection | Putus koneksi → indikator progres belum tersinkron |
| Offline session | Peserta mengikuti pelatihan | Trainer menilai dan mencatat kehadiran | Attendance + observations + signoff | Trainer offline → local pending, konflik ditangani |
| Remedial | Barista mendapat latihan spesifik | Trainer menetapkan tindak lanjut | Task, due date, evidence, reassessment | Perubahan jadwal / keterlambatan diberi alasan |
| Pelaporan | Owner membaca ringkasan dan tindakan | Account manager meninjau hasil | Competency aggregate, laporan periode | Data belum lengkap → tampil eksplisit, bukan disamarkan 0% |
| Renewal | Owner memilih tindak lanjut | Cherry Edu mengusulkan program berikutnya | Program history, skill-gap trends | Tidak renew → akses sesuai kontrak, data retained sesuai kebijakan |

**Frontstage/backstage boundary:** barista tidak melihat catatan kerja internal sales, margin kontrak, komentar privat antartim Cherry Edu, atau nilai barista lain. Owner hanya melihat progres dan hasil B2B sesuai persetujuan; bukan seluruh histori B2C pribadi.

## 2. Information architecture

### 2.1 Barista
- **Beranda:** "Lanjutkan", status terdekat, jadwal berikutnya, umpan balik terbaru.
- **Belajar:** urutan tahapan program, kegiatan tersedia/terkunci, "Referensi cepat" terpisah.
- **Progres:** kompetensi, umpan balik, riwayat evaluasi, pencapaian.
- Profil: akun, organisasi aktif, bantuan, privasi, pengaturan.

### 2.2 Owner
- **Ringkasan:** kesiapan tim; peringatan; aksi yang harus dilakukan.
- **Tim:** daftar orang, filter outlet, detail peserta.
- **Program:** tahap pelatihan, jadwal, agenda, penanggung jawab.
- **Laporan:** perubahan keterampilan, evidence summary, ekspor PDF/CSV (hak terbatas).

### 2.3 Trainer
- **Hari ini:** sesi berikutnya, peserta yang perlu dinilai, penilaian tertunda.
- **Sesi:** jadwal, check-in, daftar peserta.
- **Penilaian:** rubrik, catatan, pending signoff, remedial.
- Profil: penugasan lintas klien, status sinkronisasi, bantuan.

### 2.4 Admin Cherry Edu
- **Klien:** pencarian dan organisasi, detail kontrak/status dasar (tanpa invoicing kompleks MVP).
- **Program:** pustaka template, versi, assignment.
- **Operasional:** trainer, sesi, invite, anomali, rekonsiliasi.
- **Laporan:** antar-klien teragregasi dengan izin yang benar.
- Settings: user access, audit, data retention, integrations.

## 3. Screen inventory + prioritas

`P0` = wajib pilot; `P1` = rilis berikut; `P2` = pertimbangkan.

| ID | Role | Layar | P | Tujuan utama | CTA utama |
|---|---|---|---|---|---|
| AUTH-01 | Semua | Accept invitation | P0 | Validasi undangan & identitas | Masuk dengan Google/email |
| AUTH-02 | Semua | Switch organization/role | P0 | Konteks bisnis yang jelas | Masuk ke workspace |
| BAR-01 | Barista | Home | P0 | Ketahui kegiatan berikutnya | Lanjutkan belajar |
| BAR-02 | Barista | Program roadmap | P0 | Mengerti urutan dan gate | Buka tahap |
| BAR-03 | Barista | Learning handoff | P0 | Akses langsung materi Cherry Edu | Buka materi |
| BAR-04 | Barista | Quiz checkpoint | P0 | Pahami persyaratan & hasil | Mulai / ulangi |
| BAR-05 | Barista | Practical assessment status | P0 | Tahu apa yang menunggu trainer | Lihat jadwal/hasil |
| BAR-06 | Barista | Competency profile | P0 | Lihat penguasaan dan feedback | Lihat detail kompetensi |
| BAR-07 | Barista | Reference quick access | P1 | SOP saat bekerja | Buka panduan |
| OWN-01 | Owner | Overview | P0 | Kondisi kesiapan tim | Lihat yang perlu dibantu |
| OWN-02 | Owner | Team list | P0 | Temukan barista & status | Buka barista |
| OWN-03 | Owner | Staff detail | P0 | Lihat progress, evidence, blocker | Tindak lanjuti |
| OWN-04 | Owner | Skill-gap by outlet | P0 | Prioritas pelatihan | Lihat area pengembangan |
| OWN-05 | Owner | Program schedule | P0 | Pahami sesi dan tenggat | Detail sesi |
| OWN-06 | Owner | Report export | P1 | Ringkasan untuk manajemen | Unduh laporan |
| TRN-01 | Trainer | Today | P0 | Sesi & pekerjaan penilaian | Mulai sesi |
| TRN-02 | Trainer | Session roster | P0 | Kehadiran dan peserta | Tandai kehadiran |
| TRN-03 | Trainer | Practical rubric | P0 | Menilai per kriteria | Simpan penilaian |
| TRN-04 | Trainer | Signoff and remediation | P0 | Finalisasi / tindak lanjut | Konfirmasi hasil |
| TRN-05 | Trainer | Offline sync queue | P0 | Lihat pending/conflict | Sinkronkan/tinjau |
| ADM-01 | Admin | Client list | P0 | Kelola tenant | Tambah klien |
| ADM-02 | Admin | Client setup wizard | P0 | Provision tenant | Aktifkan program |
| ADM-03 | Admin | Program composer | P0 | Gabungkan materi & praktik | Simpan versi program |
| ADM-04 | Admin | Invite/import manager | P0 | Undang dan kelola peserta | Kirim undangan |
| ADM-05 | Admin | Session planner | P0 | Atur trainer dan peserta | Terbitkan jadwal |
| ADM-06 | Admin | Operations dashboard | P0 | Periksa blocker/data sync | Periksa anomali |
| ADM-07 | Admin | Rubric library | P1 | Template penilaian | Publikasikan versi |
| ADM-08 | Admin | Audit history | P0 | Telusur perubahan sensitif | Lihat kejadian |

## 4. Mobile layout — struktur, bukan desain final

### 4.1 BAR-01 Home — hirarki satu scroll

```text
┌───────────────────────────────────┐
│ Cherry Edu Teams       [Profil]   │
│ Halo, Raka                        │
│ Coffee Shop A · Barista           │
├───────────────────────────────────┤
│ LANJUTKAN                         │
│ Espresso: memahami variabel       │
│ 7 menit estimasi                  │
│ [ Lanjutkan belajar            →] │
├───────────────────────────────────┤
│ HAL YANG PERLU KAMU LAKUKAN       │
│ • 1 kuis perlu diselesaikan       │
│ • Praktik: menunggu jadwal        │
├───────────────────────────────────┤
│ Program kamu             [Lihat]  │
│ Foundation · tahap 3 dari 7       │
│ Barista · belum dimulai           │
├───────────────────────────────────┤
│ Beranda       Belajar     Progres │
└───────────────────────────────────┘
```

**Interaction notes:** CTA belajar mengarah ke *exact lesson*, bukan katalog. Jika user baru belum ada enrollment: empty state informatif "Program pelatihanmu sedang disiapkan" dengan kontak yang relevan. Jika user enrolled tetapi belum mulai: CTA "Mulai asesmen awal". Jika practice belum dijadwalkan: jangan beri tombol "Mulai praktik" yang tak dapat digunakan.

### 4.2 BAR-02 Learning roadmap

Tampilan berbentuk vertikal stepper; untuk setiap tahap tampil **status, judul, aksi berikutnya**. Detail dapat diperluas satu tahap per waktu. Gate menyebut persyaratan konkret: "Selesaikan kuis ekstraksi" atau "Menunggu trainer menilai praktik", bukan sekadar ikon gembok tanpa penjelasan. `optional` selalu diberi label "Pelengkap", tak dihitung sebagai blocker.

### 4.3 OWN-01 Owner overview

```text
┌───────────────────────────────────┐
│ Kopi Ruang             [Outlet ▾] │
│ Kondisi tim                       │
├───────────────────────────────────┤
│ 8 peserta aktif                   │
│ 5 memenuhi seluruh kompetensi     │
│ wajib pada tahapnya              │
├───────────────────────────────────┤
│ PERLU DITINDAKLANJUTI            │
│ • 2 menunggu observasi praktik   │
│ • 1 butuh remedial milk steaming  │
│ [Lihat peserta]                   │
├───────────────────────────────────┤
│ Tim                               │
│ Raka    Menunggu penilaian        │
│ Dina    Kompeten                  │
│ Fajar   Perlu latihan             │
├───────────────────────────────────┤
│ Ringkasan Tim Program Laporan     │
└───────────────────────────────────┘
```

**Aturan:** angka "kompeten" mempunyai denominator dan definisi yang dapat dibuka. "Belum dinilai" berbeda dari "belum kompeten". Status tak boleh dihitung dari kehadiran saja. Owner tidak diberi akses pada jawaban kuis pribadi yang tidak menjadi bagian kontrak/program.

### 4.4 TRN-03 Practical rubric

```text
┌───────────────────────────────────┐
│ < Kembali    Espresso Dial-in     │
│ Raka    2 dari 6 peserta          │
├───────────────────────────────────┤
│ Kriteria 1 dari 4                 │
│ Mengidentifikasi variabel masalah │
│                                   │
│ ( ) Belum mampu                   │
│ ( ) Banyak arahan                 │
│ (•) Sedikit arahan                │
│ ( ) Mandiri & konsisten          │
│                                   │
│ [Catatan temuan]                  │
│ ☐ Kesalahan kritis teramati      │
├───────────────────────────────────┤
│ Tersimpan lokal • Belum sinkron  │
│ [Simpan]             [Berikutnya] │
└───────────────────────────────────┘
```

**Aturan:** penilaian mempunyai rubric anchor yang bisa dibuka; catatan wajib jika tidak kompeten/kesalahan kritis; validasi final memerlukan internet; draft lokal tidak boleh ditampilkan sebagai hasil resmi. Tombol hanya aktif bila seluruh kriteria wajib terisi.

### 4.5 ADM-02 Client setup wizard (desktop-first, mobile usable)

1. Identitas dan kontak bisnis — cek nama mirip dan slug bentrok.
2. Outlet — satu default; boleh tambah nanti.
3. Program — template / program baru; pratinjau syllabus & gates.
4. Orang — owner, barista, trainer; invite CSV/manual; validasi duplikasi.
5. Jadwal — optional; dapat diatur setelah aktivasi.
6. Review — ringkasan akses dan tindakan aktivasi yang akan terjadi.

Draft setup disimpan sebagai operasi admin internal. Label "draft" boleh di workspace internal admin, **tidak** untuk learner/owner. Setelah submit, server melakukan provisioning idempotent; jangan menampilkan "berhasil" sebelum transaksi selesai.

## 5. Screen state matrix — wajib seluruh P0

Setiap screen harus diimplementasikan pada state berikut, bukan hanya happy path:

| State | Tampilan | Perilaku |
|---|---|---|
| Loading | Skeleton stabil proporsi konten | Hindari content jumping, tombol tidak bisa diklik ganda |
| Empty initial | Penjelasan singkat dan satu CTA relevan | Tidak memakai "No data" teknis |
| Empty filtered | "Tidak ada hasil untuk filter ini" | Reset filter tersedia |
| Partial data | Bagian valid tetap tampil, bagian gagal diberi status | Jangan mengganti angka dengan 0 jika belum berhasil dimuat |
| Network offline | Banner halus "Koneksi terputus" | Materi cached boleh dibaca; asesmen final tidak bisa disahkan |
| Pending sync | Penanda jelas serta jumlah item | Data lokal belum dianggap diterima server |
| Sync conflict | Penjelasan spesifik; pilih tindakan atau minta review | Jangan silent last-write-wins untuk asesmen |
| Unauthorized | "Kamu tidak punya akses ke halaman ini" | Jangan bocorkan nama/data tenant lain |
| Expired invite | Bisa minta undangan baru melalui kontak atau proses aman | Tidak memvalidasi lewat email query tanpa token |
| Inactive membership | Akses workspace ditutup | Akun Cherry Edu pribadi tetap ada |
| Validation error | Inline di field + ringkasan bila panjang | Input lainnya tetap tersimpan |
| Server error | Pesan manusiawi + retry aman | Operasi idempotent tak terduplikasi |
| Program suspended | Akses sesuai kebijakan kontrak | Status dan kontak jelas |
| Program completed | Ringkasan hasil dan rekomendasi | Bukan sekadar perayaan berlebihan |

**Copy contoh:**
- "Penilaian belum tersimpan ke server. Tetap di halaman ini atau coba sinkronkan saat koneksi kembali."
- "Sesi praktik belum dijadwalkan. Kamu tetap bisa mempelajari materi yang tersedia."
- "Nilaimu sudah tercatat. Trainer masih perlu memvalidasi praktik."
- "Hasil belum tersedia" (bukan "0%" saat data belum masuk).

## 6. Motion, interaction, ergonomi

- Scroll satu kolom untuk mayoritas mobile; tabel lebar menjadi daftar item stacked, bukan horizontal-scroll default.
- Primary touch target rekomendasi produk >=44–48 CSS px; spacing antartarget cukup untuk jari saat bekerja. Ini target desain internal, bukan kutipan literal WCAG.
- Minimum 16px untuk body utama (teks pendukung jangan terlalu kecil); layout reflow pada 320px.
- Keyboard tidak boleh menutup tombol penilaian; sticky CTA menghormati safe-area.
- Back gesture harus mempertahankan posisi belajar; tidak boleh menutup ujian tanpa dialog konfirmasi.
- Auto-save diberi status "Tersimpan" hanya setelah server acknowledge. Untuk local save gunakan "Tersimpan di perangkat".
- Tidak ada autostart audio/video; materi harus bisa digunakan tanpa video demonstrasi pada versi pertama.
- Tidak mengandalkan warna saja untuk status; gunakan teks + ikon semantik; reduced-motion didukung.
- PWA install opsional, bukan interstitial yang menghalangi belajar.
- Navigasi bottom maksimal 3–4 tujuan sesuai role; submenu hanya ketika dibutuhkan.
- Modul dengan interaktif format teks tidak boleh disebut "card" kecuali benar-benar divisualkan sebagai komponen yang bermakna.

## 7. UX privacy & consent

- Owner diberi akses pada kemajuan **program perusahaan**; bukan otomatis seluruh rekam pembelajaran B2C pribadi.
- Hasil diagnosis awal diinformasikan: tujuan, pihak yang bisa melihat, kapan dipakai, apakah dapat dibandingkan.
- Jangan gunakan skor kuis tunggal sebagai evaluasi SDM untuk tindakan disipliner otomatis.
- Foto/video praktik hanya opsional jika kontrak dan dasar pemrosesan memungkinkan; storage privat, masa retensi jelas.
- Data absensi dan asesmen praktik memiliki audit trail.

## 8. UX QA: tugas nyata yang wajib lulus

1. Barista baru menerima invite, login Google, menemukan kegiatan pertama, menutup aplikasi, kembali ke layar yang benar.
2. Barista lama punya akun B2C; menerima invite Teams tanpa kehilangan akun, enrollment atau progress B2C.
3. Barista offline sesudah membuka materi; indikator sinkron jelas dan pembelajaran aman.
4. Owner melihat 1 peserta belum diobservasi; tidak mengartikannya sebagai gagal.
5. Owner multi-outlet mengganti filter dan tidak melihat data perusahaan lain.
6. Trainer menilai enam peserta dari HP, memakai rubrik dan catatan; data tidak tertukar antarorang.
7. Trainer kehilangan internet saat penilaian; aplikasi memulihkan kerja dan menghindari signoff ganda.
8. Admin mengundang email yang sama dua kali; hanya satu identity + satu membership aktif.
9. Admin menerbitkan perubahan kurikulum; peserta program lama tetap memiliki aturan yang konsisten.
10. Perangkat 320px, 360px, 390px, 430px; iOS Safari + Android Chrome; font scaling dan screen reader dasar.

### Usability pilot: metrik target untuk diuji, bukan hasil riset

- >=90% peserta pilot mampu menemukan "lanjutkan belajar" tanpa instruksi.
- >=90% owner pilot dapat mengidentifikasi tindakan prioritas berdasarkan dashboard.
- >=95% trainer pilot dapat menyimpan penilaian lengkap tanpa kehilangan catatan.
- Median waktu masuk ke materi yang ditugaskan <=30 detik setelah login valid.
- **0** kasus kebocoran tenant, hasil penilaian hilang, atau status "kompeten" tanpa bukti sah.

## 9. Direction art & content design

Editorial yang tenang, profesional, praktis; mencerminkan Cherry Edu, bukan aplikasi corporate generik. Gunakan **brand color yang benar-benar disetujui di Cherry Edu**, dengan dasar netral/coffee-toned yang bersahaja. Tidak memakai gradient dekoratif, shape acak, emoji berlebihan, copy "Unlock your potential" atau gamifikasi yang menggantikan informasi. Keterbacaan dan kegunaan lebih penting daripada ilustrasi.

**Mandatory visual rules (owner feedback):** **NO** hijau neon/lime, **NO green glow**, **NO** merah terang sembarangan, **NO** palet warna acak, dan **NO pill/badge dekoratif tanpa fungsi**. Jangan menampilkan chart pelangi, glowing CTA, glowing progress, red warning untuk progres normal, atau card berlapis berlebihan. Gunakan status dengan teks + ikon/struktur, semantic color lembut hanya jika bermakna; merah untuk error/destructive/critical nyata. Corner radius moderat, whitespace dan hirarki tipografi rapi. Seluruh aturan rinci dan checklist visual ada di **`05_UI_Visual_Direction_Guardrails.md` dan wajib diikuti**.

Mockup UI sebelumnya adalah eksplorasi **belum disetujui sebagai visual source of truth**; jangan menyalin efek, bentuk pill, maupun palet statusnya.

Text hierarchy: judul layar jelas; tujuan terdekat menonjol; instruksi pendek; detail tersedia on-demand. Gunakan istilah sehari-hari: "Jadwal praktik", "Perlu latihan", "Menunggu penilaian", "Lihat perkembangan". Hindari "Learning gate", "Tenant", "Synchronizing LMS" dalam UI barista.

## 10. Yang harus diuji bersama pengguna sebelum finalisasi visual

- Model laporan yang paling diinginkan owner (per-individu vs per-outlet; ringkasan mingguan vs per program).
- Apakah kepala bar internal memiliki kewenangan assessor, untuk kompetensi apa, dan siapa yang mengesahkan.
- Frekuensi dan bentuk sesi offline yang realistis untuk bisnis kecil dengan jadwal shift.
- Tingkat literasi digital peserta dan kebutuhan instruksi bahasa Indonesia.
- Komposisi antara Foundation umum dan SOP spesifik kedai.

## 11. Referensi

- NN/g service blueprint: https://www.nngroup.com/articles/service-blueprints-definition/
- W3C WCAG 2.2: https://www.w3.org/TR/WCAG22/
- Apple HIG, touch targets: https://developer.apple.com/design/human-interface-guidelines/
- Indonesia SKKNI Kopi UMKM Kepmenaker 32/2023: https://jdih.kemnaker.go.id/peraturan/detail/2345/keputusan-menteri-ketenagakerjaan-nomor-32-tahun-2023

**Batasan:** spesifikasi ini dibuat dari kebutuhan produk dan riset sekunder. Belum ada user interview atau moderated usability testing yang dilakukan pada dokumen ini.
