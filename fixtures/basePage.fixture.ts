import { test as base } from "@playwright/test";
import { BasePage } from "../pages/base.page";

const test = base.extend({
  basePage: async ({ page }, use) => {
    const basePage = new BasePage(page);
    await use(basePage);
  },
});

export default test;
