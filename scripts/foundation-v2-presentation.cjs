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
  const lines=markdown.split('\n'),output=[];
  const answerLabel=/^\s*(?:\*\*)?(?:Contoh (?:respons|respon|jawaban|lulus|lengkap)(?:[^:\n]{0,70})?|Jawaban|Kunci|Pembahasan|Pilihan terbaik|Respons terbaik|Versi lebih baik)(?:\*\*)?\s*:\s*(?:\*\*)?/i;
  const exampleLabel=/^\s*(?:\*\*)?Contoh (?:respons|respon|jawaban|lulus|lengkap)/i;
  const genericLabel=/\*\*(?:Jawab(?:an)?|Kunci|Pembahasan)[^*:\n]{0,55}:\*\*/i;
  let code=false;
  for(let i=0;i<lines.length;i++){
    const line=lines[i];
    if(/^\s*```/.test(line)){code=!code;output.push(line);continue;}
    if(code){output.push(line);continue;}
    const heading=/^#{2,4}\s+(?:Contoh (?:respons|jawaban|pembahasan)|Pembahasan|Jawaban)[^\n]*$/i.test(line);
    const label=line.match(answerLabel);
    const index=genericLabel.exec(line);
    // Bare answer headings remain hidden until students request them.
    if(heading){
      const block=[];
      i++;
      while(i<lines.length&&!/^#{1,4}\s+/.test(lines[i])&&!/^---\s*$/.test(lines[i])){
        block.push(lines[i]);i++;
      }
      i--;
      output.push('','```example',line.replace(/^#{2,4}\s+/,'').trim(),...block,'```','');
      continue;
    }
    if(label){
      const example=exampleLabel.test(line);
      const block=[line];
      if(line.slice(label[0].length).replace(/[*\s]/g,'').length===0){
        let j=i+1;
        while(j<lines.length&&lines[j].trim()==='')j++;
        if(j<lines.length && (/^[-*]\s+|^>|^[“"']|^[A-Z]/.test(lines[j]))){
          while(j<lines.length&&lines[j].trim()!==''&&!/^#{1,4}\s+/.test(lines[j]))block.push(lines[j++]);
          i=j-1;
        }
      }
      output.push('','```'+(example?'example':'solution'),...block,'```','');continue;
    }
    if(index){
      const prefix=line.slice(0,index.index),answer=line.slice(index.index);
      if(!prefix.trim()||/\*\*(?:Q\d+|Soal|Pertanyaan|A\.|B\.|C\.|D\.)/.test(prefix)){
        if(prefix.trim())output.push(prefix.trimEnd());
        output.push('','```solution',answer.trim(),'```','');continue;
      }
    }
    output.push(line);
  }
  return output.join('\n');
}
function cleanLearnerPhrasing(markdown) {
  let text=markdown
    .replace(/(^#{1,6}\s+[^\n]*?)\s+[—–]\s+/gm,'$1: ')
    .replace(/\s+[—–]\s+/g,': ')
    .replace(/tanpa terdengar sok ahli/gi,'dengan bahasa yang jelas')
    .replace(/tanpa harus sok ahli/gi,'secara jelas dan terarah')
    .replace(/tidak berpura-pura mencium atau mencicipi sesuatu dari layar/gi,'menganalisis laporan tertulis tanpa melakukan pencicipan langsung')
    .replace(/\*\*Semua nama dan angkanya simulasi; bukan data petani atau produk CherryEdu\.\*\*/gi,'*(Ilustrasi.)*')
    .replace(/\*\*P-17, lot fiktif untuk latihan\*\*/gi,'P-17 (kode untuk satu lot kopi contoh)')
    .replace(/Semua contoh ini \*\*simulasi, bukan hasil uji laboratorium\*\*/gi,'Data ini berupa contoh')
    .replace(/\*\*Kasus sepenuhnya simulasi\.\*\*/gi,'*(Data contoh.)*');
  // A reader can enter a lesson directly, so the first lot code must be explained locally.
  if(/\bP-17\b/.test(text)&&!text.includes('P-17 (kode untuk satu lot kopi contoh)')){
    text=text.replace(/\bP-17\b/,'P-17 (kode satu lot kopi contoh)');
  }
  return text;
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
  return hideImmediateAnswers(cleanLearnerPhrasing(lesson));
}

module.exports = { APPENDIX_HEADINGS, toLearnerMarkdown };
