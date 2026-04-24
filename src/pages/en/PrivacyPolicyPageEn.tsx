import PageMeta from "@/components/PageMeta";
import heroPrivacy from "@/assets/hero-privacy.webp";

const PrivacyPolicyPageEn = () => (
  <>
    <PageMeta
      title="Privacy Policy | YGS — Yanis Gauthier-Sigeris"
      description="Privacy policy for yanisgauthier.com. Compliance with Quebec's Law 25. Personal data management and cookies."
      ogImage="https://yanisgauthier.com/og/og-default.jpg"
    />
    <section
      aria-hidden="true"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(23,48,59,0.88), rgba(23,48,59,0.7)), url(${heroPrivacy})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "180px",
      }}
      className="w-full"
    />
    <article className="section-padding" style={{ background: "var(--white, #fff)" }}>
      <div className="section-container max-w-[760px] mx-auto" style={{ padding: "5rem 2.5rem" }}>
        <p style={{ fontSize: ".6rem", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--gold)" }} className="mb-3">
          LEGAL · QUEBEC
        </p>
        <h1 className="font-serif" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 600, color: "var(--ink)", marginBottom: ".5rem" }}>
          Privacy Policy
        </h1>
        <p style={{ fontSize: ".85rem", color: "hsl(var(--muted-foreground))" }} className="mb-4">Last updated: April 2026</p>
        <div style={{ width: 48, height: 2, background: "var(--gold)", marginBottom: "2.5rem" }} />

        <div style={{ fontSize: ".95rem", lineHeight: 1.9, color: "var(--ink)" }} className="space-y-0">
          <Section title="1. Data Controller">
            <p><strong>Yanis Gauthier-Sigeris</strong><br />YANIS GAUTHIER-SIGERIS INC.<br />Residential Real Estate Broker<br />819-210-3044<br />yanis@martywaite.com</p>
          </Section>

          <Section title="2. Personal Information Collected">
            <ul className="list-disc pl-5 space-y-1">
              <li>Full name (contact forms)</li>
              <li>Email address (forms, guides)</li>
              <li>Phone number (forms)</li>
              <li>Property address (valuation widget)</li>
              <li>Browsing data (analytics cookies, with consent)</li>
            </ul>
          </Section>

          <Section title="3. Purpose of Collection">
            <ul className="list-disc pl-5 space-y-1">
              <li>Respond to contact requests</li>
              <li>Send requested guides</li>
              <li>Prepare property valuations</li>
              <li>Analyze site traffic (with consent)</li>
              <li>Improve user experience</li>
            </ul>
          </Section>

          <Section title="4. Legal Basis">
            <ul className="list-disc pl-5 space-y-1">
              <li>User consent</li>
              <li>Performance of a contract or pre-contractual measures</li>
              <li>Legitimate interest (service improvement)</li>
            </ul>
          </Section>

          <Section title="5. Data Retention">
            <ul className="list-disc pl-5 space-y-1">
              <li>Contact requests: 24 months</li>
              <li>Analytics data: 14 months (Google Analytics)</li>
              <li>Lead data: 36 months or until deletion request</li>
            </ul>
          </Section>

          <Section title="6. Third-Party Sharing">
            <ul className="list-disc pl-5 space-y-1">
              <li>Google Analytics (web analytics — with consent)</li>
              <li>Meta/Facebook Pixel (advertising — with consent)</li>
              <li>Email service providers (guides)</li>
            </ul>
            <p className="mt-2">We do not sell data to third parties.</p>
          </Section>

          <Section title="7. Cookies">
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Necessary cookies:</strong> essential for site operation (session, language preference).</li>
              <li><strong>Analytics cookies:</strong> Google Analytics (GA4) — activated only with your consent.</li>
              <li><strong>Marketing cookies:</strong> Meta Pixel — activated only with your consent.</li>
            </ul>
            <p className="mt-2">You can modify your preferences via the 🍪 button at the bottom left of the screen.</p>
          </Section>

          <Section title="8. Your Rights (Quebec Law 25)">
            <ul className="list-disc pl-5 space-y-1">
              <li>Right to access your information</li>
              <li>Right to rectification</li>
              <li>Right to erasure</li>
              <li>Right to data portability</li>
              <li>Right to withdraw consent</li>
            </ul>
            <p className="mt-2">To exercise these rights: <a href="mailto:yanis@martywaite.com" className="underline">yanis@martywaite.com</a></p>
          </Section>

          <Section title="9. Transfers Outside Quebec">
            <p>Some services used (Google, Meta) may process data outside Quebec according to their own policies, available on their respective websites.</p>
          </Section>

          <Section title="10. Changes">
            <p>This policy may be updated. The update date is shown at the top of this page.</p>
          </Section>

          <Section title="11. Contact">
            <p>For any questions about this policy:<br /><a href="mailto:yanis@martywaite.com" className="underline">yanis@martywaite.com</a> | 819-210-3044</p>
          </Section>
        </div>
      </div>
    </article>
  </>
);

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{ paddingTop: "2rem", marginTop: "2.5rem", borderTop: "1px solid hsl(var(--border))" }}>
    <h2 className="font-serif" style={{ fontSize: "1.4rem", fontWeight: 600, color: "var(--ink)", marginBottom: "1rem" }}>{title}</h2>
    {children}
  </div>
);

export default PrivacyPolicyPageEn;
