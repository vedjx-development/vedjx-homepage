import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Ved.jx web services. Learn how we collect, use, and protect your personal information.',
  robots: {
    index: false, // Privacy pages typically shouldn't be indexed
    follow: true,
  },
  openGraph: {
    title: 'Privacy Policy - Ved.jx',
    description: 'Privacy policy for Ved.jx web services.',
    url: 'https://vedjx.netlify.app/privacy',
    type: 'website',
  },
};

export default function Privacy() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0a0e1a] via-[#101728] to-[#1a1f2e] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#0DEFFE] to-[#4FADFE] bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 bg-[#101728]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-100 mb-6">Introduction</h2>
            <p className="text-gray-300 mb-6">
              Ved.jx ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when you visit our website
              or use our services.
            </p>

            <h2 className="text-3xl font-bold text-gray-100 mb-6 mt-12">Information We Collect</h2>
            <p className="text-gray-300 mb-4">
              We may collect information about you in a variety of ways. The information we may collect includes:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
              <li>
                <strong>Personal Data:</strong> Name, email address, phone number, and other contact information
                you provide when you submit our contact form or communicate with us.
              </li>
              <li>
                <strong>Project Information:</strong> Details about your website project, business, and requirements
                that you share during consultations.
              </li>
              <li>
                <strong>Website Usage Data:</strong> Information about how you interact with our website, including
                IP address, browser type, pages visited, and time spent on pages.
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-100 mb-6 mt-12">How We Use Your Information</h2>
            <p className="text-gray-300 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
              <li>Respond to your inquiries and provide customer service</li>
              <li>Deliver our web design and development services</li>
              <li>Send you project updates and communications related to your website</li>
              <li>Improve our website and services</li>
              <li>Analyze website usage and trends</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-100 mb-6 mt-12">Disclosure of Your Information</h2>
            <p className="text-gray-300 mb-4">
              We may share your information in the following situations:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
              <li>
                <strong>Service Providers:</strong> We may share your information with third-party vendors who
                assist us in operating our website and providing services (e.g., hosting providers, email services).
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose your information if required to do so by law
                or in response to valid requests by public authorities.
              </li>
              <li>
                <strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of assets,
                your information may be transferred as part of that transaction.
              </li>
            </ul>
            <p className="text-gray-300 mb-6">
              We do not sell, trade, or rent your personal information to third parties for marketing purposes.
            </p>

            <h2 className="text-3xl font-bold text-gray-100 mb-6 mt-12">Data Security</h2>
            <p className="text-gray-300 mb-6">
              We use administrative, technical, and physical security measures to protect your personal information.
              However, no method of transmission over the Internet or electronic storage is 100% secure. While we
              strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
            </p>

            <h2 className="text-3xl font-bold text-gray-100 mb-6 mt-12">Your Privacy Rights</h2>
            <p className="text-gray-300 mb-4">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
              <li>The right to access and receive a copy of your personal data</li>
              <li>The right to correct inaccurate or incomplete information</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to restrict or object to processing of your information</li>
              <li>The right to data portability</li>
            </ul>
            <p className="text-gray-300 mb-6">
              To exercise these rights, please contact us at vedjx865@gmail.com.
            </p>

            <h2 className="text-3xl font-bold text-gray-100 mb-6 mt-12">Cookies and Tracking</h2>
            <p className="text-gray-300 mb-6">
              Our website may use cookies and similar tracking technologies to enhance your experience. Cookies
              are small data files stored on your device. You can instruct your browser to refuse cookies or
              indicate when a cookie is being sent. However, some parts of our website may not function properly
              without cookies.
            </p>

            <h2 className="text-3xl font-bold text-gray-100 mb-6 mt-12">Third-Party Links</h2>
            <p className="text-gray-300 mb-6">
              Our website may contain links to third-party websites. We are not responsible for the privacy
              practices or content of these external sites. We encourage you to review the privacy policies
              of any third-party sites you visit.
            </p>

            <h2 className="text-3xl font-bold text-gray-100 mb-6 mt-12">Children's Privacy</h2>
            <p className="text-gray-300 mb-6">
              Our services are not directed to individuals under the age of 13. We do not knowingly collect
              personal information from children under 13. If you become aware that a child has provided us
              with personal information, please contact us, and we will take steps to delete such information.
            </p>

            <h2 className="text-3xl font-bold text-gray-100 mb-6 mt-12">Changes to This Privacy Policy</h2>
            <p className="text-gray-300 mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting
              the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review
              this Privacy Policy periodically for any changes.
            </p>

            <h2 className="text-3xl font-bold text-gray-100 mb-6 mt-12">Contact Us</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions or concerns about this Privacy Policy, please contact us:
            </p>
            <ul className="list-none text-gray-300 mb-6 space-y-2">
              <li><strong>Email:</strong> vedjx865@gmail.com</li>
              <li><strong>Phone:</strong> 865-978-2087</li>
              <li><strong>Location:</strong> Knoxville, Tennessee</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
