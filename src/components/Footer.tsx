import Link from "next/link";

const footerLinks = [
  {
    heading: "Info",
    links: [
      { label: "Newsroom", href: "/newsroom" },
      { label: "Careers", href: "/careers" },
      { label: "FAQs", href: "/about-planet-fitness/customer-service" },
      { label: "Directory", href: "/clubs" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    heading: "Partners",
    links: [
      { label: "Franchising", href: "/become-a-franchisee" },
      {
        label: "Investor Relations",
        href: "http://investor.planetfitness.com/investors",
        external: true,
      },
      { label: "PF Purpose", href: "/pf-purpose" },
      { label: "PF Media Network", href: "/pf-media-network" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms and Conditions of Use", href: "/terms-and-conditions-of-use" },
      {
        label: "Do Not Sell or Share My Personal Information",
        href: "/#cookie-settings",
      },
      {
        label: "Your State and EU Privacy Rights",
        href: "/privacy-policy/your-privacy-rights",
      },
      {
        label: "Accessibility",
        href: "/about-planet-fitness/customer-service#region-faq-accordion-3",
      },
    ],
  },
];

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.01a8.16 8.16 0 004.77 1.52V7.1a4.85 4.85 0 01-1-.41z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="w-full bg-primary-main px-6 pb-[4.5rem] text-lg/6 text-white">
      <div className="mx-auto max-w-[71.5rem]">
        {/* Top row: logo + app download */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between py-6 md:py-12 gap-4">
          <img
            src="/images/small-logo.svg"
            alt="Planet Fitness"
            className="hidden md:block h-12 w-auto"
          />
          <a
            href="/mobileapp"
            className="flex h-14 w-full max-w-sm items-center justify-center rounded-full bg-white px-6 font-semibold text-primary-main text-lg/6"
          >
            Download the PF App
          </a>
        </div>

        <hr className="border-white/20" />

        {/* Link columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
          {footerLinks.map((group) => (
            <div key={group.heading}>
              <p className="mb-6 font-bold text-white">{group.heading}</p>
              <ul className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white hover:underline"
                      {...("external" in link && link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="border-white/20" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-6">
          <button className="flex items-center gap-2 text-white">
            <img src="/images/flags/us.svg" alt="US" className="w-5 h-5" />
            <span>US (English)</span>
            <img src="/images/icons/Chevron.svg" alt="" className="w-4 h-4 rotate-90" />
          </button>

          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-white">Follow us:</span>
            <a
              href="https://www.facebook.com/planetfitness"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/planetfitness"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.tiktok.com/@planetfitness"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <TikTokIcon />
            </a>
            <a
              href="https://www.youtube.com/user/planetfitnessnh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <YouTubeIcon />
            </a>
          </div>

          <p className="text-base text-white">© 2026 Planet Fitness Franchising, LLC.</p>
        </div>
      </div>
    </footer>
  );
}
