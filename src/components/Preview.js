import React from "react";
import styles from "./Preview.module.css";
import marked from "marked";

const Preview = (props) => {
  marked.setOptions({
    breaks: true,
  });
  return (
    <React.Fragment>
      <div className={styles.Preview}>
        <div className={styles.ToolBar}>Preview</div>
        <div className={styles.PreviewWindow}
          dangerouslySetInnerHTML={{ __html: marked(props.enteredText) }}
          id="preview"
        ></div>
      </div>
    </React.Fragment>
  );
};

export default Preview;
