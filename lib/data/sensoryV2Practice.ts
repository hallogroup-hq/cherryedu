export type SensoryCase={id:string;moduleId:string;title:string;brief:string;prompt:string;newEvidence:string;revisionPrompt:string;modelReasoning:string};
export type SensoryDiagnostic={id:string;moduleId:string;question:string;options:string[];correctIndex:number;explanation:string};
export const SENSORY_V2_CASES:SensoryCase[]=[
  {
    "id": "svc-01",
    "moduleId": "M01",
    "title": "Buyer hanya meminta skor",
    "brief": "Sampel A fruity dan mahal, B lebih sederhana. Buyer meminta satu skor yang menentukan pemenang.",
    "prompt": "Informasi apa yang harus dipisahkan sebelum kamu memilih lot?",
    "newEvidence": "Dokumen traceability A belum bisa diverifikasi, B lengkap.",
    "revisionPrompt": "Revisi usulan pembelian dengan mempertimbangkan empat lensa dan kepastian data.",
    "modelReasoning": "Tidak ada satu skor yang mewakili rasa, kondisi fisik, kesukaan pasar, dan dokumentasi. Tambahkan syarat verifikasi A; B bukan otomatis menang hanya karena dokumennya lengkap."
  },
  {
    "id": "svc-02",
    "moduleId": "M01",
    "title": "Sertifikat atau pengetahuan?",
    "brief": "Siswa selesai belajar daring dan ingin memasang titel Licensed Q Grader pada profil publik.",
    "prompt": "Apa batas yang harus dijelaskan penyelenggara?",
    "newEvidence": "Siswa belum pernah mengikuti assessment fisik resmi.",
    "revisionPrompt": "Tulis koreksi yang ramah tetapi tegas.",
    "modelReasoning": "Kelas digital mengukur penalaran dan pengetahuan; lisensi Q Grader diberikan SCA setelah kursus dan assessment resmi. Jangan mengklaim kredensial tanpa bukti."
  },
  {
    "id": "svc-03",
    "moduleId": "M02",
    "title": "Buah atau rasa dasar?",
    "brief": "Panel menyebut raspberry sebagai rasa dasar keenam dan mengukur tingkat 'body' sebagai gula.",
    "prompt": "Uraikan jalur sensorik yang mungkin menyumbang pengalaman ini.",
    "newEvidence": "Saat hidung peserta terganggu, aroma buah jauh menurun tetapi asam tetap terasa.",
    "revisionPrompt": "Perbarui diagnosis asal sensasi.",
    "modelReasoning": "Buah adalah flavor dengan kontribusi olfaksi retronasal; asam adalah gustasi; body termasuk tekstur/somatosensasi. Observasi baru mendukung perlunya pemisahan."
  },
  {
    "id": "svc-04",
    "moduleId": "M02",
    "title": "Aroma menghilang pada sesi akhir",
    "brief": "Evaluator tidak lagi mencium karakter floral setelah mencicipi sepuluh cawan.",
    "prompt": "Apa kemungkinan penyebab dan desain pengujiannya?",
    "newEvidence": "Sampel referensi baru juga dinilai kurang floral oleh evaluator, tetapi dinilai normal oleh dua panelis lain.",
    "revisionPrompt": "Perbarui tindak lanjut tanpa menuduh kegagalan pribadi.",
    "modelReasoning": "Pertimbangkan adaptasi, urutan, jeda, kondisi udara dan respons individu. Uji setelah pemulihan dengan referensi serta kondisi terkendali."
  },
  {
    "id": "svc-05",
    "moduleId": "M03",
    "title": "Rasio seduh tidak seragam",
    "brief": "Dua lot dibandingkan tetapi satu diseduh dengan 10 g dan lainnya 15 g pada volume air sama.",
    "prompt": "Apakah skor dapat dipakai untuk keputusan lot?",
    "newEvidence": "Log memperlihatkan grinder diubah di tengah sesi.",
    "revisionPrompt": "Tentukan tindakan penyelamatan data dan pengulangan.",
    "modelReasoning": "Perbedaan dose dan gilingan mengganggu keterbandingan. Jangan memilih kopi dari perbandingan itu; catat penyimpangan dan ulangi sesuai prosedur SCA-102."
  },
  {
    "id": "svc-06",
    "moduleId": "M03",
    "title": "Label premium terlihat",
    "brief": "Panel diberi foto petani pemenang dan harga jual sebelum blind cupping.",
    "prompt": "Apa bias yang mungkin terjadi dan bagaimana mencegahnya?",
    "newEvidence": "Dua evaluator sudah mencatat karakter sebelum foto ditunjukkan.",
    "revisionPrompt": "Bagaimana memperlakukan respons lama dan baru?",
    "modelReasoning": "Simpan respons pra-eksposur terpisah; sesudah identitas terbuka jangan samakan dengan blind. Untuk perbandingan sah rancang ulang randomisasi."
  },
  {
    "id": "svc-07",
    "moduleId": "M04",
    "title": "Jeruk berarti citric acid?",
    "brief": "Catatan rasa berbunyi 'citric acid 70%, pH pasti rendah' berdasarkan satu seruput.",
    "prompt": "Apa yang benar-benar dapat ditulis sebagai deskripsi?",
    "newEvidence": "Pengukuran pH independen tidak menunjukkan nilai ekstrem.",
    "revisionPrompt": "Perbaiki klaim dan cara mengomunikasikannya.",
    "modelReasoning": "Gunakan analogi citrus dan intensitas keasaman, bukan komposisi molekul. pH dan pengalaman asam bukan hal yang sama."
  },
  {
    "id": "svc-08",
    "moduleId": "M04",
    "title": "Body bercampur dengan aftertaste",
    "brief": "Panel menyatakan satu cawan body tebal karena aftertaste cokelat lama.",
    "prompt": "Pisahkan kategori observasi yang tepat.",
    "newEvidence": "Pada suhu rendah cawan tetap kental tetapi aftertaste memudar.",
    "revisionPrompt": "Bagaimana laporan akhir perlu dipisahkan?",
    "modelReasoning": "Ketebalan mouthfeel dan lama/karakter aftertaste dicatat pada kanal berbeda. Keduanya dapat bergerak berbeda ketika suhu berubah."
  },
  {
    "id": "svc-09",
    "moduleId": "M05",
    "title": "Pasar espresso dan filter tidak sepakat",
    "brief": "Panel filter sangat menyukai floral tinggi; pelanggan susu mengatakan karakter tidak tampak.",
    "prompt": "Apakah salah satu penilaian otomatis keliru?",
    "newEvidence": "Blind descriptive dua kelompok hampir sama.",
    "revisionPrompt": "Revisi rekomendasi untuk produk yang berbeda.",
    "modelReasoning": "Keduanya dapat menyepakati karakter dan memiliki affective berbeda akibat tujuan produk. Jangan mengubah descriptive berdasarkan pasar."
  },
  {
    "id": "svc-10",
    "moduleId": "M05",
    "title": "Nilai formulir lama",
    "brief": "Buyer mengirim skor total 84 tanpa detail dan menganggapnya setara dengan skor affective CVA.",
    "prompt": "Apa yang perlu kamu minta sebelum membandingkan?",
    "newEvidence": "Skor 84 ternyata dibuat dengan form tahun 2004.",
    "revisionPrompt": "Revisi cara menyimpan dan melaporkan metrik.",
    "modelReasoning": "Jangan menyamakan skor sistem lama dengan SCA-104. Simpan metadata metode dan lakukan penilaian ulang ketika data komparabel dibutuhkan."
  },
  {
    "id": "svc-11",
    "moduleId": "M06",
    "title": "Sampling satu sisi karung",
    "brief": "Sampling hanya dari permukaan satu karung berisi lot besar yang diberi label sama.",
    "prompt": "Apa risiko kesimpulan fisik bila hanya mengambil sampel dari satu sisi?",
    "newEvidence": "Bagian bawah karung kedua ternyata mempunyai warna dan kondisi berbeda.",
    "revisionPrompt": "Revisi prosedur dan status lot.",
    "modelReasoning": "Tahan kesimpulan umum; gunakan rencana sampling representatif serta dokumentasi sublot. Pemeriksaan senyawa sensori tak menggantikan inspeksi."
  },
  {
    "id": "svc-12",
    "moduleId": "M06",
    "title": "Bau musty dan kelembapan",
    "brief": "Satu cawan tercium apek dan petugas menyatakan lot tetap aman karena moisture satu titik di bawah target internal.",
    "prompt": "Apa keputusan awal yang bertanggung jawab?",
    "newEvidence": "Gudang sempat mengalami kondensasi dan sampel belum diuji lanjut.",
    "revisionPrompt": "Revisi status release dan langkah pemeriksaan.",
    "modelReasoning": "Perlu hold/investigate sesuai SOP. Moisture dan aw berbeda; keamanan tidak bisa dijamin dari rasa maupun satu angka kelembapan."
  },
  {
    "id": "svc-13",
    "moduleId": "M07",
    "title": "Klaim petani sejahtera",
    "brief": "Kopi dijual premium dengan klaim otomatis menyejahterakan petani, tetapi tidak ada catatan harga di tingkat produsen.",
    "prompt": "Apa yang boleh ditulis pada extrinsic?",
    "newEvidence": "Pemasok menawarkan invoice anonim satu transaksi saja.",
    "revisionPrompt": "Perbarui klaim dengan batas bukti.",
    "modelReasoning": "Dokumen satu transaksi mungkin membuktikan harga transaksi tertentu, bukan pendapatan bersih semua petani. Laporkan cakupan dan keterbatasan."
  },
  {
    "id": "svc-14",
    "moduleId": "M07",
    "title": "Label proses dan harapan rasa",
    "brief": "Pemasok menyebut proses 'anaerobic', penilai spontan mencatat nanas sebelum mencium.",
    "prompt": "Bagaimana mencegah informasi luar memengaruhi descriptive?",
    "newEvidence": "Saat kode ditutup, aroma utama justru nutty/cocoa.",
    "revisionPrompt": "Perbaiki urutan evaluasi dan pelaporan.",
    "modelReasoning": "Catat info proses pada extrinsic; lakukan blind descriptive sebelum membuka label; jangan mengarang flavor dari cerita proses."
  },
  {
    "id": "svc-15",
    "moduleId": "M08",
    "title": "Dua benar dari tiga",
    "brief": "Peserta triangle test benar dua dari tiga dan mengklaim kemampuan mendeteksi dengan kepastian tinggi.",
    "prompt": "Apa makna hasil untuk tebak acak?",
    "newEvidence": "Setiap trial memang independen tanpa kebocoran kode.",
    "revisionPrompt": "Hitung peluang minimal dua benar dan jelaskan kesimpulannya.",
    "modelReasoning": "P(X≥2) pada n=3 p=1/3 adalah 7/27≈25,9%; bukti masih terbatas. Jangan menyebut angka ini passing grade resmi."
  },
  {
    "id": "svc-16",
    "moduleId": "M08",
    "title": "Pilih berbeda berarti suka?",
    "brief": "Dalam tiga cawan AAB peserta menunjuk B sebagai yang berbeda.",
    "prompt": "Apa yang teruji dan apa yang belum?",
    "newEvidence": "Setelah ditanya, peserta justru lebih menyukai A.",
    "revisionPrompt": "Perbarui laporan tanpa kontradiksi.",
    "modelReasoning": "Triangle test menilai diskriminasi, bukan preferensi. Affective boleh mengunggulkan A walau peserta mampu memilih B sebagai berbeda."
  },
  {
    "id": "svc-17",
    "moduleId": "M09",
    "title": "Rata-rata menutupi cacat",
    "brief": "Empat dari lima cawan normal; satu berbau phenolic. Rata-rata panel masih memenuhi target.",
    "prompt": "Apa tindakan awal QC yang sesuai?",
    "newEvidence": "Cawan anomali berasal dari bagian lot lain dan masalah terulang pada duplikat.",
    "revisionPrompt": "Perbarui status dan rencana investigasi.",
    "modelReasoning": "Tahan bagian terkait, kaji representativitas dan penyebab. Rata-rata tidak membatalkan bukti anomali konsisten."
  },
  {
    "id": "svc-18",
    "moduleId": "M09",
    "title": "Panel berubah drastis",
    "brief": "Semua panelis tiba-tiba memberi rating intensitas lebih rendah daripada bulan lalu.",
    "prompt": "Apa hipotesis yang harus diperiksa?",
    "newEvidence": "Reference jar lama mengalami perubahan aroma setelah disimpan salah.",
    "revisionPrompt": "Ubah diagnosis dan rencana kalibrasi.",
    "modelReasoning": "Periksa stabilitas referensi, alat dan prosedur sebelum menyalahkan evaluator. Ganti referensi lalu ulangi pengukuran dengan kode buta."
  },
  {
    "id": "svc-19",
    "moduleId": "M10",
    "title": "Lot favorit tanpa dokumen",
    "brief": "Lot A disukai panel dan cocok untuk filter tetapi sertifikasi dan origin belum terbukti.",
    "prompt": "Apa syarat pembelian awal yang masuk akal?",
    "newEvidence": "Pemasok baru memberikan foto sertifikat yang tanggalnya kadaluarsa.",
    "revisionPrompt": "Perbarui keputusan sambil menjaga data sensori tetap utuh.",
    "modelReasoning": "Jangan mengubah deskripsi rasa. Ekstrinsic tetap belum terverifikasi; pembelian harus bersyarat atau ditahan menurut risiko."
  },
  {
    "id": "svc-20",
    "moduleId": "M10",
    "title": "Capstone: bukti yang mengubah pilihan",
    "brief": "Lot B cocok untuk espresso susu dan dokumennya lengkap; Lot C memiliki anomali fisik tapi lebih kompleks.",
    "prompt": "Bagaimana menyusun rekomendasi multi-lensa?",
    "newEvidence": "Inspeksi sublot C menemukan dugaan kontaminasi dan tim sales mendesak release.",
    "revisionPrompt": "Revisi prioritas, status QC dan komunikasi buyer.",
    "modelReasoning": "Tahan C dan lakukan investigasi keselamatan menurut SOP. Bandingkan B pada target pasar tanpa memberi label 'terbaik universal'."
  }
];
export const SENSORY_V2_DIAGNOSTICS:SensoryDiagnostic[]=[
  {
    "id": "svq-01",
    "moduleId": "M01",
    "question": "CVA membedakan empat asesmen agar...",
    "options": [
      "semua atribut berubah menjadi satu skor",
      "observasi, kesan mutu, kondisi fisik dan informasi tidak tercampur",
      "asal geografis bisa ditebak dari aroma",
      "semua penilai wajib menyukai kopi sama"
    ],
    "correctIndex": 1,
    "explanation": "Jawaban paling dapat dipertanggungjawabkan: observasi, kesan mutu, kondisi fisik dan informasi tidak tercampur. Pastikan jenis bukti dan batas kesimpulannya tidak tertukar."
  },
  {
    "id": "svq-02",
    "moduleId": "M01",
    "question": "Siswa lulus kelas digital CherryEdu. Klaim yang sah?",
    "options": [
      "otomatis Licensed Q Grader",
      "bebas mengklaim afiliasi SCA",
      "telah belajar metodologi, belum memperoleh lisensi resmi",
      "telah lulus ujian sensori fisik"
    ],
    "correctIndex": 2,
    "explanation": "Jawaban paling dapat dipertanggungjawabkan: telah belajar metodologi, belum memperoleh lisensi resmi. Pastikan jenis bukti dan batas kesimpulannya tidak tertukar."
  },
  {
    "id": "svq-03",
    "moduleId": "M02",
    "question": "'Stroberi' dalam flavor terutama termasuk...",
    "options": [
      "rasa dasar lidah",
      "hanya tekstur mulut",
      "indikator pasti asal lot",
      "analogi persepsi dengan kontribusi aroma"
    ],
    "correctIndex": 3,
    "explanation": "Jawaban paling dapat dipertanggungjawabkan: analogi persepsi dengan kontribusi aroma. Pastikan jenis bukti dan batas kesimpulannya tidak tertukar."
  },
  {
    "id": "svq-04",
    "moduleId": "M02",
    "question": "Ketika referensi aroma melemah sepanjang sesi, langkah awal?",
    "options": [
      "menuduh evaluator buruk",
      "cek adaptasi, jeda, urutan dan keadaan referensi",
      "hapus semua nilai yang rendah",
      "memaksa panel memberi nilai sama"
    ],
    "correctIndex": 1,
    "explanation": "Jawaban paling dapat dipertanggungjawabkan: cek adaptasi, jeda, urutan dan keadaan referensi. Pastikan jenis bukti dan batas kesimpulannya tidak tertukar."
  },
  {
    "id": "svq-05",
    "moduleId": "M03",
    "question": "Mengganti dosis seduh antarsampel tanpa catatan terutama merusak...",
    "options": [
      "representativitas green bean saja",
      "nama origin",
      "keterbandingan kondisi cupping",
      "sertifikat pemasok"
    ],
    "correctIndex": 2,
    "explanation": "Jawaban paling dapat dipertanggungjawabkan: keterbandingan kondisi cupping. Pastikan jenis bukti dan batas kesimpulannya tidak tertukar."
  },
  {
    "id": "svq-06",
    "moduleId": "M03",
    "question": "Kode acak dipakai agar...",
    "options": [
      "identitas lot tidak memengaruhi respons awal",
      "angka skor selalu naik",
      "proses roasting seragam otomatis",
      "buyer tak perlu dokumen"
    ],
    "correctIndex": 0,
    "explanation": "Jawaban paling dapat dipertanggungjawabkan: identitas lot tidak memengaruhi respons awal. Pastikan jenis bukti dan batas kesimpulannya tidak tertukar."
  },
  {
    "id": "svq-07",
    "moduleId": "M04",
    "question": "'Acidity intensity tinggi' berarti...",
    "options": [
      "kopi selalu cacat",
      "kandungan citric acid tertentu",
      "kesukaan pasar pasti tinggi",
      "sensasi asam kuat dalam kondisi evaluasi"
    ],
    "correctIndex": 3,
    "explanation": "Jawaban paling dapat dipertanggungjawabkan: sensasi asam kuat dalam kondisi evaluasi. Pastikan jenis bukti dan batas kesimpulannya tidak tertukar."
  },
  {
    "id": "svq-08",
    "moduleId": "M04",
    "question": "Kesan mulut menjadi kering termasuk...",
    "options": [
      "extrinsic origin",
      "mouthfeel atau astringency",
      "skor total green grading",
      "nilai harga"
    ],
    "correctIndex": 1,
    "explanation": "Jawaban paling dapat dipertanggungjawabkan: mouthfeel atau astringency. Pastikan jenis bukti dan batas kesimpulannya tidak tertukar."
  },
  {
    "id": "svq-09",
    "moduleId": "M05",
    "question": "Descriptive dan affective sebaiknya...",
    "options": [
      "digabung jadi satu kalimat promosi",
      "selalu mempunyai angka sama",
      "dicatat terpisah karena menjawab pertanyaan berbeda",
      "dihapus saat pasar berubah"
    ],
    "correctIndex": 2,
    "explanation": "Jawaban paling dapat dipertanggungjawabkan: dicatat terpisah karena menjawab pertanyaan berbeda. Pastikan jenis bukti dan batas kesimpulannya tidak tertukar."
  },
  {
    "id": "svq-10",
    "moduleId": "M05",
    "question": "Skor 84 pada formulir 2004...",
    "options": [
      "otomatis sama dengan skor SCA-104",
      "perlu label metode dan konteks sebelum dibandingkan",
      "membuktikan traceability",
      "mengukur ketertelusuran"
    ],
    "correctIndex": 1,
    "explanation": "Jawaban paling dapat dipertanggungjawabkan: perlu label metode dan konteks sebelum dibandingkan. Pastikan jenis bukti dan batas kesimpulannya tidak tertukar."
  },
  {
    "id": "svq-11",
    "moduleId": "M06",
    "question": "Moisture content dan water activity...",
    "options": [
      "tidak identik dan perlu metode ukur yang berbeda",
      "selalu saling dapat dikonversi",
      "cukup memastikan keamanan",
      "selalu lebih rendah pada natural"
    ],
    "correctIndex": 0,
    "explanation": "Jawaban paling dapat dipertanggungjawabkan: tidak identik dan perlu metode ukur yang berbeda. Pastikan jenis bukti dan batas kesimpulannya tidak tertukar."
  },
  {
    "id": "svq-12",
    "moduleId": "M06",
    "question": "Satu cawan apek dan gudang kondensasi, keputusan awal?",
    "options": [
      "rilis semua produk",
      "ganti deskripsi jadi cokelat",
      "abaikan bila rata-rata bagus",
      "hold dan investigasi sesuai SOP"
    ],
    "correctIndex": 3,
    "explanation": "Jawaban paling dapat dipertanggungjawabkan: hold dan investigasi sesuai SOP. Pastikan jenis bukti dan batas kesimpulannya tidak tertukar."
  },
  {
    "id": "svq-13",
    "moduleId": "M07",
    "question": "Extrinsic assessment merekam...",
    "options": [
      "hanya intensitas acidity",
      "hanya rasa manis",
      "informasi asal, proses dan bukti di luar cangkir",
      "warna liquid coffee"
    ],
    "correctIndex": 2,
    "explanation": "Jawaban paling dapat dipertanggungjawabkan: informasi asal, proses dan bukti di luar cangkir. Pastikan jenis bukti dan batas kesimpulannya tidak tertukar."
  },
  {
    "id": "svq-14",
    "moduleId": "M07",
    "question": "Klaim dampak petani perlu...",
    "options": [
      "bukti dan batas cakupan klaim",
      "selalu memakai kata 100%",
      "hanya skor sensorik",
      "aroma floral tinggi"
    ],
    "correctIndex": 0,
    "explanation": "Jawaban paling dapat dipertanggungjawabkan: bukti dan batas cakupan klaim. Pastikan jenis bukti dan batas kesimpulannya tidak tertukar."
  },
  {
    "id": "svq-15",
    "moduleId": "M08",
    "question": "Peluang memilih jawaban triangle test benar dengan tebakan acak?",
    "options": [
      "1/2",
      "1/3",
      "2/3",
      "1/9"
    ],
    "correctIndex": 1,
    "explanation": "Jawaban paling dapat dipertanggungjawabkan: 1/3. Pastikan jenis bukti dan batas kesimpulannya tidak tertukar."
  },
  {
    "id": "svq-16",
    "moduleId": "M08",
    "question": "Berhasil memilih satu cawan berbeda membuktikan...",
    "options": [
      "kopi berbeda itu lebih disukai",
      "kopi mahal lebih unggul",
      "kompetensi lisensi otomatis",
      "kemampuan diskriminasi pada percobaan itu saja"
    ],
    "correctIndex": 3,
    "explanation": "Jawaban paling dapat dipertanggungjawabkan: kemampuan diskriminasi pada percobaan itu saja. Pastikan jenis bukti dan batas kesimpulannya tidak tertukar."
  },
  {
    "id": "svq-17",
    "moduleId": "M09",
    "question": "Panel punya nilai 6,7,7,8,12. Median nilai adalah...",
    "options": [
      "8",
      "12",
      "7",
      "6"
    ],
    "correctIndex": 2,
    "explanation": "Jawaban paling dapat dipertanggungjawabkan: 7. Pastikan jenis bukti dan batas kesimpulannya tidak tertukar."
  },
  {
    "id": "svq-18",
    "moduleId": "M09",
    "question": "Anomali konsisten pada satu sublot, langkah QC?",
    "options": [
      "tahan sublot dan investigasi",
      "hilangkan nilai ekstrem tanpa alasan",
      "jual dengan diskon otomatis",
      "ganti catatan lama"
    ],
    "correctIndex": 0,
    "explanation": "Jawaban paling dapat dipertanggungjawabkan: tahan sublot dan investigasi. Pastikan jenis bukti dan batas kesimpulannya tidak tertukar."
  },
  {
    "id": "svq-19",
    "moduleId": "M10",
    "question": "Capstone yang kuat menyajikan...",
    "options": [
      "satu skor rahasia tanpa metode",
      "empat jenis bukti, batas keyakinan dan tindakan",
      "hanya cerita petani",
      "hanya kata enak"
    ],
    "correctIndex": 1,
    "explanation": "Jawaban paling dapat dipertanggungjawabkan: empat jenis bukti, batas keyakinan dan tindakan. Pastikan jenis bukti dan batas kesimpulannya tidak tertukar."
  },
  {
    "id": "svq-20",
    "moduleId": "M10",
    "question": "Bukti baru mengubah keputusan. Prinsip profesional?",
    "options": [
      "hapus laporan lama",
      "jangan pernah berubah pikiran",
      "pilih bukti yang menyenangkan sales",
      "catat versi, revisi dan alasan secara transparan"
    ],
    "correctIndex": 3,
    "explanation": "Jawaban paling dapat dipertanggungjawabkan: catat versi, revisi dan alasan secara transparan. Pastikan jenis bukti dan batas kesimpulannya tidak tertukar."
  }
];
