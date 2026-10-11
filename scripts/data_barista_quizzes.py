# -*- coding: utf-8 -*-
from curriculum_helpers import rotate_options

def get_barista_quizzes():
    return [
        {
            "id": "quiz-b1",
            "module_id": "mod-b1",
            "learning_path_id": "path-barista",
            "quiz_scope": "module",
            "title": "Kuis Evaluasi Modul B-1: Dial-In Espresso Komersial & Kalibrasi Resep Presisi",
            "passing_score": 80,
            "time_limit_minutes": 10,
            "max_attempts": 3,
            "created_at": "2026-08-01T00:00:00Z",
        },
        {
            "id": "quiz-b2",
            "module_id": "mod-b2",
            "learning_path_id": "path-barista",
            "quiz_scope": "module",
            "title": "Kuis Evaluasi Modul B-2: Sains Steaming Susu & Tekstur Microfoam Silky",
            "passing_score": 80,
            "time_limit_minutes": 10,
            "max_attempts": 3,
            "created_at": "2026-08-01T00:00:00Z",
        },
        {
            "id": "quiz-b3",
            "module_id": "mod-b3",
            "learning_path_id": "path-barista",
            "quiz_scope": "module",
            "title": "Kuis Evaluasi Modul B-3: Seni Latte Art Lanjutan & Ergonomi Tuangan",
            "passing_score": 80,
            "time_limit_minutes": 10,
            "max_attempts": 3,
            "created_at": "2026-08-01T00:00:00Z",
        },
        {
            "id": "quiz-b4",
            "module_id": "mod-b4",
            "learning_path_id": "path-barista",
            "quiz_scope": "module",
            "title": "Kuis Evaluasi Modul B-4: Manual Brewing di Bar Komersial & Speed-Service",
            "passing_score": 80,
            "time_limit_minutes": 10,
            "max_attempts": 3,
            "created_at": "2026-08-01T00:00:00Z",
        },
        {
            "id": "quiz-b5",
            "module_id": "mod-b5",
            "learning_path_id": "path-barista",
            "quiz_scope": "module",
            "title": "Kuis Evaluasi Modul B-5: Manajemen & Pemeliharaan Mesin Espresso Komersial",
            "passing_score": 80,
            "time_limit_minutes": 10,
            "max_attempts": 3,
            "created_at": "2026-08-01T00:00:00Z",
        },
        {
            "id": "quiz-b6",
            "module_id": "mod-b6",
            "learning_path_id": "path-barista",
            "quiz_scope": "module",
            "title": "Kuis Evaluasi Modul B-6: Signature Beverage & Pembuatan Sirup Craft Spesialti",
            "passing_score": 80,
            "time_limit_minutes": 10,
            "max_attempts": 3,
            "created_at": "2026-08-01T00:00:00Z",
        },
        {
            "id": "quiz-b7",
            "module_id": "mod-b7",
            "learning_path_id": "path-barista",
            "quiz_scope": "module",
            "title": "Kuis Evaluasi Modul B-7: Kalibrasi Sensorik Barista Harian & Dial-In Tasting",
            "passing_score": 80,
            "time_limit_minutes": 10,
            "max_attempts": 3,
            "created_at": "2026-08-01T00:00:00Z",
        },
        {
            "id": "quiz-b8",
            "module_id": "mod-b8",
            "learning_path_id": "path-barista",
            "quiz_scope": "module",
            "title": "Kuis Evaluasi Modul B-8: Hospitality, Pelayanan Konsumen & Komunikasi Rasa",
            "passing_score": 80,
            "time_limit_minutes": 10,
            "max_attempts": 3,
            "created_at": "2026-08-01T00:00:00Z",
        },
        {
            "id": "quiz-b9",
            "module_id": "mod-b9",
            "learning_path_id": "path-barista",
            "quiz_scope": "module",
            "title": "Kuis Evaluasi Modul B-9: Manajemen Inventaris Bar, FIFO & Pengendalian Waste",
            "passing_score": 80,
            "time_limit_minutes": 10,
            "max_attempts": 3,
            "created_at": "2026-08-01T00:00:00Z",
        },
        {
            "id": "quiz-b10",
            "module_id": "mod-b10",
            "learning_path_id": "path-barista",
            "quiz_scope": "module",
            "title": "Kuis Evaluasi Modul B-10: Ergonomi Kerja Barista, Keselamatan & Alur Kerja Bar",
            "passing_score": 80,
            "time_limit_minutes": 10,
            "max_attempts": 3,
            "created_at": "2026-08-01T00:00:00Z",
        },
        {
            "id": "quiz-final-barista",
            "module_id": None,
            "learning_path_id": "path-barista",
            "quiz_scope": "final_exam",
            "title": "Ujian Akhir Profesional Barista: Sertifikasi Kompetensi Bar",
            "description": "Evaluasi komprehensif 8 modul kompetensi standar industri kafe spesialti.",
            "passing_score": 80,
            "time_limit_minutes": 25,
            "max_attempts": 3,
            "created_at": "2026-08-05T00:00:00Z",
        },
    ]

def get_barista_questions():
    # Target rotation pattern for 30 questions:
    # 0=A, 1=B, 2=C, 3=D
    pattern = [1, 2, 0, 3, 2, 0, 1, 3, 0, 2, 1, 3, 2, 0, 3, 1, 0, 2, 3, 1, 2, 0, 3, 1, 2, 0, 1, 3, 2, 1]
    raw = [
        # quiz-b1
        {
            "id": "q-b1-1", "quiz_id": "quiz-b1", "order_index": 1,
            "text": "Jika espresso terasa asam tajam menyengat, bodi encer, dan waktu ekstraksi hanya 18 detik untuk rasio 1:2, penyesuaian utama apa yang wajib dilakukan?",
            "correct": "Memperhalus ukuran gilingan (grind size finer) guna memperlambat laju alir fluida dan menaikkan ekstraksi",
            "wrong": ["Memperpanjang pre-infusi tanpa mengubah setelan grinder", "Menurunkan dosis bubuk kopi di portafilter sebesar 2 gram", "Menaikkan suhu boiler mesin hingga 98°C"],
            "exp": "Waktu ekstraksi yang terlalu cepat (18 detik) dan rasa asam menusuk mengindikasikan under-extraction. Solusi utamanya adalah memperhalus gilingan agar tahanan puck meningkat dan waktu kontak bertambah."
        },
        {
            "id": "q-b1-2", "quiz_id": "quiz-b1", "order_index": 2,
            "text": "Apa fungsi utama teknik WDT (Weiss Distribution Technique) dengan jarum mikro saat puck preparation sebelum tamping?",
            "correct": "Memecah aglomerasi gumpalan bubuk mikro dan meratakan densitas partikel di seluruh basket untuk mencegah kanalisasi (channeling)",
            "wrong": ["Memadat bubuk kopi agar tidak tumpah keluar dari basket portafilter", "Mengeringkan kelembapan bubuk kopi segar setelah keluar dari grinder", "Menambahkan partikel fines ke bagian dasar basket portafilter"],
            "exp": "WDT menggunakan jarum berdiameter tipis (0.3-0.4mm) untuk mendistribusikan partikel kopi secara homogen, meniadakan rongga udara dan gumpalan yang menjadi pemicu channeling."
        },
        {
            "id": "q-b1-3", "quiz_id": "quiz-b1", "order_index": 3,
            "text": "Berapakah rentang persentase Extraction Yield (EY) standar emas espresso specialty menurut sains SCA?",
            "correct": "18.0% hingga 22.0%",
            "wrong": ["10.0% hingga 14.0%", "25.0% hingga 29.0%", "32.0% hingga 36.0%"],
            "exp": "Extraction Yield ideal berada di kisaran 18% - 22%. Di bawah 18% kopi cenderung under-extracted (sour/salty), sedangkan di atas 22% berisiko over-extracted (astringent/bitter)."
        },
        # quiz-b2
        {
            "id": "q-b2-1", "quiz_id": "quiz-b2", "order_index": 1,
            "text": "Pada rentang suhu berapakah proses peregangan (aerasi / stretching) susu harus dihentikan dan dialihkan sepenuhnya ke fase swirling/vortexing?",
            "correct": "Saat susu mencapai suhu tubuh sekitar 37°C hingga 40°C",
            "wrong": ["Segera setelah uap steam pertama kali keluar dari tip", "Saat susu mendidih mencapai suhu 75°C", "Tepat ketika gelembung besar muncul di permukaan"],
            "exp": "Pemasukan udara (stretching) harus diselesaikan sebelum 40°C karena di atas suhu tersebut lemak susu mulai mencair dan tidak dapat mengintegrasikan gelembung mikro baru dengan stabil."
        },
        {
            "id": "q-b2-2", "quiz_id": "quiz-b2", "order_index": 2,
            "text": "Apa dampak fisik dan kimiawi jika susu sapi di-steaming melampaui suhu 70°C di bar komersial?",
            "correct": "Protein whey terdenaturasi total, kemanisan alami laktosa rusak, dan busa menjadi kaku terpisah seperti spons",
            "wrong": ["Susu akan mengkristal dan menyumbat lubang nozzle steam wand", "Kandungan kalsium dalam susu lenyap menguap bersama uap air", "Warna susu berubah menjadi transparan bening"],
            "exp": "Di atas 70°C, protein susu rusak dan melepaskan aroma belerang (cooked/burnt flavor), rasa manis laktosa memudar, dan tekstur microfoam pecah."
        },
        {
            "id": "q-b2-3", "quiz_id": "quiz-b2", "order_index": 3,
            "text": "Di mana letak posisi steam wand tip yang tepat di dalam milk pitcher untuk menciptakan pusaran vortex yang memecah gelembung mikro?",
            "correct": "Sekitar 1 cm di bawah permukaan susu dan diposisikan sedikit di luar titik tengah (off-center) miring",
            "wrong": ["Menempel di dasar pitcher untuk mencegah timbulnya gelembung udara", "Mengapung di udara 2 cm di atas permukaan cairan susu", "Tepat di dinding luar pitcher menyentuh pegangan"],
            "exp": "Posisi off-center sekitar 1 cm di bawah permukaan menghasilkan gaya sentrifugal vortex yang menarik gelembung permukaan ke dasar dan memecahnya menjadi busa mikro sutra."
        },
        # quiz-b3
        {
            "id": "q-b3-1", "quiz_id": "quiz-b3", "order_index": 1,
            "text": "Faktor hidrodinamika apa yang paling menentukan terciptanya kontras visual tajam antara crema cokelat dan pola putih latte art?",
            "correct": "Pencampuran kanvas awal (incorporation) yang tenang tanpa turbulensi kasar, diikuti penuangan dekat permukaan dengan laju alir stabil",
            "wrong": ["Menaburkan bubuk kakao pekat di atas espresso sebelum menuangkan susu", "Menuangkan seluruh susu dari ketinggian 25 cm secepat mungkin", "Mengocok cangkir secara agresif bolak-balik selama penuangan"],
            "exp": "Pencampuran kanvas awal menjaga integritas crema, kemudian menurunkan spout sangat dekat ke permukaan memungkinkan busa putih mengapung di atas densitas cairan kopi."
        },
        {
            "id": "q-b3-2", "quiz_id": "quiz-b3", "order_index": 2,
            "text": "Saat membentuk layer daun pada pola Rosetta atau kelopak Tulip, bagaimana posisi spout pitcher terhadap permukaan cangkir?",
            "correct": "Sangat dekat (hampir menyentuh permukaan crema) dengan sudut penuangan rendah",
            "wrong": ["Berjarak minimal 15 cm di atas cangkir agar susu menembus ke dasar", "Berada di luar bibir cangkir", "Tegak lurus 90 derajat dari ketinggian"],
            "exp": "Spout harus berada sedekat mungkin dengan cairan agar gaya apung microfoam bekerja dan busa putih mengembang di atas kanvas crema."
        },
        {
            "id": "q-b3-3", "quiz_id": "quiz-b3", "order_index": 3,
            "text": "Mengapa gerakan memotong pola (cut-through) di akhir latte art harus dilakukan dengan mengangkat pitcher tinggi dan mengecilkan aliran susu?",
            "correct": "Agar aliran tipis membelah simetri tanpa menyeret pola putih dan tidak menenggelamkan bentuk motif",
            "wrong": ["Agar suhu susu yang panas tidak memercik ke meja bar", "Untuk mendinginkan cangkir kopi sebelum disajikan ke meja tamu", "Agar sisa susu di dalam pitcher tidak tumpah ke lantai"],
            "exp": "Menaikkan pitcher menciptakan aliran tipis bertekanan gravitasi yang membelah hati/daun menjadi simetris sempurna tanpa menyeret gumpalan putih di permukaan."
        },
        # quiz-b4
        {
            "id": "q-b4-1", "quiz_id": "quiz-b4", "order_index": 1,
            "text": "Berapakah batas waktu simpan maksimal (holding time) kopi batch brew di dalam thermal dispenser komersial sebelum rasa mengalami degradasi oksidatif?",
            "correct": "60 hingga 90 menit pada suhu termal 80°C - 85°C",
            "wrong": ["8 hingga 12 jam sejak penyeduhan selesai", "10 hingga 15 menit saja", "24 jam asalkan tutup dispenser tidak dibuka"],
            "exp": "Setelah 60-90 menit, asam klorogenat dalam kopi seduh terdegradasi menjadi asam kuinat yang pahit dan senyawa aromatik volatil menguap habis."
        },
        {
            "id": "q-b4-2", "quiz_id": "quiz-b4", "order_index": 2,
            "text": "Apa keunggulan geometri keranjang datar (flat bottom basket) pada batch brewer komersial dibanding keranjang kerucut saat rush hour?",
            "correct": "Menghasilkan kedalaman bed ampas yang seragam sehingga meminimalkan bypass air dan ekstraksi lebih konsisten pada volume besar",
            "wrong": ["Mencegah air panas mendidih di dalam tabung boiler", "Memungkinkan penyeduhan tanpa membutuhkan kertas saring", "Mempercepat waktu ekstraksi menjadi di bawah 30 detik"],
            "exp": "Flat bottom mendistribusikan air secara merata ke seluruh penampang ampas kopi tanpa titik konsentrasi di ujung kerucut, ideal untuk ekstraksi skala 2-4 liter."
        },
        {
            "id": "q-b4-3", "quiz_id": "quiz-b4", "order_index": 3,
            "text": "Jika air meluap dari keranjang filter (basket overflow) pada mesin batch brewer komersial, akar penyebab teknis yang paling sering adalah?",
            "correct": "Ukuran gilingan terlalu halus atau persentase partikel fines menyumbat pori-pori kertas saring",
            "wrong": ["Tekanan listrik PLN mengalami penurunan voltase", "Suhu air seduh di boiler terlalu rendah di bawah 70°C", "Dispenser penampung di bawah keranjang sudah penuh"],
            "exp": "Fines yang berlebih atau grind size yang terlalu halus menciptakan hambatan hidrolik tinggi di pori kertas saring sehingga air masuk lebih cepat daripada air keluar."
        },
        # quiz-b5
        {
            "id": "q-b5-1", "quiz_id": "quiz-b5", "order_index": 1,
            "text": "Mengapa prosedur backflush menggunakan chemical pembersih khusus (seperti Cafiza) dan blind filter wajib dilakukan setiap penutupan bar?",
            "correct": "Melarutkan tumpukan minyak kopi teroksidasi dan kerak karbon pada saluran solenoid valve 3-way dan shower screen",
            "wrong": ["Menurunkan tekanan pompa rotary boiler mesin menjadi 0 bar", "Mencegah pertumbuhan kerak kapur di dalam tangki air boiler uap", "Menjaga agar pegangan portafilter tetap harum"],
            "exp": "Katup solenoid 3-arah mengalirkan sisa tekanan setelah ekstraksi, membawa serta minyak kopi yang akan menjadi tengik dan menyumbat saluran jika tidak dibersihkan dengan deterjen pelarut lemak."
        },
        {
            "id": "q-b5-2", "quiz_id": "quiz-b5", "order_index": 2,
            "text": "Berapakah tekanan statis standar yang dialirkan oleh rotary vane pump komersial saat mengekstraksi espresso di group head?",
            "correct": "9 bar (rentang toleransi standar 8.5 hingga 9.5 bar)",
            "wrong": ["3 hingga 5 bar", "15 hingga 18 bar", "22 hingga 25 bar"],
            "exp": "Standar industri komersial adalah 9 bar tekanan hidrolik konstan yang dihasilkan oleh rotary vane pump bermotor induksi."
        },
        {
            "id": "q-b5-3", "quiz_id": "quiz-b5", "order_index": 3,
            "text": "Ion mineral apakah dalam air suplai yang bereaksi saat dipanaskan membentuk kerak kapur (limescale CaCO3) di dalam boiler tembaga mesin espresso?",
            "correct": "Kalsium (Ca2+) dan anion Bikarbonat (HCO3-)",
            "wrong": ["Natrium (Na+) dan Klorida (Cl-)", "Besi (Fe2+) dan Mangan (Mn2+)", "Kalium (K+) dan Sulfat (SO4 2-)"],
            "exp": "Reaksi termal memecah kalsium bikarbonat terlarut menjadi kalsium karbonat padat (kerak kapur), air, dan gas CO2: Ca(HCO3)2 -> CaCO3 + H2O + CO2."
        },
        # quiz-b6
        {
            "id": "q-b6-1", "quiz_id": "quiz-b6", "order_index": 1,
            "text": "Berapakah kadar gula terlarut (°Brix) untuk Simple Syrup (rasio 1:1) dan Rich Syrup (rasio 2:1) yang digunakan dalam resep signature drink kopi?",
            "correct": "Simple Syrup ~50° Brix dan Rich Syrup ~65° hingga 66° Brix",
            "wrong": ["Simple Syrup ~20° Brix dan Rich Syrup ~35° Brix", "Simple Syrup ~75° Brix dan Rich Syrup ~90° Brix", "Keduanya selalu memiliki nilai mutlak 100° Brix"],
            "exp": "Gula 1:1 memiliki konsentrasi 50% b/b (~50° Brix), sedangkan 2:1 memiliki konsentrasi 66.7% b/b (~66° Brix) yang memberikan mouthfeel lebih kental dan masa simpan stabil tanpa fermentasi."
        },
        {
            "id": "q-b6-2", "quiz_id": "quiz-b6", "order_index": 2,
            "text": "Dalam teknik Clarified Coffee Milk Punch, apa mekanisme sains yang membuat minuman menjadi bening transparan?",
            "correct": "Asam mengentalkan protein kasein susu membentuk gumpalan dadih yang menyaring partikel keruh, polifenol, dan tanin",
            "wrong": ["Gula laktosa mengendap ke dasar botol mengikat warna hitam espresso", "Kandungan lemak susu menguap habis saat terkena suhu ruangan", "Asam sitrat menghancurkan seluruh molekul kafein dalam kopi"],
            "exp": "Koagulasi kasein oleh asam membentuk anyaman filter alami yang menjebak partikel mikroskopis penyebab kekeruhan dan astringency, meninggalkan cairan jernih bertekstur beludru."
        },
        {
            "id": "q-b6-3", "quiz_id": "quiz-b6", "order_index": 3,
            "text": "Mengapa penambahan 2-3 tetes larutan saline (garam dapur konsentrasi 10-20%) efektif meningkatkan profil rasa mocktail kopi dingin?",
            "correct": "Ion natrium menekan persepsi rasa pahit di papila lidah dan secara simultan mengangkat persepsi rasa manis buah alami",
            "wrong": ["Membuat minuman kopi memiliki rasa gurih asin seperti kuah sup", "Mencegah es batu mencair selama 2 jam penyajian", "Membunuh bakteri patogen di dalam sirup craft buah"],
            "exp": "Secara fisiologi neurosensorik, ion Na+ memblokir sebagian reseptor pahit (TAS2R) di lidah, yang secara persepsi langsung meningkatkan kontras kemanisan dan keasaman buah."
        },
        # quiz-b7
        {
            "id": "q-b7-1", "quiz_id": "quiz-b7", "order_index": 1,
            "text": "Kapan waktu paling krusial bagi tim barista untuk melakukan kalibrasi sensorik dial-in espresso harian?",
            "correct": "Sebelum bar dibuka pagi hari, serta dicek ulang saat pergantian shift atau pembukaan kemasan bag kopi baru",
            "wrong": ["Hanya di akhir shift malam sebelum mesin dimatikan", "Cukup satu kali seminggu saat audit stok manajer", "Hanya jika ada komplain langsung dari pelanggan di bar"],
            "exp": "Suhu ruangan, kelembapan udara (RH), dan keausan hopper berubah setiap hari. Kalibrasi pagi dan pergantian shift menjamin setiap cangkir yang disajikan sesuai standar SOP."
        },
        {
            "id": "q-b7-2", "quiz_id": "quiz-b7", "order_index": 2,
            "text": "Jika espresso menghasilkan sensasi kering, berdebu, dan kesat menempel di lidah (astringent), fenomena ekstraksi apakah yang sedang terjadi?",
            "correct": "Kanalisasi (channeling) lokal yang memicu over-extraction parah pada jalur air tertentu di dalam puck",
            "wrong": ["Under-extraction akibat ukuran gilingan terlalu kasar", "Biji kopi belum resting selama 30 menit", "Suhu cangkir keramik yang digunakan terlalu dingin"],
            "exp": "Astringency adalah indikator klasik ekstraksi senyawa polifenol berbobot molekul tinggi yang larut saat jalur aliran air terfokus di satu retakan (channeling) sempit."
        },
        {
            "id": "q-b7-3", "quiz_id": "quiz-b7", "order_index": 3,
            "text": "Bagaimana protokol terbaik barista untuk mengatasi kelelahan sensorik (palate fatigue) saat sesi kalibrasi mencicipi puluhan shot espresso?",
            "correct": "Berkumur dengan air bersuhu ruang, meminum air netral, dan mengistirahatkan lidah dengan biskuit tawar netral",
            "wrong": ["Menghisap rokok atau mengunyah permen mentol pedas", "Meminum susu kental manis kental untuk melapisi lidah", "Menghirup bubuk kopi kering langsung dari hopper"],
            "exp": "Air putih bersuhu ruang dan biskuit netral (unsalted crackers) membersihkan sisa lipid dan asam dari papila lidah tanpa memicu stimulasi aroma baru."
        },
        # quiz-b8
        {
            "id": "q-b8-1", "quiz_id": "quiz-b8", "order_index": 1,
            "text": "Jika pelanggan mengeluh bahwa pour over kopi specialty yang dipesannya terasa 'terlalu masam', respons hospitality barista yang paling profesional adalah?",
            "correct": "Mendengarkan dengan empati, menjelaskan profil fruity alami origin tersebut dengan analogi ramah, dan menawarkan opsi cangkir penyesuaian",
            "wrong": ["Membantah pelanggan dan menyatakan bahwa lidah tamu belum terbiasa dengan specialty coffee", "Menambahkan gula cair diam-diam ke dalam cangkir tamu", "Menjelaskan rumus kimia asam malat secara arogan tanpa memberikan solusi"],
            "exp": "Hospitality berfokus pada pengalaman tamu. Barista profesional memvalidasi persepsi tamu, mengedukasi dengan bahasa membumi, dan memastikan tamu pulang dengan kepuasan."
        },
        {
            "id": "q-b8-2", "quiz_id": "quiz-b8", "order_index": 2,
            "text": "Dalam komunikasi rasa ke pelanggan awam, mengapa analogi sensorik pengalaman lebih efektif dibanding deskriptor formal kaku?",
            "correct": "Analogi pengalaman (seperti 'segar jeruk manis madu') menghubungkan memori rasa familiar yang mudah dipahami tanpa intimidasi",
            "wrong": ["Karena deskriptor resmi SCA dilarang secara hukum digunakan di luar ruangan kompetisi", "Pelanggan tidak memiliki kemampuan membedakan rasa buah sama sekali", "Agar barista tidak perlu mempelajari aroma wheel resmi"],
            "exp": "Bahasa sensorik yang ramah menjembatani kesenjangan pengetahuan antara industri kopi spesialti dan konsumen umum, menumbuhkan apresiasi tanpa membuat tamu merasa dihakimi."
        },
        {
            "id": "q-b8-3", "quiz_id": "quiz-b8", "order_index": 3,
            "text": "Mengapa pelayanan (hospitality) di bar specialty dianggap memiliki bobot yang sama tingginya dengan presisi teknis penyeduhan?",
            "correct": "Kenyamanan dan interaksi personal yang hangat menentukan retensi pelanggan, persepsi nilai produk, dan loyalitas kedai",
            "wrong": ["Semata-mata agar barista mendapatkan uang tip tunai lebih banyak", "Hanya untuk menutupi kesalahan jika rasa kopi yang diseduh gagal", "Agar pelanggan tidak memperhatikan waktu penyajian yang terlambat"],
            "exp": "Kopi terbaik di dunia akan terasa hambar jika disajikan dengan arogansi. Hospitality mengubah transaksi pembelian kopi menjadi pengalaman hubungan manusia yang berkesan."
        },
        # quiz-b9
        {
            "id": "q-b9-1", "quiz_id": "quiz-b9", "order_index": 1,
            "text": "Berapakah masa resting (degassing CO2) ideal untuk biji kopi espresso sangrai medium sebelum dibuka segelnya untuk operasional komersial?",
            "correct": "7 hingga 21 hari sejak tanggal sangrai (roast date)",
            "wrong": ["0 hingga 2 hari setelah keluar dari mesin sangrai", "60 hingga 90 hari setelah sangrai", "Tepat 6 bulan di dalam gudang"],
            "exp": "Biji kopi yang terlalu segar (< 7 hari) mengandung gas CO2 tinggi yang menyebabkan crema berbuih kasar dan turbulensi gas menghambat ekstraksi. Rentang 7-21 hari adalah puncak keseimbangan rasa espresso."
        },
        {
            "id": "q-b9-2", "quiz_id": "quiz-b9", "order_index": 2,
            "text": "Penerapan prinsip FIFO (First-In, First-Out) dalam pengelolaan persediaan susu segar di chiller bar bertujuan untuk?",
            "correct": "Memastikan stok susu dengan tanggal kedaluwarsa terdekat atau tiba lebih awal digunakan terlebih dahulu",
            "wrong": ["Mencegah susu di kulkas membeku menjadi es batu", "Mengocok emulsi lemak susu secara otomatis di rak", "Memisahkan susu oat dengan susu almond di chiller"],
            "exp": "FIFO memastikan rotasi stok bahan baku segar berjalan tertib, mencegah susu basi terbuang, dan melindungi margin profitabilitas kedai dari waste."
        },
        {
            "id": "q-b9-3", "quiz_id": "quiz-b9", "order_index": 3,
            "text": "Langkah operasional barista manakah yang paling efektif menekan pemborosan susu (milk waste) di bar dengan volume penjualan tinggi?",
            "correct": "Menggunakan pitcher dengan ukuran tepat porsi menu dan menakar volume susu dingin menggunakan skala mililiter sebelum di-steam",
            "wrong": ["Mengumpulkan sisa susu bekas steam dari pitcher ke pitcher sepanjang hari", "Mengganti seluruh susu segar dengan krimer bubuk instan", "Mematikan chiller kulkas saat jam sepi untuk menghemat listrik"],
            "exp": "Menakar susu sesuai porsi pesanan mencegah kelebihan susu sisa di pitcher yang tidak boleh di-steam ulang demi standar kebersihan dan kualitas microfoam."
        },
        # quiz-b10
        {
            "id": "q-b10-1", "quiz_id": "quiz-b10", "order_index": 1,
            "text": "Posisi tubuh barista yang benar saat melakukan tamping guna mencegah cedera muskuloskeletal (RSI dan Carpal Tunnel Syndrome) adalah?",
            "correct": "Lengan membentuk sudut siku vertikal 90° lurus dengan pergelangan tangan netral, memanfaatkan beban tubuh bagian atas",
            "wrong": ["Membengkokkan pergelangan tangan ke samping dengan tekanan penuh sendi jemari", "Menekan portafilter sambil melompat bertumpu pada pinggul", "Menggunakan telapak tangan kiri dan kanan secara bergantian"],
            "exp": "Menjaga pergelangan tangan tetap netral lurus dengan lengan bawah 90 derajat mendistribusikan beban ke otot bahu dan punggung, mencegah tekanan kompresi pada saraf medianus pergelangan."
        },
        {
            "id": "q-b10-2", "quiz_id": "quiz-b10", "order_index": 2,
            "text": "Dalam prinsip tata letak 'Cockpit Bar Design', bagaimana posisi grinder espresso, knock box, dan mesin espresso disusun?",
            "correct": "Disusun dalam segitiga kerja ergonomis atau garis linear terpadu sehingga barista dapat berpindah hanya dalam 1-2 langkah kaki",
            "wrong": ["Ditempatkan di ujung ruangan terpisah agar meja bar depan terlihat luas", "Ditaruh di bawah kolong meja kasir", "Diletakkan menghadap pintu keluar kafe"],
            "exp": "Desain kokpit meminimalkan pergerakan langkah yang tidak perlu (footsteps waste), mempercepat speed-of-service, dan mengurangi kelelahan fisik barista selama shift sibuk."
        },
        {
            "id": "q-b10-3", "quiz_id": "quiz-b10", "order_index": 3,
            "text": "Tindakan mitigasi bahaya kerja yang wajib segera dilakukan saat terjadi tumpahan air panas boiler atau susu mendidih di lantai bar adalah?",
            "correct": "Memberi peringatan verbal ke rekan tim di stasiun, memasang tanda lantai basah, dan segera membersihkan area dengan mop kering",
            "wrong": ["Menunggu hingga lantai kering sendiri karena suhu ruangan bar hangat", "Menaburkan ampas kopi basah di atas genangan air mendidih", "Mematikan sekring listrik utama seluruh kafe"],
            "exp": "Lantai basah di bar komersial adalah penyebab utama kecelakaan kerja tergelincir (slip and fall). Respons cepat melindungi seluruh staf dari bahaya luka bakar dan cedera fisik."
        },
    ]

    questions = []
    for idx, item in enumerate(raw):
        target_idx = pattern[idx % len(pattern)]
        ans = rotate_options(item["correct"], item["wrong"][0], item["wrong"][1], item["wrong"][2], target_idx, item["id"])
        questions.append({
            "id": item["id"],
            "quiz_id": item["quiz_id"],
            "question_text": item["text"],
            "order_index": item["order_index"],
            "explanation": item["exp"],
            "answers": ans
        })
    return questions

print("Barista data provider ready.")
