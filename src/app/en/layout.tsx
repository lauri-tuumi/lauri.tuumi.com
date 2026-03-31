import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lauri.tuumi.com"),
  alternates: { canonical: "/" },
};

const EnRedirectLayout = ({ children }: { children: React.ReactNode }) => (
  <html>
    <head>
      <meta httpEquiv="refresh" content="0;url=/" />
      <link rel="canonical" href="https://lauri.tuumi.com/" />
    </head>
    <body>{children}</body>
  </html>
);

export default EnRedirectLayout;
