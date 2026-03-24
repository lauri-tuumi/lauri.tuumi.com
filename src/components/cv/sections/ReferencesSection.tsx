"use client";

import React, { useState } from "react";
import type { Reference, Theme } from "@/lib/types";
import { SectionHeading } from "../SectionHeading";
import { ContactLink } from "../ContactLink";
import { LinkedInIcon } from "../../icons/LinkedInIcon";

const GitHubIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 16 16"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
  </svg>
);

type NoteTemplate = {
  prefix: string;
  conjunction: string;
  oxfordComma: boolean;
  suffix: string;
};

function buildNote(firstNames: string[], t: NoteTemplate): string {
  const sep = t.oxfordComma ? `, ${t.conjunction} ` : ` ${t.conjunction} `;
  const nameStr =
    firstNames.length <= 1
      ? (firstNames[0] ?? "")
      : firstNames.slice(0, -1).join(", ") + sep + firstNames[firstNames.length - 1];
  return [t.prefix, nameStr, t.suffix].filter(Boolean).join(" ");
}

type VerificationLabels = {
  pr: string;
  linkedin_post: string;
  howToVerifyLink: string;
  dialog: { title: string; body: string[]; close: string };
};

export const ReferencesSection = ({
  items,
  label,
  noteTemplate,
  linkedinLabel,
  verificationLabels,
  theme,
}: {
  items: Reference[];
  label: string;
  noteTemplate: NoteTemplate;
  linkedinLabel: string;
  verificationLabels: VerificationLabels;
  theme: Theme;
}) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <section>
      <SectionHeading labelColor={theme.sectionLabel} lineColor={theme.sectionLine}>
        {label}
      </SectionHeading>

      <div style={{ marginBottom: "1rem" }}>
        <p style={{ fontSize: "0.78rem", color: theme.textMuted, margin: "0 0 0.35rem 0", fontStyle: "italic" }}>
          {buildNote(items.map((r) => r.firstName), noteTemplate)}{" "}
          <span style={{ color: theme.primary }}>&#x2764;</span>
        </p>
        <button
          onClick={() => setDialogOpen(true)}
          style={{
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
            fontSize: "0.73rem",
            fontWeight: 700,
            color: theme.secondary,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          {verificationLabels.howToVerifyLink}
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "1rem",
        }}
      >
        {items.map((ref) => (
          <div
            key={`${ref.firstName} ${ref.lastName}`}
            style={{
              background: theme.cardBg,
              border: `1px solid ${theme.border}`,
              borderTop: `3px solid ${theme.primary}`,
              padding: "1rem",
              boxShadow: "2px 2px 0px rgba(0, 212, 255, 0.1)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontWeight: 900,
                fontSize: "0.88rem",
                color: theme.text,
                textTransform: "uppercase",
                fontStyle: "italic",
              }}
            >
              {ref.firstName} {ref.lastName}
            </div>
            <div
              style={{
                fontSize: "0.76rem",
                fontWeight: 700,
                color: theme.secondary,
                marginTop: "0.1rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              {ref.title}
            </div>
            <div style={{ fontSize: "0.73rem", color: theme.textMuted }}>
              {ref.company}
            </div>

            <div
              style={{
                marginTop: "0.75rem",
                fontSize: "0.73rem",
                color: theme.textMuted,
                lineHeight: 1.55,
                fontStyle: "italic",
                borderLeft: `2px solid ${theme.primary}`,
                paddingLeft: "0.6rem",
                flexGrow: 1,
              }}
            >
              &ldquo;{ref.quote}&rdquo;
            </div>

            <div
              style={{
                marginTop: "0.85rem",
                display: "flex",
                gap: "0.75rem",
                flexWrap: "wrap",
              }}
            >
              <ContactLink href={ref.linkedin} small>
                <LinkedInIcon small /> {linkedinLabel}
              </ContactLink>
              <a
                href={ref.verification.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  fontSize: "0.73rem",
                  color: ref.verification.type === "pr" ? "#6e7681" : theme.secondary,
                  textDecoration: "none",
                }}
              >
                {ref.verification.type === "pr" ? <GitHubIcon /> : <LinkedInIcon small />}
                {verificationLabels[ref.verification.type]}
              </a>
            </div>
          </div>
        ))}
      </div>

      {dialogOpen && (
        <div
          onClick={() => setDialogOpen(false)}
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
              background: theme.cardBg,
              border: `1px solid ${theme.border}`,
              borderTop: `3px solid ${theme.primary}`,
              padding: "1.5rem",
              maxWidth: 420,
              width: "90vw",
              boxShadow: "6px 6px 0px rgba(0, 212, 255, 0.2)",
            }}
          >
            <div
              style={{
                fontWeight: 900,
                fontSize: "0.95rem",
                color: theme.text,
                marginBottom: "1rem",
                textTransform: "uppercase",
                fontStyle: "italic",
              }}
            >
              {verificationLabels.dialog.title}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              {verificationLabels.dialog.body.map((para, i) => (
                <p
                  key={i}
                  style={{
                    margin: 0,
                    fontSize: "0.8rem",
                    color: theme.textMuted,
                    lineHeight: 1.6,
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
            <button
              onClick={() => setDialogOpen(false)}
              style={{
                marginTop: "1.25rem",
                background: theme.primary,
                color: "#000",
                border: "none",
                padding: "0.5rem 1.1rem",
                fontSize: "0.78rem",
                fontWeight: 800,
                cursor: "pointer",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              {verificationLabels.dialog.close}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
