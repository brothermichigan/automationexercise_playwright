import { expect } from "@playwright/test";
import test from "../fixtures/basePage.fixture";
import { LoginPage } from "../pages/login.page";
import { SignupPage } from "../pages/signup.page";
import { Address } from "../types/address";
import { AccountCreatedPage } from "../pages/accountCreated.page";
import { AccountDeletedPage } from "../pages/accountDeleted.page";

test("Register User", async ({ basePage, page }) => {
  const loginPage = new LoginPage(page);
  const signupPage = new SignupPage(page);
  const accountCreatedPage = new AccountCreatedPage(page);
  const accountDeletedPage = new AccountDeletedPage(page);

  const username = "WHARRGARBL";
  const password = "password";
  const email = "wharrgarbl@meme.com";
  const dob = "1/1/2000";
  const userAddress: Address = {
    firstName: "Wharr",
    lastName: "Garbl",
    company: "",
    address: "123 Broad Street",
    address2: "",
    country: "United States",
    state: "GA",
    city: "Dacula",
    zipcode: "30019",
    mobileNumber: "5555555555",
  };

  // 1. Launch browser
  // 2. Navigate to url 'https://automationexercise.com/'
  await page.goto("https://automationexercise.com/");

  // 3. Verify that home page is visible successfully
  await expect(page).toHaveURL("https://automationexercise.com/");
  await expect(page).toHaveTitle("Automation Exercise");

  // 4. Click on 'Signup / Login' button
  await basePage.signupLoginButton.click();

  // 5. Verify 'New User Signup!' is visible
  await expect(loginPage.newUserSignupHeader).toBeVisible();

  // 6. Enter name and email address
  await loginPage.enterNewUserName(username);
  await loginPage.enterNewUserEmail(email);

  // 7. Click 'Signup' button
  await loginPage.signupButton.click();

  // 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
  await expect(signupPage.accountInformationHeader).toBeVisible();

  // 9. Fill details: Title, Name, Email, Password, Date of birth
  await signupPage.titleMr.click();
  await signupPage.name.fill(username);
  await signupPage.password.fill(password);
  await signupPage.enterDOB(dob);

  // 10. Select checkbox 'Sign up for our newsletter!'
  await signupPage.newsletterCheckbox.check();

  // 11. Select checkbox 'Receive special offers from our partners!'
  await signupPage.specialOffersCheckbox.check();

  // 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
  await signupPage.fillAddress(userAddress);

  // 13. Click 'Create Account button'
  await signupPage.createAccountButton.click();

  // 14. Verify that 'ACCOUNT CREATED!' is visible
  await expect(accountCreatedPage.accountCreatedHeader).toBeVisible();

  // 15. Click 'Continue' button
  await accountCreatedPage.continueButton.click();

  // 16. Verify that 'Logged in as username' is visible
  await expect(
    basePage.loggedInAccountButton.filter({ hasText: username })
  ).toBeVisible();

  // 17. Click 'Delete Account' button
  await basePage.deleteAccountButton.click();

  // 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
  await expect(accountDeletedPage.accountDeletedHeader).toBeVisible();
  await accountDeletedPage.continueButton.click();
});

test("Login User with correct email and password and logout", async ({
  page,
  basePage,
}) => {
  const loginPage = new LoginPage(page);
  const email = "thisismytestemail@mail.com";
  const password = "password";
  const username = "thisismytestuser";

  // 1. Launch browser
  // 2. Navigate to url 'http://automationexercise.com'
  await page.goto("https://automationexercise.com/");

  // 3. Verify that home page is visible successfully
  await expect(page).toHaveURL("https://automationexercise.com/");
  await expect(page).toHaveTitle("Automation Exercise");

  // 4. Click on 'Signup / Login' button
  await basePage.signupLoginButton.click();

  // 5. Verify 'Login to your account' is visible
  await expect(loginPage.loginToYourAccountHeader).toBeVisible();

  // 6. Enter correct email address and password
  await loginPage.enterExistingUserEmail(email);
  await loginPage.enterExistingUserPassword(password);

  // 7. Click 'login' button
  await loginPage.loginButton.click();

  // 8. Verify that 'Logged in as username' is visible
  await expect(
    basePage.loggedInAccountButton.filter({ hasText: username })
  ).toBeVisible();

  // Diverging from the test case as described here since we've already tested deletion
  // Includes Test Case 4: Logout user
  // 9. Click 'logout' button
  await basePage.logoutButton.click();
});

test("Login User with incorrect email and password", async ({
  page,
  basePage,
}) => {
  const loginPage = new LoginPage(page);
  const email = "thisismytestemail@mail.com";
  const password = "notthepassword";
  const username = "thisismytestuser";

  // 1. Launch browser
  // 2. Navigate to url 'http://automationexercise.com'
  await page.goto("https://automationexercise.com/");

  // 3. Verify that home page is visible successfully
  await expect(page).toHaveURL("https://automationexercise.com/");
  await expect(page).toHaveTitle("Automation Exercise");

  // 4. Click on 'Signup / Login' button
  await basePage.signupLoginButton.click();

  // 5. Verify 'Login to your account' is visible
  await expect(loginPage.loginToYourAccountHeader).toBeVisible();

  // 6. Enter correct email address and password
  await loginPage.enterExistingUserEmail(email);
  await loginPage.enterExistingUserPassword(password);

  // 7. Click 'login' button
  await loginPage.loginButton.click();

  // 8. Verify error 'Your email or password is incorrect!' is visible
  await expect(loginPage.incorrectEmailOrPassword).toBeVisible();
});

test("Register user with existing email", async ({ page, basePage }) => {
  const loginPage = new LoginPage(page);
  const email = "thisismytestemail@mail.com";
  const password = "password";
  const username = "thisismytestuser";

  // 1. Launch browser
  // 2. Navigate to url 'http://automationexercise.com'
  await page.goto("https://automationexercise.com/");

  // 3. Verify that home page is visible successfully
  await expect(page).toHaveURL("https://automationexercise.com/");
  await expect(page).toHaveTitle("Automation Exercise");

  // 4. Click on 'Signup / Login' button
  await basePage.signupLoginButton.click();

  // 5. Verify 'New User Signup!' is visible
  await expect(loginPage.newUserSignupHeader).toBeVisible();

  // 6. Enter name and already registered email address
  await loginPage.enterExistingUserEmail(email);
  await loginPage.enterExistingUserPassword(password);

  // 7. Click 'Signup' button
  await loginPage.signupButton.click();

  // 8. Verify error 'Email Address already exist!' is visible
  await expect(loginPage.emailAlreadyExists).toBeVisible;
});
