import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import bbLogo from "@/assets/img/bb-logo-new.png";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  
  // Scroll to section function
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  
  // Animation on load
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-gradient-to-b from-[#02124d] to-[#0B2A4A] overflow-hidden">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#4BA3F2] rounded-full opacity-5 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-[300px] h-[300px] bg-[#4BA3F2] rounded-full opacity-5 blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>
      
      {/* Logo in background (subtle) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.03]">
        <img 
          src={bbLogo} 
          alt="" 
          className="w-[700px] h-[700px] object-contain"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        {/* Main Content with animations */}
        <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Logo */}
          <div className="mb-12 flex justify-center">
            <img 
              src={bbLogo} 
              alt="B&B Technology" 
              className="h-24 md:h-32 filter drop-shadow-[0_0_10px_rgba(75,163,242,0.3)]"
            />
          </div>
          
          {/* Tagline */}
          <h2 className="text-[#4BA3F2] font-semibold text-xl md:text-2xl mb-4">
            Software · Digital Marketing · Branding
          </h2>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight mb-6 bg-clip-text">
            We Code, We Market, <br />
            <span className="bg-gradient-to-r from-[#4BA3F2] to-[#6e8eff] text-transparent bg-clip-text">You Grow.</span>
          </h1>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            B&B Technology provides elegant solutions for companies 
            ready to excel in the digital world.
          </p>
          
          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row justify-center gap-5 mb-16 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Button 
              asChild
              className="bg-gradient-to-r from-[#4BA3F2] to-[#6e8eff] hover:from-[#3a82d2] hover:to-[#5470d6] text-white font-medium py-7 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              <Link href="/services">
                Discover Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 font-medium py-7 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-[1.02]"
            >
              <Link href="/contact">
                Schedule a Consultation
              </Link>
            </Button>
          </div>
          
          {/* Links */}
          <div className={`flex flex-wrap justify-center gap-12 text-gray-400 transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Link href="/pricing" className="text-lg hover:text-white hover:underline transition-colors">
              View Pricing
            </Link>
            <Link href="/about" className="text-lg hover:text-white hover:underline transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="text-lg hover:text-white hover:underline transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <button 
          onClick={() => scrollToSection("services")} 
          className="text-white/50 hover:text-white transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
}