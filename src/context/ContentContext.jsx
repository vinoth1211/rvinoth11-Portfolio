import { createContext, useEffect, useMemo, useState } from "react";

const ContentContext = createContext(null);

async function fetchJson(path) {
  const response = await fetch(path, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Failed to load ${path}: ${response.status}`);
  }
  return response.json();
}

function asStringList(items, key) {
  if (!Array.isArray(items)) return [];
  return items.map((item) => (typeof item === "string" ? item : item[key]));
}

function normalizeSite(site) {
  return {
    ...site,
    about: {
      ...site.about,
      paragraphs: asStringList(site.about.paragraphs, "paragraph"),
    },
  };
}

function normalizeProjects(projects) {
  return projects.map((project) => ({
    ...project,
    skills: asStringList(project.skills, "skill"),
  }));
}

function normalizeHistory(history) {
  return history.map((entry) => ({
    ...entry,
    experiences: asStringList(entry.experiences, "point"),
  }));
}

export function ContentProvider({ children }) {
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const [siteRaw, projectsData, skillsData, historyData] = await Promise.all([
          fetchJson("/content/site.json"),
          fetchJson("/content/projects.json"),
          fetchJson("/content/skills.json"),
          fetchJson("/content/history.json"),
        ]);

        if (cancelled) return;

        const site = normalizeSite(siteRaw);

        setContent({
          profile: site.profile,
          about: site.about,
          contact: site.contact,
          sections: site.sections,
          projects: normalizeProjects(projectsData.projects ?? []),
          skills: skillsData.skills ?? [],
          history: normalizeHistory(historyData.history ?? []),
        });
        setError(null);
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Failed to load content");
        }
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const value = useMemo(
    () => ({ content, error, loading: !content && !error }),
    [content, error]
  );

  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  );
}

export { ContentContext };
