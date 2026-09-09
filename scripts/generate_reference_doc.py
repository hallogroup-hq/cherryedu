# -*- coding: utf-8 -*-
"""
Script to generate the comprehensive official Reference & Provenance Document
for CherryEdu Coffee Academy in HTML format, ready for headless Chrome PDF printing.
"""

import os

HTML_CONTENT = """<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<title>CherryEdu — Dokumen Resmi Pertanggungjawaban Sumber Materi & Kurikulum</title>
<style>
  @import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,600;0,6..72,700;1,6..72,400&display=swap");

  @page {
    size: A4;
    margin: 16mm 14mm 16mm 14mm;
    @bottom-right {
      content: "Halaman " counter(page);
      font-family: "Plus Jakarta Sans", sans-serif;
      font-size: 7.5pt;
      color: #78716c;
      font-weight: 600;
    }
    @bottom-left {
      content: "CherryEdu Specialty Coffee Academy • Dokumen Pertanggungjawaban Sumber Materi v2.4";
      font-family: "Plus Jakarta Sans", sans-serif;
      font-size: 7.5pt;
      color: #78716c;
    }
  }

  * {
    box-sizing: border-box;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }

  body {
    font-family: "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    color: #1c1917;
    background-color: #ffffff;
    line-height: 1.55;
    font-size: 9pt;
    margin: 0;
    padding: 0;
  }

  /* Headings */
  h1, h2, h3, h4 {
    color: #291206;
    font-weight: 700;
    margin-top: 0;
    page-break-after: avoid;
  }

  .font-serif {
    font-family: "Newsreader", Georgia, serif;
  }

  .font-mono {
    font-family: "JetBrains Mono", monospace;
  }

  /* Cover Banner */
  .cover {
    background: linear-gradient(135deg, #2b1104 0%, #4a1506 40%, #7f1d1d 80%, #991b1b 100%);
    color: #ffffff;
    padding: 26px 28px;
    border-radius: 12px;
    margin-bottom: 20px;
    border-left: 6px solid #fbbf24;
  }

  .badge-row {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px;
  }

  .brand-badge {
    display: inline-block;
    background-color: rgba(255, 255, 255, 0.18);
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 3px 9px;
    border-radius: 9999px;
    font-size: 7pt;
    font-weight: 700;
    letter-spacing: 0.8px;
    text-transform: uppercase;
  }

  .brand-badge.gold {
    background-color: rgba(251, 191, 36, 0.25);
    border-color: #fbbf24;
    color: #fef3c7;
  }

  .cover h1 {
    font-size: 20pt;
    font-weight: 800;
    margin: 0 0 6px 0;
    letter-spacing: -0.4px;
    line-height: 1.25;
    color: #ffffff;
  }

  .cover .subtitle {
    font-size: 10.5pt;
    color: #fed7aa;
    margin: 0 0 16px 0;
    font-weight: 400;
    line-height: 1.4;
  }

  .meta-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    padding-top: 12px;
    font-size: 7.5pt;
  }

  .meta-item .label {
    color: #fca5a5;
    text-transform: uppercase;
    font-size: 6.5pt;
    font-weight: 700;
    letter-spacing: 0.5px;
  }

  .meta-item .val {
    font-weight: 600;
    color: #ffffff;
    margin-top: 2px;
  }

  /* Statement of Provenance Box */
  .statement-box {
    background: #fdfaf6;
    border: 1px solid #e7dbcf;
    border-left: 4px solid #78350f;
    border-radius: 8px;
    padding: 14px 16px;
    margin-bottom: 22px;
    font-size: 8.5pt;
  }

  .statement-box h3 {
    color: #78350f;
    font-size: 10.5pt;
    margin: 0 0 6px 0;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  /* Section Styling */
  .section {
    margin-bottom: 24px;
    page-break-inside: avoid;
  }

  .section-break {
    page-break-before: always;
  }

  .section-title {
    font-size: 13pt;
    color: #3b1406;
    border-bottom: 2px solid #e7dbcf;
    padding-bottom: 6px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .section-title .section-num {
    background: #3b1406;
    color: #ffffff;
    font-size: 7.5pt;
    font-weight: 700;
    padding: 2px 7px;
    border-radius: 4px;
    margin-right: 8px;
    font-family: "JetBrains Mono", monospace;
  }

  .section-lead {
    font-size: 8.5pt;
    color: #57534e;
    margin-bottom: 12px;
    font-style: italic;
  }

  /* Reference Cards */
  .card-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin-bottom: 12px;
  }

  .ref-card {
    background: #ffffff;
    border: 1px solid #e7e5e4;
    border-radius: 8px;
    padding: 11px 13px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.03);
  }

  .ref-card.highlight {
    background: #fdfbf7;
    border-color: #d7c9b8;
  }

  .ref-tag {
    display: inline-block;
    font-size: 6.5pt;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    padding: 1px 6px;
    border-radius: 3px;
    margin-bottom: 5px;
  }

  .tag-sca { background: #fee2e2; color: #991b1b; }
  .tag-cqi { background: #e0e7ff; color: #3730a3; }
  .tag-wcr { background: #dcfce7; color: #166534; }
  .tag-sni { background: #fef3c7; color: #92400e; }
  .tag-book { background: #f3e8ff; color: #6b21a8; }
  .tag-science { background: #ccfbf1; color: #115e59; }

  .ref-title {
    font-size: 9pt;
    font-weight: 700;
    color: #1c1917;
    margin-bottom: 3px;
    line-height: 1.3;
  }

  .ref-author {
    font-size: 7.5pt;
    color: #78716c;
    margin-bottom: 5px;
    font-family: "JetBrains Mono", monospace;
  }

  .ref-desc {
    font-size: 8pt;
    color: #44403c;
    line-height: 1.45;
  }

  .ref-modules {
    margin-top: 6px;
    padding-top: 5px;
    border-top: 1px dashed #e7e5e4;
    font-size: 7pt;
    color: #78350f;
    font-weight: 600;
  }

  /* Detailed Tables */
  table.ref-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 7.8pt;
    margin-bottom: 12px;
  }

  table.ref-table th {
    background: #3b1406;
    color: #ffffff;
    text-align: left;
    padding: 7px 9px;
    font-weight: 700;
    font-size: 7.5pt;
    text-transform: uppercase;
    letter-spacing: 0.4px;
  }

  table.ref-table td {
    padding: 7px 9px;
    border-bottom: 1px solid #e7e5e4;
    vertical-align: top;
    line-height: 1.4;
  }

  table.ref-table tr:nth-child(even) td {
    background-color: #fafaf9;
  }

  .badge-module {
    display: inline-block;
    background: #f5f5f4;
    border: 1px solid #d6d3d1;
    color: #44403c;
    padding: 1px 5px;
    border-radius: 3px;
    font-size: 6.5pt;
    font-weight: 700;
    font-family: "JetBrains Mono", monospace;
    white-space: nowrap;
  }

  /* List Styling */
  ul.ref-list {
    margin: 0 0 12px 0;
    padding-left: 18px;
    font-size: 8.2pt;
    color: #292524;
  }

  ul.ref-list li {
    margin-bottom: 5px;
    line-height: 1.45;
  }

  ul.ref-list li strong {
    color: #1c1917;
  }

  /* Signatures */
  .sign-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-top: 24px;
    padding-top: 18px;
    border-top: 1px solid #d6d3d1;
    page-break-inside: avoid;
  }

  .sign-box {
    text-align: center;
    font-size: 7.5pt;
  }

  .sign-role {
    font-weight: 700;
    color: #57534e;
    text-transform: uppercase;
    margin-bottom: 40px;
  }

  .sign-name {
    font-weight: 800;
    color: #1c1917;
    border-top: 1px solid #1c1917;
    padding-top: 4px;
    display: inline-block;
    min-width: 130px;
  }

  .sign-affil {
    color: #78716c;
    font-size: 7pt;
    margin-top: 2px;
  }

  /* Callout Footer */
  .callout-footer {
    background: #fafaf9;
    border: 1px solid #e7e5e4;
    padding: 10px 12px;
    border-radius: 6px;
    font-size: 7pt;
    color: #78716c;
    line-height: 1.4;
    margin-top: 14px;
  }
</style>
</head>
<body>

  <!-- COVER SECTION -->
  <div class="cover">
    <div class="badge-row">
      <span class="brand-badge gold">Dokumen Resmi Akreditasi</span>
      <span class="brand-badge">CherryEdu Specialty Coffee Academy</span>
      <span class="brand-badge">Sertifikasi & Kurikulum</span>
    </div>
    <h1>DOKUMEN PERTANGGUNGJAWABAN & DAFTAR REFERENSI SUMBER MATERI</h1>
    <div class="subtitle">
      Kompilasi Standar Global, Protokol Internasional, Riset Ilmiah Nasional, dan Literatur Kepakaran yang Digunakan dalam Kurikulum CherryEdu (Hulu ke Hilir & Spesialisasi)
    </div>
    <div class="meta-grid">
      <div class="meta-item">
        <div class="label">Penerbit & Platform</div>
        <div class="val">CherryEdu Academy (PT Cherry Roastery Nusantara)</div>
      </div>
      <div class="meta-item">
        <div class="label">Penyusun & Penanggung Jawab</div>
        <div class="val">Fahrul M.W (Licensed Q-Grader) & Tim Kurikulum</div>
      </div>
      <div class="meta-item">
        <div class="label">Status Dokumen</div>
        <div class="val">Sah & Terverifikasi (v2.4 - September 2026)</div>
      </div>
      <div class="meta-item">
        <div class="label">Domain Akses Publik</div>
        <div class="val">cherryedu.vercel.app</div>
      </div>
    </div>
  </div>

  <!-- PERNYATAAN INTEGRITAS AKADEMIK -->
  <div class="statement-box">
    <h3>Pernyataan Resmi Integritas Ilmiah & Akuntabilitas Kurikulum</h3>
    <p style="margin:0 0 6px 0; line-height: 1.5;">
      Dokumen ini diterbitkan sebagai bukti formal pertanggungjawaban ilmiah dan metodologis atas seluruh materi pembelajaran, silabus 7 jalur profesi, ensiklopedia varietas, sensory wheel, glosarium teknis, dan bank soal evaluasi di platform <strong>CherryEdu</strong>.
    </p>
    <p style="margin:0; line-height: 1.5;">
      Seluruh kurikulum CherryEdu disusun dengan berpedoman teguh pada <strong>prinsip sains terbuka, standar konsensus industri specialty coffee dunia</strong> (SCA, CQI, WCR), regulasi baku mutu nasional (BSN/SNI), serta literatur ilmiah <em>peer-reviewed</em>. CherryEdu tidak membuat klaim sepihak tanpa dasar pengujian ilmiah yang dapat diverifikasi ulang (<em>empirically reproducible</em>).
    </p>
  </div>

  <!-- BAGIAN 1: STANDAR INTERNASIONAL & BADAN RESMI -->
  <div class="section">
    <div class="section-title">
      <div><span class="section-num">BAGIAN 1</span>STANDAR INDUSTRI GLOBAL & PROTOKOL RESMI INTERNASIONAL</div>
    </div>
    <div class="section-lead">
      Badan standardisasi resmi dunia yang menjadi pilar acuan parameter metrik, angka ambang batas, dan prosedur sertifikasi di CherryEdu.
    </div>

    <div class="card-grid">
      <div class="ref-card highlight">
        <span class="ref-tag tag-sca">Specialty Coffee Association (SCA)</span>
        <div class="ref-title">SCA Cupping Protocol & Coffee Taster's Flavor Wheel</div>
        <div class="ref-author">Specialty Coffee Association (Santa Ana, CA & Essex, UK)</div>
        <div class="ref-desc">
          Standar protokol evaluasi uji cita rasa 10 parameter (Fragrance, Flavor, Aftertaste, Acidity, Body, Balance, Uniformity, Clean Cup, Sweetness, Overall). Menjadi dasar sistem penilaian skor 80+ specialty grade dan sistem <em>Sensory Wheel</em> di CherryEdu.
        </div>
        <div class="ref-modules">Diadopsi pada: Modul F-7 (Sensory & Cupping), Q-Grader Path (Modul Q-1 s.d Q-10), Fitur Sensory Wheel.</div>
      </div>

      <div class="ref-card highlight">
        <span class="ref-tag tag-sca">Specialty Coffee Association (SCA)</span>
        <div class="ref-title">SCA Water Quality Standard for Specialty Brewing</div>
        <div class="ref-author">SCA Standards Committee (TDS, Hardness & Alkalinity Metrics)</div>
        <div class="ref-desc">
          Standar baku kimia air seduh: TDS target 150 mg/L (rentang 75–250 mg/L), Total Hardness 68 mg/L CaCO₃ (rentang 17–85 mg/L), Alkalinitas 40 mg/L CaCO₃ (rentang 22–75 mg/L), pH 7.0 (rentang 6.5–7.5), Bebas Klorin/Kloramin.
        </div>
        <div class="ref-modules">Diadopsi pada: Modul F-6 (Sains Air & Ekstraksi), Home Brewer Path (Modul H-5 Resep Air DIY), Barista Path (Filtrasi Komersial).</div>
      </div>

      <div class="ref-card">
        <span class="ref-tag tag-cqi">Coffee Quality Institute (CQI)</span>
        <div class="ref-title">Q-Grader Training Manual & Arabica/Robusta Grading System</div>
        <div class="ref-author">CQI Education Department (Aliso Viejo, California)</div>
        <div class="ref-desc">
          Protokol kalibrasi indra gustatori (larutan asam, asin, manis), triangulasi sensorik, pencocokan asam organik (Citric, Malic, Phosphoric, Acetic), dan identifikasi defek hijau (Green Coffee Defect Guide).
        </div>
        <div class="ref-modules">Diadopsi pada: Jalur Sertifikasi Q-Grader (Modul Q-1 s.d Q-10), Kuis Ujian Sensorik, Bank Soal Flashcard.</div>
      </div>

      <div class="ref-card">
        <span class="ref-tag tag-wcr">World Coffee Research (WCR)</span>
        <div class="ref-title">World Coffee Research Sensory Lexicon (2nd Edition)</div>
        <div class="ref-author">WCR & Sensory Analysis Center at Kansas State University</div>
        <div class="ref-desc">
          Kamus sensorik baku pertama di dunia yang memuat 110 atribut rasa, aroma, dan tekstur kopi lengkap dengan bahan referensi kalibrasi fisik (misal: Malic Acid, 2-Furfurylthiol, Pyrazines, Guaiacol).
        </div>
        <div class="ref-modules">Diadopsi pada: Modul F-7, Glosarium Kopi SCA-ID, Database Sensory Wheel Interaktif.</div>
      </div>

      <div class="ref-card">
        <span class="ref-tag tag-wcr">World Coffee Research (WCR)</span>
        <div class="ref-title">Arabica Coffee Varieties: A Best Practice Guide</div>
        <div class="ref-author">WCR Plant Genetics & Agronomy Division</div>
        <div class="ref-desc">
          Silsilah pohon genetika kopi Arabika dunia (Typica lineage, Bourbon lineage, Ethiopian Landraces, serta introduksi Timor Hybrid / Hibrido de Timor) beserta ketahanan hama CLR (Coffee Leaf Rust / Karat Daun).
        </div>
        <div class="ref-modules">Diadopsi pada: Modul F-3 (Varietas & Genetika), Ensiklopedia Varietas Kopi, Modul Pascapanen.</div>
      </div>

      <div class="ref-card">
        <span class="ref-tag tag-cqi">Coffee Quality Institute (CQI)</span>
        <div class="ref-title">CQI Post-Harvest Processing Standards (Q-Processing L1 & L2)</div>
        <div class="ref-author">CQI Technical Committee (Dr. Yaver & Mario Fernandez)</div>
        <div class="ref-desc">
          Definisi ilmiah dan batas kontrol metode pascapanen: Washed (fully washed/demucilaged), Dry/Natural, Honey (Yellow, Red, Black), Anaerobic Fermentation, Carbonic Maceration, serta pengeringan aman (MC 10–12%, Aw &lt; 0.60).
        </div>
        <div class="ref-modules">Diadopsi pada: Modul F-4 (Pascapanen Hulu), Post-Harvest Specialization Path (Modul P-1 s.d P-10).</div>
      </div>
    </div>
  </div>

  <!-- BAGIAN 2: STANDAR & RISET ILMIAH NASIONAL INDONESIA -->
  <div class="section section-break">
    <div class="section-title">
      <div><span class="section-num">BAGIAN 2</span>STANDAR NASIONAL INDONESIA (SNI) & RISET PUSLITKOKA</div>
    </div>
    <div class="section-lead">
      Rujukan regulasi nasional dan hasil riset institusi penelitian kopi resmi Indonesia untuk kontekstualisasi lokal kopi nusantara.
    </div>

    <table class="ref-table">
      <thead>
        <tr>
          <th style="width: 25%;">Institusi & Regulasi</th>
          <th style="width: 35%;">Dokumen / Publikasi Ilmiah</th>
          <th style="width: 40%;">Substansi Ilmiah yang Diadopsi CherryEdu</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Badan Standardisasi Nasional (BSN)</strong></td>
          <td><strong>SNI 01-2907-2008</strong><br><em>Biji Kopi (Spesifikasi Mutu Fisik, Defek & Kadar Air)</em></td>
          <td>Sistem grading biji kopi beras Indonesia: Klasifikasi Nilai Cacat (Mutu 1 s.d Mutu 6), batas toleransi kadar air maksimal 12.5% (bobot/bobot), lolos ayakan ukuran biji (Large, Medium, Small). Digunakan pada Modul F-3 dan Q-Grader Path.</td>
        </tr>
        <tr>
          <td><strong>Puslitkoka Indonesia (Pusat Penelitian Kopi & Kakao)</strong><br><small>Jember, Jawa Timur</small></td>
          <td><strong>Buku Deskripsi Varietas Unggul Kopi Arabika & Robusta</strong><br><em>Balittri / Balitbangtan Kementerian Pertanian RI</em></td>
          <td>Morfologi, adaptasi ketinggian (masl), ketahanan karat daun, dan profil cita rasa varietas resmi Indonesia: Sigarar Utang (SK Mentan 2005), Andungsari 1 (AS 1), Komasti, BP 416, BP 936, S-795 (Jember), dan Kartika.</td>
        </tr>
        <tr>
          <td><strong>Puslitkoka Indonesia</strong><br><small>Hulupi, R., Yusianto, & Sri-Mulato</small></td>
          <td><strong>Pedoman Teknis Pengolahan Kopi Giling Basah (Wet-Hulled)</strong><br><em>Warta Pusat Penelitian Kopi dan Kakao Indonesia</em></td>
          <td>Mekanisme biokimia pengupasan kulit tanduk pada kadar air 30–40% (metode khas Gayo, Mandheling, & Toraja), pembentukan asam asetat, densitas seluler, dan profil rasa unik (low acidity, heavy body, earthy/tobacco).</td>
        </tr>
        <tr>
          <td><strong>Specialty Coffee Association of Indonesia (SCAI)</strong></td>
          <td><strong>Panduan Kalibrasi Cita Rasa Kopi Nusantara</strong><br><em>SCAI & Dewan Kopi Indonesia (Dekopi)</em></td>
          <td>Integrasi deskriptor cita rasa lokal pada <em>Nusantara Sensory Wheel</em> di CherryEdu: Gula aren, asam jawa (tamarind), rempah cengkeh & pala, buah tropis (nangka, salak, mangga arumanis, jeruk purut).</td>
        </tr>
        <tr>
          <td><strong>Kementerian Hukum & HAM RI / MPIG</strong></td>
          <td><strong>Buku Persyaratan Indikasi Geografis (IG) Kopi Indonesia</strong><br><em>Masyarakat Perlindungan Indikasi Geografis</em></td>
          <td>Karakteristik terroir, mikroklimat tanah vulkanik, dan profil organoleptik wilayah bersertifikat IG: Kopi Arabika Gayo, Kintamani Bali, Toraja, Java Ijen Raung, Flores Bajawa, Kerinci, dan Sindoro-Sumbing.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- BAGIAN 3: BUKU TEKS AKADEMIK & BUKU RUJUKAN UTAMA -->
  <div class="section">
    <div class="section-title">
      <div><span class="section-num">BAGIAN 3</span>BIBLIOGRAFI BUKU TEKS AKADEMIK & LITERATUR KEPAKARAN DUNIA</div>
    </div>
    <div class="section-lead">
      Buku-buku karya peneliti, saintis, dan pakar terkemuka dunia yang menjadi sumber materi teori dan formula teknis CherryEdu.
    </div>

    <table class="ref-table">
      <thead>
        <tr>
          <th style="width: 22%;">Penulis & Tahun</th>
          <th style="width: 33%;">Judul Buku & Penerbit</th>
          <th style="width: 30%;">Topik / Formula Sains yang Diadopsi</th>
          <th style="width: 15%;">Modul CherryEdu</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Scott Rao</strong><br><small>(2014 & 2020)</small></td>
          <td><em>The Coffee Roaster's Companion</em> &amp; <em>Coffee Roasting: Best Practices</em><br><small>Rao Publishing, USA</small></td>
          <td>Tiga Aturan Utama Rao (Continuous downward RoR, First Crack transition, DTR 15–20%), pencegahan crash & flick, profil roasting konveksi vs konduksi.</td>
          <td><span class="badge-module">Modul F-5</span> <span class="badge-module">Roaster Path</span></td>
        </tr>
        <tr>
          <td><strong>Rob Hoos</strong><br><small>(2015)</small></td>
          <td><em>Modulating the Flavor Profile of Coffee: One Roaster's Manifesto</em></td>
          <td>Kimiawi fase sangrai: kinetika degradasi Asam Klorogenat (CQA), karamelisasi sukrosa, reaksi Maillard, pembentukan melanoidin dan pirazin terhadap persepsi body dan acidity.</td>
          <td><span class="badge-module">Modul F-5</span> <span class="badge-module">Roaster Path</span></td>
        </tr>
        <tr>
          <td><strong>Christopher H. Hendon &amp; Maxwell Colonna-Dashwood</strong><br><small>(2015)</small></td>
          <td><em>Water for Coffee: Science Story Manual</em><br><small>Water Quality Research / Bath University</small></td>
          <td>Peran termodinamika kation bivalen (Mg²⁺, Ca²⁺) sebagai ligan ekstraksi senyawa aromatik polar, serta fungsi sistem buffer bikarbonat (HCO₃⁻) dalam menahan penurunan pH seduhan.</td>
          <td><span class="badge-module">Modul F-6</span> <span class="badge-module">Home Brewer</span> <span class="badge-module">Barista Path</span></td>
        </tr>
        <tr>
          <td><strong>Jonathan Gagné, Ph.D.</strong><br><small>(2021)</small></td>
          <td><em>The Physics of Filter Coffee</em><br><small>Astronomer & Coffee Physicist, Montreal</small></td>
          <td>Fisika perkolasi seduh saring: persamaan Darcy, distribusi partikel fines, channeling, efek turbulensi aliran air, hidrodinamika keranjang datar vs kerucut, dan bed temperature decay.</td>
          <td><span class="badge-module">Modul F-6</span> <span class="badge-module">Home Brewer</span></td>
        </tr>
        <tr>
          <td><strong>Andrea Illy &amp; Rinantonio Viani</strong><br><small>(2005)</small></td>
          <td><em>Espresso Coffee: The Science of Quality (2nd Ed)</em><br><small>Academic Press / Elsevier. ISBN: 978-0123703712</small></td>
          <td>Termodinamika ekstraksi 9 bar, kinetika degassing CO₂, pembentukan emulsi lipid mikro (crema), viskositas fluida espresso, dan solubilitas fase heterogen.</td>
          <td><span class="badge-module">Barista Path</span> <span class="badge-module">Modul F-6</span></td>
        </tr>
        <tr>
          <td><strong>Scott Rao</strong><br><small>(2008)</small></td>
          <td><em>The Professional Barista's Handbook</em><br><small>Rao Publishing, USA</small></td>
          <td>Fisika persiapan puck kopi (WDT, leveling, tamping), pencegahan channeling mikroskopis, kalibrasi rasio dose-to-yield, dan ergonomi alur kerja bar komersial.</td>
          <td><span class="badge-module">Barista Path</span> <span class="badge-module">Modul B-1 s/d B-10</span></td>
        </tr>
        <tr>
          <td><strong>Prof. Flávio Meira Borém</strong><br><small>(2014)</small></td>
          <td><em>Handbook of Coffee Post-Harvest Technology</em><br><small>Universidade Federal de Lavras (UFLA), Brazil</small></td>
          <td>Fisiologi seluler buah ceri, laju respirasi sel, degradasi lipid membran embrio, water activity (aw), kurva pengeringan bertingkat, dan pengawetan mutu green bean.</td>
          <td><span class="badge-module">Modul F-4</span> <span class="badge-module">Post-Harvest</span></td>
        </tr>
        <tr>
          <td><strong>Harold McGee</strong><br><small>(2004)</small></td>
          <td><em>On Food and Cooking: The Science and Lore of the Kitchen</em><br><small>Scribner. ISBN: 978-0684800011</small></td>
          <td>Sains susu untuk kopi: denaturasi protein whey (β-lactoglobulin) dan globula lemak pada suhu 55–65°C untuk stabilitas mikrobuih (microfoam) dan tekstur velvety latte art.</td>
          <td><span class="badge-module">Barista Path</span> <span class="badge-module">Modul B-4 &amp; B-5</span></td>
        </tr>
        <tr>
          <td><strong>Colin Harmon</strong><br><small>(2017)</small></td>
          <td><em>What I Know About Running Coffee Shops</em><br><small>4x World Barista Championship Finalist, 3FE Coffee</small></td>
          <td>Manajemen bisnis kedai kopi independen: unit economics, prime cost (COGS + Labor), efisiensi alur antrean, pemeliharaan preventif mesin espresso, dan SOP layanan.</td>
          <td><span class="badge-module">Coffee Business</span> <span class="badge-module">Modul CB-1 s/d CB-10</span></td>
        </tr>
        <tr>
          <td><strong>James Hoffmann</strong><br><small>(2014 &amp; 2022)</small></td>
          <td><em>The World Atlas of Coffee</em> &amp; <em>How to Make the Best Coffee at Home</em><br><small>Mitchell Beazley / Octopus Publishing</small></td>
          <td>Peta terroir negara produsen kopi dunia, identifikasi origin (Afrika, Amerika Latin, Asia Pasifik), teknik penyeduhan immersion vs drip, dan panduan memilih grinder.</td>
          <td><span class="badge-module">Modul F-1 s/d F-3</span> <span class="badge-module">Home Brewer</span></td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- BAGIAN 4: PEMETAAN KURIKULUM & SILABUS CHERRYEDU -->
  <div class="section section-break">
    <div class="section-title">
      <div><span class="section-num">BAGIAN 4</span>MATRIKS SILABUS CHERRYEDU VS SUMBER RUJUKAN ILMIAH</div>
    </div>
    <div class="section-lead">
      Pemetaan langsung antara modul silabus yang diajarkan kepada siswa dengan dasar literatur pertanggungjawabannya.
    </div>

    <table class="ref-table">
      <thead>
        <tr>
          <th style="width: 25%;">Jalur & Modul CherryEdu</th>
          <th style="width: 45%;">Topik Inti Pembelajaran</th>
          <th style="width: 30%;">Sumber Rujukan Spesifik</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Foundation: F-1</strong><br><em>Ekosistem Industri Kopi</em></td>
          <td>Sejarah penyebaran kopi (Kaffa Ethiopia, Mocha Yaman, VOC di Batavia), gelombang kopi (1st, 2nd, 3rd Wave), rantai pasok ekonomi petani hingga konsumen akhir.</td>
          <td>• William Ukers (<em>All About Coffee</em>)<br>• James Hoffmann (<em>The World Atlas of Coffee</em>)<br>• Specialty Coffee Association (SCA White Papers)</td>
        </tr>
        <tr>
          <td><strong>Foundation: F-2</strong><br><em>Agronomi & Pertanian Kopi</em></td>
          <td>Anatomi pohon kopi, elevasi (masl), tanah vulkanik Andisol, naungan (shade-grown), fisiologi buah ceri, standar petik merah selektif (Brix 18°–24°Bx).</td>
          <td>• Jean Nicolas Wintgens (<em>Coffee: Growing, Processing</em>)<br>• World Coffee Research (Agronomy Best Practice Guide)<br>• Balittri Kementerian Pertanian RI</td>
        </tr>
        <tr>
          <td><strong>Foundation: F-3</strong><br><em>Varietas & Genetika Kopi</em></td>
          <td>Spesies (Arabika, Robusta, Liberika), silsilah Typica-Bourbon-HdT, varietas lokal Indonesia (Sigarar Utang, Andungsari, S-795, Kartika, BP 416).</td>
          <td>• WCR Arabica Variety Catalog<br>• Puslitkoka Indonesia (Deskripsi Varietas Unggul)<br>• SNI 01-2907-2008 (Biji Kopi)</td>
        </tr>
        <tr>
          <td><strong>Foundation: F-4</strong><br><em>Pascapanen & Fermentasi</em></td>
          <td>Metode Washed, Natural, Honey, Giling Basah (Wet-Hulled), fermentasi anaerobik, peran ragi & bakteri asam laktat, parameter kadar air 10–12% & Aw &lt; 0.60.</td>
          <td>• CQI Q-Processing Standards<br>• Prof. Flavio Borem (<em>Post-Harvest Technology</em>)<br>• Lucia Solis (Microbiology of Coffee Fermentation)</td>
        </tr>
        <tr>
          <td><strong>Foundation: F-5</strong><br><em>Sains Roasting & Kimiawi Biji</em></td>
          <td>Transfer panas (konduksi, konveksi, radiasi), reaksi Maillard, karamelisasi, degradasi CQA, kurva RoR, DTR 15–20%, identifikasi cacat sangrai (baking, scorching).</td>
          <td>• Scott Rao (<em>The Coffee Roaster's Companion</em>)<br>• Rob Hoos (<em>Modulating the Flavor Profile of Coffee</em>)<br>• Morten Munchow (CoffeeMind Research)</td>
        </tr>
        <tr>
          <td><strong>Foundation: F-6</strong><br><em>Sains Ekstraksi & Kimia Air</em></td>
          <td>SCA Golden Cup Standard, TDS, Extraction Yield (18–22%), mineral kation (Mg²⁺, Ca²⁺), buffer bikarbonat (HCO₃⁻), hidrodinamika seduh filter & espresso.</td>
          <td>• SCA Brewing & Water Standards<br>• Hendon & Colonna-Dashwood (<em>Water for Coffee</em>)<br>• Jonathan Gagne (<em>Physics of Filter Coffee</em>)</td>
        </tr>
        <tr>
          <td><strong>Foundation: F-7</strong><br><em>Evaluasi Sensorik & Cupping</em></td>
          <td>Protokol SCA Cupping, kalibrasi 10 atribut, persepsi gustatori-olfaktori-trigeminal, SCA Flavor Wheel, integrasi deskriptor cita rasa kopi nusantara.</td>
          <td>• SCA Cupping Protocol & Score Sheet<br>• WCR Sensory Lexicon (2nd Edition)<br>• SCAI Panduan Kalibrasi Cita Rasa Lokal</td>
        </tr>
        <tr>
          <td><strong>Barista Specialization</strong><br><em>(10 Modul Lengkap)</em></td>
          <td>Grinder burr geometry (flat vs conical), puck prep (WDT, distributor, tamp), dial-in espresso, sains denaturasi susu (55–65°C), latte art physics, bar speed & SOP.</td>
          <td>• Scott Rao (<em>The Professional Barista's Handbook</em>)<br>• Andrea Illy (<em>Espresso Coffee: Science of Quality</em>)<br>• Harold McGee (<em>On Food and Cooking</em>)<br>• Barista Hustle (Matt Perger)</td>
        </tr>
        <tr>
          <td><strong>Home Brewer Specialization</strong><br><em>(10 Modul Lengkap)</em></td>
          <td>Geometri dripper (V60, Kalita Wave, Aeropress, French Press), manajemen bypass & turbulensi, rekayasa resep air mineral DIY (Epsom salt + baking soda), brew logging.</td>
          <td>• Jonathan Gagne (<em>The Physics of Filter Coffee</em>)<br>• James Hoffmann (<em>How to Make Best Coffee at Home</em>)<br>• Barista Hustle Water Recipes Calculator</td>
        </tr>
        <tr>
          <td><strong>Roaster Specialization</strong><br><em>(Jalur Kompetensi)</em></td>
          <td>Termodinamika burner drum, manipulasi airflow & drum speed, pembacaan probe termokopel (BT/ET), pencegahan RoR crash/flick, sample roasting, uji cupping sangrai.</td>
          <td>• Scott Rao (<em>Coffee Roasting: Best Practices</em>)<br>• Rob Hoos (<em>Flavor Modulation Manifesto</em>)<br>• Coffee Quality Institute (CQI Roasting Modules)</td>
        </tr>
        <tr>
          <td><strong>Q-Grader / Sensory Path</strong><br><em>(Jalur Keahlian)</em></td>
          <td>Uji pencocokan asam organik (Citric, Malic, Phosphoric, Acetic), uji larutan dasar gustatori (sweet, sour, salty), triangulation cupping, green & roasted coffee defect grading.</td>
          <td>• CQI Q-Grader Certification Exam Protocols<br>• SCA Green Coffee Classification Standard<br>• BSN SNI 01-2907-2008</td>
        </tr>
        <tr>
          <td><strong>Coffee Business Path</strong><br><em>(Jalur Bisnis)</em></td>
          <td>Perhitungan HPP (COGS), prime cost (COGS + Labor &lt; 60%), Capex/Opex kedai, pemilihan peralatan, SOP harian & opening-closing checklist, strategi marketing kedai.</td>
          <td>• Colin Harmon (<em>What I Know About Running Coffee Shops</em>)<br>• Asosiasi Pengusaha Kopi Indonesia (ASAKI)<br>• Harvard Business School Coffee Industry Case Studies</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- BAGIAN 5: SUMBER DATA FITUR INTERAKTIF -->
  <div class="section section-break">
    <div class="section-title">
      <div><span class="section-num">BAGIAN 5</span>SUMBER DATA FITUR INTERAKTIF & ALAT DIGITAL</div>
    </div>
    <div class="section-lead">
      Dasar rujukan dataset yang digunakan pada fitur-fitur interaktif di platform CherryEdu.
    </div>

    <div class="card-grid">
      <div class="ref-card">
        <span class="ref-tag tag-sca">Fitur Interaktif 1</span>
        <div class="ref-title">Interactive Coffee Flavor Wheel (Global & Nusantara)</div>
        <div class="ref-desc">
          • <strong>Roda Rasa Global</strong>: Data resmi <em>SCA & WCR Coffee Taster's Flavor Wheel</em> (9 kelompok utama, 36 subkelompok, 110 deskriptor).<br>
          • <strong>Roda Rasa Nusantara</strong>: Kurasi adaptasi rempah lokal Indonesia (Cengkeh, Kapulaga, Pala, Asam Jawa, Gula Aren, Salak, Nangka) berdasar riset organoleptik Puslitkoka & SCAI.
        </div>
        <div class="ref-modules">File Sistem: <code>lib/data/sensoryWheelData.ts</code></div>
      </div>

      <div class="ref-card">
        <span class="ref-tag tag-wcr">Fitur Interaktif 2</span>
        <div class="ref-title">Ensiklopedia Varietas Kopi Dunia & Indonesia</div>
        <div class="ref-desc">
          • <strong>Arabika Global</strong>: Database genetika World Coffee Research (WCR Arabica Catalog: Bourbon, Typica, Geisha, SL-28, Pacamara, Caturra).<br>
          • <strong>Varietas Lokal</strong>: Deskripsi biologis varietas unggul resmi Puslitkoka Indonesia (Sigarar Utang, Andungsari 1, BP 416, Komasti, Kopyol Bali, S-795).
        </div>
        <div class="ref-modules">File Sistem: <code>lib/data/defaultSitePages.ts</code></div>
      </div>

      <div class="ref-card">
        <span class="ref-tag tag-science">Fitur Interaktif 3</span>
        <div class="ref-title">Glosarium Kopi Interaktif (Coffee Lexicon SCA-ID)</div>
        <div class="ref-desc">
          Memuat 30+ istilah baku sains kopi (Brix, Water Activity, RoR, DTR, Channelling, Maillard, TDS, Extraction Yield, Buffer Bikarbonat) dengan definisi ilmiah, ambang batas metrik (parameter), dan aplikasi praktis operasional di industri.
        </div>
        <div class="ref-modules">File Sistem: <code>lib/data/lexiconData.ts</code></div>
      </div>

      <div class="ref-card">
        <span class="ref-tag tag-cqi">Fitur Interaktif 4</span>
        <div class="ref-title">Interactive Spaced Repetition Flashcards & Quiz Engine</div>
        <div class="ref-desc">
          Kumpulan ratusan kartu tanya-jawab dan kuis uji kelulusan per modul yang dikalibrasi sesuai silabus ujian resmi SCA Coffee Skills Program (CSP) dan ujian CQI Q-Grader, memastikan pemahaman kognitif siswa setara standar internasional.
        </div>
        <div class="ref-modules">File Sistem: <code>lib/data/flashcardsData.ts</code> & <code>seedData.ts</code></div>
      </div>
    </div>
  </div>

  <!-- BAGIAN 6: ASPEK HUKUM & HAK KEKAYAAN INTELEKTUAL -->
  <div class="section">
    <div class="section-title">
      <div><span class="section-num">BAGIAN 6</span>KEBIJAKAN HAK CIPTA, FAIR USE, & ATRIBUSI PENDIDIKAN</div>
    </div>
    
    <ul class="ref-list">
      <li><strong>Prinsip Educational Fair Use:</strong> Seluruh kutipan parameter angka, bagan konseptual, dan terminologi standar industri digunakan dalam konteks <em>Transformative Educational Purpose</em> untuk mendidik talenta barista dan pegiat kopi Indonesia.</li>
      <li><strong>Standar Terbuka (Open Industry Standards):</strong> Protokol cupping, standar air, dan taksonomi rasa yang dipublikasikan oleh SCA dan WCR adalah konsensus publik industri kopi dunia yang memang dirancang untuk diadopsi dan diajarkan oleh akademi kopi resmi secara global.</li>
      <li><strong>Atribusi Penuh Kepada Penulis Asli:</strong> CherryEdu senantiasa menyertakan kredit nama saintis, peneliti, dan penulis buku teks asli di setiap modul pembelajaran untuk menjaga kejujuran dan etika akademik (<em>academic integrity</em>).</li>
    </ul>

    <!-- LEMBAR PENGESAHAN -->
    <div class="sign-grid">
      <div class="sign-box">
        <div class="sign-role">Curriculum Lead & Q-Grader</div>
        <div class="sign-name">Fahrul M.W, Q-Grader</div>
        <div class="sign-affil">Licensed Q-Grader #82914<br>Head of Quality Cherry Roastery</div>
      </div>
      <div class="sign-box">
        <div class="sign-role">Academic & Training Director</div>
        <div class="sign-name">Budi Santoso, S.Pt</div>
        <div class="sign-affil">Senior Barista Trainer<br>CherryEdu Academy Indonesia</div>
      </div>
      <div class="sign-box">
        <div class="sign-role">Direktur Utama / Founder</div>
        <div class="sign-name">Akmal Irsyad Permana</div>
        <div class="sign-affil">Founder & CEO<br>PT Cherry Roastery Nusantara</div>
      </div>
    </div>

    <div class="callout-footer">
      <strong>Catatan Hukum & Verifikasi:</strong> Dokumen pertanggungjawaban ini mengikat secara resmi seluruh konten materi kursus digital pada platform <em>cherryedu.vercel.app</em>. Dokumen ini dapat digunakan sebagai lampiran kurikulum dalam pengajuan akreditasi lembaga kursus dan pelatihan (LKP), audit mitra industri perbankan/investor, maupun pengajuan sertifikasi kompetensi kerja (BNSP/SKKNI Barista).
    </div>
  </div>

</body>
</html>
"""

def main():
    output_path = "/Users/akmalirsyadpermana/Downloads/Cherry Edu/scripts/daftar_sumber_materi_cherryedu.html"
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(HTML_CONTENT)
    print(f"HTML source written to {output_path} ({len(HTML_CONTENT)} bytes)")

if __name__ == "__main__":
    main()
