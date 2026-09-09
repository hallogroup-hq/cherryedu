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
  FileText,
  ChevronDown,
  ChevronUp,
  Mic,
  Cpu,
} from 'lucide-react';

interface AudioNarrationPlayerProps {
  title: string;
  rawMarkdown: string;
  audioSrc?: string;
}

function cleanMarkdownForSpeech(md: string): string {
  if (!md) return '';
  return md
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/#{1,6}\s+/g, '')
    .replace(/>\s+/g, '')
    .replace(/^[*\-+]\s+/gm, '')
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
  audioSrc = '/audio/sample_narration.mp3',
}) => {
  // Audio source mode: 'sample' (uploaded recorded human voice) or 'tts' (Web Speech API)
  const [audioMode, setAudioMode] = useState<'sample' | 'tts'>('sample');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [playbackRate, setPlaybackRate] = useState<number>(1.0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(31); // sample is ~31 seconds
  const [isMuted, setIsMuted] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [isTtsSupported, setIsTtsSupported] = useState(true);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const cleanedTextRef = useRef<string>('');

  // Sample voice transcript for user reference
  const sampleTranscript =
    'Hah? Enggak, aku enggak bilang gitu. Ya, maksud aku, mungkin, tapi beda. Eh, jangan lihatin aku kayak gitu. Aku cuma mau lihat-lihat tadi, terus yang ini lucu. Hmm, bentar. Oke, ini agak mahal sih, tapi kalau dipikir-pikir... enggak deh, jangan dipikir-pikir. Hahaha. Ya udah, aku ambil! Apa? I know, I know. Tadi aku bilang enggak mau beli. Orang boleh berubah pikiran kali. Ini namanya character development. Udah, jangan dibahas. Eh, habis ini ngopi yuk! Aku belum minum kopi dari tadi, pantes agak eror.';

  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setIsTtsSupported(false);
    }
    cleanedTextRef.current = `${title}. ${cleanMarkdownForSpeech(rawMarkdown)}`;

    return () => {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, [title, rawMarkdown]);

  // Handle Mode Change
  const handleModeChange = (mode: 'sample' | 'tts') => {
    // Stop any currently playing audio
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
    setAudioMode(mode);
  };

  // --- AUDIO SAMPLE LOGIC (HTML5 Audio) ---
  const togglePlaySample = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      setIsPaused(true);
    } else {
      audio.playbackRate = playbackRate;
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          setIsPaused(false);
        })
        .catch((err) => {
          console.error('Audio playback failed:', err);
        });
    }
  };

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
    if (audioMode === 'sample' && audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const handleSpeedChange = (rate: number) => {
    setPlaybackRate(rate);
    if (audioMode === 'sample' && audioRef.current) {
      audioRef.current.playbackRate = rate;
    } else if (audioMode === 'tts' && isPlaying && !isPaused) {
      startSpeakingTts(rate);
    }
  };

  const handleToggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleReset = () => {
    if (audioMode === 'sample' && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    } else if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
    setIsPaused(false);
    setCurrentTime(0);
  };

  // --- TTS SPEECH SYNTHESIS LOGIC ---
  const startSpeakingTts = (rate: number = playbackRate) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    window.speechSynthesis.cancel();
    const text = cleanedTextRef.current;
    if (!text) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'id-ID';
    utterance.rate = rate;
    utterance.pitch = 1.0;

    const voices = window.speechSynthesis.getVoices();
    const idVoice = voices.find((v) => v.lang.startsWith('id') || v.lang.includes('ID'));
    if (idVoice) {
      utterance.voice = idVoice;
    }

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
      setCurrentTime(duration);
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

  const togglePlayTts = () => {
    if (!isTtsSupported || typeof window === 'undefined') return;

    if (isPlaying) {
      if (isPaused) {
        window.speechSynthesis.resume();
        setIsPaused(false);
      } else {
        window.speechSynthesis.pause();
        setIsPaused(true);
      }
    } else {
      startSpeakingTts(playbackRate);
    }
  };

  const handleMainToggle = () => {
    if (audioMode === 'sample') {
      togglePlaySample();
    } else {
      togglePlayTts();
    }
  };

  const progressPercent = duration > 0 ? Math.min(100, (currentTime / duration) * 100) : 0;

  return (
    <div className="my-6 rounded-2xl border border-cherry-200/80 bg-gradient-to-br from-paper-50 via-amber-50/40 to-crema-100/30 p-4 sm:p-5 shadow-sm not-prose">
      {/* Hidden HTML5 Audio Element for Real Voice Sample */}
      <audio
        ref={audioRef}
        src={audioSrc}
        preload="metadata"
        onTimeUpdate={handleAudioTimeUpdate}
        onLoadedMetadata={handleAudioLoadedMetadata}
        onEnded={handleAudioEnded}
      />

      {/* 1. Header Bar: Branding, Mode Switcher & Status */}
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
              {isPlaying && !isPaused ? (
                <span className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-700 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  Memutar Narasi Audio
                </span>
              ) : isPaused ? (
                <span className="text-[11px] font-mono text-amber-700 font-semibold">(Dijeda)</span>
              ) : (
                <span className="text-[10px] font-mono text-roast-400">Siap Diputar</span>
              )}
            </div>
            <p className="text-xs text-roast-600 font-sans mt-0.5">
              Dengarkan materi sambil praktik seduh di bar kopi tanpa harus menatap layar.
            </p>
          </div>
        </div>

        {/* Audio Mode Switcher: Sample Suara Asli vs TTS AI */}
        <div className="flex items-center bg-white border border-paper-300 rounded-lg p-0.5 text-xs font-mono self-start sm:self-auto shadow-2xs">
          <button
            type="button"
            onClick={() => handleModeChange('sample')}
            className={`px-2.5 py-1.5 rounded flex items-center gap-1.5 transition-all ${
              audioMode === 'sample'
                ? 'bg-cherry-700 text-white font-bold shadow-xs'
                : 'text-roast-600 hover:text-roast-950 hover:bg-paper-100'
            }`}
            title="Gunakan sampel rekaman suara narator asli"
          >
            <Mic className="w-3.5 h-3.5" />
            <span>Sample Suara</span>
          </button>
          <button
            type="button"
            onClick={() => handleModeChange('tts')}
            className={`px-2.5 py-1.5 rounded flex items-center gap-1.5 transition-all ${
              audioMode === 'tts'
                ? 'bg-roast-950 text-white font-bold shadow-xs'
                : 'text-roast-600 hover:text-roast-950 hover:bg-paper-100'
            }`}
            title="Gunakan pembaca suara otomatis AI untuk seluruh teks materi"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>TTS Sintesis AI</span>
          </button>
        </div>
      </div>

      {/* 2. Waveform Visualizer & Scrub Bar */}
      <div className="py-3 space-y-2">
        <div className="flex items-center justify-between text-[11px] font-mono text-roast-600">
          <div className="flex items-center gap-2">
            <span className="font-bold text-roast-900">{formatTime(currentTime)}</span>
            <span>/</span>
            <span>{formatTime(duration)}</span>
          </div>

          {/* Animated Waveform Bars when playing */}
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

          <span className="text-[10px] text-roast-400 uppercase tracking-wider">
            {audioMode === 'sample' ? 'Sample Suara Narator' : 'Speech Synthesis AI'}
          </span>
        </div>

        {/* Interactive Scrub Slider */}
        <input
          type="range"
          min="0"
          max={duration || 100}
          step="0.1"
          value={currentTime}
          onChange={handleSeek}
          disabled={audioMode === 'tts'}
          className="w-full h-2 bg-paper-200 rounded-lg appearance-none cursor-pointer accent-cherry-700 disabled:opacity-50"
        />
      </div>

      {/* 3. Controls Bottom Bar: Play, Stop, Speed, Mute, Transcript Toggle */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        <div className="flex items-center gap-2">
          {/* Main Play / Pause Button */}
          <button
            type="button"
            onClick={handleMainToggle}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cherry-700 hover:bg-cherry-800 text-white font-mono text-xs uppercase font-bold tracking-wider shadow-sm transition-all active:scale-95"
          >
            {isPlaying && !isPaused ? (
              <>
                <Pause className="w-4 h-4 fill-white" />
                <span>Jeda</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-white" />
                <span>{currentTime > 0 ? 'Lanjutkan' : 'Dengarkan Audio'}</span>
              </>
            )}
          </button>

          {/* Reset / Stop Button */}
          {(isPlaying || currentTime > 0) && (
            <button
              type="button"
              onClick={handleReset}
              className="p-2.5 rounded-xl bg-white hover:bg-paper-200 text-roast-700 border border-paper-300 transition-colors shadow-2xs"
              title="Reset Audio dari Awal"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}

          {/* Mute Toggle (for sample audio) */}
          {audioMode === 'sample' && (
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
            <span>Naskah</span>
            {showTranscript ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>
        </div>
      </div>

      {/* 4. Collapsible Transcript Box */}
      {showTranscript && (
        <div className="mt-3 pt-3 border-t border-paper-200 text-xs font-sans animate-in fade-in duration-200">
          <div className="bg-white p-3.5 rounded-xl border border-paper-200 space-y-1.5 shadow-2xs">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase font-bold text-cherry-800">
                {audioMode === 'sample' ? 'Naskah Suara Sampel Asli:' : 'Ringkasan Narasi Materi:'}
              </span>
              <span className="font-mono text-[10px] text-roast-400">
                {audioMode === 'sample' ? 'Sample Audio Percakapan' : 'Text-to-Speech AI'}
              </span>
            </div>
            <p className="text-roast-800 italic leading-relaxed bg-paper-50 p-2.5 rounded-lg border border-paper-200">
              &ldquo;{audioMode === 'sample' ? sampleTranscript : `${title}. ${cleanMarkdownForSpeech(rawMarkdown).slice(0, 320)}...`}&rdquo;
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
