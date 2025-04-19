import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Check, ArrowRight, User, Brush, Palette } from "lucide-react";
import { formatCurrency } from "@/lib/utils";
import { pricingCategories } from "@/data/pricingData";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Branding() {
  // Get the branding pricing category
  const serviceData = pricingCategories.find(cat => cat.id === "branding");

  if (!serviceData) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#081C3A]">Service data not found</h2>
            <p className="text-gray-600 mt-2">Please try again later</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-24 pb-12 relative bg-gradient-to-b from-[#02124d] via-[#092381] to-[#0D2E5C]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjMDIxMjRkIiBzdG9wLW9wYWNpdHk9IjAuMDIiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjODA4OGEzIiBzdG9wLW9wYWNpdHk9Ii4wMSIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZmlsbD0idXJsKCNhKSIgZD0iTTAgMGg2MHY2MEgweiIvPjwvc3ZnPg==')] opacity-40"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <Badge variant="pill" className="bg-[#4BA3F2]/20 text-[#4BA3F2] mb-4 inline-flex px-4 py-1.5 text-sm backdrop-blur-sm">
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Branding</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Distinctive brand identities that resonate with your audience and set you apart in the market.
            </p>
            <Button 
              asChild
              className="bg-gradient-to-r from-[#4BA3F2] to-[#6e8eff] hover:from-[#3a82d2] hover:to-[#5470d6] text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="#pricing">
                View Pricing <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Service Description */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-[#081C3A] mb-6">What We Offer</h2>
              <p className="text-gray-700 mb-8 text-lg">
                Our Branding services help you build a strong, cohesive brand identity that communicates your values,
                connects with your target audience, and creates memorable experiences across all touchpoints.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-[#081C3A] mb-3">Brand Strategy</h3>
                  <p className="text-gray-600">
                    We define your brand's positioning, values, personality, and messaging through comprehensive research
                    and strategic development to create a foundation for all your marketing efforts.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-[#081C3A] mb-3">Visual Identity</h3>
                  <p className="text-gray-600">
                    Our design team creates distinctive visual elements including logos, color palettes, typography, and
                    imagery that bring your brand to life and create a consistent, recognizable presence.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-[#081C3A] mb-3">Brand Guidelines</h3>
                  <p className="text-gray-600">
                    We develop comprehensive brand guidelines that document all aspects of your brand identity and
                    provide clear rules for consistent application across all channels and materials.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-[#081C3A] mb-3">Brand Application</h3>
                  <p className="text-gray-600">
                    From business cards and marketing materials to digital assets and environments, we apply
                    your brand identity across all touchpoints to create a cohesive brand experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="pill" className="bg-[#EEF4FF] text-[#4BA3F2] inline-flex px-4 py-1.5 text-sm mb-4">
                Transparent Pricing
              </Badge>
              <h2 className="text-3xl font-bold text-[#081C3A] mb-4">
                Branding Packages
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {serviceData.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {serviceData.plans.map((plan, index) => (
                <Card 
                  key={index} 
                  className={`border-0 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                    plan.popular ? "relative ring-2 ring-[#4BA3F2]" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0">
                      <span className="inline-block bg-[#4BA3F2] text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader className="bg-[#f8fafc] border-b border-gray-100 px-6 py-5">
                    <h3 className="text-xl font-bold text-[#081C3A]">{plan.name}</h3>
                    <p className="text-gray-500 text-sm">{plan.subtitle}</p>
                  </CardHeader>
                  <CardContent className="pt-6 px-6">
                    <div className="mb-5">
                      <span className="text-3xl font-bold text-[#081C3A]">
                        {typeof plan.price === 'number' ? formatCurrency(plan.price) : plan.price}
                      </span>
                      {typeof plan.price === 'number' && plan.name !== 'Custom' && (
                        <span className="text-gray-500 text-sm ml-1">one-time</span>
                      )}
                    </div>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="mr-2 mt-1 text-[#4BA3F2]">
                            <Check className="h-4 w-4" />
                          </span>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="px-6 pt-2 pb-6">
                    <Button 
                      asChild
                      className={
                        plan.popular
                          ? "w-full bg-gradient-to-r from-[#4BA3F2] to-[#6e8eff] hover:from-[#3a82d2] hover:to-[#5470d6] text-white"
                          : "w-full bg-gray-50 text-[#081C3A] hover:bg-gray-100"
                      }
                    >
                      <Link href="/contact">
                        {plan.cta || "Get Started"}
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">
                Need a custom branding solution? Contact us to discuss your specific business needs.
              </p>
              <Button 
                asChild
                variant="outline" 
                className="bg-white border-[#4BA3F2] text-[#4BA3F2] hover:bg-[#4BA3F2]/5"
              >
                <Link href="/contact">
                  Schedule a Consultation
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-[#081C3A] to-[#0D2E5C] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Build a Distinctive Brand?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's create a memorable brand identity that resonates with your audience and sets your business apart.
            </p>
            <Button 
              asChild
              className="bg-white text-[#081C3A] hover:bg-gray-100 px-8 py-3 text-lg"
            >
              <Link href="/contact">
                Get Started Today
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}