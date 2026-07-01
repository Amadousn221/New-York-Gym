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
    label: "Sans jugement™",
    icon: "JudgementFree.svg",
    image: "/images/why-pf/accordion-judgement-free.webp",
    alt: "Sans jugement™",
    description:
      "Chez New York Gym, tu trouves une communauté bienveillante et motivante où tu avances à ton propre rythme. Peu importe où tu en es dans ton parcours, on est là pour toi.",
  },
  {
    id: "equipment",
    label: "Équipement haut de gamme",
    icon: "Equipment.svg",
    image: "/images/why-pf/accordion-equipment.webp",
    alt: "Équipement haut de gamme",
    description:
      "Nous investissons dans des équipements fitness de premier plan pour que tu aies toujours accès aux meilleurs outils. Du cardio à la musculation, nos clubs ont tout ce qu'il te faut pour atteindre tes objectifs.",
  },
  {
    id: "clean-clubs",
    label: "Clubs propres et spacieux",
    icon: "CleanClubs.svg",
    image: "/images/why-pf/accordion-clean.webp",
    alt: "Clubs propres et spacieux",
    description:
      "Nos clubs sont nettoyés et entretenus selon les plus hauts standards pour que tu puisses te concentrer sur ton entraînement. Des espaces ouverts et accueillants pour que le fitness soit confortable pour tous.",
  },
  {
    id: "best-value",
    label: "Le meilleur rapport qualité-prix",
    icon: "Money.svg",
    image: "/images/why-pf/accordion-value.webp",
    alt: "Le meilleur rapport qualité-prix",
    description:
      "À partir de 9 000 FCFA par mois, New York Gym offre le meilleur rapport qualité-prix dans le fitness. Accède à des équipements de qualité et un personnel accueillant à un tarif accessible à tous.",
  },
];

const articles: ArticleItem[] = [
  {
    title: "Récupère au Spa Black Card®",
    description:
      "Un seul abonnement, plusieurs façons de te renforcer. Avec le NY Gym Black Card®, tu peux amener un ami à tout moment, accéder à n'importe lequel de nos clubs partout, récupérer au Spa Black Card®, et bien plus encore !",
    cta: "En savoir plus",
    href: "/gym-memberships/#blackCard",
    image: "/images/why-pf/recover-spa.webp",
    alt: "Membre NY Gym les yeux fermés avec un casque, se relaxant sur un fauteuil HydroMassage",
  },
  {
    title: "Emmène ton entraînement partout",
    description:
      "Avec l'appli gratuite NY Gym, entraîne-toi où que tu sois, à tout moment. Parcours des centaines de vidéos et guides d'entraînement, regarde des tutoriels d'équipement, suis ta progression, et bien plus encore.",
    cta: "Télécharger l'appli NY Gym",
    href: "/mobileapp",
    image: "/images/why-pf/pf-app.webp",
    alt: "Écran de téléphone ouvert sur l'onglet Entraînements de l'appli NY Gym",
  },
  {
    title: "Offres et réductions exclusives",
    description:
      "Ton abonnement va au-delà de ton expérience fitness. Débloque des offres réservées aux membres auprès des plus grandes marques dès ton inscription, et profite au maximum de ton abonnement.",
    cta: "Découvrir tous les avantages NY Gym",
    href: "/my-account/perks",
    image: "/images/why-pf/perks.webp",
    alt: "Homme en tenue de sport regardant son téléphone et souriant dans un club NY Gym",
  },
];

const getStartedCards: GetStartedCard[] = [
  { title: "Trouve un club près de toi", icon: "Search.svg", href: "/gyms" },
  { title: "Découvre les avantages", icon: "WCPerks.svg", href: "/my-account/perks" },
  { title: "Fais une visite virtuelle", icon: "VirtualTour.svg", href: "/virtual-tour" },
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
            Bienvenue au club
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
              On est tous forts chez New York Gym™
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
                  Appartenir et se renforcer
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
                  Devenir membre
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
        <section className="bg-primary-main bg-purpleYellowRightGlare overflow-hidden pt-16 md:px-24 lg:bg-purpleYellowLeftGlare lg:px-0">
          <div className="mx-auto flex max-w-[90rem] flex-col lg:flex-row lg:items-end">
            <div className="mx-auto w-full max-w-[28rem] shrink-0 self-end lg:mx-0 lg:w-1/2 lg:max-w-[44.5rem]">
              <Image
                src="/images/our-clubs/come-as-you-are-person.png"
                alt="Planet Fitness member holding a dumbbell"
                width={712}
                height={712}
                className="w-full object-contain object-bottom"
              />
            </div>
            <div className="px-6 py-16 text-white lg:max-w-[36rem] lg:px-8 lg:py-24">
              <h2 className="text-[2.5rem]/[3rem] font-bold tracking-[-0.6px] lg:text-5xl/[3.5rem]">
                Les tendances fitness vont et viennent. Toi, tu peux juste venir comme tu es.
              </h2>
              <Link
                href="/gym-memberships"
                className="bg-secondary-main text-common-black mt-8 inline-block rounded-full px-8 py-4 text-lg/6 font-semibold"
              >
                Devenir membre
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
            Commence dès maintenant
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
            Trouve un club près de toi
          </h2>
          <div className="mt-8 flex w-full max-w-[38rem] overflow-hidden rounded-full border border-border-light bg-white shadow-sm">
            <input
              type="text"
              placeholder="Adresse, ville ou code postal"
              className="flex-1 bg-transparent px-6 py-4 text-base text-common-black placeholder-gray-medium outline-none"
            />
            <Link
              href="/gyms"
              className="bg-primary-main text-common-white flex shrink-0 items-center gap-2 rounded-full px-6 py-4 text-base font-semibold"
            >
              <MaskIcon icon="Search.svg" className="size-5" color="bg-common-white" />
              Trouver un club
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
