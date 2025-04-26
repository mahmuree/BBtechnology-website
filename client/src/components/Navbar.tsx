import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { AlignJustify, X, Sparkles, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import bbLogo from "@/assets/img/bb-logo-new.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();
  const [showServicesButton, setShowServicesButton] = useState(true);

  useEffect(() => {
    // Only set up the scroll listener on the home page
    if (location !== '/') {
      setShowServicesButton(false);
      return;
    }

    const handleScroll = () => {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        const servicesSectionTop = servicesSection.getBoundingClientRect().top;
        // Show button when above services section, hide when at or below
        setShowServicesButton(servicesSectionTop > 100);
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
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Only use smooth scrolling on home page
  const scrollToSection = (sectionId: string) => {
    if (location === '/') {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location === path ? "text-[#4BA3F2]" : "text-white";
  };

  return (
    <header className="sticky top-0 z-50 bg-[#02124d] shadow-none backdrop-blur-sm">
        {/* Premium gradient effect */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[#02124d]"></div>
          <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#4BA3F2]/10 to-transparent"></div>
        </div>
      <div className="container mx-auto px-4 flex items-center justify-between h-20 relative z-10">
        {/* Logo */}
        <Link href="/" className="flex items-center" onClick={closeMenu}>
          <div className="flex items-center">
            <img src={bbLogo} alt="B&B Technology" className="h-12 mr-2" />
            <span className="text-white text-xl font-semibold hidden md:inline">Technology</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className={`${isActive("/")} hover:text-[#4BA3F2] transition duration-200 text-sm font-medium uppercase tracking-wide`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`${isActive("/about")} hover:text-[#4BA3F2] transition duration-200 text-sm font-medium uppercase tracking-wide`}
          >
            About
          </Link>
          <Link
            href="/services"
            className={`${isActive("/services")} hover:text-[#4BA3F2] transition duration-200 text-sm font-medium uppercase tracking-wide`}
          >
            Services
          </Link>
          <Link
            href="/pricing"
            className={`${isActive("/pricing")} hover:text-[#4BA3F2] transition duration-200 text-sm font-medium uppercase tracking-wide`}
          >
            Pricing
          </Link>
          <Link
            href="/contact"
            className={`${isActive("/contact")} hover:text-[#4BA3F2] transition duration-200 text-sm font-medium uppercase tracking-wide`}
          >
            Contact
          </Link>
        </nav>

        {/* Our Services Button - visible only on homepage and when above services section */}
        {location === '/' && showServicesButton && (
          <Button
            onClick={() => scrollToSection('services')}
            variant="ghost"
            className="hidden md:flex items-center text-white hover:text-[#4BA3F2] hover:bg-transparent transition duration-200"
          >
            <span className="mr-1">Our Services</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
        )}

        {/* CTA Button */}
        <Button
          asChild
          variant="outline"
          className="hidden md:flex items-center bg-gradient-to-r from-[#4BA3F2] to-[#6e8eff] text-white hover:from-[#3a82d2] hover:to-[#5470d6] transition duration-300 border-none shadow-md hover:shadow-lg"
        >
          <Link href="/schedule" onClick={closeMenu}>
            <Sparkles className="mr-2 h-4 w-4" />
            Schedule a Call
          </Link>
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <AlignJustify className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden bg-[#02124d] backdrop-blur-sm absolute w-full transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-72 py-4" : "max-h-0 py-0 overflow-hidden"
        )}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <Link
            href="/"
            className={`${isActive("/")} hover:text-[#4BA3F2] transition py-2 font-medium`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`${isActive("/about")} hover:text-[#4BA3F2] transition py-2 font-medium`}
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            href="/services"
            className={`${isActive("/services")} hover:text-[#4BA3F2] transition py-2 font-medium`}
            onClick={closeMenu}
          >
            Services
          </Link>
          {location === '/' && showServicesButton && (
            <button
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-[#4BA3F2] transition py-2 font-medium text-left flex items-center"
            >
              <span className="mr-1">Our Services</span>
              <ChevronDown className="h-4 w-4" />
            </button>
          )}
          <Link
            href="/pricing"
            className={`${isActive("/pricing")} hover:text-[#4BA3F2] transition py-2 font-medium`}
            onClick={closeMenu}
          >
            Pricing
          </Link>
          <Link
            href="/contact"
            className={`${isActive("/contact")} hover:text-[#4BA3F2] transition py-2 font-medium`}
            onClick={closeMenu}
          >
            Contact
          </Link>
          <Link
            href="/schedule"
            className={`${isActive("/schedule")} hover:text-[#4BA3F2] transition py-2 font-medium`}
            onClick={closeMenu}
          >
            Schedule a Call
          </Link>
          <Button
            asChild
            variant="outline"
            className="w-full flex items-center justify-center bg-gradient-to-r from-[#4BA3F2] to-[#6e8eff] text-white hover:from-[#3a82d2] hover:to-[#5470d6] transition duration-300 border-none"
          >
            <Link href="/schedule" onClick={closeMenu}>
              <Sparkles className="mr-2 h-4 w-4" />
              Book Consultation
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
