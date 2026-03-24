import React from "react";
import Link from "next/link";
import { LinkedInIcon } from "../icons/LinkedInIcon";

export const Header = ({
  subtitle,
  summary,
  toggleLabel,
  linkedinUrl,
  otherLangHref,
  emailSlot,
  downloadPdfSlot,
}: {
  subtitle: string;
  summary: string[];
  toggleLabel: string;
  linkedinUrl: string;
  otherLangHref: string;
  emailSlot?: React.ReactNode;
  downloadPdfSlot?: React.ReactNode;
}) => {
  return (
    <header
      style={{
        position: "relative",
        overflow: "hidden",
        background: "var(--cv-page-bg)",
        borderBottom: "2px solid rgba(0, 212, 255, 0.2)",
      }}
    >
      {/* Decorative glow */}
      <div
        style={{
          position: "absolute",
          top: "-30%",
          right: "-10%",
          width: 400,
          height: 400,
          background: "rgba(0, 212, 255, 0.06)",
          filter: "blur(120px)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-20%",
          left: "-10%",
          width: 300,
          height: 300,
          background: "rgba(255, 0, 255, 0.04)",
          filter: "blur(100px)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 1000,
          margin: "0 auto",
          padding: "3rem 2rem 2.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        {/* Status bar */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.75rem",
            padding: "0.3rem 0.75rem",
            background: "rgba(0, 212, 255, 0.08)",
            borderLeft: "3px solid var(--cv-primary)",
            alignSelf: "flex-start",
          }}
        >
          <span
            style={{
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--cv-secondary)",
            }}
          >
            PROFILE_ACTIVE
          </span>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1.75rem" }}>
          {/* Avatar */}
          <div
            style={{
              width: 108,
              height: 108,
              border: "2px solid var(--cv-primary)",
              background: "var(--cv-muted-bg)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.6rem",
              fontWeight: 900,
              color: "var(--cv-primary)",
              flexShrink: 0,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              fontStyle: "italic",
              position: "relative",
            }}
          >
            <span>LT</span>
            {/* Corner accent */}
            <div
              style={{
                position: "absolute",
                top: -2,
                right: -2,
                width: 12,
                height: 12,
                borderTop: "2px solid var(--cv-tertiary)",
                borderRight: "2px solid var(--cv-tertiary)",
              }}
            />
          </div>

          {/* Name + title */}
          <div style={{ flex: 1 }}>
            <h1
              style={{
                fontSize: "clamp(2rem, 6vw, 3.5rem)",
                fontWeight: 900,
                lineHeight: 0.9,
                letterSpacing: "-0.03em",
                margin: 0,
                textTransform: "uppercase",
                fontStyle: "italic",
              }}
            >
              <span style={{ color: "#ffffff" }}>Lauri </span>
              <span style={{ color: "var(--cv-primary)" }}>Tuumi</span>
            </h1>
            <p
              style={{
                marginTop: "0.6rem",
                fontSize: "0.95rem",
                color: "var(--cv-secondary)",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              {subtitle}
            </p>
            <Link
              href={otherLangHref}
              style={{
                display: "inline-block",
                marginTop: "0.35rem",
                color: "var(--cv-text-muted)",
                fontSize: "0.73rem",
                fontWeight: 600,
                textDecoration: "none",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
                paddingBottom: "0.15rem",
              }}
            >
              {toggleLabel}
            </Link>
          </div>
        </div>

        {/* Summary */}
        <div style={{ borderLeft: "1px solid var(--cv-border)", paddingLeft: "1.25rem", maxWidth: "56ch" }}>
          {summary.map((para, i) => (
            <p
              key={i}
              style={{
                margin: i === 0 ? 0 : "0.5rem 0 0",
                fontSize: "0.85rem",
                color: "var(--cv-text-muted)",
                fontWeight: 400,
                lineHeight: 1.65,
              }}
            >
              {para}
            </p>
          ))}
        </div>

        {/* Action buttons */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.65rem",
          }}
        >
          {emailSlot}

          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              background: "transparent",
              color: "var(--cv-secondary)",
              border: "1px solid var(--cv-border)",
              padding: "0.45rem 1rem",
              fontSize: "0.78rem",
              fontWeight: 700,
              textDecoration: "none",
              cursor: "pointer",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            <LinkedInIcon /> LinkedIn
          </a>

          {downloadPdfSlot}
        </div>
      </div>
    </header>
  );
};
