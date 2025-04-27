import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

export default function PrivacyPolicy() {
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
              Privacy Policy
            </h1>
          </div>

          <div className="max-w-4xl mx-auto prose prose-blue">
            <p><strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>
            
            <h2>1. Introduction</h2>
            <p>
              B&B Technology ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy. This Privacy Policy describes the types of information we may collect from you or that you may provide when you visit our website and our practices for collecting, using, maintaining, protecting, and disclosing that information.
            </p>
            
            <h2>2. Information We Collect</h2>
            <p>We may collect several types of information from and about users of our website, including:</p>
            <ul>
              <li>Personal information such as name, email address, and contact details when you fill out forms on our website or correspond with us.</li>
              <li>Information about your internet connection, the equipment you use to access our website, and usage details.</li>
              <li>Details of your visits to our website, including traffic data, location data, logs, and other communication data.</li>
            </ul>
            
            <h2>3. How We Use Your Information</h2>
            <p>We use information that we collect about you or that you provide to us:</p>
            <ul>
              <li>To present our website and its contents to you.</li>
              <li>To provide you with information, products, or services that you request from us.</li>
              <li>To fulfill any other purpose for which you provide it.</li>
              <li>To notify you about changes to our website or any products or services we offer.</li>
              <li>To improve our website and customer service.</li>
              <li>In any other way we may describe when you provide the information.</li>
            </ul>
            
            <h2>4. Data Security</h2>
            <p>
              We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. However, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our website.
            </p>
            
            <h2>5. Cookies</h2>
            <p>
              Our website uses cookies to enhance user experience. You can set your browser to refuse all or some browser cookies, or to alert you when cookies are being sent. If you disable or refuse cookies, please note that some parts of this site may then be inaccessible or not function properly.
            </p>
            
            <h2>6. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or the content of such websites. We encourage you to review the privacy policies of any third-party websites you visit.
            </p>
            
            <h2>7. Changes to Our Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. If we make material changes to how we treat our users' personal information, we will notify you through a notice on the website. The date the Privacy Policy was last revised is indicated at the top of the page.
            </p>
            
            <h2>8. Contact Information</h2>
            <p>
              If you have any questions or comments about this Privacy Policy, please contact us at:
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