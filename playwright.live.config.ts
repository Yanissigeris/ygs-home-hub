import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e-live",
  fullyParallel: false,
  retries: 0,
  workers: 1,
  reporter: "list",
  timeout: 90000,
  expect: { timeout: 15000 },
  use: {
    viewport: { width: 1280, height: 720 },
    trace: "off",
    screenshot: "only-on-failure",
    navigationTimeout: 60000,
    actionTimeout: 20000,
    launchOptions: { executablePath: "/bin/chromium" },
  },
  projects: [{ name: "chromium", use: {} }],
});
