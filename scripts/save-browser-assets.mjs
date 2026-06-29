import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

// Playwright saves evaluation results as a JSON-encoded string, so double-parse
function readPlaywrightJson(path) {
  const raw = readFileSync(path, 'utf8');
  const once = JSON.parse(raw);   // removes outer quotes, unescapes
  return typeof once === 'string' ? JSON.parse(once) : once;
}

// Save binary assets from b64 JSON
const b64Data = readPlaywrightJson(join(root, 'docs/research/binary-assets-b64.json'));
const binaryMap = {
  'grainy-bg': 'public/images/grainy-background.png',
  'favicon-32': 'public/seo/favicon-32.png',
  'favicon-16': 'public/seo/favicon-16.png',
};
for (const [key, destRel] of Object.entries(binaryMap)) {
  const b64 = b64Data[key];
  if (!b64 || b64.startsWith('ERROR') || b64.startsWith('ERR')) {
    console.error(`✗ ${key}: ${b64}`);
    continue;
  }
  const dest = join(root, destRel);
  mkdirSync(dirname(dest), { recursive: true });
  writeFileSync(dest, Buffer.from(b64, 'base64'));
  console.log(`✓ ${destRel}`);
}

// Save SVGs from svg-content JSON
const svgData = readPlaywrightJson(join(root, 'docs/research/svg-content.json'));
const svgMap = {
  'Logo-Primary': 'public/images/icons/Logo-Primary.svg',
  'small-logo': 'public/images/small-logo.svg',
  'Chevron': 'public/images/icons/Chevron.svg',
  'Hamburger': 'public/images/icons/Hamburger.svg',
  'CloseFlyoutMenu': 'public/images/icons/CloseFlyoutMenu.svg',
  'ExternalLink': 'public/images/icons/ExternalLink.svg',
  'SignIn': 'public/images/icons/SignIn.svg',
  'Money': 'public/images/icons/Money.svg',
  'Equipment': 'public/images/icons/Equipment.svg',
  'Globe': 'public/images/icons/Globe.svg',
  'us-flag': 'public/images/flags/us.svg',
  'ca-flag': 'public/images/flags/ca.svg',
};
for (const [key, destRel] of Object.entries(svgMap)) {
  const content = svgData[key];
  if (!content || content.startsWith('ERROR') || content.startsWith('FETCH_ERROR')) {
    console.error(`✗ ${key}: ${content}`);
    continue;
  }
  const dest = join(root, destRel);
  mkdirSync(dirname(dest), { recursive: true });
  writeFileSync(dest, content, 'utf8');
  console.log(`✓ ${destRel}`);
}

// Download fonts via node fetch (Barlow is on Google Fonts)
// We'll use next/font/google in the project, so no need for physical files
console.log('\nNote: Fonts will be loaded via next/font/google (Barlow is available on Google Fonts)');
console.log('Done!');
