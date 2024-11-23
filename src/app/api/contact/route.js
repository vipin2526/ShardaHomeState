import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
import connectDB from '@/lib/db';
import Contact from '@/models/Contact';

// Initialize SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, projectName, message } = body;

    // Validate the required fields
    if (!name || !phone || !email || !projectName || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    await connectDB();

    // Save to MongoDB
    const newContact = new Contact({
      name,
      phone,
      email,
      projectName,
      message
    });
    await newContact.save();

    // Prepare and send email
    const msg = {
      to: process.env.ADMIN_EMAIL, // Your email address
      from: process.env.SENDER_EMAIL, // Your verified SendGrid sender
      subject: `New Contact Form Submission: ${projectName}`,
      text: `
        Name: ${name}
        Phone: ${phone}
        Email: ${email}
        Project: ${projectName}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project:</strong> ${projectName}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await sgMail.send(msg);

    return NextResponse.json(
      { message: 'Message sent and stored successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 