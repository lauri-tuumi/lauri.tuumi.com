import React, { useEffect, useId, useRef } from "react";

export const EmailModal = ({
  open,
  onClose,
  email,
  copied,
  copyError,
  onCopy,
  labels,
}: {
  open: boolean;
  onClose: () => void;
  email: string;
  copied: boolean;
  copyError: boolean;
  onCopy: () => void | Promise<void>;
  labels: {
    dialogTitle: string;
    copy: string;
    copied: string;
    copyFailed: string;
    openMailApp: string;
    close: string;
  };
}) => {
  const titleId = useId();
  const descId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, open]);

  if (!open) return null;

  return (
    <div
      onClick={onClose}
      role="presentation"
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
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
        style={{
          background: "var(--cv-card-bg)",
          border: "1px solid var(--cv-border)",
          borderTop: "3px solid var(--cv-primary)",
          padding: "1.5rem",
          minWidth: 300,
          maxWidth: "min(90vw, 28rem)",
          boxShadow: "6px 6px 0px rgba(0, 212, 255, 0.2)",
        }}
      >
        <div style={{ display: "flex", alignItems: "start", justifyContent: "space-between", gap: "1rem" }}>
          <div>
            <h2
              id={titleId}
              style={{
                margin: 0,
                fontSize: "0.85rem",
                color: "var(--cv-text)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              {labels.dialogTitle}
            </h2>
            <p id={descId} style={{ margin: "0.65rem 0 0", fontSize: "0.85rem", color: "var(--cv-text-muted)" }}>
              <strong style={{ color: "var(--cv-text)" }}>{email}</strong>
            </p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label={labels.close}
            style={{
              background: "transparent",
              color: "var(--cv-text-muted)",
              border: "1px solid var(--cv-border)",
              padding: "0.35rem 0.55rem",
              cursor: "pointer",
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            {labels.close}
          </button>
        </div>
        {copyError && (
          <p style={{ margin: "1rem 0 0", fontSize: "0.78rem", color: "var(--cv-primary)" }}>
            {labels.copyFailed}
          </p>
        )}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "1rem" }}>
          <button
            type="button"
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
            {copied ? labels.copied : labels.copy}
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
            {labels.openMailApp}
          </a>
        </div>
      </div>
    </div>
  );
};
