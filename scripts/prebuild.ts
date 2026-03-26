import { main as generateFavicon } from "./generate-favicon";
import { main as generateOgImage } from "./generate-og-image";
import { main as generatePdfs } from "./generate-pdfs";

async function prebuild() {
  await generateFavicon();
  await generateOgImage();
  await generatePdfs();
}

prebuild().catch((err) => {
  console.error(err);
  process.exit(1);
});
