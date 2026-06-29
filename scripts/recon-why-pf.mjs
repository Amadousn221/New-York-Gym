/**
 * Reconnaissance script for why-planet-fitness page
 * Run: npx playwright-mcp-server ... or directly via node with playwright installed globally
 */
import { chromium } from 'playwright';
import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const REFS = join(ROOT, 'docs/design-references');
const OUT_IMG = join(ROOT, 'public/images/why-pf');
mkdirSync(REFS, { recursive: true });
mkdirSync(OUT_IMG, { recursive: true });

const URL = 'https://www.planetfitness.com/about-planet-fitness/why-planet-fitness';

async function screenshot(page, name) {
  await page.screenshot({ path: join(REFS, `${name}.jpeg`), type: 'jpeg', quality: 85, fullPage: false });
  console.log(`📸 ${name}.jpeg`);
}

(async () => {
  const browser = await chromium.launch({ headless: false, args: ['--start-maximized'] });
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
  });
  const page = await ctx.newPage();

  console.log('Navigating to', URL);
  await page.goto(URL, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(3000);
  await page.waitForTimeout(1000);

  // ── screenshots at each scroll position ──────────────────────────────
  await screenshot(page, 'why-pf-hero');
  for (let i = 1; i <= 8; i++) {
    await page.evaluate((y) => window.scrollTo(0, y), i * 800);
    await page.waitForTimeout(400);
    await screenshot(page, `why-pf-scroll${i}`);
  }

  // ── extract page data ─────────────────────────────────────────────────
  const data = await page.evaluate(() => {
    const props = [
      'fontSize','fontWeight','fontFamily','lineHeight','letterSpacing','color',
      'textTransform','textDecoration','backgroundColor','background',
      'padding','paddingTop','paddingRight','paddingBottom','paddingLeft',
      'width','height','maxWidth','display','flexDirection','justifyContent',
      'alignItems','gap','gridTemplateColumns','borderRadius','boxShadow',
      'position','top','right','bottom','left','zIndex','opacity','transform',
      'transition','objectFit','objectPosition',
    ];
    function styles(el) {
      const cs = getComputedStyle(el);
      const s = {};
      props.forEach(p => { const v = cs[p]; if (v && v !== 'none' && v !== 'normal' && v !== 'auto' && v !== '0px' && v !== 'rgba(0, 0, 0, 0)') s[p] = v; });
      return s;
    }

    // images
    const images = [...document.querySelectorAll('img')].map(img => ({
      src: img.src || img.currentSrc,
      alt: img.alt,
      w: img.naturalWidth, h: img.naturalHeight,
      parentClass: img.parentElement?.className?.toString().slice(0, 80),
      position: getComputedStyle(img).position,
    }));

    // main sections
    const sections = [...document.querySelectorAll('main > section, main > div > section, [class*="Section"], [class*="section"]')]
      .slice(0, 20)
      .map(s => ({
        tag: s.tagName,
        id: s.id,
        classes: s.className?.toString().slice(0, 120),
        h: s.offsetHeight,
        text: s.textContent?.trim().slice(0, 300),
        styles: styles(s),
        childCount: s.children.length,
        firstChildTag: s.children[0]?.tagName,
      }));

    // headings
    const headings = [...document.querySelectorAll('h1,h2,h3,h4')].map(h => ({
      tag: h.tagName,
      text: h.textContent?.trim().slice(0, 150),
      styles: styles(h),
    }));

    // body text
    const paragraphs = [...document.querySelectorAll('p')].slice(0, 30).map(p => ({
      text: p.textContent?.trim().slice(0, 200),
      styles: styles(p),
    }));

    return { images, sections, headings, paragraphs, bodyH: document.body.scrollHeight };
  });

  writeFileSync(join(ROOT, 'docs/research/why-pf-recon.json'), JSON.stringify(data, null, 2));
  console.log(`\n📊 Recon data saved. Page height: ${data.bodyH}px`);
  console.log(`🖼  Images found: ${data.images.length}`);
  console.log(`📐 Sections found: ${data.sections.length}`);
  console.log(`📝 Headings: ${data.headings.length}`);

  // ── download images ───────────────────────────────────────────────────
  console.log('\nDownloading images...');
  const toDownload = data.images.filter(img => img.src && img.src.includes('ctfassets'));
  for (const img of toDownload) {
    try {
      const url = new URL(img.src);
      const name = url.pathname.split('/').pop().replace(/[^a-zA-Z0-9._-]/g, '-');
      const res = await page.evaluate(async (src) => {
        const r = await fetch(src);
        if (!r.ok) return null;
        const buf = await r.arrayBuffer();
        return [...new Uint8Array(buf)];
      }, img.src);
      if (res) {
        writeFileSync(join(OUT_IMG, name), Buffer.from(res));
        console.log(`  ✓ ${name}`);
      }
    } catch (e) {
      console.log(`  ✗ ${img.src.slice(0, 60)}: ${e.message}`);
    }
  }

  await browser.close();
  console.log('\n✅ Reconnaissance complete');
})().catch(e => { console.error('ERROR:', e.message); process.exit(1); });
