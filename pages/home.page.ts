import { Locator, Page } from "@playwright/test";

export class HomePage {
    public pagePath = process.env.BASE_URL;
    public readonly page: Page;
    private readonly productsPageLink: Locator;
    private readonly cartPageLink: Locator;
    private readonly signUpPageLink: Locator;
    private readonly testCasesPageLink: Locator;
    private readonly apiTestingPageLink: Locator;
    private readonly contactUsPageLink: Locator;
    private readonly videoTutorialsPageLink: Locator;


    constructor(page: Page) {
        this.page = page;
        this.productsPageLink = page.getByRole('link', {name: 'Products'});
        this.cartPageLink = page.getByRole('link', {name: 'Cart'});
        this.signUpPageLink = page.getByRole('link', {name: 'Signup / Login'});
        this.testCasesPageLink = page.getByRole('link', {name: 'Test Cases'});
        this.apiTestingPageLink = page.getByRole('link', {name: 'API Testing'});
        this.contactUsPageLink = page.getByRole('link', {name: 'Contact us'});
        this.videoTutorialsPageLink = page.getByRole('link', {name: 'Video Tutorials'});
};

async open() {
    await this.page.goto(this.pagePath as string);
};

async openSignUpPage() {
    await this.signUpPageLink.click();
};

async openproductsPage() {
    await this.productsPageLink.click();
};

async openCartPage() {
    await this.cartPageLink.click();
};

async openTestCasesPage() {
    await this.testCasesPageLink.click();
};

async openApiTestingPage() {
    await this.apiTestingPageLink.click();
};

async openContactUsPage() {
    await this.contactUsPageLink.click();
};

async openVideoTutorialsPage() {
    await this.videoTutorialsPageLink.click();
};

async isOpen() {
    return this.page.url().includes(this.pagePath as string);
}

};

