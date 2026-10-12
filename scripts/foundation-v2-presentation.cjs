/**
 * Explicit editorial-to-learner presentation boundary for Foundation V2.
 * Original manuscripts remain unchanged; research provenance is retained
 * only in source markdown/QA documentation, never in learner lesson HTML.
 *
 * Every lesson's appendix heading is declared explicitly. Unexpected headings
 * fail closed rather than silently including private editorial notes.
 */
'use strict';

const APPENDIX_HEADINGS = Object.freeze({
  'M01.L01': 'Catatan editorial dan referensi (bukan konten yang mengganggu pembaca)',
  'M01.L02': 'Editorial evidence',
  'M01.L03': 'Editorial references and evidence (not intended for beginner-facing uninterrupted narrative)',
  'M02.L01': 'Sumber dan QA (editor-only)',
  'M02.L02': 'Sources, provenance and review',
  'M02.L03': 'Sumber dan batasan',
  'M02.L04': 'Sources & QA',
  'M02.L05': 'Sumber dan QA',
  'M03.L01': 'Referensi dan QA',
  'M03.L02': 'Referensi dan QA',
  'M03.L03': 'Referensi dan QA',
  'M03.L04': 'Referensi dan QA',
  'M03.L05': 'Referensi dan QA',
  'M03.L06': 'Referensi dan QA',
  'M03.L07': 'Referensi dan QA',
  'M04.L01': 'Rujukan & QA internal',
  'M04.L02': 'Rujukan dan QA',
  'M04.L03': 'Referensi & QA',
  'M04.L04': 'Referensi & QA',
  'M04.L05': 'Referensi dan QA',
  'M05.L01': 'Referensi dan pemeriksaan',
  'M05.L02': 'Referensi & batasan',
  'M05.L03': 'Referensi, versi, dan batas',
  'M05.L04': 'Rujukan dan catatan',
  'M05.L05': 'Referensi & QA',
  'M05.L06': 'Referensi & batas',
  'M06.L01': 'Editorial sources & limitations',
  'M06.L02': 'Editorial source register',
  'M06.L03': 'Referensi dan batas generalisasi',
  'M06.L04': 'Referensi dan batasan',
  'M06.L05': 'Referensi dan batas penggunaan',
  'M07.L01': 'Catatan pengajar — sumber dan batasan',
  'M07.L02': 'Referensi & QA',
  'M07.L03': 'Referensi, basis dan keterbatasan',
  'M07.L04': 'Sumber dan editorial limits',
  'M07.L05': 'Sumber dan status',
});


/**
 * Inline lesson answer keys are authoring aids, not automatically visible
 * learner feedback. Collapse a standalone **Jawaban:** / **Kunci:** paragraph,
 * or the answer suffix of a one-line Q&A, into an explicit semantic solution
 * block. This is *not* a grading engine, and it never runs on legacy V1.
 */
function hideImmediateAnswers(markdown) {
  const label=/\*\*(?:Jawab(?:an)?|Kunci|Contoh jawaban|Contoh lulus|Contoh perbaikan|Pembahasan|Pilihan terbaik|Respons terbaik|Versi lebih baik|Respons yang baik)[^*:]{0,90}:[^*]*\*\*/i;
  let codeBlock=false;
  const output=[];
  for(const line of markdown.split('\n')){
    if(/^\s*```/.test(line)){codeBlock=!codeBlock;output.push(line);continue;}
    if(codeBlock){output.push(line);continue;}
    const m=label.exec(line);
    if(!m){output.push(line);continue;}
    const start=m.index;
    // Standalone answers, or answers paired with a "Q..." question on
    // the same line. Do not hide a worked example inside normal prose.
    const prefix=line.slice(0,start);
    const rest=line.slice(start).trim();
    const standalone=prefix.trim().length===0;
    const onQuestion=/\*\*(?:Q\d+|Soal|Pertanyaan|A\.|B\.|C\.|D\.)/.test(prefix);
    if(!standalone&&!onQuestion){output.push(line);continue;}
    if(!standalone)output.push(prefix.trimEnd());
    output.push('');
    output.push('```solution');
    output.push(rest);
    output.push('```');
    output.push('');
  }
  return output.join('\n');
}

function toLearnerMarkdown(lessonId, markdown) {
  const expected = APPENDIX_HEADINGS[lessonId];
  if (!expected) throw new Error('Unknown Foundation V2 lesson ID: ' + lessonId);
  const matchFrontmatter = markdown.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n/);
  if (!matchFrontmatter) throw new Error('Missing source frontmatter: ' + lessonId);
  const raw = markdown.slice(matchFrontmatter[0].length);

  // Locate the explicitly approved appendix heading. Never accept an internal
  // reference heading that appears mid-lesson or survives into the learner body.
  const headings = [...raw.matchAll(/^#{2,3}\s+(.+?)\s*$/gm)];
  const expectedHits = headings.filter((m) => m[1].trim() === expected);
  if (expectedHits.length !== 1) throw new Error(
    lessonId + ': expected exactly one terminal editorial appendix "' + expected + '", found ' + expectedHits.length
  );
  const appendix = expectedHits[0];
  const nextHeading = headings.find((h) => h.index > appendix.index);
  if (nextHeading) throw new Error(lessonId + ': editorial appendix is not terminal');

  const beforeAppendix = raw.slice(0, appendix.index)
    .replace(/\s*\n---\s*$/, '')
    .trim();

  // Remove only editorial claim-ID annotations; preserve legitimate learner
  // prose, essential safety limits, simulated-data labels, and markdown links.
  const lesson = beforeAppendix
    .replace(/[ \t]*\[\s*[A-Z]{1,8}-?\d{1,3}(?:\s*[,;/]\s*[A-Z]{1,8}-?\d{1,3})*\s*\](?!\()/g, '')
    .replace(/[ \t]+$/gm, '')
    .trim();

  if (lesson.length < 500) throw new Error(lessonId + ': learner lesson suspiciously short');
  if (/\b(?:SME review pending|Human learner test pending|Editorial sources|Editorial evidence|License note|Source claim IDs|QA warning|Release blocker)\b/i.test(lesson)) {
    throw new Error(lessonId + ': editorial-only information leaked into learner-facing material');
  }
  if (/https?:\/\/\S+/i.test(lesson)) {
    throw new Error(lessonId + ': raw reference URL leaked into learner-facing content; move to editorial appendix');
  }
  if (/\[(?:CLAIM|CAP|CVA|SEN|LEX|BIAS)-\d{1,3}\]/.test(lesson)) {
    throw new Error(lessonId + ': unstripped claim annotations');
  }
  return hideImmediateAnswers(lesson);
}

module.exports = { APPENDIX_HEADINGS, toLearnerMarkdown };
