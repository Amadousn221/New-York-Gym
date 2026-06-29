# HeroSection Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Screenshot:** `docs/design-references/hero-section.png`
- **Interaction model:** Static — search form with input + submit button (no real API)

## DOM Structure
```
<section> relative, full-width, hero gradient background
  <div> relative flex (flex-col-reverse mobile, flex-row desktop)
    <!-- Left: text + search (bottom on mobile, left on desktop) -->
    <div> content area with find-a-club form
      <h1> (empty in original — visual text is part of SVG image)
      <form> find-a-club search
        <input type="search"> placeholder: "Search by address, city, or ZIP code"
        <button type="submit"> "Find a Club" (pill, purple)
    <!-- Center: hero image (fitness model SVG) -->
    <picture> hero fitness model (SVG, responsive)
      <img> /images/hero-fitness-model.webp, alt="We are all strong on this Planet™. Join the club today!"
    <!-- Right: promo image card -->
    <picture> promo image (join now image)
      <img> /images/hero-promo-bg.webp, alt="Join Planet Fitness!"
  <div> spacer h-[7.5rem] md:h-auto
```

## Computed Styles

### Section container
- position: relative
- width: 100%
- height: 538px (at 1440px)
- background: url("/images/grainy-background.png"),
    radial-gradient(62.63% 62.63% at 100% 50%, rgba(94, 27, 157, 0.97) 21.5%, rgba(115, 48, 179, 0.88) 63%, rgba(140, 72, 204, 0) 100%),
    radial-gradient(63.46% 63.46% at 0px 100%, rgb(215, 173, 86) 23.69%, rgba(130, 24, 165, 0) 88.55%),
    linear-gradient(rgb(138, 70, 200) 0%, rgb(68, 34, 98) 100%)

### Hero fitness model image
- classes: md:max-h-[334px]
- The SVG image shows athletic person with purple/yellow branding
- On desktop: takes up center/right portion of layout

### Promo side image
- classes: size-full object-cover lg:aspect-square
- Shows the January promo gradient image

### Search form/bar
- Container: white background, rounded-full, flex, shadow-like appearance
- Input: bg-transparent, text-base/6, placeholder text
- Submit button: bg-primary-main (purple), rounded-full, m-2, flex items-center
  - Has search SVG icon + "Find a Club" text (text hidden on small, shown on lg)
  - Button styles: backgroundColor: rgb(86, 20, 150), color: white, borderRadius: 9999px

## Text Content
The H1 is empty — the "We are all strong on this Planet™. Join the club today!" text is part of the SVG image (hero-fitness-model.webp).

The only visible UI text is:
- Input placeholder: "Search by address, city, or ZIP code"
- Button text: "Find a Club"

## Assets
- Hero fitness model: `public/images/hero-fitness-model.webp`
- Hero promo bg: `public/images/hero-promo-bg.webp`
- Background texture: `public/images/grainy-background.png` (via CSS)

## Responsive Behavior
- **Desktop (md+):** flex-row — content left, images right, image max-h-334px
- **Mobile:** flex-col-reverse — images shown first (top), then form below
- Section height: 538px desktop, taller on mobile
- The search bar sits at bottom of hero section, likely overlapping the Memberships section below

## Implementation Notes
- Use `bg-hero-gradient-1` utility class (defined in globals.css) for section background
- The form doesn't need to be functional — on submit, navigate to /gyms
- The search input should have the magnifying glass icon inside the button
- White search bar: `bg-white rounded-full flex items-center shadow-md`
- Section has slight overflow or spacer that creates visual overlap with memberships section below
