import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, MoveRight, Calendar } from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import bbLogo from "@/assets/img/bb-logo.png";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-[#081C3A] to-[#0D2E5C] overflow-hidden text-white">
      {/* Background Circles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4BA3F2] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#4BA3F2] rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0 text-center md:text-left">
            <Badge
              variant="pill"
              className="bg-white/10 text-white inline-flex px-4 py-1.5 text-sm mb-6"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Premium Digital Solutions
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              We Code, We Market,<br />
              <span className="text-[#4BA3F2]">You Grow.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-8">
              B&B Technology provides smart coding and marketing solutions for companies ready to grow in the digital world.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Button 
                onClick={() => scrollToSection("services")}
                className="bg-gradient-to-r from-[#4BA3F2] to-[#6e8eff] hover:from-[#3a82d2] hover:to-[#5470d6] text-white font-medium py-6 px-6 rounded-lg transition duration-300 shadow-lg hover:shadow-xl"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Discover Services
              </Button>
              <Button 
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 font-medium py-6 px-6 rounded-lg transition duration-300"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Button>
            </div>
            
            <div className="flex items-center justify-center md:justify-start mt-12 gap-8">
              <Link href="/pricing" className="text-gray-300 hover:text-white flex items-center transition-colors">
                View Pricing <MoveRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white flex items-center transition-colors">
                About Us <MoveRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              {/* Main Image Container */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-2xl">
                <img 
                  src={bbLogo} 
                  alt="B&B Technology" 
                  className="w-64 h-64 object-contain"
                />
                
                {/* Floating Stats Cards */}
                <div className="absolute -top-12 -left-12 bg-white p-3 rounded-lg shadow-xl text-gray-800 text-center w-36">
                  <div className="text-xl font-bold text-[#4BA3F2]">50+</div>
                  <div className="text-xs font-medium">Happy Clients</div>
                </div>
                
                <div className="absolute -bottom-8 -right-8 bg-white p-3 rounded-lg shadow-xl text-gray-800 text-center w-36">
                  <div className="text-xl font-bold text-[#4BA3F2]">100%</div>
                  <div className="text-xs font-medium">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
