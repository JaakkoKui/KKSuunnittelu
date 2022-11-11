import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://www.google.com/search?q=testingbot&oq=testingbot&aqs=chrome..69i57.2935j0j2&sourceid=chrome&ie=UTF-8');

  await page.getByRole('button', { name: 'Hylkää kaikki' }).click();
  await expect(page).toHaveURL('https://www.google.com/search?q=testingbot&oq=testingbot&aqs=chrome..69i57.2935j0j2&sourceid=chrome&ie=UTF-8');

  await page.getByRole('link', { name: 'TestingBot: Cross Browser Testing and Mobile App Testing https://testingbot.com' }).click();
  await expect(page).toHaveURL('https://testingbot.com/');

  await page.locator('nav:has-text("TestingBot Features Cross Browser Testing Test on 3800+ browsers and devices Liv")').getByRole('link', { name: 'Log in' }).click();
  await expect(page).toHaveURL('https://testingbot.com/users/sign_in');

  await page.getByLabel('Email').click();

  await page.getByLabel('Email').fill('v-k@live.fi');

  await page.getByLabel('Email').press('Tab');

  await page.getByLabel('Password').fill('asdasdasd');

  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page).toHaveURL('https://testingbot.com/members');

  await page.getByRole('link', { name: 'Live Web Testing' }).click();
  await expect(page).toHaveURL('https://testingbot.com/members/manual/new');

  await page.getByRole('link', { name: '104' }).nth(1).click();
  await expect(page).toHaveURL('https://testingbot.com/members/manual/new#');

  await page.locator('input[name="manual_session\\[url\\]"]').click();

//  await page.getByRole('link', { name: 'Dashboard' }).click();
//  await expect(page).toHaveURL('https://testingbot.com/members');

//  await page.getByRole('link', { name: 'Live Web Testing' }).click();
//  await expect(page).toHaveURL('https://testingbot.com/members/manual/new');

//  await page.locator('input[name="manual_session\\[url\\]"]').click();

//  await page.locator('input[name="manual_session\\[url\\]"]').fill('areena.yle.fi/opas');

//  await page.locator('input[name="manual_session\\[url\\]"]').click();

  await page.locator('input[name="manual_session\\[url\\]"]').click();

  await page.locator('input[name="manual_session\\[url\\]"]').fill('areena.yle.fi/tv');

//  await page.getByRole('link', { name: '104' }).nth(1).click();
//  await expect(page).toHaveURL('https://testingbot.com/members/manual/new#');

  await page.getByRole('button', { name: 'Start Browser' }).click();

//  await page.locator('input[name="manual_session\\[url\\]"]').click();

//  await page.locator('input[name="manual_session\\[url\\]"]').click();


  await page.locator('input[name="manual_session\\[url\\]"]').fill('https://areena.yle.fi/tv');

//  await page.getByRole('button', { name: 'Start Browser' }).click();
//  await expect(page).toHaveURL('https://testingbot.com/members/manual/409082');
//  await page.getByRole('button', { name: 'Kirjaudu' }).click();
//  await page.frameLocator('iframe').getByLabel('Sähköposti').click();
//  await page.frameLocator('iframe').getByRole('link', { name: 'Luo Yle Tunnus' }).click();
//  await page.frameLocator('iframe').getByLabel('Sähköposti').fill('eitoimi');
//  await page.frameLocator('iframe').getByLabel('Salasana').click();
//  await page.frameLocator('iframe').getByText('Tarkista sähköpostiosoitteen muoto.').click();
//  await page.frameLocator('iframe').getByText('Tarkista sähköpostiosoitteen muoto.').click();

});