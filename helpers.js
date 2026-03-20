
import sharp from "sharp";
import fs from "fs";
import path from "path";
import ttf2woff2 from "ttf2woff2";
import { globSync } from "glob";

const paths = {
  img: {
    in: "src/assets/img/raw/**/*.{jpg,jpeg,png,webp}",
    out: "src/assets/img/webp",
  },
  fonts: {
    in: "src/assets/fonts/raw/**/*.{ttf,woff2}",
    out: "src/assets/fonts/woff2",
  },
};

// Creating folders
const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
};

// Cleaning folders before build

const cleanOutputDirs = () => {
  [paths.img.out, paths.fonts.out].forEach((dir) => {
    if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir);
      for (const file of files) {
        if (file !== ".gitkeep") {
          const fullPath = path.join(dir, file);
          // Удаляем и файлы, и подпапки (кроме .gitkeep и raw)
          fs.rmSync(fullPath, { recursive: true, force: true });
        }
      }
    }
    ensureDir(dir);
  });
  console.log("🧹 Output folders cleaned (.gitkeep preserved)");
};

// 1. Image conversion

async function convertImages() {
  ensureDir(paths.img.out);

  const files = globSync(paths.img.in);

  if (files.length === 0) {
    console.log("⚠️No images found on the path:", paths.img.in);
    return;
  }

  for (const filePath of files) {
    const fileName = path.parse(filePath).name;

    await sharp(filePath)
      .webp({ quality: 80 })
      .toFile(path.join(paths.img.out, `${fileName}.webp`));

    console.log(`✅ Image: ${path.basename(filePath)} -> webp`);
  }
}

// 2. Font conversion

function convertFonts() {
  ensureDir(paths.fonts.out);
  const files = globSync(paths.fonts.in);

  if (files.length === 0) {
    console.log("ℹ️ No fonts found");
    return;
  }

  files.forEach((filePath) => {
    const ext = path.extname(filePath).toLowerCase();
    const fileName = path.parse(filePath).name;
    const destination = path.join(paths.fonts.out, `${fileName}.woff2`);

    try {
      if (ext === ".ttf") {
        const input = fs.readFileSync(filePath);
        fs.writeFileSync(destination, ttf2woff2(input));
        console.log(`✅ Font converted: ${path.basename(filePath)} -> woff2`);
      } else if (ext === ".woff2") {
        fs.copyFileSync(filePath, destination);
        console.log(`Copy font: ${path.basename(filePath)} (already woff2)`);
      }
    } catch (err) {
      console.error(`❌ Error processing font ${filePath}:`, err);
    }
  });
}

// Running the entire process
(async () => {
  try {
    // First, we clean out the old
    cleanOutputDirs();

    // Then we generate a new one
    await convertImages();
    convertFonts();
  } catch (err) {
    console.error("❌ Error during preparation:", err);
  }
})();
