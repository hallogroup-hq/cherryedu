'use client';

import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  Search, 
  Filter, 
  Layers, 
  Mountain, 
  ShieldCheck, 
  ShieldAlert, 
  Coffee, 
  GitFork, 
  Award, 
  Info, 
  BookOpen, 
  ChevronRight, 
  Globe2,
  TreePine,
  ExternalLink
} from 'lucide-react';

export interface CoffeeVariety {
  id: string;
  name: string;
  localAliases?: string;
  category: 'nusantara' | 'world_heritage' | 'exotic_competition' | 'non_arabica';
  species: 'Coffea arabica' | 'Coffea canephora' | 'Coffea liberica' | 'Coffea eugenioides';
  lineage: string;
  historyOrigin: string;
  optimalAltitude: string;
  leafRustResistance: 'Tinggi (Tahan)' | 'Sedang (Moderat)' | 'Rentan (Rendah)';
  plantStature: 'Tinggi (Tall)' | 'Kerdil (Compact/Dwarf)' | 'Pohon Raksasa (Giant Tree)';
  yieldPotential: 'Tinggi' | 'Sedang' | 'Rendah (Eksklusif)';
  cuppingPotential: '88 – 94+ Poin (Championship / World Class)' | '84 – 88 Poin (Specialty Grade)' | '80 – 84 Poin (Very Good / Premium)';
  flavorProfile: string;
  primaryRegions: string;
  botanicalDescription: string;
  sensoryRoastingNotes: string;
}

export const COFFEE_VARIETIES: CoffeeVariety[] = [
  // ==========================================
  // KELOMPOK 1: VARIETAS UNGGUL NUSANTARA
  // ==========================================
  {
    id: 'var-ateng-super',
    name: 'Ateng Super (Ateng Jaluk)',
    localAliases: 'Catimor Jaluk, Ateng Aceh',
    category: 'nusantara',
    species: 'Coffea arabica',
    lineage: 'Kelompok Catimor (Caturra x Hibrido de Timor)',
    historyOrigin: 'Dikembangkan di Aceh Tengah pada akhir 1980-an dari introduksi bibit Catimor. Menjadi tulang punggung perkebunan rakyat Gayo.',
    optimalAltitude: '1.200 – 1.700 mdpl',
    leafRustResistance: 'Tinggi (Tahan)',
    plantStature: 'Kerdil (Compact/Dwarf)',
    yieldPotential: 'Tinggi',
    cuppingPotential: '84 – 88 Poin (Specialty Grade)',
    flavorProfile: 'Dark chocolate, sweet spices (kayu manis, pala), gula aren, ripe blackberry, heavy syrupy body.',
    primaryRegions: 'Dataran Tinggi Gayo (Aceh), Sumatra Utara, Flores Manggarai.',
    botanicalDescription: 'Pohon bertubuh kerdil dengan ruas percabangan sangat rapat. Daun muda berwarna hijau mengkilap. Mulai berbuah lebat pada umur 2 tahun.',
    sensoryRoastingNotes: 'Karena densitasnya yang baik pada ketinggian >1.400 mdpl, tahan terhadap energi panas konveksi drum roaster. Sangat ideal untuk profil sangrai filter berbody tebal maupun espresso blend klasik.',
  },
  {
    id: 'var-tim-tim',
    name: 'Tim-Tim (Timor Timur)',
    localAliases: 'HDT Gayo, Bor-Bor',
    category: 'nusantara',
    species: 'Coffea arabica',
    lineage: 'Hibrido de Timor (HDT) Alami Murni (Arabika x Robusta spontan 1917)',
    historyOrigin: 'Bibit dibawa langsung dari Timor Timur pada 1978–1980 ke Takengon dan Bener Meriah, Aceh Tengah.',
    optimalAltitude: '1.300 – 1.800 mdpl',
    leafRustResistance: 'Tinggi (Tahan)',
    plantStature: 'Tinggi (Tall)',
    yieldPotential: 'Sedang',
    cuppingPotential: '84 – 88 Poin (Specialty Grade)',
    flavorProfile: 'Lemongrass (serai segar), blackcurrant, dark plum, sweet herbal tea, cane sugar, clean lingering aftertaste.',
    primaryRegions: 'Aceh Gayo (Pantan Musara, Pegasing, Atu Lintang), Flores Golewa.',
    botanicalDescription: 'Tajuk pohon tinggi semi-melebar dengan daun lebar tebal berwarna hijau gelap. Mewarisi genetik tetraploid stabil dengan sistem perakaran kokoh.',
    sensoryRoastingNotes: 'Menghasilkan keasaman malat yang sangat jernih saat diproses Washed. Pada sangraian Light-Medium, memunculkan aroma herbal serai manis yang menjadi ciri khas kopi Gayo murni.',
  },
  {
    id: 'var-sigarar-utang',
    name: 'Sigarar Utang',
    localAliases: 'Si Pelunas Hutang, Kopi Toba',
    category: 'nusantara',
    species: 'Coffea arabica',
    lineage: 'Seleksi Lokal Typica x Catimor Humbang Hasundutan',
    historyOrigin: 'Ditemukan di Desa Siborong-borong & Onan Ganjang, Danau Toba. Resmi dilepas sebagai varietas nasional oleh Kementan RI pada tahun 2005.',
    optimalAltitude: '1.200 – 1.600 mdpl',
    leafRustResistance: 'Sedang (Moderat)',
    plantStature: 'Kerdil (Compact/Dwarf)',
    yieldPotential: 'Tinggi',
    cuppingPotential: '84 – 88 Poin (Specialty Grade)',
    flavorProfile: 'Peach (buah persik manis), mandarin orange, dried plum, brown sugar, vibrant malic acidity.',
    primaryRegions: 'Lintong Nihuta, Humbang Hasundutan, Dairi, Danau Toba, Kerinci.',
    botanicalDescription: 'Pohon semi-kerdil dengan sifat continuous flowering (berbunga dan berbuah sepanjang tahun tanpa jeda musim kering yang panjang). Biji berukuran sedang hingga besar lonjong.',
    sensoryRoastingNotes: 'Kandungan sukrosa alaminya tinggi sehingga fase karamelisasi menghasilkan aroma gula aren legit. Memiliki kejernihan keasaman buah yang paling menonjol di antara kopi Sumatra.',
  },
  {
    id: 'var-s795',
    name: 'S-795 ("Jember")',
    localAliases: 'Varietas Jember, Kalosi Asli',
    category: 'nusantara',
    species: 'Coffea arabica',
    lineage: 'Persilangan Kent x S.288 (Balehonnur Research Station, India)',
    historyOrigin: 'Diimpor dari India pada tahun 1955 melalui Balai Penelitian Tanaman Pemanis dan Serat (Balitkopi) di Jember, Jawa Timur, lalu menyebar ke Tana Toraja.',
    optimalAltitude: '1.350 – 1.900 mdpl',
    leafRustResistance: 'Sedang (Moderat)',
    plantStature: 'Tinggi (Tall)',
    yieldPotential: 'Sedang',
    cuppingPotential: '88 – 94+ Poin (Championship / World Class)',
    flavorProfile: 'Dark chocolate 80%, sweet maple syrup, ripe red plum, warm nutmeg, balanced citric-malic acidity, velvety mouthfeel.',
    primaryRegions: 'Tana Toraja (Sapan, Pulu-Pulu), Enrekang Duri, Mamasa, Ijen Raung.',
    botanicalDescription: 'Pohon berkanopi lebat berbentuk kubah tinggi. Buah ceri berbentuk lonjong meruncing dengan warna merah tua marun saat matang. Pucuk daun muda bergradasi cokelat muda.',
    sensoryRoastingNotes: 'Biji berdensitas Strictly Hard Bean (SHB) sangat padat di Toraja 1.800 mdpl. Mampu menyerap energi panas tinggi pada awal sangrai, menghasilkan aroma cokelat rempah yang sangat anggun dan aftertaste panjang.',
  },
  {
    id: 'var-typica-priangan',
    name: 'Typica Priangan (Java Typica)',
    localAliases: 'Bergendal, Typica Kolonial VOC',
    category: 'nusantara',
    species: 'Coffea arabica',
    lineage: 'Garis Keturunan Typica Murni Malabar India (1699)',
    historyOrigin: 'Bibit generasi awal yang dibawa VOC ke Jawa Barat pada akhir abad ke-17. Masih bertahan di kantong hutan pegunungan Pangalengan dan Garut.',
    optimalAltitude: '1.400 – 1.800 mdpl',
    leafRustResistance: 'Rentan (Rendah)',
    plantStature: 'Tinggi (Tall)',
    yieldPotential: 'Rendah (Eksklusif)',
    cuppingPotential: '88 – 94+ Poin (Championship / World Class)',
    flavorProfile: 'Jasmine blossom (melati putih), bergamot Earl Grey tea, crisp green apple, cane sugar, clean silky mouthfeel.',
    primaryRegions: 'Pangalengan (Malabar, Wayang Windu), Garut (Cikuray), Gunung Puntang.',
    botanicalDescription: 'Pohon berbentuk kerucut ramping dengan sudut cabang 45°. Ciri mutlak: pucuk daun muda berwarna cokelat perunggu (bronze tips). Buah bertangkai panjang dan biji lonjong memanjang pipih.',
    sensoryRoastingNotes: 'Biji bangsawan dengan kadar kebersihan rasa (clean cup) paling murni di pulau Jawa. Wajib disangrai Light Roast untuk seduhan manual V60 guna mempertahankan wangi parfum melati yang mudah menguap.',
  },
  {
    id: 'var-jurung',
    name: 'Jurung (Typica Purba Flores)',
    localAliases: 'Kopi Jurung Colol, Typica Manggarai',
    category: 'nusantara',
    species: 'Coffea arabica',
    lineage: 'Keturunan Typica introduksi Belanda abad ke-19',
    historyOrigin: 'Ditanam secara turun-temurun oleh masyarakat adat Lembah Colol, Manggarai Timur, Flores NTT di tengah hutan lindung alami.',
    optimalAltitude: '1.300 – 1.750 mdpl',
    leafRustResistance: 'Rentan (Rendah)',
    plantStature: 'Tinggi (Tall)',
    yieldPotential: 'Rendah (Eksklusif)',
    cuppingPotential: '88 – 94+ Poin (Championship / World Class)',
    flavorProfile: 'Lemon verbena, apricot kuning, sparkling phosphoric acidity, wildflower honey, silky tea-like finish.',
    primaryRegions: 'Lembah Colol, Poco Ranaka, Manggarai Timur, Flores NTT.',
    botanicalDescription: 'Pohon tua dengan batang berkayu keras dan pucuk daun berwarna perunggu kemerahan. Tumbuh bersimbiosis di bawah pohon hutan purba tanpa input kimia.',
    sensoryRoastingNotes: 'Menghadirkan keasaman sparkling yang mirip dengan kopi Afrika Timur (Kenya/Ethiopia) berkat kandungan mineral tanah vulkanik Flores.',
  },
  {
    id: 'var-kartika',
    name: 'Kartika',
    localAliases: 'Catimor P-88',
    category: 'nusantara',
    species: 'Coffea arabica',
    lineage: 'Galur Murni Catimor Introduksi Portugal',
    historyOrigin: 'Diseleksi dan diadaptasikan oleh Balitkopi Jember untuk kondisi iklim Indonesia. Dilepas resmi sebagai varietas unggul nasional pada dekade 1990-an.',
    optimalAltitude: '1.100 – 1.600 mdpl',
    leafRustResistance: 'Tinggi (Tahan)',
    plantStature: 'Kerdil (Compact/Dwarf)',
    yieldPotential: 'Tinggi',
    cuppingPotential: '84 – 88 Poin (Specialty Grade)',
    flavorProfile: 'Red apple, brown sugar, roasted almond, orange peel zest, clean balanced acidity.',
    primaryRegions: 'Jawa Barat (Ciwidey), Temanggung (Sindoro-Sumbing), Ijen Raung, Kerinci.',
    botanicalDescription: 'Pohon ramping pendek dengan daun lebar hijau tua. Buah berdompol rapat di ketiak daun dengan waktu pematangan yang serempak.',
    sensoryRoastingNotes: 'Sangat konsisten dan mudah disangrai. Menghasilkan rasa manis karamel yang ramah di lidah pemula.',
  },
  {
    id: 'var-andungsari',
    name: 'Andungsari 1',
    localAliases: 'Andung Sari Balitkopi',
    category: 'nusantara',
    species: 'Coffea arabica',
    lineage: 'Seleksi galur murni Catimor dataran tinggi Jawa Timur',
    historyOrigin: 'Dihasilkan dari seleksi kebun percobaan Balitkopi di Andungsari, Bondowoso lereng Gunung Ijen.',
    optimalAltitude: '1.200 – 1.650 mdpl',
    leafRustResistance: 'Tinggi (Tahan)',
    plantStature: 'Kerdil (Compact/Dwarf)',
    yieldPotential: 'Tinggi',
    cuppingPotential: '84 – 88 Poin (Specialty Grade)',
    flavorProfile: 'Crisp green apple, roasted hazelnut, caramel toffee, delicate floral notes, clean finish.',
    primaryRegions: 'Lereng Gunung Ijen & Raung (Bondowoso), Banyuwangi, Argopuro.',
    botanicalDescription: 'Pohon kompak dengan percabangan mendatar rapat. Biji berukuran besar dan berbobot seragam dengan rasio peaberry rendah.',
    sensoryRoastingNotes: 'Sangat cocok untuk proses Full Washed dan Honey. Memiliki ketahanan panas yang baik saat drum roaster dipacu pada fase drying.',
  },
  {
    id: 'var-kobra',
    name: 'Kobra (Komposit Kintamani)',
    localAliases: 'Arabika Kintamani, Kobra Bali',
    category: 'nusantara',
    species: 'Coffea arabica',
    lineage: 'Komposit varietas adaptif Bali Kintamani',
    historyOrigin: 'Populasi tanaman Arabika yang telah beradaptasi berpuluh tahun di kaldera Gunung Batur dan perkebunan jeruk Subak Abian Bali.',
    optimalAltitude: '1.200 – 1.550 mdpl',
    leafRustResistance: 'Sedang (Moderat)',
    plantStature: 'Tinggi (Tall)',
    yieldPotential: 'Sedang',
    cuppingPotential: '84 – 88 Poin (Specialty Grade)',
    flavorProfile: 'Tangerine / jeruk keprok manis, vanilla pod, brown butter, subtle milk chocolate, sweet honey aftertaste.',
    primaryRegions: 'Kecamatan Kintamani (Ulian, Belantih, Mengani), Bangli, Bali.',
    botanicalDescription: 'Pohon berdaun lebat yang ditanam berselingan dengan pohon jeruk keprok Kintamani dalam sistem irigasi sakral Subak Abian.',
    sensoryRoastingNotes: 'Minyak kulit jeruk alami dan keasaman sitratnya sangat responsif pada profiling sangrai Light-Medium filter.',
  },
  {
    id: 'var-usda762',
    name: 'USDA 762',
    localAliases: 'Java USDA, Klon 762',
    category: 'nusantara',
    species: 'Coffea arabica',
    lineage: 'Seleksi Arabika asal Ethiopia via Departemen Pertanian AS (USDA)',
    historyOrigin: 'Dibawa ke Indonesia pada tahun 1950-an untuk kebun percobaan Jawa Timur, terbukti sangat adaptif di dataran tinggi tanah karst Ijen.',
    optimalAltitude: '1.300 – 1.700 mdpl',
    leafRustResistance: 'Sedang (Moderat)',
    plantStature: 'Tinggi (Tall)',
    yieldPotential: 'Sedang',
    cuppingPotential: '84 – 88 Poin (Specialty Grade)',
    flavorProfile: 'Ripe plum, sweet red cherry, cocoa nibs, brown sugar, mild spice, round body.',
    primaryRegions: 'Bondowoso, Kalisat Jampit, lereng Gunung Raung Jawa Timur.',
    botanicalDescription: 'Cabang panjang lentur dengan daun bergelombang. Biji berukuran sedang dengan belahan tengah rapat.',
    sensoryRoastingNotes: 'Kerapatan biji yang padat menjadikannya favorit roastery specialty untuk campuran espresso blend bertubuh penuh.',
  },

  // ==========================================
  // KELOMPOK 2: LELUHUR KLASIK DUNIA (WORLD HERITAGE)
  // ==========================================
  {
    id: 'var-typica-original',
    name: 'Typica (The Noble Ancestor)',
    localAliases: 'Criollo, Arabigo',
    category: 'world_heritage',
    species: 'Coffea arabica',
    lineage: 'Leluhur genetik asli Arabika purba Ethiopia & Yaman',
    historyOrigin: 'Pohon kopi pertama yang diekspor keluar dari semenanjung Arab. Dari Batavia (1696) menyebar ke Kebun Raya Amsterdam, lalu ke Karibia dan Amerika Selatan.',
    optimalAltitude: '1.400 – 2.000 mdpl',
    leafRustResistance: 'Rentan (Rendah)',
    plantStature: 'Tinggi (Tall)',
    yieldPotential: 'Rendah (Eksklusif)',
    cuppingPotential: '88 – 94+ Poin (Championship / World Class)',
    flavorProfile: 'Exquisite floral jasmine, black tea, bright lemon, sweet cane sugar, delicate silky body.',
    primaryRegions: 'Indonesia, Jamaika (Blue Mountain), Hawaii (Kona), Peru, Guatemala.',
    botanicalDescription: 'Tajuk kerucut dengan cabang lentur berjarak renggang. Pucuk daun muda selalu berwarna cokelat perunggu (bronze tips). Biji lonjong ramping.',
    sensoryRoastingNotes: 'Sangat sensitif terhadap over-roasting. Jika dipanggang terlalu gelap, seluruh keanggunan aroma bunganya akan musnah.',
  },
  {
    id: 'var-bourbon',
    name: 'Red Bourbon (The Sweet Powerhouse)',
    localAliases: 'Bourbon Rouge',
    category: 'world_heritage',
    species: 'Coffea arabica',
    lineage: 'Garis keturunan langsung mutasi alami Typica di Yaman',
    historyOrigin: 'Ditanam oleh misionaris Prancis di Pulau Bourbon (sekarang Pulau Réunion) pada 1708 sebelum menyebar ke Amerika Latin pada abad ke-19.',
    optimalAltitude: '1.200 – 1.900 mdpl',
    leafRustResistance: 'Rentan (Rendah)',
    plantStature: 'Tinggi (Tall)',
    yieldPotential: 'Sedang',
    cuppingPotential: '88 – 94+ Poin (Championship / World Class)',
    flavorProfile: 'Complex sweetness (toffee, caramel), red apple, sweet plum, milk chocolate, round creamy body.',
    primaryRegions: 'Rwanda, Burundi, El Salvador, Guatemala, Brazil.',
    botanicalDescription: 'Cabang lebih tegak dibanding Typica dengan buku buah berkerumun padat. Daun muda berwarna hijau terang. Buah bulat berisi dua biji gemuk bulat.',
    sensoryRoastingNotes: 'Memiliki konsentrasi gula sukrosa alami 20-30% lebih tinggi dari Typica. Fase karamelisasi menghasilkan aroma toffee mentega yang luar biasa kaya.',
  },
  {
    id: 'var-yellow-bourbon',
    name: 'Yellow Bourbon',
    localAliases: 'Bourbon Amarelo',
    category: 'world_heritage',
    species: 'Coffea arabica',
    lineage: 'Mutasi alami Bourbon (atau persilangan dengan Botucatu kuning)',
    historyOrigin: 'Ditemukan di Brazil pada tahun 1930-an. Ceri matang berwarna kuning keemasan cerah akibat ekspresi genetik resesif.',
    optimalAltitude: '1.100 – 1.700 mdpl',
    leafRustResistance: 'Rentan (Rendah)',
    plantStature: 'Tinggi (Tall)',
    yieldPotential: 'Sedang',
    cuppingPotential: '84 – 88 Poin (Specialty Grade)',
    flavorProfile: 'Sweet apricot, yellow peach, buttery caramel, hazelnut, mild citric acidity, soft creamy finish.',
    primaryRegions: 'Brazil (Sul de Minas, Cerrado), Kolombia, Flores Bajawa.',
    botanicalDescription: 'Identik dengan Red Bourbon dalam struktur pohon, namun pigmen antosianin merah tidak terbentuk sehingga buah tetap berwarna kuning terang saat matang optimal.',
    sensoryRoastingNotes: 'Karakter rasa mentega dan kacang manisnya sangat disukai untuk profil sangrai espresso modern berbasis susu.',
  },
  {
    id: 'var-caturra',
    name: 'Caturra',
    localAliases: 'Caturra Amarelo / Vermelho',
    category: 'world_heritage',
    species: 'Coffea arabica',
    lineage: 'Mutasi kerdil gen tunggal alami dari Bourbon',
    historyOrigin: 'Ditemukan di negara bagian Minas Gerais, Brazil pada tahun 1937 oleh Instituto Agronômico de Campinas (IAC).',
    optimalAltitude: '1.200 – 1.800 mdpl',
    leafRustResistance: 'Rentan (Rendah)',
    plantStature: 'Kerdil (Compact/Dwarf)',
    yieldPotential: 'Tinggi',
    cuppingPotential: '84 – 88 Poin (Specialty Grade)',
    flavorProfile: 'Bright citric lemon, lime, red cherry, brown sugar, medium crisp body.',
    primaryRegions: 'Kolombia, Kosta Rika, Guatemala, Nikaragua, Flores Bajawa.',
    botanicalDescription: 'Pohon berukuran kompak pendek yang memungkinkan penanaman berkepadatan tinggi (high density planting). Memudahkan pemetikan tanpa tangga.',
    sensoryRoastingNotes: 'Menghasilkan keasaman sitrat yang renyah dan tajam pada proses Washed dataran tinggi Kolombia dan Amerika Tengah.',
  },
  {
    id: 'var-catuai',
    name: 'Catuai',
    localAliases: 'Catuai Vermelho / Amarelo',
    category: 'world_heritage',
    species: 'Coffea arabica',
    lineage: 'Persilangan buatan Mundo Novo x Caturra',
    historyOrigin: 'Diciptakan di IAC Brazil pada 1949 dan dilepas ke publik pada 1972. Namanya berarti "sangat baik" dalam bahasa pribumi Tupi-Guarani.',
    optimalAltitude: '1.000 – 1.600 mdpl',
    leafRustResistance: 'Rentan (Rendah)',
    plantStature: 'Kerdil (Compact/Dwarf)',
    yieldPotential: 'Tinggi',
    cuppingPotential: '80 – 84 Poin (Very Good / Premium)',
    flavorProfile: 'Milk chocolate, roasted peanut, cane sugar, mild apple acidity, smooth clean body.',
    primaryRegions: 'Brazil, Honduras, Kosta Rika, Panama, Jawa Barat.',
    botanicalDescription: 'Pohon kerdil yang sangat kokoh terhadap hembusan angin kencang dan badai hujan. Buah menempel sangat erat pada ranting sehingga tidak mudah rontok sebelum matang.',
    sensoryRoastingNotes: 'Sangat andal dan ramah operator sangrai. Menghasilkan profil rasa manis kacang cokelat yang stabil sepanjang musim.',
  },
  {
    id: 'var-mundo-novo',
    name: 'Mundo Novo',
    localAliases: 'New World',
    category: 'world_heritage',
    species: 'Coffea arabica',
    lineage: 'Persilangan alami spontan antara Typica x Bourbon',
    historyOrigin: 'Ditemukan di kotamadya Mundo Novo (sekarang Urupês), Sao Paulo, Brazil pada tahun 1943.',
    optimalAltitude: '1.000 – 1.500 mdpl',
    leafRustResistance: 'Rentan (Rendah)',
    plantStature: 'Tinggi (Tall)',
    yieldPotential: 'Tinggi',
    cuppingPotential: '80 – 84 Poin (Very Good / Premium)',
    flavorProfile: 'Dark chocolate, roasted walnut, sweet molasses, malt, heavy rounded body.',
    primaryRegions: 'Brazil, Meksiko, Peru.',
    botanicalDescription: 'Pohon berukuran sangat jangkung dan bertenaga dengan tajuk rimbun. Tahan terhadap pemangkasan berat dan berbuah lebat.',
    sensoryRoastingNotes: 'Pilihan klasik roaster dunia untuk base espresso komersial karena menghasilkan body tebal dan stabilitas krema yang solid.',
  },
  {
    id: 'var-maragogipe',
    name: 'Maragogipe (Elephant Bean)',
    localAliases: 'Kopi Gajah, Maragogype',
    category: 'world_heritage',
    species: 'Coffea arabica',
    lineage: 'Mutasi spontan raksasa dari Typica murni',
    historyOrigin: 'Ditemukan di dekat kota Maragogipe, Bahia, Brazil pada tahun 1870.',
    optimalAltitude: '1.200 – 1.700 mdpl',
    leafRustResistance: 'Rentan (Rendah)',
    plantStature: 'Tinggi (Tall)',
    yieldPotential: 'Rendah (Eksklusif)',
    cuppingPotential: '84 – 88 Poin (Specialty Grade)',
    flavorProfile: 'Delicate floral, sweet cedar wood, soft apricot, raw cane sugar, light tea-like body.',
    primaryRegions: 'Nikaragua, Meksiko, Guatemala, Kerinci (Jambi).',
    botanicalDescription: 'Seluruh organ tanaman berukuran raksasa: daun selebar telapak tangan, bunga besar, dan biji kopi dua kali lipat lebih besar dibanding biji biasa (screen size 19-20+).',
    sensoryRoastingNotes: 'Membutuhkan penyesuaian khusus pada drum roaster: airflow harus cukup kuat untuk meniup biji raksasa ini agar panas merata hingga ke inti sel biji.',
  },
  {
    id: 'var-pacas',
    name: 'Pacas',
    localAliases: 'San Salvador Dwarf',
    category: 'world_heritage',
    species: 'Coffea arabica',
    lineage: 'Mutasi kerdil alami dari Bourbon di El Salvador',
    historyOrigin: 'Ditemukan oleh keluarga petani Pacas di lereng gunung berapi Santa Ana, El Salvador pada tahun 1949.',
    optimalAltitude: '1.200 – 1.700 mdpl',
    leafRustResistance: 'Rentan (Rendah)',
    plantStature: 'Kerdil (Compact/Dwarf)',
    yieldPotential: 'Tinggi',
    cuppingPotential: '84 – 88 Poin (Specialty Grade)',
    flavorProfile: 'Sweet red apple, brown sugar, hazelnut, mild balanced acidity, medium body.',
    primaryRegions: 'El Salvador, Honduras.',
    botanicalDescription: 'Pohon kerdil yang sangat adaptif di tanah vulkanik berbatu dan tahan terhadap kekeringan musim kemarau.',
    sensoryRoastingNotes: 'Menjadi salah satu tetua genetik dari persilangan legendaris Pacamara.',
  },

  // ==========================================
  // KELOMPOK 3: EKSOTIS & JUARA DUNIA (COMPETITION ROYALTY)
  // ==========================================
  {
    id: 'var-geisha',
    name: 'Geisha / Gesha (The Crown Jewel)',
    localAliases: 'Panama Geisha, Gesha 1931',
    category: 'exotic_competition',
    species: 'Coffea arabica',
    lineage: 'Populasi liar hutan pegunungan Gori Gesha, Ethiopia Barat Daya',
    historyOrigin: 'Dikoleksi pada 1931 di Ethiopia, dibawa ke Kosta Rika pada 1953, dan ditanam di Boquete Panama. Mengguncang lelang Best of Panama 2004 di kebun Hacienda La Esmeralda.',
    optimalAltitude: '1.500 – 2.100 mdpl',
    leafRustResistance: 'Rentan (Rendah)',
    plantStature: 'Tinggi (Tall)',
    yieldPotential: 'Rendah (Eksklusif)',
    cuppingPotential: '88 – 94+ Poin (Championship / World Class)',
    flavorProfile: 'Intense perfume floral (jasmine, orange blossom), Earl Grey bergamot, white peach, lychee, lemongrass, sparkling crystalline acidity.',
    primaryRegions: 'Panama (Boquete, Volcan), Kolombia (Huila), Kosta Rika, Ethiopia, beberapa kebun micro-lot Jawa Barat.',
    botanicalDescription: 'Cabang panjang terkulai lembut dengan buku buah berjauhan. Daun berbentuk lanset sempit memanjang dengan pucuk daun muda berwarna perunggu atau hijau muda.',
    sensoryRoastingNotes: 'Kopi dengan harga lelang termahal di dunia (mencapai ribuan dolar per kg). Wajib disangrai Ultra-Light dengan RoR presisi tinggi untuk menjaga minyak esensial bunga melati dan buah persik.',
  },
  {
    id: 'var-sl28',
    name: 'SL-28 (Kenya Superstar)',
    localAliases: 'Scott Labs 28',
    category: 'exotic_competition',
    species: 'Coffea arabica',
    lineage: 'Seleksi Scott Agricultural Laboratories dari varietas Tanganyika',
    historyOrigin: 'Diseleksi di Kenya pada tahun 1931 dengan target ketahanan terhadap kekeringan kemarau panjang dataran tinggi Afrika Timur.',
    optimalAltitude: '1.500 – 2.000 mdpl',
    leafRustResistance: 'Rentan (Rendah)',
    plantStature: 'Tinggi (Tall)',
    yieldPotential: 'Sedang',
    cuppingPotential: '88 – 94+ Poin (Championship / World Class)',
    flavorProfile: 'Explosive blackcurrant, red currant, sparkling phosphoric cola acidity, sweet tomato jam, grapefruit, juicy mouthfeel.',
    primaryRegions: 'Kenya (Nyeri, Kirinyaga), Tanzania, Kolombia, Kosta Rika.',
    botanicalDescription: 'Pohon berakar tunggang sangat dalam yang mampu mencari sumber air di tanah kering. Buah ceri besar bulat dengan warna merah delima matang.',
    sensoryRoastingNotes: 'Ikon rasa asam buah beri hitam (blackcurrant) paling terkenal di dunia kopi. Kandungan asam fosfat dan asam sitratnya yang tinggi memberikan sensasi meletup di langit-langit mulut.',
  },
  {
    id: 'var-sl34',
    name: 'SL-34',
    localAliases: 'Scott Labs 34',
    category: 'exotic_competition',
    species: 'Coffea arabica',
    lineage: 'Seleksi Scott Laboratories dari pohon tunggal di Loresho, Kenya',
    historyOrigin: 'Diseleksi untuk dataran tinggi Kenya dengan curah hujan lebat di lereng Gunung Kenya dan Pegunungan Aberdare.',
    optimalAltitude: '1.600 – 2.100 mdpl',
    leafRustResistance: 'Rentan (Rendah)',
    plantStature: 'Tinggi (Tall)',
    yieldPotential: 'Tinggi',
    cuppingPotential: '88 – 94+ Poin (Championship / World Class)',
    flavorProfile: 'Dark berry, sweet dark plum, citrus grapefruit, complex brown sugar, heavy syrupy body.',
    primaryRegions: 'Kenya, Amerika Tengah.',
    botanicalDescription: 'Mirip dengan SL-28 namun memiliki pucuk daun muda berwarna perunggu (bronze tips) dan lebih adaptif pada curah hujan ekstrem.',
    sensoryRoastingNotes: 'Memiliki body yang lebih tebal dan tekstur lebih padat dibanding SL-28, sangat mewah untuk seduhan filter manual brew.',
  },
  {
    id: 'var-pacamara',
    name: 'Pacamara',
    localAliases: 'Pacamara ISIC',
    category: 'exotic_competition',
    species: 'Coffea arabica',
    lineage: 'Persilangan buatan Pacas x Maragogipe (ISIC El Salvador 1958)',
    historyOrigin: 'Diciptakan melalui riset ilmiah 30 tahun di El Salvador untuk menggabungkan kepraktisan pohon kerdil Pacas dengan biji raksasa Maragogipe.',
    optimalAltitude: '1.300 – 1.800 mdpl',
    leafRustResistance: 'Rentan (Rendah)',
    plantStature: 'Kerdil (Compact/Dwarf)',
    yieldPotential: 'Sedang',
    cuppingPotential: '88 – 94+ Poin (Championship / World Class)',
    flavorProfile: 'Passionfruit (markisa asam manis), sweet lemongrass, tropical mango, warm clove spice, dark chocolate, creamy velvety mouthfeel.',
    primaryRegions: 'El Salvador, Guatemala, Nikaragua, Honduras.',
    botanicalDescription: 'Pohon berpostur pendek kompak namun memiliki daun bergelombang tebal dan biji kopi berukuran luar biasa raksasa.',
    sensoryRoastingNotes: 'Juara langganan Cup of Excellence (CoE). Menyimpan kombinasi rasa rempah manis eksotis dan buah markisa tropis yang sangat unik.',
  },
  {
    id: 'var-wush-wush',
    name: 'Wush Wush',
    localAliases: 'Ethiopian Heirloom Wushwush',
    category: 'exotic_competition',
    species: 'Coffea arabica',
    lineage: 'Kultivar langka liar dari kawasan Wushwush, Kaffa Ethiopia',
    historyOrigin: 'Berasal dari desa Wushwush di barat daya Ethiopia, kemudian dibawa ke perkebunan inovatif Kolombia (seperti Finca La Inmaculada).',
    optimalAltitude: '1.600 – 2.100 mdpl',
    leafRustResistance: 'Rentan (Rendah)',
    plantStature: 'Tinggi (Tall)',
    yieldPotential: 'Rendah (Eksklusif)',
    cuppingPotential: '88 – 94+ Poin (Championship / World Class)',
    flavorProfile: 'Intense tropical lychee, wild lavender, candied ginger, purple grape, raw cane honey, super complex acidity.',
    primaryRegions: 'Ethiopia Barat Daya, Kolombia (Cauca, Valle del Cauca).',
    botanicalDescription: 'Struktur pohon liar dengan kanopi ramping. Buah ceri kecil bulat dengan konsentrasi gula brix luar biasa tinggi.',
    sensoryRoastingNotes: 'Varietas rahasia para finalis World Brewers Cup karena aroma buah tropis leci dan bunganya yang sangat pekat melompat dari cangkir.',
  },
  {
    id: 'var-eugenioides',
    name: 'Coffea Eugenioides (The Ancestral Mother)',
    localAliases: 'Eugenioides',
    category: 'exotic_competition',
    species: 'Coffea eugenioides',
    lineage: 'Spesies diploid purba liar Afrika Timur (Induk kandung Arabika)',
    historyOrigin: 'Berasal dari dataran tinggi danau Albert & Edward di Afrika Tengah (Uganda, Rwanda, DRC).',
    optimalAltitude: '1.400 – 2.000 mdpl',
    leafRustResistance: 'Tinggi (Tahan)',
    plantStature: 'Kerdil (Compact/Dwarf)',
    yieldPotential: 'Rendah (Eksklusif)',
    cuppingPotential: '88 – 94+ Poin (Championship / World Class)',
    flavorProfile: 'Sweet malted milk, marshmallow bakar, sweet corn, papaya candy, ultra-low bitterness, natural sweetness overload.',
    primaryRegions: 'Hutan liar Uganda, Finca Inmaculada Kolombia.',
    botanicalDescription: 'Bukan varietas Arabika, melainkan spesies diploid (22 kromosom). Daun sangat kecil seperti semak teh liar dengan kadar kafein ultra-rendah (hanya 0.2% vs 1.2% pada Arabika).',
    sensoryRoastingNotes: 'Menggemparkan WBC 2021 (digunakan juara dunia Diego Campos). Karena kafeinnya yang sangat rendah, kopi ini hampir tidak memiliki rasa pahit sama sekali, rasanya manis seperti susu sereal madu.',
  },
  {
    id: 'var-pink-bourbon',
    name: 'Pink Bourbon',
    localAliases: 'Bourbon Rosado',
    category: 'exotic_competition',
    species: 'Coffea arabica',
    lineage: 'Kultivar unik Huila Kolombia (diduga hibrida alami Bourbon x Landrace Ethiopia)',
    historyOrigin: 'Muncul di pegunungan San Adolfo, Huila, Kolombia. Buah ceri matang berwarna merah muda (salmon pink) yang sangat memikat.',
    optimalAltitude: '1.600 – 2.100 mdpl',
    leafRustResistance: 'Sedang (Moderat)',
    plantStature: 'Tinggi (Tall)',
    yieldPotential: 'Sedang',
    cuppingPotential: '88 – 94+ Poin (Championship / World Class)',
    flavorProfile: 'Pink papaya, jasmine floral, white peach, pink grapefruit, red currant, silky crystalline aftertaste.',
    primaryRegions: 'Kolombia (Huila, Pitalito, Acevedo).',
    botanicalDescription: 'Pohon berdaun hijau segar dengan pematangan buah yang unik: transisi dari hijau ke kuning pucat, lalu menjadi pink oranye kemerahan.',
    sensoryRoastingNotes: 'Salah satu kopi paling dicari di bar specialty modern saat ini karena kombinasi keanggunan aroma melati dan rasa manis buah pepaya merah muda.',
  },
  {
    id: 'var-sudan-rume',
    name: 'Sudan Rume',
    localAliases: 'Rume Sudan',
    category: 'exotic_competition',
    species: 'Coffea arabica',
    lineage: 'Pohon landrace liar dataran Boma Plateau, Sudan Selatan',
    historyOrigin: 'Ditemukan di Pegunungan Boma pada tahun 1940. Sering digunakan pemulia tanaman sebagai sumber gen ketahanan penyakit.',
    optimalAltitude: '1.500 – 2.000 mdpl',
    leafRustResistance: 'Tinggi (Tahan)',
    plantStature: 'Tinggi (Tall)',
    yieldPotential: 'Rendah (Eksklusif)',
    cuppingPotential: '88 – 94+ Poin (Championship / World Class)',
    flavorProfile: 'Cardamom spice (kapulaga), rose water (bunga mawar), sweet mandarin orange, ginger candy, silky medium body.',
    primaryRegions: 'Sudan Selatan, Kolombia (Las Margaritas).',
    botanicalDescription: 'Pohon bertajuk renggang dengan percabangan lentur. Menghasilkan senyawa monoterpen volatil aromatik rempah bunga yang sangat langka.',
    sensoryRoastingNotes: 'Dipopulerkan oleh Sasa Sestic saat menjuarai World Barista Championship 2015. Memberikan dimensi rasa rempah aromatik dingin yang tiada duanya.',
  },

  // ==========================================
  // KELOMPOK 4: SPESIES NON-ARABIKA BERKUALITAS TINGGI
  // ==========================================
  {
    id: 'var-robusta-tugusari',
    name: 'Fine Robusta Klon Tugusari',
    localAliases: 'Robusta Klon TS, Robusta Dampit',
    category: 'non_arabica',
    species: 'Coffea canephora',
    lineage: 'Seleksi klon unggul Robusta Balitkopi Jember',
    historyOrigin: 'Diteliti di perkebunan Tugusari, Jawa Timur. Menjadi standar emas Robusta ekspor Indonesia di pasar Eropa sejak zaman kolonial.',
    optimalAltitude: '500 – 900 mdpl',
    leafRustResistance: 'Tinggi (Tahan)',
    plantStature: 'Tinggi (Tall)',
    yieldPotential: 'Tinggi',
    cuppingPotential: '80 – 84 Poin (Very Good / Premium)',
    flavorProfile: 'Roasted hazelnut, dark cocoa nibs, caramelized brown sugar, malt biscuit, bold round body tanpa aroma karet gosong.',
    primaryRegions: 'Dampit (Malang), lereng Gunung Semeru, Lampung Barat, Tanggamus.',
    botanicalDescription: 'Tanaman berkayu kuat dengan daun berombak besar dan sistem perakaran serabut yang sangat agresif menyerap hara. Kafein tinggi (2.4%).',
    sensoryRoastingNotes: 'Jika dipanen petik merah 100%, klon ini menghasilkan espresso dengan krema tebal keemasan yang manis dan gurih, sempurna untuk racikan kopi susu aren modern.',
  },
  {
    id: 'var-robusta-bp42',
    name: 'Fine Robusta Klon BP 42',
    localAliases: 'Robusta Temanggung, Klon BP',
    category: 'non_arabica',
    species: 'Coffea canephora',
    lineage: 'Balai Penelitian Perkebunan (BPP) Klon 42',
    historyOrigin: 'Dibudidayakan secara masif oleh petani milenial di lereng Gunung Sindoro dan Sumbing, Temanggung, Jawa Tengah.',
    optimalAltitude: '600 – 950 mdpl',
    leafRustResistance: 'Tinggi (Tahan)',
    plantStature: 'Tinggi (Tall)',
    yieldPotential: 'Tinggi',
    cuppingPotential: '84 – 88 Poin (Specialty Grade)',
    flavorProfile: 'Manis legit gula aren murni, sweet pipe tobacco, dark chocolate truffle, toasted cereal, velvety thick mouthfeel.',
    primaryRegions: 'Kabupaten Temanggung (Kandangan, Gesing), Jawa Tengah.',
    botanicalDescription: 'Klon berbuah dompolan sangat padat dengan rasio biji bernas tinggi. Sangat responsif terhadap fermentasi anaerobik dan ragi modern.',
    sensoryRoastingNotes: 'Kerap meraih skor cupping di atas 83 poin dalam kompetisi Fine Robusta Nusantara. Menghilangkan anggapan bahwa Robusta selalu berasa pahit getir.',
  },
  {
    id: 'var-liberika-tungkal',
    name: 'Liberika Tungkal Komposit',
    localAliases: 'Kopi Gambut, Liberika Jambi',
    category: 'non_arabica',
    species: 'Coffea liberica',
    lineage: 'Populasi adaptif lahan gambut pasang surut Jambi',
    historyOrigin: 'Resmi dilepas oleh Menteri Pertanian RI sebagai varietas unggul lahan gambut dari Kabupaten Tanjung Jabung Barat, Jambi.',
    optimalAltitude: '1 – 50 mdpl (Lahan Gambut Basah)',
    leafRustResistance: 'Tinggi (Tahan)',
    plantStature: 'Pohon Raksasa (Giant Tree)',
    yieldPotential: 'Sedang',
    cuppingPotential: '80 – 84 Poin (Very Good / Premium)',
    flavorProfile: 'Sweet ripe jackfruit (nangka matang), tropical floral, dried tamarind, sweet wood smoke, thick molasses body.',
    primaryRegions: 'Tanjung Jabung Barat (Jambi), Riau, Kepulauan Meranti, Pontianak.',
    botanicalDescription: 'Pohon menjulang tinggi hingga 10-15 meter dengan daun kaku selebar telapak tangan manusia. Ceri berukuran raksasa dengan kulit daging sangat tebal.',
    sensoryRoastingNotes: 'Biji berbentuk asimetris dengan satu sisi membulat dan sisi lain menyudut. Memiliki aroma buah nangka matang yang sangat khas dan unik di dunia kopi.',
  },
  {
    id: 'var-excelsa-wonosalam',
    name: 'Excelsa Wonosalam (Kopi Asam)',
    localAliases: 'Coffea dewevrei, Kopi Wonosalam',
    category: 'non_arabica',
    species: 'Coffea liberica',
    lineage: 'Coffea liberica var. dewevrei',
    historyOrigin: 'Ditanam turun-temurun di lereng Gunung Anjasmoro, Kecamatan Wonosalam, Kabupaten Jombang, Jawa Timur.',
    optimalAltitude: '500 – 800 mdpl',
    leafRustResistance: 'Tinggi (Tahan)',
    plantStature: 'Pohon Raksasa (Giant Tree)',
    yieldPotential: 'Sedang',
    cuppingPotential: '80 – 84 Poin (Very Good / Premium)',
    flavorProfile: 'Tart fruit (asam jawa manis), baked pineapple, dark plum, herbal spice, vibrant fruity body.',
    primaryRegions: 'Wonosalam (Jombang, Jatim), lereng Gunung Wilis.',
    botanicalDescription: 'Daun lebih bergelombang dan lebih lentur dibanding Liberika biasa. Buah ceri berbentuk bulat lonjong dengan tingkat keasaman buah alami yang tinggi.',
    sensoryRoastingNotes: 'Sering digunakan sebagai rahasia blend espresso roaster artisanal untuk memberikan tendangan aroma buah tart asam jawa manis yang tidak bisa dihasilkan Arabika biasa.',
  },
];

export const VarietyCompendium: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [resistanceFilter, setResistanceFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedVariety, setSelectedVariety] = useState<CoffeeVariety | null>(COFFEE_VARIETIES[0]);
  const [activeSubTab, setActiveSubTab] = useState<'catalog' | 'lineage-tree'>('catalog');

  const categories = [
    { id: 'all', label: 'Semua Varietas (30)' },
    { id: 'nusantara', label: 'Unggul Nusantara (10)' },
    { id: 'world_heritage', label: 'Leluhur Klasik Dunia (8)' },
    { id: 'exotic_competition', label: 'Eksotis & Juara Dunia (8)' },
    { id: 'non_arabica', label: 'Non-Arabika (Robusta & Liberika) (4)' },
  ];

  const filteredVarieties = useMemo(() => {
    return COFFEE_VARIETIES.filter((v) => {
      const matchCategory = selectedCategory === 'all' || v.category === selectedCategory;
      const matchResistance = resistanceFilter === 'all' || 
        (resistanceFilter === 'tahan' && v.leafRustResistance.includes('Tahan')) ||
        (resistanceFilter === 'rentan' && v.leafRustResistance.includes('Rentan'));
      
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchCategory && matchResistance;

      const matchText = 
        v.name.toLowerCase().includes(query) ||
        (v.localAliases && v.localAliases.toLowerCase().includes(query)) ||
        v.lineage.toLowerCase().includes(query) ||
        v.primaryRegions.toLowerCase().includes(query) ||
        v.flavorProfile.toLowerCase().includes(query);

      return matchCategory && matchResistance && matchText;
    });
  }, [selectedCategory, resistanceFilter, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Header Ledger */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-l-2 border-cherry-700 pl-4 py-1">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-[10px] uppercase tracking-widest text-cherry-700 font-bold bg-cherry-50 px-2 py-0.5 border border-cherry-200">
              [ BOTANICAL GENETICS // COMPENDIUM ]
            </span>
            <span className="font-mono text-[10px] text-roast-500 uppercase">
              30 VARIETAS KOPI PILIHAN
            </span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-roast-950">
            Ensiklopedia & Silsilah Genetika Varietas Kopi
          </h3>
          <p className="font-sans text-xs text-roast-600 mt-1 max-w-2xl">
            Katalog terlengkap mengenai taksonomi genetik, varietas pusaka nusantara, leluhur klasik dunia, kultivar juara kompetisi, ketahanan hama penyakit, dan profil rasa cangkir.
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs">
          <button
            onClick={() => setActiveSubTab('catalog')}
            className={`px-3 py-1.5 border rounded transition-all flex items-center gap-1.5 ${
              activeSubTab === 'catalog'
                ? 'bg-roast-950 text-paper-50 border-roast-950 font-bold'
                : 'bg-paper-100 text-roast-700 border-paper-300 hover:border-roast-700'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-crema-400" />
            <span>KATALOG DIREKTORI</span>
          </button>
          <button
            onClick={() => setActiveSubTab('lineage-tree')}
            className={`px-3 py-1.5 border rounded transition-all flex items-center gap-1.5 ${
              activeSubTab === 'lineage-tree'
                ? 'bg-roast-950 text-paper-50 border-roast-950 font-bold'
                : 'bg-paper-100 text-roast-700 border-paper-300 hover:border-roast-700'
            }`}
          >
            <GitFork className="w-3.5 h-3.5 text-cherry-600" />
            <span>POHON SILSILAH GENETIK</span>
          </button>
        </div>
      </div>

      {/* ======================================================== */}
      {/* VIEW 1: KATALOG DIREKTORI                                */}
      {/* ======================================================== */}
      {activeSubTab === 'catalog' && (
        <div className="space-y-6">
          {/* Filter and Search Bar */}
          <div className="bg-paper-100/70 border border-paper-300 p-4 rounded-lg space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-roast-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari nama varietas (Tim-Tim, Geisha, S-795), silsilah (Catimor, Typica), rasa, atau daerah..."
                  className="w-full pl-9 pr-4 py-2 bg-paper-50 border border-paper-300 rounded text-xs text-roast-900 placeholder-roast-400 focus:outline-none focus:border-roast-800 font-sans"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-roast-400 hover:text-roast-700 text-xs font-mono"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Resistance Filter */}
              <div className="flex items-center gap-1.5">
                <span className="font-mono text-[10px] text-roast-500 uppercase whitespace-nowrap">
                  Karat Daun:
                </span>
                <select
                  value={resistanceFilter}
                  onChange={(e) => setResistanceFilter(e.target.value)}
                  className="bg-paper-50 border border-paper-300 rounded px-2 py-2 text-xs font-mono text-roast-800 focus:outline-none"
                >
                  <option value="all">Semua Ketahanan</option>
                  <option value="tahan">Tahan (Resistant)</option>
                  <option value="rentan">Rentan (Susceptible)</option>
                </select>
              </div>
            </div>

            {/* Category Filter Chips */}
            <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-paper-200">
              <span className="font-mono text-[10px] uppercase text-roast-500 mr-2 flex items-center gap-1">
                <Filter className="w-3 h-3 text-roast-400" /> Kelompok:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1 rounded text-xs font-mono uppercase tracking-wider transition-all border ${
                    selectedCategory === cat.id
                      ? 'bg-roast-950 text-paper-50 border-roast-950 font-bold shadow-xs'
                      : 'bg-paper-50 text-roast-700 border-paper-300 hover:border-roast-600'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Main Grid: Left List (7 Cols) + Right Inspector Dossier (5 Cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left 7 Columns: Cards Grid */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex justify-between items-center text-xs font-mono text-roast-500 px-1">
                <span>Ditemukan: <strong>{filteredVarieties.length}</strong> spesimen varietas</span>
                <span>Klik kartu untuk inspeksi data lengkap</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {filteredVarieties.map((v) => {
                  const isSelected = selectedVariety?.id === v.id;
                  return (
                    <button
                      key={v.id}
                      onClick={() => setSelectedVariety(v)}
                      className={`p-4 rounded-lg text-left transition-all border flex flex-col justify-between ${
                        isSelected
                          ? 'bg-paper-50 border-roast-900 shadow-subtle ring-1 ring-roast-900'
                          : 'bg-paper-50/80 border-paper-300 hover:border-roast-500'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-1 mb-1">
                          <span className={`font-mono text-[9px] uppercase px-1.5 py-0.5 rounded font-bold border ${
                            v.category === 'nusantara'
                              ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                              : v.category === 'exotic_competition'
                              ? 'bg-purple-50 text-purple-800 border-purple-200'
                              : v.category === 'world_heritage'
                              ? 'bg-amber-50 text-amber-800 border-amber-200'
                              : 'bg-stone-100 text-stone-800 border-stone-300'
                          }`}>
                            {v.category === 'nusantara' ? 'NUSANTARA' :
                             v.category === 'exotic_competition' ? 'CHAMPIONSHIP' :
                             v.category === 'world_heritage' ? 'HERITAGE' : 'NON-ARABIKA'}
                          </span>
                          <span className="font-mono text-[10px] text-roast-500">
                            {v.optimalAltitude.split('–')[0]}
                          </span>
                        </div>

                        <h4 className="font-serif font-bold text-base text-roast-950 leading-tight mt-1">
                          {v.name}
                        </h4>
                        <span className="font-mono text-[10px] text-cherry-700 block mt-0.5 truncate">
                          {v.lineage}
                        </span>

                        <p className="font-sans text-[11px] text-roast-600 line-clamp-2 mt-2 leading-relaxed">
                          &ldquo;{v.flavorProfile}&rdquo;
                        </p>
                      </div>

                      <div className="pt-3 mt-3 border-t border-paper-200 flex items-center justify-between text-[10px] font-mono text-roast-500">
                        <span className="truncate max-w-[140px]">{v.primaryRegions.split(',')[0]}</span>
                        <span className="flex items-center text-roast-800 font-bold gap-0.5">
                          Detail <ChevronRight className="w-3 h-3" />
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {filteredVarieties.length === 0 && (
                <div className="text-center py-12 bg-paper-50 border border-dashed border-paper-300 rounded-lg">
                  <Coffee className="w-8 h-8 text-roast-400 mx-auto mb-2" />
                  <p className="font-serif text-base text-roast-900 font-bold">Tidak ada varietas yang cocok</p>
                  <p className="font-sans text-xs text-roast-500 mt-1">
                    Coba ubah kata kunci pencarian atau reset filter.
                  </p>
                </div>
              )}
            </div>

            {/* Right 5 Columns: Active Variety Detail Dossier */}
            <div className="lg:col-span-5">
              {selectedVariety ? (
                <div className="bg-paper-50 rounded-xl border border-paper-300 p-6 shadow-subtle sticky top-24 space-y-5">
                  {/* Header Badge */}
                  <div className="pb-4 border-b border-paper-300">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-cherry-700 font-bold bg-cherry-50 px-2 py-0.5 border border-cherry-200">
                        [ SPESIMEN DOSSIER BOTANI ]
                      </span>
                      <span className="font-mono text-[10px] italic text-roast-500">
                        {selectedVariety.species}
                      </span>
                    </div>

                    <h4 className="font-serif font-bold text-2xl text-roast-950">
                      {selectedVariety.name}
                    </h4>
                    {selectedVariety.localAliases && (
                      <span className="font-mono text-xs text-roast-500 block mt-0.5">
                        Nama Alias: {selectedVariety.localAliases}
                      </span>
                    )}
                  </div>

                  {/* Quick Specs Matrix */}
                  <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                    <div className="bg-paper-100 p-2.5 rounded border border-paper-200">
                      <span className="text-[9px] text-roast-500 uppercase block">Ketinggian Tanam</span>
                      <span className="font-bold text-roast-950">{selectedVariety.optimalAltitude}</span>
                    </div>
                    <div className="bg-paper-100 p-2.5 rounded border border-paper-200">
                      <span className="text-[9px] text-roast-500 uppercase block">Karat Daun</span>
                      <span className={`font-bold ${
                        selectedVariety.leafRustResistance.includes('Tahan')
                          ? 'text-emerald-700'
                          : selectedVariety.leafRustResistance.includes('Moderat')
                          ? 'text-amber-700'
                          : 'text-rose-700'
                      }`}>
                        {selectedVariety.leafRustResistance}
                      </span>
                    </div>
                    <div className="bg-paper-100 p-2.5 rounded border border-paper-200">
                      <span className="text-[9px] text-roast-500 uppercase block">Postur Pohon</span>
                      <span className="font-bold text-roast-950">{selectedVariety.plantStature}</span>
                    </div>
                    <div className="bg-paper-100 p-2.5 rounded border border-paper-200">
                      <span className="text-[9px] text-roast-500 uppercase block">Potensi Skor Cangkir</span>
                      <span className="font-bold text-cherry-700 text-[11px] truncate block">
                        {selectedVariety.cuppingPotential.split(' ')[0]} Poin
                      </span>
                    </div>
                  </div>

                  {/* Lineage & Origin */}
                  <div className="space-y-2 font-sans text-xs">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-roast-500 font-bold block mb-0.5">
                        Garis Keturunan / Silsilah:
                      </span>
                      <p className="font-medium text-roast-900 bg-paper-100 p-2 rounded border border-paper-200 font-mono text-[11px]">
                        {selectedVariety.lineage}
                      </p>
                    </div>

                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-roast-500 font-bold block mb-0.5">
                        Sejarah & Asal Usul:
                      </span>
                      <p className="text-roast-700 leading-relaxed text-[11px]">
                        {selectedVariety.historyOrigin}
                      </p>
                    </div>

                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-roast-500 font-bold block mb-0.5">
                        Ciri Botani & Morfologi:
                      </span>
                      <p className="text-roast-700 leading-relaxed text-[11px]">
                        {selectedVariety.botanicalDescription}
                      </p>
                    </div>
                  </div>

                  {/* Flavor Profile Box */}
                  <div className="p-3.5 bg-paper-100 rounded border-l-4 border-l-cherry-700 text-xs font-sans space-y-1">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-cherry-800 font-bold block">
                      [ POTENSI SENSORI / CUPPING PROFILE ]
                    </span>
                    <p className="font-serif italic text-roast-950 font-medium text-sm leading-relaxed">
                      &ldquo;{selectedVariety.flavorProfile}&rdquo;
                    </p>
                  </div>

                  {/* Roasting & Brewing Tips */}
                  <div className="pt-2 border-t border-paper-300 font-sans text-xs">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-roast-500 font-bold block mb-1">
                      Catatan Roaster & Barista:
                    </span>
                    <p className="text-roast-700 text-[11px] leading-relaxed italic">
                      💡 {selectedVariety.sensoryRoastingNotes}
                    </p>
                  </div>

                  {/* Regions */}
                  <div className="pt-2 border-t border-paper-300 flex items-center justify-between text-[11px] font-mono text-roast-500">
                    <span>Sentra Budidaya:</span>
                    <span className="font-bold text-roast-900 text-right">{selectedVariety.primaryRegions}</span>
                  </div>
                </div>
              ) : (
                <div className="p-8 text-center bg-paper-50 rounded-xl border border-paper-300 text-roast-500 font-mono text-xs">
                  Pilih varietas di sisi kiri untuk melihat data botani.
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* VIEW 2: POHON SILSILAH GENETIK (LINEAGE TREE)           */}
      {/* ======================================================== */}
      {activeSubTab === 'lineage-tree' && (
        <div className="bg-paper-50 rounded-xl border border-paper-300 p-6 sm:p-8 shadow-subtle space-y-8">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-cherry-700 font-bold block mb-1">
              [ GENEALOGICAL TAXONOMY MAP ]
            </span>
            <h4 className="font-serif font-bold text-2xl text-roast-950">
              Pohon Silsilah Genetika Kopi Dunia & Nusantara
            </h4>
            <p className="text-xs text-roast-600 mt-1 max-w-2xl font-sans">
              Bagaimana dua leluhur purba (Typica dan Bourbon), persilangan alami Hibrido de Timor (HDT), serta mutasi modern melahirkan seluruh varietas yang kita nikmati saat ini.
            </p>
          </div>

          {/* Visual Interactive Tree Schema */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
            {/* Branch 1: TYPICA LINEAGE */}
            <div className="bg-paper-100 p-5 rounded-lg border border-paper-300 space-y-4">
              <div className="pb-2 border-b border-paper-300">
                <span className="text-[10px] text-cherry-700 font-bold block uppercase">
                  CABANG 1: GARIS BANGSAWAN
                </span>
                <h5 className="font-serif text-lg font-bold text-roast-950">
                  Garis Keturunan Typica
                </h5>
                <p className="text-[11px] font-sans text-roast-600 mt-0.5">
                  Ciri khas: bronze tips (pucuk daun perunggu), aroma melati, teh bergamot, clean cup mutlak.
                </p>
              </div>

              <div className="space-y-2 font-mono text-xs">
                <div className="p-2.5 bg-paper-50 rounded border border-paper-300">
                  <div className="font-bold text-roast-950">Typica Asli (1696 ke Batavia)</div>
                  <div className="text-[10px] text-roast-500">Bibit leluhur pertama keluar dari Yaman</div>
                </div>

                <div className="pl-4 border-l-2 border-cherry-700 space-y-2">
                  <div className="p-2 bg-paper-50 rounded border border-paper-200">
                    <strong className="text-cherry-800">Typica Priangan</strong> (Pangalengan/Garut)
                    <span className="block text-[10px] text-roast-500">Warisan VOC tertua di tanah Jawa</span>
                  </div>

                  <div className="p-2 bg-paper-50 rounded border border-paper-200">
                    <strong className="text-roast-950">Jurung</strong> (Lembah Colol, Flores)
                    <span className="block text-[10px] text-roast-500">Typica liar purba tanah karst Manggarai</span>
                  </div>

                  <div className="p-2 bg-paper-50 rounded border border-paper-200">
                    <strong className="text-roast-950">Maragogipe</strong> (Elephant Bean)
                    <span className="block text-[10px] text-roast-500">Mutasi biji raksasa alami di Brazil</span>
                  </div>

                  <div className="p-2 bg-paper-50 rounded border border-paper-200">
                    <strong className="text-roast-950">Blue Mountain</strong> (Jamaika / Ijen)
                    <span className="block text-[10px] text-roast-500">Seleksi Typica seimbang & lembut</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Branch 2: BOURBON LINEAGE */}
            <div className="bg-paper-100 p-5 rounded-lg border border-paper-300 space-y-4">
              <div className="pb-2 border-b border-paper-300">
                <span className="text-[10px] text-amber-700 font-bold block uppercase">
                  CABANG 2: GARIS KEMANISAN
                </span>
                <h5 className="font-serif text-lg font-bold text-roast-950">
                  Garis Keturunan Bourbon
                </h5>
                <p className="text-[11px] font-sans text-roast-600 mt-0.5">
                  Ciri khas: daun hijau muda, sukrosa tinggi, rasa karamel toffee, plum manis, body bulat.
                </p>
              </div>

              <div className="space-y-2 font-mono text-xs">
                <div className="p-2.5 bg-paper-50 rounded border border-paper-300">
                  <div className="font-bold text-roast-950">Red Bourbon (1708 Pulau Réunion)</div>
                  <div className="text-[10px] text-roast-500">Produktivitas 20% lebih tinggi dari Typica</div>
                </div>

                <div className="pl-4 border-l-2 border-amber-600 space-y-2">
                  <div className="p-2 bg-paper-50 rounded border border-paper-200">
                    <strong className="text-amber-900">Yellow & Orange Bourbon</strong>
                    <span className="block text-[10px] text-roast-500">Mutasi warna buah kuning manis mentega</span>
                  </div>

                  <div className="p-2 bg-paper-50 rounded border border-paper-200">
                    <strong className="text-roast-950">Caturra</strong> (Brazil 1937)
                    <span className="block text-[10px] text-roast-500">Mutasi kerdil gen tunggal (dwarf)</span>
                  </div>

                  <div className="p-2 bg-paper-50 rounded border border-paper-200">
                    <strong className="text-roast-950">Catuai</strong> (Caturra x Mundo Novo)
                    <span className="block text-[10px] text-roast-500">Sangat produktif & tahan terpaan angin</span>
                  </div>

                  <div className="p-2 bg-paper-50 rounded border border-paper-200">
                    <strong className="text-roast-950">Pacas & Villa Sarchi</strong>
                    <span className="block text-[10px] text-roast-500">Mutasi kerdil El Salvador & Kosta Rika</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Branch 3: HIBRIDO DE TIMOR & NUSANTARA HYBRIDS */}
            <div className="bg-paper-100 p-5 rounded-lg border border-paper-300 space-y-4">
              <div className="pb-2 border-b border-paper-300">
                <span className="text-[10px] text-emerald-700 font-bold block uppercase">
                  CABANG 3: PERSILANGAN TIMOR
                </span>
                <h5 className="font-serif text-lg font-bold text-roast-950">
                  Hibrida Tahan Karat Daun
                </h5>
                <p className="text-[11px] font-sans text-roast-600 mt-0.5">
                  Ciri khas: mewarisi kekebalan karat daun dari Robusta dan cita rasa kompleks Arabika.
                </p>
              </div>

              <div className="space-y-2 font-mono text-xs">
                <div className="p-2.5 bg-paper-50 rounded border border-paper-300">
                  <div className="font-bold text-emerald-800">Hibrido de Timor / HDT (1917)</div>
                  <div className="text-[10px] text-roast-500">Persilangan alami Arabika x Robusta di Pulau Timor</div>
                </div>

                <div className="pl-4 border-l-2 border-emerald-600 space-y-2">
                  <div className="p-2 bg-paper-50 rounded border border-paper-200">
                    <strong className="text-emerald-900">Tim-Tim</strong> (Takengon, Aceh)
                    <span className="block text-[10px] text-roast-500">HDT murni introduksi Timor Timur 1978</span>
                  </div>

                  <div className="p-2 bg-paper-50 rounded border border-paper-200">
                    <strong className="text-roast-950">Ateng Super</strong> (Catimor Lokal)
                    <span className="block text-[10px] text-roast-500">Catimor kerdil tulang punggung Sumatra</span>
                  </div>

                  <div className="p-2 bg-paper-50 rounded border border-paper-200">
                    <strong className="text-roast-950">Sigarar Utang</strong> (Danau Toba)
                    <span className="block text-[10px] text-roast-500">Persilangan Typica x Catimor buah tiada henti</span>
                  </div>

                  <div className="p-2 bg-paper-50 rounded border border-paper-200">
                    <strong className="text-roast-950">S-795 "Jember"</strong> (Toraja)
                    <span className="block text-[10px] text-roast-500">Kent x S.288 ikon rasa cokelat Toraja</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Educational Note */}
          <div className="p-4 bg-paper-100 rounded-lg border border-paper-300 font-sans text-xs text-roast-700 leading-relaxed">
            <strong className="text-roast-950 font-bold block mb-1">
              Catatan Penting bagi Calon Q-Grader & Roaster:
            </strong>
            Varietas menentukan <strong>potensi rasa dasar (*flavor ceiling*)</strong> dan kerapatan selulosa biji. Namun, bagaimana potensi tersebut terwujud di cangkir 100% dipengaruhi oleh ketinggian elevasi kebun (MDPL), kedisiplinan petik merah 100%, ketepatan metode pasca panen (Washed, Natural, Honey, Anaerobic), dan kepiawaian roaster mengatur kurva laju kenaikan suhu (RoR).
          </div>
        </div>
      )}
    </div>
  );
};
