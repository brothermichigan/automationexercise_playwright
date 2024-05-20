import { Locator, Page } from "@playwright/test";

export class AccountDeletedPage {
  readonly accountDeletedHeader: Locator;
  readonly continueButton: Locator;

  constructor(page: Page) {
    this.accountDeletedHeader = page.getByRole("heading", {
      name: "ACCOUNT DELETED!",
    });
    this.continueButton = page.getByTestId("continue-button");
  }
}
