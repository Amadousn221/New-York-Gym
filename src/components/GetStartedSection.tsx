const ctaCards = [
  { label: "Find a Club Near You", href: "/gyms/" },
  { label: "Explore Perks", href: "/my-account/perks" },
  { label: "Take a Virtual Tour", href: "/virtual-tour" },
];

const disclaimer =
  "*Classic memberships begin at $15 and PF Black Card® memberships begin at $24.99, billed monthly. Memberships may include 12-month commitment. State and local taxes may apply. Subject to an annual fee of $49. Prices may vary depending on location. Services and perks subject to availability and restrictions. Must be at least 18 years old to enroll, or 13-17 with parent/guardian. State and local restrictions on tanning frequency with PF Black Card® memberships apply. Participating locations only. Locations independently owned and operated. See home club for details. We reserve the right to correct pricing errors or withdraw offer at any time. ©2026 Planet Fitness Franchising LLC";

export function GetStartedSection() {
  return (
    <section className="w-full bg-surface-gray px-6 md:px-8 pb-12 pt-16">
      <div className="mx-auto max-w-[71.5rem]">
        <h2 className="mb-6 w-full text-center text-[2rem]/10 font-bold tracking-[-0.5px] text-common-black lg:text-5xl">
          Get Started Today
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

        <p className="mt-12 w-full text-sm/[1.125rem] text-gray-dark">{disclaimer}</p>
      </div>
    </section>
  );
}
