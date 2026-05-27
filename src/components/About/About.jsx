import { MapPin, Code2, Layers, Users } from "lucide-react";
import { about } from "../../data/site";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

const BENTO_ICONS = {
  layers: Layers,
  code2: Code2,
  users: Users,
  mapPin: MapPin,
};

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 px-5 py-16 md:px-8 md:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            id="about-heading"
            label={about.label}
            title={about.title}
          />
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal delay={0.1}>
            <div className="space-y-4 leading-relaxed text-text-muted">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
              <p>
                {about.paragraphWithHighlights.map((part) =>
                  part.emphasis ? (
                    <strong key={part.text} className="text-text">
                      {part.text}
                    </strong>
                  ) : (
                    <span key={part.text}>{part.text}</span>
                  )
                )}
              </p>
              <p>{about.closingParagraph}</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {about.bento.map((item, index) => {
              const Icon = BENTO_ICONS[item.icon];
              return (
                <Reveal key={item.title} delay={0.05 * index}>
                  <article className="group rounded-2xl border border-white/10 bg-surface/60 p-5 transition-all hover:border-primary/40 hover:bg-surface hover:shadow-lg hover:shadow-primary/5">
                    {Icon && (
                      <Icon
                        className="mb-3 h-8 w-8 text-primary"
                        aria-hidden
                      />
                    )}
                    <h3 className="mb-2 text-lg font-semibold text-text">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-muted">{item.description}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
