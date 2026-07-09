const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const sourceDir = path.join(__dirname, "source-assets");
const founderJpg = path.join(sourceDir, "founder.jpg");
const founderWebp = path.join(sourceDir, "founder.webp");

async function optimize() {
  if (!fs.existsSync(founderJpg)) {
    throw new Error(`Missing source image: ${founderJpg}`);
  }

  await sharp(founderJpg)
    .webp({ quality: 82, effort: 6 })
    .toFile(founderWebp);
}

optimize().catch((error) => {
  console.error(error);
  process.exit(1);
});
