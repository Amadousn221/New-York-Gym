import Image from "next/image";
import Link from "next/link";
import { Archivo, Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const archivo = Archivo({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-archivo" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-inter" });

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
    desc: "La simulation complète d'une course HYROX. Enchaîne les 8 km de course et les 8 stations pour te préparer à la compétition.",
  },
];

export default function HyroxPage() {
  return (
    <>
      <Header />
      <main className={`${archivo.variable} ${inter.variable} font-[family-name:var(--font-inter)]`}>

        {/* ── Bandeau info prévente ─────────────────────────────────── */}
        <div className="bg-[#1B1C1F] px-6 py-3 text-center">
          <p className="text-white/90 text-sm">
            Les codes de prévente seront communiqués 72 heures avant l&apos;ouverture des
            préventes de l&apos;événement. Merci de contacter ton club d&apos;entraînement HYROX
            avant le 25 avril 2026 pour recevoir ton code pour l&apos;événement de Dakar.
          </p>
        </div>

        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section className="relative flex min-h-[480px] items-center overflow-hidden">
          <Image
            src="/images/our-clubs/fitness-training.webp"
            alt="Membres s'entraînant en cours HYROX à NY Gym"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 px-6 py-16 md:px-16 lg:px-24">
            <h1 className="font-[family-name:var(--font-archivo)] text-white text-7xl lg:text-[9rem] font-extrabold uppercase leading-none">
              HYROX
            </h1>
            <p className="font-[family-name:var(--font-archivo)] text-[#ED002E] text-3xl lg:text-5xl font-extrabold uppercase leading-none">
              Training Club
            </p>
          </div>
        </section>

        {/* ── Accroche ──────────────────────────────────────────────── */}
        <section className="bg-white py-16 px-6 lg:py-24">
          <div className="mx-auto max-w-[74.5rem] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <h2 className="font-[family-name:var(--font-archivo)] text-4xl lg:text-5xl font-extrabold text-[#ED002E] uppercase leading-tight">
              La course<br />commence<br />chez New York Gym
            </h2>
            <p className="text-[#1B1C1F]/80 text-base leading-relaxed">
              Que tu te prépares pour une course <strong>HYROX</strong> ou que tu cherches
              simplement à faire passer ta routine fitness au niveau supérieur, le{" "}
              <strong>HYROX Training Club</strong> t&apos;apporte l&apos;énergie de la course
              mondiale directement dans ton entraînement. Développe ton endurance, ta force et ta
              détermination à travers quatre formats de cours dynamiques :{" "}
              <strong>HYROX Engine</strong>, <strong>HYROX Power</strong>,{" "}
              <strong>HYROX Foundational</strong>, et <strong>HYROX Complete</strong>.
              <br /><br />
              New York Gym déploie le HYROX Training Club dans{" "}
              <strong>plus de 25 clubs</strong> — retrouve la liste complète ci-dessous.
            </p>
          </div>
        </section>

        {/* ── 4 formats ─────────────────────────────────────────────── */}
        <section className="bg-[#DCE0E6] py-16 px-6 lg:py-24">
          <div className="mx-auto max-w-[74.5rem]">
            <div className="text-center mb-14">
              <h2 className="font-[family-name:var(--font-archivo)] text-3xl lg:text-4xl font-extrabold text-[#1B1C1F]">
                Les 4 formats HYROX
              </h2>
              <div className="w-16 h-1 bg-[#ED002E] mx-auto mt-4" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {formats.map((f) => (
                <div key={f.name} className="bg-white rounded shadow-md p-6 flex flex-col gap-3">
                  <h3 className="font-[family-name:var(--font-archivo)] text-lg font-extrabold text-[#ED002E] uppercase">
                    {f.name}
                  </h3>
                  <p className="text-[#1B1C1F]/75 text-sm leading-relaxed flex-1">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA trouver un club ───────────────────────────────────── */}
        <section className="bg-[#1B1C1F] py-16 px-6 lg:py-20 text-center">
          <div className="mx-auto max-w-2xl flex flex-col items-center gap-6">
            <h2 className="font-[family-name:var(--font-archivo)] text-3xl lg:text-4xl font-extrabold text-white uppercase">
              Prêt à rejoindre le HYROX Training Club ?
            </h2>
            <p className="text-white/70 text-base max-w-md">
              Trouve un club New York Gym proposant le HYROX Training Club près de chez toi et
              commence dès aujourd&apos;hui.
            </p>
            <Link
              href="/our-clubs"
              className="inline-flex items-center justify-center bg-[#ED002E] text-white font-bold text-sm rounded px-8 py-3 hover:bg-[#c40025] transition-colors"
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
