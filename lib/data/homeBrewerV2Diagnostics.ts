/** Formative two-per-module diagnostics; no graded credential. */
export type HomeBrewerDiagnostic={id:string;module:string;title:string;scenario:string;options:{text:string;feedback:string}[];correct:number};
export const HOME_BREWER_V2_DIAGNOSTICS:HomeBrewerDiagnostic[]=[
  {
    "id": "hb01-label",
    "module": "HB01",
    "title": "Label dan rasa",
    "scenario": "Label kopi menyebut citrus, kamu tidak merasakannya. Mana kesimpulan terbaik?",
    "options": [
      {
        "text": "Label pasti salah, karena setiap orang yang menyeduh kopi dari lot sama semestinya merasakan aroma citrus yang tepat sesuai kemasan.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. Deskriptor tidak menjamin pengalaman setiap pencicip; variabel seduh dan kondisi sensori memengaruhi persepsi."
      },
      {
        "text": "Kopi otomatis under-extracted dan wajib di-grind lebih halus.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. Deskriptor tidak menjamin pengalaman setiap pencicip; variabel seduh dan kondisi sensori memengaruhi persepsi."
      },
      {
        "text": "Deskriptor adalah petunjuk; cek kopi, proses seduh dan persepsi aktual.",
        "feedback": "Deskriptor tidak menjamin pengalaman setiap pencicip; variabel seduh dan kondisi sensori memengaruhi persepsi."
      },
      {
        "text": "Species kopi pasti berbeda dari yang tercetak.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. Deskriptor tidak menjamin pengalaman setiap pencicip; variabel seduh dan kondisi sensori memengaruhi persepsi."
      }
    ],
    "correct": 2
  },
  {
    "id": "hb01-species",
    "module": "HB01",
    "title": "Natural vs washed",
    "scenario": "Kopi natural dan washed berbeda rasa. Apa yang paling defensibel?",
    "options": [
      {
        "text": "Proses dapat berkontribusi; varietas, roast dan brewing juga relevan.",
        "feedback": "Perbedaan rasa tidak boleh diturunkan menjadi satu label proses atau species."
      },
      {
        "text": "Proses natural pasti selalu lebih manis daripada washed karena fermentasi buah membuat kadar gula seduhan lebih tinggi pada semua roasting.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. Perbedaan rasa tidak boleh diturunkan menjadi satu label proses atau species."
      },
      {
        "text": "Washed selalu lebih rendah acidity-nya.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. Perbedaan rasa tidak boleh diturunkan menjadi satu label proses atau species."
      },
      {
        "text": "Rasa kopi bisa menentukan species tanpa melihat label.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. Perbedaan rasa tidak boleh diturunkan menjadi satu label proses atau species."
      }
    ],
    "correct": 0
  },
  {
    "id": "hb02-ratio",
    "module": "HB02",
    "title": "Mengukur rasio",
    "scenario": "15 g kopi dan 225 g air seduh menghasilkan 184 g minuman. Rasio 1:15 berarti ...",
    "options": [
      {
        "text": "Minuman keluar pasti harus 225 g sebab air yang diserap bubuk dan filter tetap dihitung sebagai bagian dari minuman di cangkir.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. Rasio 1:15 mendeskripsikan air seduh masuk; output lebih kecil karena retensi dan proses."
      },
      {
        "text": "Perbandingan dose terhadap air masuk.",
        "feedback": "Rasio 1:15 mendeskripsikan air seduh masuk; output lebih kecil karena retensi dan proses."
      },
      {
        "text": "Perbandingan TDS terhadap air awal.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. Rasio 1:15 mendeskripsikan air seduh masuk; output lebih kecil karena retensi dan proses."
      },
      {
        "text": "Extraction yield pasti 15 persen.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. Rasio 1:15 mendeskripsikan air seduh masuk; output lebih kecil karena retensi dan proses."
      }
    ],
    "correct": 1
  },
  {
    "id": "hb02-ey",
    "module": "HB02",
    "title": "Data EY",
    "scenario": "20 g kopi menghasilkan 40 g beverage dengan TDS 10%. Estimasi EY sederhana adalah ...",
    "options": [
      {
        "text": "10% karena extraction yield seharusnya identik dengan angka konsentrasi minuman yang dibaca langsung oleh refraktometer.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. Massa zat terlarut diperkirakan 4 g, dibagi dose 20 g menghasilkan EY 20%."
      },
      {
        "text": "40% karena dua kali dose.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. Massa zat terlarut diperkirakan 4 g, dibagi dose 20 g menghasilkan EY 20%."
      },
      {
        "text": "4% karena output 40 g.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. Massa zat terlarut diperkirakan 4 g, dibagi dose 20 g menghasilkan EY 20%."
      },
      {
        "text": "20% karena 40×0,10÷20=0,20.",
        "feedback": "Massa zat terlarut diperkirakan 4 g, dibagi dose 20 g menghasilkan EY 20%."
      }
    ],
    "correct": 3
  },
  {
    "id": "hb03-grind",
    "module": "HB03",
    "title": "Click grinder",
    "scenario": "Dua grinder berbeda model sama-sama memakai click 20. Apa benar?",
    "options": [
      {
        "text": "Ukuran partikel pasti sama.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. Skala angka spesifik mesin/grinder dan tidak menjamin distribusi partikel serupa."
      },
      {
        "text": "TDS minuman pasti sama.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. Skala angka spesifik mesin/grinder dan tidak menjamin distribusi partikel serupa."
      },
      {
        "text": "Click bukan satuan global; ukur hasil pada masing-masing grinder.",
        "feedback": "Skala angka spesifik mesin/grinder dan tidak menjamin distribusi partikel serupa."
      },
      {
        "text": "Nomor klik grinder cukup dipindahkan tanpa perlu kalibrasi karena produsen umumnya memakai skala internasional yang sama pada semua tipe burr.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. Skala angka spesifik mesin/grinder dan tidak menjamin distribusi partikel serupa."
      }
    ],
    "correct": 2
  },
  {
    "id": "hb03-temperature",
    "module": "HB03",
    "title": "Suhu seduh",
    "scenario": "Kettle menunjukkan 93°C. Apakah kopi selalu terkena 93°C sepanjang seduhan?",
    "options": [
      {
        "text": "Tidak; suhu berubah saat dituang, terkena brewer dan lingkungan.",
        "feedback": "Setpoint kettle tidak menggambarkan seluruh perjalanan termal air dalam bed."
      },
      {
        "text": "Ya, karena angka sensor pada kettle mewakili suhu aktual setiap bagian coffee bed dari awal hingga akhir selama total brewing.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. Setpoint kettle tidak menggambarkan seluruh perjalanan termal air dalam bed."
      },
      {
        "text": "Hanya jika ratio 1:15.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. Setpoint kettle tidak menggambarkan seluruh perjalanan termal air dalam bed."
      },
      {
        "text": "Jika gelas berbahan kaca maka suhu selalu naik.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. Setpoint kettle tidak menggambarkan seluruh perjalanan termal air dalam bed."
      }
    ],
    "correct": 0
  },
  {
    "id": "hb04-bloom",
    "module": "HB04",
    "title": "Bubbles bloom",
    "scenario": "Bloom terlihat kecil pada kopi yang lebih lama sejak sangrai. Apa boleh disimpulkan?",
    "options": [
      {
        "text": "Sedikit gelembung berarti kopi pasti kehilangan seluruh kualitas aromatik dan tidak akan mampu diseduh dengan baik meskipun rasanya disukai.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. Aktivitas bubbles dipengaruhi pelepasan gas dan kondisi seduh, bukan penilai kualitas universal."
      },
      {
        "text": "Belum pasti mutu cangkir; gas juga terkait roast/umur/proses.",
        "feedback": "Aktivitas bubbles dipengaruhi pelepasan gas dan kondisi seduh, bukan penilai kualitas universal."
      },
      {
        "text": "Aroma kopi pasti hilang semua.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. Aktivitas bubbles dipengaruhi pelepasan gas dan kondisi seduh, bukan penilai kualitas universal."
      },
      {
        "text": "Rasio seduh otomatis harus 1:12.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. Aktivitas bubbles dipengaruhi pelepasan gas dan kondisi seduh, bukan penilai kualitas universal."
      }
    ],
    "correct": 1
  },
  {
    "id": "hb04-flow",
    "module": "HB04",
    "title": "Laju tuang",
    "scenario": "Dua V60 berbeda waktu karena filter dan pola tuang berubah bersama. Apa klaim yang sah?",
    "options": [
      {
        "text": "B pasti lebih pahit jika lebih lama.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. Pola, filter, grind dan bed resistance memengaruhi hasil; perlu mempersempit confounder."
      },
      {
        "text": "Perbedaan waktu seduh pasti berasal dari pour pattern sebab bentuk filter hanya memengaruhi kebersihan cangkir, bukan resistansi aliran air.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. Pola, filter, grind dan bed resistance memengaruhi hasil; perlu mempersempit confounder."
      },
      {
        "text": "Semua V60 harus 4 g/detik.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. Pola, filter, grind dan bed resistance memengaruhi hasil; perlu mempersempit confounder."
      },
      {
        "text": "Waktu beda teramati, tetapi sebab tak bisa dipisah tanpa uji terkendali.",
        "feedback": "Pola, filter, grind dan bed resistance memengaruhi hasil; perlu mempersempit confounder."
      }
    ],
    "correct": 3
  },
  {
    "id": "hb05-immersion",
    "module": "HB05",
    "title": "Mekanisme brewer",
    "scenario": "V60 dan French Press memakai ratio input sama. Apakah output dan mouthfeel otomatis sama?",
    "options": [
      {
        "text": "Ya, karena angka perbandingan kopi-air yang sama memastikan hasil volume, komposisi zat terlarut dan mouthfeel akan sama pada kedua metode.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. Metode percolation dan immersion mempunyai jalur kontak/filtrasi berbeda walau angka input sama."
      },
      {
        "text": "Ya jika keduanya kopi arabika.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. Metode percolation dan immersion mempunyai jalur kontak/filtrasi berbeda walau angka input sama."
      },
      {
        "text": "Tidak; metode kontak/filtrasi dan retensi berbeda.",
        "feedback": "Metode percolation dan immersion mempunyai jalur kontak/filtrasi berbeda walau angka input sama."
      },
      {
        "text": "French Press selalu dua kali caffeine.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. Metode percolation dan immersion mempunyai jalur kontak/filtrasi berbeda walau angka input sama."
      }
    ],
    "correct": 2
  },
  {
    "id": "hb05-aeropress",
    "module": "HB05",
    "title": "Keamanan AeroPress",
    "scenario": "Video menampilkan inverted AeroPress berisi air panas. Untuk pemula, tindakan terbaik?",
    "options": [
      {
        "text": "Gunakan upright sesuai manual; produsen memperingatkan inverted berisiko.",
        "feedback": "Produsen memperingatkan peningkatan risiko tumpahan dan luka bakar pada inverted; pilih metode kompatibel yang aman."
      },
      {
        "text": "Balik alat saat terisi air panas dan gunakan posisi inverted sesuai tutorial kompetisi karena metode juara dianggap telah memastikan keamanan seluruh model AeroPress.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. Produsen memperingatkan peningkatan risiko tumpahan dan luka bakar pada inverted; pilih metode kompatibel yang aman."
      },
      {
        "text": "Gunakan wadah goyah agar tekanan lebih tinggi.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. Produsen memperingatkan peningkatan risiko tumpahan dan luka bakar pada inverted; pilih metode kompatibel yang aman."
      },
      {
        "text": "Tekan dengan tenaga maksimum saat seal terganggu.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. Produsen memperingatkan peningkatan risiko tumpahan dan luka bakar pada inverted; pilih metode kompatibel yang aman."
      }
    ],
    "correct": 0
  },
  {
    "id": "hb06-sour",
    "module": "HB06",
    "title": "Diagnosis asam",
    "scenario": "Kopi terasa sour. Apa langkah awal yang kuat?",
    "options": [
      {
        "text": "Grind pasti terlalu kasar karena semua sensasi sour merupakan bukti under-extraction yang selalu dapat diselesaikan dengan setelan giling lebih halus.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. Acidity dapat karakter kopi; sensorik, suhu, strength dan brewing perlu dibedakan."
      },
      {
        "text": "Pahami descriptor, target dan faktor lain sebelum uji grind terkendali.",
        "feedback": "Acidity dapat karakter kopi; sensorik, suhu, strength dan brewing perlu dibedakan."
      },
      {
        "text": "Kopi pasti rusak.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. Acidity dapat karakter kopi; sensorik, suhu, strength dan brewing perlu dibedakan."
      },
      {
        "text": "Tambah mineral sembarang hingga rasa hilang.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. Acidity dapat karakter kopi; sensorik, suhu, strength dan brewing perlu dibedakan."
      }
    ],
    "correct": 1
  },
  {
    "id": "hb06-confound",
    "module": "HB06",
    "title": "Perubahan simultan",
    "scenario": "Kamu mengganti grinder, kopi dan suhu sekaligus; versi baru disukai. Kesimpulan?",
    "options": [
      {
        "text": "Grinder baru pasti penyebab hasil terbaik karena perubahan alat lebih besar dampaknya daripada identitas kopi atau penyesuaian suhu air.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. Variabel serentak tidak memungkinkan atribusi sebab individual."
      },
      {
        "text": "Kopi baru pasti penyebab tunggal.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. Variabel serentak tidak memungkinkan atribusi sebab individual."
      },
      {
        "text": "Temperatur tidak pernah berpengaruh.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. Variabel serentak tidak memungkinkan atribusi sebab individual."
      },
      {
        "text": "Paket versi baru disukai dalam sesi itu; sebab individual belum jelas.",
        "feedback": "Variabel serentak tidak memungkinkan atribusi sebab individual."
      }
    ],
    "correct": 3
  },
  {
    "id": "hb07-sensory",
    "module": "HB07",
    "title": "Tasting note",
    "scenario": "Roaster menulis aroma stroberi tetapi kamu merasakan nutty. Catatan apa paling jujur?",
    "options": [
      {
        "text": "Catat aroma stroberi sebagai hasil nyata karena descriptor roaster wajib dijadikan acuan meskipun penguji sendiri mencium aroma yang berbeda.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. Observasi diri yang jujur lebih informatif daripada menyalin descriptor yang tidak kamu alami."
      },
      {
        "text": "Klaim komposisi kimia berbeda tanpa pengukuran.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. Observasi diri yang jujur lebih informatif daripada menyalin descriptor yang tidak kamu alami."
      },
      {
        "text": "Catat kesan nutty dan kondisi tasting; label hanya referensi.",
        "feedback": "Observasi diri yang jujur lebih informatif daripada menyalin descriptor yang tidak kamu alami."
      },
      {
        "text": "Buang kopi karena label pasti menipu.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. Observasi diri yang jujur lebih informatif daripada menyalin descriptor yang tidak kamu alami."
      }
    ],
    "correct": 2
  },
  {
    "id": "hb07-triangle",
    "module": "HB07",
    "title": "Triangulation",
    "scenario": "Sekali benar menentukan cangkir berbeda dari tiga. Apa makna terbaik?",
    "options": [
      {
        "text": "Berhasil pada sesi itu, tetapi belum bukti kemampuan tetap/sertifikasi.",
        "feedback": "Tebakan acak dapat benar; latihan perlu pengulangan dan tidak memberi kredensial profesional."
      },
      {
        "text": "Pasti sudah setara Q Grader, sebab berhasil menemukan satu cup berbeda tanpa melihat label merupakan bukti kemampuan sensory profesional yang tervalidasi.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. Tebakan acak dapat benar; latihan perlu pengulangan dan tidak memberi kredensial profesional."
      },
      {
        "text": "Lidah menjadi dua kali lebih peka.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. Tebakan acak dapat benar; latihan perlu pengulangan dan tidak memberi kredensial profesional."
      },
      {
        "text": "Kopi otomatis memenuhi standar SCA.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. Tebakan acak dapat benar; latihan perlu pengulangan dan tidak memberi kredensial profesional."
      }
    ],
    "correct": 0
  },
  {
    "id": "hb08-water",
    "module": "HB08",
    "title": "Water meter",
    "scenario": "Dua air sama-sama menunjukkan 120 ppm pada TDS meter konduktivitas. Apakah alkalinity keduanya pasti sama?",
    "options": [
      {
        "text": "Ya, karena meter TDS konduktivitas sebenarnya sudah membaca kadar alkalinity serta seluruh ion mineral secara terpisah dan presisi.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. TDS berbasis konduktivitas tidak mengungkap profil mineral lengkap."
      },
      {
        "text": "Tidak; komposisi ion, hardness dan alkalinity berbeda dari proxy TDS.",
        "feedback": "TDS berbasis konduktivitas tidak mengungkap profil mineral lengkap."
      },
      {
        "text": "Ya jika mereknya sama.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. TDS berbasis konduktivitas tidak mengungkap profil mineral lengkap."
      },
      {
        "text": "Rasa hasil brew pasti sama.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. TDS berbasis konduktivitas tidak mengungkap profil mineral lengkap."
      }
    ],
    "correct": 1
  },
  {
    "id": "hb08-budget",
    "module": "HB08",
    "title": "Biaya stok",
    "scenario": "Kopi 1 kg dan konsumsi 30g/minggu memberi durasi kira-kira ...",
    "options": [
      {
        "text": "3,3 minggu.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. 1000/30≈33,3 minggu, tetapi pengadaan perlu mempertimbangkan penyimpanan dan mutu."
      },
      {
        "text": "10 minggu.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. 1000/30≈33,3 minggu, tetapi pengadaan perlu mempertimbangkan penyimpanan dan mutu."
      },
      {
        "text": "20 minggu.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. 1000/30≈33,3 minggu, tetapi pengadaan perlu mempertimbangkan penyimpanan dan mutu."
      },
      {
        "text": "33,3 minggu, tetapi itu tidak membuktikan kesegaran bertahan selama itu.",
        "feedback": "1000/30≈33,3 minggu, tetapi pengadaan perlu mempertimbangkan penyimpanan dan mutu."
      }
    ],
    "correct": 3
  },
  {
    "id": "hb09-ice",
    "module": "HB09",
    "title": "Japanese iced",
    "scenario": "15 g kopi, 150 g air panas melalui bed dan 75 g es. Apa yang benar?",
    "options": [
      {
        "text": "Brew-through ratio adalah 1:15.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. 150/15=10 untuk air melewati bed; total es berbeda dari brew water dan final liquid output."
      },
      {
        "text": "Minuman final pasti 225 g.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. 150/15=10 untuk air melewati bed; total es berbeda dari brew water dan final liquid output."
      },
      {
        "text": "Air melalui bed 1:10, sementara es dan retensi perlu dicatat terpisah.",
        "feedback": "150/15=10 untuk air melewati bed; total es berbeda dari brew water dan final liquid output."
      },
      {
        "text": "Extraction yield pasti 10%.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. 150/15=10 untuk air melewati bed; total es berbeda dari brew water dan final liquid output."
      }
    ],
    "correct": 2
  },
  {
    "id": "hb09-allergen",
    "module": "HB09",
    "title": "Susu alternatif",
    "scenario": "Tamu alergi protein susu sapi, tetapi blender digunakan untuk dairy. Tindakan?",
    "options": [
      {
        "text": "Verifikasi alat, label, SOP cross-contact; jangan janjikan aman tanpa bukti.",
        "feedback": "Penggantian bahan tidak otomatis menuntaskan kontaminasi silang alat."
      },
      {
        "text": "Oat drink otomatis menetralkan jejak protein susu sapi pada blender bersama, sehingga pembersihan dan verifikasi cross-contact tidak diperlukan.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. Penggantian bahan tidak otomatis menuntaskan kontaminasi silang alat."
      },
      {
        "text": "Pindahkan minuman ke gelas lain agar aman.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. Penggantian bahan tidak otomatis menuntaskan kontaminasi silang alat."
      },
      {
        "text": "Tambahkan es sehingga alergennya hilang.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. Penggantian bahan tidak otomatis menuntaskan kontaminasi silang alat."
      }
    ],
    "correct": 0
  },
  {
    "id": "hb10-experiment",
    "module": "HB10",
    "title": "Iterasi resep",
    "scenario": "V0→V1 mengganti grind, suhu dan kopi. V1 lebih disukai. Apa hasil yang boleh dilaporkan?",
    "options": [
      {
        "text": "Grind baru terbukti paling baik.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. Hasil paket tidak menjelaskan efek tiap variabel; rancang uji yang lebih terkontrol."
      },
      {
        "text": "Paket V1 lebih disukai pada sesi itu, sebab setiap perubahan belum dipisah.",
        "feedback": "Hasil paket tidak menjelaskan efek tiap variabel; rancang uji yang lebih terkontrol."
      },
      {
        "text": "Suhu pasti tidak memengaruhi kopi.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. Hasil paket tidak menjelaskan efek tiap variabel; rancang uji yang lebih terkontrol."
      },
      {
        "text": "Resep V1 harus digunakan semua orang.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. Hasil paket tidak menjelaskan efek tiap variabel; rancang uji yang lebih terkontrol."
      }
    ],
    "correct": 1
  },
  {
    "id": "hb10-handoff",
    "module": "HB10",
    "title": "Recipe card",
    "scenario": "Catatan 'grind sedang, tuang sampai pas' kurang membantu orang lain karena ...",
    "options": [
      {
        "text": "Semua kopi harus memakai grinder sama.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. Recipe card perlu parameter terukur dan konteks, bukan petunjuk ambigu."
      },
      {
        "text": "Tidak ada cukup adjective rasa.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. Recipe card perlu parameter terukur dan konteks, bukan petunjuk ambigu."
      },
      {
        "text": "Video wajib untuk semua resep.",
        "feedback": "Pilihan ini terlalu pasti atau mengabaikan informasi penting. Recipe card perlu parameter terukur dan konteks, bukan petunjuk ambigu."
      },
      {
        "text": "Satuan, alat, timing dan titik ukur tidak didefinisikan untuk reproduksi.",
        "feedback": "Recipe card perlu parameter terukur dan konteks, bukan petunjuk ambigu."
      }
    ],
    "correct": 3
  }
];
export const diagnosticsForHomeBrewer=(m:string)=>HOME_BREWER_V2_DIAGNOSTICS.filter(x=>x.module===m);