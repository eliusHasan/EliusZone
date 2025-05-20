import { useState } from "react";
import styles from "../css/Header.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  const handleLinkClick = () => {
    setIsOpen(false); // Hide the menu when a link is clicked
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>EH</h1>
      </div>
      <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
        <ul>
          <li>
            <a href="#home" onClick={handleLinkClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={handleLinkClick}>
              About Me
            </a>
          </li>
          <li>
            <a href="#project" onClick={handleLinkClick}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleLinkClick}>
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={`${styles.bar} ${isOpen ? styles.bar1 : ""}`}></div>
        <div className={`${styles.bar} ${isOpen ? styles.bar2 : ""}`}></div>
        <div className={`${styles.bar} ${isOpen ? styles.bar3 : ""}`}></div>
      </div>
    </header>
  );
}
