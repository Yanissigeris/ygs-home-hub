import * as React from "react";

import SiteHeader from "@/components/SiteHeader";
import JsonLdSchema from "@/components/JsonLdSchema";
import LangMeta from "@/components/LangMeta";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import VisibleBreadcrumb from "@/components/VisibleBreadcrumb";
import ScrollProgress from "@/components/ScrollProgress";
import NavigationProgress from "@/components/NavigationProgress";
import PageTransition from "@/components/PageTransition";
import { useHeadingHierarchyGuard } from "@/hooks/useHeadingHierarchyGuard";

const WhatsAppButton = React.lazy(() => import("@/components/WhatsAppButton"));
const CookieConsent = React.lazy(() => import("@/components/CookieConsent"));


import { Outlet, useLocation } from "react-router-dom";

const SiteFooter = React.lazy(() => import("@/components/SiteFooter"));

const PageFallback = () => (
  <div className="animate-fade-in">
    {/* Hero skeleton — matches real hero layout with portrait */}
    <div className="min-h-[400px] md:min-h-[440px] lg:min-h-[480px]" style={{ background: "#10242D" }}>
      <div className="section-container relative pt-[3rem] sm:pt-[3.5rem] md:pt-[4rem] lg:pt-[4.5rem]">
        <div className="grid items-end gap-0 md:grid-cols-[56%_44%] lg:grid-cols-[54%_46%]">
          {/* Text skeleton — heights calibrated to match real hero content */}
          <div className="pb-[2rem] md:pb-[3.5rem] lg:pb-[4rem]">
            {/* Overline */}
            <div className="mb-6 flex items-center gap-4">
              <div className="h-px w-8 bg-white/[0.06]" />
              <div className="h-3 w-48 rounded bg-white/[0.06]" />
            </div>
            {/* H1 — 4 lines on mobile, 3 on md+ */}
            <div className="space-y-2">
              <div className="h-10 w-[85%] rounded bg-white/[0.08] sm:h-12" />
              <div className="h-10 w-[75%] rounded bg-white/[0.08] sm:h-12" />
              <div className="h-10 w-[60%] rounded bg-white/[0.08] sm:h-12" />
              <div className="h-10 w-[40%] rounded bg-white/[0.08] sm:h-12 md:hidden" />
            </div>
            {/* Subtitle */}
            <div className="mt-4 space-y-1.5">
              <div className="h-4 w-[90%] max-w-[26rem] rounded bg-white/[0.05]" />
              <div className="h-4 w-[70%] max-w-[20rem] rounded bg-white/[0.05]" />
            </div>
            {/* Buttons — stacked on ≤390, row on wider */}
            <div className="mt-7 flex flex-col gap-3 min-[391px]:flex-row">
              <div className="h-[52px] w-full rounded-lg bg-white/[0.07] min-[391px]:w-44" />
              <div className="h-[52px] w-full rounded-lg bg-white/[0.05] min-[391px]:w-40" />
            </div>
          </div>
          {/* Portrait placeholder — desktop */}
          <div className="hidden md:flex md:items-end md:justify-end">
            <div className="w-[340px] lg:w-[400px] xl:w-[440px] aspect-[640/960]" />
          </div>
          {/* Portrait placeholder — mobile (inside grid, matching HeroSection) */}
          <div className="flex justify-center items-end md:hidden">
            <div className="w-[260px] sm:w-[300px] aspect-[640/960]" />
          </div>
        </div>
      </div>
    </div>
    {/* Body sections skeleton */}
    <div className="section-container space-y-16 py-16">
      <div className="mx-auto max-w-md space-y-3 text-center">
        <div className="mx-auto h-3 w-24 rounded bg-muted/60" />
        <div className="mx-auto h-7 w-64 rounded bg-muted/40" />
        <div className="mx-auto h-4 w-80 rounded bg-muted/30" />
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-56 rounded-2xl bg-muted/30" />
        ))}
      </div>
      <div className="mx-auto max-w-md space-y-3 text-center">
        <div className="mx-auto h-3 w-20 rounded bg-muted/60" />
        <div className="mx-auto h-7 w-56 rounded bg-muted/40" />
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {[1, 2].map((i) => (
          <div key={i} className="h-48 rounded-2xl bg-muted/30" />
        ))}
      </div>
    </div>
  </div>
);

const SiteLayout = () => {
  const { pathname } = useLocation();
  const isEn = pathname === "/en" || pathname.startsWith("/en/");
  const skipLabel = isEn ? "Skip to content" : "Aller au contenu";
  useHeadingHierarchyGuard();
  return (
    <div className="flex min-h-screen flex-col font-body">
      <JsonLdSchema />
      <LangMeta />
      <BreadcrumbJsonLd />
      <NavigationProgress />

      {/* Permanent dark gradient overlay behind the fixed header for white text legibility */}
      <div
        aria-hidden="true"
        className="fixed left-0 top-0 w-full h-[100px] md:h-[120px]"
        style={{
          zIndex: 49,
          pointerEvents: "none",
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)",
        }}
      />

      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[9999] focus:rounded focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:outline-none focus:ring-2 focus:ring-ring/20">
        {skipLabel}
      </a>
      <SiteHeader />
      <VisibleBreadcrumb />
      <ScrollProgress />
      <main id="main-content" className="flex-1">
        <PageTransition>
          <React.Suspense fallback={<PageFallback />}>
            <Outlet />
          </React.Suspense>
        </PageTransition>
      </main>
      <React.Suspense fallback={null}>
        <SiteFooter />
      </React.Suspense>
      <WhatsAppButton />
      <CookieConsent />
    </div>
  );
};

export default SiteLayout;
