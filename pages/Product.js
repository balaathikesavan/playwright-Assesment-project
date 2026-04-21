import { expect } from "@playwright/test";

export class ProductsPage {
    constructor(page) {
        this.page = page;

        this.Home = page.locator(".nav-link.active");
        this.CartBtn = page.locator("#btn-add-to-cart");
        this.CartCount = page.locator("#lblCartCount");
        this.CartIcon = page.locator("#lblCartCount");
        this.CartProduct = page.locator("table>tbody>tr>td:nth-child(1)");
        this.ProductName = page.locator("h1[data-test='product-name']");
        this.price = page.locator("span[data-test='product-price']");
        this.total = page.locator("td[data-test='cart-total']")
        this.checkout = page.locator("app-checkout[class='ng-star-inserted'] button:nth-child(2)");
    }

    async home() {
        await this.Home.click();
    }

    async selectProduct() 
    {

        await this.page.locator('a:nth-child(1) div:nth-child(2) h5:nth-child(1)').click();
        await expect(this.ProductName).toBeVisible();
        await this.CartBtn.click();
        await this.page.waitForTimeout(2000);
        await expect(this.CartCount).toHaveText("1");
        await this.page.waitForTimeout(3000);
        await this.CartIcon.click();
        await this.page.waitForTimeout(3000);
        
    }
    async getProductPrice() {
        const text = await this.price.textContent();
        return parseFloat(text.replace(/[^0-9.]/g, ''));
    }


    async getCartTotal() {
        const text = await this.total.textContent();
        return parseFloat(text.replace(/[^0-9.]/g, ''));
    }

    async checkOut()
    {
        await this.checkout.click();
         await this.page.waitForTimeout(3000);
    }
}
