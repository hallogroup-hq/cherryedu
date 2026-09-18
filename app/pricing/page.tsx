'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useCherryEdu } from '@/lib/store';
import { PRICING_PLANS } from '@/lib/paymentGateway';
import { SubscriptionCycle } from '@/lib/types';
import { PaymentModal } from '@/components/PaymentModal';
import {
  Sparkles,
  Check,
  X,
  HelpCircle,
  ShieldCheck,
  Award,
  Coffee,
  ArrowRight,
  QrCode,
  Zap,
  BookOpen,
} from 'lucide-react';

export default function PricingPage() {
  const { isPro, isAuthenticated } = useCherryEdu();
  const [cycle, setCycle] = useState<SubscriptionCycle>('monthly');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const plan = PRICING_PLANS.pro;
  const proPrice = cycle === 'annual' ? plan.annual.amount : plan.monthly.amount;
  const proPriceFormatted = `Rp ${proPrice.toLocaleString('id-ID')}`;

  const COMPARISON_ROWS = [
    {
      feature: 'Jalur Foundation (Farm-to-Cup)',
      free: 'Akses Penuh (32 Materi)',
      pro: 'Akses Penuh (32 Materi)',
    },
    {
      feature: '6 Jalur Spesialisasi Lanjutan',
      free: '1 Modul Pertama per Path',
      pro: 'Akses Penuh Seluruh 128 Materi',
    },
    {
      feature: '8 Diagram Sains Interaktif (SVG Telemetri)',
      free: 'Diagram Terbatas',
      pro: 'Akses Lengkap & Interaktif Penuh',
    },
    {
      feature: 'Kuis & Evaluasi Modul',
      free: 'Kuis Foundation Saja',
      pro: 'Seluruh 26 Kuis Spesialisasi',
    },
    {
      feature: 'Sertifikat Kelulusan Digital',
      free: 'Sertifikat Foundation',
      pro: 'Sertifikat Spesialisasi Terverifikasi',
    },
    {
      feature: 'Tanda Tangan Resmi Fahrul M.W (Q-Grader)',
      free: 'Tersedia',
      pro: 'Tersedia + Lisensi Spesialisasi',
    },
    {
      feature: 'Verifikasi Ijazah Publik (/verify/:token)',
      free: 'Tersedia',
      pro: 'Tersedia (Prioritas Verifikasi)',
    },
    {
      feature: 'Coffee Tools Suite (Cupping & Seduh)',
      free: 'Akses Standar (Lokal)',
      pro: 'Akses Penuh + Cloud Sync',
    },
    {
      feature: 'Bursa Kerja Kopi (Job Board)',
      free: 'Jelajah & Lamar Standar',
      pro: 'Prioritas Review & Badge Pelamar Terverifikasi',
    },
    {
      feature: 'Badge Profil & Komunitas',
      free: 'Member Standar',
      pro: 'Golden Badge "PRO" Eksklusif',
    },
  ];

  const FAQS = [
    {
      q: 'Bagaimana cara pembayaran langganan CherryEdu Pro?',
      a: 'Pembayaran dilakukan menggunakan QRIS Dinamis (GoPay Merchant). Anda dapat melakukan pemindaian (scan) menggunakan aplikasi GoPay, BCA Mobile, Livin by Mandiri, BRImo, ShopeePay, Dana, OVO, atau aplikasi mobile banking manapun yang mendukung standar QRIS nasional.',
    },
    {
      q: 'Apakah bisa menggunakan kode kupon atau voucher diskon?',
      a: 'Tentu! Pada saat membuka jendela pembayaran, Anda dapat memasukkan kode promo resmi seperti CHERRYBARISTA (Diskon 30%) atau KOPIINDONESIA (Diskon 50%) untuk mendapatkan potongan harga langsung.',
    },
    {
      q: 'Kapan status Pro saya akan aktif setelah pembayaran?',
      a: 'Status Pro aktif secara seketika (otomatis real-time) begitu transaksi Anda terverifikasi oleh gateway GoPay. Seluruh materi modul lanjutan dan kuis akan langsung terbuka tanpa perlu konfirmasi manual.',
    },
    {
      q: 'Apakah sertifikat spesialisasi diakui oleh industri kafe?',
      a: 'Seluruh kurikulum disusun mengacu pada standar kompetensi Specialty Coffee Association (SCA) dan Coffee Quality Institute (CQI). Sertifikat ditandatangani langsung oleh Fahrul M.W (Master Roaster & Q-Grader Instructor) dan dilengkapi tautan verifikasi publik unik yang dapat dicantumkan di CV maupun profil LinkedIn.',
    },
    {
      q: 'Apakah langganan akan otomatis memotong saldo saya setiap bulan?',
      a: 'Tidak. Pembayaran berbasis sistem invoice QRIS mandiri, sehingga tidak ada pemotongan saldo otomatis yang tidak Anda ketahui. Sebelum masa aktif habis, Anda dapat memperpanjang masa aktif sesuai kenyamanan Anda.',
    },
  ];

  return (
    <div className="min-h-screen bg-paper-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cherry-50 border border-cherry-200 text-cherry-800 rounded-full text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cherry-700" />
            Investasi Pendidikan Kopi Terbaik
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-black text-roast-950 tracking-tight leading-tight">
            Tingkatkan Standar Sains & Karier Kopi Anda
          </h1>
          <p className="font-sans text-sm sm:text-base text-roast-700 leading-relaxed">
            Demokratisasi kurikulum spesialisasi berstandar global SCA & CQI dalam Bahasa Indonesia. Pilih paket yang sesuai dengan akselerasi karier Anda.
          </p>

          {/* Billing Cycle Switcher */}
          <div className="pt-4 flex items-center justify-center">
            <div className="bg-paper-200/80 p-1 rounded-xl border border-paper-300 flex items-center gap-1 shadow-inner">
              <button
                type="button"
                onClick={() => setCycle('monthly')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  cycle === 'monthly'
                    ? 'bg-white text-roast-950 shadow-xs'
                    : 'text-roast-600 hover:text-roast-950'
                }`}
              >
                Bulanan (Rp 49rb/bln)
              </button>
              <button
                type="button"
                onClick={() => setCycle('annual')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  cycle === 'annual'
                    ? 'bg-white text-roast-950 shadow-xs'
                    : 'text-roast-600 hover:text-roast-950'
                }`}
              >
                <span>Tahunan</span>
                <span className="px-1.5 py-0.5 bg-amber-400 text-roast-950 font-mono text-[9px] font-black uppercase rounded-full">
                  Hemat 32%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {/* FREE TIER CARD */}
          <div className="bg-white border-2 border-paper-300 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-paper-400 transition">
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-roast-950">Free Tier</h3>
                    <p className="text-xs text-roast-500 mt-1">Akses Fondasi Terbuka</p>
                  </div>
                  <span className="px-2.5 py-1 bg-paper-100 border border-paper-300 text-roast-700 font-mono text-[10px] font-bold uppercase rounded-md">
                    Selamanya
                  </span>
                </div>
                <div className="mt-4 font-mono text-3xl font-black text-roast-950">
                  Rp 0 <span className="text-xs font-normal text-roast-500">/gratis</span>
                </div>
                <p className="text-xs text-roast-600 mt-2 leading-relaxed">
                  Cocok untuk siapa saja yang ingin memahami sains fundamental kopi dari hulu ke hilir.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-paper-200">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-roast-500">
                  Termasuk:
                </div>
                <ul className="space-y-2.5 text-xs text-roast-700">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Akses penuh 32 materi Path Foundation</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Modul 1 di setiap 6 Jalur Spesialisasi (Preview)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Kuis & Sertifikat Digital Foundation</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>6 Instrumen Coffee Tools Standar</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Akses Forum & Bursa Kerja Kopi</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-8">
              <Link
                href="/paths"
                className="w-full py-3 bg-paper-100 hover:bg-paper-200 border border-paper-300 text-roast-900 font-bold text-xs rounded-xl transition text-center block"
              >
                Mulai Belajar Gratis
              </Link>
            </div>
          </div>

          {/* PRO TIER CARD */}
          <div className="bg-gradient-to-b from-amber-50/40 via-white to-amber-50/20 border-2 border-amber-500 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
            {/* Top banner tag */}
            <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-500 to-amber-600 text-roast-950 font-mono text-[10px] font-black uppercase tracking-wider px-4 py-1 rounded-bl-xl shadow-xs">
              Paling Direkomendasikan
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-serif text-2xl font-bold text-roast-950">CherryEdu Pro</h3>
                  <span className="px-2 py-0.5 bg-amber-400 text-roast-950 font-mono text-[9px] font-black uppercase rounded-full">
                    PRO
                  </span>
                </div>
                <p className="text-xs text-roast-600 mt-1">Akses Spesialisasi & Sertifikasi Resmi</p>

                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-mono text-3xl sm:text-4xl font-black text-roast-950">
                    {proPriceFormatted}
                  </span>
                  <span className="text-xs font-mono text-roast-500">
                    /{cycle === 'annual' ? 'tahun' : 'bulan'}
                  </span>
                </div>
                {cycle === 'annual' && (
                  <p className="text-xs text-emerald-700 font-semibold mt-1">
                    🎉 Hemat 32% (Setara Rp 33.250 per bulan)
                  </p>
                )}
                <p className="text-xs text-roast-600 mt-2 leading-relaxed">
                  Buka pintu ke 128 materi sains lanjutan, simulasi ujian sertifikasi, dan pengakuan formal industri.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-amber-200">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-600" />
                  Semua Fitur Free, Ditambah:
                </div>
                <ul className="space-y-2.5 text-xs text-roast-800">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Akses Penuh 6 Path Spesialisasi</strong> (Barista, Home Brewer, Roaster, Q-Grader, Pasca Panen, Bisnis)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>8 SVG Diagram Telemetri Ilmiah</strong> (Kurva Roasting, Dynamic Espresso, Water Chemistry)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Sertifikat Digital Resmi</strong> bertanda tangan Fahrul M.W (Q-Grader)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Verifikasi Portofolio Publik</strong> di rute unik <code>/verify/:token</code></span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Cloud Data Sync</strong> untuk Log Seduh & SCA Cupping Sheet</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Badge Profil Emas "PRO"</strong> di komunitas & leaderboard</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-8">
              {isPro ? (
                <div className="w-full py-3.5 bg-emerald-50 border border-emerald-300 text-emerald-800 font-bold text-xs rounded-xl text-center flex items-center justify-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Akun Anda Sudah Berstatus Pro</span>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="w-full py-3.5 bg-gradient-to-r from-cherry-800 to-cherry-900 hover:from-cherry-900 hover:to-roast-950 text-white font-bold text-xs rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-cherry-900/25"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Upgrade ke CherryEdu Pro Sekarang</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Feature Comparison Table */}
        <div className="max-w-4xl mx-auto pt-8">
          <div className="text-center mb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-roast-500 font-bold block mb-1">
              KOMPARASI FITUR LENGKAP
            </span>
            <h2 className="font-serif text-2xl font-bold text-roast-950">
              Bandingkan Keuntungan Setiap Tingkatan
            </h2>
          </div>

          <div className="bg-white border-2 border-roast-900 rounded-2xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-paper-100 border-b border-paper-300 text-roast-900 font-mono uppercase text-[11px]">
                    <th className="p-4 sm:p-5 font-bold">Fitur & Layanan</th>
                    <th className="p-4 sm:p-5 font-bold w-1/4">Free Tier</th>
                    <th className="p-4 sm:p-5 font-bold w-1/3 bg-amber-50/60 text-amber-950 border-l border-amber-200">
                      CherryEdu Pro
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-paper-200 text-roast-800 font-sans">
                  {COMPARISON_ROWS.map((row, idx) => (
                    <tr key={idx} className="hover:bg-paper-50 transition-colors">
                      <td className="p-4 font-medium text-roast-950">{row.feature}</td>
                      <td className="p-4 text-roast-600">{row.free}</td>
                      <td className="p-4 bg-amber-50/30 text-roast-950 font-semibold border-l border-amber-200">
                        {row.pro}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Social Proof Quote */}
        <div className="max-w-3xl mx-auto p-8 bg-paper-100 border-2 border-roast-900 rounded-2xl shadow-elevated text-center relative">
          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-cherry-900 text-white flex items-center justify-center font-serif text-xl font-bold">
            ❝
          </div>
          <p className="font-serif text-base sm:text-lg italic text-roast-950 leading-relaxed mb-4">
            "Sains ekstraksi dan roasting bukan lagi rahasia eksklusif kursus puluhan juta. Melalui CherryEdu, kami ingin memastikan setiap barista dan roaster muda Indonesia memiliki pijakan ilmiah yang solid untuk bersaing di tingkat dunia."
          </p>
          <div className="text-xs font-mono font-bold text-cherry-800 uppercase tracking-wider">
            Fahrul M.W
          </div>
          <div className="text-[11px] text-roast-600">
            Head Educator & Master Roaster, Cherry Coffee Roastery
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center">
            <span className="font-mono text-xs uppercase tracking-widest text-roast-500 font-bold block mb-1">
              TANYA JAWAB
            </span>
            <h2 className="font-serif text-2xl font-bold text-roast-950">
              Pertanyaan yang Sering Diajukan
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="bg-white border border-paper-300 rounded-xl p-5 shadow-2xs hover:border-paper-400 transition"
              >
                <div className="font-serif font-bold text-sm text-roast-950 mb-2 flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-cherry-700 shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </div>
                <p className="text-xs text-roast-700 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center bg-gradient-to-r from-roast-950 via-cherry-950 to-roast-900 text-white p-8 sm:p-12 rounded-2xl shadow-xl max-w-4xl mx-auto space-y-4">
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-amber-200">
            Siap Menjadi Ahli Kopi Tersertifikasi?
          </h2>
          <p className="text-xs sm:text-sm text-paper-200 max-w-lg mx-auto leading-relaxed">
            Mulai dari Rp 49.000 / bulan atau gunakan voucher diskon untuk pengalaman belajar tanpa batas.
          </p>
          <div className="pt-2 flex justify-center">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-roast-950 font-bold text-xs uppercase tracking-wider font-mono rounded-xl transition shadow-md flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Daftar Pro Sekarang</span>
            </button>
          </div>
        </div>
      </div>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultCycle={cycle}
        sourceContext="Halaman Penawaran Harga /pricing"
      />
    </div>
  );
}
