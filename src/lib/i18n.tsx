"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "fr" | "en";

type SlideData = {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
};

type Translations = {
  nav: {
    memberships: string;
    whyPF: string;
    workOutWithUs: string;
    pfStore: string;
    whyPlanetFitness: string;
    aboutPlanetFitness: string;
    pfPurpose: string;
    ourClubs: string;
    pfApp: string;
    blog: string;
    myAccount: string;
    joinNow: string;
  };
  hero: {
    srText: string;
    searchPlaceholder: string;
    findAClub: string;
  };
  memberships: {
    heading: string;
    description: string;
    blackCard: string;
    bestValue: string;
    startingAt: string;
    perMonth: string;
    taxesFees: string;
    blackCardDesc: string;
    learnMore: string;
    joinNow: string;
    classic: string;
    classicDesc: string;
    compare: string;
  };
  whyPF: {
    prefix: string;
    highlight: string;
    suffix: string;
    bestValueTitle: string;
    bestValueDesc: string;
    equipmentTitle: string;
    equipmentDesc: string;
    locationsTitle: string;
    locationsDesc: string;
    learnMore: string;
  };
  pfApp: {
    prefix: string;
    highlight: string;
    suffix: string;
    description: string;
    cta: string;
  };
  getStarted: {
    heading: string;
    findClub: string;
    explorePerks: string;
    virtualTour: string;
    disclaimer: string;
  };
  footer: {
    downloadApp: string;
    infoHeading: string;
    newsroom: string;
    careers: string;
    faqs: string;
    directory: string;
    blog: string;
    partnersHeading: string;
    franchising: string;
    investorRelations: string;
    pfPurpose: string;
    pfMediaNetwork: string;
    legalHeading: string;
    privacyPolicy: string;
    termsConditions: string;
    doNotSell: string;
    privacyRights: string;
    accessibility: string;
    languageLabel: string;
    followUs: string;
    copyright: string;
  };
  services: SlideData[];
  carousel2: SlideData[];
};

const translations: Record<Lang, Translations> = {
  en: {
    nav: {
      memberships: "Memberships",
      whyPF: "Why NY Gym",
      workOutWithUs: "Work Out With Us",
      pfStore: "NY Gym Store",
      whyPlanetFitness: "Why New York Gym",
      aboutPlanetFitness: "About New York Gym",
      pfPurpose: "NY Gym Purpose",
      ourClubs: "Our Clubs",
      pfApp: "NY Gym App",
      blog: "Blog",
      myAccount: "My Account",
      joinNow: "Join Now",
    },
    hero: {
      srText: "We are all strong on this Planet™. Join the club today!",
      searchPlaceholder: "Search by address, city, or ZIP code",
      findAClub: "Find a Club",
    },
    memberships: {
      heading: "Memberships",
      description:
        "We offer the NY Gym Black Card® Membership and Classic Membership. Both get you access to The Judgement Free Zone®, and tons of cardio and strength equipment.",
      blackCard: "NY GYM BLACK CARD®",
      bestValue: "Best Value",
      startingAt: "Starting at",
      perMonth: "/mo*",
      taxesFees: "plus taxes & fees",
      blackCardDesc:
        "Access to any club, bring a guest anytime, NY Gym+ premium digital workouts, and so much more!",
      learnMore: "Learn More",
      joinNow: "Join Now",
      classic: "CLASSIC",
      classicDesc: "Our standard membership, with unlimited access to your home club.",
      compare: "Compare Memberships",
    },
    whyPF: {
      prefix: "a place where",
      highlight: "everyone",
      suffix: "feels welcome",
      bestValueTitle: "Best value on the planet",
      bestValueDesc: "We believe in providing a high-quality experience at an affordable cost.",
      equipmentTitle: "Tons of equipment",
      equipmentDesc: "Tons of cardio and strength equipment, all in a clean and spacious environment.",
      locationsTitle: "2,700+ locations",
      locationsDesc: "More than 2,700 New York Gym locations worldwide.",
      learnMore: "Learn More",
    },
    pfApp: {
      prefix: "Bring the",
      highlight: "Judgement Free Zone®",
      suffix: "anywhere",
      description:
        "The NY Gym App has it all – pick the best time to visit your club with the Crowd Meter, track your activities, access hundreds of digital on-demand workouts, and more! Ready to get movin'?",
      cta: "Download the NY Gym App",
    },
    getStarted: {
      heading: "Get Started Today",
      findClub: "Find a Club Near You",
      explorePerks: "Explore Perks",
      virtualTour: "Take a Virtual Tour",
      disclaimer:
        "*Classic memberships begin at $15 and NY Gym Black Card® memberships begin at $24.99, billed monthly. Memberships may include 12-month commitment. State and local taxes may apply. Subject to an annual fee of $49. Prices may vary depending on location. Services and perks subject to availability and restrictions. Must be at least 18 years old to enroll, or 13-17 with parent/guardian. State and local restrictions on tanning frequency with NY Gym Black Card® memberships apply. Participating locations only. Locations independently owned and operated. See home club for details. We reserve the right to correct pricing errors or withdraw offer at any time. ©2026 New York Gym Franchising LLC",
    },
    footer: {
      downloadApp: "Download the NY Gym App",
      infoHeading: "Info",
      newsroom: "Newsroom",
      careers: "Careers",
      faqs: "FAQs",
      directory: "Directory",
      blog: "Blog",
      partnersHeading: "Partners",
      franchising: "Franchising",
      investorRelations: "Investor Relations",
      pfPurpose: "NY Gym Purpose",
      pfMediaNetwork: "NY Gym Media Network",
      legalHeading: "Legal",
      privacyPolicy: "Privacy Policy",
      termsConditions: "Terms and Conditions of Use",
      doNotSell: "Do Not Sell or Share My Personal Information",
      privacyRights: "Your State and EU Privacy Rights",
      accessibility: "Accessibility",
      languageLabel: "US (English)",
      followUs: "Follow us:",
      copyright: "© 2026 New York Gym Franchising, LLC.",
    },
    services: [
      {
        title: "Training Programs",
        description:
          "Not sure where to start? Our training programs guide you step by step, from your first session to your strongest one yet. Built for every fitness level, every goal, every schedule. No guesswork, no intimidation. Just show up and follow the plan.",
        ctaLabel: "See Programs",
        ctaHref: "/training-programs",
        image: "/images/memberships/free-fitness-training.webp",
        imageAlt: "Training Programs at New York Gym",
      },
      {
        title: "Group Fitness",
        description:
          "There's something about working out with others that pushes you further than you'd go alone. Drop into any class, any day, no reservation needed. From cycling to strength, every session is led by an instructor who keeps you moving. Come once. You'll be back.",
        ctaLabel: "See Class Types",
        ctaHref: "/group-fitness",
        image: "/images/about-pf/exercise-bike.webp",
        imageAlt: "Group Fitness classes at New York Gym",
      },
      {
        title: "On-Demand Workouts",
        description:
          "Can't make it to the club? No problem. Hundreds of classes live in the NY Gym App, ready whenever you are. Cardio, strength, stretch, and more, all led by real trainers. Work out at home, on the road, or anywhere in between. Your schedule, your rules.",
        ctaLabel: "See On-Demand",
        ctaHref: "/on-demand",
        image: "/images/why-pf/pf-app.webp",
        imageAlt: "On-Demand Workouts with the NY Gym App",
      },
      {
        title: "Performance Programs",
        description:
          "You've built the habit. Now it's time to go further. Our performance programs are designed for members who want to train with purpose, whether that's a 5K, a triathlon, or simply hitting a new personal best. Push past your limits with a structured plan behind you.",
        ctaLabel: "Class Schedule",
        ctaHref: "/class-schedule",
        image: "/images/our-clubs/fitness-training.webp",
        imageAlt: "Performance Programs at New York Gym",
      },
    ],
    carousel2: [
      {
        title: "NEW! Workout Guides in the NY Gym App",
        description:
          "Want a guide to easily follow that walks you through reps and sets in step-by-step routines? We got you! Bonus: each exercise includes a visual tutorial to guide you on proper form.",
        ctaLabel: "Check Out Guides",
        ctaHref: "https://planetfitness.app.link/categoryworkouts/3Sg7CG5q2iTSgQtGWOd4ZR",
        image: "/images/carousel2-slide1-workout-guides.webp",
        imageAlt: "NY Gym Text Workouts in the App",
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
        imageAlt: "NY Gym Gear",
      },
    ],
  },

  fr: {
    nav: {
      memberships: "Adhésions",
      whyPF: "Pourquoi NY Gym",
      workOutWithUs: "S'entraîner avec nous",
      pfStore: "Boutique NY Gym",
      whyPlanetFitness: "Pourquoi New York Gym",
      aboutPlanetFitness: "À propos",
      pfPurpose: "Notre mission",
      ourClubs: "Nos clubs",
      pfApp: "Application NY Gym",
      blog: "Blog",
      myAccount: "Mon compte",
      joinNow: "Devenir membre",
    },
    hero: {
      srText: "ON EST TOUS FORTS CHEZ NEW YORK GYM™. REJOINS LE CLUB DÈS AUJOURD'HUI !",
      searchPlaceholder: "Adresse, ville ou code postal",
      findAClub: "Trouver un club",
    },
    memberships: {
      heading: "Abonnements",
      description:
        "Nous proposons l'abonnement NY Gym Black Card et l'abonnement Classic. Les deux vous donnent accès à l'esprit New York Gym ainsi qu'à tout l'équipement cardio et musculation.",
      blackCard: "NY GYM BLACK CARD",
      bestValue: "Meilleure offre",
      startingAt: "À partir de",
      perMonth: "/mois*",
      taxesFees: "Prix de départ, hors frais d'ouverture et cotisation annuelle",
      blackCardDesc:
        "Accès à ton club, invite un ami à tout moment, tarifs préférentiels NY Gym+, solariums, massages et bien plus.",
      learnMore: "En savoir plus",
      joinNow: "Devenir membre",
      classic: "Classic",
      classicDesc: "Notre abonnement standard, avec accès illimité à ton club de proximité.",
      compare: "Comparer les abonnements",
    },
    whyPF: {
      prefix: "un endroit où",
      highlight: "tout le monde",
      suffix: "se sent bienvenu",
      bestValueTitle: "Le meilleur rapport qualité-prix",
      bestValueDesc: "Nous croyons en une expérience fitness de qualité, accessible à tous.",
      equipmentTitle: "Des tonnes d'équipements",
      equipmentDesc: "Une large gamme d'équipements cardio et musculation, dans un espace propre et spacieux.",
      locationsTitle: "Plus de 2 700 clubs",
      locationsDesc: "Plus de 2 700 clubs NY Gym à travers le monde.",
      learnMore: "En savoir plus",
    },
    pfApp: {
      prefix: "Emmène l'esprit",
      highlight: "New York Gym",
      suffix: "partout",
      description:
        "L'appli NY Gym le rend possible — plus besoin d'attendre pour t'entraîner. Suis ta progression, accède à des centaines d'entraînements et de cours à la demande, et bien plus encore.",
      cta: "Télécharger l'appli NY Gym",
    },
    getStarted: {
      heading: "Commence dès maintenant",
      findClub: "Trouve un club près de toi",
      explorePerks: "Découvre les avantages",
      virtualTour: "Fais une visite virtuelle",
      disclaimer:
        "*Les abonnements Classic débutent à 9 000 FCFA/mois et les abonnements NY Gym Black Card à 15 000 FCFA/mois. Les abonnements peuvent nécessiter le paiement d'une cotisation annuelle facturée sur l'abonnement en cours. Certains clubs sont détenus et exploités indépendamment — les tarifs peuvent varier selon les clubs. Voir le club pour les détails. Les tarifs sont valables uniquement pour les nouveaux membres et sont sujets à modification à tout moment.",
    },
    footer: {
      downloadApp: "Télécharger l'appli NY Gym",
      infoHeading: "Infos",
      newsroom: "Salle de presse",
      careers: "Carrières",
      faqs: "FAQ",
      directory: "Trouver un club",
      blog: "Blog",
      partnersHeading: "Partenaires",
      franchising: "Franchise",
      investorRelations: "Relations investisseurs",
      pfPurpose: "Notre mission",
      pfMediaNetwork: "Médias NY Gym",
      legalHeading: "Légal",
      privacyPolicy: "Politique de confidentialité",
      termsConditions: "Conditions d'utilisation",
      doNotSell: "Ne pas vendre ou partager mes informations personnelles",
      privacyRights: "Vos droits (État & UE)",
      accessibility: "Accessibilité",
      languageLabel: "FR (Français)",
      followUs: "Suivez-nous :",
      copyright: "© 2026 New York Gym — by Amadou Diallo",
    },
    services: [
      {
        title: "Programmes d'entraînement",
        description: "Fais monter ton rythme cardiaque et accélère tes résultats.",
        ctaLabel: "VOIR LES PROGRAMMES",
        ctaHref: "/training-programs",
        image: "/images/memberships/free-fitness-training.webp",
        imageAlt: "Programmes d'entraînement chez New York Gym",
      },
      {
        title: "Cours collectifs",
        description: "Développe force, endurance et confiance — porté par l'énergie du groupe.",
        ctaLabel: "VOIR LES TYPES DE COURS",
        ctaHref: "/group-fitness",
        image: "/images/about-pf/exercise-bike.webp",
        imageAlt: "Cours collectifs chez New York Gym",
      },
      {
        title: "Entraînements à la demande",
        description: "Accède à des cours et entraînements à tout moment, où que tu sois, avec l'appli.",
        ctaLabel: "VOIR LES ENTRAÎNEMENTS À LA DEMANDE",
        ctaHref: "/on-demand",
        image: "/images/why-pf/pf-app.webp",
        imageAlt: "Entraînements à la demande avec l'application NY Gym",
      },
      {
        title: "Programmes de performance",
        description: "Entraîne-toi comme un athlète et développe ton endurance pour ton prochain défi.",
        ctaLabel: "VOIR LE CALENDRIER DES COURS",
        ctaHref: "/class-schedule",
        image: "/images/our-clubs/fitness-training.webp",
        imageAlt: "Programmes de performance chez New York Gym",
      },
    ],
    carousel2: [
      {
        title: "NOUVEAU ! DES GUIDES D'ENTRAÎNEMENT DANS L'APPLI NY GYM",
        description:
          "Envie d'un guide facile à suivre qui t'accompagne pas à pas dans tes séries et répétitions ? On a ce qu'il te faut ! En bonus, chaque exercice inclut un tutoriel visuel pour t'assurer une bonne posture.",
        ctaLabel: "Découvrir les guides",
        ctaHref: "https://planetfitness.app.link/categoryworkouts/3Sg7CG5q2iTSgQtGWOd4ZR",
        image: "/images/carousel2-slide1-workout-guides.webp",
        imageAlt: "Guides d'entraînement dans l'application NY Gym",
      },
      {
        title: "FAIS LE PLEIN D'ÉNERGIE AVEC DES AVANTAGES EXCLUSIFS",
        description: "Économise gros sur tes marques préférées grâce à des réductions exclusives et des offres spéciales.",
        ctaLabel: "Découvrir les avantages",
        ctaHref: "/my-account/perks",
        image: "/images/carousel2-slide2-perks.webp",
        imageAlt: "Explorer les avantages",
      },
      {
        title: "GAGNE DES MOIS GRATUITS EN PARRAINANT TES AMIS",
        description:
          "Envie d'un partenaire d'entraînement et d'une bonne affaire en même temps ? Chaque ami que tu parraines et qui s'inscrit te fait gagner un mois gratuit (jusqu'à 3 mois/an) ! En plus, tes amis bénéficient d'une offre à 600 FCFA d'acompte et sans engagement. Que du gagnant-gagnant ! Consulte les conditions générales. Rends-toi sur l'appli NY Gym pour commencer à parrainer dès aujourd'hui.",
        ctaLabel: "Parraine un ami",
        ctaHref: "https://planetfitness.app.link/refer",
        image: "/images/carousel2-slide3-refer-friend.webp",
        imageAlt: "Parrainer un ami",
      },
      {
        title: "ÉQUIPE-TOI",
        description:
          "On a tout ce qu'il te faut pour démarrer ton parcours fitness : sacs, tenues, essentiels de vestiaire et bien plus, à petits prix ! Découvre notre boutique.",
        ctaLabel: "Voir la boutique",
        ctaHref: "http://shop.planetfitness.com/",
        image: "/images/carousel2-slide4-store.webp",
        imageAlt: "Équipement NY Gym",
      },
    ],
  },
};

interface LangContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const LangContext = createContext<LangContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");
  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
