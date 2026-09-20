interface WordmarkProps {
  className?: string;
  tone?: "dark" | "light";
}

/**
 * The Nishan Lab wordmark — a typographic identity, not a logo.
 * Serif small-caps presence for the name, a hairline, and the
 * document-like "LAB" set in mono. The light tone is used over
 * photography (hero), the dark tone everywhere else.
 */
export function Wordmark({ className = "", tone = "dark" }: WordmarkProps) {
  const light = tone === "light";
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span
        className={`font-serif text-[15px] uppercase leading-none tracking-[0.36em] ${
          light ? "text-paper" : "text-ink"
        }`}
      >
        Nishan
      </span>
      <span aria-hidden className={`inline-block h-px w-4 ${light ? "bg-paper/45" : "bg-ink-3/70"}`} />
      <span
        className={`font-mono text-[10.5px] uppercase leading-none tracking-[0.32em] ${
          light ? "text-paper/75" : "text-ink-2"
        }`}
      >
        Lab
      </span>
    </span>
  );
}
