# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Screenshot:** (bottom of page, purple bg)
- **Interaction model:** Static

## DOM Structure
```
<footer> bg-primary-main (purple), w-full, px-6, pb-[4.5rem], text-lg/6, text-white
  <div> m-auto, max-w-[71.5rem]
    <!-- Top row: logo + app download button -->
    <div> flex, items-center, justify-between (desktop), py-12/py-6
      <img> small-logo.svg (hidden on mobile, md:block)
      <a> "Download the PF App" (white bg, purple text, pill)
    <hr> separator
    <!-- Link columns -->
    <div> grid or flex row of 3 columns
      <div> Info column
        <p> "Info" (bold heading)
        <ul> Newsroom, Careers, FAQs, Directory, Blog
      <div> Partners column  
        <p> "Partners" (bold heading)
        <ul> Franchising, Investor Relations, PF Purpose, PF Media Network
      <div> Legal column
        <p> "Legal" (bold heading)
        <ul> Privacy Policy, Terms and Conditions of Use, Do Not Sell..., Your State and EU Privacy Rights, Accessibility
    <hr> separator
    <!-- Bottom row: region + social + copyright -->
    <div> flex, items-center, justify-between
      <button> Region selector (US English + flag + chevron)
      <div> social icons (Facebook, Instagram, TikTok, YouTube)
      <p> © 2026 Planet Fitness Franchising, LLC.
```

## Computed Styles

### Footer
- backgroundColor: rgb(86, 20, 150)
- color: rgb(255, 255, 255)
- width: 100%
- paddingLeft/Right: 24px (px-6)
- paddingBottom: 72px (pb-[4.5rem])
- fontSize: 18px, lineHeight: 24px (text-lg/6)

### Small PF logo
- src: /images/small-logo.svg
- hidden on mobile (hidden md:block)
- height: 48px, width: 49px

### "Download the PF App" button
- href: /mobileapp
- backgroundColor: rgb(255, 255, 255)
- color: rgb(86, 20, 150)
- display: flex, h-14 (56px), items-center, justifyContent: center
- w-full max-w-sm (at mobile full width, at desktop max ~384px)
- borderRadius: 9999px (rounded-full? or 28px?)
- fontSize: 18px, fontWeight: 600
- padding: 0 24px

### Separators (hr)
- borderColor: rgba(255,255,255,0.2) or similar — white with low opacity

### Link group headings
- fontSize: 18px, fontWeight: 700
- color: rgb(255, 255, 255)
- marginBottom: 24px (mb-6)

### Footer links
- fontSize: 18px, fontWeight: 400
- color: rgb(255, 255, 255)
- display: block, each on its own line (flex-col)
- hover: likely opacity or underline

### Social icons
- Facebook, Instagram, TikTok, YouTube
- Icon size: ~24px
- Color: white
- The original uses SVG icons — implement with simple SVG icons or use a library

### Region selector (button)
- text: "US (English)"
- flag: /images/flags/us.svg (20x20)
- chevron icon
- color: white

### Copyright
- "© 2026 Planet Fitness Franchising, LLC."
- fontSize: 16px (text-base)
- color: white

## Text Content (verbatim)

### Info column
Heading: "Info"
Links: Newsroom, Careers, FAQs, Directory, Blog

### Partners column
Heading: "Partners"
Links: Franchising, Investor Relations, PF Purpose, PF Media Network

### Legal column
Heading: "Legal"
Links: Privacy Policy, Terms and Conditions of Use, Do Not Sell or Share My Personal Information, Your State and EU Privacy Rights, Accessibility

### Bottom
- Region: "US (English)"
- Copyright: "© 2026 Planet Fitness Franchising, LLC."
- "Follow us:" (hidden on mobile)

## Link hrefs
- Download PF App: /mobileapp
- Newsroom: /newsroom
- Careers: /careers
- FAQs: /about-planet-fitness/customer-service
- Directory: /clubs
- Blog: /blog
- Franchising: /become-a-franchisee
- Investor Relations: http://investor.planetfitness.com/investors
- PF Purpose: /pf-purpose
- PF Media Network: /pf-media-network
- Privacy Policy: /privacy-policy
- Terms and Conditions: /terms-and-conditions-of-use
- Do Not Sell: /#cookie-settings
- Your Privacy Rights: /privacy-policy/your-privacy-rights
- Accessibility: /about-planet-fitness/customer-service#region-faq-accordion-3
- Facebook: https://www.facebook.com/planetfitness
- Instagram: https://www.instagram.com/planetfitness
- TikTok: https://www.tiktok.com/@planetfitness
- YouTube: https://www.youtube.com/user/planetfitnessnh

## Responsive Behavior
- **Desktop:** Logo + app button row (space-between), 3-column link grid, bottom bar all inline
- **Mobile:** App button full-width centered, links stack, logo hidden
- Max content width: 71.5rem

## Implementation Notes
- Use simple inline SVG icons for Facebook, Instagram, TikTok, YouTube (just white circles or simple shapes)
- Or use Lucide icons: Facebook, Instagram, Youtube — TikTok isn't in Lucide, use a simple custom SVG
- The purple bg uses `bg-primary-main` class
