'use client';

import React, { useState, useMemo } from 'react';
import {
  Coffee,
  Sliders,
  Timer,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  RotateCcw,
  Sparkles,
  Droplets,
  HelpCircle,
} from 'lucide-react';

interface DialInState {
  dose: number; // in grams
  yieldAmount: number; // in grams
  time: number; // in seconds
  tasteIssue: 'balanced' | 'sour' | 'bitter' | 'astringent' | 'watery';
  streamVisual: 'steady' | 'gushing' | 'choking' | 'channeling';
  cremaType: 'tiger' | 'pale' | 'dark';
}

export const EspressoDialIn: React.FC = () => {
  const [dose, setDose] = useState<number>(18);
  const [yieldAmount, setYieldAmount] = useState<number>(36);
  const [time, setTime] = useState<number>(27);
  const [tasteIssue, setTasteIssue] = useState<DialInState['tasteIssue']>('sour');
  const [streamVisual, setStreamVisual] = useState<DialInState['streamVisual']>('gushing');
  const [cremaType, setCremaType] = useState<DialInState['cremaType']>('pale');

  // Calculations
  const ratio = useMemo(() => {
    if (dose <= 0) return 0;
    return Number((yieldAmount / dose).toFixed(2));
  }, [dose, yieldAmount]);

  const flowRate = useMemo(() => {
    if (time <= 0) return 0;
    return Number((yieldAmount / time).toFixed(2));
  }, [yieldAmount, time]);

  // Diagnosis Engine
  const diagnosis = useMemo(() => {
    if (tasteIssue === 'balanced' && time >= 24 && time <= 32 && ratio >= 1.8 && ratio <= 2.2) {
      return {
        status: 'OPTIMAL / DIALED IN',
        statusColor: 'emerald',
        headline: 'Sweet Spot Tercapai! Ekstraksi Seimbang & Manis',
        analysis:
          'Kombinasi rasio ekstraksi (~1:2.0), laju alir (~1.3 g/detik), dan profil sensori berada pada puncak sweetness dan clarity. Lipid dan gula terlarut optimal tanpa kepahitan berlebih.',
        actions: [
          'Pertahankan setting gilingan (grind size) saat ini.',
          'Catat resep ini: ' + dose + 'g dosis in, ' + yieldAmount + 'g yield out dalam ' + time + ' detik.',
          'Pantau suhu keranjang portafilter jika coffee shop memasuki jam sibuk.',
        ],
        extractionPhase: 'Optimal Extraction (Balanced Acidity, High Sweetness, Lingering Finish)',
      };
    }

    if (streamVisual === 'channeling') {
      return {
        status: 'CHANNELING TERDETEKSI',
        statusColor: 'amber',
        headline: 'Jalur Air Patah (Micro-Channeling) di Keping Kopi',
        analysis:
          'Air bertekanan 9 bar menemukan retakan atau kantong udara pada coffee puck, menyebabkan sebagian bubuk mengalami over-ekstraksi (pahit kering/astringent) sementara sebagian lain under-ekstraksi (asam hambar).',
        actions: [
          'Gunakan jarum WDT (Weiss Distribution Technique) untuk mengurai gumpalan sebelum tamping.',
          'Pastikan tamping 100% tegak lurus (level). Jangan mengetuk (tapping) dinding portafilter setelah tamping.',
          'Periksa apakah puck screen atau shower screen mesin bersih dari residu minyak kopi lama.',
        ],
        extractionPhase: 'Uneven Extraction (Mixed Sour & Bitter)',
      };
    }

    if (time < 22 || streamVisual === 'gushing' || tasteIssue === 'sour') {
      return {
        status: 'UNDER-EXTRACTED (EKSTRAKSI TIDAK SEMPURNA)',
        statusColor: 'rose',
        headline: 'Air Mengalir Terlalu Cepat — Gula Karamel Belum Terlarut',
        analysis:
          'Hambatan bed kopi terlalu rendah. Asam organik (sitrat/malat) larut pertama kali, namun senyawa manis (gula bermolekul besar) belum sempat diekstraksi karena waktu kontak air dan kopi terlalu singkat (' +
          time +
          ' detik). Hasilnya adalah rasa asam menusuk, bodi tipis, dan crema pucat.',
        actions: [
          'RAPATKAN GILINGAN (GILING LEBIH HALUS / FINE): Geser grinder 1-2 mikro-step lebih halus untuk memperlambat laju alir air ke target 25-30 detik.',
          'NAIKKAN YIELD SECARA BERTAHAP: Jika gilingan sudah sangat halus namun masih tajam, perpanjang rasio dari 1:' +
            ratio +
            ' menjadi 1:' +
            (ratio + 0.2).toFixed(1) +
            ' (+3-5 gram cairan) untuk menarik lebih banyak gula penyeimbang.',
          'PASTIKAN SUHU AIR CUKUP: Naikkan suhu brew boiler 1°C (misal dari 92°C ke 93°C) terutama jika menggunakan biji Light/Medium roast.',
        ],
        extractionPhase: 'Early Phase Dominated (High Acids, Low Sugars, Thin Body)',
      };
    }

    if (time > 34 || streamVisual === 'choking' || tasteIssue === 'bitter' || tasteIssue === 'astringent') {
      return {
        status: 'OVER-EXTRACTED (EKSTRAKSI BERLEBIH)',
        statusColor: 'rose',
        headline: 'Air Tertahan Terlalu Lama — Tanin & Serat Pahit Terlarut',
        analysis:
          'Bubuk kopi terlalu halus sehingga memampatkan aliran air (waktu kontak ' +
          time +
          ' detik). Setelah seluruh asam dan gula habis terekstraksi, air melarutkan senyawa berat fenolik, serat selulosa terbakar, dan tanin pahit yang membuat lidah terasa kering dan kesat (drying astringency).',
        actions: [
          'KASARKAN GILINGAN (GILING LEBIH KASAR / COARSE): Geser grinder 1-2 step lebih kasar untuk memangkas waktu shot ke rentang 25-30 detik.',
          'PENDEKKAN YIELD (CUT EARLY): Turunkan yield dari ' +
            yieldAmount +
            'g menjadi ' +
            (yieldAmount - 4) +
            'g (rasio lebih rapat 1:1.8 s/d 1:1.9) untuk menghentikan ekstraksi sebelum fase pahit dimulai.',
          'PERIKSA DOSIS BASKET: Pastikan dosis ' +
            dose +
            'g tidak melebihi kapasitas gramatur basket portafilter (mencegah puck membentur shower screen saat mengembang).',
        ],
        extractionPhase: 'Late Phase Dominated (Heavy Phenolics, Ashy Bitterness, Astringent Finish)',
      };
    }

    if (tasteIssue === 'watery') {
      return {
        status: 'DILUTED / UNDER-STRENGTH',
        statusColor: 'amber',
        headline: 'Rasio Terlalu Panjang — Minuman Encer Kehilangan Karakter',
        analysis:
          'Rasio ekstraksi saat ini (1:' +
          ratio +
          ') terlalu panjang untuk profil biji ini. TDS (Total Dissolved Solids) turun drastis sehingga intensitas aroma dan mouthfeel terasa hambar.',
        actions: [
          'Rapatkan rasio ke standar 1:1.8 atau 1:2.0 (potong ekstraksi lebih cepat).',
          'Tingkatkan dosis ' + dose + 'g sebesar +0.5g jika basket memungkinkan.',
        ],
        extractionPhase: 'Overly Diluted Phase',
      };
    }

    return {
      status: 'PERLU KALIBRASI MINOR',
      statusColor: 'stone',
      headline: 'Parameter Mendekati Target, Butuh Penyesuaian Sentuhan Akhir',
      analysis: 'Rasio dan waktu sudah mendekati rentang standar industri, sesuaikan gilingan 1 mikro step sesuai preferensi rasa roast profile.',
      actions: ['Coba ubah yield +/- 2 gram tanpa merubah setting grinder terlebih dahulu.'],
      extractionPhase: 'Transitional Phase',
    };
  }, [dose, yieldAmount, time, tasteIssue, streamVisual, ratio]);

  const handleReset = () => {
    setDose(18);
    setYieldAmount(36);
    setTime(27);
    setTasteIssue('sour');
    setStreamVisual('gushing');
    setCremaType('pale');
  };

  return (
    <div className="space-y-8">
      {/* Header Ledger */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-l-2 border-cherry-700 pl-4 py-1">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-cherry-700 font-semibold block">
            [ APPARATUS 05 — ESPRESSO DIAL-IN LAB ]
          </span>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-roast-950">
            Kompas Kalibrasi Segitiga Espresso (Dose - Yield - Time)
          </h3>
          <p className="font-sans text-xs text-roast-600 mt-1 max-w-2xl leading-relaxed">
            Diagnostik ilmiah untuk memecahkan masalah ekstraksi di bar espresso. Masukkan variabel ekstraksi dan observasi rasa cangkir untuk mendapatkan instruksi mekanik korektif instan.
          </p>
        </div>
        <button
          onClick={handleReset}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-paper-300 bg-paper-100 hover:bg-paper-200 text-roast-800 font-mono text-xs uppercase tracking-wider transition-colors self-start md:self-auto"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Standar</span>
        </button>
      </div>

      {/* Main Dial-In Workbench */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Input Variables (5 Cols) */}
        <div className="lg:col-span-5 space-y-6 bg-paper-50 border border-paper-300 p-6 shadow-xs">
          <div className="border-b border-paper-200 pb-3">
            <span className="font-mono text-[10px] uppercase tracking-widest text-roast-500 font-bold block">
              [ 1. VARIABEL INPUT MEKANIS ]
            </span>
            <h4 className="font-serif text-lg font-bold text-roast-950">
              Parameter Ekstraksi Saat Ini
            </h4>
          </div>

          {/* Dose Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-roast-700 font-bold uppercase">[ A ] Dosis Bubuk Kering (Dose)</span>
              <span className="bg-paper-200 text-roast-950 px-2 py-0.5 border border-paper-300 font-bold">
                {dose.toFixed(1)} gram
              </span>
            </div>
            <input
              type="range"
              min="14"
              max="22"
              step="0.5"
              value={dose}
              onChange={(e) => setDose(parseFloat(e.target.value))}
              className="w-full h-1.5 bg-paper-200 rounded-none accent-cherry-700 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-roast-400">
              <span>14g (Single/Small)</span>
              <span>18g (Double Basket)</span>
              <span>22g (Triple Basket)</span>
            </div>
          </div>

          {/* Yield Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-roast-700 font-bold uppercase">[ B ] Cairan di Cangkir (Yield)</span>
              <span className="bg-paper-200 text-roast-950 px-2 py-0.5 border border-paper-300 font-bold">
                {yieldAmount.toFixed(1)} gram
              </span>
            </div>
            <input
              type="range"
              min="20"
              max="60"
              step="1"
              value={yieldAmount}
              onChange={(e) => setYieldAmount(parseFloat(e.target.value))}
              className="w-full h-1.5 bg-paper-200 rounded-none accent-cherry-700 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-roast-400">
              <span>20g (Ristretto)</span>
              <span>36g (Normale 1:2)</span>
              <span>55g+ (Lungo)</span>
            </div>
          </div>

          {/* Time Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-roast-700 font-bold uppercase">[ C ] Waktu Ekstraksi Total</span>
              <span className="bg-paper-200 text-roast-950 px-2 py-0.5 border border-paper-300 font-bold">
                {time} detik
              </span>
            </div>
            <input
              type="range"
              min="12"
              max="48"
              step="1"
              value={time}
              onChange={(e) => setTime(parseInt(e.target.value, 10))}
              className="w-full h-1.5 bg-paper-200 rounded-none accent-cherry-700 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-roast-400">
              <span>&lt; 20s (Terlalu Cepat)</span>
              <span>25 - 30s (Ideal)</span>
              <span>&gt; 35s (Terlalu Lambat)</span>
            </div>
          </div>

          {/* Live Calculated Stats Card */}
          <div className="grid grid-cols-2 gap-3 pt-3 border-t border-paper-200 font-mono text-xs">
            <div className="bg-paper-100 p-3 border border-paper-300">
              <span className="text-[10px] text-roast-500 uppercase block mb-0.5">RASIO EKSTRAKSI</span>
              <span className="text-base font-serif font-black text-roast-950">
                1 : {ratio}
              </span>
              <span className="text-[9px] text-roast-400 block mt-0.5">
                {ratio < 1.6 ? 'Tipe Ristretto' : ratio > 2.3 ? 'Tipe Lungo' : 'Tipe Normale'}
              </span>
            </div>
            <div className="bg-paper-100 p-3 border border-paper-300">
              <span className="text-[10px] text-roast-500 uppercase block mb-0.5">LAJU ALIR (FLOW)</span>
              <span className="text-base font-serif font-black text-roast-950">
                {flowRate} g/detik
              </span>
              <span className="text-[9px] text-roast-400 block mt-0.5">
                Target: 1.1 – 1.4 g/s
              </span>
            </div>
          </div>

          {/* Sensory / Taste Feedback */}
          <div className="pt-3 border-t border-paper-200 space-y-3">
            <span className="font-mono text-[10px] uppercase tracking-widest text-roast-500 font-bold block">
              [ 2. OBSERVASI RASA DI LIDAH ]
            </span>
            <div className="grid grid-cols-1 gap-2">
              {[
                { id: 'sour', label: 'Asam Menusuk / Kurang Manis', note: 'Asam tajam seperti cuka/lemon mentah, tidak ada finish manis' },
                { id: 'bitter', label: 'Pahit Gosong / Abu Pekat', note: 'Pahit tajam menempel di pangkal lidah, rasa arang/asap' },
                { id: 'astringent', label: 'Sepat Kering / Kesat (Drying)', note: 'Sensasi kesat seperti teh celup kelamaan atau kulit pisang mentah' },
                { id: 'watery', label: 'Encer / Bodi Hambar (Hollow)', note: 'Tidak ada kekentalan sirup, rasa cepat hilang' },
                { id: 'balanced', label: 'Seimbang, Manis, & Kompleks', note: 'Asam buah menyegarkan diimbangi rasa gula karamel yang tahan lama' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setTasteIssue(item.id as DialInState['tasteIssue'])}
                  className={`text-left p-2.5 border transition-all ${
                    tasteIssue === item.id
                      ? 'bg-roast-950 text-paper-50 border-roast-950 font-medium shadow-xs'
                      : 'bg-paper-100/60 text-roast-800 border-paper-300 hover:border-roast-700'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-serif font-bold">{item.label}</span>
                    {tasteIssue === item.id && <span className="font-mono text-[9px] text-crema-300">[ TERPILIH ]</span>}
                  </div>
                  <p className={`text-[10px] mt-0.5 leading-relaxed ${tasteIssue === item.id ? 'text-paper-200' : 'text-roast-500'}`}>
                    {item.note}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Stream Visual Behavior */}
          <div className="pt-3 border-t border-paper-200 space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-roast-500 font-bold block">
              [ 3. OBSERVASI ALIRAN KELUAR DARI SPOUT ]
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              {[
                { id: 'gushing', label: 'Menyemprot / Cepat' },
                { id: 'choking', label: 'Mampet / Menetes' },
                { id: 'channeling', label: 'Semburan Retak (Spurt)' },
                { id: 'steady', label: 'Buntut Tikus Stabil' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setStreamVisual(item.id as DialInState['streamVisual'])}
                  className={`p-2 border text-center transition-all ${
                    streamVisual === item.id
                      ? 'bg-roast-950 text-paper-50 border-roast-950 font-bold'
                      : 'bg-paper-100/60 text-roast-700 border-paper-300 hover:border-roast-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Prescription & Mechanical Actions (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Status Badge & Headline Card */}
          <div
            className={`border-2 p-6 sm:p-8 bg-paper-50 transition-all ${
              diagnosis.statusColor === 'emerald'
                ? 'border-emerald-700 bg-emerald-50/20'
                : diagnosis.statusColor === 'amber'
                ? 'border-amber-700 bg-amber-50/20'
                : 'border-cherry-700 bg-cherry-50/20'
            }`}
          >
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-paper-300">
              <span
                className={`font-mono text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 border ${
                  diagnosis.statusColor === 'emerald'
                    ? 'bg-emerald-900 text-emerald-100 border-emerald-800'
                    : diagnosis.statusColor === 'amber'
                    ? 'bg-amber-900 text-amber-100 border-amber-800'
                    : 'bg-cherry-950 text-cherry-100 border-cherry-900'
                }`}
              >
                [ {diagnosis.status} ]
              </span>
              <span className="font-mono text-[11px] text-roast-500">
                Fase: {diagnosis.extractionPhase}
              </span>
            </div>

            <h4 className="font-serif text-2xl sm:text-3xl font-black text-roast-950 mb-3 tracking-tight">
              {diagnosis.headline}
            </h4>

            <p className="font-sans text-xs sm:text-sm text-roast-800 leading-relaxed">
              {diagnosis.analysis}
            </p>
          </div>

          {/* Prescriptive Action Steps */}
          <div className="bg-paper-50 border border-paper-300 p-6 sm:p-8 shadow-xs space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-paper-200">
              <Sliders className="w-4 h-4 text-cherry-700" />
              <h5 className="font-serif text-lg font-bold text-roast-950">
                Langkah Penyesuaian Mekanik (Prescription)
              </h5>
            </div>

            <div className="space-y-3">
              {diagnosis.actions.map((action, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 bg-paper-100/70 border border-paper-300"
                >
                  <span className="w-6 h-6 bg-roast-950 text-paper-50 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm font-sans text-roast-900 leading-relaxed font-medium">
                    {action}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Golden Rules of Espresso Extraction Reference Ledger */}
          <div className="bg-roast-950 text-paper-100 p-6 sm:p-8 border border-roast-900 space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-crema-300 font-bold block">
              [ HUKUM EKSTRAKSI ESPRESSO SPECIALTY ]
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans text-paper-300 leading-relaxed">
              <div className="border-l border-crema-500/40 pl-3">
                <strong className="text-paper-50 block font-serif text-sm mb-0.5">
                  1. Gilingan Mengontrol Waktu
                </strong>
                Gunakan grinder untuk mengatur berapa lama air berkontak dengan kopi. Giling lebih halus untuk menambah waktu ekstraksi, lebih kasar untuk memangkasnya.
              </div>
              <div className="border-l border-crema-500/40 pl-3">
                <strong className="text-paper-50 block font-serif text-sm mb-0.5">
                  2. Yield Mengontrol Keseimbangan
                </strong>
                Ubah berat yield untuk memanipulasi rasa akhir. Jika asam menusuk, tambah beberapa gram cairan. Jika pahit membakar, hentikan aliran lebih awal.
              </div>
              <div className="border-l border-crema-500/40 pl-3">
                <strong className="text-paper-50 block font-serif text-sm mb-0.5">
                  3. Dosis Harus Tetap Konsisten
                </strong>
                Jangan mengubah dosis bubuk setiap kali melakukan kalibrasi. Tentukan dosis sesuai basket (misal 18.0g), lalu lakukan fine-tuning hanya pada grinder dan yield.
              </div>
              <div className="border-l border-crema-500/40 pl-3">
                <strong className="text-paper-50 block font-serif text-sm mb-0.5">
                  4. Urutan Pelarutan Kimiawi
                </strong>
                Urutan zat yang larut: Asam Buah → Gula Karamel → Tanin & Serat Pahit. Espresso nikmat berhenti saat asam dan gula bertemu harmonis.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
