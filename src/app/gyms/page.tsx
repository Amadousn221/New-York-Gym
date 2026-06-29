"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const mockLocations = [
  { name: "Planet Fitness - Midtown Manhattan", address: "123 W 34th St, New York, NY 10001", phone: "(212) 555-0101", hours: "Open 24 hours" },
  { name: "Planet Fitness - Brooklyn Downtown", address: "456 Fulton St, Brooklyn, NY 11201", phone: "(718) 555-0102", hours: "Mon–Fri 5am–11pm, Sat–Sun 7am–9pm" },
  { name: "Planet Fitness - Queens Flushing", address: "789 Main St, Flushing, NY 11367", phone: "(718) 555-0103", hours: "Open 24 hours" },
  { name: "Planet Fitness - Bronx", address: "321 Grand Concourse, Bronx, NY 10451", phone: "(718) 555-0104", hours: "Mon–Fri 5am–11pm, Sat–Sun 7am–9pm" },
  { name: "Planet Fitness - Upper West Side", address: "555 Broadway, New York, NY 10012", phone: "(212) 555-0105", hours: "Open 24 hours" },
  { name: "Planet Fitness - Staten Island", address: "100 Victory Blvd, Staten Island, NY 10301", phone: "(718) 555-0106", hours: "Mon–Fri 5am–11pm, Sat–Sun 7am–9pm" },
];

export default function GymsPage() {
  const [search, setSearch] = useState("");

  const filtered = mockLocations.filter(
    (l) =>
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.address.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header />
      <main>

        {/* Hero */}
        <section className="bg-hero-gradient-1 px-6 pt-16 pb-20 text-center">
          <h1 className="font-condensed text-5xl lg:text-7xl text-white uppercase leading-none mb-4">
            Find a Club Near You
          </h1>
          <p className="text-white/80 text-xl mb-10 max-w-lg mx-auto">
            2,700+ locations nationwide. Find the Planet Fitness closest to you and start your journey today.
          </p>

          {/* Search bar */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Enter zip code or city"
              className="flex-1 px-5 py-3.5 rounded-full text-common-black text-base outline-none focus:ring-2 focus:ring-secondary-main"
            />
            <button
              type="submit"
              className="bg-secondary-main text-primary-dark rounded-full px-8 py-3.5 font-bold text-base flex-shrink-0"
            >
              Search
            </button>
          </form>
        </section>

        {/* Results */}
        <section className="bg-surface-gray py-14 px-6">
          <div className="max-w-[57rem] mx-auto">
            <h2 className="font-condensed text-3xl text-common-black uppercase mb-6 leading-none">
              {search ? `Results for "${search}"` : "Clubs Near You"}
            </h2>

            <div className="flex flex-col gap-4">
              {(search ? filtered : mockLocations).map((loc) => (
                <div
                  key={loc.name}
                  className="bg-white rounded-2xl p-6 border border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                >
                  <div>
                    <h3 className="font-bold text-common-black text-lg mb-1">{loc.name}</h3>
                    <p className="text-gray-dark text-sm mb-0.5">{loc.address}</p>
                    <p className="text-gray-medium text-sm mb-0.5">{loc.phone}</p>
                    <p className="text-primary-main text-sm font-semibold">{loc.hours}</p>
                  </div>
                  <div className="flex flex-col gap-2 flex-shrink-0">
                    <Link
                      href="/gym-memberships"
                      className="bg-primary-main text-white rounded-full px-6 py-2.5 font-bold text-sm text-center"
                    >
                      Join Now
                    </Link>
                    <button className="border border-primary-main text-primary-main rounded-full px-6 py-2.5 font-semibold text-sm text-center">
                      Get Directions
                    </button>
                  </div>
                </div>
              ))}

              {search && filtered.length === 0 && (
                <div className="text-center py-12 text-gray-medium">
                  <p className="text-xl font-semibold mb-2">No clubs found</p>
                  <p>Try a different zip code or city name.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary-main py-14 px-6 text-center">
          <h2 className="font-condensed text-4xl lg:text-5xl text-white uppercase leading-none mb-4">
            Ready to Join?
          </h2>
          <p className="text-white/80 text-xl mb-8 max-w-md mx-auto">
            Memberships starting at just $15/month. No commitment required.
          </p>
          <Link
            href="/gym-memberships"
            className="bg-secondary-main text-primary-dark rounded-full px-10 py-4 font-bold text-lg inline-block"
          >
            View Membership Options
          </Link>
        </section>

      </main>
      <Footer />
    </>
  );
}
