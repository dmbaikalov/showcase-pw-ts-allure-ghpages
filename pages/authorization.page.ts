import { HomePage } from "./home.page";
import { expect, Locator, Page } from "@playwright/test";


export class AuthorizationPage extends HomePage {
    public pagePath = `${process.env.BASE_URL}/login` as string;
    private readonly loginEmailField: Locator;
    private readonly loginPasswordField: Locator;
    private readonly loginButton: Locator;
    private readonly signUpEmailField: Locator;
    private readonly signUpNameField: Locator;
    private readonly signUpButton: Locator;
    // private readonly radioButtonTitleMr: Locator;
    // private readonly radioButtonTitleMrs: Locator;
    // private readonly signUpPasswordField: Locator;
    // private readonly signUpFirstNameField: Locator;
    // private readonly signUpLastNameField: Locator;
    // private readonly signUpAddressField: Locator;
    // private readonly signUpCountryDropDownMenu: Locator;
    // private readonly signUpStateField: Locator;
    // private readonly signUpCityField: Locator;
    // private readonly signUpZipCodeField: Locator;
    // private readonly signUpPhoneField: Locator;
    // private readonly signUpCreateAccountButton: Locator;


    constructor(page: Page) {
        super(page);
        this.loginEmailField = page.locator('.login-form').getByRole('textbox', { name: 'Email Address' });
        this.loginPasswordField = page.locator('.login-form').getByRole('textbox', { name: 'Password' });
        this.loginButton = page.locator('.login-form').getByRole('button', { name: 'Login' });
        this.signUpNameField = page.locator('.signup-form').getByRole('textbox', { name: 'Name' });
        this.signUpEmailField = page.locator('.signup-form').getByRole('textbox', { name: 'Email Address' });
        this.signUpButton = page.locator('.signup-form').getByRole('textbox', { name: 'Signup' });
    };

    async open() {
        await this.page.goto(`${process.env.BASE_URL}${this.pagePath}`);
    };

    async loginFormFieldsAreVisible() {
        await this.loginEmailField.isVisible();
        await this.loginPasswordField.isVisible();
        await this.loginButton.isVisible();
    };

    async signUpFieldsAreVisible() {
        await this.signUpEmailField.isVisible();
        await this.signUpNameField.isVisible();
        await this.signUpButton.isVisible();
    };

    async login() {
        await this.loginEmailField.fill(process.env.USER_EMAIL as string);
        await this.loginPasswordField.fill(process.env.USER_PASSWORD as string);
        await this.loginButton.click();
    };

    async signUp(email: string, password: string) {
        await this.signUpEmailField.fill(email);
        await this.signUpNameField.fill(password);
        await this.signUpButton.click();
    };

    async loginIsSuccessful() {
        await expect(this.page.url()).toBe(`${process.env.BASE_URL}`)
    }

    async signUpIsSuccessful() {
        await expect(this.page.url()).toBe(`${process.env.BASE_URL}`)
    };

}