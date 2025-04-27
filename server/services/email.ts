import { MailService } from '@sendgrid/mail';

// Initialize SendGrid with API key
const mailService = new MailService();

if (process.env.SENDGRID_API_KEY) {
  mailService.setApiKey(process.env.SENDGRID_API_KEY);
} else {
  console.warn('SENDGRID_API_KEY is not set. Email functionality will not work.');
}

export interface EmailParams {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  try {
    // Default sender email
    const from = 'info@bbtechnology.io';
    
    // Send email
    await mailService.send({
      to: params.to,
      from: from,
      subject: params.subject,
      text: params.text || '',
      html: params.html || '',
    });
    
    // Also send a copy to the business email
    await mailService.send({
      to: from,
      from: from,
      subject: `[COPY] ${params.subject}`,
      text: params.text ? `Copy of email sent to ${params.to}\n\n${params.text}` : '',
      html: params.html ? `<p>Copy of email sent to ${params.to}</p>${params.html}` : '',
    });
    
    console.log(`Email sent to ${params.to} and copied to ${from}`);
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}

export function generateConsultationConfirmationEmail(
  name: string,
  service: string,
  date: string,
  time: string,
  meetingLink: string,
  userTimezone?: string
): { text: string; html: string } {
  // Plain text version
  const text = `
Hello ${name},

Thank you for scheduling a consultation with B&B Technology!

🗓 Date: ${date}
⏰ Time: ${time}${userTimezone ? ` (${userTimezone})` : ''}
🌐 Service: ${service}

Your Google Meet Link:
🔗 ${meetingLink}

We've created a Google Meet session for you. Please click the link above at your scheduled time to join the consultation. No software installation needed - works directly in your browser.
We're looking forward to discussing your project needs and how we can help your business grow.

If you need to reschedule or cancel, please contact us at info@bbtechnology.io or reply to this email.

Looking forward to meeting you!
The B&B Technology Team
`;

  // HTML version
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Consultation Confirmation</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; }
    .header { background: linear-gradient(135deg, #02124d 0%, #092381 100%); padding: 30px 20px; color: white; text-align: center; border-radius: 8px 8px 0 0; }
    .header h1 { margin: 0; font-size: 24px; }
    .header p { margin: 5px 0 0; opacity: 0.8; }
    .content { padding: 30px 20px; background: #f9f9f9; }
    .greeting { font-size: 18px; margin-bottom: 20px; }
    .details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
    .details h3 { margin-top: 0; color: #02124d; border-bottom: 1px solid #eee; padding-bottom: 10px; }
    .details-item { padding: 12px 0; display: flex; align-items: center; }
    .details-item:not(:last-child) { border-bottom: 1px solid #f0f0f0; }
    .details-item strong { width: 80px; color: #555; }
    .icon { display: inline-block; width: 20px; text-align: center; margin-right: 10px; color: #4BA3F2; }
    .meeting-link { background: #f0f7ff; border-radius: 8px; padding: 15px; margin: 25px 0; border-left: 4px solid #4BA3F2; }
    .meeting-link a { color: #4BA3F2; font-weight: bold; text-decoration: none; word-break: break-all; }
    .meeting-link a:hover { text-decoration: underline; }
    .button-container { text-align: center; margin: 30px 0 20px; }
    .button { display: inline-block; background: linear-gradient(to right, #4BA3F2, #6e8eff); color: white; padding: 12px 25px; text-decoration: none; border-radius: 50px; font-weight: bold; box-shadow: 0 3px 6px rgba(75,163,242,0.2); transition: all 0.3s; }
    .button:hover { transform: translateY(-2px); box-shadow: 0 5px 10px rgba(75,163,242,0.3); }
    .footer { background: #f0f0f0; padding: 20px; text-align: center; font-size: 12px; color: #666; border-radius: 0 0 8px 8px; }
    .logo { margin-bottom: 15px; max-width: 120px; }
    .divider { height: 1px; background: #e0e0e0; margin: 20px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Your Consultation is Confirmed!</h1>
      <p>We're excited to meet with you soon</p>
    </div>
    <div class="content">
      <p class="greeting">Hello ${name},</p>
      <p>Thank you for scheduling a consultation with B&B Technology! We're looking forward to learning more about your needs and discussing how we can help.</p>
      
      <div class="details">
        <h3>Consultation Details</h3>
        <div class="details-item">
          <span class="icon">🗓</span>
          <strong>Date:</strong> <span>${date}</span>
        </div>
        <div class="details-item">
          <span class="icon">⏰</span>
          <strong>Time:</strong> <span>${time}${userTimezone ? ` (${userTimezone})` : ''}</span>
        </div>
        <div class="details-item">
          <span class="icon">🌐</span>
          <strong>Service:</strong> <span>${service}</span>
        </div>
      </div>
      
      <div class="meeting-link">
        <p><strong>Your Google Meet Link:</strong></p>
        <p><a href="${meetingLink}" target="_blank">${meetingLink}</a></p>
        <p style="font-size: 13px; margin-top: 10px; color: #666;">We've created a Google Meet session for you. Please click the link above at your scheduled time to join the consultation. No software installation needed - works directly in your browser.</p>
      </div>
      
      <p>We're looking forward to connecting with you and exploring how we can help your business grow. All meeting details have been added to our calendar.</p>
      
      <div class="button-container">
        <a href="${meetingLink}" class="button" target="_blank">Join Google Meet at Scheduled Time</a>
      </div>
      
      <div class="divider"></div>
      
      <p style="font-size: 13px; color: #666;">If you need to reschedule or cancel, please contact us at <a href="mailto:info@bbtechnology.io" style="color: #4BA3F2;">info@bbtechnology.io</a> or reply to this email.</p>
      
      <p>Looking forward to meeting you!<br><strong>The B&B Technology Team</strong></p>
    </div>
    <div class="footer">
      <p>© ${new Date().getFullYear()} B&B Technology. All rights reserved.</p>
      <p style="margin-top: 5px; font-size: 10px;">This email was sent in response to your consultation request.</p>
    </div>
  </div>
</body>
</html>
`;

  return { text, html };
}