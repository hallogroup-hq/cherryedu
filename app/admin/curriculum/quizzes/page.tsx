'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useCherryEdu } from '@/lib/store';
import { Question } from '@/lib/types';
import {
  HelpCircle,
  Plus,
  Trash2,
  Save,
  Clock,
  Award,
  ExternalLink,
  ChevronUp,
  ChevronDown,
  CheckCircle2,
  AlertCircle,
  X,
} from 'lucide-react';

interface AnswerDraft {
  id: string;
  answer_text: string;
  is_correct: boolean;
}

interface QuestionDraft {
  id: string;
  quiz_id: string;
  question_text: string;
  question_type: 'multiple_choice' | 'true_false';
  order_index: number;
  answers: AnswerDraft[];
  explanation?: string;
  points?: number;
}

export default function QuizBuilderPage() {
  const {
    learningPaths,
    modules,
    quizzes,
    questions: allQuestions,
    saveQuizWithQuestions,
  } = useCherryEdu();

  const [selectedPathId, setSelectedPathId] = useState<string>(learningPaths[0]?.id || '');
  const [selectedQuizId, setSelectedQuizId] = useState<string | null>(null);

  // Filter quizzes by learning path (matching direct path ID or module's path ID)
  const pathModules = useMemo(
    () => modules.filter((m) => m.learning_path_id === selectedPathId),
    [modules, selectedPathId]
  );
  const pathModuleIds = useMemo(() => new Set(pathModules.map((m) => m.id)), [pathModules]);
  const availableQuizzes = useMemo(
    () =>
      quizzes.filter(
        (q) =>
          q.learning_path_id === selectedPathId ||
          (q.module_id && pathModuleIds.has(q.module_id))
      ),
    [quizzes, selectedPathId, pathModuleIds]
  );

  const currentPath = learningPaths.find((p) => p.id === selectedPathId);
  const currentQuiz = quizzes.find((q) => q.id === selectedQuizId);

  // Form states
  const [title, setTitle] = useState('');
  const [passingScore, setPassingScore] = useState(80);
  const [timeLimit, setTimeLimit] = useState(15);
  const [questions, setQuestions] = useState<QuestionDraft[]>([]);
  const [isSaved, setIsSaved] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  // Auto-select first quiz when availableQuizzes changes or selectedQuizId is invalid
  useEffect(() => {
    if (availableQuizzes.length > 0) {
      if (!selectedQuizId || !availableQuizzes.some((q) => q.id === selectedQuizId)) {
        setSelectedQuizId(availableQuizzes[0].id);
      }
    } else {
      setSelectedQuizId(null);
    }
  }, [availableQuizzes, selectedQuizId]);

  // Load real quiz metadata & questions when selectedQuizId changes
  useEffect(() => {
    if (!selectedQuizId) {
      setTitle('');
      setPassingScore(80);
      setTimeLimit(15);
      setQuestions([]);
      return;
    }

    const quiz = quizzes.find((q) => q.id === selectedQuizId);
    if (quiz) {
      setTitle(quiz.title);
      setPassingScore(quiz.passing_score ?? 80);
      setTimeLimit(quiz.time_limit_minutes ?? 15);

      // Load actual questions for this quiz from the store
      const quizQuestions = allQuestions.filter((q) => q.quiz_id === selectedQuizId);
      setQuestions(
        quizQuestions.map((q, idx) => ({
          id: q.id,
          quiz_id: q.quiz_id,
          question_text: q.question_text,
          question_type: q.question_type,
          order_index: q.order_index || idx + 1,
          explanation: q.explanation || '',
          answers: q.answers.map((a) => ({
            id: a.id,
            answer_text: a.answer_text,
            is_correct: a.is_correct,
          })),
        }))
      );
    }
  }, [selectedQuizId, quizzes, allQuestions]);

  // Add question
  const addQuestion = (type: 'multiple_choice' | 'true_false') => {
    if (!selectedQuizId) return;
    const qId = `q-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
    const newQ: QuestionDraft = {
      id: qId,
      quiz_id: selectedQuizId,
      question_text: '',
      question_type: type,
      order_index: questions.length + 1,
      answers:
        type === 'true_false'
          ? [
              { id: `tf-${qId}-1`, answer_text: 'Benar', is_correct: true },
              { id: `tf-${qId}-2`, answer_text: 'Salah', is_correct: false },
            ]
          : [
              { id: `ans-${qId}-a`, answer_text: '', is_correct: true },
              { id: `ans-${qId}-b`, answer_text: '', is_correct: false },
              { id: `ans-${qId}-c`, answer_text: '', is_correct: false },
              { id: `ans-${qId}-d`, answer_text: '', is_correct: false },
            ],
      explanation: '',
    };
    setQuestions((prev) => [...prev, newQ]);
  };

  const updateQuestionText = (id: string, text: string) => {
    setQuestions((prev) => prev.map((q) => (q.id === id ? { ...q, question_text: text } : q)));
  };

  const setCorrectAnswer = (qId: string, aId: string) => {
    setQuestions((prev) =>
      prev.map((q) => {
        if (q.id !== qId) return q;
        return {
          ...q,
          answers: q.answers.map((a) => ({ ...a, is_correct: a.id === aId })),
        };
      })
    );
  };

  const updateAnswerText = (qId: string, aId: string, text: string) => {
    setQuestions((prev) =>
      prev.map((q) => {
        if (q.id !== qId) return q;
        return {
          ...q,
          answers: q.answers.map((a) => (a.id === aId ? { ...a, answer_text: text } : a)),
        };
      })
    );
  };

  const addAnswerOption = (qId: string) => {
    setQuestions((prev) =>
      prev.map((q) => {
        if (q.id !== qId) return q;
        if (q.answers.length >= 6) return q;
        const newAns: AnswerDraft = {
          id: `ans-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
          answer_text: '',
          is_correct: false,
        };
        return {
          ...q,
          answers: [...q.answers, newAns],
        };
      })
    );
  };

  const deleteAnswerOption = (qId: string, aId: string) => {
    setQuestions((prev) =>
      prev.map((q) => {
        if (q.id !== qId) return q;
        if (q.answers.length <= 2) return q;
        const remaining = q.answers.filter((a) => a.id !== aId);
        const wasCorrect = q.answers.find((a) => a.id === aId)?.is_correct;
        if (wasCorrect && remaining.length > 0) {
          remaining[0] = { ...remaining[0], is_correct: true };
        }
        return {
          ...q,
          answers: remaining,
        };
      })
    );
  };

  const deleteQuestion = (id: string) => {
    setQuestions((prev) => prev.filter((q) => q.id !== id));
  };

  const moveQuestion = (index: number, direction: 'up' | 'down') => {
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= questions.length) return;
    const reordered = [...questions];
    const [moved] = reordered.splice(index, 1);
    reordered.splice(targetIndex, 0, moved);
    setQuestions(reordered);
  };

  const handleSave = () => {
    if (!selectedQuizId) {
      setFeedback({ type: 'error', message: 'Silakan pilih quiz terlebih dahulu.' });
      return;
    }
    if (!title.trim()) {
      setFeedback({ type: 'error', message: 'Judul kuis tidak boleh kosong.' });
      return;
    }

    // Validation checks
    for (let i = 0; i < questions.length; i++) {
      const q = questions[i];
      if (!q.question_text.trim()) {
        setFeedback({
          type: 'error',
          message: `Pertanyaan nomor ${i + 1} belum memiliki teks pertanyaan.`,
        });
        return;
      }
      if (q.answers.length < 2) {
        setFeedback({
          type: 'error',
          message: `Pertanyaan nomor ${i + 1} harus memiliki minimal 2 opsi jawaban.`,
        });
        return;
      }
      const hasEmptyAnswer = q.answers.some((a) => !a.answer_text.trim());
      if (hasEmptyAnswer) {
        setFeedback({
          type: 'error',
          message: `Ada opsi jawaban kosong pada pertanyaan nomor ${i + 1}.`,
        });
        return;
      }
      const hasCorrect = q.answers.some((a) => a.is_correct);
      if (!hasCorrect) {
        setFeedback({
          type: 'error',
          message: `Pilih 1 kunci jawaban yang benar untuk pertanyaan nomor ${i + 1}.`,
        });
        return;
      }
    }

    const finalQuestions: Question[] = questions.map((q, idx) => ({
      id: q.id,
      quiz_id: selectedQuizId,
      question_text: q.question_text.trim(),
      question_type: q.question_type,
      order_index: idx + 1,
      explanation: q.explanation?.trim() || '',
      answers: q.answers.map((a, aIdx) => ({
        id: a.id,
        question_id: q.id,
        answer_text: a.answer_text.trim(),
        is_correct: a.is_correct,
        order_index: aIdx + 1,
      })),
    }));

    saveQuizWithQuestions(
      selectedQuizId,
      {
        title: title.trim(),
        passing_score: Math.min(100, Math.max(10, Number(passingScore))),
        time_limit_minutes: Math.min(180, Math.max(1, Number(timeLimit))),
      },
      finalQuestions
    );

    setIsSaved(true);
    setFeedback({
      type: 'success',
      message: `Berhasil menyimpan quiz "${title}" beserta ${finalQuestions.length} pertanyaan ke database!`,
    });

    setTimeout(() => {
      setIsSaved(false);
      setFeedback(null);
    }, 4000);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif font-black text-2xl text-roast-950">Quiz Builder</h1>
          <p className="text-sm text-roast-500 mt-0.5">
            Sinkronisasi & kelola bank soal ujian, passing score, dan kunci jawaban resmi CherryEdu
          </p>
        </div>
        <div className="flex items-center gap-2.5">
          {currentPath && selectedQuizId && (
            <Link
              href={`/paths/${currentPath.slug}/quiz/${selectedQuizId}`}
              target="_blank"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-mono rounded-lg border border-paper-300 hover:bg-paper-100 text-roast-700 transition-colors"
              title="Buka tampilan kuis versi siswa di tab baru"
            >
              <ExternalLink className="w-3.5 h-3.5 text-roast-500" />
              <span>Tampilan Peserta ↗</span>
            </Link>
          )}

          <button
            onClick={handleSave}
            className={`flex items-center gap-1.5 px-4 py-2 text-xs font-mono rounded-lg font-bold transition-all ${
              isSaved
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-roast-950 hover:bg-roast-900 text-paper-50'
            }`}
          >
            <Save className="w-3.5 h-3.5" />
            {isSaved ? '✓ Tersimpan!' : 'Simpan Quiz'}
          </button>
        </div>
      </div>

      {/* Feedback Banner */}
      {feedback && (
        <div
          className={`p-3.5 rounded-xl border flex items-center justify-between gap-3 text-xs font-mono ${
            feedback.type === 'success'
              ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
              : 'bg-rose-50 border-rose-200 text-rose-800'
          }`}
        >
          <div className="flex items-center gap-2">
            {feedback.type === 'success' ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            ) : (
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            )}
            <span>{feedback.message}</span>
          </div>
          <button
            onClick={() => setFeedback(null)}
            className="p-1 hover:opacity-70 text-current transition-opacity"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Learning Path Selector & Quiz List */}
        <div className="lg:col-span-4 space-y-5">
          {/* Path filter & Quiz Selection */}
          <div className="bg-white rounded-xl border border-paper-200 p-4 space-y-3 shadow-xs">
            <label className="block font-mono text-[10px] uppercase tracking-wider text-roast-400 font-bold">
              Pilih Learning Path
            </label>
            <select
              value={selectedPathId}
              onChange={(e) => setSelectedPathId(e.target.value)}
              className="w-full text-xs font-medium border border-paper-200 rounded-lg p-2.5 bg-paper-50 text-roast-900 focus:outline-none focus:border-roast-400"
            >
              {learningPaths.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.title}
                </option>
              ))}
            </select>

            <div className="pt-2 border-t border-paper-100">
              <div className="flex items-center justify-between mb-2">
                <label className="font-mono text-[10px] uppercase tracking-wider text-roast-400 font-bold">
                  Daftar Quiz ({availableQuizzes.length})
                </label>
                <span className="font-mono text-[10px] text-roast-400">
                  {allQuestions.filter((q) => availableQuizzes.some((aq) => aq.id === q.quiz_id)).length} Total Soal
                </span>
              </div>
              <div className="space-y-1.5 max-h-[360px] overflow-y-auto pr-1">
                {availableQuizzes.length === 0 ? (
                  <p className="text-xs text-roast-400 py-3 text-center italic">
                    Tidak ada quiz pada path ini.
                  </p>
                ) : (
                  availableQuizzes.map((q) => {
                    const count = allQuestions.filter((aq) => aq.quiz_id === q.id).length;
                    const isSelected = selectedQuizId === q.id;
                    return (
                      <button
                        key={q.id}
                        type="button"
                        onClick={() => setSelectedQuizId(q.id)}
                        className={`w-full text-left p-2.5 rounded-lg text-xs transition-colors flex items-center justify-between gap-2 ${
                          isSelected
                            ? 'bg-cherry-50 text-cherry-900 font-bold border border-cherry-200'
                            : 'text-roast-700 hover:bg-paper-50 border border-transparent'
                        }`}
                      >
                        <span className="truncate flex-1">{q.title}</span>
                        <div className="flex items-center gap-1.5 shrink-0 font-mono text-[10px]">
                          <span
                            className={`px-1.5 py-0.5 rounded ${
                              isSelected
                                ? 'bg-cherry-100 text-cherry-900'
                                : 'bg-paper-100 text-roast-500'
                            }`}
                          >
                            {count} soal
                          </span>
                          <span className="text-roast-400">{q.passing_score}%</span>
                        </div>
                      </button>
                    );
                  })
                )}
              </div>
            </div>
          </div>

          {/* Quiz Parameters */}
          {selectedQuizId && (
            <div className="bg-white rounded-xl border border-paper-200 p-5 space-y-4 shadow-xs">
              <h3 className="font-mono text-[11px] uppercase tracking-widest text-roast-400 font-bold">
                Pengaturan Quiz
              </h3>

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-wider text-roast-500 font-bold mb-1">
                  Judul Ujian
                </label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Masukkan judul quiz..."
                  className="w-full text-xs text-roast-900 border border-paper-200 rounded-lg p-2.5 bg-paper-50/50 focus:outline-none focus:border-roast-400 font-medium"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-roast-500 font-bold mb-1">
                    Passing Score (%)
                  </label>
                  <div className="flex items-center gap-1.5 border border-paper-200 rounded-lg p-2 bg-paper-50">
                    <Award className="w-3.5 h-3.5 text-cherry-700 shrink-0" />
                    <input
                      type="number"
                      min="10"
                      max="100"
                      value={passingScore}
                      onChange={(e) => setPassingScore(Number(e.target.value))}
                      className="w-full text-xs font-mono bg-transparent border-none outline-none font-bold text-roast-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-roast-500 font-bold mb-1">
                    Batas Waktu (Menit)
                  </label>
                  <div className="flex items-center gap-1.5 border border-paper-200 rounded-lg p-2 bg-paper-50">
                    <Clock className="w-3.5 h-3.5 text-roast-400 shrink-0" />
                    <input
                      type="number"
                      min="1"
                      max="180"
                      value={timeLimit}
                      onChange={(e) => setTimeLimit(Number(e.target.value))}
                      className="w-full text-xs font-mono bg-transparent border-none outline-none font-bold text-roast-900"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Questions Editor */}
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-widest text-roast-400 font-bold">
                Daftar Pertanyaan ({questions.length})
              </h3>
              {currentQuiz && (
                <p className="text-xs text-roast-500 mt-0.5 font-medium truncate max-w-md">
                  Mengedit pertanyaan untuk: <span className="text-roast-900 font-semibold">{currentQuiz.title}</span>
                </p>
              )}
            </div>

            {selectedQuizId && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => addQuestion('multiple_choice')}
                  className="flex items-center gap-1 px-3 py-1.5 bg-paper-100 hover:bg-paper-200 border border-paper-300 rounded-lg text-xs font-mono text-roast-700 transition-colors font-medium"
                >
                  <Plus className="w-3 h-3" />
                  Pilihan Ganda
                </button>
                <button
                  type="button"
                  onClick={() => addQuestion('true_false')}
                  className="flex items-center gap-1 px-3 py-1.5 bg-paper-100 hover:bg-paper-200 border border-paper-300 rounded-lg text-xs font-mono text-roast-700 transition-colors font-medium"
                >
                  <Plus className="w-3 h-3" />
                  Benar / Salah
                </button>
              </div>
            )}
          </div>

          {!selectedQuizId ? (
            <div className="bg-white border border-dashed border-paper-300 rounded-xl p-12 text-center text-roast-400">
              <HelpCircle className="w-10 h-10 mx-auto mb-3 opacity-30" />
              <p className="text-sm font-mono font-medium">Pilih quiz di sebelah kiri untuk melihat dan mengedit soal</p>
            </div>
          ) : questions.length === 0 ? (
            <div className="bg-white border border-dashed border-paper-300 rounded-xl p-12 text-center text-roast-400">
              <HelpCircle className="w-10 h-10 mx-auto mb-3 opacity-30 text-roast-300" />
              <p className="text-sm font-mono font-bold text-roast-700">Belum ada pertanyaan pada kuis ini</p>
              <p className="text-xs text-roast-400 mt-1 max-w-sm mx-auto">
                Gunakan tombol di pojok kanan atas untuk menambahkan soal baru (Pilihan Ganda atau Benar / Salah).
              </p>
              <div className="flex items-center justify-center gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => addQuestion('multiple_choice')}
                  className="flex items-center gap-1 px-3 py-1.5 bg-roast-950 text-paper-50 hover:bg-roast-900 rounded-lg text-xs font-mono font-medium transition-colors"
                >
                  <Plus className="w-3 h-3" />
                  + Tambah Pilihan Ganda
                </button>
                <button
                  type="button"
                  onClick={() => addQuestion('true_false')}
                  className="flex items-center gap-1 px-3 py-1.5 bg-paper-100 hover:bg-paper-200 border border-paper-300 rounded-lg text-xs font-mono text-roast-800 font-medium transition-colors"
                >
                  <Plus className="w-3 h-3" />
                  + Tambah Benar / Salah
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {questions.map((q, qIndex) => (
                <div
                  key={q.id}
                  className="bg-white rounded-xl border border-paper-200 p-5 space-y-4 hover:border-roast-300 transition-colors shadow-xs"
                >
                  {/* Question header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-roast-950 text-paper-50 font-mono text-xs flex items-center justify-center font-bold">
                        {qIndex + 1}
                      </span>
                      <span className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 bg-paper-100 border border-paper-200 rounded font-bold text-roast-500">
                        {q.question_type === 'multiple_choice' ? 'Pilihan Ganda' : 'Benar / Salah'}
                      </span>
                      <span className="font-mono text-[9px] text-roast-400">
                        ID: {q.id}
                      </span>
                    </div>

                    <div className="flex items-center gap-1">
                      {/* Move up / down */}
                      <button
                        type="button"
                        disabled={qIndex === 0}
                        onClick={() => moveQuestion(qIndex, 'up')}
                        className="p-1 text-roast-400 hover:text-roast-700 disabled:opacity-20 disabled:hover:text-roast-400 rounded transition-colors"
                        title="Pindah ke atas"
                      >
                        <ChevronUp className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        disabled={qIndex === questions.length - 1}
                        onClick={() => moveQuestion(qIndex, 'down')}
                        className="p-1 text-roast-400 hover:text-roast-700 disabled:opacity-20 disabled:hover:text-roast-400 rounded transition-colors"
                        title="Pindah ke bawah"
                      >
                        <ChevronDown className="w-4 h-4" />
                      </button>

                      {/* Delete */}
                      <button
                        type="button"
                        onClick={() => deleteQuestion(q.id)}
                        className="p-1 text-roast-300 hover:text-rose-600 rounded transition-colors ml-1"
                        title="Hapus Soal"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Question Input */}
                  <div>
                    <label className="block font-mono text-[9px] uppercase tracking-wider text-roast-400 font-bold mb-1">
                      Pertanyaan
                    </label>
                    <textarea
                      rows={2}
                      value={q.question_text}
                      onChange={(e) => updateQuestionText(q.id, e.target.value)}
                      placeholder="Ketik pertanyaan di sini..."
                      className="w-full text-xs text-roast-900 border border-paper-200 rounded-lg p-2.5 focus:outline-none focus:border-roast-400 resize-none font-medium leading-relaxed bg-paper-50/30"
                    />
                  </div>

                  {/* Answers */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="block font-mono text-[9px] uppercase tracking-wider text-roast-400 font-bold">
                        Pilihan Jawaban (Klik radio button untuk menandai jawaban benar)
                      </label>
                      {q.question_type === 'multiple_choice' && q.answers.length < 6 && (
                        <button
                          type="button"
                          onClick={() => addAnswerOption(q.id)}
                          className="text-[10px] font-mono text-cherry-700 hover:text-cherry-800 font-bold flex items-center gap-0.5"
                        >
                          <Plus className="w-2.5 h-2.5" />
                          Tambah Opsi
                        </button>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      {q.answers.map((ans, aIndex) => (
                        <div
                          key={ans.id}
                          className={`flex items-center gap-2.5 p-2 rounded-lg border transition-colors ${
                            ans.is_correct
                              ? 'bg-emerald-50/70 border-emerald-300 shadow-2xs'
                              : 'bg-paper-50/70 border-paper-200 hover:border-paper-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name={`correct-${q.id}`}
                            checked={ans.is_correct}
                            onChange={() => setCorrectAnswer(q.id, ans.id)}
                            className="accent-emerald-600 w-4 h-4 cursor-pointer shrink-0"
                            title="Tandai sebagai jawaban benar"
                          />
                          <span className="font-mono text-xs text-roast-500 font-bold w-4 shrink-0">
                            {String.fromCharCode(65 + aIndex)}.
                          </span>
                          <input
                            value={ans.answer_text}
                            onChange={(e) => updateAnswerText(q.id, ans.id, e.target.value)}
                            className="flex-1 text-xs bg-transparent border-none outline-none text-roast-900 placeholder:text-roast-300 font-medium"
                            placeholder={`Teks opsi ${String.fromCharCode(65 + aIndex)}...`}
                          />
                          {ans.is_correct && (
                            <span className="font-mono text-[9px] text-emerald-800 font-bold uppercase tracking-wider px-2 py-0.5 bg-emerald-100 border border-emerald-200 rounded shrink-0">
                              Kunci Benar
                            </span>
                          )}
                          {q.question_type === 'multiple_choice' && q.answers.length > 2 && (
                            <button
                              type="button"
                              onClick={() => deleteAnswerOption(q.id, ans.id)}
                              className="p-1 text-roast-300 hover:text-rose-600 rounded transition-colors"
                              title="Hapus Opsi"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Explanation */}
                  <div>
                    <label className="block font-mono text-[9px] uppercase tracking-wider text-roast-400 font-bold mb-1">
                      Penjelasan Kunci Jawaban (Ditampilkan kepada peserta setelah selesai ujian)
                    </label>
                    <input
                      value={q.explanation || ''}
                      onChange={(e) => {
                        const val = e.target.value;
                        setQuestions((prev) =>
                          prev.map((item) => (item.id === q.id ? { ...item, explanation: val } : item))
                        );
                      }}
                      placeholder="Contoh: Menurut standar SCA Golden Cup, rasio ideal adalah..."
                      className="w-full text-xs text-roast-700 border border-paper-200 rounded-lg p-2.5 bg-paper-50 focus:outline-none focus:border-roast-400 font-medium"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
