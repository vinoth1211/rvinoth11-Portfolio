import { projects } from "../../data/projects";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { Projectcard } from "./Projectcard";

export function Projects() {
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const rest = projects.filter((p) => p !== featured);

  return (
    <section
      id="projects"
      className="scroll-mt-20 px-5 py-16 md:px-8 md:py-24"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            id="projects-heading"
            label="04 — Projects"
            title="Selected work"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mb-10">
            <Projectcard project={featured} featured />
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {rest.map((project, index) => (
            <Reveal key={project.title} delay={0.08 * index}>
              <Projectcard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
