'use client';

import React, { useState, useEffect, useRef } from 'react';
import { BrewRecipe } from '@/lib/types';
import {
  Play,
  Pause,
  RotateCcw,
  Clock,
  Droplets,
  Flame,
  Scale,
  Sparkles,
  CheckCircle2,
  Check,
  ChevronRight,
  ChevronLeft,
  Volume2,
  VolumeX,
} from 'lucide-react';

interface InteractiveBrewGuideProps {
  recipe: BrewRecipe;
}

export const InteractiveBrewGuide: React.FC<InteractiveBrewGuideProps> = ({ recipe }) => {
  const [seconds, setSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Audio cue using Web Audio API
  const playBeep = () => {
    if (!soundEnabled || typeof window === 'undefined') return;
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.35);
    } catch {
      // Audio context might be restricted before user interaction
    }
  };

  useEffect(() => {
    let interval: any = null;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const remainder = totalSecs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainder.toString().padStart(2, '0')}`;
  };

  const handleToggleStep = (index: number) => {
    if (completedSteps.includes(index)) {
      setCompletedSteps(completedSteps.filter((i) => i !== index));
    } else {
      setCompletedSteps([...completedSteps, index]);
      playBeep();
      if (index < recipe.steps.length - 1) {
        setCurrentStepIndex(index + 1);
      }
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
    setCurrentStepIndex(0);
    setCompletedSteps([]);
  };

  const progressPercent = recipe.steps.length > 0
    ? Math.round((completedSteps.length / recipe.steps.length) * 100)
    : 0;

  return (
    <div className="bg-paper-50 rounded-2xl border-2 border-paper-400 p-5 sm:p-7 shadow-subtle my-8">
      {/* Header Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-paper-300">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-cherry-700 animate-pulse"></span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-cherry-800 font-bold bg-cherry-50 px-2 py-0.5 rounded border border-cherry-200">
              [ RESEP SEDUH INTERAKTIF // BREW-ALONG GUIDE ]
            </span>
          </div>
          <h3 className="font-serif font-bold text-2xl text-roast-950">
            Formula Seduh: {recipe.method}
          </h3>
          <p className="font-sans text-xs text-roast-600 mt-1 max-w-lg">
            Ikuti panduan takaran dan urutan tuangan di bawah ini. Aktifkan stopwatch untuk memandu kecepatan pouring secara presisi.
          </p>
        </div>

        {/* Stopwatch Controller */}
        <div className="flex items-center gap-3 bg-white p-2.5 rounded-xl border border-paper-300 shadow-xs self-start sm:self-auto font-mono">
          <Clock className="w-4 h-4 text-roast-500" />
          <div className="text-2xl font-bold text-roast-950 min-w-[70px]">
            {formatTime(seconds)}
          </div>
          <button
            onClick={() => {
              setIsRunning(!isRunning);
              if (!isRunning) playBeep();
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              isRunning
                ? 'bg-rose-700 hover:bg-rose-800 text-white'
                : 'bg-roast-950 hover:bg-cherry-800 text-paper-50'
            }`}
          >
            {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{isRunning ? 'Jeda' : 'Mulai'}</span>
          </button>
          <button
            onClick={handleReset}
            className="p-1.5 rounded-lg bg-paper-100 text-roast-600 hover:text-roast-950 border border-paper-300 transition-colors"
            title="Reset Stopwatch"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className={`p-1.5 rounded-lg border transition-colors ${
              soundEnabled
                ? 'bg-paper-100 text-roast-700 border-paper-300'
                : 'bg-paper-200 text-roast-400 border-paper-300'
            }`}
            title={soundEnabled ? 'Suara Aktif' : 'Suara Senyap'}
          >
            {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Recipe Specs Grid (Thumb-friendly parameters) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 my-5">
        {recipe.dose && (
          <div className="bg-white p-3 rounded-xl border border-paper-300">
            <span className="font-mono text-[9px] uppercase tracking-wider text-roast-500 font-bold block mb-1">
              Dosis Kopi
            </span>
            <div className="font-serif font-bold text-sm text-roast-950">{recipe.dose}</div>
          </div>
        )}

        {recipe.water && (
          <div className="bg-white p-3 rounded-xl border border-paper-300">
            <span className="font-mono text-[9px] uppercase tracking-wider text-roast-500 font-bold block mb-1">
              Air Seduh
            </span>
            <div className="font-serif font-bold text-sm text-roast-950">{recipe.water}</div>
          </div>
        )}

        {recipe.ratio && (
          <div className="bg-white p-3 rounded-xl border border-paper-300">
            <span className="font-mono text-[9px] uppercase tracking-wider text-roast-500 font-bold block mb-1">
              Rasio Seduh
            </span>
            <div className="font-serif font-bold text-sm text-cherry-800">{recipe.ratio}</div>
          </div>
        )}

        {recipe.temperature && (
          <div className="bg-white p-3 rounded-xl border border-paper-300">
            <span className="font-mono text-[9px] uppercase tracking-wider text-roast-500 font-bold block mb-1">
              Suhu Air
            </span>
            <div className="font-serif font-bold text-sm text-roast-950">{recipe.temperature}</div>
          </div>
        )}

        {recipe.grind_size && (
          <div className="bg-white p-3 rounded-xl border border-paper-300">
            <span className="font-mono text-[9px] uppercase tracking-wider text-roast-500 font-bold block mb-1">
              Ukuran Gilingan
            </span>
            <div className="font-serif font-bold text-xs text-roast-950 truncate" title={recipe.grind_size}>
              {recipe.grind_size}
            </div>
          </div>
        )}

        {recipe.brew_time && (
          <div className="bg-white p-3 rounded-xl border border-paper-300">
            <span className="font-mono text-[9px] uppercase tracking-wider text-roast-500 font-bold block mb-1">
              Target Waktu
            </span>
            <div className="font-serif font-bold text-sm text-roast-950">{recipe.brew_time}</div>
          </div>
        )}
      </div>

      {/* Progress Indicator */}
      <div className="mb-4">
        <div className="flex items-center justify-between text-xs font-mono text-roast-600 mb-1.5">
          <span>Progres Ekstraksi Seduh</span>
          <span className="font-bold text-roast-950">{progressPercent}% Tuntas ({completedSteps.length}/{recipe.steps.length} Langkah)</span>
        </div>
        <div className="w-full h-2 bg-paper-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-emerald-700 transition-all duration-300 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Interactive Step List */}
      <div className="space-y-2.5">
        <span className="font-mono text-[10px] uppercase tracking-widest text-roast-500 font-bold block mb-1">
          TAHAPAN SEDUH (KLIK UNTUK MENANDAI LANGKAH SELESAI):
        </span>
        {recipe.steps.map((step, idx) => {
          const isDone = completedSteps.includes(idx);
          const isCurrent = currentStepIndex === idx && !isDone;

          return (
            <div
              key={idx}
              onClick={() => handleToggleStep(idx)}
              className={`p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                isDone
                  ? 'bg-emerald-50/70 border-emerald-300 text-roast-700'
                  : isCurrent
                  ? 'bg-white border-2 border-roast-950 shadow-subtle'
                  : 'bg-white border-paper-300 text-roast-800 hover:border-paper-400'
              }`}
            >
              {/* Checkbox button */}
              <button
                type="button"
                className={`w-6 h-6 rounded-full shrink-0 flex items-center justify-center font-mono text-xs transition-colors mt-0.5 ${
                  isDone
                    ? 'bg-emerald-700 text-white'
                    : isCurrent
                    ? 'border-2 border-roast-950 text-roast-950 font-bold bg-crema-100'
                    : 'border border-paper-400 text-roast-500 bg-paper-100'
                }`}
              >
                {isDone ? <Check className="w-3.5 h-3.5" /> : idx + 1}
              </button>

              {/* Step Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="font-mono text-[10px] uppercase font-bold text-roast-500">
                    Langkah {idx + 1}
                  </span>
                  {isCurrent && (
                    <span className="font-mono text-[9px] uppercase font-bold bg-roast-950 text-paper-50 px-1.5 py-0.2 rounded">
                      Sedang Berjalan
                    </span>
                  )}
                </div>
                <p className={`text-xs sm:text-sm font-sans leading-relaxed ${isDone ? 'line-through text-roast-500' : 'text-roast-900'}`}>
                  {step}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Completion Notice */}
      {completedSteps.length === recipe.steps.length && recipe.steps.length > 0 && (
        <div className="mt-5 p-4 rounded-xl bg-emerald-100/70 border border-emerald-300 text-emerald-950 font-sans text-xs flex items-center justify-between gap-3 animate-in fade-in duration-300">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
            <div>
              <strong>Seduhan Selesai Sempurna!</strong>
              <div className="text-[11px] text-emerald-900">
                Aduk kopi di dalam server secara melingkar (*swirl*) sebelum dituangkan ke cangkir agar suhu dan TDS homogen.
              </div>
            </div>
          </div>
          <button
            onClick={handleReset}
            className="px-3 py-1.5 bg-white text-emerald-900 font-mono text-[11px] rounded border border-emerald-300 hover:bg-emerald-50 shrink-0"
          >
            Seduh Ulang
          </button>
        </div>
      )}
    </div>
  );
};
