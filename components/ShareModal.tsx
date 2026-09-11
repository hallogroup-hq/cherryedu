'use client';

import React, { useState } from 'react';
import { useCherryEdu } from '@/lib/store';
import { X, Check, Copy, Coffee, Award } from "lucide-react";
import { toast } from 'sonner';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  title = 'Sertifikat Kelulusan CherryEdu',
  subtitle = 'Kopi dari Hulu ke Hilir',
}) => {
  const { currentUser } = useCherryEdu();
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const shareText = `Saya baru saja menyelesaikan kurikulum kopi di CherryEdu! Belajar kopi dari hulu (farm) ke hilir (cup) bersama @cherryroastery. Cek sertifikat saya di cherryedu.id`;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    toast.success('Teks narasi berhasil disalin ke clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-roast-950/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-paper-50 border border-paper-400 max-w-md w-full p-6 sm:p-7 shadow-warm relative animate-in fade-in zoom-in-95 duration-200 ease-out-strong">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 text-roast-400 hover:text-roast-900 transition-colors active:scale-[0.97]"
          aria-label="Tutup"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <span className="font-mono text-[10px] tracking-widest text-cherry-700 font-semibold uppercase bg-cherry-50 px-2 py-0.5 border border-cherry-200">
            [ BAGIKAN PENCAPAIAN ]
          </span>
        </div>
        <h3 className="font-serif text-2xl font-bold text-roast-950 mb-1 tracking-tight">
          Pamerkan Perjalanan Kopi Anda
        </h3>
        <p className="font-sans text-xs text-roast-600 mb-5">
          Kartu format diploma untuk Instagram Stories, status WhatsApp, atau portofolio LinkedIn:
        </p>

        {/* Shareable Card Canvas Preview (Editorial Folio Aesthetic) */}
        <div className="bg-roast-950 text-paper-50 p-6 border-2 border-crema-500/60 shadow-warm relative overflow-hidden mb-5">
          {/* Micro Guilloche Border Line */}
          <div className="absolute inset-1.5 border border-crema-500/20 pointer-events-none" />

          <div className="flex justify-between items-start mb-6 relative z-10">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-cherry-700 border border-cherry-600 flex items-center justify-center text-paper-50 font-bold">
                <Coffee className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="font-serif font-bold text-xs tracking-wide text-paper-50 block">
                  Cherry Coffee Roastery
                </span>
                <span className="font-mono text-[8px] text-crema-300 uppercase block -mt-0.5 tracking-widest">
                  ACADEMY CREDENTIAL
                </span>
              </div>
            </div>
            <div className="font-mono text-[10px] text-crema-300 px-2 py-0.5 border border-crema-500/30">
              {currentUser.streak_count} HARI STREAK
            </div>
          </div>

          <div className="my-6 text-center relative z-10">
            <img
              src={currentUser.avatar_url}
              alt={currentUser.name}
              className="w-16 h-16 mx-auto object-cover border-2 border-crema-500 filter contrast-110 mb-3"
            />
            <h4 className="font-serif text-lg font-bold text-paper-50">{currentUser.name}</h4>
            <span className="font-mono text-[10px] text-crema-300 uppercase tracking-wider block mt-0.5">
              {currentUser.coffee_role === 'barista' ? 'Calon Barista Siap Kerja' : 'Certified Home Brewer'}
            </span>

            <div className="mt-4 p-3.5 bg-roast-900/80 border border-roast-800">
              <span className="font-mono text-[9px] text-roast-400 uppercase tracking-widest block font-semibold">
                [ {title} ]
              </span>
              <span className="font-serif text-sm font-bold text-paper-50 block mt-0.5">
                {subtitle}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between font-mono text-[9px] text-roast-400 pt-3 border-t border-roast-800 relative z-10">
            <span className="flex items-center gap-1 text-crema-300">
              <Award className="w-3 h-3 text-crema-400" /> TERAKREDITASI RESMI
            </span>
            <span>CHERRYEDU.ID</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2 font-mono text-xs">
          <button
            onClick={handleCopy}
            className="w-full py-2.5 px-4 bg-roast-950 hover:bg-cherry-800 text-paper-50 uppercase tracking-wider font-bold flex items-center justify-center gap-2 transition-all duration-150 ease-out active:scale-[0.97] border border-roast-900 shadow-xs"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Teks Narasi Disalin!' : 'Salin Teks Narasi Medsos'}</span>
          </button>
          <button
            onClick={onClose}
            className="w-full py-2 px-4 bg-paper-100 hover:bg-paper-200 text-roast-700 uppercase tracking-wider transition-all duration-150 ease-out active:scale-[0.97] border border-paper-300"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

