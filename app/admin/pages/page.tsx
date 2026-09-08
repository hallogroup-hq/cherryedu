'use client';

import React, { useState } from 'react';
import {
  Layers,
  Type,
  Image,
  Layout,
  Plus,
  Save,
  Eye,
  GripVertical,
  Settings,
  ChevronRight,
  ExternalLink,
  Megaphone,
} from 'lucide-react';

type PageSlug = 'homepage' | 'about' | 'paths';

interface PageSection {
  id: string;
  type: 'hero' | 'text' | 'image' | 'cards' | 'banner' | 'cta';
  data: Record<string, string>;
}

const PAGE_LIST: { slug: PageSlug; label: string; path: string }[] = [
  { slug: 'homepage', label: 'Homepage', path: '/' },
  { slug: 'about', label: 'Tentang Kami', path: '/about' },
  { slug: 'paths', label: 'Learning Paths', path: '/paths' },
];

const SECTION_TYPES = [
  { type: 'hero', label: 'Hero Banner', icon: Layout, desc: 'Judul besar + CTA di atas halaman' },
  { type: 'text', label: 'Blok Teks', icon: Type, desc: 'Paragraf atau konten teks' },
  { type: 'image', label: 'Gambar', icon: Image, desc: 'Foto atau grafis full-width' },
  { type: 'banner', label: 'Announcement', icon: Megaphone, desc: 'Strip notifikasi di atas halaman' },
  { type: 'cta', label: 'Call to Action', icon: ExternalLink, desc: 'Tombol dengan link' },
];

const DEFAULT_SECTIONS: Record<PageSlug, PageSection[]> = {
  homepage: [
    {
      id: '1',
      type: 'banner',
      data: { text: '☕ CherryEdu resmi diluncurkan! Daftar sekarang dan mulai belajar specialty coffee.', link: '/register', linkText: 'Daftar Gratis' },
    },
    {
      id: '2',
      type: 'hero',
      data: {
        title: 'Jadilah Bagian dari Specialty Coffee Movement',
        subtitle: 'Edukasi kopi komprehensif dari hulu ke hilir. Dibina oleh Cherry Coffee Roastery.',
        ctaText: 'Mulai Belajar',
        ctaLink: '/paths',
        bgColor: '#2C1810',
      },
    },
  ],
  about: [
    {
      id: '3',
      type: 'hero',
      data: { title: 'Tentang CherryEdu', subtitle: 'Platform edukasi specialty coffee terdepan di Indonesia', bgColor: '#2C1810' },
    },
    {
      id: '4',
      type: 'text',
      data: { content: 'CherryEdu lahir dari passion Cherry Coffee Roastery untuk memajukan industri kopi Indonesia. Kami percaya bahwa edukasi adalah kunci untuk menciptakan ekosistem kopi yang berkelanjutan.' },
    },
  ],
  paths: [
    {
      id: '5',
      type: 'hero',
      data: { title: 'Pilih Jalur Belajarmu', subtitle: 'Kurikulum terstruktur dari barista pemula hingga Q-Grader profesional', bgColor: '#2C1810' },
    },
  ],
};

function SectionPreview({ section, onEdit }: { section: PageSection; onEdit: () => void }) {
  return (
    <div className="group relative border border-paper-200 rounded-xl overflow-hidden hover:border-roast-300 transition-colors">
      <div className="absolute top-2 left-2 z-10 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <GripVertical className="w-4 h-4 text-white drop-shadow cursor-grab" />
      </div>
      <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={onEdit}
          className="px-2 py-1 bg-white/90 rounded text-[10px] font-mono font-bold text-roast-700 border border-paper-200 shadow hover:bg-white transition-colors"
        >
          Edit
        </button>
      </div>

      {section.type === 'banner' && (
        <div className="p-3 bg-roast-950 text-paper-50 flex items-center justify-between">
          <p className="text-xs">{section.data.text}</p>
          {section.data.linkText && (
            <span className="font-mono text-[10px] bg-cherry-700 px-2 py-0.5 rounded ml-2 shrink-0">
              {section.data.linkText}
            </span>
          )}
        </div>
      )}

      {section.type === 'hero' && (
        <div
          className="p-8 text-center"
          style={{ backgroundColor: section.data.bgColor || '#2C1810' }}
        >
          <h2 className="font-serif font-black text-xl text-paper-50 mb-2">{section.data.title}</h2>
          {section.data.subtitle && <p className="text-sm text-paper-300 mb-4">{section.data.subtitle}</p>}
          {section.data.ctaText && (
            <span className="inline-block px-4 py-2 bg-cherry-700 text-white rounded-lg text-xs font-bold">
              {section.data.ctaText}
            </span>
          )}
        </div>
      )}

      {section.type === 'text' && (
        <div className="p-5 bg-white">
          <p className="text-sm text-roast-700 leading-relaxed">{section.data.content}</p>
        </div>
      )}

      {section.type === 'cta' && (
        <div className="p-6 bg-paper-50 text-center">
          <h3 className="font-bold text-roast-950 mb-1">{section.data.title || 'CTA Title'}</h3>
          <p className="text-sm text-roast-500 mb-3">{section.data.desc}</p>
          <span className="inline-block px-4 py-2 bg-roast-950 text-paper-50 rounded-lg text-xs font-bold">
            {section.data.buttonText || 'Klik di Sini'}
          </span>
        </div>
      )}
    </div>
  );
}

export default function PageBuilderPage() {
  const [activePage, setActivePage] = useState<PageSlug>('homepage');
  const [sections, setSections] = useState<Record<PageSlug, PageSection[]>>(DEFAULT_SECTIONS);
  const [showAddSection, setShowAddSection] = useState(false);
  const [editingSection, setEditingSection] = useState<PageSection | null>(null);
  const [isSaved, setIsSaved] = useState(false);

  const currentSections = sections[activePage] || [];

  const addSection = (type: PageSection['type']) => {
    const newSection: PageSection = {
      id: Math.random().toString(36).slice(2),
      type,
      data: type === 'hero'
        ? { title: 'Judul Halaman', subtitle: 'Subtitle di sini', ctaText: 'Tombol CTA', ctaLink: '/', bgColor: '#2C1810' }
        : type === 'banner'
        ? { text: 'Tulis pesan pengumuman di sini', link: '/', linkText: 'Selengkapnya' }
        : type === 'text'
        ? { content: 'Tulis konten paragraf di sini...' }
        : type === 'cta'
        ? { title: 'Judul CTA', desc: 'Deskripsi singkat', buttonText: 'Klik di Sini', link: '/' }
        : {},
    };
    setSections((prev) => ({
      ...prev,
      [activePage]: [...(prev[activePage] || []), newSection],
    }));
    setShowAddSection(false);
  };

  const updateSection = (updated: PageSection) => {
    setSections((prev) => ({
      ...prev,
      [activePage]: (prev[activePage] || []).map((s) => s.id === updated.id ? updated : s),
    }));
    setEditingSection(null);
  };

  const deleteSection = (id: string) => {
    setSections((prev) => ({
      ...prev,
      [activePage]: (prev[activePage] || []).filter((s) => s.id !== id),
    }));
    setEditingSection(null);
  };

  const handleSave = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif font-black text-2xl text-roast-950">Page Builder</h1>
          <p className="text-sm text-roast-500 mt-0.5">Edit halaman statis tanpa kode</p>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={PAGE_LIST.find((p) => p.slug === activePage)?.path || '/'}
            target="_blank"
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-mono border border-paper-200 rounded-lg text-roast-600 hover:border-roast-400 transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            Preview
          </a>
          <button
            onClick={handleSave}
            className={`flex items-center gap-1.5 px-3 py-2 text-xs font-mono rounded-lg font-bold transition-all ${isSaved ? 'bg-emerald-600 text-white' : 'bg-roast-950 hover:bg-roast-900 text-paper-50'}`}
          >
            <Save className="w-3.5 h-3.5" />
            {isSaved ? '✓ Tersimpan' : 'Simpan & Publish'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[70vh]">
        {/* Left: Page list */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border border-paper-200">
            <div className="p-3 border-b border-paper-100">
              <p className="font-mono text-[10px] uppercase tracking-widest text-roast-400 font-bold">Halaman</p>
            </div>
            <div className="divide-y divide-paper-50">
              {PAGE_LIST.map((page) => (
                <button
                  key={page.slug}
                  onClick={() => setActivePage(page.slug)}
                  className={`w-full text-left p-3 text-xs font-semibold transition-colors hover:bg-paper-50 flex items-center justify-between ${activePage === page.slug ? 'text-cherry-700 bg-cherry-50' : 'text-roast-700'}`}
                >
                  <span>{page.label}</span>
                  <ChevronRight className="w-3 h-3 text-roast-300" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Center: Canvas */}
        <div className={`${editingSection ? 'lg:col-span-6' : 'lg:col-span-10'}`}>
          <div className="bg-paper-100 rounded-xl border border-paper-200 p-4 min-h-[500px]">
            <div className="max-w-2xl mx-auto space-y-3">
              {/* Page label */}
              <div className="flex items-center gap-2 mb-4">
                <span className="font-mono text-[10px] text-roast-400 uppercase tracking-wider">
                  Pratinjau: {PAGE_LIST.find((p) => p.slug === activePage)?.path}
                </span>
              </div>

              {currentSections.map((section) => (
                <SectionPreview
                  key={section.id}
                  section={section}
                  onEdit={() => setEditingSection(section)}
                />
              ))}

              {/* Add section */}
              <div className="relative">
                <button
                  onClick={() => setShowAddSection(!showAddSection)}
                  className="w-full py-4 border-2 border-dashed border-paper-300 rounded-xl text-xs text-roast-400 hover:border-roast-400 hover:text-roast-600 transition-colors flex items-center justify-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Tambah Section
                </button>

                {showAddSection && (
                  <div className="mt-2 bg-white border border-paper-200 rounded-xl p-3 shadow-lg">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-roast-400 font-bold mb-2">Pilih Tipe Section</p>
                    <div className="space-y-1">
                      {SECTION_TYPES.map((st) => {
                        const Icon = st.icon;
                        return (
                          <button
                            key={st.type}
                            onClick={() => addSection(st.type as PageSection['type'])}
                            className="w-full flex items-center gap-3 p-2.5 rounded-lg hover:bg-paper-50 text-left transition-colors"
                          >
                            <Icon className="w-4 h-4 text-roast-500 shrink-0" />
                            <div>
                              <p className="font-semibold text-xs text-roast-900">{st.label}</p>
                              <p className="text-[10px] text-roast-400">{st.desc}</p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Edit Panel */}
        {editingSection && (
          <div className="lg:col-span-4 bg-white rounded-xl border border-paper-200 p-5 space-y-4">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[11px] uppercase tracking-widest text-roast-400 font-bold">
                Edit: {SECTION_TYPES.find((s) => s.type === editingSection.type)?.label}
              </p>
              <button onClick={() => setEditingSection(null)} className="text-roast-300 hover:text-roast-700 text-xs">✕</button>
            </div>

            <div className="space-y-3 text-xs">
              {Object.entries(editingSection.data).map(([key, value]) => (
                <div key={key}>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-roast-500 font-bold mb-1 capitalize">
                    {key.replace(/_/g, ' ')}
                  </label>
                  {key === 'content' || (key === 'text' && value.length > 60) ? (
                    <textarea
                      value={value}
                      onChange={(e) => setEditingSection((s) => s ? { ...s, data: { ...s.data, [key]: e.target.value } } : null)}
                      rows={3}
                      className="w-full border border-paper-200 rounded-lg px-3 py-2 focus:outline-none focus:border-roast-400 resize-none"
                    />
                  ) : key === 'bgColor' ? (
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        value={value}
                        onChange={(e) => setEditingSection((s) => s ? { ...s, data: { ...s.data, [key]: e.target.value } } : null)}
                        className="w-10 h-10 rounded cursor-pointer border border-paper-200"
                      />
                      <input
                        value={value}
                        onChange={(e) => setEditingSection((s) => s ? { ...s, data: { ...s.data, [key]: e.target.value } } : null)}
                        className="flex-1 border border-paper-200 rounded-lg px-3 py-2 font-mono focus:outline-none focus:border-roast-400"
                      />
                    </div>
                  ) : (
                    <input
                      value={value}
                      onChange={(e) => setEditingSection((s) => s ? { ...s, data: { ...s.data, [key]: e.target.value } } : null)}
                      className="w-full border border-paper-200 rounded-lg px-3 py-2 focus:outline-none focus:border-roast-400"
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-paper-100 flex items-center gap-2">
              <button
                onClick={() => updateSection(editingSection)}
                className="flex-1 py-2 bg-roast-950 hover:bg-roast-900 text-paper-50 rounded-lg font-mono text-xs font-bold transition-colors"
              >
                Simpan Perubahan
              </button>
              <button
                onClick={() => deleteSection(editingSection.id)}
                className="px-3 py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 rounded-lg font-mono text-xs font-bold transition-colors"
              >
                Hapus
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
