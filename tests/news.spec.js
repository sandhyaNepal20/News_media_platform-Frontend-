import { expect, test } from "@playwright/test";

test.describe("News Component Tests", () => {

    // ✅ Test: Ensure news section renders
    test("should render the news section", async ({ page }) => {
        await page.goto("http://localhost:5173"); // Ensure React app is running

        // Expect News Section to be visible
        await expect(page.locator("text=Latest News")).toBeVisible();
    });

    // ✅ Test: Ensure loading state appears before news loads
    test("should display loading spinner before news loads", async ({ page }) => {
        await page.goto("http://localhost:5173");

        // Expect loading spinner to be visible
        await expect(page.locator(".animate-spin")).toBeVisible();
    });



});


