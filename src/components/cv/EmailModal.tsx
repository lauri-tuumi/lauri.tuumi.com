import React from "react";

export const EmailModal = ({
  open,
  onClose,
  email,
  copied,
  onCopy,
}: {
  open: boolean;
  onClose: () => void;
  email: string;
  copied: boolean;
  onCopy: () => void;
}) => {
  if (!open) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.7)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "var(--cv-card-bg)",
          border: "1px solid var(--cv-border)",
          borderTop: "3px solid var(--cv-primary)",
          padding: "1.5rem",
          minWidth: 300,
          boxShadow: "6px 6px 0px rgba(0, 212, 255, 0.2)",
        }}
      >
        <p style={{ margin: "0 0 1rem", fontSize: "0.85rem", color: "var(--cv-text-muted)" }}>
          <strong style={{ color: "var(--cv-text)" }}>{email}</strong>
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <button
            onClick={onCopy}
            style={{
              background: "var(--cv-primary)",
              color: "#000",
              border: "none",
              padding: "0.55rem 1rem",
              fontSize: "0.78rem",
              fontWeight: 800,
              cursor: "pointer",
              textAlign: "left",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            {copied ? "Copied!" : "Copy address"}
          </button>
          <a
            href={`mailto:${email}`}
            style={{
              display: "block",
              background: "var(--cv-muted-bg)",
              color: "var(--cv-text-muted)",
              border: "1px solid var(--cv-border)",
              padding: "0.55rem 1rem",
              fontSize: "0.78rem",
              fontWeight: 600,
              textDecoration: "none",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Open in mail app
          </a>
        </div>
      </div>
    </div>
  );
};
