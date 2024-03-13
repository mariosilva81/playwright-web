import { test } from "@playwright/test";
import { buttonTexts, messages, user } from "../mock";
import { LoginPage } from "../pages/login-pages";

let loginPage: LoginPage;

test.describe("Login", () => {
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);

    await loginPage.visit();
  });

  test("Sucess", async ({ page }) => {
    await loginPage.sucess(user.email, user.password, buttonTexts);
  });

  test("Missing password", async ({ page }) => {
    await loginPage.missingPassword(user.email, messages.missingPassword);
  });

  test("Missing email", async ({ page }) => {
    await loginPage.missingEmail(user.password, messages.missingEmail);
  });

  test("Missing email and password", async ({ page }) => {
    await loginPage.missingEmailAndPassword(
      messages.missingEmail,
      messages.missingPassword
    );
  });
});
