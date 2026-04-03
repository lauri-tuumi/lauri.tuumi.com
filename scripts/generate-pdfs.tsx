import { renderToFile, Font } from "@react-pdf/renderer";
import QRCode from "qrcode";
import React from "react";
import path from "path";
import fs from "fs";
import { CvPdfDocument } from "../src/components/cv/pdf/CvPdfDocument";
import { zLang, getPdfFilename } from "../src/lib/types";

Font.register({
  family: "Space Grotesk",
  fonts: [
    {
      src: require.resolve("@fontsource/space-grotesk/files/space-grotesk-latin-700-normal.woff"),
      fontWeight: 700,
    },
  ],
});

async function main() {
  fs.mkdirSync(path.join(process.cwd(), "public"), { recursive: true });

  await Promise.all(
    zLang.options.map(async (lang) => {
      const siteUrl = lang === "en" ? "https://lauri.tuumi.com" : `https://lauri.tuumi.com/${lang}`;
      const qrDataUrl = await QRCode.toDataURL(siteUrl, {
        width: 300,
        margin: 1,
        errorCorrectionLevel: "M",
      });
      const pfpSrc = path.join(process.cwd(), "public", "pfp.jpg");
      const outPath = path.join(process.cwd(), "public", getPdfFilename(lang));
      await renderToFile(
        <CvPdfDocument lang={lang} qrDataUrl={qrDataUrl} siteUrl={siteUrl} pfpSrc={pfpSrc} />,
        outPath
      );
      console.log(`Generated ${outPath}`);
    })
  );
}

export { main };

if (require.main === module) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
