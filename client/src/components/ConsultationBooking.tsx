import { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Clock, Calendar as CalendarIcon, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

// Sample time slots
const generateTimeSlots = () => {
  const slots = [];
  // Generate slots from 9 AM to 5 PM
  for (let hour = 9; hour < 17; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const hourStr = hour.toString().padStart(2, "0");
      const minuteStr = minute.toString().padStart(2, "0");
      slots.push(`${hourStr}:${minuteStr}`);
    }
  }
  return slots;
};

const timeSlots = generateTimeSlots();

// Mock function to get available slots
// In a real implementation, this would fetch from Google Calendar API
const getAvailableSlotsForDate = (date: Date) => {
  // Simulate some slots being unavailable
  const dateStr = format(date, "yyyy-MM-dd");
  const dayOfWeek = date.getDay();
  
  // Weekend days have no availability
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    return [];
  }
  
  // Simulate random unavailability for some slots
  return timeSlots.filter(() => Math.random() > 0.3);
};

// Mock blocked dates (past dates and weekends would be automatically unavailable)
function isDateUnavailable(date: Date) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  // Block past dates
  if (date < today) {
    return true;
  }
  
  // Block dates more than 60 days in the future
  const maxDate = new Date();
  maxDate.setDate(today.getDate() + 60);
  if (date > maxDate) {
    return true;
  }
  
  // Block weekends
  const day = date.getDay();
  if (day === 0 || day === 6) {
    return true;
  }
  
  return false;
}

export default function ConsultationBooking() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | undefined>(undefined);
  const [selectedService, setSelectedService] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    setSelectedTimeSlot(undefined);
    
    if (date) {
      // Get available slots for the selected date
      const slots = getAvailableSlotsForDate(date);
      setAvailableSlots(slots);
    } else {
      setAvailableSlots([]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceChange = (value: string) => {
    setSelectedService(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTimeSlot || !selectedService) {
      return;
    }
    
    // Here we would send the data to the backend/email service/calendar API
    console.log("Booking data:", {
      ...formData,
      service: selectedService,
      date: format(selectedDate, "MMMM d, yyyy"),
      time: selectedTimeSlot
    });
    
    // In a real application, we would integrate with Google Calendar API or SendGrid
    // for email notifications to both the client and the business
    
    setBookingSubmitted(true);
  };

  const resetForm = () => {
    setSelectedDate(undefined);
    setSelectedTimeSlot(undefined);
    setSelectedService("");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setBookingSubmitted(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-[#02124d] to-[#092381] text-white p-6 text-center">
        <h3 className="text-2xl font-bold mb-2">Schedule a Consultation</h3>
        <p className="text-gray-200">
          Book a 30-minute call with our experts to discuss your project requirements
        </p>
      </div>
      
      {bookingSubmitted ? (
        <div className="p-8 text-center">
          <div className="flex flex-col items-center space-y-4">
            <CheckCircle2 className="h-16 w-16 text-green-500" />
            <h3 className="text-2xl font-bold text-[#081C3A]">Booking Confirmed!</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Thank you for scheduling a consultation. We've sent a confirmation email to {formData.email} with all the details.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg max-w-md w-full mt-4">
              <div className="flex items-center justify-between mb-4">
                <span className="font-medium text-[#081C3A]">Service:</span>
                <span className="text-gray-700">{selectedService}</span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-medium text-[#081C3A]">Date:</span>
                <span className="text-gray-700">
                  {selectedDate ? format(selectedDate, "MMMM d, yyyy") : ""}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium text-[#081C3A]">Time:</span>
                <span className="text-gray-700">{selectedTimeSlot}</span>
              </div>
            </div>
            <Button 
              onClick={resetForm}
              className="bg-[#4BA3F2] hover:bg-[#4BA3F2]/90 text-white mt-6"
            >
              Book Another Consultation
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="John Doe"
                required
                className="w-full border border-gray-300 rounded-lg"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="john@example.com"
                required
                className="w-full border border-gray-300 rounded-lg"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="service">Select Service</Label>
            <Select value={selectedService} onValueChange={handleServiceChange} required>
              <SelectTrigger id="service" className="w-full border border-gray-300 rounded-lg">
                <SelectValue placeholder="Choose a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Social Media Marketing">Social Media Marketing</SelectItem>
                <SelectItem value="Influencer Marketing">Influencer Marketing</SelectItem>
                <SelectItem value="Branding">Branding</SelectItem>
                <SelectItem value="Web Development">Web Development</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="date">Select Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="date"
                    variant="outline"
                    className={cn(
                      "w-full flex justify-between border border-gray-300 rounded-lg",
                      !selectedDate && "text-gray-500"
                    )}
                  >
                    {selectedDate ? format(selectedDate, "PPP") : "Select a date"}
                    <CalendarIcon className="h-4 w-4 ml-2" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={handleDateSelect}
                    disabled={isDateUnavailable}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              
              {selectedDate && availableSlots.length === 0 && (
                <p className="text-red-500 text-sm mt-1">
                  No available slots for this date. Please select another date.
                </p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="time">Select Time</Label>
              <Select 
                value={selectedTimeSlot} 
                onValueChange={setSelectedTimeSlot}
                disabled={!selectedDate || availableSlots.length === 0}
                required
              >
                <SelectTrigger 
                  id="time" 
                  className="w-full border border-gray-300 rounded-lg"
                >
                  <SelectValue placeholder="Select a time slot" />
                </SelectTrigger>
                <SelectContent>
                  {availableSlots.map((slot) => (
                    <SelectItem key={slot} value={slot}>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {slot}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              {selectedDate && availableSlots.length > 0 && (
                <div className="mt-2">
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    {availableSlots.length} available slots
                  </Badge>
                </div>
              )}
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Additional Information (Optional)</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us about your project or specific questions you'd like to discuss..."
              className="w-full border border-gray-300 rounded-lg min-h-[100px]"
            />
          </div>
          
          <div className="pt-4 border-t border-gray-100">
            <Button 
              type="submit" 
              className="w-full bg-[#4BA3F2] hover:bg-[#4BA3F2]/90 text-white py-3"
              disabled={!selectedDate || !selectedTimeSlot || !selectedService}
            >
              Book Consultation
            </Button>
            
            <p className="text-sm text-gray-500 text-center mt-4">
              By booking a consultation, you agree to our terms of service and privacy policy.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}