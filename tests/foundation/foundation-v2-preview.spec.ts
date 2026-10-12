import { test, expect } from '@playwright/test';

test.describe('Foundation V2 isolated editorial preview', () => {
  test('preview course is visible with seven modules and first lesson', async ({ page }) => {
    await page.goto('/paths/foundation-v2-preview');
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/Foundation V2/);
    await expect(page.getByText(/DRAFT REVIEW/i).first()).toBeVisible();
    await expect(page.getByText(/Mulai dari Cangkir/i).first()).toBeVisible();
    await expect(page.getByText(/Memahami Nilai di Balik Kopi/i).first()).toBeVisible();
    await expect(page.getByText(/Draft — Tanpa Sertifikat/i)).toBeVisible();
    await expect(page.getByText(/Baca seluruh 36 materi tanpa login/i)).toBeVisible();
    const first = page.locator('a[href*="/lessons/lesson-fv2-m01-l01"]').first();
    await expect(first).toBeVisible();
  });

  test('draft lesson uses existing player, not a new certification flow', async ({ page }) => {
    await page.goto('/paths/foundation-v2-preview/lessons/lesson-fv2-m01-l01');
    await expect(page.locator('article')).toBeVisible();
    await expect(page.locator('article')).toContainText('Apa yang sebenarnya kita rasakan saat minum kopi?');
    await expect(page.locator('article')).toContainText('Kenapa kita bisa mencium aroma');
    await expect(page.getByRole('status')).toContainText(/Draft untuk review/);
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

test('a browser-created legacy demo/admin session never authenticates a reviewer', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => {
    localStorage.setItem('cherryedu_testuser_session', JSON.stringify({
      user: { id: 'usr-admin-01', email: 'admin@cherryedu.id', app_metadata: { role: 'admin' } },
      access_token: 'browser-fabricated-token',
    }));
  });
  await page.goto('/admin');
  await expect(page.getByText(/Akses Terbatas Administrator/i).first()).toBeVisible();
  await expect(page.getByRole('link', { name: /Masuk sebagai Administrator/i })).toBeVisible();
});

test('review environment blocks QRIS, payment status and subscription email', async ({ request }) => {
  const qris = await request.post('/api/payment/create-qris', { data: { amount: 49000 } });
  expect(qris.status()).toBe(503);
  const status = await request.get('/api/payment/status/example123');
  expect(status.status()).toBe(503);
  const email = await request.post('/api/email/subscription', {
    data: { toEmail: 'never-send@example.invalid', transactionId: 'review-only' },
  });
  expect(email.status()).toBe(503);
});

test('review build rejects account login without any local demo session', async ({ page }) => {
  await page.goto('/login');
  await page.locator('input[type="email"]').fill('nobody@example.invalid');
  await page.locator('input[type="password"]').fill('not-a-real-password');
  await page.getByRole('button', { name: /Masuk Sekarang/i }).click();
  await expect(page.locator('body')).toContainText(/login dinonaktifkan pada preview/i);
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
