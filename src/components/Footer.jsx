import React from "react";
import styles from "../css/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>
          &copy; {new Date().getFullYear()} Elius Hasan. All rights reserved.
        </p>
        <div className={styles.socialIcons}>
          <a href="www.facebook.com">
            <FontAwesomeIcon
              icon={faFacebook}
              title="Facebook"
              className={styles.iconStyle}
            />
          </a>
          <a href="www.facebook.com">
            <FontAwesomeIcon
              icon={faLinkedin}
              title="LinkedIn"
              className={styles.iconStyle}
            />
          </a>
          <a href="www.facebook.com">
            <FontAwesomeIcon
              icon={faTwitter}
              title="Twitter"
              className={styles.iconStyle}
            />
          </a>
          <a href="www.facebook.com">
            <FontAwesomeIcon
              icon={faInstagram}
              title="Instagram"
              className={styles.iconStyle}
            />
          </a>
          <a href="www.facebook.com">
            <FontAwesomeIcon
              icon={faGithub}
              title="Github"
              className={styles.iconStyle}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
