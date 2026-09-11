'use client';

import React from 'react';
import {
  Flame,
  Droplets,
  Layers,
  Coffee,
  GitBranch,
  Compass,
  Sparkles,
} from "lucide-react";

interface CoffeeDiagramProps {
  type: string;
  caption?: string;
}

export const CoffeeDiagram: React.FC<CoffeeDiagramProps> = ({ type, caption }) => {
  const renderDiagram = () => {
    switch (type) {
      /* =========================================================================
         1. ANATOMI BUAH & BIJI KOPI (CHERRY ANATOMY CROSS-SECTION)
         ========================================================================= */
      case 'cherry-anatomy':
        return (
          <div className="bg-white p-5 sm:p-7 rounded-xl border border-paper-300 shadow-subtle">
            <div className="flex items-center justify-between border-b border-paper-200 pb-3 mb-5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cherry-700 animate-pulse"></span>
                <span className="font-mono text-xs uppercase tracking-wider font-bold text-roast-900">
                  DIAGRAM 01: ANATOMI PENAMPANG MELINTANG BUAH & BIJI KOPI (CROSS-SECTION)
                </span>
              </div>
              <span className="font-mono text-[10px] text-roast-500 uppercase bg-paper-100 px-2 py-0.5 rounded border border-paper-300">
                Standar SCA & WCR
              </span>
            </div>

            {/* SVG Visual Illustration */}
            <div className="relative w-full max-w-2xl mx-auto my-4 aspect-[16/9] bg-paper-50 rounded-lg border border-paper-200 p-2 sm:p-4 flex items-center justify-center overflow-hidden">
              <svg viewBox="0 0 600 340" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="cherrySkin" cx="45%" cy="40%" r="60%">
                    <stop offset="0%" stopColor="#C92A3E" />
                    <stop offset="70%" stopColor="#871A27" />
                    <stop offset="100%" stopColor="#4A0E15" />
                  </radialGradient>
                  <radialGradient id="mucilageGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#F5ECCB" />
                    <stop offset="100%" stopColor="#E2D093" />
                  </radialGradient>
                  <linearGradient id="parchmentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#EFE5CD" />
                    <stop offset="100%" stopColor="#C9B68A" />
                  </linearGradient>
                  <linearGradient id="beanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8A9A7B" />
                    <stop offset="60%" stopColor="#677A56" />
                    <stop offset="100%" stopColor="#4E5E40" />
                  </linearGradient>
                </defs>

                {/* Layer 1: Exocarp (Skin) */}
                <ellipse cx="230" cy="170" rx="170" ry="140" fill="url(#cherrySkin)" stroke="#3D0A10" strokeWidth="2.5" />

                {/* Layer 2: Mesocarp (Pulp / Mucilage) */}
                <ellipse cx="230" cy="170" rx="145" ry="118" fill="url(#mucilageGrad)" stroke="#B8A366" strokeWidth="2" opacity="0.9" />

                {/* Layer 3: Endocarp (Parchment) */}
                <ellipse cx="230" cy="170" rx="122" ry="98" fill="url(#parchmentGrad)" stroke="#8A774D" strokeWidth="2" />

                {/* Layer 4: Spermoderm (Silver Skin) */}
                <ellipse cx="230" cy="170" rx="108" ry="84" fill="#FDFBF7" stroke="#A89F91" strokeWidth="1.5" strokeDasharray="3 2" />

                {/* Layer 5: Endosperm (Coffee Bean) */}
                <g transform="translate(145, 100)">
                  {/* Left Bean */}
                  <path d="M 40,10 C 15,30 10,90 35,125 C 65,135 80,110 82,70 C 82,30 65,5 40,10 Z" fill="url(#beanGrad)" stroke="#313D28" strokeWidth="2" />
                  {/* Center Cut */}
                  <path d="M 75,25 Q 60,70 73,115" stroke="#FDFBF7" strokeWidth="3" fill="none" strokeLinecap="round" />
                  
                  {/* Right Bean */}
                  <path d="M 90,10 C 115,30 120,90 95,125 C 65,135 50,110 48,70 C 48,30 65,5 90,10 Z" fill="url(#beanGrad)" stroke="#313D28" strokeWidth="2" transform="translate(45,0)" />
                  {/* Center Cut */}
                  <path d="M 105,25 Q 120,70 107,115" stroke="#FDFBF7" strokeWidth="3" fill="none" strokeLinecap="round" />
                </g>

                {/* Center Cut Highlight */}
                <text x="230" y="80" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontFamily="sans-serif" fontWeight="bold">EMBRIO BIJI BERPASANGAN</text>

                {/* Callout Lines & Labels */}
                <path d="M 360,60 L 410,40 L 450,40" stroke="#9E2938" strokeWidth="1.5" fill="none" />
                <circle cx="360" cy="60" r="3.5" fill="#9E2938" />
                <text x="455" y="44" fill="#140E0C" fontSize="11" fontFamily="sans-serif" fontWeight="bold">1. Eksokarp (Skin / Kulit Luar)</text>
                <text x="455" y="58" fill="#5A473D" fontSize="9" fontFamily="sans-serif">Lapisan pelindung lilin antosianin</text>

                <path d="M 335,100 L 400,90 L 450,90" stroke="#B8A366" strokeWidth="1.5" fill="none" />
                <circle cx="335" cy="100" r="3.5" fill="#B8A366" />
                <text x="455" y="94" fill="#140E0C" fontSize="11" fontFamily="sans-serif" fontWeight="bold">2. Mesokarp (Musilase / Daging Buah)</text>
                <text x="455" y="108" fill="#5A473D" fontSize="9" fontFamily="sans-serif">Lendir manis kaya sukrosa (Brix 18-24°)</text>

                <path d="M 310,140 L 380,140 L 450,140" stroke="#8A774D" strokeWidth="1.5" fill="none" />
                <circle cx="310" cy="140" r="3.5" fill="#8A774D" />
                <text x="455" y="144" fill="#140E0C" fontSize="11" fontFamily="sans-serif" fontWeight="bold">3. Endokarp (Parchment / Kulit Tanduk)</text>
                <text x="455" y="158" fill="#5A473D" fontSize="9" fontFamily="sans-serif">Cangkang selulosa pelindung kelembapan</text>

                <path d="M 285,185 L 360,190 L 450,190" stroke="#A89F91" strokeWidth="1.5" fill="none" />
                <circle cx="285" cy="185" r="3.5" fill="#A89F91" />
                <text x="455" y="194" fill="#140E0C" fontSize="11" fontFamily="sans-serif" fontWeight="bold">4. Spermoderm (Silver Skin / Kulit Ari)</text>
                <text x="455" y="208" fill="#5A473D" fontSize="9" fontFamily="sans-serif">Lapisan tipis terlepas saat roasting (chaff)</text>

                <path d="M 255,235 L 340,245 L 450,245" stroke="#4E5E40" strokeWidth="1.5" fill="none" />
                <circle cx="255" cy="235" r="3.5" fill="#4E5E40" />
                <text x="455" y="249" fill="#140E0C" fontSize="11" fontFamily="sans-serif" fontWeight="bold">5. Endosperma (Biji Kopi Hijau)</text>
                <text x="455" y="263" fill="#5A473D" fontSize="9" fontFamily="sans-serif">Kandungan asam amino, kafein & asam organik</text>

                <line x1="60" y1="300" x2="160" y2="300" stroke="#745E53" strokeWidth="1.5" />
                <line x1="60" y1="295" x2="60" y2="305" stroke="#745E53" strokeWidth="1.5" />
                <line x1="160" y1="295" x2="160" y2="305" stroke="#745E53" strokeWidth="1.5" />
                <text x="110" y="315" textAnchor="middle" fill="#745E53" fontSize="9" fontFamily="mono">Skala: ~15-20 mm</text>
              </svg>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 pt-4 border-t border-paper-200 text-xs">
              <div className="p-3 bg-paper-100 rounded border border-paper-200">
                <span className="font-bold text-cherry-800 block mb-1">Olah Washed (Basah)</span>
                <p className="text-roast-700 leading-relaxed text-[11px]">
                  Eksokarp & Mesokarp dikupas di stasiun pulper, musilage difermentasi hingga bersih total sebelum dijemur bersama parchment.
                </p>
              </div>
              <div className="p-3 bg-paper-100 rounded border border-paper-200">
                <span className="font-bold text-crema-800 block mb-1">Olah Natural (Kering)</span>
                <p className="text-roast-700 leading-relaxed text-[11px]">
                  Ceri dijemur utuh bersama seluruh lapisan Eksokarp dan Mesokarp, memungkinkan gula musilage berdifusi ke dalam biji.
                </p>
              </div>
              <div className="p-3 bg-paper-100 rounded border border-paper-200">
                <span className="font-bold text-emerald-800 block mb-1">Olah Honey</span>
                <p className="text-roast-700 leading-relaxed text-[11px]">
                  Eksokarp dikupas, namun getah musilage (Mesokarp) dibiarkan melekat sebagian (Yellow, Red, Black Honey) saat penjemuran.
                </p>
              </div>
            </div>
          </div>
        );

      /* =========================================================================
         2. KURVA ROASTING SCA (THERMAL CURVE & RATE OF RISE)
         ========================================================================= */
      case 'roast-curve':
        return (
          <div className="bg-white p-5 sm:p-7 rounded-xl border border-paper-300 shadow-subtle">
            <div className="flex items-center justify-between border-b border-paper-200 pb-3 mb-5">
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-cherry-700" />
                <span className="font-mono text-xs uppercase tracking-wider font-bold text-roast-900">
                  DIAGRAM 02: KURVA TERMAL ROASTING & PROFIL LAJU ROR (RATE OF RISE)
                </span>
              </div>
              <span className="font-mono text-[10px] text-roast-500 uppercase bg-paper-100 px-2 py-0.5 rounded border border-paper-300">
                Cropster & Artisan Standard
              </span>
            </div>

            <div className="relative w-full max-w-3xl mx-auto my-4 aspect-[16/10] bg-roast-950 rounded-lg p-3 sm:p-5 border border-roast-800 overflow-hidden">
              <svg viewBox="0 0 650 360" className="w-full h-full font-mono text-[10px]" xmlns="http://www.w3.org/2000/svg">
                <line x1="60" y1="40" x2="610" y2="40" stroke="#31241E" strokeDasharray="3 3" />
                <line x1="60" y1="100" x2="610" y2="100" stroke="#31241E" strokeDasharray="3 3" />
                <line x1="60" y1="160" x2="610" y2="160" stroke="#31241E" strokeDasharray="3 3" />
                <line x1="60" y1="220" x2="610" y2="220" stroke="#31241E" strokeDasharray="3 3" />
                <line x1="60" y1="280" x2="610" y2="280" stroke="#31241E" strokeWidth="1.5" />

                <text x="50" y="45" fill="#EDDDA4" textAnchor="end">220°C</text>
                <text x="50" y="105" fill="#EDDDA4" textAnchor="end">190°C</text>
                <text x="50" y="165" fill="#EDDDA4" textAnchor="end">150°C</text>
                <text x="50" y="225" fill="#EDDDA4" textAnchor="end">100°C</text>
                <text x="50" y="285" fill="#EDDDA4" textAnchor="end">50°C</text>

                <text x="60" y="305" fill="#957D71" textAnchor="middle">0:00</text>
                <text x="140" y="305" fill="#957D71" textAnchor="middle">2:00</text>
                <text x="240" y="305" fill="#957D71" textAnchor="middle">4:30</text>
                <text x="350" y="305" fill="#957D71" textAnchor="middle">7:00</text>
                <text x="470" y="305" fill="#957D71" textAnchor="middle">9:15</text>
                <text x="580" y="305" fill="#957D71" textAnchor="middle">11:30</text>

                <rect x="60" y="40" width="180" height="240" fill="#EDDDA4" opacity="0.05" />
                <text x="150" y="55" fill="#EDDDA4" textAnchor="middle" fontWeight="bold">FASE PENGERINGAN (DRYING)</text>

                <rect x="240" y="40" width="230" height="240" fill="#CFA946" opacity="0.08" />
                <text x="355" y="55" fill="#CFA946" textAnchor="middle" fontWeight="bold">FASE MAILLARD (BROWNING)</text>

                <rect x="470" y="40" width="140" height="240" fill="#BE4252" opacity="0.12" />
                <text x="540" y="55" fill="#E8A3AC" textAnchor="middle" fontWeight="bold">DEVELOPMENT (DTR 16-20%)</text>

                <path
                  d="M 60,80 Q 90,250 115,240 T 240,160 T 470,90 T 580,60"
                  fill="none"
                  stroke="#E0C774"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                <path
                  d="M 120,70 Q 200,120 350,190 T 580,245"
                  fill="none"
                  stroke="#D66F7C"
                  strokeWidth="2"
                  strokeDasharray="4 3"
                />

                <circle cx="60" cy="80" r="4" fill="#E0C774" />
                <text x="65" y="72" fill="#FFFFFF" fontWeight="bold">Charge: 200°C</text>

                <circle cx="115" cy="240" r="4" fill="#E0C774" />
                <text x="115" y="260" fill="#E0C774" textAnchor="middle" fontWeight="bold">TP: 1:15 (92°C)</text>

                <circle cx="240" cy="160" r="4" fill="#E0C774" />
                <line x1="240" y1="40" x2="240" y2="280" stroke="#CFA946" strokeWidth="1" strokeDasharray="2 2" />
                <text x="240" y="150" fill="#CFA946" textAnchor="middle" fontWeight="bold">Yellow: 150°C</text>

                <circle cx="470" cy="90" r="5" fill="#BE4252" stroke="#FFFFFF" strokeWidth="1.5" />
                <line x1="470" y1="40" x2="470" y2="280" stroke="#BE4252" strokeWidth="1" strokeDasharray="2 2" />
                <text x="470" y="80" fill="#BE4252" textAnchor="middle" fontWeight="bold">FIRST CRACK: 196°C</text>

                <circle cx="580" cy="60" r="5" fill="#C92A3E" stroke="#FFFFFF" strokeWidth="1.5" />
                <text x="580" y="50" fill="#C92A3E" textAnchor="middle" fontWeight="bold">DROP: 208°C</text>

                <rect x="420" y="295" width="190" height="45" fill="#211814" rx="4" stroke="#44342C" />
                <line x1="430" y1="310" x2="450" y2="310" stroke="#E0C774" strokeWidth="3" />
                <text x="458" y="313" fill="#E0C774" fontSize="9">Bean Temp Curve (BT)</text>
                <line x1="430" y1="327" x2="450" y2="327" stroke="#D66F7C" strokeWidth="2" strokeDasharray="4 2" />
                <text x="458" y="330" fill="#D66F7C" fontSize="9">Rate of Rise (RoR Menurun Mulus)</text>
              </svg>
            </div>

            <div className="bg-paper-100 p-4 rounded-lg border border-paper-300 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <span className="font-mono text-[10px] uppercase font-bold text-cherry-800 block mb-1">
                  FORMULA DEVELOPMENT TIME RATIO (DTR)
                </span>
                <p className="font-mono font-bold text-roast-950 text-sm">
                  DTR % = (Waktu First Crack ke Drop ÷ Total Waktu Roasting) × 100%
                </p>
                <p className="text-roast-600 mt-1 text-[11px]">
                  Standar Specialty Light-to-Medium: <strong>14.0% – 18.5%</strong>. Jika DTR &lt; 12% kopi akan berasa rumput (underdeveloped); jika &gt; 22% karakter origin hilang (baked).
                </p>
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase font-bold text-cherry-800 block mb-1">
                  HUKUM SANGRAI SCOTT RAO: EVER-DECREASING ROR
                </span>
                <p className="text-roast-800 leading-relaxed text-[11px]">
                  Kurva RoR (garis merah putus-putus) harus selalu bergerak menurun dari awal hingga akhir tanpa pernah mengalami kenaikan tajam (<em>RoR Flick</em>) maupun penurunan mendadak menjadi datar (<em>RoR Crash/Stall</em>).
                </p>
              </div>
            </div>
          </div>
        );

      /* =========================================================================
         3. SCA COFFEE BREWING CONTROL CHART
         ========================================================================= */
      case 'brewing-control-chart':
        return (
          <div className="bg-white p-5 sm:p-7 rounded-xl border border-paper-300 shadow-subtle">
            <div className="flex items-center justify-between border-b border-paper-200 pb-3 mb-5">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-cherry-700" />
                <span className="font-mono text-xs uppercase tracking-wider font-bold text-roast-900">
                  DIAGRAM 03: SCA COFFEE BREWING CONTROL CHART (TDS VS EXTRACTION YIELD)
                </span>
              </div>
              <span className="font-mono text-[10px] text-roast-500 uppercase bg-paper-100 px-2 py-0.5 rounded border border-paper-300">
                The Golden Cup Standard
              </span>
            </div>

            <div className="relative w-full max-w-2xl mx-auto my-4 aspect-[4/3] bg-paper-50 rounded-lg p-4 border border-paper-200 overflow-hidden">
              <svg viewBox="0 0 500 380" className="w-full h-full font-mono text-[10px]" xmlns="http://www.w3.org/2000/svg">
                <rect x="60" y="40" width="400" height="280" fill="#FFFFFF" stroke="#E5DAC8" />
                
                <line x1="160" y1="40" x2="160" y2="320" stroke="#D3C3AC" strokeDasharray="3 3" />
                <line x1="320" y1="40" x2="320" y2="320" stroke="#D3C3AC" strokeDasharray="3 3" />
                <line x1="60" y1="120" x2="460" y2="120" stroke="#D3C3AC" strokeDasharray="3 3" />
                <line x1="60" y1="220" x2="460" y2="220" stroke="#D3C3AC" strokeDasharray="3 3" />

                <rect x="160" y="120" width="160" height="100" fill="#CFA946" fillOpacity="0.25" stroke="#CFA946" strokeWidth="2.5" />
                <text x="240" y="165" textAnchor="middle" fill="#8F6726" fontWeight="bold" fontSize="13">
                  SCA GOLDEN CUP
                </text>
                <text x="240" y="180" textAnchor="middle" fill="#573F1C" fontSize="10">
                  Ideal Balance & Sweetness
                </text>
                <text x="240" y="195" textAnchor="middle" fill="#7E1D2A" fontWeight="bold" fontSize="9">
                  (18.0% - 22.0% Ext / 1.15 - 1.45% TDS)
                </text>

                <text x="110" y="75" textAnchor="middle" fill="#9E2938" fontWeight="bold">STRONG & UNDER</text>
                <text x="110" y="90" textAnchor="middle" fill="#745E53" fontSize="8.5">Asam Pekat, Asin, Dosis Tinggi</text>

                <text x="110" y="265" textAnchor="middle" fill="#9E2938" fontWeight="bold">WEAK & UNDER</text>
                <text x="110" y="280" textAnchor="middle" fill="#745E53" fontSize="8.5">Asam Encer, Giling Terlalu Kasar</text>

                <text x="390" y="75" textAnchor="middle" fill="#31241E" fontWeight="bold">STRONG & OVER</text>
                <text x="390" y="90" textAnchor="middle" fill="#745E53" fontSize="8.5">Pahit Tajam, Pekat, Astringent</text>

                <text x="390" y="265" textAnchor="middle" fill="#31241E" fontWeight="bold">WEAK & OVER</text>
                <text x="390" y="280" textAnchor="middle" fill="#745E53" fontSize="8.5">Pahit Hambar, Kering, Air Berlebih</text>

                <text x="50" y="45" textAnchor="end" fill="#5A473D">1.60%</text>
                <text x="50" y="125" textAnchor="end" fill="#7E1D2A" fontWeight="bold">1.45%</text>
                <text x="50" y="225" textAnchor="end" fill="#7E1D2A" fontWeight="bold">1.15%</text>
                <text x="50" y="325" textAnchor="end" fill="#5A473D">0.90%</text>
                <text x="20" y="180" textAnchor="middle" transform="rotate(-90 20 180)" fill="#140E0C" fontWeight="bold" fontSize="11">
                  KONSENTRASI TDS % (KEKUATAN RASA)
                </text>

                <text x="60" y="340" textAnchor="middle" fill="#5A473D">14%</text>
                <text x="160" y="340" textAnchor="middle" fill="#7E1D2A" fontWeight="bold">18%</text>
                <text x="240" y="340" textAnchor="middle" fill="#CFA946" fontWeight="bold">20%</text>
                <text x="320" y="340" textAnchor="middle" fill="#7E1D2A" fontWeight="bold">22%</text>
                <text x="460" y="340" textAnchor="middle" fill="#5A473D">26%</text>
                <text x="260" y="365" textAnchor="middle" fill="#140E0C" fontWeight="bold" fontSize="11">
                  EXTRACTION YIELD % (PERSENTASE SENYAWA TERLARUT)
                </text>
              </svg>
            </div>

            <div className="bg-paper-100 p-4 rounded-lg border border-paper-300 font-mono text-xs">
              <span className="text-[10px] uppercase tracking-wider font-bold text-cherry-800 block mb-1">
                RUMUS MATEMATIS EKSTRAKSI KOPI:
              </span>
              <p className="font-bold text-roast-950">
                Extraction Yield (%) = [ Hasil Seduhan Cair (gram) × Nilai TDS (%) ] ÷ Dosis Bubuk Kopi Kering (gram)
              </p>
              <p className="font-sans text-roast-600 mt-1 text-[11px]">
                Contoh: 15g kopi menghasilkan 225g seduhan dengan TDS 1.35% → (225 × 1.35) ÷ 15 = <strong>20.25% Extraction Yield</strong> (Tepat di Pusat Zona Emas SCA).
              </p>
            </div>
          </div>
        );

      /* =========================================================================
         4. DINAMIKA FASE EKSTRAKSI ESPRESSO (RULE OF THIRDS)
         ========================================================================= */
      case 'espresso-phases':
        return (
          <div className="bg-white p-5 sm:p-7 rounded-xl border border-paper-300 shadow-subtle">
            <div className="flex items-center justify-between border-b border-paper-200 pb-3 mb-5">
              <div className="flex items-center gap-2">
                <Coffee className="w-4 h-4 text-cherry-700" />
                <span className="font-mono text-xs uppercase tracking-wider font-bold text-roast-900">
                  DIAGRAM 04: DINAMIKA EKSTRAKSI ESPRESSO 3 FASE (THE RULE OF THIRDS)
                </span>
              </div>
              <span className="font-mono text-[10px] text-roast-500 uppercase bg-paper-100 px-2 py-0.5 rounded border border-paper-300">
                Salami Shot Technique
              </span>
            </div>

            <div className="space-y-4 my-4">
              <div className="h-14 w-full rounded-lg overflow-hidden flex border border-paper-300 shadow-inner font-mono text-xs font-bold text-white text-center">
                <div className="w-[28%] bg-amber-600 flex flex-col items-center justify-center p-1 border-r border-amber-700/40">
                  <span>FASE 1 (0 - 8 Detik)</span>
                  <span className="text-[10px] font-normal text-amber-100">Asam Organik & Garam</span>
                </div>
                <div className="w-[42%] bg-amber-900 flex flex-col items-center justify-center p-1 border-r border-roast-950/40">
                  <span>FASE 2 (8 - 20 Detik)</span>
                  <span className="text-[10px] font-normal text-crema-200">Gula, Karamel, & Body</span>
                </div>
                <div className="w-[30%] bg-roast-950 flex flex-col items-center justify-center p-1">
                  <span>FASE 3 (20 - 30 Detik)</span>
                  <span className="text-[10px] font-normal text-roast-300">Serat Kayu & Pahit</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-amber-50 rounded border border-amber-200">
                  <span className="font-bold text-amber-900 block mb-1">1. Kepala (The Head / Acidity)</span>
                  <ul className="text-roast-700 text-[11px] space-y-1 list-disc pl-4">
                    <li>Aliran kental warna cokelat gelap / merah bata.</li>
                    <li>Sangat asam tajam, asin pekat, konsentrasi padatan tertinggi.</li>
                    <li>Jika berhenti di sini: <em>Ristretto ekstrim / Sour Under-extracted</em>.</li>
                  </ul>
                </div>
                <div className="p-3 bg-paper-100 rounded border border-paper-300">
                  <span className="font-bold text-roast-900 block mb-1">2. Badan (The Body / Sweetness)</span>
                  <ul className="text-roast-700 text-[11px] space-y-1 list-disc pl-4">
                    <li>Aliran garis harimau (tiger striping) warna madu keemasan.</li>
                    <li>Melarutkan sukrosa, lipid, melanoidin penghasil tekstur lembut berbobot.</li>
                    <li>Memberikan rasa manis penyeimbang asam fase awal.</li>
                  </ul>
                </div>
                <div className="p-3 bg-roast-50 rounded border border-roast-200">
                  <span className="font-bold text-roast-950 block mb-1">3. Ekor (The Tail / Bitterness)</span>
                  <ul className="text-roast-700 text-[11px] space-y-1 list-disc pl-4">
                    <li>Aliran encer, pucat (blonding), bergelombang cepat.</li>
                    <li>Melarutkan asam kina, tannin, senyawa selulosa pahit.</li>
                    <li>Penting dalam proporsi kecil untuk struktur; berlebih menyebabkan rasa kering di lidah.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      /* =========================================================================
         5. TEKNIK STEAMING SUSU & PEMBENTUKAN VORTEX
         ========================================================================= */
      case 'milk-steaming-vortex':
        return (
          <div className="bg-white p-5 sm:p-7 rounded-xl border border-paper-300 shadow-subtle">
            <div className="flex items-center justify-between border-b border-paper-200 pb-3 mb-5">
              <div className="flex items-center gap-2">
                <Droplets className="w-4 h-4 text-cherry-700" />
                <span className="font-mono text-xs uppercase tracking-wider font-bold text-roast-900">
                  DIAGRAM 05: FISIKA STEAMING SUSU & SUDUT PUSARAN VORTEX (TOP & SIDE VIEW)
                </span>
              </div>
              <span className="font-mono text-[10px] text-roast-500 uppercase bg-paper-100 px-2 py-0.5 rounded border border-paper-300">
                Microfoam Texture Standard
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
              <div className="bg-paper-50 p-4 rounded-lg border border-paper-200 flex flex-col items-center">
                <span className="font-mono text-[10px] font-bold text-roast-600 mb-2 uppercase">
                  TAMPAK ATAS (TOP VIEW): POSISI JAM 3
                </span>
                <svg viewBox="0 0 200 200" className="w-44 h-44">
                  <circle cx="100" cy="100" r="85" fill="#FFFFFF" stroke="#31241E" strokeWidth="3" />
                  <path d="M 90,15 L 100,5 L 110,15 Z" fill="#745E53" />
                  <line x1="100" y1="20" x2="100" y2="180" stroke="#E5DAC8" strokeDasharray="3 3" />
                  <line x1="20" y1="100" x2="180" y2="100" stroke="#E5DAC8" strokeDasharray="3 3" />
                  
                  <path d="M 100,45 A 55 55 0 1 1 50,120" stroke="#BE4252" strokeWidth="2.5" fill="none" strokeDasharray="4 2" />
                  <polygon points="50,120 42,110 58,112" fill="#BE4252" />

                  <circle cx="145" cy="100" r="10" fill="#BE4252" stroke="#FFFFFF" strokeWidth="2" />
                  <text x="145" y="104" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">WAND</text>
                  <text x="100" y="105" textAnchor="middle" fill="#745E53" fontSize="9" fontWeight="bold">PUSARAN VORTEX</text>
                </svg>
                <p className="text-[11px] text-roast-600 text-center mt-2">
                  Tempatkan tip steam wand sedikit bergeser dari tengah ke arah jam 3 (atau jam 9) untuk memicu pusaran berputar cepat.
                </p>
              </div>

              <div className="bg-paper-50 p-4 rounded-lg border border-paper-200 flex flex-col items-center">
                <span className="font-mono text-[10px] font-bold text-roast-600 mb-2 uppercase">
                  TAMPAK SAMPING: 2 TAHAP PENURUNAN & SUHU
                </span>
                <div className="w-full space-y-3 py-2 text-xs">
                  <div className="p-3 bg-white rounded border-l-4 border-l-amber-500 border border-paper-200">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-roast-900">FASE 1: AERASI / STRETCHING</span>
                      <span className="font-mono text-[10px] text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded font-bold">8°C - 37°C</span>
                    </div>
                    <p className="text-roast-600 text-[11px]">
                      Tip wand tepat 1 mm di bawah permukaan susu. Suara mendesis halus (*ch-ch-ch*). Udara disuntikkan sebelum protein whey mengalami denaturasi.
                    </p>
                  </div>

                  <div className="p-3 bg-white rounded border-l-4 border-l-cherry-700 border border-paper-200">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-roast-900">FASE 2: TEXTURING / ROLLING</span>
                      <span className="font-mono text-[10px] text-cherry-700 bg-cherry-50 px-1.5 py-0.5 rounded font-bold">37°C - 65°C</span>
                    </div>
                    <p className="text-roast-600 text-[11px]">
                      Tenggelamkan tip 1 cm lebih dalam. Matikan suara desis. Pusaran vortex melipat dan menghancurkan gelembung besar menjadi kilau *microfoam sutra wet paint*.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      /* =========================================================================
         6. KIMIA AIR SPESIALTI (MAGNESIUM, KALSIUM, BUFFER)
         ========================================================================= */
      case 'water-chemistry':
        return (
          <div className="bg-white p-5 sm:p-7 rounded-xl border border-paper-300 shadow-subtle">
            <div className="flex items-center justify-between border-b border-paper-200 pb-3 mb-5">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cherry-700" />
                <span className="font-mono text-xs uppercase tracking-wider font-bold text-roast-900">
                  DIAGRAM 06: KIMIA PELARUT AIR SEDUH & PERAN KATION (MG²⁺ VS CA²⁺ VS HCO₃⁻)
                </span>
              </div>
              <span className="font-mono text-[10px] text-roast-500 uppercase bg-paper-100 px-2 py-0.5 rounded border border-paper-300">
                Hendon & Colonna-Dashwood Water Standard
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
              <div className="p-4 bg-sky-50 rounded-xl border border-sky-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-7 h-7 rounded-lg bg-sky-600 text-white font-mono text-xs flex items-center justify-center font-bold">
                    Mg²⁺
                  </span>
                  <span className="font-bold text-sky-950 text-xs">Magnesium (Ekstraktor Flavour)</span>
                </div>
                <p className="text-[11px] text-sky-900 leading-relaxed">
                  Memiliki kerapatan muatan tertinggi. Sangat agresif mengikat molekul beroksigen tinggi seperti senyawa buah sitrus, berry, dan aroma floral. Target: <strong>60 – 90 ppm</strong>.
                </p>
              </div>

              <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-7 h-7 rounded-lg bg-amber-600 text-white font-mono text-xs flex items-center justify-center font-bold">
                    Ca²⁺
                  </span>
                  <span className="font-bold text-amber-950 text-xs">Kalsium (Ekstraktor Body)</span>
                </div>
                <p className="text-[11px] text-amber-900 leading-relaxed">
                  Mengikat senyawa gula karamel dan bodi lebih kuat. Namun jika berlebih di atas 100 ppm, berisiko tinggi membentuk kerak kapur (*limescale*) pada boiler mesin. Target: <strong>30 – 50 ppm</strong>.
                </p>
              </div>

              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-7 h-7 rounded-lg bg-emerald-600 text-white font-mono text-xs flex items-center justify-center font-bold">
                    HCO₃⁻
                  </span>
                  <span className="font-bold text-emerald-950 text-xs">Bikarbonat (Buffer Penyangga)</span>
                </div>
                <p className="text-[11px] text-emerald-900 leading-relaxed">
                  Menetralkan asam organik agar tidak terlalu menusuk lambung. Jika terlalu rendah (&lt; 20 ppm) kopi terasa asam cuka liar; jika terlalu tinggi (&gt; 80 ppm) keasaman manis hilang dan kopi berasa hambar kapur. Target: <strong>40 – 50 ppm</strong>.
                </p>
              </div>
            </div>

            <div className="p-4 bg-paper-100 rounded-lg border border-paper-300 font-mono text-xs flex flex-wrap items-center justify-between gap-2">
              <span className="font-bold text-roast-900">STANDAR RESMI AIR SPESIALTI SCA:</span>
              <span className="text-cherry-800 font-bold">TDS Target: 150 ppm (Rentang 75 - 250 ppm)</span>
              <span className="text-roast-700">pH: 6.5 - 7.5</span>
              <span className="text-roast-700">Klorin: 0.0 mg/L (Bebas Kaporit)</span>
            </div>
          </div>
        );

      /* =========================================================================
         7. POHON SILSILAH VARIETAS ARABIKA DUNIA
         ========================================================================= */
      case 'varieties-tree':
        return (
          <div className="bg-white p-5 sm:p-7 rounded-xl border border-paper-300 shadow-subtle">
            <div className="flex items-center justify-between border-b border-paper-200 pb-3 mb-5">
              <div className="flex items-center gap-2">
                <GitBranch className="w-4 h-4 text-cherry-700" />
                <span className="font-mono text-xs uppercase tracking-wider font-bold text-roast-900">
                  DIAGRAM 07: POHON SILSILAH & GENEALOGI VARIETAS ARABIKA DUNIA
                </span>
              </div>
              <span className="font-mono text-[10px] text-roast-500 uppercase bg-paper-100 px-2 py-0.5 rounded border border-paper-300">
                World Coffee Research (WCR) Tree
              </span>
            </div>

            <div className="p-4 bg-paper-50 rounded-lg border border-paper-200 overflow-x-auto">
              <div className="min-w-[500px] space-y-4 font-mono text-xs">
                <div className="text-center p-2.5 bg-emerald-800 text-white rounded font-bold max-w-xs mx-auto">
                  COFFEA ARABICA INDUK (ETHOPIA NATIVE)
                </div>
                <div className="w-0.5 h-6 bg-paper-400 mx-auto"></div>

                <div className="grid grid-cols-2 gap-6">
                  {/* Typica Branch */}
                  <div className="space-y-3 bg-paper-100 p-3.5 rounded border border-paper-300">
                    <div className="font-bold text-cherry-800 border-b border-paper-300 pb-1 text-center">
                      GARIS KETURUNAN TYPICA
                    </div>
                    <ul className="text-[11px] text-roast-800 space-y-2">
                      <li className="p-1.5 bg-white rounded border border-paper-200">
                        <strong>Typica Murni (Batavia 1696)</strong> → Bergendal & Juria (Aceh/Flores). Rasa clean cup, floral melati.
                      </li>
                      <li className="p-1.5 bg-white rounded border border-paper-200">
                        <strong>Maragogype (Mutasi Alami)</strong> → Biji gajah raksasa (*Elephant Bean*).
                      </li>
                      <li className="p-1.5 bg-white rounded border border-paper-200">
                        <strong>Geisha / Gesha (Ethiopia T2722)</strong> → Ketenaran Panama Hacienda La Esmeralda, profil melati bergamot.
                      </li>
                    </ul>
                  </div>

                  {/* Bourbon Branch */}
                  <div className="space-y-3 bg-paper-100 p-3.5 rounded border border-paper-300">
                    <div className="font-bold text-crema-800 border-b border-paper-300 pb-1 text-center">
                      GARIS KETURUNAN BOURBON
                    </div>
                    <ul className="text-[11px] text-roast-800 space-y-2">
                      <li className="p-1.5 bg-white rounded border border-paper-200">
                        <strong>Bourbon Murni (Pulau Reunion)</strong> → Rasa manis karamel tinggi, bodi bulat.
                      </li>
                      <li className="p-1.5 bg-white rounded border border-paper-200">
                        <strong>Caturra (Mutasi Kerdil Brasil)</strong> → Pohon kompak padat hasil panen tinggi.
                      </li>
                      <li className="p-1.5 bg-white rounded border border-paper-200">
                        <strong>SL28 & SL34 (Kenya Scott Labs)</strong> → Keasaman asam fosfat kompleks seperti blackcurrant.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="w-0.5 h-6 bg-paper-400 mx-auto"></div>

                {/* Hybrid Branch */}
                <div className="p-3.5 bg-roast-900 text-paper-50 rounded-lg max-w-lg mx-auto text-center">
                  <div className="font-bold text-crema-300 mb-1">
                    PERSILANGAN HIBRIDA NUSANTARA: HIBRIDO DE TIMOR (TIM-TIM)
                  </div>
                  <p className="text-[11px] text-paper-200">
                    Persilangan alami spontan Arabica x Robusta di Timor Leste tahun 1920-an. Membawa gen ketahanan karat daun (*Hemileia vastatrix*). Menjadi induk bagi: <strong>Catimor, Sigarar Utang (Ateng Super Toba), dan S-795</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      /* =========================================================================
         8. PERBANDINGAN PROSES PASCA PANEN
         ========================================================================= */
      case 'processing-comparison':
        return (
          <div className="bg-white p-5 sm:p-7 rounded-xl border border-paper-300 shadow-subtle">
            <div className="flex items-center justify-between border-b border-paper-200 pb-3 mb-5">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-cherry-700" />
                <span className="font-mono text-xs uppercase tracking-wider font-bold text-roast-900">
                  DIAGRAM 08: MATRIKS PERBANDINGAN BIOPROSES PASCA PANEN KOPI
                </span>
              </div>
              <span className="font-mono text-[10px] text-roast-500 uppercase bg-paper-100 px-2 py-0.5 rounded border border-paper-300">
                CQI Q Processing Matrix
              </span>
            </div>

            <div className="overflow-x-auto my-4 border border-paper-300 rounded-lg">
              <table className="w-full text-xs text-left border-collapse">
                <thead className="bg-paper-200 font-mono text-[10px] uppercase text-roast-900">
                  <tr>
                    <th className="p-3 border-b border-paper-300">Metode Olah</th>
                    <th className="p-3 border-b border-paper-300">Status Kulit & Musilage saat Dijemur</th>
                    <th className="p-3 border-b border-paper-300">Kadar Air saat Hulling</th>
                    <th className="p-3 border-b border-paper-300">Karakter Profil Sensorik Cangkir</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-paper-200 bg-white">
                  <tr>
                    <td className="p-3 font-bold text-cherry-800">Washed (Basah)</td>
                    <td className="p-3 text-roast-700">Kulit dikupas, lendir musilage dicuci bersih total</td>
                    <td className="p-3 font-mono text-roast-800">10.5% – 11.5%</td>
                    <td className="p-3 text-roast-800"><em>Clean cup</em>, keasaman cerah (bright acidity), bunga & sitrus segar.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-amber-800">Honey (Pulped)</td>
                    <td className="p-3 text-roast-700">Kulit dikupas, sebagian getah musilage dibiarkan melekat</td>
                    <td className="p-3 font-mono text-roast-800">10.5% – 11.5%</td>
                    <td className="p-3 text-roast-800">Manis madu karamel, bodi sedang halus, keasaman lembut bulat.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-crema-900">Natural (Kering)</td>
                    <td className="p-3 text-roast-700">Ceri utuh dijemur tanpa dikupas sama sekali</td>
                    <td className="p-3 font-mono text-roast-800">10.5% – 11.5%</td>
                    <td className="p-3 text-roast-800">Bodi tebal, aroma fermentasi buah matang, blueberry & winey manis.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-emerald-900">Giling Basah (Sumatra)</td>
                    <td className="p-3 text-roast-700">Kupas kulit buah, dijemur singkat, kulit tanduk dikupas saat basah</td>
                    <td className="p-3 font-mono text-emerald-800 font-bold">35% – 45% (Basah)</td>
                    <td className="p-3 text-roast-800">Bodi sangat pekat (heavy body), herbal rempah, earthy, rendah asam.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-purple-900">Anaerobik / Carbonic</td>
                    <td className="p-3 text-roast-700">Fermentasi ceri/biji dalam tangki kedap udara diinjeksi gas CO2</td>
                    <td className="p-3 font-mono text-roast-800">10.5% – 11.5%</td>
                    <td className="p-3 text-roast-800">Kompleksitas rasa ekstrem, buah tropis (nangka, mangga), fermented funk.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );

      /* =========================================================================
         9. PETA RANTAI NILAI KOPI (SPECIALTY COFFEE VALUE CHAIN)
         ========================================================================= */
      case 'value-chain':
        return (
          <div className="bg-white p-5 sm:p-7 rounded-xl border border-paper-300 shadow-subtle">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-paper-200 pb-3 mb-5 gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cherry-700 animate-pulse"></span>
                <span className="font-mono text-xs uppercase tracking-wider font-bold text-roast-900">
                  INFOGRAFIS: PETA 6 TITIK KRITIS RANTAI NILAI KOPI SPECIALTY
                </span>
              </div>
              <span className="font-mono text-[10px] text-cherry-700 uppercase bg-cherry-50 px-2.5 py-0.5 rounded border border-cherry-200 font-bold self-start sm:self-auto">
                Dari Pohon ke Cangkir
              </span>
            </div>

            <p className="text-xs text-roast-600 mb-6 leading-relaxed">
              Kualitas secangkir kopi specialty adalah hasil akumulasi ketelitian 6 mata rantai yang saling mengikat. Kerusakan mutu di satu tahap hulu tidak akan pernah bisa diperbaiki di tahap hilir:
            </p>

            {/* 6 Sequential Visual Step Cards */}
            <div className="space-y-4">
              {/* Step 1: Petani */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 p-4 rounded-xl bg-paper-50 border border-paper-300 hover:border-paper-400 transition shadow-xs items-center">
                <div className="sm:col-span-4 relative rounded-lg overflow-hidden h-36 sm:h-28 border border-paper-200">
                  <img
                    src="https://images.unsplash.com/photo-1592663527359-cf6642f54cff?w=600&auto=format&fit=crop&q=80"
                    alt="Petani Kopi Petik Merah"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-roast-950/85 text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded">
                    01 • HULU
                  </span>
                </div>
                <div className="sm:col-span-8">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-serif font-bold text-sm text-roast-950">Petani (Farmer & Agronomist)</h4>
                    <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded font-semibold">
                      18° – 24° Brix
                    </span>
                  </div>
                  <p className="text-xs text-roast-700 leading-relaxed mb-2">
                    Bertanggung jawab atas pemuliaan varietas, perawatan mikroklimat tanah vulkanik, pemangkasan (pruning), dan <strong>panen petik merah selektif 100% matang</strong>.
                  </p>
                  <div className="text-[11px] font-mono text-roast-500 bg-paper-100 p-2 rounded border border-paper-200">
                    <strong className="text-roast-900">Peran Kritis:</strong> Menciptakan seluruh potensi biologis rasa manis (sukrosa), prekursor aroma, dan keasaman organik.
                  </div>
                </div>
              </div>

              {/* Connecting Indicator */}
              <div className="flex justify-center -my-2 text-roast-400">
                <span className="font-mono text-xs">▼</span>
              </div>

              {/* Step 2: Processor */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 p-4 rounded-xl bg-paper-50 border border-paper-300 hover:border-paper-400 transition shadow-xs items-center">
                <div className="sm:col-span-4 relative rounded-lg overflow-hidden h-36 sm:h-28 border border-paper-200">
                  <img
                    src="https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?w=600&auto=format&fit=crop&q=80"
                    alt="Pengeringan Ceri Kopi di Wet Mill"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-roast-950/85 text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded">
                    02 • PENGOLAHAN
                  </span>
                </div>
                <div className="sm:col-span-8">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-serif font-bold text-sm text-roast-950">Processor (Wet Mill & Fermentasi)</h4>
                    <span className="text-[10px] font-mono text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded font-semibold">
                      Kadar Air 10% – 12%
                    </span>
                  </div>
                  <p className="text-xs text-roast-700 leading-relaxed mb-2">
                    Melakukan sortasi rambang air (pemisahan buah kopong/floaters), depulping, fermentasi mikrobiologis terkontrol (Washed, Honey, Natural, Anaerobik), dan penjemuran para-para.
                  </p>
                  <div className="text-[11px] font-mono text-roast-500 bg-paper-100 p-2 rounded border border-paper-200">
                    <strong className="text-roast-900">Peran Kritis:</strong> Mengunci kejernihan rasa (*clean cup*) atau kompleksitas buah fermentasi tanpa kontaminasi kapang/jamur.
                  </div>
                </div>
              </div>

              {/* Connecting Indicator */}
              <div className="flex justify-center -my-2 text-roast-400">
                <span className="font-mono text-xs">▼</span>
              </div>

              {/* Step 3: Trader & Dry Mill */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 p-4 rounded-xl bg-paper-50 border border-paper-300 hover:border-paper-400 transition shadow-xs items-center">
                <div className="sm:col-span-4 relative rounded-lg overflow-hidden h-36 sm:h-28 border border-paper-200">
                  <img
                    src="https://images.unsplash.com/photo-1587734195503-904fca47e0e9?w=600&auto=format&fit=crop&q=80"
                    alt="Sortasi Biji Kopi Hijau di Dry Mill"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-roast-950/85 text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded">
                    03 • SORTASI & LOGISTIK
                  </span>
                </div>
                <div className="sm:col-span-8">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-serif font-bold text-sm text-roast-950">Trader, Collector, & Dry Mill</h4>
                    <span className="text-[10px] font-mono text-indigo-800 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded font-semibold">
                      Zero Primary Defect
                    </span>
                  </div>
                  <p className="text-xs text-roast-700 leading-relaxed mb-2">
                    Mengupas kulit tanduk (*hulling*), memilah ukuran biji (*screen size grading*), memisahkan densitas dengan *gravity table*, cupping QC kelayakan ekspor, dan mengemas dalam karung GrainPro.
                  </p>
                  <div className="text-[11px] font-mono text-roast-500 bg-paper-100 p-2 rounded border border-paper-200">
                    <strong className="text-roast-900">Peran Kritis:</strong> Menghilangkan cacat fisik biji dan menjaga kesegaran kadar air selama pengiriman antar pulau / benua.
                  </div>
                </div>
              </div>

              {/* Connecting Indicator */}
              <div className="flex justify-center -my-2 text-roast-400">
                <span className="font-mono text-xs">▼</span>
              </div>

              {/* Step 4: Roaster */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 p-4 rounded-xl bg-paper-50 border border-paper-300 hover:border-paper-400 transition shadow-xs items-center">
                <div className="sm:col-span-4 relative rounded-lg overflow-hidden h-36 sm:h-28 border border-paper-200">
                  <img
                    src="https://images.unsplash.com/photo-1518057111178-44a106bad636?w=600&auto=format&fit=crop&q=80"
                    alt="Mesin Sangrai Kopi Specialty Roaster"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-roast-950/85 text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded">
                    04 • PENYANGRAIAN
                  </span>
                </div>
                <div className="sm:col-span-8">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-serif font-bold text-sm text-roast-950">Roaster (Penyangrai Kopi)</h4>
                    <span className="text-[10px] font-mono text-rose-800 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded font-semibold">
                      DTR 15% – 20%
                    </span>
                  </div>
                  <p className="text-xs text-roast-700 leading-relaxed mb-2">
                    Mengendalikan termodinamika drum (konveksi, konduksi, radiasi), memandu laju kenaikan suhu (*Rate of Rise* / RoR), memicu reaksi Maillard, dan mengkaramelisasi gula tanpa rasa hangus (*baked*).
                  </p>
                  <div className="text-[11px] font-mono text-roast-500 bg-paper-100 p-2 rounded border border-paper-200">
                    <strong className="text-roast-900">Peran Kritis:</strong> Mentransformasi prekursor rasa mentah menjadi lebih dari 800 molekul senyawa aromatik yang siap larut dalam air.
                  </div>
                </div>
              </div>

              {/* Connecting Indicator */}
              <div className="flex justify-center -my-2 text-roast-400">
                <span className="font-mono text-xs">▼</span>
              </div>

              {/* Step 5: Barista & Brewer */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 p-4 rounded-xl bg-paper-50 border border-paper-300 hover:border-paper-400 transition shadow-xs items-center">
                <div className="sm:col-span-4 relative rounded-lg overflow-hidden h-36 sm:h-28 border border-paper-200">
                  <img
                    src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80"
                    alt="Barista Menyeduh Kopi Manual Brew dan Espresso"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-roast-950/85 text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded">
                    05 • EKSTRAKSI HILIR
                  </span>
                </div>
                <div className="sm:col-span-8">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-serif font-bold text-sm text-roast-950">Barista & Brewer (Penyeduh Akhir)</h4>
                    <span className="text-[10px] font-mono text-cyan-800 bg-cyan-50 border border-cyan-200 px-2 py-0.5 rounded font-semibold">
                      18% – 22% Extraction Yield
                    </span>
                  </div>
                  <p className="text-xs text-roast-700 leading-relaxed mb-2">
                    Mengkalibrasi ukuran gilingan mikro (*grind dial-in*), merekayasa komposisi kimia air seduh (magnesium & buffer kalsium), mengontrol hidrodinamika turbulensi, dan menyajikan keramahan (*hospitality*).
                  </p>
                  <div className="text-[11px] font-mono text-roast-500 bg-paper-100 p-2 rounded border border-paper-200">
                    <strong className="text-roast-900">Peran Kritis:</strong> Melarutkan senyawa rasa seimbang ke cangkir dan menjadi duta penyampai cerita (*storyteller*) perjalanan kopi ke penikmat.
                  </div>
                </div>
              </div>

              {/* Connecting Indicator */}
              <div className="flex justify-center -my-2 text-roast-400">
                <span className="font-mono text-xs">▼</span>
              </div>

              {/* Step 6: Konsumen Teredukasi */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 p-4 rounded-xl bg-paper-50 border border-paper-300 hover:border-paper-400 transition shadow-xs items-center">
                <div className="sm:col-span-4 relative rounded-lg overflow-hidden h-36 sm:h-28 border border-paper-200">
                  <img
                    src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&auto=format&fit=crop&q=80"
                    alt="Konsumen Menikmati Kopi Specialty"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-roast-950/85 text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded">
                    06 • KONSUMEN & APRESIASI
                  </span>
                </div>
                <div className="sm:col-span-8">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-serif font-bold text-sm text-roast-950">Konsumen Teredukasi (The Conscious Consumer)</h4>
                    <span className="text-[10px] font-mono text-roast-800 bg-paper-200 border border-paper-300 px-2 py-0.5 rounded font-semibold">
                      Perdagangan Berkelanjutan
                    </span>
                  </div>
                  <p className="text-xs text-roast-700 leading-relaxed mb-2">
                    Mengapresiasi keunikan rasa origin tanpa gula berlebih, memahami kerja keras rantai pasok kopi, dan bersedia membayar harga premium yang adil untuk kopi yang bersumber etis.
                  </p>
                  <div className="text-[11px] font-mono text-roast-500 bg-paper-100 p-2 rounded border border-paper-200">
                    <strong className="text-roast-900">Peran Kritis:</strong> Menutup siklus keberlanjutan ekonomi, mengalirkan kembali modal ke petani hulu untuk terus menanam kopi berkualitas tinggi.
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Callout */}
            <div className="mt-5 p-3.5 bg-paper-100 rounded-lg border border-paper-200 flex items-start gap-2 text-xs text-roast-800">
              <span className="text-base">💡</span>
              <p className="leading-relaxed">
                <strong>Hukum Kekekalan Kualitas Kopi:</strong> Kualitas rasa secangkir kopi 100% diciptakan di tingkat kebun oleh alam dan petani. Seluruh pihak setelah petani (processor, trader, roaster, barista) hanya memiliki satu tugas: <em>mempertahankan dan membuka potensi kualitas tersebut tanpa merusaknya.</em>
              </p>
            </div>
          </div>
        );

      /* =========================================================================
         DEFAULT FALLBACK
         ========================================================================= */
      default:
        return (
          <div className="p-5 bg-paper-100 rounded-xl border border-paper-300 text-center text-xs">
            <span className="font-mono text-roast-600 font-bold uppercase block mb-1">
              DIAGRAM EDUKATIF: {type.toUpperCase()}
            </span>
            <p className="text-roast-800">{caption || 'Visualisasi terverifikasi kurikulum CherryEdu.'}</p>
          </div>
        );
    }
  };

  return (
    <div className="my-8 not-prose">
      {renderDiagram()}
      {caption && (
        <span className="block mt-2 text-center text-xs font-serif italic text-roast-600">
          {caption}
        </span>
      )}
    </div>
  );
};
