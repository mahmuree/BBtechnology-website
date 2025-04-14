import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from "lucide-react";
import { formatCurrency } from "@/lib/utils";
import { pricingCategories } from "@/data/pricingData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Pricing() {
  const [activeTab, setActiveTab] = useState("smma");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="pill" className="bg-gray-200 text-gray-700 inline-flex px-4 py-1 text-sm mb-4">
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
                Pricing
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
              onValueChange={setActiveTab}
              className="space-y-8"
            >
              <div className="flex justify-center">
                <TabsList className="bg-gray-100 p-1 rounded-lg">
                  {pricingCategories.map((category) => (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className="px-4 py-2 data-[state=active]:bg-white data-[state=active]:text-[#081C3A] data-[state=active]:shadow-sm rounded-md transition-all"
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
                  className="focus-visible:outline-none focus-visible:ring-0"
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
                            ? "border-[#4BA3F2] shadow-lg relative"
                            : "border-gray-200"
                        }`}
                      >
                        {plan.popular && (
                          <div className="absolute top-0 right-0">
                            <div className="bg-[#4BA3F2] text-white text-xs font-bold py-1 px-3 rounded-bl-lg">
                              MOST POPULAR
                            </div>
                          </div>
                        )}
                        <CardHeader className="pb-4">
                          <div className="text-lg font-bold text-[#081C3A]">{plan.name}</div>
                          <div className="mt-2">
                            <span className="text-3xl font-bold text-[#081C3A]">
                              {typeof plan.price === 'number' ? `€${plan.price}` : plan.price}
                            </span>
                          </div>
                          <p className="text-gray-500 mt-1">{plan.subtitle}</p>
                        </CardHeader>
                        <CardContent className="pb-4">
                          <ul className="space-y-2">
                            {plan.features.map((feature, i) => (
                              <li key={i} className="flex">
                                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                                <span className="text-gray-600 text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                        <CardFooter>
                          <Button
                            className={`w-full ${
                              plan.popular
                                ? "bg-[#4BA3F2] hover:bg-[#4BA3F2]/90"
                                : "bg-[#081C3A] hover:bg-[#081C3A]/90"
                            } text-white`}
                          >
                            {plan.cta || "Get Started"}
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>

            <div className="mt-20 bg-gray-50 p-8 rounded-xl">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-[#081C3A]">Need a Custom Solution?</h3>
                <p className="text-gray-600">
                  Contact us for a tailor-made package suited to your specific needs
                </p>
              </div>
              <div className="flex justify-center">
                <Button className="bg-[#081C3A] hover:bg-[#081C3A]/90 text-white px-6">
                  Contact Our Team
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}