import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: 1,
  reporter: "list",
  use: {
    baseURL: "https://id-preview--2943bdbe-b8b7-47f2-9d57-c3edc61fa920.lovable.app",
    trace: "off",
    launchOptions: {
      executablePath: "/nix/var/nix/profiles/sandbox/bin/chromium",
    },
  },
  projects: [
    {
      name: "chromium",
      use: {},
    },
  ],
});
