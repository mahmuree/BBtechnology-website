import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/data/services";
import { ArrowRight, Share2, Code, User, Megaphone } from "lucide-react";
import { Link } from "wouter";

export default function ServicesSection() {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Share2': return <Share2 className="w-6 h-6 text-white" />;
      case 'Code': return <Code className="w-6 h-6 text-white" />;
      case 'User': return <User className="w-6 h-6 text-white" />;
      case 'Megaphone': return <Megaphone className="w-6 h-6 text-white" />;
      default: return <Share2 className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="pill" className="bg-[#EEF4FF] text-[#4BA3F2] inline-flex px-4 py-1.5 text-sm mb-4">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
            What We Offer
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-[#081C3A] mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Full-service digital solutions tailored to your brand's journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-white rounded-xl shadow-lg border-none overflow-hidden hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-24 flex items-center justify-center relative overflow-hidden">
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
                
                <div className="relative z-10 p-3 rounded-lg bg-[#4BA3F2]/20 backdrop-blur-sm">
                  {getServiceIcon(service.icon)}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#081C3A] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link 
                  href={`/services/${service.title.toLowerCase().includes('social') ? 'social-media-marketing' : 
                                        service.title.toLowerCase().includes('influencer') ? 'influencer-marketing' : 
                                        service.title.toLowerCase().includes('brand') ? 'branding' : 
                                        'web-development'}`}
                  className="flex items-center text-[#4BA3F2] font-medium hover:text-[#3a82d2] transition-colors"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button 
            asChild
            className="bg-gradient-to-r from-[#4BA3F2] to-[#6e8eff] hover:from-[#3a82d2] hover:to-[#5470d6] text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link href="/services">
              Explore All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
