import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Calendly integration component for scheduling
export default function ConsultationBooking() {
  const [selectedService, setSelectedService] = useState<string>("webdev");
  const [isLoaded, setIsLoaded] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const { toast } = useToast();

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
    
    // Define the event handler function for events
    const handleCalendlyEvent = (e: CustomEvent) => {
      console.log("Calendly event scheduled", e);
      // Set booked state and show toast notification
      setIsBooked(true);
      toast({
        title: "Consultation Scheduled Successfully",
        description: "Thank you! Your consultation has been booked. You will receive a confirmation email shortly.",
        action: (
          <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
            <Check className="h-5 w-5 text-green-600" />
          </div>
        ),
      });
    };
    
    // Check if script already exists to prevent duplicate loading
    const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
    
    if (!existingScript) {
      head?.appendChild(script);
      
      script.onload = () => {
        setIsLoaded(true);
        console.log("Calendly script loaded successfully");
      };
      
      script.onerror = (error) => {
        console.error("Error loading Calendly script:", error);
      };
    } else {
      setIsLoaded(true);
      console.log("Calendly script already loaded");
    }
    
    // Add Calendly event listener for booking confirmation
    window.addEventListener('calendly:event:scheduled', handleCalendlyEvent);
    
    return () => {
      // Remove event listener with the same function reference
      window.removeEventListener('calendly:event:scheduled', handleCalendlyEvent);
      
      // Only remove script if component is being completely unmounted
      // We don't want to remove the script if the component is just being re-rendered
      // as other components might depend on it
      // if (head?.contains(script) && !document.querySelector('[id^="calendly"]')) {
      //   head.removeChild(script);
      // }
    };
  }, [toast]);

  // Re-initialize Calendly when service changes
  useEffect(() => {
    if (isLoaded && window.Calendly) {
      try {
        const embedElement = document.getElementById('calendly-embed');
        if (embedElement) {
          // Clear any previous widgets
          while (embedElement.firstChild) {
            embedElement.removeChild(embedElement.firstChild);
          }
          
          // Initialize with the new service
          window.Calendly.initInlineWidget({
            url: calendlyUrls[selectedService as keyof typeof calendlyUrls],
            parentElement: embedElement,
            prefill: {},
            utm: {}
          });
        }
      } catch (error) {
        console.error("Error initializing Calendly widget:", error);
      }
    }
  }, [isLoaded, selectedService, calendlyUrls]);

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-[#02124d] to-[#092381] text-white p-6 text-center">
        <h3 className="text-2xl font-bold mb-2">Schedule a Consultation</h3>
        <p className="text-gray-200">
          Book a 30-minute call with our experts to discuss your project requirements
        </p>
      </div>
      
      {isBooked ? (
        <div className="p-10 flex flex-col items-center justify-center">
          <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
            <Check className="h-10 w-10 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-[#081C3A] mb-4">Booking Confirmed!</h3>
          <p className="text-gray-600 text-center max-w-md mb-6">
            Thank you for scheduling a consultation. We've sent a confirmation email with all the details.
          </p>
          <Button 
            onClick={() => setIsBooked(false)}
            className="bg-gradient-to-r from-[#4BA3F2] to-[#6e8eff] hover:from-[#3a82d2] hover:to-[#5470d6] text-white"
          >
            Schedule Another Consultation
          </Button>
        </div>
      ) : (
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
      )}
    </div>
  );
}