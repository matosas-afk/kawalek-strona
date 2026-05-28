import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", ".screenshots");
const URL = process.env.URL ?? "http://localhost:3000/";

// Hide Next.js dev indicator + force complete loading
const HIDE_DEV_INDICATOR_CSS = `
  nextjs-portal { display: none !important; }
  [data-nextjs-toast], [data-next-mark-loading], #__next-build-watcher { display: none !important; }
`;

async function waitForImagesInViewport(page) {
  await page.evaluate(async () => {
    const imgs = Array.from(document.images);
    await Promise.all(
      imgs.map((img) => {
        if (img.complete && img.naturalHeight !== 0) return null;
        return new Promise((res) => {
          const done = () => res();
          img.addEventListener("load", done, { once: true });
          img.addEventListener("error", done, { once: true });
          // safety timeout
          setTimeout(done, 3000);
        });
      })
    );
  });
}

async function shotSectionByClip(page, label, id) {
  // Use locator → boundingBox → page.screenshot({clip}) to avoid detach issues
  const box = await page.locator(`#${id}`).first().boundingBox();
  if (!box) {
    console.error(`✗ ${label}-${id}: no boundingBox`);
    return;
  }
  await page.screenshot({
    path: join(OUT, `${label}-${id}.png`),
    clip: {
      x: Math.max(0, box.x),
      y: Math.max(0, box.y),
      width: box.width,
      height: box.height,
    },
  });
  console.log(`✓ ${label}-${id}.png`);
}

async function scrollToTop(page) {
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(200);
}

async function scrollToSection(page, id) {
  await page.evaluate((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ block: "start" });
  }, id);
  await page.waitForTimeout(400);
}

async function shotPage(browser, label, viewport) {
  const ctx = await browser.newContext({
    viewport,
    deviceScaleFactor: 1,
  });
  const page = await ctx.newPage();
  await page.goto(URL, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.addStyleTag({ content: HIDE_DEV_INDICATOR_CSS });

  // Scroll through to trigger lazy load
  const docHeight = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < docHeight + 1000; y += 500) {
    await page.evaluate((y) => window.scrollTo(0, y), y);
    await page.waitForTimeout(150);
  }
  await scrollToTop(page);
  await waitForImagesInViewport(page);
  await page.waitForTimeout(800);

  // Full page
  await page.screenshot({
    path: join(OUT, `${label}-full.png`),
    fullPage: true,
  });
  console.log(`✓ ${label}-full.png`);

  // Per-section
  const sections = ["oferty-specjalne", "desery-na-cieplo", "menu", "torty"];
  for (const id of sections) {
    try {
      await scrollToSection(page, id);
      await waitForImagesInViewport(page);
      await page.waitForTimeout(300);
      await shotSectionByClip(page, label, id);
    } catch (err) {
      console.error(`✗ ${label}-${id}: ${err.message}`);
    }
  }

  // Tab interactions (desktop only — mobile mostly identical)
  if (label === "desktop") {
    // Menu / Lody
    try {
      await scrollToSection(page, "menu");
      await page.locator(`#menu button[role="tab"]`, { hasText: "Lody" }).click();
      await page.waitForTimeout(500);
      await shotSectionByClip(page, label, "menu");
      // rename
      const fs = await import("node:fs/promises");
      await fs.rename(
        join(OUT, `${label}-menu.png`),
        join(OUT, `${label}-menu-lody.png`)
      );
      console.log(`  (saved as ${label}-menu-lody.png)`);
    } catch (err) {
      console.error(`✗ menu-lody: ${err.message}`);
    }

    // Menu / Kawa
    try {
      await scrollToSection(page, "menu");
      await page
        .locator(`#menu button[role="tab"]`, { hasText: "Kawa i napoje" })
        .click();
      await page.waitForTimeout(800);
      await waitForImagesInViewport(page);
      await shotSectionByClip(page, label, "menu");
      const fs = await import("node:fs/promises");
      await fs.rename(
        join(OUT, `${label}-menu.png`),
        join(OUT, `${label}-menu-kawa.png`)
      );
      console.log(`  (saved as ${label}-menu-kawa.png)`);
    } catch (err) {
      console.error(`✗ menu-kawa: ${err.message}`);
    }

    // Torty tabs (wait long for lazy load)
    for (const tab of ["Okolicznościowe", "Weselne"]) {
      try {
        await scrollToSection(page, "torty");
        await page
          .locator(`#torty button[role="tab"]`, { hasText: tab })
          .click();
        // Wait for new images to load
        await page.waitForTimeout(800);
        await waitForImagesInViewport(page);
        await page.waitForTimeout(500);
        await shotSectionByClip(page, label, "torty");
        const fs = await import("node:fs/promises");
        await fs.rename(
          join(OUT, `${label}-torty.png`),
          join(OUT, `${label}-torty-${tab.toLowerCase()}.png`)
        );
        console.log(`  (saved as ${label}-torty-${tab.toLowerCase()}.png)`);
      } catch (err) {
        console.error(`✗ torty-${tab}: ${err.message}`);
      }
    }
  }

  await ctx.close();
}

(async () => {
  await mkdir(OUT, { recursive: true });
  const browser = await chromium.launch();
  try {
    await shotPage(browser, "desktop", { width: 1440, height: 900 });
    await shotPage(browser, "mobile", { width: 390, height: 844 });
  } finally {
    await browser.close();
  }
  console.log(`\nDone. Output: ${OUT}`);
})();
