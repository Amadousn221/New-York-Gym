import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { ClientProviders } from "@/components/ClientProviders";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Planet Fitness | A Gym and Fitness Club for Everyone",
  description:
    "Planet Fitness clubs offer tons of equipment, free training, a clean and welcoming gym, and affordable memberships starting at $15 a month. Learn more!",
  icons: {
    icon: [
      { url: "/seo/favicon-16.png", sizes: "16x16" },
      { url: "/seo/favicon-32.png", sizes: "32x32" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${barlow.variable} ${barlowCondensed.variable} h-full`}
    >
      <body className="h-full bg-white">
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
