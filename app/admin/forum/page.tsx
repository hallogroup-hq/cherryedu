'use client';

import { useState } from "react";
import { useCherryEdu } from '@/lib/store';
import { Pin, Trash2, Search } from "lucide-react";

export default function ForumAdminPage() {
  const { posts, comments } = useCherryEdu();
  const [search, setSearch] = useState('');
  const [tab, setTab] = useState<'posts' | 'comments'>('posts');

  const filteredPosts = posts.filter((p) => {
    if (!search.trim()) return true;
    return p.title.toLowerCase().includes(search.toLowerCase()) || p.content.toLowerCase().includes(search.toLowerCase());
  });

  const categoryColors: Record<string, string> = {
    barista: 'bg-roast-100 text-roast-700',
    home_brewer: 'bg-crema-100 text-crema-700',
    roasting: 'bg-amber-100 text-amber-700',
    general: 'bg-paper-100 text-roast-500',
    processing: 'bg-emerald-100 text-emerald-700',
    agronomy: 'bg-green-100 text-green-700',
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div>
        <h1 className="font-serif font-black text-2xl text-roast-950">Moderasi Forum</h1>
        <p className="text-sm text-roast-500 mt-0.5">{posts.length} postingan · {comments.length} komentar</p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 border-b border-paper-200">
        {[{ id: 'posts', label: `Postingan (${posts.length})` }, { id: 'comments', label: `Komentar (${comments.length})` }].map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id as 'posts' | 'comments')}
            className={`px-4 py-2 font-mono text-xs uppercase tracking-wider font-bold border-b-2 transition-colors ${tab === t.id ? 'border-roast-950 text-roast-950' : 'border-transparent text-roast-400 hover:text-roast-700'}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-paper-200">
        <div className="p-4 border-b border-paper-100">
          <div className="relative max-w-xs">
            <Search className="w-3.5 h-3.5 text-roast-400 absolute left-3 top-2.5" />
            <input value={search} onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari postingan..." className="w-full pl-9 pr-3 py-2 text-xs border border-paper-200 rounded-lg focus:outline-none focus:border-roast-400" />
          </div>
        </div>

        {tab === 'posts' ? (
          <div className="divide-y divide-paper-50">
            {filteredPosts.map((post) => (
              <div key={post.id} className="p-4 hover:bg-paper-50 transition-colors flex items-start gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    {post.is_pinned && <Pin className="w-3 h-3 text-cherry-700 fill-cherry-700" />}
                    <span className={`font-mono text-[9px] px-1.5 py-0.5 rounded uppercase font-bold ${categoryColors[post.category] || 'bg-paper-100 text-roast-500'}`}>
                      {post.category}
                    </span>
                    <span className="font-mono text-[10px] text-roast-400">
                      {post.author_name} · {new Date(post.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}
                    </span>
                  </div>
                  <h4 className="font-semibold text-sm text-roast-950 mb-0.5">{post.title}</h4>
                  <p className="text-xs text-roast-500 line-clamp-2">{post.content}</p>
                  <div className="flex items-center gap-3 mt-1 font-mono text-[10px] text-roast-400">
                    <span>❤ {post.likes_count}</span>
                    <span>💬 {post.comments_count}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <button className="p-1.5 rounded hover:bg-paper-200 text-roast-400 hover:text-roast-700 transition-colors" title="Pin postingan">
                    <Pin className="w-3.5 h-3.5" />
                  </button>
                  <button className="p-1.5 rounded hover:bg-rose-50 text-roast-300 hover:text-rose-600 transition-colors" title="Hapus postingan">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="divide-y divide-paper-50">
            {comments.map((c) => (
              <div key={c.id} className="p-4 hover:bg-paper-50 transition-colors flex items-start gap-3">
                <div className="flex-1 min-w-0">
                  <span className="font-mono text-[10px] text-roast-400">
                    {c.author_name} · {new Date(c.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}
                  </span>
                  <p className="text-xs text-roast-700 mt-0.5 line-clamp-2">{c.content}</p>
                </div>
                <button className="p-1.5 rounded hover:bg-rose-50 text-roast-300 hover:text-rose-600 transition-colors shrink-0">
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
