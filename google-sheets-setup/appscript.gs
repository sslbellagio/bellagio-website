const SHEET_NAME = 'Leads'; 

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);

    // Get existing headers or initialize them
    let headers = [];
    if (sheet.getLastRow() === 0) {
      headers = Object.keys(data);
      sheet.appendRow(headers);
    } else {
      headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    }

    // Map new fields dynamically
    const newHeaders = Object.keys(data).filter(key => !headers.includes(key));
    if (newHeaders.length > 0) {
      headers = headers.concat(newHeaders);
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    }

    // Create the row data based on headers
    const row = headers.map(header => data[header] || '');
    sheet.appendRow(row);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    Logger.log('Error: ' + err.toString());
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'SSL Bellagio script is live' }))
    .setMimeType(ContentService.MimeType.JSON);
}
