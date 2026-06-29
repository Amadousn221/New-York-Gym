# WhyPFSection Specification

## Overview
- **Target file:** `src/components/WhyPFSection.tsx`
- **Screenshot:** (section 4, ~2077px from top)
- **Interaction model:** Static

## DOM Structure
```
<section> w-full, overflow-hidden, pb-20
  <!-- Full-width gym photo with diagonal clip -->
  <picture>
    <img> place-where-welcome.webp, clip-path-bottom-right-85 (mobile) / clip-path-bottom-right-75 (desktop)
  <!-- Heading centered below image -->
  <h2> "a place where everyone feels welcome" (with <span>everyone</span> in purple+uppercase)
  <!-- 3-column value props grid -->
  <div> grid, grid-cols-3 (desktop), stacked (mobile)
    <div> value prop 1: Best value
    <div> value prop 2: Tons of equipment
    <div> value prop 3: 2,700+ locations
```

## Computed Styles

### Section
- display: block
- width: 100%
- overflow: hidden
- paddingBottom: 80px (pb-20 = 80px)
- backgroundColor: transparent (white)

### Gym photo (img)
- src: /images/place-where-welcome.webp
- alt: "a place where everyone feels welcome"
- width: 100%
- objectFit: cover
- objectPosition: center 15% (object-[center_15%])
- Desktop: height ~400px-620px, clip-path: polygon(0 0, 100% 0, 100% 75%, 0 100%)
- Mobile: aspectRatio: 1 (square), clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%)
- md:h-[some value] — adjusts height on desktop

### h2 heading
- "a place where " — color: rgb(20, 20, 43), fontSize: 64px, fontWeight: 800 (condensed)
- <span>"everyone"</span> — color: rgb(86, 20, 150), textTransform: uppercase, same size
- " feels welcome" — same as first part
- textAlign: center
- marginBottom: 48px (mb-12)
- marginTop: 24px (mt-6)
- paddingX: 24px (px-6)
- Classes: font-condensed *:text-primary-main mb-12 mt-6 px-6 text-center
- fontSize: 64px at desktop (not explicitly captured, but the span was 64px/800)
- The h2 text style uses font-condensed (Barlow Condensed ExtraBold 800)

### Value prop grid
- display: grid
- gridTemplateColumns: repeat(3, 1fr) at desktop
- gap: 24px (gap-x-6)
- paddingX: 24px (px-6)
- Mobile: single column

### Each value prop item
- textAlign: center (text-center)
- marginBottom: ~45px (*:mb-[2.8rem])

### Icon container
- display: flex, h-[3.75rem], items-center, justify-center, mb-2 (desktop mb-4)

### Icon images
- Money: width: ~46px (w-[2.875rem]) desktop ~52px (w-[3.28rem])
- Equipment: width: ~53px (w-[3.3rem]) desktop ~59px (w-[3.7rem])
- Globe: width: ~59px (w-[3.7rem]) desktop ~66px (w-[4.1rem])

### Value prop title (p.mb-[.95rem])
- fontSize: 32px (text-[2rem]/10)
- fontWeight: 700
- color: rgb(20, 20, 43)
- letterSpacing: -0.4px (tracking-[-.4px])
- lineHeight: 40px

### Value prop description (p.text-gray-dark)
- fontSize: 18px
- fontWeight: 400
- color: rgb(75, 75, 76)
- marginBottom: ~9px (mb-[.55rem]), desktop 16px

### "Learn More" links
- fontSize: 18px, fontWeight: 600
- color: rgb(86, 20, 150)
- textDecoration: underline

## Text Content (verbatim)

### Heading
"a place where everyone feels welcome"
(The word "everyone" is in a span with primary-main color and uppercase)

### Value Prop 1: Best value
- Title: "Best value on the planet"
- Description: "We believe in providing a high-quality experience at an affordable cost."
- Link: "Learn More" → /gym-memberships (implied)
- Icon: /images/icons/Money.svg

### Value Prop 2: Tons of equipment
- Title: "Tons of equipment"
- Description: "Tons of cardio and strength equipment, all in a clean and spacious environment."
- Link: "Learn More" → /about-planet-fitness/why-planet-fitness (implied)
- Icon: /images/icons/Equipment.svg

### Value Prop 3: 2,700+ locations
- Title: "2,700+ locations"
- Description: "More than 2,700 Planet Fitness locations worldwide."
- Link: "Learn More" → /gyms (implied)
- Icon: /images/icons/Globe.svg

## Assets
- Gym photo: `public/images/place-where-welcome.webp`
- Money icon: `public/images/icons/Money.svg`
- Equipment icon: `public/images/icons/Equipment.svg`
- Globe icon: `public/images/icons/Globe.svg`

## Responsive Behavior
- **Desktop:** Wide gym photo (height ~620px), 3-column grid for value props
- **Mobile:** Square gym photo (aspect-square), value props stack vertically (1 column)
- Clip path: desktop cuts at 75%, mobile at 85% (less aggressive cut)
- h2 font is always large/bold (condensed)
