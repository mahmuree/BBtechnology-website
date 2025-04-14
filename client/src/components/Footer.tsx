import { Link, useLocation } from "wouter";
import { Instagram, Linkedin, Youtube, Twitter } from "lucide-react";

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
    <footer id="contact" className="bg-[#081C3A] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="inline-block">
              <div className="text-2xl font-bold mb-4">
                B<span className="text-[#4BA3F2]">.</span>
              </div>
            </Link>
            <p className="text-gray-400 max-w-xs">
              Smart coding and marketing solutions for companies ready to grow in
              the digital world.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-white transition">
                    Social Media
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-white transition">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-white transition">
                    Branding
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-white transition">
                    Influencer Marketing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition">
                    Case Studies
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <div className="mb-4 md:mb-0 flex space-x-4">
            <Link href="#" className="text-gray-400 hover:text-white transition">
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition">
              <Twitter className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition">
              <Youtube className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition">
              <Instagram className="w-6 h-6" />
            </Link>
          </div>

          <p className="text-gray-400 text-sm">
            © 2024 B&B Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
