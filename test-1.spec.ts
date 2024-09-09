import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...

  await page.getByLabel('items selected for Proposed').locator('svg').click();
  await page.getByLabel('Proposed Pay Group').click();
  await page.getByLabel('Proposed Pay Group').fill('SKMonthly');
  await page.getByLabel('Proposed Pay Group', { exact: true }).press('Enter');
   await page.getByLabel('Proposed Pay Group').fill('SK Monthly');
  await page.getByLabel('Proposed Pay Group').press('Enter');

await page.getByLabel('Related Actions SKPly One (').click();
await page.getByText('Maintain Payment Elections').click();
await page.getByRole('button', { name: 'Add SKPly One (10648336)' }).click();
await page.getByLabel('Account Number').click();
await page.getByLabel('Account Number').fill('0012345678');
await page.getByLabel('Account Number').press('Tab');
await page.getByLabel('Bank Name').fill('');
await page.getByLabel('Bank Name').click({
    modifiers: ['Shift']
  });
await page.getByLabel('Bank Name').fill('National Bank of Slovakia');
await page.getByLabel('Bank Name').press('Tab');
await page.getByLabel('Bank Identification Code').fill('KODBSKBXXX');
await page.getByLabel('Bank Identification Code').press('Tab');
await page.getByLabel('IBAN').fill('SK8975000000000012345671');
await page.getByLabel('Name On Account').click();
await page.getByLabel('Name On Account').fill('SlovakiaWFM');
await page.getByLabel('Alert: The Bank').click();
await page.getByLabel('Alert: The Bank').fill('KODBSKBXXXX');
await page.getByLabel('Account Nickname (optional)').click();
await page.getByRole('button', { name: 'OK' }).click();
await page.getByLabel('My Tasks Items').click();
await page.getByRole('button', { name: 'Add Worker\'s Bank Details:' }).click();
await page.getByRole('button', { name: 'Personal Information Change:' }).click();






  await page.locator('tbody').filter({ hasText: '*Country*National ID' }).getByLabel('Add Row').click();
  await page.getByLabel('Country', { exact: true }).fill('slov');
  await page.getByLabel('Country', { exact: true }).click();
  await page.getByLabel('Country', { exact: true }).fill('slovakia');
  await page.getByLabel('Country', { exact: true }).press('Enter');
  await page.getByLabel('National ID Type', { exact: true }).fill('Personal ID Number');
  await page.getByLabel('National ID Type', { exact: true }).press('Enter');
  await page.getByLabel('Content Area').locator('input[type="text"]').fill('9051000099');
  await page.getByLabel('Content Area').locator('input[type="text"]').press('Tab');

  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Close', exact: true }).click();
  await page.getByRole('button', { name: 'Contract: Demo Seven', exact: true }).click();
  await expect(page.locator('[id="\\35 6\\$433946--uid81-formLabel"]')).toContainText('Contract Start Date');
  await expect(page.locator('[id="wd-HBox-2094\\$6172"]')).toContainText('Contract Start DateContract Start Date');
  await page.getByLabel('Reason').click();
  await page.getByLabel('Reason').fill('Main');
  await page.getByLabel('Reason', { exact: true }).press('Enter');
  await page.locator('[id="\\35 6\\$433936"]').click();
  await page.getByLabel('Contract ID').click();
  await page.getByLabel('Contract ID').fill('Definite');
  await page.getByLabel('Contract ID').press('Enter');
  await page.getByLabel('Contract Type').click();
  await page.getByLabel('Contract Type').fill('Definite');
  await page.getByLabel('Contract Type', { exact: true }).click();
  await page.getByLabel('Contract Type', { exact: true }).press('Enter');
  await page.getByLabel('Status').click();
  await page.getByLabel('Status').fill('Active');
  await page.getByLabel('Active, press delete to clear').locator('svg').click();
  await page.getByLabel('Status').click();
  await page.getByLabel('Status').fill('Active');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Close', exact: true }).click();
  await page.getByLabel('My Tasks Items').click();
  await page.getByRole('button', { name: 'Hire: Demo Seven - 870' }).nth(1).click();
  await page.getByRole('button', { name: 'Hire: Demo Seven - 870' }).first().click();
  await expect(page.locator('b')).toContainText('*Do not enter more than 6 Dependents. A maximum of 6 Dependents will be sent to Payroll*');
  await page.getByLabel('Add Row').click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('Childone');
  await page.getByRole('textbox').nth(1).press('Tab');
  await page.getByRole('textbox').nth(2).fill('123');
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('cell', { name: '123' }).getByRole('textbox').fill('1235658965');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Close', exact: true }).click();
  await page.getByLabel('Meal Voucher').click();
  await page.getByLabel('Health Insurance Type').click();
  await page.getByLabel('Health Insurance Type', { exact: true }).click();
  await page.getByLabel('Health Insurance Type', { exact: true }).fill('Vseobenca zdrav');
  await page.getByLabel('Health Insurance Type', { exact: true }).press('Enter');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Close', exact: true }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Close', exact: true }).click();
  await page.getByLabel('My Tasks Items').click();
  await page.getByRole('button', { name: 'Propose Compensation Hire:' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'View Details' }).click();

  getByLabel('Propose Compensation Hire: Demo Seven (10648335) - Retail Assistant_NEW', { exact: true })
});