'use client';

import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useCherryEdu } from '@/lib/store';
import { NotebookDrawer } from '@/components/NotebookDrawer';
import {
  MessageCircle,
  BookOpen,
  X,
  Sparkles,
  ChevronRight,
  Coffee,
  PenTool,
} from 'lucide-react';

const ADMIN_WA_NUMBER = '6281234567890';

export const FloatingActionButton: React.FC = () => {
  const pathname = usePathname();
  const { currentUser, lessons, getUserNotes } = useCherryEdu();
  const [isOpen, setIsOpen] = useState(false);
  const [isNotebookOpen, setIsNotebookOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const userNotes = getUserNotes(currentUser.id);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Hide FAB in admin dashboard
  if (pathname?.startsWith('/admin')) {
    return null;
  }

  // Generate contextual WhatsApp message
  const getWhatsAppUrl = () => {
    const userName = currentUser.name || 'Rekan Barista';
    let contextDetail = '';

    if (pathname?.includes('/lessons/')) {
      const lessonMatch = pathname.match(/\/paths\/[^\/]+\/lessons\/([^\/]+)/);
      if (lessonMatch) {
        const activeLesson = lessons.find((l) => l.id === lessonMatch[1]);
        if (activeLesson) {
          contextDetail = ` seputar materi "${activeLesson.title}"`;
        }
      }
    } else if (pathname?.startsWith('/tools')) {
      contextDetail = ' seputar instrumen laboratorium seduh digital';
    } else if (pathname?.startsWith('/pricing')) {
      contextDetail = ' mengenai paket langganan CherryEdu Pro';
    }

    const message = `Halo Admin CherryEdu, saya ${userName}. Saya ingin bertanya${contextDetail}.\n\n(Tautan halaman: https://edu.cherrycoffeeroastery.com${pathname || ''})`;
    return `https://wa.me/${ADMIN_WA_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  const handleOpenNotebook = () => {
    setIsOpen(false);
    setIsNotebookOpen(true);
  };

  return (
    <>
      {/* Floating Action Button Container */}
      <div
        ref={menuRef}
        className="fixed bottom-6 right-6 z-40 flex flex-col items-end print:hidden select-none"
      >
        {/* Expanded Options Menu */}
        {isOpen && (
          <div className="mb-3 w-72 sm:w-80 bg-paper-50 border-2 border-roast-900 rounded-2xl shadow-2xl p-2.5 space-y-1.5 animate-fadeIn">
            {/* Menu Header */}
            <div className="px-3 py-2 border-b border-paper-300 flex items-center justify-between">
              <span className="font-mono text-[10px] text-roast-500 uppercase tracking-wider font-bold">
                Menu Cepat CherryEdu
              </span>
              <span className="font-mono text-[10px] text-cherry-700 font-semibold">
                Bantuan & Catatan
              </span>
            </div>

            {/* Option 1: Buku Catatan Barista */}
            <button
              onClick={handleOpenNotebook}
              className="w-full group flex items-center justify-between p-3 rounded-xl bg-white hover:bg-paper-100 border border-paper-200 hover:border-roast-800 transition-all duration-150 text-left shadow-xs hover:shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cherry-900 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                  <PenTool className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-serif font-bold text-sm text-roast-950 group-hover:text-cherry-900 transition-colors">
                      Catatan Belajar
                    </span>
                    {userNotes.length > 0 && (
                      <span className="px-1.5 py-0.2 rounded-full bg-cherry-100 text-cherry-900 font-mono text-[10px] font-bold">
                        {userNotes.length}
                      </span>
                    )}
                  </div>
                  <p className="font-sans text-[11px] text-roast-600 line-clamp-1">
                    Buka notebook, resep & ringkasan materi
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-roast-400 group-hover:text-roast-800 group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
            </button>

            {/* Option 2: Chat Admin WhatsApp */}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full group flex items-center justify-between p-3 rounded-xl bg-white hover:bg-emerald-50/50 border border-paper-200 hover:border-emerald-600/70 transition-all duration-150 text-left shadow-xs hover:shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-4 h-4 fill-current" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-serif font-bold text-sm text-roast-950 group-hover:text-emerald-900 transition-colors">
                      Chat Admin
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <p className="font-sans text-[11px] text-roast-600 line-clamp-1">
                    Konsultasi & bantuan via WhatsApp
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-roast-400 group-hover:text-emerald-700 group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
            </a>
          </div>
        )}

        {/* Primary FAB Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Tutup menu aksi' : 'Buka menu catatan dan chat admin'}
          className={`relative group flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all duration-200 active:scale-90 border-2 ${
            isOpen
              ? 'bg-roast-950 border-paper-50 text-paper-50 rotate-90'
              : 'bg-gradient-to-br from-cherry-900 via-roast-950 to-roast-900 border-crema-300/40 text-crema-100 hover:scale-105 shadow-cherry-950/40'
          }`}
        >
          {isOpen ? (
            <X className="w-6 h-6 transition-transform" />
          ) : (
            <>
              <div className="relative">
                <Coffee className="w-6 h-6 transition-transform group-hover:rotate-12" />
                {userNotes.length > 0 && (
                  <span className="absolute -top-1 -right-1.5 w-3.5 h-3.5 bg-cherry-500 text-white font-mono text-[9px] font-black rounded-full flex items-center justify-center border border-roast-950 shadow-xs">
                    {userNotes.length > 9 ? '9+' : userNotes.length}
                  </span>
                )}
              </div>
            </>
          )}

          {/* Tooltip on hover (desktop only) when closed */}
          {!isOpen && (
            <span className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-lg bg-roast-950 text-paper-100 text-[11px] font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg border border-roast-800 hidden sm:block">
              Catatan & Bantuan
            </span>
          )}
        </button>
      </div>

      {/* Slide-over Notebook Drawer */}
      <NotebookDrawer
        isOpen={isNotebookOpen}
        onClose={() => setIsNotebookOpen(false)}
      />
    </>
  );
};
