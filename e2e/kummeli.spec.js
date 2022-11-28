import { test, expect } from '@playwright/test';
const dotenv = require('dotenv').config();
import matchers from 'expect-axe-playwright'

expect.extend(matchers)

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

test('Kummelin 3 kauden 5 jakso', async ({ page }) => {
  await page.goto('https://testingbot.com')
  const title = await page.title()
  expect(title).toMatch('TestingBot')

  await page.goto('https://areena.yle.fi/1-3339547');
  await expect(page).not.toPassAxe({
    filename: 'kummeli-report-mon-28-11.html',
  });

  // create a locator
  const getStarted = page.getByRole('button', { name: 'Kausi 3' });
  // Expect an attribute "to be strictly equal" to the value.
  await expect(getStarted).toHaveAttribute('aria-current', 'false');

  await getStarted.click();

  const jakso = page.getByText('Jakso 5');
  await expect(jakso).toHaveText('Jakso 5: Kummeli');
  await jakso.click();

  await expect(page).toPassAxe({
    filename: 'kummeli-episode-report-mon-28-11.html',
  });

  const header = page.locator('h1');
  await expect(header).toHaveText('K3, J5: Kummeli');

  const pvm = page.locator('time', {hasText: "julkaistu"});
  await expect(pvm).toHaveText('julkaistu ti 10.1.2006');

})