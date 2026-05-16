import React from "react";
import Image from "next/image";
import type { Theme } from "@/lib/types";
import { SectionHeading } from "../SectionHeading";

type NoteItem = {
  title: string;
  body: string | string[];
  link?: { href: string; label: string };
  logo?: { src: string; pdfSrc: string; alt: string };
};

export const ProjectNotesSection = ({
  heading,
  items,
  theme,
}: {
  heading: string;
  items: NoteItem[];
  theme: Theme;
}) => {
  return (
    <section>
      <SectionHeading labelColor={theme.sectionLabel} lineColor={theme.sectionLine}>
        {heading}
      </SectionHeading>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {items.map((item) => (
          <div
            key={item.title}
            style={{
              background: theme.cardBg,
              border: `1px solid ${theme.border}`,
              borderTop: `3px solid ${theme.primary}`,
              padding: "0.85rem 1rem",
              boxShadow: "2px 2px 0px rgba(0, 212, 255, 0.1)",
            }}
          >
            <div
              style={
                item.logo
                  ? {
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginBottom: "0.75rem",
                    }
                  : undefined
              }
            >
              {item.logo && (
                <Image
                  src={item.logo.src}
                  alt={item.logo.alt}
                  width={74}
                  height={46}
                  style={{
                    display: "block",
                    flexShrink: 0,
                  }}
                />
              )}
              <div
                style={{
                  fontWeight: 800,
                  fontSize: "0.78rem",
                  color: theme.text,
                  marginBottom: item.logo ? 0 : "0.35rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  lineHeight: 1.25,
                }}
              >
                {item.logo
                  ? item.title.split(" ").map((word) => (
                      <React.Fragment key={word}>
                        {word}
                        <br />
                      </React.Fragment>
                    ))
                  : item.title}
              </div>
            </div>
            <div
              style={{
                fontSize: "0.73rem",
                color: theme.textMuted,
                lineHeight: 1.5,
              }}
            >
              {Array.isArray(item.body)
                ? item.body.map((para, i) => (
                    <p key={i} style={{ margin: i > 0 ? "0.5em 0 0" : 0 }}>
                      {para}
                    </p>
                  ))
                : item.body}
            </div>
            {item.link && (
              <a
                href={item.link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: "0.5rem",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  color: theme.secondary,
                  textDecoration: "none",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                {item.link.label}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
