import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import PremiumNavbar from "@/components/PremiumNavbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send, Zap, ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data:", formData);
    // Here you would typically send the data to your backend
    setFormSubmitted(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                Contact Us
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-[#081C3A] mb-4">
                Get in Touch with Our Team
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We're here to answer your questions and discuss how we can help your business grow
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <Card className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border-none">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-[#EEF4FF] flex items-center justify-center mb-4">
                    <Mail className="h-6 w-6 text-[#4BA3F2]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#081C3A] mb-2">Email Us</h3>
                  <p className="text-gray-600 mb-2">For general inquiries:</p>
                  <a href="mailto:info@bbtechnology.com" className="text-[#4BA3F2] font-medium">
                    info@bbtechnology.com
                  </a>
                  <p className="text-gray-600 mt-2 mb-2">For support:</p>
                  <a href="mailto:support@bbtechnology.com" className="text-[#4BA3F2] font-medium">
                    support@bbtechnology.com
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border-none">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-[#EEF4FF] flex items-center justify-center mb-4">
                    <Phone className="h-6 w-6 text-[#4BA3F2]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#081C3A] mb-2">Call Us</h3>
                  <p className="text-gray-600 mb-2">Main Office:</p>
                  <a href="tel:+1234567890" className="text-[#4BA3F2] font-medium">
                    +1 (234) 567-890
                  </a>
                  <p className="text-gray-600 mt-2 mb-2">Customer Support:</p>
                  <a href="tel:+1234567899" className="text-[#4BA3F2] font-medium">
                    +1 (234) 567-899
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border-none">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-[#EEF4FF] flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-[#4BA3F2]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#081C3A] mb-2">Visit Us</h3>
                  <p className="text-gray-600 mb-2">Headquarters:</p>
                  <address className="text-[#081C3A] not-italic font-medium">
                    123 Digital Avenue<br />
                    Tech District<br />
                    New York, NY 10001
                  </address>
                  <p className="text-gray-600 mt-3 text-sm">
                    Monday - Friday: 9am - 6pm
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 md:p-12">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-bold text-[#081C3A] mb-2">
                  Send Us a Message
                </h3>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you as soon as possible
                </p>
              </div>

              {formSubmitted ? (
                <div className="max-w-2xl mx-auto text-center p-8 bg-green-50 rounded-lg">
                  <h4 className="text-xl font-bold text-green-600 mb-2">Message Sent!</h4>
                  <p className="text-gray-700">
                    Thank you for contacting us. We'll respond to your inquiry shortly.
                  </p>
                  <Button 
                    onClick={() => setFormSubmitted(false)}
                    className="mt-6 bg-[#081C3A] hover:bg-[#081C3A]/90 text-white"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block font-medium text-[#081C3A]">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block font-medium text-[#081C3A]">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block font-medium text-[#081C3A]">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="block font-medium text-[#081C3A]">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please provide details about your inquiry..."
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg min-h-[150px]"
                    />
                  </div>
                  <div className="text-center">
                    <Button 
                      type="submit" 
                      className="bg-[#081C3A] hover:bg-[#081C3A]/90 text-white px-6 py-3"
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}