import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Crown } from "lucide-react";
import { plans } from "@/data/pricing";
import { cn } from "@/lib/utils";

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const toggleBillingCycle = (cycle: "monthly" | "yearly") => {
    setBillingCycle(cycle);
  };

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
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
            Transparent Pricing, No Surprises
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-[#081C3A] mb-4">
            Pricing Plans
          </h2>
          <p className="text-gray-600 mb-6">Choose Your Plan</p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white rounded-full p-1 shadow-sm mb-8">
            <button
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-full",
                billingCycle === "monthly"
                  ? "bg-gray-100"
                  : "text-gray-600"
              )}
              onClick={() => toggleBillingCycle("monthly")}
            >
              Monthly
            </button>
            <button
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-full",
                billingCycle === "yearly"
                  ? "bg-gray-100"
                  : "text-gray-600"
              )}
              onClick={() => toggleBillingCycle("yearly")}
            >
              Yearly{" "}
              <span className="ml-1 text-green-500 text-xs">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const price = billingCycle === "yearly" 
              ? (plan.price * 0.8).toFixed(0) 
              : plan.price;

            return (
              <Card
                key={index}
                className={cn(
                  "bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border-none p-6 flex flex-col relative",
                  plan.popular && "border-2 border-[#8B5CF6]"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-4 right-8 bg-[#8B5CF6] text-white text-sm font-medium px-3 py-1 rounded-full">
                    Popular
                  </div>
                )}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
                  <div className="flex items-end mb-4">
                    <span className="text-3xl font-bold">${price}</span>
                    <span className="text-gray-500 ml-1">user/month</span>
                  </div>
                  <Button
                    variant={plan.popular ? "default" : "outline"}
                    className={cn(
                      "w-full py-2 px-4 rounded-lg font-medium flex items-center justify-center mb-4",
                      plan.popular
                        ? "bg-[#081C3A] text-white hover:bg-[#081C3A]/90"
                        : "border-gray-300 text-gray-700 hover:bg-gray-50"
                    )}
                  >
                    <Crown className="w-5 h-5 mr-2" />
                    Get Template
                  </Button>
                </div>

                <div className="border-t pt-4">
                  <p className="text-sm text-gray-500 mb-4">{plan.subtitle}</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
