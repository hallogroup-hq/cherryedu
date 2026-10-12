import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/foundation',
  timeout: 60_000,
  expect: { timeout: 15_000 },
  fullyParallel: false,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  workers: 1,
  reporter: [['list']],
  use: {
    baseURL: 'http://127.0.0.1:3100',
    ...devices['Desktop Chrome'],
    browserName: 'chromium',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
  webServer: {
    command: 'npm run dev -- -p 3100',
    url: 'http://127.0.0.1:3100/paths/foundation-v2-preview',
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
    env: {
      NEXT_PUBLIC_CHERRYEDU_FOUNDATION_V2_PREVIEW: 'review-only',
      NEXT_TELEMETRY_DISABLED: '1',
    },
  },
});
