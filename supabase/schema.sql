-- ==========================================================
-- CherryEdu — Supabase PostgreSQL Database Schema
-- Version: 3.0
-- Matches CherryEdu_ERD.md v2.0 + Admin Dashboard Extension
-- ==========================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ==========================================================
-- ENUMS
-- ==========================================================
CREATE TYPE user_role AS ENUM ('learner', 'expert', 'employer', 'admin');
CREATE TYPE coffee_role AS ENUM ('barista', 'home_brewer', 'roaster', 'q_grader', 'farmer', 'consumer', 'undecided');
CREATE TYPE path_layer_type AS ENUM ('foundation', 'specialization');
CREATE TYPE path_target_role AS ENUM ('barista', 'home_brewer', 'roaster', 'q_grader', 'farmer', 'all');
CREATE TYPE path_level AS ENUM ('beginner', 'intermediate', 'advanced', 'full');
CREATE TYPE enrollment_status AS ENUM ('active', 'completed', 'dropped');
CREATE TYPE content_type AS ENUM ('text', 'video', 'interactive');
CREATE TYPE quiz_scope AS ENUM ('module', 'final_exam');
CREATE TYPE question_type AS ENUM ('multiple_choice', 'true_false');
CREATE TYPE progress_status AS ENUM ('not_started', 'in_progress', 'completed');
CREATE TYPE badge_trigger_type AS ENUM ('complete_path', 'complete_module', 'quiz_perfect', 'streak', 'first_post', 'first_apply');
CREATE TYPE forum_category AS ENUM ('barista', 'home_brewer', 'roasting', 'processing', 'agronomy', 'general');
CREATE TYPE target_type AS ENUM ('post', 'comment');
CREATE TYPE job_type AS ENUM ('full_time', 'part_time', 'freelance');
CREATE TYPE job_role_type AS ENUM ('barista', 'roaster', 'q_grader', 'manager', 'other');
CREATE TYPE application_status AS ENUM ('applied', 'reviewed', 'shortlisted', 'rejected', 'hired');
CREATE TYPE lesson_block_type AS ENUM ('text', 'image', 'video', 'quote', 'callout', 'divider', 'embed');
CREATE TYPE page_status AS ENUM ('draft', 'published');
CREATE TYPE lesson_status AS ENUM ('draft', 'published', 'archived');
CREATE TYPE job_status AS ENUM ('draft', 'open', 'closed', 'expired');
CREATE TYPE notification_type AS ENUM ('system', 'content', 'user', 'job', 'certificate');

-- ==========================================================
-- 1. USERS (linked to Supabase Auth via id)
-- ==========================================================
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255),
    avatar_url TEXT,
    bio TEXT,
    role user_role NOT NULL DEFAULT 'learner',
    coffee_role coffee_role NOT NULL DEFAULT 'undecided',
    city VARCHAR(100),
    xp_points INT NOT NULL DEFAULT 0,
    streak_count INT NOT NULL DEFAULT 0,
    last_active_date DATE DEFAULT CURRENT_DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ==========================================================
-- 2. COLLABORATORS (Guest instructors & content creators)
-- ==========================================================
CREATE TABLE collaborators (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    bio TEXT,
    photo_url TEXT,
    achievements JSONB NOT NULL DEFAULT '[]'::jsonb,
    instagram VARCHAR(255),
    website TEXT,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ==========================================================
-- 3. LEARNING_PATHS
-- ==========================================================
CREATE TABLE learning_paths (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    description TEXT,
    thumbnail_url TEXT,
    layer_type path_layer_type NOT NULL DEFAULT 'specialization',
    prerequisite_path_id UUID REFERENCES learning_paths(id) ON DELETE SET NULL,
    target_role path_target_role NOT NULL DEFAULT 'all',
    level path_level NOT NULL DEFAULT 'full',
    is_free BOOLEAN NOT NULL DEFAULT true,
    is_published BOOLEAN NOT NULL DEFAULT true,
    estimated_hours INT DEFAULT 10,
    total_modules INT DEFAULT 0,
    sort_order INT NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ==========================================================
-- 4. ENROLLMENT
-- ==========================================================
CREATE TABLE enrollments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    learning_path_id UUID NOT NULL REFERENCES learning_paths(id) ON DELETE CASCADE,
    status enrollment_status NOT NULL DEFAULT 'active',
    progress_percent INT NOT NULL DEFAULT 0,
    enrolled_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    completed_at TIMESTAMP WITH TIME ZONE,
    last_accessed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    CONSTRAINT unique_user_enrollment UNIQUE (user_id, learning_path_id)
);

-- ==========================================================
-- 5. MODULE
-- ==========================================================
CREATE TABLE modules (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    learning_path_id UUID NOT NULL REFERENCES learning_paths(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    order_index INT NOT NULL DEFAULT 1,
    sort_order INT NOT NULL DEFAULT 0,
    is_locked BOOLEAN NOT NULL DEFAULT false,
    is_published BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ==========================================================
-- 6. LESSON
-- ==========================================================
CREATE TABLE lessons (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    module_id UUID NOT NULL REFERENCES modules(id) ON DELETE CASCADE,
    collaborator_id UUID REFERENCES collaborators(id) ON DELETE SET NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL DEFAULT '',
    content_type content_type NOT NULL DEFAULT 'text',
    video_url TEXT,
    duration_minutes INT DEFAULT 10,
    order_index INT NOT NULL DEFAULT 1,
    sort_order INT NOT NULL DEFAULT 0,
    status lesson_status NOT NULL DEFAULT 'draft',
    is_free BOOLEAN NOT NULL DEFAULT true,
    is_published BOOLEAN NOT NULL DEFAULT false,
    summary TEXT,
    key_takeaways JSONB NOT NULL DEFAULT '[]'::jsonb,
    brew_recipe JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ==========================================================
-- 7. LESSON_BLOCKS (Rich content blocks within a lesson)
-- ==========================================================
CREATE TABLE lesson_blocks (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    lesson_id UUID NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
    type lesson_block_type NOT NULL DEFAULT 'text',
    content JSONB NOT NULL DEFAULT '{}'::jsonb,
    order_index INT NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ==========================================================
-- 8. PAGES (Static CMS pages - homepage, about, etc.)
-- ==========================================================
CREATE TABLE pages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug VARCHAR(255) UNIQUE NOT NULL,
    title VARCHAR(255) NOT NULL,
    blocks JSONB NOT NULL DEFAULT '[]'::jsonb,
    status page_status NOT NULL DEFAULT 'draft',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ==========================================================
-- 9. ADMIN_NOTIFICATIONS
-- ==========================================================
CREATE TABLE admin_notifications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    type notification_type NOT NULL DEFAULT 'system',
    message TEXT NOT NULL,
    is_read BOOLEAN NOT NULL DEFAULT false,
    metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ==========================================================
-- 10. QUIZ
-- ==========================================================
CREATE TABLE quizzes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    module_id UUID REFERENCES modules(id) ON DELETE CASCADE,
    learning_path_id UUID REFERENCES learning_paths(id) ON DELETE CASCADE,
    quiz_scope quiz_scope NOT NULL DEFAULT 'module',
    title VARCHAR(255) NOT NULL,
    passing_score INT NOT NULL DEFAULT 75,
    time_limit_minutes INT DEFAULT 15,
    max_attempts INT DEFAULT 3,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    CONSTRAINT chk_quiz_parent CHECK (
        (quiz_scope = 'module' AND module_id IS NOT NULL AND learning_path_id IS NULL) OR
        (quiz_scope = 'final_exam' AND learning_path_id IS NOT NULL AND module_id IS NULL)
    )
);

-- ==========================================================
-- 11. QUESTION
-- ==========================================================
CREATE TABLE questions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    quiz_id UUID NOT NULL REFERENCES quizzes(id) ON DELETE CASCADE,
    question_text TEXT NOT NULL,
    question_type question_type NOT NULL DEFAULT 'multiple_choice',
    image_url TEXT,
    order_index INT NOT NULL DEFAULT 1,
    explanation TEXT
);

-- ==========================================================
-- 12. ANSWER
-- ==========================================================
CREATE TABLE answers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    question_id UUID NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
    answer_text TEXT NOT NULL,
    is_correct BOOLEAN NOT NULL DEFAULT false,
    order_index INT NOT NULL DEFAULT 1
);

-- ==========================================================
-- 13. USER_PROGRESS
-- ==========================================================
CREATE TABLE user_progress (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    lesson_id UUID NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
    status progress_status NOT NULL DEFAULT 'not_started',
    time_spent_seconds INT NOT NULL DEFAULT 0,
    completed_at TIMESTAMP WITH TIME ZONE,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    CONSTRAINT unique_user_lesson UNIQUE (user_id, lesson_id)
);

-- ==========================================================
-- 14. QUIZ_ATTEMPT
-- ==========================================================
CREATE TABLE quiz_attempts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    quiz_id UUID NOT NULL REFERENCES quizzes(id) ON DELETE CASCADE,
    score INT NOT NULL,
    passed BOOLEAN NOT NULL DEFAULT false,
    answers_snapshot JSONB NOT NULL DEFAULT '{}'::jsonb,
    attempt_number INT NOT NULL DEFAULT 1,
    attempted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ==========================================================
-- 15. CERTIFICATE
-- ==========================================================
CREATE TABLE certificates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    learning_path_id UUID NOT NULL REFERENCES learning_paths(id) ON DELETE CASCADE,
    certificate_number VARCHAR(100) UNIQUE NOT NULL,
    certificate_url TEXT,
    share_token VARCHAR(100) UNIQUE NOT NULL,
    is_revoked BOOLEAN NOT NULL DEFAULT false,
    revoked_at TIMESTAMP WITH TIME ZONE,
    revoked_reason TEXT,
    issued_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_name VARCHAR(255),
    path_title VARCHAR(255),
    grade_text VARCHAR(50)
);

-- ==========================================================
-- 16. BADGE & USER_BADGE
-- ==========================================================
CREATE TABLE badges (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) NOT NULL,
    description TEXT,
    icon_url TEXT,
    trigger_type badge_trigger_type NOT NULL,
    trigger_value INT NOT NULL DEFAULT 1
);

CREATE TABLE user_badges (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    badge_id UUID NOT NULL REFERENCES badges(id) ON DELETE CASCADE,
    earned_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    CONSTRAINT unique_user_badge UNIQUE (user_id, badge_id)
);

-- ==========================================================
-- 17. POST, COMMENT, LIKE
-- ==========================================================
CREATE TABLE posts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    category forum_category NOT NULL DEFAULT 'general',
    likes_count INT NOT NULL DEFAULT 0,
    comments_count INT NOT NULL DEFAULT 0,
    is_pinned BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE comments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    post_id UUID NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    parent_comment_id UUID REFERENCES comments(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    is_expert_answer BOOLEAN NOT NULL DEFAULT false,
    likes_count INT NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE likes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    target_id UUID NOT NULL,
    target_type target_type NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    CONSTRAINT unique_user_target_like UNIQUE (user_id, target_id, target_type)
);

-- ==========================================================
-- 18. JOB_LISTING & JOB_APPLICATION
-- ==========================================================
CREATE TABLE job_listings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    employer_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    company_name VARCHAR(255),
    company_logo TEXT,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    location VARCHAR(255) NOT NULL,
    city VARCHAR(100) NOT NULL,
    job_type job_type NOT NULL DEFAULT 'full_time',
    role_type job_role_type NOT NULL DEFAULT 'barista',
    salary_range VARCHAR(100),
    requires_certificate BOOLEAN NOT NULL DEFAULT false,
    is_active BOOLEAN NOT NULL DEFAULT true,
    status job_status NOT NULL DEFAULT 'open',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    expires_at TIMESTAMP WITH TIME ZONE,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE job_applications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    job_listing_id UUID NOT NULL REFERENCES job_listings(id) ON DELETE CASCADE,
    applicant_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    cover_letter TEXT,
    status application_status NOT NULL DEFAULT 'applied',
    applied_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    CONSTRAINT unique_job_applicant UNIQUE (job_listing_id, applicant_id)
);

-- ==========================================================
-- 19. BOOKMARK
-- ==========================================================
CREATE TABLE bookmarks (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    lesson_id UUID NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    CONSTRAINT unique_user_bookmark UNIQUE (user_id, lesson_id)
);

-- ==========================================================
-- INDEXES
-- ==========================================================
CREATE INDEX idx_learning_path_layer ON learning_paths(layer_type, target_role);
CREATE INDEX idx_learning_path_published ON learning_paths(is_published, sort_order);
CREATE INDEX idx_modules_path ON modules(learning_path_id, sort_order);
CREATE INDEX idx_lessons_module ON lessons(module_id, sort_order);
CREATE INDEX idx_lessons_status ON lessons(status, is_published);
CREATE INDEX idx_lessons_collaborator ON lessons(collaborator_id);
CREATE INDEX idx_lesson_blocks_lesson ON lesson_blocks(lesson_id, order_index);
CREATE INDEX idx_enrollment_user_status ON enrollments(user_id, status);
CREATE INDEX idx_enrollment_path ON enrollments(learning_path_id);
CREATE INDEX idx_user_progress_user ON user_progress(user_id);
CREATE INDEX idx_user_progress_lesson ON user_progress(lesson_id);
CREATE INDEX idx_quiz_attempt_user_quiz ON quiz_attempts(user_id, quiz_id);
CREATE INDEX idx_questions_quiz ON questions(quiz_id, order_index);
CREATE INDEX idx_answers_question ON answers(question_id, order_index);
CREATE INDEX idx_certificate_share_token ON certificates(share_token);
CREATE INDEX idx_certificate_user ON certificates(user_id);
CREATE INDEX idx_certificate_revoked ON certificates(is_revoked);
CREATE INDEX idx_job_listing_city_role ON job_listings(city, role_type, is_active);
CREATE INDEX idx_job_listing_status ON job_listings(status, expires_at);
CREATE INDEX idx_job_applications_listing ON job_applications(job_listing_id, status);
CREATE INDEX idx_posts_category_created ON posts(category, created_at DESC);
CREATE INDEX idx_posts_pinned ON posts(is_pinned, created_at DESC);
CREATE INDEX idx_comments_post ON comments(post_id, created_at);
CREATE INDEX idx_admin_notifications_read ON admin_notifications(is_read, created_at DESC);
CREATE INDEX idx_collaborators_slug ON collaborators(slug);
CREATE INDEX idx_collaborators_active ON collaborators(is_active);
CREATE INDEX idx_pages_slug ON pages(slug);
CREATE INDEX idx_pages_status ON pages(status);

-- ==========================================================
-- ROW LEVEL SECURITY (RLS)
-- ==========================================================
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE collaborators ENABLE ROW LEVEL SECURITY;
ALTER TABLE learning_paths ENABLE ROW LEVEL SECURITY;
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE modules ENABLE ROW LEVEL SECURITY;
ALTER TABLE lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE lesson_blocks ENABLE ROW LEVEL SECURITY;
ALTER TABLE pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE quizzes ENABLE ROW LEVEL SECURITY;
ALTER TABLE questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE answers ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE certificates ENABLE ROW LEVEL SECURITY;
ALTER TABLE badges ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_badges ENABLE ROW LEVEL SECURITY;
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE likes ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_listings ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookmarks ENABLE ROW LEVEL SECURITY;

-- Helper: check admin role
CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN AS $$
    SELECT EXISTS (
        SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin'
    );
$$ LANGUAGE sql SECURITY DEFINER;

-- USERS
CREATE POLICY "Users can view own profile" ON users FOR SELECT USING (id = auth.uid());
CREATE POLICY "Admins can view all users" ON users FOR SELECT USING (is_admin());
CREATE POLICY "Users can update own profile" ON users FOR UPDATE USING (id = auth.uid());
CREATE POLICY "Admins can manage all users" ON users FOR ALL USING (is_admin());

-- COLLABORATORS
CREATE POLICY "Anyone can view active collaborators" ON collaborators FOR SELECT USING (is_active = true);
CREATE POLICY "Admins can manage collaborators" ON collaborators FOR ALL USING (is_admin());

-- LEARNING_PATHS
CREATE POLICY "Public can view published paths" ON learning_paths FOR SELECT USING (is_published = true);
CREATE POLICY "Admins can manage all paths" ON learning_paths FOR ALL USING (is_admin());

-- MODULES
CREATE POLICY "Public can view published modules" ON modules FOR SELECT USING (is_published = true);
CREATE POLICY "Admins can manage all modules" ON modules FOR ALL USING (is_admin());

-- LESSONS
CREATE POLICY "Public can view published lessons" ON lessons FOR SELECT USING (is_published = true AND status = 'published');
CREATE POLICY "Admins can manage all lessons" ON lessons FOR ALL USING (is_admin());

-- LESSON_BLOCKS
CREATE POLICY "Users can view blocks of published lessons" ON lesson_blocks FOR SELECT USING (
    EXISTS (SELECT 1 FROM lessons l WHERE l.id = lesson_id AND l.is_published = true AND l.status = 'published')
);
CREATE POLICY "Admins can manage all lesson blocks" ON lesson_blocks FOR ALL USING (is_admin());

-- PAGES
CREATE POLICY "Public can view published pages" ON pages FOR SELECT USING (status = 'published');
CREATE POLICY "Admins can manage all pages" ON pages FOR ALL USING (is_admin());

-- ADMIN_NOTIFICATIONS
CREATE POLICY "Only admins can access notifications" ON admin_notifications FOR ALL USING (is_admin());

-- QUIZZES
CREATE POLICY "Authenticated users can view quizzes" ON quizzes FOR SELECT TO authenticated USING (true);
CREATE POLICY "Admins can manage all quizzes" ON quizzes FOR ALL USING (is_admin());

-- QUESTIONS
CREATE POLICY "Authenticated users can view questions" ON questions FOR SELECT TO authenticated USING (true);
CREATE POLICY "Admins can manage questions" ON questions FOR ALL USING (is_admin());

-- ANSWERS
CREATE POLICY "Authenticated users can view answers" ON answers FOR SELECT TO authenticated USING (true);
CREATE POLICY "Admins can manage answers" ON answers FOR ALL USING (is_admin());

-- USER_PROGRESS
CREATE POLICY "Users can view own progress" ON user_progress FOR SELECT USING (user_id = auth.uid());
CREATE POLICY "Users can insert own progress" ON user_progress FOR INSERT WITH CHECK (user_id = auth.uid());
CREATE POLICY "Users can modify own progress" ON user_progress FOR UPDATE USING (user_id = auth.uid());
CREATE POLICY "Admins can view all progress" ON user_progress FOR SELECT USING (is_admin());

-- QUIZ_ATTEMPTS
CREATE POLICY "Users can view own quiz attempts" ON quiz_attempts FOR SELECT USING (user_id = auth.uid());
CREATE POLICY "Users can insert own quiz attempts" ON quiz_attempts FOR INSERT WITH CHECK (user_id = auth.uid());
CREATE POLICY "Admins can view all quiz attempts" ON quiz_attempts FOR SELECT USING (is_admin());

-- CERTIFICATES
CREATE POLICY "Public can view non-revoked certificates" ON certificates FOR SELECT USING (is_revoked = false);
CREATE POLICY "Admins can manage all certificates" ON certificates FOR ALL USING (is_admin());

-- BADGES
CREATE POLICY "Anyone can view badges" ON badges FOR SELECT USING (true);
CREATE POLICY "Admins can manage badges" ON badges FOR ALL USING (is_admin());

-- USER_BADGES
CREATE POLICY "Users can view own badges" ON user_badges FOR SELECT USING (user_id = auth.uid());
CREATE POLICY "Admins can view all user badges" ON user_badges FOR SELECT USING (is_admin());

-- POSTS
CREATE POLICY "Authenticated users can view posts" ON posts FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated users can create posts" ON posts FOR INSERT TO authenticated WITH CHECK (user_id = auth.uid());
CREATE POLICY "Users can update own posts" ON posts FOR UPDATE USING (user_id = auth.uid());
CREATE POLICY "Admins can manage all posts" ON posts FOR ALL USING (is_admin());

-- COMMENTS
CREATE POLICY "Authenticated users can view comments" ON comments FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated users can create comments" ON comments FOR INSERT TO authenticated WITH CHECK (user_id = auth.uid());
CREATE POLICY "Users can update own comments" ON comments FOR UPDATE USING (user_id = auth.uid());
CREATE POLICY "Admins can manage all comments" ON comments FOR ALL USING (is_admin());

-- LIKES
CREATE POLICY "Authenticated users can view likes" ON likes FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated users can manage own likes" ON likes FOR ALL TO authenticated USING (user_id = auth.uid());

-- JOB_LISTINGS
CREATE POLICY "Anyone can view active job listings" ON job_listings FOR SELECT USING (is_active = true AND status = 'open');
CREATE POLICY "Employers can manage own listings" ON job_listings FOR ALL USING (employer_id = auth.uid());
CREATE POLICY "Admins can manage all listings" ON job_listings FOR ALL USING (is_admin());

-- JOB_APPLICATIONS
CREATE POLICY "Users can view own applications" ON job_applications FOR SELECT USING (applicant_id = auth.uid());
CREATE POLICY "Users can submit applications" ON job_applications FOR INSERT WITH CHECK (applicant_id = auth.uid());
CREATE POLICY "Employers can view their listing applications" ON job_applications FOR SELECT USING (
    EXISTS (SELECT 1 FROM job_listings jl WHERE jl.id = job_listing_id AND jl.employer_id = auth.uid())
);
CREATE POLICY "Admins can manage all applications" ON job_applications FOR ALL USING (is_admin());

-- BOOKMARKS
CREATE POLICY "Users can manage own bookmarks" ON bookmarks FOR ALL USING (user_id = auth.uid());
CREATE POLICY "Admins can view all bookmarks" ON bookmarks FOR SELECT USING (is_admin());

-- ==========================================================
-- UPDATED_AT TRIGGER
-- ==========================================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_users_updated_at BEFORE UPDATE ON users FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER trg_collaborators_updated_at BEFORE UPDATE ON collaborators FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER trg_learning_paths_updated_at BEFORE UPDATE ON learning_paths FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER trg_modules_updated_at BEFORE UPDATE ON modules FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER trg_lessons_updated_at BEFORE UPDATE ON lessons FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER trg_lesson_blocks_updated_at BEFORE UPDATE ON lesson_blocks FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER trg_pages_updated_at BEFORE UPDATE ON pages FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER trg_posts_updated_at BEFORE UPDATE ON posts FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER trg_job_listings_updated_at BEFORE UPDATE ON job_listings FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER trg_job_applications_updated_at BEFORE UPDATE ON job_applications FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
