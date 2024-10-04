const { test, expect } = require("@playwright/test");

test('my first test', async ({ page }) => {
    // Intercept network requests and add a delay
    await page.route('**/*', (route) => {
        route.continue({ delay: 500 }); // Delay each request by 500ms
    });

    await page.goto('http://192.168.0.199:7003/cbs9/loginerror.html');
    await page.getByRole('textbox', { name: 'Username *' }).click();
    await page.getByRole('textbox', { name: 'Username *' }).fill('cbs.manager1');
    await page.getByLabel('Password *').click();
    await page.getByLabel('Password *').fill('Manager1');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('button', { name: 'Force Login' }).click();
    await page.getByPlaceholder('Search Menu').click();
    await page.getByPlaceholder('Search Menu').fill('j');
    await page.getByText('Start Serving Customers').click();
    await page.getByPlaceholder('Search Menu').fill('job');
    await page.getByText('Job Scheduler').click();
    await page.getByRole('cell', { name: 'cashFlowUpdateJobDetail' }).click();
    await page.locator('button').filter({ hasText: 'send' }).click();
});
   

    // await page.locator('[data-test="item-4-title-link"]').click();
    // await page.waitForTimeout(1500);
    // await page.locator('[data-test="add-to-cart"]').click();
    // await page.waitForTimeout(1500);
    // await page.locator('[data-test="shopping-cart-link"]').click();
    // await page.waitForTimeout(1500);
    // await page.locator('[data-test="checkout"]').click();
    
    // await page.locator('[data-test="firstName"]').click();
    // await page.locator('[data-test="firstName"]').fill('javeria');
    // await page.waitForTimeout(1500); // Wait for 1 second

    // await page.locator('[data-test="lastName"]').click();
    // await page.locator('[data-test="lastName"]').fill('athar');
    // await page.waitForTimeout(1500); // Wait for 1 second

    // await page.locator('[data-test="postalCode"]').click();
    // await page.locator('[data-test="postalCode"]').fill('75300');
    // await page.waitForTimeout(1500); // Wait for 1 second

    // await page.locator('[data-test="continue"]').click();
    // await page.waitForTimeout(1500); // Wait for 1 second

    // await page.locator('[data-test="finish"]').click();
    // await page.waitForTimeout(1500); // Wait for 1 second

    // await page.locator('[data-test="back-to-products"]').click();
    // await page.waitForTimeout(1500);
// });
