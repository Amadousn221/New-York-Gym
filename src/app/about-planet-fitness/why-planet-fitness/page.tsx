import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const reasons = [
  { icon: "💰", title: "Best Value on the Planet", desc: "We believe providing a high quality experience at an affordable cost means everyone can achieve their health goals, regardless of their budget." },
  { icon: "🏋️", title: "Tons of Equipment", desc: "Tons of cardio and strength equipment, all in a clean and spacious environment. You'll never have to wait in line." },
  { icon: "📍", title: "2,700+ Locations", desc: "More than 2,700 Planet Fitness locations worldwide and still growing. There's likely one close to where you live, work, or play." },
  { icon: "😊", title: "Friendly Staff", desc: "Our team members are here to make your experience as enjoyable as possible — no intimidation, just support." },
  { icon: "🎓", title: "Free Fitness Training", desc: "PF™ Training is our group fitness program, offered for free as part of every membership. No experience required." },
  { icon: "🌙", title: "Open When You Need Us", desc: "Many of our locations are open 24 hours, so you can work out whenever it fits your schedule." },
];

export default function WhyPFPage() {
  return (
    <>
      <Header />
      <main>

        {/* Hero */}
        <section className="bg-hero-gradient-1 px-6 pt-16 pb-24 text-center">
          <p className="text-secondary-main font-semibold text-sm uppercase tracking-widest mb-3">Why Choose Us</p>
          <h1 className="font-condensed text-5xl lg:text-7xl text-white uppercase leading-none mb-4">
            Why Planet Fitness?
          </h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto">
            We're not your average gym. We're the place where real people come to make real progress, without the judgement.
          </p>
        </section>

        {/* Judgement Free Zone */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-[57rem] mx-auto text-center">
            <div className="inline-block bg-secondary-main text-primary-dark rounded-full px-6 py-2 font-bold text-sm uppercase tracking-wide mb-6">
              Judgement Free Zone®
            </div>
            <h2 className="font-condensed text-4xl lg:text-5xl text-common-black uppercase leading-tight mb-6">
              A Place Where{" "}
              <span className="text-primary-main">EVERYONE</span>{" "}
              Feels Welcome
            </h2>
            <p className="text-gray-dark text-xl leading-relaxed max-w-2xl mx-auto">
              We believe in creating a non-intimidating environment where members of all fitness levels are encouraged to reach their personal goals. That's what the Judgement Free Zone® is all about.
            </p>
          </div>
        </section>

        {/* Reasons grid */}
        <section className="bg-surface-gray py-16 px-6">
          <div className="max-w-[57rem] mx-auto">
            <h2 className="font-condensed text-4xl lg:text-5xl text-common-black uppercase text-center mb-12 leading-none">
              What Makes Us Different
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {reasons.map((r) => (
                <div key={r.title} className="bg-white rounded-2xl p-8 border border-border text-center">
                  <span className="text-4xl block mb-4">{r.icon}</span>
                  <h3 className="font-bold text-common-black text-lg mb-3">{r.title}</h3>
                  <p className="text-gray-dark text-sm leading-relaxed">{r.desc}</p>
                  <Link href="/gym-memberships" className="text-primary-main font-semibold text-sm mt-4 inline-block underline underline-offset-2">
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary-main py-16 px-6 text-center">
          <h2 className="font-condensed text-4xl lg:text-6xl text-white uppercase leading-none mb-4">
            Start Your Journey Today
          </h2>
          <p className="text-white/80 text-xl mb-10 max-w-md mx-auto">
            Memberships from just $15/month. No commitment. No judgement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gyms" className="bg-secondary-main text-primary-dark rounded-full px-10 py-4 font-bold text-lg">
              Find a Club
            </Link>
            <Link href="/gym-memberships" className="border-2 border-white text-white rounded-full px-10 py-4 font-bold text-lg">
              View Memberships
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
