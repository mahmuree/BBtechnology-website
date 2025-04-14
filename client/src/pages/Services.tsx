import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { services } from "@/data/services";
import { Link } from "wouter";
import PremiumNavbar from "@/components/PremiumNavbar";
import Footer from "@/components/Footer";
import { ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <PremiumNavbar />
      <main className="flex-grow bg-[#F8FAFC]">
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <Badge className="inline-flex items-center px-4 py-1.5 mb-5 bg-[#4BA3F2]/10 text-[#4BA3F2] rounded-full font-medium">
                <Zap className="w-3.5 h-3.5 mr-1.5" />
                Premium Solutions
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#081C3A] mb-6">
                Our <span className="text-[#4BA3F2]">Services</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive digital solutions designed to elevate your brand and drive measurable growth
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.1,
                    ease: "easeOut" 
                  }}
                >
                  <div className="bg-white rounded-2xl shadow-lg p-8 h-full hover:shadow-xl hover:translate-y-[-5px] transition-all duration-300 border border-gray-100 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 bottom-0 w-1 bg-gradient-to-b from-[#4BA3F2] to-[#4BA3F2]/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    <div className="h-16 w-16 rounded-2xl bg-[#4BA3F2]/10 flex items-center justify-center mb-6">
                      <svg
                        className="w-8 h-8 text-[#4BA3F2]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d={
                            service.icon === "Share2"
                              ? "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                              : service.icon === "Code"
                              ? "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                              : service.icon === "User"
                              ? "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              : "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                          }
                        ></path>
                      </svg>
                    </div>
                    
                    <h3 className="font-bold text-[#081C3A] text-2xl mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 text-lg">{service.description}</p>
                    
                    <Link 
                      href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`} 
                      className="inline-flex items-center text-[#4BA3F2] font-medium group-hover:underline"
                    >
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-20 p-10 rounded-3xl bg-gradient-to-r from-[#081C3A] to-[#0A1A35] text-white text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiMxYTJiNGEiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')]"></div>
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/5 to-transparent"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6">Ready to Elevate Your Digital Presence?</h3>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                  Explore our pricing options to find the perfect solution for your business needs
                </p>
                <Button 
                  asChild 
                  size="lg"
                  className="bg-[#4BA3F2] hover:bg-[#4BA3F2]/90 text-white border-none px-8 py-6 rounded-xl shadow-[0_4px_14px_rgba(75,163,242,0.25)] hover:shadow-[0_4px_20px_rgba(75,163,242,0.4)]"
                >
                  <Link href="/pricing">
                    View Pricing Plans
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}