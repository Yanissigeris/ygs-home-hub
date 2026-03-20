import { Link } from"react-router-dom";
import { useLocation } from"react-router-dom";
import { useEffect } from"react";
import { Button } from"@/components/ui/button";
import SiteHeader from"@/components/SiteHeader";
import SiteFooter from"@/components/SiteFooter";

const NotFound = () => {
 const location = useLocation();

 useEffect(() => {
 console.error("404 Error: User attempted to access non-existent route:", location.pathname);
 }, [location.pathname]);

 return (
 <div className="flex min-h-screen flex-col font-body">
 <SiteHeader />
 <main className="flex-1 flex items-center justify-center">
 <div className="section-container text-center py-20">
 <p className="label-overline mb-4">Erreur 404</p>
 <h1 className="text-[3rem] sm:text-[4rem]">Page introuvable</h1>
 <p className="mt-4 text-[1.0625rem] text-muted-foreground max-w-md mx-auto leading-[1.6]">
 La page que vous cherchez n'existe pas ou a été déplacée.
 </p>
 <Button className="mt-8" size="lg" asChild>
 <Link to="/">Retour à l'accueil</Link>
 </Button>
 </div>
 </main>
 <SiteFooter />
 </div>
 );
};

export default NotFound;
