import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { trackFormSubmission, trackGuideRequest } from "@/lib/analytics";

interface FormData {
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

export function useFormSubmit() {
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const submit = async (data: FormData): Promise<boolean> => {
    setSubmitting(true);
    try {
      const { data: result, error } = await supabase.functions.invoke("send-email", {
        body: data,
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
