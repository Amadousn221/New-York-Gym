"use client";

import { useLang } from "@/lib/i18n";

export function GetStartedSection() {
  const { t } = useLang();
  const g = t.getStarted;

  const ctaCards = [
    { label: g.findClub, href: "/gyms/" },
    { label: g.explorePerks, href: "/my-account/perks" },
    { label: g.virtualTour, href: "/virtual-tour" },
  ];

  return (
    <section className="w-full bg-surface-gray px-6 md:px-8 pb-12 pt-16">
      <div className="mx-auto max-w-[71.5rem]">
        <h2 className="mb-6 w-full text-center text-[2rem]/10 font-bold tracking-[-0.5px] text-common-black lg:text-5xl">
          {g.heading}
        </h2>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          {ctaCards.map((card) => (
            <a
              key={card.href}
              href={card.href}
              className="flex flex-1 items-center justify-center rounded-2xl bg-white px-6 py-8 text-center font-semibold text-common-black text-lg/6 hover:shadow-md transition-shadow"
            >
              {card.label}
            </a>
          ))}
        </div>

        <p className="mt-12 w-full text-sm/[1.125rem] text-gray-dark">{g.disclaimer}</p>
      </div>
    </section>
  );
}
