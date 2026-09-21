import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { principalInvestigator as pi } from "../data/lab";

export function Investigator() {
  return (
    <section id="investigator" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-[1280px] px-5 py-16 md:px-10 md:py-28">
        <SectionHeader title="Principal Investigator" />

        <div className="mt-14 grid gap-12 md:mt-20 lg:grid-cols-12 lg:gap-10">
          {/* ——— Portrait ——— */}
          <div className="lg:col-span-4">
            <Reveal delay={80} className="h-full">
              <figure className="lg:sticky lg:top-24">
                <img
                  src={pi.photo}
                  alt={`Portrait of ${pi.name}`}
                  className="photo aspect-[4/5] w-full border border-line object-cover"
                  loading="lazy"
                />
                <figcaption className="mt-3 flex items-baseline justify-between gap-4 border-t border-line pt-2.5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-3">
                    {pi.name}
                  </span>
                  <span className="text-right font-mono text-[10px] uppercase tracking-[0.04em] text-ink-3">
                    Principal Investigator
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          </div>

          {/* ——— Profile ——— */}
          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal delay={120}>
              <h3 className="font-serif text-[2.1rem] font-light leading-tight tracking-[-0.01em] md:text-[2.6rem]">
                {pi.name}
              </h3>
              <p className="mt-4 space-y-0.5 text-[14px] leading-[1.7] text-ink-2">
                <span className="block font-medium text-ink">{pi.position}</span>
                <span className="block">{pi.title}</span>
                <span className="block">{pi.department}</span>
                <span className="block">{pi.office}</span>
              </p>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-9 space-y-5 border-l border-line pl-6 md:pl-8">
                {pi.bio.map((para, i) => (
                  <p key={i} className="max-w-[62ch] text-[14.5px] leading-[1.85] text-ink-2">
                    {para}
                  </p>
                ))}
              </div>
            </Reveal>

            <div className="mt-12 grid gap-12 sm:grid-cols-2">
              <Reveal delay={200}>
                <div>
                  <h4 className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-ink-3">
                    Research interests
                  </h4>
                  <ul className="mt-5">
                    {pi.interests.map((it) => (
                      <li
                        key={it}
                        className="border-t border-line py-3 text-[13.5px] text-ink-2 last:border-b"
                      >
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={260}>
                <div>
                  <h4 className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-ink-3">
                    Academic links
                  </h4>
                  <ul className="mt-5">
                    {pi.links
                      .filter((l) => l.active)
                      .map((l) => (
                      <li key={l.label} className="border-t border-line last:border-b">
                        <a
                          href={l.href}
                          {...(l.href.startsWith("http")
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                          className="group flex items-center justify-between py-3 text-[13.5px] text-ink-2 transition-colors hover:text-accent"
                        >
                          {l.label}
                          <ArrowUpRight
                            className="size-3.5 text-ink-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                            strokeWidth={1.5}
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
