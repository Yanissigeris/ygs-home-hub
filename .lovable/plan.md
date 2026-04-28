## Cookie-based avatar router

Personalize the mobile sticky CTA based on which pathway card the visitor clicked on the homepage (investor / seller / buyer).

### 1. New file: `src/lib/avatar.ts`

SSR-safe cookie helpers:

```ts
export type AvatarIntent = "investir" | "vendre" | "acheter";

const COOKIE = "ygs_avatar_intent";
const MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export function setAvatarIntent(intent: AvatarIntent): void {
  if (typeof document === "undefined") return;
  document.cookie = `${COOKIE}=${intent}; Max-Age=${MAX_AGE}; Path=/; SameSite=Lax`;
}

export function getAvatarIntent(): AvatarIntent | null {
  if (typeof document === "undefined") return null;
  const m = document.cookie.match(/(?:^|;\s*)ygs_avatar_intent=(investir|vendre|acheter)(?:;|$)/);
  return m ? (m[1] as AvatarIntent) : null;
}

export function clearAvatarIntent(): void {
  if (typeof document === "undefined") return;
  document.cookie = `${COOKIE}=; Max-Age=0; Path=/; SameSite=Lax`;
}
```

### 2. `src/components/PathwaySection.tsx`

- Define a `Pathway` interface that includes `intent: AvatarIntent`.
- Type both `pathwaysFr: Pathway[]` and `pathwaysEn: Pathway[]`.
- Add `intent` to each card: 01 → `"investir"`, 02 → `"vendre"`, 03 → `"acheter"` (in both arrays).
- On the existing `<Link>`, add:
  ```tsx
  onClick={() => {
    setAvatarIntent(p.intent);
    trackEvent("avatar_router_select", { avatar: p.intent });
  }}
  ```
- No `preventDefault`, no other changes (visuals, hover handlers, hrefs, copy untouched).
- Imports added: `setAvatarIntent`, `AvatarIntent` from `@/lib/avatar`; `trackEvent` from `@/lib/analytics`.

### 3. `src/components/StickyMobileCTA.tsx`

- Add `intent` state + effect to read cookie on mount (browser-only):
  ```tsx
  const [intent, setIntent] = useState<AvatarIntent | null>(null);
  useEffect(() => { setIntent(getAvatarIntent()); }, []);
  ```
- Replace hardcoded `ctaLabel` / `ctaHref` with a per-language config map:

  | intent | FR label | FR href | EN label | EN href |
  |--------|----------|---------|----------|---------|
  | investir | Analyser mon projet → | /investir-plex-gatineau | Analyze my project → | /en/plex |
  | vendre | Obtenir ma valeur → | /evaluation-gratuite-gatineau | Get my value → | /en/home-valuation |
  | acheter | Voir les propriétés → | /proprietes | View properties → | /en/properties |
  | (none / default) | Évaluation Gratuite → | /evaluation-gratuite-gatineau | Free Valuation → | /en/home-valuation |

- `callLabel`, `trackCTAClick`, scroll trigger, `HIDDEN_PATHS`, footer detection, all styling, and the `tel:` link remain unchanged.

### Constraints respected

- No new dependencies.
- No route, schema, SEO, or heading changes.
- Cookie is `SameSite=Lax`, `Path=/`, 30-day `Max-Age` — first-party, no consent prompt needed for a strictly functional preference cookie.
- All cookie access guarded by `typeof document !== "undefined"` to keep prerender / SSR safe.

### Files touched

- `src/lib/avatar.ts` (new)
- `src/components/PathwaySection.tsx` (typed cards + onClick)
- `src/components/StickyMobileCTA.tsx` (intent-driven CTA)
