import { motion as Motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import profile from "../../../assets/hero/heroImage.png";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

function HeroInner() {
  return (
    <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <div className="flex flex-col items-start">
        <Motion.p
          variants={item}
          className="mb-4 font-mono text-sm uppercase tracking-widest text-primary"
        >
          Computing &amp; Information Systems · SUSL
        </Motion.p>
        <Motion.h1
          variants={item}
          className="mb-6 text-4xl font-black leading-tight text-text sm:text-5xl lg:text-6xl"
        >
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-text to-text-muted bg-clip-text text-transparent">
            Vinoth
          </span>
        </Motion.h1>
        <Motion.p
          variants={item}
          className="mb-8 max-w-xl text-lg text-text-muted md:text-xl"
        >
          Aspiring full-stack developer building responsive, accessible web
          experiences with React and modern tooling. I turn coursework and side
          projects into polished interfaces recruiters can explore.
        </Motion.p>
        <Motion.div variants={item} className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-text transition-all hover:bg-primary-hover hover:-translate-y-0.5 focus-visible:rounded-full"
          >
            View projects
            <ArrowDown size={18} aria-hidden />
          </a>
          <a
            href="/assets/cv/Vinoth_Rasamanickam_CV.pdf"
            download="Vinoth_Rasamanickam_CV.pdf"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-surface/50 px-6 py-3 text-sm font-semibold text-text transition-all hover:border-primary/50 hover:bg-surface focus-visible:rounded-full"
          >
            <Download size={18} aria-hidden />
            Download CV
          </a>
        </Motion.div>
      </div>

      <Motion.div
        variants={item}
        className="relative mx-auto w-full max-w-sm lg:max-w-md"
      >
        <div className="relative rounded-2xl border border-white/10 bg-surface/40 p-2 shadow-2xl shadow-primary/10 ring-1 ring-white/5">
          <img
            src={profile}
            alt="Portrait of Vinoth Rasamanickam"
            className="w-full rounded-xl object-cover"
            width={400}
            height={400}
          />
        </div>
      </Motion.div>
    </div>
  );
}

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden px-5 pb-16 pt-10 md:px-8 md:pb-24 md:pt-16"
      aria-label="Introduction"
    >
      <div className="pointer-events-none absolute inset-0 mesh-gradient" />
      <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />

      {prefersReducedMotion ? (
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-start">
            <p className="mb-4 font-mono text-sm uppercase tracking-widest text-primary">
              Computing &amp; Information Systems · SUSL
            </p>
            <h1 className="mb-6 text-4xl font-black leading-tight text-text sm:text-5xl lg:text-6xl">
              Hi, I&apos;m Vinoth
            </h1>
            <p className="mb-8 max-w-xl text-lg text-text-muted md:text-xl">
              Aspiring full-stack developer building responsive, accessible web
              experiences with React and modern tooling.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-text"
              >
                View projects
              </a>
              <a
                href="/assets/cv/Vinoth_Rasamanickam_CV.pdf"
                download="Vinoth_Rasamanickam_CV.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
            <img
              src={profile}
              alt="Portrait of Vinoth Rasamanickam"
              className="w-full rounded-2xl border border-white/10 object-cover"
            />
          </div>
        </div>
      ) : (
        <Motion.div
          className="relative"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <HeroInner />
        </Motion.div>
      )}
    </section>
  );
}
