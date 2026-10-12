/** Formative assessment only — original scenarios, not official exam or practical credential. */
export type BaristaDiagnosticQuestion={id:string;module:string;title:string;scenario:string;options:{text:string;feedback:string}[];correct:number;objective:string};
export const BARISTA_V2_DIAGNOSTICS:BaristaDiagnosticQuestion[]=[
  {
    "id": "m01-safe-open",
    "module": "M01",
    "title": "Bar belum aman",
    "scenario": "Ada genangan dekat soket mesin. Semua bahan siap dan pelanggan pertama datang. Pilihan tindakan awal mana paling tepat?",
    "options": [
      {
        "text": "Membuat filter di sisi lain sambil menunggu lantai kering sendiri.",
        "feedback": "Risiko area kerja belum dikendalikan; lokasi lain belum otomatis membuat jalur aman."
      },
      {
        "text": "Menjalankan mesin sebentar untuk melihat apakah ada gangguan.",
        "feedback": "Pengujian peralatan dengan indikasi bahaya bukan pemeriksaan operator yang aman."
      },
      {
        "text": "Amankan area terkait, hentikan penggunaan, dan laporkan sesuai SOP.",
        "feedback": "Keselamatan dan keputusan stop-work perlu mendahului kecepatan penyajian."
      },
      {
        "text": "Meminta pelanggan memilih menu lebih cepat sambil mengelap area.",
        "feedback": "Antrean dan pembersihan spontan tidak menggantikan pemeriksaan bahaya dan otorisasi."
      }
    ],
    "correct": 2,
    "objective": "Memprioritaskan risiko bahaya sebelum optimasi layanan."
  },
  {
    "id": "m01-strength-brief",
    "module": "M01",
    "title": "Arti strong belum jelas",
    "scenario": "Pesanan berbunyi 'latte strong tapi jangan pahit'. Informasi pertama yang paling bernilai adalah ...",
    "options": [
      {
        "text": "Apakah strong berarti intensitas rasa kopi atau kebutuhan kafein?",
        "feedback": "Benar. Satu pertanyaan memisahkan dua tujuan yang dapat mengarah ke opsi berbeda."
      },
      {
        "text": "Apakah pelanggan mau ukuran gelas terbesar?",
        "feedback": "Ukuran bisa ditanya sesudah tujuan utama diketahui, tetapi tidak menyelesaikan ambigu strong."
      },
      {
        "text": "Apakah grinder tersedia untuk espresso lebih pendek?",
        "feedback": "Kondisi alat penting, tetapi belum menjelaskan keinginan pelanggan."
      },
      {
        "text": "Apakah pelanggan ingin topping atau garnish?",
        "feedback": "Topping bukan inti ambiguitas intensitas versus kafein."
      }
    ],
    "correct": 0,
    "objective": "Mengklarifikasi tujuan sebelum menentukan solusi."
  },
  {
    "id": "m02-same-ey",
    "module": "M02",
    "title": "Strength dan extraction yield",
    "scenario": "A: 20 g kopi → 40 g minuman, TDS 10%. B: 20 g kopi → 50 g minuman, TDS 8%. Apa yang didukung data?",
    "options": [
      {
        "text": "B pasti lebih terekstraksi karena hasil minumannya lebih banyak.",
        "feedback": "Output lebih besar tidak otomatis berarti estimasi extraction yield lebih besar."
      },
      {
        "text": "A dan B pasti memiliki rasa yang sama karena EY sama.",
        "feedback": "Komposisi sensorik dan preferensi tidak dapat dibuktikan oleh estimasi EY sama."
      },
      {
        "text": "A memiliki EY 10% dan B 8% karena mengikuti TDS.",
        "feedback": "TDS adalah konsentrasi, bukan persentase kopi awal yang berpindah."
      },
      {
        "text": "Estimasi EY keduanya 20%, sedangkan A lebih terkonsentrasi.",
        "feedback": "Kedua minuman membawa estimasi 4 g zat terlarut dari 20 g dose; A TDS 10% vs B 8%."
      }
    ],
    "correct": 3,
    "objective": "Memisahkan konsentrasi, estimasi EY dan rasa."
  },
  {
    "id": "m02-through-vs-bypass",
    "module": "M02",
    "title": "Air setelah seduh",
    "scenario": "Dua uji memakai air total 240 g dengan 15 g kopi. Uji P mengalirkan 240 g melalui bed; Q mengalirkan 225 g lalu menambah 15 g air setelah seduh. Mana pernyataan defensibel?",
    "options": [
      {
        "text": "P dan Q pasti menghasilkan TDS identik karena air total sama.",
        "feedback": "Jalur kontak dengan bed berbeda sehingga massa zat terlarut mungkin tidak sama."
      },
      {
        "text": "Q mengencerkan minuman setelah ekstraksi; P juga dapat mengubah ekstraksi.",
        "feedback": "Pernyataan membedakan mekanisme dilution dari air-through-bed."
      },
      {
        "text": "Q menghasilkan extraction yield lebih tinggi karena waktu minumnya lebih singkat.",
        "feedback": "Tidak ada dasar waktu minum ataupun EY pada data."
      },
      {
        "text": "P selalu lebih manis karena rasio 1:16 lebih baik.",
        "feedback": "Tidak ada rasio yang menjamin rasa untuk semua kopi."
      }
    ],
    "correct": 1,
    "objective": "Membedakan mekanisme dari total massa air."
  },
  {
    "id": "m03-grinder-setting",
    "module": "M03",
    "title": "Angka berbeda bukan masalah tunggal",
    "scenario": "Grinder model A dan B punya setting angka 5; dose/yield sama, tetapi waktu berbeda. Langkah pembanding yang paling masuk akal?",
    "options": [
      {
        "text": "Anggap B rusak karena nomor setting 5 menghasilkan shot lebih cepat.",
        "feedback": "Nomor setelan tidak bisa dibandingkan lintas model sebagai skala ukuran partikel universal."
      },
      {
        "text": "Ubah setelan keduanya sampai timer sama tanpa mengecek basket.",
        "feedback": "Waktu saja bukan target rasa; variabel lain tetap perlu dipahami."
      },
      {
        "text": "Periksa konteks grinder, bed preparation, basket dan definisi waktu lalu uji bertahap.",
        "feedback": "Salah satu hipotesis bisa diprioritaskan setelah faktor yang berubah diperiksa."
      },
      {
        "text": "Gunakan foto shot untuk memastikan EY keduanya sama.",
        "feedback": "Foto aliran tidak memberi EY tanpa pengukuran valid."
      }
    ],
    "correct": 2,
    "objective": "Menolak setelan grinder sebagai satuan universal."
  },
  {
    "id": "m03-espresso-ratio",
    "module": "M03",
    "title": "Angka 18→36 g",
    "scenario": "Barista menulis 18 g dose dan 36 g espresso dalam 28 detik. Makna 36 g yang paling tepat adalah ...",
    "options": [
      {
        "text": "Massa minuman yang dihasilkan di cangkir.",
        "feedback": "Beverage yield bukan total air yang dipompa."
      },
      {
        "text": "Volume air yang masuk ke boiler.",
        "feedback": "Pengukuran itu tidak tersedia dari massa beverage."
      },
      {
        "text": "Massa zat terlarut yang berpindah dari kopi.",
        "feedback": "Butuh TDS untuk mengestimasi zat terlarut."
      },
      {
        "text": "Wajib berarti hasil paling seimbang untuk semua kopi.",
        "feedback": "Rasio 1:2 adalah deskripsi kondisi, bukan jaminan rasa."
      }
    ],
    "correct": 0,
    "objective": "Memahami dose, beverage yield dan shot time."
  },
  {
    "id": "m04-slow-diagnosis",
    "module": "M04",
    "title": "Shot melambat",
    "scenario": "Shot kemarin 18→36 g/28s, hari ini 18→36g/37s, tetapi detail puck tidak tercatat. Kesimpulan terkuat?",
    "options": [
      {
        "text": "Grinder pasti menjadi lebih halus.",
        "feedback": "Hipotesis mungkin, bukan kepastian dari waktu saja."
      },
      {
        "text": "Biji pasti sudah tua sehingga flow melambat.",
        "feedback": "Umur kopi dan pengaruhnya tidak terukur pada log."
      },
      {
        "text": "Shot pasti lebih pahit karena waktu lebih lama.",
        "feedback": "Rasa belum dicicipi; satu indikator tidak menjamin karakter sensorik."
      },
      {
        "text": "Ada perubahan waktu yang perlu ditelusuri dengan beberapa hipotesis.",
        "feedback": "Waktu adalah observasi; data puck, grind, mesin, kopi dan rasa masih dibutuhkan."
      }
    ],
    "correct": 3,
    "objective": "Menahan atribusi sebab tunggal dari gejala."
  },
  {
    "id": "m04-control-confound",
    "module": "M04",
    "title": "Mengubah empat variabel",
    "scenario": "Barista mengganti grind, dose dan output dalam satu percobaan; shot baru disukai. Klaim mana sah?",
    "options": [
      {
        "text": "Pengaruh grind sudah terbukti karena setting paling besar perubahannya.",
        "feedback": "Tidak ada isolasi sebab, meski grind berubah banyak."
      },
      {
        "text": "Kombinasi kondisi baru lebih disukai pada sesi itu; penyebab individual belum dipisahkan.",
        "feedback": "Membedakan hasil yang nyata dan klaim sebab yang belum didukung."
      },
      {
        "text": "Dose tidak berpengaruh karena semua espresso berakhir pada 1:2.",
        "feedback": "Dose dan output bisa memengaruhi proses; 1:2 bukan bukti independensi."
      },
      {
        "text": "Tiga faktor itu harus selalu dinaikkan bersama pada kopi lain.",
        "feedback": "Tidak ada dasar untuk generalisasi resep."
      }
    ],
    "correct": 1,
    "objective": "Membedakan preferensi hasil dari bukti kausal."
  },
  {
    "id": "m05-lactose-vs-protein",
    "module": "M05",
    "title": "Lactose-free untuk alergi?",
    "scenario": "Pelanggan mengaku alergi protein susu sapi. Staff menawarkan susu sapi lactose-free. Apa masalah utama?",
    "options": [
      {
        "text": "Lactose-free pasti memiliki lebih banyak kafein.",
        "feedback": "Kafein tidak relevan dengan risiko protein susu."
      },
      {
        "text": "Susu oat selalu aman tanpa perlu memeriksa alat.",
        "feedback": "Risiko bahan dan kontak silang tetap perlu diverifikasi."
      },
      {
        "text": "Produk bebas laktosa bisa tetap mengandung protein susu yang memicu alergi.",
        "feedback": "Benar; intoleransi laktosa dan alergi protein susu merupakan kondisi berbeda."
      },
      {
        "text": "Foam lactose-free selalu buruk sehingga tidak bisa disajikan.",
        "feedback": "Perilaku foam bergantung formula; ini bukan masalah utama."
      }
    ],
    "correct": 2,
    "objective": "Memisahkan jenis sensitivitas bahan dan klaim keamanan."
  },
  {
    "id": "m05-foam-cause",
    "module": "M05",
    "title": "Busa berbeda, foto sama-sama indah",
    "scenario": "Dua sampel menghasilkan foam berbeda; produk susu dan suhu awal sekaligus berubah. Langkah diagnosis pertama?",
    "options": [
      {
        "text": "Langsung menyalahkan teknik operator karena merek susu tidak penting.",
        "feedback": "Komposisi formula mungkin memengaruhi foam."
      },
      {
        "text": "Gunakan lebih banyak aeration untuk semua formula.",
        "feedback": "Tidak ada target universal untuk seluruh merek dan mesin."
      },
      {
        "text": "Anggap susu paling murah menghasilkan tekstur terbaik.",
        "feedback": "Harga bukan bukti stabilitas foam."
      },
      {
        "text": "Rancang perbandingan dengan kondisi awal/alat yang didokumentasi dan perubahan terencana.",
        "feedback": "Beberapa variabel berubah bersamaan sehingga klaim sebab perlu diuji ulang."
      }
    ],
    "correct": 3,
    "objective": "Mengidentifikasi variabel pengganggu pada studi foam."
  },
  {
    "id": "m06-ice-outcome",
    "module": "M06",
    "title": "Massa es bukan air cair",
    "scenario": "Dua iced latte mengandung 36 g espresso dan susu sama; B diberi es lebih banyak. Pernyataan mana sah saat detik pertama?",
    "options": [
      {
        "text": "Kita belum tahu jumlah es yang mencair; waktu dan suhu perlu diamati.",
        "feedback": "Es awal tidak identik dengan air cair dalam minuman pada waktu tertentu."
      },
      {
        "text": "B pasti lebih encer tepat saat dituangkan karena lebih banyak es.",
        "feedback": "Kadar dilution ditentukan es yang benar-benar mencair."
      },
      {
        "text": "B pasti lebih berkafein karena suhu lebih dingin.",
        "feedback": "Suhu dan jumlah es tidak menentukan jumlah kafein dengan pasti."
      },
      {
        "text": "Massa es tak penting sehingga tidak perlu dicatat.",
        "feedback": "Es penting untuk suhu, ukuran dan perubahan minuman."
      }
    ],
    "correct": 0,
    "objective": "Membedakan komponen awal dari hasil waktu nyata."
  },
  {
    "id": "m06-pretty-wrong",
    "module": "M06",
    "title": "Latte art salah pesanan",
    "scenario": "Latte art terlihat rapi, tetapi tiket pelanggan iced oat latte dibuat menjadi hot dairy latte. Keputusan apa paling defensibel?",
    "options": [
      {
        "text": "Tetap disajikan karena tampilan membuktikan kualitas.",
        "feedback": "Tampilan tidak memperbaiki kesalahan suhu dan bahan."
      },
      {
        "text": "Periksa tiket, tahan minuman yang salah dan lakukan perbaikan sesuai SOP.",
        "feedback": "Ketepatan komposisi dan keamanan bahan didahulukan daripada gambar."
      },
      {
        "text": "Tambahkan es ke minuman yang sudah salah susu.",
        "feedback": "Kesalahan bahan, terutama potensi alergen, tidak bisa dibetulkan hanya dengan es."
      },
      {
        "text": "Jelaskan bahwa latte art lebih mahal daripada es.",
        "feedback": "Harga bukan alasan menolak kecocokan pesanan."
      }
    ],
    "correct": 1,
    "objective": "Memisahkan mutu visual dari kecocokan pesanan."
  },
  {
    "id": "m07-input-output",
    "module": "M07",
    "title": "Rasio filter",
    "scenario": "15 g kopi + 225 g brew water menghasilkan 185 g minuman. Apa arti rasio 1:15?",
    "options": [
      {
        "text": "Minuman keluar 225 g karena semua air menjadi cairan cangkir.",
        "feedback": "Contoh memperlihatkan output hanya 185 g."
      },
      {
        "text": "Massa air yang hilang dari bed pasti 40 g untuk semua filter.",
        "feedback": "Retensi tidak universal lintas alat."
      },
      {
        "text": "Perbandingan kopi kering terhadap air masuk saat seduh.",
        "feedback": "Itu definisi rasio input pada contoh ini."
      },
      {
        "text": "Sama dengan beverage-output ratio espresso 1:15.",
        "feedback": "Definisi pembilang dan penyebut perlu jelas dan berbeda."
      }
    ],
    "correct": 2,
    "objective": "Memahami unit dan titik ukur filter."
  },
  {
    "id": "m07-batch-hold",
    "module": "M07",
    "title": "Batch brew tanpa catatan",
    "scenario": "Batch brew sudah ada, tetapi log waktu dan prosedur holding hilang. Puluhan tamu menunggu. Apa keputusan tepat?",
    "options": [
      {
        "text": "Tahan sampai kelayakan dapat diverifikasi; siapkan opsi layanan sesuai SOP.",
        "feedback": "Tekanan antrean tidak mengesahkan bahan yang statusnya tidak diketahui."
      },
      {
        "text": "Gunakan dulu karena kopi tampak jernih.",
        "feedback": "Tampilan tidak menjamin kondisi holding aman."
      },
      {
        "text": "Tambahkan air panas agar batch menjadi aman.",
        "feedback": "Penambahan air bukan validasi keamanan pangan."
      },
      {
        "text": "Cicipi sedikit dan anggap semua batch aman jika tidak asam.",
        "feedback": "Tasting saja tidak membuktikan keamanan."
      }
    ],
    "correct": 0,
    "objective": "Memprioritaskan holding yang terverifikasi."
  },
  {
    "id": "m08-complaint-source",
    "module": "M08",
    "title": "Pelanggan bilang encer",
    "scenario": "Tiket menyebut iced latte, tetapi disajikan hot latte dengan resep espresso sesuai standar. Apa respons awal terbaik?",
    "options": [
      {
        "text": "Tunjukkan bahwa angka shot sesuai agar pelanggan percaya.",
        "feedback": "Shot sesuai tidak mengubah fakta suhu/jenis pesanan salah."
      },
      {
        "text": "Ubah grind lebih halus sebelum mengklarifikasi.",
        "feedback": "Kesalahan tiket lebih langsung daripada hipotesis extraction."
      },
      {
        "text": "Tawarkan garnish agar tidak perlu remake.",
        "feedback": "Garnish bukan solusi kecocokan pesanan."
      },
      {
        "text": "Akui ketidaksesuaian, cek tiket dan kebijakan remake, lalu perbaiki komunikasi.",
        "feedback": "Mulailah dari fakta pesanan dan pilihan yang disetujui."
      }
    ],
    "correct": 3,
    "objective": "Menangani keluhan sesuai akar masalah teramati."
  },
  {
    "id": "m08-creative-boundary",
    "module": "M08",
    "title": "Menu tidak ada",
    "scenario": "Pelanggan ingin signature yang belum ada dan menyebut alergi kacang. Apa batas improvisasi?",
    "options": [
      {
        "text": "Semua resep boleh dicoba jika bahan terlihat segar.",
        "feedback": "Kesegaran tidak menyelesaikan label alergen dan otorisasi menu."
      },
      {
        "text": "Konfirmasi bahan, alat, kemampuan SOP dan opsi menu sebelum menawarkan modifikasi.",
        "feedback": "Kreativitas tidak membatalkan batas keamanan dan janji pada pelanggan."
      },
      {
        "text": "Ganti susu dengan almond milk karena nabati.",
        "feedback": "Almond merupakan kacang dan bisa tidak sesuai alergi."
      },
      {
        "text": "Buat minuman dulu, tanyakan riwayat alergi sesudahnya.",
        "feedback": "Informasi keselamatan diperlukan sebelum proses berisiko."
      }
    ],
    "correct": 1,
    "objective": "Mengutamakan klarifikasi dan kontrol risiko pada improvisasi."
  },
  {
    "id": "m09-cleaner-unknown",
    "module": "M09",
    "title": "Cleaner tanpa label",
    "scenario": "Botol chemical tidak berlabel; rekan menyarankan mencampurkannya untuk mempercepat cleaning. Apa respons?",
    "options": [
      {
        "text": "Coba setetes di bagian luar mesin.",
        "feedback": "Uji acak bukan cara aman mengidentifikasi bahan."
      },
      {
        "text": "Gunakan lebih banyak air agar campuran cukup encer.",
        "feedback": "Bahan tak dikenal tetap berisiko; dilution tidak menggantikan identifikasi."
      },
      {
        "text": "Pisahkan/hold dan laporkan sesuai SOP; jangan mencampur atau menggunakannya.",
        "feedback": "Kebijakan bahan kimia memerlukan identitas, label dan prosedur terverifikasi."
      },
      {
        "text": "Cium langsung untuk menebak nama bahan.",
        "feedback": "Menghirup bahan kimia tak diketahui adalah tindakan berbahaya."
      }
    ],
    "correct": 2,
    "objective": "Memahami stop-work pada chemical handling."
  },
  {
    "id": "m09-maintenance-limit",
    "module": "M09",
    "title": "Mesin berbau listrik",
    "scenario": "Mesin mengeluarkan bau listrik panas dan indikator kesalahan. Senior menawarkan membuka panel tanpa pelatihan teknis. Apa tindakan?",
    "options": [
      {
        "text": "Stop penggunaan alat terkait dan eskalasi ke petugas berwenang.",
        "feedback": "Gangguan listrik/tekanan bukan ruang eksperimen operator tanpa otorisasi."
      },
      {
        "text": "Tekan ulang pompa agar gejala bisa difilmkan.",
        "feedback": "Memicu fault ulang dapat meningkatkan risiko."
      },
      {
        "text": "Buka panel sebentar asal tak menyentuh kabel.",
        "feedback": "Batas wewenang tidak berubah karena niat hanya melihat."
      },
      {
        "text": "Tarik espresso sampai pelanggan terakhir selesai.",
        "feedback": "Layanan tidak mendahului bahaya kritis."
      }
    ],
    "correct": 0,
    "objective": "Mengetahui batas operator dan teknisi."
  },
  {
    "id": "m10-fefo-vs-unsafe",
    "module": "M10",
    "title": "FEFO tidak mengalahkan keamanan",
    "scenario": "Botol B punya tanggal kedaluwarsa paling dekat, tetapi label setelah dibuka hilang dan suhu simpan tidak tercatat. Pilihan?",
    "options": [
      {
        "text": "Gunakan B lebih dulu karena FEFO wajib.",
        "feedback": "Rotasi hanya berlaku pada bahan yang layak."
      },
      {
        "text": "Cicipi B dahulu lalu gunakan untuk semua pelanggan.",
        "feedback": "Tasting tidak membuktikan keamanan simpan."
      },
      {
        "text": "Campur A dan B agar tidak ada stok terbuang.",
        "feedback": "Mencampur batch tidak memulihkan kelayakan."
      },
      {
        "text": "Hold B dan verifikasi kelayakan sesuai SOP; rotasi hanya stok valid.",
        "feedback": "Kelayakan pangan mendahului urutan FEFO."
      }
    ],
    "correct": 3,
    "objective": "Memisahkan stok valid dari aturan rotasi."
  },
  {
    "id": "m10-margin-vs-profit",
    "module": "M10",
    "title": "Harga minus bahan",
    "scenario": "Biaya bahan+cup Rp10.620, harga jual Rp32.000. Kesimpulan paling akurat?",
    "options": [
      {
        "text": "Laba bersih pasti Rp21.380 per gelas.",
        "feedback": "Belum termasuk seluruh biaya operasional."
      },
      {
        "text": "Selisih Rp21.380 sebelum biaya lain, bukan laba bersih.",
        "feedback": "Biaya lain dan waste menentukan margin/hasil bersih sesuai definisi."
      },
      {
        "text": "Margin otomatis 100% karena bahan di bawah harga jual.",
        "feedback": "Rasio perlu perhitungan dan definisi jelas."
      },
      {
        "text": "Tidak boleh menghitung biaya karena harga bisa berubah.",
        "feedback": "Perhitungan berguna sebagai model dengan asumsi eksplisit."
      }
    ],
    "correct": 1,
    "objective": "Menghindari klaim laba tanpa biaya menyeluruh."
  },
  {
    "id": "m11-prototype-control",
    "module": "M11",
    "title": "V0 ke V1",
    "scenario": "V0: espresso 36 g, susu 140 g, sirup 18 g. V1: espresso 36 g, susu 140 g, sirup 12 g. Pernyataan terbaik?",
    "options": [
      {
        "text": "Versi V1 pasti lebih lezat karena lebih sedikit gula.",
        "feedback": "Preferensi belum diuji."
      },
      {
        "text": "V1 membuktikan semua pelanggan menyukai sweetness rendah.",
        "feedback": "Satu perubahan resep tak memberi data pelanggan."
      },
      {
        "text": "V0→V1 mengubah satu takaran utama; efeknya masih perlu diuji sensori.",
        "feedback": "Desain memudahkan interpretasi pengaruh sirup pada kondisi terkontrol."
      },
      {
        "text": "Perubahan sirup tidak dapat dicatat dalam gram.",
        "feedback": "Gram adalah satuan massa yang sah untuk sirup."
      }
    ],
    "correct": 2,
    "objective": "Merancang eksperimen iterasi signature yang dapat ditafsirkan."
  },
  {
    "id": "m11-launch-gate",
    "module": "M11",
    "title": "Tes delapan orang",
    "scenario": "Lima dari delapan peserta trial memilih A, tetapi shelf-life bahan aromatik belum divalidasi. Keputusan?",
    "options": [
      {
        "text": "Terbitkan menu karena mayoritas memilih A.",
        "feedback": "Preferensi kecil tidak menggantikan keamanan bahan."
      },
      {
        "text": "Ubah nama menu agar terlihat premium dan lanjut jual.",
        "feedback": "Perubahan copy tidak memvalidasi shelf-life."
      },
      {
        "text": "Tingkatkan gula agar bahan aman secara otomatis.",
        "feedback": "Gula bukan jaminan masa simpan tanpa proses tervalidasi."
      },
      {
        "text": "Hold penggunaan batch sampai keamanan dan SOP terverifikasi; lanjut uji terstruktur.",
        "feedback": "Keputusan launch membutuhkan keamanan, repeatability dan data komersial, bukan tasting saja."
      }
    ],
    "correct": 3,
    "objective": "Menempatkan pangan dan repeatability di atas antusiasme."
  },
  {
    "id": "m12-compound",
    "module": "M12",
    "title": "Tiga permintaan sekaligus",
    "scenario": "Shot berubah 29→20s, customer minta strong, dan ada permintaan oat karena alergi susu. Langkah paling defensibel?",
    "options": [
      {
        "text": "Tahan risiko alergen, klarifikasi arti strong, lalu diagnosis shot dengan data aman.",
        "feedback": "Risiko keselamatan lebih dulu, lalu tujuan pelanggan dan kalibrasi terukur."
      },
      {
        "text": "Atur grinder lebih halus, buat double shot, lanjut oat pada wand bersama.",
        "feedback": "Mengasumsikan sebab, maksud dan keamanan tanpa verifikasi."
      },
      {
        "text": "Layani tiket alergi dulu agar antrean cepat bergerak.",
        "feedback": "Prioritas tidak membenarkan penanganan yang belum aman."
      },
      {
        "text": "Gunakan hasil shot kemarin dan abaikan permintaan lain.",
        "feedback": "Kondisi baru dan kebutuhan pelanggan perlu ditangani."
      }
    ],
    "correct": 0,
    "objective": "Memprioritaskan konflik keselamatan, tujuan dan teknik."
  },
  {
    "id": "m12-new-evidence",
    "module": "M12",
    "title": "Hipotesis awal salah",
    "scenario": "Kamu menduga perubahan grind penyebab shot cepat. Informasi baru: basket diganti dan puck prep berubah. Apa sikap terbaik?",
    "options": [
      {
        "text": "Tetap pertahankan dugaan awal supaya terlihat konsisten.",
        "feedback": "Revisi hipotesis berdasar bukti adalah kompetensi, bukan kelemahan."
      },
      {
        "text": "Ubah semua variabel sekaligus agar cepat menemukan rasa.",
        "feedback": "Perubahan serentak mengaburkan sebab."
      },
      {
        "text": "Tambahkan hipotesis basket/puck dan rancang pembanding aman yang membedakan penyebab.",
        "feedback": "Data baru harus mengubah prioritas pengecekan serta desain tes."
      },
      {
        "text": "Anggap semua shot setelah penggantian basket otomatis tidak aman.",
        "feedback": "Periksa model/spec dan kondisi; tidak semua perubahan berarti bahaya."
      }
    ],
    "correct": 2,
    "objective": "Belajar dari bukti baru, bukan mempertahankan jawaban pertama."
  }
];
export function diagnosticQuestionsForModule(moduleCode:string){return BARISTA_V2_DIAGNOSTICS.filter(x=>x.module===moduleCode);}
