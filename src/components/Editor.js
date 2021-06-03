import React from "react";
import styles from "./Editor.module.css";

const Editor = (props) => {
  return (
    <React.Fragment>
      <div className={styles.Editor}>
        <textarea
          id="editor"
          onChange={(event) => {
            props.onChange(event.target.value);
          }}
          rows="15"
          cols="99"
          value={props.default}
        ></textarea>
      </div>
    </React.Fragment>
  );
};

export default Editor;
