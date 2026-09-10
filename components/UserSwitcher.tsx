'use client';

import React, { useState } from 'react';
import { useCherryEdu } from '@/lib/store';
import { Check, ChevronDown, User as UserIcon } from 'lucide-react';

export const UserSwitcher: React.FC = () => {
  const { users, currentUser, switchUser } = useCherryEdu();
  const [isOpen, setIsOpen] = useState(false);

  const getRoleTag = (role: string, coffeeRole: string) => {
    if (role === 'expert') return 'Q Grader / Expert';
    if (role === 'employer') return 'Roastery / Owner';
    if (role === 'admin') return 'Administrator';
    if (coffeeRole === 'barista') return 'Calon Barista';
    if (coffeeRole === 'home_brewer') return 'Home Brewer';
    return 'Learner';
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-2.5 py-1.5 rounded-md border border-paper-300 bg-white hover:border-roast-400 transition-all duration-150 ease-out active:scale-[0.97]"
        title="Ganti Persona Akun Pengujian"
      >
        <img
          src={currentUser.avatar_url}
          alt={currentUser.name}
          className="w-6 h-6 rounded-full object-cover grayscale-25"
        />
        <div className="text-left hidden lg:block">
          <div className="text-xs font-bold text-roast-950 leading-tight truncate max-w-[110px]">
            {currentUser.name.split(' ')[0]}
          </div>
          <div className="text-[10px] font-mono uppercase tracking-wider text-roast-500 leading-none">
            {currentUser.role}
          </div>
        </div>
        <ChevronDown
          className={`w-3.5 h-3.5 text-roast-400 ml-0.5 transition-transform duration-200 ease-out ${
            isOpen ? 'rotate-180 text-roast-700' : ''
          }`}
        />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-paper-50 rounded-xl shadow-elevated border border-paper-300 p-3 z-50 text-left origin-top-right animate-in fade-in zoom-in-95 duration-150 ease-out-strong">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-paper-200">
              <span className="font-mono text-[10px] uppercase tracking-widest text-roast-500 font-bold">
                PILIH PERSONA UJI COBA
              </span>
              <span className="text-[10px] font-mono text-cherry-700 bg-cherry-50 px-2 py-0.5 rounded border border-cherry-200">
                Demo Switcher
              </span>
            </div>

            <p className="text-[11px] text-roast-600 mb-3 leading-relaxed">
              Ganti akun untuk melihat akses kurikulum pembelajar, hak jawab expert, atau mode bursa kerja pemilik cafe:
            </p>

            <div className="space-y-1.5 max-h-[380px] overflow-y-auto pr-1">
              {users.map((user) => {
                const isSelected = user.id === currentUser.id;
                return (
                  <button
                    key={user.id}
                    onClick={() => {
                      switchUser(user.id);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-start gap-3 p-3 rounded-lg text-left transition-colors duration-150 active:scale-[0.98] border ${
                      isSelected
                        ? 'bg-white border-roast-900 shadow-subtle ring-1 ring-roast-900'
                        : 'bg-paper-100/50 border-paper-200 hover:bg-white hover:border-paper-300'
                    }`}
                  >
                    <img
                      src={user.avatar_url}
                      alt={user.name}
                      className="w-8 h-8 rounded-full object-cover shrink-0 mt-0.5"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-xs font-bold text-roast-950 truncate">
                          {user.name}
                        </span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-roast-900 shrink-0" />}
                      </div>
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <span className="font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-paper-200 text-roast-700">
                          {getRoleTag(user.role, user.coffee_role)}
                        </span>
                        <span className="text-[10px] text-roast-500 font-mono">
                          {user.city} • {user.xp_points} XP
                        </span>
                      </div>
                      <p className="text-[11px] text-roast-600 line-clamp-2 leading-relaxed">
                        {user.bio}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
