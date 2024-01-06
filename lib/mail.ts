import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Verify your Email at Next-Auth-JS",
    html: `<p>Click <a href="${confirmLink}">here</a> to verify your Email at Next-Auth-JS.</p>\n<p>This link will expire after 1 hour.</p>`,
  });
};

const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Reset your Password at Next-Auth-JS",
    html: `<p>Click <a href="${resetLink}">here</a> to reset your Password at Next-Auth-JS.</p>\n<p>This link will expire after 1 hour.</p>`,
  });
};

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "2FA code for your account at Next-Auth-JS",
    html: `<p>Your 2FA code: ${token}</p>`,
  });
};