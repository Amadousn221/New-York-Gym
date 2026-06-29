# Header Specification

## Overview
- **Target file:** `src/components/Header.tsx`
- **Screenshot:** `docs/design-references/hero-section.png` (top 80px)
- **Interaction model:** Static (sticky) — no scroll-triggered changes

## DOM Structure
```
<header> sticky, z-50, white bg, 80px tall at desktop
  <a> logo link → /
    <div> logo container (overflows header upward at desktop)
      <img> Logo-Primary.svg
  <div> nav + actions container (flex, items-center)
    <div> left nav links (hidden below header-lg breakpoint)
      <a> Memberships → /gym-memberships
      <div> "Why PF" dropdown trigger
      <div> "About Planet Fitness" dropdown trigger  
      <a> PF Store → https://shop.planetfitness.com/ (external)
    <div> right actions
      <div> Region selector (US English) — dropdown button
      <a> My Account → /login (with sign-in icon)
      <input> checkbox (hidden, peer — controls mobile menu)
      <a> "Join Now" button (pill, purple)
      <label> hamburger toggle (hidden at header-lg+)
      <div> mobile flyout menu overlay (peer-checked)
```

## Computed Styles (exact from getComputedStyle)

### Header element
- display: flex
- position: sticky
- top: 0
- z-index: 50
- backgroundColor: rgb(255, 255, 255)
- color: rgb(20, 20, 43)
- height: 80px (at 1440px viewport)
- padding: 8px 32px
- alignItems: center

### Logo link/container
- The logo div extends ABOVE the header (mt-[-2rem] or similar at lg)
- Logo image: h-[6.5rem] w-[5.4rem] at header-lg, h-12 w-10 at small
- Logo src: /images/icons/Logo-Primary.svg

### Nav links (desktop, header-lg+)
- fontSize: 16px (some 18px)
- fontWeight: 400
- color: rgb(20, 20, 43)
- padding: 16px
- height: 56px
- hover: backgroundColor: rgb(247, 247, 252), color: rgb(86, 20, 150)
- active: backgroundColor: rgba(151, 71, 255, 0.32)

### "Join Now" button
- backgroundColor: rgb(86, 20, 150)
- color: rgb(255, 255, 255)
- fontWeight: 700
- fontSize: 18px
- padding: 16px 32px
- borderRadius: 9999px
- height: 56px
- text: "Join Now"
- href: /gyms

### My Account link
- display: flex, items-center
- fontSize: 18px, fontWeight: 400
- color: rgb(20, 20, 43)
- padding: 16px
- Icon: bg-common-black (mask) 24x24, changes to purple on hover
- Text: "My Account"

### Region selector button
- text: "US (English)"
- flag icon: /images/flags/us.svg, 20x20
- chevron icon pointing right
- fontSize: 16px

## Nav Links (desktop)
- Memberships → /gym-memberships
- Why PF (dropdown with subitems):
  - Why Planet Fitness → /about-planet-fitness/why-planet-fitness
  - About Planet Fitness → /about-planet-fitness
  - PF Purpose → /pf-purpose
  - Member Perks → /my-account/perks
  - Workouts → /workouts
- About Planet Fitness (second dropdown)
- PF Store → https://shop.planetfitness.com/ (external link icon)

## Mobile Menu
- Hamburger icon: /images/icons/Hamburger.svg (32x32)
- Opens full-screen white overlay (fixed, inset-0, z-30)
- Close icon: /images/icons/CloseFlyoutMenu.svg
- Shows same nav links in accordion/expand style
- Uses CSS checkbox `peer` trick (no JS) — but implement with React state for simplicity

## States & Behaviors

### Hover on nav links
- State A: backgroundColor transparent, color rgb(20, 20, 43)
- State B: backgroundColor rgb(247, 247, 252), color rgb(86, 20, 150)
- Transition: instant (no transition specified)

### Mobile menu toggle
- INTERACTION MODEL: CSS-based (peer checkbox trick) — implement with useState in React
- Hamburger click → menu slides/appears from top
- Close button → menu hides

## Assets
- Logo: `public/images/icons/Logo-Primary.svg`
- Hamburger: `public/images/icons/Hamburger.svg`
- Close: `public/images/icons/CloseFlyoutMenu.svg`
- Chevron: `public/images/icons/Chevron.svg`
- External link: `public/images/icons/ExternalLink.svg`
- US flag: `public/images/flags/us.svg`
- Sign-in icon (mask-image technique): `public/images/icons/SignIn.svg`

## Text Content
- Nav: Memberships, Why PF, About Planet Fitness, PF Store
- Button: Join Now
- Account: My Account
- Region: US (English)

## Responsive Behavior
- **Desktop (≥1024px = header-lg):** Full nav links visible, hamburger hidden, logo slightly overflows header top
- **Mobile (<1024px):** Nav links hidden, hamburger visible, compact logo (h-12)
- Header height: 80px (h-20) at header-lg+, 64px (h-16) at mobile

## Implementation Notes
- Use `next/image` for the logo and icons (or `<img>` with proper dimensions)
- The logo container extends above the header visually — use `lg:mt-10` or negative margin trick
- Skip dropdown menus for simplicity (show "Why PF" as link, not dropdown — the page navigation still works)
- Mobile menu: implement with `useState` toggle, not CSS peer trick
- The `<i>` tag for sign-in icon uses CSS mask — recreate with `<img>` instead
