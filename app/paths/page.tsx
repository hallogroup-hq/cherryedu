'use client';

import { useState } from "react";
import Link from 'next/link';
import { useCherryEdu } from '@/lib/store';
import { Clock, Layers, ArrowRight, Lock, Check } from 'lucide-react';

export default function PathsPage() {
  const { learningPaths, enrollments, currentUser, getPathProgress, canEnrollInPath } = useCherryEdu();
  const [filterLayer, setFilterLayer] = useState<'all' | 'foundation' | 'specialization'>('all');

  const filteredPaths = learningPaths.filter((path) => {
    if (filterLayer === 'all') return true;
    return path.layer_type === filterLayer;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-paper-300">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-widest text-cherry-800 font-bold block mb-2">
            KATALOG KURIKULUM LENGKAP
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-black text-roast-950 tracking-tight">
            Jalur Pembelajaran Terstruktur
          </h1>
          <p className="mt-3 text-sm text-roast-700 max-w-2xl leading-relaxed">
            Struktur kurikulum dua lapis: <strong>Foundation Layer</strong> untuk pemahaman menyeluruh dari kebun hingga cangkir, disusul <strong>Specialization Layer</strong> untuk mengasah keahlian teknis sesuai profesi kopi Anda.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1 bg-paper-100 p-1 rounded border border-paper-300 shrink-0">
          <button
            onClick={() => setFilterLayer('all')}
            className={`px-3.5 py-1.5 rounded font-mono text-xs uppercase tracking-wider transition-all ${
              filterLayer === 'all'
                ? 'bg-roast-950 text-paper-50 font-bold shadow-subtle'
                : 'text-roast-600 hover:text-roast-950'
            }`}
          >
            Semua
          </button>
          <button
            onClick={() => setFilterLayer('foundation')}
            className={`px-3.5 py-1.5 rounded font-mono text-xs uppercase tracking-wider transition-all ${
              filterLayer === 'foundation'
                ? 'bg-roast-950 text-paper-50 font-bold shadow-subtle'
                : 'text-roast-600 hover:text-roast-950'
            }`}
          >
            Foundation
          </button>
          <button
            onClick={() => setFilterLayer('specialization')}
            className={`px-3.5 py-1.5 rounded font-mono text-xs uppercase tracking-wider transition-all ${
              filterLayer === 'specialization'
                ? 'bg-roast-950 text-paper-50 font-bold shadow-subtle'
                : 'text-roast-600 hover:text-roast-950'
            }`}
          >
            Spesialisasi
          </button>
        </div>
      </div>

      {/* Principle Notice */}
      <div className="my-6 p-4 bg-paper-100/80 border-l-2 border-cherry-700 border-y border-r border-paper-300 text-xs text-roast-800 font-sans flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-mono text-cherry-700 font-bold">[!]</span>
          <span>
            <strong>Prinsip Kurikulum CherryEdu:</strong> Anda wajib menyelesaikan seluruh 7 modul di Foundation Layer sebelum kredensial kelulusan jalur spesialisasi dapat diterbitkan.
          </span>
        </div>
      </div>

      {/* Grid of Paths */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {filteredPaths.map((path, idx) => {
          const isFoundation = path.layer_type === 'foundation';
          const enrollment = enrollments.find(
            (e) => e.user_id === currentUser.id && e.learning_path_id === path.id
          );
          const isEnrolled = Boolean(enrollment);
          const progress = getPathProgress(path.id);
          const prereqCheck = canEnrollInPath(path.id);
          const isLocked = !path.is_published || (!isEnrolled && !prereqCheck.allowed);

          return (
            <div
              key={path.id}
              className={`bg-paper-50 border flex flex-col justify-between transition-all ${
                isFoundation
                  ? 'border-2 border-roast-950 shadow-warm ring-1 ring-roast-950/10'
                  : 'border border-paper-300 shadow-xs hover:border-roast-800'
              }`}
            >
              <div>
                {/* Photo Thumbnail */}
                <div className="relative h-48 bg-roast-900 overflow-hidden border-b border-paper-300">
                  <img
                    src={path.thumbnail_url}
                    alt={path.title}
                    className="w-full h-full object-cover filter grayscale-20 contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-roast-950/85 via-roast-950/20 to-transparent" />

                  <div className="absolute top-3 left-3 flex gap-1.5">
                    <span className="font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 bg-roast-950 text-crema-300 border border-roast-800 font-bold">
                      {isFoundation ? 'VOL. 01 • WAJIB' : `TRACK 0${idx}`}
                    </span>
                    {!path.is_published && (
                      <span className="font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 bg-paper-200 text-roast-700 border border-paper-400 font-bold">
                        SEGERA HADIR
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex justify-between font-mono text-[10px] text-paper-200">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-crema-400" />
                      {path.estimated_hours} JAM ESTIMASI
                    </span>
                    <span className="flex items-center gap-1">
                      <Layers className="w-3 h-3 text-crema-400" />
                      {path.total_modules} MODUL SILABUS
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-cherry-700 font-bold block">
                      [ {path.target_role === 'all'
                        ? 'FONDASI HULU KE HILIR'
                        : path.target_role === 'barista'
                        ? 'SPESIALISASI BARISTA'
                        : 'SPESIALISASI HOME BREWER'} ]
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-xl text-roast-950 leading-snug">
                    {path.title}
                  </h3>

                  <p className="text-xs text-roast-700 line-clamp-3 leading-relaxed font-sans">
                    {path.description}
                  </p>

                  {/* Progress or status */}
                  {isEnrolled ? (
                    <div className="pt-3 border-t border-paper-200 space-y-1.5">
                      <div className="flex justify-between font-mono text-xs">
                        <span className="text-roast-500 uppercase tracking-wider text-[10px]">PROGRESS BELAJAR</span>
                        <span className="font-bold text-roast-900">{progress}% SELESAI</span>
                      </div>
                      <div className="w-full h-2 bg-paper-200 border border-paper-300 overflow-hidden">
                        <div
                          className="h-full bg-roast-950 transition-all"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                  ) : path.prerequisite_path_id ? (
                    <div className="pt-3 border-t border-paper-200 text-[11px] font-mono text-roast-500 flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-roast-400" />
                      <span>PRASYARAT: SELESAIKAN FOUNDATION LAYER</span>
                    </div>
                  ) : (
                    <div className="pt-3 border-t border-paper-200 text-[11px] font-mono text-emerald-800 flex items-center gap-1.5 font-bold">
                      <Check className="w-3.5 h-3.5 text-emerald-700" />
                      <span>TERBUKA BEBAS UNTUK SEMUA ROLE</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action */}
              <div className="p-6 pt-0">
                {path.is_published ? (
                  <Link
                    href={`/paths/${path.slug}`}
                    className={`w-full py-2.5 font-mono text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 transition-all border shadow-xs ${
                      isEnrolled
                        ? 'bg-roast-950 hover:bg-cherry-800 text-paper-50 border-roast-950'
                        : isLocked
                        ? 'bg-paper-100 hover:bg-paper-200 text-roast-700 border-paper-300'
                        : 'bg-roast-950 hover:bg-cherry-800 text-paper-50 border-roast-950'
                    }`}
                  >
                    <span>{isEnrolled ? 'Lanjutkan Pembelajaran' : 'Buka Silabus Lengkap'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ) : (
                  <button
                    disabled
                    className="w-full py-2.5 font-mono text-[11px] uppercase tracking-wider bg-paper-100 text-roast-400 cursor-not-allowed border border-paper-300"
                  >
                    TAHAP PENYUSUNAN KURIKULUM
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
