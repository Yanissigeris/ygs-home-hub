import * as React from "react";

export interface VideoPerfMetrics {
  src: string;
  mountTime: number;          // ms from page nav to <video> mount
  loadStart?: number;         // ms from mount to first byte requested
  firstByte?: number;         // ms from loadstart to first progress event
  loadedMetadata?: number;    // ms from mount to metadata loaded
  loadedData?: number;        // ms from mount to first frame decoded
  canPlay?: number;           // ms from mount to canplay
  firstPlay?: number;         // ms from mount to actual playback start
  fileSizeKB?: number;        // transferred size from Resource Timing
  durationMs?: number;        // total download duration from Resource Timing
}

const FORMAT = (n?: number) =>
  n === undefined ? "—" : `${Math.round(n)}ms`;

export const VideoPerfOverlay: React.FC<{ metrics: VideoPerfMetrics }> = ({ metrics }) => {
  const enabled = React.useMemo(() => {
    if (typeof window === "undefined") return false;
    const qs = new URLSearchParams(window.location.search);
    return qs.get("debug") === "video" || localStorage.getItem("videoDebug") === "1";
  }, []);

  if (!enabled) return null;

  // Derived metrics
  const downloadMs =
    metrics.loadedMetadata !== undefined && metrics.loadStart !== undefined
      ? metrics.loadedMetadata - metrics.loadStart
      : undefined;

  const decodeMs =
    metrics.loadedData !== undefined && metrics.loadedMetadata !== undefined
      ? metrics.loadedData - metrics.loadedMetadata
      : undefined;

  const playStartMs =
    metrics.firstPlay !== undefined && metrics.canPlay !== undefined
      ? metrics.firstPlay - metrics.canPlay
      : undefined;

  // Effective throughput in Mbps using full download duration + size
  const throughputMbps =
    metrics.fileSizeKB !== undefined && metrics.durationMs !== undefined && metrics.durationMs > 0
      ? (metrics.fileSizeKB * 8) / (metrics.durationMs / 1000) / 1024
      : undefined;

  // Bottleneck verdict
  let verdict: { label: string; color: string } | null = null;
  if (downloadMs !== undefined && decodeMs !== undefined) {
    if (downloadMs > decodeMs * 3) verdict = { label: "Bottleneck: NETWORK 🌐", color: "#FF8A65" };
    else if (decodeMs > downloadMs * 2) verdict = { label: "Bottleneck: DECODE 🎞", color: "#BA68C8" };
    else verdict = { label: "Balanced ✓", color: "#7BC47F" };
  }

  return (
    <div
      style={{
        position: "fixed",
        bottom: 12,
        left: 12,
        zIndex: 99999,
        background: "rgba(0,0,0,0.88)",
        color: "#A88A5A",
        fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
        fontSize: 11,
        lineHeight: 1.55,
        padding: "10px 14px",
        borderRadius: 6,
        border: "1px solid #A88A5A",
        maxWidth: 360,
        pointerEvents: "auto",
      }}
    >
      <div style={{ color: "#fff", fontWeight: 600, marginBottom: 6 }}>
        ▸ Hero Video Perf
      </div>
      <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 10, marginBottom: 8, wordBreak: "break-all" }}>
        {metrics.src.split("/").pop()}
      </div>

      <div style={{ color: "rgba(255,255,255,0.85)", fontWeight: 600, marginBottom: 2 }}>Timeline (from mount)</div>
      <div>loadstart&nbsp;&nbsp; {FORMAT(metrics.loadStart)}</div>
      <div>first byte&nbsp; {FORMAT(metrics.firstByte)}</div>
      <div>metadata&nbsp;&nbsp;&nbsp;{FORMAT(metrics.loadedMetadata)}</div>
      <div>1st frame&nbsp;&nbsp;{FORMAT(metrics.loadedData)}</div>
      <div>canplay&nbsp;&nbsp;&nbsp;&nbsp;{FORMAT(metrics.canPlay)}</div>
      <div style={{ color: "#7BC47F", fontWeight: 600 }}>
        ▶ play&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{FORMAT(metrics.firstPlay)}
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.15)", marginTop: 8, paddingTop: 6 }}>
        <div style={{ color: "rgba(255,255,255,0.85)", fontWeight: 600, marginBottom: 2 }}>Phases</div>
        <div>📥 download&nbsp; <span style={{ color: "#FF8A65" }}>{FORMAT(downloadMs)}</span></div>
        <div>🎞 decode&nbsp;&nbsp;&nbsp; <span style={{ color: "#BA68C8" }}>{FORMAT(decodeMs)}</span></div>
        <div>▶ play-gap&nbsp; <span style={{ color: "rgba(255,255,255,0.6)" }}>{FORMAT(playStartMs)}</span></div>
      </div>

      {(metrics.fileSizeKB !== undefined || throughputMbps !== undefined) && (
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.15)", marginTop: 8, paddingTop: 6 }}>
          <div style={{ color: "rgba(255,255,255,0.85)", fontWeight: 600, marginBottom: 2 }}>Network</div>
          {metrics.fileSizeKB !== undefined && (
            <div>size:&nbsp;&nbsp;&nbsp;&nbsp; {metrics.fileSizeKB.toFixed(1)} KB</div>
          )}
          {metrics.durationMs !== undefined && (
            <div>total dl:&nbsp; {FORMAT(metrics.durationMs)}</div>
          )}
          {throughputMbps !== undefined && (
            <div style={{ color: "#7BC47F", fontWeight: 600 }}>
              ⚡ {throughputMbps.toFixed(2)} Mbps effective
            </div>
          )}
        </div>
      )}

      {verdict && (
        <div
          style={{
            marginTop: 8,
            padding: "4px 8px",
            background: "rgba(255,255,255,0.05)",
            borderRadius: 4,
            color: verdict.color,
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          {verdict.label}
        </div>
      )}

      <button
        onClick={() => {
          localStorage.removeItem("videoDebug");
          window.location.reload();
        }}
        style={{
          marginTop: 8,
          fontSize: 10,
          background: "transparent",
          color: "rgba(255,255,255,0.5)",
          border: "1px solid rgba(255,255,255,0.2)",
          padding: "2px 6px",
          borderRadius: 3,
          cursor: "pointer",
        }}
      >
        hide
      </button>
    </div>
  );
};
