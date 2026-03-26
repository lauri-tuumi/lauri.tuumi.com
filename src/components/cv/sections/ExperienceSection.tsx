import React from "react";
import type { Job, Theme } from "@/lib/types";
import { SectionHeading } from "../SectionHeading";

export const ExperienceSection = ({
  items,
  label,
  theme,
}: {
  items: Job[];
  label: string;
  theme: Theme;
}) => {
  return (
    <section>
      <SectionHeading labelColor={theme.sectionLabel} lineColor={theme.sectionLine}>
        {label}
      </SectionHeading>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
        {items.map((job) => (
          <div
            key={job.company + job.period}
            style={{
              background: theme.cardBg,
              border: `1px solid ${theme.border}`,
              boxShadow: "4px 4px 0px 0px rgba(0, 212, 255, 0.15)",
              padding: "1.25rem",
              position: "relative",
            }}
          >
            {/* Top stripe */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: 3,
                background: `linear-gradient(90deg, ${theme.primary} 0%, ${theme.primary} 25%, transparent 25%, transparent 100%)`,
                backgroundSize: "20px 100%",
              }}
            />

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "0.5rem",
                marginBottom: "0.75rem",
              }}
            >
              <div>
                <div
                  style={{
                    fontWeight: 900,
                    fontSize: "1rem",
                    color: theme.text,
                    textTransform: "uppercase",
                    fontStyle: "italic",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {job.title}
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: theme.primary,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {job.company}
                </div>
              </div>
              <span
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  color: theme.secondary,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                }}
                className="job-period"
              >
                {job.period}
              </span>
            </div>

            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.4rem",
              }}
            >
              {job.bullets.map((bullet, i) => (
                <li
                  key={bullet}
                  style={{
                    display: "flex",
                    gap: "0.65rem",
                    fontSize: "0.8rem",
                    color: theme.textMuted,
                    lineHeight: 1.5,
                    alignItems: "flex-start",
                    borderBottom: i < job.bullets.length - 1 ? "1px solid rgba(255,255,255,0.03)" : "none",
                    paddingBottom: i < job.bullets.length - 1 ? "0.4rem" : 0,
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      marginTop: "0.3rem",
                      width: "0.5rem",
                      height: "0.5rem",
                      minWidth: "0.5rem",
                      background: theme.secondary,
                      display: "inline-block",
                    }}
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 1000px) {
          .job-period {
            flex-basis: 100%;
          }
        }
      `}</style>
    </section>
  );
};
