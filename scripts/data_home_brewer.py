# -*- coding: utf-8 -*-
from curriculum_helpers import rotate_options

def get_home_brewer_quizzes():
    return [
        {
            "id": "quiz-h1",
            "module_id": "mod-h1",
            "learning_path_id": "path-home-brewer",
            "quiz_scope": "module",
            "title": "Kuis Evaluasi Modul H-1: Dekonstruksi Informasi Label & Profil Biji Kopi",
            "passing_score": 80,
            "time_limit_minutes": 10,
            "max_attempts": 3,
            "created_at": "2026-08-01T00:00:00Z",
        },
        {
            "id": "quiz-h2",
            "module_id": "mod-h2",
            "learning_path_id": "path-home-brewer",
            "quiz_scope": "module",
            "title": "Kuis Evaluasi Modul H-2: Setup Alat & Distribusi Partikel Grinder",
            "passing_score": 80,
            "time_limit_minutes": 10,
            "max_attempts": 3,
            "created_at": "2026-08-01T00:00:00Z",
        },
        {
            "id": "quiz-h3",
            "module_id": "mod-h3",
            "learning_path_id": "path-home-brewer",
            "quiz_scope": "module",
            "title": "Kuis Evaluasi Modul H-3: Seduhan Emas V60 & Ekstraksi Seimbang",
            "passing_score": 80,
            "time_limit_minutes": 10,
            "max_attempts": 3,
            "created_at": "2026-08-01T00:00:00Z",
        },
        {
            "id": "quiz-h4",
            "module_id": "mod-h4",
            "learning_path_id": "path-home-brewer",
            "quiz_scope": "module",
            "title": "Kuis Evaluasi Modul H-4: Kontrol Rasa & Variasi Metode Tuang",
            "passing_score": 80,
            "time_limit_minutes": 10,
            "max_attempts": 3,
            "created_at": "2026-08-01T00:00:00Z",
        },
        {
            "id": "quiz-h5",
            "module_id": "mod-h5",
            "learning_path_id": "path-home-brewer",
            "quiz_scope": "module",
            "title": "Kuis Evaluasi Modul H-5: Eksplorasi Flat Bottom, Aeropress & French Press",
            "passing_score": 80,
            "time_limit_minutes": 10,
            "max_attempts": 3,
            "created_at": "2026-08-01T00:00:00Z",
        },
        {
            "id": "quiz-h6",
            "module_id": "mod-h6",
            "learning_path_id": "path-home-brewer",
            "quiz_scope": "module",
            "title": "Kuis Evaluasi Modul H-6: Kualitas Air Seduh Rumahan & DIY Water",
            "passing_score": 80,
            "time_limit_minutes": 10,
            "max_attempts": 3,
            "created_at": "2026-08-01T00:00:00Z",
        },
        {
            "id": "quiz-h7",
            "module_id": "mod-h7",
            "learning_path_id": "path-home-brewer",
            "quiz_scope": "module",
            "title": "Kuis Evaluasi Modul H-7: Cupping Mandiri di Rumah & Kalibrasi Rasa",
            "passing_score": 80,
            "time_limit_minutes": 10,
            "max_attempts": 3,
            "created_at": "2026-08-01T00:00:00Z",
        },
        {
            "id": "quiz-h8",
            "module_id": "mod-h8",
            "learning_path_id": "path-home-brewer",
            "quiz_scope": "module",
            "title": "Kuis Evaluasi Modul H-8: Eksperimen Variabel Seduh & Manual Espresso",
            "passing_score": 80,
            "time_limit_minutes": 10,
            "max_attempts": 3,
            "created_at": "2026-08-01T00:00:00Z",
        },
        {
            "id": "quiz-h9",
            "module_id": "mod-h9",
            "learning_path_id": "path-home-brewer",
            "quiz_scope": "module",
            "title": "Kuis Evaluasi Modul H-9: Kreasi Es Kopi Susu, Cold Brew & Sirup",
            "passing_score": 80,
            "time_limit_minutes": 10,
            "max_attempts": 3,
            "created_at": "2026-08-01T00:00:00Z",
        },
        {
            "id": "quiz-h10",
            "module_id": "mod-h10",
            "learning_path_id": "path-home-brewer",
            "quiz_scope": "module",
            "title": "Kuis Evaluasi Modul H-10: Coffee Corner, Perawatan Alat & Komunitas",
            "passing_score": 80,
            "time_limit_minutes": 10,
            "max_attempts": 3,
            "created_at": "2026-08-01T00:00:00Z",
        },
        {
            "id": "quiz-h-final",
            "module_id": "mod-h10",
            "learning_path_id": "path-home-brewer",
            "quiz_scope": "final_exam",
            "title": "Ujian Akhir Sertifikasi Home Brewer Specialist",
            "description": "Ujian komprehensif mencakup sains gilingan, rekayasa air mineral, V60, Aeropress, French press, dan manual espresso.",
            "passing_score": 80,
            "time_limit_minutes": 25,
            "max_attempts": 3,
            "created_at": "2026-08-10T00:00:00Z",
        },
    ]

def get_home_brewer_questions():
    pattern = [2, 0, 3, 1, 0, 2, 1, 3, 2, 0, 1, 3, 0, 2, 3, 1, 2, 0, 3, 1, 2, 0, 1, 3, 2, 0, 3, 1, 2, 1]
    raw = [
        # quiz-h1
        {
            "id": "q-h1-1", "quiz_id": "quiz-h1", "order_index": 1,
            "text": "Informasi ketinggian kebun '1.800 mdpl' pada kemasan kopi specialty Arabika mengindikasikan karakteristik fisik biji seperti apa?",
            "correct": "Biji memiliki densitas selulosa tinggi (SHB), pematangan buah lambat, dan keasaman organik yang cerah kompleks",
            "wrong": ["Biji sangat rapuh dan berpori longgar sehingga harus digiling paling kasar", "Biji memiliki kandungan kafein dua kali lipat lebih tinggi dari Robusta", "Biji kopi dapat langsung diseduh tanpa proses sangrai"],
            "exp": "Elevasi tinggi dengan suhu malam dingin memperlambat metabolisme pohon kopi, menghasilkan buah padat kaya gula dan asam organik kompleks."
        },
        {
            "id": "q-h1-2", "quiz_id": "quiz-h1", "order_index": 2,
            "text": "Mengapa pencantuman 'Roast Date' (tanggal sangrai) jauh lebih penting bagi home brewer dibanding tanggal kedaluwarsa umum?",
            "correct": "Menjadi acuan masa resting optimal (pelepasan CO2) agar seduhan tidak berbusa liar dan ekstraksi rasa seimbang",
            "wrong": ["Untuk mengetahui tanggal biji kopi tersebut dipanen dari pohon", "Karena kopi specialty akan basi membusuk tepat setelah 7 hari", "Agar biji kopi dapat disimpan di dalam freezer tanpa kemasan"],
            "exp": "Biji kopi melepaskan gas CO2 secara intensif dalam 3-7 hari pertama pasca sangrai. Menyeduh di rentang waktu optimal menjamin rasa manis dan aroma terekstraksi maksimal."
        },
        {
            "id": "q-h1-3", "quiz_id": "quiz-h1", "order_index": 3,
            "text": "Apa perbedaan esensial antara kopi berlabel 'Single Origin' dan 'House Blend' bagi penyeduh rumahan?",
            "correct": "Single Origin menonjolkan keunikan terroir dan varietas spesifik satu daerah, sedangkan Blend diracik untuk keseimbangan rasa yang konsisten",
            "wrong": ["Single Origin hanya bisa diseduh dingin, sedangkan Blend khusus kopi panas", "Single Origin selalu memiliki grade komersial rendah", "Blend tidak menggunakan biji kopi Arabika"],
            "exp": "Single Origin mengekspos profil rasa autentik mikro-iklim kebun asalnya, sementara Blend mencampurkan beberapa origin untuk menghasilkan harmoni rasa stabil sepanjang tahun."
        },
        # quiz-h2
        {
            "id": "q-h2-1", "quiz_id": "quiz-h2", "order_index": 1,
            "text": "Mengapa grinder burr baja konikal/flat menghasilkan seduhan pour over yang jauh lebih bersih dibanding chopper pisau putar (blade grinder)?",
            "correct": "Burr memotong dan meremukkan biji menjadi partikel berukuran seragam dengan proporsi fines dan boulder minimal",
            "wrong": ["Blade grinder menggunakan suhu tinggi yang membakar bubuk kopi", "Burr grinder menambahkan mineral mikro ke dalam bubuk kopi", "Blade grinder hanya cocok digunakan untuk menyeduh teh"],
            "exp": "Blade grinder menghantam biji secara acak menghasilkan debu (fines) berlebih dan pecahan bongkahan (boulders), yang memicu over-extraction dan under-extraction sekaligus."
        },
        {
            "id": "q-h2-2", "quiz_id": "quiz-h2", "order_index": 2,
            "text": "Apa fenomena yang terjadi pada seduhan V60 jika bubuk kopi mengandung terlalu banyak partikel mikro 'fines'?",
            "correct": "Fines menyumbat pori kertas saring (clogging), memperlambat laju alir, dan memicu rasa pahit kelat kering (astringency)",
            "wrong": ["Air seduh mengalir terlalu cepat tanpa terjadi kontak ekstraksi", "Rasa seduhan menjadi hambar seperti air putih", "Warna air kopi berubah menjadi kuning pucat"],
            "exp": "Partikel debu mikro (fines) bermigrasi ke dasar keranjang kertas, menyumbat aliran air, dan mengekstraksi senyawa fenolik pahit secara berlebih."
        },
        {
            "id": "q-h2-3", "quiz_id": "quiz-h2", "order_index": 3,
            "text": "Teknik RDT (Ross Droplet Technique) — membasahi biji kopi dengan 1 tetes air mikro sebelum digiling — bertujuan untuk?",
            "correct": "Meniadakan listrik statis sehingga bubuk kopi tidak menempel berhamburan di dinding dan wadah grinder",
            "wrong": ["Memulai proses ekstraksi kopi sebelum terkena air panas", "Mendinginkan suhu mata pisau burr saat berputar", "Menghilangkan kadar kafein dari biji kopi"],
            "exp": "Tetesan air mikro meningkatkan konduktivitas permukaan biji, menetralkan muatan listrik statis triboelektrik selama proses penggilingan."
        },
        # quiz-h3
        {
            "id": "q-h3-1", "quiz_id": "quiz-h3", "order_index": 1,
            "text": "Berapa rasio seduh (brew ratio) dasar yang paling disarankan untuk memulai kalibrasi V60 rumahan dengan ekstraksi seimbang?",
            "correct": "Rasio 1:15 hingga 1:16 (misalnya 15 gram kopi untuk 225-240 gram air)",
            "wrong": ["Rasio 1:5 (15 gram kopi untuk 75 gram air)", "Rasio 1:30 (15 gram kopi untuk 450 gram air)", "Rasio 1:50 (15 gram kopi untuk 750 gram air)"],
            "exp": "Rasio 1:15 hingga 1:16 adalah rasio standar emas yang memberikan konsentrasi TDS 1.2% - 1.4% dan Extraction Yield ideal 18% - 20% pada filter specialty."
        },
        {
            "id": "q-h3-2", "quiz_id": "quiz-h3", "order_index": 2,
            "text": "Apa yang dimaksud dengan kanalisasi (channeling) pada seduhan manual pour over?",
            "correct": "Air menembus jalur celah longgar dengan resistensi terendah pada bed kopi sehingga mengekstrak area tersebut secara berlebih sementara area lain tertinggal",
            "wrong": ["Air mengalir keluar dari cerat kettle terlalu lambat", "Kertas filter robek di bagian sambungan bawah", "Ampas kopi mengapung keluar dari bibir dripper"],
            "exp": "Channeling menyebabkan ekstraksi tidak merata: area yang dilewati jalur air terekstrak berlebih (bitter/dry), sedangkan bubuk kopi di sekitarnya kurang terekstrak (sour)."
        },
        {
            "id": "q-h3-3", "quiz_id": "quiz-h3", "order_index": 3,
            "text": "Jika cangkir kopi V60 terasa sangat asin, asam tajam menusuk, dan cepat hilang di mulut (short finish), diagnosis ekstraksi apa yang tepat?",
            "correct": "Under-extraction (senyawa gula dan asam manis kompleks belum sempat terlarut optimal)",
            "wrong": ["Over-extraction parah akibat gilingan terlalu halus", "Kopi terkontaminasi oleh sabun pembersih cangkir", "Suhu air seduh melebihi titik didih 100°C"],
            "exp": "Asam organik dan garam mineral adalah senyawa pertama yang larut saat penyeduhan. Jika ekstraksi terhenti terlalu dini, cangkir terasa sour dan salty tanpa kemanisan penyeimbang."
        },
        # quiz-h4
        {
            "id": "q-h4-1", "quiz_id": "quiz-h4", "order_index": 1,
            "text": "Dalam metode V60 4:6 karya Tetsu Kasuya, bagaimana cara mengatur agar seduhan menonjolkan rasa kemanisan (sweetness) yang lebih tinggi?",
            "correct": "Membagi 40% air pertama menjadi tuangan pertama lebih kecil dan tuangan kedua lebih besar",
            "wrong": ["Mencampurkan 20 gram gula pasir ke dalam bubuk kopi", "Menuangkan seluruh 40% air dalam 1 detik dengan agitasi keras", "Mengabaikan 60% air sisanya dan menghentikan seduhan"],
            "exp": "Pada metode 4:6, tuangan pertama yang lebih kecil menghasilkan blooming terkonsentrasi yang saat disusul tuangan kedua lebih besar mengekstrak kemanisan lebih dominan."
        },
        {
            "id": "q-h4-2", "quiz_id": "quiz-h4", "order_index": 2,
            "text": "Apa manfaat melakukan swirling (memutar lembut dripper) sesaat setelah tuangan blooming selesai?",
            "correct": "Memastikan seluruh partikel bubuk kopi terbasahi merata tanpa meninggalkan kantong kering (dry pockets) di dasar",
            "wrong": ["Mendinginkan suhu air seduh agar turun menjadi 60°C", "Memaksa seluruh ampas kopi menempel permanen di dinding atas kertas", "Mempercepat waktu seduh menjadi kurang dari 1 menit"],
            "exp": "Swirling lembut pada fase blooming meratakan saturasi air ke seluruh partikel bubuk kopi, mencegah terbentuknya dry pockets yang memicu channeling."
        },
        {
            "id": "q-h4-3", "quiz_id": "quiz-h4", "order_index": 3,
            "text": "Bagaimana pengaruh ketinggian cerat kettle leher angsa terhadap dinamika ekstraksi bubuk kopi di dripper?",
            "correct": "Semakin tinggi cerat penuangan, energi kinetik air semakin besar yang memicu agitasi mekanis kuat dan menaikkan laju ekstraksi",
            "wrong": ["Ketinggian tuangan sama sekali tidak mempengaruhi laju ekstraksi", "Menuang dari tinggi membuat suhu air meningkat tajam", "Menuang dari tinggi selalu menyebabkan air tidak menyentuh kopi"],
            "exp": "Energi kinetik jatuhnya air mengaduk partikel kopi secara fisik (agitasi), meningkatkan percampuran molekuler namun berisiko memicu migrasi fines berlebih jika terlalu agresif."
        },
        # quiz-h5
        {
            "id": "q-h5-1", "quiz_id": "quiz-h5", "order_index": 1,
            "text": "Mengapa dripper berdasar datar (flat bottom seperti Kalita Wave) cenderung menghasilkan profil rasa dengan bodi lebih tebal dan manis dibanding conical V60?",
            "correct": "Geometri dasar datar menjaga kedalaman bed kopi lebih seragam dan membatasi bypass air di tepi dinding",
            "wrong": ["Karena flat bottom dripper tidak membutuhkan air panas untuk menyeduh", "Karena kertas Kalita menyerap 90% asam kopi", "Karena ampas kopi mengendap di luar cangkir"],
            "exp": "Bed ampas kopi pada flat bottom memiliki ketebalan yang merata dari tengah ke tepi, meminimalkan aliran air yang lolos tanpa menyentuh ampas (bypass)."
        },
        {
            "id": "q-h5-2", "quiz_id": "quiz-h5", "order_index": 2,
            "text": "Dalam teknik French Press metode James Hoffmann, mengapa kopi didiamkan selama 5-8 menit setelah diaduk tanpa langsung ditekan plungernya?",
            "correct": "Memberi waktu gravitasi mengendapkan ampas mikro dan fines ke dasar bejana sehingga seduhan menjadi sangat jernih",
            "wrong": ["Agar suhu kopi turun hingga mencapai suhu es kulkas", "Untuk membiarkan air menguap separuhnya agar kopi mengental", "Agar plunger logam tidak mengalami karat"],
            "exp": "Metode Hoffmann memanfaatkan waktu perendaman panjang dan pembongkaran kerak ampas agar partikel kopi tenggelam alami, menghasilkan cangkir bersih tanpa ampas lumpur."
        },
        {
            "id": "q-h5-3", "quiz_id": "quiz-h5", "order_index": 3,
            "text": "Apa keunggulan posisi terbalik (Inverted Method) pada Aeropress untuk eksperimen seduh rumahan?",
            "correct": "Mencegah cairan menetes bocor prematur sebelum waktu perendaman (steep time) yang direncanakan tercapai",
            "wrong": ["Membuat tekanan pompa Aeropress naik otomatis menjadi 15 bar", "Menghilangkan kebutuhan mencuci tabung Aeropress setelah pakai", "Mendinginkan air secara instan"],
            "exp": "Metode inverted memungkinkan kontrol total atas waktu kontak perendaman air dan kopi sebelum penyaringan dilakukan melalui dorongan plunger."
        },
        # quiz-h6
        {
            "id": "q-h6-1", "quiz_id": "quiz-h6", "order_index": 1,
            "text": "Dua ion kation divalen utama manakah dalam air seduh yang bertindak aktif mengikat dan mengekstraksi senyawa aromatik kopi?",
            "correct": "Magnesium (Mg2+) dan Kalsium (Ca2+)",
            "wrong": ["Natrium (Na+) dan Kalium (K+)", "Besi (Fe2+) dan Timbal (Pb2+)", "Klorida (Cl-) dan Fluorida (F-)"],
            "exp": "Ion Mg2+ dan Ca2+ memiliki densitas muatan tinggi yang mengikat senyawa polar rasa kopi (seperti asam klorogenat dan eugenol) dan menariknya ke dalam seduhan."
        },
        {
            "id": "q-h6-2", "quiz_id": "quiz-h6", "order_index": 2,
            "text": "Berapakah target alkalinitas (kemampuan buffer bikarbonat CaCO3) ideal menurut SCA agar keasaman kopi seimbang dan tidak hambar?",
            "correct": "Sekitar 40 mg/L CaCO3 (rentang aman toleransi 30 - 50 mg/L)",
            "wrong": ["0 mg/L CaCO3 murni tanpa buffer", "150 hingga 200 mg/L CaCO3", "300 hingga 500 mg/L CaCO3"],
            "exp": "Jika alkalinitas terlalu tinggi (>80 mg/L), asam buah kopi ternetralkan menjadi flat/hambar. Jika terlalu rendah (<20 mg/L), kopi terasa asam tajam menusuk (sour)."
        },
        {
            "id": "q-h6-3", "quiz_id": "quiz-h6", "order_index": 3,
            "text": "Jika home brewer menyeduh kopi specialty menggunakan air demineralisasi murni (0 ppm TDS / RO murni), apa hasil rasa cangkirnya?",
            "correct": "Rasa kopi menjadi sangat asam tajam menusuk, hampa rasa manis, dan bodi seduhan terasa kosong/kering",
            "wrong": ["Kopi terasa sangat manis seperti sirup karamel", "Seduhan kopi berubah menjadi sangat pahit pekat seperti arang", "Rasa kopi persis sama dengan standar juara dunia WBC"],
            "exp": "Tanpa ion mineral kalsium dan magnesium, ekstraksi senyawa rasa berbobot molekul menengah dan tinggi terhambat, sementara ion H+ mendominasi memicu keasaman mentah menusuk."
        },
        # quiz-h7
        {
            "id": "q-h7-1", "quiz_id": "quiz-h7", "order_index": 1,
            "text": "Berapakah suhu air seduh yang tepat saat dituangkan ke dalam mangkuk cupping menurut standar resmi SCA?",
            "correct": "93°C ± 1°C (tepat setelah air mendidih diturunkan suhunya sejenak)",
            "wrong": ["70°C hingga 75°C", "100°C mendidih bergolak di atas kompor", "50°C hangat kuku"],
            "exp": "Suhu 93°C memberikan energi termal ideal untuk mengekstrak seluruh prekursor aroma kopi di mangkuk cupping tanpa membakar senyawa volatil."
        },
        {
            "id": "q-h7-2", "quiz_id": "quiz-h7", "order_index": 2,
            "text": "Dalam protokol cupping resmi, pada menit ke berapa tindakan memecah kerak ampas (breaking the crust) wajib dilakukan?",
            "correct": "Tepat pada menit ke-4 setelah air pertama kali dituangkan ke mangkuk",
            "wrong": ["Segera pada detik ke-10 setelah penuangan", "Pada menit ke-15 saat kopi sudah dingin", "Pada menit ke-30"],
            "exp": "Pada menit ke-4, kerak ampas kopi telah menjebak gas aroma volatil secara maksimal; memecahnya dengan 3 dorongan sendok melepaskan aroma puncak (crust aroma)."
        },
        {
            "id": "q-h7-3", "quiz_id": "quiz-h7", "order_index": 3,
            "text": "Apa tujuan utama latihan Triangulasi Rasa (Triangulation Tasting) bagi penyeduh rumahan?",
            "correct": "Mengasah ketajaman indra membedakan satu cangkir unik dari tiga cangkir yang disajikan secara blind (buta)",
            "wrong": ["Menghitung kadar kafein kopi di dalam darah secara visual", "Menebak harga jual biji kopi di pasar komersial", "Menghafal nama petani kopi di kebun"],
            "exp": "Triangulasi melatih daya diskriminasi sensorik murni tanpa bias informasi label, memaksa otak fokus pada perbedaan subtle bodi, asam, dan aroma."
        },
        # quiz-h8
        {
            "id": "q-h8-1", "quiz_id": "quiz-h8", "order_index": 1,
            "text": "Ketika menyeduh kopi berprofil sangrai gelap (dark roast), penyesuaian suhu air seduh apa yang tepat agar rasa tidak gosong pahit kelat?",
            "correct": "Menurunkan suhu air ke kisaran 85°C hingga 88°C",
            "wrong": ["Menaikkan suhu air hingga 98°C mendidih agresif", "Menggunakan air es bersuhu 0°C untuk seduhan manual pour over", "Menyeduh dengan air mendidih dua kali lipat"],
            "exp": "Dark roast memiliki struktur selulosa yang sangat rapuh dan senyawa terkaramelisasi tinggi. Suhu air lebih rendah mencegah ekstraksi senyawa pahit berlebih."
        },
        {
            "id": "q-h8-2", "quiz_id": "quiz-h8", "order_index": 2,
            "text": "Pada alat manual lever espresso (seperti Flair Espresso), apa fungsi krusial fase pre-infusion pada tekanan 1-2 bar selama 5-10 detik?",
            "correct": "Membasahi seluruh puck kopi secara merata agar mengembang padat sebelum tekanan penuh 9 bar diaplikasikan",
            "wrong": ["Mendinginkan chamber seduh agar tidak terlalu panas", "Mengeluarkan seluruh ampas kopi dari portafilter", "Menciptakan crema tebal tanpa kopi"],
            "exp": "Pre-infusi tekanan rendah menjenuhkan bubuk kopi secara homogen, meniadakan celah mikro sehingga saat tuas ditekan 9 bar air tidak memicu kanalisasi."
        },
        {
            "id": "q-h8-3", "quiz_id": "quiz-h8", "order_index": 3,
            "text": "Bagaimana teknik menghasilkan microfoam susu silky di rumah menggunakan French Press secara optimal?",
            "correct": "Memanaskan susu ke 60°C, memompa plunger cepat di bawah permukaan lalu mengocok mikro di dasar untuk memecah gelembung",
            "wrong": ["Memasukkan susu dingin langsung dari kulkas lalu memompa 100 kali", "Memanaskan susu hingga mendidih 100°C di dalam French Press", "Mencampurkan es batu ke dalam susu hangat"],
            "exp": "Susu hangat bersuhu 60°C memiliki protein elastis. Pompa cepat di awal memasukkan udara, diikuti pompa pendek di dasar yang memecah gelembung menjadi microfoam sutra."
        },
        # quiz-h9
        {
            "id": "q-h9-1", "quiz_id": "quiz-h9", "order_index": 1,
            "text": "Berapakah rentang waktu perendaman dingin (cold brew immersion) yang ideal di dalam lemari pendingin (suhu 4°C) untuk konsentrat siap minum?",
            "correct": "16 hingga 20 jam perendaman tertutup rapat",
            "wrong": ["1 hingga 2 jam saja", "5 hingga 7 hari di dalam kulkas", "30 menit di atas meja dapur"],
            "exp": "Karena energi termal rendah, laju difusi dingin membutuhkan waktu 16-20 jam untuk melarutkan senyawa rasa manis tanpa menarik senyawa tanin pahit."
        },
        {
            "id": "q-h9-2", "quiz_id": "quiz-h9", "order_index": 2,
            "text": "Pada metode Japanese Iced Pour Over, berapa proporsi air seduh yang digantikan oleh es batu di server penampung?",
            "correct": "Sekitar 35% hingga 40% dari total berat air seduh digantikan oleh es batu",
            "wrong": ["5% saja dari total berat air", "80% hingga 90% air digantikan es batu", "100% tanpa menggunakan air panas sama sekali"],
            "exp": "Mengganti ~40% air dengan es batu mengunci aroma volatil seketika (flash cooling) sambil mempertahankan konsentrasi ekstraksi normal saat es mencair sempurna."
        },
        {
            "id": "q-h9-3", "quiz_id": "quiz-h9", "order_index": 3,
            "text": "Mengapa pembuatan sirup gula aren kental rumahan disarankan ditambahkan sedikit garam laut murni?",
            "correct": "Ion natrium mengikat rasa manis dan menguatkan aroma karamel alami agar menyatu harmonis dengan gurihnya susu",
            "wrong": ["Agar sirup gula aren berubah warna menjadi putih transparan", "Untuk membekukan sirup gula aren menjadi batu", "Agar sirup terasa sangat asin seperti kecap asin"],
            "exp": "Sejumput garam laut memberikan kontras mineral gurih yang menonjolkan aroma karamel gula nira aren dan menyatu padu dengan emulsi lemak susu segar."
        },
        # quiz-h10
        {
            "id": "q-h10-1", "quiz_id": "quiz-h10", "order_index": 1,
            "text": "Mengapa mata pisau burr baja grinder manual dilarang keras dicuci dengan air mengalir atau sabun cuci piring?",
            "correct": "Air memicu oksidasi mikro dan karat pada presisi mata pisau baja yang merusak ketajaman gilingan secara permanen",
            "wrong": ["Mata pisau grinder akan membesar ukurannya sehingga macet", "Sabun akan membuat biji kopi menjadi tidak berkafein", "Warna bodi grinder akan luntur ke ampas kopi"],
            "exp": "Baja karbon tinggi pada burr sangat rentan terhadap korosi air. Pembersihan burr yang benar hanya menggunakan kuas kaku, blower udara, atau pembersih berbasis butiran gandum."
        },
        {
            "id": "q-h10-2", "quiz_id": "quiz-h10", "order_index": 2,
            "text": "Wadah penyimpanan biji kopi rumahan manakah yang paling efektif mencegah oksidasi dan menjaga keutuhan aroma volatil?",
            "correct": "Wadah kedap udara dengan katup satu arah (one-way degas valve) atau tabung vakum yang diletakkan di tempat sejuk kedap cahaya",
            "wrong": ["Toples kaca bening transparan yang dijemur di bawah sinar matahari", "Mangkuk terbuka di atas meja makan", "Kantong plastik kresek tipis yang diikat longgar"],
            "exp": "Oksigen, panas, kelembapan, dan radiasi sinar UV adalah 4 musuh utama kesegaran kopi. Wadah vakum kedap cahaya memperlambat oksidasi asam lemak kopi secara signifikan."
        },
        {
            "id": "q-h10-3", "quiz_id": "quiz-h10", "order_index": 3,
            "text": "Langkah berkelanjutan apa yang paling efektif bagi home brewer untuk mengembangkan keterampilan seduh ke tingkat mahir?",
            "correct": "Mendokumentasikan variabel seduh di jurnal rasa, berkalibrasi dengan sesama penyeduh di sesi cupping komunitas, dan mengikuti uji coba blind",
            "wrong": ["Membeli alat seduh baru setiap minggu tanpa mencatat variabel rasa", "Menolak mencoba origin kopi lain di luar selera pribadi", "Menyeduh kopi tanpa menimbang dosis bubuk"],
            "exp": "Dokumentasi log seduh yang disiplin dan kalibrasi sensorik bersama komunitas memperluas palet rasa dan membangun pemahaman objektif atas sains ekstraksi."
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

print("Home Brewer data provider ready.")
