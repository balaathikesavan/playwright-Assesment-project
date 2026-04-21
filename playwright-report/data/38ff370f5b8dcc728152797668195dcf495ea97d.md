# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.js >> Register User
- Location: tests/example.spec.js:8:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - text: View the
    - link "Documentation" [ref=e4] [cursor=pointer]:
      - /url: https://testsmith-io.github.io/practice-software-testing/#/
    - text: for this application.
  - generic [ref=e5]:
    - generic [ref=e7]:
      - generic [ref=e8]: Practice Black Box Testing & Bug Hunting
      - button "Testing Guide" [ref=e9] [cursor=pointer]
      - button "🐛 Bug Hunting" [ref=e10] [cursor=pointer]
    - navigation [ref=e11]:
      - generic [ref=e12]:
        - link "Practice Software Testing - Toolshop" [ref=e13] [cursor=pointer]:
          - /url: /
          - img [ref=e14]
        - generic [ref=e32]:
          - menubar "Main menu" [ref=e33]:
            - menuitem "Home" [ref=e34]:
              - link "Home" [ref=e35] [cursor=pointer]:
                - /url: /
            - menuitem "Categories" [ref=e36]:
              - button "Categories" [ref=e37] [cursor=pointer]
            - menuitem "Contact" [ref=e38]:
              - link "Contact" [ref=e39] [cursor=pointer]:
                - /url: /contact
            - menuitem "Bala Aadhikesavan" [ref=e40]:
              - button "Bala Aadhikesavan" [ref=e41] [cursor=pointer]
            - menuitem "cart" [ref=e42]:
              - link "cart" [ref=e43] [cursor=pointer]:
                - /url: /checkout
                - img [ref=e45]
                - generic [ref=e47]: "1"
          - button "Select language" [ref=e49] [cursor=pointer]:
            - img [ref=e51]
            - text: EN
  - generic [ref=e55]:
    - list [ref=e57]:
      - listitem [ref=e58]:
        - generic [ref=e59] [cursor=pointer]:
          - generic [ref=e60]: Cart
          - generic [ref=e61]: "1"
      - listitem:
        - generic:
          - generic: Sign in
          - generic: "2"
      - listitem:
        - generic:
          - generic: Billing Address
          - generic: "3"
      - listitem:
        - generic:
          - generic: Payment
          - generic: "4"
    - generic [ref=e67]:
      - paragraph [ref=e68]: Hello Bala Aadhikesavan, you are already logged in. You can proceed to checkout.
      - button "Proceed to checkout" [ref=e70] [cursor=pointer]
  - paragraph [ref=e73]:
    - text: This is a DEMO application (
    - link "GitHub repo" [ref=e74] [cursor=pointer]:
      - /url: https://github.com/testsmith-io/practice-software-testing
    - text: ), used for software testing training purpose. |
    - link "Privacy Policy" [ref=e75] [cursor=pointer]:
      - /url: /privacy
    - text: "| Banner photo by"
    - link "Barn Images" [ref=e76] [cursor=pointer]:
      - /url: https://unsplash.com/@barnimages
    - text: "on"
    - link "Unsplash" [ref=e77] [cursor=pointer]:
      - /url: https://unsplash.com/photos/t5YUoHW6zRo
    - text: .
  - button "Open chat" [ref=e79] [cursor=pointer]:
    - img [ref=e80]
```

# Test source

```ts
  1  | import { expect } from "@playwright/test";
  2  | 
  3  | export class ProductsPage {
  4  |     constructor(page) {
  5  |         this.page = page;
  6  | 
  7  |         this.Home = page.locator(".nav-link.active");
  8  |         this.CartBtn = page.locator("#btn-add-to-cart");
  9  |         this.CartCount = page.locator("#lblCartCount");
  10 |         this.CartIcon = page.locator("#lblCartCount");
  11 |         this.CartProduct = page.locator("table>tbody>tr>td:nth-child(1)");
  12 |         this.ProductName = page.locator("h1[data-test='product-name']");
  13 |         this.price = page.locator("span[data-test='product-price']");
  14 |         this.total = page.locator("td[data-test='cart-total']")
  15 |         this.checkout = page.locator("app-checkout[class='ng-star-inserted'] button:nth-child(2)");
  16 |     }
  17 | 
  18 |     async home() {
  19 |         await this.Home.click();
  20 |     }
  21 | 
  22 |     async selectProduct() 
  23 |     {
  24 | 
  25 |         await this.page.locator('a:nth-child(1) div:nth-child(2) h5:nth-child(1)').click();
  26 |         await expect(this.ProductName).toBeVisible();
  27 |         await this.CartBtn.click();
  28 |         await this.page.waitForTimeout(2000);
  29 |         await expect(this.CartCount).toHaveText("1");
  30 |         await this.page.waitForTimeout(3000);
  31 |         await this.CartIcon.click();
  32 |         await this.page.waitForTimeout(3000);
  33 |         
  34 |     }
  35 |     async getProductPrice() {
  36 |         const text = await this.price.textContent();
  37 |         return parseFloat(text.replace(/[^0-9.]/g, ''));
  38 |     }
  39 | 
  40 | 
  41 |     async getCartTotal() {
  42 |         const text = await this.total.textContent();
  43 |         return parseFloat(text.replace(/[^0-9.]/g, ''));
  44 |     }
  45 | 
  46 |     async checkOut()
  47 |     {
  48 |         await this.checkout.click();
> 49 |          await this.page.waitForTimeout(3000);
     |                          ^ Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
  50 |     }
  51 | }
  52 | 
```