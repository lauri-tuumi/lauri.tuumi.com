"use client";
import React, { useState } from "react";
import { EmailIcon } from "../icons/EmailIcon";
import { EmailModal } from "./EmailModal";

export const EmailButton = ({ email }: { email: string }) => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      setOpen(false);
    }, 1200);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.4rem",
          background: "var(--cv-primary)",
          color: "#000",
          border: "none",
          padding: "0.45rem 1rem",
          fontSize: "0.78rem",
          fontWeight: 800,
          cursor: "pointer",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
        }}
      >
        <EmailIcon /> Email me
      </button>
      <EmailModal
        open={open}
        onClose={() => setOpen(false)}
        email={email}
        copied={copied}
        onCopy={handleCopy}
      />
    </>
  );
};
