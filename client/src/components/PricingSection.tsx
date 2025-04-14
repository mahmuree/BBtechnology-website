import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { plans } from "@/data/pricing";
import { cn } from "@/lib/utils";
import { Link } from "wouter";

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const toggleBillingCycle = (cycle: "monthly" | "yearly") => {
    setBillingCycle(cycle);
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
            Flexible Pricing Options
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-[#081C3A] mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your business needs with no hidden fees or surprises
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white rounded-full p-1 shadow-md mb-8 border border-gray-100">
            <button
              className={cn(
                "px-6 py-2 text-sm font-medium rounded-full transition-all duration-200",
                billingCycle === "monthly"
                  ? "bg-gradient-to-r from-[#4BA3F2] to-[#6e8eff] text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              )}
              onClick={() => toggleBillingCycle("monthly")}
            >
              Monthly
            </button>
            <button
              className={cn(
                "px-6 py-2 text-sm font-medium rounded-full transition-all duration-200",
                billingCycle === "yearly"
                  ? "bg-gradient-to-r from-[#4BA3F2] to-[#6e8eff] text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              )}
              onClick={() => toggleBillingCycle("yearly")}
            >
              Yearly{" "}
              <span className="text-white ml-1 bg-green-500 px-1.5 py-0.5 text-xs rounded-full">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const price = billingCycle === "yearly" 
              ? Math.round(plan.price * 0.8)
              : plan.price;

            return (
              <Card
                key={index}
                className={cn(
                  "bg-white rounded-xl shadow-lg border-0 overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
                  plan.popular && "relative"
                )}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-gradient-to-r from-[#4BA3F2] to-[#6e8eff] text-white text-xs font-bold py-1 px-3 rounded-bl-lg">
                      MOST POPULAR
                    </div>
                  </div>
                )}
                
                <CardHeader className={`pb-4 ${plan.popular ? 'bg-[#EEF4FF]' : ''}`}>
                  <h3 className="text-xl font-bold text-[#081C3A]">{plan.name}</h3>
                  <div className="mt-2">
                    <span className="text-3xl font-bold text-[#081C3A]">€{price}</span>
                    <span className="text-gray-500 ml-1">
                      /{billingCycle === "monthly" ? "mo" : "yr"}
                    </span>
                  </div>
                  <p className="text-gray-500 mt-1">{plan.subtitle}</p>
                </CardHeader>
                
                <CardContent className="pb-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex">
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
                    <Link href="/pricing">
                      Select Plan
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button 
            asChild
            variant="outline" 
            className="border-[#4BA3F2] text-[#4BA3F2] hover:bg-[#4BA3F2] hover:text-white transition-all duration-300"
          >
            <Link href="/pricing">
              View All Pricing Options <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
