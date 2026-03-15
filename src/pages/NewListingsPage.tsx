import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import FAQSection from "@/components/FAQSection";
import RelatedPages from "@/components/RelatedPages";
import heroImg from "@/assets/hero-properties.jpg";

const faq = [
  { q: "Comment être informé des nouvelles inscriptions?", a: "Contactez-moi avec vos critères — je vous avise dès qu'une propriété correspondante arrive sur le marché." },
  { q: "Les propriétés se vendent-elles vite à Gatineau?", a: "Oui — les meilleures se vendent souvent en quelques jours. Être informé en priorité fait toute la différence." },
];

const related = [
  { title: "Propriétés vedettes", text: "Les coups de cœur du moment.", href: "/proprietes-vedettes" },
  { title: "Vendu récemment", text: "Les prix réels des ventes récentes.", href: "/vendu-recemment" },
  { title: "Consultation acheteur", text: "Clarifiez vos critères et vos options.", href: "/consultation-acheteur" },
  { title: "Explorer les quartiers", text: "Trouvez le secteur qui vous correspond.", href: "/quartiers-a-considerer-a-gatineau" },
];

const NewListingsPage = () => (
  <>
    <HeroSection
      overline="Nouvelles inscriptions · Gatineau"
      title="Nouvelles propriétés sur le marché"
      subtitle="Les propriétés fraîchement inscrites à Gatineau — soyez parmi les premiers à les découvrir."
      primaryCta={{ label: "Réserver une consultation", href: "/consultation-acheteur" }}
      trustLine="Mises à jour régulières par Yanis Gauthier-Sigeris"
      backgroundImage={heroImg}
    />

    <ContentBlock narrow>
      <SectionHeading
        overline="Bientôt disponible"
        title="Les nouvelles inscriptions arrivent bientôt"
        subtitle="En attendant, contactez-moi pour être informé en priorité des nouvelles propriétés dans votre secteur."
      />
      <p className="prose-body mt-5">
        Le marché bouge vite à Gatineau. Les meilleures propriétés se vendent souvent en quelques jours. En me contactant, vous serez avisé dès qu'une opportunité correspondant à vos critères apparaît.
      </p>
    </ContentBlock>

    <FAQSection items={faq} />

    <RelatedPages
      title="Explorer aussi"
      pages={related}
      background="alt"
    />

    <CTASection
      dark
      title="Ne manquez pas les nouvelles inscriptions"
      text="Contactez-moi pour être avisé en priorité des nouvelles propriétés à Gatineau."
      buttons={[
        { label: "Réserver une consultation", href: "/consultation-acheteur" },
      ]}
      trustLine="Zéro pression — je vous donne les options, vous décidez."
    />
  </>
);

export default NewListingsPage;
