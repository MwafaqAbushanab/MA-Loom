# Google Sheets + Calendar + Email Integration Setup

This guide will help you set up the complete workflow: Contact Form → Google Sheets → Calendar → Automated Email

## 🗂️ Step 1: Create Google Sheets

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet named "MA Loom Contacts"
3. Create these column headers in row 1:
   - A1: Timestamp
   - B1: Name
   - C1: Email
   - D1: Company
   - E1: Phone
   - F1: Service
   - G1: Preferred Date
   - H1: Preferred Time
   - I1: Message
   - J1: Status
   - K1: Calendar Event ID

## 🔧 Step 2: Set up Google Apps Script

1. In your Google Sheet, go to **Extensions** → **Apps Script**
2. Replace the default code with the script below
3. Save the project as "MA Loom Integration"

```javascript
// Google Apps Script for MA Loom Contact Form Integration
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    
    // 1. Add to Google Sheets
    const sheetId = addToSheet(data);
    
    // 2. Create Calendar Event
    const eventId = createCalendarEvent(data);
    
    // 3. Update sheet with event ID
    updateSheetWithEventId(sheetId, eventId);
    
    // 4. Send confirmation email
    sendConfirmationEmail(data, eventId);
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, id: sheetId }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    Logger.log('Error: ' + error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function addToSheet(data) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  const row = [
    new Date(),
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
  return sheet.getLastRow();
}

function createCalendarEvent(data) {
  const calendar = CalendarApp.getDefaultCalendar();
  
  // Default to next business day at 10 AM if no date specified
  let startTime;
  if (data.preferredDate && data.preferredTime) {
    startTime = new Date(data.preferredDate + 'T' + data.preferredTime + ':00');
  } else {
    startTime = getNextBusinessDay();
    startTime.setHours(10, 0, 0, 0);
  }
  
  const endTime = new Date(startTime.getTime() + 30 * 60000); // 30 minutes later
  
  const event = calendar.createEvent(
    `Consultation: ${data.name} - ${data.service}`,
    startTime,
    endTime,
    {
      description: `
Client: ${data.name}
Company: ${data.company || 'Not specified'}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Service Interest: ${data.service}

Message:
${data.message}

---
Meeting Details:
- Duration: 30 minutes
- Type: Initial consultation
- Agenda: Discuss challenges and explore solutions

Meeting Link: [Add your preferred meeting link]
      `,
      guests: data.email,
      sendInvites: true
    }
  );
  
  return event.getId();
}

function updateSheetWithEventId(rowNumber, eventId) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.getRange(rowNumber, 11).setValue(eventId); // Column K
}

function sendConfirmationEmail(data, eventId) {
  const subject = "Thank you for reaching out to MA Loom! 🚀";
  
  const emailBody = `
Hello ${data.name}!

Thank you for reaching out to MA Loom — The Flow Studio! 🚀

I'm excited about the opportunity to discuss how we can transform your ${data.service.toLowerCase()} challenges into streamlined workflows that deliver results.

What happens next:
• I've scheduled our initial consultation (calendar invite sent separately)
• You'll receive a calendar invite within the next hour
• We'll explore how MA Loom can help you go from chaos to cadence

Your submission details:
• Service Interest: ${data.service}
• Company: ${data.company || 'Not specified'}
• Preferred Meeting: ${data.preferredDate ? `${data.preferredDate} at ${data.preferredTime}` : 'Flexible - I\'ve suggested a time'}

Message: "${data.message}"

In the meantime, feel free to explore our case studies and learn more about our methodology at maloom.studio.

Looking forward to weaving people, process, and platforms into an operating rhythm that scales your outcomes!

Best regards,
Mwafaq N. Abu-Shanab
Founder, MA Loom — The Flow Studio
📧 mwafaq@maloom.studio
🔗 linkedin.com/in/mwafaq-abushanab

P.S. Follow our journey and workflow tips on our social channels!
  `;
  
  MailApp.sendEmail({
    to: data.email,
    subject: subject,
    body: emailBody,
    replyTo: 'mwafaq@maloom.studio'
  });
}

function getNextBusinessDay() {
  const today = new Date();
  let nextDay = new Date(today);
  nextDay.setDate(today.getDate() + 1);
  
  // Skip weekends
  while (nextDay.getDay() === 0 || nextDay.getDay() === 6) {
    nextDay.setDate(nextDay.getDate() + 1);
  }
  
  return nextDay;
}

// Test function to verify setup
function testIntegration() {
  const testData = {
    name: "Test User",
    email: "test@example.com",
    company: "Test Company",
    phone: "+1234567890",
    service: "General Consultation",
    preferredDate: "2024-01-15",
    preferredTime: "10:00",
    message: "This is a test submission to verify the integration works."
  };
  
  const result = doPost({ postData: { contents: JSON.stringify(testData) } });
  Logger.log(result.getContent());
}
```

## 🔐 Step 3: Deploy the Apps Script

1. Click **Deploy** → **New deployment**
2. Choose type: **Web app**
3. Execute as: **Me**
4. Who has access: **Anyone** (this allows your website to access it)
5. Click **Deploy**
6. Copy the **Web app URL** - you'll need this for your website

## 📧 Step 4: Set up EmailJS (Alternative Email Service)

1. Go to [EmailJS](https://www.emailjs.com/)
2. Create a free account
3. Create a new service (Gmail, Outlook, etc.)
4. Create an email template with these variables:
   - `{{to_name}}` - Recipient name
   - `{{to_email}}` - Recipient email
   - `{{from_name}}` - Your name
   - `{{service}}` - Service they're interested in
   - `{{company}}` - Their company
   - `{{message}}` - Their message
   - `{{preferred_date}}` - Preferred meeting date
   - `{{preferred_time}}` - Preferred meeting time

## ⚙️ Step 5: Update Your Website Configuration

1. Open `src/services/formService.ts`
2. Replace the placeholder values:
   ```typescript
   const GOOGLE_SHEETS_URL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE';
   const EMAILJS_SERVICE_ID = 'YOUR_EMAILJS_SERVICE_ID';
   const EMAILJS_TEMPLATE_ID = 'YOUR_EMAILJS_TEMPLATE_ID';
   const EMAILJS_USER_ID = 'YOUR_EMAILJS_USER_ID';
   ```

## 🧪 Step 6: Test the Integration

1. Go to your Apps Script and run the `testIntegration()` function
2. Check that:
   - A new row appears in your Google Sheet
   - A calendar event is created
   - You receive a test email

## 📱 Step 7: Optional Enhancements

### Slack Notifications
Add this function to get Slack notifications for new leads:

```javascript
function sendSlackNotification(data) {
  const webhookUrl = 'YOUR_SLACK_WEBHOOK_URL';
  
  const payload = {
    text: `🚀 New Lead: ${data.name} from ${data.company || 'Unknown Company'}`,
    attachments: [{
      color: 'good',
      fields: [
        { title: 'Email', value: data.email, short: true },
        { title: 'Service', value: data.service, short: true },
        { title: 'Message', value: data.message, short: false }
      ]
    }]
  };
  
  UrlFetchApp.fetch(webhookUrl, {
    method: 'POST',
    contentType: 'application/json',
    payload: JSON.stringify(payload)
  });
}
```

### Automated Follow-ups
Set up time-based triggers in Apps Script to send follow-up emails.

## 🔒 Security Notes

- The Apps Script runs under your Google account
- All data is stored in your personal Google Sheets
- Email sending uses your Gmail sending limits
- The web app URL should be kept secure

## 📞 Support

If you encounter any issues:
1. Check the Apps Script execution logs
2. Verify permissions are granted
3. Test with the `testIntegration()` function
4. Check that the web app is deployed with correct permissions

---

**Pro Tip**: Once everything is working, you can add more automation like:
- CRM integration (HubSpot, Salesforce)
- Automated lead scoring
- Follow-up email sequences
- Meeting reminder emails