'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Flame,
  Wind,
  Play,
  Square,
  RotateCcw,
  Info,
  Award,
  Volume2,
  VolumeX,
  Activity,
} from "lucide-react";

interface TelemetryPoint {
  timeSec: number;
  beanTemp: number; // BT in °C
  envTemp: number; // ET in °C
  ror: number; // Rate of Rise °C/min
  burner: number;
  airflow: number;
  phase: 'drying' | 'maillard' | 'first_crack' | 'development' | 'second_crack' | 'dropped';
}

export interface TargetRoastProfile {
  id: string;
  name: string;
  species: 'Arabica' | 'Robusta' | 'Blend';
  roastDegree: string;
  targetDropTempMin: number;
  targetDropTempMax: number;
  targetDtrMin: number;
  targetDtrMax: number;
  targetTimeSecMin: number;
  targetTimeSecMax: number;
  initialBurner: number;
  initialAirflow: number;
  recommendedOrigins: string;
  flavorHighlights: string[];
  roasterAdvice: string;
  badgeColor: string;
}

export const ROAST_PROFILES: TargetRoastProfile[] = [
  {
    id: 'arabica-light',
    name: 'Arabica Light Filter (Nordic/City)',
    species: 'Arabica',
    roastDegree: 'Light / City (Agtron 80–90)',
    targetDropTempMin: 204,
    targetDropTempMax: 208,
    targetDtrMin: 13,
    targetDtrMax: 16,
    targetTimeSecMin: 570, // 9:30
    targetTimeSecMax: 660, // 11:00
    initialBurner: 75,
    initialAirflow: 3,
    recommendedOrigins: 'Gayo Washed, Kerinci Honey, Toraja Sapan, Bali Kintamani',
    flavorHighlights: ['Floral Melati', 'Crisp Citrus Lemon', 'Teh Hijau / Bergamot', 'Bright Malic'],
    roasterAdvice: 'Turunkan burner 15-20% sebelum First Crack agar RoR melandai teratur dan tidak crash. Drop tepat saat letupan FC melambat.',
    badgeColor: 'border-sky-300 bg-sky-50 text-sky-800'
  },
  {
    id: 'arabica-medium',
    name: 'Arabica Omni / Medium (City+)',
    species: 'Arabica',
    roastDegree: 'Medium / City+ (Agtron 65–75)',
    targetDropTempMin: 211,
    targetDropTempMax: 215,
    targetDtrMin: 17,
    targetDtrMax: 21,
    targetTimeSecMin: 640, // 10:40
    targetTimeSecMax: 760, // 12:40
    initialBurner: 70,
    initialAirflow: 3,
    recommendedOrigins: 'Flores Bajawa Natural, Ijen Anaerobic, Kamojang Honey, Mandheling',
    flavorHighlights: ['Brown Sugar', 'Cokelat Susu', 'Stone Fruit / Aprikot', 'Silky Body'],
    roasterAdvice: 'Perpanjang fase Maillard (160°C - 196°C) untuk mengunci karamelisasi gula alami buah. Sangat fleksibel untuk V60 maupun Espresso manis.',
    badgeColor: 'border-amber-300 bg-amber-50 text-amber-800'
  },
  {
    id: 'fine-robusta',
    name: 'Fine Robusta Specialty (Full City)',
    species: 'Robusta',
    roastDegree: 'Medium-Dark / Full City (Agtron 50–60)',
    targetDropTempMin: 218,
    targetDropTempMax: 222,
    targetDtrMin: 20,
    targetDtrMax: 24,
    targetTimeSecMin: 720, // 12:00
    targetTimeSecMax: 880, // 14:40
    initialBurner: 75,
    initialAirflow: 4,
    recommendedOrigins: 'Temanggung Natural Robusta, Lampung Tanggamus, Dampit Malang, Bengkulu',
    flavorHighlights: ['Dark Chocolate 70%', 'Roasted Hazelnut', 'Molasses', 'Crema Raksasa'],
    roasterAdvice: 'Densitas Robusta lebih rapat. Gunakan panas konduktif stabil di awal, dan naikkan airflow damper ke level 4 di akhir Maillard untuk membuang aroma woody mentah.',
    badgeColor: 'border-emerald-300 bg-emerald-50 text-emerald-800'
  },
  {
    id: 'house-blend',
    name: 'House Blend Cafe Espresso (Full City+)',
    species: 'Blend',
    roastDegree: 'Medium-Dark (Agtron 45–55)',
    targetDropTempMin: 216,
    targetDropTempMax: 220,
    targetDtrMin: 19,
    targetDtrMax: 23,
    targetTimeSecMin: 690, // 11:30
    targetTimeSecMax: 820, // 13:40
    initialBurner: 70,
    initialAirflow: 3,
    recommendedOrigins: '60% Arabica Mandheling/Toraja + 40% Fine Robusta Dampit',
    flavorHighlights: ['Caramel Fudge', 'Kakao Pekat', 'Heavy Mouthfeel', 'Crema Emas Tahan Lama'],
    roasterAdvice: 'Rasio emas untuk bahan baku Es Kopi Susu Aren dan Americano kafe komersial. Memiliki ketahanan rasa tinggi saat tercampur susu segar.',
    badgeColor: 'border-purple-300 bg-purple-50 text-purple-800'
  },
  {
    id: 'dark-roast',
    name: 'Traditional Dark Roast (Vienna / French)',
    species: 'Blend',
    roastDegree: 'Dark Roast (Agtron < 40 / Awal 2nd Crack)',
    targetDropTempMin: 225,
    targetDropTempMax: 230,
    targetDtrMin: 23,
    targetDtrMax: 28,
    targetTimeSecMin: 810, // 13:30
    targetTimeSecMax: 990, // 16:30
    initialBurner: 65,
    initialAirflow: 5,
    recommendedOrigins: 'Arabica Giling Basah Sumatera, Robusta Komersial (Kopi Tubruk Tradisional)',
    flavorHighlights: ['Smoky Aromatic', 'Bittersweet Cocoa', 'Zero Acidity', 'Oily Rich Body'],
    roasterAdvice: 'Masuk di ambang Second Crack (224°C+). Wajib set airflow maksimal (Level 5) untuk meniup asap pekat agar biji tidak berbau sangit terpanggang.',
    badgeColor: 'border-rose-300 bg-rose-50 text-rose-800'
  }
];

export function RoastingSimulator() {
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Target Roast Profile Preset
  const [selectedProfileId, setSelectedProfileId] = useState<string>('arabica-medium');
  const activeProfile = useMemo(() => {
    return ROAST_PROFILES.find((p) => p.id === selectedProfileId) || ROAST_PROFILES[1];
  }, [selectedProfileId]);

  // Machine Controls
  const [burnerPower, setBurnerPower] = useState(activeProfile.initialBurner); // 0-100%
  const [airflow, setAirflow] = useState(activeProfile.initialAirflow); // 1-5
  const [drumRpm, _setDrumRpm] = useState(65); // 50-80 RPM
  const [batchSize, _setBatchSize] = useState(1000); // 1000g

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
  const [secondCrackTime, setSecondCrackTime] = useState<{ time: number; temp: number } | null>(null);
  const [dropPoint, setDropPoint] = useState<{ time: number; temp: number } | null>(null);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Sound generator for First and Second Crack pops
  const playCrackPop = (isSecondCrack = false) => {
    if (!soundEnabled) return;
    try {
      if (!audioCtxRef.current) {
        const AudioContextConstructor = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
        if (AudioContextConstructor) {
          audioCtxRef.current = new AudioContextConstructor();
        }
      }
      const ctx = audioCtxRef.current;
      if (!ctx) return;
      if (ctx.state === 'suspended') ctx.resume();

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      if (isSecondCrack) {
        // Sharp, high-frequency snapping sound of carbon matrix fracturing
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(620 + Math.random() * 380, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(160, ctx.currentTime + 0.04);
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.05);
      } else {
        // Deeper, woody moisture pop of First Crack
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(320 + Math.random() * 280, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.06);
        gain.gain.setValueAtTime(0.25, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.07);
      }
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
    if (beanTemp >= 224) return 'second_crack';
    return 'development';
  }, [beanTemp, isFinished]);

  // Development Time Ratio (DTR)
  const dtr = useMemo(() => {
    if (!firstCrackTime || currentTime <= firstCrackTime.time) return 0;
    const devTime = currentTime - firstCrackTime.time;
    return Number(((devTime / currentTime) * 100).toFixed(1));
  }, [firstCrackTime, currentTime]);

  // Check if live roast is inside target profile sweet spot
  const isInDropTargetZone = useMemo(() => {
    if (!isRunning) return false;
    return (
      beanTemp >= activeProfile.targetDropTempMin &&
      beanTemp <= activeProfile.targetDropTempMax &&
      dtr >= activeProfile.targetDtrMin &&
      dtr <= activeProfile.targetDtrMax
    );
  }, [isRunning, beanTemp, dtr, activeProfile]);

  // Select target roast profile preset
  const handleSelectProfile = (profileId: string) => {
    setSelectedProfileId(profileId);
    const target = ROAST_PROFILES.find((p) => p.id === profileId);
    if (target && !isRunning) {
      setBurnerPower(target.initialBurner);
      setAirflow(target.initialAirflow);
    }
  };

  // Start / Drop Roaster
  const handleStart = () => {
    if (isFinished) handleReset();
    setIsRunning(true);
  };

  const playCrackPopRef = useRef(playCrackPop);

  const handleDrop = () => {
    setIsRunning(false);
    setIsFinished(true);
    setDropPoint({ time: currentTime, temp: beanTemp });
  };

  const handleDropRef = useRef(handleDrop);

  useEffect(() => {
    playCrackPopRef.current = playCrackPop;
    handleDropRef.current = handleDrop;
  });

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
    setSecondCrackTime(null);
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
            const tempGap = 245 - prevBt;
            const naturalDecline = Math.max(0.18, tempGap / 120);

            // Exothermic energy during First Crack (196°C - 204°C)
            let crackExotherm = 0;
            if (prevBt >= 196 && prevBt <= 204) {
              crackExotherm = 0.15; // moisture flash boiling produces energy
              if (Math.random() > 0.4) playCrackPopRef.current(false);
            }

            // Exothermic energy during Second Crack (224°C - 232°C)
            if (prevBt >= 224 && prevBt <= 232) {
              crackExotherm = 0.10; // carbon matrix fracturing
              if (Math.random() > 0.35) playCrackPopRef.current(true);
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
          if (newBt >= 224 && !secondCrackTime) {
            setSecondCrackTime({ time: nextTime, temp: newBt });
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
                newBt < 155
                  ? 'drying'
                  : newBt < 196
                  ? 'maillard'
                  : newBt < 205
                  ? 'first_crack'
                  : newBt >= 224
                  ? 'second_crack'
                  : 'development',
            },
          ]);

          // Auto-drop safety if overheats beyond 238°C
          if (newBt >= 238) {
            handleDropRef.current();
          }

          return newBt;
        });

        return nextTime;
      });
    }, 500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRunning, burnerPower, airflow, batchSize, turningPoint, yellowingPoint, firstCrackTime, secondCrackTime]);

  // Format mm:ss
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Dynamic maximum time for chart X-axis so curves never truncate or hit a wall
  const maxChartTimeSec = useMemo(() => {
    const latestTime = telemetry.length > 0 
      ? Math.max(currentTime, telemetry[telemetry.length - 1].timeSec)
      : currentTime;
    // Minimum 900 seconds (15 minutes), dynamic expansion in 120-second (2 min) increments
    return Math.max(900, Math.ceil((latestTime + 120) / 120) * 120);
  }, [telemetry, currentTime]);

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
    } else if (finalBt <= 223) {
      roastColor = 'Medium-Dark / Full City (Agtron 50–60)';
      flavorNotes = ['Dark Cocoa', 'Kacang Panggang', 'Molasses', 'Heavy Crema'];
      diagnosis = 'Full City Espresso Workhorse: Crema sangat tebal, bodi mantap menembus susu & gula aren tanpa rasa gosong.';
      verdictClass = 'bg-blue-50 text-blue-900 border-blue-300';
    } else if (finalBt <= 231) {
      roastColor = 'Dark Roast / French Roast (Agtron 35–45)';
      flavorNotes = ['Dark Bittersweet Cocoa', 'Smoky Cedarwood', 'Molasses Panggang', 'Oily Crema'];
      diagnosis = 'Traditional Dark Roast Nusantara: Asam buah telah sepenuhnya hilang, digantikan kepulan aroma minyak lipid dan nuansa cokelat hitam pekat. Sangat nikmat untuk Kopi Tubruk Nusantara atau basis Es Kopi Susu legendaris.';
      verdictClass = 'bg-stone-100 text-stone-900 border-stone-400';
    } else {
      roastColor = 'Very Dark / Italian Roast (Agtron < 30)';
      flavorNotes = ['Abu Sangit', 'Smoky Pahit Tajam', 'Arang Karbon', 'Minyak Tebal'];
      diagnosis = 'Over-Roast / Terlalu Gelap: Struktur karbon selulosa mulai terbakar. Biji sangat berminyak dan menyisakan aftertaste arang pahit getir.';
      verdictClass = 'bg-rose-50 text-rose-900 border-rose-300';
    }

    // Target Profile Benchmark
    const isTempOnTarget = finalBt >= activeProfile.targetDropTempMin && finalBt <= activeProfile.targetDropTempMax;
    const isDtrOnTarget = finalDtr >= activeProfile.targetDtrMin && finalDtr <= activeProfile.targetDtrMax;
    const isTargetMatched = isTempOnTarget && isDtrOnTarget;

    let targetAccuracyMsg = '';
    if (isTargetMatched) {
      targetAccuracyMsg = `🎯 Sempurna! Batch ini tepat berada dalam target profil ${activeProfile.name} (Suhu: ${finalBt}°C, DTR: ${finalDtr}%).`;
    } else if (isTempOnTarget && !isDtrOnTarget) {
      targetAccuracyMsg = `Suhu drop (${finalBt}°C) sudah tepat di zona target ${activeProfile.name}, namun rasio development (DTR ${finalDtr}%) sedikit di luar rentang ideal (${activeProfile.targetDtrMin}–${activeProfile.targetDtrMax}%).`;
    } else {
      targetAccuracyMsg = `Suhu drop aktual ${finalBt}°C (Target profil ${activeProfile.name}: ${activeProfile.targetDropTempMin}–${activeProfile.targetDropTempMax}°C).`;
    }

    return {
      roastColor,
      flavorNotes,
      diagnosis,
      verdictClass,
      finalBt,
      finalDtr,
      isTargetMatched,
      targetAccuracyMsg,
    };
  }, [isFinished, beanTemp, dtr, activeProfile]);

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
              {currentPhase === 'second_crack' && '5. SECOND CRACK! 🔥'}
              {currentPhase === 'dropped' && 'Batch Selesai (Dropped)'}
            </span>
          </div>
        </div>
      </div>

      {/* Target Roast Profile Presets Bar */}
      <div className="bg-paper-100/90 border border-paper-300 rounded-2xl p-4 sm:p-5 shadow-xs space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="font-mono text-[10px] tracking-widest text-cherry-700 font-bold uppercase block">
              [ TARGET PROFILE PRESET // ARABICA VS ROBUSTA ]
            </span>
            <h3 className="font-serif font-bold text-base text-roast-950">
              Pilih Target Profil Sangrai Sesuai Spesies & Metode Seduh
            </h3>
          </div>
          <div className="font-mono text-xs text-roast-600 bg-white/70 px-3 py-1 rounded border border-paper-200">
            Target Drop: <strong className="text-cherry-700">{activeProfile.targetDropTempMin}–{activeProfile.targetDropTempMax}°C</strong> • Target DTR: <strong className="text-roast-900">{activeProfile.targetDtrMin}–{activeProfile.targetDtrMax}%</strong>
          </div>
        </div>

        {/* Profile Chips */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {ROAST_PROFILES.map((prof) => {
            const isSelected = prof.id === selectedProfileId;
            return (
              <button
                key={prof.id}
                onClick={() => handleSelectProfile(prof.id)}
                className={`p-2.5 rounded-xl border text-left font-mono transition-all ${
                  isSelected
                    ? 'bg-roast-950 text-paper-50 border-roast-950 shadow-xs'
                    : 'bg-paper-50 text-roast-800 border-paper-300 hover:border-roast-500'
                }`}
              >
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className={`text-[9px] font-bold px-1.5 py-0.5 border rounded uppercase ${
                    isSelected ? 'bg-white/20 text-paper-50 border-white/30' : prof.badgeColor
                  }`}>
                    {prof.species}
                  </span>
                  <span className="text-[10px] opacity-70">
                    {prof.targetDropTempMin}°C
                  </span>
                </div>
                <div className="text-xs font-bold truncate">
                  {prof.name.split(' (')[0]}
                </div>
                <div className="text-[10px] opacity-70 truncate font-sans">
                  {prof.roastDegree.split(' (')[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Profile Summary Bar */}
        <div className="pt-2 border-t border-paper-200 flex flex-col md:flex-row md:items-center justify-between gap-2 text-xs font-sans text-roast-700">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] font-bold uppercase text-roast-500">Origin Rekomendasi:</span>
            <span className="font-medium text-roast-900">{activeProfile.recommendedOrigins}</span>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-[11px] text-roast-600">
            <Info className="w-3.5 h-3.5 text-cherry-700 shrink-0" />
            <span>{activeProfile.roasterAdvice}</span>
          </div>
        </div>
      </div>

      {/* Live In-Target Alert Banner */}
      {isInDropTargetZone && (
        <div className="p-3.5 bg-emerald-700 text-paper-50 border border-emerald-600 rounded-xl flex items-center justify-between font-mono text-xs shadow-md animate-pulse">
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-amber-300 animate-bounce" />
            <span className="font-bold">
              🔥 ZONA TARGET PROFILE TERCAPAI! (BT: {beanTemp}°C | DTR: {dtr}%) — Siap dikeluarkan!
            </span>
          </div>
          <button
            onClick={handleDrop}
            className="px-3 py-1 bg-paper-50 text-emerald-900 font-bold rounded hover:bg-emerald-50 transition-colors"
          >
            Drop Sekarang!
          </button>
        </div>
      )}

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

              {/* Second Crack */}
              <div className="p-2.5 rounded-xl bg-rose-50/80 border border-rose-200 flex justify-between items-center">
                <div>
                  <span className="font-bold text-rose-950 block">Second Crack (2C)</span>
                  <span className="text-[10px] text-rose-800">Fraktur struktur karbon (224°C+)</span>
                </div>
                <span className="font-bold text-rose-900">
                  {secondCrackTime ? `${formatTime(secondCrackTime.time)} • ${secondCrackTime.temp}°C` : 'Menunggu...'}
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

            {/* SVG Plot with Dynamic maxChartTimeSec & Target Zone */}
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

                  {/* Target Drop Sweet-Spot Shaded Box */}
                  <g>
                    <rect
                      x={(activeProfile.targetTimeSecMin / maxChartTimeSec) * 400}
                      y={Math.max(0, 240 - ((activeProfile.targetDropTempMax - 80) / 165) * 240)}
                      width={Math.max(12, ((activeProfile.targetTimeSecMax - activeProfile.targetTimeSecMin) / maxChartTimeSec) * 400)}
                      height={((activeProfile.targetDropTempMax - activeProfile.targetDropTempMin) / 165) * 240}
                      fill="rgba(16, 185, 129, 0.18)"
                      stroke="#10B981"
                      strokeDasharray="4 2"
                      strokeWidth="1"
                    />
                    <text
                      x={(activeProfile.targetTimeSecMin / maxChartTimeSec) * 400 + 4}
                      y={Math.max(14, 240 - ((activeProfile.targetDropTempMax - 80) / 165) * 240 + 10)}
                      fill="#34D399"
                      fontSize="7.5"
                      fontFamily="monospace"
                      fontWeight="bold"
                    >
                      TARGET ({activeProfile.targetDropTempMin}–{activeProfile.targetDropTempMax}°C)
                    </text>
                  </g>

                  {/* Temperature Lines (ET & BT) */}
                  <polyline
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="1.5"
                    points={telemetry
                      .map((p) => {
                        const x = (p.timeSec / maxChartTimeSec) * 400;
                        const y = 240 - ((p.envTemp - 80) / 165) * 240;
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
                        const x = (p.timeSec / maxChartTimeSec) * 400;
                        const y = 240 - ((p.beanTemp - 80) / 165) * 240;
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
                        const x = (p.timeSec / maxChartTimeSec) * 400;
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
              <span>{formatTime(Math.round(maxChartTimeSec * 0.25))}</span>
              <span>{formatTime(Math.round(maxChartTimeSec * 0.5))}</span>
              <span>{formatTime(Math.round(maxChartTimeSec * 0.75))}</span>
              <span>{formatTime(maxChartTimeSec)} (Skala Maks)</span>
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

              {/* Target Benchmark Accuracy */}
              <div className="p-2.5 rounded-lg bg-black/5 border border-black/10 font-mono text-xs">
                {roastEvaluation.targetAccuracyMsg}
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

      {/* PANDUAN SAINS ROASTING: ARABICA VS ROBUSTA VS DARK ROAST */}
      <div className="pt-8 border-t border-paper-300">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-[10px] tracking-widest text-cherry-700 font-bold uppercase bg-cherry-50 px-2 py-0.5 border border-cherry-200">
                [ ROAST SCIENCE // VARIETAL THERMODYNAMICS ]
              </span>
            </div>
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-roast-950">
              Panduan Profil Sangrai: Karakter Arabica vs Robusta vs Dark Roast
            </h3>
            <p className="font-sans text-xs text-roast-600 mt-1 max-w-2xl">
              Mengapa perlakuan roasting Arabica dan Robusta sangat berbeda? Pahami perbedaan densitas, 
              kandungan asam klorogenat, dan strategi airflow untuk menghasilkan cangkir kopi yang manis dan seimbang.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 font-sans">
          {/* Pillar 1: Arabica Specialty */}
          <div className="p-5 rounded-2xl border border-sky-200 bg-sky-50/40 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-sky-100 text-sky-800 border border-sky-300 uppercase">
                Arabica Specialty (High Grown)
              </span>
              <span className="font-mono text-xs font-bold text-sky-900">204°C – 215°C</span>
            </div>
            <h4 className="font-serif font-bold text-base text-roast-950">
              Densitas Tinggi & Asam Buah Halus
            </h4>
            <div className="space-y-2 text-xs text-roast-700 leading-relaxed">
              <p>
                <strong>Karakter Biji:</strong> Tumbuh di elevasi 1.200–2.000 mdpl. Struktur sel sangat padat dengan cadangan sukrosa (gula alami) tinggi dan asam sitrat/malat yang melimpah.
              </p>
              <p>
                <strong>Strategi Roasting:</strong> Butuh transfer panas yang terkendali. 30–45 detik menjelang First Crack, turunkan gas burner secara bertahap agar Rate of Rise (RoR) tidak meluncur anjlok (crash) atau melonjak (flick).
              </p>
              <p>
                <strong>Target Cangkir:</strong> Drop di kisaran 205–212°C (DTR 14–18%) untuk mempertahankan karakter floral, apel, dan rasa manis buah tanpa pahit gosong.
              </p>
            </div>
          </div>

          {/* Pillar 2: Fine Robusta */}
          <div className="p-5 rounded-2xl border border-emerald-200 bg-emerald-50/40 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300 uppercase">
                Fine Robusta (Petik Merah)
              </span>
              <span className="font-mono text-xs font-bold text-emerald-900">216°C – 222°C</span>
            </div>
            <h4 className="font-serif font-bold text-base text-roast-950">
              Kafein Tinggi & Pemecahan Klorogenat
            </h4>
            <div className="space-y-2 text-xs text-roast-700 leading-relaxed">
              <p>
                <strong>Karakter Biji:</strong> Tumbuh di 400–900 mdpl. Mengandung kafein 2x lipat dan asam klorogenat (CGA) tinggi, namun kadar gula bebas lebih rendah dibanding Arabica.
              </p>
              <p>
                <strong>Strategi Roasting:</strong> Wajib memperpanjang fase Maillard (160°C–196°C) dengan airflow tinggi (level 3–4) untuk mengurai asam klorogenat agar tidak menyisakan rasa sepat/karet terbakar.
              </p>
              <p>
                <strong>Target Cangkir:</strong> Drop di Full City 218–222°C (DTR 20–24%). Menghasilkan body kental cokelat pekat, aroma kacang panggang, dan penopang crema emas tebal untuk es kopi susu.
              </p>
            </div>
          </div>

          {/* Pillar 3: Traditional Dark Roast */}
          <div className="p-5 rounded-2xl border border-stone-300 bg-stone-100/60 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-stone-200 text-stone-800 border border-stone-400 uppercase">
                Traditional Dark Roast (Vienna/French)
              </span>
              <span className="font-mono text-xs font-bold text-stone-900">225°C – 230°C</span>
            </div>
            <h4 className="font-serif font-bold text-base text-roast-950">
              Pirolisis Karbon & Minyak Permukaan
            </h4>
            <div className="space-y-2 text-xs text-roast-700 leading-relaxed">
              <p>
                <strong>Karakter Biji:</strong> Dimasak hingga ambang Second Crack (224°C+). Dinding sel selulosa merekah dan minyak lipid esensial kopi terdorong keluar membasahi permukaan biji.
              </p>
              <p>
                <strong>Strategi Roasting:</strong> Wajib pasang airflow maksimum (Level 5) saat melewati 222°C. Sirkulasi udara kencang sangat krusial untuk meniup asap pekat agar biji tidak berbau apek/asap sangit terpanggang.
              </p>
              <p>
                <strong>Target Cangkir:</strong> Asam buah lenyap 100%. Tercipta rasa pahit manis kakao pekat dan aroma smoky cedar yang tahan banting dicampur krimer, susu kental manis, atau diseduh Tubruk pekat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
