import { useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "../../data/site";
import { useActiveSection } from "../../hooks/useActiveSection";

const NAV_LINKS = [
  { href: "#about", label: "About", id: "about" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#contact", label: "Contact", id: "contact" },
];

const SECTION_IDS = NAV_LINKS.map((link) => link.id);

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-bg/80 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8"
        aria-label="Main navigation"
      >
        <a
          href="#"
          className="text-xl font-bold tracking-tight text-text transition-colors hover:text-primary focus-visible:rounded-sm"
          onClick={closeMenu}
        >
          VR
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(({ href, label, id }) => (
            <li key={id}>
              <a
                href={href}
                className={`text-sm font-medium transition-colors focus-visible:rounded-sm ${
                  activeSection === id
                    ? "text-primary"
                    : "text-text-muted hover:text-text"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.cvPath}
              download={profile.cvFilename}
              className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-text transition-colors hover:bg-primary-hover focus-visible:rounded-full"
            >
              Resume
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="rounded-lg p-2 text-text md:hidden focus-visible:ring-2 focus-visible:ring-primary"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <ul
        id="mobile-menu"
        className={`flex flex-col gap-1 border-t border-white/10 bg-surface px-5 py-4 md:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        {NAV_LINKS.map(({ href, label, id }) => (
          <li key={id}>
            <a
              href={href}
              className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                activeSection === id
                  ? "bg-primary/20 text-primary"
                  : "text-text-muted hover:bg-white/5 hover:text-text"
              }`}
              onClick={closeMenu}
            >
              {label}
            </a>
          </li>
        ))}
        <li>
          <a
            href={profile.cvPath}
            download={profile.cvFilename}
            className="mt-2 block rounded-full bg-primary px-4 py-2.5 text-center text-sm font-semibold text-text"
            onClick={closeMenu}
          >
            Resume
          </a>
        </li>
      </ul>
    </header>
  );
}
