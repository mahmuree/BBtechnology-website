import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, ChevronRight, Zap, Package, Code, Users, Palette, Camera } from "lucide-react";
import { formatCurrency } from "@/lib/utils";
import { pricingCategories } from "@/data/pricingData";
import Footer from "@/components/Footer";
import PremiumNavbar from "@/components/PremiumNavbar";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Pricing() {
  const [activeTab, setActiveTab] = useState("smma");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const getTabIcon = (id: string) => {
    switch (id) {
      case 'smma':
        return <Camera className="h-4 w-4 mr-2" />;
      case 'influencer':
        return <Users className="h-4 w-4 mr-2" />;
      case 'branding':
        return <Palette className="h-4 w-4 mr-2" />;
      case 'webdev':
        return <Code className="h-4 w-4 mr-2" />;
      case 'bundles':
        return <Package className="h-4 w-4 mr-2" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <PremiumNavbar />
      <main className="flex-grow bg-[#F8FAFC]">
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4 relative">
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
                Transparent <span className="text-[#4BA3F2]">Pricing</span> Plans
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the perfect plan tailored to your business needs. All packages include dedicated support and high-quality deliverables.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative z-10 -mx-4 p-4"
            >
              <div 
                className={`sticky top-20 z-20 pt-4 pb-4 px-4 backdrop-blur-lg transition-all duration-300 rounded-xl ${
                  scrolled ? "bg-white/80 shadow-md" : "bg-transparent"
                }`}
              >
                <Tabs
                  defaultValue="smma"
                  value={activeTab}
                  onValueChange={setActiveTab}
                  className="w-full max-w-4xl mx-auto"
                >
                  <div className="relative">
                    <TabsList className="w-full bg-white p-1 rounded-xl shadow-sm border border-gray-100 h-auto grid grid-cols-2 md:grid-cols-5">
                      {pricingCategories.map((category) => (
                        <TabsTrigger
                          key={category.id}
                          value={category.id}
                          className="py-3 px-5 data-[state=active]:bg-[#4BA3F2] data-[state=active]:text-white data-[state=active]:shadow-md rounded-lg transition-all font-medium text-sm flex items-center justify-center"
                        >
                          {getTabIcon(category.id)}
                          <span className="hidden md:inline">{category.name}</span>
                          <span className="md:hidden">{category.name.split(' ')[0]}</span>
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </div>

                  <div className="mt-16">
                    {pricingCategories.map((category) => (
                      <TabsContent
                        key={category.id}
                        value={category.id}
                        className="focus-visible:outline-none focus-visible:ring-0 transition-all"
                      >
                        <div className="text-center mb-8">
                          <h2 className="text-3xl font-bold text-[#081C3A] mb-3">
                            {category.name}
                          </h2>
                          <p className="text-gray-600 max-w-2xl mx-auto">
                            {category.description}
                          </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                          {category.plans.map((plan, index) => (
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
                              <Card
                                className={`border h-full rounded-2xl overflow-hidden transition-all hover:shadow-xl group relative ${
                                  plan.popular
                                    ? "shadow-lg border-[#4BA3F2]"
                                    : "border-gray-200 shadow-sm"
                                }`}
                              >
                                {plan.popular && (
                                  <div className="absolute top-0 right-0 left-0">
                                    <div className="bg-[#4BA3F2] text-white text-xs font-bold py-1.5 text-center">
                                      MOST POPULAR
                                    </div>
                                  </div>
                                )}
                                <CardHeader className={`pb-4 ${plan.popular ? "pt-10" : "pt-6"}`}>
                                  <div className="text-xl font-bold text-[#081C3A]">{plan.name}</div>
                                  <div className="mt-3 mb-2">
                                    <span className="text-4xl font-bold text-[#081C3A]">
                                      {typeof plan.price === 'number' ? `€${plan.price}` : plan.price}
                                    </span>
                                  </div>
                                  <p className="text-gray-500 mb-2">{plan.subtitle}</p>
                                  <div className="w-16 h-1 bg-[#4BA3F2]/30 rounded-full mx-auto"></div>
                                </CardHeader>
                                <CardContent className="px-6 py-4">
                                  <ul className="space-y-3">
                                    {plan.features.map((feature, i) => (
                                      <li key={i} className="flex">
                                        <div className={`h-5 w-5 rounded-full ${plan.popular ? 'bg-[#4BA3F2]/20 text-[#4BA3F2]' : 'bg-gray-100 text-gray-600'} flex items-center justify-center mr-3 mt-0.5 flex-shrink-0`}>
                                          <Check className="h-3 w-3" />
                                        </div>
                                        <span className="text-gray-600 text-sm">{feature}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </CardContent>
                                <CardFooter className="pt-4 pb-6 px-6">
                                  <Button
                                    className={`w-full py-6 rounded-xl group-hover:shadow-md transition-all ${
                                      plan.popular
                                        ? "bg-[#4BA3F2] hover:bg-[#4BA3F2]/90 shadow-[0_4px_14px_rgba(75,163,242,0.25)]"
                                        : "bg-[#081C3A] hover:bg-[#081C3A]/90"
                                    } text-white font-medium flex items-center justify-center`}
                                  >
                                    <span>{plan.cta || "Get Started"}</span>
                                    <ChevronRight className="ml-1 h-5 w-5 opacity-70 group-hover:translate-x-1 transition-transform" />
                                  </Button>
                                </CardFooter>
                              </Card>
                            </motion.div>
                          ))}
                        </div>
                      </TabsContent>
                    ))}
                  </div>
                </Tabs>
              </div>
            </motion.div>

            <div className="mt-20 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gradient-to-r from-[#081C3A] to-[#0A1A35] p-10 rounded-3xl shadow-xl text-center text-white overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiMxYTJiNGEiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')]"></div>
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/5 to-transparent"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-4">
                    Need a Custom Solution?
                  </h3>
                  <p className="text-gray-300 max-w-xl mx-auto mb-8">
                    We understand that every business is unique. Contact our team for a tailor-made package designed specifically for your needs.
                  </p>
                  <Button 
                    asChild
                    size="lg"
                    className="bg-white hover:bg-gray-100 text-[#081C3A] font-medium px-8 py-6 rounded-xl shadow-lg"
                  >
                    <Link href="/contact">
                      Get in Touch
                      <ChevronRight className="ml-1 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}