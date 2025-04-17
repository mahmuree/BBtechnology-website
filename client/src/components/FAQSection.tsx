import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqItems } from "@/data/faq";
import { Mail, Sparkles, MailPlus, MessageCircle, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Group FAQ items by category
  const categories = {
    all: faqItems,
    services: faqItems.filter(item => item.category === 'services'),
    pricing: faqItems.filter(item => item.category === 'pricing'),
    support: faqItems.filter(item => item.category === 'support'),
  };
  
  const displayItems = categories[activeCategory as keyof typeof categories] || categories.all;

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#4BA3F2]/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#4BA3F2]/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <Badge 
            variant="pill" 
            className="bg-[#EEF4FF] text-[#4BA3F2] inline-flex px-4 py-1.5 text-sm mb-4"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Quick Answers
          </Badge>
          
          <h2 className="text-3xl md:text-5xl font-bold text-[#081C3A] mb-6">
            Frequently Asked Questions
          </h2>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Everything you need to know about our services and how we can help your business grow
          </p>
        </div>
        
        {/* FAQ Categories */}
        <div className="flex justify-center mb-10 space-x-2 overflow-x-auto pb-2">
          <Button 
            variant={activeCategory === 'all' ? 'default' : 'outline'}
            className={`rounded-full px-6 ${
              activeCategory === 'all' 
                ? 'bg-gradient-to-r from-[#4BA3F2] to-[#6e8eff] text-white' 
                : 'border-gray-200 hover:border-[#4BA3F2] hover:text-[#4BA3F2]'
            }`}
            onClick={() => setActiveCategory('all')}
          >
            All Questions
          </Button>
          
          <Button 
            variant={activeCategory === 'services' ? 'default' : 'outline'}
            className={`rounded-full px-6 ${
              activeCategory === 'services' 
                ? 'bg-gradient-to-r from-[#4BA3F2] to-[#6e8eff] text-white' 
                : 'border-gray-200 hover:border-[#4BA3F2] hover:text-[#4BA3F2]'
            }`}
            onClick={() => setActiveCategory('services')}
          >
            Services
          </Button>
          
          <Button 
            variant={activeCategory === 'pricing' ? 'default' : 'outline'}
            className={`rounded-full px-6 ${
              activeCategory === 'pricing' 
                ? 'bg-gradient-to-r from-[#4BA3F2] to-[#6e8eff] text-white' 
                : 'border-gray-200 hover:border-[#4BA3F2] hover:text-[#4BA3F2]'
            }`}
            onClick={() => setActiveCategory('pricing')}
          >
            Pricing
          </Button>
          
          <Button 
            variant={activeCategory === 'support' ? 'default' : 'outline'}
            className={`rounded-full px-6 ${
              activeCategory === 'support' 
                ? 'bg-gradient-to-r from-[#4BA3F2] to-[#6e8eff] text-white' 
                : 'border-gray-200 hover:border-[#4BA3F2] hover:text-[#4BA3F2]'
            }`}
            onClick={() => setActiveCategory('support')}
          >
            Support
          </Button>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {displayItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-xl shadow-lg border-0 px-6 py-2 transition-all duration-200 hover:shadow-xl"
            >
              <AccordionTrigger className="font-medium text-[#081C3A] text-lg py-4">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2 pb-6 text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-lg rounded-xl border-0 p-6 hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-[#081C3A] mb-3 flex items-center">
              <MailPlus className="w-5 h-5 mr-2 text-[#4BA3F2]" />
              Email Support
            </h3>
            <p className="text-gray-600 mb-4">
              Have specific questions? Our support team is ready to help you with detailed answers.
            </p>
            <a 
              href="mailto:info@bbtechnology.io" 
              className="text-[#4BA3F2] font-medium hover:text-[#3a82d2] transition-colors inline-flex items-center"
            >
              info@bbtechnology.io
            </a>
          </Card>
          
          <Card className="bg-white shadow-lg rounded-xl border-0 p-6 hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-[#081C3A] mb-3 flex items-center">
              <PhoneCall className="w-5 h-5 mr-2 text-[#4BA3F2]" />
              Live Chat Support
            </h3>
            <p className="text-gray-600 mb-4">
              Need immediate assistance? Chat with our customer service team in real-time.
            </p>
            <Button 
              asChild
              variant="outline" 
              className="border-[#4BA3F2] text-[#4BA3F2] hover:bg-[#4BA3F2] hover:text-white transition-all duration-300"
            >
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
