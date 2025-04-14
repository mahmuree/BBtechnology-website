import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/data/services";
import { InfoIcon } from "lucide-react";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="pill" className="inline-flex px-4 py-1 text-sm mb-4">
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
            Full-service digital solutions tailored to your brand's journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border-none"
            >
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-[#081C3A] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Button
                  variant="default"
                  className="bg-[#081C3A] text-white px-4 py-2 rounded-lg hover:bg-[#081C3A]/90 transition duration-200 flex items-center text-sm font-medium"
                >
                  <InfoIcon className="w-4 h-4 mr-2" />
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
