export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface NavDropdown {
  label: string;
  links: NavLink[];
}

export interface MembershipCard {
  name: string;
  badge?: string;
  price: string;
  priceSuffix: string;
  priceNote: string;
  description: string;
  learnMoreHref: string;
  joinNowHref: string;
  variant: "black-card" | "classic";
}

export interface CarouselSlide {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
}

export interface ValueProp {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
  learnMoreHref: string;
}

export interface GetStartedCard {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  heading: string;
  links: NavLink[];
}
