import { LanguageProvider } from "@/src/context/LanguageContext";
import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import InteractiveCore from "@/src/components/InteractiveCore";
import StatsGrid from "@/src/components/StatsGrid";
import PartnerCarousel from "@/src/components/PartnerCarousel";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex flex-col flex-1">
          <Hero />
          <InteractiveCore />
          <StatsGrid />
          <PartnerCarousel />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
