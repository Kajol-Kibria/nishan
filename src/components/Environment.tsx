import { Reveal } from "./Reveal";
import { cultureQuote } from "../data/lab";

const ENV_IMAGE =
  "https://images.pexels.com/photos/8851608/pexels-photo-8851608.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=860&w=1600";

export function Environment() {
  return (
    <section aria-label="Research environment" className="border-t border-line">
      <div className="mx-auto max-w-[1280px] px-5 py-16 md:px-10 md:py-28">
        <Reveal>
          <blockquote className="mx-auto max-w-[54rem] text-center">
            <p className="font-serif text-[clamp(1.6rem,3.4vw,2.6rem)] font-light leading-[1.3] tracking-[-0.008em]">
              “{cultureQuote.text.split(", and honest")[0]},
              <br className="hidden md:block" />{" "}
              <em className="italic">
                and honest{cultureQuote.text.split(", and honest")[1]}
              </em>{" "}
              ”
            </p>
            <footer className="mt-7 font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-3">
              {cultureQuote.attribution}
            </footer>
          </blockquote>
        </Reveal>

        <Reveal delay={140}>
          <figure className="mt-14 md:mt-20">
            {/* editorial bleed: the image escapes the text grid rhythmically */}
            <div className="md:-mx-10 xl:-mx-24">
              <img
                src={ENV_IMAGE}
                alt="Two researchers discussing chemical formulae at a laboratory whiteboard"
                className="photo h-[46vh] w-full border border-line object-cover md:h-[64vh] md:border-x-0"
                loading="lazy"
              />
            </div>
            <figcaption className="mt-3 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-line pt-2.5">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-3">
                Fig. 02
              </span>
              <span className="font-mono text-[10px] tracking-[0.06em] text-ink-3">
                Group meeting at the whiteboard - photograph: Pexels
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
