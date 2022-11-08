import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  await page.goto('https://areena.yle.fi/tv/opas');
  const uutiset = await page.$$('span:has-text("22.00 Kymmenen uutiset")');
});