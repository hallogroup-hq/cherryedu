# Cherry Edu Teams — Product Requirements Document (PRD) v1.1

**Tanggal:** 13 Oktober 2026  
**Jenis:** B2B training operations + competency management  
**Kepemilikan:** Cherry Edu  
**Tahap:** Baseline produk untuk review/validasi; **bukan persetujuan deploy production**  
**Dependency:** Cherry Edu Learning Foundation & Barista content + server-based learning record  
**Target utama:** coffee shop Indonesia dengan 1 hingga beberapa outlet; tim barista kecil–menengah.

---

## 1. Executive summary

Cherry Edu menjual jasa pengembangan SDM barista yang menggabungkan pembelajaran online dan pelatihan offline. Cherry Edu Teams adalah **sistem operasi layanan** tersebut: memungkinkan admin membuat workspace B2B untuk klien, menyiapkan program berbasis kurikulum Foundation dan Barista, mengundang owner dan barista, menjadwalkan trainer, menilai teori/praktik, memutuskan kelulusan tiap tahapan, serta memperlihatkan perkembangan kompetensi tim kepada owner.

**Diferensiasi inti:** progress belajar tidak disamakan dengan kompetensi operasional. Program diukur dengan evidence pengetahuan, praktik, dan tindakan setelah pelatihan, bukan page views atau kuis semata.

**Keputusan desain**: repo + deployment B2B terpisah, database pada Supabase project Cherry Edu yang sama untuk fase awal (schema `b2b` privat + API server terbatas), identitas bersama, **tidak** database baru per coffee shop. Keputusan akhir bergantung pada lulusnya hardening security dan verifikasi storage learning progress.

## 2. Bukti awal dan fakta teknis (read-only, 13 Okt 2026)

- Repo yang telah diperiksa: `hallogroup-hq/cherryedu` (`main`), menggunakan Next.js, React, Supabase SDK dan state store berbasis browser.
- Supabase project `cherryedu` terdeteksi aktif. Schema `public` live pada audit menunjukkan tabel aplikasi `profiles` dan `transactions`; tabel materi/progress dalam `supabase/schema.sql` belum tampak sebagai tabel pada database live yang diaudit.
- `lib/store.tsx` menyimpan `enrollments`, `userProgress`, `quizAttempts` dalam `localStorage`; sinkronisasi yang ditinjau lebih banyak mencakup profiles dan transactions. **Jangan mengasumsikan progress sudah persist dan sinkron antardevice.**
- Kebijakan RLS live untuk `profiles` dan `transactions` terdeteksi permisif (`USING(true)` / `WITH CHECK(true)`) dan role `anon` serta `authenticated` memiliki akses baca/tambah/ubah; **ini prioritas keamanan kritis**. Audit juga menemukan peringatan fungsi privilege dan leaked password protection.
- `lib/auth.tsx` memiliki jalur demo/test credential di client. Perlu dipisahkan/ditutup di production sebelum menambahkan data SDM klien.
- Tidak ada perubahan live DB/repo yang dilakukan dalam penyusunan dokumen ini.

### 2.1 Gate sebelum coding fitur B2B

G0-A — Security: inventaris RLS/grants/Auth/API/storage; patch dan tes denial akses lintas role, profil, transaksi; admin demo route non-production only; remediasi findings security advisor.

G0-B — Learning persistence: model canonical enrollment/lesson progress/quiz result server-based; migrasi progres browser existing yang **tidak menimpa** hasil lebih baru; rollback & dedupe; cross-device QA.

G0-C — Canonical content IDs: versi konten dan lesson/quiz IDs stabil serta terpapar melalui API internal, supaya penugasan B2B tidak putus bila konten B2C diubah.

**Tidak lulus Gate 0 = tidak boleh mengaktifkan data klien sungguhan.**

## 3. Problems / jobs-to-be-done

### 3.1 Owner
- Sulit mengetahui apakah pelatihan meningkatkan keterampilan kerja, bukan cuma pengetahuan.
- Tidak mudah membandingkan kemampuan barista sebelum/sesudah pelatihan atau mengetahui kebutuhan remedial.
- Waktu owner terbatas; laporan harus menunjukkan aksi yang dibutuhkan, bukan fitur dashboard rumit.

### 3.2 Barista
- Mengikuti resep SOP tanpa memahami alasan teknis; bingung ketika variabel kopi/peralatan berubah.
- Perlu belajar dalam sesi pendek di sela jadwal shift, dengan akses materi jelas dari HP.
- Perlu tahu apa yang sudah dikuasai, apa yang dinilai trainer, dan tindak lanjut.

### 3.3 Trainer
- Penilaian lapangan sering tercecer, tidak konsisten atau terlambat direkap.
- Butuh rubrik observasi dan bukti sederhana per peserta, per sesi, per kompetensi.

### 3.4 Cherry Edu Admin
- Setiap klien tidak boleh memerlukan setup teknis/database manual.
- Harus dapat menggunakan kembali materi utama dan template, tetapi tetap mengustomisasi program.
- Harus mengelola banyak klien tanpa menabrak keamanan data.

## 4. Goals & non-goals

### 4.1 Outcome MVP

1. Admin dapat membuat klien baru dan mengaktifkan workspace/akses terisolasi melalui UI.
2. Barista login dengan akun yang sama secara identitas dengan Cherry Edu Learning, belajar materi yang ditugaskan, dan progresnya tercatat server-side.
3. Trainer dapat mencatat kehadiran, observasi rubrik, keputusan validasi, dan remedial dari HP.
4. Owner dapat melihat progres program, status kompetensi, blocker serta perubahan baseline vs hasil, dengan data yang benar.
5. Platform menerapkan prerequisite/learning gates secara andal dan auditable.

### 4.2 Non-goals MVP

- POS, inventory dan payroll/HRIS full integration.
- AI grading praktik, computer vision atau AI coach.
- Native mobile apps.
- Fitur video demo wajib (materi awal harus lengkap tanpa video).
- Adaptive learning generatif otomatis.
- Platform sertifikasi formal BNSP/SCA kecuali ada otorisasi dan proses resmi yang sesuai.
- Payment checkout B2B self-service kompleks.
- Leaderboard skor karyawan publik.

## 5. Personas dan permission model

| Persona | Lingkup | Boleh | Tidak boleh |
|---|---|---|---|
| Platform Admin | Seluruh pelanggan berdasarkan role yang sah | Provision tenant; kelola template dan trainer; audit | Mengakses data atas alasan di luar kebutuhan layanan tanpa jejak audit |
| Program Manager | Program yang ditugaskan | Atur program, enrollment, sesi, laporan | Menjadi superadmin sistem |
| Cherry Trainer | Sesi/cohort penugasan | Kehadiran, observasi, remedial, signoff yang diizinkan | Mengakses seluruh data perusahaan lain |
| Client Owner | Organisasi/outlet yang sah | Lihat tim, program, ringkasan asesmen resmi | Melihat data pribadi B2C atau klien lain |
| Client Manager / Head Bar | Outlet atau peran tertentu | Pantau tim, penjadwalan; nilai praktik jika diotorisasi | Mengubah grading final tanpa otorisasi |
| Learner / Barista | Program sendiri | Baca konten yang ditugaskan, kerjakan tugas, lihat hasil pribadi | Melihat nilai rekan, membaca SOP klien lain |

Satu `user_id` dapat memiliki banyak membership, beberapa role dan beberapa penugasan; role tidak diperlakukan sebagai satu string global. Semua privileged operation harus memeriksa permission aktif pada server. Data otorisasi tidak berasal dari user-editable metadata.

## 6. Product model

### 6.1 Hierarki

`Organization → Outlet → Program (version) → Cohort → Enrollment → Learning/Practical Events → Competency Record`.

- Organization bisa punya banyak outlet; satu outlet awal dibuat otomatis.
- Program dapat berasal dari template Cherry Edu maupun custom.
- Cohort adalah satu angkatan/timeline pelaksanaan; barista dari beberapa outlet bisa ikut bila diizinkan.
- Program steps adalah unit assignment: materi, kuis, aktivitas, sesi, practice, signoff.
- Competency menjadi hasil yang diukur; modul hanya salah satu kendaraan belajar.

### 6.2 Jenis konten

1. **Linked Cherry Edu content:** referensi ke canonical lesson/path/quiz; tidak menggandakan body.
2. **B2B learning content:** teks, gambar, dokumen SOP, aktivitas interaktif buatan trainer/admin.
3. **Practical activity:** aktivitas sesi offline/observasi.
4. **Assessment checkpoint:** kuis/ujian/prosedur dengan syarat lulus.
5. **Reference material:** panduan operasional yang tidak otomatis memberi progres kompetensi.

### 6.3 Jenis program

- Standard onboarding (Foundation + Barista pilihan).
- Custom client curriculum (Foundation/Barista + SOP spesifik).
- Targeted skill improvement (gap tertentu).

## 7. Functional requirements dan acceptance criteria

### FR-01 — Create organization / tenant [P0]

Admin memasukkan identitas bisnis, kontak owner, outlet pertama, kemudian memilih nama URL (slug) yang unik. Aktivasi menyebabkan satu workspace dan konfigurasi tenant terbuat.

**Acceptance:**
- Admin dapat melihat ringkasan sebelum aktivasi, dan memperbaiki data tanpa kehilangan tahap sebelumnya.
- Pengiriman ulang request aktivasi tidak membuat tenant duplikat (idempotency key).
- Slug collision, organisasi mirip, email kontak salah ditangani dengan pesan yang jelas.
- User tanpa permission `platform_admin` mendapat 403 tanpa data detail.

### FR-02 — Invite, login, identity linking [P0]

Undangan ke owner, barista, head bar, trainer. Login Google/email menggunakan identitas Supabase Auth project yang sama tanpa otomatis menciptakan identitas kedua.

**Acceptance:**
- Undangan punya masa berlaku, single acceptance dan status pending/accepted/expired/revoked.
- Email yang sudah punya akun Cherry Edu ditautkan setelah autentikasi dan verifikasi; tidak membuat user baru.
- Invite yang salah dapat dicabut; membership nonaktif langsung kehilangan akses.
- Redirect login tervalidasi allowlist; tidak ada open redirect/token di URL log.
- Akun pribadi Cherry Edu tetap ada setelah keluar dari bisnis.

### FR-03 — Org/outlet & RBAC [P0]

Keanggotaan organisasi dan penugasan outlet/program. Owner bisa membatasi manager/head bar pada outlet tertentu.

**Acceptance:**
- User A di tenant A tidak dapat mendapatkan data tenant B dengan mengganti URL/ID/header/body request.
- Trainer lintas tenant hanya melihat sesi dan learners assigned, bukan semua records tenant.
- Owner dari tenant A tidak bisa mengundang diri sendiri ke tenant B dengan menebak ID.
- Perubahan membership dicatat dengan actor, waktu, dan alasan pada tindakan sensitif.

### FR-04 — Program builder [P0]

Admin membuat program dari template, memilih module/lesson Foundation+Barista, mengurutkan step, menambah SOP/kegiatan offline, menetapkan required/optional, dan menyimpan versi yang dipublikasikan.

**Acceptance:**
- Preview program menampilkan aktivitas, tujuan kompetensi, estimated effort, gates dan siapa yang menilai.
- Program versi published immutable; perubahan membuat versi baru, kecuali metadata non-pedagogis tertentu.
- System menolak prerequisite yang membentuk siklus (DAG validation).
- Linked lesson/quiz harus menunjuk canonical ID valid; konten unpublished tidak bisa diberikan kecuali entitlement/aturan resmi mengizinkan.
- UI membedakan admin-only "Belum diterbitkan" dari konten yang benar-benar ditayangkan untuk siswa.

### FR-05 — Cohort & learner enrollment [P0]

Admin mengimpor peserta via CSV/manual, menempatkan ke cohort/program, mengatur trainer, target dan lokasi. Bisa enroll belakangan.

**Acceptance:**
- Import memiliki dry run, validasi kolom, ringkasan error per baris, duplicate matching, undo terbatas sebelum undangan dikirim.
- Email yang sama boleh punya enrollment berbeda pada organisasi berbeda sesuai aturan; tidak duplikat di cohort yang sama.
- Resign → deactivation, bukan hard-delete progress audit.
- Barista pindah outlet → audit kepemilikan tetap benar.

### FR-06 — Initial diagnostic & prior learning [P0]

Teori dan observasi awal sebagai baseline. Trainer boleh menyetujui exemption pada materi tertentu berdasarkan evidence, tidak otomatis menganggap semua kompetensi dikuasai.

**Acceptance:**
- Baseline menyimpan tanggal, rubrik versi, assessor dan evidence.
- Exemption mempunyai reason dan approver; tetap bisa diwajibkan praktik untuk critical skills.
- Owner bisa melihat perubahan baseline → sesudah, hanya jika rubrik/ukuran sebanding.

### FR-07 — Learning deep-link + access [P0]

Barista membuka materi dari Teams langsung menuju lesson di Cherry Edu utama.

**Acceptance:**
- Tidak mencari materi manual di katalog.
- Hak akses B2B dibatasi program yang ditugaskan; tidak otomatis menaikkan akun ke Pro global.
- Server mengecek entitlement pada akses konten, tidak hanya menyembunyikan tombol.
- Status lesson di Teams konsisten dengan canonical progress saat update diterima.
- Jika B2C sedang down → pesan sementara & retry, status yang terakhir terverifikasi jelas.

### FR-08 — Online quiz / formal exam [P0]

Sistem menyediakan kuis latihan, kuis checkpoint dan ujian formal (berbeda aturan), semuanya server-validated.

**Acceptance:**
- Passing criteria, max attempts, cooldown dan feedback mode ditentukan versi program.
- Soal dan kunci jawaban formal tidak terbuka pada peserta melalui client API sebelum sesuai kebijakan.
- Attempt punya start/end/status, idempotency, dan tidak dapat dikirim ulang sebagai attempt baru secara diam-diam.
- Hasil quiz dapat dijadikan syarat gate; hasil praktik tetap memerlukan validasi terpisah.
- Perubahan aturan ujian tidak mengubah penilaian terdahulu.

### FR-09 — Offline session scheduling & attendance [P0]

Trainer/admin membuat sesi, lokasi, waktu, batas peserta; memberi status booked/completed/rescheduled/cancelled. Trainer menandai kehadiran.

**Acceptance:**
- Reschedule tidak menghapus attendance/notes sebelumnya tanpa audit.
- `Absent`, `excused`, `rescheduled`, dan `not yet held` dibedakan.
- Attendance bukan sinonim `competent` atau `passed`.
- Penugasan trainer dan daftar sesi memiliki timezone Asia/Jakarta default, disimpan dengan timezone/UTC yang benar.

### FR-10 — Practical rubric & trainer signoff [P0]

Setiap kompetensi memiliki kriteria observable, level deskripsi yang jelas, critical fail jika relevan, evidence dan signoff.

**Acceptance:**
- Rubrik dipilih berdasarkan version yang melekat pada program.
- Trainer menilai per kriteria, bukan cuma memilih satu angka keseluruhan.
- Catatan wajib ketika memilih `not_yet_competent` atau critical fail; bukti foto/video optional tergantung izin.
- Sesi penilaian dapat disimpan sebagian sebagai local/server draft, tetapi tidak dihitung resmi sebelum di-submit & acknowledged server.
- Signoff immutable; perbaikan melalui amendment dengan actor/reason/timestamp.
- Hanya role authorized dan assigned yang dapat signoff, tetap memerlukan permission check saat commit.

### FR-11 — Competency status & gates [P0]

Status: `not_started`, `learning`, `needs_practice`, `awaiting_assessment`, `competent`, `reassessment_due`. `failed` boleh hanya merujuk **attempt**, bukan label permanen pada barista.

**Acceptance:**
- Satu kompetensi dinyatakan `competent` hanya jika mandatory evidence, threshold rubric dan approvals terpenuhi.
- Gate mengevaluasi rule server-side; manual override dengan alasan/otorisasi khusus, tidak menghapus evidence.
- Optional learning step tidak menghalangi advancement; prerequisite harus dievaluasi per program version.
- Reassessment_due tidak menghilangkan credential/riwayat validasi sebelumnya; status current harus jelas.

### FR-12 — Targeted remedial [P0]

Trainer menetapkan latihan spesifik kepada peserta yang belum memenuhi kriteria, dan jadwal evaluasi ulang.

**Acceptance:**
- Tautan ke competency gap dan rubric criterion spesifik.
- Menyelesaikan remedial task tidak otomatis kompeten tanpa evidence/penilaian ulang jika diwajibkan.
- Owner dan barista melihat status yang sesuai permission.

### FR-13 — Owner insights & reports [P0]

Owner mendapatkan overview kesiapan tim, per individu, per outlet, status assessment, blocker, baseline vs hasil, tindak lanjut.

**Acceptance:**
- "5/8 kompeten" harus menjelaskan definisi dan populasi target (bukan persentase samar).
- "Belum dinilai" tidak dihitung sebagai "gagal" dan data tak tersedia tidak ditampilkan sebagai nol.
- Tidak ada ranking publik berdasar XP/streak/kecepatan belajar.
- Hanya data assigned B2B program yang ditampilkan, bukan full B2C browsing history.
- Semua agregasi terfilter `organization_id` dan membership scope.

### FR-14 — Notification & communication [P0]

Email invite, reminder latihan/sesi, hasil assessment tersedia, sesi berubah, remedial assigned. In-app activity feed cukup untuk MVP.

**Acceptance:**
- User dapat memilih preferensi non-transaksional.
- Rate limiting agar tidak spam; no sensitive score/evidence dalam email preview.
- Delivery failure dilog dan bisa di-retry aman.
- Copy berbahasa Indonesia, tidak menekan/mempermalukan karyawan.

### FR-15 — Auditability & privacy [P0]

Audit signoff, invite, role assignment, overrides, program publishing, score amendments, data export dan deactivation.

**Acceptance:**
- Event audit append-only untuk kejadian penting, menyimpan `actor`, `action`, `object`, `tenant`, `before/after summary`, `reason`, `timestamp`.
- Data sensitif tidak ditulis mentah ke application log, email, analytics ataupun error reports.
- Retensi dan data deletion memiliki kebijakan terpisah untuk rekam program perusahaan dan identitas pribadi.

### FR-16 — Offline-safe drafts / retry [P0 limited]

Materi cached dapat dibaca sesuai izin; penilaian praktik bisa disimpan lokal sebagai pending. Final submission/approval membutuhkan acknowledgment server.

**Acceptance:**
- Queue lokal diberi ID unik dan idempotency; tidak melakukan last-write-wins untuk record resmi.
- Kegagalan sync ditampilkan eksplisit; beda status local-save vs server-save.
- User bisa merekonsiliasi konflik; tidak boleh menganggap offline note sebagai official result.
- Data lokal sensitif dibersihkan sesuai kebijakan ketika logout/deprovision; kuis formal tetap online MVP.

### FR-17 — Reference quick access [P1]

SOP/panduan kerja praktis yang dapat dibuka saat shift. Aktivitas membaca referensi **tidak** otomatis dihitung sebagai competency pass.

### FR-18 — Administrative monitoring [P0]

Admin dapat melihat undangan pending, integrasi gagal, keterangan data belum sync, sesi belum memiliki trainer, asesmen tertunda, dan potensi ketidakcocokan nilai; semua error diarahkan ke tindakan pemulihan, bukan sekadar alert teknis.

## 8. Model pedagogi

### 8.1 Mapping kompetensi

`Competency → Objective → Required knowledge/skill → Source content → Practice → Rubric criteria → Evidence → Signoff`.

Sumber referensi resmi: SKKNI Kepmenaker 32/2023 untuk penyediaan minuman kopi di kedai UMKM, materi dan prinsip teknis Cherry Edu, serta kebutuhan SOP klien. Mencantumkan `source_standard_ref` pada kompetensi jika relevan; **jangan mengklaim semua konten otomatis tersertifikasi SKKNI/SCA.**

### 8.2 Format latihan

- Pemahaman konsep: pertanyaan "mengapa" dan penjelasan variabel, bukan hafalan angka tetap.
- Skenario adaptif: kasus espresso under/over extraction, perubahan biji, workflow jam sibuk, request unik pelanggan.
- Eksperimen terkontrol: hipotesis, ubah satu variabel, catat hasil, simpulkan.
- Praktik: observasi nyata, catatan trainer, umpan balik spesifik, retest.

### 8.3 Contoh kompetensi Espresso Troubleshooting

Objective: mampu memeriksa hasil ekstraksi, mengidentifikasi dugaan penyebab, mengubah variabel dengan alasan, dan mengevaluasi ulang hasil. Rubrik mencakup observasi proses, keputusan teknis dan komunikasi alasan. Takaran rasio atau waktu tidak dijadikan satu-satunya kriteria kaku. Critical errors (mis. praktik tidak aman) didefinisikan eksplisit oleh trainer, bukan hasil tebakan AI.

### 8.4 Program integrity

- Published program snapshot/version tidak berubah secara retroaktif.
- Revisions dan equivalencies antar-versi dapat dikelola, tidak otomatis memutihkan/mereset capaian.
- Quiz attempts dan practical assessment mempunyai basis pengukuran dan audit berbeda.
- Status `competent` bergantung pada bukti sesuai program, bukan tindakan admin klik selesai.

## 9. Reporting semantics

| Metrik | Definisi | Jangan dihitung dari |
|---|---|---|
| Learning completion | Required step yang valid selesai / semua required learning steps | Membuka halaman saja |
| Practice coverage | Praktik wajib telah diamati / praktik wajib terjadwal untuk peserta | Kehadiran semata |
| Verified competency | Kompetensi wajib yang telah disahkan / kompetensi wajib dalam program version | Skor kuis atau XP semata |
| Assessment waiting | Kompetensi yang siap dinilai tetapi belum dinilai | Gagal |
| Baseline improvement | Perubahan penilaian dengan rubrik & metode sebanding | Perbandingan dua skor berbeda metode |
| Program completion | Semua gate wajib dan rule selesai | Self check-in |

Jika denominator nol atau belum valid, tampil "Belum ada data" atau "Tidak berlaku", bukan `0%` ataupun `100%`.

## 10. UX & content requirements

- Mobile breakpoint test 320/360/390/430 CSS px serta tablet/desktop.
- Satu primary CTA dan ringkasan status jelas per layar; rendah beban kognitif.
- Body umum ~16px; touch target internal >=44–48px; WCAG 2.2 AA goal.
- Navigasi barista 3 tujuan (Beranda, Belajar, Progres); owner 4; trainer 3.
- No mandatory video; teks, foto/diagram dan latihan interaktif mendukung inti pengalaman.
- Bahasa manusiawi, tidak ada scaffolding developer di UI user: `TODO`, `draft`, `preview`, `dummy data`, internal IDs, API errors mentah.
- Loading/empty/partial/offline/sync conflict/unauthorized/expired invite/suspended state wajib didesain.
- Tidak menampilkan nilai pribadi siswa lain atau leaderboard antarkaryawan.
- **UI-VIS-01 — Visual brand discipline [P0]:** seluruh layar wajib memakai design tokens yang berasal dari brand Cherry Edu yang telah diverifikasi, tanpa mengklaim HEX spekulatif sebagai warna resmi.
- **UI-VIS-02 — Hard visual bans [P0]:** dilarang neon green/lime, green glow, warna merah terang tanpa fungsi semantik, gradient menyala, colored glow/shadow, dan aksen acak di luar brand.
- **UI-VIS-03 — No useless pills [P0]:** pill/chip/badge hanya untuk status/filter/interaksi yang jelas; reviewer wajib dapat menjelaskan fungsi atau menghapusnya.
- **UI-VIS-04 — Calm semantic UX [P0]:** status perlu latihan/menunggu tidak boleh ditampilkan seperti error agresif; semua status memiliki label, tidak bergantung pada warna. Hindari card berlapis, wall-of-KPI, dan chart pelangi.
- **UI-VIS-05 — Screenshot gate [P0]:** QA screenshot empat layar utama pada 320/360/390/430px dan desktop; audit brand coherence, absence of glow/neon, pills, hierarchy, touch size, contrast WCAG 2.2 AA. Detail di `05_UI_Visual_Direction_Guardrails.md`.

## 11. Technical architecture & constraints

### 11.1 Separation

- `cherryedu` B2C existing code/repo tetap menjadi produk utama dan canonical content source.
- `cherryedu-teams` repo/deploy independen; domain usulan `teams.cherrycoffeeroastery.com` (belum dikonfigurasi).
- Supabase project yang sama boleh digunakan dengan **private `b2b` schema** dan server APIs yang membatasi operations. Jangan otomatis expose `b2b` ke PostgREST; jika expose sebagian lewat schema `api`, buat grants + RLS yang spesifik.
- Data per organisasi **row-isolated**, bukan DB per pelanggan.
- Auth menggunakan satu Supabase Auth project; sesi lintas origin **tidak otomatis** berbagi. Desain OAuth redirects / SSR cookie strategy dengan pengujian security.

### 11.2 Boundaries

- Learning Service adalah sumber kebenaran progres lesson/quiz. B2B hanya mengonsumsi authorized events/results dan menyimpan assignment/personal plan.
- B2B adalah sumber kebenaran organisasi, program, schedule, practical assessments, dan competency signoff.
- Satu arah per event; idempotent integration events/outbox; retry tanpa duplikasi. Hindari browser sebagai sumber data otoritatif.
- Tidak boleh membagi service role key ke frontend; akses sensitif lewat server.

### 11.3 Performance & resilience target (pilot acceptance targets)

- Landing dashboard usable dalam <=3 detik p75 pada skenario uji Android kelas menengah + jaringan 4G terkontrol (ukur setelah implementasi; target, bukan janji terverifikasi).
- Autosave state acknowledgment jelas; timeouts punya retry aman.
- Tingkat keberhasilan integritas penilaian: 100% tanpa kehilangan record pada skenario QA yang ditetapkan.
- Semua operasi kritis memiliki idempotency key, authz server dan error audit.

## 12. Security, privacy, compliance

1. RLS + least privilege GRANT pada public/exposed tables; test positive/negative sebagai user biasa, owner A/B, trainer A/B, unauth.
2. Private schema tidak diekspos; API server sendiri harus validasi auth dan tenant scope di setiap operasi, termasuk file/exports.
3. Session security untuk kehilangan akses/resign; hindari user-editable metadata sebagai trusted role.
4. Protect token/invite: hashed secret, expiry, single-use, log redaction, rate limits.
5. Encrypt transit; private storage for evidence; signed URLs short lived & tenant-authorized.
6. Breach response dan data retention, UU PDP No. 27/2022, kebijakan privasi dan DPA per layanan.
7. Auditor internal review: privileged function search_path, EXECUTE grants, auth password policy, public demo access.
8. Scan CI for `.env`, secrets and prototype/demo credentials; negative security tests release-gating.

## 13. UX-first acceptance scenarios

**S01:** Barista A punya akun CherryEdu B2C; admin mengundang email itu; A login Google dan tiba di program assigned tanpa identity duplicate.  
**S02:** Barista A buka lesson Foundation dari Teams, menyelesaikan dan kembali; hasil server valid muncul pada Teams setelah event sync.  
**S03:** Dua barista mengerjakan kuis yang sama tetapi memiliki attempt counts terpisah.  
**S04:** Trainer mengobservasi espresso untuk barista A, memberikan sedikit arahan, menetapkan remedial, belum menandai kompeten.  
**S05:** Owner B tidak dapat melihat barista A pada URL/API/file export walaupun mengetahui IDs.  
**S06:** Trainer offline menyimpan rubrik A, kembali online dan sinkron; UI menyebut kapan record resmi diterima.  
**S07:** Admin mengubah standar dari v1 menjadi v2, peserta v1 tidak terubah diam-diam.  
**S08:** Barista resign, akses tenant dicabut, akun personal B2C tetap valid.  
**S09:** Absen karena perubahan sesi tidak ditandai failed.  
**S10:** Kuis formal tidak mengekspos answer key ke participant API.

## 14. Testing & release gates

### Gate 0 — Cherry Edu core remediation (blocking)

- RLS/profiles/transactions/auth audit, perbaikan dan regression suite selesai.
- Canonical progress & quiz attempts tersimpan di server; multi-device persistence test lulus.
- Migrasi localStorage diproteksi idempotency dan rollback; data lama tidak hilang.
- Demo auth tidak bisa masuk sebagai privileged identity di produksi.
- Security advisor findings ditriage dan ditutup dengan evidence atau documented safe exception.

### Gate 1 — Schema B2B dan APIs

- DDL migration pada development/staging dahulu, reviewed dan reversible.
- Privileged API + RLS tenant isolation suite lulus.
- Invitation/acceptance/deactivation audited.
- Test idempotent provisioning, assignment, quiz event ingestion, signoff.

### Gate 2 — Product UX & pilot

- Semua layar P0 minimal state normal/loading/empty/error/offline diuji.
- Pengujian tugas manusia dengan barista, owner, trainer, admin; findings severity high terselesaikan.
- No user-facing copy internal, video dependency, broken deep links.
- Minimal satu pilot lintas sesi teori+praktik+laporan selesai end-to-end.

### Gate 3 — Production readiness

- Owner consent, data retention, privacy notice, audit trail, role provisioning siap.
- Monitoring integration failures, backup recovery, restore tested, rollback documented.
- CI e2e multi-role + multi-tenant security all green.
- Release approval Cherry Edu; production deploy manual terpisah dari pekerjaan desain.

## 15. Proposed pilot

- Pilih 2–3 coffee shop dengan struktur berbeda (owner-operasional, multi-shift, multi-outlet bila memungkinkan).
- Barista pengalaman campuran, head bar, trainer dan admin nyata.
- Jalankan program Foundation + Barista terpilih, baseline → online → offline → remedial → owner review.
- Uji task completion, waktu penilaian trainer, kebingungan owner, masalah auth, koneksi, dan kualitas data.
- Jangan menyebut target engagement sebagai hasil sampai diuji.

## 16. Prioritization

**P0 MVP:** tenant, RBAC, invitations, canonical progress integration, program template+version, enrollment, diagnostic, quiz gates, sessions, rubric, signoff, remedial, barista home, owner actionable reporting, trainer workflow, audit, offline-safe draft, admin exceptions.

**P1:** quick-reference SOP, configurable report export, detailed rubric authoring, multi-outlet analytics, richer notifications, optional photo evidence.

**P2:** integrated POS KPIs, predictive recommendation, AI coach, native app, advanced certification ecosystem, payment self-service.

## 17. Product decisions still needing validation

- Siapa yang boleh menandatangani asesmen? Hanya trainer Cherry Edu atau head bar klien yang dilatih dan diotorisasi?
- Bentuk kontrak layanan: program sekali jalan vs retainer; dampak pada entitlement setelah kontrak selesai.
- Status laporan hasil setelah karyawan resign atau program berakhir.
- Kebijakan jumlah retake ujian dan interval minimum per program.
- Apakah setiap barista punya email sendiri atau butuh alternative invite identity? (Default MVP: email/Google unik.)
- SOP internal klien boleh diunduh atau hanya dibaca dalam aplikasi?

## 18. Explicit anti-patterns

- Menambah `organization_id` ke setiap B2C table tanpa memahami ownership / RLS.
- Dua akun user berbeda untuk orang yang sama karena B2B app baru.
- Menyimpan progress per browser dan menyajikannya sebagai rekap perusahaan.
- Menggunakan skill score 1–4 tanpa anchors observable.
- Otomatis menganggap "menyelesaikan video" sebagai kompetensi.
- Mengubah published program dan mengubah nilai lama retroaktif.
- Memasukkan service_role secret dalam `NEXT_PUBLIC_*` / React client.
- Menghapus progress ketika user pindah perusahaan.
- Menampilkan data dari demo seeded sebagai data pelanggan nyata.

## 19. References

1. Supabase securing Data API: https://supabase.com/docs/guides/api/securing-your-api
2. Supabase RLS: https://supabase.com/docs/guides/database/postgres/row-level-security
3. Supabase Auth SSR: https://supabase.com/docs/guides/auth/server-side/creating-a-client
4. W3C WCAG 2.2: https://www.w3.org/TR/WCAG22/
5. SKKNI coffee shop UMKM Kepmenaker 32/2023: https://jdih.kemnaker.go.id/peraturan/detail/2345/keputusan-menteri-ketenagakerjaan-nomor-32-tahun-2023
6. UU Pelindungan Data Pribadi No. 27/2022: https://peraturan.bpk.go.id/Details/229798/uu-no-27-tahun-2022

---

**Kesimpulan PRD:** validasi keamanan dan canonical progress Cherry Edu adalah dependency blocking sebelum pengembangan B2B production. PRD ini bukan instruksi untuk memodifikasi production tanpa review dan rencana rollback.
