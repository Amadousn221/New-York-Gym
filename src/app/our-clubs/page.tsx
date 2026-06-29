"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const amenities = [
  { icon: "🏃", title: "Cardio Area", desc: "Hundreds of treadmills, ellipticals, bikes, and stair climbers — always available, never crowded." },
  { icon: "🏋️", title: "Strength Training", desc: "A full range of free weights, selectorized machines, and functional training equipment for every level." },
  { icon: "⚡", title: "Express Circuit", desc: "A 30-minute full-body workout using our 20-station express circuit — perfect for when you're short on time." },
  { icon: "💆", title: "Black Card Spa®", desc: "Exclusive to PF Black Card® members — massage chairs, HydroMassage®, tanning, and Total Body Enhancement." },
  { icon: "💪", title: "Free PF™ Training", desc: "Our group fitness program is included with every membership. No experience necessary." },
  { icon: "📶", title: "Free Wi-Fi", desc: "Stay connected throughout your workout with complimentary high-speed Wi-Fi." },
];

const locations = [
  { name: "Planet Fitness - Midtown Manhattan", address: "123 W 34th St, New York, NY 10001", hours: "Open 24/7" },
  { name: "Planet Fitness - Brooklyn Downtown", address: "456 Fulton St, Brooklyn, NY 11201", hours: "Mon–Fri 5am–11pm, Sat–Sun 7am–9pm" },
  { name: "Planet Fitness - Queens Flushing", address: "789 Main St, Flushing, NY 11367", hours: "Open 24/7" },
  { name: "Planet Fitness - The Bronx", address: "321 Grand Concourse, Bronx, NY 10451", hours: "Mon–Fri 5am–11pm, Sat–Sun 7am–9pm" },
  { name: "Planet Fitness - Upper West Side", address: "555 Broadway, New York, NY 10012", hours: "Open 24/7" },
  { name: "Planet Fitness - Staten Island", address: "100 Victory Blvd, Staten Island, NY 10301", hours: "Mon–Fri 5am–11pm, Sat–Sun 7am–9pm" },
];

export default function OurClubsPage() {
  const [search, setSearch] = useState("");
  const filtered = locations.filter(
    (l) => l.name.toLowerCase().includes(search.toLowerCase()) || l.address.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header />
      <main>

        {/* Hero */}
        <section className="bg-hero-gradient-1 px-6 pt-16 pb-24 text-center">
          <p className="text-secondary-main font-semibold text-sm uppercase tracking-widest mb-3">2,700+ Locations</p>
          <h1 className="font-condensed text-5xl lg:text-7xl text-white uppercase leading-none mb-4">
            Our Clubs
          </h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto mb-10">
            Clean, friendly, and fully equipped. Find a Planet Fitness near you and experience the Judgement Free Zone®.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Enter zip code or city"
              className="flex-1 px-5 py-3.5 rounded-full text-common-black text-base outline-none focus:ring-2 focus:ring-secondary-main"
            />
            <button type="submit" className="bg-secondary-main text-primary-dark rounded-full px-8 py-3.5 font-bold text-base flex-shrink-0">
              Find a Club
            </button>
          </form>
        </section>

        {/* Amenities */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-[57rem] mx-auto">
            <h2 className="font-condensed text-4xl lg:text-5xl text-common-black uppercase text-center mb-12 leading-none">
              Everything You Need
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {amenities.map((a) => (
                <div key={a.title} className="bg-surface-gray rounded-2xl p-7 border border-border">
                  <span className="text-3xl block mb-4">{a.icon}</span>
                  <h3 className="font-bold text-common-black text-lg mb-2">{a.title}</h3>
                  <p className="text-gray-dark text-sm leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Locations list */}
        <section className="bg-surface-gray py-16 px-6">
          <div className="max-w-[57rem] mx-auto">
            <h2 className="font-condensed text-3xl text-common-black uppercase mb-6 leading-none">
              {search ? `Results for "${search}"` : "Featured Locations"}
            </h2>
            <div className="flex flex-col gap-4">
              {(search ? filtered : locations).map((loc) => (
                <div key={loc.name} className="bg-white rounded-2xl p-6 border border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-common-black text-base mb-0.5">{loc.name}</h3>
                    <p className="text-gray-dark text-sm mb-0.5">{loc.address}</p>
                    <p className="text-primary-main text-sm font-semibold">{loc.hours}</p>
                  </div>
                  <Link href="/gym-memberships" className="flex-shrink-0 bg-primary-main text-white rounded-full px-6 py-2.5 font-bold text-sm text-center">
                    Join Now
                  </Link>
                </div>
              ))}
              {search && filtered.length === 0 && (
                <p className="text-gray-medium text-center py-8">No clubs found. Try a different search.</p>
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary-main py-14 px-6 text-center">
          <h2 className="font-condensed text-4xl lg:text-5xl text-white uppercase leading-none mb-4">Ready to Join?</h2>
          <p className="text-white/80 text-xl mb-8">Memberships from $15/month. No commitment required.</p>
          <Link href="/gym-memberships" className="bg-secondary-main text-primary-dark rounded-full px-10 py-4 font-bold text-lg inline-block">
            View Memberships
          </Link>
        </section>

      </main>
      <Footer />
    </>
  );
}
