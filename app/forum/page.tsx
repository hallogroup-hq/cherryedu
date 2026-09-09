'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCherryEdu } from '@/lib/store';
import { ForumCategory } from '@/lib/types';
import {
  MessageSquare,
  ThumbsUp,
  Award,
  Sparkles,
  Plus,
  Send,
  Pin,
  Coffee,
  CheckCircle2,
  X,
} from 'lucide-react';

const CATEGORIES: { id: ForumCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'Semua Wacana' },
  { id: 'barista', label: 'Barista & Bar' },
  { id: 'home_brewer', label: 'Home Brewer' },
  { id: 'processing', label: 'Pasca Panen' },
  { id: 'agronomy', label: 'Agronomi Kebun' },
  { id: 'roasting', label: 'Roasting Science' },
  { id: 'general', label: 'Umum & Teori' },
];

export default function ForumPage() {
  const router = useRouter();
  const {
    currentUser,
    isAuthenticated,
    posts,
    comments,
    createPost,
    createComment,
    toggleLike,
    isLiked,
  } = useCherryEdu();

  const [activeCategory, setActiveCategory] = useState<ForumCategory | 'all'>('all');
  const [isNewPostOpen, setIsNewPostOpen] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState<string>('');
  const [newContent, setNewContent] = useState<string>('');
  const [newCategory, setNewCategory] = useState<ForumCategory>('barista');

  // Comment input per post
  const [commentInputs, setCommentInputs] = useState<Record<string, string>>({});
  const [activeCommentPostId, setActiveCommentPostId] = useState<string | null>(null);

  const filteredPosts = posts.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;

    createPost(newTitle, newContent, newCategory);
    setNewTitle('');
    setNewContent('');
    setIsNewPostOpen(false);
  };

  const handleAddComment = (postId: string) => {
    if (!isAuthenticated) {
      router.push('/login?redirect=/forum');
      return;
    }
    const text = commentInputs[postId];
    if (!text || !text.trim()) return;

    createComment(postId, text);
    setCommentInputs((prev) => ({ ...prev, [postId]: '' }));
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Header Ledger */}
      <div className="border-b border-paper-300 pb-8 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-[10px] tracking-widest text-cherry-700 font-semibold uppercase bg-cherry-50 px-2 py-0.5 border border-cherry-200">
                [ VOL. 04 — FORUM KALIBRASI & WACANA ]
              </span>
              <span className="font-mono text-[10px] text-roast-500 uppercase">
                RUANG DISKUSI TERBUKA HULU-HILIR
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-roast-950 tracking-tight">
              Forum Kalibrasi & Pertukaran Wawasan
            </h1>
            <p className="mt-3 text-xs sm:text-sm text-roast-700 max-w-2xl leading-relaxed">
              Diskusikan sains ekstraksi bar, agronomi kebun, kimia sangrai, hingga dial-in espresso.
              Setiap tanggapan berbobot ditinjau langsung oleh kurator bersertifikasi Q-Grader & Master Roaster.
            </p>
          </div>

          <button
            onClick={() => {
              if (!isAuthenticated) {
                router.push('/login?redirect=/forum');
                return;
              }
              setIsNewPostOpen(!isNewPostOpen);
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-roast-950 hover:bg-cherry-800 text-paper-50 text-xs font-mono tracking-wider uppercase transition-colors shrink-0 self-start sm:self-auto shadow-xs border border-roast-900"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>{isNewPostOpen ? 'Tutup Formulir' : 'Tulis Wacana Baru [+15 XP]'}</span>
          </button>
        </div>
      </div>

      {/* New Post Modal / Accordion Form */}
      {isNewPostOpen && (
        <form
          onSubmit={handleCreatePost}
          className="mb-10 p-6 sm:p-8 bg-paper-100/90 border border-paper-400 shadow-warm space-y-5 animate-fadeIn"
        >
          <div className="flex justify-between items-center pb-3 border-b border-paper-300">
            <div>
              <span className="font-mono text-[10px] uppercase text-cherry-700 tracking-wider block font-semibold">
                [ ENTRY BARU ]
              </span>
              <h3 className="font-serif text-lg font-bold text-roast-950">
                Terbitkan Topik Kalibrasi / Pertanyaan
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono text-roast-600 hidden sm:inline">
                Penulis: <strong className="text-roast-950">{currentUser.name}</strong> ({currentUser.role})
              </span>
              <button
                type="button"
                onClick={() => setIsNewPostOpen(false)}
                className="p-1 text-roast-400 hover:text-roast-900"
                aria-label="Tutup"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block font-mono text-[10px] uppercase tracking-wider text-roast-700 font-semibold mb-1.5">
                Kategori Wacana
              </label>
              <select
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value as ForumCategory)}
                className="w-full px-3 py-2 text-xs border border-paper-400 bg-paper-50 text-roast-900 font-sans focus:outline-hidden focus:border-roast-900"
              >
                <option value="barista">Barista & Bar SOP</option>
                <option value="home_brewer">Home Brewer & Pour Over</option>
                <option value="processing">Pasca Panen (Processing)</option>
                <option value="agronomy">Agronomi & Ekologi Kebun</option>
                <option value="roasting">Roasting Science</option>
                <option value="general">Umum & Filsafat Kopi</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="block font-mono text-[10px] uppercase tracking-wider text-roast-700 font-semibold mb-1.5">
                Judul Wacana / Permasalahan
              </label>
              <input
                type="text"
                required
                placeholder="Contoh: Analisis Channelling Espresso pada Portafilter 58mm dengan Roasting Light-to-Medium"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="w-full px-3.5 py-2 text-xs border border-paper-400 bg-paper-50 text-roast-900 placeholder:text-roast-400 focus:outline-hidden focus:border-roast-900"
              />
            </div>
          </div>

          <div>
            <label className="block font-mono text-[10px] uppercase tracking-wider text-roast-700 font-semibold mb-1.5">
              Uraian Narasi & Rincian Eksperimen (Resep, Origin, Suhu, Gejala Rasa)
            </label>
            <textarea
              required
              rows={4}
              placeholder="Jelaskan rasio seduh, grind size, TDS air yang Anda gunakan, dan anomali sensori yang dialami di cangkir..."
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              className="w-full px-3.5 py-2.5 text-xs border border-paper-400 bg-paper-50 text-roast-900 placeholder:text-roast-400 focus:outline-hidden focus:border-roast-900 font-sans leading-relaxed"
            />
          </div>

          <div className="flex justify-end gap-3 pt-2 border-t border-paper-300">
            <button
              type="button"
              onClick={() => setIsNewPostOpen(false)}
              className="px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-roast-600 hover:text-roast-950"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-5 py-2 font-mono text-[11px] uppercase tracking-wider bg-cherry-700 hover:bg-cherry-800 text-paper-50 font-bold transition-colors"
            >
              Terbitkan Wacana [+15 XP]
            </button>
          </div>
        </form>
      )}

      {/* Category Pills Bar */}
      <div className="flex gap-2 overflow-x-auto pb-3 mb-8 border-b border-paper-300 scrollbar-none">
        {CATEGORIES.map((cat) => {
          const isActive = cat.id === activeCategory;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 font-mono text-xs uppercase tracking-wider whitespace-nowrap transition-all border ${
                isActive
                  ? 'bg-roast-950 text-paper-50 border-roast-950 font-bold'
                  : 'bg-paper-50 text-roast-700 border-paper-300 hover:border-roast-700'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Posts Stream */}
      <div className="space-y-6">
        {filteredPosts.map((post) => {
          const postComments = comments.filter((c) => c.post_id === post.id);
          const liked = isLiked(post.id);
          const isCommenting = activeCommentPostId === post.id;

          return (
            <article
              key={post.id}
              className="bg-paper-50 border border-paper-300 p-6 sm:p-8 hover:border-roast-900/40 transition-all relative"
            >
              {/* Post Meta Strip */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-paper-200">
                <div className="flex items-center gap-3">
                  <img
                    src={post.author_avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100'}
                    alt={post.author_name}
                    className="w-10 h-10 object-cover border border-paper-400 filter grayscale contrast-125"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-serif font-bold text-sm text-roast-950">
                        {post.author_name}
                      </span>
                      {post.author_role === 'expert' ? (
                        <span className="font-mono text-[9px] uppercase tracking-widest px-1.5 py-0.5 bg-roast-950 text-crema-300 font-bold border border-roast-900">
                          [ Q-GRADER VERIFIED ]
                        </span>
                      ) : (
                        <span className="font-mono text-[9px] uppercase tracking-wider text-roast-500 bg-paper-200 px-1.5 py-0.5">
                          {post.author_coffee_role || 'Pembelajar'}
                        </span>
                      )}
                    </div>
                    <span className="font-mono text-[10px] text-roast-400 block mt-0.5">
                      {new Date(post.created_at).toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {post.is_pinned && (
                    <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase font-bold text-cherry-700 bg-cherry-50 px-2 py-0.5 border border-cherry-200">
                      <Pin className="w-3 h-3" /> DISEMATKAN
                    </span>
                  )}
                  <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 bg-paper-200 text-roast-700 border border-paper-300">
                    [ {post.category.replace('_', ' ')} ]
                  </span>
                </div>
              </div>

              {/* Title & Body */}
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-roast-950 mb-3 leading-snug tracking-tight">
                {post.title}
              </h2>
              <p className="font-sans text-xs sm:text-sm text-roast-800 leading-relaxed whitespace-pre-line mb-6">
                {post.content}
              </p>

              {/* Actions & Metrics */}
              <div className="flex items-center gap-4 pt-4 border-t border-paper-200 text-xs font-mono">
                <button
                  onClick={() => toggleLike(post.id, 'post')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 border transition-colors ${
                    liked
                      ? 'bg-cherry-50 border-cherry-300 text-cherry-700 font-bold'
                      : 'bg-paper-100 border-paper-300 text-roast-700 hover:border-roast-800'
                  }`}
                >
                  <ThumbsUp className={`w-3.5 h-3.5 ${liked ? 'fill-cherry-700' : ''}`} />
                  <span>{post.likes_count} Suka</span>
                </button>

                <button
                  onClick={() => setActiveCommentPostId(isCommenting ? null : post.id)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-paper-100 border border-paper-300 text-roast-700 hover:border-roast-800 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>{postComments.length} Tanggapan</span>
                </button>
              </div>

              {/* Comments / Responses Thread */}
              {postComments.length > 0 && (
                <div className="mt-6 pt-6 border-t border-paper-300/80 space-y-3">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-roast-500 font-semibold mb-2">
                    [ ARSIP TANGGAPAN & CATATAN KURATOR ]
                  </div>
                  {postComments.map((comm) => (
                    <div
                      key={comm.id}
                      className={`p-4 border transition-colors ${
                        comm.is_expert_answer
                          ? 'bg-crema-50/70 border-crema-400 border-l-4 border-l-crema-600'
                          : 'bg-paper-100/60 border-paper-300'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <img
                            src={comm.author_avatar || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100'}
                            alt={comm.author_name}
                            className="w-6 h-6 object-cover border border-paper-400"
                          />
                          <span className="font-serif font-bold text-xs text-roast-950">
                            {comm.author_name}
                          </span>

                          {comm.is_expert_answer && (
                            <span className="inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 bg-roast-950 text-crema-300 font-bold">
                              <Sparkles className="w-2.5 h-2.5 text-crema-300" />
                              VERIFIED EXPERT ANSWER
                            </span>
                          )}
                        </div>

                        <span className="font-mono text-[10px] text-roast-400">
                          {new Date(comm.created_at).toLocaleTimeString('id-ID', {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </span>
                      </div>

                      <p className="font-sans text-xs text-roast-800 leading-relaxed whitespace-pre-line pl-8">
                        {comm.content}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Add Comment Input */}
              <div className="mt-5 pt-4 border-t border-paper-200 flex gap-2">
                <input
                  type="text"
                  placeholder={
                    currentUser.role === 'expert'
                      ? 'Tulis tanggapan Q-Grader (akan tertera stempel Verified Expert)...'
                      : 'Tulis tanggapan atau analisis seduhan Anda...'
                  }
                  value={commentInputs[post.id] || ''}
                  onChange={(e) =>
                    setCommentInputs((prev) => ({ ...prev, [post.id]: e.target.value }))
                  }
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleAddComment(post.id);
                  }}
                  className="flex-1 px-3.5 py-2 text-xs border border-paper-400 bg-paper-100/50 text-roast-900 placeholder:text-roast-400 focus:outline-hidden focus:border-roast-900 font-sans"
                />
                <button
                  onClick={() => handleAddComment(post.id)}
                  className="px-4 py-2 bg-roast-950 hover:bg-cherry-800 text-paper-50 font-mono text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Balas</span>
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
