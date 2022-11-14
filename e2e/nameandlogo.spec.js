const base = require('@playwright/test')
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


test('Test logos and names', async ({ page }) => {

  await page.goto('https://testingbot.com')
  const title = await page.title()
  base.expect(title).toMatch('TestingBot')

  await page.goto('https://areena.yle.fi/tv/opas');

  const TV1 = page.locator('[aria-label="Yle TV1"]')
  await base.expect(TV1).toHaveClass('channel-header__logo ')

  const TV2 = page.locator('[aria-label="Yle TV2"]')
  await base.expect(TV2).toHaveClass('channel-header__logo ')

  const HERO = page.locator('[aria-label="Hero"]')
  await base.expect(HERO).toHaveClass('channel-header__logo ')

})
