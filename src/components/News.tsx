import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { news } from "../data/lab";

export function NewsSection() {
  return (
    <section id="news" className="scroll-mt-20 border-t border-line bg-paper-2/50">
      <div className="mx-auto max-w-[1280px] px-5 py-16 md:px-10 md:py-28">
        <SectionHeader
          index="06"
          title="Recent Activity"
          note="Drawn from the group's publication record"
        />

        <ul className="mt-10 md:mt-12">
          {news.map((n, i) => (
            <Reveal
              key={`${n.date}-${i}`}
              delay={i * 45}
              as="li"
              className="grid gap-1 border-t border-line py-[22px] transition-colors duration-300 last:border-b hover:bg-paper-2 sm:grid-cols-[110px_140px_1fr] sm:items-baseline sm:gap-x-8 md:-mx-3 md:px-3"
            >
              <span className="font-mono text-[11px] tracking-[0.1em] text-ink-3">
                {n.date}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-2">
                {n.category}
              </span>
              <p className="text-[14px] leading-[1.7] text-ink-2">{n.text}</p>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={100}>
          <p className="mt-8 font-mono text-[10.5px] leading-[1.8] text-ink-3">
            Talks, awards and member news will be added here as they occur
          </p>
        </Reveal>
      </div>
    </section>
  );
}
