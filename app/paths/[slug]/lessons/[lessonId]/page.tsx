'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useCherryEdu } from '@/lib/store';
import { BrewCalculator } from '@/components/BrewCalculator';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';
import { AudioNarrationPlayer } from '@/components/AudioNarrationPlayer';
import { toast } from 'sonner';
import {
  Bookmark,
  ChevronLeft,
  ChevronRight,
  Clock,
  ArrowLeft,
  Check,
  Award,
  List,
} from 'lucide-react';

export default function LessonPlayerPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const lessonId = params.lessonId as string;

  const {
    learningPaths,
    modules,
    lessons,
    markLessonComplete,
    isLessonCompleted,
    toggleBookmark,
    isBookmarked,
  } = useCherryEdu();

  const [timeSpent, setTimeSpent] = useState<number>(0);
  const [completedNotification, setCompletedNotification] = useState<boolean>(false);
  const [isTocOpen, setIsTocOpen] = useState<boolean>(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpent((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const path = learningPaths.find((p) => p.slug === slug);
  const currentLesson = lessons.find((l) => l.id === lessonId);
  const pathModules = path ? modules.filter((m) => m.learning_path_id === path.id) : [];

  const allPathLessons: { lesson: typeof currentLesson; module: typeof pathModules[0] }[] = [];
  pathModules.forEach((mod) => {
    const modLessons = lessons.filter((l) => l.module_id === mod.id);
    modLessons.forEach((les) => {
      allPathLessons.push({ lesson: les, module: mod });
    });
  });

  const currentIndex = allPathLessons.findIndex((item) => item.lesson?.id === lessonId);
  const prevItem = currentIndex > 0 ? allPathLessons[currentIndex - 1] : null;
  const nextItem =
    currentIndex < allPathLessons.length - 1 ? allPathLessons[currentIndex + 1] : null;

  if (!path || !currentLesson) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-xl font-serif font-bold text-roast-950">Materi Tidak Ditemukan</h2>
        <Link href="/paths" className="mt-3 inline-block font-mono text-xs uppercase text-cherry-700 underline">
          &larr; Kembali ke Silabus
        </Link>
      </div>
    );
  }

  const completed = isLessonCompleted(currentLesson.id);
  const bookmarked = isBookmarked(currentLesson.id);

  const handleCompleteAndNext = () => {
    markLessonComplete(currentLesson.id, timeSpent);
    setCompletedNotification(true);
    toast.success('Materi berhasil diselesaikan! +25 XP ditambahkan ke profil Anda.');
    setTimeout(() => {
      if (nextItem && nextItem.lesson) {
        router.push(`/paths/${path.slug}/lessons/${nextItem.lesson.id}`);
      }
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-paper-50 flex flex-col">
      {/* Editorial Top Bar */}
      <div className="sticky top-16 z-30 bg-paper-50/95 backdrop-blur-md border-b border-paper-300 px-4 sm:px-6 py-2.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <Link
              href={`/paths/${path.slug}`}
              className="p-1.5 text-roast-500 hover:text-roast-950 hover:bg-paper-200/60 rounded shrink-0 transition-colors"
              title="Kembali ke Silabus"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div className="truncate">
              <span className="font-mono text-[10px] text-roast-500 uppercase tracking-widest block truncate font-bold">
                {path.title}
              </span>
              <h1 className="text-xs sm:text-sm font-serif font-bold text-roast-950 truncate">
                {currentLesson.title}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Mobile TOC toggle */}
            <button
              onClick={() => setIsTocOpen(!isTocOpen)}
              className="lg:hidden p-1.5 rounded border border-paper-300 text-roast-600 hover:bg-paper-100 transition-colors"
              title="Daftar Materi"
            >
              <List className="w-4 h-4" />
            </button>

            {/* Bookmark button */}
            <button
              onClick={() => toggleBookmark(currentLesson.id)}
              className={`px-3 py-1.5 rounded border transition-colors flex items-center gap-1.5 font-mono text-xs ${
                bookmarked
                  ? 'bg-paper-200 border-roast-800 text-roast-950 font-bold'
                  : 'bg-white border-paper-300 text-roast-600 hover:bg-paper-100'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? 'fill-roast-950' : ''}`} />
              <span className="hidden sm:inline">{bookmarked ? 'Tersimpan' : 'Simpan'}</span>
            </button>

            {/* Complete button */}
            <button
              onClick={handleCompleteAndNext}
              disabled={completedNotification}
              className={`px-4 py-1.5 rounded font-sans text-xs uppercase tracking-wider font-bold flex items-center gap-1.5 transition-all shadow-subtle ${
                completed
                  ? 'bg-emerald-800 hover:bg-emerald-900 text-white'
                  : 'bg-roast-950 hover:bg-cherry-800 text-paper-50'
              }`}
            >
              {completed ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Selesai ✓</span>
                </>
              ) : (
                <>
                  <span>Tandai Selesai (+25 XP)</span>
                  <Check className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Reader Layout (TOC Sidebar + Editorial Reader) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Table of Contents */}
        <aside className={`lg:col-span-4 ${isTocOpen ? 'block' : 'hidden'} lg:block`}>
          <div className="sticky top-32 bg-white rounded-xl border border-paper-300 p-5 shadow-subtle max-h-[calc(100vh-170px)] overflow-y-auto">
            <span className="font-mono text-[10px] uppercase tracking-widest text-roast-400 font-bold block mb-4 pb-2 border-b border-paper-200">
              DAFTAR MATERI SILABUS
            </span>

            <div className="space-y-4">
              {pathModules.map((mod, mIdx) => {
                const modLessons = lessons.filter((l) => l.module_id === mod.id);
                return (
                  <div key={mod.id} className="space-y-1.5">
                    <span className="font-mono text-[11px] font-bold text-roast-900 block px-2 py-1 bg-paper-100 rounded">
                      {String(mIdx + 1).padStart(2, '0')}. {mod.title.split(':')[1] || mod.title}
                    </span>
                    <div className="space-y-0.5 pl-2">
                      {modLessons.map((l) => {
                        const isCurrent = l.id === currentLesson.id;
                        const isDone = isLessonCompleted(l.id);
                        return (
                          <Link
                            key={l.id}
                            href={`/paths/${path.slug}/lessons/${l.id}`}
                            onClick={() => setIsTocOpen(false)}
                            className={`flex items-center gap-2 p-2 rounded text-xs transition-colors ${
                              isCurrent
                                ? 'bg-roast-950 text-paper-50 font-bold'
                                : 'text-roast-700 hover:bg-paper-100'
                            }`}
                          >
                            <span className="shrink-0">
                              {isDone ? (
                                <Check className={`w-3.5 h-3.5 ${isCurrent ? 'text-crema-300' : 'text-emerald-700'}`} />
                              ) : (
                                <div className={`w-3 h-3 rounded-full border ${isCurrent ? 'border-paper-300' : 'border-paper-400'}`} />
                              )}
                            </span>
                            <span className="truncate">{l.title}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Center / Main Editorial Reader */}
        <main className="lg:col-span-8 bg-white rounded-xl border border-paper-300 p-5 sm:p-8 lg:p-14 shadow-card">
          {completedNotification && (
            <div className="mb-6 p-4 rounded bg-emerald-50 border border-emerald-300 font-mono text-xs text-emerald-900 flex items-center gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
              <Check className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>Materi berhasil diselesaikan! +25 XP ditambahkan ke profil Anda.</span>
            </div>
          )}

          {/* Reading Meta */}
          <div className="flex items-center gap-3 pb-4 border-b border-paper-200 font-mono text-[11px] text-roast-500">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {currentLesson.duration_minutes} Menit Baca
            </span>
            <span>•</span>
            <span className="uppercase">{currentLesson.content_type}</span>
          </div>

          {/* Mode Audio Narasi Listen & Brew */}
          <AudioNarrationPlayer
            title={currentLesson.title}
            rawMarkdown={currentLesson.content}
          />

          {/* Key Takeaways Card */}
          {currentLesson.key_takeaways && currentLesson.key_takeaways.length > 0 && (
            <div className="my-8 p-5 rounded-lg bg-paper-100 border border-paper-300">
              <span className="font-mono text-[10px] uppercase tracking-widest text-roast-500 font-bold block mb-2">
                RINGKASAN ESENSIAL (KEY TAKEAWAYS)
              </span>
              <ul className="space-y-1.5 text-xs sm:text-sm text-roast-800">
                {currentLesson.key_takeaways.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-cherry-700 font-bold">●</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Rich Editorial Markdown Content */}
          <div className="my-8">
            <MarkdownRenderer content={currentLesson.content} />
          </div>

          {/* Embedded Brew Recipe Calculator */}
          {currentLesson.brew_recipe && (
            <div className="my-10 pt-8 border-t border-paper-300">
              <span className="font-mono text-[10px] uppercase tracking-widest text-cherry-800 font-bold block mb-1">
                PRAKTIK SEDUH INTERAKTIF
              </span>
              <h3 className="font-serif font-bold text-xl text-roast-950 mb-4">
                Formula Seduh: {currentLesson.brew_recipe.method}
              </h3>
              <BrewCalculator />
            </div>
          )}

          {/* Bottom Pagination */}
          <div className="mt-12 pt-6 border-t border-paper-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            {prevItem && prevItem.lesson ? (
              <Link
                href={`/paths/${path.slug}/lessons/${prevItem.lesson.id}`}
                className="w-full sm:w-auto px-4 py-2 rounded border border-paper-300 font-mono text-xs font-bold text-roast-700 hover:bg-paper-100 flex items-center justify-center gap-1.5 transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span className="truncate max-w-[180px]">Sebelumnya: {prevItem.lesson.title}</span>
              </Link>
            ) : (
              <div />
            )}

            {nextItem && nextItem.lesson ? (
              <button
                onClick={handleCompleteAndNext}
                className="w-full sm:w-auto px-5 py-2.5 bg-roast-950 hover:bg-cherry-800 text-paper-50 rounded font-sans text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 shadow-subtle transition-colors"
              >
                <span className="truncate max-w-[180px]">Selanjutnya: {nextItem.lesson.title}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <Link
                href={`/paths/${path.slug}`}
                className="w-full sm:w-auto px-5 py-2.5 bg-roast-950 hover:bg-roast-900 text-paper-50 rounded font-mono text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <Award className="w-4 h-4 text-crema-400" />
                <span>Ujian Kelulusan →</span>
              </Link>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
