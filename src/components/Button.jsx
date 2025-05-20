import React from "react";
import styles from "../css/Button.module.css";

const Button = (props) => {
  return (
    <a href={props.href} className={styles.cvButton}>
      {props.name}
    </a>
  );
};

export default Button;
