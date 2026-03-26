import { Space_Grotesk } from "next/font/google";
import "../globals.css";
import { createMetadata, createJsonLd } from "@/lib/seo";

const spaceGrotesk = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = createMetadata("en");

const EnLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en" className={`${spaceGrotesk.className} h-full antialiased`}>
    <head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(createJsonLd("en")) }}
      />
    </head>
    <body className="min-h-full">{children}</body>
  </html>
);

export default EnLayout;
