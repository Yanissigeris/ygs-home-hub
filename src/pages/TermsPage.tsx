import PageMeta from "@/components/PageMeta";

const TermsPage = () => (
  <>
    <PageMeta
      title="Conditions d'utilisation | YGS — Yanis Gauthier-Sigeris"
      description="Conditions d'utilisation du site yanisgauthier.com. Propriété intellectuelle, limitation de responsabilité et droit applicable."
    />
    <article className="section-padding bg-background">
      <div className="section-container prose prose-sm max-w-[44rem] mx-auto" style={{ color: "var(--ink)" }}>
        <p className="text-[.78rem] mb-8" style={{ color: "hsl(var(--muted-foreground))" }}>Dernière mise à jour : 5 avril 2026</p>
        <h1 className="font-serif">Conditions d'utilisation</h1>

        <h2>1. Propriété intellectuelle</h2>
        <p>L'ensemble du contenu de ce site — textes, images, photographies, logos, vidéos et design graphique — est la propriété de Yanis Gauthier-Sigeris ou de ses partenaires et est protégé par les lois canadiennes sur la propriété intellectuelle. Toute reproduction, distribution ou utilisation sans autorisation écrite préalable est interdite.</p>

        <h2>2. Utilisation du site</h2>
        <p>Ce site est destiné à des fins d'information uniquement. Les renseignements présentés ne constituent pas un avis juridique, financier ou professionnel. Pour des conseils adaptés à votre situation, consultez un professionnel qualifié.</p>

        <h2>3. Limitation de responsabilité</h2>
        <p>Yanis Gauthier-Sigeris ne peut être tenu responsable des dommages directs ou indirects résultant de l'utilisation de ce site, y compris les erreurs, omissions ou interruptions de service. Les informations sur le marché immobilier sont fournies à titre indicatif et peuvent ne pas refléter les conditions actuelles du marché.</p>

        <h2>4. Liens externes</h2>
        <p>Ce site peut contenir des liens vers des sites tiers (RE/MAX, Google Maps, etc.). Nous ne contrôlons pas le contenu de ces sites et ne sommes pas responsables de leurs pratiques en matière de confidentialité ou de leur contenu.</p>

        <h2>5. Exactitude des informations</h2>
        <p>Nous nous efforçons de maintenir les informations à jour, notamment les prix et les caractéristiques des propriétés. Cependant, ces informations peuvent changer sans préavis. Veuillez vérifier directement auprès de nous pour les données les plus récentes.</p>

        <h2>6. Modifications des conditions</h2>
        <p>Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications prennent effet dès leur publication sur cette page. La date de dernière mise à jour est indiquée en haut du document.</p>

        <h2>7. Droit applicable</h2>
        <p>Ces conditions sont régies par les lois de la province de Québec et les lois fédérales du Canada. Tout litige sera soumis à la compétence exclusive des tribunaux de la province de Québec, district de Gatineau.</p>

        <h2>8. Contact</h2>
        <p>Pour toute question concernant ces conditions :<br /><strong>Yanis Gauthier-Sigeris</strong><br />yanis@martywaite.com — 819-210-3044</p>
      </div>
    </article>
  </>
);

export default TermsPage;
