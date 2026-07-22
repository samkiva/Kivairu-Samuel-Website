import { NextResponse } from 'next/server';

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot?: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactPayload = await request.json();
    const { name, email, subject, message, honeypot } = body;

    // Honeypot spam prevention
    if (honeypot && honeypot.trim() !== '') {
      return NextResponse.json(
        { success: false, error: 'Spam submission detected.' },
        { status: 400 }
      );
    }

    // Server-side validation
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

    // Resend Email API Integration
    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: 'Kivairu Samuel Portfolio <onboarding@resend.dev>',
          to: ['kivairusamuel9409@gmail.com'],
          subject: `[Portfolio Inquiry] ${subject}`,
          html: `
            <div style="font-family: sans-serif; padding: 20px; line-height: 1.6;">
              <h2 style="color: #4F46E5;">New Portfolio Inquiry</h2>
              <p><strong>From:</strong> ${name} (&lt;${email}&gt;)</p>
              <p><strong>Subject:</strong> ${subject}</p>
              <hr style="border: 0; border-top: 1px solid #E1E1E6; margin: 20px 0;" />
              <h3>Message Content:</h3>
              <p style="white-space: pre-wrap; background: #F5F5F7; padding: 15px; border-radius: 8px;">${message}</p>
            </div>
          `,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error('Resend API Error:', errorData);
        return NextResponse.json(
          { success: false, error: 'Failed to send email via server handler.' },
          { status: 500 }
        );
      }
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
