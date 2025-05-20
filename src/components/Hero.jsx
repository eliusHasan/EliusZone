import styles from "../css/Hero.module.css";
import heroImage from "../assets/img/profile.jpg";
import Button from "./Button";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.left}>
        <h3>Hi! I'm </h3>
        <h1>Elius Hasan</h1>
        <h2>Web Developer</h2>
        <p>
          I'm a full stack web developer in MERN stack in Dhaka, Bangladesh, and
          I'm very passionate and dedicated to my work.
        </p>
        <div className={styles.buttons}>
          <Button name="Say Hello" href="#" />
          <Button name="My Works" href="#project" />
        </div>
      </div>
      <div className={styles.right}>
        <img src={heroImage} alt="John Smith" />
      </div>
    </section>
  );
}
