import React from "react";

//styles
import styles from "./Background.module.css";

export default class Background extends React.Component {
  render() {
    return (
      <div className={styles.background}>
        <h1>Stateful component - Background</h1>
      </div>
    );
  }
}
