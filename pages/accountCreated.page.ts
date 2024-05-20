import { Locator, Page } from "@playwright/test";

export class AccountCreatedPage {
  readonly accountCreatedHeader: Locator;
  readonly continueButton: Locator;

  constructor(page: Page) {
    this.accountCreatedHeader = page.getByRole("heading", {
      name: "ACCOUNT CREATED!",
    });
    this.continueButton = page.getByTestId("continue-button");
  }
}
