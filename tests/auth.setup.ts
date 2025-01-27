// import { test as setup, expect } from '@playwright/test';
// import path from 'path';

// const authFile = path.join(__dirname, '../playwright/.auth/user.json');
// const userCredentials = {
//   username: "standard_user",
//   password: "secret_sauce",
// }

// setup('authenticate', async ({ page, context }) => {
//   await page.goto('https://www.saucedemo.com/');
//   await page.getByRole('textbox', { name: 'Username' }).fill(userCredentials.username);
//   await page.getByRole('textbox', { name: 'Password' }).fill(userCredentials.password);
//   await page.getByRole('button', { name: 'Login' }).click();
//   await expect(page.getByRole('button', { name: 'Open Menu' })).toBeVisible();
//   // Modify cookie expiration to 1 day
//   const cookies = await context.cookies();
//   console.log(cookies);
//   const oneDayInSeconds = 24 * 60 * 60;
//   const currentTimestamp = Math.floor(Date.now() / 1000);

//   const updatedCookies = cookies.map(cookie => ({
//     ...cookie,
//     expires: currentTimestamp + oneDayInSeconds,
//   }));

//   // Set updated cookies back to the context
//   await context.addCookies(updatedCookies);

//   await page.context().storageState({ path: authFile });
// });