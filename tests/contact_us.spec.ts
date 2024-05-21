import { expect } from "@playwright/test";
import test from "../fixtures/basePage.fixture";
import { ContactUsPage } from "../pages/contact_us.page";
import path from "path";

test("Contact Us Form", async ({ page, basePage }) => {
  const contactUsPage = new ContactUsPage(page);
  const username = "WHARRGARBL";
  const email = "wharrgarbl@meme.com";
  const subject = "WHARRGARBL";
  const message = "WHARRGARBL";

  // 1. Launch browser
  // 2. Navigate to url 'http://automationexercise.com'
  await page.goto("https://automationexercise.com");

  // 3. Verify that home page is visible successfully
  await expect(page).toHaveURL("https://automationexercise.com");
  await expect(page).toHaveTitle("Automation Exercise");

  // 4. Click on 'Contact Us' button
  await basePage.contactUsButton.click();

  // 5. Verify 'GET IN TOUCH' is visible
  await expect(contactUsPage.getInTouchHeader).toBeVisible();

  // 6. Enter name,email, subject and message
  await contactUsPage.enterName(username);
  await contactUsPage.enterEmail(email);
  await contactUsPage.enterSubject(subject);
  await contactUsPage.enterMessage(message);

  // 7. Upload file
  await contactUsPage.chooseFileButton.setInputFiles({
    name: "file.txt",
    mimeType: "text/plain",
    buffer: Buffer.from("this is test"),
  });
  // await contactUsPage.chooseFileButton.click();

  // 8. Click 'Submit' button
  page.on("dialog", (dialog) => dialog.accept());
  await page.waitForTimeout(100); // Form resets without an explicit wait for some reason
  await contactUsPage.submitButton.click();

  // 9. Click OK button
  // Handled by dialog listener in step 8

  // 10. Verify success message 'Success! Your details have been submitted successfully.' is visible
  await expect(contactUsPage.successMessage).toBeVisible();

  // 11. Click 'Home' button and verify that landed to home page successfully
  await basePage.homeButton.click();
  if (await contactUsPage.closeGoogleVignette.isVisible())
    await contactUsPage.closeGoogleVignette.click();
  await expect(page).toHaveURL("https://automationexercise.com");
  await expect(page).toHaveTitle("Automation Exercise");
});
