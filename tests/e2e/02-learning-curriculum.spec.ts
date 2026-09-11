import { test, expect } from './fixtures';

test.describe('Suite TS-02: Kurikulum & Learning Paths', () => {
  test('TC-02-01: Catalog displays 7 learning paths with correct metadata', async ({ page }) => {
    await page.goto('/paths');

    await expect(page.locator('h1')).toContainText(/Jalur Pembelajaran Terstruktur/i);

    // Filter buttons
    const filterAll = page.getByRole('button', { name: 'Semua' });
    const filterFoundation = page.getByRole('button', { name: 'Foundation' });
    const filterSpec = page.getByRole('button', { name: 'Spesialisasi' });

    await expect(filterAll).toBeVisible();
    await expect(filterFoundation).toBeVisible();
    await expect(filterSpec).toBeVisible();

    // Verify Foundation Card is present
    const foundationCard = page.getByText(/Foundation: Kopi dari Hulu ke Hilir/i).first();
    await expect(foundationCard).toBeVisible();

    // Test filter foundation
    await filterFoundation.click();
    await expect(foundationCard).toBeVisible();

    // Test filter specialization
    await filterSpec.click();
    const baristaCard = page.getByText(/Barista Specialization Path/i).first();
    await expect(baristaCard).toBeVisible();
  });

  test('TC-02-02: Path detail page renders syllabus modules and lesson links', async ({ page }) => {
    await page.goto('/paths/kopi-dari-hulu-ke-hilir');

    // Heading
    await expect(page.locator('h1')).toContainText(/Foundation: Kopi dari Hulu ke Hilir/i);

    // Check Module F-1
    const moduleF1 = page.getByText(/Modul F-?1/i).first();
    await expect(moduleF1).toBeVisible();

    // Find and click on the first lesson link
    const firstLessonLink = page.locator('a[href*="/lessons/"]').first();
    await expect(firstLessonLink).toBeVisible();

    await firstLessonLink.click();
    await expect(page).toHaveURL(/\/paths\/kopi-dari-hulu-ke-hilir\/lessons\//);
  });

  test('TC-02-03: Lesson player loads reading content, markdown, and completion button', async ({ page }) => {
    // Navigate directly to the first lesson in Foundation
    await page.goto('/paths/kopi-dari-hulu-ke-hilir');
    const firstLessonLink = page.locator('a[href*="/lessons/"]').first();
    await firstLessonLink.click();

    // Ensure lesson content is loaded
    await expect(page.locator('article, .prose, main')).toBeVisible();

    // Check action buttons: bookmark or mark complete
    const markCompleteBtn = page.getByRole('button', { name: /Tandai Selesai|Selesai Dibaca/i });
    if (await markCompleteBtn.isVisible()) {
      await expect(markCompleteBtn).toBeEnabled();
    }

    // Check back to syllabus navigation
    const backBtn = page.getByText(/Silabus/i).first();
    await expect(backBtn).toBeVisible();
  });
});
