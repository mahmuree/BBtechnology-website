import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { formatCurrency } from "@/lib/utils";
import { pricingCategories } from "@/data/pricingData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link, useLocation } from "wouter";

export default function Pricing() {
  const [location] = useLocation();
  const [activeTab, setActiveTab] = useState("smma");

  // Handle URL with tab parameter
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tabParam = params.get("tab");
    if (tabParam && pricingCategories.some(cat => cat.id === tabParam)) {
      setActiveTab(tabParam);
    }
  }, [location]);

  // Update URL when tab changes
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    const url = new URL(window.location.href);
    url.searchParams.set("tab", value);
    window.history.pushState({}, "", url.toString());
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#081C3A] to-[#0D2E5C] py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="pill" className="bg-white/10 text-white inline-flex px-4 py-1 text-sm mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Transparent Pricing
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Invest in Your Digital Success
              </h1>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Choose the perfect plan for your business needs with our comprehensive range of digital solutions
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild className="bg-[#4BA3F2] hover:bg-[#4BA3F2]/90 text-white font-medium">
                  <Link href="/contact">
                    Get a Custom Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <a href="#pricing-options">
                    View All Plans
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Pricing Section */}
        <section id="pricing-options" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="pill" className="bg-[#EEF4FF] text-[#4BA3F2] inline-flex px-4 py-1 text-sm mb-4">
                <svg
                  className="w-4 h-4 inline-block mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                Pricing Plans
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-[#081C3A] mb-4">
                Find the Perfect Plan for Your Needs
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Transparent pricing options designed to fit any budget and project size
              </p>
            </div>

            <Tabs
              defaultValue="smma"
              value={activeTab}
              onValueChange={handleTabChange}
              className="space-y-8"
            >
              <div className="flex justify-center overflow-x-auto pb-2">
                <TabsList className="bg-gray-100 p-1 rounded-lg">
                  {pricingCategories.map((category) => (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className="px-4 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#4BA3F2] data-[state=active]:to-[#6e8eff] data-[state=active]:text-white data-[state=active]:shadow-md rounded-md transition-all whitespace-nowrap"
                    >
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {pricingCategories.map((category) => (
                <TabsContent
                  key={category.id}
                  value={category.id}
                  className="focus-visible:outline-none focus-visible:ring-0 transition-all duration-300 ease-in-out"
                >
                  <div className="text-center mb-12">
                    <h3 className="text-2xl font-bold text-[#081C3A] mb-2">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                      {category.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.plans.map((plan, index) => (
                      <Card
                        key={index}
                        className={`border rounded-xl overflow-hidden transition-all hover:shadow-xl ${
                          plan.popular
                            ? "border-[#4BA3F2] shadow-lg relative transform hover:-translate-y-1"
                            : "border-gray-200 hover:-translate-y-1"
                        }`}
                      >
                        {plan.popular && (
                          <div className="absolute -top-3 right-5 z-10">
                            <div className="bg-gradient-to-r from-[#4BA3F2] to-[#6e8eff] text-white text-xs font-bold py-1 px-4 rounded-full shadow-md">
                              MOST POPULAR
                            </div>
                          </div>
                        )}
                        <CardHeader className={`pb-4 ${plan.popular ? 'bg-[#EEF4FF]' : ''}`}>
                          <div className="text-lg font-bold text-[#081C3A]">{plan.name}</div>
                          <div className="mt-2">
                            <span className="text-3xl font-bold text-[#081C3A]">
                              {typeof plan.price === 'number' ? `€${plan.price}` : plan.price}
                            </span>
                          </div>
                          <p className="text-gray-500 mt-1">{plan.subtitle}</p>
                        </CardHeader>
                        <CardContent className="pb-4">
                          <ul className="space-y-3">
                            {plan.features.map((feature, i) => (
                              <li key={i} className="flex">
                                <div className="h-5 w-5 rounded-full bg-[#EEF4FF] flex items-center justify-center mr-3 flex-shrink-0">
                                  <Check className="h-3 w-3 text-[#4BA3F2]" />
                                </div>
                                <span className="text-gray-600 text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                        <CardFooter>
                          <Button
                            asChild
                            className={`w-full ${
                              plan.popular
                                ? "bg-gradient-to-r from-[#4BA3F2] to-[#6e8eff] hover:from-[#3a82d2] hover:to-[#5470d6]"
                                : "bg-[#081C3A] hover:bg-[#081C3A]/90"
                            } text-white shadow-md hover:shadow-lg transition-all duration-300`}
                          >
                            <Link href="/contact">
                              {plan.cta || "Get Started"}
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>

            <div className="mt-20 bg-gradient-to-r from-[#081C3A] to-[#0D2E5C] p-12 rounded-xl text-white shadow-xl">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
                <p className="text-gray-300 mb-8">
                  We understand that every business is unique. Our team can create a tailored package that perfectly fits your specific requirements and budget.
                </p>
                <Button 
                  asChild
                  className="bg-white text-[#081C3A] hover:bg-gray-100 font-medium px-6 shadow-lg"
                >
                  <Link href="/contact">
                    Contact Our Specialists <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="pill" className="bg-[#EEF4FF] text-[#4BA3F2] inline-flex px-4 py-1 text-sm mb-4">
                <svg
                  className="w-4 h-4 inline-block mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Client Testimonials
              </Badge>
              <h2 className="text-3xl font-bold text-[#081C3A] mb-4">
                What Our Clients Say
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Don't just take our word for it - see what our satisfied clients have to say about our services
              </p>
            </div>

            <div className="relative bg-white p-8 md:p-12 rounded-xl shadow-lg max-w-3xl mx-auto">
              <svg 
                className="absolute text-[#4BA3F2] opacity-10 top-4 left-4 h-24 w-24"
                fill="currentColor"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10,8.5v8H6a2,2,0,0,0-2,2v1H8.5V26H2V19.5l1-6.5a5.5,5.5,0,0,1,5-4.5H10m2-2H8a7.52,7.52,0,0,0-7,5.5L0,18.5V28H10.5V17.5H6V14.5h6Zm18,2v8H26a2,2,0,0,0-2,2v1h4.5V26H22V19.5l1-6.5a5.5,5.5,0,0,1,5-4.5h2m2-2H28a7.52,7.52,0,0,0-7,5.5L20,18.5V28H30.5V17.5H26V14.5h6Z"/>
              </svg>
              <div className="relative z-10">
                <p className="text-gray-700 text-lg mb-6 italic">
                  "Working with B&B Technology transformed our online presence completely. Their team went above and beyond to understand our unique needs and deliver results that exceeded our expectations. The return on investment has been remarkable."
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-[#EEF4FF] flex items-center justify-center mr-4">
                    <span className="text-[#4BA3F2] font-bold text-lg">JM</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#081C3A]">James Miller</h4>
                    <p className="text-gray-500 text-sm">CEO, Innovate Solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#081C3A] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Have questions about our pricing and services? Find answers to common queries below
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-[#081C3A] text-lg mb-2">Do you offer custom packages?</h3>
                <p className="text-gray-600">Yes, we understand that every business has unique needs. We offer custom packages tailored to your specific requirements and budget.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-[#081C3A] text-lg mb-2">Can I upgrade my plan later?</h3>
                <p className="text-gray-600">Absolutely. You can upgrade your plan at any time as your business grows. We make the transition seamless to ensure uninterrupted service.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-[#081C3A] text-lg mb-2">Are there any hidden fees?</h3>
                <p className="text-gray-600">No, we believe in complete transparency. The price you see is the price you pay, with no hidden fees or unexpected charges.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-[#081C3A] text-lg mb-2">How long does implementation take?</h3>
                <p className="text-gray-600">Implementation timelines vary based on the complexity of your project. We provide detailed timelines during the consultation process to set clear expectations.</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">Still have questions? We're here to help.</p>
              <Button 
                asChild
                className="bg-[#081C3A] hover:bg-[#081C3A]/90 text-white font-medium"
              >
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}