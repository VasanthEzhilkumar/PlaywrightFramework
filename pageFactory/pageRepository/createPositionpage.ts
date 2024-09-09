import { Locator, Page } from '@playwright/test';
// import RegistrationPageConstants from '../src/constants/RegistrationPageConstants';


export class createPositionPage {
  readonly page: Page;
  
  readonly hireDate: Locator;
  readonly reason: Locator;
  readonly empType: Locator;
  readonly jobprofile: Locator;
  readonly timetype: Locator;
  readonly location: Locator;
  readonly additionlInformation: Locator;
  readonly additonaljobClassification: Locator;
  readonly workshift: Locator;
  readonly okButton : Locator;
  readonly emailTypeExtended : Locator;
  readonly additionclassifiction : string;
  readonly additionalJobClassificationEXp : Locator;
  readonly workshiftExp : Locator;
  readonly submitButton : Locator;
  readonly additionalJobClassificationClick : Locator;
  readonly additionalJobsecondItm : Locator;
  readonly schdeuledHours: Locator;
  readonly endEmploymentDate : Locator;
  readonly addcls : Locator;
  readonly supervisorMgrPage : Locator;
  readonly positionrequest : Locator;
  strRandom : string ;
  readonly jobtitle: Locator;
  readonly avialbledate : Locator;
  readonly earlierhiredate : Locator;
  readonly workersubtye : Locator;
  readonly assignOrg : Locator;
  readonly paygroupSubmit : Locator;

  constructor(page: Page) {
    this.page = page;

    this.positionrequest = page.getByLabel('Position Request Reason');
    this.jobtitle =  page.getByLabel('Job Posting Title');

    this.assignOrg = page.locator('[aria-label="Inbox Items"] >> text=Assign Organizations: Create Position:');
    this.paygroupSubmit = page.locator('button:has-text("Submit")');

    this.avialbledate = page.getByRole('group', { name: 'Availability Date current value is DD/MM/YYYY' }).getByText('DD');
    this.earlierhiredate = page.getByRole('group', { name: 'Earliest Hire Date current value is DD/MM/YYYY' }).getByText('DD');

    //Hire Employee Locators
    this.hireDate = page.locator('[aria-label="Day"]');
    //this.hireDate = page.locator('text=Hire DateHire Datecurrentvalue is DD/MM/YYYYDD/MM/YYYYuse right and left arrows >> div[role="group"]');
    this.reason = page.locator('text=ReasonReason0 items selected >> [placeholder="Search"]');
    this.empType = page.getByLabel('Worker Type');
    this.jobprofile = page.getByLabel('Job Profile');
    this.timetype = page.getByLabel('Time Type');
    this.location = page.getByLabel('Location');
    this.workersubtye = page.getByLabel('Worker Sub-Type');
    this.additionlInformation = page.locator('text=Additional Information');
    this.additonaljobClassification = page.locator('text=Additional Job ClassificationsAdditional Job Classifications0 items selected >> [placeholder="Search"]');
   // text=Options ExpandedC - Regular labour contract (Romania Contract Types-Romania) >> [placeholder="Search"]
   this.addcls = page.locator('label:has-text("Additional Job Classifications")');
    this.additionalJobClassificationEXp =  page.locator('text=Additional Job ClassificationsAdditional Job ClassificationsOptions Expanded >> [placeholder="Search"]');
    this.additionalJobClassificationClick = page.locator('text=Additional Job ClassificationsAdditional Job Classifications1 item selected, C - >> [placeholder="Search"]');
    this.additionalJobsecondItm = page.locator('text=Additional Job ClassificationsAdditional Job Classifications2 items selected, C  >> [placeholder="Search"]');
    this.workshift = page.locator('text=0 items selectedError: Select a Work Shift. >> [placeholder="Search"]');
    this.workshiftExp = page.locator('text=Options ExpandedError: Select a Work Shift. >> [placeholder="Search"]');
    this.schdeuledHours = page.locator('label:has-text("Scheduled Weekly Hours")');
    this.endEmploymentDate = page.locator('label:has-text("End Employment Date")');
    this.submitButton = page.getByRole('button', { name: 'Submit' })

  }


  /**
     * Creating a new Account
     * @param supervisoryOrganisation * @param givenname     * @param Country 
     * @param FamilyName 
     * @param PhoneDevice 
     * @param phoneNumber 
     * @param phoneType 
     * @param city 
     * @param address 
     * @param state 
     * @param postalCode 
     * @param EffectiveDate
     * @param Country
     * @param Street
     * @param BuildingNumber
     * @param StreetNumber
     * @param PostalCode
     * @param County
     * @param addressType
     * @param UseFor
     * @param EmailAddress
     * @param EmailType
     * @param HireDate
     * @param Reason
     * @param Position
     * @param EmployeeType
     * @param JobProfile
     * @param TimeType
     * @param Location
     * @param PayRateType
     * @param ScheduledWeeklyHours
     * @param AdditionalJobClassifications
     * @param WorkShift
     * @param EndEmploymentDate
     * @param Comments
     * @param CostCenter
     * @param DepartmentSection
     * @param ProposedPayGroupInitial
     * @param ProposedPayGroupFinal
     * @param MealVoucher
     * @param MedicalInsurance
     * @param HealthHouse
     * @param BasicFunction
     * @param Pensioner
     * @param NegotiatedLeave	
     * @param ProbationReviewDate
     * @param Reason
     * @param ContractID
     * @param ContractType	
     * @param Status
     * @param DateEmployeeSigned
     * @param DateEmployerSigned
     * @param ContractEndDate
     * @param Country1
     * @param NationalIDType1
     * @param DepartmentSection
     * @param IssuedDate1
     * @param ExpirationDate1
     * @param Country2
     * @param NationalIDType2
     * @param DepartmentSection
     * @param IssuedDate2
     * @param ExpirationDate2
     * @param IssuedBy2
     * @param Series2
     * @param Salary
     * @param Gender
     * @param DateOfBirth
     * @param CityOfBirth
     * @param MaritalStatus
     * @param MaritalStatusDate
     * @param CitizenshipStatus
     * @param PrimaryNationality
     * @param BankName
     * @param BankCode
     * @param AccountType
     * @param AccountNumber
     * @param IBAN
     * @param FNameType
     * @param Country
     * @param FGivenName
     * @param FFamilyName
     * @returns 
     */


async createpositionrequest(){

    await this.positionrequest.fill('New');
    await this.page.waitForTimeout(1000);
    await this.positionrequest.press('Enter');
    await this.page.waitForTimeout(1000);
    await this.positionrequest.press('Enter');
}

async setpositiontitle() {

    this.strRandom = 'Auto' + ' '+ (await this.randomgenerator()).toString();

   await this.jobtitle.fill(this.strRandom);

   return this.strRandom.toString();


}

async randomgenerator() {
 let  datestr = Math.floor((Math.random() * 100000000) + 1)
 datestr.toString();
 return datestr;
}

async hiringRestricitionDetails (availabilitydate : string, earliestdate : string ,EmployeeType: string, jobprofile: string, timetype: string ){

     await this.page.getByRole('group', { name: 'Availability Date current value is DD/MM/YYYY' }).click();
     await this.page.getByRole('group', { name: 'Availability Date current value is DD/MM/YYYY' }).getByText('DD').click();

    await this.page.getByRole('group', { name: 'Availability Date current value is DD/MM/YYYY' }).type(availabilitydate);
    await this.page.waitForTimeout(1000);

    await this.page.getByRole('group', { name: 'Earliest Hire Date current value is DD/MM/YYYY' }).getByText('DD').click()
    await this.page.getByRole('group', { name: 'Earliest Hire Date current value is DD/MM/YYYY' }).type(earliestdate);
    await this.page.waitForTimeout(500);


    await this.empType.fill('Employee');
    await this.page.waitForTimeout(500);
    await this.empType.press('Enter');
    await this.page.waitForTimeout(500);
    await this.page.keyboard.press('Enter');
    await this.page.locator('[id="wd-EditPage-6\\$701"]').click();
    await this.jobprofile.fill(jobprofile);
    await this.page.waitForTimeout(500);
    await this.jobprofile.press('Enter');
    await this.page.waitForTimeout(1000);
    await this.page.keyboard.press('Enter');
    await this.page.locator('[id="wd-EditPage-6\\$701"]').click();
    await this.page.waitForTimeout(500);
    await this.timetype.fill(timetype);
    await this.page.waitForTimeout(500);
    await this.timetype.press('Enter');
    await this.page.waitForTimeout(500);
    await this.page.locator('[id="wd-EditPage-6\\$701"]').click();
    await this.location.fill('880');
    await this.page.waitForTimeout(500);
    await this.location.press('Enter');
    await this.page.waitForTimeout(500);
    await this.page.locator('[id="wd-EditPage-6\\$701"]').click();
    await this.workersubtye.fill(EmployeeType);
    await this.page.waitForTimeout(500);
    await this.workersubtye.press('Enter');
    await this.page.waitForTimeout(500);
    await this.page.keyboard.press('Enter');
    await this.page.waitForTimeout(500);
    await this.submitButton.click();
    await this.page.waitForTimeout(1000);

}

async assignDeparment(){

    await this.assignOrg.click();
;
    await this.paygroupSubmit.click();
    await this.page.waitForTimeout(500);
}





}

//code to auto generate random number ? 




