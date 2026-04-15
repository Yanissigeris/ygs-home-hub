import PageMeta from "@/components/PageMeta";

const TermsPageEn = () => (
  <>
    <PageMeta
      title="Terms of Use | YGS — Yanis Gauthier-Sigeris"
      description="Terms of use for yanisgauthier.com. Intellectual property, limitation of liability and applicable law."
      ogImage="https://yanisgauthier.com/og/og-default.jpg"
    />
    <article className="section-padding bg-background">
      <div className="section-container prose prose-sm max-w-[44rem] mx-auto" style={{ color: "var(--ink)" }}>
        <p className="text-[.78rem] mb-8" style={{ color: "hsl(var(--muted-foreground))" }}>Last updated: April 5, 2026</p>
        <h1 className="font-serif">Terms of Use</h1>

        <h2>1. Intellectual Property</h2>
        <p>All content on this site — text, images, photographs, logos, videos and graphic design — is the property of Yanis Gauthier-Sigeris or his partners and is protected by Canadian intellectual property laws. Any reproduction, distribution or use without prior written authorization is prohibited.</p>

        <h2>2. Use of the Site</h2>
        <p>This site is intended for informational purposes only. The information presented does not constitute legal, financial or professional advice. For advice tailored to your situation, consult a qualified professional.</p>

        <h2>3. Limitation of Liability</h2>
        <p>Yanis Gauthier-Sigeris cannot be held responsible for direct or indirect damages resulting from the use of this site, including errors, omissions or service interruptions. Real estate market information is provided for indicative purposes and may not reflect current market conditions.</p>

        <h2>4. External Links</h2>
        <p>This site may contain links to third-party sites (RE/MAX, Google Maps, etc.). We do not control the content of these sites and are not responsible for their privacy practices or content.</p>

        <h2>5. Accuracy of Information</h2>
        <p>We strive to keep information up to date, including property prices and features. However, this information may change without notice. Please check directly with us for the most current data.</p>

        <h2>6. Modifications to Terms</h2>
        <p>We reserve the right to modify these terms at any time. Changes take effect upon publication on this page. The last update date is shown at the top of this document.</p>

        <h2>7. Applicable Law</h2>
        <p>These terms are governed by the laws of the Province of Quebec and the federal laws of Canada. Any dispute shall be subject to the exclusive jurisdiction of the courts of the Province of Quebec, District of Gatineau.</p>

        <h2>8. Contact</h2>
        <p>For any questions about these terms:<br /><strong>Yanis Gauthier-Sigeris</strong><br />yanis@martywaite.com — 819-210-3044</p>
      </div>
    </article>
  </>
);

export default TermsPageEn;
