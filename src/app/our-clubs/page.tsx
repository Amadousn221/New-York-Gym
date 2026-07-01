"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Camera, Play, Check, ChevronDown } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

type SectionId = "equipment" | "training" | "amenities" | "checklist";

function MaskIcon({
  src,
  className,
  color = "bg-primary-main",
}: {
  src: string;
  className: string;
  color?: string;
}) {
  return (
    <i
      className={`${color} ${className} inline-block shrink-0`}
      style={{
        mask: `url(${src}) no-repeat center / contain`,
        WebkitMask: `url(${src}) no-repeat center / contain`,
      }}
      aria-hidden="true"
    />
  );
}

const EQUIPMENT_ACCORDION = [
  {
    id: "strength",
    label: "Équipement de musculation",
    items: [
      "Tours de câbles",
      "Banc de musculation",
      "Espace mobilité & étirements",
      "Poids libres (haltères & barres)",
    ],
  },
  {
    id: "cardio",
    label: "Équipement cardio",
    items: ["Tapis de course", "Elliptiques", "Vélos stationnaires", "Steppers"],
  },
  {
    id: "functional",
    label: "Fonctionnel",
    items: ["Zone d'étirements", "Espace entraînement fonctionnel", "Équipement abdominaux"],
  },
];

const TRAINING_FEATURES = [
  {
    icon: "/images/icons/Equipment.svg",
    title: "Coaching gratuit en club¹",
    desc: "Tu cherches un plan d'entraînement personnalisé ou de l'aide pour utiliser l'équipement ? Nos coachs certifiés sont là pour t'accompagner.",
    href: "/workout-training",
  },
  {
    icon: "/images/icons/VirtualTour.svg",
    title: "Reste actif avec l'appli NY Gym",
    desc: "Entraîne-toi où que tu sois, à tout moment, grâce à des dizaines d'entraînements à la demande disponibles directement sur l'appli NY Gym, à la maison comme au club.",
    href: "/mobileapp",
  },
  {
    icon: "/images/icons/WCPerks.svg",
    title: "Tutoriels équipement",
    desc: "Scanne les QR codes présents sur chaque machine pour accéder à des instructions détaillées et des vidéos sur l'appli NY Gym, afin de t'aider sur la bonne posture et la bonne technique.",
    href: "/workout-training/equipment-tutorials",
  },
];

const AMENITIES_LIST = [
  "Enregistrement sans contact",
  "WiFi gratuit",
  "Fontaine à eau",
  "Vestiaires",
  "Douches",
];

const CHECKLIST_ITEMS = [
  {
    id: "download-app",
    label: "Télécharge l'appli",
    desc: "Télécharge l'appli NY Gym pour utiliser ton pass digital de club au moment de t'enregistrer, et accéder à d'autres fonctionnalités comme le compteur d'affluence et les entraînements à la demande.",
  },
  {
    id: "gear",
    label: "Trouve ton équipement à la boutique NY Gym",
    desc: "Procure-toi des vêtements de sport confortables à la boutique NY Gym pour être prêt à te lancer.",
  },
  {
    id: "ready",
    label: "Prépare-toi à bouger",
    desc: "Que tu sois là pour la première fois ou de retour après une pause, notre équipe sera ravie de te faire découvrir le club.",
  },
  {
    id: "workouts",
    label: "Accède aux entraînements digitaux à la demande",
    desc: "Explore des dizaines de vidéos d'entraînement guidées directement sur l'appli NY Gym — disponibles à tout moment, n'importe où.",
  },
  {
    id: "tutorials",
    label: "Tutoriels exercices & équipement",
    desc: "Retrouve des guides détaillés et des tutoriels vidéo pour chaque machine disponible dans nos clubs.",
  },
  {
    id: "track",
    label: "Suis ton activité",
    desc: "Enregistre tes séances et suis ta progression dans le temps directement depuis l'appli NY Gym.",
  },
];

const BLOG_ARTICLES = [
  {
    image: "/images/our-clubs/blog-essentials.webp",
    title: "L'essentiel à emporter à la salle",
    href: "/resources/fitness/workout-essentials-what-to-bring-to-the-gym",
  },
  {
    image: "/images/our-clubs/blog-beginners.webp",
    title: "Comment démarrer le sport (si tu n'as jamais fait d'exercice)",
    href: "/resources/fitness/how-to-start-working-out",
  },
  {
    image: "/images/our-clubs/blog-quotes.webp",
    title: "9 citations motivantes pour te donner envie d'aller à la salle",
    href: "/resources/fitness/motivational-workout-quotes",
  },
];

export default function OurClubsPage() {
  const [activeSection, setActiveSection] = useState<SectionId>("equipment");
  const [openEquipmentItem, setOpenEquipmentItem] = useState("strength");
  const [openChecklistItem, setOpenChecklistItem] = useState("download-app");

  // Scroll spy — update active tab as sections enter view
  useEffect(() => {
    const ids: SectionId[] = ["equipment", "training", "amenities", "checklist"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
          }
        });
      },
      { threshold: 0.25, rootMargin: "-80px 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: SectionId) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Header />
      <main>
        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section className="relative flex h-[28rem] items-start overflow-hidden md:h-[36rem] lg:h-[44rem]">
          {/* Background gym image */}
          <div className="absolute inset-0">
            <Image
              src="/images/our-clubs/gym-hero.webp"
              alt="Planet Fitness gym interior"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Dark overlay for the whole image */}
            <div className="absolute inset-0 bg-black/30" />
            {/* Purple gradient overlay top-left */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-main/80 via-primary-main/40 to-transparent" />
          </div>

          {/* Hero content */}
          <div className="relative z-10 mt-10 px-6 md:mt-14 md:px-12 lg:mt-20 lg:px-24">
            <h1 className="max-w-[24rem] text-[2.5rem]/[3rem] font-bold text-white md:max-w-[34rem] md:text-[3.5rem]/[4rem] lg:max-w-[44rem] lg:text-[4.5rem]/[5rem]">
              Nos clubs ont tout ce qu&apos;il te faut
            </h1>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#aerial-view"
                className="flex items-center gap-2 rounded-full bg-black/50 px-5 py-2.5 text-sm/5 font-semibold text-white backdrop-blur-sm transition-colors hover:bg-black/70 md:text-base/6"
              >
                <Camera className="size-4 shrink-0" />
                Vue aérienne 3D
              </a>
              <a
                href="/virtual-tour"
                className="flex items-center gap-2 rounded-full bg-black/50 px-5 py-2.5 text-sm/5 font-semibold text-white backdrop-blur-sm transition-colors hover:bg-black/70 md:text-base/6"
              >
                <Play className="size-4 shrink-0" />
                Visite virtuelle
              </a>
            </div>
          </div>
        </section>

        {/* ── Tab navigation (sticky) ──────────────────────────────── */}
        <nav
          aria-label="Club sections"
          className="sticky top-0 z-30 bg-common-black"
        >
          <div className="mx-auto flex max-w-[74.5rem] divide-x divide-white/10">
            {(
              [
                ["equipment", "Notre équipement"],
                ["training", "Entraînement fitness"],
                ["amenities", "Équipements & services"],
                ["checklist", "Checklist première visite"],
              ] as [SectionId, string][]
            ).map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`flex flex-1 items-center justify-center px-2 py-4 text-center text-[0.7rem]/4 font-semibold transition-all md:py-5 md:text-sm/5 lg:text-base/6 ${
                  activeSection === id
                    ? "border-b-2 border-secondary-main text-white"
                    : "border-b-2 border-transparent text-white/60 hover:text-white/90"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </nav>

        {/* ── OUR EQUIPMENT ─────────────────────────────────────────── */}
        <section id="equipment" className="scroll-mt-14 py-16 lg:py-20">
          <div className="mx-auto max-w-[74.5rem] px-6">
            <p className="mb-3 text-center text-xs/4 font-bold uppercase tracking-widest text-primary-main">
              Notre équipement
            </p>
            <h2 className="mb-10 text-center text-[2rem]/10 font-bold tracking-[-0.24px] lg:mb-14 lg:text-[2.5rem]/[3rem]">
              Des tonnes d&apos;équipements cardio et musculation
            </h2>

            <div className="flex flex-col items-start gap-10 lg:flex-row lg:gap-16">
              {/* Left: image */}
              <div className="w-full shrink-0 overflow-hidden rounded-2xl lg:w-[45%]">
                <div className="relative aspect-[4/5] w-full bg-gray-200">
                  <Image
                    src="/images/why-pf/accordion-equipment.webp"
                    alt="Planet Fitness member using strength equipment"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right: accordion */}
              <div className="w-full lg:flex-1">
                {EQUIPMENT_ACCORDION.map((item) => (
                  <div key={item.id} className="border-b border-border-light">
                    <button
                      onClick={() =>
                        setOpenEquipmentItem(
                          openEquipmentItem === item.id ? "" : item.id
                        )
                      }
                      className="flex w-full items-center justify-between py-5"
                    >
                      <span className="text-lg/6 font-semibold">{item.label}</span>
                      <ChevronDown
                        className={`size-5 shrink-0 text-gray-dark transition-transform duration-300 ${
                          openEquipmentItem === item.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openEquipmentItem === item.id
                          ? "mb-4 max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <ul className="flex flex-col gap-3 pb-2">
                        {item.items.map((subitem) => (
                          <li key={subitem} className="flex items-center gap-3">
                            <MaskIcon
                              src="/images/icons/Equipment.svg"
                              className="size-5 shrink-0"
                              color="bg-primary-main"
                            />
                            <span className="text-base/6 text-gray-dark">
                              {subitem}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <button className="mt-2 pb-4 text-sm/5 font-semibold text-primary-main underline underline-offset-2">
                        Afficher plus
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FITNESS TRAINING ─────────────────────────────────────── */}
        <section id="training" className="scroll-mt-14 bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-[74.5rem] px-6">
            <p className="mb-3 text-center text-xs/4 font-bold uppercase tracking-widest text-primary-main">
              Entraînement fitness
            </p>
            <h2 className="mb-10 text-center text-[2rem]/10 font-bold tracking-[-0.24px] lg:mb-14 lg:text-[2.5rem]/[3rem]">
              Entraînement fitness gratuit et illimité avec New York Gym
            </h2>
          </div>

          {/* Full-width training image */}
          <div className="relative aspect-[16/7] w-full overflow-hidden bg-gray-200">
            <Image
              src="/images/our-clubs/hero.webp"
              alt="Planet Fitness personal training session"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* 3 feature cards */}
          <div className="mx-auto mt-12 max-w-[74.5rem] px-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {TRAINING_FEATURES.map((feat) => (
                <div key={feat.title} className="flex flex-col">
                  <MaskIcon
                    src={feat.icon}
                    className="size-10"
                    color="bg-primary-main"
                  />
                  <h3 className="mt-4 text-lg/6 font-bold">{feat.title}</h3>
                  <p className="mt-2 flex-1 text-sm/6 text-gray-dark">{feat.desc}</p>
                  <Link
                    href={feat.href}
                    className="mt-4 text-sm/5 font-semibold text-primary-main underline underline-offset-2"
                  >
                    En savoir plus
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── AMENITIES ────────────────────────────────────────────── */}
        <section id="amenities" className="scroll-mt-14 bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-[74.5rem] px-6">
            <p className="mb-3 text-center text-xs/4 font-bold uppercase tracking-widest text-primary-main">
              Équipements &amp; services
            </p>
            <h2 className="mb-10 text-center text-[2rem]/10 font-bold tracking-[-0.24px] lg:mb-14 lg:text-[2.5rem]/[3rem]">
              Découvre nos équipements et services
            </h2>

            {/* Checklist + kiosk image */}
            <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-20">
              {/* Kiosk image */}
              <div className="w-full max-w-[24rem] shrink-0 overflow-hidden rounded-2xl lg:w-[40%] lg:max-w-none">
                <div className="relative aspect-square w-full bg-gray-200">
                  <Image
                    src="/images/why-pf/accordion-judgement-free.webp"
                    alt="Planet Fitness touchless check-in kiosk"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Amenities list */}
              <ul className="flex flex-col gap-5">
                {AMENITIES_LIST.map((item) => (
                  <li key={item} className="flex items-center gap-4">
                    <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary-main">
                      <Check className="size-4 text-white" strokeWidth={2.5} />
                    </div>
                    <span className="text-xl/7 font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* PF Black Card Spa® */}
            <div className="mt-14 overflow-hidden rounded-3xl bg-common-black lg:mt-20">
              <div className="flex flex-col lg:flex-row">
                {/* Spa image */}
                <div className="relative h-60 w-full shrink-0 bg-gray-800 lg:h-auto lg:w-1/2">
                  <Image
                    src="/images/why-pf/recover-spa.webp"
                    alt="Woman relaxing in the Black Card Spa"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Text */}
                <div className="flex flex-col justify-center px-8 py-10 text-white lg:px-12 lg:py-14">
                  <h3 className="text-2xl/8 font-bold lg:text-[2rem]/10">
                    Spa Black Card®
                  </h3>
                  <p className="mt-4 text-base/7 text-white/75">
                    Accède en illimité à nos fauteuils de massage, cabines de bronzage,
                    invitations d&apos;un ami gratuites, boissons à moitié prix et bien plus encore !
                  </p>
                  <Link
                    href="/gym-memberships/#blackCard"
                    className="mt-8 inline-block self-start rounded-full bg-white px-6 py-3 text-sm/5 font-semibold text-common-black transition-colors hover:bg-gray-100"
                  >
                    Découvrir le NY Gym Black Card®
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FIRST VISIT CHECKLIST ────────────────────────────────── */}
        <section
          id="checklist"
          className="scroll-mt-14 bg-[#f5f0ff] py-16 lg:py-20"
        >
          <div className="mx-auto max-w-[74.5rem] px-6">
            <p className="mb-3 text-center text-xs/4 font-bold uppercase tracking-widest text-primary-main">
              Checklist première visite
            </p>
            <h2 className="mb-10 text-center text-[2rem]/10 font-bold tracking-[-0.24px] lg:mb-14 lg:text-[2.5rem]/[3rem]">
              Prépare-toi avec notre checklist première visite
            </h2>

            <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-16">
              {/* Phone image */}
              <div className="w-full max-w-[20rem] shrink-0 overflow-hidden rounded-3xl lg:w-[35%] lg:max-w-none">
                <div className="relative aspect-[9/16] w-full bg-primary-main/20">
                  <Image
                    src="/images/our-clubs/first-visit-phone.webp"
                    alt="PF App on phone showing first visit guide"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Checklist accordion */}
              <div className="w-full lg:flex-1">
                {CHECKLIST_ITEMS.map((item) => (
                  <div key={item.id} className="border-b border-border-light">
                    <button
                      onClick={() =>
                        setOpenChecklistItem(
                          openChecklistItem === item.id ? "" : item.id
                        )
                      }
                      className="flex w-full items-center gap-4 py-5"
                    >
                      <div
                        className={`flex size-6 shrink-0 items-center justify-center rounded-full transition-colors ${
                          openChecklistItem === item.id
                            ? "bg-primary-main"
                            : "border-2 border-gray-300"
                        }`}
                      >
                        {openChecklistItem === item.id && (
                          <Check className="size-3.5 text-white" strokeWidth={3} />
                        )}
                      </div>
                      <span className="flex-1 text-left text-base/6 font-semibold">
                        {item.label}
                      </span>
                      <ChevronDown
                        className={`size-5 shrink-0 text-gray-dark transition-transform duration-300 ${
                          openChecklistItem === item.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openChecklistItem === item.id
                          ? "mb-4 max-h-40 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="pb-2 pl-10 text-sm/6 text-gray-dark">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── GET INSPIRED ─────────────────────────────────────────── */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-[74.5rem] px-6">
            <h2 className="mb-10 text-center text-[2rem]/10 font-bold tracking-[-0.24px] lg:mb-14 lg:text-[2.5rem]/[3rem]">
              Inspire-toi
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {BLOG_ARTICLES.map((article) => (
                <Link
                  key={article.title}
                  href={article.href}
                  className="group flex flex-col"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-200">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-4 text-base/6 font-semibold text-common-black">
                    {article.title}
                  </h3>
                  <span className="mt-2 text-sm/5 font-semibold text-primary-main underline underline-offset-2">
                    En savoir plus
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FIND A CLUB ──────────────────────────────────────────── */}
        <section className="flex flex-col items-center px-6 py-16 lg:py-20">
          <h2 className="text-center text-[2rem]/10 font-bold tracking-[-0.24px] lg:text-[2.5rem]/[3rem]">
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
              <Search className="size-5" />
              Trouver un club
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
