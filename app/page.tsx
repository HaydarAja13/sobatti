import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import TeamsSection from "@/components/TeamsSection";
import PricingSection from "@/components/PricingSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#050816]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <TeamsSection />
      <PricingSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
