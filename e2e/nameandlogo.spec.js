import { test, expect } from '@playwright/test';
test('Test logos and names', async ({ page }) => {
  await page.goto('https://areena.yle.fi/tv/opas');

  const TV1 = page.locator('[aria-label="Yle TV1"]')
  await expect(TV1).toHaveClass('channel-header__logo ')

  const TV2 = page.locator('[aria-label="Yle TV2"]')
  await expect(TV2).toHaveClass('channel-header__logo ')

  const HERO = page.locator('[aria-label="Hero"]')
  await expect(HERO).toHaveClass('channel-header__logo ')

})
