# Planet Fitness Interaction Behaviors

## Scroll Sweep Findings

### Header
- **NO scroll-triggered behavior** — header stays white/sticky, no shrink, no bg change
- Height: 80px (h-20) at desktop breakpoint (header-lg, custom breakpoint)
- Height: 64px (h-16) below header-lg breakpoint

### Sections
- **No scroll-driven animations** observed — no elements animate in on scroll
- **No parallax** — no layers moving at different scroll speeds
- **No scroll-snap** — freeform scroll

## Click Sweep Findings

### Navigation Dropdowns
- "Why PF" nav item: hovering reveals a dropdown (likely CSS hover-based)
- "About Planet Fitness" nav item: also has a dropdown
- Language/Region selector: dropdown on click showing flag options (US English, US Spanish, Canada, Panama, Mexico, Australia, Spain)
- Mobile hamburger: CSS checkbox trick (peer-checked pattern) — toggles mobile flyout menu

### Promo Carousels (TWO separate carousels)
- **INTERACTION MODEL: Click-driven** — prev/next buttons, NOT scroll-driven
- Carousel 1 (5 slides): prev/next buttons, shows "1/5" counter
- Carousel 2 (4 slides): prev/next buttons, shows "1/4" counter
- Both have disabled "Previous" button on first slide
- Each slide: left text + right square image (rounded-3xl)
- Button CTA: purple pill button, full width on mobile

## Hover Sweep Findings

### Nav Links
- Hover: `bg-surface-gray` (rgb(247,247,252)) + `text-primary-main` (purple)
- Active: `bg-primary-superLight` (rgba(151,71,255,0.32)) + purple text

### "Join Now" Button (header)
- Default: `bg-primary-main` (purple), white text, pill shape
- Hover: likely slightly darker purple (not explicitly captured)

### Membership Cards
- "Learn More" links: underline, purple color
- "Join Now" buttons: pill shape, color varies by card

### Footer Links
- White text, likely lighter on hover (not captured)

## Responsive Behavior

### Desktop (1440px) — Default capture
- Header: full nav visible, logo tall (h-[6.5rem] at header-lg)
- Hero: side-by-side layout (text left, image right), md:flex-row
- Memberships: 2 cards side by side
- Carousels: larger text (lg:text-5xl), wider layout
- Why PF: 3-column grid for value props
- PF App: app phone image absolutely positioned right side

### Tablet (~768px)
- Header: hamburger appears (header-lg breakpoint is custom, not standard md)
- Hero: stacks to column (flex-col-reverse on mobile)
- Memberships: cards may stack

### Mobile (390px)
- Header: hamburger visible, compact logo (h-12, w-10)
- Hero: stacked, image above text (flex-col-reverse)
- Memberships: single column
- Carousels: smaller text (text-[2rem])
- Why PF: image clips differently (clip-path-bottom-right-85 vs 75)

## Key CSS Custom Properties
- `header-lg` = custom breakpoint for large header layout
- `font-condensed` = Barlow Condensed ExtraBold
- `bg-hero-gradient-1` = radial gradient with grainy overlay (desktop)
- `bg-hero-gradient-1-mobile` = same pattern, mobile variant
- `bg-purpleYellowRightGlare` = PF App section background with yellow glare effect
- `clip-path-bottom-right-85` / `clip-path-bottom-right-75` = diagonal image clip for Why PF photo
