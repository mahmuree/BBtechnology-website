import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqItems } from "@/data/faq";
import { Mail } from "lucide-react";

export default function FAQSection() {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <Badge variant="pill" className="inline-flex px-4 py-1 text-sm mb-4">
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
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            Your Queries, Simplified
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-[#081C3A] mb-4">
            Questions? Answers!
          </h2>
          <p className="text-gray-600">
            Find quick answers to the most common questions about our platform
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 py-2"
            >
              <AccordionTrigger className="font-medium text-[#081C3A]">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2 pb-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-8">
          <p className="flex items-center justify-center text-sm text-gray-600">
            <Mail className="w-5 h-5 mr-2 text-gray-500" />
            Feel free to mail us for any enquiries:{" "}
            <a href="mailto:alter@support.com" className="text-[#4BA3F2] ml-1">
              alter@support.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
