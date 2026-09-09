'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Headphones,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Gauge,
  Sparkles,
  AudioWaveform,
} from 'lucide-react';

interface AudioNarrationPlayerProps {
  title: string;
  rawMarkdown: string;
}

function cleanMarkdownForSpeech(md: string): string {
  if (!md) return '';
  return md
    // remove images
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '')
    // remove markdown links but keep text
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    // remove code blocks
    .replace(/```[\s\S]*?```/g, '')
    // remove inline code
    .replace(/`([^`]+)`/g, '$1')
    // remove headings markers
    .replace(/#{1,6}\s+/g, '')
    // remove blockquote symbols
    .replace(/>\s+/g, '')
    // remove bullet points
    .replace(/^[*\-+]\s+/gm, '')
    // remove numbered list
    .replace(/^\d+\.\s+/gm, '')
    // remove bold/italic markers
    .replace(/[*_]{1,3}([^*_]+)[*_]{1,3}/g, '$1')
    // remove diagram shorthand
    .replace(/\[DIAGRAM:[^\]]+\]/g, '')
    // remove tables
    .replace(/\|[^\n]+\|/g, '')
    // normalize whitespace
    .replace(/\n{2,}/g, '\n')
    .trim();
}

export const AudioNarrationPlayer: React.FC<AudioNarrationPlayerProps> = ({
  title,
  rawMarkdown,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [speechRate, setSpeechRate] = useState<number>(1.0);
  const [isSupported, setIsSupported] = useState(true);
  const [progressPercent, setProgressPercent] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const cleanedTextRef = useRef<string>('');

  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setIsSupported(false);
      return;
    }

    cleanedTextRef.current = `${title}. ${cleanMarkdownForSpeech(rawMarkdown)}`;

    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, [title, rawMarkdown]);

  const startSpeaking = (rate: number = speechRate) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    window.speechSynthesis.cancel();

    const fullText = cleanedTextRef.current;
    if (!fullText) return;

    const utterance = new SpeechSynthesisUtterance(fullText);
    utterance.lang = 'id-ID';
    utterance.rate = rate;
    utterance.pitch = 1.0;

    // Try finding an Indonesian voice
    const voices = window.speechSynthesis.getVoices();
    const idVoice = voices.find((v) => v.lang.startsWith('id') || v.lang.includes('ID'));
    if (idVoice) {
      utterance.voice = idVoice;
    }

    utterance.onboundary = (event) => {
      if (event.name === 'word' || event.charIndex !== undefined) {
        setCharIndex(event.charIndex);
        const percent = Math.min(100, Math.round((event.charIndex / fullText.length) * 100));
        setProgressPercent(percent);
      }
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
      setProgressPercent(100);
    };

    utterance.onerror = (e) => {
      console.warn('Speech synthesis error:', e);
      setIsPlaying(false);
      setIsPaused(false);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setIsPlaying(true);
    setIsPaused(false);
  };

  const handleTogglePlay = () => {
    if (!isSupported || typeof window === 'undefined') return;

    if (isPlaying) {
      if (isPaused) {
        window.speechSynthesis.resume();
        setIsPaused(false);
      } else {
        window.speechSynthesis.pause();
        setIsPaused(true);
      }
    } else {
      startSpeaking(speechRate);
    }
  };

  const handleStopReset = () => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
    setProgressPercent(0);
    setCharIndex(0);
  };

  const handleSpeedChange = (newRate: number) => {
    setSpeechRate(newRate);
    if (isPlaying && !isPaused) {
      startSpeaking(newRate);
    }
  };

  if (!isSupported) {
    return null;
  }

  return (
    <div className="my-6 rounded-xl border border-crema-300/80 bg-gradient-to-r from-amber-50/60 via-paper-50 to-amber-50/40 p-4 sm:p-4.5 shadow-xs not-prose">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Left: Branding & Status */}
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all ${
              isPlaying && !isPaused
                ? 'bg-cherry-700 text-white shadow-md animate-pulse'
                : 'bg-paper-200 text-roast-800'
            }`}
          >
            <Headphones className="w-5 h-5" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-cherry-800 bg-cherry-100/70 px-2 py-0.5 rounded">
                Mode Listen & Brew
              </span>
              {isPlaying && !isPaused && (
                <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-700 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                  Memutar Audio Narasi
                </span>
              )}
              {isPaused && (
                <span className="text-[10px] font-mono text-amber-700 font-semibold">
                  (Dijeda)
                </span>
              )}
            </div>
            <p className="text-xs text-roast-600 font-sans mt-0.5">
              Dengarkan materi ini sambil praktik seduh di bar kopi tanpa harus menatap layar.
            </p>
          </div>
        </div>

        {/* Right: Controls (Play, Reset, Speed) */}
        <div className="flex items-center gap-2.5 shrink-0 self-end sm:self-center">
          {/* Speed selector */}
          <div className="flex items-center bg-white border border-paper-300 rounded-lg p-0.5 text-xs font-mono">
            {[0.85, 1.0, 1.25, 1.5].map((rate) => (
              <button
                key={rate}
                onClick={() => handleSpeedChange(rate)}
                className={`px-2 py-1 rounded transition-colors ${
                  speechRate === rate
                    ? 'bg-roast-950 text-white font-bold'
                    : 'text-roast-600 hover:text-roast-950'
                }`}
                title={`Kecepatan ${rate}x`}
              >
                {rate}x
              </button>
            ))}
          </div>

          {/* Reset / Stop button */}
          {(isPlaying || progressPercent > 0) && (
            <button
              onClick={handleStopReset}
              className="p-2 rounded-lg bg-white hover:bg-paper-200 text-roast-700 border border-paper-300 transition-colors"
              title="Hentikan & Reset Audio"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}

          {/* Main Play / Pause Button */}
          <button
            onClick={handleTogglePlay}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cherry-700 hover:bg-cherry-800 text-white font-mono text-xs uppercase font-bold tracking-wider shadow-xs transition-all active:scale-95"
          >
            {isPlaying && !isPaused ? (
              <>
                <Pause className="w-4 h-4 fill-white" />
                <span>Jeda</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-white" />
                <span>{progressPercent > 0 ? 'Lanjut' : 'Dengarkan'}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Progress Bar (Visible while playing or started) */}
      {(isPlaying || progressPercent > 0) && (
        <div className="mt-3 pt-3 border-t border-paper-200/80">
          <div className="flex items-center justify-between text-[10px] font-mono text-roast-500 mb-1">
            <span>Progres Narasi Audio</span>
            <span>{progressPercent}%</span>
          </div>
          <div className="w-full bg-paper-200 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-cherry-700 h-full rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
