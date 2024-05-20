import { Page, Locator } from "@playwright/test";
import { Address } from "../types/address";

export class SignupPage {
  readonly page: Page;
  readonly accountInformationHeader: Locator;
  readonly titleMr: Locator;
  readonly titleMrs: Locator;
  readonly name: Locator;
  readonly email: Locator;
  readonly password: Locator;
  readonly dobDay: Locator;
  readonly dobMonth: Locator;
  readonly dobYear: Locator;
  readonly newsletterCheckbox: Locator;
  readonly specialOffersCheckbox: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly company: Locator;
  readonly address1: Locator;
  readonly address2: Locator;
  readonly country: Locator;
  readonly state: Locator;
  readonly city: Locator;
  readonly zipcode: Locator;
  readonly mobileNumber: Locator;
  readonly createAccountButton: Locator;

  constructor(page: Page) {
    this.accountInformationHeader = page.getByRole("heading", {
      name: "ENTER ACCOUNT INFORMATION",
    });
    this.titleMr = page.getByLabel("Mr.");
    this.titleMrs = page.getByLabel("Mrs.");
    this.name = page.getByLabel("Name *", { exact: true });
    this.email = page.getByLabel("Email *", { exact: true });
    this.password = page.getByLabel("Password *", { exact: true });
    this.dobDay = page.locator("#days");
    this.dobMonth = page.locator("#months");
    this.dobYear = page.locator("#years");
    this.newsletterCheckbox = page.getByLabel("Sign up for our newsletter!");
    this.specialOffersCheckbox = page.getByLabel("Receive special offers from");
    this.firstName = page.getByLabel("First name *");
    this.lastName = page.getByLabel("Last name *");
    this.company = page.getByTestId("company");
    this.address1 = page.getByLabel("Address *");
    this.address2 = page.getByLabel("Address 2");
    this.country = page.getByTestId("country");
    this.state = page.getByTestId("state");
    this.city = page.getByTestId("city");
    this.zipcode = page.getByTestId("zipcode");
    this.mobileNumber = page.getByTestId("mobile_number");
    this.createAccountButton = page.getByRole("button", {
      name: "Create Account",
    });
  }

  async enterDOB(dob: string) {
    const dobDate: Date = new Date(dob);
    // const day: String = dobDate.getDay().toString();
    const day = dobDate.toLocaleString("default", { day: "numeric" });
    const month = dobDate.toLocaleString("default", { month: "long" });
    // const year: String = dobDate.getFullYear().toString();
    const year = dobDate.toLocaleDateString("default", { year: "numeric" });

    await this.dobDay.selectOption(day);
    await this.dobMonth.selectOption(month);
    await this.dobYear.selectOption(year);
  }

  async fillAddress(address: Address) {
    await this.firstName.fill(address.firstName);
    await this.lastName.fill(address.lastName);
    await this.country.selectOption(address.country);
    await this.address1.fill(address.address);
    await this.company.fill(address.address2);
    await this.state.fill(address.state);
    await this.city.fill(address.city);
    await this.zipcode.fill(address.zipcode);
    await this.mobileNumber.fill(address.mobileNumber);
  }
}
