'use client';

import React, { useMemo } from 'react';
import { useCherryEdu } from '@/lib/store';
import {
  TrendingUp,
  Users,
  BookOpen,
  Award,
  BarChart3,
  Clock,
  ChevronUp,
  ChevronDown,
  ArrowRight,
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
  Legend,
} from 'recharts';

export default function AnalyticsPage() {
  const { users, lessons, learningPaths, certificates, quizAttempts, modules } = useCherryEdu();

  const totalStudents = users.filter((u) => u.role === 'learner' || u.role === 'expert').length;
  const passedQuizzes = quizAttempts.filter((a) => a.passed).length;
  const passRate = quizAttempts.length > 0 ? Math.round((passedQuizzes / quizAttempts.length) * 100) : 0;
  const avgXP = users.length > 0 ? Math.round(users.reduce((s, u) => s + u.xp_points, 0) / users.length) : 0;

  // Mock weekly registrations
  const weeklyData = [
    { week: 'Mg 1', users: 12, completions: 4 },
    { week: 'Mg 2', users: 19, completions: 8 },
    { week: 'Mg 3', users: 15, completions: 11 },
    { week: 'Mg 4', users: 28, completions: 14 },
    { week: 'Mg 5', users: 23, completions: 18 },
    { week: 'Mg 6', users: 35, completions: 22 },
  ];

  // Coffee role distribution
  const roleData = [
    { name: 'Barista', value: users.filter((u) => u.coffee_role === 'barista').length, color: '#2C1810' },
    { name: 'Home Brewer', value: users.filter((u) => u.coffee_role === 'home_brewer').length, color: '#8B4513' },
    { name: 'Roaster', value: users.filter((u) => u.coffee_role === 'roaster').length, color: '#D4A017' },
    { name: 'Q Grader', value: users.filter((u) => u.coffee_role === 'q_grader').length, color: '#C0392B' },
    { name: 'Lainnya', value: users.filter((u) => !['barista','home_brewer','roaster','q_grader'].includes(u.coffee_role)).length, color: '#BDC3C7' },
  ].filter((d) => d.value > 0);

  // Path completion mock data
  const pathCompletionData = learningPaths.slice(0, 5).map((p, i) => ({
    name: p.title.split(' ').slice(0, 3).join(' '),
    rate: Math.max(20, 90 - i * 15),
  }));

  // Top lessons
  const topLessons = lessons.slice(0, 5).map((l, i) => ({
    title: l.title,
    completions: Math.max(10, 80 - i * 12),
    dropoff: Math.max(5, 20 - i * 3),
  }));

  const kpis = [
    { label: 'Total Pelajar', value: totalStudents, icon: Users, trend: '+8%', up: true, note: 'vs bulan lalu' },
    { label: 'Sertifikat Terbit', value: certificates.length, icon: Award, trend: '+23%', up: true, note: 'vs bulan lalu' },
    { label: 'Quiz Pass Rate', value: `${passRate}%`, icon: TrendingUp, trend: '-2%', up: false, note: 'vs bulan lalu' },
    { label: 'Rata-rata XP', value: avgXP, icon: BarChart3, trend: '+15%', up: true, note: 'per user aktif' },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif font-black text-2xl text-roast-950">Analytics</h1>
          <p className="text-sm text-roast-500 mt-0.5">Performa platform CherryEdu</p>
        </div>
        <div className="flex items-center gap-2">
          <select className="text-xs font-mono border border-paper-200 rounded-lg px-3 py-2 text-roast-600">
            <option>30 hari terakhir</option>
            <option>7 hari terakhir</option>
            <option>3 bulan terakhir</option>
          </select>
          <button className="px-3 py-2 text-xs font-mono border border-paper-200 rounded-lg text-roast-600 hover:border-roast-400 transition-colors">
            Export CSV
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi) => {
          const Icon = kpi.icon;
          return (
            <div key={kpi.label} className="bg-white border border-paper-200 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <Icon className="w-4 h-4 text-roast-400" />
                <span className={`flex items-center gap-0.5 font-mono text-[10px] font-bold ${kpi.up ? 'text-emerald-600' : 'text-rose-600'}`}>
                  {kpi.up ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                  {kpi.trend}
                </span>
              </div>
              <p className="font-serif font-black text-2xl text-roast-950">{kpi.value}</p>
              <p className="font-mono text-[10px] uppercase tracking-wider text-roast-400 font-bold mt-0.5">{kpi.label}</p>
              <p className="text-[10px] text-roast-300 mt-0.5">{kpi.note}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Trend Chart */}
        <div className="lg:col-span-2 bg-white border border-paper-200 rounded-xl p-5">
          <h3 className="font-mono text-[11px] uppercase tracking-widest text-roast-400 font-bold mb-4">
            Tren Registrasi & Lesson Selesai (6 minggu)
          </h3>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F0EDE8" />
              <XAxis dataKey="week" tick={{ fontSize: 10, fontFamily: 'monospace' }} />
              <YAxis tick={{ fontSize: 10, fontFamily: 'monospace' }} />
              <Tooltip
                contentStyle={{ fontSize: 11, fontFamily: 'monospace', border: '1px solid #E8E4DC', borderRadius: 8 }}
              />
              <Legend wrapperStyle={{ fontSize: 10, fontFamily: 'monospace' }} />
              <Line type="monotone" dataKey="users" stroke="#2C1810" strokeWidth={2} name="User Baru" dot={false} />
              <Line type="monotone" dataKey="completions" stroke="#C0392B" strokeWidth={2} name="Lesson Selesai" dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Role Distribution */}
        <div className="bg-white border border-paper-200 rounded-xl p-5">
          <h3 className="font-mono text-[11px] uppercase tracking-widest text-roast-400 font-bold mb-4">
            Distribusi Peran User
          </h3>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie
                data={roleData}
                cx="50%"
                cy="50%"
                innerRadius={45}
                outerRadius={75}
                paddingAngle={3}
                dataKey="value"
              >
                {roleData.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ fontSize: 11, fontFamily: 'monospace' }} />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-1.5 mt-2">
            {roleData.map((r) => (
              <div key={r.name} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: r.color }} />
                  <span className="text-roast-700">{r.name}</span>
                </div>
                <span className="font-mono font-bold text-roast-950">{r.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Path Completion Rates */}
        <div className="bg-white border border-paper-200 rounded-xl p-5">
          <h3 className="font-mono text-[11px] uppercase tracking-widest text-roast-400 font-bold mb-4">
            Completion Rate per Learning Path
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={pathCompletionData} layout="vertical">
              <XAxis type="number" tick={{ fontSize: 10, fontFamily: 'monospace' }} domain={[0, 100]} tickFormatter={(v) => `${v}%`} />
              <YAxis type="category" dataKey="name" tick={{ fontSize: 9, fontFamily: 'monospace' }} width={100} />
              <Tooltip contentStyle={{ fontSize: 11, fontFamily: 'monospace' }} formatter={(v) => `${v}%`} />
              <Bar dataKey="rate" fill="#2C1810" radius={[0, 4, 4, 0]} name="Completion Rate" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Top Lessons Table */}
        <div className="bg-white border border-paper-200 rounded-xl p-5">
          <h3 className="font-mono text-[11px] uppercase tracking-widest text-roast-400 font-bold mb-4">
            Lesson Terpopuler
          </h3>
          <div className="space-y-3">
            {topLessons.map((lesson, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="font-mono text-[10px] text-roast-300 w-4 shrink-0">{idx + 1}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-roast-900 truncate">{lesson.title}</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <div className="flex-1 bg-paper-100 rounded-full h-1.5">
                      <div
                        className="bg-roast-800 h-1.5 rounded-full"
                        style={{ width: `${lesson.completions}%` }}
                      />
                    </div>
                    <span className="font-mono text-[10px] text-roast-400 shrink-0">{lesson.completions}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
