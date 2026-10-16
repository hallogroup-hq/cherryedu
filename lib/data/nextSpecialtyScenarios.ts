import type {CuratedScenario} from '@/lib/data/greenCoffeeScenarios';
export const COFFEE_SHOP_SCENARIOS:CuratedScenario[]=[
  {
    "module": "CS01",
    "title": "Memilih kedai duduk atau kopi ambil cepat",
    "stimulus": "Dua calon pemilik sama-sama mendapat 80 respons positif di media sosial. Yang pertama ingin membuka kafe dengan tempat duduk; yang kedua kios kopi ambil cepat. Belum ada transaksi berbayar.",
    "question": "Bukti apa yang dibutuhkan sebelum membayar sewa atau membeli alat?",
    "choices": [
      "Anggap 80 minat cukup untuk menyewa tempat besar.",
      "Uji pembelian berbayar pada jam sasaran masing-masing model, periksa waktu layanan, kontribusi dan alasan pembelian ulang.",
      "Beli mesin paling mahal agar kedua model tampak premium."
    ],
    "correctIndex": 1,
    "explanation": "Kafe duduk perlu bukti nilai penggunaan ruang; kios ambil cepat perlu bukti antrean dan pembelian di waktu singkat. Respons sosial tidak membuktikan transaksi atau kebutuhan kapasitas."
  },
  {
    "module": "CS02",
    "title": "Lokasi gerobak bergerak berbeda dari ruko",
    "stimulus": "Pemilik membandingkan ruko yang ramai kendaraan dengan rute gerobak yang melewati kantor pagi hari. Pada rute gerobak ada waktu jalan, isi ulang bahan dan titik berhenti yang harus diizinkan.",
    "question": "Bagaimana mengukur potensi penjualan secara sebanding?",
    "choices": [
      "Catat pelanggan sasaran yang benar-benar dapat membeli; untuk ruko uji akses dan jam kunjungan, untuk gerobak uji jam berjualan efektif, kebutuhan fasilitas dan legalitas titik.",
      "Pilih ruko karena setiap kendaraan lewat adalah pembeli.",
      "Pilih gerobak karena pasti bebas biaya lokasi dan izin."
    ],
    "correctIndex": 0,
    "explanation": "Peluang ruko diukur dengan perilaku orang yang dapat berhenti; gerobak dengan waktu dan lokasi yang benar-benar bisa melayani. Keduanya butuh verifikasi operasional dan izin sesuai lokasi."
  },
  {
    "module": "CS03",
    "title": "Membedakan margin dan markup",
    "stimulus": "Biaya minuman termasuk bahan dan kemasan Rp12.000, harga jual Rp30.000, abaikan fee, pajak dan diskon.",
    "question": "Berapa gross margin sederhana?",
    "choices": [
      "150%",
      "40%",
      "60%"
    ],
    "correctIndex": 2,
    "explanation": "Gross margin = (30.000−12.000)/30.000 = 60%; markup = 150%. Kontribusi bisa berbeda karena fee variabel."
  },
  {
    "module": "CS04",
    "title": "Menguji titik impas",
    "stimulus": "Fixed cost Rp18.000.000/bulan, net revenue per cup Rp32.000, total variable cost Rp14.000/cup.",
    "question": "Berapa BEP sederhana?",
    "choices": [
      "1.000 cup/bulan",
      "562,5 cup/bulan",
      "1.286 cup/bulan"
    ],
    "correctIndex": 0,
    "explanation": "Kontribusi Rp18.000 per cup. Rp18.000.000/Rp18.000 = 1.000 cup. Belum memperhitungkan kapasitas dan perubahan mix."
  },
  {
    "module": "CS05",
    "title": "Laba bagus, kas kurang",
    "stimulus": "Saldo awal Rp15 juta, kas masuk pekan ini Rp4 juta, kewajiban supplier Rp12 juta dan sewa Rp10 juta.",
    "question": "Saldo akhir dan tindakan?",
    "choices": [
      "Plus Rp3 juta; lanjutkan belanja mesin.",
      "Minus Rp3 juta; evaluasi jadwal pembayaran, piutang dan kebutuhan pembiayaan.",
      "Plus Rp19 juta karena invoice pendapatan sudah dicatat."
    ],
    "correctIndex": 1,
    "explanation": "15+4−12−10=−3 juta. Laba akuntansi bukan uang tunai yang siap dipakai."
  },
  {
    "module": "CS06",
    "title": "Bottleneck kopi take-away saat jam berangkat kerja",
    "stimulus": "Sebuah kios kopi ambil cepat menerima 30 pesanan dalam 15 menit tetapi menyelesaikan 18 pesanan sesuai standar. Sembilan pelanggan menunggu di meja pickup; tidak diketahui berapa lama tiap pesanan akan selesai.",
    "question": "Apa keputusan awal yang paling tepat?",
    "choices": [
      "Tegur seluruh staf karena antrean membuktikan mereka tidak berusaha.",
      "Beli mesin baru sebelum memeriksa tiket, packing atau urutan pickup.",
      "Backlog bertambah 12 pesanan dalam interval itu bila tidak ada pembatalan; cek alur order, pembuatan, pickup dan komunikasi waktu tunggu."
    ],
    "correctIndex": 2,
    "explanation": "30 minus 18 memberi tambahan backlog 12 pesanan, bukan lama tunggu 12 menit. Kios cepat perlu memeriksa titik macet aktual sebelum menambah CAPEX."
  },
  {
    "module": "CS07",
    "title": "Alergen pelanggan dan pitcher bersama",
    "stimulus": "Pelanggan menyebut alergi susu berat. Seluruh pitcher telah digunakan untuk susu sapi dan staf belum yakin dapat menghilangkan kontaminasi silang.",
    "question": "Apa keputusan aman?",
    "choices": [
      "Berhenti menjamin keamanan, cek bahan dan prosedur, serta komunikasikan batas fasilitas sebelum menerima pesanan.",
      "Pakai pitcher yang terlihat bersih untuk minuman nabati.",
      "Tawarkan seteguk untuk melihat efek alergi."
    ],
    "correctIndex": 0,
    "explanation": "Alergen tidak bisa disimpulkan aman dari tampilan. SOP dan verifikasi penanganan silang lebih penting."
  },
  {
    "module": "CS08",
    "title": "Promosi yang cocok untuk pelanggan sekitar atau gerobak",
    "stimulus": "Sebuah kedai lingkungan menargetkan pembelian ulang; usaha gerobak menargetkan transaksi di rute dan jam tertentu. Keduanya melihat omzet meningkat, tetapi komplain, refund dan waste ikut naik serta kontribusi per cup menurun.",
    "question": "Apa keputusan owner yang paling masuk akal?",
    "choices": [
      "Tambah diskon karena kenaikan omzet membuktikan promosi efektif.",
      "Periksa kontribusi setelah promo, repeat kedai, penjualan per jam efektif gerobak, kapasitas dan alasan komplain sebelum menambah anggaran.",
      "Nilai promosi hanya dengan jumlah views dan omzet tanpa memperhatikan kas."
    ],
    "correctIndex": 1,
    "explanation": "Kedai berbasis pelanggan tetap dan gerobak punya penggerak berbeda. Keduanya harus mengukur biaya tambahan, mutu, repeat atau jam jual efektif sebelum memperbesar promosi."
  }
];
export const Q_PROCESSOR_SCENARIOS:CuratedScenario[]=[
  {
    "module": "QP01",
    "title": "Lot tanpa kode saat receiving",
    "stimulus": "Cherry dari empat pemasok datang bersamaan. Dua batch akan digunakan untuk membandingkan proses washed dan honey.",
    "question": "Kontrol awal terpenting?",
    "choices": [
      "Campur semua cherry agar distribusi seragam tanpa kode.",
      "Label proses nanti setelah cup test selesai.",
      "Timbang netto, inspeksi dan beri kode lot sebelum pembagian ke perlakuan."
    ],
    "correctIndex": 2,
    "explanation": "Perbandingan ilmiah memerlukan identitas bahan dan kondisi awal untuk menghindari confounding."
  },
  {
    "module": "QP02",
    "title": "pH akhir sama, suhu berbeda",
    "stimulus": "Dua batch fermentasi berakhir di pH 4,0 tetapi satu berlangsung jauh lebih hangat dan lebih cepat.",
    "question": "Kesimpulan tepat?",
    "choices": [
      "Bandingkan tren pH, suhu, input dan kondisi hasil; pH akhir tunggal bukan bukti proses identik.",
      "Kedua batch pasti memiliki mikroba dan aroma sama.",
      "Batch lebih panas otomatis menjadi kopi cacat tanpa uji lanjutan."
    ],
    "correctIndex": 0,
    "explanation": "Kinetika dan matriks proses penting; nilai pH akhir tidak mengidentifikasi populasi mikroba."
  },
  {
    "module": "QP03",
    "title": "Depulper menyebabkan biji lecet",
    "stimulus": "Setelah penggantian lot cherry, sampel output depulper menunjukkan peningkatan cedera fisik parchment.",
    "question": "Langkah kontrol?",
    "choices": [
      "Tambah durasi fermentasi untuk menyembunyikan lecet.",
      "Hentikan sementara dan cek kondisi input serta setelan depulper oleh operator kompeten.",
      "Buang seluruh data dan langsung gunakan mesin yang sama pada lot baru."
    ],
    "correctIndex": 1,
    "explanation": "Masalah depulper perlu didiagnosis pada tahap sumbernya. Fermentasi tidak memperbaiki cedera mekanis."
  },
  {
    "module": "QP04",
    "title": "Honey tanpa SOP jelas",
    "stimulus": "Pemasok mendeskripsikan green sebagai 'red honey' tanpa catatan mucilage maupun pengeringan.",
    "question": "Keputusan proses buyer?",
    "choices": [
      "Tafsirkan label red sebagai kadar gula dan jam fermentasi tetap.",
      "Anggap pasti lebih manis daripada semua washed.",
      "Minta keterangan proses, QC fisik dan sampel sebelum memvalidasi klaim."
    ],
    "correctIndex": 2,
    "explanation": "Istilah warna honey tidak memberi SOP universal."
  },
  {
    "module": "QP05",
    "title": "Carbonic tanpa mitigasi gas",
    "stimulus": "Sebuah mill ingin bereksperimen dengan CO2 di area tertutup tanpa ventilasi atau pelatihan petugas.",
    "question": "Respons yang tepat?",
    "choices": [
      "Tunda sampai ada evaluasi bahaya, fasilitas aman dan operator kompeten.",
      "Jalankan eksperimen karena CO2 aman selama gas tidak berbau.",
      "Arahkan staf masuk tangki untuk mengecek aroma."
    ],
    "correctIndex": 0,
    "explanation": "CO2 menimbulkan risiko kekurangan oksigen. Keselamatan tidak boleh dikalahkan potensi harga premium."
  },
  {
    "module": "QP06",
    "title": "Moisture sama, aw berbeda",
    "stimulus": "Dua lot mengukur kadar air 11% tetapi water activity berbeda dan gudang akan lembap karena musim hujan.",
    "question": "Apa tindakan?",
    "choices": [
      "Asumsikan water activity dan moisture setara.",
      "Investigasi sampling, kalibrasi, kondisi drying dan penyimpanan sebelum release.",
      "Simpan keduanya selama 18 bulan tanpa monitoring."
    ],
    "correctIndex": 1,
    "explanation": "Water activity dan kadar air bukan pengukuran identik; variasi perlu diperiksa."
  },
  {
    "module": "QP07",
    "title": "Biaya per kg saleable",
    "stimulus": "Parchment input 1.000 kg, green kasar 810 kg, dan output green memenuhi spesifikasi 780 kg.",
    "question": "Berapa rendemen saleable dari parchment?",
    "choices": [
      "81%",
      "30%",
      "78%"
    ],
    "correctIndex": 2,
    "explanation": "780/1.000=78%, sedangkan 810 kg output kasar belum memperhitungkan reject sortasi."
  },
  {
    "module": "QP08",
    "title": "Lulus kuis daring, belum pengalaman lapangan",
    "stimulus": "Peserta meraih skor sempurna pada materi online tetapi belum mengoperasikan wet mill atau diuji praktik oleh instruktur kompeten.",
    "question": "Klaim yang sah?",
    "choices": [
      "Telah menyelesaikan pembelajaran teori; kemampuan praktik dan sertifikasi CQI memerlukan proses resmi terpisah.",
      "Berhak otomatis memakai gelar CQI Processing Professional.",
      "Sudah aman memimpin pengolahan berisiko tinggi tanpa pendampingan."
    ],
    "correctIndex": 0,
    "explanation": "Program CQI Professional memerlukan asesmen teori serta praktik lapangan yang berbeda dari kuis daring."
  }
];
