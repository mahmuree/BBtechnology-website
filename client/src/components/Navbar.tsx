import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { AlignJustify, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import bbLogo from "@/assets/img/bb-logo-new.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

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
    <header className="sticky top-0 z-50 bg-[#02124d] shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
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

        {/* CTA Button */}
        <Button
          asChild
          variant="outline"
          className="hidden md:flex items-center bg-gradient-to-r from-[#4BA3F2] to-[#6e8eff] text-white hover:from-[#3a82d2] hover:to-[#5470d6] transition duration-300 border-none shadow-md hover:shadow-lg"
        >
          <Link href="/contact" onClick={closeMenu}>
            <Sparkles className="mr-2 h-4 w-4" />
            Get in Touch
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
          "md:hidden bg-[#02124d] absolute w-full transition-all duration-300 ease-in-out",
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
          <Button
            asChild
            variant="outline"
            className="w-full flex items-center justify-center bg-gradient-to-r from-[#4BA3F2] to-[#6e8eff] text-white hover:from-[#3a82d2] hover:to-[#5470d6] transition duration-300 border-none"
          >
            <Link href="/contact" onClick={closeMenu}>
              <Sparkles className="mr-2 h-4 w-4" />
              Get in Touch
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
