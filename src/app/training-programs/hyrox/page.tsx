import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const formats = [
  {
    name: "HYROX Engine",
    desc: "Développe ton moteur cardio avec des intervalles haute intensité calqués sur les exigences d'une course HYROX officielle.",
  },
  {
    name: "HYROX Power",
    desc: "Travaille ta force fonctionnelle et ta puissance explosive pour dominer les stations les plus exigeantes de la course.",
  },
  {
    name: "HYROX Foundational",
    desc: "Le point de départ idéal pour les débutants — apprends les mouvements fondamentaux et construis une base solide à ton rythme.",
  },
  {
    name: "HYROX Complete",
    desc: "La simulation complète d'une course HYROX. Enchaine les 8 km de course et les 8 stations pour te préparer à la compétition.",
  },
];

export default function HyroxPage() {
  return (
    <>
      <Header />
      <main>
        {/* ── Bandeau info prévente ────────────────────────────── */}
        <div className="bg-primary-dark px-6 py-3 text-center">
          <p className="text-white/90 text-sm">
            Les codes de prévente seront communiqués 72 heures avant l&apos;ouverture des
            préventes de l&apos;événement. Merci de contacter ton club d&apos;entraînement HYROX
            avant le 25 avril 2026 pour recevoir ton code pour l&apos;événement de Dakar.
          </p>
        </div>

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="relative flex min-h-[480px] items-center overflow-hidden">
          <Image
            src="/images/our-clubs/fitness-training.webp"
            alt="Membres s'entraînant en cours HYROX à NY Gym"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-common-black/90 via-common-black/60 to-transparent" />
          <div className="relative z-10 px-6 py-16 md:px-16 lg:px-24 max-w-[52rem]">
            <h1 className="font-condensed text-6xl lg:text-[8rem] text-white uppercase leading-none">
              HYROX<br />
              <span className="text-secondary-main text-5xl lg:text-6xl">TRAINING CLUB</span>
            </h1>
          </div>
        </section>

        {/* ── Accroche ─────────────────────────────────────────── */}
        <section className="bg-white py-16 px-6 lg:py-24">
          <div className="mx-auto max-w-[74.5rem] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-condensed text-4xl lg:text-6xl text-primary-main uppercase leading-tight mb-2">
                La course<br />commence<br />chez New York Gym
              </h2>
            </div>
            <p className="text-gray-dark text-base leading-relaxed">
              Que tu te prépares pour une course <strong>HYROX</strong> ou que tu cherches
              simplement à faire passer ta routine fitness au niveau supérieur, le{" "}
              <strong>HYROX Training Club</strong> t&apos;apporte l&apos;énergie de la course
              mondiale directement dans ton entraînement. Développe ton endurance, ta force et ta
              détermination à travers quatre formats de cours dynamiques :{" "}
              <strong>HYROX Engine</strong>, <strong>HYROX Power</strong>,{" "}
              <strong>HYROX Foundational</strong>, et <strong>HYROX Complete</strong>.
              <br />
              <br />
              New York Gym déploie le HYROX Training Club dans{" "}
              <strong>plus de 25 clubs</strong> — trouve ton club ci-dessous.
            </p>
          </div>
        </section>

        {/* ── 4 formats ────────────────────────────────────────── */}
        <section className="bg-surface-gray py-16 px-6 lg:py-24">
          <div className="mx-auto max-w-[74.5rem]">
            <h2 className="font-condensed text-4xl lg:text-5xl text-common-black uppercase text-center mb-14">
              Les 4 formats HYROX
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {formats.map((f, i) => (
                <div
                  key={f.name}
                  className="bg-white rounded-2xl p-6 flex flex-col gap-4 shadow-sm"
                >
                  <span className="font-condensed text-5xl text-primary-main/20 leading-none">
                    0{i + 1}
                  </span>
                  <h3 className="font-bold text-lg text-common-black">{f.name}</h3>
                  <p className="text-gray-dark text-sm leading-relaxed flex-1">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA trouver un club ───────────────────────────────── */}
        <section className="bg-hero-gradient-1 py-16 px-6 lg:py-20 text-center">
          <div className="mx-auto max-w-2xl flex flex-col items-center gap-6">
            <h2 className="font-condensed text-4xl lg:text-5xl text-white uppercase">
              Prêt à rejoindre le HYROX Training Club ?
            </h2>
            <p className="text-white/80 text-base max-w-md">
              Trouve un club New York Gym proposant le HYROX Training Club près de chez toi et
              commence dès aujourd&apos;hui.
            </p>
            <Link
              href="/our-clubs"
              className="inline-flex items-center justify-center bg-secondary-main text-common-black font-bold text-base rounded-full px-10 py-4 hover:bg-white transition-colors"
            >
              Trouver un club
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
