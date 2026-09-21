import { Reveal } from "./Reveal";

interface SectionHeaderProps {
  index?: string; // omit for home-page sections that should not show a number
  title: string;
  note?: string; // small mono annotation, right aligned
}

export function SectionHeader({ index, title, note }: SectionHeaderProps) {
  return (
    <Reveal>
      <div className="flex items-end justify-between gap-6 border-b border-line pb-6">
        <div className="flex items-baseline gap-4 md:gap-6">
          {index && (
            <span className="font-mono text-[11px] tracking-[0.22em] text-ink-3">
              {index}&nbsp;/
            </span>
          )}
          <h2 className="font-serif text-[1.9rem] leading-none font-light tracking-[-0.01em] md:text-[2.6rem]">
            {title}
          </h2>
        </div>
        {note && (
          <span className="hidden pb-1 font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-ink-3 sm:block md:text-[10.5px]">
            {note}
          </span>
        )}
      </div>
    </Reveal>
  );
}
