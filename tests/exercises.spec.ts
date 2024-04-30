import { test, expect } from "@playwright/test";

test("Register User", async ({ page }) => {
  // 1. Launch browser
  // 2. Navigate to url 'https://automationexercise.com/'
  await page.goto("https://automationexercise.com/");

  // 3. Verify that home page is visible successfully
  await expect(page).toHaveURL("https://automationexercise.com/");
  await expect(page).toHaveTitle("Automation Exercise");

  // 4. Click on 'Signup / Login' button
  const titleRegex = new RegExp("Signup / Login");
  await page.getByRole("link", { name: titleRegex }).click();

  // 5. Verify 'New User Signup!' is visible
  await expect(
    page.getByRole("heading", { name: "New User Signup!" })
  ).toBeVisible();

  // 6. Enter name and email address
  await page.getByPlaceholder("Name").fill("This is my test user");
  await page
    .locator("form")
    .filter({ hasText: "Signup" })
    .getByPlaceholder("Email Address")
    .fill("wharrgarble@meme.com");

  // 7. Click 'Signup' button
  await page.getByRole("button").getByText("Signup").click();

  // 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
  await expect(
    page.getByRole("heading", { name: "ENTER ACCOUNT INFORMATION" })
  ).toBeVisible();

  // 9. Fill details: Title, Name, Email, Password, Date of birth
  await page.getByLabel("Mr.").click();
  await page.getByLabel("Name *", { exact: true }).fill("WHARRGARBL");
  await page.getByLabel("Password *", { exact: true }).fill("password");
  await page.locator("#days").selectOption("1");
  await page.locator("#months").selectOption("January");
  await page.locator("#years").selectOption("2000");

  // 10. Select checkbox 'Sign up for our newsletter!'
  await page.getByLabel("Sign up for our newsletter!").check();

  // 11. Select checkbox 'Receive special offers from our partners!'
  await page.getByLabel("Receive special offers from").check();

  // 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
  await page.getByLabel("First name *").fill("Wharr");
  await page.getByLabel("Last name *").fill("Garbl");
  await page.getByTestId("company").fill("WHARRGARBL Inc.");
  await page.getByLabel("Address *").fill("123 Broad Street");
  await page.getByTestId("country").selectOption("United States");
  await page.getByTestId("state").fill("GA");
  await page.getByTestId("city").fill("Dacula");
  await page.getByTestId("zipcode").fill("30019");
  await page.getByTestId("mobile_number").fill("5555555555");

  // 13. Click 'Create Account button'
  await page.getByRole("button", { name: "Create Account" }).click();

  // 14. Verify that 'ACCOUNT CREATED!' is visible
  await expect(
    page.getByRole("heading", { name: "ACCOUNT CREATED!" })
  ).toBeVisible();

  // 15. Click 'Continue' button
  await page.getByTestId("continue-button").click();

  // 16. Verify that 'Logged in as username' is visible
  await expect(page.getByText("Logged in as wharrgarbl")).toBeVisible();

  // 17. Click 'Delete Account' button
  await page.getByRole("link", { name: "Delete Account" }).click();

  // 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
  await expect(
    page.getByRole("heading", { name: "ACCOUNT DELETED!" })
  ).toBeVisible();
  await page.getByTestId("continue-button").click();
});
