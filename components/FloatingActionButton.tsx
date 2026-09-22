'use client';

import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useCherryEdu } from '@/lib/store';
import { NotebookDrawer } from '@/components/NotebookDrawer';
import { DirectChatDrawer } from '@/components/DirectChatDrawer';
import {
  MessageSquare,
  X,
  ChevronRight,
  Coffee,
  PenTool,
} from 'lucide-react';

export const FloatingActionButton: React.FC = () => {
  const pathname = usePathname();
  const { currentUser, getUserNotes, getConversationMessages } = useCherryEdu();
  const [isOpen, setIsOpen] = useState(false);
  const [isNotebookOpen, setIsNotebookOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const userNotes = getUserNotes(currentUser.id);
  const chatMessages = getConversationMessages(currentUser.id);
  const unreadAdminReplies = chatMessages.filter(
    (m) => m.sender_role === 'admin' && !m.is_read
  ).length;

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

  const handleOpenNotebook = () => {
    setIsOpen(false);
    setIsNotebookOpen(true);
  };

  const handleOpenChat = () => {
    setIsOpen(false);
    setIsChatOpen(true);
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
            <div className="px-3 py-2 border-b border-paper-300 flex items-center justify-between font-mono text-[10px] uppercase">
              <span className="text-roast-500 font-bold tracking-wider">
                Menu Akses Cepat
              </span>
              <span className="text-cherry-800 font-bold">
                CherryEdu
              </span>
            </div>

            {/* Option 1: Buku Catatan Barista */}
            <button
              onClick={handleOpenNotebook}
              className="w-full group flex items-center justify-between p-3 rounded-xl bg-white hover:bg-paper-100 border border-paper-200 hover:border-roast-800 transition-all duration-150 text-left shadow-xs hover:shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-roast-950 text-paper-50 flex items-center justify-center shrink-0 shadow-xs group-hover:bg-cherry-950 transition-colors">
                  <PenTool className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-serif font-bold text-sm text-roast-950 group-hover:text-cherry-900 transition-colors">
                      Catatan Belajar
                    </span>
                    {userNotes.length > 0 && (
                      <span className="px-1.5 py-0.2 rounded-full bg-paper-200 text-roast-800 font-mono text-[10px] font-bold">
                        {userNotes.length}
                      </span>
                    )}
                  </div>
                  <p className="font-sans text-[11px] text-roast-600 line-clamp-1">
                    Buku catatan resep & rangkuman materi
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-roast-400 group-hover:text-roast-800 group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
            </button>

            {/* Option 2: Direct Chat Admin di Website */}
            <button
              onClick={handleOpenChat}
              className="w-full group flex items-center justify-between p-3 rounded-xl bg-white hover:bg-paper-100 border border-paper-200 hover:border-roast-800 transition-all duration-150 text-left shadow-xs hover:shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cherry-900 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:bg-cherry-950 transition-colors">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-serif font-bold text-sm text-roast-950 group-hover:text-cherry-900 transition-colors">
                      Chat Tim Admin
                    </span>
                    {unreadAdminReplies > 0 && (
                      <span className="px-1.5 py-0.2 rounded-full bg-cherry-600 text-white font-mono text-[10px] font-bold">
                        {unreadAdminReplies} baru
                      </span>
                    )}
                  </div>
                  <p className="font-sans text-[11px] text-roast-600 line-clamp-1">
                    Layanan bantuan & konsultasi langsung
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-roast-400 group-hover:text-roast-800 group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
            </button>
          </div>
        )}

        {/* Primary FAB Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Tutup menu aksi' : 'Buka menu catatan dan chat admin'}
          className={`relative group flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all duration-200 active:scale-95 border-2 ${
            isOpen
              ? 'bg-roast-950 border-paper-50 text-paper-50'
              : 'bg-roast-950 border-roast-800 hover:bg-cherry-950 text-paper-50 hover:scale-105'
          }`}
        >
          {isOpen ? (
            <X className="w-6 h-6 transition-transform" />
          ) : (
            <div className="relative">
              <Coffee className="w-6 h-6 transition-transform" />
              {(userNotes.length > 0 || unreadAdminReplies > 0) && (
                <span className="absolute -top-1 -right-1.5 w-3.5 h-3.5 bg-cherry-600 text-white font-mono text-[9px] font-bold rounded-full flex items-center justify-center border border-roast-950 shadow-xs">
                  {unreadAdminReplies > 0 ? '!' : (userNotes.length > 9 ? '9+' : userNotes.length)}
                </span>
              )}
            </div>
          )}

          {/* Clean Tooltip on hover (desktop only) when closed */}
          {!isOpen && (
            <span className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-lg bg-roast-950 text-paper-100 text-[11px] font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg border border-roast-800 hidden sm:block">
              Akses Cepat
            </span>
          )}
        </button>
      </div>

      {/* Slide-over Notebook Drawer */}
      <NotebookDrawer
        isOpen={isNotebookOpen}
        onClose={() => setIsNotebookOpen(false)}
      />

      {/* Slide-over Direct Chat Drawer */}
      <DirectChatDrawer
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />
    </>
  );
};
