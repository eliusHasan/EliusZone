import React from "react";
import styles from "../css/Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <section className={styles.contactSection} id="contact">
      <h2 className={styles.contactTitle}>Contact Me</h2>
      <p className={styles.contactDescription}>
        Feel free to reach out for collaborations, questions, or just to say
        hello. I'm always open to new opportunities and connections.
      </p>

      <div className={styles.contactContainer}>
        {/* Contact Info */}
        <div className={styles.contactInfo}>
          <div>
            <div className={styles.infoBox}>
              <span className={styles.icon}>
                <FontAwesomeIcon
                  icon={faHouse}
                  title="Address"
                  className={styles.iconStyle}
                />
              </span>
              <div>
                <h4 className={styles.infoTitle}>Address</h4>
                <p>Ajampur, Uttara, Dhaka</p>
              </div>
            </div>

            <div className={styles.infoBox}>
              <span className={styles.icon}>
                <FontAwesomeIcon
                  icon={faPhone}
                  title="Phone"
                  className={styles.iconStyle}
                />
              </span>
              <div>
                <h4 className={styles.infoTitle}>Phone</h4>
                <p>01737982792</p>
              </div>
            </div>

            <div className={styles.infoBox}>
              <span className={styles.icon}>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  title="Email"
                  className={styles.iconStyle}
                />
              </span>
              <div>
                <h4 className={styles.infoTitle}>Email</h4>
                <p>elius24hasan@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className={styles.contactForm}>
          <h3 className={styles.formTitle}>Send Message</h3>
          <input type="text" placeholder="Full Name" className={styles.input} />
          <input type="email" placeholder="Email" className={styles.input} />
          <textarea
            placeholder="Type your Message..."
            className={styles.textarea}
          ></textarea>
          <button type="submit" className={styles.sendButton}>
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
