import * as React from "react";
import UtilityBar from "@/components/UtilityBar";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import JsonLdSchema from "@/components/JsonLdSchema";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { Outlet } from "react-router-dom";

const PageFallback = () => (
  <div className="flex min-h-[60vh] items-center justify-center">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
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
