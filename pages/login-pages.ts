import { Page, expect } from "@playwright/test";

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page
  }

  async visit() {
    await this.page.goto("/");
    const title = this.page.locator(".sc-iBPTVF") 
    await expect(title).toHaveText("Login");
  }

  async sucess(email: string, password: string, buttonTexts: string[]) {
    await this.page.fill("#email", email);
    await this.page.fill("#password", password);
    await this.page.click(".sc-iqHXzD");

    await expect(this.page).toHaveURL("/dashboard");
    await expect(this.page.locator(".sc-iqHXzD")).toHaveText(buttonTexts);
  }

  async missingPassword(email: string, passwordMessage: string) {
    await this.page.fill("#email", email);
    await this.page.click(".sc-iqHXzD");
    await expect(this.page.locator(".sc-kEjbdu")).toHaveText(
      passwordMessage
    );
  }

  async missingEmail(password: string, emailMessage: string) {
    await this.page.fill("#password", password);
    await this.page.click(".sc-iqHXzD");
    await expect(this.page.locator(".sc-kEjbdu")).toHaveText(emailMessage);
  }

  async missingEmailAndPassword(emailMessage: string, passwordMessage: string) {
    await this.page.click(".sc-iqHXzD");
    await expect(this.page.locator(".sc-kEjbdu")).toHaveText([
      emailMessage,
      passwordMessage,
    ]);
  }
}