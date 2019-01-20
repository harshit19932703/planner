import React, { Component } from "react";
import "./App.css";
import Cards from "./Components/Cards";

class App extends Component {
  render() {
    return (
      <div className="Container">
        <Cards />
      </div>
    );
  }
}

export default App;
