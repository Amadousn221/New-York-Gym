"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Memberships", href: "/gym-memberships" },
  { label: "Why PF", href: "/about-planet-fitness/why-planet-fitness" },
  { label: "About Planet Fitness", href: "/about-planet-fitness" },
  { label: "PF Store", href: "https://shop.planetfitness.com/", external: true },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white h-16 header-lg:h-20 flex items-center px-6 header-lg:px-8">
        <div className="flex w-full items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="header-lg:mt-[-2rem]">
              <img
                src="/images/icons/Logo-Primary.svg"
                alt="Planet Fitness"
                className="h-12 w-10 header-lg:h-[6.5rem] header-lg:w-[5.4rem]"
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden header-lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-1 h-14 px-4 text-base text-common-black hover:bg-surface-gray hover:text-primary-main"
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {link.label}
                {link.external && (
                  <img src="/images/icons/ExternalLink.svg" alt="" className="w-4 h-4" />
                )}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Region selector - desktop only */}
            <button className="hidden header-lg:flex items-center gap-1 px-4 h-14 text-base text-common-black hover:bg-surface-gray">
              <img src="/images/flags/us.svg" alt="US" className="w-5 h-5" />
              <span>US (English)</span>
              <img src="/images/icons/Chevron.svg" alt="" className="w-4 h-4 rotate-90" />
            </button>

            {/* My Account - desktop only */}
            <Link
              href="/login"
              className="hidden header-lg:flex items-center gap-2 px-4 h-14 text-lg text-common-black hover:bg-surface-gray hover:text-primary-main"
            >
              <img src="/images/icons/SignIn.svg" alt="" className="w-6 h-6" />
              <span>My Account</span>
            </Link>

            {/* Join Now */}
            <Link
              href="/gyms"
              className="bg-primary-main text-white rounded-full px-6 h-12 header-lg:h-14 flex items-center font-bold text-lg"
            >
              Join Now
            </Link>

            {/* Hamburger - mobile only */}
            <button
              className="header-lg:hidden ml-2 flex items-center justify-center"
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
        <div className="fixed inset-0 z-[60] bg-white flex flex-col">
          <div className="flex items-center justify-between px-6 h-16 border-b border-border">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <img src="/images/icons/Logo-Primary.svg" alt="Planet Fitness" className="h-12 w-10" />
            </Link>
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <img src="/images/icons/CloseFlyoutMenu.svg" alt="" className="w-8 h-8" />
            </button>
          </div>
          <nav className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg text-common-black py-4 border-b border-border flex items-center gap-2"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
                {link.external && (
                  <img src="/images/icons/ExternalLink.svg" alt="" className="w-4 h-4" />
                )}
              </Link>
            ))}
            <Link
              href="/login"
              className="text-lg text-common-black py-4 border-b border-border flex items-center gap-2"
              onClick={() => setMenuOpen(false)}
            >
              <img src="/images/icons/SignIn.svg" alt="" className="w-5 h-5" />
              My Account
            </Link>
          </nav>
          <div className="px-6 mt-4">
            <Link
              href="/gyms"
              className="bg-primary-main text-white rounded-full px-8 py-4 font-bold text-lg w-full flex items-center justify-center"
              onClick={() => setMenuOpen(false)}
            >
              Join Now
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
