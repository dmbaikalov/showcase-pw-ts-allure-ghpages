import { Locator, Page } from "@playwright/test";
import { HomePage } from "./home.page";




export class CartPage extends HomePage {
    public pagePath = `${process.env.BASE_URL}/view_cart` as string;
    readonly proceedToCheckoutButton: Locator;
    private readonly cartItemName: Locator
    private readonly cartItemDescription: Locator
    private readonly cartItemPrice: Locator
    private readonly cartItemQuantity: Locator
    private readonly cartItemTotalPrice: Locator

    constructor(page: Page) {
        super(page);
        this.proceedToCheckoutButton = page.getByRole('button', { name: 'Proceed To Checkout'})
        this.cartItemName = page.locator('.cart_info').getByText('Item');
        this.cartItemDescription = page.locator('.cart_info').getByText('Description');
        this.cartItemPrice = page.locator('.cart_info').getByText('Price');
        this.cartItemQuantity = page.locator('.cart_info').getByText('Quantity');
        this.cartItemTotalPrice = page.locator('.cart_info').getByText('Total');
    };

    async open() {
        await this.page.goto(this.pagePath);    
    };

    async cartProductInfoTableIsVisible() {
        await this.cartItemName.isVisible();
        await this.cartItemDescription.isVisible();
        await this.cartItemPrice.isVisible();
        await this.cartItemQuantity.isVisible();
        await this.cartItemTotalPrice.isVisible();
    };

    async proceedToCheckout() {
        await this.proceedToCheckoutButton.click();
    };

};