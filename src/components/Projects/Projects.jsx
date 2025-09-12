import React from "react";

import styles from "./Projects.module.css";
import { projects } from "../../data/projects.js";
import { Projectcard } from "./Projectcard";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <Projectcard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
