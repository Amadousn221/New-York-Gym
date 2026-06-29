# GetStartedSection Specification

## Overview
- **Target file:** `src/components/GetStartedSection.tsx`
- **Screenshot:** (section 7, light gray bg)
- **Interaction model:** Static

## DOM Structure
```
<section> w-full, bg-surface-gray, px-6/px-8, pb-12, pt-16
  <div> m-auto, max-w-[71.5rem]
    <h2> "Get Started Today"
    <div> 3 CTA cards row (flex, gap)
      <a> "Find a Club Near You" card → /gyms/
      <a> "Explore Perks" card → /my-account/perks
      <a> "Take a Virtual Tour" card → /virtual-tour
    <p> legal disclaimer text
```

## Computed Styles

### Section
- backgroundColor: rgb(247, 247, 252)
- padding: 64px 24px 48px (pt-16 pb-12 px-6)
- width: 100%

### h2 "Get Started Today"
- fontSize: 48px (text-[2rem]/10 at mobile → lg is bigger?)
- fontWeight: 700
- color: rgb(20, 20, 43)
- textAlign: center
- letterSpacing: -0.5px (tracking-[-0.5px])
- marginBottom: 24px (mb-6)
- width: 100%

Note: h2 class is "mb-6 w-full text-center text-[2rem]/10 font-bold tracking-[-0.5px] text-common-black"
At mobile text-[2rem] = 32px, but likely scales up at desktop.

### CTA Cards container
- display: flex
- flexDirection: row at desktop, column at mobile (3 cards side by side on desktop)
- gap: likely 16-24px

### Each CTA card (link)
- backgroundColor: rgb(255, 255, 255)
- display: flex, flexDirection: column, alignItems: center, justifyContent: center
- flex: 1 (flex-shrink flex-grow)
- borderRadius: 16px or similar (cards with rounded corners)
- padding: 32px 24px
- textAlign: center
- cursor: pointer

### Card label (div)
- fontSize: 18px (text-base/5 → 18px? or base = 16px?)
- fontWeight: 600
- color: rgb(20, 20, 43)
- marginTop: 8px (mt-2)

### Disclaimer paragraph
- fontSize: 14px (text-sm/[1.125rem])
- fontWeight: 400
- color: rgb(75, 75, 76)
- marginTop: 48px (mt-12) desktop, varies
- width: 100%

## Text Content (verbatim)

### Heading
"Get Started Today"

### CTA Cards
1. "Find a Club Near You" → /gyms/
2. "Explore Perks" → /my-account/perks
3. "Take a Virtual Tour" → /virtual-tour

### Legal Disclaimer (verbatim)
"*Classic memberships begin at $15 and PF Black Card® memberships begin at $24.99, billed monthly. Memberships may include 12-month commitment. State and local taxes may apply. Subject to an annual fee of $49. Prices may vary depending on location. Services and perks subject to availability and restrictions. Must be at least 18 years old to enroll, or 13-17 with parent/guardian. State and local restrictions on tanning frequency with PF Black Card® memberships apply. Participating locations only. Locations independently owned and operated. See home club for details. We reserve the right to correct pricing errors or withdraw offer at any time. ©2026 Planet Fitness Franchising LLC"

## Responsive Behavior
- **Desktop:** 3 cards in a row side by side, max-w-[71.5rem]
- **Mobile:** Cards stack vertically, full width
- Section total height: ~520px at desktop

## Implementation Notes
- The CTA cards likely have an image or icon above the text (since the original has images but they weren't captured). Based on the section structure, each card is a white box with centered label text. Keep it simple — white card, centered bold label.
- Actually looking more carefully, the Get Started section might have images inside the cards like screenshots of the gym/perks/tour. The images are not separately downloadable but the cards clearly link to those pages. Implement as clean white cards with centered text label only — the section is mainly the 3 CTA links.
