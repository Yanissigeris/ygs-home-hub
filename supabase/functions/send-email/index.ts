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
const FUNCTION_VERSION = "2026-10-04";

// Only the live site may call this function from a browser.
const ALLOWED_ORIGINS = new Set([
  "https://yanisgauthier.com",
  "https://www.yanisgauthier.com",
  "http://localhost:8080",
  "http://localhost:5173",
]);

const FORM_TYPES = new Set(["contact", "valuation", "guide", "analysis", "consultation"]);
const EMAIL_PATTERN = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]{2,}$/;
const LINK_PATTERN = /(https?:\/\/|www\.|<|>)/i;

// Best-effort limit per IP (per function instance): 5 submissions per 10 minutes.
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 5;
const hits = new Map<string, number[]>();
function rateLimited(ip: string): boolean {
  const now = Date.now();
  for (const [key, stamps] of hits) {
    if (stamps.every((ts) => now - ts >= RATE_WINDOW_MS)) hits.delete(key);
  }
  const recent = (hits.get(ip) ?? []).filter((ts) => now - ts < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_MAX;
}

// Plain guide names for the visitor confirmation (the forms send the CTA heading).
const GUIDE_NAMES: Record<string, { fr: string; en: string }> = {
  "Recevez le guide vendeur": { fr: "guide vendeur", en: "Seller Guide" },
  "Recevez le guide acheteur": { fr: "guide acheteur", en: "Buyer Guide" },
  "Recevez le guide investisseur": { fr: "guide investisseur", en: "Investor Guide" },
  "Recevez le guide relocalisation": { fr: "guide relocalisation", en: "Relocation Guide" },
  "Get the Seller Guide": { fr: "guide vendeur", en: "Seller Guide" },
  "Get the Buyer Guide": { fr: "guide acheteur", en: "Buyer Guide" },
  "Get the Investor Guide": { fr: "guide investisseur", en: "Investor Guide" },
  "Get the Relocation Guide": { fr: "guide relocalisation", en: "Relocation Guide" },
};

const PLAIN_FIRST_NAME = /^[\p{L}' .-]{1,40}$/u;
// Bare domains (evil.com, bit.ly/x) that mail clients would turn into links.
const DOMAIN_PATTERN = /[a-z0-9-]\.[a-z]{2,}\b|\//i;

// Every visitor-supplied value is escaped before it goes into an email.
function esc(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function tooLong(value: unknown, max: number): boolean {
  return typeof value === "string" && value.length > max;
}

function isOptionalString(value: unknown): boolean {
  return value === undefined || value === null || typeof value === "string";
}

function hasValidEmail(data: EmailRequest): boolean {
  return typeof data.email === "string" && EMAIL_PATTERN.test(data.email.trim()) && data.email.length <= 254;
}

function validate(data: EmailRequest): string | null {
  if (!data || typeof data !== "object" || Array.isArray(data)) return "Invalid payload";
  for (const key of ["email", "phone", "message", "objective", "address", "guideTitle", "lastName", "projectType"] as const) {
    if (!isOptionalString(data[key])) return "Invalid field";
  }
  if (!FORM_TYPES.has(data.formType)) return "Invalid form type";
  if (data.lang !== "fr" && data.lang !== "en") return "Invalid language";
  if (typeof data.name !== "string" || !data.name.trim()) return "Missing name";
  if (tooLong(data.name, 200) || LINK_PATTERN.test(data.name)) return "Invalid name";
  if (data.lastName && (tooLong(data.lastName, 200) || LINK_PATTERN.test(data.lastName))) return "Invalid name";
  // A mistyped email is not rejected: the lead still reaches Yanis, only the visitor confirmation is skipped.
  const hasEmail = typeof data.email === "string" && data.email.trim() !== "";
  const hasPhone = typeof data.phone === "string" && data.phone.trim() !== "";
  if (!hasEmail && !hasPhone) return "Missing email or phone";
  if (tooLong(data.email, 320) || tooLong(data.phone, 40)) return "Field too long";
  if (tooLong(data.message, 5000)) return "Message too long";
  if (tooLong(data.address, 300) || tooLong(data.objective, 300) || tooLong(data.projectType, 200) || tooLong(data.guideTitle, 200)) {
    return "Field too long";
  }
  return null;
}

function jsonResponse(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}
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
    `<tr><td style="padding:8px 12px;font-weight:600;color:#374151">Type</td><td style="padding:8px 12px">${esc(data.formType)} (${esc(data.lang)})</td></tr>`,
    `<tr><td style="padding:8px 12px;font-weight:600;color:#374151">Nom</td><td style="padding:8px 12px">${esc(data.name)}${data.lastName ? " " + esc(data.lastName) : ""}</td></tr>`,
    data.email ? `<tr><td style="padding:8px 12px;font-weight:600;color:#374151">Courriel</td><td style="padding:8px 12px">${hasValidEmail(data) ? `<a href="mailto:${esc(data.email)}">${esc(data.email)}</a>` : `${esc(data.email)} (courriel à vérifier)`}</td></tr>` : "",
    data.phone ? `<tr><td style="padding:8px 12px;font-weight:600;color:#374151">Téléphone</td><td style="padding:8px 12px">${esc(data.phone)}</td></tr>` : "",
    data.objective ? `<tr><td style="padding:8px 12px;font-weight:600;color:#374151">Objectif</td><td style="padding:8px 12px">${esc(data.objective)}</td></tr>` : "",
    data.address ? `<tr><td style="padding:8px 12px;font-weight:600;color:#374151">Adresse</td><td style="padding:8px 12px">${esc(data.address)}</td></tr>` : "",
    data.projectType ? `<tr><td style="padding:8px 12px;font-weight:600;color:#374151">Type de projet</td><td style="padding:8px 12px">${esc(data.projectType)}</td></tr>` : "",
    data.guideTitle ? `<tr><td style="padding:8px 12px;font-weight:600;color:#374151">Guide</td><td style="padding:8px 12px">${esc(data.guideTitle)}</td></tr>` : "",
    data.message ? `<tr><td style="padding:8px 12px;font-weight:600;color:#374151">Message</td><td style="padding:8px 12px;white-space:pre-wrap">${esc(data.message)}</td></tr>` : "",
  ].filter(Boolean).join("");

  return `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto"><h2 style="color:#1e3a5f;border-bottom:2px solid #c9a96e;padding-bottom:12px">Nouvelle demande\u00a0: ${labelForFormType(data.formType)}</h2><table style="width:100%;border-collapse:collapse">${fields}</table></div>`;
}

function buildConfirmationHtml(data: EmailRequest): { subject: string; html: string } {
  const isFr = data.lang === "fr";
  const rawFirst = data.name.trim().split(" ")[0];
  const firstName = PLAIN_FIRST_NAME.test(rawFirst) && !DOMAIN_PATTERN.test(rawFirst) ? esc(rawFirst) : "";
  const signature = isFr
    ? `<p style="color:#999;font-size:13px">Yanis Gauthier-Sigeris<br>Courtier immobilier · RE/MAX · Équipe Marty Waite<br>819-210-3044</p>`
    : `<p style="color:#999;font-size:13px">Yanis Gauthier-Sigeris<br>Real Estate Broker · RE/MAX · The Marty Waite Experience<br>819-210-3044</p>`;
  const hr = `<hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0">`;
  const wrapOpen = `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px">`;
  const h2 = (text: string) => `<h2 style="color:#1e3a5f">${text}</h2>`;
  const p = (text: string) => `<p style="color:#555;line-height:1.7">${text}</p>`;

  if (data.formType === "contact") {
    const heading = firstName ? (isFr ? `Merci ${firstName}!` : `Thanks ${firstName}.`) : (isFr ? "Merci!" : "Thanks.");
    const body = isFr
      ? `${p("J'ai bien reçu votre message et je vous réponds rapidement.")}${p("D'ici là, vous trouverez sur mon site comment je travaille avec mes clients.")}`
      : `${p("I got your message and I'll be in touch shortly.")}${p("In the meantime, my site shows how I work with clients.")}`;
    return {
      subject: isFr ? "Merci pour votre message, Yanis Gauthier-Sigeris" : "Thank you for your message, Yanis Gauthier-Sigeris",
      html: `${wrapOpen}${h2(heading)}${body}${hr}${signature}</div>`,
    };
  }

  if (data.formType === "valuation") {
    const heading = firstName ? (isFr ? `Merci ${firstName}!` : `Thanks ${firstName}.`) : (isFr ? "Merci!" : "Thanks.");
    const showAddress = !!data.address && !LINK_PATTERN.test(data.address) && !DOMAIN_PATTERN.test(data.address);
    const intro = isFr
      ? (showAddress ? "J'ai bien reçu votre demande d'évaluation pour\u00a0:" : "J'ai bien reçu votre demande d'évaluation.")
      : (showAddress ? "I got your valuation request for:" : "I got your valuation request.");
    const addressBlock = showAddress ? `<p style="background:#f3f4f6;padding:12px 16px;border-radius:8px;color:#1e3a5f;font-weight:600">${esc(data.address)}</p>` : "";
    const closing = isFr
      ? "Je vous envoie une réponse personnalisée en 24 heures maximum, avec une analyse basée sur les ventes comparables récentes dans votre secteur."
      : "I'll send you a personalized response within 24 hours, with an analysis based on recent comparable sales in your neighbourhood.";
    return {
      subject: isFr ? "Votre demande d'évaluation est reçue | YGS" : "Your valuation request was received | YGS",
      html: `${wrapOpen}${h2(heading)}${p(intro)}${addressBlock}${p(closing)}${hr}${signature}</div>`,
    };
  }

  if (data.formType === "analysis") {
    const heading = firstName ? (isFr ? `Merci ${firstName}!` : `Thanks ${firstName}.`) : (isFr ? "Merci!" : "Thanks.");
    const body = isFr
      ? "J'ai bien reçu votre demande d'analyse plex. Je vous enverrai une réponse personnalisée et une analyse faite pour cet immeuble."
      : "I got your plex analysis request. I'll send you a personalized response and an analysis built for this building.";
    return {
      subject: isFr ? "Votre analyse plex est en préparation | YGS" : "Your plex analysis is in progress | YGS",
      html: `${wrapOpen}${h2(heading)}${p(body)}${hr}${signature}</div>`,
    };
  }

  if (data.formType === "consultation") {
    const heading = firstName ? (isFr ? `Merci ${firstName}!` : `Thanks ${firstName}.`) : (isFr ? "Merci!" : "Thanks.");
    const body = isFr
      ? "J'ai bien reçu votre demande de consultation. Je vous enverrai une réponse personnalisée pour fixer un moment."
      : "I got your consultation request. I'll be in touch with a personalized response to set up a time.";
    return {
      subject: isFr ? "Votre demande de consultation est reçue | YGS" : "Your consultation request was received | YGS",
      html: `${wrapOpen}${h2(heading)}${p(body)}${hr}${signature}</div>`,
    };
  }

  const heading = firstName ? (isFr ? `Merci ${firstName}!` : `Thanks ${firstName}.`) : (isFr ? "Merci!" : "Thanks.");
  const guide = GUIDE_NAMES[data.guideTitle ?? ""];
  const p1 = isFr
    ? `Votre ${guide ? guide.fr : "guide"} vous sera envoyé par courriel sous peu.`
    : `Your ${guide ? guide.en : "guide"} will arrive by email shortly.`;
  const p2 = isFr
    ? "Si vous avez des questions d'ici là, appelez-moi au 819-210-3044."
    : "If you have questions in the meantime, call me at 819-210-3044.";
  return {
    subject: isFr ? "Votre guide est en route | YGS" : "Your guide is on its way | YGS",
    html: `${wrapOpen}${h2(heading)}${p(p1)}${p(p2)}${hr}${signature}</div>`,
  };
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Version check only. Sends nothing.
  if (req.method === "GET") {
    return jsonResponse({ ok: true, version: FUNCTION_VERSION }, 200);
  }

  if (req.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  const origin = req.headers.get("origin") ?? "";
  if (!ALLOWED_ORIGINS.has(origin)) {
    return jsonResponse({ error: "Forbidden" }, 403);
  }

  // If the client IP is unknown, skip the limit rather than put every visitor in one shared bucket.
  const ip = (req.headers.get("x-forwarded-for") ?? "").split(",")[0].trim();
  if (ip && rateLimited(ip)) {
    return jsonResponse({ error: "Too many requests" }, 429);
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const fromEmail = getFromEmail();
    let data: EmailRequest;
    try {
      data = await req.json();
    } catch {
      return jsonResponse({ error: "Invalid JSON" }, 400);
    }

    const invalid = validate(data);
    if (invalid) {
      return jsonResponse({ error: invalid }, 400);
    }

    const who = data.name.replace(/[\r\n\t]+/g, " ").trim().slice(0, 80);
    const notifSubject = data.formType === "contact"
      ? `Nouveau contact\u00a0: ${who}`
      : data.formType === "valuation"
        ? `Nouvelle évaluation\u00a0: ${who}`
        : data.formType === "analysis"
          ? `Nouvelle analyse plex\u00a0: ${who}`
          : data.formType === "consultation"
            ? `Nouvelle consultation\u00a0: ${who}`
            : `Nouveau guide demandé\u00a0: ${who}`;

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
      // Internal notification failure. Log metadata only: no name, email,
      // phone, address or message content ever reaches the logs.
      console.error(
        `Internal notification email failed [status=${notifRes.status}] formType=${data.formType} lang=${data.lang}`,
      );
      throw new Error(`Notification email failed [${notifRes.status}]`);
    }


    // Visitor confirmation only when an email address was given (phone-only leads skip it).
    if (!hasValidEmail(data)) {
      return jsonResponse({ success: true }, 200);
    }

    const confirmation = buildConfirmationHtml(data);
    const confirmRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: fromEmail,
        to: [(data.email as string).trim()],
        reply_to: "yanis@martywaite.com",
        subject: confirmation.subject,
        html: confirmation.html,
      }),
    });

    if (!confirmRes.ok) {
      // Visitor confirmation failure, distinct from the internal notification.
      // Metadata only, never personal data.
      console.error(
        `Visitor confirmation email failed [status=${confirmRes.status}] formType=${data.formType} lang=${data.lang}`,
      );
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
