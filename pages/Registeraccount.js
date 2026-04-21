import { expect } from '@playwright/test';

export class Register {

  constructor(page) {
    this.page = page;

    this.firstname = page.locator("#first_name");
    this.lastName = page.locator("#last_name");
    this.dob = page.locator("#dob");
    this.street = page.locator("#street");
    this.postalCode = page.locator("#postal_code");
    this.houseNumber = page.locator("#house_number");
    this.city = page.locator("#city");
    this.state = page.locator("#state");
    this.country = page.locator("#country");
    this.phone = page.locator("#phone");
    this.email = page.locator("#email");
    this.password = page.locator("#password");
    this.registerButton = page.getByRole('button', { name: 'Register' }); 
  }

  async url() {
    await this.page.goto('https://practicesoftwaretesting.com/');
    await this.page.getByRole('link', { name: 'Sign in' }).click();
    await this.page.getByRole('link', { name: 'Register your account' }).click();
  }

  async fillRegistrationForm(data) {
    await this.firstname.fill(data.firstname);
    await this.lastName.fill(data.lastName);
    await this.dob.fill(data.dob);
    await this.street.fill(data.street);
    await this.postalCode.fill(data.postalCode);
    await this.houseNumber.fill(data.houseNumber);
    await this.city.fill(data.city);
    await this.state.fill(data.state);
    await this.country.click();
    await this.page.waitForTimeout(2000);
    await this.country.selectOption({ label: data.country })
    await this.phone.fill(data.phone);
    await this.page.waitForTimeout(2000);
    await this.email.fill(data.email);
    await this.page.waitForTimeout(2000);
    await this.password.fill(data.password);
    await this.page.waitForTimeout(2000);
    await this.registerButton.click();

  }
}