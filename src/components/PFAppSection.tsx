"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";

export function PFAppSection() {
  const { t } = useLang();
  const a = t.pfApp;

  return (
    <section className="relative w-full bg-primary-main bg-purpleYellowRightGlare lg:h-[44.5rem] overflow-hidden">
      <div className="relative flex flex-col h-full mx-auto max-w-[42.9rem] lg:max-w-none lg:px-12 xl:px-24 px-6 pt-16">
        <div className="lg:max-w-[42.9rem]">
          <h2 className="font-condensed text-[3rem]/none lg:text-[4rem]/none text-white mb-6">
            {a.prefix}{" "}
            <span className="text-secondary-main">{a.highlight}</span>{" "}
            {a.suffix}
          </h2>
          <p className="text-white text-lg/6 mb-6 lg:mb-8">{a.description}</p>
          <Link
            href="/mobileapp"
            className="inline-flex bg-white text-primary-main rounded-[1.75rem] px-8 h-14 items-center font-semibold text-lg/6 mb-[4.3rem]"
          >
            {a.cta}
          </Link>
        </div>

        <img
          src="/images/pf-app-phone.webp"
          alt="Mobile app Main screen"
          className="ml-[50%] aspect-square w-[21rem] translate-x-[-49%] md:w-[35.6rem] md:translate-x-[-47.7%] lg:absolute lg:bottom-0 lg:right-0 lg:w-[35rem] lg:translate-x-0 lg:ml-0"
        />
      </div>
    </section>
  );
}
