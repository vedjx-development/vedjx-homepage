import { Metadata } from 'next';
import Link from 'next/link';
import { ServiceStructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Professional web design, hosting, maintenance, SEO, and logo design services in Knoxville, Tennessee. Free consultation available.',
  keywords: ['web design services', 'web hosting', 'website maintenance', 'SEO services', 'logo design', 'Knoxville web services'],
  openGraph: {
    title: 'Web Design & Development Services - Ved.jx',
    description: 'Professional web design, hosting, maintenance, SEO, and logo design services in Knoxville, Tennessee.',
    url: 'https://vedjx.netlify.app/services',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Web Services - Ved.jx',
    description: 'Professional web design, hosting, maintenance, SEO, and logo design services in Knoxville, Tennessee.',
  },
};

export default function Services() {
  const services = [
    {
      title: 'Free Consultation',
      icon: '💬',
      description: 'Start with a no-obligation consultation to discuss your project needs, goals, and vision.',
      features: [
        'Understand your business needs',
        'Discuss project scope and timeline',
        'Answer all your questions',
        'Provide initial recommendations',
      ],
    },
    {
      title: 'Website Design',
      icon: '🎨',
      description: 'Beautiful, modern, and responsive websites tailored to your brand and business objectives.',
      features: [
        'Custom design to match your brand',
        'Mobile-responsive layouts',
        'User-friendly interfaces',
        'Modern and visually stunning',
      ],
    },
    {
      title: 'Website Hosting',
      icon: '🌐',
      description: 'Reliable and secure hosting solutions to keep your website running smoothly 24/7.',
      features: [
        'Fast loading speeds',
        'Secure SSL certificates',
        '99.9% uptime guarantee',
        'Regular backups',
      ],
    },
    {
      title: 'Website Maintenance',
      icon: '🔧',
      description: 'Keep your website updated, secure, and performing at its best with ongoing maintenance.',
      features: [
        'Regular security updates',
        'Content updates as needed',
        'Performance optimization',
        'Bug fixes and improvements',
      ],
    },
    {
      title: 'SEO Optimization',
      icon: '📈',
      description: 'Improve your search engine rankings and get found by more customers online.',
      features: [
        'Keyword research and optimization',
        'On-page SEO improvements',
        'Meta tags and descriptions',
        'Performance and speed optimization',
      ],
    },
    {
      title: 'Logo Design',
      icon: '✨',
      description: 'Professional logo design that captures your brand identity and makes you stand out.',
      features: [
        'Custom logo concepts',
        'Multiple revision rounds',
        'High-resolution files',
        'Brand guideline suggestions',
      ],
    },
  ];

  return (
    <>
      <ServiceStructuredData />
      <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0a0e1a] via-[#101728] to-[#1a1f2e] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#0DEFFE] to-[#4FADFE] bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive web solutions to help your business succeed online
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#101728]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1a1f2e] to-[#101728] p-8 rounded-xl border border-gray-700 hover:border-blue-500 hover:shadow-xl transition-all duration-200"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h2 className="text-2xl font-bold text-gray-100 mb-4">{service.title}</h2>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-[#0DEFFE] mr-2 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#0a0e1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-100 mb-4">Our Process</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A simple, transparent workflow from concept to launch
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'We discuss your needs and goals' },
              { step: '02', title: 'Planning', description: 'Create a detailed project roadmap' },
              { step: '03', title: 'Development', description: 'Build your beautiful website' },
              { step: '04', title: 'Launch', description: 'Deploy and support your site' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-[#0DEFFE] mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-gray-100 mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0DEFFE] to-[#4FADFE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Schedule your free consultation today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[#0DEFFE] font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Contact Us
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
