// import { Page, BrowserContext, Locator, expect } from '@playwright/test';

// export class WFMTimecardPage {
//     readonly page: Page;
//     readonly context: BrowserContext;
//     readonly EMP_SELECTORDROPDOWN: Locator;
//     readonly EMP_SEARCHBAR: Locator;
//     readonly EMP_LIST: Locator;
//     readonly EMP_Select: Locator;
//     readonly EMP_Selected: Locator;
//     readonly EMP_NAME: Locator;
//     ariaLabel: string;

//     constructor(page: Page, context: BrowserContext) {
//         this.page = page;
//         this.context = context;
//         this.EMP_SELECTORDROPDOWN = page.getByLabel('Employee selector')
//         this.EMP_SEARCHBAR = page.getByRole('textbox', { name: 'Search' })
//         this.EMP_LIST = page.locator('//li[@id="combo_li0"]');
//         this.EMP_Select = page.getByRole('button', { name: 'Select people' });
//         this.EMP_Selected = page.getByRole('menu', { name: 'Select people' }).locator('label');
//         this.EMP_NAME = page.locator('[personnumber="80010054"]');




//     }

//     async SearchEMP_Timecard(): Promise<void> {
//          await this.EMP_SELECTORDROPDOWN.click();
//          await this.EMP_SEARCHBAR.click();
//          await this.EMP_SEARCHBAR.fill('Day, Koda');
//         await  this.EMP_LIST.click();

//         // await this.page.getByLabel('Employee selector').click();
//         // await this.page.getByRole('textbox', { name: 'Search' }).click();
//         // await this.page.getByRole('textbox', { name: 'Search' }).fill('Cross ,Lola');
//         // await this.page.getByRole('textbox', { name: 'Search' }).press('Escape');

        
//     }

  



// }

import { Page, BrowserContext, Locator, expect } from '@playwright/test';

export class WFMTimecardPage {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly EMP_SELECTORDROPDOWN: Locator;
    readonly EMP_SEARCHBAR: Locator;
    readonly EMP_LIST: Locator;
    readonly EMP_Select: Locator;
    readonly EMP_Selected: Locator;
    readonly EMP_NAME: Locator;
    readonly TIMECARD_SAVE: Locator;
    readonly TIMECARD_TOTAL: Locator
    ariaLabel: string;

    

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.EMP_SELECTORDROPDOWN = page.getByLabel('Employee selector');
        this.EMP_SEARCHBAR = page.getByRole('textbox', { name: 'Search' });
        this.EMP_LIST = page.locator('//li[@id="combo_li0"]');
        this.EMP_Select = page.getByRole('button', { name: 'Select people' });
        this.EMP_Selected = page.getByRole('menu', { name: 'Select people' }).locator('label');
        this.EMP_NAME = page.locator('[personnumber="80010054"]');
        this.TIMECARD_SAVE = page.getByLabel('Save');
        this.TIMECARD_TOTAL = page.getByRole('tab', { name: 'Totals' });
    }

    async SearchEMP_Timecard(EmpName: string): Promise<void> {
        await this.EMP_SELECTORDROPDOWN.click();
        await this.EMP_SEARCHBAR.click();
        await this.EMP_SEARCHBAR.fill(EmpName);
        await this.EMP_LIST.click();

    }
    async punchTime(index: number, inpunch: string, outpunch: string, addTime?: boolean): Promise<void> {
        const inpunchLocator = this.page.locator(`[id="\\3${index} _inpunch"]`);
        const outpunchLocator = this.page.locator(`[id="\\3${index} _outpunch"]`);
        const addButtonLocator = this.page.locator(`[id="\\3${index} _add"] span`);

        await inpunchLocator.click();
        await this.page.getByRole('textbox').fill(inpunch);
        await outpunchLocator.click();
        await this.page.getByRole('textbox').fill(outpunch);
        
        if (addTime) {
            await addButtonLocator.click();
        }
        else
        {
            index = index+1;
            await this.page.locator(`[id="\\3${index} _inpunch"]`).dblclick();
            await this.page.waitForTimeout(3000);

        }
    }
    async punchInOutMultipleDays(date: string, punchIn: string, punchOut: string): Promise<void> {
        const gridContainer = this.page.locator('.ui-grid-viewport .ui-grid-canvas');
        
        // Get all rows in the grid
        const rows = gridContainer.locator('.ui-grid-row');
        const rowCount = await rows.count();
        console.log(`Total rows: ${rowCount}`);
      
        for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
          const row = rows.nth(rowIndex);
          
          // Locate the cell in the current row containing the date
          const cell = row.locator('.ui-grid-cell .ui-grid-cell-contents[title*="' + date + '"]');
          
          if (await cell.count() > 0) {
            console.log(`Date ${date} found in Row ${rowIndex + 1}`);
            
            // Punch in and out for the day
            await this.punchTime(rowIndex, '9:00', '13:00', true);
            await this.punchTime(rowIndex + 1, '13:30', '17:30', false);
            break;
          }
        }
      }
      

//     async punchInOutMultipleDays(Date:string,punchin: string,punchout:string): Promise<void> {

     
//   const gridContainer = await this.page.locator('.ui-grid-viewport .ui-grid-canvas');
  
//   // Get the number of rows
//   const rowCount = await gridContainer.locator('.ui-grid-row').count();
//   console.log(`Total rows: ${rowCount}`);

//   for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
//     // Select the current row
//     const row = gridContainer.locator('.ui-grid-row').nth(rowIndex);
    
//     // Get the number of cells in the current row
//     const cellCount = await row.locator('.ui-grid-cell').count();
//     console.log(`Total cells in row ${rowIndex + 1}: ${cellCount}`);

//     for (let cellIndex = 0; cellIndex < cellCount; cellIndex++) {
//       // Select the current cell
//       const cell = row.locator('.ui-grid-cell').nth(cellIndex);

//       // Get the cell content
//       const cellContent = await cell.textContent();
//       console.log(`Row ${rowIndex + 1}, Cell ${cellIndex + 1} Content: ${cellContent.trim()}`);

//       // Check for specific title attributes or content
//       const cellTitle = await cell.locator('.ui-grid-cell-contents').getAttribute('title');

//       if (cellTitle.includes(Date))
//         {
//             await this.punchTime(rowIndex,'09:00', '13:00', true);
//             await this.punchTime(rowIndex+1, '13:30', '17:00',false);
//             break;
//         }

//      // Optional: Check the aria-selected attribute
//       const ariaSelected = await cell.getAttribute('aria-selected');
//       if (ariaSelected === 'true') {
//         console.log(`Cell in Row ${rowIndex + 1}, Cell ${cellIndex + 1} is selected.`);
//       }
//     }
//   }
        // await this.punchTime(1, '09:00', '13:00', true);
        // await this.punchTime(2, '13:30', '17:00',false);
 
        // await this.punchTime(2, '09:00', '13:00', true);
        // await this.punchTime(3, '13:30', '17:00',false);
        // // await this.page.keyboard.press("Tab");
        // // await this.page.waitForTimeout(3000);
        // await this.punchTime(3, '09:00', '13:00', true);
        // await this.punchTime(4, '13:30', '17:00',false);
 //   }

    async ValidateTotal(Paycode: string , Totalvalue: string ): Promise<string> {
        await this.TIMECARD_TOTAL.click();

        await this.page.waitForTimeout(3000);
    
        // Locate the grid container
        const gridContainer = await this.page.locator('.ui-grid-viewport .ui-grid-canvas');
    
        // Get all rows at once
        const rows = gridContainer.locator('.ui-grid-row');
        const rowCount = await rows.count();
        console.log(`Total rows: ${rowCount}`);
    
        let isValidRowFound = false;
    
        // Process all rows
        const rowPromises = Array.from({ length: rowCount }, (_, rowIndex) => {
            const row = rows.nth(rowIndex);
            const cells = row.locator('.ui-grid-cell');
    
            return cells.evaluateAll((cellElements) => {
                return cellElements.map(cell => ({
                    content: cell.textContent?.trim() || '',
                    title: cell.querySelector('.ui-grid-cell-contents')?.getAttribute('title') || '',
                    ariaSelected: cell.getAttribute('aria-selected')
                }));
            }).then(cellData => {
                // Flags for the required values
                let hasRegular = false;
                let hasTime = false;
    
                cellData.forEach((cell) => {
                    if (cell.title === Paycode ) {
                        hasRegular = true;
                    }
                    if (cell.title === Totalvalue) {
                        hasTime = true;
                    }
                    if (cell.ariaSelected === 'true') {
                        console.log(`Cell in Row ${rowIndex + 1} is selected.`);
                    }
                });
    
                // Check if all required values are present in the same row
                if ( hasRegular && hasTime) {
                    isValidRowFound = true;
                    console.log(`Valid row found: Row ${rowIndex + 1}`);
                }
            });
        });
    
        // Wait for all row processing to complete
        await Promise.all(rowPromises);
    
        // Return based on whether a valid row was found
        if (isValidRowFound) {
            //await expect(this.page.getByRole('button', { name: 'Amount' })).toBeVisible();
            return "Passed";
        } else {
            console.error("No row found with all required values.");
            return "Failed"; // Or throw an error, or handle as needed
        }
    }
    

    // async ValidateTotal(): Promise<string> {
    //     await this.TIMECARD_TOTAL.click();
    
    //     // Locate the grid container
    //     const gridContainer = await this.page.locator('.ui-grid-viewport .ui-grid-canvas');
    
    //     // Get all rows at once
    //     const rows = gridContainer.locator('.ui-grid-row');
    //     const rowCount = await rows.count();
    //     console.log(`Total rows: ${rowCount}`);
    
    //     // Process all rows and cells
    //     const rowPromises = Array.from({ length: rowCount }, (_, rowIndex) => {
    //         const row = rows.nth(rowIndex);
    //         const cells = row.locator('.ui-grid-cell');
    
    //         return cells.evaluateAll((cellElements) => {
    //             return cellElements.map(cell => ({
    //                 content: cell.textContent?.trim() || '',
    //                 title: cell.querySelector('.ui-grid-cell-contents')?.getAttribute('title') || '',
    //                 ariaSelected: cell.getAttribute('aria-selected')
    //             }));
    //         }).then(cellData => {
    //             cellData.forEach((cell, cellIndex) => {
    //                 // Process cell data
    //                 if (cell.title === "Primark/Retail/Americas/North America/USA/USA/New Jersey - Staten Island/105/Management") {
    //                     console.log("Found the Management cell in row:", rowIndex + 1);
    //                 }
    //                 if (cell.title === "0-ST Regular") {
    //                     console.log("Found the 0-ST Regular cell in row:", rowIndex + 1);
    //                 }
    //                 if (cell.title === "8:00") {
    //                     console.log("Found the 8:00 cell in row:", rowIndex + 1);
    //                 }
    //                 if (cell.ariaSelected === 'true') {
    //                     console.log(`Cell in Row ${rowIndex + 1}, Cell ${cellIndex + 1} is selected.`);
    //                 }
    //             });
    //         });
    //     });
    
    //     // Wait for all row processing to complete
    //     await Promise.all(rowPromises);
    
    //     // Validate final state
    //     await expect(this.page.getByRole('button', { name: 'Amount' })).toBeVisible();
    //     return "passed";
    // }
}    