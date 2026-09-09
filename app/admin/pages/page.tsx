'use client';

import React, { useState, useEffect } from 'react';
import { useCherryEdu } from '@/lib/store';
import { DEFAULT_SITE_PAGES } from '@/lib/data/defaultSitePages';
import { PageSectionItem, PageSectionType, SitePageConfig } from '@/lib/types';
import {
  Layers,
  Type,
  Image as ImageIcon,
  Save,
  Eye,
  EyeOff,
  CheckCircle2,
  ChevronUp,
  ChevronDown,
  Sparkles,
  Layout,
  Table as TableIcon,
  Megaphone,
  ArrowRight,
  Plus,
  Trash2,
  Copy,
  Video,
  Quote,
  Check,
  Palette,
  ExternalLink,
  BookOpen,
  Coffee,
  Briefcase,
  Phone,
  Settings,
  HelpCircle,
} from 'lucide-react';

const SECTION_LIBRARY: {
  type: PageSectionType;
  label: string;
  desc: string;
  icon: React.ElementType;
  defaultData: Record<string, any>;
}[] = [
  {
    type: 'banner',
    label: 'Banner Pengumuman',
    desc: 'Strip pengumuman di atas atau antar seksi dengan tombol CTA',
    icon: Megaphone,
    defaultData: {
      text: '☕ Pendaftaran Kelas Brewing Batch Baru Resmi Dibuka! Kuota terbatas untuk 20 peserta.',
      buttonText: 'Daftar Kelas',
      buttonLink: '/register',
      bgColor: '#2C1810',
    },
  },
  {
    type: 'hero',
    label: 'Hero Banner',
    desc: 'Headline besar, subteks, tombol aksi, dan kartu arsitektural',
    icon: Layout,
    defaultData: {
      headline: 'Judul Hero Baru yang Menarik Pengunjung',
      description: 'Deskripsi lengkap mengenai program atau materi unggulan CherryEdu.',
      primaryCtaText: 'Mulai Belajar Sekarang',
      primaryCtaLink: '/paths',
      secondaryCtaText: 'Lihat Detail',
      secondaryCtaLink: '/about',
      specs: [
        { label: 'Level', value: 'Semua Tingkat' },
        { label: 'Sertifikat', value: 'Resmi SCA' },
        { label: 'Akses', value: 'Lifetime' },
      ],
      cardTagline: 'FEATURED FOCUS',
      cardTitle: 'Materi Unggulan',
      cardVol: 'NEW',
      cardImage: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800',
      cardAltitude: 'Origin: Gayo 1.500 mdpl',
      cardModules: [
        { code: '01', title: 'Fondasi Rasa & Sains Ekstraksi' },
        { code: '02', title: 'Kalibrasi Mesin & Grinder' },
      ],
      cardCtaText: 'Buka Silabus',
      cardCtaLink: '/paths',
    },
  },
  {
    type: 'text',
    label: 'Blok Teks & Cerita',
    desc: 'Paragraf editorial, cerita kebun, atau manifesto edukasi',
    icon: Type,
    defaultData: {
      eyebrow: 'CATATAN KURATOR',
      title: 'Kisah di Balik Setiap Cangkir Kopi Nusantara',
      content:
        'Kopi adalah perjalanan panjang dari benih yang dirawat oleh petani di lereng pegunungan hingga tetesan ekstraksi di cangkirmu. Kami di Cherry Coffee Roastery mendedikasikan platform ini agar siapa saja bisa memahami sains dan seni di balik kopi spesialti.',
    },
  },
  {
    type: 'image',
    label: 'Gambar / Visual Banner',
    desc: 'Foto cover atau dokumentasi perkebunan full-width dengan caption',
    icon: ImageIcon,
    defaultData: {
      title: 'Panen Raya Arabika Dataran Tinggi Gayo',
      caption: 'Proses pemetikan buah petik merah oleh petani mitra Cherry Coffee Roastery.',
      url: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1200',
    },
  },
  {
    type: 'video',
    label: 'Video Showcase',
    desc: 'Video materi dari YouTube, Vimeo, atau MP4 Supabase Storage',
    icon: Video,
    defaultData: {
      title: 'Tutorial Kalibrasi Espresso Standar Kompetisi',
      description: 'Saksikan langkah demi langkah dial-in rasio 1:2 dalam 27 detik bersama Head Roaster.',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
  },
  {
    type: 'cards',
    label: 'Grid Kartu Fitur (3 Kolom)',
    desc: 'Kumpulan kartu berisi pilar materi, fasilitas, atau keunggulan',
    icon: Layers,
    defaultData: {
      eyebrow: 'KEUNGGULAN UTAMA',
      title: 'Mengapa Belajar di CherryEdu Berbeda?',
      items: [
        {
          title: 'Sains Ekstraksi Modern',
          description: 'Bukan sekadar hafalan resep, kami bedah kimia ekstraksi dan TDS air.',
        },
        {
          title: 'Konteks Kopi Lokal',
          description: 'Berakar pada realitas origin Indonesia, varietas Ateng, Typica, dan Tim-Tim.',
        },
        {
          title: 'Sertifikat Terverifikasi',
          description: 'Setiap sertifikat memiliki nomor token publik yang dapat diaudit pemilik kedai.',
        },
      ],
    },
  },
  {
    type: 'cta',
    label: 'Call to Action (CTA)',
    desc: 'Box ajakan mendaftar, berlangganan, atau bergabung ke komunitas',
    icon: Sparkles,
    defaultData: {
      title: 'Siap Mengembangkan Keahlian Kopimu?',
      description: 'Bergabunglah dengan ratusan barista dan home brewer di seluruh Indonesia hari ini.',
      buttonText: 'Buat Akun Gratis Sekarang',
      buttonLink: '/register',
    },
  },
  {
    type: 'testimonial',
    label: 'Testimonial / Kutipan',
    desc: 'Kutipan testimoni dari barista juara, alumni, atau pemilik kedai kopi',
    icon: Quote,
    defaultData: {
      quote:
        'CherryEdu mengubah cara pandang saya terhadap seduh kopi. Saya sekarang mengerti apa yang terjadi pada tingkat molekuler saat air menyentuh bubuk kopi.',
      author: 'Rian Pratama',
      role: 'Head Barista di Titik Temu Kopi & Alumni Foundation Layer',
    },
  },
  {
    type: 'comparison',
    label: 'Tabel Perbandingan',
    desc: 'Tabel komparasi fitur CherryEdu vs kursus lain',
    icon: TableIcon,
    defaultData: {
      eyebrow: 'PERBANDINGAN PEMBELAJARAN',
      heading: 'Evaluasi Standar Edukasi Kami',
      rows: [
        {
          criteria: 'Kurikulum Hulu ke Hilir',
          cherry: 'Terstruktur Komprehensif',
          youtube: 'Terpecah & Tidak Sistematis',
          course: 'Hanya Fokus Titik Tertentu',
        },
        {
          criteria: 'Sertifikat Terverifikasi',
          cherry: 'Ya (QR & Token Unik)',
          youtube: 'Tidak Ada',
          course: 'Sertifikat Kertas Fisik',
        },
      ],
    },
  },
];

const AVAILABLE_PAGES: {
  id: string;
  name: string;
  slug: string;
  icon: React.ElementType;
  badge: string;
}[] = [
  { id: 'home', name: 'Beranda (Landing Page)', slug: '/', icon: Layout, badge: 'Home' },
  { id: 'about', name: 'Tentang Kami (About Us)', slug: '/about', icon: BookOpen, badge: 'Profile' },
  { id: 'paths', name: 'Katalog Kurikulum', slug: '/paths', icon: Layers, badge: 'Courses' },
  { id: 'tools', name: 'Laboratorium Alat Seduh', slug: '/tools', icon: Coffee, badge: 'Lab' },
  { id: 'jobs', name: 'Bursa Kerja Kopi', slug: '/jobs', icon: Briefcase, badge: 'Careers' },
  { id: 'contact', name: 'Kontak & Pusat Bantuan', slug: '/contact', icon: Phone, badge: 'Support' },
];

export default function PageBuilderAdminPage() {
  const { sitePages, updateSitePageConfig, landingPageConfig, updateLandingPageConfig } = useCherryEdu();

  const [selectedPageId, setSelectedPageId] = useState<string>('home');

  // Active page config from store or fallback
  const activePageConfig: SitePageConfig =
    sitePages?.[selectedPageId] || DEFAULT_SITE_PAGES[selectedPageId] || {
      id: selectedPageId,
      slug: AVAILABLE_PAGES.find((p) => p.id === selectedPageId)?.slug || '/',
      name: AVAILABLE_PAGES.find((p) => p.id === selectedPageId)?.name || selectedPageId,
      seoTitle: '',
      seoDescription: '',
      sections: [],
    };

  const [sections, setSections] = useState<PageSectionItem[]>(activePageConfig.sections || []);
  const [selectedSectionId, setSelectedSectionId] = useState<string>(activePageConfig.sections?.[0]?.id || '');
  const [pageMeta, setPageMeta] = useState({
    name: activePageConfig.name || '',
    seoTitle: activePageConfig.seoTitle || '',
    seoDescription: activePageConfig.seoDescription || '',
  });
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isMetaOpen, setIsMetaOpen] = useState(false);

  // Sync state when page changes
  useEffect(() => {
    const pCfg = sitePages?.[selectedPageId] || DEFAULT_SITE_PAGES[selectedPageId];
    if (pCfg) {
      const pageSections = pCfg.sections && pCfg.sections.length > 0 ? pCfg.sections : [];
      setSections(pageSections);
      setSelectedSectionId(pageSections[0]?.id || '');
      setPageMeta({
        name: pCfg.name || '',
        seoTitle: pCfg.seoTitle || '',
        seoDescription: pCfg.seoDescription || '',
      });
    }
  }, [selectedPageId, sitePages]);

  const selectedSection = sections.find((s) => s.id === selectedSectionId) || sections[0];

  const handleSave = () => {
    updateSitePageConfig(selectedPageId, {
      name: pageMeta.name,
      seoTitle: pageMeta.seoTitle,
      seoDescription: pageMeta.seoDescription,
      sections,
    });

    // If home page, also update legacy landing config
    if (selectedPageId === 'home') {
      updateLandingPageConfig({
        sections,
        hero: (sections.find((s) => s.type === 'hero')?.data as any) || landingPageConfig?.hero,
        manifesto: (sections.find((s) => s.type === 'manifesto')?.data as any) || landingPageConfig?.manifesto,
        catalog: (sections.find((s) => s.type === 'catalog')?.data as any) || landingPageConfig?.catalog,
        tools: (sections.find((s) => s.type === 'tools')?.data as any) || landingPageConfig?.tools,
        comparison: (sections.find((s) => s.type === 'comparison')?.data as any) || landingPageConfig?.comparison,
        bottomCta: (sections.find((s) => s.type === 'bottomCta')?.data as any) || landingPageConfig?.bottomCta,
      });
    }

    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2500);
  };

  // Reordering
  const moveSection = (index: number, direction: 'up' | 'down') => {
    const newIdx = direction === 'up' ? index - 1 : index + 1;
    if (newIdx < 0 || newIdx >= sections.length) return;
    const updated = [...sections];
    const [moved] = updated.splice(index, 1);
    updated.splice(newIdx, 0, moved);
    setSections(updated);
  };

  // Toggle visibility
  const toggleVisibility = (id: string) => {
    setSections(
      sections.map((s) => (s.id === id ? { ...s, enabled: s.enabled === false ? true : false } : s))
    );
  };

  // Delete section
  const deleteSection = (id: string) => {
    if (sections.length <= 1) {
      alert('Minimal harus ada 1 seksi di halaman.');
      return;
    }
    const filtered = sections.filter((s) => s.id !== id);
    setSections(filtered);
    if (selectedSectionId === id) {
      setSelectedSectionId(filtered[0]?.id || '');
    }
  };

  // Duplicate section
  const duplicateSection = (sec: PageSectionItem) => {
    const newSec: PageSectionItem = {
      id: `${sec.id}_copy_${Date.now()}`,
      type: sec.type,
      title: `${sec.title} (Salinan)`,
      enabled: true,
      data: JSON.parse(JSON.stringify(sec.data || {})),
    };
    const currentIdx = sections.findIndex((s) => s.id === sec.id);
    const updated = [...sections];
    updated.splice(currentIdx + 1, 0, newSec);
    setSections(updated);
    setSelectedSectionId(newSec.id);
  };

  // Add new section from library
  const handleAddNewSection = (preset: (typeof SECTION_LIBRARY)[0]) => {
    const newSec: PageSectionItem = {
      id: `sec-${preset.type}-${Date.now()}`,
      type: preset.type,
      title: `${sections.length + 1}. ${preset.label}`,
      enabled: true,
      data: JSON.parse(JSON.stringify(preset.defaultData)),
    };
    setSections([...sections, newSec]);
    setSelectedSectionId(newSec.id);
    setIsLibraryOpen(false);
  };

  // Update selected section data
  const updateSelectedData = (field: string, value: any) => {
    setSections(
      sections.map((s) => {
        if (s.id !== selectedSectionId) return s;
        return {
          ...s,
          data: { ...s.data, [field]: value },
        };
      })
    );
  };

  // Update section title label
  const updateSelectedTitle = (title: string) => {
    setSections(
      sections.map((s) => (s.id === selectedSectionId ? { ...s, title } : s))
    );
  };

  const activePageInfo = AVAILABLE_PAGES.find((p) => p.id === selectedPageId) || AVAILABLE_PAGES[0];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Top Header Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-[10px] uppercase tracking-widest text-cherry-700 font-bold bg-cherry-50 px-2 py-0.5 border border-cherry-200">
              MULTI-PAGE BUILDER & CMS
            </span>
            <span className="font-mono text-[10px] text-roast-500">
              6 HALAMAN UTAMA TERHUBUNG
            </span>
          </div>
          <h1 className="font-serif font-black text-2xl sm:text-3xl text-roast-950">
            Visual Website Page Builder
          </h1>
          <p className="text-xs sm:text-sm text-roast-600 mt-0.5">
            Pilih halaman yang ingin diedit, kelola susunan seksi, ubah teks editorial, dan publikasikan secara real-time.
          </p>
        </div>

        <div className="flex items-center gap-2 self-stretch sm:self-auto justify-end">
          <a
            href={activePageInfo.slug}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-mono border border-paper-300 rounded-lg text-roast-700 hover:border-roast-400 bg-white transition-colors shadow-2xs"
            title={`Buka ${activePageInfo.name} di tab baru`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Lihat Halaman Live ({activePageInfo.slug}) ↗</span>
          </a>

          <button
            onClick={handleSave}
            className={`flex items-center gap-1.5 px-5 py-2 text-xs font-mono rounded-lg font-bold transition-all shadow-sm ${
              isSaved
                ? 'bg-emerald-600 text-white'
                : 'bg-roast-950 hover:bg-roast-900 text-paper-50'
            }`}
          >
            {isSaved ? (
              <>
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Tersimpan & Live!</span>
              </>
            ) : (
              <>
                <Save className="w-3.5 h-3.5" />
                <span>Simpan Perubahan</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* PAGE SELECTOR TABS (The requested multi-page switcher) */}
      <div className="bg-white rounded-xl border border-paper-300 p-3 shadow-subtle space-y-2">
        <div className="flex items-center justify-between px-1">
          <span className="font-mono text-[10px] uppercase tracking-widest text-roast-500 font-bold">
            PILIH HALAMAN WEBSITE UNTUK DIEDIT:
          </span>
          <button
            type="button"
            onClick={() => setIsMetaOpen(!isMetaOpen)}
            className="text-xs font-mono text-cherry-800 hover:underline flex items-center gap-1 font-semibold"
          >
            <Settings className="w-3 h-3" />
            <span>{isMetaOpen ? 'Tutup Pengaturan SEO' : 'Pengaturan SEO & Judul Halaman'}</span>
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {AVAILABLE_PAGES.map((p) => {
            const isSelected = p.id === selectedPageId;
            const Icon = p.icon;
            const pageSecCount = sitePages?.[p.id]?.sections?.length || DEFAULT_SITE_PAGES[p.id]?.sections?.length || 0;

            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setSelectedPageId(p.id)}
                className={`p-2.5 rounded-lg border text-left transition-all ${
                  isSelected
                    ? 'bg-roast-950 text-white border-roast-950 shadow-sm'
                    : 'bg-paper-50 hover:bg-paper-100 text-roast-800 border-paper-200'
                }`}
              >
                <div className="flex items-center justify-between gap-1">
                  <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-cherry-400' : 'text-roast-500'}`} />
                  <span
                    className={`font-mono text-[9px] uppercase px-1.5 py-0.5 rounded font-bold ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-paper-200 text-roast-600'
                    }`}
                  >
                    {pageSecCount} Seksi
                  </span>
                </div>
                <div>
                  <div className="font-serif font-bold text-xs leading-tight">
                    {p.name.split('(')[0].trim()}
                  </div>
                  <div
                    className={`font-mono text-[10px] mt-0.5 ${
                      isSelected ? 'text-roast-300' : 'text-roast-400'
                    }`}
                  >
                    {p.slug}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Collapsible SEO & Meta Settings */}
        {isMetaOpen && (
          <div className="mt-3 pt-3 border-t border-paper-200 grid grid-cols-1 sm:grid-cols-3 gap-3 bg-paper-50 p-3 rounded-lg text-xs">
            <div>
              <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                Judul Internal Halaman
              </label>
              <input
                value={pageMeta.name}
                onChange={(e) => setPageMeta({ ...pageMeta, name: e.target.value })}
                className="w-full border border-paper-300 rounded p-2 bg-white font-bold"
              />
            </div>
            <div>
              <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                SEO Title (Meta Browser)
              </label>
              <input
                value={pageMeta.seoTitle}
                onChange={(e) => setPageMeta({ ...pageMeta, seoTitle: e.target.value })}
                placeholder="Judul yang muncul di Google..."
                className="w-full border border-paper-300 rounded p-2 bg-white"
              />
            </div>
            <div>
              <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                SEO Description
              </label>
              <input
                value={pageMeta.seoDescription}
                onChange={(e) => setPageMeta({ ...pageMeta, seoDescription: e.target.value })}
                placeholder="Deskripsi ringkas untuk mesin pencari..."
                className="w-full border border-paper-300 rounded p-2 bg-white"
              />
            </div>
          </div>
        )}
      </div>

      {/* Main Builder Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[calc(100vh-16rem)]">
        {/* Left Column: Sections List (Draggable/Reorderable) */}
        <div className="lg:col-span-5 space-y-3">
          <div className="bg-white rounded-xl border border-paper-200 p-4 shadow-subtle flex flex-col">
            <div className="flex items-center justify-between pb-3 border-b border-paper-100 mb-3">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-roast-400 font-bold block">
                  Struktur: {activePageInfo.name} ({sections.length} Seksi)
                </span>
                <span className="text-xs text-roast-500">
                  Geser tombol panah untuk mengatur urutan tayang
                </span>
              </div>
            </div>

            {/* Sections list */}
            <div className="space-y-2 max-h-[620px] overflow-y-auto pr-1">
              {sections.map((sec, idx) => {
                const isSelected = sec.id === selectedSectionId;
                const isEnabled = sec.enabled !== false;

                return (
                  <div
                    key={sec.id}
                    className={`flex items-center gap-2 p-2.5 rounded-lg border transition-all ${
                      isSelected
                        ? 'border-roast-950 bg-paper-50/80 shadow-xs'
                        : 'border-paper-200 hover:border-paper-300 bg-white'
                    } ${!isEnabled ? 'opacity-50' : ''}`}
                  >
                    {/* Reorder Buttons */}
                    <div className="flex flex-col gap-0.5 shrink-0">
                      <button
                        type="button"
                        onClick={() => moveSection(idx, 'up')}
                        disabled={idx === 0}
                        className="p-1 rounded hover:bg-paper-200 text-roast-400 disabled:opacity-20 transition-colors"
                        title="Geser Naik"
                      >
                        <ChevronUp className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => moveSection(idx, 'down')}
                        disabled={idx === sections.length - 1}
                        className="p-1 rounded hover:bg-paper-200 text-roast-400 disabled:opacity-20 transition-colors"
                        title="Geser Turun"
                      >
                        <ChevronDown className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Section Label & Selection Clicker */}
                    <div
                      onClick={() => setSelectedSectionId(sec.id)}
                      className="flex-1 min-w-0 cursor-pointer"
                    >
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <span className="font-mono text-[9px] uppercase px-1.5 py-0.5 rounded bg-paper-200 font-bold text-roast-600">
                          {sec.type}
                        </span>
                        {!isEnabled && (
                          <span className="font-mono text-[9px] text-rose-600 font-bold">
                            (Disembunyikan)
                          </span>
                        )}
                      </div>
                      <p
                        className={`font-serif text-xs truncate ${
                          isSelected ? 'font-bold text-roast-950' : 'text-roast-700'
                        }`}
                      >
                        {sec.title || sec.type}
                      </p>
                    </div>

                    {/* Section Actions */}
                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        type="button"
                        onClick={() => toggleVisibility(sec.id)}
                        className={`p-1.5 rounded transition-colors ${
                          isEnabled
                            ? 'text-roast-400 hover:text-roast-700 hover:bg-paper-200'
                            : 'text-rose-500 hover:bg-rose-50'
                        }`}
                        title={isEnabled ? 'Sembunyikan Seksi' : 'Tampilkan Seksi'}
                      >
                        {isEnabled ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                      </button>
                      <button
                        type="button"
                        onClick={() => duplicateSection(sec)}
                        className="p-1.5 rounded text-roast-400 hover:text-roast-700 hover:bg-paper-200 transition-colors"
                        title="Duplikat Seksi"
                      >
                        <Copy className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => deleteSection(sec.id)}
                        className="p-1.5 rounded text-roast-300 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                        title="Hapus Seksi"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* BIG PROMINENT ADD SECTION BUTTON */}
            <div className="pt-4 mt-2 border-t border-paper-100">
              <button
                type="button"
                onClick={() => setIsLibraryOpen(true)}
                className="w-full py-3.5 border-2 border-dashed border-cherry-600/40 hover:border-cherry-700 rounded-xl font-mono text-xs font-bold uppercase tracking-wider text-cherry-800 hover:bg-cherry-50/50 flex items-center justify-center gap-2 transition-all shadow-subtle"
              >
                <Plus className="w-4 h-4" />
                + Tambah Section Baru di {activePageInfo.badge}
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Section Inspector & Content Editor */}
        <div className="lg:col-span-7 space-y-4">
          {selectedSection ? (
            <div className="bg-white rounded-xl border border-paper-200 p-6 space-y-5 shadow-subtle">
              {/* Header Inspector */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-paper-100 gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-[9px] uppercase px-2 py-0.5 rounded bg-roast-950 text-paper-50 font-bold">
                      Tipe: {selectedSection.type}
                    </span>
                    <span className="font-mono text-[10px] text-roast-400">
                      ID: {selectedSection.id}
                    </span>
                  </div>
                  <input
                    value={selectedSection.title}
                    onChange={(e) => updateSelectedTitle(e.target.value)}
                    placeholder="Nama Label Seksi..."
                    className="font-serif font-black text-lg text-roast-950 border-b border-paper-200 pb-1 bg-transparent focus:outline-none focus:border-roast-950 w-full"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <label className="flex items-center gap-1.5 text-xs text-roast-600 font-mono cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedSection.enabled !== false}
                      onChange={() => toggleVisibility(selectedSection.id)}
                      className="accent-emerald-600"
                    />
                    <span>Tampilkan di Web</span>
                  </label>
                </div>
              </div>

              {/* Dynamic Field Form Based on Section Type */}
              <div className="space-y-4 text-xs">
                {/* 1. HERO TYPE */}
                {selectedSection.type === 'hero' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                        Headline / Judul Utama *
                      </label>
                      <textarea
                        rows={3}
                        value={selectedSection.data?.headline || ''}
                        onChange={(e) => updateSelectedData('headline', e.target.value)}
                        className="w-full font-serif font-bold text-sm border border-paper-200 rounded-lg p-3 text-roast-950 focus:outline-none focus:border-roast-400"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                        Deskripsi Pengantar *
                      </label>
                      <textarea
                        rows={3}
                        value={selectedSection.data?.description || ''}
                        onChange={(e) => updateSelectedData('description', e.target.value)}
                        className="w-full text-xs leading-relaxed border border-paper-200 rounded-lg p-3 text-roast-800 focus:outline-none focus:border-roast-400 resize-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                          Tombol Utama (Hitam)
                        </label>
                        <input
                          value={selectedSection.data?.primaryCtaText || ''}
                          onChange={(e) => updateSelectedData('primaryCtaText', e.target.value)}
                          placeholder="Teks Tombol..."
                          className="w-full border border-paper-200 rounded p-2 mb-1.5 font-bold"
                        />
                        <input
                          value={selectedSection.data?.primaryCtaLink || ''}
                          onChange={(e) => updateSelectedData('primaryCtaLink', e.target.value)}
                          placeholder="URL Link..."
                          className="w-full border border-paper-200 rounded p-2 font-mono text-[11px]"
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                          Tombol Sekunder (Putih)
                        </label>
                        <input
                          value={selectedSection.data?.secondaryCtaText || ''}
                          onChange={(e) => updateSelectedData('secondaryCtaText', e.target.value)}
                          placeholder="Teks Tombol..."
                          className="w-full border border-paper-200 rounded p-2 mb-1.5"
                        />
                        <input
                          value={selectedSection.data?.secondaryCtaLink || ''}
                          onChange={(e) => updateSelectedData('secondaryCtaLink', e.target.value)}
                          placeholder="URL Link..."
                          className="w-full border border-paper-200 rounded p-2 font-mono text-[11px]"
                        />
                      </div>
                    </div>

                    <div className="pt-2 border-t border-paper-100">
                      <p className="font-mono text-[10px] uppercase text-roast-500 font-bold mb-2">
                        Kartu Silabus Architectural Kanan
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] text-roast-400 mb-0.5">Judul Kartu</label>
                          <input
                            value={selectedSection.data?.cardTitle || ''}
                            onChange={(e) => updateSelectedData('cardTitle', e.target.value)}
                            className="w-full border border-paper-200 rounded p-2 font-bold"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] text-roast-400 mb-0.5">Foto Cover (URL)</label>
                          <input
                            value={selectedSection.data?.cardImage || ''}
                            onChange={(e) => updateSelectedData('cardImage', e.target.value)}
                            className="w-full border border-paper-200 rounded p-2 font-mono text-[11px]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. ANNOUNCEMENT BANNER */}
                {selectedSection.type === 'banner' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                        Pesan Pengumuman
                      </label>
                      <textarea
                        rows={2}
                        value={selectedSection.data?.text || ''}
                        onChange={(e) => updateSelectedData('text', e.target.value)}
                        className="w-full border border-paper-200 rounded-lg p-2.5"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                          Teks Tombol (Opsional)
                        </label>
                        <input
                          value={selectedSection.data?.buttonText || ''}
                          onChange={(e) => updateSelectedData('buttonText', e.target.value)}
                          className="w-full border border-paper-200 rounded-lg p-2.5"
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                          Link Tombol
                        </label>
                        <input
                          value={selectedSection.data?.buttonLink || ''}
                          onChange={(e) => updateSelectedData('buttonLink', e.target.value)}
                          className="w-full border border-paper-200 rounded-lg p-2.5 font-mono"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                        Warna Latar Belakang
                      </label>
                      <div className="flex items-center gap-2">
                        <input
                          type="color"
                          value={selectedSection.data?.bgColor || '#2C1810'}
                          onChange={(e) => updateSelectedData('bgColor', e.target.value)}
                          className="w-9 h-9 rounded border cursor-pointer"
                        />
                        <input
                          value={selectedSection.data?.bgColor || '#2C1810'}
                          onChange={(e) => updateSelectedData('bgColor', e.target.value)}
                          className="flex-1 border border-paper-200 rounded-lg p-2 font-mono"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. EDITORIAL TEXT */}
                {selectedSection.type === 'text' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                        Subjudul Kecil (Eyebrow)
                      </label>
                      <input
                        value={selectedSection.data?.eyebrow || ''}
                        onChange={(e) => updateSelectedData('eyebrow', e.target.value)}
                        className="w-full font-mono text-xs border border-paper-200 rounded-lg p-2.5"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                        Judul Utama
                      </label>
                      <input
                        value={selectedSection.data?.title || ''}
                        onChange={(e) => updateSelectedData('title', e.target.value)}
                        className="w-full font-serif font-bold text-sm border border-paper-200 rounded-lg p-2.5"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                        Konten Paragraf Teks
                      </label>
                      <textarea
                        rows={6}
                        value={selectedSection.data?.content || ''}
                        onChange={(e) => updateSelectedData('content', e.target.value)}
                        className="w-full border border-paper-200 rounded-lg p-3 leading-relaxed"
                      />
                    </div>
                  </div>
                )}

                {/* 4. IMAGE */}
                {selectedSection.type === 'image' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                        Judul Gambar
                      </label>
                      <input
                        value={selectedSection.data?.title || ''}
                        onChange={(e) => updateSelectedData('title', e.target.value)}
                        className="w-full border border-paper-200 rounded-lg p-2.5 font-bold"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                        URL Gambar (https://...)
                      </label>
                      <input
                        value={selectedSection.data?.url || ''}
                        onChange={(e) => updateSelectedData('url', e.target.value)}
                        className="w-full border border-paper-200 rounded-lg p-2.5 font-mono text-[11px]"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                        Keterangan / Caption
                      </label>
                      <input
                        value={selectedSection.data?.caption || ''}
                        onChange={(e) => updateSelectedData('caption', e.target.value)}
                        className="w-full border border-paper-200 rounded-lg p-2.5"
                      />
                    </div>
                  </div>
                )}

                {/* 5. VIDEO */}
                {selectedSection.type === 'video' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                        Judul Video
                      </label>
                      <input
                        value={selectedSection.data?.title || ''}
                        onChange={(e) => updateSelectedData('title', e.target.value)}
                        className="w-full border border-paper-200 rounded-lg p-2.5 font-bold"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                        Tautan Embed Video (YouTube / Vimeo / MP4)
                      </label>
                      <input
                        value={selectedSection.data?.url || ''}
                        onChange={(e) => updateSelectedData('url', e.target.value)}
                        placeholder="https://www.youtube.com/embed/..."
                        className="w-full border border-paper-200 rounded-lg p-2.5 font-mono text-[11px]"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                        Deskripsi Singkat
                      </label>
                      <textarea
                        rows={2}
                        value={selectedSection.data?.description || ''}
                        onChange={(e) => updateSelectedData('description', e.target.value)}
                        className="w-full border border-paper-200 rounded-lg p-2.5"
                      />
                    </div>
                  </div>
                )}

                {/* 6. CARDS GRID */}
                {selectedSection.type === 'cards' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                        Judul Grid Kartu
                      </label>
                      <input
                        value={selectedSection.data?.title || ''}
                        onChange={(e) => updateSelectedData('title', e.target.value)}
                        className="w-full border border-paper-200 rounded-lg p-2.5 font-bold"
                      />
                    </div>
                    <div className="space-y-3">
                      <p className="font-mono text-[10px] uppercase text-roast-500 font-bold">
                        Kartu-Kartu ({selectedSection.data?.items?.length || 0})
                      </p>
                      {selectedSection.data?.items?.map((it: any, iIdx: number) => (
                        <div key={iIdx} className="p-3 bg-paper-50 rounded-lg border border-paper-200 space-y-1.5">
                          <input
                            value={it.title}
                            onChange={(e) => {
                              const copy = [...selectedSection.data.items];
                              copy[iIdx] = { ...copy[iIdx], title: e.target.value };
                              updateSelectedData('items', copy);
                            }}
                            className="w-full font-bold border border-paper-200 rounded p-1.5 bg-white text-xs"
                            placeholder="Judul Kartu..."
                          />
                          <textarea
                            rows={2}
                            value={it.description}
                            onChange={(e) => {
                              const copy = [...selectedSection.data.items];
                              copy[iIdx] = { ...copy[iIdx], description: e.target.value };
                              updateSelectedData('items', copy);
                            }}
                            className="w-full border border-paper-200 rounded p-1.5 bg-white text-xs resize-none"
                            placeholder="Deskripsi..."
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 7. CTA BLOCK */}
                {selectedSection.type === 'cta' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                        Judul Ajakan CTA
                      </label>
                      <input
                        value={selectedSection.data?.title || ''}
                        onChange={(e) => updateSelectedData('title', e.target.value)}
                        className="w-full border border-paper-200 rounded-lg p-2.5 font-bold"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                        Deskripsi
                      </label>
                      <textarea
                        rows={2}
                        value={selectedSection.data?.description || ''}
                        onChange={(e) => updateSelectedData('description', e.target.value)}
                        className="w-full border border-paper-200 rounded-lg p-2.5"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                          Teks Tombol
                        </label>
                        <input
                          value={selectedSection.data?.buttonText || ''}
                          onChange={(e) => updateSelectedData('buttonText', e.target.value)}
                          className="w-full border border-paper-200 rounded-lg p-2.5 font-bold"
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                          Link Tombol
                        </label>
                        <input
                          value={selectedSection.data?.buttonLink || ''}
                          onChange={(e) => updateSelectedData('buttonLink', e.target.value)}
                          className="w-full border border-paper-200 rounded-lg p-2.5 font-mono"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* 8. TESTIMONIAL */}
                {selectedSection.type === 'testimonial' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                        Kutipan Testimoni
                      </label>
                      <textarea
                        rows={3}
                        value={selectedSection.data?.quote || ''}
                        onChange={(e) => updateSelectedData('quote', e.target.value)}
                        className="w-full border border-paper-200 rounded-lg p-2.5 italic font-serif"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                          Nama Tokoh / Alumni
                        </label>
                        <input
                          value={selectedSection.data?.author || ''}
                          onChange={(e) => updateSelectedData('author', e.target.value)}
                          className="w-full border border-paper-200 rounded-lg p-2.5 font-bold"
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                          Jabatan / Afiliasi
                        </label>
                        <input
                          value={selectedSection.data?.role || ''}
                          onChange={(e) => updateSelectedData('role', e.target.value)}
                          className="w-full border border-paper-200 rounded-lg p-2.5"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* 9. MANIFESTO / PHILOSOPHY */}
                {selectedSection.type === 'manifesto' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                        Eyebrow
                      </label>
                      <input
                        value={selectedSection.data?.eyebrow || ''}
                        onChange={(e) => updateSelectedData('eyebrow', e.target.value)}
                        className="w-full border border-paper-200 rounded-lg p-2.5 font-mono"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                        Judul Filosofi
                      </label>
                      <input
                        value={selectedSection.data?.heading || ''}
                        onChange={(e) => updateSelectedData('heading', e.target.value)}
                        className="w-full border border-paper-200 rounded-lg p-2.5 font-serif font-bold"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                        Kutipan
                      </label>
                      <textarea
                        rows={2}
                        value={selectedSection.data?.quote || ''}
                        onChange={(e) => updateSelectedData('quote', e.target.value)}
                        className="w-full border border-paper-200 rounded-lg p-2.5 italic font-serif"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                        Paragraf
                      </label>
                      <textarea
                        rows={4}
                        value={selectedSection.data?.paragraph || ''}
                        onChange={(e) => updateSelectedData('paragraph', e.target.value)}
                        className="w-full border border-paper-200 rounded-lg p-2.5 leading-relaxed"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-paper-200 p-12 text-center text-roast-400">
              <Layout className="w-10 h-10 mx-auto mb-2 opacity-30" />
              <p className="font-mono text-sm">Pilih seksi di sebelah kiri untuk mulai mengedit</p>
            </div>
          )}
        </div>
      </div>

      {/* MODAL: SECTION LIBRARY */}
      {isLibraryOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-paper-300 max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
            <div className="p-5 border-b border-paper-200 flex items-center justify-between">
              <div>
                <h3 className="font-serif font-black text-lg text-roast-950">
                  Pustaka Komponen Section ({activePageInfo.badge})
                </h3>
                <p className="text-xs text-roast-500 mt-0.5">
                  Pilih tipe seksi baru untuk ditambahkan ke halaman {activePageInfo.name}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsLibraryOpen(false)}
                className="p-1.5 rounded-lg hover:bg-paper-100 text-roast-400 hover:text-roast-800"
              >
                ✕
              </button>
            </div>

            <div className="p-5 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SECTION_LIBRARY.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.type}
                    type="button"
                    onClick={() => handleAddNewSection(item)}
                    className="p-4 rounded-xl border border-paper-200 hover:border-roast-900 hover:bg-paper-50/60 transition-all text-left flex items-start gap-3 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-paper-100 flex items-center justify-center text-roast-700 group-hover:bg-roast-950 group-hover:text-paper-50 transition-colors shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-bold text-xs text-roast-950 group-hover:text-cherry-800 transition-colors">
                        {item.label}
                      </p>
                      <p className="text-[11px] text-roast-500 leading-snug mt-0.5">{item.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="p-4 border-t border-paper-100 bg-paper-50 flex justify-end">
              <button
                type="button"
                onClick={() => setIsLibraryOpen(false)}
                className="px-4 py-2 text-xs font-mono text-roast-600 hover:text-roast-900"
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
