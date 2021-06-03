import React from "react";
import styles from "./Editor.module.css";

const Editor = (props) => {
  return (
    <React.Fragment>
      <div className={styles.Editor}>
        <div className={styles.ToolBar}>Editor</div>
        <textarea
          id="editor"
          onChange={(event) => {
            props.onChange(event.target.value);
          }}
          value={props.default}
        ></textarea>
      </div>
    </React.Fragment>
  );
};

export default Editor;
