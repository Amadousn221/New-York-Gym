import { chromium } from 'playwright';
import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const REFS = join(ROOT, 'docs/design-references');
mkdirSync(REFS, { recursive: true });

async function shot(page, name) {
  await page.screenshot({ path: join(REFS, `${name}.jpeg`), type: 'jpeg', quality: 85, fullPage: false });
  console.log(`📸 ${name}.jpeg`);
}

async function scrollShots(page, prefix, scrolls = 7) {
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
  await shot(page, `${prefix}-0`);
  for (let i = 1; i <= scrolls; i++) {
    await page.evaluate((y) => window.scrollTo(0, y), i * 900);
    await page.waitForTimeout(300);
    await shot(page, `${prefix}-${i}`);
  }
}

(async () => {
  const browser = await chromium.launch({ headless: false });
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
  });

  // ── Local clone ────────────────────────────────────────────────
  const local = await ctx.newPage();
  await local.goto('http://localhost:3000/about-planet-fitness/why-planet-fitness', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await local.waitForTimeout(1500);
  await scrollShots(local, 'local');

  // ── Real site ──────────────────────────────────────────────────
  const real = await ctx.newPage();
  await real.goto('https://www.planetfitness.com/about-planet-fitness/why-planet-fitness', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await real.waitForTimeout(3000);
  await scrollShots(real, 'real');

  await browser.close();
  console.log('\n✅ Done. Check docs/design-references/ for comparison screenshots.');
})().catch(e => { console.error('ERROR:', e.message); process.exit(1); });
