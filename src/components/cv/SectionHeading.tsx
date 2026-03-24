import React from "react";

export const SectionHeading = ({
  children,
  labelColor,
  lineColor,
}: {
  children: React.ReactNode;
  labelColor: string;
  lineColor: string;
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        marginBottom: "1.25rem",
      }}
    >
      <h2
        style={{
          fontSize: "0.68rem",
          fontWeight: 900,
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: labelColor,
          margin: 0,
          whiteSpace: "nowrap",
        }}
      >
        {children}
      </h2>
      <div style={{ flex: 1, height: 1, background: lineColor }} />
    </div>
  );
};
