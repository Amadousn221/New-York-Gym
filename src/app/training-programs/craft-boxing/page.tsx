import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const principles = [
  {
    title: "Authenticité & Héritage",
    body: "Conçu par des coachs professionnels de boxe, Craft Boxing propose une expérience construite sur des années de pratique et de transmission du savoir-faire de la boxe.",
  },
  {
    title: "Esprit de communauté",
    body: "Peu importe d'où tu viens, Craft Boxing est un espace pour tous. Laisse tes tracas et tes victoires à la porte — chez Craft, on est tous égaux.",
  },
  {
    title: "Corps & Esprit",
    body: "Craft Boxing renforce ta force physique tout en aiguisant ta force mentale, pour t'aider à affronter la vie de face.",
  },
];

export default function CraftBoxingPage() {
  return (
    <>
      <Header />
      <main>
        {/* ── Hero — split panel ───────────────────────────────── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
          <div className="bg-hero-gradient-1 flex flex-col justify-center px-6 py-16 md:px-16 lg:px-20 lg:py-24">
            <h1 className="font-condensed text-6xl lg:text-8xl text-white uppercase leading-none mb-6">
              CRAFT<br />
              <span className="text-secondary-main">BOXING</span>
            </h1>
            <p className="text-white/90 text-lg leading-relaxed max-w-md mb-8">
              Connecte ton corps et ton esprit à travers un entraînement de boxe conçu par des
              coachs professionnels certifiés.
            </p>
            <Link
              href="/gym-memberships"
              className="inline-flex items-center justify-center bg-secondary-main text-common-black font-bold text-base rounded-full px-8 py-4 w-fit hover:bg-white transition-colors"
            >
              Démarre ton abonnement
            </Link>
          </div>

          <div className="relative min-h-[320px] lg:min-h-0 bg-common-black">
            <Image
              src="/images/why-pf/accordion-judgement-free.webp"
              alt="Membre pratiquant le Craft Boxing à NY Gym"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </section>

        {/* ── Accroche principes ───────────────────────────────── */}
        <section className="bg-common-black py-14 px-6">
          <div className="mx-auto max-w-[74.5rem] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="font-condensed text-3xl lg:text-5xl text-white uppercase leading-tight">
                UNE BOXE AUTHENTIQUE,{" "}
                <span className="text-secondary-main">DES PRINCIPES À L&apos;ANCIENNE.</span>
                <br />
                C&apos;EST ÇA, L&apos;ESPRIT CRAFT BOXING.
              </p>
            </div>
            <p className="text-white/80 text-base leading-relaxed">
              Entièrement centrée sur les fondamentaux, l&apos;expérience Craft Boxing améliore
              non seulement ta condition physique, mais développe aussi ta concentration et ta
              force mentale. Rejoins une communauté construite pour cultiver la meilleure version
              de toi-même.
            </p>
          </div>
        </section>

        {/* ── Ajouter à l'abonnement ───────────────────────────── */}
        <section className="bg-primary-dark py-16 px-6 lg:py-20 text-center">
          <div className="mx-auto max-w-2xl flex flex-col items-center gap-6">
            <h2 className="font-condensed text-4xl lg:text-5xl text-white uppercase">
              AJOUTE CRAFT BOXING<br />
              <span className="text-secondary-main">À TON ABONNEMENT</span>
            </h2>
            <p className="text-white/80 text-base leading-relaxed max-w-lg">
              Les abonnements Performance incluent l&apos;accès aux séances Craft Boxing et plus
              encore, dans une sélection de clubs New York Gym. Passe à un abonnement supérieur
              ou achète un carnet de séances Performance en contactant ton club.
            </p>
            <Link
              href="/gym-memberships"
              className="inline-flex items-center justify-center bg-secondary-main text-common-black font-bold text-base rounded-full px-10 py-4 hover:bg-white transition-colors"
            >
              S&apos;inscrire
            </Link>
          </div>
        </section>

        {/* ── Principes du Craft Boxing ────────────────────────── */}
        <section className="bg-white py-16 px-6 lg:py-24">
          <div className="mx-auto max-w-[74.5rem]">
            <h2 className="font-condensed text-4xl lg:text-5xl text-common-black uppercase text-center mb-14">
              Principes du Craft Boxing
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {principles.map((p) => (
                <div key={p.title} className="flex flex-col gap-4 border-t-4 border-primary-main pt-6">
                  <h3 className="font-bold text-lg text-common-black">{p.title}</h3>
                  <p className="text-gray-dark text-sm leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Tous les niveaux bienvenus ───────────────────────── */}
        <section className="bg-surface-gray py-16 px-6 lg:py-24">
          <div className="mx-auto max-w-[74.5rem] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/why-pf/recover-spa.webp"
                alt="Membres de tous niveaux pratiquant Craft Boxing"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-condensed text-4xl lg:text-5xl text-common-black uppercase mb-5">
                Tous les niveaux<br />
                <span className="text-primary-main">sont les bienvenus !</span>
              </h2>
              <p className="text-gray-dark text-base leading-relaxed">
                Encadrée par des coachs inspirants et expérimentés, chaque séance est pensée avec
                soin pour t&apos;aider à donner le meilleur de toi-même — peu importe qui tu es.
              </p>
            </div>
          </div>
        </section>

        {/* ── Devenir coach Craft Boxing ───────────────────────── */}
        <section className="bg-common-black py-16 px-6 lg:py-24 text-center">
          <div className="mx-auto max-w-2xl flex flex-col items-center gap-6">
            <h2 className="font-condensed text-4xl lg:text-5xl text-white uppercase">
              Devenir coach Craft Boxing
            </h2>
            <div className="w-16 h-1 bg-secondary-main" />
            <p className="text-white/80 text-base leading-relaxed max-w-md">
              Tu es un coach de haut niveau, passionné par le fait de guider et d&apos;inspirer
              les autres à travers la boxe ? Si oui, on aimerait beaucoup discuter avec toi.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center bg-secondary-main text-common-black font-bold text-base rounded-full px-10 py-4 hover:bg-white transition-colors"
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
