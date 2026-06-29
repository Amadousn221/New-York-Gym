import { chromium } from 'playwright';
import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const REFS = join(ROOT, 'docs/design-references');
mkdirSync(REFS, { recursive: true });

const URL = 'https://www.planetfitness.com/about-planet-fitness';

async function shot(page, name) {
  await page.screenshot({ path: join(REFS, `about-${name}.jpeg`), type: 'jpeg', quality: 85, fullPage: false });
  console.log(`📸 about-${name}.jpeg`);
}

(async () => {
  const browser = await chromium.launch({ headless: false });
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
  });
  const page = await ctx.newPage();

  console.log('Navigating to', URL);
  await page.goto(URL, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(3000);

  // screenshots at key scroll positions
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
  await shot(page, 'scroll0');
  for (let i = 1; i <= 8; i++) {
    await page.evaluate((y) => window.scrollTo(0, y), i * 900);
    await page.waitForTimeout(400);
    await shot(page, `scroll${i}`);
  }

  // extract page data
  const data = await page.evaluate(() => {
    const props = [
      'fontSize','fontWeight','fontFamily','lineHeight','letterSpacing','color',
      'textTransform','backgroundColor','background','padding','paddingTop',
      'paddingRight','paddingBottom','paddingLeft','width','height','maxWidth',
      'display','flexDirection','justifyContent','alignItems','gap',
      'borderRadius','position','opacity','objectFit',
    ];
    function styles(el) {
      const cs = getComputedStyle(el);
      const s = {};
      props.forEach(p => { const v = cs[p]; if (v && v !== 'none' && v !== 'normal' && v !== 'auto' && v !== '0px' && v !== 'rgba(0, 0, 0, 0)') s[p] = v; });
      return s;
    }

    const images = [...document.querySelectorAll('img')].map(img => ({
      src: img.src || img.currentSrc,
      alt: img.alt,
      w: img.naturalWidth, h: img.naturalHeight,
      parentClass: img.parentElement?.className?.toString().slice(0, 100),
    }));

    const sections = [...document.querySelectorAll('main > section, main > div > section')]
      .slice(0, 15)
      .map(s => ({
        tag: s.tagName,
        id: s.id,
        classes: s.className?.toString().slice(0, 200),
        h: s.offsetHeight,
        text: s.textContent?.trim().slice(0, 400),
        styles: styles(s),
        childCount: s.children.length,
      }));

    const headings = [...document.querySelectorAll('h1,h2,h3,h4')].map(h => ({
      tag: h.tagName,
      text: h.textContent?.trim().slice(0, 200),
      styles: styles(h),
    }));

    const paragraphs = [...document.querySelectorAll('p')].slice(0, 30).map(p => ({
      text: p.textContent?.trim().slice(0, 300),
      styles: styles(p),
    }));

    const links = [...document.querySelectorAll('main a')].slice(0, 30).map(a => ({
      text: a.textContent?.trim(),
      href: a.getAttribute('href'),
      classes: a.className?.toString().slice(0, 80),
    }));

    return { images, sections, headings, paragraphs, links, bodyH: document.body.scrollHeight };
  });

  writeFileSync(join(ROOT, 'docs/research/about-pf-recon.json'), JSON.stringify(data, null, 2));
  console.log(`\n📊 Recon saved. Page height: ${data.bodyH}px`);
  console.log(`🖼  Images: ${data.images.length}`);
  console.log(`📐 Sections: ${data.sections.length}`);
  console.log(`📝 Headings: ${data.headings.length}`);
  console.log(`🔗 Links: ${data.links.length}`);

  // download images
  console.log('\nDownloading images...');
  const OUT = join(ROOT, 'public/images/about-pf');
  mkdirSync(OUT, { recursive: true });
  const toDownload = data.images.filter(img => img.src && img.src.includes('ctfassets'));
  for (const img of toDownload) {
    try {
      const url = new URL(img.src);
      const name = url.pathname.split('/').pop().replace(/[^a-zA-Z0-9._-]/g, '-').slice(0, 50);
      const ext = img.src.includes('fm=webp') ? '.webp' : (name.includes('.') ? '' : '.webp');
      const filename = name.endsWith('.webp') || name.endsWith('.png') || name.endsWith('.jpg') ? name : name + ext;
      const bytes = await page.evaluate(async (src) => {
        const r = await fetch(src);
        if (!r.ok) return null;
        const buf = await r.arrayBuffer();
        return [...new Uint8Array(buf)];
      }, img.src);
      if (bytes) {
        writeFileSync(join(OUT, filename), Buffer.from(bytes));
        console.log(`  ✓ ${filename}`);
      }
    } catch (e) { console.log(`  ✗ ${img.src.slice(0, 60)}: ${e.message}`); }
  }

  await browser.close();
  console.log('\n✅ Reconnaissance complete');
})().catch(e => { console.error('ERROR:', e.message); process.exit(1); });
