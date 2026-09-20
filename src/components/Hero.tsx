import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { Wordmark } from "./Wordmark";
import { principalInvestigator as pi, site } from "../data/lab";

/* Laboratory photograph supplied by the lab (Conquer Scientific).
   Serves as the hero background; if more photographs are supplied,
   this slot can rotate between them. */
const HERO_BG =
  "https://conquerscientific.com/wp-content/uploads/2023/06/research-lab-1.png";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line bg-ink">
      {/* ——— Background ——— */}
      <img
        src={HERO_BG}
        alt=""
        aria-hidden
        referrerPolicy="no-referrer"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      {/* Single solid veil — keeps the photograph present but the type legible */}
      <div className="absolute inset-0 bg-ink/62" aria-hidden />

      {/* ——— Content ——— */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-4rem)] max-w-[1280px] flex-col px-5 pb-8 pt-9 md:px-10 md:pb-10 md:pt-12">
        {/* Eyebrow */}
        <Reveal>
          <p className="flex items-center justify-end gap-x-8 gap-y-2">
            {/* <Wordmark tone="light" /> */}
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/60">
              {site.department}, {site.institution}
            </span>
          </p>
        </Reveal>
        <Reveal delay={60}>
          <div className="mt-7 border-t border-paper/20" aria-hidden />
        </Reveal>

        {/* Headline */}
        <div className="flex flex-1 flex-col justify-center py-14 md:py-20">
          <Reveal delay={120}>
            <h1 className="max-w-[17ch] font-serif text-[clamp(2.5rem,5.6vw,4.55rem)] font-light leading-[1.06] tracking-[-0.014em] text-paper">
              A research laboratory exploring{" "}
              <em className="font-normal not-italic underline decoration-paper/40 decoration-[1.5px] underline-offset-[10px] md:underline-offset-[13px]">
                natural product chemistry and pharmacology
              </em>
              .
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-8 max-w-[56ch] text-[15px] leading-[1.85] text-paper/80 md:mt-10 md:text-[16px]">
              {site.heroDescription}
            </p>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-5 md:mt-12">
              <a
                href="#research"
                className="group inline-flex items-center gap-2.5 border-b border-paper/60 pb-1.5 text-[13px] font-medium uppercase tracking-[0.14em] text-paper transition-colors hover:border-paper"
              >
                Explore our research
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={1.5}
                />
              </a>
              <a
                href="#people"
                className="group inline-flex items-center gap-2.5 pb-1.5 text-[13px] font-medium uppercase tracking-[0.14em] text-paper/75 underline decoration-paper/35 underline-offset-[7px] transition-colors hover:text-paper hover:decoration-paper/70"
              >
                Meet the team
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={1.5}
                />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Bottom meta */}
        <Reveal delay={200}>
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1.5 border-t border-paper/20 pt-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper/55">
              Fig. 01 — The laboratory
            </span>
            <span className="font-mono text-[10px] uppercase leading-[1.9] tracking-[0.16em] text-paper/55">
              Principal Investigator — {pi.shortName}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper/55">
              {site.location}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
