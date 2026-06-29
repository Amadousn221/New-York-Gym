import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const pillars = [
  { title: "Inclusivity", desc: "We welcome everyone — beginners, experts, and everyone in between. Our Judgement Free Zone® means you'll never feel out of place." },
  { title: "Affordability", desc: "Premium fitness shouldn't be a luxury. We keep prices low so everyone can prioritize their health, regardless of their budget." },
  { title: "Community", desc: "We believe connection fuels motivation. From member events to charitable giving, we invest in people and communities." },
  { title: "Sustainability", desc: "We're committed to reducing our environmental footprint — from energy-efficient equipment to eco-friendly club designs." },
];

const initiatives = [
  { label: "High School Summer Pass®", desc: "Every summer, teens 14–19 can work out for FREE at any Planet Fitness location.", cta: "Learn More", href: "/gym-memberships" },
  { label: "PF Black Card® Guest Policy", desc: "Black Card members can bring a friend every visit — because fitness is better together.", cta: "See Memberships", href: "/gym-memberships" },
  { label: "Community Giving", desc: "Through charitable partnerships, we support organizations that align with our mission of inclusivity and health for all.", cta: "View Memberships", href: "/gym-memberships" },
];

export default function PFPurposePage() {
  return (
    <>
      <Header />
      <main>

        {/* Hero */}
        <section className="bg-hero-gradient-1 px-6 pt-16 pb-24 text-center">
          <p className="text-secondary-main font-semibold text-sm uppercase tracking-widest mb-3">Our Mission</p>
          <h1 className="font-condensed text-5xl lg:text-7xl text-white uppercase leading-none mb-4">
            PF Purpose
          </h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto">
            We're on a mission to enhance people's lives by providing a high-quality fitness experience in a welcoming, non-intimidating environment.
          </p>
        </section>

        {/* Purpose statement */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-[57rem] mx-auto text-center">
            <h2 className="font-condensed text-4xl lg:text-5xl text-common-black uppercase leading-tight mb-6">
              Fitness for{" "}
              <span className="text-primary-main">Everyone.</span>{" "}
              Always.
            </h2>
            <p className="text-gray-dark text-xl leading-relaxed max-w-2xl mx-auto mb-6">
              Since 1992, Planet Fitness has believed that fitness should be accessible to all — not just elite athletes. Our purpose is to create a space where anyone can walk through our doors and feel like they belong.
            </p>
            <p className="text-gray-dark text-xl leading-relaxed max-w-2xl mx-auto">
              We're America's home for casual exercisers and those who are new to fitness. That's not an accident — it's our purpose.
            </p>
          </div>
        </section>

        {/* Four pillars */}
        <section className="bg-surface-gray py-16 px-6">
          <div className="max-w-[57rem] mx-auto">
            <h2 className="font-condensed text-4xl lg:text-5xl text-common-black uppercase text-center mb-12 leading-none">
              Our Four Pillars
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((p, i) => (
                <div key={p.title} className="bg-white rounded-2xl p-8 border border-border">
                  <div className="w-10 h-10 rounded-full bg-primary-main text-white font-bold flex items-center justify-center text-lg mb-4">
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-common-black text-xl mb-3">{p.title}</h3>
                  <p className="text-gray-dark text-base leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Initiatives */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-[57rem] mx-auto">
            <h2 className="font-condensed text-4xl lg:text-5xl text-common-black uppercase text-center mb-12 leading-none">
              Our Initiatives
            </h2>
            <div className="flex flex-col gap-5">
              {initiatives.map((init) => (
                <div key={init.label} className="bg-surface-gray rounded-2xl p-8 border border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-common-black text-xl mb-2">{init.label}</h3>
                    <p className="text-gray-dark text-base">{init.desc}</p>
                  </div>
                  <Link href={init.href} className="flex-shrink-0 bg-primary-main text-white rounded-full px-6 py-2.5 font-bold text-sm text-center">
                    {init.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary-main py-14 px-6 text-center">
          <h2 className="font-condensed text-4xl lg:text-5xl text-white uppercase leading-none mb-4">
            Be Part of Something Bigger
          </h2>
          <p className="text-white/80 text-xl mb-8 max-w-md mx-auto">Join millions of members who share our values.</p>
          <Link href="/gyms" className="bg-secondary-main text-primary-dark rounded-full px-10 py-4 font-bold text-lg inline-block">
            Join Today
          </Link>
        </section>

      </main>
      <Footer />
    </>
  );
}
