
import { expect, test } from '@playwright/test';

test('test1 ', async ({ page }) => {

    await page.goto('/loginpagePractise/');
    console.log('page title', await page.title());

    await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');

    await page.locator('#username').fill("rahulSheety")
    await page.locator('[type=password]').fill('sudent');
    await page.locator('input#signInBtn').click();

    const text1 = await page.locator("[style*='block']").textContent();
    console.log('text=', await page.locator("[style*='block']").textContent());

    expect(text1).toContain("Incorrect username/password.");

});

test.only('test3 ', async ({ page }) => {

    const userName = page.locator('#username');
    const password= page.locator('[type=password]');
    const signIn = page.locator('input#signInBtn');
    const cardTitles= page.locator('.card-body a');

    await page.goto('/loginpagePractise/');
    console.log('page title', await page.title());

    await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');

    await userName.fill("rahulshettyacademy")
    await password.fill('learning');
    await signIn.click();
   
    console.log('1st item', await cardTitles.first().textContent());
    console.log('second item', await cardTitles.nth(1).textContent());

    const allTitls= await cardTitles.allTextContents();
    console.log('list all item', allTitls ); //return emplty list if nth().textcotent(0) not used befre allText


   
});


test.skip('test1-a skip ', async ({ page }) => {
    await page.goto('/loginpagePractise/');
});