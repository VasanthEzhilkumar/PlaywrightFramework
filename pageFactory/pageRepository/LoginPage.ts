import { Page, BrowserContext, Locator, expect } from '@playwright/test';
import { WebActions } from "@lib/WebActions";
import { testConfig } from '../../testConfig';
import { PrimaryExpression } from 'typescript';

let webActions: WebActions;

export class LoginPage {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly USERNAME_EDITBOX: Locator;
    readonly PASSWORD_EDITBOX: Locator;
    readonly LOGIN_BUTTON: Locator;
    readonly BOOKS_SEARCH_BOX: Locator;
    readonly USERNAMEWFM_EDITBOX:Locator;
    readonly PASSWORDWFM_EDITBOX:Locator;
    readonly WFMLOGIN_BUTTON: Locator;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        webActions = new WebActions(this.page, this.context);
        this.USERNAME_EDITBOX = page.locator('#userName');
        this.PASSWORD_EDITBOX = page.locator('#password');
        this.USERNAMEWFM_EDITBOX = page.getByLabel('Username');
        this.PASSWORDWFM_EDITBOX = page.getByLabel('Password');
        this.LOGIN_BUTTON = page.locator('#login');
        this.BOOKS_SEARCH_BOX = page.getByPlaceholder('Type to search');
        this.WFMLOGIN_BUTTON = page.getByRole('button', { name: 'Log In' });
    }

    async navigateToURL(): Promise<void> {
        await this.page.goto("/");
    }

    async clickOnLoginMainButton(): Promise<void> {
        await this.LOGIN_BUTTON.click();
    }

    async loginToApplication(): Promise<void> {
        const decipherPassword = await webActions.decipherPassword();
        await this.USERNAME_EDITBOX.fill(testConfig.username);
        await this.PASSWORD_EDITBOX.fill(decipherPassword);
        await this.LOGIN_BUTTON.click();
    }

    async verifyProfilePage(): Promise<void> {
        await expect(this.BOOKS_SEARCH_BOX).toBeVisible();
    }

    async logininTOWFMApplication(): Promise<void> {
        await this.USERNAMEWFM_EDITBOX.fill(testConfig.WFMUSername);
        await this.PASSWORDWFM_EDITBOX.fill(testConfig.WFMPassword);
        await this.WFMLOGIN_BUTTON.click()

        await this.page.pause();

    }

}
