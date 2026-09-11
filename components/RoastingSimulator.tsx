'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Flame,
  Wind,
  RotateCw,
  Play,
  Square,
  RotateCcw,
  Sparkles,
  Info,
  AlertTriangle,
  Award,
  Volume2,
  VolumeX,
  TrendingUp,
  Activity,
  Layers,
  Check,
} from 'lucide-react';

interface TelemetryPoint {
  timeSec: number;
  beanTemp: number; // BT in °C
  envTemp: number; // ET in °C
  ror: number; // Rate of Rise °C/min
  burner: number;
  airflow: number;
  phase: 'drying' | 'maillard' | 'first_crack' | 'development' | 'dropped';
}

export function RoastingSimulator() {
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Machine Controls
  const [burnerPower, setBurnerPower] = useState(70); // 0-100%
  const [airflow, setAirflow] = useState(3); // 1-5
  const [drumRpm, setDrumRpm] = useState(65); // 50-80 RPM
  const [batchSize, setBatchSize] = useState(1000); // 1000g

  // Live Telemetry
  const [currentTime, setCurrentTime] = useState(0); // seconds
  const [beanTemp, setBeanTemp] = useState(200); // starts at Charge Temp
  const [envTemp, setEnvTemp] = useState(220);
  const [ror, setRor] = useState(15.0); // °C / min
  const [telemetry, setTelemetry] = useState<TelemetryPoint[]>([]);

  // Critical Milestones
  const [turningPoint, setTurningPoint] = useState<{ time: number; temp: number } | null>(null);
  const [yellowingPoint, setYellowingPoint] = useState<{ time: number; temp: number } | null>(null);
  const [firstCrackTime, setFirstCrackTime] = useState<{ time: number; temp: number } | null>(null);
  const [dropPoint, setDropPoint] = useState<{ time: number; temp: number } | null>(null);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Sound generator for First Crack pops
  const playCrackPop = () => {
    if (!soundEnabled) return;
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') ctx.resume();

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Quick noisy woody pop
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320 + Math.random() * 280, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.06);

      gain.gain.setValueAtTime(0.25, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.07);
    } catch {
      // Audio context fallback
    }
  };

  // Determine current roasting phase
  const currentPhase = useMemo(() => {
    if (isFinished) return 'dropped';
    if (beanTemp < 155) return 'drying';
    if (beanTemp < 196) return 'maillard';
    if (beanTemp < 205) return 'first_crack';
    return 'development';
  }, [beanTemp, isFinished]);

  // Development Time Ratio (DTR)
  const dtr = useMemo(() => {
    if (!firstCrackTime || currentTime <= firstCrackTime.time) return 0;
    const devTime = currentTime - firstCrackTime.time;
    return Number(((devTime / currentTime) * 100).toFixed(1));
  }, [firstCrackTime, currentTime]);

  // Start / Drop Roaster
  const handleStart = () => {
    if (isFinished) handleReset();
    setIsRunning(true);
  };

  const handleDrop = () => {
    setIsRunning(false);
    setIsFinished(true);
    setDropPoint({ time: currentTime, temp: beanTemp });
  };

  const handleReset = () => {
    setIsRunning(false);
    setIsFinished(false);
    setCurrentTime(0);
    setBeanTemp(200);
    setEnvTemp(220);
    setRor(15);
    setTelemetry([]);
    setTurningPoint(null);
    setYellowingPoint(null);
    setFirstCrackTime(null);
    setDropPoint(null);
  };

  // Physics Simulation Loop (Runs every 1 sec real-time or scaled)
  useEffect(() => {
    if (!isRunning) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setCurrentTime((t) => {
        const nextTime = t + 2; // 2 seconds per tick for brisk interactive feel

        setBeanTemp((prevBt) => {
          // Dynamic heat physics calculation:
          // In early drying: beans absorb heat from drum, BT drops to TP then rises.
          let deltaBt = 0;

          if (nextTime <= 75) {
            // Drop down to Turning Point (~95-102°C around 1:15)
            const tpTarget = 98;
            deltaBt = (tpTarget - prevBt) * 0.08;
            if (nextTime >= 70 && !turningPoint) {
              setTurningPoint({ time: nextTime, temp: Number(prevBt.toFixed(1)) });
            }
          } else {
            // Post turning point: Heat input from burner vs convective airflow loss
            // Base heating rate
            const heatInput = (burnerPower / 100) * 0.95;
            const airflowCooling = (airflow / 5) * 0.22;
            const beanThermalInertia = batchSize / 1000;

            // Natural thermodynamics: As beans get hotter, RoR naturally declines
            const tempGap = 240 - prevBt;
            const naturalDecline = Math.max(0.2, tempGap / 120);

            // Exothermic energy during First Crack (196°C - 204°C)
            let crackExotherm = 0;
            if (prevBt >= 196 && prevBt <= 204) {
              crackExotherm = 0.15; // moisture flash boiling produces energy
              if (Math.random() > 0.4) playCrackPop();
            }

            deltaBt = ((heatInput - airflowCooling + crackExotherm) * naturalDecline) / beanThermalInertia;
          }

          const newBt = Number((prevBt + deltaBt).toFixed(1));

          // Calculate Rate of Rise (RoR in °C/min) = (deltaBt / 2 sec) * 60
          const currentRor = Number(((deltaBt / 2) * 60).toFixed(1));
          setRor(currentRor);

          // Track milestones
          if (newBt >= 155 && !yellowingPoint) {
            setYellowingPoint({ time: nextTime, temp: newBt });
          }
          if (newBt >= 196 && !firstCrackTime) {
            setFirstCrackTime({ time: nextTime, temp: newBt });
          }

          // Environmental Temp (ET) is typically 20-35°C hotter than BT
          const newEt = Number((newBt + 22 + (burnerPower / 100) * 15 - airflow * 2).toFixed(1));
          setEnvTemp(newEt);

          // Append Telemetry
          setTelemetry((prev) => [
            ...prev,
            {
              timeSec: nextTime,
              beanTemp: newBt,
              envTemp: newEt,
              ror: currentRor,
              burner: burnerPower,
              airflow,
              phase:
                newBt < 155 ? 'drying' : newBt < 196 ? 'maillard' : newBt < 205 ? 'first_crack' : 'development',
            },
          ]);

          // Auto-drop safety if overheats beyond 235°C
          if (newBt >= 232) {
            handleDrop();
          }

          return newBt;
        });

        return nextTime;
      });
    }, 500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRunning, burnerPower, airflow, batchSize, turningPoint, yellowingPoint, firstCrackTime]);

  // Format mm:ss
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Cupping Sensory Roast Diagnostic
  const roastEvaluation = useMemo(() => {
    if (!isFinished) return null;

    const finalBt = beanTemp;
    const finalDtr = dtr;

    let roastColor = 'Medium Roast';
    let flavorNotes: string[] = [];
    let diagnosis = '';
    let verdictClass = 'bg-emerald-50 text-emerald-900 border-emerald-300';

    if (finalBt < 202) {
      roastColor = 'Light / Cinnamon Roast (Agtron 85–95)';
      flavorNotes = ['Floral Melati', 'Asam Sitrat Lemon', 'Teh Hijau', 'Crisp Apple'];
      if (finalDtr < 11) {
        diagnosis = 'Underdeveloped: Waktu development terlalu singkat (<11%). Terasa grassy, sepat kacang mentah.';
        verdictClass = 'bg-amber-50 text-amber-900 border-amber-300';
      } else {
        diagnosis = 'Nordic Light Filter: Karakter origin terpancar jernih dengan keasaman segar dan aroma floral tinggi.';
      }
    } else if (finalBt <= 212) {
      roastColor = 'Medium / City Roast (Agtron 65–75)';
      flavorNotes = ['Karamel Manis', 'Cokelat Susu', 'Jeruk Manis', 'Brown Sugar'];
      if (finalDtr >= 14 && finalDtr <= 18) {
        diagnosis = 'Sweet Spot Specialty Espresso & Filter: Keseimbangan sempurna antara rasa manis gula dan keasaman buah.';
        verdictClass = 'bg-emerald-50 text-emerald-900 border-emerald-300';
      } else {
        diagnosis = 'City Roast Seimbang: Bodi bulat, keasaman moderat, sangat fleksibel untuk manual brew maupun latte.';
      }
    } else if (finalBt <= 224) {
      roastColor = 'Medium-Dark / Full City (Agtron 50–60)';
      flavorNotes = ['Dark Cocoa', 'Kacang Panggang', 'Molasses', 'Heavy Crema'];
      diagnosis = 'Full City Espresso Workhorse: Crema sangat tebal, bodi mantap menembus susu & gula aren tanpa rasa gosong.';
      verdictClass = 'bg-blue-50 text-blue-900 border-blue-300';
    } else {
      roastColor = 'Dark Roast / French Roast (Agtron < 40)';
      flavorNotes = ['Arang Gosong', 'Smoky Pahit', 'Minyak Permukaan', 'Abu'];
      diagnosis = 'Dark Roast Ekstrem: Minyak lipid keluar ke permukaan biji. Karakter origin hilang tergantikan rasa asap.';
      verdictClass = 'bg-rose-50 text-rose-900 border-rose-300';
    }

    return {
      roastColor,
      flavorNotes,
      diagnosis,
      verdictClass,
      finalBt,
      finalDtr,
    };
  }, [isFinished, beanTemp, dtr]);

  return (
    <div className="space-y-8 font-sans animate-in fade-in duration-200">
      {/* Header Banner */}
      <div className="bg-paper-100/80 border border-paper-300 rounded-2xl p-5 sm:p-7 shadow-xs relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-cherry-700/5 blur-3xl pointer-events-none" />
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-cherry-700 font-bold bg-cherry-50 px-2 py-0.5 rounded border border-cherry-200">
                [ ARTISANAL DRUM ROASTER TELEMETRY ]
              </span>
              <span className="font-mono text-[10px] text-roast-500 bg-paper-200/70 px-2 py-0.5 rounded">
                Real-Time BT, ET & RoR Curve
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-roast-950 tracking-tight">
              Virtual Drum Roasting Simulator & RoR Engine
            </h2>
            <p className="text-xs sm:text-sm text-roast-600 max-w-2xl leading-relaxed">
              Kendalikan kurva penyangraian biji kopi secara interaktif layaknya roaster profesional. Atur gas burner, airflow damper, perhatikan Turning Point, reaksi Maillard, dan dengarkan suara letupan <strong>First Crack</strong> secara real-time.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start lg:self-auto">
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-2.5 rounded-xl bg-paper-50 border border-paper-300 text-roast-700 hover:text-roast-950 transition-colors"
              title={soundEnabled ? 'Matikan suara letupan First Crack' : 'Nyalakan efek audio First Crack'}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-cherry-700" /> : <VolumeX className="w-4 h-4 text-roast-400" />}
            </button>

            {!isRunning && !isFinished && (
              <button
                onClick={handleStart}
                className="px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-paper-50 font-mono text-xs font-bold flex items-center gap-2 shadow-xs transition-all active:scale-[0.98]"
              >
                <Play className="w-4 h-4" />
                <span>Mulai Sangrai (Charge)</span>
              </button>
            )}

            {isRunning && (
              <button
                onClick={handleDrop}
                className="px-4 py-2.5 rounded-xl bg-cherry-700 hover:bg-cherry-800 text-paper-50 font-mono text-xs font-bold flex items-center gap-2 shadow-xs transition-all active:scale-[0.98] animate-pulse"
              >
                <Square className="w-4 h-4" />
                <span>Keluarkan Biji (Drop Batch)</span>
              </button>
            )}

            {isFinished && (
              <button
                onClick={handleReset}
                className="px-4 py-2.5 rounded-xl bg-roast-950 text-paper-50 font-mono text-xs font-bold flex items-center gap-2 shadow-xs transition-all active:scale-[0.98]"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Sangrai Batch Baru</span>
              </button>
            )}
          </div>
        </div>

        {/* Live Status Telemetry Bar */}
        <div className="mt-6 pt-5 border-t border-paper-200 grid grid-cols-2 sm:grid-cols-5 gap-3">
          <div className="space-y-0.5">
            <span className="font-mono text-[10px] uppercase text-roast-500">Waktu Sangrai:</span>
            <p className="font-mono text-2xl font-bold text-roast-950">{formatTime(currentTime)}</p>
          </div>

          <div className="space-y-0.5">
            <span className="font-mono text-[10px] uppercase text-cherry-700 font-semibold">Bean Temp (BT):</span>
            <p className="font-mono text-2xl font-bold text-cherry-700">{beanTemp}°C</p>
          </div>

          <div className="space-y-0.5">
            <span className="font-mono text-[10px] uppercase text-amber-700 font-semibold">Env Temp (ET):</span>
            <p className="font-mono text-2xl font-bold text-amber-700">{envTemp}°C</p>
          </div>

          <div className="space-y-0.5">
            <span className="font-mono text-[10px] uppercase text-roast-600">Rate of Rise (RoR):</span>
            <p className="font-mono text-2xl font-bold text-roast-900">{ror}°C/m</p>
          </div>

          <div className="space-y-0.5 col-span-2 sm:col-span-1">
            <span className="font-mono text-[10px] uppercase text-roast-500">Fase Saat Ini:</span>
            <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-roast-950 text-paper-50 block text-center truncate">
              {currentPhase === 'drying' && '1. Pengeringan (Drying)'}
              {currentPhase === 'maillard' && '2. Maillard Reaction'}
              {currentPhase === 'first_crack' && '3. FIRST CRACK! 💥'}
              {currentPhase === 'development' && `4. Dev (DTR: ${dtr}%)`}
              {currentPhase === 'dropped' && 'Batch Selesai (Dropped)'}
            </span>
          </div>
        </div>
      </div>

      {/* Main Grid: Machine Controls (Left) + SVG Live Curves Chart (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT COLUMN: Hardware Controls & Milestones (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Burner & Airflow Panel */}
          <div className="bg-paper-50 border border-paper-300 rounded-2xl p-5 shadow-xs space-y-5">
            <span className="font-mono text-xs uppercase tracking-wider text-roast-900 font-bold flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-cherry-700" /> Kontrol Pemanas & Sirkulasi Udara
            </span>

            {/* Gas Burner Power Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-roast-700 font-semibold flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 text-orange-600" /> Daya Pembakar (Gas Burner):
                </span>
                <span className="font-bold text-roast-950">{burnerPower}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                step="5"
                value={burnerPower}
                onChange={(e) => setBurnerPower(parseInt(e.target.value, 10))}
                className="w-full accent-orange-600 h-2 bg-paper-200 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-roast-400">
                <span>0% (Mati)</span>
                <span>50% (Sedang)</span>
                <span>100% (Api Maksimal)</span>
              </div>
            </div>

            {/* Airflow Damper */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-roast-700 font-semibold flex items-center gap-1">
                  <Wind className="w-3.5 h-3.5 text-blue-600" /> Damper Aliran Udara (Airflow):
                </span>
                <span className="font-bold text-roast-950">Level {airflow} / 5</span>
              </div>
              <div className="grid grid-cols-5 gap-1.5">
                {[1, 2, 3, 4, 5].map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setAirflow(lvl)}
                    className={`py-1.5 rounded-lg font-mono text-xs font-bold border transition-all ${
                      airflow === lvl
                        ? 'bg-blue-600 text-paper-50 border-blue-700 shadow-2xs'
                        : 'bg-paper-100 text-roast-700 border-paper-300 hover:bg-paper-200'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-roast-500 font-sans">
                Airflow tinggi membuang asap & kulit ari (chaff), namun menyerap panas drum lebih cepat.
              </p>
            </div>

            {/* Batch Parameters */}
            <div className="pt-3 border-t border-paper-200 grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-2.5 bg-paper-100/60 rounded-xl border border-paper-200 space-y-1">
                <span className="text-roast-500 text-[10px] uppercase block">Kapasitas Batch:</span>
                <span className="font-bold text-roast-950 text-sm">{batchSize} gram</span>
              </div>
              <div className="p-2.5 bg-paper-100/60 rounded-xl border border-paper-200 space-y-1">
                <span className="text-roast-500 text-[10px] uppercase block">Putaran Drum:</span>
                <span className="font-bold text-roast-950 text-sm">{drumRpm} RPM</span>
              </div>
            </div>
          </div>

          {/* Roasting Milestones Table */}
          <div className="bg-paper-50 border border-paper-300 rounded-2xl p-5 shadow-xs space-y-3">
            <span className="font-mono text-xs uppercase tracking-wider text-roast-900 font-bold block">
              Titik Kritis Roasting (Roast Milestones)
            </span>

            <div className="space-y-2 text-xs font-mono">
              {/* Turning Point */}
              <div className="p-2.5 rounded-xl bg-paper-100/70 border border-paper-200 flex justify-between items-center">
                <div>
                  <span className="font-bold text-roast-950 block">Turning Point (TP)</span>
                  <span className="text-[10px] text-roast-500">Titik balik penurunan suhu</span>
                </div>
                <span className="font-bold text-roast-800">
                  {turningPoint ? `${formatTime(turningPoint.time)} • ${turningPoint.temp}°C` : 'Menunggu...'}
                </span>
              </div>

              {/* Yellowing / Dry End */}
              <div className="p-2.5 rounded-xl bg-paper-100/70 border border-paper-200 flex justify-between items-center">
                <div>
                  <span className="font-bold text-roast-950 block">Dry End (Fase Kuning)</span>
                  <span className="text-[10px] text-roast-500">Kadar air bebas menguap (155°C)</span>
                </div>
                <span className="font-bold text-roast-800">
                  {yellowingPoint ? `${formatTime(yellowingPoint.time)} • ${yellowingPoint.temp}°C` : 'Menunggu...'}
                </span>
              </div>

              {/* First Crack */}
              <div className="p-2.5 rounded-xl bg-amber-50/80 border border-amber-200 flex justify-between items-center">
                <div>
                  <span className="font-bold text-amber-950 block">First Crack (FC)</span>
                  <span className="text-[10px] text-amber-800">Letupan selulosa uap air (196°C)</span>
                </div>
                <span className="font-bold text-amber-900">
                  {firstCrackTime ? `${formatTime(firstCrackTime.time)} • ${firstCrackTime.temp}°C` : 'Menunggu...'}
                </span>
              </div>

              {/* Drop */}
              <div className="p-2.5 rounded-xl bg-paper-100/70 border border-paper-200 flex justify-between items-center">
                <div>
                  <span className="font-bold text-roast-950 block">Drop Batch</span>
                  <span className="text-[10px] text-roast-500">Pengeluaran biji ke cooling tray</span>
                </div>
                <span className="font-bold text-roast-800">
                  {dropPoint ? `${formatTime(dropPoint.time)} • ${dropPoint.temp}°C` : 'Dalam proses...'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Live SVG Roasting Chart & Cupping Result (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Live Graph Canvas Box */}
          <div className="bg-roast-950 text-paper-50 rounded-2xl p-5 shadow-xl border border-roast-800 space-y-4">
            <div className="flex items-center justify-between border-b border-roast-800 pb-3">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-cherry-500" />
                <span className="font-mono text-xs uppercase tracking-wider text-crema-300 font-bold">
                  Telemetri Kurva BT & RoR (Artisan/Cropster View)
                </span>
              </div>
              <div className="flex items-center gap-3 text-[10px] font-mono">
                <span className="flex items-center gap-1 text-cherry-400">
                  <span className="w-2 h-2 rounded-full bg-cherry-500 inline-block" /> BT (°C)
                </span>
                <span className="flex items-center gap-1 text-amber-400">
                  <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" /> ET (°C)
                </span>
                <span className="flex items-center gap-1 text-sky-400">
                  <span className="w-2 h-2 rounded-full bg-sky-400 inline-block" /> RoR
                </span>
              </div>
            </div>

            {/* SVG Plot */}
            <div className="relative w-full h-72 bg-roast-900/60 rounded-xl overflow-hidden p-2 border border-roast-800 flex items-center justify-center">
              {telemetry.length === 0 ? (
                <div className="text-center font-mono text-xs text-roast-500 space-y-2">
                  <Flame className="w-8 h-8 text-roast-700 mx-auto animate-pulse" />
                  <p>Tekan tombol &ldquo;Mulai Sangrai&rdquo; untuk memulai kurva telemetri</p>
                </div>
              ) : (
                <svg className="w-full h-full" viewBox="0 0 400 240" preserveAspectRatio="none">
                  {/* Grid Lines */}
                  <line x1="0" y1="60" x2="400" y2="60" stroke="#3f3f46" strokeDasharray="3 3" strokeWidth="0.5" />
                  <line x1="0" y1="120" x2="400" y2="120" stroke="#3f3f46" strokeDasharray="3 3" strokeWidth="0.5" />
                  <line x1="0" y1="180" x2="400" y2="180" stroke="#3f3f46" strokeDasharray="3 3" strokeWidth="0.5" />

                  {/* Temperature Lines (ET & BT) */}
                  {/* Map Time (0 - 700s) to X (0 - 400), Temp (80 - 240°C) to Y (240 - 0) */}
                  <polyline
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="1.5"
                    points={telemetry
                      .map((p) => {
                        const x = (p.timeSec / 650) * 400;
                        const y = 240 - ((p.envTemp - 80) / 160) * 240;
                        return `${x},${y}`;
                      })
                      .join(' ')}
                  />

                  <polyline
                    fill="none"
                    stroke="#DC2626"
                    strokeWidth="2.5"
                    points={telemetry
                      .map((p) => {
                        const x = (p.timeSec / 650) * 400;
                        const y = 240 - ((p.beanTemp - 80) / 160) * 240;
                        return `${x},${y}`;
                      })
                      .join(' ')}
                  />

                  {/* RoR Curve (Sky Blue) scaled to Y: RoR 0-25 */}
                  <polyline
                    fill="none"
                    stroke="#38BDF8"
                    strokeWidth="1.2"
                    strokeDasharray="2 2"
                    points={telemetry
                      .map((p) => {
                        const x = (p.timeSec / 650) * 400;
                        const y = 240 - (p.ror / 25) * 160;
                        return `${x},${y}`;
                      })
                      .join(' ')}
                  />
                </svg>
              )}
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-roast-400">
              <span>0:00 (Charge)</span>
              <span>1:30 (TP ~98°C)</span>
              <span>5:00 (Dry ~155°C)</span>
              <span>9:00 (FC ~196°C)</span>
              <span>11:00+ (Drop)</span>
            </div>
          </div>

          {/* Post-Roast Diagnostic & Cupping Prediction */}
          {roastEvaluation && (
            <div className={`p-5 rounded-2xl border space-y-4 shadow-md ${roastEvaluation.verdictClass}`}>
              <div className="flex items-center justify-between border-b border-black/10 pb-3">
                <span className="font-mono text-xs uppercase tracking-wider font-bold flex items-center gap-1.5">
                  <Award className="w-4 h-4" /> Diagnosis Hasil Sangrai (Post-Roast Cupping)
                </span>
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-black/10">
                  DTR: {roastEvaluation.finalDtr}%
                </span>
              </div>

              <div className="space-y-1">
                <span className="font-mono text-[10px] uppercase block opacity-80">Tingkat Sangrai:</span>
                <h4 className="font-serif text-lg font-bold">{roastEvaluation.roastColor}</h4>
                <p className="font-sans text-xs leading-relaxed">{roastEvaluation.diagnosis}</p>
              </div>

              <div className="pt-2 border-t border-black/10 space-y-1.5">
                <span className="font-mono text-[10px] uppercase block font-bold">Prediksi Profil Rasa:</span>
                <div className="flex flex-wrap gap-1.5">
                  {roastEvaluation.flavorNotes.map((note, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-black/10 font-medium text-xs font-serif"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
