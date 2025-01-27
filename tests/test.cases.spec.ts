import { test } from "../fixtures/fixtures";
import * as allure from "allure-js-commons";
import { ContentType } from "allure-js-commons";

test.afterEach(async ({ page }) => {
  if (test.info().status === 'failed') {
    const testCaseTitle = test.info().title.replace(/[^a-zA-Z0-9]/g, '_'); // Replace non-alphanumeric characters
    const screenshotPath = `./screenshots/${testCaseTitle}.png`;
    await page.screenshot({ path: screenshotPath });
    console.log(`Screenshot saved at: ${screenshotPath}`);

    await allure.attachment("Text file", testCaseTitle, ContentType.TEXT);
    await allure.attachmentPath("Screenshot", screenshotPath, {
    contentType: ContentType.PNG,
    fileExtension: "png",
    }
  )};
});

test('Signed Up page is open', {tag: "@unathorized"}, async ({ homePage }) => {
  await homePage.open();
  await homePage.openSignUpPage();
  await homePage.isOpen();
});