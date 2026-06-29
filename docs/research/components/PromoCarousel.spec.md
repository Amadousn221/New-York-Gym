# PromoCarousel Specification

## Overview
- **Target file:** `src/components/PromoCarousel.tsx`
- **Screenshot:** (section 3 and section 7)
- **Interaction model:** Click-driven — prev/next buttons switch slides
- **Used twice:** Carousel 1 (5 slides) and Carousel 2 (4 slides) — same component, different data

## DOM Structure
```
<section> w-full, max-w-full, justify-center, pb-4
  <div> flex, w-full, max-w-full, flex-col
    <!-- Slide track: shows 3 slides partially, scrolls -->
    <div> slide track (flex, overflow-hidden or scroll)
      <div> slide item (repeated)
        <!-- Left column: text + CTA -->
        <div> text content
          <h2> slide title (condensed, uppercase, large)
          <p> slide description (gray dark text)
          <a> CTA button (purple pill, full-width)
        <!-- Right column: square image -->
        <div> image container (square, rounded-3xl)
          <img> slide image (aspect-square, rounded-3xl, object-cover)
    <!-- Controls: prev counter next -->
    <div> controls row (flex, items-center, justify-end or between)
      <button> "Previous slide" (disabled on first)
      <span> "1/5" counter
      <button> "Next slide"
```

## Computed Styles

### Section
- display: flex, justifyContent: center
- width: 100%, overflow: hidden, paddingBottom: 16px
- height: 640px (at desktop)

### Slide layout
- Each slide: flex row (text left, image right) at desktop
- Mobile: flex-col (image on top/right)
- Gap between text and image

### Slide title (h2)
- font-condensed (Barlow Condensed ExtraBold 800)
- fontSize: 48px (lg:text-5xl), 32px mobile (text-[2rem])
- fontWeight: 800
- color: rgb(20, 20, 43) [dark text on white bg]
- textTransform: uppercase
- lineHeight: 1 (none)

### Slide description (p)
- fontSize: 18px
- fontWeight: 400
- color: rgb(75, 75, 76) (text-gray-dark)
- lineHeight: 24px (text-lg/6)

### CTA Button
- backgroundColor: rgb(86, 20, 150) (bg-primary-main)
- color: rgb(255, 255, 255)
- borderRadius: 9999px (rounded-full)
- padding: 16px 32px (px-8 py-4)
- width: 100% (w-full) on mobile
- fontSize: 18px, fontWeight: 600
- marginTop: 16px (mt-4)

### Image container
- aspectRatio: 1 (aspect-square)
- borderRadius: 24px (rounded-3xl)
- objectFit: cover

### Controls
- Prev/Next buttons: 32px (size-8), p-0.5, overflow-visible
- Counter span: fontSize: 16px base, 18px at lg, min-w-6 (mx-2), text-center
- Prev button disabled on first slide

## Carousel 1 Slides (5 slides)

### Slide 1
- title: "HIGH SCHOOL SUMMER PASS® IS HERE"
- description: "NOW - August 31, teens ages 14-19 can work out for FREE. Build strength where it counts this summer – with progress that's all yours. Plus, enjoy 20% off Gymshark when you sign up."
- cta: "Sign Up Now" → /summerpass
- image: /images/carousel1-slide1-summer-pass.webp
- imageAlt: "Planet Fitness HIGH SCHOOL SUMMER PASS® IS HERE, powered by Gymshark"

### Slide 2
- title: "Award-Winning Member Support"
- description: "We're proud to be recognized on America's Best Customer Service list, a reflection of our team's commitment to creating a friendly environment where everyone feels accepted and respected."
- cta: "Join the Club" → /gyms
- image: /images/carousel1-slide2-usa-today.webp
- imageAlt: "Planet Fitness: USA Today - America's best customer service 2026"

### Slide 3
- title: "You Belong® at Planet Fitness"
- description: "Shop our 2026 Pride Collection with all sale profits* benefiting CenterLink, a nonprofit organization that connects and strengthens LGBTQ+ community centers worldwide. Check out our free PF App to move and express yourself."
- cta: "Learn More" → /youbelong
- image: /images/carousel1-slide3-pride.webp
- imageAlt: "Learn More"

### Slide 4
- title: "WELCOME TO PLANET FITNESS"
- description: "We've created a comfortable, safe and energetic environment for everyone. A space where you can go at your own pace, and do your own thing without ever having to worry about being judged."
- cta: "Learn More" → /about-planet-fitness/why-planet-fitness
- image: /images/carousel1-slide4-bc-guest.webp
- imageAlt: "Learn More"

### Slide 5
- title: "TAKE A VIRTUAL CLUB TOUR!"
- description: "Join us on a virtual club tour around a Planet Fitness. You'll learn all about the different areas of the club and Teddy will show you how to get the most out of a membership and where you can start your fitness journey."
- cta: "Watch the Club Tour!" → /virtual-tour
- image: /images/carousel1-slide5-virtual-tour.webp
- imageAlt: "Watch the Club Tour!"

## Carousel 2 Slides (4 slides)

### Slide 1
- title: "NEW! Workout Guides in the PF App"
- description: "Want a guide to easily follow that walks you through reps and sets in step-by-step routines? We got you! Bonus: each exercise includes a visual tutorial to guide you on proper form."
- cta: "Check Out Guides" → https://planetfitness.app.link/categoryworkouts/3Sg7CG5q2iTSgQtGWOd4ZR
- image: /images/carousel2-slide1-workout-guides.webp
- imageAlt: "PF Text Workouts in the App"

### Slide 2
- title: "GET ENERGIZED WITH EXCLUSIVE PERKS"
- description: "Save big on your favorite brands with exclusive discounts and special offers."
- cta: "Explore Perks" → /my-account/perks
- image: /images/carousel2-slide2-perks.webp
- imageAlt: "Explore Perks"

### Slide 3
- title: "Earn Free Months By Referring Your Friends"
- description: "Want a workout buddy and a sweet deal at the same time? Every friend you refer that joins earns you a free month (up to 3 months/year)!* Plus, your friends get a great deal of $1 down and no commitment to join."
- cta: "Refer a Friend" → https://planetfitness.app.link/refer
- image: /images/carousel2-slide3-refer-friend.webp
- imageAlt: "Refer a Friend"

### Slide 4
- title: "GET YOUR GEAR"
- description: "We have everything you need to start your fitness journey from bags, outfits, locker room essentials and more, all at low costs! Check out our store."
- cta: "Shop Now" → http://shop.planetfitness.com/
- image: /images/carousel2-slide4-store.webp
- imageAlt: "PF Gear"

## Implementation Notes
- Component accepts `slides: CarouselSlide[]` prop
- Track active slide index with useState
- At desktop: show slide with text on left ~40%, image on right ~50%, with peek of next slide
- At mobile: vertical layout, full-width image + text below
- Counter shows `${currentIndex + 1}/${slides.length}`
- Prev button disabled when currentIndex === 0
- Use CSS transitions (opacity or transform) for slide transitions
- Simple approach: show one slide at a time with a fade or slide-left transition
