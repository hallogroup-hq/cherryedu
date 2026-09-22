'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCherryEdu } from '@/lib/store';
import { UserNote } from '@/lib/types';
import { toast } from 'sonner';
import {
  BookOpen,
  Plus,
  Search,
  X,
  Trash2,
  Copy,
  ExternalLink,
  Tag,
  Clock,
  Sparkles,
  Check,
  Edit3,
  FileText,
  CornerDownRight,
  ChevronLeft,
} from 'lucide-react';

interface NotebookDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  defaultNoteId?: string | null;
}

const PRESET_TAGS = ['Umum', 'Seduh', 'Roasting', 'Cupping', 'Espresso', 'Resep', 'Varietas', 'Sains Air'];

export const NotebookDrawer: React.FC<NotebookDrawerProps> = ({
  isOpen,
  onClose,
  defaultNoteId = null,
}) => {
  const pathname = usePathname();
  const {
    currentUser,
    isAuthenticated,
    lessons,
    learningPaths,
    createNote,
    updateNote,
    deleteNote,
    getUserNotes,
  } = useCherryEdu();

  const userNotes = getUserNotes(currentUser.id);

  // Active view: 'list' | 'editor'
  const [activeView, setActiveView] = useState<'list' | 'editor'>('list');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTagFilter, setSelectedTagFilter] = useState<string>('Semua');

  // Editor states
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');
  const [noteTags, setNoteTags] = useState<string[]>(['Umum']);
  const [linkCurrentLesson, setLinkCurrentLesson] = useState<boolean>(true);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Detect current lesson from URL
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
        pathSlug,
        lessonId,
        lessonTitle: activeLesson?.title || 'Materi Pelajaran',
        pathTitle: activePath?.title || 'Jalur Belajar',
        url: pathname,
      };
    }
    if (pathname.startsWith('/tools')) {
      return {
        type: 'tool' as const,
        toolTitle: 'Laboratorium Seduh Digital',
        url: pathname,
      };
    }
    return null;
  }, [pathname, lessons, learningPaths]);

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

  // Handle opening with defaultNoteId
  useEffect(() => {
    if (isOpen && defaultNoteId) {
      const found = userNotes.find((n) => n.id === defaultNoteId);
      if (found) {
        startEditNote(found);
      }
    }
  }, [isOpen, defaultNoteId]);

  const startNewNote = () => {
    setEditingNoteId(null);
    if (currentContext?.type === 'lesson') {
      setNoteTitle(`Catatan: ${currentContext.lessonTitle}`);
      setNoteTags(['Seduh']);
    } else if (currentContext?.type === 'tool') {
      setNoteTitle('Catatan Eksperimen Seduh');
      setNoteTags(['Resep', 'Seduh']);
    } else {
      setNoteTitle('');
      setNoteTags(['Umum']);
    }
    setNoteContent('');
    setLinkCurrentLesson(Boolean(currentContext?.type === 'lesson'));
    setActiveView('editor');
  };

  const startEditNote = (note: UserNote) => {
    setEditingNoteId(note.id);
    setNoteTitle(note.title);
    setNoteContent(note.content);
    setNoteTags(note.tags && note.tags.length > 0 ? note.tags : ['Umum']);
    setLinkCurrentLesson(Boolean(note.lesson_id));
    setActiveView('editor');
  };

  const handleSaveNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!noteTitle.trim() && !noteContent.trim()) {
      toast.error('Judul atau isi catatan tidak boleh kosong.');
      return;
    }

    if (editingNoteId) {
      // Update existing
      updateNote(editingNoteId, {
        title: noteTitle.trim() || 'Catatan Tanpa Judul',
        content: noteContent,
        tags: noteTags,
      });
      toast.success('Catatan berhasil diperbarui!');
    } else {
      // Create new
      createNote({
        title: noteTitle.trim() || 'Catatan Baru',
        content: noteContent,
        tags: noteTags,
        lesson_id: linkCurrentLesson && currentContext?.type === 'lesson' ? currentContext.lessonId : undefined,
        lesson_title: linkCurrentLesson && currentContext?.type === 'lesson' ? currentContext.lessonTitle : undefined,
        path_slug: linkCurrentLesson && currentContext?.type === 'lesson' ? currentContext.pathSlug : undefined,
        source_url: pathname,
      });
      toast.success('Catatan berhasil disimpan ke akun Anda!');
    }

    setActiveView('list');
    setEditingNoteId(null);
  };

  const handleDelete = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (confirm('Hapus catatan ini secara permanen?')) {
      deleteNote(id);
      toast.success('Catatan telah dihapus.');
      if (editingNoteId === id) {
        setActiveView('list');
        setEditingNoteId(null);
      }
    }
  };

  const handleCopyNote = (note: UserNote, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const textToCopy = `${note.title}\n\n${note.content}${note.lesson_title ? `\n\n(Terkait materi: ${note.lesson_title})` : ''}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(note.id);
    toast.success('Isi catatan disalin ke papan klip!');
    setTimeout(() => setCopiedId(null), 2000);
  };

  const toggleTag = (tag: string) => {
    setNoteTags((prev) =>
      prev.includes(tag) ? (prev.length > 1 ? prev.filter((t) => t !== tag) : prev) : [...prev, tag]
    );
  };

  // Filter notes
  const filteredNotes = useMemo(() => {
    return userNotes.filter((note) => {
      const matchQuery =
        note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (note.lesson_title && note.lesson_title.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchTag =
        selectedTagFilter === 'Semua' || (note.tags && note.tags.includes(selectedTagFilter));
      return matchQuery && matchTag;
    });
  }, [userNotes, searchQuery, selectedTagFilter]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
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
              <div className="w-9 h-9 rounded-xl bg-cherry-900/80 border border-cherry-700/60 flex items-center justify-center text-cherry-300 shadow-xs">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-serif font-bold text-base text-white tracking-tight">
                    Buku Catatan Barista
                  </h3>
                  <span className="px-2 py-0.5 rounded-full bg-cherry-950 text-cherry-300 border border-cherry-800 font-mono text-[10px] font-bold">
                    {userNotes.length}
                  </span>
                </div>
                <p className="font-mono text-[10px] text-roast-400">
                  {currentUser.name || 'Rekan Barista'} • Terenkripsi per Akun
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-roast-400 hover:text-white hover:bg-roast-900 transition-colors"
              aria-label="Tutup Catatan"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Guest Notice (if not logged in) */}
          {!isAuthenticated && (
            <div className="bg-amber-50 border-b border-amber-200 px-4 py-2 text-xs text-amber-900 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                <span className="text-[11px]">
                  Mode Tamu: Catatan disimpan di browser ini. Masuk agar tersimpan di akun Anda.
                </span>
              </div>
              <Link
                href="/login"
                className="font-bold text-[11px] underline underline-offset-2 hover:text-amber-950 shrink-0 ml-2"
              >
                Masuk
              </Link>
            </div>
          )}

          {/* Navigation Bar / View Switcher */}
          <div className="bg-paper-100 border-b border-paper-300 px-4 py-2.5 flex items-center justify-between gap-2">
            {activeView === 'editor' ? (
              <div className="flex items-center justify-between w-full">
                <button
                  type="button"
                  onClick={() => setActiveView('list')}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-roast-700 hover:text-roast-950 font-bold transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Daftar Catatan</span>
                </button>
                <span className="text-xs font-mono text-roast-500 uppercase">
                  {editingNoteId ? 'Edit Catatan' : 'Catatan Baru'}
                </span>
              </div>
            ) : (
              <div className="flex items-center justify-between w-full gap-2">
                <div className="relative flex-1">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-roast-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Cari judul, tag, materi..."
                    className="w-full bg-white border border-paper-300 rounded-lg pl-8 pr-3 py-1.5 text-xs font-sans text-roast-900 placeholder:text-roast-400 focus:outline-none focus:ring-1 focus:ring-cherry-700"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-roast-400 hover:text-roast-700 text-xs"
                    >
                      ×
                    </button>
                  )}
                </div>

                <button
                  type="button"
                  onClick={startNewNote}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-roast-950 hover:bg-cherry-900 text-white font-mono text-xs font-bold transition-all shadow-xs shrink-0"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Catatan Baru</span>
                </button>
              </div>
            )}
          </div>

          {/* Main Content Area */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5">
            {activeView === 'editor' ? (
              /* EDITOR FORM */
              <form onSubmit={handleSaveNote} className="space-y-4">
                {/* Active Context Banner */}
                {currentContext?.type === 'lesson' && (
                  <div className="p-3 rounded-lg bg-paper-100 border border-paper-300 text-xs text-roast-800 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-cherry-800 font-bold uppercase tracking-wider flex items-center gap-1">
                        <CornerDownRight className="w-3 h-3 text-cherry-700" />
                        Tautan Materi Saat Ini
                      </span>
                      <label className="flex items-center gap-1.5 text-[11px] font-mono cursor-pointer">
                        <input
                          type="checkbox"
                          checked={linkCurrentLesson}
                          onChange={(e) => setLinkCurrentLesson(e.target.checked)}
                          className="rounded border-paper-400 text-cherry-700 focus:ring-cherry-600"
                        />
                        <span>Tautkan ke materi ini</span>
                      </label>
                    </div>
                    <div className="font-serif font-bold text-roast-950 text-xs">
                      {currentContext.lessonTitle}
                    </div>
                    <div className="text-[10px] text-roast-500 font-mono">
                      Jalur: {currentContext.pathTitle}
                    </div>
                  </div>
                )}

                {/* Title Input */}
                <div>
                  <label className="block text-[11px] font-mono uppercase text-roast-600 font-bold mb-1">
                    Judul Catatan
                  </label>
                  <input
                    type="text"
                    value={noteTitle}
                    onChange={(e) => setNoteTitle(e.target.value)}
                    placeholder="Contoh: Rasio Seduh V60 Gayo Anaerob..."
                    required
                    className="w-full bg-white border border-paper-300 rounded-lg px-3.5 py-2 text-sm font-sans text-roast-950 font-semibold focus:outline-none focus:ring-2 focus:ring-cherry-700 focus:border-transparent"
                  />
                </div>

                {/* Tag Selection */}
                <div>
                  <label className="block text-[11px] font-mono uppercase text-roast-600 font-bold mb-1.5">
                    Kategori / Tag
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {PRESET_TAGS.map((tag) => {
                      const isSelected = noteTags.includes(tag);
                      return (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => toggleTag(tag)}
                          className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-all ${
                            isSelected
                              ? 'bg-cherry-900 text-white font-bold shadow-xs'
                              : 'bg-paper-100 text-roast-700 border border-paper-300 hover:border-roast-700'
                          }`}
                        >
                          {isSelected ? '✓ ' : '+ '}
                          {tag}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Content Textarea */}
                <div>
                  <label className="block text-[11px] font-mono uppercase text-roast-600 font-bold mb-1">
                    Isi Catatan & Resep
                  </label>
                  <textarea
                    value={noteContent}
                    onChange={(e) => setNoteContent(e.target.value)}
                    placeholder="Tuliskan rasio seduh, rasa yang muncul, catatan suhu air, atau ringkasan materi di sini..."
                    rows={10}
                    className="w-full bg-white border border-paper-300 rounded-lg p-3 text-xs sm:text-sm font-sans text-roast-900 leading-relaxed focus:outline-none focus:ring-2 focus:ring-cherry-700 focus:border-transparent resize-y"
                  />
                  <div className="flex items-center justify-between text-[10px] font-mono text-roast-400 mt-1">
                    <span>Mendukung teks catatan bebas dan poin list.</span>
                    <span>{noteContent.length} karakter</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex items-center justify-between gap-3 border-t border-paper-200">
                  <div className="flex items-center gap-2">
                    {editingNoteId && (
                      <button
                        type="button"
                        onClick={() => handleDelete(editingNoteId)}
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-rose-700 hover:bg-rose-50 text-xs font-mono transition-colors"
                        title="Hapus Catatan"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Hapus</span>
                      </button>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveView('list')}
                      className="px-4 py-2 rounded-lg border border-paper-300 bg-white hover:bg-paper-100 text-roast-700 text-xs font-mono font-bold transition-colors"
                    >
                      Batal
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 rounded-lg bg-roast-950 hover:bg-cherry-900 text-white text-xs font-mono font-bold transition-all shadow-md active:scale-95"
                    >
                      {editingNoteId ? 'Perbarui Catatan' : 'Simpan Catatan'}
                    </button>
                  </div>
                </div>
              </form>
            ) : (
              /* LIST VIEW */
              <div className="space-y-4">
                {/* Tag Filters */}
                {userNotes.length > 0 && (
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none font-mono text-[11px]">
                    {['Semua', ...PRESET_TAGS].map((t) => (
                      <button
                        key={t}
                        onClick={() => setSelectedTagFilter(t)}
                        className={`px-2.5 py-1 rounded-full whitespace-nowrap transition-colors ${
                          selectedTagFilter === t
                            ? 'bg-roast-900 text-white font-bold'
                            : 'bg-paper-100 text-roast-600 hover:bg-paper-200 border border-paper-300'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                )}

                {/* Notes List */}
                {filteredNotes.length === 0 ? (
                  <div className="text-center py-12 px-4">
                    <div className="w-14 h-14 rounded-2xl bg-paper-100 border border-paper-300 text-roast-400 flex items-center justify-center mx-auto mb-3 shadow-xs">
                      <FileText className="w-7 h-7" />
                    </div>
                    <h4 className="font-serif font-bold text-base text-roast-900 mb-1">
                      {searchQuery || selectedTagFilter !== 'Semua'
                        ? 'Tidak Ada Catatan yang Cocok'
                        : 'Belum Ada Catatan'}
                    </h4>
                    <p className="text-xs text-roast-600 max-w-xs mx-auto leading-relaxed mb-5">
                      {searchQuery || selectedTagFilter !== 'Semua'
                        ? 'Coba gunakan kata kunci pencarian lain atau pilih filter kategori yang berbeda.'
                        : 'Gunakan buku catatan ini untuk merangkum materi seduh, resep dial-in espresso, atau profil cupping Anda.'}
                    </p>
                    <button
                      onClick={startNewNote}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-roast-950 hover:bg-cherry-900 text-white text-xs font-mono font-bold shadow-md transition-all active:scale-95"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Mulai Tulis Catatan Pertama</span>
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {filteredNotes.map((note) => {
                      const noteDate = new Date(note.updated_at || note.created_at);
                      const formattedDate = noteDate.toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      });

                      return (
                        <div
                          key={note.id}
                          onClick={() => startEditNote(note)}
                          className="group relative bg-white border border-paper-300 hover:border-roast-800 rounded-xl p-4 transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer text-left"
                        >
                          <div className="flex items-start justify-between gap-3 mb-1.5">
                            <h4 className="font-serif font-bold text-sm text-roast-950 group-hover:text-cherry-800 transition-colors line-clamp-1">
                              {note.title}
                            </h4>
                            <div className="flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
                              <button
                                type="button"
                                onClick={(e) => handleCopyNote(note, e)}
                                className="p-1 rounded hover:bg-paper-100 text-roast-500 hover:text-roast-800"
                                title="Salin Catatan"
                              >
                                {copiedId === note.id ? (
                                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                                ) : (
                                  <Copy className="w-3.5 h-3.5" />
                                )}
                              </button>
                              <button
                                type="button"
                                onClick={(e) => handleDelete(note.id, e)}
                                className="p-1 rounded hover:bg-rose-50 text-roast-400 hover:text-rose-600"
                                title="Hapus Catatan"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>

                          <p className="text-xs text-roast-700 line-clamp-2 leading-relaxed mb-3 font-sans">
                            {note.content || '(Catatan kosong)'}
                          </p>

                          {/* Metadata row */}
                          <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-roast-500 pt-2 border-t border-paper-100">
                            <div className="flex flex-wrap items-center gap-1.5">
                              {note.tags?.map((t) => (
                                <span
                                  key={t}
                                  className="px-2 py-0.5 rounded bg-paper-100 text-roast-700 border border-paper-200"
                                >
                                  {t}
                                </span>
                              ))}
                              {note.lesson_title && (
                                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-cherry-50 text-cherry-800 border border-cherry-200 font-bold truncate max-w-[150px]">
                                  <ExternalLink className="w-2.5 h-2.5 shrink-0" />
                                  <span className="truncate">{note.lesson_title}</span>
                                </span>
                              )}
                            </div>

                            <span className="flex items-center gap-1 text-roast-400 shrink-0">
                              <Clock className="w-2.5 h-2.5" />
                              <span>{formattedDate}</span>
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Footer Info */}
          <div className="bg-paper-100 border-t border-paper-300 px-4 py-2.5 text-center text-[10px] font-mono text-roast-500 flex items-center justify-between">
            <span>CherryEdu Barista Notebook</span>
            <Link
              href="/profile?tab=notes"
              onClick={onClose}
              className="text-cherry-800 hover:text-cherry-950 font-bold underline underline-offset-2 flex items-center gap-1"
            >
              <span>Buka di Profil</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
