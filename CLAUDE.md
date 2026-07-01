@AGENTS.md

# NewYork Gym — Guide Claude Code

Clone pixel-perfect de **https://www.planetfitness.com/** en Next.js 16 + Tailwind v4.

---

## Stack technique

| Outil | Version | Notes |
|-------|---------|-------|
| Next.js | 16 | App Router, `src/app/` |
| React | 19 | — |
| TypeScript | strict | Pas de `any` |
| Tailwind CSS | v4 | `@theme inline` dans `globals.css` |
| Fonts | Barlow + Barlow Condensed | via `next/font/google` dans `layout.tsx` |

---

## Commandes

```bash
npm run dev        # Dev server → http://localhost:3001
npm run build      # Build production
npm run lint       # ESLint
npm run typecheck  # TypeScript check
```

> Le dev server tourne sur **le port 3001** (configuré dans `package.json`).

---

## Design tokens Planet Fitness (`src/app/globals.css`)

### Couleurs principales
```
--color-primary-main:        rgb(86, 20, 150)      ← violet PF
--color-primary-dark:        rgb(52, 0, 89)
--color-secondary-main:      rgb(255, 230, 0)       ← jaune PF
--color-common-black:        rgb(20, 20, 43)
--color-surface-gray:        rgb(247, 247, 252)
--color-gray-dark:           rgb(75, 75, 76)
--color-gray-medium:         rgb(112, 112, 112)
--color-border-light:        rgb(229, 231, 235)
```

### Fonts
- `font-sans` → Barlow (corps de texte)
- `font-condensed` → Barlow Condensed ExtraBold, uppercase (titres larges)

### Breakpoint personnalisé
```
--breakpoint-header-lg: 1024px   → classe Tailwind: header-lg:
```

### Utilities CSS personnalisées
| Classe | Usage |
|--------|-------|
| `font-condensed` | Titres larges uppercase (Barlow Condensed 800) |
| `bg-hero-gradient-1` | Fond gradient violet+jaune (hero sections) |
| `bg-purpleYellowRightGlare` | Gradient app section (violet + glare jaune droite) |
| `bg-purpleYellowLeftGlare` | Gradient gym-memberships hero (glare jaune gauche) |
| `bg-purpleVioletLefSandRightGlare` | Fond CTA spa/journey (sable gauche + violet droite) |
| `bg-gradient-330-18-84` | Fond dark Black Card (`rgb(20,20,43)` → `rgb(86,20,150)`) |
| `bg-surface-lightPurple` | Fond lavande clair `rgb(231, 223, 247)` |
| `bg-lightPurpleWhiteGlare` | Section "Planet Fitness Today" |
| `bg-grainyPfClassic` | Bannière section Classic |
| `bg-lightPinkLeftGlare` | Section Inclusion & Belonging |
| `clip-path-bottom-right-85` | Découpe diagonale photo (85%) |
| `no-scrollbar` | Masque la scrollbar |

---

## Structure des pages

```
src/app/
  page.tsx                                    ← Accueil (NE PAS TOUCHER — déjà parfait)
  layout.tsx                                  ← Fonts Barlow + metadata
  globals.css                                 ← Tous les tokens + utilities
  gym-memberships/page.tsx                    ← ✅ Cloné
  about-planet-fitness/
    page.tsx                                  ← ✅ Cloné
    why-planet-fitness/page.tsx               ← ✅ Cloné
  pf-purpose/page.tsx                         ← ✅ Cloné
  mobileapp/page.tsx                          ← ✅ Cloné
  our-clubs/page.tsx                          ← ✅ Cloné
  gyms/page.tsx                               ← ✅ Cloné
  blog/page.tsx                               ← À faire

src/components/
  Header.tsx    ← Navbar avec dropdowns "Why PF ▼" et "Work Out With Us ▼"
  Footer.tsx    ← Footer PF complet

public/
  images/       ← Assets téléchargés depuis planetfitness.com
    why-pf/     ← Images page Why Planet Fitness
    about-pf/   ← Images page About
    icons/      ← SVG icons (JudgementFree.svg, Equipment.svg, etc.)
```

---

## Navigation Header (dropdowns)

**"Why PF ▼"** → Why Planet Fitness, About Planet Fitness, PF Purpose  
**"Work Out With Us ▼"** → Our Clubs, PF App, Blog

Implémenté avec `onMouseEnter`/`onMouseLeave` dans `src/components/Header.tsx`.

---

## Workflow de clonage (page par page)

Pour cloner une nouvelle page de façon pixel-perfect :

```
1. Ouvrir un terminal dans C:\Users\LENOVO\Documents\Projets\PlanetFitness\
2. Lancer : claude --chrome
3. Dans la session Claude Code :

   Supprimer l'ancien fichier si il existe :
   Delete the file src/app/<page>/page.tsx

   Puis lancer :
   /clone-website https://www.planetfitness.com/<page>

   After building, open localhost:3001/<page> and https://www.planetfitness.com/<page>
   side by side in Chrome. Compare every section and fix all differences until identical.
```

> `claude --chrome` est **obligatoire** — le pipeline utilise Chrome MCP pour les screenshots,
> l'extraction CSS computée, et le téléchargement des images.

---

## Règles importantes

- **Ne jamais toucher `src/app/page.tsx`** (homepage) — elle est déjà pixel-perfect.
- Toujours utiliser les tokens Tailwind (`text-primary-main`, `bg-secondary-main`, etc.) plutôt que des valeurs hardcodées.
- `font-condensed` pour tous les titres larges uppercase.
- Les pages interactives (accordéons, FAQ, recherche) doivent avoir `"use client"` en tête de fichier.
- Images dans `public/images/` — utiliser `<Image>` de `next/image` avec `fill` ou dimensions explicites.
- Pas de `any` TypeScript.
- Pas de commentaires inutiles dans le code.
