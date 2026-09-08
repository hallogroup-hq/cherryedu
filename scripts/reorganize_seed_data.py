import re

print("Starting reorganize_seed_data.py...")

with open('lib/data/seedData.ts', 'r') as f:
    content = f.read()

# 1. Add barista imports if not present
if "from './paths/baristaData'" not in content:
    barista_import = """import {
  BARISTA_PATH,
  BARISTA_MODULES,
  BARISTA_LESSONS,
  BARISTA_QUIZZES,
  BARISTA_QUESTIONS,
} from './paths/baristaData';\n"""
    # Insert right after the last path import
    content = content.replace("from './paths/coffeeBusinessData';", "from './paths/coffeeBusinessData';\n" + barista_import)
    print("Added baristaData imports")

# 2. Update SEED_PATHS to use BARISTA_PATH
if "BARISTA_PATH," not in content:
    # Replace the manual barista path object
    pattern = r'\{\s*id:\s*[\'\"]path-barista[\'\"].*?created_at:\s*[\'\"]2026-08-05T00:00:00Z[\'\"],\s*\},'
    content = re.sub(pattern, 'BARISTA_PATH,', content, flags=re.DOTALL)
    print("Replaced manual path-barista with BARISTA_PATH in SEED_PATHS")

# 3. Update SEED_MODULES to include ...BARISTA_MODULES
# Find and remove manual mod-b1 to mod-b10 in SEED_MODULES
pattern_mod_b = r'\{\s*id:\s*[\'\"]mod-b1[\'\"].*?created_at:\s*[\'\"]2026-08-05T00:00:00Z[\'\"],\s*\},'
# Find the whole barista module block
content = re.sub(r'//\s*---\s*Barista Specialization Modules.*?//\s*---\s*Home Brewer Modules', '...BARISTA_MODULES,\n  // --- Home Brewer Modules', content, flags=re.DOTALL)
print("Replaced manual barista modules with ...BARISTA_MODULES in SEED_MODULES")

# 4. Remove all les-b* lessons from SEED_LESSONS
# Match individual lesson objects with id: "les-b*"
content = re.sub(r'\{\s*id:\s*[\'\"]les-b[^\'\"]+[\'\"].*?key_takeaways:\s*\[.*?\]\s*\},', '', content, flags=re.DOTALL)
print("Removed old barista stubs from SEED_LESSONS")

# 5. Ensure ...BARISTA_LESSONS is spread in SEED_LESSONS
if "...BARISTA_LESSONS," not in content:
    content = content.replace("...HOME_BREWER_EXPANDED_LESSONS,", "...BARISTA_LESSONS,\n  ...HOME_BREWER_EXPANDED_LESSONS,")
    print("Added ...BARISTA_LESSONS to SEED_LESSONS spread")

# 6. Ensure ...BARISTA_QUIZZES and ...BARISTA_QUESTIONS are spread
if "...BARISTA_QUIZZES," not in content:
    content = content.replace("...HOME_BREWER_QUIZZES,", "...BARISTA_QUIZZES,\n  ...HOME_BREWER_QUIZZES,")
    print("Added ...BARISTA_QUIZZES to SEED_QUIZZES spread")

if "...BARISTA_QUESTIONS," not in content:
    content = content.replace("...HOME_BREWER_QUESTIONS,", "...BARISTA_QUESTIONS,\n  ...HOME_BREWER_QUESTIONS,")
    print("Added ...BARISTA_QUESTIONS to SEED_QUESTIONS spread")

# 7. Add images with credit captions to Foundation lessons
foundation_images = [
    (
        '# Sejarah Kopi Dunia: Dari Kaffa ke Batavia 1696',
        """# Sejarah Kopi Dunia: Dari Kaffa ke Batavia 1696

![Perjalanan Sejarah Kopi Dunia dari Ethiopia ke Batavia](https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Perkembangan Perdagangan Kopi Global dan Budidaya Perdana Batavia 1696 — Sumber / Kredit: Unsplash / Specialty Coffee Association (SCA)*
"""
    ),
    (
        '# Anatomi Tanaman Kopi: Struktur Organ & Siklus Hidup',
        """# Anatomi Tanaman Kopi: Struktur Organ & Siklus Hidup

![Anatomi Buah Kopi Ceri Merah di Dahan Pohon Arabika](https://images.unsplash.com/photo-1524350876685-274059332603?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Buah Ceri Kopi Matang Optimal Siap Panen Petik Merah — Sumber / Kredit: Unsplash / World Coffee Research*
"""
    ),
    (
        '# Taksonomi Botani Kopi: Arabika, Robusta, dan Liberika',
        """# Taksonomi Botani Kopi: Arabika, Robusta, dan Liberika

![Perbedaan Morfologi Pohon dan Biji Spesies Kopi Utama](https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Karakteristik Agroklimat Spesies Coffea Arabica, Canephora, dan Liberica — Sumber / Kredit: Unsplash / International Coffee Organization*
"""
    ),
    (
        '# Pasca Panen: Titik Kritis Penentu Kualitas Hulu',
        """# Pasca Panen: Titik Kritis Penentu Kualitas Hulu

![Meja Penjemuran Kopi Berundak Raised Beds di Dataran Tinggi](https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Pengeringan Ceri Kopi di Atas Meja Para-Para Berventilasi Udara Bebas — Sumber / Kredit: Unsplash / Specialty Coffee Processing*
"""
    ),
    (
        '# Termodinamika & Fisika Dasar Roasting Kopi',
        """# Termodinamika & Fisika Dasar Roasting Kopi

![Dinamika Suhu Biji Kopi di Dalam Drum Roasting Komersial](https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Proses Perpindahan Panas Konduksi dan Konveksi Selama Penyangraian — Sumber / Kredit: Unsplash / Roasters Guild of America*
"""
    ),
    (
        '# Kimia Air Seduh: Peran Kalsium, Magnesium, dan Bikarbonat',
        """# Kimia Air Seduh: Peran Kalsium, Magnesium, dan Bikarbonat

![Uji Parameter Mineral dan Kesadahan Air Seduh Kopi](https://images.unsplash.com/photo-1541167760496-1628856ab772?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Analisis Kandungan Ion Mineral Air Pengekstraksi Rasa Kopi Spesialti — Sumber / Kredit: Unsplash / Water Quality Standards (SCA)*
"""
    ),
    (
        '# Fisiologi Sensorik: Bagaimana Manusia Merasakan Kopi',
        """# Fisiologi Sensorik: Bagaimana Manusia Merasakan Kopi

![Laboratorium Cupping Kopi Berstandar Internasional SCA](https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1000&auto=format&fit=crop&q=80)
*Ilustrasi / Foto: Meja Cupping Resmi untuk Kalibrasi Rasa dan Skor Kopi Spesialti — Sumber / Kredit: Unsplash / Coffee Quality Institute (CQI)*
"""
    )
]

for title_anchor, replacement in foundation_images:
    if title_anchor in content:
        content = content.replace(title_anchor, replacement, 1)
        print(f"Added visual image with credit to: {title_anchor[:40]}...")

with open('lib/data/seedData.ts', 'w') as f:
    f.write(content)

print("Finished reorganize_seed_data.py successfully!")
