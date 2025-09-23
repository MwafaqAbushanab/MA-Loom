#!/usr/bin/env node

// Quick setup script for MA Loom environment variables
// Run this with: node setup-env.js

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('\n🚀 MA Loom Environment Setup\n');
console.log('This script will help you create your .env file with the necessary configuration.\n');

async function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer.trim());
    });
  });
}

async function setupEnvironment() {
  try {
    console.log('📝 Let\'s set up your environment variables:\n');

    // Google Sheets URL
    console.log('1️⃣  GOOGLE APPS SCRIPT WEB APP URL');
    console.log('   After deploying your Apps Script, you\'ll get a URL like:');
    console.log('   https://script.google.com/macros/s/AKfycby...../exec\n');
    
    const googleSheetsUrl = await askQuestion('Enter your Google Apps Script Web App URL (or press Enter to skip): ');

    // EmailJS Configuration (optional)
    console.log('\n2️⃣  EMAILJS CONFIGURATION (Optional - for enhanced email features)');
    console.log('   If you want to use EmailJS for enhanced email features, visit emailjs.com\n');
    
    const useEmailJS = await askQuestion('Do you want to configure EmailJS? (y/n): ');
    
    let emailjsConfig = {
      serviceId: '',
      templateId: '',
      userId: ''
    };

    if (useEmailJS.toLowerCase() === 'y' || useEmailJS.toLowerCase() === 'yes') {
      emailjsConfig.serviceId = await askQuestion('Enter your EmailJS Service ID: ');
      emailjsConfig.templateId = await askQuestion('Enter your EmailJS Template ID: ');
      emailjsConfig.userId = await askQuestion('Enter your EmailJS User ID: ');
    }

    // Generate .env file content
    const envContent = `# MA Loom Contact Form Configuration
# Generated on ${new Date().toISOString()}

# Google Apps Script Integration
VITE_GOOGLE_SHEETS_URL=${googleSheetsUrl || 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'}

# EmailJS Configuration (Optional)
VITE_EMAILJS_SERVICE_ID=${emailjsConfig.serviceId || 'your_service_id'}
VITE_EMAILJS_TEMPLATE_ID=${emailjsConfig.templateId || 'your_template_id'}
VITE_EMAILJS_USER_ID=${emailjsConfig.userId || 'your_user_id'}

# Optional: Slack Integration
# VITE_SLACK_WEBHOOK_URL=https://hooks.slack.com/services/YOUR/SLACK/WEBHOOK
`;

    // Write to .env file
    const envPath = path.join(__dirname, '.env');
    fs.writeFileSync(envPath, envContent);

    console.log('\n✅ Environment file created successfully!');
    console.log(`📁 File location: ${envPath}`);
    
    if (!googleSheetsUrl) {
      console.log('\n⚠️  Remember to update VITE_GOOGLE_SHEETS_URL with your actual Apps Script URL');
    }

    console.log('\n🎯 Next Steps:');
    console.log('1. Follow GOOGLE_SETUP_WALKTHROUGH.md to set up Google Sheets & Apps Script');
    console.log('2. Update the .env file with your actual URLs');
    console.log('3. Test the integration with: npm run dev');
    console.log('4. Submit a test form to verify everything works');

    console.log('\n📚 Documentation:');
    console.log('• GOOGLE_SETUP_WALKTHROUGH.md - Detailed Google setup');
    console.log('• SETUP_CHECKLIST.md - Quick verification checklist');
    console.log('• INTEGRATION_SETUP.md - Technical integration guide');

  } catch (error) {
    console.error('\n❌ Error setting up environment:', error.message);
  } finally {
    rl.close();
  }
}

// Check if .env already exists
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  console.log('⚠️  .env file already exists!');
  rl.question('Do you want to overwrite it? (y/n): ', (answer) => {
    if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
      setupEnvironment();
    } else {
      console.log('Setup cancelled. Your existing .env file was not modified.');
      rl.close();
    }
  });
} else {
  setupEnvironment();
}