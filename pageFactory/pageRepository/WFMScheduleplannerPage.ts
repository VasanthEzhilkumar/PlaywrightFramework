import { Page, BrowserContext, Locator, expect } from '@playwright/test';
import { WebActions } from "@lib/WebActions";
import { testConfig } from '../../testConfig';
import { PrimaryExpression } from 'typescript';



export class WFMSchedulePlannerPage {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly RULEVIOLATIONTAB: Locator;
    readonly EMP_SEARCHBAR: Locator;
    readonly EMP_RELOAD:Locator;
    readonly EMP_Select : Locator;
    readonly EMP_Selected: Locator;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.RULEVIOLATIONTAB = page.getByRole('tab', { name: 'Rule Violation' });
        this.EMP_SEARCHBAR = page.getByRole('textbox', { name: 'Search' });
        this.EMP_RELOAD = page.getByRole('button', { name: ' Reload' })
        this.EMP_Select = page.getByRole('button', { name: 'Select people' });
        this.EMP_Selected = page.getByRole('menu', { name: 'Select people' }).locator('label');

    }

    async clickonRuleViolationTab(): Promise<void> {
        await this.RULEVIOLATIONTAB.click();
    }

    async SearchEmpRuleViolation(): Promise<void>{
        await this.EMP_Select.click();
        await this.EMP_SEARCHBAR.fill("Ashley, Leon");
        await this.EMP_Selected.click();
        await this.EMP_RELOAD.click();



  const cssSelector = 'div.ui-grid-contents-wrapper > div:nth-child(3) div.ui-grid-viewport > div > div';


  // Get all matching elements within the page after all are loaded
  const rows = await this.page.locator(cssSelector).all();

  // Iterate over each row using a for loop
  for (let i = 0; i < rows.length; i++) {
    const textContent = await rows[i].textContent();
    console.log(`Element ${i + 1}: ${textContent}`);
  }

        
    }

  

}
