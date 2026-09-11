import { test as base, expect } from '@playwright/test';

export const test = base.extend({
  page: async ({ page }, use) => {
    // Dismiss What's New modal by setting localStorage key before scripts execute
    await page.addInitScript(() => {
      try {
        localStorage.setItem('cherry_seen_version_v1_2', 'true');
      } catch {}
    });
    await use(page);
  },
});

export { expect };
