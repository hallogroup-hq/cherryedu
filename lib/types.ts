// CherryEdu Data Types & Models
// Based on CherryEdu_ERD.md v2.0

export type UserPlatformRole = 'learner' | 'expert' | 'employer' | 'admin';
export type CoffeeRole = 'barista' | 'home_brewer' | 'roaster' | 'q_grader' | 'farmer' | 'consumer' | 'undecided' | 'business' | 'q_processor';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar_url: string;
  bio: string;
  role: UserPlatformRole;
  coffee_role: CoffeeRole;
  city: string;
  xp_points: number;
  streak_count: number;
  last_active_date: string;
  created_at: string;
  updated_at?: string;
}

export type PathLayerType = 'foundation' | 'specialization';
export type PathTargetRole = 'barista' | 'home_brewer' | 'roaster' | 'q_grader' | 'farmer' | 'business' | 'all' | 'q_processor';
export type PathLevel = 'beginner' | 'intermediate' | 'advanced' | 'full';

export interface LearningPath {
  id: string;
  title: string;
  slug: string;
  description: string;
  thumbnail_url: string;
  layer_type: PathLayerType;
  prerequisite_path_id: string | null;
  target_role: PathTargetRole;
  level: PathLevel;
  is_free: boolean;
  is_published: boolean;
  estimated_hours: number;
  total_modules: number;
  created_at: string;
}

export type EnrollmentStatus = 'active' | 'completed' | 'dropped';

export interface Enrollment {
  id: string;
  user_id: string;
  learning_path_id: string;
  status: EnrollmentStatus;
  progress_percent: number;
  enrolled_at: string;
  completed_at?: string | null;
  last_accessed_at: string;
}

export interface Module {
  id: string;
  learning_path_id: string;
  title: string;
  description: string;
  order_index: number;
  is_locked?: boolean;
  is_published: boolean;
  created_at: string;
}

export type ContentType = 'text' | 'video' | 'interactive';

export interface BrewRecipe {
  method: string;
  dose?: string;
  coffee_dose_grams?: number;
  water?: string;
  water_amount_ml?: number;
  ratio?: string;
  temperature?: string;
  water_temperature_celsius?: number;
  grind_size?: string;
  brew_time?: string;
  brew_time_minutes?: number;
  steps: string[];
}

export interface Lesson {
  id: string;
  module_id: string;
  title: string;
  content: string;
  content_type: ContentType;
  video_url?: string;
  duration_minutes: number;
  order_index: number;
  is_free: boolean;
  is_published: boolean;
  created_at: string;
  summary?: string;
  key_takeaways?: string[];
  brew_recipe?: BrewRecipe;
}

export type QuizScope = 'module' | 'final_exam';

export interface Quiz {
  id: string;
  module_id: string | null;
  learning_path_id: string | null;
  quiz_scope: QuizScope;
  title: string;
  description?: string;
  passing_score: number;
  time_limit_minutes: number;
  max_attempts?: number;
  created_at: string;
}

export type QuestionType = 'multiple_choice' | 'true_false';

export interface Answer {
  id: string;
  question_id?: string;
  answer_text: string;
  is_correct: boolean;
  order_index?: number;
}

export interface Question {
  id: string;
  quiz_id: string;
  question_text: string;
  question_type: QuestionType;
  image_url?: string;
  order_index: number;
  answers: Answer[];
  explanation?: string;
  points?: number;
}

export type ProgressStatus = 'not_started' | 'in_progress' | 'completed';

export interface UserProgress {
  id: string;
  user_id: string;
  lesson_id: string;
  status: ProgressStatus;
  time_spent_seconds: number;
  completed_at?: string | null;
  updated_at: string;
}

export interface QuizAttempt {
  id: string;
  user_id: string;
  quiz_id: string;
  score: number;
  passed: boolean;
  answers_snapshot: Record<string, string>; // question_id -> answer_id
  attempt_number: number;
  attempted_at: string;
}

export interface Certificate {
  id: string;
  user_id: string;
  learning_path_id: string;
  certificate_number: string;
  certificate_url: string;
  share_token: string;
  issued_at: string;
  // Denormalized fields for quick display & verification
  user_name?: string;
  path_title?: string;
  grade_text?: string;
}

export type BadgeTriggerType =
  | 'complete_path'
  | 'complete_module'
  | 'quiz_perfect'
  | 'streak'
  | 'first_post'
  | 'first_apply';

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon_url: string;
  trigger_type: BadgeTriggerType;
  trigger_value: number;
}

export interface UserBadge {
  id: string;
  user_id: string;
  badge_id: string;
  earned_at: string;
}

export type ForumCategory =
  | 'barista'
  | 'home_brewer'
  | 'roasting'
  | 'processing'
  | 'agronomy'
  | 'general';

export interface Post {
  id: string;
  user_id: string;
  title: string;
  content: string;
  category: ForumCategory;
  likes_count: number;
  comments_count: number;
  is_pinned: boolean;
  created_at: string;
  updated_at?: string;
  // UI helpers
  author_name?: string;
  author_avatar?: string;
  author_role?: UserPlatformRole;
  author_coffee_role?: CoffeeRole;
}

export interface Comment {
  id: string;
  post_id: string;
  user_id: string;
  parent_comment_id: string | null;
  content: string;
  is_expert_answer: boolean;
  likes_count: number;
  created_at: string;
  // UI helpers
  author_name?: string;
  author_avatar?: string;
  author_role?: UserPlatformRole;
  author_coffee_role?: CoffeeRole;
  replies?: Comment[];
}

export interface Like {
  id: string;
  user_id: string;
  target_id: string;
  target_type: 'post' | 'comment';
  created_at: string;
}

export type JobType = 'full_time' | 'part_time' | 'freelance';
export type JobRoleType = 'barista' | 'roaster' | 'q_grader' | 'manager' | 'other';

export interface JobListing {
  id: string;
  employer_id: string;
  company_name: string;
  company_logo?: string;
  title: string;
  description: string;
  location: string;
  city: string;
  job_type: JobType;
  role_type: JobRoleType;
  salary_range: string;
  requires_certificate: boolean;
  is_active: boolean;
  created_at: string;
  expires_at: string;
}

export type ApplicationStatus = 'applied' | 'reviewed' | 'shortlisted' | 'rejected' | 'hired';

export interface JobApplication {
  id: string;
  job_listing_id: string;
  applicant_id: string;
  cover_letter: string;
  status: ApplicationStatus;
  applied_at: string;
  updated_at?: string;
  // UI helpers
  applicant_name?: string;
  applicant_email?: string;
  applicant_coffee_role?: CoffeeRole;
  has_cherry_cert?: boolean;
  certificate_number?: string;
}

export interface Bookmark {
  id: string;
  user_id: string;
  lesson_id: string;
  created_at: string;
}

export type PageSectionType =
  | 'hero'
  | 'manifesto'
  | 'catalog'
  | 'tools'
  | 'comparison'
  | 'bottomCta'
  | 'banner'
  | 'text'
  | 'image'
  | 'video'
  | 'cards'
  | 'cta'
  | 'testimonial';

export interface PageSectionItem {
  id: string;
  type: PageSectionType;
  title: string;
  enabled: boolean;
  data: Record<string, any>;
}

export interface LandingPageConfig {
  sections?: PageSectionItem[];
  hero: {
    headline: string;
    description: string;
    primaryCtaText: string;
    primaryCtaLink: string;
    secondaryCtaText: string;
    secondaryCtaLink: string;
    specs: { label: string; value: string }[];
    cardTagline: string;
    cardTitle: string;
    cardVol: string;
    cardImage: string;
    cardAltitude: string;
    cardModules: { code: string; title: string }[];
    cardCtaText: string;
    cardCtaLink: string;
  };
  manifesto: {
    eyebrow: string;
    heading: string;
    quote: string;
    paragraph: string;
    layer1Badge: string;
    layer1Role: string;
    layer1Title: string;
    layer1Desc: string;
    layer2Badge: string;
    layer2Role: string;
    layer2Title: string;
    layer2Desc: string;
  };
  catalog: {
    eyebrow: string;
    heading: string;
    allCatalogText: string;
    allCatalogLink: string;
  };
  tools: {
    eyebrow: string;
    heading: string;
    description: string;
  };
  comparison: {
    eyebrow: string;
    heading: string;
    rows: {
      criteria: string;
      cherry: string;
      youtube: string;
      course: string;
    }[];
  };
  bottomCta: {
    eyebrow: string;
    heading: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
}

export interface SitePageConfig {
  id: string;
  slug: string;
  name: string;
  seoTitle: string;
  seoDescription: string;
  sections: PageSectionItem[];
}


