'use client';

import { useState, useMemo } from "react";
import Link from 'next/link';
import { COFFEE_LEXICON, LexiconTerm } from '@/lib/data/lexiconData';
import {
  Search,
  Volume2,
  Copy,
  Check,
  ArrowRight,
  Filter,
  Sparkles,
  Info,
} from "lucide-react";

const CATEGORIES = [
  'Semua',
  'Agronomi & Botani',
  'Pasca Panen',
  'Roasting Science',
  'Brewing & Espresso',
  'Sensory & Cupping',
  'Kimia Air',
  'Bisnis & Manajemen',
] as const;

const ALPHABETS = [
  'ALL',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

export default function CoffeeLexiconPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [selectedLetter, setSelectedLetter] = useState<string>('ALL');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [speakingId, setSpeakingId] = useState<string | null>(null);

  const filteredTerms = useMemo(() => {
    return COFFEE_LEXICON.filter((item) => {
      // Category filter
      if (selectedCategory !== 'Semua' && item.category !== selectedCategory) {
        return false;
      }
      // Alphabet filter
      if (selectedLetter !== 'ALL') {
        const firstLetter = item.term.charAt(0).toUpperCase();
        if (firstLetter !== selectedLetter) return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTerm = item.term.toLowerCase().includes(q);
        const matchesEn = item.termEn?.toLowerCase().includes(q);
        const matchesDef = item.shortDef.toLowerCase().includes(q) || item.fullDef.toLowerCase().includes(q);
        const matchesParam = item.parameters?.toLowerCase().includes(q);
        return matchesTerm || matchesEn || matchesDef || matchesParam;
      }
      return true;
    });
  }, [searchQuery, selectedCategory, selectedLetter]);

  const handleCopy = (item: LexiconTerm) => {
    const textToCopy = `${item.term} (${item.termEn || ''}):\n${item.fullDef}\n\nParameter: ${item.parameters || '-'}\nAplikasi: ${item.practicalApplication}\n— Sumber: CherryEdu Coffee Lexicon`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handlePronounce = (item: LexiconTerm) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    if (speakingId === item.id) {
      window.speechSynthesis.cancel();
      setSpeakingId(null);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(`${item.term}. ${item.shortDef}`);
    utterance.lang = 'id-ID';
    utterance.rate = 0.95;
    utterance.onend = () => setSpeakingId(null);
    utterance.onerror = () => setSpeakingId(null);

    setSpeakingId(item.id);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="min-h-screen bg-paper-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb & Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-roast-500 uppercase tracking-widest mb-3">
            <Link href="/" className="hover:text-cherry-700 transition-colors">Beranda</Link>
            <span>/</span>
            <Link href="/tools" className="hover:text-cherry-700 transition-colors">Alat Seduh & Riset</Link>
            <span>/</span>
            <span className="text-cherry-700 font-bold">Kamus Kopi (Lexicon)</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-paper-300 pb-6">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cherry-50 border border-cherry-200 text-cherry-800 text-[11px] font-mono font-bold tracking-wider uppercase mb-2">
                <Sparkles className="w-3.5 h-3.5 text-cherry-600" />
                SCA & CQI Curated Terminology
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl font-black text-roast-950 tracking-tight">
                Glosarium & Kamus Kopi Interaktif
              </h1>
              <p className="mt-2 text-sm sm:text-base text-roast-700 max-w-3xl leading-relaxed">
                Kompilasi ilmiah istilah resmi industri kopi specialty dari hulu hingga hilir. Dilengkapi parameter teknis, formula, panduan pengucapan audio, dan contoh aplikasi nyata di lapangan.
              </p>
            </div>

            {/* Link to Flashcards & Tools */}
            <div className="flex items-center gap-2 shrink-0">
              <Link
                href="/flashcards"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-roast-900 hover:bg-roast-950 text-paper-50 font-mono text-xs uppercase font-bold tracking-wider transition-all shadow-xs"
              >
                <span>Latihan Flashcards</span>
                <ArrowRight className="w-3.5 h-3.5 text-crema-400" />
              </Link>
            </div>
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="bg-white rounded-xl border border-paper-300 p-5 mb-8 shadow-xs space-y-4">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-roast-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari istilah, formula, atau kata kunci (contoh: Brix, DTR, Maillard, WDT, Extraction Yield, Ca2+)..."
              className="w-full pl-11 pr-4 py-3 bg-paper-50 rounded-lg border border-paper-300 text-roast-950 text-sm focus:outline-none focus:ring-2 focus:ring-cherry-700/30 focus:border-cherry-700 transition-all font-sans"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-mono text-roast-400 hover:text-roast-700 px-2 py-1 bg-paper-200 rounded"
              >
                Reset
              </button>
            )}
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-roast-500 uppercase tracking-wider mr-1 py-1">
              <Filter className="w-3 h-3" />
              Kategori:
            </span>
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-md text-xs font-mono transition-all ${
                    active
                      ? 'bg-cherry-700 text-white font-bold shadow-xs'
                      : 'bg-paper-100 hover:bg-paper-200 text-roast-700 border border-paper-300/80'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Alphabet Filter Strip */}
          <div className="flex flex-wrap items-center gap-1 pt-2 border-t border-paper-200">
            <span className="text-[11px] font-mono text-roast-400 font-bold uppercase tracking-wider mr-1">
              Abjad:
            </span>
            {ALPHABETS.map((letter) => {
              const active = selectedLetter === letter;
              return (
                <button
                  key={letter}
                  onClick={() => setSelectedLetter(letter)}
                  className={`min-w-[26px] h-7 px-1.5 rounded text-xs font-mono font-bold transition-all ${
                    active
                      ? 'bg-roast-950 text-crema-300'
                      : 'hover:bg-paper-200 text-roast-600'
                  }`}
                >
                  {letter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs font-mono text-roast-500 mb-4 px-1">
          <span>
            Menampilkan <strong className="text-roast-950">{filteredTerms.length}</strong> istilah terkurasi
            {selectedCategory !== 'Semua' && ` di kategori "${selectedCategory}"`}
            {selectedLetter !== 'ALL' && ` berawalan huruf "${selectedLetter}"`}
          </span>
          {(searchQuery || selectedCategory !== 'Semua' || selectedLetter !== 'ALL') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('Semua');
                setSelectedLetter('ALL');
              }}
              className="text-cherry-700 hover:underline font-bold"
            >
              Hapus Semua Filter
            </button>
          )}
        </div>

        {/* Term Cards Grid */}
        {filteredTerms.length === 0 ? (
          <div className="bg-white rounded-xl border border-dashed border-paper-300 p-12 text-center">
            <Info className="w-10 h-10 text-roast-300 mx-auto mb-3" />
            <h3 className="font-serif text-lg font-bold text-roast-950">Istilah Tidak Ditemukan</h3>
            <p className="text-xs text-roast-600 max-w-md mx-auto mt-1">
              Tidak ada istilah yang cocok dengan kata kunci &quot;{searchQuery}&quot;. Coba gunakan kata kunci lain atau bersihkan filter pencarian.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredTerms.map((item) => {
              const isCopied = copiedId === item.id;
              const isSpeaking = speakingId === item.id;

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-xl border border-paper-300 p-5 sm:p-6 shadow-xs hover:border-paper-400 hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Card Top: Term & Category & Actions */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-serif text-xl font-bold text-roast-950 tracking-tight group-hover:text-cherry-800 transition-colors">
                            {item.term}
                          </h3>
                          {/* Audio pronunciation button */}
                          <button
                            onClick={() => handlePronounce(item)}
                            className={`p-1.5 rounded-full transition-colors ${
                              isSpeaking
                                ? 'bg-cherry-100 text-cherry-700 animate-pulse'
                                : 'text-roast-400 hover:text-roast-800 hover:bg-paper-100'
                            }`}
                            title="Dengarkan pengucapan & definisi ringkas"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </div>
                        {item.termEn && (
                          <span className="text-xs font-sans italic text-roast-500 font-medium">
                            {item.termEn}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-1.5">
                        <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-paper-100 text-roast-700 border border-paper-300/70 shrink-0">
                          {item.category}
                        </span>
                        <button
                          onClick={() => handleCopy(item)}
                          className="p-1.5 rounded text-roast-400 hover:text-roast-800 hover:bg-paper-100 transition-colors"
                          title="Salin definisi istilah"
                        >
                          {isCopied ? (
                            <Check className="w-4 h-4 text-emerald-600" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Short Definition / Highlight */}
                    <p className="text-xs sm:text-[13px] font-medium text-roast-900 leading-relaxed mb-3 bg-paper-50 p-2.5 rounded-lg border border-paper-200">
                      {item.shortDef}
                    </p>

                    {/* Full Definition */}
                    <p className="text-xs text-roast-700 leading-relaxed mb-4">
                      {item.fullDef}
                    </p>

                    {/* Parameters Box (if available) */}
                    {item.parameters && (
                      <div className="bg-amber-50/70 border border-amber-200/80 rounded-lg p-3 text-xs mb-3 text-amber-950 font-sans">
                        <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-amber-800 block mb-1">
                          ☕ Parameter Ilmiah / Standar:
                        </span>
                        <span className="font-medium">{item.parameters}</span>
                      </div>
                    )}

                    {/* Practical Application */}
                    <div className="border-l-2 border-cherry-700 pl-3 py-1 mb-4 text-xs text-roast-800 bg-paper-50/50 rounded-r">
                      <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-cherry-800 block">
                        Aplikasi Praktis di Bar / Roastery:
                      </span>
                      <span className="italic">{item.practicalApplication}</span>
                    </div>
                  </div>

                  {/* Related Terms */}
                  {item.relatedTerms && item.relatedTerms.length > 0 && (
                    <div className="pt-3 border-t border-paper-200 flex items-center gap-1.5 flex-wrap">
                      <span className="text-[10px] font-mono text-roast-400 uppercase font-semibold">Terkait:</span>
                      {item.relatedTerms.map((rt) => (
                        <button
                          key={rt}
                          onClick={() => setSearchQuery(rt)}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-paper-100 hover:bg-cherry-50 hover:text-cherry-700 text-roast-600 transition-colors border border-paper-200"
                        >
                          #{rt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
