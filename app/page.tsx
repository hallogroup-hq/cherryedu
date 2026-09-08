'use client';

import React from 'react';
import Link from 'next/link';
import { useCherryEdu } from '@/lib/store';
import { DEFAULT_LANDING_CONFIG } from '@/lib/data/defaultLandingConfig';
import { BrewCalculator } from '@/components/BrewCalculator';
import {
  ArrowRight,
  Compass,
  ArrowUpRight,
} from 'lucide-react';

export default function HomePage() {
  const { learningPaths, landingPageConfig } = useCherryEdu();
  const cfg = landingPageConfig || DEFAULT_LANDING_CONFIG;

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* 1. EDITORIAL HERO SECTION */}
      <section className="relative border-b border-paper-300 pt-12 sm:pt-16 pb-16 sm:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black text-roast-950 tracking-tight leading-[1.12]">
                {cfg.hero.headline}
              </h1>

              <p className="text-base sm:text-lg text-roast-700 leading-relaxed font-normal max-w-2xl">
                {cfg.hero.description}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Link
                  href={cfg.hero.primaryCtaLink}
                  className="px-6 py-3.5 bg-roast-950 hover:bg-cherry-800 text-paper-50 rounded-md font-sans text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2.5 transition-all shadow-subtle group"
                >
                  <span>{cfg.hero.primaryCtaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <Link
                  href={cfg.hero.secondaryCtaLink}
                  className="px-5 py-3.5 bg-white hover:bg-paper-100 text-roast-800 border border-paper-300 rounded-md font-sans text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <Compass className="w-3.5 h-3.5 text-cherry-700" />
                  <span>{cfg.hero.secondaryCtaText}</span>
                </Link>
              </div>

              {/* Editorial Spec Ledger */}
              <div className="pt-8 border-t border-paper-300 grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs">
                {cfg.hero.specs.map((spec, sIdx) => (
                  <div key={sIdx}>
                    <span className="block text-[10px] uppercase text-roast-400 font-bold">{spec.label}</span>
                    <span className="font-bold text-roast-900">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Architectural Ledger Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-xl border border-paper-300 p-6 sm:p-7 shadow-card relative">
                {/* Header Stamp */}
                <div className="flex justify-between items-start pb-4 mb-5 border-b border-paper-200">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-roast-500 block font-bold">
                      {cfg.hero.cardTagline}
                    </span>
                    <h3 className="font-serif font-bold text-xl text-roast-950 mt-0.5">
                      {cfg.hero.cardTitle}
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] bg-paper-100 px-2 py-1 rounded text-roast-700 border border-paper-300 uppercase font-bold">
                    {cfg.hero.cardVol}
                  </span>
                </div>

                {/* Cover Image */}
                <div className="relative h-48 rounded-lg overflow-hidden mb-5 border border-paper-200">
                  <img
                    src={cfg.hero.cardImage}
                    alt={cfg.hero.cardTitle}
                    className="w-full h-full object-cover grayscale-15"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-roast-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-paper-50 font-mono text-[11px]">
                    {cfg.hero.cardAltitude}
                  </div>
                </div>

                {/* Module Checklist */}
                <div className="space-y-2 mb-6 font-sans text-xs">
                  {cfg.hero.cardModules.map((item, mIdx) => (
                    <div key={mIdx} className="flex items-center gap-2 text-roast-800">
                      <span className="font-mono text-[10px] font-bold text-cherry-700 shrink-0">{item.code}</span>
                      <span className="truncate">{item.title}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={cfg.hero.cardCtaLink}
                  className="w-full py-2.5 bg-paper-100 hover:bg-paper-200 text-roast-900 border border-paper-300 rounded text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>{cfg.hero.cardCtaText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-roast-600" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE CHERRYEDU MANIFESTO (PHILOSOPHY) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-paper-300 bg-white p-8 sm:p-14 rounded-2xl">
          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-cherry-800 font-bold block">
              {cfg.manifesto.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-black text-roast-950 leading-tight">
              {cfg.manifesto.heading}
            </h2>
            <blockquote className="border-l-2 border-cherry-700 pl-4 py-1 my-4 font-serif italic text-lg text-roast-800">
              {cfg.manifesto.quote}
            </blockquote>
            <p className="text-sm sm:text-base text-roast-700 leading-relaxed">
              {cfg.manifesto.paragraph}
            </p>
          </div>

          {/* Minimalist 2-Layer Visual Blueprint */}
          <div className="mt-10 pt-10 border-t border-paper-200 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl bg-paper-100 border border-paper-300 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-cherry-800 font-bold">
                  {cfg.manifesto.layer1Badge}
                </span>
                <span className="text-[10px] font-mono text-roast-500">{cfg.manifesto.layer1Role}</span>
              </div>
              <h3 className="font-serif font-bold text-lg text-roast-950">
                {cfg.manifesto.layer1Title}
              </h3>
              <p className="text-xs text-roast-700 leading-relaxed">
                {cfg.manifesto.layer1Desc}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-paper-100 border border-paper-300 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-crema-800 font-bold">
                  {cfg.manifesto.layer2Badge}
                </span>
                <span className="text-[10px] font-mono text-roast-500">{cfg.manifesto.layer2Role}</span>
              </div>
              <h3 className="font-serif font-bold text-lg text-roast-950">
                {cfg.manifesto.layer2Title}
              </h3>
              <p className="text-xs text-roast-700 leading-relaxed">
                {cfg.manifesto.layer2Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE CURRICULUM CATALOG */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-paper-300">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-roast-500 font-bold block mb-1">
              {cfg.catalog.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-roast-950">
              {cfg.catalog.heading}
            </h2>
          </div>
          <Link
            href={cfg.catalog.allCatalogLink}
            className="text-xs font-mono uppercase font-bold tracking-wider text-cherry-800 hover:text-cherry-950 flex items-center gap-1"
          >
            <span>{cfg.catalog.allCatalogText}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {learningPaths.map((path, idx) => {
            const isFoundation = path.layer_type === 'foundation';
            return (
              <div
                key={path.id}
                className={`bg-white rounded-xl border flex flex-col justify-between overflow-hidden transition-all ${
                  isFoundation
                    ? 'border-roast-900 shadow-card'
                    : 'border-paper-300 shadow-subtle hover:border-paper-400'
                }`}
              >
                <div>
                  <div className="relative h-44 bg-roast-900">
                    <img
                      src={path.thumbnail_url}
                      alt={path.title}
                      className="w-full h-full object-cover grayscale-15"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-roast-950/80 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 rounded bg-roast-950/80 text-paper-200 border border-white/20">
                        VOL. 0{idx + 1}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 flex justify-between text-xs text-paper-200 font-mono">
                      <span>{path.estimated_hours} Jam</span>
                      <span>{path.total_modules} Modul</span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-cherry-800 font-bold block">
                      {isFoundation ? 'Foundation Pass' : 'Specialization Track'}
                    </span>
                    <h3 className="font-serif font-bold text-lg text-roast-950 leading-snug">
                      {path.title}
                    </h3>
                    <p className="text-xs text-roast-600 line-clamp-3 leading-relaxed">
                      {path.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link
                    href={`/paths/${path.slug}`}
                    className={`w-full py-2.5 rounded font-sans text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-1.5 transition-colors ${
                      isFoundation
                        ? 'bg-roast-950 hover:bg-cherry-800 text-paper-50'
                        : 'bg-paper-100 hover:bg-paper-200 text-roast-900 border border-paper-300'
                    }`}
                  >
                    <span>Eksplorasi Silabus</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. TACTILE COFFEE TOOL SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="font-mono text-xs uppercase tracking-widest text-roast-500 font-bold block mb-1">
            {cfg.tools.eyebrow}
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-black text-roast-950">
            {cfg.tools.heading}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-roast-600 leading-relaxed">
            {cfg.tools.description}
          </p>
        </div>

        <BrewCalculator />
      </section>

      {/* 5. THE BENCHMARK (COMPARISON TABLE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-paper-300 p-6 sm:p-10 shadow-card">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-roast-500 font-bold block mb-1">
              {cfg.comparison.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-roast-950">
              {cfg.comparison.heading}
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-paper-300 font-mono text-xs uppercase tracking-wider text-roast-500">
                  <th className="py-3 px-4">Kriteria Evaluasi</th>
                  <th className="py-3 px-4 font-bold text-roast-950 bg-paper-100/70">CherryEdu</th>
                  <th className="py-3 px-4">Video Bebas / YouTube</th>
                  <th className="py-3 px-4">Kursus Konvensional</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-paper-200">
                {cfg.comparison.rows.map((row, rIdx) => (
                  <tr key={rIdx}>
                    <td className="py-3.5 px-4 font-bold text-roast-900">{row.criteria}</td>
                    <td className="py-3.5 px-4 font-bold text-emerald-800 bg-paper-100/70">{row.cherry}</td>
                    <td className="py-3.5 px-4 text-roast-500">{row.youtube}</td>
                    <td className="py-3.5 px-4 text-roast-800">{row.course}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION MANIFESTO BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-roast-950 text-paper-50 rounded-2xl p-8 sm:p-14 text-center border border-roast-900 shadow-diploma">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-crema-400 font-bold block">
              {cfg.bottomCta.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-black tracking-tight text-white leading-tight">
              {cfg.bottomCta.heading}
            </h2>
            <p className="text-xs sm:text-sm text-roast-300 leading-relaxed">
              {cfg.bottomCta.description}
            </p>
            <div className="pt-4 flex justify-center">
              <Link
                href={cfg.bottomCta.buttonLink}
                className="px-8 py-3.5 bg-cherry-700 hover:bg-cherry-800 text-white rounded font-sans text-xs uppercase tracking-wider font-bold flex items-center gap-2 transition-all shadow-subtle hover:scale-105"
              >
                <span>{cfg.bottomCta.buttonText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
