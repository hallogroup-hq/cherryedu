export type RoasterV2Case={id:string;module:string;brief:string;prompt:string;newEvidence:string;revisionPrompt:string;modelReasoning:string};
export type RoasterV2Diagnostic={id:string;module:string;scenario:string;options:{text:string;feedback:string}[];correct:number;rationale:string};
export const ROASTER_V2_CASES:RoasterV2Case[]=[
  {
    "id": "rvc-01",
    "module": "M01",
    "brief": "Pemilik ingin kopi “paling light” untuk semua menu.",
    "prompt": "Bagaimana mengubah permintaan ini menjadi brief yang bisa dinilai?",
    "newEvidence": "Ternyata 70% pesanan adalah susu dan pelanggan menyukai cokelat serta tekstur.",
    "revisionPrompt": "Bagaimana revisi tujuan dan rencana perbandingan?",
    "modelReasoning": "Pisahkan tujuan pelanggan dari label tingkat sangrai; rancang cupping/produk dengan konteks yang sama, jangan menjanjikan roast paling ringan."
  },
  {
    "id": "rvc-02",
    "module": "M01",
    "brief": "Operator baru diminta menjalankan batch tanpa briefing mesin.",
    "prompt": "Apa keputusan yang aman sekaligus menghormati target produksi?",
    "newEvidence": "Ada alarm exhaust yang pernah diabaikan pada shift sebelumnya.",
    "revisionPrompt": "Apa yang berubah dalam keputusan dan jalur eskalasi?",
    "modelReasoning": "Jangan beroperasi tanpa pelatihan dan verifikasi SOP; alarm sebelumnya memperkuat stop-work serta pemeriksaan berwenang."
  },
  {
    "id": "rvc-03",
    "module": "M02",
    "brief": "Dua karung dari asal sama berbeda ukuran dan aroma.",
    "prompt": "Data penerimaan apa yang perlu diperiksa sebelum menyamakan roast profile?",
    "newEvidence": "Stiker batch ternyata berasal dari dua sublot pengeringan berbeda.",
    "revisionPrompt": "Bagaimana memisahkan identitas dan sampling?",
    "modelReasoning": "Asal bukan bukti lot identik; catat sublot, uji fisik dan sensori, evaluasi keamanan sebelum menggabungkan."
  },
  {
    "id": "rvc-04",
    "module": "M02",
    "brief": "Moisture kedua lot 11% dan pemasok menyebut kualitas setara.",
    "prompt": "Kesimpulan apa yang belum bisa ditarik dan pemeriksaan apa yang paling berguna?",
    "newEvidence": "Salah satu lot memiliki aw lebih tinggi dan bau apak pada beberapa karung.",
    "revisionPrompt": "Bagaimana status penerimaan dan tindakan berikut?",
    "modelReasoning": "Moisture tidak sama dengan aw dan keamanan; bau mencurigakan menuntut hold/QC, bukan solusi dengan extra roast."
  },
  {
    "id": "rvc-05",
    "module": "M03",
    "brief": "Profil mesin drum hendak dipindah ke air roaster dengan setelan identik.",
    "prompt": "Sebutkan informasi mesin yang perlu diketahui dan rencana eksperimen aman.",
    "newEvidence": "Kapasitas batch roaster baru hanya seperempat mesin asal.",
    "revisionPrompt": "Apa penyesuaian pada cara membandingkan, bukan setpoint numerik?",
    "modelReasoning": "Transfer tujuan sensori, bukan suhu dan persen gas; batas kapasitas, sensor, desain udara serta operator harus diperiksa."
  },
  {
    "id": "rvc-06",
    "module": "M03",
    "brief": "Batch ketiga lebih cepat daripada batch pertama meski sensor charge sama.",
    "prompt": "Apa dua dugaan penyebab dan satu bukti untuk membedakannya?",
    "newEvidence": "Log menunjukkan mesin pertama dipanaskan lebih singkat daripada prosedur shift sore.",
    "revisionPrompt": "Bagaimana menjadwalkan validasi sebelum mengubah burner?",
    "modelReasoning": "Thermal inertia adalah kandidat penting; tetapkan kondisi preheat sebanding, jangan memaksa perubahan api tanpa uji."
  },
  {
    "id": "rvc-07",
    "module": "M04",
    "brief": "Dua software menampilkan RoR berbeda untuk rekaman BT yang sama.",
    "prompt": "Apa yang mesti diperiksa sebelum menyimpulkan batch berbeda?",
    "newEvidence": "Satu grafik memakai delta 15 detik, satunya 60 detik dan smoothing tambahan.",
    "revisionPrompt": "Apa kesimpulan sah dan bagaimana ulang perbandingan?",
    "modelReasoning": "RoR bergantung interval dan penyaringan; bandingkan data sensor mentah serta parameter grafik setara."
  },
  {
    "id": "rvc-08",
    "module": "M04",
    "brief": "Batch A memiliki DTR 18%, batch B 18%, namun panel lebih suka B.",
    "prompt": "Apakah DTR cukup untuk menyatakan profil identik?",
    "newEvidence": "First crack A dinyatakan sejak satu bunyi, sedangkan B sejak rentetan bunyi.",
    "revisionPrompt": "Bagaimana perbaiki observasi dan keputusan?",
    "modelReasoning": "DTR bukan skor mutu; marker tidak sama membuat perbandingan angka menipu, perlukan definisi dan cupping seragam."
  },
  {
    "id": "rvc-09",
    "module": "M05",
    "brief": "Batch kehilangan massa 14%, dan operator menyatakan green moisture 14%.",
    "prompt": "Jelaskan kesalahan ilmiah dan data yang sebenarnya diperoleh.",
    "newEvidence": "Kadar air green terukur 10,8% oleh alat terkalibrasi.",
    "revisionPrompt": "Bagaimana membedakan dua angka itu dalam QC?",
    "modelReasoning": "Susut massa juga meliputi senyawa lain; kadar air green adalah pengukuran terpisah dengan metode berbeda."
  },
  {
    "id": "rvc-10",
    "module": "M05",
    "brief": "Dua roast sama warna tetapi dinilai punya aroma berbeda.",
    "prompt": "Buat dua penjelasan masuk akal sebelum menyimpulkan reaksi tunggal.",
    "newEvidence": "Ditemukan perbedaan waktu roasting dan umur kopi saat cupping.",
    "revisionPrompt": "Eksperimen apa yang membuat kesimpulan lebih kuat?",
    "modelReasoning": "Perbedaan sensori dapat terkait trajectory dan usia; kontrol lot, color, aging serta blind evaluation sebelum klaim."
  },
  {
    "id": "rvc-11",
    "module": "M06",
    "brief": "Tim ingin memuji setelan gas baru; perubahan bersamaan terjadi di massa dan airflow.",
    "prompt": "Rancang ulang A/B sehingga faktor yang diuji jelas.",
    "newEvidence": "Hasil sensori pertama bertentangan dengan hipotesis, padahal kurva B lebih halus.",
    "revisionPrompt": "Bagaimana tanggapi bukti tanpa mengabaikannya?",
    "modelReasoning": "Pertahankan variabel pembanding dan ulangan; kurva baik bukan hasil produk, revisi dugaan berdasarkan cupping."
  },
  {
    "id": "rvc-12",
    "module": "M06",
    "brief": "Pemasok mengganti lot sebelum jadwal produksi besar.",
    "prompt": "Buat langkah baseline dan verifikasi QC yang menjaga batas aman.",
    "newEvidence": "Ada tekanan untuk langsung melabelkan produk sebagai batch identik sebelumnya.",
    "revisionPrompt": "Apa keputusan produksi yang etis dan bisa dilacak?",
    "modelReasoning": "Identitas lot memerlukan sampel/pengujian baru; jangan menganggap profil lama otomatis mereplikasi rasa."
  },
  {
    "id": "rvc-13",
    "module": "M07",
    "brief": "Panel deskriptif menemukan citrus tinggi pada A, tetapi mayoritas menyukai B.",
    "prompt": "Apakah temuan saling bertentangan? Jelaskan perbedaan pertanyaannya.",
    "newEvidence": "Panel mengetahui B lebih mahal sebelum memberi nilai kesukaan.",
    "revisionPrompt": "Apa tindak lanjut untuk melihat potensi bias?",
    "modelReasoning": "Atribut dan kesukaan adalah lensa berbeda; lakukan pengujian buta dan segmen produk sesuai brief."
  },
  {
    "id": "rvc-14",
    "module": "M07",
    "brief": "Warna dua batch sama pada alat, tetapi cupping berbeda.",
    "prompt": "Apa yang dapat dan tidak dapat dibuktikan oleh pengukuran warna?",
    "newEvidence": "Satu batch dicupping dengan grind lebih halus.",
    "revisionPrompt": "Bagaimana merancang pembandingan baru?",
    "modelReasoning": "Warna menilai roast degree sesuai metode, tidak menjamin seluruh flavor; samakan brew dan usia sampel."
  },
  {
    "id": "rvc-15",
    "module": "M08",
    "brief": "Sebagian biji menunjukkan dark spots dan panel melaporkan aftertaste astringent.",
    "prompt": "Hipotesis apa yang masuk akal tanpa menuduh penyebab tunggal?",
    "newEvidence": "Dark spots terutama berasal dari satu karung green yang ukurannya heterogen.",
    "revisionPrompt": "Bagaimana revisi rencana investigasi?",
    "modelReasoning": "Periksa distribusi ukuran, mesin, suhu permukaan dan QC; warna visual bukan bukti kausal atau keamanan."
  },
  {
    "id": "rvc-16",
    "module": "M08",
    "brief": "RoR melonjak ketika bunyi exhaust berubah.",
    "prompt": "Apa prioritas keselamatan dan bukti teknis yang perlu disimpan?",
    "newEvidence": "Rekan menyarankan membuka panel selagi mesin panas agar cepat diperbaiki.",
    "revisionPrompt": "Apa respons yang aman dan profesional?",
    "modelReasoning": "Stop-work, jauhi risiko, eskalasi sesuai SOP; tidak ada eksperimen profil ketika alat abnormal."
  },
  {
    "id": "rvc-17",
    "module": "M09",
    "brief": "Dua shift memiliki log yang berbeda untuk lot dan batch yang sama.",
    "prompt": "Bagaimana menetapkan sumber pencatatan tepercaya tanpa menghapus riwayat?",
    "newEvidence": "Log packing menunjukkan nomor roast batch yang tidak sama dengan label.",
    "revisionPrompt": "Bagaimana status rilis harus diputuskan?",
    "modelReasoning": "Audit identitas, rekonsiliasi dan hold produk hingga traceability terverifikasi; perubahan harus berversi."
  },
  {
    "id": "rvc-18",
    "module": "M09",
    "brief": "Biji baru dikemas dan performa espresso berubah pada tiga umur roast.",
    "prompt": "Bagaimana menguji pengaruh usia tanpa mengasumsikan hari ideal universal?",
    "newEvidence": "Ternyata kemasan dan grinder juga berubah antar sesi.",
    "revisionPrompt": "Apa saja variabel kontrol untuk tes berikut?",
    "modelReasoning": "Kontrol kemasan, brew, grind, batch dan kondisi simpan; gas dan aging adalah hipotesis, bukan putusan tunggal."
  },
  {
    "id": "rvc-19",
    "module": "M10",
    "brief": "Blend 70:30 telah diwariskan tanpa penjelasan mengapa dipakai.",
    "prompt": "Bagaimana mendesain uji komposisi yang mempertimbangkan rasa dan biaya?",
    "newEvidence": "Komponen kedua kehabisan stok dan ada alternatif dengan harga berbeda.",
    "revisionPrompt": "Bagaimana menguji substitusi tanpa mengklaim rasa pasti sama?",
    "modelReasoning": "Definisikan brief, blind cup sebagai espresso/susu, analisis produksi dan biaya; substitusi memerlukan QA baru."
  },
  {
    "id": "rvc-20",
    "module": "M10",
    "brief": "Capstone menunjukkan batch B lebih cantik kurvanya, tetapi A lebih disukai panel.",
    "prompt": "Apa keputusan sementara dan bukti yang masih kurang?",
    "newEvidence": "Temuan lanjut: A dan B berbeda kondisi packaging dan label lot B tidak jelas.",
    "revisionPrompt": "Apa revisi prioritas keselamatan, traceability dan evaluasi?",
    "modelReasoning": "Hindari kesimpulan kausal; tahan batch tak terlacak, samakan variabel cupping, lalu revisi profil berdasar bukti."
  }
];
export const ROASTER_V2_DIAGNOSTICS:RoasterV2Diagnostic[]=[
  {
    "id": "rvq-01",
    "module": "M01",
    "scenario": "Apa tugas pertama sebelum menentukan arah profil untuk kopi baru?",
    "options": [
      {
        "text": "Menentukan DTR universal",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. Brief produk menjadi target pembuktian. Angka mesin luar tidak memiliki konteks yang cukup."
      },
      {
        "text": "Mendefinisikan brief produk yang dapat diuji",
        "feedback": "Brief produk menjadi target pembuktian. Angka mesin luar tidak memiliki konteks yang cukup."
      },
      {
        "text": "Memilih suhu drop kompetitor",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. Brief produk menjadi target pembuktian. Angka mesin luar tidak memiliki konteks yang cukup."
      },
      {
        "text": "Mencari angka charge dari internet",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. Brief produk menjadi target pembuktian. Angka mesin luar tidak memiliki konteks yang cukup."
      }
    ],
    "correct": 1,
    "rationale": "Brief produk menjadi target pembuktian. Angka mesin luar tidak memiliki konteks yang cukup."
  },
  {
    "id": "rvq-02",
    "module": "M01",
    "scenario": "Operator belum menerima pelatihan dan mesin memberi alarm. Apa tindakan awal?",
    "options": [
      {
        "text": "Melanjutkan satu batch",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. Pelatihan dan keselamatan merupakan prasyarat. Alarm tidak boleh diatasi dengan tebakan pada kontrol."
      },
      {
        "text": "Menaikkan airflow acak",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. Pelatihan dan keselamatan merupakan prasyarat. Alarm tidak boleh diatasi dengan tebakan pada kontrol."
      },
      {
        "text": "Mengabaikan agar selesai",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. Pelatihan dan keselamatan merupakan prasyarat. Alarm tidak boleh diatasi dengan tebakan pada kontrol."
      },
      {
        "text": "Stop-work dan eskalasi sesuai SOP",
        "feedback": "Pelatihan dan keselamatan merupakan prasyarat. Alarm tidak boleh diatasi dengan tebakan pada kontrol."
      }
    ],
    "correct": 3,
    "rationale": "Pelatihan dan keselamatan merupakan prasyarat. Alarm tidak boleh diatasi dengan tebakan pada kontrol."
  },
  {
    "id": "rvq-03",
    "module": "M02",
    "scenario": "Kadar air green dan water activity adalah...",
    "options": [
      {
        "text": "Pengukuran konsep berbeda yang saling berkaitan",
        "feedback": "Moisture menunjukkan proporsi massa air; aw menunjukkan keadaan/ketersediaan air. Keduanya tidak menjamin keamanan."
      },
      {
        "text": "Angka identik dalam unit berlainan",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. Moisture menunjukkan proporsi massa air; aw menunjukkan keadaan/ketersediaan air. Keduanya tidak menjamin keamanan."
      },
      {
        "text": "Bukti bahwa tidak ada mikroba",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. Moisture menunjukkan proporsi massa air; aw menunjukkan keadaan/ketersediaan air. Keduanya tidak menjamin keamanan."
      },
      {
        "text": "Satu angka ideal untuk seluruh lot",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. Moisture menunjukkan proporsi massa air; aw menunjukkan keadaan/ketersediaan air. Keduanya tidak menjamin keamanan."
      }
    ],
    "correct": 0,
    "rationale": "Moisture menunjukkan proporsi massa air; aw menunjukkan keadaan/ketersediaan air. Keduanya tidak menjamin keamanan."
  },
  {
    "id": "rvq-04",
    "module": "M02",
    "scenario": "Nama proses natural pada label berarti...",
    "options": [
      {
        "text": "Ada lapisan gula cair di permukaan",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. Label proses bukan instruksi panas universal; lot aktual harus diuji dengan informasi fisik dan sensori."
      },
      {
        "text": "Selalu memerlukan −15°C charge",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. Label proses bukan instruksi panas universal; lot aktual harus diuji dengan informasi fisik dan sensori."
      },
      {
        "text": "Informasi pascapanen yang memerlukan evaluasi lot",
        "feedback": "Label proses bukan instruksi panas universal; lot aktual harus diuji dengan informasi fisik dan sensori."
      },
      {
        "text": "Semua naturals punya densitas rendah",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. Label proses bukan instruksi panas universal; lot aktual harus diuji dengan informasi fisik dan sensori."
      }
    ],
    "correct": 2,
    "rationale": "Label proses bukan instruksi panas universal; lot aktual harus diuji dengan informasi fisik dan sensori."
  },
  {
    "id": "rvq-05",
    "module": "M03",
    "scenario": "Manakah yang paling tepat tentang perpindahan panas?",
    "options": [
      {
        "text": "Hanya konduksi dalam drum",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. Ketiga jalur dapat hadir dan proporsinya bergantung rancangan, muatan, airflow dan kondisi saat itu."
      },
      {
        "text": "Hanya konveksi dalam fluid-bed",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. Ketiga jalur dapat hadir dan proporsinya bergantung rancangan, muatan, airflow dan kondisi saat itu."
      },
      {
        "text": "Kontribusi persentasenya selalu sama",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. Ketiga jalur dapat hadir dan proporsinya bergantung rancangan, muatan, airflow dan kondisi saat itu."
      },
      {
        "text": "Konduksi, konveksi dan radiasi berinteraksi",
        "feedback": "Ketiga jalur dapat hadir dan proporsinya bergantung rancangan, muatan, airflow dan kondisi saat itu."
      }
    ],
    "correct": 3,
    "rationale": "Ketiga jalur dapat hadir dan proporsinya bergantung rancangan, muatan, airflow dan kondisi saat itu."
  },
  {
    "id": "rvq-06",
    "module": "M03",
    "scenario": "Dua mesin menampilkan gas 50%. Apa maknanya?",
    "options": [
      {
        "text": "Daya pasti setara",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. Persentase kontrol tidak menjamin energi setara; kapasitas dan kondisi mesin berbeda."
      },
      {
        "text": "Setelan tidak bisa dibandingkan tanpa konteks mesin",
        "feedback": "Persentase kontrol tidak menjamin energi setara; kapasitas dan kondisi mesin berbeda."
      },
      {
        "text": "First crack pasti sama",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. Persentase kontrol tidak menjamin energi setara; kapasitas dan kondisi mesin berbeda."
      },
      {
        "text": "Mass loss harus identik",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. Persentase kontrol tidak menjamin energi setara; kapasitas dan kondisi mesin berbeda."
      }
    ],
    "correct": 1,
    "rationale": "Persentase kontrol tidak menjamin energi setara; kapasitas dan kondisi mesin berbeda."
  },
  {
    "id": "rvq-07",
    "module": "M04",
    "scenario": "Jika BT naik 3°C dalam 30 detik, RoR rata-rata adalah...",
    "options": [
      {
        "text": "6°C/menit",
        "feedback": "3°C / 0,5 menit = 6°C per menit. Definisi interval harus dinyatakan."
      },
      {
        "text": "3°C/menit",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. 3°C / 0,5 menit = 6°C per menit. Definisi interval harus dinyatakan."
      },
      {
        "text": "1,5°C/menit",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. 3°C / 0,5 menit = 6°C per menit. Definisi interval harus dinyatakan."
      },
      {
        "text": "30°C/menit",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. 3°C / 0,5 menit = 6°C per menit. Definisi interval harus dinyatakan."
      }
    ],
    "correct": 0,
    "rationale": "3°C / 0,5 menit = 6°C per menit. Definisi interval harus dinyatakan."
  },
  {
    "id": "rvq-08",
    "module": "M04",
    "scenario": "Dalam log roasting, angka DTR 20% menyatakan apa?",
    "options": [
      {
        "text": "Kualitas rasa sudah 20%",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. DTR adalah porsi waktu dari first crack ke drop, bukan persentase kematangan atau keamanan."
      },
      {
        "text": "20% kadar air telah hilang",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. DTR adalah porsi waktu dari first crack ke drop, bukan persentase kematangan atau keamanan."
      },
      {
        "text": "Sekitar seperlima waktu roast setelah FC menurut definisi marker",
        "feedback": "DTR adalah porsi waktu dari first crack ke drop, bukan persentase kematangan atau keamanan."
      },
      {
        "text": "Semua biji matang dengan level identik",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. DTR adalah porsi waktu dari first crack ke drop, bukan persentase kematangan atau keamanan."
      }
    ],
    "correct": 2,
    "rationale": "DTR adalah porsi waktu dari first crack ke drop, bukan persentase kematangan atau keamanan."
  },
  {
    "id": "rvq-09",
    "module": "M05",
    "scenario": "Massa 1.000g green menjadi 870g roasted. Mass loss...",
    "options": [
      {
        "text": "13%",
        "feedback": "(1000−870)/1000=13%. Hasil itu bukan kadar air green awal."
      },
      {
        "text": "87%",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. (1000−870)/1000=13%. Hasil itu bukan kadar air green awal."
      },
      {
        "text": "10%",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. (1000−870)/1000=13%. Hasil itu bukan kadar air green awal."
      },
      {
        "text": "Tidak mungkin dihitung",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. (1000−870)/1000=13%. Hasil itu bukan kadar air green awal."
      }
    ],
    "correct": 0,
    "rationale": "(1000−870)/1000=13%. Hasil itu bukan kadar air green awal."
  },
  {
    "id": "rvq-10",
    "module": "M05",
    "scenario": "Maillard dan reaksi termal roasting...",
    "options": [
      {
        "text": "Baru mulai ketika biji kuning",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. Banyak transformasi kimia berlangsung bertahap dan saling berhubungan; milestone bukan sakelar."
      },
      {
        "text": "Tidak memengaruhi aroma",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. Banyak transformasi kimia berlangsung bertahap dan saling berhubungan; milestone bukan sakelar."
      },
      {
        "text": "Terjadi hanya setelah first crack",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. Banyak transformasi kimia berlangsung bertahap dan saling berhubungan; milestone bukan sakelar."
      },
      {
        "text": "Berlangsung sebagai proses yang tumpang tindih",
        "feedback": "Banyak transformasi kimia berlangsung bertahap dan saling berhubungan; milestone bukan sakelar."
      }
    ],
    "correct": 3,
    "rationale": "Banyak transformasi kimia berlangsung bertahap dan saling berhubungan; milestone bukan sakelar."
  },
  {
    "id": "rvq-11",
    "module": "M06",
    "scenario": "Apa kelemahan mengubah gas, massa dan airflow sekaligus?",
    "options": [
      {
        "text": "Membuat roast lebih panjang",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. Jika banyak faktor berubah, dampak spesifik sulit diatribusikan. Gunakan kontrol dan pengulangan."
      },
      {
        "text": "Sulit mengisolasi penyebab perubahan hasil",
        "feedback": "Jika banyak faktor berubah, dampak spesifik sulit diatribusikan. Gunakan kontrol dan pengulangan."
      },
      {
        "text": "Membuat aroma pasti lebih fruity",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. Jika banyak faktor berubah, dampak spesifik sulit diatribusikan. Gunakan kontrol dan pengulangan."
      },
      {
        "text": "Menghilangkan kebutuhan cupping",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. Jika banyak faktor berubah, dampak spesifik sulit diatribusikan. Gunakan kontrol dan pengulangan."
      }
    ],
    "correct": 1,
    "rationale": "Jika banyak faktor berubah, dampak spesifik sulit diatribusikan. Gunakan kontrol dan pengulangan."
  },
  {
    "id": "rvq-12",
    "module": "M06",
    "scenario": "Hasil cupping B tidak sesuai prediksi meski kurvanya mulus. Langkah berikut?",
    "options": [
      {
        "text": "Pilih B demi kurva",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. Cupping menjawab tujuan produk; ketidaksesuaian perlu diuji, bukan disembunyikan di balik kurva."
      },
      {
        "text": "Abaikan panel",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. Cupping menjawab tujuan produk; ketidaksesuaian perlu diuji, bukan disembunyikan di balik kurva."
      },
      {
        "text": "Periksa confounder dan rancang ulang perbandingan",
        "feedback": "Cupping menjawab tujuan produk; ketidaksesuaian perlu diuji, bukan disembunyikan di balik kurva."
      },
      {
        "text": "Pilih angka DTR lebih sempit",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. Cupping menjawab tujuan produk; ketidaksesuaian perlu diuji, bukan disembunyikan di balik kurva."
      }
    ],
    "correct": 2,
    "rationale": "Cupping menjawab tujuan produk; ketidaksesuaian perlu diuji, bukan disembunyikan di balik kurva."
  },
  {
    "id": "rvq-13",
    "module": "M07",
    "scenario": "Mana yang merupakan evaluasi deskriptif?",
    "options": [
      {
        "text": "Semua pelanggan pasti suka",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. Descriptive merekam atribut yang diamati; kesukaan, nilai dan harga merupakan pertanyaan berbeda."
      },
      {
        "text": "Kopi punya kualitas terbaik",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. Descriptive merekam atribut yang diamati; kesukaan, nilai dan harga merupakan pertanyaan berbeda."
      },
      {
        "text": "Pasti lebih mahal",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. Descriptive merekam atribut yang diamati; kesukaan, nilai dan harga merupakan pertanyaan berbeda."
      },
      {
        "text": "Panel mencatat intensitas aroma citrus",
        "feedback": "Descriptive merekam atribut yang diamati; kesukaan, nilai dan harga merupakan pertanyaan berbeda."
      }
    ],
    "correct": 3,
    "rationale": "Descriptive merekam atribut yang diamati; kesukaan, nilai dan harga merupakan pertanyaan berbeda."
  },
  {
    "id": "rvq-14",
    "module": "M07",
    "scenario": "Color meter dan blind cupping sebaiknya...",
    "options": [
      {
        "text": "Dipakai bersama sebagai bukti yang menjawab pertanyaan berbeda",
        "feedback": "Warna memantau roast degree; cupping menilai pengalaman sensori. Keduanya tidak dapat saling menggantikan."
      },
      {
        "text": "Dihapus karena pasti saling bertentangan",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. Warna memantau roast degree; cupping menilai pengalaman sensori. Keduanya tidak dapat saling menggantikan."
      },
      {
        "text": "Disamakan sebagai satu skor mutu",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. Warna memantau roast degree; cupping menilai pengalaman sensori. Keduanya tidak dapat saling menggantikan."
      },
      {
        "text": "Diganti suhu drop dari internet",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. Warna memantau roast degree; cupping menilai pengalaman sensori. Keduanya tidak dapat saling menggantikan."
      }
    ],
    "correct": 0,
    "rationale": "Warna memantau roast degree; cupping menilai pengalaman sensori. Keduanya tidak dapat saling menggantikan."
  },
  {
    "id": "rvq-15",
    "module": "M08",
    "scenario": "Bercak gelap di biji membuktikan...",
    "options": [
      {
        "text": "Roast pasti aman",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. Gejala visual dapat menimbulkan dugaan, tetapi tidak membuktikan satu penyebab atau satu flavor defect."
      },
      {
        "text": "Jenis burner pasti salah",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. Gejala visual dapat menimbulkan dugaan, tetapi tidak membuktikan satu penyebab atau satu flavor defect."
      },
      {
        "text": "Ada pola visual yang masih membutuhkan investigasi",
        "feedback": "Gejala visual dapat menimbulkan dugaan, tetapi tidak membuktikan satu penyebab atau satu flavor defect."
      },
      {
        "text": "Semua rasa pahit berasal dari scorching",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. Gejala visual dapat menimbulkan dugaan, tetapi tidak membuktikan satu penyebab atau satu flavor defect."
      }
    ],
    "correct": 2,
    "rationale": "Gejala visual dapat menimbulkan dugaan, tetapi tidak membuktikan satu penyebab atau satu flavor defect."
  },
  {
    "id": "rvq-16",
    "module": "M08",
    "scenario": "Apa prioritas saat exhaust berbunyi abnormal dan ada alarm?",
    "options": [
      {
        "text": "Atur smoothing lebih tinggi",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. Abnormalitas operasional tidak boleh ditangani seperti masalah profil biasa."
      },
      {
        "text": "Stop-work dan prosedur keselamatan",
        "feedback": "Abnormalitas operasional tidak boleh ditangani seperti masalah profil biasa."
      },
      {
        "text": "Naikkan charge temperature",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. Abnormalitas operasional tidak boleh ditangani seperti masalah profil biasa."
      },
      {
        "text": "Cek rasa batch sambil mesin menyala",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. Abnormalitas operasional tidak boleh ditangani seperti masalah profil biasa."
      }
    ],
    "correct": 1,
    "rationale": "Abnormalitas operasional tidak boleh ditangani seperti masalah profil biasa."
  },
  {
    "id": "rvq-17",
    "module": "M09",
    "scenario": "Tujuan traceability roastery ialah...",
    "options": [
      {
        "text": "Menghubungkan green lot, roast batch, packing dan distribusi",
        "feedback": "Jejak batch memungkinkan investigasi dan tindakan proporsional bila terjadi masalah kualitas atau keamanan."
      },
      {
        "text": "Menentukan suhu first crack universal",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. Jejak batch memungkinkan investigasi dan tindakan proporsional bila terjadi masalah kualitas atau keamanan."
      },
      {
        "text": "Membuktikan semua kopi selalu enak",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. Jejak batch memungkinkan investigasi dan tindakan proporsional bila terjadi masalah kualitas atau keamanan."
      },
      {
        "text": "Menghapus nomor batch gagal",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. Jejak batch memungkinkan investigasi dan tindakan proporsional bila terjadi masalah kualitas atau keamanan."
      }
    ],
    "correct": 0,
    "rationale": "Jejak batch memungkinkan investigasi dan tindakan proporsional bila terjadi masalah kualitas atau keamanan."
  },
  {
    "id": "rvq-18",
    "module": "M09",
    "scenario": "Dua sampel disimpan berbeda dan berbeda usia roast. Jika rasanya berbeda...",
    "options": [
      {
        "text": "Semata karena DTR",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. Ageing dan kemasan adalah confounder penting. Evaluasi perbandingan yang konsisten."
      },
      {
        "text": "Semata karena green moisture",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. Ageing dan kemasan adalah confounder penting. Evaluasi perbandingan yang konsisten."
      },
      {
        "text": "Pengaturan gas pasti salah",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. Ageing dan kemasan adalah confounder penting. Evaluasi perbandingan yang konsisten."
      },
      {
        "text": "Penyebab belum terisolasi tanpa kontrol lebih baik",
        "feedback": "Ageing dan kemasan adalah confounder penting. Evaluasi perbandingan yang konsisten."
      }
    ],
    "correct": 3,
    "rationale": "Ageing dan kemasan adalah confounder penting. Evaluasi perbandingan yang konsisten."
  },
  {
    "id": "rvq-19",
    "module": "M10",
    "scenario": "10 kg green seharga Rp100.000/kg menghasilkan 8,5kg roasted. Biaya green/kg roasted mendekati...",
    "options": [
      {
        "text": "Rp85.000",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. Rp1.000.000 total pembelian dibagi 8,5kg yield; belum memasukkan biaya produksi lain."
      },
      {
        "text": "Rp100.000",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. Rp1.000.000 total pembelian dibagi 8,5kg yield; belum memasukkan biaya produksi lain."
      },
      {
        "text": "Rp117.647",
        "feedback": "Rp1.000.000 total pembelian dibagi 8,5kg yield; belum memasukkan biaya produksi lain."
      },
      {
        "text": "Rp150.000",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. Rp1.000.000 total pembelian dibagi 8,5kg yield; belum memasukkan biaya produksi lain."
      }
    ],
    "correct": 2,
    "rationale": "Rp1.000.000 total pembelian dibagi 8,5kg yield; belum memasukkan biaya produksi lain."
  },
  {
    "id": "rvq-20",
    "module": "M10",
    "scenario": "Apa tindakan saat batch tak terlacak tetapi cup terasa bagus?",
    "options": [
      {
        "text": "Lepaskan karena enak",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. Keterlacakan dan keamanan merupakan bagian dari keputusan produk; rasa enak bukan pengganti data lot."
      },
      {
        "text": "Tahan sampai identitas dan persyaratan rilis jelas",
        "feedback": "Keterlacakan dan keamanan merupakan bagian dari keputusan produk; rasa enak bukan pengganti data lot."
      },
      {
        "text": "Ganti label agar cocok",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. Keterlacakan dan keamanan merupakan bagian dari keputusan produk; rasa enak bukan pengganti data lot."
      },
      {
        "text": "Campur dengan batch terverifikasi",
        "feedback": "Pilihan ini terlalu pasti, tidak sesuai informasi yang ada, atau mengabaikan tujuan evaluasi. Keterlacakan dan keamanan merupakan bagian dari keputusan produk; rasa enak bukan pengganti data lot."
      }
    ],
    "correct": 1,
    "rationale": "Keterlacakan dan keamanan merupakan bagian dari keputusan produk; rasa enak bukan pengganti data lot."
  }
];
