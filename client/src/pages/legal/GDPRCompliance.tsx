import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

export default function GDPRCompliance() {
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
              GDPR Compliance
            </h1>
          </div>

          <div className="max-w-4xl mx-auto prose prose-blue">
            <p><strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>
            
            <h2>1. Introduction</h2>
            <p>
              At B&B Technology, we are committed to protecting the privacy and security of your personal data. This GDPR Compliance statement explains how we comply with the General Data Protection Regulation (GDPR), which is a European Union regulation concerning the protection of personal data and privacy for all individuals within the EU.
            </p>
            
            <h2>2. Data Controller</h2>
            <p>
              For the purposes of the GDPR, B&B Technology is the data controller for personal data we collect through our website and services. This means we determine the purposes and means of processing personal data.
            </p>
            
            <h2>3. Lawful Basis for Processing</h2>
            <p>
              We process personal data on the following lawful bases:
            </p>
            <ul>
              <li><strong>Consent:</strong> Where you have given us clear consent to process your personal data for a specific purpose.</li>
              <li><strong>Contract:</strong> Where processing is necessary for the performance of a contract with you or to take steps at your request before entering into a contract.</li>
              <li><strong>Legal Obligation:</strong> Where processing is necessary for compliance with a legal obligation to which we are subject.</li>
              <li><strong>Legitimate Interests:</strong> Where processing is necessary for the purposes of legitimate interests pursued by us or a third party, except where such interests are overridden by your interests, rights, or freedoms.</li>
            </ul>
            
            <h2>4. Your Rights Under GDPR</h2>
            <p>
              Under GDPR, you have the following rights:
            </p>
            <ul>
              <li><strong>Right to Access:</strong> You have the right to request copies of your personal data.</li>
              <li><strong>Right to Rectification:</strong> You have the right to request that we correct any inaccurate or incomplete information we hold about you.</li>
              <li><strong>Right to Erasure:</strong> You have the right to request that we delete your personal data in certain circumstances.</li>
              <li><strong>Right to Restrict Processing:</strong> You have the right to request that we restrict the processing of your personal data in certain circumstances.</li>
              <li><strong>Right to Data Portability:</strong> You have the right to request that we transfer personal data you have provided to us to another organization, or directly to you.</li>
              <li><strong>Right to Object:</strong> You have the right to object to processing of your personal data in certain circumstances.</li>
              <li><strong>Rights Related to Automated Decision Making and Profiling:</strong> You have rights related to how we use your data for automated decision-making processes.</li>
            </ul>
            
            <h2>5. How to Exercise Your Rights</h2>
            <p>
              You can exercise any of these rights by contacting us at <a href="mailto:info@bbtechnology.io">info@bbtechnology.io</a>. We will respond to your request within one month. Please note that we may need to verify your identity before we can fulfill your request.
            </p>
            
            <h2>6. Data Retention</h2>
            <p>
              We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>
            
            <h2>7. Data Security</h2>
            <p>
              We have implemented appropriate technical and organizational measures to ensure a level of security appropriate to the risk of processing your personal data, including measures to prevent unauthorized access, use, alteration, or disclosure.
            </p>
            
            <h2>8. International Transfers</h2>
            <p>
              If we transfer your personal data outside the European Economic Area (EEA), we ensure that adequate safeguards are in place to protect your data, such as Standard Contractual Clauses approved by the European Commission.
            </p>
            
            <h2>9. Data Breach Procedures</h2>
            <p>
              In the event of a personal data breach, we will notify relevant supervisory authorities and affected individuals as required by GDPR.
            </p>
            
            <h2>10. Contact Information</h2>
            <p>
              If you have any questions or concerns about our GDPR compliance or the processing of your personal data, please contact us at:
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