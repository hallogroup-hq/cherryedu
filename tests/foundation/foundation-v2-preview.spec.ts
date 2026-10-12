import { test, expect } from '@playwright/test';

test.describe('Foundation V2 isolated editorial preview', () => {
  test('preview course is visible with seven modules and first lesson', async ({ page }) => {
    await page.goto('/paths/foundation-v2-preview');
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/Foundation V2/);
    await expect(page.getByText(/Beta Publik|DRAFT REVIEW/i).first()).toBeVisible();
    await expect(page.getByText(/Mulai dari Cangkir/i).first()).toBeVisible();
    await expect(page.getByText(/Memahami Nilai di Balik Kopi/i).first()).toBeVisible();
    await expect(page.getByText(/Edisi Baru — Tanpa Sertifikat/i)).toBeVisible();
    await expect(page.getByText(/Baca seluruh 36 materi tanpa login/i)).toBeVisible();
    const first = page.locator('a[href*="/lessons/lesson-fv2-m01-l01"]').first();
    await expect(first).toBeVisible();
  });

  test('draft lesson uses existing player, not a new certification flow', async ({ page }) => {
    await page.goto('/paths/foundation-v2-preview/lessons/lesson-fv2-m01-l01');
    await expect(page.locator('article')).toBeVisible();
    await expect(page.locator('article')).toContainText('Apa yang sebenarnya kita rasakan saat minum kopi?');
    await expect(page.locator('article')).toContainText('Kenapa kita bisa mencium aroma');
    await expect(page.getByRole('status')).toContainText(/Bacaan Publik \(Beta\)/);
    await expect(page.getByRole('button', { name: /Tandai Selesai|Selesai ✓/i })).toHaveCount(0);
    await expect(page.getByRole('button', { name: /^Simpan$|^Tersimpan$/i })).toHaveCount(0);
    await expect(page).toHaveURL(/foundation-v2-preview\/lessons\/lesson-fv2-m01-l01/);
  });

  test('legacy Foundation is retained as separate course and route', async ({ page }) => {
    await page.goto('/paths/kopi-dari-hulu-ke-hilir');
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/Foundation: Kopi dari Hulu ke Hilir/);
    await expect(page.getByText(/Modul F-1/i).first()).toBeVisible();
    await expect(page.locator('a[href*="lesson-fv2-"]')).toHaveCount(0);
  });
});

test('preview reader is usable in a narrow mobile viewport without sign-in', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/paths/foundation-v2-preview/lessons/lesson-fv2-m01-l01');
  await expect(page.locator('article')).toContainText('Apa yang sebenarnya kita rasakan');
  await expect(page.getByRole('button', { name: /Tandai Selesai/i })).toHaveCount(0);
  await expect(page.getByText(/Login Sekarang|Materi Silabus Terkunci/i)).toHaveCount(0);
});


test('internal references and QA never render inside learner lesson bodies', async ({ page }) => {
  const representativeLessons = [
    'lesson-fv2-m01-l01',
    'lesson-fv2-m03-l04',
    'lesson-fv2-m07-l05',
  ];
  for (const id of representativeLessons) {
    await page.goto('/paths/foundation-v2-preview/lessons/' + id);
    const article = page.locator('article');
    await expect(article).toBeVisible();
    await expect(article).not.toContainText(/Catatan editorial dan referensi|SME review pending|Human learner test pending|Editorial source register|Referensi dan QA|Sumber dan status/i);
    await expect(article).not.toContainText(/https?:\/\/(?:pubmed|sca\.coffee|doi\.org|www\.mdpi)/i);
    await expect(article).not.toContainText(/\[(?:S01|R1|CAP-01|CLAIM-04)\]/);
  }
});

test('taxonomy exercise is five interactive cards, not a table showing answers', async ({ page }) => {
  await page.goto('/paths/foundation-v2-preview/lessons/lesson-fv2-m02-l02');
  const activity = page.getByRole('region', { name: /Lima nama, lima tingkat informasi/i });
  await expect(activity).toBeVisible();
  await expect(activity.getByText('Coffea', { exact: true })).toBeVisible();
  await expect(activity.locator('table')).toHaveCount(0);
  await expect(activity.getByText('Tepat.', { exact: true })).toHaveCount(0);
  await activity.getByRole('button', { name: 'Genus', exact: true }).click();
  await expect(activity).toContainText('Tepat.');
  await expect(activity).toContainText('Coffea adalah genus');
  await activity.getByRole('button', { name: /Kartu berikutnya/i }).click();
  await expect(activity).toContainText('Coffea arabica');
});

test('coffee fruit anatomy is visible and its layer descriptions respond to clicks', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/paths/foundation-v2-preview/lessons/lesson-fv2-m02-l01');
  const activity = page.getByRole('region', { name: 'Jelajahi isi buah kopi' });
  await expect(activity).toBeVisible();
  await expect(activity.getByRole('img', { name: /Skema penampang melintang buah kopi/i })).toBeVisible();
  await activity.getByRole('button', { name: /Kulit tanduk/i }).click();
  await expect(activity).toContainText('Lapisan keras pelindung biji');
});

test('different modules use different appropriate interaction types', async ({ page }) => {
  await page.goto('/paths/foundation-v2-preview/lessons/lesson-fv2-m04-l01');
  const roast = page.getByRole('region', { name: /Susun perjalanan satu batch/i });
  await expect(roast.getByRole('button', { name: 'Periksa urutan' })).toBeVisible();
  await roast.getByRole('button', { name: 'Periksa urutan' }).click();
  await expect(roast).toContainText('Belum tepat');
  await expect(roast.getByRole('button', { name: /Naikkan/i }).first()).toBeVisible();

  await page.goto('/paths/foundation-v2-preview/lessons/lesson-fv2-m05-l05');
  const brew = page.getByRole('region', { name: /Hitung estimasi extraction yield/i });
  await expect(brew.getByLabel('Dosis kopi kering (g)')).toHaveValue('20');
  await brew.getByRole('button', { name: 'Hitung estimasi EY' }).click();
  await expect(brew).toContainText('20,25%');

  await page.goto('/paths/foundation-v2-preview/lessons/lesson-fv2-m07-l02');
  const chain = page.getByRole('region', { name: 'Periksa klaim pembelian langsung' });
  await expect(chain).toBeVisible();
  await expect(chain).not.toContainText('Tepat.');
  await chain.getByRole('button', { name: /Minta bukti pembayaran/i }).click();
  await expect(chain).toContainText('Tepat.');
});

test('Liberica now gets concrete biological explanation before Excelsa taxonomy', async ({ page }) => {
  await page.goto('/paths/foundation-v2-preview/lessons/lesson-fv2-m02-l02');
  const article=page.locator('article');
  await expect(article).toContainText('Liberika: kenali dulu sebelum membahas Excelsa');
  await expect(article).toContainText(/relatif besar dibanding Arabika/i);
  await expect(article.getByRole('figure', {name:/Nama tanaman dan nama pasar tidak sejajar/})).toBeVisible();
  const articleText=await article.innerText();
  expect(articleText.indexOf('Liberika: kenali dulu')).toBeLessThan(articleText.indexOf('hubungan Excelsa dengan Liberika'));
});

test('label-check case hides exemplar until learner writes independent evidence reasoning', async ({ page }) => {
  await page.goto('/paths/foundation-v2-preview/lessons/lesson-fv2-m02-l02');
  const workspace = page.getByRole('region', { name: /Periksa label sebelum mempercayai klaim/i });
  await expect(workspace).toBeVisible();
  await expect(workspace.locator('textarea')).toHaveCount(2);
  const check = workspace.getByRole('button', { name: /Bandingkan dengan contoh pembahasan/i });
  await expect(check).toBeDisabled();
  await expect(workspace).not.toContainText('Kew mencatat riwayat klasifikasi yang berubah');
  for (const field of await workspace.locator('textarea').all()) {
    await field.fill('Saya ingin memeriksa bukti asal serta penamaan sebelum mempercayai label.');
  }
  await expect(check).toBeEnabled();
  await check.click();
  await expect(workspace).toContainText('Kew mencatat riwayat klasifikasi yang berubah');
});

test('genuine course visuals render across processing, roast, brew and history', async ({ page }) => {
  const cases = [
    ['lesson-fv2-m03-l02','Apa yang tertinggal saat pengeringan?'],
    ['lesson-fv2-m04-l05','Grafik roasting simulasi yang benar-benar bisa dibaca'],
    ['lesson-fv2-m05-l04','Dua jalur air dalam kopi'],
    ['lesson-fv2-m06-l05','Empat sudut pandang penilaian kopi'],
    ['lesson-fv2-m07-l01','Satu sejarah, beberapa jalur kekuasaan'],
  ];
  for(const [id,heading] of cases){
    await page.goto('/paths/foundation-v2-preview/lessons/'+id);
    await expect(page.locator('article')).toContainText(heading);
    await expect(page.locator('article')).not.toContainText('[VISUAL:');
  }
});

test('in-lesson answers do not start expanded', async ({ page }) => {
  await page.goto('/paths/foundation-v2-preview/lessons/lesson-fv2-m05-l02');
  const article=page.locator('article');
  const reveal=article.getByRole('button',{name:/Sudah mencoba\? Lihat pembahasan/i}).first();
  await expect(reveal).toBeVisible();
  await expect(reveal).toHaveAttribute('aria-expanded','false');
  await reveal.click();
  await expect(article.getByRole('button',{name:'Sembunyikan pembahasan'}).first()).toHaveAttribute('aria-expanded','true');
  await expect(article).toContainText('Jawab');
});

test('workspace requires attempt before showing model; no account or XP', async ({ page }) => {
  await page.goto('/paths/foundation-v2-preview/lessons/lesson-fv2-m01-l03');
  const section=page.getByRole('region',{name:/Catat dua cangkir/});
  await expect(section.getByText(/jawaban tidak disimpan/i)).toBeVisible();
  const compare=section.getByRole('button',{name:/Bandingkan dengan contoh pembahasan/i});
  await expect(compare).toBeDisabled();
  const fields=section.locator('textarea');
  expect(await fields.count()).toBe(4);
  for(let i=0;i<4;i++) await fields.nth(i).fill('Observasi sementara dibuat untuk latihan, belum kesimpulan pasti.');
  await expect(compare).toBeEnabled();
  await compare.click();
  await expect(section).toContainText('Contoh penalaran');
  await expect(page.getByRole('button',{name:/Tandai Selesai/i})).toHaveCount(0);
});

test('brew EY calculator rejects physically impossible mass balance', async ({ page }) => {
  await page.goto('/paths/foundation-v2-preview/lessons/lesson-fv2-m05-l05');
  const activity=page.getByRole('region',{name:/Hitung estimasi extraction yield/i});
  await activity.getByLabel('Dosis kopi kering (g)').fill('1');
  await expect(activity.getByRole('button',{name:'Hitung estimasi EY'})).toBeDisabled();
  await expect(activity.getByRole('alert')).toContainText('tidak mungkin secara fisik');
  await activity.getByLabel('Dosis kopi kering (g)').fill('20');
  await expect(activity.getByRole('alert')).toHaveCount(0);
  await expect(activity.getByRole('button',{name:'Hitung estimasi EY'})).toBeEnabled();
});

test('farmer income sandbox teaches cost difference rather than label premium', async ({ page }) => {
  await page.goto('/paths/foundation-v2-preview/lessons/lesson-fv2-m07-l03');
  const section=page.getByRole('region',{name:/Berapa sisa setelah biaya/});
  await expect(section).toBeVisible();
  await section.getByRole('button',{name:/Hitung sisa setelah biaya/i}).click();
  // Indonesian currency uses a non-breaking space after Rp in Intl.NumberFormat.
  await expect(section).toContainText(/Rp\s*300\.000/);
  await expect(section).toContainText(/Rp\s*220\.000/);
  await expect(section).toContainText(/-Rp\s*80\.000/);
});


const completeFoundationV2Inventory = [
  { module: '01', lessons: 3 },
  { module: '02', lessons: 5 },
  { module: '03', lessons: 7 },
  { module: '04', lessons: 5 },
  { module: '05', lessons: 6 },
  { module: '06', lessons: 5 },
  { module: '07', lessons: 5 },
];

for (const { module: moduleId, lessons } of completeFoundationV2Inventory) {
  test('all M' + moduleId + ' learner pages render actual readable material', async ({ page }) => {
    test.setTimeout(180_000);
    for (let index = 1; index <= lessons; index++) {
      const id = 'lesson-fv2-m' + moduleId + '-l' + String(index).padStart(2, '0');
      const response = await page.goto('/paths/foundation-v2-preview/lessons/' + id, { waitUntil: 'domcontentloaded' });
      expect(response?.status(), id + ' HTTP status').toBe(200);
      const article = page.locator('article');
      await expect(article, id + ' content area').toBeVisible();
      await expect(article.locator('h1').first(), id + ' first learning heading').toBeVisible();
      const prose = await article.innerText();
      expect(prose.length, id + ' lesson length').toBeGreaterThan(500);
      expect(prose, id + ' raw directive leakage').not.toMatch(/\[(?:VISUAL|ACTIVITY|DIAGRAM):[a-z0-9-]+\]/);
      expect(prose, id + ' internal research leakage').not.toMatch(/SME review pending|Human learner test pending|Editorial source register/i);
      await expect(page.getByRole('button', { name: /Tandai Selesai/i })).toHaveCount(0);
    }
  });
}


test('first sensory lab uses one worksheet after the case data, not two fake forms', async ({ page }) => {
  await page.goto('/paths/foundation-v2-preview/lessons/lesson-fv2-m01-l03');
  const article = page.locator('article');
  await expect(article.getByRole('heading', { name: '3. Bagaimana mencatat dua sampel' })).toBeVisible();
  await expect(article.getByText('Lembar pengamatan yang bisa langsung dipakai')).toHaveCount(0);
  const workspace = article.getByRole('region', { name: /Catat dua cangkir/ });
  await expect(workspace).toBeVisible();
  expect((await article.innerText()).indexOf('Kasus latihan tanpa alat')).toBeLessThan((await article.innerText()).indexOf('Catat dua cangkir, jangan langsung'));
  await expect(workspace.locator('textarea')).toHaveCount(4);
});

test('beginner cupping has one real form and hides analysis until requested', async ({ page }) => {
  await page.goto('/paths/foundation-v2-preview/lessons/lesson-fv2-m06-l04');
  const article = page.locator('article');
  await expect(article.getByRole('region', { name: /Catat perbandingan sampel A dan B/ })).toBeVisible();
  await expect(article.getByText(/Format berikut ditulis orisinal untuk CherryEdu/)).toHaveCount(0);
  await expect(article.getByText('Kesepakatan luas:')).toHaveCount(0);
  await expect(article.getByRole('button', {name:/Sudah mencoba\? Lihat pembahasan/}).first()).toBeVisible();
});

test('brewing worked solution is not revealed before asking for it', async ({ page }) => {
  await page.goto('/paths/foundation-v2-preview/lessons/lesson-fv2-m05-l06');
  const article = page.locator('article');
  await expect(article.getByRole('region', { name:/Rancang eksperimen seduh satu variabel/ })).toBeVisible();
  await expect(article.getByRole('heading', {name:'Contoh setelah kamu mencoba'})).toBeVisible();
  const buttons = article.getByRole('button', {name:/Sudah mencoba\? Lihat pembahasan/});
  await expect(buttons.first()).toHaveAttribute('aria-expanded','false');
  await expect(article.getByText(/Pada satu kopi dan metode seduh yang sama, perubahan grind G6/i)).toHaveCount(0);
});
