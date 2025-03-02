import { expect, test } from "@playwright/test";

test.describe("Register Page Tests", () => {

    // ✅ Test if Register page renders correctly
    test("should render register page elements", async ({ page }) => {
        await page.goto("http://localhost:5173/register");

        // Ensure input fields are present
        await expect(page.locator("input#name")).toBeVisible();
        await expect(page.locator("input#email")).toBeVisible();
        await expect(page.locator("input#password")).toBeVisible();
        await expect(page.locator("input#confirmPassword")).toBeVisible();

        // Ensure 'Register' button is present
        await expect(page.locator("button:has-text('Register')")).toBeVisible();

        // Ensure 'Login' link is present
        await expect(page.locator("text=Login")).toBeVisible();
    });



    // ✅ Test navigation to Login page
    test("should navigate back to login page when clicking 'Login'", async ({ page }) => {
        await page.goto("http://localhost:5173/register");

        // Click 'Login' link
        await page.click("text=Login");

        // Expect navigation to Login page
        await expect(page).toHaveURL("http://localhost:5173/login");
    });

});
