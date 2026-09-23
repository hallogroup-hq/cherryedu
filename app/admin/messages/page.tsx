'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useCherryEdu } from '@/lib/store';
import {
  Inbox,
  Search,
  Send,
  Crown,
  Check,
} from 'lucide-react';
import { toast } from 'sonner';

export default function AdminMessagesPage() {
  const {
    currentUser,
    chatMessages,
    users,
    getAllConversations,
    getConversationMessages,
    sendAdminChatMessage,
    markConversationRead,
  } = useCherryEdu();

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'unread' | 'pro'>('all');
  const [selectedConvId, setSelectedConvId] = useState<string | null>(null);
  const [replyText, setReplyText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Conversations list
  const allConversations = useMemo(() => {
    return getAllConversations();
  }, [getAllConversations]);

  // Set default selected conversation
  useEffect(() => {
    if (allConversations.length > 0 && !selectedConvId) {
      setSelectedConvId(allConversations[0].conversationId);
    }
  }, [allConversations, selectedConvId]);

  // Filtered conversations
  const filteredConversations = useMemo(() => {
    return allConversations.filter((conv) => {
      const u = users.find((usr) => usr.id === conv.conversationId);
      const isPro = u?.is_pro || false;

      if (filter === 'unread' && conv.unreadCount === 0) return false;
      if (filter === 'pro' && !isPro) return false;

      if (search.trim()) {
        const q = search.toLowerCase();
        const nameMatch = conv.userName.toLowerCase().includes(q);
        const emailMatch = conv.userEmail?.toLowerCase().includes(q);
        const msgMatch = conv.lastMessage.message.toLowerCase().includes(q);
        return nameMatch || emailMatch || msgMatch;
      }
      return true;
    });
  }, [allConversations, filter, search, users]);

  // Active conversation details
  const activeConversation = useMemo(() => {
    if (!selectedConvId) return null;
    return allConversations.find((c) => c.conversationId === selectedConvId) || null;
  }, [allConversations, selectedConvId]);

  // Active user details
  const activeUser = useMemo(() => {
    if (!selectedConvId) return null;
    return users.find((u) => u.id === selectedConvId) || null;
  }, [users, selectedConvId]);

  // Active messages
  const activeMessages = useMemo(() => {
    if (!selectedConvId) return [];
    return getConversationMessages(selectedConvId);
  }, [getConversationMessages, selectedConvId]);

  // Auto-scroll on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [activeMessages.length, selectedConvId]);

  // Mark as read when opening conversation
  useEffect(() => {
    if (selectedConvId) {
      markConversationRead(selectedConvId, true);
    }
  }, [selectedConvId, markConversationRead]);

  // Send reply handler
  const handleSendReply = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!selectedConvId || !replyText.trim()) return;

    sendAdminChatMessage(
      selectedConvId,
      replyText.trim(),
      currentUser?.name || 'Admin CherryEdu'
    );
    setReplyText('');
    toast.success('Balasan berhasil dikirim.');
  };

  // Pre-set canned answers
  const quickReplies = [
    'Halo! Ada yang bisa kami bantu terkait materi pelajaran ini?',
    'Terima kasih atas masukannya. Poin ini sudah kami teruskan ke tim kurikulum.',
    'Untuk rasio ekstraksi espresso, kami menyarankan rasio 1:2 hingga 1:2.2 dengan flow rate 2.5 ml/detik.',
    'Sertifikat kelulusan resmi Anda dapat diunduh langsung melalui menu Profil setelah seluruh modul selesai.',
  ];

  const totalUnread = allConversations.reduce((acc, c) => acc + c.unreadCount, 0);

  const formatMessageTime = (dateStr: string) => {
    const d = new Date(dateStr);
    const now = new Date();
    const diffMs = now.getTime() - d.getTime();
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));

    if (diffMins < 1) return 'Baru saja';
    if (diffMins < 60) return `${diffMins}m lalu`;
    if (diffHours < 24) return `${diffHours}j lalu`;
    return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short' });
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="font-serif font-black text-2xl text-roast-950">
              Pusat Pesan & Chat Pengguna
            </h1>
            {totalUnread > 0 && (
              <span className="px-2 py-0.5 rounded-full bg-cherry-700 text-white font-mono text-xs font-bold">
                {totalUnread} Belum Dibalas
              </span>
            )}
          </div>
          <p className="text-xs text-roast-600 font-sans mt-0.5">
            Komunikasi langsung dua arah antara siswa, barista, dan tim kurikulum CherryEdu.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="flex items-center gap-3 font-mono text-xs">
          <div className="px-3 py-1.5 rounded-lg bg-white border border-paper-200 text-roast-700">
            <span className="text-roast-400 mr-1.5">Percakapan:</span>
            <strong className="text-roast-950">{allConversations.length}</strong>
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-white border border-paper-200 text-roast-700">
            <span className="text-roast-400 mr-1.5">Total Pesan:</span>
            <strong className="text-roast-950">{chatMessages.length}</strong>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="bg-white rounded-2xl border border-paper-300 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[640px] max-h-[750px]">
        {/* Left Column: Conversations List */}
        <div className="lg:col-span-4 border-r border-paper-200 flex flex-col bg-paper-50/50">
          {/* Search & Filters */}
          <div className="p-3.5 border-b border-paper-200 bg-white space-y-2.5">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-roast-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari nama, email, isi pesan..."
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-paper-50 border border-paper-300 rounded-lg focus:outline-none focus:border-roast-900 font-sans"
              />
            </div>

            {/* Filter Chips */}
            <div className="flex items-center gap-1.5 font-mono text-[10px]">
              <button
                onClick={() => setFilter('all')}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  filter === 'all'
                    ? 'bg-roast-950 text-white font-bold'
                    : 'bg-paper-100 text-roast-600 hover:bg-paper-200'
                }`}
              >
                Semua ({allConversations.length})
              </button>
              <button
                onClick={() => setFilter('unread')}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  filter === 'unread'
                    ? 'bg-roast-950 text-white font-bold'
                    : 'bg-paper-100 text-roast-600 hover:bg-paper-200'
                }`}
              >
                Belum Dibaca ({allConversations.filter((c) => c.unreadCount > 0).length})
              </button>
              <button
                onClick={() => setFilter('pro')}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  filter === 'pro'
                    ? 'bg-roast-950 text-white font-bold'
                    : 'bg-paper-100 text-roast-600 hover:bg-paper-200'
                }`}
              >
                Member Pro
              </button>
            </div>
          </div>

          {/* Conversation Items */}
          <div className="flex-1 overflow-y-auto divide-y divide-paper-200">
            {filteredConversations.length > 0 ? (
              filteredConversations.map((conv) => {
                const isSelected = selectedConvId === conv.conversationId;
                const userObj = users.find((u) => u.id === conv.conversationId);
                const isUserPro = userObj?.is_pro || false;
                const hasUnread = conv.unreadCount > 0;

                return (
                  <button
                    key={conv.conversationId}
                    onClick={() => {
                      setSelectedConvId(conv.conversationId);
                      markConversationRead(conv.conversationId, true);
                    }}
                    className={`w-full text-left p-3.5 transition-colors relative flex items-start gap-3 ${
                      isSelected
                        ? 'bg-white shadow-xs'
                        : 'hover:bg-white/80 bg-paper-50/60'
                    }`}
                  >
                    {/* Active accent bar */}
                    {isSelected && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-cherry-700" />
                    )}

                    {/* Avatar */}
                    <div className="relative shrink-0 mt-0.5">
                      <div className="w-9 h-9 rounded-full bg-roast-900 text-paper-50 flex items-center justify-center font-bold text-xs">
                        {conv.userName.charAt(0).toUpperCase()}
                      </div>
                      {isUserPro && (
                        <div
                          className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-amber-500 rounded-full flex items-center justify-center text-white"
                          title="Member Pro"
                        >
                          <Crown className="w-2.5 h-2.5" />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between gap-1 mb-0.5">
                        <span
                          className={`font-serif text-xs truncate ${
                            hasUnread ? 'font-bold text-roast-950' : 'font-semibold text-roast-850'
                          }`}
                        >
                          {conv.userName}
                        </span>
                        <span className="font-mono text-[10px] text-roast-400 shrink-0">
                          {formatMessageTime(conv.lastMessage.created_at)}
                        </span>
                      </div>

                      <p
                        className={`font-sans text-xs truncate ${
                          hasUnread ? 'font-semibold text-roast-900' : 'text-roast-600'
                        }`}
                      >
                        {conv.lastMessage.sender_role === 'admin' && (
                          <span className="text-cherry-800 font-bold mr-1">Admin:</span>
                        )}
                        {conv.lastMessage.message}
                      </p>

                      {/* Meta Context & Unread Pill */}
                      <div className="flex items-center gap-1.5 mt-1.5">
                        {conv.lastMessage.page_context && (
                          <span className="inline-block px-1.5 py-0.5 rounded bg-paper-200 text-roast-700 font-mono text-[9px] truncate max-w-[140px]">
                            {conv.lastMessage.page_context}
                          </span>
                        )}
                        {hasUnread && (
                          <span className="ml-auto px-1.5 py-0.2 rounded-full bg-cherry-700 text-white font-mono text-[9px] font-bold">
                            {conv.unreadCount} baru
                          </span>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })
            ) : (
              <div className="p-8 text-center text-roast-500 font-mono text-xs">
                Tidak ada percakapan yang cocok dengan filter.
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Chat History & Reply Composer */}
        <div className="lg:col-span-8 flex flex-col bg-white">
          {activeConversation ? (
            <>
              {/* Chat Thread Header */}
              <div className="p-3.5 border-b border-paper-200 flex items-center justify-between gap-3 bg-paper-50/50">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-full bg-roast-900 text-paper-50 flex items-center justify-center font-bold text-sm shrink-0">
                    {activeConversation.userName.charAt(0).toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h2 className="font-serif font-bold text-sm text-roast-950 truncate">
                        {activeConversation.userName}
                      </h2>
                      {activeUser?.is_pro && (
                        <span className="px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300 font-mono text-[9px] font-bold">
                          PRO MEMBER
                        </span>
                      )}
                      <span className="px-1.5 py-0.5 rounded bg-paper-200 text-roast-700 font-mono text-[9px] uppercase">
                        {activeUser?.coffee_role || activeUser?.role || 'Pengguna'}
                      </span>
                    </div>
                    <span className="font-mono text-[11px] text-roast-500 block truncate">
                      {activeConversation.userEmail || 'Tamu / Akun Tanpa Email'}
                    </span>
                  </div>
                </div>

                {/* Header Actions */}
                <div className="flex items-center gap-2 shrink-0">
                  {activeMessages.some((m) => m.page_context) && (
                    <div className="px-2.5 py-1 rounded-lg border border-paper-300 bg-white text-roast-700 font-mono text-[10px] hidden sm:block truncate max-w-[220px]">
                      {activeMessages.slice().reverse().find((m) => m.page_context)?.page_context}
                    </div>
                  )}
                  <button
                    onClick={() => {
                      markConversationRead(activeConversation.conversationId, true);
                      toast.success('Percakapan ditandai sudah dibaca.');
                    }}
                    className="p-1.5 rounded-lg border border-paper-300 hover:bg-paper-100 text-roast-600 hover:text-roast-900 transition"
                    title="Tandai Sudah Dibaca"
                  >
                    <Check className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Chat Messages Body */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-paper-50/20">
                {activeMessages.length === 0 ? (
                  <div className="h-full flex items-center justify-center text-center text-roast-400 font-mono text-xs">
                    Belum ada riwayat pesan dalam percakapan ini.
                  </div>
                ) : (
                  activeMessages.map((msg) => {
                    const isAdmin = msg.sender_role === 'admin';
                    const msgDate = new Date(msg.created_at);
                    const timeStr = msgDate.toLocaleTimeString('id-ID', {
                      hour: '2-digit',
                      minute: '2-digit',
                    });

                    return (
                      <div
                        key={msg.id}
                        className={`flex flex-col ${isAdmin ? 'items-end' : 'items-start'}`}
                      >
                        <div className="flex items-center gap-1.5 mb-1 px-1">
                          <span className="font-mono text-[10px] text-roast-400">
                            {isAdmin ? 'Admin CherryEdu' : msg.sender_name}
                          </span>
                          <span className="font-mono text-[9px] text-roast-300">
                            • {timeStr}
                          </span>
                        </div>

                        <div
                          className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-3.5 text-xs shadow-2xs ${
                            isAdmin
                              ? 'bg-roast-950 text-paper-50 rounded-tr-xs border border-roast-900'
                              : 'bg-white text-roast-900 rounded-tl-xs border border-paper-300'
                          }`}
                        >
                          {/* Context banner if attached */}
                          {msg.page_context && !isAdmin && (
                            <div className="mb-2 pb-2 border-b border-paper-200 font-mono text-[10px] text-roast-600 flex items-center gap-1.5">
                              <span className="text-cherry-800 font-bold">Konteks:</span>
                              <span className="truncate">
                                {msg.page_context}
                              </span>
                            </div>
                          )}

                          <p className="font-sans leading-relaxed whitespace-pre-wrap">
                            {msg.message}
                          </p>
                        </div>
                      </div>
                    );
                  })
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Canned Replies */}
              <div className="px-3.5 py-2 border-t border-paper-200 bg-white flex items-center gap-1.5 overflow-x-auto no-scrollbar">
                <span className="font-mono text-[10px] text-roast-400 uppercase tracking-wider shrink-0 mr-1">
                  Template:
                </span>
                {quickReplies.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => setReplyText(q)}
                    className="px-2.5 py-1 rounded bg-paper-100 hover:bg-paper-200 border border-paper-300 text-roast-700 font-sans text-[11px] whitespace-nowrap transition-colors"
                  >
                    {q.slice(0, 32)}...
                  </button>
                ))}
              </div>

              {/* Reply Composer */}
              <form
                onSubmit={handleSendReply}
                className="p-3.5 border-t border-paper-200 bg-paper-50/50 flex items-end gap-2.5"
              >
                <div className="flex-1">
                  <textarea
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    onKeyDown={(e) => {
                      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                        e.preventDefault();
                        handleSendReply();
                      }
                    }}
                    placeholder="Tulis balasan resmi admin... (Ctrl+Enter untuk mengirim)"
                    rows={2}
                    className="w-full p-2.5 text-xs bg-white border border-paper-300 rounded-xl focus:outline-none focus:border-roast-900 font-sans resize-none leading-relaxed"
                  />
                </div>
                <button
                  type="submit"
                  disabled={!replyText.trim()}
                  className="px-4 py-2.5 rounded-xl bg-roast-950 hover:bg-cherry-900 disabled:opacity-40 disabled:hover:bg-roast-950 text-white font-mono text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 shadow-xs mb-1"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Kirim</span>
                </button>
              </form>
            </>
          ) : (
            <div className="h-full flex flex-col items-center justify-center p-8 text-center text-roast-500">
              <div className="w-12 h-12 rounded-full bg-paper-100 flex items-center justify-center text-roast-400 mb-3">
                <Inbox className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-base text-roast-900 mb-1">
                Pilih Percakapan
              </h3>
              <p className="font-sans text-xs text-roast-600 max-w-sm leading-relaxed">
                Pilih salah satu pesan dari siswa di panel kiri untuk membaca dan mengirim balasan resmi.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
