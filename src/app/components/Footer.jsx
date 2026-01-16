import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaRegBuilding, FaEnvelope, FaPhoneAlt, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#18362c] text-[#e4fadf] border-t border-[#27493b] rounded-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Call to Action */}
        <div className="text-center pt-16 pb-8 md:pb-16 border-b border-[#27493b]">
          <h2 className="text-2xl lg:text-3xl font-bold mb-3 text-white">
            Ready for Research Growth
          </h2>
          <p className="mb-6 text-[#b2c6b3]">
            Let's discuss how AS Research Lab's tailored strategies can unlock...
          </p>
          <a
            href="mailto:contact@asresearchlab.com"
            className="inline-block bg-[#aee571] text-[#22462e] font-semibold px-8 py-3 rounded-md transition-colors duration-150 hover:bg-[#c3f098]"
            style={{ boxShadow: '0 1px 6px 0 rgba(102,255,123,0.13)' }}
          >
            Book 30 Min Free Meeting
          </a>
        </div>

        {/* Info Sections */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 py-12">
          {/* About/Logo */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <div className="inline-flex items-center justify-center rounded-full bg-[#3ccd6f] p-1 w-9 h-9">
                {/* If you want a react-icon here for a logo, you may replace this. */}
                <span className="text-2xl font-bold text-white">AS</span>
              </div>
              <span className="font-bold text-lg text-white">AS Research Lab</span>
            </div>
            <p className="text-[#b2c6b3] leading-snug text-sm md:pr-6">
              AS Research Lab empowers organizations with strategic consulting, deep insights, and proven solutions to thrive in an ever-changing world.
            </p>
          </div>
          {/* Quick Links & Pages */}
          <div className="flex flex-col md:flex-row md:space-x-12 lg:space-x-20 space-y-8 md:space-y-0">
            {/* Quick Links */}
            <div>
              <h3 className="text-base font-semibold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-4 text-sm">
                <li><Link href="/" className="transition-colors hover:text-[#aee571]">Home</Link></li>
                <li><Link href="/about" className="transition-colors hover:text-[#aee571]">About Us</Link></li>
                <li><Link href="/services" className="transition-colors hover:text-[#aee571]">Services</Link></li>
                <li><Link href="/case-studies" className="transition-colors hover:text-[#aee571]">Case Studies</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-semibold mb-6 text-white">Pages</h3>
              <ul className="space-y-4 text-sm">
                <li><Link href="/contact" className="transition-colors hover:text-[#aee571]">Contact Us</Link></li>
                <li><Link href="/reviews" className="transition-colors hover:text-[#aee571]">Reviews</Link></li>
                <li><Link href="/404" className="transition-colors hover:text-[#aee571]">404 Error</Link></li>
                <li><Link href="/license" className="transition-colors hover:text-[#aee571]">License</Link></li>
              </ul>
            </div>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-base font-semibold mb-6 text-white">
              <span className="sr-only">Contact Information</span>
            </h3>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start space-x-3">
                <span className="mt-1 text-lg text-[#aee571]"><FaRegBuilding /></span>
                <span>123 Research Avenue, Suite 200, LC</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="mt-1 text-lg text-[#aee571]"><FaEnvelope /></span>
                <Link href="mailto:contact@asresearchlab.com" className="hover:text-[#aee571] transition-colors">contact@asresearchlab.com</Link>
              </li>
              <li className="flex items-start space-x-3">
                <span className="mt-1 text-lg text-[#aee571]"><FaPhoneAlt /></span>
                <Link href="tel:+1(800)556-0139" className="hover:text-[#aee571] transition-colors">+1 (800) 556-0139</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Social & Copyright */}
        <div className="border-t border-[#27493b] py-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <div className="flex space-x-6 mb-2 md:mb-0">
            <Link
              href="https://facebook.com/"
              className="hover:text-[#aee571] transition-colors flex items-center space-x-2"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-lg" />
              <span className="hidden sm:inline">Facebook</span>
            </Link>
            <Link
              href="https://instagram.com/"
              className="hover:text-[#aee571] transition-colors flex items-center space-x-2"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-lg" />
              <span className="hidden sm:inline">Instagram</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/as-sazzad-mahmud-317311132/"
              className="hover:text-[#aee571] transition-colors flex items-center space-x-2"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-lg" />
              <span className="hidden sm:inline">LinkedIn</span>
            </Link>
          </div>
          <div className="text-[#a3baa7] text-xs md:text-sm text-center">
            © 2026 AS Research Lab. All rights reserved.<br className="block md:hidden" />
            <span className="ml-0 md:ml-2">Developed by <Link href='https://www.linkedin.com/in/kajol-kibria-8b2004252/' className='text-secondary'>Kibria</Link></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
