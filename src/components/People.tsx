import Link from "next/link";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { members } from "../data/lab";

export function People() {
  const currentMembers = members.filter((m) => m.status === "current");
  const formerMembers = members.filter((m) => m.status === "former");

  return (
    <section id="people" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-[1280px] px-5 py-16 md:px-10 md:py-28">
        <SectionHeader index="04" title="People" />

        <Reveal delay={80}>
          <p className="mt-10 max-w-[60ch] text-[14.5px] leading-[1.9] text-ink-2 md:mt-12">
            A small group of research members working with the principal
            investigator across the laboratory's themes — from bench extraction
            and bioassays to docking and data analysis.
          </p>
        </Reveal>

        {/* ——— Current members ——— */}
        {currentMembers.length > 0 && (
          <div className="mt-12 md:mt-14">
            <Reveal>
              <h3 className="flex items-center gap-4 font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-3">
                <span className="inline-block h-px w-8 bg-ink-3/60" aria-hidden />
                Current Members
              </h3>
            </Reveal>

            <ul className="mt-8 md:grid md:grid-cols-2 md:gap-x-20">
              {currentMembers.map((m, i) => (
                <Reveal
                  key={m.id}
                  delay={i * 55}
                  as="li"
                  className="group relative border-t border-line last:border-b md:last:border-b-0 md:[&:nth-last-child(2)]:border-b"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 -top-px h-px origin-left scale-x-0 bg-accent transition-transform duration-700 ease-out group-hover:scale-x-100"
                  />
                  <Link
                    href={`/members/${m.id}`}
                    className="-mx-3 flex items-baseline gap-6 px-3 py-6 transition-colors duration-300 md:py-7"
                  >
                    <span className="w-8 shrink-0 font-mono text-[11px] tracking-[0.14em] text-ink-3 transition-colors duration-300 group-hover:text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="font-serif text-[1.35rem] font-light leading-tight tracking-[-0.008em] transition-transform duration-500 ease-out group-hover:translate-x-1 md:text-[1.45rem]">
                      {m.name}
                    </p>
                    <span className="ml-auto shrink-0 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-3">
                      {m.role}
                    </span>
                  </Link>
                </Reveal>
              ))}
            </ul>
          </div>
        )}

        {/* ——— Former members ——— */}
        {formerMembers.length > 0 && (
          <div className="mt-16 md:mt-20">
            <Reveal>
              <h3 className="flex items-center gap-4 font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-3">
                <span className="inline-block h-px w-8 bg-ink-3/60" aria-hidden />
                Former Members
              </h3>
            </Reveal>

            <ul className="mt-8 md:grid md:grid-cols-2 md:gap-x-20">
              {formerMembers.map((m, i) => (
                <Reveal
                  key={m.id}
                  delay={i * 55}
                  as="li"
                  className="group relative border-t border-line last:border-b md:last:border-b-0 md:[&:nth-last-child(2)]:border-b"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 -top-px h-px origin-left scale-x-0 bg-accent transition-transform duration-700 ease-out group-hover:scale-x-100"
                  />
                  <Link
                    href={`/members/${m.id}`}
                    className="-mx-3 flex items-baseline gap-6 px-3 py-6 transition-colors duration-300 md:py-7"
                  >
                    <span className="w-8 shrink-0 font-mono text-[11px] tracking-[0.14em] text-ink-3 transition-colors duration-300 group-hover:text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="font-serif text-[1.35rem] font-light leading-tight tracking-[-0.008em] transition-transform duration-500 ease-out group-hover:translate-x-1 md:text-[1.45rem]">
                      {m.name}
                    </p>
                    <span className="ml-auto shrink-0 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-3">
                      {m.role}
                    </span>
                  </Link>
                </Reveal>
              ))}
            </ul>
          </div>
        )}

        <Reveal delay={120}>
          <p className="mt-14 font-mono text-[10.5px] leading-[1.8] text-ink-3 md:mt-16">
            Prospective students — see{" "}
            <Link
              href="/#collaboration"
              className="underline underline-offset-4 transition-colors hover:text-accent"
            >
              Collaboration
            </Link>{" "}
            on the home page.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
