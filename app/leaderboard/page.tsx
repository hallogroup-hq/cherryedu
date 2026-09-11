'use client';

import { useCherryEdu } from '@/lib/store';
import { Flame } from "lucide-react";

export default function LeaderboardPage() {
  const { users, currentUser } = useCherryEdu();

  // Sort users by XP desc
  const sortedUsers = [...users].sort((a, b) => b.xp_points - a.xp_points);

  const topThree = sortedUsers.slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Header Ledger */}
      <div className="border-b border-paper-300 pb-8 mb-10">
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-[10px] tracking-widest text-cherry-700 font-semibold uppercase bg-cherry-50 px-2 py-0.5 border border-cherry-200">
            [ ACADEMY ROLL OF HONOUR — 2026 ]
          </span>
          <span className="font-mono text-[10px] text-roast-500 uppercase">
            REGISTRI CAPAIAN KOMPETENSI
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-roast-950 tracking-tight">
          Tabel Kehormatan Pembelajar Kopi
        </h1>
        <p className="mt-3 text-xs sm:text-sm text-roast-700 max-w-2xl leading-relaxed">
          Akumulasi dedikasi pembelajar dari Foundation Layer hingga Spesialisasi Barista dan Home Brewer.
          XP diperoleh dari penyelesaian modul (+25 XP), kelulusan kuis (+50 XP), ujian sempurna (+100 XP), dan keaktifan forum.
        </p>
      </div>

      {/* Top 3 Medallion Podium */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12 items-end">
        {/* 2nd Place (Silver) */}
        {topThree[1] && (
          <div className="order-2 sm:order-1 bg-paper-50 border border-paper-400 p-6 text-center shadow-xs relative">
            <span className="font-mono text-[9px] uppercase tracking-widest text-roast-600 block mb-2 font-bold">
              [ PERINGKAT II — PERAK ]
            </span>
            <img
              src={topThree[1].avatar_url}
              alt={topThree[1].name}
              className="w-16 h-16 mx-auto object-cover border border-paper-400 filter contrast-110 my-3"
            />
            <h3 className="font-serif text-base font-bold text-roast-950 truncate">
              {topThree[1].name}
            </h3>
            <span className="font-mono text-[10px] text-roast-500 block uppercase tracking-wider mt-0.5">
              {topThree[1].coffee_role || 'Pembelajar'} • {topThree[1].city}
            </span>
            <div className="mt-4 pt-3 border-t border-paper-200 font-mono text-xs font-bold text-roast-900">
              {topThree[1].xp_points.toLocaleString('id-ID')} XP
            </div>
          </div>
        )}

        {/* 1st Place (Gold Medallion - Distinguished) */}
        {topThree[0] && (
          <div className="order-1 sm:order-2 bg-paper-100 border-2 border-crema-500 p-7 text-center shadow-warm relative -translate-y-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-crema-700 block mb-2 font-bold">
              ★ [ PERINGKAT I — EMAS ] ★
            </span>
            <img
              src={topThree[0].avatar_url}
              alt={topThree[0].name}
              className="w-20 h-20 mx-auto object-cover border-2 border-crema-500 filter contrast-115 my-3"
            />
            <h3 className="font-serif text-lg font-bold text-roast-950 truncate">
              {topThree[0].name}
            </h3>
            <span className="font-mono text-[10px] text-cherry-800 block uppercase tracking-wider font-semibold mt-0.5">
              {topThree[0].role === 'expert' ? 'Verified Q Grader' : topThree[0].coffee_role} • {topThree[0].city}
            </span>
            <div className="mt-4 pt-3 border-t border-crema-400/80 font-mono text-sm font-bold text-roast-950">
              {topThree[0].xp_points.toLocaleString('id-ID')} XP
            </div>
          </div>
        )}

        {/* 3rd Place (Bronze) */}
        {topThree[2] && (
          <div className="order-3 bg-paper-50 border border-paper-400 p-6 text-center shadow-xs relative">
            <span className="font-mono text-[9px] uppercase tracking-widest text-amber-800 block mb-2 font-bold">
              [ PERINGKAT III — PERUNGGU ]
            </span>
            <img
              src={topThree[2].avatar_url}
              alt={topThree[2].name}
              className="w-16 h-16 mx-auto object-cover border border-paper-400 filter contrast-110 my-3"
            />
            <h3 className="font-serif text-base font-bold text-roast-950 truncate">
              {topThree[2].name}
            </h3>
            <span className="font-mono text-[10px] text-roast-500 block uppercase tracking-wider mt-0.5">
              {topThree[2].coffee_role || 'Pembelajar'} • {topThree[2].city}
            </span>
            <div className="mt-4 pt-3 border-t border-paper-200 font-mono text-xs font-bold text-roast-900">
              {topThree[2].xp_points.toLocaleString('id-ID')} XP
            </div>
          </div>
        )}
      </div>

      {/* Full Registry Ledger */}
      <div className="bg-paper-50 border border-paper-300 shadow-xs">
        <div className="px-5 py-3.5 bg-paper-200 border-b border-paper-300 flex justify-between items-center font-mono text-[10px] font-bold uppercase tracking-wider text-roast-700">
          <span>[ POSISI & PROFIL PEMBELAJAR ]</span>
          <span>[ STREAK / AKUMULASI XP ]</span>
        </div>

        <div className="divide-y divide-paper-200">
          {sortedUsers.map((user, idx) => {
            const rank = idx + 1;
            const isMe = user.id === currentUser.id;

            return (
              <div
                key={user.id}
                className={`p-4 sm:p-5 flex items-center justify-between gap-4 transition-colors ${
                  isMe
                    ? 'bg-cherry-50/90 border-l-4 border-l-cherry-700'
                    : 'hover:bg-paper-100/70'
                }`}
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <span className="font-mono text-xs font-bold text-roast-500 w-6 text-center shrink-0">
                    {String(rank).padStart(2, '0')}
                  </span>

                  <img
                    src={user.avatar_url}
                    alt={user.name}
                    className="w-10 h-10 object-cover border border-paper-400 filter grayscale contrast-115 shrink-0"
                  />

                  <div className="truncate">
                    <div className="flex items-center gap-2">
                      <span className="font-serif text-sm font-bold text-roast-950 truncate">
                        {user.name}
                      </span>
                      {isMe && (
                        <span className="font-mono text-[9px] uppercase tracking-wider font-bold text-cherry-700 bg-cherry-100 px-1.5 py-0.5 border border-cherry-300">
                          Profil Anda
                        </span>
                      )}
                    </div>
                    <span className="font-mono text-[10px] text-roast-500 uppercase tracking-wider block mt-0.5">
                      {user.city} • {user.coffee_role || user.role}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-5 shrink-0 text-right font-mono">
                  <div className="hidden sm:flex items-center gap-1 text-[11px] text-roast-600 bg-paper-200 px-2 py-1 border border-paper-300">
                    <Flame className="w-3 h-3 text-cherry-700" />
                    <span>{user.streak_count} Hari</span>
                  </div>

                  <div className="text-xs sm:text-sm font-bold text-roast-950">
                    {user.xp_points.toLocaleString('id-ID')} XP
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

