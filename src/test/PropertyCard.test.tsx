import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PropertyCard from "@/components/PropertyCard";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { properties } from "@/data/properties";
import { propertiesEn } from "@/data/properties-en";

function renderAt(path: string, ui: React.ReactNode) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <LanguageProvider>{ui}</LanguageProvider>
    </MemoryRouter>
  );
}

describe("PropertyCard price display", () => {
  it("renders the FR price verbatim on French routes", () => {
    const sample = properties[0];
    renderAt("/", <PropertyCard property={sample} />);
    expect(screen.getByText(sample.price)).toBeInTheDocument();
    expect(sample.price).toMatch(/ \$(?:\/mois)?$/);
  });

  it("renders the EN price verbatim on English routes", () => {
    const sample = propertiesEn[0];
    renderAt("/en/", <PropertyCard property={sample} />);
    expect(screen.getByText(sample.price)).toBeInTheDocument();
    expect(sample.price).toMatch(/^\$/);
  });

  it("renders a rent listing with /mois in FR", () => {
    const rent = properties.find((p) => p.status === "rent")!;
    renderAt("/", <PropertyCard property={rent} />);
    expect(screen.getByText(rent.price)).toBeInTheDocument();
    expect(rent.price).toMatch(/\/mois$/);
  });

  it("renders a rent listing with /month in EN", () => {
    const rent = propertiesEn.find((p) => p.status === "rent")!;
    renderAt("/en/", <PropertyCard property={rent} />);
    expect(screen.getByText(rent.price)).toBeInTheDocument();
    expect(rent.price).toMatch(/\/month$/);
  });
});
