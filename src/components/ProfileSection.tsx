import { motion } from"framer-motion";
import { LucideIcon } from"lucide-react";
import SectionHeading from"@/components/SectionHeading";

interface ProfileItem {
 image: string;
 imageAlt: string;
 name: string;
 role: string;
 subtitle?: string;
 logo?: string;
 logoAlt?: string;
 children: React.ReactNode;
}

interface ProfileSectionProps extends ProfileItem {
 background?:"default" |"alt";
 imagePosition?:"left" |"right";
}

const ProfileSection = ({
 image,
 imageAlt,
 name,
 role,
 subtitle,
 logo,
 logoAlt,
 children,
 background ="default",
 imagePosition ="left",
}: ProfileSectionProps) => (
 <section className={background ==="alt" ?"section-padding bg-secondary/20" :"section-padding bg-background"}>
 <div className={`section-container grid gap-12 lg:gap-16 ${imagePosition ==="left" ?"lg:grid-cols-[38%_62%]" :"lg:grid-cols-[62%_38%]"} lg:items-start`}>
 <motion.div
 className={`space-y-8 ${imagePosition ==="right" ?"order-2" :""}`}
 initial={{ opacity: 0, x: imagePosition ==="left" ? -20 : 20 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true, margin:"-80px" }}
 transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
 >
 <img
 src={image}
 alt={imageAlt}
 className="w-full rounded-[1.75rem] object-cover aspect-[3/4]"
 />
 {logo && (
 <div className="text-center">
 <img
 src={logo}
 alt={logoAlt ||""}
 className="mx-auto h-auto"
 style={{ width:"clamp(145px, 20vw, 180px)" }}
 />
 </div>
 )}
 </motion.div>
 <motion.div
 className={imagePosition ==="right" ?"order-1" :""}
 initial={{ opacity: 0, x: imagePosition ==="left" ? 20 : -20 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true, margin:"-80px" }}
 transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
 >
 <p className="label-overline mb-3">À propos</p>
 <h2>{name}</h2>
 <p className="mt-2 text-[1.0625rem] font-medium text-accent">{role}</p>
 {subtitle && <p className="mt-1.5 text-[0.875rem] text-muted-foreground/45">{subtitle}</p>}
 {children}
 </motion.div>
 </div>
 </section>
);

export default ProfileSection;
