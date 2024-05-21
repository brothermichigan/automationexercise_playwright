import { Page, Locator } from "@playwright/test";

export class BasePage {
  readonly page: Page;
  readonly signupLoginButton: Locator;
  readonly homeButton: Locator;
  readonly productsButton: Locator;
  readonly cartButton: Locator;
  readonly subscribeEmail: Locator;
  readonly subscribeButton: Locator;
  readonly loggedInAccountButton: Locator;
  readonly deleteAccountButton: Locator;
  readonly logoutButton: Locator;
  readonly contactUsButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signupLoginButton = page.locator(
      "//a[contains(text(), ' Signup / Login')]"
    );
    this.homeButton = page.locator("//a[contains(text(), ' Home')]");
    this.productsButton = this.page.locator(
      "//a[contains(text(), ' Products')]"
    );
    this.cartButton = page.locator("//a[contains(text(), ' Cart')]");
    this.subscribeEmail = page.locator("susbscribe_email");
    this.subscribeButton = page.locator("subscribe");
    this.loggedInAccountButton = page.locator(
      "//a[contains(text(), ' Logged in as ')]"
    );
    this.deleteAccountButton = page.getByRole("link", {
      name: "Delete Account",
    });
    this.logoutButton = page.locator("//a[contains(text(), ' Logout')]");
    this.contactUsButton = page.locator("//a[contains(text(), ' Contact us')]");
  }
}
