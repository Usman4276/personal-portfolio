import { sendMail } from "../services/nodemailer";

// GET request
export async function GET() {
  return Response.json({ message: "welcome to the next api" });
}

// POST request
export async function POST(request) {
  const { name, email, message } = await request.json();

  const messageId = await sendMail(email, name, message);

  if (messageId)
    return Response.json({ message: "Email sent successfully", status: true });
  return Response.json({ message: "Email sent failed", status: false });
}
