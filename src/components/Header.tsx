"use client";

import { useState } from "react";
import Link from "next/link";
import { useLang, type Lang } from "@/lib/i18n";

export function Header() {
  const { t, lang, setLang } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [langOpen, setLangOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [accountMobileOpen, setAccountMobileOpen] = useState(false);

  const accountLinks = [
    { label: "Tableau de bord — Offres", href: "/dashboard/deals-dashboard" },
    { label: "Tableau de bord — Leads", href: "/dashboard/leads-dashboard" },
    { label: "Paiements", href: "/dashboard/payments" },
    { label: "Contacts", href: "/dashboard/contacts" },
    { label: "Plans d'adhésion", href: "/dashboard/membership-plans" },
    { label: "Options d'adhésion", href: "/dashboard/membership-addons" },
    { label: "Transactions", href: "/dashboard/membership-transactions" },
  ];

  const navItems = [
    { label: "Adhésions", href: "/gym-memberships" },
    { label: "Clubs", href: "/our-clubs" },
    { label: "Cours collectifs", href: "/cours-collectifs" },
    {
      label: "Entraînement",
      dropdown: [
        { label: "Programmes d'entraînement", href: "/training-programs" },
        { label: "À la demande", href: "/training-programs/a-la-demande" },
        { label: "Performance", href: "/training-programs/performance" },
        { label: "Application NY Gym", href: "/mobileapp" },
      ],
    },
    {
      label: "À propos",
      dropdown: [
        { label: "Pourquoi NY Gym", href: "/about-planet-fitness/why-planet-fitness" },
        { label: "Notre histoire", href: "/about-planet-fitness" },
        { label: "Notre mission", href: "/pf-purpose" },
      ],
    },
    { label: "Blog", href: "/blog" },
    { label: "Boutique", href: "https://shop.planetfitness.com/", external: true },
  ];

  const mobileLinks = [
    { label: "Adhésions", href: "/gym-memberships" },
    { label: "Clubs", href: "/our-clubs" },
    { label: "Cours collectifs", href: "/cours-collectifs" },
    { label: "Programmes d'entraînement", href: "/training-programs" },
    { label: "À la demande", href: "/training-programs/a-la-demande" },
    { label: "Performance", href: "/training-programs/performance" },
    { label: "Application NY Gym", href: "/mobileapp" },
    { label: "Pourquoi NY Gym", href: "/about-planet-fitness/why-planet-fitness" },
    { label: "Notre histoire", href: "/about-planet-fitness" },
    { label: "Notre mission", href: "/pf-purpose" },
    { label: "Blog", href: "/blog" },
    { label: "Boutique", href: "https://shop.planetfitness.com/", external: true },
  ];

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
            {navItems.map((item) => {
              if ("dropdown" in item && item.dropdown) {
                const isOpen = openDropdown === item.label;
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={`flex items-center gap-1.5 h-14 px-4 text-base font-medium transition-colors ${
                        isOpen
                          ? "text-primary-main bg-surface-gray"
                          : "text-common-black hover:bg-surface-gray hover:text-primary-main"
                      }`}
                    >
                      {item.label}
                      <ChevronIcon open={isOpen} />
                    </button>
                    {isOpen && (
                      <div
                        className="absolute top-full left-0 min-w-[220px] bg-white border border-border shadow-md z-50"
                        style={{ borderRadius: "0 0 8px 8px" }}
                      >
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="block px-6 py-4 text-base text-common-black hover:text-primary-main transition-colors border-b border-border last:border-0"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href!}
                  className="flex items-center gap-1 h-14 px-4 text-base font-medium text-common-black hover:bg-surface-gray hover:text-primary-main transition-colors"
                  {...("external" in item && item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {item.label}
                  {"external" in item && item.external && (
                    <img src="/images/icons/ExternalLink.svg" alt="" className="w-4 h-4" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-1">
            {/* Language switcher */}
            <div
              className="relative hidden header-lg:block"
              onMouseEnter={() => setLangOpen(true)}
              onMouseLeave={() => setLangOpen(false)}
            >
              <button className="flex items-center gap-1.5 px-4 h-14 text-base text-common-black hover:bg-surface-gray transition-colors">
                <img src={currentLang.flag} alt={currentLang.label} className="w-5 h-5" />
                <span>{currentLang.label}</span>
                <ChevronIcon open={langOpen} />
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

            {/* My Account */}
            <div
              className="relative hidden header-lg:block"
              onMouseEnter={() => setAccountOpen(true)}
              onMouseLeave={() => setAccountOpen(false)}
            >
              <button
                className={`flex items-center gap-2 px-4 h-14 text-base transition-colors ${
                  accountOpen
                    ? "text-primary-main bg-surface-gray"
                    : "text-common-black hover:bg-surface-gray hover:text-primary-main"
                }`}
              >
                <img src="/images/icons/SignIn.svg" alt="" className="w-6 h-6" />
                <span>{t.nav.myAccount}</span>
                <ChevronIcon open={accountOpen} />
              </button>
              {accountOpen && (
                <div
                  className="absolute top-full right-0 min-w-[240px] bg-white border border-border shadow-md z-50"
                  style={{ borderRadius: "0 0 8px 8px" }}
                >
                  {accountLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-6 py-3.5 text-sm text-common-black hover:text-primary-main hover:bg-surface-gray transition-colors border-b border-border last:border-0"
                      onClick={() => setAccountOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Join Now */}
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
            {mobileLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg text-common-black py-4 border-b border-border flex items-center gap-2"
                onClick={() => setMenuOpen(false)}
                {...("external" in link && link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {link.label}
                {"external" in link && link.external && (
                  <img src="/images/icons/ExternalLink.svg" alt="" className="w-4 h-4" />
                )}
              </Link>
            ))}
            <div className="border-b border-border">
              <button
                className="w-full text-lg text-common-black py-4 flex items-center gap-2"
                onClick={() => setAccountMobileOpen((v) => !v)}
              >
                <img src="/images/icons/SignIn.svg" alt="" className="w-5 h-5" />
                {t.nav.myAccount}
                <span className="ml-auto">
                  <ChevronIcon open={accountMobileOpen} />
                </span>
              </button>
              {accountMobileOpen && (
                <div className="pl-7 pb-2 flex flex-col gap-1">
                  {accountLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-base text-gray-medium hover:text-primary-main py-2 border-b border-border last:border-0 block"
                      onClick={() => { setMenuOpen(false); setAccountMobileOpen(false); }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

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
