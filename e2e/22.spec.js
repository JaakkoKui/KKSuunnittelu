import { test, expect } from '@playwright/test';
import matchers from 'expect-axe-playwright'

expect.extend(matchers)
const dotenv = require('dotenv').config();

const SECRET = process.env.SECRET;
const API_KEY = process.env.API_KEY;

test.extend({
  browser: async ({
    playwright,
    browserName,
    channel,
    launchOptions
  }, use) => {
    const browser = await playwright.chromium.connectOverCDP({
      wsEndpoint: `wss://cloud.testingbot.com?key=${API_KEY}&secret=${SECRET}&browserName=chrome&browserVersion=latest`,
    });
    await use(browser)
    await browser.close()
  },
})

test('test', async ({ page }) => {

  await page.goto('https://testingbot.com')
  const title = await page.title()
  expect(title).toMatch('TestingBot')

  await page.goto('https://areena.yle.fi/tv/opas');
  await expect(page).not.toPassAxe({
    filename: "kymmenen-uutiset-report-sun-27-11.html"
  })

  const uutiset = page.locator('span', {hasText: "Kymmenen uutiset"});
  expect(uutiset).not.toBeNull();
});