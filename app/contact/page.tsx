'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useCherryEdu } from '@/lib/store';
import { DEFAULT_SITE_PAGES } from '@/lib/data/defaultSitePages';
import { SitePageRenderer } from '@/components/SitePageRenderer';
import {
  MessageSquare,
  Send,
  ShieldCheck,
  Zap,
  Clock,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { toast } from 'sonner';

function ContactContent() {
  const searchParams = useSearchParams();
  const {
    sitePages,
    currentUser,
    openDirectChat,
    sendUserChatMessage,
    getConversationMessages,
  } = useCherryEdu();

  const [topic, setTopic] = useState('Verifikasi Pembayaran QRIS Pro');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const pageConfig = sitePages?.contact || DEFAULT_SITE_PAGES.contact;
  const conversation = getConversationMessages(currentUser.id);
  const unreadReplies = conversation.filter(
    (m) => m.sender_role === 'admin' && !m.is_read
  ).length;

  // Auto-open chat drawer if query param ?chat=open exists
  useEffect(() => {
    if (searchParams.get('chat') === 'open') {
      openDirectChat();
    }
  }, [searchParams, openDirectChat]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) {
      toast.error('Harap tuliskan pesan Anda terlebih dahulu.');
      return;
    }

    setIsSubmitting(true);
    try {
      sendUserChatMessage(message.trim(), `Topik Kontak: ${topic}`);
      toast.success('Pesan direct message berhasil dikirim ke Admin CherryEdu!');
      setMessage('');
      openDirectChat();
    } catch {
      toast.error('Gagal mengirim pesan.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-4 space-y-12 pb-24">
      {/* Dynamic Sections from Page Builder */}
      <SitePageRenderer
        sections={pageConfig.sections}
        fallbackTitle="Kontak & Pusat Bantuan"
      />

      {/* Direct Message Interactive Form Section */}
      <div id="direct-message" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border-2 border-roast-900 rounded-2xl shadow-elevated overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Info Column */}
            <div className="lg:col-span-5 bg-roast-950 text-paper-50 p-6 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-roast-900">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cherry-950/80 border border-cherry-800/80 text-cherry-300 font-mono text-[10px] font-bold tracking-wider uppercase">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Direct Message Terintegrasi
                </div>

                <div>
                  <h2 className="font-serif font-black text-2xl sm:text-3xl text-white tracking-tight leading-tight">
                    Kirim Pesan Langsung ke Pengelola.
                  </h2>
                  <p className="text-xs sm:text-sm text-roast-300 mt-3 leading-relaxed">
                    Tidak perlu menggunakan WhatsApp pihak ketiga. Pesan Anda akan langsung terkirim ke Dashboard Admin CherryEdu dan tim kami akan membalas secara langsung di jendela percakapan website.
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-roast-900 text-xs">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-roast-900 text-emerald-400 flex items-center justify-center shrink-0 border border-roast-800">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Respon Langsung Admin</h4>
                      <p className="text-[11px] text-roast-400 mt-0.5">
                        Admin memantau percakapan dari konsol pengelola untuk verifikasi QRIS, kurikulum, dan pertanyaan kemitraan.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-roast-900 text-cherry-400 flex items-center justify-center shrink-0 border border-roast-800">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Privasi & Riwayat Aman</h4>
                      <p className="text-[11px] text-roast-400 mt-0.5">
                        Seluruh riwayat chat tersimpan secara privat pada akun Anda dan dapat dibuka kapan saja.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Box if conversations exist */}
              {conversation.length > 0 && (
                <div className="mt-8 pt-6 border-t border-roast-900">
                  <div className="p-4 bg-roast-900/80 rounded-xl border border-roast-800 flex items-center justify-between gap-3">
                    <div>
                      <span className="font-mono text-[10px] text-roast-400 uppercase tracking-wider block">
                        Riwayat Pesan Anda
                      </span>
                      <span className="text-xs font-bold text-white">
                        {conversation.length} pesan tercatat
                        {unreadReplies > 0 && (
                          <span className="text-emerald-400 ml-1">({unreadReplies} balasan baru!)</span>
                        )}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => openDirectChat()}
                      className="px-3 py-1.5 bg-cherry-700 hover:bg-cherry-600 text-white rounded font-mono text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Buka Chat</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7 p-6 sm:p-10 bg-paper-50 flex flex-col justify-center">
              <form onSubmit={handleSendMessage} className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-paper-200">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-roast-500">
                    Formulir Direct Message
                  </span>
                  <button
                    type="button"
                    onClick={() => openDirectChat()}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cherry-700 hover:text-cherry-900 transition"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Buka Jendela Chat Penuh</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-roast-700 mb-1.5 uppercase">
                      Nama Pengirim
                    </label>
                    <input
                      type="text"
                      disabled
                      value={currentUser.name || 'Rekan Barista'}
                      className="w-full px-3.5 py-2.5 bg-paper-100 border border-paper-300 rounded-lg text-xs font-mono text-roast-700 cursor-not-allowed"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-roast-700 mb-1.5 uppercase">
                      Email Akun
                    </label>
                    <input
                      type="text"
                      disabled
                      value={currentUser.email || 'Pengguna Terdaftar'}
                      className="w-full px-3.5 py-2.5 bg-paper-100 border border-paper-300 rounded-lg text-xs font-mono text-roast-700 cursor-not-allowed"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-roast-700 mb-1.5 uppercase">
                    Kategori / Topik Bantuan
                  </label>
                  <select
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-paper-300 rounded-lg text-xs font-mono text-roast-900 focus:outline-hidden focus:border-cherry-700"
                  >
                    <option value="Verifikasi Pembayaran QRIS Pro">
                      💳 Konfirmasi / Verifikasi Pembayaran QRIS Pro
                    </option>
                    <option value="Pertanyaan Silabus & Materi">
                      ☕ Pertanyaan Silabus & Kurikulum Pelajaran
                    </option>
                    <option value="Ujian Akhir & Sertifikat">
                      🎓 Kendala Ujian Akhir & Sertifikat Kompetensi
                    </option>
                    <option value="Kemitraan Kedai & Roastery">
                      🤝 Kemitraan Kedai Kopi & Pelatihan Barista
                    </option>
                    <option value="Bantuan Teknis Platform">
                      ⚙️ Bantuan Teknis & Masukan Fitur Website
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-roast-700 mb-1.5 uppercase">
                    Isi Pesan Anda
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tuliskan pertanyaan, ID transaksi (jika ada), atau detail kebutuhan Anda..."
                    className="w-full p-3.5 bg-white border border-paper-300 rounded-lg text-xs sm:text-sm font-sans text-roast-950 placeholder:text-roast-400 focus:outline-hidden focus:border-cherry-700 leading-relaxed resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="font-mono text-[10px] text-roast-500">
                    Pesan akan otomatis masuk ke antrean inbox pengelola CherryEdu.
                  </span>
                  <button
                    type="submit"
                    disabled={isSubmitting || !message.trim()}
                    className="w-full sm:w-auto px-6 py-3 bg-roast-950 hover:bg-cherry-900 disabled:opacity-50 text-white rounded-lg font-mono text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer shadow-subtle shrink-0"
                  >
                    <span>Kirim Direct Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center font-mono text-xs text-roast-500">Memuat halaman kontak...</div>}>
      <ContactContent />
    </Suspense>
  );
}
