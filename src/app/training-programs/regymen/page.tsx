import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const benefits = [
  {
    title: "Des coachs professionnels qui révèlent le meilleur de toi",
    body: "Tous les coachs REGYMEN de New York Gym sont certifiés via l'Institut de formation New York Gym ou un organisme reconnu. Ton coach a suivi une formation exigeante pour s'assurer qu'il possède les compétences nécessaires pour bien t'encadrer. En plus, les coachs REGYMEN de New York Gym continuent de se former et d'obtenir des certifications complémentaires, pour t'offrir l'accès aux meilleurs formateurs du pays.",
  },
  {
    title: "Un programme construit pour le groupe, pensé pour toi",
    body: "Les séances REGYMEN de New York Gym s'appuient sur des principes scientifiques d'entraînement et des méthodes d'entraînement fractionné de pointe pour t'aider à atteindre des résultats durables. Objectifs, nutrition et style de vie sont pris en compte pour concevoir chaque séance. Ce n'est pas qu'un entraînement — c'est aussi l'occasion de développer des compétences fitness et santé pour la vie.",
  },
  {
    title: "Des zones d'entraînement dédiées",
    body: "Se sentir à l'aise et confiant pendant l'entraînement, c'est essentiel pour en tirer le meilleur. De nombreux clubs disposent d'un espace dédié aux cours REGYMEN, équipé pour que le groupe puisse se concentrer sur l'effort collectif, sans distraction.",
  },
];

const testimonials = [
  {
    quote:
      "« Je suis parti d'un homme timide et en surpoids de 42 ans à quelqu'un de plus mince, plus fort, et rempli de confiance. C'est difficile de dire à quel point ça a changé ma vie. »",
    author: "Jean S., Dakar",
  },
  {
    quote:
      "« Un jour j'ai vu des photos de moi et je me suis dit \"ce n'est pas moi\". Je ne me reconnaissais plus. Aujourd'hui je pèse 86 kg de moins, je me sens plus jeune, plein d'énergie, et je garde ma forme physique tous les jours. »",
    author: "Robert S., Thiès",
  },
  {
    quote:
      "« J'ai enfin trouvé ce qui me manquait dans ma vie. J'étais impressionné par la rapidité de mes progrès en forme physique — j'ai perdu 60 kg et suis devenu champion régional de powerlifting. »",
    author: "Khadija U., Saint-Louis",
  },
];

const steps = [
  {
    number: "01",
    title: "Réserve ton premier cours",
    body: "Après une prise de contact, choisis le créneau REGYMEN qui te convient. Nos équipes sont là pour répondre à toutes tes questions avant ta première séance.",
  },
  {
    number: "02",
    title: "Découvre le format",
    body: "Ton coach REGYMEN t'explique la structure de la séance — intervalles, objectifs, rythme — pour que tu saches exactement à quoi t'attendre et comment progresser.",
  },
  {
    number: "03",
    title: "Reste régulier",
    body: "En participant chaque semaine, tu verras rapidement des progrès. En t'appuyant sur des principes d'entraînement solides, tu avanceras pas à pas vers tes objectifs de santé et de forme.",
  },
];

export default function RegymenPage() {
  return (
    <>
      <Header />
      <main>
        {/* ── Hero — split panel ───────────────────────────────── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">
          <div className="bg-hero-gradient-1 flex flex-col justify-center px-6 py-16 md:px-16 lg:px-20 lg:py-24">
            <p className="text-secondary-main font-bold text-sm uppercase tracking-widest mb-4">
              ENTRAÎNEMENT COLLECTIF
            </p>
            <h1 className="font-condensed text-5xl lg:text-7xl text-white uppercase leading-none mb-6">
              New York Gym<br />
              <span className="text-secondary-main">REGYMEN</span>
            </h1>
            <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-4">
              CHEZ NEW YORK GYM — LA RÉFÉRENCE DE L&apos;ENTRAÎNEMENT FRACTIONNÉ EN GROUPE.
            </p>
            <p className="text-white/90 text-lg leading-relaxed max-w-md mb-8">
              Obtiens les résultats d&apos;un entraînement pensé par des coachs certifiés en HIIT.
              Avec REGYMEN, tu vis une expérience de groupe qui allie intensité, structure et
              motivation collective.
            </p>
            <Link
              href="/gym-memberships"
              className="inline-flex items-center justify-center bg-secondary-main text-common-black font-bold text-base rounded-full px-8 py-4 w-fit hover:bg-white transition-colors"
            >
              Réserve un cours d&apos;essai gratuit
            </Link>
          </div>

          <div className="relative min-h-[320px] lg:min-h-0">
            <Image
              src="/images/goodlife-regymen/hero.jpeg"
              alt="Membre s'entraînant en cours REGYMEN à NY Gym"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* ── Bandeau bénéfices ────────────────────────────────── */}
        <section className="bg-primary-dark py-14 px-6">
          <div className="mx-auto max-w-[74.5rem] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="font-condensed text-3xl lg:text-5xl text-white uppercase leading-tight">
                ENTRAÎNE-TOI EFFICACEMENT<br />
                <span className="text-secondary-main">VOIS DES RÉSULTATS DURABLES</span><br />
                DÉVELOPPE DES COMPÉTENCES POUR LA VIE
              </p>
            </div>
            <p className="text-white/80 text-base leading-relaxed">
              Nos coachs certifiés REGYMEN sont là pour t&apos;aider à atteindre tes objectifs
              fitness. Ils t&apos;accompagnent avec un programme sur-mesure qui t&apos;aide à
              construire la bonne technique, la confiance et la motivation pour poursuivre ton
              parcours.
            </p>
          </div>
        </section>

        {/* ── Plus fort ensemble ───────────────────────────────── */}
        <section className="bg-white py-16 px-6 lg:py-24">
          <div className="mx-auto max-w-[74.5rem]">
            <h2 className="font-condensed text-4xl lg:text-6xl text-common-black uppercase text-center mb-14">
              Plus fort ensemble
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {benefits.map((b) => (
                <div key={b.title} className="flex flex-col gap-4 border-t-4 border-primary-main pt-6">
                  <h3 className="font-bold text-lg text-common-black">{b.title}</h3>
                  <p className="text-gray-dark text-sm leading-relaxed">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Témoignages image ────────────────────────────────── */}
        <section className="bg-surface-gray py-16 px-6 lg:py-20">
          <div className="mx-auto max-w-[74.5rem]">
            <h2 className="font-condensed text-4xl lg:text-5xl text-common-black uppercase text-center mb-14">
              Portraits de membres
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Marie Diop", src: "/images/goodlife-regymen/careers-1.jpeg" },
                { name: "Bruno Costa", src: "/images/goodlife-regymen/careers-2.jpeg" },
                { name: "Fatou Ndiaye", src: "/images/goodlife-regymen/careers-3.jpeg" },
                { name: "Ngor Faye", src: "/images/goodlife-regymen/welcome.jpeg" },
              ].map((m) => (
                <div key={m.name} className="flex flex-col gap-2">
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-primary-main/10">
                    <Image src={m.src} alt={`Parcours REGYMEN de ${m.name}`} fill className="object-cover" />
                  </div>
                  <p className="text-sm font-semibold text-center text-common-black">{m.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Témoignages écrits ───────────────────────────────── */}
        <section className="bg-white py-16 px-6 lg:py-20">
          <div className="mx-auto max-w-[74.5rem]">
            <h2 className="font-condensed text-4xl lg:text-5xl text-common-black uppercase text-center mb-14">
              Témoignages
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div
                  key={t.author}
                  className="bg-surface-gray rounded-2xl p-8 flex flex-col gap-4"
                >
                  <p className="text-gray-dark text-base leading-relaxed italic flex-1">{t.quote}</p>
                  <p className="font-semibold text-primary-main text-sm">— {t.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Ton parcours REGYMEN ─────────────────────────────── */}
        <section className="bg-surface-gray py-16 px-6 lg:py-24">
          <div className="mx-auto max-w-[74.5rem]">
            <h2 className="font-condensed text-4xl lg:text-5xl text-common-black uppercase text-center mb-4">
              Ton parcours REGYMEN
            </h2>
            <p className="text-center text-gray-dark text-base max-w-xl mx-auto mb-14">
              New York Gym compte plus de coachs certifiés que n&apos;importe quel autre réseau.
              Prêt à trouver ta séance ? Voici à quoi t&apos;attendre.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {steps.map((s) => (
                <div key={s.number} className="flex flex-col gap-3">
                  <span className="font-condensed text-6xl text-primary-main/20 leading-none">
                    {s.number}
                  </span>
                  <h3 className="font-bold text-lg text-common-black">{s.title}</h3>
                  <p className="text-gray-dark text-sm leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Cours d'essai gratuit ────────────────────────────── */}
        <section className="bg-primary-main py-16 px-6 lg:py-24">
          <div className="mx-auto max-w-[48rem]">
            <div className="text-center mb-10">
              <p className="font-condensed text-3xl text-white uppercase">
                JE SUIS PRÊT POUR UN
              </p>
              <p className="font-condensed text-5xl lg:text-6xl text-secondary-main uppercase">
                COURS D&apos;ESSAI GRATUIT
              </p>
              <p className="text-white/70 text-sm mt-2">
                Cours d&apos;essai valable une seule fois par personne.
              </p>
              <p className="text-white/80 text-base mt-4 max-w-md mx-auto">
                Profite d&apos;un cours REGYMEN gratuit encadré par un coach certifié. Inclus :
                une évaluation de ta condition physique et de tes objectifs, une séance complète
                de 20 minutes, et des conseils personnalisés pour la suite.
              </p>
            </div>

            <form className="flex flex-col gap-4">
              <select className="rounded-full px-6 py-4 text-base text-common-black outline-none">
                <option value="">Club le plus proche</option>
                <option>NY Gym — Dakar Plateau</option>
                <option>NY Gym — Almadies</option>
                <option>NY Gym — Sacré-Cœur</option>
              </select>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Prénom"
                  className="rounded-full px-6 py-4 text-base text-common-black outline-none"
                />
                <input
                  type="text"
                  placeholder="Nom"
                  className="rounded-full px-6 py-4 text-base text-common-black outline-none"
                />
              </div>
              <input
                type="email"
                placeholder="Adresse e-mail"
                className="rounded-full px-6 py-4 text-base text-common-black outline-none"
              />
              <input
                type="tel"
                placeholder="Téléphone"
                className="rounded-full px-6 py-4 text-base text-common-black outline-none"
              />
              <button
                type="submit"
                className="bg-secondary-main text-common-black font-bold text-lg rounded-full px-10 py-4 hover:bg-white transition-colors mt-2"
              >
                COMMENCER
              </button>
            </form>
          </div>
        </section>

        {/* ── Bootcamp cross-sell ──────────────────────────────── */}
        <section className="bg-common-black py-14 px-6">
          <div className="mx-auto max-w-[74.5rem] flex flex-col items-center gap-6 text-center">
            <p className="font-condensed text-3xl lg:text-5xl text-white uppercase max-w-2xl">
              Essaie un Bootcamp New York Gym.{" "}
              <span className="text-secondary-main">
                Un entraînement en petit groupe, fun, solidaire et sans jugement.
              </span>
            </p>
            <Link
              href="/training-programs/team-training"
              className="inline-flex items-center justify-center bg-primary-main text-white font-bold text-base rounded-full px-10 py-4 hover:bg-primary-dark transition-colors"
            >
              EN SAVOIR PLUS
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
