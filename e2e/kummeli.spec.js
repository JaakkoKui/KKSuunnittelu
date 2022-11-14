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

test('Kummelin 3 kauden 5 jakso', async ({ page }) => {
  await page.goto('https://testingbot.com')
  const title = await page.title()
  base.expect(title).toMatch('TestingBot')

  await page.goto('https://areena.yle.fi/1-3339547');

  // create a locator
  const getStarted = page.getByRole('button', { name: 'Kausi 3' });
  // Expect an attribute "to be strictly equal" to the value.
  await base.expect(getStarted).toHaveAttribute('aria-current', 'false');

  await getStarted.click();

  const jakso = page.getByText('Jakso 5');
  await base.expect(jakso).toHaveText('Jakso 5: Kummeli');
  await jakso.click();

  const header = page.locator('h1');
  await base.expect(header).toHaveText('K3, J5: Kummeli');

  const pvm = page.locator('time', {hasText: "julkaistu"});
  await base.expect(pvm).toHaveText('julkaistu ti 10.1.2006');

})