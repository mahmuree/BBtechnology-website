import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { services } from "@/data/services";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 text-white">
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
          
          {/* Content */}
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="pill" className="bg-white/10 text-white inline-flex px-4 py-1 text-sm mb-6">
                Our Solutions
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                World-Class Services for Your Digital Success
              </h1>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                We deliver comprehensive digital solutions tailored to help your business thrive in today's competitive landscape
              </p>
            </div>
          </div>
        </section>

        {/* Main Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            {/* Social Media Marketing */}
            <div className="mb-20">
              <div className="flex flex-col md:flex-row items-start gap-12">
                <div className="w-full md:w-1/3">
                  <div className="sticky top-20">
                    <div className="h-16 w-16 rounded-lg flex items-center justify-center mb-5 relative overflow-hidden">
                      {/* Premium background with gradient */}
                      <div className="absolute inset-0 bg-gradient-to-b from-[#02124d] via-[#02124d] via-[#092381] to-[#4b5a8b]"></div>
                      <svg
                        className="w-8 h-8 text-white relative z-10"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                        ></path>
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-[#081C3A] mb-4">Social Media Marketing</h2>
                    <p className="text-gray-600 mb-4">Comprehensive social media strategy and management to grow your brand's online presence.</p>
                    <Link 
                      href="/services/social-media-marketing" 
                      className="inline-flex items-center text-[#4BA3F2] font-medium"
                    >
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <h3 className="text-xl font-semibold text-[#081C3A] mb-6">Our Social Media Marketing Services Include:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="bg-white p-5 rounded-xl shadow-sm">
                        <h4 className="font-medium text-[#081C3A] mb-2">Platform Strategy</h4>
                        <p className="text-gray-600 text-sm">Tailored strategies for Instagram, TikTok, LinkedIn, Facebook, and X to achieve your business goals.</p>
                      </div>
                      <div className="bg-white p-5 rounded-xl shadow-sm">
                        <h4 className="font-medium text-[#081C3A] mb-2">Content Creation</h4>
                        <p className="text-gray-600 text-sm">High-quality posts, stories, and videos designed to engage your target audience and build brand recognition.</p>
                      </div>
                      <div className="bg-white p-5 rounded-xl shadow-sm">
                        <h4 className="font-medium text-[#081C3A] mb-2">Community Management</h4>
                        <p className="text-gray-600 text-sm">Active engagement with your followers to build relationships and increase loyalty.</p>
                      </div>
                      <div className="bg-white p-5 rounded-xl shadow-sm">
                        <h4 className="font-medium text-[#081C3A] mb-2">Paid Advertising</h4>
                        <p className="text-gray-600 text-sm">Targeted ad campaigns to expand reach, drive traffic, and generate leads.</p>
                      </div>
                      <div className="bg-white p-5 rounded-xl shadow-sm">
                        <h4 className="font-medium text-[#081C3A] mb-2">Analytics & Reporting</h4>
                        <p className="text-gray-600 text-sm">Comprehensive data analysis and regular reports to track performance and optimize strategies.</p>
                      </div>
                      <div className="bg-white p-5 rounded-xl shadow-sm">
                        <h4 className="font-medium text-[#081C3A] mb-2">Trend Monitoring</h4>
                        <p className="text-gray-600 text-sm">Staying ahead of social media trends to keep your brand relevant and engaging.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Web Development */}
            <div className="mb-20">
              <div className="flex flex-col md:flex-row items-start gap-12">
                <div className="w-full md:w-1/3">
                  <div className="sticky top-20">
                    <div className="h-16 w-16 rounded-lg flex items-center justify-center mb-5 relative overflow-hidden">
                      {/* Premium background with gradient */}
                      <div className="absolute inset-0 bg-gradient-to-b from-[#02124d] via-[#02124d] via-[#092381] to-[#4b5a8b]"></div>
                      <svg
                        className="w-8 h-8 text-white relative z-10"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        ></path>
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-[#081C3A] mb-4">Web Development</h2>
                    <p className="text-gray-600 mb-4">Modern, responsive websites built for performance, user experience, and visual impact.</p>
                    <Link 
                      href="/services/web-development" 
                      className="inline-flex items-center text-[#4BA3F2] font-medium"
                    >
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <h3 className="text-xl font-semibold text-[#081C3A] mb-6">Our Web Development Services Include:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="bg-white p-5 rounded-xl shadow-sm">
                        <h4 className="font-medium text-[#081C3A] mb-2">UI/UX Design</h4>
                        <p className="text-gray-600 text-sm">Intuitive and visually appealing designs focused on user experience and conversion optimization.</p>
                      </div>
                      <div className="bg-white p-5 rounded-xl shadow-sm">
                        <h4 className="font-medium text-[#081C3A] mb-2">Responsive Development</h4>
                        <p className="text-gray-600 text-sm">Fully responsive websites that provide optimal viewing experience across all devices.</p>
                      </div>
                      <div className="bg-white p-5 rounded-xl shadow-sm">
                        <h4 className="font-medium text-[#081C3A] mb-2">E-commerce Solutions</h4>
                        <p className="text-gray-600 text-sm">Custom online stores with secure payment gateways and inventory management systems.</p>
                      </div>
                      <div className="bg-white p-5 rounded-xl shadow-sm">
                        <h4 className="font-medium text-[#081C3A] mb-2">CMS Integration</h4>
                        <p className="text-gray-600 text-sm">User-friendly content management systems that allow you to easily update your website.</p>
                      </div>
                      <div className="bg-white p-5 rounded-xl shadow-sm">
                        <h4 className="font-medium text-[#081C3A] mb-2">Web Application Development</h4>
                        <p className="text-gray-600 text-sm">Custom web applications tailored to your business needs and workflows.</p>
                      </div>
                      <div className="bg-white p-5 rounded-xl shadow-sm">
                        <h4 className="font-medium text-[#081C3A] mb-2">SEO & Performance</h4>
                        <p className="text-gray-600 text-sm">Optimization for search engines and fast loading speeds to improve visibility and user experience.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Branding */}
            <div className="mb-20">
              <div className="flex flex-col md:flex-row items-start gap-12">
                <div className="w-full md:w-1/3">
                  <div className="sticky top-20">
                    <div className="h-16 w-16 rounded-lg flex items-center justify-center mb-5 relative overflow-hidden">
                      {/* Premium background with gradient */}
                      <div className="absolute inset-0 bg-gradient-to-b from-[#02124d] via-[#02124d] via-[#092381] to-[#4b5a8b]"></div>
                      <svg
                        className="w-8 h-8 text-white relative z-10"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        ></path>
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-[#081C3A] mb-4">Personal Branding</h2>
                    <p className="text-gray-600 mb-4">Build your professional online identity and position yourself as an expert in your industry.</p>
                    <Link 
                      href="/services/branding" 
                      className="inline-flex items-center text-[#4BA3F2] font-medium"
                    >
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <h3 className="text-xl font-semibold text-[#081C3A] mb-6">Our Personal Branding Services Include:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="bg-white p-5 rounded-xl shadow-sm">
                        <h4 className="font-medium text-[#081C3A] mb-2">Brand Identity Development</h4>
                        <p className="text-gray-600 text-sm">Creating a distinctive personal brand identity that reflects your values and expertise.</p>
                      </div>
                      <div className="bg-white p-5 rounded-xl shadow-sm">
                        <h4 className="font-medium text-[#081C3A] mb-2">Content Strategy</h4>
                        <p className="text-gray-600 text-sm">Developing a content plan that showcases your knowledge and resonates with your target audience.</p>
                      </div>
                      <div className="bg-white p-5 rounded-xl shadow-sm">
                        <h4 className="font-medium text-[#081C3A] mb-2">LinkedIn Optimization</h4>
                        <p className="text-gray-600 text-sm">Enhancing your LinkedIn profile to attract opportunities and establish industry authority.</p>
                      </div>
                      <div className="bg-white p-5 rounded-xl shadow-sm">
                        <h4 className="font-medium text-[#081C3A] mb-2">Personal Website Development</h4>
                        <p className="text-gray-600 text-sm">Creating a professional portfolio website that showcases your work and accomplishments.</p>
                      </div>
                      <div className="bg-white p-5 rounded-xl shadow-sm">
                        <h4 className="font-medium text-[#081C3A] mb-2">Thought Leadership</h4>
                        <p className="text-gray-600 text-sm">Positioning you as a thought leader through speaking opportunities, publications, and digital presence.</p>
                      </div>
                      <div className="bg-white p-5 rounded-xl shadow-sm">
                        <h4 className="font-medium text-[#081C3A] mb-2">Personal Brand Monitoring</h4>
                        <p className="text-gray-600 text-sm">Ongoing monitoring and management of your online reputation and brand perception.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Influencer Marketing */}
            <div className="mb-20">
              <div className="flex flex-col md:flex-row items-start gap-12">
                <div className="w-full md:w-1/3">
                  <div className="sticky top-20">
                    <div className="h-16 w-16 rounded-lg flex items-center justify-center mb-5 relative overflow-hidden">
                      {/* Premium background with gradient */}
                      <div className="absolute inset-0 bg-gradient-to-b from-[#02124d] via-[#02124d] via-[#092381] to-[#4b5a8b]"></div>
                      <svg
                        className="w-8 h-8 text-white relative z-10"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                        ></path>
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-[#081C3A] mb-4">Influencer Marketing</h2>
                    <p className="text-gray-600 mb-4">Connect with tech and software-focused influencers to drive impactful collaborations for your brand.</p>
                    <Link 
                      href="/services/influencer-marketing" 
                      className="inline-flex items-center text-[#4BA3F2] font-medium"
                    >
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <h3 className="text-xl font-semibold text-[#081C3A] mb-6">Our Influencer Marketing Services Include:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="bg-white p-5 rounded-xl shadow-sm">
                        <h4 className="font-medium text-[#081C3A] mb-2">Influencer Research & Selection</h4>
                        <p className="text-gray-600 text-sm">Identifying the right tech and software influencers aligned with your brand values and target audience.</p>
                      </div>
                      <div className="bg-white p-5 rounded-xl shadow-sm">
                        <h4 className="font-medium text-[#081C3A] mb-2">Campaign Strategy</h4>
                        <p className="text-gray-600 text-sm">Developing effective influencer campaigns that achieve your marketing objectives.</p>
                      </div>
                      <div className="bg-white p-5 rounded-xl shadow-sm">
                        <h4 className="font-medium text-[#081C3A] mb-2">Relationship Management</h4>
                        <p className="text-gray-600 text-sm">Building and maintaining strong relationships with influencers for ongoing collaborations.</p>
                      </div>
                      <div className="bg-white p-5 rounded-xl shadow-sm">
                        <h4 className="font-medium text-[#081C3A] mb-2">Content Collaboration</h4>
                        <p className="text-gray-600 text-sm">Working with influencers to create authentic content that resonates with their audience.</p>
                      </div>
                      <div className="bg-white p-5 rounded-xl shadow-sm">
                        <h4 className="font-medium text-[#081C3A] mb-2">Performance Tracking</h4>
                        <p className="text-gray-600 text-sm">Measuring campaign effectiveness through engagement, reach, conversions, and ROI analysis.</p>
                      </div>
                      <div className="bg-white p-5 rounded-xl shadow-sm">
                        <h4 className="font-medium text-[#081C3A] mb-2">Legal Compliance</h4>
                        <p className="text-gray-600 text-sm">Ensuring all influencer partnerships comply with relevant advertising regulations and disclosure requirements.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Button 
                asChild
                className="bg-[#02124d]/90 text-white font-medium px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:bg-[#02124d]"
              >
                <Link href="/pricing">
                  View Our Pricing <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}