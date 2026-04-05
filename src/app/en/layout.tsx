import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lauri.tuumi.com"),
  alternates: { canonical: "/" },
  robots: {
    index: false,
    follow: true,
  },
};

const EnRedirectLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <head>
      <link rel="canonical" href="https://lauri.tuumi.com/" />
    </head>
    <body>{children}</body>
  </html>
);

export default EnRedirectLayout;
