'use client';

import React, { useState, useEffect, useMemo } from 'react';
import confetti from 'canvas-confetti';
import {
  Sparkles,
  HelpCircle,
  Trophy,
  Share2,
  RotateCcw,
  ArrowUp,
  ArrowDown,
  Check,
  X,
  Coffee,
  Calendar,
  Layers,
  Search,
  ChevronDown,
} from 'lucide-react';

interface CoffeeOrigin {
  id: string;
  name: string;
  region: 'Sumatra' | 'Jawa' | 'Bali & NT' | 'Sulawesi' | 'Papua' | 'Afrika' | 'Amerika' | 'Asia';
  species: 'Arabica' | 'Fine Robusta';
  process: 'Washed' | 'Natural' | 'Wet-Hulled' | 'Honey';
  elevation: number; // in mdpl
  flavorFamily: 'Floral' | 'Citrus' | 'Berry' | 'Chocolate' | 'Spices' | 'Nutty';
  hint: string;
}

const BEAN_POOL: CoffeeOrigin[] = [
  {
    id: 'aceh-gayo',
    name: 'Aceh Gayo',
    region: 'Sumatra',
    species: 'Arabica',
    process: 'Wet-Hulled',
    elevation: 1500,
    flavorFamily: 'Spices',
    hint: 'Tumbuh di dataran tinggi Danau Laut Tawar, terkenal dengan teknik giling basah legendaris.',
  },
  {
    id: 'sumatra-kerinci',
    name: 'Sumatra Kerinci',
    region: 'Sumatra',
    species: 'Arabica',
    process: 'Washed',
    elevation: 1600,
    flavorFamily: 'Citrus',
    hint: 'Ditanam di lereng gunung tertinggi Sumatra, berkarakter apel hijau renyah dan rempah manis.',
  },
  {
    id: 'mandheling-lintong',
    name: 'Mandheling Lintong',
    region: 'Sumatra',
    species: 'Arabica',
    process: 'Wet-Hulled',
    elevation: 1400,
    flavorFamily: 'Spices',
    hint: 'Terletak di barat daya Danau Toba, berkarakter bodi sangat pekat dengan aroma cedar dan tembakau.',
  },
  {
    id: 'lampung-robusta',
    name: 'Lampung Tanggamus',
    region: 'Sumatra',
    species: 'Fine Robusta',
    process: 'Natural',
    elevation: 750,
    flavorFamily: 'Chocolate',
    hint: 'Pusat perkopian Robusta terbesar Indonesia di ujung selatan Sumatra.',
  },
  {
    id: 'java-preanger',
    name: 'Java Preanger (Priangan)',
    region: 'Jawa',
    species: 'Arabica',
    process: 'Washed',
    elevation: 1550,
    flavorFamily: 'Floral',
    hint: 'Asal mula istilah sejarah "A Cup of Java", terkenal dengan aroma bunga melati dan teh hitam anggun.',
  },
  {
    id: 'temanggung-robusta',
    name: 'Temanggung Robusta',
    region: 'Jawa',
    species: 'Fine Robusta',
    process: 'Natural',
    elevation: 800,
    flavorFamily: 'Nutty',
    hint: 'Lereng Gunung Sindoro-Sumbing, juara Fine Robusta Jawa dengan rasa gula kelapa dan kacang panggang.',
  },
  {
    id: 'java-ijen',
    name: 'Java Ijen-Raung',
    region: 'Jawa',
    species: 'Arabica',
    process: 'Washed',
    elevation: 1400,
    flavorFamily: 'Chocolate',
    hint: 'Ditanam di kaldera belerang ujung timur Pulau Jawa dengan iklim kering musiman yang sejuk.',
  },
  {
    id: 'dampit-malang',
    name: 'Dampit Malang',
    region: 'Jawa',
    species: 'Fine Robusta',
    process: 'Washed',
    elevation: 850,
    flavorFamily: 'Chocolate',
    hint: 'Fine Robusta proses basah di kaki Gunung Semeru, primadona bahan dasar espresso Italia.',
  },
  {
    id: 'bali-kintamani',
    name: 'Bali Kintamani',
    region: 'Bali & NT',
    species: 'Arabica',
    process: 'Natural',
    elevation: 1350,
    flavorFamily: 'Citrus',
    hint: 'Dikelola oleh sistem irigasi kuno Subak Abian di kaki Gunung Batur, sering tumpang sari dengan pohon jeruk.',
  },
  {
    id: 'flores-bajawa',
    name: 'Flores Bajawa',
    region: 'Bali & NT',
    species: 'Arabica',
    process: 'Washed',
    elevation: 1450,
    flavorFamily: 'Chocolate',
    hint: 'Dataran tinggi Ngada di lereng Gunung Inerie, berkarakter cokelat susu dan karamel gurih.',
  },
  {
    id: 'sumbawa-tambora',
    name: 'Sumbawa Tambora',
    region: 'Bali & NT',
    species: 'Arabica',
    process: 'Honey',
    elevation: 1250,
    flavorFamily: 'Berry',
    hint: 'Tumbuh di lereng kaldera letusan terdahsyat dunia 1815, manis beraroma madu dan buah ranum.',
  },
  {
    id: 'toraja-sapan',
    name: 'Toraja Sapan',
    region: 'Sulawesi',
    species: 'Arabica',
    process: 'Washed',
    elevation: 1800,
    flavorFamily: 'Spices',
    hint: 'Elevasi sangat tinggi di utara Rantepao, rumah bagi pohon Typica kuno dengan rasa grapefruit dan rempah.',
  },
  {
    id: 'enrekang-kalosi',
    name: 'Enrekang Kalosi',
    region: 'Sulawesi',
    species: 'Arabica',
    process: 'Wet-Hulled',
    elevation: 1400,
    flavorFamily: 'Spices',
    hint: 'Tetangga selatan Toraja di pegunungan Bambapuang, bodi sirupik tebal dengan aroma kayu manis.',
  },
  {
    id: 'papua-wamena',
    name: 'Papua Lembah Baliem (Wamena)',
    region: 'Papua',
    species: 'Arabica',
    process: 'Washed',
    elevation: 1750,
    flavorFamily: 'Floral',
    hint: 'Ditanam organik oleh suku Dani di lembah pegunungan salju khatulistiwa Jayawijaya.',
  },
  {
    id: 'ethiopia-yirgacheffe',
    name: 'Ethiopia Yirgacheffe',
    region: 'Afrika',
    species: 'Arabica',
    process: 'Washed',
    elevation: 1950,
    flavorFamily: 'Floral',
    hint: 'Tanah kelahiran kopi dunia di zona Gedeo, terkenal dengan wangi bergamot teh Earl Grey dan melati.',
  },
  {
    id: 'brazil-cerrado',
    name: 'Brazil Cerrado',
    region: 'Amerika',
    species: 'Arabica',
    process: 'Natural',
    elevation: 1100,
    flavorFamily: 'Nutty',
    hint: 'Dataran luas Minas Gerais, tulang punggung espresso dunia dengan keasaman rendah dan rasa hazelnut.',
  },
];

// Deterministic Daily Hash
function getDailyBean(): { bean: CoffeeOrigin; dayIndex: number } {
  const epoch = new Date('2026-01-01').getTime();
  const now = new Date().getTime();
  const dayDiff = Math.floor((now - epoch) / (1000 * 60 * 60 * 24));
  const beanIndex = Math.abs(dayDiff) % BEAN_POOL.length;
  return { bean: BEAN_POOL[beanIndex], dayIndex: dayDiff + 1 };
}

export default function CoffeelePage() {
  const { bean: dailyMysteryBean, dayIndex } = useMemo(() => getDailyBean(), []);

  const [mysteryBean, setMysteryBean] = useState<CoffeeOrigin>(dailyMysteryBean);
  const [isFreePlay, setIsFreePlay] = useState(false);
  const [guesses, setGuesses] = useState<CoffeeOrigin[]>([]);
  const [selectedGuessId, setSelectedGuessId] = useState('');
  const [isGameOver, setIsGameOver] = useState(false);
  const [isWon, setIsWon] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showHowToPlay, setShowHowToPlay] = useState(false);

  // Available options not yet guessed
  const availableBeans = useMemo(() => {
    const guessedIds = guesses.map((g) => g.id);
    return BEAN_POOL.filter((b) => !guessedIds.includes(b.id));
  }, [guesses]);

  // Submit Guess
  const handleGuess = () => {
    if (!selectedGuessId || isGameOver) return;
    const guessedBean = BEAN_POOL.find((b) => b.id === selectedGuessId);
    if (!guessedBean) return;

    const newGuesses = [...guesses, guessedBean];
    setGuesses(newGuesses);
    setSelectedGuessId('');

    if (guessedBean.id === mysteryBean.id) {
      setIsGameOver(true);
      setIsWon(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
      });
    } else if (newGuesses.length >= 6) {
      setIsGameOver(true);
      setIsWon(false);
    }
  };

  // Switch to Free Play
  const handleStartFreePlay = () => {
    const randomBean = BEAN_POOL[Math.floor(Math.random() * BEAN_POOL.length)];
    setMysteryBean(randomBean);
    setIsFreePlay(true);
    setGuesses([]);
    setIsGameOver(false);
    setIsWon(false);
  };

  // Back to Daily
  const handleReturnToDaily = () => {
    setMysteryBean(dailyMysteryBean);
    setIsFreePlay(false);
    setGuesses([]);
    setIsGameOver(false);
    setIsWon(false);
  };

  // Emoji Grid Share Text
  const handleShare = () => {
    const rows = guesses.map((g) => {
      const regEmoji = g.region === mysteryBean.region ? '🟩' : '⬛';
      const specEmoji = g.species === mysteryBean.species ? '🟩' : '⬛';
      const procEmoji = g.process === mysteryBean.process ? '🟩' : '🟨';
      const elevEmoji =
        Math.abs(g.elevation - mysteryBean.elevation) <= 100
          ? '🟩'
          : g.elevation < mysteryBean.elevation
          ? '⬆️'
          : '⬇️';
      const flavEmoji = g.flavorFamily === mysteryBean.flavorFamily ? '🟩' : '⬛';

      return `${regEmoji}${specEmoji}${procEmoji}${elevEmoji}${flavEmoji}`;
    });

    const text = [
      `Cherry Coffeele ${isFreePlay ? '(Latihan)' : `#${dayIndex}`} ${
        isWon ? `${guesses.length}/6` : 'X/6'
      } ☕`,
      ...rows,
      '',
      'Mainkan tebak biji kopi harian di cherryedu.id/game/coffeele',
    ].join('\n');

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 font-sans animate-in fade-in duration-200">
      {/* Top Header */}
      <div className="text-center space-y-3 mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cherry-100 text-cherry-900 border border-cherry-200 font-mono text-[10px] uppercase tracking-widest font-bold">
          <span>MINI-GAME HARIAN SENSORIK</span>
          <span>•</span>
          <span>{isFreePlay ? 'MODE LATIHAN BEBAS' : `EDISI #${dayIndex}`}</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-roast-950 tracking-tight">
          Cherry Coffeele ☕
        </h1>

        <p className="text-xs sm:text-sm text-roast-600 max-w-xl mx-auto leading-relaxed">
          Tebak <strong>Biji Kopi Misterius Hari Ini</strong> dalam 6 percobaan. Petunjuk warna akan mengarahkan pulau, spesies, metode proses, elevasi tanah, dan profil rasa cangkir.
        </p>

        <div className="flex items-center justify-center gap-3 pt-2">
          <button
            onClick={() => setShowHowToPlay(true)}
            className="text-xs font-mono text-roast-600 hover:text-roast-950 flex items-center gap-1 bg-paper-100 px-3 py-1.5 rounded-lg border border-paper-300"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Cara Main</span>
          </button>

          {!isFreePlay ? (
            <button
              onClick={handleStartFreePlay}
              className="text-xs font-mono text-cherry-700 hover:text-cherry-900 flex items-center gap-1 bg-cherry-50 px-3 py-1.5 rounded-lg border border-cherry-200"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Mainkan Mode Latihan Bebas</span>
            </button>
          ) : (
            <button
              onClick={handleReturnToDaily}
              className="text-xs font-mono text-emerald-800 flex items-center gap-1 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Kembali ke Tantangan Harian</span>
            </button>
          )}
        </div>
      </div>

      {/* Clue Unlock (After 3 Guesses) */}
      {guesses.length >= 3 && !isGameOver && (
        <div className="mb-6 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 text-xs flex items-start gap-3 shadow-xs">
          <Sparkles className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <span className="font-mono text-[10px] uppercase tracking-wider font-bold text-amber-800">
              Petunjuk Tambahan Terbuka (Clue):
            </span>
            <p className="font-serif italic text-xs leading-relaxed">&ldquo;{mysteryBean.hint}&rdquo;</p>
          </div>
        </div>
      )}

      {/* Guesses Table Grid */}
      <div className="bg-paper-50 border border-paper-300 rounded-2xl overflow-hidden shadow-xs mb-6">
        <div className="p-3.5 border-b border-paper-200 bg-paper-100/70 grid grid-cols-5 text-center font-mono text-[10px] uppercase tracking-wider text-roast-600 font-bold">
          <div>Origin & Pulau</div>
          <div>Spesies</div>
          <div>Pasca Panen</div>
          <div>Elevasi (mdpl)</div>
          <div>Karakter Rasa</div>
        </div>

        <div className="divide-y divide-paper-200 min-h-[220px]">
          {guesses.map((guess, idx) => {
            const isOriginCorrect = guess.id === mysteryBean.id;
            const isRegionCorrect = guess.region === mysteryBean.region;
            const isSpeciesCorrect = guess.species === mysteryBean.species;
            const isProcessCorrect = guess.process === mysteryBean.process;
            const elevDiff = guess.elevation - mysteryBean.elevation;
            const isElevationNear = Math.abs(elevDiff) <= 100;
            const isFlavorCorrect = guess.flavorFamily === mysteryBean.flavorFamily;

            return (
              <div
                key={idx}
                className="grid grid-cols-5 p-2.5 sm:p-3 text-center items-center text-xs font-mono gap-1 sm:gap-2 animate-in slide-in-from-top-2 duration-150"
              >
                {/* Column 1: Origin & Region */}
                <div
                  className={`p-2 rounded-xl border flex flex-col items-center justify-center font-bold ${
                    isOriginCorrect
                      ? 'bg-emerald-600 text-paper-50 border-emerald-700'
                      : isRegionCorrect
                      ? 'bg-amber-500 text-paper-50 border-amber-600'
                      : 'bg-paper-200 text-roast-800 border-paper-300'
                  }`}
                >
                  <span className="font-serif text-xs truncate max-w-full">{guess.name}</span>
                  <span className="text-[9px] font-mono opacity-85">[{guess.region}]</span>
                </div>

                {/* Column 2: Species */}
                <div
                  className={`p-2 rounded-xl border flex items-center justify-center font-bold ${
                    isSpeciesCorrect
                      ? 'bg-emerald-600 text-paper-50 border-emerald-700'
                      : 'bg-paper-200 text-roast-800 border-paper-300'
                  }`}
                >
                  <span>{guess.species === 'Fine Robusta' ? 'Robusta' : guess.species}</span>
                </div>

                {/* Column 3: Process */}
                <div
                  className={`p-2 rounded-xl border flex items-center justify-center font-bold ${
                    isProcessCorrect
                      ? 'bg-emerald-600 text-paper-50 border-emerald-700'
                      : 'bg-paper-200 text-roast-800 border-paper-300'
                  }`}
                >
                  <span>{guess.process}</span>
                </div>

                {/* Column 4: Elevation with Arrows */}
                <div
                  className={`p-2 rounded-xl border flex items-center justify-center gap-1 font-bold ${
                    isElevationNear
                      ? 'bg-emerald-600 text-paper-50 border-emerald-700'
                      : 'bg-paper-200 text-roast-800 border-paper-300'
                  }`}
                >
                  <span>{guess.elevation}m</span>
                  {!isElevationNear && (
                    elevDiff < 0 ? (
                      <ArrowUp className="w-3.5 h-3.5 text-cherry-700 shrink-0" />
                    ) : (
                      <ArrowDown className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                    )
                  )}
                </div>

                {/* Column 5: Flavor Family */}
                <div
                  className={`p-2 rounded-xl border flex items-center justify-center font-bold ${
                    isFlavorCorrect
                      ? 'bg-emerald-600 text-paper-50 border-emerald-700'
                      : 'bg-paper-200 text-roast-800 border-paper-300'
                  }`}
                >
                  <span>{guess.flavorFamily}</span>
                </div>
              </div>
            );
          })}

          {/* Empty Slots */}
          {Array.from({ length: Math.max(0, 6 - guesses.length) }).map((_, i) => (
            <div
              key={i}
              className="grid grid-cols-5 p-2.5 sm:p-3 text-center items-center gap-1 sm:gap-2 opacity-30"
            >
              <div className="h-10 rounded-xl bg-paper-200 border border-paper-300" />
              <div className="h-10 rounded-xl bg-paper-200 border border-paper-300" />
              <div className="h-10 rounded-xl bg-paper-200 border border-paper-300" />
              <div className="h-10 rounded-xl bg-paper-200 border border-paper-300" />
              <div className="h-10 rounded-xl bg-paper-200 border border-paper-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Input Form (When game active) */}
      {!isGameOver ? (
        <div className="bg-paper-50 border border-paper-300 rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <select
              value={selectedGuessId}
              onChange={(e) => setSelectedGuessId(e.target.value)}
              className="w-full bg-paper-100/70 border border-paper-300 rounded-xl px-4 py-3 font-serif font-bold text-sm text-roast-950 outline-none focus:border-cherry-700 appearance-none cursor-pointer"
            >
              <option value="">-- Pilih Tebakan Asal Kopi ({availableBeans.length} Tersedia) --</option>
              {availableBeans.map((bean) => (
                <option key={bean.id} value={bean.id}>
                  {bean.name} ({bean.region} • {bean.species} • {bean.process} • {bean.elevation}m)
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-roast-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          <button
            onClick={handleGuess}
            disabled={!selectedGuessId}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-roast-950 hover:bg-roast-900 disabled:opacity-40 text-paper-50 font-mono text-xs font-bold transition-all active:scale-[0.98] shrink-0"
          >
            Tebak ({guesses.length + 1}/6)
          </button>
        </div>
      ) : (
        /* Game Over Modal / Card */
        <div
          className={`p-6 sm:p-8 rounded-2xl border text-center space-y-4 shadow-xl animate-in zoom-in-95 duration-200 ${
            isWon
              ? 'bg-emerald-950 text-paper-50 border-emerald-800'
              : 'bg-roast-950 text-paper-50 border-roast-800'
          }`}
        >
          <div className="w-14 h-14 rounded-full bg-paper-50/10 flex items-center justify-center mx-auto">
            {isWon ? <Trophy className="w-7 h-7 text-amber-400" /> : <Coffee className="w-7 h-7 text-crema-300" />}
          </div>

          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-widest text-crema-300 font-bold block">
              {isWon ? 'LUAR BIASA! TEBAKAN TEPAT!' : 'KESEMPATAN HABIS! JAWABAN RESMI:'}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">
              {mysteryBean.name}
            </h3>
            <p className="font-sans text-xs text-paper-300 max-w-md mx-auto leading-relaxed">
              {mysteryBean.region} • {mysteryBean.species} • {mysteryBean.process} • {mysteryBean.elevation} mdpl • Profil: {mysteryBean.flavorFamily}
            </p>
          </div>

          <p className="font-serif italic text-xs text-crema-200 max-w-lg mx-auto bg-black/20 p-3 rounded-xl">
            &ldquo;{mysteryBean.hint}&rdquo;
          </p>

          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              onClick={handleShare}
              className="px-5 py-2.5 rounded-xl bg-crema-400 hover:bg-crema-300 text-roast-950 font-mono text-xs font-bold flex items-center gap-2 transition-all active:scale-[0.98]"
            >
              <Share2 className="w-4 h-4" />
              <span>{copied ? 'Tersalin ke Clipboard!' : 'Bagikan Hasil (Share)'}</span>
            </button>

            {isFreePlay && (
              <button
                onClick={handleStartFreePlay}
                className="px-5 py-2.5 rounded-xl bg-paper-100/10 hover:bg-paper-100/20 text-paper-50 border border-paper-100/20 font-mono text-xs font-bold flex items-center gap-2 transition-all active:scale-[0.98]"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Ronde Bebas Baru</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* How to Play Modal */}
      {showHowToPlay && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-roast-950/70 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-paper-50 border border-paper-300 max-w-lg w-full rounded-2xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-paper-200 pb-3">
              <h3 className="font-serif text-lg font-bold text-roast-950">Cara Bermain Coffeele</h3>
              <button
                onClick={() => setShowHowToPlay(false)}
                className="p-1 text-roast-500 hover:text-roast-950 rounded-md"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-roast-700 leading-relaxed font-sans">
              <p>Tebak satu origin kopi misterius dalam 6 percobaan. Setiap tebakan akan memberikan kode warna:</p>
              <div className="space-y-2 font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-emerald-600 text-paper-50 flex items-center justify-center font-bold">🟩</span>
                  <span><strong>Hijau:</strong> Sangat tepat (Match sempurna).</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-amber-500 text-paper-50 flex items-center justify-center font-bold">🟨</span>
                  <span><strong>Kuning:</strong> Berdekatan atau dalam satu keluarga region.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-paper-300 text-roast-800 flex items-center justify-center font-bold">⬛</span>
                  <span><strong>Abu-abu:</strong> Salah atau berbeda kategori.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-paper-200 text-roast-800 flex items-center justify-center font-bold">⬆️ / ⬇️</span>
                  <span><strong>Panah Elevasi:</strong> Menunjukkan apakah elevasi kopi misterius lebih tinggi atau lebih rendah.</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowHowToPlay(false)}
              className="w-full py-2.5 bg-roast-950 text-paper-50 rounded-xl font-mono text-xs font-bold"
            >
              Mengerti, Mulai Main!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
