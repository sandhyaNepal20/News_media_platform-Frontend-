import { expect, test } from "@playwright/test";

test.describe("Home Page Tests", () => {


    // ✅ Test loading state appears
    test("should display loading spinner before news loads", async ({ page }) => {
        await page.goto("http://localhost:5173/");

        // Ensure loader is visible
        await page.waitForSelector(".animate-spin", { timeout: 5000 });
        await expect(page.locator(".animate-spin")).toBeVisible();
    });







});
