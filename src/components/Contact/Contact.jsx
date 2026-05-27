import { FolderGit2, Link2, Mail } from "lucide-react";
import { useContent } from "../../hooks/useContent";
import { Reveal } from "../ui/Reveal";

const LINK_ICONS = {
  email: Mail,
  linkedin: Link2,
  github: FolderGit2,
};

function getLinkHref(link, email) {
  if (link.type === "email") {
    return `mailto:${email}`;
  }
  return link.href;
}

export function Contact() {
  const { content } = useContent();
  const { profile, contact } = content;
  const mailto = `mailto:${contact.email}`;

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
              {contact.label}
            </p>
            <h2
              id="contact-heading"
              className="mb-4 text-3xl font-bold text-text md:text-4xl"
            >
              {contact.title}
            </h2>
            <p className="mx-auto mb-8 max-w-lg text-text-muted">
              {contact.description}
            </p>
            <a
              href={mailto}
              className="mb-10 inline-flex rounded-full bg-primary px-8 py-3 text-sm font-semibold text-text transition-all hover:bg-primary-hover hover:-translate-y-0.5 focus-visible:rounded-full"
            >
              {contact.ctaEmail}
            </a>

            <div className="flex flex-wrap items-center justify-center gap-4">
              {contact.links.map((link) => {
                const href = getLinkHref(link, contact.email);
                const SocialIcon = LINK_ICONS[link.type];
                const isMailto = link.type === "email";

                return (
                  <a
                    key={link.type}
                    href={href}
                    target={isMailto ? undefined : "_blank"}
                    rel={isMailto ? undefined : "noopener noreferrer"}
                    aria-label={link.label}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-surface/60 text-text-muted transition-all hover:border-primary/50 hover:bg-surface hover:text-primary focus-visible:rounded-full"
                  >
                    {SocialIcon && <SocialIcon size={22} aria-hidden />}
                  </a>
                );
              })}
            </div>

            <p className="mt-12 text-sm text-text-muted">
              © {new Date().getFullYear()} {profile.fullName}. {contact.footerNote}
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
