import styles from "../css/Projects.module.css";
import projectImg from "../assets/img/project1.png";
import projectImg1 from "../assets/img/project1_1.png";
import projectImg2 from "../assets/img/project2.png";
import projectImg2_1 from "../assets/img/project2_1.png";
import projectImg3 from "../assets/img/project3.png";
import projectImg3_1 from "../assets/img/project3_1.png";
import Button from "./Button";

export default function Projects() {
  return (
    <section className={styles.about} id="project">
      <h2 className={styles.aboutTitle}>My projects</h2>
      <p className={styles.aboutSubtitle}>— explore my projects —</p>

      <div className={styles.aboutContainer}>
        <div className={styles.aboutImg}>
          <img src={projectImg} alt="project image" />
          <img src={projectImg1} alt="project image" />
        </div>

        <div className={styles.aboutContent}>
          <h1>LifeLine</h1>
          <h3>
            <i>
              It is a full-stack blogging application where users can share
              posts, read content, and manage their profiles. Built with the
              MERN stack.
            </i>
          </h3>
          <p>
            <b>🔍 Key Features:</b>
            <br />
            1.User Authentication: Sign up, sign in, and manage your own secure
            account. <br />
            2.Profile Management: Create and edit your profile with bio and
            social links. <br />
            3.Create & Read Posts: Write rich blog posts and explore content
            from other users. <br />
            4.Category & Tag Filters: Easily navigate content based on
            interests. <br />
            5.Responsive Design: Optimized for both desktop and mobile devices.
          </p>
          <div className={styles.buttons}>
            <Button
              name="See Code"
              href="https://github.com/eliusHasan/LifeLine"
            />
            <Button name="Live" href="https://lifelineapps.netlify.app/" />
          </div>
        </div>
      </div>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutContent}>
          <h1>AuthShield</h1>
          <h3>
            <i>
              This project is only for checking json web token based
              authentication.
            </i>
          </h3>
          <p>
            <b>🔍 Key Features:</b>
            <br />
            1.User Authentication: Sign up, sign in <br />
            2.User Authorization: User can visit secure page , when he is in
            logged in. <br />
            2.Use JSON Web Token for Authentication <br />
            3.Responsive Design: Optimized for both desktop and mobile devices.
          </p>
          <div className={styles.buttons}>
            <Button
              name="See Code"
              href="https://github.com/eliusHasan/AuthShield"
            />
          </div>
        </div>
        <div className={styles.aboutImg}>
          <img src={projectImg2} alt="project image" />
          <img src={projectImg2_1} alt="project image" />
        </div>
      </div>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutImg}>
          <img src={projectImg3} alt="project image" />
          <img src={projectImg3_1} alt="project image" />
        </div>

        <div className={styles.aboutContent}>
          <h1>Personal Portfolio Website</h1>
          <h3>
            <i>
              This is a simple, clean, and fully responsive personal portfolio
              website built using only HTML and Vanilla CSS.
            </i>
          </h3>
          <p>
            <b>🔍 Key Features:</b>
            <br />
            1.Pure HTML & CSS: Built entirely with vanilla HTML and CSS—no
            frameworks or libraries used. <br />
            2.Responsive Design: Fully responsive layout that adapts to mobile,
            tablet, and desktop screens. <br />
            3.Clean & Minimal Layout: Focused on readability and user
            experience. <br />
            4.Fast Load Time: Lightweight code structure ensures quick loading
            without dependencies. <br />
          </p>
          <div className={styles.buttons}>
            <Button
              name="See Code"
              href="https://github.com/eliusHasan/Resume"
            />
            <Button
              name="Live"
              href="https://zingy-queijadas-712363.netlify.app/"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
