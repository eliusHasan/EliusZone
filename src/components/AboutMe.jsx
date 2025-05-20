import styles from "../css/AboutMe.module.css";
import profileImg from "../assets/img/about.JPG";
import Button from "./Button";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <h2 className={styles.aboutTitle}>About Me</h2>
      <p className={styles.aboutSubtitle}>— who i am —</p>

      <div className={styles.aboutContainer}>
        <div className={styles.aboutImg}>
          <img src={profileImg} alt="Elius" />
        </div>

        <div className={styles.aboutContent}>
          <h3>
            I'm Elius Hasan and I'm a{" "}
            <span className={styles.highlight}>
              Full Stack Web Developer<span className={styles.cursor}>|</span>
            </span>
          </h3>
          <p>
            I’m a web developer with a background in Information and
            Communication Engineering from the University of Rajshahi. I
            specialize in both front-end and back-end development using
            technologies like React, Tailwind CSS, Node.js, Express.js, and
            MongoDB. I’ve built projects such as LifeLine, a full-stack blogging
            platform focused on user experience and functionality. Alongside
            development, I have years of experience as a tutor and student
            leader, which has strengthened my communication, adaptability, and
            problem-solving skills. I’m always eager to learn, take on new
            challenges, and contribute to meaningful projects.
          </p>
          <a href="/CV.pdf" className={styles.cvButton} download>
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
