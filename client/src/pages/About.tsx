import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import PremiumNavbar from "@/components/PremiumNavbar";
import Footer from "@/components/Footer";
import { Users, Award, Zap, Clock } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <PremiumNavbar />
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
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-[#081C3A]">Our Story</h3>
                <p className="text-gray-600">
                  Founded in 2020, B&B Technology was born out of a passion for helping businesses thrive in the digital realm. Our founders recognized that many companies struggled to effectively navigate the ever-evolving digital landscape, and set out to build an agency that would provide comprehensive solutions.
                </p>
                <p className="text-gray-600">
                  What began as a small team of dedicated professionals has grown into a dynamic agency with expertise across web development, digital marketing, content creation, and brand strategy. We've helped businesses of all sizes—from startups to established enterprises—achieve significant growth through our tailored digital solutions.
                </p>
                <div className="flex space-x-4 mt-8">
                  <Button asChild className="bg-[#081C3A] hover:bg-[#081C3A]/90 text-white">
                    <Link href="/services">Our Services</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-[#081C3A] text-[#081C3A]">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden bg-gray-100 h-[400px] flex items-center justify-center">
                <div className="text-2xl font-bold text-gray-400">Team Image</div>
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

            <div className="bg-[#081C3A] rounded-xl p-8 md:p-12 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Transform Your Digital Presence?
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                Partner with B&B Technology and take your business to new heights. Our team is ready to help you achieve your digital goals.
              </p>
              <Button asChild className="bg-white text-[#081C3A] hover:bg-gray-100">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}