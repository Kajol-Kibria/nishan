"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "../data/lab";
import { Wordmark } from "./Wordmark";

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  /* ——— Lock body while the mobile menu is open ——— */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, []);

  return (
    <>
      {/* Keyboard users: skip straight to the content */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-16 focus:z-[80] focus:border focus:border-line focus:bg-paper focus:px-4 focus:py-2 focus:font-mono focus:text-[11px] focus:uppercase focus:tracking-[0.16em]"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-[2px]">
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-5 md:px-10">
          <Link href="/" aria-label="Nishan Lab — home">
            <Wordmark />
          </Link>

          {/* Desktop */}
          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {nav.map((item) => {
              const isActive = item.href.includes('#') ? false : pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`nav-link text-[11.5px] font-medium uppercase tracking-[0.16em] transition-colors hover:text-ink ${isActive ? "is-active text-ink" : "text-ink-2"
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex size-10 items-center justify-center md:hidden"
            aria-label="Open menu"
          >
            <Menu className="size-5" strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        data-lenis-prevent
        className={`fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-paper transition-opacity duration-500 md:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-line px-5">
          <Wordmark />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="flex size-10 items-center justify-center"
            aria-label="Close menu"
          >
            <X className="size-5" strokeWidth={1.5} />
          </button>
        </div>

        <nav className="flex flex-1 flex-col justify-center gap-2 px-6" aria-label="Mobile">
          {nav.map((item, i) => {
            const isActive = item.href.includes('#') ? false : pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`group flex items-baseline gap-5 border-b border-line py-5 transition-all duration-500 ${open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                  }`}
                style={{ transitionDelay: open ? `${90 + i * 60}ms` : "0ms" }}
              >
                <span
                  className={`font-mono text-[11px] tracking-[0.2em] transition-colors ${isActive ? "text-accent" : "text-ink-3"
                    }`}
                >
                  0{i + 1}
                </span>
                <span className="font-serif text-[2rem] font-light leading-none transition-transform duration-500 group-hover:translate-x-1.5">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="px-6 pb-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-3">
            {site.location} · {site.email}
          </p>
        </div>
      </div>
    </>
  );
}
