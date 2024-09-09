// import test from '@lib/BaseTest';
// import { excelToJson, getExcelFilePath } from '@lib/ExceltoJsonUtil';
// import path from 'path';

// // Define the relative directory path to your Excel file
// const excelFileName = 'TimecardPunch.xlsx';
// const excelFilePath = getExcelFilePath(excelFileName);

// // Convert the Excel sheets to JSON format
// const sheetsJson = excelToJson(excelFilePath);

// // Iterate over each dataset and run the test
// for (const sheetName in sheetsJson) {
//     const dataSet = sheetsJson[sheetName];
//     dataSet.forEach((data, index) => {
//         test(`@WFM Time card punch for  ${data.EmpID || `Employee ${index + 1}`}`, async ({ loginPage, wfmhomepage, wfmtimecardpage, webActions }) => {
           

//             //await webActions.decipherPassword();

//             await test.step('Navigate to Application', async () => {
//                 await loginPage.navigateToURL();
//             });
    
//             await test.step('Login into WFM Application', async () => {
//                 await loginPage.changelanguage();
//                 await loginPage.logininASManager();
//             });

//             let EmpName: string;

//             await test.step('Open schedule Planner page', async () => {
//                 await wfmhomepage.ClickonMainMenu();
//                 await wfmhomepage.openSchedulePlannerPage();
//                 EmpName = await webActions.getEmployeeName(data.EmpID);
//             });
    
//             await test.step('Open TimeCard page', async () => {
//                 await wfmhomepage.ClickonMainMenu();
//                 await wfmhomepage.OpenTimeCardPage();
//             });
    
//             await test.step('Search for the Employee in Time Card Page', async () => {
//                 await wfmtimecardpage.SearchEMP_Timecard(EmpName || `Employee ${index + 1}`);
                
//                 await wfmtimecardpage.punchInOutMultipleDays();
//             });
//         });
//     });
// }



import test from '@lib/BaseTest';
import { excelToJson, getExcelFilePath } from '@lib/ExceltoJsonUtil';
import path from 'path';

// Define the relative directory path to your Excel file
const excelFileName = 'TimecardPunch.xlsx';
const excelFilePath = getExcelFilePath(excelFileName);

// Convert the Excel sheets to JSON format
const sheetsJson = excelToJson(excelFilePath);

// Log the keys to verify the sheet names
console.log("Available Sheets: ", Object.keys(sheetsJson));

// Ensure the sheet exists
const sheetName = 'Sheet1';  // Update this if your sheet has a different name
if (!sheetsJson[sheetName]) {
    throw new Error(`Sheet '${sheetName}' not found in the Excel file.`);
}

// Group the data by EmpID
const groupedData = sheetsJson[sheetName].reduce((acc, row) => {
    if (!acc[row.EmpID]) {
        acc[row.EmpID] = [];
    }
    acc[row.EmpID].push(row);
    return acc;
}, {});

// Iterate over each grouped dataset and run the test
for (const empId in groupedData) {
    const dataSet = groupedData[empId];

    test(`@WFM Time card punch for ${empId}`, async ({ loginPage, wfmhomepage, wfmtimecardpage, webActions }) => {

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
            EmpName = await webActions.getEmployeeName(empId);
        });

        await test.step('Open TimeCard page', async () => {
            await wfmhomepage.ClickonMainMenu();
            await wfmhomepage.OpenTimeCardPage();
        });

        await test.step('Search for the Employee in Time Card Page', async () => {
            await wfmtimecardpage.SearchEMP_Timecard(EmpName);

            for (const data of dataSet) {
                // Handle punch-in/punch-out actions for each day
                await wfmtimecardpage.punchInOutMultipleDays(data.Date, data.PunchIn, data.PunchOut);
            }
        });
    });
}
