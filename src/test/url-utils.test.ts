import { describe, expect, it } from "vitest";
import { canonicalPath, withTrailingSlash } from "@/lib/url-utils";

describe("canonicalPath", () => {
  it("adds the trailing slash to internal routes", () => {
    expect(canonicalPath("/evaluation-gratuite-gatineau")).toBe("/evaluation-gratuite-gatineau/");
    expect(canonicalPath("/en")).toBe("/en/");
    expect(canonicalPath("/blogue/quand-vendre-sa-maison-gatineau")).toBe("/blogue/quand-vendre-sa-maison-gatineau/");
  });
  it("keeps already-canonical routes unchanged", () => {
    expect(canonicalPath("/aylmer/")).toBe("/aylmer/");
    expect(canonicalPath("/")).toBe("/");
  });
  it("puts the slash before a query string or fragment", () => {
    expect(canonicalPath("/proprietes?secteur=aylmer")).toBe("/proprietes/?secteur=aylmer");
    expect(canonicalPath("/faq#prix")).toBe("/faq/#prix");
    expect(canonicalPath("/faq/#prix")).toBe("/faq/#prix");
  });
  it("leaves external, protocol and file links alone", () => {
    expect(canonicalPath("https://www.remax-quebec.com")).toBe("https://www.remax-quebec.com");
    expect(canonicalPath("tel:+18192103044")).toBe("tel:+18192103044");
    expect(canonicalPath("sms:+18192103044?body=Bonjour")).toBe("sms:+18192103044?body=Bonjour");
    expect(canonicalPath("mailto:yanis@martywaite.com")).toBe("mailto:yanis@martywaite.com");
    expect(canonicalPath("#top")).toBe("#top");
    expect(canonicalPath("/guides/guide-vendeur.pdf")).toBe("/guides/guide-vendeur.pdf");
    expect(canonicalPath("/sitemap.xml")).toBe("/sitemap.xml");
  });
});

describe("withTrailingSlash", () => {
  it("is used by the language switcher and keeps root as root", () => {
    expect(withTrailingSlash("/en")).toBe("/en/");
    expect(withTrailingSlash("/")).toBe("/");
  });
});
