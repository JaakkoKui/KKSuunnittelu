import { test, expect } from '@playwright/test';
const dotenv = require('dotenv').config();

const SECRET = process.env.SECRET;
const API_KEY = process.env.API_KEY;

const test = base.test.extend({
  browser: async ({
    playwright,
    browserName,
    headless,
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
  base.expect(title).toMatch('TestingBot')

  await page.goto('https://areena.yle.fi/tv/opas');
  const uutiset = await page.$$('span:has-text("22.00 Kymmenen uutiset")');
});