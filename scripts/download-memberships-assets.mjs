import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '../public/images/memberships');
mkdirSync(OUT, { recursive: true });

const assets = [
  // Black Card perks images
  { url: 'https://images.ctfassets.net/473zoc40547p/6vkYLq4tmYqPE8MpZ7Al7Y/169630e0e632af103151ed9232e49cb3/BCRecip.webp?fm=webp', name: 'bc-access-worldwide.webp' },
  { url: 'https://images.ctfassets.net/473zoc40547p/1AEd1AlUbTcDdkQ2KGzuiK/6c475b9f310fc20f6587be9c71196881/BCGuest.webp?fm=webp', name: 'bc-guest.webp' },
  { url: 'https://images.ctfassets.net/473zoc40547p/6XW6Uk7giKXJq2TMRIfxWH/36e3a54511916753a98bfcb89b754a73/BCVirtualFT.webp?fm=webp', name: 'bc-app-workouts.webp' },
  { url: 'https://images.ctfassets.net/473zoc40547p/JGtOmYv8dWSnVj7Gh8JFb/a6b948a91b93e0a65778a8e83cfe578e/FreeICFT.webp?fm=webp', name: 'free-fitness-training.webp' },
  { url: 'https://images.ctfassets.net/473zoc40547p/2phRJ4Q6XzOHFsoHYLkS2y/912b2a54f43c9e7af50623a03299f90f/BCPremPerks.webp?fm=webp', name: 'bc-premium-perks.webp' },
  { url: 'https://images.ctfassets.net/473zoc40547p/5dWreoO1opYshrjo9v38tF/5c3798c4cc320a5ba03a4eb47f8bfc38/BCHalfPriceCoolerDrinks.webp?fm=webp', name: 'bc-drinks.webp' },
  { url: 'https://images.ctfassets.net/473zoc40547p/5dRfgNZMLwsKSxKV7Nb7NG/fa71dd8a9971304c0d9c0033993d9a61/ClassicWifi.webp?fm=webp', name: 'free-wifi.webp' },
  // Spa images
  { url: 'https://images.ctfassets.net/473zoc40547p/48zgp9l4oAJMGB9BO20KwE/60ede609a697e2a290f604b4b2fb83ea/BCMassageChairs.webp?fm=webp', name: 'spa-massage-chairs.webp' },
  { url: 'https://images.ctfassets.net/473zoc40547p/4Q9MJCvFrWAV7wPOPiTAi7/1b0df1363045c8e9a00ce87c9f72574b/BCHydro.webp?fm=webp', name: 'spa-hydromassage.webp' },
  { url: 'https://images.ctfassets.net/473zoc40547p/1w6C38y2AeJuFSXlmfFfVU/ae61e8429ac581bacf6299395e644969/BCTanning.webp?fm=webp', name: 'spa-tanning.webp' },
  { url: 'https://images.ctfassets.net/473zoc40547p/3UwcgCumBhJLLzVBYHShby/1f0125c76470b86c19d58aa20f06faa5/BCTotalBodyEnhancement.webp?fm=webp', name: 'spa-total-body.webp' },
  { url: 'https://images.ctfassets.net/473zoc40547p/DezguQFMaqkcVwm5IKgHc/61b7390f2de0b4ffb530c0ccad6a4077/BCWellPod.webp?fm=webp', name: 'spa-wellness-pod.webp' },
  { url: 'https://images.ctfassets.net/473zoc40547p/402FuMunovs4mFVaKO8e4d/3a62cfb4a198e486b8de39a4518f8efa/BCRecoveryLounge.webp?fm=webp', name: 'spa-recovery-lounge.webp' },
  // Classic perks images
  { url: 'https://images.ctfassets.net/473zoc40547p/1hZ5DoDafTgaAvH8S1YXlz/31f46011518e4fc8b040ba817595b79f/ClassicAccess.webp?fm=webp', name: 'classic-access.webp' },
  { url: 'https://images.ctfassets.net/473zoc40547p/2lbC4OZc0e7JqME8biS8t4/37bb8261834ed464a623fb474f6b0921/MobileApp.webp?fm=webp', name: 'classic-app.webp' },
  { url: 'https://images.ctfassets.net/473zoc40547p/JbUxIMkqzVaRGwy0cYkgv/c23f0e15c453368ba4bec3aff8145625/WCPerks.webp?fm=webp', name: 'classic-perks.webp' },
];

async function download(url, name) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = await res.arrayBuffer();
    writeFileSync(join(OUT, name), Buffer.from(buf));
    console.log(`✓ ${name}`);
  } catch (e) {
    console.error(`✗ ${name}: ${e.message}`);
  }
}

// Batch 4 at a time
const batch = async (items, fn, size = 4) => {
  for (let i = 0; i < items.length; i += size) {
    await Promise.all(items.slice(i, i + size).map(fn));
  }
};

await batch(assets, ({ url, name }) => download(url, name));
console.log('Done!');
