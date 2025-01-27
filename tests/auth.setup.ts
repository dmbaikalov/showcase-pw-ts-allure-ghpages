// import { test as setup, expect } from '@playwright/test';
// import path from 'path';

// const authFile = path.join(__dirname, '../playwright/.auth/user.json');
// const loginUserCredentials = {
//   email: "myemail@email.email",
//   password: "password123",
// }

// setup('authenticate', async ({ page, context }) => {
//   await page.goto('/login');
//   await page.locator('.login-form').getByRole('textbox', { name: 'Email Address' }).fill(loginUserCredentials.email);
//   await page.locator('.login-form').getByRole('textbox', { name: 'Password' }).fill(loginUserCredentials.password);
//   await page.locator('.login-form').getByRole('button', { name: 'Login' }).click();
//   await expect(page.url()).toBe('https://automationexercise.com/')
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