import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MortgageCalculator from "@/components/MortgageCalculator";
import WelcomeTaxCalculator from "@/components/WelcomeTaxCalculator";
import { LanguageProvider } from "@/contexts/LanguageContext";

function renderAt(path: string, ui: React.ReactNode) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <LanguageProvider>{ui}</LanguageProvider>
    </MemoryRouter>
  );
}

// fr-CA Intl currency: "1 989 $" (regular or NBSP/narrow-NBSP spaces, $ suffix)
const FR_CURRENCY = /\d[\d\s\u00A0\u202F]*\s?\$/;
// en-CA Intl currency: "$1,989"
const EN_CURRENCY = /\$\d{1,3}(?:,\d{3})*/;

describe("MortgageCalculator formats amounts per language", () => {
  it("uses FR currency format on /", () => {
    renderAt("/", <MortgageCalculator />);
    // "Paiement estimé" block
    expect(screen.getByText("Paiement estimé")).toBeInTheDocument();
    const matches = screen.getAllByText(FR_CURRENCY);
    expect(matches.length).toBeGreaterThan(0);
    // No EN-style "$1,234" in the rendered output
    expect(screen.queryAllByText(EN_CURRENCY)).toHaveLength(0);
  });

  it("uses EN currency format on /en/", () => {
    renderAt("/en/", <MortgageCalculator />);
    expect(screen.getByText("Estimated Payment")).toBeInTheDocument();
    const matches = screen.getAllByText(EN_CURRENCY);
    expect(matches.length).toBeGreaterThan(0);
  });
});

describe("WelcomeTaxCalculator formats amounts per language", () => {
  it("uses FR currency format and ' %' on /", () => {
    renderAt("/", <WelcomeTaxCalculator />);
    expect(screen.getByText("Taxe de bienvenue estimée")).toBeInTheDocument();
    expect(screen.getAllByText(FR_CURRENCY).length).toBeGreaterThan(0);
    // FR rate cells use a space before %
    expect(screen.getAllByText(/\d\.\d\s%/).length).toBeGreaterThan(0);
  });

  it("uses EN currency format and no space before % on /en/", () => {
    renderAt("/en/", <WelcomeTaxCalculator />);
    expect(screen.getByText("Estimated Welcome Tax")).toBeInTheDocument();
    expect(screen.getAllByText(EN_CURRENCY).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/\d\.\d%/).length).toBeGreaterThan(0);
  });
});
