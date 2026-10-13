# Cherry Edu Teams — UI Art Direction & Visual Guardrails v1.1

**Tanggal:** 13 Oktober 2026  
**Status:** WAJIB diikuti oleh designer, Antigravity/Codex, frontend developer, dan QA.  
**Asal keputusan:** feedback langsung pemilik produk setelah eksplorasi mockup UI.  
**Cakupan:** barista, owner, trainer, admin, responsive/mobile web, halaman di Cherry Edu utama yang ditautkan dari Teams.

## 1. Arah visual yang disetujui

UI harus **normal, matang, nyaman dilihat, bersih, ramah handphone, dan konsisten dengan warna brand Cherry Edu**. Karakternya minimal dengan rasa editorial yang halus, bukan aplikasi dashboard korporat generik dan bukan display konsep visual yang berlebihan. Tampilkan substansi belajar dan tugas operasional sebagai fokus utama. Gunakan white space yang terukur, tipografi mudah dibaca, dan penekanan hanya pada hal yang penting.

> **Larangan visual (hard constraints):** tidak ada warna hijau neon / lime fluorescent, green glow, neon outline, gradient menyala, merah terang yang tidak jelas tujuan atau terlalu agresif, warna acak di luar brand, dan **pill / rounded badge hanya untuk dekorasi**. Jangan menambahkan glow, shadow berwarna, neon hover, indikator mencolok atau floating pills untuk memberi kesan modern.

Mockup multi-panel yang dihasilkan pada percakapan tanggal 13 Oktober 2026 adalah **eksplorasi awal, bukan desain final yang telah disetujui**. Jangan menjadikannya referensi wajib atau menyalin warna status, kelimpahan card, maupun pill dari mockup tersebut. Dokumen ini mengesampingkan pilihan visual yang bertentangan dalam mockup eksplorasi.

## 2. Brand color: penggunaan, bukan penebakan

- **Sumber kebenaran:** ambil color tokens dan identitas visual dari Cherry Edu yang telah disetujui di brand atau kode aktual. Periksa tokens/logo existing sebelum menetapkan HEX. **Jangan mengarang palette HEX baru dan mengklaimnya sebagai official brand.**
- **Canvas:** latar netral atau hangat lembut yang sesuai warna brand, bukan background hijau terang/merah terang.
- **Surface:** putih atau netral lembut; kontras sedikit, separator seperlunya, tidak memerlukan kartu bersarang untuk semua informasi.
- **Teks:** warna netral gelap berkontras tinggi; hierarki melalui ukuran dan weight, bukan aneka warna.
- **Primary action:** satu warna aksi brand yang konsisten; jangan mengubah-ubah CTA utama antara hijau, merah, oranye, atau ungu pada layar yang berbeda.
- **Semantic status:** status sukses/perlu perhatian/error boleh memakai warna **terkendali dan tidak neon**, hanya bila membantu pemahaman. Merah dipakai untuk error/risiko/destruktif yang nyata, bukan untuk progress normal atau dekorasi. Semua status wajib punya label yang dapat dibaca tanpa warna.
- Jangan memakai dua atau lebih warna aksen yang bersaing dalam satu viewport hanya untuk 'mempercantik' UI. Tetapkan semantic design tokens terpusat dan uji kontras terhadap WCAG 2.2 AA.

## 3. Shape, card, badge, dan depth

- **Pill:** default **tidak**. Boleh dipakai bila memang menjelaskan status atau merupakan filter yang interaktif, dan jika bentuk tersebut merupakan pola konsisten dalam sistem desain. Lebih sering gunakan teks status, baris terstruktur, atau label sederhana.
- **Corner radius:** moderat dan konsisten. Hindari semua elemen dibulatkan menjadi kapsul, terutama heading, chip dekoratif, menu, dan blok informasi tanpa fungsi.
- **Card:** gunakan ketika menunjukkan batas kelompok informasi/aksi yang benar-benar berbeda. Hindari card di dalam card secara berlapis, deretan kartu KPI tak penting, atau kartu untuk setiap satu baris.
- **Border/shadow:** garis pemisah lembut jika perlu; elevation hanya untuk layer yang secara fungsional berada di atas konten. **No glow** termasuk glow warna hijau pada border, focus, progress, chart, maupun CTA.
- **Chart/progress:** pakai warna brand + netral secukupnya; jangan gunakan pelangi warna status, grafik dekoratif, atau angka simulasi yang tidak berlabel sebagai data demo.

## 4. Tipografi, layout, dan mobile interaction

- Prioritas urutan: **apa yang harus dilakukan → konteks singkat → progres/status → detail sekunder**; informasi owner/trainer menyesuaikan tindakan yang mereka perlu ambil.
- Body nyaman dibaca sekitar 16px dan mampu membesar; heading ringkas, tidak memerlukan subheadline dekoratif di setiap blok.
- Target sentuh utama sekitar 44–48px, bukan membuat tiap label jadi pill untuk memenuhi target sentuh.
- Barista & trainer: satu primary CTA jelas dalam konteks, navigasi ringkas, layout satu kolom pada HP, status sinkronisasi eksplisit.
- Owner: ringkasan tim berorientasi tindakan, hindari 'wall of KPI' atau pie-chart warna-warni. Admin: informasi padat namun terstruktur, desktop-first untuk editor kompleks, tetap bisa dikelola dari HP untuk tindakan penting.
- Gunakan teks dalam bahasa Indonesia yang natural: 'Perlu latihan', 'Menunggu penilaian', 'Lanjutkan belajar', 'Simpan penilaian'. Hindari slogan AI-sounding, emoji dekoratif, internal labels, `draft`, `TODO`, `preview` pada layar produksi pengguna.
- Animasi kecil hanya untuk transisi dan feedback tindakan; hormati `prefers-reduced-motion`. Tidak ada animated light beams, pulsing neon, shimmer agresif, atau animasi yang menghalangi pekerjaan.

## 5. Red / green semantic examples (bukan palette resmi)

| Peristiwa | Bentuk penyajian |
|---|---|
| Berhasil menyimpan penilaian | Teks 'Tersimpan' dan ikon jika perlu; aksen hijau lembut hanya bila selaras dengan brand |
| Menunggu validasi trainer | Teks 'Menunggu penilaian', bukan merah terang seolah gagal |
| Barista perlu latihan | Teks 'Perlu latihan', detail alasan dan tindakan; bukan flashing red atau alarm agresif |
| Error sinkronisasi | Pesan apa yang belum tersimpan, aksi 'Coba lagi'; danger treatment sesuai semantik, tetap proporsional |
| Progress 3/5 kompetensi | Bar progress atau teks pecahan dengan kontras baik; hindari glow hijau dan warna merah untuk kekurangan biasa |

## 6. UI acceptance criteria / visual QA gate

- [ ] Seluruh 4 role menggunakan brand tokens yang tervalidasi; tidak terdapat accent color acak.
- [ ] **Tidak ditemukan neon green, glow hijau, bright red dekoratif, gradient mencolok, shadow berwarna, atau pulsing attention effect.**
- [ ] Setiap pill/chip/badge dapat dijelaskan fungsi informasional atau interaksinya; bila tidak, ubah ke plain text atau hapus.
- [ ] Card dipakai karena grouping informasi, bukan sebagai template yang diulang tanpa kebutuhan.
- [ ] Status 'kompeten', 'menunggu', 'perlu latihan', 'error' dapat dibedakan dengan label meskipun layar diubah menjadi grayscale.
- [ ] Audit screenshot BAR-01, OWN-01, TRN-03, ADM-02 minimal pada 320px, 360px, 390px, 430px dan desktop; periksa kelebihan elemen, kontras, scroll horizontal, touch target, dan keyboard overlap.
- [ ] Tidak ada data fiktif tampil sebagai data pelanggan nyata; simulasi hanya di lingkungan test dan berlabel jelas.
- [ ] Reviewer visual memeriksa halaman production secara nyata sebelum release. Jangan lulus hanya dari pemeriksaan CSS/token statis.

## 7. Implementer notes

**Urutan sebelum membuat visual:** periksa brand tokens Cherry Edu yang sekarang → buat palette/token map yang dikonfirmasi → desain satu layar hero per role → validasi kegunaan mobile → baru perluas ke seluruh layar. Bila token brand belum pasti, gunakan placeholder semantic tokens di design spec, **bukan menetapkan warna resmi secara spekulatif**.

**Prioritas jika ada konflik:** instruksi pengguna terbaru tentang warna, glow, pill, dan kenyamanan visual **mengungguli eksplorasi visual terdahulu**. Tidak boleh menjadikan 'lebih eye-catching' sebagai alasan melanggar aturan ini.
