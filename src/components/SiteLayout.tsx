import UtilityBar from "@/components/UtilityBar";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import JsonLdSchema from "@/components/JsonLdSchema";
import { Outlet } from "react-router-dom";

const SiteLayout = () => (
  <div className="flex min-h-screen flex-col font-body">
    <UtilityBar />
    <SiteHeader />
    <main className="flex-1">
      <Outlet />
    </main>
    <SiteFooter />
  </div>
);

export default SiteLayout;
