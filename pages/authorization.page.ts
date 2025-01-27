import { HomePage } from "./home.page";
import { Locator, Page } from "@playwright/test";


export class AuthorizationPage extends HomePage {
    public pagePath = '/login';
    private readonly loginEmailField: Locator;
    private readonly loginPasswordField: Locator;
    private readonly loginButton: Locator;
    private readonly signUpEmailField: Locator;
    private readonly signUpPasswordField: Locator;
    private readonly signUpButton: Locator;


    constructor(page: Page) {
        super(page);
        this.loginEmailField = page.locator('input[name="email"]');
        this.loginPasswordField = page.locator('input[name="password"]');
        this.loginButton = page.locator('button[type="submit"]');
        this.signUpEmailField = page.locator('input[name="email"]');
        this.signUpPasswordField = page.locator('input[name="password"]');
        this.signUpButton = page.locator('button[type="submit"]');
    };

    async open() {
        await this.page.goto(this.pagePath);
    };

    async loginFormFieldsAreVisible() {
        await this.loginEmailField.isVisible();
        await this.loginPasswordField.isVisible();
        await this.loginButton.isVisible();
    };

    async signUpFieldsAreVisible() {
        await this.signUpEmailField.isVisible();
        await this.signUpPasswordField.isVisible();
        await this.signUpButton.isVisible();
    };

    async login(email: string, password: string) {
        await this.loginEmailField.fill(email);
        await this.loginPasswordField.fill(password);
        await this.loginButton.click();
    };

    async signUp(email: string, password: string) {
        await this.signUpEmailField.fill(email);
        await this.signUpPasswordField.fill(password);
        await this.signUpButton.click();
    };

    async loginIsSuccessful() {
        await this.page.waitForNavigation();
        await this.page.waitForURL('/');
    };

    async signUpIsSuccessful() {
        await this.page.waitForNavigation();
        await this.page.waitForURL('/');
    };

}