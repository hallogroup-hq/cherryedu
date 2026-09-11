'use client';

import React, { useState, useMemo } from 'react';
import {
  Coffee,
  Layers,
  Sparkles,
  Info,
  Check,
  ArrowRight,
  Droplets,
  Flame,
  Scale,
  Split,
} from 'lucide-react';

export interface DrinkLayer {
  name: string;
  volumeMl: number;
  color: string;
  textColor: string;
  pattern?: 'crema' | 'milk' | 'foam' | 'water' | 'ice';
}

export interface DrinkProfile {
  id: string;
  name: string;
  italianName: string;
  totalVolumeMl: number;
  glassware: string;
  servingTemp: string;
  caffeineMg: number;
  ratioSummary: string;
  description: string;
  baristaRule: string;
  layers: DrinkLayer[]; // Bottom to top
}

export const DRINK_PROFILES: DrinkProfile[] = [
  {
    id: 'espresso',
    name: 'Espresso (Normale)',
    italianName: 'Solo Espresso',
    totalVolumeMl: 36,
    glassware: 'Demitasse Keramik Tebal 60ml',
    servingTemp: '65°C – 70°C',
    caffeineMg: 65,
    ratioSummary: '1:2.0 (18g in : 36g out)',
    description: 'Titik nol seluruh minuman kopi berbasis espresso. Ekstraksi bertekanan 9 bar dengan emulsi lipid dan crema keemasan tebal.',
    baristaRule: 'Wajib disajikan segera dalam 15 detik setelah shot selesai diekstraksi.',
    layers: [
      { name: 'Liquid Espresso', volumeMl: 30, color: '#24140E', textColor: '#F5EBE6' },
      { name: 'Tiger Crema (Gas & Lipid)', volumeMl: 6, color: '#C89F65', textColor: '#1C130D', pattern: 'crema' },
    ],
  },
  {
    id: 'ristretto',
    name: 'Ristretto',
    italianName: 'Caffe Ristretto',
    totalVolumeMl: 20,
    glassware: 'Demitasse 60ml',
    servingTemp: '65°C',
    caffeineMg: 50,
    ratioSummary: '1:1.0 – 1:1.2 (18g in : 20g out)',
    description: 'Ekstraksi terbatas yang dipotong dini. Hanya mengambil senyawa asam organik manis dan minyak volatil paling larut tanpa kepahitan akhir.',
    baristaRule: 'Sangat manis dan pekat, basis ideal untuk Flat White modern.',
    layers: [
      { name: 'Dense Ristretto Shot', volumeMl: 16, color: '#1B0D08', textColor: '#F5EBE6' },
      { name: 'Dense Sweet Crema', volumeMl: 4, color: '#B88648', textColor: '#1C130D', pattern: 'crema' },
    ],
  },
  {
    id: 'lungo',
    name: 'Lungo',
    italianName: 'Caffe Lungo',
    totalVolumeMl: 70,
    glassware: 'Tulip Glass 90ml',
    servingTemp: '70°C',
    caffeineMg: 85,
    ratioSummary: '1:3.5 – 1:4.0 (18g in : 70g out)',
    description: 'Ekstraksi yang ditarik panjang dengan volume air lebih banyak mengalir menembus portafilter.',
    baristaRule: 'Lebih berkafein dan lebih pahit dari espresso biasa karena senyawa asam fenolik larut penuh.',
    layers: [
      { name: 'Extended Lungo Extraction', volumeMl: 62, color: '#3A2016', textColor: '#F5EBE6' },
      { name: 'Thin Pale Crema', volumeMl: 8, color: '#D4B07B', textColor: '#1C130D', pattern: 'crema' },
    ],
  },
  {
    id: 'macchiato',
    name: 'Espresso Macchiato',
    italianName: 'Caffe Macchiato ("Ternoda")',
    totalVolumeMl: 45,
    glassware: 'Demitasse 60ml',
    servingTemp: '65°C',
    caffeineMg: 65,
    ratioSummary: 'Double Shot + Sendok Busa Susu',
    description: 'Espresso murni yang diberi satu atau dua sendok makan microfoam susu hangat di atasnya untuk melembutkan intensitas asam.',
    baristaRule: 'Bukan minuman manis! "Macchiato" berarti ditandai atau dinodai oleh bercak putih susu.',
    layers: [
      { name: 'Double Shot Espresso', volumeMl: 36, color: '#24140E', textColor: '#F5EBE6' },
      { name: 'Dollop of Microfoam', volumeMl: 9, color: '#FAF7F2', textColor: '#24140E', pattern: 'foam' },
    ],
  },
  {
    id: 'cortado',
    name: 'Cortado',
    italianName: 'Cortado Spanyol (1:1 Ratio)',
    totalVolumeMl: 120,
    glassware: 'Gelas Duralex / Gibraltar 135ml',
    servingTemp: '60°C',
    caffeineMg: 65,
    ratioSummary: '1:1 (60ml Espresso : 60ml Steamed Milk)',
    description: 'Berasal dari Spanyol. Espresso yang "dipotong" (cortar) dengan susu panas dalam perbandingan persis seimbang tanpa busa tebal.',
    baristaRule: 'Minuman kopi susu paling seimbang untuk penikmat yang tetap ingin merasakan karakter asli beans.',
    layers: [
      { name: 'Double Espresso', volumeMl: 60, color: '#24140E', textColor: '#F5EBE6' },
      { name: 'Warm Steamed Milk', volumeMl: 52, color: '#F4EFE6', textColor: '#24140E', pattern: 'milk' },
      { name: 'Thin Silk Microfoam (0.5cm)', volumeMl: 8, color: '#FAF7F2', textColor: '#24140E', pattern: 'foam' },
    ],
  },
  {
    id: 'piccolo',
    name: 'Piccolo Latte',
    italianName: 'Piccolo ("Kecil")',
    totalVolumeMl: 90,
    glassware: 'Gelas Duralex Kecil 100ml',
    servingTemp: '60°C',
    caffeineMg: 50,
    ratioSummary: 'Single Ristretto + Susu Halus',
    description: 'Miniatur dari caffe latte. Menggunakan shot ristretto manis yang dipadukan dengan microfoam halus dalam gelas mungil 90–100ml.',
    baristaRule: 'Favorit para juri sensorik kopi karena kepekatan rasa kopi tetap dominan namun creamy.',
    layers: [
      { name: 'Single Ristretto', volumeMl: 25, color: '#1B0D08', textColor: '#F5EBE6' },
      { name: 'Steamed Whole Milk', volumeMl: 55, color: '#F4EFE6', textColor: '#24140E', pattern: 'milk' },
      { name: 'Silky Foam (1cm)', volumeMl: 10, color: '#FAF7F2', textColor: '#24140E', pattern: 'foam' },
    ],
  },
  {
    id: 'flat-white',
    name: 'Flat White (Australasian)',
    italianName: 'Flat White',
    totalVolumeMl: 160,
    glassware: 'Keramik Tulip Datar 160ml–180ml',
    servingTemp: '60°C – 63°C',
    caffeineMg: 75,
    ratioSummary: 'Double Ristretto + Microfoam Tipis Rata',
    description: 'Lahir di Australia/Selandia Baru. Karakter rasa kopi kuat dengan lapisan microfoam mikro sangat tipis (flat) yang menyatu mulus dari tegukan awal.',
    baristaRule: 'Busa susu tidak boleh tebal atau memisah seperti cappuccino. Harus menyatu seperti beludru.',
    layers: [
      { name: 'Double Ristretto/Espresso', volumeMl: 40, color: '#24140E', textColor: '#F5EBE6' },
      { name: 'Velvety Steamed Milk', volumeMl: 112, color: '#F4EFE6', textColor: '#24140E', pattern: 'milk' },
      { name: 'Micro-Thin Foam (0.3cm)', volumeMl: 8, color: '#FAF7F2', textColor: '#24140E', pattern: 'foam' },
    ],
  },
  {
    id: 'cappuccino',
    name: 'Traditional Cappuccino',
    italianName: 'Cappuccino Tradizionale',
    totalVolumeMl: 180,
    glassware: 'Cangkir Keramik Bulat 180ml',
    servingTemp: '62°C – 65°C',
    caffeineMg: 65,
    ratioSummary: 'Aturan Sepertiga (1/3 Kopi, 1/3 Susu, 1/3 Busa)',
    description: 'Mahakarya Italia klasik. Dicirikan oleh kubah busa microfoam elastis yang tebal dan empuk seperti bantal (*cushiony head*).',
    baristaRule: 'Busa harus cukup kokoh untuk menahan taburan cokelat atau gula pasir selama 3 detik.',
    layers: [
      { name: 'Espresso Normale', volumeMl: 36, color: '#24140E', textColor: '#F5EBE6' },
      { name: 'Sweet Steamed Milk', volumeMl: 74, color: '#F4EFE6', textColor: '#24140E', pattern: 'milk' },
      { name: 'Dense Microfoam Dome (1.5–2cm)', volumeMl: 70, color: '#FAF7F2', textColor: '#24140E', pattern: 'foam' },
    ],
  },
  {
    id: 'latte',
    name: 'Caffe Latte',
    italianName: 'Caffe e Latte',
    totalVolumeMl: 240,
    glassware: 'Cangkir Keramik Besar / Gelas Tinggi 240ml',
    servingTemp: '63°C – 66°C',
    caffeineMg: 65,
    ratioSummary: 'Volume Susu Terbesar (Rasio 1:5)',
    description: 'Minuman kopi susu paling lembut dan ramah pemula. Dominasi rasa manis alami laktosa susu yang hangat dengan lapisan foam tipis untuk lukisan latte art.',
    baristaRule: 'Kanvas terbaik untuk menuangkan pola latte art tingkat tinggi (Rosetta, Swan, Tulip).',
    layers: [
      { name: 'Single/Double Shot', volumeMl: 36, color: '#24140E', textColor: '#F5EBE6' },
      { name: 'Steamed Sweet Milk', volumeMl: 184, color: '#F4EFE6', textColor: '#24140E', pattern: 'milk' },
      { name: 'Silky Latte Art Foam (1cm)', volumeMl: 20, color: '#FAF7F2', textColor: '#24140E', pattern: 'foam' },
    ],
  },
  {
    id: 'americano',
    name: 'Americano',
    italianName: 'Caffe Americano',
    totalVolumeMl: 200,
    glassware: 'Mug Keramik 220ml',
    servingTemp: '75°C',
    caffeineMg: 65,
    ratioSummary: 'Espresso Dituang Dulu, Air Panas Di Atasnya',
    description: 'Lahir pada Perang Dunia II saat tentara AS mengencerkan espresso Italia agar menyerupai kopi tetes filter kampung halaman mereka.',
    baristaRule: 'Karena air panas dituangkan setelah espresso, lapisan crema biasanya pecah dan larut menyatu.',
    layers: [
      { name: 'Espresso Base', volumeMl: 36, color: '#24140E', textColor: '#F5EBE6' },
      { name: 'Hot Filtered Water (92°C)', volumeMl: 164, color: '#6A4332', textColor: '#FAF7F2', pattern: 'water' },
    ],
  },
  {
    id: 'long-black',
    name: 'Long Black (Australasia)',
    italianName: 'Long Black',
    totalVolumeMl: 180,
    glassware: 'Tulip Ceramic 180ml',
    servingTemp: '70°C',
    caffeineMg: 75,
    ratioSummary: 'Air Panas Dulu, Double Shot Di Atasnya',
    description: 'Saudara kembar Americano dengan urutan penuangan terbalik: air panas disiapkan di cangkir terlebih dahulu, lalu double espresso diekstrak langsung mengapung di atasnya.',
    baristaRule: 'Crema tebal utuh di permukaan tidak boleh rusak! Aromanya jauh lebih tajam dan berminyak dibanding Americano.',
    layers: [
      { name: 'Hot Water Foundation', volumeMl: 135, color: '#6A4332', textColor: '#FAF7F2', pattern: 'water' },
      { name: 'Double Espresso Float', volumeMl: 35, color: '#24140E', textColor: '#F5EBE6' },
      { name: 'Intact Golden Crema', volumeMl: 10, color: '#C89F65', textColor: '#1C130D', pattern: 'crema' },
    ],
  },
  {
    id: 'japanese-iced',
    name: 'Japanese Iced Filter Coffee',
    italianName: 'Flash Brewed Iced Coffee',
    totalVolumeMl: 250,
    glassware: 'Highball Glass Bening 350ml',
    servingTemp: '2°C – 4°C (Dingin Menyegarkan)',
    caffeineMg: 95,
    ratioSummary: '40% Es Batu Server + 60% Seduhan Panas',
    description: 'Metode seduh dingin tercepat dan paling aromatik. Kopi panas V60 menetes langsung membentur bongkahan es batu, mengunci volatil aroma bunga dan buah melalui kejutan termal (*thermal shock*).',
    baristaRule: 'Jauh lebih cerah (*bright acidity*) dan aromatik dibanding Cold Brew yang direndam 18 jam.',
    layers: [
      { name: 'Solid Clear Ice Cubes (40%)', volumeMl: 100, color: '#DCEBFA', textColor: '#1A365D', pattern: 'ice' },
      { name: 'Flash-Chilled Filter Coffee (60%)', volumeMl: 150, color: '#5B3726', textColor: '#FAF7F2' },
    ],
  },
];

export const CupAnatomyVisualizer: React.FC = () => {
  const [selectedDrinkId, setSelectedDrinkId] = useState<string>('flat-white');
  const [compareDrinkId, setCompareDrinkId] = useState<string>('cappuccino');
  const [compareMode, setCompareMode] = useState<boolean>(false);

  const primaryDrink = DRINK_PROFILES.find((d) => d.id === selectedDrinkId) || DRINK_PROFILES[6];
  const secondaryDrink = DRINK_PROFILES.find((d) => d.id === compareDrinkId) || DRINK_PROFILES[7];

  const renderCupGraphic = (drink: DrinkProfile) => {
    return (
      <div className="flex flex-col items-center space-y-3 w-full max-w-[280px]">
        {/* Cup Graphic Container */}
        <div className="relative w-44 sm:w-52 h-64 border-b-8 border-x-4 border-paper-400 bg-paper-100/50 rounded-b-3xl overflow-hidden shadow-inner flex flex-col-reverse p-1">
          {drink.layers.map((layer, idx) => {
            const heightPercent = (layer.volumeMl / drink.totalVolumeMl) * 100;
            return (
              <div
                key={idx}
                style={{
                  height: `${heightPercent}%`,
                  backgroundColor: layer.color,
                  color: layer.textColor,
                }}
                className="w-full flex items-center justify-between px-2.5 transition-all duration-300 relative border-t border-black/10 group"
              >
                <span className="font-mono text-[10px] font-bold truncate pr-1 drop-shadow-xs">
                  {layer.name}
                </span>
                <span className="font-mono text-[9px] opacity-90 shrink-0">
                  {layer.volumeMl}ml
                </span>
              </div>
            );
          })}
        </div>

        {/* Cup Footer Metrics */}
        <div className="text-center font-mono text-xs">
          <span className="font-bold text-roast-950 text-sm">{drink.totalVolumeMl} ml</span>
          <span className="text-roast-500 block text-[10px] uppercase">
            {drink.glassware}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header Banner */}
      <div className="bg-paper-100/90 border border-paper-300 rounded-2xl p-4 sm:p-6 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-paper-300/80 pb-5">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-mono text-[10px] uppercase tracking-widest text-cherry-700 font-bold bg-cherry-100 px-2 py-0.5 rounded border border-cherry-200">
                [ DRINK ANATOMY // RATIO CROSS-SECTION ]
              </span>
              <span className="text-[10px] font-mono text-roast-500 hidden sm:inline">• 12 Ragam Minuman Kafe Dunia</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-roast-950">
              Visual Anatomi & Perbandingan Cangkir Kopi
            </h3>
            <p className="font-sans text-xs sm:text-sm text-roast-600 mt-1 max-w-2xl leading-relaxed">
              Pahami perbedaan mendasar antara Flat White, Cappuccino, Latte, Cortado, hingga Long Black melalui penampang melintang rasio cairan, ketebalan busa susu (*microfoam*), dan suhu saji.
            </p>
          </div>

          <button
            onClick={() => setCompareMode(!compareMode)}
            className={`px-3.5 py-2 rounded-xl font-mono text-xs flex items-center gap-2 transition-all self-start md:self-auto ${
              compareMode
                ? 'bg-roast-950 text-paper-50 font-bold shadow-xs'
                : 'bg-paper-50 hover:bg-paper-200 border border-paper-300 text-roast-800'
            }`}
          >
            <Split className="w-4 h-4 text-cherry-700" />
            <span>{compareMode ? 'Matikan Mode Banding' : 'Bandingkan 2 Minuman'}</span>
          </button>
        </div>

        {/* Drink Selector Tabs */}
        <div className="pt-4">
          <label className="block font-mono text-[11px] uppercase tracking-wider text-roast-600 font-bold mb-2">
            PILIH MINUMAN UTAMA:
          </label>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {DRINK_PROFILES.map((drink) => {
              const isSelected = selectedDrinkId === drink.id;
              return (
                <button
                  key={drink.id}
                  onClick={() => setSelectedDrinkId(drink.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-sans transition-all active:scale-[0.98] ${
                    isSelected
                      ? 'bg-roast-950 text-paper-50 font-bold shadow-xs ring-1 ring-roast-900'
                      : 'bg-paper-50 hover:bg-paper-200 text-roast-800 border border-paper-300/80'
                  }`}
                >
                  {drink.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Second Drink Selector (Only if Compare Mode active) */}
        {compareMode && (
          <div className="pt-3 border-t border-paper-200 mt-3 animate-in fade-in duration-150">
            <label className="block font-mono text-[11px] uppercase tracking-wider text-cherry-700 font-bold mb-2">
              PILIH MINUMAN PEMBANDING (KEDUA):
            </label>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {DRINK_PROFILES.map((drink) => {
                const isSelected = compareDrinkId === drink.id;
                return (
                  <button
                    key={drink.id}
                    onClick={() => setCompareDrinkId(drink.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-sans transition-all active:scale-[0.98] ${
                      isSelected
                        ? 'bg-cherry-900 text-paper-50 font-bold shadow-xs ring-1 ring-cherry-800'
                        : 'bg-paper-50 hover:bg-paper-200 text-roast-800 border border-paper-300/80'
                    }`}
                  >
                    {drink.name}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Main Display Grid */}
      <div className={`grid gap-6 ${compareMode ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1 lg:grid-cols-12'}`}>
        {/* Primary Cup Display */}
        <div
          className={`${
            compareMode ? 'col-span-1' : 'lg:col-span-12'
          } bg-paper-50 border border-paper-300 rounded-2xl p-6 shadow-subtle flex flex-col md:flex-row items-center gap-8 justify-between`}
        >
          {/* Left / Graphic */}
          <div className="shrink-0 flex justify-center w-full md:w-auto">
            {renderCupGraphic(primaryDrink)}
          </div>

          {/* Right / Specs */}
          <div className="flex-1 space-y-4 text-xs font-sans">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-cherry-700 font-bold bg-cherry-50 px-2.5 py-0.5 rounded border border-cherry-200">
                  {primaryDrink.italianName}
                </span>
                <span className="font-mono text-[10px] text-roast-500">
                  Total {primaryDrink.totalVolumeMl}ml
                </span>
              </div>
              <h4 className="font-serif font-bold text-2xl text-roast-950 mt-1">
                {primaryDrink.name}
              </h4>
              <p className="text-roast-700 leading-relaxed mt-1">
                {primaryDrink.description}
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] font-mono">
              <div className="p-2.5 bg-paper-100 rounded-lg border border-paper-200">
                <span className="text-roast-500 block text-[9px]">RASIO:</span>
                <strong className="text-roast-950 font-bold">{primaryDrink.ratioSummary}</strong>
              </div>
              <div className="p-2.5 bg-paper-100 rounded-lg border border-paper-200">
                <span className="text-roast-500 block text-[9px]">SUHU SAJI:</span>
                <strong className="text-roast-950 font-bold">{primaryDrink.servingTemp}</strong>
              </div>
              <div className="p-2.5 bg-paper-100 rounded-lg border border-paper-200">
                <span className="text-roast-500 block text-[9px]">KAFEIN (EST):</span>
                <strong className="text-roast-950 font-bold">~{primaryDrink.caffeineMg} mg</strong>
              </div>
              <div className="p-2.5 bg-paper-100 rounded-lg border border-paper-200">
                <span className="text-roast-500 block text-[9px]">CANGKIR:</span>
                <strong className="text-roast-950 font-bold truncate block">{primaryDrink.glassware.split(' ')[0]}</strong>
              </div>
            </div>

            {/* Layer Breakdown */}
            <div className="p-3.5 bg-paper-100/70 rounded-xl border border-paper-200 space-y-1.5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-roast-600 font-bold block">
                KOMPOSISI URUTAN PENUANGAN:
              </span>
              <ul className="space-y-1 text-xs">
                {primaryDrink.layers.map((layer, idx) => (
                  <li key={idx} className="flex items-center justify-between text-roast-800">
                    <span className="flex items-center gap-2">
                      <span
                        className="w-3 h-3 rounded-full border border-paper-400 shrink-0"
                        style={{ backgroundColor: layer.color }}
                      />
                      <span>{layer.name}</span>
                    </span>
                    <strong className="font-mono text-roast-950">{layer.volumeMl} ml</strong>
                  </li>
                ))}
              </ul>
            </div>

            {/* Barista Rule Callout */}
            <div className="p-3 bg-crema-50 border border-crema-200 rounded-xl flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-crema-700 shrink-0 mt-0.5" />
              <div className="text-[11px] text-roast-800">
                <strong>Kaidah Barista:</strong> {primaryDrink.baristaRule}
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Cup Display (If Compare Mode) */}
        {compareMode && (
          <div className="col-span-1 bg-paper-50 border border-cherry-300 rounded-2xl p-6 shadow-subtle flex flex-col md:flex-row items-center gap-8 justify-between animate-in zoom-in-95 duration-150">
            {/* Graphic */}
            <div className="shrink-0 flex justify-center w-full md:w-auto">
              {renderCupGraphic(secondaryDrink)}
            </div>

            {/* Specs */}
            <div className="flex-1 space-y-4 text-xs font-sans">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-white bg-cherry-900 px-2.5 py-0.5 rounded font-bold">
                    PEMBANDING: {secondaryDrink.italianName}
                  </span>
                  <span className="font-mono text-[10px] text-roast-500">
                    {secondaryDrink.totalVolumeMl}ml
                  </span>
                </div>
                <h4 className="font-serif font-bold text-2xl text-roast-950 mt-1">
                  {secondaryDrink.name}
                </h4>
                <p className="text-roast-700 leading-relaxed mt-1">
                  {secondaryDrink.description}
                </p>
              </div>

              {/* Quick Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] font-mono">
                <div className="p-2.5 bg-paper-100 rounded-lg border border-paper-200">
                  <span className="text-roast-500 block text-[9px]">RASIO:</span>
                  <strong className="text-roast-950 font-bold">{secondaryDrink.ratioSummary}</strong>
                </div>
                <div className="p-2.5 bg-paper-100 rounded-lg border border-paper-200">
                  <span className="text-roast-500 block text-[9px]">SUHU SAJI:</span>
                  <strong className="text-roast-950 font-bold">{secondaryDrink.servingTemp}</strong>
                </div>
                <div className="p-2.5 bg-paper-100 rounded-lg border border-paper-200">
                  <span className="text-roast-500 block text-[9px]">KAFEIN (EST):</span>
                  <strong className="text-roast-950 font-bold">~{secondaryDrink.caffeineMg} mg</strong>
                </div>
                <div className="p-2.5 bg-paper-100 rounded-lg border border-paper-200">
                  <span className="text-roast-500 block text-[9px]">CANGKIR:</span>
                  <strong className="text-roast-950 font-bold truncate block">{secondaryDrink.glassware.split(' ')[0]}</strong>
                </div>
              </div>

              {/* Layer Breakdown */}
              <div className="p-3.5 bg-paper-100/70 rounded-xl border border-paper-200 space-y-1.5">
                <span className="font-mono text-[10px] uppercase tracking-wider text-roast-600 font-bold block">
                  KOMPOSISI URUTAN:
                </span>
                <ul className="space-y-1 text-xs">
                  {secondaryDrink.layers.map((layer, idx) => (
                    <li key={idx} className="flex items-center justify-between text-roast-800">
                      <span className="flex items-center gap-2">
                        <span
                          className="w-3 h-3 rounded-full border border-paper-400 shrink-0"
                          style={{ backgroundColor: layer.color }}
                        />
                        <span>{layer.name}</span>
                      </span>
                      <strong className="font-mono text-roast-950">{layer.volumeMl} ml</strong>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Barista Rule Callout */}
              <div className="p-3 bg-paper-100 border border-paper-300 rounded-xl flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-cherry-700 shrink-0 mt-0.5" />
                <div className="text-[11px] text-roast-800">
                  <strong>Kaidah Barista:</strong> {secondaryDrink.baristaRule}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
