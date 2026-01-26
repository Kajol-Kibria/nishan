import Image from 'next/image';
import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaRegBuilding,
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedinIn,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#18362c] text-[#e4fadf] border-t border-[#27493b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Call to Action */}
        <div className="text-center pt-14 pb-7 md:pb-14 border-b border-[#27493b]">
          <h2 className="text-2xl lg:text-3xl font-bold mb-3 text-white">
            Connect With Nishan Lab
          </h2>
          <p className="mb-6 text-[#b2c6b3]">
            Interested in collaborating or have questions? We're eager to connect and explore research opportunities together.
          </p>
          <Link
            href="mailto:contact@nishanlab.com"
            className="btn"
            style={{ boxShadow: '0 1px 6px 0 rgba(102,255,123,0.13)' }}
          >
            <span className='py-2 px-6'>Book a Free 30-Minute Meeting</span>
          </Link>
        </div>

        {/* Info Sections */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 py-12">
          {/* About/Logo */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <span>
                <Image
                  src="/nishan-logo.png"
                  alt="Nishan Lab Logo"
                  width={50}
                  height={50}
                  priority
                  className="rounded-lg"
                />
              </span>
              <span className="font-bold text-lg text-white">Nishan Research Lab</span>
            </div>
            <p className="text-[#b2c6b3] leading-snug text-sm md:pr-6">
              Nishan Research Lab pioneers advancements in drug discovery, cancer research, and computational biology. We bridge nature and technology for innovative therapeutics and solutions.
            </p>
          </div>

          {/* Quick Links & Pages */}
          <div className="flex flex-col md:flex-row md:space-x-12 lg:space-x-20 space-y-8 md:space-y-0">
            {/* Quick Links */}
            <div>
              <h3 className="text-base font-semibold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <Link href="/" className="transition-colors hover:text-[#aee571]">Home</Link>
                </li>
                <li>
                  <Link href="/our-research" className="transition-colors hover:text-[#aee571]">Our Research</Link>
                </li>
                <li>
                  <Link href="/current-lab-members" className="transition-colors hover:text-[#aee571]">Current Lab Members</Link>
                </li>
                <li>
                  <Link href="/former-lab-members" className="transition-colors hover:text-[#aee571]">Former Lab Members</Link>
                </li>


                <li>
                  <Link href="/contact" className="transition-colors hover:text-[#aee571]">Contact</Link>
                </li>
              </ul>
            </div>
            {/* Resources */}
            <div>
              <h3 className="text-base font-semibold mb-6 text-white">Resources</h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <Link href="/publications" className="transition-colors hover:text-[#aee571]">Publications</Link>
                </li>
                <li>
                  <Link href="/photos" className="transition-colors hover:text-[#aee571]">Photos</Link>
                </li>
                <li>
                  <Link href="/news" className="transition-colors hover:text-[#aee571]">News</Link>
                </li>
                <li>
                  <Link href="/funding" className="transition-colors hover:text-[#aee571]">Funding</Link>
                </li>
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
                <span className="mt-1 text-lg text-[#aee571]">
                  <FaRegBuilding />
                </span>
                <span>
                  Dhaka International University,<br />
                  Satarkul, Badda, Dhaka-1212, Bangladesh.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="mt-1 text-lg text-[#aee571]">
                  <FaEnvelope />
                </span>
                <Link href="sazzadnishan96@gmail.com" className="hover:text-[#aee571] transition-colors">
                  sazzadnishan96@gmail.com
                </Link>
              </li>
              <li className="flex items-start space-x-3">
                <span className="mt-1 text-lg text-[#aee571]">
                  <FaPhoneAlt />
                </span>
                <Link href="tel:+1-800-123-4567" className="hover:text-[#aee571] transition-colors">
                  +8801521305611
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-[#27493b] py-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <div className="flex space-x-6 mb-2 md:mb-0">
            <Link
              href="https://www.facebook.com/asm.nishan"
              className="hover:text-[#aee571] transition-colors flex items-center space-x-2"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-lg" />
              <span className="hidden sm:inline">Facebook</span>
            </Link>
            <Link
              href="https://www.instagram.com/itsnishan__"
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
            © {new Date().getFullYear()} Nishan Lab. All rights reserved.
            <br className="block md:hidden" />
            <span className="ml-0 md:ml-2">Developed & powered by <Link href='https://www.linkedin.com/in/kajol-kibria-8b2004252/' className='text-secondary'>Kibria</Link></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
