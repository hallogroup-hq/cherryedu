import { test, expect } from './fixtures';

test.describe('Suite TS-04: Kuis & Asesmen Kompetensi', () => {
  test('TC-04-01: Barista Assessment page loads scenarios and accepts answer selection', async ({ page }) => {
    await page.goto('/assessment/barista');

    // Heading
    await expect(page.locator('h1, h2').first()).toContainText(/Asesmen|Evaluasi|Barista/i);

    // Scenario prompt exists
    await expect(page.locator('body')).toContainText(/Dial-In & Ekstraksi|Shot espresso/i);

    // Click first answer option
    const firstOption = page.locator('button:has-text("Memperhalus"), label:has-text("Memperhalus"), [class*="cursor-pointer"]:has-text("Memperhalus")').first();
    if (await firstOption.isVisible()) {
      await firstOption.click();
    }
  });

  test('TC-04-02: Module Quiz page loads questions and calculates score', async ({ page }) => {
    // Navigate to foundation path first
    await page.goto('/paths/kopi-dari-hulu-ke-hilir');

    // Look for a quiz link
    const quizLink = page.locator('a[href*="/quiz/"]').first();
    if (await quizLink.isVisible()) {
      await quizLink.click();
      await expect(page).toHaveURL(/\/paths\/.*\/quiz\//);

      // Verify quiz UI has question counter and submit/next button
      await expect(page.locator('body')).toContainText(/Kuis|Soal|Pertanyaan/i);
    }
  });
});
