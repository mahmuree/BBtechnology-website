import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { AlignJustify, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function PremiumNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location === path ? "text-[#4BA3F2] font-medium" : "text-white";
  };

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 transition-all duration-300 backdrop-blur-md",
        scrolled 
          ? "bg-[#081C3A]/95 shadow-lg" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center" onClick={closeMenu}>
          <div className="text-white text-3xl font-bold flex items-center">
            <span className="relative overflow-hidden">
              B<span className="text-[#4BA3F2]">.</span>B
              <span className="inline-block ml-2 text-xl text-[#4BA3F2] font-normal">Technology</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link
                href="/"
                className={`${isActive("/")} hover:text-[#4BA3F2] transition duration-200 px-4 py-2`}
              >
                Home
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/about"
                className={`${isActive("/about")} hover:text-[#4BA3F2] transition duration-200 px-4 py-2`}
              >
                About
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className={`${location.startsWith('/services') ? 'text-[#4BA3F2] font-medium' : 'text-white'} hover:text-[#4BA3F2] bg-transparent hover:bg-transparent focus:bg-transparent`}>
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-[#4BA3F2]/20 to-[#0A1A35] p-6 no-underline outline-none focus:shadow-md"
                        href="/services"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium text-white">
                          Our Services
                        </div>
                        <p className="text-sm leading-tight text-white/90">
                          Explore our comprehensive range of digital services designed to elevate your business.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <Link href="/services#social-media" onClick={closeMenu} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#4BA3F2]/10 hover:text-[#4BA3F2] focus:bg-[#4BA3F2]/10">
                      <div className="text-sm font-medium leading-none text-white">Social Media</div>
                      <p className="line-clamp-2 text-sm leading-snug text-white/70">
                        Strategy and content for all platforms
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#web-development" onClick={closeMenu} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#4BA3F2]/10 hover:text-[#4BA3F2] focus:bg-[#4BA3F2]/10">
                      <div className="text-sm font-medium leading-none text-white">Web Development</div>
                      <p className="line-clamp-2 text-sm leading-snug text-white/70">
                        Modern, responsive solutions
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#branding" onClick={closeMenu} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#4BA3F2]/10 hover:text-[#4BA3F2] focus:bg-[#4BA3F2]/10">
                      <div className="text-sm font-medium leading-none text-white">Branding</div>
                      <p className="line-clamp-2 text-sm leading-snug text-white/70">
                        Build your visual identity
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#influencer" onClick={closeMenu} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#4BA3F2]/10 hover:text-[#4BA3F2] focus:bg-[#4BA3F2]/10">
                      <div className="text-sm font-medium leading-none text-white">Influencer Marketing</div>
                      <p className="line-clamp-2 text-sm leading-snug text-white/70">
                        Impactful collaborations
                      </p>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/pricing"
                className={`${isActive("/pricing")} hover:text-[#4BA3F2] transition duration-200 px-4 py-2`}
              >
                Pricing
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/contact"
                className={`${isActive("/contact")} hover:text-[#4BA3F2] transition duration-200 px-4 py-2`}
              >
                Contact
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button
            asChild
            variant="outline"
            className="bg-[#4BA3F2] hover:bg-[#4BA3F2]/90 text-white hover:text-white border-none px-6 py-5 rounded-lg transition-all shadow-[0_4px_20px_rgba(75,163,242,0.25)] hover:shadow-[0_4px_20px_rgba(75,163,242,0.4)]"
          >
            <Link href="/contact" onClick={closeMenu}>
              Get a Quote
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
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
          "lg:hidden bg-[#081C3A]/95 backdrop-blur-md absolute w-full transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-[100vh] py-4" : "max-h-0 py-0 overflow-hidden"
        )}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <Link
            href="/"
            className={`${isActive("/")} hover:text-[#4BA3F2] transition py-3 border-b border-[#1a2b4a] text-lg`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`${isActive("/about")} hover:text-[#4BA3F2] transition py-3 border-b border-[#1a2b4a] text-lg`}
            onClick={closeMenu}
          >
            About
          </Link>
          <div className="py-3 border-b border-[#1a2b4a]">
            <div className={`${location.startsWith('/services') ? 'text-[#4BA3F2] font-medium' : 'text-white'} flex justify-between items-center text-lg`}>
              <Link
                href="/services"
                className="hover:text-[#4BA3F2] transition"
                onClick={closeMenu}
              >
                Services
              </Link>
              <ChevronDown className="h-4 w-4 opacity-70" />
            </div>
            <div className="pl-4 mt-2 space-y-2">
              <Link
                href="/services#social-media"
                className="block text-gray-300 hover:text-[#4BA3F2] transition py-2"
                onClick={closeMenu}
              >
                Social Media
              </Link>
              <Link
                href="/services#web-development"
                className="block text-gray-300 hover:text-[#4BA3F2] transition py-2"
                onClick={closeMenu}
              >
                Web Development
              </Link>
              <Link
                href="/services#branding"
                className="block text-gray-300 hover:text-[#4BA3F2] transition py-2"
                onClick={closeMenu}
              >
                Branding
              </Link>
              <Link
                href="/services#influencer"
                className="block text-gray-300 hover:text-[#4BA3F2] transition py-2"
                onClick={closeMenu}
              >
                Influencer Marketing
              </Link>
            </div>
          </div>
          <Link
            href="/pricing"
            className={`${isActive("/pricing")} hover:text-[#4BA3F2] transition py-3 border-b border-[#1a2b4a] text-lg`}
            onClick={closeMenu}
          >
            Pricing
          </Link>
          <Link
            href="/contact"
            className={`${isActive("/contact")} hover:text-[#4BA3F2] transition py-3 border-b border-[#1a2b4a] text-lg`}
            onClick={closeMenu}
          >
            Contact
          </Link>
          <Button
            asChild
            className="bg-[#4BA3F2] hover:bg-[#4BA3F2]/90 text-white border-none mt-4 py-6"
          >
            <Link href="/contact" onClick={closeMenu}>
              Get a Quote
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}