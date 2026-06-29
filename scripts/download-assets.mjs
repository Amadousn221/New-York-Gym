import { createWriteStream } from 'fs';
import { mkdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import https from 'https';
import http from 'http';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '..');

const assets = [
  // Icons / SVGs from PF server
  { url: 'https://www.planetfitness.com/remix/images/icons/Logo-Primary.svg', dest: 'public/images/icons/Logo-Primary.svg' },
  { url: 'https://www.planetfitness.com/remix/images/small-logo.svg', dest: 'public/images/small-logo.svg' },
  { url: 'https://www.planetfitness.com/remix/images/icons/Chevron.svg', dest: 'public/images/icons/Chevron.svg' },
  { url: 'https://www.planetfitness.com/remix/images/icons/Hamburger.svg', dest: 'public/images/icons/Hamburger.svg' },
  { url: 'https://www.planetfitness.com/remix/images/icons/CloseFlyoutMenu.svg', dest: 'public/images/icons/CloseFlyoutMenu.svg' },
  { url: 'https://www.planetfitness.com/remix/images/icons/ExternalLink.svg', dest: 'public/images/icons/ExternalLink.svg' },
  { url: 'https://www.planetfitness.com/remix/images/icons/SignIn.svg', dest: 'public/images/icons/SignIn.svg' },
  { url: 'https://www.planetfitness.com/remix/images/icons/CircledQuestion.svg', dest: 'public/images/icons/CircledQuestion.svg' },
  { url: 'https://www.planetfitness.com/remix/images/icons/Money.svg', dest: 'public/images/icons/Money.svg' },
  { url: 'https://www.planetfitness.com/remix/images/icons/Equipment.svg', dest: 'public/images/icons/Equipment.svg' },
  { url: 'https://www.planetfitness.com/remix/images/icons/Globe.svg', dest: 'public/images/icons/Globe.svg' },
  { url: 'https://www.planetfitness.com/remix/images/svg-flags/us.svg', dest: 'public/images/flags/us.svg' },
  { url: 'https://www.planetfitness.com/remix/images/svg-flags/ca.svg', dest: 'public/images/flags/ca.svg' },
  // Grainy background texture
  { url: 'https://www.planetfitness.com/remix/remix/images/grainy-background.png', dest: 'public/images/grainy-background.png' },
  // Fonts
  { url: 'https://www.planetfitness.com/remix/fonts/barlow/Barlow-Regular.woff2', dest: 'public/fonts/Barlow-Regular.woff2' },
  { url: 'https://www.planetfitness.com/remix/fonts/barlow/Barlow-SemiBold.woff2', dest: 'public/fonts/Barlow-SemiBold.woff2' },
  { url: 'https://www.planetfitness.com/remix/fonts/barlow/Barlow-Bold.woff2', dest: 'public/fonts/Barlow-Bold.woff2' },
  { url: 'https://www.planetfitness.com/remix/fonts/barlow-condensed/BarlowCondensed-ExtraBold.woff2', dest: 'public/fonts/BarlowCondensed-ExtraBold.woff2' },
  // Favicons
  { url: 'https://www.planetfitness.com/remix/favicons/32px.png', dest: 'public/seo/favicon-32.png' },
  { url: 'https://www.planetfitness.com/remix/favicons/16px.png', dest: 'public/seo/favicon-16.png' },
  // Content images from Contentful
  { url: 'https://images.ctfassets.net/473zoc40547p/1Yxj3d2nj0gwcydYFUNra7/df3d1d72c5bdc0c11a906584b3428f1a/evergreen-hero1.svg?fm=webp&w=1280', dest: 'public/images/hero-fitness-model.webp' },
  { url: 'https://images.ctfassets.net/473zoc40547p/7lC6sfzo0DuvG12Q4unCYo/6c26ba0c32cf1e20d8cc8ab32a54a9a6/pf-janpromo-gradient-3.jpg?fm=webp&w=1280', dest: 'public/images/hero-promo-bg.webp' },
  { url: 'https://images.ctfassets.net/473zoc40547p/6mzTzfmPn4V1GuylQDiofY/9629d9280588608b6506ff1205ac35ee/place-where-welcome.webp?fm=webp&w=1280', dest: 'public/images/place-where-welcome.webp' },
  { url: 'https://images.ctfassets.net/473zoc40547p/7rsxO8cq7eek5fz5ONsJCb/d18336823a356e16b0975370b9d2f41c/phone.webp?fm=webp&w=600', dest: 'public/images/pf-app-phone.webp' },
  // Carousel 1 images (5 slides)
  { url: 'https://images.ctfassets.net/473zoc40547p/2gFpzK8fUvIJk04vxDLM9z/f425c92d5268c82a29f61450f358c7da/ConentBlock_Reg.jpg?fm=webp&w=600', dest: 'public/images/carousel1-slide1-summer-pass.webp' },
  { url: 'https://images.ctfassets.net/473zoc40547p/2MmRL0qUaxUrlYJWqoZvaM/ad63e193da416422ff19dddaecb262a8/PF_Web_HP_Content_Block_USA_Today_Award.png?fm=webp&w=600', dest: 'public/images/carousel1-slide2-usa-today.webp' },
  { url: 'https://images.ctfassets.net/473zoc40547p/7B2RParozKBz791QYXK45O/6fec9332ee51a9ac0857235d3f1d041c/PF_Pride26_CB.jpg?fm=webp&w=600', dest: 'public/images/carousel1-slide3-pride.webp' },
  { url: 'https://images.ctfassets.net/473zoc40547p/1AEd1AlUbTcDdkQ2KGzuiK/c934313c28dd62a1540080b384b533ba/BCGuest.webp?fm=webp&w=600', dest: 'public/images/carousel1-slide4-bc-guest.webp' },
  { url: 'https://images.ctfassets.net/473zoc40547p/nbA3yYXOooLBSxki5vgyc/5a7c156d367565c5c785ff03faf211bb/07.12.24_Web_Re-Design_Virtual_Tour_Update.jpg?fm=webp&w=600', dest: 'public/images/carousel1-slide5-virtual-tour.webp' },
  // Carousel 2 images (4 slides)
  { url: 'https://images.ctfassets.net/473zoc40547p/3qnyN3JtwmVkF2eA3ejlz0/908591d8ea6a15d1f13422582d7fcd7c/Home_Page_Content_Block_2024_July_Written_Workout_Guides.jpg?fm=webp&w=600', dest: 'public/images/carousel2-slide1-workout-guides.webp' },
  { url: 'https://images.ctfassets.net/473zoc40547p/4pOfWS7wmhwcBUUEi2wEin/467d50e37ce7e3618b609ad07f5715b4/woman-backpack-perks.png?fm=webp&w=600', dest: 'public/images/carousel2-slide2-perks.webp' },
  { url: 'https://images.ctfassets.net/473zoc40547p/41nGBA4qAhFntkg91Z4YIt/6ac939477704b7c646196717beab26a6/07.12.24_Web_Re-Design_RAF_Update.jpg?fm=webp&w=600', dest: 'public/images/carousel2-slide3-refer-friend.webp' },
  { url: 'https://images.ctfassets.net/473zoc40547p/2kiO4l9iOUnyzxCTzqTynH/55afe89610f5f8f3b1b7134668d873e9/PF_Web_CB_Store_copy.jpg?fm=webp&w=600', dest: 'public/images/carousel2-slide4-store.webp' },
];

function download(url, destRelative) {
  return new Promise((resolve, reject) => {
    const destAbs = join(projectRoot, destRelative);
    mkdir(dirname(destAbs), { recursive: true }).then(() => {
      const file = createWriteStream(destAbs);
      const protocol = url.startsWith('https') ? https : http;
      const req = protocol.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          file.close();
          download(res.headers.location, destRelative).then(resolve).catch(reject);
          return;
        }
        if (res.statusCode !== 200) {
          file.close();
          reject(new Error(`HTTP ${res.statusCode} for ${url}`));
          return;
        }
        res.pipe(file);
        file.on('finish', () => { file.close(); resolve(destRelative); });
        file.on('error', reject);
      });
      req.on('error', reject);
    }).catch(reject);
  });
}

async function downloadBatch(items, concurrency = 4) {
  const results = [];
  for (let i = 0; i < items.length; i += concurrency) {
    const batch = items.slice(i, i + concurrency);
    const batchResults = await Promise.allSettled(batch.map(({ url, dest }) => download(url, dest)));
    batchResults.forEach((r, idx) => {
      if (r.status === 'fulfilled') {
        console.log(`✓ ${batch[idx].dest}`);
        results.push({ ok: true, dest: batch[idx].dest });
      } else {
        console.error(`✗ ${batch[idx].dest}: ${r.reason?.message}`);
        results.push({ ok: false, dest: batch[idx].dest, error: r.reason?.message });
      }
    });
  }
  return results;
}

console.log(`Downloading ${assets.length} assets...`);
const results = await downloadBatch(assets, 4);
const ok = results.filter(r => r.ok).length;
const fail = results.filter(r => !r.ok).length;
console.log(`\nDone: ${ok} succeeded, ${fail} failed`);
