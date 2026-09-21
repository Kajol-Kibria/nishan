import { Reveal } from "./Reveal";
import { about, site } from "../data/lab";

export function About() {
  return (
    <section id="about" className="scroll-mt-20">
      <div className="mx-auto max-w-[1280px] px-5 py-16 md:px-10 md:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          {/* ——— Left rail ——— */}
          <div className="lg:col-span-4">
            <Reveal className="h-full">
              <div className="lg:sticky lg:top-28">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[11px] tracking-[0.22em] text-ink-3">
                    01&nbsp;/
                  </span>
                  <h2 className="font-serif text-[1.9rem] font-light leading-none tracking-[-0.01em] md:text-[2.4rem]">
                    About
                  </h2>
                  <span className="hidden pb-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-3 lg:ml-auto lg:block">
                    The laboratory
                  </span>
                </div>
                <div className="mt-6 hidden border-t border-line pt-5 lg:block">
                  <p className="font-mono text-[10px] uppercase leading-[2] tracking-[0.18em] text-ink-3">
                    Nishan Lab
                    <br />
                    {site.department}
                    <br />
                    {site.institution}
                  </p>
                  <p className="mt-5 border-t border-line pt-5 font-mono text-[10px] uppercase leading-[2.1] tracking-[0.18em] text-ink-3">
                    Natural Product Chemistry
                    <br />
                    Network Pharmacology
                    <br />
                    Pharmacology
                    <br />
                    Computational Cancer Research
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ——— Text ——— */}
          <div className="lg:col-span-7 lg:col-start-6">
            {about.map((para, i) => (
              <Reveal key={i} delay={i * 90}>
                <p
                  className={`max-w-[64ch] text-[15.5px] leading-[1.9] md:text-[16.5px] ${
                    i === 0
                      ? "font-serif text-[1.25rem] font-light leading-[1.7] text-ink md:text-[1.45rem]"
                      : "mt-7 text-ink-2"
                  }`}
                >
                  {para}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
