# 🔧 Google Sheets + Apps Script Setup Walkthrough

Follow these exact steps to set up your automated contact form system.

## 📊 Step 1: Create Google Sheets

### 1.1 Create New Spreadsheet
1. Go to [sheets.google.com](https://sheets.google.com)
2. Click **"+ Blank"** to create a new spreadsheet
3. Name it **"MA Loom Contacts"** (click on "Untitled spreadsheet" at the top)

### 1.2 Set Up Column Headers
**Copy and paste these headers exactly into row 1:**

| A1 | B1 | C1 | D1 | E1 | F1 | G1 | H1 | I1 | J1 | K1 |
|----|----|----|----|----|----|----|----|----|----|----|
| Timestamp | Name | Email | Company | Phone | Service | Preferred Date | Preferred Time | Message | Status | Event ID |

**Quick method:** Select cell A1, then paste this text:
```
Timestamp	Name	Email	Company	Phone	Service	Preferred Date	Preferred Time	Message	Status	Event ID
```

### 1.3 Format the Headers
1. Select row 1 (click the "1" on the left)
2. Make it **bold** (Ctrl+B / Cmd+B)
3. Apply background color (optional): Format → Fill color → Light blue
4. Freeze the header row: View → Freeze → 1 row

---

## ⚙️ Step 2: Set Up Google Apps Script

### 2.1 Open Apps Script
1. In your Google Sheet, go to **Extensions** → **Apps Script**
2. This opens a new tab with the Apps Script editor
3. You'll see a default `myFunction()` - we'll replace this

### 2.2 Replace the Default Code
1. **Delete everything** in the code editor
2. **Copy and paste** this complete script:

```javascript
// MA Loom Contact Form Integration Script
// This script handles form submissions, creates calendar events, and sends emails

function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    Logger.log('Received data: ' + JSON.stringify(data));
    
    // 1. Add to Google Sheets
    const rowNumber = addToSheet(data);
    Logger.log('Added to sheet at row: ' + rowNumber);
    
    // 2. Create Calendar Event
    const eventId = createCalendarEvent(data);
    Logger.log('Created calendar event: ' + eventId);
    
    // 3. Update sheet with event ID
    updateSheetWithEventId(rowNumber, eventId);
    
    // 4. Send confirmation email
    sendConfirmationEmail(data, eventId);
    Logger.log('Sent confirmation email');
    
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: true, 
        message: 'Contact form processed successfully',
        rowNumber: rowNumber,
        eventId: eventId 
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    Logger.log('Error in doPost: ' + error.toString());
    
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        error: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function addToSheet(data) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  const row = [
    new Date(), // Timestamp
    data.name,
    data.email,
    data.company || '',
    data.phone || '',
    data.service,
    data.preferredDate || '',
    data.preferredTime || '',
    data.message,
    'New Lead',
    '' // Calendar Event ID - will be filled later
  ];
  
  sheet.appendRow(row);
  const lastRow = sheet.getLastRow();
  
  // Format the new row
  const range = sheet.getRange(lastRow, 1, 1, 11);
  range.setBorder(true, true, true, true, true, true);
  
  // Highlight new leads
  sheet.getRange(lastRow, 10).setBackground('#fff2cc'); // Status column
  
  return lastRow;
}

function createCalendarEvent(data) {
  const calendar = CalendarApp.getDefaultCalendar();
  
  // Calculate start time
  let startTime;
  if (data.preferredDate && data.preferredTime) {
    // Use preferred date/time
    startTime = new Date(data.preferredDate + 'T' + data.preferredTime + ':00');
  } else {
    // Default to next business day at 10 AM CET
    startTime = getNextBusinessDay();
    startTime.setHours(10, 0, 0, 0);
  }
  
  // End time is 30 minutes later
  const endTime = new Date(startTime.getTime() + 30 * 60000);
  
  const title = `MA Loom Consultation: ${data.name} - ${data.service}`;
  
  const description = `
🚀 MA Loom Consultation Call

Client Information:
• Name: ${data.name}
• Company: ${data.company || 'Not specified'}
• Email: ${data.email}
• Phone: ${data.phone || 'Not provided'}
• Service Interest: ${data.service}

Client Message:
"${data.message}"

Meeting Agenda:
• Understand current workflow challenges
• Explore ${data.service.toLowerCase()} opportunities
• Discuss potential solutions and next steps
• Determine project scope and timeline

Preparation Notes:
• Review client's industry and potential pain points
• Prepare relevant case studies
• Have calendar ready for follow-up scheduling

Meeting Link: [Add your preferred meeting platform]
Meeting Type: Initial Consultation (30 min)
  `;
  
  try {
    const event = calendar.createEvent(
      title,
      startTime,
      endTime,
      {
        description: description,
        guests: data.email,
        sendInvites: true,
        location: 'Video Call (Link to be shared)'
      }
    );
    
    return event.getId();
  } catch (error) {
    Logger.log('Error creating calendar event: ' + error.toString());
    return 'ERROR_CREATING_EVENT';
  }
}

function updateSheetWithEventId(rowNumber, eventId) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.getRange(rowNumber, 11).setValue(eventId); // Column K (Event ID)
}

function sendConfirmationEmail(data, eventId) {
  const subject = "🚀 Thank you for reaching out to MA Loom!";
  
  const emailBody = `
Hello ${data.name}!

Thank you for reaching out to MA Loom — The Flow Studio! 

I'm excited about the opportunity to discuss how we can transform your ${data.service.toLowerCase()} challenges into streamlined workflows that deliver results.

📅 WHAT HAPPENS NEXT:
• I've scheduled our initial consultation (calendar invite sent separately)
• You'll receive a Google Calendar invite within the next few minutes  
• We'll explore how MA Loom can help you go from chaos to cadence

📋 YOUR SUBMISSION DETAILS:
• Service Interest: ${data.service}
• Company: ${data.company || 'Not specified'}
• Preferred Meeting: ${data.preferredDate ? `${data.preferredDate} at ${data.preferredTime} CET` : 'Flexible - I\'ve suggested a time that works'}

Your Message: "${data.message}"

🎯 MEETING PREPARATION:
To make our call as valuable as possible, please think about:
• Your biggest workflow frustrations
• Current tools and processes you're using
• What success would look like for your team

📚 EXPLORE BEFORE WE MEET:
• Case Studies: View our recent transformations
• Methodology: Learn about our approach
• Ventures: Check out Lokio and Fresh Flow projects

Looking forward to weaving people, process, and platforms into an operating rhythm that scales your outcomes!

Best regards,

Mwafaq N. Abu-Shanab
Founder, MA Loom — The Flow Studio
📧 mwafaq@maloom.studio
🔗 linkedin.com/in/mwafaq-abushanab
🌐 maloom.studio

P.S. If you need to reschedule, just reply to the calendar invite!
  `;
  
  try {
    MailApp.sendEmail({
      to: data.email,
      subject: subject,
      body: emailBody,
      replyTo: 'mwafaq@maloom.studio',
      name: 'Mwafaq Abu-Shanab - MA Loom'
    });
    
    // Also send yourself a notification
    MailApp.sendEmail({
      to: 'mwafaq@maloom.studio',
      subject: `🔔 New Lead: ${data.name} - ${data.service}`,
      body: `
New contact form submission:

Name: ${data.name}
Email: ${data.email}  
Company: ${data.company || 'Not specified'}
Phone: ${data.phone || 'Not provided'}
Service: ${data.service}
Message: ${data.message}

Calendar Event ID: ${eventId}
Preferred Meeting: ${data.preferredDate || 'Flexible'} ${data.preferredTime || ''}

The client has been sent a confirmation email and calendar invite.
      `,
      replyTo: data.email
    });
    
  } catch (error) {
    Logger.log('Error sending emails: ' + error.toString());
  }
}

function getNextBusinessDay() {
  const today = new Date();
  let nextDay = new Date(today);
  nextDay.setDate(today.getDate() + 1);
  
  // Skip weekends (0 = Sunday, 6 = Saturday)
  while (nextDay.getDay() === 0 || nextDay.getDay() === 6) {
    nextDay.setDate(nextDay.getDate() + 1);
  }
  
  return nextDay;
}

// Test function - run this to verify everything works
function testIntegration() {
  const testData = {
    name: "Test User",
    email: "your-email@gmail.com", // ⚠️ CHANGE THIS TO YOUR EMAIL
    company: "Test Company",
    phone: "+1234567890",
    service: "General Consultation",
    preferredDate: "2024-12-01",
    preferredTime: "10:00",
    message: "This is a test submission to verify the integration works correctly."
  };
  
  Logger.log('Starting test integration...');
  const result = doPost({ 
    postData: { 
      contents: JSON.stringify(testData) 
    } 
  });
  
  Logger.log('Test result: ' + result.getContent());
  
  // Check if it was successful
  const response = JSON.parse(result.getContent());
  if (response.success) {
    Logger.log('✅ Test successful! Check your email and calendar.');
  } else {
    Logger.log('❌ Test failed: ' + response.error);
  }
}
```

### 2.3 Save the Project
1. Click **Save** (💾 icon) or Ctrl+S / Cmd+S
2. Name your project: **"MA Loom Contact Integration"**
3. Click **Save**

---

## 🚀 Step 3: Deploy the Apps Script

### 3.1 Deploy as Web App
1. Click **Deploy** → **New deployment**
2. Click the ⚙️ gear icon next to "Type"
3. Select **Web app**

### 3.2 Configure Deployment Settings
**Important settings:**
- **Execute as:** Me (your-email@gmail.com)
- **Who has access:** Anyone
- **Description:** MA Loom Contact Form Handler

### 3.3 Authorize and Deploy
1. Click **Deploy**
2. Click **Authorize access**
3. Choose your Google account
4. Click **Advanced** → **Go to MA Loom Contact Integration (unsafe)**
5. Click **Allow**
6. **Copy the Web app URL** - you'll need this!

**The URL looks like:**
```
https://script.google.com/macros/s/AKfycby...../exec
```

---

## 🧪 Step 4: Test the Integration

### 4.1 Test from Apps Script
1. In the Apps Script editor, find the `testIntegration()` function
2. **IMPORTANT:** Change the email in the test to your actual email:
   ```javascript
   email: "your-actual-email@gmail.com", // ⚠️ CHANGE THIS
   ```
3. Click **Run** (▶️) next to `testIntegration`
4. Check the **Execution log** at the bottom

### 4.2 Verify Results
After running the test, check:
- ✅ **Google Sheets:** New row with test data
- ✅ **Gmail:** Confirmation email received
- ✅ **Calendar:** New event created
- ✅ **Logs:** No error messages

---

## 🌐 Step 5: Configure Your Website

### 5.1 Create Environment File
1. In your project folder, create a file named `.env`
2. Add this line with **your actual Web app URL:**
   ```
   VITE_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/YOUR_ACTUAL_SCRIPT_ID/exec
   ```

### 5.2 Test Your Website
1. Run `npm run dev` to start your development server
2. Go to the Contact page
3. Fill out and submit the form
4. Check that everything works as expected

---

## 🎯 Success Checklist

When everything is working, you should see:

- ✅ Form submissions appear in Google Sheets
- ✅ Calendar events are created automatically  
- ✅ Clients receive confirmation emails
- ✅ You receive notification emails
- ✅ Calendar invites are sent to both parties
- ✅ No errors in the Apps Script logs

## 🆘 Troubleshooting

### Common Issues:

**"Unauthorized" errors:**
- Re-run the authorization process
- Make sure "Who has access" is set to "Anyone"

**No calendar events:**
- Check your default Google Calendar
- Verify calendar permissions in Apps Script

**No emails sent:**
- Check Gmail's sent folder
- Verify Gmail API is enabled
- Check spam folders

**Form not submitting:**
- Verify the Web app URL in .env
- Check browser console for errors
- Test the Apps Script function directly

### Getting Help:
1. Check the Apps Script execution logs
2. Test individual functions separately
3. Verify all permissions are granted
4. Try the test function first

---

**🎉 Once this is set up, your contact form will be fully automated!**