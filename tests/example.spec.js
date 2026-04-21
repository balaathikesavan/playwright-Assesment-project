import { test , expect} from '@playwright/test';
import { LoginPage } from '../pages/Loginpage';
import { Register } from '../pages/Registeraccount';
import{ProductsPage} from '../pages/Product';
import data from '../test-data/Register.json';
import { generateEmail, generatePassword } from '../utils/dataGenerator';

test('Register User', async ({ page }) => {

  const register = new Register(page);
  const login = new LoginPage(page);
  const productPage = new ProductsPage(page);
  const product = new ProductsPage(page);

  const user = {
    ...data.user,
    email: generateEmail(),
    password: generatePassword()
  };

  await register.url();
  await register.fillRegistrationForm(user);
  await page.waitForTimeout(2000);
  await login.login(user.email, user.password);
  await login.verifyLoginSuccess();
  await productPage.home();
  await productPage.selectProduct();
  console.log("Registered & logged user:", user.email);
  const price = await product.getProductPrice();
  console.log(price);
  const total = await product.getCartTotal();
  console.log(total);
  expect(price).toBe(total);
  await productPage.checkOut();
 
});