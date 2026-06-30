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
    label: "Strength Equipment",
    items: [
      "Cable Trainers",
      "Plate Loaded",
      "Functional & Stretching Room",
      "Multifunctional Machines (Dumbbells & Barbells)",
    ],
  },
  {
    id: "cardio",
    label: "Cardio Equipment",
    items: ["Treadmills", "Ellipticals", "Stationary Bikes", "Stair Climbers"],
  },
  {
    id: "functional",
    label: "Functional",
    items: ["Stretching Area", "Functional Training Space", "Ab Equipment"],
  },
];

const TRAINING_FEATURES = [
  {
    icon: "/images/icons/Equipment.svg",
    title: "Free In-Club Fitness Training",
    desc: "Looking for a customized exercise plan or need help with equipment? Our certified in-club trainers are ready to help you keep going.",
    href: "/workout-training",
  },
  {
    icon: "/images/icons/VirtualTour.svg",
    title: "Keep Moving in the PF App",
    desc: "Work out anywhere, anytime with more than 900 free on-demand workouts in the PF App that can be done at home or in the gym.",
    href: "/mobileapp",
  },
  {
    icon: "/images/icons/WCPerks.svg",
    title: "Equipment Tutorials",
    desc: "Scan the QR codes located on each machine for step-by-step instructions and videos in the PF App to help with form and best practices.",
    href: "/workout-training/equipment-tutorials",
  },
];

const AMENITIES_LIST = [
  "Touchless Check-in",
  "Free WiFi",
  "Drink Station",
  "Lockers",
  "Showers",
];

const CHECKLIST_ITEMS = [
  {
    id: "download-app",
    label: "Download the app",
    desc: "Use the PF App to use your digital first pass to check in, plus access other features just as an easy guide of what to expect at our clubs.",
  },
  {
    id: "gear",
    label: "Get your gear at the PF store",
    desc: "Pick up comfortable workout gear at the PF Store so you're ready to hit the floor.",
  },
  {
    id: "ready",
    label: "Get ready to move",
    desc: "Whether you're here for the first time or returning after a while, our staff will be happy to show you around.",
  },
  {
    id: "workouts",
    label: "Access digital on-demand workouts",
    desc: "Browse hundreds of guided workout videos right in the PF App — available anytime, anywhere.",
  },
  {
    id: "tutorials",
    label: "Exercise & equipment tutorials",
    desc: "Find step-by-step guides and video tutorials for every piece of equipment in our clubs.",
  },
  {
    id: "track",
    label: "Track your activity",
    desc: "Log your workouts and keep track of your progress over time right from the PF App.",
  },
];

const BLOG_ARTICLES = [
  {
    image: "/images/our-clubs/blog-essentials.webp",
    title: "Workout essentials: what to bring to the gym",
    href: "/resources/fitness/workout-essentials-what-to-bring-to-the-gym",
  },
  {
    image: "/images/our-clubs/blog-beginners.webp",
    title: "How to start working out (if you've never exercised before)",
    href: "/resources/fitness/how-to-start-working-out",
  },
  {
    image: "/images/our-clubs/blog-quotes.webp",
    title: "8 motivational workout quotes to get you into the gym",
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
              Our Clubs Have Everything You Need
            </h1>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#aerial-view"
                className="flex items-center gap-2 rounded-full bg-black/50 px-5 py-2.5 text-sm/5 font-semibold text-white backdrop-blur-sm transition-colors hover:bg-black/70 md:text-base/6"
              >
                <Camera className="size-4 shrink-0" />
                3D Aerial View
              </a>
              <a
                href="/virtual-tour"
                className="flex items-center gap-2 rounded-full bg-black/50 px-5 py-2.5 text-sm/5 font-semibold text-white backdrop-blur-sm transition-colors hover:bg-black/70 md:text-base/6"
              >
                <Play className="size-4 shrink-0" />
                Virtual Tour
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
                ["equipment", "Our Equipment"],
                ["training", "Fitness Training"],
                ["amenities", "Amenities"],
                ["checklist", "First Visit Checklist"],
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
              Our Equipment
            </p>
            <h2 className="mb-10 text-center text-[2rem]/10 font-bold tracking-[-0.24px] lg:mb-14 lg:text-[2.5rem]/[3rem]">
              Tons of Strength and Cardio Equipment
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
                        Show More
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
              Fitness Training
            </p>
            <h2 className="mb-10 text-center text-[2rem]/10 font-bold tracking-[-0.24px] lg:mb-14 lg:text-[2.5rem]/[3rem]">
              Unlimited Free Fitness Training with PF
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
                    Learn More
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
              Amenities
            </p>
            <h2 className="mb-10 text-center text-[2rem]/10 font-bold tracking-[-0.24px] lg:mb-14 lg:text-[2.5rem]/[3rem]">
              Explore Our Amenities
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
                    PF Black Card Spa®
                  </h3>
                  <p className="mt-4 text-base/7 text-white/75">
                    Get unlimited access to our massage chairs, tanning beds,
                    Red Light Therapy, HydroMassage, Total Body Enhancement, and
                    much more when you upgrade to a Black Card membership.
                  </p>
                  <Link
                    href="/gym-memberships/#blackCard"
                    className="mt-8 inline-block self-start rounded-full bg-white px-6 py-3 text-sm/5 font-semibold text-common-black transition-colors hover:bg-gray-100"
                  >
                    Explore PF Black Card
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
              First Visit Checklist
            </p>
            <h2 className="mb-10 text-center text-[2rem]/10 font-bold tracking-[-0.24px] lg:mb-14 lg:text-[2.5rem]/[3rem]">
              Be Ready With Our First Visit Checklist
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
              Get Inspired
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
                    Learn More
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FIND A CLUB ──────────────────────────────────────────── */}
        <section className="flex flex-col items-center px-6 py-16 lg:py-20">
          <h2 className="text-center text-[2rem]/10 font-bold tracking-[-0.24px] lg:text-[2.5rem]/[3rem]">
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
              <Search className="size-5" />
              Find a Club
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
