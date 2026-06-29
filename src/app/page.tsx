import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { MembershipsSection } from "@/components/MembershipsSection";
import { PromoCarousel, type CarouselSlide } from "@/components/PromoCarousel";
import { WhyPFSection } from "@/components/WhyPFSection";
import { PFAppSection } from "@/components/PFAppSection";
import { GetStartedSection } from "@/components/GetStartedSection";
import { Footer } from "@/components/Footer";

const carousel1Slides: CarouselSlide[] = [
  {
    title: "HIGH SCHOOL SUMMER PASS® IS HERE",
    description:
      "NOW - August 31, teens ages 14-19 can work out for FREE. Build strength where it counts this summer – with progress that's all yours. Plus, enjoy 20% off Gymshark when you sign up.",
    ctaLabel: "Sign Up Now",
    ctaHref: "/summerpass",
    image: "/images/carousel1-slide1-summer-pass.webp",
    imageAlt: "Planet Fitness HIGH SCHOOL SUMMER PASS® IS HERE, powered by Gymshark",
  },
  {
    title: "Award-Winning Member Support",
    description:
      "We're proud to be recognized on America's Best Customer Service list, a reflection of our team's commitment to creating a friendly environment where everyone feels accepted and respected.",
    ctaLabel: "Join the Club",
    ctaHref: "/gyms",
    image: "/images/carousel1-slide2-usa-today.webp",
    imageAlt: "Planet Fitness: USA Today - America's best customer service 2026",
  },
  {
    title: "You Belong® at Planet Fitness",
    description:
      "Shop our 2026 Pride Collection with all sale profits* benefiting CenterLink, a nonprofit organization that connects and strengthens LGBTQ+ community centers worldwide. Check out our free PF App to move and express yourself.",
    ctaLabel: "Learn More",
    ctaHref: "/youbelong",
    image: "/images/carousel1-slide3-pride.webp",
    imageAlt: "Learn More",
  },
  {
    title: "WELCOME TO PLANET FITNESS",
    description:
      "We've created a comfortable, safe and energetic environment for everyone. A space where you can go at your own pace, and do your own thing without ever having to worry about being judged.",
    ctaLabel: "Learn More",
    ctaHref: "/about-planet-fitness/why-planet-fitness",
    image: "/images/carousel1-slide4-bc-guest.webp",
    imageAlt: "Learn More",
  },
  {
    title: "TAKE A VIRTUAL CLUB TOUR!",
    description:
      "Join us on a virtual club tour around a Planet Fitness. You'll learn all about the different areas of the club and Teddy will show you how to get the most out of a membership and where you can start your fitness journey.",
    ctaLabel: "Watch the Club Tour!",
    ctaHref: "/virtual-tour",
    image: "/images/carousel1-slide5-virtual-tour.webp",
    imageAlt: "Watch the Club Tour!",
  },
];

const carousel2Slides: CarouselSlide[] = [
  {
    title: "NEW! Workout Guides in the PF App",
    description:
      "Want a guide to easily follow that walks you through reps and sets in step-by-step routines? We got you! Bonus: each exercise includes a visual tutorial to guide you on proper form.",
    ctaLabel: "Check Out Guides",
    ctaHref: "https://planetfitness.app.link/categoryworkouts/3Sg7CG5q2iTSgQtGWOd4ZR",
    image: "/images/carousel2-slide1-workout-guides.webp",
    imageAlt: "PF Text Workouts in the App",
  },
  {
    title: "GET ENERGIZED WITH EXCLUSIVE PERKS",
    description: "Save big on your favorite brands with exclusive discounts and special offers.",
    ctaLabel: "Explore Perks",
    ctaHref: "/my-account/perks",
    image: "/images/carousel2-slide2-perks.webp",
    imageAlt: "Explore Perks",
  },
  {
    title: "Earn Free Months By Referring Your Friends",
    description:
      "Want a workout buddy and a sweet deal at the same time? Every friend you refer that joins earns you a free month (up to 3 months/year)!* Plus, your friends get a great deal of $1 down and no commitment to join.",
    ctaLabel: "Refer a Friend",
    ctaHref: "https://planetfitness.app.link/refer",
    image: "/images/carousel2-slide3-refer-friend.webp",
    imageAlt: "Refer a Friend",
  },
  {
    title: "GET YOUR GEAR",
    description:
      "We have everything you need to start your fitness journey from bags, outfits, locker room essentials and more, all at low costs! Check out our store.",
    ctaLabel: "Shop Now",
    ctaHref: "http://shop.planetfitness.com/",
    image: "/images/carousel2-slide4-store.webp",
    imageAlt: "PF Gear",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <MembershipsSection />
        <PromoCarousel slides={carousel1Slides} />
        <WhyPFSection />
        <PFAppSection />
        <PromoCarousel slides={carousel2Slides} />
        <GetStartedSection />
      </main>
      <Footer />
    </>
  );
}
