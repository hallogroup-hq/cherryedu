-- ==========================================================
-- CherryEdu — Supabase PostgreSQL Database Schema
-- Version: 2.0
-- Matches CherryEdu_ERD.md v2.0
-- ==========================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Enums
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

-- 1. USERS
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

-- 2. LEARNING_PATH
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
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. ENROLLMENT
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

-- 4. MODULE
CREATE TABLE modules (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    learning_path_id UUID NOT NULL REFERENCES learning_paths(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    order_index INT NOT NULL DEFAULT 1,
    is_locked BOOLEAN NOT NULL DEFAULT false,
    is_published BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. LESSON
CREATE TABLE lessons (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    module_id UUID NOT NULL REFERENCES modules(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    content_type content_type NOT NULL DEFAULT 'text',
    video_url TEXT,
    duration_minutes INT DEFAULT 10,
    order_index INT NOT NULL DEFAULT 1,
    is_free BOOLEAN NOT NULL DEFAULT true,
    is_published BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 6. QUIZ
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

-- 7. QUESTION
CREATE TABLE questions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    quiz_id UUID NOT NULL REFERENCES quizzes(id) ON DELETE CASCADE,
    question_text TEXT NOT NULL,
    question_type question_type NOT NULL DEFAULT 'multiple_choice',
    image_url TEXT,
    order_index INT NOT NULL DEFAULT 1
);

-- 8. ANSWER
CREATE TABLE answers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    question_id UUID NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
    answer_text TEXT NOT NULL,
    is_correct BOOLEAN NOT NULL DEFAULT false,
    order_index INT NOT NULL DEFAULT 1
);

-- 9. USER_PROGRESS
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

-- 10. QUIZ_ATTEMPT
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

-- 11. CERTIFICATE
CREATE TABLE certificates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    learning_path_id UUID NOT NULL REFERENCES learning_paths(id) ON DELETE CASCADE,
    certificate_number VARCHAR(100) UNIQUE NOT NULL,
    certificate_url TEXT,
    share_token VARCHAR(100) UNIQUE NOT NULL,
    issued_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 12. BADGE & USER_BADGE
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

-- 13. POST, COMMENT, LIKE
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

-- 14. JOB_LISTING & JOB_APPLICATION
CREATE TABLE job_listings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    employer_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    location VARCHAR(255) NOT NULL,
    city VARCHAR(100) NOT NULL,
    job_type job_type NOT NULL DEFAULT 'full_time',
    role_type job_role_type NOT NULL DEFAULT 'barista',
    salary_range VARCHAR(100),
    requires_certificate BOOLEAN NOT NULL DEFAULT false,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    expires_at TIMESTAMP WITH TIME ZONE
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

-- INDEXES (Recommended in ERD)
CREATE INDEX idx_enrollment_user_status ON enrollments(user_id, status);
CREATE INDEX idx_user_progress_user ON user_progress(user_id);
CREATE INDEX idx_quiz_attempt_user_quiz ON quiz_attempts(user_id, quiz_id);
CREATE INDEX idx_job_listing_city_role ON job_listings(city, role_type, is_active);
CREATE INDEX idx_posts_category_created ON posts(category, created_at DESC);
CREATE INDEX idx_learning_path_layer ON learning_paths(layer_type, target_role);
CREATE INDEX idx_certificate_share_token ON certificates(share_token);

-- ROW LEVEL SECURITY (RLS)
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE certificates ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE likes ENABLE ROW LEVEL SECURITY;

-- Public can view certificates by share_token
CREATE POLICY "Public can view valid certificates" ON certificates
    FOR SELECT USING (true);

-- Public can view published learning paths, modules, and lessons
ALTER TABLE learning_paths ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can view published paths" ON learning_paths
    FOR SELECT USING (is_published = true);

ALTER TABLE modules ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can view published modules" ON modules
    FOR SELECT USING (is_published = true);

ALTER TABLE lessons ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can view published lessons" ON lessons
    FOR SELECT USING (is_published = true);
