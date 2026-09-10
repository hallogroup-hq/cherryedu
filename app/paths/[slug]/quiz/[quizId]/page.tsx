'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useCherryEdu } from '@/lib/store';
import confetti from 'canvas-confetti';
import {
  Clock,
  Check,
  X,
  Award,
  ArrowRight,
  RotateCcw,
  ArrowLeft,
} from 'lucide-react';

export default function QuizPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const quizId = params.quizId as string;

  const { learningPaths, quizzes, questions, submitQuiz } = useCherryEdu();

  const path = learningPaths.find((p) => p.slug === slug);
  const quiz = quizzes.find((q) => q.id === quizId);
  const quizQuestions = questions.filter((q) => q.quiz_id === quizId);

  const [currentQIndex, setCurrentQIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [result, setResult] = useState<{
    score: number;
    passed: boolean;
    certificateEarned?: any;
    xpEarned: number;
  } | null>(null);

  const [timeLeft, setTimeLeft] = useState<number>(quiz ? quiz.time_limit_minutes * 60 : 600);

  useEffect(() => {
    if (submitted) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [submitted]);

  if (!quiz || !path) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-xl font-serif font-bold text-roast-950">Kuis Tidak Ditemukan</h2>
        <Link href="/paths" className="mt-3 inline-block font-mono text-xs uppercase text-cherry-700 underline">
          &larr; Kembali ke Silabus
        </Link>
      </div>
    );
  }

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSelectAnswer = (questionId: string, answerId: string) => {
    if (submitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: answerId }));
  };

  const handleSubmit = () => {
    const res = submitQuiz(quiz.id, selectedAnswers);
    setResult(res);
    setSubmitted(true);

    if (res.passed) {
      try {
        confetti({
          particleCount: 100,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#7E1D2A', '#CFA946', '#211814'],
        });
      } catch (e) {}
    }
  };

  const currentQ = quizQuestions[currentQIndex];
  const allAnswered = quizQuestions.every((q) => selectedAnswers[q.id]);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Top Header */}
      <div className="bg-paper-50 border border-paper-300 p-6 shadow-xs mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-paper-200">
          <div>
            <Link
              href={`/paths/${path.slug}`}
              className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-roast-500 hover:text-roast-950 mb-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Kembali ke Silabus: {path.title}</span>
            </Link>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-[9px] uppercase tracking-widest text-cherry-700 font-bold bg-cherry-50 px-1.5 py-0.5 border border-cherry-200">
                [ RUANG UJI KOMPETENSI RESMI ]
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-serif font-black text-roast-950">
              {quiz.title}
            </h1>
          </div>

          {!submitted && (
            <div className="flex items-center gap-2 bg-roast-950 text-paper-50 px-3.5 py-1.5 border border-roast-900 font-mono text-sm font-bold shadow-xs self-start sm:self-auto">
              <Clock className="w-4 h-4 text-crema-300" />
              <span>{formatTimer(timeLeft)}</span>
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-6 pt-3 font-mono text-xs text-roast-600">
          <span>Standar Kelulusan: <strong className="text-roast-900">{quiz.passing_score}%</strong></span>
          <span>Jumlah Soal: <strong className="text-roast-900">{quizQuestions.length} Butir Soal</strong></span>
          <span>Batas Waktu: <strong className="text-roast-900">{quiz.time_limit_minutes} Menit</strong></span>
        </div>
      </div>

      {!submitted ? (
        /* Active Question Room */
        <div className="bg-paper-50 border border-paper-300 p-6 sm:p-10 shadow-xs relative">
          {/* Question Index Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-5 mb-6 border-b border-paper-200">
            <span className="font-mono text-xs font-bold text-cherry-800 uppercase tracking-wider">
              [ BUTIR SOAL {currentQIndex + 1} DARI {quizQuestions.length} ]
            </span>
            <div className="flex flex-wrap gap-1.5">
              {quizQuestions.map((q, idx) => {
                const isAnswered = Boolean(selectedAnswers[q.id]);
                const isCurrent = idx === currentQIndex;
                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentQIndex(idx)}
                    className={`w-8 h-8 font-mono text-xs font-bold transition-all border ${
                      isCurrent
                        ? 'bg-roast-950 text-paper-50 border-roast-950 shadow-xs'
                        : isAnswered
                        ? 'bg-paper-200 text-roast-950 border-paper-400 font-bold'
                        : 'bg-paper-100 text-roast-400 border-paper-300 hover:bg-paper-200'
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Current Question */}
          {currentQ && (
            <div className="space-y-6">
              <h2 className="text-base sm:text-lg font-serif font-bold text-roast-950 leading-relaxed">
                {currentQ.question_text}
              </h2>

              <div className="space-y-3">
                {currentQ.answers.map((ans) => {
                  const isSelected = selectedAnswers[currentQ.id] === ans.id;
                  return (
                    <button
                      key={ans.id}
                      onClick={() => handleSelectAnswer(currentQ.id, ans.id)}
                      className={`w-full text-left p-4 border transition-colors duration-150 ease-out active:scale-[0.98] flex items-start gap-3.5 ${
                        isSelected
                          ? 'bg-paper-200/80 border-roast-950 shadow-xs ring-1 ring-roast-950 font-medium'
                          : 'bg-paper-100/50 border-paper-300 hover:border-roast-700 hover:bg-paper-100'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 border mt-0.5 shrink-0 flex items-center justify-center transition-colors ${
                          isSelected ? 'border-roast-950 bg-roast-950' : 'border-paper-400 bg-paper-50'
                        }`}
                      >
                        {isSelected && <div className="w-1.5 h-1.5 bg-paper-50" />}
                      </div>
                      <span className="text-xs sm:text-sm text-roast-900 font-sans leading-relaxed">
                        {ans.answer_text}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-8 mt-8 border-t border-paper-200">
            <button
              onClick={() => setCurrentQIndex(Math.max(0, currentQIndex - 1))}
              disabled={currentQIndex === 0}
              className="font-mono text-xs font-bold text-roast-500 hover:text-roast-950 disabled:opacity-30 uppercase tracking-wider"
            >
              ← Butir Sebelumnya
            </button>

            {currentQIndex < quizQuestions.length - 1 ? (
              <button
                onClick={() => setCurrentQIndex(currentQIndex + 1)}
                className="px-5 py-2 bg-roast-950 hover:bg-roast-850 text-paper-50 font-mono text-xs uppercase tracking-wider font-bold transition-all duration-150 ease-out active:scale-[0.97] shadow-xs"
              >
                Selanjutnya →
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!allAnswered}
                className="px-6 py-2.5 bg-cherry-700 hover:bg-cherry-800 disabled:bg-paper-300 disabled:text-roast-400 text-white font-mono text-xs uppercase tracking-wider font-bold transition-all duration-150 ease-out active:scale-[0.97] shadow-xs border border-cherry-800"
              >
                Selesaikan Ujian →
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Examination Results & Evaluation */
        <div className="space-y-8">
          <div className="bg-paper-50 border-2 border-roast-950 p-8 sm:p-10 shadow-warm text-center relative animate-in fade-in zoom-in-95 duration-300 ease-out-strong">
            <span
              className={`font-mono text-[10px] uppercase tracking-widest px-3 py-1 border font-bold ${
                result?.passed
                  ? 'bg-emerald-950 text-emerald-100 border-emerald-800'
                  : 'bg-rose-950 text-rose-100 border-rose-800'
              }`}
            >
              {result?.passed ? '[ STATUS: LULUS KOMPETENSI RESMI ]' : '[ STATUS: BELUM MEMENUHI STANDAR ]'}
            </span>

            <h2 className="text-4xl sm:text-5xl font-serif font-black text-roast-950 mt-4 mb-2">
              Skor Perolehan: {result?.score}%
            </h2>

            <p className="text-xs sm:text-sm text-roast-700 max-w-md mx-auto mb-6 font-sans leading-relaxed">
              {result?.passed
                ? `Selamat! Anda berhasil melampaui passing score (${quiz.passing_score}%) dan berhak mendapatkan +${result.xpEarned} XP kompetensi.`
                : `Standar kelulusan adalah ${quiz.passing_score}%. Silakan pelajari kembali modul materi dan lakukan pengulangan ujian kalibrasi.`}
            </p>

            {/* Certificate Unlock Card */}
            {result?.certificateEarned && (
              <div className="my-8 p-6 bg-roast-950 text-paper-50 text-left border-2 border-crema-500/60 shadow-warm animate-in fade-in slide-in-from-bottom-3 duration-500 delay-150 fill-mode-both ease-out-strong">
                <span className="font-mono text-[10px] uppercase tracking-widest text-crema-300 font-bold block mb-1">
                  [ DIPLOMA KELULUSAN RESMI DITERBITKAN ]
                </span>
                <h3 className="font-serif font-bold text-xl text-white">
                  {result.certificateEarned.path_title}
                </h3>
                <div className="font-mono text-xs text-crema-400 mt-1 mb-4">
                  Registri Kredensial: {result.certificateEarned.certificate_number}
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={`/verify/${result.certificateEarned.share_token}`}
                    className="px-4 py-2 bg-crema-500 hover:bg-crema-400 text-roast-950 font-mono text-xs uppercase tracking-wider font-bold transition-all border border-crema-400 shadow-xs"
                  >
                    Buka Verifikasi Publik →
                  </Link>
                  <Link
                    href="/certificates"
                    className="px-4 py-2 bg-roast-900 hover:bg-roast-800 text-paper-100 border border-roast-700 font-mono text-xs uppercase tracking-wider transition-all"
                  >
                    Lihat di Koleksi Sertifikat
                  </Link>
                </div>
              </div>
            )}

            <div className="flex items-center justify-center gap-3 pt-2 font-mono text-xs">
              <Link
                href={`/paths/${path.slug}`}
                className="px-5 py-2.5 bg-paper-100 hover:bg-paper-200 text-roast-900 border border-paper-300 font-bold uppercase tracking-wider transition-colors"
              >
                &larr; Kembali ke Silabus
              </Link>
              {!result?.passed && (
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setSelectedAnswers({});
                    setTimeLeft(quiz.time_limit_minutes * 60);
                    setCurrentQIndex(0);
                  }}
                  className="px-5 py-2.5 bg-roast-950 hover:bg-cherry-800 text-paper-50 font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors border border-roast-900 shadow-xs"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Ulangi Ujian Kuis</span>
                </button>
              )}
            </div>
          </div>

          {/* Detailed Question Review & Educational Analysis */}
          <div className="bg-paper-50 border border-paper-300 p-6 sm:p-8 shadow-xs space-y-6">
            <h3 className="font-serif font-bold text-lg text-roast-950 pb-3 border-b border-paper-200">
              Evaluasi Lembar Jawaban & Analisis Sains
            </h3>

            {quizQuestions.map((q, qIdx) => {
              const selectedAnsId = selectedAnswers[q.id];
              const correctAns = q.answers.find((a) => a.is_correct);
              const isCorrect = selectedAnsId === correctAns?.id;

              return (
                <div
                  key={q.id}
                  className={`p-4 border ${
                    isCorrect ? 'bg-paper-100/60 border-paper-300' : 'bg-rose-50/50 border-rose-300'
                  }`}
                >
                  <div className="flex items-start gap-2.5 mb-2">
                    <span className="font-mono text-xs font-bold shrink-0 mt-0.5">
                      {isCorrect ? <Check className="w-4 h-4 text-emerald-700" /> : <X className="w-4 h-4 text-rose-700" />}
                    </span>
                    <span className="font-serif font-bold text-sm text-roast-950">
                      {qIdx + 1}. {q.question_text}
                    </span>
                  </div>

                  <div className="text-xs font-sans space-y-1 pl-6 mb-2">
                    <div className="text-roast-700">
                      Jawaban Anda:{' '}
                      <strong className={isCorrect ? 'text-emerald-800' : 'text-rose-800'}>
                        {q.answers.find((a) => a.id === selectedAnsId)?.answer_text || 'Tidak dijawab'}
                      </strong>
                    </div>
                    {!isCorrect && (
                      <div className="text-emerald-800 font-semibold">
                        Kunci Jawaban Resmi: {correctAns?.answer_text}
                      </div>
                    )}
                  </div>

                  {q.explanation && (
                    <div className="ml-6 p-3 bg-paper-50 border border-paper-300 text-xs text-roast-700 leading-relaxed font-sans">
                      <strong className="text-roast-900 block font-mono text-[10px] uppercase tracking-wider mb-0.5">PENJELASAN ILMIAH:</strong>
                      {q.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
