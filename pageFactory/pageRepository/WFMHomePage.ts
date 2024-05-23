import { Page, BrowserContext, Locator, expect } from '@playwright/test';
import { WebActions } from "@lib/WebActions";
import { testConfig } from '../../testConfig';
import { PrimaryExpression } from 'typescript';



export class WFMHomePage {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly MANAGESCHEDULE: Locator;
    readonly MAINMENU: Locator;
    readonly SCHEDULEPLANNERMENU: Locator;
    readonly SCHEDULEPLANNERLINK: Locator;
    readonly TIMECARDS:Locator;
    readonly PASSWORDWFM_EDITBOX:Locator;
    readonly WFMLOGIN_BUTTON: Locator;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.TIMECARDS  = page.getByRole('link', { name: 'All Timecards' })
        this.MANAGESCHEDULE = page.getByRole('heading', { name: 'Manage Timecards' });
        this.MAINMENU = page.getByLabel('Main Menu');
        this.SCHEDULEPLANNERMENU = page.getByLabel('Schedule Menu');
        this.SCHEDULEPLANNERLINK = page.getByLabel('Schedule Planner link');
    }

    async clickonTimeCard(): Promise<void> {
        await this.TIMECARDS.click();
    }

    async verfiyManageScheuleCard(): Promise<void>{
        await this.MANAGESCHEDULE.isVisible();
    }

    async ClickonMainMenu(): Promise<void>{
        await this.MAINMENU.click()
    }

    async openSchedulePlannerPage(): Promise<void>{
        await this.SCHEDULEPLANNERMENU.click()
        await this.SCHEDULEPLANNERLINK.click()
    }
    

}
