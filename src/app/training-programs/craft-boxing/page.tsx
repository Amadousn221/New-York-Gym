import Image from "next/image";
import Link from "next/link";
import { Archivo, Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const archivo = Archivo({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-archivo" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-inter" });

const principles = [
  {
    title: "Authenticité & Héritage",
    body: "Conçu par des coachs professionnels de boxe, Craft Boxing propose une expérience construite sur des années de pratique et de transmission du savoir-faire de la boxe.",
    image: "/images/goodlife-craftboxing/principle-1.jpeg",
  },
  {
    title: "Esprit de communauté",
    body: "Peu importe d'où tu viens, Craft Boxing est un espace pour tous. Laisse tes tracas et tes victoires à la porte — chez Craft, on est tous égaux.",
    image: "/images/goodlife-craftboxing/principle-2.jpeg",
  },
  {
    title: "Corps & Esprit",
    body: "Craft Boxing renforce ta force physique tout en aiguisant ta force mentale, pour t'aider à affronter la vie de face.",
    image: "/images/goodlife-craftboxing/principle-3.jpeg",
  },
];

const careerPhotos = [
  "/images/goodlife-craftboxing/careers-1.jpeg",
  "/images/goodlife-craftboxing/careers-2.jpeg",
  "/images/goodlife-craftboxing/careers-3.jpeg",
  "/images/goodlife-craftboxing/careers-4.jpeg",
];

export default function CraftBoxingPage() {
  return (
    <>
      <Header />
      <main className={`${archivo.variable} ${inter.variable} font-[family-name:var(--font-inter)]`}>

        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section className="bg-[#1B1C1F] grid grid-cols-1 lg:grid-cols-2 min-h-[480px]">
          <div className="px-6 py-16 md:px-16 lg:px-20 lg:py-24 flex flex-col justify-center">
            <h1 className="font-[family-name:var(--font-archivo)] text-white text-6xl lg:text-8xl font-extrabold uppercase leading-none mb-8">
              Craft<br />Boxing
            </h1>
            <p className="text-white/80 text-base leading-relaxed max-w-md mb-8">
              Connecte ton corps et ton esprit à travers un entraînement de boxe conçu par des
              coachs professionnels certifiés.
            </p>
            <Link
              href="/gym-memberships"
              className="inline-flex items-center justify-center bg-[#ED002E] text-white font-bold text-sm rounded px-8 py-3 w-fit hover:bg-[#c40025] transition-colors"
            >
              Démarre ton abonnement
            </Link>
          </div>

          <div className="relative min-h-[320px] lg:min-h-0">
            <Image
              src="/images/goodlife-craftboxing/hero.jpeg"
              alt="Membre pratiquant le Craft Boxing à NY Gym"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </section>

        {/* ── Accroche principes ─────────────────────────────────────── */}
        <section className="bg-[#ED002E] py-14 px-6">
          <div className="mx-auto max-w-[74.5rem] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <h2 className="font-[family-name:var(--font-archivo)] text-white text-3xl lg:text-5xl font-extrabold uppercase leading-tight">
              Une boxe authentique, des principes à l&apos;ancienne.
              C&apos;est ça, l&apos;esprit Craft Boxing.
            </h2>
            <p className="text-white/90 text-base leading-relaxed">
              Entièrement centrée sur les fondamentaux, l&apos;expérience Craft Boxing améliore
              non seulement ta condition physique, mais développe aussi ta concentration et ta
              force mentale. Rejoins une communauté construite pour cultiver la meilleure version
              de toi-même.
            </p>
          </div>
        </section>

        {/* ── Ajouter à l'abonnement ─────────────────────────────────── */}
        <section className="bg-white py-16 px-6 lg:py-20 text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="font-[family-name:var(--font-archivo)] text-3xl lg:text-4xl font-extrabold text-[#1B1C1F] uppercase mb-6">
              Ajoute Craft Boxing<br />à ton abonnement
            </h2>
            <p className="text-[#1B1C1F]/80 text-base leading-relaxed mb-8 max-w-lg mx-auto">
              Les abonnements Performance incluent l&apos;accès aux séances Craft Boxing et plus
              encore, dans une sélection de clubs New York Gym. Passe à un abonnement supérieur
              ou achète un carnet de séances Performance en contactant ton club.
            </p>
            <Link
              href="/gym-memberships"
              className="inline-flex items-center justify-center bg-[#ED002E] text-white font-bold text-sm rounded px-8 py-3 hover:bg-[#c40025] transition-colors"
            >
              S&apos;inscrire
            </Link>
          </div>
        </section>

        {/* ── Principes du Craft Boxing ──────────────────────────────── */}
        <section className="bg-white pt-16 px-6 lg:pt-24">
          <div className="mx-auto max-w-[74.5rem] text-center mb-14">
            <h2 className="font-[family-name:var(--font-archivo)] text-3xl lg:text-4xl font-extrabold text-[#1B1C1F]">
              Principes du Craft Boxing
            </h2>
            <div className="w-16 h-1 bg-[#ED002E] mx-auto mt-4" />
          </div>

          <div className="bg-[#DCE0E6] pt-20 -mt-20 pb-16">
            <div className="mx-auto max-w-[74.5rem] grid grid-cols-1 sm:grid-cols-3 gap-6 px-6">
              {principles.map((p) => (
                <div key={p.title} className="bg-white rounded shadow-md overflow-hidden">
                  <div className="relative aspect-[4/3]">
                    <Image src={p.image} alt={p.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-[family-name:var(--font-archivo)] text-lg font-extrabold text-[#1B1C1F] mb-2">
                      {p.title}
                    </h3>
                    <p className="text-[#1B1C1F]/75 text-sm leading-relaxed">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Tous les niveaux bienvenus ─────────────────────────────── */}
        <section className="bg-[#DCE0E6] py-16 px-6 lg:py-24">
          <div className="mx-auto max-w-[74.5rem] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative aspect-[4/3] rounded overflow-hidden max-w-md mx-auto lg:mx-0">
              <Image
                src="/images/goodlife-craftboxing/inclusivity.jpeg"
                alt="Membres de tous niveaux pratiquant Craft Boxing"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-archivo)] text-3xl lg:text-4xl font-extrabold text-[#1B1C1F] mb-5">
                Tous les niveaux sont les bienvenus !
              </h2>
              <p className="text-[#1B1C1F]/80 text-base leading-relaxed">
                Encadrée par des coachs inspirants et expérimentés, chaque séance est pensée avec
                soin pour t&apos;aider à donner le meilleur de toi-même — peu importe qui tu es.
              </p>
            </div>
          </div>
        </section>

        {/* ── Devenir coach Craft Boxing ─────────────────────────────── */}
        <section className="bg-[#F5F6F7] py-16 px-6 lg:py-24 text-center">
          <div className="mx-auto max-w-[74.5rem]">
            <h2 className="font-[family-name:var(--font-archivo)] text-3xl lg:text-4xl font-extrabold text-[#1B1C1F] mb-3">
              Devenir coach Craft Boxing
            </h2>
            <div className="w-16 h-1 bg-[#ED002E] mx-auto mb-8" />
            <p className="text-[#1B1C1F]/80 text-lg mb-10">
              Tu es un coach de haut niveau, passionné par le fait de guider et d&apos;inspirer
              les autres à travers la boxe ? Si oui, on aimerait beaucoup discuter avec toi.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10">
              {careerPhotos.map((src) => (
                <div key={src} className="relative aspect-[3/4] rounded overflow-hidden">
                  <Image src={src} alt="Coach Craft Boxing NY Gym" fill className="object-cover" />
                </div>
              ))}
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center bg-[#ED002E] text-white font-bold text-sm rounded px-8 py-3 hover:bg-[#c40025] transition-colors"
            >
              En savoir plus
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
