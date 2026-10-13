/**
 * Cherry Edu Teams — Competency & Pedagogical Gate Engine
 * Spec: 02_PRD.md Section 8, 9 & 11; 03_ERD_Technical_Architecture.md Section 3.4
 */

import {
  CompetencyState,
  CriterionResult,
  PracticalAssessment,
  ProgramStep,
  SignoffDecision,
} from '../types';

export interface CompetencyEvaluationInput {
  competencyId: string;
  hasCompletedOnlineLessons: boolean;
  latestAssessment?: PracticalAssessment | null;
  targetLevel?: number; // Default 3
}

export interface CompetencyEvaluationResult {
  competencyId: string;
  state: CompetencyState;
  isEligibleForSignoff: boolean;
  reasons: string[];
  blocker?: string | null;
}

/**
 * Pure evaluation function for competency state.
 * Prevents artificial progress: online lesson completion alone NEVER passes competency.
 */
export function evaluateCompetency(
  input: CompetencyEvaluationInput
): CompetencyEvaluationResult {
  const {
    competencyId,
    hasCompletedOnlineLessons,
    latestAssessment,
    targetLevel = 3,
  } = input;

  const reasons: string[] = [];

  // 1. Not started online theory
  if (!hasCompletedOnlineLessons) {
    return {
      competencyId,
      state: 'learning',
      isEligibleForSignoff: false,
      reasons: ['Materi teori pendukung belum diselesaikan oleh barista.'],
      blocker: 'Selesaikan materi pembelajaran dasar terlebih dahulu.',
    };
  }

  reasons.push('Materi teori pendukung telah selesai.');

  // 2. Online completed, but no practical assessment conducted yet
  if (!latestAssessment) {
    return {
      competencyId,
      state: 'awaiting_assessment',
      isEligibleForSignoff: false,
      reasons: [
        'Teori selesai. Menunggu penjadwalan dan observasi praktik oleh trainer.',
      ],
      blocker: 'Menunggu observasi praktik langsung oleh trainer.',
    };
  }

  // 3. Assessment in progress / draft
  if (latestAssessment.status === 'in_progress') {
    return {
      competencyId,
      state: 'awaiting_assessment',
      isEligibleForSignoff: false,
      reasons: ['Observasi praktik sedang berlangsung atau tersimpan sebagai draf.'],
      blocker: 'Penilaian praktik belum difinalisasi oleh trainer.',
    };
  }

  // 4. Practical assessment completed — check criteria & critical failures
  const results = latestAssessment.criterion_results || [];
  const hasCriticalFail = results.some((r) => r.critical_failure);

  if (hasCriticalFail) {
    return {
      competencyId,
      state: 'needs_practice',
      isEligibleForSignoff: false,
      reasons: [
        'Terjadi kesalahan kritis dalam observasi praktik lapangan.',
        'Diperlukan latihan terarah (remedial) sebelum penilaian ulang.',
      ],
      blocker: 'Kesalahan kritis teramati dalam praktik. Latihan ulang diperlukan.',
    };
  }

  // Check if any criterion is below the target level
  const belowThreshold = results.some((r) => r.level < targetLevel);
  if (belowThreshold) {
    return {
      competencyId,
      state: 'needs_practice',
      isEligibleForSignoff: false,
      reasons: [
        `Terdapat kriteria penilaian yang belum mencapai target level minimum (${targetLevel}).`,
      ],
      blocker: 'Belum semua kriteria mencapai standar mandiri & konsisten.',
    };
  }

  // 5. Check official signoff
  const signoff = latestAssessment.signoff;
  if (!signoff || signoff.decision !== 'competent') {
    if (signoff?.decision === 'not_yet_competent') {
      return {
        competencyId,
        state: 'needs_practice',
        isEligibleForSignoff: false,
        reasons: ['Trainer menetapkan keputusan "Belum Kompeten" pada sesi ini.'],
        blocker: signoff.reason || 'Perlu latihan tambahan.',
      };
    }

    return {
      competencyId,
      state: 'awaiting_assessment',
      isEligibleForSignoff: true,
      reasons: ['Kriteria teknis terpenuhi. Menunggu konfirmasi tanda tangan trainer.'],
      blocker: 'Menunggu validasi resmi trainer.',
    };
  }

  // 6. Fully Competent
  return {
    competencyId,
    state: 'competent',
    isEligibleForSignoff: false,
    reasons: [
      'Teori selesai.',
      'Observasi praktik memenuhi seluruh kriteria rubrik tanpa kesalahan kritis.',
      `Disahkan oleh trainer pada ${new Date(signoff.signed_at).toLocaleDateString('id-ID')}.`,
    ],
    blocker: null,
  };
}

/**
 * Validates step prerequisites: asserts that all required step IDs have been completed.
 */
export function isStepUnlocked(
  step: ProgramStep,
  completedStepIds: Set<string>
): { unlocked: boolean; missingStepIds: string[] } {
  const requires = step.gate_policy?.requires_prior_steps || [];
  const missing = requires.filter((id) => !completedStepIds.has(id));

  return {
    unlocked: missing.length === 0,
    missingStepIds: missing,
  };
}
