import re

print("Starting integrate_full_curriculum.py...")

with open('lib/data/seedData.ts', 'r') as f:
    text = f.read()

# 1. Clean all raw LaTeX from seedData.ts first
text = text.replace(r'$$Ca^{2+} + 2HCO_3^- \xrightarrow{\Delta} \mathbf{CaCO_3 \downarrow} + H_2O + CO_2$$',
                    '> ⚗️ **Reaksi Pengendapan Kerak Kalsium Karbonat:**\n> **Ca²⁺ + 2HCO₃⁻ + Panas (Δ) → CaCO₃ (Kerak Padat Mengendap) + H₂O + CO₂**')
text = text.replace(r'$$\text{Total Air} = 40\% \text{ (Rasa Manis & Asam)} + 60\% \text{ (Kekuatan & Bodi)}$$',
                    '> ☕ **Rasio Pembagian Air Metode 4:6 Tetsu Kasuya:**\n> **Total Air Seduh** = **40% (Pengatur Keseimbangan Asam-Manis)** + **60% (Pengatur Kekuatan & Bodi Cangkir)**')
text = text.replace(r'$$\text{Target Food Cost Percentage} = \frac{\text{HPP (Rp 10.560)}}{\text{Harga Jual (Rp 35.000)}} \times 100\% = 30.1\%$$',
                    '> ☕ **Kalkulasi Food Cost Percentage:**\n> **Food Cost %** = **(HPP Rp 10.560 ÷ Harga Jual Rp 35.000) × 100% = 30.1% (Ideal di Bawah 35%)**')

# 2. Add baristaData imports
if "from './paths/baristaData'" not in text:
    import_stmt = """import {
  BARISTA_PATH,
  BARISTA_MODULES,
  BARISTA_LESSONS,
  BARISTA_QUIZZES,
  BARISTA_QUESTIONS,
} from './paths/baristaData';\n"""
    text = text.replace("from './paths/coffeeBusinessData';", "from './paths/coffeeBusinessData';\n" + import_stmt)
    print("Added baristaData imports")

# 3. Add images to Foundation lessons
foundation_image_replacements = [
    (
        '# Sejarah Kopi Dunia: Dari Kaffa ke Batavia 1696\n\nKopi bukan sekadar',
        """# Sejarah Kopi Dunia: Dari Kaffa ke Batavia 1696

![Perjalanan Sejarah Kopi Dunia dari Ethiopia ke Batavia](https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Perkembangan Perdagangan Kopi Global dan Budidaya Perdana Batavia 1696 — Sumber / Kredit: Unsplash / Specialty Coffee Association (SCA)*

Kopi bukan sekadar"""
    ),
    (
        '# Anatomi Tanaman Kopi: Struktur Organ & Siklus Hidup\n\nPohon kopi bukan',
        """# Anatomi Tanaman Kopi: Struktur Organ & Siklus Hidup

![Anatomi Buah Kopi Ceri Merah di Dahan Pohon Arabika](https://images.unsplash.com/photo-1524350876685-274059332603?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Buah Ceri Kopi Matang Optimal Siap Panen Petik Merah — Sumber / Kredit: Unsplash / World Coffee Research*

Pohon kopi bukan"""
    ),
    (
        '# Taksonomi Botani Kopi: Arabika, Robusta, dan Liberika\n\nDi dunia botani',
        """# Taksonomi Botani Kopi: Arabika, Robusta, dan Liberika

![Perbedaan Morfologi Pohon dan Biji Spesies Kopi Utama](https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Karakteristik Agroklimat Spesies Coffea Arabica, Canephora, dan Liberica — Sumber / Kredit: Unsplash / International Coffee Organization*

Di dunia botani"""
    ),
    (
        '# Pasca Panen: Titik Kritis Penentu Kualitas Hulu\n\nJika kebun kopi',
        """# Pasca Panen: Titik Kritis Penentu Kualitas Hulu

![Meja Penjemuran Kopi Berundak Raised Beds di Dataran Tinggi](https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Pengeringan Ceri Kopi di Atas Meja Para-Para Berventilasi Udara Bebas — Sumber / Kredit: Unsplash / Specialty Coffee Processing*

Jika kebun kopi"""
    ),
    (
        '# Termodinamika & Fisika Dasar Roasting Kopi\n\nMenyangrai kopi',
        """# Termodinamika & Fisika Dasar Roasting Kopi

![Dinamika Suhu Biji Kopi di Dalam Drum Roasting Komersial](https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Proses Perpindahan Panas Konduksi dan Konveksi Selama Penyangraian — Sumber / Kredit: Unsplash / Roasters Guild of America*

Menyangrai kopi"""
    ),
    (
        '# Kimia Air Seduh: Peran Kalsium, Magnesium, dan Bikarbonat\n\nSecangkir kopi seduh',
        """# Kimia Air Seduh: Peran Kalsium, Magnesium, dan Bikarbonat

![Uji Parameter Mineral dan Kesadahan Air Seduh Kopi](https://images.unsplash.com/photo-1541167760496-1628856ab772?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Analisis Kandungan Ion Mineral Air Pengekstraksi Rasa Kopi Spesialti — Sumber / Kredit: Unsplash / Water Quality Standards (SCA)*

Secangkir kopi seduh"""
    ),
    (
        '# Fisiologi Sensorik: Bagaimana Manusia Merasakan Kopi\n\nMenikmati secangkir kopi',
        """# Fisiologi Sensorik: Bagaimana Manusia Merasakan Kopi

![Laboratorium Cupping Kopi Berstandar Internasional SCA](https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Meja Cupping Resmi untuk Kalibrasi Rasa dan Skor Kopi Spesialti — Sumber / Kredit: Unsplash / Coffee Quality Institute (CQI)*

Menikmati secangkir kopi"""
    )
]

for old_str, new_str in foundation_image_replacements:
    if old_str in text:
        text = text.replace(old_str, new_str, 1)
        print(f"Added photo & credit to Foundation: {old_str[:35]}...")

# 4. Filter out old les-b* from SEED_LESSONS and spread ...BARISTA_LESSONS
parts = text.split('export const SEED_LESSONS: Lesson[] = [')
header = parts[0]
rest = parts[1]

lessons_part, after_lessons = rest.split('export const SEED_QUIZZES: Quiz[] = [')

# Parse lessons individually
pattern = re.compile(r'  \{\s*\n\s*id:\s*[\'\"]([^\'\"]+)[\'\"].*?\n  \},', re.DOTALL)
filtered_lessons = []
for m in pattern.finditer(lessons_part):
    les_id = m.group(1)
    if les_id.startswith('les-b'):
        continue  # skip old barista stub
    filtered_lessons.append(m.group(0))

print(f"Kept {len(filtered_lessons)} non-barista lessons in SEED_LESSONS")

# Reassemble lessons_part
new_lessons_part = '\n' + '\n'.join(filtered_lessons) + '\n  ...BARISTA_LESSONS,\n  ...HOME_BREWER_EXPANDED_LESSONS,\n  ...ROASTER_LESSONS,\n  ...Q_GRADER_LESSONS,\n  ...POST_HARVEST_LESSONS,\n  ...COFFEE_BUSINESS_LESSONS,\n];\n\n// 6. QUIZZES\n'

# 5. Spread ...BARISTA_QUIZZES and ...BARISTA_QUESTIONS in quizzes & questions
new_after_lessons = after_lessons
if "...BARISTA_QUIZZES," not in new_after_lessons:
    new_after_lessons = new_after_lessons.replace("...HOME_BREWER_QUIZZES,", "...BARISTA_QUIZZES,\n  ...HOME_BREWER_QUIZZES,")
    print("Added ...BARISTA_QUIZZES")

if "...BARISTA_QUESTIONS," not in new_after_lessons:
    new_after_lessons = new_after_lessons.replace("...HOME_BREWER_QUESTIONS,", "...BARISTA_QUESTIONS,\n  ...HOME_BREWER_QUESTIONS,")
    print("Added ...BARISTA_QUESTIONS")

# Write new file
final_seed = header + 'export const SEED_LESSONS: Lesson[] = [' + new_lessons_part + 'export const SEED_QUIZZES: Quiz[] = [' + new_after_lessons
with open('lib/data/seedData.ts', 'w') as f:
    f.write(final_seed)

print("Finished integrate_full_curriculum.py!")
