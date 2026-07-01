import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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

export default function TeamTrainingPage() {
  return (
    <>
      <Header />
      <main>
        {/* ── Hero — split panel ───────────────────────────────── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
          <div className="bg-surface-gray flex flex-col justify-center px-6 py-16 md:px-16 lg:px-20 lg:py-24">
            <p className="text-primary-main font-bold text-sm uppercase tracking-widest mb-4">
              ENTRAÎNEMENT
            </p>
            <h1 className="font-condensed text-5xl lg:text-7xl text-common-black uppercase leading-none mb-6">
              ENTRAÎNEMENT EN ÉQUIPE
            </h1>
            <p className="text-gray-dark text-lg leading-relaxed max-w-md mb-8">
              Pourquoi le faire seul ? L&apos;entraînement en groupe chez New York Gym est une
              excellente façon de démarrer ta remise en forme ou de dépasser un plateau.
              C&apos;est fun, social, et pensé pour s&apos;adapter aux besoins de chacun.
            </p>
            <Link
              href="/our-clubs"
              className="inline-flex items-center justify-center bg-primary-main text-white font-bold text-base rounded-full px-8 py-4 w-fit hover:bg-primary-dark transition-colors"
            >
              Trouver un cours
            </Link>
          </div>

          <div className="relative min-h-[320px] lg:min-h-0">
            <Image
              src="/images/goodlife-team/hero.png"
              alt="Deux membres de NY Gym s'entraînant ensemble"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* ── Camps 6 semaines ─────────────────────────────────── */}
        <section className="bg-primary-dark py-14 px-6">
          <div className="mx-auto max-w-[74.5rem] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="font-condensed text-3xl lg:text-5xl text-white uppercase leading-tight">
                CAMPS D&apos;ENTRAÎNEMENT EN ÉQUIPE DE 6 SEMAINES<br />
                <span className="text-secondary-main">DÈS 120 000 FCFA*</span>
              </p>
            </div>
            <p className="text-white/80 text-base leading-relaxed">
              L&apos;entraînement en équipe t&apos;offre l&apos;opportunité unique de te dépasser
              à travers des séances fun, tout en créant des liens avec d&apos;autres passionnés de
              santé et de fitness. Notre ambiance en petit groupe est solidaire et sans jugement.
            </p>
          </div>
        </section>

        {/* ── Pensé pour toi ───────────────────────────────────── */}
        <section className="bg-white py-16 px-6 lg:py-24">
          <div className="mx-auto max-w-[74.5rem]">
            <div className="text-center mb-14">
              <h2 className="font-condensed text-4xl lg:text-5xl text-common-black uppercase">
                Entraînement en équipe
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="font-bold text-2xl lg:text-3xl text-common-black mb-5">
                  Pensé pour toi. Situé près de toi.
                </h3>
                <p className="text-gray-dark text-base leading-relaxed mb-4">
                  Nos séances d&apos;entraînement en équipe exclusives ont lieu dans un club proche
                  de chez toi. C&apos;est une façon fun et motivante de te remettre en forme et de
                  développer ta force grâce à un programme fonctionnel.
                </p>
                <p className="text-gray-dark text-base leading-relaxed mb-8">
                  Tu peux rejoindre des groupes existants, en créer un nouveau, ou même demander
                  une séance qui correspond à ton emploi du temps.
                </p>
                <Link
                  href="/our-clubs"
                  className="inline-flex items-center justify-center bg-primary-main text-white font-bold text-base rounded-full px-8 py-4 w-fit hover:bg-primary-dark transition-colors"
                >
                  Réserver maintenant
                </Link>
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
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

        {/* ── Apporte de la variété ────────────────────────────── */}
        <section className="bg-surface-gray py-16 px-6 lg:py-24">
          <div className="mx-auto max-w-[74.5rem]">
            <h2 className="font-condensed text-4xl lg:text-5xl text-common-black uppercase text-center mb-14">
              Apporte de la variété à ta routine
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {cards.map((c) => (
                <div key={c.title} className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col">
                  <div className="relative aspect-[4/3]">
                    <Image src={c.image} alt={c.title} fill className="object-cover" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-bold text-lg text-common-black mb-3">{c.title}</h3>
                    <p className="text-gray-dark text-sm leading-relaxed flex-1">{c.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Connexion communautaire ──────────────────────────── */}
        <section className="bg-white py-16 px-6 lg:py-24">
          <div className="mx-auto max-w-[74.5rem] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/goodlife-team/community.jpeg"
                alt="Un groupe de membres se soutenant pendant l'entraînement"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-condensed text-4xl lg:text-5xl text-common-black uppercase mb-5">
                Entraînement en équipe.<br />
                <span className="text-primary-main">Connexion communautaire.</span>
              </h2>
              <p className="text-gray-dark text-base leading-relaxed mb-8">
                Atteins tes objectifs fitness ensemble grâce à l&apos;entraînement en équipe. Nos
                coachs sont concentrés sur ton accompagnement pour surmonter tes défis spécifiques
                et améliorer ta santé et ton bien-être sur le long terme. C&apos;est plus facile de
                rester motivé quand tu sais que tu n&apos;es pas seul.
              </p>
              <Link
                href="/our-clubs"
                className="inline-flex items-center justify-center bg-primary-main text-white font-bold text-base rounded-full px-8 py-4 w-fit hover:bg-primary-dark transition-colors"
              >
                Réserver maintenant
              </Link>
            </div>
          </div>
        </section>

        {/* ── Rappel offre ─────────────────────────────────────── */}
        <section className="bg-common-black py-14 px-6">
          <div className="mx-auto max-w-[74.5rem] text-center flex flex-col items-center gap-6">
            <div>
              <p className="font-condensed text-4xl text-white uppercase">
                Entraînement en équipe
              </p>
              <p className="font-condensed text-3xl text-secondary-main uppercase">
                Camps de 6 semaines dès 120 000 FCFA*
              </p>
            </div>
            <p className="text-white/70 text-base">
              Trouve un boot camp près de chez toi ou demande-en un !
            </p>
            <Link
              href="/our-clubs"
              className="inline-flex items-center justify-center bg-primary-main text-white font-bold text-base rounded-full px-10 py-4 hover:bg-primary-dark transition-colors"
            >
              Trouver un club
            </Link>
          </div>
        </section>

        {/* ── Pourquoi s'entraîner en groupe ? ─────────────────── */}
        <section className="bg-white py-16 px-6 lg:py-24">
          <div className="mx-auto max-w-[60rem]">
            <h2 className="font-condensed text-4xl lg:text-5xl text-common-black uppercase text-center mb-3">
              Pourquoi s&apos;entraîner en groupe ?
            </h2>
            <div className="w-16 h-1 bg-primary-main mx-auto mb-14" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
              {groupBenefits.map((b) => (
                <div key={b.title}>
                  <h3 className="font-bold text-common-black text-lg mb-3">{b.title}</h3>
                  <p className="text-gray-dark text-sm leading-relaxed">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Devenir coach ────────────────────────────────────── */}
        <section className="bg-surface-gray py-16 px-6 lg:py-24 text-center">
          <div className="mx-auto max-w-[74.5rem]">
            <h2 className="font-condensed text-4xl lg:text-5xl text-common-black uppercase mb-3">
              Devenir coach fitness en groupe
            </h2>
            <div className="w-16 h-1 bg-primary-main mx-auto mb-8" />
            <p className="text-gray-dark text-lg mb-10 max-w-xl mx-auto">
              Tu penses pouvoir pousser un groupe à donner le meilleur de lui-même ?
              Si oui, on aimerait beaucoup discuter avec toi.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10">
              {[
                "/images/goodlife-team/careers-1.jpeg",
                "/images/goodlife-team/careers-2.jpeg",
                "/images/goodlife-team/careers-3.jpeg",
                "/images/goodlife-team/careers-4.jpeg",
              ].map((src) => (
                <div key={src} className="relative aspect-[3/4] rounded-xl overflow-hidden">
                  <Image src={src} alt="Coach fitness en groupe NY Gym" fill className="object-cover" />
                </div>
              ))}
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center bg-primary-main text-white font-bold text-base rounded-full px-10 py-4 hover:bg-primary-dark transition-colors"
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
