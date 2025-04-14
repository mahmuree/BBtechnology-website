import { Button } from "@/components/ui/button";
import { Sparkles, Calendar } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative py-20 md:py-32 bg-[#F5F7FA] overflow-hidden">
      <div className="absolute inset-0 gradient-bg"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-[#081C3A] leading-tight max-w-4xl mx-auto mb-6">
          We Code, We Market,<br />You Grow.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          B&B Technology provides smart coding and marketing solutions for companies ready to grow in the digital world.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            onClick={() => scrollToSection("services")}
            className="bg-[#8B5CF6] hover:bg-[#8B5CF6]/90 text-white font-medium py-6 px-6 rounded-lg transition duration-200"
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Discover Services
          </Button>
          <Button 
            onClick={() => scrollToSection("contact")}
            className="bg-[#081C3A] hover:bg-[#081C3A]/90 text-white font-medium py-6 px-6 rounded-lg transition duration-200"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Save Your Spot
          </Button>
        </div>
      </div>
    </section>
  );
}
