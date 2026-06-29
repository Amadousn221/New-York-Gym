# Planet Fitness Page Topology

## URL: https://www.planetfitness.com/

## Overall Layout
- Single scrollable page, `<main class="flex min-h-full flex-col bg-white">`
- Total height: ~5687px at 1440px viewport
- No scroll snap, no Lenis, no smooth scroll library
- Standard browser scroll

## Section Map (top to bottom)

| # | Name | Offset | Height | Background | Interaction |
|---|------|--------|--------|------------|-------------|
| - | Header | sticky, z-50 | 80px | white | Static (sticky) |
| 1 | Hero | 80px | 538px | Purple gradient + grainy | Static (search form) |
| 2 | Memberships | 618px | 819px | rgb(247,247,252) gray | Static |
| 3 | Promo Carousel 1 | 1437px | 640px | white | Click-driven carousel (5 slides) |
| 4 | Why PF | 2077px | 1145px | white | Static |
| 5 | PF App | 3221px | 712px | Purple + yellow glare | Static |
| 6 | Promo Carousel 2 | 3933px | 640px | white | Click-driven carousel (4 slides) |
| 7 | Get Started | 4573px | 520px | rgb(247,247,252) gray | Static |
| 8 | Footer | 5093px | 594px | rgb(86,20,150) purple | Static |

## Fixed/Sticky Elements
- **Header**: `position: sticky; top: 0; z-index: 50` — always visible at top

## Z-Index Layers
- Header: z-50
- Mobile nav overlay: z-30
- Cookie banner: z-2147483647 (OneTrust)

## Dependencies
- Header must be built first (sets sticky nav)
- All sections are independent flow content beneath the header
