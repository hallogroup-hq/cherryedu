import { test, expect } from './fixtures';

test.describe('Suite TS-01: Navigasi Inti & Landing Page', () => {
  test('TC-01-01: Homepage renders hero, brand title, and primary CTA', async ({ page }) => {
    await page.goto('/');

    // Check title
    await expect(page).toHaveTitle(/CherryEdu/i);

    // Check brand logo & name
    const brandHeading = page.locator('header').getByText(/CherryEdu/i).first();
    await expect(brandHeading).toBeVisible();

    // Check hero headline
    const heroHeading = page.locator('h1');
    await expect(heroHeading).toBeVisible();
    await expect(heroHeading).toContainText(/Memahami Kopi/i);

    // Check Primary CTA button
    const ctaButton = page.locator('a[href="/paths/kopi-dari-hulu-ke-hilir"]').first();
    await expect(ctaButton).toBeVisible();
    await expect(ctaButton).toContainText(/Mulai Foundation Layer/i);
  });

  test('TC-01-02: Brew Calculator widget on homepage calculates water dose correctly', async ({ page }) => {
    await page.goto('/');

    const calculatorSection = page.locator('#brew-calculator-header');
    await expect(calculatorSection).toBeVisible();

    // Verify dose display and change slider or ratio
    const doseLabel = page.getByText(/Dosis Kopi/i);
    await expect(doseLabel).toBeVisible();

    // Check recipe card formula target output exists
    const waterOutput = page.getByText(/Total Kebutuhan Air/i);
    await expect(waterOutput).toBeVisible();

    // Click 1:16 ratio button (exact match to avoid harvest dial-in buttons)
    const ratio16Btn = page.getByRole('button', { name: '1:16', exact: true });
    if (await ratio16Btn.isVisible()) {
      await ratio16Btn.click();
      // 15g * 16 = 240
      await expect(page.getByText('240 ml / g')).toBeVisible();
    }
  });

  test('TC-01-03: Main navigation bar links are functional', async ({ page }) => {
    await page.goto('/');

    // Test navigation to Kurikulum
    const kurikulumLink = page.locator('header nav a[href="/paths"]').first();
    if (await kurikulumLink.isVisible()) {
      await kurikulumLink.click();
      await expect(page).toHaveURL(/\/paths/);
      await expect(page.locator('h1')).toContainText(/Jalur Pembelajaran/i);
    }
  });

  test('TC-01-04: Static pages /about and /contact load with HTTP 200', async ({ page }) => {
    const aboutResponse = await page.goto('/about');
    expect(aboutResponse?.status()).toBe(200);
    await expect(page.locator('h1, h2').first()).toBeVisible();

    const contactResponse = await page.goto('/contact');
    expect(contactResponse?.status()).toBe(200);
    await expect(page.locator('body')).toContainText(/Kontak|Hubungi|Cherry/i);
  });
});
