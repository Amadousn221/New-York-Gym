"use client";

import { useState } from "react";
import Link from "next/link";
import { useLang, type Lang } from "@/lib/i18n";

const trainingLinks = [
  { label: "Coaching individuel", href: "/training-programs/personal" },
  { label: "Entraînement en équipe", href: "/training-programs/team-training" },
  { label: "REGYMEN", href: "/training-programs/regymen" },
  { label: "HYROX Training Club", href: "/training-programs/hyrox" },
  { label: "Craft Boxing", href: "/training-programs/craft-boxing" },
  { label: "Fit-Fix", href: "/training-programs/fit-fix" },
];

export function Header() {
  const { t, lang, setLang } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const [trainingOpen, setTrainingOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileTrainingOpen, setMobileTrainingOpen] = useState(false);

  const langOptions: { value: Lang; flag: string; label: string }[] = [
    { value: "fr", flag: "/images/flags/ca.svg", label: "Français" },
    { value: "en", flag: "/images/flags/us.svg", label: "English" },
  ];

  const currentLang = langOptions.find((l) => l.value === lang)!;

  return (
    <>
      <header className="sticky top-0 z-50 bg-white h-16 header-lg:h-20 flex items-center px-6 header-lg:px-8 border-b border-border">
        <div className="flex w-full items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="header-lg:mt-[-2rem]">
              <img
                src="/images/icons/Logo-Primary.svg"
                alt="New York Gym"
                className="h-12 w-10 header-lg:h-[6.5rem] header-lg:w-[5.4rem]"
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden header-lg:flex items-center gap-0">
            <Link href="/gym-memberships" className="flex items-center h-14 px-4 text-base font-medium text-common-black hover:bg-surface-gray hover:text-primary-main transition-colors">
              Adhésions
            </Link>
            <Link href="/our-clubs" className="flex items-center h-14 px-4 text-base font-medium text-common-black hover:bg-surface-gray hover:text-primary-main transition-colors">
              Clubs
            </Link>
            <Link href="/cours-collectifs" className="flex items-center h-14 px-4 text-base font-medium text-common-black hover:bg-surface-gray hover:text-primary-main transition-colors">
              Cours collectifs
            </Link>

            {/* Entraînement dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setTrainingOpen(true)}
              onMouseLeave={() => setTrainingOpen(false)}
            >
              <button
                className={`flex items-center gap-1.5 h-14 px-4 text-base font-medium transition-colors ${
                  trainingOpen
                    ? "text-primary-main bg-surface-gray"
                    : "text-common-black hover:bg-surface-gray hover:text-primary-main"
                }`}
              >
                Entraînement
                <ChevronIcon open={trainingOpen} />
              </button>
              {trainingOpen && (
                <div
                  className="absolute top-full left-0 min-w-[220px] bg-white border border-border shadow-md z-50"
                  style={{ borderRadius: "0 0 8px 8px" }}
                >
                  {trainingLinks.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="block px-6 py-4 text-base text-common-black hover:text-primary-main transition-colors border-b border-border last:border-0"
                      onClick={() => setTrainingOpen(false)}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/blog" className="flex items-center h-14 px-4 text-base font-medium text-common-black hover:bg-surface-gray hover:text-primary-main transition-colors">
              Blog
            </Link>
          </nav>

          {/* Right zone */}
          <div className="flex items-center gap-1">

            {/* Boutique */}
            <a
              href="https://shop.planetfitness.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden header-lg:flex items-center gap-1 h-14 px-4 text-base font-medium text-common-black hover:bg-surface-gray hover:text-primary-main transition-colors"
            >
              Boutique
              <img src="/images/icons/ExternalLink.svg" alt="" className="w-4 h-4" />
            </a>

            {/* Language — flag only */}
            <div
              className="relative hidden header-lg:block"
              onMouseEnter={() => setLangOpen(true)}
              onMouseLeave={() => setLangOpen(false)}
            >
              <button className="flex items-center justify-center w-12 h-14 hover:bg-surface-gray transition-colors">
                <img src={currentLang.flag} alt={currentLang.label} className="w-5 h-5" />
              </button>
              {langOpen && (
                <div
                  className="absolute top-full right-0 min-w-[160px] bg-white border border-border shadow-md z-50"
                  style={{ borderRadius: "0 0 8px 8px" }}
                >
                  {langOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => { setLang(opt.value); setLangOpen(false); }}
                      className={`w-full flex items-center gap-2 px-5 py-3 text-base text-left transition-colors border-b border-border last:border-0 ${
                        lang === opt.value
                          ? "text-primary-main font-semibold"
                          : "text-common-black hover:text-primary-main"
                      }`}
                    >
                      <img src={opt.flag} alt={opt.label} className="w-5 h-5" />
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mon compte — icon only */}
            <Link
              href="/dashboard/leads-dashboard"
              className="hidden header-lg:flex items-center justify-center w-12 h-14 hover:bg-surface-gray transition-colors"
              aria-label="Mon compte"
            >
              <img src="/images/icons/SignIn.svg" alt="" className="w-6 h-6" />
            </Link>

            {/* CTA */}
            <Link
              href="/gyms"
              className="bg-primary-main text-white rounded-full px-6 h-12 header-lg:h-14 flex items-center font-bold text-lg ml-2"
            >
              {t.nav.joinNow}
            </Link>

            {/* Hamburger */}
            <button
              className="header-lg:hidden ml-2 flex items-center justify-center p-2"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <img src="/images/icons/Hamburger.svg" alt="" className="w-8 h-8" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile flyout */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-white flex flex-col overflow-y-auto">
          <div className="flex items-center justify-between px-6 h-16 border-b border-border flex-shrink-0">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <img src="/images/icons/Logo-Primary.svg" alt="New York Gym" className="h-12 w-10" />
            </Link>
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <img src="/images/icons/CloseFlyoutMenu.svg" alt="" className="w-8 h-8" />
            </button>
          </div>

          <nav className="flex flex-col px-6 py-2">
            <Link href="/gym-memberships" className="text-lg text-common-black py-4 border-b border-border" onClick={() => setMenuOpen(false)}>
              Adhésions
            </Link>
            <Link href="/our-clubs" className="text-lg text-common-black py-4 border-b border-border" onClick={() => setMenuOpen(false)}>
              Clubs
            </Link>
            <Link href="/cours-collectifs" className="text-lg text-common-black py-4 border-b border-border" onClick={() => setMenuOpen(false)}>
              Cours collectifs
            </Link>

            {/* Entraînement accordion */}
            <div className="border-b border-border">
              <button
                className="w-full text-lg text-common-black py-4 flex items-center justify-between"
                onClick={() => setMobileTrainingOpen((v) => !v)}
              >
                Entraînement
                <ChevronIcon open={mobileTrainingOpen} />
              </button>
              {mobileTrainingOpen && (
                <div className="pl-4 pb-2 flex flex-col">
                  {trainingLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-base text-gray-medium hover:text-primary-main py-2 border-b border-border last:border-0 block"
                      onClick={() => { setMenuOpen(false); setMobileTrainingOpen(false); }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/blog" className="text-lg text-common-black py-4 border-b border-border" onClick={() => setMenuOpen(false)}>
              Blog
            </Link>

            <a
              href="https://shop.planetfitness.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-common-black py-4 border-b border-border flex items-center gap-2"
              onClick={() => setMenuOpen(false)}
            >
              Boutique
              <img src="/images/icons/ExternalLink.svg" alt="" className="w-4 h-4" />
            </a>

            {/* Mobile language switcher */}
            <div className="flex gap-3 py-4 border-b border-border">
              {langOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => { setLang(opt.value); setMenuOpen(false); }}
                  className={`flex items-center gap-2 text-lg ${
                    lang === opt.value ? "text-primary-main font-semibold" : "text-common-black"
                  }`}
                >
                  <img src={opt.flag} alt={opt.label} className="w-5 h-5" />
                  {opt.label}
                </button>
              ))}
            </div>

            <Link
              href="/dashboard/leads-dashboard"
              className="text-lg text-common-black py-4 border-b border-border flex items-center gap-2"
              onClick={() => setMenuOpen(false)}
            >
              <img src="/images/icons/SignIn.svg" alt="" className="w-5 h-5" />
              Mon compte
            </Link>
          </nav>

          <div className="px-6 mt-4 pb-8">
            <Link
              href="/gyms"
              className="bg-primary-main text-white rounded-full px-8 py-4 font-bold text-lg w-full flex items-center justify-center"
              onClick={() => setMenuOpen(false)}
            >
              {t.nav.joinNow}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M2 4l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
