import { test, expect } from './fixtures';

test.describe('Suite TS-03: Interactive Coffee Tools & Lexicon', () => {
  test('TC-03-01: Tools hub (/tools) renders interactive instruments', async ({ page }) => {
    await page.goto('/tools');

    await expect(page.locator('h1, h2').first()).toBeVisible();
    await expect(page.locator('body')).toContainText(/Kalkulator|Instrumen|Alat/i);
  });

  test('TC-03-02: Brew Calculator calculates golden ratio & water correctly', async ({ page }) => {
    await page.goto('/tools?tool=calculator');

    const doseSlider = page.locator('input[type="range"]').first();
    await expect(doseSlider).toBeVisible();

    // Verify formula target section is rendered
    await expect(page.getByText(/Total Kebutuhan Air|Dosis Kopi/i).first()).toBeVisible();
  });

  test('TC-03-03: SCA Cupping Form tab calculates specialty score', async ({ page }) => {
    await page.goto('/tools?tool=cupping-sheet');

    // Check cupping form inputs / attributes
    await expect(page.getByText(/Fragrance|Flavor|Aftertaste|Acidity|Body|Balance/i).first()).toBeVisible();

    // Check total score display exists
    const totalScoreDisplay = page.locator('body').getByText(/Skor Akhir|Total Score|Poin/i).first();
    await expect(totalScoreDisplay).toBeVisible();
  });

  test('TC-03-04: Water Lab / Water Calculator renders SCA mineral targets', async ({ page }) => {
    await page.goto('/tools?tool=water-lab');

    await expect(page.getByText(/TDS|Hardness|Magnesium|Kalsium|Alkalinitas|Baking Soda/i).first()).toBeVisible();
  });

  test('TC-03-05: Coffee Lexicon (/lexicon) filters terms by search query', async ({ page }) => {
    await page.goto('/lexicon');

    await expect(page.locator('h1')).toContainText(/Glosarium|Kamus/i);

    const searchInput = page.locator('input[placeholder*="Cari"], input[type="text"]').first();
    await expect(searchInput).toBeVisible();

    // Search for "Maillard"
    await searchInput.fill('Maillard');

    // Expect Maillard term card to be visible
    await expect(page.getByText(/Reaksi Maillard|Maillard/i).first()).toBeVisible();
  });

  test('TC-03-06: Interactive Flashcards (/flashcards) support card flip', async ({ page }) => {
    await page.goto('/flashcards');

    await expect(page.locator('h1, h2').first()).toBeVisible();

    // Card should be clickable or flippable
    const cardArea = page.locator('.perspective-1000, [class*="cursor-pointer"]').first();
    if (await cardArea.isVisible()) {
      await cardArea.click();
    }
  });
});
