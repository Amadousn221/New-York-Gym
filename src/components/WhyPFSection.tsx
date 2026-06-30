"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";

export function WhyPFSection() {
  const { t } = useLang();
  const w = t.whyPF;

  const valueProps = [
    {
      icon: "/images/icons/Money.svg",
      iconAlt: "Money icon",
      iconClass: "w-[2.875rem] lg:w-[3.28rem]",
      title: w.bestValueTitle,
      description: w.bestValueDesc,
      href: "/gym-memberships",
    },
    {
      icon: "/images/icons/Equipment.svg",
      iconAlt: "Equipment icon",
      iconClass: "w-[3.3rem] lg:w-[3.7rem]",
      title: w.equipmentTitle,
      description: w.equipmentDesc,
      href: "/about-planet-fitness/why-planet-fitness",
    },
    {
      icon: "/images/icons/Globe.svg",
      iconAlt: "Globe icon",
      iconClass: "w-[3.7rem] lg:w-[4.1rem]",
      title: w.locationsTitle,
      description: w.locationsDesc,
      href: "/gyms",
    },
  ];

  return (
    <section className="w-full overflow-hidden pb-16 lg:pb-20">
      {/* Full-width gym photo with diagonal clip path */}
      <div className="w-full">
        <img
          src="/images/place-where-welcome.webp"
          alt="a place where everyone feels welcome"
          className="w-full object-cover object-[center_15%] max-md:aspect-square md:h-[620px] clip-path-bottom-right-85 md:clip-path-bottom-right-75"
        />
      </div>

      {/* Centered heading */}
      <h2 className="font-condensed mb-12 mt-6 px-6 text-center text-5xl lg:text-6xl leading-none text-common-black">
        {w.prefix}{" "}
        <span className="text-primary-main uppercase">{w.highlight}</span>
        {" "}{w.suffix}
      </h2>

      {/* 3-column value props */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 px-6 max-w-[71.5rem] mx-auto">
        {valueProps.map((prop) => (
          <div key={prop.href} className="mb-[2.8rem] text-center last:mb-0">
            <div className="mb-2 lg:mb-4 flex h-[3.75rem] items-center justify-center">
              <img src={prop.icon} alt={prop.iconAlt} className={prop.iconClass} />
            </div>
            <p className="mb-[.95rem] text-2xl/8 lg:text-[2rem]/10 font-bold tracking-[-.4px] text-common-black">
              {prop.title}
            </p>
            <p className="mb-[.55rem] lg:mb-4 text-lg/6 text-gray-dark">{prop.description}</p>
            <Link href={prop.href} className="text-lg/6 font-semibold text-primary-main underline">
              {w.learnMore}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
