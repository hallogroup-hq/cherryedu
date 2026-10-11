# -*- coding: utf-8 -*-
"""
Rewrites lib/data/paths/homeBrewerData.ts with:
- Restructured, clean lessons (H-1 to H-10)
- Full 10 module quizzes (quiz-h1 to quiz-h10) + quiz-h-final
- 30 comprehensive module questions + 5 final exam questions
- Randomized answer keys (A, B, C, D)
"""
import sys
import os
import re
sys.path.insert(0, os.path.dirname(__file__))

from curriculum_helpers import format_ts_question, rotate_options
from data_home_brewer import get_home_brewer_quizzes, get_home_brewer_questions

def build_home_brewer_file():
    quizzes = get_home_brewer_quizzes()
    questions = get_home_brewer_questions()
    
    # Also add the 5 final exam questions with rotated keys!
    final_raw = [
        {
            "id": "q-hb-1", "quiz_id": "quiz-h-final", "order_index": 1,
            "text": "Mengapa biji kopi light roast yang baru disangrai kurang dari 3 hari sebaiknya tidak langsung diseduh?",
            "correct": "Kandungan gas CO2 masih sangat tinggi sehingga memicu turbulensi gas liar yang menghalangi ekstraksi merata",
            "wrong": ["Biji kopi belum memiliki kadar kafein yang cukup", "Kadar air di dalam biji kopi masih di atas 20%", "Minyak kopi belum keluar ke permukaan biji"],
            "exp": "Gas CO2 yang berlebih memicu pelepasan gas agresif saat terkena air, menghalangi ekstraksi senyawa manis dan menghasilkan rasa asam tajam hambar."
        },
        {
            "id": "q-hb-2", "quiz_id": "quiz-h-final", "order_index": 2,
            "text": "Dalam distribusi partikel gilingan kopi, apakah dampak utama dari keberadaan 'fines' (partikel debu mikro) yang berlebihan?",
            "correct": "Memicu over-extraction lokal, rasa pahit sepat kering (astringent), dan memperlambat laju alir air",
            "wrong": ["Menyebabkan rasa kopi menjadi terlalu asam seperti cuka", "Membuat seduhan mengalir terlalu cepat tanpa ekstraksi", "Menurunkan total dissolved solids (TDS) seduhan"],
            "exp": "Fines memiliki rasio luas permukaan sangat besar sehingga terekstraksi terlalu cepat, menghasilkan rasa pahit kelat (astringent) dan menyumbat pori kertas saring."
        },
        {
            "id": "q-hb-3", "quiz_id": "quiz-h-final", "order_index": 3,
            "text": "Berapa rentang TDS air seduh ideal menurut standar SCA untuk menghasilkan ekstraksi kopi spesialti yang seimbang?",
            "correct": "75 hingga 150 ppm (target optimal ~120-150 ppm)",
            "wrong": ["0 hingga 20 ppm murni", "300 hingga 500 ppm air sadah", "600 hingga 1000 ppm"],
            "exp": "SCA merekomendasikan target TDS 75 - 150 ppm untuk ekstraksi seimbang tanpa menetralkan keasaman atau mengendapkan mineral berlebih."
        },
        {
            "id": "q-hb-4", "quiz_id": "quiz-h-final", "order_index": 4,
            "text": "Pada metode V60 4:6 Tetsu Kasuya, alokasi 40% air pada dua tuangan awal berfungsi untuk mengatur variabel apa?",
            "correct": "Keseimbangan rasa keasaman dan kemanisan (Sweetness vs Acidity)",
            "wrong": ["Ketebalan bodi dan intensitas kekuatan kopi", "Suhu pendinginan server kopi di bawah dripper", "Laju pembersihan ampas di dinding kertas dripper"],
            "exp": "40% air pertama mengatur rasio keasaman vs kemanisan (Sweetness vs Acidity), sedangkan 60% sisanya mengatur kekuatan bodi seduhan."
        },
        {
            "id": "q-hb-5", "quiz_id": "quiz-h-final", "order_index": 5,
            "text": "Mengapa teknik Inverted pada Aeropress sangat populer di kalangan home brewer kompetisi?",
            "correct": "Mencegah air seduh menetes keluar secara prematur sehingga waktu kontak perendaman dapat dikontrol dengan presisi",
            "wrong": ["Menghilangkan kebutuhan mencuci tabung Aeropress", "Menaikkan tekanan plunger secara otomatis menjadi 15 bar", "Menghasilkan crema espresso tebal setara mesin komersial"],
            "exp": "Metode inverted membalik tabung sehingga kopi terendam sempurna tanpa tetesan gravitasi awal hingga plunger ditekan manual."
        },
    ]
    
    final_pattern = [3, 1, 2, 0, 1]
    for idx, item in enumerate(final_raw):
        target_idx = final_pattern[idx]
        ans = rotate_options(item["correct"], item["wrong"][0], item["wrong"][1], item["wrong"][2], target_idx, item["id"])
        questions.append({
            "id": item["id"],
            "quiz_id": item["quiz_id"],
            "question_text": item["text"],
            "points": 10,
            "order_index": item["order_index"],
            "explanation": item["exp"],
            "answers": ans
        })

    # Read existing content to extract lesson texts cleanly
    with open('lib/data/paths/homeBrewerData.ts', 'r', encoding='utf-8') as f:
        content = f.read()
        
    lessons_section = content[:content.find('export const HOME_BREWER_QUIZZES')]
    
    # We will format the quizzes and questions string
    quizzes_lines = ["export const HOME_BREWER_QUIZZES: Quiz[] = ["]
    for q in quizzes:
        mod_line = f"    module_id: '{q['module_id']}',\n" if q['module_id'] else "    module_id: null,\n"
        desc_val = q['description'].replace("'", "\\'") if 'description' in q else None
        desc_line = f"    description: '{desc_val}',\n" if desc_val else ""
        quizzes_lines.append(f"""  {{
    id: '{q['id']}',
{mod_line}    learning_path_id: '{q['learning_path_id']}',
    quiz_scope: '{q['quiz_scope']}',
    title: '{q['title'].replace("'", "\\'")}',
{desc_line}    passing_score: {q['passing_score']},
    time_limit_minutes: {q['time_limit_minutes']},
    max_attempts: {q['max_attempts']},
    created_at: '{q['created_at']}',
  }},""")
    quizzes_lines.append("];\n")
    
    questions_lines = ["export const HOME_BREWER_QUESTIONS: Question[] = ["]
    for q in questions:
        questions_lines.append(format_ts_question(q))
    questions_lines.append("];\n")
    
    # Let's clean up and reassign lesson module_ids in lessons_section:
    # 1. les-h3-2 was air galon -> replace module_id to mod-h6 and order_index to 2
    # 2. Add real les-h3-2 (channeling & flow rate)
    # 3. les-h6-2 (flat bottom) -> module_id: 'mod-h5', order_index: 3
    # 4. les-h6-3 (filter paper) -> module_id: 'mod-h5', order_index: 4
    # 5. les-h7-2 (cold brew) -> module_id: 'mod-h9', order_index: 2
    # 6. les-h7-3 (nitro cold brew) -> module_id: 'mod-h9', order_index: 3
    # 7. les-h9-2 (gula aren) -> module_id: 'mod-h9', order_index: 4
    # 8. Add real les-h7-2 (triangulasi) and les-h7-3 (jurnal sensorik)
    # 9. Add real les-h6-3 (DIY water buffer vs mineral)
    
    new_h3_2_block = """  {
    id: 'les-h3-2',
    module_id: 'mod-h3',
    title: 'Kanalisasi (Channeling), Laju Alir (Flow Rate), & Ekstraksi Seragam V60',
    content: `
# Mengatasi Kanalisasi & Mengontrol Laju Alir V60

Banyak home brewer pemula mengalami masalah seduhan yang tidak konsisten: kadang terasa manis, namun seduhan berikutnya dengan biji yang sama terasa pahit kelat kering (*astringent*). Biang keladinya hampir selalu adalah **Kanalisasi (Channeling)**.

---

### Apa itu Kanalisasi (Channeling)?
Kanalisasi terjadi ketika air seduh mencari jalur dengan hambatan terkecil (*path of least resistance*) di dalam bed bubuk kopi.
1. Aliran air terkonsentrasi pada celah atau retakan mikro sempit.
2. Bubuk kopi di sepanjang celah tersebut mengalami **over-extraction parah**, melepaskan senyawa tanin dan asam fenolik berbobot molekul tinggi yang pahit dan sepat.
3. Sementara itu, bubuk kopi di area padat lainnya tidak tersentuh air secara optimal (**under-extraction**), melepaskan asam tajam mentah.
4. **Hasil akhir cangkir**: kombinasi aneh antara asam tajam di awal dan pahit kesat menempel di tenggorokan.

---

### Tiga Pilar Mencegah Kanalisasi di Rumah:
* **Leveling Bed Kopi**: Goyang perlahan dripper sebelum menuang agar permukaan bubuk kopi benar-benar rata horizontal.
* **Penuangan Tenang Tanpa Sentakan**: Gunakan kettle leher angsa dengan laju alir stabil 4–6 gram air per detik. Hindari menuang terlalu deras dari ketinggian karena akan mengocok bed ampas secara liar.
* **Jangan Menuang di Dinding Kertas**: Hindari menuang air langsung menyentuh kertas filter di lingkar luar karena air akan langsung meluncur ke server tanpa mengekstrak kopi (*bypass air berlebih*).
    `,
    content_type: 'text',
    duration_minutes: 15,
    order_index: 2,
    is_free: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Mekanisme kanalisasi pada V60, bahaya over-under extraction simultan, dan teknik penuangan presisi mencegah channeling.',
    key_takeaways: [
      'Channeling memicu ekstraksi tidak merata: rasa asam mentah dan pahit kelat muncul bersamaan dalam satu cangkir.',
      'Jaga laju tuang stabil 4–6 g/detik dan hindari menuang langsung ke tepi dinding kertas filter.',
      'Ratakan permukaan bed kopi sebelum seduh untuk menciptakan tahanan hidrolik yang homogen.',
    ],
  },
"""

    new_h6_3_block = """  {
    id: 'les-h6-3',
    module_id: 'mod-h6',
    title: 'DIY Water Chemistry: Formulasi Buffer Bikarbonat vs Mineral Ekstraktor',
    content: `
# Meracik Air Seduh Sendiri (DIY Water Mineralization)

Jika air galon di rumah tidak menghasilkan rasa kopi yang konsisten, home brewer dapat meracik air seduh sendiri menggunakan konsentrat mineral sederhana dari garam dapur murni (**Baking Soda**) dan **Garam Epsom (Magnesium Sulfat)**.

---

### Dua Komponen Utama Air Kopi:
1. **Mineral Ekstraktor (General Hardness / GH)**:
   * **Magnesium (Mg²⁺)** & **Kalsium (Ca²⁺)**.
   * Bertindak seperti 'kait' magnetik yang mengikat senyawa rasa manis, asam buah, dan lipid kopi keluar dari selulosa bubuk.
2. **Buffer Alkalinitas (Carbonate Hardness / KH)**:
   * **Bikarbonat (HCO₃⁻)**.
   * Bertindak sebagai 'peredam kejut' keasaman. Jika buffer terlalu rendah (<20 ppm), kopi terasa asam menusuk seperti cuka. Jika buffer terlalu tinggi (>80 ppm), keasaman buah alami lenyap dan kopi terasa hambar/flat.

---

### Resep Konsentrat DIY Water di Rumah:
* **Botol Buffer (Alkalinitas)**: Larutkan 1.68 gram Baking Soda (Natrium Bikarbonat) ke dalam 1 liter air demineralisasi (Amidis/Cleo).
* **Botol Hardness (Ekstraktor)**: Larutkan 2.46 gram Garam Epsom murni (Magnesium Sulfat USP) ke dalam 1 liter air demineralisasi.
* **Pencampuran Final**: Tambahkan 25 gram larutan Buffer dan 50 gram larutan Hardness ke dalam 1 liter air demineralisasi untuk menghasilkan target SCA 120 ppm TDS dengan rasio rasa sempurna!
    `,
    content_type: 'text',
    duration_minutes: 15,
    order_index: 3,
    is_free: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Panduan formulasi konsentrat mineral DIY water menggunakan Baking Soda dan Garam Epsom untuk target ekstraksi ideal.',
    key_takeaways: [
      'Magnesium dan Kalsium bertindak sebagai ekstraktor senyawa rasa buah dan manis kopi.',
      'Buffer Bikarbonat mengontrol ketajaman asam kopi agar seimbang dan tidak hambar.',
      'Meracik mineral sendiri memberikan replikasi rasa seduhan tingkat kompetisi dunia secara konsisten.',
    ],
  },
"""

    new_h7_2_and_3_block = """  {
    id: 'les-h7-2',
    module_id: 'mod-h7',
    title: 'Uji Triangulasi Rasa Mandiri di Dapur: Menemukan Satu Cup Berbeda dari Tiga Mangkuk',
    content: `
# Melatih Diskriminasi Sensorik dengan Uji Triangulasi

Uji Triangulasi adalah latihan standar dunia CQI untuk menguji ketajaman indra seorang pencicip kopi. Menariknya, metode ini sangat mudah direplikasi di dapur rumah Anda!

---

### Format Setup Triangulasi:
1. Siapkan **3 mangkuk atau gelas kaca identik**.
2. Pilih 2 biji kopi berbeda (misalnya: Origin A adalah Kopi Gayo Washed, Origin B adalah Kopi Flores Bajawa Natural).
3. Seduh **2 mangkuk dengan Kopi A** dan **1 mangkuk dengan Kopi B** menggunakan rasio dan grind size yang identik (8.25 g / 150 ml).
4. Minta anggota keluarga atau teman menandai bagian bawah mangkuk dengan stiker tersembunyi dan mengacak posisinya di atas meja.

---

### Cara Mencicipi:
* Dekati ketiga mangkuk secara berurutan dalam suhu hangat (sekitar 60°C).
* Seruput dengan sendok kuah secara bergantian: Mangkuk 1 -> Mangkuk 2 -> Mangkuk 3.
* Fokuskan perhatian Anda bukan pada menebak nama origin, melainkan pada **satu cangkir yang memiliki sensasi berbeda** (apakah keasamannya lebih tinggi? apakah bodinya lebih tebal? apakah ada aroma buah yang berbeda?).
* Tunjuk mangkuk ganjil (*odd cup*) tersebut dan periksa stiker di bawahnya!
    `,
    content_type: 'text',
    duration_minutes: 15,
    order_index: 2,
    is_free: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Protokol uji triangulasi dapur rumah untuk melatih diskriminasi sensorik tanpa bias informasi kemasan.',
    key_takeaways: [
      'Triangulasi melatih otak mengidentifikasi perbedaan rasa murni tanpa bias visual atau label.',
      'Fokuskan indra pada kontras keasaman, ketebalan bodi, dan finish setelah seruputan.',
      'Latihan rutin 2 minggu sekali melipatgandakan kepekaan lidah home brewer dalam mendeteksi cacat seduhan.',
    ],
  },
  {
    id: 'les-h7-3',
    module_id: 'mod-h7',
    title: 'Jurnal Sensorik Rumahan: Memetakan Spektrum Asam Organik & Body',
    content: `
# Memetakan Spektrum Asam Organik & Body di Rumah

Banyak orang mengira 'asam' pada kopi itu sama saja. Namun di meja cupping specialty, para profesional membedakan setidaknya 4 jenis asam organik yang memberikan dimensi karakter unik pada cangkir:

---

### Mengenal 4 Asam Organik Kunci Kopi:
1. **Asam Malat (Malic Acid)**:
   * Karakter: Keasaman renyah, segar, dan garing seperti menggigit apel hijau atau anggur hijau segar.
   * Sering ditemukan pada kopi elevasi tinggi Kenya, Ethiopia, dan varietas Typica dataran tinggi.
2. **Asam Sitrat (Citric Acid)**:
   * Karakter: Keasaman cerah, tajam menyegarkan seperti buah jeruk mandarin, lemon, atau grapefruit.
   * Dominan pada kopi proses Washed (Full Washed).
3. **Asam Tartarat (Tartaric Acid)**:
   * Karakter: Rasa asam manis seperti buah anggur matang dengan sensasi sedikit kesat kering di ujung lidah.
4. **Asam Asetat (Acetic Acid)**:
   * Karakter: Seperti cuka buah atau fermentasi kombucha. Dalam kadar sangat rendah memberikan kompleksitas eksotis (proses Anaerobic / Winey), namun jika berlebih menjadi cacat rasa busuk.

---

### Cara Menulis Jurnal Seduh Harian:
Catat 5 parameter sederhana setiap menyeduh:
1. Tanggal sangrai & Origin.
2. Rasio air & Suhu.
3. Intensitas rasa manis (*Sweetness* skala 1–5).
4. Karakter asam yang dominan (Malat apel vs Sitrat jeruk).
5. Kualitas aftertaste (bersih atau kesat).
    `,
    content_type: 'text',
    duration_minutes: 15,
    order_index: 3,
    is_free: false,
    is_published: true,
    created_at: '2026-08-05T00:00:00Z',
    summary: 'Panduan membedakan asam malat, sitrat, tartarat, dan asetat serta menyusun jurnal sensorik rumahan yang rapi.',
    key_takeaways: [
      'Asam malat terasa renyah seperti apel hijau, sedangkan asam sitrat terasa cerah seperti jeruk manis.',
      'Asam asetat berlebih menandakan cacat over-fermentation.',
      'Mendokumentasikan log rasa di jurnal adalah kunci mempercepat lompatan keahlian home brewer.',
    ],
  },
"""

    # Transform existing lessons text:
    # Remove the old les-h3-2 and replace it:
    old_h3_2_pattern = re.compile(r"\{\s*id:\s*'les-h3-2',[\s\S]*?key_takeaways:\s*\[[\s\S]*?\],\s*\},", re.MULTILINE)
    
    # We will also clean up displaced module_ids:
    # Flat bottom les-h6-2 -> mod-h5, order_index: 3
    # Filter paper les-h6-3 -> mod-h5, order_index: 4
    # Cold brew les-h7-2 -> mod-h9, order_index: 2
    # Nitro les-h7-3 -> mod-h9, order_index: 3
    # Gula aren les-h9-2 -> mod-h9, order_index: 4
    
    # Let's extract the actual lesson objects from the file:
    lesson_blocks = re.findall(r"(\{\s*id:\s*'les-h[0-9]+-[0-9]+',[\s\S]*?key_takeaways:\s*\[[\s\S]*?\],\s*\})", content)
    
    rebuilt_lessons = []
    
    # Insert new les-h3-2
    rebuilt_lessons.append(new_h3_2_block.strip())
    
    # Insert new les-h6-3
    rebuilt_lessons.append(new_h6_3_block.strip())
    
    # Insert new les-h7-2 and les-h7-3
    rebuilt_lessons.append(new_h7_2_and_3_block.strip())
    
    for block in lesson_blocks:
        # Check id
        id_m = re.search(r"id:\s*'([^']+)'", block)
        if not id_m: continue
        lid = id_m.group(1)
        
        if lid == 'les-h3-2':
            # Reassign this to mod-h6, order_index: 2
            block = re.sub(r"module_id:\s*'mod-h3'", "module_id: 'mod-h6'", block)
            block = re.sub(r"order_index:\s*\d+", "order_index: 2", block)
            rebuilt_lessons.append(block)
        elif lid == 'les-h6-2':
            # Flat bottom dripper -> mod-h5, order_index: 3
            block = re.sub(r"module_id:\s*'mod-h6'", "module_id: 'mod-h5'", block)
            block = re.sub(r"order_index:\s*\d+", "order_index: 3", block)
            rebuilt_lessons.append(block)
        elif lid == 'les-h6-3':
            # Filter paper -> mod-h5, order_index: 4
            block = re.sub(r"module_id:\s*'mod-h6'", "module_id: 'mod-h5'", block)
            block = re.sub(r"order_index:\s*\d+", "order_index: 4", block)
            rebuilt_lessons.append(block)
        elif lid == 'les-h7-2':
            # Cold brew -> mod-h9, order_index: 2
            block = re.sub(r"module_id:\s*'mod-h7'", "module_id: 'mod-h9'", block)
            block = re.sub(r"order_index:\s*\d+", "order_index: 2", block)
            rebuilt_lessons.append(block)
        elif lid == 'les-h7-3':
            # Nitro cold brew -> mod-h9, order_index: 3
            block = re.sub(r"module_id:\s*'mod-h7'", "module_id: 'mod-h9'", block)
            block = re.sub(r"order_index:\s*\d+", "order_index: 3", block)
            rebuilt_lessons.append(block)
        elif lid == 'les-h9-2':
            # Gula aren -> mod-h9, order_index: 4
            block = re.sub(r"order_index:\s*\d+", "order_index: 4", block)
            rebuilt_lessons.append(block)
        elif lid == 'les-h8-4':
            # Manual lever espresso -> order_index: 3
            block = re.sub(r"order_index:\s*\d+", "order_index: 3", block)
            rebuilt_lessons.append(block)
        elif lid == 'les-h8-3':
            # Susu panas manual -> order_index: 4
            block = re.sub(r"order_index:\s*\d+", "order_index: 4", block)
            rebuilt_lessons.append(block)
        elif lid == 'les-h8-2':
            # Picopresso -> order_index: 2
            block = re.sub(r"order_index:\s*\d+", "order_index: 2", block)
            rebuilt_lessons.append(block)
        elif lid == 'les-h4-3':
            # Agitasi seduh -> order_index: 3
            block = re.sub(r"order_index:\s*\d+", "order_index: 3", block)
            rebuilt_lessons.append(block)
        else:
            rebuilt_lessons.append(block)

    # Reassemble complete file
    clean_lessons = [b.strip().rstrip(',') for b in rebuilt_lessons if b.strip()]
    final_output = f"""import {{ Lesson, Quiz, Question }} from '../../types';

export const HOME_BREWER_EXPANDED_LESSONS: Lesson[] = [
{',\n'.join(clean_lessons)}
];

{'\n'.join(quizzes_lines)}
{'\n'.join(questions_lines)}
"""
    with open('lib/data/paths/homeBrewerData.ts', 'w', encoding='utf-8') as f:
        f.write(final_output)
    print("lib/data/paths/homeBrewerData.ts updated successfully.")

if __name__ == '__main__':
    build_home_brewer_file()
