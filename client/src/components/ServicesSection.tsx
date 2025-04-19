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
              <div className="h-24 bg-gradient-to-r from-[#081C3A] to-[#0D2E5C] flex items-center justify-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#4BA3F2] rounded-full filter blur-3xl"></div>
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
