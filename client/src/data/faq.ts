export type FAQItem = {
  question: string;
  answer: string;
  category: 'services' | 'pricing' | 'support';
};

export const faqItems: FAQItem[] = [
  {
    question: "What services does B&B Technology offer?",
    answer: "B&B Technology offers a comprehensive suite of digital solutions including Social Media Marketing (SMMA), Influencer Marketing, Branding, and Web Development to help grow your business in the digital world.",
    category: "services"
  },
  {
    question: "How can Social Media Marketing help my business?",
    answer: "Our SMMA services help businesses increase brand awareness, engage with target audiences, drive website traffic, generate leads, and boost conversions through strategic content creation and paid advertising campaigns.",
    category: "services"
  },
  {
    question: "What types of websites can you develop?",
    answer: "We develop all types of websites from simple landing pages to complex e-commerce platforms, including corporate websites, portfolios, blogs, and custom web applications. All our websites are responsive and SEO-optimized.",
    category: "services"
  },
  {
    question: "How much do your services cost?",
    answer: "Our pricing varies based on the scope and requirements of each project. We offer tiered packages for each service category (Starter, Growth, Pro, and Premium). Visit our Pricing page for detailed information or contact us for a custom quote.",
    category: "pricing"
  },
  {
    question: "Are there any long-term contracts?",
    answer: "While some of our services perform best with ongoing engagement, we offer flexible contract terms. Depending on the service, we offer monthly, quarterly, and annual agreements, with discounts available for longer commitments.",
    category: "pricing"
  },
  {
    question: "How do you measure and report on results?",
    answer: "We provide detailed performance reports that track key metrics relevant to your goals. For SMMA and Influencer Marketing, this includes engagement rates, reach, clicks, and conversions. All clients receive regular updates.",
    category: "support"
  },
  {
    question: "How can I contact customer support?",
    answer: "You can reach our customer support team through email at info@bbtechnology.io or through the contact form on our website. Our support team is available Monday to Friday, 9 AM to 6 PM EST.",
    category: "support"
  }
];