import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AlignJustify, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#081C3A] bg-opacity-95 shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="text-white text-2xl font-bold">
            B<span className="text-[#4BA3F2]">.</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("services")}
            className="text-white hover:text-[#4BA3F2] transition duration-200"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className="text-white hover:text-[#4BA3F2] transition duration-200"
          >
            Pricing
          </button>
          <button
            className="text-white hover:text-[#4BA3F2] transition duration-200"
          >
            Changelog
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-white hover:text-[#4BA3F2] transition duration-200"
          >
            Contact
          </button>
        </nav>

        {/* CTA Button */}
        <Button
          onClick={() => scrollToSection("services")}
          variant="outline"
          className="hidden md:flex items-center bg-[#F5F7FA] text-[#081C3A] hover:bg-gray-100 transition duration-200 border-none"
        >
          <Sparkles className="mr-2 h-4 w-4" />
          Discover Services
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
          "md:hidden bg-[#081C3A] absolute w-full transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-64 py-4" : "max-h-0 py-0 overflow-hidden"
        )}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <button
            onClick={() => scrollToSection("services")}
            className="text-white hover:text-[#4BA3F2] transition py-2"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className="text-white hover:text-[#4BA3F2] transition py-2"
          >
            Pricing
          </button>
          <button
            className="text-white hover:text-[#4BA3F2] transition py-2"
          >
            Changelog
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-white hover:text-[#4BA3F2] transition py-2"
          >
            Contact
          </button>
          <Button
            onClick={() => scrollToSection("services")}
            variant="outline"
            className="w-full flex items-center justify-center bg-[#F5F7FA] text-[#081C3A] hover:bg-gray-100 transition border-none"
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Discover Services
          </Button>
        </div>
      </div>
    </header>
  );
}
