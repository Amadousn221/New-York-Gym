import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const stats = [
  { number: "2,700+", label: "Locations" },
  { number: "19M+", label: "Members" },
  { number: "$10", label: "Lowest price in fitness" },
  { number: "1992", label: "Founded" },
];

const values = [
  { title: "Judgement Free Zone®", desc: "We've created a welcoming, non-intimidating environment where every member can work out comfortably — no matter their fitness level." },
  { title: "Affordable for Everyone", desc: "We believe fitness should be accessible to all. Our memberships start at just $15/month with no long-term commitment required." },
  { title: "Clean & Friendly", desc: "Our clubs are meticulously maintained and staffed by friendly, knowledgeable team members ready to help you reach your goals." },
  { title: "Community First", desc: "We're not just a gym — we're a community. From member pizza nights to charity initiatives, we invest in the people who make us great." },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>

        {/* Hero */}
        <section className="bg-hero-gradient-1 px-6 pt-16 pb-24 text-center">
          <p className="text-secondary-main font-semibold text-sm uppercase tracking-widest mb-3">About Us</p>
          <h1 className="font-condensed text-5xl lg:text-7xl text-white uppercase leading-none mb-4">
            About Planet Fitness
          </h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto">
            Where everyone is welcome, every day. We're committed to providing a clean, friendly, and welcoming environment for members of all fitness levels.
          </p>
        </section>

        {/* Stats */}
        <section className="bg-primary-main py-12 px-6">
          <div className="max-w-[57rem] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-condensed text-4xl lg:text-5xl text-secondary-main uppercase leading-none mb-1">{stat.number}</p>
                <p className="text-white text-sm font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mission */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-[57rem] mx-auto flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <p className="text-primary-main font-semibold text-sm uppercase tracking-widest mb-3">Our Mission</p>
              <h2 className="font-condensed text-4xl lg:text-5xl text-common-black uppercase leading-tight mb-6">
                Enhancing People's Lives
              </h2>
              <p className="text-gray-dark text-lg leading-relaxed mb-6">
                Since 1992, Planet Fitness has been committed to creating an environment where anyone and everyone can be comfortable. We offer high-quality facilities at surprisingly low prices, because we believe a gym should feel welcoming to all — not just fitness enthusiasts.
              </p>
              <p className="text-gray-dark text-lg leading-relaxed">
                We're more than a gym — we're a place where people of all walks of life can come together, feel accepted, and make real progress on their health and wellness journey.
              </p>
            </div>
            <div className="flex-1 flex-shrink-0">
              <div className="bg-surface-gray rounded-3xl aspect-[4/3] flex items-center justify-center">
                <span className="font-condensed text-6xl text-primary-main uppercase opacity-20">Planet Fitness</span>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-surface-gray py-16 px-6">
          <div className="max-w-[57rem] mx-auto">
            <h2 className="font-condensed text-4xl lg:text-5xl text-common-black uppercase text-center mb-12 leading-none">
              What We Stand For
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((v) => (
                <div key={v.title} className="bg-white rounded-2xl p-8 border border-border">
                  <h3 className="font-bold text-primary-main text-xl mb-3">{v.title}</h3>
                  <p className="text-gray-dark text-base leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sub-nav */}
        <section className="bg-white py-12 px-6 border-t border-border">
          <div className="max-w-[57rem] mx-auto flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about-planet-fitness/why-planet-fitness" className="bg-primary-main text-white rounded-full px-8 py-3.5 font-bold text-lg text-center">
              Why Planet Fitness?
            </Link>
            <Link href="/gym-memberships" className="border-[1.5px] border-primary-main text-primary-main rounded-full px-8 py-3.5 font-bold text-lg text-center">
              View Memberships
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
