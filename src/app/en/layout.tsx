import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "../globals.css";
import { ui } from "@/lib/translations";

const spaceGrotesk = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `Lauri Tuumi – ${ui.en.subtitle}`,
  description: ui.en.summary[0],
  alternates: {
    languages: {
      en: "/en",
      fi: "/fi",
    },
  },
};

const EnLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en" className={`${spaceGrotesk.className} h-full antialiased`}>
    <body className="min-h-full">{children}</body>
  </html>
);

export default EnLayout;
