'use client';

import React, { useState, useMemo } from 'react';
import {
  BarChart3,
  TrendingUp,
  Download,
  Coins,
  MapPin,
  Sparkles,
  Info,
  Calendar,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  Check,
  Coffee,
  Globe2,
} from 'lucide-react';

interface PriceRecord {
  month: string;
  arabicaCherryPerKg: number;
  arabicaGreenSpecialtyPerKg: number;
  robustaDryPerKg: number;
  fineRobustaGreenPerKg: number;
}

const HISTORICAL_PRICES: PriceRecord[] = [
  {
    month: 'Jan 2025',
    arabicaCherryPerKg: 15000,
    arabicaGreenSpecialtyPerKg: 125000,
    robustaDryPerKg: 52000,
    fineRobustaGreenPerKg: 78000,
  },
  {
    month: 'Apr 2025',
    arabicaCherryPerKg: 16500,
    arabicaGreenSpecialtyPerKg: 132000,
    robustaDryPerKg: 58000,
    fineRobustaGreenPerKg: 84000,
  },
  {
    month: 'Jul 2025',
    arabicaCherryPerKg: 18000,
    arabicaGreenSpecialtyPerKg: 140000,
    robustaDryPerKg: 68000,
    fineRobustaGreenPerKg: 92000,
  },
  {
    month: 'Okt 2025',
    arabicaCherryPerKg: 19500,
    arabicaGreenSpecialtyPerKg: 148000,
    robustaDryPerKg: 74000,
    fineRobustaGreenPerKg: 102000,
  },
  {
    month: 'Jan 2026',
    arabicaCherryPerKg: 21000,
    arabicaGreenSpecialtyPerKg: 158000,
    robustaDryPerKg: 82000,
    fineRobustaGreenPerKg: 112000,
  },
  {
    month: 'Mar 2026 (Live)',
    arabicaCherryPerKg: 22500,
    arabicaGreenSpecialtyPerKg: 165000,
    robustaDryPerKg: 86000,
    fineRobustaGreenPerKg: 118000,
  },
];

interface RegionalProduction {
  province: string;
  island: 'Sumatra' | 'Jawa' | 'Bali & NT' | 'Sulawesi' | 'Papua';
  speciesDominant: 'Robusta' | 'Arabica' | 'Seimbang';
  productionTonPerYear: number;
  hectares: number;
  mainOrigins: string[];
}

const REGIONAL_PRODUCTIONS: RegionalProduction[] = [
  {
    province: 'Sumatera Selatan',
    island: 'Sumatra',
    speciesDominant: 'Robusta',
    productionTonPerYear: 198000,
    hectares: 250000,
    mainOrigins: ['Pagar Alam', 'Semendo', 'Lahat'],
  },
  {
    province: 'Lampung',
    island: 'Sumatra',
    speciesDominant: 'Robusta',
    productionTonPerYear: 112000,
    hectares: 156000,
    mainOrigins: ['Tanggamus', 'Liwa', 'Lampung Barat'],
  },
  {
    province: 'Aceh',
    island: 'Sumatra',
    speciesDominant: 'Arabica',
    productionTonPerYear: 74000,
    hectares: 126000,
    mainOrigins: ['Gayo Takengon', 'Bener Meriah', 'Gayo Lues'],
  },
  {
    province: 'Sumatera Utara',
    island: 'Sumatra',
    speciesDominant: 'Arabica',
    productionTonPerYear: 68500,
    hectares: 95000,
    mainOrigins: ['Mandheling', 'Lintong Humbang', 'Simalungun', 'Karo'],
  },
  {
    province: 'Jawa Timur',
    island: 'Jawa',
    speciesDominant: 'Robusta',
    productionTonPerYear: 36000,
    hectares: 64000,
    mainOrigins: ['Dampit Malang', 'Ijen-Raung', 'Jember Argopuro'],
  },
  {
    province: 'Sulawesi Selatan',
    island: 'Sulawesi',
    speciesDominant: 'Arabica',
    productionTonPerYear: 29500,
    hectares: 48000,
    mainOrigins: ['Toraja Sapan', 'Enrekang Kalosi', 'Gowa'],
  },
  {
    province: 'Jawa Barat',
    island: 'Jawa',
    speciesDominant: 'Arabica',
    productionTonPerYear: 23000,
    hectares: 46000,
    mainOrigins: ['Preanger Pangalengan', 'Ciwidey', 'Gunung Tilu'],
  },
  {
    province: 'Nusa Tenggara Timur (NTT)',
    island: 'Bali & NT',
    speciesDominant: 'Arabica',
    productionTonPerYear: 18500,
    hectares: 38000,
    mainOrigins: ['Flores Bajawa', 'Manggarai', 'Alor'],
  },
  {
    province: 'Bali',
    island: 'Bali & NT',
    speciesDominant: 'Arabica',
    productionTonPerYear: 14500,
    hectares: 32000,
    mainOrigins: ['Kintamani Bangli', 'Pupuan Tabanan', 'Wanagiri'],
  },
  {
    province: 'Papua & Papua Pegunungan',
    island: 'Papua',
    speciesDominant: 'Arabica',
    productionTonPerYear: 3200,
    hectares: 14000,
    mainOrigins: ['Lembah Baliem Wamena', 'Dogiyai', 'Moanemani'],
  },
];

export default function OpenDataPage() {
  const [selectedCommodity, setSelectedCommodity] = useState<
    'arabicaGreen' | 'arabicaCherry' | 'robustaDry' | 'fineRobusta'
  >('arabicaGreen');
  const [selectedIsland, setSelectedIsland] = useState<string>('Semua');
  const [copiedCsv, setCopiedCsv] = useState(false);

  // Filtered productions
  const filteredProductions = useMemo(() => {
    return REGIONAL_PRODUCTIONS.filter((p) => {
      if (selectedIsland === 'Semua') return true;
      return p.island === selectedIsland;
    });
  }, [selectedIsland]);

  // Export CSV
  const handleExportCSV = () => {
    const header = 'Provinsi,Pulau,Spesies Dominan,Produksi (Ton/Thn),Luas Lahan (Ha),Sentra Origin';
    const rows = REGIONAL_PRODUCTIONS.map(
      (p) =>
        `"${p.province}","${p.island}","${p.speciesDominant}",${p.productionTonPerYear},${p.hectares},"${p.mainOrigins.join('; ')}"`
    );

    const csvContent = [header, ...rows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'cherryedu_data_kopi_nasional_2026.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setCopiedCsv(true);
    setTimeout(() => setCopiedCsv(false), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 font-sans animate-in fade-in duration-200 space-y-10">
      {/* Header Banner */}
      <div className="bg-paper-100/80 border border-paper-300 rounded-2xl p-5 sm:p-7 shadow-xs relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-cherry-700/5 blur-3xl pointer-events-none" />
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-cherry-700 font-bold bg-cherry-50 px-2 py-0.5 rounded border border-cherry-200">
                [ INDONESIA COFFEE OPEN DATA ECOSYSTEM ]
              </span>
              <span className="font-mono text-[10px] text-roast-500 bg-paper-200/70 px-2 py-0.5 rounded">
                BPS & Ditjenbun Integrated 2026
              </span>
            </div>
            <h1 className="font-serif text-2xl sm:text-4xl font-bold text-roast-950 tracking-tight">
              Dashboard Data Terbuka Perkopian Nasional
            </h1>
            <p className="text-xs sm:text-sm text-roast-600 max-w-2xl leading-relaxed">
              Pusat transparansi data rantai pasok kopi Indonesia: tren pergerakan harga di tingkat petani (farmgate), volume produksi per provinsi, serapan pasar domestik, dan struktur perkebunan rakyat.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start lg:self-auto">
            <button
              onClick={handleExportCSV}
              className="px-4 py-2.5 rounded-xl bg-roast-950 text-paper-50 hover:bg-roast-900 active:scale-[0.98] font-mono text-xs font-semibold flex items-center gap-2 shadow-xs transition-all"
            >
              {copiedCsv ? <Check className="w-4 h-4 text-emerald-400" /> : <Download className="w-4 h-4 text-crema-300" />}
              <span>{copiedCsv ? 'CSV Terunduh!' : 'Unduh Dataset (CSV)'}</span>
            </button>
          </div>
        </div>

        {/* National Macro Key Figures */}
        <div className="mt-6 pt-5 border-t border-paper-200 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-3.5 rounded-xl bg-paper-50 border border-paper-200 space-y-1">
            <span className="font-mono text-[10px] uppercase text-roast-500 block">Total Produksi Nasional:</span>
            <p className="font-mono text-xl sm:text-2xl font-bold text-roast-950">~785.000 Ton</p>
            <span className="text-[10px] text-emerald-700 font-medium">Produsen #4 Terbesar Dunia</span>
          </div>

          <div className="p-3.5 rounded-xl bg-paper-50 border border-paper-200 space-y-1">
            <span className="font-mono text-[10px] uppercase text-roast-500 block">Porsi Kebun Rakyat:</span>
            <p className="font-mono text-xl sm:text-2xl font-bold text-cherry-700">95,8%</p>
            <span className="text-[10px] text-roast-600 font-sans">1,2 Juta KK Petani Mandiri</span>
          </div>

          <div className="p-3.5 rounded-xl bg-paper-50 border border-paper-200 space-y-1">
            <span className="font-mono text-[10px] uppercase text-roast-500 block">Komposisi Spesies:</span>
            <p className="font-mono text-xl sm:text-2xl font-bold text-amber-800">78% / 22%</p>
            <span className="text-[10px] text-roast-600 font-sans">Robusta vs Arabica</span>
          </div>

          <div className="p-3.5 rounded-xl bg-paper-50 border border-paper-200 space-y-1">
            <span className="font-mono text-[10px] uppercase text-roast-500 block">Konsumsi Domestik:</span>
            <p className="font-mono text-xl sm:text-2xl font-bold text-roast-950">1,38 kg</p>
            <span className="text-[10px] text-emerald-700 font-medium">+8,4% Pertumbuhan Kafe Modern</span>
          </div>
        </div>
      </div>

      {/* SECTION 1: Historical Farmgate & Market Price Movements */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-cherry-700 font-bold block">
              [ TREN HARGA TINGKAT PETANI & PASAR (2025–2026) ]
            </span>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-roast-950">
              Rally Harga Komoditas Kopi Nasional (IDR / kg)
            </h2>
          </div>

          {/* Commodity Pill Switches */}
          <div className="flex items-center gap-1.5 flex-wrap bg-paper-200/60 p-1.5 rounded-xl border border-paper-300">
            <button
              onClick={() => setSelectedCommodity('arabicaGreen')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCommodity === 'arabicaGreen'
                  ? 'bg-roast-950 text-paper-50 shadow-xs'
                  : 'text-roast-700 hover:text-roast-950'
              }`}
            >
              Arabica Green Specialty
            </button>
            <button
              onClick={() => setSelectedCommodity('robustaDry')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCommodity === 'robustaDry'
                  ? 'bg-roast-950 text-paper-50 shadow-xs'
                  : 'text-roast-700 hover:text-roast-950'
              }`}
            >
              Robusta Kering Asalan
            </button>
            <button
              onClick={() => setSelectedCommodity('fineRobusta')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCommodity === 'fineRobusta'
                  ? 'bg-roast-950 text-paper-50 shadow-xs'
                  : 'text-roast-700 hover:text-roast-950'
              }`}
            >
              Fine Robusta Petik Merah
            </button>
            <button
              onClick={() => setSelectedCommodity('arabicaCherry')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCommodity === 'arabicaCherry'
                  ? 'bg-roast-950 text-paper-50 shadow-xs'
                  : 'text-roast-700 hover:text-roast-950'
              }`}
            >
              Ceri Merah Basah
            </button>
          </div>
        </div>

        {/* Price Trend Table Card */}
        <div className="bg-paper-50 border border-paper-300 rounded-2xl overflow-hidden shadow-xs">
          <div className="p-4 border-b border-paper-200 bg-paper-100/60 flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-wider text-roast-900 font-bold flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-emerald-700" /> Pergerakan Harga Rata-Rata Bulanan
            </span>
            <span className="font-mono text-[10px] text-roast-500">Satuan: Rupiah (IDR) / kilogram</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-paper-100/40 text-roast-600 uppercase text-[10px] border-b border-paper-200">
                <tr>
                  <th className="p-3.5">Periode Bulan</th>
                  <th className="p-3.5">Arabica Specialty (Green)</th>
                  <th className="p-3.5">Robusta Kering Asalan</th>
                  <th className="p-3.5">Fine Robusta Petik Merah</th>
                  <th className="p-3.5">Ceri Basah Pohon</th>
                  <th className="p-3.5 text-right">Kenaikan YOY</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-paper-200">
                {HISTORICAL_PRICES.map((p, idx) => (
                  <tr key={idx} className="hover:bg-paper-100/40 transition-colors">
                    <td className="p-3.5 font-bold text-roast-950">{p.month}</td>
                    <td className="p-3.5 text-cherry-800 font-semibold">
                      Rp {p.arabicaGreenSpecialtyPerKg.toLocaleString('id-ID')}
                    </td>
                    <td className="p-3.5 text-amber-900 font-semibold">
                      Rp {p.robustaDryPerKg.toLocaleString('id-ID')}
                    </td>
                    <td className="p-3.5 text-roast-900 font-semibold">
                      Rp {p.fineRobustaGreenPerKg.toLocaleString('id-ID')}
                    </td>
                    <td className="p-3.5 text-roast-700">
                      Rp {p.arabicaCherryPerKg.toLocaleString('id-ID')}
                    </td>
                    <td className="p-3.5 text-right text-emerald-700 font-bold">
                      {idx > 0 ? `+${Math.round(((p.robustaDryPerKg - HISTORICAL_PRICES[0].robustaDryPerKg) / HISTORICAL_PRICES[0].robustaDryPerKg) * 100)}%` : '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* SECTION 2: Regional Production Ranking Table */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-cherry-700 font-bold block">
              [ AGREGAT PRODUKSI WILAYAH ]
            </span>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-roast-950">
              Sebaran Produksi Kopi 10 Provinsi Terbesar
            </h2>
          </div>

          {/* Island Filter */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {['Semua', 'Sumatra', 'Jawa', 'Bali & NT', 'Sulawesi', 'Papua'].map((island) => (
              <button
                key={island}
                onClick={() => setSelectedIsland(island)}
                className={`px-3 py-1 rounded-lg text-xs font-medium border transition-all ${
                  selectedIsland === island
                    ? 'bg-roast-950 text-paper-50 border-roast-950 shadow-xs'
                    : 'bg-paper-50 text-roast-800 border-paper-300 hover:bg-paper-200'
                }`}
              >
                {island}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="bg-paper-50 border border-paper-300 rounded-2xl overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-sans">
              <thead className="bg-paper-100/60 font-mono text-[10px] text-roast-600 uppercase border-b border-paper-200">
                <tr>
                  <th className="p-3.5">Peringkat & Provinsi</th>
                  <th className="p-3.5">Gugusan Pulau</th>
                  <th className="p-3.5">Spesies Dominan</th>
                  <th className="p-3.5">Volume (Ton / Tahun)</th>
                  <th className="p-3.5">Estimasi Lahan</th>
                  <th className="p-3.5">Sentra Origin Utama</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-paper-200">
                {filteredProductions.map((p, idx) => (
                  <tr key={idx} className="hover:bg-paper-100/40 transition-colors">
                    <td className="p-3.5 font-bold font-serif text-roast-950 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-roast-950 text-paper-50 font-mono text-[10px] flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <span>{p.province}</span>
                    </td>
                    <td className="p-3.5 font-mono text-roast-600">{p.island}</td>
                    <td className="p-3.5">
                      <span
                        className={`font-mono text-[10px] px-2 py-0.5 rounded font-bold ${
                          p.speciesDominant === 'Arabica'
                            ? 'bg-cherry-100 text-cherry-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        {p.speciesDominant}
                      </span>
                    </td>
                    <td className="p-3.5 font-mono font-bold text-roast-950">
                      {p.productionTonPerYear.toLocaleString('id-ID')} Ton
                    </td>
                    <td className="p-3.5 font-mono text-roast-600">
                      {p.hectares.toLocaleString('id-ID')} Ha
                    </td>
                    <td className="p-3.5 text-roast-800 font-medium">
                      {p.mainOrigins.join(', ')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Citations & Open Data Notice */}
      <div className="p-5 rounded-2xl bg-paper-100/80 border border-paper-300 text-xs text-roast-600 space-y-2 leading-relaxed">
        <span className="font-mono text-[10px] uppercase text-roast-500 font-bold block flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-700" /> Sumber Data Resmi & Transparansi
        </span>
        <p>
          Data agregat dihimpun dan dikalibrasi dari publikasi resmi <strong>Badan Pusat Statistik (BPS)</strong>, <strong>Direktorat Jenderal Perkebunan Kementerian Pertanian RI</strong>, <strong>International Coffee Organization (ICO)</strong>, dan pencatatan lelang komoditas perkopian nasional. Data diperbarui berkala demi transparansi rantai nilai kopi bagi petani, roaster, dan penikmat kopi Indonesia.
        </p>
      </div>
    </div>
  );
}
