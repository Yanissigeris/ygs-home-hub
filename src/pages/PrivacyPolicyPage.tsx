import PageMeta from "@/components/PageMeta";

const PrivacyPolicyPage = () => (
  <>
    <PageMeta
      title="Politique de confidentialité | YGS — Yanis Gauthier-Sigeris"
      description="Politique de confidentialité du site yanisgauthier.com. Conformité à la Loi 25 du Québec. Gestion des données personnelles et cookies."
    />
    <article className="section-padding bg-background">
      <div className="section-container prose prose-sm max-w-[44rem] mx-auto" style={{ color: "var(--ink)" }}>
        <p className="text-[.78rem] mb-8" style={{ color: "hsl(var(--muted-foreground))" }}>Dernière mise à jour : 5 avril 2026</p>
        <h1 className="font-serif">Politique de confidentialité</h1>

        <h2>1. Responsable de la protection des renseignements personnels</h2>
        <p><strong>Yanis Gauthier-Sigeris</strong><br />Courtier immobilier — RE/MAX Direct<br />Courriel : yanis@martywaite.com<br />Téléphone : 819-210-3044</p>

        <h2>2. Types de données collectées</h2>
        <p>Nous recueillons les renseignements personnels suivants lorsque vous utilisez nos formulaires :</p>
        <ul>
          <li>Nom et prénom</li>
          <li>Adresse courriel</li>
          <li>Numéro de téléphone (facultatif)</li>
          <li>Adresse de la propriété (formulaire d'évaluation)</li>
          <li>Messages et commentaires</li>
        </ul>

        <h2>3. Finalité de la collecte</h2>
        <p>Les données sont utilisées pour :</p>
        <ul>
          <li>Répondre à vos demandes de renseignements</li>
          <li>Fournir une évaluation immobilière</li>
          <li>Communiquer avec vous concernant votre projet immobilier</li>
          <li>Améliorer nos services et notre site Web</li>
        </ul>

        <h2>4. Durée de conservation</h2>
        <p>Les renseignements personnels sont conservés pour une durée maximale de 36 mois après votre dernier contact avec nous, sauf si vous en demandez la suppression avant cette date.</p>

        <h2>5. Droits des utilisateurs</h2>
        <p>Conformément à la Loi 25 du Québec, vous avez le droit de :</p>
        <ul>
          <li><strong>Accéder</strong> à vos renseignements personnels</li>
          <li><strong>Rectifier</strong> toute information inexacte</li>
          <li><strong>Demander la suppression</strong> de vos données</li>
          <li><strong>Retirer votre consentement</strong> à tout moment</li>
        </ul>
        <p>Pour exercer ces droits, contactez-nous à yanis@martywaite.com.</p>

        <h2>6. Cookies et technologies de suivi</h2>
        <p>Notre site utilise les cookies suivants :</p>
        <ul>
          <li><strong>Cookies nécessaires :</strong> essentiels au fonctionnement du site (session, préférence de langue).</li>
          <li><strong>Cookies analytiques :</strong> Google Analytics (GA4) — collecte de données anonymisées sur l'utilisation du site. Ces cookies ne sont activés qu'avec votre consentement.</li>
          <li><strong>Cookies marketing :</strong> Facebook Pixel — suivi de conversions publicitaires. Désactivés par défaut.</li>
        </ul>
        <p>Vous pouvez modifier vos préférences à tout moment via le bouton 🍪 en bas à gauche de l'écran.</p>

        <h2>7. Transferts de données à des tiers</h2>
        <p>Certaines données peuvent être partagées avec :</p>
        <ul>
          <li><strong>Google Analytics</strong> (Google LLC) — analyse de trafic</li>
          <li><strong>Meta Platforms</strong> (Facebook Pixel) — si activé par l'utilisateur</li>
        </ul>
        <p>Ces services peuvent traiter les données en dehors du Canada. En acceptant les cookies analytiques ou marketing, vous consentez à ce transfert.</p>

        <h2>8. Sécurité</h2>
        <p>Nous prenons des mesures raisonnables pour protéger vos renseignements personnels, incluant le chiffrement des communications (HTTPS) et l'accès restreint aux données.</p>

        <h2>9. Modifications</h2>
        <p>Cette politique peut être mise à jour. La date de dernière modification est indiquée en haut du document.</p>

        <h2>10. Contact</h2>
        <p>Pour toute question relative à cette politique, contactez :<br /><strong>Yanis Gauthier-Sigeris</strong><br />yanis@martywaite.com — 819-210-3044</p>
      </div>
    </article>
  </>
);

export default PrivacyPolicyPage;
