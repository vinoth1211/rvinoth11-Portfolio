import { history } from "../../data/history";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 px-5 py-16 md:px-8 md:py-24"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            id="experience-heading"
            label="03 — Experience"
            title="Where I've been learning"
          />
        </Reveal>

        <ol className="relative space-y-8 border-l border-white/10 pl-8 md:pl-10">
          {history.map((entry, index) => (
            <Reveal key={`${entry.organization}-${index}`} delay={0.08 * index}>
              <li className="relative">
                <span
                  className="absolute -left-[2.35rem] top-6 flex h-4 w-4 items-center justify-center rounded-full border-2 border-primary bg-bg md:-left-[2.6rem]"
                  aria-hidden
                />
                <article className="rounded-2xl border border-white/10 bg-surface/60 p-6 transition-all hover:border-primary/30 hover:bg-surface md:p-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                    <img
                      src={entry.imageSrc}
                      alt=""
                      className="h-14 w-14 shrink-0 rounded-xl object-contain bg-bg/50 p-1"
                      aria-hidden
                    />
                    <div className="min-w-0 flex-1">
                      <div className="mb-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <h3 className="text-lg font-semibold text-text">
                          {entry.role}
                        </h3>
                        <span className="text-text-muted">·</span>
                        <span className="text-primary">{entry.organization}</span>
                      </div>
                      <p className="mb-4 font-mono text-xs uppercase tracking-wider text-text-muted">
                        {entry.startDate} — {entry.endDate}
                      </p>
                      <ul className="list-disc space-y-2 pl-5 text-sm text-text-muted">
                        {entry.experiences.map((line, i) => (
                          <li key={i}>{line}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
