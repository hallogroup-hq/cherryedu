'use client';

import { useState } from "react";
import { Plus, Edit2, Trash2, Users2 } from "lucide-react";

interface Collaborator {
  id: string;
  name: string;
  slug: string;
  bio: string;
  photo_url: string;
  achievements: string[];
  instagram?: string;
  website?: string;
  is_active: boolean;
}

const SAMPLE_COLLABORATORS: Collaborator[] = [
  {
    id: '1',
    name: 'Fahrul M.W',
    slug: 'fahrul-mw',
    bio: 'Q Grader & Head Roaster di Cherry Coffee Roastery. Berpengalaman lebih dari 10 tahun di industri specialty coffee Indonesia.',
    photo_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
    achievements: ['WBC Regional Finalist 2024', 'Q Grader SCA Certified', 'Head Roaster Cherry Roastery'],
    instagram: '@fahrul.mw',
    website: 'cherryroastery.id',
    is_active: true,
  },
];

export default function CollaboratorsAdminPage() {
  const [collaborators, setCollaborators] = useState<Collaborator[]>(SAMPLE_COLLABORATORS);
  const [isAdding, setIsAdding] = useState(false);
  const [editTarget, setEditTarget] = useState<Collaborator | null>(null);
  const [form, setForm] = useState<Partial<Collaborator>>({
    name: '', slug: '', bio: '', photo_url: '', achievements: [], instagram: '', website: '', is_active: true,
  });
  const [achievementInput, setAchievementInput] = useState('');

  const handleSave = () => {
    if (editTarget) {
      setCollaborators((prev) => prev.map((c) => c.id === editTarget.id ? { ...editTarget, ...form } as Collaborator : c));
    } else {
      const newCollab: Collaborator = {
        id: Math.random().toString(36).slice(2),
        name: form.name || '',
        slug: (form.name || '').toLowerCase().replace(/\s+/g, '-'),
        bio: form.bio || '',
        photo_url: form.photo_url || '',
        achievements: form.achievements || [],
        instagram: form.instagram,
        website: form.website,
        is_active: form.is_active ?? true,
      };
      setCollaborators((prev) => [...prev, newCollab]);
    }
    setIsAdding(false);
    setEditTarget(null);
    setForm({ name: '', slug: '', bio: '', photo_url: '', achievements: [], instagram: '', website: '', is_active: true });
  };

  const startEdit = (c: Collaborator) => {
    setEditTarget(c);
    setForm(c);
    setIsAdding(true);
  };

  const addAchievement = () => {
    if (achievementInput.trim()) {
      setForm((f) => ({ ...f, achievements: [...(f.achievements || []), achievementInput.trim()] }));
      setAchievementInput('');
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-serif font-black text-2xl text-roast-950">Kolaborator</h1>
          <p className="text-sm text-roast-500 mt-0.5">Barista champion, Q-Grader, dan instruktur tamu</p>
        </div>
        <button
          onClick={() => { setIsAdding(true); setEditTarget(null); setForm({ name: '', bio: '', photo_url: '', achievements: [], is_active: true }); }}
          className="flex items-center gap-2 px-4 py-2 bg-roast-950 text-paper-50 rounded-lg font-mono text-xs uppercase tracking-wider font-bold hover:bg-roast-900 transition-colors"
        >
          <Plus className="w-3.5 h-3.5" />
          Tambah Kolaborator
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Collaborator Cards */}
        <div className={`${isAdding ? 'lg:col-span-7' : 'lg:col-span-12'}`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {collaborators.map((c) => (
              <div key={c.id} className="bg-white border border-paper-200 rounded-xl overflow-hidden hover:border-roast-300 transition-colors">
                <div className="h-32 bg-gradient-to-br from-roast-900 to-roast-700 relative">
                  <img
                    src={c.photo_url}
                    alt={c.name}
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute top-2 right-2">
                    <span className={`font-mono text-[9px] px-1.5 py-0.5 rounded font-bold ${c.is_active ? 'bg-emerald-500 text-white' : 'bg-roast-400 text-white'}`}>
                      {c.is_active ? 'AKTIF' : 'INAKTIF'}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-roast-950">{c.name}</h3>
                  <p className="text-xs text-roast-500 mt-1 line-clamp-2">{c.bio}</p>

                  {c.achievements.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1">
                      {c.achievements.slice(0, 2).map((a, i) => (
                        <span key={i} className="font-mono text-[9px] px-1.5 py-0.5 bg-paper-100 border border-paper-200 rounded text-roast-500">
                          {a}
                        </span>
                      ))}
                      {c.achievements.length > 2 && (
                        <span className="font-mono text-[9px] text-roast-400">+{c.achievements.length - 2}</span>
                      )}
                    </div>
                  )}

                  <div className="mt-3 pt-3 border-t border-paper-100 flex items-center gap-2">
                    <a
                      href={`/collaborators/${c.slug}`}
                      target="_blank"
                      className="text-[10px] text-cherry-700 font-mono hover:underline"
                    >
                      Lihat Profil Publik →
                    </a>
                    <div className="ml-auto flex items-center gap-1">
                      <button onClick={() => startEdit(c)} className="p-1.5 rounded hover:bg-paper-100 text-roast-400 hover:text-roast-700 transition-colors">
                        <Edit2 className="w-3 h-3" />
                      </button>
                      <button onClick={() => setCollaborators((prev) => prev.filter((x) => x.id !== c.id))} className="p-1.5 rounded hover:bg-rose-50 text-roast-300 hover:text-rose-600 transition-colors">
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {collaborators.length === 0 && (
              <div className="sm:col-span-2 lg:col-span-3 bg-white border border-dashed border-paper-300 rounded-xl p-12 text-center text-roast-400">
                <Users2 className="w-10 h-10 mx-auto mb-3 opacity-30" />
                <p className="text-sm font-mono">Belum ada kolaborator</p>
              </div>
            )}
          </div>
        </div>

        {/* Add/Edit Form Panel */}
        {isAdding && (
          <div className="lg:col-span-5 bg-white rounded-xl border border-paper-200 p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-mono text-[11px] uppercase tracking-widest text-roast-400 font-bold">
                {editTarget ? 'Edit Kolaborator' : 'Tambah Kolaborator'}
              </h3>
              <button onClick={() => { setIsAdding(false); setEditTarget(null); }} className="text-roast-300 hover:text-roast-700 text-xs">✕</button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-wider text-roast-500 font-bold mb-1">Nama Lengkap</label>
                <input value={form.name || ''} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="w-full border border-paper-200 rounded-lg px-3 py-2 focus:outline-none focus:border-roast-400" placeholder="Contoh: Budi Santoso" />
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-wider text-roast-500 font-bold mb-1">Foto (URL)</label>
                <input value={form.photo_url || ''} onChange={(e) => setForm((f) => ({ ...f, photo_url: e.target.value }))}
                  className="w-full border border-paper-200 rounded-lg px-3 py-2 focus:outline-none focus:border-roast-400" placeholder="https://..." />
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-wider text-roast-500 font-bold mb-1">Bio</label>
                <textarea value={form.bio || ''} onChange={(e) => setForm((f) => ({ ...f, bio: e.target.value }))}
                  rows={3} className="w-full border border-paper-200 rounded-lg px-3 py-2 focus:outline-none focus:border-roast-400 resize-none" placeholder="Deskripsi singkat..." />
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-wider text-roast-500 font-bold mb-1">Pencapaian</label>
                <div className="flex gap-2 mb-2">
                  <input value={achievementInput} onChange={(e) => setAchievementInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && addAchievement()}
                    className="flex-1 border border-paper-200 rounded-lg px-3 py-2 focus:outline-none focus:border-roast-400" placeholder="Tambah pencapaian..." />
                  <button onClick={addAchievement} className="px-3 py-2 bg-paper-100 border border-paper-200 rounded-lg hover:bg-paper-200 transition-colors">+</button>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {(form.achievements || []).map((a, i) => (
                    <span key={i} className="flex items-center gap-1 font-mono text-[9px] px-2 py-1 bg-paper-100 border border-paper-200 rounded text-roast-600">
                      {a}
                      <button onClick={() => setForm((f) => ({ ...f, achievements: (f.achievements || []).filter((_, j) => j !== i) }))} className="text-roast-300 hover:text-rose-600">✕</button>
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-roast-500 font-bold mb-1">Instagram</label>
                  <input value={form.instagram || ''} onChange={(e) => setForm((f) => ({ ...f, instagram: e.target.value }))}
                    className="w-full border border-paper-200 rounded-lg px-3 py-2 focus:outline-none focus:border-roast-400" placeholder="@username" />
                </div>
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-roast-500 font-bold mb-1">Website</label>
                  <input value={form.website || ''} onChange={(e) => setForm((f) => ({ ...f, website: e.target.value }))}
                    className="w-full border border-paper-200 rounded-lg px-3 py-2 focus:outline-none focus:border-roast-400" placeholder="domain.com" />
                </div>
              </div>

              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={form.is_active ?? true} onChange={(e) => setForm((f) => ({ ...f, is_active: e.target.checked }))} className="accent-roast-950" />
                <span className="text-roast-700">Kolaborator aktif (tampil di platform)</span>
              </label>

              <button onClick={handleSave} className="w-full py-2.5 bg-roast-950 hover:bg-roast-900 text-paper-50 rounded-lg font-mono text-xs uppercase tracking-wider font-bold transition-colors">
                {editTarget ? 'Simpan Perubahan' : 'Tambah Kolaborator'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
