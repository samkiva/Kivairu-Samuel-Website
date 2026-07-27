import { NextResponse } from 'next/server';

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot?: string;
}

/**
 * Escapes special HTML characters to prevent HTML injection in email client webviews.
 */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: Request) {
  try {
    const body: ContactPayload = await request.json();
    const { name, email, subject, message, honeypot } = body;

    // Honeypot anti-spam verification
    if (honeypot && honeypot.trim() !== '') {
      return NextResponse.json(
        { success: false, error: 'Spam submission detected.' },
        { status: 400 }
      );
    }

    // Server-side field validation
    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: 'Valid name is required (at least 2 characters).' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: 'Valid email address is required.' },
        { status: 400 }
      );
    }

    if (!subject || subject.trim().length < 3) {
      return NextResponse.json(
        { success: false, error: 'Subject is required (at least 3 characters).' },
        { status: 400 }
      );
    }

    if (!message || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: 'Message is required (at least 10 characters).' },
        { status: 400 }
      );
    }

    // Environment variables
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || 'kivairusamuel@gmail.com';
    const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://kivairu-samuel.vercel.app';

    if (!resendApiKey) {
      console.error('Contact API Error: RESEND_API_KEY is not configured in environment variables.');
      return NextResponse.json(
        {
          success: false,
          error: 'Server email service is not configured. Please add RESEND_API_KEY to your Vercel Environment Variables.',
        },
        { status: 500 }
      );
    }

    // Format submission timestamp for inquiry metadata
    const submissionDate = new Date().toLocaleString('en-US', {
      timeZone: 'UTC',
      dateStyle: 'full',
      timeStyle: 'medium',
    }) + ' (UTC)';

    // Sanitize user inputs for safe HTML rendering
    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safeSubject = escapeHtml(subject.trim());
    const safeMessage = escapeHtml(message.trim());
    const currentYear = new Date().getFullYear();

    // Plain-text email fallback for text-only clients
    const plainTextFallback = `NEW PORTFOLIO INQUIRY\n\n` +
      `From: ${name.trim()} <${email.trim()}>\n` +
      `Subject: ${subject.trim()}\n` +
      `Date: ${submissionDate}\n\n` +
      `MESSAGE:\n` +
      `${message.trim()}\n\n` +
      `----------------------------------------\n` +
      `Reply directly to: ${email.trim()}\n` +
      `Originated from: ${siteUrl}\n` +
      `© ${currentYear} Kivairu Samuel. All rights reserved.`;

    // Modern responsive HTML email template
    const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Portfolio Inquiry</title>
</head>
<body style="margin: 0; padding: 0; background-color: #F1F5F9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; color: #0F172A;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #F1F5F9; padding: 32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #FFFFFF; border-radius: 16px; border: 1px solid #E2E8F0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -2px rgba(0,0,0,0.05);">
          
          <!-- Header Banner -->
          <tr>
            <td style="background-color: #0F172A; padding: 28px 32px; border-bottom: 3px solid #4F46E5;">
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <span style="display: inline-block; background-color: #4F46E5; color: #FFFFFF; font-weight: 700; font-family: monospace; font-size: 14px; padding: 6px 12px; border-radius: 8px; letter-spacing: 1px;">KS</span>
                    <span style="display: inline-block; margin-left: 12px; color: #FFFFFF; font-size: 18px; font-weight: 700; vertical-align: middle;">Kivairu Samuel</span>
                  </td>
                  <td align="right">
                    <span style="display: inline-block; background-color: rgba(79,70,229,0.2); color: #818CF8; border: 1px solid rgba(129,140,248,0.3); font-size: 11px; font-weight: 600; text-transform: uppercase; padding: 4px 10px; border-radius: 9999px; letter-spacing: 0.5px;">New Inquiry</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Client Details Card -->
          <tr>
            <td style="padding: 32px 32px 16px 32px;">
              <h2 style="margin: 0 0 16px 0; font-size: 20px; font-weight: 700; color: #0F172A; tracking-tight: -0.02em;">Inquiry Details</h2>
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 16px;">
                <tr>
                  <td style="padding: 6px 0; font-size: 13px; color: #64748B; width: 100px; font-weight: 600; text-transform: uppercase; tracking: 0.5px;">Sender:</td>
                  <td style="padding: 6px 0; font-size: 14px; color: #0F172A; font-weight: 600;">${safeName}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-size: 13px; color: #64748B; font-weight: 600; text-transform: uppercase; tracking: 0.5px;">Email:</td>
                  <td style="padding: 6px 0; font-size: 14px; color: #4F46E5; font-weight: 600;"><a href="mailto:${safeEmail}" style="color: #4F46E5; text-decoration: none;">${safeEmail}</a></td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-size: 13px; color: #64748B; font-weight: 600; text-transform: uppercase; tracking: 0.5px;">Subject:</td>
                  <td style="padding: 6px 0; font-size: 14px; color: #0F172A; font-weight: 600;">${safeSubject}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-size: 13px; color: #64748B; font-weight: 600; text-transform: uppercase; tracking: 0.5px;">Date:</td>
                  <td style="padding: 6px 0; font-size: 13px; color: #64748B;">${submissionDate}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message Body -->
          <tr>
            <td style="padding: 16px 32px 24px 32px;">
              <h3 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 700; text-transform: uppercase; color: #64748B; letter-spacing: 0.5px;">Message Content</h3>
              <div style="background-color: #F8FAFC; border-left: 4px solid #4F46E5; border-top: 1px solid #E2E8F0; border-right: 1px solid #E2E8F0; border-bottom: 1px solid #E2E8F0; border-radius: 0 12px 12px 0; padding: 20px; font-size: 15px; line-height: 1.65; color: #1E293B; white-space: pre-wrap; word-break: break-word;">${safeMessage}</div>
            </td>
          </tr>

          <!-- Quick Action Bar -->
          <tr>
            <td style="padding: 0 32px 32px 32px;">
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="center" style="background-color: #EEF2FF; border: 1px solid #C7D2FE; border-radius: 12px; padding: 20px;">
                    <p style="margin: 0 0 12px 0; font-size: 14px; color: #3730A3; font-weight: 600;">Need to respond to this client?</p>
                    <a href="mailto:${safeEmail}?subject=Re:%20${encodeURIComponent(subject.trim())}" style="display: inline-block; background-color: #4F46E5; color: #FFFFFF; font-size: 14px; font-weight: 600; text-decoration: none; padding: 12px 24px; border-radius: 8px; box-shadow: 0 2px 4px rgba(79,70,229,0.2);">Reply to ${safeName} &rarr;</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer & Security Note -->
          <tr>
            <td style="background-color: #F8FAFC; padding: 24px 32px; border-top: 1px solid #E2E8F0; font-size: 12px; color: #64748B; text-align: center; line-height: 1.5;">
              <p style="margin: 0 0 8px 0; font-weight: 500; color: #475569;">
                🔒 <strong>Security Note:</strong> This message originated from your portfolio contact form at <a href="${siteUrl}" style="color: #4F46E5; text-decoration: none;">${siteUrl}</a>.
              </p>
              <p style="margin: 0;">
                &copy; ${currentYear} Kivairu Samuel. All rights reserved. Generated automatically from Kivairu Samuel Portfolio.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

    // Resend Email API Request with reply_to header configuration
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: 'Kivairu Samuel Portfolio <onboarding@resend.dev>',
        to: [recipientEmail],
        reply_to: email.trim(),
        subject: `[Portfolio Inquiry] ${subject.trim()}`,
        html: htmlTemplate,
        text: plainTextFallback,
      }),
    });

    if (!res.ok) {
      const rawText = await res.text().catch(() => '');
      let errorData: { message?: string } = {};
      try {
        errorData = JSON.parse(rawText);
      } catch {
        // Raw text parsing fallback
      }
      console.error(`Resend Status: ${res.status}`);
      console.error(`Resend Response: ${rawText}`);

      const detailedError = errorData?.message || rawText || 'Failed to send email via server handler.';
      return NextResponse.json(
        { success: false, error: detailedError },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Your inquiry has been successfully received and logged.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error while processing request.' },
      { status: 500 }
    );
  }
}
