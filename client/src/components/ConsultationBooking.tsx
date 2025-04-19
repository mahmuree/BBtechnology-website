import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Calendly integration component for scheduling
export default function ConsultationBooking() {
  const [selectedService, setSelectedService] = useState<string>("webdev");
  const [isLoaded, setIsLoaded] = useState(false);

  // Define the calendly URLs for each service
  const calendlyUrls = {
    webdev: "https://calendly.com/d/gk8-mw3-vz4/web-development-consultation",
    smma: "https://calendly.com/d/gk8-nzw-b2g/social-media-marketing-consultation",
    branding: "https://calendly.com/d/gk8-p7n-x79/branding-consultation",
    influencer: "https://calendly.com/d/gk8-q2d-fd7/influencer-marketing-consultation"
  };

  // Add Calendly script when component mounts
  useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    
    head?.appendChild(script);
    
    script.onload = () => {
      setIsLoaded(true);
    };
    
    return () => {
      // Clean up script when component unmounts
      if (head?.contains(script)) {
        head.removeChild(script);
      }
    };
  }, []);

  // Re-initialize Calendly when service changes
  useEffect(() => {
    if (isLoaded && (window as any).Calendly) {
      (window as any).Calendly.initInlineWidget({
        url: calendlyUrls[selectedService as keyof typeof calendlyUrls],
        parentElement: document.getElementById('calendly-embed'),
        prefill: {},
        utm: {}
      });
    }
  }, [isLoaded, selectedService]);

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-[#02124d] to-[#092381] text-white p-6 text-center">
        <h3 className="text-2xl font-bold mb-2">Schedule a Consultation</h3>
        <p className="text-gray-200">
          Book a 30-minute call with our experts to discuss your project requirements
        </p>
      </div>
      
      <div className="p-6">
        <div className="mb-6">
          <Label htmlFor="service" className="text-lg font-medium text-[#081C3A] mb-2 block">
            Select Service Type
          </Label>
          <Tabs defaultValue="webdev" value={selectedService} onValueChange={setSelectedService} className="w-full">
            <TabsList className="grid grid-cols-4 mb-6">
              <TabsTrigger value="webdev" className="text-sm">Web Development</TabsTrigger>
              <TabsTrigger value="smma" className="text-sm">Social Media</TabsTrigger>
              <TabsTrigger value="branding" className="text-sm">Branding</TabsTrigger>
              <TabsTrigger value="influencer" className="text-sm">Influencer</TabsTrigger>
            </TabsList>
            
            <TabsContent value="webdev" className="mt-0">
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h4 className="font-medium text-[#081C3A]">Web Development Consultation</h4>
                <p className="text-gray-600 text-sm mt-1">
                  Discuss website design, functionality, performance optimization, or e-commerce solutions.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="smma" className="mt-0">
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h4 className="font-medium text-[#081C3A]">Social Media Marketing Consultation</h4>
                <p className="text-gray-600 text-sm mt-1">
                  Explore strategies to grow your brand's presence across social platforms and increase engagement.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="branding" className="mt-0">
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h4 className="font-medium text-[#081C3A]">Branding Consultation</h4>
                <p className="text-gray-600 text-sm mt-1">
                  Discover how to build a compelling brand identity that resonates with your target audience.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="influencer" className="mt-0">
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h4 className="font-medium text-[#081C3A]">Influencer Marketing Consultation</h4>
                <p className="text-gray-600 text-sm mt-1">
                  Learn about partnering with influencers to amplify your brand message and reach new audiences.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* The div that Calendly will attach to */}
        <div 
          id="calendly-embed" 
          className="calendly-inline-widget" 
          style={{ minWidth: '320px', height: '700px' }} 
        />
        
        <p className="text-sm text-gray-500 text-center mt-6">
          By booking a consultation, you agree to our terms of service and privacy policy.
        </p>
      </div>
    </div>
  );
}