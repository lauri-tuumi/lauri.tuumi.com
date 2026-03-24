import React from "react";
import type { Skill, Theme } from "@/lib/types";
import { SectionHeading } from "../SectionHeading";

export const SkillsSection = ({
  items,
  label,
  theme,
  tierLabels,
}: {
  items: Skill[];
  label: string;
  theme: Theme;
  tierLabels: { core: string; familiar: string };
}) => {
  const coreSkills = items.filter((s) => s.level >= 4);
  const familiarSkills = items.filter((s) => s.level < 4);

  return (
    <section>
      <SectionHeading labelColor={theme.sectionLabel} lineColor={theme.sectionLine}>
        {label}
      </SectionHeading>

      {/* Core skills — sticker label style */}
      <div style={{ marginBottom: "1.25rem" }}>
        <div
          style={{
            fontSize: "0.65rem",
            fontWeight: 900,
            color: theme.secondary,
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            marginBottom: "0.5rem",
          }}
        >
          {tierLabels.core}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
          {coreSkills.map((s) => (
            <span
              key={s.name}
              style={{
                display: "inline-block",
                background: theme.primary,
                color: "#000",
                padding: "0.2rem 0.5rem",
                fontSize: "0.7rem",
                fontWeight: 800,
                textTransform: "uppercase",
                boxShadow: "2px 2px 0px #000",
              }}
            >
              {s.name}
            </span>
          ))}
        </div>
      </div>

      {/* Familiar skills — bordered style */}
      <div>
        <div
          style={{
            fontSize: "0.65rem",
            fontWeight: 900,
            color: theme.textMuted,
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            marginBottom: "0.5rem",
          }}
        >
          {tierLabels.familiar}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
          {familiarSkills.map((s) => (
            <span
              key={s.name}
              style={{
                display: "inline-block",
                background: "transparent",
                color: theme.textMuted,
                border: `1px solid ${theme.border}`,
                padding: "0.2rem 0.5rem",
                fontSize: "0.68rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              {s.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
