import re
import os

THEME_IMAGES = {
    "history": ("https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1000&auto=format&fit=crop&q=80", "Sejarah Perkembangan Kopi Dunia dan Warisan Nusantara", "Specialty Coffee Association (SCA) History Archive"),
    "value_chain": ("https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1000&auto=format&fit=crop&q=80", "Rantai Pasok Terpadu Kopi Spesialti dari Hulu ke Hilir", "CQI & World Coffee Research"),
    "specialty_vs_commercial": ("https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=1000&auto=format&fit=crop&q=80", "Standar Evaluasi Fisik dan Pemilahan Cacat Biji Kopi SCA", "Specialty Coffee Association Standards"),
    "waves": ("https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1000&auto=format&fit=crop&q=80", "Evolusi Gelombang Kopi Menuju Budaya Kedai Spesialti Kontemporer", "Coffee Culture & History Review"),
    "sustainability": ("https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1000&auto=format&fit=crop&q=80", "Praktik Agroforestri Ramah Lingkungan dan Fair Trade", "Rainforest Alliance / Fair Trade"),
    "botany": ("https://images.unsplash.com/photo-1524350876685-274059332603?w=1000&auto=format&fit=crop&q=80", "Struktur Morfologi Botani Tanaman dan Biji Kopi", "World Coffee Research (WCR)"),
    "agroclimate": ("https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1000&auto=format&fit=crop&q=80", "Ketinggian MDPL dan Pengaruh Iklim Mikro Vulkanik Nusantara", "Balai Penelitian Tanaman Industri (BALITTRI)"),
    "harvest": ("https://images.unsplash.com/photo-1497636577773-f1231844b336?w=1000&auto=format&fit=crop&q=80", "Manajemen Panen Selektif Petik Merah Sempurna (100% Red Cherry)", "CQI Post-Harvest Processing Protocols"),
    "pests": ("https://images.unsplash.com/photo-1524350876685-274059332603?w=1000&auto=format&fit=crop&q=80", "Inspeksi Kesehatan Tanaman dan Mitigasi Hama Penyakit Kopi", "Center for Agriculture and Bioscience"),
    "varieties": ("https://images.unsplash.com/photo-1518057111178-44a106bad636?w=1000&auto=format&fit=crop&q=80", "Koleksi Varietas Kopi Arabika dan Robusta Unggul", "Pusat Penelitian Kopi dan Kakao Indonesia (ICCRI)"),
    "label": ("https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=1000&auto=format&fit=crop&q=80", "Identifikasi Asal-Usul dan Profil Rasa pada Kemasan Biji Kopi", "Specialty Coffee Roasteries Directory"),
    "washed": ("https://images.unsplash.com/photo-1518057111178-44a106bad636?w=1000&auto=format&fit=crop&q=80", "Proses Olah Basah (Fully Washed) dan Pencucian Musilage", "Specialty Coffee Association Processing Guide"),
    "natural": ("https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=1000&auto=format&fit=crop&q=80", "Penjemuran Ceri Kopi Proses Kering (Natural) di Meja Para-Para", "CQI Q Processing Technical Standards"),
    "honey": ("https://images.unsplash.com/photo-1518057111178-44a106bad636?w=1000&auto=format&fit=crop&q=80", "Spektrum Fermentasi Olah Honey (Yellow, Red, Black Honey)", "CQI Processing Protocols"),
    "giling_basah": ("https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=1000&auto=format&fit=crop&q=80", "Karakteristik Unik Proses Giling Basah (Wet Hulled) Khas Nusantara", "Asosiasi Eksportir Kopi Indonesia (AEKI)"),
    "fermentation": ("https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=1000&auto=format&fit=crop&q=80", "Inovasi Fermentasi Terkontrol Anaerobik dan Carbonic Maceration", "World Barista Championship Lab"),
    "roast_thermo": ("https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?w=1000&auto=format&fit=crop&q=80", "Termodinamika Perpindahan Panas pada Drum Mesin Sangrai Kopi", "Roasters Guild Standards"),
    "roast_chem": ("https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=1000&auto=format&fit=crop&q=80", "Transformasi Kimiawi Reaksi Maillard dan Karamelisasi Biji", "Coffee Chemistry Research Laboratory"),
    "roast_profiles": ("https://images.unsplash.com/photo-1587734195503-904fca47e0e9?w=1000&auto=format&fit=crop&q=80", "Spektrum Profil Roasting Berdasarkan Nilai Skala Agtron", "SCA Agtron Roast Color Standards"),
    "degassing": ("https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=1000&auto=format&fit=crop&q=80", "Pelepasan Gas Karbondioksida (CO2) dan Waktu Resting Optimal", "International Coffee Science Association"),
    "roast_software": ("https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1000&auto=format&fit=crop&q=80", "Pemantauan Laju RoR (Rate of Rise) Menggunakan Software Profiling", "Artisan & Cropster Digital Technologies"),
    "water_filtration": ("https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1000&auto=format&fit=crop&q=80", "Sistem Reverse Osmosis dan Remineralisasi Air Bar Kopi", "Specialty Coffee Technology Guild"),
    "water_chem": ("https://images.unsplash.com/photo-1541167760496-1628856ab772?w=1000&auto=format&fit=crop&q=80", "Pengukuran TDS dan Keseimbangan Mineral Pelarut Kopi", "SCA Water Quality Standard for Specialty Brewing"),
    "sensory": ("https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?w=1000&auto=format&fit=crop&q=80", "Fisiologi Pengecapan Sensorik dan Jalur Persepsi Retronasal", "Sensory Analysis Center / World Coffee Research"),
    "cupping_protocol": ("https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1000&auto=format&fit=crop&q=80", "Protokol Resmi Uji Citarasa Kopi (Cupping) Standar SCA", "Specialty Coffee Association Cupping Protocol"),
    "flavor_wheel": ("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1000&auto=format&fit=crop&q=80", "Roda Rasa Kopi Spesialti dan Identifikasi Spektrum Asam Organik", "SCA & WCR Coffee Taster's Flavor Wheel"),
    "defects": ("https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=1000&auto=format&fit=crop&q=80", "Identifikasi Cacat Fisik dan Defek Sensorik Biji Kopi", "Coffee Quality Institute (CQI) Standards"),
    "grinder": ("https://images.unsplash.com/photo-1589396575653-c09c794ff6a6?w=1000&auto=format&fit=crop&q=80", "Distribusi Ukuran Partikel dan Geometri Mata Pisau (Burr) Grinder", "Specialty Coffee Brewing Equipment Standards"),
    "pourover": ("https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1000&auto=format&fit=crop&q=80", "Ekstraksi Presisi Seduh Manual Pour-Over dengan Dripper V60", "World Brewers Cup Championship Archive"),
    "aeropress": ("https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=1000&auto=format&fit=crop&q=80", "Eksplorasi Metode Seduh Immersion dan Aeropress", "World AeroPress Championship Standards"),
    "coldbrew": ("https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=1000&auto=format&fit=crop&q=80", "Seduhan Ekstraksi Dingin (Cold Brew) dan Konsentrat Minuman", "Specialty Cold Beverage Innovation Lab"),
    "coffee_bar_home": ("https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1000&auto=format&fit=crop&q=80", "Penataan Stasiun Seduh Rumahan yang Rapi dan Ergonomis", "Home Barista Community Standards"),
    "cafe_finance": ("https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1000&auto=format&fit=crop&q=80", "Pemodelan Finansial, Manajemen Arus Kas, dan Kalkulasi HPP Kafe", "Specialty Coffee Association Business Guild"),
    "cafe_design": ("https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1000&auto=format&fit=crop&q=80", "Layout Stasiun Bar Ergonomis dan Alur Kerja Barista Efisien", "Coffee Bar Architecture & Workflow Design"),
    "hospitality": ("https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1000&auto=format&fit=crop&q=80", "Pelayanan Ramah dan Manajemen Pengalaman Tamu di Kedai Kopi", "Specialty Coffee Hospitality Principles"),
    "espresso_machine": ("https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1000&auto=format&fit=crop&q=80", "Ekstraksi Espresso Presisi Menggunakan Mesin Komersial Multi-Boiler", "World Barista Championship Standards")
}

def get_theme_for_lesson(lid, title):
    t = (lid + " " + title).lower()
    if "sejarah" in t or "kaffa" in t:
        return "history"
    elif "rantai nilai" in t or "hulu ke hilir" in t:
        return "value_chain"
    elif "specialty vs" in t or "standar resmi sca" in t:
        return "specialty_vs_commercial"
    elif "gelombang" in t or "wave" in t:
        return "waves"
    elif "keberlanjutan" in t or "fair trade" in t:
        return "sustainability"
    elif "anatomi" in t or "botani" in t or "taksonomi" in t:
        return "botany"
    elif "agroklimat" in t or "mdpl" in t or "elevasi" in t or "naungan" in t or "tanah vulkanik" in t:
        return "agroclimate"
    elif "panen" in t or "petik merah" in t or "brix" in t:
        return "harvest"
    elif "hama" in t or "karat daun" in t:
        return "pests"
    elif "varietas" in t or "silsilah" in t:
        return "varieties"
    elif "label" in t or "dekonstruksi" in t:
        return "label"
    elif "basah" in t or "olah basah" in t or "washed" in t:
        return "washed"
    elif "kering" in t or "olah kering" in t or "natural" in t:
        return "natural"
    elif "honey" in t or "pulped" in t:
        return "honey"
    elif "giling basah" in t or "wet hulled" in t:
        return "giling_basah"
    elif "fermentasi" in t or "anaerob" in t or "maceration" in t:
        return "fermentation"
    elif "termodinamika" in t or "drum" in t or "konduksi" in t or "mesin sangrai" in t:
        return "roast_thermo"
    elif "maillard" in t or "karamelisasi" in t or "first crack" in t or "kimia fase" in t:
        return "roast_chem"
    elif "spektrum" in t or "profil roast" in t or "agtron" in t or "warna sangrai" in t:
        return "roast_profiles"
    elif "degassing" in t or "resting" in t or "emisi co2" in t:
        return "degassing"
    elif "artisan" in t or "cropster" in t or "ror" in t or "airflow" in t or "kurva" in t:
        return "roast_software"
    elif "filtrasi" in t or "ro" in t or "remineralisasi" in t:
        return "water_filtration"
    elif "air" in t or "tds" in t or "kation" in t or "alkalinitas" in t:
        return "water_chem"
    elif "papila" in t or "gustasi" in t or "olfaksi" in t or "fisiologi" in t:
        return "sensory"
    elif "cupping" in t or "breaking crust" in t or "cqi" in t:
        return "cupping_protocol"
    elif "flavor wheel" in t or "le nez" in t or "asam organik" in t:
        return "flavor_wheel"
    elif "defek" in t or "cacat" in t:
        return "defects"
    elif "grinder" in t or "burr" in t or "partikel" in t:
        return "grinder"
    elif "aeropress" in t:
        return "aeropress"
    elif "cold brew" in t or "es kopi" in t:
        return "coldbrew"
    elif "v60" in t or "resep" in t or "seduh" in t or "brewer" in t or "dripper" in t:
        return "pourover"
    elif "finansial" in t or "capex" in t or "opex" in t or "bep" in t or "hpp" in t or "pricing" in t:
        return "cafe_finance"
    elif "kokpit" in t or "desain" in t or "layout" in t:
        return "cafe_design"
    elif "hospitality" in t or "pelanggan" in t or "keluhan" in t or "komunitas" in t:
        return "hospitality"
    elif "espresso" in t:
        return "espresso_machine"
    else:
        return "pourover"

def enrich_file(filepath):
    if not os.path.exists(filepath):
        print(f"File not found: {filepath}")
        return

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Regex to match each lesson block:
    # id: "les-xxx" ... title: "..." ... content: `...`
    pattern = re.compile(r'(\{\s*id:\s*[\'\"](les-[^\'\"]+)[\'\"].*?title:\s*[\'\"]([^\'\"]+)[\'\"].*?content:\s*`)([^`]+)(`.*?\})', re.DOTALL)

    modified_count = 0

    def replacer(match):
        nonlocal modified_count
        prefix = match.group(1)
        lid = match.group(2)
        title = match.group(3)
        body = match.group(4)
        suffix = match.group(5)

        # Check if body already has image
        if '![' in body:
            return match.group(0)

        theme = get_theme_for_lesson(lid, title)
        img_url, img_desc, credit = THEME_IMAGES[theme]

        # Clean title for heading
        clean_title = re.sub(r'^[A-Z0-9\.\-\:\s]+:\s*', '', title)
        if not clean_title:
            clean_title = title

        image_block = f"![{title}]({img_url})\n*Ilustrasi / Foto: {img_desc} — Sumber / Kredit: {credit}*\n\n"

        # Find the first markdown header # ...
        h1_match = re.search(r'(#\s+[^\n]+\n)', body)
        if h1_match:
            end_pos = h1_match.end()
            new_body = body[:end_pos] + "\n" + image_block + body[end_pos:].lstrip('\n')
        else:
            new_body = f"\n# {title}\n\n" + image_block + body.lstrip('\n')

        modified_count += 1
        return prefix + new_body + suffix

    new_content = pattern.sub(replacer, content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)

    print(f"Updated {filepath}: added images to {modified_count} lessons.")

files_to_enrich = [
    'lib/data/seedData.ts',
    'lib/data/paths/homeBrewerData.ts',
    'lib/data/paths/roasterData.ts',
    'lib/data/paths/qGraderData.ts',
    'lib/data/paths/postHarvestData.ts',
    'lib/data/paths/coffeeBusinessData.ts'
]

for f in files_to_enrich:
    enrich_file(f)

print("Enrichment process completed!")
