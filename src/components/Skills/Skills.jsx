import { skills } from "../../data/skills";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 px-5 py-16 md:px-8 md:py-24"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            id="skills-heading"
            label="02 — Skills"
            title="Tools I work with"
          />
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((skill, index) => (
            <Reveal key={skill.title} delay={0.04 * index}>
              <article className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-surface/50 p-5 text-center transition-all hover:border-primary/40 hover:bg-surface hover:-translate-y-1">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-bg/80 p-2">
                  <img
                    src={skill.imageSrc}
                    alt=""
                    className="h-10 w-10 object-contain"
                    aria-hidden
                  />
                </div>
                <p className="text-sm font-medium text-text">{skill.title}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
