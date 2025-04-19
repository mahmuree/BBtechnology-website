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
  time: string
): { text: string; html: string } {
  // Plain text version
  const text = `
Hi ${name},

Thank you for scheduling a consultation with B&B Technology!

Consultation Details:
- Service: ${service}
- Date: ${date}
- Time: ${time}

We're looking forward to discussing your project needs and how we can help your business grow.

If you need to reschedule or cancel, please contact us at info@bbtechnology.io or reply to this email.

Best regards,
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
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #02124d; padding: 20px; color: white; text-align: center; }
    .content { padding: 20px; background: #f9f9f9; }
    .details { background: white; padding: 15px; border-radius: 5px; margin: 20px 0; }
    .details-item { padding: 8px 0; border-bottom: 1px solid #eee; }
    .details-item:last-child { border-bottom: none; }
    .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
    .logo { margin-bottom: 15px; }
    .button { display: inline-block; background: #4BA3F2; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Your Consultation is Confirmed!</h1>
    </div>
    <div class="content">
      <p>Hi ${name},</p>
      <p>Thank you for scheduling a consultation with B&B Technology! We're excited to discuss your project needs.</p>
      
      <div class="details">
        <h3>Consultation Details:</h3>
        <div class="details-item"><strong>Service:</strong> ${service}</div>
        <div class="details-item"><strong>Date:</strong> ${date}</div>
        <div class="details-item"><strong>Time:</strong> ${time}</div>
      </div>
      
      <p>We're looking forward to connecting with you and exploring how we can help your business grow.</p>
      <p>If you need to reschedule or cancel, please contact us at <a href="mailto:info@bbtechnology.io">info@bbtechnology.io</a> or reply to this email.</p>
      
      <p>Best regards,<br>The B&B Technology Team</p>
    </div>
    <div class="footer">
      <p>© ${new Date().getFullYear()} B&B Technology. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;

  return { text, html };
}