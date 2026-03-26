import sharp from "sharp";
import path from "path";
import fs from "fs";

async function main() {
  const svgBuffer = fs.readFileSync(path.join(process.cwd(), "og-image.svg"));
  const outPath = path.join(process.cwd(), "src", "app", "opengraph-image.png");

  await sharp(svgBuffer).resize(1200, 630, { fit: "fill" }).png().toFile(outPath);
  console.log(`Generated ${outPath}`);
}

export { main };

if (require.main === module) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
