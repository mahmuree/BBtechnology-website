import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Check, ArrowRight, Share2, Megaphone } from "lucide-react";
import { formatCurrency } from "@/lib/utils";
import { pricingCategories } from "@/data/pricingData";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SocialMediaMarketing() {
  // Get the social media pricing category
  const serviceData = pricingCategories.find(cat => cat.id === "smma");

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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Social Media Marketing</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Strategic social media management to boost your brand's online presence and engagement.
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
                Our Social Media Marketing services help you build a strong online presence, engage with your audience, 
                and drive measurable results through strategic content and campaigns across all major platforms.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-[#081C3A] mb-3">Platform Strategy</h3>
                  <p className="text-gray-600">
                    We create custom social media strategies tailored to your business goals, target audience, 
                    and industry, focusing on the platforms that will drive the best results for your brand.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-[#081C3A] mb-3">Content Creation</h3>
                  <p className="text-gray-600">
                    Our team develops engaging, high-quality content that resonates with your audience—from 
                    eye-catching graphics and videos to compelling copy that drives engagement.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-[#081C3A] mb-3">Community Management</h3>
                  <p className="text-gray-600">
                    We actively engage with your audience through comments, messages, and mentions, building 
                    relationships and fostering a loyal community around your brand.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-[#081C3A] mb-3">Paid Advertising</h3>
                  <p className="text-gray-600">
                    Our experts create and manage targeted social media ad campaigns that maximize your ROI, 
                    reach new audiences, and drive specific business objectives.
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
                Social Media Marketing Packages
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
                      {typeof plan.price === 'number' && (
                        <span className="text-gray-500 text-sm ml-1">/month</span>
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
                Need a custom social media solution? Contact us to discuss your specific needs.
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
        <section className="py-16 relative text-white overflow-hidden">
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
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Social Media Presence?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's build a strategic social media presence that connects with your audience and drives real business results.
            </p>
            <Button 
              asChild
              className="bg-white text-[#02124d] hover:bg-gray-100 px-8 py-3 text-lg"
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