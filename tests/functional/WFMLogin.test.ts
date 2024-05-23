import test from '@lib/BaseTest';


test(`@Smoke Verify the Scheduling features `, async ({ loginPage, webActions, wfmhomepage, wfmscheduleplannerpage }) => {
    await test.step(`Navigate to Application`, async () => {
        await loginPage.navigateToURL();
    });

    
    await test.step ('Login into WFM Application',async () => {
       await loginPage.logininTOWFMApplication(); 
    });

    await test.step('Verify Manage schedule time card Exists', async () => {
       
        await wfmhomepage.verfiyManageScheuleCard();
    });

    await test.step('Open schdule Planner page' ,async () => {
        await wfmhomepage.ClickonMainMenu();
        await wfmhomepage.openSchedulePlannerPage();
    });

    await test.step('Search for the Employee Rule Violation' ,async () => {
        await wfmscheduleplannerpage.clickonRuleViolationTab();
        await wfmscheduleplannerpage.SearchEmpRuleViolation();
        
    });

}); 
