'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useCherryEdu } from '@/lib/store';
import { Lesson, BrewRecipe } from '@/lib/types';
import {
  Plus,
  GripVertical,
  Type,
  Image as ImageIcon,
  Video,
  Quote,
  AlertCircle,
  Minus,
  Eye,
  Save,
  Clock,
  Circle,
  CheckCircle2,
  Trash2,
  X,
  BookOpen,
  Filter,
  ExternalLink,
  Sparkles,
  Coffee,
  Code2,
} from 'lucide-react';

type BlockType = 'text' | 'heading' | 'image' | 'video' | 'quote' | 'callout' | 'divider';

interface Block {
  id: string;
  type: BlockType;
  content: Record<string, string>;
}

const blockTypes = [
  { type: 'text' as BlockType, label: 'Paragraf Teks', icon: Type },
  { type: 'heading' as BlockType, label: 'Judul / Subheading', icon: Type },
  { type: 'image' as BlockType, label: 'Gambar / Diagram', icon: ImageIcon },
  { type: 'video' as BlockType, label: 'Video Pembelajaran', icon: Video },
  { type: 'quote' as BlockType, label: 'Quote Wawasan', icon: Quote },
  { type: 'callout' as BlockType, label: 'Kotak Catatan (Callout)', icon: AlertCircle },
  { type: 'divider' as BlockType, label: 'Garis Pemisah', icon: Minus },
];

const defaultBlock = (type: BlockType): Block => ({
  id: Math.random().toString(36).slice(2),
  type,
  content:
    type === 'text'
      ? { text: '' }
      : type === 'heading'
      ? { text: '', level: 'h2' }
      : type === 'image'
      ? { url: '', caption: '', alt: '' }
      : type === 'video'
      ? { url: '', caption: '' }
      : type === 'quote'
      ? { text: '', author: '' }
      : type === 'callout'
      ? { text: '', variant: 'tip' }
      : {},
});

// Helper to convert markdown content into editable blocks
function parseContentToBlocks(content: string): Block[] {
  if (!content || !content.trim()) {
    return [defaultBlock('text')];
  }

  const sections = content.split(/\n{2,}/);
  const result: Block[] = [];

  for (const rawSec of sections) {
    const sec = rawSec.trim();
    if (!sec) continue;

    if (sec.startsWith('### ')) {
      result.push({
        id: Math.random().toString(36).slice(2),
        type: 'heading',
        content: { text: sec.replace(/^###\s+/, ''), level: 'h3' },
      });
    } else if (sec.startsWith('## ')) {
      result.push({
        id: Math.random().toString(36).slice(2),
        type: 'heading',
        content: { text: sec.replace(/^##\s+/, ''), level: 'h2' },
      });
    } else if (sec.startsWith('# ')) {
      result.push({
        id: Math.random().toString(36).slice(2),
        type: 'heading',
        content: { text: sec.replace(/^#\s+/, ''), level: 'h1' },
      });
    } else if (sec.startsWith('> [!')) {
      const match = sec.match(/^>\s*\[!(\w+)\]\s*([\s\S]*)$/i);
      const variant = match ? match[1].toLowerCase() : 'tip';
      const text = match ? match[2].trim() : sec.replace(/^>\s*/gm, '');
      result.push({
        id: Math.random().toString(36).slice(2),
        type: 'callout',
        content: { text, variant },
      });
    } else if (sec.startsWith('> ')) {
      const text = sec.replace(/^>\s*/gm, '');
      result.push({
        id: Math.random().toString(36).slice(2),
        type: 'quote',
        content: { text, author: '' },
      });
    } else if (sec === '---') {
      result.push({
        id: Math.random().toString(36).slice(2),
        type: 'divider',
        content: {},
      });
    } else {
      result.push({
        id: Math.random().toString(36).slice(2),
        type: 'text',
        content: { text: sec },
      });
    }
  }

  return result.length > 0 ? result : [defaultBlock('text')];
}

// Helper to compile blocks back into markdown
function compileBlocksToMarkdown(blocks: Block[]): string {
  return blocks
    .map((b) => {
      switch (b.type) {
        case 'heading': {
          const level = b.content.level === 'h1' ? '#' : b.content.level === 'h3' ? '###' : '##';
          return `${level} ${b.content.text || ''}`;
        }
        case 'quote': {
          return `> ${b.content.text || ''}${b.content.author ? `\n> — *${b.content.author}*` : ''}`;
        }
        case 'callout': {
          const tag = (b.content.variant || 'NOTE').toUpperCase();
          return `> [!${tag}]\n> ${b.content.text || ''}`;
        }
        case 'image': {
          if (!b.content.url) return '';
          return `![${b.content.alt || b.content.caption || 'Gambar'}](${b.content.url})\n*${b.content.caption || ''}*`;
        }
        case 'video': {
          if (!b.content.url) return '';
          return `[Video: ${b.content.caption || 'Tonton Video'}](${b.content.url})`;
        }
        case 'divider': {
          return '---';
        }
        case 'text':
        default: {
          return b.content.text || '';
        }
      }
    })
    .filter(Boolean)
    .join('\n\n');
}

function BlockEditor({
  block,
  onChange,
  onDelete,
}: {
  block: Block;
  onChange: (b: Block) => void;
  onDelete: () => void;
}) {
  const updateContent = (key: string, value: string) => {
    onChange({ ...block, content: { ...block.content, [key]: value } });
  };

  return (
    <div className="group relative border border-paper-200 rounded-xl bg-white hover:border-roast-300 transition-colors shadow-subtle">
      <div className="flex items-start gap-2 p-4">
        <GripVertical className="w-4 h-4 text-roast-300 mt-1 cursor-grab shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="flex-1 min-w-0">
          <p className="font-mono text-[9px] uppercase tracking-widest text-roast-400 mb-2 flex items-center gap-1 font-bold">
            {blockTypes.find((b) => b.type === block.type)?.label}
          </p>

          {block.type === 'text' && (
            <textarea
              value={block.content.text || ''}
              onChange={(e) => updateContent('text', e.target.value)}
              placeholder="Tulis materi atau paragraf di sini..."
              rows={4}
              className="w-full text-xs sm:text-sm text-roast-900 resize-none border-none outline-none bg-transparent leading-relaxed placeholder:text-roast-300 font-sans"
            />
          )}

          {block.type === 'heading' && (
            <div className="space-y-2">
              <select
                value={block.content.level || 'h2'}
                onChange={(e) => updateContent('level', e.target.value)}
                className="text-[10px] font-mono border border-paper-200 rounded px-2 py-1 text-roast-600 bg-paper-50"
              >
                <option value="h1">H1 — Judul Bab Besar</option>
                <option value="h2">H2 — Subjudul Pokok</option>
                <option value="h3">H3 — Heading Poin</option>
              </select>
              <input
                value={block.content.text || ''}
                onChange={(e) => updateContent('text', e.target.value)}
                placeholder="Tulis judul bagian..."
                className={`w-full border-none outline-none bg-transparent text-roast-950 placeholder:text-roast-300 ${
                  block.content.level === 'h1'
                    ? 'text-2xl font-black font-serif'
                    : block.content.level === 'h2'
                    ? 'text-xl font-bold font-serif'
                    : 'text-base font-semibold'
                }`}
              />
            </div>
          )}

          {block.type === 'image' && (
            <div className="space-y-2">
              {block.content.url ? (
                <div className="relative rounded-lg overflow-hidden border border-paper-200 max-h-56 bg-paper-100 flex items-center justify-center">
                  <img
                    src={block.content.url}
                    alt={block.content.alt || ''}
                    className="max-h-56 object-contain"
                  />
                </div>
              ) : (
                <div className="border-2 border-dashed border-paper-300 rounded-lg p-6 text-center bg-paper-50">
                  <ImageIcon className="w-8 h-8 text-roast-300 mx-auto mb-1.5" />
                  <p className="text-xs text-roast-500 font-medium">Masukkan URL Gambar atau Unggah</p>
                </div>
              )}
              <input
                value={block.content.url || ''}
                onChange={(e) => updateContent('url', e.target.value)}
                placeholder="URL Gambar (https://...)..."
                className="w-full text-xs border border-paper-200 rounded p-2 focus:outline-none focus:border-roast-400 font-mono"
              />
              <input
                value={block.content.caption || ''}
                onChange={(e) => updateContent('caption', e.target.value)}
                placeholder="Keterangan / Caption Gambar..."
                className="w-full text-xs border border-paper-200 rounded p-2 focus:outline-none focus:border-roast-400"
              />
            </div>
          )}

          {block.type === 'video' && (
            <div className="space-y-2">
              <div className="border border-paper-200 rounded-lg p-3 bg-paper-50 flex items-center gap-2">
                <Video className="w-4 h-4 text-cherry-700 shrink-0" />
                <span className="text-xs font-mono text-roast-600">Video Embed / URL Video Materi</span>
              </div>
              <input
                value={block.content.url || ''}
                onChange={(e) => updateContent('url', e.target.value)}
                placeholder="URL Video (YouTube, Vimeo, atau MP4 Supabase Storage)..."
                className="w-full text-xs border border-paper-200 rounded p-2 focus:outline-none focus:border-roast-400 font-mono"
              />
              <input
                value={block.content.caption || ''}
                onChange={(e) => updateContent('caption', e.target.value)}
                placeholder="Keterangan singkat video..."
                className="w-full text-xs border border-paper-200 rounded p-2 focus:outline-none focus:border-roast-400"
              />
            </div>
          )}

          {block.type === 'quote' && (
            <div className="space-y-2">
              <textarea
                value={block.content.text || ''}
                onChange={(e) => updateContent('text', e.target.value)}
                placeholder="Kutipan perkataan instruktur atau prinsip kunci..."
                rows={3}
                className="w-full text-xs sm:text-sm italic text-roast-800 resize-none border-none outline-none bg-transparent pl-4 border-l-4 border-cherry-700 leading-relaxed placeholder:text-roast-300 font-serif"
              />
              <input
                value={block.content.author || ''}
                onChange={(e) => updateContent('author', e.target.value)}
                placeholder="— Sumber / Nama Instruktur (opsional)"
                className="w-full text-xs border-none outline-none bg-transparent text-roast-400 pl-4 placeholder:text-roast-300 font-mono"
              />
            </div>
          )}

          {block.type === 'callout' && (
            <div className="space-y-2">
              <select
                value={block.content.variant || 'tip'}
                onChange={(e) => updateContent('variant', e.target.value)}
                className="text-[10px] font-mono border border-paper-200 rounded px-2 py-1 text-roast-600 bg-paper-50"
              >
                <option value="tip">💡 TIP — Saran & Praktek Terbaik</option>
                <option value="warning">⚠️ WARNING — Hal yang Harus Dihindari</option>
                <option value="important">📌 IMPORTANT — Standar Mutlak</option>
                <option value="note">ℹ️ NOTE — Catatan Teori</option>
              </select>
              <div
                className={`rounded-lg p-3 ${
                  block.content.variant === 'tip'
                    ? 'bg-emerald-50 border border-emerald-200 text-emerald-900'
                    : block.content.variant === 'warning'
                    ? 'bg-amber-50 border border-amber-200 text-amber-900'
                    : block.content.variant === 'important'
                    ? 'bg-cherry-50 border border-cherry-200 text-cherry-900'
                    : 'bg-blue-50 border border-blue-200 text-blue-900'
                }`}
              >
                <textarea
                  value={block.content.text || ''}
                  onChange={(e) => updateContent('text', e.target.value)}
                  placeholder="Ketik teks catatan callout..."
                  rows={3}
                  className="w-full text-xs resize-none border-none outline-none bg-transparent leading-relaxed placeholder:opacity-50"
                />
              </div>
            </div>
          )}

          {block.type === 'divider' && <hr className="border-t border-paper-300 my-2" />}
        </div>

        <button
          onClick={onDelete}
          className="p-1 rounded hover:bg-rose-50 text-roast-300 hover:text-rose-600 transition-colors opacity-0 group-hover:opacity-100 shrink-0"
          title="Hapus Blok"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

function LessonEditorContent() {
  const searchParams = useSearchParams();
  const { learningPaths, modules, lessons, updateLesson, addLesson } = useCherryEdu();

  // Filters
  const [selectedPathId, setSelectedPathId] = useState<string>(learningPaths[0]?.id || '');
  const pathModules = modules.filter((m) => m.learning_path_id === selectedPathId);
  const [selectedModuleId, setSelectedModuleId] = useState<string>(
    searchParams.get('module') || pathModules[0]?.id || ''
  );

  // Synchronize module selection if path changes
  useEffect(() => {
    if (pathModules.length > 0 && !pathModules.some((m) => m.id === selectedModuleId)) {
      setSelectedModuleId(pathModules[0].id);
    }
  }, [selectedPathId, pathModules]);

  const moduleLessons = lessons.filter((l) => l.module_id === selectedModuleId);
  const [selectedLessonId, setSelectedLessonId] = useState<string>(
    moduleLessons[0]?.id || lessons[0]?.id || ''
  );

  const selectedLesson = lessons.find((l) => l.id === selectedLessonId);

  // Editor states
  const [editorMode, setEditorMode] = useState<'visual' | 'raw'>('visual');
  const [lessonTitle, setLessonTitle] = useState('');
  const [durationMinutes, setDurationMinutes] = useState(15);
  const [lessonStatus, setLessonStatus] = useState<'draft' | 'published'>('published');
  const [videoUrl, setVideoUrl] = useState('');
  const [summary, setSummary] = useState('');
  const [rawMarkdown, setRawMarkdown] = useState('');
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [keyTakeaways, setKeyTakeaways] = useState<string[]>([]);
  const [takeawayInput, setTakeawayInput] = useState('');
  const [brewRecipe, setBrewRecipe] = useState<BrewRecipe | null>(null);

  const [showBlockMenu, setShowBlockMenu] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  // When a lesson is chosen, populate ALL its real data
  useEffect(() => {
    if (selectedLesson) {
      setLessonTitle(selectedLesson.title);
      setDurationMinutes(selectedLesson.duration_minutes || 15);
      setLessonStatus(selectedLesson.is_published ? 'published' : 'draft');
      setVideoUrl(selectedLesson.video_url || '');
      setSummary(selectedLesson.summary || '');
      setKeyTakeaways(selectedLesson.key_takeaways || []);
      setBrewRecipe(selectedLesson.brew_recipe || null);
      setRawMarkdown(selectedLesson.content || '');

      // Parse actual content into blocks
      const parsed = parseContentToBlocks(selectedLesson.content || '');
      setBlocks(parsed);
    }
  }, [selectedLessonId]);

  const handleAddBlock = (type: BlockType) => {
    setBlocks((prev) => [...prev, defaultBlock(type)]);
    setShowBlockMenu(false);
  };

  const handleDeleteBlock = (id: string) => {
    setBlocks((prev) => prev.filter((b) => b.id !== id));
  };

  const handleUpdateBlock = (updatedBlock: Block) => {
    setBlocks((prev) => prev.map((b) => (b.id === updatedBlock.id ? updatedBlock : b)));
  };

  const handleAddTakeaway = () => {
    if (takeawayInput.trim()) {
      setKeyTakeaways([...keyTakeaways, takeawayInput.trim()]);
      setTakeawayInput('');
    }
  };

  const handleRemoveTakeaway = (index: number) => {
    setKeyTakeaways(keyTakeaways.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    if (!selectedLesson) return;
    setIsSaving(true);

    const compiledContent =
      editorMode === 'visual' ? compileBlocksToMarkdown(blocks) : rawMarkdown;

    updateLesson(selectedLesson.id, {
      title: lessonTitle,
      duration_minutes: Number(durationMinutes),
      is_published: lessonStatus === 'published',
      content: compiledContent,
      video_url: videoUrl.trim() ? videoUrl.trim() : undefined,
      summary: summary.trim() ? summary.trim() : undefined,
      key_takeaways: keyTakeaways.length > 0 ? keyTakeaways : undefined,
      brew_recipe: brewRecipe || undefined,
    });

    setTimeout(() => {
      setIsSaving(false);
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 2500);
    }, 400);
  };

  const handleCreateNewLesson = () => {
    const newId = `les-custom-${Date.now()}`;
    const newLesson: Lesson = {
      id: newId,
      module_id: selectedModuleId,
      title: 'Materi Pembelajaran Baru',
      content: '# Judul Materi Baru\n\nTuliskan isi materi kopi di sini.',
      content_type: 'text',
      duration_minutes: 15,
      order_index: moduleLessons.length + 1,
      is_free: true,
      is_published: false,
      created_at: new Date().toISOString(),
    };
    addLesson(newLesson);
    setSelectedLessonId(newId);
  };

  const selectedPath = learningPaths.find((p) => p.id === selectedPathId);

  return (
    <div className="max-w-7xl mx-auto space-y-4">
      {/* Top Filter & Actions Header */}
      <div className="bg-white border border-paper-200 rounded-xl p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-subtle">
        <div className="flex flex-wrap items-center gap-3">
          <div>
            <label className="block font-mono text-[9px] uppercase tracking-wider text-roast-400 font-bold mb-1">
              Learning Path
            </label>
            <select
              value={selectedPathId}
              onChange={(e) => setSelectedPathId(e.target.value)}
              className="text-xs font-semibold border border-paper-200 rounded-lg p-2 bg-paper-50 text-roast-900 focus:outline-none focus:border-roast-400"
            >
              {learningPaths.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-mono text-[9px] uppercase tracking-wider text-roast-400 font-bold mb-1">
              Modul
            </label>
            <select
              value={selectedModuleId}
              onChange={(e) => setSelectedModuleId(e.target.value)}
              className="text-xs font-semibold border border-paper-200 rounded-lg p-2 bg-paper-50 text-roast-900 focus:outline-none focus:border-roast-400 max-w-xs truncate"
            >
              {pathModules.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end md:self-auto">
          {selectedLesson && selectedPath && (
            <Link
              href={`/paths/${selectedPath.slug}/lessons/${selectedLesson.id}`}
              target="_blank"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-mono border border-paper-300 rounded-lg text-roast-700 hover:border-roast-500 bg-paper-50 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-cherry-700" />
              <span>Pratinjau Live Siswa ↗</span>
            </Link>
          )}

          <button
            onClick={handleSave}
            disabled={isSaving}
            className={`flex items-center gap-1.5 px-5 py-2 rounded-lg font-mono text-xs font-bold transition-all shadow-sm ${
              isSaved
                ? 'bg-emerald-600 text-white'
                : 'bg-roast-950 hover:bg-roast-900 text-paper-50'
            }`}
          >
            {isSaved ? (
              <>
                <CheckCircle2 className="w-3.5 h-3.5" />
                Tersimpan di Sistem!
              </>
            ) : isSaving ? (
              'Menyimpan...'
            ) : (
              <>
                <Save className="w-3.5 h-3.5" />
                Simpan Materi
              </>
            )}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[calc(100vh-12rem)]">
        {/* Left Column: Lesson Selector List */}
        <div className="lg:col-span-3 bg-white rounded-xl border border-paper-200 flex flex-col overflow-hidden shadow-subtle">
          <div className="p-3.5 border-b border-paper-100 flex items-center justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-roast-400 font-bold">
                Daftar Materi ({moduleLessons.length})
              </p>
            </div>
            <button
              onClick={handleCreateNewLesson}
              className="flex items-center gap-1 text-[11px] font-mono text-cherry-700 hover:text-cherry-900 font-bold"
            >
              <Plus className="w-3 h-3" />
              Baru
            </button>
          </div>

          <div className="flex-1 overflow-y-auto divide-y divide-paper-100">
            {moduleLessons.map((l, idx) => (
              <button
                key={l.id}
                onClick={() => setSelectedLessonId(l.id)}
                className={`w-full text-left p-3 hover:bg-paper-50 transition-colors flex items-start gap-2.5 ${
                  selectedLessonId === l.id
                    ? 'bg-cherry-50/70 border-l-4 border-l-cherry-700'
                    : ''
                }`}
              >
                <span className="font-mono text-[10px] text-roast-400 mt-0.5 w-4 shrink-0">
                  {idx + 1}.
                </span>
                <div className="flex-1 min-w-0">
                  <p
                    className={`text-xs font-bold leading-snug line-clamp-2 ${
                      selectedLessonId === l.id ? 'text-cherry-950' : 'text-roast-900'
                    }`}
                  >
                    {l.title}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        l.is_published ? 'bg-emerald-500' : 'bg-roast-300'
                      }`}
                    />
                    <span className="font-mono text-[9px] text-roast-400">
                      {l.duration_minutes || 15} Menit
                    </span>
                    {l.brew_recipe && (
                      <span className="font-mono text-[9px] text-cherry-700 font-bold">★ Resep</span>
                    )}
                  </div>
                </div>
              </button>
            ))}

            {moduleLessons.length === 0 && (
              <div className="p-8 text-center text-roast-400">
                <BookOpen className="w-8 h-8 mx-auto mb-2 opacity-30" />
                <p className="text-xs font-mono">Belum ada lesson di modul ini</p>
                <button
                  onClick={handleCreateNewLesson}
                  className="mt-2 text-xs font-mono text-cherry-700 underline"
                >
                  + Tambah Lesson Pertama
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Full Lesson Editor */}
        <div className="lg:col-span-9 space-y-4">
          {selectedLesson ? (
            <>
              {/* Header Settings Bar */}
              <div className="bg-white rounded-xl border border-paper-200 p-5 space-y-4 shadow-subtle">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <label className="block font-mono text-[9px] uppercase tracking-wider text-roast-400 font-bold mb-1">
                      Judul Materi Pembelajaran *
                    </label>
                    <input
                      value={lessonTitle}
                      onChange={(e) => setLessonTitle(e.target.value)}
                      placeholder="Judul Materi..."
                      className="w-full font-serif font-black text-lg text-roast-950 border-b border-paper-300 pb-1.5 bg-transparent focus:outline-none focus:border-roast-950"
                    />
                  </div>

                  <div className="flex items-center gap-3">
                    <div>
                      <label className="block font-mono text-[9px] uppercase tracking-wider text-roast-400 font-bold mb-1">
                        Durasi (Menit)
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="180"
                        value={durationMinutes}
                        onChange={(e) => setDurationMinutes(Number(e.target.value))}
                        className="w-20 text-xs font-mono font-bold border border-paper-200 rounded p-1.5 text-center"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[9px] uppercase tracking-wider text-roast-400 font-bold mb-1">
                        Status Tayang
                      </label>
                      <select
                        value={lessonStatus}
                        onChange={(e) => setLessonStatus(e.target.value as any)}
                        className={`text-xs font-mono font-bold border rounded p-1.5 ${
                          lessonStatus === 'published'
                            ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                            : 'bg-paper-100 border-paper-300 text-roast-600'
                        }`}
                      >
                        <option value="published">● Published</option>
                        <option value="draft">○ Draft</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Summary & Video URL */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block font-mono text-[9px] uppercase tracking-wider text-roast-400 font-bold mb-1">
                      Ringkasan Singkat (Summary Header)
                    </label>
                    <textarea
                      rows={2}
                      value={summary}
                      onChange={(e) => setSummary(e.target.value)}
                      placeholder="Penjelasan singkat 1-2 kalimat untuk pengantar..."
                      className="w-full text-xs border border-paper-200 rounded-lg p-2 focus:outline-none focus:border-roast-400 resize-none"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[9px] uppercase tracking-wider text-roast-400 font-bold mb-1">
                      Selipan Video Materi (Opsional URL)
                    </label>
                    <input
                      value={videoUrl}
                      onChange={(e) => setVideoUrl(e.target.value)}
                      placeholder="https://youtube.com/embed/... atau storage mp4"
                      className="w-full text-xs font-mono border border-paper-200 rounded-lg p-2 focus:outline-none focus:border-roast-400"
                    />
                    <p className="text-[10px] text-roast-400 mt-1">
                      Mendukung tautan embed video YouTube, Vimeo, atau file MP4 dari Supabase Storage.
                    </p>
                  </div>
                </div>

                {/* Key Takeaways */}
                <div>
                  <label className="block font-mono text-[9px] uppercase tracking-wider text-roast-400 font-bold mb-1.5">
                    Poin Kunci / Key Takeaways
                  </label>
                  <div className="flex gap-2 mb-2">
                    <input
                      value={takeawayInput}
                      onChange={(e) => setTakeawayInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTakeaway())}
                      placeholder="Ketik poin penting lalu tekan Enter atau klik Tambah..."
                      className="flex-1 text-xs border border-paper-200 rounded-lg p-2 focus:outline-none focus:border-roast-400"
                    />
                    <button
                      type="button"
                      onClick={handleAddTakeaway}
                      className="px-3 py-1.5 bg-paper-100 border border-paper-200 hover:bg-paper-200 rounded-lg text-xs font-mono font-bold text-roast-700"
                    >
                      Tambah
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {keyTakeaways.map((tk, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-paper-100 border border-paper-200 rounded-md text-xs text-roast-800"
                      >
                        <span>• {tk}</span>
                        <button
                          type="button"
                          onClick={() => handleRemoveTakeaway(idx)}
                          className="text-roast-400 hover:text-rose-600"
                        >
                          ✕
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mode Switcher: Visual Block Editor vs Raw Markdown */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 bg-paper-100 p-1 rounded-lg border border-paper-200">
                  <button
                    onClick={() => {
                      if (editorMode === 'raw') {
                        setBlocks(parseContentToBlocks(rawMarkdown));
                      }
                      setEditorMode('visual');
                    }}
                    className={`px-3 py-1.5 rounded-md text-xs font-mono font-bold transition-colors ${
                      editorMode === 'visual'
                        ? 'bg-white text-roast-950 shadow-sm'
                        : 'text-roast-500 hover:text-roast-900'
                    }`}
                  >
                    Editor Blok Visual (Drag & Drop)
                  </button>
                  <button
                    onClick={() => {
                      if (editorMode === 'visual') {
                        setRawMarkdown(compileBlocksToMarkdown(blocks));
                      }
                      setEditorMode('raw');
                    }}
                    className={`px-3 py-1.5 rounded-md text-xs font-mono font-bold transition-colors ${
                      editorMode === 'raw'
                        ? 'bg-white text-roast-950 shadow-sm'
                        : 'text-roast-500 hover:text-roast-900'
                    }`}
                  >
                    Editor Markdown Lengkap
                  </button>
                </div>
                <span className="font-mono text-[10px] text-roast-400">
                  {editorMode === 'visual'
                    ? `${blocks.length} Blok Konten Aktif`
                    : `${rawMarkdown.length} Karakter`}
                </span>
              </div>

              {/* Editor Workspace */}
              {editorMode === 'visual' ? (
                <div className="space-y-3">
                  {blocks.map((block) => (
                    <BlockEditor
                      key={block.id}
                      block={block}
                      onChange={handleUpdateBlock}
                      onDelete={() => handleDeleteBlock(block.id)}
                    />
                  ))}

                  {/* Add Block Selector */}
                  <div className="relative pt-2">
                    <button
                      type="button"
                      onClick={() => setShowBlockMenu(!showBlockMenu)}
                      className="w-full py-3.5 border-2 border-dashed border-paper-300 hover:border-roast-400 rounded-xl text-xs font-mono font-bold text-roast-500 hover:text-roast-800 transition-colors flex items-center justify-center gap-2 bg-white"
                    >
                      <Plus className="w-4 h-4" />
                      Sisipkan Blok Konten Baru (Teks / Gambar / Video / Quote / Callout)
                    </button>

                    {showBlockMenu && (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white border border-paper-200 rounded-xl shadow-xl p-2.5 grid grid-cols-2 sm:grid-cols-4 gap-2 w-full max-w-lg z-20">
                        {blockTypes.map((bt) => {
                          const Icon = bt.icon;
                          return (
                            <button
                              key={bt.type}
                              type="button"
                              onClick={() => handleAddBlock(bt.type)}
                              className="flex items-center gap-2 p-2 rounded-lg hover:bg-paper-100 text-left transition-colors"
                            >
                              <Icon className="w-4 h-4 text-cherry-700 shrink-0" />
                              <span className="font-mono text-[10px] text-roast-800 font-semibold">
                                {bt.label}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-xl border border-paper-200 p-4 shadow-subtle">
                  <textarea
                    rows={20}
                    value={rawMarkdown}
                    onChange={(e) => setRawMarkdown(e.target.value)}
                    className="w-full font-mono text-xs text-roast-900 leading-relaxed border-none outline-none resize-y p-2"
                    placeholder="Tuliskan format markdown lengkap di sini..."
                  />
                </div>
              )}
            </>
          ) : (
            <div className="bg-white rounded-xl border border-paper-200 p-16 text-center text-roast-400">
              <BookOpen className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p className="font-mono text-sm">Pilih materi pembelajaran dari kolom kiri</p>
              <p className="text-xs text-roast-400 mt-1">
                Seluruh materi di kurikulum dapat langsung diedit di sini.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function LessonEditorPage() {
  return (
    <React.Suspense
      fallback={
        <div className="p-12 text-center font-mono text-xs text-roast-400">
          Memuat Editor Materi Pembelajaran...
        </div>
      }
    >
      <LessonEditorContent />
    </React.Suspense>
  );
}
