import React from "react";
import styles from "./Preview.module.css";

const Preview = (props) => {
  return (
    <React.Fragment>
      <div id="preview" className={styles.Preview}>
        <p>{props.enteredText}</p>
      </div>
    </React.Fragment>
  );
};

export default Preview;
