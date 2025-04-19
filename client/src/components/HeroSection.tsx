import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { Link } from "wouter";
import bbLogo from "@/assets/img/bb-logo-new.png";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [codeText, setCodeText] = useState("");
  const [growText, setGrowText] = useState("");
  const codeFullText = "We Code, We Market,";
  const growFullText = "You Grow.";
  
  // Scroll to section function
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  
  // Type animation effect
  useEffect(() => {
    let codeIndex = 0;
    let growIndex = 0;
    let codeTimer: ReturnType<typeof setTimeout>;
    let growTimer: ReturnType<typeof setTimeout>;
    
    // First animation - "We Code, We Market,"
    const animateCode = () => {
      if (codeIndex < codeFullText.length) {
        setCodeText(codeFullText.substring(0, codeIndex + 1));
        codeIndex++;
        codeTimer = setTimeout(animateCode, 70);
      } else {
        // Start second animation after a delay
        setTimeout(() => {
          const animateGrow = () => {
            if (growIndex < growFullText.length) {
              setGrowText(growFullText.substring(0, growIndex + 1));
              growIndex++;
              growTimer = setTimeout(animateGrow, 70);
            }
          };
          animateGrow();
        }, 500);
      }
    };
    
    // Start the first animation after component is visible
    setTimeout(animateCode, 500);
    
    // Set visibility for fade-in effect
    setIsVisible(true);
    
    return () => {
      clearTimeout(codeTimer);
      clearTimeout(growTimer);
    };
  }, []);

  return (
    <section className="relative h-screen flex flex-col justify-center bg-[#02124d] overflow-hidden">
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
          
          {/* Main Heading with typing effect */}
          <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight mb-6">
            <div className="flex items-center justify-center h-16 md:h-24">
              <span className="mr-2">{codeText}</span>
            </div>
            <div className="flex items-center justify-center h-16 md:h-24">
              <span 
                className="bg-gradient-to-r from-[#4BA3F2] to-[#6e8eff] text-transparent bg-clip-text animate-pulse"
                style={{filter: "drop-shadow(0 0 10px rgba(75,163,242,0.7))"}}
              >
                {growText}
              </span>
              {growText.length === growFullText.length && (
                <Sparkles className="h-6 w-6 text-[#4BA3F2] animate-pulse ml-2" />
              )}
            </div>
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
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="fixed bottom-12 left-0 right-0 flex justify-center animate-bounce z-20">
        <button 
          onClick={() => scrollToSection("services")} 
          className="text-white/70 hover:text-white transition-colors bg-[#4BA3F2]/10 backdrop-blur-sm p-2 rounded-full"
          aria-label="Scroll down"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
}