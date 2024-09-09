// import { Page, BrowserContext, Locator, expect } from '@playwright/test';

// export class appCommons{ 


//  readonly page: Page;
//  readonly inboxtitle: Locator;
//  readonly searchboxhome : Locator;
//  readonly successEvent : Locator;
// readonly successClose : Locator;
// readonly refreshButton : Locator;
// readonly clearSearch : Locator;
// readonly eventApproved : Locator;
// readonly eventSubmitted: Locator
// readonly markedcompleted :Locator;

//     constructor(page: Page,context:BrowserContext) {
//         this.page = page;
//         this.inboxtitle = page.locator("//button[@title='Inbox']");
//         this.searchboxhome = page.locator('[aria-label="Search Workday "]');
//         //this.searchboxhome = page.locator('[placeholder="Search"]');getByRole('heading', { name: 'You have submitted' })
//         this.successEvent = page.locator('h2:has-text("Success! Event submitted")');
//         this.eventApproved = page.locator('text=Success! Event approved');
//         this.successClose = page.locator('[aria-label="Close"] >> nth=2');
//         this.refreshButton = page.locator('button:has-text("Refresh")');
//         this.clearSearch = page.locator('[aria-label="clear search"]');
//         this.eventSubmitted = page.getByRole('heading', { name: 'You have submitted' })
//         this.markedcompleted = page.locator('text=You have marked as Complete');

    
//       }


//     async  ClickInbox()
//     {
//         await this.inboxtitle.click();
//     }
    
//     async Searchbox (searchtext: string )
//     {
//         if (await (this.clearSearch.isVisible()))
//         {
//             await this.clearSearch.click();
//         }
//         await this.page.waitForTimeout(500);
//         await this.searchboxhome.fill(searchtext);
//         await this.searchboxhome.press('Enter');
//     }

//     async SearchboxEmp (searchtext: string )
//     {
//         // if (await (this.clearSearch.isVisible()))
//         // {
//         //     await this.clearSearch.click();
//         // }
//         await this.page.waitForTimeout(500);
//         await this.searchboxhome.fill(searchtext);
//         await this.searchboxhome.press('Enter');
//     }

//     async SuccessEventHandle() {

//         await this.page.waitForTimeout(2000);
//         if (await this.successEvent.isVisible())
//         {
//             await this.successClose.click();
//         }
//         else if  (await this.eventApproved.isVisible())
//         {
//             await this.successClose.click();
//         }
//         else if  (await this.eventSubmitted.isVisible())
//         {
//             await this.successClose.click();
//         }
//         else if  (await this.markedcompleted.isVisible())
//         {
//             await this.successClose.click();
//         }
        
//     }
//     async refreshInbox(){

//         await this.page.waitForTimeout(2000);
//         if(await this.refreshButton.isVisible())
//         {
//             await this.refreshButton.click();
//         }
    
//     }

//     async MyTasks(){
//         await this.page.getByLabel('My Tasks Items').click();
//     }



// }

import { Page, BrowserContext, Locator, expect } from '@playwright/test';

export class appCommons {
  readonly page: Page;
  readonly inboxtitle: Locator;
  readonly searchboxhome: Locator;
  readonly successEvent: Locator;
  readonly successClose: Locator;
  readonly refreshButton: Locator;
  readonly clearSearch: Locator;
  readonly eventApproved: Locator;
  readonly eventSubmitted: Locator;
  readonly markedcompleted: Locator;
  readonly Archive: Locator;
  readonly process: Locator;
  readonly fullscreen: Locator;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.inboxtitle = page.getByLabel('My Tasks Items');
    this.searchboxhome = page.locator('[aria-label="Search Workday "]');
    this.successEvent = page.locator('h2:has-text("Success! Event submitted")');
    this.eventApproved = page.locator('text=Success! Event approved');
    this.successClose = page.locator('[aria-label="Close"] >> nth=2');
    this.refreshButton = page.locator('button:has-text("Refresh")');
    this.clearSearch = page.locator('[aria-label="clear search"]');
    this.eventSubmitted = page.getByRole('heading', { name: 'You have submitted' });
    this.markedcompleted = page.locator('text=You have marked as Complete');
    this.Archive = page.getByRole('button', { name: 'Archive' });
    this.process = page.getByRole('tablist').getByText('Process');
    this.fullscreen = page.getByLabel('Toggle Fullscreen Viewing Mode');
  }

  async ClickInbox() {
    await this.inboxtitle.click();
  }

  async Searchbox(searchtext: string) {
    if (await this.clearSearch.isVisible()) {
      await this.clearSearch.click();
    }
    await this.page.waitForTimeout(500);
    await this.searchboxhome.fill(searchtext);
    await this.searchboxhome.press('Enter');
  }

  async SearchboxEmp(searchtext: string) {
    await this.page.waitForTimeout(500);
    await this.searchboxhome.fill(searchtext);
    await this.searchboxhome.press('Enter');
  }

  async SuccessEventHandle() {
    await this.page.waitForTimeout(2000);
    if (await this.successEvent.isVisible()) {
      await this.successClose.click();
    } else if (await this.eventApproved.isVisible()) {
      await this.successClose.click();
    } else if (await this.eventSubmitted.isVisible()) {
      await this.successClose.click();
    } else if (await this.markedcompleted.isVisible()) {
      await this.successClose.click();
    }
  }

  async refreshInbox() {
    await this.page.waitForTimeout(2000);
    if (await this.refreshButton.isVisible()) {
      await this.refreshButton.click();
    }
  }

  async MyTasks() {
    await this.page.getByLabel('My Tasks Items').click();
  }

  async clickHRPartnerLink(givenname: string, familyname: string): Promise<string | null> {


    await this.Archive.click();

    await this.page.waitForSelector(`button:has-text('Hire: ${givenname} ${familyname}')`);
    
    const buttons = await this.page.locator(`button:has-text('Hire: ${givenname} ${familyname}')`);

    // Iterate over the found buttons and click the one that starts with 'Hire'
    for (let i = 0; i < await buttons.count(); i++) {
      const buttonText = await buttons.nth(i).textContent();
      if (buttonText?.startsWith('Hire')) {
        await this.page.waitForTimeout(500);
        await buttons.nth(i).click();
        
      }
    }

   // await this.page.getByRole('button', { name: 'Hire:'+' '+givenname+' '+familyname+' '}).first().click();

    await this.process.click();

    await this.fullscreen.click();

    // Locate the cell containing "HR Partner" and extract the text content
    const hrPartnerCell = await this.page.locator('text=HR Partner').first();

    // Ensure the cell is visible
    await expect(hrPartnerCell).toBeVisible();

    // Extract the text content from the cell
    const cellText = await hrPartnerCell.textContent();

    // Use a regular expression to extract the dynamic number
    const match = cellText?.match(/\((\d+)\)/);
    const dynamicNumber = match ? match[1] : null;

    if (dynamicNumber) {
      console.log(`Extracted dynamic number: ${dynamicNumber}`);

      // Locate the link using the extracted dynamic number
      const dynamicLink = this.page.getByRole('cell', { name: new RegExp(`\\(${dynamicNumber}.*HR.*\\)`) });

      // Ensure the link is visible
      await expect(dynamicLink).toBeVisible();

      await this.fullscreen.click();


      // Return the dynamic number
      return dynamicNumber;
    } else {
      console.error('Failed to extract dynamic number from the text content.');
      return null;
    }
  }
}
