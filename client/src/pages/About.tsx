import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Award, Zap, Clock } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20 bg-white">
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
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                About Us
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-[#081C3A] mb-4">
                We Are B&B Technology
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A leading digital agency specializing in web development, social media marketing, and branding
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#081C3A] mb-4">Our Story</h3>
                <p className="text-gray-600 mb-3">
                  B&B Technology was founded with the mission of combining technology and marketing to help brands grow.
                </p>
                <p className="text-gray-600 mb-3">
                  Fueled by the passion of two young entrepreneurs for software and the digital world, we deliver powerful solutions in SMMA, Web Development, Influencer Marketing, and Personal Branding.
                </p>
                <p className="text-gray-600 mb-3">
                  With our global perspective, we leave our mark not only in the local market but also beyond borders, driven by a clear vision.
                </p>
                <div className="border-l-4 border-[#4BA3F2]/30 pl-4 my-6">
                  <p className="text-gray-700 italic">
                    We don't just follow the rapidly changing dynamics of the digital world — we understand, manage, and transform them into opportunities for brands.
                  </p>
                </div>
                <p className="text-gray-600 mb-3">
                  At B&B Technology, we approach every project not as a service provider, but as a true partner. Our goal is to add real value to the identity, story, and ambitions of every brand we work with.
                </p>
                <p className="text-gray-600 mb-6">
                  Because we believe that in today's world, success is not only about having a great product or service — it's about the powerful story, the right strategy, and the trusted partnership behind it.
                </p>
                <div className="mt-6 mb-4">
                  <p className="text-gray-700 font-medium">
                    Your growth is our success.
                  </p>
                  <p className="text-gray-700 font-medium">
                    Let's write your story together.
                  </p>
                  <p className="text-[#4BA3F2] font-bold mt-2 text-xl">
                    We Code, We Market, You Grow.
                  </p>
                </div>
                <div className="flex space-x-4 mt-8">
                  <Button asChild className="bg-[#081C3A] hover:bg-[#081C3A]/90 text-white">
                    <Link href="/services">Our Services</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-[#081C3A] text-[#081C3A]">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden h-[400px] relative">
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
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 z-10">
                  <h3 className="text-3xl font-bold mb-6 text-center">Our Global Vision</h3>
                  <div className="mb-8 w-20 h-1 bg-white/50 rounded"></div>
                  <p className="text-center text-white/80 max-w-md">
                    With strong European roots, we leverage our multicultural perspective to create solutions that resonate with audiences across the globe.
                  </p>
                  <div className="mt-8 flex space-x-2">
                    <div className="h-2 w-2 bg-white rounded-full animate-pulse"></div>
                    <div className="h-2 w-2 bg-white rounded-full animate-pulse delay-100"></div>
                    <div className="h-2 w-2 bg-white rounded-full animate-pulse delay-200"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-[#081C3A] mb-4">
                Why Choose Us
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our approach combines creativity, technical expertise, and strategic thinking to deliver exceptional results
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-6 text-center">
                <div className="h-12 w-12 rounded-lg bg-[#EEF4FF] flex items-center justify-center mx-auto mb-5">
                  <Users className="h-6 w-6 text-[#4BA3F2]" />
                </div>
                <h4 className="text-lg font-semibold text-[#081C3A] mb-2">Expert Team</h4>
                <p className="text-gray-600">
                  Our team consists of experienced professionals with diverse skills and industry knowledge
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-6 text-center">
                <div className="h-12 w-12 rounded-lg bg-[#EEF4FF] flex items-center justify-center mx-auto mb-5">
                  <Award className="h-6 w-6 text-[#4BA3F2]" />
                </div>
                <h4 className="text-lg font-semibold text-[#081C3A] mb-2">Quality Focus</h4>
                <p className="text-gray-600">
                  We are committed to delivering high-quality work that exceeds client expectations
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-6 text-center">
                <div className="h-12 w-12 rounded-lg bg-[#EEF4FF] flex items-center justify-center mx-auto mb-5">
                  <Zap className="h-6 w-6 text-[#4BA3F2]" />
                </div>
                <h4 className="text-lg font-semibold text-[#081C3A] mb-2">Innovative Solutions</h4>
                <p className="text-gray-600">
                  We stay at the forefront of digital trends to provide cutting-edge solutions
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-6 text-center">
                <div className="h-12 w-12 rounded-lg bg-[#EEF4FF] flex items-center justify-center mx-auto mb-5">
                  <Clock className="h-6 w-6 text-[#4BA3F2]" />
                </div>
                <h4 className="text-lg font-semibold text-[#081C3A] mb-2">Timely Delivery</h4>
                <p className="text-gray-600">
                  We respect deadlines and ensure projects are completed on schedule
                </p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden text-white shadow-xl relative">
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
              
              <div className="p-8 md:p-12 text-center relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to Transform Your Digital Presence?
                </h3>
                <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                  Partner with B&B Technology and take your business to new heights. Our team is ready to help you achieve your digital goals.
                </p>
                <Button asChild className="bg-white text-[#02124d] hover:bg-gray-100">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}