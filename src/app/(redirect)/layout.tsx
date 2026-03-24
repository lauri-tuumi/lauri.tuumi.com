import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Lauri Tuumi",
};

const RedirectLayout = ({ children }: { children: React.ReactNode }) => (
  <html>
    <body>{children}</body>
  </html>
);

export default RedirectLayout;
