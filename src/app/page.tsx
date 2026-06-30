import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { MembershipsSection } from "@/components/MembershipsSection";
import { ServiceCarousel, AppCarousel } from "@/components/ServiceCarousel";
import { WhyPFSection } from "@/components/WhyPFSection";
import { PFAppSection } from "@/components/PFAppSection";
import { GetStartedSection } from "@/components/GetStartedSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <MembershipsSection />
        <ServiceCarousel />
        <WhyPFSection />
        <PFAppSection />
        <AppCarousel />
        <GetStartedSection />
      </main>
      <Footer />
    </>
  );
}
