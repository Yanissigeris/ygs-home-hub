import { act, cleanup, fireEvent, render } from "@testing-library/react";
import { createMemoryRouter, RouterProvider, MemoryRouter, useNavigate } from "react-router-dom";
import { afterEach, describe, expect, it, vi } from "vitest";
import PageMeta from "@/components/PageMeta";
import metadata from "@/data/seo-routes.json";
import { releasePrerenderedSchemas } from "@/lib/prerendered-schemas";
import { BlogPostingJsonLd, FaqPageJsonLd } from "@/pages/BlogArticlePage";
import { getPublishedPosts } from "@/data/blog-posts";
import { usePageView } from "@/hooks/usePageView";

function seed(type: string, id = "") {
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.id = id;
  script.textContent = JSON.stringify({ "@type": type, headline: "Previous article" });
  document.head.appendChild(script);
  return script;
}
function NextPage() { const navigate = useNavigate(); return <button onClick={() => navigate("/en/")}>Next</button>; }
const schemas = () => [...document.querySelectorAll('script[type="application/ld+json"]')].map(s => JSON.parse(s.textContent!));

afterEach(() => {
  cleanup();
  document.head.innerHTML = "";
  vi.useRealTimers();
  vi.unstubAllGlobals();
});

describe("metadata shared by the HTML build and React", () => {
  it.each(["/", "/en/", "/rapport-marche-gatineau/", "/en/market-report/", "/analyse-plex-gatineau/", "/en/plex-analysis/"])("uses the catalog on %s even when old page props differ", path => {
    const entry = metadata[(path.replace(/\/+$/, "") || "/") as keyof typeof metadata];
    const router = createMemoryRouter([{ path: "*", element: <PageMeta title="Old title" description="Old description" /> }], { initialEntries: [path] });
    render(<RouterProvider router={router} />);
    expect(document.title).toBe(entry.title);
    expect(document.querySelector('meta[name="description"]')).toHaveAttribute("content", entry.description);
    expect(document.querySelector('meta[property="og:title"]')).toHaveAttribute("content", entry.title);
    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute("href", `https://yanisgauthier.com${path}`);
  });
  it("updates metadata when navigating between languages", async () => {
    const view = render(<MemoryRouter><PageMeta title="Fallback" description="Fallback" /><NextPage /></MemoryRouter>);
    fireEvent.click(view.getByText("Next"));
    expect(document.title).toBe(metadata["/en"].title);
    expect(document.documentElement.lang).toBe("en");
  });
});

it("transfers only route schemas to React, keeping the site's global identity", () => {
  seed("BlogPosting"); seed("FAQPage", "ygs-faqpage-jsonld"); seed("HowTo");
  const identity = seed("RealEstateAgent");
  releasePrerenderedSchemas();
  expect(schemas()).toHaveLength(1);
  expect(identity.isConnected).toBe(true);
});

it("keeps one current article and FAQ through A → B → non-article", () => {
  seed("BlogPosting", "ygs-blogposting-jsonld"); seed("FAQPage", "ygs-faqpage-jsonld");
  releasePrerenderedSchemas();
  const [a, b] = getPublishedPosts("fr");
  const view = render(<><BlogPostingJsonLd post={a} lang="fr" /><FaqPageJsonLd items={[{ q: "Question A", a: "Answer A" }]} /></>);
  expect(schemas().filter(s => s["@type"] === "BlogPosting")).toHaveLength(1);
  view.rerender(<><BlogPostingJsonLd post={b} lang="fr" /><FaqPageJsonLd items={[{ q: "Question B", a: "Answer B" }]} /></>);
  expect(schemas().find(s => s["@type"] === "BlogPosting").headline).toBe(b.title);
  expect(schemas().find(s => s["@type"] === "FAQPage").mainEntity[0].name).toBe("Question B");
  view.rerender(<div>Home</div>);
  expect(schemas()).toHaveLength(0);
});

it("emits one page view per navigation and none for a simple rerender", async () => {
  vi.useFakeTimers();
  const gtag = vi.fn();
  vi.stubGlobal("gtag", gtag);
  function Tracker() { usePageView(); return null; }
  const view = render(<MemoryRouter><Tracker /><NextPage /></MemoryRouter>);
  act(() => vi.advanceTimersByTime(100));
  expect(gtag).toHaveBeenCalledTimes(1);
  view.rerender(<MemoryRouter><Tracker /><NextPage /></MemoryRouter>);
  act(() => vi.advanceTimersByTime(100));
  expect(gtag).toHaveBeenCalledTimes(1);
  fireEvent.click(view.getByText("Next"));
  act(() => vi.advanceTimersByTime(100));
  expect(gtag).toHaveBeenCalledTimes(2);
});
