import { test, expect } from '@playwright/test';

test.describe('Epam Website Test', () => {
  test('Verify Client Work Page', async ({ page }) => {
    // Step 1: Navigate to the Epam website
    await page.goto('https://www.epam.com/');

    // Step 2: Click on "Services" in the header menu
    await page.click('text=Services');

    // Step 3: Click on "Explore Our Client Work"
    await page.click('text=Explore Our Client Work');

    // Step 4: Verify "Client Work" text is visible
    const clientWorkText = await page.locator('text=Client Work');
    await expect(clientWorkText).toBeVisible();
  });
});