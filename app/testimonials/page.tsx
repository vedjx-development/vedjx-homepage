import { Metadata } from 'next';
import Link from 'next/link';
import { AggregateRatingStructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Testimonials',
  description: 'See what our clients say about our web design and development services in Knoxville, Tennessee. 100% client satisfaction with 5-star reviews.',
  openGraph: {
    title: 'Client Testimonials - Ved.jx',
    description: 'See what our clients say about our web design and development services in Knoxville, Tennessee.',
    url: 'https://vedjx.netlify.app/testimonials',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Client Testimonials - Ved.jx',
    description: 'See what our clients say about our web design and development services in Knoxville, Tennessee.',
  },
};

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Chance Reymer',
      business: 'Online Card Shop Owner',
      quote: 'Jake went above and beyond to understand my goals and build a website that not only looks great but actually brings in customers. It\'s been a total game changer for my small business.',
      rating: 5,
    },
    {
      name: 'Hadassah Prouty',
      business: 'Online Art Shop Owner',
      quote: 'Jake built me a really cool website and it is amazing! He was so quick to get the website out to me also, which was a nice plus. He worked really hard on it and you will be very glad you got a website made by him!',
      rating: 5,
    },
    {
      name: 'Lucas Schaff',
      business: 'Used Car Lot Owner',
      quote: 'Our new website looks incredible and performs even better. Ved.jx perfectly captured our brand and made the entire process smooth from start to finish.',
      rating: 5,
    },
  ];

  const reviews = testimonials.map(t => ({
    author: t.name,
    rating: t.rating,
    reviewBody: t.quote,
  }));

  return (
    <>
      <AggregateRatingStructuredData reviews={reviews} />
      <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0a0e1a] via-[#101728] to-[#1a1f2e] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#0DEFFE] to-[#4FADFE] bg-clip-text text-transparent">
              Client Testimonials
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#101728]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1a1f2e] to-[#101728] p-8 md:p-12 rounded-2xl border-2 border-gray-700 hover:border-blue-500 hover:shadow-2xl transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0DEFFE] to-[#4FADFE] rounded-full flex items-center justify-center text-[#101728] font-bold text-xl mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-100">{testimonial.name}</div>
                    <div className="text-gray-400">{testimonial.business}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-[#0a0e1a] to-[#1a1f2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-100 mb-4">Proven Results</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Numbers that speak to our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-[#1a1f2e] p-8 rounded-xl shadow-md">
              <div className="text-5xl font-bold text-[#0DEFFE] mb-2">100%</div>
              <div className="text-xl text-gray-300 font-semibold mb-2">Client Satisfaction</div>
              <div className="text-gray-400">Every client has been thrilled with their results</div>
            </div>

            <div className="text-center bg-[#1a1f2e] p-8 rounded-xl shadow-md">
              <div className="text-5xl font-bold text-[#4FADFE] mb-2">5★</div>
              <div className="text-xl text-gray-300 font-semibold mb-2">Average Rating</div>
              <div className="text-gray-400">Consistently excellent feedback from clients</div>
            </div>

            <div className="text-center bg-[#1a1f2e] p-8 rounded-xl shadow-md">
              <div className="text-5xl font-bold text-[#0DEFFE] mb-2">5+</div>
              <div className="text-xl text-gray-300 font-semibold mb-2">Years Experience</div>
              <div className="text-gray-400">Proven track record in web development</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0DEFFE] to-[#4FADFE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Join Our Happy Clients?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Let's create something amazing together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[#0DEFFE] font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get Started
            </Link>
            <Link
              href="/services"
              className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-[#0DEFFE] transition-all duration-200"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
