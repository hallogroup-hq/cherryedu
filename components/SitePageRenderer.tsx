'use client';

import React from 'react';
import Link from 'next/link';
import { PageSectionItem } from '@/lib/types';
import {
  ArrowRight,
  Quote,
} from "lucide-react";

interface SitePageRendererProps {
  sections: PageSectionItem[];
  fallbackTitle?: string;
}

export const SitePageRenderer: React.FC<SitePageRendererProps> = ({ sections, fallbackTitle }) => {
  const activeSections = sections.filter((s) => s.enabled !== false);

  if (activeSections.length === 0) {
    return (
      <div className="max-w-4xl mx-auto py-24 text-center space-y-4">
        <h1 className="font-serif text-3xl font-bold text-roast-950">{fallbackTitle || 'Halaman Sedang Dipersiapkan'}</h1>
        <p className="font-sans text-sm text-roast-600">Konten halaman ini dapat dikonfigurasi melalui Page Builder di Konsol Pengelola.</p>
        <Link href="/paths" className="inline-block px-5 py-2.5 bg-roast-950 text-white rounded font-mono text-xs font-bold">
          Kembali ke Kurikulum
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-16 sm:space-y-24 pb-24">
      {activeSections.map((sec) => {
        const d = sec.data || {};

        switch (sec.type) {
          // 1. HERO
          case 'hero':
            return (
              <section key={sec.id} className="relative border-b border-paper-300 pt-10 sm:pt-14 pb-14 sm:pb-20 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                    <div className="lg:col-span-7 space-y-6">
                      <h1 className="text-3xl sm:text-5xl font-serif font-black text-roast-950 tracking-tight leading-[1.15]">
                        {d.headline}
                      </h1>
                      <p className="text-base sm:text-lg text-roast-700 leading-relaxed font-normal max-w-2xl">
                        {d.description}
                      </p>

                      <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                        {d.primaryCtaText && (
                          <Link
                            href={d.primaryCtaLink || '/paths'}
                            className="px-6 py-3.5 bg-roast-950 hover:bg-cherry-800 text-paper-50 rounded-md font-sans text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2.5 transition-all shadow-subtle group"
                          >
                            <span>{d.primaryCtaText}</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                          </Link>
                        )}
                        {d.secondaryCtaText && (
                          <Link
                            href={d.secondaryCtaLink || '/about'}
                            className="px-5 py-3.5 bg-white hover:bg-paper-100 text-roast-800 border border-paper-300 rounded-md font-sans text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-colors"
                          >
                            <span>{d.secondaryCtaText}</span>
                          </Link>
                        )}
                      </div>

                      {d.specs && d.specs.length > 0 && (
                        <div className="pt-8 border-t border-paper-300 grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs">
                          {d.specs.map((spec: any, sIdx: number) => (
                            <div key={sIdx}>
                              <span className="block text-[10px] uppercase text-roast-400 font-bold">{spec.label}</span>
                              <span className="font-bold text-roast-900">{spec.value}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Right architectural card */}
                    <div className="lg:col-span-5">
                      <div className="bg-white rounded-xl border border-paper-300 p-6 sm:p-7 shadow-card relative">
                        <div className="flex justify-between items-start pb-4 mb-5 border-b border-paper-200">
                          <div>
                            <span className="font-mono text-[10px] uppercase tracking-widest text-roast-500 block font-bold">
                              {d.cardTagline || 'PROFIL MATERI'}
                            </span>
                            <h3 className="font-serif font-bold text-xl text-roast-950 mt-0.5">
                              {d.cardTitle || 'CherryEdu Focus'}
                            </h3>
                          </div>
                          {d.cardVol && (
                            <span className="font-mono text-[10px] bg-paper-100 px-2 py-1 rounded text-roast-700 border border-paper-300 uppercase font-bold">
                              {d.cardVol}
                            </span>
                          )}
                        </div>

                        {d.cardImage && (
                          <div className="mb-5 overflow-hidden rounded border border-paper-200 aspect-[16/9]">
                            <img src={d.cardImage} alt="Cover" className="w-full h-full object-cover" />
                          </div>
                        )}

                        {d.cardAltitude && (
                          <div className="mb-4 font-mono text-[11px] text-roast-900 bg-paper-100 px-2.5 py-1.5 rounded border border-paper-300">
                            {d.cardAltitude}
                          </div>
                        )}

                        {d.cardModules && d.cardModules.length > 0 && (
                          <div className="space-y-2 mb-5 font-mono text-xs">
                            {d.cardModules.map((m: any, idx: number) => (
                              <div key={idx} className="flex items-center gap-2 p-1.5 bg-paper-50 rounded border border-paper-200 text-roast-800">
                                <span className="text-cherry-700 font-bold">{m.code || '0' + (idx + 1)}</span>
                                <span className="truncate">{m.title}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {d.cardCtaText && (
                          <Link
                            href={d.cardCtaLink || '/paths'}
                            className="w-full py-2.5 bg-roast-950 hover:bg-roast-900 text-white rounded font-mono text-xs font-bold block text-center transition-colors"
                          >
                            {d.cardCtaText}
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );

          // 2. BANNER
          case 'banner':
            return (
              <section key={sec.id} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                  className="rounded-xl p-4 sm:p-5 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-subtle"
                  style={{ backgroundColor: d.bgColor || '#2C1810' }}
                >
                  <p className="font-sans text-xs sm:text-sm font-medium leading-relaxed text-center sm:text-left">
                    {d.text}
                  </p>
                  {d.buttonText && (
                    <Link
                      href={d.buttonLink || '/'}
                      className="px-4 py-2 bg-white text-roast-950 font-mono text-xs font-bold rounded hover:bg-paper-100 transition-colors shrink-0"
                    >
                      {d.buttonText} ↗
                    </Link>
                  )}
                </div>
              </section>
            );

          // 3. EDITORIAL TEXT
          case 'text':
            return (
              <section key={sec.id} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
                {d.eyebrow && (
                  <span className="font-mono text-[10px] uppercase tracking-widest text-cherry-700 font-bold block">
                    {d.eyebrow}
                  </span>
                )}
                {d.title && (
                  <h2 className="font-serif font-bold text-2xl sm:text-3xl text-roast-950 leading-snug">
                    {d.title}
                  </h2>
                )}
                {d.content && (
                  <div className="font-sans text-sm sm:text-base text-roast-700 leading-relaxed space-y-3 whitespace-pre-line">
                    {d.content}
                  </div>
                )}
              </section>
            );

          // 4. CARDS GRID
          case 'cards':
            return (
              <section key={sec.id} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
                {(d.eyebrow || d.title) && (
                  <div>
                    {d.eyebrow && (
                      <span className="font-mono text-[10px] uppercase tracking-widest text-cherry-700 font-bold block mb-1">
                        {d.eyebrow}
                      </span>
                    )}
                    {d.title && (
                      <h2 className="font-serif font-bold text-2xl sm:text-3xl text-roast-950">
                        {d.title}
                      </h2>
                    )}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {d.items?.map((it: any, idx: number) => (
                    <div key={idx} className="bg-white rounded-xl border border-paper-300 p-6 shadow-subtle flex flex-col justify-between space-y-3">
                      <div className="space-y-2">
                        <div className="w-8 h-8 rounded-lg bg-paper-100 border border-paper-200 flex items-center justify-center font-mono font-bold text-xs text-cherry-700">
                          {String(idx + 1).padStart(2, '0')}
                        </div>
                        <h3 className="font-serif font-bold text-lg text-roast-950">{it.title}</h3>
                        <p className="font-sans text-xs sm:text-sm text-roast-600 leading-relaxed">{it.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );

          // 5. IMAGE BANNER
          case 'image':
            return (
              <section key={sec.id} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="overflow-hidden rounded-xl border border-paper-300 shadow-subtle">
                  <img src={d.url} alt={d.title || 'Visual'} className="w-full max-h-[500px] object-cover" />
                  {(d.title || d.caption) && (
                    <div className="p-4 bg-paper-50 border-t border-paper-200">
                      {d.title && <h4 className="font-serif font-bold text-sm text-roast-950">{d.title}</h4>}
                      {d.caption && <p className="font-sans text-xs text-roast-500 mt-0.5">{d.caption}</p>}
                    </div>
                  )}
                </div>
              </section>
            );

          // 6. VIDEO SHOWCASE
          case 'video':
            return (
              <section key={sec.id} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
                {d.title && <h3 className="font-serif font-bold text-2xl text-roast-950 text-center">{d.title}</h3>}
                {d.description && <p className="font-sans text-xs text-roast-600 text-center max-w-xl mx-auto">{d.description}</p>}
                <div className="aspect-[16/9] w-full rounded-xl overflow-hidden border border-paper-300 shadow-subtle bg-black">
                  <iframe src={d.url} className="w-full h-full" allowFullScreen title={d.title || 'Video'} />
                </div>
              </section>
            );

          // 7. CALL TO ACTION (CTA)
          case 'cta':
            return (
              <section key={sec.id} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-roast-950 text-paper-50 rounded-2xl p-8 sm:p-12 text-center space-y-5 border border-roast-900 shadow-card">
                  <h3 className="font-serif font-bold text-2xl sm:text-4xl text-paper-50 max-w-2xl mx-auto">
                    {d.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-paper-200 max-w-xl mx-auto leading-relaxed">
                    {d.description}
                  </p>
                  {d.buttonText && (
                    <Link
                      href={d.buttonLink || '/paths'}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-cherry-700 hover:bg-cherry-800 text-white font-sans text-xs uppercase font-bold tracking-wider rounded-lg transition-colors shadow-sm"
                    >
                      <span>{d.buttonText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              </section>
            );

          // 8. TESTIMONIAL
          case 'testimonial':
            return (
              <section key={sec.id} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-paper-100/70 rounded-xl border border-paper-300 p-8 sm:p-10 space-y-4">
                  <Quote className="w-8 h-8 text-cherry-700 opacity-60" />
                  <p className="font-serif italic text-lg sm:text-xl text-roast-950 leading-relaxed">
                    &ldquo;{d.quote}&rdquo;
                  </p>
                  <div className="pt-2 border-t border-paper-300 font-sans">
                    <div className="font-bold text-sm text-roast-950">{d.author}</div>
                    <div className="text-xs text-roast-500">{d.role}</div>
                  </div>
                </div>
              </section>
            );

          default:
            return null;
        }
      })}
    </div>
  );
};
