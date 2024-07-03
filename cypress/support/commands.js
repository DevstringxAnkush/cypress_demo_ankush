// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('getRandomElement', { prevSubject: 'element' }, (subject) => {
    return cy.wrap(subject).then((elements) => {
      const randomIndex = Math.floor(Math.random() * elements.length);
      return cy.wrap(elements[randomIndex]);
    });
  });




  Cypress.Commands.add('readJSON', (filePath) => {
    return cy.readFile(filePath);
  });


  Cypress.Commands.add('writeJSON', (filePath, data) => {
    return cy.writeFile(filePath, data);
  });









  const ExcelJS = require('exceljs');

Cypress.Commands.add('readExcelFile', (filePath, sheetName) => {
  return cy.readFile(filePath, 'binary').then((data) => {
    const workbook = new ExcelJS.Workbook();
    return workbook.xlsx.load(data).then((loadedWorkbook) => {
      const worksheet = loadedWorkbook.getWorksheet(sheetName);
      const sheetData = [];
      worksheet.eachRow({ includeEmpty: true }, (row, rowNumber) => {
        const rowData = {};
        row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
          rowData[`Column${colNumber}`] = cell.value;
        });
        sheetData.push(rowData);
      });
      return sheetData;
    });
  });
});





Cypress.Commands.add('writeToExcel', (filePath, sheetName, data) => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet(sheetName);
  data.forEach((row) => {
    worksheet.addRow(row);
  });
  return workbook.xlsx.writeBuffer().then((buffer) => {
    cy.writeFile(filePath, buffer, 'binary');
  });
});