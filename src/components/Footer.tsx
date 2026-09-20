import Link from "next/link";
import { nav, site } from "../data/lab";
import { Wordmark } from "./Wordmark";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-[1280px] px-5 py-12 md:px-10 md:py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <Link href="/" aria-label="Back to home">
            <Wordmark />
          </Link>

          <nav className="flex flex-wrap gap-x-7 gap-y-3" aria-label="Footer">
            {nav
              .filter((n) => n.label !== "News")
              .map((n) => (
                <Link
                  key={n.label}
                  href={n.href}
                  className="nav-link text-[11px] font-medium uppercase tracking-[0.16em] text-ink-2 transition-colors hover:text-ink"
                >
                  {n.label}
                </Link>
              ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 md:flex-row md:items-baseline md:justify-between">
          <p className="font-mono text-[10px] uppercase leading-[1.9] tracking-[0.16em] text-ink-3">
            {site.department} · {site.institution}
          </p>
          <p className="font-mono text-[10px] leading-[1.9] tracking-[0.1em] text-ink-3">
            © 2026 Nishan Lab
          </p>
        </div>
      </div>
    </footer>
  );
}
