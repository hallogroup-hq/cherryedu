'use client';

import React, { useState, useMemo } from 'react';
import {
  ClipboardCheck,
  CheckCircle2,
  XCircle,
  Award,
  Clock,
  Printer,
  Copy,
  RotateCcw,
  Sparkles,
  Coffee,
  AlertTriangle,
  ChevronRight,
  User,
  Building2,
  Check,
} from 'lucide-react';

interface Question {
  id: number;
  category: 'Dial-In & Ekstraksi' | 'Sains Susu' | 'Perawatan Mesin' | 'Hospitality' | 'Efisiensi Bar';
  scenario: string;
  options: { text: string; isCorrect: boolean; explanation: string }[];
}

const ASSESSMENT_QUESTIONS: Question[] = [
  {
    id: 1,
    category: 'Dial-In & Ekstraksi',
    scenario:
      'Shot espresso Anda mengalir terlalu cepat (18 detik yield 38g) dan terasa asam menyengat (sharp sour), hampa, dan crema cepat pudar. Tindakan pertama yang paling tepat adalah:',
    options: [
      {
        text: 'Memperhalus ukuran gilingan (grind finer) untuk meningkatkan resistensi puck kopi.',
        isCorrect: true,
        explanation:
          'Aliran terlalu cepat dan rasa asam tajam menandakan under-extraction akibat resistensi puck kopi yang terlalu rendah.',
      },
      {
        text: 'Menambah tekanan tamping sekuat tenaga hingga 25 kg.',
        isCorrect: false,
        explanation: 'Kepadatan tamping memiliki batas saturasi mekanis; perubahan rasa dikendalikan oleh ukuran partikel gilingan.',
      },
      {
        text: 'Menaikkan suhu boiler mesin hingga 98°C.',
        isCorrect: false,
        explanation: 'Suhu air tidak akan memperbaiki laju alir yang terlalu cepat akibat gilingan terlalu kasar.',
      },
      {
        text: 'Memperpanjang rasio yield menjadi 1:3.',
        isCorrect: false,
        explanation: 'Memperbanyak yield pada gilingan kasar hanya akan menambah air tanpa mengekstrak padatan rasa manis.',
      },
    ],
  },
  {
    id: 2,
    category: 'Sains Susu',
    scenario:
      'Mengapa temperatur pemanasan susu untuk menu Cappuccino dan Latte tidak disarankan melebihi 65°C–70°C?',
    options: [
      {
        text: 'Protein whey (beta-lactoglobulin) mengalami denaturasi permanen dan laktosa kehilangan rasa manis alaminya.',
        isCorrect: true,
        explanation:
          'Di atas 65°C–70°C, protein susu rusak menghasilkan rasa belerang gosong (scalded milk) dan mikrofoam kehilangan elastisitasnya.',
      },
      {
        text: 'Susu akan menggumpal menjadi keju secara otomatis dalam cangkir.',
        isCorrect: false,
        explanation: 'Susu segar pasteurisasi tidak akan langsung menjadi keju tanpa penambahan asam atau enzim rennet.',
      },
      {
        text: 'Suhu panas akan memecahkan gelas keramik cangkir kafe.',
        isCorrect: false,
        explanation: 'Keramik komersial tahan hingga di atas 100°C; pembatas utama adalah kimia rasa susu.',
      },
      {
        text: 'Kandungan lemak susu menguap habis ke udara.',
        isCorrect: false,
        explanation: 'Lemak tidak menguap pada 70°C, melainkan emulsi proteinnya yang terurai.',
      },
    ],
  },
  {
    id: '3' as any,
    category: 'Dial-In & Ekstraksi',
    scenario:
      'Saat mendistribusikan bubuk kopi ke dalam portafilter, barista mendapati semburan air halus bertekanan tinggi di sisi basket (channeling). Cara paling efektif mencegahnya adalah:',
    options: [
      {
        text: 'Menggunakan teknik WDT (Weiss Distribution Technique) dengan jarum halus sebelum tamping rata.',
        isCorrect: true,
        explanation:
          'WDT memecah gumpalan bubuk dan meratakan densitas partikel di seluruh basket sehingga air bertekanan 9 bar mengalir seragam.',
      },
      {
        text: 'Mengetuk-ngetuk dinding portafilter dengan gagang tamper berbahan logam keras.',
        isCorrect: false,
        explanation:
          'Mengetuk portafilter justru memecahkan struktur puck samping dan memicu channeling di dinding basket (side channeling).',
      },
      {
        text: 'Mengurangi dosis kopi dari 18 gram menjadi 12 gram.',
        isCorrect: false,
        explanation: 'Mengurangi dosis tanpa mengganti basket membuat headspace terlalu renggang dan puck mudah retak.',
      },
      {
        text: 'Menekan tamper dengan gerakan memutar (polishing) sekuat mungkin.',
        isCorrect: false,
        explanation: 'Polishing agresif tidak memperbaiki distribusi dalam dan berisiko membuat permukaan miring.',
      },
    ],
  },
  {
    id: 4,
    category: 'Perawatan Mesin',
    scenario:
      'Berapa frekuensi backflush group head mesin espresso komersial menggunakan bubuk chemical cleaner khusus yang disarankan untuk kafe dengan volume 100–200 cup/hari?',
    options: [
      {
        text: 'Setiap akhir jam operasional (closing shift) harian.',
        isCorrect: true,
        explanation:
          'Minyak kopi yang teroksidasi di dalam three-way solenoid valve dan shower screen harus dibersihkan setiap hari agar rasa kopi esok hari tidak apek.',
      },
      {
        text: 'Cukup satu kali dalam seminggu.',
        isCorrect: false,
        explanation: 'Minyak kopi yang mengendap 7 hari akan menghitam pekat dan merusak rasa seluruh seduhan espresso.',
      },
      {
        text: 'Satu kali dalam sebulan saat servis teknisi.',
        isCorrect: false,
        explanation: 'Solenoid valve akan tersumbat kerak minyak dan merusak pompa mesin.',
      },
      {
        text: 'Hanya jika group head sudah mengeluarkan busa hitam kotor.',
        isCorrect: false,
        explanation: 'Ini tanda kelalaian berat pemeliharaan alat kafe.',
      },
    ],
  },
  {
    id: 5,
    category: 'Hospitality',
    scenario:
      'Seorang pelanggan mengembalikan cangkir Filter Coffee V60 Single Origin dan komplain: "Kopi ini kok asem banget ya mas, kayak kopi basi atau belum mateng!". Respons terbaik barista adalah:',
    options: [
      {
        text: 'Mendengarkan dengan ramah, menjelaskan dengan bahasa santun bahwa origin tersebut memiliki karakter buah alami, lalu menawarkan opsi seduhan yang lebih berkarakter cokelat-karamel.',
        isCorrect: true,
        explanation:
          'Hospitality yang baik tidak menggurui atau menyalahkan lidah tamu, melainkan mengedukasi dengan ramah dan memberikan solusi menu yang sesuai preferensi tamu.',
      },
      {
        text: 'Menjelaskan bahwa tamu tidak paham specialty coffee karena ini biji kopi impor mahal skor SCA 88.',
        isCorrect: false,
        explanation: 'Sikap arogan merusak reputasi kafe dan membuat pelanggan enggan kembali.',
      },
      {
        text: 'Menambahkan 2 sendok gula cair ke cangkir tamu tanpa bertanya.',
        isCorrect: false,
        explanation: 'Mengubah resep tanpa persetujuan tamu menunjukkan ketidakprofesionalan.',
      },
      {
        text: 'Menolak mengganti minuman karena sudah diseduh sesuai standar SOP resep.',
        isCorrect: false,
        explanation: 'Pelayanan prima mengutamakan kepuasan dan pengalaman rasa pelanggan.',
      },
    ],
  },
  {
    id: 6,
    category: 'Efisiensi Bar',
    scenario:
      'Langkah paling efektif untuk memangkas pemborosan (waste) susu segar pada operasional bar kopi susu yang sibuk adalah:',
    options: [
      {
        text: 'Menggunakan milk pitcher dengan ukuran volume yang pas dan menakar volume susu sesuai kapasitas cangkir menu.',
        isCorrect: true,
        explanation:
          'Susu yang sudah disteam tidak boleh disteam ulang; menakar volume presisi mencegah sisa susu terbuang ke bak cuci.',
      },
      {
        text: 'Mencampur sisa susu panas dari pitcher sebelumnya ke susu segar yang baru dikeluarkan dari kulkas.',
        isCorrect: false,
        explanation: 'Susu yang disteam dua kali akan berbau belerang, merusak tekstur foam, dan berisiko bakteri.',
      },
      {
        text: 'Mengurangi takaran susu pada resep latte menjadi setengah cangkir saja.',
        isCorrect: false,
        explanation: 'Mengurangi resep merusak konsistensi rasa yang diharapkan pelanggan.',
      },
      {
        text: 'Membiarkan susu di suhu ruang seharian agar cepat panas saat disteam.',
        isCorrect: false,
        explanation: 'Susu hangat di suhu ruang akan berkembang biak bakteri berbahaya dan tidak dapat menghasilkan mikrofoam elastis.',
      },
    ],
  },
  {
    id: 7,
    category: 'Dial-In & Ekstraksi',
    scenario:
      'Pada siang hari saat kafe sangat ramai, laju ekstraksi espresso tiba-tiba melambat drastis (choking) meskipun resep gramasi tidak diubah. Penyebab mekanis yang paling mungkin terjadi adalah:',
    options: [
      {
        text: 'Burr grinder memanas akibat pemakaian beruntun (thermal expansion), menyebabkan partikel bubuk kopi semakin halus.',
        isCorrect: true,
        explanation:
          'Suhu motor dan burr grinder yang panas memicu pemuaian logam dan friksi yang menghasilkan partikel fines lebih banyak, memperlambat aliran air.',
      },
      {
        text: 'Air boiler mesin espresso kehabisan mineral magnesium.',
        isCorrect: false,
        explanation: 'Mineral air mempengaruhi rasa ekstraksi, bukan laju alir mekanis secara mendadak.',
      },
      {
        text: 'Biji kopi di hopper berubah menjadi lebih keras dalam hitungan jam.',
        isCorrect: false,
        explanation: 'Kepadatan biji sangrai tidak berubah drastis dalam 2 jam.',
      },
      {
        text: 'Tegangan listrik PLN membuat jarum manometer naik ke 15 bar.',
        isCorrect: false,
        explanation: 'Rotary pump komersial memiliki bypass valve pengatur tekanan yang independen dari tegangan listrik minor.',
      },
    ],
  },
  {
    id: 8,
    category: 'Perawatan Mesin',
    scenario:
      'Sebelum memasang portafilter kembali ke group head untuk ekstraksi berikutnya, barista WAJIB melakukan tindakan singkat:',
    options: [
      {
        text: 'Melakukan flush air panas 1–2 detik untuk membilas remah bubuk kopi lama dan menstabilkan temperatur screen.',
        isCorrect: true,
        explanation:
          'Flushing singkat membersihkan sisa bubuk kopi gosong yang menempel di shower screen dari ekstraksi sebelumnya.',
      },
      {
        text: 'Menyemprotkan sanitizer alkohol ke dalam group head.',
        isCorrect: false,
        explanation: 'Sanitizer tidak boleh masuk ke jalur air minum ekstraksi.',
      },
      {
        text: 'Mematikan switch power mesin espresso.',
        isCorrect: false,
        explanation: 'Mesin tidak boleh dimatikan di tengah operasional.',
      },
      {
        text: 'Mendinginkan portafilter di wadah es batu.',
        isCorrect: false,
        explanation: 'Portafilter harus tetap panas agar temperatur ekstraksi tidak drop (thermal shock).',
      },
    ],
  },
];

export default function BaristaAssessmentPage() {
  const [candidateName, setCandidateName] = useState('');
  const [targetRole, setTargetRole] = useState('Senior Barista / Bar Lead');
  const [answers, setAnswers] = useState<{ [questionId: number]: number }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  // Handle select answer
  const handleSelectOption = (questionId: number, optionIdx: number) => {
    if (isSubmitted) return;
    setAnswers({ ...answers, [questionId]: optionIdx });
  };

  // Submit test
  const handleSubmit = () => {
    if (Object.keys(answers).length < ASSESSMENT_QUESTIONS.length) {
      if (!confirm('Masih ada soal yang belum dijawab. Apakah Anda yakin ingin menyelesaikan ujian sekarang?')) {
        return;
      }
    }
    setIsSubmitted(true);
  };

  // Reset test
  const handleReset = () => {
    setAnswers({});
    setIsSubmitted(false);
  };

  // Results calculation
  const results = useMemo(() => {
    let correctCount = 0;
    const categoryScores: { [cat: string]: { correct: number; total: number } } = {};

    ASSESSMENT_QUESTIONS.forEach((q) => {
      if (!categoryScores[q.category]) {
        categoryScores[q.category] = { correct: 0, total: 0 };
      }
      categoryScores[q.category].total += 1;

      const userChoice = answers[q.id];
      if (userChoice !== undefined && q.options[userChoice]?.isCorrect) {
        correctCount += 1;
        categoryScores[q.category].correct += 1;
      }
    });

    const scorePct = Math.round((correctCount / ASSESSMENT_QUESTIONS.length) * 100);

    let hiringVerdict = 'Belum Memenuhi Standar Minimal';
    let verdictClass = 'bg-rose-100 text-rose-900 border-rose-300';
    if (scorePct >= 85) {
      hiringVerdict = 'Sangat Direkomendasikan (Senior / Head Barista)';
      verdictClass = 'bg-emerald-100 text-emerald-900 border-emerald-300';
    } else if (scorePct >= 70) {
      hiringVerdict = 'Memenuhi Kualifikasi (Barista Terampil / Shift Lead)';
      verdictClass = 'bg-blue-100 text-blue-900 border-blue-300';
    } else if (scorePct >= 50) {
      hiringVerdict = 'Dipertimbangkan dengan Catatan (Memerlukan Training Dasar)';
      verdictClass = 'bg-amber-100 text-amber-900 border-amber-300';
    }

    return {
      scorePct,
      correctCount,
      totalQuestions: ASSESSMENT_QUESTIONS.length,
      categoryScores,
      hiringVerdict,
      verdictClass,
    };
  }, [answers]);

  // Copy HR report
  const handleCopyReport = () => {
    const lines = [
      `=== HASIL EVALUASI UJI PENILAIAN BARISTA (PRE-EMPLOYMENT TEST) ===`,
      `Kandidat: ${candidateName || 'Tanpa Nama'}`,
      `Posisi Dilamar: ${targetRole}`,
      `Tanggal Tes: ${new Date().toLocaleDateString('id-ID', { dateStyle: 'full' })}`,
      '',
      `[ HASIL PENILAIAN TEKNIS ]`,
      `SKOR TOTAL: ${results.scorePct} / 100 (${results.correctCount} dari ${results.totalQuestions} Soal Benar)`,
      `Keputusan HR/Owner: ${results.hiringVerdict}`,
      '',
      `Nilai Per Bidang Kompetensi:`,
      ...Object.entries(results.categoryScores).map(([cat, val]) => {
        const pct = Math.round((val.correct / val.total) * 100);
        return `• ${cat}: ${pct}% (${val.correct}/${val.total} Benar)`;
      }),
      '',
      `Diuji melalui CherryEdu Barista Pre-Employment Assessment (cherryedu.id/assessment/barista)`,
    ];

    navigator.clipboard.writeText(lines.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 font-sans animate-in fade-in duration-200">
      {/* Header Section */}
      <div className="bg-paper-100/80 border border-paper-300 rounded-2xl p-5 sm:p-7 shadow-xs relative overflow-hidden mb-8">
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-cherry-700/5 blur-3xl pointer-events-none" />
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-cherry-700 font-bold bg-cherry-50 px-2 py-0.5 rounded border border-cherry-200">
                [ B2B CAFE OWNER SUITE ]
              </span>
              <span className="font-mono text-[10px] text-roast-500 bg-paper-200/70 px-2 py-0.5 rounded">
                Standar Kualifikasi Staf Bar
              </span>
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-roast-950 tracking-tight">
              Uji Penilaian Barista untuk Pemilik Kafe
            </h1>
            <p className="text-xs sm:text-sm text-roast-600 max-w-2xl leading-relaxed">
              Instrumen evaluasi pra-kerja objektif untuk calon barista. Menilai pemahaman dial-in espresso, kimia susu, sanitasi alat, hospitality, dan efisiensi bar sebelum Anda merekrut tim.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start lg:self-auto">
            {isSubmitted && (
              <button
                onClick={handleCopyReport}
                className="px-3.5 py-2 rounded-xl bg-roast-950 text-paper-50 hover:bg-roast-900 active:scale-[0.98] font-mono text-xs font-semibold flex items-center gap-2 shadow-xs transition-all"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-crema-300" />}
                <span>{copied ? 'Tersalin!' : 'Salin Laporan HR'}</span>
              </button>
            )}
          </div>
        </div>

        {/* Candidate Information Bar */}
        <div className="mt-6 pt-5 border-t border-paper-200 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="space-y-1">
            <label className="font-mono text-[10px] uppercase text-roast-500 block font-semibold flex items-center gap-1">
              <User className="w-3 h-3 text-roast-400" /> Nama Calon Barista / Kandidat:
            </label>
            <input
              type="text"
              value={candidateName}
              onChange={(e) => setCandidateName(e.target.value)}
              disabled={isSubmitted}
              placeholder="Contoh: Fajar Pratama"
              className="w-full bg-paper-50 border border-paper-300 rounded-lg px-3 py-1.5 text-xs text-roast-950 font-medium outline-none focus:border-cherry-700 disabled:opacity-75"
            />
          </div>

          <div className="space-y-1">
            <label className="font-mono text-[10px] uppercase text-roast-500 block font-semibold flex items-center gap-1">
              <Building2 className="w-3 h-3 text-roast-400" /> Posisi / Peran yang Dilamar:
            </label>
            <select
              value={targetRole}
              onChange={(e) => setTargetRole(e.target.value)}
              disabled={isSubmitted}
              className="w-full bg-paper-50 border border-paper-300 rounded-lg px-3 py-1.5 text-xs text-roast-950 font-medium outline-none focus:border-cherry-700 disabled:opacity-75"
            >
              <option value="Senior Barista / Bar Lead">Senior Barista / Bar Lead</option>
              <option value="Barista Full-Time">Barista Full-Time</option>
              <option value="Junior Barista / Apprentice">Junior Barista / Apprentice</option>
              <option value="Head of Beverage & Quality">Head of Beverage & Quality</option>
            </select>
          </div>
        </div>
      </div>

      {/* Result Dossier Card (Displayed after submission) */}
      {isSubmitted && (
        <div className="mb-8 p-6 sm:p-8 rounded-2xl bg-roast-950 text-paper-50 shadow-xl border border-roast-800 space-y-5 animate-in zoom-in-95 duration-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-roast-800 pb-4">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-crema-300 font-bold block">
                [ HASIL EVALUASI AKHIR REKRUTMEN ]
              </span>
              <h3 className="font-serif text-xl font-bold">
                Laporan Penilaian: {candidateName || 'Kandidat'}
              </h3>
            </div>
            <div className="p-2.5 rounded-xl bg-roast-900 text-crema-300 self-start sm:self-auto">
              <Award className="w-6 h-6" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
            {/* Final Big Score */}
            <div className="space-y-1">
              <span className="font-mono text-[10px] uppercase text-roast-400 block">Skor Total Ujian:</span>
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-5xl font-extrabold text-paper-50">
                  {results.scorePct}
                </span>
                <span className="font-mono text-sm text-roast-400">/ 100</span>
              </div>
              <span className="text-[11px] text-roast-300 font-sans block">
                {results.correctCount} dari {results.totalQuestions} Pertanyaan Terjawab Benar
              </span>
            </div>

            {/* Verdict Badge */}
            <div className="sm:col-span-2">
              <div className={`p-4 rounded-xl border space-y-1 ${results.verdictClass}`}>
                <span className="font-mono text-[10px] uppercase tracking-wider block opacity-85">
                  Rekomendasi Perekrutan (HR Decision):
                </span>
                <p className="font-serif font-bold text-base">{results.hiringVerdict}</p>
              </div>
            </div>
          </div>

          {/* Competency Breakdown */}
          <div className="pt-3 border-t border-roast-900 space-y-3">
            <span className="font-mono text-xs uppercase tracking-wider text-crema-300 font-bold block">
              Penguasaan Bidang Kompetensi Barista:
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {Object.entries(results.categoryScores).map(([category, val]) => {
                const catPct = Math.round((val.correct / val.total) * 100);
                return (
                  <div key={category} className="p-3 bg-roast-900/80 rounded-xl border border-roast-800 space-y-1.5">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-paper-200">{category}:</span>
                      <span className="font-bold text-crema-300">{catPct}% ({val.correct}/{val.total})</span>
                    </div>
                    <div className="h-1.5 w-full bg-roast-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-300 ${
                          catPct >= 80 ? 'bg-emerald-400' : catPct >= 50 ? 'bg-amber-400' : 'bg-rose-400'
                        }`}
                        style={{ width: `${catPct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              onClick={handleReset}
              className="px-4 py-2 rounded-xl bg-paper-100/10 hover:bg-paper-100/20 text-paper-50 font-mono text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Ulangi Ujian / Kandidat Baru</span>
            </button>
          </div>
        </div>
      )}

      {/* Questions List */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-wider text-roast-900 font-bold flex items-center gap-1.5">
            <ClipboardCheck className="w-4 h-4 text-cherry-700" /> Daftar Soal Skenario Bar ({ASSESSMENT_QUESTIONS.length} Soal)
          </span>
          <span className="font-mono text-xs text-roast-500">
            Terjawab: {Object.keys(answers).length} / {ASSESSMENT_QUESTIONS.length}
          </span>
        </div>

        {ASSESSMENT_QUESTIONS.map((q, qIdx) => {
          const userSelectedOption = answers[q.id];

          return (
            <div
              key={q.id}
              className="bg-paper-50 border border-paper-300 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4"
            >
              <div className="flex items-center justify-between border-b border-paper-200 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-roast-950 text-paper-50 font-mono text-xs font-bold flex items-center justify-center">
                    {qIdx + 1}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-cherry-700 font-bold bg-cherry-50 px-2 py-0.5 rounded border border-cherry-200">
                    {q.category}
                  </span>
                </div>
                {isSubmitted && (
                  <div>
                    {userSelectedOption !== undefined && q.options[userSelectedOption]?.isCorrect ? (
                      <span className="font-mono text-xs text-emerald-700 font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Benar (+12.5 poin)
                      </span>
                    ) : (
                      <span className="font-mono text-xs text-rose-700 font-bold flex items-center gap-1">
                        <XCircle className="w-4 h-4 text-rose-600" /> Salah
                      </span>
                    )}
                  </div>
                )}
              </div>

              <p className="font-serif font-bold text-sm sm:text-base text-roast-950 leading-relaxed">
                {q.scenario}
              </p>

              {/* Options */}
              <div className="space-y-2">
                {q.options.map((opt, optIdx) => {
                  const isSelected = userSelectedOption === optIdx;
                  let optStyle = 'bg-paper-100/60 hover:bg-paper-200/80 border-paper-300 text-roast-800';

                  if (isSubmitted) {
                    if (opt.isCorrect) {
                      optStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold ring-1 ring-emerald-500';
                    } else if (isSelected && !opt.isCorrect) {
                      optStyle = 'bg-rose-50 border-rose-500 text-rose-950 line-through';
                    } else {
                      optStyle = 'bg-paper-100/40 border-paper-200 text-roast-400 opacity-60';
                    }
                  } else if (isSelected) {
                    optStyle = 'bg-roast-950 text-paper-50 border-roast-950 shadow-xs font-medium';
                  }

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelectOption(q.id as any, optIdx)}
                      disabled={isSubmitted}
                      className={`w-full p-3 sm:p-3.5 rounded-xl border text-left text-xs transition-all flex items-start gap-3 active:scale-[0.99] ${optStyle}`}
                    >
                      <span
                        className={`w-5 h-5 rounded-full border font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5 ${
                          isSelected
                            ? 'bg-crema-300 text-roast-950 border-crema-400'
                            : 'bg-paper-200 border-paper-300 text-roast-600'
                        }`}
                      >
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <span className="flex-1 leading-relaxed font-sans">{opt.text}</span>
                    </button>
                  );
                })}
              </div>

              {/* Detailed Explanation on Submit */}
              {isSubmitted && (
                <div className="mt-3 p-3.5 rounded-xl bg-paper-100/80 border border-paper-200 text-xs text-roast-700 space-y-1 font-sans">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-roast-500 font-bold block">
                    Penjelasan Kunci Jawaban:
                  </span>
                  <p className="leading-relaxed">
                    {q.options.find((o) => o.isCorrect)?.explanation}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Submit Action */}
      {!isSubmitted && (
        <div className="mt-8 pt-6 border-t border-paper-300 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-xs text-roast-500 text-center sm:text-left">
            Pastikan seluruh soal telah dijawab dengan teliti sebelum mengirim.
          </span>
          <button
            onClick={handleSubmit}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-cherry-700 hover:bg-cherry-800 text-paper-50 font-mono text-xs font-bold transition-all active:scale-[0.98] shadow-md flex items-center justify-center gap-2"
          >
            <Check className="w-4 h-4" />
            <span>Kirim & Nilai Ujian Barista</span>
          </button>
        </div>
      )}
    </div>
  );
}
