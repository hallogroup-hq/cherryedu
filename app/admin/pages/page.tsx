'use client';

import React, { useState } from 'react';
import { useCherryEdu } from '@/lib/store';
import { DEFAULT_LANDING_CONFIG } from '@/lib/data/defaultLandingConfig';
import { LandingPageConfig } from '@/lib/types';
import {
  Layers,
  Type,
  Image as ImageIcon,
  Save,
  Eye,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Layout,
  Table as TableIcon,
  Megaphone,
  Compass,
  ArrowRight,
  Plus,
  Trash2,
} from 'lucide-react';

type AdminPageTab = 'landing' | 'about' | 'paths';

type LandingSectionTab =
  | 'hero'
  | 'card'
  | 'manifesto'
  | 'catalog'
  | 'tools'
  | 'comparison'
  | 'bottomCta';

export default function PageBuilderAdminPage() {
  const { landingPageConfig, updateLandingPageConfig } = useCherryEdu();

  // Local draft state
  const [activePage, setActivePage] = useState<AdminPageTab>('landing');
  const [activeSection, setActiveSection] = useState<LandingSectionTab>('hero');
  const [isSaved, setIsSaved] = useState(false);

  // Form draft initialized from global config
  const [draftConfig, setDraftConfig] = useState<LandingPageConfig>(
    landingPageConfig || DEFAULT_LANDING_CONFIG
  );

  const handleSave = () => {
    updateLandingPageConfig(draftConfig);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2500);
  };

  const updateHero = (field: string, val: any) => {
    setDraftConfig((prev) => ({
      ...prev,
      hero: { ...prev.hero, [field]: val },
    }));
  };

  const updateSpec = (index: number, field: 'label' | 'value', val: string) => {
    const updated = [...draftConfig.hero.specs];
    updated[index] = { ...updated[index], [field]: val };
    updateHero('specs', updated);
  };

  const updateCardModule = (index: number, field: 'code' | 'title', val: string) => {
    const updated = [...draftConfig.hero.cardModules];
    updated[index] = { ...updated[index], [field]: val };
    updateHero('cardModules', updated);
  };

  const updateManifesto = (field: string, val: any) => {
    setDraftConfig((prev) => ({
      ...prev,
      manifesto: { ...prev.manifesto, [field]: val },
    }));
  };

  const updateComparisonRow = (
    index: number,
    field: 'criteria' | 'cherry' | 'youtube' | 'course',
    val: string
  ) => {
    const updated = [...draftConfig.comparison.rows];
    updated[index] = { ...updated[index], [field]: val };
    setDraftConfig((prev) => ({
      ...prev,
      comparison: { ...prev.comparison, rows: updated },
    }));
  };

  const addComparisonRow = () => {
    setDraftConfig((prev) => ({
      ...prev,
      comparison: {
        ...prev.comparison,
        rows: [
          ...prev.comparison.rows,
          {
            criteria: 'Kriteria Baru',
            cherry: 'Fitur Unggulan',
            youtube: 'Terbatas',
            course: 'Biaya Tambahan',
          },
        ],
      },
    }));
  };

  const deleteComparisonRow = (index: number) => {
    setDraftConfig((prev) => ({
      ...prev,
      comparison: {
        ...prev.comparison,
        rows: prev.comparison.rows.filter((_, i) => i !== index),
      },
    }));
  };

  const sectionTabs: { id: LandingSectionTab; label: string; icon: React.ElementType }[] = [
    { id: 'hero', label: '1. Hero & Headline', icon: Layout },
    { id: 'card', label: '2. Kartu Silabus Hero', icon: ImageIcon },
    { id: 'manifesto', label: '3. Filosofi & Manifesto', icon: Type },
    { id: 'catalog', label: '4. Header Katalog', icon: Layers },
    { id: 'tools', label: '5. Lab Seduh Spotlight', icon: Sparkles },
    { id: 'comparison', label: '6. Tabel Benchmark', icon: TableIcon },
    { id: 'bottomCta', label: '7. Banner CTA Bawah', icon: Megaphone },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Top action bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif font-black text-2xl text-roast-950">Visual Page Builder</h1>
          <p className="text-sm text-roast-500 mt-0.5">
            Kelola seluruh konten, teks narasi, tombol, dan gambar di setiap bagian platform
          </p>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-mono border border-paper-300 rounded-lg text-roast-600 hover:border-roast-400 bg-white transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            Buka Situs Live ↗
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
                Tersimpan & Live!
              </>
            ) : (
              <>
                <Save className="w-3.5 h-3.5" />
                Simpan & Publish
              </>
            )}
          </button>
        </div>
      </div>

      {/* Page Selector Tabs */}
      <div className="flex items-center gap-2 border-b border-paper-200">
        <button
          onClick={() => setActivePage('landing')}
          className={`px-4 py-2.5 font-mono text-xs uppercase tracking-wider font-bold border-b-2 transition-colors flex items-center gap-2 ${
            activePage === 'landing'
              ? 'border-cherry-700 text-cherry-900'
              : 'border-transparent text-roast-400 hover:text-roast-700'
          }`}
        >
          <span>Landing Page (Beranda /)</span>
          <span className="font-mono text-[9px] px-1.5 py-0.5 bg-paper-200 rounded text-roast-600">
            7 Seksi
          </span>
        </button>
        <button
          onClick={() => setActivePage('about')}
          className={`px-4 py-2.5 font-mono text-xs uppercase tracking-wider font-bold border-b-2 transition-colors ${
            activePage === 'about'
              ? 'border-cherry-700 text-cherry-900'
              : 'border-transparent text-roast-400 hover:text-roast-700'
          }`}
        >
          Halaman Tentang Kami (/about)
        </button>
        <button
          onClick={() => setActivePage('paths')}
          className={`px-4 py-2.5 font-mono text-xs uppercase tracking-wider font-bold border-b-2 transition-colors ${
            activePage === 'paths'
              ? 'border-cherry-700 text-cherry-900'
              : 'border-transparent text-roast-400 hover:text-roast-700'
          }`}
        >
          Katalog Kurikulum (/paths)
        </button>
      </div>

      {activePage === 'landing' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Section Navigation Column */}
          <div className="lg:col-span-3 space-y-2">
            <div className="bg-white rounded-xl border border-paper-200 p-3">
              <span className="font-mono text-[10px] uppercase tracking-widest text-roast-400 font-bold block mb-2 px-2">
                Pilih Seksi Yang Diedit
              </span>
              <div className="space-y-1">
                {sectionTabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveSection(tab.id)}
                      className={`w-full text-left px-3 py-2.5 rounded-lg text-xs font-semibold transition-colors flex items-center justify-between ${
                        activeSection === tab.id
                          ? 'bg-roast-950 text-paper-50 shadow-sm'
                          : 'text-roast-700 hover:bg-paper-50'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-3.5 h-3.5 shrink-0 opacity-80" />
                        <span className="truncate">{tab.label}</span>
                      </div>
                      <ChevronRight className="w-3 h-3 opacity-60" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Preview Card */}
            <div className="bg-paper-100 rounded-xl border border-paper-200 p-4 text-xs text-roast-600 space-y-2">
              <p className="font-bold text-roast-900">💡 Tips Editor:</p>
              <p className="text-[11px] leading-relaxed">
                Setiap perubahan teks atau tautan yang kamu simpan akan langsung terlihat oleh semua
                pengunjung website di halaman utama.
              </p>
            </div>
          </div>

          {/* Form Editor Area */}
          <div className="lg:col-span-9 bg-white rounded-xl border border-paper-200 p-6 space-y-6">
            {/* 1. HERO SECTION */}
            {activeSection === 'hero' && (
              <div className="space-y-6">
                <div className="border-b border-paper-100 pb-3">
                  <h2 className="font-serif font-black text-lg text-roast-950">
                    Seksi 1: Hero & Headline Utama
                  </h2>
                  <p className="text-xs text-roast-500">
                    Bagian teratas halaman landing page tempat judul besar dan pengantar ditampilkan.
                  </p>
                </div>

                <div className="space-y-4 text-xs">
                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-wider text-roast-500 font-bold mb-1.5">
                      Headline / Judul Utama *
                    </label>
                    <textarea
                      rows={3}
                      value={draftConfig.hero.headline}
                      onChange={(e) => updateHero('headline', e.target.value)}
                      className="w-full text-sm font-serif font-bold border border-paper-200 rounded-lg p-3 text-roast-950 focus:outline-none focus:border-roast-400"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-wider text-roast-500 font-bold mb-1.5">
                      Deskripsi Pengantar *
                    </label>
                    <textarea
                      rows={3}
                      value={draftConfig.hero.description}
                      onChange={(e) => updateHero('description', e.target.value)}
                      className="w-full text-xs leading-relaxed border border-paper-200 rounded-lg p-3 text-roast-800 focus:outline-none focus:border-roast-400 resize-none"
                    />
                  </div>

                  {/* Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="space-y-2 p-3 bg-paper-50 rounded-lg border border-paper-200">
                      <p className="font-mono text-[10px] uppercase tracking-wider font-bold text-cherry-800">
                        Tombol Utama (Hitam)
                      </p>
                      <div>
                        <label className="block text-[10px] text-roast-400 mb-1">Teks Tombol</label>
                        <input
                          value={draftConfig.hero.primaryCtaText}
                          onChange={(e) => updateHero('primaryCtaText', e.target.value)}
                          className="w-full text-xs border border-paper-200 rounded p-2 bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] text-roast-400 mb-1">Tautan Link</label>
                        <input
                          value={draftConfig.hero.primaryCtaLink}
                          onChange={(e) => updateHero('primaryCtaLink', e.target.value)}
                          className="w-full text-xs font-mono border border-paper-200 rounded p-2 bg-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-2 p-3 bg-paper-50 rounded-lg border border-paper-200">
                      <p className="font-mono text-[10px] uppercase tracking-wider font-bold text-roast-700">
                        Tombol Sekunder (Putih)
                      </p>
                      <div>
                        <label className="block text-[10px] text-roast-400 mb-1">Teks Tombol</label>
                        <input
                          value={draftConfig.hero.secondaryCtaText}
                          onChange={(e) => updateHero('secondaryCtaText', e.target.value)}
                          className="w-full text-xs border border-paper-200 rounded p-2 bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] text-roast-400 mb-1">Tautan Link</label>
                        <input
                          value={draftConfig.hero.secondaryCtaLink}
                          onChange={(e) => updateHero('secondaryCtaLink', e.target.value)}
                          className="w-full text-xs font-mono border border-paper-200 rounded p-2 bg-white"
                        />
                      </div>
                    </div>
                  </div>

                  {/* 4 Specs */}
                  <div className="pt-3">
                    <p className="font-mono text-[10px] uppercase tracking-wider font-bold text-roast-500 mb-2">
                      4 Label Spesifikasi (Di Bawah Tombol)
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {draftConfig.hero.specs.map((spec, idx) => (
                        <div key={idx} className="p-2.5 bg-paper-50 border border-paper-200 rounded-lg space-y-1">
                          <input
                            value={spec.label}
                            onChange={(e) => updateSpec(idx, 'label', e.target.value)}
                            placeholder="Label"
                            className="w-full text-[10px] font-mono uppercase text-roast-400 font-bold bg-transparent border-none outline-none"
                          />
                          <input
                            value={spec.value}
                            onChange={(e) => updateSpec(idx, 'value', e.target.value)}
                            placeholder="Nilai"
                            className="w-full text-xs font-bold text-roast-900 bg-transparent border-none outline-none"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. ARCHITECTURAL CARD */}
            {activeSection === 'card' && (
              <div className="space-y-6">
                <div className="border-b border-paper-100 pb-3">
                  <h2 className="font-serif font-black text-lg text-roast-950">
                    Seksi 2: Kartu Silabus Architectural Hero
                  </h2>
                  <p className="text-xs text-roast-500">
                    Kartu visual di sebelah kanan banner hero yang memamerkan silabus modul hulu ke hilir.
                  </p>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                        Header Stamp / Tagline
                      </label>
                      <input
                        value={draftConfig.hero.cardTagline}
                        onChange={(e) => updateHero('cardTagline', e.target.value)}
                        className="w-full border border-paper-200 rounded-lg p-2.5"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                        Judul Kartu
                      </label>
                      <input
                        value={draftConfig.hero.cardTitle}
                        onChange={(e) => updateHero('cardTitle', e.target.value)}
                        className="w-full border border-paper-200 rounded-lg p-2.5 font-bold"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                        Badge Volume
                      </label>
                      <input
                        value={draftConfig.hero.cardVol}
                        onChange={(e) => updateHero('cardVol', e.target.value)}
                        className="w-full border border-paper-200 rounded-lg p-2.5 font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                        Foto Cover (URL)
                      </label>
                      <input
                        value={draftConfig.hero.cardImage}
                        onChange={(e) => updateHero('cardImage', e.target.value)}
                        className="w-full border border-paper-200 rounded-lg p-2.5 font-mono text-[11px]"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                        Keterangan Origin / Ketinggian
                      </label>
                      <input
                        value={draftConfig.hero.cardAltitude}
                        onChange={(e) => updateHero('cardAltitude', e.target.value)}
                        className="w-full border border-paper-200 rounded-lg p-2.5"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-2">
                      Daftar Modul Checklist (F-01 s/d F-07)
                    </label>
                    <div className="space-y-2">
                      {draftConfig.hero.cardModules.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 p-2 bg-paper-50 rounded-lg border border-paper-200">
                          <input
                            value={item.code}
                            onChange={(e) => updateCardModule(idx, 'code', e.target.value)}
                            className="w-16 font-mono text-xs font-bold text-cherry-700 bg-white border border-paper-200 rounded p-1.5 text-center"
                          />
                          <input
                            value={item.title}
                            onChange={(e) => updateCardModule(idx, 'title', e.target.value)}
                            className="flex-1 text-xs bg-white border border-paper-200 rounded p-1.5"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                        Teks Tombol Silabus
                      </label>
                      <input
                        value={draftConfig.hero.cardCtaText}
                        onChange={(e) => updateHero('cardCtaText', e.target.value)}
                        className="w-full border border-paper-200 rounded-lg p-2.5"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                        Tautan Tombol Silabus
                      </label>
                      <input
                        value={draftConfig.hero.cardCtaLink}
                        onChange={(e) => updateHero('cardCtaLink', e.target.value)}
                        className="w-full border border-paper-200 rounded-lg p-2.5 font-mono"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 3. MANIFESTO */}
            {activeSection === 'manifesto' && (
              <div className="space-y-6">
                <div className="border-b border-paper-100 pb-3">
                  <h2 className="font-serif font-black text-lg text-roast-950">
                    Seksi 3: Filosofi & The Farm to Cup Mandate
                  </h2>
                  <p className="text-xs text-roast-500">
                    Bagian filosofi dasar mengapa pemahaman kopi dari hulu ke hilir mutlak diperlukan.
                  </p>
                </div>

                <div className="space-y-4 text-xs">
                  <div>
                    <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                      Eyebrow / Subjudul Kecil
                    </label>
                    <input
                      value={draftConfig.manifesto.eyebrow}
                      onChange={(e) => updateManifesto('eyebrow', e.target.value)}
                      className="w-full font-mono text-xs border border-paper-200 rounded-lg p-2.5"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                      Judul Seksi
                    </label>
                    <input
                      value={draftConfig.manifesto.heading}
                      onChange={(e) => updateManifesto('heading', e.target.value)}
                      className="w-full font-serif font-bold text-sm border border-paper-200 rounded-lg p-2.5"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                      Kutipan Blockquote
                    </label>
                    <textarea
                      rows={2}
                      value={draftConfig.manifesto.quote}
                      onChange={(e) => updateManifesto('quote', e.target.value)}
                      className="w-full italic font-serif text-xs border border-paper-200 rounded-lg p-2.5"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                      Paragraf Narasi
                    </label>
                    <textarea
                      rows={4}
                      value={draftConfig.manifesto.paragraph}
                      onChange={(e) => updateManifesto('paragraph', e.target.value)}
                      className="w-full text-xs leading-relaxed border border-paper-200 rounded-lg p-2.5"
                    />
                  </div>

                  {/* 2 Layer Blueprints */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-3 bg-paper-50 rounded-lg border border-paper-200 space-y-2">
                      <p className="font-mono text-[10px] uppercase font-bold text-cherry-800">
                        Lapis 01 (Fondasi)
                      </p>
                      <input
                        value={draftConfig.manifesto.layer1Title}
                        onChange={(e) => updateManifesto('layer1Title', e.target.value)}
                        placeholder="Judul Lapis 1"
                        className="w-full text-xs font-bold border border-paper-200 rounded p-2 bg-white"
                      />
                      <textarea
                        rows={2}
                        value={draftConfig.manifesto.layer1Desc}
                        onChange={(e) => updateManifesto('layer1Desc', e.target.value)}
                        placeholder="Deskripsi"
                        className="w-full text-xs border border-paper-200 rounded p-2 bg-white"
                      />
                    </div>

                    <div className="p-3 bg-paper-50 rounded-lg border border-paper-200 space-y-2">
                      <p className="font-mono text-[10px] uppercase font-bold text-crema-800">
                        Lapis 02 (Spesialisasi)
                      </p>
                      <input
                        value={draftConfig.manifesto.layer2Title}
                        onChange={(e) => updateManifesto('layer2Title', e.target.value)}
                        placeholder="Judul Lapis 2"
                        className="w-full text-xs font-bold border border-paper-200 rounded p-2 bg-white"
                      />
                      <textarea
                        rows={2}
                        value={draftConfig.manifesto.layer2Desc}
                        onChange={(e) => updateManifesto('layer2Desc', e.target.value)}
                        placeholder="Deskripsi"
                        className="w-full text-xs border border-paper-200 rounded p-2 bg-white"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 4. CATALOG HEADER */}
            {activeSection === 'catalog' && (
              <div className="space-y-6">
                <div className="border-b border-paper-100 pb-3">
                  <h2 className="font-serif font-black text-lg text-roast-950">
                    Seksi 4: Header Katalog Kurikulum
                  </h2>
                  <p className="text-xs text-roast-500">
                    Teks pengantar di atas barisan kartu learning paths.
                  </p>
                </div>

                <div className="space-y-4 text-xs">
                  <div>
                    <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                      Eyebrow / Subjudul Kecil
                    </label>
                    <input
                      value={draftConfig.catalog.eyebrow}
                      onChange={(e) =>
                        setDraftConfig({
                          ...draftConfig,
                          catalog: { ...draftConfig.catalog, eyebrow: e.target.value },
                        })
                      }
                      className="w-full font-mono text-xs border border-paper-200 rounded-lg p-2.5"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                      Judul Seksi
                    </label>
                    <input
                      value={draftConfig.catalog.heading}
                      onChange={(e) =>
                        setDraftConfig({
                          ...draftConfig,
                          catalog: { ...draftConfig.catalog, heading: e.target.value },
                        })
                      }
                      className="w-full font-serif font-bold text-sm border border-paper-200 rounded-lg p-2.5"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                        Teks Link Semua Katalog
                      </label>
                      <input
                        value={draftConfig.catalog.allCatalogText}
                        onChange={(e) =>
                          setDraftConfig({
                            ...draftConfig,
                            catalog: { ...draftConfig.catalog, allCatalogText: e.target.value },
                          })
                        }
                        className="w-full border border-paper-200 rounded-lg p-2.5"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                        URL Link Semua Katalog
                      </label>
                      <input
                        value={draftConfig.catalog.allCatalogLink}
                        onChange={(e) =>
                          setDraftConfig({
                            ...draftConfig,
                            catalog: { ...draftConfig.catalog, allCatalogLink: e.target.value },
                          })
                        }
                        className="w-full border border-paper-200 rounded-lg p-2.5 font-mono"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 5. TOOLS SPOTLIGHT */}
            {activeSection === 'tools' && (
              <div className="space-y-6">
                <div className="border-b border-paper-100 pb-3">
                  <h2 className="font-serif font-black text-lg text-roast-950">
                    Seksi 5: Lab Seduh & Kalkulator Rasio
                  </h2>
                  <p className="text-xs text-roast-500">
                    Pengantar instrumen interaktif Brewing Calculator di halaman muka.
                  </p>
                </div>

                <div className="space-y-4 text-xs">
                  <div>
                    <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                      Eyebrow / Subjudul Kecil
                    </label>
                    <input
                      value={draftConfig.tools.eyebrow}
                      onChange={(e) =>
                        setDraftConfig({
                          ...draftConfig,
                          tools: { ...draftConfig.tools, eyebrow: e.target.value },
                        })
                      }
                      className="w-full font-mono text-xs border border-paper-200 rounded-lg p-2.5"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                      Judul Seksi
                    </label>
                    <input
                      value={draftConfig.tools.heading}
                      onChange={(e) =>
                        setDraftConfig({
                          ...draftConfig,
                          tools: { ...draftConfig.tools, heading: e.target.value },
                        })
                      }
                      className="w-full font-serif font-bold text-sm border border-paper-200 rounded-lg p-2.5"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                      Deskripsi
                    </label>
                    <textarea
                      rows={3}
                      value={draftConfig.tools.description}
                      onChange={(e) =>
                        setDraftConfig({
                          ...draftConfig,
                          tools: { ...draftConfig.tools, description: e.target.value },
                        })
                      }
                      className="w-full border border-paper-200 rounded-lg p-2.5 resize-none leading-relaxed"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* 6. COMPARISON TABLE */}
            {activeSection === 'comparison' && (
              <div className="space-y-6">
                <div className="border-b border-paper-100 pb-3 flex items-center justify-between">
                  <div>
                    <h2 className="font-serif font-black text-lg text-roast-950">
                      Seksi 6: Tabel Benchmark & Perbandingan
                    </h2>
                    <p className="text-xs text-roast-500">
                      Tabel komparasi Mengapa Memilih CherryEdu dibanding kursus konvensional atau YouTube.
                    </p>
                  </div>
                  <button
                    onClick={addComparisonRow}
                    className="flex items-center gap-1 px-3 py-1.5 bg-paper-100 hover:bg-paper-200 border border-paper-300 rounded text-xs font-mono text-roast-700 font-bold"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    Tambah Baris
                  </button>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                        Eyebrow
                      </label>
                      <input
                        value={draftConfig.comparison.eyebrow}
                        onChange={(e) =>
                          setDraftConfig({
                            ...draftConfig,
                            comparison: { ...draftConfig.comparison, eyebrow: e.target.value },
                          })
                        }
                        className="w-full font-mono text-xs border border-paper-200 rounded-lg p-2.5"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                        Judul
                      </label>
                      <input
                        value={draftConfig.comparison.heading}
                        onChange={(e) =>
                          setDraftConfig({
                            ...draftConfig,
                            comparison: { ...draftConfig.comparison, heading: e.target.value },
                          })
                        }
                        className="w-full font-serif font-bold text-sm border border-paper-200 rounded-lg p-2.5"
                      />
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    <p className="font-mono text-[10px] uppercase text-roast-500 font-bold">
                      Baris Tabel Komparasi ({draftConfig.comparison.rows.length})
                    </p>
                    {draftConfig.comparison.rows.map((row, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-paper-50 rounded-lg border border-paper-200 space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[9px] uppercase font-bold text-roast-400">
                            Baris #{idx + 1}
                          </span>
                          <button
                            onClick={() => deleteComparisonRow(idx)}
                            className="text-roast-300 hover:text-rose-600 p-1 transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                          <div>
                            <label className="block text-[9px] text-roast-400 mb-0.5">Kriteria</label>
                            <input
                              value={row.criteria}
                              onChange={(e) => updateComparisonRow(idx, 'criteria', e.target.value)}
                              className="w-full text-xs font-bold border border-paper-200 rounded p-1.5 bg-white"
                            />
                          </div>
                          <div>
                            <label className="block text-[9px] text-emerald-700 mb-0.5">CherryEdu</label>
                            <input
                              value={row.cherry}
                              onChange={(e) => updateComparisonRow(idx, 'cherry', e.target.value)}
                              className="w-full text-xs font-bold text-emerald-800 border border-emerald-200 rounded p-1.5 bg-emerald-50/40"
                            />
                          </div>
                          <div>
                            <label className="block text-[9px] text-roast-400 mb-0.5">YouTube</label>
                            <input
                              value={row.youtube}
                              onChange={(e) => updateComparisonRow(idx, 'youtube', e.target.value)}
                              className="w-full text-xs border border-paper-200 rounded p-1.5 bg-white"
                            />
                          </div>
                          <div>
                            <label className="block text-[9px] text-roast-400 mb-0.5">Kursus Konvensional</label>
                            <input
                              value={row.course}
                              onChange={(e) => updateComparisonRow(idx, 'course', e.target.value)}
                              className="w-full text-xs border border-paper-200 rounded p-1.5 bg-white"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 7. BOTTOM CTA */}
            {activeSection === 'bottomCta' && (
              <div className="space-y-6">
                <div className="border-b border-paper-100 pb-3">
                  <h2 className="font-serif font-black text-lg text-roast-950">
                    Seksi 7: Banner Call To Action Bawah
                  </h2>
                  <p className="text-xs text-roast-500">
                    Banner penutup di bawah sebelum footer untuk mengajak pengunjung mendaftar.
                  </p>
                </div>

                <div className="space-y-4 text-xs">
                  <div>
                    <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                      Eyebrow / Subjudul Kecil
                    </label>
                    <input
                      value={draftConfig.bottomCta.eyebrow}
                      onChange={(e) =>
                        setDraftConfig({
                          ...draftConfig,
                          bottomCta: { ...draftConfig.bottomCta, eyebrow: e.target.value },
                        })
                      }
                      className="w-full font-mono text-xs border border-paper-200 rounded-lg p-2.5"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                      Judul Banner
                    </label>
                    <input
                      value={draftConfig.bottomCta.heading}
                      onChange={(e) =>
                        setDraftConfig({
                          ...draftConfig,
                          bottomCta: { ...draftConfig.bottomCta, heading: e.target.value },
                        })
                      }
                      className="w-full font-serif font-bold text-sm border border-paper-200 rounded-lg p-2.5"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                      Deskripsi Pengantar
                    </label>
                    <textarea
                      rows={3}
                      value={draftConfig.bottomCta.description}
                      onChange={(e) =>
                        setDraftConfig({
                          ...draftConfig,
                          bottomCta: { ...draftConfig.bottomCta, description: e.target.value },
                        })
                      }
                      className="w-full border border-paper-200 rounded-lg p-2.5 resize-none leading-relaxed"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                        Teks Tombol Aksi
                      </label>
                      <input
                        value={draftConfig.bottomCta.buttonText}
                        onChange={(e) =>
                          setDraftConfig({
                            ...draftConfig,
                            bottomCta: { ...draftConfig.bottomCta, buttonText: e.target.value },
                          })
                        }
                        className="w-full border border-paper-200 rounded-lg p-2.5 font-bold"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-roast-500 font-bold mb-1">
                        Tautan Tombol Link
                      </label>
                      <input
                        value={draftConfig.bottomCta.buttonLink}
                        onChange={(e) =>
                          setDraftConfig({
                            ...draftConfig,
                            bottomCta: { ...draftConfig.bottomCta, buttonLink: e.target.value },
                          })
                        }
                        className="w-full border border-paper-200 rounded-lg p-2.5 font-mono"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-paper-200 p-8 text-center space-y-3">
          <p className="font-serif font-bold text-lg text-roast-950">
            Halaman {activePage === 'about' ? 'Tentang Kami (/about)' : 'Katalog (/paths)'}
          </p>
          <p className="text-xs text-roast-500 max-w-md mx-auto">
            Halaman ini terhubung langsung dengan data kurikulum dan modul platform. Kamu dapat
            menyesuaikan teks pengantar melalui modul Settings & Kurikulum.
          </p>
        </div>
      )}
    </div>
  );
}
