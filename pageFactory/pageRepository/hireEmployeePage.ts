import { Page, BrowserContext, Locator, expect } from '@playwright/test';
// import RegistrationPageConstants from '../src/constants/RegistrationPageConstants';


export class hireEmployeePage {
  readonly page: Page;
  readonly supervisorysearch: Locator;
  readonly supervisorysearchexp: Locator;
  readonly newPreHire: Locator;
  readonly gName: Locator;
  readonly fName: Locator;
  readonly addphone: Locator;
  readonly addAddress: Locator;
  readonly addemail: Locator;
  readonly emailAddress: Locator;
  readonly emailType: Locator;
  readonly contactInformation: Locator;
  readonly contactPhoneNumber: Locator;
  readonly contactPhoneDevice: Locator;
  readonly contactPhoneDevicetext: Locator;
  readonly contactphoneType: Locator;
  readonly addressStreet: Locator;
  readonly addressPostalCode: Locator;
  readonly addressCity: Locator;
  readonly addressCounty: Locator;
  readonly addressType: Locator;
  readonly existingPreHire: Locator;
  readonly existingPreHireSearch: Locator;
  readonly okButtonHireEmployee: Locator;
  readonly supervisorhamburger: Locator;
  readonly hireDate: Locator;
  readonly reason: Locator;
  readonly empType: Locator;
  readonly jobprofile: Locator;
  readonly timetype: Locator;
  readonly location: Locator;
  readonly additionlInformation: Locator;
  readonly additonaljobClassification: Locator;
  readonly workshift: Locator;
  readonly okButton: Locator;
  readonly emailTypeExtended: Locator;
  readonly additionclassifiction: string;
  readonly additionalJobClassificationEXp: Locator;
  readonly workshiftExp: Locator;
  readonly submitButton: Locator;
  readonly additionalJobClassificationClick: Locator;
  readonly additionalJobsecondItm: Locator;
  readonly schdeuledHours: Locator;
  readonly endEmploymentDate: Locator;
  readonly addcls: Locator;
  readonly supervisorMgrPage: Locator;
  readonly position: Locator;
  readonly contactPhoneNumbermgr: Locator;
  readonly contactPhonedevicemgr: Locator;
  readonly contactPhoneTypemgr: Locator;
  readonly addressPostalCodemgr: Locator;
  readonly addressstreetmgr: Locator;
  readonly addcitymgr: Locator;
  readonly addressTypemgr: Locator;
  readonly emailAddressmgr: Locator;
  readonly emailTypemgr: Locator;
  readonly defaultHours: Locator;


  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.supervisorysearch = page.locator('text=Supervisory OrganizationSupervisory Organization0 items selected >> [placeholder="Search"]');
    this.supervisorysearchexp = page.locator('text=Supervisory OrganizationSupervisory OrganizationOptions Expanded >> [placeholder="Search"]');
    this.supervisorhamburger = page.locator('text=Supervisory OrganizationSupervisory OrganizationOptions Expanded >> svg[role="presentation"]');
    this.supervisorMgrPage = page.getByLabel('Supervisory Organization');
    this.newPreHire = page.locator('text=Create a New Pre-Hire');
    this.contactInformation = page.locator('text=Contact Information >> nth=0');
    // this.gName = page.locator('[id="\\35 6\\$551056--uid22-input"]');
    // this.fName = page.locator('[id="\\35 6\\$551056--uid23-input"]');
    this.gName = page.locator('label:has-text("Given Name")');
    this.fName = page.locator('label:has-text("Family Name")')
    this.addphone = page.locator('[aria-label="Add Phone"]');
    this.addAddress = page.locator('[aria-label="Add Address"]');
    this.addemail = page.locator('[aria-label="Add Email"]');
    this.emailAddress = page.locator('text=Email AddressEmail AddressTypeType0 items selectedPrimary WorkPrimary WorkPrimar >> input[role="textbox"]');
    this.emailType = page.locator('text=Email AddressEmail AddressTypeType0 items selectedPrimary WorkPrimary WorkPrimar >> [placeholder="Search"]');
    this.contactPhoneNumber = page.locator('label:has-text("Phone Number")');//page.locator('label:has-text("Phone Number")');//page.locator('[id="\\35 6\\$506134--uid26-input"]');
    this.contactPhoneDevice = page.locator('text=select oneselect one');
    this.contactPhoneDevicetext = page.locator('div[role="option"]:has-text("Mobile")');
    this.contactphoneType = page.locator('text=TypeType0 items selected >> [placeholder="Search"]');
    this.addressStreet = page.getByLabel('Street Name')//page.locator('label:has-text("Street Name")');// page.locator('[id="\\35 6\\$34052--uid45-input"]');//page.locator('label:has-text("Street Name")');//page.locator('[id="\\35 6\\$34052--uid45-input"]');//text=StreetStreet
    this.addressPostalCode = page.getByLabel('Postal Code');//page.locator('label:has-text("Postal Code")');//page.locator('[id="\\35 6\\$34052--uid52-input"]');
    this.addressCity = page.getByLabel('City');//page.locator('label:has-text("City/Town or Post Office")');//page.locator('[id="\\35 6\\$34052--uid53-input"]');//page.locator('label:has-text("City/Town or Post Office")');//page.locator('[id="\\35 6\\$34052--uid53-input"]');
    this.addressCounty = page.locator('text=CountyCounty0 items selected >> [placeholder="Search"]');

    this.addressType = page.getByLabel('Address', { exact: true }).getByLabel('Type');//locator('text=UsageTypeType0 items selectedPrimary WorkPrimary WorkPrimary HomePrimary HomeUse >> [placeholder="Search"]');//page.locator('text=TypeType0 items selected >> [placeholder="Search"]');//
    this.existingPreHire = page.locator('text=Existing Pre-Hire0 items selected >> [placeholder="Search"]');
    this.existingPreHireSearch = this.page.locator('text=Existing Pre-HireOptions Expanded >> [placeholder="Search"]');
    this.okButtonHireEmployee = page.getByRole('button', { name: 'OK' })
    this.okButton = page.getByRole('button', { name: 'OK' })
    this.submitButton = page.locator('button:has-text("SUBMIT")');
    this.emailTypeExtended = page.locator('text=TypeType0 items selected, press enter to view all options, or type to search and >> [placeholder="Search"]')
    //Hire Employee Locators
    this.hireDate = page.locator('[aria-label="Day"]');

    this.position = page.getByLabel('Position');
    //this.hireDate = page.locator('text=Hire DateHire Datecurrentvalue is DD/MM/YYYYDD/MM/YYYYuse right and left arrows >> div[role="group"]');
    this.reason = page.locator('text=ReasonReason0 items selected >> [placeholder="Search"]');
    this.empType = page.getByLabel('Employee Type');//locator('text=Employee TypeEmployee Type0 items selected >> [placeholder="Search"]');
    this.jobprofile = page.getByLabel('Job Profile', { exact: true })//locator('text=Job ProfileJob Profile0 items selected >> [placeholder="Search"]');
    this.timetype = page.getByLabel('Time Type', { exact: true })//locator('text=Time TypeTime Type0 items selected >> [placeholder="Search"]');
    this.location = page.getByLabel('Location', { exact: true });//locator('text=LocationLocation0 items selected >> [placeholder="Search"]');
    this.additionlInformation = page.getByText('Additional Information')//locator('text=Additional Information');
    this.additonaljobClassification = page.getByLabel('Additional Job Classifications');//locator('text=Additional Job ClassificationsAdditional Job Classifications0 items selected >> [placeholder="Search"]');
    // text=Options ExpandedC - Regular labour contract (Romania Contract Types-Romania) >> [placeholder="Search"]
    this.addcls = page.locator('label:has-text("Additional Job Classifications")');
    this.additionalJobClassificationEXp = page.locator('text=Additional Job ClassificationsAdditional Job ClassificationsOptions Expanded >> [placeholder="Search"]');
    this.additionalJobClassificationClick = page.locator('text=Additional Job ClassificationsAdditional Job Classifications1 item selected, C - >> [placeholder="Search"]');
    this.additionalJobsecondItm = page.locator('text=Additional Job ClassificationsAdditional Job Classifications2 items selected, C  >> [placeholder="Search"]');
    this.workshift = page.getByLabel('Work Shift')//locator('text=0 items selectedError: Select a Work Shift. >> [placeholder="Search"]');
    this.workshiftExp = page.locator('text=Options ExpandedError: Select a Work Shift. >> [placeholder="Search"]');
    this.schdeuledHours = page.getByLabel('Scheduled Weekly Hours')//locator('label:has-text("Scheduled Weekly Hours")');
    this.defaultHours = page.getByLabel('Default Weekly Hours');
    this.endEmploymentDate = page.getByLabel('End Employment Date');



    this.contactPhoneNumbermgr = page.getByLabel('Phone Number');
    this.contactPhonedevicemgr = page.getByRole('button', { name: 'Phone Device' });
    this.contactPhoneTypemgr = page.getByLabel('Type');


    this.addressstreetmgr = page.getByRole('textbox', { name: 'Street' });
    this.addressPostalCodemgr = page.getByLabel('Postal Code');
    this.addcitymgr = page.getByLabel('City');

    this.addressTypemgr = page.getByRole('group', { name: 'Address' }).getByLabel('Type')

    this.emailAddressmgr = page.getByLabel('Email Address');
    this.emailTypemgr = page.getByRole('group', { name: 'Email' }).getByPlaceholder('Search');



  }



  async contactInformationpage() {

    await this.contactInformation.click();

  }

  async legalNameInformation(givenname: string, FamilyName: string) {
    await this.gName.fill(givenname);
    await this.fName.fill(FamilyName);
  }

  async contactInformationPhone(phoneNumber: number, PhoneDevice: string, phoneType: string) {
    await this.addphone.click();
    await this.contactPhoneNumber.fill(phoneNumber.toString());
    await this.contactPhoneDevice.click();
    await this.contactPhoneDevicetext.click();
    await this.contactphoneType.fill(phoneType);
    await this.contactphoneType.press('Enter');
    await this.page.waitForTimeout(500);

  }
  async contactInformationPhonemgr(phoneNumber: number, PhoneDevice: string, phoneType: string) {
    await this.addphone.click();
    await this.contactPhoneNumbermgr.fill(phoneNumber.toString());
    await this.contactPhonedevicemgr.click();
    await this.contactPhoneDevicetext.click();
    await this.contactPhoneTypemgr.fill(phoneType);
    await this.contactPhoneTypemgr.press('Enter');
    await this.page.waitForTimeout(500);

  }

  async contactInformationAddress(StreetNumber: string, PostalCode: number, city: string, County: string, addressType: string) {
    await this.page.waitForTimeout(500);
    await this.addAddress.click();
    await this.addressStreet.fill(StreetNumber);
    await this.addressPostalCode.fill(PostalCode.toString());
    await this.addressCity.fill(city);
    if (!city.includes('Bratislava')) {
      //  await this.addressCounty.fill(County);
    }
    await this.addressType.click()

    await this.page.getByLabel('' + addressType + ' checkbox Not Checked').getByRole('checkbox').check();

  }

  async contactInformationAddressmgr(StreetNumber: string, PostalCode: number, city: string, County: string, addressType: string) {
    await this.page.waitForTimeout(500);
    await this.addAddress.click();
    await this.addressstreetmgr.fill(StreetNumber);
    await this.addressPostalCodemgr.fill(PostalCode.toString());
    await this.addcitymgr.fill(city);
    if (!city.includes('Bratislava')) {
      //  await this.addressCounty.fill(County);
    }
    await this.addressTypemgr.fill(addressType);

  }
  async contactInformationEmail(EmailAddress: string, EmailType: string) {
    await this.addemail.click();
    await this.emailAddress.fill(EmailAddress);
    await this.emailType.fill(EmailType);
    await this.emailTypeExtended.press('Enter');
    await this.page.waitForTimeout(500);
  }


  async contactInformationEmailmgr(EmailAddress: string, EmailType: string) {
    await this.addemail.click();
    await this.emailAddressmgr.fill(EmailAddress);
    await this.emailTypemgr.fill(EmailType);
    await this.page.keyboard.press('Enter');
    await this.page.waitForTimeout(500);
  }

  async okHireButton() {
    await this.okButton.click();
  }

  async searchSupervisoryOrganization(supervisoryOrganisation: string, givenname: string) {

    // Fill the supervisory organization field
    await this.supervisorMgrPage.fill(supervisoryOrganisation);

    // Wait for the suggestion list to appear and press Enter
    await this.page.getByLabel('Supervisory Organization', { exact: true }).press('Enter');


    await this.newPreHire.click();

    await this.okButtonHireEmployee.click();


  }

  ///Managers
  async searchSupervisoryOrganizationMgr(supervisoryOrganisation: string) {

    await this.supervisorysearch.fill(supervisoryOrganisation, { timeout: 2000 });

    await this.page.waitForTimeout(2000);
    await this.page.keyboard.press('Enter');
    await this.page.waitForTimeout(2000);
    await this.page.keyboard.press('Enter');
    await this.page.waitForTimeout(5000);

    await this.okButtonHireEmployee.click();
    await this.page.waitForTimeout(3000);

  }



  async fillpersonaldetails() {

  }
  //   async hireEmployeeJobDetails(HireDate: string, EmployeeType: string, jobprofile: string, timetype: string, workshift: string, AdditionalJobClassifications: string ,position : string,schdeuledhours :string) {
  //     var str: String[] = AdditionalJobClassifications.split('@') ;
  //     await this.page.waitForTimeout(1500);
  //     await this.hireDate.fill(HireDate);
  //     await this.reason.fill("New Hire");
  // await this.page.waitForTimeout(1000);
  //     await this.page.keyboard.press('Enter');
  //     if (!position.includes('Auto')){

  //       await this.empType.fill(EmployeeType);
  //     await this.page.waitForTimeout(500);
  //     await this.empType.press('Enter');
  //     await this.page.waitForTimeout(500);
  //     await this.page.keyboard.press('Enter');
  //     await this.jobprofile.fill(jobprofile);
  //     await this.page.waitForTimeout(500);
  //     await this.jobprofile.press('Enter');
  //     await this.page.waitForTimeout(1000);
  //     await this.page.keyboard.press('Enter');
  //     await this.timetype.fill(timetype);
  //     await this.page.waitForTimeout(500);
  //     await this.timetype.press('Enter');
  //     await this.location.fill('880');
  //     await this.page.waitForTimeout(500);
  //     await this.location.press('Enter');
  //     await this.page.waitForTimeout(500);
  //     }

  //     await this.additionlInformation.click();
  //     await this.additonaljobClassification.fill(str[0].toString());
  //     await this.additonaljobClassification.press('Enter');
  //     await this.page.waitForTimeout(500);
  //     await this.addcls.fill(str[1].toString());
  //     await this.page.keyboard.press('Enter');
  //     await this.page.waitForTimeout(500);
  //     // await this.addcls.fill(str[2].toString());
  //     // await this.page.keyboard.press('Enter');
  //     // await this.page.waitForTimeout(500);
  //     // await this.additionalJobClassificationClick.click();
  //     // await this.additionalJobClassificationEXp.fill(str[1].toString());
  //     // await this.additionalJobClassificationEXp.press('Enter');
  //     await this.page.waitForTimeout(500);
  //     await this.page.mouse.wheel(10,10);
  //     //await this.additionalJobsecondItm.click();
  //     // await this.additionalJobClassificationEXp.fill(str[2].toString());
  //     // await this.additionalJobClassificationEXp.press('Enter');
  //     await this.page.waitForTimeout(500);
  //     await this.workshift.click();
  //     await this.workshiftExp.fill(workshift);
  //     await this.workshiftExp.press('Enter');

  //     await this.schdeuledHours.fill(schdeuledhours);

  //     await this.defaultHours.fill(schdeuledhours);

  //     if(!EmployeeType.includes('Permanent'))
  //     {
  //       await this.endEmploymentDate.fill('01/12/2024');
  //     }
  //     await this.submitButton.click();
  //     await this.page.waitForTimeout(1000);

  //   }

  async hireEmployeeJobDetails(
    HireDate: string,
    EmployeeType: string,
    jobprofile: string,
    timetype: string,
    workshift: string,
    AdditionalJobClassifications: string,
    position: string,
    schdeuledhours: string
  ) {
    const str: String[] = AdditionalJobClassifications.split('@');

    await this.hireDate.waitFor();
    await this.page.waitForTimeout(1000);
    const [day, month, year] = HireDate.split('/');

    await this.page.getByLabel('Day', { exact: true }).fill(day);
    //await this.page.getByText('DD', { exact: true }).fill(day);
    await this.page.getByLabel('Month').fill(month);
    await this.page.getByLabel('Year').fill(year);
    //await this.hireDate.fill(HireDate);
    await this.reason.fill("New Hire");
    await this.page.waitForTimeout(1000);
    await this.page.keyboard.press('Enter');

    if (!position.includes('Auto')) {
      await this.empType.waitFor();
      await this.empType.fill(EmployeeType);
      await this.page.waitForTimeout(1000);
      await this.empType.press('Enter');
      await this.page.waitForTimeout(1000);
      await this.page.keyboard.press('Enter');


      await this.jobprofile.waitFor();
      await this.jobprofile.fill(jobprofile);
      await this.page.waitForTimeout(1000);
      await this.jobprofile.press('Enter');
      await this.page.getByText(jobprofile).click();
      await this.page.waitForTimeout(1000);



      await this.timetype.waitFor();
      await this.timetype.fill(timetype);
      await this.page.waitForTimeout(1000);
      await this.timetype.press('Enter');
      await this.page.waitForTimeout(500);
      //await this.page.getByText(timetype).click();

      await this.location.waitFor();
      await this.location.fill('870');
      await this.location.press('Enter');
    }

    await this.additionlInformation.waitFor();
    await this.additionlInformation.click();

    await this.additonaljobClassification.waitFor();
    await this.additonaljobClassification.fill(str[0].toString());
    await this.additonaljobClassification.press('Enter');

    if (str[1]) {
      await this.addcls.waitFor();
      await this.addcls.fill(str[1].toString());
      await this.page.keyboard.press('Enter');
    }

    await this.workshift.waitFor();
    await this.workshift.click();

    await this.page.waitForTimeout(500);
    await this.workshiftExp.waitFor();
    await this.workshiftExp.fill(workshift);
    await this.page.waitForTimeout(500);
    await this.workshiftExp.press('Enter');

    await this.schdeuledHours.waitFor();
    await this.schdeuledHours.fill(schdeuledhours);
    await this.page.waitForTimeout(500);

    // await this.defaultHours.waitFor();
    // await this.defaultHours.fill(defaultHours);

    if (!EmployeeType.includes('Permanent')) {
      await this.endEmploymentDate.waitFor();
      //await this.page.getByLabel('End Employment Date').fill('01/12/2025');
      await this.endEmploymentDate.fill('01/12/2024');
    }

    await this.submitButton.waitFor();
    await this.submitButton.click();

    await this.page.waitForTimeout(1000);

    // Check for error button
    const errorButton = this.page.getByRole('button', { name: 'Error' });
    if (await errorButton.count() > 0) {
      await errorButton.click();

      // // Wait for the error message to be visible
      // const errorMessageLocator = this.page.locator('.error-message'); // Adjust the selector as necessary
      // await errorMessageLocator.waitFor();

      // // Extract and log the error message
      // const errorMessage = await errorMessageLocator.textContent();
      // console.log('Error Message:', errorMessage);

      // // Optionally, you can throw an error or handle it as needed
      // throw new Error(`Form submission failed with error: ${errorMessage}`);
    }
    //await this.page.waitForLoadState('networkidle');
  }


  // async hireEmployeeJobDetailsMgr(HireDate: string, EmployeeType: string, jobprofile: string, timetype: string, workshift: string, AdditionalJobClassifications: string ,position : string,schdeuledhours :string,positionName : string) {
  //   var str: String[] = AdditionalJobClassifications.split('@') ;
  //   await this.page.waitForTimeout(1500);
  //   await this.hireDate.fill(HireDate);
  //   await this.reason.fill("New Hire");
  //   await this.page.waitForTimeout(1000);
  //   await this.page.keyboard.press('Enter');
  //   if (!position.includes('Auto')){

  //     await this.empType.fill(EmployeeType);
  //   await this.page.waitForTimeout(500);
  //   await this.empType.press('Enter');
  //   await this.page.waitForTimeout(500);
  //   await this.page.keyboard.press('Enter');
  //   await this.jobprofile.fill(jobprofile);
  //   await this.page.waitForTimeout(500);
  //   await this.jobprofile.press('Enter');
  //   await this.page.waitForTimeout(1000);
  //   await this.page.keyboard.press('Enter');
  //   await this.timetype.fill(timetype);
  //   await this.page.waitForTimeout(500);
  //   await this.timetype.press('Enter');
  //   await this.location.fill('880');
  //   await this.page.waitForTimeout(500);
  //   await this.location.press('Enter');
  //   await this.page.waitForTimeout(500);
  //   }
  //   else{
  //     await this.position.fill(positionName);
  //     await this.page.waitForTimeout(500);
  //     await this.position.press('Enter');
  //     await this.page.waitForTimeout(500);
  //   }


  //   await this.additionlInformation.click();
  //   await this.additonaljobClassification.fill(str[0].toString());
  //   await this.additonaljobClassification.press('Enter');
  //   await this.page.waitForTimeout(500);
  //   await this.addcls.fill(str[1].toString());
  //   await this.page.keyboard.press('Enter');
  //   await this.page.waitForTimeout(500);
  //   await this.addcls.fill(str[2].toString());
  //   await this.page.keyboard.press('Enter');
  //   await this.page.waitForTimeout(500);
  //   // await this.additionalJobClassificationClick.click();
  //   // await this.additionalJobClassificationEXp.fill(str[1].toString());
  //   // await this.additionalJobClassificationEXp.press('Enter');
  //   await this.page.waitForTimeout(500);
  //   await this.page.mouse.wheel(10,10);
  //   //await this.additionalJobsecondItm.click();
  //   // await this.additionalJobClassificationEXp.fill(str[2].toString());
  //   // await this.additionalJobClassificationEXp.press('Enter');
  //   await this.page.waitForTimeout(500);
  //   await this.workshift.click();
  //   await this.workshiftExp.fill(workshift);
  //   await this.workshiftExp.press('Enter');

  //   await this.schdeuledHours.fill(schdeuledhours);

  //   // if(!EmployeeType.includes('Permanent'))
  //   // {
  //   //   await this.endEmploymentDate.fill('01/12/2023');
  //   // }
  //   await this.submitButton.click();
  //   await this.page.waitForTimeout(1000);

  // }




  async hireEmployeeJobDetailsMgr(
    HireDate: string,
    EmployeeType: string,
    jobprofile: string,
    timetype: string,
    workshift: string,
    AdditionalJobClassifications: string,
    position: string,
    schdeuledhours: string,
    positionName: string
  ) {
    const str: String[] = AdditionalJobClassifications.split('@');

    await this.hireDate.waitFor();
    await this.hireDate.fill(HireDate);
    await this.reason.fill("New Hire");
    await this.page.keyboard.press('Enter');

    if (!position.includes('Auto')) {
      await this.empType.waitFor();
      await this.empType.fill(EmployeeType);
      await this.empType.press('Enter');

      await this.jobprofile.waitFor();
      await this.jobprofile.fill(jobprofile);
      await this.jobprofile.press('Enter');

      await this.timetype.waitFor();
      await this.timetype.fill(timetype);
      await this.timetype.press('Enter');

      await this.location.waitFor();
      await this.location.fill('880');
      await this.location.press('Enter');
    } else {
      await this.position.waitFor();
      await this.position.fill(positionName);
      await this.position.press('Enter');
    }

    await this.additionlInformation.waitFor();
    await this.additionlInformation.click();

    await this.additonaljobClassification.waitFor();
    await this.additonaljobClassification.fill(str[0].toString());
    await this.additonaljobClassification.press('Enter');

    if (str[1]) {
      await this.addcls.waitFor();
      await this.addcls.fill(str[1].toString());
      await this.page.keyboard.press('Enter');
    }

    if (str[2]) {
      await this.addcls.waitFor();
      await this.addcls.fill(str[2].toString());
      await this.page.keyboard.press('Enter');
    }

    await this.workshift.waitFor();
    await this.workshift.click();

    await this.workshiftExp.waitFor();
    await this.workshiftExp.fill(workshift);
    await this.workshiftExp.press('Enter');

    await this.schdeuledHours.waitFor();
    await this.schdeuledHours.fill(schdeuledhours);

    await this.submitButton.waitFor();
    await this.submitButton.click();

    // Wait for navigation or network idle state if applicable
    await this.page.waitForLoadState('networkidle');
  }






}


await page.getByPlaceholder('DD').click();
await page.getByLabel('Calendar', { exact: true }).click();
await page.getByPlaceholder('YYYY').click();
await page.getByPlaceholder('MM').click();