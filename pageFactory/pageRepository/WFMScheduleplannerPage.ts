import { Page, BrowserContext, Locator } from '@playwright/test';

export class WFMSchedulePlannerPage {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly RULEVIOLATIONTAB: Locator;
    readonly EMP_SEARCHBAR: Locator;
    readonly EMP_RELOAD: Locator;
    readonly EMP_Select: Locator;
    readonly EMP_Selected: Locator;
    employeeNumbers: string[];

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.RULEVIOLATIONTAB = page.getByRole('tab', { name: 'Rule Violation' });
        this.EMP_SEARCHBAR = page.getByRole('textbox', { name: 'Search' });
        this.EMP_RELOAD = page.getByRole('button', { name: ' Reload' });
        this.EMP_Select = page.getByRole('button', { name: 'Select people' });
        this.EMP_Selected = page.getByRole('menu', { name: 'Select people' }).locator('label');
       
    }

    async clickonRuleViolationTab(empNumber: string): Promise<string> {
        const EMP_NAME = this.page.locator(`[personnumber="${empNumber}"]`);
        const ariaLabel = await EMP_NAME.getAttribute('aria-label');
        
        console.log(`Employee Name for ${empNumber}: ${ariaLabel}`);

        if (ariaLabel) {
            await EMP_NAME.click({ button: "right" });
            await this.RULEVIOLATIONTAB.click();
        } else {
            console.error(`No element found with personnumber: ${empNumber}`);
        }
        return ariaLabel.toString();
    }

    // async SearchEmpRuleViolation(ariaLabel: string): Promise<{ date: string, name: string,  description: string }[]> {
    //     await this.EMP_Select.click();
    //     await this.EMP_SEARCHBAR.fill(ariaLabel);
    //     await this.page.waitForTimeout(3000);
    //     await this.EMP_Selected.click();
    //     await this.EMP_RELOAD.click();
    //     await this.page.waitForTimeout(3000);

    //     const cssSelector = 'div.ui-grid-contents-wrapper > div:nth-child(3) div.ui-grid-viewport > div > div';
    //     const rows = await this.page.locator(cssSelector).all();

    //     const ruleViolations: { date: string, name: string, description: string }[] = [];
    //     for (let i = 0; i < rows.length; i++) {
    //         const textContent = await rows[i].textContent();
    //         console.log(`Element ${i + 1}: ${textContent}`);

    //         // Parse the text content to extract date, name, warning type, and description
    //         if (textContent) {
    //             const parts = textContent.split('.');
    //             if (parts.length >= 3) {
    //                 const date = parts[0].trim();
    //                 const name = ariaLabel;
    //                 //const warningType = parts[2].trim();
    //                 const description = parts.slice(1).join(',').trim(); // Join the rest as description
    //                 ruleViolations.push({ date, name,  description });
    //             }
    //         }
    //     }
    //     return ruleViolations;
    // }
    async SearchEmpRuleViolation(ariaLabel: string): Promise<string[]> {
        await this.EMP_Select.click();
        await this.EMP_SEARCHBAR.fill(ariaLabel);
        await this.page.waitForTimeout(3000);
        await this.EMP_Selected.click();
        await this.EMP_RELOAD.click();
        await this.page.waitForTimeout(3000);

        const cssSelector = 'div.ui-grid-contents-wrapper > div:nth-child(3) div.ui-grid-viewport > div > div';
        const rows = await this.page.locator(cssSelector).all();

        const ruleViolations: string[] = [];
        for (let i = 0; i < rows.length; i++) {
            const textContent = await rows[i].textContent();
            console.log(`Element ${i + 1}: ${textContent}`);
            ruleViolations.push(textContent?.trim() || '');
        }
        return ruleViolations;
    }
}
