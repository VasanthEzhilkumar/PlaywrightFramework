// import { test as baseTest } from '@playwright/test';
// import { loginpage } from '@pages/loginPage';
// import { homepage } from '@pages/homePage';
// import { hireEmployeePage } from '@pages/hireEmployeePage';
// import { employeeInboxPage } from '@pages/employeeInboxpage';
// import { proxyPage } from '@pages/proxyPage';
// import { HrInboxPage } from '@pages/hrInboxPage';
// import { appCommons } from './appCommons';

// const test = baseTest.extend<{
//   login: loginpage;
//   home: homepage;
//   hireEmployee: hireEmployeePage;
//   appCommon: appCommons;
//   empInboxpage: employeeInboxPage;
//   proxy: proxyPage;
//   hrInbxPage: HrInboxPage;
//   givenname: string;
//   familyname: string;
//   jobprofile: string;
// }>({
//   login: async ({ page, context }, use) => {
//     await use(new loginpage(page, context));
//   },
//   home: async ({ page, context }, use) => {
//     await use(new homepage(page, context));
//   },
//   hireEmployee: async ({ page, context }, use) => {
//     await use(new hireEmployeePage(page, context));
//   },
//   appCommon: async ({ page, context }, use) => {
//     await use(new appCommons(page, context));
//   },
//   // empInboxpage: async ({ page,  givenname, familyname,jobprofile,context }, use) => {
//   //   await use(new employeeInboxPage(page, givenname, familyname,jobprofile, context));
//   // },
//   proxy: async ({ page, context }, use) => {
//     await use(new proxyPage(page, context));
//   },
//   // hrInbxPage: async ({ page, context, givenname, familyname }, use) => {
//   //   await use(new HrInboxPage(page, givenname, familyname, context));
//   // },
// });

// export default test;

import { test as baseTest } from '@playwright/test';
import { loginpage } from '@pages/loginPage';
import { homepage } from '@pages/homePage';
import { hireEmployeePage } from '@pages/hireEmployeePage';
import { proxyPage } from '@pages/proxyPage';
import { appCommons } from './appCommons';

const test = baseTest.extend<{
  login: loginpage;
  home: homepage;
  hireEmployee: hireEmployeePage;
  appCommon: appCommons;
  proxy: proxyPage;
}>({
  login: async ({ page, context }, use) => {
    await use(new loginpage(page, context));
  },
  home: async ({ page, context }, use) => {
    await use(new homepage(page, context));
  },
  hireEmployee: async ({ page, context }, use) => {
    await use(new hireEmployeePage(page, context));
  },
  appCommon: async ({ page, context }, use) => {
    await use(new appCommons(page, context));
  },
  proxy: async ({ page, context }, use) => {
    await use(new proxyPage(page, context));
  },
});

export default test;

