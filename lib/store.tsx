'use client';

import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { useAuth } from './auth';
import {
  User,
  LearningPath,
  Module,
  Lesson,
  Quiz,
  Question,
  Enrollment,
  UserProgress,
  QuizAttempt,
  Certificate,
  Badge,
  UserBadge,
  Post,
  Comment,
  Like,
  JobListing,
  JobApplication,
  Bookmark,
  ForumCategory,
  LandingPageConfig,
  SitePageConfig,
  SubscriptionTier,
  SubscriptionCycle,
  PaymentStatus,
  PaymentTransaction,
  Voucher,
} from './types';
import {
  PRICING_PLANS,
  INITIAL_VOUCHERS,
  requestDynamicQRIS,
  verifyQRISStatus,
} from './paymentGateway';
import {
  SEED_USERS,
  SEED_BADGES,
  SEED_PATHS,
  SEED_MODULES,
  SEED_LESSONS,
  SEED_QUIZZES,
  SEED_QUESTIONS,
  SEED_ENROLLMENTS,
  SEED_CERTIFICATES,
  SEED_POSTS,
  SEED_COMMENTS,
  SEED_JOBS,
  SEED_JOB_APPLICATIONS,
} from './data/seedData';
import { DEFAULT_LANDING_CONFIG } from './data/defaultLandingConfig';
import { DEFAULT_SITE_PAGES } from './data/defaultSitePages';

export const GUEST_USER: User = {
  id: 'guest',
  name: 'Tamu',
  email: '',
  avatar_url: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
  bio: 'Pengunjung CherryEdu. Masuk atau buat akun untuk menyimpan progres materi.',
  role: 'learner',
  coffee_role: 'barista',
  city: 'Indonesia',
  xp_points: 0,
  streak_count: 0,
  last_active_date: new Date().toISOString().slice(0, 10),
  created_at: new Date().toISOString(),
};

interface CherryEduContextType {
  currentUser: User;
  isAuthenticated: boolean;
  isGuest: boolean;
  authLoading: boolean;
  users: User[];
  learningPaths: LearningPath[];
  modules: Module[];
  lessons: Lesson[];
  quizzes: Quiz[];
  questions: Question[];
  enrollments: Enrollment[];
  userProgress: UserProgress[];
  quizAttempts: QuizAttempt[];
  certificates: Certificate[];
  badges: Badge[];
  userBadges: UserBadge[];
  posts: Post[];
  comments: Comment[];
  likes: Like[];
  jobListings: JobListing[];
  jobApplications: JobApplication[];
  bookmarks: Bookmark[];
  transactions: PaymentTransaction[];
  vouchers: Voucher[];
  isPro: boolean;

  // Monetization Actions & Quota
  toolUsageCount: number;
  remainingToolQuota: number;
  isToolAllowed: boolean;
  recordToolUsage: (toolId?: string) => { allowed: boolean; remaining: number; isPro: boolean };
  applyVoucher: (code: string, amount: number) => { valid: boolean; discountAmount: number; finalAmount: number; message: string; voucher?: Voucher };
  createPaymentTransaction: (cycle: SubscriptionCycle, voucherCode?: string) => Promise<{ success: boolean; transaction?: PaymentTransaction; error?: string }>;
  checkPaymentStatus: (transactionId: string) => Promise<{ paid: boolean; transaction?: PaymentTransaction }>;
  simulatePaymentSuccess: (transactionId: string) => void;
  grantProAccess: (userId: string, durationMonths?: number, cycle?: SubscriptionCycle) => void;
  revokeProAccess: (userId: string) => void;
  addVoucher: (voucher: Voucher) => void;
  updateVoucher: (voucherId: string, data: Partial<Voucher>) => void;
  deleteVoucher: (voucherId: string) => void;
  toggleVoucherStatus: (voucherId: string) => void;
  isLessonAccessible: (pathSlug: string, moduleId: string, lessonId?: string) => boolean;
  isModuleAccessible: (pathSlug: string, moduleId: string) => boolean;

  // Actions
  switchUser: (userId: string) => void; // admin-only: view-as user
  updateUserProfile: (data: Partial<User>) => void;
  awardXP: (points: number) => void;
  enrollInPath: (pathId: string, bypassPrerequisite?: boolean) => { success: boolean; message: string };
  markLessonComplete: (lessonId: string, timeSpentSeconds?: number) => void;
  isLessonCompleted: (lessonId: string) => boolean;
  getPathProgress: (pathId: string) => number;
  isPathCompleted: (pathId: string) => boolean;
  canEnrollInPath: (pathId: string) => { allowed: boolean; reason?: string };
  submitQuiz: (
    quizId: string,
    answers: Record<string, string>
  ) => { score: number; passed: boolean; certificateEarned?: Certificate; xpEarned: number };
  toggleBookmark: (lessonId: string) => void;
  isBookmarked: (lessonId: string) => boolean;
  createPost: (title: string, content: string, category: ForumCategory) => Post;
  createComment: (postId: string, content: string, parentCommentId?: string | null) => Comment;
  toggleLike: (targetId: string, targetType: 'post' | 'comment') => void;
  isLiked: (targetId: string) => boolean;
  applyForJob: (jobId: string, coverLetter: string) => { success: boolean; message: string };
  updateApplicationStatus: (applicationId: string, newStatus: JobApplication['status']) => void;
  createJobListing: (job: Omit<JobListing, 'id' | 'created_at' | 'employer_id'>) => JobListing;
  getCertificateByToken: (token: string) => Certificate | undefined;
  getUserCertificates: (userId?: string) => Certificate[];
  getUserBadges: (userId?: string) => (Badge & { earned_at: string })[];
  landingPageConfig: LandingPageConfig;
  updateLandingPageConfig: (config: Partial<LandingPageConfig>) => void;
  sitePages: Record<string, SitePageConfig>;
  updateSitePageConfig: (pageId: string, config: Partial<SitePageConfig>) => void;
  updateLesson: (lessonId: string, data: Partial<Lesson>) => void;
  addLesson: (lesson: Lesson) => void;
  deleteLesson: (lessonId: string) => void;
  updateLearningPath: (pathId: string, data: Partial<LearningPath>) => void;
  addLearningPath: (path: LearningPath) => void;
  deleteLearningPath: (pathId: string) => void;
  resetAllData: () => void;
}

const CherryEduContext = createContext<CherryEduContextType | undefined>(undefined);

const STORAGE_KEY = 'cherryedu_state_v8';

export const CherryEduProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user: authUser, loading: authLoading } = useAuth();
  const isAuthenticated = Boolean(authUser);
  const isGuest = !isAuthenticated;

  // Initialize with clean seed data (no fictitious learners) or LocalStorage
  const [users, setUsers] = useState<User[]>(SEED_USERS);
  const [currentUserId, setCurrentUserId] = useState<string>('guest');
  const [learningPaths, setLearningPaths] = useState<LearningPath[]>(SEED_PATHS);
  const [modules, setModules] = useState<Module[]>(SEED_MODULES);
  const [lessons, setLessons] = useState<Lesson[]>(SEED_LESSONS);
  const [quizzes, setQuizzes] = useState<Quiz[]>(SEED_QUIZZES);
  const [questions, setQuestions] = useState<Question[]>(SEED_QUESTIONS);
  const [enrollments, setEnrollments] = useState<Enrollment[]>(SEED_ENROLLMENTS);
  const [userProgress, setUserProgress] = useState<UserProgress[]>([]);
  const [quizAttempts, setQuizAttempts] = useState<QuizAttempt[]>([]);
  const [certificates, setCertificates] = useState<Certificate[]>(SEED_CERTIFICATES);
  const [badges, _setBadges] = useState<Badge[]>(SEED_BADGES);
  const [userBadges, setUserBadges] = useState<UserBadge[]>([]);
  const [posts, setPosts] = useState<Post[]>(SEED_POSTS);
  const [comments, setComments] = useState<Comment[]>(SEED_COMMENTS);
  const [likes, setLikes] = useState<Like[]>([]);
  const [jobListings, setJobListings] = useState<JobListing[]>(SEED_JOBS);
  const [jobApplications, setJobApplications] = useState<JobApplication[]>(SEED_JOB_APPLICATIONS);
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [transactions, setTransactions] = useState<PaymentTransaction[]>([]);
  const [vouchers, setVouchers] = useState<Voucher[]>(INITIAL_VOUCHERS);
  const [landingPageConfig, setLandingPageConfig] = useState<LandingPageConfig>(DEFAULT_LANDING_CONFIG);
  const [sitePages, setSitePages] = useState<Record<string, SitePageConfig>>(DEFAULT_SITE_PAGES);

  const TOOL_FREE_LIMIT = 10;
  const [toolUsageCount, setToolUsageCount] = useState<number>(0);

  // Load from localStorage on client mount
  useEffect(() => {
    try {
      // Proactively clear legacy v7 and demo auth storage
      localStorage.removeItem('cherryedu_state_v7');
      localStorage.removeItem('cherryedu_local_auth_user');

      const savedToolCount = localStorage.getItem('cherryedu_tool_usage_count');
      if (savedToolCount) {
        setToolUsageCount(parseInt(savedToolCount, 10) || 0);
      }

      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.users) {
          const cleanUsers = parsed.users.filter(
            (u: User) =>
              u.id !== 'user-budi' &&
              u.id !== 'user-sari' &&
              !u.email?.toLowerCase().includes('budi@') &&
              !u.email?.toLowerCase().includes('sari@')
          );
          setUsers(cleanUsers.length > 0 ? cleanUsers : SEED_USERS);
        }
        if (
          parsed.currentUserId &&
          parsed.currentUserId !== 'user-budi' &&
          parsed.currentUserId !== 'user-sari' &&
          parsed.currentUserId !== 'guest'
        ) {
          setCurrentUserId(parsed.currentUserId);
        }
        if (parsed.enrollments) {
          setEnrollments(
            parsed.enrollments.filter(
              (e: Enrollment) => e.user_id !== 'user-budi' && e.user_id !== 'user-sari'
            )
          );
        }
        if (parsed.userProgress) {
          setUserProgress(
            parsed.userProgress.filter(
              (p: UserProgress) => p.user_id !== 'user-budi' && p.user_id !== 'user-sari'
            )
          );
        }
        if (parsed.quizAttempts) {
          setQuizAttempts(
            parsed.quizAttempts.filter(
              (a: QuizAttempt) => a.user_id !== 'user-budi' && a.user_id !== 'user-sari'
            )
          );
        }
        if (parsed.certificates) {
          setCertificates(
            parsed.certificates.filter(
              (c: Certificate) => c.user_id !== 'user-budi' && c.user_id !== 'user-sari'
            )
          );
        }
        if (parsed.userBadges) {
          setUserBadges(
            parsed.userBadges.filter(
              (b: UserBadge) => b.user_id !== 'user-budi' && b.user_id !== 'user-sari'
            )
          );
        }
        if (parsed.posts) setPosts(parsed.posts);
        if (parsed.comments) setComments(parsed.comments);
        if (parsed.likes) {
          setLikes(
            parsed.likes.filter((l: Like) => l.user_id !== 'user-budi' && l.user_id !== 'user-sari')
          );
        }
        if (parsed.jobListings) setJobListings(parsed.jobListings);
        if (parsed.jobApplications) {
          setJobApplications(
            parsed.jobApplications.filter(
              (a: JobApplication) =>
                a.applicant_id !== 'user-budi' && a.applicant_id !== 'user-sari'
            )
          );
        }
        if (parsed.bookmarks) {
          setBookmarks(
            parsed.bookmarks.filter(
              (b: Bookmark) => b.user_id !== 'user-budi' && b.user_id !== 'user-sari'
            )
          );
        }
        if (parsed.transactions) setTransactions(parsed.transactions);
        if (parsed.vouchers) setVouchers(parsed.vouchers);

        // Smart merge learning paths
        if (parsed.learningPaths) {
          const existingPathIds = new Set(parsed.learningPaths.map((p: LearningPath) => p.id));
          const mergedPaths = [
            ...parsed.learningPaths.map((p: LearningPath) => {
              const seedMatch = SEED_PATHS.find((sp) => sp.id === p.id);
              return seedMatch && (!p.total_modules || p.total_modules < seedMatch.total_modules) ? seedMatch : p;
            }),
            ...SEED_PATHS.filter((sp) => !existingPathIds.has(sp.id)),
          ];
          setLearningPaths(mergedPaths);
        } else {
          setLearningPaths(SEED_PATHS);
        }

        // Smart merge modules
        if (parsed.modules) {
          const existingModIds = new Set(parsed.modules.map((m: Module) => m.id));
          setModules([...parsed.modules, ...SEED_MODULES.filter((sm) => !existingModIds.has(sm.id))]);
        } else {
          setModules(SEED_MODULES);
        }

        // Smart merge lessons: ensure official syllabus lessons stay synced with latest rich content & images
        if (parsed.lessons) {
          const customLessons = parsed.lessons.filter((l: Lesson) => !SEED_LESSONS.some((sl) => sl.id === l.id));
          setLessons([...SEED_LESSONS, ...customLessons]);
        } else {
          setLessons(SEED_LESSONS);
        }

        // Smart merge quizzes
        if (parsed.quizzes) {
          const existingQuizIds = new Set(parsed.quizzes.map((q: Quiz) => q.id));
          setQuizzes([...parsed.quizzes, ...SEED_QUIZZES.filter((sq) => !existingQuizIds.has(sq.id))]);
        } else {
          setQuizzes(SEED_QUIZZES);
        }

        // Smart merge questions
        if (parsed.questions) {
          const existingQuesIds = new Set(parsed.questions.map((q: Question) => q.id));
          setQuestions([...parsed.questions, ...SEED_QUESTIONS.filter((sq) => !existingQuesIds.has(sq.id))]);
        } else {
          setQuestions(SEED_QUESTIONS);
        }

        if (parsed.landingPageConfig) setLandingPageConfig(parsed.landingPageConfig);
        if (parsed.sitePages) setSitePages(parsed.sitePages);
      }
    } catch (e) {
      console.warn('Failed to load CherryEdu state from localStorage:', e);
    }
  }, []);

  // Save to localStorage whenever state changes
  useEffect(() => {
    try {
      const payload = {
        users,
        currentUserId,
        enrollments,
        userProgress,
        quizAttempts,
        certificates,
        userBadges,
        posts,
        comments,
        likes,
        jobListings,
        jobApplications,
        bookmarks,
        transactions,
        vouchers,
        lessons,
        learningPaths,
        modules,
        quizzes,
        questions,
        landingPageConfig,
        sitePages,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch (e) {
      console.warn('Failed to save CherryEdu state to localStorage:', e);
    }
  }, [
    users,
    currentUserId,
    enrollments,
    userProgress,
    quizAttempts,
    certificates,
    userBadges,
    posts,
    comments,
    likes,
    jobListings,
    jobApplications,
    bookmarks,
    transactions,
    vouchers,
    lessons,
    learningPaths,
    modules,
    quizzes,
    questions,
    landingPageConfig,
    sitePages,
  ]);

  // Synchronize authenticated user from Supabase / demo auth
  useEffect(() => {
    if (!authUser) {
      setCurrentUserId('guest');
      return;
    }

    // Check if user already exists in `users` by id or email
    const existing = users.find(
      (u) =>
        u.id === authUser.id ||
        (authUser.email && u.email.toLowerCase() === authUser.email.toLowerCase())
    );

    if (existing) {
      const incomingName =
        authUser.user_metadata?.full_name ||
        authUser.user_metadata?.name;
      const incomingAvatar =
        authUser.user_metadata?.avatar_url ||
        authUser.user_metadata?.picture;

      const shouldUpdateId = existing.id !== authUser.id;
      const shouldUpdateName = incomingName && incomingName !== existing.name;
      const shouldUpdateAvatar = incomingAvatar && incomingAvatar !== existing.avatar_url;

      if (shouldUpdateId || shouldUpdateName || shouldUpdateAvatar) {
        setUsers((prev) =>
          prev.map((u) =>
            u.id === existing.id
              ? {
                  ...u,
                  id: authUser.id,
                  name: incomingName || u.name,
                  avatar_url: incomingAvatar || u.avatar_url,
                }
              : u
          )
        );
        setCurrentUserId(authUser.id);
      } else {
        setCurrentUserId(existing.id);
      }
    } else {
      // Auto-provision profile for this real user
      const name =
        authUser.user_metadata?.full_name ||
        authUser.user_metadata?.name ||
        (authUser.email ? authUser.email.split('@')[0] : 'Pembelajar Kopi');
      const avatar_url =
        authUser.user_metadata?.avatar_url ||
        authUser.user_metadata?.picture ||
        `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(
          authUser.email || authUser.id
        )}`;
      const coffeeRole = (authUser.user_metadata?.coffee_role as User['coffee_role']) || 'barista';
      const isAdmin =
        authUser.email === 'admin@cherryedu.id' || authUser.user_metadata?.role === 'admin';

      const newUser: User = {
        id: authUser.id,
        name,
        email: authUser.email || '',
        avatar_url,
        bio: 'Pembelajar aktif di akademi kopi CherryEdu.',
        role: isAdmin ? 'admin' : 'learner',
        coffee_role: coffeeRole,
        city: authUser.user_metadata?.city || 'Indonesia',
        xp_points: 50,
        streak_count: 1,
        last_active_date: new Date().toISOString().slice(0, 10),
        created_at: new Date().toISOString(),
      };

      setUsers((prev) => [newUser, ...prev]);
      setCurrentUserId(newUser.id);
    }
  }, [authUser, users]);

  const currentUser: User = useMemo(() => {
    if (!isAuthenticated && currentUserId === 'guest') {
      return GUEST_USER;
    }
    const matched = users.find(
      (u) =>
        u.id === currentUserId ||
        (authUser?.email && u.email.toLowerCase() === authUser.email.toLowerCase())
    );
    return matched || (isAuthenticated ? users[0] : GUEST_USER);
  }, [isAuthenticated, users, currentUserId, authUser]);

  const isPro = useMemo(() => {
    if (currentUser.role === 'admin') return true;
    if (currentUser.is_pro) {
      if (!currentUser.subscription_expires_at) return true;
      return new Date(currentUser.subscription_expires_at) > new Date();
    }
    return false;
  }, [currentUser]);

  const remainingToolQuota = isPro ? Infinity : Math.max(0, TOOL_FREE_LIMIT - toolUsageCount);
  const isToolAllowed = isPro || toolUsageCount < TOOL_FREE_LIMIT;

  const recordToolUsage = (_toolId?: string) => {
    if (isPro) {
      return { allowed: true, remaining: Infinity, isPro: true };
    }
    if (toolUsageCount >= TOOL_FREE_LIMIT) {
      return { allowed: false, remaining: 0, isPro: false };
    }
    const nextCount = toolUsageCount + 1;
    setToolUsageCount(nextCount);
    try {
      localStorage.setItem('cherryedu_tool_usage_count', nextCount.toString());
    } catch (e) {
      console.warn('Failed to save tool usage count to localStorage:', e);
    }
    return {
      allowed: true,
      remaining: Math.max(0, TOOL_FREE_LIMIT - nextCount),
      isPro: false,
    };
  };

  const isModuleAccessible = (pathSlug: string, moduleId: string): boolean => {
    if (isPro) return true;
    const path = learningPaths.find((p) => p.slug === pathSlug);
    if (!path) return true;
    // Foundation path is 100% free for all
    if (path.layer_type === 'foundation' || path.slug === 'foundation-kopi') {
      return true;
    }
    // For specialization paths, only module index 0 (the first module) is free
    const pathModules = modules
      .filter((m) => m.learning_path_id === path.id)
      .sort((a, b) => a.order_index - b.order_index);
    const modIndex = pathModules.findIndex((m) => m.id === moduleId);
    return modIndex === 0;
  };

  const isLessonAccessible = (pathSlug: string, moduleId: string, _lessonId?: string): boolean => {
    if (isPro) return true;
    return isModuleAccessible(pathSlug, moduleId);
  };

  const grantProAccess = (userId: string, durationMonths = 1, cycle: SubscriptionCycle = 'monthly') => {
    const expiryDate = new Date();
    expiryDate.setMonth(expiryDate.getMonth() + durationMonths);

    setUsers((prev) =>
      prev.map((u) => {
        if (u.id === userId) {
          return {
            ...u,
            is_pro: true,
            subscription_tier: 'pro',
            subscription_cycle: cycle,
            subscription_expires_at: expiryDate.toISOString(),
          };
        }
        return u;
      })
    );
  };

  const revokeProAccess = (userId: string) => {
    setUsers((prev) =>
      prev.map((u) => {
        if (u.id === userId) {
          return {
            ...u,
            is_pro: false,
            subscription_tier: 'free',
            subscription_expires_at: undefined,
            subscription_cycle: undefined,
          };
        }
        return u;
      })
    );
  };

  const applyVoucher = (code: string, amount: number) => {
    const cleanCode = code.trim().toUpperCase();
    const v = vouchers.find((item) => item.code.toUpperCase() === cleanCode && item.is_active);
    if (!v) {
      return { valid: false, discountAmount: 0, finalAmount: amount, message: 'Kode voucher tidak ditemukan atau tidak aktif.' };
    }
    if (v.expires_at && new Date(v.expires_at) < new Date()) {
      return { valid: false, discountAmount: 0, finalAmount: amount, message: 'Masa berlaku kupon telah berakhir.' };
    }
    if (v.usage_limit && v.usage_count >= v.usage_limit) {
      return { valid: false, discountAmount: 0, finalAmount: amount, message: 'Batas kuota pemakaian kupon telah tercapai.' };
    }
    if (v.min_purchase && amount < v.min_purchase) {
      return { valid: false, discountAmount: 0, finalAmount: amount, message: `Minimal transaksi untuk kupon ini adalah Rp ${v.min_purchase.toLocaleString('id-ID')}` };
    }

    let discount = 0;
    if (v.discount_type === 'percentage') {
      discount = Math.round((amount * v.discount_value) / 100);
      if (v.max_discount && discount > v.max_discount) {
        discount = v.max_discount;
      }
    } else {
      discount = v.discount_value;
    }

    const finalAmount = Math.max(0, amount - discount);
    return {
      valid: true,
      discountAmount: discount,
      finalAmount,
      message: `Voucher "${v.code}" berhasil diterapkan! Hemat Rp ${discount.toLocaleString('id-ID')}`,
      voucher: v,
    };
  };

  const createPaymentTransaction = async (cycle: SubscriptionCycle, voucherCode?: string) => {
    const baseAmount = cycle === 'annual' ? PRICING_PLANS.pro.annual.amount : PRICING_PLANS.pro.monthly.amount;
    let discount = 0;
    let finalAmount = baseAmount;
    let appliedVoucherCode: string | undefined = undefined;

    if (voucherCode) {
      const vResult = applyVoucher(voucherCode, baseAmount);
      if (vResult.valid) {
        discount = vResult.discountAmount;
        finalAmount = vResult.finalAmount;
        appliedVoucherCode = vResult.voucher?.code;
      }
    }

    const qrisResult = await requestDynamicQRIS(finalAmount);

    const tx: PaymentTransaction = {
      id: 'tx_' + Math.random().toString(36).substring(2, 10),
      user_id: currentUser.id,
      user_name: currentUser.name || 'Pengguna CherryEdu',
      user_email: currentUser.email,
      plan_tier: 'pro',
      cycle,
      original_amount: baseAmount,
      discount_amount: discount,
      final_amount: finalAmount,
      voucher_code: appliedVoucherCode,
      status: 'pending',
      payment_method: 'gopay_qris',
      qris_id: qrisResult.qris_id,
      trx_id: qrisResult.trx_id,
      qris_code: qrisResult.qris_code,
      qris_url: qrisResult.qris_image_url,
      expires_at: qrisResult.expires_at,
      created_at: new Date().toISOString(),
    };

    setTransactions((prev) => [tx, ...prev]);

    if (appliedVoucherCode) {
      setVouchers((prev) =>
        prev.map((v) =>
          v.code.toUpperCase() === appliedVoucherCode?.toUpperCase()
            ? { ...v, usage_count: (v.usage_count || 0) + 1 }
            : v
        )
      );
    }

    return { success: true, transaction: tx };
  };

  const checkPaymentStatus = async (transactionId: string) => {
    const tx = transactions.find((t) => t.id === transactionId);
    if (!tx) return { paid: false };
    if (tx.status === 'paid') return { paid: true, transaction: tx };

    const qrisCheck = await verifyQRISStatus(tx.qris_id || '', tx.trx_id, tx.final_amount);
    if (qrisCheck.paid) {
      const durationMonths = tx.cycle === 'annual' ? 12 : 1;
      grantProAccess(tx.user_id, durationMonths, tx.cycle);

      const updatedTx: PaymentTransaction = {
        ...tx,
        status: 'paid',
        paid_at: new Date().toISOString(),
      };
      setTransactions((prev) => prev.map((t) => (t.id === transactionId ? updatedTx : t)));
      return { paid: true, transaction: updatedTx };
    }
    return { paid: false, transaction: tx };
  };

  const simulatePaymentSuccess = (transactionId: string) => {
    const tx = transactions.find((t) => t.id === transactionId);
    if (!tx) return;

    const durationMonths = tx.cycle === 'annual' ? 12 : 1;
    grantProAccess(tx.user_id, durationMonths, tx.cycle);

    const updatedTx: PaymentTransaction = {
      ...tx,
      status: 'paid',
      paid_at: new Date().toISOString(),
    };
    setTransactions((prev) => prev.map((t) => (t.id === transactionId ? updatedTx : t)));
  };

  const addVoucher = (v: Voucher) => setVouchers((prev) => [v, ...prev]);
  const updateVoucher = (id: string, data: Partial<Voucher>) =>
    setVouchers((prev) => prev.map((v) => (v.id === id ? { ...v, ...data } : v)));
  const deleteVoucher = (id: string) => setVouchers((prev) => prev.filter((v) => v.id !== id));
  const toggleVoucherStatus = (id: string) =>
    setVouchers((prev) => prev.map((v) => (v.id === id ? { ...v, is_active: !v.is_active } : v)));

  // Helper to add XP to user
  const awardXP = (userId: string, points: number) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === userId ? { ...u, xp_points: u.xp_points + points } : u))
    );
  };

  // Helper to award a badge if not already owned
  const awardBadge = (userId: string, badgeId: string) => {
    setUserBadges((prev) => {
      const exists = prev.some((ub) => ub.user_id === userId && ub.badge_id === badgeId);
      if (exists) return prev;
      return [
        ...prev,
        {
          id: `ub-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
          user_id: userId,
          badge_id: badgeId,
          earned_at: new Date().toISOString(),
        },
      ];
    });
  };

  const switchUser = (userId: string) => {
    const target = users.find((u) => u.id === userId);
    if (target) {
      setCurrentUserId(userId);
    }
  };

  const updateUserProfile = (data: Partial<User>) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === currentUser.id ? { ...u, ...data, updated_at: new Date().toISOString() } : u))
    );
  };

  // BUSINESS RULE: Foundation First (PRD & ERD section 5.1 & Catatan Implementasi)
  const canEnrollInPath = (pathId: string): { allowed: boolean; reason?: string } => {
    const targetPath = learningPaths.find((p) => p.id === pathId);
    if (!targetPath) return { allowed: false, reason: 'Learning path tidak ditemukan.' };

    if (targetPath.layer_type === 'foundation' || !targetPath.prerequisite_path_id) {
      return { allowed: true };
    }

    // Check if prerequisite path is completed
    const prereqEnrollment = enrollments.find(
      (e) => e.user_id === currentUser.id && e.learning_path_id === targetPath.prerequisite_path_id
    );

    const isPrereqDone = prereqEnrollment && prereqEnrollment.status === 'completed';
    if (!isPrereqDone) {
      return {
        allowed: false,
        reason:
          'Prinsip Utama CherryEdu: Anda wajib menyelesaikan Foundation Layer ("Kopi dari Hulu ke Hilir") terlebih dahulu sebelum mengambil spesialisasi!',
      };
    }

    return { allowed: true };
  };

  const enrollInPath = (pathId: string, bypassPrerequisite: boolean = false) => {
    const check = canEnrollInPath(pathId);
    if (!check.allowed && !bypassPrerequisite) {
      return { success: false, message: check.reason || 'Tidak memenuhi prasyarat.' };
    }

    // Check existing
    const existing = enrollments.find((e) => e.user_id === currentUser.id && e.learning_path_id === pathId);
    if (existing) {
      return { success: true, message: 'Anda sudah terdaftar di learning path ini.' };
    }

    const newEnrollment: Enrollment = {
      id: `enr-${Date.now()}`,
      user_id: currentUser.id,
      learning_path_id: pathId,
      status: 'active',
      progress_percent: 0,
      enrolled_at: new Date().toISOString(),
      completed_at: null,
      last_accessed_at: new Date().toISOString(),
    };

    setEnrollments((prev) => [...prev, newEnrollment]);
    return { success: true, message: 'Berhasil mendaftar ke Learning Path!' };
  };

  const isLessonCompleted = (lessonId: string): boolean => {
    return userProgress.some(
      (p) => p.user_id === currentUser.id && p.lesson_id === lessonId && p.status === 'completed'
    );
  };

  const getPathProgress = (pathId: string): number => {
    const pathModules = modules.filter((m) => m.learning_path_id === pathId);
    const moduleIds = pathModules.map((m) => m.id);
    const pathLessons = lessons.filter((l) => moduleIds.includes(l.module_id));

    if (pathLessons.length === 0) return 0;

    const completedCount = pathLessons.filter((l) => isLessonCompleted(l.id)).length;
    return Math.round((completedCount / pathLessons.length) * 100);
  };

  const isPathCompleted = (pathId: string): boolean => {
    const enrollment = enrollments.find(
      (e) => e.user_id === currentUser.id && e.learning_path_id === pathId
    );
    return enrollment?.status === 'completed' || getPathProgress(pathId) === 100;
  };

  const markLessonComplete = (lessonId: string, timeSpentSeconds: number = 300) => {
    const now = new Date().toISOString();
    const existing = userProgress.find((p) => p.user_id === currentUser.id && p.lesson_id === lessonId);

    if (existing && existing.status === 'completed') {
      return; // already completed
    }

    if (existing) {
      setUserProgress((prev) =>
        prev.map((p) =>
          p.id === existing.id
            ? { ...p, status: 'completed', time_spent_seconds: p.time_spent_seconds + timeSpentSeconds, completed_at: now, updated_at: now }
            : p
        )
      );
    } else {
      const newProg: UserProgress = {
        id: `prog-${Date.now()}`,
        user_id: currentUser.id,
        lesson_id: lessonId,
        status: 'completed',
        time_spent_seconds: timeSpentSeconds,
        completed_at: now,
        updated_at: now,
      };
      setUserProgress((prev) => [...prev, newProg]);
    }

    // Award +25 XP
    awardXP(currentUser.id, 25);

    // Update parent learning path progress
    const lesson = lessons.find((l) => l.id === lessonId);
    if (lesson) {
      const mod = modules.find((m) => m.id === lesson.module_id);
      if (mod) {
        const pathId = mod.learning_path_id;
        const progress = getPathProgress(pathId);

        setEnrollments((prev) =>
          prev.map((e) =>
            e.user_id === currentUser.id && e.learning_path_id === pathId
              ? { ...e, progress_percent: progress, last_accessed_at: now }
              : e
          )
        );
      }
    }
  };

  const submitQuiz = (
    quizId: string,
    answers: Record<string, string>
  ): { score: number; passed: boolean; certificateEarned?: Certificate; xpEarned: number } => {
    const quiz = quizzes.find((q) => q.id === quizId);
    if (!quiz) return { score: 0, passed: false, xpEarned: 0 };

    const quizQuestions = questions.filter((q) => q.quiz_id === quizId);
    let correctCount = 0;

    quizQuestions.forEach((q) => {
      const chosenAnswerId = answers[q.id];
      const correctAnswer = q.answers.find((a) => a.is_correct);
      if (chosenAnswerId && correctAnswer && chosenAnswerId === correctAnswer.id) {
        correctCount++;
      }
    });

    const score = Math.round((correctCount / (quizQuestions.length || 1)) * 100);
    const passed = score >= quiz.passing_score;

    // Record attempt
    const attempt: QuizAttempt = {
      id: `att-${Date.now()}`,
      user_id: currentUser.id,
      quiz_id: quizId,
      score,
      passed,
      answers_snapshot: answers,
      attempt_number: 1,
      attempted_at: new Date().toISOString(),
    };
    setQuizAttempts((prev) => [...prev, attempt]);

    let xp = 0;
    if (passed) {
      xp += 50;
      if (score === 100) {
        xp += 50; // Total 100 XP for perfect score
        awardBadge(currentUser.id, 'badge-perfect-score');
      }
      awardXP(currentUser.id, xp);
    }

    // Check if final exam passed -> generate certificate!
    let newCert: Certificate | undefined = undefined;
    if (passed && quiz.quiz_scope === 'final_exam' && quiz.learning_path_id) {
      const path = learningPaths.find((p) => p.id === quiz.learning_path_id);
      const token = `che-${currentUser.id.replace('user-', '')}-${Date.now().toString(36)}`;
      const certNo = `CHE-2026-${(path?.slug || 'PATH').toUpperCase().replace(/-/g, '')}-${Math.floor(
        100000 + Math.random() * 900000
      )}`;

      newCert = {
        id: `cert-${Date.now()}`,
        user_id: currentUser.id,
        learning_path_id: quiz.learning_path_id,
        certificate_number: certNo,
        certificate_url: `/verify/${token}`,
        share_token: token,
        issued_at: new Date().toISOString(),
        user_name: currentUser.name,
        path_title: path?.title,
        grade_text: score >= 90 ? `Distinction (${score}%)` : `Pass with Merit (${score}%)`,
      };

      setCertificates((prev) => [...prev, newCert!]);

      // Update enrollment to completed
      setEnrollments((prev) =>
        prev.map((e) =>
          e.user_id === currentUser.id && e.learning_path_id === quiz.learning_path_id
            ? { ...e, status: 'completed', progress_percent: 100, completed_at: new Date().toISOString() }
            : e
        )
      );

      // Award badge according to path
      if (path?.layer_type === 'foundation') {
        awardBadge(currentUser.id, 'badge-foundation');
      } else if (path?.target_role === 'barista') {
        awardBadge(currentUser.id, 'badge-barista-ready');
      } else if (path?.target_role === 'home_brewer') {
        awardBadge(currentUser.id, 'badge-home-brewer-pro');
      }
    }

    return { score, passed, certificateEarned: newCert, xpEarned: xp };
  };

  const toggleBookmark = (lessonId: string) => {
    setBookmarks((prev) => {
      const exists = prev.some((b) => b.user_id === currentUser.id && b.lesson_id === lessonId);
      if (exists) {
        return prev.filter((b) => !(b.user_id === currentUser.id && b.lesson_id === lessonId));
      } else {
        return [
          ...prev,
          {
            id: `bm-${Date.now()}`,
            user_id: currentUser.id,
            lesson_id: lessonId,
            created_at: new Date().toISOString(),
          },
        ];
      }
    });
  };

  const isBookmarked = (lessonId: string): boolean => {
    return bookmarks.some((b) => b.user_id === currentUser.id && b.lesson_id === lessonId);
  };

  const createPost = (title: string, content: string, category: ForumCategory): Post => {
    const newPost: Post = {
      id: `post-${Date.now()}`,
      user_id: currentUser.id,
      title,
      content,
      category,
      likes_count: 0,
      comments_count: 0,
      is_pinned: false,
      created_at: new Date().toISOString(),
      author_name: currentUser.name,
      author_avatar: currentUser.avatar_url,
      author_role: currentUser.role,
      author_coffee_role: currentUser.coffee_role,
    };

    setPosts((prev) => [newPost, ...prev]);
    awardXP(currentUser.id, 15);
    awardBadge(currentUser.id, 'badge-community-voice');
    return newPost;
  };

  const createComment = (postId: string, content: string, parentCommentId: string | null = null): Comment => {
    const newComment: Comment = {
      id: `comm-${Date.now()}`,
      post_id: postId,
      user_id: currentUser.id,
      parent_comment_id: parentCommentId,
      content,
      is_expert_answer: currentUser.role === 'expert',
      likes_count: 0,
      created_at: new Date().toISOString(),
      author_name: currentUser.name,
      author_avatar: currentUser.avatar_url,
      author_role: currentUser.role,
      author_coffee_role: currentUser.coffee_role,
    };

    setComments((prev) => [...prev, newComment]);
    setPosts((prev) =>
      prev.map((p) => (p.id === postId ? { ...p, comments_count: p.comments_count + 1 } : p))
    );
    awardXP(currentUser.id, 10);
    return newComment;
  };

  const toggleLike = (targetId: string, targetType: 'post' | 'comment') => {
    const exists = likes.some(
      (l) => l.user_id === currentUser.id && l.target_id === targetId && l.target_type === targetType
    );

    if (exists) {
      setLikes((prev) =>
        prev.filter((l) => !(l.user_id === currentUser.id && l.target_id === targetId && l.target_type === targetType))
      );
      if (targetType === 'post') {
        setPosts((prev) =>
          prev.map((p) => (p.id === targetId ? { ...p, likes_count: Math.max(0, p.likes_count - 1) } : p))
        );
      } else {
        setComments((prev) =>
          prev.map((c) => (c.id === targetId ? { ...c, likes_count: Math.max(0, c.likes_count - 1) } : c))
        );
      }
    } else {
      setLikes((prev) => [
        ...prev,
        {
          id: `lk-${Date.now()}`,
          user_id: currentUser.id,
          target_id: targetId,
          target_type: targetType,
          created_at: new Date().toISOString(),
        },
      ]);
      if (targetType === 'post') {
        setPosts((prev) => prev.map((p) => (p.id === targetId ? { ...p, likes_count: p.likes_count + 1 } : p)));
      } else {
        setComments((prev) => prev.map((c) => (c.id === targetId ? { ...c, likes_count: c.likes_count + 1 } : c)));
      }
    }
  };

  const isLiked = (targetId: string): boolean => {
    return likes.some((l) => l.user_id === currentUser.id && l.target_id === targetId);
  };

  const applyForJob = (jobId: string, coverLetter: string) => {
    const job = jobListings.find((j) => j.id === jobId);
    if (!job) return { success: false, message: 'Lowongan tidak ditemukan.' };

    const userCerts = certificates.filter((c) => c.user_id === currentUser.id);
    const hasCert = userCerts.length > 0;

    if (job.requires_certificate && !hasCert) {
      return {
        success: false,
        message: 'Lowongan ini mensyaratkan Sertifikat CherryEdu! Selesaikan Foundation atau Barista Path terlebih dahulu.',
      };
    }

    const newApp: JobApplication = {
      id: `app-${Date.now()}`,
      job_listing_id: jobId,
      applicant_id: currentUser.id,
      cover_letter: coverLetter,
      status: 'applied',
      applied_at: new Date().toISOString(),
      applicant_name: currentUser.name,
      applicant_email: currentUser.email,
      applicant_coffee_role: currentUser.coffee_role,
      has_cherry_cert: hasCert,
      certificate_number: hasCert ? userCerts[0].certificate_number : undefined,
    };

    setJobApplications((prev) => [...prev, newApp]);
    awardXP(currentUser.id, 20);
    awardBadge(currentUser.id, 'badge-job-seeker');
    return { success: true, message: 'Lamaran Anda berhasil dikirim ke coffee shop!' };
  };

  const updateApplicationStatus = (applicationId: string, newStatus: JobApplication['status']) => {
    setJobApplications((prev) =>
      prev.map((app) => (app.id === applicationId ? { ...app, status: newStatus } : app))
    );
  };

  const createJobListing = (job: Omit<JobListing, 'id' | 'created_at' | 'employer_id'>): JobListing => {
    const newJob: JobListing = {
      ...job,
      id: `job-${Date.now()}`,
      employer_id: currentUser.id,
      created_at: new Date().toISOString(),
    };
    setJobListings((prev) => [newJob, ...prev]);
    return newJob;
  };

  const getCertificateByToken = (token: string): Certificate | undefined => {
    return certificates.find((c) => c.share_token.toLowerCase() === token.toLowerCase());
  };

  const getUserCertificates = (userId: string = currentUser.id): Certificate[] => {
    return certificates.filter((c) => c.user_id === userId);
  };

  const getUserBadges = (userId: string = currentUser.id): (Badge & { earned_at: string })[] => {
    const owned = userBadges.filter((ub) => ub.user_id === userId);
    return owned
      .map((ub) => {
        const badge = badges.find((b) => b.id === ub.badge_id);
        if (!badge) return null;
        return { ...badge, earned_at: ub.earned_at };
      })
      .filter(Boolean) as (Badge & { earned_at: string })[];
  };

  const updateLesson = (lessonId: string, data: Partial<Lesson>) => {
    setLessons((prev) => prev.map((l) => (l.id === lessonId ? { ...l, ...data } : l)));
  };

  const addLesson = (lesson: Lesson) => {
    setLessons((prev) => [...prev, lesson]);
  };

  const deleteLesson = (lessonId: string) => {
    setLessons((prev) => prev.filter((l) => l.id !== lessonId));
  };

  const updateLearningPath = (pathId: string, data: Partial<LearningPath>) => {
    setLearningPaths((prev) => prev.map((p) => (p.id === pathId ? { ...p, ...data } : p)));
  };

  const addLearningPath = (path: LearningPath) => {
    setLearningPaths((prev) => [...prev, path]);
  };

  const deleteLearningPath = (pathId: string) => {
    setLearningPaths((prev) => prev.filter((p) => p.id !== pathId));
  };

  const updateLandingPageConfig = (config: Partial<LandingPageConfig>) => {
    setLandingPageConfig((prev) => ({
      ...prev,
      ...config,
      hero: config.hero ? { ...prev.hero, ...config.hero } : prev.hero,
      manifesto: config.manifesto ? { ...prev.manifesto, ...config.manifesto } : prev.manifesto,
      catalog: config.catalog ? { ...prev.catalog, ...config.catalog } : prev.catalog,
      tools: config.tools ? { ...prev.tools, ...config.tools } : prev.tools,
      comparison: config.comparison ? { ...prev.comparison, ...config.comparison } : prev.comparison,
      bottomCta: config.bottomCta ? { ...prev.bottomCta, ...config.bottomCta } : prev.bottomCta,
    }));
  };

  const updateSitePageConfig = (pageId: string, config: Partial<SitePageConfig>) => {
    setSitePages((prev) => {
      const current = prev[pageId] || DEFAULT_SITE_PAGES[pageId] || {
        id: pageId,
        slug: `/${pageId}`,
        name: pageId,
        seoTitle: pageId,
        seoDescription: '',
        sections: [],
      };
      const updated = {
        ...prev,
        [pageId]: {
          ...current,
          ...config,
          sections: config.sections || current.sections,
        },
      };
      if (pageId === 'home') {
        const homeSections = config.sections || current.sections;
        setLandingPageConfig((prevLp) => ({
          ...prevLp,
          sections: homeSections,
        }));
      }
      return updated;
    });
  };

  const resetAllData = () => {
    localStorage.removeItem(STORAGE_KEY);
    setUsers(SEED_USERS);
    setCurrentUserId('guest');
    setLearningPaths(SEED_PATHS);
    setModules(SEED_MODULES);
    setLessons(SEED_LESSONS);
    setQuizzes(SEED_QUIZZES);
    setQuestions(SEED_QUESTIONS);
    setLandingPageConfig(DEFAULT_LANDING_CONFIG);
    setSitePages(DEFAULT_SITE_PAGES);
    setEnrollments(SEED_ENROLLMENTS);
    setCertificates(SEED_CERTIFICATES);
    setPosts(SEED_POSTS);
    setComments(SEED_COMMENTS);
    setJobListings(SEED_JOBS);
    setJobApplications(SEED_JOB_APPLICATIONS);
    setBookmarks([]);
  };

  return (
    <CherryEduContext.Provider
      value={{
        currentUser,
        isAuthenticated,
        isGuest,
        authLoading,
        users,
        learningPaths,
        modules,
        lessons,
        quizzes,
        questions,
        enrollments,
        userProgress,
        quizAttempts,
        certificates,
        badges,
        userBadges,
        posts,
        comments,
        likes,
        jobListings,
        jobApplications,
        bookmarks,
        transactions,
        vouchers,
        isPro,
        toolUsageCount,
        remainingToolQuota,
        isToolAllowed,
        recordToolUsage,
        applyVoucher,
        createPaymentTransaction,
        checkPaymentStatus,
        simulatePaymentSuccess,
        grantProAccess,
        revokeProAccess,
        addVoucher,
        updateVoucher,
        deleteVoucher,
        toggleVoucherStatus,
        isLessonAccessible,
        isModuleAccessible,
        landingPageConfig,
        updateLandingPageConfig,
        sitePages,
        updateSitePageConfig,
        updateLesson,
        addLesson,
        deleteLesson,
        updateLearningPath,
        addLearningPath,
        deleteLearningPath,
        switchUser,
        updateUserProfile,
        awardXP: (points: number) => awardXP(currentUser.id, points),
        enrollInPath,
        markLessonComplete,
        isLessonCompleted,
        getPathProgress,
        isPathCompleted,
        canEnrollInPath,
        submitQuiz,
        toggleBookmark,
        isBookmarked,
        createPost,
        createComment,
        toggleLike,
        isLiked,
        applyForJob,
        updateApplicationStatus,
        createJobListing,
        getCertificateByToken,
        getUserCertificates,
        getUserBadges,
        resetAllData,
      }}
    >
      {children}
    </CherryEduContext.Provider>
  );
};

export const useCherryEdu = () => {
  const context = useContext(CherryEduContext);
  if (!context) {
    throw new Error('useCherryEdu must be used within a CherryEduProvider');
  }
  return context;
};
