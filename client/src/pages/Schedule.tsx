import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationBooking from "@/components/ConsultationBooking";
import { Calendar, Check, Clock, Users } from "lucide-react";

export default function Schedule() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="pt-24 pb-12 relative bg-gradient-to-b from-[#02124d] via-[#092381] to-[#0D2E5C]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjMDIxMjRkIiBzdG9wLW9wYWNpdHk9IjAuMDIiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjODA4OGEzIiBzdG9wLW9wYWNpdHk9Ii4wMSIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZmlsbD0idXJsKCNhKSIgZD0iTTAgMGg2MHY2MEgweiIvPjwvc3ZnPg==')] opacity-40"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <Badge variant="pill" className="bg-[#4BA3F2]/20 text-[#4BA3F2] mb-4 inline-flex px-4 py-1.5 text-sm backdrop-blur-sm">
              Book Now
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Schedule a Consultation</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Book a 30-minute call with our experts to discuss your project needs and discover how we can help your business grow.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-[#EEF4FF] flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-[#4BA3F2]" />
                </div>
                <h3 className="text-xl font-semibold text-[#081C3A] mb-3">30-Minute Sessions</h3>
                <p className="text-gray-600">
                  Focused, efficient consultations that respect your time while addressing your specific needs.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-[#EEF4FF] flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-[#4BA3F2]" />
                </div>
                <h3 className="text-xl font-semibold text-[#081C3A] mb-3">Expert Guidance</h3>
                <p className="text-gray-600">
                  Meet directly with our specialists who have deep expertise in your area of interest.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-[#EEF4FF] flex items-center justify-center mb-4">
                  <Check className="h-8 w-8 text-[#4BA3F2]" />
                </div>
                <h3 className="text-xl font-semibold text-[#081C3A] mb-3">No Obligation</h3>
                <p className="text-gray-600">
                  Free consultations with no pressure—just honest advice to help you make informed decisions.
                </p>
              </div>
            </div>
            
            <ConsultationBooking />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}