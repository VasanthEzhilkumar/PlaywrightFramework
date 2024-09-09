// import test from '@lib/BaseTest';


// test('@Smoke Verify the TimeCard Total  ', async ({ loginPage, wfmhomepage, wfmtimecardpage }) => {
//     await test.step(`Navigate to Application`, async () => {
//         await loginPage.navigateToURL();
//     });

    
//     await test.step ('Login into WFM Application',async () => {
//        await loginPage.logininTOWFMApplication(); 
//     });

//     await test.step('Open TimeCard  page' ,async () => {
//         await wfmhomepage.ClickonMainMenu();
//         await wfmhomepage.OpenTimeCardPage();
//     });

//     await test.step('Search for the Employee in Time Card Page' ,async () => {
//         await wfmtimecardpage.SearchEMP_Timecard("Alexander, Bridger");
//         await wfmtimecardpage.ValidateTotal();

        
        
        
//     });
// });

import test from '@lib/BaseTest';
import { writeResultsToExcel } from '@lib/Excel';
import { excelToJson, getExcelFilePath } from '@lib/ExceltoJsonUtil';
import path from 'path';

// Define the relative directory path to your Excel file
const dataDirectory = path.resolve(__dirname, '../Data');
const excelFileName = 'Timecard_Total.xlsx';
const excelFilePath = getExcelFilePath(excelFileName);

// Convert the Excel sheets to JSON format
const sheetsJson = excelToJson(excelFilePath);

// Iterate over each dataset and run the test
for (const sheetName in sheetsJson) {
    const dataSet = sheetsJson[sheetName];

    dataSet.forEach((data, index) => {
        test(`@WFM Verify the TimeCard Total for ${data.EmpID || `Employee ${index + 1}`}`, async ({ loginPage, wfmhomepage, wfmtimecardpage,webActions }) => {
            await test.step('Navigate to Application', async () => {
                await loginPage.navigateToURL();
            });

            await test.step('Login into WFM Application', async () => {
                await loginPage.changelanguage();
                await loginPage.logininASManager();
            });

            let EmpName: string;

            await test.step('Open schedule Planner page', async () => {
                await wfmhomepage.ClickonMainMenu();
                await wfmhomepage.openSchedulePlannerPage();
                EmpName = await webActions.getEmployeeName(data.EmpID);
            });

            await test.step('Open TimeCard page', async () => {
                //await wfmhomepage.TimeOff();
                await wfmhomepage.ClickonMainMenu();
                await wfmhomepage.OpenTimeCardPage();
            });

            await test.step('Search for the Employee in Time Card Page', async () => {
                await wfmtimecardpage.SearchEMP_Timecard(EmpName || `Employee ${index + 1}`);
                const result = await wfmtimecardpage.ValidateTotal(data.Paycode,data.Total);
                writeResultsToExcel(excelFilePath, sheetName, index, "",result);
            });
        });
    });
}
