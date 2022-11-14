import { test, expect } from '@playwright/test';

test('Yle Areena Sign Up Email wrong format test'
, async ({ page }) => {
  await page.goto('https://areena.yle.fi/tv');
  await expect(page).toHaveTitle('Yle Areena – Enemmän kuin ehdit katsoa ja kuunnella | TV | Areena | yle.fi')

  const getStarted = page.getByRole('button', { name: 'Kirjaudu' });
  //await page.getByRole('button', { name: 'Kirjaudu' }).click();
  await getStarted.click();
  
  await page.frameLocator('role=dialog[name="kirjaudu sisään"] >> iframe').getByRole('link', { name: 'Luo Yle Tunnus' }).click();

  await page.frameLocator('role=dialog[name="kirjaudu sisään"] >> iframe').getByLabel('Sähköposti').fill('aaaaaaa');

  await page.frameLocator('role=dialog[name="kirjaudu sisään"] >> iframe').getByLabel('Salasana').click();

  await page.frameLocator('role=dialog[name="kirjaudu sisään"] >> iframe').getByText('Tarkista sähköpostiosoitteen muoto.').click();
  await page.getByRole('button', { name: 'sulje dialogi' }).click();
  await expect(page).toHaveURL('https://areena.yle.fi/tv');


});
