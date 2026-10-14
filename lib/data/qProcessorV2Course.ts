export type QProcessorModule={code:string;title:string;description:string;references:string[]};
export type QProcessorLesson={id:string;moduleId:string;order:number;title:string;content:string;minutes:number};
export const Q_PROCESSOR_V2_MODULES:QProcessorModule[]=[
  {
    "code": "QP01",
    "title": "Desain Sistem Processing dan Traceability",
    "description": "Mulai dari lot, kapasitas, sampling, dan tujuan mutu yang bisa diverifikasi.",
    "references": [
      "https://www.coffeeinstitute.org/education/processing"
    ]
  },
  {
    "code": "QP02",
    "title": "Mikrobiologi dan Biokimia Fermentasi",
    "description": "Bedakan substrat, populasi mikroba, metabolit dan faktor yang dapat diukur.",
    "references": [
      "https://coffeeinstitute.org/education/course-progression"
    ]
  },
  {
    "code": "QP03",
    "title": "Washed Processing dan Kendali Wet Mill",
    "description": "Kontrol depulping, mucilage, air, kontak mikroba dan limbah.",
    "references": [
      "https://www.coffeeinstitute.org/education/processing"
    ]
  },
  {
    "code": "QP04",
    "title": "Natural, Honey, dan Wet-Hulled Terkendali",
    "description": "Bandingkan mekanisme perpindahan air, risiko dan ciri khas proses Indonesia.",
    "references": [
      "https://www.coffeeinstitute.org/education/processing"
    ]
  },
  {
    "code": "QP05",
    "title": "Eksperimen Modern dan Risiko Fermentasi Khusus",
    "description": "Audit hubungan hipotesis, kontrol, keselamatan CO2 dan klaim co-fermentation.",
    "references": [
      "https://coffeeinstitute.org/education/course-progression"
    ]
  },
  {
    "code": "QP06",
    "title": "Drying Science dan Water Activity",
    "description": "Interpretasikan kadar air, aw, sampling dan kondisi cuaca dengan ketidakpastian.",
    "references": [
      "https://sca.coffee/value-assessment"
    ]
  },
  {
    "code": "QP07",
    "title": "Dry Milling, Grading dan Mutu Ekspor",
    "description": "Pertahankan neraca massa, inspeksi fisik, traceability dan kebersihan.",
    "references": [
      "https://sca.coffee/value-assessment",
      "https://oss.go.id/id"
    ]
  },
  {
    "code": "QP08",
    "title": "QC Sistemik, Logbook dan Praktik Profesional",
    "description": "Ubah data processing menjadi SOP, audit mutu dan pelatihan tim.",
    "references": [
      "https://www.coffeeinstitute.org/education/processing",
      "https://coffeeinstitute.org/education/course-progression"
    ]
  }
];
export const Q_PROCESSOR_V2_LESSONS:QProcessorLesson[]=[
  {
    "id": "qp2-m01-l01",
    "moduleId": "QP01",
    "order": 1,
    "title": "Processor yang baik membuat keputusan dari data",
    "minutes": 10,
    "content": "## Konsep kerja\n\nProcessor mengubah input cherry yang bervariasi menjadi green coffee yang terukur kondisinya. Pekerjaannya bukan hanya memberi nama proses, tetapi mengatur aliran bahan, keputusan hold/release dan jejak lot.\n\n## Mengapa hal ini terjadi?\n\nDua hasil cup berbeda dapat berasal dari panen, proses, drying atau evaluasi. Jika tidak ada logbook, penyebab tak dapat dipisahkan. Setiap operator perlu memahami data minimum dan siapa yang berwenang mengubah SOP.\n\n## Protokol penerapan dan pencatatan\n\nBuat peta alur per fasilitas: receiving, timbang, sortasi, depulp atau whole-cherry, fase kontak mikroba, drying, stabilisasi, hulling, QC dan penyimpanan. Tandai titik pemisahan lot.\n\n## Contoh keputusan di Indonesia\n\nSatu wet mill membeli cherry dari lima koperasi. Tanpa identitas batch, sampel cup bagus tidak dapat dikaitkan kembali pada petani atau metode. Kembangkan kode yang konsisten sejak meja timbang.\n\n### Membangun sistem sebelum memperbaiki satu proses\n\nProcessor menangani aliran bahan dan informasi dari panen sampai green saleable. Kualitas hasil bukan hanya nama metode; ia dipengaruhi kapasitas receiving, sortasi, pemisahan lot, fermentasi atau perlakuan mucilage, drying, penyimpanan, hulling dan QC. Mulai dengan process flow diagram dan tandai siapa yang boleh menahan serta melepas batch.\n\n**Contoh neraca massa:** 1.000 kg ceri diterima, 80 kg disisihkan sebagai tidak memenuhi kriteria. Basis yang masuk alur terpilih **920 kg**, bukan 1.000 kg. Jangan memakai hasil hulling dibagi angka 1.000 kg lalu menyebutnya yield mesin tanpa menjelaskan semua susut dan perubahan bentuk produk.\n\nBuat kartu lot yang memuat sumber, timbang netto, jam dan kondisi penerimaan, jalur proses, wadah yang dipakai, setiap pemindahan, data pengeringan, hasil grading, dan pembeli tujuan. Uji sistem melalui trace-back: pilih satu karung green dan lacak ke tanggal panen serta kelompok petani. Bila identitas putus, statusnya belum terverifikasi meski skor cupping bagus.\n\nSaat operasi macet, catat siapa memutuskan mengalihkan bahan dan bagaimana lot tetap terpisah. Ini bentuk kompetensi proses yang lebih penting daripada hafal nama fermentasi.\n\n## Pertanyaan untuk diuji\n\nBukti apa yang harus tersedia sebelum kamu mengklaim satu metode berhasil?\n\nSebelum menjawab, pisahkan **pengamatan**, **hipotesis**, **batas alat/metode**, dan **keputusan keselamatan**. Hasil yang tidak mendukung hipotesis awal adalah informasi ilmiah yang berguna.\n\n## Rujukan bacaan\n\n- [Rujukan 1](https://www.coffeeinstitute.org/education/processing)"
  },
  {
    "id": "qp2-m01-l02",
    "moduleId": "QP01",
    "order": 2,
    "title": "Merumuskan tujuan proses dengan outcome terukur",
    "minutes": 10,
    "content": "## Konsep kerja\n\n'Lebih fruity' atau 'lebih clean' adalah hipotesis sensori yang harus diukur, bukan parameter mesin. Desain proses perlu memasukkan outcome keamanan, yield, defect, kapasitas dan repeatability.\n\n## Mengapa hal ini terjadi?\n\nData awal mencakup kondisi cherry, tanggal panen, tingkat kematangan, jumlah sampel, suhu lingkungan, batch size, kondisi sanitasi, dan kapasitas drying. Tindakan tanpa baseline mempersulit interpretasi.\n\n## Protokol penerapan dan pencatatan\n\nTulis target per batch: kondisi fisik diterima, kualitas cup pada blind test, batas risiko operasional, ketersediaan alat ukur, serta definisi keberhasilan yang disepakati buyer. Jadikan kontrol sebagai pembanding.\n\n## Contoh keputusan di Indonesia\n\nPelanggan meminta natural yang konsisten dari panen berbeda. Operator perlu menetapkan karakter produk target dan protocol pencatatan, bukan menambah fermentasi tanpa hipotesis.\n\n### Menetapkan target hasil yang bisa diuji\n\nTujuan proses bukan kalimat 'buat kopi lebih fruity'. Pilih indikator yang dapat diukur: keseragaman pengeringan, yield lolos grade, jenis cacat fisik, dokumentasi batch, serta karakter sensori hasil uji terkode. Setiap tujuan butuh definisi alat dan metode agar operator lain dapat mengulang pengujian.\n\n**Contoh statistik:** tiga sampel bed A memiliki kadar air 10,8%; 11,0%; 12,6% (rata-rata sekitar **11,47%**). Bed B memiliki 11,3%; 11,4%; 11,5% (rata-rata **11,4%**). Kedua rata-rata dekat, tetapi rentang hasil berbeda. Angka hanya simulasi pemahaman, bukan ambang universal rilis lot.\n\nTulis hipotesis dalam bentuk 'jika tindakan yang disetujui X diterapkan, maka rentang parameter Y berubah dibanding kontrol pada kondisi Z'. Catat input, jumlah ulangan, kejadian menyimpang, risiko, kriteria berhenti, dan metode evaluasi.\n\nJika perubahan cuma terlihat pada satu sampel pilihan, jangan umumkan keberhasilan. Tunjukkan data lengkap dan rencana replikasi sebelum merevisi SOP produksi.\n\n## Pertanyaan untuk diuji\n\nApa variabel yang tidak bisa kamu kontrol dan bagaimana mencatat ketidakpastiannya?\n\nSebelum menjawab, pisahkan **pengamatan**, **hipotesis**, **batas alat/metode**, dan **keputusan keselamatan**. Hasil yang tidak mendukung hipotesis awal adalah informasi ilmiah yang berguna.\n\n## Rujukan bacaan\n\n- [Rujukan 1](https://www.coffeeinstitute.org/education/processing)"
  },
  {
    "id": "qp2-m01-l03",
    "moduleId": "QP01",
    "order": 3,
    "title": "Sistem penerimaan cherry untuk percobaan",
    "minutes": 10,
    "content": "## Konsep kerja\n\nPerbandingan antartreatment harus dimulai dari bahan input yang sebanding. Cherry berumur, varietas, tingkat kematangan dan riwayat transport berbeda dapat merusak kesimpulan bahkan sebelum fermentasi.\n\n## Mengapa hal ini terjadi?\n\nGunakan sampling representatif, timbang netto, klasifikasi cherry dan pemisahan lot. °Brix memberi gambaran sari buah pada kondisi uji, tetapi tidak memiliki satu ambang universal yang menentukan keamanan atau kualitas semua varietas.\n\n## Protokol penerapan dan pencatatan\n\nBagi batch yang cukup seragam secara terencana, beri kode kelompok kontrol dan perlakuan, catat metode randomisasi, pengukuran awal serta kondisi wadah. Jangan mengubah label setelah mencicipi.\n\n## Contoh keputusan di Indonesia\n\nDua drum memiliki fermentasi berbeda, tetapi salah satunya berisi banyak cherry overripe. Tidak adil mengklaim perbedaan disebabkan oleh ragi yang ditambahkan tanpa mengendalikan input.\n\n### Receiving sebagai awal validitas eksperimen\n\nDua batch dengan metode fermentasi sama dapat memberi hasil berbeda apabila tingkat kematangan, delay angkut, kerusakan ceri atau kebersihan wadah awalnya tidak setara. Maka receiving bukan bagian administrasi belaka: datanya menentukan apakah eksperimen berikut dapat diinterpretasikan.\n\nBuat catatan: kode kelompok/blok, identitas lot, tanggal-jam panen jika tersedia, waktu tiba, massa bruto dan tara, netto, metode sampling, distribusi kondisi ceri, jumlah disisihkan, petugas dan rute proses. Saat batch dipisahkan, beri ID turunan berurutan yang tetap terkait sumber.\n\n**Contoh:** dua input masing-masing 200 kg, batch A menyisihkan 20 kg saat sortasi awal, B hanya 4 kg. Proporsi disisihkan adalah **10%** vs **2%** dari netto awal. Perbedaan ini perlu dibahas sebelum mengklaim suatu metode menghasilkan yield lebih baik.\n\nBila fasilitas penuh, pertahankan identitas tiap wadah; jangan gabungkan bahan tak tercatat hanya untuk memenuhi target. Catat alasan dan durasi penundaan, status bahan, serta keputusan hold atau rute alternatif yang aman.\n\n## Pertanyaan untuk diuji\n\nBagaimana membuat kelompok kontrol saat pasokan hari itu terlalu sedikit untuk pengulangan?\n\nSebelum menjawab, pisahkan **pengamatan**, **hipotesis**, **batas alat/metode**, dan **keputusan keselamatan**. Hasil yang tidak mendukung hipotesis awal adalah informasi ilmiah yang berguna.\n\n## Rujukan bacaan\n\n- [Rujukan 1](https://www.coffeeinstitute.org/education/processing)"
  },
  {
    "id": "qp2-m02-l01",
    "moduleId": "QP02",
    "order": 1,
    "title": "Siapa yang bekerja dalam fermentasi kopi?",
    "minutes": 10,
    "content": "## Konsep kerja\n\nYeast, bakteri dan mikroba lingkungan dapat berinteraksi dengan gula dan komponen mucilage. Aktivitas metabolik dapat menghasilkan alkohol, asam dan senyawa volatil, namun komposisi dan aroma akhir tidak bisa dipastikan hanya dari istilah 'anaerob'.\n\n## Mengapa hal ini terjadi?\n\nPopulasi awal dibentuk bahan, kebersihan fasilitas dan kondisi proses. Ekosistem fermentasi bisa bergeser selama waktu berjalan. Tidak semua aroma tajam berarti proses buruk, tetapi anomali perlu tindakan berbasis risiko.\n\n## Protokol penerapan dan pencatatan\n\nCatat tipe bahan, kondisi wadah, suhu, durasi, pH dengan alat terkalibrasi bila digunakan, perubahan aroma, serta data QC. Untuk analisis mikroba spesifik, gunakan fasilitas laboratorium yang kompeten.\n\n## Contoh keputusan di Indonesia\n\nSatu batch menunjukkan pH turun cepat, sedangkan sampel pembanding stabil. Angka saja tidak memberi spesies bakteri atau keamanan produk; perlu pengamatan tambahan sesuai SOP.\n\n### Membedakan proses mikroba dari observasi umum\n\nYeast, bakteri asam laktat, bakteri asam asetat dan mikroorganisme lain mungkin berinteraksi dengan substrat pada mucilage/ceri. Metabolit seperti alkohol, asam dan senyawa volatil dipengaruhi komposisi awal, kondisi lingkungan, waktu dan kompetisi antarorganisme. Aroma tertentu **tidak** membuktikan spesies yang bertanggung jawab tanpa uji spesifik.\n\nGunakan empat kolom: **input** (kematangan, bahan dan kebersihan), **kondisi** (suhu, waktu, oksigen sesuai kemampuan alat), **pengamatan** (pH, aroma, tekstur) dan **hasil** (fisik green, stabilitas, cup). Ini membantu menghindari kekeliruan menyebut penurunan pH sebagai bukti bakteri tertentu mendominasi.\n\n**Kasus:** pH dua tangki berubah dengan laju berbeda. Tanpa log suhu, kondisi awal dan verifikasi alat, menyebut satu batch pasti lebih aman atau lebih berkualitas adalah lompatan kesimpulan. Susun hipotesis alternatif dan minta uji lanjutan dari personel kompeten.\n\nPraktik laboratorium untuk identifikasi mikroba memerlukan sarana dan teknik sendiri. Kelas ini mengajarkan penalaran ilmiah, bukan izin melakukan kultur bebas tanpa kontrol.\n\n## Pertanyaan untuk diuji\n\nBagaimana membedakan observasi perubahan pH dari klaim mikroba tertentu sudah tumbuh?\n\nSebelum menjawab, pisahkan **pengamatan**, **hipotesis**, **batas alat/metode**, dan **keputusan keselamatan**. Hasil yang tidak mendukung hipotesis awal adalah informasi ilmiah yang berguna.\n\n## Rujukan bacaan\n\n- [Rujukan 1](https://coffeeinstitute.org/education/course-progression)"
  },
  {
    "id": "qp2-m02-l02",
    "moduleId": "QP02",
    "order": 2,
    "title": "pH, suhu dan waktu harus dibaca bersama",
    "minutes": 10,
    "content": "## Konsep kerja\n\npH mengukur sifat asam-basa larutan, bukan jumlah gula atau konsentrasi semua metabolit. Suhu memengaruhi laju proses dan risiko; waktu tanpa konteks massa, suhu dan kondisi awal tidak cukup.\n\n## Mengapa hal ini terjadi?\n\nPengukuran harus dikalibrasi dan dilakukan dengan metode konsisten. Catatan tiap beberapa jam dapat memberi tren, namun nilai akhir yang sama tidak berarti dua batch mempunyai lintasan fermentasi identik.\n\n## Protokol penerapan dan pencatatan\n\nTentukan frekuensi pencatatan berdasarkan risiko dan fasilitas; tulis nilai, waktu, suhu sampel, operator, kejadian tak biasa dan tindakan koreksi. Jangan menetapkan satu cutoff universal tanpa validasi metode.\n\n## Contoh keputusan di Indonesia\n\nBatch A dan B sama-sama berakhir di pH 4, tetapi A memiliki perubahan cepat pada suhu tinggi. Bandingkan kondisi sepanjang proses dan hasil drying sebelum menyimpulkan setara.\n\n### Membaca kurva, bukan mengejar pH target tunggal\n\npH mengukur keasaman aktif menurut metode tertentu; pH tidak sama dengan jumlah total asam, identitas mikroba, atau jaminan keamanan hasil. Suhu bahan dan perjalanan waktu perlu dicatat bersamaan, sementara kalibrasi alat serta kondisi sampel harus jelas agar angka dapat dibandingkan.\n\nBuat time series per batch: tanggal-jam mulai, pembacaan pH, suhu, kondisi lot, kejadian membuka wadah, penyimpangan, dan petugas. Jika jadwal ukur terlewat, tandai data hilang alih-alih menggambar kurva kontinu yang menyesatkan.\n\n**Contoh ilustratif:** batch A dari pH 5,0 menuju 4,6 lalu 4,1; batch B menuju 4,8 lalu 4,7 pada tiga titik waktu yang sama. Tanpa informasi input dan kondisi lain, tidak sah menyimpulkan A otomatis lebih baik. Angka perbandingan adalah alat diagnosis, bukan target resep universal.\n\nSusun SOP respons untuk penyimpangan yang ditinjau personel kompeten: ulang ukur, investigasi kebersihan, pisahkan lot, atau hentikan aktivitas jika berisiko. Log pengamatan membuat investigasi dapat diaudit.\n\n## Pertanyaan untuk diuji\n\nData apa yang hilang bila operator hanya menulis pH akhir saat transfer ke raised bed?\n\nSebelum menjawab, pisahkan **pengamatan**, **hipotesis**, **batas alat/metode**, dan **keputusan keselamatan**. Hasil yang tidak mendukung hipotesis awal adalah informasi ilmiah yang berguna.\n\n## Rujukan bacaan\n\n- [Rujukan 1](https://coffeeinstitute.org/education/course-progression)"
  },
  {
    "id": "qp2-m02-l03",
    "moduleId": "QP02",
    "order": 3,
    "title": "Menguji starter culture secara bertanggung jawab",
    "minutes": 10,
    "content": "## Konsep kerja\n\nKultur terpilih dapat memengaruhi fermentasi jika strain, viabilitas, kondisi awal dan kompetisi mikroba mendukung. Nama spesies saja tidak menjamin karakter aroma atau efek yang sama lintas farm.\n\n## Mengapa hal ini terjadi?\n\nSebelum inoculation, pastikan kultur memang sesuai penggunaan pangan, penyimpanan dan higiene fasilitas. Kegiatan ini memerlukan kompetensi yang memadai; jangan mengganti prosedur teruji dengan ragi acak dan asumsi rasa.\n\n## Protokol penerapan dan pencatatan\n\nBuat pembanding tanpa starter dan perlakuan yang hanya berbeda pada faktor yang diuji. Catat sumber kultur, konsentrasi menurut prosedur profesional, batch, kondisi dan hasil green/cup; blind taste dan analisis biaya.\n\n## Contoh keputusan di Indonesia\n\nProdusen berencana inokulasi seluruh 4 ton karena satu micro-lot disukai panel internal. Pilot perlu diuji ulang pada batch berbeda sebelum skala produksi diubah.\n\n### Starter culture dan batas pembuktiannya\n\nMenambahkan starter berarti ada tindakan inokulasi yang terdokumentasi; itu belum membuktikan organisme tersebut dominan atau pasti menghasilkan rasa tertentu. Hasil bergantung bahan awal, populasi liar, kondisi proses, higiene, waktu dan tahap pengeringan berikutnya.\n\nUntuk studi perbandingan, buat dua batch sebanding dan definisikan satu variabel yang diuji dalam protokol fasilitas yang disetujui. Catat sumber serta identitas starter, bukti kelayakan bahan, kondisi awal, log proses, hasil fisik, uji sensori terkode, dan pelanggaran terhadap rancangan. Penilaian populasi mikroba spesifik memerlukan analisis laboratorium sesuai metode.\n\n**Kasus:** starter mahal menghasilkan satu cangkir menarik tetapi batch berikut berbeda. Periksa distribusi ceri, kondisi alat, perbedaan drying dan metode cupping, bukan langsung menyimpulkan supplier salah atau menambah dosis.\n\nKelas online tidak menetapkan protokol inokulasi industri, dosis, tekanan, maupun prosedur operasi tangki yang berisiko. Bila kompetensi dan pengawasan fasilitas tidak siap, jangan melakukan eksperimen itu.\n\n## Pertanyaan untuk diuji\n\nKapan efek fermentasi dianggap cukup repeatable untuk menjadi SOP produksi rutin?\n\nSebelum menjawab, pisahkan **pengamatan**, **hipotesis**, **batas alat/metode**, dan **keputusan keselamatan**. Hasil yang tidak mendukung hipotesis awal adalah informasi ilmiah yang berguna.\n\n## Rujukan bacaan\n\n- [Rujukan 1](https://coffeeinstitute.org/education/course-progression)"
  },
  {
    "id": "qp2-m03-l01",
    "moduleId": "QP03",
    "order": 1,
    "title": "Depulping: efisiensi tanpa merusak biji",
    "minutes": 10,
    "content": "## Konsep kerja\n\nDepulper memisahkan kulit dan pulp tetapi penyetelan yang salah dapat meningkatkan kerusakan parchment, kehilangan yield dan lot terkontaminasi. Kapasitas besar bukan alasan mengabaikan uji setting saat buah berbeda ukuran.\n\n## Mengapa hal ini terjadi?\n\nPeriksa clearance mesin, input ceri, kecepatan feeding, kondisi alat dan hasil keluaran. Ceri immature bisa lebih sulit ditangani; jangan menyamakan distribusi ukuran semua lot.\n\n## Protokol penerapan dan pencatatan\n\nSetiap pergantian lot, jalankan inspeksi awal dengan sampel kecil, amati parchment, ukur reject dan atur setting melalui operator terlatih. Dokumentasikan maintenance dan masalah mendadak.\n\n## Contoh keputusan di Indonesia\n\nSetelah pindah lot, banyak biji lecet di output. Alih-alih menambah fermentasi untuk menutupi cacat, hentikan dan cek mekanik proses.\n\n### Depulping dan pengukuran kerusakan nyata\n\nMesin depulper memisahkan buah dari biji berkulit tanduk. Kesalahan pengaturan dan variasi ukuran ceri dapat meningkatkan fraksi tak terkupas atau biji rusak. Keputusan setelan memerlukan petunjuk mesin dan operator kompeten; jangan memberi resep celah silinder universal.\n\nLakukan pemeriksaan input dan output memakai sampel terkode. Catat massa masuk, bagian ceri tak terkupas, tanda kerusakan, kondisi mesin, waktu berhenti, aliran air, dan tindakan koreksi. Perhatikan keselamatan tangan, pelindung mesin, lockout untuk servis dan tata air limbah sesuai fasilitas.\n\n**Contoh hitungan:** 300 kg ceri diproses, 9 kg berada pada fraksi tidak terkupas yang perlu penanganan sesuai SOP. Proporsi fraksi = **3%** dari massa awal, tetapi bukan berarti tingkat biji pecah 3%; parameter dan basis pengukuran berbeda.\n\nPerbandingan lot baru sah apabila metode sampling konsisten. Saat kerusakan naik, investigasi ukuran ceri, kondisi komponen dan prosedur operator sebelum mengambil keputusan mengganti mesin.\n\n## Pertanyaan untuk diuji\n\nLangkah apa yang bisa membedakan input yang buruk dari mesin yang perlu dikalibrasi?\n\nSebelum menjawab, pisahkan **pengamatan**, **hipotesis**, **batas alat/metode**, dan **keputusan keselamatan**. Hasil yang tidak mendukung hipotesis awal adalah informasi ilmiah yang berguna.\n\n## Rujukan bacaan\n\n- [Rujukan 1](https://www.coffeeinstitute.org/education/processing)"
  },
  {
    "id": "qp2-m03-l02",
    "moduleId": "QP03",
    "order": 2,
    "title": "Demucilation dan pencucian berbasis observasi",
    "minutes": 10,
    "content": "## Konsep kerja\n\nWashed dapat memakai fermentasi mucilage atau proses mekanis untuk melepas lapisan terkait. Tujuan proses ialah hasil yang dapat dibersihkan dan dikeringkan dengan aman, bukan memaksakan jam proses tunggal.\n\n## Mengapa hal ini terjadi?\n\nSanitasi tangki, kondisi air dan tingkat penghilangan mucilage memengaruhi operasi. Ciri licin atau wangi hanyalah salah satu informasi; verifikasi harus sesuai metode dan risiko lot.\n\n## Protokol penerapan dan pencatatan\n\nCatat waktu mulai, temperatur lingkungan, inspeksi mucilage, sumber dan penggunaan air, titik handoff ke drying dan tindakan koreksi. Pertahankan identitas lot saat pengurasan dan pencucian.\n\n## Contoh keputusan di Indonesia\n\nDua lot memiliki tingkat kematangan berbeda tetapi staf ingin memakai timer 24 jam yang sama. Tinjau kondisi aktual dan SOP tervalidasi, bukan mengunci angka karena kebiasaan.\n\n### Mucilage, pencucian, dan cara memeriksa hasilnya\n\nMucilage bisa dilepaskan melalui aktivitas biokimia, kerja enzim dan/atau alat mekanis sesuai fasilitas. Metode berbeda memengaruhi kebutuhan air, paparan mikroba, beban limbah, waktu serta risiko merusak biji. Istilah washed sendiri tidak menjelaskan detailnya.\n\nTentukan indikator untuk tiap batch: kondisi parchment, sisa mucilage menurut SOP sampling, catatan waktu dan suhu relevan, kualitas air, penyimpangan proses, serta hasil drying. Kesepakatan kriteria bersama lebih berguna daripada satu operator merasa biji 'cukup licin' sedangkan operator lain tidak.\n\n**Kasus:** dua tangki dianggap siap cuci pada waktu berbeda. Jika tidak ada metode uji dan log, perbandingan waktu tidak bermakna. Periksa catatan kondisi awal dan metode, lalu tentukan pengukuran yang dapat diulang oleh petugas berbeda.\n\nSusun kartu serah-terima ke drying: lot ID, bentuk bahan, netto, metode mucilage, kondisi keluar, insiden, petugas, dan keputusan bila parameter belum memenuhi kriteria. Limbah air basah harus masuk rancangan pengelolaan, bukan sekadar dibuang dari area produksi.\n\n## Pertanyaan untuk diuji\n\nParameter apa yang membantu menentukan kapan tahapan berikutnya harus dilakukan?\n\nSebelum menjawab, pisahkan **pengamatan**, **hipotesis**, **batas alat/metode**, dan **keputusan keselamatan**. Hasil yang tidak mendukung hipotesis awal adalah informasi ilmiah yang berguna.\n\n## Rujukan bacaan\n\n- [Rujukan 1](https://www.coffeeinstitute.org/education/processing)"
  },
  {
    "id": "qp2-m03-l03",
    "moduleId": "QP03",
    "order": 3,
    "title": "Sanitasi wet mill dan pengolahan air limbah",
    "minutes": 10,
    "content": "## Konsep kerja\n\nWet mill menggabungkan bahan organik, air dan peralatan. Limbah pulp dan air berkadar beban organik perlu pengelolaan yang tidak mencemari aliran air atau menyebabkan masalah higienis.\n\n## Mengapa hal ini terjadi?\n\nPemisahan aliran bersih-kotor, keamanan pekerja di dekat mesin, drainase dan perawatan sistem pengolahan limbah penting untuk kualitas serta kepatuhan. Jangan membuang effluent fermentasi langsung ke lingkungan.\n\n## Protokol penerapan dan pencatatan\n\nSusun SOP pembersihan food contact, pemeriksaan tangki, penanganan pulp, penyimpanan bahan kimia, keselamatan mesin, dan pemantauan efluen sesuai fasilitas/izin setempat.\n\n## Contoh keputusan di Indonesia\n\nMill mengganti proses memakai lebih banyak air demi kelancaran. Tanpa kapasitas wastewater management, kualitas lingkungan dan biaya operasional bisa memburuk.\n\n## Pertanyaan untuk diuji\n\nBagaimana mengukur penggunaan air per kg green saleable agar tim melihat trade-off sebenarnya?\n\nSebelum menjawab, pisahkan **pengamatan**, **hipotesis**, **batas alat/metode**, dan **keputusan keselamatan**. Hasil yang tidak mendukung hipotesis awal adalah informasi ilmiah yang berguna.\n\n## Rujukan bacaan\n\n- [Rujukan 1](https://www.coffeeinstitute.org/education/processing)"
  },
  {
    "id": "qp2-m04-l01",
    "moduleId": "QP04",
    "order": 1,
    "title": "Natural memerlukan kontrol fisik sejak cherry utuh",
    "minutes": 10,
    "content": "## Konsep kerja\n\nNatural mengeringkan buah utuh, membuat jaringan pulp dan kulit mengubah laju perpindahan air dan kondisi mikro di sekitar biji. Metode ini tidak otomatis lebih mudah atau 'fermentasi liar' yang tidak terkendali.\n\n## Mengapa hal ini terjadi?\n\nKetebalan hamparan, ventilasi, hujan, pembalikan, distribusi kematangan dan jam masuk bed perlu dipantau. Kondisi permukaan bisa berbeda dari bagian tengah tumpukan.\n\n## Protokol penerapan dan pencatatan\n\nSusun identitas bed, input kg, ketebalan sesuai protokol fasilitas, tanggal pembalikan, cuaca, sampel dari berbagai titik dan tindakan saat terjadi rewetting.\n\n## Contoh keputusan di Indonesia\n\nNatural yang sedang drying dihantam hujan beberapa hari. Keputusan menambah waktu harus diikuti inspeksi kondisi dan potensi kontaminasi, bukan janji profil rasa lebih kuat.\n\n## Pertanyaan untuk diuji\n\nApa tanda bahwa jadwal drying harus dihentikan untuk investigasi, bukan sekadar dilanjutkan?\n\nSebelum menjawab, pisahkan **pengamatan**, **hipotesis**, **batas alat/metode**, dan **keputusan keselamatan**. Hasil yang tidak mendukung hipotesis awal adalah informasi ilmiah yang berguna.\n\n## Rujukan bacaan\n\n- [Rujukan 1](https://www.coffeeinstitute.org/education/processing)"
  },
  {
    "id": "qp2-m04-l02",
    "moduleId": "QP04",
    "order": 2,
    "title": "Honey: sisa mucilage dan standar yang tidak seragam",
    "minutes": 10,
    "content": "## Konsep kerja\n\nHoney mempertahankan sebagian mucilage setelah kulit dihilangkan. Sebutan red, yellow, black honey sering tidak konsisten antarnegara atau produsen; dokumentasi proses diperlukan untuk membuat hasil dapat diperbandingkan.\n\n## Mengapa hal ini terjadi?\n\nLapisan lengket dapat menuntut perhatian pada pengeringan dan kebersihan hamparan. Variasi kelembapan dan pengadukan menghasilkan risiko yang tidak identik pada tiap lot.\n\n## Protokol penerapan dan pencatatan\n\nCatat setting depulper dan massa input, kondisi awal, penanganan mucilage, tanggal dan metode pengeringan, pengukuran fisik, lalu bandingkan dengan sampel blind cupping.\n\n## Contoh keputusan di Indonesia\n\nBuyer meminta 'red honey' dari dua origin berbeda. Mengikat kontrak berdasarkan nama saja akan menyulitkan sengketa mutu; tambahkan kriteria proses dan fisik.\n\n## Pertanyaan untuk diuji\n\nDokumen apa yang menolong pelanggan memahami honey tanpa memberi klaim rasa pasti?\n\nSebelum menjawab, pisahkan **pengamatan**, **hipotesis**, **batas alat/metode**, dan **keputusan keselamatan**. Hasil yang tidak mendukung hipotesis awal adalah informasi ilmiah yang berguna.\n\n## Rujukan bacaan\n\n- [Rujukan 1](https://www.coffeeinstitute.org/education/processing)"
  },
  {
    "id": "qp2-m04-l03",
    "moduleId": "QP04",
    "order": 3,
    "title": "Giling basah dan hulling lembap",
    "minutes": 10,
    "content": "## Konsep kerja\n\nGiling basah memiliki tradisi pemasokan kuat di Sumatra dan perlu dipahami sebagai alur dengan kondisi parchment saat hulling berbeda dari dry hulling. Ia bukan sinonim fully washed.\n\n## Mengapa hal ini terjadi?\n\nTingkat kelembapan saat hulling memengaruhi risiko bean damage, perubahan fisik dan kebutuhan pengeringan susulan. Pemeriksaan keselamatan mesin dan sampling sangat penting; tidak boleh menormalkan kerusakan berlebihan.\n\n## Protokol penerapan dan pencatatan\n\nPetakan tahapan receiving, depulp, pra-kering, hulling lembap, sortasi, drying lanjutan dan QC; catat hasil tiap titik dan klasifikasikan reject menurut sebab.\n\n## Contoh keputusan di Indonesia\n\nOperator menemukan banyak pecahan setelah huller. Menaikkan harga karena label wet-hulled bukan solusinya; cek setting, kondisi bahan dan uji hasilnya.\n\n## Pertanyaan untuk diuji\n\nApa pengujian minimum untuk membuktikan perubahan setting huller memang menurunkan bean damage?\n\nSebelum menjawab, pisahkan **pengamatan**, **hipotesis**, **batas alat/metode**, dan **keputusan keselamatan**. Hasil yang tidak mendukung hipotesis awal adalah informasi ilmiah yang berguna.\n\n## Rujukan bacaan\n\n- [Rujukan 1](https://www.coffeeinstitute.org/education/processing)"
  },
  {
    "id": "qp2-m05-l01",
    "moduleId": "QP05",
    "order": 1,
    "title": "Anaerobic adalah kondisi, bukan resep rasa",
    "minutes": 10,
    "content": "## Konsep kerja\n\nSistem terbatas oksigen dapat mempunyai kondisi gas, suhu, substrat dan mikroba berbeda. Menyebut semua sistem sealed sebagai 'anaerobic fermentation' menyembunyikan variasi proses dan risiko.\n\n## Mengapa hal ini terjadi?\n\nTidak ada profil sensori universal hanya dari ketiadaan oksigen. Volume headspace, pelepasan gas, suhu dan kebersihan dapat berbeda; desain alat butuh penilaian keselamatan yang layak.\n\n## Protokol penerapan dan pencatatan\n\nMulai dari tujuan dan batas risiko, pilih perangkat yang sesuai, buat log pengukuran dan kontrol. Jangan mengoperasikan tangki bertekanan atau memodifikasi katup tanpa tenaga kompeten.\n\n## Contoh keputusan di Indonesia\n\nKedai pembeli minta anaerob rasa nanas, tetapi batch pilot berubah-ubah. Ketidakstabilan adalah alasan menguji input dan proses, bukan menambah janji rasa.\n\n## Pertanyaan untuk diuji\n\nApa yang harus diungkapkan di label bila data proses tidak cukup menguatkan klaim tertentu?\n\nSebelum menjawab, pisahkan **pengamatan**, **hipotesis**, **batas alat/metode**, dan **keputusan keselamatan**. Hasil yang tidak mendukung hipotesis awal adalah informasi ilmiah yang berguna.\n\n## Rujukan bacaan\n\n- [Rujukan 1](https://coffeeinstitute.org/education/course-progression)"
  },
  {
    "id": "qp2-m05-l02",
    "moduleId": "QP05",
    "order": 2,
    "title": "Carbonic maceration dan keselamatan gas",
    "minutes": 10,
    "content": "## Konsep kerja\n\nCarbonic maceration menggunakan lingkungan kaya CO2 dalam konteks tertentu. CO2 berpotensi menggantikan oksigen di ruang tertutup dan mengakibatkan asfiksia; tangki, regulator dan ventilasi harus memenuhi penilaian bahaya.\n\n## Mengapa hal ini terjadi?\n\nPenggunaan gas dan wadah bukan aktivitas eksperimen tanpa supervisi. Tekanan, ruang kerja, evakuasi dan pelatihan operator memerlukan rancangan serta praktik yang disetujui fasilitas.\n\n## Protokol penerapan dan pencatatan\n\nJika fasilitas belum mempunyai SOP gas, penilaian risiko, monitoring dan petugas kompeten, jangan mulai injeksi. Pilih metode yang dapat dikelola dengan sumber daya yang tersedia.\n\n## Contoh keputusan di Indonesia\n\nInvestor ingin menaikkan harga lewat carbonic microlot tetapi mill tidak punya sistem keselamatan gas. Menahan rencana adalah keputusan produktif yang mencegah cedera dan kerugian besar.\n\n## Pertanyaan untuk diuji\n\nMengapa peluang harga premium tidak cukup menjadi alasan melewati kontrol risiko?\n\nSebelum menjawab, pisahkan **pengamatan**, **hipotesis**, **batas alat/metode**, dan **keputusan keselamatan**. Hasil yang tidak mendukung hipotesis awal adalah informasi ilmiah yang berguna.\n\n## Rujukan bacaan\n\n- [Rujukan 1](https://coffeeinstitute.org/education/course-progression)"
  },
  {
    "id": "qp2-m05-l03",
    "moduleId": "QP05",
    "order": 3,
    "title": "Co-fermentation, bahan tambahan, dan integritas klaim",
    "minutes": 10,
    "content": "## Konsep kerja\n\nCo-fermentation dapat melibatkan tambahan buah, kultur atau substrat selain cherry. Konsumen dan buyer berhak tahu jenis intervensi; istilah 'natural' tidak boleh dipakai untuk menyamarkan penambahan bahan.\n\n## Mengapa hal ini terjadi?\n\nPenambahan bahan membawa implikasi higiene, identitas produk, persyaratan label dan potensi kontaminasi. Pemeriksaan sesuai regulasi lokal serta standar pembeli perlu dilakukan sebelum komersialisasi.\n\n## Protokol penerapan dan pencatatan\n\nRancang catatan sumber bahan, batch, prosedur sanitasi, kontrol, hasil sensori dan klaim pemasaran yang jujur. Hindari bahan tambahan tak terverifikasi dan klaim keamanan tanpa uji.\n\n## Contoh keputusan di Indonesia\n\nBuyer mengira 'strawberry notes' berasal dari fermentasi alami, sementara produsen menambah jus stroberi. Transparansi informasi ekstrinsik mencegah salah paham kontrak.\n\n## Pertanyaan untuk diuji\n\nInformasi apa yang wajib dijelaskan kepada pembeli sebelum lot dengan bahan tambahan dijual?\n\nSebelum menjawab, pisahkan **pengamatan**, **hipotesis**, **batas alat/metode**, dan **keputusan keselamatan**. Hasil yang tidak mendukung hipotesis awal adalah informasi ilmiah yang berguna.\n\n## Rujukan bacaan\n\n- [Rujukan 1](https://coffeeinstitute.org/education/course-progression)"
  },
  {
    "id": "qp2-m06-l01",
    "moduleId": "QP06",
    "order": 1,
    "title": "Water activity tidak identik dengan kadar air",
    "minutes": 10,
    "content": "## Konsep kerja\n\nWater activity mengindikasikan ketersediaan air terhadap aktivitas kimia/mikroba tertentu, sedangkan moisture content adalah jumlah air relatif terhadap massa bahan. Keduanya terkait tetapi mengukur hal berbeda.\n\n## Mengapa hal ini terjadi?\n\nNilai aw dibaca sesuai metode/instrumen dan keadaan sampel, bukan hanya angka dari satu kantong. Ambang tertentu dari pembeli tidak boleh diperlakukan sebagai jaminan steril atau aman tanpa konteks.\n\n## Protokol penerapan dan pencatatan\n\nGunakan alat yang sesuai dan terkalibrasi, sampling berlapis jika lot besar, pengukuran ulang saat variasi tinggi, serta dokumentasi titik waktu dan lokasi ukur.\n\n## Contoh keputusan di Indonesia\n\nDua kantong sama-sama moisture 11%, namun aw berbeda. Operator perlu memeriksa homogenitas, penyimpanan dan alat; tidak sah menyebut keduanya otomatis stabil sama.\n\n## Pertanyaan untuk diuji\n\nApa perbedaan keputusan saat data menunjukkan variasi antarbed yang besar?\n\nSebelum menjawab, pisahkan **pengamatan**, **hipotesis**, **batas alat/metode**, dan **keputusan keselamatan**. Hasil yang tidak mendukung hipotesis awal adalah informasi ilmiah yang berguna.\n\n## Rujukan bacaan\n\n- [Rujukan 1](https://sca.coffee/value-assessment)"
  },
  {
    "id": "qp2-m06-l02",
    "moduleId": "QP06",
    "order": 2,
    "title": "Laju pengeringan dan distribusi kelembapan",
    "minutes": 10,
    "content": "## Konsep kerja\n\nPerpindahan air ditentukan kondisi suhu, relative humidity, aliran udara, geometri bed dan perbedaan jaringan cherry/parchment. Mengeringkan terlalu cepat pada bagian luar belum tentu menyelesaikan kondisi di bagian dalam.\n\n## Mengapa hal ini terjadi?\n\nKejadian hujan, hamparan terlalu tebal atau sensor tidak mewakili bed dapat menghasilkan lot heterogen. Angka rata-rata tanpa pencatatan lokasi sampel dapat mengelabui QA.\n\n## Protokol penerapan dan pencatatan\n\nBuat peta zona drying, catat massa/jenis proses/tebal hamparan, suhu dan kelembapan ambient, pembalikan, waktu rewetting serta hasil sampling dari beberapa titik.\n\n## Contoh keputusan di Indonesia\n\nBed pinggir kering namun zona tengah lembap. Menggabungkannya sebelum QC dapat meningkatkan variabilitas dan biaya sortir. Pisahkan status jika tidak homogen.\n\n## Pertanyaan untuk diuji\n\nBagaimana mengukur progres drying tanpa merusak traceability di tiap bed?\n\nSebelum menjawab, pisahkan **pengamatan**, **hipotesis**, **batas alat/metode**, dan **keputusan keselamatan**. Hasil yang tidak mendukung hipotesis awal adalah informasi ilmiah yang berguna.\n\n## Rujukan bacaan\n\n- [Rujukan 1](https://sca.coffee/value-assessment)"
  },
  {
    "id": "qp2-m06-l03",
    "moduleId": "QP06",
    "order": 3,
    "title": "Stabilisasi dan penyimpanan setelah drying",
    "minutes": 10,
    "content": "## Konsep kerja\n\nProduk kering dapat mengalami distribusi kelembapan yang berubah saat dipindahkan atau disimpan. Reposo/stabilisasi bukan jaminan mutu membaik dan durasi yang tepat berbeda menurut kondisi lot serta fasilitas.\n\n## Mengapa hal ini terjadi?\n\nRisiko gudang mencakup kondensasi, kontaminasi bau, hama, kelembapan, kemasan rusak dan pencampuran lot. Pengemasan hermetik mengurangi pertukaran tertentu, namun tidak menghilangkan keperluan inspeksi.\n\n## Protokol penerapan dan pencatatan\n\nTetapkan status hold, sampling sebelum hulling, kontrol gudang, jadwal inspeksi, ambang tindakan sesuai buyer dan wewenang release. Evaluasi stabilitas dari bukti, bukan tanggal saja.\n\n## Contoh keputusan di Indonesia\n\nSampel lote disetujui hari Senin lalu kemasan basah saat pengiriman Jumat. Hasil uji Senin bukan bukti kondisi Jumat masih sesuai.\n\n## Pertanyaan untuk diuji\n\nApa dokumen minimum untuk membuktikan risiko setelah drying sudah ditangani?\n\nSebelum menjawab, pisahkan **pengamatan**, **hipotesis**, **batas alat/metode**, dan **keputusan keselamatan**. Hasil yang tidak mendukung hipotesis awal adalah informasi ilmiah yang berguna.\n\n## Rujukan bacaan\n\n- [Rujukan 1](https://sca.coffee/value-assessment)"
  },
  {
    "id": "qp2-m07-l01",
    "moduleId": "QP07",
    "order": 1,
    "title": "Hulling, sorting dan yield saleable",
    "minutes": 10,
    "content": "## Konsep kerja\n\nDry mill mengubah parchment atau cherry kering menjadi green kasar, lalu saleable setelah sortir. Setiap tahapan mempunyai massa masuk/keluar dan fraksi reject yang harus direkonsiliasi.\n\n## Mengapa hal ini terjadi?\n\nPersentase kehilangan proses tidak bisa langsung disamakan dengan defect. Sebagian massa adalah husk, sebagian reject fisik, dan sebagian contoh uji; memisahkannya penting untuk biaya dan diagnosis.\n\n## Protokol penerapan dan pencatatan\n\nBangun ledger: input dry parchment, output green kasar, kulit, reject sortasi, sampel QC dan green saleable. Hindari dua kali memasukkan komponen waste ke HPP.\n\n## Contoh keputusan di Indonesia\n\nMasuk 1.000 kg parchment, keluar 810 kg green kasar lalu 780 kg saleable. Saleable yield terhadap input = 78%. Operator yang memakai 810 kg akan meremehkan biaya per kg saleable.\n\n## Pertanyaan untuk diuji\n\nApa tindakan jika catatan massa keluar lebih besar daripada kemungkinan input tanpa adanya bahan tambahan?\n\nSebelum menjawab, pisahkan **pengamatan**, **hipotesis**, **batas alat/metode**, dan **keputusan keselamatan**. Hasil yang tidak mendukung hipotesis awal adalah informasi ilmiah yang berguna.\n\n## Rujukan bacaan\n\n- [Rujukan 1](https://sca.coffee/value-assessment)\n- [Rujukan 2](https://oss.go.id/id)"
  },
  {
    "id": "qp2-m07-l02",
    "moduleId": "QP07",
    "order": 2,
    "title": "CVA physical dan evaluasi sensori yang terpisah",
    "minutes": 10,
    "content": "## Konsep kerja\n\nPenilaian fisik CVA memeriksa parameter seperti kondisi, cacat, warna dan ukuran; deskriptif dan afektif menjawab pertanyaan berbeda. Satu angka cup tidak otomatis memvalidasi fisik.\n\n## Mengapa hal ini terjadi?\n\nLakukan sampling yang direncanakan, pilih definisi defect sesuai standar/metode atau kontrak, simpan retained sample, dan gunakan rekonsiliasi QC jika terdapat perbedaan panel.\n\n## Protokol penerapan dan pencatatan\n\nSusun form lot ID, ukuran sampel, instrument/standar, jenis dan jumlah temuan, tindakan hold/rework/reject serta penanggung jawab. Tautkan cupping ke batch tanpa mencampur nilainya.\n\n## Contoh keputusan di Indonesia\n\nLot dinilai menarik secara sensori tetapi ada benda asing dari dry mill. Tahan dan investigasi keamanan/mutu fisik, bukan mengesampingkannya karena cup score baik.\n\n## Pertanyaan untuk diuji\n\nApa risiko memakai satu sampel dari kantong termudah untuk memutuskan seluruh kontainer?\n\nSebelum menjawab, pisahkan **pengamatan**, **hipotesis**, **batas alat/metode**, dan **keputusan keselamatan**. Hasil yang tidak mendukung hipotesis awal adalah informasi ilmiah yang berguna.\n\n## Rujukan bacaan\n\n- [Rujukan 1](https://sca.coffee/value-assessment)\n- [Rujukan 2](https://oss.go.id/id)"
  },
  {
    "id": "qp2-m07-l03",
    "moduleId": "QP07",
    "order": 3,
    "title": "Memahami spesifikasi ekspor tanpa janji legalitas palsu",
    "minutes": 10,
    "content": "## Konsep kerja\n\nEkspor melibatkan mutu yang dapat diuji dan perjanjian komersial seperti titik serah, dokumen dan tanggung jawab. Kebutuhan karantina, izin dan ketentuan negara tujuan bergantung produk serta tanggal transaksi.\n\n## Mengapa hal ini terjadi?\n\nIstilah FOB, CIF dan EXW tidak setara. Buyer dan seller perlu menyepakati Incoterms serta named place/port dengan benar, lalu memeriksa kontrak jasa logistik dan kewajiban dokumen.\n\n## Protokol penerapan dan pencatatan\n\nCatat spesifikasi fisik, kuantitas, kemasan, toleransi, sampling, shipping condition, klaim mutu dan jadwal pengiriman. Minta verifikasi lembaga berwenang jika perlu ekspor.\n\n## Contoh keputusan di Indonesia\n\nBuyer meminta CIF dengan harga yang semula EXW. Tim tidak boleh mengirim angka final tanpa mengidentifikasi freight, asuransi, port dan risiko yang berpindah.\n\n## Pertanyaan untuk diuji\n\nBagaimana menghindari menghitung biaya logistik dua kali dalam satu quote ekspor?\n\nSebelum menjawab, pisahkan **pengamatan**, **hipotesis**, **batas alat/metode**, dan **keputusan keselamatan**. Hasil yang tidak mendukung hipotesis awal adalah informasi ilmiah yang berguna.\n\n## Rujukan bacaan\n\n- [Rujukan 1](https://sca.coffee/value-assessment)\n- [Rujukan 2](https://oss.go.id/id)"
  },
  {
    "id": "qp2-m08-l01",
    "moduleId": "QP08",
    "order": 1,
    "title": "Logbook yang bisa digunakan untuk keputusan berikutnya",
    "minutes": 10,
    "content": "## Konsep kerja\n\nLogbook bukan dekorasi tabel. Catatan harus menjawab: lot dari mana, siapa operatornya, proses apa dilakukan, kapan, parameter apa terukur, keputusan apa diambil, dan bagaimana hasil cup/fisiknya.\n\n## Mengapa hal ini terjadi?\n\nPemisahan input dan output memungkinkan tim menghubungkan variabel proses dengan hasil. Protokol yang berubah di tengah batch harus tercatat; tidak boleh menghapus hasil buruk dari histori.\n\n## Protokol penerapan dan pencatatan\n\nBangun struktur log: identitas lot, menerima/menolak cherry, batch size, alat, timestamp, hasil QC, deviasi, tindakan koreksi, hasil drying/milling/cup dan otorisasi.\n\n## Contoh keputusan di Indonesia\n\nDua batch gagal memenuhi spesifikasi fisik, tetapi keduanya memakai pengering yang sama saat musim hujan. Log membantu merumuskan hipotesis fasilitas tanpa menyalahkan operator secara otomatis.\n\n## Pertanyaan untuk diuji\n\nPertanyaan apa tidak akan terjawab jika hanya jam mulai dan jam selesai fermentasi yang dicatat?\n\nSebelum menjawab, pisahkan **pengamatan**, **hipotesis**, **batas alat/metode**, dan **keputusan keselamatan**. Hasil yang tidak mendukung hipotesis awal adalah informasi ilmiah yang berguna.\n\n## Rujukan bacaan\n\n- [Rujukan 1](https://www.coffeeinstitute.org/education/processing)\n- [Rujukan 2](https://coffeeinstitute.org/education/course-progression)"
  },
  {
    "id": "qp2-m08-l02",
    "moduleId": "QP08",
    "order": 2,
    "title": "Audit internal dan corrective action",
    "minutes": 10,
    "content": "## Konsep kerja\n\nSistem QC profesional memisahkan insiden, akar masalah sementara, bukti, tindakan koreksi, verifikasi hasil dan pencegahan agar tidak berulang. Mengoreksi gejala saja bukan pembelajaran organisasi.\n\n## Mengapa hal ini terjadi?\n\nOperator perlu tahu kapan menghentikan proses karena risiko keselamatan, mutu, atau keterlacakan. Latih dengan studi kondisi nyata, observasi per shift dan review tanpa budaya menyembunyikan kesalahan.\n\n## Protokol penerapan dan pencatatan\n\nBuat CAPA ringkas: masalah, lot terdampak, containment, hasil investigasi, tindakan pemilik, tenggat dan bukti verifikasi. Beri ruang untuk temuan 'akar masalah belum pasti'.\n\n## Contoh keputusan di Indonesia\n\nReject meningkat setelah depulper diganti. Akar masalah mungkin setting, input cherry, training atau inspeksi; lakukan uji terkendali sebelum menyalahkan staf.\n\n## Pertanyaan untuk diuji\n\nApa bukti yang membuat corrective action layak ditutup sebagai efektif?\n\nSebelum menjawab, pisahkan **pengamatan**, **hipotesis**, **batas alat/metode**, dan **keputusan keselamatan**. Hasil yang tidak mendukung hipotesis awal adalah informasi ilmiah yang berguna.\n\n## Rujukan bacaan\n\n- [Rujukan 1](https://www.coffeeinstitute.org/education/processing)\n- [Rujukan 2](https://coffeeinstitute.org/education/course-progression)"
  },
  {
    "id": "qp2-m08-l03",
    "moduleId": "QP08",
    "order": 3,
    "title": "Kompetensi profesional dan batas sertifikasi online",
    "minutes": 10,
    "content": "## Konsep kerja\n\nBelajar prinsip CQI Q Processing membantu pemahaman, tetapi menyelesaikan jalur CherryEdu dan kuis online tidak membuat seseorang otomatis menyandang sertifikasi CQI atau kompetensi praktik lapangan.\n\n## Mengapa hal ini terjadi?\n\nCQI menyelenggarakan kursus Processing Professional yang berbasis praktik lapangan dan mengharuskan teori serta asesmen praktik. Penilaian online dapat menguji diagnosis konseptual, namun tak membuktikan operator aman mengoperasikan wet mill.\n\n## Protokol penerapan dan pencatatan\n\nSusun portofolio bukti praktik nyata: logbook asli yang telah disetujui, dokumentasi sampling, SOP fasilitas, evaluasi safety, hasil green dan blind cup yang dapat diperiksa pelatih kompeten.\n\n## Contoh keputusan di Indonesia\n\nPeserta mendapat nilai kuis sempurna tetapi belum pernah menangani rewetting di bed. Rekomendasikan pendampingan praktik dan evaluasi di fasilitas yang sesuai sebelum dipercaya memimpin proses berisiko.\n\n## Pertanyaan untuk diuji\n\nApa langkah belajar berikutnya untuk berpindah dari memahami teori ke kompetensi lapangan yang tervalidasi?\n\nSebelum menjawab, pisahkan **pengamatan**, **hipotesis**, **batas alat/metode**, dan **keputusan keselamatan**. Hasil yang tidak mendukung hipotesis awal adalah informasi ilmiah yang berguna.\n\n## Rujukan bacaan\n\n- [Rujukan 1](https://www.coffeeinstitute.org/education/processing)\n- [Rujukan 2](https://coffeeinstitute.org/education/course-progression)"
  }
];
