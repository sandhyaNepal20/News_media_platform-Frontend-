import { expect, test } from "@playwright/test";

test.describe("Search Results Page Tests", () => {




    // ✅ Test when no search results are found
    test("should display no results message if search returns no news", async ({ page }) => {
        await page.route("**/api/news/search?query=news", (route) =>
            route.fulfill({
                status: 200,
                body: [],
            })
        );

        await page.goto("/search/news");

        await expect(page.locator("text=No results found")).toBeVisible();
    });



});



test.describe("Header Component Tests", () => {

    // ✅ Test: Ensure search bar is present
    test("should render the search input field", async ({ page }) => {
        await page.goto("http://localhost:5173"); // Ensure React app is running

        // Expect search input to be visible
        await expect(page.locator("input[placeholder='Search news...']")).toBeVisible();
    });

    // ✅ Test: Ensure user can type in search bar
    test("should allow user to type in search bar", async ({ page }) => {
        await page.goto("http://localhost:5173");

        // Type "Technology" in search bar
        await page.fill("input[placeholder='Search news...']", "Technology");

        // Assert the input field contains "Technology"
        await expect(page.locator("input[placeholder='Search news...']")).toHaveValue("Technology");
    });

    // ✅ Test: Clicking search should navigate to search results
    test("should navigate to search results page when search is submitted", async ({ page }) => {
        await page.goto("http://localhost:5173");

        // Type "Technology" in search bar
        await page.fill("input[placeholder='Search news...']", "Technology");

        // Click the search button
        await page.click("button:text('🔍')");

        // Expect navigation to search results page
        await expect(page).toHaveURL(/\/search\/Technology/);
    });

});
