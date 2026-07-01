import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const programs = [
  {
    title: "Coaching individuel",
    description:
      "Obtiens des résultats durables et reste motivé grâce à des coachs hautement qualifiés et certifiés.",
    cta: "EN SAVOIR PLUS",
    href: "/training-programs/personal",
    image: "/images/memberships/free-fitness-training.webp",
    imageAlt: "Coaching individuel chez NY Gym",
  },
  {
    title: "HYROX",
    description:
      "Améliore ta routine fitness ou prépare-toi pour une course HYROX grâce à des cours encadrés par des experts, conçus pour tous les niveaux.",
    cta: "EN SAVOIR PLUS",
    href: "/training-programs/hyrox",
    image: "/images/our-clubs/fitness-training.webp",
    imageAlt: "HYROX Training chez NY Gym",
  },
  {
    title: "REGYMEN",
    description:
      "Brûle des graisses, développe du muscle et gagne en énergie. Vis un entraînement fractionné à haute intensité (HIIT) en groupe, exclusif à New York Gym.",
    cta: "EN SAVOIR PLUS",
    href: "/training-programs/regymen",
    image: "/images/why-pf/accordion-equipment.webp",
    imageAlt: "REGYMEN HIIT chez NY Gym",
  },
  {
    title: "Entraînement en équipe",
    description:
      "Relève le défi avec un entraînement de groupe encadré par un coach — intense, varié, qui renforce la confiance et te garde motivé.",
    cta: "EN SAVOIR PLUS",
    href: "/training-programs/team-training",
    image: "/images/about-pf/exercise-bike.webp",
    imageAlt: "Entraînement en équipe chez NY Gym",
  },
  {
    title: "Craftboxing",
    description:
      "Améliore ton bien-être mental et physique grâce aux fondamentaux de la boxe, encadrés par des coachs professionnels certifiés.",
    cta: "EN SAVOIR PLUS",
    href: "/training-programs/craft-boxing",
    image: "/images/why-pf/accordion-judgement-free.webp",
    imageAlt: "Craftboxing chez NY Gym",
  },
  {
    title: "Fit-Fix",
    description:
      "Fit-Fix propose un entraînement en circuit rapide et efficace de 20 minutes qui t'aide à perdre du poids, tonifier tes muscles et voir des résultats sur tout le corps — en moins de temps.",
    cta: "EN SAVOIR PLUS",
    href: "/training-programs/fit-fix",
    image: "/images/why-pf/recover-spa.webp",
    imageAlt: "Fit-Fix Circuit Training chez NY Gym",
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
              ENTRAÎNEMENT
            </p>
            <h1 className="font-condensed text-6xl lg:text-[6.5rem] text-white uppercase leading-none mb-6">
              PROGRAMMES<br />D&apos;ENTRAÎNEMENT
            </h1>
            <p className="text-white/90 text-lg lg:text-xl leading-relaxed max-w-[32rem]">
              Du coaching individuel aux programmes collectifs sur mesure, tout ce dont tu as besoin pour accélérer tes résultats se trouve sous un même toit.
            </p>
          </div>
        </section>

        {/* ── Programs Grid ─────────────────────────────────────────── */}
        <section className="bg-surface-gray py-16 px-6 lg:py-24">
          <div className="mx-auto max-w-[74.5rem]">

            {/* Section heading */}
            <div className="text-center mb-12">
              <h2 className="font-condensed text-4xl lg:text-6xl text-common-black uppercase leading-none mb-4">
                Reste motivé. Dépasse tes plateaux. Atteins tes objectifs.
              </h2>
              <p className="text-gray-dark text-lg max-w-2xl mx-auto">
                Choisis le programme qui correspond à tes objectifs. Chaque niveau, chaque emploi du temps, chaque ambition — nous avons un programme pour toi.
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
                Transforme ta passion pour le fitness en carrière de coach sportif
              </h2>
              <p className="text-white/90 text-lg leading-relaxed max-w-[34rem] mb-10">
                L&apos;Institut de formation de coachs sportifs New York Gym propose l&apos;une des certifications les plus abordables et reconnues du pays.
              </p>
              <Link
                href="/careers"
                className="inline-flex items-center justify-center bg-secondary-main text-common-black font-bold text-lg rounded-full px-10 py-4 w-full max-w-xs hover:bg-white transition-colors"
              >
                EN SAVOIR PLUS
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
