/**
 * Avatar intent cookie helpers.
 * Stores which pathway the visitor selected so we can personalize CTAs.
 * SSR-safe: all access is guarded by `typeof document !== "undefined"`.
 */

export type AvatarIntent = "investir" | "vendre" | "acheter";

const COOKIE = "ygs_avatar_intent";
const MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export function setAvatarIntent(intent: AvatarIntent): void {
  if (typeof document === "undefined") return;
  document.cookie = `${COOKIE}=${intent}; Max-Age=${MAX_AGE}; Path=/; SameSite=Lax`;
}

export function getAvatarIntent(): AvatarIntent | null {
  if (typeof document === "undefined") return null;
  const m = document.cookie.match(
    /(?:^|;\s*)ygs_avatar_intent=(investir|vendre|acheter)(?:;|$)/,
  );
  return m ? (m[1] as AvatarIntent) : null;
}

export function clearAvatarIntent(): void {
  if (typeof document === "undefined") return;
  document.cookie = `${COOKIE}=; Max-Age=0; Path=/; SameSite=Lax`;
}
