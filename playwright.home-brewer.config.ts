import {defineConfig,devices} from '@playwright/test';
export default defineConfig({
 testDir:'./tests/home-brewer',
 timeout:100_000,
 expect:{timeout:15_000},
 fullyParallel:false,
 forbidOnly:!!process.env.CI,
 retries:0,
 workers:1,
 reporter:[['list']],
 use:{baseURL:'http://127.0.0.1:3115',...devices['Desktop Chrome'],
   browserName:'chromium',screenshot:'only-on-failure',trace:'retain-on-failure'},
 webServer:{command:'npm run dev -- -p 3115',url:'http://127.0.0.1:3115/home-brewer-v2',
   reuseExistingServer:!process.env.CI,timeout:180_000,
   env:{CHERRYEDU_HOME_BREWER_V2_REVIEW:'enabled',NEXT_TELEMETRY_DISABLED:'1'}}
});
