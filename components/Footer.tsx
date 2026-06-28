import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#0a0e1a] text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Image
              src="/VedJx.svg"
              alt="Ved.jx Logo"
              width={120}
              height={40}
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm text-gray-400">
              Knoxville based web solutions you can trust
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-100 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-[#0DEFFE] transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#0DEFFE] transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-[#0DEFFE] transition-colors duration-200">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-[#0DEFFE] transition-colors duration-200">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#0DEFFE] transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gray-100 font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:865-978-2087" className="hover:text-[#0DEFFE] transition-colors duration-200">
                  865-978-2087
                </a>
              </li>
              <li>
                <a href="mailto:vedjx865@gmail.com" className="hover:text-[#0DEFFE] transition-colors duration-200">
                  vedjx865@gmail.com
                </a>
              </li>
              <li className="text-gray-400">
                Knoxville, Tennessee
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Ved.jx. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-[#0DEFFE] transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/faq" className="text-sm text-gray-400 hover:text-[#0DEFFE] transition-colors duration-200">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
