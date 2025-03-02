import { expect, test } from "@playwright/test";

test.describe("Login Page Tests", () => {

    // ✅ Test if login form renders correctly
    test("should render login form elements", async ({ page }) => {
        await page.goto("/login");

        // Check for essential elements
        await expect(page.locator("text=Email")).toBeVisible();
        await expect(page.locator("input#email")).toBeVisible();
        await expect(page.locator("input#password")).toBeVisible();
        await expect(page.locator('button:has-text("Login")')).toBeVisible();
        await expect(page.locator("text=Sign Up")).toBeVisible();
        await expect(page.locator("text=Forgot password?")).toBeVisible();
    });


    // // ✅ Test successful login for normal user
    // test("should store user data and redirect after successful login", async ({ page }) => {
    //     await page.route("**/api/user/login", (route) =>
    //         route.fulfill({
    //             status: 200,
    //             body: JSON.stringify({
    //                 token: "dummy_token",
    //                 user: {
    //                     id: "user123",
    //                     fullName: "Sandhya Nepal",
    //                     email: "sandhya@gmail.com",
    //                     role: 0, // Normal user
    //                 },
    //             }),
    //         })
    //     );

    //     await page.goto("/login");

    //     // Enter correct credentials
    //     await page.fill('input#email', "sandhya@gmail.com");
    //     await page.fill('input#password', "password123");

    //     // Click login
    //     await page.click('button:has-text("Login")');

    //     // Verify localStorage values
    //     const storedUserData = await page.evaluate(() => localStorage.getItem("userData"));
    //     const token = await page.evaluate(() => localStorage.getItem("token"));
    //     const isLoggedIn = await page.evaluate(() => localStorage.getItem("isLoggedIn"));

    //     expect(JSON.parse(storedUserData)).toEqual({
    //         id: "user123",
    //         fullName: "Sandhya Nepal",
    //         email: "sandhya@gmail.com",
    //         role: 0,
    //     });
    //     expect(token).toBe("dummy_token");
    //     expect(isLoggedIn).toBe("true");

    //     // Expect navigation to home page
    //     await expect(page).toHaveURL("/");
    // });

    // // ✅ Test admin user redirection
    // test("should redirect admin to dashboard", async ({ page }) => {
    //     await page.route("**/api/user/login", (route) =>
    //         route.fulfill({
    //             status: 200,
    //             body: JSON.stringify({
    //                 token: "admin_token",
    //                 user: {
    //                     id: "admin123",
    //                     fullName: "Sandhya Nepal",
    //                     email: "sandhya@gmail.com",
    //                     role: 1, // Admin
    //                 },
    //             }),
    //         })
    //     );

    //     await page.goto("/login");

    //     await page.fill('input#email', "sandhya@gmail.com");
    //     await page.fill('input#password', "adminpassword");

    //     await page.click('button:has-text("Login")');

    //     await expect(page).toHaveURL("/admin-dashboard");
    // });

    // ✅ Test navigation to Signup Page
    test("should navigate to signup page", async ({ page }) => {
        await page.goto("/login");

        await page.click('text=Sign Up');

        await expect(page).toHaveURL("/register");
    });

    // // ✅ Test login button disabled while loading
    // test("should disable login button while API request is in progress", async ({ page }) => {
    //     await page.route("**/api/user/login", async (route) => {
    //         await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate 2s delay
    //         await route.fulfill({
    //             status: 200,
    //             body: JSON.stringify({
    //                 token: "dummy_token",
    //                 user: {
    //                     id: "user123",
    //                     fullName: "Sandhya Nepal",
    //                     email: "sandhya@gmail.com",
    //                     role: 0,
    //                 },
    //             }),
    //         });
    //     });

    //     await page.goto("/login");

    //     await page.fill('input#email', "sandhya@gmail.com");
    //     await page.fill('input#password', "password123");

    //     // Click login button
    //     await page.click('button:has-text("Login")');

    //     // Ensure button is disabled during request
    //     await expect(page.locator('button:has-text("Login")')).toBeDisabled();
    // });
});
