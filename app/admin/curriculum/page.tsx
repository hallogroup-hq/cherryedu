'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useCherryEdu } from '@/lib/store';
import {
  Plus,
  BookOpen,
  Layers,
  ChevronRight,
  Edit2,
  Trash2,
  Eye,
  EyeOff,
  GripVertical,
  Clock,
  MoreHorizontal,
  CheckCircle2,
  Circle,
  ArrowUpDown,
  Copy,
} from 'lucide-react';

export default function CurriculumPage() {
  const { learningPaths, modules, lessons } = useCherryEdu();
  const [selectedPath, setSelectedPath] = useState<string | null>(null);
  const [view, setView] = useState<'paths' | 'modules'>('paths');

  const selectedPathData = learningPaths.find((p) => p.id === selectedPath);
  const pathModules = selectedPath
    ? modules.filter((m) => m.learning_path_id === selectedPath)
    : [];

  const getLessonCount = (moduleId: string) =>
    lessons.filter((l) => l.module_id === moduleId).length;

  const getPathLessonCount = (pathId: string) => {
    const mods = modules.filter((m) => m.learning_path_id === pathId);
    return mods.reduce((acc, m) => acc + getLessonCount(m.id), 0);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-serif font-black text-2xl text-roast-950">Manajemen Kurikulum</h1>
          <p className="text-sm text-roast-500 mt-0.5">
            Kelola learning path, module, dan materi pembelajaran
          </p>
        </div>
        <Link
          href="/admin/curriculum/new"
          className="flex items-center gap-2 px-4 py-2 bg-roast-950 hover:bg-roast-900 text-paper-50 rounded-lg font-mono text-xs uppercase tracking-wider font-bold transition-colors"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Learning Path Baru</span>
        </Link>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: 'Learning Paths', value: learningPaths.length, icon: Layers },
          { label: 'Total Modules', value: modules.length, icon: BookOpen },
          { label: 'Total Lessons', value: lessons.length, icon: CheckCircle2 },
        ].map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="bg-white border border-paper-200 rounded-xl p-4 flex items-center gap-3">
              <div className="w-9 h-9 bg-paper-100 rounded-lg flex items-center justify-center">
                <Icon className="w-4 h-4 text-roast-600" />
              </div>
              <div>
                <p className="font-serif font-bold text-xl text-roast-950">{s.value}</p>
                <p className="font-mono text-[10px] text-roast-400 uppercase tracking-wider font-bold">{s.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Learning Paths List */}
        <div className="lg:col-span-5">
          <div className="bg-white rounded-xl border border-paper-200">
            <div className="p-4 border-b border-paper-100 flex items-center justify-between">
              <h2 className="font-mono text-[11px] uppercase tracking-widest text-roast-500 font-bold">
                Learning Paths ({learningPaths.length})
              </h2>
              <button className="flex items-center gap-1 text-[11px] text-roast-400 hover:text-roast-700 font-mono">
                <ArrowUpDown className="w-3 h-3" />
                Urutkan
              </button>
            </div>
            <div className="divide-y divide-paper-100">
              {learningPaths.map((path) => (
                <button
                  key={path.id}
                  onClick={() => { setSelectedPath(path.id); setView('modules'); }}
                  className={`w-full text-left p-4 hover:bg-paper-50 transition-colors flex items-start gap-3 ${
                    selectedPath === path.id ? 'bg-paper-50 border-l-2 border-l-cherry-700' : ''
                  }`}
                >
                  <GripVertical className="w-4 h-4 text-roast-300 mt-0.5 shrink-0 cursor-grab" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          path.is_published ? 'bg-emerald-500' : 'bg-roast-300'
                        }`}
                      />
                      <span className="font-bold text-sm text-roast-950 truncate">{path.title}</span>
                    </div>
                    <div className="flex items-center gap-3 text-[11px] text-roast-400 font-mono">
                      <span className="capitalize">{path.level}</span>
                      <span>•</span>
                      <span>{getPathLessonCount(path.id)} lessons</span>
                      <span>•</span>
                      <span>{path.estimated_hours}j</span>
                    </div>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-roast-300 mt-1 shrink-0" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Modules / Detail Panel */}
        <div className="lg:col-span-7">
          {selectedPathData ? (
            <div className="bg-white rounded-xl border border-paper-200">
              {/* Path header */}
              <div className="p-4 border-b border-paper-100">
                <div className="flex items-start justify-between">
                  <div>
                    <span
                      className={`inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border font-bold mb-2 ${
                        selectedPathData.is_published
                          ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                          : 'bg-paper-100 border-paper-300 text-roast-500'
                      }`}
                    >
                      {selectedPathData.is_published ? (
                        <><CheckCircle2 className="w-2.5 h-2.5" />Published</>
                      ) : (
                        <><Circle className="w-2.5 h-2.5" />Draft</>
                      )}
                    </span>
                    <h3 className="font-bold text-roast-950">{selectedPathData.title}</h3>
                    <p className="text-xs text-roast-500 mt-0.5 line-clamp-2">{selectedPathData.description}</p>
                  </div>
                  <div className="flex items-center gap-1 ml-3">
                    <button className="p-1.5 rounded hover:bg-paper-100 text-roast-400 hover:text-roast-700 transition-colors">
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                    <button className="p-1.5 rounded hover:bg-paper-100 text-roast-400 hover:text-roast-700 transition-colors">
                      {selectedPathData.is_published ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    </button>
                    <button className="p-1.5 rounded hover:bg-paper-100 text-roast-400 hover:text-rose-600 transition-colors">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Modules */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-mono text-[10px] uppercase tracking-widest text-roast-400 font-bold">
                    Modules ({pathModules.length})
                  </h4>
                  <button className="flex items-center gap-1 text-xs text-cherry-700 font-semibold hover:underline">
                    <Plus className="w-3 h-3" />
                    Tambah Module
                  </button>
                </div>

                <div className="space-y-2">
                  {pathModules.map((mod, idx) => {
                    const modLessons = lessons.filter((l) => l.module_id === mod.id);
                    return (
                      <div
                        key={mod.id}
                        className="border border-paper-200 rounded-lg p-3 hover:border-roast-300 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <GripVertical className="w-4 h-4 text-roast-300 cursor-grab shrink-0" />
                          <span className="font-mono text-[10px] text-roast-400 shrink-0">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                          <span className="flex-1 text-sm font-semibold text-roast-900 truncate">
                            {mod.title}
                          </span>
                          <span className="font-mono text-[10px] text-roast-400 shrink-0">
                            {modLessons.length} lessons
                          </span>
                          <Link
                            href={`/admin/curriculum/lessons?module=${mod.id}`}
                            className="p-1 rounded hover:bg-paper-100 text-roast-400 hover:text-cherry-700 transition-colors shrink-0"
                            title="Edit Lessons"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </Link>
                        </div>

                        {/* Lessons preview */}
                        {modLessons.length > 0 && (
                          <div className="mt-2 pl-10 space-y-1">
                            {modLessons.slice(0, 3).map((l) => (
                              <div key={l.id} className="flex items-center gap-2 text-[11px] text-roast-500">
                                <Circle className="w-2 h-2 shrink-0" />
                                <span className="truncate">{l.title}</span>
                                <span className="font-mono ml-auto shrink-0">{l.duration_minutes}m</span>
                              </div>
                            ))}
                            {modLessons.length > 3 && (
                              <p className="text-[11px] text-roast-400 pl-4">
                                +{modLessons.length - 3} lesson lainnya...
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}

                  {pathModules.length === 0 && (
                    <div className="text-center py-8 text-roast-400">
                      <BookOpen className="w-8 h-8 mx-auto mb-2 opacity-30" />
                      <p className="text-xs font-mono">Belum ada module</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-paper-200 h-full flex items-center justify-center py-20">
              <div className="text-center text-roast-400">
                <BookOpen className="w-10 h-10 mx-auto mb-3 opacity-30" />
                <p className="text-sm font-mono">Pilih Learning Path</p>
                <p className="text-xs mt-1">untuk melihat dan mengelola module di dalamnya</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
