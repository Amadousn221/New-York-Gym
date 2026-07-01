import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const appFeatures = [
  {
    title: "RÉSERVATION DE SÉANCE",
    body: "Réserve ta prochaine séance ou ton cours collectif à l'avance, et donne-toi le temps et l'espace nécessaires pour un bon entraînement. Ça t'aide à éviter l'affluence et les files d'attente à ton arrivée au club.",
  },
  {
    title: "ACCÈS DIGITAL AU CLUB",
    body: "L'appli génère un code-barres unique qui te permet de scanner ton entrée dans n'importe quel club New York Gym, avec seulement ton smartphone — plus simple et plus sûr pour accéder à ton club.",
  },
  {
    title: "ENTRAÎNEMENTS À LA DEMANDE",
    body: "Idéal pour les membres qui veulent atteindre leurs objectifs fitness, où qu'ils soient. Du cardio au renforcement musculaire, tu trouveras tout ce qu'il te faut pour rester en forme et motivé.",
  },
];

export default function FitFixPage() {
  return (
    <>
      <Header />
      <main>
        {/* ── Hero — split panel ───────────────────────────────── */}
        <section className="bg-white py-16 px-6 lg:py-24">
          <div className="mx-auto max-w-[74.5rem] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-primary-main font-bold text-sm uppercase tracking-widest mb-4">
                NEW YORK GYM
              </p>
              <h1 className="font-condensed text-5xl lg:text-7xl text-common-black uppercase leading-none mb-6">
                New York Gym<br />
                <span className="text-primary-main">Fit-Fix 20 minutes</span>
              </h1>
              <p className="font-bold text-common-black uppercase text-sm mb-5">
                LE PROGRAMME D&apos;ENTRAÎNEMENT EN CIRCUIT LE PLUS EFFICACE, CONÇU POUR DES
                RÉSULTATS MAXIMUM EN SEULEMENT 20 MINUTES.
              </p>
              <p className="text-gray-dark text-base leading-relaxed">
                Peu de temps devant toi mais toujours envie de transpirer ? Le Fit-Fix 20 minutes
                de New York Gym est un circuit facile à suivre qui simplifie tes débuts dans ton
                club.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/goodlife-fitfix/hero.jpeg"
                alt="Un coach NY Gym accompagnant un membre sur une machine de circuit"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* ── Circuit 9 étapes ─────────────────────────────────── */}
        <section className="bg-surface-gray py-16 px-6 lg:py-24">
          <div className="mx-auto max-w-[74.5rem] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/goodlife-fitfix/circuit.png"
                alt="Membres guidés à travers le circuit Fit-Fix"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-condensed text-4xl lg:text-5xl text-common-black uppercase mb-5">
                CIRCUIT FIT-FIX EN 9 ÉTAPES
              </h2>
              <p className="text-gray-dark text-base leading-relaxed mb-4">
                Ce circuit en 9 étapes est conçu pour travailler les groupes musculaires du plus
                grand au plus petit — activant le bas du dos, les jambes, la poitrine, les bras,
                les fessiers et les abdominaux, de façon sûre et efficace.
              </p>
              <p className="text-gray-dark text-base leading-relaxed">
                La signalétique en club ou l&apos;appli New York Gym te guide tout au long du
                circuit Fit-Fix, pour ne manquer aucun exercice. Chaque machine t&apos;accompagne
                dans la bonne amplitude de mouvement, donc pas besoin d&apos;un partenaire pour
                t&apos;assister. En plus, l&apos;intensité de ton entraînement s&apos;ajuste
                facilement à ton niveau et à tes besoins.
              </p>
            </div>
          </div>
        </section>

        {/* ── S'entraîner à la maison ou en club ──────────────── */}
        <section className="bg-white py-16 px-6 lg:py-24">
          <div className="mx-auto max-w-[74.5rem]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
              <div>
                <h2 className="font-condensed text-4xl lg:text-5xl text-common-black uppercase mb-5">
                  S&apos;ENTRAÎNER À LA MAISON OU EN CLUB
                </h2>
                <p className="text-gray-dark text-base leading-relaxed mb-6">
                  Télécharge notre appli et accède au Fit-Fix où que tu sois. Ajoute tes séances
                  Fit-Fix directement dans ton calendrier in-app pour rester à jour dans ta
                  routine fitness.
                </p>
                <p className="text-gray-dark text-base leading-relaxed mb-8">
                  Demande plus de détails à un membre de l&apos;équipe, ou inscris-toi pour une
                  séance Fit-Fix gratuite avec un coach.
                </p>
                <Link
                  href="/mobileapp"
                  className="inline-flex items-center justify-center bg-primary-main text-white font-bold text-base rounded-full px-8 py-4 w-fit hover:bg-primary-dark transition-colors"
                >
                  Explorer l&apos;appli NY Gym
                </Link>
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/goodlife-fitfix/home-or-club.jpeg"
                  alt="Membre se reposant entre les séries avec des écouteurs"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* App banner */}
            <div className="bg-primary-main rounded-2xl py-14 px-6 lg:px-16">
              <div className="text-center mb-12">
                <h3 className="font-condensed text-3xl lg:text-4xl text-white uppercase">
                  LA NOUVELLE APPLI NEW YORK GYM EST DISPONIBLE
                </h3>
                <div className="w-16 h-1 bg-secondary-main mx-auto mt-4" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
                {appFeatures.map((f) => (
                  <div key={f.title} className="text-center">
                    <h4 className="font-bold text-secondary-main uppercase text-sm mb-3">
                      {f.title}
                    </h4>
                    <p className="text-white/85 text-sm leading-relaxed">{f.body}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center">
                <Link
                  href="/mobileapp"
                  className="inline-flex items-center justify-center bg-white text-primary-main font-bold text-base rounded-full px-8 py-4 hover:bg-secondary-main hover:text-common-black transition-colors"
                >
                  Voir l&apos;appli
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Cross-sell Coaching individuel ──────────────────── */}
        <section className="bg-common-black py-16 px-6 lg:py-20">
          <div className="mx-auto max-w-[74.5rem] flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div>
              <p className="text-secondary-main font-bold text-sm uppercase tracking-widest mb-3">
                COACHING INDIVIDUEL
              </p>
              <h2 className="font-condensed text-white text-3xl lg:text-4xl uppercase mb-3">
                CHEZ NEW YORK GYM — LA RÉFÉRENCE DU COACHING INDIVIDUEL.
              </h2>
              <p className="text-white/80 text-base max-w-lg">
                Obtiens les résultats que tu recherches avec l&apos;un de nos coachs hautement
                qualifiés. En t&apos;entraînant avec un coach New York Gym, tu bénéficies
                d&apos;une expérience haut de gamme qui t&apos;inspire, t&apos;éduque et te fait
                progresser.
              </p>
            </div>
            <Link
              href="/training-programs/personal"
              className="inline-flex items-center justify-center bg-secondary-main text-common-black font-bold text-base rounded-full px-8 py-4 w-fit shrink-0 hover:bg-white transition-colors"
            >
              Réserve une consultation gratuite
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
