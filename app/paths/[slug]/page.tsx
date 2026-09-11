'use client';

import { useState } from "react";
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useCherryEdu } from '@/lib/store';
import {
  Clock,
  Layers,
  Unlock,
  Check,
  PlayCircle,
  HelpCircle,
  Award,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function PathDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const {
    learningPaths,
    modules,
    lessons,
    quizzes,
    currentUser,
    isAuthenticated,
    enrollments,
    enrollInPath,
    canEnrollInPath,
    isLessonCompleted,
    getPathProgress,
  } = useCherryEdu();

  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({
    'mod-f1': true,
    'mod-b1': true,
    'mod-h1': true,
  });

  const path = learningPaths.find((p) => p.slug === slug);

  if (!path) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-xl font-serif font-bold text-roast-950">Learning Path Tidak Ditemukan</h2>
        <Link href="/paths" className="mt-4 inline-block text-cherry-700 font-mono text-xs uppercase underline">
          &larr; Kembali ke Katalog
        </Link>
      </div>
    );
  }

  const pathModules = modules.filter((m) => m.learning_path_id === path.id);
  const enrollment = enrollments.find(
    (e) => e.user_id === currentUser.id && e.learning_path_id === path.id
  );
  const isEnrolled = Boolean(enrollment);
  const progress = getPathProgress(path.id);
  const prereqCheck = canEnrollInPath(path.id);
  const finalExam = quizzes.find(
    (q) => q.learning_path_id === path.id && q.quiz_scope === 'final_exam'
  );

  const toggleModule = (modId: string) => {
    setExpandedModules((prev) => ({ ...prev, [modId]: !prev[modId] }));
  };

  const handleEnroll = (bypass: boolean = false) => {
    if (!isAuthenticated) {
      router.push(`/login?redirect=/paths/${path.slug}`);
      return;
    }
    const res = enrollInPath(path.id, bypass);
    if (!res.success && !bypass) {
      alert(res.message);
    }
  };

  return (
    <div className="pb-24">
      {/* Path Header Hero */}
      <div className="border-b border-paper-300 bg-paper-100/60 py-10 sm:py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/paths"
            className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-roast-500 hover:text-roast-950 mb-6 transition-colors"
          >
            &larr; Kembali ke Katalog Kurikulum
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-cherry-700 font-semibold bg-cherry-50 px-2 py-0.5 border border-cherry-200">
                  {path.layer_type === 'foundation' ? '[ FOUNDATION LAYER • WAJIB ]' : '[ SPECIALIZATION TRACK ]'}
                </span>
                <span className="font-mono text-xs text-roast-500 uppercase">
                  Tingkat: <strong className="text-roast-900 font-bold">{path.level}</strong>
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-serif font-black text-roast-950 tracking-tight leading-tight">
                {path.title}
              </h1>

              <p className="text-xs sm:text-sm text-roast-700 leading-relaxed font-sans max-w-2xl">
                {path.description}
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-2 font-mono text-xs text-roast-600">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-cherry-700" />
                  {path.estimated_hours} Jam Belajar
                </span>
                <span className="flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-cherry-700" />
                  {pathModules.length} Modul Silabus
                </span>
                <span className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-cherry-700" />
                  Diploma Digital Resmi
                </span>
              </div>
            </div>

            {/* Path Action Card */}
            <div className="md:col-span-4 bg-paper-50 border border-paper-300 p-6 shadow-xs space-y-4">
              <div className="relative h-36 overflow-hidden border border-paper-300">
                <img
                  src={path.thumbnail_url}
                  alt={path.title}
                  className="w-full h-full object-cover filter grayscale-20 contrast-110"
                />
              </div>

              {isEnrolled ? (
                <div className="space-y-3">
                  <div className="flex justify-between font-mono text-xs">
                    <span className="text-roast-500 uppercase text-[10px]">PROGRESS BELAJAR</span>
                    <span className="text-roast-950 font-bold">{progress}% SELESAI</span>
                  </div>
                  <div className="w-full h-2 bg-paper-200 border border-paper-300 overflow-hidden">
                    <div
                      className="h-full bg-roast-950 transition-all"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  {(() => {
                    const firstModule = pathModules[0];
                    const firstLesson = firstModule
                      ? lessons.find((l) => l.module_id === firstModule.id)
                      : null;
                    return firstLesson ? (
                      <Link
                        href={`/paths/${path.slug}/lessons/${firstLesson.id}`}
                        className="w-full py-2.5 bg-roast-950 hover:bg-cherry-800 text-paper-50 font-mono text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 border border-roast-900 shadow-xs transition-colors mt-2"
                      >
                        <PlayCircle className="w-4 h-4 text-crema-300" />
                        <span>Lanjutkan Materi →</span>
                      </Link>
                    ) : null;
                  })()}
                </div>
              ) : (
                <div className="space-y-3">
                  {!prereqCheck.allowed ? (
                    <div className="space-y-2.5">
                      <div className="p-3.5 bg-paper-100 border border-paper-300 font-mono text-[11px] text-roast-700 leading-relaxed">
                        <strong className="text-roast-950 block mb-1 font-bold">[ PRASYARAT WAJIB ]</strong>
                        Selesaikan 7 modul di Foundation Layer terlebih dahulu untuk membuka jalur spesialisasi ini.
                      </div>
                      <Link
                        href="/paths/kopi-dari-hulu-ke-hilir"
                        className="w-full py-2.5 bg-roast-950 hover:bg-cherry-800 text-paper-50 font-mono text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-1.5 transition-colors border border-roast-900 shadow-xs"
                      >
                        <span>Ke Foundation Layer →</span>
                      </Link>
                      <button
                        onClick={() => handleEnroll(true)}
                        className="w-full py-2 bg-paper-100 hover:bg-paper-200 text-roast-800 border border-paper-300 font-mono text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <Unlock className="w-3.5 h-3.5 text-cherry-700" />
                        <span>Buka Akses Pratinjau Demo</span>
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleEnroll(false)}
                      className="w-full py-2.5 bg-roast-950 hover:bg-cherry-800 text-paper-50 font-mono text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 border border-roast-900 shadow-xs transition-colors"
                    >
                      <span>Daftar Jalur Ini (Gratis)</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Syllabus / Module List */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-paper-300">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-roast-500 font-bold block mb-1">
              DAFTAR SILABUS LENGKAP
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-black text-roast-950">
              Struktur Modul & Rangkaian Pelajaran
            </h2>
          </div>
          <span className="font-mono text-xs text-roast-500 font-bold">
            {pathModules.length} Modul
          </span>
        </div>

        {/* Modules Accordion */}
        <div className="space-y-4">
          {pathModules.map((mod, mIdx) => {
            const modLessons = lessons.filter((l) => l.module_id === mod.id);
            const modQuiz = quizzes.find((q) => q.module_id === mod.id);
            const isExpanded = expandedModules[mod.id] ?? false;

            const completedLessonsInMod = modLessons.filter((l) => isLessonCompleted(l.id)).length;

            return (
              <div
                key={mod.id}
                className="bg-paper-50 border border-paper-300 shadow-xs hover:border-roast-800 transition-all"
              >
                {/* Module Bar */}
                <button
                  onClick={() => toggleModule(mod.id)}
                  className="w-full p-5 flex items-center justify-between text-left hover:bg-paper-100/50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-xs font-bold text-cherry-700 bg-cherry-50 px-2.5 py-1 border border-cherry-200 shrink-0 mt-0.5">
                      {String(mIdx + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-serif font-bold text-base sm:text-lg text-roast-950">
                        {mod.title}
                      </h3>
                      <p className="text-xs text-roast-600 mt-0.5 line-clamp-1 font-sans">
                        {mod.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 ml-2">
                    <span className="font-mono text-xs text-roast-500 hidden sm:inline">
                      {modLessons.length > 0 ? `${completedLessonsInMod}/${modLessons.length} Pelajaran` : 'Tahap Kurasi'}
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-roast-500" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-roast-500" />
                    )}
                  </div>
                </button>

                {/* Lessons List */}
                {isExpanded && (
                  <div className="p-5 pt-0 border-t border-paper-200 space-y-2.5">
                    {modLessons.length > 0 ? (
                      modLessons.map((lesson) => {
                        const completed = isLessonCompleted(lesson.id);
                        return (
                          <div
                            key={lesson.id}
                            className="flex items-center justify-between p-3.5 bg-paper-100/70 hover:bg-paper-100 transition-colors border border-paper-200"
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <span className="shrink-0">
                                {completed ? (
                                  <Check className="w-4 h-4 text-emerald-700" />
                                ) : (
                                  <div className="w-3.5 h-3.5 border border-paper-400 bg-paper-50" />
                                )}
                              </span>
                              <div className="truncate">
                                <span className="text-xs font-serif font-bold text-roast-950 block truncate">
                                  {lesson.title}
                                </span>
                                <span className="font-mono text-[10px] text-roast-500">
                                  {lesson.duration_minutes} Menit • {lesson.content_type.toUpperCase()}
                                </span>
                              </div>
                            </div>

                            <Link
                              href={`/paths/${path.slug}/lessons/${lesson.id}`}
                              className="shrink-0 ml-3 px-3.5 py-1.5 bg-paper-50 border border-paper-300 font-mono text-[11px] uppercase tracking-wider font-bold text-roast-900 hover:text-cherry-800 hover:border-roast-800 transition-all shadow-xs"
                            >
                              {completed ? 'Ulas Materi' : 'Buka Materi →'}
                            </Link>
                          </div>
                        );
                      })
                    ) : (
                      <div className="p-4 bg-paper-100/60 border border-dashed border-paper-300 font-mono text-xs text-roast-600 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-cherry-700">[ KURIKULUM PRAKTIK ]</span>
                          <span className="font-sans text-xs">Materi modul ini sedang dalam proses penyusunan masterclass bersama tim roastery.</span>
                        </div>
                        <span className="text-[9px] uppercase tracking-widest px-2 py-0.5 bg-paper-200 border border-paper-300 text-roast-500 font-bold self-start sm:self-auto">
                          SEGERA TERBIT
                        </span>
                      </div>
                    )}

                    {/* Quiz Button */}
                    {modQuiz && (
                      <div className="pt-2 flex items-center justify-between p-3.5 bg-paper-200/60 border border-paper-300 font-mono text-xs">
                        <div className="flex items-center gap-2">
                          <HelpCircle className="w-4 h-4 text-cherry-700 shrink-0" />
                          <div>
                            <span className="font-bold text-roast-900 block">{modQuiz.title}</span>
                            <span className="text-[10px] text-roast-500">
                              Passing Score Kelulusan: {modQuiz.passing_score}%
                            </span>
                          </div>
                        </div>

                        <Link
                          href={`/paths/${path.slug}/quiz/${modQuiz.id}`}
                          className="px-3.5 py-1.5 bg-roast-950 hover:bg-cherry-800 text-paper-50 text-[11px] font-bold uppercase tracking-wider transition-colors border border-roast-900 shadow-xs"
                        >
                          Mulai Ujian Kuis
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Final Exam Box */}
        {finalExam && (
          <div className="mt-10 bg-roast-950 text-paper-50 p-8 shadow-warm border-2 border-crema-500/60 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="space-y-2 text-center sm:text-left">
              <span className="font-mono text-[10px] uppercase tracking-widest text-crema-300 font-bold block">
                [ UJIAN AKHIR KELULUSAN RESMI ]
              </span>
              <h3 className="text-2xl font-serif font-black text-white">
                {finalExam.title}
              </h3>
              <p className="text-xs text-roast-300 max-w-xl leading-relaxed font-sans">
                Luluskan ujian akhir ini dengan skor minimal {finalExam.passing_score}% untuk menerbitkan dokumen diploma digital resmi Cherry Coffee Roastery Academy yang tercatat di buku induk publik.
              </p>
            </div>

            <Link
              href={`/paths/${path.slug}/quiz/${finalExam.id}`}
              className="px-6 py-3 bg-crema-500 hover:bg-crema-400 text-roast-950 font-mono text-xs uppercase tracking-wider font-bold shrink-0 transition-colors shadow-xs border border-crema-400"
            >
              Mulai Ujian Akhir →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
