import { Page, Locator } from "@playwright/test";

export class ContactUsPage {
  readonly getInTouchHeader: Locator;
  readonly name: Locator;
  readonly email: Locator;
  readonly subject: Locator;
  readonly message: Locator;
  readonly chooseFileButton: Locator;
  readonly submitButton: Locator;
  readonly successMessage: Locator;
  readonly closeGoogleVignette: Locator;

  constructor(page: Page) {
    this.getInTouchHeader = page.getByRole("heading", { name: "Get In Touch" });
    this.name = page.getByPlaceholder("Name");
    this.email = page.getByPlaceholder("Email", { exact: true });
    this.subject = page.getByPlaceholder("Subject");
    this.message = page.getByPlaceholder("Your Message Here");
    this.chooseFileButton = page.locator('input[name="upload_file"]');
    this.submitButton = page.getByRole("button", { name: "Submit" });
    this.successMessage = page
      .locator("#contact-page")
      .getByText("Success! Your details have been submitted successfully.");
    this.closeGoogleVignette = page
      .frameLocator('iframe[name="aswift_1"]')
      .getByLabel("Close ad");
  }

  async enterName(name) {
    await this.name.fill(name);
  }

  async enterEmail(email) {
    await this.email.fill(email);
  }

  async enterSubject(subject) {
    await this.subject.fill(subject);
  }

  async enterMessage(message) {
    await this.message.fill(message);
  }
}
