# Google Sheets Setup for WeDo Business Listings

## Step 1: Create Google Sheet
1. Go to Google Sheets and create a new sheet
2. Name it "WeDo Business Submissions"
3. Add these column headers in row 1:
   - A1: Name
   - B1: Category  
   - C1: Mobile
   - D1: Email
   - E1: Address
   - F1: City
   - G1: Timestamp

## Step 2: Create Google Apps Script
**If Safari gives "too many redirects" error, try:**
- Use Chrome or Firefox browser instead
- OR go directly to: https://script.google.com
- OR clear Safari cache and try again

1. In your Google Sheet, go to Extensions > Apps Script
2. Replace the default code with this:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Handle both JSON and form data
    let data;
    if (e.postData.type === 'application/json') {
      data = JSON.parse(e.postData.contents);
    } else {
      data = e.parameter;
    }
    
    // Log the received data for debugging
    console.log('Received data:', data);
    
    sheet.appendRow([
      data.name || '',
      data.category || '',
      data.mobile || '',
      data.email || '',
      data.address || '',
      data.city || '',
      data.timestamp || new Date().toISOString()
    ]);
    
    return ContentService.createTextOutput('Success');
  } catch (error) {
    console.error('Error:', error);
    return ContentService.createTextOutput('Error: ' + error.toString());
  }
}

function doGet(e) {
  return ContentService.createTextOutput('GET request received');
}
```

## Step 3: Deploy the Script
1. Click "Deploy" > "New deployment"
2. Choose "Web app" as type
3. Set "Execute as" to "Me"
4. Set "Who has access" to "Anyone"
5. Click "Deploy"
6. Copy the Web App URL

## Step 4: Update WeDo Code
Replace `YOUR_SCRIPT_ID` in script.js with your actual Web App URL

## Result
- All form submissions will automatically go to your Google Sheet
- You can view, filter, and manage submissions easily
- Works perfectly with GitHub Pages