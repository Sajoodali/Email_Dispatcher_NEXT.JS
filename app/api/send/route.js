import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { generateEmailTemplate } from "@/components/EmailTemplate";

export async function POST(request) {
  try {
    const { to, subject, message } = await request.json();

    // Validation
    if (!to || !subject || !message) {
      return NextResponse.json(
        { error: "To, Subject, and Message are required" },
        { status: 400 }
      );
    }

    // SMTP Transport Configuration
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Generate HTML template
    const htmlTemplate = generateEmailTemplate(message);

    // Send Mail
    await transporter.sendMail({
      from: `"Globium Clouds" <${process.env.SMTP_EMAIL}>`,
      to,
      subject,
      html: htmlTemplate,
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to send email", details: error.message },
      { status: 500 }
    );
  }
}
