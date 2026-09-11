'use client';

import { useState } from "react";
import { useRouter } from 'next/navigation';
import { useCherryEdu } from '@/lib/store';
import { ArrowRight, Coffee } from "lucide-react";

interface DiagnosticQuestion {
  id: number;
  question: string;
  subtitle: string;
  options: {
    label: string;
    sublabel: string;
    targetRole: 'barista' | 'home_brewer' | 'all';
    points: { barista: number; home_brewer: number };
  }[];
}

const QUESTIONS: DiagnosticQuestion[] = [
  {
    id: 1,
    question: 'Apa tujuan utama Anda belajar kopi saat ini?',
    subtitle: 'Kami ingin merekomendasikan kurikulum yang paling selaras dengan impian Anda.',
    options: [
      {
        label: 'Ingin bekerja sebagai Barista profesional di Coffee Shop',
        sublabel: 'Butuh bekal ilmu dari nol, espresso dial-in, sains susu, dan portofolio siap kerja.',
        targetRole: 'barista',
        points: { barista: 3, home_brewer: 0 },
      },
      {
        label: 'Ingin menyeduh kopi nikmat mandiri di rumah',
        sublabel: 'Ingin menguasai V60, Aeropress, eksplorasi single origin nusantara untuk hobi.',
        targetRole: 'home_brewer',
        points: { barista: 0, home_brewer: 3 },
      },
      {
        label: 'Ingin membuka bisnis coffee shop atau roastery sendiri',
        sublabel: 'Perlu memahami seluruh rantai pasok kopi dari kebun hingga manajemen bar.',
        targetRole: 'all',
        points: { barista: 2, home_brewer: 1 },
      },
      {
        label: 'Baru sekadar penasaran dengan dunia specialty coffee',
        sublabel: 'Ingin mengerti kenapa kopi specialty punya rasa buah dan bunga tanpa sirup tambahan.',
        targetRole: 'all',
        points: { barista: 1, home_brewer: 1 },
      },
    ],
  },
  {
    id: 2,
    question: 'Sejauh mana pemahaman kopi Anda saat ini?',
    subtitle: 'Tidak perlu ragu jika Anda masih pemula, semua materi dimulai dari dasar.',
    options: [
      {
        label: 'Pemula total, baru sering jajan es kopi susu',
        sublabel: 'Belum pernah menyeduh kopi sendiri secara manual.',
        targetRole: 'all',
        points: { barista: 1, home_brewer: 1 },
      },
      {
        label: 'Sering pesan manual brew atau espresso di specialty cafe',
        sublabel: 'Tahu nama varietas seperti Gayo atau Kintamani, tapi belum paham sainsnya.',
        targetRole: 'home_brewer',
        points: { barista: 1, home_brewer: 2 },
      },
      {
        label: 'Sudah sering menyeduh V60/Aeropress sendiri di rumah',
        sublabel: 'Punya timbangan dan grinder, ingin meningkatkan konsistensi rasa seduhan.',
        targetRole: 'home_brewer',
        points: { barista: 1, home_brewer: 3 },
      },
      {
        label: 'Pernah bekerja magang atau training dasar barista',
        sublabel: 'Ingin memperkuat teori sains ekstraksi dan manajemen bar profesional.',
        targetRole: 'barista',
        points: { barista: 3, home_brewer: 0 },
      },
    ],
  },
  {
    id: 3,
    question: 'Peralatan apa yang paling sering Anda gunakan / ingin kuasai?',
    subtitle: 'Setiap jalur spesialisasi memiliki modul praktik yang disesuaikan dengan peralatan.',
    options: [
      {
        label: 'Mesin Espresso Komersial & Steam Wand Susu',
        sublabel: 'Dialing in espresso, steaming microfoam untuk latte art tulip/rosetta.',
        targetRole: 'barista',
        points: { barista: 3, home_brewer: 0 },
      },
      {
        label: 'Manual Dripper (V60, Aeropress, French Press, Cold Brew)',
        sublabel: 'Penyeduhan pour-over santai dengan ketel leher angsa dan timbangan digital.',
        targetRole: 'home_brewer',
        points: { barista: 0, home_brewer: 3 },
      },
      {
        label: 'Keduanya (Ingin menguasai Bar Espresso & Manual Brew sekaligus)',
        sublabel: 'Pemahaman komprehensif seluruh instrumen ekstraksi kopi.',
        targetRole: 'all',
        points: { barista: 2, home_brewer: 2 },
      },
    ],
  },
  {
    id: 4,
    question: 'Berapa banyak waktu yang bisa Anda alokasikan setiap minggu?',
    subtitle: 'Belajar di CherryEdu fleksibel 100% online kapan pun Anda punya waktu luang.',
    options: [
      {
        label: '1 – 2 Jam per minggu (Santai di waktu luang)',
        sublabel: 'Membaca 1 modul per minggu sambil menikmati kopi sore.',
        targetRole: 'home_brewer',
        points: { barista: 0, home_brewer: 2 },
      },
      {
        label: '3 – 5 Jam per minggu (Komitmen teratur)',
        sublabel: 'Menyelesaikan modul dan kuis secara sistematis.',
        targetRole: 'all',
        points: { barista: 2, home_brewer: 2 },
      },
      {
        label: 'Lebih dari 7 Jam per minggu (Intensif & Cepat)',
        sublabel: 'Ingin segera lulus sertifikasi untuk melamar lowongan barista bulan ini.',
        targetRole: 'barista',
        points: { barista: 3, home_brewer: 1 },
      },
    ],
  },
];

export default function OnboardingPage() {
  const router = useRouter();
  const { updateUserProfile, enrollInPath } = useCherryEdu();

  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const handleSelectOption = (questionIndex: number, optionIndex: number) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionIndex]: optionIndex }));
  };

  const handleNext = () => {
    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate outcome
      setIsCompleted(true);
    }
  };

  // Determine recommended path
  let baristaScore = 0;
  let homeBrewerScore = 0;

  Object.entries(selectedAnswers).forEach(([qIdx, optIdx]) => {
    const q = QUESTIONS[Number(qIdx)];
    if (q && q.options[optIdx]) {
      baristaScore += q.options[optIdx].points.barista;
      homeBrewerScore += q.options[optIdx].points.home_brewer;
    }
  });

  const recommendedSpecialization = baristaScore >= homeBrewerScore ? 'barista' : 'home_brewer';

  const handleApplyRecommendation = () => {
    updateUserProfile({
      coffee_role: recommendedSpecialization === 'barista' ? 'barista' : 'home_brewer',
    });
    // Auto enroll into Foundation (always required)
    enrollInPath('path-foundation');
    router.push('/paths/kopi-dari-hulu-ke-hilir');
  };

  const currentQ = QUESTIONS[currentStep];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="bg-paper-50 border border-paper-400 p-6 sm:p-10 shadow-xs">
        {!isCompleted ? (
          <div>
            {/* Step Indicator Ledger */}
            <div className="flex items-center justify-between gap-4 pb-4 mb-6 border-b border-paper-300 font-mono">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-cherry-700 bg-cherry-50 px-2 py-0.5 border border-cherry-200">
                  [ DIAGNOSIS MINAT ]
                </span>
                <span className="text-[11px] text-roast-500 uppercase">
                  PERTANYAAN {currentStep + 1} DARI {QUESTIONS.length}
                </span>
              </div>

              {/* Progress dashes */}
              <div className="flex gap-1">
                {QUESTIONS.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-6 h-1 transition-colors ${
                      idx <= currentStep ? 'bg-roast-950' : 'bg-paper-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Question Box */}
            <div className="mb-8">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-roast-950 mb-2 leading-snug tracking-tight">
                {currentQ.question}
              </h2>
              <p className="font-sans text-xs sm:text-sm text-roast-600 leading-relaxed">
                {currentQ.subtitle}
              </p>
            </div>

            {/* Options */}
            <div className="space-y-3">
              {currentQ.options.map((opt, oIdx) => {
                const isSelected = selectedAnswers[currentStep] === oIdx;
                return (
                  <button
                    key={oIdx}
                    onClick={() => handleSelectOption(currentStep, oIdx)}
                    className={`w-full text-left p-5 border transition-all flex items-start gap-4 ${
                      isSelected
                        ? 'bg-paper-100 border-roast-950 shadow-xs'
                        : 'bg-paper-50 border-paper-300 hover:border-roast-700'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 border mt-0.5 shrink-0 flex items-center justify-center transition-colors ${
                        isSelected ? 'border-roast-950 bg-roast-950 text-paper-50' : 'border-paper-400 bg-paper-50'
                      }`}
                    >
                      {isSelected && <div className="w-1.5 h-1.5 bg-paper-50" />}
                    </div>

                    <div className="flex-1">
                      <div className="font-serif text-base font-bold text-roast-950">
                        {opt.label}
                      </div>
                      <div className="font-sans text-xs text-roast-600 mt-1 leading-relaxed">
                        {opt.sublabel}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-8 mt-8 border-t border-paper-300 font-mono text-xs">
              <button
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
                className="px-4 py-2 uppercase tracking-wider text-roast-600 hover:text-roast-950 disabled:opacity-20"
              >
                &larr; Sebelumnya
              </button>

              <button
                onClick={handleNext}
                disabled={selectedAnswers[currentStep] === undefined}
                className="px-6 py-2.5 bg-roast-950 hover:bg-cherry-800 disabled:bg-paper-300 text-paper-50 uppercase tracking-wider font-bold flex items-center gap-2 transition-all border border-roast-900 shadow-xs"
              >
                <span>{currentStep === QUESTIONS.length - 1 ? 'Tampilkan Rekomendasi' : 'Selanjutnya'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ) : (
          /* Result Screen */
          <div className="py-4">
            <div className="text-center mb-8">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-cherry-700 bg-cherry-50 px-2.5 py-1 border border-cherry-200">
                [ HASIL ASESMEN SELESAI ]
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-roast-950 mt-3 mb-2 tracking-tight">
                Rencana Kurikulum Pembelajaran Anda
              </h2>
              <p className="font-sans text-xs sm:text-sm text-roast-600 max-w-md mx-auto leading-relaxed">
                Berdasarkan orientasi dan preferensi instrumen Anda, akademi menyusun dua lapis kurikulum terstruktur berikut:
              </p>
            </div>

            {/* Visual Path Flow Card */}
            <div className="space-y-4 max-w-xl mx-auto mb-10">
              {/* Step 1: Foundation (Mandatory) */}
              <div className="bg-roast-950 text-paper-50 p-6 border border-roast-900 shadow-warm">
                <div className="flex items-center justify-between font-mono text-[10px] font-bold text-crema-300 mb-2">
                  <span>[ LANGKAH 1 — WAJIB FONDASI ]</span>
                  <span className="border border-crema-500/40 px-2 py-0.5">7 MODUL INTI</span>
                </div>
                <h4 className="font-serif text-xl font-bold text-paper-50">
                  Foundation: Kopi dari Hulu ke Hilir
                </h4>
                <p className="font-sans text-xs text-paper-200 mt-2 leading-relaxed">
                  Pemahaman komprehensif anatomi buah kopi, varietas lokal Indonesia, pasca panen (wet hull, honey, anaerobic), sains roasting, kimia air (TDS), dan protokol cupping standar SCA.
                </p>
              </div>

              {/* Step 2: Recommended Specialization */}
              <div className="bg-paper-100 border-2 border-cherry-700 p-6 shadow-xs">
                <div className="flex items-center justify-between font-mono text-[10px] font-bold text-cherry-700 mb-2">
                  <span>[ LANGKAH 2 — SPESIALISASI TERPILIH ]</span>
                  <span className="bg-cherry-700 text-paper-50 px-2 py-0.5 uppercase">
                    REKOMENDASI 98% MATCH
                  </span>
                </div>
                <h4 className="font-serif text-xl font-bold text-roast-950">
                  {recommendedSpecialization === 'barista'
                    ? 'Spesialisasi Barista: Bar Operations & Espresso Science'
                    : 'Spesialisasi Home Brewer: Manual Brew & Sensory Calibration'}
                </h4>
                <p className="font-sans text-xs text-roast-700 mt-2 leading-relaxed">
                  {recommendedSpecialization === 'barista'
                    ? 'Penguasaan dial-in espresso komersial, fisika microfoam susu dan latte art, alur kerja kecepatan tinggi di coffee shop, dan sertifikasi siap kerja.'
                    : 'Eksplorasi pour-over V60, Aeropress, French Press, formulasi air seduh buatan sendiri, dan kalibrasi indra pengecap rumahan.'}
                </p>
              </div>
            </div>

            {/* Action CTA */}
            <div className="flex justify-center">
              <button
                onClick={handleApplyRecommendation}
                className="px-8 py-3.5 bg-cherry-700 hover:bg-cherry-800 text-paper-50 font-mono text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 shadow-warm transition-all border border-cherry-900"
              >
                <span>Mulai Belajar dari Foundation Layer Sekarang →</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
