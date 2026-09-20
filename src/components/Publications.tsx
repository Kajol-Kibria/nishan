import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { publications, scholarProfileUrl } from "../data/lab";

export function Publications() {
  return (
    <section id="publications" className="scroll-mt-20 border-t border-line bg-paper-2/50">
      <div className="mx-auto max-w-[1280px] px-5 py-16 md:px-10 md:py-28">
        <SectionHeader
          index="05"
          title="Selected Publications"
          note="From the group's Google Scholar record"
        />

        <div className="mt-6 md:mt-8">
          {publications.map((p, i) => (
            <Reveal key={p.title} delay={i * 45}>
              <article className="border-b border-line py-8 first:border-t md:grid md:grid-cols-[90px_1fr] md:gap-x-10 md:py-9">
                <p className="pt-1 font-mono text-[11.5px] tracking-[0.08em] text-ink-3">
                  {p.year}
                </p>

                <div className="mt-2.5 md:mt-0">
                  {/* Authors — reference order */}
                  <p className="text-[12.5px] leading-[1.7] text-ink-2">
                    {p.authors.map((a, j) => (
                      <span key={a.name}>
                        <span className={a.lab ? "font-medium text-ink" : undefined}>
                          {a.name}
                        </span>
                        {j < p.authors.length - 2 && ", "}
                        {j === p.authors.length - 2 && ", & "}
                      </span>
                    ))}
                    {p.etAl && " et al."}
                  </p>

                  {/* Title */}
                  <h3 className="mt-1.5 max-w-[46rem] font-serif text-[1.14rem] leading-[1.45] md:text-[1.2rem]">
                    {p.title}
                  </h3>

                  {/* Journal */}
                  <p className="mt-2 text-[12.5px] leading-[1.7] text-ink-2">
                    <em className="font-serif italic">{p.journal}</em>
                    <span className="text-ink-3">, {p.details}</span>
                  </p>

                  {/* Understated links & record details */}
                  <p className="mt-2 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    {p.doi && (
                      <a
                        href={`https://doi.org/${p.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-[10.5px] text-accent underline decoration-accent/35 underline-offset-[3px] transition-colors hover:decoration-accent"
                      >
                        doi:{p.doi}
                      </a>
                    )}
                    <a
                      href={p.scholar}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1 font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-3 underline decoration-line underline-offset-[3px] transition-colors hover:text-accent hover:decoration-accent"
                    >
                      Google Scholar
                      <ArrowUpRight
                        className="size-3 transition-transform duration-300 group-hover:-translate-y-px group-hover:translate-x-px"
                        strokeWidth={1.5}
                      />
                    </a>
                    {typeof p.cited === "number" && p.cited > 0 && (
                      <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-3">
                        Cited by {p.cited}
                      </span>
                    )}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
            <a
              href={scholarProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 border-b border-ink/60 pb-1.5 text-[13px] font-medium uppercase tracking-[0.14em] transition-colors hover:border-accent hover:text-accent"
            >
              View all publications
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </a>
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-3">
              Full record on the principal investigator's Google Scholar profile
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
