import { test, expect } from './fixtures';

test.describe('Suite TS-05: Otentikasi & Akun Pengguna', () => {
  test('TC-05-01: Login page renders with validation and demo personas', async ({ page }) => {
    await page.goto('/login');

    // Title and form fields
    await expect(page.locator('input[type="email"]')).toBeVisible();
    await expect(page.locator('input[type="password"]')).toBeVisible();

    // Quick demo personas section
    await expect(page.getByText(/Masuk Cepat untuk Pengujian/i)).toBeVisible();
    await expect(page.getByText(/Admin/i).first()).toBeVisible();
    await expect(page.getByText(/Budi Barista/i)).toBeVisible();
  });

  test('TC-05-02: 1-Click Demo Login as Barista authenticates user', async ({ page }) => {
    await page.goto('/login');

    // Click Budi Barista demo button
    const baristaDemoBtn = page.getByRole('button', { name: /Budi Barista/i });
    await expect(baristaDemoBtn).toBeVisible();
    await baristaDemoBtn.click();

    // After login, should redirect to home or return authenticated state
    await page.waitForTimeout(1000);

    // Verify user profile or avatar is present in header
    await page.goto('/profile');
    await expect(page.locator('body')).toContainText(/Budi Santoso|Barista|XP/i);
  });

  test('TC-05-03: Register page renders required fields and roles', async ({ page }) => {
    await page.goto('/register');

    await expect(page.locator('input[placeholder*="Budi Pratama"], input[type="text"]').first()).toBeVisible();
    await expect(page.locator('input[type="email"]')).toBeVisible();
    await expect(page.locator('input[type="password"]').first()).toBeVisible();
  });
});
