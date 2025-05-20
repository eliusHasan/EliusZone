import React from "react";
import styles from "../css/Contact.module.css";

const Contact = () => {
  return (
    <section className={styles.contactSection} id="contact">
      <h2 className={styles.contactTitle}>Contact Me</h2>
      <p className={styles.contactDescription}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        dignissimos eaque doloremque, nulla mollitia facilis temporibus ullam
        voluptas nostrum consequatur? Fugiat vitae sint quo est eveniet
        perspiciatis eum asperiores ipsam.
      </p>

      <div className={styles.contactContainer}>
        {/* Contact Info */}
        <div className={styles.contactInfo}>
          <div className={styles.infoBox}>
            <span className={styles.icon}>📍</span>
            <div>
              <h4 className={styles.infoTitle}>Address</h4>
              <p>
                4871 Sugar Camp Road,
                <br />
                Owatonna, Minnesota, 55060
              </p>
            </div>
          </div>

          <div className={styles.infoBox}>
            <span className={styles.icon}>📞</span>
            <div>
              <h4 className={styles.infoTitle}>Phone</h4>
              <p>561-456-2321</p>
            </div>
          </div>

          <div className={styles.infoBox}>
            <span className={styles.icon}>✉️</span>
            <div>
              <h4 className={styles.infoTitle}>Email</h4>
              <p>example@email.com</p>
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
