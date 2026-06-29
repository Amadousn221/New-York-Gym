"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

/* ── Types ─────────────────────────────────────────────────────── */
interface Perk {
  img: string;
  alt: string;
  title: string;
  desc: string;
  icon: string;
}
interface FaqItem { q: string; a: string; }

/* ── Black Card perks ───────────────────────────────────────────── */
const bcPerks: Perk[] = [
  {
    img: "/images/memberships/bc-access-worldwide.webp",
    alt: "Use of Any Planet Fitness Worldwide",
    title: "Use of Any Planet Fitness Worldwide",
    desc: "As a PF Black Card® member, you'll have the ability to use any of our 2,700+ locations.",
    icon: "BCRecip.svg",
  },
  {
    img: "/images/memberships/bc-guest.webp",
    alt: "Bring a Guest Anytime",
    title: "Bring a Guest Anytime",
    desc: "Working out is better with a buddy. PF Black Card® members can bring a guest for free every visit!",
    icon: "BCGuest.svg",
  },
  {
    img: "/images/memberships/bc-app-workouts.webp",
    alt: "PF+ Exclusive App Workouts",
    title: "PF+ Exclusive App Workouts",
    desc: "Unlock exclusive digital workout content, with access to our brand's premium subscription.",
    icon: "BCVirtualFT.svg",
  },
  {
    img: "/images/memberships/free-fitness-training.webp",
    alt: "Free In-Club Fitness Training",
    title: "Free In-Club Fitness Training ¹",
    desc: "With our certified fitness trainers you can take a small group fitness class, learn about our extensive range of cardio and strength machines, or create a customized workout plan. It's all free!",
    icon: "FreeICFT.svg",
  },
  {
    img: "/images/memberships/bc-premium-perks.webp",
    alt: "Premium Perks: Partner Rewards & Discounts",
    title: "Premium Perks: Partner Rewards & Discounts",
    desc: "Making fitness even more rewarding. PF Black Card® Members get even more exclusive discounts and special offers.",
    icon: "BCPremPerks.svg",
  },
  {
    img: "/images/memberships/bc-drinks.webp",
    alt: "50% Off Select Drinks",
    title: "50% Off Select Drinks",
    desc: "PF Black Card® members get special pricing that makes it easier to opt for healthy beverages.",
    icon: "BCHalfPriceCoolerDrinks.svg",
  },
  {
    img: "/images/memberships/free-wifi.webp",
    alt: "Free WiFi",
    title: "Free WiFi",
    desc: "Enjoy free WiFi at Planet Fitness. Just ask for the WiFi password at the front desk.",
    icon: "ClassicWifi.svg",
  },
];

/* ── Spa perks ──────────────────────────────────────────────────── */
const spaPerks: Perk[] = [
  {
    img: "/images/memberships/spa-massage-chairs.webp",
    alt: "Use of Massage Chairs",
    title: "Use of Massage Chairs",
    desc: "With a PF Black Card® membership, you can relax and unwind with a massage after your workout (or before – we don't judge).",
    icon: "BCMassageChairs.svg",
  },
  {
    img: "/images/memberships/spa-hydromassage.webp",
    alt: "Use of HydroMassage™",
    title: "Use of HydroMassage™ ¹",
    desc: "HydroMassage™ is an innovative water massage for wellness and muscle recovery. Powerful waves of heated water penetrate deeply to soothe aching muscles.",
    icon: "BCHydro.svg",
  },
  {
    img: "/images/memberships/spa-tanning.webp",
    alt: "Use of Tanning",
    title: "Use of Tanning ¹",
    desc: "An exclusive benefit for PF Black Card® members.",
    icon: "BCTanning.svg",
  },
  {
    img: "/images/memberships/spa-total-body.webp",
    alt: "Use of Total Body Enhancement",
    title: "Use of Total Body Enhancement ¹",
    desc: "This booth features a UV free application of red light, which pairs with vibra-shape technology.",
    icon: "BCTotalBodyEnhancement.svg",
  },
  {
    img: "/images/memberships/spa-wellness-pod.webp",
    alt: "Use Of Wellness Pod",
    title: "Use Of Wellness Pod ¹",
    desc: "A relaxing and rejuvenating escape awaits in the Wellness Pod! Personalize your session by choosing your preferred settings.",
    icon: "BCWellPod.svg",
  },
  {
    img: "/images/memberships/spa-recovery-lounge.webp",
    alt: "Use of Recovery Lounge",
    title: "Use of Recovery Lounge ¹",
    desc: "The Recovery Lounge offers targeted cold for soreness and aches, complemented by warmth in other areas.",
    icon: "BCRecoveryLounge.svg",
  },
];

/* ── Classic perks ──────────────────────────────────────────────── */
const classicPerks: Perk[] = [
  {
    img: "/images/memberships/classic-access.webp",
    alt: "Unlimited Access to Home Club",
    title: "Unlimited Access to Home Club",
    desc: "Come in anytime, as often as you like.",
    icon: "ClassicAccess.svg",
  },
  {
    img: "/images/memberships/classic-app.webp",
    alt: "PF App Workouts",
    title: "PF App Workouts",
    desc: "Check out the FREE PF App for tons of on-demand workouts for all fitness levels and styles.",
    icon: "MobileApp.svg",
  },
  {
    img: "/images/memberships/free-fitness-training.webp",
    alt: "Free In-Club Fitness Training",
    title: "Free In-Club Fitness Training ¹",
    desc: "With our certified fitness trainers you can take a small group fitness class, learn about our extensive range of cardio and strength machines, or create a customized workout plan.",
    icon: "FreeICFT.svg",
  },
  {
    img: "/images/memberships/free-wifi.webp",
    alt: "Free WiFi",
    title: "Free WiFi",
    desc: "Enjoy free WiFi at Planet Fitness. Just ask for the WiFi password at the front desk.",
    icon: "ClassicWifi.svg",
  },
  {
    img: "/images/memberships/classic-perks.webp",
    alt: "Perks: Partner Rewards & Discounts",
    title: "Perks: Partner Rewards & Discounts",
    desc: "Making fitness even more rewarding. Members get exclusive discounts and special offers.",
    icon: "WCPerks.svg",
  },
];

/* ── Compare data ───────────────────────────────────────────────── */
const compareBC = [
  "Use of Any Planet Fitness Worldwide",
  "Free In-Club Fitness Training ¹",
  "PF+ Exclusive App Workouts",
  "Free WiFi",
  "Premium Perks: Partner Rewards & Discounts",
  "Bring a Guest Anytime",
  "Use of Massage Chairs",
  "Use of HydroMassage™ ¹",
  "Use of Tanning ¹",
  "Use of Total Body Enhancement ¹",
  "50% Off Select Drinks",
  "Wellness Pod ¹",
  "Use of Recovery Lounge ¹",
];
const compareClassic = [
  "Unlimited Access to Home Club",
  "Free In-Club Fitness Training ¹",
  "PF App Workouts",
  "Free WiFi",
  "Perks: Partner Rewards & Discounts",
];

/* ── FAQs ───────────────────────────────────────────────────────── */
const faqs: FaqItem[] = [
  {
    q: "What's the difference between PF Black Card® and Classic memberships?",
    a: "Planet Fitness offers two membership options: PF Black Card® and Classic. With a PF Black Card®, you will have access to all Planet Fitness clubs worldwide, while the Classic membership gives you access to your home club location. Additionally, as a PF Black Card® member you will have access to several amenities that are not available to Classic members such as the option to bring a guest anytime, access to the PF Black Card® Spa, and other exclusive PF Black Card® perks.",
  },
  {
    q: "How old do I have to be to get a Planet Fitness membership?",
    a: "You can join PF if you are 13 years or older with a parent/legal guardian's permission. Members aged 13 must be accompanied by a parent or guardian when they work out. Many clubs also require that members aged 14 must be accompanied by a parent/guardian at all times. Members who are 15-17 years old must have a signed waiver from a parent or guardian.",
  },
  {
    q: "Does Planet Fitness offer classes or personal training?",
    a: "Yes. We offer free fitness training in small group formats that are first come, first serve. Fitness classes are led by certified fitness trainers and are available to all Planet Fitness members. Additionally, our PF App is equipped with tons of helpful routines from beginner-level workouts to advanced fitness training.",
  },
  {
    q: "What are my club's hours?",
    a: "Hours vary by location. Please visit our Gyms Near Me page and click on 'Club Details' to get more information on specific club hours.",
  },
  {
    q: "What is the Judgement Free Zone®?",
    a: "The Judgement Free Zone® is our welcoming, non-intimidating environment where members of all fitness levels are encouraged to reach their personal goals without fear of judgment.",
  },
  {
    q: "How do I cancel my membership?",
    a: "You can cancel your membership in-person at your home club or by sending a certified letter. There is no cancellation fee for month-to-month memberships.",
  },
];

/* ── Accordion list ─────────────────────────────────────────────── */
function PerkAccordion({
  perks,
  activeIdx,
  setActiveIdx,
}: {
  perks: Perk[];
  activeIdx: number;
  setActiveIdx: (i: number) => void;
}) {
  return (
    <div className="w-full">
      {perks.map((perk, idx) => (
        <div key={idx} className="border-b border-gray-200 last:border-b-0">
          <button
            onClick={() => setActiveIdx(idx === activeIdx ? -1 : idx)}
            className="flex w-full items-center justify-between py-6 text-left"
          >
            <div className="flex items-center">
              {/* CSS mask icon — matches real site technique */}
              <i
                className="bg-primary-main mr-4 size-8 shrink-0 inline-block"
                style={{
                  mask: `url(/images/icons/${perk.icon}) no-repeat center / contain`,
                  WebkitMask: `url(/images/icons/${perk.icon}) no-repeat center / contain`,
                }}
                aria-hidden="true"
              />
              <p className="text-lg/6 font-semibold text-common-black">{perk.title}</p>
            </div>
            <ChevronDown
              className={`ml-4 size-5 shrink-0 text-primary-main transition-transform duration-300 ${
                activeIdx === idx ? "-rotate-90" : ""
              }`}
            />
          </button>
          {activeIdx === idx && (
            <p className="pb-6 text-gray-dark leading-relaxed">{perk.desc}</p>
          )}
        </div>
      ))}
    </div>
  );
}

/* ── Page ───────────────────────────────────────────────────────── */
export default function GymMembershipsPage() {
  type TabId = "blackCard" | "classicCard" | "compare";
  const [activeTab, setActiveTab] = useState<TabId>("blackCard");
  const [showCompare, setShowCompare] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeBcPerk, setActiveBcPerk] = useState(0);
  const [activeSpaPerk, setActiveSpaPerk] = useState(0);
  const [activeClassicPerk, setActiveClassicPerk] = useState(0);

  const bcRef = useRef<HTMLElement>(null);
  const classicRef = useRef<HTMLElement>(null);
  const compareRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id as TabId);
          }
        });
      },
      { threshold: 0.2 }
    );
    if (bcRef.current) observer.observe(bcRef.current);
    if (classicRef.current) observer.observe(classicRef.current);
    if (compareRef.current) observer.observe(compareRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const tabs: { id: TabId; label: string }[] = [
    { id: "blackCard", label: "PF Black Card®" },
    { id: "classicCard", label: "Classic" },
    { id: "compare", label: "Compare" },
  ];

  /* Current active images, never undefined */
  const bcImg = bcPerks[activeBcPerk >= 0 ? activeBcPerk : 0];
  const spaImg = spaPerks[activeSpaPerk >= 0 ? activeSpaPerk : 0];
  const classicImg = classicPerks[activeClassicPerk >= 0 ? activeClassicPerk : 0];

  return (
    <>
      <Header />
      <main>

        {/* ══ HERO ══════════════════════════════════════════════════════ */}
        <div className="relative flex flex-col items-center gap-12 px-6 py-16 lg:gap-16 lg:py-20">
          <div
            className="absolute inset-0 -z-10"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 75%)",
              background: [
                "url('/images/grainy-background.png')",
                "radial-gradient(37.5% 153.39% at 101.25% 68.05%, rgba(163,172,255,0.5) 0%, rgba(119,37,172,0) 100%)",
                "radial-gradient(60% 70% at 0% 100%, rgba(215,173,86,0.5) 0%, rgba(130,24,165,0) 80%)",
                "linear-gradient(160deg, rgb(86,20,150) 0%, rgb(52,0,89) 100%)",
              ].join(", "),
              backgroundColor: "rgb(86,20,150)",
            }}
          />

          <h1 className="text-common-white max-w-md text-center text-5xl font-bold leading-[3.5rem] tracking-[-0.72px]">
            Our Memberships
          </h1>

          {/* Card grid — no logos, matching real site */}
          <div className="grid w-full grid-cols-1 items-center justify-center gap-4 md:grid-cols-2 max-w-[57rem]">

            {/* PF Black Card® card */}
            <div className="bg-gradient-330-18-84 flex size-full flex-col justify-between rounded-2xl p-6 text-lg/6 text-common-white shadow-[0_16px_32px_0px_rgba(4,16,35,0.24)] min-h-[220px]">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-condensed text-2xl/6 font-bold uppercase">PF BLACK CARD®</span>
                  <span className="bg-secondary-main text-primary-dark rounded px-2 pb-[5px] pt-[3px] text-sm/4 font-semibold whitespace-nowrap">
                    Best Value
                  </span>
                </div>
                <p className="mt-6">
                  Access to any club, bring a guest anytime, PF+ premium digital workouts, and so much more!
                </p>
              </div>
              <div className="mt-8 flex items-center gap-6">
                <a
                  href="#blackCard"
                  onClick={(e) => { e.preventDefault(); scrollTo("blackCard"); }}
                  className="whitespace-nowrap font-semibold underline"
                >
                  Learn More
                </a>
                <Link
                  href="/gyms"
                  className="bg-common-white text-primary-main rounded-full px-6 py-2 font-semibold"
                >
                  Join Now
                </Link>
              </div>
            </div>

            {/* Classic card */}
            <div className="bg-common-white flex size-full flex-col justify-between rounded-2xl p-6 text-lg/6 shadow-[0_16px_32px_0px_rgba(4,16,35,0.24)] min-h-[220px]">
              <div>
                <span className="font-condensed text-2xl/6 font-bold uppercase text-common-black">CLASSIC</span>
                <p className="mt-6 text-common-black">
                  Our standard membership, with unlimited access to your home club.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-6">
                <a
                  href="#classicCard"
                  onClick={(e) => { e.preventDefault(); scrollTo("classicCard"); }}
                  className="text-primary-main whitespace-nowrap font-semibold underline"
                >
                  Learn More
                </a>
                <Link
                  href="/gyms"
                  className="bg-primary-main text-common-white rounded-full px-6 py-2 font-semibold"
                >
                  Join Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ══ STICKY TAB NAV ═══════════════════════════════════════════ */}
        <div className="border-gray-light sticky top-0 z-20 overflow-x-auto border-b bg-white pt-4 transition-[top] duration-300">
          <div className="flex items-center justify-center gap-2 px-6 pb-4 no-scrollbar">
            {tabs.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => { scrollTo(id); setActiveTab(id); }}
                className={`flex-shrink-0 rounded-full px-5 py-2.5 font-semibold text-sm transition-colors ${
                  activeTab === id
                    ? "bg-primary-main text-white"
                    : "text-common-black hover:bg-surface-gray"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* ══ SECTIONS ═════════════════════════════════════════════════ */}
        <div>

          {/* ── BLACK CARD SECTION ─────────────────────────────────── */}
          <section id="blackCard" ref={bcRef} className="flex w-full flex-col place-items-center">

            {/* Dark banner with PF Black Card logo */}
            <div className="bg-gradient-330-18-84 flex w-full justify-center py-[5.75rem] md:py-[5.625rem] lg:py-[7.5rem]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/LogoPFBlack.svg" alt="Join PF Black Card®" className="h-14 md:h-20" />
            </div>

            {/* 2-col: accordion left + image right */}
            <div className="w-full px-6 py-16 md:px-[9.25rem] lg:px-8 lg:py-20">
              <div className="relative flex flex-col lg:m-auto lg:max-w-[71.5rem] lg:flex-row lg:justify-between lg:min-h-[42.5rem]">

                {/* Left: heading + accordion + CTA */}
                <div className="flex shrink-0 flex-col items-center md:items-start lg:max-w-[28rem]">
                  <h3 className="self-start text-2xl font-bold tracking-[-0.36px] mb-6 lg:mb-8">
                    The Membership That Gets You All the Perks
                  </h3>
                  <PerkAccordion
                    perks={bcPerks}
                    activeIdx={activeBcPerk}
                    setActiveIdx={setActiveBcPerk}
                  />
                  <Link
                    href="/gyms"
                    className="mt-8 inline-block bg-primary-main text-white rounded-full px-8 py-3.5 font-semibold hover:bg-primary-dark transition-colors"
                  >
                    Join PF Black Card®
                  </Link>
                </div>

                {/* Right: active perk image (desktop only, absolutely positioned) */}
                <div className="hidden lg:block lg:absolute lg:right-0 lg:top-0 lg:w-[calc(100%-30rem)] lg:h-full">
                  <div className="relative w-full h-full rounded-3xl overflow-hidden">
                    <Image
                      src={bcImg.img}
                      alt={bcImg.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Spa banner */}
            <div className="w-full px-6 md:px-[2.25rem] lg:px-8">
              <div className="bg-purpleVioletLefSandRightGlare relative h-48 rounded-3xl md:h-[16.25rem] lg:m-auto lg:h-80 lg:max-w-[71.5rem] overflow-hidden">
                <div className="font-condensed absolute inset-0 z-10 flex flex-col items-center justify-center font-extrabold italic text-center">
                  <span className="text-common-white text-2xl/none md:text-5xl/none">FREE ACCESS TO THE</span>
                  <span className="text-secondary-main text-[2rem]/none md:text-[4rem]/none lg:text-[4rem]/none">
                    BLACK CARD SPA®
                  </span>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://www.planetfitness.com/remix/images/pf-member-on-massage-chair.svg"
                  alt="Planet Fitness member on the massage chair"
                  className="absolute size-full rounded-3xl object-cover object-[80%_top] opacity-[0.64] lg:rounded-[2rem]"
                />
              </div>
            </div>

            {/* Spa 2-col: image left + accordion right */}
            <div className="w-full px-6 py-16 md:px-[9.25rem] lg:px-8 lg:py-20">
              <div className="relative flex flex-col lg:m-auto lg:max-w-[71.5rem] lg:flex-row lg:justify-end lg:min-h-[42.5rem]">

                {/* Left: active spa image (desktop only) */}
                <div className="hidden lg:block lg:absolute lg:left-0 lg:top-0 lg:w-[calc(100%-30rem)] lg:h-full">
                  <div className="relative w-full h-full rounded-3xl overflow-hidden">
                    <Image
                      src={spaImg.img}
                      alt={spaImg.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                  </div>
                </div>

                {/* Right: heading + accordion + CTA */}
                <div className="flex shrink-0 flex-col items-center md:items-start lg:max-w-[28rem]">
                  <h3 className="self-start text-2xl font-bold tracking-[-0.36px] mb-6 lg:mb-8">
                    Relax and Unwind After Your Workout
                  </h3>
                  <PerkAccordion
                    perks={spaPerks}
                    activeIdx={activeSpaPerk}
                    setActiveIdx={setActiveSpaPerk}
                  />
                  <Link
                    href="/gyms"
                    className="mt-8 inline-block bg-primary-main text-white rounded-full px-8 py-3.5 font-semibold hover:bg-primary-dark transition-colors"
                  >
                    Join PF Black Card®
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* ── CLASSIC SECTION ────────────────────────────────────── */}
          <section id="classicCard" ref={classicRef} className="flex w-full flex-col place-items-center">

            {/* Purple banner with "pf CLASSIC" logo */}
            <div className="bg-grainyPfClassic flex w-full justify-center py-[5.75rem] md:py-[5.625rem] lg:py-[7.5rem]">
              <div className="flex h-14 md:h-20 items-end">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/LogoPf.svg"
                  alt="pf"
                  className="mr-1.5 h-[2.9rem] self-end md:h-[4.235rem]"
                />
                <span className="font-condensed text-common-white self-start text-[49px]/none font-bold uppercase md:text-[4.375rem]/none">
                  Classic
                </span>
              </div>
            </div>

            {/* 2-col: accordion left + image right */}
            <div className="w-full px-6 py-16 md:px-[9.25rem] lg:px-8 lg:py-20">
              <div className="relative flex flex-col lg:m-auto lg:max-w-[71.5rem] lg:flex-row lg:justify-between lg:min-h-[42.5rem]">

                {/* Left: heading + accordion + CTA */}
                <div className="flex shrink-0 flex-col items-center md:items-start lg:max-w-[28rem]">
                  <h3 className="self-start text-2xl font-bold tracking-[-0.36px] mb-6 lg:mb-8">
                    Get High-Quality Fitness at an Affordable Price
                  </h3>
                  <PerkAccordion
                    perks={classicPerks}
                    activeIdx={activeClassicPerk}
                    setActiveIdx={setActiveClassicPerk}
                  />
                  <Link
                    href="/gyms"
                    className="mt-8 inline-block bg-primary-main text-white rounded-full px-8 py-3.5 font-semibold hover:bg-primary-dark transition-colors"
                  >
                    Join Classic
                  </Link>
                </div>

                {/* Right: active classic image (desktop only) */}
                <div className="hidden lg:block lg:absolute lg:right-0 lg:top-0 lg:w-[calc(100%-30rem)] lg:h-full">
                  <div className="relative w-full h-full rounded-3xl overflow-hidden">
                    <Image
                      src={classicImg.img}
                      alt={classicImg.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── COMPARE SECTION ────────────────────────────────────── */}
          <section id="compare" ref={compareRef} className="bg-surface-purple w-full py-8 md:px-8 md:py-16 lg:py-20">
            <div className="relative mx-auto w-full lg:max-w-[57rem] overflow-x-clip">

              {/* Header card */}
              <div className="bg-surface-gray mx-6 rounded-t-2xl transition-all duration-1000 ease-in-out lg:mx-0 lg:flex lg:min-h-60 lg:rounded-t-2xl overflow-hidden">
                <div className="flex flex-col gap-6 p-6 lg:w-1/2 lg:justify-center lg:pl-12 xl:pl-16">
                  <p className="text-xl font-bold text-common-black leading-snug">
                    Not sure which membership plan is right for you?
                  </p>
                  <button
                    onClick={() => setShowCompare((v) => !v)}
                    className="border-primary-main text-primary-main h-10 w-40 rounded-full border-[1.5px] text-sm font-semibold transition-colors hover:bg-primary-main hover:text-white"
                  >
                    {showCompare ? "Hide" : "Show"} Comparison Chart
                  </button>
                </div>
                <div
                  className="hidden lg:block lg:w-1/2 rounded-tr-2xl"
                  style={{
                    backgroundImage: 'url("/images/compare-memberships.webp")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)",
                  }}
                />
              </div>

              {/* Comparison table */}
              <div className="z-50 mx-auto flex flex-col bg-white md:rounded-b-2xl md:border md:border-t-0 md:border-gray-200">
                {showCompare && (
                  <table className="table-fixed border-collapse w-full transition-all duration-1000">
                    <thead>
                      <tr>
                        <th className="p-4 text-left">
                          <div className="bg-gradient-330-18-84 rounded-xl p-4">
                            <p className="font-condensed font-bold uppercase text-white text-base">PF BLACK CARD®</p>
                          </div>
                        </th>
                        <th className="p-4 text-left">
                          <div className="rounded-xl border border-border p-4">
                            <p className="font-condensed font-bold uppercase text-common-black text-base">CLASSIC</p>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.from(
                        { length: Math.max(compareBC.length, compareClassic.length) },
                        (_, i) => (
                          <tr
                            key={i}
                            className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-surface-gray"}`}
                          >
                            <td className="py-4 px-6 text-sm text-primary-main font-medium">
                              {compareBC[i] ?? ""}
                            </td>
                            <td className="py-4 px-6 text-sm text-primary-main font-medium">
                              {compareClassic[i] ?? ""}
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                )}
                <div className="p-6 text-center lg:py-12">
                  <Link
                    href="/gyms"
                    className="inline-block bg-primary-main text-white rounded-full px-10 py-4 font-semibold hover:bg-primary-dark transition-colors"
                  >
                    Join Today
                  </Link>
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* ══ FIND A CLUB ══════════════════════════════════════════════ */}
        <section className="flex flex-col items-center gap-6 px-6 py-16 lg:py-20 text-center">
          <h2 className="font-condensed text-4xl lg:text-5xl text-common-black uppercase leading-none">
            Find a Club Near You
          </h2>
          <p className="text-gray-dark text-lg max-w-md">
            Over 2,700 locations nationwide — there&apos;s a Planet Fitness close to you.
          </p>
          <Link
            href="/gyms"
            className="bg-primary-main text-white rounded-full px-10 py-4 font-bold text-lg hover:bg-primary-dark transition-colors"
          >
            Find a Club
          </Link>
        </section>

        {/* ══ FAQ ══════════════════════════════════════════════════════ */}
        <section className="bg-surface-gray py-16 px-6">
          <div className="max-w-[57rem] mx-auto">
            <h2 className="font-condensed text-4xl lg:text-5xl text-common-black uppercase leading-none mb-10">
              Memberships FAQs
            </h2>
            <div className="border-t border-border divide-y divide-border">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="font-semibold text-common-black text-base">{faq.q}</span>
                    <span
                      className="flex-shrink-0 w-7 h-7 rounded-full border border-border flex items-center justify-center transition-colors"
                      style={{
                        backgroundColor: openFaq === i ? "rgb(86,20,150)" : "rgb(247,247,252)",
                      }}
                    >
                      <span
                        className="text-sm font-bold leading-none"
                        style={{ color: openFaq === i ? "#fff" : "rgb(86,20,150)" }}
                      >
                        {openFaq === i ? "−" : "+"}
                      </span>
                    </span>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{ maxHeight: openFaq === i ? "400px" : "0px" }}
                  >
                    <p className="pb-5 text-gray-dark text-base leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ DISCLAIMER ═══════════════════════════════════════════════ */}
        <section className="bg-white py-8 px-6">
          <p className="text-gray-medium text-xs leading-relaxed max-w-4xl mx-auto text-center">
            ¹ Services may vary by location. Some services available at participating locations only.
            Membership dues begin at $15 and PF Black Card® membership begins at $24.99. All fees
            are billed monthly. Pricing and services may vary by location. Annual fee of $39 will
            be billed on or around the 5th of the month following 4 months after your join date.
          </p>
        </section>

      </main>
      <Footer />
    </>
  );
}
