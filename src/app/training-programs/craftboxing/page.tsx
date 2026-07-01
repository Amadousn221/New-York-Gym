import Image from "next/image";
import { Archivo, Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const archivo = Archivo({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-archivo" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-inter" });

const principlePhotos = [
  "/images/goodlife-craftboxing/principle-1.jpeg",
  "/images/goodlife-craftboxing/principle-2.jpeg",
  "/images/goodlife-craftboxing/principle-3.jpeg",
  "/images/goodlife-craftboxing/principle-4.jpeg",
];

const principles = [
  {
    title: "Authenticity & Lineage",
    body: "Designed by professional boxer George Foreman III, son of boxing legend George Foreman, Craftboxing offers an experience built from real experience.",
    icon: "lines",
  },
  {
    title: "Sense of Community",
    body: "No matter where you come from, Craftboxing provides a home for all. Leave your troubles or triumphs at the door — at Craft, we are all equal.",
    icon: "burst",
  },
  {
    title: "Mind & Body",
    body: "Craftboxing builds your physical strength while honing your mental strength, so you can tackle life head-on.",
    icon: "diamond",
  },
];

const clubs = [
  { name: "NY Gym — Midtown Manhattan", address: "250 West 34th Street", phone: "(212) 555-0142", hours: "Open 24 hours" },
  { name: "NY Gym — Brooklyn Heights", address: "180 Montague Street", phone: "(718) 555-0198", hours: "Open 24 hours" },
  { name: "NY Gym — Jersey City", address: "90 Hudson Street", phone: "(201) 555-0116", hours: "Open 24 hours" },
];

const careerPhotos = [
  "/images/goodlife-craftboxing/careers-1.jpeg",
  "/images/goodlife-craftboxing/careers-2.jpeg",
  "/images/goodlife-craftboxing/careers-3.jpeg",
  "/images/goodlife-craftboxing/careers-4.jpeg",
];

function PrincipleIcon({ type }: { type: string }) {
  if (type === "lines") {
    return (
      <svg viewBox="0 0 40 32" className="w-9 h-7">
        <rect y="2" width="40" height="3" fill="#1B1C1F" />
        <rect y="14" width="40" height="3" fill="#1B1C1F" />
        <rect y="26" width="40" height="3" fill="#1B1C1F" />
      </svg>
    );
  }
  if (type === "burst") {
    return (
      <svg viewBox="0 0 40 40" className="w-9 h-9">
        {Array.from({ length: 10 }).map((_, i) => {
          const angle = (i * Math.PI * 2) / 10;
          const x1 = 20 + Math.cos(angle) * 6;
          const y1 = 20 + Math.sin(angle) * 6;
          const x2 = 20 + Math.cos(angle) * 18;
          const y2 = 20 + Math.sin(angle) * 18;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#1B1C1F" strokeWidth="2" />;
        })}
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 40 40" className="w-9 h-9">
      <rect x="2" y="2" width="16" height="16" fill="none" stroke="#1B1C1F" strokeWidth="2" transform="rotate(45 10 10)" />
      <rect x="22" y="2" width="16" height="16" fill="none" stroke="#1B1C1F" strokeWidth="2" transform="rotate(45 30 10)" />
      <rect x="2" y="22" width="16" height="16" fill="none" stroke="#1B1C1F" strokeWidth="2" transform="rotate(45 10 30)" />
      <rect x="22" y="22" width="16" height="16" fill="none" stroke="#1B1C1F" strokeWidth="2" transform="rotate(45 30 30)" />
    </svg>
  );
}

export default function CraftboxingPage() {
  return (
    <>
      <Header />
      <main className={`${archivo.variable} ${inter.variable} font-[family-name:var(--font-inter)]`}>

        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden min-h-[560px] flex items-center">
          <Image
            src="/images/goodlife-craftboxing/hero.jpeg"
            alt="Two members training with boxing pads and gloves"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 px-6 py-16 md:px-16 lg:px-20 max-w-[42rem]">
            <h1 className="font-[family-name:var(--font-archivo)] text-white text-4xl sm:text-5xl lg:text-7xl font-extrabold uppercase leading-none mb-6 break-words">
              Craftboxing
            </h1>
            <p className="text-white/90 text-lg leading-relaxed max-w-md mb-8">
              Connect your mind and body through boxing training designed by professional boxer,
              George Foreman III.
            </p>
            <a
              href="/gym-memberships"
              className="inline-flex items-center justify-center bg-[#ED002E] text-white font-bold text-sm rounded px-8 py-3 w-fit hover:bg-[#c40025] transition-colors"
            >
              Start your membership
            </a>
          </div>
        </section>

        {/* ── Authentic boxing intro ────────────────────────────────── */}
        <section className="bg-white py-16 px-6 lg:py-24">
          <div className="mx-auto max-w-[74.5rem] grid grid-cols-1 lg:grid-cols-2 gap-10">
            <h2 className="font-[family-name:var(--font-archivo)] text-3xl lg:text-4xl font-extrabold uppercase text-[#1B1C1F] leading-tight">
              Authentic Boxing, Old-School Principles. That&apos;s the Craft Boxing Way.
            </h2>
            <p className="text-[#1B1C1F]/80 text-base leading-relaxed">
              Focused entirely on the fundamentals, the Craft experience improves your physical
              health while building the focus and discipline that leads to better mental health.
              Join a community built around becoming the best version of you.
            </p>
          </div>
        </section>

        {/* ── Video promo strip ─────────────────────────────────────── */}
        <section className="relative aspect-video max-h-[560px] w-full overflow-hidden bg-black">
          <Image
            src="/images/goodlife-craftboxing/principle-3.jpeg"
            alt="See Craftboxing in action"
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
          <p className="absolute bottom-6 left-6 text-white font-bold text-lg drop-shadow">
            See Craftboxing in Action
          </p>
        </section>

        {/* ── Add to your membership ────────────────────────────────── */}
        <section className="relative overflow-hidden py-16 px-6 lg:py-24">
          <Image
            src="/images/goodlife-craftboxing/membership.jpeg"
            alt="Two members training side by side"
            fill
            className="object-cover grayscale"
          />
          <div className="absolute inset-0 bg-[#1B1C1F]/70" />
          <div className="relative z-10 max-w-xl">
            <h2 className="font-[family-name:var(--font-archivo)] text-white text-3xl lg:text-4xl font-extrabold uppercase leading-tight mb-5">
              Add Craftboxing to Your Membership
            </h2>
            <p className="text-white/85 text-base leading-relaxed mb-8">
              Black Card memberships include access to Craftboxing workouts and more at select
              NY Gym clubs. Upgrade your membership or ask about Craftboxing visit passes at your
              home club.
            </p>
            <a
              href="/gym-memberships"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-bold text-sm rounded px-8 py-3 w-fit hover:bg-white hover:text-[#1B1C1F] transition-colors"
            >
              Sign Up
            </a>
          </div>
        </section>

        {/* ── Craft Boxing Principles ───────────────────────────────── */}
        <section className="bg-white py-16 px-6 lg:py-24">
          <div className="mx-auto max-w-[74.5rem] grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="grid grid-cols-2 gap-4">
              {principlePhotos.map((src, i) => (
                <div key={src} className="relative aspect-square rounded overflow-hidden">
                  <Image src={src} alt="Craftboxing training" fill className="object-cover" priority={i === 0} />
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-10 justify-center">
              {principles.map((p) => (
                <div key={p.title} className="flex gap-5">
                  <div className="flex-shrink-0 w-9 pt-1">
                    <PrincipleIcon type={p.icon} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1B1C1F] text-xl mb-2">{p.title}</h3>
                    <p className="text-[#1B1C1F]/75 text-sm leading-relaxed">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── All fitness levels welcome ────────────────────────────── */}
        <section className="bg-[#DCE0E6] py-16 px-6 lg:py-24">
          <div className="mx-auto max-w-[74.5rem] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative aspect-[4/3] rounded overflow-hidden max-w-md mx-auto lg:mx-0">
              <Image
                src="/images/goodlife-craftboxing/inclusivity.jpeg"
                alt="A group of members standing in a circle in support of one another"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-archivo)] text-3xl lg:text-4xl font-extrabold text-[#1B1C1F] mb-5">
                All fitness levels are welcome!
              </h2>
              <p className="text-[#1B1C1F]/80 text-base leading-relaxed">
                Led by one of our inspiring, knowledgeable coaches, each workout is carefully
                designed to help bring out your absolute best — no matter who you are.
              </p>
            </div>
          </div>
        </section>

        {/* ── Club directory ────────────────────────────────────────── */}
        <section className="bg-white py-16 px-6 lg:py-24">
          <div className="mx-auto max-w-[74.5rem]">
            <div className="text-center mb-14">
              <h2 className="font-[family-name:var(--font-archivo)] text-3xl lg:text-4xl font-extrabold text-[#1B1C1F]">
                NY Gym Clubs That Offer Craftboxing
              </h2>
              <div className="w-16 h-1 bg-[#ED002E] mx-auto mt-4" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {clubs.map((club) => (
                <div key={club.name} className="border border-[#DCE0E6] rounded p-6">
                  <p className="font-[family-name:var(--font-archivo)] font-extrabold text-[#1B1C1F] mb-1">
                    {club.name}
                  </p>
                  <p className="text-sm text-[#1B1C1F]/70">{club.address}</p>
                  <p className="text-sm text-[#1B1C1F]/70 mb-3">{club.phone}</p>
                  <p className="text-xs text-[#1B1C1F]/60 mb-4">{club.hours} &bull; Coed Club</p>
                  <a
                    href="/our-clubs"
                    className="inline-flex items-center justify-center bg-[#ED002E] text-white font-bold text-sm rounded px-6 py-2.5 w-full hover:bg-[#c40025] transition-colors"
                  >
                    Book Now
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Become a Craft Boxing Coach ───────────────────────────── */}
        <section className="bg-white pb-16 px-6 lg:pb-24 text-center">
          <div className="mx-auto max-w-[74.5rem]">
            <h2 className="font-[family-name:var(--font-archivo)] text-3xl lg:text-4xl font-extrabold text-[#1B1C1F] mb-3">
              Become a Craftboxing Coach
            </h2>
            <div className="w-16 h-1 bg-[#ED002E] mx-auto mb-8" />
            <p className="text-[#1B1C1F]/80 text-lg mb-10">
              Are you a high-performance coach with a passion for leading and inspiring others?
              If so, we&apos;d love to talk to you!
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10">
              {careerPhotos.map((src) => (
                <div key={src} className="relative aspect-[3/4] rounded overflow-hidden">
                  <Image src={src} alt="An NY Gym Craftboxing coach" fill className="object-cover" />
                </div>
              ))}
            </div>
            <a
              href="/blog"
              className="inline-flex items-center justify-center bg-[#ED002E] text-white font-bold text-sm rounded px-8 py-3 hover:bg-[#c40025] transition-colors"
            >
              Learn More
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
