import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar as CalendarIcon, Check, Clock, Info, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format, isWeekend, setHours, setMinutes, isAfter, isBefore } from "date-fns";

// SendGrid integration component for scheduling consultations
export default function ConsultationBooking() {
  const [selectedService, setSelectedService] = useState<string>("webdev");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const [formErrors, setFormErrors] = useState<{
    name?: string;
    email?: string;
    date?: string;
    time?: string;
  }>({});
  const { toast } = useToast();
  
  // Get service name based on selected value
  const getServiceName = (serviceCode: string): string => {
    switch(serviceCode) {
      case "webdev": return "Web Development";
      case "smma": return "Social Media Marketing";
      case "branding": return "Branding";
      case "influencer": return "Influencer Marketing";
      default: return "Consultation";
    }
  };
  
  // Booking state
  const [isCheckingAvailability, setIsCheckingAvailability] = useState(false);
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  
  // Time slot generation (9am - 5pm, 30 min intervals)
  const generateTimeSlots = (selectedDate: Date | undefined): string[] => {
    if (!selectedDate) return [];
    
    const slots: string[] = [];
    const now = new Date();
    const isToday = selectedDate.toDateString() === now.toDateString();
    
    // Business hours from 9 AM to 5 PM
    for (let hour = 9; hour < 17; hour++) {
      for (let minute of [0, 30]) {
        const slotTime = setMinutes(setHours(new Date(selectedDate), hour), minute);
        
        // If it's today, only show future time slots
        if (isToday && !isAfter(slotTime, now)) continue;
        
        const timeString = format(slotTime, "h:mm a");
        
        // Check if the slot is already booked
        if (!bookedSlots.includes(timeString)) {
          slots.push(timeString);
        }
      }
    }
    
    return slots;
  };
  
  // Fetch booked slots when date changes
  useEffect(() => {
    async function fetchBookedSlots() {
      if (!date) return;
      
      setIsCheckingAvailability(true);
      try {
        const formattedDate = format(date, "MMMM d, yyyy");
        const response = await fetch(`/api/booking/booked-slots?date=${encodeURIComponent(formattedDate)}`);
        
        if (response.ok) {
          const data = await response.json();
          if (data.success) {
            setBookedSlots(data.bookedSlots || []);
          }
        }
      } catch (error) {
        console.error("Error checking booked slots:", error);
      } finally {
        setIsCheckingAvailability(false);
      }
    }
    
    fetchBookedSlots();
  }, [date]);
  
  // Check availability of a specific time slot
  const checkTimeSlotAvailability = async (selectedTime: string): Promise<boolean> => {
    if (!date) return false;
    
    try {
      const formattedDate = format(date, "MMMM d, yyyy");
      const response = await fetch(`/api/booking/availability?date=${encodeURIComponent(formattedDate)}&time=${encodeURIComponent(selectedTime)}`);
      
      if (response.ok) {
        const data = await response.json();
        // Zaman dilimi mevcut değilse ve özel bir mesaj varsa
        if (data.success && !data.available && data.message) {
          // Özel mesajı göster
          toast({
            title: "Zaman Dilimi Kontrolü",
            description: data.message,
            variant: "default",
          });
        }
        return data.success && data.available;
      }
      
      return false;
    } catch (error) {
      console.error("Error checking time slot availability:", error);
      return false;
    }
  };
  
  // Form validation
  const validateForm = (): boolean => {
    const errors: {
      name?: string;
      email?: string;
      date?: string;
      time?: string;
    } = {};
    
    if (!name.trim()) {
      errors.name = "Name is required";
    }
    
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Please enter a valid email address";
    }
    
    if (!date) {
      errors.date = "Date is required";
    }
    
    if (!time) {
      errors.time = "Time is required";
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  // Booking state
  const [meetingLink, setMeetingLink] = useState<string>("");
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Please check your information",
        description: "Some required fields are missing or invalid.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Format date for API
      const formattedDate = date ? format(date, "MMMM d, yyyy") : "";
      
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          service: getServiceName(selectedService),
          date: formattedDate,
          time,
          message: message || undefined,
        }),
      });
      
      const data = await response.json();
      
      if (response.ok && data.success) {
        // Store the meeting link if available
        if (data.reservation && data.reservation.meetingLink) {
          setMeetingLink(data.reservation.meetingLink);
        }
        
        setIsBooked(true);
        toast({
          title: "Consultation Scheduled Successfully",
          description: "Thank you! Your consultation has been booked. You will receive a confirmation email with meeting details shortly.",
          action: (
            <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
              <Check className="h-5 w-5 text-green-600" />
            </div>
          ),
        });
      } else {
        throw new Error(data.message || "Failed to book consultation");
      }
    } catch (error) {
      console.error("Booking error:", error);
      toast({
        title: "Booking Failed",
        description: "There was an error scheduling your consultation. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Clear form and booking state
  const handleBookAnother = () => {
    setIsBooked(false);
    setName("");
    setEmail("");
    setMessage("");
    setDate(undefined);
    setTime("");
    setFormErrors({});
  };
  
  // Calculate bookable dates (exclude weekends, start from tomorrow)
  const disableDate = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return isWeekend(date) || isBefore(date, today);
  };
  
  // Get time slots based on selected date
  const timeSlots = generateTimeSlots(date);

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
            Thank you for scheduling a consultation. We've sent a confirmation email with all the details to {email}.
          </p>
          <div className="bg-gray-50 rounded-lg p-5 mb-6 w-full max-w-md">
            <h4 className="font-medium text-[#081C3A] mb-3">Consultation Details:</h4>
            <div className="text-gray-600 grid gap-2">
              <div className="flex justify-between">
                <span>Service:</span>
                <span className="font-medium">{getServiceName(selectedService)}</span>
              </div>
              <div className="flex justify-between">
                <span>Date:</span>
                <span className="font-medium">{date ? format(date, "MMMM d, yyyy") : ""}</span>
              </div>
              <div className="flex justify-between">
                <span>Time:</span>
                <span className="font-medium">{time}</span>
              </div>
            </div>
            
            {meetingLink && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <h5 className="font-medium text-[#081C3A] mb-2 flex items-center">
                  <div className="bg-blue-50 w-6 h-6 rounded-full flex items-center justify-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#4BA3F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 10l5 5-5 5"></path>
                      <path d="M4 4v7a4 4 0 004 4h12"></path>
                    </svg>
                  </div>
                  Google Meet Link:
                </h5>
                <div className="bg-blue-50 p-3 rounded-md mb-2 break-all">
                  <a 
                    href={meetingLink}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Create a Google Meet meeting
                  </a>
                </div>
                <p className="text-xs text-gray-500">
                  Click the link above to create a Google Meet session. After creating the meeting, please share the link with info@bbtechnology.io so we can join at the scheduled time.
                </p>
              </div>
            )}
          </div>
          <Button 
            onClick={handleBookAnother}
            className="bg-gradient-to-r from-[#4BA3F2] to-[#6e8eff] hover:from-[#3a82d2] hover:to-[#5470d6] text-white"
          >
            Schedule Another Consultation
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="p-6">
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-[#081C3A]">
                Your Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={formErrors.name ? "border-red-500" : ""}
              />
              {formErrors.name && (
                <p className="text-sm text-red-500">{formErrors.name}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#081C3A]">
                Email Address <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={formErrors.email ? "border-red-500" : ""}
              />
              {formErrors.email && (
                <p className="text-sm text-red-500">{formErrors.email}</p>
              )}
            </div>
          </div>
          
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Label className="text-lg font-medium text-[#081C3A]">
                Choose Consultation Date & Time <span className="text-red-500">*</span>
              </Label>
              <div className="text-gray-400 text-sm flex items-center">
                <Info className="h-4 w-4 mr-1" />
                <span>30-minute session</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div className="space-y-2">
                <Label htmlFor="date" className="text-[#081C3A]">
                  Date
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={`w-full justify-start text-left font-normal ${
                        !date ? "text-muted-foreground" : ""
                      } ${formErrors.date ? "border-red-500" : ""}`}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Select date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={disableDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                {formErrors.date && (
                  <p className="text-sm text-red-500">{formErrors.date}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="time" className="text-[#081C3A]">
                  Time
                </Label>
                <Select
                  value={time}
                  onValueChange={async (newTime) => {
                    // Clear any previous time selection first
                    setTime("");
                    
                    // Set a loading state for when checking time slot
                    setIsCheckingAvailability(true);
                    
                    try {
                      // Basitçe zaman dilimini hemen seçelim
                      setTime(newTime);
                    } catch (error) {
                      console.error("Error checking time availability:", error);
                      setTime(newTime);
                    } finally {
                      setIsCheckingAvailability(false);
                    }
                  }}
                  disabled={!date || timeSlots.length === 0 || isCheckingAvailability}
                >
                  <SelectTrigger
                    className={formErrors.time ? "border-red-500" : ""}
                  >
                    <SelectValue placeholder="Select time">
                      {time ? (
                        <div className="flex items-center">
                          <Clock className="mr-2 h-4 w-4" />
                          {time}
                        </div>
                      ) : isCheckingAvailability ? (
                        <div className="flex items-center">
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          <span>Checking availability...</span>
                        </div>
                      ) : (
                        <span>{date ? (timeSlots.length === 0 ? "No available times" : "Select time slot") : "Select date first"}</span>
                      )}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {isCheckingAvailability ? (
                      <div className="py-8 flex justify-center items-center">
                        <Loader2 className="h-6 w-6 animate-spin text-[#4BA3F2] mr-2" />
                        <span>Checking availability...</span>
                      </div>
                    ) : timeSlots.length > 0 ? (
                      timeSlots.map((slot) => (
                        <SelectItem key={slot} value={slot}>
                          {slot}
                        </SelectItem>
                      ))
                    ) : (
                      <div className="py-2 px-4 text-sm text-gray-500">
                        {date ? "No available times on this date" : "Select a date first"}
                      </div>
                    )}
                  </SelectContent>
                </Select>
                {formErrors.time && (
                  <p className="text-sm text-red-500">{formErrors.time}</p>
                )}
              </div>
            </div>
            
            <div className="text-sm text-gray-500 flex items-center mb-4">
              <Info className="h-4 w-4 mr-2" />
              <span>We're available Monday-Friday, 9:00 AM - 5:00 PM. Weekend slots are unavailable.</span>
            </div>
          </div>
          
          <div className="mb-6">
            <Label htmlFor="message" className="text-[#081C3A] block mb-2">
              Brief Description of Your Project (Optional)
            </Label>
            <Textarea
              id="message"
              placeholder="Tell us a bit about your project or specific questions you'd like to discuss during the consultation..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="h-32"
            />
          </div>
          
          <div className="flex justify-center">
            <Button
              type="submit"
              className="bg-gradient-to-r from-[#4BA3F2] to-[#6e8eff] hover:from-[#3a82d2] hover:to-[#5470d6] text-white px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-medium w-full md:w-auto min-w-[200px]"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Book Consultation"
              )}
            </Button>
          </div>
          
          <p className="text-sm text-gray-500 text-center mt-6">
            By booking a consultation, you agree to our terms of service and privacy policy.
          </p>
        </form>
      )}
    </div>
  );
}