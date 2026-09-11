'use client';

import Link from 'next/link';
import { useCherryEdu } from '@/lib/store';
import { DEFAULT_LANDING_CONFIG, DEFAULT_LANDING_SECTIONS } from '@/lib/data/defaultLandingConfig';
import { PageSectionItem } from '@/lib/types';
import { BrewCalculator } from '@/components/BrewCalculator';
import {
  ArrowRight,
  Compass,
  ArrowUpRight,
  Sparkles,
  Quote,
  Video,
} from "lucide-react";

export default function HomePage() {
  const { learningPaths, landingPageConfig } = useCherryEdu();
  const cfg = landingPageConfig || DEFAULT_LANDING_CONFIG;

  const sections: PageSectionItem[] =
    cfg.sections && cfg.sections.length > 0 ? cfg.sections : DEFAULT_LANDING_SECTIONS;

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {sections
        .filter((sec) => sec.enabled !== false)
        .map((sec) => {
          switch (sec.type) {
            // 1. HERO
            case 'hero': {
              const hData = sec.data || cfg.hero;
              return (
                <section
                  key={sec.id}
                  className="relative border-b border-paper-300 pt-12 sm:pt-16 pb-16 sm:pb-24 overflow-hidden"
                >
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                      <div className="lg:col-span-7 space-y-6">
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black text-roast-950 tracking-tight leading-[1.12]">
                          {hData.headline}
                        </h1>

                        <p className="text-base sm:text-lg text-roast-700 leading-relaxed font-normal max-w-2xl">
                          {hData.description}
                        </p>

                        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                          <Link
                            href={hData.primaryCtaLink || '/paths/kopi-dari-hulu-ke-hilir'}
                            className="px-6 py-3.5 bg-roast-950 hover:bg-cherry-800 text-paper-50 rounded-md font-sans text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2.5 transition-all shadow-subtle group"
                          >
                            <span>{hData.primaryCtaText}</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                          </Link>

                          <Link
                            href={hData.secondaryCtaLink || '/onboarding'}
                            className="px-5 py-3.5 bg-white hover:bg-paper-100 text-roast-800 border border-paper-300 rounded-md font-sans text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-colors"
                          >
                            <Compass className="w-3.5 h-3.5 text-cherry-700" />
                            <span>{hData.secondaryCtaText}</span>
                          </Link>
                        </div>

                        {/* Specs */}
                        {hData.specs && hData.specs.length > 0 && (
                          <div className="pt-8 border-t border-paper-300 grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs">
                            {hData.specs.map((spec: any, sIdx: number) => (
                              <div key={sIdx}>
                                <span className="block text-[10px] uppercase text-roast-400 font-bold">
                                  {spec.label}
                                </span>
                                <span className="font-bold text-roast-900">{spec.value}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Right Card */}
                      <div className="lg:col-span-5">
                        <div className="bg-white rounded-xl border border-paper-300 p-6 sm:p-7 shadow-card relative">
                          <div className="flex justify-between items-start pb-4 mb-5 border-b border-paper-200">
                            <div>
                              <span className="font-mono text-[10px] uppercase tracking-widest text-roast-500 block font-bold">
                                {hData.cardTagline}
                              </span>
                              <h3 className="font-serif font-bold text-xl text-roast-950 mt-0.5">
                                {hData.cardTitle}
                              </h3>
                            </div>
                            <span className="font-mono text-[10px] bg-paper-100 px-2 py-1 rounded text-roast-700 border border-paper-300 uppercase font-bold">
                              {hData.cardVol}
                            </span>
                          </div>

                          <div className="relative h-48 rounded-lg overflow-hidden mb-5 border border-paper-200">
                            <img
                              src={hData.cardImage}
                              alt={hData.cardTitle}
                              className="w-full h-full object-cover grayscale-15"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-roast-950/70 via-transparent to-transparent" />
                            <div className="absolute bottom-3 left-3 text-paper-50 font-mono text-[11px]">
                              {hData.cardAltitude}
                            </div>
                          </div>

                          <div className="space-y-2 mb-6 font-sans text-xs">
                            {hData.cardModules?.map((item: any, mIdx: number) => (
                              <div key={mIdx} className="flex items-center gap-2 text-roast-800">
                                <span className="font-mono text-[10px] font-bold text-cherry-700 shrink-0">
                                  {item.code}
                                </span>
                                <span className="truncate">{item.title}</span>
                              </div>
                            ))}
                          </div>

                          <Link
                            href={hData.cardCtaLink || '/paths/kopi-dari-hulu-ke-hilir'}
                            className="w-full py-2.5 bg-paper-100 hover:bg-paper-200 text-roast-900 border border-paper-300 rounded text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                          >
                            <span>{hData.cardCtaText}</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-roast-600" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              );
            }

            // 2. MANIFESTO
            case 'manifesto': {
              const mData = sec.data || cfg.manifesto;
              return (
                <section key={sec.id} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="border border-paper-300 bg-white p-8 sm:p-14 rounded-2xl">
                    <div className="max-w-3xl space-y-4">
                      <span className="font-mono text-xs uppercase tracking-widest text-cherry-800 font-bold block">
                        {mData.eyebrow}
                      </span>
                      <h2 className="text-2xl sm:text-4xl font-serif font-black text-roast-950 leading-tight">
                        {mData.heading}
                      </h2>
                      <blockquote className="border-l-2 border-cherry-700 pl-4 py-1 my-4 font-serif italic text-lg text-roast-800">
                        {mData.quote}
                      </blockquote>
                      <p className="text-sm sm:text-base text-roast-700 leading-relaxed">
                        {mData.paragraph}
                      </p>
                    </div>

                    <div className="mt-10 pt-10 border-t border-paper-200 grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="p-6 rounded-xl bg-paper-100 border border-paper-300 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] uppercase tracking-widest text-cherry-800 font-bold">
                            {mData.layer1Badge}
                          </span>
                          <span className="text-[10px] font-mono text-roast-500">{mData.layer1Role}</span>
                        </div>
                        <h3 className="font-serif font-bold text-lg text-roast-950">
                          {mData.layer1Title}
                        </h3>
                        <p className="text-xs text-roast-700 leading-relaxed">
                          {mData.layer1Desc}
                        </p>
                      </div>

                      <div className="p-6 rounded-xl bg-paper-100 border border-paper-300 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] uppercase tracking-widest text-crema-800 font-bold">
                            {mData.layer2Badge}
                          </span>
                          <span className="text-[10px] font-mono text-roast-500">{mData.layer2Role}</span>
                        </div>
                        <h3 className="font-serif font-bold text-lg text-roast-950">
                          {mData.layer2Title}
                        </h3>
                        <p className="text-xs text-roast-700 leading-relaxed">
                          {mData.layer2Desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              );
            }

            // 3. CATALOG
            case 'catalog': {
              const cData = sec.data || cfg.catalog;
              return (
                <section key={sec.id} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-paper-300">
                    <div>
                      <span className="font-mono text-xs uppercase tracking-widest text-roast-500 font-bold block mb-1">
                        {cData.eyebrow}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-serif font-black text-roast-950">
                        {cData.heading}
                      </h2>
                    </div>
                    <Link
                      href={cData.allCatalogLink || '/paths'}
                      className="text-xs font-mono uppercase font-bold tracking-wider text-cherry-800 hover:text-cherry-950 flex items-center gap-1"
                    >
                      <span>{cData.allCatalogText}</span>
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
              );
            }

            // 4. TOOLS
            case 'tools': {
              const tData = sec.data || cfg.tools;
              return (
                <section key={sec.id} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center max-w-2xl mx-auto mb-10">
                    <span className="font-mono text-xs uppercase tracking-widest text-roast-500 font-bold block mb-1">
                      {tData.eyebrow}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-serif font-black text-roast-950">
                      {tData.heading}
                    </h2>
                    <p className="mt-2 text-xs sm:text-sm text-roast-600 leading-relaxed">
                      {tData.description}
                    </p>
                  </div>

                  <BrewCalculator />
                </section>
              );
            }

            // 5. COMPARISON
            case 'comparison': {
              const compData = sec.data || cfg.comparison;
              return (
                <section key={sec.id} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="bg-white rounded-2xl border border-paper-300 p-6 sm:p-10 shadow-card">
                    <div className="text-center max-w-xl mx-auto mb-8">
                      <span className="font-mono text-xs uppercase tracking-widest text-roast-500 font-bold block mb-1">
                        {compData.eyebrow}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-serif font-black text-roast-950">
                        {compData.heading}
                      </h2>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs sm:text-sm border-collapse">
                        <thead>
                          <tr className="border-b border-paper-300 font-mono text-xs uppercase tracking-wider text-roast-500">
                            <th className="py-3 px-4">Kriteria Evaluasi</th>
                            <th className="py-3 px-4 font-bold text-roast-950 bg-paper-100/70">
                              CherryEdu
                            </th>
                            <th className="py-3 px-4">Video Bebas / YouTube</th>
                            <th className="py-3 px-4">Kursus Konvensional</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-paper-200">
                          {compData.rows?.map((row: any, rIdx: number) => (
                            <tr key={rIdx}>
                              <td className="py-3.5 px-4 font-bold text-roast-900">{row.criteria}</td>
                              <td className="py-3.5 px-4 font-bold text-emerald-800 bg-paper-100/70">
                                {row.cherry}
                              </td>
                              <td className="py-3.5 px-4 text-roast-500">{row.youtube}</td>
                              <td className="py-3.5 px-4 text-roast-800">{row.course}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>
              );
            }

            // 6. BOTTOM CTA
            case 'bottomCta': {
              const bData = sec.data || cfg.bottomCta;
              return (
                <section key={sec.id} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="bg-roast-950 text-paper-50 rounded-2xl p-8 sm:p-14 text-center border border-roast-900 shadow-diploma">
                    <div className="max-w-2xl mx-auto space-y-4">
                      <span className="font-mono text-xs uppercase tracking-widest text-crema-400 font-bold block">
                        {bData.eyebrow}
                      </span>
                      <h2 className="text-2xl sm:text-4xl font-serif font-black tracking-tight text-white leading-tight">
                        {bData.heading}
                      </h2>
                      <p className="text-xs sm:text-sm text-roast-300 leading-relaxed">
                        {bData.description}
                      </p>
                      <div className="pt-4 flex justify-center">
                        <Link
                          href={bData.buttonLink || '/paths/kopi-dari-hulu-ke-hilir'}
                          className="px-8 py-3.5 bg-cherry-700 hover:bg-cherry-800 text-white rounded font-sans text-xs uppercase tracking-wider font-bold flex items-center gap-2 transition-all duration-160 ease-out shadow-subtle active:scale-[0.97]"
                        >
                          <span>{bData.buttonText}</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
              );
            }

            // 7. CUSTOM ANNOUNCEMENT BANNER
            case 'banner': {
              const data = sec.data || {};
              return (
                <section key={sec.id} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div
                    className="rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-paper-50 shadow-sm"
                    style={{ backgroundColor: data.bgColor || '#2C1810' }}
                  >
                    <div className="flex items-center gap-3">
                      <Sparkles className="w-5 h-5 text-crema-400 shrink-0" />
                      <p className="text-xs sm:text-sm font-medium">{data.text}</p>
                    </div>
                    {data.buttonText && (
                      <Link
                        href={data.buttonLink || '#'}
                        className="px-4 py-2 bg-cherry-700 hover:bg-cherry-600 text-white rounded-lg text-xs font-mono font-bold shrink-0 transition-colors"
                      >
                        {data.buttonText}
                      </Link>
                    )}
                  </div>
                </section>
              );
            }

            // 8. CUSTOM EDITORIAL TEXT
            case 'text': {
              const data = sec.data || {};
              return (
                <section key={sec.id} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="bg-white border border-paper-300 p-8 sm:p-12 rounded-2xl space-y-4">
                    {data.eyebrow && (
                      <span className="font-mono text-xs uppercase tracking-widest text-roast-500 font-bold block">
                        {data.eyebrow}
                      </span>
                    )}
                    {data.title && (
                      <h2 className="text-2xl sm:text-3xl font-serif font-black text-roast-950">
                        {data.title}
                      </h2>
                    )}
                    <div className="text-sm sm:text-base text-roast-700 leading-relaxed whitespace-pre-line font-normal">
                      {data.content}
                    </div>
                  </div>
                </section>
              );
            }

            // 9. CUSTOM IMAGE BANNER
            case 'image': {
              const data = sec.data || {};
              return (
                <section key={sec.id} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="rounded-2xl overflow-hidden border border-paper-300 bg-white shadow-subtle">
                    <img
                      src={data.url || 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200'}
                      alt={data.title || 'Visual Banner'}
                      className="w-full max-h-[420px] object-cover"
                    />
                    {(data.title || data.caption) && (
                      <div className="p-4 sm:p-6 bg-white border-t border-paper-200">
                        {data.title && (
                          <h3 className="font-serif font-bold text-lg text-roast-950 mb-1">
                            {data.title}
                          </h3>
                        )}
                        {data.caption && <p className="text-xs text-roast-600">{data.caption}</p>}
                      </div>
                    )}
                  </div>
                </section>
              );
            }

            // 10. CUSTOM VIDEO SHOWCASE
            case 'video': {
              const data = sec.data || {};
              return (
                <section key={sec.id} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="bg-roast-950 rounded-2xl p-6 sm:p-10 border border-roast-900 text-paper-50 space-y-4">
                    {data.title && (
                      <h3 className="font-serif font-bold text-xl sm:text-2xl text-white">
                        {data.title}
                      </h3>
                    )}
                    {data.description && (
                      <p className="text-xs sm:text-sm text-roast-300">{data.description}</p>
                    )}
                    <div className="aspect-video w-full rounded-xl overflow-hidden bg-black/60 border border-white/10 flex items-center justify-center">
                      {data.url ? (
                        <iframe
                          title={data.title || "Video Showcase"}
                          src={data.url}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <div className="text-center text-roast-400 font-mono text-xs">
                          <Video className="w-8 h-8 mx-auto mb-2 opacity-40" />
                          <span>Video belum dimasukkan</span>
                        </div>
                      )}
                    </div>
                  </div>
                </section>
              );
            }

            // 11. CUSTOM CARDS GRID
            case 'cards': {
              const data = sec.data || {};
              const items: any[] = data.items || [];
              return (
                <section key={sec.id} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                  {(data.eyebrow || data.title) && (
                    <div className="text-center max-w-2xl mx-auto">
                      {data.eyebrow && (
                        <span className="font-mono text-xs uppercase tracking-widest text-roast-500 font-bold block mb-1">
                          {data.eyebrow}
                        </span>
                      )}
                      {data.title && (
                        <h2 className="text-2xl sm:text-3xl font-serif font-black text-roast-950">
                          {data.title}
                        </h2>
                      )}
                    </div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((it: any, i: number) => (
                      <div
                        key={i}
                        className="bg-white p-6 rounded-xl border border-paper-300 shadow-subtle space-y-2"
                      >
                        <h3 className="font-bold text-roast-950 text-base">{it.title}</h3>
                        <p className="text-xs text-roast-600 leading-relaxed">{it.description}</p>
                      </div>
                    ))}
                  </div>
                </section>
              );
            }

            // 12. CUSTOM CTA
            case 'cta': {
              const data = sec.data || {};
              return (
                <section key={sec.id} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="bg-paper-100 border border-paper-300 p-8 sm:p-12 rounded-2xl text-center space-y-4">
                    {data.title && (
                      <h2 className="text-2xl sm:text-3xl font-serif font-black text-roast-950">
                        {data.title}
                      </h2>
                    )}
                    {data.description && (
                      <p className="text-sm text-roast-600 max-w-lg mx-auto">{data.description}</p>
                    )}
                    <div className="pt-2">
                      <Link
                        href={data.buttonLink || '/register'}
                        className="inline-block px-6 py-3 bg-roast-950 hover:bg-roast-900 text-paper-50 font-mono text-xs uppercase font-bold tracking-wider rounded-lg transition-colors"
                      >
                        {data.buttonText || 'Mulai Sekarang'}
                      </Link>
                    </div>
                  </div>
                </section>
              );
            }

            // 13. TESTIMONIAL
            case 'testimonial': {
              const data = sec.data || {};
              return (
                <section key={sec.id} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="bg-white border border-paper-300 p-8 sm:p-10 rounded-2xl shadow-subtle text-center space-y-4">
                    <Quote className="w-8 h-8 text-cherry-700/40 mx-auto" />
                    <p className="font-serif italic text-lg sm:text-xl text-roast-900 max-w-2xl mx-auto leading-relaxed">
                      "{data.quote || 'Pendidikan kopi yang paling komprehensif di Indonesia.'}"
                    </p>
                    <div className="pt-2">
                      <p className="font-bold text-sm text-roast-950">{data.author || 'Nama Penulis'}</p>
                      <p className="text-xs text-roast-500 font-mono">{data.role || 'Barista & Q Grader'}</p>
                    </div>
                  </div>
                </section>
              );
            }

            default:
              return null;
          }
        })}
    </div>
  );
}
