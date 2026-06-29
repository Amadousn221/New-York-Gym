import Link from "next/link";

interface ValueProp {
  icon: string;
  iconAlt: string;
  iconClass: string;
  title: string;
  description: string;
  href: string;
}

const valueProps: ValueProp[] = [
  {
    icon: "/images/icons/Money.svg",
    iconAlt: "Money icon",
    iconClass: "w-[2.875rem] lg:w-[3.28rem]",
    title: "Best value on the planet",
    description:
      "We believe in providing a high-quality experience at an affordable cost.",
    href: "/gym-memberships",
  },
  {
    icon: "/images/icons/Equipment.svg",
    iconAlt: "Equipment icon",
    iconClass: "w-[3.3rem] lg:w-[3.7rem]",
    title: "Tons of equipment",
    description:
      "Tons of cardio and strength equipment, all in a clean and spacious environment.",
    href: "/about-planet-fitness/why-planet-fitness",
  },
  {
    icon: "/images/icons/Globe.svg",
    iconAlt: "Globe icon",
    iconClass: "w-[3.7rem] lg:w-[4.1rem]",
    title: "2,700+ locations",
    description: "More than 2,700 Planet Fitness locations worldwide.",
    href: "/gyms",
  },
];

export function WhyPFSection() {
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
        a place where{" "}
        <span className="text-primary-main uppercase">everyone</span>
        {" "}feels welcome
      </h2>

      {/* 3-column value props */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 px-6 max-w-[71.5rem] mx-auto">
        {valueProps.map((prop) => (
          <div key={prop.href} className="mb-[2.8rem] text-center last:mb-0">
            {/* Icon */}
            <div className="mb-2 lg:mb-4 flex h-[3.75rem] items-center justify-center">
              <img
                src={prop.icon}
                alt={prop.iconAlt}
                className={prop.iconClass}
              />
            </div>

            {/* Title */}
            <p className="mb-[.95rem] text-2xl/8 lg:text-[2rem]/10 font-bold tracking-[-.4px] text-common-black">
              {prop.title}
            </p>

            {/* Description */}
            <p className="mb-[.55rem] lg:mb-4 text-lg/6 text-gray-dark">
              {prop.description}
            </p>

            {/* Learn More */}
            <Link
              href={prop.href}
              className="text-lg/6 font-semibold text-primary-main underline"
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
