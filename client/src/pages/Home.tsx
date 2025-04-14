import PremiumNavbar from "@/components/PremiumNavbar";
import PremiumHeroSection from "@/components/PremiumHeroSection";
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
      <PremiumNavbar />
      <main>
        <PremiumHeroSection />
        <TrustedBy />
        <ServicesSection />
        <PricingSection />
        <FAQSection />
        <TestimonialsSection />
        <AIMarketingCTA />
      </main>
      <Footer />
    </div>
  );
}
