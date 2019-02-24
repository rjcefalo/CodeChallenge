import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";

import Home from "./components/home/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Check our products</h1>
        </header>
        <Home />
        <footer>
          <h5>By Ricardo Céfalo</h5>
        </footer>
      </div>
    );
  }
}

export default App;
