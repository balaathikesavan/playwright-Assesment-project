import { expect } from '@playwright/test';

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#email');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator("input[value='Login']");
    this.errorMessage = page.locator('.help-block');
  }

  async login(username, password) {
    await this.usernameInput.waitFor({ state: 'visible' });

    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);

    await this.loginButton.click();
  }

  async verifyLoginSuccess() {
    await expect(this.page).toHaveURL("https://practicesoftwaretesting.com/account");
  }

  async verifyLoginFailure() {
    await expect(this.errorMessage).toBeVisible();
  }
}
