"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const blackCardPerks = [
  { icon: "🏠", text: "Access to any Planet Fitness club" },
  { icon: "👤", text: "Bring a guest every visit, for free" },
  { icon: "📱", text: "PF+ premium digital workouts" },
  { icon: "✨", text: "Exclusive perks & savings with PerkConnect®" },
  { icon: "🥤", text: "50% off drinks at the front desk cooler" },
  { icon: "📶", text: "Free Wi-Fi at every club" },
];

const spaPerks = [
  { title: "Massage Chairs", desc: "Relax and recover after every workout with our state-of-the-art massage chairs." },
  { title: "HydroMassage®", desc: "Enjoy a full-body massage experience with our HydroMassage water beds." },
  { title: "Tanning", desc: "Unlimited use of stand-up tanning booths included with your Black Card." },
  { title: "Total Body Enhancement", desc: "Beauty Angel RVT30 for skin rejuvenation and muscle recovery." },
];

const classicPerks = [
  { icon: "🏠", text: "Access to home club" },
  { icon: "🏋️", text: "Tons of cardio and strength equipment" },
  { icon: "💪", text: "Free fitness training with PF™" },
  { icon: "📶", text: "Free Wi-Fi" },
  { icon: "📱", text: "PF App included" },
];

interface CompareRow { feature: string; classic: boolean; black: boolean; }
const compareRows: CompareRow[] = [
  { feature: "Access to home club", classic: true, black: true },
  { feature: "Tons of cardio & strength equipment", classic: true, black: true },
  { feature: "Free PF™ fitness training", classic: true, black: true },
  { feature: "Free Wi-Fi", classic: true, black: true },
  { feature: "PF App", classic: true, black: true },
  { feature: "Access to any PF location", classic: false, black: true },
  { feature: "Bring a guest every visit", classic: false, black: true },
  { feature: "PF+ digital workouts", classic: false, black: true },
  { feature: "Massage chairs", classic: false, black: true },
  { feature: "HydroMassage®", classic: false, black: true },
  { feature: "Tanning", classic: false, black: true },
  { feature: "Total Body Enhancement", classic: false, black: true },
  { feature: "50% off drinks", classic: false, black: true },
  { feature: "PerkConnect® exclusive perks", classic: false, black: true },
];

interface FaqItem { q: string; a: string; }
const faqs: FaqItem[] = [
  { q: "Is there a contract?", a: "No. Planet Fitness memberships are month-to-month with no long-term commitment. You can cancel anytime." },
  { q: "What is the PF Black Card®?", a: "The PF Black Card® is our premium membership that gives you access to all Planet Fitness locations, the ability to bring a guest every visit, and full Black Card Spa® amenities." },
  { q: "Can I bring a guest with my Black Card?", a: "Yes! PF Black Card® members can bring one guest per visit at no additional charge. Guests must be 13+ and accompanied by the member." },
  { q: "Is there a joining fee?", a: "There is a $1 startup fee at most locations, plus a $39 annual fee billed once per year on or around your anniversary date." },
  { q: "What is the Judgement Free Zone®?", a: "The Judgement Free Zone® is our welcoming, non-intimidating environment where members of all fitness levels are encouraged to work out without fear of judgment." },
  { q: "How do I cancel my membership?", a: "You can cancel your membership in-person at your home club or by sending a letter. There is no cancellation fee." },
];

export default function GymMembershipsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Header />
      <main>

        {/* ── HERO ── */}
        <section className="bg-hero-gradient-1 px-6 pt-16 pb-24 text-center">
          <h1 className="font-condensed text-5xl lg:text-7xl text-white uppercase mb-0 leading-none">
            Our Memberships
          </h1>

          {/* Plan cards */}
          <div className="mt-12 flex flex-col md:flex-row gap-5 max-w-[57rem] mx-auto text-left">

            {/* Black Card */}
            <div className="bg-gradient-330-18-84 rounded-3xl p-8 md:p-10 flex flex-col flex-1" id="blackCard">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-condensed text-2xl text-white uppercase">PF BLACK CARD®</span>
                <span className="bg-secondary-main text-primary-dark rounded px-2 py-[3px] text-sm font-semibold">Best Value</span>
              </div>
              <p className="text-white text-sm mb-1">Starting at</p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-secondary-main text-4xl font-bold">$24.99</span>
                <span className="text-white text-lg">/mo*</span>
              </div>
              <p className="text-white/70 text-sm mb-5">plus taxes & fees</p>
              <p className="text-white text-lg mb-8 flex-1">
                Access to any club, bring a guest anytime, PF+ premium digital workouts, and so much more!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <a href="#blackCard" className="text-white font-semibold underline text-lg">Learn More</a>
                <Link href="/gyms" className="bg-white text-primary-main rounded-full px-6 py-2.5 font-semibold text-lg">Join Now</Link>
              </div>
            </div>

            {/* Classic */}
            <div className="bg-white border border-border rounded-3xl p-8 md:p-10 flex flex-col flex-1" id="classicCard">
              <div className="mb-4">
                <span className="font-condensed text-2xl text-common-black uppercase">CLASSIC</span>
              </div>
              <p className="text-gray-medium text-sm mb-1">Starting at</p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-primary-main text-4xl font-bold">$15</span>
                <span className="text-common-black text-lg">/mo*</span>
              </div>
              <p className="text-gray-medium text-sm mb-5">plus taxes & fees</p>
              <p className="text-common-black text-lg mb-8 flex-1">
                Our standard membership, with unlimited access to your home club.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <a href="#classicCard" className="text-primary-main font-semibold underline text-lg">Learn More</a>
                <Link href="/gyms" className="bg-primary-main text-white rounded-full px-6 py-2.5 font-semibold text-lg">Join Now</Link>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <a href="#compare" className="border-[1.5px] border-white text-white rounded-full px-8 py-3.5 font-semibold text-lg inline-block">
              Compare Memberships
            </a>
          </div>
        </section>

        {/* ── BLACK CARD PERKS ── */}
        <section className="bg-surface-gray py-16 px-6">
          <div className="max-w-[57rem] mx-auto">
            <p className="text-primary-main font-semibold text-sm uppercase tracking-widest mb-2">Premium</p>
            <h2 className="font-condensed text-4xl lg:text-5xl text-common-black uppercase mb-3 leading-tight">
              PF Black Card® Membership Perks
            </h2>
            <p className="text-gray-dark text-lg mb-10 max-w-xl">
              Everything in Classic, plus exclusive perks and full access to every Planet Fitness location worldwide.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {blackCardPerks.map((perk) => (
                <div key={perk.text} className="flex items-center gap-4 bg-white rounded-2xl p-5 border border-border">
                  <span className="text-2xl flex-shrink-0">{perk.icon}</span>
                  <p className="text-common-black font-semibold text-base">{perk.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/gyms" className="bg-primary-main text-white rounded-full px-8 py-3.5 font-bold text-lg inline-block">
                Join for $24.99/mo
              </Link>
            </div>
          </div>
        </section>

        {/* ── BLACK CARD SPA BANNER ── */}
        <section className="bg-primary-main py-10 px-6 text-center">
          <p className="text-secondary-main font-semibold text-sm uppercase tracking-widest mb-2">Included with PF Black Card®</p>
          <h2 className="font-condensed text-4xl lg:text-6xl text-white uppercase leading-none">
            Free Access to the Black Card Spa®
          </h2>
        </section>

        {/* ── SPA PERKS ── */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-[57rem] mx-auto">
            <h2 className="font-condensed text-3xl lg:text-4xl text-common-black uppercase mb-3 leading-tight">
              Relax and Unwind After Your Workout
            </h2>
            <p className="text-gray-dark text-lg mb-10">
              Your Black Card membership includes exclusive access to our premium spa amenities — the perfect way to recover and recharge.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {spaPerks.map((spa) => (
                <div key={spa.title} className="bg-surface-gray rounded-2xl p-6 border border-border">
                  <h3 className="font-bold text-common-black text-lg mb-2">{spa.title}</h3>
                  <p className="text-gray-dark text-sm leading-relaxed">{spa.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CLASSIC SECTION ── */}
        <section className="bg-surface-gray py-16 px-6">
          <div className="max-w-[57rem] mx-auto">
            <p className="text-primary-main font-semibold text-sm uppercase tracking-widest mb-2">Starter</p>
            <h2 className="font-condensed text-4xl lg:text-5xl text-common-black uppercase mb-3 leading-tight">
              Classic Membership
            </h2>
            <p className="text-gray-dark text-lg mb-10 max-w-xl">
              Everything you need to start your fitness journey — at just $15/month with no long-term commitment.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {classicPerks.map((perk) => (
                <div key={perk.text} className="flex items-center gap-4 bg-white rounded-2xl p-5 border border-border">
                  <span className="text-2xl flex-shrink-0">{perk.icon}</span>
                  <p className="text-common-black font-semibold text-base">{perk.text}</p>
                </div>
              ))}
            </div>
            <Link href="/gyms" className="bg-primary-main text-white rounded-full px-8 py-3.5 font-bold text-lg inline-block">
              Join for $15/mo
            </Link>
          </div>
        </section>

        {/* ── COMPARE TABLE ── */}
        <section id="compare" className="bg-white py-16 px-6">
          <div className="max-w-[57rem] mx-auto">
            <h2 className="font-condensed text-4xl lg:text-5xl text-common-black uppercase mb-10 text-center leading-none">
              Compare Memberships
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left py-4 px-4 border-b-2 border-border text-gray-medium font-semibold text-sm uppercase tracking-wide w-1/2">Features</th>
                    <th className="py-4 px-4 border-b-2 border-border text-center">
                      <span className="font-condensed text-2xl text-common-black uppercase block">Classic</span>
                      <span className="text-primary-main font-bold text-base">$15/mo</span>
                    </th>
                    <th className="py-4 px-4 border-b-2 border-primary-main text-center bg-primary-superLight rounded-t-xl">
                      <span className="font-condensed text-2xl text-primary-main uppercase block">Black Card®</span>
                      <span className="text-primary-main font-bold text-base">$24.99/mo</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-surface-gray"}>
                      <td className="py-3.5 px-4 text-sm text-common-black border-b border-border">{row.feature}</td>
                      <td className="py-3.5 px-4 text-center border-b border-border">
                        {row.classic ? <CheckIcon /> : <span className="text-gray-medium">—</span>}
                      </td>
                      <td className={`py-3.5 px-4 text-center border-b border-border ${i % 2 === 0 ? "bg-primary-superLight/30" : "bg-primary-superLight/50"}`}>
                        {row.black ? <CheckIcon /> : <span className="text-gray-medium">—</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link href="/gyms" className="text-center bg-surface-gray border border-border text-primary-main rounded-full px-8 py-3.5 font-bold text-lg">
                Join Classic — $15/mo
              </Link>
              <Link href="/gyms" className="text-center bg-primary-main text-white rounded-full px-8 py-3.5 font-bold text-lg">
                Join Black Card® — $24.99/mo
              </Link>
            </div>
          </div>
        </section>

        {/* ── FIND A CLUB ── */}
        <section className="bg-surface-gray py-16 px-6 text-center">
          <h2 className="font-condensed text-4xl lg:text-5xl text-common-black uppercase mb-3 leading-none">
            Find a Club Near You
          </h2>
          <p className="text-gray-dark text-lg mb-8 max-w-md mx-auto">
            Over 2,700+ locations nationwide — there's a Planet Fitness close to you.
          </p>
          <Link href="/gyms" className="bg-primary-main text-white rounded-full px-10 py-4 font-bold text-lg inline-block">
            Find a Club
          </Link>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-[57rem] mx-auto">
            <h2 className="font-condensed text-4xl lg:text-5xl text-common-black uppercase mb-10 text-center leading-none">
              Membership FAQs
            </h2>
            <div className="divide-y divide-border border-t border-border">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="font-bold text-common-black text-base">{faq.q}</span>
                    <span
                      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors"
                      style={{ backgroundColor: openFaq === i ? "rgb(86,20,150)" : "rgb(247,247,252)", border: "1.5px solid rgb(229,231,235)" }}
                    >
                      <span className="text-sm font-bold leading-none" style={{ color: openFaq === i ? "#fff" : "rgb(86,20,150)" }}>
                        {openFaq === i ? "−" : "+"}
                      </span>
                    </span>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{ maxHeight: openFaq === i ? "200px" : "0px" }}
                  >
                    <p className="pb-5 text-gray-dark text-base leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DISCLAIMER ── */}
        <section className="bg-surface-gray py-8 px-6">
          <p className="text-gray-medium text-xs leading-relaxed max-w-4xl mx-auto text-center">
            *Membership dues begin at $15 and PF Black Card® membership begins at $24.99. All fees are billed monthly. Membership dues may include applicable taxes. Pricing and services may vary by location. Annual fee of $39 will be billed on or around the 5th of the month following 4 months after your join date. Services may vary. Some services available at participating locations only.
          </p>
        </section>

      </main>
      <Footer />
    </>
  );
}

function CheckIcon() {
  return (
    <svg className="w-5 h-5 mx-auto" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="10" fill="rgb(86,20,150)" />
      <path d="M6 10l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
