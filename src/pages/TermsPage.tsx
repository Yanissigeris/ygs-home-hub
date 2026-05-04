import PageMeta from "@/components/PageMeta";
import heroPrivacy from "@/assets/hero-privacy.webp";

const TermsPage = () => (
  <>
    <PageMeta
      title="Conditions d'utilisation | YGS — Yanis Gauthier-Sigeris"
      description="Conditions d'utilisation du site yanisgauthier.com. Propriété intellectuelle, limitation de responsabilité et droit applicable."
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
    <article className="section-padding" style={{ background: "var(--white, var(--white))" }}>
      <div className="section-container max-w-[760px] mx-auto" style={{ padding: "5rem 2.5rem" }}>
        <p style={{ fontSize: ".6rem", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--gold)" }} className="mb-3">
          LÉGAL · QUÉBEC
        </p>
        <h1 className="font-serif" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 600, color: "var(--ink)", marginBottom: ".5rem" }}>
          Conditions d'utilisation
        </h1>
        <p style={{ fontSize: ".85rem", color: "hsl(var(--muted-foreground))" }} className="mb-4">Dernière mise à jour : Avril 2026</p>
        <div style={{ width: 48, height: 2, background: "var(--gold)", marginBottom: "2.5rem" }} />

        <div style={{ fontSize: ".95rem", lineHeight: 1.9, color: "var(--ink)" }} className="space-y-0">
          <Section title="1. Acceptation des conditions">
            <p>En accédant à ce site Web et en l'utilisant, vous acceptez d'être lié par les présentes conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser le site.</p>
          </Section>

          <Section title="2. Propriété intellectuelle">
            <p>L'ensemble du contenu de ce site — textes, images, photographies, logos, vidéos et design graphique — est la propriété de Yanis Gauthier-Sigeris ou de ses partenaires et est protégé par les lois canadiennes sur la propriété intellectuelle. Toute reproduction, distribution ou utilisation sans autorisation écrite préalable est interdite.</p>
          </Section>

          <Section title="3. Limitation de responsabilité">
            <p>Ce site est destiné à des fins d'information uniquement. Les renseignements présentés ne constituent pas un avis juridique, financier ou professionnel. Yanis Gauthier-Sigeris ne peut être tenu responsable des dommages directs ou indirects résultant de l'utilisation de ce site, y compris les erreurs, omissions ou interruptions de service.</p>
          </Section>

          <Section title="4. Exactitude des informations">
            <p>Nous nous efforçons de maintenir les informations à jour, notamment les prix et les caractéristiques des propriétés. Cependant, les données de marché sont fournies à titre indicatif et peuvent changer sans préavis. Veuillez vérifier directement auprès de nous pour les données les plus récentes.</p>
          </Section>

          <Section title="5. Liens vers des sites tiers">
            <p>Ce site peut contenir des liens vers des sites tiers (RE/MAX, Google Maps, etc.). Nous ne contrôlons pas le contenu de ces sites et ne sommes pas responsables de leurs pratiques en matière de confidentialité ou de leur contenu.</p>
          </Section>

          <Section title="6. Droit applicable">
            <p>Ces conditions sont régies par les lois de la province de Québec et les lois fédérales du Canada. Tout litige sera soumis à la compétence exclusive des tribunaux de la province de Québec, district de Gatineau.</p>
          </Section>

          <Section title="7. Contact">
            <p>Pour toute question concernant ces conditions :<br /><strong>Yanis Gauthier-Sigeris</strong><br /><a href="mailto:yanis@martywaite.com" className="underline">yanis@martywaite.com</a> — 819-210-3044</p>
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

export default TermsPage;
