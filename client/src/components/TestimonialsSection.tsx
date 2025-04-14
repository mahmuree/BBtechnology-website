import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/data/testimonials";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sparkles, Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleTestimonials = testimonials.slice(activeIndex, activeIndex + 3);
  
  const handlePrevious = () => {
    setActiveIndex(prev => Math.max(0, prev - 1));
  };
  
  const handleNext = () => {
    setActiveIndex(prev => Math.min(testimonials.length - 3, prev + 1));
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 pointer-events-none"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-40 left-10 w-64 h-64 bg-[#4BA3F2]/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-64 h-64 bg-[#4BA3F2]/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge 
            variant="pill" 
            className="bg-[#EEF4FF] text-[#4BA3F2] inline-flex px-4 py-1.5 text-sm mb-4"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Client Success Stories
          </Badge>
          
          <h2 className="text-3xl md:text-5xl font-bold text-[#081C3A] mb-6">
            What Our Clients Say
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Hear from businesses who've transformed their digital presence with our solutions
          </p>
        </div>

        <div className="relative">
          {/* Navigation buttons */}
          <div className="absolute top-1/2 -left-4 -translate-y-1/2 z-10 hidden md:block">
            <Button 
              onClick={handlePrevious} 
              disabled={activeIndex === 0}
              size="icon" 
              variant="outline"
              className="h-10 w-10 rounded-full bg-white border border-gray-200 text-gray-600 shadow-md hover:shadow-lg transition-all disabled:opacity-50"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous</span>
            </Button>
          </div>
          
          <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-10 hidden md:block">
            <Button
              onClick={handleNext}
              disabled={activeIndex >= testimonials.length - 3}
              size="icon"
              variant="outline"
              className="h-10 w-10 rounded-full bg-white border border-gray-200 text-gray-600 shadow-md hover:shadow-lg transition-all disabled:opacity-50"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visibleTestimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white rounded-xl shadow-lg border-0 overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <CardContent className="p-8 relative">
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 text-[#4BA3F2]/10">
                    <Quote className="h-12 w-12" />
                  </div>
                
                  {/* Rating Stars */}
                  <div className="flex mb-4">
                    {Array(5).fill(0).map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                
                  <p className="text-gray-700 mb-6 text-lg relative z-10">"{testimonial.content}"</p>
                  
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4 ring-2 ring-[#4BA3F2]/20 ring-offset-2">
                      <AvatarImage 
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${testimonial.name}`} 
                        alt={testimonial.name} 
                      />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-[#081C3A]">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Mobile navigation */}
          <div className="flex justify-center mt-8 gap-2 md:hidden">
            <Button 
              onClick={handlePrevious} 
              disabled={activeIndex === 0}
              size="icon" 
              variant="outline"
              className="h-10 w-10 rounded-full bg-white border border-gray-200 text-gray-600"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <Button
              onClick={handleNext}
              disabled={activeIndex >= testimonials.length - 3}
              size="icon"
              variant="outline"
              className="h-10 w-10 rounded-full bg-white border border-gray-200 text-gray-600"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <div className="bg-[#EEF4FF] px-6 py-4 rounded-2xl flex items-center">
            <div className="flex -space-x-3 mr-4">
              {testimonials.slice(0, 5).map((testimonial, index) => (
                <Avatar key={index} className="h-10 w-10 border-2 border-white">
                  <AvatarImage 
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${testimonial.name}`} 
                    alt={testimonial.name} 
                  />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <div>
              <p className="text-[#081C3A] font-medium">
                Join 500+ satisfied clients worldwide
              </p>
              <p className="text-sm text-gray-600">
                Businesses just like yours transforming their digital presence
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
