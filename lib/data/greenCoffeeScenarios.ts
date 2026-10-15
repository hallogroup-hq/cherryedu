export type CuratedScenario={module:string;title:string;stimulus:string;question:string;choices:string[];correctIndex:number;explanation:string};
export const GREEN_COFFEE_SCENARIOS:CuratedScenario[]=[
  {
    "module": "GC01",
    "title": "Bukti lot lebih penting daripada label",
    "stimulus": "Buyer ditawari green 120 kg berlabel 'Grade 1', tetapi hanya ada skor cupping internal dan tidak ada spesifikasi fisik.",
    "question": "Apa langkah sebelum menyetujui pembelian?",
    "choices": [
      "Minta sampel representatif dan spesifikasi fisik beserta metode pemeriksaannya.",
      "Terima semua klaim karena skor cupping mewakili seluruh dimensi mutu.",
      "Tentukan grade hanya dari nama origin dan desain kemasan."
    ],
    "correctIndex": 0,
    "explanation": "CVA memisahkan penilaian fisik dan sensori. Spesifikasi tidak lengkap sebelum mutu fisik dapat diuji menurut kontrak."
  },
  {
    "module": "GC02",
    "title": "Dua blok kebun dengan elevasi sama",
    "stimulus": "Dua blok kebun memiliki elevasi serupa tetapi kematangan ceri dan gejala penyakit berbeda.",
    "question": "Apa diagnosis berikutnya?",
    "choices": [
      "Asumsikan mutu cup harus identik karena elevasi sama.",
      "Bandingkan varietas, mikroklimat, naungan, penyakit dan tanggal panen.",
      "Ubah semua pemupukan tanpa pengukuran."
    ],
    "correctIndex": 1,
    "explanation": "Elevasi tidak mengisolasi seluruh faktor pertumbuhan. Kumpulkan beberapa bukti agronomi."
  },
  {
    "module": "GC03",
    "title": "Antrian penerimaan saat hujan",
    "stimulus": "Co-op menerima 700 kg cherry dari tiga kelompok sementara pulper hanya dapat menangani sebagian.",
    "question": "Langkah yang menjaga traceability?",
    "choices": [
      "Campur seluruh cherry agar cepat diolah.",
      "Gunakan satu kode lot gabungan sejak receiving.",
      "Timbang netto dan identifikasi tiap lot, lalu prioritaskan proses menurut kondisi dan kapasitas."
    ],
    "correctIndex": 2,
    "explanation": "Kekurangan kapasitas bukan alasan menghilangkan identitas lot. Receiving memerlukan timbang, sortir, dan status."
  },
  {
    "module": "GC04",
    "title": "Honey tanpa data pengeringan",
    "stimulus": "Pemasok menyebut 'black honey' tetapi tidak menyertakan catatan drying atau hasil pengukuran kondisi biji.",
    "question": "Apa keputusan buyer?",
    "choices": [
      "Minta catatan proses, sampel, dan QC sebelum menyetujui grade.",
      "Terima karena label black menjamin kadar gula tertentu.",
      "Anggap setara washed tanpa pemeriksaan."
    ],
    "correctIndex": 0,
    "explanation": "Nama warna honey tidak setara SOP universal. Data pengeringan dan mutu fisik diperlukan."
  },
  {
    "module": "GC05",
    "title": "Carbonic maceration tanpa fasilitas",
    "stimulus": "Pemilik mill ingin injeksi CO2 tanpa audit risiko gas, kelayakan tangki atau SOP operator.",
    "question": "Tindakan paling bertanggung jawab?",
    "choices": [
      "Uji di ruang tertutup agar gas tidak hilang.",
      "Tahan implementasi sampai fasilitas dan operator kompeten serta risiko terverifikasi.",
      "Mulai pada semua tangki dan evaluasi rasa kemudian."
    ],
    "correctIndex": 1,
    "explanation": "CO2 dapat menyebabkan asfiksia di ruang tertutup. Keselamatan mendahului eksperimen tren."
  },
  {
    "module": "GC06",
    "title": "Rata-rata menyembunyikan variasi",
    "stimulus": "Enam kantong green rata-rata menunjukkan kadar air sesuai kontrak tetapi dua kantong menyimpang signifikan.",
    "question": "Langkah QA?",
    "choices": [
      "Campur semua kantong agar rata-rata menjadi seragam.",
      "Lepas lot karena nilai rata-rata sesuai.",
      "Tahan lot, cek alat, pengambilan sampel, dan sumber variasi."
    ],
    "correctIndex": 2,
    "explanation": "Rata-rata saja menutupi variasi antar-kantong dan risiko rewetting."
  },
  {
    "module": "GC07",
    "title": "Biaya per kg saleable",
    "stimulus": "Dry mill menerima 500 kg parchment, menghasilkan 400 kg green kasar dan 385 kg green memenuhi spesifikasi. Biaya total Rp38.500.000.",
    "question": "Berapa biaya per kg green saleable?",
    "choices": [
      "Rp100.000 per kg saleable.",
      "Rp96.250 per kg karena memakai 400 kg sebagai denominator.",
      "Rp77.000 per kg karena memakai 500 kg sebagai denominator."
    ],
    "correctIndex": 0,
    "explanation": "Biaya per kg saleable = Rp38.500.000 / 385 = Rp100.000. Output kasar dan input parchment bukan denominator yang tepat."
  },
  {
    "module": "GC08",
    "title": "Karung basah setelah transit",
    "stimulus": "Di tujuan sebagian karung green basah dan berbau asing, sedangkan berat total cocok invoice.",
    "question": "Apa tindakan penerima?",
    "choices": [
      "Lepas semua karena berat cocok.",
      "Dokumentasikan, tahan bagian berisiko, sampling dan ajukan tindak lanjut sesuai kontrak.",
      "Ganti kode lot dan kemasan agar tidak perlu melapor."
    ],
    "correctIndex": 1,
    "explanation": "Kecocokan berat tidak menjamin kondisi mutu. Pemeriksaan dan dokumentasi wajib dilakukan."
  }
];
