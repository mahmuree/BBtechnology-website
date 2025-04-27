import { Link, useLocation } from "wouter";
import { Instagram, Linkedin, Youtube, Twitter, Mail } from "lucide-react";
import bbLogo from "@/assets/img/bb-logo-new.png";

export default function Footer() {
  const [location] = useLocation();

  // Only use smooth scrolling on home page
  const scrollToSection = (sectionId: string) => {
    if (location === '/') {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <footer id="contact" className="bg-[#02124d] text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <Link href="/" className="inline-block">
              <div className="flex items-center mb-4">
                <img src={bbLogo} alt="B&B Technology" className="h-12 mr-2" />
                <span className="text-xl font-semibold">Technology</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6">
              Smart coding and marketing solutions for companies ready to grow in
              the digital world.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-[#4BA3F2] mr-3" />
                <a href="mailto:info@bbtechnology.io" className="text-gray-300 hover:text-white transition">
                  info@bbtechnology.io
                </a>
              </div>

            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-lg relative">
              <span className="relative inline-block">
                Services
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#4BA3F2]"></span>
              </span>
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services/social-media-marketing" className="text-gray-400 hover:text-white transition flex items-center">
                  <span className="text-[#4BA3F2] mr-2">›</span> Social Media Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/web-development" className="text-gray-400 hover:text-white transition flex items-center">
                  <span className="text-[#4BA3F2] mr-2">›</span> Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/branding" className="text-gray-400 hover:text-white transition flex items-center">
                  <span className="text-[#4BA3F2] mr-2">›</span> Branding
                </Link>
              </li>
              <li>
                <Link href="/services/influencer-marketing" className="text-gray-400 hover:text-white transition flex items-center">
                  <span className="text-[#4BA3F2] mr-2">›</span> Influencer Marketing
                </Link>
              </li>
              <li>
                <Link href="/pricing?tab=bundles" className="text-gray-400 hover:text-white transition flex items-center">
                  <span className="text-[#4BA3F2] mr-2">›</span> Bundle Packages
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 text-lg relative">
              <span className="relative inline-block">
                Company
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#4BA3F2]"></span>
              </span>
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition flex items-center">
                  <span className="text-[#4BA3F2] mr-2">›</span> About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition flex items-center">
                  <span className="text-[#4BA3F2] mr-2">›</span> Our Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-white transition flex items-center">
                  <span className="text-[#4BA3F2] mr-2">›</span> Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition flex items-center">
                  <span className="text-[#4BA3F2] mr-2">›</span> Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 text-lg relative">
              <span className="relative inline-block">
                Legal
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#4BA3F2]"></span>
              </span>
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition flex items-center">
                  <span className="text-[#4BA3F2] mr-2">›</span> Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition flex items-center">
                  <span className="text-[#4BA3F2] mr-2">›</span> Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-gray-400 hover:text-white transition flex items-center">
                  <span className="text-[#4BA3F2] mr-2">›</span> Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/gdpr-compliance" className="text-gray-400 hover:text-white transition flex items-center">
                  <span className="text-[#4BA3F2] mr-2">›</span> GDPR Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <div className="mb-4 md:mb-0 flex space-x-4">
            <Link href="#" className="text-gray-400 hover:text-[#4BA3F2] transition bg-gray-800 p-2 rounded-full">
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#4BA3F2] transition bg-gray-800 p-2 rounded-full">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#4BA3F2] transition bg-gray-800 p-2 rounded-full">
              <Youtube className="w-5 h-5" />
            </Link>
            <Link href="https://www.instagram.com/bbtechnology.io" className="text-gray-400 hover:text-[#4BA3F2] transition bg-gray-800 p-2 rounded-full">
              <Instagram className="w-5 h-5" />
            </Link>
          </div>

          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} B&B Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
