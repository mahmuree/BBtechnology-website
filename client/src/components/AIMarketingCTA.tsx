import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Info, CircleDot } from "lucide-react";

export default function AIMarketingCTA() {
  // Chart data for months
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"];
  
  // Chart heights (percentage values)
  const heights = [60, 40, 30, 35, 50, 85, 58, 42, 30, 40];

  return (
    <section id="cta" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="bg-gray-200 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Badge variant="pill" className="bg-white text-gray-700 inline-flex px-4 py-1 text-sm mb-4">
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
                Trusted by 10k+ businesses
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-[#081C3A] mb-4">
                Build AI-Powered<br />Marketing Now!
              </h2>
              <p className="text-gray-600 mb-6">
                Automate lead generation and customer engagement in diverse and
                dynamic real-world settings
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#8B5CF6] hover:bg-[#8B5CF6]/90 text-white px-6 py-3 rounded-lg">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  variant="default"
                  className="bg-[#081C3A] hover:bg-[#081C3A]/90 text-white px-6 py-3 rounded-lg"
                >
                  <Info className="w-4 h-4 mr-2" />
                  Learn More
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <Card className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border-none">
                <CardContent className="p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="font-semibold text-[#081C3A] text-lg">Balance</h3>
                    <div className="flex items-center text-green-500 text-sm">
                      <CircleDot className="h-3 w-3 mr-1 fill-green-500 text-green-500" />
                      On track
                    </div>
                  </div>
                  <div className="w-full h-40 relative">
                    <div className="absolute top-0 left-0 p-3">
                      <p className="text-xs text-gray-500">Total Spent</p>
                      <p className="text-xl font-bold text-[#081C3A]">$682.5</p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-32">
                      <div className="flex items-end justify-between h-full px-4">
                        {heights.map((height, index) => (
                          <div 
                            key={index}
                            className={`w-6 rounded-t-md ${
                              index === 5 ? "bg-[#8B5CF6]" : "bg-gray-200"
                            }`}
                            style={{ height: `${height}%` }}
                          ></div>
                        ))}
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0">
                      <div className="flex justify-between px-3 py-1 text-xs text-gray-400">
                        {months.map((month, index) => (
                          <span key={index}>{month}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
