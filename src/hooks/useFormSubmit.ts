import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { trackGuideRequest, trackLead, type Avatar, type Offer } from "@/lib/analytics";

// Lazy-loaded supabase client. Keeps ~127 KB out of the routes that *render*
// a form but where most users never submit (contact, guide modal, valuation).
const loadSupabase = () => import("@/integrations/supabase/client").then(m => m.supabase);

interface FormData {
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
  // Analytics-only — NOT forwarded to the send-email edge function
  avatar?: Avatar;
  offer?: Offer;
  sourcePage?: string;
}

export function useFormSubmit() {
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const submit = async (data: FormData): Promise<boolean> => {
    setSubmitting(true);
    try {
      const supabase = await loadSupabase();
      // Strip analytics-only fields before sending to the edge function
      const { avatar, offer, sourcePage, ...emailPayload } = data;
      const { data: result, error } = await supabase.functions.invoke("send-email", {
        body: emailPayload,
      });

      if (error) {
        console.error("Form submission error:", error);
        toast({
          title: data.lang === "fr" ? "Erreur" : "Error",
          description: data.lang === "fr"
            ? "Une erreur est survenue. Veuillez réessayer."
            : "Something went wrong. Please try again.",
          variant: "destructive",
        });
        return false;
      }

      // Single source of truth for GA4 generate_lead
      trackLead({
        avatar: avatar ?? "mixed",
        offer: offer ?? "contact_general",
        source_page:
          sourcePage ?? (typeof window !== "undefined" ? window.location.pathname : ""),
        form_type: data.formType,
        lang: data.lang,
        ...(data.guideTitle ? { extra: { guide_title: data.guideTitle } } : {}),
      });

      if (data.formType === "guide" && data.guideTitle) {
        trackGuideRequest(data.guideTitle);
      }

      return true;
    } catch (err) {
      console.error("Form submission error:", err);
      toast({
        title: data.lang === "fr" ? "Erreur" : "Error",
        description: data.lang === "fr"
          ? "Une erreur est survenue. Veuillez réessayer."
          : "Something went wrong. Please try again.",
        variant: "destructive",
      });
      return false;
    } finally {
      setSubmitting(false);
    }
  };

  return { submit, submitting };
}
