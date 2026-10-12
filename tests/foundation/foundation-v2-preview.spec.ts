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
    await expect(article).not.toContainText(/https?:\\/\\/(?:pubmed|sca\\.coffee|doi\\.org|www\\.mdpi)/i);
    await expect(article).not.toContainText(/\\[(?:S01|R1|CAP-01|CLAIM-04)\\]/);
  }
});
