"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

/* ── Types ─────────────────────────────────────────────────────── */
interface AccordionItem {
  id: string;
  label: string;
  icon: string;
  image: string;
  alt: string;
  description: string;
}

interface ArticleItem {
  title: string;
  description: string;
  cta: string;
  href: string;
  image: string;
  alt: string;
}

interface GetStartedCard {
  title: string;
  icon: string;
  href: string;
}

/* ── Data ───────────────────────────────────────────────────────── */
const accordionItems: AccordionItem[] = [
  {
    id: "judgement-free",
    label: "Judgement Free™",
    icon: "JudgementFree.svg",
    image: "/images/why-pf/accordion-judgement-free.webp",
    alt: "Judgement Free™",
    description:
      "At Planet Fitness, you'll find an uplifting and motivating community where you can define progress on your own terms. No matter where you are on your journey, we've got you.",
  },
  {
    id: "equipment",
    label: "Best-in-class equipment",
    icon: "Equipment.svg",
    image: "/images/why-pf/accordion-equipment.webp",
    alt: "Best-in-class equipment",
    description:
      "We invest in top-of-the-line fitness equipment so you always have access to the best tools for your workout. From cardio to strength training, our clubs have everything you need to crush your goals.",
  },
  {
    id: "clean-clubs",
    label: "Clean & spacious clubs",
    icon: "CleanClubs.svg",
    image: "/images/why-pf/accordion-clean.webp",
    alt: "Clean & spacious clubs",
    description:
      "Our clubs are cleaned and maintained to the highest standards, so you can focus on your workout. Enjoy wide-open, welcoming spaces that make fitness comfortable for everyone.",
  },
  {
    id: "best-value",
    label: "Best value on the planet",
    icon: "Money.svg",
    image: "/images/why-pf/accordion-value.webp",
    alt: "Best value on the planet",
    description:
      "Starting at just $10 a month, Planet Fitness offers the best value in fitness. Get access to great amenities, equipment, and friendly staff at a price that works for everyone.",
  },
];

const articles: ArticleItem[] = [
  {
    title: "Recover in the Black Card Spa®",
    description:
      "One membership, a number of ways to get strong. With the PF Black Card®, you can bring a friend anytime, access any of our convenient locations worldwide, recover in the Black Card Spa®, and more!",
    cta: "Learn More",
    href: "/gym-memberships/#blackCard",
    image: "/images/why-pf/recover-spa.webp",
    alt: "Woman with her eyes closed and headphones on relaxing on a HydroMassage chair in a Planet Fitness club",
  },
  {
    title: "Take Your Workout Anywhere",
    description:
      "With the free PF App, you can work out anywhere, any time. Browse hundreds of workout videos & guides, watch equipment tutorials, track your progress, and more.",
    cta: "Download the PF App",
    href: "/mobileapp",
    image: "/images/why-pf/pf-app.webp",
    alt: "Image of phone screen open to the Workouts tab on the Planet Fitness app",
  },
  {
    title: "Exclusive Offers & Discounts",
    description:
      "Your membership goes beyond just your fitness experience. Unlock members-only deals from top brands when you join and get the most out of your membership.",
    cta: "Explore All PF Perks",
    href: "/my-account/perks",
    image: "/images/why-pf/perks.webp",
    alt: "Man in workout clothes looking at phone and smiling in a Planet Fitness club",
  },
];

const getStartedCards: GetStartedCard[] = [
  { title: "Find a Club Near You", icon: "Search.svg", href: "/gyms" },
  { title: "Explore Perks", icon: "WCPerks.svg", href: "/my-account/perks" },
  { title: "Take a Virtual Tour", icon: "VirtualTour.svg", href: "/virtual-tour" },
];

/* ── Icon helper ─────────────────────────────────────────────────── */
function MaskIcon({
  icon,
  className,
  color = "bg-primary-main",
}: {
  icon: string;
  className: string;
  color?: string;
}) {
  return (
    <i
      className={`${color ?? "bg-primary-main"} ${className} inline-block shrink-0`}
      style={{
        mask: `url(/images/icons/${icon}) no-repeat center / contain`,
        WebkitMask: `url(/images/icons/${icon}) no-repeat center / contain`,
      }}
      aria-hidden="true"
    />
  );
}

/* ── Page ────────────────────────────────────────────────────────── */
export default function WhyPlanetFitnessPage() {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <>
      <Header />
      <main>
        {/* ── H1 above hero ──────────────────────────────────────── */}
        <div className="px-6 pb-8 pt-10 md:px-16 lg:px-36 lg:pb-12 lg:pt-16">
          <h1 className="text-[4.5rem] font-bold leading-[4.5rem] tracking-[-1.08px] text-common-black">
            Welcome to the club
          </h1>
        </div>

        {/* ── Hero image section ──────────────────────────────────── */}
        <section className="relative flex h-[41.5rem] items-end bg-transparent md:h-[29.3rem] lg:h-[50.625rem] lg:w-full lg:justify-center">
          <div className="absolute inset-0">
            <Image
              src="/images/why-pf/hero.webp"
              alt="Planet Fitness gym interior with members working out"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          <div className="relative z-10 pb-10 pl-6 md:pl-16 lg:pb-20 lg:pl-0">
            <h2 className="max-w-[35.25rem] text-[3rem] font-bold leading-[3.5rem] tracking-[-0.72px] text-white">
              We&rsquo;re All Strong on this Planet™
            </h2>
          </div>
        </section>

        {/* ── Belong section ──────────────────────────────────────── */}
        <section>
          {/* 4-icon strip */}
          <div className="mt-16 flex flex-wrap justify-between gap-x-6 gap-y-8 px-6 md:gap-x-4 lg:mx-auto lg:mt-20 lg:max-w-[74.5rem]">
            {accordionItems.map((item) => (
              <div
                key={item.id}
                className="flex basis-[40%] flex-col items-center md:flex-1"
              >
                <MaskIcon icon={item.icon} className="size-12 lg:size-14" />
                <p className="mt-2 text-center text-base/5 font-semibold lg:mt-4 lg:text-2xl/8">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* Accordion + image */}
          <div className="w-full px-6 py-16 md:px-[9.25rem] lg:px-8 lg:py-20">
            <div className="relative flex flex-col lg:m-auto lg:min-h-[42.5rem] lg:max-w-[71.5rem] lg:flex-row lg:justify-between lg:gap-10">
              {/* Left: heading + accordion items + CTA */}
              <div className="flex shrink-0 flex-col items-center md:items-start lg:max-w-[28rem]">
                <h3 className="self-start text-2xl font-bold tracking-[-0.36px] md:mb-6 lg:mb-8 lg:text-[2rem]/10 lg:tracking-[-0.48px]">
                  Belong and Get Strong
                </h3>

                <div className="flex w-full flex-col md:gap-6 lg:gap-8">
                  {accordionItems.map((item, idx) => (
                    <div key={item.id} className="border-b border-border-light md:border-none">
                      {/* Mobile-only: show image when active */}
                      {activeItem === idx && (
                        <div className="relative mx-auto mb-4 aspect-square w-full max-w-md overflow-hidden rounded-2xl md:hidden">
                          <Image
                            src={item.image}
                            alt={item.alt}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}

                      <button
                        onClick={() => setActiveItem(idx)}
                        className="flex w-full items-center justify-between py-6 md:py-0"
                      >
                        <div className="flex items-center">
                          <MaskIcon
                            icon={item.icon}
                            className="mr-4 size-8"
                          />
                          <span className="text-lg/6 font-semibold text-left">
                            {item.label}
                          </span>
                        </div>
                        <div
                          className={`show-more ml-4 flex size-6 items-center justify-center transition-transform duration-300 lg:mt-2 ${
                            activeItem === idx ? "-rotate-90" : "rotate-90"
                          }`}
                        >
                          <MaskIcon
                            icon="Chevron.svg"
                            className="h-2.5 w-[7px]"
                            color="bg-primary-main"
                          />
                        </div>
                      </button>

                      {/* Description — visible when active */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          activeItem === idx
                            ? "max-h-40 mb-6 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="mt-2 text-gray-dark text-base/6 md:text-lg/[1.5rem]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/gym-memberships"
                  className="bg-primary-main text-common-white mx-auto mt-8 block w-full max-w-sm rounded-full px-8 py-4 text-center text-lg/6 font-semibold md:w-fit md:px-6 md:py-2 lg:mx-0 lg:mt-12 lg:px-8 lg:py-4"
                >
                  Join Now
                </Link>
              </div>

              {/* Tablet: square image below accordion */}
              <div className="hidden md:block lg:hidden mx-auto mt-8 aspect-square max-w-[327px] w-full overflow-hidden rounded-2xl">
                <div className="relative w-full h-full">
                  <Image
                    src={accordionItems[activeItem].image}
                    alt={accordionItems[activeItem].alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Desktop: absolutely positioned image that fades in/out */}
              {accordionItems.map((item, idx) => (
                <div
                  key={`img-${item.id}`}
                  className={`pointer-events-none hidden lg:block lg:absolute lg:right-0 lg:top-0 lg:h-[42.5rem] lg:w-[calc(50%-1.25rem)] transition-opacity duration-300 ${
                    activeItem === idx ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="relative h-full w-full overflow-hidden rounded-3xl">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Purple CTA ──────────────────────────────────────────── */}
        <section className="bg-primary-main bg-purpleYellowLeftGlare pt-16 md:px-24 lg:px-0">
          <div className="flex flex-col lg:flex-row lg:items-end">
            <div className="relative aspect-square w-full max-w-[44.5rem] lg:w-1/2">
              <Image
                src="/images/why-pf/belong-member.webp"
                alt="Planet Fitness member working out"
                fill
                className="object-cover"
              />
            </div>
            <div className="px-6 pb-16 pt-8 text-white lg:w-1/2 lg:px-16 lg:pb-24 lg:pt-0">
              <h2 className="text-[3rem]/[3.5rem] font-bold tracking-[-0.72px] lg:text-5xl/[3.5rem]">
                Workout trends come and go. You can just come as you are.
              </h2>
              <Link
                href="/gym-memberships"
                className="mt-8 inline-block rounded-full bg-secondary-main px-8 py-4 text-lg/6 font-semibold text-common-black"
              >
                Join Now
              </Link>
            </div>
          </div>
        </section>

        {/* ── 3 articles ──────────────────────────────────────────── */}
        <section className="mx-auto flex w-full flex-col gap-12 px-6 py-16 md:max-w-[52.5rem] md:gap-16 lg:max-w-[74.5rem] lg:py-20">
          {articles.map((article, idx) => (
            <article
              key={article.title}
              className={`flex flex-col items-center gap-8 lg:gap-28 ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              <div className="mt-6 md:mt-8 md:max-w-[638px] lg:mt-0 lg:max-w-md">
                <h2 className="text-[2rem]/10 font-bold tracking-[-0.24px] lg:text-5xl/[3.5rem]">
                  {article.title}
                </h2>
                <p className="mt-6 text-gray-dark text-lg/[1.5rem] lg:my-8">
                  {article.description}
                </p>
                <Link
                  href={article.href}
                  className="bg-primary-main text-common-white mx-auto mt-6 block w-full max-w-sm rounded-full px-8 py-4 text-center text-lg/6 font-semibold md:w-fit md:px-6 md:py-2 lg:mx-0 lg:px-8 lg:py-4"
                >
                  {article.cta}
                </Link>
              </div>
              <div className="flex w-full max-w-[35.25rem] justify-center">
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-3xl">
                  <Image
                    src={article.image}
                    alt={article.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* ── Get Started Today ───────────────────────────────────── */}
        <section className="bg-surface-gray px-6 py-16 lg:px-36 lg:py-20">
          <h2 className="mb-8 text-center text-[3rem]/[3.5rem] font-bold tracking-[-0.72px] lg:mb-12">
            Get Started Today
          </h2>
          <div className="flex flex-col gap-4 md:flex-row md:gap-6">
            {getStartedCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="bg-common-white flex flex-1 flex-col items-center justify-center gap-4 rounded-2xl px-6 py-8 text-center transition-shadow hover:shadow-md"
              >
                <MaskIcon
                  icon={card.icon}
                  className="size-12"
                  color="bg-primary-main"
                />
                <span className="text-lg/6 font-semibold">{card.title}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Find a Club CTA ─────────────────────────────────────── */}
        <section className="flex flex-col items-center px-6 py-16 lg:py-20">
          <h2 className="text-center text-[3rem]/[3.5rem] font-bold tracking-[-0.72px]">
            Find a Club Near You
          </h2>
          <div className="mt-8 flex w-full max-w-[38rem] overflow-hidden rounded-full border border-border-light bg-white shadow-sm">
            <input
              type="text"
              placeholder="Search by address, city, or ZIP code"
              className="flex-1 bg-transparent px-6 py-4 text-base text-common-black placeholder-gray-medium outline-none"
            />
            <Link
              href="/gyms"
              className="bg-primary-main text-common-white flex shrink-0 items-center gap-2 rounded-full px-6 py-4 text-base font-semibold"
            >
              <MaskIcon icon="Search.svg" className="size-5" color="bg-common-white" />
              Find a Club
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
