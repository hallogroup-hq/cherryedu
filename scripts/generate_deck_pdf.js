const fs = require('fs');
const path = require('path');
const { chromium } = require('@playwright/test');

const logoWhite = 'data:image/png;base64,' + fs.readFileSync(path.join(__dirname, '../public/cherry-logo-white.png')).toString('base64');
const logoColor = 'data:image/png;base64,' + fs.readFileSync(path.join(__dirname, '../public/cherry-logo.png')).toString('base64');

const htmlContent = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Cherry Edu — Master Presentation Deck</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400;1,6..72,600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    @page {
      size: 1920px 1080px;
      margin: 0;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      background: #FAF7F2;
      color: #140E0C;
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
      -webkit-font-smoothing: antialiased;
      margin: 0;
      padding: 0;
    }
    .page {
      width: 1920px;
      height: 1080px;
      page-break-after: always;
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      padding: 64px 88px 56px 88px;
      background: #FAF7F2;
    }
    .page.dark-roast {
      background: #140E0C;
      color: #FAF7F2;
    }

    /* Editorial Header */
    .slide-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 24px;
      border-bottom: 1px solid #E5DAC8;
      margin-bottom: 36px;
    }
    .dark-roast .slide-header {
      border-bottom-color: rgba(255, 255, 255, 0.12);
    }
    .brand-mark {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .brand-mark img {
      height: 38px;
      width: auto;
    }
    .brand-sub {
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      font-weight: 600;
      color: #7E1D2A;
    }
    .dark-roast .brand-sub {
      color: #EDDDA4;
    }
    .slide-tag {
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      font-weight: 600;
      color: #745E53;
      background: #F0E8DC;
      padding: 6px 14px;
      border-radius: 4px;
      border: 1px solid #E0D3C1;
    }
    .dark-roast .slide-tag {
      color: #EDDDA4;
      background: rgba(237, 221, 164, 0.1);
      border-color: rgba(237, 221, 164, 0.25);
    }

    /* Typography */
    .eyebrow {
      font-family: 'JetBrains Mono', monospace;
      font-size: 14px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      font-weight: 700;
      color: #7E1D2A;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .dark-roast .eyebrow {
      color: #EDDDA4;
    }
    .headline {
      font-family: 'Newsreader', Georgia, serif;
      font-size: 50px;
      line-height: 1.14;
      font-weight: 600;
      letter-spacing: -0.02em;
      color: #140E0C;
      margin-bottom: 14px;
      max-width: 1500px;
    }
    .dark-roast .headline {
      color: #FCFAF7;
    }
    .subhead {
      font-size: 21px;
      line-height: 1.5;
      color: #5A473D;
      margin-bottom: 38px;
      max-width: 1400px;
      font-weight: 400;
    }
    .dark-roast .subhead {
      color: #D4C7C0;
    }

    /* Content Layouts */
    .content-body {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    /* Footer */
    .slide-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 20px;
      border-top: 1px solid #E5DAC8;
      margin-top: auto;
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      color: #957D71;
    }
    .dark-roast .slide-footer {
      border-top-color: rgba(255, 255, 255, 0.12);
      color: #8F7668;
    }

    /* Cards & Components */
    .card-paper {
      background: #FFFFFF;
      border: 1px solid #E5DAC8;
      border-radius: 12px;
      padding: 28px 32px;
      box-shadow: 0 4px 20px rgba(20, 14, 12, 0.04);
    }
    .card-roast {
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      padding: 32px;
    }
    .card-highlight {
      background: #FDF7F7;
      border: 1.5px solid #E8A3AC;
      border-radius: 12px;
      padding: 28px 32px;
    }

    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px;
    }
    .grid-3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 28px;
    }
    .grid-4 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 24px;
    }

    /* Specific Visual Elements */
    .stat-number {
      font-family: 'Newsreader', serif;
      font-size: 64px;
      font-weight: 700;
      color: #7E1D2A;
      line-height: 1;
      margin-bottom: 8px;
    }
    .dark-roast .stat-number {
      color: #EDDDA4;
    }
    .stat-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #745E53;
      font-weight: 600;
      margin-bottom: 8px;
    }
    .dark-roast .stat-label {
      color: #CFA946;
    }

    /* Comparison Table */
    table.editorial-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 16px;
      background: #FFFFFF;
      border: 1px solid #E5DAC8;
      border-radius: 8px;
      overflow: hidden;
    }
    table.editorial-table th {
      background: #F7F3EC;
      padding: 18px 22px;
      text-align: left;
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: #5A473D;
      border-bottom: 1px solid #E5DAC8;
    }
    table.editorial-table td {
      padding: 18px 22px;
      border-bottom: 1px solid #EFE8DC;
      color: #31241E;
      line-height: 1.45;
    }
    table.editorial-table tr:last-child td {
      border-bottom: none;
    }
    table.editorial-table td.highlight-col {
      background: #FDF7F7;
      color: #7E1D2A;
      font-weight: 700;
      border-left: 2px solid #7E1D2A;
    }

    /* Quote Block */
    .quote-box {
      border-left: 3px solid #7E1D2A;
      padding: 18px 24px;
      background: #F9E5E7;
      border-radius: 0 8px 8px 0;
      font-family: 'Newsreader', Georgia, serif;
      font-size: 22px;
      font-style: italic;
      color: #50141C;
      line-height: 1.5;
      margin: 16px 0;
    }
    .dark-roast .quote-box {
      border-left-color: #EDDDA4;
      background: rgba(237, 221, 164, 0.08);
      color: #EDDDA4;
    }
  </style>
</head>
<body>

  <!-- ======================================================================
       HALAMAN 01: COVER
       ====================================================================== -->
  <div class="page dark-roast">
    <div class="slide-header">
      <div class="brand-mark">
        <img src="${logoWhite}" alt="Cherry Logo">
        <span class="brand-sub">Akademi & Ekosistem Kopi Nusantara</span>
      </div>
      <div class="slide-tag">Dokumen Presentasi • 2026</div>
    </div>

    <div class="content-body" style="justify-content: center; max-width: 1400px;">
      <div class="eyebrow" style="color: #EDDDA4; margin-bottom: 16px;">
        ☕ DIINISIASI OLEH TEAM CHERRY COFFEE ROASTERY
      </div>
      <h1 class="headline" style="font-size: 78px; line-height: 1.08; margin-bottom: 24px; color: #FFFFFF;">
        Memahami Kopi dari Hulu ke Hilir:<br>
        <span style="color: #EDDDA4; font-style: italic;">Dari Tanah Petani hingga Meja Barista.</span>
      </h1>
      <p class="subhead" style="font-size: 24px; line-height: 1.55; color: #D4C7C0; max-width: 1200px; margin-bottom: 52px;">
        Kurikulum sains terstruktur, 6 alat kalibrasi harian di meja bar, dan standarisasi keahlian berbasis studi kasus lapangan—tanpa biaya kursus puluhan juta rupiah.
      </p>

      <div class="grid-4" style="gap: 24px;">
        <div class="card-roast">
          <div class="stat-number" style="font-size: 48px;">160</div>
          <div class="stat-label">Materi Kurikulum</div>
          <p style="font-size: 15px; color: #B8A398; line-height: 1.4;">8 jalur spesialisasi dari botani kebun sampai manajemen kedai.</p>
        </div>
        <div class="card-roast">
          <div class="stat-number" style="font-size: 48px;">6 Tools</div>
          <div class="stat-label">Alat Bar di Smartphone</div>
          <p style="font-size: 15px; color: #B8A398; line-height: 1.4;">Dial-in espresso, brew calculator, form SCA, dan kalkulator air.</p>
        </div>
        <div class="card-roast">
          <div class="stat-number" style="font-size: 48px;">80%</div>
          <div class="stat-label">Standar Lulus Kasus</div>
          <p style="font-size: 15px; color: #B8A398; line-height: 1.4;">Evaluasi kasus nyata dengan verifikasi publik (/verify/[token]).</p>
        </div>
        <div class="card-roast">
          <div class="stat-number" style="font-size: 48px;">Live Web</div>
          <div class="stat-label">cherryedu.vercel.app</div>
          <p style="font-size: 15px; color: #B8A398; line-height: 1.4;">Sudah beroperasi penuh dan diuji langsung oleh komunitas barista.</p>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <span>Cherry Edu — Indonesian Specialty Coffee Academy</span>
      <span>Halaman 01 / 14</span>
    </div>
  </div>

  <!-- ======================================================================
       HALAMAN 02: REALITAS DI MEJA BAR
       ====================================================================== -->
  <div class="page">
    <div class="slide-header">
      <div class="brand-mark">
        <img src="${logoColor}" alt="Cherry Logo">
        <span class="brand-sub">Realitas Meja Bar</span>
      </div>
      <div class="slide-tag">Problem Statement</div>
    </div>

    <div class="content-body">
      <div class="eyebrow">TANTANGAN OPERASIONAL KEDAI KOPI</div>
      <h2 class="headline">Investasi Mesin Ratusan Juta, Tapi Kalibrasi Bar Masih Tebak-Tebakan</h2>
      <p class="subhead">
        Kedai kopi modern menjamur di berbagai kota, namun mutu seduhan harian masih rapuh karena ketiadaan standar pelatihan yang terjangkau.
      </p>

      <div class="grid-3">
        <div class="card-highlight" style="background: #FFF9F9; border-color: #E8A3AC;">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 700; color: #7E1D2A; text-transform: uppercase; margin-bottom: 8px;">
            BOCOR 200–500G BEANS / HARI
          </div>
          <h3 style="font-family: 'Newsreader', serif; font-size: 26px; color: #7E1D2A; margin-bottom: 12px; font-weight: 600;">
            Wastage Kalibrasi Pagi 'Kira-Kira'
          </h3>
          <p style="font-size: 15px; color: #5A473D; line-height: 1.6;">
            Setiap pagi, barista membuang ratusan gram biji kopi spesialti hanya untuk mencari rasa yang pas dengan tebak-tebakan. Tanpa pemahaman mikrometrik gilingan, jutaan rupiah bahan baku terbuang sia-sia setiap bulan.
          </p>
        </div>

        <div class="card-paper">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 700; color: #8F6726; text-transform: uppercase; margin-bottom: 8px;">
            TURNOVER TINGGI (4–8 BULAN)
          </div>
          <h3 style="font-family: 'Newsreader', serif; font-size: 26px; color: #140E0C; margin-bottom: 12px; font-weight: 600;">
            Siklus Pelatihan Berulang dari Nol
          </h3>
          <p style="font-size: 15px; color: #5A473D; line-height: 1.6;">
            Masa kerja barista di Indonesia rata-rata sangat singkat. Setiap kali barista senior resign, pemilik kafe harus mengulang pelatihan staf baru selama berminggu-minggu, dan konsistensi rasa kopi langsung anjlok.
          </p>
        </div>

        <div class="card-paper">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 700; color: #638059; text-transform: uppercase; margin-bottom: 8px;">
            BIAYA KURSUS RP 8JT – 25JT
          </div>
          <h3 style="font-family: 'Newsreader', serif; font-size: 26px; color: #140E0C; margin-bottom: 12px; font-weight: 600;">
            Pelatihan Formal Terlalu Mahal
          </h3>
          <p style="font-size: 15px; color: #5A473D; line-height: 1.6;">
            Sertifikasi offline konvensional tidak masuk akal bagi 95% pemilik kedai kopi mandiri. Sementara itu, belajar otodidak dari medsos terpecah-pecah, tanpa kurikulum sains, dan banyak mitos yang menyesatkan di meja bar.
          </p>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <span>Cherry Edu — Masalah Nyata Industri</span>
      <span>Halaman 02 / 14</span>
    </div>
  </div>

  <!-- ======================================================================
       HALAMAN 03: SOLUSI CHERRY EDU
       ====================================================================== -->
  <div class="page">
    <div class="slide-header">
      <div class="brand-mark">
        <img src="${logoColor}" alt="Cherry Logo">
        <span class="brand-sub">Solusi Terpadu</span>
      </div>
      <div class="slide-tag">Product Core</div>
    </div>

    <div class="content-body">
      <div class="eyebrow">SISTEM PENGETAHUAN & ALAT KERJA BAR</div>
      <h2 class="headline">Bukan Sekadar Bacaan Teori, Tapi Alat Kerja Harian di Meja Bar</h2>
      <p class="subhead">
        Cherry Edu menghubungkan sains kopi yang benar dengan alat kerja praktis di smartphone barista dan pembuktian kompetensi nyata.
      </p>

      <div class="grid-3">
        <div class="card-paper" style="border-top: 4px solid #7E1D2A;">
          <div style="font-size: 32px; margin-bottom: 14px;">📖</div>
          <h3 style="font-family: 'Newsreader', serif; font-size: 26px; color: #140E0C; margin-bottom: 10px; font-weight: 600;">
            1. Kurikulum Sains Lengkap
          </h3>
          <p style="font-size: 15px; color: #5A473D; line-height: 1.6; margin-bottom: 16px;">
            160 materi komprehensif dalam Bahasa Indonesia yang lugas dan berbasis data ilmiah. Membahas botani ceri, metode fermentasi, termodinamika sangrai, kimia ekstraksi, hingga HPP kedai kopi.
          </p>
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #7E1D2A; font-weight: 600;">
            ✓ 8 Jalur Spesialisasi • Farm to Cup
          </div>
        </div>

        <div class="card-paper" style="border-top: 4px solid #CFA946;">
          <div style="font-size: 32px; margin-bottom: 14px;">📱</div>
          <h3 style="font-family: 'Newsreader', serif; font-size: 26px; color: #140E0C; margin-bottom: 10px; font-weight: 600;">
            2. Alat Kalibrasi Meja Bar
          </h3>
          <p style="font-size: 15px; color: #5A473D; line-height: 1.6; margin-bottom: 16px;">
            6 alat bantu kerja harian langsung di browser ponsel: asisten dial-in espresso, kalkulator seduh manual V60 ber-timer, lembar cupping SCA 100 poin, dan kalkulator formulasi air mineral.
          </p>
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #8F6726; font-weight: 600;">
            ✓ Digunakan Setiap Pagi di Bar
          </div>
        </div>

        <div class="card-paper" style="border-top: 4px solid #638059;">
          <div style="font-size: 32px; margin-bottom: 14px;">🛡️</div>
          <h3 style="font-family: 'Newsreader', serif; font-size: 26px; color: #140E0C; margin-bottom: 10px; font-weight: 600;">
            3. Standarisasi & Bursa Kerja
          </h3>
          <p style="font-size: 15px; color: #5A473D; line-height: 1.6; margin-bottom: 16px;">
            Ujian berbasis simulasi kasus nyata dengan standar kelulusan 80%. Dilengkapi tautan verifikasi publik mandiri (/verify/[token]) dan portal bursa kerja khusus kedai kopi (/jobs).
          </p>
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #3B4E34; font-weight: 600;">
            ✓ Scan QR untuk Cek Nilai & Status
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <span>Cherry Edu — Solusi Ekosistem</span>
      <span>Halaman 03 / 14</span>
    </div>
  </div>

  <!-- ======================================================================
       HALAMAN 04: ALUR BELAJAR & PENERAPAN
       ====================================================================== -->
  <div class="page">
    <div class="slide-header">
      <div class="brand-mark">
        <img src="${logoColor}" alt="Cherry Logo">
        <span class="brand-sub">Alur Pengalaman</span>
      </div>
      <div class="slide-tag">User Journey</div>
    </div>

    <div class="content-body">
      <div class="eyebrow">METODOLOGI PEMBELAJARAN</div>
      <h2 class="headline">Dari Pemahaman Kebun Hingga Standarisasi Barista di Kedai</h2>
      <p class="subhead">
        Alur terstruktur yang membimbing pembelajar dari logika rasa dasar hingga kesiapan operasional profesional di meja bar.
      </p>

      <div class="grid-4">
        <div class="card-paper" style="position: relative;">
          <div style="font-family: 'Newsreader', serif; font-size: 40px; font-weight: 700; color: #7E1D2A; line-height: 1; margin-bottom: 12px;">01</div>
          <h3 style="font-size: 18px; font-weight: 700; color: #140E0C; margin-bottom: 8px;">Fondasi Sains Hulu-Hilir</h3>
          <p style="font-size: 14px; color: #5A473D; line-height: 1.55;">
            Memahami agronomi ceri, metode pasca-panen, reaksi Maillard sangrai, dan variabel ekstraksi sebelum memegang mesin komersial.
          </p>
        </div>

        <div class="card-paper" style="position: relative;">
          <div style="font-family: 'Newsreader', serif; font-size: 40px; font-weight: 700; color: #CFA946; line-height: 1; margin-bottom: 12px;">02</div>
          <h3 style="font-size: 18px; font-weight: 700; color: #140E0C; margin-bottom: 8px;">Praktik Meja Bar Live</h3>
          <p style="font-size: 14px; color: #5A473D; line-height: 1.55;">
            Teori diuji langsung di bar: kalibrasi espresso pagi via Dial-In Tool, hitung rasio seduh, dan evaluasi sensori green beans di form SCA digital.
          </p>
        </div>

        <div class="card-paper" style="position: relative;">
          <div style="font-family: 'Newsreader', serif; font-size: 40px; font-weight: 700; color: #638059; line-height: 1; margin-bottom: 12px;">03</div>
          <h3 style="font-size: 18px; font-weight: 700; color: #140E0C; margin-bottom: 8px;">Ujian Kasus Nyata (80%)</h3>
          <p style="font-size: 14px; color: #5A473D; line-height: 1.55;">
            Mendiagnosa kendala nyata di bar: mengatasi channeling, koreksi rasa abnormal, dan menyusun SOP bar 14 hari tanpa hafalan buta.
          </p>
        </div>

        <div class="card-highlight" style="position: relative; background: #FFF7F8; border-color: #E8A3AC;">
          <div style="font-family: 'Newsreader', serif; font-size: 40px; font-weight: 700; color: #7E1D2A; line-height: 1; margin-bottom: 12px;">04</div>
          <h3 style="font-size: 18px; font-weight: 700; color: #7E1D2A; margin-bottom: 8px;">Sertifikat QR & Rekrutmen</h3>
          <p style="font-size: 14px; color: #5A473D; line-height: 1.55;">
            Lulusan terverifikasi memperoleh token publik permanen yang dapat langsung dilampirkan pada bursa kerja kedai kopi (/jobs).
          </p>
        </div>
      </div>

      <div class="quote-box" style="margin-top: 32px;">
        "Seorang barista yang hebat wajib tahu varietas dan fermentasi di kebun. Seorang petani modern wajib tahu cara menyeduh dan meng-cupping hasil panennya."
      </div>
    </div>

    <div class="slide-footer">
      <span>Cherry Edu — Siklus Pembelajaran</span>
      <span>Halaman 04 / 14</span>
    </div>
  </div>

  <!-- ======================================================================
       HALAMAN 05: 8 JALUR SPESIALISASI
       ====================================================================== -->
  <div class="page">
    <div class="slide-header">
      <div class="brand-mark">
        <img src="${logoColor}" alt="Cherry Logo">
        <span class="brand-sub">Katalog Kurikulum</span>
      </div>
      <div class="slide-tag">Syllabus Matrix</div>
    </div>

    <div class="content-body">
      <div class="eyebrow">160 MATERI • 8 JALUR SPESIALISASI</div>
      <h2 class="headline">Kurikulum Menyeluruh dari Petani, Roaster, Barista, hingga Owner</h2>
      <p class="subhead">
        Memetakan seluruh aspek teknis dan operasional industri kopi modern dalam Bahasa Indonesia yang lugas dan teruji.
      </p>

      <div class="grid-4" style="gap: 18px;">
        <div class="card-paper" style="padding: 20px 22px;">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #7E1D2A; font-weight: 700; text-transform: uppercase;">7 Modul • 32 Materi</div>
          <h4 style="font-family: 'Newsreader', serif; font-size: 20px; color: #140E0C; margin: 4px 0 6px 0; font-weight: 600;">1. Fondasi Hulu-Hilir</h4>
          <p style="font-size: 13px; color: #5A473D; line-height: 1.45;">Rantai pasok, botani ceri, silsilah varietas, metode olah, sangrai dasar, dan sensori.</p>
        </div>

        <div class="card-paper" style="padding: 20px 22px;">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #7E1D2A; font-weight: 700; text-transform: uppercase;">10 Modul • 30 Materi</div>
          <h4 style="font-family: 'Newsreader', serif; font-size: 20px; color: #140E0C; margin: 4px 0 6px 0; font-weight: 600;">2. Barista Komersial</h4>
          <p style="font-size: 13px; color: #5A473D; line-height: 1.45;">Dial-in mikrometrik, fisika buih susu 65°C, latte art, mocktail, dan efisiensi alur bar.</p>
        </div>

        <div class="card-paper" style="padding: 20px 22px;">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #7E1D2A; font-weight: 700; text-transform: uppercase;">7 Modul • 24 Materi</div>
          <h4 style="font-family: 'Newsreader', serif; font-size: 20px; color: #140E0C; margin: 4px 0 6px 0; font-weight: 600;">3. Manual Brewing</h4>
          <p style="font-size: 13px; color: #5A473D; line-height: 1.45;">Pour over V60 (4:6 method), Aeropress, formulasi mineral air, dan mitigasi seduhan.</p>
        </div>

        <div class="card-paper" style="padding: 20px 22px;">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #7E1D2A; font-weight: 700; text-transform: uppercase;">6 Modul • 18 Materi</div>
          <h4 style="font-family: 'Newsreader', serif; font-size: 20px; color: #140E0C; margin: 4px 0 6px 0; font-weight: 600;">4. Roasting Profesional</h4>
          <p style="font-size: 13px; color: #5A473D; line-height: 1.45;">Telemetri suhu RoR, reaksi Maillard, first crack, dan konsistensi batch sangrai.</p>
        </div>

        <div class="card-paper" style="padding: 20px 22px;">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #7E1D2A; font-weight: 700; text-transform: uppercase;">6 Modul • 18 Materi</div>
          <h4 style="font-family: 'Newsreader', serif; font-size: 20px; color: #140E0C; margin: 4px 0 6px 0; font-weight: 600;">5. Sensory & Cupping</h4>
          <p style="font-size: 13px; color: #5A473D; line-height: 1.45;">Penilaian 10 atribut sensori SCA, identifikasi defect rasa, dan kalibrasi deskriptor.</p>
        </div>

        <div class="card-paper" style="padding: 20px 22px;">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #7E1D2A; font-weight: 700; text-transform: uppercase;">6 Modul • 18 Materi</div>
          <h4 style="font-family: 'Newsreader', serif; font-size: 20px; color: #140E0C; margin: 4px 0 6px 0; font-weight: 600;">6. Olah Biji Hijau</h4>
          <p style="font-size: 13px; color: #5A473D; line-height: 1.45;">Petik merah Brix 18–24°, penjemuran meja gantung, sortasi fisik, dan penyimpanan.</p>
        </div>

        <div class="card-paper" style="padding: 20px 22px;">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #7E1D2A; font-weight: 700; text-transform: uppercase;">8 Modul • 20 Materi</div>
          <h4 style="font-family: 'Newsreader', serif; font-size: 20px; color: #140E0C; margin: 4px 0 6px 0; font-weight: 600;">7. Bioproses Pasca-Panen</h4>
          <p style="font-size: 13px; color: #5A473D; line-height: 1.45;">Fermentasi anaerobik terukur, kurva pH/suhu, inokulasi ragi, dan kontrol kadar air.</p>
        </div>

        <div class="card-paper" style="padding: 20px 22px;">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #7E1D2A; font-weight: 700; text-transform: uppercase;">6 Modul • 18 Materi</div>
          <h4 style="font-family: 'Newsreader', serif; font-size: 20px; color: #140E0C; margin: 4px 0 6px 0; font-weight: 600;">8. Manajemen Kedai</h4>
          <p style="font-size: 13px; color: #5A473D; line-height: 1.45;">Perhitungan HPP cangkir, SOP bar 14 hari, manajemen inventori, dan strategi margin.</p>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <span>Cherry Edu — Silabus Kurikulum</span>
      <span>Halaman 05 / 14</span>
    </div>
  </div>

  <!-- ======================================================================
       HALAMAN 06: ALAT KERJA HARIAN DI MEJA BAR
       ====================================================================== -->
  <div class="page">
    <div class="slide-header">
      <div class="brand-mark">
        <img src="${logoColor}" alt="Cherry Logo">
        <span class="brand-sub">Daily Bar Tools</span>
      </div>
      <div class="slide-tag">Precision Lab</div>
    </div>

    <div class="content-body">
      <div class="eyebrow">LAB SEDUH & KALKULATOR DIGITAL DI SMARTPHONE</div>
      <h2 class="headline">Alat Kalibrasi di HP Barista: Cepat, Presisi, Tanpa Aplikasi Tambahan</h2>
      <p class="subhead">
        6 instrumen kerja harian yang dibuka barista setiap pagi di meja bar sebelum menyajikan cangkir pertama kepada pelanggan.
      </p>

      <div class="grid-3">
        <div class="card-paper">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #10B981; font-weight: 700; text-transform: uppercase; margin-bottom: 4px;">● KALIBRASI ESPRESSO</div>
          <h3 style="font-family: 'Newsreader', serif; font-size: 22px; color: #140E0C; margin-bottom: 8px;">Espresso Dial-In Assistant</h3>
          <p style="font-size: 14px; color: #5A473D; line-height: 1.55;">
            Masukkan rasa yang muncul (terlalu asam/pahit/encer) ➔ Sistem langsung menghitung rekomendasi pergeseran mikron grinder dan rasio ekstraksi.
          </p>
        </div>

        <div class="card-paper">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #10B981; font-weight: 700; text-transform: uppercase; margin-bottom: 4px;">● SEDUH MANUAL</div>
          <h3 style="font-family: 'Newsreader', serif; font-size: 22px; color: #140E0C; margin-bottom: 8px;">Smart Brew Calculator</h3>
          <p style="font-size: 14px; color: #5A473D; line-height: 1.55;">
            Kalkulator rasio gramasi kopi-air untuk V60 (metode 4:6), Aeropress, French Press, lengkap dengan auto-timer tahapan tuangan seduh.
          </p>
        </div>

        <div class="card-paper">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #10B981; font-weight: 700; text-transform: uppercase; margin-bottom: 4px;">● UJI SENSORI RESMI</div>
          <h3 style="font-family: 'Newsreader', serif; font-size: 22px; color: #140E0C; margin-bottom: 8px;">Form Cupping SCA Digital</h3>
          <p style="font-size: 14px; color: #5A473D; line-height: 1.55;">
            Lembar penilaian 100 poin resmi dengan kalkulasi otomatis pemotongan nilai cacat (defects) dan grade mutu spesialti tanpa boros kertas.
          </p>
        </div>

        <div class="card-paper">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #10B981; font-weight: 700; text-transform: uppercase; margin-bottom: 4px;">● KALIBRASI RASA</div>
          <h3 style="font-family: 'Newsreader', serif; font-size: 22px; color: #140E0C; margin-bottom: 8px;">Interactive Flavor Wheel</h3>
          <p style="font-size: 14px; color: #5A473D; line-height: 1.55;">
            Roda rasa multi-lapis interaktif untuk menyelaraskan kosakata aroma dan rasa cangkir kopi secara baku dan objektif.
          </p>
        </div>

        <div class="card-paper">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #10B981; font-weight: 700; text-transform: uppercase; margin-bottom: 4px;">● SAINS MINERAL AIR</div>
          <h3 style="font-family: 'Newsreader', serif; font-size: 22px; color: #140E0C; margin-bottom: 8px;">Kalkulator Kimia Air Seduh</h3>
          <p style="font-size: 14px; color: #5A473D; line-height: 1.55;">
            Panduan formulasi mineral air seduh terukur berbasis target General Hardness (GH kalsium/magnesium) dan Alkalinity (KH bikarbonat).
          </p>
        </div>

        <div class="card-paper">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #10B981; font-weight: 700; text-transform: uppercase; margin-bottom: 4px;">● DATABASE KULTIVAR</div>
          <h3 style="font-family: 'Newsreader', serif; font-size: 22px; color: #140E0C; margin-bottom: 8px;">Kompendium Varietas Kopi</h3>
          <p style="font-size: 14px; color: #5A473D; line-height: 1.55;">
            Basis data silsilah genetika varietas kopi nusantara dan dunia, elevasi ideal (masl), serta potensi profil rasa bawaan setiap kultivar.
          </p>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <span>Cherry Edu — Alat Kerja Harian</span>
      <span>Halaman 06 / 14</span>
    </div>
  </div>

  <!-- ======================================================================
       HALAMAN 07: DIAGRAM SAINS KOPI VISUAL
       ====================================================================== -->
  <div class="page">
    <div class="slide-header">
      <div class="brand-mark">
        <img src="${logoColor}" alt="Cherry Logo">
        <span class="brand-sub">Visual Sains</span>
      </div>
      <div class="slide-tag">Scientific SVG</div>
    </div>

    <div class="content-body">
      <div class="eyebrow">MENYEDERHANAKAN KONSEP KOMPLEKS</div>
      <h2 class="headline">Membedah Sains Kopi Menjadi Diagram Teknis yang Mudah Dipahami</h2>
      <p class="subhead">
        Menghilangkan penjelasan abstrak melalui representasi visual interaktif yang memperjelas hubungan variabel seduhan dan profil rasa cangkir.
      </p>

      <div class="grid-2">
        <div class="card-paper">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #7E1D2A; font-weight: 700; text-transform: uppercase; margin-bottom: 6px;">
            DIAGRAM 01 • EKSTRAKSI OBJEKTIF
          </div>
          <h3 style="font-family: 'Newsreader', serif; font-size: 24px; color: #140E0C; margin-bottom: 8px;">
            Brewing Control Chart (Extraction Yield vs TDS)
          </h3>
          <p style="font-size: 15px; color: #5A473D; line-height: 1.6;">
            Memetakan titik temu antara laju ekstraksi (18–22%) dan kepekatan larutan (TDS 1,15–1,45%). Membantu barista mendiagnosa apakah seduhan mereka masuk zona Under-extracted (asam tajam), Over-extracted (pahit sepet), atau Ideal Target Zone.
          </p>
        </div>

        <div class="card-paper">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #7E1D2A; font-weight: 700; text-transform: uppercase; margin-bottom: 6px;">
            DIAGRAM 02 • TERMODINAMIKA SANGRAI
          </div>
          <h3 style="font-family: 'Newsreader', serif; font-size: 24px; color: #140E0C; margin-bottom: 8px;">
            Roast Curve Telemetry (Bean Temp & Rate of Rise)
          </h3>
          <p style="font-size: 15px; color: #5A473D; line-height: 1.6;">
            Visualisasi perpindahan panas konveksi dan konduksi di drum roaster. Menjelaskan dinamika penurunan Rate of Rise (RoR) yang stabil dari fase pengeringan, reaksi Maillard, hingga First Crack terkontrol.
          </p>
        </div>

        <div class="card-paper">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #7E1D2A; font-weight: 700; text-transform: uppercase; margin-bottom: 6px;">
            DIAGRAM 03 • FISIKA TEKSTUR SUSU
          </div>
          <h3 style="font-family: 'Newsreader', serif; font-size: 24px; color: #140E0C; margin-bottom: 8px;">
            Fisika Turbulensi Vortex Susu (Sudut Wand 15°)
          </h3>
          <p style="font-size: 15px; color: #5A473D; line-height: 1.6;">
            Panduan posisi ujung steam wand: sudut 15° dan kedalaman 1–2 cm untuk menciptakan pusaran rotasi mikro. Menjelaskan sains denaturasi protein whey pada suhu 60–65°C tanpa memecah struktur emulsi.
          </p>
        </div>

        <div class="card-paper">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #7E1D2A; font-weight: 700; text-transform: uppercase; margin-bottom: 6px;">
            DIAGRAM 04 • KIMIA EKSTRAKSI ESPRESSO
          </div>
          <h3 style="font-family: 'Newsreader', serif; font-size: 24px; color: #140E0C; margin-bottom: 8px;">
            Dinamika Aliran Espresso 3 Fase
          </h3>
          <p style="font-size: 15px; color: #5A473D; line-height: 1.6;">
            Penampang ekstraksi shot espresso: Fase Ristretto (asam organik dan minyak volatil), Fase Normale (pelarutan karamel dan body), dan Fase Lungo (komponen pahit dan kafein berlebih).
          </p>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <span>Cherry Edu — Diagram Sains Vektor</span>
      <span>Halaman 07 / 14</span>
    </div>
  </div>

  <!-- ======================================================================
       HALAMAN 08: STANDARISASI KREDENSIAL & REKRUTMEN
       ====================================================================== -->
  <div class="page">
    <div class="slide-header">
      <div class="brand-mark">
        <img src="${logoColor}" alt="Cherry Logo">
        <span class="brand-sub">Kredensial & Rekrutmen</span>
      </div>
      <div class="slide-tag">Trust System</div>
    </div>

    <div class="content-body">
      <div class="eyebrow">VALIDASI KOMPETENSI TANPA RAGU</div>
      <h2 class="headline">Sertifikasi yang Bermanfaat Nyata bagi Pemilik Usaha</h2>
      <p class="subhead">
        Menghilangkan keraguan pemilik kafe saat merekrut staf baru lewat bukti penguasaan materi yang dapat divalidasi langsung secara publik.
      </p>

      <div class="grid-2">
        <div class="card-highlight" style="background: #FFF7F8; border-color: #E8A3AC;">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #7E1D2A; font-weight: 700; text-transform: uppercase; margin-bottom: 8px;">
            STANDAR KELULUSAN 80% • QR VERIFIKASI MANDIRI
          </div>
          <h3 style="font-family: 'Newsreader', serif; font-size: 28px; color: #7E1D2A; margin-bottom: 12px;">
            Verifikasi Publik Mandiri (/verify/[token])
          </h3>
          <p style="font-size: 15px; color: #5A473D; line-height: 1.6; margin-bottom: 20px;">
            Sertifikat Cherry Edu tidak diberikan secara cuma-cuma. Setiap lembar sertifikat memiliki tautan unik dan kode QR permanen di sistem produksi.
          </p>
          <div style="background: #FFFFFF; border: 1px solid #E5DAC8; border-radius: 8px; padding: 16px; font-size: 14px; color: #31241E; line-height: 1.6;">
            <strong>Saat Pemilik Kafe Memindai QR Code Pelamar:</strong><br>
            • Konfirmasi nama lengkap & tanggal kelulusan resmi.<br>
            • Skor ujian studi kasus (wajib minimal 80%).<br>
            • Rincian materi teknis yang telah dikuasai kandidat.<br>
            • Memastikan pelamar tidak membeli sertifikat kosong.
          </div>
        </div>

        <div class="card-paper">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #638059; font-weight: 700; text-transform: uppercase; margin-bottom: 8px;">
            INTEGRASI DUA ARAH DENGAN INDUSTRI
          </div>
          <h3 style="font-family: 'Newsreader', serif; font-size: 28px; color: #140E0C; margin-bottom: 12px;">
            Bursa Kerja Khusus Kedai Kopi (/jobs)
          </h3>
          <p style="font-size: 15px; color: #5A473D; line-height: 1.6; margin-bottom: 20px;">
            Menjembatani kedai kopi yang membutuhkan barista terstandar dengan lulusan yang telah teruji kompetensinya.
          </p>
          <div style="background: #F7F3EC; border: 1px solid #E5DAC8; border-radius: 8px; padding: 16px; font-size: 14px; color: #31241E; line-height: 1.6;">
            <strong>Dampak Operasional bagi Pemilik Kafe:</strong><br>
            • Memangkas waktu skrining pelamar hingga <strong>70%</strong>.<br>
            • Menghindari perekrutan barista yang belum paham dasar ekstraksi.<br>
            • Masa orientasi staf baru di bar berkurang dari 4 minggu ke <strong>7 hari</strong>.
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <span>Cherry Edu — Standarisasi Kredensial</span>
      <span>Halaman 08 / 14</span>
    </div>
  </div>

  <!-- ======================================================================
       HALAMAN 09: TABEL PERBANDINGAN INDUSTRI
       ====================================================================== -->
  <div class="page">
    <div class="slide-header">
      <div class="brand-mark">
        <img src="${logoColor}" alt="Cherry Logo">
        <span class="brand-sub">Perbandingan Industri</span>
      </div>
      <div class="slide-tag">Benchmarking</div>
    </div>

    <div class="content-body">
      <div class="eyebrow">POSISI UNGGUL CHERRY EDU</div>
      <h2 class="headline">Solusi Tepat di Antara Kursus Offline Mahal dan Konten Medsos Acak</h2>
      <p class="subhead">
        Menggabungkan kedalaman materi akademi formal, kepraktisan alat kerja digital di meja bar, dan biaya yang sangat terjangkau.
      </p>

      <table class="editorial-table">
        <thead>
          <tr>
            <th>Kriteria Evaluasi</th>
            <th>Kursus Offline Konvensional</th>
            <th>Konten Medsos / YouTube</th>
            <th>Platform Kursus Online Umum</th>
            <th style="background: #7E1D2A; color: #FFFFFF;">CHERRY EDU</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Biaya Pelatihan</strong></td>
            <td>Rp 8Jt – Rp 25Jt / modul</td>
            <td>Gratis (Iklan Acak)</td>
            <td>Rp 200Rb – Rp 1Jt</td>
            <td class="highlight-col">Akses Dasar Gratis / Rp 49rb Pro</td>
          </tr>
          <tr>
            <td><strong>Kelengkapan Materi</strong></td>
            <td>Hanya modul yang dibayar</td>
            <td>Tercecer & tidak terstruktur</td>
            <td>Teori umum / minim konteks</td>
            <td class="highlight-col">Hulu ke Hilir Lengkap (160 Materi)</td>
          </tr>
          <tr>
            <td><strong>Landasan Ilmiah</strong></td>
            <td>Standar tapi kaku</td>
            <td>Banyak mitos & asumsi</td>
            <td>Teori tanpa telaah data</td>
            <td class="highlight-col">Sains Teruji & Bebas Mitos Industri</td>
          </tr>
          <tr>
            <td><strong>Alat Kerja di Bar</strong></td>
            <td>Lembar kertas panduan</td>
            <td>Tidak tersedia</td>
            <td>Tidak tersedia</td>
            <td class="highlight-col">6 Tools Digital Langsung di HP Barista</td>
          </tr>
          <tr>
            <td><strong>Validitas Sertifikat</strong></td>
            <td>Ijazah fisik lokal</td>
            <td>Tidak ada</td>
            <td>PDF umum tanpa verifikasi</td>
            <td class="highlight-col">Tautan Verifikasi Publik Mandiri Real-Time</td>
          </tr>
          <tr>
            <td><strong>Penyaluran Kerja</strong></td>
            <td>Tergantung relasi instruktur</td>
            <td>Tidak ada</td>
            <td>Tidak ada</td>
            <td class="highlight-col">Bursa Kerja Kedai Kopi Terintegrasi</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="slide-footer">
      <span>Cherry Edu — Perbandingan Solusi</span>
      <span>Halaman 09 / 14</span>
    </div>
  </div>

  <!-- ======================================================================
       HALAMAN 10: MODEL BISNIS & FINANSIAL
       ====================================================================== -->
  <div class="page">
    <div class="slide-header">
      <div class="brand-mark">
        <img src="${logoColor}" alt="Cherry Logo">
        <span class="brand-sub">Model Bisnis</span>
      </div>
      <div class="slide-tag">Revenue Streams</div>
    </div>

    <div class="content-body">
      <div class="eyebrow">STRUKTUR PENDAPATAN BERKELANJUTAN</div>
      <h2 class="headline">Pendapatan Berulang dari Pengguna Mandiri dan Pemilik Kedai Kopi</h2>
      <p class="subhead">
        Model bisnis berbasis perangkat lunak awan dengan margin kotor di atas 85%, tanpa beban biaya inventori fisik materi.
      </p>

      <div class="grid-2" style="margin-bottom: 24px;">
        <div class="card-paper" style="border-top: 4px solid #7E1D2A;">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #7E1D2A; font-weight: 700; text-transform: uppercase; margin-bottom: 4px;">
            SEGMEN B2C: BARISTA & HOME BREWER
          </div>
          <h3 style="font-family: 'Newsreader', serif; font-size: 28px; color: #140E0C; margin-bottom: 6px;">
            Langganan Pro Individu
          </h3>
          <div class="stat-number" style="font-size: 44px; margin: 10px 0;">
            Rp 49.000 <span style="font-size: 18px; color: #745E53; font-weight: 400;">/ Bulan</span>
          </div>
          <p style="font-size: 15px; color: #5A473D; line-height: 1.6;">
            Akses menyeluruh ke seluruh materi spesialisasi lanjutan, hak evaluasi ujian studi kasus, dan penerbitan sertifikat digital resmi terverifikasi bagi praktisi mandiri.
          </p>
        </div>

        <div class="card-highlight" style="border-top: 4px solid #CFA946; background: #FFFDF9; border-color: #E8DFC8;">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #8F6726; font-weight: 700; text-transform: uppercase; margin-bottom: 4px;">
            SEGMEN B2B: PEMILIK KEDAI KOPI
          </div>
          <h3 style="font-family: 'Newsreader', serif; font-size: 28px; color: #140E0C; margin-bottom: 6px;">
            Paket Pelatihan Tim Bar Kafe
          </h3>
          <div class="stat-number" style="font-size: 44px; color: #8F6726; margin: 10px 0;">
            Rp 299Rb – 799Rb <span style="font-size: 18px; color: #745E53; font-weight: 400;">/ Gerai / Bln</span>
          </div>
          <p style="font-size: 15px; color: #5A473D; line-height: 1.6;">
            Solusi orientasi staf baru bagi pemilik kedai kopi independen dan multi-outlet. Menggantikan biaya konsultan mahal dan memangkas waktu orientasi staf dari 4 minggu menjadi 7 hari.
          </p>
        </div>
      </div>

      <div class="grid-2">
        <div class="card-paper" style="padding: 16px 24px;">
          <strong style="font-size: 15px; color: #140E0C;">Listing Lowongan Prioritas (/jobs)</strong>
          <p style="font-size: 14px; color: #5A473D; margin-top: 4px;">Biaya publikasi lowongan prioritas bagi kedai kopi yang butuh rekrutmen cepat tenaga teruji.</p>
        </div>
        <div class="card-paper" style="padding: 16px 24px;">
          <strong style="font-size: 15px; color: #140E0C;">Sensory Kit & Beans Kalibrasi</strong>
          <p style="font-size: 14px; color: #5A473D; margin-top: 4px;">Paket biji sangrai terstandar dari Cherry Coffee Roastery untuk latihan cupping mandiri.</p>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <span>Cherry Edu — Arsitektur Finansial</span>
      <span>Halaman 10 / 14</span>
    </div>
  </div>

  <!-- ======================================================================
       HALAMAN 11: STRATEGI DISTRIBUSI & PERTUMBUHAN
       ====================================================================== -->
  <div class="page">
    <div class="slide-header">
      <div class="brand-mark">
        <img src="${logoColor}" alt="Cherry Logo">
        <span class="brand-sub">Distribusi Pasar</span>
      </div>
      <div class="slide-tag">Growth Engine</div>
    </div>

    <div class="content-body">
      <div class="eyebrow">DISTRIBUSI ORGANIK BERBASIS KOMUNITAS</div>
      <h2 class="headline">Cara Kami Tumbuh Tanpa Bakar Uang Pemasaran yang Boros</h2>
      <p class="subhead">
        Membangun adopsi pengguna secara alami melalui utilitas alat kerja harian di bar dan jaringan kemitraan roastery yang sudah berjalan.
      </p>

      <div class="grid-3">
        <div class="card-paper" style="border-top: 4px solid #7E1D2A;">
          <div style="font-size: 28px; margin-bottom: 12px;">⚡</div>
          <h3 style="font-family: 'Newsreader', serif; font-size: 24px; color: #140E0C; margin-bottom: 10px;">
            1. Adopsi Alami Barista
          </h3>
          <p style="font-size: 15px; color: #5A473D; line-height: 1.6;">
            Modul fondasi dasar dan alat dial-in dibuka bebas biaya. Barista menggunakannya setiap pagi di bar, lalu merekomendasikannya ke sesama rekan barista di komunitas dan media sosial secara sukarela karena merasakan manfaat langsungnya.
          </p>
        </div>

        <div class="card-paper" style="border-top: 4px solid #CFA946;">
          <div style="font-size: 28px; margin-bottom: 12px;">🤝</div>
          <h3 style="font-family: 'Newsreader', serif; font-size: 24px; color: #140E0C; margin-bottom: 10px;">
            2. Sinergi Cherry Roastery
          </h3>
          <p style="font-size: 15px; color: #5A473D; line-height: 1.6;">
            Sebagai micro-roastery aktif, kami memiliki basis kafe mitra yang disuplai biji kopi. Cherry Edu dipaketkan sebagai kurikulum SOP seduh resmi bagi setiap kedai kopi rekanan roastery untuk memastikan kualitas cangkir mereka terjaga.
          </p>
        </div>

        <div class="card-paper" style="border-top: 4px solid #638059;">
          <div style="font-size: 28px; margin-bottom: 12px;">🔄</div>
          <h3 style="font-family: 'Newsreader', serif; font-size: 24px; color: #140E0C; margin-bottom: 10px;">
            3. Efek Bursa Kerja (/jobs)
          </h3>
          <p style="font-size: 15px; color: #5A473D; line-height: 1.6;">
            Kedai kopi membuka lowongan di /jobs dengan prasyarat sertifikat Cherry Edu ➔ Mendorong pencari kerja belajar dan menyelesaikan modul ➔ Bertambahnya lulusan berkualitas menarik lebih banyak pemilik kafe untuk bergabung.
          </p>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <span>Cherry Edu — Strategi Pertumbuhan</span>
      <span>Halaman 11 / 14</span>
    </div>
  </div>

  <!-- ======================================================================
       HALAMAN 12: ROADMAP BISNIS
       ====================================================================== -->
  <div class="page">
    <div class="slide-header">
      <div class="brand-mark">
        <img src="${logoColor}" alt="Cherry Logo">
        <span class="brand-sub">Roadmap Bisnis</span>
      </div>
      <div class="slide-tag">Strategic Milestones</div>
    </div>

    <div class="content-body">
      <div class="eyebrow">TAHAPAN EKSEKUSI 2026 – 2028</div>
      <h2 class="headline">Rencana Pengembangan Bertahap: Dari Validasi Lokal Menuju Standar Nasional</h2>
      <p class="subhead">
        Fokus bisnis yang terukur, beralih dari pengujian materi di komunitas hingga ekspansi jaringan kemitraan kedai kopi di seluruh Indonesia.
      </p>

      <div class="grid-4">
        <div class="card-highlight" style="background: #FFFDF9; border-color: #E8DFC8;">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 700; color: #8F6726; margin-bottom: 6px;">
            FASE 1 • BERJALAN
          </div>
          <div style="font-family: 'Newsreader', serif; font-size: 22px; font-weight: 700; color: #140E0C; margin-bottom: 10px;">
            Validasi & Pilot Kafe
          </div>
          <div style="font-size: 13px; color: #8F6726; font-weight: 600; margin-bottom: 10px;">Q3 – Q4 2026</div>
          <p style="font-size: 13px; color: #5A473D; line-height: 1.55;">
            • 160 materi & 6 tools live.<br>
            • 5.000 pengguna komunitas.<br>
            • Pilot kurikulum internal di 25–30 kedai kopi mitra di Jabodetabek & Bandung.
          </p>
        </div>

        <div class="card-paper">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 700; color: #7E1D2A; margin-bottom: 6px;">
            FASE 2 • TARGET DEKAT
          </div>
          <div style="font-family: 'Newsreader', serif; font-size: 22px; font-weight: 700; color: #140E0C; margin-bottom: 10px;">
            Komersialisasi B2B
          </div>
          <div style="font-size: 13px; color: #7E1D2A; font-weight: 600; margin-bottom: 10px;">Q1 – Q2 2027</div>
          <p style="font-size: 13px; color: #5A473D; line-height: 1.55;">
            • Rilis paket bisnis kafe.<br>
            • Target 100 kafe berbayar.<br>
            • 1.500 pelanggan Pro aktif.<br>
            • Monetisasi bursa kerja prioritas.
          </p>
        </div>

        <div class="card-paper">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 700; color: #3B4E34; margin-bottom: 6px;">
            FASE 3 • EKSPANSI
          </div>
          <div style="font-family: 'Newsreader', serif; font-size: 22px; font-weight: 700; color: #140E0C; margin-bottom: 10px;">
            Hub Kopi Regional
          </div>
          <div style="font-size: 13px; color: #3B4E34; font-weight: 600; margin-bottom: 10px;">H2 2027</div>
          <p style="font-size: 13px; color: #5A473D; line-height: 1.55;">
            • Ekspansi ke Surabaya, Bali, Jogja, dan Medan.<br>
            • Bundling sensory beans roastery.<br>
            • Target 300+ kafe aktif & 10.000 user.
          </p>
        </div>

        <div class="card-paper">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 700; color: #5A473D; margin-bottom: 6px;">
            FASE 4 • STANDAR INDUSTRI
          </div>
          <div style="font-family: 'Newsreader', serif; font-size: 22px; font-weight: 700; color: #140E0C; margin-bottom: 10px;">
            Standarisasi Nasional
          </div>
          <div style="font-size: 13px; color: #5A473D; font-weight: 600; margin-bottom: 10px;">2028</div>
          <p style="font-size: 13px; color: #5A473D; line-height: 1.55;">
            • Kerjasama asosiasi kopi & SMK perhotelan.<br>
            • Kompetisi seduh nasional tahunan.<br>
            • Standar sertifikasi kopi nomor satu di Indonesia.
          </p>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <span>Cherry Edu — Rencana Pengembangan</span>
      <span>Halaman 12 / 14</span>
    </div>
  </div>

  <!-- ======================================================================
       HALAMAN 13: TIM INISIATOR
       ====================================================================== -->
  <div class="page">
    <div class="slide-header">
      <div class="brand-mark">
        <img src="${logoColor}" alt="Cherry Logo">
        <span class="brand-sub">Tim Inisiator</span>
      </div>
      <div class="slide-tag">Roastery Roots</div>
    </div>

    <div class="content-body">
      <div class="eyebrow">DIBUAT LANGSUNG OLEH PRAKTISI LAPANGAN</div>
      <h2 class="headline">Bukan Agensi Teknologi di Luar Industri, Tapi Tim Praktisi di Meja Bar</h2>
      <p class="subhead">
        Cherry Edu lahir dari lantai kerja roastery kami sendiri untuk memecahkan masalah operasional yang kami hadapi setiap hari.
      </p>

      <div class="grid-2">
        <div class="card-highlight" style="background: #FFF7F8; border-color: #E8A3AC;">
          <h3 style="font-family: 'Newsreader', serif; font-size: 30px; color: #7E1D2A; margin-bottom: 14px; font-weight: 600;">
            Diinisiasi oleh Team Cherry Coffee Roastery
          </h3>
          <p style="font-size: 16px; color: #5A473D; line-height: 1.65; margin-bottom: 18px;">
            Kami adalah praktisi sangrai, barista, dan pengelola operasional kedai kopi aktif di Indonesia. Setiap hari kami membakar biji kopi, menguji profil rasa di meja cupping, mengkalibrasi mesin espresso komersial, dan melatih staf bar kami sendiri.
          </p>
          <div style="background: #FFFFFF; border: 1px solid #E8A3AC; border-radius: 8px; padding: 16px; font-size: 14px; color: #7E1D2A; line-height: 1.6;">
            "Kami merasakan sendiri frustrasi saat ratusan gram kopi terbuang sia-sia tiap kalibrasi pagi, dan pusingnya pemilik kafe saat head barista mendadak resign. Platform ini kami buat untuk menyelesaikan masalah nyata kami sendiri dan rekan-rekan pengusaha kafe."
          </div>
        </div>

        <div class="card-paper">
          <h3 style="font-family: 'Newsreader', serif; font-size: 26px; color: #140E0C; margin-bottom: 16px; font-weight: 600;">
            Kenapa Kami Memiliki Keunggulan Lapangan?
          </h3>
          <div style="font-size: 15px; color: #5A473D; line-height: 1.65;">
            <p style="margin-bottom: 14px;">
              <strong>1. Akses Langsung ke Rantai Pasok:</strong> Kami terhubung langsung dengan prosesor dan petani di Gayo, Toraja, hingga Bali, sehingga kurikulum kami berakar pada realitas kebun nusantara, bukan teori asing.
            </p>
            <p style="margin-bottom: 14px;">
              <strong>2. Pengujian Nyata di Bar:</strong> Setiap materi kurikulum dan rumus alat bantu diuji langsung oleh tim barista kami di meja bar sebelum dirilis ke publik.
            </p>
            <p>
              <strong>3. Hubungan Suplai B2B:</strong> Jaringan suplai biji kopi roastery menjadi gerbang terpercaya untuk mengadopsi kurikulum pelatihan Cherry Edu di puluhan kedai kopi mitra.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <span>Cherry Edu — Tim Inisiator</span>
      <span>Halaman 13 / 14</span>
    </div>
  </div>

  <!-- ======================================================================
       HALAMAN 14: KEMITRAAN & PENUTUP
       ====================================================================== -->
  <div class="page dark-roast">
    <div class="slide-header">
      <div class="brand-mark">
        <img src="${logoWhite}" alt="Cherry Logo">
        <span class="brand-sub" style="color: #EDDDA4;">Kemitraan & Penutup</span>
      </div>
      <div class="slide-tag">Next Steps</div>
    </div>

    <div class="content-body" style="justify-content: center; max-width: 1400px;">
      <div class="eyebrow" style="color: #EDDDA4; margin-bottom: 14px;">
        ☕ MARI BERKOLABORASI
      </div>
      <h1 class="headline" style="font-size: 64px; line-height: 1.12; margin-bottom: 20px; color: #FFFFFF;">
        Mari Bersama Memajukan Kualitas & Standar Industri Kopi Indonesia.
      </h1>
      <p class="subhead" style="font-size: 22px; line-height: 1.55; color: #D4C7C0; max-width: 1200px; margin-bottom: 44px;">
        Cangkir kopi yang luar biasa tercipta dari pemahaman sains yang tepat dan rasa hormat pada setiap butir ceri kopi nusantara.
      </p>

      <div class="grid-3" style="gap: 28px; margin-bottom: 40px;">
        <div class="card-roast" style="border-top: 3px solid #EDDDA4;">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #EDDDA4; font-weight: 700; text-transform: uppercase; margin-bottom: 8px;">UNTUK PEMILIK KEDAI KOPI</div>
          <h3 style="font-family: 'Newsreader', serif; font-size: 24px; color: #FFFFFF; margin-bottom: 8px;">Standarisasi Staf Bar Anda</h3>
          <p style="font-size: 14px; color: #D4C7C0; line-height: 1.6;">
            Adopsi kurikulum Cherry Edu untuk orientasi barista baru. Pangkas pemborosan bahan baku saat kalibrasi dan jaga konsistensi rasa seduhan.
          </p>
        </div>

        <div class="card-roast" style="border-top: 3px solid #BE4252;">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #FDA4AF; font-weight: 700; text-transform: uppercase; margin-bottom: 8px;">UNTUK MITRA & INVESTOR</div>
          <h3 style="font-family: 'Newsreader', serif; font-size: 24px; color: #FFFFFF; margin-bottom: 8px;">Akselerasi Ekspansi B2B</h3>
          <p style="font-size: 14px; color: #D4C7C0; line-height: 1.6;">
            Bergabunglah dalam putaran tahap awal kami untuk mempercepat pengembangan fitur manajemen kafe dan ekspansi ke hub kopi regional.
          </p>
        </div>

        <div class="card-roast" style="border-top: 3px solid #638059;">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #A7F3D0; font-weight: 700; text-transform: uppercase; margin-bottom: 8px;">UNTUK BARISTA & BREWER</div>
          <h3 style="font-family: 'Newsreader', serif; font-size: 24px; color: #FFFFFF; margin-bottom: 8px;">Mulai Belajar Hari Ini</h3>
          <p style="font-size: 14px; color: #D4C7C0; line-height: 1.6;">
            Akses materi fondasi hulu-hilir dan 6 alat kerja meja bar secara bebas biaya di smartphone Anda hari ini di cherryedu.vercel.app.
          </p>
        </div>
      </div>

      <div class="card-roast" style="padding: 20px 32px; display: flex; justify-content: space-between; align-items: center; background: rgba(255, 255, 255, 0.03);">
        <div>
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #EDDDA4; text-transform: uppercase; letter-spacing: 0.08em;">KANAL INFORMASI & KEMITRAAN RESMI</div>
          <div style="font-size: 17px; color: #FFFFFF; margin-top: 4px;">
            Platform Web: <strong>cherryedu.vercel.app</strong> • Email: <strong>halo@cherryroastery.id</strong> • Jakarta Selatan
          </div>
        </div>
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 13px; color: #EDDDA4;">
          Team Cherry Coffee Roastery © 2026
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <span>Cherry Edu — Indonesian Specialty Coffee Academy</span>
      <span>Halaman 14 / 14</span>
    </div>
  </div>

</body>
</html>
`;

async function generatePDF() {
  console.log('Generating Deck HTML & PDF...');
  
  // Write temporary HTML file
  const tempHtmlPath = path.join(__dirname, '../public/deck_pdf_temp.html');
  fs.writeFileSync(tempHtmlPath, htmlContent);

  const browser = await chromium.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: true
  });

  const page = await browser.newPage({
    viewport: { width: 1920, height: 1080 }
  });

  await page.setContent(htmlContent, { waitUntil: 'networkidle' });

  // Generate to root and docs
  const rootPdfPath = path.join(__dirname, '../CherryEdu_Pitch_Deck.pdf');
  const docsPdfPath = path.join(__dirname, '../docs/CherryEdu_Pitch_Deck.pdf');

  await page.pdf({
    path: rootPdfPath,
    width: '1920px',
    height: '1080px',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  });
  console.log('Generated:', rootPdfPath);

  fs.copyFileSync(rootPdfPath, docsPdfPath);
  console.log('Copied to:', docsPdfPath);

  await browser.close();
  
  // Clean temp file
  if (fs.existsSync(tempHtmlPath)) {
    fs.unlinkSync(tempHtmlPath);
  }

  console.log('All PDF files generated successfully!');
}

generatePDF().catch(err => {
  console.error('Failed to generate PDF:', err);
  process.exit(1);
});
