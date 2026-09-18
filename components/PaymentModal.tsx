'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useCherryEdu } from '@/lib/store';
import { SubscriptionCycle, PaymentTransaction } from '@/lib/types';
import { PRICING_PLANS } from '@/lib/paymentGateway';
import confetti from 'canvas-confetti';
import { toast } from 'sonner';
import {
  X,
  Sparkles,
  CheckCircle2,
  Clock,
  QrCode,
  ShieldCheck,
  Tag,
  ArrowRight,
  RefreshCw,
  Zap,
  Coffee,
  Check,
  Award,
} from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCycle?: SubscriptionCycle;
  sourceContext?: string; // e.g. "Modul 2 Barista Terkunci"
}

export function PaymentModal({
  isOpen,
  onClose,
  defaultCycle = 'monthly',
  sourceContext,
}: PaymentModalProps) {
  const {
    currentUser,
    isAuthenticated,
    isPro,
    applyVoucher,
    createPaymentTransaction,
    checkPaymentStatus,
    simulatePaymentSuccess,
  } = useCherryEdu();

  const [cycle, setCycle] = useState<SubscriptionCycle>(defaultCycle);
  const [voucherInput, setVoucherInput] = useState<string>('');
  const [appliedVoucher, setAppliedVoucher] = useState<{
    code: string;
    discountAmount: number;
    finalAmount: number;
    message: string;
  } | null>(null);

  const [step, setStep] = useState<'plan' | 'qr' | 'success'>('plan');
  const [isGeneratingQR, setIsGeneratingQR] = useState<boolean>(false);
  const [activeTx, setActiveTx] = useState<PaymentTransaction | null>(null);

  // QR Timer
  const [timeLeft, setTimeLeft] = useState<number>(300); // 5 minutes
  const [isChecking, setIsChecking] = useState<boolean>(false);
  const pollTimerRef = useRef<NodeJS.Timeout | null>(null);

  const plan = PRICING_PLANS.pro;
  const basePrice = cycle === 'annual' ? plan.annual.amount : plan.monthly.amount;

  // Re-calculate voucher discount if cycle changes
  useEffect(() => {
    if (appliedVoucher) {
      const vResult = applyVoucher(appliedVoucher.code, basePrice);
      if (vResult.valid) {
        setAppliedVoucher({
          code: appliedVoucher.code,
          discountAmount: vResult.discountAmount,
          finalAmount: vResult.finalAmount,
          message: vResult.message,
        });
      } else {
        setAppliedVoucher(null);
      }
    }
  }, [cycle]);

  // Countdown timer for QR
  useEffect(() => {
    if (step !== 'qr' || timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [step, timeLeft]);

  // Auto-polling when QR is displayed
  useEffect(() => {
    if (step === 'qr' && activeTx && activeTx.status === 'pending') {
      pollTimerRef.current = setInterval(async () => {
        const res = await checkPaymentStatus(activeTx.id);
        if (res.paid) {
          triggerSuccess(res.transaction || activeTx);
        }
      }, 6000);
    }
    return () => {
      if (pollTimerRef.current) clearInterval(pollTimerRef.current);
    };
  }, [step, activeTx]);

  if (!isOpen) return null;

  const currentFinalPrice = appliedVoucher ? appliedVoucher.finalAmount : basePrice;
  const discountTotal = appliedVoucher ? appliedVoucher.discountAmount : 0;

  const handleApplyVoucher = () => {
    if (!voucherInput.trim()) return;
    const res = applyVoucher(voucherInput.trim(), basePrice);
    if (res.valid) {
      setAppliedVoucher({
        code: voucherInput.trim().toUpperCase(),
        discountAmount: res.discountAmount,
        finalAmount: res.finalAmount,
        message: res.message,
      });
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
  };

  const handleProceedToQR = async () => {
    if (!isAuthenticated) {
      toast.error('Silakan login terlebih dahulu untuk berlangganan Pro.');
      return;
    }
    setIsGeneratingQR(true);
    try {
      const res = await createPaymentTransaction(cycle, appliedVoucher?.code);
      if (res.success && res.transaction) {
        setActiveTx(res.transaction);
        setTimeLeft(300);
        setStep('qr');
      } else {
        toast.error(res.error || 'Gagal menyiapkan QRIS GoPay. Silakan coba lagi.');
      }
    } catch (err: any) {
      toast.error(err.message || 'Terjadi kesalahan sistem.');
    } finally {
      setIsGeneratingQR(false);
    }
  };

  const handleCheckStatusManual = async () => {
    if (!activeTx || isChecking) return;
    setIsChecking(true);
    try {
      const res = await checkPaymentStatus(activeTx.id);
      if (res.paid) {
        triggerSuccess(res.transaction || activeTx);
      } else {
        toast.info('Pembayaran belum terdeteksi. Pastikan scan QRIS telah berhasil dilakukan di aplikasi GoPay / e-Wallet Anda.');
      }
    } catch (err) {
      toast.error('Gagal memeriksa status mutasi.');
    } finally {
      setIsChecking(false);
    }
  };

  const handleSimulatePayment = () => {
    if (!activeTx) return;
    simulatePaymentSuccess(activeTx.id);
    triggerSuccess({
      ...activeTx,
      status: 'paid',
      paid_at: new Date().toISOString(),
    });
  };

  const triggerSuccess = (tx: PaymentTransaction) => {
    if (pollTimerRef.current) clearInterval(pollTimerRef.current);
    setActiveTx(tx);
    setStep('success');
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
    });
    toast.success('Pembayaran QRIS Berhasil! Akun Anda kini aktif sebagai CherryEdu Pro.');
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-roast-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-paper-50 rounded-2xl border-2 border-roast-900 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="bg-gradient-to-r from-roast-950 via-cherry-950 to-roast-900 px-6 py-5 text-white flex items-center justify-between border-b border-roast-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-roast-950 font-black shadow-md">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-lg font-bold text-amber-200 tracking-wide">
                  CherryEdu Pro
                </span>
                <span className="px-2 py-0.5 text-[10px] font-mono font-bold uppercase bg-amber-400/20 border border-amber-300/40 text-amber-300 rounded-full">
                  All-Access
                </span>
              </div>
              <p className="text-xs text-paper-300">
                {sourceContext ? `Akses: ${sourceContext}` : 'Buka 6 Jalur Spesialisasi & Sertifikat Resmi'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-paper-300 hover:text-white hover:bg-white/10 rounded-lg transition"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* STEP 1: PLAN & VOUCHER SELECTION */}
          {step === 'plan' && (
            <>
              {/* Cycle Toggle */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-roast-600 mb-2">
                  Pilih Siklus Berlangganan
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setCycle('monthly')}
                    className={`relative p-4 rounded-xl border-2 text-left transition-all ${
                      cycle === 'monthly'
                        ? 'border-cherry-700 bg-cherry-50/60 shadow-sm'
                        : 'border-paper-300 bg-white hover:border-paper-400'
                    }`}
                  >
                    <div className="font-serif font-bold text-base text-roast-950">
                      Paket Bulanan
                    </div>
                    <div className="text-xs text-roast-600 mt-1">Fleksibel tiap bulan</div>
                    <div className="mt-3 font-mono font-bold text-sm text-cherry-800">
                      Rp 49.000 <span className="text-xs font-normal text-roast-500">/bln</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCycle('annual')}
                    className={`relative p-4 rounded-xl border-2 text-left transition-all ${
                      cycle === 'annual'
                        ? 'border-amber-600 bg-amber-50/70 shadow-sm'
                        : 'border-paper-300 bg-white hover:border-paper-400'
                    }`}
                  >
                    <span className="absolute -top-2.5 right-3 px-2 py-0.5 bg-amber-500 text-roast-950 font-mono text-[9px] font-black uppercase rounded-full shadow-xs">
                      Hemat 32%
                    </span>
                    <div className="font-serif font-bold text-base text-roast-950">
                      Paket Tahunan
                    </div>
                    <div className="text-xs text-emerald-700 font-semibold mt-1">Setara Rp 33.250/bln</div>
                    <div className="mt-3 font-mono font-bold text-sm text-amber-900">
                      Rp 399.000 <span className="text-xs font-normal text-roast-500">/thn</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Pro Perks Highlight */}
              <div className="bg-white border border-paper-300 rounded-xl p-4 space-y-2">
                <div className="text-xs font-bold text-roast-900 flex items-center gap-1.5 mb-1">
                  <Award className="w-4 h-4 text-amber-600" />
                  Benefit Eksklusif CherryEdu Pro:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-roast-700">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Semua 6 Path Spesialisasi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Sertifikat Resmi Terverifikasi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>8 Diagram Sains Interaktif</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Prioritas Job Board Kafe</span>
                  </div>
                </div>
              </div>

              {/* Voucher Code Box */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-roast-600 mb-1.5 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-cherry-700" />
                    Punya Kode Voucher / Diskon?
                  </span>
                  <span className="text-[10px] text-roast-500 lowercase">opsional</span>
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={voucherInput}
                    onChange={(e) => setVoucherInput(e.target.value.toUpperCase())}
                    placeholder="Contoh: CHERRYBARISTA"
                    className="flex-1 px-3.5 py-2.5 bg-white border border-paper-300 rounded-lg text-xs font-mono uppercase tracking-wider text-roast-950 focus:outline-hidden focus:border-cherry-700 focus:ring-1 focus:ring-cherry-700"
                  />
                  <button
                    type="button"
                    onClick={handleApplyVoucher}
                    className="px-4 py-2.5 bg-roast-900 hover:bg-cherry-900 text-white text-xs font-bold rounded-lg transition"
                  >
                    Terapkan
                  </button>
                </div>
                {appliedVoucher ? (
                  <div className="mt-2 flex items-center justify-between px-3 py-2 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-800">
                    <span className="font-mono font-semibold">
                      🎉 Kupon {appliedVoucher.code} Aktif (-Rp {appliedVoucher.discountAmount.toLocaleString('id-ID')})
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        setAppliedVoucher(null);
                        setVoucherInput('');
                      }}
                      className="text-emerald-700 hover:text-emerald-950 underline font-mono text-[10px]"
                    >
                      Hapus
                    </button>
                  </div>
                ) : (
                  <div className="mt-2 flex flex-wrap gap-1.5 text-[11px] text-roast-500">
                    <span>Coba kupon:</span>
                    <button
                      type="button"
                      onClick={() => {
                        setVoucherInput('CHERRYBARISTA');
                        const res = applyVoucher('CHERRYBARISTA', basePrice);
                        if (res.valid) {
                          setAppliedVoucher({
                            code: 'CHERRYBARISTA',
                            discountAmount: res.discountAmount,
                            finalAmount: res.finalAmount,
                            message: res.message,
                          });
                        }
                      }}
                      className="font-mono px-2 py-0.5 bg-paper-200 hover:bg-paper-300 text-roast-700 rounded-md font-semibold transition"
                    >
                      CHERRYBARISTA (30%)
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setVoucherInput('KOPIINDONESIA');
                        const res = applyVoucher('KOPIINDONESIA', basePrice);
                        if (res.valid) {
                          setAppliedVoucher({
                            code: 'KOPIINDONESIA',
                            discountAmount: res.discountAmount,
                            finalAmount: res.finalAmount,
                            message: res.message,
                          });
                        }
                      }}
                      className="font-mono px-2 py-0.5 bg-paper-200 hover:bg-paper-300 text-roast-700 rounded-md font-semibold transition"
                    >
                      KOPIINDONESIA (50%)
                    </button>
                  </div>
                )}
              </div>

              {/* Price Summary */}
              <div className="p-4 bg-paper-100 rounded-xl border border-paper-300 space-y-2">
                <div className="flex justify-between text-xs text-roast-600">
                  <span>Harga Normal ({cycle === 'annual' ? 'Tahunan' : 'Bulanan'})</span>
                  <span className="font-mono">Rp {basePrice.toLocaleString('id-ID')}</span>
                </div>
                {discountTotal > 0 && (
                  <div className="flex justify-between text-xs text-emerald-700 font-semibold">
                    <span>Potongan Voucher Diskon</span>
                    <span className="font-mono">- Rp {discountTotal.toLocaleString('id-ID')}</span>
                  </div>
                )}
                <div className="pt-2 border-t border-paper-300 flex justify-between items-baseline">
                  <span className="font-serif font-bold text-sm text-roast-950">Total Pembayaran</span>
                  <div className="text-right">
                    <span className="font-mono text-xl font-black text-cherry-900">
                      Rp {currentFinalPrice.toLocaleString('id-ID')}
                    </span>
                    <span className="block text-[10px] font-mono text-roast-500">
                      Nett (Termasuk QRIS Dinamis)
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA Continue */}
              <button
                type="button"
                onClick={handleProceedToQR}
                disabled={isGeneratingQR}
                className="w-full py-3.5 bg-cherry-800 hover:bg-cherry-900 disabled:bg-paper-400 text-white font-bold text-sm rounded-xl transition flex items-center justify-center gap-2 shadow-md shadow-cherry-900/20"
              >
                {isGeneratingQR ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Menyiapkan QRIS GoPay...
                  </>
                ) : (
                  <>
                    Lanjut Bayar dengan QRIS GoPay
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </>
          )}

          {/* STEP 2: DYNAMIC QRIS DISPLAY */}
          {step === 'qr' && activeTx && (
            <div className="flex flex-col items-center text-center space-y-4">
              {/* GoPay & QRIS Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-sky-50 border border-sky-200 text-sky-800 rounded-full text-xs font-bold">
                <QrCode className="w-3.5 h-3.5 text-sky-600" />
                GoPay Merchant • CV Kreativitas Anak Bangsa
              </div>

              <div>
                <div className="text-xs text-roast-500 font-mono uppercase tracking-wider">
                  Total Tagihan Lunas
                </div>
                <div className="text-2xl sm:text-3xl font-mono font-black text-roast-950 mt-0.5">
                  Rp {activeTx.final_amount.toLocaleString('id-ID')}
                </div>
                <div className="text-[11px] font-mono text-roast-600 mt-1 flex flex-wrap items-center justify-center gap-x-2">
                  <span>Merchant: <strong className="text-roast-900">CV Kreativitas Anak Bangsa</strong></span>
                  <span className="text-roast-300">•</span>
                  <span>NMID: <strong className="text-roast-900">ID1026582958595</strong></span>
                </div>
                <div className="text-[10px] font-mono text-roast-400 mt-0.5">
                  ID Transaksi: {activeTx.trx_id || activeTx.id}
                </div>
              </div>

              {/* QR Code Container */}
              <div className="p-4 bg-white rounded-2xl border-2 border-roast-900 shadow-md relative group">
                {activeTx.qris_url ? (
                  <img
                    src={activeTx.qris_url}
                    alt="QRIS Pembayaran CherryEdu Pro"
                    className="w-56 h-56 sm:w-64 sm:h-64 object-contain rounded-lg"
                  />
                ) : (
                  <div className="w-56 h-56 flex items-center justify-center bg-paper-100 text-roast-400 text-xs font-mono">
                    Memuat QR...
                  </div>
                )}
                <div className="mt-2 text-[10px] font-mono text-roast-500">
                  Scan via GoPay, BCA, Mandiri, ShopeePay, Dana, dll.
                </div>
              </div>

              {/* Timer Bar */}
              <div className="w-full max-w-sm flex items-center justify-between px-4 py-2.5 bg-paper-100 border border-paper-300 rounded-xl text-xs">
                <span className="flex items-center gap-1.5 text-roast-600 font-medium">
                  <Clock className="w-4 h-4 text-amber-600" />
                  Sisa Waktu Pembayaran:
                </span>
                <span className={`font-mono font-bold text-sm ${timeLeft < 60 ? 'text-rose-600 animate-pulse' : 'text-roast-950'}`}>
                  {formatTime(timeLeft)}
                </span>
              </div>

              {/* Status Notice */}
              <div className="w-full max-w-sm p-3 bg-amber-50/80 border border-amber-200/80 rounded-xl text-xs text-amber-900 text-left flex items-start gap-2.5">
                <div className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 animate-ping shrink-0" />
                <p className="leading-relaxed">
                  Sistem otomatis mengecek mutasi GoPay setiap 6 detik. Begitu Anda selesai membayar, halaman akan otomatis membuka akun Pro.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="w-full max-w-sm space-y-2 pt-1">
                <button
                  type="button"
                  onClick={handleCheckStatusManual}
                  disabled={isChecking || timeLeft <= 0}
                  className="w-full py-3 bg-roast-950 hover:bg-cherry-800 disabled:bg-paper-400 text-white text-xs font-bold rounded-xl transition flex items-center justify-center gap-2 shadow-sm"
                >
                  <RefreshCw className={`w-4 h-4 ${isChecking ? 'animate-spin' : ''}`} />
                  {isChecking ? 'Memeriksa Mutasi GoPay...' : 'Saya Sudah Bayar (Cek Sekarang)'}
                </button>

                {/* Developer Simulator Button */}
                <button
                  type="button"
                  onClick={handleSimulatePayment}
                  className="w-full py-2 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-800 text-[11px] font-mono font-bold rounded-lg transition flex items-center justify-center gap-1.5"
                  title="Simulasi bayar instan untuk keperluan testing tanpa gateway live"
                >
                  <Zap className="w-3.5 h-3.5 text-emerald-600" />
                  ⚡ Simulasikan Pembayaran Sukses (Testing Mode)
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: SUCCESS CELEBRATION */}
          {step === 'success' && activeTx && (
            <div className="py-6 flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center border border-emerald-300 shadow-sm animate-bounce">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-roast-950">
                  Selamat Datang di CherryEdu Pro!
                </h3>
                <p className="text-xs text-roast-600 mt-1 max-w-sm">
                  Pembayaran QRIS GoPay Anda telah terverifikasi lunas. Seluruh 6 Jalur Spesialisasi kini terbuka penuh untuk Anda pelajari.
                </p>
              </div>

              <div className="w-full max-w-sm p-4 bg-paper-100 border border-paper-300 rounded-xl text-xs space-y-2 text-left">
                <div className="flex justify-between">
                  <span className="text-roast-500">ID Transaksi</span>
                  <span className="font-mono font-bold text-roast-950">{activeTx.trx_id || activeTx.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-roast-500">Paket</span>
                  <span className="font-bold text-roast-950">
                    CherryEdu Pro ({activeTx.cycle === 'annual' ? '1 Tahun' : '1 Bulan'})
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-roast-500">Nominal Lunas</span>
                  <span className="font-mono font-bold text-emerald-700">
                    Rp {activeTx.final_amount.toLocaleString('id-ID')}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="w-full max-w-sm py-3.5 bg-cherry-800 hover:bg-cherry-900 text-white text-xs font-bold rounded-xl transition shadow-md"
              >
                Mulai Akses Materi Spesialisasi
              </button>
            </div>
          )}
        </div>

        {/* Footer Guarantee */}
        <div className="px-6 py-3 bg-paper-100 border-t border-paper-300 flex items-center justify-between text-[11px] text-roast-600 font-mono">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            Transaksi Aman & Terenkripsi
          </span>
          <span>Cherry Coffee Roastery</span>
        </div>
      </div>
    </div>
  );
}
