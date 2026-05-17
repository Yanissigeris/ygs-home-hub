import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface EmailRequest {
  formType: "contact" | "valuation" | "guide" | "analysis" | "consultation";
  lang: "fr" | "en";
  name: string;
  email: string;
  phone?: string;
  message?: string;
  objective?: string;
  address?: string;
  guideTitle?: string;
  lastName?: string;
  projectType?: string;
}

const NOTIFICATION_EMAIL = "yanis@martywaite.com";
const DEFAULT_FROM_EMAIL = "YGS <onboarding@resend.dev>";

function isValidFromEmail(value: string): boolean {
  const plainEmailPattern = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;
  const namedEmailPattern = /^[^<>]+<\s*[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+\s*>$/;
  return plainEmailPattern.test(value) || namedEmailPattern.test(value);
}

function getFromEmail(): string {
  const configuredFromEmail = Deno.env.get("RESEND_FROM_EMAIL")?.trim();

  if (!configuredFromEmail) {
    return DEFAULT_FROM_EMAIL;
  }

  if (!isValidFromEmail(configuredFromEmail)) {
    console.warn(
      `Invalid RESEND_FROM_EMAIL format \"${configuredFromEmail}\", falling back to default sender.`,
    );
    return DEFAULT_FROM_EMAIL;
  }

  return configuredFromEmail;
}

function labelForFormType(t: EmailRequest["formType"]): string {
  switch (t) {
    case "contact": return "Contact";
    case "valuation": return "Évaluation";
    case "guide": return "Guide";
    case "analysis": return "Analyse plex";
    case "consultation": return "Consultation";
  }
}

function buildNotificationHtml(data: EmailRequest): string {
  const fields = [
    `<tr><td style="padding:8px 12px;font-weight:600;color:#374151">Type</td><td style="padding:8px 12px">${data.formType} (${data.lang})</td></tr>`,
    `<tr><td style="padding:8px 12px;font-weight:600;color:#374151">Nom</td><td style="padding:8px 12px">${data.name}${data.lastName ? " " + data.lastName : ""}</td></tr>`,
    `<tr><td style="padding:8px 12px;font-weight:600;color:#374151">Courriel</td><td style="padding:8px 12px"><a href="mailto:${data.email}">${data.email}</a></td></tr>`,
    data.phone ? `<tr><td style="padding:8px 12px;font-weight:600;color:#374151">Téléphone</td><td style="padding:8px 12px">${data.phone}</td></tr>` : "",
    data.objective ? `<tr><td style="padding:8px 12px;font-weight:600;color:#374151">Objectif</td><td style="padding:8px 12px">${data.objective}</td></tr>` : "",
    data.address ? `<tr><td style="padding:8px 12px;font-weight:600;color:#374151">Adresse</td><td style="padding:8px 12px">${data.address}</td></tr>` : "",
    data.projectType ? `<tr><td style="padding:8px 12px;font-weight:600;color:#374151">Type de projet</td><td style="padding:8px 12px">${data.projectType}</td></tr>` : "",
    data.guideTitle ? `<tr><td style="padding:8px 12px;font-weight:600;color:#374151">Guide</td><td style="padding:8px 12px">${data.guideTitle}</td></tr>` : "",
    data.message ? `<tr><td style="padding:8px 12px;font-weight:600;color:#374151">Message</td><td style="padding:8px 12px">${data.message}</td></tr>` : "",
  ].filter(Boolean).join("");

  return `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto"><h2 style="color:#1e3a5f;border-bottom:2px solid #c9a96e;padding-bottom:12px">Nouvelle demande — ${labelForFormType(data.formType)}</h2><table style="width:100%;border-collapse:collapse">${fields}</table></div>`;
}

function buildConfirmationHtml(data: EmailRequest): { subject: string; html: string } {
  const isFr = data.lang === "fr";
  const firstName = data.name.split(" ")[0];
  const signature = isFr
    ? `<p style="color:#999;font-size:13px">Yanis Gauthier-Sigeris<br>Courtier immobilier · RE/MAX · Équipe Marty Waite<br>819-210-3044</p>`
    : `<p style="color:#999;font-size:13px">Yanis Gauthier-Sigeris<br>Real Estate Broker · RE/MAX · The Marty Waite Experience<br>819-210-3044</p>`;
  const hr = `<hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0">`;
  const wrapOpen = `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px">`;
  const h2 = (text: string) => `<h2 style="color:#1e3a5f">${text}</h2>`;
  const p = (text: string) => `<p style="color:#555;line-height:1.7">${text}</p>`;

  if (data.formType === "contact") {
    const heading = isFr ? `Merci ${firstName}!` : `Thanks ${firstName}.`;
    const body = isFr
      ? `${p("J'ai bien reçu votre message et je vous reviens rapidement.")}${p("En attendant, n'hésitez pas à explorer mon site pour en savoir plus sur mes services.")}`
      : `${p("I got your message and I'll be in touch shortly.")}${p("In the meantime, feel free to browse the site to see how I work.")}`;
    return {
      subject: isFr ? "Merci pour votre message — Yanis Gauthier-Sigeris" : "Thank you for your message — Yanis Gauthier-Sigeris",
      html: `${wrapOpen}${h2(heading)}${body}${hr}${signature}</div>`,
    };
  }

  if (data.formType === "valuation") {
    const heading = isFr ? `Merci ${firstName}!` : `Thanks ${firstName}.`;
    const intro = isFr ? "J'ai bien reçu votre demande d'évaluation pour :" : "I got your valuation request for:";
    const addressBlock = data.address ? `<p style="background:#f3f4f6;padding:12px 16px;border-radius:8px;color:#1e3a5f;font-weight:600">${data.address}</p>` : "";
    const closing = isFr
      ? "Je vous reviens personnellement dans les 24 prochaines heures avec une analyse basée sur les ventes comparables récentes dans votre secteur."
      : "I'll send you a personal analysis within 24 hours, based on recent comparable sales in your neighbourhood.";
    return {
      subject: isFr ? "Votre évaluation gratuite est en route — YGS" : "Your free valuation is on its way — YGS",
      html: `${wrapOpen}${h2(heading)}${p(intro)}${addressBlock}${p(closing)}${hr}${signature}</div>`,
    };
  }

  if (data.formType === "analysis") {
    const heading = isFr ? `Merci ${firstName}!` : `Thanks ${firstName}.`;
    const body = isFr
      ? "J'ai bien reçu votre demande d'analyse plex. Je vous reviens personnellement dans les 48 prochaines heures avec une analyse complète — pas un rapport générique."
      : "I got your plex analysis request. I'll send you a full analysis within 48 hours. Real numbers on the property you asked about, not a generic template report.";
    return {
      subject: isFr ? "Votre analyse plex est en préparation — YGS" : "Your plex analysis is in progress — YGS",
      html: `${wrapOpen}${h2(heading)}${p(body)}${hr}${signature}</div>`,
    };
  }

  if (data.formType === "consultation") {
    const heading = isFr ? `Merci ${firstName}!` : `Thanks ${firstName}.`;
    const body = isFr
      ? "J'ai bien reçu votre demande de consultation. Je vous reviens personnellement dans les 24 à 48 prochaines heures."
      : "I got your consultation request. I'll be in touch personally within 24 to 48 hours to set up a time.";
    return {
      subject: isFr ? "Votre demande de consultation est reçue — YGS" : "Your consultation request was received — YGS",
      html: `${wrapOpen}${h2(heading)}${p(body)}${hr}${signature}</div>`,
    };
  }

  const heading = isFr ? `Merci ${firstName}!` : `Thanks ${firstName}.`;
  const p1 = isFr
    ? `Votre guide « ${data.guideTitle || "Guide"} » vous sera envoyé par courriel sous peu.`
    : `Your guide "${data.guideTitle || "Guide"}" will arrive by email shortly.`;
  const p2 = isFr
    ? "En attendant, n'hésitez pas à me contacter si vous avez des questions."
    : "If you have questions in the meantime, contact me directly at 819-210-3044 or reply to this email.";
  return {
    subject: isFr ? "Votre guide est en route — YGS" : "Your guide is on its way — YGS",
    html: `${wrapOpen}${h2(heading)}${p(p1)}${p(p2)}${hr}${signature}</div>`,
  };
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const fromEmail = getFromEmail();
    const data: EmailRequest = await req.json();

    if (!data.name || !data.email || !data.formType || !data.lang) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const notifSubject = data.formType === "contact"
      ? `Nouveau contact — ${data.name}`
      : data.formType === "valuation"
        ? `Nouvelle évaluation — ${data.name}`
        : data.formType === "analysis"
          ? `Nouvelle analyse plex — ${data.name}`
          : data.formType === "consultation"
            ? `Nouvelle consultation — ${data.name}`
            : `Nouveau guide demandé — ${data.name}`;

    const notifRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: fromEmail,
        to: [NOTIFICATION_EMAIL],
        subject: notifSubject,
        html: buildNotificationHtml(data),
      }),
    });

    if (!notifRes.ok) {
      const err = await notifRes.text();
      console.error("Resend notification error:", notifRes.status, err);
      throw new Error(`Notification email failed [${notifRes.status}]: ${err}`);
    }

    const confirmation = buildConfirmationHtml(data);
    const confirmRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: fromEmail,
        to: [data.email],
        subject: confirmation.subject,
        html: confirmation.html,
      }),
    });

    if (!confirmRes.ok) {
      const err = await confirmRes.text();
      console.error("Resend confirmation error:", confirmRes.status, err);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    console.error("send-email error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
