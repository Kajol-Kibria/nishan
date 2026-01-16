'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

// Navigation items config
const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Our Research', href: '/our-research' },
  {
    label: 'Lab Members',
    dropdown: [
      { label: 'Current Lab Members', href: '/current-lab-members' },
      { label: 'Former Lab Members', href: '/former-lab-members' }
    ]
  },
  { label: 'Publications', href: '/publications' },
  {
    label: 'Media',
    dropdown: [
      { label: 'Photos', href: '/photos' },
      { label: 'News', href: '/news' }
    ]
  },
  { label: 'Funding', href: '/funding' },
  { label: 'Contact', href: '/contact' }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  return (
    <header className="relative z-50">
      <nav className="bg-primary text-white font-host-grotesk w-full shadow-sm border-b border-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Main row */}
          <div className="flex items-center justify-between py-6 relative">
            {/* Logo and Brand */}
            <Link href="/" className="flex items-center focus:outline-none group">
              <span className="sr-only">AS Research Lab</span>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-extrabold bg-gradient-to-r from-secondary via-orange-200 to-secondary text-transparent bg-clip-text tracking-tight group-hover:scale-105 transition-transform">AS Research Lab</span>
                {/* <span className="hidden sm:block animate-pulse"><Image src="/sparkle.svg" alt="Lab Icon" width={27} height={27} /></span> */}
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <ul role="list" className="flex items-center space-x-2">
                {navItems.map((item) =>
                  item.dropdown ? (
                    <li key={item.label} className="group relative">
                      <span
                        className={classNames(
                          'inline-flex items-center py-2 px-4 rounded-md font-medium cursor-pointer transition-colors duration-200 gap-1',
                          pathname && item.dropdown.some((dd) => dd.href === pathname)
                            ? 'text-secondary bg-white/5 shadow-inner'
                            : 'text-white hover:text-secondary hover:bg-primary/30'
                        )}
                      >
                        {item.label}
                        <svg
                          className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                      {/* Dropdown */}
                      <ul className="absolute left-0 hidden group-hover:block bg-white/95 rounded-lg shadow-2xl min-w-[200px] border border-secondary z-50 animate-fade-in">
                        {item.dropdown.map((ddItem) => (
                          <li key={ddItem.href}>
                            <Link
                              href={ddItem.href}
                              className={classNames(
                                'block px-4 py-2 text-sm rounded transition-colors duration-150',
                                ddItem.href === pathname
                                  ? 'bg-secondary/10 text-primary font-semibold'
                                  : 'text-primary hover:bg-secondary/30 hover:text-primary'
                              )}
                            >
                              {ddItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ) : (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={classNames(
                          'inline-flex items-center py-2 px-4 rounded-md font-medium transition-colors duration-200',
                          pathname === item.href
                            ? 'text-secondary bg-white/5 shadow-inner'
                            : 'text-white hover:text-secondary hover:bg-primary/30'
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* LinkedIn CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="https://www.linkedin.com/in/as-sazzad-mahmud-317311132/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                <span>LinkedIn</span>
                {/* <span className="ml-2"><Image src="/linkedin.svg" alt="LinkedIn" width={18} height={18} /></span> */}
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md bg-secondary/80 text-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
              aria-label="Open menu"
            >
              <svg className="h-7 w-7" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Nav */}
          {mobileOpen && (
            <div
              className="fixed inset-0 bg-black/40 z-[99] md:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
          )}
          <div
            className={classNames(
              'flex flex-col md:hidden bg-primary fixed top-0 right-0 h-full w-4/5 max-w-xs z-[100] shadow-2xl transform transition-transform duration-300',
              mobileOpen ? 'translate-x-0' : 'translate-x-full'
            )}
            style={{ transitionProperty: 'transform' }}
            role="dialog"
            aria-modal="true"
          >
            <div className="px-6 py-6 flex items-center justify-between">
              <span className="text-lg font-bold tracking-tight text-secondary">AS Research Lab</span>
              <button className="p-2 text-white hover:text-secondary" onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <svg className="h-7 w-7" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto">
              <ul className="px-4 py-2 space-y-1">
                {navItems.map((item) =>
                  item.dropdown ? (
                    <li key={item.label} className="relative">
                      <button
                        onClick={() =>
                          setMobileDropdown(mobileDropdown === item.label ? null : item.label)
                        }
                        className={classNames(
                          'w-full flex justify-between items-center py-2 px-3 rounded hover:bg-secondary/20 transition-colors font-medium outline-none focus:ring-2 focus:ring-secondary',
                          pathname && item.dropdown.some((dd) => dd.href === pathname)
                            ? 'text-secondary bg-white/10'
                            : 'text-white'
                        )}
                      >
                        {item.label}
                        <svg
                          className={classNames(
                            "ml-1 w-5 h-5 transition-transform",
                            mobileDropdown === item.label ? "rotate-180" : ""
                          )}
                          fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {mobileDropdown === item.label && (
                        <ul className="pl-4 mt-1 space-y-0.5">
                          {item.dropdown.map((ddItem) => (
                            <li key={ddItem.href}>
                              <Link
                                href={ddItem.href}
                                onClick={() => setMobileOpen(false)}
                                className={classNames(
                                  'block py-2 px-2 rounded text-sm',
                                  ddItem.href === pathname
                                    ? 'text-secondary bg-white/10 font-semibold'
                                    : 'text-white hover:text-secondary hover:bg-secondary/15'
                                )}
                              >
                                {ddItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ) : (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={classNames(
                          'block py-2 px-3 rounded font-medium transition-colors',
                          pathname === item.href
                            ? 'text-secondary bg-white/10'
                            : 'text-white hover:text-secondary hover:bg-secondary/15'
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
              <div className="px-4 mt-4">
                <Link
                  href="https://www.linkedin.com/in/as-sazzad-mahmud-317311132/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  onClick={() => setMobileOpen(false)}
                >
                  <span>LinkedIn</span>
                  <span className="ml-2"><Image src="/linkedin.svg" alt="LinkedIn" width={17} height={17} /></span>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </nav>
    </header>
  );
}