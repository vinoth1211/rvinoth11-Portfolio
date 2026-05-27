import { ExternalLink, FolderGit2 } from "lucide-react";

export function Projectcard({
  project: { title, image, description, skills, demo, source },
  featured = false,
}) {
  if (featured) {
    return (
      <article className="group overflow-hidden rounded-2xl border border-white/10 bg-surface/60 transition-all hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 lg:grid lg:grid-cols-2">
        <div className="relative aspect-video overflow-hidden bg-bg lg:aspect-auto lg:min-h-[280px]">
          <img
            src={image}
            alt={`Screenshot of ${title}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-text">
            Featured
          </span>
        </div>
        <div className="flex flex-col justify-center p-6 md:p-8">
          <h3 className="mb-3 text-2xl font-bold text-text">{title}</h3>
          <p className="mb-4 text-text-muted">{description}</p>
          <ul className="mb-6 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-white/10 bg-bg/50 px-3 py-1 text-xs font-medium text-text-muted"
              >
                {skill}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            <ProjectLink href={demo} icon={ExternalLink} label="View demo" />
            <ProjectLink href={source} icon={FolderGit2} label="Source code" />
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface/60 transition-all hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
      <div className="aspect-video overflow-hidden bg-bg">
        <img
          src={image}
          alt={`Screenshot of ${title}`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 text-lg font-bold text-text">{title}</h3>
        <p className="mb-4 flex-1 text-sm text-text-muted">{description}</p>
        <ul className="mb-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-white/10 bg-bg/50 px-2.5 py-0.5 text-xs text-text-muted"
            >
              {skill}
            </li>
          ))}
        </ul>
        <div className="flex gap-3">
          <ProjectLink href={demo} icon={ExternalLink} label="Demo" small />
          <ProjectLink href={source} icon={FolderGit2} label="Source" small />
        </div>
      </div>
    </article>
  );
}

function ProjectLink({ href, icon: LinkIcon, label, small }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-bg/50 font-medium text-text transition-colors hover:border-primary/50 hover:text-primary focus-visible:rounded-lg ${
        small ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm"
      }`}
    >
      <LinkIcon size={small ? 14 : 16} aria-hidden />
      {label}
    </a>
  );
}
