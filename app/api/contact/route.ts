import { CONTACT_EMAIL } from "@/lib/constants";

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function sendViaResend(payload: Required<ContactPayload>) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;

  const from =
    process.env.RESEND_FROM_EMAIL ?? "Matima <onboarding@resend.dev>";

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [CONTACT_EMAIL],
      reply_to: payload.email,
      subject: `[Landing] Contact de ${payload.name}`,
      text: [
        `Nom : ${payload.name}`,
        `Email : ${payload.email}`,
        `Téléphone : ${payload.phone || "—"}`,
        "",
        "Message :",
        payload.message,
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    console.error("Resend error:", error);
    throw new Error("Resend request failed");
  }

  return true;
}

async function sendViaFormspree(payload: Required<ContactPayload>) {
  const formId = process.env.FORMSPREE_FORM_ID;
  if (!formId) return null;

  const response = await fetch(`https://formspree.io/f/${formId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      phone: payload.phone || "",
      message: payload.message,
      _replyto: payload.email,
      _subject: `[Landing] Contact de ${payload.name}`,
    }),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    console.error("Formspree error:", error);
    throw new Error("Formspree request failed");
  }

  return true;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const phone = body.phone?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    if (!name || !email || !message) {
      return Response.json(
        { error: "Veuillez remplir tous les champs obligatoires." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return Response.json(
        { error: "Adresse email invalide." },
        { status: 400 },
      );
    }

    const payload = { name, email, phone, message };

    const sent =
      (await sendViaResend(payload)) ?? (await sendViaFormspree(payload));

    if (!sent) {
      return Response.json(
        {
          error:
            "Service email non configuré. Définissez RESEND_API_KEY ou FORMSPREE_FORM_ID.",
        },
        { status: 503 },
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return Response.json(
      { error: "Impossible d'envoyer le message. Réessayez plus tard." },
      { status: 502 },
    );
  }
}
