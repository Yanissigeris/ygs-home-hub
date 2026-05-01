/**
 * No-op page transition wrapper.
 *
 * The previous dark "YGS" overlay caused a visible splash on every route
 * change (and could appear stuck on slow page mounts). Removed entirely.
 * This component is kept as a passthrough so existing imports keep working.
 */
const PageTransition = ({ children }: { children: React.ReactNode }) => <>{children}</>;

export default PageTransition;
