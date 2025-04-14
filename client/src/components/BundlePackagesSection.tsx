import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Check, ArrowRight, Package, Star, Sparkles, Gift } from "lucide-react";
import { pricingCategories } from "@/data/pricingData";
import { Link } from "wouter";

export default function BundlePackagesSection() {
  // Get the bundle packages from pricingData
  const bundleCategory = pricingCategories.find(category => category.id === "bundles");
  const bundles = bundleCategory ? bundleCategory.plans : [];

  // Icon map for bundle cards
  const getBundleIcon = (index: number) => {
    const icons = [
      <Package className="h-6 w-6 text-white" />,
      <Star className="h-6 w-6 text-white" />,
      <Sparkles className="h-6 w-6 text-white" />,
      <Gift className="h-6 w-6 text-white" />
    ];
    return icons[index % icons.length];
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute -top-64 -left-32 w-96 h-96 bg-[#4BA3F2]/10 rounded-full"></div>
        <div className="absolute -bottom-64 -right-32 w-96 h-96 bg-[#4BA3F2]/10 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge 
            variant="pill" 
            className="bg-[#EEF4FF] text-[#4BA3F2] inline-flex px-4 py-1.5 text-sm mb-4"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Value-Packed Offers
          </Badge>
          
          <h2 className="text-3xl md:text-5xl font-bold text-[#081C3A] mb-6">
            Our Bundle Packages
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Comprehensive solutions combining our best services at special prices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {bundles.map((bundle, index) => (
            <Card 
              key={index} 
              className={`bg-white rounded-xl shadow-lg overflow-hidden border-0 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 ${
                bundle.popular ? 'relative border border-[#4BA3F2]/20' : ''
              }`}
            >
              {bundle.popular && (
                <div className="absolute top-0 right-0 z-10">
                  <div className="bg-gradient-to-r from-[#4BA3F2] to-[#6e8eff] text-white text-xs font-bold py-1 px-3 rounded-bl-lg">
                    BEST VALUE
                  </div>
                </div>
              )}
              
              {/* Icon header */}
              <div className="h-24 bg-gradient-to-r from-[#081C3A] to-[#0D2E5C] flex items-center justify-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-20">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#4BA3F2] rounded-full filter blur-3xl"></div>
                </div>
                <div className="relative z-10 p-3 rounded-lg bg-[#4BA3F2]/20 backdrop-blur-sm">
                  {getBundleIcon(index)}
                </div>
              </div>
              
              <div className={`p-6 ${bundle.popular ? 'bg-[#EEF4FF]/40' : ''}`}>
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-[#081C3A] mb-1">{bundle.name}</h3>
                  <p className="text-gray-500 text-sm">{bundle.subtitle}</p>
                </div>
                
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-bold text-[#081C3A]">€{bundle.price}</span>
                  <span className="text-gray-500 text-sm ml-1">/mo</span>
                </div>
                
                <div className="border-t border-gray-100 pt-4">
                  <ul className="space-y-3">
                    {bundle.features.map((feature, i) => (
                      <li key={i} className="flex">
                        <div className="h-5 w-5 rounded-full bg-[#EEF4FF] flex items-center justify-center mr-3 flex-shrink-0">
                          <Check className="h-3 w-3 text-[#4BA3F2]" />
                        </div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <CardFooter className="p-6 bg-gray-50">
                <Button 
                  asChild
                  className={`w-full ${
                    bundle.popular 
                      ? "bg-gradient-to-r from-[#4BA3F2] to-[#6e8eff] hover:from-[#3a82d2] hover:to-[#5470d6]" 
                      : "bg-[#081C3A] hover:bg-[#081C3A]/90"
                  } text-white font-medium py-6 shadow-md hover:shadow-lg transition-all duration-300`}
                >
                  <Link href="/contact">
                    {bundle.cta || "Get Started"}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center p-1 rounded-full bg-[#EEF4FF] mb-8">
            <div className="bg-white px-6 py-3 rounded-full shadow-sm">
              <span className="text-[#081C3A] font-semibold">Save up to 35%</span>
              <span className="mx-2 text-gray-400">|</span>
              <span className="text-[#4BA3F2]">Compared to individual services</span>
            </div>
          </div>
          
          <Button 
            asChild
            variant="outline" 
            className="border-[#4BA3F2] text-[#4BA3F2] hover:bg-[#4BA3F2] hover:text-white transition-all duration-300 px-8 py-6"
          >
            <Link href="/pricing?tab=bundles">
              View All Bundle Details <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}