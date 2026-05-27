/**
 * Site-wide copy and links. Edit this file to update Hero, About, and Contact
 * without changing component code. Push to Git → Vercel redeploys.
 */

export const profile = {
  fullName: "Vinoth Rasamanickam",
  firstName: "Vinoth",
  eyebrow: "Computing & Information Systems · SUSL",
  tagline:
    "Aspiring full-stack developer building responsive, accessible web experiences with React and modern tooling. I turn coursework and side projects into polished interfaces recruiters can explore.",
  taglineShort:
    "Aspiring full-stack developer building responsive, accessible web experiences with React and modern tooling.",
  portraitAlt: "Portrait of Vinoth Rasamanickam",
  cvPath: "/assets/cv/Vinoth_Rasamanickam_CV.pdf",
  cvFilename: "Vinoth_Rasamanickam_CV.pdf",
  ctaProjects: "View projects",
  ctaCv: "Download CV",
};

export const about = {
  label: "01 — About",
  title: "Building thoughtful web experiences",
  paragraphs: [
    "I'm Vinoth Rasamanickam, an undergraduate in Computing and Information Systems at Sabaragamuwa University of Sri Lanka. I focus on front-end development — turning ideas into responsive, maintainable interfaces.",
  ],
  paragraphWithHighlights: [
    { text: "Recent work includes ", emphasis: false },
    { text: "Edusity", emphasis: true },
    { text: ", a university marketing site, and ", emphasis: false },
    { text: "Momentum EventWorks", emphasis: true },
    {
      text: ", built with Tailwind and JavaScript. I care about clear layout, readable typography, and projects that are easy for others to navigate.",
      emphasis: false,
    },
  ],
  closingParagraph:
    "I'm looking for internships and junior roles where I can grow with a team, ship real features, and keep learning modern web tooling.",
  bento: [
    {
      icon: "layers",
      title: "3+ projects",
      description:
        "University sites, event pages, and design concepts shipped end-to-end.",
    },
    {
      icon: "code2",
      title: "React & Vite",
      description:
        "Component-driven UIs with fast dev workflows and production builds.",
    },
    {
      icon: "users",
      title: "ICARC volunteer",
      description:
        "Event logistics and participant support at an academic conference.",
    },
    {
      icon: "mapPin",
      title: "Sri Lanka",
      description: "Undergraduate at Sabaragamuwa University of Sri Lanka.",
    },
  ],
};

export const contact = {
  label: "05 — Contact",
  title: "Let's work together",
  description:
    "Open to internships, collaborations, and feedback on my projects. Reach out — I typically respond within a few days.",
  email: "vino6810403@gmail.com",
  ctaEmail: "Send an email",
  footerNote: "Built with React & Tailwind.",
  links: [
    { type: "email", label: "Email Vinoth" },
    {
      type: "linkedin",
      href: "https://www.linkedin.com/in/vinoth-rasamanickam-537597302/",
      label: "LinkedIn profile",
    },
    {
      type: "github",
      href: "https://github.com/vinoth1211",
      label: "GitHub profile",
    },
  ],
};
