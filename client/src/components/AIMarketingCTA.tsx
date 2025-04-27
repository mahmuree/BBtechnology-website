import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles, ArrowUpRight, BarChart2, MessageSquare, Zap } from "lucide-react";
import { Link } from "wouter";

export default function AIMarketingCTA() {
  // Chart data for months
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"];
  
  // Chart heights (percentage values)
  const heights = [60, 40, 30, 35, 50, 85, 58, 42, 30, 40];

  return (
    <section id="cta" className="py-24 relative overflow-hidden">
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
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <Badge variant="pill" className="bg-white/20 text-white inline-flex px-4 py-1.5 text-sm mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Advanced AI Solutions
              </Badge>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Take Your Business to<br />
                <span className="text-[#4BA3F2]">the Next Level</span> with AI
              </h2>
              
              <p className="text-gray-200 mb-8 text-lg">
                Leverage cutting-edge AI technology to automate lead generation and customer engagement, driving unprecedented growth for your business
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-lg bg-[#4BA3F2]/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <BarChart2 className="h-5 w-5 text-[#4BA3F2]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Data-Driven Insights</h4>
                    <p className="text-gray-300 text-sm">Make informed decisions with AI-powered analytics</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-lg bg-[#4BA3F2]/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <MessageSquare className="h-5 w-5 text-[#4BA3F2]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Smart Automation</h4>
                    <p className="text-gray-300 text-sm">Streamline your workflow with intelligent tools</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-lg bg-[#4BA3F2]/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <Zap className="h-5 w-5 text-[#4BA3F2]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Scalable Solutions</h4>
                    <p className="text-gray-300 text-sm">Grow your business with flexible AI technology</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-lg bg-[#4BA3F2]/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <ArrowUpRight className="h-5 w-5 text-[#4BA3F2]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">ROI-Focused</h4>
                    <p className="text-gray-300 text-sm">Maximize returns with targeted marketing</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild
                  className="bg-gradient-to-r from-[#4BA3F2] to-[#6e8eff] hover:from-[#3a82d2] hover:to-[#5470d6] text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="/contact">
                    Schedule a Demo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                
                <Button
                  asChild
                  variant="outline"
                  className="bg-[#4BA3F2]/10 border border-[#4BA3F2] text-white hover:bg-[#4BA3F2]/20 px-6 py-3 rounded-lg transition-all duration-300"
                >
                  <Link href="/pricing">
                    View Pricing
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="md:w-5/12">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-white text-lg">Campaign Performance</h3>
                  <div className="bg-green-500/20 text-green-400 text-xs font-medium px-2 py-1 rounded-full flex items-center">
                    <span className="h-2 w-2 rounded-full bg-green-500 mr-1"></span>
                    Growth +24%
                  </div>
                </div>
                
                <div className="w-full h-64 relative">
                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/10 p-3 rounded-lg">
                      <p className="text-xs text-gray-300 mb-1">Leads Generated</p>
                      <p className="text-xl font-bold text-white">245</p>
                      <p className="text-xs text-green-400">↑ 18.5% vs last month</p>
                    </div>
                    
                    <div className="bg-white/10 p-3 rounded-lg">
                      <p className="text-xs text-gray-300 mb-1">Conversion Rate</p>
                      <p className="text-xl font-bold text-white">37.8%</p>
                      <p className="text-xs text-green-400">↑ 5.2% vs last month</p>
                    </div>
                  </div>
                  
                  {/* Chart */}
                  <div className="w-full h-32 relative">
                    <div className="flex items-end justify-between h-full">
                      {heights.map((height, index) => (
                        <div 
                          key={index}
                          className={`w-8 rounded-t-md ${
                            index === 5 
                              ? "bg-gradient-to-t from-[#4BA3F2] to-[#6e8eff]" 
                              : "bg-white/10"
                          }`}
                          style={{ height: `${height}%` }}
                        ></div>
                      ))}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0">
                      <div className="flex justify-between px-1 py-1 text-xs text-gray-400">
                        {months.map((month, index) => (
                          <span key={index}>{month}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
