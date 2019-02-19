import React, { Component } from "react";
import "./App.css";
import ProgressBar from "./components/ProgressBar/ProgressBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProgressBar currentQuestion={17} totalQuestions={20} />
      </div>
    );
  }
}

export default App;