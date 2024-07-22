// lib/email.js
import nodemailer from 'nodemailer';

export const sendResultEmail = async (to, score) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject: 'Quiz Result',
    text: `You scored ${score} in your recent quiz.`,
  };

  await transporter.sendMail(mailOptions);
};
