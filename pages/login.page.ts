import { Page, Locator } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly loginToYourAccountHeader: Locator;
  readonly existingUserEmail: Locator;
  readonly existingUserPassword: Locator;
  readonly loginButton: Locator;
  readonly incorrectEmailOrPassword: Locator;
  readonly newUserSignupHeader: Locator;
  readonly newUserName: Locator;
  readonly newUserEmail: Locator;
  readonly signupButton: Locator;
  readonly emailAlreadyExists: Locator;

  constructor(page: Page) {
    this.page = page;

    this.loginToYourAccountHeader = page.getByRole("heading", {
      name: "Login to your account",
    });
    this.existingUserEmail = page
      .locator("form")
      .filter({ hasText: "Login" })
      .getByPlaceholder("Email Address");
    this.existingUserPassword = page.getByPlaceholder("Password");
    this.loginButton = page.getByRole("button").getByText("Login");
    this.incorrectEmailOrPassword = page.getByText("Your email or password is");

    this.newUserName = page.getByPlaceholder("Name");
    this.newUserSignupHeader = page.getByRole("heading", {
      name: "New User Signup!",
    });
    this.newUserEmail = page
      .locator("form")
      .filter({ hasText: "Signup" })
      .getByPlaceholder("Email Address");
    this.signupButton = page.getByRole("button").getByText("Signup");
    this.emailAlreadyExists = page.getByText("Email Address already exist!");
  }

  async enterExistingUserEmail(email) {
    await this.existingUserEmail.fill(email);
  }

  async enterExistingUserPassword(password) {
    await this.existingUserPassword.fill(password);
  }

  async enterNewUserName(name) {
    await this.newUserName.fill(name);
  }

  async enterNewUserEmail(email) {
    await this.newUserEmail.fill(email);
  }
}
