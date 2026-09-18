import { test, expect } from './fixtures';

test.describe('Suite TS-05: Otentikasi & Akun Pengguna', () => {
  test('TC-05-01: Login page renders Google sign-in and email form without dummy personas', async ({ page }) => {
    await page.goto('/login');

    // Title and form fields
    await expect(page.locator('input[type="email"]')).toBeVisible();
    await expect(page.locator('input[type="password"]')).toBeVisible();

    // Google Sign-In button
    await expect(page.getByRole('button', { name: /Masuk dengan Akun Google/i })).toBeVisible();

    // Verify demo persona buttons are gone
    await expect(page.getByText(/Masuk Cepat untuk Pengujian/i)).not.toBeVisible();
    await expect(page.getByText(/Budi Barista/i)).not.toBeVisible();
    await expect(page.getByText(/Sari Brewer/i)).not.toBeVisible();
  });

  test('TC-05-02: Login shows validation error for invalid credentials', async ({ page }) => {
    await page.goto('/login');

    await page.locator('input[type="email"]').fill('nonexistent_user@gmail.com');
    await page.locator('input[type="password"]').fill('WrongPassword123!');
    await page.getByRole('button', { name: /Masuk Sekarang/i }).click();

    await expect(page.locator('body')).toContainText(/Email atau kata sandi salah|gagal/i);
  });

  test('TC-05-03: Register page renders clean role options without emoji or word Calon', async ({ page }) => {
    await page.goto('/register');

    await expect(page.getByRole('button', { name: /Daftar Cepat dengan Akun Google/i })).toBeVisible();
    await expect(page.locator('input[type="text"]').first()).toBeVisible();
    await expect(page.locator('input[type="email"]')).toBeVisible();
    const select = page.locator('select');
    await expect(select).toBeVisible();

    const optionTexts = await select.locator('option').allInnerTexts();
    expect(optionTexts).toContain('Barista');
    expect(optionTexts).toContain('Home Brewer');
    expect(optionTexts).toContain('Roaster & Operator Sangrai');
    expect(optionTexts).toContain('Sensorik & Q-Grader');
    expect(optionTexts).toContain('Pemilik Kedai / Pengusaha Kopi');

    // Ensure no emoji and no "Calon" in option texts
    for (const opt of optionTexts) {
      expect(opt).not.toContain('Calon');
      expect(opt).not.toMatch(/[\uD800-\uDBFF][\uDC00-\uDFFF]/);
    }
  });

  test('TC-05-04: Opening syllabus as unauthenticated user redirects or requires login', async ({ page }) => {
    // 1. Check catalogue button
    await page.goto('/paths');
    const syllabusBtn = page.getByRole('link', { name: /Buka Silabus|Masuk untuk Buka Silabus/i }).first();
    await expect(syllabusBtn).toBeVisible();

    // 2. Navigating directly to syllabus detail redirects to login
    await page.goto('/paths/kopi-dari-hulu-ke-hilir');
    await page.waitForURL(url => url.pathname.includes('/login') || url.pathname.includes('/paths/kopi-dari-hulu-ke-hilir'));
    
    // Either redirected to /login?redirect=... or displays locked prompt
    const isLogin = page.url().includes('/login');
    const hasLockText = await page.getByText(/Akses Silabus Terkunci|Masuk untuk Membuka Silabus|Masuk untuk melanjutkan/i).first().isVisible();
    expect(isLogin || hasLockText).toBeTruthy();
  });

  test('TC-05-05: Test user testuser@cherrycoffeeroastery.com can log in successfully', async ({ page }) => {
    await page.goto('/login');

    await page.locator('input[type="email"]').fill('testuser@cherrycoffeeroastery.com');
    await page.locator('input[type="password"]').fill('cherrycoffeeroastery');
    await page.getByRole('button', { name: /Masuk Sekarang/i }).click();

    // Successfully navigates away from /login
    await page.waitForURL(url => !url.pathname.includes('/login'));
    expect(page.url()).not.toContain('/login');
  });
});
