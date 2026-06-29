import { chromium } from 'playwright';
import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const OUT = join(ROOT, 'public/images/why-pf');
mkdirSync(OUT, { recursive: true });

const URL = 'https://www.planetfitness.com/about-planet-fitness/why-planet-fitness';

const IMAGES = [
  { url: 'https://images.ctfassets.net/473zoc40547p/exAUEGe2FpRql9QqprCbd/c2dadef75f8c24e379a254b7ffbc4c65/Image.png?fm=webp', name: 'hero.webp' },
  { url: 'https://images.ctfassets.net/473zoc40547p/1XKm5FRwfMpFt38I6WXJMD/9552612e5aa18444bf50d2e598e79eaf/image__4_.jpeg?fm=webp', name: 'accordion-judgement-free.webp' },
  { url: 'https://images.ctfassets.net/473zoc40547p/1TKHMdWtqEuL4IBRVzjMtu/a5eb7ba87b7d2f34b4f810e7b9d2bb5d/PF_Global_Affordable.png?fm=webp', name: 'accordion-equipment.webp' },
  { url: 'https://images.ctfassets.net/473zoc40547p/b34iYjyngxcjMKwyvt66l/d2180583c8a32e45457d9e1ec6c1e3b6/PF_Global_Tons_of_equipment.png?fm=webp', name: 'accordion-clean.webp' },
  { url: 'https://images.ctfassets.net/473zoc40547p/50R40MYyVqGrrJF3sVXyKL/0fac5941db8ca0b7c1dea1c1addfc7ba/PF_Global_Always_Clean.png?fm=webp', name: 'accordion-value.webp' },
  { url: 'https://images.ctfassets.net/473zoc40547p/2ZTWD4siBKbQgfpAAmff5D/bca5b2b308015b72e104f0cc28de2803/Workout_2.png?fm=webp', name: 'belong-member.webp' },
  { url: 'https://images.ctfassets.net/473zoc40547p/6aSOIag832oQz94BSlhmYr/77d08d6e3be34ff1a4f1206477717a1d/Recover_in_the_Planet_Fitness_Black_Card_Spa.png?fm=webp', name: 'recover-spa.webp' },
  { url: 'https://images.ctfassets.net/473zoc40547p/4IEBlPcxejXaW90UmdJTvH/9c2dd15e0b78c3831180b77640142120/Take_Your_Workout_Anywhere_in_the_free_PF_App.png?fm=webp', name: 'pf-app.webp' },
  { url: 'https://images.ctfassets.net/473zoc40547p/5ktDRVWwpfgdO86TorwoSY/1a5180c1b1461f608d06038c7274c353/Exclusive_Offers_and_Discounts_with_Planet_Fitness_Perks.png?fm=webp', name: 'perks.webp' },
];

(async () => {
  const browser = await chromium.launch({ headless: false });
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
  });
  const page = await ctx.newPage();
  await page.goto(URL, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(2000);

  // ── Download images via browser fetch ─────────────────────────────
  for (const { url, name } of IMAGES) {
    try {
      const bytes = await page.evaluate(async (src) => {
        const r = await fetch(src);
        if (!r.ok) return null;
        const buf = await r.arrayBuffer();
        return [...new Uint8Array(buf)];
      }, url);
      if (bytes) {
        writeFileSync(join(OUT, name), Buffer.from(bytes));
        console.log(`  ✓ ${name}`);
      }
    } catch (e) { console.log(`  ✗ ${name}: ${e.message}`); }
  }

  // ── Extract accordion/icon SVGs and content ───────────────────────
  const content = await page.evaluate(() => {
    // Get the 4-icon strip SVGs
    const iconItems = [...document.querySelectorAll('[class*="pillar"], [class*="icon-item"], [class*="IconItem"]')];

    // Get accordion items content
    const accordionItems = [...document.querySelectorAll('details, [class*="accordion"], [role="button"]')]
      .slice(0, 10)
      .map(el => ({
        tag: el.tagName,
        role: el.getAttribute('role'),
        text: el.textContent?.trim().slice(0, 400),
        classes: el.className?.toString().slice(0, 120),
      }));

    // Get the exact SVG icons in the 4-col strip
    const allSvgs = [...document.querySelectorAll('svg')].slice(0, 20).map(svg => ({
      html: svg.outerHTML.slice(0, 800),
      parentText: svg.parentElement?.textContent?.trim().slice(0, 80),
      parentClass: svg.parentElement?.className?.toString().slice(0, 80),
      classes: svg.className?.baseVal || svg.getAttribute('class') || '',
    }));

    // Get all button texts
    const buttons = [...document.querySelectorAll('button, a[class*="btn"], a[class*="Button"]')]
      .slice(0, 30)
      .map(b => ({ text: b.textContent?.trim(), href: b.href || b.getAttribute('href'), classes: b.className?.toString().slice(0, 60) }));

    // Extract the "Belong and Get Strong" section in detail
    const belongSection = document.querySelector('section:nth-of-type(2)');
    const belongHTML = belongSection ? belongSection.innerHTML.slice(0, 5000) : '';

    // Purple CTA section
    const purpleSection = document.querySelector('.bg-primary-main, [class*="purpleYellow"]');
    const purpleText = purpleSection ? purpleSection.textContent?.trim().slice(0, 400) : '';

    // Get the article descriptions
    const articles = [...document.querySelectorAll('article')].map(a => ({
      text: a.textContent?.trim().slice(0, 500),
      html: a.innerHTML.slice(0, 2000),
    }));

    // Get started today cards
    const getStartedSection = [...document.querySelectorAll('section')].find(s => s.textContent.includes('Get Started Today'));
    const cards = getStartedSection ? [...getStartedSection.querySelectorAll('a, button')].map(c => ({
      text: c.textContent?.trim(),
      href: c.getAttribute('href'),
      classes: c.className?.toString().slice(0, 80),
    })) : [];

    return { accordionItems, allSvgs, buttons, belongHTML, purpleText, articles, cards };
  });

  writeFileSync(join(ROOT, 'docs/research/why-pf-content.json'), JSON.stringify(content, null, 2));
  console.log('\nContent extracted. Articles:', content.articles.length);
  console.log('SVGs found:', content.allSvgs.length);
  console.log('Cards:', content.cards.length);

  await browser.close();
})().catch(e => { console.error('ERROR:', e.message); process.exit(1); });
