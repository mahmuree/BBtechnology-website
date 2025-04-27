import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

export default function TermsOfService() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="pill" className="bg-gray-200 text-gray-700 inline-flex px-4 py-1 text-sm mb-4">
              Legal
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-[#081C3A] mb-4">
              Terms of Service
            </h1>
          </div>

          <div className="max-w-4xl mx-auto prose prose-blue">
            <p><strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>
            
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the services of B&B Technology ("we," "our," or "us"), you accept and agree to be bound by the terms and conditions of this agreement. If you do not agree to abide by these terms, please do not use our services.
            </p>
            
            <h2>2. Description of Services</h2>
            <p>
              B&B Technology provides digital services including but not limited to web development, social media marketing, branding, and influencer marketing. The specific details of the services to be provided will be outlined in a separate agreement or proposal.
            </p>
            
            <h2>3. User Conduct</h2>
            <p>You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
            <ul>
              <li>Use our services in any way that violates any applicable federal, state, local, or international law or regulation.</li>
              <li>Attempt to interfere with, compromise the system integrity or security, or decipher any transmissions to or from the servers running our services.</li>
              <li>Use our services in any manner that could disable, overburden, damage, or impair the site or interfere with any other party's use of the services.</li>
            </ul>
            
            <h2>4. Intellectual Property Rights</h2>
            <p>
              Our website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by B&B Technology, its licensors, or other providers and are protected by copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
            
            <h2>5. Payment Terms</h2>
            <p>
              Payment terms will be specified in the service agreement or proposal provided to you. Unless otherwise stated, all invoices are due upon receipt. Late payments may result in suspension of services.
            </p>
            
            <h2>6. Limitation of Liability</h2>
            <p>
              In no event will B&B Technology, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, our services, including any direct, indirect, special, incidental, consequential, or punitive damages.
            </p>
            
            <h2>7. Termination</h2>
            <p>
              We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms. All provisions of the Terms which by their nature should survive termination shall survive, including without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
            </p>
            
            <h2>8. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will provide notice of any material changes by posting the new Terms on this site. Your continued use of our services after such modifications will constitute your acknowledgment of the modified Terms.
            </p>
            
            <h2>9. Contact Information</h2>
            <p>
              Questions about the Terms of Service should be sent to us at:
            </p>
            <p>
              Email: <a href="mailto:info@bbtechnology.io">info@bbtechnology.io</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}