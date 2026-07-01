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
    title: "Accès à n'importe quel club New York Gym",
    desc: "En tant que membre NY Gym Black Card®, tu peux t'entraîner dans n'importe lequel de nos plus de 2 700 clubs.",
    icon: "BCRecip.svg",
  },
  {
    img: "/images/memberships/bc-guest.webp",
    alt: "Bring a Guest Anytime",
    title: "Invite un ami à tout moment",
    desc: "S'entraîner à deux, c'est encore mieux. Les membres NY Gym Black Card® peuvent inviter un ami gratuitement à chaque visite !",
    icon: "BCGuest.svg",
  },
  {
    img: "/images/memberships/bc-app-workouts.webp",
    alt: "PF+ Exclusive App Workouts",
    title: "Entraînements digitaux exclusifs NY Gym+",
    desc: "Débloque du contenu digital exclusif, avec accès à l'abonnement premium de notre marque.",
    icon: "BCVirtualFT.svg",
  },
  {
    img: "/images/memberships/free-fitness-training.webp",
    alt: "Free In-Club Fitness Training",
    title: "Coaching gratuit en club¹",
    desc: "Avec nos coachs certifiés, tu peux rejoindre un cours collectif, apprendre à utiliser nos équipements cardio et musculation, ou créer un plan d'entraînement personnalisé. Le tout gratuitement !",
    icon: "FreeICFT.svg",
  },
  {
    img: "/images/memberships/bc-premium-perks.webp",
    alt: "Premium Perks: Partner Rewards & Discounts",
    title: "Avantages premium : réductions partenaires",
    desc: "Rendre le fitness encore plus avantageux. Les membres NY Gym Black Card® bénéficient de réductions exclusives et d'offres spéciales supplémentaires.",
    icon: "BCPremPerks.svg",
  },
  {
    img: "/images/memberships/bc-drinks.webp",
    alt: "50% Off Select Drinks",
    title: "50 % de réduction sur une sélection de boissons",
    desc: "Les membres NY Gym Black Card® bénéficient de tarifs spéciaux pour faciliter le choix de boissons saines.",
    icon: "BCHalfPriceCoolerDrinks.svg",
  },
  {
    img: "/images/memberships/free-wifi.webp",
    alt: "Free WiFi",
    title: "WiFi gratuit",
    desc: "Profite du WiFi gratuit chez New York Gym. Demande simplement le mot de passe à l'accueil.",
    icon: "ClassicWifi.svg",
  },
];

/* ── Spa perks ──────────────────────────────────────────────────── */
const spaPerks: Perk[] = [
  {
    img: "/images/memberships/spa-massage-chairs.webp",
    alt: "Use of Massage Chairs",
    title: "Fauteuils de massage",
    desc: "Avec un abonnement NY Gym Black Card®, tu peux te détendre avec un massage après ton entraînement (ou avant — on ne juge pas).",
    icon: "BCMassageChairs.svg",
  },
  {
    img: "/images/memberships/spa-hydromassage.webp",
    alt: "Use of HydroMassage™",
    title: "HydroMassage™¹",
    desc: "HydroMassage™ est un massage aquatique innovant pour le bien-être et la récupération musculaire. De puissantes vagues d'eau chaude pénètrent en profondeur pour soulager les muscles douloureux.",
    icon: "BCHydro.svg",
  },
  {
    img: "/images/memberships/spa-tanning.webp",
    alt: "Use of Tanning",
    title: "Bronzage¹",
    desc: "Un avantage exclusif pour les membres NY Gym Black Card®.",
    icon: "BCTanning.svg",
  },
  {
    img: "/images/memberships/spa-total-body.webp",
    alt: "Use of Total Body Enhancement",
    title: "Total Body Enhancement¹",
    desc: "Cette cabine utilise une application de lumière rouge sans UV, associée à la technologie vibra-shape.",
    icon: "BCTotalBodyEnhancement.svg",
  },
  {
    img: "/images/memberships/spa-wellness-pod.webp",
    alt: "Use Of Wellness Pod",
    title: "Wellness Pod¹",
    desc: "Un espace relaxant et revitalisant dans le Wellness Pod ! Personnalise ta séance en choisissant tes paramètres préférés.",
    icon: "BCWellPod.svg",
  },
  {
    img: "/images/memberships/spa-recovery-lounge.webp",
    alt: "Use of Recovery Lounge",
    title: "Salon de récupération¹",
    desc: "Le Salon de récupération offre du froid ciblé pour les courbatures et douleurs, complété par de la chaleur dans d'autres zones.",
    icon: "BCRecoveryLounge.svg",
  },
];

/* ── Classic perks ──────────────────────────────────────────────── */
const classicPerks: Perk[] = [
  {
    img: "/images/memberships/classic-access.webp",
    alt: "Unlimited Access to Home Club",
    title: "Accès illimité à ton club de proximité",
    desc: "Viens quand tu veux, aussi souvent que tu veux.",
    icon: "ClassicAccess.svg",
  },
  {
    img: "/images/memberships/classic-app.webp",
    alt: "PF App Workouts",
    title: "Entraînements sur l'appli NY Gym",
    desc: "Découvre l'appli gratuite NY Gym et ses nombreux entraînements à la demande pour tous les niveaux et tous les styles.",
    icon: "MobileApp.svg",
  },
  {
    img: "/images/memberships/free-fitness-training.webp",
    alt: "Free In-Club Fitness Training",
    title: "Coaching gratuit en club¹",
    desc: "Avec nos coachs certifiés, tu peux rejoindre un cours collectif, apprendre à utiliser nos équipements cardio et musculation, ou créer un plan d'entraînement personnalisé.",
    icon: "FreeICFT.svg",
  },
  {
    img: "/images/memberships/free-wifi.webp",
    alt: "Free WiFi",
    title: "WiFi gratuit",
    desc: "Profite du WiFi gratuit chez New York Gym. Demande simplement le mot de passe à l'accueil.",
    icon: "ClassicWifi.svg",
  },
  {
    img: "/images/memberships/classic-perks.webp",
    alt: "Perks: Partner Rewards & Discounts",
    title: "Avantages : réductions partenaires",
    desc: "Rendre le fitness encore plus avantageux. Les membres bénéficient de réductions et d'offres spéciales exclusives.",
    icon: "WCPerks.svg",
  },
];

/* ── Compare data ───────────────────────────────────────────────── */
const compareBC = [
  "Accès à n'importe quel club New York Gym",
  "Coaching gratuit en club¹",
  "Entraînements digitaux exclusifs NY Gym+",
  "WiFi gratuit",
  "Avantages premium : réductions partenaires",
  "Invite un ami à tout moment",
  "Fauteuils de massage",
  "HydroMassage™¹",
  "Bronzage¹",
  "Total Body Enhancement¹",
  "50 % de réduction sur une sélection de boissons",
  "Wellness Pod¹",
  "Salon de récupération¹",
];
const compareClassic = [
  "Accès illimité à ton club de proximité",
  "Coaching gratuit en club¹",
  "Entraînements sur l'appli NY Gym",
  "WiFi gratuit",
  "Avantages : réductions partenaires",
];

/* ── FAQs ───────────────────────────────────────────────────────── */
const faqs: FaqItem[] = [
  {
    q: "Quelle est la différence entre l'abonnement NY Gym Black Card® et l'abonnement Classic ?",
    a: "New York Gym propose deux formules d'abonnement : NY Gym Black Card® et Classic. Avec le NY Gym Black Card®, tu as accès à tous les clubs New York Gym, tandis que l'abonnement Classic te donne accès à ton club d'attache. En tant que membre NY Gym Black Card®, tu bénéficies également d'avantages supplémentaires non inclus dans le Classic, comme l'option d'inviter un ami à tout moment, l'accès au Spa Black Card® NY Gym, et d'autres avantages exclusifs.",
  },
  {
    q: "Quel âge faut-il avoir pour souscrire à un abonnement New York Gym ?",
    a: "Tu peux rejoindre New York Gym dès 13 ans avec l'autorisation d'un parent ou tuteur légal. Les membres de 13 ans doivent être accompagnés d'un parent ou tuteur lors de leurs séances. Les membres âgés de 14 ans doivent être accompagnés en permanence. Les membres de 15 à 17 ans doivent avoir une décharge signée par un parent ou tuteur.",
  },
  {
    q: "New York Gym propose-t-il des cours collectifs ou du coaching individuel ?",
    a: "Oui. Nous proposons des séances d'entraînement en petit groupe gratuites, selon les disponibilités. Ces cours sont animés par des coachs certifiés et accessibles à tous les membres. De plus, l'appli NY Gym propose de nombreuses routines pour tous les niveaux, du débutant à l'entraînement avancé.",
  },
  {
    q: "Quels sont les horaires de mon club ?",
    a: "Les horaires varient selon le club. Rends-toi sur notre page Nos clubs et clique sur « Détails du club » pour obtenir les horaires spécifiques de ton club.",
  },
  {
    q: "Qu'est-ce que la Zone Sans Jugement® ?",
    a: "La Zone Sans Jugement® est notre environnement accueillant et sans intimidation, où les membres de tous niveaux sont encouragés à atteindre leurs objectifs personnels sans crainte du jugement.",
  },
  {
    q: "Comment puis-je résilier mon abonnement ?",
    a: "Tu peux résilier ton abonnement en personne dans ton club d'attache ou en envoyant un courrier recommandé. Il n'y a pas de frais de résiliation pour les abonnements mensuels.",
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
    { id: "blackCard", label: "NY Gym Black Card®" },
    { id: "classicCard", label: "Classic" },
    { id: "compare", label: "Comparer" },
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
            Nos abonnements
          </h1>

          {/* Card grid — no logos, matching real site */}
          <div className="grid w-full grid-cols-1 items-center justify-center gap-4 md:grid-cols-2 max-w-[57rem]">

            {/* NY Gym Black Card® card */}
            <div className="bg-gradient-330-18-84 flex size-full flex-col justify-between rounded-2xl p-6 text-lg/6 text-common-white shadow-[0_16px_32px_0px_rgba(4,16,35,0.24)] min-h-[220px]">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-condensed text-2xl/6 font-bold uppercase">NY GYM BLACK CARD®</span>
                  <span className="bg-secondary-main text-primary-dark rounded px-2 pb-[5px] pt-[3px] text-sm/4 font-semibold whitespace-nowrap">
                    Meilleure offre
                  </span>
                </div>
                <p className="mt-6">
                  Accès à n&apos;importe quel club, invite un ami à tout moment, entraînements digitaux premium NY Gym+, et bien plus encore !
                </p>
              </div>
              <div className="mt-8 flex items-center gap-6">
                <a
                  href="#blackCard"
                  onClick={(e) => { e.preventDefault(); scrollTo("blackCard"); }}
                  className="whitespace-nowrap font-semibold underline"
                >
                  En savoir plus
                </a>
                <Link
                  href="/gyms"
                  className="bg-common-white text-primary-main rounded-full px-6 py-2 font-semibold"
                >
                  Devenir membre
                </Link>
              </div>
            </div>

            {/* Classic card */}
            <div className="bg-common-white flex size-full flex-col justify-between rounded-2xl p-6 text-lg/6 shadow-[0_16px_32px_0px_rgba(4,16,35,0.24)] min-h-[220px]">
              <div>
                <span className="font-condensed text-2xl/6 font-bold uppercase text-common-black">CLASSIC</span>
                <p className="mt-6 text-common-black">
                  Notre abonnement standard, avec accès illimité à ton club de proximité.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-6">
                <a
                  href="#classicCard"
                  onClick={(e) => { e.preventDefault(); scrollTo("classicCard"); }}
                  className="text-primary-main whitespace-nowrap font-semibold underline"
                >
                  En savoir plus
                </a>
                <Link
                  href="/gyms"
                  className="bg-primary-main text-common-white rounded-full px-6 py-2 font-semibold"
                >
                  Devenir membre
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
              <img src="/images/LogoPFBlack.svg" alt="Rejoindre NY Gym Black Card®" className="h-14 md:h-20" />
            </div>

            {/* 2-col: accordion left + image right */}
            <div className="w-full px-6 py-16 md:px-[9.25rem] lg:px-8 lg:py-20">
              <div className="relative flex flex-col lg:m-auto lg:max-w-[71.5rem] lg:flex-row lg:justify-between lg:min-h-[42.5rem]">

                {/* Left: heading + accordion + CTA */}
                <div className="flex shrink-0 flex-col items-center md:items-start lg:max-w-[28rem]">
                  <h3 className="self-start text-2xl font-bold tracking-[-0.36px] mb-6 lg:mb-8">
                    L&apos;abonnement qui te donne accès à tous les avantages
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
                    Rejoindre NY Gym Black Card®
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
                  <span className="text-common-white text-2xl/none md:text-5xl/none">ACCÈS GRATUIT AU</span>
                  <span className="text-secondary-main text-[2rem]/none md:text-[4rem]/none lg:text-[4rem]/none">
                    SPA BLACK CARD®
                  </span>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://www.planetfitness.com/remix/images/pf-member-on-massage-chair.svg"
                  alt="Membre NY Gym sur le fauteuil de massage"
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
                    Détends-toi après ton entraînement
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
                    Rejoindre NY Gym Black Card®
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
                    Un fitness de qualité à prix abordable
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
                    Rejoindre Classic
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
                    Tu ne sais pas quel abonnement te convient le mieux ?
                  </p>
                  <button
                    onClick={() => setShowCompare((v) => !v)}
                    className="border-primary-main text-primary-main h-10 w-40 rounded-full border-[1.5px] text-sm font-semibold transition-colors hover:bg-primary-main hover:text-white"
                  >
                    {showCompare ? "Masquer" : "Afficher"} le tableau comparatif
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
                            <p className="font-condensed font-bold uppercase text-white text-base">NY GYM BLACK CARD®</p>
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
                    Rejoindre aujourd&apos;hui
                  </Link>
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* ══ FIND A CLUB ══════════════════════════════════════════════ */}
        <section className="flex flex-col items-center gap-6 px-6 py-16 lg:py-20 text-center">
          <h2 className="font-condensed text-4xl lg:text-5xl text-common-black uppercase leading-none">
            Trouve un club près de toi
          </h2>
          <p className="text-gray-dark text-lg max-w-md">
            Plus de 2 700 clubs à travers le pays — il y a forcément un New York Gym près de chez toi.
          </p>
          <Link
            href="/gyms"
            className="bg-primary-main text-white rounded-full px-10 py-4 font-bold text-lg hover:bg-primary-dark transition-colors"
          >
            Trouver un club
          </Link>
        </section>

        {/* ══ FAQ ══════════════════════════════════════════════════════ */}
        <section className="bg-surface-gray py-16 px-6">
          <div className="max-w-[57rem] mx-auto">
            <h2 className="font-condensed text-4xl lg:text-5xl text-common-black uppercase leading-none mb-10">
              FAQ Abonnements
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
            ¹ Les tarifs peuvent varier selon le club. Certains services sont soumis à disponibilité et ne sont accessibles que dans les clubs participants.
            L&apos;abonnement Classic débute à 9 000 FCFA/mois et l&apos;abonnement NY Gym Black Card® à 15 000 FCFA/mois. Tous les frais sont facturés mensuellement.
            Les tarifs et services peuvent varier selon le club. Une cotisation annuelle peut être appliquée — voir le club pour les détails.
          </p>
        </section>

      </main>
      <Footer />
    </>
  );
}
