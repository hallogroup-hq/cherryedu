'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useCherryEdu } from '@/lib/store';
import {
  Award,
  BookOpen,
  Instagram,
  Globe,
  CheckCircle2,
  ChevronRight,
  ArrowLeft,
  Coffee,
  Sparkles,
  Flame,
} from 'lucide-react';

export default function CollaboratorProfilePage() {
  const params = useParams();
  const slug = params.slug as string;
  const { learningPaths, lessons } = useCherryEdu();

  // For prototype, resolve Fahrul M.W or fallback
  const collaborator = {
    name: 'Fahrul M.W',
    slug: 'fahrul-mw',
    role: 'Q Grader & Head Roaster',
    affiliation: 'Cherry Coffee Roastery',
    bio: 'Praktisi specialty coffee dengan pengalaman lebih dari 10 tahun di hulu dan hilir industri kopi Indonesia. Bersertifikasi Q Grader SCA dan aktif sebagai juri kompetisi roasting serta barista regional.',
    photo_url:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600',
    cover_url:
      'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1200',
    achievements: [
      'WBC Regional Finalist 2024',
      'Certified Q Arabica Grader (Coffee Quality Institute)',
      'Head Roaster & Quality Director di Cherry Coffee Roastery',
      'Kurator Kurikulum Fondasi Kopi & Roasting Sains',
    ],
    instagram: 'https://instagram.com',
    website: 'https://cherryroastery.id',
  };

  // Sample curated lessons
  const curatedLessons = lessons.slice(0, 4);

  return (
    <div className="min-h-screen bg-[#FDFBF7] pb-20">
      {/* Top Banner / Cover */}
      <div className="relative h-64 sm:h-80 bg-roast-950 overflow-hidden">
        <img
          src={collaborator.cover_url}
          alt="Cover"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-roast-950 via-roast-950/40 to-transparent" />

        <div className="absolute top-6 left-6 z-10">
          <Link
            href="/paths"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-paper-100 text-xs font-mono hover:bg-black/60 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Kembali ke Kurikulum
          </Link>
        </div>
      </div>

      {/* Profile Header */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20">
        <div className="bg-white rounded-2xl border border-paper-300 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <img
              src={collaborator.photo_url}
              alt={collaborator.name}
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover border-4 border-white shadow-md shrink-0"
            />
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h1 className="font-serif font-black text-2xl sm:text-3xl text-roast-950">
                  {collaborator.name}
                </h1>
                <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <CheckCircle2 className="w-3 h-3" />
                  Verified Instructor
                </span>
              </div>
              <p className="text-sm font-semibold text-cherry-700">
                {collaborator.role} · {collaborator.affiliation}
              </p>
              <p className="text-xs sm:text-sm text-roast-600 mt-2 leading-relaxed max-w-2xl">
                {collaborator.bio}
              </p>

              {/* Social / External Links */}
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-paper-100 text-xs font-mono">
                {collaborator.instagram && (
                  <a
                    href={collaborator.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-roast-600 hover:text-roast-950 transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>Instagram</span>
                  </a>
                )}
                {collaborator.website && (
                  <a
                    href={collaborator.website}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-roast-600 hover:text-roast-950 transition-colors"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>Website</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
          {/* Left Column: Achievements */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-xl border border-paper-200 p-6 space-y-4">
              <h2 className="font-mono text-xs uppercase tracking-widest text-roast-400 font-bold flex items-center gap-2">
                <Award className="w-4 h-4 text-cherry-700" />
                Pencapaian & Kualifikasi
              </h2>
              <ul className="space-y-2.5">
                {collaborator.achievements.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-roast-700 leading-relaxed">
                    <Sparkles className="w-3.5 h-3.5 text-crema-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-roast-950 to-roast-900 text-paper-50 rounded-xl p-6 space-y-3">
              <span className="font-mono text-[9px] uppercase tracking-widest text-crema-400 font-bold">
                Kolaborasi Konten
              </span>
              <h3 className="font-serif font-bold text-lg text-white">
                Ingin Mengundang Kolaborator Ini?
              </h3>
              <p className="text-xs text-roast-300 leading-relaxed">
                CherryEdu membuka peluang workshop offline, cupping session, dan mentorship privat bersama instruktur terverifikasi.
              </p>
              <a
                href="mailto:contact@cherryedu.id"
                className="inline-block mt-2 px-4 py-2 bg-cherry-700 hover:bg-cherry-600 text-white rounded-lg text-xs font-mono font-bold transition-colors"
              >
                Hubungi CherryEdu
              </a>
            </div>
          </div>

          {/* Right Column: Authored Lessons & Materials */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-xl border border-paper-200 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="font-mono text-xs uppercase tracking-widest text-roast-400 font-bold flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-roast-600" />
                  Materi & Signature Recipes ({curatedLessons.length})
                </h2>
                <span className="font-mono text-[10px] text-roast-400">Kurikulum Aktif</span>
              </div>

              <div className="divide-y divide-paper-100">
                {curatedLessons.map((lesson) => (
                  <Link
                    key={lesson.id}
                    href={`/paths/fondasi-kopi/lessons/${lesson.id}`}
                    className="py-3.5 first:pt-0 last:pb-0 flex items-start gap-3 hover:bg-paper-50/60 transition-colors rounded-lg px-2 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-paper-100 flex items-center justify-center text-roast-700 font-mono text-xs shrink-0 group-hover:bg-cherry-100 group-hover:text-cherry-800 transition-colors">
                      <Coffee className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-sm text-roast-950 group-hover:text-cherry-700 transition-colors truncate">
                        {lesson.title}
                      </h4>
                      <p className="text-xs text-roast-500 line-clamp-1 mt-0.5">
                        {lesson.summary || 'Eksplorasi teknik dan wawasan sains dari instruktur.'}
                      </p>
                      <div className="flex items-center gap-3 mt-1 text-[10px] font-mono text-roast-400">
                        <span>⏱ {lesson.duration_minutes} Menit</span>
                        {lesson.brew_recipe && (
                          <span className="text-cherry-700 font-bold">★ Resep Seduh Eksklusif</span>
                        )}
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-roast-300 mt-2 shrink-0 group-hover:text-roast-700 transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
