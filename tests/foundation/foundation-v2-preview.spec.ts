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
