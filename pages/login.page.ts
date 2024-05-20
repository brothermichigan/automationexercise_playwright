import { Page, Locator } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly newUserSignupHeader: Locator;
  readonly newUserName: Locator;
  readonly newUserEmail: Locator;
  readonly signupButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.newUserSignupHeader = page.getByRole("heading", {
      name: "New User Signup!",
    });
    this.newUserName = page.getByPlaceholder("Name");
    this.newUserEmail = page
      .locator("form")
      .filter({ hasText: "Signup" })
      .getByPlaceholder("Email Address");
    this.signupButton = page.getByRole("button").getByText("Signup");
  }

  async enterNewUserName(name) {
    await this.newUserName.fill(name);
  }

  async enterNewUserEmail(email) {
    await this.newUserEmail.fill(email);
  }
}
