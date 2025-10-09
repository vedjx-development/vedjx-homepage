import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Ved.jx and our commitment to providing excellent web solutions in Knoxville, Tennessee. Founded by Jake Shoffner with 5+ years of experience.',
  openGraph: {
    title: 'About Ved.jx - Web Solutions in Knoxville',
    description: 'Learn about Ved.jx and our commitment to providing excellent web solutions in Knoxville, Tennessee.',
    url: 'https://vedjx.netlify.app/about',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'About Ved.jx',
    description: 'Learn about Ved.jx and our commitment to providing excellent web solutions in Knoxville, Tennessee.',
  },
};

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0a0e1a] via-[#101728] to-[#1a1f2e] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#0DEFFE] to-[#4FADFE] bg-clip-text text-transparent">
              About Ved.jx
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Your trusted partner for web solutions in Knoxville
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-[#101728]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-100 mb-12 text-center">Our Story</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="order-2 lg:order-1 lg:col-span-2">
              <p className="text-gray-300 mb-6 text-lg">
                Ved.jx emerged from <strong>Jake Shoffner's</strong> passion for bridging technology and opportunity.
                While earning his Computer Science degree at the University of Tennessee, Knoxville, Jake witnessed
                firsthand how Knoxville's digital landscape evolved—and how a compelling online presence became
                the difference between being seen and being overlooked.
              </p>
              <p className="text-gray-300 text-lg">
                In today's digital-first world, your website isn't just a nice-to-have—it's your storefront, your
                portfolio, and your first impression rolled into one. Whether you're launching a startup, growing a
                local business, or building your personal brand, a professional web presence is no longer optional.
                It's how you compete, connect, and convert.
              </p>
            </div>
            <div className="order-1 lg:order-2 lg:col-span-1 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#0DEFFE] to-[#4FADFE] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative">
                  <img
                    src="/profile_Pic.png"
                    alt="Jake Shoffner - Founder of Ved.jx"
                    className="rounded-2xl shadow-2xl w-full max-w-xs mx-auto border-2 border-[#1a1f2e]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#0a0e1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-100 mb-4">Our Values</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              What sets us apart and drives everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1a1f2e] p-8 rounded-xl shadow-md">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-semibold text-gray-100 mb-4">Fair Pricing</h3>
              <p className="text-gray-400">
                I provide extremely fair pricing that works for small businesses and individuals.
                Your budget matters, and I work to deliver maximum value.
              </p>
            </div>

            <div className="bg-[#1a1f2e] p-8 rounded-xl shadow-md">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-semibold text-gray-100 mb-4">Excellent Customer Service</h3>
              <p className="text-gray-400">
                I always go the extra mile, explaining technical concepts in an understandable way.
                You'll never feel lost or confused about your project.
              </p>
            </div>

            <div className="bg-[#1a1f2e] p-8 rounded-xl shadow-md">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-semibold text-gray-100 mb-4">Maximum Value</h3>
              <p className="text-gray-400">
                I try my best to get the most value out of your website ideas, ensuring every feature
                serves a purpose and helps you achieve your goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-[#101728]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-100 mb-6">5 Years of Experience</h2>
            <p className="text-lg text-gray-400 mb-8">
              With half a decade of web development experience and a Computer Science education from
              the University of Tennessee, I bring both technical expertise and practical know-how to every project.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#0DEFFE] mb-2">5+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#4FADFE] mb-2">📍</div>
                <div className="text-gray-400">Knoxville Based</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#0DEFFE] mb-2">🎓</div>
                <div className="text-gray-400">UT Knoxville</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0DEFFE] to-[#4FADFE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Let's discuss how I can help bring your website vision to life
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#0DEFFE] font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
