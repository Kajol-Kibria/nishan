'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

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

  // Sticky effect state
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 32);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Color choices for sticky: darker, more transparent, but remain brand-consistent.
  // You can further tune these per your brand palette.
  const stickyBg = "bg-primary/70 backdrop-blur border-secondary/40";
  const stickyText = "text-white";
  const stickyActive = "bg-secondary/20 text-secondary";
  const stickyInactive = "hover:bg-secondary/30 hover:text-secondary/90";

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav
        className={classNames(
          "font-host-grotesk w-full transition-all duration-300 shadow-sm border-b",
          scrolled
            ? stickyBg
            : "bg-primary border-secondary/20 text-white"
        )}
        style={{
          boxShadow: scrolled
            ? '0 2px 12px 0 rgba(44,62,80,0.10)'
            : undefined,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Main row */}
          <div className={classNames(
            "flex items-center justify-between relative",
            scrolled ? "py-3" : "py-6"
          )}>
            {/* Logo and Brand */}
            <Link href="/" className="flex items-center focus:outline-none group">
              <span className="sr-only">Nishan Lab</span>
              <div className="flex items-center gap-2 font-extrabold">
                <span>
                  <Image
                    src="/nishan-logo.png"
                    alt="Lab Icon"
                    width={scrolled ? 40 : 50}
                    height={scrolled ? 40 : 50}
                    className="transition-all duration-200"
                  />
                </span>
                <span
                  className={classNames(
                    "transition-all duration-200 group-hover:scale-105",
                    scrolled ? "text-xl mt-0.5 text-white" : "text-2xl mt-1 text-white"
                  )}
                >
                  Nishan Lab
                </span>
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
                            ? scrolled
                              ? stickyActive
                              : "text-secondary bg-white/5 shadow-inner"
                            : scrolled
                              ? `${stickyText} ${stickyInactive}`
                              : "text-white hover:text-secondary hover:bg-primary/30"
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
                      <ul className={classNames(
                        "absolute left-0 hidden group-hover:block rounded-lg shadow-2xl min-w-[200px] border z-50 animate-fade-in",
                        scrolled
                          ? "bg-primary/95 border-secondary/30"
                          : "bg-white/95 border-secondary"
                      )}>
                        {item.dropdown.map((ddItem) => (
                          <li key={ddItem.href}>
                            <Link
                              href={ddItem.href}
                              className={classNames(
                                'block px-4 py-2 text-sm rounded transition-colors duration-150',
                                ddItem.href === pathname
                                  ? 'bg-secondary/10 text-primary font-semibold'
                                  : scrolled
                                    ? 'text-white hover:bg-secondary/30 hover:text-secondary/90'
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
                            ? scrolled
                              ? stickyActive
                              : "text-secondary bg-white/5 shadow-inner"
                            : scrolled
                              ? `${stickyText} ${stickyInactive}`
                              : "text-white hover:text-secondary hover:bg-primary/30"
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
                className={classNames(
                  "btn transition-all duration-200",
                  scrolled ? "bg-secondary text-primary ring-1 ring-secondary/70 hover:bg-primary hover:text-white" : ""
                )}
              >
                <span>LinkedIn</span>
                {/* <span className="ml-2"><Image src="/linkedin.svg" alt="LinkedIn" width={18} height={18} /></span> */}
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className={classNames(
                "md:hidden inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary transition-all",
                scrolled
                  ? "bg-secondary/90 text-primary hover:bg-primary hover:text-white"
                  : "bg-secondary/80 text-primary hover:bg-secondary"
              )}
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
              'flex flex-col md:hidden fixed top-0 right-0 h-full w-4/5 max-w-xs z-[100] shadow-2xl transform transition-transform duration-300',
              mobileOpen ? 'translate-x-0' : 'translate-x-full',
              scrolled ? "bg-primary/95" : "bg-primary"
            )}
            style={{ transitionProperty: 'transform' }}
            role="dialog"
            aria-modal="true"
          >
            <div className="px-6 py-6 flex items-center justify-between">
              <span className={classNames(
                "text-lg font-bold tracking-tight text-secondary"
              )}>AS Research Lab</span>
              <button
                className={classNames(
                  "p-2 hover:text-secondary",
                  scrolled ? "text-white" : "text-white"
                )}
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
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
                            : "text-white"
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
                                    : "text-white hover:text-secondary hover:bg-secondary/15"
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
                            : "text-white hover:text-secondary hover:bg-secondary/15"
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
                  className={classNames(
                    "btn w-full",
                    scrolled ? "bg-secondary text-primary ring-1 ring-secondary/70 hover:bg-primary hover:text-white" : ""
                  )}
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
      {/* Reserve height to prevent jump */}
      <div aria-hidden className="block" style={{ height: scrolled ? 64 : 96 }} />
    </header>
  );
}