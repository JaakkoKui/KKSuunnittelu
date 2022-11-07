import { test, expect } from '@playwright/test';

test('Go to Areena Yle'
, async ({ page }) => {
  await page.goto('https://areena.yle.fi/1-3339547');

  // create a locator
  const getStarted = page.getByRole('button', { name: 'Kausi 3' });
  // Expect an attribute "to be strictly equal" to the value.
  await expect(getStarted).toHaveAttribute('aria-current', 'false');

  await getStarted.click();

  const jakso = page.getByText('Jakso 5');
  await expect(jakso).toHaveText('Jakso 5: Kummeli');
  await jakso.click();

  const header = page.locator('h1');
  await expect(header).toHaveText('K3, J5: Kummeli');

  const pvm = page.locator('time', {hasText: "julkaistu"});
  await expect(pvm).toHaveText('julkaistu ti 10.1.2006');

});