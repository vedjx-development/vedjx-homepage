'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FAQStructuredData } from '@/components/StructuredData';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How much does a website cost?',
      answer: 'Website costs vary depending on your specific needs, including the number of pages, functionality, and design complexity. Our typical hourly rate is around $60/hr, but the total project cost depends on your requirements. Contact us for a free consultation and detailed quote tailored to your project.',
    },
    {
      question: 'How long does it take to build a website?',
      answer: 'Timeline depends on the project scope. A simple 5-page website typically takes 2-3 weeks, while more complex sites with custom features may take 4-8 weeks. We\'ll provide a detailed timeline during your free consultation based on your specific requirements.',
    },
    {
      question: 'Do you offer website hosting?',
      answer: 'Yes! We provide reliable website hosting services with fast loading speeds, SSL certificates, 99.9% uptime guarantee, and regular backups. Hosting can be included in your project package or as a separate ongoing service.',
    },
    {
      question: 'Will my website be mobile-friendly?',
      answer: 'Absolutely! Every website we build is fully responsive and optimized for all devices - desktops, tablets, and smartphones. Mobile responsiveness is included as a standard feature in all our projects at no extra cost.',
    },
    {
      question: 'Can I update the website myself after it\'s built?',
      answer: 'Yes! We build user-friendly websites and provide training so you can make content updates yourself. For more complex changes or if you prefer not to handle updates, we also offer ongoing maintenance packages.',
    },
    {
      question: 'Do you provide SEO services?',
      answer: 'Yes, we offer SEO optimization services including keyword research, on-page SEO, meta tags, and performance optimization. Basic SEO is included in all website projects, and we can provide more comprehensive SEO packages for businesses looking to improve their search rankings.',
    },
    {
      question: 'What information do you need to get started?',
      answer: 'To begin, we need to understand your business, goals, target audience, and any specific features you want. During the free consultation, we\'ll discuss your vision, review examples you like, and gather content such as text, images, and branding materials.',
    },
    {
      question: 'Do you offer logo design?',
      answer: 'Yes! We create professional, custom logos that represent your brand identity. Logo design can be bundled with your website project or ordered separately. We provide multiple concepts and revision rounds to ensure you love the final result.',
    },
    {
      question: 'What happens if I need changes after the website is launched?',
      answer: 'We offer ongoing support and maintenance packages for post-launch updates. Whether you need content updates, new features, or technical fixes, we\'re here to help. We also provide training so you can make simple updates yourself if preferred.',
    },
    {
      question: 'Do you work with clients outside of Knoxville?',
      answer: 'While we\'re based in Knoxville, Tennessee, we can work with clients anywhere! Most of our communication happens via email, phone, and video calls, making it easy to collaborate regardless of location.',
    },
    {
      question: 'What makes Ved.jx different from other web designers?',
      answer: 'We combine 5 years of experience with a Computer Science education from UT Knoxville, offering both technical expertise and personal service. We provide fair pricing, excellent customer service, and always explain technical concepts in an understandable way. We\'re committed to getting maximum value from your investment.',
    },
    {
      question: 'Do you require a deposit or upfront payment?',
      answer: 'Payment terms are discussed during the consultation and depend on the project scope. Typically, we require a deposit to begin work, with the remainder due upon completion. We\'ll create a payment plan that works for your budget.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <FAQStructuredData faqs={faqs} />
      <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0a0e1a] via-[#101728] to-[#1a1f2e] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#0DEFFE] to-[#4FADFE] bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Find answers to common questions about our services
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#101728]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#1a1f2e] border-2 border-gray-700 rounded-xl overflow-hidden hover:border-blue-500 transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-[#0a0e1a] transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-gray-100 pr-8">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-[#0DEFFE] flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-[#0a0e1a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-100 mb-4">Still Have Questions?</h2>
          <p className="text-lg text-gray-400 mb-8">
            Can't find the answer you're looking for? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-[#0DEFFE] to-[#4FADFE] text-[#101728] font-semibold px-8 py-4 rounded-lg hover:from-[#00D5EE] hover:to-[#3F9DEE] transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Contact Us
            </Link>
            <a
              href="tel:865-978-2087"
              className="bg-[#1a1f2e] text-gray-200 font-semibold px-8 py-4 rounded-lg border-2 border-gray-600 hover:border-blue-600 hover:text-[#0DEFFE] transition-all duration-200"
            >
              Call 865-978-2087
            </a>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
