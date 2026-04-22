/**
 * HMR fallback watchdog (dev-only).
 *
 * Vite's HMR can occasionally get stuck after rapid successive edits:
 *  - the WebSocket disconnects and never reconnects,
 *  - an update is applied but Fast Refresh fails silently,
 *  - the overlay shows a build error that never clears.
 *
 * This module hooks into `import.meta.hot` and the runtime to detect those
 * failure modes and trigger a hard `window.location.reload()` as a last-resort
 * recovery — preventing the user from staring at a frozen preview.
 *
 * Production builds: this file is a no-op (the `import.meta.hot` branch is
 * tree-shaken by Vite, and the runtime guards bail out).
 */

const RELOAD_DEBOUNCE_MS = 1500;
const UPDATE_TIMEOUT_MS = 8000;
const WS_RECONNECT_GRACE_MS = 6000;

let reloadScheduled = false;

function scheduleReload(reason: string) {
  if (reloadScheduled) return;
  if (typeof window === "undefined") return;
  reloadScheduled = true;
  // eslint-disable-next-line no-console
  console.warn(`[hmr-fallback] ${reason} — reloading preview…`);
  window.setTimeout(() => {
    try {
      window.location.reload();
    } catch {
      /* ignore */
    }
  }, RELOAD_DEBOUNCE_MS);
}

export function installHmrFallback() {
  if (typeof window === "undefined") return;
  if (!import.meta.hot) return; // production build → bail

  const hot = import.meta.hot;
  let updateTimer: number | null = null;

  // 1. If an HMR update starts but never finishes, force reload.
  hot.on("vite:beforeUpdate", () => {
    if (updateTimer !== null) window.clearTimeout(updateTimer);
    updateTimer = window.setTimeout(() => {
      scheduleReload("HMR update timed out");
    }, UPDATE_TIMEOUT_MS);
  });

  hot.on("vite:afterUpdate", () => {
    if (updateTimer !== null) {
      window.clearTimeout(updateTimer);
      updateTimer = null;
    }
  });

  // 2. Build errors that linger → reload to re-establish a clean state.
  hot.on("vite:error", () => {
    scheduleReload("Vite build error received");
  });

  // 3. WebSocket dropped — give Vite a chance to reconnect, otherwise reload.
  hot.on("vite:ws:disconnect", () => {
    window.setTimeout(() => {
      // If we still haven't reconnected, force a reload.
      // We can't easily detect reconnect, so we always reload after the grace
      // period if the page is visible and focused — safe because Vite's own
      // reconnect would have already triggered a full refresh on success.
      if (document.visibilityState === "visible") {
        scheduleReload("HMR WebSocket disconnected");
      }
    }, WS_RECONNECT_GRACE_MS);
  });

  // 4. Catch unhandled runtime errors that look like Fast Refresh corruption
  //    (e.g. "Cannot read properties of undefined (reading 'type')" coming
  //    from React reconciler after a bad HMR swap).
  window.addEventListener("error", (ev) => {
    const msg = ev.message || "";
    if (
      msg.includes("Fast Refresh") ||
      msg.includes("hot update") ||
      msg.includes("Failed to fetch dynamically imported module")
    ) {
      scheduleReload(`Runtime HMR error: ${msg.slice(0, 80)}`);
    }
  });
}
