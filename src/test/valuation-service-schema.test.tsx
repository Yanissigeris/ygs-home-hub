import { cleanup, render } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import JsonLdScript from "@/components/JsonLdScript";
import schemas from "@/data/valuation-service-schema.json";
import { releasePrerenderedSchemas } from "@/lib/prerendered-schemas";

const id = "ygs-jsonld-service-valuation";
const read = () => [...document.querySelectorAll('script[type="application/ld+json"]')].map((s) => JSON.parse(s.textContent!));

afterEach(() => { cleanup(); document.head.innerHTML = ""; });

it("hands the prerendered Service block to React: one block while mounted, none after leaving", () => {
  const data = schemas["/evaluation-gratuite-gatineau"];
  const pre = document.createElement("script");
  pre.type = "application/ld+json"; pre.id = id; pre.textContent = JSON.stringify(data);
  document.head.appendChild(pre);
  const identity = document.createElement("script");
  identity.type = "application/ld+json"; identity.textContent = JSON.stringify({ "@type": "RealEstateAgent" });
  document.head.appendChild(identity);

  releasePrerenderedSchemas();
  const view = render(<JsonLdScript id={id} data={data} />);
  expect(read().filter((s) => s["@type"] === "Service")).toEqual([data]);
  expect(identity.isConnected).toBe(true);
  view.unmount();
  expect(read().filter((s) => s["@type"] === "Service")).toHaveLength(0);
});

it("describes both pages as a free comparative market analysis, never an appraisal", () => {
  for (const s of Object.values(schemas)) {
    expect(s["@type"]).toBe("Service");
    expect(s.provider).toEqual({ "@id": "https://yanisgauthier.com/#realestateagent" });
    expect(s.offers).toEqual({ "@type": "Offer", price: "0", priceCurrency: "CAD" });
    expect(JSON.stringify(s)).not.toMatch(/appraisal service/i);
  }
});
