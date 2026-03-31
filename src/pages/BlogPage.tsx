import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import ContentBlock from "@/components/ContentBlock";
import heroImg from "@/assets/hero-resources.webp";

const featuredArticle = {
  tag: "Marché",
  title: "Le marché immobilier à Gatineau en 2025 : ce que les chiffres révèlent",
  excerpt: "Analyse des tendances de prix, des volumes de ventes et des secteurs les plus actifs en Outaouais cette année.",
  href: "/rapport-marche-gatineau",
};

const articles = [
  { tag: "Vendeurs", title: "Quand vendre sa maison à Gatineau pour maximiser son prix?", excerpt: "Le meilleur moment de l'année pour inscrire votre propriété, selon les données locales.", href: "/quand-vendre-a-gatineau" },
  { tag: "Acheteurs", title: "Premier achat à Gatineau : les étapes essentielles", excerpt: "Mise de fonds, préqualification, inspection — tout ce qu'un premier acheteur doit savoir en Outaouais.", href: "/premier-achat-gatineau" },
  { tag: "Relocalisation", title: "Déménager d'Ottawa à Gatineau : guide complet", excerpt: "Impôts, écoles, quartiers, accès — tout pour planifier une relocalisation réussie.", href: "/relocalisation-ottawa-gatineau" },
  { tag: "Investissement", title: "Investir dans un plex à Gatineau : est-ce encore rentable?", excerpt: "Analyse de rendement, secteurs à surveiller et erreurs à éviter pour les investisseurs.", href: "/investir-plex-gatineau" },
  { tag: "Quartiers", title: "Aylmer, Hull ou Plateau : quel quartier choisir?", excerpt: "Comparatif des secteurs les plus recherchés de Gatineau selon votre profil et votre budget.", href: "/quartiers-a-considerer-a-gatineau" },
  { tag: "Militaire", title: "Mutation militaire à Gatineau : ce que vous devez savoir", excerpt: "Programme IRP/BGRS, marché local et conseils pratiques pour les membres des forces.", href: "/militaire-gatineau" },
];

const categories = [
  { label: "Vendeurs", href: "/vendre-ma-maison-gatineau" },
  { label: "Acheteurs", href: "/acheter-a-gatineau" },
  { label: "Relocalisation", href: "/relocalisation-ottawa-gatineau" },
  { label: "Investissement", href: "/investir-plex-gatineau" },
  { label: "Quartiers", href: "/quartiers-a-considerer-a-gatineau" },
  { label: "Militaire", href: "/militaire-gatineau" },
];

const BlogPage = () => (
  <>
    <PageMeta
      title="Blogue immobilier Gatineau · Conseils et analyses | YGS"
      description="Articles, analyses et conseils immobiliers pour Gatineau et l'Outaouais. Vendeurs, acheteurs, investisseurs — par Yanis Gauthier-Sigeris, courtier immobilier."
    />
    <HeroSection
      overline="BLOGUE · IMMOBILIER GATINEAU"
      title="Blogue immobilier"
      subtitle="Articles, analyses et conseils pour vendre, acheter ou investir intelligemment à Gatineau et en Outaouais."
      primaryCta={{ label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau" }}
      secondaryCta={{ label: "Parler à Yanis", href: "/contact-yanis" }}
      trustLine="Par Yanis Gauthier-Sigeris · Courtier immobilier, Gatineau"
      heroBgImage={heroImg}
    />

    {/* Categories strip */}
    <section className="border-b border-border/30 bg-secondary/30">
      <div className="section-container py-5">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="text-[0.75rem] font-medium uppercase tracking-[0.1em] text-muted-foreground/50 mr-2">Catégories</span>
          {categories.map((cat) => (
            <Link
              key={cat.label}
              to={cat.href}
              className="inline-flex h-8 items-center rounded-full border border-border/40 bg-background px-4 text-[0.8125rem] font-medium text-muted-foreground transition-all duration-200 hover:border-accent/30 hover:text-foreground hover:shadow-sm"
            >
              {cat.label}
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Featured article */}
    <ContentBlock>
      <SectionHeading overline="À la une" title="Article vedette" centered />
      <Link to={featuredArticle.href} className="group mt-10 block rounded-2xl border border-border/40 bg-secondary/20 p-8 sm:p-10 transition-all duration-300 hover:border-accent/25 hover:shadow-lg hover:-translate-y-0.5">
        <span className="inline-flex h-6 items-center rounded-full bg-accent/10 px-3 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-accent">{featuredArticle.tag}</span>
        <h3 className="mt-4 text-xl sm:text-2xl font-semibold leading-snug group-hover:text-accent transition-colors duration-200">{featuredArticle.title}</h3>
        <p className="prose-body mt-3">{featuredArticle.excerpt}</p>
        <span className="mt-5 inline-flex items-center text-[0.875rem] font-medium text-accent">Lire l'article →</span>
      </Link>
    </ContentBlock>

    {/* Article grid */}
    <section className="section-container section-spacing">
      <SectionHeading overline="Articles" title="Derniers articles" centered />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Link
            key={article.title}
            to={article.href}
            className="group flex flex-col rounded-2xl border border-border/40 bg-background p-6 sm:p-7 transition-all duration-300 hover:border-accent/25 hover:shadow-lg hover:-translate-y-0.5"
          >
            <span className="inline-flex w-fit h-6 items-center rounded-full bg-accent/10 px-3 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-accent">{article.tag}</span>
            <h3 className="mt-4 text-[1.0625rem] font-semibold leading-snug group-hover:text-accent transition-colors duration-200">{article.title}</h3>
            <p className="prose-body mt-2.5 text-[0.875rem] flex-1">{article.excerpt}</p>
            <span className="mt-4 text-[0.8125rem] font-medium text-accent">Lire →</span>
          </Link>
        ))}
      </div>
    </section>

    <CTASection
      dark
      title="Besoin de conseils personnalisés?"
      text="Les articles sont un bon point de départ. Pour une stratégie adaptée à votre situation, parlons-en."
      buttons={[
        { label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau" },
        { label: "Réserver une consultation", href: "/contact-yanis", variant: "outline" },
      ]}
      trustLine="Je vous accompagne à votre rythme."
    />
  </>
);

export default BlogPage;
