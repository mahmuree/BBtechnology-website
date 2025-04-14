import { cn } from "@/lib/utils";
import { SiApple, SiHubspot, SiSamsung, SiNike, SiAirbnb } from "react-icons/si";

export default function TrustedBy() {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-gray-500 uppercase tracking-wider text-sm font-medium">
            Trusted by industry leaders worldwide
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-24">
          <div className="group">
            <SiApple className="w-12 h-12 text-gray-400 group-hover:text-gray-600 transition-colors duration-300" />
          </div>
          
          <div className="group">
            <SiHubspot className="w-12 h-12 text-gray-400 group-hover:text-gray-600 transition-colors duration-300" />
          </div>
          
          <div className="group">
            <SiSamsung className="w-24 h-12 text-gray-400 group-hover:text-gray-600 transition-colors duration-300" />
          </div>
          
          <div className="group">
            <SiNike className="w-12 h-12 text-gray-400 group-hover:text-gray-600 transition-colors duration-300" />
          </div>
          
          <div className="group">
            <SiAirbnb className="w-16 h-12 text-gray-400 group-hover:text-gray-600 transition-colors duration-300" />
          </div>
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center">
            <div className="h-px w-20 bg-gray-300"></div>
            <p className="text-gray-500 px-4 text-sm">Join our growing network of satisfied clients</p>
            <div className="h-px w-20 bg-gray-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
