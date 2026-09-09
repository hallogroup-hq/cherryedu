'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Headphones,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Sparkles,
  FileText,
  ChevronDown,
  ChevronUp,
  Mic,
  Cpu,
  Loader2,
  AlertCircle,
  KeyRound,
  Check,
} from 'lucide-react';

interface AudioNarrationPlayerProps {
  title: string;
  rawMarkdown: string;
  voiceId?: string;
}

const DEFAULT_ELEVENLABS_VOICE_ID = 'g5qo9W2NML9NbxhWCq3R';

function cleanMarkdownForSpeech(md: string): string {
  if (!md) return '';
  return md
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/#{1,6}\s+/g, '')
    .replace(/>\s+/g, '')
    .replace(/^[*-+]\s+/gm, '')
    .replace(/^\d+\.\s+/gm, '')
    .replace(/[*_]{1,3}([^*_]+)[*_]{1,3}/g, '$1')
    .replace(/\[DIAGRAM:[^\]]+\]/g, '')
    .replace(/\|[^\r\n]+\|/g, '')
    .replace(/\n{2,}/g, '\n')
    .trim();
}

function formatTime(seconds: number): string {
  if (isNaN(seconds) || seconds < 0) return '00:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

export const AudioNarrationPlayer: React.FC<AudioNarrationPlayerProps> = ({
  title,
  rawMarkdown,
  voiceId = DEFAULT_ELEVENLABS_VOICE_ID,
}) => {
  const [engine, setEngine] = useState<'elevenlabs' | 'browser'>('elevenlabs');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoadingAudio, setIsLoadingAudio] = useState(false);
  const [playbackRate, setPlaybackRate] = useState<number>(1.0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [isMuted, setIsMuted] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [audioBlobUrl, setAudioBlobUrl] = useState<string | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const cleanedTextRef = useRef<string>('');

  useEffect(() => {
    // Generate a concise, natural narration script from the lesson title & intro
    const cleaned = cleanMarkdownForSpeech(rawMarkdown);
    // Take first ~600-800 characters for an optimal audio lesson snippet
    const snippet = cleaned.length > 750 ? cleaned.slice(0, 750) + '...' : cleaned;
    cleanedTextRef.current = `Selamat datang di mode Listen and Brew CherryEdu. Kita akan mempelajari materi: ${title}. ${snippet}`;

    // Clean up created object URL on unmount
    return () => {
      if (audioBlobUrl) {
        URL.revokeObjectURL(audioBlobUrl);
      }
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, [title, rawMarkdown, audioBlobUrl]);

  // --- ELEVENLABS VOICE CLONE TTS FETCH ---
  const fetchAndPlayElevenLabs = async () => {
    if (audioBlobUrl && audioRef.current) {
      // Audio already fetched, just play
      audioRef.current.playbackRate = playbackRate;
      audioRef.current.play();
      setIsPlaying(true);
      setIsPaused(false);
      return;
    }

    setIsLoadingAudio(true);
    setApiError(null);

    try {
      const response = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: cleanedTextRef.current,
          voiceId: voiceId,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        if (errorData.error === 'MISSING_API_KEY') {
          setApiError('MISSING_API_KEY');
        } else {
          setApiError(errorData.message || 'Gagal menghasilkan audio dari ElevenLabs');
        }
        setIsLoadingAudio(false);
        return;
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setAudioBlobUrl(url);

      if (audioRef.current) {
        audioRef.current.src = url;
        audioRef.current.playbackRate = playbackRate;
        audioRef.current.play();
        setIsPlaying(true);
        setIsPaused(false);
      }
    } catch (err: any) {
      console.error('TTS fetch error:', err);
      setApiError(err.message || 'Terjadi kesalahan saat memanggil server');
    } finally {
      setIsLoadingAudio(false);
    }
  };

  // --- HTML5 AUDIO EVENT HANDLERS ---
  const handleAudioTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleAudioLoadedMetadata = () => {
    if (audioRef.current && !isNaN(audioRef.current.duration)) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
    setIsPaused(false);
    setCurrentTime(0);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const handleSpeedChange = (rate: number) => {
    setPlaybackRate(rate);
    if (engine === 'elevenlabs' && audioRef.current) {
      audioRef.current.playbackRate = rate;
    } else if (engine === 'browser' && isPlaying && !isPaused) {
      startBrowserTts(rate);
    }
  };

  const handleToggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleReset = () => {
    if (engine === 'elevenlabs' && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    } else if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
    setIsPaused(false);
    setCurrentTime(0);
  };

  // --- BROWSER WEB SPEECH FALLBACK ---
  const startBrowserTts = (rate: number = playbackRate) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    window.speechSynthesis.cancel();
    const text = cleanedTextRef.current;
    if (!text) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'id-ID';
    utterance.rate = rate;

    const voices = window.speechSynthesis.getVoices();
    const idVoice = voices.find((v) => v.lang.startsWith('id') || v.lang.includes('ID'));
    if (idVoice) utterance.voice = idVoice;

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };

    utterance.onerror = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setIsPlaying(true);
    setIsPaused(false);
  };

  const toggleBrowserTts = () => {
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
      startBrowserTts(playbackRate);
    }
  };

  // --- MAIN TOGGLE PLAY/PAUSE ---
  const handleTogglePlay = () => {
    if (engine === 'elevenlabs') {
      if (isPlaying) {
        if (audioRef.current) {
          audioRef.current.pause();
        }
        setIsPlaying(false);
        setIsPaused(true);
      } else {
        fetchAndPlayElevenLabs();
      }
    } else {
      toggleBrowserTts();
    }
  };

  return (
    <div className="my-6 rounded-2xl border border-cherry-200/80 bg-gradient-to-br from-paper-50 via-amber-50/40 to-crema-100/30 p-4 sm:p-5 shadow-sm not-prose">
      {/* Hidden HTML5 Audio Element for ElevenLabs stream */}
      <audio
        ref={audioRef}
        preload="metadata"
        onTimeUpdate={handleAudioTimeUpdate}
        onLoadedMetadata={handleAudioLoadedMetadata}
        onEnded={handleAudioEnded}
      />

      {/* 1. Header Bar: Branding, Engine Selector & Status */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-paper-200/80">
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all ${
              isPlaying && !isPaused
                ? 'bg-cherry-700 text-white shadow-md animate-pulse ring-4 ring-cherry-100'
                : 'bg-paper-200 text-roast-800'
            }`}
          >
            <Headphones className="w-5 h-5" />
          </div>

          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-cherry-800 bg-cherry-100/80 px-2 py-0.5 rounded border border-cherry-200">
                MODE LISTEN & BREW
              </span>
              <span className="font-mono text-[10px] text-roast-500 font-bold bg-white px-2 py-0.5 rounded border border-paper-300">
                VOICE CLONE: {voiceId.slice(0, 8)}…
              </span>
              {isPlaying && !isPaused ? (
                <span className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-700 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  Memutar Narasi
                </span>
              ) : isPaused ? (
                <span className="text-[11px] font-mono text-amber-700 font-semibold">(Dijeda)</span>
              ) : null}
            </div>
            <p className="text-xs text-roast-600 font-sans mt-0.5">
              Dengarkan materi ini dengan suara narator kloning Anda saat menyeduh kopi.
            </p>
          </div>
        </div>

        {/* Engine Switcher */}
        <div className="flex items-center bg-white border border-paper-300 rounded-lg p-0.5 text-xs font-mono self-start sm:self-auto shadow-2xs">
          <button
            type="button"
            onClick={() => {
              handleReset();
              setEngine('elevenlabs');
            }}
            className={`px-2.5 py-1.5 rounded flex items-center gap-1.5 transition-all ${
              engine === 'elevenlabs'
                ? 'bg-cherry-700 text-white font-bold shadow-xs'
                : 'text-roast-600 hover:text-roast-950 hover:bg-paper-100'
            }`}
            title="Kloning suara narator kustom via ElevenLabs"
          >
            <Mic className="w-3.5 h-3.5" />
            <span>ElevenLabs Voice</span>
          </button>
          <button
            type="button"
            onClick={() => {
              handleReset();
              setEngine('browser');
            }}
            className={`px-2.5 py-1.5 rounded flex items-center gap-1.5 transition-all ${
              engine === 'browser'
                ? 'bg-roast-950 text-white font-bold shadow-xs'
                : 'text-roast-600 hover:text-roast-950 hover:bg-paper-100'
            }`}
            title="Gunakan TTS bawaan peramban (Web Speech)"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Web Speech</span>
          </button>
        </div>
      </div>

      {/* 2. API Key Warning Notice if not yet provided in server environment */}
      {apiError === 'MISSING_API_KEY' && (
        <div className="mt-3 p-3.5 rounded-xl bg-amber-50 border border-amber-300 text-xs text-amber-900 space-y-2">
          <div className="flex items-start gap-2 font-semibold">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <span>ELEVENLABS_API_KEY Belum Dikonfigurasi di Server</span>
              <p className="text-[11px] font-normal text-amber-800 mt-0.5 leading-relaxed">
                Voice ID kloning suara Anda (<code>{voiceId}</code>) sudah siap dihubungkan. Tambahkan kunci API ke file <code>.env.local</code> agar server dapat memanggil model suara klon Anda.
              </p>
            </div>
          </div>
          <div className="bg-amber-100/70 p-2.5 rounded-lg border border-amber-200 font-mono text-[11px] text-amber-950 select-all">
            ELEVENLABS_API_KEY=sk_your_api_key_here
          </div>
          <div className="flex items-center justify-between pt-1 text-[11px]">
            <span className="text-amber-700 italic">Sementara ini Anda bisa mendengarkan lewat engine <strong>Web Speech</strong>.</span>
            <button
              type="button"
              onClick={() => {
                setEngine('browser');
                setApiError(null);
                toggleBrowserTts();
              }}
              className="px-3 py-1 bg-amber-900 text-white rounded font-mono font-bold hover:bg-amber-800 transition-colors"
            >
              Putar via Web Speech
            </button>
          </div>
        </div>
      )}

      {/* 3. Waveform Visualizer & Scrub Bar */}
      <div className="py-3 space-y-2">
        <div className="flex items-center justify-between text-[11px] font-mono text-roast-600">
          <div className="flex items-center gap-2">
            <span className="font-bold text-roast-900">{formatTime(currentTime)}</span>
            {duration > 0 && (
              <>
                <span>/</span>
                <span>{formatTime(duration)}</span>
              </>
            )}
          </div>

          {/* Animated Waveform Bars */}
          <div className="flex items-end gap-0.5 h-4 px-2">
            {[40, 75, 55, 90, 65, 100, 50, 80, 45, 95, 60, 85].map((height, idx) => (
              <span
                key={idx}
                className={`w-1 rounded-full transition-all duration-200 ${
                  isPlaying && !isPaused ? 'bg-cherry-600' : 'bg-paper-300'
                }`}
                style={{
                  height: isPlaying && !isPaused ? `${(height * (idx % 2 === 0 ? 0.9 : 1.1)) % 100}%` : '20%',
                  animationDelay: `${idx * 0.08}s`,
                }}
              />
            ))}
          </div>

          <span className="text-[10px] text-roast-500 uppercase tracking-wider font-semibold">
            {engine === 'elevenlabs' ? 'Voice Clone Narator AI' : 'Speech Synthesis Browser'}
          </span>
        </div>

        {/* Interactive Scrub Slider (Active for ElevenLabs audio) */}
        {engine === 'elevenlabs' && duration > 0 && (
          <input
            type="range"
            min="0"
            max={duration || 100}
            step="0.1"
            value={currentTime}
            onChange={handleSeek}
            className="w-full h-2 bg-paper-200 rounded-lg appearance-none cursor-pointer accent-cherry-700"
          />
        )}
      </div>

      {/* 4. Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
        <div className="flex items-center gap-2">
          {/* Main Play / Pause Button */}
          <button
            type="button"
            disabled={isLoadingAudio}
            onClick={handleTogglePlay}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cherry-700 hover:bg-cherry-800 disabled:opacity-60 text-white font-mono text-xs uppercase font-bold tracking-wider shadow-sm transition-all active:scale-95"
          >
            {isLoadingAudio ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-white" />
                <span>Menyiapkan Audio…</span>
              </>
            ) : isPlaying && !isPaused ? (
              <>
                <Pause className="w-4 h-4 fill-white" />
                <span>Jeda</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-white" />
                <span>{currentTime > 0 ? 'Lanjutkan' : 'Dengarkan Narasi'}</span>
              </>
            )}
          </button>

          {/* Reset / Stop Button */}
          {(isPlaying || currentTime > 0) && (
            <button
              type="button"
              onClick={handleReset}
              className="p-2.5 rounded-xl bg-white hover:bg-paper-200 text-roast-700 border border-paper-300 transition-colors shadow-2xs"
              title="Reset dari Awal"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}

          {/* Mute Toggle */}
          {engine === 'elevenlabs' && (
            <button
              type="button"
              onClick={handleToggleMute}
              className="p-2.5 rounded-xl bg-white hover:bg-paper-200 text-roast-700 border border-paper-300 transition-colors shadow-2xs"
              title={isMuted ? 'Nyalakan Suara' : 'Bisukan Suara'}
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-rose-600" /> : <Volume2 className="w-4 h-4" />}
            </button>
          )}
        </div>

        {/* Speed Controls & Transcript Toggle */}
        <div className="flex items-center gap-2">
          {/* Speed Selector */}
          <div className="flex items-center bg-white border border-paper-300 rounded-lg p-0.5 text-xs font-mono shadow-2xs">
            {[0.85, 1.0, 1.25, 1.5].map((rate) => (
              <button
                key={rate}
                type="button"
                onClick={() => handleSpeedChange(rate)}
                className={`px-2 py-1 rounded transition-colors ${
                  playbackRate === rate ? 'bg-roast-950 text-white font-bold' : 'text-roast-600 hover:text-roast-950'
                }`}
                title={`Kecepatan ${rate}x`}
              >
                {rate}x
              </button>
            ))}
          </div>

          {/* Transcript Button */}
          <button
            type="button"
            onClick={() => setShowTranscript(!showTranscript)}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-mono border border-paper-300 rounded-lg bg-white text-roast-700 hover:border-roast-400 transition-colors shadow-2xs"
          >
            <FileText className="w-3.5 h-3.5 text-cherry-700" />
            <span>Naskah Narasi</span>
            {showTranscript ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>
        </div>
      </div>

      {/* 5. Collapsible Transcript Box */}
      {showTranscript && (
        <div className="mt-3 pt-3 border-t border-paper-200 text-xs font-sans animate-in fade-in duration-200">
          <div className="bg-white p-3.5 rounded-xl border border-paper-200 space-y-1.5 shadow-2xs">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase font-bold text-cherry-800">
                Naskah Audio yang Dibacakan:
              </span>
              <span className="font-mono text-[10px] text-roast-400">
                Voice ID: {voiceId}
              </span>
            </div>
            <p className="text-roast-800 leading-relaxed bg-paper-50 p-3 rounded-lg border border-paper-200 font-sans">
              {cleanedTextRef.current}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
