import { p as private_env } from "./shared-server.js";
import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  host: "smtp.sendgrid.net",
  port: 587,
  secure: false,
  auth: {
    user: "apikey",
    pass: private_env.SENDGRID_API_KEY
  }
});
const sendEmailVerify = (email, url) => {
  const requestOptions = {
    from: "smurphy.elementpictures@gmail.com",
    to: email,
    subject: "Verify your email",
    html: `<a href="${url}">Click here to verify your email</a>`
  };
  return transporter.sendMail(requestOptions).then((info) => {
  });
};
const sendEmailPasswordReset = (email, url) => {
  const requestOptions = {
    from: "smurphy.elementpictures@gmail.com",
    to: email,
    subject: "Reset your password",
    html: `<a href="${url}">Click here to change your password</a>`
  };
  return transporter.sendMail(requestOptions);
};
const sendEmailVerificationLink = async (email, token) => {
  const url = `http://localhost:5173/email-verification/${token}`;
  await sendEmailVerify(email, url);
};
const sendPasswordResetLink = async (email, token) => {
  const url = `http://localhost:5173/password-reset/${token}`;
  return await sendEmailPasswordReset(email, url);
};
export {
  sendPasswordResetLink as a,
  sendEmailVerificationLink as s
};
