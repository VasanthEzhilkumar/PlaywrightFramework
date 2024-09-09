import * as xlsx from 'xlsx';
import * as path from 'path';

import ExcelJS from 'exceljs';
import { v4 as uuidv4 } from 'uuid';

export function getEmployeeNumbers(): string[] {
    const filePath = path.resolve(__dirname, '../Data/emp_data.xlsx');
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(sheet, { header: 1 }) as string[][];

    const employeeNumbers = data.slice(1).map(row => row[0] as string);
    return employeeNumbers;
}

// export function writeResultsToExcel(results: { empNumber: string, ruleViolations: { date: string, name: string,  description: string }[] }[]): void {
//     const filePath = path.resolve(__dirname, '../Data/emp_data.xlsx');
//     const workbook = xlsx.readFile(filePath);
//     const sheetName = workbook.SheetNames[0];
//     const sheet = workbook.Sheets[sheetName];

//     // const startRowIndex = 2; // Start writing from the second row (skip header)
//     // let currentRowIndex = startRowIndex;
// // Find the next empty row in the existing sheet
// let currentRowIndex = sheet['!ref'] ? xlsx.utils.decode_range(sheet['!ref']).e.r + 1 : 1;

//     results.forEach(result => {
//         result.ruleViolations.forEach(violation => {
//             sheet[`B${currentRowIndex}`] = { t: 's', v: violation.date };
//             sheet[`c${currentRowIndex}`] = { t: 's', v: violation.name };
//             sheet[`D${currentRowIndex}`] = { t: 's', v: violation.description };
//             currentRowIndex++;
//         });
//     });

//     xlsx.writeFile(workbook, filePath);
// }

export function writeResultsToExcel1(results: { empNumber: string, ruleViolations: string[] }[]): void {
    const filePath = path.resolve(__dirname, '../Data/emp_data.xlsx');
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    // Write the results starting from the second column (B)
    results.forEach((result, index) => {
        let rowIndex = sheet['!ref'] ? xlsx.utils.decode_range(sheet['!ref']).e.r + 1 : 1;
        //const rowIndex = index + 2; // Skip header row
        const cellAddress = `B${rowIndex}`;
        const ruleViolations = result.ruleViolations.join(', ');
        sheet[cellAddress] = { t: 's', v: ruleViolations };
    });

    xlsx.writeFile(workbook, filePath);
}

// lib/excelUtils.ts


// Function to generate a meaningful unique string
export const generateUniqueString = (prefix: string) => {
  const uniqueSuffix = uuidv4().split('-')[0]; // Use part of a UUID for uniqueness
  return `${prefix}_${uniqueSuffix}`;
};

// Function to write unique names to Excel
export const writeUniqueNamesToExcel = async (filePath: string, sheetName: string) => {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(filePath);
  const worksheet = workbook.getWorksheet(sheetName);

  // Find the column indices for GivenName and FamilyName
  const headerRow = worksheet.getRow(1);
  let givenNameCol = -1;
  let familyNameCol = -1;

  headerRow.eachCell((cell, colNumber) => {
    if (cell.value === 'GivenName') {
      givenNameCol = colNumber;
    } else if (cell.value === 'FamilyName') {
      familyNameCol = colNumber;
    }
  });

  worksheet.eachRow((row, rowNumber) => {
    if (rowNumber > 1) { // Skip header row
      const givenNameCell = row.getCell(givenNameCol);
      const familyNameCell = row.getCell(familyNameCol);

      givenNameCell.value = generateUniqueString('GivenName');
      familyNameCell.value = generateUniqueString('FamilyName');

      row.commit();
    }
  });

  await workbook.xlsx.writeFile(filePath);
};

// Function to write test results to Excel
export const writeResultsToExcel = async (filePath: string, sheetName: string, rowIndex: number, empNum: string, status: string) => {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(filePath);
  const worksheet = workbook.getWorksheet(sheetName);

  // Find the column indices for Employee ID and Test Status
  const headerRow = worksheet.getRow(1);
  let employeeIdCol = -1;
  let testStatusCol = -1;

  headerRow.eachCell((cell, colNumber) => {
    if (cell.value === 'EmployeeID') {
      employeeIdCol = colNumber;
    } else if (cell.value === 'TestStatus') {
      testStatusCol = colNumber;
    }
  });

  if (employeeIdCol !== -1 && testStatusCol !== -1) {
    const row = worksheet.getRow(rowIndex + 2); // Adjust for 1-based index and header row
    const empIdCell = row.getCell(employeeIdCol);
    const statusCell = row.getCell(testStatusCol);

    empIdCell.value = empNum;
    statusCell.value = status;

    if (status === 'Failed') {
      // Apply red fill to the cell if the test failed
      statusCell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FFFF0000' } // Red color
      };
    } else if (status === 'Passed') {
      // Apply green fill to the cell if the test passed
      statusCell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FF00FF00' } // Green color
      };
    }

    row.commit();
    await workbook.xlsx.writeFile(filePath);
  } else {
    console.error('Employee ID or Test Status column not found');
  }
};
