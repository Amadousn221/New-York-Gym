"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useLang } from "@/lib/i18n";

export function MembershipsSection() {
  const { t } = useLang();
  const m = t.memberships;

  return (
    <section className={cn("bg-surface-gray flex flex-col items-center px-6 py-16 w-full")}>
      {/* Header */}
      <div className="max-w-[57rem] w-full text-center mb-12 md:mb-16">
        <h2 className="text-[2rem]/10 lg:text-5xl/[3.5rem] font-bold mb-4 text-center text-common-black">
          {m.heading}
        </h2>
        <p className="text-lg/6 text-gray-dark text-center">{m.description}</p>
      </div>

      {/* Cards */}
      <div className="mt-12 md:mt-16 w-full max-w-[57rem]">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          {/* PF Black Card */}
          <div className="bg-gradient-330-18-84 rounded-3xl p-8 md:p-10 flex flex-col flex-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-condensed text-2xl/6 text-white uppercase">{m.blackCard}</span>
              <span className="bg-secondary-main text-primary-dark rounded px-2 py-[3px] text-sm/4 font-semibold">
                {m.bestValue}
              </span>
            </div>
            <div className="mb-4">
              <p className="text-white text-sm/4 sm:text-base">{m.startingAt}</p>
              <div className="flex items-baseline gap-1">
                <span className="text-secondary-main text-[2rem]/10 font-bold">15 000 FCFA</span>
                <span className="text-white text-lg/6">{m.perMonth}</span>
              </div>
              <p className="text-white text-sm/4 mb-4">{m.taxesFees}</p>
            </div>
            <p className="text-white text-lg/6 mb-6 flex-1">{m.blackCardDesc}</p>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Link href="/gym-memberships/#blackCard" className="text-white font-semibold underline text-lg/6">
                {m.learnMore}
              </Link>
              <Link href="/gyms" className="bg-common-white text-primary-main rounded-full px-6 py-2 font-semibold text-lg/6">
                {m.joinNow}
              </Link>
            </div>
          </div>

          {/* Classic */}
          <div className="bg-white border border-border rounded-3xl p-8 md:p-10 flex flex-col flex-1">
            <div className="mb-4">
              <span className="font-condensed text-2xl/6 text-common-black uppercase">{m.classic}</span>
            </div>
            <div className="mb-4">
              <p className="text-gray-medium text-sm/4 sm:text-base">{m.startingAt}</p>
              <div className="flex items-baseline gap-1">
                <span className="text-primary-main text-[2rem]/10 font-bold">9 000 FCFA</span>
                <span className="text-common-black text-lg/6">{m.perMonth}</span>
              </div>
              <p className="text-gray-medium text-sm/4 mb-4">{m.taxesFees}</p>
            </div>
            <p className="text-common-black text-lg/6 mb-6 flex-1">{m.classicDesc}</p>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Link href="/gym-memberships/#classicCard" className="text-primary-main font-semibold underline text-lg/6">
                {m.learnMore}
              </Link>
              <Link href="/gyms" className="bg-primary-main text-white rounded-full px-6 py-2 font-semibold text-lg/6">
                {m.joinNow}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <Link
        href="/gym-memberships/#compare"
        className="mt-12 rounded-full border-[1.5px] border-solid border-primary-main bg-transparent px-8 py-4 text-primary-main font-bold text-lg/6"
      >
        {m.compare}
      </Link>
    </section>
  );
}
