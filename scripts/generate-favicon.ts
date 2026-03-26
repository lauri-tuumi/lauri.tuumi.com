import sharp from "sharp";
import pngToIco from "png-to-ico";
import path from "path";
import fs from "fs";

async function main() {
  const svgPath = path.join(process.cwd(), "favicon.svg");
  const svgBuffer = fs.readFileSync(svgPath);

  const sizes = [16, 32, 48] as const;
  const pngBuffers = await Promise.all(
    sizes.map((size) =>
      sharp(svgBuffer).resize(size, size).png().toBuffer()
    )
  );

  const icoBuffer = await pngToIco(pngBuffers);
  fs.writeFileSync(path.join(process.cwd(), "src", "app", "favicon.ico"), icoBuffer);
  console.log("Generated src/app/favicon.ico");

  fs.copyFileSync(svgPath, path.join(process.cwd(), "src", "app", "icon.svg"));
  console.log("Copied src/app/icon.svg");
}

export { main };

if (require.main === module) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
