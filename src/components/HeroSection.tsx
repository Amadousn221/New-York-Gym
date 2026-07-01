"use client";

import { useLang } from "@/lib/i18n";

export function HeroSection() {
  const { t } = useLang();

  return (
    <section className="relative w-full bg-hero-gradient-1 overflow-hidden">
      <div className="relative flex flex-col-reverse md:flex-row items-end md:items-stretch min-h-[538px]">
        {/* Left: search form */}
        <div className="flex flex-col justify-end pb-12 px-6 md:px-12 md:max-w-[480px] lg:max-w-[520px] w-full z-10 md:pb-16">
          <h1 className="sr-only">{t.hero.srText}</h1>
          <form
            action="/gyms"
            className="flex items-center bg-white rounded-full shadow-md overflow-hidden"
          >
            <input
              type="search"
              name="location"
              placeholder={t.hero.searchPlaceholder}
              className="flex-1 bg-transparent px-5 py-3 text-base/6 text-common-black outline-none placeholder:text-gray-medium min-w-0"
            />
            <button
              type="submit"
              className="bg-primary-main text-white rounded-full m-2 px-5 py-3 flex items-center gap-2 font-semibold text-lg/6 whitespace-nowrap flex-shrink-0"
            >
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="hidden lg:inline">{t.hero.findAClub}</span>
            </button>
          </form>
        </div>

        {/* Center: hero fitness model */}
        <div className="flex-1 flex items-end justify-center">
          <img
            src="/images/hero-fitness-model.webp"
            alt={t.hero.srText}
            className="w-auto md:max-h-[334px] object-contain object-bottom"
          />
        </div>

        {/* Right: promo bg image */}
        <div className="hidden lg:block w-[280px] xl:w-[320px] self-stretch flex-shrink-0">
          <img
            src="/images/hero-promo-bg.webp"
            alt="Rejoins le club dès aujourd'hui !"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Spacer for mobile overlap */}
      <div className="h-[7.5rem] md:h-0" />
    </section>
  );
}
