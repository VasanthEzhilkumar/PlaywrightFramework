// import test from '@lib/BaseTest';
// import { getEmployeeNumbers , writeResultsToExcel} from '@lib/Excel';
// import * as path from 'path';

// const filePath = path.resolve(__dirname,'../Data/emp_data.xlsx');


// test('@Smoke Verify the Scheduling features ', async ({ loginPage, webActions, wfmhomepage, wfmscheduleplannerpage }) => {
// const employeeNumbers = getEmployeeNumbers();

//     await test.step(`Navigate to Application`, async () => {
//         await loginPage.navigateToURL();
//     });

    
//     await test.step ('Login into WFM Application',async () => {
//        await loginPage.logininTOWFMApplication(); 
//     });

//     await test.step('Verify Manage schedule time card Exists', async () => {
       
//         await wfmhomepage.verfiyManageScheuleCard();
//     });

//     await test.step('Open schdule Planner page' ,async () => {
//         await wfmhomepage.ClickonMainMenu();
//         await wfmhomepage.openSchedulePlannerPage();
//     });

//     const results: { empNumber: string, ruleViolations: string[] }[] = [];

//     for (const empNumber of employeeNumbers) {
//         await test.step(`Search for the Employee Rule Violation: ${empNumber}`, async () => {
//             await wfmscheduleplannerpage.clickonRuleViolationTab(empNumber.toString());
//             const ruleViolations = await wfmscheduleplannerpage.SearchEmpRuleViolation();
//             results.push({ empNumber, ruleViolations });
//         });
//     }

//     writeResultsToExcel(results);

// }); 
