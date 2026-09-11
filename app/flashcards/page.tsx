'use client';

import { useState, useMemo, useEffect, useCallback } from "react";
import Link from 'next/link';
import { FLASHCARDS_DATA, Flashcard } from '@/lib/data/flashcardsData';
import { useCherryEdu } from '@/lib/store';
import {
  Sparkles,
  RotateCw,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Volume2,
  Award,
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  Lightbulb,
  Flame,
} from "lucide-react";

const CATEGORIES = [
  'Semua Dek',
  'Q-Grader & Sensory',
  'Barista & Espresso',
  'Roasting Science',
  'Agronomi & Pasca Panen',
  'Kimia Air & Seduh',
] as const;

export default function FlashcardsPage() {
  const { awardXP } = useCherryEdu();

  const [selectedCategory, setSelectedCategory] = useState<string>('Semua Dek');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  // Status arrays
  const [masteredIds, setMasteredIds] = useState<string[]>([]);
  const [reviewIds, setReviewIds] = useState<string[]>([]);
  const [deckCompleted, setDeckCompleted] = useState<boolean>(false);

  // Filter cards by category
  const deck = useMemo(() => {
    if (selectedCategory === 'Semua Dek') return FLASHCARDS_DATA;
    return FLASHCARDS_DATA.filter((c) => c.category === selectedCategory);
  }, [selectedCategory]);

  const currentCard: Flashcard | undefined = deck[currentIndex];

  // Reset state when category changes
  useEffect(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setShowHint(false);
    setDeckCompleted(false);
  }, [selectedCategory]);

  const handleNext = useCallback(() => {
    if (currentIndex < deck.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setIsFlipped(false);
      setShowHint(false);
    } else {
      setDeckCompleted(true);
      awardXP(50);
    }
  }, [currentIndex, deck.length, awardXP]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setIsFlipped(false);
      setShowHint(false);
    }
  }, [currentIndex]);

  const handleResponse = useCallback((level: 'hard' | 'medium' | 'easy') => {
    if (!currentCard) return;

    if (level === 'easy') {
      if (!masteredIds.includes(currentCard.id)) {
        setMasteredIds((prev) => [...prev, currentCard.id]);
      }
      setReviewIds((prev) => prev.filter((id) => id !== currentCard.id));
    } else {
      if (!reviewIds.includes(currentCard.id)) {
        setReviewIds((prev) => [...prev, currentCard.id]);
      }
      setMasteredIds((prev) => prev.filter((id) => id !== currentCard.id));
    }

    handleNext();
  }, [currentCard, masteredIds, reviewIds, handleNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (deckCompleted) return;
      if (e.code === 'Space') {
        e.preventDefault();
        setIsFlipped((prev) => !prev);
      } else if (e.code === 'Digit1' && isFlipped) {
        handleResponse('hard');
      } else if (e.code === 'Digit2' && isFlipped) {
        handleResponse('medium');
      } else if (e.code === 'Digit3' && isFlipped) {
        handleResponse('easy');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFlipped, currentIndex, deckCompleted, currentCard, handleResponse]);

  const handlePronounce = () => {
    if (!currentCard || typeof window === 'undefined' || !window.speechSynthesis) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    window.speechSynthesis.cancel();
    const textToSpeak = isFlipped
      ? `Jawaban: ${currentCard.answer}. ${currentCard.details}`
      : `Pertanyaan: ${currentCard.prompt}`;

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = 'id-ID';
    utterance.rate = 0.95;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const handleResetSession = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setShowHint(false);
    setMasteredIds([]);
    setReviewIds([]);
    setDeckCompleted(false);
  };

  const masteryPercent = deck.length > 0 ? Math.round((masteredIds.length / deck.length) * 100) : 0;

  return (
    <div className="min-h-screen bg-paper-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb & Navigation */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-roast-500 uppercase tracking-widest">
            <Link href="/" className="hover:text-cherry-700 transition-colors">Beranda</Link>
            <span>/</span>
            <Link href="/paths" className="hover:text-cherry-700 transition-colors">Kurikulum</Link>
            <span>/</span>
            <span className="text-cherry-700 font-bold">Interactive Flashcards</span>
          </div>

          <Link
            href="/lexicon"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-cherry-700 hover:text-cherry-900 font-bold uppercase transition-colors"
          >
            <span>Lihat Kamus Kopi</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Header Title */}
        <div className="mb-8 border-b border-paper-300 pb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cherry-50 border border-cherry-200 text-cherry-800 text-[11px] font-mono font-bold tracking-wider uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 text-cherry-600" />
            Spaced Repetition & Exam Prep
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-black text-roast-950 tracking-tight">
            Kartu Hafalan & Uji Cepat Kopi (Flashcards)
          </h1>
          <p className="mt-2 text-sm text-roast-700 leading-relaxed">
            Latih refleks ingatan untuk persiapan ujian sertifikasi SCA, CQI Q-Grader, dan keahlian barista melalui metode Spaced Repetition ilmiah.
          </p>
        </div>

        {/* Deck Category Selector Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-6 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all ${
                  active
                    ? 'bg-roast-950 text-crema-300 font-bold shadow-xs'
                    : 'bg-white hover:bg-paper-200 text-roast-700 border border-paper-300'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Progress & Stats Bar */}
        <div className="bg-white rounded-xl border border-paper-300 p-4 mb-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-xs font-mono">
            <div>
              <span className="text-roast-400 block text-[10px] uppercase font-bold">Kartu</span>
              <span className="text-roast-950 font-bold text-sm">
                {Math.min(currentIndex + 1, deck.length)} / {deck.length}
              </span>
            </div>
            <div>
              <span className="text-emerald-600 block text-[10px] uppercase font-bold">Dikuasai</span>
              <span className="text-emerald-800 font-bold text-sm">{masteredIds.length}</span>
            </div>
            <div>
              <span className="text-amber-600 block text-[10px] uppercase font-bold">Perlu Review</span>
              <span className="text-amber-800 font-bold text-sm">{reviewIds.length}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-32 sm:w-44 bg-paper-200 h-2 rounded-full overflow-hidden">
              <div
                className="bg-cherry-700 h-full rounded-full transition-all duration-300"
                style={{ width: `${masteryPercent}%` }}
              />
            </div>
            <span className="text-xs font-mono font-bold text-roast-900">{masteryPercent}% Kuasai</span>
          </div>
        </div>

        {/* Flashcard Area */}
        {deckCompleted ? (
          /* Completion State */
          <div className="bg-white rounded-2xl border border-paper-300 p-8 sm:p-12 text-center shadow-card animate-fadeIn">
            <div className="w-16 h-16 bg-crema-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-crema-300 shadow-xs">
              <Award className="w-8 h-8 text-crema-700" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-roast-950">
              Sesi Latihan Dek Selesai!
            </h2>
            <p className="mt-2 text-sm text-roast-700 max-w-md mx-auto leading-relaxed">
              Selamat! Anda telah menuntaskan seluruh kartu di dek ini. Sebanyak <strong className="text-emerald-700">{masteredIds.length} kartu</strong> berhasil dikuasai dengan baik.
            </p>

            <div className="inline-flex items-center gap-2 my-6 px-4 py-2 rounded-full bg-cherry-50 border border-cherry-200 text-cherry-800 font-mono text-xs font-bold">
              <Flame className="w-4 h-4 text-cherry-600 fill-cherry-500" />
              <span>+50 XP Bonus Berhasil Diklaim!</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={handleResetSession}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-roast-950 hover:bg-roast-900 text-paper-50 font-mono text-xs uppercase font-bold tracking-wider transition-all"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Ulangi Dek Ini</span>
              </button>
              <Link
                href="/lexicon"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-paper-100 hover:bg-paper-200 text-roast-800 border border-paper-300 font-mono text-xs uppercase font-bold tracking-wider transition-all"
              >
                <span>Pelajari Istilah di Kamus</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ) : currentCard ? (
          /* Card Flip Display with 3D Perspective Flip */
          <div className="space-y-6">
            <div className="relative w-full min-h-[340px] sm:min-h-[380px] perspective-1000">
              <div
                onClick={() => setIsFlipped((prev) => !prev)}
                className={`w-full min-h-[340px] sm:min-h-[380px] preserve-3d transition-transform duration-300 ease-out-strong cursor-pointer ${
                  isFlipped ? 'rotate-y-180' : ''
                }`}
              >
                {/* FRONT FACE: Question / Challenge */}
                <div className="w-full min-h-[340px] sm:min-h-[380px] bg-white rounded-2xl border-2 border-paper-300 hover:border-paper-400 p-6 sm:p-10 shadow-card flex flex-col justify-between backface-hidden group">
                  {/* Card Top: Badges & Audio */}
                  <div className="flex items-center justify-between gap-2 border-b border-paper-200 pb-4">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-paper-100 text-roast-700 border border-paper-300/70">
                        {currentCard.category}
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase ${
                          currentCard.difficulty === 'Dasar'
                            ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                            : currentCard.difficulty === 'Menengah'
                            ? 'bg-amber-50 text-amber-800 border border-amber-200'
                            : 'bg-rose-50 text-rose-800 border border-rose-200'
                        }`}
                      >
                        {currentCard.difficulty}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                      <button
                        onClick={handlePronounce}
                        className={`p-2 rounded-lg transition-colors ${
                          isSpeaking
                            ? 'bg-cherry-100 text-cherry-700 animate-pulse'
                            : 'text-roast-400 hover:text-roast-800 hover:bg-paper-100'
                        }`}
                        title="Dengarkan narasi suara"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>

                      <span className="text-[10px] font-mono text-roast-400 uppercase tracking-widest hidden sm:inline">
                        [ SOAL ]
                      </span>
                    </div>
                  </div>

                  {/* Card Body Front */}
                  <div className="py-6 my-auto text-center sm:text-left">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-cherry-700 font-bold block mb-2">
                      Pertanyaan Uji Pemahaman:
                    </span>
                    <h2 className="font-serif text-xl sm:text-2xl font-bold text-roast-950 leading-snug">
                      {currentCard.prompt}
                    </h2>

                    {/* Hint Section */}
                    {currentCard.hint && (
                      <div className="mt-6 text-left" onClick={(e) => e.stopPropagation()}>
                        {!showHint ? (
                          <button
                            onClick={() => setShowHint(true)}
                            className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-800 hover:text-amber-950 bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-lg border border-amber-200 transition-colors active:scale-[0.97]"
                          >
                            <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                            <span>Buka Petunjuk (Hint)</span>
                          </button>
                        ) : (
                          <div className="p-3 bg-amber-50/90 rounded-lg border border-amber-200 text-xs text-amber-950 flex items-start gap-2 animate-in fade-in duration-150">
                            <Lightbulb className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                            <span><strong>Petunjuk:</strong> {currentCard.hint}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Card Bottom Front */}
                  <div className="border-t border-paper-200 pt-3 flex items-center justify-between text-[11px] font-mono text-roast-400">
                    <span className="flex items-center gap-1.5 text-cherry-700 font-semibold group-hover:underline">
                      <RotateCw className="w-3.5 h-3.5" />
                      Klik kartu untuk melihat jawaban
                    </span>
                    <span className="hidden sm:inline">Tekan Spasi untuk membalik</span>
                  </div>
                </div>

                {/* BACK FACE: Answer & Scientific Details */}
                <div className="w-full min-h-[340px] sm:min-h-[380px] bg-white rounded-2xl border-2 border-paper-300 hover:border-paper-400 p-6 sm:p-10 shadow-card flex flex-col justify-between backface-hidden rotate-y-180 absolute inset-0 group">
                  {/* Card Top Back */}
                  <div className="flex items-center justify-between gap-2 border-b border-paper-200 pb-4">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200">
                        {currentCard.category}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-paper-100 text-roast-700 border border-paper-300">
                        {currentCard.difficulty}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                      <button
                        onClick={handlePronounce}
                        className={`p-2 rounded-lg transition-colors ${
                          isSpeaking
                            ? 'bg-cherry-100 text-cherry-700 animate-pulse'
                            : 'text-roast-400 hover:text-roast-800 hover:bg-paper-100'
                        }`}
                        title="Dengarkan narasi suara"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>

                      <span className="text-[10px] font-mono text-emerald-800 uppercase tracking-widest hidden sm:inline font-bold">
                        [ JAWABAN ]
                      </span>
                    </div>
                  </div>

                  {/* Card Body Back */}
                  <div className="py-6 my-auto text-center sm:text-left space-y-4">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-emerald-800 font-bold block">
                      Jawaban Resmi Standar SCA / CQI:
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-roast-950 leading-snug bg-emerald-50/60 p-3.5 rounded-lg border border-emerald-200/80">
                      {currentCard.answer}
                    </h3>
                    <div className="p-4 bg-paper-100 rounded-lg border border-paper-300 text-xs text-roast-800 leading-relaxed font-sans text-left">
                      <span className="font-mono text-[10px] uppercase font-bold text-roast-500 block mb-1">
                        Sains & Parameter Mendalam:
                      </span>
                      {currentCard.details}
                    </div>
                  </div>

                  {/* Card Bottom Back */}
                  <div className="border-t border-paper-200 pt-3 flex items-center justify-between text-[11px] font-mono text-roast-400">
                    <span className="flex items-center gap-1.5 text-cherry-700 font-semibold group-hover:underline">
                      <RotateCw className="w-3.5 h-3.5" />
                      Klik untuk kembali ke soal
                    </span>
                    <span className="hidden sm:inline">Pilih respon atau tekan 1, 2, 3</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Response Buttons (Spaced Repetition Rating) */}
            {isFlipped ? (
              <div className="grid grid-cols-3 gap-3 animate-in fade-in slide-in-from-bottom-2 duration-200">
                <button
                  onClick={() => handleResponse('hard')}
                  className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-900 transition-all duration-150 ease-out active:scale-[0.97] shadow-xs"
                >
                  <AlertCircle className="w-5 h-5 text-rose-600 mb-1" />
                  <span className="font-mono text-xs uppercase font-bold">1. Masih Sulit</span>
                  <span className="text-[10px] text-rose-700 hidden sm:inline">Ulangi lagi di antrean</span>
                </button>

                <button
                  onClick={() => handleResponse('medium')}
                  className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 transition-all duration-150 ease-out active:scale-[0.97] shadow-xs"
                >
                  <HelpCircle className="w-5 h-5 text-amber-600 mb-1" />
                  <span className="font-mono text-xs uppercase font-bold">2. Ragu-Ragu</span>
                  <span className="text-[10px] text-amber-700 hidden sm:inline">Review akhir sesi</span>
                </button>

                <button
                  onClick={() => handleResponse('easy')}
                  className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-900 transition-all duration-150 ease-out active:scale-[0.97] shadow-xs"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mb-1" />
                  <span className="font-mono text-xs uppercase font-bold">3. Sudah Paham</span>
                  <span className="text-[10px] text-emerald-700 hidden sm:inline">Kuasai materi (+XP)</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-between gap-4">
                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-paper-200 text-roast-700 border border-paper-300 font-mono text-xs uppercase font-bold tracking-wider disabled:opacity-40 disabled:pointer-events-none transition-all duration-150 ease-out active:scale-[0.97]"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Sebelumnya</span>
                </button>

                <button
                  onClick={() => setIsFlipped(true)}
                  className="flex-1 max-w-xs mx-auto py-2.5 rounded-lg bg-roast-950 hover:bg-cherry-900 text-paper-50 font-mono text-xs uppercase font-bold tracking-wider transition-all duration-150 ease-out active:scale-[0.97] shadow-xs text-center"
                >
                  Buka Jawaban (Spasi)
                </button>

                <button
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-paper-200 text-roast-700 border border-paper-300 font-mono text-xs uppercase font-bold tracking-wider transition-all duration-150 ease-out active:scale-[0.97]"
                >
                  <span>Lewati</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}
