import type {CuratedScenario} from '@/lib/data/greenCoffeeScenarios';
export const COFFEE_SHOP_SCENARIOS:CuratedScenario[]=[
  {
    "module": "CS01",
    "title": "Minat belum sama dengan transaksi",
    "stimulus": "Pendiri kedai mendapat 80 respons positif di survei online tetapi belum ada pesanan berbayar.",
    "question": "Apa data berikutnya yang paling berharga?",
    "choices": [
      "Mulai kontrak sewa setahun berdasarkan 80 minat.",
      "Tes pop-up atau preorder berbayar dengan pelanggan sasaran, lalu catat repeat dan margin.",
      "Beli semua mesin paling mahal untuk meningkatkan persepsi merek."
    ],
    "correctIndex": 1,
    "explanation": "Minat awal berbeda dari demand berbayar. Uji kemampuan menjual dan memenuhi pesanan sebelum investasi tidak reversibel."
  },
  {
    "module": "CS02",
    "title": "Lokasi ramai tetapi sulit berhenti",
    "stimulus": "Lokasi A dilewati banyak kendaraan; lokasi B lebih sepi tetapi mudah diakses pejalan dari kantor dan tersedia tempat antre.",
    "question": "Bagaimana memilih?",
    "choices": [
      "Bandingkan potensi pembeli aktual, jam puncak, biaya lokasi dan konversi uji lapangan.",
      "Pilih A karena seluruh kendaraan pasti menjadi pelanggan.",
      "Pilih lokasi termurah tanpa mengecek target pengguna."
    ],
    "correctIndex": 0,
    "explanation": "Traffic tidak identik transaksi. Observasi segmen, akses dan konteks operasi lebih berguna."
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
    "title": "Antrian lebih panjang dari kapasitas",
    "stimulus": "Dalam 15 menit masuk 30 order, kapasitas stabil bar hanya 18 pesanan.",
    "question": "Apa interpretasi awal?",
    "choices": [
      "Tim pasti buruk dan perlu langsung diganti.",
      "Mesin pasti perlu diganti tanpa menguji workflow.",
      "Terbentuk backlog 12 pesanan; evaluasi bottleneck, komunikasi tunggu dan rencana kapasitas."
    ],
    "correctIndex": 2,
    "explanation": "Permintaan melampaui throughput 12 order dalam interval; perlu diagnosis stasiun dan beban puncak."
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
    "title": "Omzet tumbuh, komplain juga",
    "stimulus": "Omzet naik 20%, tetapi refund, komplain lambat dan waste meningkat sementara kontribusi per cup turun.",
    "question": "Apa langkah owner?",
    "choices": [
      "Naikkan diskon dan iklan agar omzet makin tinggi.",
      "Audit layanan, unit economics, waste dan kapasitas sebelum memperluas promosi.",
      "Nilai sukses hanya dari omzet karena semua KPI lain bisa diabaikan."
    ],
    "correctIndex": 1,
    "explanation": "Growth harus dibaca bersama kontribusi, kapasitas dan pengalaman pelanggan."
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
