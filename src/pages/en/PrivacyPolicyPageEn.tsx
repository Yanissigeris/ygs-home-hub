import PageMeta from "@/components/PageMeta";

const PrivacyPolicyPageEn = () => (
  <>
    <PageMeta
      title="Privacy Policy | YGS — Yanis Gauthier-Sigeris"
      description="Privacy policy for yanisgauthier.com. Compliance with Quebec's Law 25. Personal data management and cookies."
    />
    <article className="section-padding bg-background">
      <div className="section-container prose prose-sm max-w-[44rem] mx-auto" style={{ color: "var(--ink)" }}>
        <p className="text-[.78rem] mb-8" style={{ color: "hsl(var(--muted-foreground))" }}>Last updated: April 5, 2026</p>
        <h1 className="font-serif">Privacy Policy</h1>

        <h2>1. Privacy Officer</h2>
        <p><strong>Yanis Gauthier-Sigeris</strong><br />Real Estate Broker — RE/MAX Direct<br />Email: yanis@martywaite.com<br />Phone: 819-210-3044</p>

        <h2>2. Types of Data Collected</h2>
        <p>We collect the following personal information when you use our forms:</p>
        <ul>
          <li>Full name</li>
          <li>Email address</li>
          <li>Phone number (optional)</li>
          <li>Property address (valuation form)</li>
          <li>Messages and comments</li>
        </ul>

        <h2>3. Purpose of Collection</h2>
        <p>Data is used to:</p>
        <ul>
          <li>Respond to your inquiries</li>
          <li>Provide a property valuation</li>
          <li>Communicate with you about your real estate project</li>
          <li>Improve our services and website</li>
        </ul>

        <h2>4. Data Retention</h2>
        <p>Personal information is retained for a maximum of 36 months after your last contact with us, unless you request deletion before that date.</p>

        <h2>5. User Rights</h2>
        <p>Under Quebec's Law 25, you have the right to:</p>
        <ul>
          <li><strong>Access</strong> your personal information</li>
          <li><strong>Correct</strong> any inaccurate information</li>
          <li><strong>Request deletion</strong> of your data</li>
          <li><strong>Withdraw your consent</strong> at any time</li>
        </ul>
        <p>To exercise these rights, contact us at yanis@martywaite.com.</p>

        <h2>6. Cookies and Tracking Technologies</h2>
        <p>Our site uses the following cookies:</p>
        <ul>
          <li><strong>Necessary cookies:</strong> essential for site operation (session, language preference).</li>
          <li><strong>Analytics cookies:</strong> Google Analytics (GA4) — collects anonymized data about site usage. Only activated with your consent.</li>
          <li><strong>Marketing cookies:</strong> Facebook Pixel — advertising conversion tracking. Disabled by default.</li>
        </ul>
        <p>You can modify your preferences at any time via the 🍪 button at the bottom left of the screen.</p>

        <h2>7. Third-Party Data Transfers</h2>
        <p>Some data may be shared with:</p>
        <ul>
          <li><strong>Google Analytics</strong> (Google LLC) — traffic analysis</li>
          <li><strong>Meta Platforms</strong> (Facebook Pixel) — if enabled by the user</li>
        </ul>
        <p>These services may process data outside of Canada. By accepting analytics or marketing cookies, you consent to this transfer.</p>

        <h2>8. Security</h2>
        <p>We take reasonable measures to protect your personal information, including encrypted communications (HTTPS) and restricted data access.</p>

        <h2>9. Changes</h2>
        <p>This policy may be updated. The last modification date is shown at the top of this document.</p>

        <h2>10. Contact</h2>
        <p>For any questions about this policy, contact:<br /><strong>Yanis Gauthier-Sigeris</strong><br />yanis@martywaite.com — 819-210-3044</p>
      </div>
    </article>
  </>
);

export default PrivacyPolicyPageEn;
