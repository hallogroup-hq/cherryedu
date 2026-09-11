'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const pathname = usePathname();

  if (pathname?.startsWith('/admin')) {
    return null;
  }

  return (
    <footer className="bg-roast-950 text-paper-200 border-t border-roast-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-roast-900">
          {/* Col 1: Colophon */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/cherry-logo-white.png"
                alt="Cherry Coffee Roastery"
                className="h-10 w-auto object-contain"
              />
              <div className="flex flex-col border-l border-roast-800 pl-3">
                <span className="font-serif font-bold text-xl text-white tracking-tight leading-none">
                  Cherry<span className="font-sans font-light text-crema-300 ml-0.5">Edu</span>
                </span>
                <span className="text-[9px] font-mono tracking-widest text-roast-400 uppercase mt-0.5">
                  Specialty Coffee Academy
                </span>
              </div>
            </div>
            <p className="text-xs text-roast-400 leading-relaxed max-w-sm">
              Platform kurikulum kopi independen pertama di Indonesia yang mengintegrasikan sains agronomi hulu (*farm*) hingga seni ekstraksi hilir (*cup*). Inisiatif dari Cherry Coffee Roastery.
            </p>
            <div className="font-mono text-[10px] text-roast-500 uppercase tracking-widest">
              JAKARTA • BANDUNG • GAYO • BALI
            </div>
          </div>

          {/* Col 2: Kurikulum */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-[11px] uppercase tracking-widest text-crema-400 font-bold">
              KURIKULUM RESMI
            </h4>
            <ul className="space-y-2 text-xs font-sans text-roast-400">
              <li>
                <Link href="/paths/kopi-dari-hulu-ke-hilir" className="hover:text-white transition-colors">
                  Foundation: Hulu ke Hilir (Wajib)
                </Link>
              </li>
              <li>
                <Link href="/paths/barista-specialization" className="hover:text-white transition-colors">
                  Barista Specialization Track
                </Link>
              </li>
              <li>
                <Link href="/paths/q-processor-specialization" className="hover:text-white transition-colors text-crema-300 font-semibold">
                  Q Processing Specialist (CQI)
                </Link>
              </li>
              <li>
                <Link href="/paths/home-brewer-specialization" className="hover:text-white transition-colors">
                  Home Brewer Track
                </Link>
              </li>
              <li>
                <Link href="/onboarding" className="hover:text-white transition-colors">
                  Panduan Minat Belajar
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Instrumen & Ekosistem */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-mono text-[11px] uppercase tracking-widest text-crema-400 font-bold">
              INSTRUMEN
            </h4>
            <ul className="space-y-2 text-xs font-sans text-roast-400">
              <li>
                <Link href="/tools?tab=calculator" className="hover:text-white transition-colors">
                  Kalkulator Rasio Kopi
                </Link>
              </li>
              <li>
                <Link href="/tools?tab=flavor-wheel" className="hover:text-white transition-colors">
                  SCA Flavor Wheel
                </Link>
              </li>
              <li>
                <Link href="/pustaka" className="hover:text-white transition-colors text-crema-300">
                  Daftar Pustaka Ilmiah
                </Link>
              </li>
              <li>
                <Link href="/forum" className="hover:text-white transition-colors">
                  Forum Q&A Expert
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="hover:text-white transition-colors">
                  Bursa Kerja Barista
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Verifikasi */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-mono text-[11px] uppercase tracking-widest text-crema-400 font-bold">
              VERIFIKASI
            </h4>
            <p className="text-[11px] text-roast-400 leading-relaxed">
              Verifikasi keabsahan sertifikat lulusan secara publik:
            </p>
            <Link
              href="/verify/che-sari-fnd-8823"
              className="inline-flex items-center gap-1 font-mono text-[11px] text-crema-300 hover:text-white transition-colors underline underline-offset-4"
            >
              <span>Periksa Kredensial</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-roast-500 gap-4">
          <span>© {new Date().getFullYear()} Cherry Coffee Roastery. Hak Cipta Terpelihara.</span>
          <span>DIBANGUN UNTUK EKOSISTEM KOPI SPESIALTI INDONESIA</span>
        </div>
      </div>
    </footer>
  );
};
