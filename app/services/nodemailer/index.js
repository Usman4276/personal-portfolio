import nodemailer from "nodemailer";

export async function sendMail(senderEmail, senderName, emailMessage) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  const mailOptions = {
    to: process.env.NODEMAILER_EMAIL,
    replyTo: senderEmail,
    subject: "From My Portfolio",
    text: emailMessage,
    html: `<span style="font-weight:bold">Sender name : </span> ${senderName} <br/> <br/> <span style="font-weight:bold"> Message : </span> <br/> ${emailMessage}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return info.messageId;
  } catch (error) {
    throw new Error(error);
  }
}
