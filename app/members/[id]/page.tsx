import { notFound } from "next/navigation";
import { members } from "@/src/data/lab";
import { SectionHeader } from "@/src/components/SectionHeader";
import { Reveal } from "@/src/components/Reveal";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export async function generateStaticParams() {
  return members.map((m) => ({
    id: m.id,
  }));
}

export default async function MemberDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const member = members.find((m) => m.id === id);

  if (!member) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-[1280px] px-5 py-16 md:px-10 md:py-28 min-h-screen">
      <Link href="/members" className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-3 transition-colors hover:text-accent mb-12">
        <ArrowLeft className="size-4" />
        Back to People
      </Link>
      <SectionHeader index="" title={member.name} />

      <div className="mt-14 grid gap-12 md:mt-20 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <Reveal delay={80} className="h-full">
            {member.photo ? (
              <figure className="lg:sticky lg:top-24">
                <img
                  src={member.photo}
                  alt={`Portrait of ${member.name}`}
                  className="photo aspect-[4/5] w-full border border-line object-cover"
                />
              </figure>
            ) : (
              <div className="aspect-[4/5] w-full border border-line bg-paper/50 flex items-center justify-center lg:sticky lg:top-24">
                <span className="font-mono text-ink-3 tracking-[0.16em] text-[10px] uppercase">No photo</span>
              </div>
            )}
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <Reveal delay={120}>
            <h3 className="font-serif text-[2.1rem] font-light leading-tight tracking-[-0.01em] md:text-[2.6rem]">
              {member.name}
            </h3>
            <p className="mt-4 space-y-0.5 text-[14px] leading-[1.7] text-ink-2">
              <span className="block font-medium text-ink">{member.role}</span>
              {member.currentPosition && <span className="block">{member.currentPosition}</span>}
              <span className="block capitalize">{member.status} Member {member.batch && `· ${member.batch}`}</span>
              {member.email && <span className="block">{member.email}</span>}
            </p>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-9 space-y-5 border-l border-line pl-6 md:pl-8">
              {member.bio.map((para, i) => (
                <p key={i} className="max-w-[62ch] text-[14.5px] leading-[1.85] text-ink-2">
                  {para}
                </p>
              ))}
            </div>
          </Reveal>

          {(member.publications?.length || member.links?.length) && (
            <div className="mt-12 grid gap-12 sm:grid-cols-2">
              {member.publications && member.publications.length > 0 && (
                <Reveal delay={200}>
                  <div>
                    <h4 className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-ink-3">
                      Publications (DOI)
                    </h4>
                    <ul className="mt-5">
                      {member.publications.map((pub) => (
                        <li
                          key={pub}
                          className="border-t border-line py-3 text-[13.5px] text-ink-2 last:border-b break-all"
                        >
                          {pub}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )}

              {member.links && member.links.length > 0 && (
                <Reveal delay={260}>
                  <div>
                    <h4 className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-ink-3">
                      Academic Links
                    </h4>
                    <ul className="mt-5">
                      {member.links.map((link) => (
                        <li key={link.label} className="border-t border-line last:border-b">
                          <a
                            href={link.href}
                            {...(link.href.startsWith("http")
                              ? { target: "_blank", rel: "noopener noreferrer" }
                              : {})}
                            className="group flex items-center justify-between py-3 text-[13.5px] text-ink-2 transition-colors hover:text-accent"
                          >
                            {link.label}
                            <ArrowUpRight
                              className="size-3.5 text-ink-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                              strokeWidth={1.5}
                            />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
