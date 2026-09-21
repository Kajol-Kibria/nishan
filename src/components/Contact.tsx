import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { contact, site } from "../data/lab";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-line bg-paper-2/50">
      <div className="mx-auto max-w-[1280px] px-5 py-16 md:px-10 md:py-28">
        <SectionHeader
          index="05"
          title="Contact"
          note="Address & e-mail are placeholders"
        />

        <div className="mt-14 grid gap-14 md:mt-20 lg:grid-cols-12 lg:gap-10">
          {/* ——— Address block ——— */}
          <div className="lg:col-span-5">
            <Reveal delay={80}>
              <h3 className="font-serif text-[1.75rem] font-light leading-tight tracking-[-0.01em] md:text-[2rem]">
                {contact.address[0]}
              </h3>
              <address className="mt-6 space-y-0.5 text-[14px] not-italic leading-[1.85] text-ink-2">
                {contact.address.slice(1, 4).map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
                <span className="mt-4 block">{contact.address.slice(4).join(" · ")}</span>
              </address>

              <div className="mt-9 space-y-3">
                <p className="flex items-center gap-3">
                  <Mail className="size-4 text-ink-3" strokeWidth={1.5} />
                  <a
                    href={`mailto:${site.email}`}
                    className="font-mono text-[13px] tracking-[0.02em] text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent"
                  >
                    {site.email}
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <MapPin className="size-4 text-ink-3" strokeWidth={1.5} />
                  <span className="font-mono text-[13px] tracking-[0.02em] text-ink-2">
                    {site.location}
                  </span>
                </p>
              </div>

              <p className="mt-9 max-w-[44ch] font-mono text-[10px] leading-[1.8] text-ink-3">
                Correspondence by email is preferred. The departmental office can
                confirm the building and room on request.
              </p>
            </Reveal>
          </div>

          {/* ——— External links ——— */}
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={140}>
              <h4 className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-ink-3">
                Maps &amp; academic profiles
              </h4>
              <ul className="mt-6">
                {contact.links.map((l) => (
                  <li key={l.label} className="border-t border-line last:border-b">
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between py-[15px] text-[13.5px] text-ink-2 transition-colors hover:text-accent"
                    >
                      {l.label}
                      <ArrowUpRight
                        className="size-4 text-ink-3 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                        strokeWidth={1.5}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={200}>
              <h4 className="mt-12 font-mono text-[10.5px] uppercase tracking-[0.2em] text-ink-3">
                For students &amp; collaborators
              </h4>
              <p className="mt-6 max-w-[56ch] text-[14px] leading-[1.85] text-ink-2">
                Enquiries about doctoral positions, thesis projects, and
                collaborations are welcome - see{" "}
                <a
                  href="#collaboration"
                  className="underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                >
                  Collaboration
                </a>{" "}
                above for what to include in a first message.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
