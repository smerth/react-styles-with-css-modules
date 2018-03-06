import React, { Component } from "react";
import Title from "./Title/Title";
import Background from "./Background/Background";
import Grid from "./Grid/Grid";
import Rocket from "./Rocket/Rocket";
import Smoke from "./Rocket/Smoke";

// Data
import facts from "./NASA_facts.json";

//styles
import styles from "./App.module.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      facts
    };
  }

  render() {
    return (
      <div className={styles.app}>
        <Title />
        <Background />
        <Grid facts={this.state.facts} />
        <Rocket />
        <Smoke />
      </div>
    );
  }
}

export default App;
