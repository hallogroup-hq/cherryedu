'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useCherryEdu } from '@/lib/store';
import {
  User as UserIcon,
  Flame,
  Zap,
  Award,
  BookOpen,
  Bookmark,
  Briefcase,
  CheckCircle2,
  Edit,
  RotateCcw,
  Sparkles,
  MapPin,
  Calendar,
} from 'lucide-react';

function ProfileContent() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get('tab') || 'enrolled';

  const {
    currentUser,
    learningPaths,
    enrollments,
    certificates,
    badges,
    bookmarks,
    lessons,
    jobApplications,
    jobListings,
    getUserBadges,
    updateUserProfile,
    resetAllData,
    getPathProgress,
  } = useCherryEdu();

  const [activeTab, setActiveTab] = useState<string>(initialTab);
  const [isEditingBio, setIsEditingBio] = useState<boolean>(false);
  const [nameInput, setNameInput] = useState<string>(currentUser.name);
  const [bioInput, setBioInput] = useState<string>(currentUser.bio);
  const [cityInput, setCityInput] = useState<string>(currentUser.city);

  useEffect(() => {
    setNameInput(currentUser.name);
    setBioInput(currentUser.bio);
    setCityInput(currentUser.city);
  }, [currentUser]);

  const userBadgesList = getUserBadges(currentUser.id);
  const userCerts = certificates.filter((c) => c.user_id === currentUser.id);
  const userEnrollments = enrollments.filter((e) => e.user_id === currentUser.id);
  const userBookmarks = bookmarks.filter((b) => b.user_id === currentUser.id);
  const userApps = jobApplications.filter((a) => a.applicant_id === currentUser.id);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateUserProfile({
      name: nameInput,
      bio: bioInput,
      city: cityInput,
    });
    setIsEditingBio(false);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Profile Dossier Header */}
      <div className="bg-paper-50 border border-paper-400 p-6 sm:p-8 shadow-xs mb-10">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-paper-200">
          <span className="font-mono text-[10px] tracking-widest text-cherry-700 font-semibold uppercase">
            [ DOSSIER PEMBELAJAR — NO. CHR-ACADEMY-{currentUser.id.slice(0, 6).toUpperCase()} ]
          </span>
          <span className="font-mono text-[10px] text-roast-400 uppercase hidden sm:inline">
            • BUKU INDUK REGISTRASI KREDENSIAL
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-paper-300">
          <div className="flex items-center gap-4 sm:gap-6">
            <img
              src={currentUser.avatar_url}
              alt={currentUser.name}
              className="w-20 h-20 sm:w-24 sm:h-24 object-cover border-2 border-roast-900 filter contrast-110 shrink-0"
            />
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h1 className="font-serif text-2xl sm:text-3xl font-bold text-roast-950">
                  {currentUser.name}
                </h1>
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-roast-950 text-crema-300">
                  {currentUser.role === 'expert' ? 'Verified Q-Grader' : currentUser.coffee_role || 'Pembelajar'}
                </span>
              </div>
              <p className="font-mono text-[11px] text-roast-600 flex flex-wrap items-center gap-2 mt-1">
                <span>KOTA: {currentUser.city.toUpperCase()}</span>
                <span>•</span>
                <span>BERGABUNG: {new Date(currentUser.created_at).toLocaleDateString('id-ID', { month: 'long', year: 'numeric' }).toUpperCase()}</span>
              </p>
            </div>
          </div>

          {/* Quick Edit Profile Button */}
          <button
            onClick={() => setIsEditingBio(!isEditingBio)}
            className="px-4 py-2 border border-paper-400 bg-paper-100 hover:border-roast-900 text-roast-900 font-mono text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors self-start sm:self-auto shrink-0"
          >
            <Edit className="w-3 h-3" />
            <span>{isEditingBio ? 'Tutup Sunting' : 'Sunting Profil'}</span>
          </button>
        </div>

        {/* Bio or Edit Bio Form */}
        {!isEditingBio ? (
          <p className="font-serif italic text-xs sm:text-sm text-roast-800 leading-relaxed py-4 border-b border-paper-200">
            &ldquo;{currentUser.bio || 'Belum ada catatan biografi personal.'}&rdquo;
          </p>
        ) : (
          <form onSubmit={handleSaveProfile} className="py-4 space-y-4 border-b border-paper-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-mono text-[10px] uppercase text-roast-600 mb-1 font-semibold">Nama Lengkap</label>
                <input
                  type="text"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  className="w-full p-2 text-xs border border-paper-400 bg-paper-100/50 text-roast-900 focus:outline-hidden focus:border-roast-900"
                />
              </div>
              <div>
                <label className="block font-mono text-[10px] uppercase text-roast-600 mb-1 font-semibold">Kota Domisili</label>
                <input
                  type="text"
                  value={cityInput}
                  onChange={(e) => setCityInput(e.target.value)}
                  className="w-full p-2 text-xs border border-paper-400 bg-paper-100/50 text-roast-900 focus:outline-hidden focus:border-roast-900"
                />
              </div>
            </div>
            <div>
              <label className="block font-mono text-[10px] uppercase text-roast-600 mb-1 font-semibold">Biografi Filosofi Kopi</label>
              <textarea
                rows={2}
                value={bioInput}
                onChange={(e) => setBioInput(e.target.value)}
                className="w-full p-2 text-xs border border-paper-400 bg-paper-100/50 text-roast-900 focus:outline-hidden focus:border-roast-900 font-sans"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-cherry-700 hover:bg-cherry-800 text-paper-50 font-mono text-[11px] uppercase tracking-wider font-bold transition-colors"
            >
              Simpan Perubahan
            </button>
          </form>
        )}

        {/* Telemetry Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-5 font-mono">
          <div className="bg-paper-100 border border-paper-300 p-3 text-center">
            <span className="text-[10px] text-roast-500 uppercase block font-semibold">[ KONSISTENSI ]</span>
            <div className="text-sm font-bold text-cherry-700 flex items-center justify-center gap-1 mt-1">
              <Flame className="w-3.5 h-3.5 fill-cherry-600 text-cherry-600" />
              <span>{currentUser.streak_count} Hari Streak</span>
            </div>
          </div>

          <div className="bg-paper-100 border border-paper-300 p-3 text-center">
            <span className="text-[10px] text-roast-500 uppercase block font-semibold">[ TOTAL XP ]</span>
            <div className="text-sm font-bold text-roast-950 flex items-center justify-center gap-1 mt-1">
              <Zap className="w-3.5 h-3.5 text-crema-600 fill-crema-500" />
              <span>{currentUser.xp_points.toLocaleString('id-ID')} XP</span>
            </div>
          </div>

          <div className="bg-paper-100 border border-paper-300 p-3 text-center">
            <span className="text-[10px] text-roast-500 uppercase block font-semibold">[ SERTIFIKAT ]</span>
            <div className="text-sm font-bold text-roast-950 flex items-center justify-center gap-1 mt-1">
              <Award className="w-3.5 h-3.5 text-crema-600" />
              <span>{userCerts.length} Dokumen</span>
            </div>
          </div>

          <div className="bg-paper-100 border border-paper-300 p-3 text-center">
            <span className="text-[10px] text-roast-500 uppercase block font-semibold">[ LENCANA ]</span>
            <div className="text-sm font-bold text-roast-950 flex items-center justify-center gap-1 mt-1">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>{userBadgesList.length} Hallmarks</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Bar */}
      <div className="flex gap-2 overflow-x-auto pb-3 mb-8 border-b border-paper-300 scrollbar-none font-mono text-xs">
        <button
          onClick={() => setActiveTab('enrolled')}
          className={`px-4 py-2 uppercase tracking-wider whitespace-nowrap transition-all border ${
            activeTab === 'enrolled'
              ? 'bg-roast-950 text-paper-50 border-roast-950 font-bold'
              : 'bg-paper-50 text-roast-700 border-paper-300 hover:border-roast-700'
          }`}
        >
          [ 01 ] JALUR KURIKULUM ({userEnrollments.length})
        </button>

        <button
          onClick={() => setActiveTab('badges')}
          className={`px-4 py-2 uppercase tracking-wider whitespace-nowrap transition-all border ${
            activeTab === 'badges'
              ? 'bg-roast-950 text-paper-50 border-roast-950 font-bold'
              : 'bg-paper-50 text-roast-700 border-paper-300 hover:border-roast-700'
          }`}
        >
          [ 02 ] LENCANA GUILD ({userBadgesList.length})
        </button>

        <button
          onClick={() => setActiveTab('certificates')}
          className={`px-4 py-2 uppercase tracking-wider whitespace-nowrap transition-all border ${
            activeTab === 'certificates'
              ? 'bg-roast-950 text-paper-50 border-roast-950 font-bold'
              : 'bg-paper-50 text-roast-700 border-paper-300 hover:border-roast-700'
          }`}
        >
          [ 03 ] DIPLOMA RESMI ({userCerts.length})
        </button>

        <button
          onClick={() => setActiveTab('bookmarks')}
          className={`px-4 py-2 uppercase tracking-wider whitespace-nowrap transition-all border ${
            activeTab === 'bookmarks'
              ? 'bg-roast-950 text-paper-50 border-roast-950 font-bold'
              : 'bg-paper-50 text-roast-700 border-paper-300 hover:border-roast-700'
          }`}
        >
          [ 04 ] ARSIP BACAAN ({userBookmarks.length})
        </button>

        <button
          onClick={() => setActiveTab('applications')}
          className={`px-4 py-2 uppercase tracking-wider whitespace-nowrap transition-all border ${
            activeTab === 'applications'
              ? 'bg-roast-950 text-paper-50 border-roast-950 font-bold'
              : 'bg-paper-50 text-roast-700 border-paper-300 hover:border-roast-700'
          }`}
        >
          [ 05 ] LAMARAN BAR ({userApps.length})
        </button>
      </div>

      {/* Tab 1: Enrolled Paths */}
      {activeTab === 'enrolled' && (
        <div className="space-y-4">
          {userEnrollments.length > 0 ? (
            userEnrollments.map((enr) => {
              const path = learningPaths.find((p) => p.id === enr.learning_path_id);
              if (!path) return null;
              const progress = getPathProgress(path.id);

              return (
                <div
                  key={enr.id}
                  className="bg-paper-50 border border-paper-300 p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:border-roast-900/40 transition-all"
                >
                  <div className="space-y-2">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-cherry-700 block">
                      {path.layer_type === 'foundation' ? '[ FONDASI UTAMA / WAJIB SEMUA JALUR ]' : '[ SPESIALISASI LANJUTAN ]'}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-roast-950">{path.title}</h3>
                    <div className="w-56 sm:w-72 space-y-1 pt-1 font-mono">
                      <div className="flex justify-between text-[10px] uppercase text-roast-600">
                        <span>Progres Penyelesaian</span>
                        <span className="font-bold text-cherry-700">{progress}%</span>
                      </div>
                      <div className="h-1.5 bg-paper-300 overflow-hidden">
                        <div
                          className="h-full bg-cherry-700 transition-all duration-500"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`/paths/${path.slug}`}
                    className="px-5 py-2.5 bg-roast-950 hover:bg-cherry-800 text-paper-50 font-mono text-xs uppercase tracking-wider transition-colors shrink-0 text-center"
                  >
                    Buka Silabus Modul &rarr;
                  </Link>
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-paper-50 border border-paper-300 p-6 font-mono text-xs text-roast-500">
              Belum terdaftar pada kurikulum mana pun.
            </div>
          )}
        </div>
      )}

      {/* Tab 2: Badges Collection */}
      {activeTab === 'badges' && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {badges.map((badge) => {
            const owned = userBadgesList.find((ub) => ub.id === badge.id);
            return (
              <div
                key={badge.id}
                className={`p-6 border text-center transition-all flex flex-col items-center justify-between ${
                  owned
                    ? 'bg-paper-100 border-crema-500 shadow-xs'
                    : 'bg-paper-50/50 border-paper-200 opacity-40 grayscale'
                }`}
              >
                <div className="text-4xl mb-3">{badge.icon_url}</div>
                <h4 className="font-serif text-sm font-bold text-roast-950 mb-1">{badge.name}</h4>
                <p className="font-sans text-[11px] text-roast-600 leading-snug">
                  {badge.description}
                </p>
                {owned ? (
                  <span className="font-mono text-[9px] uppercase tracking-wider text-cherry-800 bg-cherry-50 border border-cherry-200 px-2 py-0.5 mt-3 block">
                    Diraih: {new Date(owned.earned_at).toLocaleDateString('id-ID')}
                  </span>
                ) : (
                  <span className="font-mono text-[9px] uppercase tracking-wider text-roast-400 mt-3 block">
                    Terkunci
                  </span>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Tab 3: Certificates */}
      {activeTab === 'certificates' && (
        <div className="space-y-4">
          {userCerts.length > 0 ? (
            userCerts.map((cert) => (
              <div
                key={cert.id}
                className="bg-paper-50 border border-paper-300 p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-5"
              >
                <div>
                  <span className="font-mono text-[10px] uppercase text-roast-500 block">
                    [ NO. REGISTRI: {cert.certificate_number} ]
                  </span>
                  <h3 className="font-serif text-lg font-bold text-roast-950 mt-1">
                    {cert.path_title}
                  </h3>
                  <div className="font-mono text-xs text-cherry-700 font-bold mt-1">
                    PREDIKAT: {cert.grade_text?.toUpperCase() || 'LULUS KOMPETEN'}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Link
                    href={`/verify/${cert.share_token}`}
                    target="_blank"
                    className="px-4 py-2 border border-paper-400 bg-paper-100 hover:border-roast-900 text-roast-800 font-mono text-xs uppercase tracking-wider transition-colors"
                  >
                    Verifikasi Publik
                  </Link>
                  <Link
                    href="/certificates"
                    className="px-4 py-2 bg-cherry-700 hover:bg-cherry-800 text-paper-50 font-mono text-xs uppercase tracking-wider font-bold transition-colors"
                  >
                    Buka Diploma
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 bg-paper-50 border border-paper-300 p-6 font-mono text-xs text-roast-500">
              Belum ada diploma kelulusan yang diterbitkan. Selesaikan seluruh modul dan lulus ujian akhir kompetensi.
            </div>
          )}
        </div>
      )}

      {/* Tab 4: Bookmarks */}
      {activeTab === 'bookmarks' && (
        <div className="space-y-3">
          {userBookmarks.length > 0 ? (
            userBookmarks.map((bm) => {
              const les = lessons.find((l) => l.id === bm.lesson_id);
              if (!les) return null;

              return (
                <div
                  key={bm.id}
                  className="bg-paper-50 p-5 border border-paper-300 shadow-2xs flex justify-between items-center"
                >
                  <div>
                    <span className="font-serif text-sm font-bold text-roast-950 block">{les.title}</span>
                    <span className="font-mono text-[10px] text-roast-500 block mt-1">
                      DURASI: {les.duration_minutes} MENIT • DISIMPAN: {new Date(bm.created_at).toLocaleDateString('id-ID')}
                    </span>
                  </div>

                  <Link
                    href="/paths"
                    className="px-4 py-1.5 bg-paper-200 border border-paper-300 hover:border-roast-900 font-mono text-xs uppercase text-roast-900 font-bold transition-colors"
                  >
                    Buka Modul
                  </Link>
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-paper-50 border border-paper-300 p-6 font-mono text-xs text-roast-500">
              Belum ada materi pelajaran yang diarsipkan.
            </div>
          )}
        </div>
      )}

      {/* Tab 5: Applications */}
      {activeTab === 'applications' && (
        <div className="space-y-3">
          {userApps.length > 0 ? (
            userApps.map((app) => {
              const job = jobListings.find((j) => j.id === app.job_listing_id);
              return (
                <div
                  key={app.id}
                  className="bg-paper-50 p-5 border border-paper-300 shadow-2xs space-y-2 text-xs"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-serif text-sm font-bold text-roast-950">{job?.title || 'Posisi Barista'}</h4>
                      <span className="font-mono text-[11px] text-roast-600">{job?.company_name} ({job?.city})</span>
                    </div>
                    <span className="px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase bg-paper-200 text-roast-800 border border-paper-300">
                      STATUS: {app.status.toUpperCase()}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-roast-700 italic bg-paper-100 p-3 border-l-2 border-paper-400">
                    &ldquo;{app.cover_letter}&rdquo;
                  </p>
                  <span className="font-mono text-[10px] text-roast-400 block">
                    DIKIRIM: {new Date(app.applied_at).toLocaleString('id-ID')}
                  </span>
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-paper-50 border border-paper-300 p-6 font-mono text-xs text-roast-500">
              Belum ada berkas lamaran bar yang dikirimkan.
            </div>
          )}
        </div>
      )}

      {/* Reset Demo Data footer */}
      <div className="mt-12 pt-6 border-t border-paper-300 flex justify-between items-center font-mono text-xs text-roast-500">
        <span>MODE DEMO & PENGUJIAN AKADEMIK</span>
        <button
          onClick={() => {
            if (confirm('Kembalikan semua data ke setelan awal pabrik?')) {
              resetAllData();
            }
          }}
          className="flex items-center gap-1.5 text-roast-500 hover:text-cherry-700 transition-colors uppercase tracking-wider"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Semua Data Demo</span>
        </button>
      </div>
    </div>
  );
}

export default function ProfilePage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-5xl mx-auto px-4 py-20 text-center text-espresso-600 text-sm">
          Memuat profil pengguna...
        </div>
      }
    >
      <ProfileContent />
    </Suspense>
  );
}

