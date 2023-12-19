import nodemailer from 'nodemailer';

export type EmailData = {
  email: string;
  payload: string;
};

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NEXT_PUBLIC_NODE_MAILER_ID,
    pass: process.env.NEXT_PUBLIC_NODE_MAILER_PASSWORD,
  },
});

export async function sendEmail({ email, payload }: EmailData) {
  const mailData = {
    from: process.env.NEXT_PUBLIC_NODE_MAILER_ID,
    to: email,
    subject: 'coinMoa 인증번호 입니다.',
    html: `<strong>인증번호는 ${payload} 입니다.</strong>`,
  };

  return transporter.sendMail(mailData);
}
