import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pricing - Ved.jx',
  description: 'Transparent and fair pricing for web design and development services in Knoxville, Tennessee.',
};

export default function Pricing() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0a0e1a] via-[#101728] to-[#1a1f2e] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#0DEFFE] to-[#4FADFE] bg-clip-text text-transparent">
              Pricing
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Fair, transparent pricing that works for your budget
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-20 bg-[#101728]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#1a1f2e] to-[#101728] p-12 rounded-2xl border-2 border-[#0DEFFE] mb-12">
            <div className="text-center mb-8">
              <div className="text-6xl md:text-7xl font-bold text-gray-100 mb-4">
                ~$60<span className="text-3xl text-gray-400">/hr</span>
              </div>
              <p className="text-xl text-gray-300">
                Approximate hourly rate
              </p>
            </div>

            <div className="bg-[#0a0e1a]/80 backdrop-blur-sm p-6 rounded-xl">
              <p className="text-lg text-gray-300 text-center">
                Pricing varies based on project requirements and scope. Every project is unique,
                and rates are adjusted to ensure you get the best value for your specific needs.
              </p>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-100 mb-4">What Affects Project Cost?</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
              Several factors influence the final cost of your project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                icon: '📄',
                title: 'Number of Pages',
                description: 'More pages mean more design and development time',
              },
              {
                icon: '⚙️',
                title: 'Functionality',
                description: 'Custom features and integrations add complexity',
              },
              {
                icon: '🎨',
                title: 'Design Complexity',
                description: 'Highly custom designs require more time and effort',
              },
              {
                icon: '📱',
                title: 'Responsiveness',
                description: 'Ensuring perfect display across all devices',
              },
              {
                icon: '🔌',
                title: 'Integrations',
                description: 'Third-party services and API connections',
              },
              {
                icon: '⏰',
                title: 'Timeline',
                description: 'Rush projects may require adjusted pricing',
              },
            ].map((factor, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-[#0a0e1a] rounded-xl hover:bg-[#1a1f2e] transition-colors duration-200"
              >
                <div className="text-4xl flex-shrink-0">{factor.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-100 mb-1">{factor.title}</h3>
                  <p className="text-gray-400">{factor.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-[#0a0e1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-100 mb-4">What's Included</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Every project includes these valuable features at no extra cost
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '💬',
                title: 'Free Consultation',
                description: 'Start with a no-obligation discussion about your project',
              },
              {
                icon: '📱',
                title: 'Mobile Responsive',
                description: 'Your site will look perfect on all devices',
              },
              {
                icon: '🔒',
                title: 'SSL Certificate',
                description: 'Secure connection for your visitors',
              },
              {
                icon: '⚡',
                title: 'Fast Loading',
                description: 'Optimized for speed and performance',
              },
              {
                icon: '📈',
                title: 'Basic SEO',
                description: 'Search engine optimization built-in',
              },
              {
                icon: '🤝',
                title: 'Training & Support',
                description: 'Learn how to manage your site with ongoing help',
              },
            ].map((item, index) => (
              <div key={index} className="bg-[#1a1f2e] p-8 rounded-xl shadow-md text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-100 mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Consultation CTA */}
      <section className="py-20 bg-[#101728]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#0DEFFE] to-[#4FADFE] p-12 rounded-2xl text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Get a Free Consultation</h2>
            <p className="text-xl text-cyan-100 mb-8">
              Not sure about costs? Schedule a free consultation to discuss your project.
              We'll provide a detailed quote based on your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-[#0DEFFE] font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/services"
                className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-[#0DEFFE] transition-all duration-200"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
