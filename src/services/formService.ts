import emailjs from 'emailjs-com';

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service: string;
  message: string;
  preferredDate?: string;
  preferredTime?: string;
}

// Configuration from environment variables
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;
const GOOGLE_SHEETS_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL;

export const submitContactForm = async (formData: ContactFormData): Promise<void> => {
  // Check if all required environment variables are set
  if (!GOOGLE_SHEETS_URL) {
    console.warn('Google Sheets URL not configured, form data will only be sent via email');
  }
  
  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_USER_ID) {
    console.warn('EmailJS not fully configured, no confirmation email will be sent');
  }

  const errors: string[] = [];

  try {
    // 1. Send to Google Sheets (if configured)
    if (GOOGLE_SHEETS_URL) {
      try {
        await fetch(GOOGLE_SHEETS_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            timestamp: new Date().toISOString(),
            status: 'New Lead'
          })
        });
        console.log('Data sent to Google Sheets successfully');
      } catch (error) {
        console.error('Error sending to Google Sheets:', error);
        errors.push('Failed to save to database');
      }
    }

    // 2. Send confirmation email to user (if EmailJS is configured)
    if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_USER_ID) {
      try {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            to_name: formData.name,
            to_email: formData.email,
            from_name: 'Mwafaq Abu-Shanab',
            company: formData.company || 'Not specified',
            service: formData.service,
            message: formData.message,
            preferred_date: formData.preferredDate || 'Flexible',
            preferred_time: formData.preferredTime || 'Flexible',
            reply_to: 'mwafaq@maloom.studio'
          },
          EMAILJS_USER_ID
        );
        console.log('Confirmation email sent successfully');
      } catch (error) {
        console.error('Error sending confirmation email:', error);
        errors.push('Failed to send confirmation email');
      }
    }

    // 3. Fallback: Send basic notification email to yourself
    if (!GOOGLE_SHEETS_URL && (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_USER_ID)) {
      // If neither Google Sheets nor EmailJS is configured, create a mailto link as fallback
      const subject = `New Contact: ${formData.name} - ${formData.service}`;
      const body = `
New contact form submission:

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not specified'}
Phone: ${formData.phone || 'Not provided'}
Service: ${formData.service}
Preferred Date: ${formData.preferredDate || 'Flexible'}
Preferred Time: ${formData.preferredTime || 'Flexible'}

Message:
${formData.message}

Timestamp: ${new Date().toISOString()}
      `;
      
      const mailtoLink = `mailto:mwafaq@maloom.studio?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      console.log('Opening mailto link as fallback:', mailtoLink);
      window.open(mailtoLink);
    }

    if (errors.length > 0) {
      console.warn('Form submitted with some errors:', errors);
      // Don't throw error if at least one method worked
      if (errors.length === 2) {
        throw new Error('All integration methods failed. Please contact mwafaq@maloom.studio directly.');
      }
    }

    console.log('Form submitted successfully');
  } catch (error) {
    console.error('Critical error submitting form:', error);
    throw new Error('Failed to submit form. Please contact mwafaq@maloom.studio directly or try again.');
  }
};

// Email template for user confirmation
export const getConfirmationEmailTemplate = (formData: ContactFormData): string => {
  return `
Hello ${formData.name}!

Thank you for reaching out to MA Loom — The Flow Studio! 🚀

I'm excited about the opportunity to discuss how we can transform your ${formData.service.toLowerCase()} challenges into streamlined workflows that deliver results.

What happens next:
• I'll review your request within 24 hours
• You'll receive a calendar invite for our initial consultation
• We'll explore how MA Loom can help you go from chaos to cadence

Your submission details:
• Service Interest: ${formData.service}
• Company: ${formData.company || 'Not specified'}
• Preferred Meeting: ${formData.preferredDate ? `${formData.preferredDate} at ${formData.preferredTime}` : 'Flexible'}

Message: "${formData.message}"

In the meantime, feel free to explore our case studies and learn more about our methodology at maloom.studio.

Looking forward to weaving people, process, and platforms into an operating rhythm that scales your outcomes!

Best regards,
Mwafaq N. Abu-Shanab
Founder, MA Loom — The Flow Studio
📧 mwafaq@maloom.studio
🔗 linkedin.com/in/mwafaq-abushanab

P.S. Follow our journey and workflow tips on our social channels!
`;
};