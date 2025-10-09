import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact - Ved.jx',
  description: 'Get in touch with Ved.jx for a free consultation about your web design project in Knoxville, Tennessee.',
};

export default function Contact() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0a0e1a] via-[#101728] to-[#1a1f2e] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#0DEFFE] to-[#4FADFE] bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to start your project? Send us a message and let's discuss how we can help
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#101728]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-100 mb-6">Contact Information</h2>
              <p className="text-lg text-gray-400 mb-8">
                Have a question or ready to get started? Reach out through any of these channels,
                or fill out the contact form and we'll get back to you as soon as possible.
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-[#0DEFFE]"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-100 mb-1">Email</h3>
                    <a
                      href="mailto:vedjx865@gmail.com"
                      className="text-[#0DEFFE] hover:text-[#4FADFE] transition-colors duration-200"
                    >
                      vedjx865@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-[#4FADFE]"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-100 mb-1">Phone</h3>
                    <a
                      href="tel:865-978-2087"
                      className="text-[#0DEFFE] hover:text-[#4FADFE] transition-colors duration-200"
                    >
                      865-978-2087
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-100 mb-1">Location</h3>
                    <p className="text-gray-400">Knoxville, Tennessee</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-12 p-6 bg-gradient-to-br from-[#1a1f2e] to-[#101728] rounded-xl">
                <h3 className="text-xl font-semibold text-gray-100 mb-4">Response Time</h3>
                <p className="text-gray-300">
                  We typically respond to all inquiries within 24 hours during business days.
                  For urgent matters, please call directly.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gradient-to-br from-[#1a1f2e] to-[#101728] p-8 rounded-2xl border border-gray-700 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-100 mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0DEFFE] to-[#4FADFE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Every great website starts with a conversation. We're here to listen to your ideas
            and help bring them to life.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
            <div>
              <div className="text-3xl mb-2">💬</div>
              <div className="font-semibold">Free Consultation</div>
            </div>
            <div>
              <div className="text-3xl mb-2">⚡</div>
              <div className="font-semibold">Fast Response</div>
            </div>
            <div>
              <div className="text-3xl mb-2">🤝</div>
              <div className="font-semibold">No Obligation</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
