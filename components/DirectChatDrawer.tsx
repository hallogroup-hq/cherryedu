'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { useCherryEdu } from '@/lib/store';
import { toast } from 'sonner';
import {
  MessageSquare,
  X,
  Send,
  CornerDownRight,
  ShieldCheck,
} from 'lucide-react';

interface DirectChatDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DirectChatDrawer: React.FC<DirectChatDrawerProps> = ({
  isOpen,
  onClose,
}) => {
  const pathname = usePathname();
  const {
    currentUser,
    lessons,
    learningPaths,
    getConversationMessages,
    sendUserChatMessage,
    markConversationRead,
  } = useCherryEdu();

  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Active messages in current conversation
  const messages = getConversationMessages(currentUser.id);

  // Mark messages as read when drawer is open
  useEffect(() => {
    if (isOpen) {
      markConversationRead(currentUser.id, false);
    }
  }, [isOpen, currentUser.id, messages.length]);

  // Detect current lesson context
  const currentContext = useMemo(() => {
    if (!pathname) return null;
    const lessonMatch = pathname.match(/\/paths\/([^\/]+)\/lessons\/([^\/]+)/);
    if (lessonMatch) {
      const pathSlug = lessonMatch[1];
      const lessonId = lessonMatch[2];
      const activeLesson = lessons.find((l) => l.id === lessonId);
      const activePath = learningPaths.find((p) => p.slug === pathSlug);
      return {
        type: 'lesson' as const,
        lessonTitle: activeLesson?.title || 'Materi Pelajaran',
        pathTitle: activePath?.title || 'Jalur Belajar',
      };
    }
    if (pathname.startsWith('/tools')) {
      return {
        type: 'tool' as const,
        lessonTitle: 'Laboratorium Seduh Digital',
        pathTitle: 'Instrumen Kopi',
      };
    }
    return null;
  }, [pathname, lessons, learningPaths]);

  // Scroll to bottom on new message
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, messages]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const text = inputMessage.trim();
    if (!text) return;

    sendUserChatMessage(
      text,
      currentContext ? `${currentContext.lessonTitle} (${currentContext.pathTitle})` : undefined
    );
    setInputMessage('');
  };

  const handleKeyDownInput = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(e);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden select-none">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-roast-950/60 backdrop-blur-xs transition-opacity animate-fadeIn"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10 pointer-events-none">
        <div className="w-screen max-w-md sm:max-w-lg bg-paper-50 border-l-2 border-roast-900 shadow-2xl flex flex-col pointer-events-auto transform transition ease-in-out duration-300">
          {/* Header */}
          <div className="bg-roast-950 text-paper-50 px-5 py-4 border-b border-roast-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-roast-900 border border-roast-800 flex items-center justify-center text-paper-100 shadow-xs">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-serif font-bold text-base text-white tracking-tight">
                    Chat Tim Admin CherryEdu
                  </h3>
                  <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 font-mono text-[10px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Online
                  </span>
                </div>
                <p className="font-mono text-[10px] text-roast-400">
                  Konsultasi Kurikulum & Bantuan Teknis
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-roast-400 hover:text-white hover:bg-roast-900 transition-colors"
              aria-label="Tutup Percakapan"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Context Banner */}
          {currentContext && (
            <div className="bg-paper-100 border-b border-paper-300 px-4 py-2 text-xs text-roast-800 flex items-center justify-between">
              <div className="flex items-center gap-1.5 truncate">
                <CornerDownRight className="w-3.5 h-3.5 text-cherry-800 shrink-0" />
                <span className="font-mono text-[10px] uppercase text-roast-500 font-bold shrink-0">
                  Konteks:
                </span>
                <span className="font-serif font-bold text-roast-950 truncate text-[11px]">
                  {currentContext.lessonTitle}
                </span>
              </div>
              <span className="font-mono text-[10px] text-roast-500 shrink-0 ml-2">
                Otomatis Terlampir
              </span>
            </div>
          )}

          {/* Message Thread */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3 select-text">
            {/* Standard Welcome System Message */}
            <div className="bg-white border border-paper-300 rounded-xl p-3.5 text-xs text-roast-800 space-y-1 shadow-2xs">
              <div className="flex items-center justify-between font-mono text-[10px] text-roast-500 pb-1 border-b border-paper-200">
                <span className="font-bold uppercase flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-700" />
                  Tim Kurator CherryEdu
                </span>
                <span>Pesan Resmi</span>
              </div>
              <p className="font-sans leading-relaxed pt-1">
                Halo {currentUser.name || 'Rekan Barista'}! Silakan sampaikan pertanyaan seputar kurikulum, sertifikasi, konsultasi seduh, atau kendala platform Anda. Admin kami akan menjawab langsung melalui thread ini.
              </p>
            </div>

            {/* Conversation Messages */}
            {messages.map((msg) => {
              const isUser = msg.sender_role === 'user';
              const msgTime = new Date(msg.created_at).toLocaleTimeString('id-ID', {
                hour: '2-digit',
                minute: '2-digit',
              });

              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} space-y-1`}
                >
                  <div className="flex items-center gap-2 text-[10px] font-mono text-roast-500 px-1">
                    <span>{isUser ? 'Anda' : msg.sender_name}</span>
                    <span>•</span>
                    <span>{msgTime}</span>
                  </div>

                  <div
                    className={`max-w-[85%] rounded-2xl p-3.5 text-xs font-sans leading-relaxed shadow-xs ${
                      isUser
                        ? 'bg-roast-950 text-paper-50 rounded-tr-none'
                        : 'bg-white border border-paper-300 text-roast-950 rounded-tl-none'
                    }`}
                  >
                    {msg.page_context && (
                      <div
                        className={`mb-1.5 pb-1.5 text-[10px] font-mono border-b ${
                          isUser
                            ? 'border-roast-800 text-roast-400'
                            : 'border-paper-200 text-roast-500'
                        }`}
                      >
                        Terkait: {msg.page_context}
                      </div>
                    )}
                    <p className="whitespace-pre-wrap">{msg.message}</p>
                  </div>
                </div>
              );
            })}

            <div ref={messagesEndRef} />
          </div>

          {/* Message Input Footer */}
          <div className="bg-paper-100 border-t border-paper-300 p-3 sm:p-4">
            <form onSubmit={handleSendMessage} className="space-y-2">
              <div className="relative bg-white border border-paper-300 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-roast-950 focus-within:border-transparent">
                <textarea
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={handleKeyDownInput}
                  placeholder="Ketik pesan Anda untuk admin... (Tekan Enter untuk kirim)"
                  rows={3}
                  className="w-full p-3 text-xs sm:text-sm font-sans text-roast-950 placeholder:text-roast-400 focus:outline-none resize-none leading-relaxed"
                />

                <div className="px-3 py-2 bg-paper-50 border-t border-paper-200 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-roast-400">
                    Shift + Enter untuk baris baru
                  </span>

                  <button
                    type="submit"
                    disabled={!inputMessage.trim()}
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-roast-950 hover:bg-cherry-900 disabled:opacity-40 disabled:hover:bg-roast-950 text-white font-mono text-xs font-bold transition-all shadow-xs"
                  >
                    <span>Kirim</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
