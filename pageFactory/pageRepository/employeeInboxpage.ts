import { Page, BrowserContext, Locator, expect } from '@playwright/test';

export class employeeInboxPage {
readonly page : Page;
readonly givenname : string;
readonly assignPaygroup : Locator ;
readonly fillPaygroup : Locator;
readonly paygroupSubmit : Locator;
readonly assignOrg : Locator;
readonly editOther : Locator;
readonly setDeparment : Locator;
readonly saveDep : Locator;
readonly onBoarding : Locator;
readonly addPhoto : Locator;
readonly addBankDetails : Locator;
readonly paymentElections :Locator;
readonly bankName : Locator;
readonly bankIdentificationCode : Locator;
readonly accountNumber : Locator;
readonly IBAN : Locator;
readonly okButton : Locator;
readonly chgContactInformation : Locator;
readonly chgPersonalInformation : Locator;
readonly buttonchgpersonal : Locator;
readonly editGender :Locator;
readonly editDob : Locator;
readonly editPlace : Locator;
readonly editmartial : Locator;
readonly editCitizenship : Locator;
readonly editNationality : Locator;
readonly chgGovid : Locator;
readonly addemergncyContacts : Locator;
readonly setGenderdrpDown : Locator;
readonly setGender : Locator;
readonly cityofBirth : Locator;
readonly martialstatus : Locator;
readonly citizenship : Locator;
readonly nationality : Locator;
readonly peopleLink : Locator;
readonly personaldetails : Locator;
readonly addPersonalDetails : Locator;
readonly nameType : Locator;
readonly givenName : Locator;
readonly familyName : Locator;
readonly okButtonpage : Locator;
readonly fathersname :Locator;
readonly doneButton : Locator;
readonly reviewDoc : Locator;
readonly addCerti : Locator;
readonly romFather : Locator;
readonly agreeCheckbox : Locator;
readonly addEdu : Locator;
readonly perInformation : Locator;
readonly maidenName: Locator;
readonly agreeCheckboxGrid1: Locator;
readonly agreeCheckboxGrid2: Locator;
readonly relatedActionsEmp: Locator;
readonly PaymentElectionsEmp:Locator;
readonly hoverPersonalData: Locator;
readonly AccountName: Locator;








constructor (page : Page, givenname: string, FamilyName: string ,jobprofile : string,context: BrowserContext)
{
    this.page = page;
    this.assignPaygroup = page.locator('[aria-label="Inbox Items"] >> text=Assign Pay Group for Hire: '+ givenname +' '+ FamilyName +'');
    this.fillPaygroup = page.locator('text=Proposed Pay GroupProposed Pay Group0 items selected >> [placeholder="Search"]');
    this.paygroupSubmit = page.locator('button:has-text("Submit")');

    
    this.assignOrg = page.getByRole('button', { name: 'Assign Organizations: Hire:'+' '+givenname+' '+FamilyName+' '}).first();//locator('[aria-label="Inbox Items"] >> text=Assign Organizations: Hire:'+' '+givenname+' '+FamilyName+' ');
    this.editOther = page.locator('[aria-label="Edit Other"]');
    this.setDeparment = page.locator('text=Department/Section0 items selected >> [placeholder="Search"]');
    this.saveDep = page.locator('[aria-label="Save Other"]');

    this.onBoarding = page.locator('text=Onboarding Guide:'+' '+jobprofile+' - '+givenname+' '+FamilyName);
    //text=Onboarding Guide: Retail Assistant_NEW - ZESKY ELVEN (10286606)
    this.addPhoto = page.getByRole('button', { name: 'Add a Photo', exact: true });

    

    this.addBankDetails = page.getByRole('button', { name: 'Add '+givenname+' '+FamilyName+' '})
    this.paymentElections = page.locator('button:has-text("Add Payment Elections")');
    this.bankName = page.locator('label:has-text("Bank Name")');
    this.bankIdentificationCode = page.locator('label:has-text("Bank Identification Code")');
    this.accountNumber = page.locator('label:has-text("Account Number")');
    this.IBAN = page.locator('label:has-text("IBAN")');
    this.okButton = page.locator('button:has-text("OK")');

    this.chgContactInformation = page.locator('[aria-label="Inbox Items"] >> text=Change/Update My Contact Information');
    this.chgPersonalInformation = page.getByRole('button', { name: 'Change/Update My Personal Information', exact: true })//locator('[aria-label="Inbox Items"] >> text=Change/Update My Personal Information');
    this.buttonchgpersonal = page.locator('button:has-text("Change My Personal Information")');
    
    this.editGender = page.locator('[aria-label="Edit Gender"]');
    this.editDob = page.locator('[aria-label="Edit Date of Birth"]');
    this.editPlace =page.locator('[aria-label="Edit Place of Birth"]');
    this.editmartial =page.locator('[aria-label="Edit Marital Status"]');
    this.editCitizenship = page.locator('[aria-label="Edit Citizenship Status"]');
    this.editNationality = page.locator('[aria-label="Edit Nationality"]');

    this.chgGovid = page.getByRole('button', { name: 'Change/Update My Government IDs', exact: true })//locator('[aria-label="Inbox Items"] >> text=Change/Update My Government IDs');
    this.addemergncyContacts  = page.getByRole('button', { name: 'Add Emergency Contacts', exact: true })//locator('[aria-label="Inbox Items"] >> text=Add Emergency Contacts');

    this.setGenderdrpDown = page.locator('text=select oneselect one');
    this.setGender = page.locator('[aria-label="Male"]');
    this.cityofBirth = page.locator('input[role="textbox"]');
    this.martialstatus = page.locator('text=Marital StatusMarital Status0 items selected, press enter to view all options, o >> [placeholder="Search"]');
    this.citizenship = page.locator('text=Citizenship StatusCitizenship Status0 items selected, press enter to view all op >> [placeholder="Search"]');
    this.nationality =page.locator('text=Primary NationalityPrimary Nationality0 items selected, press enter to view all  >> [placeholder="Search"]');
    // Click [aria-label="Male"]
   
    this.peopleLink = page.locator('a:has-text("'+givenname+' '+FamilyName+' ")');
    this.personaldetails = page.locator('[aria-label="Navigation pane"] >> text=Personal');
    this.addPersonalDetails = page.locator('[aria-label="Names"] button:has-text("Add")');
    this.nameType = page.locator('text=Name TypeName Type0 items selected >> [placeholder="Search"]');
    this.fathersname= page.locator('text=Father\'s Name');
    this.givenName = page.locator('label:has-text("Given Name")');
    this.familyName = page.locator('label:has-text("Family Name")');
    this.okButtonpage = page.locator('button:has-text("OK")');
    this.doneButton = page.locator('button:has-text("Done")');

    this.reviewDoc = page.getByRole('button', { name: 'Review Documents', exact: true })//locator('[aria-label="Inbox Items"] >> text=Review Documents');
    this.addCerti =page.getByRole('button', { name: 'Add Certifications (External)', exact: true })//locator('[aria-label="Inbox Items"] >> text=Add Certifications (External)');
    this.romFather = page.locator('[aria-label="Inbox Items"] >> text=Romania Father');

    this.agreeCheckbox = page.locator('[id="\\32 97-container"] [id="\\35 6\\$202639"] div').nth(2);//locator('[id="\\33 20-container"] [id="\\35 6\\$202639"] div').nth(2)
    this.agreeCheckboxGrid1 = page.locator('[id="\\33 20-container"] [id="\\35 6\\$202639"] div').nth(2);//locator('[id="\\35 6\\$202639--uid152"] div')
    this.agreeCheckboxGrid2 = page.locator('[id="\\33 43-container"] [id="\\35 6\\$202639"] div').nth(2);//locator('[id="\\35 6\\$202639--uid142"] div')//locator('label:has-text("I Agree")');locator('[id="\\35 6\\$202639--uid162"] div')
    this.addEdu = page.getByRole('button', { name: 'Add Education', exact: true });

    this.perInformation = page.locator('[aria-label="Inbox Items"] >> text=Personal Information Change: ' + ' ' + givenname + ' ' + FamilyName);

    this.maidenName = page.getByRole('button', { name: 'Please Add Maiden Name', exact: true })//locator('[aria-label="Inbox Items"] >> text=Please Add Maiden Name');
    
    this.relatedActionsEmp = page.getByLabel('Related Actions ' + ' ' + givenname + ' ' + FamilyName)

    this.PaymentElectionsEmp =page.getByLabel('Personal Data Maintain').getByText('Maintain Payment Elections')
    this.hoverPersonalData = page.getByText('Personal Data');

    this.AccountName = page.getByLabel('Name On Account');


}


// cost center 
//
//
//button:has-text("Submit")




async assignPayGroup () {

     await this.assignPaygroup.click();
     await this.fillPaygroup.fill("please select a Romania Pay Group");
     await this.fillPaygroup.press('Enter');
     await this.page.waitForTimeout(100);
     await this.paygroupSubmit.click();
     await this.page.waitForTimeout(500);
     

}
async assignDeparment(CostCenter : string,givenname: string ,Familyname: string){

     await this.page.getByRole('button', { name: 'Assign Organizations: Hire:'+' '+givenname+' '+Familyname+' '}).first().click();
    await this.editOther.click();
    await this.setDeparment.fill(CostCenter);
    await this.setDeparment.press('Enter');
    await this.page.waitForTimeout(500);
    await this.saveDep.click();
    await this.page.waitForTimeout(500);
    await this.paygroupSubmit.click();
    await this.page.waitForTimeout(500);
}

async onBoardingGuide(){

    await this.page.waitForTimeout(500);
    await this.onBoarding.click();

    await this.paygroupSubmit.click();
    await this.page.waitForTimeout(500);
    
}

async empaddPhoto(){

    
    await this.page.waitForTimeout(500);
    await this.addPhoto.click();
    await this.paygroupSubmit.click();
    await this.page.waitForTimeout(500);

}

async empaddBankDetails(bankname: string ,bankidentificationnumber :string,accnumber: string ,ibannum : string ) {


    await this.relatedActionsEmp.click();

    await this.hoverPersonalData.hover();

    await this.PaymentElectionsEmp.click();

    
    await this.page.waitForTimeout(500);
    await this.addBankDetails.click();

   // await this.paymentElections.click();

    await this.bankName.click();
    await this.bankName.fill(bankname);
    
    await this.bankIdentificationCode.click();
    await this.bankIdentificationCode.fill(bankidentificationnumber);

    await this.accountNumber.click();
    await this.accountNumber.fill(accnumber);

    await this.IBAN.click();
    await this.IBAN.fill(ibannum);
    await this.page.waitForTimeout(500);

    await this.AccountName.fill('TestAutomation');

    await this.okButton.click();
    await this.page.waitForTimeout(500);
}

async empaddBanksubmit(){

    await this.addBankDetails.click();

    await this.paygroupSubmit.click();

}

async changeContactInformation(){

    await this.page.waitForTimeout(500);
    await this.chgContactInformation.click();
    await this.paygroupSubmit.click();

}

async changePersonalInformation(dob : string ,city : string ,martialstat : string,citizen : string ,national :string ){

    await this.page.waitForTimeout(500);
    await this.chgPersonalInformation.click();

    if(await this.buttonchgpersonal.isVisible()){

        await this.buttonchgpersonal.click();

        await this.editGender.click();

        
        await this.setGenderdrpDown.click();

        await this.setGender.click();

        await this.editDob.click();
        await this.page.waitForTimeout(1000);

        await this.page.keyboard.type(dob);

        await this.page.keyboard.press('Enter');

        await this.editPlace .click();

        await this.cityofBirth.fill(city);
        await this.page.keyboard.press('Enter');


        await this.editmartial.click();
        await this.martialstatus.fill(martialstat);
        await this.page.keyboard.press('Enter');

        await this.page.waitForTimeout(500);
        await this.editCitizenship.click();
        await this.page.waitForTimeout(500);
        await this.citizenship.fill(citizen);
        await this.page.keyboard.press('Enter');
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');

        await this.page.waitForTimeout(500);
        
        await this.editNationality.click();
        await this.page.waitForTimeout(500);
        await this.nationality.fill(national);
        await this.page.waitForTimeout(1000);
        await this.page.keyboard.press('Enter');
        await this.page.waitForTimeout(1000);
        await this.paygroupSubmit.click();

    }

}
async changePersonalInformationSubmit( ){

    // await this.page.waitForTimeout(500);
     // await this.chgPersonalInformation.click();
       await this.perInformation.click();
       await this.page.waitForTimeout(500);
       await this.paygroupSubmit.click();

}

async changePersonalInformation1(dob : string ,city : string ,martialstat : string,citizen : string ,national :string ){

   // await this.page.waitForTimeout(500);
    // await this.chgPersonalInformation.click();
      await this.perInformation.click();
    // if(await this.buttonchgpersonal.isVisible()){

        //await this.buttonchgpersonal.click();

        await this.editGender.click();

        await this.setGenderdrpDown.click();

        await this.setGender.click();

        await this.editDob.click();
        await this.page.waitForTimeout(1000);

        await this.page.keyboard.type(dob);

        await this.page.keyboard.press('Enter');

        await this.editPlace .click();

        await this.cityofBirth.fill(city);
        await this.page.keyboard.press('Enter');


        await this.editmartial.click();
        await this.martialstatus.fill(martialstat);
        await this.page.keyboard.press('Enter');

        await this.page.waitForTimeout(500);
        await this.editCitizenship.click();
        await this.page.waitForTimeout(500);
        await this.citizenship.fill(citizen);
        await this.page.keyboard.press('Enter');
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');

        await this.page.waitForTimeout(500);
        
        await this.editNationality.click();
        await this.page.waitForTimeout(500);
        await this.nationality.fill(national);
        await this.page.waitForTimeout(1000);
        await this.page.keyboard.press('Enter');
        await this.page.waitForTimeout(1000);

        await this.paygroupSubmit.click();

    // }

}

async changepersonalinformationSubmit(){

    await this.chgPersonalInformation.click();

    await this.paygroupSubmit.click();
}

async changeGovIDInformation(){

    await this.page.waitForTimeout(500);
    await this.chgGovid.click();
    await this.paygroupSubmit.click();

}

async AddEmergecyInformation(){

    await this.page.waitForTimeout(500);
    await this.addemergncyContacts.click();
    await this.paygroupSubmit.click();

}

async employeeLinkClick(){

    await this.peopleLink.click();

}

async empFathername(namType : string ,givenname : string , familyname  : string ){

    //await this.peopleLink.click();
    await this.personaldetails.click();
    await this.addPersonalDetails.click();
    await this.nameType.click();
    await this.fathersname.click();
    await this.givenName.click();
    await this.page.waitForTimeout(500);
    await this.page.keyboard.type(givenname);
    await this.page.waitForTimeout(500);
    await this.familyName.click();
    await this.page.waitForTimeout(500);
    await this.page.keyboard.type(familyname);
    await this.page.waitForTimeout(500);
    await this.okButtonpage.click();
    await this.doneButton.click();
    await this.page.waitForTimeout(500);
}

async reviewDocumentSubmit(){

    await this.reviewDoc.click();

    await this.paygroupSubmit.click();
    await this.page.waitForTimeout(500);
}
async reviewDocumentSubmitSK(){

    await this.reviewDoc.click();

    await this.agreeCheckbox.click();
    await this.agreeCheckboxGrid1.click();
    await this.agreeCheckboxGrid2.click();

    await this.paygroupSubmit.click();
    await this.page.waitForTimeout(500);
}

async addCertificationSubmit(){

    await this.addCerti.click();

    await this.paygroupSubmit.click();
    await this.page.waitForTimeout(500);
}

async addeducationSubmit(){

    await this.addEdu.click();

    await this.paygroupSubmit.click();
    await this.page.waitForTimeout(500);
}
async romaniaFatherNameSubmit(){

    await this.romFather.click();

    await this.paygroupSubmit.click();
    await this.page.waitForTimeout(500);
}

async addMaidenNameSubmit(){

    await this.maidenName.click();

    await this.paygroupSubmit.click();
    await this.page.waitForTimeout(500);
}

}