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
  durationMs?: number;        // download duration from Resource Timing
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

  return (
    <div
      style={{
        position: "fixed",
        bottom: 12,
        left: 12,
        zIndex: 99999,
        background: "rgba(0,0,0,0.85)",
        color: "#A88A5A",
        fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
        fontSize: 11,
        lineHeight: 1.5,
        padding: "10px 14px",
        borderRadius: 6,
        border: "1px solid #A88A5A",
        maxWidth: 320,
        pointerEvents: "auto",
      }}
    >
      <div style={{ color: "#fff", fontWeight: 600, marginBottom: 6 }}>
        ▸ Hero Video Perf
      </div>
      <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 10, marginBottom: 6, wordBreak: "break-all" }}>
        {metrics.src.split("/").pop()}
      </div>
      <div>mount&nbsp;&nbsp;&nbsp;&nbsp; {FORMAT(metrics.mountTime)}</div>
      <div>loadstart&nbsp; {FORMAT(metrics.loadStart)}</div>
      <div>first byte&nbsp;{FORMAT(metrics.firstByte)}</div>
      <div>metadata&nbsp;&nbsp;{FORMAT(metrics.loadedMetadata)}</div>
      <div>1st frame&nbsp;{FORMAT(metrics.loadedData)}</div>
      <div>canplay&nbsp;&nbsp;&nbsp;{FORMAT(metrics.canPlay)}</div>
      <div style={{ color: "#7BC47F", fontWeight: 600 }}>
        ▶ play&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{FORMAT(metrics.firstPlay)}
      </div>
      {metrics.fileSizeKB !== undefined && (
        <div style={{ marginTop: 6, color: "rgba(255,255,255,0.7)" }}>
          size: {metrics.fileSizeKB.toFixed(0)} KB · dl: {FORMAT(metrics.durationMs)}
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
