# -*- coding: utf-8 -*-
from curriculum_helpers import rotate_options

def get_roaster_module_quizzes():
    return [
        {
            "id": "quiz-r1",
            "module_id": "mod-r1",
            "learning_path_id": "path-roaster",
            "quiz_scope": "module",
            "title": "Kuis Evaluasi Modul R-1: Botani & Green Coffee Matrix",
            "passing_score": 80,
            "time_limit_minutes": 10,
            "max_attempts": 3,
            "created_at": "2026-08-01T00:00:00Z",
        },
        {
            "id": "quiz-r2",
            "module_id": "mod-r2",
            "learning_path_id": "path-roaster",
            "quiz_scope": "module",
            "title": "Kuis Evaluasi Modul R-2: Termodinamika & Anatomi Mesin Sangrai",
            "passing_score": 80,
            "time_limit_minutes": 10,
            "max_attempts": 3,
            "created_at": "2026-08-01T00:00:00Z",
        },
        {
            "id": "quiz-r3",
            "module_id": "mod-r3",
            "learning_path_id": "path-roaster",
            "quiz_scope": "module",
            "title": "Kuis Evaluasi Modul R-3: RoR Curve & Fase Transisi Sangrai",
            "passing_score": 80,
            "time_limit_minutes": 10,
            "max_attempts": 3,
            "created_at": "2026-08-01T00:00:00Z",
        },
        {
            "id": "quiz-r4",
            "module_id": "mod-r4",
            "learning_path_id": "path-roaster",
            "quiz_scope": "module",
            "title": "Kuis Evaluasi Modul R-4: Kimia Rasa Maillard & Karamelisasi",
            "passing_score": 80,
            "time_limit_minutes": 10,
            "max_attempts": 3,
            "created_at": "2026-08-01T00:00:00Z",
        },
        {
            "id": "quiz-r5",
            "module_id": "mod-r5",
            "learning_path_id": "path-roaster",
            "quiz_scope": "module",
            "title": "Kuis Evaluasi Modul R-5: Roasting Defect & Profiling Development",
            "passing_score": 80,
            "time_limit_minutes": 10,
            "max_attempts": 3,
            "created_at": "2026-08-01T00:00:00Z",
        },
        {
            "id": "quiz-r-final",
            "module_id": "mod-r6",
            "learning_path_id": "path-roaster",
            "quiz_scope": "final_exam",
            "title": "Ujian Akhir Sertifikasi Roaster Specialist",
            "description": "Ujian evaluasi komprehensif 15 soal mencakup termodinamika mesin, kurva RoR/DTR, kinetika reaksi Maillard/Karamelisasi, diagnosis cacat sangrai, dan QC batch komersial.",
            "passing_score": 80,
            "time_limit_minutes": 30,
            "max_attempts": 3,
            "created_at": "2026-08-10T00:00:00Z",
        },
    ]

def get_roaster_module_questions():
    pattern = [1, 2, 0, 3, 2, 0, 1, 3, 2, 0, 1, 3, 2, 0, 3]
    raw = [
        # quiz-r1
        {
            "id": "q-r1-1", "quiz_id": "quiz-r1", "order_index": 1,
            "text": "Parameter fisik green bean apakah yang mengukur ketersediaan air bebas yang tidak terikat molekul selulosa dan menentukan umur simpan biji?",
            "correct": "Water Activity (Aw) dengan batas aman internasional di bawah 0.60 Aw",
            "wrong": ["Moisture Content (MC) persentase massa total", "Densitas massa jenis gram per liter", "Warna hijau klorofil visual"],
            "exp": "Water Activity (Aw) mencerminkan energi air bebas yang dapat digunakan oleh mikroorganisme dan jamur kapang untuk tumbuh. Aw di bawah 0.60 menjamin stabilitas penyimpanan green bean specialty."
        },
        {
            "id": "q-r1-2", "quiz_id": "quiz-r1", "order_index": 2,
            "text": "Mengapa green bean berkepadatan tinggi (SHB / Strictly High Bean dari dataran tinggi >1.500 mdpl) membutuhkan energi termal awal (charge temperature) yang lebih tinggi?",
            "correct": "Struktur selulosa selnya sangat rapat dan tebal sehingga penetrasi panas konduksi dan konveksi ke inti biji membutuhkan momentum energi lebih besar",
            "wrong": ["Karena biji SHB memiliki kadar kafein yang mudah terbakar", "Agar biji cepat meledak sebelum warna berubah menjadi kuning", "Karena biji SHB tidak mengandung air bebas sama sekali"],
            "exp": "Biji padat (dense bean) memiliki massa jenis tinggi dengan ruang antar-sel yang sempit, membutuhkan transfer panas yang cukup kuat di awal agar inti biji matang seragam bersama lapisan luar."
        },
        {
            "id": "q-r1-3", "quiz_id": "quiz-r1", "order_index": 3,
            "text": "Metode dekafeinasi Swiss Water Process (SWP) mengekstraksi kafein dari green bean dengan prinsip kimia apa?",
            "correct": "Menggunakan ekstrak kopi hijau jenuh (GCE) bebas kafein untuk melarutkan molekul kafein secara osmosis gradien konsentrasi tanpa bahan kimia sintetis",
            "wrong": ["Menggunakan pelarut kimia sintetis metilen klorida beracun", "Memanggang biji kopi pada suhu 300°C hingga kafein menguap", "Mencuci biji kopi dengan air sabun asam klorida"],
            "exp": "SWP menggunakan air murni dan Green Coffee Extract (GCE) yang jenuh dengan senyawa rasa kopi kecuali kafein, sehingga hanya kafein yang bermigrasi keluar dari biji melalui osmosis."
        },
        # quiz-r2
        {
            "id": "q-r2-1", "quiz_id": "quiz-r2", "order_index": 1,
            "text": "Tiga mekanisme perpindahan energi panas yang bekerja secara simultan di dalam drum roaster komersial adalah?",
            "correct": "Konduksi (kontak dinding drum), Konveksi (aliran udara panas fluida), dan Radiasi (emisi gelombang elektromagnetik drum)",
            "wrong": ["Kondensasi, Evaporasi, dan Sublimasi termal", "Friksi gesekan mekanik, Elektromagnetik, dan Magnetik", "Aerasi, Oksigenasi, dan Dekantasi"],
            "exp": "Drum roaster menyalurkan panas melalui konduksi (kontak langsung fisik dengan drum), konveksi (aliran udara panas yang ditarik blower fan), dan radiasi (panas pancar dari material logam drum)."
        },
        {
            "id": "q-r2-2", "quiz_id": "quiz-r2", "order_index": 2,
            "text": "Apa peran fungsi damper/airflow exhaust fan pada mesin drum roaster selama proses penyangraian berlangsung?",
            "correct": "Mengontrol rasio panas konvektif, mengevakuasi kelembapan uap air, mengeluarkan asap pembakaran, dan membuang kulit ari (chaff)",
            "wrong": ["Memasukkan bahan bakar gas cair langsung ke dalam drum", "Menghentikan perputaran drum secara darurat", "Mendinginkan biji kopi seketika menjadi suhu beku"],
            "exp": "Aliran udara (airflow) mengatur keseimbangan panas konveksi, menyedot sekam chaff yang terkelupas, serta membuang asap roasty agar biji tidak berasa smokey atau kotor."
        },
        {
            "id": "q-r2-3", "quiz_id": "quiz-r2", "order_index": 3,
            "text": "Faktor fisik apa yang paling mempengaruhi responsivitas dan akurasi pembacaan probe temperatur (thermocouple Bean Temperature) di mesin roaster?",
            "correct": "Diameter ketebalan ujung probe (sheath thickness) dan kedalaman pencelupan probe di dalam tumpukan dinamis biji (bean bed)",
            "wrong": ["Warna cat penutup luar mesin sangrai", "Panjang kabel listrik yang menghubungkan mesin ke colokan dinding", "Jenis bahan bakar gas alam yang digunakan kompor"],
            "exp": "Probe tipis (misal 3mm atau 1.5mm) memiliki massa termal rendah sehingga merespons perubahan suhu seketika (low lag time), asalkan ujungnya terendam optimal di pusaran biji yang berputar."
        },
        # quiz-r3
        {
            "id": "q-r3-1", "quiz_id": "quiz-r3", "order_index": 1,
            "text": "Titik 'Turning Point' (TP) pada kurva profil suhu sangrai mendeskripsikan fenomena fisika apa?",
            "correct": "Titik nadir suhu terendah probe saat laju penyerapan panas biji dingin seimbang dengan panas drum sebelum suhu mulai merambat naik",
            "wrong": ["Titik saat biji kopi pertama kali meletup bersuara retak", "Titik saat api kompor mesin sangrai dimatikan", "Waktu saat biji kopi dikeluarkan ke meja pendingin"],
            "exp": "Setelah charge, biji kopi dingin menyerap energi panas drum, menyebabkan probe turun hingga mencapai titik balik ekuilibrium termal (Turning Point), biasanya di menit 1:00-1:30."
        },
        {
            "id": "q-r3-2", "quiz_id": "quiz-r3", "order_index": 2,
            "text": "Kurva Rate of Rise (RoR) yang ideal sepanjang proses sangrai profesional menurut pedoman Scott Rao harus menunjukkan pergerakan seperti apa?",
            "correct": "Menurun secara mulus dan konsisten (monotonically declining) tanpa adanya kenaikan tiba-tiba (flick) atau penurunan mendadak (crash)",
            "wrong": ["Naik tajam vertikal dari awal hingga akhir sangrai", "Membentuk pola gelombang naik-turun zigzag seperti gigi gergaji", "Tetap konstan pada angka nol derajat per menit sepanjang waktu"],
            "exp": "RoR yang menurun mulus mencegah cacat rasa; RoR yang crash memicu rasa hambar terpanggang (baked), sedangkan flick menjelang first crack memicu rasa pahit terbakar (harsh)."
        },
        {
            "id": "q-r3-3", "quiz_id": "quiz-r3", "order_index": 3,
            "text": "Reaksi termodinamika apakah yang terjadi saat peristiwa 'First Crack' meletup pada biji kopi?",
            "correct": "Biji kopi melepaskan uap air dan gas bertekanan tinggi akibat perubahan reaksi dari endotermik (menyerap panas) menjadi eksotermik singkat",
            "wrong": ["Biji kopi menyerap seluruh minyak dari drum mesin", "Biji kopi mencair menjadi cairan karamel pekat", "Biji kopi kehilangan seluruh molekul selulosa intinya"],
            "exp": "First crack adalah peristiwa fisik di mana tekanan uap air dan CO2 internal menembus dinding selulosa biji yang rapuh, disertai transisi energi singkat di mana biji melepaskan panas (eksotermik)."
        },
        # quiz-r4
        {
            "id": "q-r4-1", "quiz_id": "quiz-r4", "order_index": 1,
            "text": "Reaksi Maillard dalam fase kuning (yellowing) hingga browning pada penyangraian kopi terjadi antara kelompok senyawa apa?",
            "correct": "Gula pereduksi (karbohidrat) dengan asam amino bebas (protein) menghasilkan senyawa melanoidin",
            "wrong": ["Molekul air bebas dengan ion kalsium drum logam", "Kafein murni dengan gas oksigen udara", "Minyak trigliserida dengan asam sitrat"],
            "exp": "Reaksi Maillard mengikat gugus karbonil gula pereduksi dan gugus amino asam amino, menghasilkan ratusan senyawa aroma volatil kompleks (keton, aldehid, pirazin) dan polimer warna cokelat melanoidin."
        },
        {
            "id": "q-r4-2", "quiz_id": "quiz-r4", "order_index": 2,
            "text": "Pada rentang suhu berapakah reaksi karamelisasi sukrosa murni mulai aktif berlangsung di dalam biji kopi?",
            "correct": "Suhu sekitar 160°C hingga 190°C",
            "wrong": ["Suhu 50°C hingga 80°C", "Suhu 100°C tepat saat air mendidih", "Suhu di atas 250°C saat biji menjadi abu"],
            "exp": "Karamelisasi adalah pirolisis termal karbohidrat sukrosa tanpa protein, aktif pada suhu ~160°C ke atas, menghasilkan senyawa manis karamel, furan aromatik, dan senyawa asam piruvat."
        },
        {
            "id": "q-r4-3", "quiz_id": "quiz-r4", "order_index": 3,
            "text": "Senyawa volatil kelompok Furans dan Pyrazines yang terbentuk pesat selama reaksi browning memberikan kontribusi atribut rasa apa di meja cupping?",
            "correct": "Aroma karamel manis, kacang panggang (nutty), cokelat matang, dan wangi roti bakar (toasted bread)",
            "wrong": ["Aroma fermentasi alkohol busuk dan cuka menyengat", "Aroma amis minyak ikan mentah", "Aroma rumput segar mentah yang belum dipotong"],
            "exp": "Pyrazines dan Furans adalah molekul aroma kunci yang memberikan karakter roasty manis, nutty, chocolaty, dan kompleksitas aroma seduhan kopi sangrai berkualitas."
        },
        # quiz-r5
        {
            "id": "q-r5-1", "quiz_id": "quiz-r5", "order_index": 1,
            "text": "Cacat sangrai 'Baking' (kopi terasa terpanggang hambar seperti roti tawar tanpa acidity cerah) disebabkan oleh anomali kurva apa?",
            "correct": "Penurunan RoR yang terlalu drastis hingga mendatar (flat/crash) dan waktu sangrai yang terlalu lambat kehilangan momentum energi termal",
            "wrong": ["Pemberian panas api kompor 100% dari awal hingga biji gosong", "Mendinginkan biji kopi di cooling tray terlalu cepat dalam 2 menit", "Menyangrai kopi pada elevasi di bawah permukaan laut"],
            "exp": "Baking terjadi saat momentum panas terhenti (RoR crash), menyebabkan reaksi kimia peruraian asam organik terganggu dan rasa manis buah hancur menjadi rasa gandum/roti tawar datar."
        },
        {
            "id": "q-r5-2", "quiz_id": "quiz-r5", "order_index": 2,
            "text": "Cacat fisik 'Scorching' (bercak hitam arang pada bagian punggung bundar biji kopi) disebabkan oleh faktor operasional apa?",
            "correct": "Suhu drum kontak (charge temperature) terlalu panas diiringi putaran RPM drum yang terlalu lambat sehingga biji menempel diam di dinding logam membara",
            "wrong": ["Ukuran airflow exhaust fan diputar ke kecepatan paling tinggi", "Biji kopi memiliki kadar air di bawah 5%", "Biji kopi dipanen pada musim hujan"],
            "exp": "Scorching adalah cacat konduktif murni: dinding drum yang terlampau panas membakar permukaan biji yang meluncur terlalu lambat, meninggalkan luka bakar gosong di punggung luar."
        },
        {
            "id": "q-r5-3", "quiz_id": "quiz-r5", "order_index": 3,
            "text": "Apa yang dimaksud dengan DTR (Development Time Ratio) dan berapa persentase standar umumnya untuk profil sangrai filter specialty?",
            "correct": "Persentase waktu pasca First Crack terhadap total waktu sangrai, umumnya berada di rentang 12% hingga 16%",
            "wrong": ["Persentase waktu fase pengeringan (drying phase) terhadap umur biji", "Persentase susut bobot (weight loss) kopi yang wajib 25%", "Waktu pendinginan di cooling bin terhadap waktu penggilingan"],
            "exp": "DTR = (Waktu dari First Crack hingga Drop / Total Waktu Sangrai) x 100%. Rentang 12-16% memberikan profil filter light-to-medium yang mengembangkan kemanisan tanpa mengorbankan keasaman asal."
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

print("Roaster data provider ready.")
