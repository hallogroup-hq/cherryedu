import { test, expect } from './fixtures';

test.describe('Suite TS-09: CMS & Admin Panel Access', () => {
  test('TC-09-01: Guest user accessing /admin is blocked with restricted access banner', async ({ page }) => {
    await page.goto('/admin');

    // Should display restricted admin access barrier
    await expect(page.getByText(/Akses Terbatas Administrator/i)).toBeVisible();
    await expect(page.getByText(/KONSOL PENGELOLA CHERRYEDU/i)).toBeVisible();

    // Contains link to login
    const loginLink = page.locator('a[href*="/login"]');
    await expect(loginLink.first()).toBeVisible();
  });

  test('TC-09-02: Admin login grants access to /admin overview and KPIs', async ({ page }) => {
    // Login as admin
    await page.goto('/login');

    await page.locator('input[type="email"]').fill('admin@cherryedu.id');
    await page.locator('input[type="password"]').fill('cherryadmin2026');
    await page.getByRole('button', { name: /Masuk Sekarang/i }).click();

    await page.waitForTimeout(1000);

    // Navigate to admin
    await page.goto('/admin');

    // Admin overview should display dashboard or curriculum nav
    await expect(page.locator('body')).toContainText(/Overview|Analytics|Kurikulum|Dashboard/i);
  });
});
