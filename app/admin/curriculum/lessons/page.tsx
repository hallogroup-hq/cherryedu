'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useCherryEdu } from '@/lib/store';
import {
  Plus,
  GripVertical,
  Type,
  Image,
  Video,
  Quote,
  AlertCircle,
  Minus,
  Link2,
  Eye,
  Save,
  ArrowLeft,
  ChevronDown,
  BookOpen,
  Clock,
  Circle,
  CheckCircle2,
  Trash2,
  X,
} from 'lucide-react';

type BlockType = 'text' | 'heading' | 'image' | 'video' | 'quote' | 'callout' | 'divider';

interface Block {
  id: string;
  type: BlockType;
  content: Record<string, string>;
}

const blockTypes = [
  { type: 'text' as BlockType, label: 'Paragraf', icon: Type },
  { type: 'heading' as BlockType, label: 'Judul', icon: Type },
  { type: 'image' as BlockType, label: 'Gambar', icon: Image },
  { type: 'video' as BlockType, label: 'Video', icon: Video },
  { type: 'quote' as BlockType, label: 'Quote', icon: Quote },
  { type: 'callout' as BlockType, label: 'Callout', icon: AlertCircle },
  { type: 'divider' as BlockType, label: 'Divider', icon: Minus },
];

const defaultBlock = (type: BlockType): Block => ({
  id: Math.random().toString(36).slice(2),
  type,
  content: type === 'text' ? { text: '' }
    : type === 'heading' ? { text: '', level: 'h2' }
    : type === 'image' ? { url: '', caption: '', alt: '' }
    : type === 'video' ? { url: '', caption: '' }
    : type === 'quote' ? { text: '', author: '' }
    : type === 'callout' ? { text: '', variant: 'tip' }
    : {},
});

function BlockEditor({ block, onChange, onDelete }: {
  block: Block;
  onChange: (b: Block) => void;
  onDelete: () => void;
}) {
  const updateContent = (key: string, value: string) => {
    onChange({ ...block, content: { ...block.content, [key]: value } });
  };

  return (
    <div className="group relative border border-paper-200 rounded-xl bg-white hover:border-roast-300 transition-colors">
      <div className="flex items-start gap-2 p-4">
        <GripVertical className="w-4 h-4 text-roast-300 mt-1 cursor-grab shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="flex-1 min-w-0">
          {/* Block type label */}
          <p className="font-mono text-[9px] uppercase tracking-widest text-roast-400 mb-2 flex items-center gap-1">
            {blockTypes.find((b) => b.type === block.type)?.label}
          </p>

          {block.type === 'text' && (
            <textarea
              value={block.content.text}
              onChange={(e) => updateContent('text', e.target.value)}
              placeholder="Tulis paragraf di sini..."
              rows={4}
              className="w-full text-sm text-roast-900 resize-none border-none outline-none bg-transparent leading-relaxed placeholder:text-roast-300"
            />
          )}

          {block.type === 'heading' && (
            <div className="space-y-2">
              <select
                value={block.content.level}
                onChange={(e) => updateContent('level', e.target.value)}
                className="text-[10px] font-mono border border-paper-200 rounded px-2 py-1 text-roast-500"
              >
                <option value="h1">H1 — Judul Besar</option>
                <option value="h2">H2 — Subjudul</option>
                <option value="h3">H3 — Heading Kecil</option>
              </select>
              <input
                value={block.content.text}
                onChange={(e) => updateContent('text', e.target.value)}
                placeholder="Tulis judul di sini..."
                className={`w-full border-none outline-none bg-transparent text-roast-950 placeholder:text-roast-300 ${
                  block.content.level === 'h1' ? 'text-2xl font-black font-serif'
                  : block.content.level === 'h2' ? 'text-xl font-bold font-serif'
                  : 'text-lg font-semibold'
                }`}
              />
            </div>
          )}

          {block.type === 'image' && (
            <div className="space-y-2">
              <div className="border-2 border-dashed border-paper-300 rounded-lg p-6 text-center hover:border-roast-400 transition-colors cursor-pointer">
                {block.content.url ? (
                  <img src={block.content.url} alt={block.content.alt} className="max-h-48 mx-auto rounded-lg object-cover" />
                ) : (
                  <div>
                    <Image className="w-8 h-8 text-roast-300 mx-auto mb-2" />
                    <p className="text-xs text-roast-400">Klik untuk upload gambar</p>
                    <p className="text-[10px] text-roast-300">PNG, JPG, WEBP hingga 10MB</p>
                  </div>
                )}
              </div>
              <input
                value={block.content.url}
                onChange={(e) => updateContent('url', e.target.value)}
                placeholder="Atau masukkan URL gambar..."
                className="w-full text-xs border border-paper-200 rounded px-3 py-2 text-roast-700 focus:outline-none focus:border-roast-400"
              />
              <input
                value={block.content.caption}
                onChange={(e) => updateContent('caption', e.target.value)}
                placeholder="Caption gambar (opsional)..."
                className="w-full text-xs border border-paper-200 rounded px-3 py-2 text-roast-500 focus:outline-none focus:border-roast-400"
              />
            </div>
          )}

          {block.type === 'video' && (
            <div className="space-y-2">
              <div className="border-2 border-dashed border-paper-300 rounded-lg p-6 text-center hover:border-roast-400 transition-colors cursor-pointer">
                <Video className="w-8 h-8 text-roast-300 mx-auto mb-2" />
                <p className="text-xs text-roast-400">Upload video (MP4, max 200MB)</p>
                <p className="text-[10px] text-roast-300">atau tempel URL YouTube/Vimeo</p>
              </div>
              <input
                value={block.content.url}
                onChange={(e) => updateContent('url', e.target.value)}
                placeholder="URL video atau YouTube embed..."
                className="w-full text-xs border border-paper-200 rounded px-3 py-2 text-roast-700 focus:outline-none focus:border-roast-400"
              />
              <input
                value={block.content.caption}
                onChange={(e) => updateContent('caption', e.target.value)}
                placeholder="Deskripsi video (opsional)..."
                className="w-full text-xs border border-paper-200 rounded px-3 py-2 text-roast-500 focus:outline-none focus:border-roast-400"
              />
            </div>
          )}

          {block.type === 'quote' && (
            <div className="space-y-2">
              <textarea
                value={block.content.text}
                onChange={(e) => updateContent('text', e.target.value)}
                placeholder="Kutipan atau insight penting..."
                rows={3}
                className="w-full text-base italic text-roast-700 resize-none border-none outline-none bg-transparent pl-4 border-l-4 border-cherry-400 leading-relaxed placeholder:text-roast-300"
              />
              <input
                value={block.content.author}
                onChange={(e) => updateContent('author', e.target.value)}
                placeholder="— Sumber / Penulis (opsional)"
                className="w-full text-xs border-none outline-none bg-transparent text-roast-400 pl-4 placeholder:text-roast-300"
              />
            </div>
          )}

          {block.type === 'callout' && (
            <div className="space-y-2">
              <select
                value={block.content.variant}
                onChange={(e) => updateContent('variant', e.target.value)}
                className="text-[10px] font-mono border border-paper-200 rounded px-2 py-1 text-roast-500"
              >
                <option value="tip">💡 Tip</option>
                <option value="warning">⚠️ Peringatan</option>
                <option value="info">ℹ️ Info</option>
                <option value="important">📌 Penting</option>
              </select>
              <div className={`rounded-lg p-3 ${
                block.content.variant === 'tip' ? 'bg-emerald-50 border border-emerald-200' :
                block.content.variant === 'warning' ? 'bg-amber-50 border border-amber-200' :
                block.content.variant === 'important' ? 'bg-cherry-50 border border-cherry-200' :
                'bg-blue-50 border border-blue-200'
              }`}>
                <textarea
                  value={block.content.text}
                  onChange={(e) => updateContent('text', e.target.value)}
                  placeholder="Isi callout..."
                  rows={2}
                  className="w-full text-sm resize-none border-none outline-none bg-transparent text-roast-700 placeholder:text-roast-300"
                />
              </div>
            </div>
          )}

          {block.type === 'divider' && (
            <hr className="border-t border-paper-300 my-2" />
          )}
        </div>

        {/* Delete button */}
        <button
          onClick={onDelete}
          className="p-1 rounded hover:bg-rose-50 text-roast-300 hover:text-rose-600 transition-colors opacity-0 group-hover:opacity-100 shrink-0"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

function LessonEditorContent() {
  const searchParams = useSearchParams();
  const { modules, lessons } = useCherryEdu();
  const moduleId = searchParams.get('module');

  const currentModule = modules.find((m) => m.id === moduleId);
  const moduleLessons = moduleId ? lessons.filter((l) => l.module_id === moduleId) : lessons;

  const [selectedLesson, setSelectedLesson] = useState<typeof lessons[0] | null>(null);
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [lessonTitle, setLessonTitle] = useState('');
  const [lessonStatus, setLessonStatus] = useState<'draft' | 'published'>('draft');
  const [showBlockMenu, setShowBlockMenu] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

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

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate save
    await new Promise((r) => setTimeout(r, 800));
    setIsSaving(false);
  };

  const handleSelectLesson = (lesson: typeof lessons[0]) => {
    setSelectedLesson(lesson);
    setLessonTitle(lesson.title);
    setLessonStatus(lesson.is_published ? 'published' : 'draft');
    // Parse existing content into blocks
    setBlocks([defaultBlock('text')]);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-7rem)]">
        {/* Lesson List Panel */}
        <div className="lg:col-span-3 bg-white rounded-xl border border-paper-200 flex flex-col overflow-hidden">
          <div className="p-4 border-b border-paper-100">
            <h2 className="font-mono text-[11px] uppercase tracking-widest text-roast-500 font-bold mb-1">
              Lesson Editor
            </h2>
            {currentModule && (
              <p className="text-xs text-roast-700 font-semibold truncate">{currentModule.title}</p>
            )}
          </div>

          <div className="p-3 border-b border-paper-100">
            <button className="w-full flex items-center justify-center gap-2 px-3 py-2 border border-dashed border-paper-300 rounded-lg text-xs text-roast-500 hover:border-roast-400 hover:text-roast-700 transition-colors font-mono">
              <Plus className="w-3.5 h-3.5" />
              Tambah Lesson
            </button>
          </div>

          <div className="flex-1 overflow-y-auto divide-y divide-paper-100">
            {moduleLessons.map((lesson, idx) => (
              <button
                key={lesson.id}
                onClick={() => handleSelectLesson(lesson)}
                className={`w-full text-left p-3 hover:bg-paper-50 transition-colors ${
                  selectedLesson?.id === lesson.id ? 'bg-paper-50 border-l-2 border-cherry-700' : ''
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[9px] text-roast-300 w-5 shrink-0">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-roast-950 truncate">{lesson.title}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${lesson.is_published ? 'bg-emerald-500' : 'bg-roast-300'}`} />
                      <span className="font-mono text-[9px] text-roast-400">
                        {lesson.duration_minutes}m
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            ))}

            {moduleLessons.length === 0 && (
              <div className="p-6 text-center text-roast-300">
                <BookOpen className="w-6 h-6 mx-auto mb-2 opacity-50" />
                <p className="text-xs font-mono">Belum ada lesson</p>
              </div>
            )}
          </div>
        </div>

        {/* Editor Area */}
        <div className="lg:col-span-9 flex flex-col overflow-hidden">
          {selectedLesson ? (
            <>
              {/* Editor toolbar */}
              <div className="bg-white border border-paper-200 rounded-xl p-3 mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <input
                    value={lessonTitle}
                    onChange={(e) => setLessonTitle(e.target.value)}
                    className="font-bold text-roast-950 text-sm bg-transparent border-none outline-none min-w-[200px]"
                    placeholder="Judul Lesson..."
                  />
                </div>
                <div className="flex items-center gap-2">
                  <select
                    value={lessonStatus}
                    onChange={(e) => setLessonStatus(e.target.value as 'draft' | 'published')}
                    className={`text-xs font-mono border rounded px-2 py-1.5 cursor-pointer ${
                      lessonStatus === 'published'
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                        : 'bg-paper-100 border-paper-300 text-roast-500'
                    }`}
                  >
                    <option value="draft">● Draft</option>
                    <option value="published">● Published</option>
                  </select>
                  <button className="flex items-center gap-1 px-3 py-1.5 text-xs font-mono border border-paper-300 rounded text-roast-600 hover:border-roast-400 transition-colors">
                    <Eye className="w-3 h-3" />
                    Preview
                  </button>
                  <button
                    onClick={handleSave}
                    disabled={isSaving}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-roast-950 hover:bg-roast-900 text-paper-50 rounded text-xs font-mono font-bold transition-colors disabled:opacity-60"
                  >
                    <Save className="w-3 h-3" />
                    {isSaving ? 'Menyimpan...' : 'Simpan'}
                  </button>
                </div>
              </div>

              {/* Blocks */}
              <div className="flex-1 overflow-y-auto space-y-3 pr-1">
                {blocks.map((block) => (
                  <BlockEditor
                    key={block.id}
                    block={block}
                    onChange={handleUpdateBlock}
                    onDelete={() => handleDeleteBlock(block.id)}
                  />
                ))}

                {/* Add Block Button */}
                <div className="relative">
                  <button
                    onClick={() => setShowBlockMenu(!showBlockMenu)}
                    className="w-full flex items-center justify-center gap-2 py-4 border-2 border-dashed border-paper-300 rounded-xl text-sm text-roast-400 hover:border-roast-400 hover:text-roast-600 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    Tambah Blok Konten
                  </button>

                  {showBlockMenu && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white border border-paper-200 rounded-xl shadow-lg p-2 grid grid-cols-4 gap-1 w-72 z-10">
                      {blockTypes.map((bt) => {
                        const Icon = bt.icon;
                        return (
                          <button
                            key={bt.type}
                            onClick={() => handleAddBlock(bt.type)}
                            className="flex flex-col items-center gap-1.5 p-2.5 rounded-lg hover:bg-paper-50 text-roast-600 hover:text-roast-950 transition-colors"
                          >
                            <Icon className="w-4 h-4" />
                            <span className="font-mono text-[9px] text-center">{bt.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 bg-white rounded-xl border border-paper-200 flex items-center justify-center">
              <div className="text-center text-roast-400">
                <BookOpen className="w-12 h-12 mx-auto mb-3 opacity-20" />
                <p className="font-mono text-sm">Pilih lesson dari panel kiri</p>
                <p className="text-xs mt-1">atau buat lesson baru</p>
              </div>
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
          Memuat Editor Lesson...
        </div>
      }
    >
      <LessonEditorContent />
    </React.Suspense>
  );
}

