import { renderToFile } from "@react-pdf/renderer";
import QRCode from "qrcode";
import React from "react";
import path from "path";
import fs from "fs";
import { CvPdfDocument } from "../src/components/cv/pdf/CvPdfDocument";
import { zLang, getPdfFilename } from "../src/lib/types";

async function main() {
  fs.mkdirSync(path.join(process.cwd(), "public"), { recursive: true });

  await Promise.all(
    zLang.options.map(async (lang) => {
      const siteUrl = `https://lauri.tuumi.com/${lang}`;
      const qrDataUrl = await QRCode.toDataURL(siteUrl, {
        width: 300,
        margin: 1,
        errorCorrectionLevel: "M",
      });
      const outPath = path.join(process.cwd(), "public", getPdfFilename(lang));
      await renderToFile(
        <CvPdfDocument lang={lang} qrDataUrl={qrDataUrl} siteUrl={siteUrl} />,
        outPath
      );
      console.log(`Generated ${outPath}`);
    })
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
