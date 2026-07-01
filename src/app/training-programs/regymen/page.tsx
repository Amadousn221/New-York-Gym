import Image from "next/image";
import { Archivo, Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const archivo = Archivo({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-archivo" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-inter" });

const programs = [
  {
    title: "BURN",
    body: "Notre séance la plus populaire. BURN associe cardio et musculation — les stations HIIT alternent tapis de course, ski erg, vélos assault, TRX, haltères et kettlebells pour transformer ton corps en machine à brûler des calories.",
    image: "/images/goodlife-regymen/program-burn.jpeg",
  },
  {
    title: "BUILD",
    body: "Repars plus fort qu'à ton arrivée. BUILD est un entraînement de force dynamique avec traîneaux, pneus, barres olympiques, slam balls, battle ropes et barres pour augmenter ta masse musculaire maigre et affiner ta technique.",
    image: "/images/goodlife-regymen/program-build.jpeg",
  },
  {
    title: "BLAST",
    body: "Un entraînement HIIT full body intense de 30 minutes pour brûler un maximum de calories rapidement — entre, donne tout, et continue ta journée.",
    image: "/images/goodlife-regymen/program-blast.jpeg",
  },
];

const careerPhotos = [
  "/images/goodlife-regymen/careers-1.jpeg",
  "/images/goodlife-regymen/careers-2.jpeg",
  "/images/goodlife-regymen/careers-3.jpeg",
];

export default function RegymenPage() {
  return (
    <>
      <Header />
      <main className={`${archivo.variable} ${inter.variable} font-[family-name:var(--font-inter)]`}>

        {/* ── Hero — white split panel ──────────────────────────────── */}
        <section className="bg-white grid grid-cols-1 lg:grid-cols-2">
          <div className="px-6 py-16 md:px-16 lg:px-20 lg:py-24 flex flex-col justify-center">
            <p className="text-[#ED002E] font-bold text-sm uppercase tracking-widest mb-6">
              Entraînement collectif
            </p>
            <p
              className="font-[family-name:var(--font-archivo)] text-[#1B1C1F] text-6xl lg:text-7xl font-extrabold uppercase leading-none mb-8 -skew-x-3 w-fit"
            >
              Regymen
            </p>
            <p className="text-[#1B1C1F]/80 text-base leading-relaxed max-w-md mb-8">
              Obtiens des résultats concrets et dépasse tes plateaux avec REGYMEN — une série
              de programmes collectifs basés sur la science, combinant HIIT, entraînement de
              force dynamique et équipements de pointe, exclusif à New York Gym.
            </p>
            <a
              href="/gym-memberships"
              className="inline-flex items-center justify-center bg-[#ED002E] text-white font-bold text-sm rounded-full px-8 py-3 w-fit hover:bg-[#c40025] transition-colors"
            >
              Devenir membre
            </a>
          </div>

          <div className="relative min-h-[320px] lg:min-h-[560px]">
            <Image
              src="/images/goodlife-regymen/hero.jpeg"
              alt="Un membre s'entraînant sur un vélo assault sous un éclairage néon"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* ── Donne-nous 60 minutes ───────────────────────────────── */}
        <section className="bg-white py-16 px-6 lg:py-24">
          <div className="mx-auto max-w-[74.5rem] grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14">
            <h2 className="font-[family-name:var(--font-archivo)] text-3xl lg:text-4xl font-extrabold uppercase text-[#1B1C1F] lg:text-right leading-tight">
              Donne-nous 60 minutes et on te donne de vrais résultats
            </h2>
            <p className="text-[#1B1C1F]/80 text-base leading-relaxed">
              Notre combinaison de HIIT et d&apos;entraînement de force dynamique déclenche
              l&apos;effet afterburn, pour que ton corps continue à brûler des calories longtemps
              après la fin de la séance. Le conditionnement haute intensité suivi de courtes
              périodes de repos aide à brûler les graisses, développer le muscle et booster
              l&apos;énergie — prépare-toi à te remettre en forme.
            </p>
          </div>

          <div className="mx-auto max-w-[60rem] relative aspect-video rounded overflow-hidden">
            <Image
              src="/images/goodlife-regymen/program-build.jpeg"
              alt="Voir REGYMEN en action"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="size-16 rounded-full bg-[#ED002E] flex items-center justify-center">
                <svg viewBox="0 0 16 16" className="w-6 h-6 text-white">
                  <path d="M4 2l10 6-10 6V2z" fill="currentColor" />
                </svg>
              </div>
            </div>
            <p className="absolute bottom-4 left-6 text-white font-bold drop-shadow">
              Voir REGYMEN en action
            </p>
          </div>
        </section>

        {/* ── Programmes REGYMEN ──────────────────────────────────── */}
        <section className="bg-white pt-16 px-6 lg:pt-24">
          <div className="mx-auto max-w-[74.5rem]">
            <div className="flex flex-col items-center text-center mb-14">
              <svg viewBox="0 0 100 100" className="w-20 h-20 mb-4">
                <path
                  d="M50 2 96 22v36c0 24-20 36-46 40C24 94 4 82 4 58V22Z"
                  fill="#ED002E"
                />
                <text x="50" y="66" textAnchor="middle" fontSize="46" fontWeight="800" fill="white" fontFamily="var(--font-archivo)">
                  R
                </text>
              </svg>
              <h2 className="font-[family-name:var(--font-archivo)] text-3xl lg:text-4xl font-extrabold text-[#1B1C1F]">
                Programmes REGYMEN
              </h2>
            </div>
          </div>

          <div className="bg-[#DCE0E6] pt-20 -mt-20 pb-16">
            <div className="mx-auto max-w-[74.5rem] grid grid-cols-1 sm:grid-cols-3 gap-6 px-6">
              {programs.map((p) => (
                <div key={p.title} className="bg-white rounded shadow-md overflow-hidden">
                  <div className="relative aspect-[4/3]">
                    <Image src={p.image} alt={`Séance ${p.title}`} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-[family-name:var(--font-archivo)] text-xl font-extrabold text-[#1B1C1F] mb-2">
                      {p.title}
                    </h3>
                    <p className="text-[#1B1C1F]/75 text-sm leading-relaxed">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Tous âges, niveaux et profils bienvenus ! ───────────── */}
        <section className="bg-[#DCE0E6] py-16 px-6 lg:py-24">
          <div className="mx-auto max-w-[74.5rem] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative aspect-[4/3] rounded overflow-hidden max-w-md mx-auto lg:mx-0">
              <Image
                src="/images/goodlife-regymen/welcome.jpeg"
                alt="Un groupe de membres réunis"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-archivo)] text-3xl lg:text-4xl font-extrabold text-[#1B1C1F] mb-5">
                Tous âges, niveaux et profils bienvenus !
              </h2>
              <p className="text-[#1B1C1F]/80 text-base leading-relaxed">
                Que tu sois un athlète confirmé ou que tu démarres tout juste, il y a un programme
                REGYMEN fait pour toi. Guidés par des instructeurs inspirants et compétents, chaque
                séance est conçue pour révéler le meilleur de toi — peu importe qui tu es.
              </p>
            </div>
          </div>
        </section>

        {/* ── Devenir instructeur REGYMEN ─────────────────────────── */}
        <section className="bg-white pb-16 px-6 lg:pb-24">
          <div className="mx-auto max-w-[74.5rem] text-center">
            <div className="w-16 h-1 bg-[#ED002E] mx-auto mb-10" />
            <p className="text-[#1B1C1F] text-lg mb-10">
              Tu es un coach de haut niveau, passionné par le fait de guider et d&apos;inspirer
              les autres ? Si oui, on aimerait beaucoup discuter avec toi !
            </p>
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-10">
              {careerPhotos.map((src) => (
                <div key={src} className="relative aspect-[3/4] rounded overflow-hidden">
                  <Image src={src} alt="Un instructeur REGYMEN NY Gym" fill className="object-cover" />
                </div>
              ))}
            </div>
            <a
              href="/blog"
              className="inline-flex items-center justify-center gap-2 bg-[#ED002E] text-white font-bold text-sm rounded px-8 py-3 hover:bg-[#c40025] transition-colors"
            >
              En savoir plus
              <svg viewBox="0 0 8 14" className="w-2 h-3">
                <path d="M1 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              </svg>
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
