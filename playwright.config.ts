import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: 1,
  reporter: "list",
  timeout: 90000,
  expect: { timeout: 15000 },
  use: {
    baseURL: "https://id-preview--2943bdbe-b8b7-47f2-9d57-c3edc61fa920.lovable.app",
    viewport: { width: 1280, height: 720 },
    trace: "off",
    navigationTimeout: 60000,
    actionTimeout: 20000,
    launchOptions: {
      executablePath: "/bin/chromium",
    },
  },
  projects: [
    {
      name: "chromium",
      use: {},
    },
  ],
});
