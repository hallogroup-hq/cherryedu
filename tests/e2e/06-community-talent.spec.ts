import { test, expect } from './fixtures';

test.describe('Suite TS-06 & TS-08: Talent Services, Komunitas & Verifikasi Sertifikat', () => {
  test('TC-06-01: Coffee Job Board (/jobs) renders listings and search filter', async ({ page }) => {
    await page.goto('/jobs');

    await expect(page.locator('h1, h2').first()).toContainText(/Lowongan|Karier|Talenta/i);

    // Verify job listing card exists
    const jobCards = page.locator('article, div[class*="rounded"]:has-text("Lamar"), div:has-text("Full-time")');
    await expect(jobCards.first()).toBeVisible();

    // Verify search filter input exists
    const searchInput = page.locator('input[placeholder*="Cari posisi"], input[type="text"]').first();
    await expect(searchInput).toBeVisible();
  });

  test('TC-07-01: Discussion Forum (/forum) renders threads and category filters', async ({ page }) => {
    await page.goto('/forum');

    await expect(page.locator('h1, h2').first()).toContainText(/Forum|Diskusi|Komunitas/i);

    // Check seed thread topic exists
    await expect(page.getByText(/Honey|V60|Espresso|Roasting/i).first()).toBeVisible();
  });

  test('TC-08-01: Public Certificate Verification (/verify/:token) displays valid credential', async ({ page }) => {
    await page.goto('/verify/che-sari-fnd-8823');

    // Check status banner
    await expect(page.getByText(/STATUS: SAH & TERDAFTAR RESMI|TERVERIFIKASI/i)).toBeVisible();

    // Check recipient name & path
    await expect(page.getByText(/Sari Wulandari/i).first()).toBeVisible();
    await expect(page.getByText(/Foundation: Kopi dari Hulu ke Hilir/i).first()).toBeVisible();

    // Check certificate ID
    await expect(page.getByText(/CHE-2026-FOUND-000188/i).first()).toBeVisible();
  });

  test('TC-10-01: Pustaka / Curated Resources (/pustaka) loads repository', async ({ page }) => {
    const response = await page.goto('/pustaka');
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1, h2').first()).toBeVisible();
  });
});
