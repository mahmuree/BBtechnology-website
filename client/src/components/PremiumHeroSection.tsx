import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function PremiumHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 pb-32 overflow-hidden bg-gradient-to-b from-[#081C3A] to-[#0A1A35]">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-36 w-96 h-96 bg-[#4BA3F2]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-36 w-96 h-96 bg-[#4BA3F2]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiMxYTJiNGEiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#4BA3F2]/10 text-[#4BA3F2] text-sm font-medium mb-6">
                  <Sparkles className="mr-2 h-4 w-4" />
                  <span>Premium Digital Agency</span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white mb-6"
              >
                We <span className="text-[#4BA3F2]">Code</span>, We <span className="text-[#4BA3F2]">Market</span>,<br />
                You <span className="text-[#4BA3F2]">Grow</span>.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0"
              >
                B&B Technology combines elite software development with strategic marketing to elevate your brand in the digital landscape.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-[#4BA3F2] hover:bg-[#4BA3F2]/90 text-white font-medium px-8 py-6 rounded-xl transition-all shadow-[0_4px_20px_rgba(75,163,242,0.25)] hover:shadow-[0_4px_20px_rgba(75,163,242,0.4)]"
                >
                  <Link href="/services">
                    Explore Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-[#4BA3F2] text-[#4BA3F2] hover:bg-[#4BA3F2]/10 font-medium px-8 py-6 rounded-xl transition-all"
                >
                  <Link href="/pricing">
                    See Pricing
                  </Link>
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="relative mx-auto max-w-md">
                {/* Abstract shape representing digital services */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#4BA3F2] to-[#081C3A] rounded-3xl blur-3xl opacity-20"></div>
                
                <div className="relative bg-gradient-to-br from-[#0A1A35] to-[#081C3A] border border-[#1a2b4a] p-1 rounded-3xl shadow-2xl overflow-hidden">
                  {/* Glossy reflection on top */}
                  <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/10 to-transparent"></div>
                  
                  <div className="bg-[#0A1A35] rounded-[calc(1.5rem-2px)] p-8 relative z-10">
                    <div className="flex flex-col gap-8">
                      <div className="flex items-center justify-between">
                        <div className="w-40 h-12 bg-gradient-to-r from-[#4BA3F2] to-[#4BA3F2]/70 rounded-xl flex items-center justify-center">
                          <div className="text-xl font-bold text-white">B.B</div>
                        </div>
                        <div className="h-10 w-10 rounded-full bg-[#4BA3F2]/20 flex items-center justify-center">
                          <ArrowRight className="h-5 w-5 text-[#4BA3F2]" />
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-[#4BA3F2]/20 flex items-center justify-center">
                              <div className="w-5 h-5 rounded-full bg-[#4BA3F2]/60"></div>
                            </div>
                            <div className="flex-1">
                              <div className="h-2.5 bg-white/10 rounded-full w-full"></div>
                              <div className="h-2 bg-white/5 rounded-full w-3/4 mt-2"></div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-[#4BA3F2]/10 rounded-xl p-4">
                          <div className="text-[#4BA3F2] font-medium mb-2">Web</div>
                          <div className="h-2 bg-white/10 rounded-full w-1/2"></div>
                          <div className="h-2 bg-white/5 rounded-full w-3/4 mt-2"></div>
                        </div>
                        <div className="bg-[#4BA3F2]/10 rounded-xl p-4">
                          <div className="text-[#4BA3F2] font-medium mb-2">Social</div>
                          <div className="h-2 bg-white/10 rounded-full w-1/2"></div>
                          <div className="h-2 bg-white/5 rounded-full w-3/4 mt-2"></div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="bg-[#1a2b4a] h-24 rounded-xl flex items-center justify-center">
                            <div className="h-10 w-10 rounded-full bg-[#4BA3F2]/20 flex items-center justify-center">
                              <div className="h-5 w-5 rounded-md bg-[#4BA3F2]/40"></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-xl bg-gradient-to-br from-[#0A1A35] to-[#081C3A] border border-[#1a2b4a] p-1 shadow-xl rotate-12">
                  <div className="bg-[#0A1A35] rounded-[calc(0.75rem-2px)] p-4 h-full">
                    <div className="w-full h-2 bg-white/10 rounded mb-2"></div>
                    <div className="w-2/3 h-2 bg-white/5 rounded"></div>
                    <div className="w-8 h-8 bg-[#4BA3F2]/20 rounded-full mt-4 mx-auto"></div>
                  </div>
                </div>
                
                <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-xl bg-gradient-to-br from-[#0A1A35] to-[#081C3A] border border-[#1a2b4a] p-1 shadow-xl -rotate-12">
                  <div className="bg-[#0A1A35] rounded-[calc(0.75rem-2px)] p-4 h-full flex flex-col">
                    <div className="w-12 h-12 bg-[#4BA3F2]/20 rounded-lg mb-auto mt-auto mx-auto flex items-center justify-center">
                      <Sparkles className="h-6 w-6 text-[#4BA3F2]" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center"
          >
            <div className="text-[#4BA3F2] text-sm mb-2">Scroll Down</div>
            <div className="w-6 h-10 rounded-full border-2 border-[#4BA3F2] flex justify-center">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-[#4BA3F2] rounded-full mt-2"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}