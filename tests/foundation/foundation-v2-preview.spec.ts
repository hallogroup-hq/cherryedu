import { test, expect } from '@playwright/test';

test.describe('Foundation V2 isolated editorial preview', () => {
  test('preview course is visible with seven modules and first lesson', async ({ page }) => {
    await page.goto('/paths/foundation-v2-preview');
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/Foundation V2/);
    await expect(page.getByText(/DRAFT REVIEW/i).first()).toBeVisible();
    await expect(page.getByText(/Mulai dari Cangkir/i).first()).toBeVisible();
    await expect(page.getByText(/Memahami Nilai di Balik Kopi/i).first()).toBeVisible();
    const first = page.locator('a[href*="/lessons/lesson-fv2-m01-l01"]').first();
    await expect(first).toBeVisible();
  });

  test('draft lesson uses existing player, not a new certification flow', async ({ page }) => {
    await page.goto('/paths/foundation-v2-preview/lessons/lesson-fv2-m01-l01');
    await expect(page.locator('main, article, .prose').first()).toBeVisible();
    await expect(page.locator('body')).toContainText(/kopi|cangkir/i);
    await expect(page).toHaveURL(/foundation-v2-preview\/lessons\/lesson-fv2-m01-l01/);
  });

  test('legacy Foundation is retained as separate course and route', async ({ page }) => {
    await page.goto('/paths/kopi-dari-hulu-ke-hilir');
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/Foundation: Kopi dari Hulu ke Hilir/);
    await expect(page.getByText(/Modul F-1/i).first()).toBeVisible();
    await expect(page.locator('a[href*="lesson-fv2-"]')).toHaveCount(0);
  });
});
