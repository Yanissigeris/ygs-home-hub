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

  if (data.formType === "contact") {
    return {
      subject: isFr ? "Merci pour votre message — Yanis Gauthier-Sigeris" : "Thank you for your message — Yanis Gauthier-Sigeris",
      html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px"><h2 style="color:#1e3a5f">${isFr ? `Merci ${firstName}!` : `Thank you ${firstName}!`}</h2><p style="color:#555;line-height:1.7">${isFr ? "J'ai bien reçu votre message et je vous reviens rapidement." : "I've received your message and will get back to you shortly."}</p><p style="color:#555;line-height:1.7">${isFr ? "En attendant, n'hésitez pas à explorer mon site pour en savoir plus sur mes services." : "In the meantime, feel free to explore my website to learn more about my services."}</p><hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0"><p style="color:#999;font-size:13px">Yanis Gauthier-Sigeris<br>Courtier immobilier · RE/MAX · Équipe Marty Waite<br>819-210-3044</p></div>`,
    };
  }

  if (data.formType === "valuation") {
    return {
      subject: isFr ? "Votre évaluation gratuite est en route — YGS" : "Your free valuation is on its way — YGS",
      html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px"><h2 style="color:#1e3a5f">${isFr ? `Merci ${firstName}!` : `Thank you ${firstName}!`}</h2><p style="color:#555;line-height:1.7">${isFr ? "J'ai bien reçu votre demande d'évaluation pour :" : "I've received your valuation request for:"}</p>${data.address ? `<p style="background:#f3f4f6;padding:12px 16px;border-radius:8px;color:#1e3a5f;font-weight:600">${data.address}</p>` : ""}<p style="color:#555;line-height:1.7">${isFr ? "Je vous reviens personnellement dans les 24 prochaines heures avec une analyse basée sur les ventes comparables récentes dans votre secteur." : "I'll get back to you personally within 24 hours with an analysis based on recent comparable sales in your area."}</p><hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0"><p style="color:#999;font-size:13px">Yanis Gauthier-Sigeris<br>Courtier immobilier · RE/MAX · Équipe Marty Waite<br>819-210-3044</p></div>`,
    };
  }

  if (data.formType === "analysis") {
    return {
      subject: isFr ? "Votre analyse plex est en préparation — YGS" : "Your plex analysis is in progress — YGS",
      html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px"><h2 style="color:#1e3a5f">${isFr ? `Merci ${firstName}!` : `Thank you ${firstName}!`}</h2><p style="color:#555;line-height:1.7">${isFr ? "J'ai bien reçu votre demande d'analyse plex. Je vous reviens personnellement dans les 48 prochaines heures avec une analyse complète — pas un rapport générique." : "I've received your plex analysis request. I'll get back to you personally within 48 hours with a complete analysis — not a generic report."}</p><hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0"><p style="color:#999;font-size:13px">Yanis Gauthier-Sigeris<br>Courtier immobilier · RE/MAX · Équipe Marty Waite<br>819-210-3044</p></div>`,
    };
  }

  if (data.formType === "consultation") {
    return {
      subject: isFr ? "Votre demande de consultation est reçue — YGS" : "Your consultation request was received — YGS",
      html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px"><h2 style="color:#1e3a5f">${isFr ? `Merci ${firstName}!` : `Thank you ${firstName}!`}</h2><p style="color:#555;line-height:1.7">${isFr ? "J'ai bien reçu votre demande de consultation. Je vous reviens personnellement dans les 24 à 48 prochaines heures." : "I've received your consultation request. I'll get back to you personally within 24-48 hours."}</p><hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0"><p style="color:#999;font-size:13px">Yanis Gauthier-Sigeris<br>Courtier immobilier · RE/MAX · Équipe Marty Waite<br>819-210-3044</p></div>`,
    };
  }

  return {
    subject: isFr ? "Votre guide est en route — YGS" : "Your guide is on its way — YGS",
    html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px"><h2 style="color:#1e3a5f">${isFr ? `Merci ${firstName}!` : `Thank you ${firstName}!`}</h2><p style="color:#555;line-height:1.7">${isFr ? `Votre guide « ${data.guideTitle || "Guide"} » vous sera envoyé par courriel sous peu.` : `Your "${data.guideTitle || "Guide"}" will be sent to your email shortly.`}</p><p style="color:#555;line-height:1.7">${isFr ? "En attendant, n'hésitez pas à me contacter si vous avez des questions." : "In the meantime, feel free to reach out if you have any questions."}</p><hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0"><p style="color:#999;font-size:13px">Yanis Gauthier-Sigeris<br>Courtier immobilier · RE/MAX · Équipe Marty Waite<br>819-210-3044</p></div>`,
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
