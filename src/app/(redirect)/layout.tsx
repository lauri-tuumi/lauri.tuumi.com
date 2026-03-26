import type { Metadata } from "next";
import "../globals.css";
import { createJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL("https://lauri.tuumi.com"),
  title: "Lauri Tuumi",
  verification: {
    google: "EhBTEivXaWO5ENPRMgOpsXS-jGO4NXLdZA2Uc8hbFEs",
  },
};

const RedirectLayout = ({ children }: { children: React.ReactNode }) => (
  <html>
    <head>
      <meta httpEquiv="refresh" content="0;url=/en" />
      <link rel="canonical" href="https://lauri.tuumi.com/en" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(createJsonLd("en")) }}
      />
    </head>
    <body>{children}</body>
  </html>
);

export default RedirectLayout;
