import Image from "next/image";
import Link from "next/link";
import { Archivo, Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const archivo = Archivo({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-archivo" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-inter" });

const appFeatures = [
  {
    title: "Réservation de séance",
    body: "Réserve ta prochaine séance ou ton cours collectif à l'avance, et donne-toi le temps et l'espace nécessaires pour un bon entraînement. Ça t'aide à éviter l'affluence et les files d'attente à ton arrivée au club.",
  },
  {
    title: "Accès digital au club",
    body: "L'appli génère un code-barres unique qui te permet de scanner ton entrée dans n'importe quel club New York Gym, avec seulement ton smartphone — plus simple et plus sûr.",
  },
  {
    title: "Entraînements à la demande",
    body: "Idéal pour les membres qui veulent atteindre leurs objectifs fitness, où qu'ils soient. Du cardio au renforcement musculaire, tu trouveras tout ce qu'il te faut pour rester en forme et motivé.",
  },
];

export default function FitFixPage() {
  return (
    <>
      <Header />
      <main className={`${archivo.variable} ${inter.variable} font-[family-name:var(--font-inter)]`}>

        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section className="bg-white py-16 px-6 lg:py-24">
          <div className="mx-auto max-w-[74.5rem] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-[#ED002E] font-bold text-sm uppercase tracking-widest mb-4">
                New York Gym
              </p>
              <h1 className="font-[family-name:var(--font-archivo)] text-[#1B1C1F] text-4xl lg:text-5xl font-bold leading-tight mb-6">
                New York Gym Fit-Fix 20 minutes
              </h1>
              <p className="font-bold text-[#1B1C1F] uppercase text-sm mb-4">
                Le programme d&apos;entraînement en circuit le plus efficace, conçu pour des
                résultats maximum en seulement 20 minutes.
              </p>
              <p className="text-[#1B1C1F]/80 text-base leading-relaxed">
                Peu de temps devant toi mais toujours envie de transpirer ? Le Fit-Fix 20 minutes
                de New York Gym est un circuit facile à suivre qui simplifie tes débuts dans ton
                club.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded overflow-hidden">
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

        {/* ── Circuit Fit-Fix en 9 étapes ───────────────────────────── */}
        <section className="bg-white pb-16 px-6 lg:pb-24">
          <div className="mx-auto max-w-[74.5rem] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative aspect-[4/3] rounded overflow-hidden max-w-md mx-auto lg:mx-0">
              <Image
                src="/images/goodlife-fitfix/circuit.png"
                alt="Membres guidés à travers le circuit Fit-Fix"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-archivo)] text-2xl lg:text-3xl font-extrabold text-[#1B1C1F] mb-5">
                Circuit Fit-Fix en 9 étapes
              </h2>
              <p className="text-[#1B1C1F]/80 text-base leading-relaxed">
                Ce circuit en 9 étapes est conçu pour travailler les groupes musculaires du plus
                grand au plus petit — activant le bas du dos, les jambes, la poitrine, les bras,
                les fessiers et les abdominaux, de façon sûre et efficace. La signalétique en club
                te guide à travers chaque exercice, et chaque machine t&apos;accompagne dans la
                bonne amplitude de mouvement, donc pas besoin d&apos;un partenaire pour
                t&apos;assister. En plus, l&apos;intensité s&apos;ajuste facilement à ton niveau
                et à tes besoins.
              </p>
            </div>
          </div>
        </section>

        {/* ── S'entraîner à la maison ou en club + app promo ────────── */}
        <section className="bg-white pb-16 px-6 lg:pb-24">
          <div className="mx-auto max-w-[74.5rem] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
            <div>
              <h2 className="font-[family-name:var(--font-archivo)] text-2xl lg:text-3xl font-extrabold text-[#1B1C1F] mb-5">
                S&apos;entraîner à la maison ou en club
              </h2>
              <p className="text-[#1B1C1F]/80 text-base leading-relaxed mb-6">
                Télécharge l&apos;appli NY Gym et accède au Fit-Fix où que tu sois. Ajoute tes
                séances Fit-Fix directement dans ton calendrier in-app pour rester à jour dans ta
                routine fitness. Demande plus de détails à un membre de l&apos;équipe, ou
                inscris-toi pour une séance Fit-Fix gratuite avec un coach.
              </p>
              <Link
                href="/mobileapp"
                className="inline-flex items-center justify-center bg-[#ED002E] text-white font-bold text-sm rounded px-8 py-3 w-fit hover:bg-[#c40025] transition-colors"
              >
                Explorer l&apos;appli NY Gym
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded overflow-hidden max-w-md mx-auto lg:mx-0">
              <Image
                src="/images/goodlife-fitfix/home-or-club.jpeg"
                alt="Membre se reposant entre les séries avec des écouteurs"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-[#ED002E] rounded-lg py-14 px-6 lg:px-16">
            <div className="text-center mb-12">
              <h3 className="font-[family-name:var(--font-archivo)] text-white text-2xl lg:text-3xl font-extrabold">
                La nouvelle appli New York Gym est disponible
              </h3>
              <div className="w-16 h-1 bg-white mx-auto mt-4" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
              {appFeatures.map((f) => (
                <div key={f.title} className="text-center">
                  <h4 className="font-bold text-white uppercase text-base mb-3">{f.title}</h4>
                  <p className="text-white/85 text-sm leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Link
                href="/mobileapp"
                className="inline-flex items-center justify-center bg-white text-[#ED002E] font-bold text-sm rounded px-8 py-3 hover:bg-[#1B1C1F] hover:text-white transition-colors"
              >
                Voir l&apos;appli
              </Link>
            </div>
          </div>
        </section>

        {/* ── Cross-sell Coaching individuel ────────────────────────── */}
        <section className="bg-[#16171A] py-16 px-6 lg:py-20">
          <div className="mx-auto max-w-[74.5rem] flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div>
              <p className="text-[#ED002E] font-bold text-sm uppercase tracking-widest mb-3">
                Coaching individuel
              </p>
              <h2 className="font-[family-name:var(--font-archivo)] text-white text-2xl lg:text-3xl font-extrabold uppercase mb-3">
                Chez New York Gym — la référence du coaching individuel.
              </h2>
              <p className="text-white/80 text-base max-w-lg">
                Obtiens les résultats que tu recherches avec l&apos;un de nos coachs hautement
                qualifiés — une expérience haut de gamme qui t&apos;inspire, t&apos;éduque et te
                fait progresser.
              </p>
            </div>
            <Link
              href="/training-programs/personal"
              className="inline-flex items-center justify-center bg-white text-[#1B1C1F] font-bold text-sm rounded px-8 py-3 w-fit flex-shrink-0 hover:bg-[#ED002E] hover:text-white transition-colors"
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
