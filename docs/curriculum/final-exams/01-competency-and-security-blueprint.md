# CherryEdu | Ujian Akhir Sertifikasi — Enam Learning Path

**Status:** perancangan bank ujian dan arsitektur penilaian pada branch terpisah. Bukan materi siswa yang sudah dipublikasikan, bukan izin terbit sertifikat.  
**Sumber:** integrasi kurikulum pada `preview/cherryedu-curated-2026-10`, commit QA `8857b351def64d7614f9b948409b233e42de9df7`, seluruh tujuh workflow lulus.  
**Batas:** tidak menyentuh `main`, production atau data peserta. Tidak ada video demonstrasi dalam versi ini.

## Tujuan akademik

Ujian harus membuktikan transfer pengetahuan setelah siswa menyelesaikan pembelajaran: mampu membaca bukti yang belum lengkap, memilih tindakan yang masuk akal, membuat perhitungan dengan satuan tepat, menjelaskan risiko, dan merevisi keputusan ketika kondisi berubah. Tidak boleh memakai ulang pertanyaan latihan, vignette identik, angka mentah, atau pilihan jawaban yang hanya diterjemahkan ulang.

**Pembedaan sertifikasi:** nama menu boleh berbunyi “Ujian Akhir Sertifikasi [nama path]”, tetapi jika lulus sistem hanya dapat menerbitkan **sertifikat kelulusan pembelajaran CherryEdu** dengan keterangan lingkup *teori dan analisis kasus*. Bukan sertifikasi kompetensi kerja BNSP, lisensi SCA/Q Grader, atau bukti praktik langsung. Keterampilan steam-wand, roasting, sensory panel dan keselamatan fasilitas tetap perlu penguji praktik yang memenuhi kualifikasi.

### Peta asesmen awal

| Path | Modul | Pelajaran | Target soal tertutup baru | Kasus terstruktur tambahan | Lingkup/penekanan |
|---|---:|---:|---:|---:|---|
| Memahami Kopi dari Hulu ke Hilir | 7 | 36 | 21 (3/modul) | 1 rangkaian hulu–hilir | bukti versus asumsi, agronomi, processing, roast, seduh, sensori, sejarah/ekonomi |
| Barista Specialization | 12 | 68 | 36 (3/modul) | 2 kasus operasi bar | diagnosis tidak berbasis hafalan, pelayanan adaptif, alergen, SOP |
| Home Brewer Specialization | 10 | 50 | 30 (3/modul) | 1 eksperimen A/B | satuan dose/water/beverage, variabel seduh, rasa dan replikasi |
| Roaster Specialization | 10 | 40 | 30 (3/modul) | 2 keputusan QC/produksi | moisture vs aw, heat transfer, yield, log RoR, hold/release |
| Q Grader & Sensory Specialist | 10 | 40 | 30 (3/modul) | 2 analisis data panel | physical, descriptive, affective, extrinsic, bias, uncertainty dan CVA |
| Business Roastery | 21 | 84 | 42 (2/modul) | 2 studi komersial multi-tahap | demand, model, legal, sourcing, freight, HPP, margin, cash, wholesale, ekspor |

**Total target 189 soal tertutup baru + 10 tugas kasus**. Angka ini adalah rencana cakupan, bukan klaim bahwa soal telah ditulis atau diverifikasi. Distribusi kesulitan: 20% pemahaman mendalam, 60% penerapan/analisis dalam skenario baru, 20% penilaian keputusan dengan informasi berubah. Hindari jebakan linguistik, 'semua benar', distraktor yang jelas salah, angka yang tidak punya sumber, atau pertanyaan yang dapat ditebak melalui panjang jawaban.

## Konstruk dan objektif yang harus diuji

- **Foundation:** menyatukan keputusan dari kebun sampai cangkir dan membedakan bukti dari cerita pemasaran; contoh soal baru harus melampaui taksonomi satu fakta dan cupping scoring konvensional.
- **Barista:** troubleshooting lintas kondisi, koreksi SOP layanan, komunikasi permintaan tak biasa, waktu, kontaminasi silang dan pengambilan keputusan di bawah kendala.
- **Home Brewer:** memilih eksperimen berikutnya setelah informasi yang bertentangan, mengenali kegagalan kontrol, menginterpretasi angka dose/TDS/EY *dengan asumsi eksplisit*.
- **Roaster:** menginterpretasi perubahan sensor vs proses nyata, memutuskan HOLD, mengalokasi produksi saleable, toleransi dan traceability lot tanpa mengarang batas keselamatan universal.
- **Sensory:** memahami CVA dan variabel pengganggu, variabilitas panel, blind coding, keterbatasan inferensi dan aturan klaim mutu, tanpa menyiratkan Q Grader resmi.
- **Business:** kuantitas diterima/lolos QC/yield dan landed cost, biaya serapan vs contribution, minimum freight yang direferensikan hanya sebagai indikator, cash trough intrahari dan port vs door freight, go/no-go ekspansi.

## Ketentuan mutu butir (release blockers)

1. **Independensi dari latihan:** pasangan soal akhir versus seluruh kuis formatif, interaksi, kasus dan contoh yang ada dibandingkan melalui normalized text overlap, kesamaan struktur keputusan dan *manual semantic review*. Kesamaan tema boleh; jawaban instan atau peristiwa sama tidak.
2. **Kunci dan pembahasan:** setiap soal mempunyai 1 pilihan terbaik, satuan dan aritmetika yang diverifikasi independen, rasional mengapa setiap alternatif lebih lemah, dan materi sumber yang mendukung. Minimal dua reviewer berbeda untuk soal legal/tax, food safety, eksportasi dan perhitungan HPP.
3. **Skenario:** istilah baru didefinisikan saat pertama muncul; informasi yang diperlukan ada di stem. Tidak menguji aturan/alat yang belum pernah diajarkan. Kasus mengikuti revisi keputusan saat bukti bertambah.
4. **UX:** jawaban dan hasil tidak menghilang ketika layar merender ulang; tombol menjelaskan langkah berikutnya; navigasi keyboard serta mobile; pelajar dapat melihat soal yang terlewat sebelum submit. Tidak menampilkan kunci/pembahasan sebelum seluruh ujian dikumpulkan.
5. **Tingkat kelulusan:** rekomendasi awal MCQ ≥80% **dan** tugas kasus memenuhi rubrik kritikal (terutama keselamatan, legal dan akuntansi); angka/attempt limits belum menjadi kebijakan final tanpa persetujuan pemilik akademik dan uji kesulitan soal.
6. **Pelaksanaan:** soal tertutup objektif bisa dinilai mesin di server, tugas kasus membutuhkan penilaian berbasis rubrik oleh asesor, atau rubrik digital yang benar-benar diverifikasi. Jangan menyatakan lulus otomatis hanya dari jumlah kata.
7. **Versi ujian:** setiap butir disimpan dengan `question_version`, mapping learning outcome, peninjau, referensi dan timestamp. Revisi bank tidak boleh mengubah hasil historis.
8. **Aksesibilitas dan keamanan:** respons mobile, timer server-side jika ada, recover navigasi tanpa kehilangan jawaban, pembatasan request/attempt, dan tidak menerima skor dari klien.
9. **Sertifikat:** sertifikat ditandatangani/diterbitkan dari server setelah verifikasi otoritatif, nomor unik, jejak audit dan halaman verifikasi berbasis DB. Sertifikat latihan/preview tidak boleh tampak sebagai kredensial nyata.

## Temuan teknis existing yang HARUS ditangani sebelum penerbitan sertifikat

Konstruksi V1 saat ini di `lib/store.tsx` menilai `submitQuiz` **di klien**, memakai array pertanyaan dengan `answers[].is_correct` yang tersedia di browser, membuat nomor sertifikat dengan `Math.random()`, dan menyimpan attempt/sertifikat melalui state yang disinkronkan ke penyimpanan browser. Ini dapat dipakai untuk **demo alur UX saja**, tetapi tidak boleh digunakan sebagai bukti kelulusan baru yang dapat dipercaya. Jangan menyalin atau mengaktifkan V1 `quiz-final-*` untuk enam pengganti tanpa audit isi, autentikasi dan persistensi resmi.

### Minimum arsitektur sisi server sebelum enrollment

- Staging-only schema: `exam_versions`, `exam_items`, `exam_item_versions`, `exam_blueprints`, `exam_attempts`, `exam_answers`, `exam_reviews`, `learning_certificates`, `certificate_events`. Miliki kebijakan idempotency, unique keys dan immutable submitted snapshots.
- `GET /api/.../exams/:slug`: kebutuhan eligible participant, blueprint/availability, **tanpa** kunci jawaban atau metadata correct.
- `POST /api/.../attempts`: server membuat attempt dengan identitas dari auth yang tervalidasi; expiry/cooldown dari server; acak terbatas dengan coverage tiap modul.
- `PATCH /api/.../attempts/:id`: menyimpan respons ke server dengan batas identitas, rate limit dan log integritas; tidak menerima score.
- `POST /api/.../attempts/:id/submit`: transaksi sekali pakai; nilai objective di server, sertifikasi tertahan jika ada manual rubric/academic exception; kunci jawaban disimpan hanya di server.
- `GET /api/.../results/:attemptId`: hanya peserta/asesor berwenang; hasil dilengkapi kelemahan kompetensi, bukan dump seluruh answer bank kepada pengguna sebelum retake.
- Sertifikat: issuer service terpisah, idempotent, rujukan `exam_version`, `scorer_version`, `reviewer` dan sumber enrollment; tidak pernah diterbitkan di branch review atau staging untuk user nyata.

## Jalur pengerjaan

1. Selesaikan seluruh bank baru 189 soal + 10 kasus dan audit overlap secara otomatis dan manual.
2. Review praktisi + editorial; validasi kunci dua orang; hasil audit disimpan dalam log non-PII.
3. Implementasi UI ujian menggunakan komponen desain kurikulum yang sudah lolos CI. **Preview only, without issuance.**
4. Implementasi sistem server auth, grading, audit dan certificate issuer pada staging setelah security review.
5. Uji kelompok pemula dan ahli, lakukan calibrasi tingkat kesulitan dan ambang kelulusan dengan data nyata.
6. Persetujuan pemilik akademik dan izin rilis eksplisit. **Tidak ada merge/deploy production otomatis.**
