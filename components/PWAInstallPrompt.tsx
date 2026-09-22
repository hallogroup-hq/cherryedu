'use client';

import React, { useState, useEffect } from 'react';
import { Download, X, Share, PlusSquare, Smartphone } from 'lucide-react';

export const PWAInstallPrompt: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Check if running as installed standalone PWA
    const checkStandalone = window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone === true;
    
    if (checkStandalone) {
      setIsStandalone(true);
      return;
    }

    // Check if dismissed recently (within 7 days)
    const dismissedAt = localStorage.getItem('cherryedu_pwa_dismissed');
    if (dismissedAt) {
      const daysSinceDismissed = (Date.now() - parseInt(dismissedAt, 10)) / (1000 * 60 * 60 * 24);
      if (daysSinceDismissed < 7) {
        return;
      }
    }

    // Check iOS Safari
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isAppleDevice = /iphone|ipad|ipod/.test(userAgent);
    const isSafariBrowser = /safari/.test(userAgent) && !/chrome|crios|fxios/.test(userAgent);

    if (isAppleDevice && isSafariBrowser) {
      setIsIOS(true);
      // Delay showing iOS hint to avoid immediate distraction
      const timer = setTimeout(() => setShowPrompt(true), 4000);
      return () => clearTimeout(timer);
    }

    // Android / Chromium beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setShowPrompt(false);
    }
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem('cherryedu_pwa_dismissed', Date.now().toString());
  };

  if (!showPrompt || isStandalone) {
    return null;
  }

  return (
    <aside
      aria-label="Pemasangan Aplikasi Mobile CherryEdu"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:w-96 z-50 animate-fadeIn"
    >
      <div className="bg-roast-950 text-paper-50 rounded-xl border border-crema-500/40 p-4 shadow-2xl backdrop-blur-md bg-opacity-95">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-cherry-900/80 border border-cherry-700/50 flex items-center justify-center shrink-0">
              <Smartphone className="w-5 h-5 text-crema-300" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-sm text-paper-50 leading-tight">
                Pasang CherryEdu di HP
              </h4>
              <p className="text-[11px] font-sans text-paper-300 leading-snug mt-0.5">
                Akses cepat alat seduh & materi tanpa kuota browser di meja bar.
              </p>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-paper-400 hover:text-white p-1 rounded transition-colors"
            aria-label="Tutup notifikasi"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {isIOS ? (
          <div className="mt-3 pt-3 border-t border-roast-800 text-[11px] font-mono text-crema-200 flex flex-col gap-1.5 bg-roast-900/60 p-2.5 rounded">
            <div className="flex items-center gap-2">
              <span>1. Ketuk ikon Bagikan</span>
              <Share className="w-3.5 h-3.5 text-crema-300 inline" />
              <span>di bilah Safari</span>
            </div>
            <div className="flex items-center gap-2">
              <span>2. Pilih</span>
              <span className="font-bold text-white flex items-center gap-1">
                <PlusSquare className="w-3.5 h-3.5 text-crema-300 inline" /> Tambah ke Layar Utama
              </span>
            </div>
          </div>
        ) : (
          <div className="mt-3 flex items-center gap-2">
            <button
              onClick={handleInstallClick}
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-crema-400 hover:bg-crema-300 text-roast-950 rounded font-mono font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Pasang Sekarang</span>
            </button>
            <button
              onClick={handleDismiss}
              className="px-3 py-2 text-paper-400 hover:text-white text-xs font-mono transition-colors"
            >
              Nanti Saja
            </button>
          </div>
        )}
      </div>
    </aside>
  );
};
