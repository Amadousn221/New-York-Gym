# MembershipsSection Specification

## Overview
- **Target file:** `src/components/MembershipsSection.tsx`
- **Screenshot:** (scroll down from hero)
- **Interaction model:** Static — two membership cards + CTA link

## DOM Structure
```
<section> bg-surface-gray, flex-col, items-center, px-6, py-16
  <div> max-w-[57rem] mx-auto header area
    <h2> "Memberships"
    <p> description text
  <div> cards container, mt-12/mt-16
    <div> cards wrapper (flex, gap)
      <!-- PF Black Card (dark gradient) -->
      <div> card: gradient-card-dark bg, rounded-3xl, flex-col, p-8/p-10
        <span> "PF BLACK CARD®" (condensed, uppercase, white)
        <span> "Best Value" badge (yellow bg, dark purple text, rounded)
        <p> "Starting at"
        <span> "$24.99" (yellow, 32px, bold)
        <span> "/mo*"
        <p> "plus taxes & fees"
        <p> description text (white)
        <a> "Learn More" (white underline link)
        <a> "Join Now" (white bg, purple text, rounded-full)
      <!-- Classic Membership (white/light) -->
      <div> card: white bg, border, rounded-3xl, flex-col, p-8/p-10
        <span> "CLASSIC" (condensed, uppercase, dark)
        <p> "Starting at"
        <span> "$15" (purple, 32px, bold)
        <span> "/mo*"
        <p> "plus taxes & fees"
        <p> description text (dark)
        <a> "Learn More" (purple underline link)
        <a> "Join Now" (purple bg, white text, rounded-full)
  <a> "Compare Memberships" — outline button, pill, purple border
```

## Computed Styles

### Section
- backgroundColor: rgb(247, 247, 252)
- display: flex, flexDirection: column, alignItems: center
- padding: 64px 24px (pt-16 pb varies)

### Section heading
- "Memberships" h2: fontSize: 48px, fontWeight: 700, color: rgb(20, 20, 43)
- Description p: fontSize: 18px, fontWeight: 400, color: rgb(75, 75, 76), textAlign: center

### PF Black Card (dark card)
- background: linear-gradient(330deg, rgb(20, 20, 43) 18%, rgb(86, 20, 150) 84%)
- borderRadius: 24px (rounded-3xl)
- padding: 32px-40px
- "PF BLACK CARD®": fontSize: 24px, fontWeight: 700/800, color: white, textTransform: uppercase, font-condensed
- "Best Value" badge: backgroundColor: rgb(255, 230, 0), color: rgb(52, 0, 89), fontSize: 14px, fontWeight: 600, borderRadius: 4px, padding: 3px 8px
- "$24.99": fontSize: 32px, fontWeight: 700, color: rgb(255, 230, 0)
- "/mo*": fontSize: 18px, color: white
- "plus taxes & fees": fontSize: 14px, color: white
- Description: fontSize: 18px, color: white
- "Learn More": fontWeight: 600, color: white, textDecoration: underline
- "Join Now": backgroundColor: white, color: rgb(86, 20, 150), borderRadius: 9999px, padding: 16px 32px, fontWeight: 600, fontSize: 18px

### Classic Card (light card)
- backgroundColor: rgb(255, 255, 255)
- border: ~1px solid rgb(229, 231, 235) (or similar)
- borderRadius: 24px
- padding: 32px-40px
- "CLASSIC": fontSize: 24px, fontWeight: 800, color: rgb(20, 20, 43), uppercase, font-condensed
- "$15": fontSize: 32px, fontWeight: 700, color: rgb(86, 20, 150)
- "plus taxes & fees": fontSize: 14px, color: rgb(112, 112, 112)
- Description: fontSize: 18px, color: rgb(20, 20, 43)
- "Learn More": fontWeight: 600, color: rgb(86, 20, 150), underline
- "Join Now": backgroundColor: rgb(86, 20, 150), color: white, borderRadius: 9999px, padding: 16px 32px, fontWeight: 600, fontSize: 18px

### "Compare Memberships" button
- backgroundColor: transparent
- border: 1.5px solid rgb(86, 20, 150)
- color: rgb(86, 20, 150)
- borderRadius: 9999px
- padding: 16px 32px
- fontSize: 18px, fontWeight: 700
- marginTop: 48px (mt-12)
- href: /gym-memberships/#compare

## Text Content (verbatim)
- h2: "Memberships"
- p: "We offer the PF Black Card® Membership and Classic Membership. Both get you access to The Judgement Free Zone®, and tons of cardio and strength equipment."
- Black Card name: "PF BLACK CARD®"
- Black Card badge: "Best Value"
- Black Card price: "Starting at $24.99 /mo* plus taxes & fees"
- Black Card description: "Access to any club, bring a guest anytime, PF+ premium digital workouts, and so much more!"
- Classic name: "CLASSIC"
- Classic price: "Starting at $15 /mo* plus taxes & fees"
- Classic description: "Our standard membership, with unlimited access to your home club."

## Links
- Black Card Learn More: /gym-memberships/#blackCard
- Black Card Join Now: /gyms
- Classic Learn More: /gym-memberships/#classicCard
- Classic Join Now: /gyms
- Compare Memberships: /gym-memberships/#compare

## Responsive Behavior
- **Desktop:** Cards side by side (2-column flex/grid), max-w-[57rem]
- **Mobile:** Cards stack vertically
- Card padding reduces slightly at smaller breakpoints
- Font sizes: heading 32px (text-[2rem]) mobile, 48px (text-5xl) desktop
