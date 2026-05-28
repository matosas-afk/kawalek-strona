import { readdir, stat, mkdir } from "node:fs/promises";
import { join, extname, basename, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..", "public", "images");
const MAX_DIM = 1600;
const QUALITY = 82;

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...(await walk(path)));
    } else if (entry.isFile()) {
      const ext = extname(entry.name).toLowerCase();
      if ([".jpg", ".jpeg", ".png"].includes(ext)) out.push(path);
    }
  }
  return out;
}

async function exists(path) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

async function optimize(file) {
  const webp = file.replace(/\.(jpe?g|png)$/i, ".webp");
  if (await exists(webp)) return { skipped: true, file };

  const img = sharp(file);
  const meta = await img.metadata();
  const longestSide = Math.max(meta.width ?? 0, meta.height ?? 0);
  const resizeOpts =
    longestSide > MAX_DIM
      ? meta.width >= meta.height
        ? { width: MAX_DIM }
        : { height: MAX_DIM }
      : undefined;

  let pipeline = sharp(file);
  if (resizeOpts) pipeline = pipeline.resize(resizeOpts);
  await pipeline.webp({ quality: QUALITY }).toFile(webp);
  return { skipped: false, file, webp };
}

(async () => {
  await mkdir(ROOT, { recursive: true });
  const files = await walk(ROOT);
  if (files.length === 0) {
    console.log("No JPG/PNG files found under public/images/");
    return;
  }

  let optimized = 0;
  let skipped = 0;
  for (const file of files) {
    try {
      const result = await optimize(file);
      if (result.skipped) {
        skipped++;
      } else {
        optimized++;
        console.log(`✓ ${basename(file)} → ${basename(result.webp)}`);
      }
    } catch (err) {
      console.error(`✗ ${basename(file)}: ${err.message}`);
    }
  }
  console.log(`\nDone. Optimized: ${optimized}, skipped (already .webp exists): ${skipped}`);
})();
