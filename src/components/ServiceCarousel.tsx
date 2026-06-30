"use client";

import { PromoCarousel } from "./PromoCarousel";
import { useLang } from "@/lib/i18n";

export function ServiceCarousel() {
  const { t } = useLang();
  return <PromoCarousel slides={t.services} initialIndex={1} />;
}

export function AppCarousel() {
  const { t } = useLang();
  return <PromoCarousel slides={t.carousel2} />;
}
