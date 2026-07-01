import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const programs = [
  {
    title: "Personal Training",
    description:
      "Accelerate results that last and stay motivated by highly educated and certified Personal Trainers.",
    cta: "Learn More",
    href: "/training-programs/personal-training",
    image: "/images/memberships/free-fitness-training.webp",
    imageAlt: "Personal Training at NY Gym",
  },
  {
    title: "HYROX",
    description:
      "Upgrade your fitness routine or prepare for a HYROX race with expert-led HYROX training classes designed for all fitness levels.",
    cta: "Learn More",
    href: "/training-programs/hyrox",
    image: "/images/our-clubs/fitness-training.webp",
    imageAlt: "HYROX Training at NY Gym",
  },
  {
    title: "REGYMEN",
    description:
      "Burn fat, build muscle and increase energy levels. Experience a high-intensity interval training (HIIT) group program exclusive to NY Gym.",
    cta: "Learn More",
    href: "/training-programs/regymen",
    image: "/images/why-pf/accordion-equipment.webp",
    imageAlt: "REGYMEN HIIT Program at NY Gym",
  },
  {
    title: "Team Training",
    description:
      "Rise to the challenge with coach-led Team Training — high-energy group workouts that add variety, build confidence, and keep you accountable.",
    cta: "Learn More",
    href: "/training-programs/team-training",
    image: "/images/about-pf/exercise-bike.webp",
    imageAlt: "Team Training at NY Gym",
  },
  {
    title: "Craftboxing",
    description:
      "Improve your mental and physical well-being with boxing fundamentals designed by professional boxer, George Foreman III.",
    cta: "Learn More",
    href: "/training-programs/craftboxing",
    image: "/images/why-pf/accordion-judgement-free.webp",
    imageAlt: "Craftboxing at NY Gym",
  },
  {
    title: "Fit-Fix",
    description:
      "Fit-Fix offers a fast, effective 20-minute circuit training workout that helps you lose weight, tone muscles, and see full-body results — all in less time.",
    cta: "Learn More",
    href: "/training-programs/fit-fix",
    image: "/images/why-pf/recover-spa.webp",
    imageAlt: "Fit-Fix Circuit Training at NY Gym",
  },
];

export default function TrainingProgramsPage() {
  return (
    <>
      <Header />
      <main>

        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden min-h-[580px] flex items-center">
          {/* Background image — full width */}
          <Image
            src="/hero-training.jpg"
            alt="Member doing battle ropes at NY Gym"
            fill
            className="object-cover object-center"
            priority
          />

          {/* Dark gradient overlay — left fade for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent" />

          {/* Text — overlaid on left */}
          <div className="relative z-10 px-6 py-16 md:px-16 lg:px-24 max-w-[52rem]">
            <p className="text-secondary-main font-bold text-sm uppercase tracking-widest mb-4">
              Training
            </p>
            <h1 className="font-condensed text-6xl lg:text-[6.5rem] text-white uppercase leading-none mb-6">
              Training<br />Programs
            </h1>
            <p className="text-white/90 text-lg lg:text-xl leading-relaxed max-w-[32rem]">
              From 1-on-1 coaching to tailored group training programs, everything you need to accelerate results is all under one roof.
            </p>
          </div>
        </section>

        {/* ── Programs Grid ─────────────────────────────────────────── */}
        <section className="bg-surface-gray py-16 px-6 lg:py-24">
          <div className="mx-auto max-w-[74.5rem]">

            {/* Section heading */}
            <div className="text-center mb-12">
              <h2 className="font-condensed text-4xl lg:text-6xl text-common-black uppercase leading-none mb-4">
                Find Your Program
              </h2>
              <p className="text-gray-dark text-lg max-w-2xl mx-auto">
                Choose the program that fits your goals. Every level, every schedule, every ambition — we have a program for you.
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {programs.map((program) => (
                <div
                  key={program.title}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col"
                >
                  {/* Card image */}
                  <div className="relative aspect-video w-full flex-shrink-0">
                    <Image
                      src={program.image}
                      alt={program.imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Card content */}
                  <div className="flex flex-col flex-1 p-6">
                    <h3 className="font-bold text-common-black text-lg mb-3">
                      {program.title}
                    </h3>
                    <p className="text-gray-dark text-sm leading-relaxed flex-1 mb-5">
                      {program.description}
                    </p>
                    <Link
                      href={program.href}
                      className="inline-flex items-center gap-1.5 text-primary-main font-semibold text-sm uppercase tracking-wide group"
                    >
                      {program.cta}
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Bottom ────────────────────────────────────────────── */}
        <section className="bg-purpleYellowLeftGlare overflow-hidden">
          <div className="mx-auto max-w-[90rem] flex flex-col lg:flex-row items-center lg:items-stretch">

            {/* Text — left */}
            <div className="flex-1 flex flex-col justify-center px-6 py-16 md:px-16 lg:px-24 lg:py-24">
              <h2 className="font-condensed text-4xl lg:text-6xl text-white uppercase leading-none mb-6">
                Turn Your Passion for Fitness Into a Career in Personal Training
              </h2>
              <p className="text-white/90 text-lg leading-relaxed max-w-[34rem] mb-10">
                NY Gym Personal Training Institute offers one of the most affordable, nationally recognized certifications. Start your journey today.
              </p>
              <Link
                href="/careers"
                className="inline-flex items-center justify-center bg-secondary-main text-common-black font-bold text-lg rounded-full px-10 py-4 w-full max-w-xs hover:bg-white transition-colors"
              >
                Learn More
              </Link>
            </div>

            {/* Image — right */}
            <div className="hidden lg:block relative w-[44%] flex-shrink-0 min-h-[480px]">
              <Image
                src="/images/about-pf/pf-member-thumbs-up.webp"
                alt="NY Gym Personal Trainer"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
