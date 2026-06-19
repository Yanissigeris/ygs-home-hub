import { describe, it, expect } from "vitest";
import { properties } from "@/data/properties";
import { propertiesEn } from "@/data/properties-en";

// FR: "949 900 $" or "1 975 $/mois" (regular space, $ after, optional /mois)
const FR_PRICE = /^\d{1,3}(?: \d{3})* \$(?:\/mois)?$/;
// EN: "$949,900" or "$1,975/month"
const EN_PRICE = /^\$\d{1,3}(?:,\d{3})*(?:\/month)?$/;

describe("property price formatting", () => {
  it("every FR property uses the FR price format", () => {
    for (const p of properties) {
      expect(p.price, `FR price for ${p.id} (${p.address})`).toMatch(FR_PRICE);
    }
  });

  it("every EN property uses the EN price format", () => {
    for (const p of propertiesEn) {
      expect(p.price, `EN price for ${p.id} (${p.address})`).toMatch(EN_PRICE);
    }
  });

  it("FR and EN datasets are aligned on the same property ids", () => {
    expect(propertiesEn.map((p) => p.id).sort()).toEqual(properties.map((p) => p.id).sort());
  });

  it("rent listings use /mois in FR and /month in EN consistently", () => {
    const frRent = properties.filter((p) => p.status === "rent");
    const enRent = propertiesEn.filter((p) => p.status === "rent");
    expect(frRent.length).toBeGreaterThan(0);
    expect(frRent.length).toEqual(enRent.length);
    for (const p of frRent) expect(p.price).toMatch(/\/mois$/);
    for (const p of enRent) expect(p.price).toMatch(/\/month$/);
  });
});
