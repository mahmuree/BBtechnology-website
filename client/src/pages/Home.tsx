import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustedBy from "@/components/TrustedBy";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AIMarketingCTA from "@/components/AIMarketingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <TrustedBy />
        <ServicesSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <AIMarketingCTA />
      </main>
      <Footer />
    </div>
  );
}
