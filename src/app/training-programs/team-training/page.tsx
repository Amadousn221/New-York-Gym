import Image from "next/image";
import { Archivo, Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const archivo = Archivo({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-archivo" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-inter" });

const cards = [
  {
    title: "Dépasse-toi avec le TRX Team Training",
    body: "L'entraînement TRX® en équipe est exclusif à New York Gym et t'aide à développer force, tonus musculaire, souplesse et équilibre, dans une ambiance de petit groupe.",
    image: "/images/goodlife-team/card-trx.jpeg",
  },
  {
    title: "Les Boot Camps t'apportent les résultats que tu recherches",
    body: "Engage-toi dans un boot camp exclusif New York Gym, un entraînement fun et intense, mené par nos coachs d'entraînement en équipe inspirants et motivants.",
    image: "/images/goodlife-team/card-bootcamp.jpeg",
  },
  {
    title: "Personnalise ton expérience avec le Fitness Starter",
    body: "Ta séance individuelle de 60 minutes avec un coach certifié comprend une évaluation de ton mode de vie et de tes objectifs, ainsi que des recommandations sur les programmes et entraînements adaptés à toi.",
    image: "/images/goodlife-team/card-starter.jpeg",
  },
];

const groupBenefits = [
  {
    title: "Un taux de réussite plus élevé",
    body: "Les personnes qui s'entraînent en groupe ont un taux d'assiduité de 94 % ! Cela veut dire qu'elles restent fidèles à leur routine plus longtemps et construisent des habitudes plus saines. Toi aussi, tu peux y arriver.",
  },
  {
    title: "S'entraîner en groupe, c'est fun",
    body: "On l'a constaté : un peu de fun change tout. Les cours collectifs font brûler jusqu'à 20 % de calories en plus, et les participants apprécient la petite compétition qui les pousse à se dépasser.",
  },
  {
    title: "La bonne façon de démarrer",
    body: "Les boot camps et cours collectifs sont pensés pour toi. Tu commences là où tu en es, tu avances à ton rythme, et tu te fixes de nouveaux objectifs au fil du temps.",
  },
  {
    title: "De la variété dans ton planning",
    body: "Une large gamme d'options pour bouger ! Essaie nos cours tout au long de la semaine, rejoins un boot camp ou demande une séance adaptée à ton emploi du temps. Commence dès aujourd'hui.",
  },
];

const careerPhotos = [
  "/images/goodlife-team/careers-1.jpeg",
  "/images/goodlife-team/careers-2.jpeg",
  "/images/goodlife-team/careers-3.jpeg",
  "/images/goodlife-team/careers-4.jpeg",
];

export default function TeamTrainingPage() {
  return (
    <>
      <Header />
      <main className={`${archivo.variable} ${inter.variable} font-[family-name:var(--font-inter)]`}>

        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section className="bg-[#F5F6F7] grid grid-cols-1 lg:grid-cols-2">
          <div className="px-6 py-16 md:px-16 lg:px-20 lg:py-24 flex flex-col justify-center">
            <p className="text-[#ED002E] font-bold text-sm uppercase tracking-widest mb-5">
              Entraînement
            </p>
            <h1 className="font-[family-name:var(--font-archivo)] text-[#3a3b40] text-5xl lg:text-6xl font-extrabold uppercase leading-none mb-6">
              Entraînement en équipe
            </h1>
            <p className="text-[#1B1C1F]/80 text-base leading-relaxed max-w-md mb-8">
              Pourquoi le faire seul ? L&apos;entraînement en groupe chez New York Gym est une
              excellente façon de démarrer ta remise en forme ou de dépasser un plateau.
              C&apos;est fun, social, et pensé pour s&apos;adapter aux besoins de chacun.
            </p>
            <a
              href="/our-clubs"
              className="inline-flex items-center justify-center bg-[#ED002E] text-white font-bold text-sm rounded px-8 py-3 w-fit hover:bg-[#c40025] transition-colors"
            >
              Trouver un cours
            </a>
          </div>

          <div className="relative min-h-[320px] lg:min-h-[560px]">
            <Image
              src="/images/goodlife-team/hero.png"
              alt="Deux membres de NY Gym s'entraînant ensemble"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* ── Designed for you. Located near you. ──────────────────── */}
        <section className="bg-white py-16 px-6 lg:py-24">
          <div className="mx-auto max-w-[74.5rem]">
            <div className="text-center mb-6">
              <h2 className="font-[family-name:var(--font-archivo)] text-3xl lg:text-4xl font-extrabold text-[#1B1C1F]">
                Entraînement en équipe
              </h2>
              <div className="w-16 h-1 bg-[#ED002E] mx-auto mt-4 mb-3" />
              <span className="inline-block text-[#ED002E] text-xs font-bold uppercase tracking-widest">
                Camps de 6 semaines dès 120 000 FCFA*
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-14">
              <div>
                <h3 className="font-[family-name:var(--font-archivo)] text-2xl lg:text-3xl font-extrabold text-[#1B1C1F] mb-5">
                  Pensé pour toi. Situé près de toi.
                </h3>
                <p className="text-[#1B1C1F]/80 text-base leading-relaxed mb-4">
                  Nos séances d&apos;entraînement en équipe exclusives ont lieu dans un club proche
                  de chez toi. C&apos;est une façon fun et motivante de te remettre en forme et de
                  développer ta force grâce à un programme fonctionnel.
                </p>
                <p className="text-[#1B1C1F]/80 text-base leading-relaxed mb-8">
                  Tu peux rejoindre des groupes existants, en créer un nouveau, ou même demander
                  une séance qui correspond à ton emploi du temps.
                </p>
                <a
                  href="/our-clubs"
                  className="inline-flex items-center justify-center bg-[#ED002E] text-white font-bold text-sm rounded px-8 py-3 w-fit hover:bg-[#c40025] transition-colors"
                >
                  Réserver maintenant
                </a>
              </div>
              <div className="relative aspect-[4/3] rounded overflow-hidden max-w-md mx-auto lg:mx-0">
                <Image
                  src="/images/goodlife-team/designed-near-you.jpeg"
                  alt="Membres s'entraînant ensemble sur la zone de turf"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Apporte de la variété à ta routine ──────────────────── */}
        <section className="bg-white pt-16 px-6 lg:pt-24">
          <div className="mx-auto max-w-[74.5rem] text-center mb-14">
            <h2 className="font-[family-name:var(--font-archivo)] text-3xl lg:text-4xl font-extrabold text-[#1B1C1F]">
              Apporte de la variété à ta routine
            </h2>
          </div>

          <div className="bg-[#DCE0E6] pt-20 -mt-20 pb-16">
            <div className="mx-auto max-w-[74.5rem] grid grid-cols-1 sm:grid-cols-3 gap-6 px-6">
              {cards.map((c) => (
                <div key={c.title} className="bg-white rounded shadow-md overflow-hidden">
                  <div className="relative aspect-[4/3]">
                    <Image src={c.image} alt={c.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-[family-name:var(--font-archivo)] text-lg font-extrabold text-[#1B1C1F] mb-2">
                      {c.title}
                    </h3>
                    <p className="text-[#1B1C1F]/75 text-sm leading-relaxed">{c.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Entraînement en équipe. Connexion communautaire. ─────── */}
        <section className="bg-[#DCE0E6] py-16 px-6 lg:py-24">
          <div className="mx-auto max-w-[74.5rem] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative aspect-[4/3] rounded overflow-hidden max-w-md mx-auto lg:mx-0">
              <Image
                src="/images/goodlife-team/community.jpeg"
                alt="Un groupe de membres se soutenant pendant l'entraînement"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-archivo)] text-3xl lg:text-4xl font-extrabold text-[#1B1C1F] mb-5">
                Entraînement en équipe. Connexion communautaire.
              </h2>
              <p className="text-[#1B1C1F]/80 text-base leading-relaxed mb-8">
                Atteins tes objectifs fitness ensemble grâce à l&apos;entraînement en équipe. Nos
                coachs sont concentrés sur ton accompagnement pour surmonter tes défis spécifiques
                et améliorer ta santé et ton bien-être sur le long terme. C&apos;est plus facile de
                rester motivé quand tu sais que tu n&apos;es pas seul.
              </p>
              <a
                href="/our-clubs"
                className="inline-flex items-center justify-center bg-[#ED002E] text-white font-bold text-sm rounded px-8 py-3 w-fit hover:bg-[#c40025] transition-colors"
              >
                Réserver maintenant
              </a>
            </div>
          </div>
        </section>

        {/* ── CTA rappel offre ──────────────────────────────────────── */}
        <section className="bg-white py-16 px-6 lg:py-24 text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="font-[family-name:var(--font-archivo)] text-3xl lg:text-4xl font-extrabold text-[#1B1C1F] mb-2">
              Entraînement en équipe
            </h2>
            <p className="text-[#ED002E] font-bold text-sm uppercase tracking-widest mb-8">
              Camps de 6 semaines dès 120 000 FCFA*
            </p>
            <p className="text-[#1B1C1F]/80 text-lg mb-8">
              Trouve un boot camp près de chez toi, ou demande-en un !
            </p>
            <a
              href="/our-clubs"
              className="inline-flex items-center justify-center bg-[#ED002E] text-white font-bold text-sm rounded px-8 py-3 hover:bg-[#c40025] transition-colors"
            >
              Trouver un club
            </a>
          </div>
        </section>

        {/* ── Pourquoi s'entraîner en groupe ? ─────────────────────── */}
        <section className="bg-white pb-16 px-6 lg:pb-24">
          <div className="mx-auto max-w-[60rem]">
            <div className="text-center mb-14">
              <h2 className="font-[family-name:var(--font-archivo)] text-3xl lg:text-4xl font-extrabold text-[#1B1C1F]">
                Pourquoi s&apos;entraîner en groupe ?
              </h2>
              <div className="w-16 h-1 bg-[#ED002E] mx-auto mt-4" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
              {groupBenefits.map((b) => (
                <div key={b.title}>
                  <h3 className="font-bold text-[#1B1C1F] text-lg mb-2">{b.title}</h3>
                  <p className="text-[#1B1C1F]/75 text-sm leading-relaxed">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Devenir coach fitness en groupe ──────────────────────── */}
        <section className="bg-[#F5F6F7] py-16 px-6 lg:py-24 text-center">
          <div className="mx-auto max-w-[74.5rem]">
            <h2 className="font-[family-name:var(--font-archivo)] text-3xl lg:text-4xl font-extrabold text-[#1B1C1F] mb-3">
              Devenir coach fitness en groupe
            </h2>
            <div className="w-16 h-1 bg-[#ED002E] mx-auto mb-8" />
            <p className="text-[#1B1C1F]/80 text-lg mb-10">
              Tu penses pouvoir pousser un groupe à donner le meilleur de lui-même ?
              Si oui, on aimerait beaucoup discuter avec toi !
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10">
              {careerPhotos.map((src) => (
                <div key={src} className="relative aspect-[3/4] rounded overflow-hidden">
                  <Image src={src} alt="Un coach fitness en groupe NY Gym" fill className="object-cover" />
                </div>
              ))}
            </div>
            <a
              href="/blog"
              className="inline-flex items-center justify-center bg-[#ED002E] text-white font-bold text-sm rounded px-8 py-3 hover:bg-[#c40025] transition-colors"
            >
              En savoir plus
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
