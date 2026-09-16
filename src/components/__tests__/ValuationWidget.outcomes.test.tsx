import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ValuationWidget from "../ValuationWidget";

vi.mock("@/lib/analytics", () => ({
  trackEvent: vi.fn(),
  trackLead: vi.fn(),
  trackGuideRequest: vi.fn(),
  trackContactTap: vi.fn(),
  trackCTAClick: vi.fn(),
  trackFormSubmission: vi.fn(),
}));

const insertMock = vi.fn();
const invokeMock = vi.fn();

vi.mock("@/integrations/supabase/client", () => ({
  supabase: {
    from: () => ({ insert: (...args: unknown[]) => insertMock(...args) }),
    functions: { invoke: (...args: unknown[]) => invokeMock(...args) },
  },
}));

vi.mock("@/contexts/LanguageContext", () => ({ useLanguage: () => "fr" }));
vi.mock("@/hooks/use-mobile", () => ({ useIsMobile: () => false }));

import { trackLead } from "@/lib/analytics";

async function fillAndSubmit() {
  render(<ValuationWidget />);
  fireEvent.change(screen.getByPlaceholderText(/123 Rue des Érables/i), {
    target: { value: "100 Rue Principale, Aylmer" },
  });
  fireEvent.click(screen.getByText(/ESTIMER/i));
  await waitFor(() =>
    expect(screen.getByPlaceholderText(/Votre prénom/i)).toBeInTheDocument(),
  );
  fireEvent.change(screen.getByPlaceholderText(/Votre prénom/i), {
    target: { value: "Alex" },
  });
  fireEvent.change(screen.getByPlaceholderText(/Téléphone ou courriel/i), {
    target: { value: "alex@example.com" },
  });
  const button = screen.getByText(/Recevoir mon évaluation/i);
  fireEvent.click(button);
  return button;
}

describe("ValuationWidget submission outcomes (simulated responses only)", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.spyOn(console, "error").mockImplementation(() => {});
  });

  it("save failure: keeps the entered values, shows an error and allows a retry", async () => {
    insertMock.mockResolvedValue({ data: null, error: { message: "insert denied" } });
    invokeMock.mockResolvedValue({ data: null, error: null });

    const button = await fillAndSubmit();

    await waitFor(() => expect(screen.getByRole("alert")).toBeInTheDocument());
    expect(screen.getByRole("alert").textContent).toMatch(/n'a pas pu être enregistrée/i);
    // Entered values preserved, no success screen, button usable again.
    expect((screen.getByPlaceholderText(/Votre prénom/i) as HTMLInputElement).value).toBe("Alex");
    expect(screen.queryByText(/Demande reçue/i)).toBeNull();
    expect(screen.queryByText(/Demande enregistrée/i)).toBeNull();
    expect((button as HTMLButtonElement).disabled).toBe(false);
    expect(invokeMock).not.toHaveBeenCalled();
    expect(trackLead).not.toHaveBeenCalled();
  });

  it("save + notification succeed: shows the full thank you", async () => {
    insertMock.mockResolvedValue({ data: null, error: null });
    invokeMock.mockResolvedValue({ data: { success: true }, error: null });

    await fillAndSubmit();

    await waitFor(() => expect(screen.getByText(/Demande reçue/i)).toBeInTheDocument());
    expect(screen.queryByRole("alert")).toBeNull();
    expect(trackLead).toHaveBeenCalled();
  });

  it("notification technical error: shows saved-only, never invites a second request", async () => {
    insertMock.mockResolvedValue({ data: null, error: null });
    invokeMock.mockResolvedValue({ data: null, error: { message: "non-2xx" } });

    await fillAndSubmit();

    await waitFor(() => expect(screen.getByText(/Demande enregistrée/i)).toBeInTheDocument());
    expect(screen.getByText(/bien enregistrée/i)).toBeInTheDocument();
    expect(screen.queryByRole("alert")).toBeNull();
    expect(screen.queryByText(/Recevoir mon évaluation/i)).toBeNull();
  });

  it("application error returned by send-email: shows saved-only", async () => {
    insertMock.mockResolvedValue({ data: null, error: null });
    invokeMock.mockResolvedValue({ data: { error: "Notification email failed [429]" }, error: null });

    await fillAndSubmit();

    await waitFor(() => expect(screen.getByText(/Demande enregistrée/i)).toBeInTheDocument());
    expect(screen.queryByText(/Demande reçue/i)).toBeNull();
  });

  it("exception thrown after a successful save: keeps the saved-only outcome", async () => {
    insertMock.mockResolvedValue({ data: null, error: null });
    invokeMock.mockRejectedValue(new Error("network down"));

    await fillAndSubmit();

    await waitFor(() => expect(screen.getByText(/Demande enregistrée/i)).toBeInTheDocument());
    expect(screen.queryByRole("alert")).toBeNull();
    expect(screen.queryByText(/Recevoir mon évaluation/i)).toBeNull();
  });

  it("disables the button while the request is in flight", async () => {
    let resolveInsert: (v: unknown) => void = () => {};
    insertMock.mockImplementation(
      () => new Promise((res) => { resolveInsert = res; }),
    );
    invokeMock.mockResolvedValue({ data: { success: true }, error: null });

    const button = await fillAndSubmit();

    await waitFor(() => expect((button as HTMLButtonElement).disabled).toBe(true));
    resolveInsert({ data: null, error: null });
    await waitFor(() => expect(screen.getByText(/Demande reçue/i)).toBeInTheDocument());
  });
});
