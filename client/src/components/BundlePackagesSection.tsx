import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";
import { pricingCategories } from "@/data/pricingData";
import { Link } from "wouter";

export default function BundlePackagesSection() {
  // Get the bundle packages from pricingData
  const bundleCategory = pricingCategories.find(category => category.id === "bundles");
  const bundles = bundleCategory ? bundleCategory.plans : [];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
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
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              ></path>
            </svg>
            Complete Solutions
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-[#081C3A] mb-4">
            Bundle Packages for Maximum Value
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions combining our best services at special prices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {bundles.map((bundle, index) => (
            <Card 
              key={index} 
              className={`bg-white rounded-xl shadow-lg overflow-hidden border-0 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 ${
                bundle.popular ? 'relative' : ''
              }`}
            >
              {bundle.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-r from-[#4BA3F2] to-[#6e8eff] text-white text-xs font-bold py-1 px-3 rounded-bl-lg">
                    MOST POPULAR
                  </div>
                </div>
              )}
              <div className={`p-6 border-b ${bundle.popular ? 'bg-[#EEF4FF]' : ''}`}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#081C3A]">{bundle.name}</h3>
                    <p className="text-gray-500 text-sm">{bundle.subtitle}</p>
                  </div>
                  <div className="text-2xl font-bold text-[#081C3A]">
                    €{bundle.price}
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
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
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button 
                  asChild
                  className={`w-full ${
                    bundle.popular 
                      ? "bg-gradient-to-r from-[#4BA3F2] to-[#6e8eff] hover:from-[#3a82d2] hover:to-[#5470d6]" 
                      : "bg-[#081C3A] hover:bg-[#081C3A]/90"
                  } text-white font-medium shadow-md hover:shadow-lg transition-all duration-300`}
                >
                  <Link href="/contact">
                    {bundle.cta || "Get Started"}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            asChild
            variant="outline" 
            className="border-[#4BA3F2] text-[#4BA3F2] hover:bg-[#4BA3F2] hover:text-white transition-all duration-300"
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