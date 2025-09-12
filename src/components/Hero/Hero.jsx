import React from "react";

import styles from "./Hero.module.css";
import profile from "../../../assets/hero/heroImage.png";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Vinoth</h1>
        <p className={styles.description}>
          I am an Undergraduate student at Sabaragamuwa University of Sri Lanka,
          <br /> studying Computing and Information Systems.
          <br /> Reach out if you’d like to learn more!
        </p>
        <a
          href="/assets/cv/Vinoth_Rasamanickam_CV.pdf"
          download="Vinoth_Rasamanickam_CV.pdf"
          className={styles.contactBtn}
        >
          Download CV
        </a>
      </div>
      <img src={profile} alt="Hero Image of Me" className={styles.heroImg} />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
