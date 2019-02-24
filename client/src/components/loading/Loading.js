import React, { Component } from "react";
import logo from "./logo.svg";
import "./Loading.scss";


class Loading extends Component {
  render() {
    return (
      <div className="Loading">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default Loading;