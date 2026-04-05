"use client";
import React, { useState } from "react";
import { EmailIcon } from "../icons/EmailIcon";
import { EmailModal } from "./EmailModal";

type EmailLabels = {
  cta: string;
  dialogTitle: string;
  copy: string;
  copied: string;
  copyFailed: string;
  openMailApp: string;
  close: string;
};

export const EmailButton = ({ email, labels }: { email: string; labels: EmailLabels }) => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopyError(false);
      setCopied(true);
      window.setTimeout(() => {
        setCopied(false);
        setOpen(false);
      }, 1200);
    } catch {
      setCopied(false);
      setCopyError(true);
    }
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
        <EmailIcon /> {labels.cta}
      </button>
      <EmailModal
        open={open}
        onClose={() => {
          setOpen(false);
          setCopied(false);
          setCopyError(false);
        }}
        email={email}
        copied={copied}
        copyError={copyError}
        onCopy={handleCopy}
        labels={labels}
      />
    </>
  );
};
