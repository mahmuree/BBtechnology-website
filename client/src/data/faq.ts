export type FAQItem = {
  question: string;
  answer: string;
  category: 'services' | 'pricing' | 'support';
};

export const faqItems: FAQItem[] = [
  {
    question: "What services does B&B Technology offer?",
    answer: "B&B Technology offers a comprehensive suite of digital solutions including Social Media Marketing (SMMA), Influencer Marketing, Branding, Web Development, and value-packed Bundle Packages that combine these services for maximum impact.",
    category: "services"
  },
  {
    question: "How can Social Media Marketing help my business?",
    answer: "Our SMMA services help businesses increase brand awareness, engage with target audiences, drive website traffic, generate leads, and boost conversions through strategic content creation, community management, and paid advertising campaigns across all major social media platforms.",
    category: "services"
  },
  {
    question: "What does your Influencer Marketing service include?",
    answer: "Our Influencer Marketing service includes influencer research and vetting, campaign strategy development, creative brief creation, contract negotiation, content approval, performance tracking, and comprehensive reporting to maximize your ROI.",
    category: "services"
  },
  {
    question: "What types of websites can you develop?",
    answer: "We develop all types of websites from simple landing pages to complex e-commerce platforms, including corporate websites, portfolios, blogs, membership sites, and custom web applications. All our websites are responsive, SEO-optimized, and built with scalability in mind.",
    category: "services"
  },
  {
    question: "How does your Branding service work?",
    answer: "Our Branding service starts with in-depth market research and competitive analysis, followed by brand strategy development, visual identity creation (logo, color palette, typography), messaging framework, brand guidelines, and implementation across all touchpoints.",
    category: "services"
  },
  {
    question: "How much do your services cost?",
    answer: "Our pricing varies based on the scope and requirements of each project. We offer tiered packages for each service category (Starter, Growth, Pro, and Premium) as well as cost-effective Bundle Packages. Visit our Pricing page for detailed information or contact us for a custom quote.",
    category: "pricing"
  },
  {
    question: "Do you offer discounts for bundle packages?",
    answer: "Yes, our Bundle Packages offer savings of up to 35% compared to purchasing individual services separately. These bundles are strategically designed to provide comprehensive digital solutions at value-optimized price points.",
    category: "pricing"
  },
  {
    question: "Are there any long-term contracts?",
    answer: "While some of our services perform best with ongoing engagement, we offer flexible contract terms. Depending on the service, we offer monthly, quarterly, and annual agreements, with discounts available for longer commitments.",
    category: "pricing"
  },
  {
    question: "How do you measure and report on results?",
    answer: "We provide detailed performance reports that track key metrics relevant to your goals. For SMMA and Influencer Marketing, this includes engagement rates, reach, clicks, and conversions. For Web Development, we monitor traffic, user behavior, and conversion metrics. All clients receive regular updates through our client dashboard.",
    category: "support"
  },
  {
    question: "How quickly can you start working on my project?",
    answer: "Once we've finalized the agreement, we typically begin the onboarding process within 3-5 business days. Project timelines vary based on complexity and scope - a basic website might take 2-3 weeks, while comprehensive branding or marketing campaigns may require 4-8 weeks for proper strategy and implementation.",
    category: "support"
  },
  {
    question: "What is your revision policy?",
    answer: "We include a specific number of revision rounds in each package. For most services, our Growth plans include 2 rounds, Pro plans include 3 rounds, and Premium plans include unlimited revisions within the project scope. Additional revision requests beyond the included rounds can be accommodated at an hourly rate.",
    category: "support"
  },
  {
    question: "How do I get started with B&B Technology?",
    answer: "Getting started is easy! Simply contact us through our website, email, or phone. We'll schedule an initial consultation to discuss your needs, goals, and timeline. After that, we'll provide a tailored proposal and, once approved, begin the onboarding process with a dedicated project manager to guide you through every step.",
    category: "support"
  }
];
