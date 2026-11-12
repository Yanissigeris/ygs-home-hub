import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";

const toast = vi.fn();
vi.mock("@/hooks/use-toast", () => ({ useToast: () => ({ toast }) }));
const trackLead = vi.fn();
const trackGuideRequest = vi.fn();
vi.mock("@/lib/analytics", () => ({
  trackLead: (...a: unknown[]) => trackLead(...a),
  trackGuideRequest: (...a: unknown[]) => trackGuideRequest(...a),
}));

import { useFormSubmit } from "@/hooks/useFormSubmit";

const payload = {
  formType: "contact" as const,
  lang: "fr" as const,
  name: "Jean",
  email: "jean@exemple.ca",
  message: "Bonjour",
  avatar: "vendeur" as const,
  offer: "contact_general" as const,
  sourcePage: "/contact-yanis/",
};

describe("useFormSubmit (fonction Netlify)", () => {
  const fetchMock = vi.fn();
  beforeEach(() => {
    vi.stubGlobal("fetch", fetchMock);
    fetchMock.mockReset();
    toast.mockReset();
    trackLead.mockReset();
  });
  afterEach(() => vi.unstubAllGlobals());

  it("envoie à la fonction Netlify sans les champs analytiques", async () => {
    fetchMock.mockResolvedValue({ ok: true, status: 200 });
    const { result } = renderHook(() => useFormSubmit());
    let ok = false;
    await act(async () => { ok = await result.current.submit(payload); });
    expect(ok).toBe(true);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe("/.netlify/functions/send-email");
    expect(init.method).toBe("POST");
    const body = JSON.parse(init.body);
    expect(body).toEqual({ formType: "contact", lang: "fr", name: "Jean", email: "jean@exemple.ca", message: "Bonjour" });
    expect(trackLead).toHaveBeenCalledTimes(1);
    expect(toast).not.toHaveBeenCalled();
  });

  it("affiche l'erreur et ne compte pas de lead si la fonction répond en erreur", async () => {
    fetchMock.mockResolvedValue({ ok: false, status: 500 });
    const { result } = renderHook(() => useFormSubmit());
    let ok = true;
    await act(async () => { ok = await result.current.submit(payload); });
    expect(ok).toBe(false);
    expect(trackLead).not.toHaveBeenCalled();
    expect(toast).toHaveBeenCalledTimes(1);
  });

  it("affiche l'erreur si le réseau échoue", async () => {
    fetchMock.mockRejectedValue(new Error("offline"));
    const { result } = renderHook(() => useFormSubmit());
    let ok = true;
    await act(async () => { ok = await result.current.submit(payload); });
    expect(ok).toBe(false);
    expect(trackLead).not.toHaveBeenCalled();
    expect(toast).toHaveBeenCalledTimes(1);
  });
});
