import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { Link } from "wouter";
import bbLogo from "@/assets/img/bb-logo-new.png";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [codeText, setCodeText] = useState("");
  const [growText, setGrowText] = useState("");
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const codeFullText = "We Code, We Market,";
  const growFullText = "You Grow.";
  
  // Scroll to section function
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Handle scroll to show/hide the scroll indicator
  useEffect(() => {
    const handleScroll = () => {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        const servicesSectionTop = servicesSection.getBoundingClientRect().top;
        // Show indicator when above services section, hide when at or below
        setShowScrollIndicator(servicesSectionTop > 200);
      }
    };

    // Set initial state
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
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
      {/* Premium background effect with white to #02124d gradient */}
      <div className="absolute inset-0 z-0 overflow-hidden">

        {/* Main background gradient with slightly more emphasis on navy blue */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#02124d] via-[#02124d] via-[#02124d] via-[#092381] to-[#4b5a8b]"></div>
        
        {/* Premium overlay effect - very subtle depth pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjMDIxMjRkIiBzdG9wLW9wYWNpdHk9IjAuMDIiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjODA4OGEzIiBzdG9wLW9wYWNpdHk9Ii4wMSIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZmlsbD0idXJsKCNhKSIgZD0iTTAgMGg2MHY2MEgweiIvPjwvc3ZnPg==')] opacity-40"></div>
        
        {/* Subtle light gradients for depth - adjusted for new direction and emphasizing darker tones */}
        <div className="absolute top-0 inset-x-0 h-[150px] bg-gradient-to-b from-[#02124d]/40 to-transparent"></div>
        <div className="absolute bottom-0 inset-x-0 h-[100px] bg-gradient-to-t from-[#4b5a8b]/15 to-transparent"></div>
        
        {/* Diagonal light accent - adjusted for new direction with more weight on darker tones */}
        <div className="absolute top-0 right-0 bottom-0 left-0 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-gradient-to-br from-[#02124d]/15 via-[#092381]/10 to-transparent transform rotate-12 opacity-30"></div>
        </div>
        
        {/* Subtle light edge accents - adjusted for dark-focused gradient */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#02124d]/40 to-transparent"></div>
        <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#092381]/25 to-transparent"></div>
      </div>
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        {/* Main Content with animations */}
        <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Logo - enlarged and moved up */}
          <div className="mb-16 -mt-8 flex justify-center">
            <img 
              src={bbLogo} 
              alt="B&B Technology" 
              className="h-28 md:h-36 filter drop-shadow-[0_0_12px_rgba(75,163,242,0.4)]"
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
              onClick={() => scrollToSection("services")}
              className="bg-gradient-to-r from-[#4BA3F2] to-[#6e8eff] hover:from-[#3a82d2] hover:to-[#5470d6] text-white font-medium py-7 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] flex items-center"
            >
              Explore All Services
              <ArrowRight className="ml-2 h-5 w-5" />
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
      
      {/* Scroll down indicator - only visible when above services section */}
      {showScrollIndicator && (
        <div className="fixed bottom-12 left-0 right-0 flex justify-center animate-bounce z-20">
          <button 
            onClick={() => scrollToSection("services")} 
            className="text-white/70 hover:text-white transition-colors bg-[#4BA3F2]/10 backdrop-blur-sm p-3 rounded-full shadow-lg shadow-[#4BA3F2]/20"
            aria-label="Scroll down to services"
          >
            <ChevronDown className="h-8 w-8" />
          </button>
        </div>
      )}
    </section>
  );
}