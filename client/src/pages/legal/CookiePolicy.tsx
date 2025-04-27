import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

export default function CookiePolicy() {
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
              Cookie Policy
            </h1>
          </div>

          <div className="max-w-4xl mx-auto prose prose-blue">
            <p><strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>
            
            <h2>1. What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you browse websites. They are widely used to make websites work more efficiently, as well as to provide information to the website owners.
            </p>
            
            <h2>2. How We Use Cookies</h2>
            <p>
              B&B Technology uses cookies for several purposes, including:
            </p>
            <ul>
              <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms.</li>
              <li><strong>Performance Cookies:</strong> These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.</li>
              <li><strong>Functional Cookies:</strong> These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.</li>
              <li><strong>Targeting Cookies:</strong> These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites.</li>
            </ul>
            
            <h2>3. Managing Cookies</h2>
            <p>
              Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies, or to alert you when cookies are being sent. The Help function within your browser should tell you how. Alternatively, you may wish to visit <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer">www.aboutcookies.org</a>, which contains comprehensive information on how to manage cookies on a wide variety of desktop browsers.
            </p>
            
            <h2>4. Cookies We Use</h2>
            <p>
              Here is a list of the main types of cookies we use, and what we use them for:
            </p>
            <ul>
              <li><strong>Session Cookies:</strong> These are temporary cookies that are deleted when you close your browser, and are typically used to enable basic website functionality.</li>
              <li><strong>Persistent Cookies:</strong> These remain on your device until they expire or you delete them. They help us recognize you as an existing user to make return visits easier and site functionality more personalized.</li>
              <li><strong>Analytics Cookies:</strong> We use services such as Google Analytics to collect information about how users engage with our website. This helps us improve your experience and the site's functionality.</li>
            </ul>
            
            <h2>5. Third-Party Cookies</h2>
            <p>
              Some cookies are placed by third parties on our website. We do not control the operation of these cookies. The third parties involved and their privacy policies should be consulted for more information.
            </p>
            
            <h2>6. Changes to Our Cookie Policy</h2>
            <p>
              We may update our Cookie Policy from time to time. Any changes will be posted on this page, and if the changes are significant, we will provide a more prominent notice.
            </p>
            
            <h2>7. Contact Information</h2>
            <p>
              If you have any questions about our Cookie Policy, please contact us at:
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