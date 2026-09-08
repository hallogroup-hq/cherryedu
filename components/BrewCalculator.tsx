'use client';

import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Clock, Sparkles, Sliders, Calculator, Droplets, Layers } from 'lucide-react';

interface BrewMethodConfig {
  id: string;
  name: string;
  defaultDose: number;
  minDose: number;
  maxDose: number;
  defaultRatio: number;
  ratioOptions: number[];
  temperature: string;
  grindSize: string;
  targetTime: string;
  tips: string;
  waterFormula: (dose: number, ratio: number) => { water: number; ice?: number };
}

const BREW_METHODS: BrewMethodConfig[] = [
  {
    id: 'v60',
    name: 'Hario V60',
    defaultDose: 15,
    minDose: 10,
    maxDose: 35,
    defaultRatio: 15,
    ratioOptions: [14, 15, 16, 17],
    temperature: '90°C – 93°C',
    grindSize: 'Medium-Fine (seperti garam meja kasar)',
    targetTime: '2:15 – 2:45',
    tips: 'Tuang 3 tahap: 0:00 Blooming 45g (45 detik), 0:45 tuang memutar hingga 140g, 1:20 tuang hingga 225g.',
    waterFormula: (dose, ratio) => ({ water: Math.round(dose * ratio) }),
  },
  {
    id: 'aeropress',
    name: 'Aeropress',
    defaultDose: 18,
    minDose: 12,
    maxDose: 30,
    defaultRatio: 11,
    ratioOptions: [10, 11, 12, 14, 15],
    temperature: '85°C – 88°C',
    grindSize: 'Medium (seperti pasir laut)',
    targetTime: '1:45 – 2:00',
    tips: 'Metode terbalik (inverted). Tuang air, aduk 5 putaran perlahan, balik di menit 1:15 dan tekan pelan selama 30 detik.',
    waterFormula: (dose, ratio) => ({ water: Math.round(dose * ratio) }),
  },
  {
    id: 'french-press',
    name: 'French Press',
    defaultDose: 20,
    minDose: 15,
    maxDose: 50,
    defaultRatio: 15,
    ratioOptions: [12, 14, 15, 16],
    temperature: '93°C – 95°C',
    grindSize: 'Coarse (kasar berbutir)',
    targetTime: '4:00',
    tips: 'Rendam penuh 4 menit. Pecahkan kerak (crust) atas dengan sendok, bersihkan busa putih mengambang, lalu tekan plunger perlahan.',
    waterFormula: (dose, ratio) => ({ water: Math.round(dose * ratio) }),
  },
  {
    id: 'japanese-iced',
    name: 'Japanese Iced',
    defaultDose: 18,
    minDose: 15,
    maxDose: 35,
    defaultRatio: 15,
    ratioOptions: [14, 15, 16],
    temperature: '92°C – 94°C',
    grindSize: 'Medium-Fine',
    targetTime: '2:15',
    tips: 'Formula 40% es batu di dalam server dan 60% air panas saat menyeduh. Rasa buah dan aroma terkunci seketika lewat thermal shock.',
    waterFormula: (dose, ratio) => {
      const total = dose * ratio;
      return { water: Math.round(total * 0.6), ice: Math.round(total * 0.4) };
    },
  },
  {
    id: 'espresso',
    name: 'Espresso (9 Bar)',
    defaultDose: 18,
    minDose: 14,
    maxDose: 22,
    defaultRatio: 2,
    ratioOptions: [1.8, 2.0, 2.2, 2.5],
    temperature: '91°C – 94°C',
    grindSize: 'Fine (bubuk halus bertepung mikro)',
    targetTime: '26 – 30 detik',
    tips: 'Rasio klasik 1:2. Dosis 18 gram menghasilkan 36 gram liquid espresso dalam 27-29 detik dengan yield ekstraksi 19-21%.',
    waterFormula: (dose, ratio) => ({ water: Math.round(dose * ratio * 10) / 10 }),
  },
  {
    id: 'cold-brew',
    name: 'Cold Brew',
    defaultDose: 50,
    minDose: 30,
    maxDose: 150,
    defaultRatio: 10,
    ratioOptions: [8, 10, 12],
    temperature: 'Air suhu ruang / dingin (4°C – 20°C)',
    grindSize: 'Extra Coarse (sangat kasar)',
    targetTime: '12 – 18 Jam',
    tips: 'Ekstraksi lambat bebas asam getir berlebih. Simpan di kulkas selama 14-16 jam sebelum disaring.',
    waterFormula: (dose, ratio) => ({ water: Math.round(dose * ratio) }),
  },
];

export const BrewCalculator: React.FC = () => {
  const [calculatorMode, setCalculatorMode] = useState<'preset' | 'custom'>('preset');

  // Preset state
  const [selectedMethod, setSelectedMethod] = useState<BrewMethodConfig>(BREW_METHODS[0]);
  const [dose, setDose] = useState<number>(BREW_METHODS[0].defaultDose);
  const [ratio, setRatio] = useState<number>(BREW_METHODS[0].defaultRatio);

  // Custom state
  const [customCalculationBasis, setCustomCalculationBasis] = useState<'dose-to-water' | 'water-to-dose'>('dose-to-water');
  const [customDose, setCustomDose] = useState<number>(16);
  const [customWaterTarget, setCustomWaterTarget] = useState<number>(250);
  const [customRatio, setCustomRatio] = useState<number>(15.5);
  const [customBypassWater, setCustomBypassWater] = useState<number>(0);

  // Timer
  const [timerSeconds, setTimerSeconds] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const handleMethodChange = (m: BrewMethodConfig) => {
    setSelectedMethod(m);
    setDose(m.defaultDose);
    setRatio(m.defaultRatio);
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainder.toString().padStart(2, '0')}`;
  };

  // Preset calculation
  const presetCalculation = selectedMethod.waterFormula(dose, ratio);

  // Custom calculation
  const computedCustomWater = customCalculationBasis === 'dose-to-water'
    ? Math.round(customDose * customRatio * 10) / 10
    : customWaterTarget;

  const computedCustomDose = customCalculationBasis === 'dose-to-water'
    ? customDose
    : Math.round((customWaterTarget / customRatio) * 10) / 10;

  const activeDose = calculatorMode === 'preset' ? dose : computedCustomDose;
  const activeTotalWater = calculatorMode === 'preset' ? presetCalculation.water : computedCustomWater;

  // Pour schedule stages (40:60 framework)
  const bloomWater = Math.round(activeDose * 3);
  const secondPour = Math.round(activeTotalWater * 0.6);
  const finalPour = activeTotalWater;

  // Estimated beverage yield (coffee grounds absorb ~2x their dry weight in water)
  const estimatedLiquidYield = Math.max(0, Math.round(activeTotalWater - (activeDose * 2)));

  return (
    <div className="bg-paper-50 rounded-xl border border-paper-400 p-6 sm:p-8 shadow-xs">
      {/* Top Header & Tactile Timer */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-paper-300">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-[10px] tracking-widest text-cherry-700 font-bold uppercase bg-cherry-50 px-2 py-0.5 border border-cherry-200">
              [ APPARATUS LAB // RATIO ENGINE ]
            </span>
          </div>
          <h3 className="font-serif font-bold text-2xl text-roast-950">
            Kalkulator Rasio & Dial-In Seduh
          </h3>
          <p className="font-sans text-xs text-roast-600 mt-1 max-w-xl">
            Tentukan rasio seduh presisi menggunakan preset alat seduh populer berstandar SCA atau masukkan rasio kustom bebas sesuai selera.
          </p>
        </div>

        {/* Tactile Stopwatch */}
        <div className="flex items-center gap-3 bg-paper-100 p-2.5 rounded-lg border border-paper-300 self-start sm:self-auto font-mono">
          <Clock className="w-4 h-4 text-roast-500" />
          <div className="text-xl font-bold text-roast-950 min-w-[60px]">
            {formatTime(timerSeconds)}
          </div>
          <button
            onClick={() => setIsTimerRunning(!isTimerRunning)}
            className={`p-1.5 rounded transition-all border ${
              isTimerRunning
                ? 'bg-rose-700 text-white border-rose-800'
                : 'bg-roast-900 text-paper-50 border-roast-950 hover:bg-roast-800'
            }`}
            title={isTimerRunning ? 'Pause Stopwatch' : 'Start Stopwatch'}
          >
            {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={() => {
              setIsTimerRunning(false);
              setTimerSeconds(0);
            }}
            className="p-1.5 rounded bg-paper-50 text-roast-600 border border-paper-300 hover:text-roast-950"
            title="Reset Stopwatch"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Mode Switcher Tabs: Preset vs Custom */}
      <div className="mt-6 flex flex-col sm:flex-row gap-2 border-b border-paper-300 pb-3 font-mono text-xs">
        <button
          onClick={() => setCalculatorMode('preset')}
          className={`px-4 py-2 border uppercase tracking-wider flex items-center gap-1.5 transition-all ${
            calculatorMode === 'preset'
              ? 'bg-roast-950 text-paper-50 border-roast-950 font-bold shadow-xs'
              : 'bg-paper-100 text-roast-700 border-paper-300 hover:border-roast-700'
          }`}
        >
          <Layers className="w-3.5 h-3.5 text-cherry-600" />
          <span>[ 01 ] PRESET ALAT SEDUH POPULER</span>
        </button>

        <button
          onClick={() => setCalculatorMode('custom')}
          className={`px-4 py-2 border uppercase tracking-wider flex items-center gap-1.5 transition-all ${
            calculatorMode === 'custom'
              ? 'bg-roast-950 text-paper-50 border-roast-950 font-bold shadow-xs'
              : 'bg-paper-100 text-roast-700 border-paper-300 hover:border-roast-700'
          }`}
        >
          <Sliders className="w-3.5 h-3.5 text-crema-500" />
          <span>[ 02 ] MODE BEBAS (CUSTOM RATIO & DOSE)</span>
        </button>
      </div>

      {/* Mode 1: Preset Method Selector */}
      {calculatorMode === 'preset' ? (
        <div className="mt-6">
          <label className="font-mono text-[10px] uppercase tracking-widest text-roast-500 font-bold block mb-2">
            PILIH INSTRUMEN SEDUH
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-2">
            {BREW_METHODS.map((m) => {
              const isSelected = m.id === selectedMethod.id;
              return (
                <button
                  key={m.id}
                  onClick={() => handleMethodChange(m)}
                  className={`p-3 text-center border font-mono text-xs transition-all ${
                    isSelected
                      ? 'bg-roast-950 text-paper-50 border-roast-950 font-bold shadow-xs'
                      : 'bg-paper-50 text-roast-800 border-paper-300 hover:border-roast-600'
                  }`}
                >
                  {m.name}
                </button>
              );
            })}
          </div>

          {/* Calculator Body Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-6">
            {/* Left Controls */}
            <div className="md:col-span-7 bg-paper-100/70 p-6 border border-paper-300 space-y-6">
              {/* Dose Slider */}
              <div>
                <div className="flex justify-between items-center mb-2 font-mono">
                  <span className="text-[11px] uppercase tracking-wider text-roast-700 font-bold">
                    Dosis Kopi (Coffee Dose)
                  </span>
                  <span className="text-base font-bold text-roast-950">
                    {dose} <span className="text-xs text-roast-500 font-normal">gram</span>
                  </span>
                </div>
                <input
                  type="range"
                  min={selectedMethod.minDose}
                  max={selectedMethod.maxDose}
                  step={1}
                  value={dose}
                  onChange={(e) => setDose(Number(e.target.value))}
                  className="w-full accent-cherry-700 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-roast-400 mt-1">
                  <span>Min: {selectedMethod.minDose}g</span>
                  <span>Max: {selectedMethod.maxDose}g</span>
                </div>
              </div>

              {/* Ratio Buttons */}
              <div>
                <div className="flex justify-between items-center mb-2 font-mono">
                  <span className="text-[11px] uppercase tracking-wider text-roast-700 font-bold">
                    Rasio Seduh (Brew Ratio)
                  </span>
                  <span className="text-base font-bold text-cherry-700">
                    1 : {ratio}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedMethod.ratioOptions.map((r) => {
                    const isSelected = r === ratio;
                    return (
                      <button
                        key={r}
                        onClick={() => setRatio(r)}
                        className={`px-3 py-1 text-xs font-mono border transition-all ${
                          isSelected
                            ? 'bg-cherry-800 text-paper-50 border-cherry-800 font-bold'
                            : 'bg-paper-50 text-roast-700 border-paper-300 hover:border-roast-600'
                        }`}
                      >
                        1:{r}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Tips & Extraction Specs */}
              <div className="pt-4 border-t border-paper-300 space-y-2 text-xs font-sans">
                <div className="font-mono text-[10px] text-roast-500 uppercase font-semibold">
                  [ SPESIFIKASI STANDAR ALAT ]
                </div>
                <div className="grid grid-cols-2 gap-3 font-mono text-[11px]">
                  <div className="bg-paper-50 p-2.5 border border-paper-200">
                    <span className="text-roast-400 block text-[9px] uppercase">Suhu Air</span>
                    <span className="font-bold text-roast-900">{selectedMethod.temperature}</span>
                  </div>
                  <div className="bg-paper-50 p-2.5 border border-paper-200">
                    <span className="text-roast-400 block text-[9px] uppercase">Waktu Target</span>
                    <span className="font-bold text-roast-900">{selectedMethod.targetTime}</span>
                  </div>
                </div>
                <div className="bg-paper-50 p-2.5 border border-paper-200 font-mono text-[11px]">
                  <span className="text-roast-400 block text-[9px] uppercase">Ukuran Gilingan (Grind Size)</span>
                  <span className="font-bold text-roast-900">{selectedMethod.grindSize}</span>
                </div>
                <p className="text-[11px] text-roast-700 italic pt-1">
                  💡 {selectedMethod.tips}
                </p>
              </div>
            </div>

            {/* Right Output Card */}
            <div className="md:col-span-5 space-y-4">
              <div className="bg-roast-950 text-paper-50 p-6 border border-roast-900 shadow-warm font-mono">
                <span className="text-[10px] uppercase tracking-widest text-crema-400 block font-bold mb-4 pb-2 border-b border-roast-800">
                  FORMULA TARGET SEDUH
                </span>

                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] text-roast-400 uppercase block">Total Kebutuhan Air</span>
                    <div className="text-4xl font-serif font-bold text-paper-50 mt-0.5">
                      {presetCalculation.water} <span className="text-sm font-mono font-normal text-roast-400">ml / g</span>
                    </div>
                  </div>

                  {presetCalculation.ice && (
                    <div className="pt-2 border-t border-roast-800">
                      <span className="text-[10px] text-roast-400 uppercase block">Komposisi Es Batu di Server</span>
                      <div className="text-2xl font-serif font-bold text-crema-300 mt-0.5">
                        {presetCalculation.ice} <span className="text-sm font-mono font-normal text-roast-400">g es batu</span>
                      </div>
                      <span className="text-[10px] text-roast-400 block mt-1">
                        + {presetCalculation.water} ml air panas saat menyeduh
                      </span>
                    </div>
                  )}

                  <div className="pt-2 border-t border-roast-800 flex justify-between items-baseline text-xs">
                    <span className="text-roast-400">Dosis Bubuk Kopi:</span>
                    <span className="font-bold text-crema-400">{dose} gram</span>
                  </div>

                  <div className="flex justify-between items-baseline text-xs">
                    <span className="text-roast-400">Rasio Ekstraksi:</span>
                    <span className="font-bold text-crema-400">1 : {ratio}</span>
                  </div>

                  <div className="flex justify-between items-baseline text-xs">
                    <span className="text-roast-400">Estimasi Bersih di Cangkir:</span>
                    <span className="font-bold text-paper-200">~{estimatedLiquidYield} ml</span>
                  </div>
                </div>
              </div>

              {/* Pour-over 3-Stage Schedule */}
              {selectedMethod.id === 'v60' && (
                <div className="bg-paper-100 p-4 border border-paper-300 font-mono text-xs space-y-2">
                  <span className="text-[10px] uppercase tracking-wider text-cherry-800 font-bold block">
                    JADWAL TUANGAN 3 TAHAP (V60 STANDARD)
                  </span>
                  <div className="space-y-1.5 text-[11px]">
                    <div className="flex justify-between p-1.5 bg-paper-50 border border-paper-200">
                      <span>0:00 – Bloom (x3 Dosis)</span>
                      <span className="font-bold text-cherry-700">{bloomWater} g</span>
                    </div>
                    <div className="flex justify-between p-1.5 bg-paper-50 border border-paper-200">
                      <span>0:45 – Tuangan Kedua (s/d 60%)</span>
                      <span className="font-bold text-roast-900">{secondPour} g</span>
                    </div>
                    <div className="flex justify-between p-1.5 bg-paper-50 border border-paper-200">
                      <span>1:20 – Tuangan Akhir (s/d 100%)</span>
                      <span className="font-bold text-roast-900">{finalPour} g</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* Mode 2: Custom Ratio & Target Calculator */
        <div className="mt-6">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 p-4 bg-paper-100 border border-paper-300">
            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="text-roast-600 font-semibold">MODE PERHITUNGAN:</span>
              <button
                onClick={() => setCustomCalculationBasis('dose-to-water')}
                className={`px-3 py-1.5 border transition-all ${
                  customCalculationBasis === 'dose-to-water'
                    ? 'bg-roast-950 text-paper-50 border-roast-950 font-bold'
                    : 'bg-paper-50 text-roast-700 border-paper-300 hover:border-roast-600'
                }`}
              >
                Dosis Kopi (g) → Hitung Kebutuhan Air
              </button>
              <button
                onClick={() => setCustomCalculationBasis('water-to-dose')}
                className={`px-3 py-1.5 border transition-all ${
                  customCalculationBasis === 'water-to-dose'
                    ? 'bg-roast-950 text-paper-50 border-roast-950 font-bold'
                    : 'bg-paper-50 text-roast-700 border-paper-300 hover:border-roast-600'
                }`}
              >
                Target Air (ml) → Hitung Dosis Kopi
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Left Column: Custom Inputs */}
            <div className="md:col-span-7 bg-paper-100/70 p-6 border border-paper-300 space-y-6">
              {customCalculationBasis === 'dose-to-water' ? (
                <div>
                  <div className="flex justify-between items-center mb-2 font-mono">
                    <span className="text-[11px] uppercase tracking-wider text-roast-700 font-bold">
                      Dosis Kopi Input (Coffee Dose)
                    </span>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        min={5}
                        max={100}
                        step={0.5}
                        value={customDose}
                        onChange={(e) => setCustomDose(Math.max(1, Number(e.target.value)))}
                        className="w-20 px-2 py-1 bg-paper-50 border border-paper-300 text-right font-mono font-bold text-sm text-roast-950 rounded"
                      />
                      <span className="text-xs text-roast-500 font-mono">gram</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={60}
                    step={0.5}
                    value={customDose}
                    onChange={(e) => setCustomDose(Number(e.target.value))}
                    className="w-full accent-cherry-700 cursor-pointer"
                  />
                </div>
              ) : (
                <div>
                  <div className="flex justify-between items-center mb-2 font-mono">
                    <span className="text-[11px] uppercase tracking-wider text-roast-700 font-bold">
                      Target Air Seduh (Target Water)
                    </span>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        min={50}
                        max={2000}
                        step={10}
                        value={customWaterTarget}
                        onChange={(e) => setCustomWaterTarget(Math.max(10, Number(e.target.value)))}
                        className="w-24 px-2 py-1 bg-paper-50 border border-paper-300 text-right font-mono font-bold text-sm text-roast-950 rounded"
                      />
                      <span className="text-xs text-roast-500 font-mono">ml / g</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min={100}
                    max={1000}
                    step={10}
                    value={customWaterTarget}
                    onChange={(e) => setCustomWaterTarget(Number(e.target.value))}
                    className="w-full accent-cherry-700 cursor-pointer"
                  />
                </div>
              )}

              {/* Custom Ratio Input & Slider */}
              <div>
                <div className="flex justify-between items-center mb-2 font-mono">
                  <span className="text-[11px] uppercase tracking-wider text-roast-700 font-bold">
                    Rasio Bebas (1 : X)
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-roast-500 font-mono">1 :</span>
                    <input
                      type="number"
                      min={1}
                      max={30}
                      step={0.1}
                      value={customRatio}
                      onChange={(e) => setCustomRatio(Math.max(0.5, Number(e.target.value)))}
                      className="w-20 px-2 py-1 bg-paper-50 border border-paper-300 text-right font-mono font-bold text-sm text-cherry-700 rounded"
                    />
                  </div>
                </div>

                <input
                  type="range"
                  min={1}
                  max={25}
                  step={0.1}
                  value={customRatio}
                  onChange={(e) => setCustomRatio(Number(e.target.value))}
                  className="w-full accent-roast-900 cursor-pointer"
                />

                {/* Ratio Quick Presets Chips */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {[
                    { label: '1:2 (Espresso)', val: 2 },
                    { label: '1:10 (Aeropress/Konsentrat)', val: 10 },
                    { label: '1:12 (Cold Brew / Es)', val: 12 },
                    { label: '1:15 (Standar Rasa Kuat)', val: 15 },
                    { label: '1:16.67 (SCA Golden Cup)', val: 16.67 },
                    { label: '1:18 (Ekstraksi Ringan/Teh)', val: 18 },
                  ].map((chip) => (
                    <button
                      key={chip.val}
                      onClick={() => setCustomRatio(chip.val)}
                      className={`px-2.5 py-1 text-[11px] font-mono border rounded transition-all ${
                        customRatio === chip.val
                          ? 'bg-roast-950 text-paper-50 border-roast-950 font-bold'
                          : 'bg-paper-50 text-roast-700 border-paper-300 hover:border-roast-600'
                      }`}
                    >
                      {chip.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dilution / Bypass Water Option */}
              <div>
                <div className="flex justify-between items-center mb-1 font-mono">
                  <span className="text-[11px] uppercase tracking-wider text-roast-700 font-bold">
                    Bypass Water / Air Pengenceran (Opsional)
                  </span>
                  <span className="font-mono font-bold text-roast-900 text-xs">
                    {customBypassWater} ml
                  </span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={150}
                  step={5}
                  value={customBypassWater}
                  onChange={(e) => setCustomBypassWater(Number(e.target.value))}
                  className="w-full accent-roast-900 cursor-pointer"
                />
                <span className="text-[10px] text-roast-500 font-sans block mt-0.5">
                  Teknik bypass: menambahkan air hangat langsung ke server setelah selesai menyeduh untuk melembutkan body tanpa over-ekstraksi.
                </span>
              </div>
            </div>

            {/* Right Column: Custom Output */}
            <div className="md:col-span-5 space-y-4">
              <div className="bg-roast-950 text-paper-50 p-6 border border-roast-900 shadow-warm font-mono">
                <span className="text-[10px] uppercase tracking-widest text-crema-400 block font-bold mb-4 pb-2 border-b border-roast-800">
                  HASIL KALKULASI RESEP BEBAS
                </span>

                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] text-roast-400 uppercase block">Dosis Kopi Diperlukan</span>
                    <div className="text-3xl font-serif font-bold text-crema-300 mt-0.5">
                      {computedCustomDose} <span className="text-sm font-mono font-normal text-roast-400">gram</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] text-roast-400 uppercase block">Total Air Seduhan</span>
                    <div className="text-3xl font-serif font-bold text-paper-50 mt-0.5">
                      {computedCustomWater} <span className="text-sm font-mono font-normal text-roast-400">ml / gram</span>
                    </div>
                  </div>

                  {customBypassWater > 0 && (
                    <div>
                      <span className="text-[10px] text-roast-400 uppercase block">Bypass Water Tambahan</span>
                      <div className="text-xl font-serif font-bold text-amber-300 mt-0.5">
                        +{customBypassWater} ml
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-roast-800 text-xs space-y-2 text-paper-200">
                  <div className="flex justify-between">
                    <span className="text-roast-400">Rasio Aktual:</span>
                    <span className="font-bold text-crema-400">1 : {customRatio}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-roast-400">Estimasi Bersih di Cangkir:</span>
                    <span className="font-bold">~{estimatedLiquidYield + customBypassWater} ml</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-roast-400">Ampas Basah Tertahan:</span>
                    <span className="font-bold text-roast-400">~{Math.round(computedCustomDose * 2)} g</span>
                  </div>
                </div>
              </div>

              {/* Custom Pour Schedule */}
              <div className="bg-paper-100 p-4 border border-paper-300 font-mono text-xs space-y-2">
                <span className="text-[10px] uppercase tracking-wider text-cherry-800 font-bold block">
                  JADWAL TUANGAN 3 TAHAP (40:60 RATIO)
                </span>
                <div className="space-y-1.5 text-[11px]">
                  <div className="flex justify-between p-1.5 bg-paper-50 border border-paper-200">
                    <span>Tahap 1 (Bloom x3 Dosis)</span>
                    <span className="font-bold text-cherry-700">{bloomWater} g</span>
                  </div>
                  <div className="flex justify-between p-1.5 bg-paper-50 border border-paper-200">
                    <span>Tahap 2 (Tuang s/d 60%)</span>
                    <span className="font-bold text-roast-900">{secondPour} g</span>
                  </div>
                  <div className="flex justify-between p-1.5 bg-paper-50 border border-paper-200">
                    <span>Tahap 3 (Tuang s/d 100%)</span>
                    <span className="font-bold text-roast-900">{finalPour} g</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
