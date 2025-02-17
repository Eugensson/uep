import nodemailer from "nodemailer";

const emailSender = process.env.NODEMAILER_SENDER_EMAIL;
const pass = process.env.NODEMAILER_SENDER_PASSWORD;
const domain = process.env.NEXT_PUBLIC_URL;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: { user: emailSender, pass },
});

export const sendPasswordResetEmail = async (email: string, token: string) => {
  try {
    const resetLink = `${domain}/auth/new-password?token=${token}`;

    await transporter.sendMail({
      from: emailSender,
      to: email,
      subject: "Reset your password",
      html: `<p>Click <a href="${resetLink}">here</a> to reset your password.</p>`,
    });
  } catch (error) {
    console.error(error);
  }
};

export const sendVerificationEmail = async (email: string, token: string) => {
  try {
    const confirmLink = `${domain}/auth/new-verification?token=${token}`;

    await transporter.sendMail({
      from: emailSender,
      to: email,
      subject: "Confirm your email",
      html: `<p>Click <a href="${confirmLink}">here</a> to confirm your email.</p>`,
    });
  } catch (error) {
    console.error(error);
  }
};
