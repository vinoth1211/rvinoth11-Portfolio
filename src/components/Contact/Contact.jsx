import { FolderGit2, Link2, Mail } from "lucide-react";
import { Reveal } from "../ui/Reveal";

const LINKS = [
  {
    href: "mailto:vinothrasamanickam@gmail.com",
    label: "Email Vinoth",
    icon: Mail,
  },
  {
    href: "https://www.linkedin.com/in/vinoth-rasamanickam-537597302/",
    label: "LinkedIn profile",
    icon: Link2,
  },
  {
    href: "https://github.com/vinoth1211",
    label: "GitHub profile",
    icon: FolderGit2,
  },
];

export function Contact() {
  return (
    <footer
      id="contact"
      className="scroll-mt-20 border-t border-white/10 bg-secondary/40"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <Reveal>
          <div className="text-center">
            <p className="mb-2 font-mono text-sm uppercase tracking-widest text-primary">
              05 — Contact
            </p>
            <h2
              id="contact-heading"
              className="mb-4 text-3xl font-bold text-text md:text-4xl"
            >
              Let&apos;s work together
            </h2>
            <p className="mx-auto mb-8 max-w-lg text-text-muted">
              Open to internships, collaborations, and feedback on my projects.
              Reach out — I typically respond within a few days.
            </p>
            <a
              href="mailto:vinothrasamanickam@gmail.com"
              className="mb-10 inline-flex rounded-full bg-primary px-8 py-3 text-sm font-semibold text-text transition-all hover:bg-primary-hover hover:-translate-y-0.5 focus-visible:rounded-full"
            >
              Send an email
            </a>

            <div className="flex flex-wrap items-center justify-center gap-4">
              {LINKS.map(({ href, label, icon: SocialIcon }) => (
                <a
                  key={href}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  aria-label={label}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-surface/60 text-text-muted transition-all hover:border-primary/50 hover:bg-surface hover:text-primary focus-visible:rounded-full"
                >
                  <SocialIcon size={22} aria-hidden />
                </a>
              ))}
            </div>

            <p className="mt-12 text-sm text-text-muted">
              © {new Date().getFullYear()} Vinoth Rasamanickam. Built with React
              &amp; Tailwind.
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
