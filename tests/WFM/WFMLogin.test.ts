// import test from '@lib/BaseTest';
// import { getEmployeeNumbers , writeResultsToExcel} from '@lib/Excel';
// import * as path from 'path';

// const filePath = path.resolve(__dirname,'../Data/emp_data.xlsx');


// test('@WFM Verify the Scheduling features ', async ({ loginPage, webActions, wfmhomepage, wfmscheduleplannerpage }) => {
// const employeeNumbers = getEmployeeNumbers();

//     await test.step(`Navigate to Application`, async () => {
        
//         await loginPage.navigateToURL();
//     });

    
//     await test.step ('Login into WFM Application',async () => {

//        await loginPage.changelanguage(); 
//        await loginPage.logininTOWFMApplication(); 

       
//     });

//     await test.step('Verify Manage schedule time card Exists', async () => {
       
//         await wfmhomepage.verfiyManageScheuleCard();
//     });
   
        
//     await test.step('Open schdule Planner page' ,async () => {
        
     
//         await wfmhomepage.ClickonMainMenu();

//         await wfmhomepage.openSchedulePlannerPage();
//     });

// //     const results: { empNumber: string, ruleViolations: { date: string, name: string,  description: string }[] }[] = [];

// //     for (const empNumber of employeeNumbers) {
// //         await test.step(`Search for the Employee Rule Violation: ${empNumber}`, async () => {
// //             const empName =await wfmscheduleplannerpage.clickonRuleViolationTab(empNumber.toString());
// //             const ruleViolations = await wfmscheduleplannerpage.SearchEmpRuleViolation(empName.toString());
// //             results.push({ empNumber, ruleViolations });
// //             //writeResultsToExcel(results);
// //         });
// //     }

// //    writeResultsToExcel(results);
// // const results: { empNumber: string, ruleViolations: string[] }[] = [];

// // for (const empNumber of employeeNumbers) {
// //     await test.step(`Search for the Employee Rule Violation: ${empNumber}`, async () => {
// //         const empName =await wfmscheduleplannerpage.clickonRuleViolationTab(empNumber);
// //         const ruleViolations = await wfmscheduleplannerpage.SearchEmpRuleViolation(empName.toString());
// //         results.push({ empNumber, ruleViolations });
// //         writeResultsToExcel(results);
// //     });
   
// // }

// const results: { empNumber: string, ruleViolations: string[] }[] = [];

// for (const empNumber of employeeNumbers) {
//     await test.step(`Search for the Employee Rule Violation: ${empNumber}`, async () => {
//         const empName = await wfmscheduleplannerpage.clickonRuleViolationTab(empNumber);
//         const ruleViolations = await wfmscheduleplannerpage.SearchEmpRuleViolation(empName.toString(),);
//         const violationDescriptions = ruleViolations.map(violation => violation.description); // Extract descriptions
//         results.push({ empNumber, ruleViolations: violationDescriptions });
//         writeResultsToExcel(results);
//     });
// }


// }); 










import test from '@lib/BaseTest';
import { getEmployeeNumbers, writeResultsToExcel } from '@lib/Excel';
import { excelToJson, getExcelFilePath } from '@lib/ExceltoJsonUtil';
import * as path from 'path';

const excelFileName = 'emp_data.xlsx';
const excelFilePath = getExcelFilePath(excelFileName);
const sheetsJson = excelToJson(excelFilePath);

const results: { empNumber: string, ruleViolations: string[] }[] = [];


for (const sheetName in sheetsJson) {
    const dataSet = sheetsJson[sheetName];

    dataSet.forEach((data, index) => {
        test(`@WFM Validate Rule type for ${data.EmpNum || `Employee ${index + 1}`}`, async ({ loginPage, webActions, wfmhomepage, wfmscheduleplannerpage }) => {

            await test.step(`Navigate to Application`, async () => {
                await loginPage.navigateToURL();
            });

            await test.step('Login into WFM Application', async () => {
                await loginPage.changelanguage(); 
                await loginPage.logininASManager(); 
            });

            await test.step('Verify Manage schedule time card Exists', async () => {
                await wfmhomepage.verfiyManageScheuleCard();
            });

            await test.step('Open schedule Planner page', async () => {
                await wfmhomepage.ClickonMainMenu();
                await wfmhomepage.openSchedulePlannerPage();
            });

            await test.step(`Search for the Employee Rule Violation: ${data.EmpNum}`, async () => {
                const empName = await wfmscheduleplannerpage.clickonRuleViolationTab(data.EmpNum);
                const ruleViolations = await wfmscheduleplannerpage.SearchEmpRuleViolation(empName.toString(), data.ExpectedRule, data.Date);

                // Ensure ruleViolations is an array
                const violationArray = Array.isArray(ruleViolations) ? ruleViolations : [ruleViolations];
                
                results.push({ empNumber: data.EmpNum, ruleViolations: violationArray });

                writeResultsToExcel(excelFilePath, sheetName, index, "",ruleViolations);
            });

            // Write the results to Excel after processing each dataset
            
        });
    });
}
