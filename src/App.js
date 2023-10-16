/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Controls from "./Components/Controls";
import Header from "./Components/Header";

export class App extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    return (
      <div className="container">
        <Header hour={5} minute={2} second={55} />
        <Controls />
      </div>
    );
  }
}

export default App;
