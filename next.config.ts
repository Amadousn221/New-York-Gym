import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.ctfassets.net" },
      { protocol: "https", hostname: "downloads.ctfassets.net" },
      { protocol: "https", hostname: "assets.ctfassets.net" },
      { protocol: "https", hostname: "www.planetfitness.com" },
      { protocol: "https", hostname: "www.goodlifefitness.com" },
    ],
  },
};

export default nextConfig;
