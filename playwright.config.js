import { defineConfig } from "@playwright/test";

export default defineConfig({
    testDir: "./tests",  // 👈 Ensure your tests are inside this folder
    use: {
        baseURL: "http://localhost:5173", // 👈 Your frontend URL
        trace: "on-first-retry",
    },
    webServer: {
        command: "npm run dev", // 👈 Ensure your frontend starts correctly
        url: "http://localhost:5173",
        reuseExistingServer: true,
    },
});
