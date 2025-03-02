import { expect, test } from "@playwright/test";

test.describe("Forgot Password Page Tests", () => {

    // ✅ Test if Forgot Password page renders correctly
    test("should render forgot password page elements", async ({ page }) => {
        await page.goto("http://localhost:5173/forgot-password");

        // Ensure page title is visible
        await expect(page.locator("text=Forgot Password")).toBeVisible();

        // Ensure email input field is present
        await expect(page.locator("input#email")).toBeVisible();

        // Ensure 'Send Reset Link' button is present
        await expect(page.locator("button:has-text('Send Reset Link')")).toBeVisible();

        // Ensure 'Back to Login' link is present
        await expect(page.locator("text=Back to Login")).toBeVisible();
    });

    // ✅ Test form validation (empty email)
    test("should show validation error for empty email", async ({ page }) => {
        await page.goto("http://localhost:5173/forgot-password");

        // Click submit button without filling email
        await page.click("button:has-text('Send Reset Link')");

        // Expect validation error message
        await expect(page.locator("text=Email is required")).toBeVisible();
    });






    // ✅ Test navigation to Login page
    test("should navigate back to login page when clicking 'Back to Login'", async ({ page }) => {
        await page.goto("http://localhost:5173/forgot-password");

        // Click 'Back to Login' link
        await page.click("text=Back to Login");

        // Expect navigation to Login page
        await expect(page).toHaveURL("http://localhost:5173/login");
    });

});
