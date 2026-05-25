import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Semua kolom wajib diisi' },
        { status: 400 }
      );
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // Your email address
        pass: process.env.SMTP_PASS, // Your App Password or email password
      },
    });

    // Email content options
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`, // Send FROM the authenticated user to avoid spam filters
      replyTo: email, // Reply TO the person who filled out the form
      to: process.env.CONTACT_EMAIL_TO || 'salesadmin@citramasteknik.com', // Recipient
      subject: `Pesan Baru dari Website: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 10px;">
          <h2 style="color: #111; border-bottom: 2px solid #ffc107; padding-bottom: 10px;">Pesan Baru dari Website Citramas</h2>
          
          <div style="margin-top: 20px;">
            <p><strong>Nama Pengirim:</strong> ${name}</p>
            <p><strong>Email Pengirim:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Subjek:</strong> ${subject}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #ffc107; border-radius: 4px;">
            <p style="margin: 0; white-space: pre-wrap; line-height: 1.6; color: #333;">${message}</p>
          </div>
          
          <p style="margin-top: 30px; font-size: 12px; color: #888; text-align: center;">
            Email ini dikirim secara otomatis melalui formulir kontak di website Citramas Alfa Sejahtera.
          </p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Pesan berhasil dikirim' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { error: 'Gagal mengirim pesan. Silakan coba lagi nanti.' },
      { status: 500 }
    );
  }
}

