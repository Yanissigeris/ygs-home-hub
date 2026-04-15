import PageMeta from "@/components/PageMeta";

const PrivacyPolicyPage = () => (
  <>
    <PageMeta
      title="Politique de confidentialité | YGS — Yanis Gauthier-Sigeris"
      description="Politique de confidentialité du site yanisgauthier.com. Conformité à la Loi 25 du Québec. Gestion des données personnelles et cookies."
      ogImage="https://yanisgauthier.com/og/og-default.jpg"
    />
    <article className="section-padding" style={{ background: "var(--white, #fff)" }}>
      <div className="section-container max-w-[760px] mx-auto" style={{ padding: "5rem 2.5rem" }}>
        {/* Eyebrow */}
        <p style={{ fontSize: ".6rem", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--gold)" }} className="mb-3">
          LÉGAL · QUÉBEC
        </p>
        <h1 className="font-serif" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 600, color: "var(--ink)", marginBottom: ".5rem" }}>
          Politique de confidentialité
        </h1>
        <p style={{ fontSize: ".85rem", color: "hsl(var(--muted-foreground))" }} className="mb-4">Dernière mise à jour : Avril 2026</p>
        <div style={{ width: 48, height: 2, background: "var(--gold)", marginBottom: "2.5rem" }} />

        <div style={{ fontSize: ".95rem", lineHeight: 1.9, color: "var(--ink)" }} className="space-y-0">
          <Section title="1. Responsable du traitement">
            <p><strong>Yanis Gauthier-Sigeris</strong><br />YANIS GAUTHIER-SIGERIS INC.<br />Courtier immobilier résidentiel<br />819-210-3044<br />yanis@martywaite.com</p>
          </Section>

          <Section title="2. Renseignements personnels collectés">
            <ul className="list-disc pl-5 space-y-1">
              <li>Nom et prénom (formulaires de contact)</li>
              <li>Adresse courriel (formulaires, guides)</li>
              <li>Numéro de téléphone (formulaires)</li>
              <li>Adresse de propriété (widget d'évaluation)</li>
              <li>Données de navigation (cookies analytiques, avec consentement)</li>
            </ul>
          </Section>

          <Section title="3. Finalités de la collecte">
            <ul className="list-disc pl-5 space-y-1">
              <li>Répondre aux demandes de contact</li>
              <li>Envoyer les guides demandés</li>
              <li>Préparer les évaluations immobilières</li>
              <li>Analyser le trafic du site (avec consentement)</li>
              <li>Améliorer l'expérience utilisateur</li>
            </ul>
          </Section>

          <Section title="4. Base légale du traitement">
            <ul className="list-disc pl-5 space-y-1">
              <li>Consentement de l'utilisateur</li>
              <li>Exécution d'un contrat ou mesures précontractuelles</li>
              <li>Intérêt légitime (amélioration des services)</li>
            </ul>
          </Section>

          <Section title="5. Durée de conservation">
            <ul className="list-disc pl-5 space-y-1">
              <li>Demandes de contact : 24 mois</li>
              <li>Données analytiques : 14 mois (Google Analytics)</li>
              <li>Données de leads : 36 mois ou jusqu'à la demande de suppression</li>
            </ul>
          </Section>

          <Section title="6. Partage avec des tiers">
            <ul className="list-disc pl-5 space-y-1">
              <li>Google Analytics (analytique web — avec consentement)</li>
              <li>Meta/Facebook Pixel (publicité — avec consentement)</li>
              <li>Fournisseurs de service courriel (guides)</li>
            </ul>
            <p className="mt-2">Aucune vente de données à des tiers.</p>
          </Section>

          <Section title="7. Cookies">
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Cookies nécessaires :</strong> essentiels au fonctionnement du site (session, préférence de langue).</li>
              <li><strong>Cookies analytiques :</strong> Google Analytics (GA4) — activés uniquement avec votre consentement.</li>
              <li><strong>Cookies marketing :</strong> Meta Pixel — activés uniquement avec votre consentement.</li>
            </ul>
            <p className="mt-2">Vous pouvez modifier vos préférences via le bouton 🍪 en bas à gauche de l'écran.</p>
          </Section>

          <Section title="8. Vos droits (Loi 25 Québec)">
            <ul className="list-disc pl-5 space-y-1">
              <li>Droit d'accès à vos renseignements</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement</li>
              <li>Droit à la portabilité</li>
              <li>Droit de retirer votre consentement</li>
            </ul>
            <p className="mt-2">Pour exercer ces droits : <a href="mailto:yanis@martywaite.com" className="underline">yanis@martywaite.com</a></p>
          </Section>

          <Section title="9. Transferts hors Québec">
            <p>Certains services utilisés (Google, Meta) peuvent traiter des données hors Québec selon leurs politiques propres, disponibles sur leurs sites respectifs.</p>
          </Section>

          <Section title="10. Modifications">
            <p>Nous pouvons modifier cette politique. La date de mise à jour est indiquée en haut de cette page.</p>
          </Section>

          <Section title="11. Contact">
            <p>Pour toute question sur cette politique :<br /><a href="mailto:yanis@martywaite.com" className="underline">yanis@martywaite.com</a> | 819-210-3044</p>
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

export default PrivacyPolicyPage;
