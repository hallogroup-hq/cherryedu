'use client';

import { useState } from "react";
import { useCherryEdu } from '@/lib/store';
import {
  HelpCircle,
  Plus,
  Trash2,
  Save,
  Clock,
  Award,
} from "lucide-react";

interface QuestionDraft {
  id: string;
  question_text: string;
  question_type: 'multiple_choice' | 'true_false';
  answers: { id: string; answer_text: string; is_correct: boolean }[];
  explanation?: string;
}

export default function QuizBuilderPage() {
  const { learningPaths, modules, quizzes } = useCherryEdu();
  const [selectedPathId, setSelectedPathId] = useState<string>(learningPaths[0]?.id || '');
  const [selectedQuizId, setSelectedQuizId] = useState<string | null>(quizzes[0]?.id || null);

  // Filter quizzes by path
  const pathModules = modules.filter((m) => m.learning_path_id === selectedPathId);
  const pathModuleIds = new Set(pathModules.map((m) => m.id));
  const availableQuizzes = quizzes.filter(
    (q) =>
      q.learning_path_id === selectedPathId ||
      (q.module_id && pathModuleIds.has(q.module_id))
  );

  const currentQuiz = quizzes.find((q) => q.id === selectedQuizId);

  // Form states
  const [title, setTitle] = useState(currentQuiz?.title || 'Ujian Modul Baru');
  const [passingScore, setPassingScore] = useState(currentQuiz?.passing_score || 80);
  const [timeLimit, setTimeLimit] = useState(currentQuiz?.time_limit_minutes || 15);
  const [isSaved, setIsSaved] = useState(false);

  // Sample questions
  const [questions, setQuestions] = useState<QuestionDraft[]>([
    {
      id: 'q1',
      question_text: 'Berapa rasio seduh ideal (coffee-to-water) standar SCA untuk manual brew pour-over?',
      question_type: 'multiple_choice',
      answers: [
        { id: 'a1', answer_text: '1:10 hingga 1:12', is_correct: false },
        { id: 'a2', answer_text: '1:15 hingga 1:17 (Golden Cup Standard)', is_correct: true },
        { id: 'a3', answer_text: '1:20 hingga 1:25', is_correct: false },
        { id: 'a4', answer_text: '1:5 hingga 1:8', is_correct: false },
      ],
      explanation: 'SCA Golden Cup Standard merekomendasikan 55g/L ± 10%, yang setara dengan rasio sekitar 1:15 hingga 1:18.',
    },
    {
      id: 'q2',
      question_text: 'Spesies kopi Coffea Canephora (Robusta) memiliki kandungan kafein hampir dua kali lipat dibanding Coffea Arabica.',
      question_type: 'true_false',
      answers: [
        { id: 'tf1', answer_text: 'Benar', is_correct: true },
        { id: 'tf2', answer_text: 'Salah', is_correct: false },
      ],
      explanation: 'Robusta memiliki kadar kafein sekitar 2.2% - 2.7%, sedangkan Arabica rata-rata hanya 1.2% - 1.5%.',
    },
  ]);

  const addQuestion = (type: 'multiple_choice' | 'true_false') => {
    const newQ: QuestionDraft = {
      id: Math.random().toString(36).slice(2),
      question_text: '',
      question_type: type,
      answers:
        type === 'true_false'
          ? [
              { id: Math.random().toString(36).slice(2), answer_text: 'Benar', is_correct: true },
              { id: Math.random().toString(36).slice(2), answer_text: 'Salah', is_correct: false },
            ]
          : [
              { id: Math.random().toString(36).slice(2), answer_text: 'Opsi A', is_correct: true },
              { id: Math.random().toString(36).slice(2), answer_text: 'Opsi B', is_correct: false },
              { id: Math.random().toString(36).slice(2), answer_text: 'Opsi C', is_correct: false },
              { id: Math.random().toString(36).slice(2), answer_text: 'Opsi D', is_correct: false },
            ],
      explanation: '',
    };
    setQuestions([...questions, newQ]);
  };

  const updateQuestionText = (id: string, text: string) => {
    setQuestions(questions.map((q) => (q.id === id ? { ...q, question_text: text } : q)));
  };

  const setCorrectAnswer = (qId: string, aId: string) => {
    setQuestions(
      questions.map((q) => {
        if (q.id !== qId) return q;
        return {
          ...q,
          answers: q.answers.map((a) => ({ ...a, is_correct: a.id === aId })),
        };
      })
    );
  };

  const updateAnswerText = (qId: string, aId: string, text: string) => {
    setQuestions(
      questions.map((q) => {
        if (q.id !== qId) return q;
        return {
          ...q,
          answers: q.answers.map((a) => (a.id === aId ? { ...a, answer_text: text } : a)),
        };
      })
    );
  };

  const deleteQuestion = (id: string) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  const handleSave = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif font-black text-2xl text-roast-950">Quiz Builder</h1>
          <p className="text-sm text-roast-500 mt-0.5">
            Buat dan kelola bank soal ujian, passing score, dan kunci jawaban
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleSave}
            className={`flex items-center gap-1.5 px-4 py-2 text-xs font-mono rounded-lg font-bold transition-all ${
              isSaved
                ? 'bg-emerald-600 text-white'
                : 'bg-roast-950 hover:bg-roast-900 text-paper-50'
            }`}
          >
            <Save className="w-3.5 h-3.5" />
            {isSaved ? '✓ Tersimpan!' : 'Simpan Quiz'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Quiz Selector & Settings */}
        <div className="lg:col-span-4 space-y-5">
          {/* Path filter */}
          <div className="bg-white rounded-xl border border-paper-200 p-4 space-y-3">
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
              <label className="block font-mono text-[10px] uppercase tracking-wider text-roast-400 font-bold mb-2">
                Daftar Quiz ({availableQuizzes.length})
              </label>
              <div className="space-y-1">
                {availableQuizzes.map((q) => (
                  <button
                    key={q.id}
                    onClick={() => {
                      setSelectedQuizId(q.id);
                      setTitle(q.title);
                      setPassingScore(q.passing_score);
                      setTimeLimit(q.time_limit_minutes);
                    }}
                    className={`w-full text-left p-2.5 rounded-lg text-xs transition-colors flex items-center justify-between ${
                      selectedQuizId === q.id
                        ? 'bg-cherry-50 text-cherry-900 font-bold border border-cherry-200'
                        : 'text-roast-700 hover:bg-paper-50 border border-transparent'
                    }`}
                  >
                    <span className="truncate">{q.title}</span>
                    <span className="font-mono text-[10px] text-roast-400 shrink-0 ml-2">
                      {q.passing_score}%
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Quiz Parameters */}
          <div className="bg-white rounded-xl border border-paper-200 p-5 space-y-4">
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
                className="w-full text-xs border border-paper-200 rounded-lg p-2.5 focus:outline-none focus:border-roast-400"
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
                    min="50"
                    max="100"
                    value={passingScore}
                    onChange={(e) => setPassingScore(Number(e.target.value))}
                    className="w-full text-xs font-mono bg-transparent border-none outline-none font-bold"
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
                    min="5"
                    max="120"
                    value={timeLimit}
                    onChange={(e) => setTimeLimit(Number(e.target.value))}
                    className="w-full text-xs font-mono bg-transparent border-none outline-none font-bold"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Questions Editor */}
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-mono text-[11px] uppercase tracking-widest text-roast-400 font-bold">
              Daftar Pertanyaan ({questions.length})
            </h3>
            <div className="flex items-center gap-2">
              <button
                onClick={() => addQuestion('multiple_choice')}
                className="flex items-center gap-1 px-3 py-1.5 bg-paper-100 hover:bg-paper-200 border border-paper-300 rounded-lg text-xs font-mono text-roast-700 transition-colors"
              >
                <Plus className="w-3 h-3" />
                Pilihan Ganda
              </button>
              <button
                onClick={() => addQuestion('true_false')}
                className="flex items-center gap-1 px-3 py-1.5 bg-paper-100 hover:bg-paper-200 border border-paper-300 rounded-lg text-xs font-mono text-roast-700 transition-colors"
              >
                <Plus className="w-3 h-3" />
                True / False
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {questions.map((q, qIndex) => (
              <div
                key={q.id}
                className="bg-white rounded-xl border border-paper-200 p-5 space-y-4 hover:border-roast-300 transition-colors"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-roast-950 text-paper-50 font-mono text-xs flex items-center justify-center font-bold">
                      {qIndex + 1}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 bg-paper-100 border border-paper-200 rounded font-bold text-roast-500">
                      {q.question_type === 'multiple_choice' ? 'Pilihan Ganda' : 'Benar / Salah'}
                    </span>
                  </div>
                  <button
                    onClick={() => deleteQuestion(q.id)}
                    className="p-1 text-roast-300 hover:text-rose-600 rounded transition-colors"
                    title="Hapus Soal"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
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
                    className="w-full text-xs text-roast-900 border border-paper-200 rounded-lg p-2.5 focus:outline-none focus:border-roast-400 resize-none"
                  />
                </div>

                {/* Answers */}
                <div className="space-y-2">
                  <label className="block font-mono text-[9px] uppercase tracking-wider text-roast-400 font-bold">
                    Pilihan Jawaban (Pilih radio button untuk jawaban yang benar)
                  </label>
                  {q.answers.map((ans, aIndex) => (
                    <div
                      key={ans.id}
                      className={`flex items-center gap-2.5 p-2 rounded-lg border transition-colors ${
                        ans.is_correct
                          ? 'bg-emerald-50/70 border-emerald-300'
                          : 'bg-paper-50 border-paper-200'
                      }`}
                    >
                      <input
                        type="radio"
                        name={`correct-${q.id}`}
                        checked={ans.is_correct}
                        onChange={() => setCorrectAnswer(q.id, ans.id)}
                        className="accent-emerald-600 w-4 h-4 cursor-pointer shrink-0"
                      />
                      <span className="font-mono text-xs text-roast-400 w-4 shrink-0">
                        {String.fromCharCode(65 + aIndex)}.
                      </span>
                      <input
                        value={ans.answer_text}
                        onChange={(e) => updateAnswerText(q.id, ans.id, e.target.value)}
                        className="flex-1 text-xs bg-transparent border-none outline-none text-roast-900 placeholder:text-roast-300"
                        placeholder={`Teks jawaban ${String.fromCharCode(65 + aIndex)}...`}
                      />
                      {ans.is_correct && (
                        <span className="font-mono text-[9px] text-emerald-700 font-bold uppercase tracking-wider px-1.5 py-0.5 bg-emerald-100 rounded shrink-0">
                          Benar
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Explanation */}
                <div>
                  <label className="block font-mono text-[9px] uppercase tracking-wider text-roast-400 font-bold mb-1">
                    Penjelasan Kunci Jawaban (Muncul setelah user selesai ujian)
                  </label>
                  <input
                    value={q.explanation || ''}
                    onChange={(e) => {
                      const val = e.target.value;
                      setQuestions(
                        questions.map((item) => (item.id === q.id ? { ...item, explanation: val } : item))
                      );
                    }}
                    placeholder="Contoh: Menurut standar SCA..."
                    className="w-full text-xs text-roast-600 border border-paper-200 rounded-lg p-2 bg-paper-50 focus:outline-none focus:border-roast-400"
                  />
                </div>
              </div>
            ))}

            {questions.length === 0 && (
              <div className="bg-white border border-dashed border-paper-300 rounded-xl p-12 text-center text-roast-400">
                <HelpCircle className="w-10 h-10 mx-auto mb-3 opacity-30" />
                <p className="text-sm font-mono">Belum ada pertanyaan</p>
                <p className="text-xs text-roast-400 mt-1">
                  Klik tombol di atas untuk menambah pertanyaan pilihan ganda atau true/false.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
