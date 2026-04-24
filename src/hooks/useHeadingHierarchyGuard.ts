/**
 * Dev-only runtime guard for heading hierarchy.
 *
 * On every route change (and once after hydration), scans the document for
 * <h1>-<h6> tags and warns in the console if:
 *   - There isn't exactly one <h1>
 *   - The first heading after <h1> isn't <h2>
 *   - Any heading level is skipped (e.g. h2 → h4)
 *   - A heading is empty
 *
 * No-op in production builds — the build-time `scripts/audit-headings.mjs`
 * enforces the same rules against the prerendered HTML and fails CI.
 */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type Issue = { kind: string; detail: string };

function scan(): Issue[] {
  if (typeof document === "undefined") return [];
  const nodes = Array.from(
    document.querySelectorAll("main h1, main h2, main h3, main h4, main h5, main h6"),
  ) as HTMLHeadingElement[];

  const issues: Issue[] = [];
  const h1s = nodes.filter((n) => n.tagName === "H1");

  if (h1s.length === 0) issues.push({ kind: "no-h1", detail: "No <h1> found in <main>" });
  else if (h1s.length > 1)
    issues.push({
      kind: "multiple-h1",
      detail: `${h1s.length} <h1> tags (must be exactly 1)`,
    });

  const firstNonH1 = nodes.find((n) => n.tagName !== "H1");
  if (firstNonH1 && firstNonH1.tagName !== "H2") {
    issues.push({
      kind: "first-not-h2",
      detail: `First heading after <h1> is <${firstNonH1.tagName.toLowerCase()}>: "${(firstNonH1.textContent ?? "").slice(0, 60)}"`,
    });
  }

  let prev = 0;
  for (const n of nodes) {
    const level = parseInt(n.tagName.substring(1), 10);
    const text = (n.textContent ?? "").trim();
    if (text.length === 0) {
      issues.push({ kind: "empty", detail: `<${n.tagName.toLowerCase()}> is empty` });
    }
    if (prev > 0 && level > prev + 1) {
      issues.push({
        kind: "skip",
        detail: `Skipped level: h${prev} → h${level} ("${text.slice(0, 60)}")`,
      });
    }
    prev = level;
  }

  return issues;
}

export function useHeadingHierarchyGuard() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (!import.meta.env.DEV) return;
    // Wait for Suspense + hydration to settle
    const t = window.setTimeout(() => {
      const issues = scan();
      if (issues.length > 0) {
        // eslint-disable-next-line no-console
        console.warn(
          `[heading-guard] ${pathname} — ${issues.length} issue(s):\n` +
            issues.map((i) => `  • [${i.kind}] ${i.detail}`).join("\n"),
        );
      }
    }, 1500);
    return () => window.clearTimeout(t);
  }, [pathname]);
}
