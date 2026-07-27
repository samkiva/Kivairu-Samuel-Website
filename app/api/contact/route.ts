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
      `Made with 💜 by Kivairu Samuel Portfolio`;

    // Canva-inspired clean HTML email template
    const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Inquiry from ${safeName}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #F4F4F6; font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; color: #111827;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #F4F4F6; padding: 40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 580px; background-color: #FFFFFF; border-radius: 20px; padding: 40px; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01);">
          
          <!-- Canva-Style Header: Brand Name + Status Badge -->
          <tr>
            <td>
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <span style="font-size: 22px; font-weight: 800; tracking-tight: -0.03em; color: #7C3AED; font-family: 'SF Pro Display', -apple-system, sans-serif;">Kivairu Samuel</span>
                  </td>
                  <td align="right">
                    <span style="display: inline-block; background-color: #F3F4F6; color: #4B5563; font-size: 12px; font-weight: 600; padding: 6px 14px; border-radius: 9999px; letter-spacing: 0.2px;">Portfolio Inquiry</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Hero Headline (Canva Style) -->
          <tr>
            <td style="padding-top: 36px;">
              <h1 style="margin: 0 0 12px 0; font-size: 26px; font-weight: 800; color: #111827; letter-spacing: -0.025em; line-height: 1.25;">
                You've received a new inquiry from ${safeName}
              </h1>
              <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #4B5563;">
                A visitor has submitted a direct inquiry through your portfolio contact form. Here are the details and message content:
              </p>
            </td>
          </tr>

          <!-- Canva-Style Vibrant Action Button -->
          <tr>
            <td style="padding-top: 24px; padding-bottom: 28px;">
              <a href="mailto:${safeEmail}?subject=Re:%20${encodeURIComponent(subject.trim())}" style="display: inline-block; background-color: #7C3AED; color: #FFFFFF; font-size: 15px; font-weight: 600; text-decoration: none; padding: 14px 28px; border-radius: 10px; box-shadow: 0 4px 12px rgba(124, 58, 237, 0.25);">Reply to ${safeName} &rarr;</a>
            </td>
          </tr>

          <!-- Client Details Card Summary -->
          <tr>
            <td>
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #F9FAFB; border: 1px solid #F3F4F6; border-radius: 14px; padding: 20px;">
                <tr>
                  <td style="padding: 6px 0; font-size: 13px; color: #6B7280; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; width: 100px;">Sender:</td>
                  <td style="padding: 6px 0; font-size: 14px; color: #111827; font-weight: 600;">${safeName}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-size: 13px; color: #6B7280; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Email:</td>
                  <td style="padding: 6px 0; font-size: 14px; color: #7C3AED; font-weight: 600;"><a href="mailto:${safeEmail}" style="color: #7C3AED; text-decoration: none;">${safeEmail}</a></td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-size: 13px; color: #6B7280; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Subject:</td>
                  <td style="padding: 6px 0; font-size: 14px; color: #111827; font-weight: 600;">${safeSubject}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-size: 13px; color: #6B7280; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Received:</td>
                  <td style="padding: 6px 0; font-size: 13px; color: #6B7280;">${submissionDate}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message Showcase Card -->
          <tr>
            <td style="padding-top: 24px;">
              <h3 style="margin: 0 0 12px 0; font-size: 13px; font-weight: 700; text-transform: uppercase; color: #6B7280; letter-spacing: 0.6px;">Message</h3>
              <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 14px; padding: 24px; font-size: 15px; line-height: 1.65; color: #1F2937; white-space: pre-wrap; word-break: break-word;">${safeMessage}</div>
            </td>
          </tr>

          <!-- Canva-Style Footer -->
          <tr>
            <td style="padding-top: 40px; border-top: 1px solid #F3F4F6; margin-top: 32px; text-align: center;">
              <p style="margin: 0 0 12px 0; font-size: 13px; color: #6B7280; line-height: 1.5;">
                You are receiving this notification because someone contacted you via your <a href="${siteUrl}" style="color: #7C3AED; text-decoration: none; font-weight: 600;">Kivairu Samuel Portfolio</a>.
              </p>
              <p style="margin: 0 0 8px 0; font-size: 12px; color: #9CA3AF; font-weight: 500;">
                Made for you with 💜 by Kivairu Samuel
              </p>
              <p style="margin: 0; font-size: 11px; color: #9CA3AF;">
                &copy; ${currentYear} Kivairu Samuel. All rights reserved.
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
