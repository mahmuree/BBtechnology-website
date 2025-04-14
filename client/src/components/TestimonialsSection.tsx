import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/data/testimonials";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
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
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              ></path>
            </svg>
            Trusted by Innovators Worldwide
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-[#081C3A] mb-4">
            What Our Users Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from businesses who've transformed their workflows with our solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border-none"
            >
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">{testimonial.content}</p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage 
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${testimonial.name}`} 
                      alt={testimonial.name} 
                    />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium text-[#081C3A]">{testimonial.name}</h4>
                    <p className="text-xs text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <div className="flex -space-x-2">
            {testimonials.slice(0, 4).map((testimonial, index) => (
              <Avatar key={index} className="h-8 w-8 border-2 border-white">
                <AvatarImage 
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${testimonial.name}`} 
                  alt={testimonial.name} 
                />
                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
              </Avatar>
            ))}
          </div>
          <p className="text-sm text-gray-500 ml-3">
            Trusted by 5,000+ innovators worldwide
          </p>
        </div>
      </div>
    </section>
  );
}
