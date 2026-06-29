# PFAppSection Specification

## Overview
- **Target file:** `src/components/PFAppSection.tsx`
- **Screenshot:** (section 5, purple bg with app phone)
- **Interaction model:** Static

## DOM Structure
```
<section> w-full, bg-primary-main (purple), bg-purpleYellowRightGlare, lg:h-[44.5rem]
  <div> relative, h-full, px-6, pt-16, mx-auto max-w-[42.9rem] at md+, flex-col
    <h2> "Bring the [Judgement Free Zone®] anywhere" (span in yellow)
    <p> description
    <a> "Download the PF App" (white bg, purple text, pill button)
    <img> phone.webp (absolutely positioned, overflows bottom)
```

## Computed Styles

### Section
- backgroundColor: rgb(86, 20, 150)
- background: url("/images/grainy-background.png"),
    radial-gradient(42.29% 54.94% at 92.29% 100%, rgb(255, 230, 0) 0%, rgba(255, 230, 0, 0.18) 65.48%, rgba(171, 110, 122, 0) 100%),
    linear-gradient(265.24deg, rgba(183, 59, 206, 0.9) -35.07%, rgba(255, 102, 252, 0) 28.94%),
    linear-gradient(104deg, rgba(94, 49, 168, 0.29) 25.16%, rgba(170, 123, 67, 0.73) 58.69%, rgb(251, 230, 17) 101.83%),
    linear-gradient(299.86deg, rgba(255, 230, 0, 0.68) 18.74%, rgba(138, 77, 151, 0) 43.81%),
    linear-gradient(250.44deg, rgb(240, 217, 6) 11.29%, rgba(146, 94, 121, 0.475) 35.53%, rgba(106, 42, 170, 0.25) 45.93%),
    linear-gradient(58.75deg, rgba(255, 255, 255, 0.4) -1.75%, rgba(108, 0, 255, 0) 27.33%),
    linear-gradient(103.34deg, rgb(18, 0, 68) -12.9%, rgba(68, 44, 139, 0) 24.24%)
- width: 100%
- height: 712px (desktop) — lg:h-[44.5rem] = 712px

### Inner content container
- position: relative
- display: flex, flexDirection: column
- padding: 64px 24px 0 (pt-16 px-6)
- maxWidth: ~686px (max-w-[42.9rem])
- margin: auto

### h2
- innerHTML: 'Bring the <span> Judgement Free Zone® </span> anywhere'
- "Bring the " and " anywhere": color: rgb(255, 255, 255), fontSize: 48px, fontWeight: 700
- <span> "Judgement Free Zone®": color: rgb(255, 230, 0) (yellow)
- font-condensed (Barlow Condensed ExtraBold)
- lineHeight: 56px

### Description paragraph
- text: "The PF App has it all – pick the best time to visit your club with the Crowd Meter, track your activities, access hundreds of digital on-demand workouts, and more! Ready to get movin'?"
- fontSize: 18px, fontWeight: 400
- color: rgb(255, 255, 255)
- lineHeight: 24px (text-lg/6)
- marginBottom: 24px mobile (mb-6), 32px desktop (lg:mb-8)

### "Download the PF App" button
- href: /mobileapp
- backgroundColor: rgb(255, 255, 255)
- color: rgb(86, 20, 150)
- borderRadius: 28px (rounded-[1.75rem])
- padding: 0px 32px
- height: 56px (h-14)
- display: flex, alignItems: center, justifyContent: center
- fontSize: 18px, fontWeight: 600
- marginBottom: ~69px (mb-[4.3rem])

### Phone image
- src: /images/pf-app-phone.webp
- alt: "Mobile app Main screen"
- position: absolute at desktop (lg:absolute lg:bottom-0 lg:right-[-some])
- On mobile: centered with translate trick
- classes: "ml-[50%] aspect-square w-[21rem] translate-x-[-49%] md:w-[35.6rem] md:translate-x-[-47.7%] lg:absolute lg:bottom-0 lg:right-[...]"
- aspectRatio: 1
- width: 336px mobile, 570px desktop

## Text Content (verbatim)
- h2: "Bring the  Judgement Free Zone®  anywhere" (Judgement Free Zone® in yellow)
- p: "The PF App has it all – pick the best time to visit your club with the Crowd Meter, track your activities, access hundreds of digital on-demand workouts, and more! Ready to get movin'?"
- button: "Download the PF App"

## Assets
- Phone screenshot: `public/images/pf-app-phone.webp`
- Background texture via CSS: `public/images/grainy-background.png`
- Use `bg-purpleYellowRightGlare` CSS utility class

## Responsive Behavior
- **Desktop (lg):** Section height 712px fixed, phone image absolutely positioned at bottom-right, overflowing the section. Text content max-w-[42.9rem] centered.
- **Mobile:** Phone image below text, centered with translate trick. Section height auto.
- At desktop the phone image extends beyond the section bottom (negative bottom or 0, overflows into next section)

## Implementation Notes
- Apply `bg-purpleYellowRightGlare` class to section (defined in globals.css)
- The phone image uses an unusual centering trick: `ml-[50%] translate-x-[-49%]` to center it regardless of container
- At lg+: `position: absolute; bottom: 0; right: -something` — the exact right value isn't critical, center-right of the section
- Make the section `overflow-hidden` to contain the phone or let it overflow
