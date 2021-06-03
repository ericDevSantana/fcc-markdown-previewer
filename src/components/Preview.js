import React from "react";
import styles from "./Preview.module.css";
import marked from "marked";

const Preview = (props) => {
  marked.setOptions({
    breaks: true,
  });
  return (
    <React.Fragment>
      <div
        dangerouslySetInnerHTML={{ __html: marked(props.enteredText) }}
        id="preview"
        className={styles.Preview}
      ></div>
    </React.Fragment>
  );
};

export default Preview;
