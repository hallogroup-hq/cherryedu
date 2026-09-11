'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Headphones,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  Loader2,
  Volume2,
  Mic,
  User,
  SlidersHorizontal,
} from 'lucide-react';
import { toast } from 'sonner';

interface AudioNarrationPlayerProps {
  title: string;
  rawMarkdown: string;
}

type NeuralVoice = 'id-ID-GadisNeural' | 'id-ID-ArdiNeural';

const VOICE_OPTIONS: { id: NeuralVoice; label: string; gender: string; badge: string; desc: string }[] = [
  {
    id: 'id-ID-GadisNeural',
    label: 'Gadis',
    gender: 'Wanita',
    badge: '👩 Gadis',
    desc: 'Suara ramah, hangat, seperti edukator barista & podcaster',
  },
  {
    id: 'id-ID-ArdiNeural',
    label: 'Ardi',
    gender: 'Pria',
    badge: '👨 Ardi',
    desc: 'Suara tenang, jelas, artikulatif & berwibawa',
  },
];

function cleanMarkdownForSpeech(md: string): string {
  if (!md) return '';
  return md
    // remove images
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '')
    // remove markdown links but keep label
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
    // remove numbered list markers
    .replace(/^\d+\.\s+/gm, '')
    // remove bold/italic markers
    .replace(/[*_]{1,3}([^*_]+)[*_]{1,3}/g, '$1')
    // remove custom diagram shorthand
    .replace(/\[DIAGRAM:[^\]]+\]/g, '')
    // remove tables
    .replace(/\|[^\n]+\|/g, '')
    // expand common coffee abbreviations for natural phonetic reading
    .replace(/°C\b/g, ' derajat Celcius')
    .replace(/\bSCA\b/g, 'S-C-A')
    .replace(/\bTDS\b/g, 'T-D-S')
    .replace(/\bEY\b/g, 'Extraction Yield')
    .replace(/\bV60\b/g, 'V-60')
    .replace(/\b1:(\d+)\b/g, '1 banding $1')
    // normalize whitespace
    .replace(/\n{2,}/g, '\n')
    .trim();
}

function formatTime(seconds: number): string {
  if (!seconds || isNaN(seconds) || seconds < 0) return '00:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

export const AudioNarrationPlayer: React.FC<AudioNarrationPlayerProps> = ({
  title,
  rawMarkdown,
}) => {
  const [selectedVoice, setSelectedVoice] = useState<NeuralVoice>('id-ID-GadisNeural');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [playbackRate, setPlaybackRate] = useState<number>(1.0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [isUsingFallback, setIsUsingFallback] = useState(false);

  // Audio element reference for HTML5 Neural Audio
  const audioRef = useRef<HTMLAudioElement | null>(null);
  // In-memory cache for generated audio blobs: key = `${voice}__${title}`
  const audioCacheRef = useRef<Map<string, string>>(new Map());
  const cleanedTextRef = useRef<string>('');

  // Fallback WebSpeech utterance ref
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    cleanedTextRef.current = `${title}. ${cleanMarkdownForSpeech(rawMarkdown)}`;

    // Reset player states if lesson changes
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
    setIsPaused(false);
    setCurrentTime(0);
    setDuration(0);
    setIsUsingFallback(false);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, [title, rawMarkdown]);

  // Handle fallback WebSpeech when offline or API unavailable
  const playFallbackWebSpeech = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      toast.error('Browser ini tidak mendukung pemutaran suara otomatis.');
      return;
    }

    setIsUsingFallback(true);
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(cleanedTextRef.current);
    utterance.lang = 'id-ID';
    utterance.rate = playbackRate;
    utterance.pitch = selectedVoice === 'id-ID-GadisNeural' ? 1.05 : 0.95;

    const voices = window.speechSynthesis.getVoices();
    const idVoice = voices.find((v) => v.lang.startsWith('id') || v.lang.includes('ID'));
    if (idVoice) utterance.voice = idVoice;

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
      setCurrentTime(0);
    };

    utterance.onerror = () => {
      setIsPlaying(false);
      setIsPaused(false);
      setIsLoading(false);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setIsPlaying(true);
    setIsPaused(false);
    setIsLoading(false);
    toast.info('Menggunakan sintesis suara lokal browser sebagai cadangan.');
  };

  // Main fetch & play method
  const playNeuralAudio = async (voice: NeuralVoice = selectedVoice) => {
    const cacheKey = `${voice}__${title}`;

    try {
      setIsLoading(true);

      // 1. Check in-memory audio blob cache
      let audioSrc = audioCacheRef.current.get(cacheKey);

      if (!audioSrc) {
        // 2. Fetch from Edge Neural TTS API Route
        const response = await fetch('/api/tts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            text: cleanedTextRef.current,
            voice: voice,
          }),
        });

        if (!response.ok) {
          throw new Error(`TTS server responded with status ${response.status}`);
        }

        const audioBlob = await response.blob();
        audioSrc = URL.createObjectURL(audioBlob);
        audioCacheRef.current.set(cacheKey, audioSrc);
      }

      // 3. Initialize Audio element
      if (!audioRef.current) {
        audioRef.current = new Audio();
      }

      const audio = audioRef.current;
      audio.src = audioSrc;
      audio.playbackRate = playbackRate;

      audio.ontimeupdate = () => {
        setCurrentTime(audio.currentTime);
      };

      audio.onloadedmetadata = () => {
        setDuration(audio.duration || 0);
      };

      audio.onended = () => {
        setIsPlaying(false);
        setIsPaused(false);
        setCurrentTime(0);
      };

      audio.onerror = (e) => {
        console.warn('Audio playback error, falling back to Web Speech:', e);
        playFallbackWebSpeech();
      };

      await audio.play();
      setIsPlaying(true);
      setIsPaused(false);
      setIsLoading(false);
    } catch (err) {
      console.warn('Neural TTS request failed, using browser fallback:', err);
      playFallbackWebSpeech();
    }
  };

  const handleTogglePlay = () => {
    if (isLoading) return;

    if (isUsingFallback) {
      if (typeof window === 'undefined' || !window.speechSynthesis) return;
      if (isPlaying) {
        if (isPaused) {
          window.speechSynthesis.resume();
          setIsPaused(false);
        } else {
          window.speechSynthesis.pause();
          setIsPaused(true);
        }
      } else {
        playFallbackWebSpeech();
      }
      return;
    }

    if (isPlaying) {
      if (isPaused) {
        audioRef.current?.play();
        setIsPaused(false);
      } else {
        audioRef.current?.pause();
        setIsPaused(true);
      }
    } else {
      if (audioRef.current && audioRef.current.src && audioRef.current.currentTime > 0) {
        audioRef.current.play();
        setIsPlaying(true);
        setIsPaused(false);
      } else {
        playNeuralAudio(selectedVoice);
      }
    }
  };

  const handleStopReset = () => {
    if (isUsingFallback) {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    } else if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    setIsPlaying(false);
    setIsPaused(false);
    setCurrentTime(0);
  };

  const handleSpeedChange = (newRate: number) => {
    setPlaybackRate(newRate);
    if (audioRef.current) {
      audioRef.current.playbackRate = newRate;
    }
    if (isUsingFallback && isPlaying && !isPaused) {
      playFallbackWebSpeech();
    }
  };

  const handleVoiceChange = (newVoice: NeuralVoice) => {
    if (newVoice === selectedVoice) return;
    setSelectedVoice(newVoice);

    // If already playing, seamlessly switch to the new voice
    if (isPlaying) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      playNeuralAudio(newVoice);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || duration <= 0) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    const newTime = ratio * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const progressPercent = duration > 0 ? Math.min(100, (currentTime / duration) * 100) : 0;

  return (
    <div className="my-6 rounded-2xl border border-amber-200/80 bg-gradient-to-br from-amber-50/70 via-paper-50 to-orange-50/40 p-4 sm:p-5 shadow-xs not-prose transition-all">
      <div className="flex flex-col gap-4">
        {/* Header: Badge & Status */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                isPlaying && !isPaused
                  ? 'bg-cherry-700 text-white shadow-md shadow-cherry-700/25 ring-2 ring-cherry-400/40'
                  : 'bg-white text-roast-800 border border-paper-300 shadow-2xs'
              }`}
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin text-cherry-700" />
              ) : (
                <Headphones className="w-5 h-5" />
              )}
            </div>

            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase font-bold tracking-wider text-cherry-900 bg-cherry-100/90 border border-cherry-200 px-2.5 py-0.5 rounded-full shadow-2xs">
                  <Sparkles className="w-3 h-3 text-amber-600" />
                  Mode Listen & Brew
                </span>
                <span className="inline-flex items-center gap-1 font-mono text-[10px] font-semibold text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded-full">
                  AI Neural Voice
                </span>
                {isPlaying && !isPaused && (
                  <span className="flex items-center gap-1.5 text-[10px] font-mono text-cherry-800 font-bold animate-pulse">
                    <span className="w-2 h-2 rounded-full bg-cherry-600"></span>
                    Memutar Narasi
                  </span>
                )}
                {isPaused && (
                  <span className="text-[10px] font-mono text-amber-700 font-semibold bg-amber-100/70 px-2 py-0.5 rounded">
                    Dijeda
                  </span>
                )}
              </div>
              <p className="text-xs text-roast-700 font-sans mt-1">
                Dengarkan penjelasan materi dengan intonasi natural sambil mempraktikkan seduhan di bar kopi.
              </p>
            </div>
          </div>

          {/* Voice Selector Pills */}
          <div className="flex items-center gap-1.5 bg-white border border-paper-300/90 rounded-xl p-1 shadow-2xs">
            <span className="text-[11px] font-mono text-roast-500 px-2 flex items-center gap-1 font-medium">
              <Mic className="w-3.5 h-3.5 text-cherry-700" />
              Suara:
            </span>
            {VOICE_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                onClick={() => handleVoiceChange(opt.id)}
                className={`px-2.5 py-1 rounded-lg text-xs font-sans font-medium transition-all ${
                  selectedVoice === opt.id
                    ? 'bg-cherry-700 text-white shadow-xs font-semibold'
                    : 'text-roast-700 hover:bg-paper-100'
                }`}
                title={opt.desc}
              >
                {opt.badge}
              </button>
            ))}
          </div>
        </div>

        {/* Player Bar & Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-amber-200/50">
          {/* Audio Waveform / Info state */}
          <div className="flex items-center gap-3">
            {isPlaying && !isPaused ? (
              <div className="flex items-end gap-0.5 h-5 px-1" title="Visualisasi Suara AI">
                <div className="w-1 bg-cherry-700 rounded-full animate-[bounce_0.6s_infinite_ease-in-out_0.1s] h-3" />
                <div className="w-1 bg-cherry-600 rounded-full animate-[bounce_0.7s_infinite_ease-in-out_0.3s] h-5" />
                <div className="w-1 bg-cherry-700 rounded-full animate-[bounce_0.5s_infinite_ease-in-out_0.2s] h-2" />
                <div className="w-1 bg-cherry-800 rounded-full animate-[bounce_0.8s_infinite_ease-in-out_0.4s] h-4" />
                <div className="w-1 bg-cherry-600 rounded-full animate-[bounce_0.6s_infinite_ease-in-out_0.15s] h-3" />
              </div>
            ) : (
              <Volume2 className="w-4 h-4 text-roast-500 ml-1" />
            )}
            <span className="font-mono text-xs font-semibold text-roast-800">
              {formatTime(currentTime)} <span className="text-roast-400 font-normal">/</span>{' '}
              {duration > 0 ? formatTime(duration) : '--:--'}
            </span>
            {isLoading && (
              <span className="text-[11px] font-sans text-cherry-800 animate-pulse flex items-center gap-1 font-medium">
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                Menyiapkan audio natural...
              </span>
            )}
          </div>

          {/* Right Controls: Speed, Reset, Play/Pause */}
          <div className="flex items-center gap-2 self-end sm:self-center">
            {/* Speed Selector */}
            <div className="flex items-center bg-white border border-paper-300 rounded-lg p-0.5 text-xs font-mono shadow-2xs">
              {[0.85, 1.0, 1.25, 1.5].map((rate) => (
                <button
                  key={rate}
                  onClick={() => handleSpeedChange(rate)}
                  className={`px-2 py-1 rounded transition-colors ${
                    playbackRate === rate
                      ? 'bg-roast-900 text-white font-bold'
                      : 'text-roast-600 hover:text-roast-950'
                  }`}
                  title={`Kecepatan putar ${rate}x`}
                >
                  {rate}x
                </button>
              ))}
            </div>

            {/* Reset / Replay Button */}
            {(isPlaying || currentTime > 0) && (
              <button
                onClick={handleStopReset}
                className="p-2 rounded-lg bg-white hover:bg-paper-200 text-roast-700 border border-paper-300 transition-all duration-160 ease-out active:scale-[0.97] shadow-2xs"
                title="Hentikan & Reset dari Awal"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}

            {/* Main Play / Pause Button */}
            <button
              onClick={handleTogglePlay}
              disabled={isLoading}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-white font-mono text-xs uppercase font-bold tracking-wider shadow-xs transition-all duration-160 ease-out active:scale-[0.97] ${
                isLoading
                  ? 'bg-cherry-800/80 cursor-not-allowed opacity-90'
                  : 'bg-cherry-700 hover:bg-cherry-800'
              }`}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Memuat...</span>
                </>
              ) : isPlaying && !isPaused ? (
                <>
                  <Pause className="w-4 h-4 fill-white" />
                  <span>Jeda</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-white" />
                  <span>{currentTime > 0 ? 'Lanjut' : 'Dengarkan'}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Interactive Scrub Bar (Click to seek) */}
        <div
          onClick={handleSeek}
          className="relative group w-full bg-paper-200/90 h-2.5 rounded-full overflow-hidden cursor-pointer select-none"
          title="Klik untuk melompati durasi audio"
        >
          <div
            className="bg-gradient-to-r from-cherry-700 to-cherry-600 h-full rounded-full transition-[width] duration-100 ease-linear group-hover:brightness-110"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    </div>
  );
};
