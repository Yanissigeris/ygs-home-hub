import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ValuationWidget from "../ValuationWidget";

// Mock analytics module to capture trackEvent calls.
// trackLead / trackGuideRequest are also exported and used by useFormSubmit;
// they must be present here or the hook crashes (undefined is not a function).
vi.mock("@/lib/analytics", () => ({
  trackEvent: vi.fn(),
  trackLead: vi.fn(),
  trackGuideRequest: vi.fn(),
  trackContactTap: vi.fn(),
  trackCTAClick: vi.fn(),
  trackFormSubmission: vi.fn(),
}));

// Mock supabase client (insert + functions.invoke used in handleSubmit)
vi.mock("@/integrations/supabase/client", () => ({
  supabase: {
    from: () => ({
      insert: vi.fn().mockResolvedValue({ data: null, error: null }),
    }),
    functions: {
      invoke: vi.fn().mockResolvedValue({ data: null, error: null }),
    },
  },
}));

// Mock language context
vi.mock("@/contexts/LanguageContext", () => ({
  useLanguage: () => "fr",
}));

// Mock mobile hook
vi.mock("@/hooks/use-mobile", () => ({
  useIsMobile: () => false,
}));

import { trackEvent } from "@/lib/analytics";

describe("ValuationWidget analytics events (post schema-attribute removal)", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("fires evaluation_widget_step1 when address is submitted", () => {
    render(<ValuationWidget />);

    const addressInput = screen.getByPlaceholderText(
      /123 Rue des Érables/i,
    ) as HTMLInputElement;
    fireEvent.change(addressInput, {
      target: { value: "100 Rue Principale, Aylmer" },
    });

    fireEvent.click(screen.getByText(/ESTIMER/i));

    expect(trackEvent).toHaveBeenCalledWith(
      "evaluation_widget_step1",
      expect.objectContaining({
        event_category: "lead_generation",
        event_label: "address_entered",
      }),
    );
  });

  it("fires evaluation_widget_submitted after successful form completion", async () => {
    render(<ValuationWidget />);

    // Step 1 — address
    fireEvent.change(
      screen.getByPlaceholderText(/123 Rue des Érables/i),
      { target: { value: "100 Rue Principale, Aylmer" } },
    );
    fireEvent.click(screen.getByText(/ESTIMER/i));

    // Step 2 — name + contact
    await waitFor(() =>
      expect(screen.getByPlaceholderText(/Votre prénom/i)).toBeInTheDocument(),
    );

    fireEvent.change(screen.getByPlaceholderText(/Votre prénom/i), {
      target: { value: "Marty" },
    });
    fireEvent.change(
      screen.getByPlaceholderText(/Téléphone ou courriel/i),
      { target: { value: "marty@example.com" } },
    );

    fireEvent.click(screen.getByText(/Recevoir mon évaluation/i));

    await waitFor(() => {
      expect(trackEvent).toHaveBeenCalledWith(
        "evaluation_widget_submitted",
        expect.objectContaining({
          event_category: "lead_generation",
          event_label: "form_completed",
          value: 1,
        }),
      );
    });
  });
});
