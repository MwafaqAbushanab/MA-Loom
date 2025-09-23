# ⚡ Quick Start Guide - Contact Form Integration

**Goal:** Get your automated contact form working in 15 minutes

## 🚀 Super Quick Setup (Follow in Order)

### 1️⃣ Run the Environment Setup
```bash
node setup-env.js
```
This creates your `.env` file with placeholder values.

### 2️⃣ Set Up Google Sheets
1. Go to [sheets.google.com](https://sheets.google.com)
2. Create new sheet named **"MA Loom Contacts"**
3. Copy this header row into A1:
   ```
   Timestamp	Name	Email	Company	Phone	Service	Preferred Date	Preferred Time	Message	Status	Event ID
   ```

### 3️⃣ Set Up Apps Script
1. In your sheet: **Extensions** → **Apps Script**
2. Delete default code, paste the script from `GOOGLE_SETUP_WALKTHROUGH.md`
3. Save as **"MA Loom Contact Integration"**
4. **Deploy** → **New deployment** → **Web app**
5. Set **Execute as:** Me, **Access:** Anyone
6. **Copy the Web app URL**

### 4️⃣ Update Your Environment
1. Open your `.env` file
2. Replace `YOUR_SCRIPT_ID` with your actual Web app URL:
   ```
   VITE_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/YOUR_ACTUAL_ID/exec
   ```

### 5️⃣ Test Everything
1. In Apps Script, run `testIntegration()` function
2. Check: Sheet has new row, you got email, calendar event created
3. Run `npm run dev` and test your contact form

## ✅ Success Indicators

When working correctly:
- ✅ Form submits without errors
- ✅ New row appears in Google Sheets
- ✅ Calendar event is created  
- ✅ Client receives confirmation email
- ✅ You receive notification email

## 🆘 If Something Breaks

**Form won't submit:**
- Check browser console for errors
- Verify Web app URL in `.env` file
- Make sure Apps Script is deployed as "Anyone" access

**No calendar events:**
- Run the test function in Apps Script first
- Check Apps Script execution logs
- Verify calendar permissions

**No emails:**
- Check spam folders
- Verify Gmail permissions in Apps Script
- Test the `testIntegration()` function

## 📞 Need Help?

1. **Check the logs:** Apps Script → Executions tab
2. **Test individually:** Run `testIntegration()` in Apps Script
3. **Verify permissions:** Re-authorize if needed
4. **Check documentation:** `GOOGLE_SETUP_WALKTHROUGH.md` has detailed steps

---

**🎯 That's it! Your automated contact system is ready to capture leads, schedule meetings, and send confirmations.**