import * as React from "react";
import UtilityBar from "@/components/UtilityBar";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import JsonLdSchema from "@/components/JsonLdSchema";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { Outlet } from "react-router-dom";

const PageFallback = () => (
  <div className="animate-fade-in">
    {/* Hero skeleton — matches real hero min-height + dark background */}
    <div className="min-h-[400px] md:min-h-[440px] lg:min-h-[480px]" style={{ background: "#10242D" }}>
      <div className="section-container relative pt-[3rem] sm:pt-[3.5rem] md:pt-[4rem]">
        <div className="space-y-5">
          <div className="h-3 w-40 rounded bg-white/[0.06]" />
          <div className="space-y-3">
            <div className="h-10 w-64 rounded bg-white/[0.08] sm:h-12 sm:w-80" />
            <div className="h-10 w-48 rounded bg-white/[0.08] sm:h-12 sm:w-64" />
          </div>
          <div className="h-4 w-72 rounded bg-white/[0.05]" />
          <div className="flex gap-3 pt-2">
            <div className="h-12 w-40 rounded-lg bg-white/[0.07]" />
            <div className="h-12 w-36 rounded-lg bg-white/[0.05]" />
          </div>
        </div>
      </div>
    </div>
    {/* Body sections skeleton — reserves ~screen height of space */}
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

const SiteLayout = () => (
  <div className="flex min-h-screen flex-col font-body">
    <JsonLdSchema />
    <BreadcrumbJsonLd />
    <UtilityBar />
    <SiteHeader />
    <main className="flex-1">
      <React.Suspense fallback={<PageFallback />}>
        <Outlet />
      </React.Suspense>
    </main>
    <SiteFooter />
  </div>
);

export default SiteLayout;
