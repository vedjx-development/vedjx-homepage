import Link from 'next/link';
import Image from 'next/image';
import { LocalBusinessStructuredData, WebsiteStructuredData } from '@/components/StructuredData';

export default function Home() {
  return (
    <>
      <LocalBusinessStructuredData />
      <WebsiteStructuredData />
      <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0a0e1a] via-[#101728] to-[#1a1f2e] overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <Image
                src="/VedJx.svg"
                alt="Ved.jx Logo"
                width={400}
                height={140}
                className="h-32 w-auto animate-gradient"
                priority
              />
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
              Knoxville based web solutions you can trust
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Professional websites for small businesses and individuals. Great prices and excellent customer service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-[#0DEFFE] to-[#4FADFE] text-white font-semibold px-8 py-4 rounded-lg hover:from-[#00D5EE] hover:to-[#3F9DEE] transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/services"
                className="bg-[#1a1f2e] text-gray-200 font-semibold px-8 py-4 rounded-lg border-2 border-[#0DEFFE]/30 hover:border-[#0DEFFE] hover:text-[#0DEFFE] transition-all duration-200"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#101728] to-transparent"></div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-[#101728]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-100 mb-4">What We Offer</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Comprehensive web solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Website Design',
                description: 'Beautiful, modern websites that capture your brand',
                icon: '🎨',
              },
              {
                title: 'Website Hosting',
                description: 'Reliable hosting to keep your site running smoothly',
                icon: '🌐',
              },
              {
                title: 'Website Maintenance',
                description: 'Keep your website updated and secure',
                icon: '🔧',
              },
              {
                title: 'SEO Optimization',
                description: 'Get found on Google and grow your business',
                icon: '📈',
              },
              {
                title: 'Logo Design',
                description: 'Professional logos that represent your brand',
                icon: '✨',
              },
              {
                title: 'Free Consultation',
                description: 'Discuss your project needs with no commitment',
                icon: '💬',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1a1f2e] to-[#101728] p-8 rounded-xl border border-gray-700 hover:border-[#0DEFFE] hover:shadow-lg hover:shadow-[#0DEFFE]/20 transition-all duration-200"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-100 mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block text-[#0DEFFE] font-semibold hover:text-[#4FADFE] transition-colors duration-200"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-[#0a0e1a] to-[#101728]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-100 mb-4">Why Choose Ved.jx?</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Local expertise with a commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Fair Pricing', description: 'Transparent rates that fit your budget', icon: '💰' },
              { title: 'Local Service', description: 'Based in Knoxville, serving Tennessee', icon: '📍' },
              { title: 'Expert Support', description: 'Technical explanations made simple', icon: '🤝' },
              { title: '5 Years Experience', description: 'Proven track record of success', icon: '⭐' },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-100 mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0DEFFE] to-[#4FADFE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build Your Online Presence?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Get a free consultation and let's discuss your project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[#0DEFFE] font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Contact Us Today
            </Link>
            <Link
              href="/pricing"
              className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-[#0DEFFE] transition-all duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
