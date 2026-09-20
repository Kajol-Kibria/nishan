import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { collaboration, site } from "../data/lab";

export function Collaboration() {
  return (
    <section id="collaboration" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-[1280px] px-5 py-16 md:px-10 md:py-28">
        <SectionHeader index="07" title="Collaboration" />

        <div className="mt-14 grid gap-12 md:mt-20 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal delay={80}>
              <p className="max-w-[38ch] font-serif text-[1.5rem] font-light leading-[1.5] tracking-[-0.005em] md:text-[1.75rem]">
                {collaboration.statement}
              </p>
              <a
                href={`mailto:${site.email}`}
                className="group mt-9 inline-flex items-center gap-2.5 border-b border-ink/60 pb-1.5 text-[13px] font-medium uppercase tracking-[0.14em] transition-colors hover:border-accent hover:text-accent"
              >
                Write to the laboratory
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={1.5}
                />
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            {collaboration.audiences.map((a, i) => (
              <Reveal key={a.label} delay={120 + i * 70}>
                <div className="grid gap-1.5 border-t border-line py-6 last:border-b sm:grid-cols-[220px_1fr] sm:items-baseline sm:gap-8">
                  <h3 className="font-serif text-[1.15rem] leading-tight">{a.label}</h3>
                  <p className="text-[13.5px] leading-[1.8] text-ink-2">{a.note}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={200}>
              <p className="mt-6 font-mono text-[10px] leading-[1.8] text-ink-3">
                Wording above is placeholder — the laboratory's actual invitation
                and application process will replace it.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
