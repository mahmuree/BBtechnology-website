import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { pricingCategories } from "@/data/pricingData";
import { Link } from "wouter";

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState("smma");

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <section id="pricing" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge 
            variant="pill" 
            className="bg-[#EEF4FF] text-[#4BA3F2] inline-flex px-4 py-1.5 text-sm mb-4"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Transparent Pricing
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-[#081C3A] mb-4">
            Find the Perfect Plan for Your Needs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
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
                      <div className="absolute top-0 right-0 z-10">
                        <div className="bg-[#4BA3F2] text-white text-xs font-bold py-1 px-3 rounded-bl-lg">
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

        <div className="mt-16 text-center">
          <Button 
            asChild
            className="bg-[#02124d]/90 text-white font-medium px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:bg-[#02124d]"
          >
            <Link href="/pricing">
              View All Plans <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
        
        <div className="mt-20 rounded-xl overflow-hidden text-white shadow-xl relative">
          {/* Premium background effect with color gradient similar to homepage */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            {/* Main background gradient with navy blue emphasis */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#02124d] via-[#02124d] via-[#092381] to-[#4b5a8b]"></div>
            
            {/* Premium overlay effect - subtle depth pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjMDIxMjRkIiBzdG9wLW9wYWNpdHk9IjAuMDIiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjODA4OGEzIiBzdG9wLW9wYWNpdHk9Ii4wMSIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZmlsbD0idXJsKCNhKSIgZD0iTTAgMGg2MHY2MEgweiIvPjwvc3ZnPg==')] opacity-40"></div>
            
            {/* Diagonal light accent */}
            <div className="absolute top-0 right-0 bottom-0 left-0 overflow-hidden">
              <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-gradient-to-br from-[#02124d]/15 via-[#092381]/10 to-transparent transform rotate-12 opacity-30"></div>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto text-center p-12 relative z-10">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-gray-300 mb-8">
              We understand that every business is unique. Our team can create a tailored package that perfectly fits your specific requirements and budget.
            </p>
            <Button 
              asChild
              className="bg-white text-[#02124d] hover:bg-gray-100 font-medium px-6 shadow-lg"
            >
              <Link href="/contact">
                Contact Our Specialists <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
