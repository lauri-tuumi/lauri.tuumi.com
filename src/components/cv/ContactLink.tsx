import React from "react";

export const ContactLink = ({
  href,
  children,
  small = false,
}: {
  href: string;
  children: React.ReactNode;
  small?: boolean;
}) => {
  return (
    <a
      href={href}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.35rem",
        color: "inherit",
        textDecoration: "none",
        fontSize: small ? "0.73rem" : undefined,
      }}
    >
      {children}
    </a>
  );
};
