import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { researchThemes } from "../data/lab";

export function Research() {
  return (
    <section id="research" className="scroll-mt-20 border-t border-line bg-paper-2/50">
      <div className="mx-auto max-w-[1280px] px-5 py-16 md:px-10 md:py-28">
        <SectionHeader index="02" title="Research" />

        <Reveal delay={80}>
          <p className="mt-10 max-w-[60ch] text-[14.5px] leading-[1.9] text-ink-2 md:mt-12">
            The group works on a small number of questions at a time. The themes
            below sketch the current shape of the laboratory; each is developed
            through one or two long-running projects rather than many short ones.
          </p>
        </Reveal>

        <ul className="mt-12 md:mt-16">
          {researchThemes.map((t, i) => (
            <Reveal
              key={t.index}
              delay={i * 70}
              as="li"
              className="group relative grid gap-y-3 border-t border-line py-9 transition-colors duration-300 last:border-b hover:bg-paper-2/70 md:grid-cols-12 md:items-baseline md:gap-x-8 md:py-12"
            >
              {/* accent hairline — draws in on hover */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 -top-px h-px origin-left scale-x-0 bg-accent transition-transform duration-700 ease-out group-hover:scale-x-100"
              />

              <span className="font-serif text-[2.4rem] font-light leading-none text-ink-3 transition-colors duration-500 group-hover:text-accent md:col-span-2 md:text-[3rem]">
                {t.index}
              </span>

              <h3 className="max-w-[20ch] font-serif text-[1.55rem] font-light leading-[1.2] tracking-[-0.01em] transition-transform duration-500 ease-out group-hover:translate-x-1.5 md:col-span-5 md:text-[1.85rem]">
                {t.title}
              </h3>

              <div className="md:col-span-5 md:justify-self-end">
                <p className="max-w-[46ch] text-[13px] leading-[1.8] text-ink-2">{t.note}</p>
                <p className="mt-3 font-mono text-[9.5px] uppercase leading-[1.9] tracking-[0.18em] text-ink-3">
                  {t.keywords.join(" · ")}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
