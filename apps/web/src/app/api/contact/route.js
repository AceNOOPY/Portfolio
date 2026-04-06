import sql from "@/app/api/utils/sql";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return Response.json(
        { error: "Name, email, and message are required" },
        { status: 400 },
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: "Please provide a valid email address" },
        { status: 400 },
      );
    }

    // Validate message length
    if (message.length < 10 || message.length > 2000) {
      return Response.json(
        { error: "Message must be between 10 and 2000 characters" },
        { status: 400 },
      );
    }

    // Get client info for basic abuse tracking
    const ip =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";
    const userAgent = request.headers.get("user-agent") || "unknown";

    // Insert into database
    await sql`
      INSERT INTO contacts (name, email, message, ip, user_agent)
      VALUES (${name.trim()}, ${email.trim()}, ${message.trim()}, ${ip}, ${userAgent})
    `;

    return Response.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { error: "Failed to process your message. Please try again later." },
      { status: 500 },
    );
  }
}
