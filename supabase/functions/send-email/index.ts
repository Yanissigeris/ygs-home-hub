import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface EmailRequest {
  formType: "contact" | "valuation" | "guide";
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
      `Invalid RESEND_FROM_EMAIL format "${configuredFromEmail}", falling back to default sender.`,
    );
    return DEFAULT_FROM_EMAIL;
  }

  return configuredFromEmail;
}

function buildNotificationHtml(data: EmailRequest): string {
...
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

    // Validate required fields
    if (!data.name || !data.email || !data.formType || !data.lang) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // 1. Send notification email to Yanis
    const notifSubject = data.formType === 'contact'
      ? `Nouveau contact — ${data.name}`
      : data.formType === 'valuation'
        ? `Nouvelle évaluation — ${data.name}`
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

    // 2. Send confirmation email to user
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
      // Don't fail the whole request if confirmation fails
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
