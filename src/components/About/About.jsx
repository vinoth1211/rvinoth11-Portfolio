import { MapPin, Code2, Layers, Users } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

const BENTO_ITEMS = [
  {
    icon: Layers,
    title: "3+ projects",
    description: "University sites, event pages, and design concepts shipped end-to-end.",
    className: "md:col-span-1",
  },
  {
    icon: Code2,
    title: "React & Vite",
    description: "Component-driven UIs with fast dev workflows and production builds.",
    className: "md:col-span-1",
  },
  {
    icon: Users,
    title: "ICARC volunteer",
    description: "Event logistics and participant support at an academic conference.",
    className: "md:col-span-1",
  },
  {
    icon: MapPin,
    title: "Sri Lanka",
    description: "Undergraduate at Sabaragamuwa University of Sri Lanka.",
    className: "md:col-span-1",
  },
];

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
            label="01 — About"
            title="Building thoughtful web experiences"
          />
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal delay={0.1}>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>
                I&apos;m Vinoth Rasamanickam, an undergraduate in Computing and
                Information Systems at Sabaragamuwa University of Sri Lanka. I
                focus on front-end development — turning ideas into responsive,
                maintainable interfaces.
              </p>
              <p>
                Recent work includes{" "}
                <strong className="text-text">Edusity</strong>, a university
                marketing site, and{" "}
                <strong className="text-text">Momentum EventWorks</strong>, built
                with Tailwind and JavaScript. I care about clear layout,
                readable typography, and projects that are easy for others to
                navigate.
              </p>
              <p>
                I&apos;m looking for internships and junior roles where I can
                grow with a team, ship real features, and keep learning modern
                web tooling.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {BENTO_ITEMS.map((item, index) => (
              <Reveal key={item.title} delay={0.05 * index}>
                <article
                  className={`group rounded-2xl border border-white/10 bg-surface/60 p-5 transition-all hover:border-primary/40 hover:bg-surface hover:shadow-lg hover:shadow-primary/5 ${item.className}`}
                >
                  <item.icon
                    className="mb-3 h-8 w-8 text-primary"
                    aria-hidden
                  />
                  <h3 className="mb-2 text-lg font-semibold text-text">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-muted">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
